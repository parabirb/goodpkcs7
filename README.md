# goodpkcs7
a good library for pkcs7 padding

## rationale
there isn't a good pkcs7 library on NPM. pkcs7 is okay, but it only supports padding to 16 byte blocks.

## usage
install with `npm install goodpkcs7`

example usage:
```js
// get the pad and unpad functions
const { pad, unpad } = require("goodpkcs7");
// pad an array, buffer, or uint8array
// note that the result will be a uint8array
const padded = pad([1, 2, 3, 4]);
// unpad a uint8array
const unpadded = unpad(padded);
```

goodpkcs7 provides two methods:
* `pad(message, bytes = 16)` - Pads an array, buffer, or Uint8Array message to a multiple of the specified number of bytes (default 16). Returns a Uint8Array.
* `unpad(message, bytes = 16)` - Unpads an array, buffer, or Uint8Array message given that its length is a multiple of the specified number of bytes (default 16). Returns a Uint8Array. Errors if the message is not properly padded.

goodpkcs7 can be used in the same way as pkcs7, but goodpkcs7 lets you specify the number of bytes per block if necessary.

## licensing
goodpkcs7 is in the public domain. do whatever you want with it. i don't care.
