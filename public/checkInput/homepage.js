/**
 * Created by tian on 2017/5/8.
 */

request();

//向服务器发送请求，获取数据
function request() {
  $.get('/items', function (data) {
    coordinates = data;
    $('.tempValue').text(data[0].value);
    $('.itemValue').text(data[0].value);
    $('.humidityValue').text(data[1].value);
    $('.pm2Value').text(data[2].value);
    $('.pm10Value').text(data[3].value);
    $('.windSpeedValue').text(data[4].value);
    $('.windDirectionValue').text(data[5].value);
    $('.noiseValue').text(data[6].value);
    $('.barometricPressureValue').text(data[7].value);
    window.localStorage.tempLineCoordinateArrays = data[0].LineCoordinateArrays;
    window.localStorage.temppieCoordinateArrays = data[0].pieCoordinateArrays;
    window.localStorage.humidityLineCoordinateArrays = data[1].LineCoordinateArrays;
    window.localStorage.humiditypieCoordinateArrays = data[1].pieCoordinateArrays;
    window.localStorage.pm2LineCoordinateArrays = data[2].LineCoordinateArrays;
    window.localStorage.pm2pieCoordinateArrays = data[2].pieCoordinateArrays;
    window.localStorage.pm10LineCoordinateArrays = data[3].LineCoordinateArrays;
    window.localStorage.pm10pieCoordinateArrays = data[3].pieCoordinateArrays;
    window.localStorage.windSpeedLineCoordinateArrays = data[4].LineCoordinateArrays;
    window.localStorage.windSpeedpieCoordinateArrays = data[4].pieCoordinateArrays;
    window.localStorage.windDirectionLineCoordinateArrays = data[5].LineCoordinateArrays;
    window.localStorage.windDirectionpieCoordinateArrays = data[5].pieCoordinateArrays;
    window.localStorage.noiseLineCoordinateArrays = data[6].LineCoordinateArrays;
    window.localStorage.noisepieCoordinateArrays = data[6].pieCoordinateArrays;
    window.localStorage.barometicPressLineCoordinateArrays = data[7].LineCoordinateArrays;
    window.localStorage.barometicPresspieCoordinateArrays = data[7].pieCoordinateArrays;
  })
};

$(".temp").click(function () {
  $("#show_chart_temp").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('temp');
})

$(".humidity").click(function () {
  $("#otherChart").show();
  $("#show_chart_humidity").show();
  $("#show_chart_temp").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('humidity');
})

$(".pm2").click(function () {
  $("#otherChart").show();
  $("#show_chart_pm2").show();
  $("#show_chart_temp").hide();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('pm2');
})

$(".pm10").click(function () {
  $("#otherChart").show();
  $("#show_chart_pm10").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_temp").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('pm10');
})

$(".windSpeed").click(function () {
  $("#otherChart").show();
  $("#show_chart_windSpeed").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_temp").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('windSpeed');
})

$(".windDirection").click(function () {
  $("#otherChart").show();
  $("#show_chart_windDirection").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_temp").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_barometicPress").hide();
  showData('windDirection');
})

$(".noise").click(function () {
  $("#otherChart").show();
  $("#show_chart_noise").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_temp").hide();
  $("#show_chart_barometicPress").hide();
  showData('noise');
})

$(".barometricPressure").click(function () {
  $("#otherChart").show();
  $("#show_chart_barometicPress").show();
  $("#show_chart_humidity").hide();
  $("#show_chart_pm2").hide();
  $("#show_chart_pm10").hide();
  $("#show_chart_windSpeed ").hide();
  $("#show_chart_windDirection").hide();
  $("#show_chart_noise").hide();
  $("#show_chart_temp").hide();
  showData('barometricPressure');
})

$(".pie").click(function () {
  $(".lineGraph_temp").hide();
  $(".pieChart_temp").show();
});
$(".line").click(function () {
  $(".pieChart_temp").hide();
  $(".lineGraph_temp").show();
})

$(".pie").click(function () {
  $(".lineGraph_humidity").hide();
  $(".pieChart_humidity").show();
});
$(".line").click(function () {
  $(".pieChart_humidity").hide();
  $(".lineGraph_humidity").show();
})

$(".pie").click(function () {
  $(".lineGraph_pm2").hide();
  $(".pieChart_pm2").show();
});
$(".line").click(function () {
  $(".pieChart_pm2").hide();
  $(".lineGraph_pm2").show();
})

$(".pie").click(function () {
  $(".lineGraph_pm10").hide();
  $(".pieChart_pm10").show();
});
$(".line").click(function () {
  $(".pieChart_pm10").hide();
  $(".lineGraph_pm10").show();
})

$(".pie").click(function () {
  $(".lineGraph_windSpeed").hide();
  $(".pieChart_windSpeed").show();
});
$(".line").click(function () {
  $(".pieChart_windSpeed").hide();
  $(".lineGraph_windSpeed").show();
})

$(".pie").click(function () {
  $(".lineGraph_windDirection").hide();
  $(".pieChart_windDirection").show();
});
$(".line").click(function () {
  $(".pieChart_windDirection").hide();
  $(".lineGraph_windDirection").show();
})

$(".pie").click(function () {
  $(".lineGraph_noise").hide();
  $(".pieChart_noise").show();
});
$(".line").click(function () {
  $(".pieChart_noise").hide();
  $(".lineGraph_noise").show();
})

$(".pie").click(function () {
  $(".lineGraph_barometicPress").hide();
  $(".pieChart_barometicPress").show();
});
$(".line").click(function () {
  $(".pieChart_barometicPress").hide();
  $(".lineGraph_barometicPress").show();
})

function showData(dataName) {
  //当前数据获取类名'
  console.log(dataName)
  var nodes = document.getElementsByClassName(dataName)[0].childNodes;
  var td1 = nodes[1]
  var td2 = nodes[3]
  //拿到的类名进行字符串的分割，例如：温度： 29.只需要29这个数据
  var key = td1.innerHTML.split('：')[0];
  var value = td2.innerHTML
  //填入title中
  document.getElementsByClassName('itemName')[0].innerHTML = key;
  document.getElementsByClassName('itemValue')[0].innerHTML = value;
}
