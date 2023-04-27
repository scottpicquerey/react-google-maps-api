import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apiKey = "apiKey";

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};
