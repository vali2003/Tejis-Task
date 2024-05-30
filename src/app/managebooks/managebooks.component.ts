import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-managebooks',
  templateUrl: './managebooks.component.html',
  styleUrl: './managebooks.component.css'
})
export class ManagebooksComponent {

  constructor(private service:UserService){}

  books:any;
  msg:any;
  data:any;
  modalRef: any;
  
  
    ngOnInit(){
      this.service.getbook().subscribe((result)=>{
        this.books=result;
        console.log(this.books);
      })
    }
  
    delete(b:any){
      this.service.delete(b).subscribe((result)=>{
        this.msg=result;
        if(this.msg=="Book is Remove"){
          Swal.fire({
            title: "Book Deleted!",
            text: "Removed from MyLibrary!",
            icon: "warning"
          });
        }
        else{
          alert(this.msg);
        }
      });
      this.service.getbook().subscribe((result)=>{
        this.books=result;
      });

      
    }
  
    update(b:any){
     b.show=false;
      this.service.update(b).subscribe((result)=>{
        this.msg=result;
        alert(this.msg);
      });
    }
  
    
    edit(b:any){
      b.show=true;
    }
}

