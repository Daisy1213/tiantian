/**
 * Created by tian on 2017/5/10.
 */
var temp = localStorage.getItem('temppieCoordinateArrays');
var temps = temp.split(',');

for (var j = 0; j < temps.length; j += 2) {
 temps[j + 1] =  parseInt(temps[j + 1]);
}

var coordinateArray = [];
for (var i = 0; i < temps.length; i+=2) {
  coordinateArray.push([temps[i], temps[i + 1]]);
}

var myData2 = coordinateArray;
var colors = ['#C40000', '#750303', '#F9ECA2', '#FA9000', '#FA5400'];
var myChart1 = new JSChart('graph_1_temp', 'pie');
myChart1.setDataArray(myData2);
myChart1.colorizePie(colors);
myChart1.setTitle(' Time proportioning(%)');
myChart1.setTitleColor('#555');
myChart1.setTitleFontSize(18);
myChart1.setTextPaddingTop(30);
myChart1.setPieUnitsFontSize(13);
myChart1.setPieValuesFontSize(11);
myChart1.setSize(700, 400);
myChart1.setPiePosition(350, 250);
myChart1.setPieRadius(140);
myChart1.setPieUnitsColor('#1d1d1d');
myChart1.setBackgroundImage('chart_bg.jpg');
myChart1.draw();


