
export class Mymap {
    constructor(mapInformationObj) {
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
        this.formlngtag = mapInformationObj.formlngtag
        this.formlattag = mapInformationObj.formlattag;
        this.formzoomtag = mapInformationObj.formzoomtag;
        this.formpitchtag = mapInformationObj.formpitchtag;
        this.formbearingtag = mapInformationObj.formbearingtag;
        this.formsizetag = mapInformationObj.formsizetag;
        this.formcommenttag = mapInformationObj.formcommenttag;
        this.formsetstyleurltag = mapInformationObj.formsetstyleurltag;
        this.maptag = mapInformationObj.maptag;
        this.mapwrappertag = mapInformationObj.maptagwrapper;
        this.geocodertag = mapInformationObj.geocodertag;
        this.accesstoken_styleurltag = mapInformationObj.accesstoken_styleurltag;
    }


    // インスタンス生成
    instanceMethod() {
        this.instantiationMap();
        this.instantiationMarker();
        this.instantiationPopup();
        this.addExtentionToMap(this.map);
    }

    // マップのインスタンス化
    instantiationMap() {
        this.map = new this.mapboxgl.Map({
            container: 'map',
            style: this.styleurl,
            //基本的な画面の制御プロパティ
            center: [this.lng, this.lat],
            zoom: this.zoom,
            pitch: this.pitch,
            bearing: this.bearing,
        });
    }

    // マーカーのインスタンス化
    instantiationMarker() {
        // マーカーを立てる
        this.marker = new this.mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat(this.map.getCenter())
            .addTo(this.map);
    }

    // ポップアップのインスタンス化
    instantiationPopup() {
        this.popup = new mapboxgl.Popup()
            .setHTML(this.comment);
        this.marker.setPopup(this.popup)
    }

    // マップの追加機能
    addExtentionToMap(map) {
        //拡大・縮小・方位ナビゲーション  
        map.addControl(new mapboxgl.NavigationControl, 'top-left');
        //フルスクリーンモード
        map.addControl(new mapboxgl.FullscreenControl);
        //スケール表示
        map.addControl(new mapboxgl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        }));
    }

    // htmlに持たせたデータ属性をフォームに代入
    setDefaultValueToForm() {
        this.formlngtag.value = this.lng;
        this.formlattag.value = this.lat;
        this.formzoomtag.value = this.zoom;
        this.formpitchtag.value = this.pitch;
        this.formbearingtag.value = this.bearing;
    }

    // 地図の角度をフォームに代入
    setMapPitchToForm(map) {
        map.on('pitch', (e) => {
            // 現在のpitchレベル取得
            this.formpitchtag.value = e.target.getPitch();
        });
    }

    // 地図の回転をフォームに代入
    setMapBearingToForm(map) {
        map.on("rotate", (e) => {
            this.formbearingtag.value = e.target.getBearing();
        })
    }

    // マップをズームした際のイベント
    setMapZoomToForm(map) {
        // ズームイベント
        map.on('zoom', () => {
            // 現在のズームレベル取得
            this.formzoomtag.value = map.getZoom();
        });
    }

    // マーカーをドロップした際のイベント設定
    getMarkerDropLocation(map) {
        // マーカーをドロップした位置にマップを移動
        this.marker.on('dragend', () => {
            const LngLat = this.marker.getLngLat();
            this.formlngtag.value = LngLat.lng;
            this.formlattag.value = LngLat.lat;
            map.flyTo({ center: [LngLat.lng, LngLat.lat] });
        });
    }

    // ポップアップのコメントを変更
    changePopupComment() {
        const comment = document.getElementById('comment')
        this.popup.setHTML(comment.value);
    }

    // フォームに入力したコメントをポップアップに反映
    adaptFormCommentToPopup() {
        this.formcommenttag.addEventListener('change', { popup: this.popup, handleEvent: this.changePopupComment });
    }

    // フォームタグに直接数値を入力した際にマップのマーカーの位置を移動
    adaptFormLocationToMarker() {
        this.formlngtag.addEventListener('change', () => {
            this.map.flyTo({ center: [this.formlngtag.value, this.formlattag.value] });
            this.marker.setLngLat([this.formlngtag.value, this.formlattag.value]).addTo(this.map);
        })
        this.formlattag.addEventListener('change', () => {
            this.map.flyTo({ center: [this.formlngtag.value, this.formlattag.value] });
            this.marker.setLngLat([this.formlngtag.value, this.formlattag.value]).addTo(this.map);
        })
    }
}


