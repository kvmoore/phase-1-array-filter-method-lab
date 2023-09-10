



function findMatching(drivers, name){

name = name.toLowerCase();

return drivers.filter(function(driver) {

    return driver.toLowerCase() === name.toLowerCase();

  });

}

function fuzzyMatch(drivers, name){

    let len = name.length;
    //drivers.length = 0 ?
    
    return drivers.filter(function(driver) {

        return driver.slice(0,len).toLowerCase() === name.toLowerCase();

    });

}

//name:  home town:

function matchName (drivers, name){

    name = name.toLowerCase()  
    return drivers.filter(function(driver) {
debugger;

    return driver.name.toLowerCase() === name.toLowerCase()
});
}
/*The function should return each element whose name property matches the provided 
string argument.*/
const myDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


  //matchName(myDrivers, "Bobby");