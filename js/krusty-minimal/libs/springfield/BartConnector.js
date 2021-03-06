define([
	'libs/util/Rand',
	'config/BaseConfig',
], function(
	Rand,
	BaseConfig
){
	/**
	 * Class to connect to the bart servers.
	 *
	 * @namespace Springfield.Bart
	 * @class BartConnector
	 * @param {Object} options Contains the options which will overwrite the default settings.
	 * @uses Util.Rand;
	 * @constructor
	 */
	function BartConnector(options){
		
		var self = this;
		/**
		 * Contains the default settings.
		 *
		 * @property settings
		 * @type Object
		 */
		var settings = {
			/**
			 * Contains the start of the URI to which the requests will be requested.
			 *
			 * @property settings.bartURI
			 * @type String
			 */
			bartURI: BaseConfig.baseURI+'/bart/',
		};

		/**
		 * Requests from the bart servers.
		 *
		 * @method request
		 * @param {Object} options Contains the options for the request. Should be of the same format of the options used for $.ajax. See <a href="http://api.jquery.com/jQuery.ajax/">http://api.jquery.com/jQuery.ajax/</a> for more info.
		 * @return void
		 */
		this.request = function(options){
			options.url = settings.bartURI + options.url;
			$.ajax(options);
		};

		$.extend(settings, options);

		return self;
	}

	return BartConnector;
});
