/* eslint-disable max-classes-per-file */

class Moo {
    private _x?: number;

    private _someFunction() {
        return this._x;
    }
}

const _privateFunction = () => 'private';

_privateFunction();

new Moo();

class boo {}
new boo();

const MyProp = 'myProp';
void MyProp;
