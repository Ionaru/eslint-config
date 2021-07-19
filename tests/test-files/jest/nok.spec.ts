describe('getNumberEnumKeys', () => {

    beforeEach(() => {/* A hook */});
    beforeAll(() => {/* A hook */});
    afterEach(() => {/* A hook */});
    afterAll(() => {/* A hook */});

    it('zero-indexed enum', () => {
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual([
            'ValueZero',
            'ValueOne',
            'ValueTwo',
        ]);
    });
});
