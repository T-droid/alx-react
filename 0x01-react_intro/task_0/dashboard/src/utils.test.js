import { getFullYear, getFooterCopy } from "./utils";

test('getFullYear returns correctly', () => {
    expect(getFullYear()).toBe(2024);
});

test('getFooterCopy works correctly', () => {
    expect(getFooterCopy(false)).not.toEqual('Holberton School')
})
