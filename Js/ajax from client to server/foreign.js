


function getSingleRequests_db(id,callback)
{
  getSingleRecord('requestController',id,function(request){
    callback(request) ;
  });

}

function addRequest_db(data,callback)
{
  addRecord('requestController',data,function(request){
    callback(request) ;
  });

}

function updateRequest_db(request,callback){
        updateRecord('requestController',request,function(){
              callback();
          })
}


function deleteRequest_db(id,idm,callback){
      var r = confirm("Delete Request ?!");
    if (r == true) {
       deleteRecord('requestController',id,idm,function(data){
          callback(data);
     });
    } else {

    }

}

function getAllRequests_db(callback)
{
  getAllRecords('requestController',function(request){
    callback(request) ;
  });

}
//----------------------------------------------------------------------
function getPrivacy_db(callback)
{
  getAllRecords('privacyController',function(privacy){
    callback(privacy) ;
  });

}


function getSinglePrivacy_db(id,callback)
{
  getSingleRecord('privacyController',id,function(privacy){
    callback(privacy) ;
  });

}

function getId_db(username,callback)
{
  getSingleRecord('loginController',username,function(id){
    callback(id) ;
  });

}


function addPrivacy_db(data,callback)
{
        addRecord('privacyController',data,function(privacy){
              callback(privacy) ;
  });
}


function updatePrivacy_db(privacy,callback){
        updateRecord('privacyController',privacy,function(){
              callback();
          })
}
//--------------------------------------------------

function logIn_db(data,callback){
     log('loginController',data,function(log){
           callback(log);
     })
}


function signUp_db(data,callback){
	addRecord('loginController',data,function(data){
	console.log("added successfuly") ;
  callback();
})

}

function deleteUser_db(id,idm,callback){
  var r = confirm("Delete User ?!");
if (r == true) {
   deleteRecord('loginController',id,idm,function(data){
      console.log("success delete client") ;
        callback(data);
 });
} else {

}
}


function getAllUsers_db(callback){
	getAllRecords('loginController',function(members){
			callback(members);


	});
}
//---------------------------------------------------------------

function addFamily_db(data,callback){
  addRecord('familyController',data,function(data){
    callback();
  })
}


function updateFamily_db(family,callback){
        updateRecord('familyController',family,function(){
              callback();
          })
}


function getFamilyById_db(id ,callback){
     getSingleRecord('familyController',id,function(family){
            callback(family);
     });
}


function deleteFamily_db(id,idm,callback){
      var r = confirm("Delete FAmily ?!");
    if (r == true) {
       deleteRecord('familyController',id,idm,function(data){
          callback(data);
     });
    } else {

    }

}
//-----------------------------------------------------------------
function getAllMembers_db(callback){
	getAllRecords('memberController',function(members){
			callback(members);


	});
}

function getMembersById_db(id ,callback){
     getSingleRecord('memberController',id,function(member){
            callback(member);
     });
}

function addMember_db(data,callback){
	addRecord('memberController',data,function(data){
    callback();
})

}

function updateMember_db(member,callback){
        updateRecord('memberController',member,function(){
              callback();
          })

}

function deleteMember_db(id,idm,callback){
      var r = confirm("Delete Member ?!");
    if (r == true) {
       deleteRecord('memberController',id,idm,function(data){
          console.log("success delete client") ;
          getAllMembers();
     });
    } else {

    }

}



//---------------------------------------------------------

function getAllhobbyType_db(callback){

getAllRecords('hobbyTypeController',function(data){
callback(data);
});
}


function getAllActType_db(callback){

getAllRecords('activityTypeController',function(data){
callback(data);
});
}


function getActivityById_db(id,callback){

getSingleRecord('activityController',id,function(data){
callback(data);
});
}

function getHobbyById_db(id,callback){

getSingleRecord('hobbyController',id,function(data){
callback(data);
});
}

function addActivity_db(data,callback){
	addRecord('actSummaryController',data,function(data){
    callback();
})

}

function addHobby_db(data,callback){
	addRecord('hobbySummaryController',data,function(data){
    callback();
})

}

function getSingleHobby_db(id,callback){

getSingleRecord('hobbySummaryController',id,function(data){
callback(data);
});
}



function getSingleActivity_db(id,callback){

getSingleRecord('actSummaryController',id,function(data){
callback(data);
});
}


function deleteActivity_db(id,idm,callback){
      var r = confirm("Delete Activity ?!");
    if (r == true) {
       deleteRecord('actSummaryController',id,idm,function(data){
          callback(data);
     });
    } else {

    }

}



function deleteHobby_db(id,idm,callback){
      var r = confirm("Delete Hobby ?!");
    if (r == true) {
       deleteRecord('hobbySummaryController',id,idm,function(data){
          callback(data);
     });
    } else {

    }

}


//---------------------------------------------------

function getAllBranches_db(callback){

getAllRecords('branchController',function(data){
callback(data);
});
}


function getAllSchools_db(callback){
getAllRecords('schoolController',function(data){
callback(data);
});
}


function getAllGrades_db(callback){
getAllRecords('gradeController',function(data){
callback(data);
});
}


function getAllTypes_db(callback){
getAllRecords('typeController',function(data){
callback(data);
}) ;
}
