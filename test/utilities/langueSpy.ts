import {LangueStub} from "./langueStub";

export class LangueSpy extends LangueStub {
    private _saluerConsulté:boolean = false;

    public Saluer(): string {
        this._saluerConsulté = true;
        return super.Saluer();
    }

    public SaluerAEteConsulté() {
        return this._saluerConsulté;
    }
}