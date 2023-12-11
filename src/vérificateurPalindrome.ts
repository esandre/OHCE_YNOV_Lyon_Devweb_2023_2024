import * as os from "os";
import {Expressions} from "./expressions";
import {LangueFrançaise} from "./langueFrançaise";

export class VérificateurPalindrome{
    constructor(langue: LangueFrançaise) {

    }

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = Expressions.BONJOUR + os.EOL + miroir + os.EOL;

        if(miroir == chaîne)
            sortie += Expressions.BIEN_DIT + os.EOL;

        return sortie + Expressions.AU_REVOIR;
    }
}