/**
 * Created by tian on 2017/5/6.
 */
var temp = localStorage.getItem('tempLineCoordinateArrays');
var numArrays = temp.split(',').map( item => parseInt(item));
var coordinateArray = [];
for(var i = 0; i < numArrays.length; i+=2){
  coordinateArray.push([numArrays[i], numArrays[i+1]]);
}

var myData1 = coordinateArray;
var myChart = new JSChart('graph_temp', 'line');
myChart.setDataArray(myData1);
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
myChart.setSize(700, 450);
myChart.setBackgroundImage('../image/chart_bg.jpg');
myChart.draw();

