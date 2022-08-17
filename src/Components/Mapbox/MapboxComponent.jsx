import React, { Component } from "react";
// import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import CardMapComponent from "../MapCard/CardMapComponent";
import styles from "./MapboxComponent.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

const images = require.context("./../../images", true);

class MapboxComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      data: [],
      viewport: {
        latitude: 21.1904167,
        longitude: -89.9636667,
        zoom: 5.1,
      },
      selectedProject: "",
      open: false,
    };
  }

  onClosePop = (a) => {
    setTimeout(() => {
      this.setState({ selectedProject: "", open: false });
    }, 0);
  };
  render() {
    return (
      <div>
        <div className={styles["contenedor-map"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles["image-main"]}
              src={images("./movil-landrada.png")}
              alt=""
            />
          </div>
          <div className={styles["text-container"]}>
            <p className={styles["text-title"]}>Inversión con conciencia</p>
            <p className={styles["text-text"]}>
              En{" "}
              <span className={styles["text-landrada"]}>
                Landrada Desarrollos
              </span>{" "}
              te brindamos oportunidades de inversión confiables que se ajustan
              a tus objetivos comerciales y patrimoniales.
            </p>
            <button className={styles["text-button"]}>
              comenzar a invertir
            </button>
            <p className={styles["text-last"]}>¡conócenos!</p>
          </div>
        </div>
        <div>
          <ReactMapGL
            style={{
              backgroundColor: "green",
              height: 600,
              width: "100%",
            }}
            {...this.state.viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoiam9zZXNhbnRpbGxhbjk3IiwiYSI6ImNsNmk1ajBmczBlcHEza3ByemFqdWplbDMifQ.Sm5ztLEbYcviwqRqG6Kg5w"
            mapStyle="mapbox://styles/mapbox/satellite-v9"
          >
            {this.props.projects &&
              this.props.projects.map((project) => (
                <Marker
                  key={project.id}
                  latitude={project.geometry.coordinates[1]}
                  longitude={project.geometry.coordinates[0]}
                >
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({
                        selectedProject: project,
                        viewport: {
                          latitude: project.geometry.coordinates[1],
                          longitude: project.geometry.coordinates[0],
                        },
                      });
                    }}
                  >
                    {!this.state.open && (
                      <img
                        style={{
                          height: "22px",
                          width: "22px",
                          display: `${!this.state
                            .selectedProject} ? 'none' : "none"`,
                        }}
                        src={images("./pin-map.svg")}
                        alt="marker"
                      />
                    )}
                  </button>
                  {this.state.selectedProject &&
                    this.state.selectedProject.id ? (
                    <div ref={this.myRef} style={{ position: "relative" }}>
                      <CardMapComponent
                        key={this.state.selectedProject.id}
                        onClose={this.onClosePop}
                        project={this.state.selectedProject}
                      >
                        <div key={this.state.selectedProject.id}>
                          <Popup
                            // {...this.state.open = true}
                            latitude={
                              this.state.selectedProject.geometry
                                .coordinates[1]
                            }
                            longitude={
                              this.state.selectedProject.geometry
                                .coordinates[0]
                            }
                          ></Popup>
                        </div>
                      </CardMapComponent>
                    </div>
                  ) : null}
                </Marker>
              ))}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default MapboxComponent;
