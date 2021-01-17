// // $( "#inputMovie" ).autocomplete({
// //     source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
// //   });
// // let inputMovie = document.getElementById('inputMovie');
// // let nameMovie = inputMovie.innerHTML;
// // let searchResult = document.getElementById('searchResult');

// $(function () {
//     var getData = function (request, response) {
//         $.getJSON(
//             "https://www.omdbapi.com/?t="+request.term+"&apikey=5dbf8aee",
//             function (data) {
//                 response(data);
//             });
//     };
 
//     var selectItem = function (event, ui) {
//         $(searchResult).val(ui.item.value);
//         return false;
//     }
 
//     $(searchResult).autocomplete({
//         source: getData,
//         select: selectItem,
//         minLength: 2,
//         change: function() {
//             $(searchResult).val("").css("display", 2);
//         }
//     });
// });