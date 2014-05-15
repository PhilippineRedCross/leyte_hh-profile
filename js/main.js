// setup Leaflet map
var mapHeight = $(window).height() - 50;
var mapBounds = [];
var surveyData = [];

var extentGroup = new L.FeatureGroup();
var totalSurveysCount = 0;
var mappedHeatPoints = [];

$("#map").height(mapHeight);
$("#infoWrapper").height(mapHeight);

var mapAttribution = 'Base map &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a> | &copy; <a href="http://redcross.org" title="Red Cross" target="_blank">Red Cross</a> 2014, CC-BY | <a title="Disclaimer" onClick="showDisclaimer();">Disclaimer</a>';
var mapboxStreetsUrl = 'http://{s}.tiles.mapbox.com/v3/americanredcross.hmki3gmj/{z}/{x}/{y}.png',
  mapboxTerrainUrl = 'http://{s}.tiles.mapbox.com/v3/americanredcross.hc5olfpa/{z}/{x}/{y}.png',
  greyscaleUrl = 'http://{s}.tiles.mapbox.com/v3/americanredcross.i4d2d077/{z}/{x}/{y}.png',
  hotUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
var mapboxStreets = new L.TileLayer(mapboxStreetsUrl, {attribution: mapAttribution}),
  mapboxTerrain = new L.TileLayer(mapboxTerrainUrl, {attribution: mapAttribution}),
  greyscale = new L.TileLayer(greyscaleUrl, {attribution: mapAttribution}),
  hot = new L.TileLayer(hotUrl, {attribution: mapAttribution});
  

var Lmap = new L.Map("map", {
  center: [11.04197, 124.96296], 
  zoom: 8, 
  minZoom: 8,
  // scrollWheelZoom: false,
  layers: [greyscale]
});

var baseMaps = {
  "Grey": greyscale,
  "Streets": mapboxStreets,
  "Terrain": mapboxTerrain,
  "HOT": hot
};

L.control.layers(baseMaps).addTo(Lmap);

var heatLayer = new L.heatLayer(mappedHeatPoints).addTo(Lmap);

// var heatLayerOptions = {
//   maxZoom: 17,
//   max: 1.0,
//   radius: 25,
//   blur: 15,
//   gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}
// };


/* Initialize the SVG layer */
Lmap._initPathRoot()    

/* We simply pick up the SVG from the map object */
var svg = d3.select("#map").select("svg");
var markersColor = svg.append('g').attr("id", "markersColor");
var markersEmpty = svg.append('g').attr("id", "markersEmpty");


function d3Draw(){  
  d3.json("data/HouseholdProfileForm_2014_05_14.json", function(data) {
    surveyData = data;
    /* Add a LatLng object to each item in the dataset */
    data.forEach(function(d) {
      d.LatLng = new L.LatLng(d._location_latitude,d._location_longitude)
    })

    var featureColor = markersColor.selectAll("circle")
      .data(data)
      .enter().append("circle").attr("r", 3).attr('stroke','none')
      .attr('fill','none');
    var featureEmpty = markersEmpty.selectAll("circle")
      .data(data)
      .enter().append("circle").attr("r", 3).attr('stroke','black')
      .attr('stroke-opacity', 0.3).attr('fill','none');  
    function update() {
      featureColor.attr("cx",function(d) { return Lmap.latLngToLayerPoint(d.LatLng).x})
      featureColor.attr("cy",function(d) { return Lmap.latLngToLayerPoint(d.LatLng).y})
      // featureColor.attr("r",function(d) { return 5})
      featureEmpty.attr("cx",function(d) { return Lmap.latLngToLayerPoint(d.LatLng).x})
      featureEmpty.attr("cy",function(d) { return Lmap.latLngToLayerPoint(d.LatLng).y})
      // featureEmpty.attr("r",function(d) { return 5})
    }
    Lmap.on("viewreset", update);
    update();
    getSurveyExtent();
  })
}    

