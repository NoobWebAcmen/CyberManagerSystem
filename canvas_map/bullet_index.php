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
    <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
    ?> 
<body>
    <div id="bullet_index_content">
        <a class="bullet_index_btn" href="bullet.php">新建炮弹</a>
        <a class="bullet_index_btn" href="bullet.php">载入炮弹</a>
    </div>
</body>
</html>