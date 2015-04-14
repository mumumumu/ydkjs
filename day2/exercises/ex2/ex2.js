var parents = [
    "#p1",
    ".p > strong"
];

// -------

var $context = $(parents.join(","));

$context.children("em").each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});
