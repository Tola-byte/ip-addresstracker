   
 const locale = document.getElementById("locale");
 const mapform = document.querySelector(".map-form");
 //const para = document.getElementById("ip-address");
 const timeZone = document.getElementById("timezone");
 const address = document.getElementById("inputaddress");
 const addresses = document.getElementById("inputaddresses")
 const add = document.getElementById("ipaddress")
 const isps = document.getElementById("isp");
 const submits = document.querySelector("#submitSearch");



 var map = L.map('map').setView([6.45407, 3.39467
 ], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

  L.marker([6.45407, 3.39467]).addTo(map)
    .bindPopup('wagwan Bruv. Na here I dae!')
    .openPopup();
 

 function okay(t) {
    t.preventDefault();
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_edKh1jMQPuUqwVrbRtN5YTDwpk9oG&ipAddress=${addresses.value}`)
     .then( res => res.json())
     .then( data => {
      const { ip , location:{ country,  region , lat , lng , timezone , } , isp } = data 
      
      console.log(data);

      address.innerText = ip;

      locale.innerText = `${country} ${region}` ;

      timeZone.innerText = "GMT" + timezone;

      isps.innerText = isp;
      
      
      map.setView([lat, lng], 13);
      L.marker([lat, lng] , 13).addTo(map)
      
      })
      .catch(err => console.log(err.message));

}
  
   submits.addEventListener("click" , okay);