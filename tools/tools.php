<!DOCTYPE html>
<html>
    
    <head>
        <title>CyberManagerV1.0</title>
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../vendors/fullcalendar/fullcalendar.css" rel="stylesheet" media="screen">
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="../vendors/xlsx.full.min.js"></script>   
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
                    <a class="brand" href="../index/index.php">坦克后台工具</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" id="whatever"> <i class="icon-user"></i><?php showUserName();?> <i class="caret"></i></a>
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
                            <li >
                                <a href="../index/index.php">主页</a>
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
                        <a href="../canvas_map/map.php"><i class="icon-chevron-right"></i>地图编辑器</a>
                    </li>
                    <li>
                        <a href="../canvas_map/bullet_index.php"><i class="icon-chevron-right"></i>炮弹编辑器</a> 
                    </li>
                    <li>
                        <a href="../admin/admin_limit.php?rows=10"><i class="icon-chevron-right"></i>用户关系表</a>
                    </li>
                </ul>
                </div>
                
                <!--/span-->
                <div class="span9" id="content">
                    <div class="row-fluid">
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
                    	
                    
                    <div class="row-fluid">
                        <div class="span6">
                            <!-- block -->
                            <div class="block">
                                <div class="navbar navbar-inner block-header">
                                    <div class="muted pull-left">小程序1</div>
                                    <div class="pull-right"><span class="badge badge-info">EXcel转Json</span>

                                    </div>
                                </div>
                                <div class="block-content collapse in " style="relative">
                                    <div class="block-blocker ">
                                    <input type="file"onchange="importExcel(this)" class="out" name="file"/>
                                    </div>
                                    <div class="block-blocker ">
                                        <button id="jsonxz" class="output ">导出</button>
                                    </div>
                                    <form action="" method="post" class="flex" id="list">
                                        <label class="label_style"><input name="outPut" type="radio" value="1" class="radio_style" id="radio2"/>标准格式输出</label>
                                        <label class="label_style"><input name="outPut" type="radio" value="2" class="radio_style" id="radio1" checked="checked"/>无格式输出</label>
                                    </form>
                                    <div class="flex block_pre">
                                    <pre id="demo" class="demo_style"></pre>
                                    </div>
                                </div>
                            </div>
                            <!-- /block -->
                        </div>
                        
                        <div class="span6">
                            
                            <div class="block">
                                <div class="navbar navbar-inner block-header">
                                    <div class="muted pull-left">小程序2</div>
                                    <div class="pull-right"><span class="badge badge-info">Excel转Lua</span>

                                    </div>
                                </div>
                                <div class="block-content collapse in">
                                    
                                        <div class="block-blocker flex">
                                        <input type="file"onchange="importExcel1(this)" class="out" name="file1"/>
                                        </div>
                                        <div class="block-blocker flex">
                                            <button id="jsondownload" class="output">导出</button>
                                        </div>
                                            <form action="" method="post" class="flex" id="list">
                                                <label class="label_style"><input name="outPut1" type="radio" value="3" class="radio_style" id="radio3"/>标准格式输出</label>
                                                <label class="label_style"><input name="outPut1" type="radio" value="4" class="radio_style" id="radio4" checked="checked"/>无格式输出</label>
                                            </form>
                                        <div class="flex block_pre">
                                        <pre id="demo1" class="demo_style"></pre>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    

                   
            <hr> 
            
            <footer>
                <p>&copy; Cyber Manager 2017</p>
            </footer>
       
        </div>
        <!--/.fluid-container-->
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="../assets/scripts.js"></script>        

        <script src="../index/js/xlsx2json/xlsx2json.js"></script>
        <script src="../index/js/xlsx2lua/xlsx2lua.js"></script>
        
        
        <script>
         $(function() {
           // Easy pie charts
             $('.chart').easyPieChart({animate: 1000});
         });
         
        
        </script>
    </body>

</html>