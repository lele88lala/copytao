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
  $(".search-bao").hover(function(){

	  $(".search-bao").addClass('search-baos');

		  $(".search-tian").remove('search-tians');
		  $(".search-dian").remove('search-dians');


  });
	$(".search-tian").mousedown(function(){
		$(".search-tian").addClass('search-tians');
		$(".search-bao").remove('search-baos');

	});
	$(".search-dian").mousedown(function(){
		$(".search-dian").addClass('search-dians');
		$(".search-tian").remove('search-tians');
		$(".search-bao").remove('search-baos');

	});
});
