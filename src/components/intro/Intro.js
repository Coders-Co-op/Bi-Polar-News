
import React from 'react';
import './intro.css'


export default () => {
  return (
    <section>
      <div className="card-box">

        <div className="rflex">
          <figure className="desktop-left">
            <img src='../images/liberal-and-conservative-news-sources.png' width='200' height='300' />
          </figure>
          <div>
            <h1>Compare &amp; Contrast<br />
              Liberal and Conservative News Sources</h1>
          <p>America's news has become so polarized that we have become “a nation divided” - Red vs Blue. So, to promote national unity, the BiPolar News gives you the chance to see both sides of major news stories.</p>

          <p>This app presents you with two articles on major news topics, one from a premier conservative news source and the other from a premier liberal news source. The BiPolar News lets you read and compare, with an eye out for biased reporting. </p>
          </div>
          <figure className="desktop-right">
            <img src='../images/liberal-and-conservative-news-sources.png' width='200' height='300' />
          </figure>
        </div>

      </div>
    </section>
  )
}
