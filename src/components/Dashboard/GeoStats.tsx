import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

interface MapBlipsProps {
  data: { coordinate: [number, number]; status: string }[];
}

const GeoStatsComponent: React.FC<MapBlipsProps> = ({ data }) => {
  return (


    <ComposableMap className="bg-slate-100 py-10 hover:shadow-lg">
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {data.map((blip) => {
        return <Marker coordinates={blip.coordinate} key={blip.coordinate.toString()}>
          <circle r={4} fill={blip.status === "OK" ? "#00FF00" : "#FF0000"} />
        </Marker>
      })}
    </ComposableMap>

  );
};

export default GeoStatsComponent;