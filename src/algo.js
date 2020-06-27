/* eslint-disable no-fallthrough */
export default function recommend(
  API_KEY,
  hour,
  mtemp,
  weatherId,
  sunrise,
  sunset,
  moodID
) {
  //   let hour = weather.dt;
  //   let mtemp = weather.main.temp;
  //   let weatherId = weather.weather[0].id;
  //   let sunrise = weather.sys.sunrise;
  //   let sunset = weather.sys.sunset;

  let genere = null;
  let keyword = null;

  if (weatherId >= 100 && weatherId <= 804) {
    switch (moodID) {
      case 1: // chill
        if (hour >= sunrise && hour <= sunset) {
          //dzien
          if (mtemp <= 0) {
            genere = 99; //documentary
            keyword = 714;
            console.log("Xd");
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            keyword = 10683; //coming of age
            genere = 12;
            break;
          }
          if (mtemp > 15) {
            genere = 16; //animation
            keyword = 10683;
            break;
          }
        } else {
          //noc
          if (mtemp <= 0) {
            genere = 10751; // family
            keyword = 10683;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 12; // fantasy
            keyword = 704;
            break;
          }
          if (mtemp > 15) {
            keyword = 13088; // sumer
            genere = 80;
            break;
          }
        }

      case 2: // mad
        if (hour >= sunrise && hour <= sunset) {
          //dzien
          if (mtemp <= 0) {
            genere = 28; //action
            keyword = 9748; //revenge
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 28; //action
            keyword = 9748;
            break;
          }
          if (mtemp > 15) {
            keyword = 12339;
            genere = 27;
            break;
          }
        } else {
          //noc
          if (mtemp <= 0) {
            keyword = 10714;
            genere = 27;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 27; //action
            keyword = 205376;
            break;
          }
          if (mtemp > 15) {
            genere = 28; //action
            keyword = 9748;
            break;
          }
        }

      case 3: // sad
        if (hour >= sunrise && hour <= sunset) {
          //dzien
          if (mtemp <= 0) {
            genere = 18; // drama
            keyword = 1647; // sadness
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 18;
            keyword = 5625;
            break;
          }
          if (mtemp > 15) {
            genere = 18;
            keyword = 210475;
          }
        } else {
          //noc
          if (mtemp <= 0) {
            keyword = 4565; //dystopia
            genere = 18; // drama

            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            keyword = 894; //depression
            genere = 18;
            break;
          }
          if (mtemp > 15) {
            genere = 18;
            keyword = 240119;

            break;
          }
        }

      case 4: // happy
        if (hour >= sunrise && hour <= sunset) {
          //dzien
          if (mtemp <= 0) {
            genere = 28;
            keyword = 183141;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 12;
            keyword = 210246;
            break;
          }
          if (mtemp > 15) {
            genere = 16;
            keyword = 249680;
            break;
          }
        } else {
          //noc
          if (mtemp <= 0) {
            genere = 14;
            keyword = 195114;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 35;
            keyword = 245597;
            break;
          }
          if (mtemp > 15) {
            genere = 35;
            keyword = 54169;
            break;
          }
        }
      case 5: // frisky
        if (hour >= sunrise && hour <= sunset) {
          //dzien
          if (mtemp <= 0) {
            genere = 10749;
            keyword = 186956;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 10749;
            keyword = 236874;
            break;
          }
          if (mtemp > 15) {
            genere = 10749;
            keyword = 206715;
            break;
          }
        } else {
          //noc
          if (mtemp <= 0) {
            genere = 10749;
            keyword = 188237;
            break;
          }
          if (mtemp > 0 && mtemp <= 15) {
            genere = 10749;
            keyword = 186956;
            break;
          }
          if (mtemp > 15) {
            genere = 10749;
            keyword = 200129;
            break;
          }
        }
    }
  }
  if (weatherId >= 200 && weatherId <= 232) {
    keyword = 18171;
  }
  if (weatherId >= 300 && weatherId <= 321) {
    keyword = 2217;
  }
  if (weatherId >= 500 && weatherId <= 531) {
    keyword = 2217;
  }
  if (weatherId >= 600 && weatherId <= 622) {
    keyword = 10794;
  }
  if (weatherId >= 701 && weatherId <= 711) {
    keyword = 169613;
  }

  let movieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    API_KEY +
    "&sort_by=page=1&with_genres=" +
    genere +
    "&with_keywords=" +
    keyword;

  //console.log(movieUrl);
  return movieUrl;
}
