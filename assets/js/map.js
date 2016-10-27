



(function() {

    var myMap;

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init() {
        // Создание экземпляра карты и привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты
            // её центр и коэффициент масштабирования.
            center: [55.74365, 37.562691], //[55.78795, 37.654466], // офис
            zoom: 11,
            //элементы управления масштаб и тип карты
            controls: ['zoomControl', 'typeSelector'],
            // задать поведение карты
            behaviors: ['zoomScroll', 'drag']
        });



        var locationsList = locations.list;
        var myPlacemarks = [];
        locationsList.forEach(function(geoObj, i, locationsList) {
            // создаём метки из locations.list
            for (key in geoObj) {

                var myPlacemark = new ymaps.Placemark(
                geoObj.coordinates, {
                    hintContent: 'Информация о дилере',
                    balloonContent: 'Это инфа о дилере, о том какой он классный и замечательный во всех отношениях'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: geoObj.iconImageHref,
                    iconImageSize: [58, 57],
                    iconImageHref: 'assets/img/icon/cart.png'
                }

                );
                myPlacemarks.push(myPlacemark);
                myMap.geoObjects.add(myPlacemark);
            }

        });
    }

    var locations = {
        list: [{
            coordinates: [55.743650, 37.637192]
            //iconImageHref: 'path-to-img'
        }, {
            coordinates: [55.722874, 37.562691]
        }, {
            coordinates: [55.718320, 37.608010]
        }, {
            coordinates: [55.738953, 37.654015]
        }, {
            coordinates: [55.754542, 37.660710]
        }]
    };



}());
