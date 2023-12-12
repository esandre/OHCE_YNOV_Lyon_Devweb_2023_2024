export class MomentDeLaJournée {
    private readonly _representation: string;

    public static Inconnu: MomentDeLaJournée = new MomentDeLaJournée("Inconnu");
    public static Matin: MomentDeLaJournée = new MomentDeLaJournée("Matin");
    public static AprèsMidi: MomentDeLaJournée = new MomentDeLaJournée("Après-Midi");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}