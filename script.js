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
  { id: 'C10', sem: 2, name: 'INTRODUCCIÓN A ING. DE MATERIALES', req: [] },
  { id: 'C11', sem: 2, name: 'REALIDAD NACIONAL', req: [] },
  { id: 'C12', sem: 2, name: 'LINGÜÍSTICA Y REDACCIÓN ACADÉMICA', req: [] },

  // SEMESTRE 3
  { id: 'C13', sem: 3, name: 'ECUACIONES DIFERENCIALES', req: ['C07'] },
  { id: 'C14', sem: 3, name: 'FÍSICA III', req: ['C08'] },
  { id: 'C15', sem: 3, name: 'FISICOQUÍMICA DE MATERIALES', req: ['C09'] },
  { id: 'C16', sem: 3, name: 'CIENCIA DE LOS MATERIALES', req: ['C10'] },
  { id: 'C17', sem: 3, name: 'ESTADÍSTICA Y PROBABILIDADES', req: ['C05'] },

  // SEMESTRE 4
  { id: 'C18', sem: 4, name: 'MECÁNICA DE MATERIALES', req: ['C14'] },
  { id: 'C19', sem: 4, name: 'TERMODINÁMICA DE MATERIALES', req: ['C15'] },
  { id: 'C20', sem: 4, name: 'MATERIALES METÁLICOS', req: ['C16'] },
  { id: 'C21', sem: 4, name: 'MATERIALES POLIMÉRICOS', req: ['C16'] },
  { id: 'C22', sem: 4, name: 'MÉTODOS NUMÉRICOS', req: ['C13'] },

  // SEMESTRE 5
  { id: 'C23', sem: 5, name: 'PROCESAMIENTO DE METALES', req: ['C20'] },
  { id: 'C24', sem: 5, name: 'MATERIALES CERÁMICOS', req: ['C16'] },
  { id: 'C25', sem: 5, name: 'TRANSFERENCIA DE CALOR Y MASA', req: ['C19'] },
  { id: 'C26', sem: 5, name: 'ENSAYO DE MATERIALES', req: ['C18'] },

  // SEMESTRE 6
  { id: 'C27', sem: 6, name: 'MATERIALES COMPUESTOS', req: ['C21', 'C24'] },
  { id: 'C28', sem: 6, name: 'CORROSIÓN Y DEGRADACIÓN', req: ['C23'] },
  { id: 'C29', sem: 6, name: 'CARACTERIZACIÓN DE MATERIALES', req: ['C26'] },
  { id: 'C30', sem: 6, name: 'SEGURIDAD INDUSTRIAL Y PREVENCIÓN', req: [] },

  // SEMESTRE 7
  { id: 'C31', sem: 7, name: 'NANOMATERIALES', req: ['C27'] },
  { id: 'C32', sem: 7, name: 'SELECCIÓN DE MATERIALES', req: ['C29'] },
  { id: 'C33', sem: 7, name: 'DISEÑO DE PLANTAS', req: ['C25'] },

  // SEMESTRE 8
  { id: 'C34', sem: 8, name: 'GESTIÓN Y EVALUACIÓN DE PROYECTOS', req: [] },
  { id: 'C35', sem: 8, name: 'RECICLAJE Y EVALUACIÓN AMBIENTAL', req: ['C28'] },
  { id: 'C36', sem: 8, name: 'TALLER DE TESIS I', req: ['C32'] },

  // SEMESTRE 9
  { id: 'C37', sem: 9, name: 'TALLER DE TESIS II', req: ['C36'] },
  { id: 'C38', sem: 9, name: 'ÉTICA Y DEONTOLOGÍA PROFESIONAL', req: [] },

  // SEMESTRE 10
  { id: 'C39', sem: 10, name: 'PRÁCTICAS PREPROFESIONALES', req: ['C37'] }
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
      card.innerHTML = `${curso.name} <span class="code-badge">${curso.req.length ? 'Req: ' + curso.req.join(', ') : 'Libre'}</span>`;

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
