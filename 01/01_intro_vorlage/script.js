// DOM-Elemente referenzieren
const todoList = document.getElementById("todo-list");
const inputSection = document.getElementById("input-section");
const darkModeBtn = document.getElementById("toggle-darkmode");

// TODO: Eingabefeld und Button erstellen
// TODO: Funktion Aufgabe hinzufügen
// TODO: Funktion Aufgabe löschen
// TODO: Funktion Aufgabe als erledigt markieren

// Referenzen für Input, Button und Priority-Select (existieren in index.html)
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const prioritySelect = document.getElementById("priority-select");

// Funktion: neue Aufgabe erstellen
function createTask(title, priority = 'medium') {
  const li = document.createElement("li");
  li.className = "todo-item";
  // Struktur: <li> <span class="title">...</span> <div class="controls">[Done][Delete]</div> </li>
  const titleSpan = document.createElement("span");
  titleSpan.className = "title";
  titleSpan.textContent = title;

  const controls = document.createElement("div");
  controls.className = "controls";

  const doneBtn = document.createElement("button");
  doneBtn.className = "btn-done";
  doneBtn.type = "button";
  doneBtn.title = "Als erledigt markieren";
  doneBtn.textContent = "✓";

  const delBtn = document.createElement("button");
  delBtn.className = "btn-delete";
  delBtn.type = "button";
  delBtn.title = "Löschen";
  delBtn.textContent = "✕";

  controls.appendChild(doneBtn);
  controls.appendChild(delBtn);

  li.appendChild(titleSpan);
  li.appendChild(controls);

  // Priority Klasse (z.B. priority-high)
  if (priority) {
    li.classList.add(`priority-${priority}`);
  }

  // Event: Löschen
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // Event: Erledigt toggeln
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  return li;
}

// Handler: Aufgabe hinzufügen (aus Input)
function addTaskFromInput() {
  const title = newTaskInput.value.trim();
  if (!title) {
    // Ignoriere leere Eingaben
    return;
  }
  const priority = (prioritySelect && prioritySelect.value) ? prioritySelect.value : 'medium';
  const task = createTask(title, priority);
  todoList.appendChild(task);
  newTaskInput.value = ""; // Input leeren
  newTaskInput.focus();
}

// Button-Click
if (addTaskBtn) {
  addTaskBtn.addEventListener("click", addTaskFromInput);
}

// Enter-Taste im Eingabefeld
if (newTaskInput) {
  newTaskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTaskFromInput();
    }
  });
}

// Dark Mode Umschalten
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
