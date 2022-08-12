import React, { Component } from "react";
import styles from './HeaderComponent.module.css'
import {Routes, Route, Link} from 'react-router-dom';

const images = require.context('./../../images', true);

class HeaderComponent extends Component {
	render() {
		return (
			<div>
				<header>
					<ul>
						<li className={styles['navbar-logo']}>
							<img src={images('./logo-blanco.svg')} alt="" height="400px" width="400px" />
						</li>
					</ul>
					<ul className={styles['landrada-list']}>
						<li>
							<Link className={styles['landrada-list']} to="/">Inicio</Link>
						</li>
						<li><a href="#">Desarrollos</a></li>
						<li><a href="#">Herramientas</a></li>
						<li><a href="#">Únete</a></li>
						<li><a href="#">Familia Landrada</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Es </a></li>
					</ul>
				</header>
			</div>
		)
	}
}

export default HeaderComponent