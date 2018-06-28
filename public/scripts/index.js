require(['config'],function(config){

	 require(['jquery','common'],function($, common){

       common.topbar();
    

		   var index={

				 banner:function(){

             var liwidth = $('.index_banner_lb>li').eq(0).width();

					   var ulwidth = liwidth * parseInt($('.index_banner_lb>li').length);

             $('.index_banner_lb').width(ulwidth);

					   var timer = null;

					   $('.index_banner_indicaters>a').click(function(){

							   var now=0;

							   $(this).addClass('active').siblings('a').removeClass('active');

                  if($(this).index()<now)
									{

										$('.index_banner_lb').stop().animate({

											'left':parseInt($(this).index()*liwidth)+'px'

										},500)
										now = $(this).index();
									}
							   else{

										$('.index_banner_lb').stop().animate({

											'left':-parseInt($(this).index()*liwidth)+'px'

										},500)
										now = $(this).index();
									}
						 })
					 var i = 1;
					  var interval = function(){

							$('.index_banner_indicaters>a').eq(i).click();

							i ++;

							if(i>=$('.index_banner_lb>li').length){

								i=0;
							}
						}

					 var timer = setInterval(function(){interval()},2000);
				 },
				 newsscroll:function() {

					 var taskList = $('.index_latestlb');

					 var task = $('.index_latestlb ul');

					 var taskListHeight = taskList.height();

					 var html = task.html();

					 task.append(html);

					 var timer = null;

					 function scroll() {

						 var scrollTop = parseInt(task.css('top'));

						 scrollTop -= 1;

						 task.css('top', scrollTop);

						 if (Math.abs(scrollTop) >= taskListHeight) {

							 task.css('top', 0);
						 }

					 }

					 timer = setInterval(scroll, 50);

					 taskList.hover(function () {

						 clearInterval(timer);

					 }, function () {

						 timer = setInterval(scroll, 50);
					 })
				 }
			 }
		   index.banner();
       index.newsscroll();
	 })
})
