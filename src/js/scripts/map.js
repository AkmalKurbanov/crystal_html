  var map;

  DG.then(function () {
    map = DG.map('map', {
      center: [42.875923, 74.619700],
      zoom: 17
    });
    var myIcon = L.icon({
      iconUrl: 'assets/img/mark.png',
      iconSize: [55, 80],
    });
    DG.marker([42.87600, 74.619700], {
      icon: myIcon
    }).addTo(map).bindPopup('г.Бишкек,пр.Чуй 147/1');

  });
