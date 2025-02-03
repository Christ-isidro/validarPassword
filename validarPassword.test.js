const {validatePassword} = require('./validarPassword');

test('Contraseña válida', () => {
    expect(validatePassword("Password123$")).toBe(true);
});

test('Contraseña no válida (muy corta)', () => {
    expect(validatePassword("a")).toBe(false);
});

test('Contraseña no válida (no tiene números)', () => {
    expect(validatePassword("Password$")).toBe(false);
});

test('Contraseña no válida (no tiene carácteres especiales)', () => {
    expect(validatePassword("Password123")).toBe(false);
});

test('Contraseña no válida (no tiene mayúsculas)', () => {
    expect(validatePassword("password$")).toBe(false);
});

test('Contraseña no válida (no tiene minúsculas)', () => {
    expect(validatePassword("PASSWORD123$")).toBe(false);
});