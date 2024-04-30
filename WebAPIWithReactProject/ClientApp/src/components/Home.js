import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
          <h2>Greetings, Adventurer!</h2> 
          <p>Welcome to the chronicle of esteemed dungeon crawlers and dragon slayers. Do you wish to inscribe your name on the Ageless Scroll of Intrepid Wanderers?</p>
          <p>This application is forged in the mystical fires of ASP.NET Core and React, intricately woven together by seasoned artificers to mimic the complex interplay between a seasoned wizard's magical repertoire and a veteran fighter's martial prowess.</p>
          <ul> 
              <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> are like the arcane languages of the multiverse, harmoniously moulding afar server-side realms.</li> 
              <li><a href='https://facebook.github.io/react/'>React</a> is the magical incantation for scribing client-side runes</li> 
          </ul>
          <p>To aid you on your mystical journey, we've meticulously scribed a legendary <strong>Scroll of Noteworthy Wanderers</strong>:</p> 
          <ul> 
              <li>Gaze upon the tales of those who've trekked the realms of code and soared the highest peaks of algorithmic mysteries.</li> 
              <li>Feel the rush of quests completed, boss-level problems vanquished, and celebrate the glorious achievements of these mighty code warriors.</li> 
              <li>Witness, dear adventurer, and tread in the footsteps of these luminaries, to learn from their journey and gain inspiration.</li> 
          </ul> 
          <p>In the grand tradition of our fellowship, you too can inscribe your own name in this <strong>Scroll of Noteworthy Wanderers</strong>. Share with us your tale of valor, your epics of debugs, and may the renown of your coding prowess echo in the eternal halls of nerd-dom!</p>
          </div>
    );
  }
}
