<!DOCTYPE html>
<html class="no-js">
    
    <head>
    <!-- <meta charset="UTF-8"> -->
        <title>CyberManagerV1.0</title>
        
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="../vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="../vendors/xlsx.full.min.js"></script>   
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        
    </head>
    <!-- <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
        function GetRandStr($length){  
            $str='0123456789';  
            $len=strlen($str)-1;  
            $randstr='';  
            for($i=0;$i<$length;$i++){  
            $num=mt_rand(0,$len);  
            $randstr .= $str[$num];  
            }  
            return $randstr;  
            }  
        $number=GetRandStr(3);  //输出几位数的随机数
        $randNum = str_pad($number,6,0,STR_PAD_LEFT);  
    ?>  -->
    <!-- href="<?php echo "bullet.php?id=".$randNum ?>" -->
<body>
    <div id="bullet_index_content">
        <a class="bullet_index_btn" id = "createPowder"  >新建炮弹</a>
        <form action="bullet.php" method="get" id="createForm" class="createForms hidden">
            <label for="" class="createLabs">请输入炮弹id</label>
            <input type="text" id="createInp1" class="createInp1s" name="id"/>
            <input type="submit" id="createInp2" value="提交" class="createInp2s"/>
        </form>
        <a class="bullet_index_btn" id = "reloadPowder" >载入炮弹</a>
        <form action="" method="get" id="loadForm" class="createForms hidden">
            <label for=""  class="createLabs">请输入炮弹id</label>
            <input type="text" id="loadInp1" class="createInp1s" name="id"/>
            <input type="submit" id="loadInp2" value="提交" class="createInp2s">
        </form>
        <div id="bullet_info" class="bullet_infoDiv hidden">
            <ul id="bullet_info_list" class="bullet_infoUl">
            </ul>
        </div>
    </div>
    
</body>
<script src="../vendors/jquery-1.9.1.min.js"></script>
<script src="../canvas_map/cavas_js/getVal.js"></script>
<script src="../canvas_map/cavas_js/addResponse.js"></script>
<script src="../canvas_map/cavas_js/addMod.js"></script>
<script src="../canvas_map/cavas_js/addEvent.js"></script>
<script src="../canvas_map/cavas_js/mainScripts.js"></script>
<!-- <script src="../canvas_map/cavas_js/canvas_bullet.js"></script> -->
<script>
   
   
</script>
</html>
