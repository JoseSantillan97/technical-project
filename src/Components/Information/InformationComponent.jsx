import React from 'react'
import HeaderComponent from './../Header/HeaderComponent';
import FooterComponent from './../Footer/FooterComponent';
import styles from './InformationComponent.module.css'
import { useLocation } from 'react-router-dom'

const images = require.context('./../../images', true);

const InformationComponent = () => {
	
const location = useLocation()

	return (
		<div>
			<HeaderComponent></HeaderComponent>
			<div className={styles.information}>
				<div className={styles['information-container']}>
					<div>
						<img className={styles['informacion-image']} src={location.state.project.image} alt="" />
					</div>
					<section className={styles['information-image-section']}>
						<div>
							<section className={styles["information-sec1"]}>
								<img src={images('./chart.svg')} alt="" />
								<p className={styles['sec1-percentage']}>&nbsp;48%</p>
								<p className={styles['sec1-ventas']}>&nbsp;&nbsp;de ventas</p>
								<progress id="file" value='48' max="100">this.props.project.salePercentage</progress>
							</section>
							<section className={styles['information-sec2']}>
								<div className={styles['sec2-image']}>
									<img src={images('./chart.svg')} alt="" />
								</div>
								<p className={styles['sec2-title']}>{location.state.project.name}</p>
							</section>
							<section className={styles['information-sec3']}>
								<p className={styles['sec3-text']}>{location.state.project.slogan}</p>
								<p className={styles['sec3-description']}>{location.state.project.description}</p>
							</section>
							<section className={styles['information-sec4']}>
								<img src={images('./ubicacion.svg')} alt="" />
								<p className={styles['sec4-address']}>{location.state.project.address}</p>
								<button className={styles['sec4-button']}>Comienza a invertir</button>
							</section>
						</div>
						<div></div>
					</section>
				</div>
				<section className={styles.enjoy}>
					<div className={styles['enjoy-container']}>
						<p className={styles['enjoy-title']}>Podrás disfrutar de...</p>
						<p className={styles['enjoy-text']}>Ayudamos a nuestros inversionistas a encontrar los mejores Desarrollos y terrenos de inversión, altamente rentables</p>
						<p className={styles['enjoy-amenities']}>Amenidades</p>
						{
							location.state.project && location.state.project.amenities.map((amenity, index) => (
								<p key={index} className={styles['enjoy-amenity']}>{amenity}</p>
							))
						}
					</div>
					<div className={styles.images}>
						<div className={styles['images-sec1']}>
							<img className={styles['imageh']} src={location.state.project.gallery[0]} alt="" />
							<img className={styles['imagev']} src={location.state.project.gallery[1]} alt="" />
							<img className={styles['imagev']} src={location.state.project.gallery[2]} alt="" />
						</div>
						<div className={styles['images-sec2']}>
							<img className={styles['imagev']} src={location.state.project.gallery[3]} alt="" />
							<img className={styles['imagev']} src={location.state.project.gallery[4]} alt="" />
							<img className={styles['imageh']} src={location.state.project.gallery[5]} alt="" />
						</div>
					</div>
					<div className={styles.invest}>
						<p className={styles['invest-title']}>¿Dejarás pasar esta oportunidad?</p>
						<div className={styles['invest-container']}>
							<div className={styles['invest-container-text']}>
								<img className={styles['invest-image']} src={images('./grafica-info.svg')} alt="" />
								<span className={styles['invest-text']}>Te ofrecemos oportunidades de inversion confiables</span>
							</div>
							<div className={styles['invest-button-container']}>
								<button className={styles['invest-button']}>Comenzar a invertir</button>
							</div>
						</div>
					</div>
				</section>
			</div>
			<FooterComponent></FooterComponent>
		</div>
	)
}

export default InformationComponent