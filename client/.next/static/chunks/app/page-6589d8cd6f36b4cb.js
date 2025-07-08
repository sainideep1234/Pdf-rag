(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1057: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => n }));
      var a = s(5155);
      s(2115);
      var r = s(5695);
      let n = () => {
        let e = (0, r.useRouter)();
        return (0, a.jsx)("div", {
          className: "w-screen bg-slate-800 h-screen ",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col pt-[30vh] space-x-4",
            children: [
              (0, a.jsxs)("span", {
                className:
                  "text-center text-8xl uppercase text-slate-50 text-bold tracking-tight",
                children: ["Chat with your book", " "],
              }),
              (0, a.jsx)("span", {
                className: "text-center text-7xl uppercase",
                children: "are you ready",
              }),
              (0, a.jsx)("div", {
                className: "flex justify-center items-center mt-10",
                children: (0, a.jsx)("button", {
                  onClick: () => e.push("/signin"),
                  className:
                    "text-slate-950 text-xl px-8 py-2 rounded-lg font-bold bg-slate-50 border-2 hover:shadow hover:shadow-white hover:text-slate-500 transition-all duration-300 delay-100 ",
                  children: "Let's Start >",
                }),
              }),
            ],
          }),
        });
      };
    },
    2371: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 1057));
    },
    5695: (e, t, s) => {
      "use strict";
      var a = s(8999);
      (s.o(a, "useParams") &&
        s.d(t, {
          useParams: function () {
            return a.useParams;
          },
        }),
        s.o(a, "usePathname") &&
          s.d(t, {
            usePathname: function () {
              return a.usePathname;
            },
          }),
        s.o(a, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        s.o(a, "useSelectedLayoutSegments") &&
          s.d(t, {
            useSelectedLayoutSegments: function () {
              return a.useSelectedLayoutSegments;
            },
          }));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [441, 684, 358], () => t(2371)), (_N_E = e.O()));
  },
]);
