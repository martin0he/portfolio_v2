import { lazy, Suspense } from "react";

import "./Home.css";

// Kept off the main bundle: three.js, drei and the 25MB model are only needed
// here, and importing them eagerly pulled both onto every other route too.
const ModelViewer = lazy(() => import("../components/ModelViewer"));

const Home = () => {
  return (
    <div className="home-container">
      <Suspense fallback={<div className="model-container" />}>
        <ModelViewer modelUrl="/martin_3d_model.glb" />
      </Suspense>
      <div className="bottom-bar">
        <h1>hi, i'm martin</h1>
      </div>
    </div>
  );
};

export default Home;
