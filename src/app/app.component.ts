import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  password : string = "";
  passwordStatus : string = "empty";
  indicatorsColor : string[] = ["grey", "grey", "grey"];

  mediumPassword = new RegExp("(?=.{8})(([a-zA-Z].*[0-9])|([0-9].*[a-zA-Z])|([^A-Za-z0-9].*[a-zA-Z])|([a-zA-Z].*[^A-Za-z0-9])|([^A-Za-z0-9].*[0-9])|([0-9].*[^A-Za-z0-9]))"); 
  // int+letter || letter+int || sign+letter || letter+sign || int+sign || sign + int
  
  strongPassword = new RegExp("(?=.{8})(([a-zA-Z].*([0-9]+.*[^A-Za-z0-9]|[^A-Za-z0-9]+.*[0-9]))|([0-9].*([a-zA-Z]+.*[^A-Za-z0-9]|[^A-Za-z0-9]+.*[a-zA-Z]))|[^A-Za-z0-9].*([0-9]+.*[a-zA-Z]|[a-zA-Z]+.*[0-9]))");
  // letter + sign<=>int || int + letter<=>sign || sign + int<=>letter

  // handlePasswordStatus(){
  //   if (this.password.length === 0) {
  //     this.indicatorsColor = ["silver", "silver", "silver"];
  //   }else if (this.password.length < 8){
  //     this.indicatorsColor = ["red", "red", "red"];
  //   }else if (this.strongPassword.test(this.password)) {
  //     this.indicatorsColor = ["lime", "lime", "lime"];
  //   }else if(this.mediumPassword.test(this.password)){
  //     this.indicatorsColor = ["yellow", "yellow", "silver"];
  //   }else{
  //     this.indicatorsColor = ["red", "silver", "silver"];
  //   }
  // }

  handlePasswordStatus(){
    if (this.password.length === 0) {
      this.passwordStatus = "empty";
    }else if (this.password.length < 8){
      this.passwordStatus = "short";
    }else if (this.strongPassword.test(this.password)) {
      this.passwordStatus = "strong";
    }else if(this.mediumPassword.test(this.password)){
      this.passwordStatus = "medium";
    }else{
      this.passwordStatus = "low";
    }
  }
}
