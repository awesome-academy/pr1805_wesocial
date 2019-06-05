class StaticPagesController < ApplicationController
  before_action :authenticate_user!
  def home
    @user_post = UserPost.new
  end

  def load_privacy_options
    @privacy_options = Privacy.pluck :privacy
  end
end
	