class ConversationsController < ApplicationController
  layout false
  include ConversationsHelper
  before_action :convert_to_i, only: [:create, :update]

  def create
    c_type = params[:conversation][:conversation_type]
    user_ids = params[:conversation][:conversation_users_attributes]['0'][:user_id]
    user_ids.delete_at(0)
    if c_type==1
      sender = User.find_by(id: user_ids[0])
      receiver =  User.find_by(id: user_ids[1])
      if sender == receiver
        common_chat = self_chat [sender.id, sender.id]
      else
        common_chat = sender.conversations.single_chat & receiver.conversations.single_chat
      end

      if common_chat.present?
        if common_chat.is_a?(Array)
          @conversation = common_chat.first
        else
          @conversation = common_chat
        end
      else
        @conversation = Conversation.create! :conversation_type => c_type
        create_conversation_users user_ids, @conversation.id
      end
    else
      old_conversation_id = params[:conversation][:origin_conversation]
      old_user_ids = Conversation.find_by(id: old_conversation_id).users.pluck(:id)
      user_ids += old_user_ids
      existance = existed_multiple user_ids
      if existance.present?
        @conversation = existance
      else
        @conversation = Conversation.create! :conversation_type => c_type
        create_conversation_users user_ids, @conversation.id
      end
    end
    render json: {conversation_id: @conversation.id}
  end

  def show
    # @conversations = Conversation.involving(current_user).order "created_at DESC"
    @conversation = Conversation.find params[:id]
    @conversation_ = Conversation.new
    @conversation_user = @conversation_.conversation_users.build
    receiver = @conversation.users.where.not(id: current_user.id)
    @receiver_name = ""
    @current_name = current_user.name.nil? ? "" : current_user.name
    if receiver.nil?
      receiver_ids = current_user.id
    else
      @receiver_name = receiver.pluck(:name).compact.join(",")
      receiver_ids = receiver.pluck(:id) << current_user.id
    end
    @users = User.all.where.not(id: receiver_ids)
    @messages = @conversation.messages
    @message = Message.new
  end

  def update
    user_ids = params[:conversation][:conversation_users_attributes][0][:user_id]
    user_ids.delete_at(0)

    old_conversation_id = params[:conversation][:origin_conversation]
    old_user_ids = Conversation.find_by(id: old_conversation_id).users.pluck(:id)
    new_user_ids = user_ids
    user_ids += old_user_ids
    existance = existed_multiple user_ids
    if existance.present?
      @conversation = existance
    else
      @conversation = Conversation.find_by(id: old_conversation_id)
      create_conversation_users new_user_ids, old_conversation_id
    end

    render json: {conversation_id: @conversation.id}
  end

  private

  def create_conversation_users user_ids, c_id
    # byebug
    for i in 0..user_ids.count - 1 do
      # byebug
      ConversationUser.create! :conversation_id => c_id, :user_id => user_ids[i]
    end
  end

  def convert_to_i
    params[:conversation][:conversation_type] = params[:conversation][:conversation_type].to_i
    # byebug
    if params[:conversation][:conversation_users_attributes].is_a?(Array)
      iZero = 0
    else
      iZero = '0'
    end
    # byebug
    conver_size = (params[:conversation][:conversation_users_attributes][iZero][:user_id].count) - 1
    for i in 0..conver_size do
      # byebug
      params[:conversation][:conversation_users_attributes][iZero][:user_id][i] =
      params[:conversation][:conversation_users_attributes][iZero][:user_id][i].to_i
    end
  end

  def conversation_params
    # byebug
    params.require(:conversation).permit(:conversation_type, :origin_conversation, conversation_users_attributes: [:user_id])
  end
end
