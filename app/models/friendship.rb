class Friendship < ApplicationRecord
  belongs_to :sender, class_name: User.name
  belongs_to :receiver, class_name: User.name

  validates :sender_id, presence: true
  validates :receiver_id, presence: true
end
