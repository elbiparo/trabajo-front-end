document.querySelectorAll('.celdas').forEach(contenedor => {
  const tipo = contenedor.dataset.tipo;
  const total = tipo === 'carro' ? 60 : 40;

  for (let i = 1; i <= total; i++) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    celda.title = `${tipo.toUpperCase()} #${i}`;
    
    celda.addEventListener('click', () => {
      celda.classList.toggle('ocupada');
    });

    contenedor.appendChild(celda);
  }
});
