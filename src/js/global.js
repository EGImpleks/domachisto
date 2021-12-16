//stock-close
$('.close').on('click', function(){
    $($(this).data('target')).toggleClass('not-active')  
});
//mob-nav
$('.burger').on('click', function(){
  $(this).addClass('not-active')
  $($(this).data('target')).toggleClass('not-active')  
});
$('.close-mobnav').on('click', function(){
  $('.burger').toggleClass('not-active')  
});
//drop-nav
$('#uslugi').on('click', function(){
    $($(this).data('target')).toggleClass('active')  
});
//parallax
$('.move-elem').paroller();

//tabs
$('.tabs__nav-elem').on('click', function(){
    $('.tabs__nav-elem').removeClass('active')
    $(this).addClass('active')
    $('.tabs__elem').removeClass('active')
    $($(this).data('target')).addClass('active')
});

//lazy-load
$(function() {
  $('.lazy').lazy();
});

//examples slider
$('.slider-examples').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true
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
      }
    ]
});

//employees slider
$('.slider-employees').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true
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
});

//questions-drop
$('.questions__smalltitle').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle()  
});

//btn-top 
$(document).ready(function() { 
  var button = $('.btn-top');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

//btn-contact
$('.btn-contact').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle() 
});

//nav active elem 
$(function() {
  $('.nav__drop-elem').removeClass('active') 
  $('.nav__elem').removeClass('active') 

  var loc = window.location.href;
  if(/kitchen-cleaning/.test(loc)) {
    $('#uluga1').addClass('active');
  }
  if(/cleaning-the-bathroom/.test(loc)) {
    $('#uluga2').addClass('active');
  }
  if(/cleaning-of-cottages/.test(loc)) {
    $('#uluga3').addClass('active');
  }
  if(/clear-out/.test(loc)) {
    $('#uluga4').addClass('active');
  }
  if(/dry-cleaning-of-upholstered-furniture/.test(loc)) {
    $('#uluga5').addClass('active');
  }
  if(/cleaning-a-neglected-apartment/.test(loc)) {
    $('#uluga6').addClass('active');
  }
  if(/apartment-cleaning-after-renovation/.test(loc)) {
    $('#uluga7').addClass('active');
  }
  if(/washing-windows/.test(loc)) {
    $('#uluga8').addClass('active');
  }
  //
  if(/prices/.test(loc)) {
    $('#price-nav').addClass('active');
  }
  if(/sales/.test(loc)) {
    $('#sales-nav').addClass('active');
  }
  if(/about/.test(loc)) {
    $('#about-nav').addClass('active');
  }
  if(/contacts/.test(loc)) {
    $('#contact-nav').addClass('active');
  }
});
//nav-active-end

//tabs-uslugi
$('.intro-uslugi__tab').on('click', function(){
  $('.intro-uslugi__tab').removeClass('active')
  $(this).addClass('active')
  $('table').addClass('non-active')
  $($(this).data('target')).removeClass('non-active')
});

//header-fixed-top

$(window).scroll(function(){
  $('.header').toggleClass('fixed-top', $(this).scrollTop() > 300);
});

//header-fixed-top-end


//phone mask

$(document).ready(function() {
  $('input[name="phone"]').mask("+7 (999) 99-99-999");
});


//calltouch
(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.type="text/javascript";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","qe9parm1");

//calltouch form

jQuery(document).on('submit', '.b24-form', function() { 
  var form = jQuery(this);
  var phone = form.find('input[name="phone"]').val();
  var fio = form.find('input[name="name"]').val(); 
  var sub = 'Отслеживаемая форма обратной связи';
  var ct_site_id = '46700'; /* ID сайта внутри Calltouch */
  var ct_data = { 
  fio: fio,
  phoneNumber: phone,
  subject: sub,
  tags: tags,
  requestUrl: location.href,
  sessionId: window.ct('calltracking_params','qe9parm1').sessionId /* Чтобы определить источник заявки, передаем ID сессии Calltouch sessionId. Вместо wgblo7m9 нужно передавать mod_id скрипта Calltouch. */
  };
  /* При необходимости делаем проверку на корректность собранных с формы данных */
  /* Например, обязательным для заполнения на форме является поле с телефоном, проверяем его наличие и не пустое ли оно */
  if (typeof(phone)!='undefined' && phone!=''){
  /* Выполняем AJAX-запрос */
  jQuery.ajax({ 
   url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/', 
   dataType: 'json', 
   type: 'POST', 
   data: ct_data,
   async: false /* Предположим, после отправки формы на сайте настроен редирект на другую страницу, поэтому используем параметр async: false для синхронной отправки запроса */
  }); 
  }
  });

var _ctreq_b24 = function(data) {
    var sid = 46700;
    var request = window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
    var post_data = Object.keys(data).reduce(function(a,k){if(!!data[k]){a.push(k+'='+encodeURIComponent(data[k]));}return a},[]).join('&');
    var url = 'https://api.calltouch.ru/calls-service/RestAPI/'+sid+'/requests/orders/register/';
    request.open("POST", url, true); request.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); request.send(post_data);
};
window.addEventListener('b24:form:submit', function(e){
    var form = event.detail.object;
    if (form.validated){
        var fio = ''; var phone = ''; var email = ''; var comment = '';
        form.getFields().forEach(function(el){
            if(el.name=='LEAD_NAME' || el.name=='CONTACT_NAME'){ fio = el.value(); }
            if(el.name=='LEAD_PHONE' || el.name=='CONTACT_PHONE'){ phone = el.value(); }
            if(el.name=='LEAD_EMAIL' || el.name=='CONTACT_EMAIL'){ email = el.value(); }
            if(el.name=='LEAD_COMMENTS' || el.name=='DEAL_COMMENTS '){ comment = el.value(); }
        });
        var sub = 'Заявка с формы Bitrix24 ' + location.hostname;
        var ct_data = {fio: fio, phoneNumber: phone, email: email, comment: comment, subject: sub, requestUrl: location.href, sessionId: window.call_value};
        console.log(ct_data);
		if (!!phone){
			phone = phone.replace(/[^0-9]/gim, '');
			var cb_phone = phone.length == 10 ? '7'+phone : (phone.length == 11) ? '7'+phone.substring(1) : false;
			if (cb_phone) { window.ctw.createRequest('domachisto_cb', cb_phone, [], function(success, data){ console.log(success, data) } ); }
		}
        // if (!!phone || !!email) _ctreq_b24(ct_data);
    }
});
