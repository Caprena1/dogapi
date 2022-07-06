function woofButton() {
fetch('https://api.thedogapi.com/v1/images/search?size=full')
    .then(response => response.json())
    .then(dogs => {
        console.table(dogs) //JUST TO SEE OBJECTS AND ARRAYS BETTER
        // dogs.breeds.forEach(breed => { - DON'T NEED FOREACH IN THIS CASE BECAUSE IT'S AN OBJECT WITH ONLY ONE ARRAY
        const dogBreeds = dogs[0].breeds[0].name //DEEP-IN DOG[ARRAY] AND SEVERAL PROPERTIES, AND BREEDS[ARRAY]-WHICH HAS ONE OBJECT AND SEVERAL PROPERTIES, 
        const cardElement = document.createElement('div') //DO THESE TWO LINES OF CODE TO FLEX THE API
        cardElement.classList.add('card')
        
        const breedsElement = document.createElement('h1') //SECOND - CREATE ELEMENT
        breedsElement.textContent = (`Name of Breed: ${dogBreeds}`) //THIRD - PUT TEXT INSIDE THE DIV
        cardElement.appendChild(breedsElement) //FOURTH - ADD IT TO THE REST OF THE EXISTING INFO IN HTML
        console.log(breedsElement)

        
        const breedgroupElement = document.createElement('h2') 
        breedgroupElement.textContent = (`Breed Group: ${dogs[0].breeds[0].breed_group}`) 
        cardElement.appendChild(breedgroupElement) 
        console.log(breedgroupElement)

        const lifespanElement = document.createElement('h3') 
        lifespanElement.textContent = (`Lifespan of Breed: ${dogs[0].breeds[0].life_span}`) 
        cardElement.appendChild(lifespanElement) 
        console.log(lifespanElement)

        const temperamentElement = document.createElement('p') 
        temperamentElement.textContent = (`Temperament of Breed: ${dogs[0].breeds[0].temperament}`) 
        cardElement.appendChild(temperamentElement) 
        console.log(temperamentElement)

        const imgDescripElement = document.createElement('div') 
        imgDescripElement.textContent = (`Image of Breed:`)
        cardElement.appendChild(imgDescripElement) 
        console.log(imgDescripElement)
        
        imageElement = document.createElement('img') 
        imageElement.src = dogs[0].url 
        cardElement.appendChild(imageElement) 
        console.log(imageElement)

        document.querySelector('#dogs').appendChild(cardElement)

})
    .catch(error => {
        alert('There was an error' + error)
    })

}

