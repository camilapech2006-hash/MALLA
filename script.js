const cursos = [
  // SEMESTRE 1
  { id: 'C01', sem: 1, name: 'CÁLCULO I', req: [] },
  { id: 'C02', sem: 1, name: 'FÍSICA I', req: [] },
  { id: 'C03', sem: 1, name: 'QUÍMICA GENERAL', req: [] },
  { id: 'C04', sem: 1, name: 'DIBUJO EN INGENIERÍA', req: [] },
  { id: 'C05', sem: 1, name: 'FUNDAMENTOS DE LA MATEMÁTICA', req: [] },
  { id: 'C06', sem: 1, name: 'METODOLOGÍA DEL TRABAJO ACADÉMICO', req: [] },

  // SEMESTRE 2
  { id: 'C07', sem: 2, name: 'CÁLCULO II', req: ['C01'] },
  { id: 'C08', sem: 2, name: 'FÍSICA II', req: ['C02'] },
  { id: 'C09', sem: 2, name: 'QUÍMICA ORGÁNICA', req: ['C03'] },
  { id: 'C10', sem: 2, name: 'INTRODUCCIÓN A ING. MATERIALES', req: [] },
  { id: 'C11', sem: 2, name: 'REALIDAD NACIONAL', req: [] },
  { id: 'C12', sem: 2, name: 'LINGÜÍSTICA Y REDACCIÓN', req: [] },

  // SEMESTRE 3
  { id: 'C13', sem: 3, name: 'ECUACIONES DIFERENCIALES', req: ['C07'] },
  { id: 'C14', sem: 3, name: 'FÍSICA III', req: ['C08'] },
  { id: 'C15', sem: 3, name: 'FISICOQUÍMICA DE MATERIALES', req: ['C09'] },
  { id: 'C16', sem: 3, name: 'CIENCIA DE LOS MATERIALES', req: ['C10'] }
];

let aprobados = new Set(JSON.parse(localStorage.getItem('malla_aprobados') || '[]'));

function render() {
  const container = document.getElementById('mallaContainer');
  container.innerHTML = '';

  const maxSemestre = Math.max(...cursos.map(c => c.sem));

  for (let s = 1; s <= maxSemestre; s++) {
    const semCol = document.createElement('div');
    semCol.className = 'semestre-col';
    semCol.innerHTML = `<div class="semestre-title">Semestre ${s}</div>`;

    cursos.filter(c => c.sem === s).forEach(curso => {
      const isReqMet = curso.req.every(r => aprobados.has(r));
      const isPass = aprobados.has(curso.id);

      const card = document.createElement('div');
      let statusClass = 'bloqueado';
      if (isPass) {
        statusClass = 'aprobado';
      } else if (isReqMet) {
        statusClass = 'disponible';
      }

      card.className = `curso-card ${statusClass}`;
      card.innerHTML = `${curso.name} <span class="code-badge">${curso.req.length ? 'Prerrequisito: ' + curso.req.join(', ') : 'Libre'}</span>`;

      if (isReqMet) {
        card.onclick = () => {
          if (aprobados.has(curso.id)) {
            aprobados.delete(curso.id);
          } else {
            aprobados.add(curso.id);
          }
          localStorage.setItem('malla_aprobados', JSON.stringify([...aprobados]));
          render();
        };
      }

      semCol.appendChild(card);
    });

    container.appendChild(semCol);
  }

  const total = cursos.length;
  const count = aprobados.size;
  const percent = Math.round((count / total) * 100);

  document.getElementById('countText').innerText = `${count}/${total}`;
  document.getElementById('percentText').innerText = `${percent}%`;
  document.getElementById('progressBar').style.width = `${percent}%`;
}

render();
