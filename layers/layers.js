ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8118069.323301, 2160492.398964, 8119539.091201, 2161635.968376]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_buildings_150725_1 = new ol.format.GeoJSON();
var features_buildings_150725_1 = format_buildings_150725_1.readFeatures(json_buildings_150725_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_150725_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_150725_1.addFeatures(features_buildings_150725_1);
var lyr_buildings_150725_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_150725_1, 
                style: style_buildings_150725_1,
                popuplayertitle: 'buildings_150725',
                interactive: true,
    title: 'buildings_150725<br />\
    <img src="styles/legend/buildings_150725_1_0.png" /> commercial<br />\
    <img src="styles/legend/buildings_150725_1_1.png" /> mix<br />\
    <img src="styles/legend/buildings_150725_1_2.png" /> residential<br />\
    <img src="styles/legend/buildings_150725_1_3.png" /> temple<br />\
    <img src="styles/legend/buildings_150725_1_4.png" /> toilet<br />\
    <img src="styles/legend/buildings_150725_1_5.png" /> <br />' });
var format_road_050825_2 = new ol.format.GeoJSON();
var features_road_050825_2 = format_road_050825_2.readFeatures(json_road_050825_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_050825_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_050825_2.addFeatures(features_road_050825_2);
var lyr_road_050825_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_050825_2, 
                style: style_road_050825_2,
                popuplayertitle: 'road_050825',
                interactive: true,
                title: '<img src="styles/legend/road_050825_2.png" /> road_050825'
            });
var format_vegetation_150725_3 = new ol.format.GeoJSON();
var features_vegetation_150725_3 = format_vegetation_150725_3.readFeatures(json_vegetation_150725_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegetation_150725_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegetation_150725_3.addFeatures(features_vegetation_150725_3);
var lyr_vegetation_150725_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vegetation_150725_3, 
                style: style_vegetation_150725_3,
                popuplayertitle: 'vegetation_150725',
                interactive: true,
                title: '<img src="styles/legend/vegetation_150725_3.png" /> vegetation_150725'
            });
var format_waterbody_220725_4 = new ol.format.GeoJSON();
var features_waterbody_220725_4 = format_waterbody_220725_4.readFeatures(json_waterbody_220725_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_220725_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_220725_4.addFeatures(features_waterbody_220725_4);
var lyr_waterbody_220725_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbody_220725_4, 
                style: style_waterbody_220725_4,
                popuplayertitle: 'waterbody_220725',
                interactive: true,
                title: '<img src="styles/legend/waterbody_220725_4.png" /> waterbody_220725'
            });
