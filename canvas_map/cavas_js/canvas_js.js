/**
 * 此js专用于cavas操作，拖拽，清除，并记录各图片的坐标点
 */

var canvas = document.getElementById('canvas_main'); // 得到画布
var ctx = canvas.getContext('2d'); // 得到画布的上下文对象

var clearFlag=false;
var x = 0; // 鼠标开始移动的位置X
var y = 0; // 鼠标开始移动的位置Y
var url = ''; // canvas图片的二进制格式转为dataURL格式
var oUl=document.getElementById('imgInfoList');
var oCheck=oUl.getElementsByClassName('chk_1');
var checkAll=document.getElementById('checkbox_a');
var tagA=document.getElementsByClassName('Li_a');
var checkFlag=true;



// canvas中的图片信息数组
var imageInfoArray = new Array();
// 是否操作canvas中的图片的标志
var clickImageInCanvas = false;
// 正在被操作的canvas中的图片
var activeImageInfo = null;
// 正在被操作的canvas中的图片的偏移位置
var activeImageOffsetX = 0;
var activeImageOffsetY = 0;




/****************************************************canvas原型函数*********************************************************** */

function Canvas(options, canvas){
    
    this._init(options);
    this._canvasNode = canvas || document.createElement("canvas");
    this._ctx = this._canvasNode.getContext('2d');
    var _this = this;
    this._canvasNode.onmousedown = function(ev){  
        _this.onmousedown(ev);
    };  
    this._canvasNode.onmousemove = function(ev){  
        _this.onmousemove(ev);
    };
    this._canvasNode.onmouseup = function(ev){  
        _this.onmouseup(ev);
    };
    this.callback =function (name){

    };
}

