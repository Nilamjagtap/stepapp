import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-lastpage',
  templateUrl: './lastpage.component.html',
  styleUrls: ['./lastpage.component.scss']
})
export class LastpageComponent implements OnInit {

  star1:string="assets/subject/star.png";

  lockk:string="assets/lastpage/lock.png";
  lockk1:string="assets/lastpage/lock1.png";
  play1:string="assets/lastpage/play.png";




  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
