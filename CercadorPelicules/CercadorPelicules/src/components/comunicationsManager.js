export async function getPelicules(vueObject,a) {
  console.log("vueOBject", vueObject)
  // const response= await fetch('http://localhost/dades_dam.json');
  const response = await fetch(`http://www.omdbapi.com/?s=${a}&apikey=19f8a30e`);
  const pelicules = await response.json();
  vueObject.pelicules = pelicules;
  console.log("arrayPelicules",pelicules);
  
}


