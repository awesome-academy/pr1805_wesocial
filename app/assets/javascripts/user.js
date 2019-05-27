var ready = function () {
  $(".start-conversation").click(function(e){
    e.preventDefault();
    var sender_id = $(this).data("sid");
    var receiver_id = $(this).data("rid");
    $.post("/conversations",
          {conversation: {
            conversation_type: 1,
            conversation_users_attributes:[{user_id: ["", sender_id, receiver_id]}]
        }}, function(data){
      chatWith(data.conversation_id);
    });
  });

  $(".start-by-conversation").click(function(e){
    e.preventDefault();
      chatWith($(this).data("cid"));
  });

  $(document).on("click", ".toggleChatBox", function(e){
    e.preventDefault();
    var id = $(this).data("cid");
    toggleChatBoxGrowth(id);
  });

  $(document).on("click", ".closeChatBox", function(e){
    e.preventDefault();

    var id = $(this).data("cid");
    closeChatBox(id);
  });

  $("a.conversation").click(function(e){
    e.preventDefault();

    var conversation_id = $(this).data("cid");
    chatWith(conversation_id);
  });

  $(document).on("keydown", ".chatboxtextarea", function(e){
    var id = $(this).data("cid");
    checkChatBoxInputKey(e, $(this), id);
  });

  $(document).on("click", ".addMoreFriend", function(e){
    e.preventDefault();
    var id = $(this).data("cid");
    addMoreFriend(id);
  });

  $(document).on("submit", "#new_conversation", function(e) {
        e.preventDefault();
        var addedUsers = Array.from($(this).find("select")[0].selectedOptions).map(v=>v.value);
        if (addedUsers.length == 0 ){
          return;
        }
        var conversation_type = $(this).find("input[id=conversation_conversation_type]").val();
        var origin_conversation = $(this).find("input[id=conversation_origin_conversation]").val();
        addedUsers.unshift("");
        clearAfterSubmit(origin_conversation);
        // var oldUsers =
        // var sender_id = $(this).data("sid");
        // var receiver_id = $(this).data("rid");
        $.post("/conversations",
            {conversation: {
              conversation_type: conversation_type,
              origin_conversation: origin_conversation,
              conversation_users_attributes:[{user_id: addedUsers}]
          }}, function(data){
        chatWith(data.conversation_id);
        });
     });
  $(document).on("submit", ".edit_conversation", function(e){
    e.preventDefault();
    var addedUsers = Array.from($(this).find("select")[0].selectedOptions).map(v=>v.value);
    if (addedUsers.length == 0 ){
      return;
    }
    var conversation_type = $(this).find("input[id=conversation_conversation_type]").val();
    var origin_conversation = $(this).find("input[id=conversation_origin_conversation]").val();
    addedUsers.unshift("");
    clearAfterSubmit(origin_conversation);
    var dataObject = {conversation: {
          conversation_type: conversation_type,
          origin_conversation: origin_conversation,
          conversation_users_attributes:[{user_id: addedUsers}]
      }};
    $.ajax({
       url: "/conversations/" + origin_conversation,
       type: "PUT",
       data: JSON.stringify(dataObject),
       headers: {"Content-Type": "application/json"},
       dataType: "json",
       success: function(data) {
         chatWith(data.conversation_id);
       }
    });
  });

}

$(document).ready(ready);
$(document).on("ready:load", ready);
