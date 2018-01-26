/**
 * 本文件用于所有的函数点击事件
 */


/**
* 给轨迹阶段前的a标签添加下拉隐藏事件
*/
function addAImgCliCK(aId,divId){
    $("#"+aId).click(function(){
        
        $(this).toggleClass("changePicMode");
        
        $('#'+divId).toggle();
    });
}

function addBulletAImgClick(aId,divId,num){
    $(aId+ num).click(function(){   
        $(this).toggleClass("changePicMode");
        $(divId+num).children('div').toggle("normal");
    });
}
function adddeleteTrailClick(num,trailNum,proto){
    $('#deleteTrail_' + num + '_' + trailNum).click(function(){
        if(bulletInfo.Tip(1)){
            $('#triP')
            // deleteTrail(num,trailNum,proto);
            // $('#trailOfMove_' + num + '_' + trailNum).remove();
        }
    });
}
/**
 * 给ADD了的弹头添加删除事件
 * @param obj 触发的对象
 */
function addDelLiClick(obj,proto){
  
    $(obj).click(function(){
        
        deleteLi(this,proto);
    });
    
}

/**
* 给轨迹阶段动态添加点击事件
*/
var trialFlag = true;
function addTrialClick (obj,bulletNum,trailNum,proto){
   
    //运动轨迹点击事件
    $('#' + obj).children().eq(0).one('click',function(){
        addTrailOfMove($('#trailOfMove_0_0'),bulletNum,trailNum);
        changeDelTrailId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
        changeFlySelId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
        changeResetId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
        changeFlyTrailId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
        changeFlyModId($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
        changeFlyModId($('#rollControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
        changeFlyModId($('#jumpControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
        resetBtnClick(bulletNum,trailNum);
    }); 

    $('#' + obj).children().eq(0).click(function(){
        var preNum = bulletNum -1;
        var nexNum = trailNum -1;
        show($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),1);
        findWhoSel(bulletNum,trailNum);
        $('#trailSelect'+'_' + bulletNum + '_' + trailNum).change(function(){
             switchTrailSel(this.value,bulletNum,trailNum);
        });
        
        switchFlySel($('#trailSelect'+'_' + bulletNum + '_' + trailNum),preNum,nexNum,proto);
        if(trailNum != 1){
            adddeleteTrailClick(bulletNum,trailNum,proto);
        }
        

    });
    //触发条件点击事件
    
    $('#' + obj).delegate('a','click',function(event){
        
        var thisId = $(this).context.id;
        var thisVal = this.getAttribute('resval');
        var num = thisId.slice(0,-4).replace(/[^0-9]/g,'');
        var str = $('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum);

        if(thisId != 'pathTrail1'+'_'+bulletNum+'_'+trailNum && thisId != 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
            if($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum).length ){
                show($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),1);
                findWhichConditonSel(num,bulletNum,trailNum);
            }else{
                //触发条件2-10点击事件
                addTriggerMod($('#triggerConditionMod_0_0_0'),bulletNum,trailNum,num);
                changeTriggerCondition($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum,num);
                changetriggerP($('#triggerConditonsP'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
                addTriggerClick($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,proto);
                show($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),1);
            }
        }else if(thisId == 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
            //添加事件点击事件
            
            var len = parseInt($('#bulletOptionConditionInfo'+'_'+bulletNum+'_'+trailNum)
            .children('a').eq($('#bulletOptionConditionInfo'+'_'+bulletNum+'_'+trailNum)["0"]
            .childNodes.length-2).attr('id').slice(0,-4).replace(/[^0-9]/g,'')) + 1;
            addTriggerList($('#addTriggerCondition'+'_'+bulletNum+'_'+trailNum),len,'triggerConditon','触发条件',bulletNum,trailNum,proto);
           
        }
    });
}

/**
 * 运动轨迹重置点击事件
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function resetBtnClick(bulletNum,trailNum){
    $('#resetFlyBtn'+'_'+bulletNum+'_'+trailNum).click(function(){
           resetAllInp1($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           resetAllInp($('#rollControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           resetAllInp($('#jumpControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
    });
}
/**
 * 给触发条件整个块添加点击事件
 * @param {*} obj 触发条件的主要内容块
 */
function addTriggerClick(obj,num,bulletNum,trailNum,proto){
    addTriggerTopClick(obj.children()[0],num,bulletNum,trailNum,proto);
    addTriggerBottomClick(obj.children()[1],num,bulletNum,trailNum,proto);
    
    
}
/**
 * 给触发条件top添加点击事件
 * @param {*} obj Top的jquery对象 
 */
function addTriggerTopClick(obj,num,bulletNum,trailNum,proto){
    switchTriggerSel($(obj).children()["0"].children[1],num,bulletNum,trailNum,proto);
    addTriggerTopAClick($(obj).children()[1],num,bulletNum,trailNum,proto);
    
    
    
}
/**
 * 给触发条件top的A标签添加删除事件，同时删除触发条件的数据
 * @param {*} obj TopA的jquery对象 
 */
function addTriggerTopAClick(obj,num,bulletNum,trailNum,proto){
    $(obj).click(function(){
        //删除视图
        if(num == 1){
            return false;
        }else{
            var aimHtml = $(obj)["0"].previousElementSibling.children["0"].innerHTML;
            var target = $('#triggerConditon'+'_'+num+'_'+bulletNum+'_'+trailNum);
            target.remove();
            if($(obj).parent().parent()["0"].id == 'triggerConditionMod_1_1_1'){
                $(obj).parent().parent().css('display','none');
            }else{
                $(obj).parent().parent().remove();
            }
         
        //删除数据
         deleteTrailInfo(num,bulletNum,trailNum,proto);
        }
         
    });
}

/**
 * 给触发条件bottom添加点击事件
 * @param {*} obj bottom的jquery对象 
 */
function addTriggerBottomClick(obj,num,bulletNum,trailNum,proto){

    
    $('#triggerResultLi1'+'_'+num+'_'+bulletNum+'_'+trailNum).one('click',function(){
            changetriggerP($('#triggerConditonP_1'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
            switchResultSel($('#triggerResultSel_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1,proto);
            changeTriggerResult($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
            addTiggerAddClick(num,bulletNum,trailNum,1,proto);
            addArtClick(num,bulletNum,trailNum,1,proto);
    });
 
    $('#triggerResultSideList'+'_'+num+'_'+bulletNum+'_'+trailNum).delegate('li','click',function(){
        if(this.getAttribute('id') == 'triggerResultLi0'+'_'+ num + '_' + bulletNum + '_' + trailNum){
            var liLen = $(this).parent().children('li').length-2;
            var len = parseInt($(this).parent().children('li').eq(liLen).attr('id').slice(0,-6).replace(/[^0-9]/g,'')) +1;
            //添加事件
            addTriggerResult(this,num,bulletNum,trailNum,len,'triggerResultLi','触发结果',proto);

            
        }else{
            
            var resultNum = this.getAttribute('id').slice(0,-6).replace(/[^0-9]/g,'');
            
            var str = $('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum);
             if($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).length){
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                findWhoSelected(num,bulletNum,trailNum,resultNum);
                
             }else{
                addTriggerResultMod($('#triggerResultOption_1_0_0_0'),num,bulletNum,trailNum,resultNum);
                changeTriggerResult($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                changetriggerP($('#triggerConditonP'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
                addTriggerBottomAClick($('#triggerResult'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum,proto);
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                switchResultSel($('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum,proto);
                addTiggerAddClick(num,bulletNum,trailNum,resultNum,proto);
                addArtClick(num,bulletNum,trailNum,resultNum,proto);
            }
            addTriggerResetClick(num,bulletNum,trailNum,resultNum);
            
            
        }
        
    });
}


function addTriggerResetClick(num,bulletNum,trailNum,resultNum){
    //重置按钮点击事件
    $('#triggerResBtn'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).click(function(){
        resetTriggerResult(num,bulletNum,trailNum,resultNum);
    });
}

/**
 * 触发结果中ADD的点击事件
 * @param {*} num 控制触发条件
 * @param {*} bulletNum 控制子弹数
 * @param {*} trailNum 控制轨迹数
 * @param {*} resultNum 控制触发结果数
 */

function addTiggerAddClick(num,bulletNum,trailNum,resultNum,proto){
    
    $('#bars_button'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).click(function(){
        proto.bulNum += 1;
        
         addBullet(proto.bulNum,proto);
         addModList(proto.bulNum,$('#bulletAddInfoUl'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum),2,proto);
         getAddBulletInfo(proto.bulNum,1,proto);
        addUniqueFlag(proto);
        });
}

/**
 * 给子弹头添加点击事件
 * @param {*} num 子弹头数量 
 */
function addBulletClick(num,proto){
    
    $('#bulletName'+num).mouseover(function(){
        $(this).css('background','#c1c1c1');
        $(this).css('cursor','pointer');
    });
    $('#bulletName'+num).mouseout(function(){
        $(this).css('background','rgb(245,245,245)');
        $(this).css('cursor','pointer');
    });

    $('#bulletName'+num).click(function(){
        show($('#bulletsMod_' + num),1);
        addBulletsSavClick(num,proto);
        whichSize(num,proto);
    });
    $('#bulletName'+num).one('click',function(){
        if(num == 1){
            
            return false;
        }else{
            addBulletMod(num,$('#bulletsMod_1'));
            changeBulletsId(num,$('#bulletsMod'+'_'+num));
            changeBulletsP(num);
            addBulletsSavClick(num,proto);
            whichSize(num,proto);
            show($('#bulletsMod_' + num),1);
            
        }
        
    });
}
/**
 * 配置弹头的时候的保存按钮
 * @param {*} num 
 */
function addBulletsSavClick(num,proto) {
    
    $('#resetModBtn_' + num).click(function(){
        resetBulletsVal(num);
        removeBulletSrc(num);
    });
    $('#filesSrc_' + num).change(function(){
    
        handleFileSelect(event,num,proto);
    })
}
/**
 * 触发结果添加美术资源的点击事件
 */
function addArtClick(num,bulletNum,trailNum,resultNum,proto){
    $('#filesSrc'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).change(function(){
        handleFileSelect1(event,num,bulletNum,trailNum,resultNum,proto);
    });
}

function addTriggerBottomClick1(obj,num,bulletNum,trailNum,proto){

    
    $('#triggerResultLi1'+'_'+num+'_'+bulletNum+'_'+trailNum).one('click',function(){
        if($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum).length){
            show($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum),3);
            show($('#triggerResultOptionBottom_1'+'_'+num+'_'+bulletNum+'_'+trailNum),3);
            findWhoSelected(num,bulletNum,trailNum,1);
        }else{
            changetriggerP($('#triggerConditonP_1'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
            switchResultSel($('#triggerResultSel_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1,proto);
            changeTriggerResult($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
            addTiggerAddClick(num,bulletNum,trailNum,1,proto);
            addArtClick(num,bulletNum,trailNum,1,proto);
        }

        
    });
 
    $('#triggerResultSideList'+'_'+num+'_'+bulletNum+'_'+trailNum).delegate('li','click',function(){
        if(this.getAttribute('id') == 'triggerResultLi0'+'_'+ num + '_' + bulletNum + '_' + trailNum){
            var liLen = $(this).parent().children('li').length-2;
            var len = parseInt($(this).parent().children('li').eq(liLen).attr('id').slice(0,-6).replace(/[^0-9]/g,'')) +1;
            //添加事件
            addTriggerResult(this,num,bulletNum,trailNum,len,'triggerResultLi','触发结果',proto);

            
        }else{
            
            var resultNum = this.getAttribute('id').slice(0,-6).replace(/[^0-9]/g,'');
            
            var str = $('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum);
             if($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).length){
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                findWhoSelected(num,bulletNum,trailNum,resultNum);
             }else{
                addTriggerResultMod($('#triggerResultOption_1_0_0_0'),num,bulletNum,trailNum,resultNum);
                changeTriggerResult($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                changetriggerP($('#triggerConditonP'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
                addTriggerBottomAClick($('#triggerResult'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum,proto);
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                switchResultSel($('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum,proto);
                addTiggerAddClick(num,bulletNum,trailNum,resultNum,proto);
                addArtClick(num,bulletNum,trailNum,resultNum,proto);
            }
            addTriggerResetClick(num,bulletNum,trailNum,resultNum);
        }
        
    });
}
/**
 * 载入页面的时候，点击哪个触发结果载入哪个触发结果的页面
 * @param {*} bulletNum 
 * @param {*} trailNum 
 * @param {*} num 
 * @param {*} resultNum 
 * @param {*} proto 
 */
function addResultListClick(bulletNum,trailNum,num,resultNum,proto){
    var bulNum = bulletNum - 1;
    var traNum = trailNum - 1;
    var nowNum = num - 1;
    var resNum = resultNum - 1;
    var str = resultNum + '_' + num + '_' + bulletNum + '_' + trailNum;
    var val = proto.bulletsData.bullets[bulNum].cycles[traNum].triggers[nowNum].effects[resNum].effectMode;
        $('#triggerResultLi' + str).click(function(){
            switch (val) {
                case 1:
                    show($('#triggerOfTrail_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(1).prop('selected','selected');
                    break;
                case 2:
                    show($('#triggerOfEffectOfValue_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(2).prop('selected','selected');
                    break;
                case 3:
                    show($('#triggerOfAddBuff_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(3).prop('selected','selected');
                    break;
                case 4:
                    show($('#triggerOfTerrianOfValue_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(4).prop('selected','selected');
                    break;
                case 5:
                    show($('#triggerOfArtOfValue_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(5).prop('selected','selected');
                    break;
                case 6:
                    show($('#triggerOfAddBullet_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(6).prop('selected','selected');
                    break;
                case 7:
                    show($('#triggerOfEnd_' + str),3);
                    $('#triggerResultSel_'+ str).children().eq(7).prop('selected','selected');
                    break;
                default:
                    break;
            }
        });
}
