export async function doTheUpdate(changedToDo, urlOfChanged) {
  changedToDo.done = !changedToDo.done;
  const response = await fetch(urlOfChanged + changedToDo.id, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(changedToDo),
  });
  if (!response.ok) {
    alert("ERROR: This didn't work!!!");
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function removeDoneToDos(localToDoList, urlOfToDoListServer) {
  const toDoListWithoutDoneToDos = [];
  for (let toDo of localToDoList) {
    if (toDo.done) {
      fetch(urlOfToDoListServer + toDo.id, {
        method: "DELETE",
      });
    } else {
      toDoListWithoutDoneToDos.push(toDo);
    }
  }
  return toDoListWithoutDoneToDos;
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function addedToDoList(
  localToDoList,
  maybeNewToDo,
  urlOfToDoListServer
) {
  let isSuggestedNewToDoAlreadyInToDoList = false;
  for (let toDo of localToDoList) {
    if (maybeNewToDo.toLowerCase() === toDo.description.toLowerCase()) {
      isSuggestedNewToDoAlreadyInToDoList = true;
    }
  }
  if (!isSuggestedNewToDoAlreadyInToDoList) {
    const newToDo = {
      description: maybeNewToDo,
      done: false,
    };
    addNewToDoToList(urlOfToDoListServer, newToDo, localToDoList);
    return "";
  } else {
    return "inline";
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export async function addNewToDoToList(
  urlOfToListServer,
  newListItem,
  localToDoList
) {
  const response = await fetch(urlOfToListServer, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newListItem),
  });
  const result = await response.json();
  localToDoList.push(result);
}
