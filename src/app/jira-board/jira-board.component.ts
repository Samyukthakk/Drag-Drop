import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jira-board.component.html',
  styleUrl: './jira-board.component.scss'
})
export class JiraBoardComponent {
  dragedItem: any;
  draggedToStatus: any;
  currentItem: any;
  ticketArray = [
    { ticketId: "001", ticketName: "one", status: "done" },
    { ticketId: "002", ticketName: "two", status: "done" },
    { ticketId: "003", ticketName: "three", status: "inprogress" },
    { ticketId: "004", ticketName: "four", status: "inprogress" },
    { ticketId: "005", ticketName: "five", status: "inprogress" },
    { ticketId: "006", ticketName: "six", status: "pending" },
    { ticketId: "007", ticketName: "seven", status: "pending" },
    { ticketId: "008", ticketName: "eight", status: "done" },
  ];


  filterArrays(status: any) {
    return this.ticketArray.filter(m =>
      m.status == status
    )
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const record = this.ticketArray.find(m => m.ticketId == this.currentItem.ticketId)

    if (record!= undefined) {
     console.log(record.status);
     
      record.status = status;
    }
    this.currentItem = null;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
