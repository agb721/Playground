"use strict";

// canvas
var canvas_width = 500
var canvas_height = 500
var canv = hlInitCanvas(canvas_width, canvas_height);

// board size
const row = 5
const col = 5

// color map
var color_map = {}
color_map[0] = "blue"
color_map[1] = "brown"
color_map[2] = "green"
color_map[3] = "red"

// make grid
const grid = []
for (var r=0; r < row; r++)
{
  grid.push([])
  for (var c=0; c < col; c++)
  {
    grid[r][c] = 0;  
  }
}

// draw floor
for (var i = 0; i < col; i++)
{
  grid[4][i] = 1
}

// draw obstacles
grid[3][1] = 2
grid[1][2] = 2

// Draw static object from grid function
function drawRect(r, c, width, height, color)
{
  var ctx = canv.getContext("2d");
  var x = c*100
  var y = r*100
	ctx.fillStyle = color;
	ctx.fillRect(x, y,  width, height);
	ctx.fillStyle = "#fff"; // To make color errors more obvious
}

// Draw mario function
function drawMario(x, y, width, height, color)
{
  var ctx = canv.getContext("2d");
	ctx.fillStyle = color;
	ctx.fillRect(x, y,  width, height);
	ctx.fillStyle = "#fff"; // To make color errors more obvious
}

function mario_moves()
{
  // move mario left & right
  if (hlKeyHeld("ArrowLeft"))
  {
    x = x - vel
  }
  if (hlKeyHeld("ArrowRight"))
  {
    x = x + vel
  }
  // move mario up & down
  if (hlKeyHeld("ArrowUp"))
  {
    y = y - vel
  }
  if (hlKeyHeld("ArrowDown"))
  {
    y = y + vel
  }
}

function mario_collision(x, y)
{
  let mario_width = 70
  // check grid to the right, up: 
  var c1 = Math.floor((x+mario_width)/100)
  var r1 = Math.floor(y/100)
  if (grid[r1][c1] !== 0)
  {
    return true
  }
  
  // check grid to the right, bottom: 
  var x2 = Math.floor((x+mario_width)/100)
  var y2 = Math.floor((y+mario_width)/100)
  if (grid[y2][x2] !== 0)
  {
    return true
  }
  
  // check grid to the left, up: 
  var x3 = Math.floor(x/100)
  var y3 = Math.floor(y/100)
  if (grid[y3][x3] !== 0)
  {
    return true
  }

  // check grid to the left, bottom: 
  var x4 = Math.floor(x/100)
  var y4 = Math.floor((y+mario_width)/100)
  
  if (grid[y4][x4] !== 0)
  {
    return true
  }
}


// draw something according to color_map
function draw_world()
{
  for (var r=0; r < row; r++)
  {
    for (var c=0; c < col; c++)
    {
        var i = grid[r][c]
        drawRect(r, c, 100, 100, color_map[i]); 
    }
  }
}

// mario start location
var x = 200
var y = 300
// mario dimensions
let width = 70
let height = 70

// mario velocity
var vel = 3
var vel_mario_x = vel
var vel_mario_y = vel

function mainLoop()
{
  // draw world
  draw_world()
  
  // draw mario
  if (mario_collision(x, y) === true)
  {
    drawMario(x, y, width, height, "pink")
  }
  else
  {
    drawMario(x, y, width, height, 'red')
  }
  
  mario_moves()
}

hlStartMainLoop(mainLoop);
