var express = require("express");
var router = express.Router();

var dataMatchs = [
  {
    name: "Marseille - Paris",
    url: "image/Ligue_1.svg",
    date: "21.00 - 19 Oct 2020",
  },
  {
    name: "Manchester City - Arsenal",
    url: "image/premier_league.svg",
    date: "20.00 - 22 Oct 2020",
  },
  {
    name: "Lyon - Monaco",
    url: "image/ligue_1.svg",
    date: "21.00 - 6 Nov 2020",
  },
  {
    name: "Milan - Naples",
    url: "image/serie_A.png",
    date: "15.00 - 28 Oct 2020",
  },
  {
    name: "Bordeaux - Chelsea",
    url: "image/champions_league.png",
    date: "21.00 - 30 Oct 2020",
  },
  {
    name: "Atletico - Nice",
    url: "image/europa_league.png",
    date: "20.00 - 2 Nov 2020",
  },
];

var dataBars = [
  {
    url: "image/bar_1.jpg",
    name: "Queen Victoria",
    location: "Marseille 13001",
    description:
      "Le Queen Victoria vous accueille dans son pub/restaurant au style anglais sur le Vieux Port de Marseille.",
  },
  {
    url: "image/bar_2.jpg",
    name: "Shamrock",
    location: "Marseille 13001",
    description:
      "Ce pub irlandais typique avec une large carte de bières et diffusion de matchs sportifs sur le Vieux Port de Marseille.",
  },
  {
    url: "image/bar_3.jpg",
    name: "Red Lion",
    location: "Marseille 13008",
    description:
      "Pub typiquement britannique proposant bières, whiskies, burgers et retransmissions sportives",
  },
  {
    url: "image/bar_4.jpg",
    name: "Temple Bar",
    location: "Marseille 13001",
    description:
      "Le Temple Bar vous accueille dans son pub design a 2 pas du Vieux Port de Marseille.",
  },
  {
    url: "image/bar_5.jpg",
    name: "Carry Nation",
    location: "Marseille 13006",
    description:
      "Venez déguster les meilleurs cocktails de Marseille en regardant les matchs de football.",
  },
  {
    url: "image/bar_6.jpg",
    name: "The British Pub",
    location: "Marseille 13002",
    description:
      "Venez suivre les grands championnats Européens et profiter de l'happy hour.",
  },
];

/* GET login page. */
router.get("/login", function (req, res, next) {
  req.session.username = req.query.username;
  res.render("login", { username: req.session.username });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  if (req.query.username) {
    req.session.username = req.query.username;
  }
  console.log(req.query.username);
  res.render("home", { username: req.session.username });
});

/* GET matchs page. */
router.get("/matchs", function (req, res, next) {
  req.dataMatchs = [];
  res.render("matchs", { dataMatchs, username: req.session.username });
});

/* GET bars page. */
router.get("/bars", function (req, res, next) {
  req.dataBars = [];
  res.render("bars", { dataBars, username: req.session.username });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { username: req.session.username });
});

module.exports = router;
