console.log('AJAX - 1-pobierz-dane-programisty');

let btn = document.createElement('button');
btn.innerHTML = 'Pobierz dane';
document.body.appendChild(btn);

let dv = document.createElement('div');
dv.setAttribute('id', 'dane-programisty');
document.body.appendChild(dv);

const getData = () => {
//   console.log('OK');
  fetch(
    'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'
  )
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let dPracownik = document.getElementById('dane-programisty')
      // console.log(dImie);
      dPracownik.innerHTML = `Imie: ${data.imie}<br> Nazwisko: ${data.nazwisko}<br>
            Zawód: ${data.zawod}<br> Firma: ${data.firma}`
    });
};

btn.addEventListener('click', getData);
