
var myData = new Array([1,0], [2,0], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1],
    [9,2], [10,2], [11,2],[12,2],[13,2],[14,2],[15,2],[16,2],
    [17,2],[18,2],[19,2],[20,3],[21,3],[22,3],[23,3],[24,2]);
var myChart = new JSChart('graph_windDirection', 'line');
myChart.setDataArray(myData);
myChart.setTitle('windSpeed of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('J');
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




