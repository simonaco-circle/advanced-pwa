import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  peeps: any;
  constructor() {
    this.peeps = [
      {
        id: 2,
        name: 'Burke Holland',
        twitter: '@burkeholland',
        description:
          'Bald guy. Formerly @telerik now @microsoft. A big fan of sarcasm and JavaScript. That was sarcasm. Opinions are yours.',
        photo: '/burke.jpeg',
        talk: 'VS Code can do that?!',
        time: '10:00',
        details: `
        Do you use Visual Studio Code? Do you think you know it pretty well? Let’s find out.

        // tslint:disable-next-line:max-line-length
        Visual Studio Code is catching fire with JavaScript developers because it can do a LOT. From productivity tips to debugging Docker containers on the fly and even hacking the editor itself, we’ll assemble the best features and extensions for VS Code that nobody ever bothered to tell you about.

        This is your favorite text editor like you’ve never seen it before.
        `
      },
      {
        id: 3,
        name: 'Asim Hussain',
        twitter: '@jawache',
        description:
          'Developer • Author • Speaker • Teacher of #Angular & #JS at https://codecraft.tv  • Cloud Developer Advocate @Microsoft',
        photo: '/asim.jpg',
        talk: 'I’ve built a SPA, now what?',
        time: '11:20',
        day: '2nd',
        details: `
        // tslint:disable-next-line:max-line-length
        What to do now that you’ve built your SPA using create-react-app, angular-cli, vue-cli, how do you host it? How do you host it so it scales automatically? How do you host it so it scales automatically and is cheap? SPAs are only half the story, what about the rest of your app? What about that cron-job that sends emails? What about the API, where do you put that?
        `
      },
      {
        id: 4,
        name: 'Sara Viera',
        twitter: '@NikkitaFTW',
        description: 'International agent of JS Bullshit ',
        photo: '/sara.jpg',
        talk: 'We need to talk about Preact',
        time: '13:45',
        day: '1st',
        // tslint:disable-next-line:max-line-length
        details: `I know many of you have heard about Preact and may have even played around with it but have you seen it's true potential? In this talk we are going to have the needed discussion about Preact and why it's awesome.`
      }
    ];
  }
  getPeep(id) {
    return this.peeps.filter(peep => peep.id === id);
  }
  getPeeps() {
    return this.peeps;
  }
}
