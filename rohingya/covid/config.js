var config = {
    //vintage style
    //style: 'mapbox://styles/recfreq/ckdmmdb771fmm1jmvpv0dtkn0',
    //frank style
    style: 'mapbox://styles/recfreq/ckdxjcxbl45py19npn6zmi4jc',
    accessToken: 'pk.eyJ1IjoicmVjZnJlcSIsImEiOiJjamtoNXhvZTEwM3NwM3ZxcWszYTN3ZWl4In0.PVWzx-AiSNlZEYR1YZPrVw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Greatest Cost',
    subtitle: 'The desperate pleas of Rohingya refugees admist COVID-19',
    byline: '',
    footer: 'by Fabeha Monir, Hannah Nguyen, and RAY LC',
    chapters: [
        {
            id: 'ch00',
            title: 'A visual, narrative, data exploration.',
            image: './images/fabeha01.jpg',
            description: '\"Every day we are getting the news that someone has infected by corona virus. We are already living miserably. There is scarcity of water in the camp. How will we wash our hands, where will we get soap to clean our hands?\"ù- Tasmia Fatema, 26 years old Rohingya woman is living in a tent with her six-moth old daughter Nur Kayda, along nine other members of her family. It\'s been three years since 1.4 million Rohingya Muslims fled across the border into south eastern Bangladesh from Myanmar.',
            location: {
                center: [92.07755, 21.15911],
                zoom: 10.97,
                pitch: 43.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'bound-countries',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'bound-countries',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch01',
            title: 'The world-wide impact of COVID-19.',
            //image: './path/to/image/source.png',
            description: '.',
            location: {
                //center: [-74.0059, 40.7128],  //nyc collisions
                //zoom: 12,  //nyc collisions
                center: [40.63206, 43.05442],
                zoom: 2.24,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'bound-countries',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'bound-countries',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch02',
            title: 'Dhaka to Cox\'s Bazar',
            //image: './path/to/image/source.png',
            description: '.',
            location: {
                center: [90.28579, 22.40465],
                zoom: 7.54,
                pitch: 33.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0
                }
            ],
            onChapterExit: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'ch03',
            title: 'Cox\'s Bazar to Balukhali',
            //image: './path/to/image/source.png',
            description: '.',
            location: {
                center: [91.95948, 21.31914],
                zoom: 10.36,
                pitch: 33.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0.1
                }
            ]
        },
        {
            id: 'ch04',
            title: 'Balukhali',
            image: './images/fabeha03.jpg',
            description: 'A man is spraying disinfectant as a precaution to prevent Covid 19 spread in the Rohingya Refugee camp, Cox\'s Bazar, Bangladesh. As many as 60,000-90,000 people are jammed into each square kilometre, with families of up to a dozen sharing small shelters in the Rohingya Camp. Everyone is breathing the same air inside that shelter, coughing, sneezing without covering their mouth. Refugees living in plastic shacks side by side, the 34 camps have more than 40 times Bangladesh\'s average population density. Each shack is barely 107 square feet and many are packed with up to 12 residents.',
            location: {
                center: [92.13069, 21.14027],
                zoom: 12.46,
                pitch: 58.50,
                bearing: -60.80
            },
            onChapterEnter: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0.1
                }
            ]
        },
        {
            id: 'ch05',
            title: 'Balukhali',
            image: './images/fabeha02.jpg',
            description: 'Mohammad Yassin is in hurry and heading for his tent as the cyclone is approaching the Rohingya Refugee Camp, Cox\'s Bazar, Bangladesh. \"We will simply die if it spreads quickly. None of us going out unnecessarily. Everyone is now fearing. But how can we keep distance with others. We do not have space in our own house\", Abdul Hayes shares while he was reading Quran inside his tent. He stopped going to Mosque after 1275 houses in F block have been red marked and lock down with red flags.',
            location: {
                center: [92.13069, 21.14027],
                zoom: 12.46,
                pitch: 58.50,
                bearing: -60.80
            },
            onChapterEnter: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0.1
                }
            ]
        },
        {
            id: 'ch06',
            title: 'Hardships continue in Rohingya',
            //image: './path/to/image/source.png',
            description: 'In early April, authorities imposed a complete lockdown after a number of cases were found in Cox\'s Bazar district, restricting all traffic in and out of the camps. Bangladesh authorities also forced aid organizations to slash their camp presence by 80 percent. Rights groups and activists have expressed concerns that the camps are hotspots of misinformation about the pandemic because of an internet ban imposed last September. Authorities inside the camp announcing in megaphone, \"Stay at home, Keep your distances and wash hands frequently.\"',
            location: {
                center: [92.07755, 21.15911],
                zoom: 10.97,
                pitch: 43.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'usfederalprisons-avxt9b',
                    //opacity: 0.1
                }
            ]
        }
    ]
};
