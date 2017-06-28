var recorder = require("screen-capture-recorder");
var robot = require("robotjs");
var opn = require('opn');

//setup of parameters
const scene = new recorder({ x:0, y:0, w:640, h:480 });
const screenSize = robot.getScreenSize();
const width = screenSize.width;
const height = screenSize.height;
robot.setMouseDelay(2);
robot.setKeyboardDelay(20);

function Callback (err, stage) {
  if (err) console.error('Download error!', err)
  else console.log('finished ', stage)
}


function tutorialStart(chrome) {
  return new Promise(function(resolve, reject) {
    
    opn('qlear.build', {app: 'chrome'});

    if() resolve();
  })
}

    scene.warmup(function(err) {
      //recorder is ready, now start capture
      scene.StartRecord(function(err) {
        if(err)
          console.log("Something got wrong");
        //capture start _very_ quicky (60ms)
      });

    
  /*for (var x = 0, y = 0; x < width; x++, y+= (height/width))
    {
      robot.moveMouse(x, y);

    }*/
    

    scene.once(recorder.EVENT_DONE, function(err, screenRecording) {
      if(!err)
        console.log("Everything is ok, find video in %s.ogg", screenRecording);
      //recording is a temporary file that will be deleted on process exit, keep it by renaming it
      require('fs').renameSync(screenRecording, screenRecording + ".ogg");
    });

    scene.StopRecord(function(err) {
      if(err)
        console.log("Something got wrong");
    });
}, 1000 * 10);