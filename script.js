// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
        //alert("pilotName: " + pilotNameInput.value);
         if(pilotNameInput.value === ""|| copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("All fields are required");
        //event.preventDefault();
         }

        let header = document.getElementById("launchStatus");
        let faultItems = document.getElementById("faultyItems");

        let message = "Ready to launch";
        if(fuelLevelInput.value > 10000) { 
         header.innerHTML = `<h2 style = "color:red">Shuttle not ready for launch</h2>`;
         message = "Fuel level too low for launch";
        }
        else {
         header.innerHTML = `<h2 style = "color:green">Shuttle is ready for launch</h2>`;
         message = "Fuel level enough for launch";
        }

        let cargoStatus = "Cargo mass low enough for launch";
        if(cargoMassInput.value > 10000) {
            header.innerHTML = `<h2 style = "color:red">Shuttle not ready for launch</h2>`;
            cargoStatus = "Cargo mass low enough for launch";
        }
        else  {
         header.innerHTML = `<h2 style = "color:green">Shuttle is ready for launch</h2>`;
         cargoStatus = "Cargo mass enough for launch";
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
                for(let i in json){
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
                }
                 console.log(div.innerHTML);
                  div.innerHTML = html;
               });
            });
            event.preventDefault();

   });
});

