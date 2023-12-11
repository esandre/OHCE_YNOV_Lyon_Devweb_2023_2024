import * as os from "os";
import {Expressions} from "./expressions";

export class VérificateurPalindrome{

    public static Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = Expressions.BONJOUR + os.EOL + miroir + os.EOL;

        if(miroir == chaîne)
            sortie += Expressions.BIEN_DIT + os.EOL;

        return sortie + Expressions.AU_REVOIR;
    }
}