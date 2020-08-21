import { Directive, Input, ElementRef, AfterContentInit } from "@angular/core";

@Directive({
  selector: "[appAutoFocus]",
})
export class AutoFocusDirective implements AfterContentInit {
  @Input() public autoFocus: boolean;
  public constructor(private el: ElementRef) {}

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 500);
  }
}
