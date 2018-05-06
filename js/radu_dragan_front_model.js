var data = {
  nume : {
    prenume : "Dragan",
    nume    : "Radu",
    alt     : "Aurel"
  },
  work : {
    title : "Frontend Developer",
    alt: "Digital Craftsmen",
    text: "I`m a digital craftsmen, i like to make stuff, that is my main motivatison for getting out of bed in the morning."
  },

  footprint: {
    tel: "0771050157",
    email: "radu.dragan@fotodex.ro",

    social_media : [{
        name: "facebook",
        link: "https://www.facebook.com/draganraduaurel"
      },{
        name: "twitter",
        link: "https://twitter.com/fotodex_ro"
      },{
        name: "linkedin",
        link: "https://www.linkedin.com/jobs/view/400700729/"
      },{
        name: "trello",
        link: "https://trello.com/radudraganaurel"
      }

    ]
  },
  tutorial: [{
    name: "Codecademy - Learn HTML",
    category: "Frontend",
    rate: 3,
    link: "https://www.codecademy.com/learn/learn-html"
  },{
    name: "Codecademy - Learn PHP",
    category: "Backend",
    rate: 4,
    link: "https://www.codecademy.com/courses/web-beginner-en-StaFQ/0/1"
  },{
    name: "Codecademy - Learn Javascript",
    category: "Frontend",
    rate: 4,
    link: "https://www.codecademy.com/learn/learn-javascript"
  },{
    name: "Codecademy - Learn Command Line",
    category: "Frontend",
    rate: 5,
    link: "https://www.codecademy.com/learn/learn-the-command-line"
  },{
    name: "Codecademy - Learn Java",
    category: "Backend",
    rate: 2,
    link: "https://www.codecademy.com/learn/learn-java"
  },

  ]
};



var projects = [
  {
    name: "Color of the day",
    description: "The project came to be as a small joke on how easy it is to correlate any set of numbers and how we give meaning to a set of seemingly random data points. So i went and made the most useless data point representation. A hex (color) output of the computed day.",
    link_play: "color-of-the-day/",
    link_git: "https://github.com/draganradu/draganradu.github.io/tree/master/color-of-the-day"
  },
  {
    name: "The Box of Photographic knowledge",
    description: "This is the result of crowler trying to approximate what is a definition from online glossaries, it`s a bit hard to load in one place the amount of data collected. It is one of the first step in my new fotodex 7 project.",
    link_play: "the-box-of-photographic-knowledge-radu-dragan",
    link_git: "https://github.com/draganradu/draganradu.github.io/tree/master/the-box-of-photographic-knowledge-radu-dragan"
  }
];


data.nume.full = data.nume.prenume + " " + data.nume.nume + " " + data.nume.alt;
data.nume.informal = data.nume.nume + " " + data.nume.prenume;
