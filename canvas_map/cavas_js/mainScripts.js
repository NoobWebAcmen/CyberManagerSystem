/**
 * 战车发射周期点击事件，点击显示战车发射周期块,并添加子弹1
 */
$('#ChariotInfoA').click(function(){
	show($('#ChariotOptions'),1);
});


$('#ChariotInfoA').one('click',function(){
	addBullet(1);
	getAddBulletInfo(1,1);
	addDelLiClick(document.getElementById('BulletDel1'));
	
});

/**
 * 战车发射周期输入框改变 
 */
$('.bars_input').keydown(function(e){
		
	if(e.keyCode == "13"){
	$(this).val(this.value);
	if(scale.btn.style.left){
		scale.btn.style.left = 0 + 'px';
		scale.step.style.width = 0 +'px';
		scale.title.innerHTML = 0;
	}	
	}
});

/**
 * 战车发射周期里点击ADD，添加子弹头列表,添加数据
 */
$('#bars_button1').click(function(){
	bulletInfo.bulNum += 1;
	addModList(bulletInfo.bulNum,$('#bulletAddInfoUl'));
	addBullet(bulletInfo.bulNum);
	getAddBulletInfo(bulletInfo.bulNum,1);
	console.log(bulletInfo.bulletsData);
});

/**
 * 导出数据按钮
 */
$('#downloadData').click(function(){
		if(bulletInfo.Tip(3) == true){
			funDownload(bulletInfo.bulletsData,'bulletConfig.lua',1);
		}else{
			funDownload(bulletInfo.bulletsData,'bulletConfig.lua',2);
		}
		uselocalStorage(bulletInfo.bulletsData);
	
});


/**
 * 返回主页按钮
 */
$('#home').click(function(){
	window.location.href='bullet_index.php';
})

/**
 * 回车输入炮弹发射周期时间框，改变表现形式，同时改变数据
 */
$('.bars_input').keydown(function(e){
		
	if(e.keyCode == "13"){
		$(this).val(this.value);
		changeDuration(this.value);
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
	var object = JSON.stringify(data);
	if (window.localStorage) {
		localStorage.setItem("bullets" + id, object);
	} else {
		Cookie.write("bullets" + id, object);	
	}
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

	var key1 = new Array(); 
	var strStoreDate = new Array();
	for(var i = 0;i < localStorage.length; ++i){
		key1 = localStorage.key(i);
		strStoreDate = window.localStorage? localStorage.getItem(key1): Cookie.read(key1);
		var json = eval('(' + strStoreDate + ')');
		
		if(json.id){
			addList(json.id); 
			console.log(json.id);
		}
	}
});

$('#bulletOptionInfoA').click(function(){
	$(this).toggleClass("changePicMode");
	//有一点问题
	// var len = $('#topBar').children('div').length;
	// for(var i = 2;i < len; ++i){
	// 	$('#topBar').children('div').eq(i).toggle("normal");
	// }
    
});