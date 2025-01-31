import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // 테스트 파일을 저장할 폴더 지정
    use: {
        baseURL: 'http://localhost:3000', // Next.js 로컬 서버 주소
        headless: true, // 브라우저 UI 없이 실행
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure', // 실패 시 스크린샷 저장
        trace: 'on-first-retry', // 실패 시 트레이스 캡처
    },
    webServer: {
        command: 'npm run dev', // Next.js 개발 서버 실행
        port: 3000, // Next.js 기본 포트
        reuseExistingServer: true, // 기존 서버 재사용
    },
});
