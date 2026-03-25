module.exports = [
"[project]/czasopismo-naukowe/app/review-process/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewProcessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PROCESS_STEPS = [
    {
        id: 1,
        title: "Submission",
        isLarge: true,
        description: "The author submits the manuscript. The editorial office performs an initial technical check to ensure formatting and anonymization strictly follow our guidelines."
    },
    {
        id: 2,
        title: "Screening",
        isLarge: false,
        description: "Editor-in-Chief reviews the abstract to determine if the paper aligns with the magazine's scope."
    },
    {
        id: 3,
        title: "Reviewer Assignment",
        isLarge: false,
        description: "The manuscript is assigned to at least two independent, anonymous experts in the specific field."
    },
    {
        id: 4,
        title: "Peer Review I",
        isLarge: false,
        description: "Reviewers rigorously evaluate the methodology, data validity, and contribution to science."
    },
    {
        id: 5,
        title: "Peer Review II",
        isLarge: false,
        description: "Cross-evaluation of the initial feedback by the editorial board to ensure objective criticism."
    },
    {
        id: 6,
        title: "Author Revisions",
        isLarge: false,
        description: "The author is asked to make necessary revisions based on the double-blind feedback."
    },
    {
        id: 7,
        title: "Second Review",
        isLarge: false,
        description: "The revised manuscript undergoes a quick second round of review to verify the corrections."
    },
    {
        id: 8,
        title: "Final Decision",
        isLarge: false,
        description: "The editorial board synthesizes all recommendations to make a final decision: Accept or Reject."
    },
    {
        id: 9,
        title: "Publication",
        isLarge: true,
        description: "The manuscript is formatted into our official layout, assigned a DOI, and published globally."
    }
];
function ReviewProcessPage() {
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PROCESS_STEPS[0]);
    const [isFading, setIsFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = (step)=>{
        if (step.id === activeStep.id) return;
        setIsFading(true);
        setTimeout(()=>{
            setActiveStep(step);
            setIsFading(false);
        }, 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl flex flex-col items-center pt-16 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-serif text-[3.5rem] md:text-[5rem] mb-24 uppercase text-center leading-none tracking-tight",
                children: [
                    "Review",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 33,
                        columnNumber: 15
                    }, this),
                    "Process"
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between mb-24 px-4 h-24",
                children: PROCESS_STEPS.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>handleMouseEnter(step),
                        className: "flex flex-col items-center cursor-pointer group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-full transition-all duration-300 flex-shrink-0
              ${step.isLarge ? 'w-16 h-16 md:w-20 md:h-20 bg-[var(--color-primary)]' : 'w-8 h-8 md:w-10 md:h-10 bg-[var(--color-secondary)]'}
              ${activeStep.id === step.id ? 'scale-110 shadow-lg ring-4 ring-[var(--color-primary)]/20' : 'group-hover:scale-110'}
            `
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-full mt-6 text-[9px] tracking-[0.2em] uppercase whitespace-nowrap text-center font-semibold transition-all duration-300 ${activeStep.id === step.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-60'}`,
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step.id, true, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-3xl border border-[var(--color-primary)] bg-[var(--color-muted)] p-12 relative min-h-[200px] transition-colors duration-500 flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -left-1 w-3 h-3 border-b border-r border-[var(--color-primary)] bg-[var(--color-bg)] transition-colors duration-500"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -right-1 w-3 h-3 border-b border-l border-[var(--color-primary)] bg-[var(--color-bg)] transition-colors duration-500"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -left-1 w-3 h-3 border-t border-r border-[var(--color-primary)] bg-[var(--color-bg)] transition-colors duration-500"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 w-3 h-3 border-t border-l border-[var(--color-primary)] bg-[var(--color-bg)] transition-colors duration-500"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] tracking-[0.3em] uppercase opacity-60 mb-4 font-semibold text-[var(--color-primary)]",
                                children: [
                                    "Stage 0",
                                    activeStep.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl md:text-4xl mb-6 text-[var(--color-primary)]",
                                children: activeStep.title
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "opacity-80 leading-relaxed text-sm md:text-base text-justify text-[var(--color-primary)]",
                                children: activeStep.description
                            }, void 0, false, {
                                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/czasopismo-naukowe/app/review-process/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=czasopismo-naukowe_app_review-process_page_tsx_8ca11967._.js.map