import { Mongo } from 'meteor/mongo';

// this is image_share.js
Requirements = new Mongo.Collection("requirements");

// set up security on Images collection
Requirements.allow({

	// we need to be able to update requirements
	update:function(userId, req){
		console.log("testing update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update
			return false;
		}
	},

	insert:function(userId, req){
		console.log("testing insert");
		if (Meteor.user()){// they are logged in
			if (userId != doc.createdBy){// the user is messing about
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

	remove:function(userId, req){
    console.log("testing remove");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them remove
			return false;
		}
	}
})
