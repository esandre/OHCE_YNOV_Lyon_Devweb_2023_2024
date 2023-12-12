import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";
import {MomentDeLaJournée} from "./momentDeLaJournée";

export class LangueFrançaise implements LangueInterface {

    public Acquitter(): string {
        return Expressions.AU_REVOIR;
    }

    public Saluer(moment: MomentDeLaJournée): string {
        if(moment == MomentDeLaJournée.Soirée || moment == MomentDeLaJournée.Nuit)
            return Expressions.BONSOIR;
        return Expressions.BONJOUR;
    }

    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}