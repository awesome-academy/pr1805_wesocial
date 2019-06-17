class StaticPagesController < ApplicationController
  before_action :authenticate_user!
  def home
    @user_post = UserPost.new
    @user_posts = UserPost.order(created_at: :DESC)
  end

  private

  def load_user
    @user = User.find_by id: params[:id]
  end

  def load_user_post
    @user_post = UserPost.find_by id: params[:id]
  end

  def load_privacy_options
    @privacy_options = Privacy.pluck :privacy
  end
end
	