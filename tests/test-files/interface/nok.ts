interface Moo {
    x: number
    Y: string
    invalid_property: boolean;
}

const moo: Moo = {
    invalid_property: false,
    x: 5,
    Y: '6',
}

void moo
