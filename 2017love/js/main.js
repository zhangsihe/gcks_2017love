$(function() {

	$("#radio01").JQRadio({});

	var ok = false;

	function getName() {
		return $("#getUsername").val();
	}

	function getSex() {
		var v = $("#sex_value").val();
		if(v == "r1") {
			return 1;
		}
		if(v == "r2") {
			return 0;
		}
	}
	$(document).ready(function() {

		$("#goButton").click(function() {
			var name = getName();
			if(name.length == 0 || name.length > 5) {
				$("#getUsername").attr("placeholder", "请输入1到5个字");
				return false;
			}

			$('#getIndex').css('display', 'none');
			$('.answer').css('display', 'block');

			getImg();

		});
		$("#aginButton").click(function() {
			/*$('.answer').css('display', 'none');
			$('#getIndex').css('display', 'block');
			location.replace(location)*/
			getImg();

		});
	});

	function getImg() {
		var name = getName();
		var sex = getSex();
		var t = new Date();
		
		$.getJSON("http://47.93.249.184/gcks_2017love/2017love/php/index.php?name=" + name + "&sex=" + sex + "&ssid=" + getSsid() + "&t=" + t.getTime(), function(response) {
			var data = response;
			var html = "";
//			console.log(response);
			/*console.log(getSsid());*/

			html += '<img  class="center_bg_img" src="' + data['url'] + '"/>';
			$("#getImage")[0].innerHTML = html;
		});
		if(_hmt){//百度统计
			_hmt.push(['_trackEvent', "2017love", 'click',  "test"]);
		}
		 
	}
});