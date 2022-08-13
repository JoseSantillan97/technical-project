import React from "react";
import styles from './CardCarousel.module.css'
import { Link } from 'react-router-dom';

const images = require.context('./../../images', true);

const CardCarousel = ({ project }) => {
	return (
		<div className={styles['card-container']}>
			<div className={styles['card-carousel']}>
				<p className={styles['card-address']}>
					<span className={styles['card-pin']}><img src={images('./pin-verde.svg')} alt="" /></span>
					{project.address}
				</p>
				<img className={styles['card-image']} src={project.image} alt="..." />
				<div className={styles['card-information']}>
					<div className={styles['card-information-first-section']}>
						<div className={styles['info-percentage']}>
							<img src={images('./chart.svg')} alt="Sale Percentage" />
							<p>&nbsp;{project.salePercentage}% de ventas</p>
							<progress id="file" value={project.salePercentage} max="100">{project.salePercentage}</progress>
						</div>
						<div className={styles['info-lotes']}>
							<p>Ver lotes &gt;</p>
						</div>
					</div>
					<div className={styles['card-information-second-section']}>
						<div className={styles['info-paragraphs']}>
							<p className={styles['info-paragraph1']}>Invierte ahora y</p>
							<p className={styles['info-paragraph2']}>Paga online</p>
						</div>
						<div className={styles['info-button']} href="#">
							<button>
								<Link
									className={styles['card-link']}
									to='/informacion'
									state={{ project: project }}>
									conoce más
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className={styles['card-information-title']}>
					<div className={styles['card-title-slogan']}>
						<p className={styles['card-slogan']}>{project.name}</p>
						<p className={styles['card-title']}>{project.slogan}</p>
					</div>
					<div className={styles['card-logo']}>
						<img src={project.logo} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardCarousel