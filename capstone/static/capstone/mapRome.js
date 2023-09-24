
    // my apikey
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwLXVuNjIzIiwiYSI6ImNsamFsNmhxbjBjZmUzZ25sNGVlbDV6MXEifQ.JHQ6f3lO0v427Py_snS_Qg';

   const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [12.49723, 41.89281], // Rome starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('load', () => {
        // Add an image to use as a custom marker
        map.loadImage(
            'https://ricozl-fantastic-zebra-7x6j7wp9p9fxg94-8000.app.github.dev/static/capstone/mapbox-marker-icon-20px-green.png',

            (error, image) => {
                if (error) throw error;
                map.addImage('marker2', image)

                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Trevi Fountain</strong><p>Visit the Trevi Fountain where a coin tossed over your shoulder will guarantee your return to Rome.</p><a href="https://www.archeoroma.org/sites/trevi-fountain/" target="_blank" title="Opens in a new window" id="#pic">For more about the Trevi Fountain.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.483239912221268, 41.90110677437803]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>The Pantheon</strong><p>Built during Ancient Rome, the Pantheon sits in a lively square with cafes all around.</p><a href="https://www.pantheonroma.com/home-eng/" target="_blank" title="Opens in a new window" id="#pic">For more about the Pantheon</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.476883623407923, 41.89882638667701]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>The Arch of Septimius Severus</strong><p>The striking triumphal Arch of Septimius Severus, located at the western end of the Roman Forum</p><a href="https://www.romawonder.com/arch-septimius-severus-roman-forum-rome-italy/" target="_blank" title="Opens in a new window" id="#pic">For more about the Arch of Septimius Severus</a>',
                               },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.484748, 41.892820]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Piazza Navona</strong><p>The Piazza Navona is a favorite place for both Romans and visitors to sit and watch the world go by.</p><a href="https://www.archeoroma.org/sites/piazza-navona/" target="_blank" title="Opens in a new window" id="#pic">For more about the Piazza Navona</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.473197, 41.898083]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Vittorio Emmanuele Monument</strong><p>Nestled in Piazza Venezia, at the end of Via del Corso, the Victor Emmanuel II Monument is a gigantic neo-classical building celebrating the unification of Italy under the aegis of its first king: the legendary Victor-Emmanuel II.</p><a href="https://www.ulysses.travel/en/victor-emmanuel-ii-monument-rome/" target="_blank" title="Opens in a new window">For more on the Vittoriano.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.483046, 41.894458]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Testaccio Market</strong><p>The popular local food market with food stalls and a central seating area is popular with locals and visitors alike</p> <a href="https://www.marketsofrome.com/home/testaccio-market" target="_blank" title="Opens in a new window">More info on Testaccio Market and the neighborhood.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.473795, 41.876813]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Basilica of Santa Maria in Trastevere</strong><p>Known for vibrant and beautiful mosaics</p> <a href="http://www.santamariaintrastevere.it" target="_blank" title="Opens in a new window">More info about Santa Maria in Trastevere</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.4693832, 41.8894697]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Chiostro del Bramante</strong><p>The Bramante Cloister is in Santa Maria della Pace and has an upscale cafe with indoor and outdoor tables.</p><a href="http://www.romawonder.com/bramante-cloister-history-opening-hours/" target="_blank" title="Opens in a new window">More info about the Caffe in Chiostro del Bramante</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.471680, 41.899880]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Gelateria del Teatro</strong><p><a href="https://www.gelateriadelteatro.it/gdt_en/" target="_blank">Gelateria del Teatro</a> has fresh, artisanal flavors of gelaterie and is located next to the stairs to the theater.</p>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.470470, 41.900490]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Colosseum</strong><p>The Colosseum (Flavian Amphitheater) is surely the most famous monument of Rome, so much so that it has come to represent the city itself, as well as the glories of the Roman Empire.</p><a href="https://www.archeoroma.org/sites/colosseum/" target="_blank" title="Opens in a new window" id="#pic">For more about the Colosseum</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.492230894572035, 41.89042581503916]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Giolitti Gelateria</strong><p>A traditional gelateria that has delighted Italians and visitors for many years.</p><a href="https://www.giolitti.it" target="_blank" title="Opens in a new window" id="#pic">For more about Giolitti Gelateria.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.477270, 41.901060]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Sant Eustachio Il Caffe</strong><p>Considered the best coffee in Rome and loved by locals and visitors.</p><a href="https://caffesanteustachio.com/?lang=en" target="_blank" title="Opens in a new window" id="#pic">For more about Sant Eustachio Il Caffe.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.475260, 41.898232]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Ara Pacis</strong><p>The altar of peace is the monument that commemorates the victories of Augustus and symbolizes the establishment of peace in the Roman Empire</p><a href="https://www.archeoroma.org/sites/ara-pacis/" target="_blank" title="Opens in a new window" id="#pic">For more about the Ara Pacis.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.475452, 41.906033]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Fontana di Quattro Fiumi</strong><p>Considered the best coffee in Rome and loved by locals and visitors.</p><a href="https://www.archeoroma.org/sites/piazza-navona/" target="_blank" title="Opens in a new window" id="#pic">For more about the Fontana di Quattro Fiumi.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.473200, 41.899132]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong>Doria Pamphilji Gallery</strong><p>The Doria Pamphilji family opens their private art gallery to the public to share their magnificent collection.</p><a href="https://www.doriapamphilj.it/en/" target="_blank" title="Opens in a new window" id="#pic">For more about the Doria Pamphilji Gallery.</a>',
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [12.48134, 41.897800]
                                }
                            },
                        ]
                    }
                });

                // Add a layer showing the places.
                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': 'marker2',
                        'icon-size': 1,
                        'icon-allow-overlap': true,
                    },

                });

            });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
        });
    });

