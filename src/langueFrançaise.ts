import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";

export class LangueFrançaise implements LangueInterface {
    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString() : string {
        return "Langue Française";
    }
}