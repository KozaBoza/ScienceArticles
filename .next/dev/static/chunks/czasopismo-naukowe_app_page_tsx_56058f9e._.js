(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/czasopismo-naukowe/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FAQS = [
    {
        q: "How do I submit my manuscript?",
        a: "You can submit your manuscript via the 'About -> Information for Authors' page. Ensure it is in PDF format and follows our strict double-blind review guidelines."
    },
    {
        q: "Are all published articles open access?",
        a: "Yes, we strongly believe in open science. All articles published in Scientized Science Search are entirely free to read, download, and cite."
    },
    {
        q: "How long does the peer review process take?",
        a: "Our rigorous peer review process typically takes between 4 to 6 weeks, depending on the availability of our specialized reviewers."
    },
    {
        q: "Is there an Article Processing Charge (APC)?",
        a: "Currently, we do not charge any publication fees. The operation of the journal is sustained by our funding partners and academic grants."
    }
];
const ScallopedButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-flex items-center justify-center w-32 h-8 group-btn cursor-pointer text-[var(--color-primary)] transition-colors duration-500 hover:opacity-70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full fill-transparent",
                preserveAspectRatio: "none",
                viewBox: "0 0 100 30",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z",
                    stroke: "currentColor",
                    strokeWidth: "0.8"
                }, void 0, false, {
                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[8px] tracking-[0.2em] uppercase font-bold z-10",
                children: "Read PDF"
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ScallopedButton;
function Home() {
    _s();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // powinno mieć typ Article[], ale dla uproszczenia używamy any[]
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // powinno mieć typ Category[], ale dla uproszczenia używamy any[]
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // który FAQ jest otwarty
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // aktualnie wybrana kategoria do filtrowania
    const [yearFilter, setYearFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // filtr lat (np. "2024", "2025", "2026")
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchData]": async ()=>{
            let url = "/api/articles?"; // endpoint API do pobierania artykułów z opcjonalnymi parametrami filtrowania
            if (activeCategory) url += `category=${encodeURIComponent(activeCategory)}&`; //  filtr kategorii, jeśli jest aktywny
            if (yearFilter) url += `year=${yearFilter}`; //  filtr lat, jeśli jest aktywny
            try {
                const res = await fetch(url); //  artykuły z API z uwzględnieniem filtrów
                const data = await res.json(); //  dane artykułów
                setArticles(data);
                if (categories.length === 0 && data.length > 0) {
                    const catNames = Array.from(new Set(data.map({
                        "Home.useCallback[fetchData].catNames": (a)=>a.category.name
                    }["Home.useCallback[fetchData].catNames"])));
                    setCategories(catNames); // unikalne nazwy kategorii
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        }
    }["Home.useCallback[fetchData]"], [
        activeCategory,
        yearFilter,
        categories.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchData();
        }
    }["Home.useEffect"], [
        fetchData
    ]);
    const toggleFaq = (index)=>{
        setOpenFaqIndex(openFaqIndex === index ? null : index); //  kliknięty FAQ jest już otwarty, zamknij go, w przeciwnym razie otwórz
    };
    const toggleCategory = (catName)=>{
        setActiveCategory((prev)=>prev === catName ? null : catName); //  kliknięta kategoria jest już aktywna, wyłącz filtr, w przeciwnym razie ustaw ją jako aktywną
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center pb-0 bg-[var(--color-bg)] min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full max-w-5xl h-[500px] flex justify-center mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex justify-center items-start gap-3 md:gap-6 z-0 mt-20 opacity-90 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-80 bg-[var(--color-muted)] transform -rotate-3"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-72 bg-[var(--color-muted)] transform rotate-6 mt-6"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-72 bg-[var(--color-muted)] transform -rotate-12 mt-12"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-96 bg-[var(--color-muted)] transform rotate-3 -mt-4"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-80 bg-[var(--color-muted)] transform -rotate-6 mt-8"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-72 bg-[var(--color-muted)] transform rotate-2 mt-2"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-80 bg-[var(--color-muted)] transform -rotate-3 mt-12"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-72 bg-[var(--color-muted)] transform rotate-12 mt-4"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-[4.5rem] md:text-[7rem] leading-[0.75] z-10 flex flex-col items-center mix-blend-multiply tracking-tight mt-10 text-[var(--color-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transform -translate-x-12",
                                children: "SCIENTIZED"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transform translate-x-4",
                                children: "SCIENCE"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transform translate-x-28",
                                children: "SEARCH"
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-8 z-10",
                children: [
                    "2024",
                    "2025",
                    "2026"
                ].map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setYearFilter(yearFilter === year ? null : year),
                        className: `text-[9px] tracking-[0.2em] uppercase px-4 py-1 border transition-all ${yearFilter === year ? 'bg-[var(--color-primary)] text-white' : 'border-[var(--color-primary)] opacity-50 hover:opacity-100'}`,
                        children: [
                            "Year: ",
                            year
                        ]
                    }, year, true, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full max-w-[900px] flex flex-col gap-12 px-6 mt-10 min-h-[400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-4",
                        children: activeCategory ? `Filtered by: ${activeCategory}` : "Latest Articles"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12",
                        children: articles.length > 0 ? articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row min-h-[160px] w-full gap-6 md:gap-8 group animate-in fade-in slide-in-from-bottom-4 duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[25%] bg-[var(--color-secondary)] transition-colors duration-500 flex flex-col items-center justify-center p-6 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] tracking-[0.2em] uppercase opacity-80 mb-2",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-bg)] font-serif text-2xl text-center leading-tight",
                                                children: article.category.name
                                            }, void 0, false, {
                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[75%] border border-[var(--color-primary)] flex flex-col justify-between p-8 transition-colors duration-500 relative bg-[var(--color-bg)] shadow-sm hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-primary)]"
                                            }, void 0, false, {
                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-serif text-2xl md:text-3xl leading-snug group-hover:text-[var(--color-secondary)] transition-colors duration-300",
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1 text-[9px] tracking-[0.15em] uppercase opacity-80 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "opacity-100",
                                                                        children: "Authors:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " ",
                                                                    article.authors
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-6 mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                className: "opacity-100",
                                                                                children: "Date:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                                lineNumber: 125,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " ",
                                                                            new Date(article.publicationDate).toLocaleDateString('en-US', {
                                                                                month: 'long',
                                                                                year: 'numeric'
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                className: "opacity-100",
                                                                                children: "Pages:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                                lineNumber: 126,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " ",
                                                                            article.pageRange
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] tracking-widest uppercase font-bold text-green-600",
                                                                children: "Double-Blind Peer Reviewed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/api/download/${article.pdfPath}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScallopedButton, {}, void 0, false, {
                                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, article.id, true, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center opacity-50 text-[10px] tracking-[0.2em] uppercase py-20 italic",
                            children: "No articles found in this archive selection."
                        }, void 0, false, {
                            fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center mt-32 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-16",
                        children: "Filter by Category"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-12 justify-center items-center",
                        children: categories.map((catName, index)=>{
                            const isActive = activeCategory === catName;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleCategory(catName),
                                className: `flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer shadow-sm hover:scale-105 hover:shadow-lg focus:outline-none
                  ${isActive ? 'w-48 h-48 bg-[var(--color-primary)] text-[var(--color-bg)] ring-4 ring-[var(--color-primary)]/20 scale-105' : 'w-40 h-40 bg-[var(--color-secondary)] text-[var(--color-bg)] opacity-90 hover:opacity-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-serif uppercase text-center px-4 transition-all duration-300 ${isActive ? 'text-2xl font-bold' : 'text-xl'}`,
                                    children: catName
                                }, void 0, false, {
                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full max-w-[600px] flex flex-col gap-4 mt-32 px-6 mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-8",
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    FAQS.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-[var(--color-muted)] transition-colors duration-500 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleFaq(index),
                                    className: "w-full flex justify-between items-center p-6 text-left hover:bg-[var(--color-primary)]/5 transition-colors focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-serif text-lg md:text-xl pr-8",
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[18px] font-light relative w-4 h-4 flex items-center justify-center flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute w-full h-[1px] bg-[var(--color-primary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute w-[1px] h-full bg-[var(--color-primary)] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-90 scale-0' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-all duration-500 ease-in-out px-6 ${openFaqIndex === index ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-80 leading-relaxed pt-4 text-justify ",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/czasopismo-naukowe/app/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Home, "zZQ1lrnQzEdlKjOmiuPjYwkRWjc=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScallopedButton");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=czasopismo-naukowe_app_page_tsx_56058f9e._.js.map