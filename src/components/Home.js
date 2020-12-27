import React, { Component } from "react";
import SliderComp from './SliderComp';
import Slider from 'infinite-react-carousel';
import MovieBrowser from '../modules/movie-browser/movie-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Home extends Component {
    render(){
      const settings = {
        autoplay : true,
        autopalySpeed : 4000,
        pauseOnHover : false
      };
    
      return(
          <div style={{width: "90%",height: "80%"}} className='container'>
              <Slider { ...settings }>
                  <div>
                    <div class="swiper-slide" style= {{ backgroundImage : "url(https://image.tmdb.org/t/p/w1280/upUy2QhMZEmtypPW3PdieKLAHxh.jpg)", width : "1270"}} >
                      <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/" class="slide-link" title="Bad Boys for Life (2020)"> </a>
                      <span class="slide-caption">
                        <h2>Bad Boys for Life</h2>
                        <p class="sc-desc">Marcus Burnett is now a police inspector and Mike Lowery is in a midlife crisis. They unite again when an Albanian mercenary, whose brother they killed, promises them an important bonus....</p>
                          <div class="slide-caption-info">
                                <div class="block"><strong>Genre: </strong>Action, Crime</div>
                                <div class="block"><strong>Duration:</strong> 124 min</div>
                                <div class="block"><strong>Release:</strong> 2020</div>
                                <div class="block"><strong>IMDb:</strong> 7.2</div>
                          </div>
                        <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/10/watching/">
                          <div class="btn btn-successful mt20">Watching</div>
                        </a>
                      </span> 
                    </div>
                    </div>
                  <div>
                  <div>
                    <div class="swiper-slide" style= {{ backgroundImage : "url(https://image.tmdb.org/t/p/w1280/upUy2QhMZEmtypPW3PdieKLAHxh.jpg)"}} >
                      <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/" class="slide-link" title="Bad Boys for Life (2020)"> </a>
                      <span class="slide-caption">
                        <h2>Bad Boys for Life</h2>
                        <p class="sc-desc">Marcus Burnett is now a police inspector and Mike Lowery is in a midlife crisis. They unite again when an Albanian mercenary, whose brother they killed, promises them an important bonus....</p>
                          <div class="slide-caption-info">
                                <div class="block"><strong>Genre: </strong>Action, Crime</div>
                                <div class="block"><strong>Duration:</strong> 124 min</div>
                                <div class="block"><strong>Release:</strong> 2020</div>
                                <div class="block"><strong>IMDb:</strong> 7.2</div>
                          </div>
                        <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/10/watching/">
                          <div class="btn btn-successful mt20">Watching</div>
                        </a>
                      </span> 
                    </div>
                    </div> 
                  </div>
                  <div>
                  <div>
                    <div class="swiper-slide" style= {{ backgroundImage : "url(https://image.tmdb.org/t/p/w1280/upUy2QhMZEmtypPW3PdieKLAHxh.jpg)"}} >
                      <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/" class="slide-link" title="Bad Boys for Life (2020)"> </a>
                      <span class="slide-caption">
                        <h2>Bad Boys for Life</h2>
                        <p class="sc-desc">Marcus Burnett is now a police inspector and Mike Lowery is in a midlife crisis. They unite again when an Albanian mercenary, whose brother they killed, promises them an important bonus....</p>
                          <div class="slide-caption-info">
                                <div class="block"><strong>Genre: </strong>Action, Crime</div>
                                <div class="block"><strong>Duration:</strong> 124 min</div>
                                <div class="block"><strong>Release:</strong> 2020</div>
                                <div class="block"><strong>IMDb:</strong> 7.2</div>
                          </div>
                        <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/10/watching/">
                          <div class="btn btn-successful mt20">Watching</div>
                        </a>
                      </span> 
                    </div>
                    </div> 
                  </div>
                  <div>
                  <div>
                    <div class="swiper-slide" style= {{ backgroundImage : "url(https://image.tmdb.org/t/p/w1280/upUy2QhMZEmtypPW3PdieKLAHxh.jpg)"}} >
                      <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/" class="slide-link" title="Bad Boys for Life (2020)"> </a>
                      <span class="slide-caption">
                        <h2>Bad Boys for Life</h2>
                        <p class="sc-desc">Marcus Burnett is now a police inspector and Mike Lowery is in a midlife crisis. They unite again when an Albanian mercenary, whose brother they killed, promises them an important bonus....</p>
                          <div class="slide-caption-info">
                                <div class="block"><strong>Genre: </strong>Action, Crime</div>
                                <div class="block"><strong>Duration:</strong> 124 min</div>
                                <div class="block"><strong>Release:</strong> 2020</div>
                                <div class="block"><strong>IMDb:</strong> 7.2</div>
                          </div>
                        <a href="https://ww3.fmovie.sc/online/bad-boys-for-life-2020/10/watching/">
                          <div class="btn btn-successful mt20">Watching</div>
                        </a>
                      </span> 
                    </div>
                    </div> 
                  </div>
              </Slider>
              
            </div>
            

        )
    }
}

export default Home;