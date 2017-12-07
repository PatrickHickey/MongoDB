/**
 * LogsController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
		Logs.find({}).exec(function(err, logs){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('list', {logs: logs});
		});
	}
};
