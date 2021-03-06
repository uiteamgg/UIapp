'use strict';

angular.module('yoAngularProjectApp')
  .directive('chartdirectivecolumn', function () {
    //Sprint1#8FDFF7Sprint2#3BDBE3sprint3#05C1FASprint4#3DB6DB
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
                text: null /*'Sprint Release-wise'*/
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
                data: arr2[0].series,
                color:'#8FDFF7'
            }, {
                name: arr2[1].rel,
                data: arr2[1].series,
                color:'#3BDBE3'
    
            }, {
                name: arr2[2].rel,
                data: arr2[2].series,
                color:'#05C1FA'
    
            }, {
                name: arr2[3].rel,
                data: arr2[3].series,
                color:'#3DB6DB'
    
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
                text: null /*'Stories Completed Per sprint'*/
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
                data: [16, 9, 8, 5]
            }]
        });
    };

    var values4="";
    storyPicksPerSprint(values4);
};
}) 

.directive('chartdirectivecontribute', function () {
  		return function(scope, element) {

var contribution= function (values) {
        var arr3=[];
        console.log("commit meter");
        $('.chart4').highcharts({
    
        chart: {
                type: 'column'
            },
            title: {
                text: null/*'Individual Contribution (current release)'*/
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
                data: [5, 3, 4, 7, 2],
                color:'#8FDFF7'             
            }, {
                name: 'Sprint2',
                data: [2, 2, 3, 2, 1],
                color:'#3BDBE3'             
            }, {
                name: 'Sprint3',
                data: [3, 4, 4, 2, 5],
                color:'#05C1FA'                
            },{
                name: 'Sprint4',
                data: [3, 4, 4, 2, 5],
                color:'#3DB6DB'             
            }] 
    
    });


    };
    
    var values3="";
    contribution(values3);
};
})

.directive('chartdirectivepie', function () {
    Highcharts.setOptions({
     colors: ['#8FDFF7','#3BDBE3','#05C1FA','#3DB6DB']
    });
  		return function(scope, element) {

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
        title: {text:null/*"Sprint share (Story based)"*/},
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
            data: arr,
            events: {
                click: function (e){
                    /*event.preventDefault();
                    var funnel = GetChart.funnelChart();
                    var divisonFunnel = $(".chart5");
                    divisonFunnel.css({"display":"block"});
                    divisonFunnel.stop().animate({
                            left: '450px'    
                        }, 400);
                    funnel(divisonFunnel);
                    //divisonFunnel.modal();*/
                    console.log("clicked");
                    scope.$root.generateModal();
                }
            }
            }]
        });
    };
    var values1="";
    myPieChart(values1);

  		};
})
.directive('chartdirectivefunnel', function () {
    console.log("insdide chart5 ");
        return function(scope, element) {
        var storyStatus= function(values){
        var arr5=[];


    $('.chart5').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: null,
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'
                
                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Status',
            data: [
                ['In process',   15],
                ['Done',       14],
                ['PO Accepted', 17],
                ['Client Accepted',    6],
                ['Need Discussion',    6],
                ['Red Flag', 13]
            ]
        }]
    });


}
}
})