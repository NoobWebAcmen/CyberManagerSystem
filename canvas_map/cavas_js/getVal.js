/**
 * 此文件用于对数据进行操作，增加，删除，修改
 */

 /**
  * 此函数用于点击Add按钮时，同时把数据存入bulletInfo中,给数组添加初值
  *  
  */
  var time = new Array();
 function getAddBulletInfo(bulletNum,trailNum){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1; 
    bulletInfo.bulletsData.bullets.push(deepClone(bulletConstVal[0]));
    triggerVal[0].effects = [];
    triggerVal[1].effects = [];
   for(var i = 0; i < 4; ++i){
        triggerVal[0].effects.push(deepClone(triggerEffectVal[0]));
        triggerVal[1].effects.push(deepClone(triggerEffectVal[0]));
    }
    
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers = [];
   
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[0]));
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[1]));
    console.log(bulletInfo.bulletsData);
    bulletInfo.bulletsData.launchDuration = parseFloat($('#barsInp1')[0].value);
    bulletInfo.bulletsData.id = parseInt($('#powderIdOfP').html()); 

    time.push(parseFloat($('#title0')[0].innerHTML));
    if( bulletInfo.bulletsData.bullets[bulNum]){
        bulletInfo.bulletsData.bullets[bulNum].launchTime = time[bulNum];
    }
 
 }

 /**
* 此函数用于判断运动轨迹下拉菜单框的事件,并将获取到的数据存入数组
* @param text 下拉菜单选项的名字
*/
function switchFlySel(obj,preNum,nexNum){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    triggerFlyControl(preNum,nexNum);
    obj.change(function(){
        switch (this.value) {
            case 'trailMove1':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 1;
            triggerFlyControl(preNum,nexNum);
            break;
            case 'trailMove2':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 2;
            switchRotateMod($('#rollRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,'scrollRotateMode');
            break;
            case 'trailMove3':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 3;
            switchRotateMod($('#jumpRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,'jumpRotateMode');
            break;
            case 'trailMove4':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 4;
            break;
            default:
                break;
        }
    });
    
    
    
}
/**
 * 此函数用于飞行模式下的下拉菜单的选择情况
 */
function triggerFlyControl(preNum,nexNum){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    switchFlyContSel($('#flyBegin'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
    switchFlyContSel($('#flyVen'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
    switchFlyContSel($('#flySpeed'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
    switchFlyContSel($('#flyMode'+'_'+bulletNum+'_'+trailNum),preNum,nexNum);
    switchFlyContSel($('#flyTrack'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
    switchFlyContSel($('#flyRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum);
    switchFlyContSel($('#trackTarget'+'_'+bulletNum+'_'+trailNum),preNum,nexNum);
}

/**
 * 用于判断飞行模式下下拉菜单框具体事件，并存入数据
 * 
 */
function switchFlyContSel(obj,preNum,nexNum) {
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    var str = '_' + bulletNum + '_' + trailNum;
    obj.change(function(){
        switch (this.value) {
            case 'beginSel2':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCor = true;
                rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
                rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
                break;
            case 'beginSel1':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCor = false;
                rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
                rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
                break;
            case 'vendor1':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation = false;
                rmReadOnly($('#flyContorlVendorInpX' + str),bulletNum,trailNum);
                break;
            case 'vendor2':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation = true;
                rmReadOnly($('#flyContorlVendorInpX' + str),bulletNum,trailNum);
                break;
            case 'strength1':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed = false;
                rmReadOnly($('#flyContorlStrengthInpX' + str),bulletNum,trailNum);
                break;
            case 'strength2':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed = true;
                rmReadOnly($('#flyContorlStrengthInpX' + str),bulletNum,trailNum);
                break;
            case 'isGravity':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].flyMode = 1;
                break;
            case 'notGravity':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].flyMode = 2;
                break;
            case 'notRotate':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].flyRotateMode = 1;
                break;
            case 'rotateSelf':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].flyRotateMode = 2;
                break;
            case 'rotateOfAngel':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].flyRotateMode = 3;
                break;
            case 'notTrack':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isTrack = false;
                $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','none') : $('#flyDiv8' + str).css('display','none');
                break;
            case 'isTrack':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isTrack = true;
                $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','block') : $('#flyDiv8' + str).css('display','block');
                break;
            case 'anemy':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].detectionTarget = 1;
                break;
            case 'partner':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].detectionTarget = 2;
                break;
            case 'both':
                bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].detectionTarget = 3;
            
            break;
            default:
            isInherit(obj,this.value,preNum,nexNum);
            break;
        }
    });
}

/**
 * 用于滚动，弹跳状态下的获取旋转方式的值 
 * @param {*} obj 
 * @param {*} preNum 
 * @param {*} nexNum 
 * @param {*} attr 存储该属性的属性名 
 */
function  switchRotateMod(obj,preNum,nexNum,attr){
    obj.change(function(){
       switch (this.value) {
        case 'notRotate':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum][attr] = 1;
            break;
        case 'rotateSelf':
        
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum][attr] = 2;
            break;
        case 'rotateOfAngel':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum][attr] = 3;
            break;
           default:
               break;
       }
    });
}
/**
 * 获取飞行菜单下的所有输入值的框
 * 
 */
function getFlyValue(bulletNum,trailNum){
    
    var bullets = bulletNum + 1;
    var trails = trailNum + 1;
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].x = parseFloat($('#flyContorlBeginInpX'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].y = parseFloat($('#flyContorlBeginInpY'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].flyAngle = parseFloat($('#flyContorlVendorInpX'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].flySpeed = parseFloat($('#flyContorlStrengthInpX'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].obstructionForce = parseFloat($('#flyContorlResisInpX'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].elasticForce = parseFloat($('#jumpControlInp'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].scrollDistance = parseFloat($('#rollControlInp1'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].scrollSpeed = parseFloat($('#rollControlInp2'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].detectionRange = parseFloat($('#trackArea'+'_'+bullets+'_'+trails).val());
    bulletInfo.bulletsData.bullets[bulletNum].cycles[trailNum].trackAngle = parseFloat($('#trackArea'+'_'+bullets+'_'+trails).val());
    var inpx = $('#elasticControlInp'+'_'+bullets+'_'+trails)[0].value;
    $('#elasticControlInp'+'_'+bullets+'_'+trails)[0].value = parseFloat($('#flyContorlResisInpX'+'_'+bullets+'_'+trails).val());
    console.log(bulletInfo.bulletsData);
}
/**
 * 用于删除弹头的数据,且同时保留以前弹头的tag值，数组长度不变
 * @param num 需要删除的哪一个tag值
 */
function deleteBullet(num){
    if(num < 0){
        return ;
    }else{
        delete bulletInfo.bulletsData.bullets[num];       //delete函数，只删除值，不改变序列
    }
    
    
}




/**
 * 点击添加条件，创建一个标准的triggers的值
 */
function addTriggersVal(num,bulletNum,trailNum) {
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[0]));
    console.log(bulletInfo.bulletsData);
}

/**
 * 删除触发条件的值
 */
function  deleteTrailInfo(num,bulletNum,trailNum){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    delete bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum];
    console.log(bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers);
}
/**
 * 拿到触发条件Top的select框的change事件
 * @param bulNum 弹头数
 * @param traNum 轨迹数
 * @param nowNum 触发条件数
 * @param val 取得的值
 */
function getTriggerMod(bulNum,traNum,nowNum,val){
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].triggerMode = val;
    console.log(bulletInfo.bulletsData);
}

/**
 * 拿到触发结果Bottom的select框的change事件
 */
function getTriggerResultMode(num,bulletNum,trailNum,resultNum,val){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var resNum = resultNum - 1;
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectMode = val;
    console.log(bulletInfo.bulletsData);
}

/**
 * 点击触发结果的添加触发结果按钮时，同时添加数据进数组
 * @param 
 */
function addTriggerEffect(num,bulletNum,trailNum,len){
    
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var length = len -1 ;
    var test1 = bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects;
    test1[length] = deepClone(triggerEffectVal[0]);
   
}

/**
 * 点击触发结果保存按钮保存触发结果的数据
 * @param {*} num 控制触发条件
 * @param {*} bulletNum 控制子弹数
 * @param {*} trailNum 控制轨迹数
 * @param {*} resultNum 控制触发结果数
 */

function getTriggerResult(num,bulletNum,trailNum,resultNum){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var resNum = resultNum - 1;
    var obj = bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams;
    var str = '_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum;
    
    //按顺序取值
    obj.areaEffects = parseFloat($('#triggerOfInpa'+str)[0].value);
    checkboxBottomval(obj,num,bulletNum,trailNum,resultNum);
    obj.type = parseFloat($('#triggerOfInpb' + str )[0].value);
    obj.buffAreaEffects = parseFloat($('#triggerOfInpc'+str)[0].value);
    obj.buffId = parseFloat($('#triggerOfInpd'+str)[0].value);
    obj.damageArea = parseFloat($('#triggerOfInpe'+str)[0].value);
    obj.artSource = $('#triggerOfInpe'+str)[0].value;

    //Top触发条件的值
    var top = bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum];
    switchTopSelVal(top,num,bulletNum,trailNum,resultNum);
    console.log(bulletInfo.bulletsData);
}
/**
 * Top触发条件框下的input的值
 * 
 */
function switchTopSelVal(top,num,bulletNum,trailNum,resultNum){
    switch (top.triggerMode) {
        case 1:
            top.triggerParams = $('#time'+ '_' + num + '_' + bulletNum + '_' + trailNum)[0].value;
            break;
        case 2:
            top.triggerParams = $('#input'+ '_' + num + '_' + bulletNum + '_' + trailNum)[0].value;
            break;
        case 3:
            top.triggerParams = null;
            break;
        case 4:
            checkboxval(top,num,bulletNum,trailNum,resultNum);
            break;
        default:
            break;
    }
    
}
/**
 * 值类型下拉菜单选择
 * @param {*} obj 
 * @param {*} sel 
 */
function switchDamageAttribute(obj,sel){
    sel.change(function(){
        switch (this.value) {
            case 'triggerHurt1':
                obj.damageAttribute = 1;
                break;
            case 'triggerHurt2':
                obj.damageAttribute = 2;
                break;
            case 'triggerHurt3':
                obj.damageAttribute = 3;
                break;
            case 'triggerHurt4':
                obj.damageAttribute = 3;
                break;
            default:
                break;
        }
    });
}
/**
 * 值类型下拉菜单选择
 * @param {*} obj 
 * @param {*} sel 
 */
function switchValueType(obj,sel){
    sel.change(function(){
        switch (this.value) {
            case 'triggerValue1':
                obj.valueType = 1;
                break;
            case 'triggerValue2':
                obj.valueType = 2;
                break;
            case 'triggerValue3':
                obj.valueType = 3;
                break;
        
            default:
                break;
        }
    });
}

/**
 * 重置触发结果的数据
 * @param {*} num 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} resultNum 
 */
function resetTriggerResult(num,bulletNum,trailNum,resultNum){
    var str = $('#triggerResultOption'+'_' + resultNum +'_' + num + '_' + bulletNum + '_' + trailNum).children().children().children().children().children('input');
    var str1 = $('#triggerResultOption'+'_' + resultNum +'_' + num + '_' + bulletNum + '_' + trailNum).children().children().children().children().children('select');
    var len = str.length;
    var len1 = str1.length;
    for(var i = 0;i < len ;++i){
        if(str.eq(i).prop('value')){
            str.eq(i).prop('value','');
        }
        if(str.eq(i).prop('checked')){
            str.eq(i).prop('checked',false);
        }   
    }
    for(var j = 0;j < len1; ++j){
        str1.eq(j).children('option').eq(0).prop('selected',true);
    }
    $('#time'+'_' + num + '_' + bulletNum + '_' + trailNum).prop('value','');
    $('#input'+'_' + num + '_' + bulletNum + '_' + trailNum).prop('value','');
    $('#charitoChecka'+'_' + num + '_' + bulletNum + '_' + trailNum).prop('checked',false);
    $('#charitoCheckb'+'_' + num + '_' + bulletNum + '_' + trailNum).prop('checked',false);
    $('#fileSpan'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).css('display','none');
}

/**
 * 触发条件Top的checkbox的值
 * @param {*} obj 
 * @param {*} num 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} resultNum 
 */
function  checkboxval(obj,num,bulletNum,trailNum,resultNum){
    var len = $('#charitoInfo'+'_' + num + '_' + bulletNum + '_' + trailNum).children('input').length;
    var value = new Array();
    for(var i = 0;i < len ; ++i){
       value.push($('#charitoInfo'+'_' + num + '_' + bulletNum + '_' + trailNum).children('input').eq(i).prop('checked'));
    }
    if(value[0] == true && value[1] == false){
        obj.triggerParams = 1;
    }else if(value[0] == false && value[1] == true){
        obj.triggerParams = 2;
    }else if(value[0] == true && value[1] == true){
        obj.triggerParams = 3;
    }
        
}
/**
 * 触发结果的checkBox的值
 */
function checkboxBottomval(obj,num,bulletNum,trailNum,resultNum){
    var str = $('#triggerResultOption'+'_' + resultNum +'_' + num + '_' + bulletNum + '_' + trailNum).children().children().children().children().children('.chk');
    var len = str.length;;
    var value = new Array();
    for(var i = 0;i < len; ++i){
        value.push(str.eq(i).prop('checked'))
    }
    if(value[0] == true && value[1] == false){
        obj.effectObject = 1;
    }else if(value[0] == false && value[1] == true){
        obj.effectObject = 2;
    }else if(value[0] == true && value[1] == true){
        obj.effectObject = 3;
    }
    if(value[2] == true && value[3] == false){
        obj.buffEffectObject = 1;
    }else if(value[2] == false && value[3] == true){
        obj.buffEffectObject = 2;
    }else if(value[2] == true && value[3] == true){
        obj.buffEffectObject = 3;
    }
}
/**
 * 点击删除触发结果，同时删除数组中的数据
 * @param {*} num 触发条件
 * @param {*} bulletNum 弹头数 
 * @param {*} trailNum 轨迹数
 * @param {*} resultNum 触发结果数
 */
function deleteTrailResult(num,bulletNum,trailNum,resultNum){
    var nowNum = num -1;
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var resNum = resultNum - 1;
    var test1 = bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum];
    delete bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum];
}
/**
 * 选择添加轨迹阶段后，添加轨迹阶段的数据
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function addTrailVal(bulletNum,trailNum){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum] = deepClone(bulletConstVal[0].cycles[0]);
    triggerVal[0].effects = [];
    triggerVal[1].effects = [];
   for(var i = 0; i < 4; ++i){
        triggerVal[0].effects.push(deepClone(triggerEffectVal[0]));
        triggerVal[1].effects.push(deepClone(triggerEffectVal[0]));
    }
    
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers = [];
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[0]));
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[1]));
    
}
/**
 * 给在触发结果点击ADD按钮添加的子弹头，添加标志位
 * @param {*} num 
 * @param {*} bulletInfo 
 * @param {*} bulNum 
 * @param {*} trailNum 
 * @param {*} resultNum 
 */
function addUniqueFlag(bulletNum){
    console.log(bulletInfo.bulNum);
    var bulNum = bulletInfo.bulNum - 1;
    bulletInfo.bulletsData.bullets[bulNum].launched = true;
}

/**
 * 点击弹头中的保存按钮，获取对应弹头的信息
 * @param {*} num 
 */
function getBulletsVal(num){
   var bulNum = num - 1;
    bulletInfo.bulletsData.bullets[bulNum].initialSpeed = parseFloat($('#speedModInp_' + num).prop('value'));
    bulletInfo.bulletsData.bullets[bulNum].width = parseFloat($('#sizeModWid_' + num).prop('value'));
    bulletInfo.bulletsData.bullets[bulNum].height = parseFloat($('#sizeModHei_' + num).prop('value'));
    bulletInfo.bulletsData.bullets[bulNum].mass = parseFloat($('#massModInp_' + num).prop('value'));
    bulletInfo.bulletsData.bullets[bulNum].rotationSpeed = parseFloat($('#rotationMomentModInp_' + num).prop('value'));
   
}
/**
 * 重置弹头信息
 * @param {*} num 
 */
function resetBulletsVal(num){
    var bulNum = num - 1;
    $('#speedModInp_' + num).prop('value',null);
    $('#sizeModWid_' + num).prop('value',null);
    $('#sizeModHei_' + num).prop('value',null);
    $('#massModInp_' + num).prop('value',null);
    $('#rotationMomentModInp_' + num).prop('value',null);

}
/**
 * 删除轨迹阶段的同时，删除轨迹阶段的数据
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function deleteTrailVal(bulletNum,trailNum){
    var bulNum = bulletNum -1;
    var traNum = trailNum - 1;
    delete bulletInfo.bulletsData.bullets[bulNum].cycles[traNum];
    
}
/**
 * 改变战车发射周期总时长，改变值
 */
function changeDuration(val) {
    bulletInfo.bulletsData.launchDuration = parseFloat(val);
    console.log(bulletInfo.bulletsData);
}

/**
 * 获取弹头的图片资源
 * @param name 获取到的图片的名字
 * @param num 子弹的数量
 */
function getImgSrc(name,num){
    var bulNum = num - 1;
    bulletInfo.bulletsData.bullets[bulNum].image = name;
    console.log(bulletInfo.bulletsData);
}
/**
 * 获取弹头的图片资源
 * @param name 获取到的图片的名字
 * @param num 子弹的数量
 */
function getImgSrc1(name,num,bulletNum,trailNum,resultNum){
    var bulNum = bulletNum - 1;
    var nowNum = num - 1;
    var traNum = trailNum - 1;
    var resNum = resultNum - 1;
    bulletInfo.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams.artSource = name;
    console.log(bulletInfo.bulletsData);
}

/**
 * 判断是否继承 如果是轨迹阶段1，则不能选择继承,如果非轨迹阶段1，选择继承之后，input框不能操作
 * @param {*} obj  继承的select选项
 * @param {*} val  selectd option选项
 * @param {*} preNum 弹头 -1
 * @param {*} nexNum 轨迹阶段-1
 */
function isInherit(obj,val,preNum,nexNum){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    var str = '_' + bulletNum + '_' + trailNum;
    switch (val) {
        case 'beginSel3':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isBeginPointInherit = true;
            $('#flyContorlBeginInpX' + str).prop('readonly','readonly');
            $('#flyContorlBeginInpY' + str).prop('readonly','readonly');
            break;
        case 'vendor3':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isAngleInherit = true;
            $('#flyContorlVendorInpX' + str).prop('readonly','readonly');
            break;
        case 'strength3':
            bulletInfo.bulletsData.bullets[preNum].cycles[nexNum].isSpeedInherit = true;
            $('#flyContorlStrengthInpX' + str).prop('readonly','readonly');    
            break;
    
        default:
            break;
    }
}