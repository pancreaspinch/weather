

import {displayWeather, processWeather, requestWeather} from './weatherHandler'

//console.log(requestWeather("San Francisco"));

//Put in Index convert temp to f and c
async function submitHandler(){
    try{
        let weather = await requestWeather('San Francisco')
        .then((data) => displayWeather(processWeather(data)));
    } catch(e){
        console.log(e);
    }
}

submitHandler();

