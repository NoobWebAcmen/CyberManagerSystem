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
            saveBtnClick(bulletNum,trailNum);
            resetBtnClick(bulletNum,trailNum);
            return ;
        }else{
            
            addTrailOfMove($('#trailOfMove_1_1'),bulletNum,trailNum);
            changeSaveBtn($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
        
           saveBtnClick(bulletNum,trailNum);
           resetBtnClick(bulletNum,trailNum);
    
           changeFlySelId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
    
           changeFlyTrailId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
           changeFlyModId($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           changeFlyModId($('#rollControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
           changeFlyModId($('#jumpControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
        }
    }); 

    $('#' + obj).children().eq(0).click(function(){
       
        var text = $('#trailSelect'+'_'+bulletNum+'_'+trailNum + ' option:selected').text();
        var preNum = bulletNum -1;
        var nexNum = trailNum -1;
        show($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),1);
        $('#trailSelect'+'_' + bulletNum + '_' + trailNum).change(function(){
             switchTrailSel(this.value,bulletNum,trailNum);
        });
        
        
        switchFlySel(text,preNum,nexNum);

    });
    //触发条件点击事件
    
    $('#' + obj).delegate('a','click',function(event){
        
        var thisId = $(this).context.id;
        var thisVal = this.getAttribute('resval');

        if(thisId != 'pathTrail1'+'_'+bulletNum+'_'+trailNum && thisId != 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
            if(thisId == 'triggerConditon_1_1_1'){
                show($('#triggerConditionMod_1_1_1'),1);
                addTriggerClick($('#triggerConditionMod_1_1_1'),1,1,1);
            }else{
                
                var num = thisId.slice(0,-4).replace(/[^0-9]/g,'');
                var str = $('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum);
                if($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum).length ){
                    show($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),1);
                }else{
                    addTriggerMod($('#triggerConditionMod_1_1_1'),bulletNum,trailNum,num);
                    changeTriggerCondition($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum,num);
                    changetriggerP($('#triggerConditonsP'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML);
                    addTriggerClick($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum);
                    show($('#triggerConditionMod'+'_'+num+'_'+bulletNum+'_'+trailNum),1);
                }
            }
        }else if(thisId == 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
            var childLen = $('#bulletOptionConditionInfo'+'_'+bulletNum+'_'+trailNum)["0"].childNodes.length - 1;
            addTriggerList($('#addTriggerCondition'+'_'+bulletNum+'_'+trailNum),childLen,'triggerConditon','触发条件',bulletNum,trailNum);
        }
    });
}
/**
 * 用于添加运动轨迹块中保存的点击事件
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function saveBtnClick(bulletNum,trailNum){
    
    $('#saveFlyBtn'+'_'+bulletNum+'_'+trailNum).click(function(){
        
        preNum = $(this).attr('id').replace(/[^0-9]/g,'').substr(0,1) - 1;
        
        nexNum = $(this).attr('id').replace(/[^0-9]/g,'').substr(1,1) -1;
        var text = $('#trailSelect'+'_'+bulletNum+'_'+trailNum + ' option:selected').text();
        switchFlySel(text,preNum,nexNum);
        getFlyValue(preNum,nexNum);   

            
    });
}

/**
 * 运动轨迹重置点击事件
 * @param {*} bulletNum 
 * @param {*} trailNum 
 */
function resetBtnClick(bulletNum,trailNum){
    $('#resetFlyBtn'+'_'+bulletNum+'_'+trailNum).click(function(){
           resetAllInp($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
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
        changetriggerP($('#triggerConditonP_1'+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML);
        switchResultSel($('#triggerResultSel_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
        changeTriggerResult($('#triggerResultOption_1'+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,1);
    });
 
    $('#triggerResultSideList'+'_'+num+'_'+bulletNum+'_'+trailNum).delegate('li','click',function(){
        if(this.getAttribute('id') == 'triggerResultLi0'+'_'+ num + '_' + bulletNum + '_' + trailNum){
            var liLen = $(this).parent()["0"].children.length;
           
            //添加事件
            addTriggerResult(this,num,bulletNum,trailNum,liLen,'triggerResultLi','触发结果');

            
        }else{
            
            var resultNum = this.getAttribute('id').slice(0,-6).replace(/[^0-9]/g,'');
            var str = $('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum);
             if($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum).length){
                
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                
             }else{
                addTriggerResultMod($('#triggerResultOption_1_1_1_1'),num,bulletNum,trailNum,resultNum);
                changeTriggerResult($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                changetriggerP($('#triggerConditonP'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),this.innerHTML);
                $('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum)["0"]["0"].selected = true ;
                addTriggerBottomAClick($('#triggerResult'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
                show($('#triggerResultOption'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),3);
                switchResultSel($('#triggerResultSel'+'_'+resultNum+'_'+num+'_'+bulletNum+'_'+trailNum),num,bulletNum,trailNum,resultNum);
            }
            
            addTriggerSaveClick(num,bulletNum,trailNum,resultNum);
            addTriggerResetClick(num,bulletNum,trailNum,resultNum);
        }
        
    });
}

/**
 * 点击触发结果保存按钮保存触发结果的数据
 * @param {*} num 控制触发条件
 * @param {*} bulletNum 控制子弹数
 * @param {*} trailNum 控制轨迹数
 * @param {*} resultNum 控制触发结果数
 */
function addTriggerSaveClick(num,bulletNum,trailNum,resultNum){
    //保存按钮点击事件
    $('#triggerSavBtn'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).click(function(){
        getTriggerResult(num,bulletNum,trailNum,resultNum);
    })
    
}
function addTriggerResetClick(num,bulletNum,trailNum,resultNum){
    //重置按钮点击事件
    $('#triggerResBtn'+'_' + resultNum + '_' + num + '_' + bulletNum + '_' + trailNum).click(function(){
        resetTriggerResult(num,bulletNum,trailNum,resultNum);
    });
}


