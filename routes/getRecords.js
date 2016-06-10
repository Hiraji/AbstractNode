module.exports = {
  getRecords: function(req, res) {
        var pg = require('pg');

        //You can run command "heroku config" to see what is Database URL from Heroku belt

        var conString = process.env.DATABASE_URL || "postgres://dowggepadcqdej:djS9n9yKoM1waUYRusvBbUF-Ay@ec2-50-19-219-148.compute-1.amazonaws.com:5432/de9j2qm2r0rvlu";
        var client = new pg.Client(conString);

        client.connect();

        var query = client.query("select * from breakfast");

        query.on("row", function (row, result) {
            result.addRow(row);
        });

        query.on("end", function (result) {
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();
        });
  },
}
