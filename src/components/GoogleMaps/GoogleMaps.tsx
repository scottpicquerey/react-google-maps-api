import React, { useCallback, useEffect, useRef } from "react";
import { addClusterMarkers, addSingleMarkers } from "./markers";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 4;

export const GoogleMaps = ({
  locations,
  useClusters = true,
  mapId,
  className,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  useClusters?: boolean;
  mapId?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Displays cluster markers or single markers on map when called
  const onLoad = useCallback(
    (map: google.maps.Map | null | undefined) =>
      useClusters
        ? addClusterMarkers(locations)(map)
        : addSingleMarkers(locations)(map),
    [useClusters, locations]
  );

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        mapId,
      });

      // Load markers
      onLoad(map);
    }
  }, [ref, onLoad, mapId]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ width: "1000px", height: "700px" }}
    />
  );
};
