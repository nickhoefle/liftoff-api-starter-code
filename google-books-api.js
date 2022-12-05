function searchForTopResult(userSearchTerm) {

    let urlBeginning = "https://www.googleapis.com/books/v1/volumes?q=";
    let searchTerm;
    let urlEnding = "&key=AIzaSyA_fNlN4nm1Dkba-D2XE1smV04vA5_42zY";
    
    searchTerm = document.getElementById("userSearchTerm").value;

    let url = urlBeginning + searchTerm + urlEnding;
    
    fetch(url).then(function(response) {
        response.json().then( function(json) { 
            console.log(json.items[0]);
            const div = document.getElementById("topResult");
            div.innerHTML = `
            <h2>Book Name: ${json.items[0].volumeInfo.title}</h2>
            <h3>Synopsis: ${json.items[0].volumeInfo.description}</h3>
            <img src=${json.items[0].volumeInfo.imageLinks.thumbnail}>
            `
        })
    });

}

//https://developers.google.com/books/docs/v1/using#PerformingSearch
//https://education.launchcode.org/intro-to-professional-web-dev/chapters/fetch/fetch.html
