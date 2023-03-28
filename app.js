function verificarStatus() {

    const statusBtn = document.getElementById('status-btn');
    statusBtn.style.backgroundColor = 'gray';

    setInterval(() => {
    fetch('http://127.0.0.1:8080/')
    .then(response => response.text())
    .then(text => {
      console.log(text);
      if (text.includes('online')) {
        statusBtn.style.backgroundColor = 'green';
      } else {
        statusBtn.style.backgroundColor = 'red';
      }
    })

      .catch(error => console.error(error));
  }, 4000);
}