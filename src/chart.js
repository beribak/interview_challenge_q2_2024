import ApexCharts from 'apexcharts'

const container = document.querySelector(".container")

const url = "http://localhost:8080/data.json"
let counter = 1

fetch(url)
.then(data => data.json())
.then((data) => {
  data.profiles.forEach((profile) => {
    let values = []
    let labels = []

    profile.data.forEach((item) => {
      values.push(item.value)
      labels.push(item.label)
    })

    var options = {
        series: values,
        chart: {
        type: 'donut',
      },
      labels: labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    container.insertAdjacentHTML("beforeend", `<div id="btn${counter}">Clone</div>
                                              <div id="chart${counter}" style="width: 25%;">
                                                
                                              </div>`)
    
    let btn = document.querySelector(`#btn${counter}`)
    
    btn.addEventListener("click", () => {
      container.insertAdjacentHTML("beforeend", `<div id="chart${counter}" style="width: 25%;">
                                                  
                                                </div>`)
      var chart = new ApexCharts(document.querySelector(`#chart${counter}`), options);
      chart.render();
      counter++
      btn.style.display = "none";
    })

    var chart = new ApexCharts(document.querySelector(`#chart${counter}`), options);
    chart.render();

    counter++
  })

})
