 /**
  * 本文件用于对addEvent的点击事件的响应，只对addEvent.js负责
  */
 

/**
 * 改变运动轨迹中头部下拉选择框的id
 * @param {*} obj 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function changeFlySelId(obj,bulletNum,trailNum){
    for(var i = 0;i<4;++i){
        var str = $(obj.children()[1]).children()[i].id;
       
        $(obj.children()[1]).children()[i].id = str.replace(/[^a-zA-Z]/g,'');
        $(obj.children()[1]).children()[i].id += '_'+bulletNum+'_'+trailNum;
    }
    
}
/**
 * 改变运动轨迹中下方具体内容div框的id
 * @param {*} obj 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function changeFlyTrailId(obj,bulletNum,trailNum){
        
    var selId = obj.children().children('select').map((index, dom) => $(dom).attr('id'))[0].substr(0,11);
    selId += '_' +bulletNum + '_' +trailNum; 
    obj[0].children[0].children[0].id = selId;
    
}
/**
 * 此函数用于切换各个块，互不影响
 * @param obj 块对象，作用于这个块
 * @param index 判断使用何种方法 1: 父级块 2:运动轨迹块 3: 触发结果块 4：触发条件块
 */
function show(obj,index) {
    if(index == 1){
        $('.parentHiddTag').css('display','none');
    }else {
        if(index == 2){
            $('.hiddTag').css('display','none');
        }else if(index == 3){
            $('.brotherHiddTag').css('display','none');
            obj.parent().parent().parent().css('display','block');
        }else if(index == 4){
            $('.brotherHiddTagTop').css('display','none');
        }
            obj.parent().css('display','block');
            obj.parent().parent().css('display','block');
    }
    obj.css('display','block');
}
/**
 * 判断运动轨迹的头部下拉菜单
 */
function switchTrailSel(obj,bulletNum,trailNum){
    switch (obj) {
        case 'trailMove1':
        
        show($('#flyControlContent'+'_'+bulletNum +'_'+trailNum),2);
        
            break;
        case 'trailMove2':
        show($('#rollControl'+'_'+bulletNum +'_'+trailNum),2);
            break;
        case 'trailMove3':
        show($('#jumpControl'+'_'+bulletNum +'_'+trailNum),2);
            break;
        case 'trailMove4':
        show($('#snapControl'+'_'+bulletNum +'_'+trailNum),2);
            break;
        default:
            break;
    }
}
/**
 * 改变运动轨迹下方具体内容框的所有id
 */
function changeFlyModId(obj,bulletNum,trailNum){
    var len = $(obj).children().length;
    for(var i=0;i<len;++i){
        var str = obj.children().eq(i).attr('id');
        var str2 = str.slice(0,-4);
        var str1 = obj.children().eq(i).attr('id',str2+ '_' +bulletNum + '_' + trailNum);
        
        for(var j =0;j<str1.children().length;j++){
            var str3 = str1.children().eq(j).attr('id');
            if(str3){
                var str4 = str3.slice(0,-4);
                var str5 = str1.children().eq(j).attr('id',str4+ '_' +bulletNum + '_' + trailNum);                 
            }
        }
    }  
}
/**
 * 重置运动轨迹的input框
 * @param {*} obj 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function resetAllInp(obj,bulletNum,trailNum){
    
    var len = obj.children().children('input').length;
    for(var i = 0;i < len ; ++i){
        obj.children().children('input')[i].value = '';
    }
    var len1 = obj.children().children('select').length;
    for(var j = 0;j < len1; ++j){
        obj.children().children('select').eq(j).children('option').eq(0).prop('selected',true);
    }
  
}
/**
 * 重置运动轨迹的input框
 * @param {*} obj 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function resetAllInp1(obj,bulletNum,trailNum){
    var str1 = $('#flyDiv8'+ '_' + bulletNum + '_' + trailNum);
    var str2 = $('#flyTrack' + '_' + bulletNum + '_' + trailNum).children().eq(0);
    var str3 = $('#flyBegin' + '_' + bulletNum + '_' + trailNum).children().eq(0);
    var str4 = $('#flyVen' + '_' + bulletNum + '_' + trailNum).children().eq(0);
    var str5 = $('#flySpeed' + '_' + bulletNum + '_' + trailNum).children().eq(0);
    var str6 = $('#flyContorlBeginInpX' + '_' + bulletNum + '_' + trailNum);
    var str7 = $('#flyContorlBeginInpY' + '_' + bulletNum + '_' + trailNum);
    var str8 = $('#flyContorlVendorInpX' + '_' + bulletNum + '_' + trailNum);
    var str9 = $('#flyContorlStrengthInpX' + '_' + bulletNum + '_' + trailNum);
    var len = obj.children().children('input').length;
    for(var i = 0;i < len ; ++i){
        obj.children().children('input').eq(i).prop('value','');
    }
    var len1 = obj.children().children('select').length;
    for(var j = 0;j < len1; ++j){
        obj.children().children('select').eq(j).children('option').eq(0).prop('selected',true);
    }
    str2.prop('selected') == true ?  str1.css('display','block') :  str1.css('display','none');
    if(str3.prop('selected')){
        str6.attr('readonly','readonly');
        str7.attr('readonly','readonly');
    }
    str4.prop('selected') == true ?  str8.attr('readonly','readonly') :  str8.attr('readonly',false);
    str5.prop('selected') == true ?  str9.attr('readonly','readonly') :  str9.attr('readonly',false);
}

/**
 *改变触发条件的id值 
 * @param 控制触发条件数量
 */

