var clrShift = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
// var content = ['我有十个郑苔施，一个吃软饭','一个在挖矿,我最爱挖矿的这个','一个是码农，头也秃了','一个修手机','一个修牙椅','还有一个修马桶','一个在当火车司机，火车司机好，有十万块','一个在开手机店，一天入账250','一个在开寿司店，早上4点起床','还有一个在切鸡肉，刀片掉进鸡肉里，失业了','最后一个在切芹菜'];
var content = "网络名句一网打尽";
var author = 'Tess';

$("#newquote").on("click",function(){
  var i = Math.floor(Math.random()*clrShift.length);
  $(".shift").animate({backgroundColor:clrShift[i]},300);
  $('.text').animate({color:clrShift[i]},300);
  
  $.getJSON("https://sslapi.hitokoto.cn/?",function(a){
content = a.hitokoto; 
$('.content').html(content); //get the content
author = a.from;
$('#author').html(author); //get the author

    });
});

$('#twit').on("click",function(){
  $('#twit').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&text=' + content  + '----' + author );

});

$('#tumb').on("click",function(){
  $('#tumb').attr('href','https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+ author +'&content=' + content+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
});