describe('getNumberEnumKeys', () => {

    beforeEach(() => {/* A hook */});
    beforeAll(() => {/* A hook */});
    afterEach(() => {/* A hook */});
    afterAll(() => {/* A hook */});

    it('is a test that does stuff 6', () => {
        expect.hasAssertions();
        expect(1 + 1).toStrictEqual('The number two');
    });

    it('zero-indexed enum', () => {
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual([
            'ValueZero',
            'ValueOne',
            'ValueTwo',
        ]);
    });
});
