/**
 * 此文件用于对数据进行操作，增加，删除，修改
 */

 /**
  * 此函数用于点击Add按钮时，同时把数据存入bulletInfo中,给数组添加初值
  *  @param proto 在哪个原型里存
  */
  var time = new Array();
 function getAddBulletInfo(bulletNum,trailNum,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1; 
    proto.bulletsData.bullets.push(deepClone(bulletConstVal[0]));
    triggerVal[0].effects = [];
    triggerVal[1].effects = [];
   for(var i = 0; i < 2; ++i){
        triggerVal[0].effects.push(deepClone(triggerEffectVal[0]));
        triggerVal[1].effects.push(deepClone(triggerEffectVal[0]));
    }
    if(proto.bulletsData.bullets[bulNum].cycles[traNum]){
        proto.bulletsData.bullets[bulNum].cycles[traNum].triggers = [];
        proto.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[0]));
        proto.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[1]));
    }
    
    proto.bulletsData.launchDuration = parseFloat($('#barsInp1')[0].value);
    proto.bulletsData.id = parseInt($('#powderIdOfP').html()); 

    time[bulNum] = (parseFloat($('#title0')[0].innerHTML));
    if( proto.bulletsData.bullets[bulNum]){
        proto.bulletsData.bullets[bulNum].launchTime = time[bulNum];
    }
 
 }

 /**
* 此函数用于判断运动轨迹下拉菜单框的事件,并将获取到的数据存入数组
* @param text 下拉菜单选项的名字
*/
function switchFlySel(obj,preNum,nexNum,proto){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    if(obj.length){
        triggerFlyControl(preNum,nexNum,proto);
        obj.change(function(){
            switch (this.value) {
                case 'trailMove1':
                proto.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 1;
                triggerFlyControl(preNum,nexNum,proto);
                break;
                case 'trailMove2':
                proto.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 2;
                switchRotateMod($('#rollRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,'rotateMode',proto);
                break;
                case 'trailMove3':
                proto.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 3;
                switchRotateMod($('#jumpRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,'rotateMode',proto);
                break;
                case 'trailMove4':
                proto.bulletsData.bullets[preNum].cycles[nexNum].motionMode = 4;
                break;
                default:
                    break;
            }
        });
    }
}
/**
 * 此函数用于飞行模式下的下拉菜单的选择情况
 */
function triggerFlyControl(preNum,nexNum,proto){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    switchFlyContSel($('#flyBegin'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    switchFlyContSel($('#flyVen'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    switchFlyContSel($('#flySpeed'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    switchFlyContSel($('#flyMode'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);
    switchFlyContSel($('#flyTrack'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    switchFlyContSel($('#flyRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);
    switchFlyContSel($('#trackTarget'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);
}

/**
 * 用于判断飞行模式下下拉菜单框具体事件，并存入数据
 * 
 */
function switchFlyContSel(obj,preNum,nexNum,proto) {
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    var str = '_' + bulletNum + '_' + trailNum;
    obj.change(function(){
        switch (this.value) {
            case 'beginSel3':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCoord= true;  //继承
                $('#flyContorlBeginInpX' + str).prop('readonly','readonly');
                $('#flyContorlBeginInpY' + str).prop('readonly','readonly');
                $('#flyContorlBeginInpX' + str).prop('value','');
                $('#flyContorlBeginInpY' + str).prop('value','');
                break;
            case 'beginSel2':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCoord = false;  //偏移
                rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
                rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
                break;
            case 'beginSel1':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCoord = true; //绝对
                rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
                rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
                break;
            case 'vendor3':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation = true;
                $('#flyContorlVendorInpX' + str).prop('readonly','readonly');
                break;
            case 'vendor1':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation = true;
                rmReadOnly($('#flyContorlVendorInpX' + str),bulletNum,trailNum);
                break;
            case 'vendor2':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation = false;
                rmReadOnly($('#flyContorlVendorInpX' + str),bulletNum,trailNum);
                break;
            case 'strength3':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed = true;
                $('#flyContorlStrengthInpX' + str).prop('readonly','readonly');
                break;
            case 'strength1':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed = true;
                rmReadOnly($('#flyContorlStrengthInpX' + str),bulletNum,trailNum);
                break;
            case 'strength2':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed = false;
                rmReadOnly($('#flyContorlStrengthInpX' + str),bulletNum,trailNum);
                break;
            case 'isGravity':
                proto.bulletsData.bullets[preNum].cycles[nexNum].flyMode = 1; //抛物线
                break;
            case 'notGravity':
                proto.bulletsData.bullets[preNum].cycles[nexNum].flyMode = 2; //直线
                break;
            case 'notRotate':
                proto.bulletsData.bullets[preNum].cycles[nexNum].rotateMode = 1; //不旋转
                break;
            case 'rotateSelf':
                proto.bulletsData.bullets[preNum].cycles[nexNum].rotateMode = 2;  //自转
                break;
            case 'rotateOfAngel':
                proto.bulletsData.bullets[preNum].cycles[nexNum].rotateMode = 3;  //随角度转
                break;
            case 'notTrack':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isTrack = false;
                $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','none') : $('#flyDiv8' + str).css('display','none');
                break;
            case 'isTrack':
                proto.bulletsData.bullets[preNum].cycles[nexNum].isTrack = true;
                $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','block') : $('#flyDiv8' + str).css('display','block');
                break;
            case 'anemy':
                proto.bulletsData.bullets[preNum].cycles[nexNum].trackTarget = 1;
                break;
            case 'partner':
                proto.bulletsData.bullets[preNum].cycles[nexNum].trackTarget = 2;
                break;
            case 'both':
                proto.bulletsData.bullets[preNum].cycles[nexNum].trackTarget = 3;
            
            break;
            default:
            // isInherit(obj,this.value,preNum,nexNum,proto);
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
function  switchRotateMod(obj,preNum,nexNum,attr,proto){
    obj.change(function(){
       switch (this.value) {
        case 'notRotate':
        proto.bulletsData.bullets[preNum].cycles[nexNum][attr] = 1;
            break;
        case 'rotateSelf':
        
        proto.bulletsData.bullets[preNum].cycles[nexNum][attr] = 2;
            break;
        case 'rotateOfAngel':
        proto.bulletsData.bullets[preNum].cycles[nexNum][attr] = 3;
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
function getFlyValue(bulletNum,trailNum,proto){
    
    var bullets = bulletNum + 1;
    var trails = trailNum + 1;
    if(proto.bulletsData.bullets[bulletNum]){
        if(proto.bulletsData.bullets[bulletNum].cycles[trailNum]){
            var val = proto.bulletsData.bullets[bulletNum].cycles[trailNum].motionMode;
            switch (val) {
                case 1:
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].x = parseFloat($('#flyContorlBeginInpX'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].y = parseFloat($('#flyContorlBeginInpY'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].rotation = parseFloat($('#flyContorlVendorInpX'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].speed = parseFloat($('#flyContorlStrengthInpX'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].obstructionLoss = parseFloat($('#flyContorlResisInpX'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].trackRange = parseFloat($('#trackArea'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].trackAngle = parseFloat($('#trackAngle'+'_'+bullets+'_'+trails).val());  
                     break;
                case 2:
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].speed = parseFloat($('#rollControlInp2'+'_'+bullets+'_'+trails).val());
                    break;
                case 3:
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].elasticityLoss = parseFloat($('#jumpControlInp'+'_'+bullets+'_'+trails).val());
                proto.bulletsData.bullets[bulletNum].cycles[trailNum].obstructionLoss = parseFloat($('#elasticControlInp'+'_'+bullets+'_'+trails).val());
                    break;
                case 4:
                    
                    break;
                default:
                    break;
            }
           
            
        }
    }

}
/**
 * 用于删除弹头的数据,且同时保留以前弹头的tag值，数组长度不变
 * @param num 需要删除的哪一个tag值
 */
function deleteBullet(num,proto){
    if(num < 0){
        return ;
    }else{
        proto.bulletsData.bullets.splice(num,1);
        proto.bulNum -= 1;
        // delete proto.bulletsData.bullets[num];       //delete函数，只删除值，不改变序列
    }
    
    
}

/**
 * 点击添加条件，创建一个标准的triggers的值
 */
function addTriggersVal(num,bulletNum,trailNum,proto) {
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    if(triggerVal[0].effects.length != 0){
        proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum] = (deepClone(triggerVal[0]));
    }else{
        for(var i = 0; i < 2; ++i){
            triggerVal[0].effects.push(deepClone(triggerEffectVal[0]));
        }
        proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum] = (deepClone(triggerVal[0]));
    }
    
}

/**
 * 删除触发条件的值
 */
function  deleteTrailInfo(num,bulletNum,trailNum,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    delete proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum];
}
/**
 * 拿到触发条件Top的select框的change事件
 * @param bulNum 弹头数
 * @param traNum 轨迹数
 * @param nowNum 触发条件数
 * @param val 取得的值
 */
function getTriggerMod(bulNum,traNum,nowNum,val,proto){
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].triggerMode = val;
}

/**
 * 拿到触发结果Bottom的select框的change事件
 */
function getTriggerResultMode(num,bulletNum,trailNum,resultNum,val,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var resNum = resultNum - 1;
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectMode = val;
}

/**
 * 点击触发结果的添加触发结果按钮时，同时添加数据进数组
 * @param 
 */
function addTriggerEffect(num,bulletNum,trailNum,len,proto){
    
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var length = len -1 ;
    var test1 = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects;
    test1[length] = deepClone(triggerEffectVal[0]);
   
}
/**
 * 点击触发结果保存按钮保存触发结果的数据
 * @param {*} num 控制触发条件
 * @param {*} bulletNum 控制子弹数
 * @param {*} trailNum 控制轨迹数
 * @param {*} resultNum 控制触发结果数
 */

function getTriggerResult(num,bulletNum,trailNum,resultNum,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum -1;
    var nowNum = num -1;
    var resNum = resultNum - 1;
    var str = '_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum;
    if(proto.bulletsData.bullets[bulNum]){
        if(proto.bulletsData.bullets[bulNum].cycles[traNum]){
            if(proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum]){
                if(proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum]){
                    if(proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams){
                        var obj = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams;

                        //按顺序取值
                        if($('#triggerOfInpa'+str).length){
                            if($('#triggerOfInpa'+str).prop('value')){
                                obj.range = parseFloat($('#triggerOfInpa'+str).prop('value'));   //影响范围
                            }
                        }
                        if($('#triggerOfInpb' + str ).length){
                            if($('#triggerOfInpb' + str ).prop('value')){
                                obj.effectValue = parseFloat($('#triggerOfInpb' + str ).prop('value'));
                            }
                        }
                        if($('#triggerOfInpc' + str ).length){
                            if($('#triggerOfInpc' + str ).prop('value')){
                                obj.range = parseFloat($('#triggerOfInpc' + str ).prop('value'));
                            }
                        }
                        if($('#triggerOfInpd' + str ).length){
                            if($('#triggerOfInpd' + str ).prop('value')){
                                obj.buffId = parseFloat($('#triggerOfInpd' + str ).prop('value'));
                            }
                        }
                        if($('#triggerOfInpe' + str ).length){
                            if($('#triggerOfInpe' + str ).prop('value')){
                                obj.range = parseFloat($('#triggerOfInpe' + str ).prop('value'));
                            }
                        }
                        checkboxBottomval(obj,num,bulletNum,trailNum,resultNum);
                    
                        //Top触发条件的值
                        var top = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum];
                        switchTopSelVal(top,num,bulletNum,trailNum,resultNum);
                    }
                }
            }
        }
    }
}
/**
 * Top触发条件框下的input的值
 * 
 */
function switchTopSelVal(top,num,bulletNum,trailNum,resultNum){
    if($('#time'+ '_' + num + '_' + bulletNum + '_' + trailNum).length){
        
            switch (top.triggerMode) {
                case 1:
                    top.triggerParams = $('#time'+ '_' + num + '_' + bulletNum + '_' + trailNum).prop('value');
                    break;
                case 2:
                    top.triggerParams = $('#input'+ '_' + num + '_' + bulletNum + '_' + trailNum).prop('value');
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
                    obj.damageType = 1;
                    break;
                case 'triggerHurt2':
                    obj.damageType = 2;
                    break;
                case 'triggerHurt3':
                    obj.damageType = 3;
                    break;
                case 'triggerHurt4':
                    obj.damageType = 4;
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
                    obj.effectType = 1;
                    break;
                case 'triggerValue2':
                    obj.effectType = 2;
                    break;
                case 'triggerValue3':
                    obj.effectType = 3;
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
        obj.target = 1;
    }else if(value[0] == false && value[1] == true){
        obj.target = 2;
    }else if(value[0] == true && value[1] == true){
        obj.target = 3;
    }
    if(value[2] == true && value[3] == false){
        obj.target = 1;
    }else if(value[2] == false && value[3] == true){
        obj.target = 2;
    }else if(value[2] == true && value[3] == true){
        obj.target = 3;
    }
}
/**
 * 点击删除触发结果，同时删除数组中的数据
 * @param {*} num 触发条件
 * @param {*} bulletNum 弹头数 
 * @param {*} trailNum 轨迹数
 * @param {*} resultNum 触发结果数
 */
function deleteTrailResult(num,bulletNum,trailNum,resultNum,proto){
    var nowNum = num -1;
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var resNum = resultNum - 1;
    delete proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum];
}
/**
 * 选择添加轨迹阶段后，添加轨迹阶段的数据
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function addTrailVal(bulletNum,trailNum,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    proto.bulletsData.bullets[bulNum].cycles[traNum] = deepClone(bulletConstVal[0].cycles[0]);
    triggerVal[0].effects = [];
    triggerVal[1].effects = [];
   for(var i = 0; i < 2; ++i){
        triggerVal[0].effects.push(deepClone(triggerEffectVal[0]));
        triggerVal[1].effects.push(deepClone(triggerEffectVal[0]));
    }
    
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers = [];
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[0]));
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers.push(deepClone(triggerVal[1]));
    
}
/**
 * 给在触发结果点击ADD按钮添加的子弹头，添加标志位
 * @param {*} num 
 * @param {*} proto
 * @param {*} bulNum 
 * @param {*} trailNum 
 * @param {*} resultNum 
 */
function addUniqueFlag(proto){
    var bulNum = proto.bulNum - 1;
    proto.bulletsData.bullets[bulNum].launched = false;
}

/**
 * 点击弹头中的保存按钮，获取对应弹头的信息
 * @param {*} num 
 * @param {*} obj 在何处存值
 */
function getBulletsVal(num,proto){
   var bulNum = num - 1;
   if(proto.bulletsData.bullets[bulNum]){

        proto.bulletsData.bullets[bulNum].speed = parseFloat($('#speedModInp_' + num).prop('value'));
        proto.bulletsData.bullets[bulNum].width = parseFloat($('#sizeModWid_' + num).prop('value'));
        proto.bulletsData.bullets[bulNum].height = parseFloat($('#sizeModHei_' + num).prop('value'));
        proto.bulletsData.bullets[bulNum].mass = parseFloat($('#massModInp_' + num).prop('value'));
        proto.bulletsData.bullets[bulNum].rotationMoment = parseFloat($('#rotationMomentModInp_' + num).prop('value'));
        proto.bulletsData.bullets[bulNum].radius = parseInt($('#cycle_' + num).prop('value'));

    }
   
   
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
    $('#cycle_' + num).prop('value','');
    $('#filesName_' + num).prop('value','');

}
/**
 * 删除轨迹阶段的同时，删除轨迹阶段的数据
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function deleteTrailVal(bulletNum,trailNum,proto){
    var bulNum = bulletNum -1;
    var traNum = trailNum - 1;
    delete proto.bulletsData.bullets[bulNum].cycles[traNum];
    
}
/**
 * 改变战车发射周期总时长，改变值
 */
function changeDuration(val,proto) {
    proto.bulletsData.launchDuration = parseFloat(val);
    
}

/**
 * 获取弹头的图片资源
 * @param name 获取到的图片的名字
 * @param num 子弹的数量
 */
function getImgSrc(name,num,proto){
    var bulNum = num - 1;
    proto.bulletsData.bullets[bulNum].image = name;
    $('#filesName_' + num).prop('value',name);
    
}
/**
 * 获取弹头的图片资源
 * @param name 获取到的图片的名字
 * @param num 子弹的数量
 */
function getImgSrc1(name,num,bulletNum,trailNum,resultNum,proto){
    var bulNum = bulletNum - 1;
    var nowNum = num - 1;
    var traNum = trailNum - 1;
    var resNum = resultNum - 1;
    proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams.source = name;
    $('#filesName'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).prop('value',name);
}

/**
 * 判断是否继承 如果是轨迹阶段1，则不能选择继承,如果非轨迹阶段1，选择继承之后，input框不能操作
 * @param {*} obj  继承的select选项
 * @param {*} val  selectd option选项
 * @param {*} preNum 弹头 -1
 * @param {*} nexNum 轨迹阶段-1
 */
function isInherit(obj,val,preNum,nexNum,proto){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    var str = '_' + bulletNum + '_' + trailNum;
    switch (val) {
        case 'beginSel3':
            proto.bulletsData.bullets[preNum].cycles[nexNum].isBeginPointInherit = true;
            $('#flyContorlBeginInpX' + str).prop('readonly','readonly');
            $('#flyContorlBeginInpY' + str).prop('readonly','readonly');
            break;
        case 'vendor3':
            proto.bulletsData.bullets[preNum].cycles[nexNum].isAngleInherit = true;
            $('#flyContorlVendorInpX' + str).prop('readonly','readonly');
            break;
        case 'strength3':
            proto.bulletsData.bullets[preNum].cycles[nexNum].isSpeedInherit = true;
            $('#flyContorlStrengthInpX' + str).prop('readonly','readonly');    
            break;
    
        default:
            break;
    }
}



/************************************************以下为载入的JS******************************************************************* */


/**
 * 载入弹头的数据
 * @param {*} num  弹头的数据
 * @param {*} proto 从数组取的值
 */
function loadBulletsVal(num,proto){
    var bulNum = num - 1;
   if(proto.bulletsData.bullets[bulNum]){
       var bulObj = proto.bulletsData.bullets[bulNum];
       
        bulObj.speed !='NaN' ? $('#speedModInp_' + num).prop('value',bulObj.speed) : $('#speedModInp_' + num).prop('value','');
        bulObj.width !='NaN' ?  $('#sizeModWid_' + num).prop('value',bulObj.width) : $('#sizeModWid_' + num).prop('value','');
        bulObj.height !='NaN' ? $('#sizeModHei_' + num).prop('value',bulObj.height) : $('#sizeModHei_' + num).prop('value','');
        bulObj.mass !='NaN' ? $('#massModInp_' + num).prop('value',bulObj.mass) : $('#massModInp_' + num).prop('value','');
        bulObj.rotationMoment !='NaN' ? $('#rotationMomentModInp_' + num).prop('value',bulObj.rotationMoment) :  $('#rotationMomentModInp_' + num).prop('value','');
        $('#filesName_' + num).prop('value',bulObj.image);
        bulObj.radius !='NaN' ? $('#cycle_' + num).prop('value',bulObj.radius) : $('#cycle_' + num).prop('value','');
        whichSizeSel(bulObj,num);
   }
}
function whichSizeSel(bulObj,num){
    var val = bulObj.sizeMode;
    if(val == 1){
        $('#sizSel_' + num).children().eq(0).prop('selected','selected');
        $('#sizeModWid_' + num).attr('readonly','readonly');
        $('#sizeModHei_' + num).attr('readOnly','readObly');
        $('#cycle_' + num).attr('readOnly',false);
        
    }else if(val == 2){
        $('#sizSel_' + num).children().eq(1).prop('selected','selected');
        $('#cycle_' + num).attr('readOnly','readObly');
        $('#sizeModWid_' + num).attr('readonly',false);
        $('#sizeModHei_' + num).attr('readOnly',false);
        
    }
}
/**
 * 载入运动轨迹的数据
 * @param {*} bulNum 
 * @param {*} trailNum 
 * @param {*} proto 
 */
function loadTrailMoveVal(bulletNum,trailNum,proto){
    var preNum = bulletNum - 1;
    var nexNum = trailNum - 1;
    //决定是哪个模块的页面
    whichTrailMove(bulletNum,trailNum,proto);
    // //载入页面数据
    // //首先载入页面的switch选项
    
    whichSwitchFlyContSel($('#flyBegin'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    whichSwitchFlyContSel($('#flyVen'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    whichSwitchFlyContSel($('#flySpeed'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    whichSwitchFlyContSel($('#flyMode'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);
    whichSwitchFlyContSel($('#flyTrack'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto); 
    whichSwitchFlyContSel($('#flyRotateMod'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);
    whichSwitchFlyContSel($('#trackTarget'+'_'+bulletNum+'_'+trailNum),preNum,nexNum,proto);

    //载入运动轨迹下所有的inp
    loadTrailInpVal(preNum,nexNum,proto);

}

/**
 * 载入触发条件的值
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} proto 
 */
function loadConditionVal(bulletNum,trailNum,num,proto){
    //决定哪个下拉菜单框
    whichConditionSel(bulletNum,trailNum,num,proto);
}

/**
 * 载入触发结果的值
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} resultNum 
 * @param {*} proto 
 */
function loadResultVal(bulletNum,trailNum,num,resultNum,proto){
    //决定是哪个结果框
    whichConditionSel1(bulletNum,trailNum,num,resultNum,proto);
    //效果值下的select框
    whichValueSel(bulletNum,trailNum,num,resultNum,proto);
    //checkbox的值
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var nowNum = num - 1;
    var resNum = resultNum - 1;
    if(proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams){
        var val = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams;
        var val1 = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum];
        //所有结果的inp的值
        
        loadResultInpVal(bulletNum,trailNum,num,resultNum,val,val1);
    }
   
  
    
    
}

function loadResultInpVal(bulletNum,trailNum,num,resultNum,val,val1){
    var str = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum;
    switch (val1.effectMode) {
        case 1:
            break;
        case 2:
            loadcheckBoxVal1(bulletNum,trailNum,num,resultNum,val.target,'#charitoCheckc','#charitoCheckd');
            val.range == null ? $('#triggerOfInpa'+str).prop('value','') : $('#triggerOfInpa'+str).prop('value',val.range);
            val.effectValue == null ? $('#triggerOfInpb' + str ).prop('value','') : $('#triggerOfInpb' + str ).prop('value',val.effectValue);
            break;
        case 3:
            loadcheckBoxVal1(bulletNum,trailNum,num,resultNum,val.target,'#charitoChecke','#charitoCheckf');
            val.range == null ?$('#triggerOfInpc' + str ).prop('value','') : $('#triggerOfInpc' + str ).prop('value',val.range);
            val.buffId == null ? $('#triggerOfInpd' + str ).prop('value','') : $('#triggerOfInpd' + str ).prop('value',val.buffId);
            break;
        case 4:
            val.range == null ? $('#triggerOfInpe' + str ).prop('value','') : $('#triggerOfInpe' + str ).prop('value',val.range);
            break;
        case 5:
            val.source == null ? $('#filesName' + str ).prop('value','') :$('#filesName' + str ).prop('value',val.source);
            break;
        case 6:
            break;
        case 7:
            break;
        default:
            break;
    }

}
/**
 * 载入触发结果的checkbox
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} resultNum 
 * @param {*} val 数组中对应的触发结果的checkbox选项的值
 * @param {*} chk1 
 * @param {*} chk2 
 */
function loadcheckBoxVal1(bulletNum,trailNum,num,resultNum,val,chk1,chk2){
    var str = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum; 
    switch (val) {
        case 1:
            $(chk1 + str).prop('checked','checkd');
            break;
        case 2:
            $(chk2 + str).prop('checked','checkd');
            break;
        case 3:
            $(chk1 + str).prop('checked','checkd');
            $(chk2 + str).prop('checked','checkd');
            break;
    
        default:
            break;
    }
}

/**
 * 触发结果效果值下的select框
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} resultNum 
 * @param {*} proto 
 */
function whichValueSel(bulletNum,trailNum,num,resultNum,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var nowNum = num - 1;
    var resNum = resultNum - 1;
    var str = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum;
    if(proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams){
        var val1 = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams.effectType;
        var val2 = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectParams.damageType;
    }
    
    switch (val1) {
        case 1:
            $('#effectOfValueSela' + str).children().eq(0).prop('selected','selected');
            break;
        case 2:
            $('#effectOfValueSela' + str).children().eq(1).prop('selected','selected');
            break;
        case 3:
            $('#effectOfValueSela' + str).children().eq(2).prop('selected','selected');
            break;
        default:
            break;
    }
    switch (val2) {
        case 1:
            $('#effectOfValueSelb' + str).children().eq(0).prop('selected','selected');
            break;
        case 2:
            $('#effectOfValueSelb' + str).children().eq(1).prop('selected','selected');
            break;
        case 3:
            $('#effectOfValueSelb' + str).children().eq(2).prop('selected','selected');
            break;
        case 4:
            $('#effectOfValueSelb' + str).children().eq(3).prop('selected','selected');
            break;
        default:
            break;
    }


}


/**
 * 载入触发结果哪个下拉菜单框
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} resultNum 
 * @param {*} proto 
 */
function whichConditionSel1(bulletNum,trailNum,num,resultNum,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var nowNum = num - 1;
    var resNum = resultNum - 1;
    var val = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectMode;
    var str = '_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum;
    switch (val) {
        case 1:
            $('#triggerResultSel' + str).children().eq(1).prop('selected','selected');
            break;
        case 2:
            $('#triggerResultSel' + str).children().eq(2).prop('selected','selected');
            break;
        case 3:
            $('#triggerResultSel' + str).children().eq(3).prop('selected','selected');
            break;
        case 4:
            $('#triggerResultSel' + str).children().eq(4).prop('selected','selected');
            break;
        case 5:
            $('#triggerResultSel' + str).children().eq(5).prop('selected','selected');
            break;
        case 6:
            $('#triggerResultSel' + str).children().eq(6).prop('selected','selected');
            break;
        case 7:
            $('#triggerResultSel' + str).children().eq(7).prop('selected','selected');
            break;
        
        default:
            break;
    }

}

/**
 * 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} proto 
 */
function whichConditionSel(bulletNum,trailNum,num,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var nowNum = num - 1;
    var str = '_' + num + '_' + bulletNum + '_' + trailNum;
    var val = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].triggerMode;
    var top = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum];
    switch (val) {
        case 1:
            $('#triggerSelect' + str).children().eq(1).prop('selected','selected');
            $('#time'+ '_' + num + '_' + bulletNum + '_' + trailNum).prop('value',top.triggerParams);
            break;
        case 2: 
            $('#triggerSelect' + str).children().eq(2).prop('selected','selected');
            $('#input'+ '_' + num + '_' + bulletNum + '_' + trailNum).prop('value',top.triggerParams);
            break;
        case 3:
            $('#triggerSelect' + str).children().eq(3).prop('selected','selected');
            break;
        case 4:
            $('#triggerSelect' + str).children().eq(4).prop('selected','selected');
            loadcheckBoxVal(top.triggerParams,bulletNum,trailNum,num);
            break;
        default:
            break;
    }
}

/**
 * 载入checkBox的值
 * @param {*} param 
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 */
function loadcheckBoxVal(param,bulletNum,trailNum,num){
    var str = '_' + num + '_' + bulletNum + '_' + trailNum;
    switch(param){
        case 1:
            $('#charitoChecka' + str).prop('checked','checked');
            break;
        case 2:
            $('#charitoCheckb' + str).prop('checked','checked');
            break;
        case 3:
            $('#charitoChecka' + str).prop('checked','checked');
            $('#charitoCheckb' + str).prop('checked','checked');
            break;
        default:
            
            break;
    }
}




/**
 * 载入运动轨迹下所有的Inp的值
 * @param {*} preNum 
 * @param {*} nexNum 
 * @param {*} proto 
 */
function loadTrailInpVal(preNum,nexNum,proto){
    var bullets = preNum + 1;
    var trails = nexNum + 1;
    var val = proto.bulletsData.bullets[preNum].cycles[nexNum];
    switch (val.motionMode) {
        case 1:
            val.x == "NaN" ? $('#flyContorlBeginInpX'+'_'+bullets+'_'+trails).prop('value','') : $('#flyContorlBeginInpX'+'_'+bullets+'_'+trails).prop('value',val.x);
            val.y == "NaN" ? $('#flyContorlBeginInpY'+'_'+bullets+'_'+trails).prop('value','') :$('#flyContorlBeginInpY'+'_'+bullets+'_'+trails).prop('value',val.y);
            val.rotation == "NaN" ? $('#flyContorlVendorInpX'+'_'+bullets+'_'+trails).prop('value','') :$('#flyContorlVendorInpX'+'_'+bullets+'_'+trails).prop('value',val.rotation);
            val.speed == "NaN" ? $('#flyContorlStrengthInpX'+'_'+bullets+'_'+trails).prop('value','') :$('#flyContorlStrengthInpX'+'_'+bullets+'_'+trails).prop('value',val.speed);
            val.obstructionLoss == "NaN" ? $('#flyContorlResisInpX'+'_'+bullets+'_'+trails).prop('value','') :$('#flyContorlResisInpX'+'_'+bullets+'_'+trails).prop('value',val.obstructionLoss);
            val.trackRange == "NaN"? $('#trackArea'+'_'+bullets+'_'+trails).prop('value','') :$('#trackArea'+'_'+bullets+'_'+trails).prop('value',val.trackRange);
            val.trackAngle == "NaN"? $('#trackAngle'+'_'+bullets+'_'+trails).prop('value','') :$('#trackAngle'+'_'+bullets+'_'+trails).prop('value',val.trackAngle);
            break;
        case 2:
            val.speed == "NaN"? $('#rollControlInp2'+'_'+bullets+'_'+trails).prop('value','') :$('#rollControlInp2'+'_'+bullets+'_'+trails).prop('value',val.speed);
            break;
        case 3:
            val.obstructionLoss == "NaN"? $('#elasticControlInp'+'_'+bullets+'_'+trails).prop('value','') :$('#elasticControlInp'+'_'+bullets+'_'+trails).prop('value',val.obstructionLoss);
            val.elasticityLoss == "NaN"? $('#jumpControlInp'+'_'+bullets+'_'+trails).prop('value','') :$('#jumpControlInp'+'_'+bullets+'_'+trails).prop('value',val.elasticityLoss);
        break;
        case 4:
            
            break;
        default:
            break;
    }
   
   

}


/**
 * 运动轨迹下拉菜单选项
 * @param {*} obj 
 * @param {*} preNum 
 * @param {*} nexNum 
 * @param {*} proto 
 */
function whichSwitchFlyContSel(obj,preNum,nexNum,proto){
    var bulletNum = preNum + 1;
    var trailNum = nexNum + 1;
    var str = '_' + bulletNum + '_' +trailNum;
    var proBul = proto.bulletsData.bullets[preNum].cycles[nexNum];
    var val1 = proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetCoord;
    var val2 = proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetRotation;
    var val3 = proto.bulletsData.bullets[preNum].cycles[nexNum].isOffsetSpeed;
    var val4 = proto.bulletsData.bullets[preNum].cycles[nexNum].flyMode;
    var val5 = proto.bulletsData.bullets[preNum].cycles[nexNum].isTrack;
    var val6 = proto.bulletsData.bullets[preNum].cycles[nexNum].rotateMode;
    var val9 = proto.bulletsData.bullets[preNum].cycles[nexNum].trackTarget;
    switch (val1) {
        case true:
        if(proBul.x != "NaN"){
            rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
            rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
            $('#flyBegin' + str).children().eq(1).prop('selected','selected');
        }else{
            $('#flyContorlBeginInpX' + str).prop('readonly','readonly');
            $('#flyContorlBeginInpY' + str).prop('readonly','readonly');
            $('#flyBegin' + str).children().eq(0).prop('selected','selected');
        }            
            break;

        case false:
            rmReadOnly($('#flyContorlBeginInpX' + str),bulletNum,trailNum);
            rmReadOnly($('#flyContorlBeginInpY' + str),bulletNum,trailNum);
            $('#flyBegin' + str).children().eq(2).prop('selected','selected');
            break;
    
        default:
            break;
    }
    switchInheritModSel(val2,'#flyContorlVendorInpX',bulletNum,trailNum,'#flyVen',proBul.rotation);
    switchInheritModSel(val3,'#flyContorlStrengthInpX',bulletNum,trailNum,'#flySpeed',proBul.speed);  //??
    switch (val4) {
        case 1:
            $('#flyMode' + str).children().eq(0).prop('selected','selected');
            break;
        case 2:
            $('#flyMode' + str).children().eq(1).prop('selected','selected');
            break;
        default:
            break;
    }
    switch (val5) {
        case true:
            $('#flyTrack' + str).children().eq(1).prop('selected','selected');
            $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','block') : $('#flyDiv8' + str).css('display','block');
            break;
        case false:
            $('#flyTrack' + str).children().eq(0).prop('selected','selected');
            $('#flyDiv8' + str).css('display') == 'none' ? $('#flyDiv8' + str).css('display','none') : $('#flyDiv8' + str).css('display','none');
            
            break;
        default:
            break;
    }
    switchRotateModSel(val6,bulletNum,trailNum,'#flyRotateMod');
    switchRotateModSel(val6,bulletNum,trailNum,'#rollRotateMod');
    switchRotateModSel(val6,bulletNum,trailNum,'#jumpRotateMod');
    switchRotateModSel(val9,bulletNum,trailNum,'#trackTarget');

}
/**
 * 3种旋转下拉菜单选项的switch模块
 */
function switchRotateModSel(val,bulletNum,trailNum,select){
    var str = '_' + bulletNum + '_' +trailNum;
    switch (val) {
        case 1:
            
            $(select + str).children().eq(0).prop('selected','selected');
            break;
        case 2:
           
            $(select + str).children().eq(1).prop('selected','selected');
            break;
        case 3:
           
            $(select + str).children().eq(2).prop('selected','selected');
            break;
    
        default:
            break;
    }
}

/**
 * 3种继承下拉菜单选项的switch模块,
 */
function switchInheritModSel(val,inp,bulletNum,trailNum,select,obj){
    var str = '_' + bulletNum + '_' +trailNum;
    switch (val) {
        case true:
        if(obj != "NaN"){
            rmReadOnly($(inp + str),bulletNum,trailNum);
            $(select + str).children().eq(1).prop('selected','selected');
        }else{
            $(inp + str).prop('readonly','readonly');
            $(select + str).children().eq(0).prop('selected','selected');
        }
            break;
        case false:
            rmReadOnly($(inp + str),bulletNum,trailNum);
            $(select + str).children().eq(2).prop('selected','selected');
            break;
    
        default:
            break;
    }
}

