<?php
volumnes();
function volumnes(){
    if(isset($_POST['cubo'])){
    $ladoc=$_POST['lado'];
    $volumenc=$ladoc*3;
    echo"El volumen del cubo es: ".$volumenc;
    }
    if(isset($_POST['esfera'])){
        $radioe=$_POST['radio'];
        $volumene=4/3*3.141592*($radioe*$radioe*$radioe);
        echo"El volumen de la esfera es: ".$volumene;
        }
    if(isset($_POST['PRISMA'])){
            $a=$_POST['A'];
            $b=$_POST['B'];
            $c=$_POST['C'];
            $volumenp=$a*$b*$c; 
            echo"El volumen del  prisma es: ".$volumenp;
            }    
} 
?>