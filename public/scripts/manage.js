require(['config'],function(config) {

	require(['jquery', 'common','jqueryui'], function ($, common,jqueryui) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

    common.dropdown('.dropdown_link_deal','.dropdown_menu_deal');

		common.dropdown('.dropdown_link_time','.dropdown_menu_time');

		var manage = {

			  seartxt:function(){

					  $('.seartxt').focus(function(){

							  $(this).parents('.topsear_box').addClass('active')

						}).blur(function(){

							$(this).parents('.topsear_box').removeClass('active')
						})

					$('.searmore_btn').on('click',function(){

						$('.topsear_more_wrap').toggle();

					})
				},
			datepicker:function(){

				 $('#starttime,#endtime').datepicker();

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
			},
			listitemremove:function(){

				 $('.list_tb').on('click','.listitem_top_del',function(){

					     $(this).parents('tbody').remove();
				 })
			},
			startcommend:function(el,num){

          var $ele= $(el);

				  var $item = $ele.find('span');

				  var lighton = function(num){

						   $item.each(function(index){

								    if( index < num){

											$(this).css('background-position','-343px -57px');
										}
									 else{

											$(this).css('background-position','-379px -57px');

											}
							 })
					}

				lighton(num);

				$ele.on('mouseover','span',function(){

					lighton($(this).index()+1);

				}).on('click','span',function(){

					num = $(this).index()+1;

				}).on('mouseout',function(){

					  lighton(num);
				})

			}
		}

		manage.seartxt();

		manage.datepicker();

		manage.listitemremove();

		manage.startcommend('.list_commend_edite_starts',2);

	})
})


