var Details = (function(){

	function loadPerson(ID) {
		$.ajax("details/" + ID + ".html",{ dataType: "text" })
		.then(function(content){
			$content.html(content);
		});
	}

	function pickAnotherPerson(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		EVT.emit("person-selected",ID);
	}

	function init() {
		$content = $("[rel=js-details]");

		$content.on("click","[rel*='js-load-person-']",pickAnotherPerson);
	}

	var $content;

	EVT.on("init",init);
	EVT.on("person-selected",loadPerson);

	return {};

})();
