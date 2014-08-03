var container = $("#main-menu");

container.on("click", ".unfold>a", function(){
	$(this).parent().removeClass("unfold").addClass("fold");
}).on("click", ".fold>a", function(){
	$(this).parent().removeClass("fold").addClass("unfold");
}).on("click", "a", function(){
	var target = $(this),
		parent = target.parent();

	if(!parent.hasClass("unfold") && !parent.hasClass("fold")){
		container.find("a").removeClass("current");
		target.addClass("current");
	}
});

var maskBg = $("#mask-bg"),
	maskBox = $("#mask-box");

$("#list").on("click", ".edit", function(){
	maskBg.removeClass("fn-hide");
	maskBox.removeClass("fn-hide").css("margin-top", -maskBox.outerHeight() / 2);
});

maskBox.find(".close").on("click", function(){
	maskBg.addClass("fn-hide");
	maskBox.addClass("fn-hide");
});

var filter = $("#filter"),
	typeTrigger = filter.find(".search-bar .type"),
	typeList = filter.find(".type-list");

var stopHide = false;

$(document).on("click", function(){
	if(stopHide){
		stopHide = false;
	}else{
		typeList.addClass("fn-hide");
	}
});

typeTrigger.on("click", function(){
	var pos = typeTrigger.offset();
	if(typeList.hasClass("fn-hide")){
		stopHide = true;
		typeList.removeClass("fn-hide").css({
			left: pos.left - 1,
			top: pos.top + typeTrigger.outerHeight() - 1,
			minWidth: typeTrigger.outerWidth() - 1
		});
	}
});

typeList.on("click", "a", function(){
	typeTrigger.text($(this).text());
});