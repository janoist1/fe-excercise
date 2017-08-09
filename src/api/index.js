const API_URL = 'http://localhost:3001/data';

export const fetchServiceUpdates = () =>
  fetch(API_URL)
    .then(
      response =>
        new Promise(resolve => setTimeout(() => resolve(response), 1000))
    )
    .then(response => response.json());
