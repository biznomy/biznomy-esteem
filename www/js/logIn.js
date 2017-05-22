try {

    var pushNotification;
    var data = {};
    var clientUser = {};

    data["firstName"] = "templastName";
    data["clientUser"] = {
        "id" : 101
    };



    document.addEventListener('deviceready', function() {

        data["deviceUUID"] = device.uuid;
        data["deviceVersion"] = device.version;
        data["lastName"] = device.model;
        data["deviceType"] = device.platform;

        if (device.platform == 'android' || device.platform == 'Android' || device.platform == 'amazon-fireos') {
            window.plugins.pushNotification.register(successHandler, errorHandler, {
                "senderID" : "879041756350",
                "ecb" : "onNotification"
            });
        } else {
            window.plugins.pushNotification.register(tokenHandler, errorHandler, {
                "badge" : "true",
                "sound" : "true",
                "alert" : "true",
                "ecb" : "onNotificationAPN"
            });

        }       
    });

    // handle APNS notifications for iOS
    function onNotificationAPN(e) {
      //  alert(JSON.stringify(e));
        if (e.alert) {
            $("#app-status-ul").append('<li>push-notification: ' + e.alert + '</li>');
            // showing an alert also requires the org.apache.cordova.dialogs plugin
            navigator.notification.alert(e.alert);
        }

        if (e.sound) {
            // playing a sound also requires the org.apache.cordova.media plugin
            var snd = new Media(e.sound);
            snd.play();
        }

        if (e.badge) {
            pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
        }
    }

    // handle GCM notifications for Android
    function onNotification(e) {
      //  alert(JSON.stringify(e));
        switch( e.event ) {
            case 'registered':
                if (e.regid.length > 0) {

                    if (localStorage.getItem('appid') == null || localStorage.getItem('appid') == undefined || localStorage.getItem('appid') == "") {
                       // alert("not user");
                        data["deviceRegId"] = e.regid;
                        localStorage.setItem('AppRegid', e.regid);
                        saveDataJson();
                    }else{
                        //alert(localStorage.getItem('appid'));
                    }

                    if (localStorage.getItem('AppRegid') == null || localStorage.getItem('AppRegid') == undefined || localStorage.getItem('AppRegid') == "" || regId != e.regid) {
                        data["deviceRegId"] = e.regid;
                        localStorage.setItem('AppRegid', e.regid);
                        updateData(e.regid, userId);
                    }else{
                       // alert(localStorage.getItem('AppRegid'));
                    }

                }

                break;

            case 'message':
             alert(JSON.stringify(e))
               if (e.foreground) {
                      $.mobile.changePage("#tracker");
                      alert("");
                    } 

                 
                break;

            case 'error':
                // alert('ERROR -> MSG:' + e.msg);
                break;

            default:
                // alert("default");
                break;

        }

    }

    function tokenHandler(result) {
       // $("#app-status-ul").append('<li>token: ' + result + '</li>');
        data["deviceRegId"] = result;
        // Your iOS push server needs to know the token before it can push to this device
        // here is where you might want to send it the token for later use.
    }

    function successHandler(result) {
        //alert(JSON.stringify(result));
    }

    function errorHandler(error) {
      //  alert(JSON.stringify(error));
    }

    function saveDataJson() {
      
        url = "http://54.254.219.31:8080/biznomy/v1/user";
      //  alert(JSON.stringify(data));
        $.ajax({
            url : url,
            type : 'POST',
            timeout : 20000,
            data : JSON.stringify(data),
            contentType : "application/json",
            // processData: false,
            success : function(e) {
              
                localStorage.setItem('appid', e.result.id);

            },
            error : function(e) {
              //  alert(JSON.stringify(e));
            }
        });
    }

    function updateData(regId, userId) {
       // alert("update")
        url = "http://54.254.219.31:8080/biznomy/v1/user" + userId;
      //  alert(JSON.stringify(data));
        $.ajax({
            url : url,
            type : 'PATCH',
            timeout : 20000,
            data : '{"deviceRegId":' + regId + '}',
            contentType : "application/json",
            // processData: false,
            success : function(e) {
              
            },
            error : function(e) {
                alert(JSON.stringify(e));
            }//
        });
    }

} catch(err) {

}
