(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/czasopismo-naukowe/app/reviewers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ReviewersPage() {
    _s();
    const [reviewers, setReviewers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewersPage.useEffect": ()=>{
            const fetchReviewers = {
                "ReviewersPage.useEffect.fetchReviewers": async ()=>{
                    try {
                        const res = await fetch("/api/reviewers");
                        const data = await res.json();
                        setReviewers(data);
                    } catch (err) {
                        console.error("Failed to fetch reviewers", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ReviewersPage.useEffect.fetchReviewers"];
            fetchReviewers();
        }
    }["ReviewersPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center py-16 px-8 bg-[var(--color-bg)] min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight text-[var(--color-primary)]",
                children: [
                    "Our",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                        lineNumber: 28,
                        columnNumber: 12
                    }, this),
                    "Reviewers"
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl text-center mb-16 opacity-80 text-sm italic",
                children: "We are deeply grateful to our esteemed panel of anonymous peer reviewers. Their dedication, rigorous analysis, and constructive feedback are the cornerstones of the scientific integrity upheld by Scientized Science Search."
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] tracking-[0.3em] uppercase opacity-50",
                children: "Loading database..."
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full max-w-4xl border-t border-[var(--color-primary)]/20 pt-16",
                children: reviewers.map((reviewer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col border-b border-[var(--color-primary)]/10 pb-6 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] transition-colors duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-2xl group-hover:translate-x-1 transition-transform duration-300",
                                        children: reviewer.name
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col ml-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] tracking-widest uppercase opacity-70 mb-1",
                                        children: reviewer.affiliation
                                    }, void 0, false, {
                                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] opacity-90",
                                        children: [
                                            "Area: ",
                                            reviewer.field
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, reviewer.id, true, {
                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-24 inline-flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] tracking-[0.2em] uppercase mb-2",
                        children: "Interested in reviewing?"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[var(--color-primary)] pb-1 text-xs",
                        children: "Contact our editorial board"
                    }, void 0, false, {
                        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/czasopismo-naukowe/app/reviewers/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ReviewersPage, "P/w0fB9/rxW672bSgKYWdsqXiRU=");
_c = ReviewersPage;
var _c;
__turbopack_context__.k.register(_c, "ReviewersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=czasopismo-naukowe_app_reviewers_page_tsx_bff781b3._.js.map