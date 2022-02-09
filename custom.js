document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    classNames: {
      flippedState: false,
    }
  });

  new SimpleBar(document.querySelector('.textfield'), {
    autoHide: false,
    scrollbarMaxSize: 70
  });

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [48.856663, 2.351556],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 12,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'tag.svg',
      iconImageSize: [42, 60],
      iconImageOffset: [-21, -60]
    });
    myMap.geoObjects.add(myPlacemark);
  }

  var selector = document.getElementById("tel");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  const validation = new JustValidate(
    '#form',
    {
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#FF5C00',

      },
      focusInvalidField: true,
      lockForm: true,
      // errorsContainer: '.errors-container1',
    },
  );

  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя введено неверно',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя введено неверно',
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?',
      },
    ],
    {
      errorsContainer: '.errors-container1',
    },
    )
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Email введен неверно!',
      },

    ],
    {
      errorsContainer: '.errors-container3',
    },
    )
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        rule: 'customRegexp',
        value: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]\d\d$/,
        errorMessage: 'Телефон введен неверно!',
      },
      
    ],
    {
      errorsContainer: '.errors-container2',
    },
    )

});
