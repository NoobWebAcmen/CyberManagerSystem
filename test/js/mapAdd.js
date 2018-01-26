/**
 * 此JS文件用于实现Map页面的添加，删除，同时删除，添加数据的功能
 */


/**
 * 设置总层级数后动态生成列表.并为列表添加点击事件
 * @param {*} len 列表的个数 
 * @param {*} obj 在何处添加列表,Jquery对象
 */

function addLayerList(len,obj){
    obj.html('');
    for(var i = 0; i < len; ++i){
        var elm_ul = document.createElement('div');
        var elm_li = document.createElement('div');
        var elm_dv5 = document.createElement('div');
        var elm_btn = document.createElement('button');
        var elm_spn = document.createElement('span');
        var elm_p = document.createElement('p');
        var elm_a = document.createElement('a');
        elm_ul.setAttribute('class','layersUl');
        elm_li.setAttribute('class','layersLi clear');
        elm_a.setAttribute('class','showPicMode fl changeMode');
        elm_p.setAttribute('class','layersP');
        elm_dv5.setAttribute('class','layersLi clear layHover hidden');
        elm_dv5.setAttribute('id','layLi_' + i +'_2');
        elm_ul.setAttribute('id','layersLis_' + i);
        elm_li.setAttribute('id','layersLi_' + i + '_1');
        elm_a.setAttribute('id','layersPic' + i);
        elm_p.innerHTML = '第' + '<span class= "layersTopP">' + (i+1) + '</span>' + '层';
        elm_btn.setAttribute('class','btn-add');
        elm_spn.setAttribute('class','fa fa-plus');
        elm_p.appendChild(elm_a);
        elm_li.appendChild(elm_p);
        
        elm_ul.appendChild(elm_li);
        elm_btn.appendChild(elm_spn);
        elm_dv5.appendChild(elm_btn);
        elm_ul.appendChild(elm_dv5);
        obj.append(elm_ul);
        var ulId = elm_ul.getAttribute('id');
        var aId = elm_a.getAttribute('id');
        addUlClick(ulId,aId);
    }
}

/**
 * 给动态生成的Ul块添加内容
 * @param {*} obj UlDiv的jquery对象 
 */
function addUlList(obj){
    var num = obj.prop('id').replace(/[^0-9]/g,'');
    var len = obj.children().length + 1;

    var layer = "<div id='contentLis_'" + num +'_'  + len + ">" 
    + "<label class='layerLab'>请选择层级</label>"
    +"<select class='layerSel' id='layerSel_' " + num + '_1' + ">"
    +"<option value='layer1'>1---地形层---</option>"
    +"<option value='layer2'>2---雾层---</option>"
    +"<option value='layer3'>3---风景层---</option>"
    +"</select>"
    + "</div>"
    obj.append(layer);
    addComp(num,len,obj);
}
function addComp(num,len,obj){
    var comp = "<div id='compse_" + num +'_' +len + "'>"
    +"</div>";
    
    var comp0 = "<div id='layer_" + num + '_0' +"'>"
    +"<p class='layerP'>组件" + 1 + "</p>"                 //该值动态修改
    +"</div>";


    var comp1 = "<div id='layLi_" + num +'_1' +"'>"
    +"<label class='layerLab'> 请选择地图组件 </label>"
    +"<select id='layerSel_" + num + '_2' + "'>"
    +"<option value='comp1'>1------地形------</option>"
    +"<option value='comp2'>2------风景------</option>"
    +"<option value='comp3'>3------装饰物------</option>"
    +"<option value='comp4'>4------雾------</option>"
    +"</select>"
    +"</div>";

    var comp2 = "<div id='layLi_" + num +'_2' +"'>"
    +"<label class='layerLab'> 请设置地图属性 </label>"
    +"<label class='layerSet'> 旋转速度 </label>"
    +"<input class='layerInp' id='layerInp_ " + num + '_1' + "'/>"
    +"<label class='layerLab'> 帧动画 </label>"
    +"<input class='layerInp' id='layerInp_ " + num + '_2' + "'/>"
    + "</div>";

    var comp3 = "<div id='layLi_" + num + '_3' + "'>"
    +"<label class='layerLab'> 点击添加图片 </label>"
    +"<button class='layerBtn' id='layerBtn_"+ num + '_1' + "'>地形</button>"
    +"</div>";
    obj.append(comp);
    $('#compse_' + num + '_' + len).append(comp0);
    $('#compse_' + num + '_' + len).append(comp1);
    $('#compse_' + num + '_' + len).append(comp2);
    $('#compse_' + num + '_' + len).append(comp3);
    
}