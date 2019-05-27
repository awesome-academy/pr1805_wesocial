class Conversation < ActiveRecord::Base
  # belongs_to :sender, class_name: User.name, foreign_key: :sender_id
  # belongs_to :receiver, class_name: User.name, foreign_key: :receiver_id

  has_many :messages, dependent: :destroy
  has_many :conversation_users, dependent: :destroy
  has_many :users, through: :conversation_users
  accepts_nested_attributes_for :conversation_users


  # validates_uniqueness_of :sender_id, scope: :receiver_id

  scope :involving, ->(user) do
    joins(:conversation_users).where("user_id = ? AND conversation_type = 2", user.id).group(:id)
  end

  scope :single_involving, ->(user) do
    joins(:conversation_users).where("user_id = ? AND conversation_type = 1", user.id).group(:id)
  end

  scope :single_chat, -> {where(:conversation_type => "1")}
end
