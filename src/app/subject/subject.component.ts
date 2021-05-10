import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  star1:string="assets/subject/star.png";
  body:string="assets/subject/Container.png";
  midcircle:string="assets/subject/midimg.png";


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // subBtn(event:any) {
  //   console.log(event);
    

  subBtn(){
    this.router.navigate(['/lastpage'])
    console.log('active');
  }
 mathbtn(){
   alert("chapter 9 learn maths is not available")
 }

}
