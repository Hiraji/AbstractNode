//...................................get bi id suppliers Update...........................*//

var EmployeeUpd={
    
        EmployeeUpdate :function(req,res,next)
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
       
                var query = conn.query('CALL updateEmployeeInfo(?,?,?,?,?,?,?,?,?,?)',[EmpId,EmpName,MobNo,CurrentAddress,PermanentAddress,BloodGroup,EmergencyContNo,EmailId,latitude,logitude],function(err,employeeUpData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(employeeUpData);
                    //  console.log(timeInMss);
                    res.send(employeeUpData);
            
           

                    });

                });
        }
     
}

module.exports = EmployeeUpd;
