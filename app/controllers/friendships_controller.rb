class FriendshipsController < ApplicationController
  before_action :correct_friendship

  def create
    user = User.find(params[:receiver_id])
    current_user.requesting(user)
    redirect_to user
  end

  def update
    @friendship.update! status: true
    flash[:success] = "You and #{User.find(@friendship.sender_id).name} are friends now!"
    redirect_to friends_user_path(current_user)
  end

  def destroy
    user = Friendship.find(params[:id]).receiver
    current_user.un_request(user)
    redirect_to user
  end

  private

  def friendship_params
    params.require(:friendship).permit :status
  end

  def correct_friendship
    @friendship = current_user.request_receivers.find_by sender_id: params[:id]
  end
end
