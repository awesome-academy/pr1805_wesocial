class RemoveReceiverIdFromConversation < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :receiver_id, :integer
  end
end
