//...................................get bi id suppliers create...........................*//

var EmployeeLoginInsert={
    
        EmployeeLoginCreate :function(req,res,next)
        {
                 var id=req.body.id;
                 var pass=req.body.pass;
                 
                
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL addEmployeeLogin(?,?)',[id,pass],function(err,employeeloginCrData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(employeeloginCrData);
                    //  console.log(timeInMss);
                    res.send(employeeloginCrData);
            
           

                    });

                });
        }
    

    
    
}

module.exports = EmployeeLoginInsert;




/*var SuppliersD={
    
        suppliersGetById :function(req,res,next)
        {
                 var SupplierID=req.params.SupplierID;
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL SuppliersGetById(?)',[SupplierID],function(err,supplierData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(supplierData);
                    //  console.log(timeInMss);
                    res.send(supplierData);
            
           

                    });

                });
        }
    
    
    
    
    
}

module.exports = SuppliersD;*/