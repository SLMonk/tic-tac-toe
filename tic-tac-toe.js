// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 0
function XorO() {
  var canvas = document.getElementById("game-board")
  if (turn == 0)
  {
    alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
 }
 else {
alert('Player Twos Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "blue")
 canvas.appendChild(circle)
 turn = 0
 }
 }

function XorO2() {
  var canvas = document.getElementById("game-board")
  if (turn == 0)
  {
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 52)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}
var hi = 0
function XorO3() {
  var canvas = document.getElementById("game-board")
  if (turn == 0)
  {
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 52)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 52)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO4() {
  var canvas = document.getElementById("game-board")
  if (turn == 0){
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 55)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO5() {
  var canvas = document.getElementById("game-board")
  if (turn == 0){
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO6() {
  var canvas = document.getElementById("game-board")
    if (turn == 0){
        alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 179)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 179)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO7() {
  var canvas = document.getElementById("game-board")
    if (turn == 0){
        alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 55)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 55)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO8() {
  var canvas = document.getElementById("game-board")
  if (turn == 0){
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 180)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
  turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 180)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}

function XorO9() {
  var canvas = document.getElementById("game-board")
  if (turn == 0)
  {
      alert('Player Ones Turn')
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 306)
 circle.setAttribute("cy", 305)
 circle.setAttribute("r", 25)
 circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
 turn = 1
}
else {
  alert('Player Twos Turn')
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 306)
circle.setAttribute("cy", 305)
circle.setAttribute("r", 25)
circle.setAttribute("fill", "blue")
canvas.appendChild(circle)
turn = 0
}
}
