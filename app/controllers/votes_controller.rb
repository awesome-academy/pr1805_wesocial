class VotesController < ApplicationController
  def create
    @user_post = UserPost.find_by id: params[:user_post_id]
    @user_post.liked_by current_user
  end

  def destroy
    @user_post = UserPost.find_by id: params[:user_post_id]
    @user_post.disliked_by current_user
  end
end
