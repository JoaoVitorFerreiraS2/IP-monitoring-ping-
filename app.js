falhasConsecutivas = 0;

function verificarStatus() {
  const statusBtn = document.getElementById('status-btn');
  statusBtn.style.backgroundColor = 'gray';
  fetch('http://127.0.0.1:8080/')
    .then(response => response.text())
    .then(text => {
      console.log(text);
      if (text.includes('online')) {
        falhasConsecutivas = 0; // reinicia a contagem de falhas consecutivas
        statusBtn.style.backgroundColor = 'green';
      } else {
        falhasConsecutivas++;
        if (falhasConsecutivas >= 10) { 
          statusBtn.style.backgroundColor = 'red';
        } else if (falhasConsecutivas >= 5) { 
          statusBtn.style.backgroundColor = 'yellow';
        } 
      }
    })
    .catch(error => console.error(error));
}

// faz a primeira verificação ao carregar a página
verificarStatus();

// define a verificação automática a cada 4 segundos
setInterval(verificarStatus, 4000);
