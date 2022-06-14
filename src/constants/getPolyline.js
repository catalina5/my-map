export const getPolyline = (valuePolyline, value, inputValue) => {
  let polyline = new map4d.Polyline({
    path: inputValue.length > 1 ? valuePolyline : [],
    strokeColor: "#508ff4",
    strokeOpacity: 0.9,
    strokeWidth: 8,
  });

  const someInputValue = inputValue.some((value) => value === null);
  if (someInputValue) {
    polyline.setMap(null);
    console.log("ok");
  } else {
    polyline.setMap(value);
  }
};
