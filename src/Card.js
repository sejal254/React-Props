import React from "react";
export default function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
