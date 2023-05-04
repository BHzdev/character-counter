$('textarea').on('keyup paste', function () {
  setTimeout(function () {
    let valueTextArea = $('textarea').val().length,
      words = $('textarea').val().split(' ').length;
    $('.caracteres').text(valueTextArea);
    $('.palavras').text(words);
  }, 200);
});
