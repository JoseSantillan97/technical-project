import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker, Popup } from 'react-map-gl';
import CardMapComponent from "./MapCard/CardMapComponent";

const images = require.context('./../images', true);


class MapboxComponent extends Component {
	constructor(props){
		super(props)
		this.myRef = React.createRef();
		this.state = {
			data: [],
			viewport: {
				latitude: 21.1904167,
				longitude: -89.9636667,
				zoom: 5.1,
			},
			selectedProject: "",
			open: false
		}
	}
	
	onClosePop = (a) => {
		// this.setState({selectedProject: "",open: false})
		setTimeout(() =>{
			console.log('info', this.setState({selectedProject: '',open: false}) ,a)
		}, 0)
	};
	render() {
		return (
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
									style={{ border: 'none', backgroundColor: 'transparent' }}
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
										<div ref={this.myRef} style={{ position: 'relative' }}>
											<CardMapComponent key={project.id} onClose={this.onClosePop} project={this.state.selectedProject}>
												<div key={this.state.selectedProject.id}>
													<Popup
														{...this.state.open = true}
														latitude={this.state.selectedProject.geometry.coordinates[1]}
														longitude={this.state.selectedProject.geometry.coordinates[0]}
														></Popup>
												</div>
											</CardMapComponent>
										</div>
									) : null}
									{
										!this.state.open && (
											<img style={{ height: "22px", width: "22px", display: `${!this.state.selectedProject} ? 'none' : "none"`}} src={images('./pin-map.svg')} alt="marker" />
										)
									}
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