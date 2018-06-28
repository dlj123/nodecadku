require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		var about = {

			asidemenu:function(){

				  $('.aboutaside a').click(function(){

						   $(this).addClass('active').siblings('a').removeClass('active');

						   $('.aboutmain').hide();

						   $('.aboutmain').eq($(this).index()).show();
					})
			}
		}
		about.asidemenu();
	})
})