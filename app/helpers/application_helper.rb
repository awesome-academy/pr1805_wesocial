module ApplicationHelper
	def show_post_user_avatar post
		if post.user.avatar.present?
			@user.avatar = User.avatar.thumbnail_url
		else
			image_tag "Anonymous-Avatar.png"
		end
	end

	def show_comment_user_avatar comment
		if comment.user.avatar.present?
			@user.avatar = User.avatar.thumbnail_url
		else
			image_tag "Anonymous-Avatar.png", width: 30, height: 30
		end
	end

	def show_post_file post
		if post.file.present?
			if post.file.filename.split(".").last == ["mp4", "wmv", "avi", "flv", "gif"]  
				video_tag @user_post.file_url
			else
				cl_image_tag post.file_url, width: 518, height: 380
			end
		end
	end

	def like_post_button post
		if user_signed_in?
			if (current_user.voted_down_on? post) || (!ActsAsVotable::Vote.where(voter_id: current_user,votable_id: @user_post.id).present?) 
				render "shared/like_form", post: post 
			else 
				render "shared/unlike_form", post: post 
			end 
		end 
	end

	def like_comment_button comment
		if user_signed_in?
			if (current_user.voted_down_on? comment) || (!ActsAsVotable::Vote.where(voter_id: current_user,votable_id: @comment.id).present?) 
				render "shared/like_form", post: post 
			else 
				render "shared/unlike_form", post: post 
			end 
		end 
	end

	def user_avatar user
		if user.avatar.present?
			@user.avatar = User.avatar.thumbnail_url
		else
			image_tag "Anonymous-Avatar.png", width: 30, height: 30
		end
	end
end
