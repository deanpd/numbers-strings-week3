'use strict';

$('#submit').on('click', runInput);
$('#reset').on('click', reset);

function runInput(evt) {
  var inputText = $('#input-text').val();
  var number = +inputText;
  if (isNaN(number)) {
    alert("That is not a number. sadface");
  } 
  else {
    runNumber(number);
  }
  evt.preventDefault();
}

var entries = 0;
var total = 0;
var average = 0;

function reset() {
  $('#input-text').val('');
  entries = 0;
  total = 0;
  average = 0;
  showResults(); 
}

function showResults() {
  showValue('#entries', entries);
  showValue('#total', total);
  showValue('#average', average);
  function showValue() {
    $('#entries').html(entries);
    $('#total').html(total);
    $('#average').html(average);
  }
}

function runNumber(number) {
  ++entries;
  total += number;
  if (entries > 0) {
    average = total / entries;
  }
  else {
    average = 0;
  }
  showResults();
}

showResults();