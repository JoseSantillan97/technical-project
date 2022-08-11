import React, {Component} from 'react'
import styles from './InformationComponent.module.css'

const images = require.context('./../../images', true);
class InformationComponent extends Component{
	render(){
		return(
			<div className={styles.information}>
				<img className={styles['informacion-image']} src={images('./flamingo.jpg')} alt="" />
				<section className={styles['information-image-section']}>
					<div>
						<section className={styles["information-sec1"]}>
							<img src={images('./chart.svg')} alt="" />
							<p className={styles['sec1-percentage']}>&nbsp;48%</p>
							<p className={styles['sec1-ventas']}>&nbsp;&nbsp;de ventas</p>
							<progress id="file" value='48' max="100">this.props.project.salePercentage</progress>
						</section>
						<section className="information-sec2">
							<div className={styles['sec2-image']}>
								<img src={images('./chart.svg')} alt="" />
							</div>
							<p className={styles['sec2-title']}>Costa Flamingo</p>
						</section>
						<section className="information-sec3">
							<p>A pie de la playa</p>
							<p>Es un desarrollo residencial exclusivo frente al mar y cercano a los maravillosos flamingos.</p>
						</section>
						<section className="information-sec4">
							<img src="" alt="" />
							<p>Francisco Umay, Tulum</p>
							<button>Comienza a invertir</button>
						</section>
					</div>
					<div></div>
				</section>
				<section className="enjoy">
					<div>
						<p>Podrás disfrutar de...</p>
						<p>Ayudamos a nuestros inversionistas a encontrar los mejores Desarrollos y terrenos de inversión, altamente rentables</p>
						<p>Amenidades</p>
					</div>
					<div className="images">
						<div></div>
						<div></div>
					</div>
					<div className="invest">
						<p>¿Dejarás pasar esta oportunidad?</p>
						<div>
							<img src="" alt="" />
							Te ofrecemos oportunidades de inversion confiables
						</div>
						<div>
							<button>Comenzar a invertir</button>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default InformationComponent