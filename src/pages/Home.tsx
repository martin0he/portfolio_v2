import ModelViewer from "../components/ModelViewer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <ModelViewer modelUrl="/martin_3d_model.glb" />
      <div className="bottom-bar">
        <h1>hi, i'm martin</h1>
      </div>
    </div>
  );
};

export default Home;
