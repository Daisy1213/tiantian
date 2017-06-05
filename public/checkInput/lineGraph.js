var myData = new Array([1,15], [2,14], [3,14], [4,14], [5,12], [6,13], [7,16], [8,18],
    [9,21], [10,23], [11,26],[12,27],[13,28],[14,29],[15,30],[16,29],
    [17,28],[18,27],[19,24],[20,22],[21,18],[22,17],[23,18],[24,17]);
var myChart = new JSChart('graph', 'line');
myChart.setDataArray(myData);
myChart.setTitle('Temperratura of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('T');
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

