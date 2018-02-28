/**
 * canvas操作原型
 * 利用onmouseup ,onmousedown,onmouseover
 * 通过down确定激活对象，
 * 然后利用move不断重绘图像并存储绘制数据,
 * 鼠标up时，清除画布，并通过数据重绘图片，同时取消move动作
 */



function CutPic(options,canvas){
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

CutPic.prototype = {
    _init : function(options){
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.layers = options.layers || 0;
        this.selAllFlag = true;
    },

    /**
     * 用于点击按钮将模块的本地图片输出到html页面中
     * @param {*} obj 在哪个Ul块下添加
     * @param {*} num 添加多少个图片
     * @param {*} imgTagName 每个img的tag值的名字
     * @param {*} idName   每个img的id名字
     * @param {*} imgObj   获取Json数组imgObj对象的名字
     * @param {*} imgSrc    获取img的Src属性的值
     *  @param {*} layerNum    层级数
    //  *  @param {*} compNum    组件数
     */

    addMod2Ul : function(obj,num,imgClassName,imgTagName,idName,imgObj,imgSrc,layerNum,compNum){
        var liName = document.createElement('li');
        var imgName = document.createElement('img');
        
        liName.className = 'plot_1 pull-left';
        imgName.setAttribute(imgTagName,num);
        imgName.className = imgClassName;
        imgName.id = idName+num;
        imgName.setAttribute('data-layer',layerNum);
        imgName.setAttribute('data-comp',compNum);
        $.get('../json/imgName.json').done(function(data){
            var name = data[imgObj][num];
            imgName.setAttribute('alt',name); 
            imgName.setAttribute('src','../images/'+imgSrc+'/'+name);
            var oImg = document.getElementById(imgName.id);
            getImgNaturalDimensions(oImg,function(data){
                imgName.setAttribute('data-width',data.w);
                imgName.setAttribute('data-height',data.h);
            });
        });
        obj[0].appendChild(liName);
        liName.appendChild(imgName);
    },
    /**
     * 图片轮播切换
     */
    preClick : function(obj,step){
        obj.css("transform", "translate3d("+step+"px,0px,0px)");  //修改这里运动
        obj.css({transition: 'transform ' + 0.5 + 's'});
    },
    nextClick : function(obj,step){
        obj.css("transform", "translate3d("+step+"px,0px,0px)");  //修改这里运动
        obj.css({transition: 'transform ' + 0.5 + 's'});
    },
    //加载图片

    getPlotImg : function (len,tag) {
        var theCanvas = document.getElementById('canvas');
        theCanvas.width = this.width;
        theCanvas.height = this.height;
        for (var i=0;i<len; ++i) {
            if (tag == 1) {
                this.choseImg($('#plot_img_'+i),i*10+50,this.width,this.height,len);
            }else if (tag == 2) {
                this.choseImg($('#trim'+i),i*10+80,this.width,this.height,len);
            }else if (tag == 3) {
                this.choseImg($('#background'+i),0,this.width,this.height,len);
            }else if (tag == 4) {
                this.choseImg($('#frog'+i),0,this.width,this.height,len);
            }
            
        }
    },
    /**
     * 此函数用于，点击模块内的图片，使其在canvas画板上显示
     * @param {*} imageObject  点击事件的发出者id
     * @param {*} step  每个块与块之间的间隔
     * @param {*} width 图片的宽度
     * @param {*} height 图片的高度
     * @param {*} len  该模块共多少的图片
     */
    choseImg : function(imageObject, step,width,height,len){
        var _this = this;
        imageObject.click(function() {
            var ctx = _this._ctx;
            var length = imageInfoArray.length;
            var picWidth = parseInt($(this).attr('data-width'));
            var picHeight = parseInt($(this).attr('data-height'));
            var layNum = parseInt($(this).attr('data-layer'));
            var compNum = parseInt($(this).attr('data-comp'));
            var source = $(this).attr('alt');
            var src = $(this).attr('src');
            var idNum = parseInt($(this).attr('id').replace(/[^0-9]/g,''));
            var comp = _this.layers[layNum].components[compNum];
            picWidth > _this.width ? _this.width = picWidth : _this.width;
            picHeight > _this.height ? _this.height = picHeight : _this.height;
            var theCanvas = document.getElementById('canvas');
            theCanvas.width = _this.width;
            theCanvas.height = _this.height;
            //把图片信息存入数组  ！
            var imageInfo = {      //此对象为图片操作对象，点击保存只需将此对象赋值给主数组
                "x" : 0 + step,      //x,y为左上角图标，后台需要数据是左下角的图标
                "y" : 0 + step,
                "w" : picWidth,
                "h" : picHeight,
                "imgName" : source,
                "zIndex" : comp.zOrder - length + (_this.layers[layNum].zOrder * 2) -1,   //层级的2倍顺序加图片的顺序减去当前图片的序列数
                "id" : idNum,
                "comp" : compNum,
                "layer" : layNum,
                "src" : src
            }; 
            imageInfoArray[length] = imageInfo;  //imageInfoArray记录当前所有图片的信息
            var len = imageInfoArray.length;
            for(var i = 0 ; i < len; ++i){
                _this.drawImage(ctx, imageInfoArray[i].src, imageInfoArray[i].x, imageInfoArray[i].y, imageInfoArray[i].w, imageInfoArray[i].h);
            }
            addInfo2Ul(imageInfo.imgName,imageInfo.zIndex);
            _this.clickTagA();
        });
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
    onmousedown : function(ev){
        var e = ev||event;  
        var x = e.offsetX;  
        var y = e.offsetY; 
        clickImageInCanvas = false;
        // 检测canvas中的图片列表中被点中的图片
        console.log(imageInfoArray);
        for (var i = 0; i < imageInfoArray.length; ++i) {
            var imageInfo = imageInfoArray[i];
            if (this.isInRect(x, y, imageInfo.x, imageInfo.y, imageInfo.w, imageInfo.h)) { //检测是否在被选中的图片中，是则记录坐标
                clickImageInCanvas = true;
                this.isIndexBig(imageInfo.zIndex,x,y,imageInfo); 
            }
        }
        this.resetActiveInfo(activeImageInfo);
        if (clickImageInCanvas) {
            this.drawRect(activeImageInfo, true);
        }
        this.showPicInfo(activeImageInfo);
        console.log(activeImageInfo);
        setPicVal(activeImageInfo); //将选中图片的信息放入cutPic数组中
    },
     /**
     * 此函数用于判断鼠标是否在选定的图片内部
     */
    isInRect : function(ptx, pty, rectx, recty, rectw, recth){
        return (ptx >= rectx && ptx <= rectx + rectw) &&
        (pty >= recty && pty <= recty + recth);
    },
    /**
     * 此函数用于求得imginfo的zIndex的最大值
     * @param {*} index 当前图片的index值
     * @param {*} x 
     * @param {*} y 
     * @param {*} obj 当前图片的所有信息
     */
    isIndexBig : function(index,x,y,obj){  //这个函数有点问题
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
     * 让图片不要移动出界，图片限制函数
     */
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
            // this.resetActiveInfo(activeImageInfo);
            this.refreshImg(imageInfoArray);
            this.drawRect(activeImageInfo, true);
            this.showPicInfo(activeImageInfo);
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
            this.drawImage(ctx, obj[i].src, obj[i].x, obj[i].y, obj[i].w, obj[i].h);
        }
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
    onmouseup : function(ev){
        var e = ev||event;  
        var x = e.offsetX;  
        var y = e.offsetY; 
        
        if (clickImageInCanvas) {
            // 更新canvas中的图片信息
            activeImageInfo.x = x - activeImageOffsetX;
            activeImageInfo.y = y - activeImageOffsetY;

            // this.resetActiveInfo(activeImageInfo);    //不要让图片移动出界
            this.refreshImg(imageInfoArray);
            clickImageInCanvas = false;
             this.showPicInfo(activeImageInfo);
        }
    },
    /**
     * 此函数用于图片信息框点击图片信息，让图片保持最高优先级
     */

    clickTagA : function(){
        var ctx = this._canvasNode.getContext('2d');
        var tagA=document.getElementsByClassName('Li_a');
        var _this = this ;
        for(var i = 0;i < tagA.length; ++i){
            tagA[i].onclick = function(){
                for(var index = 0;index < imageInfoArray.length; index++){    //此循环找到符合条件的index
                    if($(this).html() == imageInfoArray[index].imgName){
                        break;
                    }
                }
                imageInfoArray[index].zIndex += imageInfoArray.length*2; 
                _this.showPicInfo(imageInfoArray[index]);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                for(var j=0;j<imageInfoArray.length;j++){
                    imageInfo=imageInfoArray[j];
                    _this.drawImage(ctx, imageInfo.src, imageInfo.x, imageInfo.y, imageInfo.w, imageInfo.h);
                }
                _this.drawRect(imageInfoArray[index], true); 
                // 点击提升层级，略有问题
                //    for(var j = 0;j < imageInfoArray.length;++j){
                //         // _this.improveIndex(index+j,imageInfoArray);
                //         _this.drawRect(imageInfoArray[j], true);   
                //    }
                //    for(var k=0;k<_this.array.length;k++){ 
                //     _this.array[k].zIndex=_this.array[k].tag+1;
                //    }
            };
        }
    },
    showPicInfo : function(array){
        $('#imgName').val(array.imgName);
        $('#dataX').val(array.x);
        $('#dataY').val(array.y);
        $('#dataWidth').val(array.w);
        $('#dataHeight').val(array.h);
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
            ctx.strokeRect(e.x,e.y,e.w,e.h);
            ctx.closePath();
        }
    },
    selAll : function(obj){
        if(this.selAllFlag){
            for (var i=0;i<obj.length;i++){
                obj[i].checked = true;
            }
            this.selAllFlag=false;
        }else{
            for (var i=0;i<obj.length;i++){
                obj[i].checked = false;
            }
            this.selAllFlag=true;
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
    upIndex : function(actInfo){
        //提高数据里的zIndex
        var ctx = this._canvasNode.getContext('2d');
        var canvas = this._canvasNode;
        actInfo.zIndex < 1 ? actInfo.zIndex = 0 : actInfo.zIndex -= 1;
        var arr = cutPic.layers[actInfo.layer].components;
        var active = cutPic.layers[actInfo.layer].components[actInfo.comp];
        var before = active.zOrder;
        active.zOrder < 1 ? active.zOrder = 0 : active.zOrder -= 1 ;
        var len = Object.keys(arr).length;
        var t;
        for (var i = 0; i < len; ++i ) {
            if(actInfo.comp != i){
                if (active.zOrder >= arr[i].zOrder ) {
                    arr[i].zOrder = before;
                    break;
                }
            }
        }
        var imgInfo = new Array();
        //重新调整左侧视图
        // $('#compDiv_' + array.layer).children().eq(i).after($('#compDiv_' + array.layer).children().eq(active.zOrder));
        //重绘canvas视图
        for(var j = 0;j < len; ++j){
            imgInfo.push(arr[j]);
        }
        whichIndexBig(imgInfo,ctx,canvas);
        
        for(var k = 0; k < imageInfoArray.length; ++k){
            imageInfoArray[k].zIndex = arr[k].zOrder;
        }

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
};

var mainCanvas = document.getElementById('canvas'); 
var imageInfoArray = new Array();
var clickImageInCanvas = false;
// 正在被操作的canvas中的图片
var activeImageInfo = null;
// 正在被操作的canvas中的图片的偏移位置
var activeImageOffsetX = 0;
var activeImageOffsetY = 0;
var cutPic = new CutPic({
    width : 0,
    height : 0,
    layerCount : 0,
    layers :[]
},mainCanvas);

layers = {
    depth : 0,
    zOrder : 0,
    types : 1,
    components : []
};

components = {
    type : 0,
    zOrder : 0,
    width : 0,
    height : 0,
    coordX : 0,  
    coordY : 0,
    name : 'xx.jpg',
    images : [{
        name : 'bullet_map_test_1.png',
        width : 0,
        height: 0,
        coordX : 0,  
        coordY : 0,
        anchorX : 0,
        anchorY : 0
    },
    {
        name : 'bullet_map_test_1.png',
        width : 0,
        height: 0,
        coordX : 0,  
        coordY : 0,
        anchorX : 0,
        anchorY : 0
    }
    ]
};

