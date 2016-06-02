

var BreakSample=
    {
        SampleGetAll : function(req,res,next)
        {
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL getSampleList()',function(err,sample_d) {


            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }

                    var  sampleData=JSON.stringify(sample_d);

                    var epr=JSON.parse(sampleData);
                    console.log(epr);



                     res.send(sample_d);

                    //res.json(spr);

                });

            });
        }
    }

//module.exports.router = router;
module.exports = BreakSample;
