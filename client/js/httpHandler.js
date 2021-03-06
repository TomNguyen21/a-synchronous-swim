(function() {


  const serverUrl = 'http://127.0.0.1:3000';


  //
  // TODO: build the swim command fetcher here
  //errorCB
  const fetchSwimCommand = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: (direction) => {
         console.log(direction)
       SwimTeam.move(direction)
      }
    })
  }
  setInterval(fetchSwimCommand, 10000);

  // const fetchBackground = () => {
  //   $.ajax({
  //     type: 'GET',
  //     url: serverUrl,
  //     success: (image) => {
  //       $('body').css({'background-image': image});
  //       console.log('is the background there?');
  //     }
  //   })
  // }

  // $('body').on('keydown', (event) => {
  //   var buttonPress = event.key;
  //   if (buttonPress) {
  //     var direction = buttonPress;
  //     sendKey(direction)
  //     //SwimTeam.move(direction.toLowerCase());
  //   }
  // });

  // const sendKey = (buttonPress) => {
  //   $.ajax({
  //     type: 'GET',
  //     url: serverUrl,
  //     data: JSON.stringify(buttonPress),
  //     success: (direction) => {
  //       SwimTeam.move(direction);
  //     }
  //   });

  // }

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
