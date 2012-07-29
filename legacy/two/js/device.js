
var Mdevice = {
    init: function () {
        if (Maccount) {
            console.log('device ready');
            document.getElementById('device').style.display = 'block';
        } else {
            console.log('device fail');
        }
    }
}

Mdevice.init();
