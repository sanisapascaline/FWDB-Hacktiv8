
  var myVar;
  function showPage() {
    $('#loading').css('display', 'none');
    $('#page').css('display', 'block');
  }
  function loadPage() {
    myVar = setTimeout(showPage, 3000);
  }