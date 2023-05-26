import React from "react";
import {
  GoogleMaps,
  GoogleMapsProvider,
  LOCATIONS,
  Layout,
} from "../components";

const App = () => (
  <GoogleMapsProvider>
    <Layout>
      <GoogleMaps mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsProvider>
);

export default App;
