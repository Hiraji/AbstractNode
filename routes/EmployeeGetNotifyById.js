//..............................get shippers by id

var orderDatanotify={

        EmployeeGetNotifyById :function(req,res,next)
        {
                 var id=req.params.id;

            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL getBreakfastNotification(?)',[id],function(err,OrderData){


                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(OrderData);
                    //  console.log(timeInMss);
                    res.send(OrderData);



                    });

                });
        }





}

module.exports = orderDatanotify;
