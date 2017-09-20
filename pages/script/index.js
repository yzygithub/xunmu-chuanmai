$(function(){
	//导航栏下拉二级菜单
	$("#nav li").hover(function(){
    // $(this).find('div').stop().fadeIn(300);
		$(this).find('div').stop().slideDown();
	},function(){
    // $(this).find('div').stop().fadeOut(300);
		$(this).find('div').stop().slideUp(300);
	});

	
	//手动控制轮播图
         var index = 0;
	 $(".btnList li").click(function(){
		 $(this).addClass("active").siblings().removeClass();
		 index = $(this).index();
		 $(".pic li").eq(index).fadeIn().siblings().fadeOut();
	 });
       //自动播放
        var i = 0;
        var t = setInterval(move,1500);
        //封装自动播放函数（方法）
       function move(){
           i++;
           if(i == 5){
               i=0;
           }
           $('#two li').eq(i).addClass('active').siblings().removeClass('active');
           $('#one li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
       }
       //鼠标移入 移出自动播放 鼠标移出 加载自动播放
      $('#lunbo').hover(function(){
            clearInterval(t);//取消自动播放  清除定时器
        },function(){
           t = setInterval(move,1500);
        })
	
});
