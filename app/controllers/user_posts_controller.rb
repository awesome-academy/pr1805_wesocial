class UserPostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def index; end

  def create
    @user_post = current_user.user_posts.build(user_post_params)
    if @user_post.save
      flash[:success] = I18n.t"post_suc"
      redirect_to root_url
    else
      render "static_pages/home"
    end
  end

  def destroy
    @user_post.destroy
    flash[:success] = I18n.t"post_del_suc"
    redirect_to request.referrer || root_url
  end

  def show
    @user = User.find_by(params[:id])
    @user_post = @user.user_posts.paginate(page: params[:page])
  end

  private

  def user_post_params
    params.require(:user_post).permit(:content, :share_post_id,
      :share_to_id, :privacy, :taged_user, :file)
  end

  def correct_user
    @user_post = current_user.user_posts.find_by(id: params[:id])
    redirect_to root_url if @user_post.nil?
  end
end
