require(['config'],function(config) {

	require(['jquery', 'common','webuploader'], function ($, common,webuploader) {

   var mxupload = {

			init:function(){

	        common.topbar();

			common.txtfocus();

			common.dropdown('.dropdown_link','.dropdown_menu');

			common.dropdown('.dropdown_link_allow','.dropdown_menu_allow');

			common.dropdown('.dropdown_link_score','.dropdown_menu_score');

			common.dropdown('.dropdown_link_version','.dropdown_menu_version');

			common.tab('.download_tab_item','.download_con');

			this.upitemhover();

		    this.addTagList();

		    this.webuploadfile();

			this.webuploadimg();

			this.upitemope();

			},

			  upitemhover:function(){

					$('.mxup_wrap').on('mouseover','.upfile_item,.uppic_item',function(){

						$(this).addClass('active');

						$(this).find('.updel_icon').css('display','block');

					}).on('mouseout','.upfile_item,.uppic_item',function(){

						$(this).removeClass('active');

						$(this).find('.updel_icon').css('display','none');

					})

					$('.mxup_wrap').on('mouseover','.uppic_item',function(){

						if($(this).has('.setmoren'))
						{
							$(this).find('.setmoren').css('display','block');
						}
					}).on('mouseout','.uppic_item',function(){

						$(this).find('.setmoren').css('display','none');
					})
		    },
			addTagList: function () {
				//addlabel
				$('.tags-addtxt').focus(function () {

					if ($(this).val() == '添加关键词') {

						$(this).val('');

						$(this).css('color', '#000');
					}

				}).blur(function () {

					if ($(this).val() == '') {

						$(this).css('color', '#666');

						$(this).val('添加关键词');

					}
					else {

						$(this).before("<div class='tag'><span>" + $(this).val() + "</span><a href='javascript:;'>×</a></div>");
						//console.log("<span class='tag'>+$(this).val()+<span>");
						$(this).focus().val('');
					}
				});

				$('.tags-addtxt').keyup(function () {

					if (event.keyCode == 13) {

						$(this).before("<div class='tag'><span>" + $(this).val() + "</span><a href='javascript:void(0);'>×</a></div>");

						$(this).focus().val('');
					}
				});
				$('.tags-box').on('click','.tag a',function(){

					$(this).parents('.tag').remove();

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
				    pick: '#upfilebtn',

				    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
				    resize: false
                });
                uploader.on( 'uploadProgress', function( file, percentage ) {

					var $li = $('#'+file.id),

						$percent = $('#'+file.id+'.progress div');

					//避免重复创建
					if ( !$percent.length ) {

						$li.find('h5').after('<div class="progress"><div style="width:0%"></div></div>');

						$percent = $li.find('.progress>div');
					};
					$percent.css( 'width', percentage * 100 + '%' );

                });
                uploader.on( 'fileQueued', function( file ) {

                	if(file.ext.toLowerCase() != 'stl' && file.ext.toLowerCase() != 'obj' && file.ext.toLowerCase() != 'step' && file.ext.toLowerCase() != 'stp' && file.ext.toLowerCase() != 'zip' && file.ext.toLowerCase() != 'rar' && file.ext.toLowerCase() != 'sldasm' && file.ext.toLowerCase() != 'sldprt'){
                            
                            alert('上传文件格式有误');

                            uploader.removeFile(file,true);

                        }else{

                      var $filelist = $('#fileuplist'),

                        $li = $('<dl id="' + file.id + '" class="upfile_item"> '+

					    	'<dt><img  src="../images/paymx_moren.jpg" alt="" title=""></dt>'+

	                        '<dd><h5>'+file.name+'</h5><div class="progress"><div style="width:0%"></div></div></dd>'+

					       '</dl>');

	                   $filelist.append($li);

                    }
               });
                
               uploader.on('uploadSuccess',function(file, response){

               	  var dom = $('#filelist'),html ="";

               	  html = '<dl class="upfile_item" data-fid="' + response.value.file[0] + '"><dt><img src="images/paymx_moren.jpg" alt="" title=""></dt><dd>'+

	             '<h5>' + file.name + '</h5><p class="size">'+file.size+'</p><a href="javascript:;" class="updel_icon"></a></dd></dl>';

	              dom.append(html);

	              $('#filelist').fadeIn();

	              $('#' + file.id).fadeOut();       
	                   


               });
				// 文件上传失败，显示上传出错。
			
                
				uploader.on( 'uploadComplete', function( file ) {

                   $( '#'+file.id ).find('.progress').fadeOut();
                   $('#' + file.id).fadeOut();  

                   console.log(dd);

               });   
            },
			webuploadimg:function(){

				var uploader = webuploader.create({

					auto: true, // 选完文件后，是否自动上传

					//swf: 'js/widget/Uploader.swf', // swf文件路径

					//server: 'http://192.168.0.21/web_buge/index.php/Home/Index/uploadFiles', // 文件接收服务端

					pick: '#upimgbtn', // 选择文件的按钮。可选

					// 只允许选择图片文件。

					accept: {

						title: 'Images',

						extensions: 'gif,jpg,jpeg,bmp,png',

						mimeTypes: 'images/*'

					}
				});
				// 文件上传过程中创建进度条实时显示。
				uploader.on( 'fileQueued', function( file ) {

					var $list = $("#imgList"), //获取文件列表

						$li = $(

							'<dl class="uppic_item" id="'+file.id + '"><dt>'+

							'<img src="images/index_album.jpg" alt="" title=""></dt><dd>'+

						    '<h5>'+file.name+'</h5><div class="progress"><div style="width:0%"></div></div><div class="moren_wrap"><span class="setmoren">设为默认</span></div></dd><a href="javascript:;" class="updel_icon"></a></dl>'

						),
						$img = $li.find('img');

					$list.append( $li ); // $list为容器jQuery实例

					// 创建缩略图
					uploader.makeThumb( file, function( error, src ) {

						if ( error ) {

							$img.replaceWith('<span>不能预览</span>');

							return;
						}
						$img.attr( 'src', src );//设置预览图

					}, 68, 50 ); //100x100为缩略图尺寸
				});

				// 文件上传过程中创建进度条实时显示。
				
				uploader.on( 'uploadProgress', function( file, percentage ) {

					var $li = $( '#'+file.id ),

						$percent = $li.find('.progress div');

					//避免重复创建
					if ( !$percent.length ) {

						$li.find('h5').after('<div class="progress"><div style="width:0%"></div></div>');

						$percent = $li.find('.progress>div');
					}

					$percent.css( 'width', percentage * 100 + '%' );

					
				});


				uploader.on( 'uploadComplete', function( file ) {

                  $( '#'+file.id ).find('.progress').remove();

                  $('#imgList').on('mouseover','.uppic_item',function(){

                	$(this).find('.moren_wrap .setmoren').show();

	              }).on('mouseout','.uppic_item',function(){

	                	$(this).find('.moren_wrap .setmoren').hide();
	              })

               });
			
            },
			upitemope:function(){

				$('#filelist,#imgList').on('click','.updel_icon',function(){

                     $(this).parents('.uppic_item').remove();

                })
                $('#imgList').on('mouseover','.uppic_item',function(){

                	$(this).find('.moren_wrap .setmoren').show();

	              }).on('mouseout','.uppic_item',function(){

	                $(this).find('.moren_wrap .setmoren').hide();
	               
	            })
	            $('#imgList').on('click','.moren_wrap .setmoren',function(){

	            	$('#imgList .moren_wrap .moren').removeClass('moren').addClass('setmoren').html("设为默认").hide();

                	$(this).removeClass('setmoren').addClass('moren').html('默认').show();
	              })
               
			}
		}
		mxupload.init();
		
	})
})

