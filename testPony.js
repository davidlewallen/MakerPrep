var ponies:
[ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ]

var ownerEmail = "sandy@hotmail.com"

function getPonyAllergies (ponies, ownerEmail) {
  return ponies.
  filter(function(ponie) {
    return ponie.email === ownerEmail
  }).
  map(function(ponie) {
    return ponie.allergies;
  }).
  concatAll().
  reduce(function(previousVal, currentVal) {
    return previousVal !== currentVal;
  })
}

console.log(getPonyAllergies(ponies, ownerEmail))