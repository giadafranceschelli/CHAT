<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
    <title>Vem Sistemi - MyVem</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>

<div class="nav-bar">
    <div class="log">
        <img src="img/logowhite.svg">
    </div>
    <div class="home">
        <button type="button" class="btnhome"><h3>Monitoraggio</h3></button>
        <button type="button" class="btnhome"><h3>Helpdesk</h3></button>
        <button type="button" class="btnhome"><h3>Documentazione</h3></button>
        <button type="button" class="btnhome"><h3>Dashboard</h3></button>
    </div>
    <div class="icon">
        <!-- logged in user information -->
        <?php  if (isset($_SESSION['username'])) : ?>
            <a href="#"><img src="img/tool.png"></a>
            <a href="#"><img src="img/user.png"></a>
            <a href="index.php?logout='1'"><img src="img/power-button-off.png"></a>
        <?php endif ?>
    </div>
</div>
<div class="news">
    <ul>
        <li><a href="#">Ultime news</a></li>
        <li><a href="#">Impostazioni</a></li>
        <li><a href="#">Connettività negozi</a></li>
    </ul>
</div>
<div class="graficibody">
        <div class="graficosx">
            <label>Aggiornamenti odierni Net.Inventory</label>
            <div id="top_x_div" style="height: 265px;"></div>
        </div>
        <div class="graficodx">
            <label>Stato aggiornamento agent</label>
            <div id="top_x_div2" style="height: 265px;"></div>
        </div>
        <div class="graficosx">
            <label>Allarmi attivi</label>
            <div id="top_x_div3" style="height: 265px;"></div>
        </div>
        <div class="graficodx">
            <label>Stato assets</label>
            <div id="top_x_div4" style="height: 265px;"></div>
    </div>
</div>
<script src="grafico.js"></script>
</body>
</html>






   
