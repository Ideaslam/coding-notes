<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'DataAccessLayer/DataAccessLayer.php';



class memberBusinessLayer{

   private $member;

    function __construct() {

       $this->member =new Member() ;


    }



    public function getAll()
    {

        $DAL =new DataAccessLayer('includes/vars.php') ;
        $DAL->connect();
        $select =$DAL->executeCommand('getAllMemebers') ;
        $DAL->close();
        if(!$select)
        {
          echo "Wrong no data";
        }else
        {
           $arr=array() ;
          if(count($select)> 0){
            while($obj = mysqli_fetch_object($select))
            {
                $obj->l_password='';
                $arr[] =$obj;
            }
          }
        }
        return $arr ;
    }


    public function getSingle($id)
      {

        $DAL =new DataAccessLayer('includes/vars.php') ;
        $DAL->connect();
        $select =$DAL->addData('`getSingleMember`',$id) ;
        $DAL->close();
      //  echo $select;
      if(!$select)
      {
        echo "Wrong no data";
      }else
      {
         $arr=array() ;
        if(count($select)> 0){
          while($obj = mysqli_fetch_object($select))
          {
              $obj->l_password='';
              $arr[] =$obj;
          }
        }
      }
      return $arr ;
      }



    public function Add($member)
    {
    //  echo $member ;
        $DAL = new DataAccessLayer('includes/vars.php');
        $DAL->connect();
        $select =$DAL->addData('addPersonal',$member) ;
        $DAL->close();

        if(!$select)
        {
          echo 'Wrong no data';
        }
        else{
          return $select ;
           }

    }

    public function Edit($member)
    {
        $DAL = new DataAccessLayer('includes/vars.php');
        $DAL->connect();
        $DAL->close();

    }


    public function Update($member)
    {
        $DAL = new DataAccessLayer('includes/vars.php');
        $DAL->connect();
        $select =$DAL->addData('updatePersonal',$member) ;
        $DAL->close();

        if(!$select)
        {
        echo 'Wrong no data';
        }
        else{
          return $select ;
           }

    }











}
