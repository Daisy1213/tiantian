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
// myChart.setAxisPaddingLeft(50);
// myChart.setAxisPaddingRight(50);
// myChart.setAxisPaddingTop(50);
// myChart.setAxisPaddingBottom(40);
myChart.setAxisValuesNumberX(24);
myChart.setGraphExtend(true);
myChart.setGridColor('#b3b3b3');
myChart.setLineWidth(4);
myChart.setLineColor('#9F0505');
myChart.setSize(480, 200);
myChart.setBackgroundImage('../image/chart_bg.jpg');
myChart.draw();

// var data = {
//     labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h",
//         "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h"],
//     datasets: [
//         {
//             label: "温度值",
//             //xAxisID:"时刻",
//             //yAxisID:"/tem",
//             backgroundColor: "black",
//             data: [15, 14, 14, 14, 12, 13, 16, 18, 21, 23, 26, 27, 28, 29, 30, 29, 28, 27, 24, 22, 18, 17, 18, 17]
//         }]
// }
// // xLabel:"时刻",yLabel:"tem"
//
// Chart.defaults.global.responsive = false;
// var $canvas = document.getElementById("canvas");
// ctx = $canvas.getContext("2d");
// var testLinchart = new Chart(ctx, {type: "line", data: data,})