Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  computed: {
    circlePosition() {
      return {
        style: {
          left: this.x + "px",
          top: this.y + "px",
        },
      };
    },
  },
  methods: {
    mousePosition(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeTheFruit(event) {
      const fruitToBeRemoved = event.target.parentElement.children[0].innerText;
      const indexOfFruitToBeRemoved =
        this.fruitBasket.indexOf(fruitToBeRemoved);
      this.fruitBasket.splice(indexOfFruitToBeRemoved, 1);
    },
  },
}).mount("#app");
