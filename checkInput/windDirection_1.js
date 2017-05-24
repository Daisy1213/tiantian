/**
 * Created by tian on 2017/5/10.
 */
var myData = new Array(['east',8], ['southeaster',25], ['northeaster',50], ['north',17],
    ['Not sure/Don\'t know', 0]);
var colors = ['#C40000', '#750303', '#F9ECA2', '#FA9000', '#FA5400'];
var myChart1 = new JSChart('graph_1_windDirection', 'pie');
myChart1.setDataArray(myData);
myChart1.colorizePie(colors);
myChart1.setTitle(' Time proportioning(%)');
myChart1.setTitleColor('#555');
myChart1.setTitleFontSize(15);
myChart1.setTextPaddingTop(30);
myChart1.setSize(480, 400);
myChart1.setPiePosition(240,170);
myChart1.setPieRadius(85);
myChart1.setPieUnitsColor('#1d1d1d');
myChart1.setBackgroundImage('chart_bg.jpg');
myChart1.draw();