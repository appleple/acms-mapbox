import 'core-js/stable';
import 'regenerator-runtime/runtime';

// ページ読み込み時にMapboxクラスターインスタンスを作成
document.addEventListener('DOMContentLoaded', () => {
    let geodata = new Geodata();
    let mapboxFieldsTags = document.getElementsByClassName('owndata');
    Object.keys(mapboxFieldsTags).forEach((key) => {
        geodata.pushEachFieldData(mapboxFieldsTags[key])
        new MapboxCluster(geodata);
    });
})

// クラスター作成用のデータを保持するクラス
class Geodata {
    constructor() {
        this.featuredata = {
            "type": "FeatureCollection",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            "features": []
        };
    }

    pushEachFieldData(mapdata) {
        const url = mapdata.dataset.url;
        const title = mapdata.dataset.title;
        const lng = mapdata.dataset.lng;
        const lat = mapdata.dataset.lat;
        const geodata = { "type": "Feature", "properties": { "url": url, "title": title, "marker-symbol": "default_marker", "icon": 'tw-provincial' }, "geometry": { "type": "Point", "coordinates": [lng, lat] } }
        this.featuredata.features.push(geodata);
    }

}

// クラスター作成用メソッドを保持するクラス
class MapboxCluster {
    constructor(geodata) {
        this.geodata = geodata;
        this.mapboxgl = mapboxgl;
        this.mapboxgl.accessToken = document.getElementById('accesstoken_styleurl').dataset.accesstoken;
        this.instancemethod();
    }

    instancemethod() {
        this.instantiationMap();
        this.addSource();
        this.addLayer();
        this.addPopup();
        this.addMarkerImage();
        this.addClickEvent(this.map);
        this.chagePointer(this.map);
    }

    // マップを初期化
    instantiationMap() {
        this.map = new this.mapboxgl.Map({
            container: 'fmap',
            style: document.getElementById('accesstoken_styleurl').dataset.styleurl,
            center: [135, 35],
            zoom: 1,
        });
    }

    // クラスター表示のための情報を追加する
    addSource() {
        this.map.on('load', () => {
            // Add a new source from our GeoJSON data and set the
            // 'cluster' option to true. GL-JS will add the point_count property to your source data.
            this.map.addSource('locations', {
                type: 'geojson',
                data: this.geodata.featuredata,
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });
        })
    }

    // クラスター表示のためのレイヤーを追加する
    addLayer() {
        this.map.on('load', () => {
            // クラスター表示の円のレイヤー
            this.map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'locations',
                filter: ['has', 'point_count'],
                paint: {
                    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 5
                    //   * Yellow, 30px circles when point count is between 5 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#51bbd6',
                        5,
                        '#f1f075',
                        750,
                        '#f28cb1'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        15,
                        5,
                        20,
                        750,
                        40
                    ]
                }
            });

            // クラスターに表示される数字のレイヤー
            this.map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'locations',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });
            // クラスターでなくマーカーの表現
            this.map.addLayer({
                id: 'unclustered-point',
                type: 'symbol',
                source: 'locations',
                filter: ['!', ['has', 'point_count']],
                "layout": {
                    "icon-image": "map_marker",
                    'icon-size': 0.5,
                    'icon-allow-overlap': true

                }
            });
        })
    }

    // ポップアップを追加
    addPopup() {
        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        this.map.on('click', 'unclustered-point', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const message = '<a href=' + e.features[0].properties.url + '>' + e.features[0].properties.title + '</a>'
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new this.mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(message)
                .addTo(this.map);
        });
    }

    addMarkerImage() {
        this.map.on('load', () => {
            this.map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                (error, image) => {
                    if (error) throw error;
                    this.map.addImage('map_marker', image);
                }
            )
        })
    }

    // クラスターをクリックしたときのイベントを追加
    addClickEvent(map) {
        // inspect a cluster on click
        map.on('click', 'clusters', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['clusters']
            });

            var clusterId = features[0].properties.cluster_id;
            map.getSource('locations').getClusterExpansionZoom(
                clusterId,
                function (err, zoom) {
                    if (err) return;

                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                }
            );
        });
    }

    // クラスターの円にマウスを合わせた際にマウスの形が変化
    chagePointer(map) {
        map.on('mouseenter', 'clusters', function () {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', function () {
            map.getCanvas().style.cursor = '';
        });
    }
}