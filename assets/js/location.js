const campusMap = document.querySelector('.campusMap');
const campusMapIframe = document.querySelector('.campusMapIframe');
const campusMapA = document.querySelector('.campusMapA');

const hostelMap = document.querySelector('.hostelMap');
const hostelMapIframe = document.querySelector('.hostelMapIframe');
const hostelMapA = document.querySelector('.hostelMapA');

const activityMap = document.querySelector('.activityMap');
const activityMapIframe = document.querySelector('.activityMapIframe');
const activityMapA = document.querySelector('.activityMapA');

const campusMapList = [
    {name:'Campus3', lat:20.36411796, lon:85.81004187, desc:`School of Civil Engineering, Electrical Engineering, chemistry department and some other departments inside this campus.
    It is a beautiful place to hangout in evening. There is an Open air theater and a stage also for practicing drama, open mic poetry and other extracurricular activities. There is a cafeteria also for serving snacks and celebrating birthdays.`, addr:`10, KIIT Road, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha `},

    {name:'Campus6', lat:20.35293, lon:85.81803, desc:`It is the main attraction of KIIT. It lies in all the photos of KIIT. Inside it lies the KIIT Convention Centre, the ICT Cell and the famous "I Love KIIT" spot. KIIT is incomplete without it.`, addr:`Campus 6, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha 751024, India`},

    {name:'Campus7', lat:20.2674983, lon:85.8425316, desc:`Also known as KSOM, it is the Management Campus of KIIT. It is the most beautiful campus of KIIT. It hosts the famous Garden Library, where everything happens apart from studies. It also hosts the beautiful Sculpture Park and an Auditorium. Studying in this Campus is like a dream come true.`, addr:`KIIT School of Management, Campus-7, KIIT, Bhubaneswar 751024, Odisha, INDIA`},

    {name:'Campus12', lat:20.35444275, lon:85.81897605, desc:`It is the Electronics Campus of KIIT. This is a beautiful campus, which hosts an Open Air Theatre and the beautiful Rose Garden. The Electronics Building also hosts the KIIT Robotics Society, one of the oldest and most important societies of KIIT.`, addr:`KIIT University, Prasanti Vihar Rd, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha 751024`},

    {name:'Campus15', lat:20.3493504, lon:85.812258, desc:`It is the main campus of KIIT, the CSE Block. The driver branch of KIIT i.e. the CSE Branch students study here. There are two blocks, A block and B block. It also boasts of having an Open Air Theatre (OAT - 1), where students  showcase their hidden talents.`, addr:`Campus 15 Road, Chandaka Industrial Estate, K I I T University, Chandrasekharpur`}
    // {name:'Campus3', lat:, lon:, desc:``, addr:``}
];

const hostelMapList = [
    {name:'KP1', lat:20.359916, lon:85.8212318, desc:``, addr:`9R3C+H3W, Shikhar Chandi Rd, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024`},
    {name:'KP4', lat:20.3463862, lon:85.7533722, desc:``, addr:`MCA-Hostel, KP-4, Sishu Vihar, Patia, Bhubaneswar, Odisha 751024`},
    {name:'KP15', lat:20.3536721, lon:85.8158815, desc:``, addr:`Kalinga Institute of Industrial Technology, School of Electronics Engineering, KIIT School of Electronics, University, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024`},
    {name:'QC1', lat:20.3522058, lon:85.7473033, desc:``, addr:`9R28+VWP, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha 751024`},
    {name:'QC4', lat:20.35286, lon:85.7482254, desc:``, addr:`KIIT, Shikhar Chandi Rd, Chandaka Industrial Estate, Bajrang Vihar, Shikhar Chandi Rd, Chandaka Industrial Estate, Bajrang Vihar, Patia, Bhubaneswar, Odisha 751024`},
    // {name:'Campus3', lat:, lon:, desc:``, addr:``},
];
hostelMapList.forEach(element => {
    element.desc = `Students can opt for one of three hostel accommodations: AC, Non-AC and AC with attached washrooms. The rooms are spacious with proper everyday cleaning. All hostel rooms have access to fast wifi (100+mbps). The meal quality is decent for the price charged. The menu consists of a lot of variety for both veg and non-veg consumers. Also, there are seperate hostels for boys and girls in every programme.`;
});

