import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css'; 
import imdb from 'img/'

class Clockc extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>


        <div>
          <a href="https://www.imdb.com/" target="_blank">
          <img className="logo" src={imdb} > </img>
          </a>
        </div>
			<div className="banner">
				<div className="container">
					<h1>Create your account now and stay aware of:</h1>
						<ul>
							<li>Movies, TV & Showtimes</li>
							<li>Celebs, Events & Photos</li>
							<li>News & Community</li>
						</ul>
			  </div>
			</div>
			<div>
				<div>
          <a href="https://www.indiewire.com/2019/09/joker-hollywood-premiere-red-carpet-1202177161/" target="_blank">
            <img src={joker}></img>
            <p>‘Joker’: Warner Bros. Bans Interview Press From Red Carpet Ahead of Hollywood Premiere</p>
          </a>
        </div>
				<article>
          <a href="https://www.thewrap.com/black-panther-winston-duke-apple-swagger-kevin-durant/" target="_blank">
            <img src={mbaku}>
              <p>
                ‘Black Panther’ Star Winston Duke to Star in Apple’s Basketball Drama ‘Swagger’ From Kevin Durant
              </p>
            </img>
          </a>
        </article>

        <article>
          <a href="https://www.tvguide.com/news/netflix-originals-complete-guide-2019/?rss=breakingnews">
            <img src={netflix}></img>
            <p>Netflix's 2019 Originals: A Complete Guide to What's New </p>
          </a>
        </article>
			</div>
			// <footer>
			// 	<p>Follow IMDb on</p>
			// 	<a href="https://www.facebook.com/imdb" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a>
			// 	<a href="https://www.instagram.com/imdb/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
			// 	<a href="https://www.twitch.tv/IMDb/" target="_blank"><i class="fab fa-twitch fa-2x"></i></a>
			// 	<a href="https://twitter.com/imdb" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
			// 	<a href="https://www.youtube.com/IMDb/" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
			// </footer>

      </div>

    
        

    );
  }
}

function tick() {
  render(
    <Clockc date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);