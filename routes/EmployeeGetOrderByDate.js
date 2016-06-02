//..............................get shippers by id

var employeeorder={

        EmployeeGetOrderByDate:function(req,res,next)
        {
                 var tdate=req.params.tdate;

            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL getemployeeOrderDetails()',function(err,employeeOrder){


                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(employeeOrder);
                    //  console.log(timeInMss);
                    res.send(employeeOrder);



                    });

                });
        }





}

module.exports = employeeorder;
