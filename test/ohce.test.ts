import {VérificateurPalindrome} from "../src/vérificateurPalindrome";
import * as os from "os";
import {Expressions} from "../src/expressions";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']

describe("test works", () => {
   test.each([...nonPalindromes])("QUAND on saisit un non-palindrome %s " +
       "ALORS elle est renvoyée en miroir",
       (chaîne : string) => {
          let résultat = VérificateurPalindrome.Vérifier(chaîne);

          let attendu = chaîne.split('').reverse().join('');
          expect(résultat).toContain(attendu);
   });

   test("QUAND on saisit un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Bien dit !' est envoyé ensuite", () =>{
      let résultat = VérificateurPalindrome.Vérifier(palindrome);

      expect(résultat).toContain(palindrome + os.EOL + Expressions.BIEN_DIT);
   });

   test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Bonjour" est envoyé avant toute réponse',
    (chaîne: string) => {
       let résultat = VérificateurPalindrome.Vérifier(chaîne);

       let premièreLigne = résultat.split(os.EOL)[0];
       expect(premièreLigne).toEqual(Expressions)
   });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Au revoir" est envoyé en dernier.',
    (chaîne: string) => {
       let résultat = VérificateurPalindrome.Vérifier(chaîne);

       let lignes = résultat.split(os.EOL);
       let dernièreLigne = lignes[lignes.length - 1];
       expect(dernièreLigne).toEqual(Expressions.AU_REVOIR)
   });
});