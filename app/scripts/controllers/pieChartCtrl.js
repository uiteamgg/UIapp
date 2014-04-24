angular.module('yoAngularProjectApp')

 .controller('pieChartController', function ($scope,Myservice,GetChart) {

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
            data: arr,
            events: {
                click: function (e){
                    event.preventDefault();
                    var funnel = GetChart.funnelChart();
                    var divisonFunnel = $(".chart5");
                    divisonFunnel.css({"display":"block"});
                    divisonFunnel.stop().animate({
                            left: '450px'    
                        }, 400);
                    funnel(divisonFunnel);
                    //divisonFunnel.modal();


                }
            }
            }]
        });
    };

    var values1="";
    myPieChart(values1);

     



    var myCommitMeter= function (values) {
        var arr3=[];
        console.log("commit meter");
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
    
    var values3="";
    myCommitMeter(values3);

    
  });

