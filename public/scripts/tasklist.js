require(['config'],function(config) {

	require(['jquery', 'common','jqueryui','webuploader'], function ($, common,jqueryui,webuploader) {

		var task = {

			init:function(){

		        common.topbar();

				common.txtfocus();

				common.layershowhide();

				common.countdown('.task_getyzm_btn','task_getyzm_btned');

				this.requestfix();

				this.dasktime();

				this.paytab();

				this.sendtaskope();

				this.webuploadfile();
        },

				requestfix:function(){

					$(window).scroll(function(){

						if($(this).scrollTop()>230){

							$('.tasklist_fixed').css({'position':'fixed','top':'85px'});
						}
						else{
							$('.tasklist_fixed').css({'position':'static','top':'auto'});
						}
					})
				},
			dasktime:function(){

				$('.task-time').datepicker();
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
			paytab:function(){

				$('.paymode_lb li').click(function(){

					$(this).addClass('active').siblings('li').removeClass('active');
				})

				$('.paytab a').click(function(){

					$(this).addClass('active').siblings('a').removeClass('active');

					$('.paymode').hide();

					$('.paymode').eq($(this).index()).show();
				})
			},
			sendtaskope:function(){

				$('.attachment_lb').on('click','a',function(){

                    $(this).parents('li').remove();

				})
				$('.type_area').on('click','a',function(){
					
					$(this).addClass('active').siblings('a').removeClass('active');
				})
			},
			webuploadfile:function(){

				  var uploader = webuploader.create({
                	// swf文件路径
				    //swf: BASE_URL + '/js/Uploader.swf',

				    // 文件接收服务端。
				    //server: 'http://webuploader.duapp.com/server/fileupload.php',

				    // 选择文件的按钮。可选。
				    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
				    pick: '#attachment_upbtn',

				    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
				    resize: false
                  });
                  uploader.on( 'fileQueued', function( file ) {

                      var $filelist = $('#attachment_lb'),

                        $li = $('<li id="' + file.id + '"><span>'+file.name+'</span>'+

					    	'<a href="javascript:;">删除</a></li>');

	                   $filelist.append($li);

                   
               });
			}
		}
		task.init();
		
	})
})
