type Mode = Record<string, string | boolean>;

export function classNames(
    cls: string,
    mod: Mode = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mod)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
