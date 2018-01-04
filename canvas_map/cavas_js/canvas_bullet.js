var ORIGIN = $('#triggerResultSel').children('option').map((index, dom) => $(dom).attr('value'));
var bottomDivOrigin = $('#triggerResultOptionBottom').children('div').map((index, dom) => $(dom).attr('id'));
var bottomInpOrigin = $('#triggerResultOptionBottom').children().children().children('input').map((index, dom) => $(dom).attr('id'));
var bottomOptOrigin = $('#triggerResultOptionBottom').children().children().children().children('option').map((index, dom) => $(dom).attr('value'));
var bottomAOrigin = $('#triggerResultOptionTop').children('a').map((index, dom) => $(dom).attr('id'));

/****************************************时间轴原型****************************************************************** */



function scale(btn, bar, title,value) {  
    
    this.btn = document.getElementById(btn);  
    this.bar = document.getElementById(bar);  
    this.title = document.getElementById(title);  
    this.step = this.bar.getElementsByTagName("div")[0];  
    this._init();  

   };  

scale.prototype = {  
    _init: function () {  

        var _this = this, doc = document, win = window;  

        _this.btn.onmousedown = function (e) {  
            
            var x = (e || win.event).clientX;  
            var left = this.offsetLeft;     
            var max = _this.bar.offsetWidth - this.offsetWidth;    
            
            doc.onmousemove = function (e) {  

                var val = document.getElementsByClassName('bars_input')[0].value;
                
                var thisX = (e || win.event).clientX;  
                var to = Math.min(max, Math.max(-2, left + (thisX - x)));  
                
                _this.btn.style.left = to + 'px';  
                _this.ondrag(Math.round(Math.max(0, to / max) * val * 10), to);   
                win.getSelection ? win.getSelection().removeAllRanges() : doc.selection.empty();  
            };  

            doc.onmouseup = new Function('this.onmousemove=null');  
        };  
    },  

    ondrag: function (pos, x) {  
    //通过改变Pos，改变步长
     this.step.style.width = Math.max(0, x) + 'px'; 
     this.title.innerHTML = pos / 10 + '';  

    }  
   }  

   var scale = new scale('btn0', 'bar0', 'title0');  
   

/********************************************Bullet原型************************************************************ */
function  Bullet(options){
    this._init(options);
    this.flag = true;
}

