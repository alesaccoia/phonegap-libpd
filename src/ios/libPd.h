//
//  libPd.h
//  HelloWorld
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

  @property (nonatomic, retain) PdFile *patch;
@end


