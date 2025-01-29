import {Calendar} from "./calendar";

const calendar = new Calendar(
    // 1st January 2025 to 31st December 2025.
    new Date('2025-01-01T00:00:00Z'),
    new Date('2025-12-31T00:00:00Z'),
    // 15 minutes in milliseconds.
    15 * (60 * 1000),
);
