Vue.createApp({
  data() {
    return {
      chosenRedColor: 255,
      chosenGreenColor: 105,
      chosenBlueColor: 180,
    };
  },
  computed: {
    headerBackground() {
      return (
        "rgba(" +
        this.chosenRedColor +
        ", " +
        this.chosenGreenColor +
        ", " +
        this.chosenBlueColor +
        ", 0.25)"
      );
    },
    currentColor() {
      return (
        "#" +
        this.valueToHex(this.chosenRedColor) +
        this.valueToHex(this.chosenGreenColor) +
        this.valueToHex(this.chosenBlueColor)
      );
    },
  },
  methods: {
    mainBackground() {
      const main = document.querySelector("main");
      main.style.backgroundColor =
        "rgb(" +
        this.chosenRedColor +
        ", " +
        this.chosenGreenColor +
        ", " +
        this.chosenBlueColor +
        ")";
    },
    valueToHex(changedColor) {
      const hex = changedColor.toString(16);
      if (hex.length === 1) {
        return "0" + hex;
      } else {
        return hex;
      }
    },
  },
}).mount("header");
