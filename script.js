const materias = [
  // --- SEMESTRE I ---
  { id: "principios_quimica", nombre: "Principios de química", area: "Q", prerrequisitos: [] },
  { id: "lab_basico", nombre: "Lab técnicas básicas en química", area: "Q", prerrequisitos: [] },
  { id: "calculo_diferencial", nombre: "Cálculo diferencial", area: "FME", prerrequisitos: [] },
  { id: "biologia_molecular", nombre: "Biología molecular y celular", area: "BG", prerrequisitos: [] },
  { id: "introduccion_farmacia", nombre: "Introducción a la farmacia", area: "AS", prerrequisitos: [] },

  // --- SEMESTRE II ---
  { id: "quimica_organica_1", nombre: "Química orgánica 1", area: "Q", prerrequisitos: ["principios_quimica"] },
  { id: "lab_quimica_organica", nombre: "Lab Química orgánica", area: "Q", prerrequisitos: ["lab_basico"] },
  { id: "mecanica_ondas", nombre: "Mecánica y ondas para biociencias", area: "FME", prerrequisitos: ["calculo_diferencial"] },
  { id: "bioestadistica", nombre: "Bioestadística fundamental", area: "FME", prerrequisitos: [] },
  { id: "libre_1", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  // --- SEMESTRE III ---
  { id: "quimica_organica_2", nombre: "Química orgánica 2", area: "Q", prerrequisitos: ["quimica_organica_1"] },
  { id: "lab_analisis_quimico", nombre: "Lab principios de análisis químico", area: "Q", prerrequisitos: ["lab_quimica_organica"] },
  { id: "bioquimica", nombre: "Bioquímica", area: "BM", prerrequisitos: ["biologia_molecular"] },
  { id: "fisicoquimica_1", nombre: "Fisicoquímica 1", area: "Q", prerrequisitos: ["quimica_organica_1", "calculo_diferencial"] },
  { id: "inorganica_farmaceutica", nombre: "Química inorgánica farmacéutica", area: "F", prerrequisitos: ["principios_quimica"] },

  // --- SEMESTRE IV ---
  { id: "fisioanatomia", nombre: "Fisioanatomía", area: "BM", prerrequisitos: [] },
  { id: "microbiologia_general", nombre: "Microbiología general", area: "BM", prerrequisitos: ["biologia_molecular"] },
  { id: "operaciones_unitarias", nombre: "Operaciones unitarias farmacéuticas", area: "F", prerrequisitos: ["fisicoquimica_1"] },
  { id: "optativa_fund_1", nombre: "Optativa fundamentación 1", area: "OF", prerrequisitos: [] },
  { id: "optativa_fund_2", nombre: "Optativa fundamentación 2", area: "OF", prerrequisitos: [] },
  // --- SEMESTRE V ---
  { id: "fisiopatologia", nombre: "Fisiopatología", area: "BM", prerrequisitos: ["fisioanatomia"] },
  { id: "microbiologia_farmaceutica", nombre: "Microbiología farmacéutica", area: "BM", prerrequisitos: ["microbiologia_general"] },
  { id: "farmacotecnia_1", nombre: "Farmacotecnia 1", area: "F", prerrequisitos: ["operaciones_unitarias"] },
  { id: "farmacognosia", nombre: "Farmacognosia y fitoquímica", area: "F", prerrequisitos: ["quimica_organica_2"] },
  { id: "libre_2", nombre: "Libre elección", area: "LE", prerrequisitos: [] },

  // --- SEMESTRE VI ---
  { id: "farmacologia_general", nombre: "Farmacología general", area: "BM", prerrequisitos: ["bioquimica", "fisiopatologia"] },
  { id: "salud_publica", nombre: "Salud pública y farmacia", area: "AS", prerrequisitos: [] },
  { id: "farmacotecnia_2", nombre: "Farmacotecnia 2", area: "F", prerrequisitos: ["farmacotecnia_1"] },
  { id: "farmacia_quimica_1", nombre: "Farmacia química 1", area: "F", prerrequisitos: ["quimica_organica_2", "fisicoquimica_1"] },
  { id: "biofarmacia", nombre: "Biofarmacia y farmacocinética", area: "F", prerrequisitos: ["fisicoquimica_1", "farmacotecnia_1"] },
  { id: "libre_3", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  // --- SEMESTRE VII ---
  { id: "farmacologia_especial", nombre: "Farmacología especial", area: "BM", prerrequisitos: ["farmacologia_general"] },
  { id: "gestion_servicios", nombre: "Gestión de servicios farmacéuticos", area: "AS", prerrequisitos: ["salud_publica"] },
  { id: "analisis_instrumental", nombre: "Análisis instrumental farmacéutico", area: "F", prerrequisitos: ["farmacia_quimica_1"] },
  { id: "farmacia_quimica_2", nombre: "Farmacia química 2", area: "F", prerrequisitos: ["farmacia_quimica_1"] },
  { id: "administracion_farmaceutica", nombre: "Administración farmacéutica", area: "AS", prerrequisitos: ["gestion_servicios"] },
  { id: "toxicologia", nombre: "Toxicología", area: "BM", prerrequisitos: ["farmacologia_especial"] },

  // --- SEMESTRE VIII ---
  { id: "farmacia_hospitalaria", nombre: "Farmacia hospitalaria", area: "F", prerrequisitos: ["farmacologia_especial", "farmacotecnia_2"] },
  { id: "legislacion_farmaceutica", nombre: "Legislación farmacéutica", area: "AS", prerrequisitos: ["administracion_farmaceutica"] },
  { id: "farmacia_industrial", nombre: "Farmacia industrial", area: "F", prerrequisitos: ["farmacotecnia_2"] },
  { id: "aseguramiento_calidad", nombre: "Aseguramiento de calidad", area: "AS", prerrequisitos: ["analisis_instrumental"] },
  { id: "optativa_disciplinar_1", nombre: "Optativa disciplinar 1", area: "OD", prerrequisitos: [] },
  { id: "libre_4", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  // --- SEMESTRE IX ---
  { id: "optativa_disciplinar_2", nombre: "Optativa disciplinar 2", area: "OD", prerrequisitos: [] },
  { id: "optativa_disciplinar_3", nombre: "Optativa disciplinar 3", area: "OD", prerrequisitos: [] },
  { id: "libre_5", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  { id: "libre_6", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  { id: "libre_7", nombre: "Libre elección", area: "LE", prerrequisitos: [] },

  // --- SEMESTRE X ---
  { id: "trabajo_grado", nombre: "Trabajo de grado", area: "TG", prerrequisitos: ["farmacia_hospitalaria", "farmacia_industrial"] },
  { id: "optativa_disciplinar_4", nombre: "Optativa disciplinar 4", area: "OD", prerrequisitos: [] },
  { id: "libre_8", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  { id: "libre_9", nombre: "Libre elección", area: "LE", prerrequisitos: [] },
  { id: "libre_10", nombre: "Libre elección", area: "LE", prerrequisitos: [] }
];

// Funciones del sistema
const malla = document.getElementById("malla");
const aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

function crearMateria(m) {
  const div = document.createElement("div");
  div.classList.add("materia");
  div.setAttribute("id", m.id);
  div.setAttribute("data-area", m.area);
  div.innerText = m.nombre;

  const bloqueada = m.prerrequisitos.length > 0 && !m.prerrequisitos.every(id => aprobadas.includes(id));
  if (bloqueada) div.classList.add("bloqueada");
  if (aprobadas.includes(m.id)) div.classList.add("aprobada");

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueada")) return;
    if (div.classList.contains("aprobada")) {
      const index = aprobadas.indexOf(m.id);
      if (index !== -1) aprobadas.splice(index, 1);
    } else {
      aprobadas.push(m.id);
    }
    localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
    location.reload();
  });

  malla.appendChild(div);
}

// Crear botón de reinicio
const btn = document.createElement("button");
btn.innerText = "Reiniciar progreso";
btn.style.display = "block";
btn.style.margin = "10px auto";
btn.onclick = () => {
  localStorage.removeItem("materiasAprobadas");
  location.reload();
};
document.body.insertBefore(btn, malla);

// Crear materias
materias.forEach(crearMateria);

// Dibujar conexiones entre materias con LeaderLine
window.addEventListener("load", () => {
  materias.forEach(m => {
    m.prerrequisitos.forEach(pr => {
      const start = document.getElementById(pr);
      const end = document.getElementById(m.id);
      if (start && end) {
        new LeaderLine(start, end, {
          color: "#555",
          size: 2,
          path: "straight",
          startPlug: "disc",
          endPlug: "arrow"
        });
      }
    });
  });
});
