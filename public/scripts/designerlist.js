require(['config'],function(config) {

	require(['jquery', 'common','lazyload'], function ($, common,lazyload) {

		

    common.dropdown('.dropdown_link','.dropdown_menu');

		var designerlist = {

			init:function(){

				common.topbar();

		        common.txtfocus();

		        this.requestfix();

		        this.designerlistmenu();

		        this.layershowhide();

		        this.lazyload();
			},

			  requestfix:function(){

					  $(window).scroll(function(){

							   if($(this).scrollTop()>230){

									   $('.designer_fixed').css({'position':'fixed','top':'85px'});
								 }
							else{
									 $('.designer_fixed').css({'position':'static','top':'auto'});
								 }
						})
				},
				designerlistmenu:function(){

					$('.topmenu_list_con').on('click','a',function(){

                        $(this).addClass('active').siblings('a').removeClass('active');

					})
					$('.mx_filter').on('click','a',function(){

						$(this).addClass('active').siblings('a').removeClass('active');
						
					})
				},
			layershowhide:function(){

				$('.close_icon').click(function(){

					$(this).parents('.common_mask').hide();

				})
				$('.othercity_link').click(function(){

					$('#cityselect').show();
				})
			},
			lazyload:function(){

				$("img.lazydown").lazyload({

					placeholder : "",

					effect: "fadeIn",

					threshold : 0

				});
			}
		}
		designerlist.init();
	})
})

