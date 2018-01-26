$(document).ready(function(){
    $('#subLayers').click(function(){
        if($('#layers').val() != ''){
            var len = $('#layers').val();
            addLayerList(len,$('#totalList'));
        }else{
            alert('请输入一个值');
        }
    });
});
