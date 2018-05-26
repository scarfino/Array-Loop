/*
@scarfino 2018
Display all elements in an array programmatically, rather than manually. Then do it in reverse.
*/

let vacationSpots = ['italy', 'france', 'australia'];
for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);

}

console.log('Once more! But in reverse!')

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
