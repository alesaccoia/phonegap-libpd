//
//  libPd.h
//  phonegap-libpd
//  MIT License
//
//  Created by Alessandro Saccoia on 10/7/13.
//
//

#import "CDV.h"
#import "PdBase.h"
#import "PdFile.h"

@interface libPdReceiver : NSObject <PdReceiverDelegate, PdMidiReceiverDelegate>

@end

@interface libPd : CDVPlugin
  - (void)init:(CDVInvokedUrlCommand*)command;
  - (void)deinit:(CDVInvokedUrlCommand*)command;
  - (void)openPatch:(CDVInvokedUrlCommand*)command;
  - (void)closePatch:(CDVInvokedUrlCommand*)command;
  
  - (void)addPath:(CDVInvokedUrlCommand*)command;
  
  - (void)sendBang:(CDVInvokedUrlCommand*)command;
  - (void)sendFloat:(CDVInvokedUrlCommand*)command;

  @property (nonatomic, retain) PdFile *patch;
@end


