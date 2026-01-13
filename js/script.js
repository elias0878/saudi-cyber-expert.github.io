/**
 * أبو نواف للخدمات التقنية - JavaScript الرئيسي
 * 300 خدمة متخصصة للأفراد
 * Official Saudi Design
 */

(function() {
  'use strict';

  // ==========================================
  // قاعدة بيانات 300 خدمة
  // ==========================================
  const servicesDatabase = [
    // ==========================================
    // سناب شات (50 خدمة)
    // ==========================================
    { id: 'SNAP-001', title: 'استرجاع حساب سناب شات مخترق', category: 'snapchat', description: 'استرجاع الحساب المخترق وإعادة تعيين كلمة المرور' },
    { id: 'SNAP-002', title: 'استرجاع حساب سناب شات محذوف', category: 'snapchat', description: 'إسترجاع الحساب المحذوف خلال 30 يوم' },
    { id: 'SNAP-003', title: 'فك حظر سناب شات مؤقت', category: 'snapchat', description: 'حل مشكلة الحظر المؤقت والحصول على الحساب' },
    { id: 'SNAP-004', title: 'فك حظر سناب شات دائم', category: 'snapchat', description: 'إزالة الحظر الدائم من الجهاز والحساب' },
    { id: 'SNAP-005', title: 'استعادة كلمة مرور سناب شات', category: 'snapchat', description: 'إعادة تعيين كلمة المرور بدون رقم أو إيميل' },
    { id: 'SNAP-006', title: 'تغيير رقم الهاتف في سناب شات', category: 'snapchat', description: 'تحديث رقم الهاتف المرتبط بالحساب' },
    { id: 'SNAP-007', title: 'تغيير البريد الإلكتروني في سناب شات', category: 'snapchat', description: 'تحديث البريد الإلكتروني للحساب' },
    { id: 'SNAP-008', title: 'حذف الذكريات القديمة', category: 'snapchat', description: 'حذف الذكريات والمحتوى القديم بشكل كامل' },
    { id: 'SNAP-009', title: 'استرجاع الذكريات المحذوفة', category: 'snapchat', description: 'إسترجاع الذكريات المفقودة' },
    { id: 'SNAP-010', title: 'فك حظر الخريطة', category: 'snapchat', description: 'إصلاح مشاكل الموقع والخريطة' },
    { id: 'SNAP-011', title: 'إزالة رقم من قائمة الحظر', category: 'snapchat', description: 'إدارة قائمة الحظر وإزالة الأرقام' },
    { id: 'SNAP-012', title: 'توثيق حساب سناب شات', category: 'snapchat', description: 'الحصول على علامة التوثيق الذهبية' },
    { id: 'SNAP-013', title: 'زيادة نقاط سناب شات', category: 'snapchat', description: 'رفع نقاط السحب والمكافآت' },
    { id: 'SNAP-014', title: 'إصلاح مشكلة تسجيل الدخول', category: 'snapchat', description: 'حل مشاكل الدخول والمتكرر' },
    { id: 'SNAP-015', title: 'فك قفل الفلاتر', category: 'snapchat', description: 'تفعيل واستعادة الفلاتر المعلقة' },
    { id: 'SNAP-016', title: 'إدارة الإعدادات', category: 'snapchat', description: 'ضبط إعدادات الخصوصية والأمان' },
    { id: 'SNAP-017', title: 'إزالة الأصدقاء المزعجين', category: 'snapchat', description: 'حظر وإزالة الأصدقاء غير المرغوب فيهم' },
    { id: 'SNAP-018', title: 'استرجاع حساب معلق', category: 'snapchat', description: 'إسترجاع الحساب المعلق بسبب البلاغات' },
    { id: 'SNAP-019', title: 'إصلاح مشاكل الماسنجر', category: 'snapchat', description: 'حل مشاكل إرسال واستقبال الرسائل' },
    { id: 'SNAP-020', title: 'تغيير اسم المستخدم', category: 'snapchat', description: 'تغيير اليوزرنيم بدون حذف الحساب' },
    { id: 'SNAP-021', title: 'إعداد التحقق بخطوتين', category: 'snapchat', description: 'تفعيل الأمان الثنائي للحساب' },
    { id: 'SNAP-022', title: 'استرجاع الحساب المرتبط برقم قديم', category: 'snapchat', description: 'فك ربط رقم قديم وربط رقم جديد' },
    { id: 'SNAP-023', title: 'حذف حساب سناب شات نهائي', category: 'snapchat', description: 'حذف الحساب بشكل دائم' },
    { id: 'SNAP-024', title: 'إصلاح مشاكل المميزات', category: 'snapchat', description: 'تفعيل المميزات المتوقفة' },
    { id: 'SNAP-025', title: 'فك باند الجهاز', category: 'snapchat', description: 'إزالة الحظر من الجهاز المتعلق' },
    { id: 'SNAP-026', title: 'إدارة الإشعارات', category: 'snapchat', description: 'ضبط إعدادات الإشعارات' },
    { id: 'SNAP-027', title: 'استرجاع الحساب بعد إعادة التثبيت', category: 'snapchat', description: 'فقدان البيانات بعد حذف التطبيق' },
    { id: 'SNAP-028', title: 'تغيير تاريخ الميلاد', category: 'snapchat', description: 'تصحيح تاريخ الميلاد في الحساب' },
    { id: 'SNAP-029', title: 'إزالة الارتباط بحسابات أخرى', category: 'snapchat', description: 'فك ربط حسابات فيسبوك وأبل' },
    { id: 'SNAP-030', title: 'إصلاح مشاكل الدفع', category: 'snapchat', description: 'حل مشاكل الدفع والشراء' },
    { id: 'SNAP-031', title: 'استرجاع الاشتراكات', category: 'snapchat', description: 'إسترجاع الاشتراكات المدفوعة' },
    { id: 'SNAP-032', title: 'تفعيل الوضع الآمن', category: 'snapchat', description: 'إعداد الأمان للحسابات الحساسة' },
    { id: 'SNAP-033', title: 'إدارة الصلاحيات', category: 'snapchat', description: 'ضبط صلاحيات الأصدقاء' },
    { id: 'SNAP-034', title: 'إصلاح مشاكل المزامنة', category: 'snapchat', description: 'مزامنة البيانات بين الأجهزة' },
    { id: 'SNAP-035', title: 'استرجاع الملفات المرفقة', category: 'snapchat', description: 'إسترجاع الصور والفيديوهات' },
    { id: 'SNAP-036', title: 'حذف المحتوى بشكل آمن', category: 'snapchat', description: 'حذف آمن للمحتوى الحساس' },
    { id: 'SNAP-037', title: 'إصلاح مشاكل الاتصال', category: 'snapchat', description: 'حل مشاكل الإنترنت والاتصال' },
    { id: 'SNAP-038', title: 'تغيير كلمة المرور للمنتدى', category: 'snapchat', description: 'إعادة تعيين كلمة المرور' },
    { id: 'SNAP-039', title: 'إصلاح مشاكل التحقق', category: 'snapchat', description: 'حل مشاكل رمز التحقق' },
    { id: 'SNAP-040', title: 'استرجاع الحساب بعد الاختراق', category: 'snapchat', description: 'إسترجاع وتأمين الحساب' },
    { id: 'SNAP-041', title: 'إدارة التخزين', category: 'snapchat', description: 'تحرير مساحة التخزين' },
    { id: 'SNAP-042', title: 'إصلاح مشاكل القائمة', category: 'snapchat', description: 'عرض وإدارة قائمة الأصدقاء' },
    { id: 'SNAP-043', title: 'فك حظر الذكريات', category: 'snapchat', description: 'إعادة عرض الذكريات المخفية' },
    { id: 'SNAP-044', title: 'إصلاح مشاكل الساعة', category: 'snapchat', description: 'مزامنة الوقت والتاريخ' },
    { id: 'SNAP-045', title: 'استرجاع الأعدادات', category: 'snapchat', description: 'استعادة الإعدادات الافتراضية' },
    { id: 'SNAP-046', title: 'إصلاح مشاكل التحديث', category: 'snapchat', description: 'حل مشاكل التحديث الجديدة' },
    { id: 'SNAP-047', title: 'تفعيل الوضع الليلي', category: 'snapchat', description: 'إعداد الوضع الداكن' },
    { id: 'SNAP-048', title: 'إصلاح مشاكل اللغة', category: 'snapchat', description: 'تغيير لغة التطبيق' },
    { id: 'SNAP-049', title: 'استرجاع الحساب المفقود', category: 'snapchat', description: 'البحث عن الحساب المفقود' },
    { id: 'SNAP-050', title: 'إدارة الأذونات', category: 'snapchat', description: 'ضبط أذونات الكاميرا والميكروفون' },

    // ==========================================
    // تويتر / إكس (50 خدمة)
    // ==========================================
    { id: 'TWIT-001', title: 'استرجاع حساب تويتر موقوف', category: 'twitter', description: 'إسترجاع الحساب المعلق بسبب المخالفة' },
    { id: 'TWIT-002', title: 'استرجاع حساب تويتر مخترق', category: 'twitter', description: 'إسترجاع الحساب المخترق وتغيير البيانات' },
    { id: 'TWIT-003', title: 'فك تعليق حساب تويتر', category: 'twitter', description: 'إزالة التعليق والحصول على الحساب' },
    { id: 'TWIT-004', title: 'حل مشكلة رمز التحقق', category: 'twitter', description: 'استلام رمز التحقق بخطوتين' },
    { id: 'TWIT-005', title: 'تغيير كلمة المرور', category: 'twitter', description: 'إعادة تعيين كلمة المرور' },
    { id: 'TWIT-006', title: 'تغيير البريد الإلكتروني', category: 'twitter', description: 'تحديث البريد الإلكتروني للحساب' },
    { id: 'TWIT-007', title: 'تغيير رقم الهاتف', category: 'twitter', description: 'تحديث رقم الهاتف المرتبط' },
    { id: 'TWIT-008', title: 'حذف التغريدات القديمة', category: 'twitter', description: 'حذف التغريدات والحسابات القديمة' },
    { id: 'TWIT-009', title: 'توثيق حساب تويتر', category: 'twitter', description: 'الحصول على علامة التوثيق الزرقاء' },
    { id: 'TWIT-010', title: 'إبلاغ عن حساب منتحل', category: 'twitter', description: 'حذف الحسابات المنتحلة لشخصيتك' },
    { id: 'TWIT-011', title: 'فك حظر حساب', category: 'twitter', description: 'إزالة الحظر من حساب محظور' },
    { id: 'TWIT-012', title: 'إدارة قائمة المتابعين', category: 'twitter', description: 'تنظيف وإدارة المتابعين' },
    { id: 'TWIT-013', title: 'إصلاح مشاكل تسجيل الدخول', category: 'twitter', description: 'حل مشاكل الدخول المتكرر' },
    { id: 'TWIT-014', title: 'استرجاع الحساب بدون رقم', category: 'twitter', description: 'إسترجاع الحساب بدون رقم هاتف' },
    { id: 'TWIT-015', title: 'استرجاع الحساب بدون إيميل', category: 'twitter', description: 'إسترجاع الحساب بدون بريد إلكتروني' },
    { id: 'TWIT-016', title: 'تغيير اسم المستخدم', category: 'twitter', description: 'تغيير اليوزرنيم' },
    { id: 'TWIT-017', title: 'إعداد التحقق بخطوتين', category: 'twitter', description: 'تفعيل الأمان الثنائي' },
    { id: 'TWIT-018', title: 'حذف حساب تويتر نهائي', category: 'twitter', description: 'حذف الحساب بشكل دائم' },
    { id: 'TWIT-019', title: 'تعطيل حساب تويتر مؤقتاً', category: 'twitter', description: 'إيقاف الحساب مؤقتاً' },
    { id: 'TWIT-020', title: 'إصلاح مشاكل الإشعارات', category: 'twitter', description: 'حل مشاكل الإشعارات' },
    { id: 'TWIT-021', title: 'حماية التغريدات', category: 'twitter', description: 'تغريدات خاصة ومحمية' },
    { id: 'TWIT-022', title: 'إدارة الإعدادات', category: 'twitter', description: 'ضبط إعدادات الحساب' },
    { id: 'TWIT-023', title: 'استرجاع الحساب بعد الحذف', category: 'twitter', description: 'إسترجاع خلال 30 يوم' },
    { id: 'TWIT-024', title: 'فك ربط التطبيقات', category: 'twitter', description: 'إزالة التطبيقات المرتبطة' },
    { id: 'TWIT-025', title: 'إصلاح مشاكل الهاشتاق', category: 'twitter', description: 'مشاكل الهاشتاقات والمتابعين' },
    { id: 'TWIT-026', title: 'استرجاع الرسائل المحذوفة', category: 'twitter', description: 'إسترجاع الرسائل الخاصة' },
    { id: 'TWIT-027', title: 'إدارة الإعلانات', category: 'twitter', description: 'إعدادات الإعلانات' },
    { id: 'TWIT-028', title: 'تغيير صورة الملف الشخصي', category: 'twitter', description: 'تحديث الصورة الشخصية' },
    { id: 'TWIT-029', title: 'إصلاح مشاكل الفيديو', category: 'twitter', description: 'مشاكل تشغيل الفيديو' },
    { id: 'TWIT-030', title: 'استرجاع حساب معلق', category: 'twitter', description: 'إسترجاع الحساب المعلق' },
    { id: 'TWIT-031', title: 'إدارة المحتوى', category: 'twitter', description: 'ضبط إعدادات المحتوى' },
    { id: 'TWIT-032', title: 'إصلاح مشاكل الاتصال', category: 'twitter', description: 'مشاكل الإنترنت' },
    { id: 'TWIT-033', title: 'استرجاع الحساب المفقود', category: 'twitter', description: 'البحث عن الحساب' },
    { id: 'TWIT-034', title: 'تغيير لغة التطبيق', category: 'twitter', description: 'تغيير لغة الواجهة' },
    { id: 'TWIT-035', title: 'إصلاح مشاكل التحميل', category: 'twitter', description: 'مشاكل رفع الصور' },
    { id: 'TWIT-036', title: 'إدارة المفضلات', category: 'twitter', description: 'حذف وإدارة التغريدات المحفوظة' },
    { id: 'TWIT-037', title: 'استرجاع القوائم', category: 'twitter', description: 'إسترجاع القوائم المحذوفة' },
    { id: 'TWIT-038', title: 'إصلاح مشاكل الاشتراكات', category: 'twitter', description: 'مشاكل X Premium' },
    { id: 'TWIT-039', title: 'فك حظر الإكسبلور', category: 'twitter', description: 'زيادة ظهور الحساب' },
    { id: 'TWIT-040', title: 'إصلاح مشاكل القائمة', category: 'twitter', description: 'عرض التغريدات' },
    { id: 'TWIT-041', title: 'تغيير المنطقة الزمنية', category: 'twitter', description: 'ضبط المنطقة الزمنية' },
    { id: 'TWIT-042', title: 'إدارة الجلسات', category: 'twitter', description: 'مشاهدة وتسجيل الخروج من الجلسات' },
    { id: 'TWIT-043', title: 'استرجاع الحساب بعد البيع', category: 'twitter', description: 'استعادة حساب مباع' },
    { id: 'TWIT-044', title: 'إصلاح مشاكل الاستيراد', category: 'twitter', description: 'استيراد جهات الاتصال' },
    { id: 'TWIT-045', title: 'تفعيل الوضع الليلي', category: 'twitter', description: 'إعداد الوضع الداكن' },
    { id: 'TWIT-046', title: 'إصلاح مشاكل البحث', category: 'twitter', description: 'مشاكل البحث والاكتشاف' },
    { id: 'TWIT-047', title: 'استرجاع الحساب المقفل', category: 'twitter', description: 'إسترجاع حساب مقفل' },
    { id: 'TWIT-048', title: 'إدارة الروابط', category: 'twitter', description: 'مشاكل الروابط المختصرة' },
    { id: 'TWIT-049', title: 'إصلاح مشاكل البث', category: 'twitter', description: 'مشاكل البث المباشر' },
    { id: 'TWIT-050', title: 'فك ربط رقم جديد', category: 'twitter', description: 'ربط رقم هاتف جديد' },

    // ==========================================
    // انستغرام (50 خدمة)
    // ==========================================
    { id: 'INST-001', title: 'استرجاع حساب انستغرام مخترق', category: 'instagram', description: 'إسترجاع الحساب المخترق' },
    { id: 'INST-002', title: 'استرجاع حساب انستغرام متبند', category: 'instagram', description: 'إسترجاع الحساب التجاري' },
    { id: 'INST-003', title: 'فك حظر انستغرام مؤقت', category: 'instagram', description: 'إزالة الحظر المؤقت' },
    { id: 'INST-004', title: 'حل مشكلة Challenge Required', category: 'instagram', description: 'حل تحدي الهوية' },
    { id: 'INST-005', title: 'استرجاع كلمة المرور', category: 'instagram', description: 'إعادة تعيين كلمة المرور' },
    { id: 'INST-006', title: 'استرجاع حساب بدون رقم', category: 'instagram', description: 'إسترجاع بدون رقم هاتف' },
    { id: 'INST-007', title: 'استرجاع حساب بدون إيميل', category: 'instagram', description: 'إسترجاع بدون بريد إلكتروني' },
    { id: 'INST-008', title: 'تغيير كلمة المرور', category: 'instagram', description: 'تحديث كلمة المرور' },
    { id: 'INST-009', title: 'تغيير البريد الإلكتروني', category: 'instagram', description: 'تحديث البريد الإلكتروني' },
    { id: 'INST-010', title: 'تغيير رقم الهاتف', category: 'instagram', description: 'تحديث رقم الهاتف' },
    { id: 'INST-011', title: 'توثيق حساب انستغرام', category: 'instagram', description: 'الحصول على علامة التوثيق الزرقاء' },
    { id: 'INST-012', title: 'إبلاغ عن حساب منتحل', category: 'instagram', description: 'حذف الحسابات المنتحلة' },
    { id: 'INST-013', title: 'فك حظر انستغرام', category: 'instagram', description: 'إزالة الحظر' },
    { id: 'INST-014', title: 'إدارة المتابعين', category: 'instagram', description: 'تنظيف وإدارة المتابعين' },
    { id: 'INST-015', title: 'إصلاح مشاكل تسجيل الدخول', category: 'instagram', description: 'حل مشاكل الدخول' },
    { id: 'INST-016', title: 'استرجاع حساب محذوف', category: 'instagram', description: 'إسترجاع خلال 30 يوم' },
    { id: 'INST-017', title: 'حذف حساب انستغرام نهائي', category: 'instagram', description: 'حذف الحساب بشكل دائم' },
    { id: 'INST-018', title: 'تعطيل حساب مؤقتاً', category: 'instagram', description: 'إيقاف الحساب مؤقتاً' },
    { id: 'INST-019', title: 'فك حظر الإكسبلور', category: 'instagram', description: 'إزالة Shadow Ban' },
    { id: 'INST-020', title: 'إعداد التحقق بخطوتين', category: 'instagram', description: 'تفعيل الأمان الثنائي' },
    { id: 'INST-021', title: 'تغيير اسم المستخدم', category: 'instagram', description: 'تغيير اليوزرنيم' },
    { id: 'INST-022', title: 'استرجاع الصور المحذوفة', category: 'instagram', description: 'إسترجاع الصور والفيديوهات' },
    { id: 'INST-023', title: 'حذف المنشورات القديمة', category: 'instagram', description: 'حذف المنشورات القديمة' },
    { id: 'INST-024', title: 'إدارة الريلز', category: 'instagram', description: 'إصلاح مشاكل الريلز' },
    { id: 'INST-025', title: 'إصلاح مشاكل الستوري', category: 'instagram', description: 'مشاكل القصص' },
    { id: 'INST-026', title: 'استرجاع الرسائل المحذوفة', category: 'instagram', description: 'إسترجاع الرسائل الخاصة' },
    { id: 'INST-027', title: 'فك ربط فيسبوك', category: 'instagram', description: 'فك ربط حسابات فيسبوك' },
    { id: 'INST-028', title: 'ربط حساب واتساب', category: 'instagram', description: 'ربط مع واتساب' },
    { id: 'INST-029', title: 'إصلاح مشاكل المميزات', category: 'instagram', description: 'تفعيل المميزات المتوقفة' },
    { id: 'INST-030', title: 'استرجاع حساب معلق', category: 'instagram', description: 'إسترجاع الحساب المعلق' },
    { id: 'INST-031', title: 'إدارة الإعدادات', category: 'instagram', description: 'ضبط إعدادات الخصوصية' },
    { id: 'INST-032', title: 'تغيير صورة الملف', category: 'instagram', description: 'تحديث الصورة الشخصية' },
    { id: 'INST-033', title: 'إصلاح مشاكل الفيديو', category: 'instagram', description: 'مشاكل تشغيل الفيديو' },
    { id: 'INST-034', title: 'إدارة الإشعارات', category: 'instagram', description: 'ضبط الإشعارات' },
    { id: 'INST-035', title: 'استرجاع الحساب المفقود', category: 'instagram', description: 'البحث عن الحساب المفقود' },
    { id: 'INST-036', title: 'تغيير اللغة', category: 'instagram', description: 'تغيير لغة التطبيق' },
    { id: 'INST-037', title: 'إصلاح مشاكل التحميل', category: 'instagram', description: 'مشاكل رفع الصور' },
    { id: 'INST-038', title: 'إدارة المفضلات', category: 'instagram', description: 'إدارة المحفوظات' },
    { id: 'INST-039', title: 'استرجاع المتابعات', category: 'instagram', description: 'إسترجاع الحسابات المتابعة' },
    { id: 'INST-040', title: 'إصلاح مشاكل الهاشتاق', category: 'instagram', description: 'مشاكل الهاشتاقات' },
    { id: 'INST-041', title: 'تفعيل الوضع الليلي', category: 'instagram', description: 'إعداد الوضع الداكن' },
    { id: 'INST-042', title: 'إصلاح مشاكل الاتصال', category: 'instagram', description: 'مشاكل الإنترنت' },
    { id: 'INST-043', title: 'إدارة الجلسات', category: 'instagram', description: 'مشاهدة الجلسات النشطة' },
    { id: 'INST-044', title: 'فك حظر التعليقات', category: 'instagram', description: 'إزالة حظر التعليقات' },
    { id: 'INST-045', title: 'استرجاع الحساب المقفل', category: 'instagram', description: 'إسترجاع حساب مقفل' },
    { id: 'INST-046', title: 'إصلاح مشاكل الإعلانات', category: 'instagram', description: 'مشاكل الإعلانات' },
    { id: 'INST-047', title: 'تغيير المنطقة', category: 'instagram', description: 'ضبط المنطقة الزمنية' },
    { id: 'INST-048', title: 'إصلاح مشاكل التسوق', category: 'instagram', description: 'مشاكل متجر انستغرام' },
    { id: 'INST-049', title: 'استرجاع الاشتراكات', category: 'instagram', description: 'إسترجاع الاشتراكات المدفوعة' },
    { id: 'INST-050', title: 'إدارة الأذونات', category: 'instagram', description: 'ضبط أذونات التطبيق' },

    // ==========================================
    // واتساب (30 خدمة)
    // ==========================================
    { id: 'WATS-001', title: 'استرجاع حساب واتساب مخترق', category: 'whatsapp', description: 'إسترجاع الحساب المخترق' },
    { id: 'WATS-002', title: 'فك حظر واتساب', category: 'whatsapp', description: 'إزالة الحظر من واتساب' },
    { id: 'WATS-003', title: 'استرجاع الرسائل المحذوفة', category: 'whatsapp', description: 'إسترجاع الرسائل المحذوفة' },
    { id: 'WATS-004', title: 'استرجاع النسخ الاحتياطي', category: 'whatsapp', description: 'استعادة النسخ الاحتياطي' },
    { id: 'WATS-005', title: 'تفعيل التحقق بخطوتين', category: 'whatsapp', description: 'تفعيل الأمان الثنائي' },
    { id: 'WATS-006', title: 'تغيير رقم واتساب', category: 'whatsapp', description: 'نقل الحساب لرقم جديد' },
    { id: 'WATS-007', title: 'استرجاع حساب بدون شريحة', category: 'whatsapp', description: 'إسترجاع بدون شريحة' },
    { id: 'WATS-008', title: 'إصلاح مشاكل الاتصال', category: 'whatsapp', description: 'حل مشاكل الإنترنت' },
    { id: 'WATS-009', title: 'استرجاع المحادثات', category: 'whatsapp', description: 'استعادة المحادثات القديمة' },
    { id: 'WATS-010', title: 'نقل واتساب لهاتف جديد', category: 'whatsapp', description: 'نقل البيانات لهاتف جديد' },
    { id: 'WATS-011', title: 'إصلاح مشاكل التسليم', category: 'whatsapp', description: 'مشاكل إرسال الرسائل' },
    { id: 'WATS-012', title: 'استرجاع الوسائط', category: 'whatsapp', description: 'استعادة الصور والفيديوهات' },
    { id: 'WATS-013', title: 'إدارة التخزين', category: 'whatsapp', description: 'تحرير مساحة التخزين' },
    { id: 'WATS-014', title: 'حذف رسائل واتساب', category: 'whatsapp', description: 'حذف رسائل بشكل آمن' },
    { id: 'WATS-015', title: 'إصلاح مشاكل الاتصال الصوتي', category: 'whatsapp', description: 'مشاكل المكالمات الصوتية' },
    { id: 'WATS-016', title: 'إصلاح مشاكل الاتصال المرئي', category: 'whatsapp', description: 'مشاكل مكالمات الفيديو' },
    { id: 'WATS-017', title: 'إصلاح مشاكل الحالة', category: 'whatsapp', description: 'مشاكل الحالة' },
    { id: 'WATS-018', title: 'استرجاع الواتساب بعد الحذف', category: 'whatsapp', description: 'إعادة تثبيت واسترجاع' },
    { id: 'WATS-019', title: 'إصلاح مشاكل المجموعات', category: 'whatsapp', description: 'مشاكل إنشاء المجموعات' },
    { id: 'WATS-020', title: 'إدارة الخصوصية', category: 'whatsapp', description: 'ضبط إعدادات الخصوصية' },
    { id: 'WATS-021', title: 'استرجاع الرسائل من هاتف مكسور', category: 'whatsapp', description: 'استخراج البيانات من هاتف مكسور' },
    { id: 'WATS-022', title: 'إصلاح مشاكل التشفير', category: 'whatsapp', description: 'مشاكل التشفير من طرف إلى طرف' },
    { id: 'WATS-023', title: 'تفعيل التحقق البيومتري', category: 'whatsapp', description: 'قفل التطبيق بالبصمة' },
    { id: 'WATS-024', title: 'استرجاع الرسائل المحذوفة للجميع', category: 'whatsapp', description: 'إسترجاع بعد الحذف للجميع' },
    { id: 'WATS-025', title: 'إصلاح مشاكل التحديث', category: 'whatsapp', description: 'مشاكل تحديث التطبيق' },
    { id: 'WATS-026', title: 'استرجاع النسخ من جوجل درايف', category: 'whatsapp', description: 'استعادة من جوجل درايف' },
    { id: 'WATS-027', title: 'استرجاع النسخ من آي كلاود', category: 'whatsapp', description: 'استعادة من آي كلاود' },
    { id: 'WATS-028', title: 'إصلاح مشاكل الإشعارات', category: 'whatsapp', description: 'مشاكل الإشعارات' },
    { id: 'WATS-029', title: 'استرجاع الحساب المقفل', category: 'whatsapp', description: 'إسترجاع حساب مقفل' },
    { id: 'WATS-030', title: 'إدارة رقم الحساب', category: 'whatsapp', description: 'تغيير وربط الرقم' },

    // ==========================================
    // تيليجرام (20 خدمة)
    // ==========================================
    { id: 'TELE-001', title: 'استرجاع حساب تيليجرام مخترق', category: 'telegram', description: 'إسترجاع الحساب المخترق' },
    { id: 'TELE-002', title: 'استرجاع حساب تيليجرام محذوف', category: 'telegram', description: 'إسترجاع الحساب المحذوف' },
    { id: 'TELE-003', title: 'فك حظر تيليجرام', category: 'telegram', description: 'إزالة الحظر' },
    { id: 'TELE-004', title: 'تغيير رقم الهاتف', category: 'telegram', description: 'تحديث رقم الهاتف' },
    { id: 'TELE-005', title: 'استرجاع الرسائل', category: 'telegram', description: 'استعادة الرسائل القديمة' },
    { id: 'TELE-006', title: 'تفعيل التحقق بخطوتين', category: 'telegram', description: 'تفعيل الأمان الثنائي' },
    { id: 'TELE-007', title: 'استرجاع القنوات', category: 'telegram', description: 'إسترجاع القنوات والمجموعات' },
    { id: 'TELE-008', title: 'إصلاح مشاكل تسجيل الدخول', category: 'telegram', description: 'حل مشاكل الدخول' },
    { id: 'TELE-009', title: 'استرجاع الملفات', category: 'telegram', description: 'استعادة الملفات المرسلة' },
    { id: 'TELE-010', title: 'إدارة الجلسات', category: 'telegram', description: 'مشاهدة الجلسات النشطة' },
    { id: 'TELE-011', title: 'استرجاع الحساب بدون رقم', category: 'telegram', description: 'إسترجاع بدون رقم' },
    { id: 'TELE-012', title: 'إصلاح مشاكل الاتصال', category: 'telegram', description: 'مشاكل الإنترنت' },
    { id: 'TELE-013', title: 'استرجاع البيانات', category: 'telegram', description: 'استخراج البيانات' },
    { id: 'TELE-014', title: 'إدارة الخصوصية', category: 'telegram', description: 'ضبط إعدادات الخصوصية' },
    { id: 'TELE-015', title: 'استرجاع الصور', category: 'telegram', description: 'استعادة الصور المحذوفة' },
    { id: 'TELE-016', title: 'إصلاح مشاكل الإشعارات', category: 'telegram', description: 'مشاكل الإشعارات' },
    { id: 'TELE-017', title: 'استرجاع الحساب المقفل', category: 'telegram', description: 'إسترجاع حساب مقفل' },
    { id: 'TELE-018', title: 'إصلاح مشاكل المجموعات', category: 'telegram', description: 'مشاكل المجموعات' },
    { id: 'TELE-019', title: 'استرجاع الاشتراكات', category: 'telegram', description: 'إسترجاع الاشتراكات' },
    { id: 'TELE-020', title: 'إدارة الحساب', category: 'telegram', description: 'ضبط إعدادات الحساب' },

    // ==========================================
    // تيك توك (30 خدمة)
    // ==========================================
    { id: 'TIK-001', title: 'استرجاع حساب تيك توك مخترق', category: 'tiktok', description: 'إسترجاع الحساب المخترق' },
    { id: 'TIK-002', title: 'استرجاع حساب تيك توك محذوف', category: 'tiktok', description: 'إسترجاع الحساب المحذوف' },
    { id: 'TIK-003', title: 'فك حظر تيك توك', category: 'tiktok', description: 'إزالة الحظر' },
    { id: 'TIK-004', title: 'استرجاع كلمة المرور', category: 'tiktok', description: 'إعادة تعيين كلمة المرور' },
    { id: 'TIK-005', title: 'تغيير كلمة المرور', category: 'tiktok', description: 'تحديث كلمة المرور' },
    { id: 'TIK-006', title: 'تغيير البريد الإلكتروني', category: 'tiktok', description: 'تحديث البريد الإلكتروني' },
    { id: 'TIK-007', title: 'تغيير رقم الهاتف', category: 'tiktok', description: 'تحديث رقم الهاتف' },
    { id: 'TIK-008', title: 'توثيق حساب تيك توك', category: 'tiktok', description: 'الحصول على علامة التوثيق' },
    { id: 'TIK-009', title: 'فك حظر الإكسبلور', category: 'tiktok', description: 'إزالة Shadow Ban' },
    { id: 'TIK-010', title: 'استرجاع الفيديوهات المحذوفة', category: 'tiktok', description: 'إسترجاع الفيديوهات' },
    { id: 'TIK-011', title: 'حذف الفيديوهات القديمة', category: 'tiktok', description: 'حذف المحتوى القديم' },
    { id: 'TIK-012', title: 'إعداد التحقق بخطوتين', category: 'tiktok', description: 'تفعيل الأمان الثنائي' },
    { id: 'TIK-013', title: 'استرجاع المتابعين', category: 'tiktok', description: 'إسترجاع المتابعين المفقودين' },
    { id: 'TIK-014', title: 'إصلاح مشاكل تسجيل الدخول', category: 'tiktok', description: 'حل مشاكل الدخول' },
    { id: 'TIK-015', title: 'استرجاع اللايكات', category: 'tiktok', description: 'استعادة اللايكات' },
    { id: 'TIK-016', title: 'استرجاع金币', category: 'tiktok', description: 'استعادة العملات' },
    { id: 'TIK-017', title: 'إدارة الإعدادات', category: 'tiktok', description: 'ضبط إعدادات الخصوصية' },
    { id: 'TIK-018', title: 'استرجاع حساب معلق', category: 'tiktok', description: 'إسترجاع الحساب المعلق' },
    { id: 'TIK-019', title: 'فك ربط فيسبوك', category: 'tiktok', description: 'فك ربط الحسابات' },
    { id: 'TIK-020', title: 'فك ربط رقم الهاتف', category: 'tiktok', description: 'فك ربط وربط رقم جديد' },
    { id: 'TIK-021', title: 'إصلاح مشاكل الفيديو', category: 'tiktok', description: 'مشاكل رفع الفيديو' },
    { id: 'TIK-022', title: 'استرجاع الصوت', category: 'tiktok', description: 'استعادة الأصوات المستخدمة' },
    { id: 'TIK-023', title: 'إصلاح مشاكل الاتصال', category: 'tiktok', description: 'مشاكل الإنترنت' },
    { id: 'TIK-024', title: 'استرجاع الحساب المفقود', category: 'tiktok', description: 'البحث عن الحساب' },
    { id: 'TIK-025', title: 'تغيير اسم المستخدم', category: 'tiktok', description: 'تغيير اليوزرنيم' },
    { id: 'TIK-026', title: 'إصلاح مشاكل الهاشتاق', category: 'tiktok', description: 'مشاكل الهاشتاقات' },
    { id: 'TIK-027', title: 'استرجاع الستوري', category: 'tiktok', description: 'استعادة القصص' },
    { id: 'TIK-028', title: 'إدارة الإشعارات', category: 'tiktok', description: 'ضبط الإشعارات' },
    { id: 'TIK-029', title: 'استرجاع الإعدادات', category: 'tiktok', description: 'استعادة الإعدادات' },
    { id: 'TIK-030', title: 'إصلاح مشاكل المؤثرات', category: 'tiktok', description: 'مشاكل الفلاتر والمؤثرات' },

    // ==========================================
    // البريد الإلكتروني (40 خدمة)
    // ==========================================
    { id: 'MAIL-001', title: 'استرجاع جيميل مخترق', category: 'email', description: 'إسترجاع Gmail المخترق' },
    { id: 'MAIL-002', title: 'استرجاع جيميل نسيت كلمة المرور', category: 'email', description: 'إعادة تعيين كلمة المرور' },
    { id: 'MAIL-003', title: 'استرجاع جيميل بدون رقم', category: 'email', description: 'إسترجاع بدون رقم هاتف' },
    { id: 'MAIL-004', title: 'استرجاع جيميل بدون إيميل', category: 'email', description: 'إسترجاع بدون بريد بديل' },
    { id: 'MAIL-005', title: 'استرجاع هوتميل مخترق', category: 'email', description: 'إسترجاع Hotmail المخترق' },
    { id: 'MAIL-006', title: 'استرجاع هوتميل قديم', category: 'email', description: 'إسترجاع حساب قديم' },
    { id: 'MAIL-007', title: 'استرجاع ياهو مخترق', category: 'email', description: 'إسترجاع Yahoo المخترق' },
    { id: 'MAIL-008', title: 'استرجاع آي كلاود مخترق', category: 'email', description: 'إسترجاع iCloud المخترق' },
    { id: 'MAIL-009', title: 'فك قفل آي كلاود', category: 'email', description: 'فك قفل الجهاز' },
    { id: 'MAIL-010', title: 'تغيير كلمة المرور', category: 'email', description: 'تحديث كلمة المرور' },
    { id: 'MAIL-011', title: 'تفعيل التحقق بخطوتين', category: 'email', description: 'تفعيل الأمان الثنائي' },
    { id: 'MAIL-012', title: 'استرجاع الرسائل المحذوفة', category: 'email', description: 'استعادة الرسائل' },
    { id: 'MAIL-013', title: 'استرجاع الملفات المرفقة', category: 'email', description: 'استعادة الملفات' },
    { id: 'MAIL-014', title: 'إلغاء ربط الأجهزة', category: 'email', description: 'إزالة الأجهزة الغريبة' },
    { id: 'MAIL-015', title: 'إدارة جلسات الدخول', category: 'email', description: 'مشاهدة وتسجيل الخروج' },
    { id: 'MAIL-016', title: 'استرجاع الإعدادات', category: 'email', description: 'استعادة إعدادات البريد' },
    { id: 'MAIL-017', title: 'استرجاع جهات الاتصال', category: 'email', description: 'استعادة جهات الاتصال' },
    { id: 'MAIL-018', title: 'استرجاع التقويم', category: 'email', description: 'استعادة التقويم والأحداث' },
    { id: 'MAIL-019', title: 'استرجاع Drive', category: 'email', description: 'استعادة ملفات Drive' },
    { id: 'MAIL-020', title: 'إصلاح مشاكل الإرسال', category: 'email', description: 'مشاكل إرسال البريد' },
    { id: 'MAIL-021', title: 'إصلاح مشاكل الاستلام', category: 'email', description: 'مشاكل استلام البريد' },
    { id: 'MAIL-022', title: 'استرجاع حساب معلق', category: 'email', description: 'إسترجاع حساب معلق' },
    { id: 'MAIL-023', title: 'إصلاح مشاكل Spam', category: 'email', description: 'مشاكل البريد المزعج' },
    { id: 'MAIL-024', title: 'استرجاع البريد المحذوف', category: 'email', description: 'استعادة البريد من سلة المهملات' },
    { id: 'MAIL-025', title: 'استرجاع بريد العمل', category: 'email', description: 'استرجاع حساب Workspace' },
    { id: 'MAIL-026', title: 'إصلاح مشاكل SMTP', category: 'email', description: 'مشاكل إعدادات الخادم' },
    { id: 'MAIL-027', title: 'استرجاع التوقيع', category: 'email', description: 'استعادة توقيع البريد' },
    { id: 'MAIL-028', title: 'إدارة الفلاتر', category: 'email', description: 'إصلاح الفلاتر' },
    { id: 'MAIL-029', title: 'استرجاع التصنيفات', category: 'email', description: 'استعادة المجلدات' },
    { id: 'MAIL-030', title: 'استرجاع قواعد البريد', category: 'email', description: 'استعادة القواعد' },
    { id: 'MAIL-031', title: 'إصلاح مشاكل التشفير', category: 'email', description: 'مشاكل التشفير' },
    { id: 'MAIL-032', title: 'استرجاع الشهادات', category: 'email', description: 'استعادة الشهادات الرقمية' },
    { id: 'MAIL-033', title: 'استرجاع مفاتيح PGP', category: 'email', description: 'استعادة مفاتيح التشفير' },
    { id: 'MAIL-034', title: 'استرجاع إعدادات الخصوصية', category: 'email', description: 'استعادة إعدادات الخصوصية' },
    { id: 'MAIL-035', title: 'استرجاع اسم العرض', category: 'email', description: 'تغيير اسم المرسل' },
    { id: 'MAIL-036', title: 'إصلاح مشاكل DNS', category: 'email', description: 'مشاكل إعدادات النطاق' },
    { id: 'MAIL-037', title: 'استرجاع بريد النطاق', category: 'email', description: 'استرجاع بريد مخصص' },
    { id: 'MAIL-038', title: 'إصلاح مشاكل المصادقة', category: 'email', description: 'مشاكل 2FA' },
    { id: 'MAIL-039', title: 'استرجاع من الاسترداد', category: 'email', description: 'استرجاع كلمة المرور المنسية' },
    { id: 'MAIL-040', title: 'استرجاع البريد المؤقت', category: 'email', description: 'استرجاع حسابات مؤقتة' },

    // ==========================================
    // ألعاب الفيديو (30 خدمة)
    // ==========================================
    { id: 'GAME-001', title: 'استرجاع حساب PSN مخترق', category: 'gaming', description: 'إسترجاع PSN المخترق' },
    { id: 'GAME-002', title: 'استرجاع حساب PSN محذوف', category: 'gaming', description: 'إسترجاع PSN المحذوف' },
    { id: 'GAME-003', title: 'فك باند PSN', category: 'gaming', description: 'إزالة الحظر من PSN' },
    { id: 'GAME-004', title: 'استرجاع حساب Xbox مخترق', category: 'gaming', description: 'إسترجاع Xbox المخترق' },
    { id: 'GAME-005', title: 'استرجاع حساب Xbox محذوف', category: 'gaming', description: 'إسترجاع Xbox المحذوف' },
    { id: 'GAME-006', title: 'فك باند Xbox', category: 'gaming', description: 'إزالة الحظر من Xbox' },
    { id: 'GAME-007', title: 'استرجاع حساب Nintendo مخترق', category: 'gaming', description: 'إسترجاع Nintendo المخترق' },
    { id: 'GAME-008', title: 'استرجاع حساب Steam مخترق', category: 'gaming', description: 'إسترجاع Steam المخترق' },
    { id: 'GAME-009', title: 'فك باند Steam', category: 'gaming', description: 'إزالة الحظر من Steam' },
    { id: 'GAME-010', title: 'استرجاع حساب PUBG مخترق', category: 'gaming', description: 'إسترجاع PUBG المخترق' },
    { id: 'GAME-011', title: 'فك باند PUBG', category: 'gaming', description: 'إزالة الحظر من PUBG' },
    { id: 'GAME-012', title: 'استرجاع حساب Free Fire مخترق', category: 'gaming', description: 'إسترجاع Free Fire' },
    { id: 'GAME-013', title: 'استرجاع حساب Valorant مخترق', category: 'gaming', description: 'إسترجاع Valorant' },
    { id: 'GAME-014', title: 'استرجاع حساب Fortnite مخترق', category: 'gaming', description: 'إسترجاع Fortnite' },
    { id: 'GAME-015', title: 'استرجاع حساب Apex Legends مخترق', category: 'gaming', description: 'إسترجاع Apex' },
    { id: 'GAME-016', title: 'استرجاع حساب League of Legends مخترق', category: 'gaming', description: 'إسترجاع LoL' },
    { id: 'GAME-017', title: 'استرجاع حساب Roblox مخترق', category: 'gaming', description: 'إسترجاع Roblox' },
    { id: 'GAME-018', title: 'استرجاع حساب Minecraft مخترق', category: 'gaming', description: 'إسترجاع Minecraft' },
    { id: 'GAME-019', title: 'استرجاع مشتريات الألعاب', category: 'gaming', description: 'استعادة المشتريات' },
    { id: 'GAME-020', title: 'استرجاع العملات', category: 'gaming', description: 'استعادة العملات الافتراضية' },
    { id: 'GAME-021', title: 'استرجاع الأغراض', category: 'gaming', description: 'استعادة العناصر' },
    { id: 'GAME-022', title: 'تغيير كلمة المرور', category: 'gaming', description: 'تحديث كلمة المرور' },
    { id: 'GAME-023', title: 'تفعيل التحقق بخطوتين', category: 'gaming', description: 'تفعيل الأمان الثنائي' },
    { id: 'GAME-024', title: 'استرجاع الحساب بدون إيميل', category: 'gaming', description: 'إسترجاع بدون بريد' },
    { id: 'GAME-025', title: 'إصلاح مشاكل الاتصال', category: 'gaming', description: 'مشاكل الاتصال' },
    { id: 'GAME-026', title: 'استرجاع الحساب المقفل', category: 'gaming', description: 'إسترجاع حساب مقفل' },
    { id: 'GAME-027', title: 'إصلاح مشاكل المزامنة', category: 'gaming', description: 'مشاكل المزامنة' },
    { id: 'GAME-028', title: 'استرجاع التقدم', category: 'gaming', description: 'استعادة مستوى اللعب' },
    { id: 'GAME-029', title: 'إصلاح مشاكل التوافق', category: 'gaming', description: 'مشاكل التوافق' },
    { id: 'GAME-030', title: 'استرجاع الحساب المفقود', category: 'gaming', description: 'البحث عن الحساب' },

    // ==========================================
    // خدمات متنوعة (20 خدمة)
    // ==========================================
    { id: 'MISC-001', title: 'استرجاع حساب لينكدإن مخترق', category: 'misc', description: 'إسترجاع LinkedIn المخترق' },
    { id: 'MISC-002', title: 'استرجاع حساب Reddit مخترق', category: 'misc', description: 'إسترجاع Reddit المخترق' },
    { id: 'MISC-003', title: 'استرجاع حساب Discord مخترق', category: 'misc', description: 'إسترجاع Discord المخترق' },
    { id: 'MISC-004', title: 'استرجاع حساب Pinterest مخترق', category: 'misc', description: 'إسترجاع Pinterest المخترق' },
    { id: 'MISC-005', title: 'استرجاع حساب Reddit محذوف', category: 'misc', description: 'إسترجاع Reddit المحذوف' },
    { id: 'MISC-006', title: 'استرجاع حساب Skype مخترق', category: 'misc', description: 'إسترجاع Skype المخترق' },
    { id: 'MISC-007', title: 'استرجاع حساب Dropbox مخترق', category: 'misc', description: 'إسترجاع Dropbox المخترق' },
    { id: 'MISC-008', title: 'استرجاع حساب OneDrive مخترق', category: 'misc', description: 'إسترجاع OneDrive المخترق' },
    { id: 'MISC-009', title: 'استرجاع حساب PayPal مخترق', category: 'misc', description: 'إسترجاع PayPal المخترق' },
    { id: 'MISC-010', title: 'استرجاع حساب Netflix مخترق', category: 'misc', description: 'إسترجاع Netflix المخترق' },
    { id: 'MISC-011', title: 'استرجاع حساب Spotify مخترق', category: 'misc', description: 'إسترجاع Spotify المخترق' },
    { id: 'MISC-012', title: 'استرجاع حساب Apple ID مخترق', category: 'misc', description: 'إسترجاع Apple ID المخترق' },
    { id: 'MISC-013', title: 'فك قفل iPhone', category: 'misc', description: 'فك قفل جهاز iPhone' },
    { id: 'MISC-014', title: 'فك قفل Android', category: 'misc', description: 'فك قفل جهاز Android' },
    { id: 'MISC-015', title: 'استرجاع الملفات المحذوفة', category: 'misc', description: 'استعادة الملفات' },
    { id: 'MISC-016', title: 'استرجاع الصور المحذوفة', category: 'misc', description: 'استعادة الصور' },
    { id: 'MISC-017', title: 'استرجاع الفيديوهات المحذوفة', category: 'misc', description: 'استعادة الفيديوهات' },
    { id: 'MISC-018', title: 'إصلاح الهاتف من البرمجيات الخبيثة', category: 'misc', description: 'إزالة الفيروسات' },
    { id: 'MISC-019', title: 'استرجاع بيانات الهاتف المكسور', category: 'misc', description: 'استخراج البيانات' },
    { id: 'MISC-020', title: 'استرجاع الحساب من انتحال الشخصية', category: 'misc', description: 'حذف الحسابات المنتحلة' }
  ];

  // ==========================================
  // المتغيرات العامة
  // ==========================================
  let currentPage = 1;
  const itemsPerPage = 12;
  let filteredServices = [...servicesDatabase];
  let activeCategory = 'all';

  // ==========================================
  // دالة إنشاء كرت خدمة
  // ==========================================
  function createServiceCard(service) {
    const platformIcons = {
      snapchat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>',
      twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
      telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
      tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-3.11 6.31-2.05 1.52-4.66 1.63-6.86 1.07-2.38-.61-4.27-2.47-4.95-4.81-.47-.92-.65-1.96-.58-2.96.03-.43.17-.85.39-1.21.23-.35.53-.65.87-.79.83-.34 1.79-.23 2.47.19.34.21.64.48.91.79.28.31.52.66.72 1.04.21.38.38.78.52 1.19.14.41.24.84.29 1.27V21.5c-.05 2.5 1.67 4.81 4.1 5.72 2.24.85 4.86.62 6.74-1.2 1.62-1.56 2.45-3.94 2.12-6.26-.08-.56-.23-1.1-.47-1.6-.25-.51-.56-.97-.94-1.38-.37-.41-.8-.77-1.26-1.09v4.5c.67-.13 1.31-.35 1.88-.65.55-.29 1.07-.63 1.54-.97.47-.34.9-.72 1.29-1.13.38-.41.72-.85 1-1.33.27-.48.49-.98.66-1.5.17-.52.29-1.06.36-1.61.06-.55.08-1.11.08-1.67V.02z"/></svg>',
      email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
      gaming: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0C20.61 19 21.8 17.63 21.58 16.09zM11 11H9v2H8v-2H6v-1h2V8h1v2h2V11zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1S15.55 10 15 10zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1S17.55 13 17 13z"/></svg>',
      misc: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>'
    };

    const categoryNames = {
      snapchat: 'سناب شات',
      twitter: 'تويتر',
      instagram: 'انستغرام',
      whatsapp: 'واتساب',
      telegram: 'تيليجرام',
      tiktok: 'تيك توك',
      email: 'بريد إلكتروني',
      gaming: 'ألعاب الفيديو',
      misc: 'خدمات متنوعة'
    };

    return `
      <div class="service-card fade-in" data-id="${service.id}" onclick="openServiceModal('${service.id}')">
        <div class="service-header">
          <div class="service-icon">
            ${platformIcons[service.category] || platformIcons.misc}
          </div>
          <div class="service-info">
            <div class="service-id">${service.id}</div>
            <div class="service-title">${service.title}</div>
          </div>
        </div>
        <div class="service-description">${service.description}</div>
        <div class="service-meta">
          <div class="service-platform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            ${categoryNames[service.category] || service.category}
          </div>
          <div class="service-action">
            اطلب الخدمة
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // دالة عرض الخدمات
  // ==========================================
  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageServices = filteredServices.slice(startIndex, endIndex);

    if (pageServices.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <h3>لا توجد خدمات</h3>
          <p>جرب البحث بطريقة مختلفة</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = pageServices.map(service => createServiceCard(service)).join('');
    renderPagination();
  }

  // ==========================================
  // دالة عرض الترقيم
  // ==========================================
  function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    let paginationHTML = '';

    paginationHTML += `
      <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        paginationHTML += `
          <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
        `;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        paginationHTML += '<span class="page-btn" style="border: none; cursor: default;">...</span>';
      }
    }

    paginationHTML += `
      <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    `;

    pagination.innerHTML = paginationHTML;
  }

  // ==========================================
  // دالة تغيير الصفحة
  // ==========================================
  window.changePage = function(page) {
    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderServices();
    document.getElementById('servicesGrid').scrollIntoView({ behavior: 'smooth' });
  };

  // ==========================================
  // دالة تصفية الخدمات
  // ==========================================
  function filterServices(category) {
    activeCategory = category;
    currentPage = 1;

    if (category === 'all') {
      filteredServices = [...servicesDatabase];
    } else {
      filteredServices = servicesDatabase.filter(service => service.category === category);
    }

    renderServices();
    updateActiveFilter();
  }

  // ==========================================
  // دالة تحديث الفئة النشطة
  // ==========================================
  function updateActiveFilter() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.category === activeCategory) {
        btn.classList.add('active');
      }
    });
  }

  // ==========================================
  // دالة البحث
  // ==========================================
  function searchServices(query) {
    currentPage = 1;
    
    if (!query.trim()) {
      if (activeCategory === 'all') {
        filteredServices = [...servicesDatabase];
      } else {
        filteredServices = servicesDatabase.filter(service => service.category === activeCategory);
      }
    } else {
      const searchQuery = query.toLowerCase();
      filteredServices = servicesDatabase.filter(service => {
        const inCategory = activeCategory === 'all' || service.category === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery) ||
                             service.description.toLowerCase().includes(searchQuery) ||
                             service.id.toLowerCase().includes(searchQuery);
        return inCategory && matchesSearch;
      });
    }

    renderServices();
  }

  // ==========================================
  // دالة فتح مودال الخدمة
  // ==========================================
  window.openServiceModal = function(serviceId) {
    const service = servicesDatabase.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById('serviceModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <div class="modal-service-info">
        <div class="modal-service-id">${service.id}</div>
        <div class="modal-service-title">${service.title}</div>
      </div>
      
      <div class="alert alert-info">
        <div class="alert-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </div>
        <div class="alert-text">
          <div class="alert-title">معلومات مهمة</div>
          <p>املأ النموذج أدناه وسنتواصل معك عبر البريد الإلكتروني أو واتساب خلال 24 ساعة.</p>
        </div>
      </div>

      <form id="serviceRequestForm" onsubmit="submitServiceRequest(event)">
        <input type="hidden" name="serviceId" value="${service.id}">
        <input type="hidden" name="serviceTitle" value="${service.title}">
        
        <div class="form-group">
          <label class="form-label">الاسم الكامل *</label>
          <input type="text" class="form-input" name="name" required placeholder="أدخل اسمك الكامل">
        </div>
        
        <div class="form-group">
          <label class="form-label">البريد الإلكتروني *</label>
          <input type="email" class="form-input" name="email" required placeholder="example@email.com">
        </div>
        
        <div class="form-group">
          <label class="form-label">رقم الواتساب</label>
          <input type="tel" class="form-input" name="phone" placeholder="966xxxxxxxxx">
        </div>
        
        <div class="form-group">
          <label class="form-label">وصف المشكلة *</label>
          <textarea class="form-textarea" name="description" required placeholder="اشرح مشكلتك بالتفصيل..."></textarea>
        </div>
        
        <button type="submit" class="form-btn">إرسال الطلب</button>
      </form>
    `;

    modal.classList.add('active');
  };

  // ==========================================
  // دالة إرسال طلب الخدمة
  // ==========================================
  window.submitServiceRequest = function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // محاكاة إرسال الطلب
    console.log('طلب خدمة جديد:', data);
    
    const modal = document.getElementById('serviceModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <div class="alert alert-success">
        <div class="alert-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="alert-text">
          <div class="alert-title">تم إرسال طلبك بنجاح!</div>
          <p>سيتم التواصل معك خلال 24 ساعة عبر البريد الإلكتروني أو واتساب.</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px;">
        <button class="btn btn-primary" onclick="closeModal()">إغلاق</button>
      </div>
    `;
  };

  // ==========================================
  // دالة إغلاق المودال
  // ==========================================
  window.closeModal = function() {
    document.getElementById('serviceModal').classList.remove('active');
  };

  // ==========================================
  // دالة تهيئة الأحداث
  // ==========================================
  function initEvents() {
    // تصفية الفئات
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterServices(btn.dataset.category);
      });
    });

    // البحث
    const searchInput = document.getElementById('searchInput');
    const searchSelect = document.getElementById('searchSelect');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchServices(e.target.value);
      });
    }

    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        console.log('نموذج اتصال:', Object.fromEntries(formData));
        
        const contactModal = document.getElementById('contactModal');
        contactModal.querySelector('.modal-body').innerHTML = `
          <div class="alert alert-success">
            <div class="alert-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="alert-text">
              <div class="alert-title">تم إرسال رسالتك بنجاح!</div>
              <p>سنرد عليك في أقرب وقت ممكن.</p>
            </div>
          </div>
        `;
      });
    }

    // إغلاق المودال
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });

    // إغلاق المودال بالزر
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-overlay').classList.remove('active');
      });
    });
  }

  // ==========================================
  // تهيئة الصفحة
  // ==========================================
  document.addEventListener('DOMContentLoaded', function() {
    // إخفاء شاشة التحميل
    setTimeout(() => {
      document.querySelector('.loading-screen').classList.add('hidden');
    }, 1000);

    // تهيئة الأحداث
    initEvents();

    // عرض الخدمات
    renderServices();

    // حساب الإحصائيات
    const totalServices = servicesDatabase.length;
    document.getElementById('totalServices').textContent = totalServices;
  });
})();
