/**
 * Created by tian on 2017/5/8.
 */
var myData = new Array([1,0.0], [2,0.2], [3,0.6], [4,1.0], [5,0.8], [6,1.0], [7,0.7], [8,1.4],
    [9,1.7], [10,2.3], [11,2.6],[12,2.7],[13,2.8],[14,2.8],[15,3.0],[16,2.0],
    [17,1.8],[18,2.7],[19,3.3],[20,4.5],[21,4.8],[22,5.0],[23,4.0],[24,1.7]);
var myChart = new JSChart('graph_windSpeed', 'line');
myChart.setDataArray(myData);
myChart.setTitle('windSpeed of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('km/h');
myChart.setAxisColor('#d19100');
myChart.setAxisValuesColor('#1d1d1d');
myChart.setAxisValuesNumberX(24);
myChart.setGraphExtend(true);
myChart.setGridColor('#b3b3b3');
myChart.setLineWidth(4);
myChart.setLineColor('#9F0505');
myChart.setSize(700,450);
myChart.setBackgroundImage('../image/chart_bg.jpg');
myChart.draw();



