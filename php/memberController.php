<?php

include 'models/memberBusinessLayer.php';
include 'includes/Member.php';

    $username;
    $password;
    $output='';


    switch ($_POST['method'])
    {
        case 'login' :
            login();
            break;
        case 'getAll':
          $mem=  getAll();
          echo json_encode($mem);
            break;
        case 'add':
          $member=  add() ;
          echo json_encode($member);
            break;
            case 'getSingle':
            $member=  getSingle();
            echo json_encode($member[0]);
              break;
              case 'update':
                $member=update();
                echo json_encode($member);
                break;

        default :
            break;


    }



    function getAll(){
    $member_Layer = new memberBusinessLayer();
    $members = $member_Layer->getAll();
    return $members ;

     }


     function add()
     {


        $data =json_decode($_POST["rec"]) ;



 $arr=[];
 $arr[0]=$data->s_conId ;
 $arr[1]=$data->s_firstName ;
 $arr[2]=$data->s_secName ;
 $arr[3]=$data->s_surName ;
 $arr[4]=$data->s_type     ;
 $arr[5]=$data->s_birth ;
 $arr[6]=$data->s_school  ;
 $arr[7]=$data->s_grade    ;
 $arr[8]=$data->s_pMobile  ;
 $arr[9]=$data->s_pMobile2  ;
 $arr[10]=$data->s_hNumber   ;
 $arr[11]=$data->s_address   ;
 $arr[12]=$data->s_reason   ;
 $arr[13]=$data->s_joinDate  ;
 $arr[14]=$data->s_branch   ;
 $arr[15]=$data->s_image     ;
 $arr[16]=$data->s_email    ;
 $arr[17]=$data->s_gender ;
 $arr[18]=$data->s_admin ;
 $arr[19]=$data->s_vision ;



      $sdata=  edit_input($arr);

       $member_Layer = new memberBusinessLayer();
       $members = $member_Layer->add($sdata);
       if($members != false){
          return true;
       }else {
         # code...
       }


     }


     function edit_input($arr)
     {
       $str='' ;
     foreach ($arr as $value) {
         $str =$str . "'".$value ."'," ;
     }
     $n =strrpos($str,',');
     $val =substr($str,0,$n);
     return $val;

     }



     function getSingle(){
                $id= $_POST['id'];
                $member_Layer = new memberBusinessLayer();
                $members= $member_Layer->getSingle($id);
                return $members ;
     }




     function update(){
                 $data =json_decode($_POST["rec"]) ;

                 $arr=[];
                 $arr[0]=$data->s_conId ;
                 $arr[1]=$data->s_firstName ;
                 $arr[2]=$data->s_secName ;
                 $arr[3]=$data->s_surName ;
                 $arr[4]=$data->s_type     ;
                 $arr[5]=$data->s_birth ;
                 $arr[6]=$data->s_school  ;
                 $arr[7]=$data->s_grade    ;
                 $arr[8]=$data->s_pMobile  ;
                 $arr[9]=$data->s_pMobile2  ;
                 $arr[10]=$data->s_hNumber   ;
                 $arr[11]=$data->s_address   ;
                 $arr[12]=$data->s_reason   ;
                 $arr[13]=$data->s_joinDate  ;
                 $arr[14]=$data->s_branch   ;
                 $arr[15]=$data->s_email    ;
                 $arr[16]=$data->s_gender ;
                 $arr[17]=$data->s_admin ;
                 $arr[18]=$data->s_vision ;

                 $sdata= edit_input($arr);
                 $member_Layer = new memberBusinessLayer();
                 $members= $member_Layer->update($sdata);
                 return $members ;


     }





     /*

     function edit_input($arr)
     {
       $str='' ;
     foreach ($arr as $value) {
       if(is_numeric($value) && $value.lenght >5){
         $str =$str.$value ."," ;
       }else{
         $str =$str . "'".$value ."'," ;
       }

     }
     $n =strrpos($str,',');
     $val =substr($str,0,$n);
     return $val;

     }


     */
