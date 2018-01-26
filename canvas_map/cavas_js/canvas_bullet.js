function scale(btn, bar, title,value) {  
    
    this.btn = document.getElementById(btn);  
    this.bar = document.getElementById(bar);  
    this.title = document.getElementById(title);
    if(this.bar){
        this.step = this.bar.getElementsByTagName("div")[0]; 
    }  
     
    this._init();  

   };  

scale.prototype = {  
    _init: function () {  

        var _this = this, doc = document, win = window;  
        if(_this.btn){
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
        }
    },  
        ondrag: function (pos, x) {  
            //通过改变Pos，改变步长
             this.step.style.width = Math.max(0, x) + 'px'; 
             this.title.innerHTML = pos / 10 + '';  
        
            }  
}


   var scale = new scale('btn0', 'bar0', 'title0');  
   
function  Bullet(options){
    this._init(options);
    this.bulNum = 1;   //子弹头的数量
    this.traNum = 6;   //轨迹阶段的数量
    this.triggerNum = 10;
    this.resultNum = 10;
    this.saveFlag = false;
}

Bullet.prototype ={
    _init : function(options){
        
        this.bulletsData = options;
        
    },
     /**
     * 用于提示是否删除
     */
    Tip : function(flag){
        if(flag == 1){
            var msg = "确定要删除当前选中的弹头吗？\n\n请确认！"; 
        }else if(flag == 2){
            var msg = "确定要添加触发条件吗？\n\n请确认！";
        }else if(flag == 3){
            var msg = "是否需要有格式输出配置文件？\n\n请确认！"
        }else if(flag == 4){
            var msg = "是否输出配置文件？\n\n请确认！"
        }
        
        if (confirm(msg)==true){ 
            return true; 
        }else{ 
            return false; 
        } 
    }
}

var bulletInfo = new Bullet({
    id : 000002,
    launchDuration: 5.9,
    bullets : []
});

triggerEffectVal = [{
    effectMode : 2,
    effectParams : {
        range : 0,
        target : 0,
        effectType : 1,
        effectValue : 0,
        damageType : 1,
        buffId : 0,
        edgeTypes : 0,
        source : 0
    }
    
}];
triggerVal = [{
    triggerMode : 1,
    triggerParams : 1,
    effects : []
    },
    {
    triggerMode : 1,
    triggerParams : 1,
    effects : []
}];

bulletConstVal = [{
    image : 'explosion_1.png',
    launchTime : 0,
    speed : 0,
    width : 0,
    height : 0,
    mass : 0,
    rotationMoment : 0,
    sizeMode : 1,
    radius : 0,
    launched : true,
    cycles : [
        {
            isOffsetCoord : true,
            isOffsetRotation : true,
            isOffsetSpeed : true,
            isTrack : false, 
            x : 0,
            y : 0,
            rotation : 0,
            speed : 0,
            motionMode : 1,
            flyMode : 1,
            rotateMode : 1,
            trackRange : 1,
            trackAngle : 1,
            trackTarget : 1,
            obstructionLoss : 0, 
            elasticityLoss : 0,
            triggers : []
        }
    ]
}];





/**
 * load 原型
 */

function Load(options){
    this._init(options);
    this.bulNum = strStoreData.bullets.length;   //子弹头的数量
    this.traNum = 6;   //轨迹阶段的数量
    this.triggerNum = 10;
    this.resultNum = 10;
    this.saveFlag = false;
    this.resetFlag = true;
    
}
var time = new Array();
Load.prototype = {
    _init : function(options){
        this.bulletsData = options;
        
    },
    
   
}
if(Object.keys(strStoreData)){
    
    var loadVal = new Load({
        id : strStoreData.id,
        launchDuration: strStoreData.launchDuration,
        bullets : strStoreData.bullets
    });
}
