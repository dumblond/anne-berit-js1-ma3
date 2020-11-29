const url = "https://api.rawg.io/api/gamess?dates=2019-01-01,2019-12-31&ordering=-rating";

const dataContainer = document.querySelector(".games");

async function games() {

    try {

        const response = await fetch(url);
    
        const results = await response.json();

        console.log(results);
    
        const facts = results.results;
    
        dataContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts[i].tags.length)

            if (i === 8) {
                break;
            }

            dataContainer.innerHTML += `
            <div class="game">
                <h2>${facts[i].name}</h2>
                <p>Rating: ${facts[i].rating}</p>
                <p>Number of tags: ${facts[i].tags.length}</p>
            </div>`
        }
    } catch (error) {
        console.log("Something went wrong");
        dataContainer.innerHTML = displayError("Something is wrong")
    }
}

games();