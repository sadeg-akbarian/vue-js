Vue.createApp({
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    changeBodyAndTitle() {
      document.querySelector("body").classList.toggle("bodyLightSwitch");
      if (document.querySelector("title").innerText !== "Good Night") {
        document.querySelector("title").innerText = "Good Night";
      } else {
        document.querySelector("title").innerText = "Good Morning";
      }
    },
  },
}).mount("main");
