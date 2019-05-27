class AddDetailsToGroups < ActiveRecord::Migration[5.2]
  def change
    change_column_default :groups, :blocked, false
    change_column_default :groups, :privacy, false
    change_column :groups, :description, :text
    add_column :groups, :email, :string
    add_column :groups, :website, :string
    add_column :groups, :phone, :integer
    add_column :groups, :address, :text
    add_column :groups, :facebook, :string
    add_column :groups, :twitter, :string
    add_column :groups, :instagram, :string
  end
end
