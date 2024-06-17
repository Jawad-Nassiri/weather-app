// let $ = document;
// let searchBar = $.getElementById('search');
// let btn = $.querySelector('.btn');

// const cityWeatherData = {
//     paris: { city: 'Paris', temps: 12, weather: 'sunny', humidity: 15},
//     marseille: { city: 'Marseille', temps: 18, weather: 'cloudy', humidity: 60},
//     lyon: { city: 'Lyon', temps: 14, weather: 'rainy', humidity: 55},
//     toulouse: { city: 'Toulouse', temps: 16, weather: 'windy'},
//     nice: { city: 'Nice', temps: 20, weather: 'sunny', humidity: 40},
//     nantes: { city: 'Nantes', temps: 10, weather: 'foggy', humidity: 70},
//     strasbourg: { city: 'Strasbourg', temps: 8, weather: 'snowy', humidity: 65},
//     montpellier: { city: 'Montpellier', temps: 17, weather: 'sunny', humidity: 45},
//     bordeaux: { city: 'Bordeaux', temps: 15, weather: 'partly cloudy', humidity: 50},
//     lille: { city: 'Lille', temps: 9, weather: 'rainy', humidity: 75}
//   };

// btn.addEventListener('click' , function(){
//     let searchBarValue = searchBar.value.toLowerCase();
//     let cityData = cityWeatherData[searchBarValue];

//     if(cityData){
//         $.querySelector('.city-weather').innerHTML ="City : " + cityData.city;
//         $.querySelector('.degree-weather').innerHTML = "Temperature is : " + cityData.temps + "°C";
//         $.querySelector('.statue-weather').innerHTML ="Statue is : " + cityData.weather;
//         $.querySelector('.humidity-weather').innerHTML = "Humidity is : " + cityData.humidity;
//         $.querySelector('.city').classList.remove('loading');
//     }else {
//         $.querySelector('.city-weather').innerHTML = "City not found";
//         $.querySelector('.degree-weather').innerHTML = "";
//         $.querySelector('.statue-weather').innerHTML = "";
//         $.querySelector('.humidity-weather').innerHTML = "";
//     }
// });

// let firstPhoto = 'nature1.jpg';
// let secondPhoto = 'nature2.jpg';
// let thirdPhoto = 'nature3.jpg';
// let fourthPhoto = 'nature4.jpg';
// let fifthPhoto = 'nature5.jpg';
// let sixthPhoto = 'nature6.jpg';
// let seventhPhoto = 'nature7.jpg';
// let eighthPhoto = 'nature8.jpg';

// let photos = [firstPhoto, secondPhoto, thirdPhoto, fourthPhoto, fifthPhoto, sixthPhoto, seventhPhoto, eighthPhoto];
// let currentPhotoIndex = 0;

// setInterval(function() {
//     let currentPhoto = photos[currentPhotoIndex];

//     document.body.style.backgroundImage = 'url(../images/' + currentPhoto + ')';

//     currentPhotoIndex++;

//     if (currentPhotoIndex === photos.length) {
//         currentPhotoIndex = 0;
//     }
// }, 5000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let $ = document;
let searchBar = $.getElementById("search");
let btn = $.querySelector(".btn");

const cityWeatherData = [
  { city: "paris", temps: 12, weather: "sunny", humidity: 15 },
  { city: "marseille", temps: 18, weather: "cloudy", humidity: 60 },
  { city: "lyon", temps: 14, weather: "rainy", humidity: 55 },
  { city: "toulouse", temps: 16, weather: "windy" },
  { city: "nice", temps: 20, weather: "sunny", humidity: 40 },
  { city: "nantes", temps: 10, weather: "foggy", humidity: 70 },
  { city: "strasbourg", temps: 8, weather: "snowy", humidity: 65 },
  { city: "montpellier", temps: 17, weather: "sunny", humidity: 45 },
  { city: "bordeaux", temps: 15, weather: "partly cloudy", humidity: 50 },
  { city: "lille", temps: 9, weather: "rainy", humidity: 75 },
];

btn.addEventListener("click", function () {
    let searchBarValue = searchBar.value.toLowerCase();
    
  let cityData = cityWeatherData.find(function(item){
    return item.city === searchBarValue;
  });
  
  if (cityData) {
    $.querySelector(".city-weather").innerHTML = "City : " + cityData.city;
    $.querySelector(".degree-weather").innerHTML =
      "Temperature is : " + cityData.temps + "°C";
    $.querySelector(".statue-weather").innerHTML =
      "Statue is : " + cityData.weather;
    $.querySelector(".humidity-weather").innerHTML =
      "Humidity is : " + cityData.humidity;
    $.querySelector(".city").classList.remove("loading");
  } else {
    $.querySelector(".city-weather").innerHTML = "City not found";
    $.querySelector(".degree-weather").innerHTML = "";
    $.querySelector(".statue-weather").innerHTML = "";
    $.querySelector(".humidity-weather").innerHTML = "";
  }
});

let firstPhoto = "nature1.jpg";
let secondPhoto = "nature2.jpg";
let thirdPhoto = "nature3.jpg";
let fourthPhoto = "nature4.jpg";
let fifthPhoto = "nature5.jpg";
let sixthPhoto = "nature6.jpg";
let seventhPhoto = "nature7.jpg";
let eighthPhoto = "nature8.jpg";

let photos = [
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  fourthPhoto,
  fifthPhoto,
  sixthPhoto,
  seventhPhoto,
  eighthPhoto,
];
let currentPhotoIndex = 0;

setInterval(function () {
  let currentPhoto = photos[currentPhotoIndex];

  document.body.style.backgroundImage = "url(../images/" + currentPhoto + ")";

  currentPhotoIndex++;

  if (currentPhotoIndex === photos.length) {
    currentPhotoIndex = 0;
  }
}, 5000);
