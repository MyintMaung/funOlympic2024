
      // Wait for the DOM to fully load
      // Wait for the DOM to fully load
      document.addEventListener("DOMContentLoaded", function () {
        // Get the sports selection dropdown
        const sportsSelect = document.getElementById("sports-select");

        // Get the sections that contain the content for each sport
        const swimmingSection = document.querySelector(".swimming");
        const basketballSection = document.querySelector(".basketball");
        const badmintonSection = document.querySelector(".badminton");
        const tennisSection = document.querySelector(".tennis");
        const hockeySection = document.querySelector(".hockey");
        const footballSection = document.querySelector(".football");
        const archerySection = document.querySelector(".archery");
        const gymSection = document.querySelector(".gym");


        // Function to hide all sport sections
        function hideAllSections() {
          const sections = [
            swimmingSection,
            basketballSection,
            badmintonSection,
            tennisSection,
            hockeySection,
            footballSection,
            archerySection,
            gymSection
          ];
          sections.forEach((section) => (section.style.display = "none"));
        }



        // Initially hide all sport sections
        hideAllSections();
      
        // Add an event listener to the sports dropdown
        sportsSelect.addEventListener("change", function () {
          console.log("Dropdown changed"); // To ensure the event listener is working
          const selectedSport = sportsSelect.value;
          console.log(`Selected sport: ${selectedSport}`);

          // Hide all sections initially
          hideAllSections();

          // Get the corresponding section based on the selected sport
          let selectedSection = null;

          switch (selectedSport) {
            case "Swimming":
              selectedSection = swimmingSection;
              break;
            case "Basketball":
              selectedSection = basketballSection;
              break;
            case "Badminton":
              selectedSection = badmintonSection;
              break;
            case "Tennis":
              selectedSection = tennisSection;
              break;
            case "Hockey":
              selectedSection = hockeySection;
              break;
            case "Football":
              selectedSection = footballSection;
              break;
            case "Archery":
              selectedSection = archerySection;
              break;
            case "Gym":
              selectedSection = gymSection;
              break;
          }

          // Show the appropriate section and change its background color
          // if (selectedSection) {
          //   selectedSection.style.display = "block";
          //   selectedSection.style.backgroundColor = sportColors[selectedSport];
          // } 

          if (selectedSection) {
            console.log(`Displaying section: ${selectedSport}`);
            selectedSection.style.display = "block";
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        const sportsSelect = document.getElementById("sports-select");

        sportsSelect.addEventListener("change", function () {
          const selectedSport = sportsSelect.value;
          if (selectedSport === "Basketball") {
            document.querySelector(".basketball").style.display = "block";
          } else {
            document.querySelector(".basketball").style.display = "none";
          }
        });
      });
