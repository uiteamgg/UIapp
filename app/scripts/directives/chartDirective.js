'use strict';

angular.module('yoAngularProjectApp')
  .directive('chartdirectivecolumn', function () {
  		return function(scope, element) {
  			var myColumnChart= function (scope) {
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
  		}
  })

.directive('chartdirectiveburn', function () {
  		return function(scope, element) {
var storyPicksPerSprint= function(values){

        var arr4=[];
        $('.chart3').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Stories Completed Per sprint'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    'sprint 1',
                    'sprint 2',
                    'sprint 3',
                    'sprint 4'
                ],
                plotBands: [{ // visualize the weekend
                    from: 4.5,
                    to: 6.5,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: {
                title: {
                    text: 'Stories'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' stories'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'Burn-down',
                data: [16, 9, 13, 5]
            }]
        });
    };

    var values4="";
    storyPicksPerSprint(values4);
};
}) 

