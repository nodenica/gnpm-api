var loopback = require('loopback');

module.exports = function(Package) {

  Package.observe('before save', function exists(ctx, next) {
    Package.find({
      where: {
        'name': ctx.instance['name'],
        'user_id': ctx.instance['user_id']
      }
    }, function(err, package) {
      if (err) {
        next(err);
      }
      else if (package.length > 0) {
        next(new Error('Module ' + ctx.instance['name'] + ' exists!'));
      }
      else {
        next();
      }
    });
  });

};
