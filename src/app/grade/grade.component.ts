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


   selectedId:number= 1;
   btnActivate(id:number)
    {
    this.selectedId= id;
    alert("study material for 6th is  available ");

     }
   
     btnActivateOne(id:number)
    {
      this.selectedId= id;
      alert("study material for 5th is available ");
    }

    btnActivateTwo(id:number)
    {
      this.selectedId= id;
      alert("study material for 7th is  not available ");
    }
    btnActivateThree(id:number)
    {
      this.selectedId= id;
      alert("study material for 8th is not available ");
    }
    btnActivateFour(id:number)
    {
      this.selectedId= id;
      alert("study material for 9th is not available ");
    }
    btnActivateFive(id:number)
    {
      this.selectedId= id;
      alert("study material for 10th is not available ");
    }
    btnActivateSix(id:number)
    {
      this.selectedId= id;
      alert("study material for 11th is not available ");
    }



  
   




    

  
   btn(){
    this.router.navigate(['/subject'])
  }

    
  }
