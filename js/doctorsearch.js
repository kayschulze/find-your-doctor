import { apiKey } from './../.env';

export class DoctorSearch {
  constructor (medicalCondition) {
    this.medicalCondition = medicalCondition;
  }

  getMedicalCondition() {
    return this.medicalCondition;
  }

  fillSpace(phrase) {
    let phraseArray = phrase.split(" ");
    let filledPhrase = phraseArray.join("%20");

    return filledPhrase;
  }

  searchMedicalIssue() {
    this.medicalCondition = this.fillSpace(this.medicalCondition);

    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.medicalCondition}&user_location=47.606209%2C-122.332071&sort=distance-asc&skip=0&limit=20&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        let dataArray = response.data;
        dataArray.forEach(function(data) {
          let practicesArray = data.practices;
          practicesArray.forEach(function(practice) {
            $('.output').append(`<ul><li>Location: ${practice.location_slug}</li><li>Practice Name: ${practice.name}</li><ul>`);
          })
        });
      },
      error: function() {
        ('#errors').text("There was an error.");
      }
    });
  }

}
