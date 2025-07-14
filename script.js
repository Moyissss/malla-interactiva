const materias = [
  { id: "calc1", nombre: "Cálculo I", semestre: 1 },
  { id: "algebra", nombre: "Álgebra", semestre: 1 },
  { id: "fisica1", nombre: "Física I", semestre: 2, prerequisitos: ["calc1"] },
  { id: "calc2", nombre: "Cálculo II", semestre: 2, prerequisitos: ["calc1"] },
  { id: "ecuaciones", nombre: "Ecuaciones", semestre: 3, prerequisitos: ["calc2", "algebra"] }
];

const contenedor = document.getElementById("malla-container");

function cargarProgreso() {
  return JSON.parse(localStorage.getItem("progreso")) || [];
}

function guardarProgreso(avance) {
  localStorage.setItem("progreso", JSON.stringify(avance));
}

function resetProgress() {
  localStorage.removeItem("progreso");
  location.reload();
}

const progreso = cargarProgreso();

materias.forEach(materia => {
  const div = document.createElement("div");
  div.className = "materia";
  div.id = materia.id;
  div.textContent = materia.nombre;

  if (progreso.includes(materia.id)) {
    div.classList.add("aprobada");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("aprobada")) {
      div.classList.remove("aprobada");
      const index = progreso.indexOf(materia.id);
      if (index > -1) progreso.splice(index, 1);
    } else {
      div.classList.add("aprobada");
      progreso.push(materia.id);
    }
    guardarProgreso(progreso);
  });

  contenedor.appendChild(div);
});

window.onload = () => {
  materias.forEach(materia => {
    if (materia.prerequisitos) {
      materia.prerequisitos.forEach(pre => {
        new LeaderLine(
          document.getElementById(pre),
          document.getElementById(materia.id),
          { color: "#2196F3", path: "straight" }
        );
      });
    }
  });
};