function getSurveyExtent(){
  $(surveyData).each(function(aIndex, a){
    totalSurveysCount += 1;
    var coordinates = [a._location_latitude, a._location_longitude];
    extentGroup.addLayer(new L.CircleMarker(coordinates, {
      opacity: 0,
      fillOpacity: 0
    }));         
  });  
  extentGroup.addTo(Lmap);
  mapBounds = extentGroup.getBounds();
  Lmap.removeLayer(extentGroup);
  Lmap.fitBounds(mapBounds);
  $("#totalSurveysCount").html(totalSurveysCount.toString())
  buildSelectionMenu(); 
}

// there's gotta be a better way to do this but was running into 
// issues with nesting, children, etc when open-closing sections
function buildSelectionMenu() {
  var sectorList = [];
  // using json object created in lookup.js 
  $(surveyQuestions).each(function(aIndex, a) {
    if ($.inArray(a.sector, sectorList) === -1){
      sectorList.push(a.sector);
      var sectorNoSpaces = a.sector.replace(/\s+/g, '');
      var imgFilename = sectorNoSpaces + ".png";      
      $("#selectionMenu").append('<div class="menu-sector" onClick="toggleMenuSector('+
        "'" + sectorNoSpaces + "'" + ')"><img class="menu-sector-img" src="img/' + imgFilename +
        '" title="' + a.sector + '"><span class="menu-sector-name">' + a.sector + '</span></div><div id="' + 
        sectorNoSpaces + '" class="menu-sector-questions"></div>');
      addQuestionToSection(a);
    } else {
      addQuestionToSection(a);
    }
  });  
}

function addQuestionToSection(questionObject) {
  var questionsHtml = '<div class="' + questionObject.sector.replace(/\s+/g, '') + ' question menu-hidden" onClick="toggleQuestion(' + "'" + questionObject.id + "', this" + ')">' + questionObject.textEnglish + '</div>'; 
  for(answer in questionObject.answersEnglish){
    questionsHtml += '<div class="'+ questionObject.id +' answer menu-hidden" ' + 'data-question="' + questionObject.id + '"' +
    'data-answer="' + answer + '"' + ' onClick="toggleAnswer(this)"><span class="colorBox"></span>' + questionObject.answersEnglish[answer] + '</div>';
  }
  var sectorId = "#" + questionObject.sector.replace(/\s+/g, '');
  $(sectorId).append(questionsHtml);
}



function toggleMenuSector(sector){
  //clear map and whatnot
    Lmap.removeLayer(heatLayer);
    $(document.body).find(".colorBox").css({backgroundColor: "#bdbdbd"});
    d3.selectAll(".answer").classed("heatMapped", false);
  var selectorString = "#" + sector;
  // if it's already open then close it
  if (d3.select(selectorString).classed("activeMenuSector")){
    d3.select(selectorString).classed("activeMenuSector", false);
    d3.select(selectorString).selectAll(".question, .answer").classed({"menu-shown": false, "menu-hidden":true});
  } else {
    // open it up and show questions for that sector
    d3.selectAll(".menu-sector-questions").classed("activeMenuSector", false);
    d3.selectAll(".question, .answer").classed({"menu-shown": false, "menu-hidden":true});
    d3.select(selectorString).classed("activeMenuSector", true);
    d3.select(selectorString).selectAll(".question").classed({"menu-shown": true, "menu-hidden":false});
  }
}

function toggleQuestion(question, item){     
  Lmap.removeLayer(heatLayer);
  d3.selectAll(".answer").classed("heatMapped", false);
  $(document.body).find(".colorBox").css({backgroundColor: "#bdbdbd"});
  // d3.selectAll(".colorBox").style("background-color", "#bdbdbd");
  var selectorString = ".answer." + question;
  if($(item).hasClass("activeQuestion")){      
    $(item).removeClass("activeQuestion");
    markersColor.selectAll("circle").attr("fill", "none");               
    d3.selectAll(selectorString).classed({"menu-shown": false, "menu-hidden":true});
  } else {
    $(item).addClass("activeQuestion"); 
    d3.selectAll(".answer").classed({"menu-shown": false, "menu-hidden":true});
    d3.selectAll(selectorString).classed({"menu-shown": true, "menu-hidden":false});
    if($("#markerBtn").hasClass("active")){ 
      colorMarkers();
    } 
  }  
}


