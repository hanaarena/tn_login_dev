/* display alert msg */
;var rxdai = {};

rxdai.doFailed = function(msg) {
	$('.form li:first-child')
		.append($('<div></div>')
		.attr({id: 'failedAlert'})
		.addClass('failed')
		.html('<strong>' + msg + '</strong>')
		);
}