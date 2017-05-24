/**
 * Created by tian on 2017/5/8.
 */
var myData = new Array([1,30], [2,32], [3,34], [4,36], [5,40], [6,45], [7,50], [8,55],
    [9,58], [10,63], [11,60],[12,58],[13,40],[14,35],[15,25],[16,30],
    [17,34],[18,39],[19,45],[20,50],[21,56],[22,62],[23,57],[24,50]);
var myChart = new JSChart('graph_humidity', 'line');
myChart.setDataArray(myData);
myChart.setTitle('humidity of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('%');
myChart.setAxisColor('#d19100');
myChart.setAxisValuesColor('#1d1d1d');
myChart.setAxisValuesNumberX(24);
myChart.setGraphExtend(true);
myChart.setGridColor('#b3b3b3');
myChart.setLineWidth(4);
myChart.setLineColor('#9F0505');
myChart.setSize(480, 200);
myChart.setBackgroundImage('../image/chart_bg.jpg');
myChart.draw();



