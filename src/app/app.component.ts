import { Component } from '@angular/core';
import { GetdataService } from './serices/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
constructor(private myservice:GetdataService){

}


 // declared array of months. 
 months = ["January", "February", "March", "April", "May", "June", "July", 
 "August", "September", "October", "November", "December"];
 isavailable=false;
 myClickFunction(event) {
   debugger;
  //just added console.log which will display the event details in browser on click of the button.
  alert("Button is clicked");
  console.log(event);
}


 myFunction(event) {
   debugger;
   this.myservice.getData().subscribe(result=>{
     console.log(result);

   },err=>{
    console.log(result); 
   })

  }

}
