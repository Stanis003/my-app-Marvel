
import { useHttp } from "../hooks/http.hooks";
const useMarvelService = () => {
    const { loading, request, error, clearErro } = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const  _apiKey = 'apikey=a373e146fd59f5a1eac1e30c998c5dff';
   const _baseOffset = 210;



    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + `.` + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return { loading, error, getAllCharacters, getCharacter, clearErro }
}
export default useMarvelService;