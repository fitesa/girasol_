var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IndicedeHumedad_1 = new ol.format.GeoJSON();
var features_IndicedeHumedad_1 = format_IndicedeHumedad_1.readFeatures(json_IndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_1.addFeatures(features_IndicedeHumedad_1);
var lyr_IndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_1, 
                style: style_IndicedeHumedad_1,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_1_0.png" /> -0,20 - -0,08<br />\
    <img src="styles/legend/IndicedeHumedad_1_1.png" /> -0,08 - 0,04<br />\
    <img src="styles/legend/IndicedeHumedad_1_2.png" /> 0,04 - 0,17<br />\
    <img src="styles/legend/IndicedeHumedad_1_3.png" /> 0,17 - 0,29<br />\
    <img src="styles/legend/IndicedeHumedad_1_4.png" /> 0,29 - 0,41<br />'
        });
var format_IndicedeVegetacin_2 = new ol.format.GeoJSON();
var features_IndicedeVegetacin_2 = format_IndicedeVegetacin_2.readFeatures(json_IndicedeVegetacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacin_2.addFeatures(features_IndicedeVegetacin_2);
var lyr_IndicedeVegetacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacin_2, 
                style: style_IndicedeVegetacin_2,
                interactive: false,
    title: 'Indice de Vegetación<br />\
    <img src="styles/legend/IndicedeVegetacin_2_0.png" /> -0,04 - 0,13<br />\
    <img src="styles/legend/IndicedeVegetacin_2_1.png" /> 0,13 - 0,30<br />\
    <img src="styles/legend/IndicedeVegetacin_2_2.png" /> 0,30 - 0,48<br />\
    <img src="styles/legend/IndicedeVegetacin_2_3.png" /> 0,48 - 0,65<br />\
    <img src="styles/legend/IndicedeVegetacin_2_4.png" /> 0,65 - 0,83<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_IndicedeHumedad_1.setVisible(true);lyr_IndicedeVegetacin_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_IndicedeHumedad_1,lyr_IndicedeVegetacin_2];
lyr_IndicedeHumedad_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacin_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacin_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});