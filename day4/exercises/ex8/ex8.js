var Widget = {
    init: function(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    render: function($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
}

var Button = Object.create(Widget);

Button.initButton = function(width, height, label) {
    // "super" constructor call
    this.init(width, height);
    this.label = label || "Default";

    this.$elem = $("<button>").text(this.label);
}

Button.renderButton = function($where) {
    // "super" call
    this.render($where);
    this.$elem.click(this.onClick.bind(this));
}

Button.onClick = function(evt) {
    console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function(){
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    var btn2 = Object.create(Button);

    btn1.initButton(125, 30, "Hello");
    btn2.initButton(150, 40, "World");

    btn1.renderButton($body);
    btn2.renderButton($body);
});
