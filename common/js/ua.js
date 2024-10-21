document.write();
 
var _UA = navigator.userAgent;
    if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1) {
        document.write('<meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=1">');
    }else if(_UA.indexOf('Android') > -1){
        document.write('<meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=1">');
    }else if(_UA.indexOf('iPad') > -1){
        document.write('<meta name="viewport" content="width=1024">');
		}else{
        document.write('<meta name="viewport" content="width=1024">');
    }