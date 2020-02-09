var exec = require('cordova/exec');

var AES256 = {

	encrypt : function (secureKey, iv, value, success, error) {
		if (secureKey && iv && value) {
			exec(success, error, 'AES256', 'encrypt', [secureKey, iv, value]);
		} else {
			success('');
		}
	},

	decrypt : function (secureKey, iv, value, success, error) {
		if (secureKey && iv && value) {
			exec(success, error, 'AES256', 'decrypt', [secureKey, iv, value]);
		} else {
			success('');
		}
	},

    generateSecureKey : function (password, success, error) {
		exec(success, error, 'AES256', 'generateSecureKey', [password]);
	}

    generateSecureIV : function (password, success, error) {
        exec(success, error, 'AES256', 'generateSecureIV', [password]);
    }

}

module.exports = AES256;
