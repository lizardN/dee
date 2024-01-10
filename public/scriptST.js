var labels1=[]
var labels4=[]
var   passLabel=[]
var passLabel1=[]
var  passLabel2=[]
var  passLabel3=[]






$.ajax({
   


    dataType: 'json',
    type: 'POST',
    url: "/student/studentPassChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].firstTerm)
        labels1.push(data[i].firstAvgMark)
        labels1.push(data[i].secondTerm)
        labels1.push(data[i].secondAvgMark)
        labels1.push(data[i].thirdTerm)
        labels1.push(data[i].thirdAvgMark)
       
   
     }

     let labels2 =  ['1st Term PassRate', 'AvgMark', '2nd Term PassRate','AvgMark', '3rd Term PassRate', 'Avg Mark'];


//contractQty
var element = document.getElementById("myChart");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Exam Pass %',
        data: labels1,
        stepSize: 1,  
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        },
                  
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labels2,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
          
            formatter: function (val) {
                return parseInt(val)  + "%"  
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val + "%"
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});





















$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/student/studentPassChart2",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels4.push(data[i].firstTerm)
        labels4.push(data[i].firstAvgMark)
        labels4.push(data[i].secondTerm)
        labels4.push(data[i].secondAvgMark)
        labels4.push(data[i].thirdTerm)
        labels4.push(data[i].thirdAvgMark)
   
     }

     let labels5 =   ['1st Term PassRate', 'AvgMark', '2nd Term PassRate', 'AvgMark', '3rd Term PassRate', 'Avg Mark'];


//contractQty
var element = document.getElementById("myChart1");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Class Tests Pass %',
        data: labels4
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labels5,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val) + "%"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val + "%"
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});


//


$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/student/subChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        passLabel2.push(data[i].firstTerm)
        passLabel3.push(data[i].subject)
    
 
   
       
   
     }

    // let passLabel3 = ['1st Term ',  '2nd Term', '3rd Term '];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChart5");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Exam Pass Rate',
        data:  passLabel2
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:passLabel3,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val) + "%"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val + "%"
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});

//Class Rate - passRateX

var buttonX = document.getElementById('myChart6tab').addEventListener('click', function(){
let passLabelX=[]


    $.ajax({
   
        dataType: 'json',
        type: 'POST',
        url: "/student/subChartX",
        success: function(data) {
 
         for (var i = 0;i<data.length;i++){
            passLabelX.push(data[i].firstTerm)

            passLabelX.push(data[i].secondTerm)
         
            passLabelX.push(data[i].thirdTerm)
           
       
         }
    
         let passLabel1X =  ['1st Term ',  '2nd Term', '3rd Term '];
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
   
    var element = document.getElementById("myChart6");
    var height = parseInt(KTUtil.css(element, 'height'));
    var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
    var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
    
    var options = {
        series: [{
            name: 'Class Pass Rate',
            data:  passLabelX
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false
            }              
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['28%'],
                borderRadius: 5,                     
                dataLabels: {
                    position: "top" // top, center, bottom
                },
                startingShape: 'flat'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true, 
            offsetY: -28,                                             
            style: {
                fontSize: '13px',
                colors: [labelColor]
            }                         
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories:passLabel1X,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                }                    
            },
            crosshairs: {
                fill: {         
                    gradient: {         
                        opacityFrom: 0,
                        opacityTo: 0
                    }
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                },
                formatter: function (val) {
                    return  parseInt(val) + "%"
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return  val + "%"
                }
            }
        },
        colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };
    
    var chart = new ApexCharts(element, options);  
    
    // Set timeout to properly get the parent elements width
    setTimeout(function() {
        chart.render();   
    }, 200); 
    
    
    
    
    
    
        
        }
       
    });
    



    });

