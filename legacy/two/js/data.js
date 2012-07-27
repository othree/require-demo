
var data = {
    init: function () {
        if (account && device) {
            console.log('data ready');
        } else {
            console.log('data fail');
        }
    }
}

data.init();
