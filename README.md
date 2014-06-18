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
- Javascript and related libraries (socket.io definitely, possibly jQuery or React)
- Webclient to raspberry pi protocol (over socket.io)
- HTML5

Layout
======

####Arduino Code
`arduino_src/*.{c,h}`

####Backend Code
`index.js` and `lib/*.js`

####Frontend Code
`src/frontend/main.js`, (which is compiled from jsx and any `require('package')`
mixed in automatically to `frontend/lib/bundle.js`)
and `frontend/*.html` (The entire frontend directory is statically served).
