#!/usr/bin/env /usr/local/bin/node

'use strict';

const got = require('got');
const config = require('./config');

got(`http://api.wunderground.com/api/${config.key}/conditions/q/${config.place}.json`, { json: true })
    .then(response => {
        let data = response.body;
        if (data.response.error) {
            console.log(data.response.error.description);
        } else {
            console.log(`${data.current_observation.temp_c}°`); //temp_f for fahrenheit
        }
    })
    .catch(error => {
        console.log(error.response.body);
    });
