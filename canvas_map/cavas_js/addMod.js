/**
 * 本文件用于增加各个块，删除各个块，只对addEvent.js负责
 */

/**
 * 此函数用于点击ADD按钮，在ul下添加子弹的信息，同时添加删除事件
 * @param bars_num  哪个子弹头
 * @param parentObj 在Ul下添加子弹头
 */
function addModList(bars_num,parentObj,tag,proto){
        
    var liName = document.createElement('li');
    var labelName = document.createElement('label');
    var inputName = document.createElement('input');
    var aName = document.createElement('a');
    var imgName = document.createElement('img');
    
    liName.className = "clear"
    liName.id = "BulletList" + bars_num ;
    labelName.className = "bars_info_label fl";
    labelName.innerHTML = "弹头" + ' ' + bars_num ;
    labelName.id = "Bullet" + bars_num;
    inputName.className = "bars_info_input fl";
    inputName.setAttribute('type','text');
    inputName.setAttribute('id','bars_info_input_' + 'bars_num');
    inputName.setAttribute('tag',bars_num-1);
    if(tag == 1){
        inputName.setAttribute('value',scale.title.innerHTML);
    }else if(tag == 2){
        inputName.setAttribute('value','0');
    }
    
    
    aName.className = "bars_info_button fr";
    imgName.setAttribute('src','../images/page1/u99.png');
    aName.id = "BulletDel" + bars_num;
    
    parentObj.append(liName);
    liName.appendChild(labelName);
    liName.appendChild(inputName);
    liName.appendChild(aName);
    aName.appendChild(imgName);
    
    addDelLiClick(aName,proto);

}

/**
 * 此函数用于点击ADD按钮，在左侧添加弹头的点击状态信息，同时添加各列表的点击事件
 * @param num 哪个子弹头
 * 
 */
 function addBullet(num,proto){
    var elm_div = document.createElement('div');
        var elm_a = document.createElement('a');
        var elm_p = document.createElement('p');
            elm_p.innerHTML = '弹头' + ' ' + num;
    elm_div.setAttribute('id','bulletOption' + num);
    elm_div.setAttribute('class','bulletName clear');
    elm_a.setAttribute('href','javascript:;');
    elm_a.setAttribute('id','bulletOptionA' + num);
    elm_a.setAttribute('class','showPicMode fl');
    elm_p.setAttribute('id','bulletName' + num);
    elm_p.setAttribute('class','trailNames fl');
    
    $('#topBar').append(elm_div);
    elm_div.appendChild(elm_a);
    elm_div.appendChild(elm_p);
    addTrail(num,$(elm_div),1,proto);
    addBulletAImgClick('#bulletOptionA','#bulletOption',num);
    addBulletClick(num,proto);
}

/**
 * 动态添加轨迹阶段，同时为轨迹阶段添加点击事件
 * @param num 控制弹头数的数字
 * @param trailNum 控制轨迹阶段的数字
 */
function addTrail(num,parentObj,trailNum,proto){
        
    var elm_div = document.createElement('div');
        var elm_a = document.createElement('a');
        var elm_p = document.createElement('p');
            elm_p.innerHTML = "轨迹阶段" + trailNum ;
        var elm_bullet = document.createElement('div');
            var elm_bullet_a1 = document.createElement('a');
            var elm_bullet_a2 = document.createElement('a');
            var elm_bullet_a3 = document.createElement('a');
            var elm_bullet_a4 = document.createElement('a');
            elm_bullet_a1.innerHTML = '运动轨迹';
            elm_bullet_a2.innerHTML = '触发条件1';
            elm_bullet_a3.innerHTML = '触发条件2';
            elm_bullet_a4.innerHTML = ' + 添加条件';
    elm_div.setAttribute('id','bulletOptionCondition' + '_' + num+'_'+trailNum);
    elm_div.setAttribute('class','bulletCondtion clear');
    elm_a.setAttribute('href','javascript:;');
    elm_bullet.setAttribute('id','bulletOptionConditionInfo'+ '_' + num+'_'+trailNum);
    elm_bullet.setAttribute('class','bulletCondtionInfo');
    elm_bullet_a1.setAttribute('href','javascript:;');
    elm_bullet_a2.setAttribute('href','javascript:;');
    elm_bullet_a3.setAttribute('href','javascript:;');
    elm_bullet_a4.setAttribute('href','javascript:;');
    elm_a.setAttribute('id','bulletOptionConditionA' + '_' + num+'_'+trailNum);
    elm_a.setAttribute('class','showPicMode fl');
    elm_p.setAttribute('class','trailNames fl');
    elm_p.setAttribute('id','bulletNamesOfP' + '_' + num +'_'+trailNum);
    elm_bullet_a1.setAttribute('id','pathTrail1'+'_'+num+'_'+trailNum);
    elm_bullet_a2.setAttribute('id','triggerConditon'+'_1'+'_'+num+'_'+trailNum);
    elm_bullet_a3.setAttribute('id','triggerConditon'+'_2'+'_'+num+'_'+trailNum);
    elm_bullet_a4.setAttribute('id','addTriggerCondition'+'_'+num+'_'+trailNum);

    var strNum1 = elm_bullet_a2.id.slice(0,-4).replace(/[^0-9]/g,'');
    var strNum2 = elm_bullet_a3.id.slice(0,-4).replace(/[^0-9]/g,'');
    
    elm_bullet_a2.setAttribute('resVal','_'+strNum1);
    elm_bullet_a3.setAttribute('resVal','_'+strNum2);
    parentObj.append(elm_div);
    elm_div.appendChild(elm_a);
    elm_div.appendChild(elm_p);
    elm_div.appendChild(elm_bullet);
    elm_bullet.appendChild(elm_bullet_a1);
    elm_bullet.appendChild(elm_bullet_a2);
    elm_bullet.appendChild(elm_bullet_a3);
    elm_bullet.appendChild(elm_bullet_a4);
    addAImgCliCK(elm_a.id,elm_bullet.id);
    addTrialClick(elm_bullet.id,num,trailNum,proto);   //轨迹阶段事件
    if(trailNum != 1){
        
        addTrailVal(num,trailNum,proto);
    }
}

