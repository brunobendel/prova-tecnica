import axios from "axios";

export const getUser = async () => {
  const response = await fetch('https://v3.football.api-sports.io/status', {
    method: "GET", 
    mode: "cors",
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY || ''
   
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

export const getCountries = async () => {
    const response = await fetch('https://v3.football.api-sports.io/countries', {
        method: "GET",
        mode: "cors", 
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY || ''
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
    });
    return response.json();
}