var format_site2_boundary_5 = new ol.format.GeoJSON();
var features_site2_boundary_5 = format_site2_boundary_5.readFeatures(json_site2_boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_site2_boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site2_boundary_5.addFeatures(features_site2_boundary_5);
var lyr_site2_boundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_site2_boundary_5, 
                style: style_site2_boundary_5,
                popuplayertitle: 'site2_boundary',
                interactive: true,
                title: '<img src="styles/legend/site2_boundary_5.png" /> site2_boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_buildings_150725_1.setVisible(true);lyr_road_050825_2.setVisible(true);lyr_vegetation_150725_3.setVisible(true);lyr_waterbody_220725_4.setVisible(true);lyr_site2_boundary_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_buildings_150725_1,lyr_road_050825_2,lyr_vegetation_150725_3,lyr_waterbody_220725_4,lyr_site2_boundary_5];
lyr_buildings_150725_1.set('fieldAliases', {'bldg_id': 'bldg_id', 'bldg_use': 'bldg_use', 'wall_ml': 'wall_ml', 'bldg_ht': 'bldg_ht', 'bldg_flr': 'bldg_flr', 'bldg_clr': 'bldg_clr', 'roof_ml': 'roof_ml', 'bldg_fp': 'bldg_fp', 'no_hh': 'no_hh', 'cool_sys': 'cool_sys', 'bldg_area': 'bldg_area', 'bldg_cond': 'bldg_cond', 'population': 'population', });
lyr_road_050825_2.set('fieldAliases', {'ro_name': 'ro_name', 'ro_width': 'ro_width', 'ro_ml': 'ro_ml', 'ro_typo': 'ro_typo', 'fid': 'fid', });
lyr_vegetation_150725_3.set('fieldAliases', {'veg_id': 'veg_id', 'girth_rad': 'girth_rad', 'crown_rad': 'crown_rad', 'seasonal': 'seasonal', 'species': 'species', 'flaura_typ': 'flaura_typ', 'name': 'name', });
lyr_waterbody_220725_4.set('fieldAliases', {'wt_id': 'wt_id', 'width': 'width', 'type': 'type', 'wt_ed': 'wt_ed', 'area': 'area', });
lyr_site2_boundary_5.set('fieldAliases', {'id': 'id', 'area_name': 'area_name', });
lyr_buildings_150725_1.set('fieldImages', {'bldg_id': 'TextEdit', 'bldg_use': 'TextEdit', 'wall_ml': 'TextEdit', 'bldg_ht': 'TextEdit', 'bldg_flr': 'TextEdit', 'bldg_clr': 'TextEdit', 'roof_ml': 'TextEdit', 'bldg_fp': 'TextEdit', 'no_hh': 'TextEdit', 'cool_sys': 'TextEdit', 'bldg_area': 'TextEdit', 'bldg_cond': 'TextEdit', 'population': 'TextEdit', });
lyr_road_050825_2.set('fieldImages', {'ro_name': 'TextEdit', 'ro_width': 'TextEdit', 'ro_ml': 'TextEdit', 'ro_typo': 'TextEdit', 'fid': 'Range', });
lyr_vegetation_150725_3.set('fieldImages', {'veg_id': 'TextEdit', 'girth_rad': 'TextEdit', 'crown_rad': 'TextEdit', 'seasonal': 'TextEdit', 'species': 'TextEdit', 'flaura_typ': 'TextEdit', 'name': 'TextEdit', });
lyr_waterbody_220725_4.set('fieldImages', {'wt_id': 'TextEdit', 'width': 'TextEdit', 'type': 'TextEdit', 'wt_ed': 'TextEdit', 'area': 'TextEdit', });
lyr_site2_boundary_5.set('fieldImages', {'id': 'TextEdit', 'area_name': 'TextEdit', });
lyr_buildings_150725_1.set('fieldLabels', {'bldg_id': 'hidden field', 'bldg_use': 'inline label - visible with data', 'wall_ml': 'inline label - visible with data', 'bldg_ht': 'inline label - visible with data', 'bldg_flr': 'inline label - always visible', 'bldg_clr': 'inline label - always visible', 'roof_ml': 'inline label - always visible', 'bldg_fp': 'inline label - always visible', 'no_hh': 'inline label - always visible', 'cool_sys': 'inline label - always visible', 'bldg_area': 'inline label - always visible', 'bldg_cond': 'inline label - always visible', 'population': 'inline label - always visible', });
lyr_road_050825_2.set('fieldLabels', {'ro_name': 'inline label - always visible', 'ro_width': 'inline label - always visible', 'ro_ml': 'inline label - always visible', 'ro_typo': 'inline label - visible with data', 'fid': 'hidden field', });
lyr_vegetation_150725_3.set('fieldLabels', {'veg_id': 'hidden field', 'girth_rad': 'inline label - always visible', 'crown_rad': 'inline label - always visible', 'seasonal': 'inline label - always visible', 'species': 'inline label - always visible', 'flaura_typ': 'no label', 'name': 'no label', });
lyr_waterbody_220725_4.set('fieldLabels', {'wt_id': 'hidden field', 'width': 'inline label - always visible', 'type': 'inline label - always visible', 'wt_ed': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_site2_boundary_5.set('fieldLabels', {'id': 'hidden field', 'area_name': 'inline label - always visible', });
lyr_site2_boundary_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});