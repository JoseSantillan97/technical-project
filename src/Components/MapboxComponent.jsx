import React, {Component} from "react";
import mapboxgl, {Map, Marker} from "mapbox-gl";

class MapboxComponent extends Component{

	mapDiv = React.createRef();
	state = {
		data: []
	}
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapDiv.current, // container ID
			style: 'mapbox://styles/mapbox/satellite-v9', // style URL
			center: [
				-89.9636667,
				21.1904167,
				], // starting position [lng, lat]
			zoom: 5.2, // starting zoom
			projection: 'mercator', // display the map as a 3D globe
			compact: true,
			})
			.addControl(new mapboxgl.AttributionControl({
				customAttribution: 'Map design by me'
			}));
			const marker = new mapboxgl.Marker()
				.setLngLat([-89.9636667,
					21.1904167,])
				.addTo(map);
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
				<div ref={ this.mapDiv }
					style={{
						backgroundColor: 'green',
						height: 600,
						width: '100%'
					}}></div>

				{
					this.props.projects && this.props.projects.map(park => (
						<Marker
						key={park.id}
						latitude={park.geometry.coordinates[0]}
						longitude={park.geometry.coordinates[1]}
						></Marker>
					))
				}
			</div>
		)
	}
}

export default MapboxComponent