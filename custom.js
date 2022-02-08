document.addEventListener('DOMContentLoaded', function() {
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

});