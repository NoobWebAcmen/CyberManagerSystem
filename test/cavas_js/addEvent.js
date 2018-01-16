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

/**
 * 给ADD了的弹头添加删除事件
 * @param obj 触发的对象
 */
function addDelLiClick(obj){
  
    $(obj).click(function(){
        
        deleteLi(this);
    });
    
}

/**
* 给轨迹阶段动态添加点击事件
*/
var trialFlag = true;
function addTrialClick (obj,bulletNum,trailNum){
   
    //运动轨迹点击事件
    $('#' + obj).children().eq(0).one('click',function(){
        if($('#' + obj).children().eq(0).attr('id') == 'pathTrail1_1_1'){
            resetBtnClick(bulletNum,trailNum);
            return ;
        }else{
            
            addTrailOfMove($('#trailOfMove_1_1'),bulletNum,trailNum);
        
           resetBtnClick(bulletNum,trailNum);
    
           changeFlySelId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
    
           changeFlyTrailId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
           changeFlyModId($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           changeFlyModId($('#rollControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           changeFlyModId($('#jumpControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
        }
    }); 

    $('#' + obj).children().eq(0).click(function(){
        var preNum = bulletNum -1;
        var nexNum = trailNum -1;
        show($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),1);
        findWhoSel(bulletNum,trailNum);
        $('#trailSelect'+'_' + bulletNum + '_' + trailNum).change(function(){
             switchTrailSel(this.value,bulletNum,trailNum);
        });
        
        
        switchFlySel($('#trailSelect'+'_' + bulletNum + '_' + trailNum),preNum,nexNum);

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
            }else{
                //触发条件2-10点击事件
                addTriggerMod($('#triggerConditionMod_0_0_0'),bulletNum,trailNum,num);
                changeTriggerCondition($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum,num);
                changetriggerP($('#triggerConditonsP'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
                addTriggerClick($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum);
                show($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),1);
            }
        }else if(thisId == 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
            //添加事件点击事件
            
            var len = parseInt($('#bulletOptionConditionInfo'+'_'+bulletNum+'_'+trailNum)
            .children('a').eq($('#bulletOptionConditionInfo'+'_'+bulletNum+'_'+trailNum)["0"]
            .childNodes.length-2).attr('id').slice(0,-4).replace(/[^0-9]/g,'')) + 1;
            addTriggerList($('#addTriggerCondition'+'_'+bulletNum+'_'+trailNum),len,'triggerConditon','触发条件',bulletNum,trailNum);
           
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
function addTriggerClick(obj,num,bulletNum,trailNum){
    addTriggerTopClick(obj.children()[0],num,bulletNum,trailNum);
    addTriggerBottomClick(obj.children()[1],num,bulletNum,trailNum);
    
    
}
/**
 * 给触发条件top添加点击事件
 * @param {*} obj Top的jquery对象 
 */
function addTriggerTopClick(obj,num,bulletNum,trailNum){
    switchTriggerSel($(obj).children()["0"].children[1],num,bulletNum,trailNum);
    addTriggerTopAClick($(obj).children()[1],num,bulletNum,trailNum);
    $('#triggerSelect'+'_'+num+'_'+bulletNum+'_'+trailNum)["0"]["0"].selected = 'true';
    
}

/**
 * 给触发条件bottom添加点击事件
 * @param {*} obj bottom的jquery对象 
 */
function addTriggerBottomClick(obj,num,bulletNum,trailNum){

    
    $('#triggerResultLi1'+'_'+num+'_'+bulletNum+'_'+trailNum).one('click',function(){
        changetriggerP($('#triggerConditonP_1'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML,num,bulletNum,trailNum);
        switchResultSel($('#triggerResultSel_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
        changeTriggerResult($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
        addTiggerAddClick(num,bulletNum,trailNum,1);
        addArtClick(num,bulletNum,trailNum,1);
    });
 
    $('#triggerResultSideList'+'_'+num+'_'+bulletNum+'_'+trailNum).delegate('li','click',function(){
        if(this.getAttribute('id') == 'triggerResultLi0'+'_'+ num + '_' + bulletNum + '_' + trailNum){
            var liLen = $(this).parent().children('li').length-2;
            var len = parseInt($(this).parent().children('li').eq(liLen).attr('id').slice(0,-6).replace(/[^0-9]/g,'')) +1;
            //添加事件
            addTriggerResult(this,num,bulletNum,trailNum,len,'triggerResultLi','触发结果');

            
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
                addTriggerBottomAClick($('#triggerResult'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                show($('#triggerResultOptionBottom'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                switchResultSel($('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                addTiggerAddClick(num,bulletNum,trailNum,resultNum);
                addArtClick(num,bulletNum,trailNum,resultNum);
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

function addTiggerAddClick(num,bulletNum,trailNum,resultNum){
    
    $('#bars_button'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).click(function(){
        bulletInfo.bulNum += 1;
        
         addBullet(bulletInfo.bulNum);
         addModList(bulletInfo.bulNum,$('#bulletAddInfoUl'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum),2);
         getAddBulletInfo(bulletInfo.bulNum,trailNum);
         addUniqueFlag(num,bulletInfo.bulNum,trailNum,resultNum);
        });
}

/**
 * 给子弹头添加点击事件
 * @param {*} num 子弹头数量 
 */
function addBulletClick(num){
    
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
        addBulletsSavClick(num);
    });
    $('#bulletName'+num).one('click',function(){
        if(num == 1){
            
            return false;
        }else{
            addBulletMod(num,$('#bulletsMod_1'));
            changeBulletsId(num,$('#bulletsMod'+'_'+num));
            changeBulletsP(num);
            
        }
        
    });
}
/**
 * 配置弹头的时候的保存按钮
 * @param {*} num 
 */
function addBulletsSavClick(num) {
    
    $('#resetModBtn_' + num).click(function(){
        resetBulletsVal(num);
        removeBulletSrc(num);
    });
    $('#filesSrc_' + num).change(function(){
    
        handleFileSelect(event,num);
    })
}
/**
 * 触发结果添加美术资源的点击事件
 */
function addArtClick(num,bulletNum,trailNum,resultNum){
    $('#filesSrc'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).change(function(){
        handleFileSelect1(event,num,bulletNum,trailNum,resultNum);
    });
}


