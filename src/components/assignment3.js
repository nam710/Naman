 import './assignment3.css'
 import { useEffect, useState } from "react";
 import avatar from './avatar.mp4';
 import looper from './looper.mp4';
 import hobbit from './hobbit.mp4';
 import oblivion from './oblivion.mp4';
 import netflix from './netflix.mp4';
 import './details.js'
import Description from './details.js';
const WebStream = () =>
{

    
   
    const [mainDes, setMainDes] = useState(0)
    var c=0;
    



    const [mainVid, setMainVid] = useState(netflix)
    const vid1="./avatar.mp4";
    const vid2="./looper.mp4";
    const vid3="./hobbit.mp4";
    const vid4="./oblivion";

    const setVideo = (c, vid) => {
      setMainVid(vid);
      setMainDes(c);
    }
   
    return(
    
     <div>

       <div className="container-fluid" style={{backgroundColor:"black",color:"white"}}>
         <div className="row">
         <div className="col-md-8">
         <img className="img-fluid top-img" src="https://wallpaperaccess.com/full/712404.jpg"></img>
         </div>
           <div className="col-md-4">
             <h3 style={{marginTop:"80px",fontFamily: "'Architects Daughter',cursive" }}>Over 10000 Movies and Webseries to choose from...</h3>
             <p style={{marginTop:"50px",color:"cyan",fontSize:"23px",fontFamily: "'Architects Daughter',cursive" }}>
               "I GOT THE POPCORN,you CUE UP Netflix!"
             </p>
             <input className="form-control mt-3" placeholder="Search Your Shows" type="search"/>
             <button className="btn btn-success mt-4 me-4">Renew Subscription</button>
             <button className="btn btn-success mt-4 ">View Perks</button>
           </div>
         </div>
       </div>
       
      <div className="container" >
       <div id="slider">
					  <figure>
						    <img src="https://miro.medium.com/max/8694/1*zpEf8fboJKQKFeFeE9AaDg.png"/>
						    <img src="https://dailyresearchplot.com/wp-content/uploads/2020/11/MOney-Heist-Season-5.jpg"/>
						    <img src="https://wallpaperaccess.com/full/712422.jpg"/>
                <img src="https://cdn.thetealmango.com/wp-content/uploads/2021/07/lucifer-1.jpg"/>
					  </figure>
				</div>
        </div>


    <div className="row stick">
      <div className="col-md-2 leftbar">
        <h2>CATEGORIES</h2>

        <h3><a href="">New Releases</a></h3>
        <h3><a href="">Coming Soon</a></h3>
        <h3><a href="">Popular Serials</a></h3>
        <h3><a href="">Trailers</a></h3>
        <h3><a href="">Genres</a></h3>

        <hr/>

        <h2>YOUR LIBRARY</h2>
        <h3><a href="">Favourites</a></h3>
        <h3><a href="">Watchlist</a></h3>
      </div>

      <div className="col-md-6 trailer">
        <video className="card-img-top"src={mainVid} controls autoplay></video>
      </div>
      <div className="col-md-4 description">
        <Description c={mainDes} />
      </div>
    </div>
   
      <div style={{paddingLeft:"15px",paddingBottom:"2px",backgroundColor:"rgba(56,56,56,0.89)",color:"white"}}>
        <h3>Currently Watching</h3>
      </div>
    
    <div className="row mt-2 align">
      <div className="col-md">
        <div >
         <img className="img-fluid card-img-top imgs" src="https://wallpaperaccess.com/full/1076854.jpg" alt="" onClick={(e) => {setVideo(1, avatar)}}/>
          <i className="fa fa-play-circle"></i>
          
        </div>
      </div>
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://keithandthemovies.files.wordpress.com/2012/09/looper-poster.jpg" alt="" onClick={(e) => {setVideo(2,looper)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
     
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://www.wallpaperbetter.com/wallpaper/508/922/427/the-hobbit-the-battle-of-the-five-armies-poster-1080P-wallpaper.jpg" alt="" onClick={(e) => {setVideo(3,hobbit)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://wallpaperaccess.com/full/535092.jpg" alt="" onClick={(e) => {setVideo(4,oblivion)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      
    </div>
    <div style={{paddingLeft:"15px",paddingBottom:"2px",backgroundColor:"rgba(56,56,56,0.89)",color:"white"}}>
        <h3>Popular Sci-Fi</h3>
      </div>
    
    <div className="row mt-2 align">
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://lh3.googleusercontent.com/proxy/A94G-3yWkh1HmmNjaNIXJpl2mYFc6v3n_lRLjquHd9RvfAklBBizQllpYq9jQaRQFyHbc_1ovonsuYU5PFkq726cTIS6PYI9GAYSVWONXFODkDi2Ke24XRdV3JmX9HWodBmjquJyw3_tCECVUtMM9uSl_Q" alt="" onClick={(e) => {setVideo(5,avatar)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://wallpapercave.com/wp/fWnWpHj.jpg" alt="" onClick={(e) => {setVideo(6,looper)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://images.hdqwalls.com/download/john-washington-tenet-2020-4k-b7-1920x1080.jpg" alt="" onClick={(e) => {setVideo(7,hobbit)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://wallpapercave.com/wp/wp2070399.jpg" alt="" onClick={(e) => {setVideo(8,oblivion)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
    </div>
    <div style={{paddingLeft:"15px",paddingBottom:"2px",backgroundColor:"rgba(56,56,56,0.89)",color:"white"}}>
        <h3>Horror Movies</h3>
      </div>
    <div className="row mt-2 align">
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://wallpapercave.com/wp/wp1851136.jpg" alt="" onClick={(e) => {setVideo(9,avatar)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="data:image/jpeg;base64,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" alt="" onClick={(e) => {setVideo(10,looper)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://wallpaperaccess.com/full/1542592.jpg" alt="" onClick={(e) => {setVideo(11,hobbit)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://s1.dmcdn.net/v/9vYhs1LNIRSMWz83I/x1080" alt="" onClick={(e) => {setVideo(12,oblivion)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
    </div>
    <div style={{paddingLeft:"15px",paddingBottom:"2px",backgroundColor:"rgba(56,56,56,0.89)",color:"white"}}>
        <h3>Known Disney Movies</h3>
      </div>
    <div className="row mt-2 align">
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/decv63t-1993d052-fdb9-443b-9d99-8a26ebd2fa22.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGVjdjYzdC0xOTkzZDA1Mi1mZGI5LTQ0M2ItOWQ5OS04YTI2ZWJkMmZhMjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.onTflEA2vin6vv2Rr0BaGp7FOC3lkUfemsVhi_qohM0" alt="" onClick={(e) => {setVideo(13,avatar)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div   >
         <img className="img-fluid card-img-top imgs" src="https://wallpaperaccess.com/full/1643266.jpg" alt="" onClick={(e) => {setVideo(14,looper)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://wallpaperaccess.com/full/1291996.jpg" alt="" onClick={(e) => {setVideo(15,hobbit)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
      <div className="col-md">
        <div>
          <img className="img-fluid card-img-top imgs" src="https://www.wallpapertip.com/wmimgs/97-979877_big-hero-6-animation-action-adventure-disney-robot.jpg" alt="" onClick={(e) => {setVideo(16,oblivion)}} />
          <i className="fa fa-play-circle"></i>
           
        </div>
      </div>
    </div>
    <div style={{paddingLeft:"15px",paddingBottom:"2px",backgroundColor:"rgba(56,56,56,0.89)",color:"white"}}>
        <h3>Oscar Nominees and Winnings</h3>
      </div>
    <div className="scroll mt-2">
      <img
      className="img-fluid imgs"
      src="https://issiahk.org/content/images/CzD3quFpGYjWjjCI_HEADER.png"
      alt=""  onClick={(e) => {setVideo(1, avatar)}}
    />
    <i className="fa fa-play-circle"></i> <img
    className="img-fluid imgs"
    src="https://free4kwallpapers.com/uploads/originals/2015/12/17/titanic-movie-wallpaper.jpg"
    alt=""
  />
  <i className="fa fa-play-circle"></i> <img
  className="img-fluid imgs"
  src="https://wallpapercave.com/wp/wp3873604.jpg"
  alt=""
/>
<i className="fa fa-play-circle"></i> <img
className="img-fluid imgs"
src="data:image/jpeg;base64,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"
alt=""
/>
<i className="fa fa-play-circle"></i> <img
className="img-fluid  imgs"
src="https://wallpaperaccess.com/full/2840376.jpg"
alt=""
/>
<i className="fa fa-play-circle"></i> <img
className="img-fluid imgs"
src="https://wallpaperaccess.com/full/1435133.jpg"
alt=""
/>
<i className="fa fa-play-circle"></i>

    </div>
    <footer>
       <div className="container-fluid mt-5 foot">
         <span style={{color:"gray"}}>&#169; 2021 Copyright:</span>
          <span style={{marginLeft:"5px"}}>Netflix India</span>
       </div>

    </footer>



     </div>

    )



}

export default WebStream;