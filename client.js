const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port:  "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", function () {
    console.log("Successfully connected to game server!!!!");
  });
  
  conn.on('connect', () => {
    conn.write("Name: ZAK");
  });

  conn.on("data", function (message) {
    console.log('server sent:', message);
    
  });

  return conn;
};

module.exports = connect;



