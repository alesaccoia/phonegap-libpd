phonegap-libpd
==============

Cordova-phonegap plug-in for libPd

After adding the plug-in with 

phonegap local plugin add https://github.com/alesaccoia/phonegap-libpd

Dependency: libPd (git@gitorious.org:pdlib/libpd.git)

Add the Xcode project for libpd (libpd-master/libpd.xcodeproj) by right-clicking on the
top-level xcode project "TargetName", add files to "TargetName", select libpd.xcodeproj

There are 3 more steps to be done on the target build settings:
- in the "User Header Search Paths" add the path to yourpath/libpd-master/objc
- Remove the architecture arm7s from "Valid Architectures" (TODO!)
- In the Build Phase "link Binary with Libraries" click on add libpd-ios.a

Now it should build. 

Important: all the abstractions in the directory www/pd will be seen automatically.
If you want to have a more elaborate directory structure, use the PD commands from inside the patch.

[declare -path ./assets]

On the event device ready:
window.plugins.libPd.init();
window.plugins.libPd.openPatch('pd/sample.pd');

then you can send messages:
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


