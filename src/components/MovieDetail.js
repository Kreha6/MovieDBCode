import React from 'react';
import {Movie} from './'

export const MovieDetail = ({movie, phase}) => {
  if (phase === 0) {
    return (
      <div className="col-md-8 hidden-xs hidden-sm">
        <div className="hint">
          <span>
            <span className="glyphicon glyphicon-circle-arrow-up hint-arrow"></span><br/>
            <h3>Type a movie you are looking for</h3>
          </span>
        </div>
      </div>
    )
  }
  if (phase === 1) {
    return (
      <div className="col-md-8 hidden-xs hidden-sm">
        <div className="hint">
          <span>
            <h3>Choose movie from this list</h3>
            <span className="glyphicon glyphicon-circle-arrow-left hint-arrow"></span><br/>
          </span>
        </div>
      </div>
    )
  }
  if (phase === 2) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-8">
        <Movie movie ={movie}/>
      </div>
    )
  }
}
