//noinspection JSUnusedGlobalSymbols,JSUnusedGlobalSymbols
/**
 * Checks if value is blank
 * @constructor
 * @author dev.ymalcev@gmail.com
 */
function SymfonyComponentValidatorConstraintsBlank() {
    this.message = '';

    this.validate = function (value) {
        var errors = [];
        if ([undefined, null, false, '', [], {}].indexOf(value) === -1) {
            errors.push(this.message.replace('{{ value }}', String(value)));
        }

        return errors;
    }
}

