/**
 * 此JS文件用于实现Map页面的点击事件 Controller
 */

 /**
  * 为动态生成的层级添加点击事件   eg: 第1层的点击事件
  */
 function addUlClick(uId,aId,pId,num){
    $('#' + uId).one('click',function(){
        addUlList($(this),num);
        addCompVal(num,0);
        switchLayer(num);
    });
    $('#' + pId).click(function(){
        $('#' + aId).toggleClass('changePicMode');
       
    });
 }
 /**
  * 点击折叠，展开层级块
  * @param {*} num 
  */
 function addToggle1(num){
    $('#layersP_' + num).click(function(){
      var len = $('#layersLis_' +num).children().length;
       for(var i=1;i <len; ++i){
           $('#layersLis_' +num).children().eq(i).toggle('normal');
       }
    });
}
/**
 * 点击折叠，展开组件块
 * @param {*} num 
 * @param {*} comLen 
 */
 function addToggle(num,comLen){
     $('#compP_' + num + '_' + comLen).click(function(){
        var len = $('#compse_'+ num + '_' + comLen).children().length;
        $('#layersPic_'+ num + '_' + comLen).toggleClass('changePicMode');
        for(var i = 1;i < len ;++i){
            $('#compse_'+ num + '_' + comLen).children().eq(2).css('display','block');
            $('#compse_'+ num + '_' + comLen).children().eq(i).toggle('fast');
        }
        
     });
 }

 /**
  * 点击添加组件,并添加数据
  * @param {*} num 
  */
 function addCompseClick(num){
     $('#layAddLi_' + num).click(function(){
         var l = $('#compDiv_' + num).children().length -1;
         l < 0 ? l = 0 : l;
         if($('#compDiv_' + num).children().eq(l).length){
            var len =  parseInt($('#compDiv_' + num).children().eq(l).attr('data'));
         }else{
             var len = 0;
         }
        addComp(num,len,$('#compDiv_' + num));
        addCompVal(num,len);
     });
    
 }
 /**
  * 删除组件点击事件，并输出组件数据
  * @param {*} num 
  * @param {*} len 
  */
 function addDelComp(num,len){
     $('#removComp_' + num + '_' + len).click(function(){
         if(Tip(1)){
            $(this).parent().parent().remove();
            //删除数据
            deleteCompVal(num,len);
         }else{
             return false;
         }
        
     });
 }

 /**
  * 提示信息
  */
 function Tip(flag){
     if(flag ==1){
         var msg = '确认删除此组件? \n\n请确认!';
     }else if(flag ==2){
         var msg = '确认删除此层? \n\n请确认!';
     }
     if(confirm(msg)){
         return true;
     }else{
         return false;
     }
 }

 /**
  * 删除层级，并删除层级数据
  * @param {*} num 
  */
 function addLayerDel(num){
     $('#layerDel_' + num).click(function(){
         if(Tip(2)){
            $(this).parent().parent().parent().remove();   
            //数据删除
            deleLayerVal(num);
         }else{
            return false;
         }
     });
 }


 /**
  * 点击确定按钮后，切换按钮为添加
  */
  function changeBtn(obj,num){
      var btn = "<button type='submit' id='addLayers' class='butn1'> + </button>";
      $(obj).parent().append(btn);
      addBtnClick(num);
      $('#step2Lab').html('层级数');
      $('#layers').prop('readonly','readonly');
      $(obj).remove();
      console.log($(obj));
  }

  function addBtnClick(num){
      $('#addLayers').click(function(){
        cutPic.layerCount += 1;
        addLayerList(cutPic.layerCount-1,$('#totalList'));
        addListVal(cutPic.layerCount-1);
        console.log(cutPic);
      });
  }
 
   /**
  * 点击添加图片到页面
  * @param {*} num 
  * @param {*} len 
  */
 function addPicClick(num,len){
    $('#layerBtn_' + num + '_1' + '_' + len).click(function(){
        var val = $(this).html();
        switch (val) {
            case '风景':
                show($('#backPic_bottom'),1);
                getPlotPic(num,len,'backPic_bottom','back_div','background','back_img','back_imgTag','background','background','background',3);
                break;
            case '地形':
                show($('#plot_bottom'),1);
                getPlotPic(num,len,'plot_bottom','plot_div','plot','plot_img','plot_imgTag',"plot_img_",'plot','plot_img',1);
             
                break;
            case '装饰物':
                show($('#trim_bottom'),1);
                getPlotPic(num,len,'trim_bottom','trim_div','trim','trim_img','trim_imgTag','trim','trim','trimming',2);
                break;
            case '雾':
                show($('#frog_bottom'),1);
                getPlotPic(num,len,'frog_bottom','frog_div','frog','frog_img','frog_imgTag','frog','frog','frog',4);
                break;
            default:
                break;
        }
    });
}

