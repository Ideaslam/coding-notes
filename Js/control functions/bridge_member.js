




function checkValid(){}




//-------------------------------------
function receive_data(rec){ // get from html
  switch (rec) {
    case 'login':
      return receive_log();
      break;
      case 'signup':
      return  receive_up();
        break;
    default:

  }
}


function retrive_data(){ // put in htnl



}
//-----------------------------------------
function add(add,data){ // add() -- add_personal([receive_data([receive_personal()])]) -- add_db() -- return -> show([show_add_response()])


switch (add) {
  case 'privacy-one':
    addPrivacy_db(data,function(privacy){

    });

    break;

    case 'member':
      receive_personal(function(member){
        if(!member){
          alert("error");
        }else {
              addMember_db(member,function(){
              attention('add-personal');
              directionGo('','add-family.html');
          });
        }
    })
      break;

      case 'family':
        receive_father(function(father){
          addFamily_db(father,function(){
            receive_mother(function(mother){
              addFamily_db(mother,function(){
                receive_brother(function(brother){
                  addFamily_db(brother,function(){
                    attention('add-family');
                      directionGo('','add-hobby.html');
                  })
                });
              })
            });
          })
        });

        break;

        case 'activity':
           receive_activity(function(activity){
             addActivity_db(activity,function(){
               attention('add-activity');
                 directionGo('','add-hobby.html');
             });
          });
          break;

          case 'hobby':
                receive_hobby(function(hobby){
                    addHobby_db(hobby,function(){
                      attention('add-hobby');
                      directionGo('','home.html');
                    });
                });
            break;
            case 'request':

            receive_req(function(request){
                addRequest_db(request,function(req){
                  attention('add-request');
                  directionGo('','requests.html');
                });
            });
              break;
  default:

}

}
function edit(edit,data){


switch (edit) {
  case 'personal':
    update_modal1(function(personal){
      updateMember_db(personal,function(){
        directionGo('','show-personal.html');

      });
    });
    break;
    case 'family':
    update_modal2(data,function(family){
      updateFamily_db(family,function(){
      directionGo('','show-family.html');
      });
    })

      case 'all-request-approve':
      var req = sessionStorage.getItem('request');
      req= JSON.parse(req);
      console.log(req);
      receive_reqUpdate(req,1,function(request){
        updateRequest_db(request,function(){
          receive_privacyUpdate(req,function(privacy){
            updatePrivacy_db(privacy,function(){
                directionGo('','allrequests.html');
            });
          });
        });
      });

  break;
  case 'all-request-reject':
  var req = sessionStorage.getItem('request');
  req= JSON.parse(req);
  console.log(req);
  receive_reqUpdate(req,-1,function(request){
    updateRequest_db(request,function(){
      receive_privacyUpdate(req,function(privacy){
        updatePrivacy_db(privacy,function(){
            directionGo('','allrequests.html');
        });
      });
    });
  });

break;
  default:

  break;

}

}
function delete_rec(del ,id,idm){
switch (del) {
  case 'family':
    deleteFamily_db(id,'',function(){
      directionGo('','show-family.html');

    });
    break;
    case 'activity':
    deleteActivity_db(id,idm,function(){
      directionGo('','show-activity.html');

    });
      break;

      case 'hobby':
      deleteHobby_db(id,idm,function(){
        directionGo('','show-hobby.html');

      });
        break;
        case 'user':
        deleteUser_db(id,'',function(){
          directionGo('','database.html');
        });
          break;
          case 'request':
          deleteRequest_db(id,'',function(){
            directionGo('','requests.html');
          });
            break;
  default:

}

}
function get(get,id,callback){

  switch (get) {
    case 'privacy-all':
     getPrivacy_db(function(data){
         callback(data);
     });
      break;

      case 'privacy-one':
      getSinglePrivacy_db(id,function(data){
        callback(data);
      });
        break;
        case 'member-all':
          getAllMembers_db(function(members){
            callback(members);
          });
          break;

          case 'personal':
          getMembersById_db(id,function(personal){
            callback(personal);
          });
            break;
            case 'family':
            getFamilyById_db(id,function(family){
              callback(family);
            });
              break;

              case 'activity':
              getSingleActivity_db(id,function(activity){
                callback(activity);
              });
                break;
                case 'hobby':
                getSingleHobby_db(id,function(hobby){
                  callback(hobby);
                });
                  break;
                  case 'idUser':
                    getId_db(id,function(data){
                      callback(data);
                    });
                    break;
                    case 'users':
                      getAllUsers_db(function(users){
                        callback(users);
                      })
                      break;
                      case 'request':
                      getSingleRequests_db(id,function(request){
                        callback(request);
                      })

                        break;
                        case 'all-request':
                        getAllRequests_db(function(request){
                          callback(request);
                        })
                          break;
    default:

  }
}

