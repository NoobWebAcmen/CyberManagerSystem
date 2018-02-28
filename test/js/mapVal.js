/**
 * 此文件用于map.php在CutPic模型中存取数组，获取数组的值
 */


/**
 * 点击确认总层级数按钮时，获取背景宽高，获取总层数
 * @param {*}num 总共有多少层级数
 */
function getLayerVal(num){
    if($('#mapW').val() != '' && $('#mapH').val() != ''){
        cutPic.width = parseFloat($('#mapW').val());
        cutPic.height = parseFloat($('#mapH').val());
        $('#layers').val(cutPic.layerCount);
        addLayerVal(num);
    }else{
        alert('请输入地图宽高');
        return false;
    }
     
}
function addListVal(num){
    $('#layers').val(cutPic.layerCount);
    cutPic.layers[num] = deepClone(layers);
    for(var i = 0;i< (num + 1) ;++i){
        cutPic.layers[i].zOrder = (num + 1) - i;
        cutPic.layers[i].depth = i;
    }
}
/**
 * 添加多少层级，在数组中添加数据
 * @param {*} num 总共的层级数量
 */
function addLayerVal(num){
    for(var i = 0;i < num;++i){
        cutPic.layers[i] = deepClone(layers);
        cutPic.layers[i].zOrder = num - i;
        cutPic.layers[i].depth = i;
    }
}
/**
 * 点击添加组件时，添加数据到数组
 * @param {*} num 层级数
 * @param {*} len 组件数
 */
function addCompVal(num,len){
    cutPic.layers[num].components[len] = deepClone(components);
    for(var j = 0;j <= len; ++j){    
        cutPic.layers[num].components[j].zOrder = len - j;
    }
}

/**
 * 删除层级数据
 */
function deleLayerVal(num){
    delete cutPic.layers[num];
    cutPic.layerCount -= 1;
    $('#layers').val(cutPic.layerCount);
    console.log(cutPic);
}

/**
 * 删除组件数据
 */
function deleteCompVal(num,len){
    delete cutPic.layers[num].components[len];
    console.log(cutPic);
}

/**
 * 点击层级时，给选择层级的下拉菜单框添加change事件，并将change的值存入数组
 * @param {*} num 
 */
function switchLayer(num){
    $('#layerSel_' + num).change(function(){
        var val = $(this).val();
        switch (val) {
            case 'layer1':
                cutPic.layers[num].types = 1;
                break;
            case 'layer2':
                cutPic.layers[num].types = 2;
                break;
            case 'layer3':
                cutPic.layers[num].types = 3;
                break;
            default:
                break;
        }
        console.log(cutPic);
    });
    
}
/**
 * 地图组件下拉菜单的change事件
 * @param {*} num 
 * @param {*} len 
 */
function switchComp(num,len){
    $('#layerSel_' + num + '_1' + '_' + len).change(function(){
        var val = $(this).val();
        switch(val){
            case 'comp1' :
                cutPic.layers[num].components[len].type = 1;
                $('#layerBtn_' + num +'_1' + '_' + len).html('地形');
                $('#layLi_' + num + '_2' + '_' + len).css('display','none');
                break;
            case 'comp2' :
                cutPic.layers[num].components[len].type = 2;
                $('#layerBtn_' + num +'_1' + '_' + len).html('风景');
                $('#layLi_' + num + '_2' + '_' + len).css('display','none');
                break;
            case 'comp3' :
                cutPic.layers[num].components[len].type = 3;
                $('#layerBtn_' + num +'_1' + '_' + len).html('装饰物');
                $('#layLi_' + num + '_2' + '_' + len).css('display','block');
                break;
            case 'comp4' :
                cutPic.layers[num].components[len].type = 4;
                $('#layerBtn_' + num +'_1' + '_' + len).html('雾');
                $('#layLi_' + num + '_2' + '_' + len).css('display','block');
                break;
            default :
                break;
        }
        console.log(cutPic);
    });
}

function setPicVal(array){
    cutPic.layers[array.layer].components[array.comp].name = array.imgName;
    cutPic.layers[array.layer].components[array.comp].width = array.w;
    cutPic.layers[array.layer].components[array.comp].height = array.h;
    cutPic.layers[array.layer].components[array.comp].coordX = array.x;
    cutPic.layers[array.layer].components[array.comp].coordY = array.y + array.h;
    cutPic.layers[array.layer].components[array.comp].src = array.src;
}
