import React, { useState, useEffect } from "react";
import CardCarousel from './CardCarousel'
import Slider from "react-slick";
import styles from './CardCarousel.module.css'

const images = require.context('./../../images', true);

const CarruselComponent = ({ projects }) => {
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 768px)").matches
	)
	useEffect(() => {
		window
			.matchMedia("(max-width: 700px)")
			.addEventListener('change', e => setMatches(e.matches));
	}, []);
	// var settings = {
	// 	dots: matches ? true : false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: matches ? 2 : 4,
	// 	slidesToScroll: 1
	// };

	return (
		<div className="my-4" style={{ width: '88%', margin: 'auto', maxWidth: 1600 }}>
			<div className="row">
				{/* <Slider className={styles.slider} {...settings}> */}

				<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
					<div className="carousel-inner">

						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="10000">
								<img src={images('./join-landrada.svg')} className="d-block w-100" alt='' />
							</div>
							<div className="carousel-item" data-bs-interval="2000">
								<img src={images('./join-landrada.svg')} className="d-block w-100" alt='' />
							</div>
							<div className="carousel-item">
								<img src={images('./join-landrada.svg')} className="d-block w-100" alt="..." />
							</div>
							{/* {
							projects && projects.map((project) => {
								return (
									<div key={project.id}>
										<CardCarousel className="carousel-item active" project={project}></CardCarousel>
									</div>
								)
							})
						} */}
</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>



					{/* <span style={{display: 'none', visibility: 'hidden', width: '0px!important'}}></span> */}
					{/* </Slider> */}
				</div>
			</div>
			)

}

			export default CarruselComponent