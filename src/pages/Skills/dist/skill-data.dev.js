"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skills = void 0;

var _html = _interopRequireDefault(require("../../assets/img/skills/html-5.svg"));

var _css = _interopRequireDefault(require("../../assets/img/skills/css3.svg"));

var _sass = _interopRequireDefault(require("../../assets/img/skills/sass-1.svg"));

var _bootstrap = _interopRequireDefault(require("../../assets/img/skills/bootstrap-4.svg"));

var _react = _interopRequireDefault(require("../../assets/img/skills/react.svg"));

var _vercel = _interopRequireDefault(require("../../assets/img/skills/vercel.svg"));

var _reactRouter = _interopRequireDefault(require("../../assets/img/skills/react-router.svg"));

var _materialUi = _interopRequireDefault(require("../../assets/img/skills/material-ui-1.svg"));

var _reactBootstrap = _interopRequireDefault(require("../../assets/img/skills/react-bootstrap.svg"));

var _styledComponents = _interopRequireDefault(require("../../assets/img/skills/styled-components.svg"));

var _nodejs = _interopRequireDefault(require("../../assets/img/skills/nodejs.svg"));

var _express = _interopRequireDefault(require("../../assets/img/skills/express.svg"));

var _mongodb = _interopRequireDefault(require("../../assets/img/skills/mongodb.svg"));

var _mssql = _interopRequireDefault(require("../../assets/img/skills/mssql.svg"));

var _gitIcon = _interopRequireDefault(require("../../assets/img/skills/git-icon.svg"));

var _heroku = _interopRequireDefault(require("../../assets/img/skills/heroku.svg"));

var _github = _interopRequireDefault(require("../../assets/img/skills/github.svg"));

var _javascript = _interopRequireDefault(require("../../assets/img/skills/javascript.svg"));

var _java = _interopRequireDefault(require("../../assets/img/skills/java.svg"));

var _Firebase = _interopRequireDefault(require("../../assets/img/skills/Firebase.svg"));

var _PS = _interopRequireDefault(require("../../assets/img/skills/PS.svg"));

var _Ai = _interopRequireDefault(require("../../assets/img/skills/Ai.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import L_ILLUSTRATOR from "../../assets/img/skills/Ai.svg";
var skills = {
  /*key frontend and contains values and that containts set of objets*/
  frontend: [{
    link: "https://en.wikipedia.org/wiki/HTML5",
    imgAltText: "HTML 5",
    imgSrc: _html["default"],
    skillName: "HTML5"
  }, {
    link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
    imgAltText: "CSS 3",
    imgSrc: _css["default"],
    skillName: "CSS3"
  }, {
    link: "https://www.javascript.com/",
    imgAltText: "JavaScript",
    imgSrc: _javascript["default"],
    skillName: "JavaScript"
  }, {
    link: "https://sass-lang.com/",
    imgAltText: "Sass",
    imgSrc: _sass["default"],
    skillName: "Sass"
  }, {
    link: "https://getbootstrap.com/",
    imgAltText: "Bootstrap",
    imgSrc: _bootstrap["default"],
    skillName: "Bootstrap"
  }, {
    link: "https://reactjs.org/",
    imgAltText: "React JS",
    imgSrc: _react["default"],
    skillName: "React JS"
  }, {
    link: "https://reacttraining.com/react-router/",
    imgAltText: "React Router",
    imgSrc: _reactRouter["default"],
    skillName: "React Router"
  }, {
    link: "https://material-ui.com/",
    imgAltText: "Material-UI",
    imgSrc: _materialUi["default"],
    skillName: "Material-UI"
  }, {
    link: "https://react-bootstrap.github.io/",
    imgAltText: "React Bootstrap",
    imgSrc: _reactBootstrap["default"],
    skillName: "React Bootstrap"
  }, {
    link: "https://styled-components.com/",
    imgAltText: "styled-components",
    imgSrc: _styledComponents["default"],
    skillName: "styled-components"
  }],
  backend: [{
    link: "https://nodejs.org/en/",
    imgAltText: "Node.js",
    imgSrc: _nodejs["default"],
    skillName: "Node.js"
  }, {
    link: "https://expressjs.com/",
    imgAltText: "Express",
    imgSrc: _express["default"],
    skillName: "Express"
  }],
  UserExperience: [{
    link: "https://www.adobe.com/la/products/photoshop.html",
    imgAltText: "Photoshop",
    imgSrc: _PS["default"],
    skillName: "Photoshop"
  }, {
    link: "https://www.adobe.com/la/products/illustrator.html",
    imgAltText: "Illustrator",
    imgSrc: _Ai["default"],
    skillName: "Illustrator"
  }],
  hostingPlatforms: [{
    link: "https://www.heroku.com/",
    imgAltText: "Heroku",
    imgSrc: _heroku["default"],
    skillName: "Heroku"
  }, {
    link: "https://vercel.com/",
    imgAltText: "Vercel",
    imgSrc: _vercel["default"],
    skillName: "Vercel"
  }, {
    link: "https://pages.github.com/",
    imgAltText: "GitHub Pages",
    imgSrc: _github["default"],
    skillName: "GitHub Pages"
  }],
  programmingLanguages: [{
    link: "https://www.javascript.com/",
    imgAltText: "JavaScript",
    imgSrc: _javascript["default"],
    skillName: "JavaScript"
  }, {
    link: "https://www.oracle.com/ar/java/",
    imgAltText: "Java",
    imgSrc: _java["default"],
    skillName: "Java"
  }],
  databases: [{
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
    imgAltText: "MS-SQL",
    imgSrc: _mssql["default"],
    skillName: "MS-SQL"
  }, {
    link: "https://www.mongodb.com/",
    imgAltText: "MongoDB",
    imgSrc: _mongodb["default"],
    skillName: "MongoDB"
  }, {
    link: "https://firebase.google.com/?hl=es",
    imgAltText: "Firebase",
    imgSrc: _Firebase["default"],
    skillName: "Firebase"
  }],
  versionControl: [{
    link: "https://git-scm.com/",
    imgAltText: "GIT",
    imgSrc: _gitIcon["default"],
    skillName: "GIT"
  }]
};
exports.skills = skills;