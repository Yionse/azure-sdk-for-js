// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file hooks up the "Send" and "Receive" buttons on the web page to the
 * "sendEvents.js" and "receiveEvents.js" samples.
 */
// process无法再浏览器中被使用，虽然这里的js未使用，但可能其依赖的某些package会使用process，导致无法在浏览器运行成功
const { send } = require("./sendEvents");
const { receive } = require("./receiveEvents");

const sendElement = document.getElementById("send");
const receiveElement = document.getElementById("receive");

sendElement.addEventListener("click", () => {
  send();
});

receiveElement.addEventListener("click", () => {
  receive();
});
