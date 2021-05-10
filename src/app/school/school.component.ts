import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl, NgForm } from '@angular/forms'
import  {Router} from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent{

  logo:string="assets/image/image 2.png";
  
  ellips:string="assets/sc2page/Ellips.png";
  bigcomma:string="assets/school/comma.png";
  lastellip:string="assets/school/bottomellips.png";
  bellips:string="assets/scpage/cardellips.png";




  schools = [
    { id: 1, name: "DYPCET-Kop" },
    { id: 2, name: "KIT" },
    { id: 3, name: "DKIT" },
    { id: 4, name: "Bharti-Vidyapeeth kop" },
    { id: 5, name: "RIT" }
  ];

  form = new FormGroup({
    school: new FormControl(null, Validators.required)
  });
  
  
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

  constructor(private router:Router){}

  navigate(){
    this.router.navigate(['/login'])
    console.log('active');
  }
}
  