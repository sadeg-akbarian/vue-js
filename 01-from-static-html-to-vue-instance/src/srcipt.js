const theExample = Vue.createApp({
  data() {
    const currentDate = new Date();
    return {
      userName: "John Doe",
      logTime: currentDate.toLocaleString("en-us"),
    };
  },
}).mount(".card");
