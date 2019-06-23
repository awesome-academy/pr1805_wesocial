class UsersController < ApplicationController
  before_action :correct_user

  def show; end

  def edit; end

  def friends_list
    @senders = User.where(id: @user.request_receivers.where(status: true).pluck(:sender_id))
    @receivers = User.where(id: @user.friend_requesters.where(status: true))
  end

  def requests
    @users = current_user.requests
  end

  def friends
    @user = User.find_by id: params[:id]
    @users = @user.friends
  end

  private
  def correct_user
    @user = User.find_by id: params[:id]
  end
end