function changeTriggerCondition(obj,bulletNum,trailNum,num){
    
    if(obj.children().length){
        var len1 = obj.children().length;
    for(var i =0 ;i < len1 ; ++i){
        //更改label
        if(obj.children('label')[i]){
             var forArray = obj.children('label')[i].getAttribute('for').replace(/[^a-zA-Z]/g,'');
             if(forArray == 'charitoChecka' || forArray == 'charitoCheckb'){
                 forArray += '_' + num + '_' + bulletNum + '_' + trailNum;
                 obj.children('label')[i].setAttribute('for',forArray);
             }
        }
        //更改id
        if(obj.children()[i].id){
            var str1 = obj.children()[i].id.slice(0,-6);
            var str2 = str1 + '_' + num + '_' + bulletNum + '_' + trailNum;
             obj.children()[i].id = str2;
        }
    }
    changeTriggerCondition(obj.children(),bulletNum,trailNum,num);
    }
    
}
/**
 * 改变触发结果框的id值
 * @param {*} obj 触发结果框div
 * @param {*} bulletNum 控制弹头数量
 * @param {*} trailNum 控制运动轨迹数量
 * @param {*} num 控制触发条件数量
 * @param {*} resultNum 控制触发结果数量
 */
function changeTriggerResult(obj,num,bulletNum,trailNum,resultNum){
    if(obj.children().length){
        var len1 = obj.children().length;
        for(var i =0 ;i < len1 ; ++i){
            if(obj.children('label')[i]){
                var forArray = obj.children('label')[i].getAttribute('for').replace(/[^a-zA-Z]/g,'');
                forArray +='_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum;
                obj.children('label')[i].setAttribute('for',forArray);
           }
            if(obj.children()[i].id){
                var str1 = obj.children()[i].id.slice(0,-8);
                var str2 = str1 + '_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum;
                obj.children()[i].id = str2;
            }
        }
     changeTriggerResult(obj.children(),num,bulletNum,trailNum,resultNum);
     
    }
        
}

/**
 * 此函数用于更改触发条件的显示P
 */
function changetriggerP(obj,text,num,bulletNum,trailNum){
    var str = '<span class="triggerAddP">'+'&nbsp'+'&nbsp' + bulletNum + '_' + trailNum + '</span>'
    if(obj.length){
        obj["0"].innerHTML = text + str;
    }
    
}
/**
 * 为触发条件Top的select框添加change事件,并存值
 * @param {*} obj 
 */

function switchTriggerSel(obj,num,bulletNum,trailNum,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    $(obj).change(function(){
        
        switch (this.value) {
            case 'triggerSel1':
                show($('#timeInfo'+'_'+num+'_'+bulletNum+'_'+trailNum),4);
                getTriggerMod(bulNum,traNum,nowNum,1,proto);
                break;
            case 'triggerSel2':
                show($('#distanceInfo'+'_'+num+'_'+bulletNum+'_'+trailNum),4);
                getTriggerMod(bulNum,traNum,nowNum,2,proto);
                break;
            case 'triggerSel3':
                show($('#pathInfo'+'_'+num+'_'+bulletNum+'_'+trailNum),4);
                getTriggerMod(bulNum,traNum,nowNum,3,proto);
                break;
            case 'triggerSel4':
                show($('#charitoInfo'+'_'+num+'_'+bulletNum+'_'+trailNum),4);
                getTriggerMod(bulNum,traNum,nowNum,4,proto);
                break;
        
            default:
                break;
        }
    });
    
}

/**
 * 为触发条件Bottom的select框添加change事件,并存值
 */
