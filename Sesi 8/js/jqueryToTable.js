
$(document).ready(function () {
  var batas = 15;
  for (var baris = 1; baris <= batas; baris++) {
    $("tbody").append("<tr>")
    for (var kolom = 1; kolom <= batas; kolom++) {
      $("tbody").append("<td>O</td>")
    }
    $("tbody").append("</tr>");
  }
})