console.log('AJAX - Warsztat - Pobierz dane po kliknięciu przycisku')

let clickButton = document.getElementById('but1');

const getData = () => {
  fetch('https://akademia108.pl/api/ajax/get-post.php') 

  .then (res=>res.json())
  .then ((data) => {

    console.log(data.userId);
    console.log(data.id);
    console.log(data.title);
    console.log(data.body);

    let pData1 = document.createElement('p');
    let pData2 = document.createElement('p');
    let pData3 = document.createElement('p');
    let pData4 = document.createElement('p');

    pData1.innerHTML = `User Id: ${data.userId}`;
    pData2.innerHTML = `Id: ${data.id}`;
    pData3.innerHTML = `Title: ${data.title}`;
    pData4.innerHTML = `Body: ${data.body}`;

    let pData = document.body;
    
    pData.appendChild(pData1);
    pData.appendChild(pData2);
    pData.appendChild(pData3);
    pData.appendChild(pData4);
  })
  
  .catch (error => {
    console.log(error);
  })
};
clickButton.addEventListener('click', getData);
