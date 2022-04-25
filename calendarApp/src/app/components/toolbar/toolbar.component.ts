import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit(): void {
  }
  
  public navigateHomeClick(){
    this.router.navigateByUrl('/home')
  }

  public navigateClick(routerName: any){
    var myUrl = `${routerName}`;
    this.router.navigateByUrl(myUrl);
  }

  public logOut(){
    //this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
