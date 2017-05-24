
var myData = new Array([1,800], [2,832], [3,900], [4,987], [5,934], [6,1000], [7,912], [8,910],
    [9,879], [10,954], [11,1010],[12,1034],[13,1109],[14,1123],[15,1099],[16,1065],
    [17,1067],[18,1009],[19,1100],[20,1000],[21,999],[22,987],[23,942],[24,903]);
var myChart = new JSChart('graph_barometicPress', 'line');
myChart.setDataArray(myData);
myChart.setTitle('barometicPressure of Every Hours');
myChart.setTitleColor('#7e7e7e');
myChart.setTitleFontSize(13);
myChart.setAxisNameX('H');
myChart.setAxisNameY('hpa');
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


