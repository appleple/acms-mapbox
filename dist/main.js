/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./js/mapboxunit.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mymap = /*#__PURE__*/function () {
  function Mymap(mapInformationObj) {
    _classCallCheck(this, Mymap);

    this.mapboxgl = mapboxgl;
    this.mapboxgl.accessToken = mapInformationObj.accesstoken;
    this.accesstoken = mapInformationObj.accesstoken;
    this.styleurl = mapInformationObj.styleurl;
    this.lng = mapInformationObj.lng;
    this.lat = mapInformationObj.lat;
    this.pitch = mapInformationObj.pitch;
    this.bearing = mapInformationObj.bearing;
    this.zoom = mapInformationObj.zoom;
    this.comment = mapInformationObj.comment;
    this.mapsize = mapInformationObj.mapsize;
    this.maptype = mapInformationObj.maptype;
    this.formlngtag = mapInformationObj.formlngtag;
    this.formlattag = mapInformationObj.formlattag;
    this.formzoomtag = mapInformationObj.formzoomtag;
    this.formpitchtag = mapInformationObj.formpitchtag;
    this.formbearingtag = mapInformationObj.formbearingtag;
    this.formsizetag = mapInformationObj.formsizetag;
    this.formcommenttag = mapInformationObj.formcommenttag;
    this.formsetstyleurltag = mapInformationObj.formsetstyleurltag, this.maptag = mapInformationObj.maptag;
    this.mapwrappertag = mapInformationObj.maptagwrapper;
    this.geocodertag = mapInformationObj.geocodertag;
    this.accesstoken_styleurltag = mapInformationObj.accesstoken_styleurltag;
  } // マップの情報表示


  _createClass(Mymap, [{
    key: "showMapInformaiton",
    value: function showMapInformaiton() {
      console.log('lng', this.lng);
      console.log('lat', this.lat);
      console.log('zoom', this.zoom);
      console.log('pitch', this.pitch);
      console.log('bearing', this.bearing);
      console.log('comment', this.comment);
      console.log('mapsize', this.mapsize);
      console.log('accesstoken', this.accesstoken);
      console.log('styleurl', this.styleurl);
      console.log('maptag', this.maptag);
      console.log('accesstoken_styleurltag', this.accesstoken_styleurltag);
      console.log('maptype', this.maptype);
    } // インスタンス生成

  }, {
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.addExtentionToMap(this.map);
    } // マップのインスタンス化

  }, {
    key: "instantiationMap",
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'map',
        style: this.styleurl,
        //基本的な画面の制御プロパティ
        center: [this.lng, this.lat],
        zoom: this.zoom,
        pitch: this.pitch,
        bearing: this.bearing
      });
    } // マーカーのインスタンス化

  }, {
    key: "instantiationMarker",
    value: function instantiationMarker() {
      // マーカーを立てる
      this.marker = new this.mapboxgl.Marker({
        draggable: true
      }).setLngLat(this.map.getCenter()).addTo(this.map);
    } // ポップアップのインスタンス化

  }, {
    key: "instantiationPopup",
    value: function instantiationPopup() {
      this.popup = new mapboxgl.Popup().setHTML(this.comment);
      this.marker.setPopup(this.popup);
    } // マップの追加機能

  }, {
    key: "addExtentionToMap",
    value: function addExtentionToMap(map) {
      //拡大・縮小・方位ナビゲーション  
      map.addControl(new mapboxgl.NavigationControl(), 'top-left'); //フルスクリーンモード

      map.addControl(new mapboxgl.FullscreenControl()); //スケール表示

      map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
      }));
    } // htmlに持たせたデータ属性をフォームに代入

  }, {
    key: "setDefaultValueToForm",
    value: function setDefaultValueToForm() {
      this.formlngtag.value = this.lng;
      this.formlattag.value = this.lat;
      this.formzoomtag.value = this.zoom;
      this.formpitchtag.value = this.pitch;
      this.formbearingtag.value = this.bearing;
    } // 地図の角度をフォームに代入

  }, {
    key: "setMapPitchToForm",
    value: function setMapPitchToForm(map) {
      var _this = this;

      map.on('pitch', function (e) {
        // 現在のpitchレベル取得
        _this.formpitchtag.value = e.target.getPitch();
      });
    } // 地図の回転をフォームに代入

  }, {
    key: "setMapBearingToForm",
    value: function setMapBearingToForm(map) {
      var _this2 = this;

      map.on("rotate", function (e) {
        _this2.formbearingtag.value = e.target.getBearing();
      });
    } // マップをズームした際のイベント

  }, {
    key: "setMapZoomToForm",
    value: function setMapZoomToForm(map) {
      var _this3 = this;

      // ズームイベント
      map.on('zoom', function () {
        // 現在のズームレベル取得
        _this3.formzoomtag.value = map.getZoom();
      });
    } // マーカーをドロップした際のイベント設定

  }, {
    key: "getMarkerDropLocation",
    value: function getMarkerDropLocation(map) {
      var _this4 = this;

      // マーカーをドロップした位置にマップを移動
      this.marker.on('dragend', function () {
        var LngLat = _this4.marker.getLngLat();

        _this4.formlngtag.value = LngLat.lng;
        _this4.formlattag.value = LngLat.lat;
        map.flyTo({
          center: [LngLat.lng, LngLat.lat]
        });
      });
    } // ポップアップのコメントを変更

  }, {
    key: "changePopupComment",
    value: function changePopupComment() {
      var comment = document.getElementById('comment');
      this.popup.setHTML(comment.value);
    } // フォームに入力したコメントをポップアップに反映

  }, {
    key: "adaptFormCommentToPopup",
    value: function adaptFormCommentToPopup() {
      this.formcommenttag.addEventListener('change', {
        popup: this.popup,
        handleEvent: this.changePopupComment
      });
    } // フォームタグに直接数値を入力した際にマップのマーカーの位置を移動

  }, {
    key: "adaptFormLocationToMarker",
    value: function adaptFormLocationToMarker() {
      var _this5 = this;

      this.formlngtag.addEventListener('change', function () {
        _this5.map.flyTo({
          center: [_this5.formlngtag.value, _this5.formlattag.value]
        });

        _this5.marker.setLngLat([_this5.formlngtag.value, _this5.formlattag.value]).addTo(_this5.map);
      });
      this.formlattag.addEventListener('change', function () {
        _this5.map.flyTo({
          center: [_this5.formlngtag.value, _this5.formlattag.value]
        });

        _this5.marker.setLngLat([_this5.formlngtag.value, _this5.formlattag.value]).addTo(_this5.map);
      });
    }
  }]);

  return Mymap;
}(); // エントリー作成・変更画面でのMapboxユニット


var UnitMap = /*#__PURE__*/function (_Mymap) {
  _inherits(UnitMap, _Mymap);

  var _super = _createSuper(UnitMap);

  function UnitMap(mapInformationObj) {
    var _this6;

    _classCallCheck(this, UnitMap);

    _this6 = _super.call(this, mapInformationObj);
    _this6.unitid = mapInformationObj.unitid;
    return _this6;
  } // マップユニット作成時のスタイルをセット


  _createClass(UnitMap, [{
    key: "setUsedStyleUrl",
    value: function setUsedStyleUrl() {
      var setstyleurl = this.maptag.dataset.setstyleurl;

      if (setstyleurl != false) {
        this.styleurl = setstyleurl;
        this.formsetstyleurltag.value = setstyleurl;
      } else {
        this.formsetstyleurltag.value = this.styleurl;
      }
    } // マップのインスタンス化

  }, {
    key: "instantiationMap",
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'map' + this.unitid,
        style: this.styleurl,
        //基本的な画面の制御プロパティ
        center: [this.lng, this.lat],
        zoom: this.zoom,
        pitch: this.pitch,
        bearing: this.bearing
      });
    } // フォームに入力したコメントをポップアップに反映

  }, {
    key: "adaptFormCommentToPopup",
    value: function adaptFormCommentToPopup() {
      this.formcommenttag.addEventListener('change', {
        popup: this.popup,
        unitid: this.unitid,
        handleEvent: this.changePopupComment
      });
    } // ポップアップのコメントを変更

  }, {
    key: "changePopupComment",
    value: function changePopupComment() {
      var comment = document.getElementById('comment' + this.unitid);
      this.popup.setHTML(comment.value);
    }
  }]);

  return UnitMap;
}(Mymap); // 既存のMapboxユニットが存在する場合にインスタンス化


