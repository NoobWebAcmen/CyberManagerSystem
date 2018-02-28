/**
 * 此JS文件用于实现Map页面的添加，删除，同时删除，添加数据的功能
 */


/**
 * 设置总层级数后动态生成列表.并为列表添加点击事件
 * @param {*} len 列表的个数 
 * @param {*} obj 在何处添加列表,Jquery对象
 */

function addLayerList(len,obj){
        var elm_ul = document.createElement('div');
        var elm_li = document.createElement('div');
        
        var elm_p = document.createElement('p');
        var elm_a = document.createElement('a');
        var elm_span = document.createElement('span');
        elm_ul.setAttribute('class','layersUl');
        elm_li.setAttribute('class','layersLi clear layerRela1');
        elm_a.setAttribute('class','showPicMode fl changeMode');
        elm_p.setAttribute('class','layersP');
        elm_span.setAttribute('class','fa fa-remove deleSpan1');
        elm_span.setAttribute('id','layerDel_' + len);
        elm_p.setAttribute('id','layersP_' + len);
        elm_ul.setAttribute('id','layersLis_' + len);
        elm_li.setAttribute('id','layersLi_' + len);
        elm_a.setAttribute('id','layersPic' + len);
        elm_p.innerHTML = '第' + '<span class= "layersTopP">' + (len+1) + '</span>' + '层';
        elm_p.appendChild(elm_a);
        elm_p.appendChild(elm_span);
        elm_li.appendChild(elm_p);
        elm_ul.appendChild(elm_li);
        obj.append(elm_ul);
        var  pId  = elm_p.getAttribute('id');
        var ulId = elm_ul.getAttribute('id');
        var aId = elm_a.getAttribute('id');
        addUlClick(ulId,aId,pId,len);
        
}


/**
 * 给动态生成的Ul块添加内容
 * @param {*} obj UlDiv的jquery对象 
 * @param {*} layerNum 层数
 */
function addUlList(obj,layerNum){
    var len = obj.children().length + 1;
    var layer = "<div id='contentLis_" + layerNum + "' " + " class='layerContentP'>"
    + "<label class='layerLab'>请选择层级</label>"
    +"<select class='layerSel' id='layerSel_" + layerNum  + "'>"
    +"<option value='layer1'>1---地形层---</option>"
    +"<option value='layer2'>2---雾层---</option>"
    +"<option value='layer3'>3---风景层---</option>"
    +"</select>"
    + "</div>";
    var comp = "<div id='compDiv_" + layerNum +"'></div>";
    var elm_dv5 = document.createElement('div');
    var elm_btn = document.createElement('button');
    var elm_spn = document.createElement('span');
    elm_dv5.setAttribute('class','layersLi clear layHover');
    elm_dv5.setAttribute('id','layAddLi_' + layerNum );
    elm_btn.setAttribute('class','btn-add');
    elm_spn.setAttribute('class','fa fa-plus');
    elm_btn.appendChild(elm_spn);
    elm_dv5.appendChild(elm_btn);
    obj.append(layer);
    obj.append(comp);
    $('#compDiv_' + layerNum).after(elm_dv5);
    addComp(layerNum,0,$('#compDiv_' + layerNum));
    addCompseClick(layerNum);
    addToggle1(layerNum);
    addLayerDel(layerNum);
}

/**
 * 添加组件块
 * @param {*} num 层级数 
 * @param {*} len 
 * @param {*} obj 
 */
function addComp(num,len,obj){
    var comp = "<div id='compse_" + num +'_' + len + "' class= 'compBorder' data='" + (len + 1) + "'>"
    +"</div>";
    
    var comp0 = "<div id='layer_" + num + '_0' +'_' + len +"' " + "class='layerContentP layerRela'>"
    +"<p class='layerP' id='compP_" + num +'_' + len +"'>组件 " + (len + 1) + "</p>" //该值动态修改
    +"<a class='showPicMode fl compMode changePicMode' id='layersPic_" + num +'_' + len + "'></a>"
    +"<span class='fa fa-remove deleSpan' id='removComp_"+ num +'_' + len + "'></span>"
    +"</div>";


    var comp1 = "<div id='layLi_" + num +'_1' +'_' + len +"'" + " class='layerContentP'>"
    +"<label class='layerLab'> 请选择地图组件 </label>"
    +"<select id='layerSel_" + num + '_1' +'_' + len + "' " + "class='layerSel'>"
    +"<option value='comp1'>1------ 地形 ------</option>"
    +"<option value='comp2'>2------ 风景 ------</option>"
    +"<option value='comp3'>3------ 装饰物 ------</option>"
    +"<option value='comp4'>4------ 雾 ------</option>"
    +"</select>"/
    +"</div>";

    var comp2 = "<div id='layLi_" + num +'_2' +'_' + len +"'" + " class='layerContentP hidContent'>"
    +"<label class='layerLab'> 请设置组件属性 </label>"
    +"<div class='layerSet'>"
    +"<label class='layerSetLab'> 旋转速度 </label>"
    +"<input class='layer-step-inp' id='layerInp_" + num + '_1' +'_' + len + "'/>"
    +"</div>"
    +"<div class='layerSet'>"
    +"<label class='layerSetLab1'> 帧动画 </label>"
    +"<input class='layer-step-inp' id='layerInp_" + num + '_2' +'_' + len + "'/>"
    +"</div>"
    + "</div>";

    var comp3 = "<div id='layLi_" + num + '_3' +'_' + len + "'" + " class='layerContentP layerEnd'>"
    +"<label class='layerAddLab'> 点击添加图片 </label>"
    +"<button class='layerBtn' id='layerBtn_"+ num + '_1' +'_' + len + "'>地形</button>"
    +"</div>";
    obj.append(comp);
    $('#compse_' + num + '_' + len).append(comp0);
    $('#compse_' + num +'_' + len).append(comp1);
    $('#compse_' + num +'_' + len).append(comp2);
    $('#compse_' + num +'_' + len).append(comp3);
    
    //添加收缩功能
    addToggle(num,len);
    //添加删除组件功能
    addDelComp(num,len);
    //添加图片按钮的点击事件
    addPicClick(num,len);
    //选择组件下拉框change事件
    switchComp(num,len);

    
}
