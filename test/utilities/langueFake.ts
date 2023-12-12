import {LangueInterface} from "../../src/langue.interface";
import {MomentDeLaJournée} from "../../src/momentDeLaJournée";

export class LangueFake implements LangueInterface {
    Féliciter(): string {
        return "Félicitations";
    }

    Saluer(moment: MomentDeLaJournée): string {
        return "Salutations/" + moment.toString();
    }
    Acquitter(): string {
        return "Acquittance";
    }

}