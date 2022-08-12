import React, { Component } from "react";
import styles from './MainContentComponent.module.css'
import CarruselComponent from "./../../Components/CardCarrousel/CarruselComponent";

const images = require.context('./../../images', true);

class MainContentComponent extends Component {
	render() {
		return (
			<div>
				<section className={styles['invest-oportunities']}>
					<img className={styles['invest-image1']} src={images('./flor2.svg')} alt="" />
					<img className={styles['invest-image2']} src={images('./flor1.svg')} alt="" />
					<img className={styles['invest-image3']} src={images('./flor3.svg')} alt="" />
					<img className={styles['invest-image4']} src={images('./flor4.svg')} alt="" />
					<h1>Oportunidades de invesión confiables</h1>
					<p className={styles['invest-paragraph']}>Te ayudamos a encontrar el desarrollo que más se adapte a tus objetivos comerciales y/o patrimoniales</p>
					<CarruselComponent projects={this.props.projects}></CarruselComponent>
					<article className={styles['why-invest']}>
						<div className={styles['invest-img']}>
							<div className={styles['invest-container-image']}>
								<img src={images('./why-invest.svg')} alt="why invest in Landrada?" />
							</div>
						</div>
						<div className={styles['invest-info']}>
							<p className={styles['invest-info-title']}>¿Por qué invertir en tierra?</p>
							<p className={styles['invest-info-paragraph1']}>En Landrada Desarrollos aseguras el éxito de tu inversión en la tierra</p>
							<p className={styles['invest-info-paragraph2']}>Nuestras estrategias y análisis intensivos sobre las características de nuestros desarrollos te brindan la certeza de que tu inversión te dará rendimientos del 25% anual en promedio.</p>
							<p className={styles['invest-info-paragraph3']}>¿Dejarás pasar esta oportunidad?</p>
							<button className={styles['invest-info-button']}>Comenzar a invertir</button>
						</div>
					</article>
				</section>
				<section className={styles['join-landrada']}>
					<p className={styles['join-title']}>Únete a Landrada</p>
					<p className={styles['join-paragraph1']}>En Landrada Desarrollos, otorgamos a nuestros inversionistas y equipo de asesores, los mejores beneficios y ganancias para conseguir la libertad financiera que están buscando</p>
					<article className={styles['join-form']}>
						<div className={styles['landrada-img']}>
							<img className={styles['join-image']} src={images('./join-landrada.svg')} alt="" />
							<img className={styles['form-img1']} src={images('./form-decoration.svg')} alt="" />
							<img className={styles['form-img2']} src={images('./form-decoration3.svg')} alt="" />
							<p className={styles['join-paragraph2']}>
								<img className={styles['join-logo']} src={images('./little-logo1.svg')} alt="" />
								Te compartimos cómo estamos ayudando a nuestros inversionistas a encontrar los mejores Desarrollos y terrenos de inversión, alramente rentables.</p>
						</div>
						<div className={styles['landrada-form']}>
							<p className={styles['form-title']}>¡Tu inversión inteligente <p className={styles['form-title-g']}>está a solo un clic de distancia!</p></p>
							<div className={styles['form-first-container']}>
								<label className={styles['form-first']} htmlFor="invest">
									<input type="checkbox" name="" id="invest" value='' />
									Quiero ser inversionista
									<span className={styles.checkmark}></span>
								</label>
								<label className={styles['form-first']} htmlFor="adviser">
									<input type="checkbox" name="" id="adviser" value='' />
									Quiero ser asesor
									<span className={styles.checkmark}></span>
								</label>
							</div>
							<div className={styles['form-second-container']}>
								<label className={styles['form-second']} htmlFor="">
									<p className={styles['form-second-text']}>Tu nombre completo</p>
									<input type="text" name="" id="" />
								</label>
								<label className={styles['form-second']} htmlFor="">
									<p className={styles['form-second-text']}>Tu correo electrónico</p>
									<input type="email" name="" id="" />
								</label>
								<label className={styles['form-second']} htmlFor="">
									<p className={styles['form-second-text']}>Tu número de telefono</p>
									<input type="tel" name="" id="" />
								</label>
							</div>
							<button className={styles['form-button']}>Enviar</button>
						</div>
					</article>
				</section>
			</div>
		)
	}
}

export default MainContentComponent