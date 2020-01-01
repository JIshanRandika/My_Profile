import React, {Component} from 'react';
import {Link} from 'react-router-dom'


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                  <Link to={`${item.router}`}>
                  <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                    {/*<link href="%PUBLIC_URL%/css/layout.css"></link>*/}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.date}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                </div>
                  </Link>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}