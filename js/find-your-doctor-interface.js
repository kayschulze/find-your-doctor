import { DoctorSearch } from './../js/doctorsearch.js';
import { apiKey } from './../.env';


$(function() {
  $('#searchBetterDoctorForm').submit(function(event) {
    event.preventDefault();
    $('.output').text("");

    let newDoctorSearch = new DoctorSearch();

  
  });
});
