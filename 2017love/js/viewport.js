
var viewWidth = 750;
var phoneWidth = parseInt(window.screen.width);
var phoneHeight = parseInt(window.screen.height);
var phoneScale = phoneWidth / viewWidth;
var isAndroid = false;
var androidVer = 4.0;
var ua = navigator.userAgent;
var meta = null;
if (/Android (\d+\.\d+)/.test(ua)){
    isAndroid = true;
    var version = parseFloat(RegExp.$1);
    androidVer = version;
    
    if (phoneWidth <= phoneHeight) {
   
        meta = '<meta name="viewport" content="width='+viewWidth+', initial-scale='+phoneScale+', minimum-scale='+phoneScale+', maximum-scale='+phoneScale+', target-densitydpi=device-dpi user-scalable=no" />';
    
    } else {
        phoneScale = phoneHeight / viewWidth;
        var deviceWidth = viewWidth * phoneWidth / phoneHeight;
        if(version > 2.3){
            meta =  '<meta name="viewport" content="width='+deviceWidth+', initial-scale='+phoneScale+', minimum-scale='+phoneScale+', maximum-scale='+phoneScale+', target-densitydpi=device-dpi user-scalable=no" />';

        }else{
            meta =  '<meta name="viewport" content="width='+deviceWidth+', target-densitydpi=device-dpi user-scalable=no" />'
        }
    }
}
else if (/iPhone|iPad/.test(ua)) {
   meta = '<meta name="viewport" content="width='+viewWidth+', initial-scale='+phoneScale+', minimum-scale='+phoneScale+', maximum-scale='+phoneScale+', target-densitydpi=device-dpi user-scalable=no" />';
}  

else {
   var deviceWidth = viewWidth * phoneWidth / phoneHeight;
   meta =  '<meta name="viewport" content="width='+ deviceWidth + ',initial-scale=' + 0.5 + ',target-desitydpi=device-dpi user-scalable=no" />'
}
//  alert(meta);
document.write(meta);

