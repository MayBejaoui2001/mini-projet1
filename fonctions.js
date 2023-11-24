 function redirigerVersPage() {
                  // Redirigez l'utilisateur vers la page de la liste
                  window.location.href = "ListeEmployes.html";   
              }

//Fonction de filtrage
function toggleFilter(filter) {
              var filterDetails = document.getElementById(filter + "-details");
              filterDetails.style.display = (filterDetails.style.display === "none") ? "block" : "none";
            }
            
function filterTable1() {
              var ancienneteInput = document.getElementById("anciennete-input");
              var villeInput = document.getElementById("ville-input");
              var nomInput = document.getElementById("nom-input");
              var prenomInput = document.getElementById("prenom-input");
              var rows = document.getElementById("dataTable").getElementsByTagName("tr");
        
              var ancienneteValue = ancienneteInput.value.toLowerCase();
              var nomValue = nomInput.value.toLowerCase();
              var prenomValue =prenomInput.value.toLowerCase();

              var villeValue = villeInput.value.toLowerCase();
              for (var i = 1; i < rows.length; i++) {
                var lastname = rows[i].getElementsByTagName("td")[0].innerText.toLowerCase();
                var name = rows[i].getElementsByTagName("td")[1].innerText.toLowerCase();

                var anciennete = rows[i].getElementsByTagName("td")[2].innerText.toLowerCase();
          
                var adresseCell = rows[i].getElementsByTagName("td")[3];
                var adresseElements = adresseCell.querySelectorAll("div");
          
                var adresse = "";
                for (var j = 0; j < adresseElements.length; j++) {
                  adresse += adresseElements[j].innerText.toLowerCase() + " ";
                }
                adresse = adresse.trim();
          
                if (anciennete.includes(ancienneteValue) && adresse.includes(villeValue) && lastname.includes(nomValue)  && name.includes(prenomValue)) {
                  rows[i].style.display = "";
                } else {
                  rows[i].style.display = "none";
                }
              }
            }
 function toggleFilter(filter) {
              var filterDetails = document.getElementById(filter + "-details");
              filterDetails.style.display = (filterDetails.style.display === "none") ? "block" : "none";
            }
         
      
    
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
    filterTable();
    }
    }


    // Redirigez l'utilisateur vers la page statistiques
  /*
   function redirigerVersPage() {
            window.location.href = "statistiques.html";
          }
   */ 

      
  function toggleFilterOptions() {
        var filterOptions = document.getElementById('filter-options');
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'block' : 'none';
      }

      //fonction de recherche
    
  function filterTable() {
    var input = document.getElementById("searchInput").value.toLowerCase();
   
    var rows = document.getElementById("dataTable").getElementsByTagName("tr");
    
    for (var i = 1; i < rows.length; i++) {
    var name = rows[i].getElementsByTagName("td")[0].innerText.toLowerCase();
    var lastname = rows[i].getElementsByTagName("td")[1].innerText.toLowerCase();
    var anciennté = rows[i].getElementsByTagName("td")[2].innerText.toLowerCase();
    var adresseCell = rows[i].getElementsByTagName("td")[3];
    var adresseElements = adresseCell.querySelectorAll("div");
    
    var adresse = "";
    for (var j = 0; j < adresseElements.length; j++) {
    adresse += adresseElements[j].innerText.toLowerCase() + " ";
    }
    adresse = adresse.trim();
    
    if (name.includes(input) || lastname.includes(input) || anciennté.includes(input) || adresse.includes(input)) {
    rows[i].style.display = "";
    } else {
    rows[i].style.display = "none";
    }
    }
    }

//changer la couleur de l'anciennté selon sa valeur
  window.addEventListener('DOMContentLoaded', function() {
    var rows = document.querySelectorAll('tr'); // Sélectionne toutes les lignes du tableau

    for (var i = 1; i < rows.length; i++) {
      var cell = rows[i].getElementsByTagName("td")[2]; 
      
      var anciennete = parseInt(cell.innerText);
      if (anciennete < 3) {
        cell.classList.add('orange'); 
        cell.style.fontWeight = 'bold';

      } else {
        cell.classList.add('green');  
        cell.style.fontWeight = 'bold';

      }
    }
  });
