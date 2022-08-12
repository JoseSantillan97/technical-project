import React, { Component } from "react";
import styles from './FooterComponent.module.css'

const images = require.context('./../../images', true);

class FooterComponent extends Component {
	render() {
		return (
			<div>
				<footer>
					<section className={styles['footer-container']}>
						<article>
							<div>
								<img src={images('./landrada-desarrollos.svg')} alt="Landrada Desarrollos logo" />
							</div>
							<p className={styles['footer-sec1-text']}>Somos una organización de inversionistas especializados en la comercialización de desarrollos y proyectos inmobiliarios al sur de la República Mexicana, en Yucatán y Quintana Roo.</p>
							<div className={styles['footer-sec1-img']}>
								<img src={images('./linkedin.svg')} alt="" />
								<img src={images('./instagram.svg')} alt="" />
								<img src={images('./facebook.svg')} alt="" />
								<img src={images('./tik-tok.svg')} alt="" />
								<img src={images('./youtube.svg')} alt="" />
							</div>
						</article>
						<article className={styles['footer-navegacion']}>
							<p>Navegación</p>
							<ul>
								<li>Inicio</li>
								<li>Desarrollos</li>
								<li>Familia Landrada</li>
								<li>Únete a Landrada</li>
								<li>Blog</li>
							</ul>
						</article>
						<article className={styles['footer-desarrollos']}>
							<p>Desarrollos</p>
							<ul>
								<li>Lagunas Kuche</li>
								<li>Puerto Madero</li>
								<li>Costa Flamingo</li>
								<li>El Cielo</li>
								<li>Halia</li>
								<li>Ayla</li>
								<li>Amaia</li>
							</ul>
						</article>
						<article className={styles['footer-contacto']}>
							<p><img src={images('./telefono.svg')} alt="" />  &nbsp;&nbsp;(MEX) +52 (1) 998 401 1444</p>
							<p><img src={images('./email.svg')} alt="" />  &nbsp;&nbsp;contacto@landrada.mx</p>
							<p><img src={images('./pin-ubicacion.svg')} alt="" />  &nbsp;&nbsp;SM15 M2 L8 Farallon, Av. Tulum y Acanceh, C.P. 77505, Cancún, Quintana Roo, México</p>
						</article>
					</section>
					<section className={styles.rights}>
						<p>&#169; Landrada Desarrollo 2022. Todos los derechos reservados</p>
						<p>Política de provacidad   Política de compra</p>
						<p>info@landrada.mx</p>
					</section>
				</footer>
			</div>
		)
	}
}

export default FooterComponent