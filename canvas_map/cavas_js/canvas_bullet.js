
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
            var left = this.offsetLeft;     //块距离左边的距离2
            var max = _this.bar.offsetWidth - this.offsetWidth;    //this.offsetWidth 10 块的宽度 max为时间轴最长能显示的长度
            
            doc.onmousemove = function (e) {  

                var val = document.getElementsByClassName('bars_input')[0].value;
                console.log(val);
                var thisX = (e || win.event).clientX;  
                var to = Math.min(max, Math.max(-2, left + (thisX - x)));  //拖动后距离左边的值（-2,289）
                
                _this.btn.style.left = to + 'px';  
                _this.ondrag(Math.round(Math.max(0, to / max) * val * 10), to);   //修改此数值，可修改步长
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