Bullet.prototype ={
    _init : function(options){
        this.bulletsData = options.bullets;
        this.bulletObject = options;
        
    },

    /**
     * 用于提示是否删除
     */
    Tip : function(flag){
        if(flag = 1){
            var msg = "确定要删除当前选中的弹头吗？\n\n请确认！"; 
        }else if(flag = 2){
            var msg = "确定要添加触发条件吗？\n\n请确认！";
        }
        
        if (confirm(msg)==true){ 
            return true; 
        }else{ 
            return false; 
        } 
    },
    /**
     * 用于删除添加的弹头的信息，同时删除弹头的数据
     * @param obj 点击的垃圾桶的id
     */
    deleteLi : function(obj){
        if(this.Tip(1)){
            
            
            var targetHtml = $(obj).parent().children('label')[0].innerHTML.replace(/\s/g,""); 
            var targetNum  = $(obj).parent().children('label')[0].innerHTML.replace(/[^0-9]/ig,'');
           
            var aimHtml = $('#bulletOption' + targetNum).children('p')[0].innerHTML.replace(/\s/g,"");
            
            if(targetHtml == aimHtml){
                
                 $('#bulletOption' + targetNum).remove();
                 $(obj).parent().remove();
                 this.deleteBullet(targetNum-1);
                 
            }
        
        }
              
    },
    /**
     * 用于删除弹头的数据,且同时保留以前弹头的tag值，数组长度不变
     * @param num 需要删除的哪一个tag值
     */
    deleteBullet : function(num){
        if(num < 0){
            return ;
        }else{
            delete this.bulletsData[num];
        }
        
        
    },
    /**
     * 此函数用于切换各个块，互不影响
     * @param obj 块对象，作用于这个块
     * @param index 判断使用何种方法 1: 父级块 2:运动轨迹块 3: 触发结果块 4：触发条件块
     */
    show : function (obj,index) {
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
    },
    /**
     * 用于点击触发结果来动态添加触发结果列表
     * @param obj 在添加按钮之前添加
     * @param className 给li添加class名字
     */
    addLi : function(obj,className,idName,htmlName){
        var num = obj.parent().children().length;
        if(num < 11){
            var elm_li = document.createElement('li');
            elm_li.className = className ;
            elm_li.id = idName + num;
            elm_li.innerHTML = htmlName + num ;
            obj.before(elm_li);
        }else{
            alert('添加得太多了');
        }
        
    },
    /**
     * 添加条件按钮触发的添加条件
     * @param obj 在哪里添加
     * @param className 添加的class
     */
    addA : function(obj,className,idName,htmlName,bulletNum,trailNum){
        var num = obj.parent().children().length - 1;
        if(num < 11){
            var elm_a = document.createElement('a');
            if(className != undefined){
                elm_a.className = className ;
            }
            elm_a.href = 'javascript:;'
            elm_a.id = idName +num+'_' +bulletNum + '_'+trailNum;
            elm_a.innerHTML = htmlName + num ;
            obj.before(elm_a);
        }else{
            alert('添加得太多了');
        }
        
    },
    /**
     * 用于点击触发结果，弹出触发结果具体属性框
     */
    addTriggerResult : function(obj,num){
       $('#triggerResultOption1').append($('#triggerResultOption1').children('div'));
       $('#triggerResultOption1').append($('#triggerResultOption1').children('form'));
       bulletInfo.show($('#triggerResultOption1'),3);
       $('#triggerConditonP1').html($(obj).text());
      
       
    },
    addTriggerCond : function(obj){
        console.log(obj);
        $('#triggerConditionMod1').append($('#triggerConditionMod1').children('div'));
        bulletInfo.show($('#triggerConditionMod1'),1);
        $('#triggerConditonsP').html($(obj).text());
    },
    addTrailOfMove : function(obj,bulletNum,trailNum){

        $(obj).parent().append($(obj).clone().attr("id", 'trailOfMove' + '_' + bulletNum + '_' + trailNum));
        
    
        
    },
    /**
     * 获取id值，并为id值添加独有标签
     */
    getId : function(obj,childName,num,flag){
       if(flag == 1){
            for(var i = 0;i < ORIGIN.length ; ++i){  
                var _id = ORIGIN[i] + '_' + num;   
                obj.children(childName)[i].value =  _id;
            }
        }else if(flag == 2){
            for(var i = 0;i < bottomDivOrigin.length ; ++i){  
                var _idv = bottomDivOrigin[i] + num; 
                
                obj.children(childName)[i].id =  _idv;
            }
        }else if(flag == 3){
            for(var j = 0;j < bottomInpOrigin.length ; ++j){
                var _inp = bottomInpOrigin[j] + '_' + num; 
                
                obj.children(childName)[j].id = _inp;
            }
        }else if(flag == 4){
            for(var k = 0;k < bottomOptOrigin.length ; ++k){
                var _opt = bottomOptOrigin[k] + '_' + num; 
                
                obj.children(childName)[k].value = _opt;
            }
        }else if(flag == 5){
            for(var z = 0;z < bottomAOrigin.length ; ++z){
                var _oA = bottomAOrigin[z] + '_' + num; 
                
                obj.children(childName)[z].id = _oA;
            }
           
        }
            
         
    },
    /**
     * 判断触发结果的下拉菜单，完成隐藏菜单，及具体的事件
     */
    switchResultSel : function(obj,num){
        
        switch (obj) {
			case 'triggerResult1_' + num:
			this.show($('#triggerOfTrail' + num),3);
			this.addTrail(num+1,$('#bulletOption1'));
				break;
			case 'triggerResult2_' + num:
			this.show($('#triggerOfEffectOfValue' + num),3);
				break;
			case 'triggerResult3_' + num:
			this.show($('#triggerOfAddBuff' + num),3);
				break;
			case 'triggerResult4_' + num:
			this.show($('#triggerOfTerrianOfValue' + num),3);
				break;
			case 'triggerResult5_' + num:
			this.show($('#triggerOfArtOfValue' + num),3);
				break;
			case 'triggerResult6_' + num:
			this.show($('#triggerOfAddBullet' + num),3);
				break;
			case 'triggerResult7_' + num:
			this.show($('#triggerOfEnd' + num),3);
				break;
			default:
				break;
		}
    },
    /**
     * 判断运动轨迹的下拉菜单
     */
    switchTrailSel : function(obj,bulletNum,trailNum){
        switch (obj) {
            case 'trailMove1':
            this.show($('#flyControlContent'+'_'+bulletNum +'_'+trailNum),2);
            
                break;
            case 'trailMove2':
            this.show($('#rollControl'+'_'+bulletNum +'_'+trailNum),2);
                break;
            case 'trailMove3':
            this.show($('#jumpControl'+'_'+bulletNum +'_'+trailNum),2);
                break;
            case 'trailMove4':
            this.show($('#snapControl'+'_'+bulletNum +'_'+trailNum),2);
                break;
            default:
                break;
        }
    },
    /**
     * 动态添加轨迹阶段
     * @param num 控制弹头数的数字
     * @param trailNum 控制轨迹阶段的数字
     */
    addTrail : function(num,parentObj,trailNum){
        
        var elm_div = document.createElement('div');
            var elm_a = document.createElement('a');
            var elm_p = document.createElement('p');
                elm_p.innerHTML = "轨迹阶段" + num ;
            var elm_bullet = document.createElement('div');
                var elm_bullet_a1 = document.createElement('a');
                var elm_bullet_a2 = document.createElement('a');
                var elm_bullet_a3 = document.createElement('a');
                var elm_bullet_a4 = document.createElement('a');
                elm_bullet_a1.innerHTML = '运动阶段';
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
        elm_p.setAttribute('class','bulletNames fl');
        elm_p.setAttribute('id','bulletNamesOfP' + '_' + num +'_'+trailNum);
        elm_bullet_a1.setAttribute('id','pathTrail1'+'_'+num+'_'+trailNum);
        elm_bullet_a2.setAttribute('id','triggerConditon1'+'_'+num+'_'+trailNum);
        elm_bullet_a3.setAttribute('id','triggerConditon2'+'_'+num+'_'+trailNum);
        elm_bullet_a4.setAttribute('id','addTriggerCondition'+'_'+num+'_'+trailNum);


        parentObj.append(elm_div);
        elm_div.appendChild(elm_a);
        elm_div.appendChild(elm_p);
        elm_div.appendChild(elm_bullet);
        elm_bullet.appendChild(elm_bullet_a1);
        elm_bullet.appendChild(elm_bullet_a2);
        elm_bullet.appendChild(elm_bullet_a3);
        elm_bullet.appendChild(elm_bullet_a4);
        this.addACliCK(elm_a.id,elm_bullet.id);
        this.addTrialClick(elm_bullet.id,num,trailNum);   //轨迹阶段事件
        
    },
    /**
     * 点击ADD，动态添加子弹头的ul列表
     */
    addBulletList : function(bars_num,parentObj){
        
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
		inputName.setAttribute('readonly','readonly');
		inputName.setAttribute('tag',bars_num-1);
		inputName.setAttribute('value',scale.title.innerHTML + ' ' + 's');
		
		aName.className = "bars_info_button fr";
		imgName.setAttribute('src','../images/page1/u99.png');
		aName.id = "BulletDel" + bars_num;
		
		parentObj.append(liName);
		liName.appendChild(labelName);
		liName.appendChild(inputName);
		liName.appendChild(aName);
		aName.appendChild(imgName);
    },
    /**
     * 动态添加左侧弹头列表
     */
    addBullet : function(num){
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
        elm_p.setAttribute('class','bulletNames fl');
        
        $('#powderSideBar').append(elm_div);
        elm_div.appendChild(elm_a);
        elm_div.appendChild(elm_p);
        this.addTrail(num,$(elm_div),1);
        $('#bulletOptionA'+ num).click(function(){   
            $(this).toggleClass("changePicMode");
            $('#bulletOption'+num).children('div').toggle("normal");
        });
    },
    /**
     * 此函数用于点击删除按钮，删除ul中的li，同时隐藏触发条件的块
     * @param id 鼠标点击的li块的对象
     * @param objA 实现删除的a标签
     * @param targetName li的innerhtml对应的p的innerhtml
     * @param delName 需要删除的块
     */
    deleteConditon : function(id,objA,targetName,delName){
        objA.delegate('a','click',function(){
            if(id.innerHTML == targetName.innerHTML){
                if(id.parentNode){
                    id.parentNode.removeChild(id);
                    delName.style.display = 'none';
                }
            }
		});
    },
    /**
     * 给轨迹阶段前的a标签添加下拉隐藏事件
     */
    addACliCK : function(aId,divId){
        $("#"+aId).click(function(){
            
            $(this).toggleClass("changePicMode");
            
            $('#'+divId).toggle();
        });
    },
    /**
     * 给轨迹阶段动态添加点击事件
     */
    addTrialClick : function(obj,bulletNum,trailNum){
        var _this = this;
            $('#pathTrail1'+'_'+bulletNum+'_'+trailNum).one('click',function(){
                
                _this.addTrailOfMove($('#trailOfMove_1_1'),bulletNum,trailNum);

                _this.changeSaveBtn($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
                
                _this.saveBtnClick(bulletNum,trailNum);

                _this.changeFlySelId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);

                _this.changeFlyTrailId($('#trailOfMove'+'_' + bulletNum + '_' + trailNum),bulletNum,trailNum);
                
               
                
            }); 
        $('#' + obj).delegate('a','click',function(){ 
           
            var idName = arguments["0"].currentTarget.id ;
            var name = arguments["0"].currentTarget;
            var addId = 'addTriggerCondition' +'_' + bulletNum + '_' + trailNum;
            var thisId = $(this).children().context.id;
            var preNum = bulletNum -1;
            var nexNum = trailNum -1;
            if(thisId == 'pathTrail1'+'_'+bulletNum+'_'+trailNum){
                
                _this.show($('#trailOfMove' + '_'+bulletNum+'_'+trailNum),1);
                $('#trailSelect'+'_' + bulletNum + '_' + trailNum).change(function(){
                    bulletInfo.switchTrailSel(this.value,bulletNum,trailNum);
                });
                var text = $('#trailSelect'+'_'+bulletNum+'_'+trailNum + ' option:selected').text();
                
                
                _this.changeFlyModId($('#flyControlContent'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
                _this.changeFlyModId($('#rollControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
                _this.changeFlyModId($('#jumpControl'+'_'+bulletNum+'_'+trailNum),bulletNum,trailNum);
                _this.switchFlySel(text,preNum,nexNum);
               
            }else{
                _this.addTriggerCond(this);
            }
            if(thisId == addId){
                $(this).click(function(){
                   _this.addA($(this),undefined,'triggerConditon','触发条件',bulletNum,trailNum);
                  
                });
            }

            if(idName != 'pathTrail1'+'_'+bulletNum+'_'+trailNum && idName != 'addTriggerCondition'+'_'+bulletNum+'_'+trailNum){
                var num =(this.id).replace(/[^0-9]/ig,"");
                _this.getId($('#triggerConditons1'),'a',num,5);
                _this.deleteConditon(name, $('#triggerConditons1'),$('#triggerConditonsP')[0], $('#triggerConditons1')[0].parentNode);
            }
            
            
        });
    },
    changeFlyModId : function(obj,bulletNum,trailNum){
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
       
  
        
    },
    changeFlySelId : function(obj,bulletNum,trailNum){
        
        for(var i = 0;i<4;++i){
            var str = $(obj.children()[1]).children()[i].id;
           
            $(obj.children()[1]).children()[i].id = str.replace(/[^a-zA-Z]/g,'');
            $(obj.children()[1]).children()[i].id += '_'+bulletNum+'_'+trailNum;
        }
        
    },
    changeSaveBtn : function(obj,bulletNum,trailNum){
        
        obj[0].children['2'].id = obj[0].children['2'].id.replace(/[^a-z]/ig,'');
        obj[0].children['2'].id = obj[0].children['2'].id +'_' +bulletNum + '_' +trailNum;
        $(obj[0].children['2']).children('button')[0].id = $(obj[0].children['2']).children('button')[0].id.replace(/[^a-z]/ig,'');
        $(obj[0].children['2']).children('button')[0].id+='_' +bulletNum + '_' +trailNum;
        $(obj[0].children['2']).children('button')[1].id = $(obj[0].children['2']).children('button')[1].id.replace(/[^a-z]/ig,'');
        $(obj[0].children['2']).children('button')[1].id+='_' +bulletNum + '_' +trailNum;
        
    },
    changeFlyTrailId : function(obj,bulletNum,trailNum){
        
        
        var selId = obj.children().children('select').map((index, dom) => $(dom).attr('id'))[0].substr(0,11);
        selId += '_' +bulletNum + '_' +trailNum; 
        obj[0].children[0].children[0].id = selId;
        
    },
    saveBtnClick : function(bulletNum,trailNum){
        var _this = this;
        $('#saveFlyBtn'+'_'+bulletNum+'_'+trailNum).click(function(){
            
            preNum = $(this).attr('id').replace(/[^0-9]/g,'').substr(0,1) - 1;
            
            nexNum = $(this).attr('id').replace(/[^0-9]/g,'').substr(1,1) -1;
            
            if(this.innerHTML =='保存'){
                
                var text = $('#trailSelect'+'_'+bulletNum+'_'+trailNum + ' option:selected').text();
                 _this.switchFlySel(text,preNum,nexNum);
                _this.getFlyValue(preNum,nexNum);   
                
            }else if(this.innerHTML == '重填'){
                alert("功能还在开发中");
            }
        });
    },
    triggerFlyControl : function(preNum,nexNum){
        var bulletNum = preNum + 1;
        var trailNum = nexNum + 1;
        this.switchFlyContSel($('#flyBegin'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
        this.switchFlyContSel($('#flyVen'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
        this.switchFlyContSel($('#flySpeed'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
        this.switchFlyContSel($('#flyMode'+'_'+bulletNum+'_'+trailNum),preNum,nexNum); 
    },
    /**
     * 此函数用于判断运动轨迹下拉菜单框的事件
     * @param text 下拉菜单选项的名字
     */
    switchFlySel : function(text,preNum,nexNum){
        switch (text) {
            case '飞行':
            this.bulletsData[preNum].cycles[nexNum].motionMode = 1;
            this.triggerFlyControl(preNum,nexNum);
            break;
            case '滚动':
            this.bulletsData[preNum].cycles[nexNum].motionMode = 2;
            break;
            case '弹跳':
            this.bulletsData[preNum].cycles[nexNum].motionMode = 3;
            break;
            case '粘着':
            this.bulletsData[preNum].cycles[nexNum].motionMode = 4;
            break;
            default:
                break;
        }
    },
    /**
     * 用于判断飞行模式下下拉菜单框事件
     * 
     */
    switchFlyContSel : function (obj,preNum,nexNum) {
        var _this = this;
        
        obj.change(function(){
            
            switch (this.value) {
                case 'beginSel2':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetCor = true;
                    break;
                case 'beginSel1':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetCor = false;
                    break;
                case 'vendor1':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetRotation = false;
                    break;
                case 'vendor2':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetRotation = true;
                    break;
                case 'strength1':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetSpeed = false;
                    break;
                case 'strength2':
                _this.bulletsData[preNum].cycles[nexNum].isOffsetSpeed = true;
                    break;
                case 'isGravity':
                _this.bulletsData[preNum].cycles[nexNum].flyMode = 1;
                break;
                case 'notGravity':
                _this.bulletsData[preNum].cycles[nexNum].flyMode = 2;
                break;
                default:
                
                    break;
            }
        });
    },
    /**
     * 获取飞行菜单下的所有输入值的框
     * 
     */
    getFlyValue : function(bulletNum,trailNum){
        var bullets = bulletNum + 1;
        var trails = trailNum + 1;
        this.bulletsData[bulletNum].cycles[trailNum].x = parseFloat($('#flyContorlBeginInpX'+'_'+bullets+'_'+trails).val());
        this.bulletsData[bulletNum].cycles[trailNum].y = parseFloat($('#flyContorlBeginInpY'+'_'+bullets+'_'+trails).val());
        this.bulletsData[bulletNum].cycles[trailNum].rotation = parseFloat($('#flyContorlVendorInpX'+'_'+bullets+'_'+trails).val());
        this.bulletsData[bulletNum].cycles[trailNum].speed = parseFloat($('#flyContorlStrength'+'_'+bullets+'_'+trails).val());
        this.bulletsData[bulletNum].cycles[trailNum].obstructionForce = parseFloat($('#flyContorlResisInpX'+'_'+bullets+'_'+trails).val());
        this.bulletsData[bulletNum].cycles[trailNum].elasticForce = parseFloat($('#jumpControlInp'+'_'+bullets+'_'+trails).val());
        var inpx = $('#elasticControlInp'+'_'+bullets+'_'+trails)[0].value;
        $('#elasticControlInp'+'_'+bullets+'_'+trails)[0].value = parseFloat($('#flyContorlResisInpX'+'_'+bullets+'_'+trails).val());
        
        
        console.log(this.bulletsData);
    }

    
    
}

var bulletInfoArray = new Array();
var bulletInfo = new Bullet({
    id : 000002,
    launchDuration: 5.9,
    bullets : [
        {
            image : 'explosion_1.png',
            launchTime : 0,
            speed : 10,
            width : 201,
            height : 160,
            mass : 1,
            rotationMoment : 1,
            launched : false,
            cycles : [
                {
                    isOffsetCor: false,
                    isOffsetSpeed : false,
                    isOffsetRotation : false,
                    x : 500,
                    y : 200,
                    rotation : 10,
                    speed : 10,
                    motionMode : 1,
                    flyMode : 1,
                    rotateMode : 3,    //???
                    obstructionForce : 1.0, 
                    elasticForce : 1.2,
                    triggers : [
                        {
                            triggerMode : 4,
                            triggerParams : 1,
                            effects : [
                                {
                                    effectMode : 2,
                                    effectParams : null
                                }
                            ]
                        }
                    ]
                },
                {
                    Rotation : 10,
                    Scale : 1,
                    Speed : 0,
                    motionMode : 1,
                    flyMode : 1,
                    rotateMode : 3,
                    obstructionForce : 0.9,
                    triggers : [
                    {
                        triggerMode : 1,
                        triggerParams : null,
                        effects : [
                            {
                                effectMode : 2,
                                effectParams : null
                            }
                        ]
                    },
                    {
                        triggerMode : 2,
                        triggerParams : null,
                        effects : [
                            {
                                effectMode : 2,
                                effectParams : null
                            }
                        ]
                    }
                    ]
                },
                {
                    motionMode : 3,
                    triggers : [
                        {
                            triggerMode : 5,
                            triggerParams : 2,
                            effects : [
                                {
                                    effectMode : 1,
                                    effectParams : null
                                }
                            ]
                        },
                        {
                            triggerMode : 4,
                            triggerParams : 3,
                            effects : [
                                {
                                    effectMode : 1,
                                    effectParams : null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
       
        
    ]
});

