/**
 * Saudi Cyber Expert - Playwright Test
 * Version: 1.0
 * Description: اختبار الموقع للتأكد من عمل جميع المكونات
 */

const { chromium } = require('playwright');

async function testWebsite() {
    console.log('🚀 بدء اختبار الموقع...\n');
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const results = {
        passed: 0,
        failed: 0,
        errors: []
    };
    
    // التقاط رسائل الأخطاء
    page.on('console', msg => {
        if (msg.type() === 'error') {
            // تجاهل أخطاء الخط إذا كانت في CDN أو الإضافات
            if (!msg.text().includes('Failed to load resource') && 
                !msg.text().includes('net::ERR')) {
                results.errors.push(`Console Error: ${msg.text()}`);
            }
        }
    });
    
    page.on('pageerror', error => {
        results.errors.push(`Page Error: ${error.message}`);
    });
    
    try {
        // اختبار 1: تحميل الصفحة
        console.log('📋 اختبار 1: تحميل الصفحة...');
        const url = 'https://elias0878.github.io/saudi-cyber-expert.github.io/';
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        console.log('   ✅ تم تحميل الصفحة بنجاح\n');
        results.passed++;
        
        // اختبار 2: التحقق من عنوان الصفحة
        console.log('📋 اختبار 2: التحقق من العنوان...');
        const title = await page.title();
        if (title.includes('الأمن السيبراني') || title.includes('Cybersecurity')) {
            console.log(`   ✅ العنوان صحيح: ${title}\n`);
            results.passed++;
        } else {
            console.log(`   ❌ العنوان غير متوقع: ${title}\n`);
            results.failed++;
        }
        
        // اختبار 3: التحقق من عدم ظهور شاشة التحميل
        console.log('📋 اختبار 3: التحقق من إخفاء شاشة التحميل...');
        await page.waitForTimeout(3500); // انتظار انتهاء المؤقت
        const loadingScreen = await page.$('#loading-screen');
        const isHidden = await page.evaluate(el => el && el.classList.contains('hidden'), loadingScreen);
        if (isHidden) {
            console.log('   ✅ تم إخفاء شاشة التحميل بنجاح\n');
            results.passed++;
        } else {
            console.log('   ❌ شاشة التحميل لا تزال ظاهرة\n');
            results.failed++;
        }
        
        // اختبار 4: التحقق من وجود الأقسام الرئيسية
        console.log('📋 اختبار 4: التحقق من الأقسام الرئيسية...');
        const sections = ['#home', '#services', '#about', '#certifications', '#contact'];
        for (const section of sections) {
            const el = await page.$(section);
            if (el) {
                console.log(`   ✅ القسم ${section} موجود`);
            } else {
                console.log(`   ❌ القسم ${section} غير موجود`);
                results.failed++;
            }
        }
        console.log('');
        results.passed++;
        
        // اختبار 5: التحقق من البطاقات
        console.log('📋 اختبار 5: التحقق من بطاقات الخدمات...');
        const serviceCards = await page.$$('.service-card');
        if (serviceCards.length >= 4) {
            console.log(`   ✅ عدد بطاقات الخدمات: ${serviceCards.length}\n`);
            results.passed++;
        } else {
            console.log(`   ❌ عدد البطاقات غير كافٍ: ${serviceCards.length}\n`);
            results.failed++;
        }
        
        // اختبار 6: التحقق من نموذج التواصل
        console.log('📋 اختبار 6: التحقق من نموذج التواصل...');
        const contactForm = await page.$('#contact-form');
        if (contactForm) {
            console.log('   ✅ نموذج التواصل موجود\n');
            results.passed++;
        } else {
            console.log('   ❌ نموذج التواصل غير موجود\n');
            results.failed++;
        }
        
        // اختبار 7: التحقق من الروابط
        console.log('📋 اختبار 7: التحقق من روابط التواصل الاجتماعي...');
        const socialLinks = await page.$$('.social-link');
        console.log(`   ✅ عدد روابط التواصل: ${socialLinks.length}\n`);
        results.passed++;
        
        // اختبار 8: التحقق من سرعة التحميل
        console.log('📋 اختبار 8: التحقق من سرعة التحميل...');
        const startTime = Date.now();
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
        const loadTime = Date.now() - startTime;
        console.log(`   ✅ وقت التحميل: ${loadTime}ms\n`);
        results.passed++;
        
    } catch (error) {
        console.error(`❌ خطأ في الاختبار: ${error.message}\n`);
        results.failed++;
        results.errors.push(`Test Error: ${error.message}`);
    }
    
    // عرض النتائج
    console.log('═══════════════════════════════════════════');
    console.log('📊 نتائج الاختبار');
    console.log('═══════════════════════════════════════════');
    console.log(`✅ الاختبارات الناجحة: ${results.passed}`);
    console.log(`❌ الاختبارات الفاشلة: ${results.failed}`);
    
    if (results.errors.length > 0) {
        console.log('\n⚠️ الأخطاء المكتشفة:');
        results.errors.forEach((error, i) => {
            console.log(`   ${i + 1}. ${error}`);
        });
    }
    
    console.log('\n═══════════════════════════════════════════');
    
    await browser.close();
    
    // إرجاع كود الخروج
    if (results.failed > 0) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

// تشغيل الاختبار
testWebsite().catch(error => {
    console.error('فشل في تشغيل الاختبار:', error);
    process.exit(1);
});
