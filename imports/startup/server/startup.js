import { Meteor } from 'meteor/meteor';
import '/imports/api/requirements/collections.js';

Meteor.startup(function(){
  // code to run on server at startup
  if (Requirements.find().count() == 0){
    	for (var i=1;i<23;i++){
    		Requirements.insert(
    			{
    				title: "Requirement #"+i,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus porttitor tempus. Ut feugiat sodales erat, eu sagittis lacus feugiat sit amet. In euismod malesuada mattis. Vestibulum ut lacinia turpis, id finibus lectus. Morbi enim ante, finibus ac porta id, cursus vel risus. Nam pharetra quam nibh, at ",
            createdOn: Date.now()
    			}
    		);
    	}// end of for insert images
  	// count the images!
  	console.log("startup.js says: "+Requirements.find().count());
  }// end of if have no images
});
