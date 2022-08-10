console.log('AJAX – Infinite Scroll (warsztat)')

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {

        for (let user of data) {
        let pId = document.createElement('p');
        let pName = document.createElement('p');
        let pWebsite = document.createElement('p');
        let br = document.createElement('p')
               
        pId.innerText = `User Id: ${user.id}`;
        pName.innerText = `User Name: ${user.name}`;
        pWebsite.innerText = `User URL: ${user.website}`;
        br.innerText = `--------`;
        
        document.body.appendChild(pId);
        document.body.appendChild(pName);
        document.body.appendChild(pWebsite);
        document.body.appendChild(br);
      }
          
      console.log(data);    
    })

    .catch(error => {
      console.log(error);
    });
  
  
  console.log('GETDATA');
  }

const scrollToEndOfPage = () => {

   if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight) {
    getData();
  }
};

window.addEventListener('scroll', scrollToEndOfPage);
