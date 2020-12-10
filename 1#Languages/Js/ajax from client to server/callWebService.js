function callws(webServiceName, data, callback){
    $.ajax({
        url: `../../../scout/app/${webServiceName}`,
        type: 'POST',
        dataType: 'json',
        data: data,

        success: function(data){
          console.log("success");
          callback(data);
        },
        error:function(){
           console.log("error");
         }


    });
}


function addRecord(webS,data,callback){
    var d ={method:'add', rec:JSON.stringify(data)};
    callws(webS+'.php',d,function(data){
      if(data == false){
callback(false);
      }else{
        callback(data);
      }
    })
}


function deleteRecord(webS,id,idm,callback){
    var d= {method:'delete',id:id,idm:idm} ;
    callws(webS+'.php',d, function(data){
      if(data == false){
callback(false);
      }else{
        callback(data);
      }

});
}


function updateRecord(webS,data,callback){
    var d={method:'update',rec:JSON.stringify(data)} ;
    callws(webS+'.php',d, function(data){
      if(data == false){
callback(false);
      }else{
        callback(data);
      }
});
}


function getAllRecords(webS,callback){
     console.log("get all records");
    callws(webS+'.php',{method:'getAll'},function(data){
      if(data == false){
callback(false);
      }else{
        callback(data);
      }
});
}


function getSingleRecord(webS,id,callback){
     callws(webS+'.php',{method:'getSingle', id:id},function(data){
       if(data == false){
         callback(false);
       }else{
         callback(data);
       }
    });
}



function log(webS,data,callback){
       var d={method:'login',rec:JSON.stringify(data)} ;
       callws(webS+'.php',d,function(data){
         if(data == false){
            callback(false);
         }else{
           callback(data);
         }
    });
}
