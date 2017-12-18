<!DOCTYPE html>
<html>
    
    <head>
        <title>CyberManagerV1.0</title>
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!--[if lte IE 8]><script language="javascript" type="text/javascript" src="vendors/flot/excanvas.min.js"></script><![endif]-->
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
        
    ?> 
    <body>
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="../index/index.php">Cyber 后台管理系统V1.0</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i><?php showUserName();?><i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                <li>
                                    <a tabindex="-1" href="#">个人资料</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a tabindex="-1" href="#">修改密码</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="../login/logout.php">切换账号</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="../login/logout.php">退出登录</a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                        <li class="active">
                            <a href="#">主页</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle">功能 <b class="caret"></b>

                            </a>
                            <ul class="dropdown-menu" id="menu1">
                                <li>
                                    <a href="#">Tools <i class="icon-arrow-right"></i>

                                    </a>
                                    <ul class="dropdown-menu sub-menu">
                                        <li>
                                            <a href="#">Reports</a>
                                        </li>
                                        <li>
                                            <a href="#">Logs</a>
                                        </li>
                                        <li>
                                            <a href="#">Errors</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">SEO Settings</a>
                                </li>
                                <li>
                                    <a href="#">Other Link</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">Other Link</a>
                                </li>
                                <li>
                                    <a href="#">Other Link</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">扩展应用 <i class="caret"></i>

                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a tabindex="-1" href="#">Blog</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="#">News</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="#">Custom Pages</a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="#">Calendar</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a tabindex="-1" href="#">FAQ</a>
                                </li>
                            </ul>
                        </li>
                     
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span3" id="sidebar">
                <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                    <li class="active">
                        <a href="../index/index.php"><i class="icon-chevron-right"></i> 主页</a>
                    </li>
                    <li>
                        <a href="../tools/tools.php"><i class="icon-chevron-right"></i> 策划工具</a>
                    </li>
                    <li>
                        <a href="stats.html"><i class="icon-chevron-right"></i> 测试2</a>
                    </li>
                    <li>
                        <a href="form.html"><i class="icon-chevron-right"></i>测试3</a>
                    </li>
                    <li>
                        <a href="tables.html"><i class="icon-chevron-right"></i> 测试4</a>
                    </li>
                    <li>
                        <a href="buttons.html"><i class="icon-chevron-right"></i> 测试5</a>
                    </li>
                    <li>
                        <a href="editors.html"><i class="icon-chevron-right"></i> 测试6</a>
                    </li>
                    <li>
                        <a href="interface.html"><i class="icon-chevron-right"></i> 测试7</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-success pull-right">731</span> 测试8</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-success pull-right">812</span> 测试9</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">27</span> 测试10</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">1,234</span> 测试11</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">2,221</span> 测试12</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">11</span> 测试13</a>
                    </li>
                    <li>
                        <a href="../canvas_map/map.php"><span class="badge badge-important pull-right">83</span> 地图编辑器</a>
                    </li>
                    <li>
                        <a href="../admin/admin_limit.php"> 权限管理</a>
                    </li>
                </ul>
            </div>
                 

                <!--/span-->
                <div class="span9" id="content">
                <div class="row-fluid">
                   <!-- block -->
                   <div class="block">
                       <div class="navbar navbar-inner block-header">
                           <div class="muted pull-left">搜索结果</div>
                       </div>
                       <div class="block-content collapse in">
                           <div class="span12" style="position:relative">
                               <div >
                                   
                                   <div class="table-toolbar">
                                      <div class="btn-group">
                                         <a href="addEmp.php"><button class="btn btn-success">添加用户 <i class="icon-plus icon-white"></i></button></a>
                                      </div>
                                      <div class="btn-group pull-right">
                                         <button data-toggle="dropdown" class="btn dropdown-toggle">工具<span class="caret"></span></button>
                                         <ul class="dropdown-menu">
                                            <li><a href="#">打印</a></li>
                                            <li><a href="#">保存为 PDF</a></li>
                                            <li><a href="#">保存为 Excel</a></li>
                                         </ul>
                                      </div>
                                   </div>
                                   
                               
                                 <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example">
                                   <thead>
                                      
                                            <?php
                                                 
                                                 //显示所有用户的信息,分页
                                                      //查询数据库
                                                      require_once '../admin/EmpService.class.php';
                                                      require_once '../admin/Paging.class.php';
                                                      $id=$_REQUEST['id'];
                                                      $name=$_REQUEST['name'];
                                                      $grade=$_REQUEST['grade'];
                                                      $email=$_REQUEST['email'];
                                                      $salary=$_REQUEST['salary'];
                                                       //分页
                                                      $paging=new Paging();                                        
                                                      $paging->pageNow=1;
                                                      $paging->pageSize=10;
                                                      $paging->gotourl='searchPage.php?id='.$id.'&name='.$name.'&grade='.$grade.'&email='.$email.'&salary='.$salary.'&';
                                                      
                                                     
                                                      if(!empty($_GET['pageNow']))
                                                      {
                                                          $paging->pageNow=$_GET['pageNow'];

                                                          
                                                      }
                                                     
                                                      $empService=new EmpService();
                                                      
                                                      $empService->searchPaging($paging,$id,$name,$grade,$email,$salary); 
                                                      echo "<tr class='table_style'><th class='table_style' >id</th><th class='table_style'>姓名</th><th class='table_style'>级别</th><th class='table_style'>邮箱地址</th><th class='table_style'>工资</th><th class='table_style'>删除用户</th><th class='table_style'>修改用户</th></tr>";
                                                      
                                                      for ($i=0; $i <count($paging->res_array) ; $i++) {
                                                         
                                                            $row=$paging->res_array[$i];
                                                            echo "<tr class='table_style'><td class='table_style'>{$row['id']}</td><td class='table_style'>{$row['name']}</td><td class='table_style'>{$row['grade']}</td>".
                                                            "<td class='table_style'>{$row['email']}</td><td class='table_style'>{$row['salary']}</td>".
                                                           "<td class='table_style'><a onclick='return confirmDele({$row['id']})' href='empProcess.php?flag=del&id={$row['id']}'>删除用户</a></td><td class='table_style'><a href='updataEmpUi.php?id={$row['id']}'>修改用户</a></td></tr>";
                                                      }
                                                      
          
                                                      //此对象成员显示上下页跳转，分页跳转，并显示当前页与共有页
                                                     echo "<div class='page_style'>".$paging->navigate."</div>";
                                                      ?>
                                        
                                   </thead>
                               </table>
                              
                           </div>
                       </div>
                   </div>
                  
               </div>

                
            
           </div>
                                        
                                
                       
               

        <!--/.fluid-container-->
       
        <script src="../vendors/jquery-1.9.1.js"></script>
       
	<script type="text/javascript" src="../vendors/jquery-validation/dist/jquery.validate.min.js"></script>
	<script src="../assets/form-validation.js"></script>
        
	<script src="../assets/scripts.js"></script>
    <script>

            function confirmDele(val){
               return window.confirm("是否要删除id="+val+"的用户");
            }
        </script>
    </body>

</html>