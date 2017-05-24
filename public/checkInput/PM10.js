/**
 * Created by tian on 2017/5/8.
 */
var myData = new Array([1,60], [2,62], [3,64], [4,66], [5,70], [6,75], [7,80], [8,85],
    [9,88], [10,93], [11,90],[12,95],[13,100],[14,103],[15,100],[16,90],
    [17,80],[18,85],[19,84],[20,80],[21,86],[22,92],[23,87],[24,80]);
var myChart = new JSChart('graph_pm10', 'line');
myChart.setDataArray(myData);
myChart.setTitle('PM10 of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('');
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





