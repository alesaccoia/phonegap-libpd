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

Now it should build. The example pd patch that comes with libpd is also copied in the www/pd folder.
The search paths for pd are hardcoded in the libPd.mm file, . Change at will.

On the event device ready:
window.plugins.libPd.init();
