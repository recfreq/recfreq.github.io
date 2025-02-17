// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    //vintage style
    //style: 'mapbox://styles/recfreq/ckdmmdb771fmm1jmvpv0dtkn0',
    //frank style
    style: 'mapbox://styles/recfreq/ckdxjcxbl45py19npn6zmi4jc',
    accessToken: 'pk.eyJ1IjoicmVjZnJlcSIsImEiOiJjamtoNXhvZTEwM3NwM3ZxcWszYTN3ZWl4In0.PVWzx-AiSNlZEYR1YZPrVw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'THE GREATEST COST',
    subtitle: 'The struggles of Rohingya refugees amidst covid-19',
    byline: 'Fabeha Monir and RAY LC',
    footer: 'by Fabeha Monir and RAY LC, with help from Hannah Nguyen',
    chapters: [
        {
            id: 'ch00',
            title: 'a visual, narrative, data exploration.',
            image: './images/fabeha01.jpg',
            description: '\"Every day we are getting the news that someone has been infected by coronavirus. We are already living miserably. There is scarcity of water in the camp. How will we wash our hands, where will we get soap to clean our hands?\" <br>&nbsp;&nbsp;&nbsp;&nbsp;- Tasmia Fatema.<p>Tasmia is a 26 years old Rohingya woman living in a tent with her six-month old daughter Nur Kayda, along with nine other members of her family. It has been three years since 1.4 million Rohingya Muslims fled across the border into south eastern Bangladesh from Myanmar.',
            location: {
                center: [92.07755, 21.15911],
                zoom: 10.97,
                pitch: 43.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'rohingya-camps',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: 'rohingya-camps',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch01-1',
            title: 'the evolution of covid-19.',
            //image: './path/to/image/source.png',
            description: 'covid-19 has taken the lives of more than half a million individuals worldwide, disproportionally affecting vulnerable populations such as the economically disadvantaged, the health-compromised, and the elderly.<p>The number of covid-19 cases have reflected the health monitoring infrastructure of different nations as well as their ability to mobilize means of physical distancing, both of which are severely mitigated in refugee-inhabited areas. An indication of this is the difference in time course of covid-19 infection. The initial rates in March 2020 shows China and other Asian countries affected since its origination in Wuhan, China. Shown here is the current rates in Asian and Europe.',
            location: {
                center: [40.63206, 43.05442],
                zoom: 2.24,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'covid01',
                    opacity: 0
                },
                {
                    layer: 'covid02',
                    opacity: 0
                },
                {
                    layer: 'covid03',
                    opacity: 0
                },
                {
                    layer: 'covid04',
                    opacity: 0
                },
                {
                    layer: 'covid05',
                    opacity: 0
                },
                {
                    layer: 'covid06',
                    opacity: 0
                },
                {
                    layer: 'covid07',
                    opacity: 0
                },
                {
                    layer: 'covid08',
                    opacity: 0.8
                },
                {
                    layer: 'animatedPoint',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'ch01-2',
            title: 'the evolution of covid-19.',
            image: './images/rohingya01.jpg',
            description: 'By late August 2020, nations with poor health infrastructures, high population densities, and careless social norms have been hit hard by covid-19. Cases have stabilized in China since March, but South Asia has been hit hard since. What future poor countries will be affected next? <p>These issues are urgent in dense and unhealthy conditions of refugee camps.',
            location: {
                center: [40.63206, 43.05442],
                zoom: 2.24,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'covid01',
                    opacity: 0.8
                },
                {
                    layer: 'covid02',
                    opacity: 0
                },
                {
                    layer: 'covid03',
                    opacity: 0
                },
                {
                    layer: 'covid04',
                    opacity: 0
                },
                {
                    layer: 'covid05',
                    opacity: 0
                },
                {
                    layer: 'covid06',
                    opacity: 0
                },
                {
                    layer: 'covid07',
                    opacity: 0
                },
                {
                    layer: 'covid08',
                    opacity: 0
                },
                {
                    layer: 'animatedPoint',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'covid01',
                    opacity: 0
                },
                {
                    layer: 'covid02',
                    opacity: 0
                },
                {
                    layer: 'covid03',
                    opacity: 0
                },
                {
                    layer: 'covid04',
                    opacity: 0
                },
                {
                    layer: 'covid05',
                    opacity: 0
                },
                {
                    layer: 'covid06',
                    opacity: 0
                },
                {
                    layer: 'covid07',
                    opacity: 0
                },
                {
                    layer: 'covid08',
                    opacity: 0
                },
            ]
        },
        {
            id: 'ch02',
            title: 'a story of the rohingya',
            image: './images/rohingya02.gif',
            description: 'Our work has focused on the Islamic population of the Rohingya, who were forcibly removed from Myanmar to neighboring Bangladesh ever since 2016, living in make shift shanty towns with scant resources.<p>Public perception of Bangladesh has portrayed the Rohingya as opportunistic vultures and militant, perceptions that we have attempted to challenge in our previous work using 360 immersive media to allow the refugees to empower themselves by <a href="http://raylc.org/rohingya/">telling their own stories</a>.',
            location: {
                center: [90.28579, 22.40465],
                zoom: 7.54,
                pitch: 33.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'covid01',
                    opacity: 0
                },
                {
                    layer: 'covid02',
                    opacity: 0
                },
                {
                    layer: 'covid03',
                    opacity: 0
                },
                {
                    layer: 'covid04',
                    opacity: 0
                },
                {
                    layer: 'covid05',
                    opacity: 0
                },
                {
                    layer: 'covid06',
                    opacity: 0
                },
                {
                    layer: 'covid07',
                    opacity: 0
                },
                {
                    layer: 'covid08',
                    opacity: 0
                },
                {
                    layer: 'animatedPoint',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'dhaka to cox\'s bazar',
            image: './images/fabeha04.jpg',
            description: 'Our research, documentation, and aid efforts have taken us from the capital of Bangladesh, Dhaka, as well as the US, to the port town of Cox\'s Bazar, a tourist town that turned into refugee aid center.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'dhaka to cox\'s bazar',
            image: './images/fabeha05.jpg',
            description: 'This work includes photodocumentary and writing with aid organizations such as <a href="https://oxfamapps.org/blog/photographing-the-coronavirus-pandemic-fabeha-monir-in-bangladesh/?sf125586412=1&fbclid=IwAR1JNDf6ugOMQWIrkC4GW-OWYSZOlJtv6_WKtr_1WRjuokOcwJ8ypmlju8o">Oxfam</a>, <a href="https://www.itv.com/news/2020-07-29/coronavirus-appeal-this-is-a-moment-to-remember-who-we-are-to-each-other?fbclid=IwAR0WWE4ci6GXP05DzrTT9_v_r8jEita0YpX-rL3blU6BkhbFWp6TnuH9Az4">Action Aid</a>, <a href="https://www.amnesty.org/en/latest/news/2020/06/the-world-should-not-leave-the-rohingyas-behind/?fbclid=IwAR3v0PFkuIDQEhwpuX092QTH8W8RSIk3SUyv2daymQoEwn2G8rAHF_9HOas">Amnesty International</a>, and <a href="https://fundraising.co.uk/2020/07/15/dec-launches-coronavirus-appeal-help-those-worlds-most-fragile-states/">the DEC</a>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'dhaka to cox\'s bazar',
            image: './images/rohingya03.jpg',
            description: 'as well as immersive documentation and aid with <a href="https://www.davisprojectsforpeace.org/">Davis Peace Foundation</a>, <a href="http://nycsdff.com/2020-films/">NYC Short Documentary Film Festival</a>, and <a href="https://camd.northeastern.edu/news/ars-electronica-ray-lc-presents-new-project-addressing-the-rohingya-refugee-experience/">Ars Electronica</a>.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'dhaka to cox\'s baazar',
            description: 'The journey continues with flying from Bangladesh\'s capital Dhaka to Cox\'s Bazar, often transferring through the coastal center of Chittagong.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'dhaka to cox\'s baazar',
            image: './images/fabeha06.jpg',
            description: 'Cox\'s Bazar is where we organize our trip, contact local NGOs, and translate our interviews with local guides.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'rohingya-camps',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'ch03',
            title: 'cox\'s bazar to balukhali',
            image: './images/fabeha07.jpg',
            description: 'The journey only begins at Cox\'s Bazar, where we work with NGOs including Amnesty International, World Health Organization, Oxfam, and locally, the Program for Helpless and Lagged Societies, to photograph, document, and provide relief to the refugees during crises, finding means to empower their voice in this unprecedented pandemic.',
            location: {
                /*center: [91.95948, 21.31914],
                zoom: 10.36,
                pitch: 33.50,
                bearing: 0.00*/
                center: [91.94356, 21.42163],
                zoom: 9.95,
                pitch: 61.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'rohingya-camps',
                    opacity: 0.6
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'cox\'s bazar to balukhali',
            image: './images/rohingya04.jpg',
            description: 'A six-hour jeep ride takes us from Cox\'s Bazar to the locality of Balukhali, where the camps now house over a million Rohingya refugees in close quarters.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'cox\'s bazar to balukhali',
            image: './images/fabeha08.jpg',
            description: 'Desperate aid is needed in every corner of the journey to the largest sector of camps.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'cox\'s bazar to balukhali',
            image: './images/fabeha03.jpg',
            description: 'From Balukhali is a congested climb up the hills of camp 8E. A man is seen here spraying disinfectant as a precaution to prevent covid 19 spread in the Rohingya refugee camps.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch04',
            title: 'balukhali',
            image: './images/fabeha09.jpg',
            description: 'As many as 60,000-90,000 people are jammed into each square kilometre, with families of up to a dozen sharing small shelters in the Rohingya Camp. Everyone is breathing the same air inside that shelter, coughing, sneezing without covering their mouth. Refugees live in plastic shacks side by side, with the 34 camps having more than 40 times Bangladesh\'s average population density. Each shack is barely 107 square feet and many are packed with up to 12 residents.',
            location: {
                center: [92.13069, 21.14027],
                zoom: 12.46,
                pitch: 58.50,
                bearing: -60.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch05',
            title: 'balukhali',
            image: './images/fabeha10.jpg',
            description: '\"We will simply die if it spreads quickly. None of us going out unnecessarily. Everyone is now fearing. But how can we keep distance with others. We do not have space in our own house\" <br>&nbsp;&nbsp;&nbsp;&nbsp;- Abdul Hayes.<p>Abdul shares these thoughts while he was reading the Quran inside his tent. He stopped going to Mosque after 1275 houses in F block have been red marked and lock down with red flags.',
            location: {
                center: [92.13069, 21.14027],
                zoom: 12.46,
                pitch: 58.50,
                bearing: -60.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch06',
            title: 'balukhali',
            image: './images/fabeha11.jpg',
            description: 'In early April, authorities imposed a complete lockdown after a number of cases were found in Cox\'s Bazar district, restricting all traffic in and out of the camps. Bangladesh authorities forced aid organizations to slash their camp presence by 80 percent. Rights groups and activists have expressed concerns that the camps are hotspots of misinformation about the pandemic because of an internet ban imposed last September. Authorities inside the camp announced in megaphone the contradictory directives of \"stay at home\" and \"keep distance.\"',
            location: {
                center: [92.13069, 21.14027],
                zoom: 12.46,
                pitch: 58.50,
                bearing: -60.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch07',
            title: 'challenges are endless',
            image: './images/fabeha02.jpg',
            description: 'By May, medical personnel are finally being trained, and isolation centers are being set up. According to IRC, a camp with 1,700 beds is planned and several hundred beds are operational. There is an intensive care unit with ten ventilators.<p>Meanwhile, with existing crisis and confirmation of Covid-19 cases inside the Rohingya camp, cyclone Amphan causes fear among vulnerable women and children. Above, Mohammad Yassin is in hurry and heading for his tent as the cyclone is approaching the camp.',
            location: {
                center: [92.09927, 21.19304],
                zoom: 11.66,
                pitch: 58.50,
                bearing: 18.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch08',
            title: 'challenges are endless',
            image: './images/fabeha12.jpg',
            description: 'And yet the Rohingya continue to fend the best they can.<p>To escape helplessness and hunger, some Rohingya are turning to traffickers. The Bangladesh Coast Guard rescued 396 refugees who had tried to sail to Malaysia only to be turned back by authorities. When found, the trawler had already been at sea for fifty-eight days, and at least thirty-two Rohingya had died. When the rest were rescued, they were sent back, emaciated and traumatized, to the very camps they had tried to escape.',
            location: {
                center: [92.09927, 21.19304],
                zoom: 11.66,
                pitch: 58.50,
                bearing: 18.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch09',
            title: 'hardship continue in rohingya',
            image: './images/fabeha13.jpg',
            description: 'The World Food Programme (WFP) has warned that Covid-19 threatens to reverse development gains made by Bangladesh in the last 50 years and has appealed for $320 million to help the most vulnerable. Some $200 million of this funding is required for the agency\'s COVID-19 response in Bangladesh and the remaining $120 million is needed to help the Mainly-Muslim ethnic Rohingyas for the next six months.<p>Thus it is imperative now to join our cause and lend support to those who will lose the most from covid-19, those who have no means to help themselves in a place that gives no mercy.',
            location: {
                center: [92.07755, 21.15911],
                zoom: 10.97,
                pitch: 43.50,
                bearing: -7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch10',
            title: 'hardship continue in rohingya',
            image: './images/fabeha14.jpg',
            description: 'We work with the following organizations in 1. documentating and empowering Rohingya voices, and 2. enabling aid for the Rohingya.<p><a href="https://www.oxfam.org/en/tags/rohingya">Oxfam International</a><br><a href="https://www.actionaid.org.uk/about-us/what-we-do/emergencies-disasters-humanitarian-response/rohingya-refugee-crisis-explained">Action Aid UK</a><br><a href="https://www.amnestyusa.org/rohingya/">Amnesty International</a><br><a href="https://www.dec.org.uk/appeal/rohingya-crisis">Disaster Emergency Committee UK</a><br><a href="https://www.telegraph.co.uk/global-health/science-and-disease/covid-19-could-kill-people-hunger-virus-warns-oxfam/?fbclid=IwAR0aEOZsU-RiXuCQJ00D8Tuf0od5zuBkC8JfsmTRkt3qHcOIU_2Fzs-i9Sc">The Telegraph</a><br><a href="https://www.davisprojectsforpeace.org/">Davis Peace Foundation</a><br><a href="http://www.raylc.org/exhibits/techgood/">Technology and Social Good</a><br><a href="https://ars.electronica.art/outofthebox/en/">Ars Electronica Linz</a><br><a href="https://northeastofnorth.com/theme-2019/">React Social Change Dundee</a>',
            location: {
                center: [92.07755, 21.15911],
                zoom: 10.97,
                pitch: 43.50,
                bearing: -7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