export class MapSize {
    constructor(mapInformationObj) {
        this.maptag = mapInformationObj.maptag;
        this.mapwrappertag = mapInformationObj.mapwrappertag;
        this.mapsize = mapInformationObj.mapsize;
    }

    setMapwrappertagSize() {
        if (this.mapsize === 'big') {
            this.mapwrappertag.style.maxWidth = '100%'
            this.mapwrappertag.style.width = '820px';
            this.mapwrappertag.style.height = '320px';
            this.maptag.style.width = '820px';
            this.maptag.style.height = '320px';
        } else {
            this.mapwrappertag.style.maxWidth = '100%'
            this.mapwrappertag.style.width = '400px';
            this.mapwrappertag.style.height = '300px';
            this.maptag.style.width = '400px';
            this.maptag.style.height = '300px';
        }
    }

    setMapwrappertagMargin() {
        this.mapwrappertag.style.marginLeft = "auto";
        this.mapwrappertag.style.marginRight = "auto";
    }
}

//   Mapbox検索機能のクラス
export class Geocoder {
    constructor(mapinstance) {
        this.map = mapinstance.map;
        this.marker = mapinstance.marker;
        this.mapboxgl = mapinstance.mapboxgl;
        this.accesstoken = mapinstance.accesstoken;
        this.formlngtag = mapinstance.formlngtag;
        this.formlattag = mapinstance.formlattag;
        this.geocodertag = mapinstance.geocodertag;
        this.instantiationGeooder();
        this.setStyleGeocoderTag();
        this.setStyleInput();
        this.setLngLatToForm();
        this.setMarkerToLngLat();
    }

    // 場所検索機能の追加
    instantiationGeooder(mapinstance) {
        //  場所検索フォームを追加
        this.geocoder = new MapboxGeocoder({
            accessToken: this.accesstoken,
            mapboxgl: this.mapboxgl,
            marker: false,
            placeholder: '検索',
        })

        this.geocodertag.appendChild(this.geocoder.onAdd(this.map));
    }

    //   検索ボックスのスタイル変更
    setStyleGeocoderTag() {
        this.geocodertag.style.Width = '100%';
        this.geocodertag.style.marginTop = "5px";

    }

    // 検索機能のフォームのパディング調整（デフォルトではアイコンとフォームが重なっている）
    setStyleInput() {
        const mapboxgl_ctrl_geocodertag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder')[0];
        mapboxgl_ctrl_geocodertag.style.minWidth = '100%';
        const geocoderinputtag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0];
        geocoderinputtag.style.paddingLeft = "35px";
        geocoderinputtag.style.width = "100%";

    }

    // 地図の角度をフォームに代入
    setLngLatToForm() {
        this.geocoder.on('result', (e) => {
            const lnglat = e.result.center;
            this.formlngtag.value = lnglat[0];
            this.formlattag.value = lnglat[1];
        });
    }

    // 検索結果の位置にマーカーを移動
    setMarkerToLngLat() {
        this.geocoder.on('result', (e) => {
            const lnglat = e.result.center;
            // this.map.flyTo({ center: [lnglat[0], lnglat[1]] });
            this.marker.setLngLat([lnglat[0], lnglat[1]])
                .addTo(this.map);

        })
    }

}
