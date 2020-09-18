"use strict";

// canvas
var canvas_width = 500
var canvas_height = 500
var canv = hlInitCanvas(canvas_width, canvas_height)

// number of asteroids
let astNum = 3
let astRad = 15

// arrays
var x_arr = []
var y_arr = []
alert("test")

// generate  asteroid coordinates
for (var i=0; i<astNum; i++)
{
    x_arr[i] = Math.random()*500
    y_arr[i] = Math.random()*500
}

// genarate asteroids
for (var i=0; i<astNum; i++)
{
  hlDrawCircle(x_arr[i], y_arr[i], astRad, "yellow")
}

// Do
// random direction: random unit vertor that points into a random direction


