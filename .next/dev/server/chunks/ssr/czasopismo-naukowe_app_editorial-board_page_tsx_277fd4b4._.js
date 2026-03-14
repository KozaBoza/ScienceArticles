module.exports = [
"[project]/czasopismo-naukowe/app/editorial-board/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorialBoardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Przykładowa baza danych członków redakcji
const EDITORS = [
    {
        id: 1,
        name: "Dr. Eleanor Vance",
        role: "Editor-in-Chief",
        education: "Ph.D. in Cognitive Psychology, Oxford University",
        specialization: "Neuroplasticity & Behavioral Science",
        image: "" // Opcjonalnie: "/images/eleanor.jpg"
    },
    {
        id: 2,
        name: "Prof. Julian Asher",
        role: "Managing Editor",
        education: "Ph.D. in Computer Science, MIT",
        specialization: "Artificial Intelligence & Machine Learning",
        image: ""
    },
    {
        id: 3,
        name: "Dr. Sarah Lin",
        role: "Associate Editor",
        education: "Ph.D. in Mathematics, Stanford University",
        specialization: "Cryptography & Number Theory",
        image: ""
    },
    {
        id: 4,
        name: "Dr. Marcus Thorne",
        role: "Review Coordinator",
        education: "Ph.D. in Physics, Caltech",
        specialization: "Quantum Mechanics & Thermodynamics",
        image: ""
    }
];
function EditorialBoardPage() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Funkcje do zmiany osoby (z zabezpieczeniem przed spamowaniem kliknięć)
    const nextProfile = ()=>{
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev)=>(prev + 1) % EDITORS.length);
    };
    const prevProfile = ()=>{
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev)=>(prev - 1 + EDITORS.length) % EDITORS.length);
    };
    // Resetujemy blokadę animacji po krótkim czasie
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAnimating) {
            const timer = setTimeout(()=>setIsAnimating(false), 400); // 400ms na animację
            return ()=>clearTimeout(timer);
        }
    }, [
        isAnimating
    ]);
    // Obliczanie indeksów dla lewego i prawego koła
    const prevIndex = (currentIndex - 1 + EDITORS.length) % EDITORS.length;
    const nextIndex = (currentIndex + 1) % EDITORS.length;
    const currentEditor = EDITORS[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl flex flex-col items-center pt-16 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-serif text-[4rem] md:text-[5rem] mb-20 uppercase tracking-tight text-center leading-none",
                children: [
                    "Editorial",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 75,
                        columnNumber: 18
                    }, this),
                    "Board"
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-center gap-8 md:gap-16 mb-16 relative h-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: prevProfile,
                        className: "w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-secondary)] transition-all duration-500 cursor-pointer hover:scale-105 hover:opacity-80 flex-shrink-0 bg-cover bg-center overflow-hidden border-2 border-transparent",
                        style: {
                            backgroundImage: `url(${EDITORS[prevIndex].image})`
                        },
                        children: !EDITORS[prevIndex].image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-[var(--color-secondary)] opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                            lineNumber: 88,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-primary)] transition-all duration-500 flex-shrink-0 shadow-lg bg-cover bg-center overflow-hidden border-4 border-[var(--color-bg)] z-10 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`,
                        style: {
                            backgroundImage: `url(${currentEditor.image})`
                        },
                        children: !currentEditor.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-[var(--color-primary)]"
                        }, void 0, false, {
                            fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                            lineNumber: 96,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: nextProfile,
                        className: "w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-secondary)] transition-all duration-500 cursor-pointer hover:scale-105 hover:opacity-80 flex-shrink-0 bg-cover bg-center overflow-hidden border-2 border-transparent",
                        style: {
                            backgroundImage: `url(${EDITORS[nextIndex].image})`
                        },
                        children: !EDITORS[nextIndex].image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-[var(--color-secondary)] opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                            lineNumber: 105,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col items-center text-center max-w-2xl transition-all duration-400 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-serif text-3xl md:text-4xl uppercase mb-2",
                        children: currentEditor.name
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block border border-[var(--color-primary)] px-6 py-2 mb-8 mt-2 text-[10px] tracking-[0.2em] uppercase font-semibold",
                        children: currentEditor.role
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center border-b border-[var(--color-primary)]/20 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase opacity-60 mb-1",
                                        children: "Education"
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: currentEditor.education
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase opacity-60 mb-1",
                                        children: "Specialization"
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: currentEditor.specialization
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 text-[9px] tracking-[0.2em] uppercase opacity-50",
                children: "Click side circles to navigate"
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/czasopismo-naukowe/app/editorial-board/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=czasopismo-naukowe_app_editorial-board_page_tsx_277fd4b4._.js.map