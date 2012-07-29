
var Mrender = {
    init: function () {
        if (Maccount && Mdevice && Mdata) {
            console.log('render ready');
            document.getElementById('render').style.display = 'block';
        } else {
            console.log('render fail');
        }
    }
}

Mrender.init();
