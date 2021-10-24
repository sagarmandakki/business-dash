import React from 'react';
import Plot from 'react-plotly.js';

export function BarChart (props) {
  const {data: {x, y}, isSidebarCollapsed} = props

  const widthOfChartWrapper = document.documentElement.clientWidth * 0.85

  let widthOfChartContainer = (widthOfChartWrapper - (20*2) - 10)/2
  widthOfChartContainer += isSidebarCollapsed ? document.documentElement.clientWidth*0.05 : -document.documentElement.clientWidth*0.05

    return (
      <Plot
        data={[
          {x, y, mode: 'lines+markers', marker: {color: 'orange'}, name: 'Line'},
          {x, y, marker: {color: '#0688f7'}, type: 'bar', name: 'Bar'},
        ]}
        layout={ {height: 350, width: widthOfChartContainer, title: 'Population Graph', showlegend: false, responsive: true} }
      />
    );
}
