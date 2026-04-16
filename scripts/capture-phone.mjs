import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// iPhone 14 サイズ
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

// First Touch LP の mockup HTML を読み込み
await page.goto('http://localhost:3000/images/photos/service/mockup-ft.html', {
  waitUntil: 'networkidle2',
  timeout: 15000,
});

// 右下のフローティングボタン等を非表示にする
await page.evaluate(() => {
  // スクロール誘導を非表示
  const scrollHint = document.querySelector('.hidden.lg\\:block');
  if (scrollHint) scrollHint.style.display = 'none';
  // ログインセクション以降を非表示（LPヒーロー部分だけ表示）
  const loginSection = document.getElementById('login-section');
  if (loginSection) loginSection.style.display = 'none';
});

// ヒーロー部分だけをスクリーンショット
await page.screenshot({
  path: 'public/images/photos/service/firsttouch-lp-sp.png',
  clip: { x: 0, y: 0, width: 390, height: 844 },
});

console.log('Screenshot saved to public/images/photos/service/firsttouch-lp-sp.png');
await browser.close();
