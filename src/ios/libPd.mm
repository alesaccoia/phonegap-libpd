//
//  libPd.m
//  libPd cordova/phonegap plug-in implementation file
//
//  Created by Alessandro Saccoia on 10/7/13.
//
//
//

#import "libPd.h"
#import "PdAudioController.h"


@implementation libPdReceiver
#pragma mark - PdRecieverDelegate

// uncomment this to get print statements from pd
- (void)receivePrint:(NSString *)message {
	NSLog(@"%@", message);
}

- (void)receiveBangFromSource:(NSString *)source {
	NSLog(@"Bang from %@", source);
}

- (void)receiveFloat:(float)received fromSource:(NSString *)source {
	NSLog(@"Float from %@: %f", source, received);
}

- (void)receiveSymbol:(NSString *)symbol fromSource:(NSString *)source {
	NSLog(@"Symbol from %@: %@", source, symbol);
}

- (void)receiveList:(NSArray *)list fromSource:(NSString *)source {
	NSLog(@"List from %@", source);
}

- (void)receiveMessage:(NSString *)message withArguments:(NSArray *)arguments fromSource:(NSString *)source {
	NSLog(@"Message to %@ from %@", message, source);
}

- (void)receiveNoteOn:(int)pitch withVelocity:(int)velocity forChannel:(int)channel{
	NSLog(@"NoteOn: %d %d %d", channel, pitch, velocity);
}

- (void)receiveControlChange:(int)value forController:(int)controller forChannel:(int)channel{
	NSLog(@"Control Change: %d %d %d", channel, controller, value);
}

- (void)receiveProgramChange:(int)value forChannel:(int)channel{
	NSLog(@"Program Change: %d %d", channel, value);
}

- (void)receivePitchBend:(int)value forChannel:(int)channel{
	NSLog(@"Pitch Bend: %d %d", channel, value);
}

- (void)receiveAftertouch:(int)value forChannel:(int)channel{
	NSLog(@"Aftertouch: %d %d", channel, value);
}

- (void)receivePolyAftertouch:(int)value forPitch:(int)pitch forChannel:(int)channel{
	NSLog(@"Poly Aftertouch: %d %d %d", channel, pitch, value);
}

- (void)receiveMidiByte:(int)byte forPort:(int)port{
	NSLog(@"Midi Byte: %d 0x%X", port, byte);
}
@end


#pragma mark - pdLib plug-in implementation

@interface libPd () {}

@property (nonatomic, retain) PdAudioController *audioController;
@property (nonatomic, retain) libPdReceiver *receiver;

- (BOOL)setupPd;
- (void)testPd;

@end


@implementation libPd
@synthesize audioController = audioController_;
@synthesize receiver = receiver_;
@synthesize patch = patch_;

#pragma mark - public plug-in methods

- (void)init:(CDVInvokedUrlCommand*)command {
  [self.commandDelegate runInBackground:^{
    BOOL retValue = [self setupPd];
    CDVPluginResult* pluginResult = nil;
    if (retValue) {
      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
      [self testPd];
    } else {
      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
  }];
}

#pragma mark - pdLib initialization

- (BOOL)setupPd {
  self.audioController = [[PdAudioController alloc] init];
	PdAudioStatus status = [self.audioController configureAmbientWithSampleRate:44100
																  numberChannels:2
																   mixingEnabled:YES];
	if (status == PdAudioError) {
		NSLog(@"Error! Could not configure PdAudioController");
    return FALSE;
	} else if (status == PdAudioPropertyChanged) {
		NSLog(@"Warning: some of the audio parameters were not accceptable.");
    return FALSE;
	} else {
		NSLog(@"Audio Configuration successful.");
	}
	self.audioController.active = YES;

	// log actual settings
	[self.audioController print];

	// set AppDelegate as PdRecieverDelegate to receive messages from pd
  [PdBase setDelegate:self.receiver];
	[PdBase setMidiDelegate:self.receiver]; // for midi too
	
	// recieve messages to fromPD: [r fromPD]
	[PdBase subscribe:@"fromPD"];
	
	// add search path
	[PdBase addToSearchPath:[NSString stringWithFormat:@"%@/www/pd/abs", [[NSBundle mainBundle] bundlePath]]];
	// enable audio
	[PdBase computeAudio:YES];
  
  return TRUE;
}


- (void)testPd {
	// open patch
	self.patch = [PdFile openFileNamed:@"test.pd" path:[NSString stringWithFormat:@"%@/www/pd", [[NSBundle mainBundle] bundlePath]]];
	NSLog(@"%@", self.patch);
}
@end
