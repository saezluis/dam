<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="stylesheet" href="css/animate.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
    <script src="js/wow.js"></script>
    <title></title>
  </head>
  <body>
	<?php
		
		
	?>
    <div class="billete-top-left"><img src="img/billete-top-left.png" alt=""/></div>
    <div class="billete-bottom-left"><img src="img/billete-bottom-left.png" alt=""/></div>
    <div class="billete-top-right"><img src="img/billete-top-right.png" alt=""/></div>
    <div class="billete-bottom-right"><img src="img/billete-bottom-right.png" alt=""/></div>
    <header class="menu_top">
      <div class="ed-container">
        <div class="ed-item base-50 web-20">
          <div class="menu__top__logo-luchetti"><img src="img/logo-luchetti.png" alt="Tresmontes Luchetti"/></div>
        </div>
        <div class="ed-item base-50 web-80 no-padding">
			<?php
				include "menu.php";
			?>
        </div>
      </div>
    </header>
    <section class="ciclon">
      <div class="ed-container">
        <article class="interior ed-item base-100 tablet-100 web-50 hd-50 full-50"><img src="img/just_logo.png" alt="El Spaguetton Millonario"/>
			<form method="post" action="ciclon2.php">
				<p class="sepeque">AHORA, SOLO TE FALTA PROBAR SUERTE</p>
				<button type="submit" value="¡A JUGAR!" class="moveCiclon">¡PARTICIPAR!</button>
			</form>	
        </article>
        <article class="ed-item base-100 tablet-100 web-50 hd-50 full-50">
          <div class="ed-item base-100 web-100">
            <div class="ciclon"><img src="img/gift-card.png" />
              <div class="bille-left"><img src="img/billetes-left.png" alt=""/></div>
              <div class="bille-right"><img src="img/billetes-right.png" alt=""/></div>
              <div class="billeFlotados"><img src="img/billeflotados.png" alt=""/></div>
              <div class="billeFlotados2"><img src="img/billeflotados.png" alt=""/></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </body>
</html>