import {VérificateurPalindrome} from "../../src/vérificateurPalindrome";
import {LangueFrançaise} from "../../src/langueFrançaise";
import {LangueInterface} from "../../src/langue.interface";

export class VérificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueFrançaise();

    public static Default() {
        return new VérificateurPalindromeBuilder().Build();
    }

    public Build(): VérificateurPalindrome {
        return new VérificateurPalindrome(this._langue);
    }

    public AyantPourLangue(langue: LangueInterface): VérificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }
}