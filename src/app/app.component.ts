import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  linkedin = '../assets/socmed/linkedin.png';
  twitter = '../assets/socmed/twitter.png';
  github= '../assets/socmed/github.png';
  // linkedinHI: require('../assets/socmed/linkedin_hover.png'),
  // twitterHI: require('../assets/socmed/twitter_hover.png'),
  // githubHI: require('../assets/socmed/github_hover.png'),

  pictureHover(targetSite: string) {
    // switch(targetSite){
    //   case('linkedin'):
    //     return this.linkedInHover ? this.linkedinHI : this.linkedin;
    //   case('twitter'):
    //     return this.twitterHover ? this.twitterHI : this.twitter;
    //   case('github'):
    //     return this.githubHover ? this.githubHI : this.github;
    //   default:
    // }
  }
}
