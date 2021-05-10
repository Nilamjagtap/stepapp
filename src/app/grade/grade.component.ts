import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import  {Router} from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators, NgForm } from '@angular/forms'



@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  ellips:string="assets/grade/Ellipse 23.png";
  showMe:boolean=false

  constructor(private router:Router) { }
  

  

  ngOnInit():  void {
   
   }
   tag(){
     alert("study material for Selected grade is not available ");
   }

    

  stateValue(event:any) {
    console.log(event);
    alert("study material for selected grade is available");
    
  }
  
   btn(){
    this.router.navigate(['/subject'])
  }

    
  }
