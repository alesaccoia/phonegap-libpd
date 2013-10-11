//
//  Copyright (c) 2013 Alessandro Saccoia
//  MIT licensed
//
//  A plug-in to use libPd with cordova/phonegap
//

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

function libPd() {
    this.resultCallback = null; // Function
}

/* The two arguments should be functions callbacks of type "void(void)"
   cbOk: fired if the initialization of libPd succeded
   cbKo (optional): fired if the initialization fails
   
   Note: the init function is asynchronous, so the calling code shouldn't be
   window.plugins.libPd.init(....)
   window.plugins.libPd.openPatch(....)
   This could mess things up, as the initialization does take a while.
   Instead, cbOk should be the function responsible for opening the patch, as it's
   fired upon the completion of the initialization process.
*/ 

libPd.prototype.init = function(cbOk, cbKo) {
  cordova.exec(
    // Register the callback handler
    function callback(data) {
      cbOk();
    },
    // Register the errorHandler
    function errorHandler(err) {
      if (cbKo == null) {
        alert('Error ininitlizing libPd');
      }
    },
    'libPd',
    'init',
    [ ]
  );
};
libPd.prototype.deinit = function() {
  cordova.exec(
    function callback(data) {
       console.log('pdLib deinitialized');
    },
    function errorHandler(err) {
      alert('Error deintializing libPd');
    },
    'libPd',
    'deinit',
    [ ]
  );
};

/* This works the same as init(). it's called asynchronously.
   the cbOk function is the good place to either:
   - send the first message to pd (i.e. ambiences)
   - stop displaying a loader
*/
libPd.prototype.openPatch = function(patchName, cbOk, cbKo) {
  cordova.exec(
    function callback(data) {
      cbOk();
    },
    function errorHandler(err) {
      if (cbKo == null) {
        alert('Error in libPd');
      }
    },
    'libPd',
    'openPatch',
    [patchName]
  );
};

libPd.prototype.closePatch = function() {
  cordova.exec(
    function callback(data) {
    },
    function errorHandler(err) {
      alert('Error in libPd');
    },
    'libPd',
    'closePatch',
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
