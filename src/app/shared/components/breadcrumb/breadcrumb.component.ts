import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../../models/bread-crumb';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  // standalone: true,
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
  ngOnInit(): void {
    /* this.breadcrumbService.breadcrumbs$*/
    /*   this.breadcrumbs$*/
  }
}
