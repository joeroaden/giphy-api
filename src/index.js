import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './giphy-service.js';

$(document).ready(function() {
  $('#gifSearch').click(function() {
    let gif = $('#gif').val();
    let promise = GiphyService.getGif(gif);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showGifSearch').html(`<img src="${body.data[1].images.downsized_medium.url}"/>`);
    });
  });
});