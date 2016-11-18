/**
 * Created by liuyanhao on 18/11/16.
 */
var express = require('express');
var router = express.Router();

// 中央数据
// var golddata = [
//     {
//         "name":"唐万锂",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"很跳的,重点处理一下"
//     },{
//         "name":"董秋悦",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"跳的，但是好看"
//     },{
//         "name":"高梦云",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"特殊面"
//     },{
//         "name":"任梦",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },
//     {
//         "name":"沈琪云",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"张雪",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"贺凯",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"封传梼推荐,尽量被挂了"
//     },{
//         "name":"匡俊嘉",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"岳天晨",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"彭峥",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"李泰毅",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"金亮",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"王佳",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"王佳鹏",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"张杰峰",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"董羽",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"袁巧",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"李梦雪和周维玮唯一传人"
//     },{
//         "name":"郑思成",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"(帅） ydt"
//     },{
//         "name":"朱凯军",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"（帅） lmx"
//     },{
//         "name":"吴君涛",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"聂顺超",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"何新乐",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"杨欣宇",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"许剑",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"黄天",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"杨光雨",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"梨圆圆",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },
//     {
//         "name":"林婉婷",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"高乐园",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"杨翼飞",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"卢玉琪",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"（漂亮的 挂了吧，事情太多了"
//     },{
//         "name":"杨一伦",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"孙侧振",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"喻靓茹",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"殷溢聆",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"李根",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"湛放",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"(挂了)"
//     },{
//         "name":"宋宏",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"(挂了)"
//     },{
//         "name":"周营峰",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"王洪渊",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"宋胜红",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"许曦月",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"（漂亮）"
//     },{
//         "name":"张怡林",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"吴凡",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"余鹏",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"黄卿怡",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"曹露",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"(切图还行可以考虑一下)"
//     },{
//         "name":"王悦",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"长得不错"
//     },{
//         "name":"邓博文",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"王林",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"刘畅",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"唐婷婷",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"林梦瑶",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"邓涵颖",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"漂亮"
//     },{
//         "name":"陈颖",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"刘雁豪单面"
//     },{
//         "name":"黄涛",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":"明亮单面"
//     },{
//         "name":"王倩",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"李睿",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     },{
//         "name":"刘俊豪",
//         "status": -1,
//         "evaluatename": "",
//         "score": 0,
//         "info":""
//     }
// ]
//
//




/* 渲染签到首页 */
router.get('/', function(req, res, next) {
    res.render('result', {alldata: golddata});
});

// router.post('/')
/*接受签到数据*/
// router.post('/user', function(req, res, next) {
//     var id = req.body.id;
//     golddata[id].status = 0;
//     res.json({'satus':200});
// });


module.exports = router;

