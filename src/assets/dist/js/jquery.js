$(document).ready(function() {
	$('.last-box-slider').slick({
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	$(".earn-page-slider3, .earn-page-slider4, .earn-page-slider5").slick({
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1150,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, 
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	$(" .redeem-page-slider").slick({
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1150,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, 
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

});





function initializeSliderFromClass(className){
	console.log(className);
	$(className).slick({
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1150,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, 
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
}
$(document).ready(function() {
	var Initialized=['1-1','2-1'];
	initializeSliderFromClass(".earn-page-slider1-1");
	initializeSliderFromClass(".earn-page-slider2-1");
	


	$("body").on('click',' .custom-navbar li',function(){
		var itemNumber1= $(this).attr("data-number1"),
		  itemNumber2 = $(this).attr("data-number2");
		if(Initialized.indexOf(itemNumber1+'-'+itemNumber2) === -1){
			Initialized.push(itemNumber1+'-'+itemNumber2);
			setTimeout(function(){
				initializeSliderFromClass(".earn-page-slider"+itemNumber1+"-"+itemNumber2);
			},200);
		}
	});
});



$('#last-box-slider-la').click(function() {
	$(".last-box-slider").slick('slickPrev')
});
$('#last-box-slider-ra').click(function() {
	$(".last-box-slider").slick('slickNext')
});

$('#earn-page-slider1-1-la').click(function() {
	$(".earn-page-slider1-1").slick('slickPrev')
});
$('#earn-page-slider1-1-ra').click(function() {
	$(".earn-page-slider1-1").slick('slickNext')
});
$('#earn-page-slider1-2-la').click(function() {
	$(".earn-page-slider1-2").slick('slickPrev')
});
$('#earn-page-slider1-2-ra').click(function() {
	$(".earn-page-slider1-2").slick('slickNext')
});
$('#earn-page-slider1-3-la').click(function() {
	$(".earn-page-slider1-3").slick('slickPrev')
});
$('#earn-page-slider1-3-ra').click(function() {
	$(".earn-page-slider1-3").slick('slickNext')
});

$('#earn-page-slider2-1-la').click(function() {
	$(".earn-page-slider2-1").slick('slickPrev')
});
$('#earn-page-slider2-1-ra').click(function() {
	$(".earn-page-slider2-1").slick('slickNext')
});
$('#earn-page-slider2-2-la').click(function() {
	$(".earn-page-slider2-2").slick('slickPrev')
});
$('#earn-page-slider2-2-ra').click(function() {
	$(".earn-page-slider2-2").slick('slickNext')
});

$('#earn-page-slider3-la').click(function() {
	$(".earn-page-slider3").slick('slickPrev')
});
$('#earn-page-slider3-ra').click(function() {
	$(".earn-page-slider3").slick('slickNext')
});

$('#earn-page-slider4-la').click(function() {
	$(".earn-page-slider4").slick('slickPrev')
});
$('#earn-page-slider4-ra').click(function() {
	$(".earn-page-slider4").slick('slickNext')
});

$('#earn-page-slider5-la').click(function() {
	$(".earn-page-slider5").slick('slickPrev')
});
$('#earn-page-slider5-ra').click(function() {
	$(".earn-page-slider5").slick('slickNext')
});

$('#redeem-page-slider-la').click(function() {
	$(".redeem-page-slider").slick('slickPrev')
});
$('#redeem-page-slider-ra').click(function() {
	$(".redeem-page-slider").slick('slickNext')
});


$(".custom-select-boxes-child").click(function(e){
	$(this).css({'background':'#ff4d03'});
	$(this).find('p').css('color','white');
	$(this).find('p').find('i').css('color','white').removeClass('fa fa-plus').addClass('fa fa-check');
	
});

// $("li.li-swap1.active").mouseover(function(e) {
// 	$("#img-swap1").attr("src", $("#img-swap1").attr("src").replace("../dist/images/sidebar1.png", "../dist/images/sidebar1active.png"));
// }).mouseout(function(e) {
// 	$("#img-swap1").attr("src", $("#img-swap1").attr("src").replace("../dist/images/sidebar1active.png", "../dist/images/sidebar1.png"));
// });
// $("li.li-swap2.active").mouseover(function(e) {
// 	$("#img-swap2").attr("src", $("#img-swap2").attr("src").replace("../dist/images/sidebar2.png", "../dist/images/sidebar2active.png"));
// }).mouseout(function(e) {
// 	$("#img-swap2").attr("src", $("#img-swap2").attr("src").replace("../dist/images/sidebar2active.png", "../dist/images/sidebar2.png"));
// });
// $("li.li-swap3.active").mouseover(function(e) {
// 	$("#img-swap3").attr("src", $("#img-swap3").attr("src").replace("../dist/images/sidebar3.png", "../dist/images/sidebar3active.png"));
// }).mouseout(function(e) {
// 	$("#img-swap3").attr("src", $("#img-swap3").attr("src").replace("../dist/images/sidebar3active.png", "../dist/images/sidebar3.png"));
// });
// $("li.li-swap4.active").mouseover(function(e) {
// 	$("#img-swap4").attr("src", $("#img-swap4").attr("src").replace("../dist/images/sidebar4.png", "../dist/images/sidebar4active.png"));
// }).mouseout(function(e) {
// 	$("#img-swap4").attr("src", $("#img-swap4").attr("src").replace("../dist/images/sidebar4active.png", "../dist/images/sidebar4.png"));
// });



// $(document).ready(function() {
// 	var Initialized=['1-1','2-1'];
// 	initializeSliderFromClass(".earn-page-slider1-1");
// 	initializeSliderFromClass(".earn-page-slider2-1");
	


// 	$("body").on('click','.custom-navbar li',function(){
// 		var itemNumber= $(this).attr("data-number2");
// 		if(Initialized.indexOf('1-'+itemNumber) === -1){
// 			Initialized.push('1-'+itemNumber);
// 			setTimeout(function(){
// 				initializeSliderFromClass(".earn-page-slider1-"+itemNumber);
// 			},200);
// 		}
// 	});
// });
// $(function () {
//   $('#easypaisa').parsley().on('field:validated', function() {
//     var ok = $('.parsley-error').length === 0;
//     $('.bs-callout-info').toggleClass('hidden', !ok);
//     $('.bs-callout-warning').toggleClass('hidden', ok);
//   })
//   .on('form:submit', function() {
//     return false; // Don't submit form for this demo
//   });
// });


// ----------------------------
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: 'filled',
//             backgroundColor: rgb(255,231,130),
//             borderColor: rgb(255,231,130),
// 			data: [12, 19, 3, 5, 2, 3],
			

	// ----------------------------
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            // borderColor: [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
			// borderWidth: 2
			
// ----------------------------
//             fill: true,
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// ----------------------------