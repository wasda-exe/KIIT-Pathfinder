const campusMap = document.querySelector('.campusMap');
const campusMapIframe = document.querySelector('.campusMapIframe');
const campusMapA = document.querySelector('.campusMapA');

const campusMapList = [
    // {name: 'Campus6', lat: 20.35293, lon: 85.81803},
    {name: 'Campus6', lat: 20.3529, lon: 85.8180},
    // {name: 'Campus6', lat: 20.352, lon: 85.818},
    // {name: 'Campus15', lat: 20.3493504, lon: 85.812258}
    {name: 'Campus15', lat: 20.3493, lon: 85.8122}
];

// console.log(campusMapIframe);
// console.log(campusMapA);
// console.log(campusMapDiv.firstChild);
function getOption(ele){
    // console.log(document.getElementById('campusList').value);
    const selectedValue = ele.value;
    for(let i = 0; i < campusMapList.length; i++)
    {
        if(campusMapList[i].name == selectedValue)
        {
            // salted version
            campusMapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${campusMapList[i].lon}%2C${campusMapList[i].lat}%2C${campusMapList[i].lon+0.002}%2C${campusMapList[i].lat+0.002}&layer=mapnik&marker=${campusMapList[i].lat}%2C${campusMapList[i].lon}`;

            campusMapA.href = `https://www.openstreetmap.org/?mlat=${campusMapList[i].lat}&amp;mlon=${campusMapList[i].lon}#map=17/${campusMapList[i].lat}/${campusMapList[i].lon}`;
        }
    }
}

// campusMapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${campusMapList[i].lon}%2C${campusMapList[i].lat}%2C${campusMapList[i].lon+0.002}%2C${campusMapList[i].lat+0.002}` + "&amp;layer=mapnik&amp;marker=" + `${campusMapList[i].lat}%2C${campusMapList[i].lon}`;


// function getOption(el){
//     // console.log(document.getElementById('campusList').value);
//     const option = el.value;
//     if(option == "Campus6")
//     {
//         campusMapDiv.classList.add('campusMap--opaque');
//         campusMapDiv.classList.remove('campusMap--transparent');
//     }
//     document.createElement('iframe')
//     "https://www.openstreetmap.org/export/embed.html?bbox=85.81620991230012%2C20.351638294143328%2C85.81985771656036%2C20.354223460658297&amp;layer=mapnik&amp;marker=20.352930882809517%2C85.81803381443024"
// }

// campusMapIframe.style.height = "350px";
            // campusMapIframe.style.opacity = "1";
            // campusMapA.style.opacity = "1";
            // setTimeout(function() {
            //     // campusMap.location.reload();
            //     console.log("meow");
            //     campusMapIframe.src = `http://www.openstreetmap.org/export/embed.html?bbox=85.81620991230012%2C20.351638294143328%2C85.81985771656036%2C20.354223460658297&amp;layer=mapnik&amp;marker=20.352930882809517%2C85.81803381443024`;
            //   }, 1500)
            // campusMapIframe.src = `http://www.openstreetmap.org/export/embed.html?bbox=85.81620991230012%2C20.351638294143328%2C85.81985771656036%2C20.354223460658297&amp;layer=mapnik&amp;marker=20.352930882809517%2C85.81803381443024`;
            // console.log(`https://www.openstreetmap.org/export/embed.html?bbox=${campusMapList[i].lon}%2C${campusMapList[i].lat}%2C${campusMapList[i].lon}%2C${campusMapList[i].lat}&amp;layer=mapnik&amp;marker=${campusMapList[i].lat + 0.0000001}%2C${campusMapList[i].lon + 0.0000001}`);
            // console.log(`meow`);
            // console.log(`https://www.openstreetmap.org/export/embed.html?bbox=85.81620991230012%2C20.351638294143328%2C85.81985771656036%2C20.354223460658297&amp;layer=mapnik&amp;marker=20.352930882809517%2C85.81803381443024`);

            // console.log(`https://www.openstreetmap.org/?mlat=${campusMapList[i].lat}&amp;mlon=${campusMapList[i].lon}#map=17/${campusMapList[i].lat}/${campusMapList[i].lon}`);

            // console.log(`bruh`);
            // console.log(`https://www.openstreetmap.org/?mlat=20.35293&amp;mlon=85.81803#map=17/20.35293/85.81803`);

            // document.getElementById('some_frame_id').contentWindow.location.reload();
            // setTimeout(function() {
            //     campusMap.location.reload();
            //     console.log("meow");
            //   }, 5000)
