const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", function () {
    console.log("Successfully connected to game server!!!!");
    conn.write("Name: ZAK");
  });
  // setInterval(() => { conn.write('Move: up')}, 1000);
  // setInterval(() => { conn.write('Move: right')}, 2000);
  // setInterval(() => { conn.write('Move: down')}, 3000);
  // setInterval(() => { conn.write('Move: left')}, 4000);
  
  conn.on("data", function (message) {
    console.log('Server says:', message);
    
  });
  
  return conn;
};

module.exports = {connect};





