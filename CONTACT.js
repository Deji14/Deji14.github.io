   
   $(document).ready(function()
   {
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#home').css('background-attachment', 'scroll');
      }
   });
   