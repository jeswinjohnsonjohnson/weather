function search(){
    city = cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`)
        .then(res => res.json())
        .then(data => displaydata(data))

}

function displaydata(cityDetails){
    cname=cityDetails.name
    temp=cityDetails.main.temp
    wtype=cityDetails.weather[0].id
    wind=cityDetails.wind.speed
    latti=cityDetails.coord.lat
    long=cityDetails.coord.lon


htmldata = ` <br> <div class="card" >
<div  style="background-color: bisque;" class="card-body">
  <h5 class="card-title">${cname}</h5>
</div>
<ul  class="list-group list-group-flush">
  <li style="background-color: black; color: white;" class="list-group-item">${temp}</li>
  <li style="background-color: black;color: white;" class="list-group-item">${wtype}</li>
  <li style="background-color: black;color: white;" class="list-group-item">${wind}${latti}</li>
  <li style="background-color: black;color: white;" class="list-group-item">${long}</li>

</ul>
</div>`

    
      result.innerHTML = htmldata

  }
