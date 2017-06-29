//run with node

const path = require('path');
var robot = require("robotjs");

const screenSize = robot.getScreenSize();
const width = screenSize.width;
const height = screenSize.height;

console.log(`screen height is: ` + height + `px`);
console.log(`screen width is: ` + width + `px`);

robot.setMouseDelay(2);
//ms per mouse movement event (default is 10)

/*
    function* setupQlear (callback) {
   console.log('step 1, get open windows menu');
  robot.keyToggle('control', 'down');
  robot.keyTap('escape');
  robot.keyToggle('control', 'up');
  yield "step 1 complete";
   console.log('step 2, get chrome');
  robot.typeString('chrome');
  robot.keyTap('enter');
  yield "step 2 complete";
   console.log('step 3, maximize window');
  robot.keyToggle('alt', 'down');
  robot.keyTap('space');
  yield;
  robot.keyTap('x');
  robot.keyToggle('alt', 'up');
  yield "step 3 complete";
   console.log("step 4, get qlear")
  robot.typeString('qlear.build');
  robot.keyTap('enter');
  return "qlear ready";
}

    var start = setupQlear();

    start.next();
    setTimeout(function () {
      start.next();
    }, 3000);
    setTimeout(function () {
      start.next();
    }, 5000);
    start.next();
    setTimeout(function () {
      start.next();
    }, 5000);
    */

if (path.sep === "\\") {
  console.log("Windows \n");
} else {
  console.log("Not Windows \n");
}
