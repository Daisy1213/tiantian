/**
 * Created by tian on 2017/5/10.
 */
var myData2 = new Array(['11-15',25], ['16-20',25], ['21-25',16], ['26-27',34], ['Not sure/Don\'t know', 0]);
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
myChart1.setPiePosition(350,250);
myChart1.setPieRadius(140);
myChart1.setPieUnitsColor('#1d1d1d');
myChart1.setBackgroundImage('chart_bg.jpg');
myChart1.draw();

