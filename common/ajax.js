function ajax(type, url , data , success){
     /**
        *   1.创建一个ajax对象
        *   2. 调用 open 方法
        *       1) 打开方式
        *       2）地址
        *       3)是否异步
        */
        var xhr = null;
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        
        if (type == 'get' && data) {
            url += '?' + data;
        }
        
        xhr.open(type,url,true);
        if (type == 'get') {
            xhr.send();
        } else {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        }
        
        xhr.onreadystatechange = function() {
            
            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {
                    success && success(xhr.responseText);
                } else {
                    alert('出错了,Err：' + xhr.status);
                }
            }
            
        }
}