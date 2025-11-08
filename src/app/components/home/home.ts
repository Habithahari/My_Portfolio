import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ✅ must import this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // ✅ add this line
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
