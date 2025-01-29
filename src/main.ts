import {Calendar} from "./calendar";
import {BitArray} from "./bit-array";

const calendar = new Calendar(
    new Date('2025-01-01T00:00:00Z'),
    new Date('2025-01-02T08:00:00Z'),
    // 15 minutes in milliseconds.
    15 * (60 * 1000),
);

const bitArray = new BitArray(calendar.totalBlocks);

const mask = 1n << BigInt(0);
const mask2 = 1n << BigInt(1);
const mask3 = (1n << 5n) - 1n;
const isSet = (bitArray.bitArray[0] & mask) !== 0n;

console.log((bitArray.bitArray[0] & mask) !== 0n);

bitArray.bitArray[0] = bitArray.bitArray[0] | mask3;

console.log(bitArray.bitArray);
console.log((bitArray.bitArray[0] & mask) !== 0n);
console.log(BigInt(1));