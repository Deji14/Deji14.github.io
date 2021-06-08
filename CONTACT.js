   
   $(document).ready(function()
   {
      $("#Layer1").stickylayer({orientation: 1, position: [0, 0], delay: 500});
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#home').css('background-attachment', 'scroll');
      }
   });
   