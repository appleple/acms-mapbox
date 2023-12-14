import { Mymap, MapSize, Geocoder } from "/js/mapboxobjects.js"


// エントリー詳細画面にてMapboxユニットを表示
document.addEventListener('DOMContentLoaded', function () {
  createFieldMap();

})
class FieldMap extends Mymap {

  // マップのインスタンス化
  instantiationMap() {
    this.map = new this.mapboxgl.Map({
      container: 'fmap',
      style: this.styleurl,
      //基本的な画面の制御プロパティ
      center: [this.lng, this.lat],
      zoom: this.zoom,
      pitch: this.pitch,
      bearing: this.bearing,
    });
  }
}

//   エントリー「変更」画面にてインスタンス化
class FieldExsistedMap extends FieldMap {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.instanceMethod();
  }

  instanceMethod() {
    this.instantiationMap();
    this.instantiationMarker();
    this.setMapZoomToForm(this.map);
    this.addExtentionToMap(this.map);
    this.getMarkerDropLocation(this.map);
    this.adaptFormLocationToMarker();
    this.setMapPitchToForm(this.map);
    this.setMapBearingToForm(this.map);
  }

}

//   マップカテゴリのカスタムフィールドの新規作成時にインスタンス化
class FieldDefaultMap extends FieldMap {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.lng = 135;
    this.lat = 35;
    this.zoom = 5;
    this.pitch = 0;
    this.bearing = 0;
    this.instanceMethod();
  }

  // インスタンス時によばれるメソッド
  instanceMethod() {
    this.setDefaultValueToForm()
    this.instantiationMap();
    this.instantiationMarker();
    this.setMapZoomToForm(this.map);
    this.addExtentionToMap(this.map);
    this.getMarkerDropLocation(this.map);
    this.adaptFormLocationToMarker();
    this.setMapPitchToForm(this.map);
    this.setMapBearingToForm(this.map);
  }

}

class ShowFieldMap extends FieldMap {

  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.instanceMethod();
  }

  instanceMethod() {
    this.instantiationMap();
    this.instantiationMarker();
  }

  // インスタンス作成時によばれるメソッド
  instantiationMarker() {
    // マーカーを立てる
    this.marker = new this.mapboxgl.Marker({
    })
      .setLngLat(this.map.getCenter())
      .addTo(this.map);
  }

}

class MapFieldSize extends MapSize {
  constructor(mapInformationObj) {
    super(mapInformationObj);
  }

}

//   カスタムフィールドMapboxを作成
function createFieldMap(unitid) {
  const mapInformationObj = {
    formlngtag: document.getElementById('lng'),
    formlattag: document.getElementById('lat'),
    formzoomtag: document.getElementById('zoom'),
    formpitchtag: document.getElementById('pitch'),
    formbearingtag: document.getElementById('bearing'),
    formsizetag: document.getElementById('size'),
    formcommenttag: document.getElementById('comment'),
    maptag: document.getElementById('fmap'),
    mapwrappertag: document.getElementById('fmapwrapper'),
    geocodertag: document.getElementById('geocoder'),
    accesstoken_styleurltag: document.getElementById('accesstoken_styleurl'),
    lng: document.getElementById('fmap').dataset.lng,
    lat: document.getElementById('fmap').dataset.lat,
    zoom: document.getElementById('fmap').dataset.zoom,
    pitch: document.getElementById('fmap').dataset.pitch,
    bearing: document.getElementById('fmap').dataset.bearing,
    styleurl: document.getElementById('accesstoken_styleurl').dataset.styleurl,
    accesstoken: document.getElementById('accesstoken_styleurl').dataset.accesstoken,
    comment: document.getElementById('fmap').dataset.comment,
    mapsize: document.getElementById('fmap').dataset.mapsize,
    maptype: document.getElementById('fmap').dataset.maptype,
  }
  if (mapInformationObj.maptype === 'show') {
    // エントリー詳細画面での処理
    console.log('field show')
    const mapbox_map = new ShowFieldMap(mapInformationObj);
  } else if (mapInformationObj.lng != false) {
    // マップカテゴリのカスタムフィールドを既存の場合に処理
    const mapbox_map = new FieldExsistedMap(mapInformationObj);
    const mapbox_geocoder = new Geocoder(mapbox_map);
    console.log('field exsisted')
  } else if (mapInformationObj.maptype === 'field') {
    // マップカテゴリのカスタムフィールドを新規作成の場合に処理
    console.log('field new')
    const mapbox_map = new FieldDefaultMap(mapInformationObj);
    const mapbox_geocoder = new Geocoder(mapbox_map);
  }
}

console.log('mapboxfield.js loaded')