var UnitExsistedMap = /*#__PURE__*/function (_UnitMap) {
  _inherits(UnitExsistedMap, _UnitMap);

  var _super2 = _createSuper(UnitExsistedMap);

  function UnitExsistedMap(mapInformationObj) {
    var _this7;

    _classCallCheck(this, UnitExsistedMap);

    _this7 = _super2.call(this, mapInformationObj);

    _this7.instanceMethod();

    return _this7;
  }

  _createClass(UnitExsistedMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
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
  }]);

  return UnitExsistedMap;
}(UnitMap); // Mapboxユニットを新規作成する際にインスタンス化


var UnitDefaultMap = /*#__PURE__*/function (_UnitMap2) {
  _inherits(UnitDefaultMap, _UnitMap2);

  var _super3 = _createSuper(UnitDefaultMap);

  function UnitDefaultMap(mapInformationObj) {
    var _this8;

    _classCallCheck(this, UnitDefaultMap);

    _this8 = _super3.call(this, mapInformationObj);
    _this8.lng = 135;
    _this8.lat = 35;
    _this8.zoom = 5;
    _this8.pitch = 0;
    _this8.bearing = 0;

    _this8.instanceMethod();

    return _this8;
  }

  _createClass(UnitDefaultMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setDefaultValueToForm();
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
  }]);

  return UnitDefaultMap;
}(UnitMap);

var ShowUnitMap = /*#__PURE__*/function (_UnitMap3) {
  _inherits(ShowUnitMap, _UnitMap3);

  var _super4 = _createSuper(ShowUnitMap);

  function ShowUnitMap(mapInformationObj) {
    var _this9;

    _classCallCheck(this, ShowUnitMap);

    _this9 = _super4.call(this, mapInformationObj);

    _this9.instanceMethod();

    return _this9;
  } // インスタンス生成


  _createClass(ShowUnitMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.addExtentionToMap(this.map, this.unitid);
    } // マーカーのインスタンス化

  }, {
    key: "instantiationMarker",
    value: function instantiationMarker() {
      // マーカーを立てる
      this.marker = new this.mapboxgl.Marker({}).setLngLat(this.map.getCenter()).addTo(this.map);
    }
  }]);

  return ShowUnitMap;
}(UnitMap);

var FieldMap = /*#__PURE__*/function (_Mymap2) {
  _inherits(FieldMap, _Mymap2);

  var _super5 = _createSuper(FieldMap);

  function FieldMap() {
    _classCallCheck(this, FieldMap);

    return _super5.apply(this, arguments);
  }

  return FieldMap;
}(Mymap);

var FieldExsistedMap = /*#__PURE__*/function (_FieldMap) {
  _inherits(FieldExsistedMap, _FieldMap);

  var _super6 = _createSuper(FieldExsistedMap);

  function FieldExsistedMap(mapInformationObj) {
    var _this10;

    _classCallCheck(this, FieldExsistedMap);

    _this10 = _super6.call(this, mapInformationObj);

    _this10.instanceMethod();

    return _this10;
  }

  _createClass(FieldExsistedMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
      this.setMapZoomToForm(this.map);
      this.addExtentionToMap(this.map);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
    }
  }]);

  return FieldExsistedMap;
}(FieldMap);

var FieldDefaultMap = /*#__PURE__*/function (_FieldMap2) {
  _inherits(FieldDefaultMap, _FieldMap2);

  var _super7 = _createSuper(FieldDefaultMap);

  function FieldDefaultMap(mapInformationObj) {
    var _this11;

    _classCallCheck(this, FieldDefaultMap);

    _this11 = _super7.call(this, mapInformationObj);
    _this11.lng = 135;
    _this11.lat = 35;
    _this11.zoom = 5;
    _this11.pitch = 0;
    _this11.bearing = 0;

    _this11.instanceMethod();

    return _this11;
  }

  _createClass(FieldDefaultMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setDefaultValueToForm();
      this.instantiationMap();
      this.instantiationMarker();
      this.setMapZoomToForm(this.map);
      this.addExtentionToMap(this.map);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
    }
  }]);

  return FieldDefaultMap;
}(FieldMap);

var MapSize = /*#__PURE__*/function () {
  function MapSize(mapInformationObj) {
    _classCallCheck(this, MapSize);

    this.maptag = mapInformationObj.maptag;
    this.mapwrappertag = mapInformationObj.mapwrappertag;
    this.mapsize = mapInformationObj.mapsize;
  } // 管理画面の地図の大きさを変更時に管理画面上の地図の大きさに反映させる


  _createClass(MapSize, [{
    key: "selectMapwrappertagSize",
    value: function selectMapwrappertagSize() {
      var _this12 = this;

      var sizetag = document.getElementById('size' + this.unitid);
      var queryoptions = '#size' + ' option';
      var options = document.querySelectorAll(queryoptions);
      var small = document.getElementById('small');
      var big = document.getElementById('big');
      sizetag.addEventListener("change", function () {
        var index = sizetag.selectedIndex;

        if (options[index].value === 'small') {
          _this12.changeToSmall();
        } else {
          _this12.changeToBig();
        }
      });
    }
  }, {
    key: "changeToSmall",
    value: function changeToSmall() {
      console.log('small');
      this.mapwrappertag.style.maxWidth = '100%';
      this.mapwrappertag.style.width = '400px';
      this.mapwrappertag.style.height = '300px';
      this.maptag.style.width = '400px';
      this.maptag.style.height = '300px';
    }
  }, {
    key: "changeToBig",
    value: function changeToBig() {
      console.log('big');
      this.mapwrappertag.style.maxWidth = '100%';
      this.mapwrappertag.style.width = '820px';
      this.mapwrappertag.style.height = '320px';
      this.maptag.style.width = '820px';
      this.maptag.style.height = '320px';
    }
  }, {
    key: "setMapwrappertagSize",
    value: function setMapwrappertagSize() {
      if (this.mapsize === 'big') {
        this.mapwrappertag.style.maxWidth = '100%';
        this.mapwrappertag.style.width = '820px';
        this.mapwrappertag.style.height = '320px';
        this.maptag.style.width = '820px';
        this.maptag.style.height = '320px';
      } else {
        console.log(this.mapwrappertag);
        this.mapwrappertag.style.maxWidth = '100%';
        this.mapwrappertag.style.width = '400px';
        this.mapwrappertag.style.height = '300px';
        this.maptag.style.width = '400px';
        this.maptag.style.height = '300px';
      }
    }
  }, {
    key: "setMapwrappertagMargin",
    value: function setMapwrappertagMargin() {
      this.mapwrappertag.style.marginLeft = "auto";
      this.mapwrappertag.style.marginRight = "auto";
    }
  }]);

  return MapSize;
}();

var MapFieldSize = /*#__PURE__*/function (_MapSize) {
  _inherits(MapFieldSize, _MapSize);

  var _super8 = _createSuper(MapFieldSize);

  function MapFieldSize(mapInformationObj) {
    var _this13;

    _classCallCheck(this, MapFieldSize);

    _this13 = _super8.call(this, mapInformationObj);
    _this13.unitid = mapInformationObj.unitid;
    return _this13;
  }

  return MapFieldSize;
}(MapSize);

var MapUnitSize = /*#__PURE__*/function (_MapSize2) {
  _inherits(MapUnitSize, _MapSize2);

  var _super9 = _createSuper(MapUnitSize);

  function MapUnitSize(mapInformationObj) {
    var _this14;

    _classCallCheck(this, MapUnitSize);

    _this14 = _super9.call(this, mapInformationObj);
    _this14.unitid = mapInformationObj.unitid;

    _this14.setMapwrappertagSize();

    _this14.setMapwrappertagMargin();

    return _this14;
  } // 管理画面の地図の大きさを変更時に管理画面上の地図の大きさに反映させる


  _createClass(MapUnitSize, [{
    key: "selectMapwrappertagSize",
    value: function selectMapwrappertagSize() {
      var _this15 = this;

      var sizetag = document.getElementById('size' + this.unitid);
      var queryoptions = '#size' + this.unitid + ' option';
      var options = document.querySelectorAll(queryoptions);
      var small = document.getElementById('small');
      var big = document.getElementById('big');
      sizetag.addEventListener("change", function () {
        var index = sizetag.selectedIndex;

        if (options[index].value === 'small') {
          _this15.changeToSmall();
        } else {
          _this15.changeToBig();
        }
      });
    }
  }]);

  return MapUnitSize;
}(MapSize);