Canvas.prototype = {
    _init : function(options){
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.w = options.w || 0;
        this.h = options.h ||0;
        this.flag = options.flag || true;
        this.array = options.array || 0;
       
    },

    clearPic : function(actInfo){
        if(this.array.length==0){
            alert("当前没有图片可以清除!!");
        }else{
            if(this.del()){
                //清除数据  
                if(actInfo){
                    for(var index=0;index<this.array.length;index++){
                        if(actInfo.x==this.array[index].x && actInfo.y==this.array[index].y){
                            break;
                        }
                    }
                    this.removeImgInfo('checkbox_',index);
                    this.array.splice(index,1);
                    this.refreshImg(this.array);
                }else{
                    alert("还没有选择图片哦!");
                }
            }
        }
    },

    upIndex : function(actInfo){
        actInfo.zIndex +=1;                  //寻找选中的块，并在imageInfoArray数组中找到对应的值
           
                for(var index=0;index<this.array.length;index++){
                    if(actInfo.x==this.array[index].x && actInfo.y==this.array[index].y){
                        break;
                    }
                }
                this.array[index].zIndex=actInfo.zIndex;
                
               this.improveIndex(index,this.array);
               this.changeIndex(actInfo.zIndex);
    },

    downIndex : function(actInfo){
        
        actInfo.zIndex -=1;
        if(actInfo.zIndex > 0){
        
        for(var index=0;index<this.array.length;index++){
            if(actInfo.x==this.array[index].x && actInfo.y==this.array[index].y){
                break;
            }
        }
        this.array[index].zIndex=actInfo.zIndex;
        this.changeIndex(actInfo.zIndex);
        
        if(index>0){                   //降低优先级
            this.change2low(index);
            
        }

        this.refreshImg(this.array);
        
        }else{
            
            actInfo.zIndex = 0;
            this.changeIndex(actInfo.zIndex);
            alert("已经是最低优先级!");
            return;
        }
    },

    /**
     * 此函数用于将优先级高的图片放在最上层，并重绘画布
     */
    improveIndex : function(index,obj){
        var ctx = this._canvasNode.getContext('2d');

        if(index<obj.length-1){                   //提高优先级
            this.change2high(index);

    }
        ctx.clearRect(0,0,canvas.width,canvas.height);        //按照上面的要求重绘画布
    
        for(var j=0;j<obj.length;j++){
            imageInfo=obj[j];
            
            this.isIndexBig(imageInfo.zIndex,x,y,imageInfo);
            
            this.drawImage(ctx, imageInfo.src, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height);
        }
    },

    selAll : function(obj){
        if(this.flag){
            for (var i=0;i<obj.length;i++){
                obj[i].checked = true;
            }
            this.flag=false;
        }else{
            for (var i=0;i<obj.length;i++){
                obj[i].checked = false;
            }
            this.flag=true;
        }
    },
    
    delete : function(obj){
        if(this.del()){

            var checkAll=document.getElementById('checkbox_a');
            var len = obj.length;

            for(var i = 0; i < len; ++i) {
                var checkBox = obj[i];
                if(checkBox.checked == true){
                    var tag = parseInt(checkBox.getAttribute("tag"));
                    this.removeImgInfo('checkbox_',tag);                 //  ??
                    for (var j = 0; j < this.array.length; ++j) {
                        if (this.array[j].tag == tag) {
                            this.array.splice(j,1);
                            break;
                        }
                    }
                    --i;
                    --len;
                }else{
                    continue;
                }
                this.refreshImg(this.array);
                
            }
            
            if(!this.array.length){
                checkAll.checked = false;
                this.flag = true;
            }
        }else{
            return;
        }
    },

    /**
    * 重画图像
    * @param {*} obj 存储图像信息数组 
    */
    refreshImg : function(obj){
        var ctx = this._canvasNode.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (var i = 0; i < obj.length; ++i) {
            this.drawImage(ctx, obj[i].src, obj[i].x, obj[i].y, obj[i].width, obj[i].height);
        }
    },
    
    /**
     * 此函数用来移除id=imgInfolist 的UL中id=checkbox_+index的图片
     * @param {*} index 当前移除的index
     * @param {*} obj  要移除的id的名字
     */

    removeImgInfo : function(obj,index){
        var oUl = document.getElementById('imgInfoList');
        var oLi = document.getElementById(obj+index);         // ??
        if(oLi){
            oUl.removeChild(oLi);
        }else{
            //alert('请正确选择图片删除');
        }
    },

    
    
    /**
     * 此函数用于图片信息框点击图片信息，让图片保持最高优先级
     */

    clickTagA : function(){
        
        var tagA=document.getElementsByClassName('Li_a');
        var _this = this ;
        for(var i = 0;i < tagA.length; ++i){
            
            tagA[i].onclick = function(){

                //需要点击选中复选框则打开此段代码
                // if(this.parentNode.childNodes[0].checked){
                //     this.parentNode.childNodes[0].checked = false;
                // }else{
                //     this.parentNode.childNodes[0].checked = true;
                // }
                
                for(var index = 0;index < _this.array.length; index++){    //此循环找到符合条件的index
                    if(this.getAttribute('tag') == _this.array[index].tag){
                        break;
                    }
                }
                
                 _this.array[index].zIndex+=_this.array.length*2; 
                

                _this.showPicInfo(_this.array[index]);

               for(var j=0;j<_this.array.length;j++){

                    _this.improveIndex(index+j,_this.array);

                    _this.drawRect(_this.array[j], true);   
               }
               
               for(var k=0;k<_this.array.length;k++){ 
                  
                _this.array[k].zIndex=_this.array[k].tag+1;
                
               }
              
               
            };
            
        }
    },

    /**
     * 次函数用于弹出确认是否删除
     */

    del : function(){
        var msg = "您真的确定要删除当前选中图片吗？\n\n请确认！"; 
        if (confirm(msg)==true){ 
        return true; 
        }else{ 
        return false; 
        } 
    },
     
    /**
     * 交换index代表的值
     * @param {*} index 
     */

    change2high : function(index){
        var temp=null;
        temp=this.array[index];
        this.array[index]=this.array[index+1];
        this.array[index+1]=temp;
        temp=null;
    },

    change2low : function(index){
        var temp=null;
        temp=this.array[index];
        this.array[index]=this.array[index-1];
        this.array[index-1]=temp;
        temp=null;
            
    },
    
    /**
     * 此函数用于求得imginfo的zIndex的最大值
     * @param {*} index 当前图片的index值
     * @param {*} x 
     * @param {*} y 
     * @param {*} obj 当前图片的所有信息
     */

    isIndexBig : function(index,x,y,obj){
        var zIndex = -1;
        
        if(index>zIndex){
            zIndex = index;
            activeImageInfo = obj;
            activeImageOffsetX = x - activeImageInfo.x;
            activeImageOffsetY = y - activeImageInfo.y;
        }else{
            return false;
        }
    },
    /**
     * 次函数用于在点击图片时，为图片绘制边框
     * @param {*} e 鼠标点击事件
     * @param {*} border 判断是否画边框的开关
     */
    drawRect : function(e, border){
        
        border = border || false;
        if (border) {
            var ctx = this._canvasNode.getContext("2d");
            ctx.beginPath();
            ctx.strokeStyle = 'red'; 
            ctx.lineWidth = 2;
            
            ctx.strokeRect(e.x,e.y,e.width,e.height);
        }
    },
    
    /**
     * 此函数用于判断鼠标是否在选定的图片内部
     */
    isInRect : function(ptx, pty, rectx, recty, rectw, recth){
        return (ptx >= rectx && ptx <= rectx + rectw) &&
        (pty >= recty && pty <= recty + recth);
    },

    /**
     * 此函数用来在canvas上绘制图片
     * @param {*} ctx 画布
     * @param {*} src 图片来源
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     */

    drawImage : function(ctx, src, x, y, width, height){
        var img = new Image(); //创建一个Image对象，实现图片的预下载    
        img.src = src;        
        
        if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数    
            ctx.save();    
            ctx.drawImage(img,x,y,width,height);                      
            ctx.restore();    
        }     
        else {
            img.onload = function () { //图片下载完毕时异步调用callback函数。    
                ctx.save();    
                ctx.drawImage(img,x,y,width,height);                      
                ctx.restore();     
            }; 
        }
    },

    hidModeul : function(obj,className_a,className_b,flag){
        if(flag){
            obj.removeClass(className_a);
            obj.addClass(className_b);
            flag=false;
            
        }else{
            obj.removeClass(className_b);
            obj.addClass(className_a);
            flag=true;
           
        }
       
    },

    

    //加载图片

    getPlotImg : function(len,tag){
       
        for(var i=0;i<len; ++i){
            if(tag == 1){
                
                this.choseImg($('#plot_img_'+i),i*10+50,this.w,this.h,'plot');
            }else if(tag == 2){
                
                this.choseImg($('#trim'+i),i*10+80,this.w,this.h,'trim');
            }else if(tag == 3){
                
                this.choseImg($('#background'+i),0,canvas.width,canvas.height,'background');
            }
            
        }
    },

    onmousedown : function(ev){
        var e = ev||event;  
        var x = e.offsetX;  
        var y = e.offsetY; 

        clickImageInCanvas = false;
        // 检测canvas中的图片列表中被点中的图片
        for (var i = 0; i < imageInfoArray.length; ++i) {
            var imageInfo = imageInfoArray[i];
        
            if (this.isInRect(x, y, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height)) { //检测是否在被选中的图片中，是则记录坐标
                clickImageInCanvas = true;
               
                this.isIndexBig(imageInfo.zIndex,x,y,imageInfo);
            }
        }
        this.resetActiveInfo(activeImageInfo);
        
        if (clickImageInCanvas) {
            this.drawRect(activeImageInfo, true);
            
        }
        
    },
    resetActiveInfo : function(array){
        if(array){

        
        if(array.x <0 ){
            array.x = 0;
            
        }
        if(array.y < 0){
            array.y = 0;
        }
    }else{
        return ;
    }
        
    },
    onmousemove : function(ev){
        if (clickImageInCanvas) {
            var e = ev||event;  
            var x = e.offsetX;  
            var y = e.offsetY; 

            // 更新被操作的图片信息
            activeImageInfo.x = x - activeImageOffsetX;
            activeImageInfo.y = y - activeImageOffsetY;
            this.resetActiveInfo(activeImageInfo);

            this.refreshImg(imageInfoArray);
           
            this.drawRect(activeImageInfo, true);
            this.showPicInfo(activeImageInfo);
            this.changeWidth(activeImageInfo);
        }
    },

    onmouseup : function(ev){
        var e = ev||event;  
        var x = e.offsetX;  
        var y = e.offsetY; 
        
        if (clickImageInCanvas) {
            // 更新canvas中的图片信息
            activeImageInfo.x = x - activeImageOffsetX;
            activeImageInfo.y = y - activeImageOffsetY;

            this.resetActiveInfo(activeImageInfo);
            this.refreshImg(imageInfoArray);
            
            clickImageInCanvas = false;
            
             this.showPicInfo(activeImageInfo);
             this.changeWidth(activeImageInfo);
        }
    },

    /**
     * 此函数用于，点击模块内的图片，使其在canvas画板上显示
     * @param {*} imageObject  点击事件的发出者id
     * @param {*} step  每个块与块之间的间隔
     */

    choseImg : function(imageObject, step,width,height,Name){
        
        var _this = this;
        window.callback = function(name){
            var imageInfo = {
                                     //优先级
                "imgName" : imageObject[0].id,                //图片名称
                
            };
            imageInfo.imgName = name ;
        }
        imageObject.click(function() {
            var str = imageObject[0].className + 'tag';
            var string = imageObject[0].id.replace(/\d+/g,'');
            var length = imageInfoArray.length;
            var imageInfo = {
                "x" : _this.x + step,                           //x轴坐标
                "y" : _this.y + step,
                "width" : width, 
                "height" : height,
                "src" : imageObject[0].src,    
                "zIndex" : 1 + length,                         //优先级
                "imgName" : imageObject[0].alt,                //图片名称
                "tag" : length,                                //图片点击顺序
                "class" : Name
            };
            
           
           
            
            if(name == 'background'){
               imageInfo.zIndex = 0;
            }


            imageInfoArray[length] = imageInfo; 
            
            _this.drawImage(ctx, imageInfo.src, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height);
            addInfo2Ul(imageInfo.imgName,imageInfo.tag);
            _this.clickTagA();

            
        });
    },

    moveLeft : function(obj,old,now){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            
            var iSpeed = (now - old); //102
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            
            if(now == old){
                clearInterval(obj.timer);
            }
            else{
                old+= iSpeed;
                
                obj.css('left', old + 'px');
            }
            
        },3);
    },

    preClick : function(obj,step){
        
       
        obj.css("transform", "translate3d("+step+"px,0px,0px)");  //修改这里运动
        obj.css({transition: 'transform ' + 0.5 + 's'});
    
    },

    nextClick : function(obj,step){
        obj.css("transform", "translate3d("+step+"px,0px,0px)");  //修改这里运动
        obj.css({transition: 'transform ' + 0.5 + 's'});
    },

    

    clearPicInfo : function(obj){
       
        for(var j = 0 ;j < obj.length ; ++j){
        var len = obj[j].childNodes.length;
            for(var i=0 ; i<len ; ++i ){
                obj[j].removeChild(obj[j].childNodes[i]);
                i--;
                len--;
            }
        }
    
    },
    showPicInfo : function(array){
        
        var imgListInfo = document.getElementsByClassName('trim_mainLi'); 
        this.clearPicInfo(imgListInfo);
        this.addPicInfo(imgListInfo);
        imgListInfo[0].innerHTML += '<span class="imgListSpan">' + array.imgName + '</span>';
        imgListInfo[1].innerHTML += '<span class="imgListSpan">' + array.x + '</span>';
        imgListInfo[2].innerHTML += '<span class="imgListSpan">' + array.y + '</span>';
        imgListInfo[3].innerHTML += '<input id="imgWidth" value=' + array.width +'>' ;  
        imgListInfo[4].innerHTML +='<input id="imgHeight" value=' + array.height +'>';  
        

    },

    addPicInfo : function(obj){
        var elm_p0 = document.createElement('p');
        var elm_p1 = document.createElement('p');
        var elm_p2 = document.createElement('p');
        var elm_p3 = document.createElement('label');
        var elm_p4 = document.createElement('label');
        
        
        elm_p0.innerHTML = "图片名称:";
        elm_p1.innerHTML = "X轴坐标:";
        elm_p2.innerHTML = "Y轴坐标:";
        elm_p3.innerHTML = "W宽度:";
        elm_p4.innerHTML = "H高度:";
        
        
        obj[0].appendChild(elm_p0);
        obj[1].appendChild(elm_p1);
        obj[2].appendChild(elm_p2);
        obj[3].appendChild(elm_p3);
        obj[4].appendChild(elm_p4);
        
        

    },
   
   
    /**
     * 用于点击按钮将模块的本地图片输出到html页面中
     * @param {*} obj 在哪个Ul块下添加
     * @param {*} num 添加多少个图片
     * @param {*} imgTagName 每个img的tag值的名字
     * @param {*} idName   每个img的id名字
     * @param {*} imgObj   获取Json数组imgObj对象的名字
     * @param {*} imgSrc    获取img的Src属性的值
     */
    addMod2Ul : function(obj,num,imgClassName,imgTagName,idName,imgObj,imgSrc){
        var liName = document.createElement('li');
        var imgName = document.createElement('img');
        
        liName.className = 'plot_1 pull-left';
        imgName.setAttribute(imgTagName,num);
        imgName.className = imgClassName;
        imgName.id = idName+num;
       
        $.get('../json/imgName.json').done(function(data){
            var name = data[imgObj][num];
            imgName.setAttribute('alt',name); 
            imgName.setAttribute('src','../images/'+imgSrc+'/'+name);
        });
        

       
        obj[0].appendChild(liName);
        liName.appendChild(imgName);

    },

    
    changeWidth : function(array){
        var _this = this;
        
        $('#imgWidth').keydown(function(e){
            if(e.keyCode == 13){
                if(!isNaN($('#imgWidth')[0].value)){
                    //修改width
                    ctx.clearRect(array.x,array.y,array.width, array.height);
                    array.width = parseInt($('#imgWidth')[0].value);
                     _this.drawImage(ctx, array.src, array.x, array.y, array.width, array.height);
                     
                    
                }else{
                    alert('请输入数字');
                }
                
            }
        });

        $('#imgHeight').keydown(function(e){
            if(e.keyCode == 13){
                if(!isNaN($('#imgHeight')[0].value)){
                    //修改height
                    ctx.clearRect(array.x,array.y,array.width, array.height);
                    array.height = parseInt($('#imgHeight')[0].value);
                    _this.drawImage(ctx, array.src, array.x, array.y, array.width, array.height);
                }else{
                    alert('请输入数字');
                }
            }
        });
    },

    changeIndex : function(index){
        
        $('#z_Index').html(index);
    },

    funDownload : function (content, filename){

        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        var blob = new Blob([this.jsonNaN(content)]);
        // 字符内容转变成blob地址
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    },

    jsonNaN : function(jsonString){

        if(document.getElementById('radio1').checked){
            
            var jsonstr = JSON.stringify(jsonString);
            return jsonstr;
        }else{
            
            var jsonstr =JSON.stringify(jsonString,null,4);
            return jsonstr;
        }
    },

    changeCanvas : function(w,h){
        
        var Width = this._canvasNode.getAttribute('width');
        var Height = this._canvasNode.getAttribute('height');
        
        var data = this._ctx.getImageData(0,0,parseInt(Width),parseInt(Height));   // w,h 只能为数字
        
        //重新设置画布的宽度和高度

        Width = w ;
        Height = h ;
        this._canvasNode.setAttribute('width',Width);
        this._canvasNode.setAttribute('height',Height);
        
        //将获得的图像副本,重新绘制到画布,完成画布的大小改变
        this._ctx.putImageData(data,0,0);

        //修改background图片大小，并重绘画布
        backgroundCanvas.w = Width;
        backgroundCanvas.h = Height;

        $('#imgWidth')["0"].value = Width;   //图片信息框更新信息
        $('#imgHeight')["0"].value = Height;

        for(var i = 0;i < this.array.length;++i){   //存放数据的数组更新信息
            if(this.array[i].class == 'background'){
                this.array[i].width = Width;
                this.array[i].height = Height;
            }
            
        }
        this.refreshImg(this.array);    
        
    }



};

