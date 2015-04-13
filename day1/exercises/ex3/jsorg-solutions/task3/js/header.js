var Header = (function(){

	function clickHeaderLink(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var url = $(evt.target).attr("href");

		$.ajax(url,{ dataType: "text" })
		.then(function(contents){
			$modal.html(contents).show();
		});
	}

	function init() {
		$modal = $("[rel=js-modal]");

		$("[rel=js-header]").on("click","> [rel^=js]",clickHeaderLink);
	}

	var $modal;

	return {
		init: init
	};

})();