var resArr = new Array();
function switchResultSel(obj,num,bulletNum,trailNum,resultNum,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var resNum = resultNum - 1;
    var str1 = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams;
    var str2 = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum;
    var len2;
    if(obj.length){
        obj.change(function(){
                var len = $('#bulletOption'+ bulletNum).children().children('.trailNames').length + 1;
                var len1 = $('#bulletOption'+ bulletNum).children().children('.trailNames').length-1;
                var l = parseInt($('#bulletOption'+ bulletNum).children().children('.trailNames').eq(len1).html().replace(/[^0-9]/g,'')) + 1;
                switch (this.value) {
                case 'triggerResult1':
                    resArr[len1] = l;
                    changeTrailP($('#triP' + str2),bulletNum);
                    show($('#triggerOfTrail'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    addTrail(bulletNum,$('#bulletOption'+bulletNum),l,proto,num,trailNum,resultNum);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,1,proto);
                    break;
                case 'triggerResult2':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfEffectOfValue'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,2,proto);
                    switchValueType(str1,$('#effectOfValueSela' + str2));
                    switchDamageAttribute(str1,$('#effectOfValueSelb' + str2));
                    break;
                case 'triggerResult3':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfAddBuff'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,3,proto);
                    break;
                case 'triggerResult4':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfTerrianOfValue'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,4,proto);
                    break;
                case 'triggerResult5':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfArtOfValue'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,5,proto);
                    break;
                case 'triggerResult6':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfAddBullet'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,6,proto);
                    break;
                case 'triggerResult7':
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerOfEnd'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,7,proto);
                    break;
            
                default:
                    len2 = parseInt($('#triP' + str2).html().replace(/[^0-9]/g,''));
                    var v =$('#bulletNamesOfP'+'_'+bulletNum+'_'+len2).attr('data');
                    show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                    deleteTrail(bulletNum,v,resultNum,trailNum,num,proto);
                    getTriggerResultMode(num,bulletNum,trailNum,resultNum,0,proto);
                    
                break;
            }
        });
    }else{
        return false;
    }
    
   
}
/**
 * 修改动态添加的弹头的id值
 */
function changeBulletsId(num,obj){
    if(obj.children().length){
        var len = obj.children().length;
        for(var i = 0;i < len ; ++i){
            if(obj.children().eq(i).attr('id')){
                var str = obj.children().eq(i).attr('id').slice(0,-1);
                obj.children().eq(i).attr('id',str + num);
            }
        }
        changeBulletsId(num,obj.children());
    }
    
}
/**
 * 修改弹头的名字
 * @param {*} num 
 */
function changeBulletsP(num){
    $('#bulletsModP_'+ num).html('弹头' + num);
}

/**
 * 记录触发结果被选择的状态  
 */
function findWhoSelected(num,bulletNum,trailNum,resultNum){
    var str = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum;
    var len = $('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).children().length;
    var arr = new Array();
    for(var i = 0;i < len ;++i){
        arr[i] = $('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).children().eq(i).prop('selected');
        
    }
    if(arr[0]){
        return false;
    }else if(arr[1]){
        show($('#triggerOfTrail'+ str),3);
    }else if(arr[2]){
        show($('#triggerOfEffectOfValue'+ str),3);
    }else if(arr[3]){
        show($('#triggerOfAddBuff'+ str),3);
    }else if(arr[4]){
        show($('#triggerOfTerrianOfValue'+ str),3);
    }else if(arr[5]){
        show($('#triggerOfArtOfValue'+ str),3);
    }else if(arr[6]){
        show($('#triggerOfAddBullet'+ str),3);
    }else if(arr[7]){
        show($('#triggerOfEnd'+ str),3);
    }
   
    
}
function findWhichConditonSel(num,bulletNum,trailNum){
    var str = '_' + num + '_' + bulletNum + '_' + trailNum;
    var len = $('#triggerSelect' + str).children().length;
    var arr = new Array();
    for(var i = 0 ;i < len ;i++){
        arr[i] = $('#triggerSelect' + str).children().eq(i).prop('selected');
    }
    if(arr[0]){
        return false;
    }else if(arr[1]){
        show($('#timeInfo'+ str),3);
    }else if(arr[2]){
        show($('#distanceInfo'+ str),3);
    }else if(arr[3]){
        show($('#pathInfo'+ str),3);
    }else if(arr[4]){
        show($('#charitoInfo'+ str),3);
    }
    
}

/**
 * 记录轨迹阶段被选择状态
 */
function findWhoSel(bulletNum,trailNum) {
    var str = '_'+ bulletNum + '_' + trailNum;
    var len = $('#trailSelect'+ str).children().length;

    var arr = new Array();
    for(var i = 0;i < len ;++i){
        arr[i] = $('#trailSelect'+ str).children().eq(i).prop('selected');
    }
    if(arr[0]){
        show($('#flyControlContent'+str),2)
    }else if(arr[1]){
        show($('#rollControl'+ str),2);
    }else if(arr[2]){
        show($('#jumpControl'+ str),2);
    }else if(arr[3]){
        show($('#snapControl'+ str),2);
    }
}

/**
 * 上传图片并显示
 */
function handleFileSelect(evt,num,proto) {
    var files = evt.target.files; // FileList object
 
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
 
    //   // Only process image files.
      if (!f.type.match('image.*')) {
          alert('请只上传图片');
        continue;
      }
      var reader = new FileReader();
      
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
        $('#fileSpan_' + num).html(['<img class="imgFile" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join(''));
        $('#fileSpan_'+num).css('display','block');
        };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      getImgSrc(f.name,num,proto);
    }
    
  }
  /**
 * 上传图片并显示
 */
function handleFileSelect1(evt,num,bulletNum,trailNum,resultNum,proto) {
    var files = evt.target.files; // FileList object
 
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
 
    //   // Only process image files.
      if (!f.type.match('image.*')) {
          alert('请只上传图片');
        continue;
      }
      var reader = new FileReader();
      
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
        $('#fileSpan'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).html(['<img class="imgFile" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join(''));
        $('#fileSpan'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).css('display','block');
        };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      getImgSrc1(f.name,num,bulletNum,trailNum,resultNum,proto);
    }
    
  }

/**
 * 隐藏图片资源span块
 * @param {*} num 
 * @param {*} obj DOM对象 
 */
  function removeBulletSrc(num){
    
      $('#fileSpan_'+num).css('display','none');
  }
/**
 * 移除readOnly属性
 * @param {*} obj
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function  rmReadOnly(obj,bulletNum,trailNum){
    obj.prop('readonly') == true ? obj.prop('readonly',false) : obj.prop('readonly',false);
}



/***************************************以下为载入的响应事件*************************************************************** */

/**
 * 判断是选择了运动轨迹的哪种方式
 */
function whichTrailMove(bulNum,traNum,proto){
    var bulletNum = bulNum - 1;
    var trailNum  = traNum - 1;
    var val = proto.bulletsData.bullets[bulletNum].cycles[trailNum].motionMode;
    switch (val) {
        case 1:
            $('#trailSelect' +'_' +bulNum + '_' +traNum).children().eq(0).prop('selected','selected');
            break;
        case 2:
            $('#trailSelect' +'_' +bulNum + '_' +traNum).children().eq(1).prop('selected','selected');
            break;
        case 3:
            $('#trailSelect' +'_' +bulNum + '_' +traNum).children().eq(2).prop('selected','selected');
            break;
        case 4:
            $('#trailSelect' +'_' +bulNum + '_' +traNum).children().eq(3).prop('selected','selected');
            break;
    
        default:
            break;
    }
}

function changeResetId(obj,bulletNum,trailNum){
    var str1 = $(obj).children().eq(2).prop('id').slice(0,-4);
    var str2 = $(obj).children().eq(2).children('button').prop('id').slice(0,-4);
    var str = '_' + bulletNum + '_' + trailNum;
    $(obj).children().eq(2).children('button').prop('id',str2 + str);
    $(obj).children().eq(2).prop('id',str1 + str);
}
/**
 * 改变触发结果中动态添加的轨迹阶段的描述语句
 */
function changeTrailP(obj,bulletNum){
    var len = $('#bulletOption'+ bulletNum).children().children('.trailNames').length-1;
    var l = parseInt($('#bulletOption'+ bulletNum).children().children('.trailNames').eq(len).html().replace(/[^0-9]/g,'')) + 1;
    var str = "已成功添加 \"轨迹阶段" + l + "\""; 
    obj.html(str);
}

/**
 * 弹头框中判断是哪种形状 圆形还是方形
 * @param {*} bulNum 
 */
function whichSize(bulNum,proto){
    var bulletNum = bulNum - 1;
    $('#sizSel_'+ bulNum).change(function(){
        if(this.value == 'size1'){
            //改变视图
            $('#sizeModWid_' + bulNum).attr('readonly','readonly');
            $('#sizeModHei_' + bulNum).attr('readOnly','readObly');
            $('#cycle_' + bulNum).attr('readOnly',false);
            $('#sizeModWid_' + bulNum).prop('value','');
            $('#sizeModHei_' + bulNum).prop('value','');
            //保存数据
            proto.bulletsData.bullets[bulletNum].sizeMode = 1;
        }else if(this.value == 'size2'){
            
            proto.bulletsData.bullets[bulletNum].sizeMode = 2;
            $('#cycle_' + bulNum).attr('readOnly','readObly');
            $('#sizeModWid_' + bulNum).attr('readonly',false);
            $('#sizeModHei_' + bulNum).attr('readOnly',false);
            $('#cycle_' + bulNum).prop('value','');
        }
    });
}
function hiddParent(){
    $('.parentHiddTag').css('display','none');
}

/**
 * 判断该轨迹阶段是否为最大轨迹阶段
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} resultNum 
 */
function isMax(bulletNum,trailNum,resultNum){
    var len = $('.trailNames').length;
    var res = {
        flag : true,
        bul : 0
    };
    var val = 'bulletNamesOfP_' + bulletNum + '_' + trailNum;
    for(var i = 0;i < len;++i){
        var val1 = 'bulletNamesOfP_'+ bulletNum + $('.trailNames').eq(i).prop('id').slice(-2);
        var num1 = parseInt($('#' + val).attr('data'));
        var num2 = parseInt($('#' + val1).attr('data'));
        if(num1 < num2 ){
            res.flag = false;
            res.bul = parseInt($('#' + val1).prop('id').slice(-3).replace(/\_[0-9]/g,''));
            return res;
        }
    }
    return res;
}

/**
 * 点击轨迹阶段显示是谁创建的他
 * @param {*} bul 弹头
 * @param {*} trailNum 轨迹阶段
 * @param {*} proto 
 * @param {*} trigger 创建者的触发条件
 * @param {*} trail 创建者的轨迹阶段
 * @param {*} result 创建者的触发结果
 */
function addTrailTrack(bul,trailNum,proto,trigger,trail,result){
    
    $('#bulletNamesOfP_' + bul + '_' + trailNum).click(function(){
        var timer;
        var str1 = result + '_' + trigger + '_' + bul + '_' + trail ;
        var str2 =  '_' + trigger + '_' + bul + '_' + trail ;
        $('#triggerConditon' + str2).addClass('activeTrigger');
        $('#triggerResultLi' + str1).addClass('activeTrigger');
        clearTimeout(timer);
        timer = setTimeout(function(){
            $('#triggerConditon' + str2).removeClass('activeTrigger');
            $('#triggerResultLi' + str1).removeClass('activeTrigger');
        },5000);
    });
}

function addLoadTrailTrack (bul,trailNum,proto){
    $('#bulletNamesOfP_' + bul + '_' + trailNum).click(function(){
        var timer;
        var num = 0;
            var len0 = proto.bulletsData.bullets[(bul-1)].cycles.length;
            for (var n = 0;n < len0; ++n){
            var len1 = proto.bulletsData.bullets[(bul-1)].cycles[n].triggers.length;
                for (var i = 0;i < len1; ++i){
                    var len2 = proto.bulletsData.bullets[(bul-1)].cycles[n].triggers[i].effects.length;
                        for (j = 0;j < len2 ; ++j){
                            var eff = proto.bulletsData.bullets[(bul-1)].cycles[n].triggers[i].effects[j].effectMode;
                            if(eff == 1){
                                var str1 = (j + 1) + '_' + (i + 1) + '_' + bul + '_' + (n + 1);
                                var str2 =  '_' + (i + 1) + '_' + bul + '_' + (n + 1) ;
                                var str3 = parseInt($('#triP_' + str1).html().replace(/[^0-9]/g,''));
                                var str4 = parseInt($(this).attr('data'));
                                if(str3 == str4){
                                    $('#triggerConditon' + str2).addClass('activeTrigger');
                                    $('#triggerResultLi' + str1).addClass('activeTrigger');
                                    clearTime(str2,str1,timer);
                                }
                               
                            }
                        }
                    }

                
            }
          
    });
}
function clearTime(str2,str1,timer){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $('#triggerConditon' + str2).removeClass('activeTrigger');
        $('#triggerResultLi' + str1).removeClass('activeTrigger');
    },5000);
}
function clearTimer(bul,trial,trigger,result){
    var str1 = result + '_' + trigger + '_' + bul + '_' + trial;
    var str2 =  '_' + trigger + '_' + bul + '_' + trial ;
    $('#triggerConditon' + str2).removeClass('activeTrigger');
    $('#triggerResultLi' + str1).removeClass('activeTrigger');

}