/************************************************实例化Canvas对象*********************************************************** */


var plotcanvas = new Canvas({
    x : 50,
    y : 50,
    w : 150,
    h : 150,
    flag : true, 
    array : imageInfoArray
}, canvas);

var trimCanvas=new Canvas({
    x : 200,
    y : 200,
    w : 100,
    h : 100,
    flag : true, 
    array : imageInfoArray
}, canvas);

var backgroundCanvas = new Canvas({
    x : 0,
    y : 0,
    w : canvas.width,
    h : canvas.height,
    flag : true,
    array : imageInfoArray
},canvas);








/**************************************************动态添加函数************************************************************************** */

/**
 * 此函数用来动态添加图片信息，当点击资源块中的图片显示到canvas画布中时，将点击的图片信息显示在ID=imgInfoList的ul块中
 * @param {*} obj 图片的名字
 * @param {*} num 图片的点击顺序
 */

function addInfo2Ul(obj,num){
    

    var elm_li=document.createElement('li');
    var elm_li_input=document.createElement('input');
    var elm_li_label=document.createElement('label');
    var elm_li_a=document.createElement('a');

    elm_li.className='mainLi';
    elm_li.id='checkbox_'+num;
    
    elm_li_a.className='Li_a';
    elm_li_a.setAttribute('href','javascript:;');
    elm_li_a.setAttribute('tag',num);
    elm_li_a.innerHTML=obj;

    elm_li_input.className='chk_1';
    elm_li_input.setAttribute('type','checkbox');
    elm_li_input.setAttribute("tag", num);
    elm_li_input.id="checkbox_a"+num;

    elm_li_label.setAttribute('for',elm_li_input.id);

    elm_li.appendChild(elm_li_input);
    elm_li.appendChild(elm_li_label);
    elm_li.appendChild(elm_li_a);
    oUl.appendChild(elm_li);
    

}










