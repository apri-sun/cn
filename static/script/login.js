$(function(){
	$("body").width($(window).width());
	$("body").height($(window).height());
	
	//点击登录后校验是否为空
	$(".login").click(function(){
		var $i = $("[name='account']").val(); //获得username中的val值
		var $p = $("[name='password']").val(); //获得passwordd中的val值
		if($i == "" && $p == ""){
			$(".error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}if($i == "" && $p != ""){
			$(".username .error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}if($i != "" && $p == ""){
			$(".cut-off .error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}
	});
	
	$(".register").click(function(){
		var $i = $("[name='account']").val(); //获得username中的val值
		var $p = $("[name='password']").val(); //获得passwordd中的val值
		if($i == "" && $p == ""){
			$(".error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}if($i == "" && $p != ""){
			$(".username .error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}if($i != "" && $p == ""){
			$(".cut-off .error").animate({
				"right":"10px",
				"opacity":"1",
			},"fast");
		}
	});
	
	//获得焦点后清空提示信息
	$(".username input").focus(function(){
		$(".username .error").animate({
			"right":"-60px",
			"opacity":"0",
		},"fast");
	});
	
	$(".cut-off input").focus(function(){
		$(".cut-off .error").animate({
			"right":"-60px",
			"opacity":"0",
		},"fast");
	});
	
});