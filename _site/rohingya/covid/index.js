//Scrollytelling Template start.
//CTRL+F5 to reload in chrome.
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    
    if (record.image) {
        var image = new Image();  
        image.src = record.image;  
        chapter.appendChild(image);
    }
    
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;	  
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";	  
    return {
      url: url + suffix
  }	  
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    // center: config.chapters[0].location.center,
    // zoom: config.chapters[0].location.zoom,
    // bearing: config.chapters[0].location.bearing,
    // pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

//from scrollydrive.
function handleStepProgress(response) {
    let stepProgress;

    if (response.element.id.slice(0,5) === 'drive') {
        let driveSlideNum = parseInt(response.element.id.slice(-1));
        if (driveSlideNum === 0) {
            map.setLayoutProperty('animatedLine', 'visibility', 'visible');
            stepProgress = Math.round(response.progress*driveSmoothness);
        } else {
            stepProgress = Math.round(response.progress*driveSmoothness+driveSmoothness*driveSlideNum);
        }
        changeCenter(stepProgress);
    }
}

map.on("load", function() {

    //from scrollydrive.
    let w = window.innerWidth;
    let initBounds = routeData.features[0].geometry.coordinates;

    if (followPoint === false) {
        var bounds = initBounds.reduce(function(bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(initBounds[0], initBounds[0]));

        if (w >= 500) {
            map.fitBounds(bounds, {
                padding: {top: 150, bottom: 150, right: -100, left: 200},
                duration: 0
            });
        } else {
            map.fitBounds(bounds, {
                padding: 20,
                duration: 0
            });
        }
    } else {
        map.setZoom(followZoomLevel);
        map.setBearing(followBearing);
        map.setPitch(followPitch);
    }

    map.addSource('lineSource', {
        "type": "geojson",
        "data": geojsonPoint
    });
    map.addSource('pointSource', {
        "type": "geojson",
        "data": geojsonPoint
    });
    map.addLayer({
      "id": "animatedLine",
      "type": "line",
      "source": "lineSource",
      'paint': {
        'line-opacity': 1,
        'line-color': '#333',
        'line-width': 3.5
    },
    'layout': {
        'visibility': 'none'
    }
    });
    map.addLayer({
      "id": "animatedPoint",
      "type": "circle",
      "source": "pointSource",
      'paint': {
        'circle-radius': 5,
        'circle-opacity': 1,
        'circle-color': '#333'
    },
    'layout': {
           // 'visibility': 'none'
    }
    });

    //ch01 slider for time series of covid.
    var slider = document.createElement('input');
    var label = document.createElement('p');
    var dates = ['2/1/2020', '2/9/2020', '3/9/2020', '4/9/2020',
                 '5/9/2020', '6/9/2020', '7/9/2020', '8/9/2020'];
    var month = 1;
    slider.id = 'month';
    slider.type = 'range';
    slider.min = 1;
    slider.max = 8;
    slider.value = 1;
    slider.step = 1;
    label.innerHTML = 'Month: January';
    var parent = document.getElementById('ch01-2').getElementsByClassName('light')[0];
    parent.appendChild(label);
    parent.appendChild(slider);
    slider.addEventListener('input', function(e) {
        month = parseInt(e.target.value, 10);
        switch(month) {
            case 1:
            label.innerHTML = 'Month: January';
            map.setPaintProperty('covid01', 'circle-opacity', 0.8);
            break;
            case 2:
            label.innerHTML = 'Month: February';
            map.setPaintProperty('covid02', 'circle-opacity', 0.8);
            break;
            case 3:
            label.innerHTML = 'Month: March';
            map.setPaintProperty('covid03', 'circle-opacity', 0.8);
            break;
            case 4:
            label.innerHTML = 'Month: April';
            map.setPaintProperty('covid04', 'circle-opacity', 0.8);
            break;
            case 5:
            label.innerHTML = 'Month: May';
            map.setPaintProperty('covid05', 'circle-opacity', 0.8);
            break;
            case 6:
            label.innerHTML = 'Month: June';
            map.setPaintProperty('covid06', 'circle-opacity', 0.8);
            break;
            case 7:
            label.innerHTML = 'Month: July';
            map.setPaintProperty('covid07', 'circle-opacity', 0.8);
            break;
            case 8:
            label.innerHTML = 'Month: August';
            map.setPaintProperty('covid08', 'circle-opacity', 0.8);
            break;
            default:
        }
        setInvisibleExcept(month);
        console.log(month);
    });
    function setInvisibleExcept(month) {
        for (k = 1; k <= 8; k++) {
            if (k != month) {
                map.setPaintProperty('covid0' + k, 'circle-opacity', 0);
            }
        }
    }
    // function filterBy(month) {
    //     var filters = ['==', 'month', month];
    //     map.setFilter('covid01', filters);
    // }
    d3.json(
        './data/time_series_covid19_confirmed_global.geojson',
        //'./data/collisions1601.geojson'  //nyc collisions data
        function(err, data) {
            if (err) throw err;
            //ch01: covid all around the world time-series viz.
            map.addSource('coviddata', {
                type: 'geojson',
                data: data
            });
            //separate layers of all countries for each month.
            map.addLayer({
                id: 'covid01',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[0]]],
                    //['number', ['get', 'Casualty']],  //nyc collisions
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[0]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid02',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[1]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[1]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid03',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[2]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[2]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid04',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[3]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[3]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid05',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[4]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[4]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid06',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[5]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[5]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid07',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[6]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[6]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
            map.addLayer({
                id: 'covid08',
                type: 'circle',
                source: 'coviddata',
                paint: {
                    'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[7]]],
                    0, 4,
                    150000, 12,
                    500000, 22,
                    1000000, 40,
                    2000000, 50
                    ],
                    'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['number', ['get', dates[7]]],
                    0, '#3BB3C3',
                    150000, '#669EC4',
                    500000, '#8B88B6',
                    1000000, '#A2719B',
                    2000000, '#AA5E79'],
                    'circle-opacity': 0.8
                }
            });
        }
    );

    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    })
    .onStepProgress(handleStepProgress);
    createLine();
});

// setup resize event
window.addEventListener('resize', scroller.resize);
//Scrollytelling Template end.

//from scrollydrive.
$(document).ready(function (){
    $.ajax({
      // url:"./data/highwaydrive.geojson",
      url:"./data/path-dhaka-balukhali-short.geojson",
      dataType: "json",
      success: function (data) {
        console.log('data', data.features[0]);
        routeData = data;
    },
    error: function () {
        console.log('error loading data');
    }
});
});