function show(where){ // retrive_data([retvrive_()])
switch (where) {
      case 'members':
      get('member-all','',function(members){
      displayMembers(members);
      });
      break;
      case 'personal':
      var id = sessionStorage.getItem('id_m');
      get('personal',id,function(personal){
        var p =JSON.stringify(personal);
        sessionStorage.setItem('personal',p);
        displayPersonal(personal);
      });
      break;
      case 'family':
      var id = sessionStorage.getItem('id_m');
      get('family',id,function(family){
      displayFamily(family);
    });
      break;
      case 'activity':
      var id = sessionStorage.getItem('id_m');
      get('activity',id,function(members){
        displayActivity(members);
      });
      break;
      case 'hobby':
      var id = sessionStorage.getItem('id_m');
      get('hobby',id,function(members){
        displayHobby(members);
      });
          break;
          case 'request':
          var id = sessionStorage.getItem('id');
          get('request',id,function(request){
            displayRequests(request);
          });
            break;
            case 'all-request':
            get('all-request','',function(request){
              displayRequestsAdmin(request);
            });
              break;
  default:
}
}


function login(callback){
 var data= receive_data('login');
 logIn_db(data,function(log){
  if(log != false){
    storing('user',data.l_username);
    storing('log',1);
    storing('id',log);
    privacy('get',log,function(){
    directionGo('pages/','home.html');

    }) ;

  }else {
    callback();
  }
});

}


function logout(){
  storing('log',0);
  storing('id',0);
  storing('id_m',0);
  storing('modal2',0);
  storing('personal',0);

  directionGo('../','index.html');
}


function signup(callback){
var data =receive_data('signup');
checkSignup(data,function(){

  delete  data.l_passconf ;
  var signup ;
  signUp_db(data,function(){

    get('idUser',data.l_username,function(id){
        privacy('post',id.l_id);
        callback();
          });
    });





});

}


function checkSignup(data,callback){
  if(checkconIdCount(data) && checkUserCount(data) && checkPasswordcount(data) && checkPassword(data))
  {
    checkconId(data,function(value1){
      if(value1){
        checkUsername(data,function(value2){
           if(value2){
            callback() ;
           }else{
               attention("username-exist");
           }
       });
    }else{
      console.log(value1);
      attention("conid-exist");
    }

  });
  }
  else if(!checkPassword(data)){
    attention("password-confirm");
  }
  else if(!checkPasswordcount(data)){
    attention("password-count");
  }

  else if(!checkUserCount(data)){
    attention("username-count");
  }

  else if(!checkconIdCount(data)){
    attention("conid-count");
  }
}


function checkPassword(obj){

if(obj.l_password == obj.l_passconf) return true;
    else return false ;
}
function checkPasswordcount(obj){
  if(obj.l_password.length >=8) return true ;
    else return false ;
}
function checkUserCount(obj){
  if(obj.l_username.length >=4)return true ;
  else return false ;
}

function checkconIdCount(obj){
  if(obj.l_idc.length == 14)return true ;
  else return false ;
}

