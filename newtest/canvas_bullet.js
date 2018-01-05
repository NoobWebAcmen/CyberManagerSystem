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
   





function  Bullet(options){
    this._init(options);
    this.flag = true;
    this.bulNum = 1;   //子弹头的数量
}

Bullet.prototype ={
    _init : function(options){
        // this.bulletsData = options.bullets;
        this.bulletsData = options;
        
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
        areaEffects : 1,
        effectObject : 1,
        valueType : 1,
        value : 10,
        damageAttribute : 1,
        buffAreaEffects : 1,
        buffEffectObject : 1,
        buffId : 1,
        damageArea : 1,
        edgeTypes : 1,
        artSource : 1,
    }
}];
triggerVal = [{
    triggerMode : 4,
    triggerParams : 1,
    effects : []
    },
    {
    triggerMode : 4,
    triggerParams : 1,
    effects : []
}];

bulletConstVal = [{
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
            triggers : []
        }
    ]
}];
