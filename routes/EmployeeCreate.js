//...................................get bi id suppliers create...........................*//

var EmployeeInsert={
    
        EmployeeCreate :function(req,res,next)
        {
                 var EmpId=req.body.id;
                 var EmpName=req.body.name;
                 var MobNo=req.body.mobno;
                 var CurrentAddress=req.body.curadd;
                 var PermanentAddress=req.body.peradd;
                 var BloodGroup=req.body.bloodgroup;
                 var EmergencyContNo=req.body.emergcontno;
                 var EmailId=req.body.emailid;
                  var latitude=req.body.lat;
               var logitude=req.body.log;
                
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL addEmployee(?,?,?,?,?,?,?,?,?,?)',[EmpId,EmpName,MobNo,CurrentAddress,PermanentAddress,BloodGroup,EmergencyContNo,EmailId,latitude,logitude],function(err,employeeCrData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(employeeCrData);
                    //  console.log(timeInMss);
                    res.send(employeeCrData);
            
           

                    });

                });
        }
    

    
    
}

module.exports = EmployeeInsert;




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