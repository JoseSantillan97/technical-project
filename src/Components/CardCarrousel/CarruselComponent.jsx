import React, { useState, useEffect } from "react";
import CardCarousel from './CardCarousel'
import Slider from "react-slick";
import styles from './CardCarousel.module.css'

const CarruselComponent = ({projects}) => {
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 768px)").matches
	  )
	  useEffect(() => {
		window
		.matchMedia("(max-width: 700px)")
		.addEventListener('change', e => setMatches( e.matches ));
	  }, []);
	var settings = {
		dots: matches ? true : false,
		infinite: true,
		speed: 500,
		slidesToShow: matches ? 2 : 4,
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
									<CardCarousel className='' project={project}></CardCarousel>
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