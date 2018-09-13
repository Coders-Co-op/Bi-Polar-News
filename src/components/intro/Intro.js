
import React from 'react';
import './intro.css'
import liberal from '../../images/liberal-news-sources.png'
import conservative from '../../images/conservative-news-sources.png'

export default () => {
  return (
    <section>
      <div className="card-box">

        <div className="rflex">
          <figure>
            <img className="desktop-left" src={liberal} />
          </figure>
          <div>
            <h1>Compare &amp; Contrast<br />
              Liberal and Conservative News Sources</h1>
          <p>America's news has become so <i>polarized</i> that we have become “a nation divided” -- Red vs Blue -- bi-polar. So, to promote national unity, the BiPolar News gives you the chance to see both sides of major news stories.</p>

          <p>This app presents you with two articles on major news topics, one from a premier conservative news source and the other from a premier liberal news source. The BiPolar News lets you read and compare, with an eye out for biased reporting. </p>
          </div>
          <figure >
            <img className="desktop-right" src={conservative} />
          </figure>
        </div>

      </div>
    </section>
  )
}
