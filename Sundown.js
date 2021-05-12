   
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
      
   var map;
   var marker;
   var geocoder;
   function GoogleMapInit(id, latitude, longitude, address) 
   {    
      var latlng = new google.maps.LatLng(latitude, longitude);
      var latlngMarker = new google.maps.LatLng(latitude, longitude);
      var mapOptions = 
      {        
         center: latlng,        
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         mapTypeControl: true,        
         scrollwheel: true,
         streetViewControl: true,        
         zoom: 8,
         zoomControl: true,        
         zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL }
      }
      element = document.getElementById(id);
      map = new google.maps.Map(element, mapOptions);   
      marker = new google.maps.Marker({ draggable:true, map: map, position: latlngMarker});   
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': address}, function(results, status) 
      {
         if (status == google.maps.GeocoderStatus.OK) 
         {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker(
            {
               map: map, 
               position: results[0].geometry.location
            });
         } 
         else 
         {
           //    alert("Geocode was not successful: " + status);
         }
      });
   }
   GoogleMapInit('GoogleMaps', 33.46494158176508, -102.48893340237252, '107 S Slaughter Ave, Sundown, TX 79372, United States');
   