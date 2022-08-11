import React, {Component} from "react";
// import mapboxgl, {Map} from "mapbox-gl";
import Map, { Marker, Popup } from 'react-map-gl';
import CardMapComponent from "./MapCard/CardMapComponent";

const images = require.context('./../images', true);

class MapboxComponent extends Component{
	
	// mapDiv = React.createRef();
	state = {
		data: [],
		viewport: {
			latitude: 21.1904167,
			longitude: -89.9636667,
			zoom: 5.1,
		},
		selectedProject: "",
		setShowPopup: false
	}
	setShowPopup(event){
		this.setState({setShowPopup: event})
	}
	render(){
		return(
			<div>
					<Map
					style={{
						backgroundColor: 'green',
						height: 600,
						width: '100%'
					}}
					{...this.state.viewport}
					mapboxApiAccessToken="pk.eyJ1Ijoiam9zZXNhbnRpbGxhbjk3IiwiYSI6ImNsNmk1ajBmczBlcHEza3ByemFqdWplbDMifQ.Sm5ztLEbYcviwqRqG6Kg5w"
					mapStyle="mapbox://styles/mapbox/satellite-v9"
					// onViewportChange={viewport => {
					// 	this.setState({
					// 		viewport: viewport
					// 	})
					// }}
					>
						{
							this.props.projects && this.props.projects.map(project => (
								<Marker
									key={project.id}
									latitude={project.geometry.coordinates[1]}
									longitude={project.geometry.coordinates[0]}
								>
									<button
									style={{border: 'none', backgroundColor: 'transparent'}}
									onClick={event => {
										event.preventDefault();
										this.setState({
											selectedProject: project,
											viewport: {
												latitude: project.geometry.coordinates[1],
												longitude: project.geometry.coordinates[0],
											}
										})
									}}
									>
									{this.state.selectedProject && this.state.selectedProject.id === project.id ? (
										<div style={{position: 'relative'}}>
									<CardMapComponent project={this.state.selectedProject}>
									<div key={this.state.selectedProject.id}>
										<Popup
										latitude={this.state.selectedProject.geometry.coordinates[1]}
										longitude={this.state.selectedProject.geometry.coordinates[0]}
										></Popup>
									</div>
									</CardMapComponent>
										</div>
									) : null}
									<img style={{height:"22px", width:"22px", display: `${this.state.selectedProject.id === project.id} ? 'inline-block' : "none"`}} src={images('./pin-map.svg')} alt="marker" />
									</button>
								</Marker>
							))
						}
					</Map>
			</div>
		)
	}
}

export default MapboxComponent