/**
 * 组件库
 */

 /**
  * 深拷贝
  */
function deepClone(data){
    var obj = {};
    var originQueue = [data];
    var copyQueue = [obj];
    //以下两个队列用来保存复制过程中访问过的对象，以此来避免对象环的问题（对象的某个属性值是对象本身）
    var visitQueue = [];
    var copyVisitQueue = [];
    while(originQueue.length > 0){
        var _data = originQueue.shift();
        var _obj = copyQueue.shift();
        visitQueue.push(_data);
        copyVisitQueue.push(_obj);
        for(var key in _data){
            var _value = _data[key]
            if(typeof _value !== 'object'){
                _obj[key] = _value;
            } else {
                //使用indexOf可以发现数组中是否存在相同的对象(实现indexOf的难点就在于对象比较)
                var index = visitQueue.indexOf(_value);
                if(index >= 0){
                    _obj[key] = copyVisitQueue[index];
                }
                originQueue.push(_value);
                _obj[key] = {};
                copyQueue.push(_obj[key]);
            }
        }
    }
    return obj;
}

/**
 * 下载
 * @param content 要下载的数据
 * @param filename 要下载的文件的名字
 */
function funDownload(content, filename,tag){
    
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([json2lua(content,tag)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
 }


/**
 * 把数据转换成lua
 */
function json2lua(jsonString,tag){
    jsonString = JSON.stringify(jsonString,null,4);
    jsonString = JSON.parse(jsonString);
    var list = new Object();
    var cycles = new Object();
    var triggers = new Object();
    var effects = new Object();
    var listStr;
    var listy;
    var testStr = new Object();
    var len = jsonString.bullets.length;
    for(var i = 0;i < len ; ++i){
        var key = "[" + (i + 1) + "]";
        list[key] = deepClone(jsonString.bullets[i]);
        list[key].cycles = new Object();
        var len1 = Object.keys(jsonString.bullets[i].cycles); //对象用Object.keys取值
        for(var j = 0;j < len1.length; ++j){
            var key1 = "[" + (j + 1) + "]";
            cycles[key1] = deepClone(jsonString.bullets[i].cycles[j]);
            
            list[key].cycles[key1] = cycles[key1];
            cycles[key1].triggers = new Object();
            
            var len2 = jsonString.bullets[i].cycles[j].triggers.length;
            for(var k = 0;k < len2;k++){
                var key2 = "[" + (k+1) + "]";
                triggers[key2] = deepClone(jsonString.bullets[i].cycles[j].triggers[k]);
                triggers[key2].effects = new Object();
                cycles[key1].triggers[key2] = triggers[key2];
                
                if(jsonString.bullets[i].cycles[j].triggers[k]){
                    var len3 = Object.keys(jsonString.bullets[i].cycles[j].triggers[k].effects);
                    for(var m = 0; m < len3.length; ++m){
                        var key3 = "[" + (m+1) + "]";
                        effects[key3] = deepClone(jsonString.bullets[i].cycles[j].triggers[k].effects[m]);
                        var val = JSON.stringify(effects[key3].effectParams)
                                    .replace(/\"effectValue\"\:0/g,'')
                                    .replace(/\"range\"\:0/g,'')
                                    .replace(/\"target\"\:0/g,'')
                                    .replace(/\"effectType\"\:0/g,'')
                                    .replace(/\"damageType\"\:0/g,'')
                                    .replace(/\"buffId\"\:0/g,'')
                                    .replace(/\"edgeTypes\"\:0/g,'')
                                    .replace(/\"source\"\:0/g,'')
                                    .replace(/\,\,/g,'\,')
                                    .replace(/\,\}/g,'\}');
                        val = JSON.parse(val
                            .replace(/\{\,/g,'\{')
                            .replace(/\,\}/g,'\}')
                            .replace(/\,\,/g,'\,')
                            .replace(/\,\,\,/g,'')
                            .replace(/\,\}/g,'\}')
                            .replace(/\{\,\,/g,'\{')
                            );
                        effects[key3].effectParams = val; 
                        triggers[key2].effects[key3] = effects[key3];  
                    }
                }
                
            }
        }
    }
    if(tag == 1){
        listy =JSON.stringify(list,null,4)  //\s+ 匹配任意个空格
        .replace(/"\:/g,"=")
        .replace(/\"(.*?)\=/g,'$1 \=')
        .replace(/\{\"/g,'\{')
        .replace(/\,\"/g,'\,')
        .replace(/\"NaN\"/g,0);
        listy = listy.replace(/\}/g,'\t\}').replace(/\{\s+\}/g,'nil').replace(/\"\"/g,'nil');
        listStr = "local BulletConfig = {\n" 
            + "\tid = " + jsonString. id + ",\n"
            + "\tlaunchDuration = " + jsonString. launchDuration + ",\n" 
            + "\tbullets = " +listy + "\n}\nreturn BulletConfig";
    }else if(tag == 2){
        listy = JSON.stringify(deepClone(list))
        .replace(/"\:/g,"=")
        .replace(/\{\"/g,'\{')
        .replace(/\,\"/g,'\,')
        .replace(/\"NaN\"/g,0)
        .replace(/\{\}/g,'nil')
        .replace(/\"\"/g,'nil');
        
        listStr = "local BulletConfig={"
        + "id=" +  jsonString.id + ','
        + "launchDuration=" + jsonString. launchDuration + "," 
        + "bullets=" + listy + "}return BulletConfig";
    }
    return listStr;
    
}

/**
 * 下载图片
 * @param {*} code 
 */
function base64Img2Blob(code){
    var parts = code.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType}); 
}
function downloadFile(fileName, content){
   
    var eleLink = document.createElement('a');
    eleLink.download = fileName;
    eleLink.style.display = 'none';
    var blob = base64Img2Blob(content); //new Blob([content]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}

function funDownload1(filename,content){
    
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([jsonNaN(content)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
 } 

 function jsonNaN(jsonString){
    var jsonstr =JSON.stringify(jsonString,null,4);
    return jsonstr;
 }