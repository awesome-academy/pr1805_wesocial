class AddNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :date_of_birth, :datetime
    add_column :users, :is_female, :boolean, default: false
    add_column :users, :address, :text
    add_column :users, :admin, :boolean, default: false
    add_column :users, :avatar, :string
  end
end