function checkUsername(obj,callback){

      get('users','',function(users){
            var v= false ;
        for(var i=0 ;i<users.length ;i++){
            if(users[i].l_username == obj.l_username){
              v =false;
            }else {
              v=true;
            }
          }
          if(v){
            callback(true);
          }else{
            callback(false);
          }

      });

  }

  function checkconId(obj,callback){
var v= false ;
        get('users','',function(users){
          for(var i=0 ;i<users.length ;i++){
              if(users[i].l_idc == obj.l_idc){
                  v=false ;
              }else {
                  v=true ;
              }
            }
            if(v){
              callback(true);
            }else{
              callback(false);
            }
        });

    }



//----------------------------------------------------
function privacy(p,data,callback){ //---- get([get_privacy([stroing()])])

switch (p) {
  case 'getAll':
 var privacy= get('privacy-all');
  privacy_store(privacy);
    break;
    case 'get':
  var privacy=get('privacy-one',data,function(privacy){
     privacy_store(privacy);
     callback();
  });
      break;
    case 'post':
  var privacy=  receive_privacy('none',data) ;
    add('privacy-one',privacy);
      break;
  default:

}


}
//----------------------------------------------------
function privacy_store(privacy){
       var p= JSON.stringify(privacy);
       storing('privacy',p) ;
}

function privacy_retrive(){
      var p= retriving('privacy');
      var privacy= JSON.parse(p);
      return privacy ;
}
//----------------------------------------------
function storing(key ,value){
  sessionStorage.setItem(key,value);
}

function retriving(key){
  return sessionStorage.getItem(key);
}
//-----------------------------------------------
function attention(a){

switch (a) {
      case "login_password" :
          alert("Wrong username or password");
      break;

      case "signup" :
          alert("Sign up successfuly");
          alert("Please Login");
                break;

        case 'add-personal':
        alert("added personal infomation successfuly");

          break;

          case 'add-family':
            alert("added family information successfuly");
            break;
            case 'add-activity':
              alert("added Activity information successfuly");
              break;

              case 'add-hobby':
                alert("added Hobby information successfuly");
                break;

                case "password-confirm"  :
                     alert('Enter the same password');
                  break;

                case 'password-count':
                alert("password should be more than 8 letters");
                  break;

                  case 'username-count':
                  alert("username should be more than 4 letters");
                    break;

                    case 'username-exist':
                    alert("username Exist before");
                      break;

                      case 'conid-exist':
                      alert("Personal Id  Exist before");
                        break;

                    case 'conid-count':
                    alert("Personal Id  should be 14 Numbers");
                      break;
                      case 'add-request':
                      alert("Request Sended");
                        break;
  default:

   }
}






function directionGo(folders,link)
{
  window.location.href =  folders+link ;
}


function check_log(content,callback)
{
  var log = retriving('log');
if(log != 1)
{
$(content).hide();
alert("login Please");
directionGo('../','index.html');
}else{
  callback();

}

}

function check_privacy(pro,callback){
  var p=  privacy_retrive();

switch (pro) {
  case 'add':
  if(p.p_add == 0 ||  p.p_add==-1)
  {
    callback(false);
  }else {
    callback(true);
  }
    break;
    case 'show':
     if(p.p_show == 0 ||p.p_show == -1)
     {
       callback(false);
     }else {
       callback(true);
     }
      break;
      case 'delete':
      if(p.p_delete == 0 || p.p_delete == -1 )
      {
        callback(false);
      }else {
        callback(true);
      }

        break;

        case 'edit':
        if(p.p_edit == 0 || p.p_edit ==-1)
        {
          callback(false);
        }else {
          callback(true);
        }

          break;
          case 'admin':
          if(p.p_admin == 0 || p.p_admin ==-1)
          {
            callback(false);
          }else {
            callback(true);
          }

            break;
  default:

    }
}



function showUsername(){
var user =sessionStorage.getItem('user');
console.log(user);
document.getElementById('user').innerHTML = user ;
}
