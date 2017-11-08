import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[changeFormModeDir]'
})
export class ChangeFormModuleDirective {

    @Input('changeFormModeDir') disabled: boolean;
    constructor(private el: ElementRef) { }
    @HostBinding('disabled')
    changeMode: boolean;
    ngOnChanges() {
        this.changeMode = this.disabled;
        if (this.changeMode) {
            this.el.nativeElement.style.borderColor = 'white';
            this.el.nativeElement.style.color = '#656464';
            this.el.nativeElement.style.opacity = '1';
        }
        else {
            this.el.nativeElement.style.borderColor = '#008e62';
        }
    }

}

