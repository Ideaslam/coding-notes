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
class Common {

    private $host ;
    private $database ;
    private $user ;
    private $password;
    private $conn;
    private $serverName ;


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
        $this->serverName =$serverName;
       // echo '<br>'. $database;


    }










    public function  connect()
    {
// echo 'Current PHP version: ' . phpversion();

        $connectionInfo = array( "Database"=>"family", "UID"=>"sa", "PWD"=>"05510551");
          
            //connect to the server
          $this->conn = sqlsrv_connect( "ISLAMHAA\ISLAM", $connectionInfo);  
        if (!$this->conn) {
            die( print_r( sqlsrv_errors(), true));
            echo 'false' ;
        } else {
           // echo "<br> connected successfuly";
        }




/*
        $serverName = "ISLAMHAA\ISLAM"; //serverName\instanceName
$connectionInfo = array( "Database"=>"family", "UID"=>"sa", "PWD"=>"05510551");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}

*/
    }


    public function  close ()
    {
        sqlsrv_close($this->conn) ;
    }



/*
    public function executeCommand($proc){
      $select = sqlsrv_query($this->conn,"CALL ".$proc."()");
      return $select;
    }
*/
    public function executeCommand($query){

      $select = sqlsrv_query($this->conn,$query);
      return $select;
    }

    public function  addData($proc ,$data){
    //  echo "CALL ".$proc."(".$data.")";
        $select = sqlsrv_query($this->conn,"CALL ".$proc."(".$data.")");
        return $select;
    }


}
