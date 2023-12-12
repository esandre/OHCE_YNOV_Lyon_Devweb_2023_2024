import {LangueInterface} from "../../src/langue.interface";

export class LangueFake implements LangueInterface {
    Féliciter(): string {
        return "Félicitations";
    }
    Saluer(): string {
        return "Salutations";
    }
    Acquitter(): string {
        return "Acquittance";
    }

}