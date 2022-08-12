import React from "react";
import CardCarousel from './CardCarousel'
import Slider from "react-slick";
import styles from './CardCarousel.module.css'

const CarruselComponent = ({projects}) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};

	return (
		<div className="my-4" style={{width: '88%',margin:'auto',maxWidth: 1600}}>
			<div className="row">
				<Slider className={styles.slider} {...settings}>
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