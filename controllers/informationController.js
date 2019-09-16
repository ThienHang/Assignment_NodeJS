var mongoose = require("mongoose");
var Employee = require("../models/informations");

var InformationController = {};

// Show list of information
InformationController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/information/index", {employees: employees});
    }
  });
};

// Show information by id
InformationController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/information/show", {employee: employee});
    }
  });
};

// Create new information
InformationController.create = function(req, res) {
  res.render("../views/information/create");
};

// Save new information
InformationController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/information/create");
    } else {
      console.log("Successfully created an information.");
      res.redirect("/information/show/"+ employee._id);
    }
  });
};

// Edit an information
InformationController.edit = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/information/edit", {employee: employee});
      console.log("Successfully edit an information.");
    }
  });
};

// Update an information
InformationController.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, phone: req.body.phone, items: req.body.items, price:req.body.price }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/information/edit", {employee: req.body});
    }
    res.redirect("/information/show/"+ employee._id);
    console.log("Successfully update an information.");
  });
};

// Delete an information
InformationController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("information deleted!");
      res.redirect("/information");
    }
  });
};

module.exports = InformationController;
