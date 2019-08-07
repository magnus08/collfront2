import React from 'react';
import {CollLayout} from '../components/CollLayout';
import fetch from 'isomorphic-unfetch';
import {sensorOne} from '../fetch/urls';

const Sensor = () => (
  <div>
    <CollLayout>
      <p>About here</p>
    </CollLayout>
  </div>
);

Sensor.getInitialProps = async function() {
  const res = await fetch(sensorOne());
  console.log("Res: ", res);
  const data = await res.json();
  console.log("data: ", data);
  return {data: "hello"};
};

export default Sensor;
