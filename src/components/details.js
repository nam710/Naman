const Description = (props) =>{
  
  

    if(props.c==1){
       
        return(
          <div className="info scroll2">
              <h2>AVATAR</h2>
              <p style={{lineHeight:"30px"}}>A paraplegic Marine dispatched to the moon
              Pandora on a unique mission,becomes torn following
              orders and protecting the world he feels is his
              home.When his brother is killed in a robbery
              ,paraplegic Marine Jake Sully decides to take his
              place in a mission on the distant world of Pandora.</p>
               
              <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>
              
          </div>
        )
       }
    else if(props.c==2){
         return(
            <div className="info scroll2">
                  <h2>LOOPER</h2>
                  <p style={{lineHeight:"30px"}}>In a future society,time-travel exists,but it's
                  only available for those with the means to pay for it
                  on the black market.When the mob wants to eliminate
                  someone,it sends the target into the past,where a hitman
                  known as looper lies in wait to finish the job.Series of
                  events happen which leads the looper into killing
                  his past self.</p>

                  <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>
            </div>

         )
    }else if(props.c==3){
      return (
        <div className="info scroll2">
              <h2>HOBBIT</h2>
              <p style={{lineHeight:"30px"}}>Having reclaimed Erebor and vast treasure from
              the dragon Smaug, Thorin Oakenshield sacrifices
              friendship and honor in seeking the Arkenstone,despite
              Smaug's fiery wrath and desperate attempts by the Hobbit Bilbo
              to make him see reason. Meanwhile, Sauron sends legions
              of Orcs in a sneak attack upon the Lonely Mountain.
               As the fate of Middle Earth hangs in the balance,
              the races of Men, Elves and Dwarves must decide whether
              to unite and prevail -- or all die.</p>
              <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>
        </div>
      )
    }
    else if(props.c==4){
      return(
        <div className="info scroll2">
          <h2>OBLIVION</h2>
          <p style={{lineHeight:"30px"}}>In the year 2077, Jack Harper works as a security repairman
          on an Earth left empty and devastated after a war with aliens.
           Jack has two weeks left before his mission ends and he joins
          his fellow survivors on a faraway colony. However, Jack's
          concept of reality comes crashing down after he rescues a
          beautiful stranger  from a downed spacecraft. The woman's
           arrival triggers a chain of events that culminates
          in Jack's nearly single-handed battle to save mankind.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==5){
      return(
        <div className="info scroll2">
          <h2>INTERSTELLAR</h2>
          <p style={{lineHeight:"30px"}}>In Earth's future, a global crop blight and second Dust Bowl are
           slowly rendering the planet uninhabitable. Professor Brand (Michael Caine),
            a brilliant NASA physicist, is working on plans to save mankind by transporting
             Earth's population to a new home via a wormhole. But first, Brand must send
              former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through 
              the wormhole and across the galaxy to find out which of three planets
               could be mankind's new home.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==6){
      return(
        <div className="info scroll2">
          <h2>INCEPTION</h2>
          <p style={{lineHeight:"30px"}}>Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter
             people's dreams and steal their secrets from their subconscious.
              His skill has made him a hot commodity in the world of corporate
               espionage but has also cost him everything he loves. Cobb gets
                a chance at redemption when he is offered a seemingly impossible
                 task: Plant an idea in someone's mind. If he succeeds, it will be
                  the perfect crime, but a dangerous enemy anticipates Cobb's every move.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==7){
      return(
        <div className="info scroll2">
          <h2>TENET</h2>
          <p style={{lineHeight:"30px"}}>A secret agent is given a single word as his weapon and sent to prevent the onset of World War III. He must travel through time and bend the laws of nature in order to be successful in his mission.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==8){
      return(
        <div className="info scroll2">
          <h2>GRAVITY</h2>
          <p style={{lineHeight:"30px"}}>Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==9){
      return(
        <div className="info scroll2">
          <h2>THE CONJURING:2</h2>
          <p style={{lineHeight:"30px"}}>In 1977, paranormal investigators Ed (Patrick Wilson) and Lorraine Warren come out of a self-imposed sabbatical to travel to Enfield, a borough in north London. There, they meet Peggy Hodgson, an overwhelmed single mother of four who tells the couple that something evil is in her home. Ed and Lorraine believe her story when the youngest daughter starts to show signs of demonic possession. As the Warrens try to help the besieged girl, they become the next targets of the malicious spirit.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==10){
      return(
        <div className="info scroll2">
          <h2>THE EXORCIST</h2>
          <p style={{lineHeight:"30px"}}>One of the most profitable horror movies ever made, this tale of an exorcism is based loosely on actual events. When young Regan (Linda Blair) starts acting odd -- levitating, speaking in tongues -- her worried mother (Ellen Burstyn) seeks medical help, only to hit a dead end. A local priest (Jason Miller), however, thinks the girl may be seized by the devil. The priest makes a request to perform an exorcism, and the church sends in an expert (Max von Sydow) to help with the difficult job.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==11){
      return(
        <div className="info scroll2">
          <h2>THE NUN</h2>
          <p style={{lineHeight:"30px"}}>When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==12){
      return(
        <div className="info scroll2">
          <h2>INSIDIOUS</h2>
          <p style={{lineHeight:"30px"}}>Parents (Patrick Wilson, Rose Byrne) take drastic measures when it seems their new home is haunted and their comatose son (Ty Simpkins) is possessed by a malevolent entity.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==13){
      return(
        <div className="info scroll2">
          <h2>MONSTER UNIVERSITY</h2>
          <p style={{lineHeight:"30px"}}>Ever since he was a kid monster, Mike Wazowski (Billy Crystal) has dreamed of becoming a Scarer. To make his dream a reality, he enrolls at Monsters University. During his first semester, he meets Sulley (John Goodman), a natural-born Scarer. Sulley and Mike engage in a fierce rivalry that ultimately gets them both kicked out of MU's elite Scare Program. To make things right, Mike and Sulley -- along with a bunch of misfit monsters -- will have to learn to work together.
</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==14){
      return(
        <div className="info scroll2">
          <h2>UP</h2>
          <p style={{lineHeight:"30px"}}>Carl Fredricksen, a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house. A Pixar animation.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==15){
      return(
        <div className="info scroll2">
          <h2>WALL-E</h2>
          <p style={{lineHeight:"30px"}}>WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    else if(props.c==16){
      return(
        <div className="info scroll2">
          <h2>BIG HERO:6</h2>
          <p style={{lineHeight:"30px"}}>Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro's closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes.</p>
          <button className="btn btn-outline-success button "><i className="font fas fa-play"></i> Watch Now</button>
              <button className="btn btn-outline-success button "><i class="fas fa-plus"></i> Add to Watchlist</button>


        </div>
      )
    }
    
    else if(props.c==0){
      return(
        <div>
            <h2 style={{marginTop:"40px",color:"cyan",fontSize:"23px",fontFamily: "'Architects Daughter',cursive" }}>
               Your Movies and<br/> TV Shows Your Way...
             </h2>
             <img src="https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858387/4b8a92b93fc6b6a5a91175fdc7692d3c-700.jpg"
             className="img-fluid" style={{height:"50%"}}/>
        </div>
      )
    }
  }
   
 export default Description;