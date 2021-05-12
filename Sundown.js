   
   $(document).ready(function()
   {
      $('#wb_Text2').addClass('visibility-hidden');
      function onScrollText2()
      {
         var $obj = $("#wb_Text2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text2', 'transform-lightspeed-in', 150, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text2').inViewPort(true))
      {
         $('#wb_Text2').addClass("in-viewport");
      }
      onScrollText2();
      $(window).scroll(function(event)
      {
         onScrollText2();
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#home').css('background-attachment', 'scroll');
      }
   });
   