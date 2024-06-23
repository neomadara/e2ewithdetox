import { device, expect, element,  } from "detox";

describe('Login', () => {
    it('should a login if user type username an a password',async () => {
        await device.launchApp();

        const email: string = 'test@example.com';
        const password: string = 'password123';

        await expect(element(by.id('safe-area'))).toBeVisible();
        await expect(element(by.id('welcome-screen'))).toBeVisible();

        await element(by.id('input-username')).typeText(email)
        await element(by.id('input-password')).typeText(password)

        await expect(element(by.id('welcomeMessage'))).toBeVisible();
    });
});
