import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Mymap, MapSize, Geocoder } from "/js/mapboxobjects.js"

// 作成されたインスタンスのユニットIDを保存
let unitidArray = []

// エントリー詳細画面にてMapboxユニットを表示
document.addEventListener('DOMContentLoaded', function() {
  let unitIDtags = document.getElementsByClassName('unitid');
  Object.keys(unitIDtags).forEach((key) => {
    let unitid = unitIDtags[key].dataset.unitid;
    if (unitidArray.indexOf(unitid) === -1) {
      unitidArray.push(unitid);
      createUnitMap(unitid);
    }
  });
})

// ユニット追加時にunitidArrayを検索。新規のユニットの場合インスタンス作成
ACMS.addListener("acmsAddUnit", function() {
  console.log('add unit ')
  let unitIDtags = document.getElementsByClassName('unitid');
  Object.keys(unitIDtags).forEach((key) => {
    let unitid = unitIDtags[key].dataset.unitid;
    if (unitidArray.indexOf(unitid) === -1) {
      unitidArray.push(unitid);
      createUnitMap(unitid);
    }
  });
});





// エントリー作成・変更画面でのMapboxユニット
class UnitMap extends Mymap {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.unitid = mapInformationObj.unitid;
  }

  // マップユニット作成時のスタイルをセット
  setUsedStyleUrl() {
    const setstyleurl = this.maptag.dataset.setstyleurl;
    if (setstyleurl != false) {
      this.styleurl = setstyleurl;
      this.formsetstyleurltag.value = setstyleurl;
    } else {
      this.formsetstyleurltag.value = this.styleurl;
    }
  }

  // マップのインスタンス化
  instantiationMap() {
    this.map = new this.mapboxgl.Map({
      container: 'map' + this.unitid,
      style: this.styleurl,
      //基本的な画面の制御プロパティ
      center: [this.lng, this.lat],
      zoom: this.zoom,
      pitch: this.pitch,
      bearing: this.bearing,
    });
  }

  // フォームに入力したコメントをポップアップに反映
  adaptFormCommentToPopup() {
    this.formcommenttag.addEventListener('change', { popup: this.popup, unitid: this.unitid, handleEvent: this.changePopupComment });
  }

  // ポップアップのコメントを変更
  changePopupComment() {
    const comment = document.getElementById('comment' + this.unitid)
    this.popup.setHTML(comment.value);
  }
}

// 既存のMapboxユニットが存在する場合にインスタンス化
class UnitExsistedMap extends UnitMap {
  constructor(mapInformationObj) {
    super(mapInformationObj)
    this.instanceMethod();
  }

  // インスタンス作成時によばれるメソッド
  instanceMethod() {
    this.setUsedStyleUrl();
    this.instantiationMap();
    this.instantiationMarker();
    this.instantiationPopup();
    this.setMapZoomToForm(this.map);
    this.setMapPitchToForm(this.map);
    this.setMapBearingToForm(this.map);
    this.addExtentionToMap(this.map, this.unitid);
    this.getMarkerDropLocation(this.map);
    this.adaptFormLocationToMarker();
    this.adaptFormCommentToPopup();
  }

}

// Mapboxユニットを新規作成する際にインスタンス化
class UnitDefaultMap extends UnitMap {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.lng = 135;
    this.lat = 35;
    this.zoom = 5;
    this.pitch = 0;
    this.bearing = 0;
    this.instanceMethod()
  }

  // インスタンス作成時によばれるメソッド
  instanceMethod() {
    this.setUsedStyleUrl();
    this.setDefaultValueToForm()
    this.instantiationMap();
    this.instantiationMarker();
    this.instantiationPopup();
    this.setMapZoomToForm(this.map);
    this.setMapPitchToForm(this.map);
    this.setMapBearingToForm(this.map);
    this.addExtentionToMap(this.map, this.unitid);
    this.getMarkerDropLocation(this.map);
    this.adaptFormLocationToMarker();
    this.adaptFormCommentToPopup();
  }

}


