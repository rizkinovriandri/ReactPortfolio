import React from 'react';

import './About.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const social = [
  {
    imgurl : 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png',
    profileurl : 'https://www.linkedin.com/in/rizki-novriandri-nasution-a54117117/',
    alt : 'Linkedin',
  },
  {
    imgurl : 'https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-256.png',
    profileurl : 'https://github.com/rizkinovriandri',
    alt : 'Github',
  },
  {
    imgurl : 'https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-256.png',
    profileurl : 'https://www.instagram.com/rizqieroway/',
    alt : 'Instagram',
  }
]

const About = () => {
  return (
    <div className="content">
        <div className="title"><h1 id="lorem">RIZKI </h1><h1 id="ipsum">NOVRIANDRI</h1></div>
        <div className="contact"><h2 id="phone">+62813 9389 </h2>&nbsp;<h2 id="email">loremipsum@gmail.com</h2></div>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo non massa fringilla condimentum. Donec egestas fringilla iaculis. Curabitur pellentesque, elit quis pharetra finibus, eros lacus sollicitudin nisi, eget congue dolor est in nisi. Sed eu tincidunt nisl. Praesent luctus, risus id faucibus luctus, risus massa eleifend est, et blandit quam velit eu ex. In dui quam, porttitor quis tempor posuere, fermentum a turpis. Nam sit amet consectetur erat.
          <br/><br/>
          Cras rhoncus consectetur enim sed maximus. Sed ligula lorem, eleifend non enim nec, lobortis porttitor velit. Aenean ut nibh at turpis tempus mattis. Sed rutrum nunc lorem, sit amet malesuada justo facilisis sit amet. Integer mattis ligula eu viverra dignissim. Duis enim mauris, viverra sed bibendum vel, aliquet vel nisi. Duis porttitor vehicula elementum. Praesent sed bibendum odio. Aenean sit amet metus ut magna sagittis dapibus id commodo quam. Sed cursus ultrices justo, in lobortis mi efficitur eu. Sed tempor nisi efficitur eros pulvinar ultrices. Fusce ullamcorper neque nec nibh egestas rutrum. Sed bibendum nisl dui, sed mattis nisi pulvinar non.<br/></p><br/>
        </div>
        <div className="social">
          <SocialMedia item = {social}/>
        </div>
          
        
    </div>
  );
}

export default About;