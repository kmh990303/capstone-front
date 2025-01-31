import { test, expect } from '@playwright/test';

test.describe('로그인 테스트', () => {
    test('올바른 이메일과 비밀번호로 로그인 성공', async ({ page }) => {
        await page.goto('/');

        await page.fill('input[name="email"]', 'mmm@gmail.com');

        await page.fill('input[name="password"]', '11111111');

        await page.click('button[type="submit"]');

        await expect(page).toHaveURL('/inputArea', { timeout: 10000 });
    })
})