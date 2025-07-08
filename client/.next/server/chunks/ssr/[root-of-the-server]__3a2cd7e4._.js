module.exports = {
  "[project]/app/components/FileUpload.tsx [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>",
        );
      ("use client");
      const FileUpload = () => {
        const fileUploadBtn = () => {
          const el = document.createElement("input");
          el.setAttribute("type", "file");
          el.setAttribute("accept", "application/pdf");
          el.addEventListener("change", async () => {
            if (el.files) {
              const files = el.files[0];
              if (files) {
                const formData = new FormData();
                formData.append("pdf", files);
                try {
                  const res = await fetch(`http://localhost:8000/upload/pdf`, {
                    method: "POST",
                    body: formData,
                  });
                  console.log(res);
                } catch (error) {
                  console.log("ERROR while uploading pdf", error);
                }
              }
            }
          });
          el.click();
        };
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            onClick: fileUploadBtn,
            className:
              "w-full text-center p-4 gap-2 border-2 rounded-lg flex items-center justify-center flex-col text-white hover:text-slate-400 transition-all delay-100 duration-100",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__[
                  "Upload"
                ],
                {},
                void 0,
                false,
                {
                  fileName: "[project]/app/components/FileUpload.tsx",
                  lineNumber: 34,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "h3",
                {
                  className: "font-medium text-2xl",
                  children: "Upload your Pdf",
                },
                void 0,
                false,
                {
                  fileName: "[project]/app/components/FileUpload.tsx",
                  lineNumber: 35,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/app/components/FileUpload.tsx",
            lineNumber: 33,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = FileUpload;
    }
  },
  "[project]/lib/utils.ts [app-ssr] (ecmascript)": (__turbopack_context__) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        cn: () => cn,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)",
        );
      function cn(...inputs) {
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "twMerge"
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "clsx"
          ])(inputs),
        );
      }
    }
  },
  "[project]/components/ui/input.tsx [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Input: () => Input,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/lib/utils.ts [app-ssr] (ecmascript)",
        );
      function Input({ className, type, ...props }) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: type,
            "data-slot": "input",
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "cn"
            ])(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: "[project]/components/ui/input.tsx",
            lineNumber: 7,
            columnNumber: 5,
          },
          this,
        );
      }
    }
  },
  "[externals]/util [external] (util, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("util", () => require("util"));

      module.exports = mod;
    }
  },
  "[externals]/stream [external] (stream, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("stream", () => require("stream"));

      module.exports = mod;
    }
  },
  "[externals]/path [external] (path, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("path", () => require("path"));

      module.exports = mod;
    }
  },
  "[externals]/http [external] (http, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("http", () => require("http"));

      module.exports = mod;
    }
  },
  "[externals]/https [external] (https, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("https", () => require("https"));

      module.exports = mod;
    }
  },
  "[externals]/url [external] (url, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("url", () => require("url"));

      module.exports = mod;
    }
  },
  "[externals]/fs [external] (fs, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("fs", () => require("fs"));

      module.exports = mod;
    }
  },
  "[externals]/crypto [external] (crypto, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("crypto", () => require("crypto"));

      module.exports = mod;
    }
  },
  "[externals]/assert [external] (assert, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("assert", () => require("assert"));

      module.exports = mod;
    }
  },
  "[externals]/tty [external] (tty, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("tty", () => require("tty"));

      module.exports = mod;
    }
  },
  "[externals]/os [external] (os, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("os", () => require("os"));

      module.exports = mod;
    }
  },
  "[externals]/zlib [external] (zlib, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("zlib", () => require("zlib"));

      module.exports = mod;
    }
  },
  "[externals]/events [external] (events, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("events", () => require("events"));

      module.exports = mod;
    }
  },
  "[project]/app/components/Chat.tsx [app-ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/components/ui/input.tsx [app-ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizontal$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-ssr] (ecmascript) <export default as SendHorizontal>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2d$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BotMessageSquare$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/bot-message-square.js [app-ssr] (ecmascript) <export default as BotMessageSquare>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)",
        );
      ("use client");
      const Chat = () => {
        const [message, setMessage] =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "default"
          ].useState("");
        const [chat, setChat] =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "default"
          ].useState([]);
        async function sendPromptToLlm() {
          try {
            setChat((prev) => [
              ...prev,
              {
                aiMsg: "",
                userPrompt: message,
              },
            ]);
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "default"
              ].post("http://localhost:8000/chat", {
                prompt: message,
              });
            const aiMessage = response.data.aiMsg;
            setChat((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                aiMsg: aiMessage,
              };
              return updated;
            });
            setMessage("");
          } catch (error) {
            console.log("ERROR while chatting with llm", error);
          }
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "h-screen w-full bg-[#0f172a] flex flex-col",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "h2",
                {
                  className:
                    "text-2xl font-bold text-white  border-b border-slate-700 px-4 py-2",
                  children: "Chat",
                },
                void 0,
                false,
                {
                  fileName: "[project]/app/components/Chat.tsx",
                  lineNumber: 44,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "flex-1 overflow-y-auto px-6 py-4 space-y-8",
                  children: chat.map(({ aiMsg, userPrompt }, index) =>
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "space-y-4",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex justify-end items-start gap-2",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
                                        "User"
                                      ],
                                      {
                                        size: 18,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/app/components/Chat.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/app/components/Chat.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-slate-600 text-white px-4 py-2 rounded-2xl max-w-[70%]",
                                    children: userPrompt,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/app/components/Chat.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/app/components/Chat.tsx",
                              lineNumber: 53,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex items-start gap-2",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2d$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BotMessageSquare$3e$__[
                                        "BotMessageSquare"
                                      ],
                                      {
                                        size: 18,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/app/components/Chat.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/app/components/Chat.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-[70%]",
                                    children: aiMsg,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/app/components/Chat.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/app/components/Chat.tsx",
                              lineNumber: 63,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      index,
                      true,
                      {
                        fileName: "[project]/app/components/Chat.tsx",
                        lineNumber: 51,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/app/components/Chat.tsx",
                  lineNumber: 49,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "sticky bottom-0 left-0 w-full bg-slate-800 p-4 border-t border-slate-700",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "Input"
                          ],
                          {
                            value: message,
                            onChange: (e) => setMessage(e.target.value),
                            placeholder: "Enter your query...",
                            className:
                              "flex-1 text-white bg-slate-700 border-none focus:ring-2 focus:ring-blue-500",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/app/components/Chat.tsx",
                            lineNumber: 78,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "button",
                          {
                            onClick: sendPromptToLlm,
                            className:
                              "p-2 bg-slate-600 hover:bg-blue-700 text-white rounded-full transition",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizontal$3e$__[
                                "SendHorizontal"
                              ],
                              {
                                size: 20,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/app/components/Chat.tsx",
                                lineNumber: 88,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/app/components/Chat.tsx",
                            lineNumber: 84,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/app/components/Chat.tsx",
                      lineNumber: 77,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/app/components/Chat.tsx",
                  lineNumber: 76,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/app/components/Chat.tsx",
            lineNumber: 43,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = Chat;
    }
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__3a2cd7e4._.js.map
