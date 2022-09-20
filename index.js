//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arrayOfDriverNames, nameWeAreLookingFor){
    const result = arrayOfDriverNames.filter(name => name.toUpperCase() === nameWeAreLookingFor.toUpperCase());
    return (result)
} 
 

function fuzzyMatch(arrayOfDriverNames, nameWeAreLookingFor){
    const result = arrayOfDriverNames.filter(name => name.charAt(0) === nameWeAreLookingFor.charAt(0));
    return (result)
} 


function matchName(arrayOfDriverNames, nameWeAreLookingFor){
    const result = arrayOfDriverNames.filter(query => query.name === nameWeAreLookingFor);
    return (result)
} 





    