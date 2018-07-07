import { EmailService } from './../shared/services/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  email: any
  number: any
  message: any
  name: any
  error: any
  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
  }

  Send() {
    debugger
    this.error = undefined;
    alert(this.email)
    if(this.email === undefined || this.email === ""
      || this.number === undefined || this.number === ""
      || this.name === undefined || this.name === ""
      || this.message === undefined || this.message === ""){
      this.error = "Please Fill In All Fields"    
      
      return false;
    }  
    let data = {
      email: "queries@ndu-systems.net, mrnnmthembu@gmail.com, freedom.khanyile1@gmail.com",//our email here
      from: this.email,
      name: this.name,
      number: this.number,
      subject: "Ndu Systems Customer Care - Website Query Subject",
      message: this.message
    };

    this.emailService.sendEmail(data).subscribe(response =>{
      this.name = "";
      this.email = "";
      this.number = "";
      this.message = "";
      alert("Thank you contact us , we'll call you as soon as possible");
    });    
  }
}
