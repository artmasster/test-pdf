function _base64ToArrayBuffer(base64) {
  var binary_string = atob(base64.split(',')[1]);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

module.exports = { _base64ToArrayBuffer };
