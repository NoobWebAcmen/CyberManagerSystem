/**
 * 此文件用于响应click事件
 */

/**
 * 获取图片资源块，并添加到页面上
 * @param {*} num 层级
 * @param {*} len 组件
 * @param {*} parent 底部存放资源块的div块
 * @param {*} sourceMod 图库ul
 * @param {*} sourceType 资源类型
 */
 function getPlotPic(num,len,parentMod,sourceMod,sourceType,imgClassName,imgTagName,idName,imgObj,imgSrc,flag){
    var plot_ul=$('#' + sourceMod);
    var type = sourceType;
    $.get('../json/imgName.json',function(data){
        var length = Object.keys(data[type]).length;
        if(plot_ul.children().length != length){
            for(var i=0 ; i<length ; ++i){
                cutPic.addMod2Ul(plot_ul,i,imgClassName,imgTagName,idName,imgObj,imgSrc,num,len);
            }
            cutPic.getPlotImg(length,flag);
        }else{
            for(var j = 0 ; j < length ; ++j){
               changelayer(plot_ul,j,num,len);
            }
        }
        moveBackUl(plot_ul,flag);
    });
 }
 function moveBackUl(obj,flag){
    var iNow=0;
    var w = (Math.ceil(obj.children().length / 1.5))* obj.children().eq(0).prop('offsetWidth') + 'px';
    obj.css('width',w );
    var width = obj.children().eq(0).prop('offsetWidth');
    var num = 0;
    $('#prev' + flag).click(function(){
        if(num < width )
        {
            num += width;
            cutPic.preClick(obj,-width + num);
        }else{
            num = -width * 5; 
            cutPic.preClick(obj,-width + num);
        } 
    });

    $('#next' + flag).click(function(){
        if(num >-width * 5)
        {
            num -= width;
            cutPic.nextClick(obj,-width + num);
            
        }else{
            num = width;
            cutPic.nextClick(obj,-width + num);
        }
    });

}

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
/**
 * 获取图片的宽高
 * @param {*} oImg 
 * @param {*} callback 
 */
function getImgNaturalDimensions(oImg, callback) {
　　var nWidth, nHeight;
　　var nImg = new Image();
    nImg.onload = function() {
        var nWidth = nImg.width,
         nHeight = nImg.height;
        callback({w: nWidth, h:nHeight});
　　}
　　nImg.src = oImg.src;
}
/**
 * 此函数用来动态添加图片信息，当点击资源块中的图片显示到canvas画布中时，将点击的图片信息显示在ID=imgInfoList的ul块中
 * @param {*} obj 图片的名字
 * @param {*} num 图片的点击顺序
 */

function addInfo2Ul(obj,num){
    var oUl = document.getElementById('imgInfoList');
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
/**
 * 让4个组件块点击显示本块，隐藏其他块
 * @param {*} obj 本组件块的id
 * @param {*} index 标志位
 */
function show (obj,index){
    if (index == 1){
        $('.parentHiddTag').css('display','none');
    }
    obj.css('display','block');
}

function changelayer(obj,index,num,len){
    obj.children().eq(index).children().attr('data-layer',num);
    obj.children().eq(index).children().attr('data-comp',len);
}

/**
 * 判断zIndex谁大，控制绘画顺序
 * @param {*} array 
 */
function whichIndexBig(array,ctx,canvas){
//    ctx.clearRect(0,0,canvas.width,canvas.height);
   var indexArr = [];
   for (var i = 0;i < array.length - 1; ++i){
       for(var j = 0; j < array.length - 1; ++j){
            if(array[i].zOrder > array[j].zOrder){
                indexArr.push(i);
            }
       }
   }
   console.log(indexArr)
//    cutPic.drawImage(ctx, array[i+1].src, array[i+1].coordX, (array[i+1].coordY - array[i+1].height), array[i+1].width, array[i+1].height);
//    cutPic.drawImage(ctx, array[i].src, array[i].coordX, (array[i].coordY - array[i].height), array[i].width, array[i].height);
}


   