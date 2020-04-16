$(".clickBox").click(function() {
	$(".clickBox").text("点我");
	$(".clickBox").css("background-color","green");
});
$(".dblClickBox").dblclick(function() {
	$(".dblClickBox").text("点我");
	$(".dblClickBox").css("background-color","Blue");
});
$(".hoverBox").hover(function() {
	$(".hoverBox").text("点我");
	$(".hoverBox").css("background-color","white");
});
$(".mouseOnBox").click(function() {
	$(".mouseOnBox").text("点我");
	$(".mouseOnBox").css("background-color","yellow");
});