var Geocoder = /*#__PURE__*/function () {
  function Geocoder(mapinstance) {
    _classCallCheck(this, Geocoder);

    this.map = mapinstance.map;
    this.mapboxgl = mapinstance.mapboxgl;
    this.accesstoken = mapinstance.accesstoken;
    this.formlngtag = mapinstance.formlngtag;
    this.formlattag = mapinstance.formlattag;
    this.geocodertag = mapinstance.geocodertag;
    this.instantiationGeooder();
    this.setStyleGeocoderTag();
    this.setStyleInput();
    this.setLngLatToForm();
  } // 場所検索機能の追加


  _createClass(Geocoder, [{
    key: "instantiationGeooder",
    value: function instantiationGeooder(mapinstance) {
      //  場所検索フォームを追加
      this.geocoder = new MapboxGeocoder({
        accessToken: this.accesstoken,
        mapboxgl: this.mapboxgl,
        placeholder: '検索'
      });
      this.geocodertag.appendChild(this.geocoder.onAdd(this.map));
    }
  }, {
    key: "setStyleGeocoderTag",
    value: function setStyleGeocoderTag() {
      this.geocodertag.style.Width = '100%';
      this.geocodertag.style.marginTop = "5px";
    } // 検索機能のフォームのパディング調整（デフォルトではアイコンとフォームが重なっている）

  }, {
    key: "setStyleInput",
    value: function setStyleInput() {
      var mapboxgl_ctrl_geocodertag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder')[0];
      mapboxgl_ctrl_geocodertag.style.minWidth = '100%';
      var geocoderinputtag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0];
      geocoderinputtag.style.paddingLeft = "35px";
      geocoderinputtag.style.width = "100%";
    } // 地図の角度をフォームに代入

  }, {
    key: "setLngLatToForm",
    value: function setLngLatToForm() {
      var _this16 = this;

      this.geocoder.on('result', function (e) {
        var lnglat = e.result.center;
        _this16.formlngtag.value = lnglat[0];
        _this16.formlattag.value = lnglat[1];
      });
    }
  }]);

  return Geocoder;
}();

function createUnitMap(unitid) {
  var mapInformationObj = {
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
    maptype: document.getElementById('map' + unitid).dataset.maptype
  };

  if (mapInformationObj.maptype === 'show') {
    console.log('unit show');
    var mapunitsize = new MapUnitSize(mapInformationObj);
    var mapbox_map = new ShowUnitMap(mapInformationObj);
  } else if (mapInformationObj.lng != false) {
    console.log('unit exsisted');

    var _mapunitsize = new MapUnitSize(mapInformationObj);

    var _mapbox_map = new UnitExsistedMap(mapInformationObj);

    var mapbox_geocoder = new Geocoder(_mapbox_map);
  } else {
    console.log('unit new');

    var _mapunitsize2 = new MapUnitSize(mapInformationObj);

    var _mapbox_map2 = new UnitDefaultMap(mapInformationObj);

    var _mapbox_geocoder = new Geocoder(_mapbox_map2);
  }
}

function createFieldMap(unitid) {
  var mapInformationObj = {
    formlngtag: document.getElementById('lng'),
    formlattag: document.getElementById('lat'),
    formzoomtag: document.getElementById('zoom'),
    formpitchtag: document.getElementById('pitch'),
    formbearingtag: document.getElementById('bearing'),
    formsizetag: document.getElementById('size'),
    formcommenttag: document.getElementById('comment'),
    maptag: document.getElementById('map'),
    mapwrappertag: document.getElementById('mapwrapper'),
    geocodertag: document.getElementById('geocoder'),
    accesstoken_styleurltag: document.getElementById('accesstoken_styleurl'),
    lng: document.getElementById('map').dataset.lng,
    lat: document.getElementById('map').dataset.lat,
    zoom: document.getElementById('map').dataset.zoom,
    pitch: document.getElementById('map').dataset.pitch,
    bearing: document.getElementById('map').dataset.bearing,
    styleurl: document.getElementById('accesstoken_styleurl').dataset.styleurl,
    accesstoken: document.getElementById('accesstoken_styleurl').dataset.accesstoken,
    comment: document.getElementById('map').dataset.comment,
    mapsize: document.getElementById('map').dataset.mapsize,
    maptype: document.getElementById('map').dataset.maptype
  };
  showMapInformaitonObj(mapInformationObj);

  if (mapInformationObj.lng != false) {
    var mapbox_map = new FieldExsistedMap(mapInformationObj);
    var mapbox_geocoder = new Geocoder(mapbox_map);
    console.log('field exsisted');
  } else if (mapInformationObj.maptype === 'field') {
    console.log('field new');

    var _mapbox_map3 = new FieldDefaultMap(mapInformationObj);

    var _mapbox_geocoder2 = new Geocoder(_mapbox_map3);
  }
}

function showMapInformaitonObj(mapInformationObj) {
  console.log(document.getElementById('map'));
  console.log(mapInformationObj.maptype, 'maptype');
  console.log(mapInformationObj.mapwrappertag, 'mapwrappertag');
  console.log(mapInformationObj.formlngtag, 'formlngtag');
  console.log(mapInformationObj.formlattag, 'formlattag');
  console.log(mapInformationObj.formsizetag, 'formsizetag');
  console.log(mapInformationObj.formzoomtag, 'formzoomtag');
  console.log(mapInformationObj.accesstoken, 'accsstoken');
}

