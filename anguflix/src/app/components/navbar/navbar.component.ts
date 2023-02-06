import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { ToggleSearchService } from 'src/app/services/toggleSearch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  state: boolean = false;
  scrollPosition: boolean = false;
  inputState: boolean = false;
  search = new FormControl('');

  stateToggle$ = this.toggleSearchService.stateToogle$;
  
  constructor(private toggleSearchService: ToggleSearchService) {
    this.search.valueChanges
      .pipe(
        tap((search) =>
          this.toggleSearchService.trueToggle({
            state: true,
            name: search + '',
            genreId: undefined,
          })
        )
      )
      .subscribe();
    }
    
  ngOnInit(): void {
      this.stateToggle$.subscribe((res) => {
        if(res.genreId) this.inputState = false
      });
  }

  onClick(): void {
    this.state = !this.state;
  }

  doSomethingOnWindowScroll(event: any): void {
    if (event.srcElement.children[0].scrollTop) this.scrollPosition = true;
    else this.scrollPosition = false;
    console.log(this.scrollPosition);
  }
  fnInputState(): void {
    this.inputState = !this.inputState;
    console.log('click');
  }
}
