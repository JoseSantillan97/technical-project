import styles from './App.module.css';
import CarruselComponent from './Components/CarruselComponent'

const images = require.context('./images', true);

function App() {
  return (
    <div>
      <header>
        <div className={styles.navbar}>
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
        </div>
      </header>
      <section className={styles.main}>
        <div className={styles['image-container']}>
          <img src={ images('./main-image.png') } alt="" />
        </div>
      </section>
      <section className={styles['invest-oportunities']}>
        <h1>Oportunidades de invesión confiables</h1>
        <p className={styles['invest-paragraph']}>Te ayudamos a encontrar el desarrollo que más se adapte a tus objetivos comerciales y/o patrimoniales</p>
        <CarruselComponent></CarruselComponent>
        <article className={styles['why-invest']}>
          <div className={styles['invest-img']}></div>
          <div className={styles['invest-info']}></div>
        </article>
      </section>
      <section className={styles['join-landrada']}>
        <h2>Únete a Landrada</h2>
        <p>En Landrada Desarrollos, otorgamos a nuestros inversionistas y equipo de asesores, los mejores beneficios y ganancias para conseguir la libertad financiera que están buscando</p>
        <article className={styles['join-form']}>
          <div className={styles['landrada-img']}>
            <img src="" alt="" />
            <p>Te compartimos cómo estamos ayudando a nuestros inversionistas a encontrar los mejores Desarrollos y terrenos de inversión, alramente rentables.</p>
          </div>
          <div className={styles['landrada-form']}>
            <p className={styles['form-title']}>¡Tu inversión inteligente <span className='form-title-g'>está a solo un clic de distancia!</span></p>
            <label htmlFor="invest">
              <input type="checkbox" name="" id="invest" value='' /> Quiero ser inversionista
            </label>
            <label htmlFor="adviser">
              <input type="checkbox" name="" id="adviser" value='' /> Quiero ser inversionista
            </label>
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <input type="tel" name="" id="" />
            <button>Enviar</button>
          </div>
        </article>
      </section>
      <footer>
        <section>
          <article>
            <div>
              <img src="" alt="" />
            </div>
            <p>Somos una organización de inversionistas especializados en la comercialización de desarrollos y proyectos inmobiliarios al sur de la República Mexicana, en Yucatán y Quintana Roo.</p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </article>
          <article>
            <p>Navegación</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <p>Desarrollos</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <p>(MEX) +52 (1) 998 401 1444</p>
            <p>contacto@landrada.mx</p>
            <p>SM15 M2 L8 Farallon, Av. Tulum y Acanceh, C.P. 77505, Cancún, Quintana Roo, México</p>
          </article>
        </section>
          <section className="rights">
            <p>Landrada Desarrollo 2022. Todos los derechos reservados</p>
            <p>Política de provacidad   Política de compra</p>
            <p>info@landrada.mx</p>
          </section>
      </footer>
    </div>
  );
}

export default App;
