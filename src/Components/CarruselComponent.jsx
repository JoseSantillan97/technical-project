import React, { useState, useEffect } from "react";
import CardCarousel from './CardCarousel'
import Slider from "react-slick";

const CarruselComponent = () => {
	var [projects, setProjects] = useState(null);

	useEffect(() =>{
		const getProjects = () => {
			fetch('https://challenge.devkoore.com/api/projects')
			.then(response => response.json())
			.then(res => setProjects(res.projects))
		}
		getProjects()
	}, [])

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};

	return (
		<div className="my-4" style={{width: '88%',margin:'auto'}}>
			<div className="row">
				<Slider {...settings}>
					{
						projects && projects.map((project) => {
							return(
								<div key={project.id}>
									<CardCarousel project={project}></CardCarousel>
								</div>
							)
						})
					}
					<span style={{display: 'none', visibility: 'hidden', width: '0px!important'}}></span>
				</Slider>
			</div>
		</div>
	)

}

export default CarruselComponent