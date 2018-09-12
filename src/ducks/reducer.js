const initialState = {
    text: '',
    articles: [],
    indexArt1: 0,
    indexArt2: 1
}

const GET_ARTICLES = "GET_ARTICLES";
const UPDATE_INDEX_ART1_AND_INDEX_ART2 = "UPDATE_INDEX_ART1_AND_INDEX_ART2";

export function getFiveArticles(res) {
    return {
        type: GET_ARTICLES,
        payload: res
    }
}
export function updateIndexArt1AndIndexArt2(index1, index2) {
    return {
        type: UPDATE_INDEX_ART1_AND_INDEX_ART2,
        payload: [index1, index2]
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return Object.assign({}, state, { articles: action.payload })
        case UPDATE_INDEX_ART1_AND_INDEX_ART2:
            return Object.assign({}, state, {indexArt1: action.payload[0], indexArt2: action.payload[1]});
        default:
            return state;
    }

}