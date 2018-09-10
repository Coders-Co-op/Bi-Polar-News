import React from "react";
import _ from "lodash";

export default function(props) {
  let { content, source } = props;

  // intiate regular expressions
  let cnn = /cnn/gi;
  let fox = /foxnews|fox news|fox/gi;

  content = _.replace(content, cnn, "[news agency]");
  content = _.replace(content, fox, "[news agency]");
  return <span>{content}</span>;
}
