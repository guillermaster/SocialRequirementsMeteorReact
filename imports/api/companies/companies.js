import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

//export const Tasks = new Mongo.Collection('tasks');
Companies = new Mongo.Collection("companies");

// set up security on Companies collection
Companies.allow({

	// we need to be able to update requirements
	update:function(companyId, company){
		console.log("testing company update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update
			return false;
		}
	},

	insert:function(userId, company){
		console.log("company insert");
		if (Meteor.user()){// they are logged in
			if (userId != company.createdBy){// the user is messing about
				return false;
			}
			else {// the user is logged in, the image has the correct user id
				return true;
			}
		}
		else {// user not logged in
			return false;
		}
	},

	remove:function(userId, company){
    console.log("testing company remove");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them remove
			return false;
		}
	}
})

Meteor.methods({
  'companies.insert'(name, phone, address, city, state, postalcode, country) {
    //check(title, String);
    //check(content, String);

    // Make sure the user is logged in before inserting a task
    // if(!Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Companies.insert({
      name: name,
      phone: phone,
			address: address,
			city: city,
			state: state,
			postalCode: postalcode,
			country: country,
      createdOn: new Date(),
      createdBy: 'guillermo',
      modifiedOn: new Date(),
      //modifiedBy: Meteor.userId(),
    });
  },


  'companies.getAll'() {
    return Requirements.find({});
  }
})
