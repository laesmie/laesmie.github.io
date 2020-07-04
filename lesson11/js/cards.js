/* json */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const home = towns.filter(town => (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'));

        home.forEach(town => {
            let card = document.createElement('article');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            h3.innerHTML = town.name;
            h4.innerHTML = `<em>"${town.motto}"</em>`;
            p1.innerHTML = `Year Founded:  ${town.yearFounded}`;
            p2.innerHTML = `Population:  ${town.currentPopulation}`;
            p3.innerHTML = `Annual Rain Fall:  ${town.averageRainfall}`;

            image.setAttribute('src', 'images/' + town.photo);
            image.setAttribute('alt', town.photo);

            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);            
        })
    });