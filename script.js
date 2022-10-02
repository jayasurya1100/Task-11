function create(countries){
    countries.map((country) => {
        
    
    document.body.innerHTML += ` <div class="body">
    <div class="name"> ${country.name.common}</div>
    <div class="flag">
        <img src="${country.flags.svg}" alt="country flags" class="img"/>
    </div>
    <div class="contant">
        <p>captital: ${country.capital}</p>
        <p>region: ${country.region}</p>
        <p>country code: ${country.altSpellings[0]}</p>
       <button onclick="weatherAll(${country.latlng[0]})">Click for weather</button>
    </div>
    </div>`
    
    
    
    });
    
    
    }
    
    
    
    function weatherAll(latt){
        
        
    function click(s){
        
     
        if(latt==s.coord.lat){
            var change=JSON.stringify(s)
            alert(change)
        
       }
    }
    
    
        function weathers(id){
            id.map((n)=>{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n.name.common}&appid=fcebc863111d615133de1a92ee2848a1`)
        .then((data)=>data.json())
         .then((weathers)=>click(weathers))
        
    })
    }
        function wee(){
            fetch("https://restcountries.com/v3.1/all")
    .then((data)=>data.json())
    .then((weather)=>weathers(weather))
        }
        wee()
    
    }
    
    
    
    
    
    
    function details(){
    fetch("https://restcountries.com/v3.1/all")
    .then((data)=>data.json())
    .then((country)=>create(country))
    }
    details()
    
    
    
    
         
    