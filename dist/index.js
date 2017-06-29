var recorder = require("screen-capture-recorder");
var robot = require("robotjs");
var opn = require('opn');
var scrape = require("./scrapeqlear.js");
var path = require("path");


//setup of parameters
const scene = new recorder({ x:0, y:0, w:640, h:480 });
const screenSize = robot.getScreenSize();
const width = screenSize.width;
const height = screenSize.height;
robot.setMouseDelay(2);
robot.setKeyboardDelay(20);
var req = scrape.req;

function findPos(obj) {
  var curleft = curtop = 0;
  if (obj.offsetParent) {
    curleft = obj.offsetLeft
    curtop = obj.offsetTop
    while (obj = obj.offsetParent) {
      curleft += obj.offsetLeft
      curtop += obj.offsetTop
    }
  }
  return [curleft,curtop];
}

if (path.sep === "\\") { 
  opn('qlear.build', {app: 'chrome'});
} else {
  opn('qlear.build', {app: 'google chrome'});
}

posSignIn = findPos(document.getElementById(''));
xSignIn = posSignIn[0];
ySignIn = posSignIn[1];

scene.warmup(function(err) {
  //recorder is ready, now start capture
  scene.StartRecord(function(err) {
    if(err)
      console.log("Something got wrong");
    //capture start _very_ quicky (60ms)
  });

    var pos1 = findPos(document.getElementById(''));
    var x = myPos[0];
    var y = myPos[1];

    robot.moveMouse(x, y);


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