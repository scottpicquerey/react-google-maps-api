import React, { useCallback, useEffect, useRef } from "react";
import { addSingleMarkers } from "./markers";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = ({
  locations,
  className,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Displays single markers on map when called
  const onLoad = useCallback(
    (map: google.maps.Map | null | undefined) =>
      addSingleMarkers(locations)(map),
    [locations]
  );

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });

      // Load markers
      onLoad(map);
    }
  }, [ref, onLoad]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ width: "1000px", height: "700px" }}
    />
  );
};
