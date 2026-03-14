module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/czasopismo-naukowe/app/api/articles/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/czasopismo-naukowe/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/czasopismo-naukowe/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
async function POST(req) {
    try {
        const formData = await req.formData();
        // Pobieramy teksty z formularza
        const title = formData.get("title");
        const authors = formData.get("authors");
        const pageRange = formData.get("pageRange");
        const publicationDateStr = formData.get("publicationDate");
        const categoryId = parseInt(formData.get("categoryId"));
        // Pobieramy pliki
        const pdfFile = formData.get("pdfFile");
        const zipFile = formData.get("zipFile");
        if (!pdfFile || !title || !authors || !publicationDateStr || !categoryId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Brakujące dane"
            }, {
                status: 400
            });
        }
        // Weryfikacja typu pliku (Wymóg NF4)
        if (pdfFile.type !== "application/pdf") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Tylko pliki PDF są dozwolone!"
            }, {
                status: 400
            });
        }
        const pubDate = new Date(publicationDateStr);
        const year = pubDate.getFullYear();
        const shortYear = year.toString().slice(-2); // Ostatnie dwie cyfry roku (np. "26" z 2026)
        // 1. Pobieramy kategorię z bazy, by poznać literkę (M, I, D, P)
        const category = await prisma.category.findUnique({
            where: {
                id: categoryId
            }
        });
        if (!category) return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Kategoria nie istnieje"
        }, {
            status: 400
        });
        // 2. Szukamy, ile było już artykułów w tej kategorii w tym samym roku (Wymóg F5 - numer NNN)
        // UWAGA: Szukamy w dacie od 1 stycznia do 31 grudnia danego roku
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year, 11, 31, 23, 59, 59);
        const articleCount = await prisma.article.count({
            where: {
                categoryId: category.id,
                publicationDate: {
                    gte: startOfYear,
                    lte: endOfYear
                }
            }
        });
        // 3. Generujemy nazwę pliku X-YY-NNN.pdf
        const nextNumber = (articleCount + 1).toString().padStart(3, "0"); // np. "001"
        const pdfFileName = `${category.code}-${shortYear}-${nextNumber}.pdf`;
        // 4. Zapisujemy plik bezpiecznie na dysku (Wymóg NF4)
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "private_uploads");
        // Jeśli folder private_uploads nie istnieje, twórzymy go
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
                recursive: true
            });
        }
        // Konwertujemy plik na format zjadliwy dla serwera (Buffer)
        const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());
        const pdfPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, pdfFileName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(pdfPath, pdfBuffer);
        // Opcjonalny plik ZIP
        let zipPathStr = null;
        if (zipFile) {
            const zipFileName = `${category.code}-${shortYear}-${nextNumber}-kod.zip`;
            const zipBuffer = Buffer.from(await zipFile.arrayBuffer());
            const zipPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, zipFileName);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(zipPath, zipBuffer);
            zipPathStr = zipFileName;
        }
        // 5. Zapisujemy rekord w bazie danych Prisma
        const newArticle = await prisma.article.create({
            data: {
                title,
                authors,
                pageRange,
                publicationDate: pubDate,
                categoryId: category.id,
                pdfPath: pdfFileName,
                extraFilePath: zipPathStr
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            article: newArticle
        });
    } catch (error) {
        console.error("Błąd podczas zapisywania artykułu:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Wewnętrzny błąd serwera"
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const year = searchParams.get("year");
    let where = {};
    if (category) {
        where.category = {
            name: category
        };
    }
    if (year) {
        const start = new Date(`${year}-01-01`);
        const end = new Date(`${year}-12-31`);
        where.publicationDate = {
            gte: start,
            lte: end
        };
    }
    const articles = await prisma.article.findMany({
        where,
        include: {
            category: true
        },
        orderBy: {
            publicationDate: 'desc'
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(articles);
}
async function DELETE(req) {
    try {
        const { id } = await req.json();
        await prisma.article.delete({
            where: {
                id: Number(id)
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$czasopismo$2d$naukowe$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Błąd usuwania"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9424b17b._.js.map