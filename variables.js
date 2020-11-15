
var canvas, gl
var modelViewMatrix, modelViewMatrixLoc
var terrainVerts, terrainFaces, mode, rowLength, terrainView, terrainColors
var toggleShading = 1.0
var toggleShadingL
var shading = ["Flat", "Smooth", "Phong"]
var tshading = "Smooth"
var projectionMatrix, projectionMatrixLoc
var eye, at, up, eyeOriginalPos, lastBufferPos
var left, right, bottom, top1, near, far
var currentOrientation
var rotatingLeft = 0
var rotatingUp = 0
var rotatingSwirl = 0
var rotatingLeftAngle = 0
var rotatingUpAngle = 0
var rotatingSwirlAngle = 0
var forward, backward = 0
var trueVertFaces
var patchLength = 60
var patchWidth = 60
var acc = 0.00
var terrainNormal, faceNormal
var speed = 0.02
var over = false
var direction = "North"
var cameraPositionL;

var Ka = 1.0
var Kd = 1.0
var Ks = 1.0
var shininessVal = 90

var ambientColor = vec3(0.0, 0.0, 0.0)
var diffuseColor = vec3(1.0, 0.8, 1.0)
var specularColor = vec3(1.0, 1.0, 1.0)
var lightPos = vec3(0.0, 0.0, 10.0)

var cameraPosition
var flatVert
var flatNormal

var shiftPressed = false
var projDecrement = 0.05
var farChange = 5
var nearChange = 5
var ogLeft = -1
var ogRight = 1
var ogBottom = -1
var ogTop1 = 1
var ogNear = 0.00
var ogFar = 40
