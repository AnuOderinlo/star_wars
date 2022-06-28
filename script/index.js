// function main() {
    const container = document.querySelector('.container');

    const displayPanel = function (e) {
      
      // this controls the accordion
      const accElement = e.target;
      accElement.classList.toggle("active");
      const panel = accElement.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display= "none";
      } else {
        panel.style.display = "block";
      }

    }    

    // Alternatively
    // fetch('https://swapi.dev/api/people').then(function(e){
    //   return e.json();
    // }).then(function(data){
    //   console.log(data.results);
    // })
    
    
    const starWarPeople = async function () {
      const res = await fetch('https://swapi.dev/api/people');
      const { results } = await res.json();

      results.forEach((element,i) => {
        let { name, gender, height } = element;

        container.innerHTML += `
          <div class="child-container">
            <button id="acc-${i}" class="accordion" data-id="${i}" onclick="displayPanel(event)">
              ${i+1}. ${name}
            </button>
            <div class="panel">
              <img class="img" src="images/img-${i}.jpeg" alt="">
              <p>
                Name: ${name}<br>
                Heights: ${height}<br>
                Gender: ${gender}
              </p>
            </div>
          </div>
        
        `;
        
        
        
      });

    }

  

    starWarPeople()

// }

// main();

// module.exports = { main }
