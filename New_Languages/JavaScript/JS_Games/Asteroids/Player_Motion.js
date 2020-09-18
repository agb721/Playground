"use strict";

// canvas
var canvas_width = 500
var canvas_height = 500
var canv = hlInitCanvas(canvas_width, canvas_height);

//starting angle
var angle = 0

// central circle0
var x0 = 200
var y0 = 200
var radius0 = 100

function draw_satellite()
{
  // outer circle1
  var radius1 = 20
  var rot_speed = .1
  // unit vec
  var x_u = Math.cos(angle)
  var y_u = Math.sin(angle)
  // satellite trajectory
  var x = x_u*radius0
  var y = y_u*radius0
  
  var x1 = x0+x
  var y1 = y0+y

  // top right
  hlDrawCircle(x1, y1, radius1, "blue")
  
  // rotate satellite
  if (hlKeyHeld("ArrowRight"))
  {
    angle = angle - rot_speed
  }
  if (hlKeyHeld("ArrowLeft"))
  {
    angle = angle + rot_speed
  }
  // directional change
  var direction_x = (x0-x1) // 
  var direction_y = (y0-y1)
  // normalize
  var direction_x = direction_x/radius0
  var direction_y = direction_y/radius0
  
  if (hlKeyHeld("ArrowUp"))
  {
    x0 = x0 + x_u*4
    y0 = y0 + y_u*4
  }
  if (hlKeyHeld("ArrowDown"))
  {
    x0 = x0 - x_u*4
    y0 = y0 - y_u*4
  }
}


function mainLoop()
{
  hlClear()
  draw_satellite()
  hlDrawCircle(x0, y0, 30, "yellow")
  
}

hlStartMainLoop(mainLoop);
