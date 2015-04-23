function jscolor_removeHexStrings(){
  $('.color').each(function(){
    $(this).css('color', $(this).css('background-color'));
    $(this).blur(function(){
      setTimeout("jscolor_removeHexStrings()", 10);
    });
  });
}

$(document).ready(function() {
  jscolor.init()
  jscolor_removeHexStrings()
});