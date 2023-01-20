const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function() {
    const timeUnits = document.getElementById("timeUnitsInput").value;
    const output = maxProfit(timeUnits);
    document.getElementById("output").innerHTML = output;
  });
  function maxProfit(time) {
    let theatres = 0;
    let pubs = 0;
    let commercialParks = 0;
    let earnings = 0;
  
    // calculate the maximum number of theatres that can be built
    while (time >= 5) {
        theatres++;
        time -= 5;
        earnings +=time* 1500;
    }
  
    // calculate the maximum number of pubs that can be built
    while (time >= 4) {
        pubs++;
        time -= 4;
        earnings +=time* 1000;
    }
  
    // calculate the maximum number of commercial parks that can be built
    while (time >= 10) {
        commercialParks++;
        time -= 10;
        earnings +=time* 3000;
    }
  
   
      return `T:${theatres} P:${pubs} C:${commercialParks} Earnings: $${earnings}`;
}












