/**
 * Created by yzy on 2017/9/26.
 */
$(function() {
  //导航栏下拉二级菜单
  $("#nav li").hover(function () {
    // $(this).find('div').stop().fadeIn(300);
    $(this).find('div').stop().slideDown();
  }, function () {
    // $(this).find('div').stop().fadeOut(300);
    $(this).find('div').stop().slideUp(300);
  });
});

$(function(){
	$('.shopClass').hover(function(){
		$('.shopClass').children('.lists-nav').show();
	},function(){
		$('.shopClass').children('.lists-nav').hide();
	});
});