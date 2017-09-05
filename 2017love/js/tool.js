function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

function getSsid() {
	var ssid = getParameterByName("ssid");
	if (ssid == "" || ssid == null) {
		return "@i-Dalian";
	}
	else {
		return  ssid;
	}
    
}


/*function formatPhone(phone) {
	return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
function getUserNum() {
    return formatPhone("user_Num"); 
}*/
