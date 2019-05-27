class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :html, :json

  def create
    @conversation = Conversation.find params[:conversation_id]
    @message = @conversation.messages.build message_params
    @message.user = current_user
    if @message.save!
      respond_to do |format|
        format.html {redirect_to root_path}
        format.js
      end
    end
  end

  private
  def message_params
    params.require(:message).permit :content
  end
end
