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
- Remove the architecture arm7s from "Valid Architectures"
- In the Build Phase "link Binary with Libraries" click on add libpd-ios.a

Now it should build. 

Important: place your pure data files in the directory www/pd or use the

On the event device ready:
window.plugins.libPd.init();

For now you can just send bangs and floats. 
libPd includes many other features, including receiving messages from PD, that I haven't used so far.

