$(function(){
	$("body").width($(window).width());
	$("body").height($(window).height());
	$(".login").click(function(){
		var $i = $("[name='account']").val();
		if($i == ""){
			console.log($("[name='account']").val("请输入用户名"));
		}
	});
	
});