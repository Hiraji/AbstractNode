//......................................get all from shippers table............................................/


var employee=
    {
        EmployeeGetAll : function(req,res,next)
        {
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL getAllEmployee()',function(err,employee_D) {

                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  employeeData=JSON.stringify(employee_D);
          
                    var epr=JSON.parse(employeeData);
                    console.log(epr);
                    
                    
                    
                     res.send(employee_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = employee;