// homeLanguage.js

(function() {
	
	var app = angular.module("home", [
		'LocalStorageModule',
		'ngRoute',
		'ui.bootstrap'
		]);
	
	app.config(['$routeProvider',
	  function($routeProvider) {
	      $routeProvider.when('/', {
	        templateUrl: '/home.html',
	      });
	      $routeProvider.when('/home', {
	        templateUrl: '/home.html',
	      });
	      $routeProvider.when('/rooms', {
	        templateUrl: '/rooms.html',
	      });
	      $routeProvider.when('/booking', {
	        templateUrl: '/booking.html',
	      });
	      $routeProvider.when('/el-hotel', {
	        templateUrl: '/el-hotel.html',
	      });
	      $routeProvider.when('/about', {
	        templateUrl: '/about.html',
	      });
	      $routeProvider.when('/contact-us', {
	        templateUrl: '/contact-us.html',
	      });
	      $routeProvider.when('/services', {
	        templateUrl: '/services.html',
	      });
	      $routeProvider.when('/gallery', {
	        templateUrl: '/gallery.html',
	      });
	      $routeProvider.when('/ebony', {
	        templateUrl: '/ebony_&_ivory.html',
	      });
	      $routeProvider.when('/gallery', {
	        templateUrl: '/gallery.html',
	      });
	      $routeProvider.when('/gallery_art', {
	        templateUrl: '/gallery_art.html',
	      });
	      $routeProvider.otherwise({
	        redirectTo: '/home.html',
	      });
	  }]);

	var LanguageController = function($scope, $location, localStorageService){ 

		$scope.menuClass = function(page) {
		    var current = $location.path().substring(1);
		    return page === current ? "current-menu-item" : "";
		};

		$scope.myInterval = 3000;
		$scope.slides = [
			{
				image: 'img/home_page/big_slider/DSC_2481.jpg',
				caption: 'Hotel Villa Tournon',
				caption2: 'Visit Us',
				caption3: 'You are Welcome',
				link: '/el-hotel'
			},
			{
				image: 'img/home_page/big_slider/DSC_2097.jpg',
				caption: 'Test',
				caption2: 'Test Us',
				caption3: 'You are Test'
			},
			{
				image: 'img/home_page/big_slider/DSC_2286.jpg',
				caption: 'Ricón Azul',
				caption2: 'Come and enjoy our new restaurant',
				caption3: 'You are Welcome'
			},
			{
				image: 'img/home_page/big_slider/DSC_2398.jpg',
				caption: 'Ebony and Ivory',
				caption2: 'Come and enjoy our new restaurant',
				caption3: 'You are Welcome'
			},
			{
				image: 'img/home_page/big_slider/DSC_1979.jpg',
				caption: 'Pool and Jacuzzi',
				caption3: 'With us you will enjoy your Vacation'
			},
			{
				image: 'img/home_page/big_slider/DSC_2494.jpg',
				caption: 'San José, Costa Rica'
			}
		];
		
		$scope.openLink = function(link){
			$location.path("/"+"link");
		}

		var spanish;

		$scope.shouldBeDisabled = true;

		var d = new Date();
		$scope.CurrentYear = d.getFullYear();
		$scope.LeslieYears = $scope.CurrentYear - 1945;
		
		 if(localStorageService.length()>0)
		 {
			 spanish = localStorageService.get('spanish');
		 }
		 
		 if(spanish === 'true'){
			 $scope.init = (spanish === 'true');
			 $scope.Home ="Inicio";
			 $scope.Booking = "Reserve";
			 $scope.About = "Nosotros";
			 $scope.CheckIn = "Entrada";
			 $scope.CheckOut = "Salida";
			 $scope.PricesFrom = "Precios desde";
			 $scope.ChangeSched = "La salida podría ser más tarde dependiendo de la disponibilidad";
			 $scope.Write = "Escribir";
			 $scope.PhotoGallery = "Galería de fotos";
			 $scope.ArtGallery = "Galería de arte";
			 $scope.ReadMore = "Leer más";
			 $scope.Contact="Contacto";
			 $scope.Reserve="Reserve ahora";
			 $scope.Room="Habitación";
			 $scope.NumberRooms="Número de habitaciones";
			 $scope.Welcome="Bienvenido";
			 $scope.To="a Hotel Villa Tournon";
			 $scope.HotelMin="Se trata de un hotel de 80 habitaciones entre habitaciones Estándar, Superior y De Luxe. Algunas de la habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y jacuzzi; además de una hermosa vista de San José de noche, con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";
			 $scope.Services="Servicios";
			 $scope.Offer="Ofrecemos";
			 $scope.Ebony="Restaurante Ebony & Ivory";
			 $scope.RinconAzul="Restaurante Rincón Azul";
			 $scope.Pool="Piscina y jacuzzi";
			 $scope.Business="Salas de negocios";
			 $scope.SpecialActivities="Salones para eventos";
			 $scope.Art="Galería de arte";
			 $scope.Rooms="Habitaciones";
			 $scope.Standard="Todas las habitaciones son  de pisos de fina madera parqué, fueron las primeras habitaciones del hotel cuando era permitido el uso y comercialización de esta protegida madera en la actualidad por ley.";
			 $scope.Superior="Disponen de amplio baño con ducha y tina y sus respectivos amenidades, un área con sala de estar, algunas con cama King  y otras con dos camas matrimoniales.";
			 $scope.Deluxe="Se distinguen por su exquisita ubicación, vista hacia una fuente, rodeado por un jardín en un patio interno que garantiza tranquilidad.";
			$scope.RoomsTitle = "Habitaciones";
		    $scope.RoomsDescription="Algunas de las habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y  jacuzzi; además de una hermosa vista de San José, de noche con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";			
			$scope.Footer="Hotel Villa Tournon siempre sirve con estilo a los huéspedes más demandantes.";
			 $scope.Follow="Síganos";
			 $scope.DeluxeTittle="Habitación De luxe";
			 $scope.DeluxeDesciption1="Se distinguen por su exquisita ubicación, vista hacia una fuente, rodeado por un jardín en un patio interno que garantiza tranquilidad. Estas habitaciones tienen un área entre 30.35  y 39.05  m2,  decoradas con vistosos cuadros que hacen una armoniosa conjunto con la cama King y los confortables muebles a fin de darle vida a una estancia hermosa y agradable; así mismo cuenta con coffe maker, mini bar, televisor con pantalla plana, secadora de cabello y teléfono.";
			 $scope.DeluxeDesciption2="Los baños están equipados con ducha y tina, algunos además con bidé.  La habitación tiene un privilegiado piso de madera parqué.";
			$scope.RelatedRooms="Habitaciones similares";
			$scope.SuperiorTittle="Habitación Superior";
			$scope.SuperiorDescription1="Son habitaciones con un área de   33 m2 disponen de amplio baño con ducha y tina y sus respectivos amenidades, un área con sala de estar, algunas con cama King  y otras con dos camas matrimoniales, teléfono , televisor con pantalla plana con más de 50 canales a escoger, amplio closet, mini refrigeradora, cajas de seguridad, plancha y mesa de aplanchado,  coffe maker y secadora de pelo, son habitaciones alfombradas.";
			$scope.SuperiorDescription2="Las pinturas escogidas para estas habitaciones admiten apreciarlas.";
			$scope.SurroundedGarden = "Rodeada de jardines";
			$scope.Phone="Teléfono";
			$scope.KingBed="Cama King-sized";
			$scope.SafetyBox="Caja de seguridad";
			$scope.LivingRoom="Sala";
			$scope.KingBedTwoDouble="Cama King size o 2 camas dobles";
			$scope.MiniRefri="Mini refrigeradora";
			$scope.IronTable="Plancha y mesa para planchar";
			$scope.HairDryer ="Secadora de cabello";
			$scope.Description="Descripción";
			$scope.StandardTittle="Habitación Standard";
			$scope.StandardDescription1="Todas las habitaciones son  de pisos de fina madera parqué, fueron las primeras habitaciones del hotel cuando era permitido el uso y comercialización de esta protegida madera en la actualidad por ley.";
			$scope.StandardDescription2="Tienen de área 24 y  33 m2    disponen de diferentes ubicaciones en la edificación, vista a jardines internos a una fuente y externa hacia el jardín rodeando la piscina, además vista hacia la ciudad.";
			$scope.StandardDescription3="Están amuebladas con una cama matrimonial o dos camas sencillas, baño con ducha y tina, un área con sillas y mesa, televisor con y sin pantalla plana, closet, tocador y tienen acceso a caja de seguridad en el área de recepción, sin faltar en la decoración de atractivas pinturas que son el orgullo del hotel.";
			$scope.OverlookGarden="Vista a jardines internos y externos";
			$scope.SurroundingPool="Rodeando la piscina";
			$scope.DoubleSingle="Cama doble o dos individuales";
			$scope.ChairsTable="Mesa y sillas";
			$scope.SafetyBoxReception="Caja de seguridad (en la recepción)";
			$scope.BookNow="Reserve ahora";
			$scope.Adults="Adultos";
			$scope.Children="Niños";
			$scope.Bed="Cama";
			$scope.Double="Cama Doble";
			$scope.SingleBed="Cama Individual";
			$scope.AllTaxes="Todos los impuestos incluídos";
			$scope.Children10="Niños menores a 10 años acompañados de sus padres no pagan la estadía, no incluye extras de alimentación";
			$scope.ChildrenMax="El número máximo de niños es dos por habitación";
			$scope.ChildrenBreakFast="El desayuno por niño es de $5";
			$scope.RatesUSD="Los precios son calculados usando USD";
			$scope.SmokeFree="El hotel es libre de humo, actos contrarios serán penalizados";
			$scope.BookingInfo="Información de la reservación";
			$scope.PersonalInfo="Información Personal";
			$scope.Complete="Información Enviada";
			$scope.FirstName = "Nombre";
			$scope.LastName = "Apellido";
		    $scope.Email = "E-mail";
		    $scope.PhoneNumber = "Teléfono";
		    $scope.Notes = "Notas o comentarios";
		    $scope.Company = "Empresa";
		    $scope.Country = "País";
		    $scope.Submit = "Enviar reservación";
			$scope.Success="Su reservación ha sido enviada, pronto nos contactaremos con usted";
			$scope.Hotel1="Se trata de un hotel de 80 habitaciones entre habitaciones Estándar, Superior y De Luxe. Algunas de la habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y jacuzzi; además de una hermosa vista de San José de noche, con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";
			$scope.Hotel2="Hotel Villas Tournon está ubicado en la exclusiva área ejecutiva de Barrio Tournon, a solo ocho cuadras de la avenida central de San José; la capital de Costa Rica. A escasos pasos se ubica una importante universidad privada, instituciones relevantes del estado, centros comerciales, centros ejecutivos, terminal de transporte hacia la zona del Caribe, el parque Simón Bolívar, jardín de mariposas.";
			$scope.Hotel3="El hotel fue construido a principio de los años 80 sobre un terreno irregular en terraza; consta de tres pisos. Se ingresa por el tercer piso para trasladarse a la segunda y la primera planta. Continuando el descenso se llega al área de la piscina y jacuzzi  rodeado de un hermoso y colorido jardín.";
			$scope.Hotel4="Se aprecia en la arquitectónica del edificio un impresionante cielo artesanado, de fina y preciada madera en las áreas del Lobby, Bar y  Restaurante Rincón Azul. Así mismo los pisos de la mayoría de las habitaciones son de la citada madera, ya prohibido su tala y venta por ley en nuestro país.";
			$scope.Hotel5="Todas las áreas del Hotel Villa Tournon están engalanadas con pinturas de diferentes temáticas y técnicas, de autores  costarricenses y extranjeros; los cuales convierten este hotel en una auténtica  Galería. El arte y la cultura son su emblema. La congregación de estas obras de arte acompañado del amable servicio del personal es una invitación para conocer más de Costa Rica.";
			$scope.PlacesVisit="Lugares que puede recorrer caminando:";
			$scope.About1="Soy Leslie Wilson Shimpson, tengo "  + $scope.LeslieYears + " años de edad, Costarricense de nacimiento. Comencé a trabajar en un hotel en la edad de 21 años en 1966 en un hotel, como camarero. ";
			$scope.About2="Oportunidad de trabajo en Costa Rica no era fácil entonces. No hubo forma de emplearme en nada;  por tal motivo empecé a ofrecer trabajar gratuitamente con la firme convicción de que en poco tiempo, el lugar de trabajo me  ofrecería pagar un salario; mas los lugares que visité; supongo  que tuvieron duda de mi buena fe.";
			$scope.About3="En menos de dos años trabajando como camarero y en otros puestos me escale al puesto de asistente del Gerente de la empresa. Pocos meses antes de completar  cuatro años de trabajar en el hotel, mi jefe y yo nos convertimos en socios en un nuevo hotel. Transcurridos  dos años adquirí su participación y me convertí  en el único propietario. Durante ese período no había completado la escuela secundaria.";
			$scope.About4="En la actualidad soy abogado y también fui a la escuela de periodismo.";
			$scope.About5="Fundé Hotel Villa Tournon en 1992. De mi ingreso a la Hotelería a hoy cumplo 49 años. Tengo una gran pasión por mi trabajo, me encanta tratar con la gente de todas las nacionalidades. Mi misión es mostrar a la gente cómo una persona puede tener una vida feliz lidiando con desconocidos todos los días; además gozar de buena salud. Digo esto porque la mayoría de la gente piensa que tengo aproximadamente 40 años de edad.";
			$scope.About6="Algunas personas me preguntan. ¿Cuándo vas a dejar de trabajar? Yo les Respondo: por qué debería?, si la estoy pasando bien y si amo lo que hago.";
			$scope.About7="Gracias por visitar nuestra página, espero que la disfruten";
			$scope.AboutUs="Sobre Nosotros";
			$scope.ContactUs="Contáctenos";
			$scope.DropLine="Escríbanos con confianza, estamos para servir";
			$scope.Message="Mensaje";
			$scope.Name="Nombre";
			$scope.EbonyDescription="El Restaurante Ebony & Ivory es un espacio recientemente diseñado en el hotel que consta de un entorno moderno y cálido; en la que se  evidencia una decoración en blanco y negro, entre cielos, paredes, muebles y menaje; además complementado con artes entre pinturas, fotografías y esculturas. ";
			$scope.RinconDescription="La decoración y ambientación en el restaurante se sirve  en este  espacio para que genere placer. En él nos esforzamos en personalizar y gratificar con nuestros servicios su estadía, crear memorables momentos que llegan más allá de sus expectativas. El comedor está decorado con artes de obra en repujados, tapices con escenas que recrea momentos históricos de la cosecha de café en nuestro país; pinturas en acuarela y en oleo; hermosos vitrales y una chimenea en ladrillos son algunos de los objetos que se pueden admirar y observar mientras se disgustan de nuestros especialidades gastronómicas nacionales e internacional, en donde prevalece la amabilidad y la notoria cortesía del personal. Esta atención a los huéspedes se prolonga desde las 6 am hasta las 10 pm.En esta área se celebran todo tipo de eventos sociales y tiene una capacidad para 150 personas.";
			$scope.BusinessDesciption="El centro de negocios tiene una capacidad de hasta 6 personas, para organizar encuentros de trabajo, desayuno, presentaciones y video de conferencias, entre otros. A requerimiento, ofrecemos en alquiler Video Beam.";
			$scope.EventsDesciption="El hotel ofrece la posibilidad de celebrar distintos eventos con un servicio diferenciado donde prima la actitud. Hay dos salas habilitadas  “La Jungla”  y  “Rincón Azul” con capacidad de 45 y 150 personas respectivamente, están habilitadas y equipadas con materiales y equipos idóneos a las necesidades, para eventos como conferencias, bodas, seminarios, baby showers, fiesta de graduación, almuerzos y cenas privadas; así mismo, disfruta de nuestros servicios de coffe break y la gama de gastronomía que le ofrecemos en formato de menú, buffet o coctel.";
			$scope.ArtGalleryDesciption="Hotel Villa Tournon es una galería de arte. En las diferentes áreas del hotel se aprecia una exposición de tres de las bellas artes históricamente tradicionales: la arquitectura, la escultura y la pintura. Siendo esta la más fecunda en el hotel.";
			$scope.PoolDescription="El área de jardín donde se encuentra la piscina y jacuzzi, es un refugio único en pleno orbe, acusa una perfección  armoniosa  entre sol y sombra, en que unas veces el verdor de la arboleda interrumpe el sol causando sombra y en otros momentos, el sol se posiciona en otro punto donde evade la interrupción de los arboles en su trayectoria. ";
			$scope.ArtGalleryDesciption2 = "Una específica apreciación de arte arquitectónico es el artesanado que se puede observar en los cielos de las áreas del lobby, restaurante y bar.";
			$scope.ArtGalleryDesciption3 = "Así mismo, se pueden subrayar dos piezas de escultura: uno, un sinónimo de la parte inferior de una mujer desde la cintura hacia abajo, con una extensión de metamorfosis hacia arriba, en proporción al tamaño de la parte inferior del cuerpo relacionado. Esta pieza fue esculpida en madera de Guanacaste, que es el árbol nacional de Costa Rica; la otra obra es una pieza africana, tallada en madera de ébano. Este trabajo representa a una reina africana abrazando tiernamente dos niños pequeños de pie a su lado. Las habitaciones, pasillos y otras áreas están sometidas a docenas de pinturas que hacen del Hotel Villa Tournon una extraordinaria galería. Esta belleza es un componente clave para la experiencia añadida a su estancia fuera de casa.";
			$scope.ArtGalleryDesciption4 = "Le invitamos a disfrutar de la variedad de estas artes visuales.";
			$scope.EbonyLeft1="Fusión de gastronomía europea";
			$scope.EbonyLeft2="Y Delicias Caribeñas";
			$scope.EbonyRight1="Para su salud";
			$scope.EbonyRight2="Alimentos Veggie";
			$scope.EbonyDescription2="Su gastronomía comparte también esta dicotomía.  La cocina es una fusión de platos europeos, fundamentalmente de las cocinas española, italiana y francesa, por una parte,  por la otra,  la culinaria de los países caribeños. La Caribeña en representación del concepto de Ebony y la europea a Ivory.";
			$scope.PrivateDining="Ambiente privado";
			$scope.FromCelebrations="Desde celebraciones a reuniones íntimas";
			$scope.DoingBusiness="Haga Negocios";
			$scope.DoingBusinessDescription="Restaurante temático orientado a hombres y mujeres de negocios que desean aprovechar la hora de almuerzo o cena para citas de negocios o establecer relaciones comerciales.";
			$scope.GourmetRestaurant="Restaurante Gourmet";
			$scope.GourmetRestaurantDescription="Restaurante de alto nivel, con platos gourmet e innovadora decoración; además de un servicio súper calificado. ";
			$scope.PerfectArmony="Perfecta Armonía";
			$scope.PerfectArmonyDescription="Un espacio para los dos donde la sensorialidad del restaurante le seduce en una perfecta armonía.";
	}
		 else{
		 	 $scope.Home ="Home";
		 	 $scope.Booking = "Booking";
		 	 $scope.About = "About";
		 	 $scope.CheckIn = "Check-in";
			 $scope.CheckOut = "Check-out";
			 $scope.PricesFrom = "Prices from";
		 	 $scope.PhotoGallery = "Photo Gallery";
		 	 $scope.ChangeSched = "Late check-out could be possible upon availability";
		 	 $scope.ArtGallery = "Art gallery";
		 	 $scope.Write = "Write";
		 	 $scope.Contact="Contact";
			 $scope.ReadMore = "Read more";
			 $scope.Reserve="Make a Reservation";
			 $scope.Room="Room";
			 $scope.NumberRooms="Number of rooms";
			 $scope.Welcome = "Welcome";
			 $scope.To="to Hotel Villa Tournon";
			 $scope.HotelMin="This is a hotel of 80 rooms including standard, Superior and De Luxe rooms. Some of the rooms stand out for their view to a garden surrounding the pool and Jacuzzi; In addition to a beautiful view of San Jose at night, with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height.";
			 $scope.Services="Services";
			 $scope.Offer="What we offer";
			 $scope.Ebony="Ebony & Ivory restaurant";
			 $scope.RinconAzul="Rincón Azul restaurant";
			 $scope.Pool="Pool & jacuzzi";
			 $scope.Business="Business Center";
			 $scope.SpecialActivities="Events Hall";
			 $scope.Art="Art Gallery";
			 $scope.Rooms="Rooms";
			 $scope.Standard="The rooms have a fine wood park flooring, they were the first hotel rooms when it was permitted the use and marketing of this protected wood currently by law. ";
			 $scope.Superior="They have a spacious bathroom with shower and tub and its respective amenities, an area with living room, some with King size bed and other with two double beds.";
			 $scope.Deluxe="Are distinguished by its exquisite location, overlooking a fountain, surrounded by a garden in a courtyard which ensures peace of mind.";
			$scope.RoomsTitle = "Rooms"
		    $scope.RoomsDescription="Some of the rooms stand out for their views of a large garden surrounding the pool and Jacuzzi; In addition to the beautiful one of San Jose at night with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height.";
			$scope.Footer="Hotel Villa Tournon always serves you in a style reserved to serve the most demanding guest.";
			$scope.Follow="Follow us";
			$scope.DeluxeTittle="De luxe room";
			$scope.DeluxeDesciption1="Are distinguished by its exquisite location, overlooking a fountain, surrounded by a garden in a courtyard which ensures peace of mind. These rooms have an area between 30.35 and 39.05 m2, decorated with colorful pictures that make one harmonious with the king-sized bed and comfortable furniture in order to give life to a beautiful and pleasant stay; also has coffee maker, mini bar, TV with flat screen, hair dryer and phone.";
		    $scope.DeluxeDesciption2="The bathrooms are equipped with shower and bathtub, some with bidet. The room has a privileged floor wood Park.";
		    $scope.RelatedRooms="Related rooms";
			$scope.SuperiorTittle="Superior Room";
			$scope.SuperiorDescription1="There are rooms with an area of 33m2 they have a spacious bathroom with shower and tub and its respective amenities, an area with living room, some with King size bed and other with two double beds, telephone, flat screen TV with over 50 channels to choose from, wide closet, mini refrigerator, safe deposit boxes, iron and table ironing, coffee maker and hair dryer, rooms are carpeted.";
			$scope.SuperiorDescription2="The paintings selected for these rooms allowed to appreciate them.";
			$scope.SurroundedGarden="Surrounded by a garden";
			$scope.Phone="Phone";
			$scope.KingBed="King-sized bed";
			$scope.SafetyBox="Safety deposit box";
			$scope.LivingRoom="Living room";
			$scope.KingBedTwoDouble="King size bed or two double beds";
			$scope.MiniRefri="Mini refrigerator";
			$scope.IronTable="Iron and table ironing";
			$scope.HairDryer ="Hair dryer";
			$scope.Description="Description";
			$scope.StandardTittle="Standard Room";
			$scope.StandardDescription1="The rooms have a fine wood park flooring, they were the first hotel rooms when it was permitted the use and marketing of this protected wood currently by law.";
			$scope.StandardDescription2="This room have an area of 24 m2 and 33m2, they have different locations in the building, some overlook an internal garden to a fountain, and, also others looking towards an external garden surrounding the pool, and a view towards the city.";
			$scope.StandardDescription3="They are furnished with a double bed or two single beds, bathroom with shower and tub, an area with chairs and table, TV with and without flat screen, closet, toilet and have access to safety deposit box in the reception area; none misses the attractive paintings which is a pride of the hotel.";
			$scope.OverlookGarden="Overlook internal and external garden";
			$scope.SurroundingPool="Surrounding the pool";
			$scope.DoubleSingle="Double bed or two single beds";
			$scope.ChairsTable="Chairs and table area";
			$scope.SafetyBoxReception="Safety deposit box (In the reception)";
			$scope.BookNow="Book now";
			$scope.Adults="Adults";
			$scope.Children="Children";
			$scope.Bed="Bed";
			$scope.Double="Double Bed";
			$scope.SingleBed="Single  Bed";
			$scope.AllTaxes="All taxes are included";
			$scope.Children10="Children under 10 years using the facilities of parents are free of charge without extras include accommodations and meals";
			$scope.ChildrenMax="The max number of children per room is two";
			$scope.ChildrenBreakFast="The breakfast price for children is $5";
			$scope.RatesUSD="The rates are calculated in USD";
			$scope.SmokeFree="The hotel is smoke free and it is penalized contrary acts";
			$scope.BookingInfo="Booking Info";
			$scope.PersonalInfo="Personal Info";
			$scope.Complete="Information Sent";
			$scope.FirstName = "First Name";
		    $scope.LastName = "Last Name";
		    $scope.Email = "E-mail";
		    $scope.PhoneNumber = "Phone Number";
		    $scope.Notes = "Notes and special requests";
		    $scope.Company = "Company";
		    $scope.Country = "Country";
		    $scope.Submit = "Submit Reservation";
			$scope.Success="Your reservation was succefully submited!, soon we will contact you!";
			$scope.Hotel1="This is a hotel of 80 rooms including standard, Superior and De Luxe rooms. Some of the rooms stand out for their view to a garden surrounding the pool and Jacuzzi; In addition to a beautiful view of San Jose at night, with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height. ";
			$scope.Hotel2="Hotel Villas Tournon is situated in the exclusive executive area of Barrio Tournon, just eight blocks from the central avenue of San Jose; the capital of Costa Rica. A few steps away are located: relevant institutions of the State, a major private university, shopping malls, Executive centres, transport terminal that goes to the Caribbean coast of Costa Rica, Simón Bolívar park, and a butterfly garden.";
			$scope.Hotel3="The hotel was built at the beginning of the 1980s on a split level ground having a terrace formation. It consists of three floors. You enter the third floor and go down to the second and then to the first. Continuing the descent you will reach the swimming pool and Jacuzzi area surrounded by a beautiful and colorful garden.";
			$scope.Hotel4="In the architectural structure of this building you will appreciate a stunning sky craft, made with fine and precious wood in the Lobby, Bar and the restaurant Rincon Azul. Also the floors of most of the rooms are furnished with the mention material, already prohibited the felling and sale by law in our country.";
			$scope.Hotel5="All areas of the Villa Tournon Hotel are decorated with many paintings of different themes and techniques by Costa Rican and foreign authors; which make this hotel an authentic Gallery. Art and culture are its emblem. The Congregation of these works of art, together with the friendly service of the staff is an invitation to learn more about Costa Rica.";
			$scope.PlacesVisit="Places you can visit in walking distance:";
			$scope.About1="I am Leslie Wilson Shimpson " +$scope.LeslieYears+ " years old man, costarican born. In 1966 I started to work in a hotel at the age of 21, as a waiter. ";
			$scope.About2="Working opportunity in Costa Rica was not easy then. I could not find a job doing anything; I start offering to work for free with the firm conviction that in a short time, the working place would offer to pay me a salary; but the places I visited; I suspect were suspicious of my offer.";
			$scope.About3="It was less than a couple of years working as a waiter, and in other positions that I became the assistant manager of the company. A few months before I completed four years working in the hotel, my boss and I became partners in a new hotel. Two years after I bought him out, and became the sole owner. During that period I have not completed high school.";
			$scope.About4="At present I am a lawyer, and also went to journalism school.";
			$scope.About5="I founded Villa Tournon Hotel in 1992. Being in the hotel industry for over 49 years, I have a great passion for my work, I love dealing with people of all nationality. My mission is to show people how someone can have a happy life dealing with strangers everyday, and it can also be a healthy thing. I say this because people think I am close to 40 years old.";
			$scope.About6="Some people ask me. When are you going to stop working?  I answered, why should I, if I am having a good time while doing what I love?.";
			$scope.About7="Thank You for visiting our page, I hope you enjoy it.";
			$scope.AboutUs="About Us";
			$scope.ContactUs="Contact Us";
			$scope.DropLine="Drop us a line";
			$scope.Message="Message";
			$scope.Name="Name";
			$scope.EbonyDescription="Ebony & Ivory restaurant is a space recently designed in the hotel consisting of a modern and warm environment; where you can distinguish the decoration in black and white, in the ceilings, walls, furniture and tableware; additionally supplemented with arts including paintings, photographs and sculptures. ";
			$scope.RinconDescription="This dining area is decorated with embossed art work, tapestries with scenes recreating historic moments of the harvest of coffee in our country; watercolor paintings, oil paintings, beautiful stained glass windows and a brick fireplace are just some of the objects that you can admire and observe while you relish our national and international gastronomic specialties in which prevails the tender care and the notorious courtesy of the staff. This attention to guests is extended from 6 am until 10 pm. Social events can be held in this area and it has a capacity for 150 people.";
			$scope.BusinessDesciption="The business center has a capacity of up to 6 people, to organize business meetings, breakfast, presentations and video conferences, among others. Upon request, we provide for renting Video Beam.";
			$scope.EventsDesciption="The hotel offers the possibility of holding various events with a differentiated service where premium attitude is displayed. There are two rooms enabled The jungle and Rincon Azul with capacity of 45 and 150 people respectively, are enabled and equipped with materials and equipment needs, suitable for events such as conferences, seminars, weddings, baby showers, graduation party, lunches and private dinners; Likewise, enjoy our services of coffee break and the range of cuisine that we offer you in format menu, buffet or cocktail.";
			$scope.ArtGalleryDesciption="Hotel Villa Tournon serves as an art gallery. In the areas of the hotel you will be encountering with an exposition of the three main historical traditional fine arts: architecture, sculpture and painting most of all.";
			$scope.PoolDescription="The area of garden where the swimming pool and Jacuzzi are, is a unique full world retreat accuses  a perfect  harmony of sun and shade, where some  times the grove green  are interrupted by  the Sun causing shadow and other moment the sun positioned at another point which avoids disruption of trees in its path.";
			$scope.ArtGalleryDesciption2 = "A specify appreciation of architecture art can be seen in the sky craft, in the areas of the lobby, restaurant and bar.";
			$scope.ArtGalleryDesciption3 = "Two sculpture pieces; one, a synonym of the lower body up to the waist of a woman, with a metamorphosis extension upward, in proportion in size to the related lower body.  This piece was sculptured from a Guanacaste wood which is the national tree of Costa Rica; another is a sensory contemplation that can be held observing an African piece made out of Ebony wood. This work represents an African queen tenderly embracing two small children standing at her side. Rooms, passages and other areas are submitted to dozen of painting that make Hotel Villa Tournon a perfect gallery. This beauty is a key component to the experience added to your stay away from home.";
			$scope.ArtGalleryDesciption4 = "We welcome you to enjoy the variety of these visual arts.";
			$scope.EbonyLeft1="European fusion cuisine";
			$scope.EbonyLeft2="& Caribbean delights";
			$scope.EbonyRight1="For your health ";
			$scope.EbonyRight2="Veggie food ";
			$scope.EbonyDescription2="The cuisine also shares this dichotomy. You will be able to enjoy a dish fusion regarding European food mainly Spanish, French, and Italian likewise in one sense, and on the other, the cuisine of the Caribbean countries. The Caribbean representing the concept of Ebony and the european of  Ivory. ";
			$scope.PrivateDining="Private dining";
			$scope.FromCelebrations="From celebrations to intimate gatherings";
			$scope.DoingBusiness="Doing Business";
			$scope.DoingBusinessDescription="Thematic restaurant oriented to business men and women who want to take lunch or dinner time to contact with business people and establish commercial relations.";
			$scope.GourmetRestaurant="Gourmet Restaurant";
			$scope.GourmetRestaurantDescription="High-quality restaurant with gourmet dishes, upscale decoration and a qualified service at its best.";
			$scope.PerfectArmony="Perfect Armony";
			$scope.PerfectArmonyDescription="A space for two where the sensorialty of the restaurant will seduces you to a perfect harmony.";
		}
		 
		 $scope.inputChanged = function(){
			 
			 if($scope.checkInValue=== undefined||$scope.checkOutValue=== undefined||$scope.guestsValue=== undefined){
				$scope.shouldBeDisabled = true;
			 }
			 else{
				 $scope.shouldBeDisabled = false;
			 }
		 }
		 
		 $scope.languageChanged = function() {
			 
		     spanish = $scope.checkboxModel.value;
		     localStorageService.set('spanish', spanish);
			
			 if($scope.checkboxModel.value){
			 	 $scope.Home ="Inicio";
				 $scope.ReadMore = "Leer más";
				 $scope.Booking = "Reserve";
				 $scope.About = "Nosotros";
				 $scope.CheckIn = "Entrada";
				 $scope.CheckOut = "Salida";
				 $scope.PricesFrom = "Precios desde";
				 $scope.PhotoGallery = "Galería de fotos";
				 $scope.ArtGallery = "Galería de arte";
				 $scope.Write = "Escribir";
				 $scope.ChangeSched = "La salida podría ser más tarde dependiendo de la disponibilidad";
				 $scope.Contact="Contacto";
				 $scope.Reserve="Reserve ahora";
				 $scope.Room="Habitación";
				 $scope.NumberRooms="Número de habitaciones";
				 $scope.Welcome = "Bienvenido";
				 $scope.To="a Hotel Villa Tournon";
				 $scope.HotelMin="Se trata de un hotel de 80 habitaciones entre habitaciones Estándar, Superior y De Luxe. Algunas de la habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y jacuzzi; además de una hermosa vista de San José de noche, con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";
				 $scope.Services="Servicios";	
				 $scope.Offer="Ofrecemos";
		     	 $scope.Ebony="Restaurante Ebony & Ivory";
				 $scope.RinconAzul="Restaurante Rincón Azul";
				 $scope.Pool="Piscina y jacuzzi";
				 $scope.Business="Salas de negocios";
				 $scope.SpecialActivities="Salones para eventos";
				 $scope.Art="Galería de arte";
				 $scope.Rooms="Habitaciones";
				 $scope.Standard="Todas las habitaciones son  de pisos de fina madera parqué, fueron las primeras habitaciones del hotel cuando era permitido el uso y comercialización de esta protegida madera en la actualidad por ley.";
			   	$scope.Superior="Disponen de amplio baño con ducha y tina y sus respectivos amenidades, un área con sala de estar, algunas con cama King  y otras con dos camas matrimoniales.";
			     $scope.Deluxe="Se distinguen por su exquisita ubicación, vista hacia una fuente, rodeado por un jardín en un patio interno que garantiza tranquilidad.";
				 $scope.RoomsTitle = "Habitaciones";
				 $scope.RoomsDescription="Algunas de las habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y  jacuzzi; además de una hermosa vista de San José, de noche con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";
				 $scope.Footer="Hotel Villa Tournon siempre sirve con estilo a los huéspedes más demandantes.";
				 $scope.Follow="Síganos";
				 $scope.DeluxeTittle="Habitación De luxe";
				 $scope.DeluxeDesciption1="Se distinguen por su exquisita ubicación, vista hacia una fuente, rodeado por un jardín en un patio interno que garantiza tranquilidad. Estas habitaciones tienen un área entre 30.35  y 39.05  m2,  decoradas con vistosos cuadros que hacen una armoniosa conjunto con la cama King y los confortables muebles a fin de darle vida a una estancia hermosa y agradable; así mismo cuenta con coffe maker, mini bar, televisor con pantalla plana, secadora de cabello y teléfono.";
				 $scope.DeluxeDesciption2="Los baños están equipados con ducha y tina, algunos además con bidé.  La habitación tiene un privilegiado piso de madera parqué.";
		         $scope.RelatedRooms="Habitaciones similares";
				 $scope.SuperiorTittle="Habitación Superior";
				 $scope.SuperiorDescription1="Son habitaciones con un área de   33 m2 disponen de amplio baño con ducha y tina y sus respectivos amenidades, un área con sala de estar, algunas con cama King  y otras con dos camas matrimoniales, teléfono , televisor con pantalla plana con más de 50 canales a escoger, amplio closet, mini refrigeradora, cajas de seguridad, plancha y mesa de aplanchado,  coffe maker y secadora de pelo, son habitaciones alfombradas.";
			     $scope.SuperiorDescription2="Las pinturas escogidas para estas habitaciones admiten apreciarlas.";
				 $scope.SurroundedGarden = "Rodeada de jardines";
				 $scope.Phone="Teléfono";
				 $scope.KingBed="Cama King-sized";
				 $scope.SafetyBox="Caja de seguridad";
				 $scope.LivingRoom="Sala";
				 $scope.KingBedTwoDouble="Cama King size o 2 camas dobles";
				 $scope.MiniRefri="Mini refrigeradora";
				 $scope.IronTable="Plancha y mesa para planchar";
				 $scope.HairDryer ="Secadora de cabello";
				 $scope.Description="Descripción";
				 $scope.StandardTittle="Habitación Standard";
				 $scope.StandardDescription1="Todas las habitaciones son  de pisos de fina madera parqué, fueron las primeras habitaciones del hotel cuando era permitido el uso y comercialización de esta protegida madera en la actualidad por ley.";
				 $scope.StandardDescription2="Tienen de área 24 y  33 m2    disponen de diferentes ubicaciones en la edificación, vista a jardines internos a una fuente y externa hacia el jardín rodeando la piscina, además vista hacia la ciudad.";
				 $scope.StandardDescription3="Están amuebladas con una cama matrimonial o dos camas sencillas, baño con ducha y tina, un área con sillas y mesa, televisor con y sin pantalla plana, closet, tocador y tienen acceso a caja de seguridad en el área de recepción, sin faltar en la decoración de atractivas pinturas que son el orgullo del hotel.";
				 $scope.OverlookGarden="Vista a jardines internos y externos";
				 $scope.SurroundingPool="Rodeando la piscina";
				 $scope.DoubleSingle="Cama doble o dos individuales";
				 $scope.ChairsTable="Mesa y sillas";
				 $scope.SafetyBoxReception="Caja de seguridad (en la recepción)";
				 $scope.BookNow="Reserve ahora";
				 $scope.Adults="Adultos";
				 $scope.Children="Niños";
				 $scope.Bed="Cama";
				 $scope.Double="Cama Doble";
				 $scope.SingleBed="Cama Individual";
				 $scope.AllTaxes="Todos los impuestos incluídos";
				 $scope.Children10="Niños menores a 10 años acompañados de sus padres no pagan la estadía, no incluye extras de alimentación";
				 $scope.ChildrenMax="El número máximo de niños es dos por habitación";
				 $scope.ChildrenBreakFast="El desayuno por niño es de $5";
				 $scope.RatesUSD="Los precios son calculados usando USD";
				 $scope.SmokeFree="El hotel es libre de humo, actos contrarios serán penalizados";
				 $scope.BookingInfo="Información de la reservación";
				 $scope.PersonalInfo="Información Personal";
				 $scope.Complete="Información Enviada";
				 $scope.FirstName = "Nombre";
				 $scope.LastName = "Apellido";
				 $scope.Email = "E-mail";
				 $scope.PhoneNumber = "Teléfono";
				 $scope.Notes = "Notas o comentarios";
				 $scope.Company = "Empresa";
				 $scope.Country = "País";
				 $scope.Submit = "Enviar reservación";
				 $scope.Success="Su reservación ha sido enviada, pronto nos contactaremos con usted";
				 $scope.Hotel1="Se trata de un hotel de 80 habitaciones entre habitaciones Estándar, Superior y De Luxe. Algunas de la habitaciones se destacan por su vista hacia un amplio jardín rodeando la piscina y jacuzzi; además de una hermosa vista de San José de noche, con sus edificios iluminados, incrustados en una loma como compitiendo entre ellos para superar en altura.";
				$scope.Hotel2="Hotel Villas Tournon está ubicado en la exclusiva área ejecutiva de Barrio Tournon, a solo ocho cuadras de la avenida central de San José; la capital de Costa Rica. A escasos pasos se ubica una importante universidad privada, instituciones relevantes del estado, centros comerciales, centros ejecutivos, terminal de transporte hacia la zona del Caribe, el parque Simón Bolívar, jardín de mariposas.";
				$scope.Hotel3="El hotel fue construido a principio de los años 80 sobre un terreno irregular en terraza; consta de tres pisos. Se ingresa por el tercer piso para trasladarse a la segunda y la primera planta. Continuando el descenso se llega al área de la piscina y jacuzzi  rodeado de un hermoso y colorido jardín.";
				$scope.Hotel4="Se aprecia en la arquitectónica del edificio un impresionante cielo artesanado, de fina y preciada madera en las áreas del Lobby, Bar y  Restaurante Rincón Azul. Así mismo los pisos de la mayoría de las habitaciones son de la citada madera, ya prohibido su tala y venta por ley en nuestro país.";
				$scope.Hotel5="Todas las áreas del Hotel Villa Tournon están engalanadas con pinturas de diferentes temáticas y técnicas, de autores  costarricenses y extranjeros; los cuales convierten este hotel en una auténtica  Galería. El arte y la cultura son su emblema. La congregación de estas obras de arte acompañado del amable servicio del personal es una invitación para conocer más de Costa Rica.";
				$scope.PlacesVisit="Lugares que puede recorrer caminando:";
				$scope.About1="Soy Leslie Wilson Shimpson, tengo "+$scope.LeslieYears+" años de edad, Costarricense de nacimiento. Comencé a trabajar en un hotel en la edad de 21 años en 1966 en un hotel, como camarero. ";
				$scope.About2="Oportunidad de trabajo en Costa Rica no era fácil entonces. No hubo forma de emplearme en nada;  por tal motivo empecé a ofrecer trabajar gratuitamente con la firme convicción de que en poco tiempo, el lugar de trabajo me  ofrecería pagar un salario; mas los lugares que visité; supongo  que tuvieron duda de mi buena fe.";
				$scope.About3="En menos de dos años trabajando como camarero y en otros puestos me escale al puesto de asistente del Gerente de la empresa. Pocos meses antes de completar  cuatro años de trabajar en el hotel, mi jefe y yo nos convertimos en socios en un nuevo hotel. Transcurridos  dos años adquirí su participación y me convertí  en el único propietario. Durante ese período no había completado la escuela secundaria.";
				$scope.About4="En la actualidad soy abogado y también fui a la escuela de periodismo.";
				$scope.About5="Fundé Hotel Villa Tournon en 1992. De mi ingreso a la Hotelería a hoy cumplo 49 años. Tengo una gran pasión por mi trabajo, me encanta tratar con la gente de todas las nacionalidades. Mi misión es mostrar a la gente cómo una persona puede tener una vida feliz lidiando con desconocidos todos los días; además gozar de buena salud. Digo esto porque la mayoría de la gente piensa que tengo aproximadamente 40 años de edad.";
				$scope.About6="Algunas personas me preguntan. ¿Cuándo vas a dejar de trabajar? Yo les Respondo: por qué debería?, si la estoy pasando bien y si amo lo que hago.";
				$scope.About7="Gracias por visitar nuestra página, espero que la disfruten";
				$scope.AboutUs="Sobre Nosotros";
				$scope.ContactUs="Contáctenos";
				$scope.DropLine="Escríbanos con confianza, estamos para servir";
				$scope.Message="Mensaje";
				$scope.Name="Nombre";
				$scope.EbonyDescription="El Restaurante Ebony & Ivory es un espacio recientemente diseñado en el hotel que consta de un entorno moderno y cálido; en la que se  evidencia una decoración en blanco y negro, entre cielos, paredes, muebles y menaje; además complementado con artes entre pinturas, fotografías y esculturas. ";
			    $scope.RinconDescription="La decoración y ambientación en el restaurante se sirve  en este  espacio para que genere placer. En él nos esforzamos en personalizar y gratificar con nuestros servicios su estadía, crear memorables momentos que llegan más allá de sus expectativas. El comedor está decorado con artes de obra en repujados, tapices con escenas que recrea momentos históricos de la cosecha de café en nuestro país; pinturas en acuarela y en oleo; hermosos vitrales y una chimenea en ladrillos son algunos de los objetos que se pueden admirar y observar mientras se disgustan de nuestros especialidades gastronómicas nacionales e internacional, en donde prevalece la amabilidad y la notoria cortesía del personal. Esta atención a los huéspedes se prolonga desde las 6 am hasta las 10 pm.En esta área se celebran todo tipo de eventos sociales y tiene una capacidad para 150 personas.";
				$scope.BusinessDesciption="El centro de negocios tiene una capacidad de hasta 6 personas, para organizar encuentros de trabajo, desayuno, presentaciones y video de conferencias, entre otros. A requerimiento, ofrecemos en alquiler Video Beam.";
				$scope.EventsDesciption="El hotel ofrece la posibilidad de celebrar distintos eventos con un servicio diferenciado donde prima la actitud. Hay dos salas habilitadas  “La Jungla”  y  “Rincón Azul” con capacidad de 45 y 150 personas respectivamente, están habilitadas y equipadas con materiales y equipos idóneos a las necesidades, para eventos como conferencias, bodas, seminarios, baby showers, fiesta de graduación, almuerzos y cenas privadas; así mismo, disfruta de nuestros servicios de coffe break y la gama de gastronomía que le ofrecemos en formato de menú, buffet o coctel.";
				$scope.ArtGalleryDesciption="Hotel Villa Tournon es una galería de arte. En las diferentes áreas del hotel se aprecia una exposición de tres de las bellas artes históricamente tradicionales: la arquitectura, la escultura y la pintura. Siendo esta la más fecunda en el hotel.";
				$scope.PoolDescription="El área de jardín donde se encuentra la piscina y jacuzzi, es un refugio único en pleno orbe, acusa una perfección  armoniosa  entre sol y sombra, en que unas veces el verdor de la arboleda interrumpe el sol causando sombra y en otros momentos, el sol se posiciona en otro punto donde evade la interrupción de los arboles en su trayectoria. ";
				$scope.ArtGalleryDesciption2 = "Una específica apreciación de arte arquitectónico es el artesanado que se puede observar en los cielos de las áreas del lobby, restaurante y bar.";
				$scope.ArtGalleryDesciption3 = "Así mismo, se pueden subrayar dos piezas de escultura: uno, un sinónimo de la parte inferior de una mujer desde la cintura hacia abajo, con una extensión de metamorfosis hacia arriba, en proporción al tamaño de la parte inferior del cuerpo relacionado. Esta pieza fue esculpida en madera de Guanacaste, que es el árbol nacional de Costa Rica; la otra obra es una pieza africana, tallada en madera de ébano. Este trabajo representa a una reina africana abrazando tiernamente dos niños pequeños de pie a su lado. Las habitaciones, pasillos y otras áreas están sometidas a docenas de pinturas que hacen del Hotel Villa Tournon una extraordinaria galería. Esta belleza es un componente clave para la experiencia añadida a su estancia fuera de casa.";
				$scope.ArtGalleryDesciption4 = "Le invitamos a disfrutar de la variedad de estas artes visuales.";
				$scope.EbonyLeft1="Fusión de gastronomía europea";
				$scope.EbonyLeft2="Y Delicias Caribeñas";
				$scope.EbonyRight1="Para su salud";
				$scope.EbonyRight2="Alimentos Veggie";
				$scope.EbonyDescription2="Su gastronomía comparte también esta dicotomía.  La cocina es una fusión de platos europeos, fundamentalmente de las cocinas española, italiana y francesa, por una parte,  por la otra,  la culinaria de los países caribeños. La Caribeña en representación del concepto de Ebony y la europea a Ivory.";
				$scope.PrivateDining="Ambiente privado";
				$scope.FromCelebrations="Desde celebraciones a reuniones íntimas";
				$scope.DoingBusiness="Haga Negocios";
				$scope.DoingBusinessDescription="Restaurante temático orientado a hombres y mujeres de negocios que desean aprovechar la hora de almuerzo o cena para citas de negocios o establecer relaciones comerciales.";
				$scope.GourmetRestaurant="Restaurante Gourmet";
				$scope.GourmetRestaurantDescription="Restaurante de alto nivel, con platos gourmet e innovadora decoración; además de un servicio súper calificado. ";
				$scope.PerfectArmony="Perfecta Armonía";
				$scope.PerfectArmonyDescription="Un espacio para los dos donde la sensorialidad del restaurante le seduce en una perfecta armonía.";
		}
			else{
				 $scope.Home ="Home";
				 $scope.ReadMore = "Read more";
				 $scope.Booking = "Booking";
				 $scope.About = "About";
				 $scope.PhotoGallery = "Photo gallery";
				 $scope.CheckIn = "Check-in";
				 $scope.CheckOut = "Check-out";
				 $scope.PricesFrom = "Prices from";
				 $scope.ArtGallery = "Art gallery";
				 $scope.Write = "Write";
				 $scope.ChangeSched = "Late check-out could be possible upon availability";
				 $scope.Contact="Contact";
				 $scope.Reserve="Make a Reservation";
				 $scope.Room="Room";
				 $scope.NumberRooms="Number of rooms";
				 $scope.Welcome = "Welcome";
				 $scope.To="to Hotel Villa Tournon";
				 $scope.HotelMin="This is a hotel of 80 rooms including standard, Superior and De Luxe rooms. Some of the rooms stand out for their view to a garden surrounding the pool and Jacuzzi; In addition to a beautiful view of San Jose at night, with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height.";
				 $scope.Services="Services";
				 $scope.Offer="What we offer";
			     $scope.Ebony="Ebony & Ivory restaurant";
				 $scope.RinconAzul="Rincón Azul restaurant";
				 $scope.Pool="Pool & jacuzzi";
				 $scope.Business="Business Center";
				 $scope.SpecialActivities="Events Hall";
				 $scope.Art="Art Gallery";
				 $scope.Rooms="Rooms";
				 $scope.Standard="The rooms have a fine wood park flooring, they were the first hotel rooms when it was permitted the use and marketing of this protected wood currently by law. ";
			     $scope.Superior="They have a spacious bathroom with shower and tub and its respective amenities, an area with living room, some with King size bed and other with two double beds.";
				 $scope.Deluxe="Are distinguished by its exquisite location, overlooking a fountain, surrounded by a garden in a courtyard which ensures peace of mind.";
				 $scope.RoomsTitle = "Rooms"
				 $scope.RoomsDescription="Some of the rooms stand out for their views of a large garden surrounding the pool and Jacuzzi; In addition to the beautiful one of San Jose at night with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height.";
				 $scope.Footer="Hotel Villa Tournon always serves you in a style reserved to serve the most demanding guest.";
				 $scope.Follow="Follow us";
				 $scope.DeluxeTittle="Deluxe room";
				 $scope.DeluxeDesciption1="Are distinguished by its exquisite location, overlooking a fountain, surrounded by a garden in a courtyard which ensures peace of mind. These rooms have an area between 30.35 and 39.05 m2, decorated with colorful pictures that make one harmonious with the king-sized bed and comfortable furniture in order to give life to a beautiful and pleasant stay; also has coffee maker, mini bar, TV with flat screen, hair dryer and phone.";
				 $scope.DeluxeDesciption2="The bathrooms are equipped with shower and bathtub, some with bidet. The room has a privileged floor wood Park.";
				 $scope.RelatedRooms="Related rooms";
				 $scope.SuperiorTittle="Superior Room";
				 $scope.SuperiorDescription1="There are rooms with an area of 33m2 they have a spacious bathroom with shower and tub and its respective amenities, an area with living room, some with King size bed and other with two double beds, telephone, flat screen TV with over 50 channels to choose from, wide closet, mini refrigerator, safe deposit boxes, iron and table ironing, coffee maker and hair dryer, rooms are carpeted.";
				 $scope.SuperiorDescription2="The paintings selected for these rooms allowed to appreciate them.";
				 $scope.SurroundedGarden = "Surrounded by a garden";
				 $scope.Phone="Phone";
				 $scope.KingBed="King-sized bed";
				 $scope.SafetyBox="Safety deposit box";
				 $scope.LivingRoom="Living room";
				 $scope.KingBedTwoDouble="King size bed or two double beds";
				 $scope.MiniRefri="Mini refrigerator";
				 $scope.IronTable="Iron and table ironing";
				 $scope.HairDryer ="Hair dryer";
				 $scope.Description="Description";
				 $scope.StandardTittle="Standard Room";
				 $scope.StandardDescription1="The rooms have a fine wood park flooring, they were the first hotel rooms when it was permitted the use and marketing of this protected wood currently by law.";
			     $scope.StandardDescription2="This room have an area of 24 m2 and 33m2, they have different locations in the building, some overlook an internal garden to a fountain, and, also others looking towards an external garden surrounding the pool, and a view towards the city.";
				 $scope.StandardDescription3="They are furnished with a double bed or two single beds, bathroom with shower and tub, an area with chairs and table, TV with and without flat screen, closet, toilet and have access to safety deposit box in the reception area; none misses the attractive paintings which is a pride of the hotel.";
				 $scope.OverlookGarden="Overlook internal and external garden";
				 $scope.SurroundingPool="Surrounding the pool";
				 $scope.DoubleSingle="Double bed or two single beds";
				 $scope.ChairsTable="Chairs and table area";
				 $scope.SafetyBoxReception="Safety deposit box (In the reception)";
				 $scope.BookNow="Book now";
				 $scope.Adults="Adults";
				 $scope.Children="Children";
				 $scope.Bed="Bed";
				 $scope.Double="Double Bed";
				 $scope.SingleBed="Single  Bed";
				 $scope.AllTaxes="All taxes are included";
				 $scope.Children10="Children under 10 years using the facilities of parents are free of charge without extras include accommodations and meals";
				 $scope.ChildrenMax="The max number of children per room is two";
				 $scope.ChildrenBreakFast="The breakfast price for children is $5";
				 $scope.RatesUSD="The rates are calculated in USD";
				 $scope.SmokeFree="The hotel is smoke free and it is penalized contrary acts";
				 $scope.BookingInfo="Booking Info";
				 $scope.PersonalInfo="Personal Info";
				 $scope.Complete="Information Sent";
				 $scope.FirstName = "First Name";
				 $scope.LastName = "Last Name";
				 $scope.Email = "E-mail";
				 $scope.PhoneNumber = "Phone Number";
				 $scope.Notes = "Notes and special requests";
				 $scope.Company = "Company";
				 $scope.Country = "Country";
				 $scope.Submit = "Submit Reservation";
				 $scope.Success="Your reservation was succefully submited!, soon we will contact you!";
				 $scope.Hotel1="This is a hotel of 80 rooms including standard, Superior and De Luxe rooms. Some of the rooms stand out for their view to a garden surrounding the pool and Jacuzzi; In addition to a beautiful view of San Jose at night, with its illuminated buildings, embedded in a Hill as competing with each other to exceed in height. ";
				$scope.Hotel2="Hotel Villas Tournon is situated in the exclusive executive area of Barrio Tournon, just eight blocks from the central avenue of San Jose; the capital of Costa Rica. A few steps away are located: relevant institutions of the State, a major private university, shopping malls, Executive centres, transport terminal that goes to the Caribbean coast of Costa Rica, Simón Bolívar park, and a butterfly garden.";
				$scope.Hotel3="The hotel was built at the beginning of the 1980s on a split level ground having a terrace formation. It consists of three floors. You enter the third floor and go down to the second and then to the first. Continuing the descent you will reach the swimming pool and Jacuzzi area surrounded by a beautiful and colorful garden.";
				$scope.Hotel4="In the architectural structure of this building you will appreciate a stunning sky craft, made with fine and precious wood in the Lobby, Bar and the restaurant Rincon Azul. Also the floors of most of the rooms are furnished with the mention material, already prohibited the felling and sale by law in our country.";
				$scope.Hotel5="All areas of the Villa Tournon Hotel are decorated with many paintings of different themes and techniques by Costa Rican and foreign authors; which make this hotel an authentic Gallery. Art and culture are its emblem. The Congregation of these works of art, together with the friendly service of the staff is an invitation to learn more about Costa Rica.";
				$scope.PlacesVisit="Places you can visit in walking distance:";
				$scope.About1="I am Leslie Wilson Shimpson "+$scope.LeslieYears+" years old man, costarican born. In 1966 I started to work in a hotel at the age of 21, as a waiter. ";
				$scope.About2="Working opportunity in Costa Rica was not easy then. I could not find a job doing anything; I start offering to work for free with the firm conviction that in a short time, the working place would offer to pay me a salary; but the places I visited; I suspect were suspicious of my offer.";
				$scope.About3="It was less than a couple of years working as a waiter, and in other positions that I became the assistant manager of the company. A few months before I completed four years working in the hotel, my boss and I became partners in a new hotel. Two years after I bought him out, and became the sole owner. During that period I have not completed high school.";
				$scope.About4="At present I am a lawyer, and also went to journalism school.";
				$scope.About5="I founded Villa Tournon Hotel in 1992. Being in the hotel industry for over 49 years, I have a great passion for my work, I love dealing with people of all nationality. My mission is to show people how someone can have a happy life dealing with strangers everyday, and it can also be a healthy thing. I say this because people think I am close to 40 years old.";
				$scope.About6="Some people ask me. When are you going to stop working?  I answered, why should I, if I am having a good time while doing what I love?.";
				$scope.About7="Thank You for visiting our page, I hope you enjoy it.";
				$scope.AboutUs="About Us";
				$scope.ContactUs="Contact Us";
				$scope.DropLine="Drop us a line";
				$scope.Message="Message";
				$scope.Name="Name";
				$scope.EbonyDescription="Ebony & Ivory restaurant is a space recently designed in the hotel consisting of a modern and warm environment; where you can distinguish the decoration in black and white, in the ceilings, walls, furniture and tableware; additionally supplemented with arts including paintings, photographs and sculptures. ";
				$scope.RinconDescription="This dining area is decorated with embossed art work, tapestries with scenes recreating historic moments of the harvest of coffee in our country; watercolor paintings, oil paintings, beautiful stained glass windows and a brick fireplace are just some of the objects that you can admire and observe while you relish our national and international gastronomic specialties in which prevails the tender care and the notorious courtesy of the staff. This attention to guests is extended from 6 am until 10 pm. Social events can be held in this area and it has a capacity for 150 people.";
				$scope.BusinessDesciption="The business center has a capacity of up to 6 people, to organize business meetings, breakfast, presentations and video conferences, among others. Upon request, we provide for renting Video Beam.";
				$scope.EventsDesciption="The hotel offers the possibility of holding various events with a differentiated service where premium attitude is displayed. There are two rooms enabled The jungle and Rincon Azul with capacity of 45 and 150 people respectively, are enabled and equipped with materials and equipment needs, suitable for events such as conferences, seminars, weddings, baby showers, graduation party, lunches and private dinners; Likewise, enjoy our services of coffee break and the range of cuisine that we offer you in format menu, buffet or cocktail.";
				$scope.ArtGalleryDesciption="Hotel Villa Tournon serves as an art gallery. In the areas of the hotel you will be encountering with an exposition of the three main historical traditional fine arts: architecture, sculpture and painting most of all.";
				$scope.PoolDescription="The area of garden where the swimming pool and Jacuzzi are, is a unique full world retreat accuses  a perfect  harmony of sun and shade, where some  times the grove green  are interrupted by  the Sun causing shadow and other moment the sun positioned at another point which avoids disruption of trees in its path.";
				$scope.ArtGalleryDesciption2 = "A specify appreciation of architecture art can be seen in the sky craft, in the areas of the lobby, restaurant and bar.";
				$scope.ArtGalleryDesciption3 = "Two sculpture pieces; one, a synonym of the lower body up to the waist of a woman, with a metamorphosis extension upward, in proportion in size to the related lower body.  This piece was sculptured from a Guanacaste wood which is the national tree of Costa Rica; another is a sensory contemplation that can be held observing an African piece made out of Ebony wood. This work represents an African queen tenderly embracing two small children standing at her side. Rooms, passages and other areas are submitted to dozen of painting that make Hotel Villa Tournon a perfect gallery. This beauty is a key component to the experience added to your stay away from home.";
				$scope.ArtGalleryDesciption4 = "We welcome you to enjoy the variety of these visual arts.";
				$scope.EbonyLeft1="European fusion cuisine";
				$scope.EbonyLeft2="& Caribbean delights";
				$scope.EbonyRight1="For your health ";
				$scope.EbonyRight2="Veggi food ";
				$scope.EbonyDescription2="The cuisine also shares this dichotomy. You will be able to enjoy a dish fusion regarding European food mainly Spanish, French, and Italian likewise in one sense, and on the other, the cuisine of the Caribbean countries. The Caribbean representing the concept of Ebony and the european of  Ivory. ";
				$scope.PrivateDining="Private dining";
				$scope.FromCelebrations="From celebrations to intimate gatherings";
				$scope.DoingBusiness="Doing Business";
				$scope.DoingBusinessDescription="Thematic restaurant oriented to business men and women who want to take lunch or dinner time to contact with business people and establish commercial relations.";
				$scope.GourmetRestaurant="Gourmet Restaurant";
				$scope.GourmetRestaurantDescription="High-quality restaurant with gourmet dishes, upscale decoration and a qualified service at its best.";
				$scope.PerfectArmony="Perfect Armony";
				$scope.PerfectArmonyDescription="A space for two where the sensorialty of the restaurant will seduces you to a perfect harmony.";
				}
			 
		 }
    
	}
	
	app.config(function (localStorageServiceProvider) {	
		localStorageServiceProvider
			.setPrefix('hotelVillaTournon')
			.setStorageType('sessionStorage')	
    });

    var BookingController = function($scope){ 

    	var room;
    	var numberDays;
    	var dayPrice;

    	var url = location.search;

		room = $.query.get('room');
		var checkIn = $.query.get('checkIn');
		var checkOut = $.query.get('checkOut');
		var numberRooms = $.query.get('NumberRooms');

		$scope.NumberChildrenSelected = 0;
		$scope.NumberAdultsSelected = 1;
		
		if(room ===""){

			$scope.RoomSelected = $scope.RoomTittle = room = "Standard";
			$scope.NumberRoomsSelected = 1;
		}
		else{

			$scope.RoomSelected = $scope.RoomTittle = room;
			$scope.NumberRoomsSelected = numberRooms;
			$scope.CheckInSelected = checkIn;
			$scope.CheckOutSelected = checkOut;
		}

		setRoomOptions();
		setDaysNumber();
		updatePricing();

    	$scope.roomChanged = function(){ 

    		room = $scope.RoomSelected;
    		$scope.RoomTittle = room;

    		setRoomOptions();
    		updatePricing();
    	}

    	function setRoomOptions(){

    		switch(room){

    			case "Standard":
    				$scope.roomPath = "img/home_page/rooms/DSC_2648.jpg";
    				if($scope.NumberAdultsSelected == 1 || $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 95;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 110;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 110 + additionalPerson*20;
    				}
    				$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer];
    				$scope.AddPeople =["1","2"];
    				break;
    			case "Deluxe":
    				$scope.roomPath = "img/home_page/rooms/DSC_2157.jpg";
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 160;
    				}
    				$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer, $scope.IronTable];
    				$scope.AddPeople =["1","2"];
    				break;
    			case "Superior":
    				$scope.roomPath = "img/home_page/rooms/DSC_2369.jpg";
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 125;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 135 + additionalPerson*25;
    				}
    				$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer, $scope.IronTable];
    				$scope.AddPeople =["1","2","3","4"];
    				break;
    		}

    	}

    	$scope.roomsNumberChange = function(){
    		updatePricing();

    	}

    	function updatePricing(){
    		$scope.GrandTotal = $scope.daysNumber*$scope.RoomPrice*$scope.NumberRoomsSelected;
    	}

    	$scope.dateChanged = function(){

    		setDaysNumber();

    		updatePricing();
    	}

    	function setDaysNumber(){

    		checkIn = $scope.CheckInSelected;
			checkOut = $scope.CheckOutSelected;

    		if(checkIn === "" || checkOut === "" || checkIn === undefined || checkOut === undefined){

    			$scope.daysNumber = 0;
    		}
    		else{

	    		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

				var checkInSplit = checkIn.split("-");
				var firstDate = new Date(checkInSplit[2], checkInSplit[0]-1, checkInSplit[1]);
				var checkOutSplit = checkOut.split("-");
				var secondDate = new Date(checkOutSplit[2], checkOutSplit[0]-1, checkOutSplit[1]);

				var numberDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

				$scope.daysNumber = numberDays;
    		}
    	}

    	$scope.adultsChanged = function(){

    		switch(room){

    			case "Standard":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 95;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 110;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 110 + additionalPerson*20;
    				}
    				break;
    			case "Deluxe":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 160;
    				}
    				break;
    			case "Superior":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 125;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 135 + additionalPerson*25;
    				}
    				break;    		
    			}

    		updatePricing();
    	}
	
	}

    app.controller("LanguageController", LanguageController); 

    app.controller("BookingController", BookingController); 
	
}());