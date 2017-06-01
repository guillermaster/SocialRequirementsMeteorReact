import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

//export const Tasks = new Mongo.Collection('tasks');
Requirements = new Mongo.Collection("requirements");

// set up security on Requirements collection
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

Meteor.methods({
  'requirements.insert'(title, content) {
    check(title, String);
    check(content, String);

    // Make sure the user is logged in before inserting a task
    // if(!Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Requirements.insert({
      title: title,
      content: content,
      createdOn: new Date(),
      createdBy: 'guillermo',
      //createdBy: Meteor.user().username,
      //createdById: Meteor.userId(),
      likes: 0,
      dislikes: 0
    });
  },

  // 'tasks.remove'(taskId) {
  //   check(taskId, String);
  //   Tasks.remove(taskId);
  // },

  'requirements.getList'(limitNum) {
    return Requirements.find({}, {sort:{createdOn: -1}, limit:limitNum});
  }

  // 'tasks.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked }});
  // }
})
