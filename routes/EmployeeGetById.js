//..............................get shippers by id

var employeeD={
    
        EmployeeGetById :function(req,res,next)
        {
                 var id=req.params.id;
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL getEmployeeById(?)',[id],function(err,employeeData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(employeeData);
                    //  console.log(timeInMss);
                    res.send(employeeData);
            
           

                    });

                });
        }
    
    
    
    
    
}

module.exports = employeeD;