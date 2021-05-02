import React from 'react';
import './Map.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './util';

function Map({ countries, center, casesType, zoom }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                {/* Url from leaflet site */}
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Loop through and draw circles on map */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map;
