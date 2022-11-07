import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchUser(userId: string): void {
    const isValidUserId = /[0-9]+/.test(userId);
    if (!isValidUserId) return;
    this.router.navigate(["/usuario", userId]);
  }

}
