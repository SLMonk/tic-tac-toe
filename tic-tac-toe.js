// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var circlered = 0
function XorO() {
  var canvas = document.getElementById("game-board")
  if (circlered == 0)
  {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 circlered = 1
 }
 else {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "blue")
 canvas.appendChild(circle)
 circlered = 0
 }
 }

var boi = 0
function XorO2() {
  var canvas = document.getElementById("game-board")
  if (boi == 0)
  {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 boi = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 52)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
boi = 0
}
}

var hi = 0
function XorO3() {
  var canvas = document.getElementById("game-board")
  if (hi == 0)
  {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 hi = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 52)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
hi = 0
}
}

var man = 0
function XorO4() {
  var canvas = document.getElementById("game-board")
  if (man == 0){
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 man = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 55)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
man = 0
}
}
var mario = 0
function XorO5() {
  var canvas = document.getElementById("game-board")
  if (mario == 0){
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 mario = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
mario = 0
}
}
var bowser = 0
function XorO6() {
  var canvas = document.getElementById("game-board")
    if (bowser == 0){
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 bowser = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
bowser = 0
}
}
var joy = 0
function XorO7() {
  var canvas = document.getElementById("game-board")
    if (joy == 0){
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 joy = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 55)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
joy = 0
}
}
var sonic = 0
function XorO8() {
  var canvas = document.getElementById("game-board")
  if (sonic == 0){
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
  sonic = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
sonic = 0
}
}
var peach = 0
function XorO9() {
  var canvas = document.getElementById("game-board")
  if (peach == 0)
  {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 peach = 1
}
else {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
peach = 0
}
}
