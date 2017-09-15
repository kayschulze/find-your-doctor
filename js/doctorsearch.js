export class DoctorSearch {
  constructor (name) {
    this.name = name;
  }

  searchMedicalIssue() {
    $.ajax({
      url: ,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

          }
        });
      },
      error: function() {
        ('#errors').text("");
      }
    });
  }

}
