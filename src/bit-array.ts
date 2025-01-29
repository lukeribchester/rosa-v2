export class BitArray {
    public readonly bitArray: BigUint64Array;

    constructor(size: number) {
        // Size (number of words in the array) = number of blocks / 64.
        this.bitArray = new BigUint64Array(size / 64);
    }

    public checkBit(word: number, offset: number): boolean {
        const mask = 1n << BigInt(offset);
        return (this.bitArray[word] & mask) != BigInt(0);
    }

    public setBit(word: number, offset: number): void {
        // TODO: Setting a range = this mask -1 position back to the right.
        const mask = 1n << BigInt(offset);
        this.bitArray[word] = this.bitArray[word] | mask;
    }

    public clearBit(word: number, offset: number): void {
        const mask = ~(1n << BigInt(offset));
        this.bitArray[word] = this.bitArray[word] & mask;
    }
}
