$(function() {
	var curr = new Date().getFullYear();
	
	var opt = {
		'date' : {
			preset : 'date',
			minDate : new Date(),
			maxDate : new Date(curr+10, 3, 10, 9, 22),
			stepMinute : 5
		},
		'time': {
                    preset: 'time'                    
         }
	};

	var demo = 'date';

	$('#txtServDate').scroller('destroy').scroller($.extend(opt['date'], {
		theme : 'android',
		mode : 'scroller',
		lang : '',
		display : 'bottom',
		animate : ''
	}));
	
	$('#txtServTime').scroller('destroy').scroller($.extend(opt['time'], {
		theme : 'android',
		mode : 'scroller',
		lang : '',
		display : 'bottom',
		animate : ''
	}));
	
	$('#txtInsRegDate').scroller('destroy').scroller($.extend(opt['date'], {
		theme : 'android',
		mode : 'scroller',
		lang : '',
		display : 'bottom',
		animate : ''
	}));
	
	$('#txtInsExpDate').scroller('destroy').scroller($.extend(opt['date'], {
		theme : 'android',
		mode : 'scroller',
		lang : '',
		display : 'bottom',
		animate : ''
	}));

}); 