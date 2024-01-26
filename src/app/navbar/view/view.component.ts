import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: string | null = null;
  private routeSub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
