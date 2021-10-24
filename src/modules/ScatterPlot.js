import React from 'react';
import Plot from 'react-plotly.js';

export function ScatterPlot (props) {
  const {data: {y}, isSidebarCollapsed} = props

  const widthOfChartWrapper = document.documentElement.clientWidth * 0.80
  let widthOfChartContainer = (widthOfChartWrapper - (20*2) - 10)/2
  widthOfChartContainer += isSidebarCollapsed ? document.documentElement.clientWidth*0.05 : -document.documentElement.clientWidth*0.05

    return (
      <Plot
        data={[
          {
            y,
            mode: 'markers',
            marker: {
              size: 15,
              color: [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
            }
          }
        ]}
        layout={ {height: 350, width: widthOfChartContainer, title: 'Population Graph', showlegend: false, responsive: true} }
      />
    );
}
