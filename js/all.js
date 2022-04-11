
//漢堡選單//
$(document).ready(function() {
   $('.menu-humbger').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});

//radio-off//
$(function(){
   $('input:radio').click(function(){
       var domName = $(this).attr('name');
       var $radio = $(this);
       if ($radio.data('waschecked') == true){
           $radio.prop('checked', false);
           $("input:radio[name='" + domName + "']").data('waschecked',false);
       } else {
           $radio.prop('checked', true);
           $("input:radio[name='" + domName + "']").data('waschecked',false);
           $radio.data('waschecked', true);
       }
       console.log("選中狀態:",$(this).prop("checked"));
       console.log($("input:radio[name='" + domName + "']:checked").val());
   });
});