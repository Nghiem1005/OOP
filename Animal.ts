export abstract class Animal {
    name: string
    sound: string
    constructor(name?: string, sound?: string) {
        this.name = name || ""
        this.sound = sound || ""
    }

    
    public get getName() : string {
        return this.name
    }
    
    
    public set setName(v : string) {
        this.name = v;
    }

    public get getSound() : string {
        return this.sound
    }
    
    
    public set setSound(v : string) {
        this.sound = v;
    }

    abstract makeSound() : void
    
}