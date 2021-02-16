import { AbstractControl } from '@angular/forms';

export class MathSubstractionValidator {
    static validate(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            let firstNumber = form.value[sourceOne];
            let secondNumber = form.value[sourceTwo];

            if (firstNumber - secondNumber === parseInt(sum)) {
                return null;
            }

            return { result: true };
        };
    }
}
