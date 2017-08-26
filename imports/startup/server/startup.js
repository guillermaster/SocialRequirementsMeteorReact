import { Meteor } from 'meteor/meteor';
import '/imports/api/requirements/requirements.js';
import '/imports/api/companies/companies.js';

Meteor.startup(function(){
  // code to run on server at startup
  InsertMockUpCompanies();
  InsertMockUpRequirements();
});

function InsertMockUpCompanies(){
  Companies.remove({});
  //if(Companies.find().count() == 0){
    Companies.insert(
      {
        name: 'Ignite',
        phone: '12222312312',
        address: 'South Street',
  			city: 'Manchester',
        state: 'Great Manchester',
  			postalCode: '9580',
  			country: 'United Kingdom',
        createdOn: new Date(),
        createdBy: 'guillermo',
        modifiedOn: new Date()
      }
    );
    Companies.insert(
      {
        name: 'Facebook',
        phone: '12222312312',
        address: 'South Street',
  			city: 'Palo Alto',
        state: 'California',
  			postalCode: '9580',
  			country: 'United States',
        createdOn: new Date(),
        createdBy: 'guillermo',
        modifiedOn: new Date()
      }
    );
  //}
}

function InsertMockUpRequirements(){
  if (Requirements.find().count() == 0){
    	for (var i=1;i<23;i++){
        let status = i%3==0? "draft" : "approved";
    		Requirements.insert(
    			{
    				title: "Requirement #"+i,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus porttitor tempus. Ut feugiat sodales erat, eu sagittis lacus feugiat sit amet. In euismod malesuada mattis. Vestibulum ut lacinia turpis, id finibus lectus. Morbi enim ante, finibus ac porta id, cursus vel risus. Nam pharetra quam nibh, at ",
            createdOn: Date.now(),
            createdBy: "guillermaster@gmail.com",
            status: status
    			}
    		);
    	}// end of for insert requirements
  	// count the requirements!
  	//console.log("startup.js says: "+Requirements.find().count());
  }
}
