require(['config'],function(config) {

	require(['jquery', 'common','ellipsis','lazyload'], function ($, common,ellipsis,lazyload) {

		common.topbar();

		common.txtfocus();


		var page ={

			ellipsis:function(){

				 $('.ellipsis01').wordLimit(47);

				$('.ellipsis02').wordLimit(48);
			},
			lazydown:function(){

				$("img.lazydown").lazyload({

						placeholder : "",

						effect: "fadeIn",

						threshold : 0

					});
			},
			menutab:function(){

				  $('.personpage_tab>a').click(function(){

						   $(this).addClass('active').siblings('a').removeClass('active');

						   $('.personpage_panel').hide();

						   $('.personpage_panel').eq($(this).index()).show();
					})
			},
			share:function(){

				  $('.fenxiang').hover(function(){

						  $('.share_box').show();

					},function(){

						  $('.share_box').hide();
					})
			}
		}
		page.ellipsis();
		page.lazydown();
		page.menutab();
		page.share();
	})
})

