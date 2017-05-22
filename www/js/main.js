/*home page*/
var flag = false;

function touchResolver() {
	if (!flag) {
		flag = true;
		setTimeout(function() {
			flag = false;
		}, 500);
		// console.log("waiting");
	}
	//return false;
}


$(document).on("touchstart click", ".icon", function() {
	if (!flag) {
		flag = true;
		setTimeout(function() {
			flag = false;
		}, 500);
		var s = $(this).attr("href");
		window.location.assign(s);
	}
	return false;
});
/*hotline page*/
$(document).on("touchstart click", ".hotnum", function() {
	if (!flag) {
		flag = true;
		setTimeout(function() {
			flag = false;
		}, 500);
		var dail = $(this).attr("tel");
		window.location.assign(dail);
	}
	//return false;

});

jQuery.validator.setDefaults({
	debug : true
});

/*mycara form*/
$("#firstform").validate({
	rules : {
		name : {
			required : true,
			minlength : 3,
			maxlength : 10
		},
		carname : {
			required : true
		},
		regnumber : {
			required : true,
			minlength : 10,
			maxlength : 16
		},
		chasisnumber : {
			required : true,
			minlength : 8,
			maxlength : 10
		}
	}
});

$('#firstform').on("submit", function(event) {
	event.preventDefault();
	var status = true;
	var form = $('#firstform').serializeArray();
	for (var x in form) {
		if (form[x].value == "") {
			status = false;
		}
	}

	if (status) {
		new $.Zebra_Dialog("Thank you we will contact u soon", {
			'custom_class' : 'myclass',
			'title' : 'My Car Info'
		});
		$('#firstform')[0].reset();
	}
});

/*service page*/
$(document).on("click",".get-it",function(){
    
    new $.Zebra_Dialog("Thank you we will contact u soon", {
            'custom_class' : 'myclass',
            'title' : 'Book it'
        });
    
});


var s = $("#serviceform").validate({
	rules : {
		name : {
			required : true,
			minlength : 3,
			maxlength : 10
		},
		carmodel : {
			required : true
		},
		date : {
			required : true,
			
		},
		time : {
			required : true
			
		}
	}
});

$('#serviceform').on("submit", function(event) {
	event.preventDefault();
	var status = true;
	var form = $('#serviceform').serializeArray();
	for (var x in form) {
		if (form[x].value == "") {
			status = false;
		}
	}

	if (status) {
		new $.Zebra_Dialog("Contact You Soon", {
			'custom_class' : 'myclass',
			'title' : 'Service'
		});
		$('#serviceform')[0].reset();
	}
});

/*insurance page*/

$("#insuranceform").validate({
	rules : {
		carmodel : {
			required : true,
			minlength : 3,
			maxlength : 10
		},
		regdate : {
			required : true,
			date : true
		},
		expirydate : {
			required : true,
			date : true
		}
	}
});

$('#insuranceform').on("submit", function(event) {
	event.preventDefault();
	var status = true;
	var form = $('#insuranceform').serializeArray();
	for (var x in form) {
		if (form[x].value == "") {
			status = false;
		}
	}

	if (status) {
		new $.Zebra_Dialog("Contact You Soon", {
			'custom_class' : 'myclass',
			'title' : 'Insurance'
		});
		$('#insuranceform')[0].reset();
	}
});
