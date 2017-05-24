/**
 * Created by tian on 2017/5/8.
 */
$(".temp").click(function () {
    // console.log('jdjdj')
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
    $(".pieChart").show();
});

$(".line").click(function () {
    $(".pieChart").hide();
    $(".lineGraph_temp").show();
})


function showData(dataName){
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
