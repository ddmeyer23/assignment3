require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77"
        }
      });
      
      var camera = new Camera({
        position: [
          -71.0548637939085, // lon
          42.36563822923559, // lat
           300// elevation in meters
        ],
        tilt:18,
        heading: 25
      });
var camera2 = new Camera({
        position: {
          x: -71.06088266095523,
          y: 42.37530854701265,
          z: 300
        },
        tilt: 22,
        heading: 0
      });
  var camera3 = new Camera({
        position: {
          x: -71.01263802373754,
          y: 42.35997419950935,
          z: 2800
        },
        tilt: 50,
        heading: 270
      });
  var homecam = new Camera({
        position: [
          -71.060217,
          42.382655,
           5500// elevation in meters
        ],
        tilt:0,
        heading: 0
      });
  
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: homecam,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [Bos,OldNorthChurch, BunkerHill].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    
    
    OldNorthChurch.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
BunkerHill.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
Bos.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });

    });
