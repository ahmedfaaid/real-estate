export const geocode = async ({ address1, province, postalCode }) => {
  // const postCode = postalCode.split(' ')[0];

  const fullAddress = `${address1} ${province} ${postalCode}`;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    fullAddress
  )}.json?&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  const response = await fetch(url);

  const data = await response.json();

  const correctAddress = data.features[0];

  return correctAddress.center;
};
