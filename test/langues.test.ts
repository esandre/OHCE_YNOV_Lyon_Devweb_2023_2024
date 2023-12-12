import {LangueFrançaise} from "../src/langueFrançaise";
import {Expressions} from "../src/expressions";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";
import {MomentDeLaJournée} from "../src/momentDeLaJournée";

describe("Langues", () => {
    test.each([
        [new LangueFrançaise(), MomentDeLaJournée.Inconnu, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournée.Matin, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournée.AprèsMidi, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournée.Soirée, Expressions.BONSOIR],
        [new LangueFrançaise(), MomentDeLaJournée.Nuit, Expressions.BONSOIR],
        [new LangueAnglaise(), MomentDeLaJournée.Inconnu, Expressions.HELLO],
        [new LangueAnglaise(), MomentDeLaJournée.Matin, Expressions.GOOD_MORNING],
        [new LangueAnglaise(), MomentDeLaJournée.AprèsMidi, Expressions.GOOD_AFTERNOON],
        [new LangueAnglaise(), MomentDeLaJournée.Soirée, Expressions.GOOD_EVENING],
        [new LangueAnglaise(), MomentDeLaJournée.Nuit, Expressions.GOOD_NIGHT],
    ])("En %s on salue le %s par '%s'",
        (langue: LangueInterface, moment: MomentDeLaJournée, attendu: string) => {
        expect(langue.Saluer(moment)).toBe(attendu)
    })
});