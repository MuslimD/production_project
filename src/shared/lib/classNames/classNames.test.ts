import { classNames } from './classNames';

describe('classNames', () => {
    test('width only param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('width additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });
    test('width mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered scrollable');
    });
    test('width mods false', () => {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
    test('width mods undefined', () => {
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
});
