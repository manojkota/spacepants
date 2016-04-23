$(function () {
    
    $('a-enter-vr-button').on('click');
    var gHMD, gPositionSensor;

    navigator.getVRDevices().then(function (devices) {
        for (var i = 0; i < devices.length; ++i) {
            if (devices[i] instanceof HMDVRDevice) {
                gHMD = devices[i];
                break;
            }
        }

        if (gHMD) {
            for (var i = 0; i < devices.length; ++i) {
                if (devices[i] instanceof PositionSensorVRDevice && devices[i].hardwareUnitId === gHMD.hardwareUnitId) {
                    gPositionSensor = devices[i];
                    break;
                }
            }
        }
    });
    /*$('.spacet').on('click', function () {
        $('.page2').removeClass('hidden');
        $('.page1').addClass('hidden');
        $('.switch').removeClass('hidden');
        
    });
    $('.earthq').on('click', function () {
        $('.page1').addClass('hidden');
        $('.page3').removeClass('hidden');
        $('.switch').removeClass('hidden');
    });
    $('.probeProbe').bootstrapSwitch('state', true);


    $('.probeProbe').on('switchChange.bootstrapSwitch', function (event, state) {

        //    alert(this);
        //   alert(event);
        //   alert(state);
        setTimeout(function () {
            if (state) {
                $('.page2').removeClass('hidden');
                $('.page3').addClass('hidden');
            } else {
                $('.page3').removeClass('hidden');
                $('.page2').addClass('hidden');
            }
        },500);
   
    });

    $('.signpostsLinkWrapper').on('click', function () {
        $('.page1').addClass('hidden');
        $('.page2').addClass('hidden');
        $('.page3').addClass('hidden');
        $('.page4').removeClass('hidden');
        $('.switch').addClass('hidden');
        window.location.replace("/index.html");
      //  $(this). sending query string
    });*/
})