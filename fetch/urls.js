
// const baseUrl = "http://127.0.0.1:5000";
const baseUrl = "http://10.200.200.2:5000";

export const sensorOne = () => `${baseUrl}/sensor`;
export const lastImage = () => `${baseUrl}/image`;

const baseUrlLocal = "http://noll.no-ip.info:32147";
// const baseUrlLocal = "http://localhost:3000";

export const sensorOneLocal = () => `${baseUrlLocal}/api/sensor`;
export const lastImageLocal = () => `${baseUrlLocal}/api/image`;
