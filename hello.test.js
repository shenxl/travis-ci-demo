'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('执行 hello.js ', function() {
  it('将会返回 "Hello Node"', function() {
    expect(hello()).to.equal('Hello Node');
  });
});
