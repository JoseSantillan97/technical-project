import React, {Component} from "react";
import mapboxgl, {Map} from "mapbox-gl";
import ReactMapGL, { Marker } from 'react-map-gl';

class MapboxComponent extends Component{

	// mapDiv = React.createRef();
	state = {
		data: [],
		viewport: {
			latitude: -89.9636667,
			longitude: 21.1904167,
			width: "100vw",
			height: "600px",
			zoom: 5.2,
		}
	}
	componentDidMount(){
		// const map = new mapboxgl.Map({
		// 	container: this.mapDiv.current, // container ID
		// 	style: 'mapbox://styles/mapbox/satellite-v9', // style URL
		// 	center: [
		// 		-89.9636667,
		// 		21.1904167,
		// 		], // starting position [lng, lat]
		// 	zoom: 5.2, // starting zoom
		// 	projection: 'mercator', // display the map as a 3D globe
		// 	compact: true,
		// 	})
		// 	.addControl(new mapboxgl.AttributionControl({
		// 		customAttribution: 'Map design by me'
		// 	}));
			// const marker = new mapboxgl.Marker()
			// 	.setLngLat([-89.9636667,
			// 		21.1904167,])
			// 	.addTo(map);
		// const getData = () =>{
		// 	fetch('https://challenge.devkoore.com/api/projects')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({data: data.projects}))
		// }
		// getData();
	}
	render(){
		return(
			<div>
				{/* <div ref={ this.mapDiv }
					style={{
						backgroundColor: 'green',
						height: 600,
						width: '100%'
					}}>
				</div> */}
					<ReactMapGL
					{...this.state.viewport}
					mapboxApiAccessToken='pk.eyJ1Ijoiam9zZXNhbnRpbGxhbjk3IiwiYSI6ImNsNmk2ZHQxcTBwcHAza241eW41c2RjeXcifQ.Iu-6vLIKN73IFe3_9RFtVA'
					mapStyle="mapbox://styles/mapbox/satellite-v9"
					onViewportChange={viewport => {
						this.setState({
							viewport: viewport
						})
					}}
					>
						{
							this.props.projects && this.props.projects.map(project => ( 
								<Marker
									key={project.id}
									latitude={project.geometry.coordinates[1]}
									longitude={project.geometry.coordinates[0]}
								></Marker>
							))
						}
					</ReactMapGL>
			</div>
		)
	}
}

export default MapboxComponent