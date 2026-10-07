const deviceEvent = {
  deviceId: "smart-device-001",
  temperature: 24,
  humidity: 55,
  motion: false,
  timestamp: new Date().toISOString()
};

console.log(JSON.stringify(deviceEvent, null, 2));
