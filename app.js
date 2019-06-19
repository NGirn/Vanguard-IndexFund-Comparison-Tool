function calculate() {
  //VGSLX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "10.53";
  result = document.getElementById("result-VGSLX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);
  VGSLXResult = A.toFixed(2);


  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML =
    "Total amount you will have after the investment period £" + A.toFixed(2);

  result.innerHTML +=
    "<br>Total profit over the investment period £" +
    (A.toFixed(2) - p).toFixed(2);

  //VFIAX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "6.17";
  result = document.getElementById("result-VFIAX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);
  VFIAXResult = A.toFixed(2);

  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML =
    "Total estimated amount you will have after the investment period £" +
    A.toFixed(2);

  result.innerHTML +=
    "<br>Total estimated profit over the investment period £" +
    (A.toFixed(2) - p).toFixed(2);

  //VBTLX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "4.07";
  result = document.getElementById("result-VBTLX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);
  VBTLXResult = A.toFixed(2);

  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML =
    "Total amount you will have after the investment period £" + A.toFixed(2);

  result.innerHTML +=
    "<br>Total profit over the investment period £" +
    (A.toFixed(2) - p).toFixed(2);

  let myChart = document.getElementById("myChart").getContext("2d");

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myChart, {
    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['VGSLX', 'VFIAX', 'VBTLX'],
      datasets:[{
        label:'Fund Returns',
        data:[
          VGSLXResult,
          VFIAXResult,
          VBTLXResult
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:'Index Fund Returns',
        fontSize:25
      },
      legend:{
        display:true,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
  });


}
