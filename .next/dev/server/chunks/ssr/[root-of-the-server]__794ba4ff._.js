module.exports = [
"[project]/czasopismo-naukowe/app/favicon.ico.mjs { IMAGE => \"[project]/czasopismo-naukowe/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/czasopismo-naukowe/app/favicon.ico.mjs { IMAGE => \"[project]/czasopismo-naukowe/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/czasopismo-naukowe/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/czasopismo-naukowe/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/czasopismo-naukowe/app/admin/AdminDashboard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/czasopismo-naukowe/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/admin/page.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/czasopismo-naukowe/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$app$2f$admin$2f$AdminDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/app/admin/AdminDashboard.tsx [app-rsc] (ecmascript)");
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
async function AdminPage() {
    // Pobieramy dane na serwerze [cite: 69, 71]
    const categories = await prisma.category.findMany();
    const articles = await prisma.article.findMany({
        include: {
            category: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$app$2f$admin$2f$AdminDashboard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialCategories: categories,
        initialArticles: articles
    }, void 0, false, {
        fileName: "[project]/czasopismo-naukowe/app/admin/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/czasopismo-naukowe/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/czasopismo-naukowe/app/admin/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__794ba4ff._.js.map