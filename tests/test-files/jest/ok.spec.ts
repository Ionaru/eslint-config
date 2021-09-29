describe('getNumberEnumKeys', () => {

    beforeEach(() => {/* A hook */});
    beforeAll(() => {/* A hook */});
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

    it('is a test that does stuff 1', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
    });

    it('is a test that does stuff 2', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
    });

    it('is a test that does stuff 3', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
    });

    it('is a test that does stuff 4', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
    });

    it('is a test that does stuff 5', () => {
        expect.assertions(1);
        expect(1 + 1).toBe('The number two');
    });

    it('is a test that does stuff 6', () => {
        expect.hasAssertions();
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
