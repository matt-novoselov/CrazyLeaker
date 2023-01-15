fetch('https://ipinfo.io/json').then((res) => {
  res.json().then((data) => {         
    if(data.country === "RU"){
      window.location.href = 'https://crazyleaker.com/stop-war';
    }
  });
});