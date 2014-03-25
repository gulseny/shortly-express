var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
	tableName: 'users',
	hasTimestamps: true
	// initialize: function(){
    // this.on('creating', function(model, attrs, options){
    //   var shasum = crypto.createHash('sha1');
    //   shasum.update(model.get('username'));
    //   model.set('password', shasum.digest('hex').slice(0, 5));
    // });
  // }
});

module.exports = User;