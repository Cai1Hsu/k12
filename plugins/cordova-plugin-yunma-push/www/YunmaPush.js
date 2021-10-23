cordova.define("cordova-plugin-yunma-push.YunmaPush", function(require, exports, module) {
var exec = require('cordova/exec'); 

var YunmmaPush = function () { }

YunmmaPush.prototype.getMessage = function (success, error, options) {
    exec(success, error, 'YunmaPush', 'GetMessage', options);
}
window.yunmmaPush = new YunmmaPush();
});
