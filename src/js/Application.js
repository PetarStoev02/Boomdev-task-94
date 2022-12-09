import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    let paragraph= document.createElement("paragraph")
    paragraph.textContent = this.emojis
    document.querySelector("#emojis").appendChild(paragraph)
  }

  addBananas(banana) {

    this.banana = banana
    this.emojis.map(element => element + banana)
    }
}

