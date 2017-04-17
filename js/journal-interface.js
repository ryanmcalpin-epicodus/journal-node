var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var input = $('#journal').val();
    var journal = new Journal(input);
    var output = journal.countWords();
    var vowels = journal.countVowels();
    var consonants = journal.countConsonants();
    var teaser = journal.getTeaser();
    $('#display').text(output);
    $('#displayVowels').text(vowels);
    $('#displayConsonants').text(consonants);
    $('#displayTeaser').text(teaser);
  });
});
