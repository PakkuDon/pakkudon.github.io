/*
Format:
{
  "name": "Project name",
  "company": "Optional",
  "start_date": "Month Year",
  "end_date": "Month Year. Leave blank if ongoing",
  "image_set": [
    require("../images/portfolio/filename-1.png"),
    require("../images/portfolio/filename-2.png"),
  ],
  "description": "Description of project.",
  "notes": [
    "List of dot points"
  ],
  "tags": [
    "Technology", "Frameworks", "Etc"
  ],
  "links": [
    {
      "title": "Website",
      "url": "http://example.com/"
    },
    {
      "title": "GitHub",
      "url": "https://github.com/PakkuDon/pakkudon.github.io"
    }
  ]
}
*/

module.exports = [
  {
    "name": "Maze Builder",
    "start_date": "November 2014",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/maze-builder-1.png"),
      require("../images/portfolio/maze-builder-2.png")
    ],
    "description": "A JavaScript port of one of my programming assignments. This page allows users to generate mazes and maze solutions using various algorithms",
    "notes": [
      "First personal project that I've ever pushed to Github",
    ],
    "tags": [
      "JavaScript", "jQuery", "Bootstrap"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/MazeBuilder/"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/MazeBuilder"
      }
    ]
  },
  {
    "name": "Conway's Game of Life",
    "company": "",
    "start_date": "November 2015",
    "end_date": "November 2015",
    "image_set": [
      require("../images/portfolio/conways-game-of-life-1.png"),
      require("../images/portfolio/conways-game-of-life-2.png"),
    ],
    "description": "Conway's Game of Life written in JavaScript. Was originally started as practice for the 2015 Global Day of Coderetreat.",
    "notes": [
      "Implemented in Vanilla JS, HTML and CSS",
      "Uses HTML5 Canvas"
    ],
    "tags": [
      "JavaScript", "HTML", "CSS"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/ConwaysGameOfLife/"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/ConwaysGameOfLife"
      }
    ]
  },
  {
    "name": "Free Code Camp Portfolio",
    "company": "",
    "start_date": "March 2016",
    "end_date": "Ongoing",
    "image_set": [
      require("../images/portfolio/fcc-d3-1.PNG"),
      require("../images/portfolio/fcc-d3-3.PNG"),
      require("../images/portfolio/fcc-d3-4.PNG"),
      require("../images/portfolio/fcc-d3-5.PNG"),
      require("../images/portfolio/fcc-quote.PNG"),
      require("../images/portfolio/fcc-react-1.PNG"),
      require("../images/portfolio/fcc-linkit.png"),
      require("../images/portfolio/fcc-pomodoro-1.png"),
      require("../images/portfolio/fcc-pomodoro-2.png"),
    ],
    "description": "Free Code Camp is an open source community that teaches people to code full stack JavaScript. Completed some projects from their site. Portfolio still in progress.",
    "notes": [
    ],
    "tags": [
      "HTML", "CSS", "JavaScript", "React", "Express", "MongoDB", "D3.js"
    ],
    "links": [
      {
        "title": "Profile",
        "url": "https://www.freecodecamp.com/pakkudon"
      }
    ]
  },
  {
    "name": "Duck Hunt",
    "company": "General Assembly - Web Development Immersive",
    "start_date": "October 2016",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/duck-hunt-1.png"),
      require("../images/portfolio/duck-hunt-2.png")
    ],
    "description": "A clone of a NES game with the same name. Players take turns shooting ducks to earn points. Game ends when player fails to hit required number of targets in a round.",
    "notes": [
      "First project for General Assembly's Web Development Immersive"
    ],
    "tags": [
      "HTML", "CSS", "JavaScript"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/duck-hunt"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/duck-hunt"
      }
    ]
  },
  {
    "name": "console.log",
    "company": "General Assembly - Web Development Immersive",
    "start_date": "November 2016",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/console-log-1.png"),
      require("../images/portfolio/console-log-2.png"),
      require("../images/portfolio/console-log-3.png")
    ],
    "description": "Initially supposed to be a clone of Medium.com, but instead turned into a generic blogging app. Users can make posts, comment on other posts and follow users. Posts support markdown format.",
    "notes": [
    ],
    "tags": [
      "Ruby", "Sinatra", "PostgreSQL", "ActiveRecord", "ERB"
    ],
    "links": [
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/console.log"
      }
    ]
  },
  {
    "name": "Use My Kitchen",
    "company": "General Assembly - Web Development Immersive",
    "start_date": "November 2016",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/use-my-kitchen-1.png"),
      require("../images/portfolio/use-my-kitchen-2.png"),
      require("../images/portfolio/use-my-kitchen-3.png")
    ],
    "description": "Like AirBnB but for finding venues to host a dinner party. Users can post their kitchens and take bookings at these kitchens from other users. Users can also review the kitchens that they have stayed at and message other users to confirm details.",
    "notes": [
      "First group project for Web Development Immersive"
    ],
    "tags": [
      "Ruby", "Ruby on Rails", "PostgreSQL", "ActiveRecord"
    ],
    "links": [
      {
        "title": "GitHub",
        "url": "https://github.com/duyen-ho/WDI-Use-My-Kitchen"
      }
    ]
  },
  {
    "name": "Casual Gourmet",
    "company": "General Assembly - Web Development Immersive",
    "start_date": "December 2016",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/casual-gourmet-1.png"),
      require("../images/portfolio/casual-gourmet-2.png")
    ],
    "description": "Casual Gourmet (working name) is a place where people can share their recipes. Users can review or bookmark recipes for later use.",
    "notes": [
      "Final project for Web Development Immersive"
    ],
    "tags": [
      "Node.js", "Express", "PostgreSQL", "React", "Sass"
    ],
    "links": [
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/casual-gourmet"
      }
    ]
  },
  {
    "name": "Australian Bird Watchers' Society",
    "company": "",
    "start_date": "March 2017",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/bird-watchers-society-1.png"),
      require("../images/portfolio/bird-watchers-society-2.png"),
    ],
    "description": "A website for a fictitious government agency for bird watchers to report and track sightings of various bird species across Australia.",
    "notes": [
      "Implemented in HTML, Sass with PostCSS for auto-prefixing and JavaScript",
      "Initially built for a coding test for Code For Australia's Fellowship program",
      "Also used this as an excuse to have a website full of birbs"
    ],
    "tags": [
      "JavaScript", "Sass", "PostCSS"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/australian-bird-watchers-society"
      },
      {
        "title": "Github",
        "url": "https://github.com/PakkuDon/australian-bird-watchers-society"
      }
    ]
  },
  {
    "name": "NASA APOD Screensaver",
    "company": "",
    "start_date": "April 2017",
    "end_date": "May 2017",
    "image_set": [
      require("../images/portfolio/nasa-apod-screensaver.png")
    ],
    "description": "Rotates through images pulled from NASA's Astronomical Picture of the Day API.",
    "notes": [
      "Front-end-only implementation of another past project: https://github.com/PakkuDon/nasa-apod-screensaver-crud"
    ],
    "tags": [
      "React", "Redux"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/nasa-apod-screensaver"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/nasa-apod-screensaver"
      }
    ]
  },
  {
    "name": "Password Generator",
    "company": "",
    "start_date": "August 2018",
    "end_date": "",
    "image_set": [
      require("../images/portfolio/password-generator.png")
    ],
    "description": "Randomly generates a string of a given length using whichever character sets have been selected.",
    "notes": [
      "Implemented in plain HTML, CSS and JavaScript"
    ],
    "tags": [
      "JavaScript",
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/password-generator"
      },
      {
        "title": "Github",
        "url": "https://github.com/PakkuDon/password-generator"
      }
    ]
  },
  {
    "name": "Pixel Art Gallery",
    "company": "",
    "start_date": "October 2020",
    "end_date": "Ongoing",
    "image_set": [
      require("../images/portfolio/pixel-art-gallery.png")
    ],
    "description": "Image gallery containing pixel art images that I've drawn.",
    "notes": [
      "Picked up pixel art towards the end of Victoria's second lockdown",
      "Initially built in JavaScript, then migrated across to TypeScript in August 2021",
      "Migrated to Next.js in July 2023"
    ],
    "tags": [
      "React",
      "TypeScript",
      "Next.js",
      "React Testing Library",
      "Architecture Decision Records"
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/pixel-art-gallery/"
      },
      {
        "title": "Github",
        "url": "https://github.com/PakkuDon/pixel-art-gallery"
      }
    ]
  },
  {
    "name": "Good Feeds",
    "company": "",
    "start_date": "February 2022",
    "end_date": "Ongoing",
    "image_set": [
      require("../images/portfolio/good-feeds-1.png"),
      require("../images/portfolio/good-feeds-2.png"),
      require("../images/portfolio/good-feeds-3.png"),
    ],
    "description": "A site to find places to eat or drink at around Melbourne, VIC Australia.",
    "notes": [
      "Statically-generated Next.js site hosted on Github Pages",
      "In development it reads from an API written in Golang"
    ],
    "tags": [
      "React", "TypeScript", "Go", "MySQL", "Next.js", "Architecture Decision Records",
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/good-feeds/"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/good-feeds"
      }
    ]
  },
  {
    "name": "Melbourne Events",
    "company": "",
    "start_date": "June 2024",
    "end_date": "Ongoing",
    "image_set": [
      require("../images/portfolio/melbourne-events.png"),
    ],
    "description": "Calendar showing upcoming events in Melbourne.",
    "notes": [
      "Built using FullCalendar",
    ],
    "tags": [
      "HTML", "CSS", "JavaScript",
    ],
    "links": [
      {
        "title": "Website",
        "url": "https://pakkudon.github.io/melbourne-events/"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/PakkuDon/melbourne-events"
      }
    ]
  },
]
