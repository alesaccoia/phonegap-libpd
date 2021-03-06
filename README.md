phonegap-libpd
==============

Cordova-phonegap plug-in for libPd

Dependency: libPd (git@gitorious.org:pdlib/libpd.git)


Add the plug-in with 
phonegap local plugin add https://github.com/alesaccoia/phonegap-libpd

Open the xcode project in the platforms directory.

Add the Xcode project for libpd (libpd-master/libpd.xcodeproj) by right-clicking on the
top-level xcode project "TargetName", add files to "TargetName", select libpd.xcodeproj

There are 3 more steps to be done on the target build settings:
- in the "User Header Search Paths" add the path to yourpath/libpd-master/objc
- Remove the architecture arm7s from "Valid Architectures" (TODO!)
- In the Build Phase "link Binary with Libraries" click on add libpd-ios.a

Now it should build. 

USAGE:

On the event device ready:
Initialize with
window.plugins.libPd.init();

To add to the search path use:
window.plugins.libPd.addPath('/www/pd/');
in this way all the abstractions in /www/pd will be loaded.
If you want to have a more elaborate directory structure, use the addPath at will.

Open a patch
window.plugins.libPd.openPatch('pd/sample.pd');

Now you can send messages:
window.plugins.libPd.sendBang('toPD');
window.plugins.libPd.sendFloat(3, 'toPD');

You can open/close patches at will:
window.plugins.libPd.openPatch('pd/sample.pd');
window.plugins.libPd.closePatch();

Just remember that init/deinit have to be called just once as they start/stop the audio
window.plugins.libPd.deinit();

TODO
Add the arm7s architecture!!
Needs a better handling for when the app is put in the background
For now you can just send bangs and floats: libPd includes many other features, including receiving messages from PD, that I haven't used so far.


