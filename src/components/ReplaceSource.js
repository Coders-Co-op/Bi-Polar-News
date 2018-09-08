import React from 'react'
import _ from 'lodash'

export default (content, source) => {
    if (source === "CNN") {
        _.replace(content, "CNN", "[this news agency]");
        _.replace(content, "Fox", "[another news agency");
        _.replace(content, "Fox News", "[another news agency]")
        _.replace(content, "FoxNews", "[another news agency]"),
            _.replace(content, "FoxNews", "[another news agency]")
    } else {
        _.replace(content, "CNN", "[another news agency]");
        _.replace(content, "Fox", "[this news agency")
        _.replace(content, "Fox News", "[this news agency]")
        _.replace(content, "FoxNews", "[this news agency]")
        _.replace(content, "FoxNews", "[this news agency]")
    }
    return (
        <span>

        </span>
    )
}