const activityMapList = [
    {name:'KSAC', lat:20.3566019, lon:85.7488876, desc:``, addr:`Kalinga Institute of Industrial Technology, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024`},
    {name:'RoseGarden', lat:20.3513649501, lon:85.8162450998, desc:``, addr:`Campus 12, Prasanti Vihar Road, KIIT University, Bhubaneswar, India 751024`},
    {name:'FoodCourt7', lat:20.3508422, lon:85.7459214, desc:``, addr:`Address: 751024, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha 751024`},
    {name:'ScuplturePark', lat:20.3504725, lon:85.7497315, desc:``, addr:`Address: 9R29+5WR, KIIT Fashion Tech Rd, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha `},
    {name:'KIITAmpitheatre', lat:20.3500175, lon:85.750923, desc:``, addr:`Amphitheatre, Chandaka Industrial Estate, K I I T University, Chandrasekharpur, Bhubaneswar, Odisha 751024`},
    // {name:'Campus3', lat:, lon:, desc:``, addr:``},
];



// console.log(campusMapIframe);
// console.log(campusMapA);
// console.log(campusMapDiv.firstChild);
function getOption(ele){
    // console.log(document.getElementById('campusList').value);
    const selectedValue = ele.value;
    const locationId = ele.getAttribute('id'); // returns string value of attribute
    // const location = locationId.replace('list', ''); // hostel
    // let locationMap = campusMap;
    // let locationMapList = campusMapList;
    // let locationId = ele.getAttribute('id');
    // let locationMapIframe = document.querySelector("." + Object.keys({activityMap})[0] +'Iframe');
    // let locationMapA = document.querySelector("." + Object.keys({activityMap})[0] +'A');
    // console.log(ele.className);
    // let locationMapIframe = document.querySelector("." + ele.className +'Iframe');
    // let locationMapA = document.querySelector("." + ele.className +'A');
    let locationMap = campusMap;
    let locationMapList = campusMapList;
    let locationMapIframe = campusMapIframe;
    let locationMapA = campusMapA;
    // if(location == 'campus')
    // {

    // }
    if(locationId == 'hostelList')
    {
        locationMap = hostelMap;
        locationMapList = hostelMapList;
        locationMapIframe = hostelMapIframe;
        locationMapA = hostelMapA;
    }
    else if(locationId == 'activityList')
    {
        locationMap = activityMap;
        locationMapList = activityMapList;
        locationMapIframe = activityMapIframe;
        locationMapA = activityMapA;
    }
    // if("hostelMap" === Object.keys({hostelMap})[0])
    // {
    //     locationMap = hostelMap;
    //     locationMapList = hostelMapList;
    //     // locationMapIframe = 
    //     // locationMapA
    // }
    // else if("activityMap" === Object.keys({activityMap})[0])
    // {
    //     locationMap = activityMap;
    //     locationMapList = activityMapList;
    //     // locationMapIframe
    //     // locationMapA
    // }
    // console.log(Object.keys({hostelMap})[0]);
    console.log(location);
    console.log(locationMapIframe);
    console.log(locationMapA);
    // console.log("."+Object.keys({activityMap})[0] +'Iframe');
    // console.log(Object.keys({activityMap})[0] + 'A');
    for(let i = 0; i < locationMapList.length; i++)
    {
        if(locationMapList[i].name == selectedValue)
        {
            // salted version
            locationMapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${locationMapList[i].lon}%2C${locationMapList[i].lat}%2C${locationMapList[i].lon+0.002}%2C${locationMapList[i].lat+0.002}&layer=mapnik&marker=${locationMapList[i].lat}%2C${locationMapList[i].lon}`;

            locationMapA.href = `https://www.openstreetmap.org/?mlat=${locationMapList[i].lat}&amp;mlon=${locationMapList[i].lon}#map=17/${locationMapList[i].lat}/${locationMapList[i].lon}`;
        }
    }
}
// let locationMap = campusMap;
    // let locationMapList = campusMapList;
    // let locationId = ele.getAttribute('id');
// function getOption(ele){
//     // console.log(document.getElementById('campusList').value);
//     const selectedValue = ele.value;
//     let locationMap = campusMap;
//     let locationList = undefined;
//     if(ele.className === hostelMap)
//     {
//         locationMap = hostelMap;
//     }
//     else if(ele.className === activityMap)
//     {
//         locationMap = activityMap;
//     }
//     for(let i = 0; i < campusMapList.length; i++)
//     {
//         if(campusMapList[i].name == selectedValue)
//         {
//             // salted version
//             campusMapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${campusMapList[i].lon}%2C${campusMapList[i].lat}%2C${campusMapList[i].lon+0.002}%2C${campusMapList[i].lat+0.002}&layer=mapnik&marker=${campusMapList[i].lat}%2C${campusMapList[i].lon}`;

//             campusMapA.href = `https://www.openstreetmap.org/?mlat=${campusMapList[i].lat}&amp;mlon=${campusMapList[i].lon}#map=17/${campusMapList[i].lat}/${campusMapList[i].lon}`;
//         }
//     }
// }

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
