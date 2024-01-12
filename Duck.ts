import { Animal } from "./Animal";

export class Duck extends Animal{
    weight: number

    constructor(name?: string, sound?: string, weight?: number) {
        super(name, sound);
        this.weight = weight || 0
    }
    makeSound(): void {
        console.log(`${this.getSound} oke `);
    }
    
}