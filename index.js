showMaps = maps => {
  const mapsDiv = document.querySelector('#apex-maps');
  console.log(mapsDiv);
  //maps.forEach(map => {
	  	console.log(maps);
    const mapElement = document.createElement('p');
	console.log(maps.battle_royale.current.map);
    mapElement.innerText = maps.battle_royale.current.map + ' for ' + maps.battle_royale.current.remainingMins+ ' mins';
    
    mapsDiv.append(mapElement);
  //});
}

fetch('https://api.mozambiquehe.re/maprotation?version=2&auth=j0m9K0gLd0kxEY3ztzZ7')
   .then(response => response.json())
   .then(maps => showMaps(maps));
   
   
