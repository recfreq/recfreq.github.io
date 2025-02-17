// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "http://i.imgur.com/R99L6xT.jpg",
//     "autoLoad": true,
//     "autoRotate": -2,
//     "pitch": 2.3,
//     "yaw": -135.4,
//     "hfov": 120,
//     "hotSpots": [
//         {
//             "pitch": -5,
//             "yaw": 272,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "go here",
//         },
//         {
//             "pitch": -12,
//             "yaw": 345,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "go here"
//         },
//         {
//             "pitch": -5,
//             "yaw": 50,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "go here"
//         },
//         {
//             "pitch": 8,
//             "yaw": 90,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "go here"
//         },
//         {
//             "pitch": 0,
//             "yaw": 132,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "go here"
//         }
//     ]
// });

// Splash screen goes away on click.
var popup = document.getElementById("popup");
var popup2 = document.getElementById("popup2");

popup.addEventListener("click", function(e) {
    popup.style.zIndex = "-5";    
});
popup2.addEventListener("click", function(e) {
    popup2.style.zIndex = "-5";
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

pannellum.viewer('panorama', {   
"type": "equirectangular",
"autoLoad": true,
"autoRotate": -4,
"default": {
    "firstScene": "B10",
},

"scenes": {
//D12 hub
"B10": {
    "hfov": 120,
    "yaw": 300,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-10.jpg",
    "hotSpots": [
    {
        "pitch": -3,
        "yaw": 272,
        "type": "scene",
        "text": "1208",
        "sceneId": "B11",
        "cssClass": "custom-hotspot11"
    },
    {
        "pitch": -8,
        "yaw": 345,
        "type": "scene",
        "text": "1205",
        "sceneId": "B12",
        "cssClass": "custom-hotspot12"
    },
    {
        "pitch": 0,
        "yaw": 50,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -5,
        "yaw": 90,
        "type": "scene",
        "text": "ping pong",
        "sceneId": "B15",
        "cssClass": "custom-hotspot15"
    },
    {
        "pitch": -6,
        "yaw": 120,
        "type": "scene",
        "text": "petlab",
        "sceneId": "B16",
        "cssClass": "custom-hotspot16"
    },
    {
        "pitch": -12,
        "yaw": 256,
        "type": "scene",
        "text": "body",
        "sceneId": "B10",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": 8,
        "yaw": 304,
        "type": "scene",
        "text": "power cord",
        "sceneId": "B10",
        "cssClass": "custom-hotspotD15"
    },
    {
        "pitch": -37,
        "yaw": 357,
        "type": "scene",
        "text": "table top (link)",
        "sceneId": "B10",
        "URL": "https://media.giphy.com/media/KTyJ3VPxkbDKU/giphy.gif",
        "cssClass": "custom-hotspotD23"
    },
    {
        "pitch": 5,
        "yaw": 135,
        "type": "scene",
        "text": "figurine",
        "sceneId": "B10",
        "cssClass": "custom-hotspotD26"
    }
    ]
},

//1208
"B11": {
    "hfov": 120,
    "yaw": 13,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-11.jpg",
    "hotSpots": [
    {
        "pitch": 3,
        "yaw": 325,
        "type": "scene",
        "text": "Sven",
        "sceneId": "B24",
        "cssClass": "custom-hotspot24"
    },
    {
        "pitch": -3,
        "yaw": 302,
        "type": "scene",
        "text": "quiet zone",
        "sceneId": "B23",
        "cssClass": "custom-hotspot23"
    },
    {
        "pitch": 1,
        "yaw": 190,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -6,
        "yaw": 215,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": -8,
        "yaw": 135,
        "type": "scene",
        "text": "1205",
        "sceneId": "B12",
        "cssClass": "custom-hotspot12"
    },
    {
        "pitch": -26,
        "yaw": 217,
        "type": "scene",
        "text": "body",
        "sceneId": "B11",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": 8,
        "yaw": 171,
        "type": "scene",
        "text": "ventilation",
        "sceneId": "B11",
        "cssClass": "custom-hotspotD24"
    }
    ]
},

//1205
"B12": {
    "hfov": 120,
    "yaw": 330,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-12.jpg",
    "hotSpots": [
    {
        "pitch": -6,
        "yaw": 65,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": -5,
        "yaw": 135,
        "type": "scene",
        "text": "1208",
        "sceneId": "B11",
        "cssClass": "custom-hotspot11"
    },
    {
        "pitch": 0,
        "yaw": 10,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -21,
        "yaw": 259,
        "type": "scene",
        "text": "body",
        "sceneId": "B12",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": 15,
        "yaw": 60,
        "type": "scene",
        "text": "power cord",
        "sceneId": "B12",
        "cssClass": "custom-hotspotD15"
    },
    {
        "pitch": 10,
        "yaw": 105,
        "type": "scene",
        "text": "ventilation",
        "sceneId": "B12",
        "cssClass": "custom-hotspotD24"
    },
    {
        "pitch": -8,
        "yaw": 279,
        "type": "scene",
        "text": "tv",
        "sceneId": "B12",
        "cssClass": "custom-hotspotD27"
    }
    ]
},

//window
"B13": {
    "hfov": 120,
    "yaw": 330,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-13.jpg",
    "hotSpots": [
    {
        "pitch": -1,
        "yaw": 110,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": -2,
        "yaw": 152,
        "type": "scene",
        "text": "1208",
        "sceneId": "B11",
        "cssClass": "custom-hotspot11"
    },
    {
        "pitch": -6,
        "yaw": 180,
        "type": "scene",
        "text": "1205",
        "sceneId": "B12",
        "cssClass": "custom-hotspot12"
    },
    {
        "pitch": 2,
        "yaw": 25,
        "type": "scene",
        "text": "ping pong",
        "sceneId": "B15",
        "cssClass": "custom-hotspot15"
    },
    {
        "pitch": -1,
        "yaw": 55,
        "type": "scene",
        "text": "petlab",
        "sceneId": "B16",
        "cssClass": "custom-hotspot16"
    },
    {
        "pitch": 0,
        "yaw": 5,
        "type": "scene",
        "text": "power cord",
        "sceneId": "B13",
        "cssClass": "custom-hotspotD15"
    },
    {
        "pitch": -9,
        "yaw": 217,
        "type": "scene",
        "text": "body",
        "sceneId": "B13",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": -6,
        "yaw": 275,
        "type": "scene",
        "text": "street (link)",
        "sceneId": "B13",
        "URL": "https://digital-photography-school.com/street-photographers-guide-new-york-city/",
        "cssClass": "custom-hotspotD16"
    },
    {
        "pitch": -10,
        "yaw": 130,
        "type": "scene",
        "text": "table top (link)",
        "sceneId": "B10",
        "URL": "https://media.giphy.com/media/KTyJ3VPxkbDKU/giphy.gif",
        "cssClass": "custom-hotspotD23"
    }
    ]
},

//ping pong
"B15": {
    "hfov": 120,
    "yaw": 350,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-15.jpg",
    "hotSpots": [
    {
        "pitch": -2,
        "yaw": 135,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": 0,
        "yaw": 180,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -1,
        "yaw": 80,
        "type": "scene",
        "text": "petlab",
        "sceneId": "B16",
        "cssClass": "custom-hotspot16"
    },
    {
        "pitch": -12,
        "yaw": 30,
        "type": "scene",
        "text": "ping pong",
        "sceneId": "B15",
        "cssClass": "custom-hotspotD10"
    },
    {
        "pitch": -5,
        "yaw": 352,
        "type": "scene",
        "text": "phone booth (link)",
        "sceneId": "B15",
        "URL": "http://www.pdtnyc.com/",
        "cssClass": "custom-hotspotD25"
    },
    {
        "pitch": 0,
        "yaw": 270,
        "type": "scene",
        "text": "street (link)",
        "sceneId": "B15",
        "URL": "https://digital-photography-school.com/street-photographers-guide-new-york-city/",
        "cssClass": "custom-hotspotD16"
    },
    {
        "pitch": -30,
        "yaw": 83,
        "type": "scene",
        "text": "recycle (link)",
        "sceneId": "B15",
        "URL": "http://www1.nyc.gov/assets/dsny/zerowaste/residents/recycling.shtml",
        "cssClass": "custom-hotspotD14"
    },
    {
        "pitch": 13,
        "yaw": 173,
        "type": "scene",
        "text": "ventilation",
        "sceneId": "B15",
        "cssClass": "custom-hotspotD24"
    }
    ]
},

//petlab
"B16": {
    "hfov": 120,
    "yaw": 310,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-16.jpg",
    "hotSpots": [
    {
        "pitch": -1,
        "yaw": 30,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": 0,
        "yaw": 100,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -2,
        "yaw": 160,
        "type": "scene",
        "text": "ping pong",
        "sceneId": "B15",
        "cssClass": "custom-hotspot15"
    },
    {
        "pitch": 0,
        "yaw": 315,
        "type": "scene",
        "text": "1202",
        "sceneId": "B17",
        "cssClass": "custom-hotspot17"
    },
    {
        "pitch": -12,
        "yaw": 255,
        "type": "scene",
        "text": "petlab (link)",
        "sceneId": "B16",
        "URL": "http://petlab.parsons.edu/newWeb/",
        "cssClass": "custom-hotspotD18"
    },
    {
        "pitch": -55,
        "yaw": 185,
        "type": "scene",
        "text": "recycle (link)",
        "sceneId": "B16",
        "URL": "http://www1.nyc.gov/assets/dsny/zerowaste/residents/recycling.shtml",
        "cssClass": "custom-hotspotD14"
    },
    {
        "pitch": -10,
        "yaw": 5,
        "type": "scene",
        "text": "body",
        "sceneId": "B16",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": 0,
        "yaw": 351,
        "type": "scene",
        "text": "tv",
        "sceneId": "B16",
        "cssClass": "custom-hotspotD27"
    },
    {
        "pitch": 0,
        "yaw": 195,
        "type": "scene",
        "text": "tv",
        "sceneId": "B16",
        "cssClass": "custom-hotspotD27"
    }
    ]
},

//1202
"B17": {
    "hfov": 120,
    "yaw": 230,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-17.jpg",
    "hotSpots": [
    {
        "pitch": -1,
        "yaw": 130,
        "type": "scene",
        "text": "petlab",
        "sceneId": "B16",
        "cssClass": "custom-hotspot16"
    },
    {
        "pitch": 1,
        "yaw": 90,
        "type": "scene",
        "text": "window",
        "sceneId": "B13",
        "cssClass": "custom-hotspot13"
    },
    {
        "pitch": -1,
        "yaw": 290,
        "type": "scene",
        "text": "lockers",
        "sceneId": "B18",
        "cssClass": "custom-hotspot18"
    },
    {
        "pitch": -10,
        "yaw": 170,
        "type": "scene",
        "text": "tv",
        "sceneId": "B17",
        "cssClass": "custom-hotspotD27"
    }
    ]
},

//lockers
"B18": {
    "hfov": 120,
    "yaw": 190,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-18.jpg",
    "hotSpots": [
    {
        "pitch": -5,
        "yaw": 225,
        "type": "scene",
        "text": "rear entrance",
        "sceneId": "B19",
        "cssClass": "custom-hotspot19"
    },
    {
        "pitch": -4,
        "yaw": 35,
        "type": "scene",
        "text": "hall way",
        "sceneId": "B20",
        "cssClass": "custom-hotspot20"
    },
    {
        "pitch": -1,
        "yaw": 120,
        "type": "scene",
        "text": "1202",
        "sceneId": "B17",
        "cssClass": "custom-hotspot17"
    },
    {
        "pitch": 4,
        "yaw": 248,
        "type": "scene",
        "text": "restroom (link)",
        "sceneId": "B18",
        "URL": "https://img.buzzfeed.com/buzzfeed-static/static/2014-08/12/6/enhanced/webdr02/anigif_enhanced-30571-1407840161-1.gif?downsize=715:*&output-format=auto&output-quality=auto",
        "cssClass": "custom-hotspotD19"
    },
    {
        "pitch": -14,
        "yaw": 270,
        "type": "scene",
        "text": "body",
        "sceneId": "B18",
        "cssClass": "custom-hotspotD13"
    },
    {
        "pitch": -24,
        "yaw": 10,
        "type": "scene",
        "text": "player piano (link)",
        "sceneId": "B18",
        "URL": "https://www.youtube.com/watch?v=ZKkrVddqQSw",
        "cssClass": "custom-hotspotD11"
    },
    {
        "pitch": -10,
        "yaw": 160,
        "type": "scene",
        "text": "lock",
        "sceneId": "B18",
        "cssClass": "custom-hotspotD30"
    }
    ]
},

//rear entrance
"B19": {
    "hfov": 120,
    "yaw": 270,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-19.jpg",
    "hotSpots": [
    {
        "pitch": -3,
        "yaw": 110,
        "type": "scene",
        "text": "hall way",
        "sceneId": "B20",
        "cssClass": "custom-hotspot20"
    },
    {
        "pitch": -5,
        "yaw": 62,
        "type": "scene",
        "text": "restroom (link)",
        "sceneId": "B19",
        "URL": "https://img.buzzfeed.com/buzzfeed-static/static/2014-08/12/6/enhanced/webdr02/anigif_enhanced-30571-1407840161-1.gif?downsize=715:*&output-format=auto&output-quality=auto",
        "cssClass": "custom-hotspotD19"
    },
    {
        "pitch": -16,
        "yaw": 35,
        "type": "scene",
        "text": "mannequin",
        "sceneId": "B19",
        "cssClass": "custom-hotspotD31"
    },
    {
        "pitch": 1,
        "yaw": 130,
        "type": "scene",
        "text": "lockers",
        "sceneId": "B18",
        "cssClass": "custom-hotspot18"
    }
    ]
},

//hall way
"B20": {
    "hfov": 120,
    "yaw": 350,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-20.jpg",
    "hotSpots": [
    {
        "pitch": -2,
        "yaw": 180,
        "type": "scene",
        "text": "lockers",
        "sceneId": "B18",
        "cssClass": "custom-hotspot18"
    },
    {
        "pitch": -2,
        "yaw": 343,
        "type": "scene",
        "text": "pantry",
        "sceneId": "B21",
        "cssClass": "custom-hotspot21"
    }
    ]
},

//pantry
"B21": {
    "hfov": 120,
    "yaw": 320,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-21.jpg",
    "hotSpots": [
    {
        "pitch": -5,
        "yaw": 182,
        "type": "scene",
        "text": "hall way",
        "sceneId": "B20",
        "cssClass": "custom-hotspot20"
    },
    {
        "pitch": -1,
        "yaw": 300,
        "type": "scene",
        "text": "microwave",
        "sceneId": "B22",
        "cssClass": "custom-hotspot22"
    },
    {
        "pitch": -2,
        "yaw": 357,
        "type": "scene",
        "text": "quiet zone",
        "sceneId": "B23",
        "cssClass": "custom-hotspot23"
    },
    {
        "pitch": -18,
        "yaw": 265,
        "type": "scene",
        "text": "vending machine (link)",
        "sceneId": "B21",
        "URL": "http://studentlife.ryerson.ca/wp-content/uploads/2014/08/HomerVendingMachine.gif",
        "cssClass": "custom-hotspotD12"
    },
    {
        "pitch": -30,
        "yaw": 55,
        "type": "scene",
        "text": "attention",
        "sceneId": "B21",
        "cssClass": "custom-hotspotD28"
    }
    ]
},

//microwave
"B22": {
    "hfov": 120,
    "yaw": 110,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-22.jpg",
    "hotSpots": [
    {
        "pitch": -3,
        "yaw": 188,
        "type": "scene",
        "text": "hall way",
        "sceneId": "B20",
        "cssClass": "custom-hotspot20"
    },
    {
        "pitch": -20,
        "yaw": 220,
        "type": "scene",
        "text": "pantry",
        "sceneId": "B21",
        "cssClass": "custom-hotspot21"
    },
    {
        "pitch": -14,
        "yaw": 203,
        "type": "scene",
        "text": "vending machine (link)",
        "sceneId": "B22",
        "URL": "http://studentlife.ryerson.ca/wp-content/uploads/2014/08/HomerVendingMachine.gif",
        "cssClass": "custom-hotspotD12"
    },
    {
        "pitch": -38,
        "yaw": 28,
        "type": "scene",
        "text": "coffee machine (link)",
        "sceneId": "B22",
        "URL": "https://s-media-cache-ak0.pinimg.com/originals/1c/4f/91/1c4f91ab2ff24000d80ca98f15600483.gif",
        "cssClass": "custom-hotspotD20"
    },
    {
        "pitch": -2,
        "yaw": 143,
        "type": "scene",
        "text": "quiet zone",
        "sceneId": "B23",
        "cssClass": "custom-hotspot23"
    }
    ]
},

//quiet zone
"B23": {
    "hfov": 120,
    "yaw": 350,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-23.jpg",
    "hotSpots": [
    {
        "pitch": -2,
        "yaw": 173,
        "type": "scene",
        "text": "hall way",
        "sceneId": "B20",
        "cssClass": "custom-hotspot20"
    },
    {
        "pitch": -15,
        "yaw": 180,
        "type": "scene",
        "text": "pantry",
        "sceneId": "B21",
        "cssClass": "custom-hotspot21"
    },
    {
        "pitch": 2,
        "yaw": 350,
        "type": "scene",
        "text": "Sven",
        "sceneId": "B24",
        "cssClass": "custom-hotspot24"
    },
    {
        "pitch": -12,
        "yaw": 321,
        "type": "scene",
        "text": "quiet sign (link)",
        "sceneId": "B23",
        "URL": "https://viralviralvideos.com/wp-content/uploads/GIF/2014/09/Arnold-Arnold-Schwarzenegger-Shut-up-STFU-Be-Quiet-Silence-Yell-Yelling-Scream-Screaming-GIF.gif",
        "cssClass": "custom-hotspotD21"
    }
    ]
},

//sven
"B24": {
    "hfov": 120,
    "yaw": 110,
    "type": "equirectangular",
    "panorama": "images/figs_panoB-24.jpg",
    "hotSpots": [
    {
        "pitch": -5,
        "yaw": 250,
        "type": "scene",
        "text": "1208",
        "sceneId": "B11",
        "cssClass": "custom-hotspot11"
    },
    {
        "pitch": 0,
        "yaw": 275,
        "type": "scene",
        "text": "1205",
        "sceneId": "B12",
        "cssClass": "custom-hotspot12"
    },
    {
        "pitch": -2,
        "yaw": 25,
        "type": "scene",
        "text": "quiet zone",
        "sceneId": "B23",
        "cssClass": "custom-hotspot23"
    },
    {
        "pitch": -8,
        "yaw": 290,
        "type": "scene",
        "text": "D12 hub",
        "sceneId": "B10",
        "cssClass": "custom-hotspot10"
    },
    {
        "pitch": 2,
        "yaw": 140,
        "type": "scene",
        "text": "sven (link)",
        "sceneId": "B24",
        "URL": "https://vimeo.com/36416086",
        "cssClass": "custom-hotspotD32"
    }
    ]
}

}
});
