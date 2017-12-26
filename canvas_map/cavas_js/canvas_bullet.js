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
function  bullet(options){
    this._init(options);
    this.flag = true;
}

bullet.prototype ={
    _init : function(options){
        this.array = options.array;
        this.id = options.id;
    },

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
    deleteLi : function(obj){
        if(this.Tip(1)){
            
            
            var targetHtml = $(obj).parent().children('label')[0].innerHTML.replace(/\s/g,""); 
            var targetNum  = $(obj).parent().children('label')[0].innerHTML.replace(/[^0-9]/ig,'');
           
            var aimHtml = $('#bulletOption' + targetNum).children('p')[0].innerHTML.replace(/\s/g,"");
            
            if(targetHtml == aimHtml){
                
                 $('#bulletOption' + targetNum).remove();
                 $(obj).parent().remove();
            }
        
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
    addA : function(obj,className,idName,htmlName){
        var num = obj.parent().children().length - 1;
        if(num < 11){
            var elm_a = document.createElement('a');
            if(className != undefined){
                elm_a.className = className ;
            }
            elm_a.href = 'javascript:;'
            elm_a.id = idName + num;
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
        $('#triggerConditionMod1').append($('#triggerConditionMod1').children('div'));
        bulletInfo.show($('#triggerConditionMod1'),1);
        $('#triggerConditonsP').html($(obj).text());
    },
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
    addTrail : function(num,parentObj){
        
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
        elm_div.setAttribute('id','bulletOptionCondition');
        elm_div.setAttribute('class','bulletCondtion clear');
        elm_a.setAttribute('href','javascript:;');
        elm_bullet.setAttribute('id','bulletOptionConditionInfo' + num);
        elm_bullet.setAttribute('class','bulletCondtionInfo');
        elm_bullet_a1.setAttribute('href','javascript:;');
        elm_bullet_a2.setAttribute('href','javascript:;');
        elm_bullet_a3.setAttribute('href','javascript:;');
        elm_bullet_a4.setAttribute('href','javascript:;');
        elm_a.setAttribute('id','bulletOptionConditionA' + num);
        elm_a.setAttribute('class','showPicMode fl');
        elm_p.setAttribute('class','bulletNames fl');
        elm_p.setAttribute('id','bulletNamesOfP');
        elm_bullet_a1.setAttribute('id','pathTrail1');
        elm_bullet_a2.setAttribute('id','triggerConditon1');
        elm_bullet_a3.setAttribute('id','triggerConditon2');
        elm_bullet_a4.setAttribute('id','addTriggerCondition');


        parentObj.append(elm_div);
        elm_div.appendChild(elm_a);
        elm_div.appendChild(elm_p);
        elm_div.appendChild(elm_bullet);
        elm_bullet.appendChild(elm_bullet_a1);
        elm_bullet.appendChild(elm_bullet_a2);
        elm_bullet.appendChild(elm_bullet_a3);
        elm_bullet.appendChild(elm_bullet_a4);
        bulletInfo.addACliCK(elm_a.id,elm_bullet.id);
        
    },
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
         this.addTrail(1,$(elm_div));
        // elm_div.appendChild();
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
    addACliCK : function(aId,divId){
        $("#"+aId).click(function(){
            
            $(this).toggleClass("changePicMode");
            
            $('#'+divId).toggle();
        });
    }
    

    
    
}

var bulletInfoArray = new Array();
var bulletInfo = new bullet({
    id : $('.bars_info_input').tag,
    array : bulletInfoArray
});
