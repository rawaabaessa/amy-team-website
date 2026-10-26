export const heroLabContent = {
  ar: {
    skip: "انتقل إلى المحتوى", home: "الصفحة الحالية", approach: "كيف نبني؟", explore: "اكتشف ما نصنع", label: "فريق تقني. بعقلية إبداعية.",
    first: "فكرتك تستحق", highlight: "أن تصبح حقيقة", description: "نصمّم ونطوّر مواقع وتطبيقات تصنع فرقًا. من أول رسمة إلى آخر سطر كود، نبني معك منتجك القادم.",
    cta: "من الفكرة إلى الإطلاق", secondary: "استكشف الإمكانيات", web: "مواقع تحكي قصتك", app: "تطبيقات أقرب لعملائك", systems: "أنظمة تبسّط يومك",
    caption: "تصوّر لما يمكن أن نبنيه معًا", demo: "واجهات توضيحية", studio: "تصميم واعٍ. تطوير متقن.",
    process: "فكرة واضحة. تجربة تستحق.", steps: ["نفهم الفكرة", "نصمّم التجربة", "نبني المنتج", "نطلق ونطوّر"],
    stepDescriptions: ["نبدأ بالهدف ومن سيستخدم منتجك.", "نرسم رحلة واضحة وواجهة تعبّر عنك.", "نحوّل التصميم إلى تجربة تعمل بسلاسة.", "نراجع التفاصيل ونترك مساحة للنمو."],
    dashboard: "مساحة العمل", overview: "نظرة عامة", projects: "المشاريع", activity: "نشاط المشروع", welcome: "كل شيء، في مكانه.",
    progress: "رحلة المنتج", design: "تصميم التجربة", development: "تطوير الواجهة", ready: "جاهز للخطوة التالية", mobile: "يومك، أبسط.", tasks: "أفكار كبيرة. خطوات صغيرة.",
    taskOne: "رتّب أفكارك", taskTwo: "اصنع خطوتك التالية", taskThree: "تابع تقدّمك", website: "مساحة لفكرتك.", webSub: "تجربة مصمّمة لتترك أثرًا.",
    back: "العودة للتصميم الحالي", footer: "AMY — نبني ما تتخيّل.",
  },
  en: {
    skip: "Skip to content", home: "Current website", approach: "Our approach", explore: "What we create", label: "Technical minds. Creative instincts.",
    first: "Your next big idea.", highlight: "Made real.", description: "We design and build websites and apps that make a difference. From the first sketch to the final line of code, we build your next product with you.",
    cta: "From idea to launch", secondary: "Explore the possibilities", web: "Websites with a story", app: "Apps that connect", systems: "Systems that simplify",
    caption: "A glimpse of what we can build together", demo: "Illustrative interfaces", studio: "Thoughtful design. Precise development.",
    process: "A clear idea. A meaningful experience.", steps: ["Understand", "Design", "Build", "Launch & evolve"],
    stepDescriptions: ["Start with your purpose and your people.", "Shape a clear journey and your visual voice.", "Turn the design into a seamless experience.", "Refine the details and make room to grow."],
    dashboard: "Workspace", overview: "Overview", projects: "Projects", activity: "Project activity", welcome: "Everything in its place.",
    progress: "Product journey", design: "Experience design", development: "Interface development", ready: "Ready for what’s next", mobile: "Your day, simpler.", tasks: "Big ideas. Small steps.",
    taskOne: "Organize your ideas", taskTwo: "Make your next move", taskThree: "Track your progress", website: "Space for your idea.", webSub: "An experience made to matter.",
    back: "Back to the current design", footer: "AMY — Build what you imagine.",
  },
} as const;

export type HeroLabCopy = (typeof heroLabContent)[keyof typeof heroLabContent];
