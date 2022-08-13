import React, {Component} from 'react'
import styles from './CardMapComponent.module.css'
import { Link } from 'react-router-dom';

const images = require.context('./../../images', true);

class CardMapComponent extends Component {
	render(){
		return(
			<div>
				<div
					className={styles['card-button']}
					onClick={ () => {this.props.onClose(false)} }
				>
					<span>X</span>
				</div>
				<div className={styles['card-container']}>
				<img src={this.props.project.image} alt="" />
				<div className={styles['info-container']}>
					<section className={styles['info-sec1']}>
						<img src={this.props.project.logo} alt="" />
					</section>
					<section className={styles['info-sec2']}>
						<div>
							<img src={images('./chart.svg')} alt="" />
							<p className={styles['sec2-text']}>&nbsp;{this.props.project.salePercentage}% <span className={styles['sec2-ventas']}>de ventas</span></p>
							<progress id="file" value={this.props.project.salePercentage} max="100">{this.props.project.salePercentage}</progress>
						</div>
					</section>
						<hr className={styles['section-hr']} />
						<hr className={styles['section-hr']} />
						<hr className={styles['section-hr']} />
					<section className={styles['info-sec3']}>
					{
						this.props.project && this.props.project.amenities.map((element, index) => (
							<p key={index} className={styles['sec3-text']}>{element}</p>
							))
						}
					</section>
						<hr className={styles['section-hr']} />
						<hr className={styles['section-hr']} />
						<hr className={styles['section-hr']} />
					<section className={styles['info-sec4']}>
						<p className={styles['sec4-name']}>{this.props.project.name}</p>
						<img className={styles['sec4-img']} src={images('./ubicacion.svg')} alt="" />&nbsp;&nbsp;<p className={styles['sec4-address']}>{this.props.project.address}</p>
					</section>
					<section className={styles['info-sec5']}>
						<p className={styles['sec5-slogan']}>{this.props.project.slogan}</p>
						<p className={styles['sec5-desc']}>{this.props.project.description}</p>
					</section>
					<section className={styles['info-sec6']}>
						<div className={styles['sec6-btn']}>
							<Link
								to='informacion'
								state={{ project: this.props.project }}
								>conoce más &nbsp;&nbsp;&nbsp; &gt;
							</Link>
						</div>
					</section>
				</div>
				</div>
			</div>
		)
	}
}

export default CardMapComponent