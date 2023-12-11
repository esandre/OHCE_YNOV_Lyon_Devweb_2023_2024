import * as os from "os";

export class VérificateurPalindrome{

    public static Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = "Bonjour" + os.EOL + miroir + os.EOL;

        if(miroir == chaîne)
            sortie += "Bien dit !" + os.EOL;

        return sortie;
    }
}