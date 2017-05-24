/**
 * Created by tian on 2017/5/8.
 */
var myData = new Array([1,40], [2,40], [3,42], [4,45], [5,50], [6,55], [7,60], [8,70],
    [9,65], [10,63], [11,60],[12,58],[13,65],[14,60],[15,58],[16,50],
    [17,65],[18,70],[19,64],[20,60],[21,56],[22,50],[23,45],[24,43]);
var myChart = new JSChart('graph_noise', 'line');
myChart.setDataArray(myData);
myChart.setTitle('noise of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('DB');
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