// エントリー詳細画面でインスタンス化
class ShowUnitMap extends UnitMap {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.instanceMethod();
  }

  // インスタンス生成
  instanceMethod() {
    this.setUsedStyleUrl();
    this.instantiationMap();
    this.instantiationMarker();
    this.instantiationPopup();
    this.addExtentionToMap(this.map, this.unitid);
  }

  // インスタンス作成時によばれるメソッド
  instantiationMarker() {
    // マーカーを立てる
    this.marker = new this.mapboxgl.Marker({
    })
      .setLngLat(this.map.getCenter())
      .addTo(this.map);
  }

  // マップユニット作成時のスタイルをセット
  setUsedStyleUrl() {
    const setstyleurl = this.maptag.dataset.setstyleurl;
    if (setstyleurl != false) {
      this.styleurl = setstyleurl;
    }
  }


}

// Mapboxユニットの大きさ変更用クラス
class MapUnitSize extends MapSize {
  constructor(mapInformationObj) {
    super(mapInformationObj);
    this.unitid = mapInformationObj.unitid;
    this.setMapwrappertagSize();
    this.setMapwrappertagMargin();
  }

  // 管理画面の地図の大きさを変更時に管理画面上の地図の大きさに反映させる
  selectMapwrappertagSize() {
    const sizetag = document.getElementById('size' + this.unitid);
    const queryoptions = '#size' + this.unitid + ' option';
    const options = document.querySelectorAll(queryoptions);
    const small = document.getElementById('small');
    const big = document.getElementById('big');
    sizetag.addEventListener("change", () => {
      const index = sizetag.selectedIndex;
      if (options[index].value === 'small') {
        this.changeToSmall();
      } else {
        this.changeToBig();
      }
    });
  }

}


function createUnitMap(unitid) {
  const mapInformationObj = {
    unitid: unitid,
    formlngtag: document.getElementById('lng' + unitid),
    formlattag: document.getElementById('lat' + unitid),
    formzoomtag: document.getElementById('zoom' + unitid),
    formpitchtag: document.getElementById('pitch' + unitid),
    formbearingtag: document.getElementById('bearing' + unitid),
    formsizetag: document.getElementById('size' + unitid),
    formcommenttag: document.getElementById('comment' + unitid),
    formsetstyleurltag: document.getElementById('setstyleurl' + unitid),
    maptag: document.getElementById('map' + unitid),
    mapwrappertag: document.getElementById('mapwrapper' + unitid),
    geocodertag: document.getElementById('geocoder' + unitid),
    accesstoken_styleurltag: document.getElementById('accesstoken_styleurl'),
    lng: document.getElementById('map' + unitid).dataset.lng,
    lat: document.getElementById('map' + unitid).dataset.lat,
    zoom: document.getElementById('map' + unitid).dataset.zoom,
    pitch: document.getElementById('map' + unitid).dataset.pitch,
    bearing: document.getElementById('map' + unitid).dataset.bearing,
    styleurl: document.getElementById('accesstoken_styleurl').dataset.styleurl,
    accesstoken: document.getElementById('accesstoken_styleurl').dataset.accesstoken,
    comment: document.getElementById('map' + unitid).dataset.comment,
    mapsize: document.getElementById('map' + unitid).dataset.mapsize,
    maptype: document.getElementById('map' + unitid).dataset.maptype,
  }
  if (mapInformationObj.maptype === 'show') {
    // エントリー詳細画面での処理
    const mapunitsize = new MapUnitSize(mapInformationObj);
    const mapbox_map = new ShowUnitMap(mapInformationObj);
  } else if (mapInformationObj.lng != false) {
    // エントリー変更画面での処理
    const mapunitsize = new MapUnitSize(mapInformationObj);
    const mapbox_map = new UnitExsistedMap(mapInformationObj);
    const mapbox_geocoder = new Geocoder(mapbox_map);
  } else {
    // エントリー新規作成画面での処理
    const mapunitsize = new MapUnitSize(mapInformationObj);
    const mapbox_map = new UnitDefaultMap(mapInformationObj);
    const mapbox_geocoder = new Geocoder(mapbox_map);

  }
}
