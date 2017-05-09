const Employee = require('../../employee/employeeController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										empRoute			   				 */
//=============================================================================
   Router.route('/addEmp').post(Employee.addEmp);
   Router.route('/signin').post(Employee.signin);
   Router.route('/getAllAplicantNumber').get(Employee.getAllAplicantNumber);
   	 


module.exports = Router


