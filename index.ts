import { ReactiveElement, type PropertyValues } from 'lit'

export class Binder {
	constructor(readonly host: ReactiveElement) {}
}

export class Example extends ReactiveElement {
	readonly entityBinder = new Binder(this)

	protected override firstUpdated(props: PropertyValues<this>) { }
}