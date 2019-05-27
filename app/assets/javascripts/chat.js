/*

Copyright (c) 2009 Anant Garg (anantgarg.com | inscripts.com)

This script may be used for non-commercial purposes only. For any
commercial purposes, please contact the author at
anant.garg@inscripts.com

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

var windowFocus = true;
var username;
var originalTitle;
var blinkOrder = 0;
var originalChatHeight = "436px";

var chatboxFocus = new Array();
var newMessages = new Array();
var newMessagesWin = new Array();
var chatBoxes = new Array();

$(document).ready(function(){
  originalTitle = document.title;

  $([window, document]).blur(function(){
    windowFocus = false;
  }).focus(function(){
    windowFocus = true;
    document.title = originalTitle;
  });
});

function restructureChatBoxes() {
  align = 0;
  for (x in chatBoxes) {
    chatboxtitle = chatBoxes[x];

    if ($("#chatbox_"+chatboxtitle).css('display') != 'none') {
      if (align == 0) {
        $("#chatbox_"+chatboxtitle).css('right', '70px');
      } else {
        width = (align)*(275+7)+70;
        $("#chatbox_"+chatboxtitle).css('right', width+'px');
      }
      align++;
    }
  }
}

function chatWith(chatuser) {
  localStorage.setItem('chatUser',chatuser);
  setTimeout(() => {}, 1000);
  createChatBox(chatuser);
  $("#chatbox_"+chatuser+" .chatboxtextarea").focus();
}

function clearAfterSubmit (chatboxtitle){
    var optionsLength = $("#chatbox_"+chatboxtitle+" .drop-display .item").length;
    for (i = 0; i < optionsLength; i++) {
      var eClass = $("#chatbox_"+chatboxtitle+" .drop-display .item")[i];
      var eIndex = eClass.childNodes.length -1;
      if(eClass.className == "item add"||
      eClass.className == "item "){
        eClass.childNodes[eIndex].click();
      }
    }
    // $("#chatbox_"+chatboxtitle+" .drop")[0].classList.remove("open");
    var messageArea = $('#chatbox_'+ chatboxtitle + ' .chatboxcontent');
    $('#chatbox_'+ chatboxtitle + ' .drop-container').css("display", "none");
    messageArea.css("height","70%");
}
function createChatBox(chatboxtitle,minimizeChatBox) {
  if ($("#chatbox_"+chatboxtitle).length > 0) {
    if ($("#chatbox_"+chatboxtitle).css('display') == 'none') {
      $("#chatbox_"+chatboxtitle).css('display','block');
      restructureChatBoxes();
    }
    clearAfterSubmit(chatboxtitle);
    $("#chatbox_"+chatboxtitle+" .chatboxtextarea").focus();
    return;
  }

  $("body").append('<div id="chatbox_' + chatboxtitle + '" class="chatbox"></div>');

  $.get("conversations/" + chatboxtitle, function (data) {
      $("#chatbox_" + chatboxtitle).html(data);
      $("#chatbox_" + chatboxtitle + " .chatboxcontent").scrollTop(9999999);
  }, "html");

  $("#chatbox_"+chatboxtitle).css('bottom', '0px');

  chatBoxeslength = 0;

  for (x in chatBoxes) {
    if ($("#chatbox_"+chatBoxes[x]).css('display') != 'none') {
      chatBoxeslength++;
    }
  }

  if (chatBoxeslength == 0) {
    $("#chatbox_"+chatboxtitle).css('right', '70px');
  } else {
    width = (chatBoxeslength)*(275+7)+70;
    $("#chatbox_"+chatboxtitle).css('right', width+'px');
  }

  chatBoxes.push(chatboxtitle);

  if (minimizeChatBox == 1) {
    minimizedChatBoxes = new Array();

    if ($.cookie('chatbox_minimized')) {
      minimizedChatBoxes = $.cookie('chatbox_minimized').split(/\|/);
    }
    minimize = 0;
    for (j=0;j<minimizedChatBoxes.length;j++) {
      if (minimizedChatBoxes[j] == chatboxtitle) {
        minimize = 1;
      }
    }

    if (minimize == 1) {
      $('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display','none');
      $('#chatbox_'+chatboxtitle+' .chatboxinput').css('display','none');
    }
  }

  chatboxFocus[chatboxtitle] = false;

  $("#chatbox_"+chatboxtitle+" .chatboxtextarea").blur(function(){
    chatboxFocus[chatboxtitle] = false;
    $("#chatbox_"+chatboxtitle+" .chatboxtextarea").removeClass('chatboxtextareaselected');
  }).focus(function(){
    chatboxFocus[chatboxtitle] = true;
    newMessages[chatboxtitle] = false;
    $('#chatbox_'+chatboxtitle+' .chatboxhead').removeClass('chatboxblink');
    $("#chatbox_"+chatboxtitle+" .chatboxtextarea").addClass('chatboxtextareaselected');
  });

  $("#chatbox_"+chatboxtitle).click(function() {
    if ($('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display') != 'none') {
      $("#chatbox_"+chatboxtitle+" .chatboxtextarea").focus();
    }
  });

// dropdown

  $("#chatbox_"+chatboxtitle).show();
}

function closeChatBox(chatboxtitle) {
  // $('#chatbox_'+chatboxtitle).css('display','none');
  $('#chatbox_'+chatboxtitle).remove();
  var index = chatBoxes.indexOf(chatboxtitle);
  if (index !== -1) chatBoxes.splice(index, 1);
  restructureChatBoxes();
}

function toggleChatBoxGrowth(chatboxtitle) {
  if ($('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display') == 'none') {

    var minimizedChatBoxes = new Array();

    if ($.cookie('chatbox_minimized')) {
      minimizedChatBoxes = $.cookie('chatbox_minimized').split(/\|/);
    }

    var newCookie = '';

    for (i=0;i<minimizedChatBoxes.length;i++) {
      if (minimizedChatBoxes[i] != chatboxtitle) {
        newCookie += chatboxtitle+'|';
      }
    }

    newCookie = newCookie.slice(0, -1)


    $.cookie('chatbox_minimized', newCookie);
    $('#chatbox_'+ chatboxtitle).css('height', originalChatHeight);
    $('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display','block');
    $('#chatbox_'+chatboxtitle+' .chatboxinput').css('display','block');
    $("#chatbox_"+chatboxtitle+" .chatboxcontent").scrollTop($("#chatbox_"+chatboxtitle+" .media-list")[0].scrollHeight);
  } else {

    var newCookie = chatboxtitle;

    if ($.cookie('chatbox_minimized')) {
      newCookie += '|'+$.cookie('chatbox_minimized');
    }

    var miniSize = $('#chatbox_'+ chatboxtitle + ' .chatboxhead').css("height");
    $.cookie('chatbox_minimized',newCookie);
    $('#chatbox_'+chatboxtitle+' .chatboxcontent').css('display','none');
    $('#chatbox_'+chatboxtitle+' .chatboxinput').css('display','none');
    $('#chatbox_'+ chatboxtitle + ' .drop-container').css("display", "none");
    $('#chatbox_'+ chatboxtitle).css('height', miniSize);
  }

}

function addMoreFriend(chatboxtitle) {
  var dropContainer = $('#chatbox_'+ chatboxtitle + ' .drop-container');
  var messageArea = $('#chatbox_'+ chatboxtitle + ' .chatboxcontent');
  if(dropContainer.css("display") == "none"){
    dropContainer.css("display", "block");
    dropContainer.css("height","25%");
    messageArea.css("height", "45%")
  }else{
    dropContainer.css("display", "none");
    messageArea.css("height","70%");
  }
}

function checkChatBoxInputKey(event,chatboxtextarea,chatboxtitle) {

  if(event.keyCode == 13 && event.shiftKey == 0)  {
    event.preventDefault();
    message = $(chatboxtextarea).val();
    message = message.replace(/^\s+|\s+$/g,"");

    if (message != '') {
      console.log("123");
      cForm = document.querySelector("#conversation_form_" + chatboxtitle);
      Rails.fire(cForm, 'submit');
      $(chatboxtextarea).val('');
      $(chatboxtextarea).focus();
      $(chatboxtextarea).css('height','44px');
    }
  }

  var adjustedHeight = chatboxtextarea.clientHeight;
  var maxHeight = 94;

  if (maxHeight > adjustedHeight) {
    adjustedHeight = Math.max(chatboxtextarea.scrollHeight, adjustedHeight);
    if (maxHeight)
      adjustedHeight = Math.min(maxHeight, adjustedHeight);
    if (adjustedHeight > chatboxtextarea.clientHeight)
      $(chatboxtextarea).css('height',adjustedHeight+8 +'px');
  } else {
    $(chatboxtextarea).css('overflow','auto');
  }

}

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
