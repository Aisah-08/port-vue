// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "G-SEP",
    category: "Web Application",
    img: require("@/assets/images/web-project-2.jpg"),
  },
  {
    id: 2,
    title: "Si WIBU",
    category: "Web Application",
    img: require("@/assets/images/mobile-project-2.jpg"),
  },
  {
    id: 3,
    title: "MY APP",
    category: "Mobile Application",
    img: require("@/assets/images/ui-project-2.jpg"),
  },
  {
    id: 4,
    title: "LaundryPad",
    category: "Web Aplication",
    img: require("@/assets/images/ui-project-2.jpg"),
  },
  {
    id: 5,
    title: "SMART GAME",
    category: "Mobile Application",
    img: require("@/assets/images/mobile-project-1.jpg"),
  },
  {
    id: 6,
    title: "SAVELINE",
    category: "Web Application",
    img: require("@/assets/images/web-project-1.png"),
  },
];

export default projects;
