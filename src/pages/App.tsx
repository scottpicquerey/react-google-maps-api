import React from "react";
import { GoogleMaps, GoogleMapsProvider } from "./GoogleMaps";
import { Layout } from "./Layout";

export const App = () => (
  <GoogleMapsProvider>
    <Layout>
      <GoogleMaps />
    </Layout>
  </GoogleMapsProvider>
);
