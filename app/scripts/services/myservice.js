'use strict';

angular.module('yoAngularProjectApp')
  .service('Myservice', function Myservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log("Inside myservice");
    return $http.get('lib/jsons/first.json');
  })
  .service('Getdata', function Myservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log("Inside get data");
    return $http.get('lib/jsons/second.json');
  })
  .service('GetChart', function Myservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log("Inside get chart");
    return {funnelChart: function(container){
      var chartInstance = function(container,values){
      // start function
      container.highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Story Status',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%',
                colors:['rgb(0, 178, 255)', 'rgb(226, 249, 23)', 'rgb(73, 224, 21)', 'rgb(255, 200, 100)', 'rgb(66, 190, 72)', 'rgb(217, 83, 79)']
                
                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Stories',
            data: [
                ['In process',   45],
                ['Done',       40],
                ['PO Accepted/ Rejected', 17],
                ['Client Accepted/ Rejected',    19],
                ['Need Discussion',    8],
                ['Red Flag', 5]
            ]
        }]
    });

    // end function
      }; 
      return chartInstance;
    }};
  });
