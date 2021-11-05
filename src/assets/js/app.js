$(function () {
  $('.xy-menu li').hover(function () {
    $(this).find('.xy-sub-menu').stop(!0).slideDown()
  },
  function () {
    $(this).find('.xy-sub-menu').stop(!0).slideUp()
  }),
  $('.xymob-menu-jt').click(function () {
    var i = $(this).siblings('.xymob-sub-menu'),
      e = $(this).parents('li').siblings('li').find('.xymob-sub-menu'),
      s = $(this).parents('li').siblings('li').find('.xymob-menu-jt')
    i.is(':visible') ? ($(this).removeClass('clicked'), i.slideUp()) : ($(this).addClass('clicked'), i.slideDown(), s.removeClass('clicked'), e.slideUp())
  }),
  $.clickToggle('.xymob-navbtn', '.xymob-menu'),
  $('.xymob-search-btn').add('.xymob-search-close-btn').click(function () {
    $('.xymob-search').toggleClass('clicked')
  }),
  $(window).scrollTop() > 30 && $('.xy-head').addClass('scroll'),
  $(window).scroll(function () {
    $(this).scrollTop() > 30 ? $('.xy-head').addClass('scroll') : $('.xy-head').removeClass('scroll')
  }),
  $.backTop('.xymob-page-backtop', 300),
  $("input[name='wd']").each(function () {
    var i = $(this).attr('placeholder')
    $(this).focus(function () {
      $(this).attr('placeholder', '')
    }),
    $(this).blur(function () {
      $(this).attr('placeholder', i)
    })
  }),
  $('input[type="submit"]').click(function () {
    var i = $(this).siblings('#keyword').val()
    if (i === '' || i === '璇疯緭鍏ユ悳绱犲叧閿瘝') {
      return alert('璇疯緭鍏ユ悳绱犲叧閿瘝锛�'),
      $('#keyword').focus(),
      !1
    }
  }),
  $('.first-nav-btn').click(function () {
    var i = $(this).siblings('.xypg-left-subnav'),
      e = $(this).parents('li'),
      s = $(this).parents('li').siblings('li'),
      n = $(this).parents('li').siblings('li').find('.xypg-left-subnav'),
      l = $(this).parents('li').siblings('li').find('.first-nav-btn')
    if (i.find('li').length == 0) return !1
    i.is(':visible') ? (i.slideUp(), $(this).removeClass('clicked'), e.removeClass('clicked')) : (i.slideDown(), e.addClass('clicked'), $(this).addClass('clicked'), n.slideUp(), l.removeClass('clicked'), s.removeClass('clicked'))
  }),

  $(window).width() > 990 && $('.xypg-left-subnav > li').hover(function () {
    $(this).addClass('hover'),
    $(this).find('.xypg-left-threenav').stop(!0).slideDown()
  },
  function () {
    $(this).removeClass('hover'),
    $(this).find('.xypg-left-threenav').stop(!0).slideUp()
  }),
  $('.xymob-page-navbtn').click(function () {
    $('.xymob-menu-click').addClass('click'),
    $('html,body').addClass('no-scroll')
  }),
  $('.xymob-left-close-btn').click(function () {
    $('.xymob-menu-click').removeClass('click'),
    $('html,body').removeClass('no-scroll')
  }),
  $('.relate-product-slick').length != 0 && $('.relate-product-slick').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
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
    }]
  }),
  $.clickToggle('.file-down-title', '.file-down-list'),
  $(".xypg-left-nav li a[href='" + window.location.href + "']").closest('li').addClass('clicked'),
  $('.xypg-left-threenav .clicked').parents('.xypg-left-subnav').show(),
  $('.xypg-left-threenav .clicked').parents('.xypg-left-threenav').show(),
  $('.xypg-left-subnav .clicked').parents('.xypg-left-subnav').show()
  var i, e
  i = navigator.userAgent.indexOf('MSIE') >= 0 ? 'IE' : navigator.userAgent.indexOf('Firefox') >= 0 ? 'FireFox' : navigator.userAgent.indexOf('Opera') >= 0 ? 'Opera' : navigator.userAgent.indexOf('Chrome') >= 0 ? 'Chrome' : 'other',
  e = 'other'
  var s = navigator.userAgent,
    n = navigator.platform == 'Win32' || navigator.platform == 'Windows',
    l = navigator.platform == 'Mac68K' || navigator.platform == 'MacPPC' || navigator.platform == 'Macintosh' || navigator.platform == 'MacIntel'; (l && (e = 'Mac'), navigator.platform == 'X11' && !n && !l && (e = 'Unix'), String(navigator.platform).indexOf('Linux') > -1 && (e = 'Linux'), n) && ((s.indexOf('Windows NT 5.0') > -1 || s.indexOf('Windows 2000') > -1) && (e = 'Win2000'), (s.indexOf('Windows NT 5.1') > -1 || s.indexOf('Windows XP') > -1) && (e = 'WinXP'), (s.indexOf('Windows NT 5.2') > -1 || s.indexOf('Windows 2003') > -1) && (e = 'Win2003'), (s.indexOf('Windows NT 6.0') > -1 || s.indexOf('Windows Vista') > -1) && (e = 'WinVista'), (s.indexOf('Windows NT 6.1') > -1 || s.indexOf('Windows 7') > -1) && (e = 'Win7'))
  var t
  t = new XMLHttpRequest(),
  t.open('POST', url + 'data/include/visitor.php', !0),
  t.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
  t.send('get=' + location.href + '&browser=' + i + '&os=' + e)
})
