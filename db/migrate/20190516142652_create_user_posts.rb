class CreateUserPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_posts do |t|
      t.references :user
      t.text :content
      t.string :like_count
      t.string :integer
      t.string :taged_users
      t.integer :shared_count
      t.boolean :privacy
      t.string :file
      t.integer :share_post_id
      t.string :share_to
      t.integer :share_to_id

      t.timestamps
    end
  end
end
