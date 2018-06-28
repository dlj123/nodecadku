require(['config'],function(config) {

	require(['jquery', 'common','webuploader'], function ($, common,webuploader) {

          var centersend= {

			 init:function(){

		        common.topbar();

				common.txtfocus();

				common.centeraside();

				common.dropdown('.dropdown_link_type','.dropdown_menu_type');

				this.topsear();

				this.flaglabel();

				this.articleselect();

				this.centermx();

				this.webupload();
			 },

			  topsear:function(){

					  $('.albumsear_txt').focus(function(){

               $(this).parents('.albumsear').addClass('active');

						}).blur(function(){

							$(this).parents('.albumsear').removeClass('active');

						})
				},
			  flaglabel:function(){

             $('.flag_addtxt').focus(function(){

							   $(this).val('').css('color','#333');

						 }).blur(function(){

							 if($(this).val()==''){

							  $(this).val('添加关键词').css('color','#888');

							 }
							 else{

								  $(this).before('<div class="flag_box"><span>'+$(this).val()+'</span><a href="javascript:;">×</a></div>');

								  $(this).val('').focus();
							 }

						 }).keyup(function(event){

                 if(event.keyCode==13){

									 $(this).before('<div class="flag_box"><span>'+$(this).val()+'</span><a href="javascript:;">×</a></div>');

									 $(this).val('').focus();
								 }

						 })

					  $('.publish_flags').on('click','.flag_box a',function(){

							   $(this).parents('.flag_box').remove();
						})
				},
			articleselect:function(){

				  $('.center_article_tab a').click(function(){

						 $(this).addClass('active').siblings('a').removeClass('active');
					})
			},
			centermx:function(){

				  $('.center_mx li').hover(function(){

						$(this).find('.edite').show();

						$(this).find('.delete').show();

					},function(){

						$(this).find('.edite').hide();

						$(this).find('.delete').hide();

					})
			},
			webupload:function(){

				var uploader = webuploader.create({

                     auto: true,
                      //swf: BASE_URL + '/js/Uploader.swf',
                      //server: 'http://webuploader.duapp.com/server/fileupload.php',
                      pick: '.upload_btn',
                      accept: {
					        title: 'Images',
					        extensions: 'gif,jpg,jpeg,bmp,png',
					        mimeTypes: 'image/*'
					  }

				})
				uploader.on( 'fileQueued', function(file) {
					    
					     var $pic = $(
					    	   '<div class="placepic_area"><img src="../images/certify01.jpg" alt="" title=""></div>'
					            );
					      var $img = $pic.find('img');
					    
					    $('#upload_btn').parents('.uppic_btns').before($pic);
				    		  
				     // 创建缩略图
				    // 如果为非图片文件，可以不用调用此方法。
				    // thumbnailWidth x thumbnailHeight 为 100 x 100
				    uploader.makeThumb( file, function( error, src ) {
				        if ( error ) {
				            $img.replaceWith('<span>不能预览</span>');
				            return;
				        }

				        $img.attr( 'src', src );
				    }, 208, 140 );
				});
				// 文件上传失败，显示上传出错。
				uploader.on( 'uploadError', function( file ) {
                     var $error;
				    // 避免重复创建
				    if ( !$error.length ) {

				         $error = $(' <div id="error" class="dmask"><div class="dcommon_check">'+

		                    '<p class="check_fail">很抱歉，上传失败</p>'+

	                        '</div></div>').appendTo( 'body' );

				        setTimeout(function(){

				        	$error.css('display','none');

				        },1000);
				    }

				   
				});

				uploader.on( 'uploadComplete', function( file ) {

                    $('#upload_btn').siblings('.upload_again_btn').css('display','block');
                 
                });
				
			}
			
		}
		centersend.init();
		
	})
})


