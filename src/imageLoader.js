
const imageContext = import.meta.globEager('../assets/galeria_header/*.{png,jpeg,jpg,svg}');

const images = Object.entries(imageContext).map(([key, value]) => ({ path: key, data: value.default }));

export default images;

