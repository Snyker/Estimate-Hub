import {loginDefaultValue, loginSchema} from "@/app/(auth)/login/login.feature";

describe('Login Schema Validation', () => {

    const validLoginData = {
        email: 'example.test89@gmail.com',
        password: 'AZErtyuiop85*'
    }

    //Testing loginObject
    it('should validate login default value object', () => {
        expect(Object.keys(loginDefaultValue)).toEqual(Object.keys(validLoginData))
    });

    it('should validate types login default value', () => {
        expect(Object.values(loginDefaultValue).map(v => typeof v)).toEqual(Object.values(validLoginData).map(v => typeof v))
    })

    //testing login schema
    it('should validate schema', async () => {
        expect(await loginSchema.validate(validLoginData)).toBe(validLoginData);
    })

    it('should not validate empty fields schema', async () => {
        await expect(loginSchema.validate(loginDefaultValue))
            .rejects.toThrow();
    });

    //Email
    it('should trigger error on required email', async () => {
        await expect(loginSchema.validate({ password: validLoginData.password}))
            .rejects.toThrow()
    });

    it('should trigger error on missmatch email', async () => {
        await expect(loginSchema.validate({ email: 'greji@ger].com', password: validLoginData.password}))
            .rejects.toThrow()
    });

    //Password
    it('should trigger error on required password', async () => {
        await expect(loginSchema.validate({ email: validLoginData.email}))
            .rejects.toThrow()
    });

    it('should trigger error on missmatch password', async () => {
        await expect(loginSchema.validate({ email: validLoginData.email, password: 'feiu48'}))
            .rejects.toThrow()
    });

    it('should trigger error on min length password', async () => {
        await expect(loginSchema.validate({ email: validLoginData.email, password: 'feiu4'}))
            .rejects.toThrow()
    });

    it('should trigger error on max length password', async () => {
        await expect(loginSchema.validate({ email: validLoginData.email, password: 'fe45654566jgierjgrziogjzioghtyrjziogjzgiorezjgiorzejgrizegjziogiu4'}))
            .rejects.toThrow()
    });
});
