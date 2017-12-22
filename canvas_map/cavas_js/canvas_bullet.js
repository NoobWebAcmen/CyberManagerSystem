
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

    delTip : function(){
        var msg = "确定要删除当前选中的弹头吗？\n\n请确认！"; 
        if (confirm(msg)==true){ 
            return true; 
        }else{ 
            return false; 
        } 
    },
    delete : function(parentObj,index){
        if(this.delTip()){
            
            parentObj.removeChild(parentObj.children[index]);
        }
              
    },
    changeImg : function(obj){
        
        if(this.flag){
            
            obj.setAttribute('src','../images/page1/u17_selected.png');
            this.flag = false;
           
        }else{
            
            obj.setAttribute('src','../images/page1/u17.png');
            this.flag = true;
            
        }
    }
    
}

var bulletInfoArray = new Array();
var bulletInfo = new bullet({
    id : $('.bars_info_input').tag,
    array : bulletInfoArray
});