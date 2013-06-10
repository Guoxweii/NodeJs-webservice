var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
    
exports.find_all_comments = function(callback) {
	var mongoclient = new MongoClient(new Server("localhost", 27017, {native_parser: true}));
	mongoclient.open(function(err, mongoclient) {
		if (err) { throw err; }
		var db = mongoclient.db("comments");
		
		db.collection("comments", function(err, collection){
			collection.find(function(err, cursor) {
				cursor.toArray(function(err, items) {
					mongoclient.close();
					return callback(items);
				});
			});
		})
	})
};

exports.find_commnets_by_paginate = function(limit, page) {
	
};

exports.insert_comments = function(obj, callback) {
	var mongoclient = new MongoClient(new Server("localhost", 27017, {native_parser: true}));
	mongoclient.open(function(err, mongoclient) {
		if (err) { throw err; }
		var db = mongoclient.db("comments");
		
		db.collection("comments").insert(obj, function(err, result) {
			console.log(result);
			if (callback) { return callback(); }
		})
	})
};