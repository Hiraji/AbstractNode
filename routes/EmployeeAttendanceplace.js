
var empattendanceinsert={

        EmployeeAttendanceplace :function(req,res,next)
        {
                 var EmpId=req.body.EmpId;
                 var intime=req.body.InTime;


                 var tdate = req.body.Date;


            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL placeEmployeeAttendance(?,?,?)',[EmpId,intime,tdate],function(err,attendancecreate){


                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(attendancecreate);
                    //  console.log(timeInMss);
                    res.send(attendancecreate);



                    });

                });
        }




}

module.exports = empattendanceinsert;
