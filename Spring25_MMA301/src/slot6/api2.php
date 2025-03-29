<?php
$s="localhost";$u="root";$p="";$db="a0";//khai bao chuoi ket noi csdl
$conn = new mysqli($s,$u,$p,$db);//ket noi vou csdl
$result=$conn->query("select * from mytable");//truy van du lieu
while($row[]=$result->fetch_assoc()){//doc tung dong du lieu
    $json=json_encode($row);//chuyen sang json
}
echo '{"products":'.$json.'}';
$conn->close();