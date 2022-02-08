import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prelims-lab-4';

  //Interpolation
  string = 'String Interpolation';
  number = '0123456789';

  //Property Binding
  property:string = 'property';

  //Style Binding
  appliedStyle = "green";
  notappliedStyle = false;
  myColor = 'red';

  //Class Binding
  appliedCSSClass = "green";
  notappliedCSSClass = true;

  //Image Binding
  imageURL ="./assets/img.jpg";

  //Event Binding
  showData($event:any) {
    console.log("Button is clicked!"); if($event) {
      console.log($event.target.value);
    }
  }
  getData(data:any) {
    console.warn(data);
  }
}
