require(['config'],function(config) {

	require(['jquery', 'common','webuploader'], function ($, common,webuploader) {

		
		var certify = {

			init:function(){

				common.topbar();

				common.txtfocus();

				common.centeraside();

				common.dropdown('.dropdown_link_city','.dropdown_menu_city');

				common.countdown('.certify_yz_btn','certify_yz_btned');

                this.getIdentify();

                this.webupload('#upface');

                this.webupload('#upback');
			},

           getIdentify:function(){

                   var identify = function(ele){

	                       var code = $(ele).val();
	                       var pass= true;
                          var tip = "";
                       
				            var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
							
							if(!code){

                                tip = "请填写身份证号码";
								pass = false;
							}

							else if( !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
								tip = "身份证号格式错误";
								pass = false;
							}

							else if(!city[code.substr(0,2)]){
								tip = "地址编码错误";
								pass = false;
							}
							else{
								//18位身份证需要验证最后一位校验位
								if(code.length == 18){
									code = code.split('');
									//∑(ai×Wi)(mod 11)
									//加权因子
									var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
									//校验位
									var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
									var sum = 0;
									var ai = 0;
									var wi = 0;
									for (var i = 0; i < 17; i++)
									{
										ai = code[i];
										wi = factor[i];
										sum += ai * wi;
									}
									var last = parity[sum % 11];
									if(parity[sum % 11] != code[17]){
										tip = "校验位错误";
										pass =false;
									}
								}
							}
							if(!pass) {
	                            
	                             $(ele).next('.certify_error').css('display','block').html(tip);

	                             $(ele).focus();
							}
						
						return pass;
		      	    }

			      	 
                 var $identifyvalue = $('#identify');

				$('#certify_submitbtn').click(function(){
					
                   identify($identifyvalue);
                })

			},
			webupload:function(ele){

				var uploader = webuploader.create({

					//swf: BASE_URL + '/js/Uploader.swf',

					//server: 'http://webuploader.duapp.com/server/fileupload.php',

					pick: ele,

					resize: false

				}); 
                 // 当有文件添加进来的时候
				uploader.on( 'fileQueued', function(file) {
					    if(ele == '#upface'){
					     var $pic = $(
					    	   '<div id="upfacearea" class="card_pic"><img src="../images/certify01.jpg" alt="" title=""></div>'
					            );
					    
					    var $img = $pic.find('img');
					     $('#upface').parents('.card_btns').before($pic);
				      }
				    else{
                        var $pic = $(
					    	   '<div id="upback" class="card_pic"><img src="../images/certify01.jpg" alt="" title=""></div>'
					            );
					    var $img = $pic.find('img');
					     $('#upback').parents('.card_btns').before($pic);  
				    }
				     // 创建缩略图
				    // 如果为非图片文件，可以不用调用此方法。
				    // thumbnailWidth x thumbnailHeight 为 100 x 100
				    uploader.makeThumb( file, function( error, src ) {
				        if ( error ) {
				            $img.replaceWith('<span>不能预览</span>');
				            return;
				        }

				        $img.attr( 'src', src );
				    }, 154, 100 );
				});
				// 文件上传失败，显示上传出错。
				uploader.on( 'uploadError', function( file ) {

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

                    if(ele == '#upface'){

                    	$('#upface').css('display','none');

                    	$('#upface').siblings('.selectfile_btn_again').css('display','block');
                    }
                    else{

                      $('#upback').css('display','none');

                      $('#upback').siblings('.selectfile_btn_again').css('display','block');
                    }

               });
			 }
		
		}
		certify.init();
	})
})