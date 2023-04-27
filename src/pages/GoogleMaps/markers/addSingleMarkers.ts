export const addSingleMarkers =
  (locations: ReadonlyArray<google.maps.LatLngLiteral>) =>
  (map: google.maps.Map | null | undefined) =>
    locations.map(({ lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
      });

      return marker;
    });
