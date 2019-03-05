<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Vem Sistemi - MyVem</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="pre-header">
	<img src="img/logo.png">
</div>	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
		<p class="titolo">Accedi all'area <strong>myvem</strong></p>
		<div class="input-group">
  		<input type="text" name="username" placeholder="Nome Utente">
  	</div>
  	<div class="input-group">
  		<input type="password" name="password" placeholder="Password">
		</div>
		<a class="passw" href="#"><u>password dimenticata?</u></a><br><br>
  	<div class="input-group-btn">
  		<button type="submit" class="btn" name="login_user">ENTRA</button>
  	</div>
	</form><br><br>
<div class="intro">
	<p>	<strong style="color: #0091ff;">myvem</strong>  è lo strumento <strong style="color: #0091ff;">IT Infrastructure Monitoring (ITIM) as a service (SaaS)</strong> , <br>
	creato da VEM sistemi per tenere sotto controllo e documentare lo stato di salute delle <br>
	infrastrutture ICT, IoT, Facility e Data Center</p>
</div>
<div class="footer">
	<br><p>©  VEM Sistemi S.p.A. | Tutti i diritti riservati.<br>
	<span>Sede legale: via Degli Scavi 36, Forlì (FC) Italia - Capitale sociale € 500.000 i.v. - Iscr. Reg. Imp, C.F. e P. IVA 01803850401 - R.E.A. FC 217998 - 
		<a class="privacy" href="https://myvem.com/privacy.asp"> Privacy </a>
	</span>
	</p><br>
</div>
</body>
</html>