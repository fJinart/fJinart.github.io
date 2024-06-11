
// index page
try {
    window.addEventListener('load', function () {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
} catch (e) { }

$(function () {
    $('.tab>li>a').click(function () {
        $(this).parent().addClass("active")
            .siblings()
            .removeClass("active");
        return false;
    });
});

jQuery(document).ready(function () {

    $(".menu_m").click(function () {
        $(".popup_menu").slideToggle(500);
    });
});

//painting page
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function () {
    $(".col>a").click(function () {
        $("#myModal").modal();
    });
});

//Series Tab


//Media Art Page
function videoselector (videoLink) {
    document.getElementById('video_slider').src=videoLink;
}

//Photography Page

$(document).ready(function(){
  let currentIndex = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;
  let intervalId;

  // Next 버튼 변경
  $('.next').html('>').click(function() {
      goToSlide(currentIndex + 1);
  });

  // Prev 버튼 변경
  $('.prev').html('<').click(function() {
      goToSlide(currentIndex - 1);
  });

  // Center 버튼 클릭 시 해당 페이지로 이동
  $('.center').click(function() {
      const pageUrl = slides.eq(currentIndex).data('button');
      window.location.href = pageUrl;
  });

  $('.nav-button').click(function() {
      const index = $(this).data('slide');
      goToSlide(index);
  });

  // 자동으로 슬라이드 전환을 위한 함수
  function startSlideShow() {
      intervalId = setInterval(function() {
          goToSlide(currentIndex + 1);
      }, 3000); // 3초마다 슬라이드 전환
  }

  // 슬라이드 전환 시 호출되는 함수
  function goToSlide(index) {
      clearInterval(intervalId); // 이전 타이머 제거

      slides.eq(currentIndex).removeClass('active');
      $('.nav-button').eq(currentIndex).removeClass('active');
      currentIndex = (index + totalSlides) % totalSlides;
      slides.eq(currentIndex).addClass('active');
      $('.nav-button').eq(currentIndex).addClass('active');
      updateSlidePosition();
      updateTitleAndButton();

      startSlideShow(); // 새로운 타이머 시작
  }

  // 슬라이드 이동 위치 업데이트
  function updateSlidePosition() {
      $('.slides').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
  }

  // 타이틀과 버튼 텍스트 업데이트
function updateTitleAndButton() {
  const currentSlide = slides.eq(currentIndex);
  const title = currentSlide.data('title');
  const buttonText = currentSlide.data('button-text'); // 센터 버튼의 텍스트를 가져옴
  $('.slider-title').text(title);
  $('.center').text(buttonText);
}

  // 초기 타이틀과 버튼 텍스트 설정
  updateTitleAndButton();

  // 자동 슬라이드 시작
  startSlideShow();
});






// var slideshowDuration = 4000;
// var slideshow = $('.main-content .slideshow');

// function slideshowSwitch(slideshow, index, auto) {
//   if (slideshow.data('wait')) return;

//   var slides = slideshow.find('.slide');
//   var pages = slideshow.find('.pagination');
//   var activeSlide = slides.filter('.is-active');
//   var activeSlideImage = activeSlide.find('.image-container');
//   var newSlide = slides.eq(index);
//   var newSlideImage = newSlide.find('.image-container');
//   var newSlideContent = newSlide.find('.slide-content');
//   var newSlideElements = newSlide.find('.caption');//> *
//   if (newSlide.is(activeSlide)) return;

//   newSlide.addClass('is-new');
//   var timeout = slideshow.data('timeout');
//   clearTimeout(timeout);
//   slideshow.data('wait', true);
//   var transition = slideshow.attr('data-transition');
//   if (transition == 'fade') {
//     newSlide.css({
//       display: 'block',
//       zIndex: 2
//     });
//     newSlideImage.css({
//       opacity: 0
//     });

//     TweenMax.to(newSlideImage, 1, {
//       alpha: 1,
//       onComplete: function () {
//         newSlide.addClass('is-active').removeClass('is-new');
//         activeSlide.removeClass('is-active');
//         newSlide.css({ display: '', zIndex: '' });
//         newSlideImage.css({ opacity: '' });
//         slideshow.find('.pagination').trigger('check');
//         slideshow.data('wait', false);
//         if (auto) {
//           timeout = setTimeout(function () {
//             slideshowNext(slideshow, false, true);
//           }, slideshowDuration);
//           slideshow.data('timeout', timeout);
//         }
//       }
//     });
//   } else {
    
//     if (newSlide.index() > activeSlide.index()) {
//       var newSlideRight = 0;
//       var newSlideLeft = 'auto';
//       var newSlideImageRight = slideshow.width() / 4;
//       var newSlideImageLeft = 'auto';
//       var newSlideImageToRight = 0;
//       var newSlideImageToLeft = 'auto';
//       var newSlideContentLeft = 'auto';
//       var newSlideContentRight = 0;
//       var activeSlideImageLeft = -slideshow.width() / 2;
//     } else {
//       var newSlideRight = '';
//       var newSlideLeft = 0;
//       var newSlideImageRight = 'auto';
//       var newSlideImageLeft = -slideshow.width() / 2;
//       var newSlideImageToRight = '';
//       var newSlideImageToLeft = 0;
//       var newSlideContentLeft = 0;
//       var newSlideContentRight = 'auto';
//       var activeSlideImageLeft = slideshow.width() / 1;
//     }

//     newSlide.css({
//       display: 'block',
//       width: 0,
//       right: newSlideRight,
//       left: newSlideLeft
//       , zIndex: 2
//     });

//     newSlideImage.css({
//       width: slideshow.width(),
//       right: newSlideImageRight,
//       left: newSlideImageLeft
//     });

//     newSlideContent.css({
//       width: slideshow.width(),
//       left: newSlideContentLeft,
//       right: newSlideContentRight
//     });

//     activeSlideImage.css({
//       left: 0
//     });

//     TweenMax.set(newSlideElements, { y: 20, force3D: true });
//     TweenMax.to(activeSlideImage, 1, {
//       left: activeSlideImageLeft,
//       ease: Power4.easeInOut
//     });

//     TweenMax.to(newSlide, 1, {
//       width: slideshow.width(),
//       ease: Power3.easeInOut
//     });

//     TweenMax.to(newSlideImage, 1, {
//       right: newSlideImageToRight,
//       left: newSlideImageToLeft,
//       ease: Power3.easeInOut
//     });

//     TweenMax.staggerFromTo(newSlideElements, 0.5, { alpha: 0, y: 60 }, { alpha: 0, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.5 }, 0.2, function () {
//       newSlide.addClass('is-active').removeClass('is-new');
//       activeSlide.removeClass('is-active');
//       newSlide.css({
//         display: '',
//         width: '',
//         left: '',
//         zIndex: ''
//       });
      
//       newSlideImage.css({
//         width: '',
//         right: '',
//         left: ''
//       });

//       newSlideContent.css({
//         width: '',
//         left: ''
//       });

//       newSlideElements.css({
//         opacity: '',
//         transform: ''
//       });


//       activeSlideImage.css({
//         left: ''
//       });

//       slideshow.find('.pagination').trigger('check');
//       slideshow.data('wait', false);
//       if (auto) {
//         timeout = setTimeout(function () {
//           slideshowNext(slideshow, false, true);
//         }, slideshowDuration);
//         slideshow.data('timeout', timeout);
//       }
//     });
//   }
// }

// function slideshowNext(slideshow, previous, auto) {
//   var slides = slideshow.find('.slide');
//   var activeSlide = slides.filter('.is-active');
//   var newSlide = null;
//   if (previous) {
//     newSlide = activeSlide.prev('.slide');
//     if (newSlide.length == 0) {
//       newSlide = slides.last();
//     }
//   } else {
//     newSlide = activeSlide.next('.slide');
//     if (newSlide.length == 0)
//       newSlide = slides.filter('.slide').first();
//   }

//   slideshowSwitch(slideshow, newSlide.index(), auto);
// }

// function homeSlideshowParallax() {
//   var scrollTop = $(window).scrollTop();
//   if (scrollTop > windowHeight) return;
//   var inner = slideshow.find('.slideshow-inner');
//   var newHeight = windowHeight - (scrollTop / 2);
//   var newTop = scrollTop * 0.5;

//   inner.css({
//     transform: 'translateY(' + newTop + 'px)',
//     height: newHeight
//   });
// }

// $(document).ready(function () {
//   $('.slide').addClass('is-loaded');

//   $('.slideshow .arrows .arrow').on('click', function () {
//     slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
//   });

//   $('.slideshow .pagination .item').on('click', function () {
//     slideshowSwitch($(this).closest('.slideshow'), $(this).index());
//   });

//   $('.slideshow .pagination').on('check', function () {
//     var slideshow = $(this).closest('.slideshow');
//     var pages = $(this).find('.item');
//     var index = slideshow.find('.slides .is-active').index();
//     pages.removeClass('is-active');
//     pages.eq(index).addClass('is-active');
//   });

//   var timeout = setTimeout(function () {
//     slideshowNext(slideshow, false, true);
//   }, slideshowDuration);

//   slideshow.data('timeout', timeout);
// });

// if ($('.main-content .slideshow').length > 1) {
//   $(window).on('scroll', homeSlideshowParallax);
// }
