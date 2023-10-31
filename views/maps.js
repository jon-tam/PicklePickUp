// import { Loader } from "@googlemaps/js-api-loader"

// const loader = new Loader({
//     apiKey: "AIzaSyBG7-oGG4VkRd90s5YQpob2g2yTcfeGK1Q",
//     version: "weekly",
//     ...additionalOptions,
//   });
  
//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps");
  
//     map = new Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });
  let map;
  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  initMap();