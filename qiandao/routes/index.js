var express = require('express');
var router = express.Router();

var fs= require('fs'); 
var schedule = require("node-schedule");

// 中央数据
global.golddata = [
	{
		"name":"唐万锂",
		"status": -1,
		"evaluatename": "",
		"scoretext":"",
		"score": 0,
		"info":""
	},{
		"name":"董秋悦",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"高梦云",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"任梦",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},
	{
		"name":"沈琪云",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"张雪",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"贺凯",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"匡俊嘉",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"岳天晨",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"scoretext":"",
		"info":""
	},{
		"name":"彭峥",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"李泰毅",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"金亮",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王佳",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王佳鹏",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"张杰峰",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"董羽",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"袁巧",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"scoretext":"",
		"info":""
	},{
		"name":"郑思成",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"scoretext":"",
		"info":"("
	},{
		"name":"朱凯军",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"scoretext":"",
		"info":""
	},{
		"name":"吴君涛",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"聂顺超",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"何新乐",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"杨欣宇",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"许剑",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"黄天",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"杨光雨",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"梨圆圆",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},
	{
		"name":"林婉婷",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"高乐园",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"杨翼飞",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"卢玉琪",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"杨一伦",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"孙侧振",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"喻靓茹",
		"status": -1,
		"evaluatename": "",
		"scoretext":"",
		"score": 0,
		"info":""
	},{
		"name":"殷溢聆",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"李根",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"scoretext":"",
		"info":""
	},{
		"name":"湛放",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":"(挂了)"
	},{
		"name":"宋宏",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":"(挂了)"
	},{
		"name":"周营峰",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王洪渊",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"宋胜红",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"许曦月",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":"（漂亮）"
	},{
		"name":"张怡林",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"吴凡",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"余鹏",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"黄卿怡",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"曹露",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王悦",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":"长得不错"
	},{
		"name":"邓博文",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王林",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"刘畅",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"唐婷婷",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"林梦瑶",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"邓涵颖",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"陈颖",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"黄涛",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"王倩",
		"scoretext":"",
		"status": -1,
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"李睿",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"刘俊豪",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"卢帅",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	},{
		"name":"杨翼飞",
		"status": -1,
		"scoretext":"",
		"evaluatename": "",
		"score": 0,
		"info":""
	}
];


/*登陆评分页面*/
router.get('/admin', function(req, res, next) {
  res.render('admin');
});

//验证登录验证
router.post('/admin', function(req, res, next) {
	var name = req.body.name;
	var passowrd = req.body.passowrd;
	if(passowrd=='smfe@123@smfe'){
		req.session.username = name;
		res.json({"data":200});
	}else {
		res.json({"data":100})
	}
});

/* 渲染签到首页 */
router.get('/', function(req, res, next) {
  res.render('index', {alldata: golddata});
});

/*接受签到数据*/
router.post('/user', function(req, res, next) {
  var id = req.body.id;
  golddata[id].status = 0;
  res.json({'satus':200});
});

/*渲染评分页面数据*/
router.get('/adminpage', function(req, res, next) {
  if(!req.session.username) {
  	 res.render('admin');
  }else {
  	 res.render('result', {alldata: golddata});
  }
});

/*获取所有信息数据*/
router.get('/adminpagedata', function(req, res, next) {
  if(!req.session.username) {
  	 res.render('admin');
  }else {
  	 res.json({alldata: golddata});
  }
});

/*更改评分数据*/

router.post('/admin/send', function(req, res, next) {
	  if(!req.session.username) {
	  	 res.json({'satus':100});
	  }else {
	  	  var id = req.body.id;
		  var score = req.body.score;
		  var text = req.body.text;
		  golddata[id].score = score;
		  golddata[id].scoretext = text;
		  golddata[id].evaluatename = req.session.username;
		  writefile();
		  res.json({'satus':200});
	  }
});


var filelock = true;

//定时执行任务防止服务器宕机
function writefile() {
	if(filelock) {
		var jsonstr = JSON.stringify(golddata);
		var time = +new Date()
		var henline = "";
		for(var i =0;i<100;i++) {
			henline = henline + "-";
		}
		var endstr = jsonstr+henline+time+henline;
		filelock = false;
		fs.writeFile("../user.txt", endstr,function(data){
			filelock = true;
		})
	}
}

module.exports = router;
