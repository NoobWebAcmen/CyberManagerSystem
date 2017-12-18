

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
    
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" >Cyber后台管理系统V1.0</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" id="whatever"> <i class="icon-user"></i><?php showUserName();?><i class="caret"></i></a>
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
                            <a ><i class="icon-chevron-right"></i> 主页</a>
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
                            <a href="../admin/admin_limit.php?rows=10"> 用户关系表</a>
                        </li>
                    </ul>
                </div>
                
                <!--/span-->
                <div class="span9" id="content">
                    <div class="row-fluid">
                        <div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
                            <h4>欢迎您,<?php showUserName();?>
                            </h4>
                            <br/>
                        	您可以进行后台操作了！
                            
                            </div>
                        	<div class="navbar">
                            	<div class="navbar-inner">
	                                <ul class="breadcrumb">
	                                    <i class="icon-chevron-left hide-sidebar"><a href='#' title="Hide Sidebar" rel='tooltip'>&nbsp;</a></i>
	                                    <i class="icon-chevron-right show-sidebar" style="display:none;"><a href='#' title="Show Sidebar" rel='tooltip'>&nbsp;</a></i>
	                                    <li>
	                                        <a href="#">主页</a> <span class="divider">/</span>	
	                                    </li>
	                                    <li>
	                                        <a href="#">设置</a> <span class="divider">/</span>	
	                                    </li>
	                                    <li class="active">工具</li>
	                                </ul>
                            	</div>
                        	</div>
                    	</div>
                    <div class="row-fluid">
                        <!-- block -->
                       <div class="block">
                            <div class="navbar navbar-inner block-header">
                                <div class="muted pull-left">登录分析</div>
                                <div class="pull-right"><span class="badge badge-warning"> + 更多</span>

                                </div>
                            </div>
                            <div class="block-content collapse in">
                                <div class="span3">
                                    <div class="chart" data-percent="73">73次</div>
                                    <div class="chart-bottom-heading"><span class="label label-info">访问次数</span>

                                    </div>
                                </div>
                                <div class="span3">
                                    <div class="chart" data-percent="53">53次</div>
                                    <div class="chart-bottom-heading"><span class="label label-info">登录次数</span>

                                    </div>
                                </div>
                                <div class="span3">
                                    <div class="chart" data-percent="83">83人</div>
                                    <div class="chart-bottom-heading"><span class="label label-info">访问人数</span>

                                    </div>
                                </div>
                                <div class="span3">
                                    <div class="chart" data-percent="13">13次</div>
                                    <div class="chart-bottom-heading"><span class="label label-info">操作次数</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- <div class="canvas">
                            <canvas id="canvas_index" width="400px" height="400px"></canvas>
                    </div> -->
                       
            <hr> 
            
            <!-- <footer>
                <p>&copy; Cyber Manager 2017</p>
            </footer> -->
       
        </div>
        <!--/.fluid-container-->
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="../assets/scripts.js"></script>        
        
        
        
        
        <script>
         $(function() {
           // Easy pie charts
             $('.chart').easyPieChart({animate: 1000});
         });
         
        </script>
        
        
    </body>
</html>