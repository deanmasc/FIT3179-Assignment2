var vis1 = "js/enrolled_map.vg.json";
vegaEmbed("#enrolled_map", vis1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis2 = "js/updated_education_map.vg.json";
vegaEmbed("#updated_education_map", vis2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis3 = "js/employment_barchart.vg.json";
vegaEmbed("#employment_barchart", vis3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vis4 = "js/field_of_study_barchart.vg.json";
vegaEmbed("#field_of_study_barchart", vis4)
.then(function (result) {
	// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

var vis5 = "js/area_chart_non_school.vg.json";
vegaEmbed("#area_chart", vis5)
.then(function (result) {
	// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

var vis6 = "js/bubble_chart.vg.json";
vegaEmbed("#bubble_chart", vis6)
.then(function (result) {
	// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
})
.catch(console.error);

