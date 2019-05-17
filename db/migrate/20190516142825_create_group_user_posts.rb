class CreateGroupUserPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :group_user_posts do |t|
      t.references :user
      t.references :group
      t.text :content
      t.string :like_count
      t.string :integer
      t.string :taged_users
      t.integer :shared_count
      t.string :file
      t.integer :share_post_id
      t.string :share_to
      t.integer :share_to_id
      t.boolean :approved

      t.timestamps
    end
  end
end
