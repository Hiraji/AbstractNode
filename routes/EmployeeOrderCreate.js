//...................................get bi id suppliers create...........................*//

var OrderInsert={

        EmployeeOrderCreate :function(req,res,next)
        {
                 var EmpId=req.body.Employee_id;
                 var stat=req.body.Status;
                 var breakfast_id=req.body.Breakfast_id;

                 var dte = new Date(req.body.Date);

   var newdate = new Date(dte);
   console.log(newdate);

   newdate.setDate(newdate.getDate() + 1);

   var dd = newdate.getDate();
   var mm = newdate.getMonth() + 1;
   var y = newdate.getFullYear();

   var someFormattedDate = y + '/' + mm + '/' + dd;
//var someFormattedDate = new Date(someFormattedDate1);

  //  if(EmpId==55 || EmpId==81){
  //    newdate.setDate(newdate.getDate() );
   //
  //    var dd = newdate.getDate();
  //    var mm = newdate.getMonth() + 1;
  //    var y = newdate.getFullYear();
   //
  //    var someFormattedDate = y + '/' + mm + '/' + dd;
  //  }
  //  else {
  //    newdate.setDate(newdate.getDate() + 1);
   //
  //    var dd = newdate.getDate();
  //    var mm = newdate.getMonth() + 1;
  //    var y = newdate.getFullYear();
   //
  //    var someFormattedDate = y + '/' + mm + '/' + dd;
  //  }
                    console.log(someFormattedDate);

            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL addOrder(?,?,?,?)',[EmpId,someFormattedDate,stat,breakfast_id],function(err,orderCrData){


                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(orderCrData);
                    //  console.log(timeInMss);
                    res.send(orderCrData);



                    });

                });
        }




}

module.exports = OrderInsert;




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
