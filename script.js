// Write your JavaScript code here!
window.addEventListener("load", function(){
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
               response.json().then(function(json){
                let div = document.getElementById("missionTarget");
                let i = Math.floor(Math.random()*json.length);
                div.innerHTML = `
                     <h2>Mission Destination</h2>
                       <ol>
                          <li>Name: ${json[i].name}</li>
                          <li>Diameter: ${json[i].diameter}</li>
                          <li>Star: ${json[i].star}</li>
                          <li>Distance from Earth: ${json[i].distance}</li>
                          <li>Number of Moons: ${json[i].moons}</li>
                        </ol>
                           <img src="${json[i].image}">`;
                           
               });
            });
           

let launchStatus = document.getElementById("launchStatus");
let faultItems = document.getElementById("faultyItems");
let form = document.querySelector("form");
faultItems.style.visibility = "hidden";
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuel = document.getElementById("fuelStatus");
let cargo = document.getElementById("cargoStatus");

form.addEventListener("submit", function(event){
    event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotNameInput.value;
      let pilotTest = Number(pilot);
      
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotNameInput.value;
      let copilotTest = Number(copilot);

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = Number(fuelLevelInput.value);

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoLevel = Number(cargoMassInput.value);
      
        
         if(pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
         } else if(isNaN(pilot) === false || isNaN(copilot) === false || isNaN(fuelLevel) || isNaN(cargoLevel)) {
            alert("Make sure to enter valid information for each field");
         }else {
            faultItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         
          if(fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) { 
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "#C7254E";
         fuel.innerHTML = "Fuel level too low for launch";
         cargo.innerHTML = "Cargo mass low enough for launch";
        }
        else if(fuelLevelInput.value >= 10000 && cargoMassInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color ="#C7254E"
         fuel.innerHTML = "Fuel level high enough for launch";
         cargo.innerHTML = "Cargo mass too heavy for launch";
        }
        else if(fuelLevel < 10000 && cargoMassInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "#C7254E";
            cargo.innerHTML = "Cargo mass too heavy for launch";
            fuel.innerHTML = "fuel level too low for launch";
        }
        else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "#419F6A";
         fuel.innerHTML = "Fuel level high enough for launch";
         cargo.innerHTML = "Cargo mass low enough for launch";
        }
      }
   
      
   
  });
});
           

   


