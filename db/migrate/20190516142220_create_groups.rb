class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :description
      t.boolean :privacy
      t.boolean :blocked
      t.string :cover

      t.timestamps
    end
  end
end
