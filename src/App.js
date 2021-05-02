import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData, prettyPrintStat } from "./util";
import LineGraph from './LineGraph';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes/Themes';
import "leaflet/dist/leaflet.css";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 12.8797, lng: 121.7740 });
  const [mapZoom, setMapZoom] = useState(5);
  const [casesType, setCasesType] = useState("cases");
  const [mapCountries, setMapCountries] = useState([]);
  const [theme] = useState("dark");
 
  
  //RELOADS DEFAULT = Worldwide
  useEffect(()=> {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, []);
  
  useEffect(() =>{ 
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries").then((response) => response.json())
      .then((data) => {
        // countries returns specific data from the API
        const countries = data.map((country) => (
          {
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
            flag: country.countryInfo.flag
          }));
          
          let sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
      });
    };
    getCountriesData();
  }, []);
  
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    
    const url = countryCode === 'worldwide' 
    ? 'https://disease.sh/v3/covid-19/all' 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      // sets current country selected to dropdown
      setCountry(countryCode);
      
      // All data
      setCountryInfo(data);
      
      // Set default worldwide
      countryCode === "worldwide"
      ? setMapCenter([12.8797, 121.7740])
      // Change map location
      : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      // Set Map Zoom
      setMapZoom(5);
    })
  };
  
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light")
  // }
  
  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;
  
  return (
<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  <GlobalStyles/>
  <Navbar/>
    <StyledApp>
      <StyledApp className="app">
        <StyledApp className="app__left">
          <StyledApp className="app__header">
            {/* <h1>COVID-19 TRACKER 2021</h1> */}
            <StyledApp className="app__dropdown">
              <FormControl >
                <Select 
                variant="outlined" 
                onChange={onCountryChange} 
                value={country}
                >
                  {/* Default placeholder worldwide */}
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                  {/* Loop through all the countries and dropdown list of the options */}
                  {
                    countries.map(country => (
                      <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              </StyledApp>
            </StyledApp>
            
            {/* Header */}
            <StyledApp className="app__stats">
              {/* InfoBoxes title="Covid cases" */}
            <InfoBox
              isRed
              active={casesType === "cases"}
              onClick= {e => setCasesType('cases')} 
              title="Coronavirus Cases" 
              cases={prettyPrintStat(countryInfo.todayCases)} 
              total={prettyPrintStat(countryInfo.cases)} />
              
              {/* InfoBoxes title="Covid recoveries*/}
            <InfoBox
              active={casesType === "recovered"}
              onClick= {e => setCasesType('recovered')} 
              title="Recovered" 
              cases={prettyPrintStat(countryInfo.todayRecovered)} 
              total={prettyPrintStat(countryInfo.recovered)} />
              
              {/* InfoBoxes Deaths */}
            <InfoBox
              isGrey
              active={casesType === "deaths"}
              onClick= {e => setCasesType('deaths')} 
              title="Deaths" 
              cases={prettyPrintStat(countryInfo.todayDeaths)} 
              total={prettyPrintStat(countryInfo.deaths)} />
              
            </StyledApp>
            {/* Map */}
            <Map 
            countries={mapCountries} 
            center={mapCenter} 
            zoom={mapZoom} 
            casesType={casesType}
            />
        </StyledApp>
        <Card className="app__right">
          <CardContent>
          <StyledApp className="app__information">
            {/* Table */}
            <h3>Live Cases by Country</h3>
            <Table countries={tableData}/>
            {/* Graph */}
            <h3 className="app_graphTitle" align="center">WorldWide new {casesType}</h3>
            <LineGraph className="app__graph" casesType={casesType} />
            </StyledApp>
          </CardContent>
        </Card>
      </StyledApp>
      <div className="Footer">
        <Footer/>
      </div>
      </StyledApp>
  </ThemeProvider>
  );
}

export default App;
