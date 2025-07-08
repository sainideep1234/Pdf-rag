(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [105],
  {
    3190: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => r });
      var s = l(5155),
        i = l(9869);
      let r = () =>
        (0, s.jsxs)("div", {
          onClick: () => {
            let e = document.createElement("input");
            (e.setAttribute("type", "file"),
              e.setAttribute("accept", "application/pdf"),
              e.addEventListener("change", async () => {
                if (e.files) {
                  let t = e.files[0];
                  if (t) {
                    let e = new FormData();
                    e.append("pdf", t);
                    try {
                      let t = await fetch("http://localhost:8000/upload/pdf", {
                        method: "POST",
                        body: e,
                      });
                      console.log(t);
                    } catch (e) {
                      console.log("ERROR while uploading pdf", e);
                    }
                  }
                }
              }),
              e.click());
          },
          className:
            "w-full text-center p-4 gap-2 border-2 rounded-lg flex items-center justify-center flex-col text-white hover:text-slate-400 transition-all delay-100 duration-100",
          children: [
            (0, s.jsx)(i.A, {}),
            (0, s.jsx)("h3", {
              className: "font-medium text-2xl",
              children: "Upload your Pdf",
            }),
          ],
        });
    },
    6178: (e, t, l) => {
      (Promise.resolve().then(l.bind(l, 7704)),
        Promise.resolve().then(l.bind(l, 3190)),
        Promise.resolve().then(l.bind(l, 3398)),
        Promise.resolve().then(l.bind(l, 636)),
        Promise.resolve().then(l.bind(l, 671)),
        Promise.resolve().then(l.bind(l, 5256)),
        Promise.resolve().then(l.bind(l, 7016)),
        Promise.resolve().then(l.bind(l, 1657)));
    },
    6862: (e, t, l) => {
      "use strict";
      l.d(t, { y: () => i });
      var s = l(4477);
      let i = (0, s.createServerReference)(
        "7fcbfef384721b7e9b0948dc3fc1252f9640488757",
        s.callServer,
        void 0,
        s.findSourceMapURL,
        "invalidateCacheAction",
      );
    },
    7704: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => f });
      var s = l(5155),
        i = l(2115),
        r = l(2596),
        a = l(9688);
      function n(e) {
        let { className: t, type: l, ...i } = e;
        return (0, s.jsx)("input", {
          type: l,
          "data-slot": "input",
          className: (function () {
            for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
              t[l] = arguments[l];
            return (0, a.QP)((0, r.$)(t));
          })(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...i,
        });
      }
      var o = l(1007),
        d = l(8473),
        c = l(429),
        u = l(3464);
      let f = () => {
        let [e, t] = i.useState(""),
          [l, r] = i.useState([]);
        async function a() {
          try {
            r((t) => [...t, { aiMsg: "", userPrompt: e }]);
            let l = (
              await u.A.post("http://localhost:8000/chat", { prompt: e })
            ).data.aiMsg;
            (r((e) => {
              let t = [...e];
              return ((t[t.length - 1] = { ...t[t.length - 1], aiMsg: l }), t);
            }),
              t(""));
          } catch (e) {
            console.log("ERROR while chatting with llm", e);
          }
        }
        return (0, s.jsxs)("div", {
          className: "h-screen w-full bg-[#0f172a] flex flex-col",
          children: [
            (0, s.jsx)("h2", {
              className:
                "text-2xl font-bold text-white  border-b border-slate-700 px-4 py-2",
              children: "Chat",
            }),
            (0, s.jsx)("div", {
              className: "flex-1 overflow-y-auto px-6 py-4 space-y-8",
              children: l.map((e, t) => {
                let { aiMsg: l, userPrompt: i } = e;
                return (0, s.jsxs)(
                  "div",
                  {
                    className: "space-y-4",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex justify-end items-start gap-2",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white",
                            children: (0, s.jsx)(o.A, { size: 18 }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "bg-slate-600 text-white px-4 py-2 rounded-2xl max-w-[70%]",
                            children: i,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white",
                            children: (0, s.jsx)(d.A, { size: 18 }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-[70%]",
                            children: l,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
            (0, s.jsx)("div", {
              className:
                "sticky bottom-0 left-0 w-full bg-slate-800 p-4 border-t border-slate-700",
              children: (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsx)(n, {
                    value: e,
                    onChange: (e) => t(e.target.value),
                    placeholder: "Enter your query...",
                    className:
                      "flex-1 text-white bg-slate-700 border-none focus:ring-2 focus:ring-blue-500",
                  }),
                  (0, s.jsx)("button", {
                    onClick: a,
                    className:
                      "p-2 bg-slate-600 hover:bg-blue-700 text-white rounded-full transition",
                    children: (0, s.jsx)(c.A, { size: 20 }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [596, 798, 441, 684, 358], () => t(6178)), (_N_E = e.O()));
  },
]);
