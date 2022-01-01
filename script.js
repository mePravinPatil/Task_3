const car = [
   {
      "Name":"TATA SAFARI",
      "Miles_per_Gallon":18,
      "Cylinders":8,
      "Displacement":307,
      "Horsepower":130,
      "Weight_in_lbs":3504,
      "Acceleration":12,
      "Year":"1970-01-01",
      "Origin":"USA"
   },
   {
      "Name":"Roll Royce",
      "Miles_per_Gallon":15,
      "Cylinders":8,
      "Displacement":350,
      "Horsepower":165,
      "Weight_in_lbs":3693,
      "Acceleration":11.5,
      "Year":"1970-01-01",
      "Origin":"USA"
   },
   {
      "Name":"plymouth satellite",
      "Miles_per_Gallon":18,
      "Cylinders":8,
      "Displacement":318,
      "Horsepower":150,
      "Weight_in_lbs":3436,
      "Acceleration":11,
      "Year":"1970-01-01",
      "Origin":"USA"
   }
  ]
  
  // Use for loop to print the name of cars in console. 
   for(let i=0;i<car.length;i++){
       const carname = car[i].Name
       console.log(carname);
   }

   for(let key in car){
      console.log(key + " : "+ car[key].Name);
   }

   for(const data of car){
     console.log(data);
   }

   car.forEach(function(name) {
     console.log( "Car Name - "  + name.Name + " && Acceleration is " + name.Acceleration);
   });
