class RemoveSenderIdFromConversation < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :sender_id, :integer
    add_column :conversations, :conversation_type, :integer
  end
end
