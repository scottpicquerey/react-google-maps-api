import React from "react";
import {
  GoogleMaps,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components";

const App = () => (
  <GoogleMapsWrapper>
    <Layout>
      <GoogleMaps mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsWrapper>
);

export default App;
