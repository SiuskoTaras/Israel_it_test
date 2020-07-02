import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as _ from 'lodash';

@Directive({
	selector: '[click.stop], [click.prevent], [click.sevetop.prnt], [click.prevent.stop]',
})
export class ClickEventsDirective {
	@Output('click.stop') public stopProp: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output('click.prevent') public prevDef: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output('click.stop.prevent') public stopPropAndPrevDef: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output('click.prevent.stop') public prevDefAndStopProp: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	@HostListener('click', ['$event']) public onClick(event: MouseEvent): void {
		if (_.get(this, ['stopProp', 'observers', 'length'])) {
			event.stopPropagation();
			this.stopProp.emit(event);
		}
		if (_.get(this, ['prevDef', 'observers', 'length'])) {
			event.preventDefault();
			this.prevDef.emit(event);
		}
		if (
			_.get(this, ['stopPropAndPrevDef', 'observers', 'length']) ||
			_.get(this, ['prevDefAndStopProp', 'observers', 'length'])
		) {
			event.stopPropagation();
			event.preventDefault();
			if (_.get(this, ['stopPropAndPrevDef', 'observers', 'length'])) {
				this.stopPropAndPrevDef.emit(event);
			} else {
				this.prevDefAndStopProp.emit(event);
			}
		}
	}
}
