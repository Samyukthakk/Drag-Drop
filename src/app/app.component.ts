import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JiraBoardComponent } from './jira-board/jira-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JiraBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drag-drop';
}
