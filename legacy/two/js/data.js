
var Mdata = {
    init: function () {
        if (Maccount && Mdevice) {
            console.log('data ready');
            document.getElementById('data').style.display = 'block';
        } else {
            console.log('data fail');
        }
    }
}

Mdata.init();
