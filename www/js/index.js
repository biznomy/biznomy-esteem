
 document.addEventListener('deviceready', onDeviceReady, false);
 function onDeviceReady(){
 	
 	if (parseFloat(window.device.version) >= 7.0) {
          document.body.style.marginTop = "20px";
          // OR do whatever layout you need here, to expand a navigation bar etc
    }
    navigator.splashscreen.hide();

 }

$(document).on('ready', function(event) {
	var width = window.innerWidth;
	var height = window.innerHeight;
	//console.log(width+" : "+height);

	$(".carimg img").width(width);

	jQuery("#gallery").unitegallery({
		tiles_type : "justified"
	});
});


/*
 new $.Zebra_Dialog(message, {
 'custom_class':  'myclass',
 'title': 'Login Error'
 });
 */