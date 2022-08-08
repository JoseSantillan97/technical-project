import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import CarruselComponent from './Components/CarruselComponent'
import MapboxComponent from './Components/MapboxComponent'

const images = require.context('./images', true);

function App() {
  var [projects, setProjects] = useState(null);

	useEffect(() =>{
		const getProjects = () => {
			fetch('https://challenge.devkoore.com/api/projects')
			.then(response => response.json())
			.then(res => setProjects(res.projects))
		}
		getProjects()
	}, [])
  return (
    <div>
      <header>
        <ul>
          <li className={styles['navbar-logo']}>
            <img src={ images('./logo-blanco.svg') } alt="" height="400px" width="400px" />
          </li>
        </ul>
        <ul className={styles['landrada-list']}>
          <li>Inicio</li>
          <li>Desarrollos</li>
          <li>Herramientas</li>
          <li>Únete</li>
          <li>Familia Landrada</li>
          <li>Blog</li>
          <li>Es </li>
        </ul>
      </header>
      <section className={styles.main}>
        <div className={styles['image-container']}>
          <img src={ images('./main-image.png') } alt="" />
        </div>
      </section>
      <MapboxComponent projects={projects}></MapboxComponent>
      <section className={styles['invest-oportunities']}>
        <h1>Oportunidades de invesión confiables</h1>
        <p className={styles['invest-paragraph']}>Te ayudamos a encontrar el desarrollo que más se adapte a tus objetivos comerciales y/o patrimoniales</p>
        <CarruselComponent projects={projects}></CarruselComponent>
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
            <p className={styles['join-paragraph2']}>
              <img className={styles['join-logo']} src={images('./little-logo1.svg')} alt="" />
              Te compartimos cómo estamos ayudando a nuestros inversionistas a encontrar los mejores Desarrollos y terrenos de inversión, alramente rentables.</p>
          </div>
          <div className={styles['landrada-form']}>
            <p className={styles['form-title']}>¡Tu inversión inteligente <p className={styles['form-title-g']}>está a solo un clic de distancia!</p></p>
            <div className={styles['form-first-container']}>
              <label className={styles['form-first']} htmlFor="invest">
                <input  type="checkbox" name="" id="invest" value='' />
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
  );
}

export default App;
