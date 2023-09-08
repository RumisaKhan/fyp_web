import React, { Component } from "react";
import axios from "axios";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
import { firebase } from "../../firebase";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import Footer from "../../components/Layouts/Footer";
class ThreeScene extends Component {
  state = {
    model3dmtlState: "",
    model3dState: "",
    nearState: 0,
    positionxState: 0,
    positionyState: 0,
    positionzState: 0,
    meshpositionxState: 0,
    meshpositionyState: 0,
    meshpositionzState: 0,
    rotationxState: 0,
    rotationyState: 0,
    rotationzState: 0,
    scalexState: 0,
    scaleyState: 0,
    scalezState: 0,
    modelLoading: true,

  }
  static getInitialProps = ({ query }) => {
    return {
      id: query.id,
    };
  };
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // this.renderer.setClearColor("#b54ced");
    this.renderer.setClearColor("#f5e1fd");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    const db = firebase.firestore();
    const dbOrderRef = db.collection("products");
    dbOrderRef.get().then((res) => {
      res.forEach((doc) => {
        if (doc.id === this.props.id) {
          let productsObj = doc.data();


          this.setState({
            rotationxState: productsObj.rotationx3dState,
            rotationyState: productsObj.rotationy3dState,
            rotationzState: productsObj.rotationz3dState,
            scalexState: productsObj.scalex3dState,
            scaleyState: productsObj.scaley3dState,
            scalezState: productsObj.scalez3dState,
            meshpositionxState: productsObj.meshpositionx3dState,
            meshpositionyState: productsObj.meshpositiony3dState,
            meshpositionzState: productsObj.meshpositionz3dState,
            model3dmtlState: productsObj.model3dmtl,
            model3dState: productsObj.model3d
          })
          //add Camera
          this.camera = new THREE.PerspectiveCamera(75, width / height, productsObj.nearState, 1000);
          this.camera.position.x = productsObj.positionx3dState;
          this.camera.position.y = productsObj.positiony3dState;
          this.camera.position.z = productsObj.positionz3dState;

          //Camera Controls
          //const controls = new OrbitControls(this.camera, this.renderer.domElement);
          new OrbitControls(this.camera, this.renderer.domElement);

          //LIGHTS
          var lights = [];
          lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
          lights[1] = new THREE.PointLight(0xffffff, 1, 0);
          lights[2] = new THREE.PointLight(0xffffff, 1, 0);
          lights[0].position.set(0, 200, 0);
          lights[1].position.set(100, 200, 100);
          lights[2].position.set(-100, -200, -100);
          this.scene.add(lights[0]);
          this.scene.add(lights[1]);
          this.scene.add(lights[2]);

          //Simple Box with WireFrame
          this.addModels();

          this.renderScene();
          //start animation
          this.start();
        }
      })
    }).catch((err) => { })
  }

  addModels() {
    //console.log(this.props.id);
    const {
      model3dmtlState,
      model3dState,
      scalexState,
      scaleyState,
      scalezState,
      meshpositionxState,
      meshpositionyState,
      meshpositionzState,
    } = this.state;
    var mtlLoader = new MTLLoader();
    mtlLoader.load(model3dmtlState, (materials) => {
      materials.preload();
      console.log("Material loaded");

      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        model3dState,
        (object) => {
          this.freedomMesh = object;
          this.freedomMesh.position.setX(meshpositionxState); //or  this
          this.freedomMesh.position.setY(meshpositionyState); //or  this
          this.freedomMesh.position.setZ(meshpositionzState); //or  this
          this.freedomMesh.scale.set(scalexState, scaleyState, scalezState);
          this.scene.add(this.freedomMesh);
        },
        (xhr) => {
          const { modelLoading } = this.state;
          const loadedPercetage = (xhr.loaded / xhr.total) * 100;
          console.log(loadedPercetage + "% loaded");
          if (modelLoading && loadedPercetage == 100) {
            this.setState({ modelLoading: false })
          }
        },
        // called when loading has errors
        (error) => {
          console.log("An error happened" + error);
        }
      );
    });
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    const { rotationxState, rotationyState, rotationzState } = this.state;

    if (this.freedomMesh) {
      this.freedomMesh.rotation.x += rotationxState;
      this.freedomMesh.rotation.y += rotationyState;
      this.freedomMesh.rotation.z += rotationzState;

    }
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    const { modelLoading } = this.state;
    return (
      <React.Fragment>
        <TopHeader />
        <Navbar />
        <PageBanner
          pageTitle="3D View"
          homePageUrl="/"
          homePageText="Home"
          activePageText="3D View"
        />
        <div
          style={{
            // pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: 'hidden'
          }}
        >
          <div
            style={{ width: "1000px", height: "1000px" }}
            ref={(mount) => {
              this.mount = mount;
            }}
          >
            {
          modelLoading && (
            <div className="loading-model">
              <div className="spinner-border spin-purple" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )
        }
          </div>
        </div>
        <FacilitySlider />
        <InstagramFeed />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ThreeScene;
