console.log('AJAX – Pobierz dane po kliknięciu przycisku – jQuery (warsztat)')

//METODA $.get

// $(document).ready(function () {
//   $('#btn').click(function () {
//     $.get('https://akademia108.pl/api/ajax/get-post.php')

//       .done(function (data) {
//         console.log(data.id)
//         console.log(data.userId)
//         console.log(data.title)
//         console.log(data.body)

//         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
//         let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
//         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
//         let pBody = $('<p></p>').text(`Body: ${data.body}`);
//         let hr = $('<hr>');

//         // let jqBody = $('body');
        
//         $('body').append(pId);
//         $('body').append(pUserId);
//         $('body').append(pTitle);
//         $('body').append(pBody);
//         $('body').append(hr);
        
       
//       })
//       .fail(function (error) {
//         console.log(error)
//       });
//   });
// });

//METODA $.getJON

$(document).ready(function () {
    $('#btn').click(function () {
      $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
  
        .done(function (data) {
          console.log(data.id)
          console.log(data.userId)
          console.log(data.title)
          console.log(data.body)
  
          let pId = $('<p></p>').text(`Post ID: ${data.id}`);
          let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
          let pTitle = $('<p></p>').text(`Title: ${data.title}`);
          let pBody = $('<p></p>').text(`Body: ${data.body}`);
          let hr = $('<hr>');
  
          // let jqBody = $('body');
          
          $('body').append(pId);
          $('body').append(pUserId);
          $('body').append(pTitle);
          $('body').append(pBody);
          $('body').append(hr);
          
         
        })
        .fail(function (error) {
          console.log(error)
        });
  });
});
