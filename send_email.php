<?php
	
	if(isset($_POST['submit'])) 
	{

		$message=
		'Nuevo booking.<br /><br />
		 Datos personales:<br />
		 Nombre:	'.$_POST['f_name'].'<br />
		 Apellido:	'.$_POST['l_name'].'<br />
		 Email:		'.$_POST['email'].'<br />
		 Empresa:	'.$_POST['company_name'].'<br />
		 Pais:		'.$_POST['country_name'].'<br />
		 Tel:		'.$_POST['tel'].'<br />
		 Notas:		'.$_POST['notices'].'<br /><br />
		 Info del booking:<br />
		 Check-in: '.$_POST['check_in'].'<br />
		 Check-out: '.$_POST['check_out'].'<br />
		 Habitacion: '.$_POST['room_selected'].'<br />
		 Num Habitaciones: '.$_POST['number_rooms'].'<br />
		 Num Adultos: '.$_POST['number_adults_selected'].'<br />
		 Num Menores: '.$_POST['number_child_selected'].'<br />
		';

	    require "phpmailer/class.phpmailer.php"; //include phpmailer class
	      
	    // Instantiate Class  
	    $mail = new PHPMailer();  
	      
	    // Set up SMTP  
	    $mail->IsSMTP();                // Sets up a SMTP connection  
	    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization    
	    $mail->SMTPSecure = "ssl";      // Connect using a TLS connection  
	    $mail->Host = "smtp.gmail.com";  //Gmail SMTP server address
	    $mail->Port = 465;  //Gmail SMTP port
	    $mail->Encoding = '7bit';
	    
	    // Authentication  
        $mail->Username   = "booking.hotelvillatournon@gmail.com"; // Your full Gmail address
        $mail->Password   = "reservaciones1"; // Your Gmail password
	      
	    // Compose
	    $mail->SetFrom($_POST['email'], $_POST['f_name'].' '.$_POST['l_name']);
	    $mail->AddReplyTo($_POST['email'], $_POST['f_name'].' '.$_POST['l_name']);
	    $mail->Subject = "Nuevo Booking";      // Subject (which isn't required)  
	    $mail->MsgHTML($message);
	 
	    // Send To  
	    $mail->AddAddress("hvillas@racsa.co.cr", "Hotel Villa Tournon"); // Where to send it - Recipient
	    $result = $mail->Send();		// Send!  
		$message = $result ? 'Successfully Sent! Soon we will contact you!' : 'Sending Failed!';      
		unset($mail);
	}
?>
<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Hotel Villa Tournon</title>
    <meta name="description" content="">
    <!-- Responsive helper -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Fonts-->
    <!-- Custom Fonts -->
    <link href="css/font-awesome-4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-responsive.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/screen.css">
    <!-- Select style -->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="select/css/cs-select.css" />
    <link rel="stylesheet" type="text/css" href="select/css/cs-skin-elastic.css" />
</head>

