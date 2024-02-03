function onSearchInputChange() {
      var inputValue = document.getElementById("searchInput").value.toLowerCase();
      var resultBiratnagarSiddharthaChowk = document.getElementById("resultBiratnagarSiddharthaChowk");
      var resultBiratnagarMahendraChowk = document.getElementById("resultBiratnagarMahendraChowk");
       var resultBiratnagarRoadsisChowk = document.getElementById("resultBiratnagarRoadsisChowk");
      var resultBiratnagarAdarshaTole = document.getElementById("resultBiratnagarAdarshaTole");
      var displayedValue = document.getElementById("displayedValue");

      // Check if the typed value matches "BiratnagarSiddharthaChowk" or "BiratnagarMahendraChowk" letter by letter
      if (inputValue.includes("b") || inputValue.includes("b")) {
        // Display the matched value automatically
        resultBiratnagarSiddharthaChowk.textContent = "Biratnagar | Siddhartha Chowk";
        resultBiratnagarMahendraChowk.textContent = "Biratnagar | Mahendra Chowk";
         resultBiratnagarRoadsisChowk.textContent = "Biratnagar | Roadsis Chowk";
        resultBiratnagarAdarshaTole.textContent = "Biratnagar | Adarsha Tole";
        document.getElementById("searchResult").style.display = "block";
      } else {
        // Hide the search results if the value doesn't match
        document.getElementById("searchResult").style.display = "none";
      }

      // Handle click on "BiratnagarSiddharthaChowk"
      resultBiratnagarSiddharthaChowk.onclick = function() {
        // Display the clicked value in another paragraph
        displayedValue.textContent = "Clicked: " + resultBiratnagarSiddharthaChowk.textContent;

        // Store the clicked value in local storage
        localStorage.setItem("selectedValue", resultBiratnagarSiddharthaChowk.textContent);
      };

      // Handle click on "BiratnagarMahendraChowk"
      resultBiratnagarMahendraChowk.onclick = function() {
        // Display the clicked value in another paragraph
        displayedValue.textContent = "Clicked: " + resultBiratnagarMahendraChowk.textContent;

        // Store the clicked value in local storage
        localStorage.setItem("selectedValue", resultBiratnagarMahendraChowk.textContent);
      };
    }

    // Check if a value is stored in local storage and display it
 document.getElementById("searchResult").addEventListener("click", function(event) {
      var clickedValue = event.target.textContent;
      if (clickedValue !== "") {
        // Save the clicked value in local storage
        localStorage.setItem("selectedValue", clickedValue);

        // Open a new page (replace with your desired URL)
        window.open("index.html", "_blank");
      }
    });
