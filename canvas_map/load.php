<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
 <script src="../vendors/jquery-1.9.1.min.js"></script>
 
<body>
    <div class="contentRight"></div>
</body>

<script>
    // //整个页面

    $(document).ready(function(){
        var idVal = <?php echo $_GET['id']?>;
        getJsonVal(idVal);
        getHtmlPage(idVal);
        
        
    });
    function getJsonVal(id){
        $.ajax({
            type : 'GET',
            url  : '../common/loadFile.php', 
            data : {'id' : id,'flag' : 1},
            success : function (data) {
                //json数据
                
                strStoreData = data.replace(/\"([-+]?[0-9]*\.?[0-9]+)\"/g,"$1").replace(/\"false\"/g,'false').replace(/\"true\"/g,'true');
               
                strStoreData = JSON.parse(strStoreData);
                console.log(strStoreData);
            },
            error : function (data){
                console.log('error',data.responseText);
            }
        });
    }
    function getHtmlPage(id){
        $.ajax({
            type : 'GET',
            url  : '../common/loadFile.php', 
            data : {'id' : id,'flag' : 2},
            dataType : 'html',
            success : function (data) {
                //html数据
                var strStoreHtml = data;
                ajaxload(strStoreHtml,'bullet.php?id=' + id);
                
            },
            error : function (data){
                console.log('error1',data.responseText);
            }
        });
    }

function ajaxload(strStoreHtml,local){
    htmlobj=$.ajax({url:local,async:false});
    $(".contentRight").html(strStoreHtml);
    var oScript1 = document.createElement('script');
    var oScript2 = document.createElement('script');
    var oScript3 = document.createElement('script');
    var oScript4 = document.createElement('script');
    var oScript5 = document.createElement('script');
    var oScript6 = document.createElement('script');
    var oScript7 = document.createElement('script');

    oScript2.src = '../canvas_map/cavas_js/bullet_proto.js';
    oScript1.src = '../canvas_map/cavas_js/load.js';
    oScript3.src = '../canvas_map/cavas_js/getVal.js';
    oScript4.src = '../canvas_map/cavas_js/addResponse.js';
    oScript5.src = '../canvas_map/cavas_js/addMod.js';
    oScript6.src = '../canvas_map/cavas_js/addEvent.js';
    oScript7.src = '../common/baseTools.js';
    document.body.appendChild(oScript2);
    document.body.appendChild(oScript3);
    document.body.appendChild(oScript4);
    document.body.appendChild(oScript5);
    document.body.appendChild(oScript6);
    
    document.body.appendChild(oScript1);
    document.body.appendChild(oScript7);
    
}
    
</script>
</html>
