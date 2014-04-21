angular.module('yoAngularProjectApp')

 .controller('pieChartController', function ($scope,Myservice) {

    console.log("Inside pie chart controller");
        $('.nav').closest('ul li').removeClass("active");
        $('#dashboard').closest('li').addClass("active");
    
    var myPieChart= function (values) {
    console.log("inisde piecharts");

    var arr=[
                ['SP1', 45.0],
                ['SP2', 26.8],
                ['SP3', 12.8]   ,
                ['SP4', 8.5]
                
                ];
    $('.chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Sprint share',
            data: arr
            }]
        });
    };

    var values1="";
    myPieChart(values1);

    var myColumnChart= function (values) {
    var arr2=[              
            {rel:"sprint-1",series:[49, 71, 106, 129]},
            {rel:"sprint-2",series:[83, 78, 98, 93]},
            {rel:"sprint-3",series:[48, 38, 39, 41]},
            {rel:"sprint-4",series:[42, 32, 34, 39]}
            ];
        $('.chart2').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sprint Release-wise'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories:['release-1','release-2','release-3',"release-4"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Stories'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: arr2[0].rel,
                data: arr2[0].series
    
            }, {
                name: arr2[1].rel,
                data: arr2[1].series
    
            }, {
                name: arr2[2].rel,
                data: arr2[2].series
    
            }, {
                name: arr2[3].rel,
                data: arr2[3].series
    
            }]
        });
};
    var values2="";
    myColumnChart(values2); 

    
  });
