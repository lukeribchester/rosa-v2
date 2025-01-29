export class Calendar {
    public readonly start: number;
    public readonly end: number;
    public readonly blockSize: number;
    public readonly totalBlocks: number;

    constructor(start: Date, end: Date, blockSize: number) {
        this.start = start.getTime();
        this.end = end.getTime();
        this.blockSize = blockSize;
        this.totalBlocks = (this.end - this.start) / this.blockSize;

        Object.freeze(this);
    }

    public getBlockRangeFromDateRange(start: Date, end: Date): { blockStart: number, blockEnd: number } {
        const blockStart: number = Math.floor((start.getTime() - this.start) / this.blockSize);
        const blockEnd: number = Math.ceil((end.getTime() - this.end) / this.blockSize);

        return {blockStart, blockEnd};
    }
}
