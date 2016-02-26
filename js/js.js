$(document).ready(function() {
	$("div[id^='nav_b']").each(function() {

		$("div[id^='nav_b']").mouseover(function() {
			
			$("a[name="+this.id+"]").addClass('nav_b_mytb_div');
			$("div[name="+this.id+"]").show();
			$("div[id^='nav_b']").mouseout(function() {
				$("a[name="+this.id+"]").removeClass('nav_b_mytb_div');
				$("div[name="+this.id+"]").hide();
			});

		});
	});
  $("#search-bao").click(function(){

	  $("#search-bao").css({
		  "background-color": "#ff4400",
		  "color": "#ffffff",
		  "font-weight": "bolder"
	  });
	  $("#search-bot-bar").css({

		  "border":"3px solid #ff4400"
	  });
	  $("#font-sch").css({

		  "background":"#ff4400"
	  });

	  $("#search-tian").css({
		  "background-color": "white",
		  "font-weight": "normal",
		  "color": "#333333",
	  });

	  $("#search-dian").css({
		  "background-color": "white",
		  "font-weight": "normal",
		  "color": "#333333",
	  });
  });
	$("#search-tian").click(function(){

		$("#search-tian").css({
			"background-color": "#8600ff",
			"color": "#ffffff",
			"font-weight": "bolder"
		});


		$("#search-bot-bar").css({

			"border":"3px solid #8600ff"
		});
		$("#font-sch").css({

			"background":"#8600ff"
		});
		$("#search-bao").css({
			"background-color": "white",
			"font-weight": "normal",
			"color": "#333333",
		});

		$("#search-dian").css({
			"background-color": "white",
			"font-weight": "normal",
			"color": "#333333",
		});
	});
	$("#search-dian").click(function(){

		$("#search-dian").css({
			"background-color": "#0072e3",
			"color": "#ffffff",
			"font-weight": "bolder"
		});
		$("#search-bot-bar").css({

			"border":"3px solid #0072e3"
		});
		$("#font-sch").css({

			"background":"#0072e3"
		});
		$("#search-bao").css({
			"background-color": "white",
			"font-weight": "normal",
			"color": "#333333",
		});

		$("#search-tian").css({
			"background-color": "white",
			"font-weight": "normal",
			"color": "#333333",
		});
	});
	$("#search-tian").mousedown(function(){
		$("#search-tian").addClass('search-tians');
		$("#search-bao").remove('search-baos');

	});
	$(".search-dian").mousedown(function(){
		$(".search-dian").addClass('search-dians');
		$(".search-tian").remove('search-tians');
		$(".search-bao").remove('search-baos');

	});
	$("#input_text").focus();
	$("#input_text").mousedown(function(){
		$("#search-bot-bar-face").hide();
		$("#search-bot-bar-icon").hide();
	});
	$("#input_text").mouseout(function(){
		if ($("#input_text").val() !="") {
			$("#search-bot-bar-face").hide();
			$("#search-bot-bar-icon").hide();
		} else {
			$("#search-bot-bar-face").show();
			$("#search-bot-bar-icon").show();
		}
	});
});

