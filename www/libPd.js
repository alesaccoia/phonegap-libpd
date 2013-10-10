//
//  Copyright (c) 2013 Alessandro Saccoia
//  MIT licensed
//

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

function libPd() {
    this.resultCallback = null; // Function
}


libPd.prototype.init = function() {
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
libPd.prototype.deinit = function() {
  cordova.exec(
    // Register the callback handler
    function callback(data) {
       console.log('pdLib deinitialized');
    },
    // Register the errorHandler
    function errorHandler(err) {
      alert('Error deintializing libPd');
    },
    // Define what class to route messages to
    'libPd',
    // Execute this method on the above class
    'deinit',
    // An array containing one String (our newly created Date String).
    [ ]
  );
};

libPd.prototype.openPatch = function(patchName) {
  cordova.exec(
    // Register the callback handler
    function callback(data) {
    },
    // Register the errorHandler
    function errorHandler(err) {
      alert('Error in libPd');
    },
    // Define what class to route messages to
    'libPd',
    // Execute this method on the above class
    'openPatch',
    // An array containing one String (our newly created Date String).
    [patchName]
  );
};

libPd.prototype.closePatch = function() {
  cordova.exec(
    // Register the callback handler
    function callback(data) {
    },
    // Register the errorHandler
    function errorHandler(err) {
      alert('Error in libPd');
    },
    // Define what class to route messages to
    'libPd',
    // Execute this method on the above class
    'closePatch',
    // An array containing one String (our newly created Date String).
    []
  );
};

libPd.prototype.addPath = function(path) {
  var args = {};
  args.path = path;
  cordova.exec(
    function callback(data) {
    },
    function errorHandler(err) {
      alert('Error in libPd');
    },
    'libPd',
    'addPath',
    [args]
  );
};

libPd.prototype.sendBang = function(receiver) {
  var args = {};
  args.receiver = receiver;
  cordova.exec(
    function callback(data) {
    },
    function errorHandler(err) {
      alert('Error in libPd');
    },
    'libPd',
    'sendBang',
    [args]
  );
};

libPd.prototype.sendFloat = function(num, receiver) {
  var args = {};
  args.receiver = receiver;
  args.num = num;

  cordova.exec(
    function callback(data) {
    },
    function errorHandler(err) {
      alert('Error in libPd');
    },
    'libPd',
    'sendFloat',
    [args]
  );
};




cordova.addConstructor(function()
{
  if(!window.plugins) {
      window.plugins = {};
  }
  window.plugins.libPd = new libPd();
});
