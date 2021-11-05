import $ from 'jquery'
import jQuery from 'jquery'
$(function () {
  // 首页pc-banner
  $('#pc-banner').slick({
    autoplay: false,
    dots: false
  })
  // 手机banner
  $('#mob-banner').slick({
    arrows: false,
    dots: true,
    autoplay: true
  })
})

$('.partList').slick({
  arrows: false,
  dots: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1368,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})

/* 使用js分组，每4个li放到一个ul里面 */
jQuery('.mtab1 li').each(function (i) {
  jQuery('.mtab1 li').slice(i * 4, i * 4 + 4).wrapAll("<ul class='jxcp clearfix'></ul>")
})

// 精选产品
$('.mtab1').slick({
  arrows: true,
  dots: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$(function () {
  // 返回顶部
  $.backTop('#toolbar .backtop', 300)
  var imgUrl = '/'
  if ($('.ewm-box img').attr('src') == imgUrl) {
    $('.ewm-box').remove()
  }
})

$('.btn-search').click(function () {
  $('.xy-search').show()
})

$(document).click(function (event) {
  // alert(0);
  var _con = $('.xy-search') // 设置目标区域
  var _con2 = $('.btn-search')
  if (!_con.is(event.target) && !_con2.is(event.target) && _con.has(event.target).length === 0 && _con2.has(event.target).length === 0) { // Mark 1
    $('.xy-search').hide() // 淡出消失
  }
})

$('.xy-menu>li').hover(function () {
  $(this).find('.subMenu').removeClass('disnone')
}, function () {
  $(this).find('.subMenu').addClass('disnone')
})
