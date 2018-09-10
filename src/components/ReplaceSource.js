import React from 'react'
import _ from 'lodash'
// import {articles} from "./ducks/reducer";
// import {connect} from 'react-redux';

export default function (props) {

    let {content,source} = props

    // intiate regular expressions
        let cnn = /cnn/gi;
        let fox = /foxnews|fox news|fox/gi;

        
        if (source === "CNN") {
           content = _.replace(content, cnn, "[this news agency]");
           content = _.replace(content, fox, "[another news agency]");
        } else {
            content = _.replace(content, cnn, "[another news agency]");
            content = _.replace(content, fox, "[this news agency]");
        }
    return (
        <span>{content}</span>
    )
}

