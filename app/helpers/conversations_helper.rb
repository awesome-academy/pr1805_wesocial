module ConversationsHelper
  # def conversation_receiver conversation
  #   conversation.conversation_users.each do |user|
  #     unless user.user_id == current_user.id
  #       return user.user
  #     end
  #     return current_user
  #   end
  # end
  def existed_multiple user_ids
    Conversation.involving(current_user).each do |c|
      if c.users.pluck(:id).sort == user_ids.sort
        return c
      end
    end
    return nil
  end

  def self_chat user_ids
    Conversation.single_involving(current_user).each do |c|
      if c.users.pluck(:id) == user_ids
        return c
      end
    end
    return nil
  end
end
