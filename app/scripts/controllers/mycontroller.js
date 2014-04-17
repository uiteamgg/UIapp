'use strict';

angular.module('yoAngularProjectApp')
  
  .controller('MycontrollerCtrl', function ($scope,Myservice) {
    console.log("Inside controller");
    var stories=[];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var myPieChart= function (values) {
    console.log("inisde piecharts");

    var arr=[
                ['SP1', 45.0],
                ['SP2', 26.8],
                ['SP3', 12.8]   ,
                ['SP4', 8.5],
                ['SP5', 6.2],
                ['SP6', 0.7]
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
    var values="";
    myPieChart(values);
  })

 .controller('HotelCtrl', function ($scope,Myservice) {

    console.log("Inside hotel controller");
    
      Myservice.success(function(data) { 
        console.log(JSON.stringify(data));
    });
  })

.controller('ContactCtrl', function ($scope,Getdata) {
    console.log("Inside contact controller");
    });
  });

 