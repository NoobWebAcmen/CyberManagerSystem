/**
 * 战车发射周期点击事件，点击显示战车发射周期块,并添加子弹1
 */



$('#ChariotInfoA').click(function(){
	show($('#ChariotOptions'),1);
});


$('#ChariotInfoA').one('click',function(){
	addBullet(1,bulletInfo);
	getAddBulletInfo(1,1,bulletInfo);
	addDelLiClick(document.getElementById('BulletDel1'));
	
});



/**
 * 战车发射周期里点击ADD，添加子弹头列表,添加数据
 */
$('#bars_button1').click(function(){
	bulletInfo.bulNum += 1;
	// bulletInfo.bulletIndex.push(bulletInfo.bulNum);
	addModList(bulletInfo.bulNum,$('#bulletAddInfoUl'),1,bulletInfo);
	addBullet(bulletInfo.bulNum,bulletInfo);
	getAddBulletInfo(bulletInfo.bulNum,1,bulletInfo);
});

/**
 * 导出数据按钮
 */
$('#downloadData').click(function(){
	if(bulletInfo.saveFlag){
		// if(bulletInfo.Tip(3) == true){
		// 	funDownload(bulletInfo.bulletsData,'bulletConfig.lua',1);
		// }else{
		// 	funDownload(bulletInfo.bulletsData,'bulletConfig.lua',2);
		// }
		uselocalStorage(bulletInfo.bulletsData);
	}else{
		alert('请先点击保存数据');
	}
		
		
	
});


/**
 * 返回主页按钮
 */
$('#home').click(function(){
	window.location.href='bullet_index.php';
	bulletInfo.saveFlag = false;
});

/**
 * 回车输入炮弹发射周期时间框，改变表现形式，同时改变数据
 */
$('.bars_input').keydown(function(e){
		
	if(e.keyCode == "13"){
		$(this).val(this.value);
		changeDuration(this.value,bulletInfo);
		if(scale.btn.style.left){
			scale.btn.style.left = 0 + 'px';
			scale.step.style.width = 0 +'px';
			scale.title.innerHTML = 0;
		}
	}
});

/**
 * 使用localStorage存储bullet的数据
 * @param {*} data 保存的Object对象
 * @param {*} id   弹头的id值
 */
function uselocalStorage(data){
	var id = data.id;
	var test=document.getElementsByTagName('html')[0].outerHTML;
	test=test.replace(new RegExp('<script[^]*>[\\s\\S]*?</'+'script>','gi'),'');
	var object = JSON.stringify(data);
	if (window.localStorage) {
		localStorage.setItem("bullets" + id, object);
		localStorage.setItem("bullets" + id +'html', test);
	} else {
		Cookie.write("bullets" + id, object);
		Cookie.write("bullets" +'html', test);	
	}
	postHtml(test,id);
}

function postHtml(html,id){
	$.ajax({
		type : 'POST',
		url  : '../common/uploadFile.php',
		data : {
			"bulletsHtml" : html,
			"id" : id
		},
		dataType : "html",
		success : function(data){
			console.log('2',data);
		},
		error : function(data){
			console.log('error',data.responseText);
		}
	});
}


/**
 * 点击新建炮弹的事件
 */
$('#createPowder').one('click',function(){
	//要清除就打开此语句
	// localStorage.clear();  
	$('#bullet_info').removeClass('hidden');
	$('#bullet_info').addClass('show');
	$('#createForm').removeClass('hidden');
	$('#createForm').addClass('show');

	getList();
	
});

$('#reloadPowder').click(function(){
	$('#loadForm').removeClass('hidden');
	$('#loadForm').addClass('show');
	if($('#bullet_info').prop('class') == "bullet_infoDiv hidden"){
		$('#bullet_info').prop('class',"bullet_infoDiv show");
		getList();
	}
	$('#bullet_info_list').delegate('li','click',function(){
		$('#loadInp1').val($(this).prop('id'));
		
	});
	
});

function getList(){
	$.ajax({
		type : 'GET',
		url  : '../common/loadFile.php',
		data : {},
		dataType : 'text',
		success : function(data){
			
			var arr = eval('(' + data + ')');
			var len = arr.length;
			for(var i = 0;i < len ; ++i){
				var idName = arr[i].replace(/[^0-9]/g,'');
				 addList(idName);
			}
		},
		error : function(data){
			console.log('error',data.responseText);
		}
	})
}

$('#bulletOptionInfoA').click(function(){
	$(this).toggleClass("changePicMode");
	
	// var len = $('#topBar').children('div').length;
	// for(var i = 2;i < len; ++i){
	// 	$('#topBar').children('div').eq(i).toggle("normal");
	// }
    
});

$('#saveData').click(function(){
	for(var i = 1;i <= bulletInfo.bulNum; ++i ){
		getBulletsVal(i,bulletInfo);
		for(var j = 1;j <= bulletInfo.traNum ; ++j ){
			switchFlySel($('#trailSelect'+'_'+i+'_'+j),i-1,j-1,bulletInfo);
			getFlyValue(i-1,j-1,bulletInfo);
			for(var k = 1;k <= bulletInfo.triggerNum; ++k ){
				for(var l = 1;l <= bulletInfo.resultNum; ++l){
					getTriggerResult(l,i,j,k,bulletInfo);
				}
			}	
		}
	}
	bulletInfo.saveFlag = true;
	console.log(bulletInfo);
	$.ajax({
		type : 'POST',
		url  : '../common/uploadFile.php',
		data : {
			"bullets" : bulletInfo.bulletsData,
			"id" :  bulletInfo.bulletsData.id
		},
		dataType : "json",
		success : function(data){
			console.log(data);
		},
		error : function(data){
			console.log('error',data.responseText);
		}
	});
	
});
$('#createInp2').click(function(){
	var arr = new Array();
	var len = $('#bullet_info_list').children().length;
	for(var i = 0; i < len ;++i){
		arr[i] = $('#bullet_info_list').children('li').eq(i).prop('id');
		if($('#createInp1').val() == arr[i]){
			$('#createInp1').val('');
			alert('已经有这个炮弹了,请重新输入或载入该炮弹!');
			return false;
		}
	}
	if($('#createInp1').val()==''){
		alert('请输入一个值');
		return false;
	}
});
$('#loadInp2').click(function(){
	var arr1 = new Array();
	var len = $('#bullet_info_list').children().length;
	var flag = false;
	for(var i = 0; i < len ;++i){
		arr1[i] = $('#bullet_info_list').children('li').eq(i).prop('id');
		console.log(arr1[i]);
		if($('#loadInp1').val() == arr1[i]){
			flag = true;
			break;
		}
		
	}
	if(flag == false){
		alert('没有这个炮弹，请重新输入或者创建该炮弹！');
		$('#loadInp1').val('');
		return false; 
	}
	
});

