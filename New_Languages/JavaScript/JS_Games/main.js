"use strict";

// canvas
var canvas_width = 600
var canvas_height = 600

hlInitCanvas(canvas_width, canvas_height);

// coordinates for red
var i = 300
var j = 50
// coordinates for lime
var x = 300
var y = canvas_height - 50
// coordinates for yellow
var w = canvas_width/2
var h = canvas_height/2


var vel = 3

// ball valocity
var vel_yellow_x = vel
var vel_yellow_y = vel

alert("Welcome to Pong! Use arrow keys or 'w,a,s,d' to move around.")

function mainLoop()
{
  hlClear()
  
  hlDrawCircle(w, h, 15, "yellow")
  h = h - vel_yellow_y/2
  w = w - vel_yellow_x/2
  
  if (h <= 15 || h >= canvas_height-15)
  {
    alert("Player blue wins")
    // coordinates for yellow
    w = canvas_width/2
    h = canvas_height/2
  }
  
  if (w <= 15 || w >= canvas_width-15)
  {
    vel_yellow_x = - vel_yellow_x
  }
  
  // collision with top of blue
  if (Math.abs(w-x) <= 50 && Math.abs(h-y) <= 27)
  {
      vel_yellow_y = - vel_yellow_y
  }
  
  // collision with top of red
  if (Math.abs(w-i) <= 50 && Math.abs(h-j) <= 27)
  {
     vel_yellow_y = - vel_yellow_y
  }
  
  // collision with side blue
  if (Math.abs(h-y) <= 27 && Math.abs(w-x) <= 65)
    {
      vel_yellow_x = - vel_yellow_x
    }

  
  // First Rectable
  hlDrawRect(i, j, 100, 25, "red");
  
  // move left right
  if (hlKeyHeld("a"))
  {
    i = i - vel
  }
  if (hlKeyHeld("d"))
  {
    i = i + vel
  }
  
  // move up down
  if (hlKeyHeld("w"))
  {
    j = j + vel
  }
  if (hlKeyHeld("s"))
  {
    j = j - vel
  }
  
  // Second Rectangle
  hlDrawRect(x, y, 100, 25, "blue");
  
  // move left right
  if (hlKeyHeld("ArrowLeft"))
  {
    x = x - vel
  }
  if (hlKeyHeld("ArrowRight"))
  {
    x = x + vel
  }
  
  // move up down
  if (hlKeyHeld("ArrowUp"))
  {
    y = y + vel
  }
  if (hlKeyHeld("ArrowDown"))
  {
    y = y - vel
  }
  
}

hlStartMainLoop(mainLoop);
