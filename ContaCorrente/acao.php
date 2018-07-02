<?php
	header("Content-Type: application/json; charset=utf8");
	$a = isset($_GET["a"]) ? $_GET["a"] : 0;
	$b = isset($_GET["b"]) ? $_GET["b"] : 0;
	$saldo = 0;
	$saldo = $saldo - $a;
	$saldo = $saldo + $b;
	
	
?>
{
	"a": <?php echo $a; ?>,
	"b": <?php echo $b; ?>,
	"saldo": <?php echo $saldo; ?>
	
}