var express = require('express');
var router  =  express.Router();


//For get routers files call
/*get all records*/

var EmployeeGetAll= require('./EmployeeGetAll.js');
var BreakfastGetAll=require('./BreakfastGetAll.js');
var SampleGetAll=require('./SampleGetAll.js');

/*get all records by id*/
var EmployeeGetById= require('./EmployeeGetById.js');

/*get EmloyeeNotify By ID*/
var EmployeeGetNotifyById= require('./EmployeeGetNotifyById.js');

/* get Employee order */
var EmployeeGetOrderByDate= require('./EmployeeGetOrderByDate.js');

/*Insert new record*/
var EmployeeCreate= require('./EmployeeCreate.js');

/*Insert employee attendance */
var EmployeeAttendanceplace= require('./EmployeeAttendanceplace.js');


/*Update by id*/
var EmployeeUpdate= require('./EmployeeUpdate.js');

/*Insert Employee Login*/
var EmployeeLoginCreate= require('./EmployeeLoginCreate.js');
var EmployeeOrderCreate= require('./EmployeeOrderCreate.js');
var getRecords= require('./getRecords.js');


/*
 * Routes that can be accessed by any one
 */
/*router.post('/login', auth.login);*/




/*Access get routes from here*/

/*get all records*/
router.get('/api/EmployeeGetAll',EmployeeGetAll.EmployeeGetAll);
router.get('/api/BreakfastGetAll',BreakfastGetAll.BreakfastGetAll);
router.get('/api/SampleGetAll',SampleGetAll.SampleGetAll);

/*get all records by id*/
 router.get('/api/EmployeeGetById/:id',EmployeeGetById.EmployeeGetById);

 /*get notify Employee By ID*/
  router.get('/api/EmployeeGetNotifyById/:id',EmployeeGetNotifyById.EmployeeGetNotifyById);





/*get employee order*/
 router.get('/api/EmployeeGetOrderByDate',EmployeeGetOrderByDate.EmployeeGetOrderByDate);
/*Insert new record*/
router.post('/api/EmployeeCreate',EmployeeCreate.EmployeeCreate);


/*Insert new record of login*/
router.post('/api/EmployeeLoginCreate',EmployeeLoginCreate.EmployeeLoginCreate);
router.post('/api/EmployeeOrderCreate',EmployeeOrderCreate.EmployeeOrderCreate);
/* insert employee attendance */
 router.post('/api/EmployeeAttendanceplace',EmployeeAttendanceplace.EmployeeAttendanceplace);



/*Update by id*/
router.post('/api/EmployeeUpdate',EmployeeUpdate.EmployeeUpdate);

router.get('/api/getRecords',getRecords.getRecords);








/*Access post routes from here*/
/*router.post('/api/BuyNow',BuyNowD.postBuyNow);
router.post('/api/customerDetails',customerDetailsD.postCustomerD);
router.post('/api/orderBefore',orderBeforeD.postOrderB);
router.post('/api/orderAfter',orderAfterD.postOrderA);
router.post('/api/SendMailPost',sendMailD.postsendMail);*/

module.exports = router;
