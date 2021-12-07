showMaps = maps => {
    const mapsDiv = document.querySelector('#apex-maps');
    mapsDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    mapsDiv.style.width = 'fit-content';
    mapsDiv.style.fontSize = 'xxx-large';
    console.log(mapsDiv);

    console.log(maps);
    const mapElement = document.createElement('p');
    console.log(maps.battle_royale.current.map);
    mapElement.innerText = maps.battle_royale.current.map + ' for ' + maps.battle_royale.current.remainingMins + ' mins';
    changeBackGround(maps.battle_royale.current.map);
    mapsDiv.append(mapElement);

}
changeBackGround = currentMap => {
    switch (currentMap) {
        case "Storm Point":
            // code block
            folder = "SP/";
            imageCount = 1;
            break;
        case "World's Edge":
            // code block
            folder = "WE/";
            imageCount = 4;
            break;
        default:
            // code block
    }
    imageName = folder + getRandomInt(imageCount) + '.png';
    document.body.style.backgroundImage = "url('" + imageName + "')";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
fetch('https://api.mozambiquehe.re/maprotation?version=2&auth=j0m9K0gLd0kxEY3ztzZ7')
    .then(response => response.json())
    .then(maps => showMaps(maps));