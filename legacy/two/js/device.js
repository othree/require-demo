
var device = {
    init: function () {
        if (account) {
            console.log('device ready');
        } else {
            console.log('device fail');
        }
    }
}

device.init();