function colorMarkers(){
  var selectorString = ".answer.menu-shown";
  var question = $(selectorString).attr("data-question");
  // assign marker legend colors to answers of expanded question
  d3.selectAll(selectorString + " span").style("background-color", function(d, i) {
    return color12[i];
  });
  markersColor.selectAll("circle").attr("fill", "none");
  $(surveyQuestions).each(function(aIndex, a){
    if(a.id === question){
      for(answerOption in a.answersEnglish){
        var filtered = markersColor.selectAll("circle")
          .filter(function(d) { return d[question] === answerOption });
        var colorSearch = "[data-question='" + question + "'][data-answer='" + answerOption + "']";
        var color = $(colorSearch).children().css("background-color");
        var colorHex = d3.rgb(color).toString();
        filtered.attr("fill", colorHex);
      }
    }    
  });  
}

function toggleAnswer(x){
  if($("#heatMapBtn").hasClass("active")){
    if($(x).hasClass("heatMapped") === false){
      d3.selectAll(".answer").classed("heatMapped", false);
      $(x).addClass("heatMapped");
      var mappedQuestion = x.getAttribute("data-question");
      var mappedAnswer = x.getAttribute("data-answer");
      var mappedHeatPoints = [];
      $(surveyData).each(function(aIndex, a) {    
        if(a[mappedQuestion] == mappedAnswer){
          if(isFinite(parseInt(a._location_latitude)) && isFinite(parseInt(a._location_longitude)) ){
            mappedHeatPoints.push([a._location_latitude, a._location_longitude]);
          }
        }
      });
      heatLayer.setLatLngs(mappedHeatPoints);
      heatLayer.addTo(Lmap);
    } else {
      d3.selectAll(".answer").classed("heatMapped", false);
      Lmap.removeLayer(heatLayer);
    } 
  } else {
    console.log("Heat map currently off.")
  }
}

// *** this doesn't work the way i though it might ***
// Lmap.on('zoomend', function(e) {
//   var newZoom = Lmap.getZoom();
//   heatLayer.setOptions({maxZoom: newZoom + 2});
// })

// VARIOUS HELPER FUNCTIONS
function zoomOut(){
  Lmap.fitBounds(mapBounds);
} 

function toggleMapType(x) {
  $(x).toggleClass("active");
  if($("#markerBtn").hasClass("active") === false){
    markersColor.selectAll("circle").attr("fill", "none");
    $(document.body).find(".colorBox").css({backgroundColor: "#bdbdbd"});
  } else {
    colorMarkers();
  }
  if($("#heatMapBtn").hasClass("active") === false){
    Lmap.removeLayer(heatLayer);
    d3.selectAll(".answer").classed("heatMapped", false);
  }
}

function toggleEmpties(x) {
  $(x).toggleClass("active");
  if($("#emptiesBtn").hasClass("active") === false){
    markersEmpty.selectAll("circle").attr("stroke", "none");
  } else {
    markersEmpty.selectAll("circle").attr("stroke", "black");
  }
}

// adjust map div height on screen resize
$(window).resize(function(){
  mapHeight = $(window).height() - 50;
  $("#map").height(mapHeight);
  $("#infoWrapper").height(mapHeight);
});

// show disclaimer text on click of dislcaimer link
function showDisclaimer() {
    window.alert("The maps on this page do not imply the expression of any opinion on the part of the American Red Cross concerning the legal status of a territory or of its authorities.");
}


d3Draw();