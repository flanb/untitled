export function deviceMotionPermission(listener) {
  return new Promise((resolve, reject) => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            addEventListener("devicemotion", listener, true);
            resolve("granted");
          }
        })
        .catch(reject);
    } else {
      if (navigator.userAgent.indexOf("Mobile") === -1) {
        reject("Not a mobile device");
      }
      addEventListener("devicemotion", listener, true);
      resolve("granted");
    }
  });
}

export function deviceOrientationPermission(listener) {
  return new Promise((resolve, reject) => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            addEventListener("deviceorientation", listener, true);
            resolve("granted");
          }
        })
        .catch(reject);
    } else {
      if (navigator.userAgent.indexOf("Mobile") === -1) {
        reject("Not a mobile device");
      }
      addEventListener("deviceorientation", listener, true);
      resolve("granted");
    }
  });
}
