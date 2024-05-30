import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private service:UserService){}
books:any;
ngOnInit(){
  this.service.getbook().subscribe((res)=>{
    this.books=res;
    console.log(this.books);
  })
}

}
