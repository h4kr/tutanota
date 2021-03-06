"use strict";

tutao.provide('tutao.db.DummyDb');
//import('tutao.db.DbInterface');

/**
 * @constructor
 * @implements {tutao.db.DbInterface}
 */
tutao.db.DummyDb = function() {};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.isSupported = function() {
	// return false because this implementation does not support the actual functionality
	return false;
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.init = function(name, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS);
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.clear = function(callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS);
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.setIndexed = function(typeId, elementId, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS);
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.getLastIndexed = function(typeId, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS, tutao.rest.EntityRestInterface.GENERATED_MAX_ID); // simulate that all elements were indexed
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.addIndexEntries = function(typeId, attributeIds, elementId, values, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS);
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.getElementsByValue = function(typeId, attributeIds, value, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS, []);
	}
};

/**
 * @inheritDoc
 */
tutao.db.DummyDb.prototype.removeIndexEntries = function(typeId, attributeIdsList, elementId, callback) {
	if (callback) {
		callback(tutao.db.DbInterface.STATUS_SUCCESS);
	}
};