/**
 * 动态添加运动轨迹的块
 */
function addTrailOfMove(obj,bulletNum,trailNum){
    
    $(obj).parent().append($(obj).clone().attr("id", 'trailOfMove' + '_' + bulletNum + '_' + trailNum));
}

/**
 * 动态添加触发条件的块
 * @param {*} obj 
 * @param {*} bulletNum 控制子弹数 
 * @param {*} trailNum  控制轨迹阶段数
 * @param {*} num    控制触发条件数
 */

function addTriggerMod(obj,bulletNum,trailNum,num){
    
    $(obj).parent().append($(obj).clone().attr("id", 'triggerConditionMod'+ '_' + num + '_' + bulletNum + '_' + trailNum));
    
}

/**
 * 动态添加触发结果的块
 * @param {*} obj 
 * @param {*} bulletNum 控制子弹数 
 * @param {*} trailNum  控制轨迹阶段数
 * @param {*} num    控制触发条件数
 */

function addTriggerResultMod(obj,num,bulletNum,trailNum,resultNum){
   var str = $('#triggerResultSideBar'+'_'+num+'_'+bulletNum+'_'+trailNum);
    str.parent().append($(obj).clone().attr("id", 'triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum));
    
}


/**
 * 动态添加列表中的触发条件
 * @param obj 在添加条件按钮前添加
 * @param obj 触发条件的个数
 */
function addTriggerList(obj,num,idName,htmlName,bulletNum,trailNum,proto){
    
    if(num < 11){
       
        var elm_a = document.createElement('a');
        elm_a.href = 'javascript:;'
        elm_a.id = idName +'_'+num+'_' +bulletNum + '_'+trailNum;
        elm_a.innerHTML = htmlName + num ;
        obj.before(elm_a);
        addTriggersVal(num,bulletNum,trailNum,proto);
    }else{
        alert('添加的太多');
    }
}
/**
 * 动态添加列表中的触发结果列表
 * @param obj 在添加条件按钮前添加
 * @param obj 触发条件的个数
 */
function addTriggerResult(obj,num,bulletNum,trailNum,len,idName,htmlName,proto){
    if(len < 11){
        var elm_li = document.createElement('li');
        elm_li.id = idName + len +'_'+num+'_' +bulletNum + '_'+trailNum;
        elm_li.innerHTML = htmlName + len ;
        elm_li.setAttribute('class','triggerResultLis');
        obj.before(elm_li);
        
        //添加数据
        addTriggerEffect(num,bulletNum,trailNum,len,proto);
    }else{
        alert('添加的太多了');
    }
}
/**
 * 用于删除添加的弹头的信息，同时删除弹头的数据
 * @param obj 点击的垃圾桶的id
 */
function deleteLi(obj,proto){
    if(bulletInfo.Tip(1)){
        var targetHtml = $(obj).parent().children('label')[0].innerHTML.replace(/\s/g,""); 
        var targetNum  = $(obj).parent().children('label')[0].innerHTML.replace(/[^0-9]/ig,'');
        
        var aimHtml = $('#bulletOption' + targetNum).children('p')[0].innerHTML.replace(/\s/g,"");
        
        if(targetHtml == aimHtml){
                
                $('#bulletOption' + targetNum).remove();
                $(obj).parent().remove();
                deleteBullet(targetNum-1,proto);    //删除数据
                
        }
    
    }
              
}
/**
 * 删除左侧列表的轨迹阶段
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function deleteTrail(bulletNum,trailNum,proto){
    if($('#bulletOptionCondition'+'_'+bulletNum + '_' + trailNum).length){
        $('#bulletOptionCondition'+'_'+bulletNum + '_' + trailNum).remove();
        deleteTrailVal(bulletNum,trailNum,proto);
        if(proto.traNum ==1){
            return false;
        }else{
            proto.traNum -=1;
        }
        
    }else{
        return false;
    }
}


/**
 * 给bottom的触发结果的垃圾桶添加删除事件
 * @param {*} params 
 */
function  addTriggerBottomAClick(obj,num,bulletNum,trailNum,resultNum,proto) {
    obj.click(function(){
        //删除视图
        // obj.parent().parent().css('display','none');
        obj.parent().parent().remove();
        $('#triggerResultLi'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).remove();
            
        
        //删除数据
        deleteTrailResult(num,bulletNum,trailNum,resultNum,proto);
    });
    
}

/**
 * 点击子弹头给子弹头添加子弹头模块
 */
function addBulletMod(num,obj){

    obj.parent().append($(obj).clone().attr("id", 'bulletsMod'+'_'+num));
}

/**
 * 添加炮弹id列表
 * @param {*} idName 
 */
function addList(idName){
    var elm_li = document.createElement('li');
        elm_li.id = idName;
        elm_li.setAttribute('class','bullet_infoLi');
        elm_li.innerHTML = '炮弹id : ' + idName;
        $('#bullet_info_list').append(elm_li);  

}

    

