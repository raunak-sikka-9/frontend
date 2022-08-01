var FilePreviews = require('filepreviews');

var previews = new FilePreviews({
  debug: true,
  apiKey: 'xCbFf8uF9RstcwFyDuFPKS4C1q9fde',
  apiSecret: 'Glw2v3e5WPg68ahicdhfQKHjR6tBvo'
});

previews.generate('https://github.com/raunak-sikka-9/sample_files/blob/main/Raunak_Sikka_A7605219040_NTCC%20REPORT_5%20Sem.docx?raw=true', function(err, result) {
//   console.log(err);
//   console.log(result.id);
  console.log(result);

  previews.retrieve(result.id, function(err, result) {
    console.log(result);
  });
});