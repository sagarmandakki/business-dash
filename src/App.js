import { useState } from 'react';
import preloader from './styles/images/preloader.gif'
import './App.css';
import './styles/App.scss'

import {useQuery, gql} from "@apollo/client"
import MTable from './modules/Table';
import Sidebar from './modules/Sidebar';
import { BarChart } from './modules/BarChart';
import { ScatterPlot } from './modules/ScatterPlot';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import _ from 'lodash';

function App() {
  const [minPopulationLimit, setMinPopulationLimit] = useState(0)
  const [minVatRate, setMinVatRate] = useState(0)
  console.log("minVatRate", minVatRate);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const minVatRateValue = minVatRate || 0

  const Q1 = gql`
    {
      countries(limit: 25, where: {population: {gt: ${minPopulationLimit}}, vatRate: {gt: ${minVatRateValue}}}) {
        name
        population
        vatRate
        alpha3Code
        id
        capital {
          name
        }
      }
    }
  `

  const { data, loading, error } = useQuery(Q1)
  if (error) return <pre>{error.message}</pre>

  let barChartData
  let scatterPlotData

  if (!loading) {
    barChartData = {
      x: _.map(data.countries, 'name'),
      y: _.map(data.countries, 'population')
    }
  
    scatterPlotData = {
      y: _.map(data.countries, 'population')
    }
  }

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100000000,
      label: '100000000',
    },
    {
      value: 250000000,
      label: '250000000',
    },
    {
      value: 500000000,
      label: '500000000',
    },
  ];

  function valuetext(value) {
    return value;
  }

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed': ''}`}>
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
      </div>

      <div className={`app-content ${isSidebarCollapsed ? 'sidebar-collapsed': ''}`}>
        <h1>Welcome to Countries App</h1>

        <Paper className='filters-wrapper'>
          <div><h3>Filters</h3></div>
          <hr />
          <div>
            <div>
              <Typography id="non-linear-slider" gutterBottom>
                Min Population: {minPopulationLimit}
              </Typography>
            </div>
            <Box sx={{ width: 500 }}>
              <Slider
                  value={minPopulationLimit}
                  aria-label="Custom marks"
                  id="population-slider"
                  min={100000}
                  max={500000000}
                  onChange={(e, newValue) => setMinPopulationLimit(newValue)}
                  valueLabelDisplay="auto"
                  marks={marks}
                  getAriaValueText={valuetext}
                />
            </Box>

            <div>

            <br />
            <br />
            <TextField
              id="vat-rate-input"
              label="Min Vat Rate"
              type="number"
              onChange={(e) => {
                setMinVatRate(e.target.value)
              }}
              value={minVatRate}
            />
            </div>
          </div>
        </Paper>


        {loading &&
          <div className="preloader-wrapper">
            <img width={50} src={preloader} alt="Loading" />
          </div>
        }
        {!loading &&
          <div id='result-section'>
            <Paper className="chart-wrapper">
              <div>
                <BarChart data={{...barChartData}} isSidebarCollapsed={isSidebarCollapsed}/>
              </div>
              <div>
                <ScatterPlot data={{...scatterPlotData}} isSidebarCollapsed={isSidebarCollapsed}/>
              </div>
            </Paper>

            <MTable data={data.countries}/>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
