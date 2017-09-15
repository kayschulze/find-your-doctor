import { apiKey } from './../.env';

export class DoctorSearch {
  constructor (medicalCondition, specialty, searchLimit, doctorName) {
    this.medicalCondition = medicalCondition;
    this.specialty = specialty;
    this.searchLimit = searchLimit;
    this.doctorName = doctorName;
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
    this.specialty = this.specialty.fillspace(this.specialty);
    this.doctorName = this.fillSpace(this.medicalCondition);

    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.medicalCondition}&location=wa-seattle&sort=distance-asc&skip=0&limit=${this.searchLimit}&specialty=${this.specialty}&Name=${this.doctorName}&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let dataArray = response.data;
        dataArray.forEach(function(data) {
          let practicesArray = data.practices;
          practicesArray.forEach(function(practice) {
            let practiceAddress = practice.visit_address;
            // console.log(practiceAddress);
            // let doctorsArray = practice.doctors;
            // doctorsArray.forEach(function(doctor) {
            //   let doctorProfile = doctor.profile;
            //   console.log(doctorProfile.first_name);
            // });

            // let practiceDoctors = practice.doctors;
            // console.log(practiceDoctors);
            // let doctorProfile = practiceDoctors.profile;
            // $('.output').append(`<ul><li>Doctor's Name: ${doctorProfile.first_name} ${doctorProfile.last_name}</li>`);
            // practiceDoctors.forEach(function(doctor) {
            //   $('.output').append(`<ul><li>Doctor Name: ${doctor.profile.first_name}</li>`);
            // });
            $('.output').append(`<ul><li>Practice Name: ${practice.name}</li>`);
            $('.output').append(`<li>Practice Location: ${practiceAddress.city}, ${practiceAddress.state} ${practiceAddress.zip}</li><br></ul>`);

          });
        });
      },
      // error: function() {
      //   ('#errors').text("There was an error.");
      // }
    });
  }

}
