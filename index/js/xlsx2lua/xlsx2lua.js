/**
 * excel2json搭载了js_xlsx库
 */
  
var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串
var globalArr = [];
var globalArray=[];

/**
 * 
 * @param {*} obj =input type="file"
 * 此函数完成读取excel表并显示到demo块上
 */
function importExcel1(obj) {//导入
    if (!obj.files) {
        return;
    }

    const IMPORTFILE_MAXSIZE = 10 * 1024;//这里可以自定义控制导入文件大小
    var suffix = obj.files[0].name.split(".")[1];
    if (suffix != 'xls' && suffix != 'xlsx') {
        alert('导入的文件格式不正确!')
        return;
    }
    if (obj.files[0].size / 1024 > IMPORTFILE_MAXSIZE) {
        alert('导入的表格文件不能大于10M')
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });

        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }

        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[She/wb.Sheets[Sheet名]获取第一个Sheet的数据
        
        var fromTo = '';
        persons = [];

        // // 遍历每张表读取

        for (var i = 0; i < wb.SheetNames.length; i++) {
            for (var sheet in wb.Sheets) {
                if (wb.Sheets.hasOwnProperty(sheet)) {
                     wb.Sheets[sheet]['!ref']=nextA(wb.Sheets[sheet]['!ref']);
                    // console.log('fromTo', fromTo);
                    if (wb.SheetNames.length == 1) {
                        persons = persons.concat(XLSX.utils.sheet_to_json(wb.Sheets[sheet]));

                        break; // 如果只取第一张表
                    } else {
                        persons = persons.concat(XLSX.utils.sheet_to_json(wb.Sheets[sheet]));

                        globalArr[i] = (XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[i]]));
                        
                    }
                }
            }
    
        }
        
        
        document.getElementById("demo1").innerHTML = json2lua(persons);
    };
    
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}
/**
 * 
 * @param {*} data=e.target.result 由importexcel函数调用
 * 此函数完成 文件流转BinaryString
 */
function fixdata(data) { 
    var o = "",
        l = 0,
        w = 10240;
    for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));

    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}


// 触发事件，调用文件下载函数 
document.getElementById('jsondownload').addEventListener('click', function () {
    var yy = document.getElementById("demo1").innerHTML;
    
    var str_name = document.getElementsByName('file1')["0"].files["0"].name;
    str_name = deCoder(str_name);
    
    if (wb.SheetNames.length == 1) {
        if (document.getElementById('radio3').checked) {
            funDownload_3(yy, (wb.SheetNames[0] + '.lua'));
        }else{
            funDownload_4(yy, (wb.SheetNames[0] + '.lua'));
        }

    } else {
        if (document.getElementById('radio3').checked) {
            for (var i = 0; i < wb.SheetNames.length; i++) {
                // console.log(globalArr[i]);
                funDownload_2(globalArr[i], (str_name + '_' + wb.SheetNames[i] + '.lua'));
            }
        }else{
            for (var i = 0; i < wb.SheetNames.length; i++) {
                // console.log(globalArr[i]);
                funDownload_1(globalArr[i], (str_name + '_' + wb.SheetNames[i] + '.lua'));
            }
        }
        
    }
});

/**
 * 
 * @param {*} jsonString 
 * 此函数为 导出与输出json数组，实现数组自动换行，去掉数字变量的引号 
 * 格式化json数组
 */
var jsonNaN_1 = function (jsonString) {
    
    var jsonr = JSON.parse(jsonString);
    var k = new Array();
    var ke = new Array();
    // console.log(jsonr);
    for (var i = 0; i < jsonr.length; i++) {
        k[i] = jsonr[i];
        for (var keys in k[i]) {                     //keys 数组名
            //console.log('kes',keys);
            ke.push(keys);
            if (!isNaN(parseFloat(k[i][keys]))) {
                k[i][keys] = parseFloat(k[i][keys]);
            } 
        }
    }
        var jsonstr = JSON.stringify(k, ke, '\t');
        return jsonstr;

}


/**
 * 
 * @param {*} content 需要下载的文件
 * @param {*} filename 自定义的下载文件名
 * 此函数用于下载文件
 */

var funDownload_1 = function (content, filename) {

    
    
    // 创建隐藏的可下载链接
    
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([json2lua_noformat(content)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

var funDownload_2 = function (content, filename) {
    
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([json2lua(content)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    };

var funDownload_3 = function (content, filename) {
    
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([(content)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    };

var funDownload_4 = function (content, filename) {

    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([json2lua_noformat_1(content)]);
    // 字符内容转变成blob地址
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    };



    /**
 * 
 * @param {*} str_name 文件名
 * 此函数用于删除文件后缀名
 */
function deCoder(str_name) {                    
    if (str_name.indexOf('.xlsx') > 0)              //indexOf 查询是否有相同字符
        return str_name.split(".xlsx").filter(Boolean).join(" ");
    if (str_name.indexOf('.xls') > 0)
        return str_name.split(".xls").filter(Boolean).join(" ");
}

function json2lua(persons){
    

    // console.log(str);
    var list=new Object();
    var listStr;
    for(var i=0;i<persons.length;i++)
    {
        var key = 'list['+(i+1)+']';
        list[key] = persons[i];
        
    }
   
    list=JSON.stringify(list).replace(/"\:/g,"=");
    list = list.replace(/{\"/g,"{");
    list = list.replace('{',"");    
    list=list.replace(/\}\,/g,"}");
    list=list.replace(/\}\"/g,"}");
    list=list.replace(/\}\}/g,"}");
    list = list.replace(/\"\=/g,"=");
    list=list.replace(/\,\"/g,",");
    list=list.replace(/\=\{/g,"\=\{\n\t");
    list=list.replace(/\,/g,",\n\t");
    list=list.replace(/\}/g,",\n\}\n");
    list=list.replace(/\"(\d+)\"/g,"$1");
    list=list.replace(/\"([-+]?[0-9]*\.?[0-9]+)\"/g,"$1");


    listStr = "local list = {}\n\n" + list + "\nreturn list";
    
    return listStr;

}

function json2lua_noformat(persons){
    
    var list=new Object();
    var listStr;
    for(var i=0;i<persons.length;i++)
    {
        var key = 'list['+(i+1)+']';
        list[key] = persons[i];
        
    }
   
    list=JSON.stringify(list).replace(/\:/g,"=");
    list = list.replace(/{\"/g,"{");
    list = list.replace('{',"");    
    list=list.replace(/\}\,/g,"}");
    list=list.replace(/\}\"/g,"}");
    list=list.replace(/\}\}/g,"}");
    list = list.replace(/\"\=/g,"=");
    list=list.replace(/\,\"/g,",");
    list=list.replace(/\"(\d+)\"/g,"$1");
    list=list.replace(/\"([-+]?[0-9]*\.?[0-9]+)\"/g,"$1");
    

    listStr = "local list = {}" + list + "return list";
    
    return listStr;
}
function json2lua_noformat_1(persons){
    
    
    persons=persons.replace(/\=\{\n\t/g,"={");
    persons=persons.replace(/\,\n\t/g,",");
    persons=persons.replace(/\n\}\n/g,"}");
    persons=persons.replace(/\,\}/g,"}");
    persons=persons.replace(/\n/g,"");
    console.log(persons);
    return persons;
}