console.log('js loaded');
window.createUnitMap = createUnitMap;
window.createFieldMap = createFieldMap;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvLi9qcy9tYXBib3h1bml0LmpzIl0sIm5hbWVzIjpbIk15bWFwIiwibWFwSW5mb3JtYXRpb25PYmoiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzdG9rZW4iLCJzdHlsZXVybCIsImxuZyIsImxhdCIsInBpdGNoIiwiYmVhcmluZyIsInpvb20iLCJjb21tZW50IiwibWFwc2l6ZSIsIm1hcHR5cGUiLCJmb3JtbG5ndGFnIiwiZm9ybWxhdHRhZyIsImZvcm16b29tdGFnIiwiZm9ybXBpdGNodGFnIiwiZm9ybWJlYXJpbmd0YWciLCJmb3Jtc2l6ZXRhZyIsImZvcm1jb21tZW50dGFnIiwiZm9ybXNldHN0eWxldXJsdGFnIiwibWFwdGFnIiwibWFwd3JhcHBlcnRhZyIsIm1hcHRhZ3dyYXBwZXIiLCJnZW9jb2RlcnRhZyIsImFjY2Vzc3Rva2VuX3N0eWxldXJsdGFnIiwiY29uc29sZSIsImxvZyIsImluc3RhbnRpYXRpb25NYXAiLCJpbnN0YW50aWF0aW9uTWFya2VyIiwiaW5zdGFudGlhdGlvblBvcHVwIiwiYWRkRXh0ZW50aW9uVG9NYXAiLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsIm1hcmtlciIsIk1hcmtlciIsImRyYWdnYWJsZSIsInNldExuZ0xhdCIsImdldENlbnRlciIsImFkZFRvIiwicG9wdXAiLCJQb3B1cCIsInNldEhUTUwiLCJzZXRQb3B1cCIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsIkZ1bGxzY3JlZW5Db250cm9sIiwiU2NhbGVDb250cm9sIiwibWF4V2lkdGgiLCJ1bml0IiwidmFsdWUiLCJvbiIsImUiLCJ0YXJnZXQiLCJnZXRQaXRjaCIsImdldEJlYXJpbmciLCJnZXRab29tIiwiTG5nTGF0IiwiZ2V0TG5nTGF0IiwiZmx5VG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiY2hhbmdlUG9wdXBDb21tZW50IiwiVW5pdE1hcCIsInVuaXRpZCIsInNldHN0eWxldXJsIiwiZGF0YXNldCIsIlVuaXRFeHNpc3RlZE1hcCIsImluc3RhbmNlTWV0aG9kIiwic2V0VXNlZFN0eWxlVXJsIiwic2V0TWFwWm9vbVRvRm9ybSIsInNldE1hcFBpdGNoVG9Gb3JtIiwic2V0TWFwQmVhcmluZ1RvRm9ybSIsImdldE1hcmtlckRyb3BMb2NhdGlvbiIsImFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIiLCJhZGFwdEZvcm1Db21tZW50VG9Qb3B1cCIsIlVuaXREZWZhdWx0TWFwIiwic2V0RGVmYXVsdFZhbHVlVG9Gb3JtIiwiU2hvd1VuaXRNYXAiLCJGaWVsZE1hcCIsIkZpZWxkRXhzaXN0ZWRNYXAiLCJGaWVsZERlZmF1bHRNYXAiLCJNYXBTaXplIiwic2l6ZXRhZyIsInF1ZXJ5b3B0aW9ucyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic21hbGwiLCJiaWciLCJpbmRleCIsInNlbGVjdGVkSW5kZXgiLCJjaGFuZ2VUb1NtYWxsIiwiY2hhbmdlVG9CaWciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIk1hcEZpZWxkU2l6ZSIsIk1hcFVuaXRTaXplIiwic2V0TWFwd3JhcHBlcnRhZ1NpemUiLCJzZXRNYXB3cmFwcGVydGFnTWFyZ2luIiwiR2VvY29kZXIiLCJtYXBpbnN0YW5jZSIsImluc3RhbnRpYXRpb25HZW9vZGVyIiwic2V0U3R5bGVHZW9jb2RlclRhZyIsInNldFN0eWxlSW5wdXQiLCJzZXRMbmdMYXRUb0Zvcm0iLCJnZW9jb2RlciIsIk1hcGJveEdlb2NvZGVyIiwicGxhY2Vob2xkZXIiLCJhcHBlbmRDaGlsZCIsIm9uQWRkIiwiV2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXBib3hnbF9jdHJsX2dlb2NvZGVydGFnIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1pbldpZHRoIiwiZ2VvY29kZXJpbnB1dHRhZyIsInBhZGRpbmdMZWZ0IiwibG5nbGF0IiwicmVzdWx0IiwiY3JlYXRlVW5pdE1hcCIsIm1hcHVuaXRzaXplIiwibWFwYm94X21hcCIsIm1hcGJveF9nZW9jb2RlciIsImNyZWF0ZUZpZWxkTWFwIiwic2hvd01hcEluZm9ybWFpdG9uT2JqIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEs7QUFDSixpQkFBWUMsaUJBQVosRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQSxRQUFMLENBQWNDLFdBQWQsR0FBNEJGLGlCQUFpQixDQUFDRyxXQUE5QztBQUNBLFNBQUtBLFdBQUwsR0FBbUJILGlCQUFpQixDQUFDRyxXQUFyQztBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLGlCQUFpQixDQUFDSSxRQUFsQztBQUNBLFNBQUtDLEdBQUwsR0FBV0wsaUJBQWlCLENBQUNLLEdBQTdCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXTixpQkFBaUIsQ0FBQ00sR0FBN0I7QUFDQSxTQUFLQyxLQUFMLEdBQWFQLGlCQUFpQixDQUFDTyxLQUEvQjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsaUJBQWlCLENBQUNRLE9BQWpDO0FBQ0EsU0FBS0MsSUFBTCxHQUFZVCxpQkFBaUIsQ0FBQ1MsSUFBOUI7QUFDQSxTQUFLQyxPQUFMLEdBQWVWLGlCQUFpQixDQUFDVSxPQUFqQztBQUNBLFNBQUtDLE9BQUwsR0FBZVgsaUJBQWlCLENBQUNXLE9BQWpDO0FBQ0EsU0FBS0MsT0FBTCxHQUFlWixpQkFBaUIsQ0FBQ1ksT0FBakM7QUFDQSxTQUFLQyxVQUFMLEdBQWtCYixpQkFBaUIsQ0FBQ2EsVUFBcEM7QUFDQSxTQUFLQyxVQUFMLEdBQWtCZCxpQkFBaUIsQ0FBQ2MsVUFBcEM7QUFDQSxTQUFLQyxXQUFMLEdBQW1CZixpQkFBaUIsQ0FBQ2UsV0FBckM7QUFDQSxTQUFLQyxZQUFMLEdBQW9CaEIsaUJBQWlCLENBQUNnQixZQUF0QztBQUNBLFNBQUtDLGNBQUwsR0FBc0JqQixpQkFB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QVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0F0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWTNCLGlCQUFpQixDQUFDWSxPQUE5QixFQUF1QyxTQUF2QztBQUNBYyxTQUFPLENBQUNDLEdBQVIsQ0FBWTNCLGlCQUFpQixDQUFDc0IsYUFBOUIsRUFBNkMsZUFBN0M7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVkzQixpQkFBaUIsQ0FBQ2EsVUFBOUIsRUFBMEMsWUFBMUM7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVkzQixpQkFBaUIsQ0FBQ2MsVUFBOUIsRUFBMEMsWUFBMUM7QUFDQVksU0FBTyxDQUFDQyxHQUFSLENBQVkzQixpQkFBaUIsQ0FBQ2tCLFdBQTlCLEVBQTJDLGFBQTNDO0FBQ0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsaUJBQWlCLENBQUNlLFdBQTlCLEVBQTJDLGFBQTNDO0FBQ0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsaUJBQWlCLENBQUNHLFdBQTlCLEVBQTJDLFlBQTNDO0FBQ0Q7O0FBRUR1QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBRUF5RyxNQUFNLENBQUNOLGFBQVAsR0FBdUJBLGFBQXZCO0FBQ0FNLE1BQU0sQ0FBQ0YsY0FBUCxHQUF3QkEsY0FBeEIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXltYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgdGhpcy5tYXBib3hnbCA9IG1hcGJveGdsO1xuICAgICAgdGhpcy5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuO1xuICAgICAgdGhpcy5hY2Nlc3N0b2tlbiA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuO1xuICAgICAgdGhpcy5zdHlsZXVybCA9IG1hcEluZm9ybWF0aW9uT2JqLnN0eWxldXJsO1xuICAgICAgdGhpcy5sbmcgPSBtYXBJbmZvcm1hdGlvbk9iai5sbmc7XG4gICAgICB0aGlzLmxhdCA9IG1hcEluZm9ybWF0aW9uT2JqLmxhdDtcbiAgICAgIHRoaXMucGl0Y2ggPSBtYXBJbmZvcm1hdGlvbk9iai5waXRjaDtcbiAgICAgIHRoaXMuYmVhcmluZyA9IG1hcEluZm9ybWF0aW9uT2JqLmJlYXJpbmc7XG4gICAgICB0aGlzLnpvb20gPSBtYXBJbmZvcm1hdGlvbk9iai56b29tO1xuICAgICAgdGhpcy5jb21tZW50ID0gbWFwSW5mb3JtYXRpb25PYmouY29tbWVudDtcbiAgICAgIHRoaXMubWFwc2l6ZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHNpemU7XG4gICAgICB0aGlzLm1hcHR5cGUgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0eXBlO1xuICAgICAgdGhpcy5mb3JtbG5ndGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybWxuZ3RhZ1xuICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybWxhdHRhZztcbiAgICAgIHRoaXMuZm9ybXpvb210YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3Jtem9vbXRhZztcbiAgICAgIHRoaXMuZm9ybXBpdGNodGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybXBpdGNodGFnO1xuICAgICAgdGhpcy5mb3JtYmVhcmluZ3RhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1iZWFyaW5ndGFnO1xuICAgICAgdGhpcy5mb3Jtc2l6ZXRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1zaXpldGFnO1xuICAgICAgdGhpcy5mb3JtY29tbWVudHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1jb21tZW50dGFnO1xuICAgICAgdGhpcy5mb3Jtc2V0c3R5bGV1cmx0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3Jtc2V0c3R5bGV1cmx0YWcsXG4gICAgICAgICAgdGhpcy5tYXB0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0YWc7XG4gICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0YWd3cmFwcGVyO1xuICAgICAgdGhpcy5nZW9jb2RlcnRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmdlb2NvZGVydGFnO1xuICAgICAgdGhpcy5hY2Nlc3N0b2tlbl9zdHlsZXVybHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuX3N0eWxldXJsdGFnO1xuICB9XG5cbiAgLy8g44Oe44OD44OX44Gu5oOF5aCx6KGo56S6XG4gIHNob3dNYXBJbmZvcm1haXRvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsbmcnLCB0aGlzLmxuZyk7XG4gICAgICBjb25zb2xlLmxvZygnbGF0JywgdGhpcy5sYXQpO1xuICAgICAgY29uc29sZS5sb2coJ3pvb20nLCB0aGlzLnpvb20pO1xuICAgICAgY29uc29sZS5sb2coJ3BpdGNoJywgdGhpcy5waXRjaCk7XG4gICAgICBjb25zb2xlLmxvZygnYmVhcmluZycsIHRoaXMuYmVhcmluZyk7XG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCcsIHRoaXMuY29tbWVudCk7XG4gICAgICBjb25zb2xlLmxvZygnbWFwc2l6ZScsIHRoaXMubWFwc2l6ZSk7XG4gICAgICBjb25zb2xlLmxvZygnYWNjZXNzdG9rZW4nLCB0aGlzLmFjY2Vzc3Rva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzdHlsZXVybCcsIHRoaXMuc3R5bGV1cmwpO1xuICAgICAgY29uc29sZS5sb2coJ21hcHRhZycsIHRoaXMubWFwdGFnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3N0b2tlbl9zdHlsZXVybHRhZycsIHRoaXMuYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWcpO1xuICAgICAgY29uc29sZS5sb2coJ21hcHR5cGUnLCB0aGlzLm1hcHR5cGUpO1xuICB9XG5cbiAgLy8g44Kk44Oz44K544K/44Oz44K555Sf5oiQXG4gIGluc3RhbmNlTWV0aG9kKCkge1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFwKCk7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvblBvcHVwKCk7XG4gICAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwKTtcbiAgfVxuXG4gIC8vIOODnuODg+ODl+OBruOCpOODs+OCueOCv+ODs+OCueWMllxuICBpbnN0YW50aWF0aW9uTWFwKCkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgdGhpcy5tYXBib3hnbC5NYXAoe1xuICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXG4gICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGV1cmwsXG4gICAgICAgICAgLy/ln7rmnKznmoTjgarnlLvpnaLjga7liLblvqHjg5fjg63jg5Hjg4bjgqNcbiAgICAgICAgICBjZW50ZXI6IFt0aGlzLmxuZywgdGhpcy5sYXRdLFxuICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgICAgICBiZWFyaW5nOiB0aGlzLmJlYXJpbmcsXG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIOODnuODvOOCq+ODvOOBruOCpOODs+OCueOCv+ODs+OCueWMllxuICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgICAgLy8g44Oe44O844Kr44O844KS56uL44Gm44KLXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcmtlcih7XG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSlcbiAgICAgICAgICAuc2V0TG5nTGF0KHRoaXMubWFwLmdldENlbnRlcigpKVxuICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XG4gIH1cblxuICAvLyDjg53jg4Pjg5fjgqLjg4Pjg5fjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgaW5zdGFudGlhdGlvblBvcHVwKCkge1xuICAgICAgdGhpcy5wb3B1cCA9IG5ldyBtYXBib3hnbC5Qb3B1cCgpXG4gICAgICAgICAgLnNldEhUTUwodGhpcy5jb21tZW50KTtcbiAgICAgIHRoaXMubWFya2VyLnNldFBvcHVwKHRoaXMucG9wdXApXG4gIH1cblxuICAvLyDjg57jg4Pjg5fjga7ov73liqDmqZ/og71cbiAgYWRkRXh0ZW50aW9uVG9NYXAobWFwKSB7XG4gICAgICAvL+aLoeWkp+ODu+e4ruWwj+ODu+aWueS9jeODiuODk+OCsuODvOOCt+ODp+ODsyAgXG4gICAgICBtYXAuYWRkQ29udHJvbChuZXcgbWFwYm94Z2wuTmF2aWdhdGlvbkNvbnRyb2wsICd0b3AtbGVmdCcpO1xuICAgICAgLy/jg5Xjg6vjgrnjgq/jg6rjg7zjg7Pjg6Ljg7zjg4lcbiAgICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5GdWxsc2NyZWVuQ29udHJvbCk7XG4gICAgICAvL+OCueOCseODvOODq+ihqOekulxuICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLlNjYWxlQ29udHJvbCh7XG4gICAgICAgICAgbWF4V2lkdGg6IDgwLFxuICAgICAgICAgIHVuaXQ6ICdtZXRyaWMnXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyBodG1s44Gr5oyB44Gf44Gb44Gf44OH44O844K/5bGe5oCn44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gIHNldERlZmF1bHRWYWx1ZVRvRm9ybSgpIHtcbiAgICAgIHRoaXMuZm9ybWxuZ3RhZy52YWx1ZSA9IHRoaXMubG5nO1xuICAgICAgdGhpcy5mb3JtbGF0dGFnLnZhbHVlID0gdGhpcy5sYXQ7XG4gICAgICB0aGlzLmZvcm16b29tdGFnLnZhbHVlID0gdGhpcy56b29tO1xuICAgICAgdGhpcy5mb3JtcGl0Y2h0YWcudmFsdWUgPSB0aGlzLnBpdGNoO1xuICAgICAgdGhpcy5mb3JtYmVhcmluZ3RhZy52YWx1ZSA9IHRoaXMuYmVhcmluZztcbiAgfVxuXG4gIC8vIOWcsOWbs+OBruinkuW6puOCkuODleOCqeODvOODoOOBq+S7o+WFpVxuICBzZXRNYXBQaXRjaFRvRm9ybShtYXApIHtcbiAgICAgIG1hcC5vbigncGl0Y2gnLCAoZSkgPT4ge1xuICAgICAgICAgIC8vIOePvuWcqOOBrnBpdGNo44Os44OZ44Or5Y+W5b6XXG4gICAgICAgICAgdGhpcy5mb3JtcGl0Y2h0YWcudmFsdWUgPSBlLnRhcmdldC5nZXRQaXRjaCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyDlnLDlm7Pjga7lm57ou6LjgpLjg5Xjgqnjg7zjg6Djgavku6PlhaVcbiAgc2V0TWFwQmVhcmluZ1RvRm9ybShtYXApIHtcbiAgICAgIG1hcC5vbihcInJvdGF0ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybWJlYXJpbmd0YWcudmFsdWUgPSBlLnRhcmdldC5nZXRCZWFyaW5nKCk7XG4gICAgICB9KVxuICB9XG5cbiAgLy8g44Oe44OD44OX44KS44K644O844Og44GX44Gf6Zqb44Gu44Kk44OZ44Oz44OIXG4gIHNldE1hcFpvb21Ub0Zvcm0obWFwKSB7XG4gICAgICAvLyDjgrrjg7zjg6DjgqTjg5njg7Pjg4hcbiAgICAgIG1hcC5vbignem9vbScsICgpID0+IHtcbiAgICAgICAgICAvLyDnj77lnKjjga7jgrrjg7zjg6Djg6zjg5njg6vlj5blvpdcbiAgICAgICAgICB0aGlzLmZvcm16b29tdGFnLnZhbHVlID0gbWFwLmdldFpvb20oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8g44Oe44O844Kr44O844KS44OJ44Ot44OD44OX44GX44Gf6Zqb44Gu44Kk44OZ44Oz44OI6Kit5a6aXG4gIGdldE1hcmtlckRyb3BMb2NhdGlvbihtYXApIHtcbiAgICAgIC8vIOODnuODvOOCq+ODvOOCkuODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+ODnuODg+ODl+OCkuenu+WLlVxuICAgICAgdGhpcy5tYXJrZXIub24oJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgTG5nTGF0ID0gdGhpcy5tYXJrZXIuZ2V0TG5nTGF0KCk7XG4gICAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gTG5nTGF0LmxuZztcbiAgICAgICAgICB0aGlzLmZvcm1sYXR0YWcudmFsdWUgPSBMbmdMYXQubGF0O1xuICAgICAgICAgIG1hcC5mbHlUbyh7IGNlbnRlcjogW0xuZ0xhdC5sbmcsIExuZ0xhdC5sYXRdIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyDjg53jg4Pjg5fjgqLjg4Pjg5fjga7jgrPjg6Hjg7Pjg4jjgpLlpInmm7RcbiAgY2hhbmdlUG9wdXBDb21tZW50KCkge1xuICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JylcbiAgICAgIHRoaXMucG9wdXAuc2V0SFRNTChjb21tZW50LnZhbHVlKTtcbiAgfVxuXG4gIC8vIOODleOCqeODvOODoOOBq+WFpeWKm+OBl+OBn+OCs+ODoeODs+ODiOOCkuODneODg+ODl+OCouODg+ODl+OBq+WPjeaYoFxuICBhZGFwdEZvcm1Db21tZW50VG9Qb3B1cCgpIHtcbiAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgeyBwb3B1cDogdGhpcy5wb3B1cCwgaGFuZGxlRXZlbnQ6IHRoaXMuY2hhbmdlUG9wdXBDb21tZW50IH0pO1xuICB9XG5cbiAgLy8g44OV44Kp44O844Og44K/44Kw44Gr55u05o6l5pWw5YCk44KS5YWl5Yqb44GX44Gf6Zqb44Gr44Oe44OD44OX44Gu44Oe44O844Kr44O844Gu5L2N572u44KS56e75YuVXG4gIGFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIoKSB7XG4gICAgICB0aGlzLmZvcm1sbmd0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWFwLmZseVRvKHsgY2VudGVyOiBbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdIH0pO1xuICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmZvcm1sYXR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWFwLmZseVRvKHsgY2VudGVyOiBbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdIH0pO1xuICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICB9KVxuICB9XG59XG5cbi8vIOOCqOODs+ODiOODquODvOS9nOaIkOODu+WkieabtOeUu+mdouOBp+OBrk1hcGJveOODpuODi+ODg+ODiFxuY2xhc3MgVW5pdE1hcCBleHRlbmRzIE15bWFwIHtcbiAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIHRoaXMudW5pdGlkID0gbWFwSW5mb3JtYXRpb25PYmoudW5pdGlkO1xuICB9XG5cbiAgLy8g44Oe44OD44OX44Om44OL44OD44OI5L2c5oiQ5pmC44Gu44K544K/44Kk44Or44KS44K744OD44OIXG4gIHNldFVzZWRTdHlsZVVybCgpIHtcbiAgICAgIGNvbnN0IHNldHN0eWxldXJsID0gdGhpcy5tYXB0YWcuZGF0YXNldC5zZXRzdHlsZXVybDtcbiAgICAgIGlmIChzZXRzdHlsZXVybCAhPSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc3R5bGV1cmwgPSBzZXRzdHlsZXVybDtcbiAgICAgICAgICB0aGlzLmZvcm1zZXRzdHlsZXVybHRhZy52YWx1ZSA9IHNldHN0eWxldXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvcm1zZXRzdHlsZXVybHRhZy52YWx1ZSA9IHRoaXMuc3R5bGV1cmw7XG4gICAgICB9XG4gIH1cblxuICAvLyDjg57jg4Pjg5fjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgaW5zdGFudGlhdGlvbk1hcCgpIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IHRoaXMubWFwYm94Z2wuTWFwKHtcbiAgICAgICAgICBjb250YWluZXI6ICdtYXAnICsgdGhpcy51bml0aWQsXG4gICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGV1cmwsXG4gICAgICAgICAgLy/ln7rmnKznmoTjgarnlLvpnaLjga7liLblvqHjg5fjg63jg5Hjg4bjgqNcbiAgICAgICAgICBjZW50ZXI6IFt0aGlzLmxuZywgdGhpcy5sYXRdLFxuICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgICAgICBiZWFyaW5nOiB0aGlzLmJlYXJpbmcsXG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIOODleOCqeODvOODoOOBq+WFpeWKm+OBl+OBn+OCs+ODoeODs+ODiOOCkuODneODg+ODl+OCouODg+ODl+OBq+WPjeaYoFxuICBhZGFwdEZvcm1Db21tZW50VG9Qb3B1cCgpIHtcbiAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgeyBwb3B1cDogdGhpcy5wb3B1cCwgdW5pdGlkOiB0aGlzLnVuaXRpZCwgaGFuZGxlRXZlbnQ6IHRoaXMuY2hhbmdlUG9wdXBDb21tZW50IH0pO1xuICB9XG5cbiAgLy8g44Od44OD44OX44Ki44OD44OX44Gu44Kz44Oh44Oz44OI44KS5aSJ5pu0XG4gIGNoYW5nZVBvcHVwQ29tbWVudCgpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcgKyB0aGlzLnVuaXRpZClcbiAgICAgIHRoaXMucG9wdXAuc2V0SFRNTChjb21tZW50LnZhbHVlKTtcbiAgfVxufVxuXG4vLyDml6LlrZjjga5NYXBib3jjg6bjg4vjg4Pjg4jjgYzlrZjlnKjjgZnjgovloLTlkIjjgavjgqTjg7Pjgrnjgr/jg7PjgrnljJZcbmNsYXNzIFVuaXRFeHNpc3RlZE1hcCBleHRlbmRzIFVuaXRNYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopXG4gICAgICB0aGlzLmluc3RhbmNlTWV0aG9kKCk7XG4gIH1cblxuICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICAgIHRoaXMuc2V0VXNlZFN0eWxlVXJsKCk7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uUG9wdXAoKTtcbiAgICAgIHRoaXMuc2V0TWFwWm9vbVRvRm9ybSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2V0TWFwQmVhcmluZ1RvRm9ybSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwLCB0aGlzLnVuaXRpZCk7XG4gICAgICB0aGlzLmdldE1hcmtlckRyb3BMb2NhdGlvbih0aGlzLm1hcCk7XG4gICAgICB0aGlzLmFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIoKTtcbiAgICAgIHRoaXMuYWRhcHRGb3JtQ29tbWVudFRvUG9wdXAoKTtcbiAgfVxuXG59XG5cbi8vIE1hcGJveOODpuODi+ODg+ODiOOCkuaWsOimj+S9nOaIkOOBmeOCi+mam+OBq+OCpOODs+OCueOCv+ODs+OCueWMllxuY2xhc3MgVW5pdERlZmF1bHRNYXAgZXh0ZW5kcyBVbml0TWFwIHtcbiAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIHRoaXMubG5nID0gMTM1O1xuICAgICAgdGhpcy5sYXQgPSAzNTtcbiAgICAgIHRoaXMuem9vbSA9IDU7XG4gICAgICB0aGlzLnBpdGNoID0gMDtcbiAgICAgIHRoaXMuYmVhcmluZyA9IDA7XG4gICAgICB0aGlzLmluc3RhbmNlTWV0aG9kKClcbiAgfVxuXG4gIGluc3RhbmNlTWV0aG9kKCkge1xuICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWVUb0Zvcm0oKVxuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFwKCk7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvblBvcHVwKCk7XG4gICAgICB0aGlzLnNldE1hcFpvb21Ub0Zvcm0odGhpcy5tYXApO1xuICAgICAgdGhpcy5zZXRNYXBQaXRjaFRvRm9ybSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLnNldE1hcEJlYXJpbmdUb0Zvcm0odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGRFeHRlbnRpb25Ub01hcCh0aGlzLm1hcCwgdGhpcy51bml0aWQpO1xuICAgICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgICB0aGlzLmFkYXB0Rm9ybUNvbW1lbnRUb1BvcHVwKCk7XG4gIH1cblxufVxuXG5cbmNsYXNzIFNob3dVbml0TWFwIGV4dGVuZHMgVW5pdE1hcCB7XG4gIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICB0aGlzLmluc3RhbmNlTWV0aG9kKCk7XG4gIH1cblxuICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnnlJ/miJBcbiAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uUG9wdXAoKTtcbiAgICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXAsIHRoaXMudW5pdGlkKTtcbiAgfVxuXG4gIC8vIOODnuODvOOCq+ODvOOBruOCpOODs+OCueOCv+ODs+OCueWMllxuICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgICAgLy8g44Oe44O844Kr44O844KS56uL44Gm44KLXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcmtlcih7XG4gICAgICB9KVxuICAgICAgICAgIC5zZXRMbmdMYXQodGhpcy5tYXAuZ2V0Q2VudGVyKCkpXG4gICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcbiAgfVxuXG59XG5jbGFzcyBGaWVsZE1hcCBleHRlbmRzIE15bWFwIHtcblxufVxuXG5jbGFzcyBGaWVsZEV4c2lzdGVkTWFwIGV4dGVuZHMgRmllbGRNYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgdGhpcy5pbnN0YW5jZU1ldGhvZCgpO1xuICB9XG5cbiAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5zZXRNYXBab29tVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXApO1xuICAgICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2V0TWFwQmVhcmluZ1RvRm9ybSh0aGlzLm1hcCk7XG4gIH1cblxufVxuXG5jbGFzcyBGaWVsZERlZmF1bHRNYXAgZXh0ZW5kcyBGaWVsZE1hcCB7XG4gIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICB0aGlzLmxuZyA9IDEzNTtcbiAgICAgIHRoaXMubGF0ID0gMzU7XG4gICAgICB0aGlzLnpvb20gPSA1O1xuICAgICAgdGhpcy5waXRjaCA9IDA7XG4gICAgICB0aGlzLmJlYXJpbmcgPSAwO1xuICAgICAgdGhpcy5pbnN0YW5jZU1ldGhvZCgpO1xuICB9XG5cbiAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZVRvRm9ybSgpXG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5zZXRNYXBab29tVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXApO1xuICAgICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2V0TWFwQmVhcmluZ1RvRm9ybSh0aGlzLm1hcCk7XG4gIH1cblxufVxuXG5jbGFzcyBNYXBTaXplIHtcbiAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHRoaXMubWFwdGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwdGFnO1xuICAgICAgdGhpcy5tYXB3cmFwcGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwd3JhcHBlcnRhZztcbiAgICAgIHRoaXMubWFwc2l6ZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHNpemU7XG4gIH1cblxuICAvLyDnrqHnkIbnlLvpnaLjga7lnLDlm7Pjga7lpKfjgY3jgZXjgpLlpInmm7TmmYLjgavnrqHnkIbnlLvpnaLkuIrjga7lnLDlm7Pjga7lpKfjgY3jgZXjgavlj43mmKDjgZXjgZvjgotcbiAgc2VsZWN0TWFwd3JhcHBlcnRhZ1NpemUoKSB7XG4gICAgICBsZXQgc2l6ZXRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJyArIHRoaXMudW5pdGlkKTtcbiAgICAgIGxldCBxdWVyeW9wdGlvbnMgPSAnI3NpemUnICsgJyBvcHRpb24nO1xuICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5b3B0aW9ucyk7XG4gICAgICBsZXQgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hbGwnKTtcbiAgICAgIGxldCBiaWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnJyk7XG4gICAgICBzaXpldGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgIGxldCBpbmRleCA9IHNpemV0YWcuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpbmRleF0udmFsdWUgPT09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb1NtYWxsKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0JpZygpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlVG9TbWFsbCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzbWFsbCcpO1xuICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnXG4gICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xuICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLmhlaWdodCA9ICczMDBweCc7XG4gICAgICB0aGlzLm1hcHRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgICB0aGlzLm1hcHRhZy5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xuICB9XG5cbiAgY2hhbmdlVG9CaWcoKSB7XG4gICAgICBjb25zb2xlLmxvZygnYmlnJylcbiAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgfVxuXG4gIHNldE1hcHdyYXBwZXJ0YWdTaXplKCkge1xuICAgICAgaWYgKHRoaXMubWFwc2l6ZSA9PT0gJ2JpZycpIHtcbiAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgICAgICAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAgICAgICB0aGlzLm1hcHRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcHdyYXBwZXJ0YWcpXG4gICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnXG4gICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAgICAgICB0aGlzLm1hcHRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAgIH1cbiAgfVxuXG4gIHNldE1hcHdyYXBwZXJ0YWdNYXJnaW4oKSB7XG4gICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJhdXRvXCI7XG4gIH1cbn1cblxuY2xhc3MgTWFwRmllbGRTaXplIGV4dGVuZHMgTWFwU2l6ZSB7XG4gIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICB0aGlzLnVuaXRpZCA9IG1hcEluZm9ybWF0aW9uT2JqLnVuaXRpZDtcbiAgfVxuXG59XG5cbmNsYXNzIE1hcFVuaXRTaXplIGV4dGVuZHMgTWFwU2l6ZSB7XG4gIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICB0aGlzLnVuaXRpZCA9IG1hcEluZm9ybWF0aW9uT2JqLnVuaXRpZDtcbiAgICAgIHRoaXMuc2V0TWFwd3JhcHBlcnRhZ1NpemUoKTtcbiAgICAgIHRoaXMuc2V0TWFwd3JhcHBlcnRhZ01hcmdpbigpO1xuICB9XG5cbiAgLy8g566h55CG55S76Z2i44Gu5Zyw5Zuz44Gu5aSn44GN44GV44KS5aSJ5pu05pmC44Gr566h55CG55S76Z2i5LiK44Gu5Zyw5Zuz44Gu5aSn44GN44GV44Gr5Y+N5pig44GV44Gb44KLXG4gIHNlbGVjdE1hcHdyYXBwZXJ0YWdTaXplKCkge1xuICAgICAgY29uc3Qgc2l6ZXRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJyArIHRoaXMudW5pdGlkKTtcbiAgICAgIGNvbnN0IHF1ZXJ5b3B0aW9ucyA9ICcjc2l6ZScgKyB0aGlzLnVuaXRpZCArICcgb3B0aW9uJztcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5b3B0aW9ucyk7XG4gICAgICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbWFsbCcpO1xuICAgICAgY29uc3QgYmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZycpO1xuICAgICAgc2l6ZXRhZy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHNpemV0YWcuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpbmRleF0udmFsdWUgPT09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb1NtYWxsKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0JpZygpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgR2VvY29kZXIge1xuICBjb25zdHJ1Y3RvcihtYXBpbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXAgPSBtYXBpbnN0YW5jZS5tYXA7XG4gICAgICB0aGlzLm1hcGJveGdsID0gbWFwaW5zdGFuY2UubWFwYm94Z2w7XG4gICAgICB0aGlzLmFjY2Vzc3Rva2VuID0gbWFwaW5zdGFuY2UuYWNjZXNzdG9rZW47XG4gICAgICB0aGlzLmZvcm1sbmd0YWcgPSBtYXBpbnN0YW5jZS5mb3JtbG5ndGFnO1xuICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwaW5zdGFuY2UuZm9ybWxhdHRhZztcbiAgICAgIHRoaXMuZ2VvY29kZXJ0YWcgPSBtYXBpbnN0YW5jZS5nZW9jb2RlcnRhZztcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbkdlb29kZXIoKTtcbiAgICAgIHRoaXMuc2V0U3R5bGVHZW9jb2RlclRhZygpO1xuICAgICAgdGhpcy5zZXRTdHlsZUlucHV0KCk7XG4gICAgICB0aGlzLnNldExuZ0xhdFRvRm9ybSgpO1xuICB9XG5cbiAgLy8g5aC05omA5qSc57Si5qmf6IO944Gu6L+95YqgXG4gIGluc3RhbnRpYXRpb25HZW9vZGVyKG1hcGluc3RhbmNlKSB7XG4gICAgICAvLyAg5aC05omA5qSc57Si44OV44Kp44O844Og44KS6L+95YqgXG4gICAgICB0aGlzLmdlb2NvZGVyID0gbmV3IE1hcGJveEdlb2NvZGVyKHtcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3N0b2tlbixcbiAgICAgICAgICBtYXBib3hnbDogdGhpcy5tYXBib3hnbCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ+aknOe0oicsXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmdlb2NvZGVydGFnLmFwcGVuZENoaWxkKHRoaXMuZ2VvY29kZXIub25BZGQodGhpcy5tYXApKTtcbiAgfVxuXG4gIHNldFN0eWxlR2VvY29kZXJUYWcoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVydGFnLnN0eWxlLldpZHRoID0gJzEwMCUnO1xuICAgICAgdGhpcy5nZW9jb2RlcnRhZy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xuXG4gIH1cblxuICAvLyDmpJzntKLmqZ/og73jga7jg5Xjgqnjg7zjg6Djga7jg5Hjg4fjgqPjg7PjgrDoqr/mlbTvvIjjg4fjg5Xjgqnjg6vjg4jjgafjga/jgqLjgqTjgrPjg7Pjgajjg5Xjgqnjg7zjg6DjgYzph43jgarjgaPjgabjgYTjgovvvIlcbiAgc2V0U3R5bGVJbnB1dCgpIHtcbiAgICAgIGNvbnN0IG1hcGJveGdsX2N0cmxfZ2VvY29kZXJ0YWcgPSB0aGlzLmdlb2NvZGVydGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcGJveGdsLWN0cmwtZ2VvY29kZXInKVswXTtcbiAgICAgIG1hcGJveGdsX2N0cmxfZ2VvY29kZXJ0YWcuc3R5bGUubWluV2lkdGggPSAnMTAwJSc7XG4gICAgICBjb25zdCBnZW9jb2RlcmlucHV0dGFnID0gdGhpcy5nZW9jb2RlcnRhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXBib3hnbC1jdHJsLWdlb2NvZGVyLS1pbnB1dCcpWzBdO1xuICAgICAgZ2VvY29kZXJpbnB1dHRhZy5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMzVweFwiO1xuICAgICAgZ2VvY29kZXJpbnB1dHRhZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gIH1cblxuICAvLyDlnLDlm7Pjga7op5LluqbjgpLjg5Xjgqnjg7zjg6Djgavku6PlhaVcbiAgc2V0TG5nTGF0VG9Gb3JtKCkge1xuICAgICAgdGhpcy5nZW9jb2Rlci5vbigncmVzdWx0JywgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsbmdsYXQgPSBlLnJlc3VsdC5jZW50ZXI7XG4gICAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gbG5nbGF0WzBdO1xuICAgICAgICAgIHRoaXMuZm9ybWxhdHRhZy52YWx1ZSA9IGxuZ2xhdFsxXTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXRNYXAodW5pdGlkKSB7XG4gIGNvbnN0IG1hcEluZm9ybWF0aW9uT2JqID0ge1xuICAgICAgdW5pdGlkOiB1bml0aWQsXG4gICAgICBmb3JtbG5ndGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG5nJyArIHVuaXRpZCksXG4gICAgICBmb3JtbGF0dGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0JyArIHVuaXRpZCksXG4gICAgICBmb3Jtem9vbXRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvb20nICsgdW5pdGlkKSxcbiAgICAgIGZvcm1waXRjaHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpdGNoJyArIHVuaXRpZCksXG4gICAgICBmb3JtYmVhcmluZ3RhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlYXJpbmcnICsgdW5pdGlkKSxcbiAgICAgIGZvcm1zaXpldGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScgKyB1bml0aWQpLFxuICAgICAgZm9ybWNvbW1lbnR0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JyArIHVuaXRpZCksXG4gICAgICBmb3Jtc2V0c3R5bGV1cmx0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRzdHlsZXVybCcgKyB1bml0aWQpLFxuICAgICAgbWFwdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCksXG4gICAgICBtYXB3cmFwcGVydGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwd3JhcHBlcicgKyB1bml0aWQpLFxuICAgICAgZ2VvY29kZXJ0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9jb2RlcicgKyB1bml0aWQpLFxuICAgICAgYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLFxuICAgICAgbG5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCkuZGF0YXNldC5sbmcsXG4gICAgICBsYXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0LmxhdCxcbiAgICAgIHpvb206IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0Lnpvb20sXG4gICAgICBwaXRjaDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcgKyB1bml0aWQpLmRhdGFzZXQucGl0Y2gsXG4gICAgICBiZWFyaW5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCkuZGF0YXNldC5iZWFyaW5nLFxuICAgICAgc3R5bGV1cmw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLmRhdGFzZXQuc3R5bGV1cmwsXG4gICAgICBhY2Nlc3N0b2tlbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc3Rva2VuX3N0eWxldXJsJykuZGF0YXNldC5hY2Nlc3N0b2tlbixcbiAgICAgIGNvbW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0LmNvbW1lbnQsXG4gICAgICBtYXBzaXplOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCkuZGF0YXNldC5tYXBzaXplLFxuICAgICAgbWFwdHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcgKyB1bml0aWQpLmRhdGFzZXQubWFwdHlwZSxcbiAgfVxuICBpZiAobWFwSW5mb3JtYXRpb25PYmoubWFwdHlwZSA9PT0gJ3Nob3cnKSB7XG4gICAgICBjb25zb2xlLmxvZygndW5pdCBzaG93JylcbiAgICAgIGNvbnN0IG1hcHVuaXRzaXplID0gbmV3IE1hcFVuaXRTaXplKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgU2hvd1VuaXRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICB9IGVsc2UgaWYgKG1hcEluZm9ybWF0aW9uT2JqLmxuZyAhPSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coJ3VuaXQgZXhzaXN0ZWQnKVxuICAgICAgY29uc3QgbWFwdW5pdHNpemUgPSBuZXcgTWFwVW5pdFNpemUobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X21hcCA9IG5ldyBVbml0RXhzaXN0ZWRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3VuaXQgbmV3JylcbiAgICAgIGNvbnN0IG1hcHVuaXRzaXplID0gbmV3IE1hcFVuaXRTaXplKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgVW5pdERlZmF1bHRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRmllbGRNYXAodW5pdGlkKSB7XG4gIGNvbnN0IG1hcEluZm9ybWF0aW9uT2JqID0ge1xuICAgICAgZm9ybWxuZ3RhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xuZycpLFxuICAgICAgZm9ybWxhdHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdCcpLFxuICAgICAgZm9ybXpvb210YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJyksXG4gICAgICBmb3JtcGl0Y2h0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaXRjaCcpLFxuICAgICAgZm9ybWJlYXJpbmd0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWFyaW5nJyksXG4gICAgICBmb3Jtc2l6ZXRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKSxcbiAgICAgIGZvcm1jb21tZW50dGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpLFxuICAgICAgbWFwdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBtYXB3cmFwcGVydGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwd3JhcHBlcicpLFxuICAgICAgZ2VvY29kZXJ0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9jb2RlcicpLFxuICAgICAgYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLFxuICAgICAgbG5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykuZGF0YXNldC5sbmcsXG4gICAgICBsYXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5kYXRhc2V0LmxhdCxcbiAgICAgIHpvb206IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5kYXRhc2V0Lnpvb20sXG4gICAgICBwaXRjaDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLmRhdGFzZXQucGl0Y2gsXG4gICAgICBiZWFyaW5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykuZGF0YXNldC5iZWFyaW5nLFxuICAgICAgc3R5bGV1cmw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLmRhdGFzZXQuc3R5bGV1cmwsXG4gICAgICBhY2Nlc3N0b2tlbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc3Rva2VuX3N0eWxldXJsJykuZGF0YXNldC5hY2Nlc3N0b2tlbixcbiAgICAgIGNvbW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5kYXRhc2V0LmNvbW1lbnQsXG4gICAgICBtYXBzaXplOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykuZGF0YXNldC5tYXBzaXplLFxuICAgICAgbWFwdHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLmRhdGFzZXQubWFwdHlwZSxcbiAgfVxuICBzaG93TWFwSW5mb3JtYWl0b25PYmoobWFwSW5mb3JtYXRpb25PYmopXG4gIGlmIChtYXBJbmZvcm1hdGlvbk9iai5sbmcgIT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgRmllbGRFeHNpc3RlZE1hcChtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICBjb25zdCBtYXBib3hfZ2VvY29kZXIgPSBuZXcgR2VvY29kZXIobWFwYm94X21hcCk7XG4gICAgICBjb25zb2xlLmxvZygnZmllbGQgZXhzaXN0ZWQnKVxuICB9IGVsc2UgaWYgKG1hcEluZm9ybWF0aW9uT2JqLm1hcHR5cGUgPT09ICdmaWVsZCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCBuZXcnKVxuICAgICAgY29uc3QgbWFwYm94X21hcCA9IG5ldyBGaWVsZERlZmF1bHRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNYXBJbmZvcm1haXRvbk9iaihtYXBJbmZvcm1hdGlvbk9iaikge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpO1xuICBjb25zb2xlLmxvZyhtYXBJbmZvcm1hdGlvbk9iai5tYXB0eXBlLCAnbWFwdHlwZScpXG4gIGNvbnNvbGUubG9nKG1hcEluZm9ybWF0aW9uT2JqLm1hcHdyYXBwZXJ0YWcsICdtYXB3cmFwcGVydGFnJylcbiAgY29uc29sZS5sb2cobWFwSW5mb3JtYXRpb25PYmouZm9ybWxuZ3RhZywgJ2Zvcm1sbmd0YWcnKVxuICBjb25zb2xlLmxvZyhtYXBJbmZvcm1hdGlvbk9iai5mb3JtbGF0dGFnLCAnZm9ybWxhdHRhZycpXG4gIGNvbnNvbGUubG9nKG1hcEluZm9ybWF0aW9uT2JqLmZvcm1zaXpldGFnLCAnZm9ybXNpemV0YWcnKVxuICBjb25zb2xlLmxvZyhtYXBJbmZvcm1hdGlvbk9iai5mb3Jtem9vbXRhZywgJ2Zvcm16b29tdGFnJylcbiAgY29uc29sZS5sb2cobWFwSW5mb3JtYXRpb25PYmouYWNjZXNzdG9rZW4sICdhY2Nzc3Rva2VuJylcbn1cblxuY29uc29sZS5sb2coJ2pzIGxvYWRlZCcpXG5cbndpbmRvdy5jcmVhdGVVbml0TWFwID0gY3JlYXRlVW5pdE1hcDtcbndpbmRvdy5jcmVhdGVGaWVsZE1hcCA9IGNyZWF0ZUZpZWxkTWFwOyJdLCJzb3VyY2VSb290IjoiIn0=