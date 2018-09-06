const initialState = {
    text: '',
    articles: []
}

const GET_ARTICLES = "GET_ARTICLES";

export function getFiveArticles(res) {
    return {
        type: GET_ARTICLES,
        payload: res
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
        return Object.assign({}, state, { articles: action.payload })

        default:
            return state;
    }

}