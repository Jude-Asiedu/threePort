import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Maps = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-2, -30],
        scale: 800
      }}
      style={{width:"100%",height:"100%"}}
    >
        {/* fill="#8dc9b6" */}
      <Geographies
        geography="/features.json"
        fill="#243a3f"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Paris"}
        </text>
      </Annotation>

      <Annotation
        subject={[-0.205744, 5.560014]}
        dx={-19}
        dy={90}
        connectorProps={{
          stroke: "#eadddd",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-9" textAnchor="end" alignmentBaseline="middle" fill="#e8e8e8">
          {"Accra"}
        </text>
      </Annotation>
    

    </ComposableMap>
  );
};

export default Maps;
