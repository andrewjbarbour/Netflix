const apikey = "c3c12dba";

const Api = {

    search(searchTerm){
        return fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`)
        .then(response => {
            return response.json();
        }).then(jsonResponse => {
                return jsonResponse.Search.map(movie => ({
                Poster: movie.Poster,
                }));
            });
        } 
}

export default Api;