import { doTheUpdate } from "./lib.js";
import { addedToDoList } from "./lib.js";
import { removeDoneToDos } from "./lib.js";

Vue.createApp({
  data() {
    return {
      fetchUrl: "http://localhost:4730/todos/",
      toDoList: "",
      activeRadioButton: "allButton",
      suggestedNewToDo: "",
      toDoAlreadyExists: "none",
    };
  },
  computed: {},
  methods: {
    updateToDoInServer(updatedToDo) {
      // doTheUpdate kommt von der Datei ./lib.js
      doTheUpdate(updatedToDo, this.fetchUrl);
    },
    suggestANewToDo() {
      if (this.suggestedNewToDo.length >= 5) {
        const whatToDoWithSuggestion = addedToDoList(
          this.toDoList,
          this.suggestedNewToDo,
          this.fetchUrl
        );
        if (whatToDoWithSuggestion === "") {
          this.suggestedNewToDo = "";
        } else {
          this.toDoAlreadyExists = "inline";
        }
      }
    },
    newToDoListClearOfDones() {
      const newToDoList = removeDoneToDos(this.toDoList, this.fetchUrl);
      this.toDoList = newToDoList;
    },
    shouldLiBeDisplayed(theToDo) {
      if (this.activeRadioButton === "allButton") {
        return true;
      } else if (this.activeRadioButton === "openButton") {
        if (theToDo.done === true) {
          return false;
        } else {
          return true;
        }
      } else if (this.activeRadioButton === "doneButton") {
        if (theToDo.done === true) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  async created() {
    const response = await fetch(this.fetchUrl);
    if (response.ok) {
      const result = await response.json();
      this.toDoList = result;
    }
  },
}).mount("main");
