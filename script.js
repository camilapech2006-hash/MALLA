const cursos = [
  // SEMESTRE 1
  { id: '2501101', sem: 1, name: 'CÁLCULO I', req: [] },
  { id: '2501102', sem: 1, name: 'FÍSICA I', req: [] },
  { id: '2501103', sem: 1, name: 'QUÍMICA GENERAL', req: [] },
  { id: '2501104', sem: 1, name: 'DIBUJO EN INGENIERÍA', req: [] },
  { id: '2501105', sem: 1, name: 'FUNDAMENTOS DE LA MATEMÁTICA', req: [] },
  { id: '2501106', sem: 1, name: 'METODOLOGÍA DEL TRABAJO ACADÉMICO', req: [] },

  // SEMESTRE 2
  { id: '2501207', sem: 2, name: 'CÁLCULO II', req: ['2501101'] },
  { id: '2501208', sem: 2, name: 'FÍSICA II', req: ['2501102'] },
  { id: '2501209', sem: 2, name: 'QUÍMICA ORGANICA', req: ['2501103'] },
  { id: '2501210', sem: 2, name: 'INTRODUCCIÓN A INGENIERÍA DE MATERIALES', req: [] },
  { id: '2501211', sem: 2, name: 'REALIDAD NACIONAL', req: [] },
  { id: '2501212', sem: 2, name: 'LINGÜÍSTICA, COMPRENSIÓN Y REDACCIÓN ACADÉMICA', req: [] },

  // SEMESTRE 3
  { id: '2502113', sem: 3, name: 'CIUDADANIA E INTERCULTURALIDAD', req: [] },
  { id: '2502114', sem: 3, name: 'ECUACIONES DIFERENCIALES', req: ['2501207'] },
  { id: '2502115', sem: 3, name: 'FÍSICA MODERNA', req: ['2501208'] },
  { id: '2502116', sem: 3, name: 'ESTADÍSTICA Y DISEÑO EXPERIMENTAL APLICADA A INGENIERÍA DE MATERIALES', req: [] },
  { id: '2502117', sem: 3, name: 'TERMODINAMICA Y CINÉTICA', req: ['2501103'] },
  { id: '2502118', sem: 3, name: 'FILOSOFÍA DE LAS CIENCIAS', req: [] },

  // SEMESTRE 4
  { id: '2502219', sem: 4, name: 'ECOLOGÍA Y CONSERVACIÓN AMBIENTAL', req: [] },
  { id: '2502220', sem: 4, name: 'ÁLGEBRA LINEAL', req: ['2502114'] },
  { id: '2502221', sem: 4, name: 'MECÁNICA DE MATERIALES', req: ['2502115'] },
  { id: '2502222', sem: 4, name: 'CIENCIA DE MATERIALES I', req: ['2501210'] },
  { id: '2502223', sem: 4, name: 'FENÓMENOS DE TRANSFERENCIA', req: ['2502117'] },
  { id: '2502224', sem: 4, name: 'ECONOMÍA GENERAL', req: [] },

  // SEMESTRE 5
  { id: '2503125', sem: 5, name: 'ÉTICA GENERAL Y DEONTOLOGÍA', req: [] },
  { id: '2503126', sem: 5, name: 'GESTIÓN Y CONTROL DE CALIDAD', req: ['2502116'] },
  { id: '2503127', sem: 5, name: 'TRANSFORMACIÓN DE FASES', req: ['2502223'] },
  { id: '2503128', sem: 5, name: 'MÉTODOS NUMÉRICOS APLICADOS A LA INGENIERÍA', req: ['2502220'] },
  { id: '2503129', sem: 5, name: 'CIENCIA DE MATERIALES II', req: ['2502222'] },
  { id: '2503130', sem: 5, name: 'INGLÉS', req: [] },

  // SEMESTRE 6
  { id: '2503231', sem: 6, name: 'MATERIALES POLÍMEROS I', req: ['2503129'] },
  { id: '2503232', sem: 6, name: 'MATERIALES METÁLICOS', req: ['2503127'] },
  { id: '2503233', sem: 6, name: 'ENSAYO DE MATERIALES', req: ['2502221'] },
  { id: '2503234', sem: 6, name: 'SEGURIDAD INDUSTRIAL Y PREVENCIÓN DE RIESGOS', req: [] },
  { id: '2503235', sem: 6, name: 'MÉTODOS DE CARACTERIZACIÓN DE MATERIALES', req: ['2503129'] },

  // SEMESTRE 7
  { id: '2504136', sem: 7, name: 'CORROSIÓN Y DEGRADACIÓN DE MATERIALES', req: ['2503235'] },
  { id: '2504137', sem: 7, name: 'MATERIALES CERÁMICOS I', req: ['2503127'] },
  { id: '2504138', sem: 7, name: 'MATERIALES POLÍMEROS II', req: ['2503231'] },
  { id: '2504139', sem: 7, name: 'SOLDADURA EN MATERIALES METÁLICOS', req: ['2503232'] },
  { id: '2504140', sem: 7, name: 'ENSAYOS NO DESTRUCTIVOS (E)', req: ['2503233'] },
  { id: '2504141', sem: 7, name: 'NANOMATERIALES (E)', req: [] },

  // SEMESTRE 8
  { id: '2504242', sem: 8, name: 'MATERIALES CERÁMICOS II', req: ['2504137'] },
  { id: '2504243', sem: 8, name: 'POLÍMEROS AVANZADOS', req: ['2504138'] },
  { id: '2504244', sem: 8, name: 'INGENIERÍA DE SUPERFICIES', req: ['2504136'] },
  { id: '2504245', sem: 8, name: 'MECÁNICA DE LA FRACTURA', req: ['2503233'] },
  { id: '2504246', sem: 8, name: 'ANÁLISIS DE FALLAS (E)', req: [] },
  { id: '2504247', sem: 8, name: 'FUNDICIÓN DE MATERIALES (E)', req: ['2504139'] },

  // SEMESTRE 9
  { id: '2505148', sem: 9, name: 'MATERIALES COMPUESTOS I', req: ['2504243'] },
  { id: '2505149', sem: 9, name: 'SELECCIÓN DE MATERIALES', req: [] },
  { id: '2505150', sem: 9, name: 'SIMULACIÓN POR ELEMENTOS FINITOS', req: ['2504245'] },
  { id: '2505151', sem: 9, name: 'CERÁMICOS AVANZADOS', req: ['2504242'] },
  { id: '2505152', sem: 9, name: 'UNIÓN DE MATERIALES (E)', req: ['2504244'] },
  { id: '2505153', sem: 9, name: 'TECNOLOGÍA DE CONCRETO Y SUS MATERIALES (E)', req: [] },

  // SEMESTRE 10
  { id: '2505254', sem: 10, name: 'TRABAJO DE INVESTIGACIÓN', req: [] },
  { id: '2505255', sem: 10, name: 'MATERIALES COMPUESTOS II', req: ['2505148'] },
  { id: '2505256', sem: 10, name: 'OPTIMIZACIÓN DE PROCESOS', req: [] },
  { id: '2505257', sem: 10, name: 'MANUFACTURA ADITIVA (E)', req: [] },
  { id: '2505258', sem: 10, name: 'BIOMATERIALES (E)', req: [] }
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
      card.innerHTML = `${curso.name} <span class="code-badge">${curso.req.length ? 'Requisito' : 'Libre'}</span>`;

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
