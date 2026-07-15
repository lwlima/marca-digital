import { expect, test } from '@playwright/test';

test.describe('Landing Page Marca Digital', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('marca-digital-cookie-consent', 'rejected'));
    await page.reload();
  });

  test('exibe o logo no header', async ({ page }) => {
    const headerLink = page.getByRole('link', { name: /Marca Digital.*início/i });
    const headerLogo = headerLink.locator('img');
    await expect(headerLogo).toBeVisible();
    await expect(headerLogo).toHaveAttribute('alt', /Marca Digital/);
  });

  test('exibe a imagem do hero', async ({ page }) => {
    const heroImage = page.locator('#inicio img').first();
    await expect(heroImage).toBeVisible();
    await expect(heroImage).toHaveAttribute('alt', /.+/);
  });

  test('todos os botões do WhatsApp têm link válido', async ({ page }) => {
    const whatsappLinks = page.locator('[data-whatsapp-button]');
    await expect(whatsappLinks).toHaveCount(6);

    for (const link of await whatsappLinks.all()) {
      await expect(link).toBeVisible();
      const href = await link.getAttribute('href');
      expect(href).toMatch(/^https:\/\/wa\.me\/5519992839122/);
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });

  test('identifica cada botão do WhatsApp por localização', async ({ page }) => {
    await expect(page.locator('[data-whatsapp-button="navbar"]')).toBeVisible();
    await expect(page.locator('[data-whatsapp-button="hero"]')).toBeVisible();
    await expect(page.locator('[data-whatsapp-button="floating"]')).toBeVisible();
    await expect(page.locator('[data-whatsapp-button="mid_cta"]')).toBeVisible();
    await expect(page.locator('[data-whatsapp-button="problem"]')).toBeVisible();
    await expect(page.locator('[data-whatsapp-button="final_cta"]')).toBeVisible();
  });

  test('FAQ abre e fecha ao clicar, mantendo só um aberto', async ({ page }) => {
    const items = page.locator('#faq details');
    const firstQuestion = items.nth(0).locator('summary');
    const secondQuestion = items.nth(1).locator('summary');

    await page.locator('#faq').scrollIntoViewIfNeeded();
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');

    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');

    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false', {
      timeout: 1_000,
    });

    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute('aria-expanded', 'false', {
      timeout: 1_000,
    });
  });

  test('página de privacidade está acessível', async ({ page }) => {
    await page.getByRole('link', { name: 'Política de Privacidade' }).click();
    await expect(page).toHaveURL(/\/privacidade$/);
    await expect(page.getByRole('heading', { name: 'Política de Privacidade' })).toBeVisible();
  });

  test('banner de cookies é exibido sem consentimento prévio', async ({ page }) => {
    await page.evaluate(() => localStorage.removeItem('marca-digital-cookie-consent'));
    await page.reload();

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Aceitar cookies' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Recusar' })).toBeVisible();
  });
});
