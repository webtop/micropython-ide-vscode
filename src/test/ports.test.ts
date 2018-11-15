'use strict';

import * as assert from 'assert';

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var serialPort = new SerialPort("/dev/cu.usbmodem14131", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

assert.equal(serialPort.readable, true, 'COM port not available');