$('.btn').on('click', function () {
    var $this = $(this);
    var data = $this.data();
    var canvas = document.getElementById('canvas');
    var $myCanvas = $('#canvas');
    var $target;
    var result;
    if (data.method) {
        data = $.extend({}, data); // Clone a new one
        switch (data.method) {
            case 'getCroppedCanvas':
                cropImage(0,0,canvas.width,canvas.height,canvas,0);
                break;
            case 'download':
                downloadImg();
                break;
            case 'output' :
                funDownload1('picInfo.json',cutPic.layers);
                break;
            case 'moveup' :
                //提高层级
                cutPic.upIndex(activeImageInfo);
                break;
            case 'movedown' :
                //降低层级
                cutPic.downIndex(activeImageInfo);
                break;
            default:
                break;
        }
     
    }else{
        return;
    }

});

function cropImage(x,y,width,height,targetCanvas,num){
    var targetctx = targetCanvas.getContext('2d');
    console.log(cutPic.layers[cutPic.layerCount - 1]);
    var targetctxImageData = targetctx.getImageData(x, y, width, height); // sx, sy, sWidth, sHeight
    var result = "<canvas id='source" + num +"' style='width : " + width + "px;height : " + height + "px;'></canvas>";
    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
    var c = document.getElementById('source' + num);
    var ctx = c.getContext('2d');
    c.width = width;
    c.height = height;
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.putImageData(targetctxImageData, 0, 0); // imageData, dx, dy
    document.getElementById('source' + num).src = c.toDataURL('image/png');
    if(num != 0){
        downloadFile('plot_img' + num + '.png', c.toDataURL("image/png"));
    }
}

function downloadImg(){
    var targetWidth = 256;   //用户自定义
    var targetHeight = 256;  //用户自定义
    var num = 0;
    //图片最大宽高
    for(var i = 0 ;i < canvas.width ; i += targetWidth){
        for(var j = 0; j < canvas.height ; j += targetHeight){
            num += 1;
            var len1 = i + targetWidth;
            var len2 = j + targetHeight;
            if (len1 <= canvas.width && len2 <= canvas.height) {
                cropImage(i,j,targetWidth,targetHeight,canvas,num);
            } else if (len1 <= canvas.width && len2 > canvas.height) {
                cropImage(i,j,targetWidth,(len2 - canvas.height),canvas,num);
            } else if (len1 > canvas.width && len2 <= canvas.height) {
                cropImage(i,j,(len1 - canvas.width),targetHeight,canvas,num);
            } else if (len1 > canvas.width && len2 > canvas.height) {
                cropImage(i,j,(len1 - canvas.width),(len2 - canvas.height),canvas,num);
            }
        }
    }
}


$(document).ready(function(){
    $('#subLayers').click(function(){
        if($('#layers').val() != ''){
            if($('#mapW').val() != '' && $('#mapH').val() != ''){
                cutPic.layerCount = parseInt($('#layers').val());
                for(var i = 0 ; i< cutPic.layerCount; ++i){
                    addLayerList(i,$('#totalList'));
                }
                getLayerVal(cutPic.layerCount);
                changeBtn(this,cutPic.layerCount);
            }else{
                alert('请输入宽高!');
                $('#layers').val('');
            }
        }else{
            alert('请输入一个值');
            return false;
        }
    });
    var oUl=document.getElementById('imgInfoList');
    var oCheck=oUl.getElementsByClassName('chk_1');
    // $('#delete_input').click(function(){
    //     cutPic.delete(oCheck);
    // });
    
    $('#checkbox_a').click(function(){
        cutPic.selAll(oCheck);
    });
});