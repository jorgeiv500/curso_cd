// ColabButtonPlugin.js

(function() {
	// Función para inicializar el botón
	function initializeColabButton() {
	  // Crear el botón
	  const colabButton = document.createElement("button");
  
	  // Establecer el estilo del botón para que sea flotante y redondo
	  colabButton.style.position = "fixed";
	  colabButton.style.bottom = "20px";
	  colabButton.style.left = "10%"; // Cambiado a izquierda
	  colabButton.style.width = "50px";
	  colabButton.style.height = "50px";
	  colabButton.style.borderRadius = "50%";
	  colabButton.style.backgroundColor = "rgba(66, 133, 244, 0.7)"; // Con transparencia
	  colabButton.style.border = "none";
	  colabButton.style.cursor = "pointer";
	  colabButton.style.zIndex = "1000";
  
	  // Crear un elemento de imagen para el logo de Google Colab
	  const colabLogo = document.createElement("img");
	  colabLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/1280px-Google_Colaboratory_SVG_Logo.svg.png"; // Logo de Google Colab
	  colabLogo.style.width = "100%";
	  colabLogo.style.height = "auto";
  
	  // Agregar el logo al botón
	  colabButton.appendChild(colabLogo);
  
	  // Función para abrir Google Colab cuando se haga clic en el botón
	  colabButton.onclick = function() {
		window.open("https://colab.research.google.com/", "_blank");
	  };
  
	  // Agregar el botón al cuerpo del documento
	  document.body.appendChild(colabButton);
	}
  
	// Inicializar el botón cuando se cargue la página
	window.addEventListener("load", initializeColabButton);
  })();
  