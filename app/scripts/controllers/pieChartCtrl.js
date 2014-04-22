angular.module('yoAngularProjectApp')

 .controller('pieChartController', function ($scope,Myservice) {

    console.log("Inside piechart controller");

        $('.nav').find('li').removeClass("active");
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
        title: {text:"Sprint share (Story based)"},
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



    var myCommitMeter= function (values) {
        var arr3=[];
        console.log("commit meter");
        $('.chart3').highcharts({
    
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        
        title: {
            text: 'Commit Frequency'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
           
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
    
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]        
        },
    
        series: [{
            name: 'Commits',
            data: [0],
            tooltip: {
                valueSuffix: ' c/day'
            }
        }]
    
    }, 
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);
                
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }
                
                point.update(newVal);
                
            }, 3000);
        }
    });


    };
    
    var values3="";
    myCommitMeter(values3);

    var storyPicksPerSprint= function(values){

        var arr4=[];
        $('.chart4').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Individual Contribution (current release)'
            },
            xAxis: {
                categories: ['D1', 'D2', 'D3', 'D4', 'D5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Story Picks'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Sprint1',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Sprint2',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Sprint3',
                data: [3, 4, 4, 2, 5]
            },{
                name: 'Sprint4',
                data: [3, 4, 4, 2, 5]
            }]
        });
    };

    var values4="";
    storyPicksPerSprint(values4);


  });
