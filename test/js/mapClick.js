/**
 * 此JS文件用于实现Map页面的点击事件 Controller
 */

 /**
  * 为动态生成的Ul添加点击事件
  */
 function addUlClick(uId,aId){
    $('#' + uId).click(function(){
        $('#' + aId).toggleClass('changePicMode');
    });
    $('#' + uId).one('click',function(){
        addUlList($(this));
    });
 }