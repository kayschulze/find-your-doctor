import { DoctorSearch } from './../js/doctorsearch.js';
import { apiKey } from './../.env';


$(function() {
  $('#searchBetterDoctorForm').submit(function(event) {
    event.preventDefault();
    $('.output').text("");

    let newMedicalCondition = $('#medicalConditionInput').val();
    $('#medicalConditionInput').val("");
    let newDoctorSearch = new DoctorSearch(newMedicalCondition);
    newDoctorSearch.searchMedicalIssue();
  });
});
