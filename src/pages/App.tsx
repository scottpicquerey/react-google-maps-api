import React from "react";
import { GoogleMaps, GoogleMapsProvider, LOCATIONS } from "./GoogleMaps";
import { Layout } from "./Layout";

export const App = () => (
  <GoogleMapsProvider>
    <Layout>
      <GoogleMaps locations={LOCATIONS} />
    </Layout>
  </GoogleMapsProvider>
);
