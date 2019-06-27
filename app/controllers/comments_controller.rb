class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_comment, only: [:destroy, :create]
  before_action :load_user_post, only: [:new, :create]
  before_action :load_group_user_post, only: [:new, :create]

  def new
    @comment = @user_post.comments.build
    @group_comment = @group_user_post.comments.build
  end

  def create
    @comment = @user_post.comments.build(comment_params)
    @comment.save
    redirect_to root_url
  end

  def destroy
    @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :content, :like_count)
  end

	def load_user_post
  	@user_post = UserPost.find_by id: params[:user_post_id]
	end

  def load_group_user_post
    @group_user_post = GroupUserPost.find_by id: params[:group_user_post_id]
  end

  def set_comment
    @comment = Comment.find_by id: params[:id]
  end
end