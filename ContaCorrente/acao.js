$(document).ready(function () {
	console.log("pagina pronta");

	$('#btn-somar').click(function (evento) {
		console.log(evento);

		evento.preventDefault();

		var a = $('#num-a').val(), 
			saldo = $('#num-saldo').val(),
			b = $('#num-b').val();

		console.log(a);
		console.log(saldo);
		console.log(b);

		$.ajax({
			url: 'acao.php',
			method: 'GET',
			data: {
				'a': a,
				'saldo': saldo,
				'b' : b
			},
			success: function (resultado) {
				console.log(resultado);

				$('#a').html(resultado.a);
				$('#saldo').html(resultado.saldo);
				$('#b').html(resultado.b);
				
			}
		});

		return false;
	});



});