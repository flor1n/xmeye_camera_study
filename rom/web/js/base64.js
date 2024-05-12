var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function(b) {
		for (var d = "", c, a, f, g, h, e, i = 0, b = Base64._utf8_encode(b); i < b.length;) c = b.charCodeAt(i++), a = b.charCodeAt(i++), f = b.charCodeAt(i++), g = c >> 2, c = (c & 3) << 4 | a >> 4, h = (a & 15) << 2 | f >> 6, e = f & 63, isNaN(a) ? h = e = 64 : isNaN(f) && (e = 64), d = d + this._keyStr.charAt(g) + this._keyStr.charAt(c) + this._keyStr.charAt(h) + this._keyStr.charAt(e);
		return d
	},
	decode: function(b) {
		for (var d = "", c, a, f, g, h, e = 0, b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e < b.length;) c = this._keyStr.indexOf(b.charAt(e++)), a = this._keyStr.indexOf(b.charAt(e++)), g = this._keyStr.indexOf(b.charAt(e++)), h = this._keyStr.indexOf(b.charAt(e++)), c = c << 2 | a >> 4, a = (a & 15) << 4 | g >> 2, f = (g & 3) << 6 | h, d += String.fromCharCode(c), g != 64 && (d += String.fromCharCode(a)), h != 64 && (d += String.fromCharCode(f));
		return d = Base64._utf8_decode(d)
	},
	_utf8_encode: function(b) {
		for (var d = "", c = 0; c < b.length; c++) {
			var a = b.charCodeAt(c);
			a < 128 ? d += String.fromCharCode(a) : (a > 127 && a < 2048 ? d += String.fromCharCode(a >> 6 | 192) : (d += String.fromCharCode(a >> 12 | 224), d += String.fromCharCode(a >> 6 & 63 | 128)), d += String.fromCharCode(a & 63 | 128))
		}
		return d
	},
	_utf8_decode: function(b) {
		for (var d = "", c = 0, a = c1 = c2 = 0; c < b.length;) a = b.charCodeAt(c), a < 128 ? (d += String.fromCharCode(a), c++) : a > 191 && a < 224 ? (c2 = b.charCodeAt(c + 1), d += String.fromCharCode((a & 31) << 6 | c2 & 63), c += 2) : (c2 = b.charCodeAt(c + 1), c3 = b.charCodeAt(c + 2), d += String.fromCharCode((a & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3);
		return d
	}
};

function arrayBufferToBase64(buffer) {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
	var binary_string =  window.atob(base64);
	var len = binary_string.length;
	var bytes = new Uint8Array( len );
	for (var i = 0; i < len; i++){
		bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes;
}