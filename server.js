const express = require('express');
const path = require('path');
const request = require('request');
const oracledb = require('oracledb');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/events', (req,res) => {
  oracledb.getConnection(
    {
      user          : "yourDatabaseUser",
      password      : "yourDatabasePwd",
      connectString : "connectionStringForYourOracleDB"
    },
    function(err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(
        `SELECT * FROM EVENTS`,
        [],
        {
          outFormat: oracledb.OBJECT
        }, // bind value for :id
        function(err, result) {
          if (err) {
            doRelease(connection);
            return;
          }
          console.log(result.rows);
          res.json(result.rows);
          doRelease(connection);
        });
    });

  function doRelease(connection) {
    connection.close(
      function(err) {
        if (err)
          console.error(err.message);
      }
    );
  }
});

app.get('/api/events/:id', (req, res) => {
  oracledb.getConnection(
    {
      user          : "yourDatabaseUser",
      password      : "yourDatabasePwd",
      connectString : "connectionStringForYourOracleDB"
    },
    function(err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(
        `SELECT * FROM EVENTS WHERE ID = :id`,
        [req.params.id],
        {
          outFormat: oracledb.OBJECT
        }, // bind value for :id
        function(err, result) {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          res.json(result.rows[0]);
          doRelease(connection);
        });
    });

  function doRelease(connection) {
    connection.close(
      function(err) {
        if (err)
          console.error(err.message);
      }
    );
  }
});

// We avoid port 3000 which is by default used by create-react-app
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));