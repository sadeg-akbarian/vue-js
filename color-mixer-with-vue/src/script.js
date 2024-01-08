Vue.createApp({
  data() {
    return {
      chosenRedColor: "",
      chosenGreenColor: "",
      chosenBlueColor: "",
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
    async getNewColor() {
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/color"
        );
        const result = await response.json();
        this.chosenRedColor = result.rgb.r;
        this.chosenGreenColor = result.rgb.g;
        this.chosenBlueColor = result.rgb.b;
      } catch (xxx) {
        alert("That didn't work!");
      }
    },
  },
  created() {
    this.getNewColor();
  },
}).mount("header");
