var cantox = document.getElementById("cantox"); 
var cliptox = document.getElementById("cliptox"); 
var btnclip = document.getElementById("btnclip"); 
//获取到canvas元素 
var oldcanvas = document.getElementById("oldcanvas"); 
var nowcanvas = document.getElementById("nowcanvas"); 
//获取canvas中的画图环境 
var oldcontext = oldcanvas.getContext('2d'); 
var nowcontext = nowcanvas.getContext('2d'); 

var img = new Image(); 
var start_time = new Date().getTime(); 
//读取图片的宽高
var img_url = '../images/background/切图1.png?'+start_time;
img.src = img_url; 

var check = function(){
  // 只要任何一方大于0
  // 表示已经服务器已经返回宽高
  if(img.width>0 || img.height>0){
  var diff = new Date().getTime() - start_time;
  console.log('from:check : width:'+img.width+',height:'+img.height+', time:'+diff+'ms');
  clearInterval(set);
  }
 }; 
 var set = setInterval(check,40);
   
//  // 加载完成获取宽高
//  img.onload = function(){
//   var diff = new Date().getTime() - start_time;
//   console.log('from:check : width:'+img.width+',height:'+img.height+', time:'+diff+'ms');
//  };
//加载图像到canvas画布中 
window.onload = function (){ 
  oldcontext.drawImage(img,0,0,img.width,img.height); 
} 
var startPoint;//截取图像开始坐标 
var endPoint;//截图图像的结束坐标 
var w; //截取图像的宽度 
var h; //截取图像的高度 
var flag = false; //用于判断移动事件事物控制 
//鼠标按下事件 
cantox.onmousedown = function (e){ 
  flag = true; 
  cliptox.style.display = 'block'; 
  startPoint = windowToCanvas(oldcanvas, e.clientX, e.clientY); 
  cliptox.style.left = startPoint.x+'px'; 
  cliptox.style.top = startPoint.y+'px'; 
} 

//鼠标移动事件 
cantox.onmousemove = function (e){ 
  if(flag){ 
    cliptox.style.background = 'rgba(0,0,0,0.5)'; 
    endPoint = windowToCanvas(oldcanvas, e.clientX, e.clientY); 
    w = endPoint.x - startPoint.x; 
    h = endPoint.y - startPoint.y; 
    cliptox.style.width = w +'px'; 
    cliptox.style.height = h+'px'; 
  } 
} 
//鼠标释放事件 
cantox.onmouseup = function (e){ 
  flag = false; 
} 

//按钮截取事件 
btnclip.onclick = function (){ 
  imgCut(nowcontext,img,oldcanvas.width,oldcanvas.height,startPoint.x,startPoint.y,w,h);
  var type = 'png';
    var imgData = nowcanvas.toDataURL(type);
    // 加工image data，替换mime type
    var _fixType = function(type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        var r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    };
    imgData = imgData.replace(_fixType(type),'image/octet-stream');

    var saveFile = function(data, filename){
        var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;
        
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
    };
        
    // 下载后的问题名
    var filename = 'test_' + (new Date()).getTime() + '.' + type;
    // download
    saveFile(imgData,filename);
} 

/* 
* 图像截取函数 
* context:绘制环境对象 
* image：图像对象 
* imgElementW：图像显示的宽度 
* imgElementH：图像显示的高度 
* sx:截取图像的开始X坐标 
* sy:截取图像的开始Y坐标 
* w:截取图像的宽度 
* h:截取图像的高度 
* */ 
function imgCut(context,image,imgElementW,imgElementH,sx,sy,w,h){ 
  //清理画布，便于重新绘制 
  context.clearRect(0,0,imgElementW,imgElementH); 
  //计算 ：比例 = 原图像/显示图像 
  var ratioW = image.width/imgElementW; 
  var ratioH = image.height/imgElementH; 
  //根据截取图像的所占位置及大小计算出在原图所占的位置及大小 
  //.drawImage(图像对象,原图像截取的起始X坐标,原图像截取的起始Y坐标,原图像截取的宽度,原图像截取的高度， 
  // 绘制图像的起始X坐标,绘制图像的起始Y坐标,绘制图像所需要的宽度,绘制图像所需要的高度); 
  context.drawImage(image,ratioW*sx,ratioH*sy,ratioW*w,ratioH*h,0,0,w,h); 
} 

// /* 
//  * 坐标转换：将window中的坐标转换到元素盒子中的坐标，并返回(x,y)坐标 
//  * element：canvas元素对象 
//  * x:鼠标在当前窗口X坐标值 
//  * y:鼠标在当前窗口Y坐标值 
//  * */ 
// function windowToCanvas(element,x,y){ 
//   //获取当前鼠标在window中的坐标值 
//   alert(event.clientX+"-------"+event.clientY); 
//   //获取元素的坐标属性 
//   var box = element.getBoundingClientRect(); 
//   var bx = x - box.left; 
//   var by = y - box.top; 
//   return {x:bx,y:by}; 
// } 
// $(function(){
//   var odiv = document.getElementById('content');
//   var oCanvas = document.getElementById('myCanvas');
//   var ctx = oCanvas.getContext('2d');
//   var img=new Image();
//   img.src='../images/plot_img/plot_img_0.jpg';
//   // ctx.drawImage(img,20,20,300,300);
//   var $canvas = $('#myCanvas');

//     function start() {
//       var width = 500;
//       var height = 500;
//       var canvas = $canvas[0];
//       var cropper;

//       canvas.width = width;
//       canvas.height = height;
//       ctx.drawImage(
//         img,
//         0, 0, width, height
//       );

//       $canvas.cropper({
//         background : false,
//         autoCrop : false,
//         aspectRatio: 16 / 9, 
//         crop: function(e) {
//           // Output the result data for cropping image.
//           console.log(e.x);
//           console.log(e.y);
//           console.log(e.width);
//           console.log(e.height);
//           console.log(e.rotate);
//           console.log(e.scaleX);
//           console.log(e.scaleY);
//         }
//     });

//     }
//     if (img.complete) {
//       start.call(img);
//     } else {
//       $(img).one('load', start);
//     }
//     $('#btn1').click(function(){
//       $().cropper("getData");
//       console.log($().cropper("getData"));
//       $().cropper({
//         bulit : function(){
//           $().cropper('getCroppedCanvas', {
//             width: 160,
//             height: 90
//           });
//         }
//       });
//       $().cropper('getCroppedCanvas').toDataURL('image/png');
//     });
    

// });