<?php
  require_once '../cookies/common.php';
  getCookieVal($key);
  logOut();
?>

<!DOCTYPE html>
<html>
  <head>
    <title>CyberManagerV1.0</title>
    <!-- Bootstrap -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
    <link href="../assets/styles.css" rel="stylesheet" media="screen">
    <link href="../images/cyber.ico" rel="shortcut icon" />
     <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script src="../vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>
 
  <body id="login">
    <div class="container">

      <form class="form-signin clear" action="loginprocess.php" method="post">
        <h2 class="form-signin-heading">登录</h2>
        <p>用户名:</p><input type="text" class="input-block-level" placeholder="用户名" name="id" />
        <p>密码:</p><input type="password" class="input-block-level" placeholder="Password"name="password" />
        <p>验证码:</p><input type="text" name="checkcode"/>
        <img src="checkCode.php" onclick="this.src='checkCode.php?aa='+Math.random()"/>
        <label class="checkbox fr">
          <input type="checkbox" value="remember-me" name="keep"/> 记住登录
        </label>
        <div class="flex">
        <button class="btn btn-large btn-primary" type="submit" name="button">登录</button>
      </div>
      </form>

    </div> <!-- /container -->
    <script src="../vendors/jquery-1.9.1.min.js"></script>
    <script src="../bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>

<?php
//接收errno
    if(!empty($_GET['errno'])){
      $errno=$_GET['errno'];
      if($errno==1)
      echo "<script>alert('你的密码或用户名输入错误')</script>";
      
        if($errno==2)
        echo "<script>alert('请重新登录')</script>";
        if($errno==3)
        echo "<script>alert('验证码输入错误')</script>";

    }

?>