import React from "react";

const Details = (props) => {
  return (
    <div className="detailsCont">
      {props.mapdata.id === "" ? (
        <p>Please Click on any location to get the details.</p>
      ) : (
        <>
          <h1>Details</h1>
          <p>
            <b>ID:</b> {props.mapdata.id}
          </p>
          <p>
            <b>Region:</b> {props.mapdata.region}
          </p>
          <p>
            <b>Data:</b> {props.mapdata.data}
          </p>
          <p>
            <b>Longitute:</b> {props.mapdata.lng}
          </p>
          <p>
            <b>Latitute:</b> {props.mapdata.lat}
          </p>
        </>
      )}
      <div className="colordetail">
        <p>Color Shows Data Range</p>
        <div className="detail">
          <div className="color1"></div>
          <p>Less then 300</p>
        </div>
        <div className="detail">
          <div className="color2"></div>
          <p>300 to 600</p>
        </div>
        <div className="detail">
          <div className="color3"></div>
          <p>Greater then 600</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
