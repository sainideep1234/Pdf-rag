(() => {
  var e = {};
  ((e.id = 18),
    (e.ids = [18]),
    (e.modules = {
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      3700: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => h,
            pages: () => c,
            routeModule: () => p,
            tree: () => l,
          }));
        var s = t(65239),
          n = t(48088),
          i = t(88170),
          o = t.n(i),
          a = t(30893),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        t.d(r, d);
        let l = {
            children: [
              "",
              {
                children: [
                  "landing",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 6665)),
                          "/Users/yash/Desktop/project/pdf-rag/client/app/landing/page.tsx",
                        ],
                      },
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(t.bind(t, 58014)),
                  "/Users/yash/Desktop/project/pdf-rag/client/app/layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(t.t.bind(t, 57398, 23)),
                  "next/dist/client/components/not-found-error",
                ],
                forbidden: [
                  () => Promise.resolve().then(t.t.bind(t, 89999, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(t.t.bind(t, 65284, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
              },
            ],
          }.children,
          c = [
            "/Users/yash/Desktop/project/pdf-rag/client/app/landing/page.tsx",
          ],
          h = { require: t, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: "/landing/page",
              pathname: "/landing",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      6665: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => n }));
        var s = t(37413);
        t(61120);
        let n = () => (0, s.jsx)("div", { children: "page" });
      },
      8943: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            "7f3b8be49a03927a404660f14a75205fb6a8835e5d": () => s.at,
            "7f419fad310f11a4732d44a6844ddcdcee6ec58bec": () => s.ai,
            "7f7270a6754be098ad8aad4c6a6a8140bdf26c9553": () => s.ot,
          }));
        var s = t(98749);
      },
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      32463: (e, r, t) => {
        "use strict";
        t.d(r, { y: () => n });
        var s = t(6475);
        let n = (0, s.createServerReference)(
          "7fcbfef384721b7e9b0948dc3fc1252f9640488757",
          s.callServer,
          void 0,
          s.findSourceMapURL,
          "invalidateCacheAction",
        );
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      50568: (e, r, t) => {
        (Promise.resolve().then(t.t.bind(t, 86346, 23)),
          Promise.resolve().then(t.t.bind(t, 27924, 23)),
          Promise.resolve().then(t.t.bind(t, 35656, 23)),
          Promise.resolve().then(t.t.bind(t, 40099, 23)),
          Promise.resolve().then(t.t.bind(t, 38243, 23)),
          Promise.resolve().then(t.t.bind(t, 28827, 23)),
          Promise.resolve().then(t.t.bind(t, 62763, 23)),
          Promise.resolve().then(t.t.bind(t, 97173, 23)));
      },
      58014: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => p, metadata: () => h }));
        var s = t(37413),
          n = t(56389),
          i = t.n(n),
          o = t(51189),
          a = t.n(o);
        t(82704);
        var d = t(10280),
          l = t(62278),
          c = t(5129);
        let h = {
          title: "Create Next App",
          description: "Generated by create next app",
        };
        function p({ children: e }) {
          return (0, s.jsx)(d.lJ, {
            appearance: { baseTheme: c.dark },
            children: (0, s.jsx)("html", {
              lang: "en",
              children: (0, s.jsxs)("body", {
                className: `${i().variable} ${a().variable} antialiased`,
                children: [
                  (0, s.jsx)("header", {
                    className: "",
                    children: (0, s.jsx)("nav", {
                      className:
                        "  w-screen text-white py-4 px-10 border-b-2 border-slate-700  bg-slate-800 ",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full flex justify-between items-center px-10",
                        children: [
                          (0, s.jsx)("h2", {
                            className:
                              "font-bold  text-slate-50 text-3xl tracking-tighter  ",
                            children: "PDFRAG",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              (0, s.jsxs)(d.Bl, {
                                children: [
                                  (0, s.jsx)(l.SignInButton, {
                                    children: (0, s.jsx)("button", {
                                      className:
                                        "text-slate-950 px-2 py-1 rounded-lg font-semibold bg-slate-50 border-2 hover:shadow hover:shadow-white hover:text-slate-500 transition-all duration-300 delay-100",
                                      children: "SignIn",
                                    }),
                                  }),
                                  (0, s.jsx)(l.SignUpButton, {
                                    children: (0, s.jsx)("button", {
                                      className:
                                        "text-slate-950 px-2 py-1 rounded-lg font-semibold bg-slate-50 border-2 hover:shadow hover:shadow-white hover:text-slate-500 transition-all duration-300 delay-100 ",
                                      children: "SignUp",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d.iB, {
                                children: (0, s.jsx)(l.UserButton, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  e,
                ],
              }),
            }),
          });
        }
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      63720: (e, r, t) => {
        (Promise.resolve().then(t.t.bind(t, 16444, 23)),
          Promise.resolve().then(t.t.bind(t, 16042, 23)),
          Promise.resolve().then(t.t.bind(t, 88170, 23)),
          Promise.resolve().then(t.t.bind(t, 49477, 23)),
          Promise.resolve().then(t.t.bind(t, 29345, 23)),
          Promise.resolve().then(t.t.bind(t, 12089, 23)),
          Promise.resolve().then(t.t.bind(t, 46577, 23)),
          Promise.resolve().then(t.t.bind(t, 31307, 23)));
      },
      64738: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, { "7fcbfef384721b7e9b0948dc3fc1252f9640488757": () => s.y }));
        var s = t(38301);
      },
      71460: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 63441)),
          Promise.resolve().then(t.bind(t, 62808)),
          Promise.resolve().then(t.bind(t, 7791)),
          Promise.resolve().then(t.bind(t, 12918)),
          Promise.resolve().then(t.bind(t, 13920)),
          Promise.resolve().then(t.bind(t, 62278)));
      },
      73024: (e) => {
        "use strict";
        e.exports = require("node:fs");
      },
      76760: (e) => {
        "use strict";
        e.exports = require("node:path");
      },
      77598: (e) => {
        "use strict";
        e.exports = require("node:crypto");
      },
      78335: () => {},
      82704: () => {},
      95428: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 80793)),
          Promise.resolve().then(t.bind(t, 85850)),
          Promise.resolve().then(t.bind(t, 93821)),
          Promise.resolve().then(t.bind(t, 58758)),
          Promise.resolve().then(t.bind(t, 41330)),
          Promise.resolve().then(t.bind(t, 21313)));
      },
      96487: () => {},
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [206], () => t(3700));
  module.exports = s;
})();
