var vis1 = "https://raw.githubusercontent.com/deanmasc/FIT3179-Assignment2/refs/heads/main/js/education_map.vg.json";
  vegaEmbed('#education_map', vis1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var vis2 = "https://raw.githubusercontent.com/deanmasc/FIT3179-Assignment2/refs/heads/main/js/education_map.vg.json";
  vegaEmbed('#enrolled_map', vis1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);