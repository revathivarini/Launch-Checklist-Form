// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let header = document.getElementById("launchStatus");
        let faultItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");

        let fuel = document.getElementById("fuelStatus");
        let cargo = documetn.getElementById("cargoStatus");

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotNameInput.value;
      let pilotTest = Number(pilot);
      
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotNameInput.value;
      let copilotTest = Number(copilot);

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = Number(fuelLevelInput.value);

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargolevel = Number(cargoMassInput.value);
      
        //alert("pilotName: " + pilotNameInput.value);
         if(pilotNameInput.value === ""|| copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("All fields are required");
        //event.preventDefault();
         } else if(isNaN(pilotTest) === false || isNaN(copilotTest) === false || isNaN(fuelLevel) || isNaN(cargoLevel)) {
            alert("Make sure to enter valid information for each field");
         }else {
            faultItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         }

        
        
        if(fuelLevelInput.value < 10000 && cargoStatus <= 10000) { 
         header.innerHTML = `<h2 style = "color:red">Shuttle not ready for launch</h2>`;
         fuel.innerHTML = "Fuel level too low for launch";
         cargo.innerHTML = "Cargo mass low enough for launch";
        }
        else if(fuelLevelInput.value >= 10000 && cargoStatus > 10000) {
         header.innerHTML = `<h2 style = "color:red">Shuttle not ready for launch</h2>`;
         fuel.innerHTML = "Fuel level high enough for launch";
         cargo.innerHTML = "Cargo mass too heavy for launch";
        }

        
        else if(fuelLevel < 10000 && cargoStatus > 10000) {
            header.innerHTML = `<h2 style = "color:red">Shuttle not ready for launch</h2>`;
            cargo.innerHTML = "Cargo mass too heavy for launch";
            fuel.innerHTML = "fuel level too low for launch";
        }
        else  {
         header.innerHTML = `<h2 style = "color:green">Shuttle is ready for launch</h2>`;
         fuel.innerHTML = "Fuel level high enough for launch";
         cargo.innerHTML = "Cargo mass low enough for launch";
        }
        

        faultItems.innerHTML = `
        <ol>
        <li>Pilot ${pilotNameInput.value} is ready for launch</li>
        <li>Copilot ${copilotNameInput.value} is ready for launch</li>
        <li>${message}</li>
        <li>${cargoStatus}</li>
        </ol>`;

         //This block of code shows how to format the HTML once you fetch some planetary JSON!
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
               response.json().then(function(json){
                let div = document.getElementById("missionTarget");
                let html = '';
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
                           html += div.innerHTML;
                
                 //console.log(div.innerHTML);
                  div.innerHTML = html;
               });
            });
            event.preventDefault();

   });
});

