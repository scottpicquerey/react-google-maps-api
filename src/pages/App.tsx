import React from "react";
import { GoogleMaps, GoogleMapsProvider, LOCATIONS } from "./GoogleMaps";
import { Layout } from "./Layout";

export const App = () => (
  <GoogleMapsProvider>
    <Layout>
      <GoogleMaps mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsProvider>
);