<body ng-app = "home">
    <div  ng-controller="LanguageController" id="home" class="boxed-view">
        <header class="main-header clearfix">
            <!-- Header Shorcode Area -->
            <div class="header-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-8">
                            <ul class="stars text-golden">
                                <li><i class="icon-573 font-13x"></i></li>
                                <li><i class="icon-573 font-13x"></i></li>
                                <li><i class="icon-573 font-13x"></i></li>
                                <li><i class="icon-573 font-13x"></i></li>
                            </ul>
                            <ul class="inline-list uppercase font-small header-meta">
                                <li><i class="icon-312 font-13x"></i> San Jose, Costa Rica</li>
                                <li><i class="icon-274 font-13x"></i> hvillas@racsa.co.cr</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-4">
                            <div class="socialbtns inline-list to-right header-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/pages/Hotel-Villa-Tournon/245464802135375" class="fa fa-lg fa-facebook" target="_blank"></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCb6l07CxLlI9O40yBAJUCmw?view_as=subscriber" class="fa fa-lg fa-youtube" target="_blank"></a></li>
                                    <li>
                                        <label class="check-fancy white round-corners">
                                            <b>Sí</b>
                                            <input type="checkbox" ng-model="checkboxModel.value" ng-change="languageChanged()" ng-init = "checkboxModel.value = init">
                                            <span class="round-corners gold"></span>
                                            <b>No</b>
                                        </label>
                                        <span class="lenguage-span">¿Español?</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.header-bar -->

            <div class="nav-bar sticky-bar grey">
                <!-- .mega-menu helper class ued as switcher -->
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-8">
                            <!-- Logo Area -->
                            <figure class="identity">
                                <a href="index.html">
                                    <img src="img/logo.png" class="logo-img" width="150" height="150" alt="Hotel Villa Tournon logo">
                                </a>
                            </figure>
                        </div>
                        <!-- /.col-md-2 -->
                        <div class="col-md-8 col-xs-4">
                            <!-- Menu Area -->
                            <nav class="main-nav clearfix">
                                <!-- .mega-menu helper class ued as switcher -->
                                <ul class="clean-list to-right clean-list-padding">
                                    <!-- .to-right, to-left, .center-me helper class-->
                                    <li><a href="index.html" class="homeLng"></a></li>
                                    <li><a href="rooms.html" class="roomsLng"></a></li>
                                    <li class="current-menu-item"><a href="booking.html" class="bookingLng"></a></li>
                                    <li><a href="el-hotel.html">Hotel</a></li>
                                    <li><a href="gallery.html" class="photoGalleryLng"></a></li>
                                    <li><a href="gallery_art.html" class="artLng"></a></li>
                                    <li><a href="about.html" class="aboutLng"></a></li>
                                    <li><a href="contact-us.html" class="contactLng"></a></li>
                                </ul>
                            </nav>
                            <!-- /.main-nav -->

                            <a href="#" class="mobile-switch to-right">
                                <i class="icon-467 font-2x text-dark hover-text-grey"></i>
                            </a>
                        </div>
                        <!-- /.col-md-10 -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.nav-bar -->
        </header>
        <!-- /.main-nav -->

        <!-- main content -->
        <section class="box">
            <div ng-controller="BookingController" class="container">
                <form name="mailBooking" method="post" action="send_email.php">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-dark-black text-center fancy-heading">
                                <h1 class="font-700 bookNowLng"></h1>
                                <hr class="text-dark-black size-30 center-me">
                                <br>            
                            </div>
                        </div>
                    </div> <!-- /.row -->
                    <div class="row booking-nav">
                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <div class="text-center nav-step">
                                <span></span>
                                <h4 class="font-100">Booking</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <div class="text-center nav-step">
                                <span></span>
                                <h4 class="font-100">Personal</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <div class="text-center nav-step" data-target="1">
                                <span></span>
                                <h4 class="font-100">Complete</h4>
                            </div>
                        </div>
                    </div>
                    <div class="booking-slider">
                        <ul class="clean-list">
                            <li>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="alert-box gold">
                                            <h4 class="text-white successLng"></h4>
                                        </div>
                                    </div>
                                </div>
                                  <div class="col-md-8">
                                    <div class="col-md-12">
                                        <a href="el-hotel.html" class="hotel-button button-md grey text-dark hover-orange" data-target="prev">El Hotel</a>
                                    </div>
                                 </div>
                            </li>
                        </ul>
                    </div>
                </form>
            </div> <!-- /.container -->
        </section> <!-- /.box -->
        <footer class="main-footer">
            <!-- Footer widgets -->
            <div class="big-footer box footer-box dark-less">
                <div class="container">
                    <div class="footer-sidebar row">

                        <div class="col-md-4 col-sm-6 widget">
                            <figure>
                                <a href="index.html">
                                    <img src="img/logo.png" class="center-block" width="150" height="150" alt="Hotel Villa Tournon logo">
                                </a>
                            </figure>
                            <p class="footerLng"></p>
                        </div>
                        
                        <div class="col-md-4 center-social col-sm-6 widget post-widget">
                            <div class="text-dark-black text-center fancy-heading">
                                <h4 class="font-700 followLng"></h4>
                                <hr class="text-dark-black size-30 center-me">              
                            </div>
                            <div class="socialbtns inline-list header-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/pages/Hotel-Villa-Tournon/245464802135375" class="fa fa-lg fa-facebook" target="_blank"></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCb6l07CxLlI9O40yBAJUCmw?view_as=subscriber" class="fa fa-lg fa-youtube" target="_blank"></a></li>
                                </ul>
                            </div>                      
                        </div>
                    <div class="col-md-4 col-sm-12 widget">
                            <ul class="clean-list contact-info text-dark-black uppercase">
                                <li><i class="fa fa-paper-plane fa-2x"></i> <b class="addressLng"></b>Apartado 6606 - 1000 San José, Costa Rica</li>
                                <li><i class="fa fa-envelope fa-2x"></i> <b class="ContactMaillng"></b> <a href="mailto:hvillas@racsa.co.cr">hvillas@racsa.co.cr</a></li>
                                <li itemprop="telephone"><i class="fa fa-phone fa-2x"></i> <b class="phoneLng"></b> <a href="tel:+50622336622">(506) 2233 66 22</a></li>
                                <li itemprop="telephone"><i class="fa fa-fax fa-2x"></i> <b>Fax: </b> <a href="tel:+50622225211">(506) 2222 52 11</a></li>
                            </ul>
                        </div> 
                    </div><!-- /.row -->
                </div><!-- /.container -->
            </div><!-- /.big-footer -->     
            <div class="small-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="center-social copyright center-me font-small">
                                <span> Designed by</span>
                                <span><a href="https://www.linkedin.com/profile/view?id=341417214&trk=nav_responsive_tab_profile_pic">Natalia Alpízar</a>and<a href="https://www.linkedin.com/profile/view?id=168344330&authType=NAME_SEARCH&authToken=TlQX&locale=es_ES&trk=tyah2&trkInfo=idx%3A1-1-1%2CtarId%3A1426458567389%2Ctas%3Acamilo">Camilo Agüero</a></span> 
                            </p>
                        </div>
                    </div> <!-- /.row -->
                </div>          
            </div><!-- /.small-footer -->   
        </footer><!-- /.main-footer -->
    </div><!-- /.boxed-view -->
    <!-- jquery CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Bootstrap js -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <!-- custom js -->
    <script src="js/jquery.query-object.js"></script>
    <script src="js/angular.js"></script>
    <script src="js/angular-local-storage.js"></script>
    <script src="js/common.js"></script>
    <script src="js/language.js"></script>
    <script src="js/bookingLogic.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/options.js"></script>
</body>
</html>