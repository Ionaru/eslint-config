const testSomething = () => {
    expect(1 + 1).toBe(2);
    expect(1 + 1).toBe(2);
    expect(1 + 1).toBe(2);
};

const testSomethingElse = () => {
    expect(1 + 1).toBe(2);
    expect(1 + 1).toBe(2);
    expect(1 + 1).toBe(2);
};

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

    it('is a test that does stuff 1', () => {
        expect.assertions(3);
        testSomething();
        testSomethingElse();
    });

    it('is a test that does stuff 2', () => {
        expect.assertions(3);
        testSomething();
        testSomethingElse();
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
