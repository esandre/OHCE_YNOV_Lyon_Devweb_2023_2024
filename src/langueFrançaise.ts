import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";

export class LangueFrançaise implements LangueInterface {
    public Acquitter(): string {
        return Expressions.AU_REVOIR;
    }

    public Saluer(): string {
        return Expressions.BONJOUR;
    }

    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}