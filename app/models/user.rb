class User < ApplicationRecord
  # :lockable, :timeoutable, :trackable,
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:facebook, :google_oauth2]

  acts_as_voter
  has_many :friend_requesters, class_name: Friendship.name,
    foreign_key: "sender_id", dependent: :destroy
  has_many :request_receivers, class_name: Friendship.name,
    foreign_key: "receiver_id", dependent: :destroy
  has_many :requests, through: :friend_requesters, source: :receiver
  has_many :friends, through: :request_receivers, source: :sender
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :group_user_posts
  has_many :user_posts
  has_many :chatroom_users
  has_many :chatrooms, through: :chatroom_users
  has_many :messages

  mount_uploader :avatar, AvatarUploader
  mount_uploader :cover, CoverUploader

  def self.new_with_session params, session
    super.tap do |user|
      if data = session["devise.facebook_data"] &&
        session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def self.from_omniauth auth
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name
    end
  end

  def requesting(other_user)
    requests << other_user
  end

  def un_request(other_user)
    requests.delete(other_user)
  end

  def requesting?(other_user)
    requests.include?(other_user)
  end
end
