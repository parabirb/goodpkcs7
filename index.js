/*
    pkcs7
    made by parabirb, 2022
    public domain
    meow
*/

// message padding function
function pad(message, bytes = 16) {
    // compute the nearest multiple of bytes
    let nearest = Math.ceil(message.length / bytes) * bytes;
    // compute the padding length
    let paddingLength = message.length < nearest ? nearest - message.length : bytes;
    // create a uint8array for padding
    let padding = new Uint8Array(paddingLength);
    // fill it
    for (let i = 0; i < paddingLength; i++) padding[i] = paddingLength;
    // return the padded message
    return new Uint8Array([...message, ...padding]);
}

// message unpadding function
function unpad(message, bytes = 16) {
    // error if the message length isn't a multiple of bytes
    if (message.length % bytes !== 0) throw new Error("Message length is not a multiple of bytes!");
    // get the padding length
    let paddingLength = message[message.length - 1];
    // error if padding length is zero
    if (paddingLength === 0) throw new Error("Padding length is zero; are you sure this message is padded properly?");
    // error if the padding length is greater than possible
    if (paddingLength > bytes) throw new Error("Padding length is greater than the max number of padding bytes; are you sure this message is padded properly?");
    // go through the array and error if the padding doesn't match
    for (let i = message.length - 1; i >= message.length - paddingLength; i--) {
        if (message[i] !== paddingLength) throw new Error("Message is not properly padded!");
    }
    // return the unpadded message
    return message.slice(0, message.length - paddingLength);
}

// exports
module.exports = {
    pad,
    unpad
};
