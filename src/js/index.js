import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('#gifSearch').click(function() {
    const gif = $('#gif').val();
    $('#gif').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?api_key${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response1 = JSON.parse(this.responseText);
        getElements(response1);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGifSearch').text(`Results: ${gif}`);
    }
  });
});