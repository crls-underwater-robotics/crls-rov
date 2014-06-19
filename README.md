crls-rov
========

A underwater ROV built using a raspberry pi, arduino, node.js and html5.

Team Members
============

####General Developer Knowledge Requirements
- The Raspbian (linux) shell and OS
- Git

####Arduino Developer Knowledge Requirements
- C
- Raspberry pi to Arduino protocol (over USB)
- Specific hardware

####Backend Developer Knowledge Requirements
- Javascript and related libraries (express, socket.io, duino)
- Node.js
- Raspberry pi to Arduino protocol (over USB)
- Webclient to raspberry pi protocol (over socket.io)

####Webclient Developer Knowledge Requirements
- Javascript and related libraries (socket.io and React/JSX)
- Webclient to raspberry pi protocol (over socket.io)
- HTML5

Layout
======

####Arduino Code
`arduino_src/*.{c,h}`

####Backend Code
`index.js` and `lib/*.js`

####Frontend Code
The frontend javascript is currently all in src/frontend/main.js. It is compiled to frontend/lib/main.js using grunt-browserify, and the socket.io-client and react dependencies are also compiled by grunt-browserify, but in a seperate file -- frontend/lib/libs.js. For more information, read Gruntfile.js.
