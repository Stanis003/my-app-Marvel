

class MarvelService {

    getResource = async (url) => {

        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = ()=>{
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=a373e146fd59f5a1eac1e30c998c5dff');


    }
}
export default MarvelService;