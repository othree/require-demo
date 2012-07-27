
var render = {
    init: function () {
        if (account && device && data) {
            console.log('render ready');
        } else {
            console.log('render fail');
        }
    }
}

render.init();
