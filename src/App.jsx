import React, {useState, useEffect} from 'react';
import MapboxComponent from './Components/Mapbox/MapboxComponent'
import MainContentComponent from './Components/MainPage/MainContentComponent';
import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';

const images = require.context('./images', true);

function App() {
  var [projects, setProjects] = useState(null);

	useEffect(() =>{
		const getProjects = () => {
			fetch('https://challenge.devkoore.com/api/projects')
			.then(response => response.json())
			.then(res => setProjects(res.projects))
		}
		getProjects()
	}, [])
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MapboxComponent projects={projects}></MapboxComponent>
      <MainContentComponent projects={projects}></MainContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
