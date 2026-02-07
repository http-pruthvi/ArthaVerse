import { chromium } from 'playwright';

(async () => {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Listen to browser console logs
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    try {
        // 1. Find the right port
        let connected = false;
        const ports = [5173, 5174, 5175, 5176];
        for (const port of ports) {
            try {
                console.log(`Trying http://localhost:${port}...`);
                await page.goto(`http://localhost:${port}`, { timeout: 3000 });
                const title = await page.title();
                console.log(`Page Title: "${title}"`);
                if (title.includes('Vite') || title.includes('Fasal') || title.includes('React') || title.includes('arthaverse')) {
                    connected = true;
                    console.log(`✅ Connected on port ${port}`);
                    break;
                }
            } catch (e) {
                console.log(`Connection failed on port ${port}`);
            }
        }

        if (!connected) {
            throw new Error('Could not connect to localhost on any common port.');
        }

        await page.waitForTimeout(2000);

        // Dump page content to debug
        const bodyText = await page.locator('body').innerText();
        console.log('--- Page Body Text ---');
        console.log(bodyText.substring(0, 500) + '...'); // Print first 500 chars
        console.log('----------------------');

        // Helper to click
        const clickOption = async (textPart) => {
            console.log(`Looking for option with text: "${textPart}"`);
            const el = page.locator(`text=${textPart}`).first();
            try {
                await el.waitFor({ state: 'visible', timeout: 5000 });
                await el.click();
                await page.waitForTimeout(1500);
            } catch (e) {
                console.error(`Failed to click "${textPart}". content might be:`, await page.content());
                throw e;
            }
        };

        console.log('--- Starting Test: High Yield Path ---');

        // Check if we are stuck on loading
        if (bodyText.includes('Loading Scenario')) {
            console.error('STUCK ON LOADING SCENARIO');
        }

        // Tweak: try just "Buy" since all choices start with "Buy" usually?
        // Specific: "Buy High-Yield"
        await clickOption('High-Yield');

        await clickOption('Insurance');

        await clickOption('Pesticide');

        await clickOption('Sell Immediately');

        console.log('✅ Cycle completed successfully!');

        // Test Language Switch
        console.log('--- Testing Language Switch ---');
        await page.getByText('HI', { exact: true }).click();
        await page.waitForTimeout(1000);
        console.log('Switched to Hindi');

        await page.getByText('EN', { exact: true }).click();
        console.log('Back to English');

    } catch (error) {
        console.error('❌ Test Failed:', error);
        await page.waitForTimeout(10000); // Wait 10s to see
    } finally {
        console.log('Closing browser...');
        await browser.close();
    }
})();
