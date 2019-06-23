module ApplicationHelper

  def relationship
    current_user.friend_requesters.find_by receiver_id: params[:id]
  end

  def count_friends user
    user.request_receivers.where(status: true).size + user.friend_requesters.where(status: true).size
  end

  def friend_since (user)
    current_user.request_receivers.where(sender_id: user.id).blank?
  end
end
