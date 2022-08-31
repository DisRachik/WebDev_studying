$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/pointer_to_left.svg" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/pointer_to_right.svg" /></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab-active)',
    function () {
      $(this)
        .addClass('catalog__tab-active')
        .siblings()
        .removeClass('catalog__tab-active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content-active')
        .eq($(this).index())
        .addClass('catalog__content-active');
    }
  );
});

// Скрипт для переключення контенту карток
$(document).ready(function () {
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content-active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Pop-up
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.btn-mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  // налаштування jQuery.validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: 'Пожалуйста введите свое имя!',
        phone: 'Пожалуйста введите свой номер телефона!',
        email: {
          required: 'Пожалуйста введите свой email!',
          email:
            'Не правильно введен email, необходимый формат email - name@domain.com',
        },
      },
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+3 (999) 999-99-99");

});
