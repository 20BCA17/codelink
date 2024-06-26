import React from 'react'

const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      },
    },
    series: [
      {
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  }
  
  if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("area-chart"), options);
    chart.render();
  }
  
function Chart2() {
  return (
    <div>
      
<div className="max-w-sm w-full bg-white rounded-lg shadow light:bg-gray-800 p-4 md:p-6">
<div className="flex justify-between">
  <div>
    <h5 className="leading-none text-3xl font-bold text-gray-900 light:text-white pb-2">6,438</h5>
    <p className="text-base font-normal text-gray-500 light:text-gray-400">Visitors this  week</p>
  </div>
  <div
    className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 light:text-green-500 text-center">
    4.3%
    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
    </svg>
  </div>
</div>
<div id="area-chart"></div>
<div className="grid grid-cols-1 items-center border-gray-200 border-t light:border-gray-700 justify-between">
  <div className="flex justify-between items-center pt-5">
   

    <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 light:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 light:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Yesterday</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Today</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 7 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 30 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 90 days</a>
          </li>
        </ul>
    </div>
    
  </div>
</div>
</div>

    </div>
  )
}

export default Chart2
