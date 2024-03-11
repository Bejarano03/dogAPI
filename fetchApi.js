async function logDogs(){
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    const dogs = await response.json();
    console.log(dogs);
}

logDogs();