import {VérificateurPalindrome} from "../src/vérificateurPalindrome";
import * as os from "os";

describe("test works", () => {
   test.each([
       ['test'],
       ['ynov']
   ])("QUAND on saisit un non-palindrome %s " +
       "ALORS elle est renvoyée en miroir",
       (chaîne : string) => {
          let résultat = VérificateurPalindrome.Vérifier(chaîne);

          let attendu = chaîne.split('').reverse().join('');
          expect(résultat).toContain(attendu);
   });

   test("QUAND on saisit un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Bien dit !' est envoyé ensuite", () =>{
      const palindrome = "radar";

      let résultat = VérificateurPalindrome.Vérifier(palindrome);

      expect(résultat).toContain(palindrome + os.EOL + "Bien dit !");
   });

   test.each([['test'], ['radar']])('QUAND on saisit une chaîne %s ' +
       'ALORS "Bonjour" est envoyé avant toute réponse',
    (chaîne: string) => {
       let résultat = VérificateurPalindrome.Vérifier(chaîne);

       let premièreLigne = résultat.split(os.EOL)[0];
       expect(premièreLigne).toEqual("Bonjour")
   });
});