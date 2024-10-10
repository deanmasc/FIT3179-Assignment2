var vis1 = "js/education_map.vg.json";
vegaEmbed("#education_map", vis1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis2 = "js/enrolled_map.vg.json";
vegaEmbed("#enrolled_map", vis2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis3 = "js/updated_education_map.vg.json";
vegaEmbed("#updated_education_map", vis3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis4 = "js/employment_barchart.vg.json";
vegaEmbed("#employment_barchart", vis4)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis5 = "js/field_of_study_barchart.vg.json";
vegaEmbed("#field_of_study_barchart", vis5)
.then(function (result) {
	// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

