(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_career_page_tsx_d077b285._.js", {

"[project]/src/app/career/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Career)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const experiences = [
    {
        company: 'IdeaS Revenue Solutions',
        role: 'Associate Software Engineer: G2 Casper Product',
        period: 'Jan 2023 - Aug 2023',
        location: 'Pune, India',
        description: [
            'Collaborated with the R&D team in the United States to develop optimized rates for 3-star hotels and resorts through the G2 Casper product, conducting A/B testing and performing ad hoc regressions to refine pricing parameters and enhance decision-making accuracy.',
            'Designed a robust big data collection and analytics framework using technologies like Hadoop and Spark, resulting in a 30% increase in actionable insights that directly informed rate optimization strategies for clients in the hospitality industry.',
            'Automated the ad hoc regression process and streamlined the comparison of Excel workbooks using Python scripts and Postman API calls, significantly reducing manual intervention and improving data processing efficiency by 40%.',
            'Created dynamic dashboards in Excel and Power BI, enhancing forecasting accuracy by 25% and facilitating a 20% reduction in planning cycle time, contributing to an estimated revenue growth of $80K.'
        ],
        skills: [
            'Python',
            'SQL',
            'Power BI',
            'Excel',
            'ETL',
            'Data Analysis',
            'Hadoop',
            'ETL Pipeline',
            'Big Data',
            'Ad-hoc Regression',
            'A/B Testing'
        ],
        logo: '/assets/companies/ideas-revenue.png'
    },
    {
        company: 'RWTH International Academy',
        role: 'Data Analyst Intern',
        period: 'Oct 2022 - Dec 2022',
        location: 'Pune, India',
        description: [
            'Analyzed sensor and telematics data from logistics trucks using Python, SQL, and Scikit-learn for data extraction and processing, applying statistical testing to identify trends and outliers, which improved predictive analytics and reduced delivery time variance by 15%.',
            'Built predictive time series models using techniques (NAIVE and SNAIVE), optimizing delivery routes by factoring in traffic patterns, fuel efficiency, and driver relaxation schedules and implementing optimized routing strategies to improve service efficiency.',
            'Additionally, I designed data models to enhance logistics operations, increasing delivery efficiency by 25%, and developed custom Power BI dashboards to present real-time data to leadership, translating technical analysis into clear business recommendations.'
        ],
        skills: [
            'Python',
            'SQL',
            'Tableau',
            'Power BI',
            'Data Analysis',
            'Process Optimization',
            'Time Series Analysis',
            'Forecasting',
            'Data Modeling'
        ],
        logo: '/assets/companies/rwth.png'
    },
    {
        company: 'Volkswagen Group Technology Solutions',
        role: 'Data Analyst Intern',
        period: 'Apr 2022 - Oct 2022',
        location: 'Pune, India',
        description: [
            'Developed and implemented automation packages using Python and Java to automate the extraction of critical data from foreign-language invoices, leveraging Azure Form Cognitive Services for OCR and Automation Anywhere 360 (AA360), increasing data accuracy and operational efficiency by 30%, which helped scale operations across multiple regions and improve overall business performance.',
            'Designed reusable components and standardized business logic fields within the AA360 platform, leveraging the Gradle development environment to streamline integration and deployment across teams, which reduced development time by 20%, improved team collaboration, and supported faster rollout of new business solutions to meet client needs.',
            'Enhanced data extraction capabilities by significantly reducing manual efforts, resulting in a 25% increase in productivity and improved operational workflows, ultimately leading to better resource allocation and cost savings for the organization.'
        ],
        skills: [
            'Python',
            'SQL',
            'Data Analysis',
            'Agile',
            'Process Optimization',
            'Azure Form Cognitive Services',
            'Automation Anywhere 360',
            'Gradle',
            'Data Extraction',
            'Data Processing'
        ],
        logo: '/assets/companies/volkswagen.png'
    }
];
function Career() {
    _s();
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tileRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Career.useEffect": ()=>{
            observerRef.current = new IntersectionObserver({
                "Career.useEffect": (entries)=>{
                    entries.forEach({
                        "Career.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('opacity-100', 'translate-y-0');
                                entry.target.classList.remove('opacity-0', 'translate-y-10');
                            }
                        }
                    }["Career.useEffect"]);
                }
            }["Career.useEffect"], {
                threshold: 0.1
            });
            tileRefs.current.forEach({
                "Career.useEffect": (tile)=>{
                    if (tile) observerRef.current?.observe(tile);
                }
            }["Career.useEffect"]);
            return ({
                "Career.useEffect": ()=>observerRef.current?.disconnect()
            })["Career.useEffect"];
        }
    }["Career.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-white via-white to-primary/5 dark:from-[#0F0F0F] dark:via-[#0F0F0F] dark:to-primary/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center",
                    children: "Career Journey"
                }, void 0, false, {
                    fileName: "[project]/src/app/career/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-gradient-to-b from-transparent via-white/50 to-primary/5 dark:via-[#1A1A1A]/50 dark:to-primary/5 rounded-xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30 dark:bg-primary/20"
                        }, void 0, false, {
                            fileName: "[project]/src/app/career/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: experiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        tileRefs.current[index] = el;
                                    },
                                    className: `relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} opacity-0 translate-y-10 transition-all duration-700`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-[#0F0F0F] z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/career/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/50 dark:bg-[#1A1A1A]/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-primary/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-bold text-gray-900 dark:text-white",
                                                                        children: experience.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/career/page.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-primary font-medium",
                                                                        children: experience.company
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/career/page.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/career/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-12 w-12 relative flex items-center justify-center bg-gray-100 dark:bg-[#2A2A2A] rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold text-primary",
                                                                    children: experience.company.substring(0, 2).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/career/page.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/career/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/career/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 dark:text-gray-300 mb-2",
                                                        children: experience.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/career/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 dark:text-gray-300 mb-4",
                                                        children: experience.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/career/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300",
                                                        children: experience.description.map((responsibility, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: responsibility
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/career/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/career/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    experience.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "Skills:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/career/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: experience.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 py-1 text-xs bg-gray-100 dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 rounded-full",
                                                                        children: skill
                                                                    }, skill, false, {
                                                                        fileName: "[project]/src/app/career/page.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/career/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/career/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/career/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/career/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/career/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/career/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/career/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/career/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/career/page.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/career/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Career, "j0pxNM8gxdL8KFHU6bIugHLQZRc=");
_c = Career;
var _c;
__turbopack_context__.k.register(_c, "Career");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_career_page_tsx_d077b285._.js.map