<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of database
 *
 * @author islam
 */
class DataAccessLayer {

    private $host ;
    private $database ;
    private $user ;
    private $password;
    private $conn;


    function __construct($filename){

        if (is_file($filename)) {
            include $filename;
        } else {
            throw new Exception("Error!");
        }

        $this->host = $host ;
        $this->user =$user ;
        $this->password =$password;
        $this->database =$database ;
       // echo '<br>'. $database;


    }


    public function  connect()
    {
            //connect to the server
            $this->conn = mysqli_connect($this->host, $this->user , $this->password , $this->database);
        if (!$this->conn) {
           // die("<br> Connection failed: " . mysqli_connect_error());
        } else {
           // echo "<br> connected successfuly";
        }

    }


    public function  close ()
    {
        mysqli_close($this->conn) ;
    }




    public function executeCommand($proc){
      $select = mysqli_query($this->conn,"CALL ".$proc."()");
      return $select;
    }

    public function  addData($proc ,$data){
    //  echo "CALL ".$proc."(".$data.")";
        $select = mysqli_query($this->conn,"CALL ".$proc."(".$data.")");
        return $select;
    }


}
