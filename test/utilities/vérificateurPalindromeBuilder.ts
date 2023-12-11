import {VérificateurPalindrome} from "../../src/vérificateurPalindrome";
import {LangueFrançaise} from "../../src/langueFrançaise";

export class VérificateurPalindromeBuilder {
    private _langue = new LangueFrançaise();

    public static Default() {
        return new VérificateurPalindromeBuilder().Build();
    }

    public Build() : VérificateurPalindrome {
        return new VérificateurPalindrome(this._langue);
    }

    public AyantPourLangue(langue: LangueFrançaise): VérificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }
}