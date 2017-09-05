;(function($){
	
	$.fn.JQRadio = function(settings) {
		var $div = this;
		var radioVal = $div.find(".radioVal"); 	//当前的radio选中项的value值
		
		var items = $div.find("ul > li");
		
		//每个li的点击事件
		$div.on("click", "ul > li", function() {
			radioVal.val($(this).attr("id"));
			$(this).addClass("selected").siblings("li").removeClass("selected");
		});
		
		items.each(function() {
			if($(this).hasClass('selected')) {
				$(this).trigger('click');
			}
		});
		
	};
	
})(jQuery);

