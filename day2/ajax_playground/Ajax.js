// function fetchCharacters () {
//   var httpRequest = new XMLHttpRequest();
//
//   (function makeRequest() {
//     httpRequest.onreadystatechange = handleResponse;
//     httpRequest.open('GET', 'https://ironhack-characters.herokuapp.com/characters');
//     httpRequest.send();
//   })();
//
//   function handleResponse(response) {
//     if (httpRequest.readyState === 4) {
//       if (httpRequest.status === 200) {
//         showCharacters(JSON.parse(httpRequest.responseText))
//       } else {
//         alert("There was an error");
//       }
//     }
//   }
//
//   function showCharacters (characters) {
//     characters.forEach(function appendLi (chr) {
//
//       // Store HTML in a variable since it's going to big
//         // Use an array to make the concatenating easier
//       var html = [
//         '<li>',
//           '<h2>' + chr.name + '</h2>',
//           '<dl>',
//             '<dt>Occupation:</dt>',
//             '<dd>' + chr.occupation + '</dd>',
//
//             '<dt>Weapon:</dt>',
//             '<dd>' + chr.weapon + '</dd>',
//
//             '<dt>Debt:</dt>',
//             '<dd>' + chr.debt + '</dd>',
//           '</dl>',
//         '</li>'
//
//       // Join the array by newline to make a giant string
//       ].join('\n');
//
//       // Append giant HTML to list
//       var newLi = document.createElement('li');
//       newLi.innerHTML = html;
//       document.querySelector('.js-character-list').appendChild(newLi);
//     });
//   }
//
//   function handleError (err1, err2, err3) {
//     console.error('OH NO!!', err1, err2, err3);
//   }
// }
//
// $('.js-characters').onclick = fetchCharacters()
//
// $.ajax ({
//   type:"POST",
//   url:"https://ironhack-characters.herokuapp.com/characters"
//   data: newCharacter, //Objeto
//   success: onSaveSucess,
//   error: function() {
//     console.log('error');
//   },
//   dataType:"jason"
// });
$(function(){
  function handleRequest(response) {
    response.forEach(function(character){
      $('html').append('<p></p>' + character.name);
    })
  }
  $(".js-characters").on("click",function(){
  var request = $.get('https://ironhack-characters.herokuapp.com/characters');
  request.done(handleRequest);
  request.fail(function (error) {
    console.log('error');
    })
  });
})
// $.post ('https://ironhack-characters.herokuapp.com/characters',character)
