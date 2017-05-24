/**
 * Created by tian on 2017/5/4.
 */
var myData = new Array(['11-15',25], ['16-20',25], ['21-25',16], ['26-27',34], ['Not sure/Don\'t know', 0]);
var colors = ['#C40000', '#750303', '#F9ECA2', '#FA9000', '#FA5400'];
var myChart = new JSChart('graph', 'pie');
myChart.setDataArray(myData);
myChart.colorizePie(colors);
myChart.setTitle(' Time proportioning(%)');
myChart.setTitleColor('#555');
myChart.setTitleFontSize(15);
myChart.setTextPaddingTop(30);
myChart.setSize(700, 700);
myChart.setPiePosition(308, 170);
myChart.setPieRadius(200);
myChart.setPieUnitsColor('#555');
myChart.setBackgroundImage('chart_bg.jpg');
myChart.draw();
