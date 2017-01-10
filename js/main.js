
		$(document).ready(function(){

			var imageload=new Array("img/DSQ.png","img/HCX.png");	//此处输入大图地址
			var datatemp=function(){	//保存大图介绍的结构
				this.head;
				this.content;
			}
			var data1=new datatemp();
			var data2=new datatemp();
			data1.head="Background of Leader RNA";
			data1.content="Riboswitches are regulatory RNAs that regulate gene expression by binding small molecule 	metabolites. 	Our 	Aleader riboswitch is such kind of regulatory parts that is induced by aminoglycoside drug.";
			data2.head="this is header2";
			data2.content="this is content2";
			var imageintro=new Array(data1,data2);	//保存介绍的数组
			var imagecount=0;
			
			var init=function(){
				$('.arrow').hide();
				$('.top-menu-sub').hide();
		
			}
			var bind=function(){
				$("#top").hide();
				$(document).scroll(function(){
					if($(document).scrollTop()>308){
						$("#left-bar").css("position","fixed");
						$("#left-bar").css("top","0%");
					}
					else{
						console.log(1);
						$("#left-bar").css("position","absolute");
						$("#left-bar").css("top","");

					};
				})
				$('.top-menu-each').hover(function(){
					$('.top-menu-each.click .arrow').hide();
					$('.top-menu-each.click').removeClass('click');
					$(this).addClass('click');
					$(this).find('.arrow').show();
					$('.top-menu-sub.show').hide();
					$('.top-menu-sub.show').removeClass('show');
					$(this).find('.top-menu-sub').addClass('show');
					$(this).find('.top-menu-sub').show();
		
								
		
					
				})

				
			}
			var changepic=function(){
				imagecount=imagecount+1;
				if(imagecount==imageload.length){
					imagecount=imagecount-imageload.length;
				}
				$('#big-photo-hover').fadeOut(function(){
					$('#big-photo-wrap').prepend('<img src='+imageload[imagecount]+'>');
					$('#big-photo img:eq(0)').css('margin-left','-1214px');
					$('#big-photo img:eq(0)').animate({marginLeft:'0px'},3000);
					$('#big-photo img:eq(1)').animate({marginLeft:'1214px'},3000,function(){
						$('#big-photo img:eq(1)').remove();
						$('#big-photo-hover .header').html(imageintro[imagecount].head);
						$('#big-photo-hover .content').html(imageintro[imagecount].content);
						$('#big-photo-hover').fadeIn();
					});
				})
				
				
			}
			$(window).scroll(function(){
				 min_height=window.screen.availHeight ;
				 var s = $(window).scrollTop();
				 if( s > 0){
				 	if(!$("#top").hasClass("hide"))
						$('#top').fadeIn(100);
				}else{
					$('#top').fadeOut(200);
				};
			});
			//top按钮控制
			
			$('#top').click(function(){
				$('html,body').animate({scrollTop:0},300);
				
			});
			setInterval(changepic,8000);
			init();
			bind();
		})
