class ChangeFileBackToStringInUserPosts < ActiveRecord::Migration[5.2]
  def change
  	change_column :user_posts, :file, :string
  end
end
