class StaticPagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  before_action :load_user_post   

  def home
    @user_post = UserPost.new 
    @user_posts = UserPost.order(created_at: :DESC)
    @comment = Comment.new 
    @comments = Comment.order(created_at: :DESC)
  end

  private

  def load_user
    @user = User.find_by id: params[:user_id]
  end

  def load_user_post
    @user_post = UserPost.find_by id: params[:user_post_id]
  end

  def load_privacy_options
    @privacy_options = Privacy.pluck :privacy
  end
end
	