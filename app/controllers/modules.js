var Module = require('../models/module.js');

function createModule(req, res) {
  // console.log(req.body)
    var newModule = new Module(req.body.module)
    newModule.save(function(err) {
      if(err)  {
        console.log(err)
        return res.status(500).json(err)
      } else {
        res.status(200).json(newModule)
        // console.log(res.data);
      }
    });
    
}

function indexModule(req, res) {
	Module.find({}, function(err, modules) {
		if (err) {
			console.log(err)
			return res.status(500).json(err);
		}
		res.status(200).json({modules:modules})
	})
}

module.exports = {
  create: createModule,
  index: indexModule
};