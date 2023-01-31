ymaps.ready(function () {
  var map = new ymaps.Map('map', {
    center: [56.815690, 60.524639],
    zoom: 17,
    controls: []
  });

  // Создание метки с круглой активной областью.
  var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="reviews-provided__content"><div class="reviews-provided__layout"></div></div>');

  var circlePlacemark = new ymaps.Placemark(
    [56.815690, 60.524639], {
    hintContent: 'Метка с круглым HTML макетом'
  }, {
    iconLayout: circleLayout,
    iconImageHref: './img/baloon.svg',
    // Описываем фигуру активной области "Круг".
    iconShape: {
      type: 'Circle',
      // Круг описывается в виде центра и радиуса
      coordinates: [0, 0],
      radius: 50
    }
  }
  );
  map.geoObjects.add(circlePlacemark);

});
