window.addEventListener('load', ()=>{
    let countryName = document.querySelector('.location-name-text');
    let temprature = document.querySelector('.temp');
    let weatherStatusLogo = document.querySelector('.logo-image');
    let descriptition = document.querySelector('.weather-text');
    let mxTemp = document.querySelector('.max-temp');
    let mnTemp = document.querySelector('.min-temp');
    let wind = document.querySelector('.wind');
    let hmdt = document.querySelector('.humidity');
    let update = document.querySelector('.update')

    let dayTimeZero = document.querySelector('.day-time-zero');
    let dayTempZero = document.querySelector('.day-temp-zero');
    let dayLogoZero = document.querySelector('.day-logo-zero');

    let dayTimeOne = document.querySelector('.day-time-one');
    let dayTempOne = document.querySelector('.day-temp-one');
    let dayLogoOne = document.querySelector('.day-logo-one');

    let dayTimeTwo = document.querySelector('.day-time-two');
    let dayTempTwo = document.querySelector('.day-temp-two');
    let dayLogoTwo = document.querySelector('.day-logo-two');

    let dayTimeTheree = document.querySelector('.day-time-theree');
    let dayTempTheree = document.querySelector('.day-temp-theree');
    let dayLogoTheree = document.querySelector('.day-logo-theree');

    let dayTimeFour = document.querySelector('.day-time-four');
    let dayTempFour = document.querySelector('.day-temp-four');
    let dayLogoFour = document.querySelector('.day-logo-four');

    let dayTimeFive = document.querySelector('.day-time-five');
    let dayTempFive = document.querySelector('.day-temp-five');
    let dayLogoFive = document.querySelector('.day-logo-five');

    getTime = (list) => {
        let time;

		// Create a new date from the passed date time
		var date = new Date(list*1000);

		// Hours part from the timestamp
		var hours = date.getHours();
		
		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

        time = hours + ':' + minutes.substr(-2);
        
        return time;
    }

    getLastUpdate = () => {
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'Pm' : 'Am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
}


    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const getApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=96d545960a48f5bc3d79cfe19e51a6b3`

            fetch(getApi)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                countryName.textContent = data.city.name
                weatherStatusLogo.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
                temprature.textContent = Math.round((data.list[0].main.temp - 273.15));
                let weather_des = (data.list[0].weather[0].main);
                descriptition.textContent = weather_des[0].toUpperCase() + weather_des.slice(1);
                mxTemp.textContent = Math.round((data.list[0].main.temp_max - 273.15));
                mnTemp.textContent = Math.round((data.list[0].main.temp_min - 273.15));
                wind.textContent = Math.floor(data.list[0].wind.speed);
                hmdt.textContent = data.list[0].main.humidity;
                update.textContent = getLastUpdate()
                

                dayLogoZero.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`
                dayTempZero.textContent = Math.round((data.list[1].main.temp - 273.15))

                dayTimeZero.textContent = getTime(data.list[1].dt)
             

                dayLogoOne.src = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`
                dayTempOne.textContent = Math.round((data.list[2].main.temp - 273.15))

                dayTimeOne.textContent = getTime(data.list[2].dt)

                dayLogoTwo.src = `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`
                dayTempTwo.textContent = Math.round((data.list[3].main.temp - 273.15))

                dayTimeTwo.textContent = getTime(data.list[3].dt)

                dayLogoTheree.src = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`
                dayTempTheree.textContent = Math.round((data.list[4].main.temp - 273.15))

                dayTimeTheree.textContent = getTime(data.list[4].dt)

                dayLogoFour.src = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`
                dayTempFour.textContent = Math.round((data.list[5].main.temp - 273.15))

                dayTimeFour.textContent = getTime(data.list[5].dt)

                dayLogoFive.src = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`
                dayTempFive.textContent = Math.round((data.list[6].main.temp - 273.15))

                dayTimeFive.textContent = getTime(data.list[6].dt)

            })
        })
    }
})