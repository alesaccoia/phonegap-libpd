//
//  libPd cordova/phonegap plugin
//
//  Copyright (c) 2013 Alessandro Saccoia
//  MIT licensed
//

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

function libPd() {
    this.resultCallback = null; // Function
}


libPd.prototype.init = function(options) {
  cordova.exec(
    // Register the callback handler
    function callback(data) {
       console.log('pdLib initialized');
    },
    // Register the errorHandler
    function errorHandler(err) {
      alert('Error intializing libPd');
    },
    // Define what class to route messages to
    'libPd',
    // Execute this method on the above class
    'init',
    // An array containing one String (our newly created Date String).
    [ ]
  );
};

cordova.addConstructor(function()
{
  if(!window.plugins) {
      window.plugins = {};
  }
  window.plugins.libPd = new libPd();
});
