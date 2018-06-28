require(['config'],function(config) {

	require(['jquery', 'common','jqueryui'], function ($, common,jqueryui) {

     var moneybook = {

			init:function(){

	        common.topbar();

			common.txtfocus();

			common.centeraside();

			common.layershowhide();

			common.tab('.paytab a','.paymode');

			common.tab('.scoredetail_menu li','.acountdetail_con')

			common.dropdown('.dropdown_link_time','.dropdown_menu_time');

			common.countdown('.cash_form_btn','cash_form_btned');

			this.moneyselect();

		    this.datepicker();

			},

       moneyselect:function(){

				   $('.paymode_lb>li').click(function(){

						    $(this).addClass('active').siblings('li').removeClass('active');

					 })

					 $('.J_charge').on('click',function(){

						 $('#acountchange_layer').show();
					 })

				   $('.J_cash').on('click',function(){

						   $('#getcash_layer').show();
					 })
			 },
			datepicker:function(){

				$('.score_txt').datepicker();

				jQuery(function($){
					$.datepicker.regional['zh-CN'] = {
						closeText: '关闭',
						prevText: '<上月',
						nextText: '下月>',
						currentText: '今天',
						monthNames: ['一月','二月','三月','四月','五月','六月',
							'七月','八月','九月','十月','十一月','十二月'],
						monthNamesShort: ['一','二','三','四','五','六',
							'七','八','九','十','十一','十二'],
						dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
						dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
						dayNamesMin: ['日','一','二','三','四','五','六'],
						weekHeader: '周',
						dateFormat: 'yy-mm-dd',
						firstDay: 1,
						isRTL: false,
						showMonthAfterYear: true,
						yearSuffix: '年'};
					$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
				});
			}
		}
		
		moneybook.init();
	})
})
