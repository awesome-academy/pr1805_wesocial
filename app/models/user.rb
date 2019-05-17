class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :confirmable, :lockable, :timeoutable, :trackable, :omniauthable

  has_many :friend_requester, class_name: Friendship.name, 
    foreign_key: "sender_id", dependent: :destroy
  has_many :request_receiver, class_name: Friendship.name, 
    foreign_key: "receiver_id", dependent: :destroy
  has_many :requests, through: :friend_requester, source: :receiver
  has_many :friends, through: :request_receiver, source: :sender
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :group_user_posts
  has_many :user_posts
  has_many :chatroom_users
  has_many :chatrooms, through: :chatroom_users
  has_many :messages
end
