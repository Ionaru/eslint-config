describe('getNumberEnumKeys', () => {

    beforeAll(() => {/* A hook */});
    beforeEach(() => {/* A hook */});
    afterEach(() => {/* A hook */});
    afterAll(() => {/* A hook */});

    it('zero-indexed enum', () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual([
            'ValueZero',
            'ValueOne',
            'ValueTwo',
        ]);
    });

    it('is a test that does stuff', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
        expect(1 + 1).toBe('The number two');
    });

    it('zero-indexed enum 2', () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual([
            'ValueZero',
            'ValueOne',
            'ValueTwo',
        ]);
    });
});
