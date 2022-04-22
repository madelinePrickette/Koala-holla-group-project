console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    $(':input').val('');
    console.log(koalaToSend);
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);

  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas',
  })
    .then((response) => {
      console.log('response', response);
    })
    .catch((error) => {
      console.log('error', error);
    });

  function koalaReadyForTransfer() {
    console.log('Koala transfer (PUT route) ready!');
    let koalaIdToUpdate = $(this).closest('tr').data('id');
    $.ajax({
      method: 'PUT',
      url: `/koalas/${koalaIdToUpdate}`,
    })
      .then(function (response) {
        getKoalas();
      })
      .catch(function (error) {
        console.log('something wrong with PUT route:', error);
      });
  }

  function deleteKoala() {
    let koalaIdToDelete = $(this).closest('tr').data('id');
    $.ajax({
      method: 'DELETE',
      url: `/koalas/${koalaIdToDelete}`,
    })
      .then(function (response) {
        refreshBooks(); // REPLACE THIS WITH THE REFESH KOALAS FUNCTION
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
