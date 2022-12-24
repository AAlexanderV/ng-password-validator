import { Component } from '@angular/core';
import { strongPassword, mediumPassword } from './passwordStrengthRegExp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  password : string = "";
  passwordStatus : string = "empty";
  indicatorsColor : string[] = ["grey", "grey", "grey"];

  mediumPassword = mediumPassword;
  strongPassword = strongPassword;

  handlePasswordStatus():void{
    if (this.password.length === 0) {
      this.passwordStatus = "empty";
      this.indicatorsColor = ["silver", "silver", "silver"];
    }else if (this.password.length < 8){
      this.passwordStatus = "short";
      this.indicatorsColor = ["red", "red", "red"];
    }else if (this.strongPassword.test(this.password)) {
      this.passwordStatus = "strong";
      this.indicatorsColor = ["lime", "lime", "lime"];
    }else if(this.mediumPassword.test(this.password)){
      this.passwordStatus = "medium";
      this.indicatorsColor = ["yellow", "yellow", "silver"];
    }else{
      this.passwordStatus = "low";
      this.indicatorsColor = ["red", "silver", "silver"];
    }
  }
}
