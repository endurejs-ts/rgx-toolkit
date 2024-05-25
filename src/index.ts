interface IR {}

class IRtestClass {
    static checkNumber(num: number): boolean {
        const regexp = /^[0-9]$/;
        return regexp.test(num.toString());
    }

    static checkString(str: string): boolean {
        const regexp = /^[a-z]$/;
        return regexp.test(str)
    }
}

