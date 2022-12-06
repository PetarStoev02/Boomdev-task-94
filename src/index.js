import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  
  app.setEmojis(["🐒", "🦍", "🦧"]);
  
  app.addBananas(app.emojis);
  console.log(app);

  app.setEmojis()

//   let ee=  emojis.map(element => element + banana)
  
//  let paragraph= document.createElement("paragraph")
//  paragraph.textContent = ee
 
//  document.querySelector("#emojis").appendChild(paragraph)
//  console.log()
  window.__JS_APP = app;

});
