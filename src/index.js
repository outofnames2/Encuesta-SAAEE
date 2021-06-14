import img1 from 'url:./img/01.png';
import img2 from 'url:./img/02.png';
import img3 from 'url:./img/03.png';
import img4 from 'url:./img/04.png';
import img5 from 'url:./img/05.png';
import img6 from 'url:./img/06.png';
import img7 from 'url:./img/07.png';
import img8 from 'url:./img/08.png';
import img9 from 'url:./img/09.png';
import img10 from 'url:./img/10.png';
import img11 from 'url:./img/11.png';
import img12 from 'url:./img/12.jpg';
import img13 from 'url:./img/13.png';
import img14 from 'url:./img/14.png';

let cardData = {"01": {"link":"https://ncase.me/covid-19/",
		       "image": img1,
		       "title": "What Happens Next?",
		       "description": "Futuros del COVID-19, explicado con simulacion jugables",
		       "category": "📜🖼️🖥️🎮",
		       "readtime": "🕐 30 min"},
		"02":  {"link": "https://www.theguardian.com/world/ng-interactive/2020/apr/09/how-coronavirus-spread-across-the-globe-visualised",
			"image": img2,
			"title": "How coronavirus spread across the globe - visualised",
			"description": "Desde sus comienzos en China, la pandemia del COVID-19 se ha esparcido rapidamente alrededor del mundo",
			"category": "📜🖼️🎥🎚️",
			"readtime": "🕐 5 min"},
		"03":  {"link":"https://www.youtube.com/watch?v=s2jQ9BSIbXQ&list=PLnxJP601LarGKt_zbttd3uyl_MqVLW2s1&index=272",
			"image": img3,
			"title": "JHU’s Daily COVID-19 Data in Motion",
			"description": "Visualizacion diaria sobre datos relacionados al COVID-19",
			"category": "🎥",
			"readtime": "🕐 1 min"},
		"04":  {"link":"https://covid19.who.int/",
			"image": img4,
			"title": "WHO Coronavirus (COVID-19) Dashboard",
			"description": "Dashboard sobre la situacion actual del COVID-19, proveida por la OMS",
			"category": "🖼️🎚️",
			"readtime": "🕐 a gusto"},
		"05":  {"link":"https://datastudio.google.com/u/0/reporting/1ANWDgSeti4SJLJ9L07Rs1s_Sr4kVA-SQ/page/0CTJB",
			"image": img5,
			"title": "COVID-19 Dashboard para CAPV",
			"description": "Dashboard sobre la situacion de pandemia del COVID-19 en el País Vasco",
			"category": "🖼️🎚️",
			"readtime": "🕐 a gusto"},
		"06":  {"link":"https://graphics.reuters.com/world-coronavirus-tracker-and-maps/vaccination-rollout-and-access/",
			"image": img6,
			"title": "COVID-19 Vaccination Tracker",
			"description": "Informacion sobre los planes de vacunacion a nivel global",
			"category": "📜🖼️🎥🎚️",
			"readtime": "🕐 10 min"},
		"07":  {"link":"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/",
			"image": img7,
			"title": "Why outbreaks like coronavirus spread exponentially, and how to “flatten the curve”",
			"description": "Explicacion de como se esparcen brotes como el coronavirus y como aplanar la curva, con simulaciones",
			"category": "📜🖼️🎥🖥️🎚️",
			"readtime": "🕐 10 min"},
		"08":  {"link":"https://public.tableau.com/app/profile/surveymonkey/viz/Childvaccineupdate/Newdashboard",
			"image": img8,
			"title": "Would you be willing to get your child(ren) of the following ages vaccinated against COVID-19?",
			"description": "Visualizacion de encuesta sobre vacunacion infantil, conformada por la opinion de 27.066 padres",
			"category": "🖼️🎥🎮",
			"readtime": "🕐 a gusto"},
		"09":  {"link":"http://www.r2d3.us/covid-19/?from=@",
			"image": img9,
			"title": "Making sense of COVID19 through simulations",
			"description": "Comprendiendo la pandemia a partir de simulaciones",
			"category": "📜🖼️🎥🖥️🎚️🎮",
			"readtime": "🕐 20 min"},
		"10":  {"link":"https://meltingasphalt.com/interactive/outbreak/",
			"image": img10,
			"title": "Outbreak",
			"description": "Visualizando como se esparcen las epidemias en general, con la ayuda de simulaciones jugables",
			"category":  "📜🖼️🖥️🎮",
			"readtime": "🕐 30 min"},
		"11":  {"link":"https://www.magisnet.com/2020/03/como-abordar-el-coronavirus-desde-las-diferentes-materias/",
			"image": img11,
			"title": "Cómo abordar el coronavirus desde las diferentes materias",
			"description": '"Hablamos con profesores de diferentes asignaturas que aprovechan esta crisis para explicar a sus alumnos algunos contenidos curriculares."',
			"category":  "📜",
			"readtime":  "🕐 15 min"},
		"12":  {"link": "https://www.visualcapitalist.com/history-of-pandemics-deadliest/",
			"image": img12,
			"title": "Visualizing the History of Pandemics",
			"description": "Articulo sobre la historia de las pandemias",
			"category":  "📜🖼️",
			"readtime": "🕐 10 min"},
		"13":  {"link":"https://thespinoff.co.nz/media/12-05-2021/the-great-toby-morris-siouxsie-wiles-covid-19-omnibus/",
			"image": img13,
			"title": "The bumper Toby Morris & Siouxsie Wiles Covid-19 box set",
			"description": "coleccion de animaciones estilo comic que difunde conceptos de la pandemia COVID-19 y precauciones que debemos de tomar en la misma",
			"category":  "📜🖼️🎥",
			"readtime": "🕐 20 min"},
		"14":  {"link":"https://multimedia.scmp.com/infographics/news/china/article/3047038/wuhan-virus/es/index.html?src=social&fbclid=IwAR1gxx2lw6uuKbUOkNFWsMZvAFPFatgd--40nYQwyH5PiL4RK_7MHCxlcDs",
			"image": img14,
			"title": "Historia del coronavirus y su enfermedad, la COVID-19. Una narración visual",
			"description": '"A pesar de los grandes esfuerzos realizados por China para contenerlo, el nuevo coronavirus se ha extendido rápidamente por el mundo. Muchos países han tomado medidas inéditas y están poniendo en cuarentena a todo viajero que llegue a sus territorios. A continuación se explica pormenorizadamente cómo empezó la pandemia que hoy preocupa a todo el planeta."',
			"category":  "📜🖼️🎥",
			"readtime": "🕐 25 min"}
	       }
insert = document.getElementById("insert")

function newCard(link, img, title, desc, date, rt){
    insert
	.insertAdjacentHTML("beforeend",
   `<a href=${link} target="_blank" class="card">
      <div class="card__overlay">
        <span>Ver Más</span>
      </div>
      <div class="card__image" style="background-image: url(${img});"></div>
      <div class="card__content">
	<div class="card__title"> ${title} </div>
	<div class="card__description">
	  ${desc}
	</div>
      </div>
      <div class="card__date">${date}</div>
      <div class="card__readtime">${rt}</div>
    </a>
`);

}


for (let i = 0; i < Object.keys(cardData).length; i++) {
    let cardIndex = i < 9 ? "0"+String(i+1) : String(i+1)
    
    newCard(cardData[cardIndex]["link"],
	    cardData[cardIndex]["image"],
	    cardData[cardIndex]["title"],
	    cardData[cardIndex]["description"],
	    cardData[cardIndex]["category"],
	    cardData[cardIndex]["readtime"])
}

