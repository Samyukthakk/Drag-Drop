import { Routes } from '@angular/router';
import { JiraBoardComponent } from './jira-board/jira-board.component';

export const routes: Routes = [
    {path:'',redirectTo:'jiraboard',pathMatch:'full'},
    {path:'jiraboard',component:JiraBoardComponent}
];
