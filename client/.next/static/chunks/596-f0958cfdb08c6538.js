(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [596],
  {
    255: (e, t, r) => {
      "use strict";
      function n(e) {
        let { moduleIds: t } = e;
        return null;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(5155),
        r(7650),
        r(5744),
        r(589));
    },
    636: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { KeylessCookieSync: () => s }));
      var n = r(5695),
        i = r(2115),
        o = r(9331);
      function s(e) {
        var t;
        let s =
          (null == (t = (0, n.useSelectedLayoutSegments)()[0])
            ? void 0
            : t.startsWith("/_not-found")) || !1;
        return (
          (0, i.useEffect)(() => {
            o.I &&
              !s &&
              r
                .e(27)
                .then(r.bind(r, 2027))
                .then((t) =>
                  t.syncKeylessConfigAction({
                    ...e,
                    returnUrl: window.location.href,
                  }),
                );
          }, [s]),
          e.children
        );
      }
    },
    671: (e, t, r) => {
      "use strict";
      r.d(t, {
        AuthenticateWithRedirectCallback: () => n.B$,
        ClerkDegraded: () => n.wF,
        ClerkFailed: () => n.lT,
        ClerkLoaded: () => n.z0,
        ClerkLoading: () => n.A0,
        RedirectToCreateOrganization: () => n.rm,
        RedirectToOrganizationProfile: () => n.m2,
        RedirectToSignIn: () => n.W5,
        RedirectToSignUp: () => n.mO,
        RedirectToUserProfile: () => n.eG,
      });
      var n = r(1976);
      r(8572);
    },
    852: (e, t, r) => {
      "use strict";
      r.d(t, { zz: () => i });
      var n = (e) => {
        let t = (r) => {
          if (!r) return r;
          if (Array.isArray(r))
            return r.map((e) =>
              "object" == typeof e || Array.isArray(e) ? t(e) : e,
            );
          let n = { ...r };
          for (let r of Object.keys(n)) {
            let i = e(r.toString());
            (i !== r && ((n[i] = n[r]), delete n[r]),
              "object" == typeof n[i] && (n[i] = t(n[i])));
          }
          return n;
        };
        return t;
      };
      function i(e) {
        if ("boolean" == typeof e) return e;
        if (null == e) return !1;
        if ("string" == typeof e) {
          if ("true" === e.toLowerCase()) return !0;
          if ("false" === e.toLowerCase()) return !1;
        }
        let t = parseInt(e, 10);
        return !isNaN(t) && t > 0;
      }
      (n(function (e) {
        return e ? e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`) : "";
      }),
        n(function (e) {
          return e
            ? e.replace(/([-_][a-z])/g, (e) =>
                e.toUpperCase().replace(/-|_/, ""),
              )
            : "";
        }));
    },
    901: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = r(8229)._(r(2115)).default.createContext(null);
    },
    1275: (e, t, r) => {
      "use strict";
      r.d(t, { ev: () => u, tm: () => a });
      var n = r(7682),
        i = r(2163);
      r(5649);
      var o = r(4579),
        s = r(9509);
      (s.env.NEXT_PUBLIC_CLERK_JS_VERSION,
        s.env.NEXT_PUBLIC_CLERK_JS_URL,
        s.env.CLERK_API_VERSION,
        s.env.CLERK_SECRET_KEY);
      let l = s.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
      (s.env.CLERK_ENCRYPTION_KEY,
        s.env.CLERK_API_URL ||
          ((e) => {
            let t = (0, n.q5)(e)?.frontendApi;
            return t?.startsWith("clerk.") && i.iM.some((e) => t?.endsWith(e))
              ? i.FW
              : i.mG.some((e) => t?.endsWith(e))
                ? i.Vc
                : i.ub.some((e) => t?.endsWith(e))
                  ? i.HG
                  : i.FW;
          })(l),
        s.env.NEXT_PUBLIC_CLERK_DOMAIN,
        s.env.NEXT_PUBLIC_CLERK_PROXY_URL,
        (0, o.zz)(s.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
        s.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        s.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL);
      let a = {
        name: "@clerk/nextjs",
        version: "6.23.3",
        environment: "production",
      };
      ((0, o.zz)(s.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
        (0, o.zz)(s.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG));
      let u = (0, o.zz)(s.env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || !1;
    },
    1569: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useRouter", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(2115),
        i = r(901);
      function o() {
        return (0, n.useContext)(i.RouterContext);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1627: (e, t, r) => {
      "use strict";
      (r.d(t, { FJ: () => k, YF: () => y }), r(852));
      var n,
        i,
        o,
        s,
        l,
        a,
        u,
        d,
        c,
        h,
        p,
        f,
        g,
        m,
        v,
        _ = r(5649);
      (r(9509),
        (n = new WeakMap()),
        (i = new WeakMap()),
        (o = new WeakSet()),
        (s = function (e) {
          let { sk: t, pk: r, payload: n, ...i } = e,
            o = { ...n, ...i };
          return JSON.stringify(
            Object.keys({ ...n, ...i })
              .sort()
              .map((e) => o[e]),
          );
        }),
        (l = function () {
          let e = localStorage.getItem((0, _.S7)(this, n));
          return e ? JSON.parse(e) : {};
        }),
        (a = function () {
          if ("undefined" == typeof window) return !1;
          let e = window.localStorage;
          if (!e) return !1;
          try {
            let t = "test";
            return (e.setItem(t, t), e.removeItem(t), !0);
          } catch (t) {
            return (
              t instanceof DOMException &&
                ("QuotaExceededError" === t.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === t.name) &&
                e.length > 0 &&
                e.removeItem((0, _.S7)(this, n)),
              !1
            );
          }
        }));
      ((u = new WeakMap()),
        (d = new WeakMap()),
        (c = new WeakMap()),
        (h = new WeakMap()),
        (p = new WeakMap()),
        (f = new WeakSet()),
        (g = function (e, t) {
          let r = Math.random();
          return (
            !!(
              r <= (0, _.S7)(this, u).samplingRate &&
              (void 0 === t || r <= t)
            ) && !(0, _.S7)(this, d).isEventThrottled(e)
          );
        }),
        (m = function () {
          fetch(new URL("/v1/event", (0, _.S7)(this, u).endpoint), {
            method: "POST",
            body: JSON.stringify({ events: (0, _.S7)(this, h) }),
            headers: { "Content-Type": "application/json" },
          })
            .catch(() => void 0)
            .then(() => {
              (0, _.OV)(this, h, []);
            })
            .catch(() => void 0);
        }),
        (v = function () {
          let e = {
            name: (0, _.S7)(this, c).sdk,
            version: (0, _.S7)(this, c).sdkVersion,
          };
          return (
            "undefined" != typeof window &&
              window.Clerk &&
              (e = { ...e, ...window.Clerk.constructor.sdkMetadata }),
            e
          );
        }));
      function k(e, t) {
        return { event: "METHOD_CALLED", payload: { method: e, ...t } };
      }
      function y(e) {
        return {
          event: "FRAMEWORK_METADATA",
          eventSamplingRate: 0.1,
          payload: e,
        };
      }
    },
    1634: (e, t, r) => {
      "use strict";
      function n(e) {
        return "clerkError" in e;
      }
      r.d(t, { $R: () => n, _r: () => s, cR: () => i });
      var i = class e extends Error {
          constructor(t, { code: r }) {
            let n = "\uD83D\uDD12 Clerk:",
              i = RegExp(n.replace(" ", "\\s*"), "i"),
              o = t.replace(i, ""),
              s = `${n} ${o.trim()}

(code="${r}")
`;
            (super(s),
              (this.toString = () => `[${this.name}]
Message:${this.message}`),
              Object.setPrototypeOf(this, e.prototype),
              (this.code = r),
              (this.message = s),
              (this.clerkRuntimeError = !0),
              (this.name = "ClerkRuntimeError"));
          }
        },
        o = Object.freeze({
          InvalidProxyUrlErrorMessage:
            "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
          InvalidPublishableKeyErrorMessage:
            "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
          MissingPublishableKeyErrorMessage:
            "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
          MissingSecretKeyErrorMessage:
            "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
          MissingClerkProvider:
            "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider",
        });
      function s({ packageName: e, customMessages: t }) {
        let r = e,
          n = { ...o, ...t };
        function i(e, t) {
          if (!t) return `${r}: ${e}`;
          let n = e;
          for (let r of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
            let e = (t[r[1]] || "").toString();
            n = n.replace(`{{${r[1]}}}`, e);
          }
          return `${r}: ${n}`;
        }
        return {
          setPackageName({ packageName: e }) {
            return ("string" == typeof e && (r = e), this);
          },
          setMessages({ customMessages: e }) {
            return (Object.assign(n, e || {}), this);
          },
          throwInvalidPublishableKeyError(e) {
            throw Error(i(n.InvalidPublishableKeyErrorMessage, e));
          },
          throwInvalidProxyUrl(e) {
            throw Error(i(n.InvalidProxyUrlErrorMessage, e));
          },
          throwMissingPublishableKeyError() {
            throw Error(i(n.MissingPublishableKeyErrorMessage));
          },
          throwMissingSecretKeyError() {
            throw Error(i(n.MissingSecretKeyErrorMessage));
          },
          throwMissingClerkProviderError(e) {
            throw Error(i(n.MissingClerkProvider, e));
          },
          throw(e) {
            throw Error(i(e));
          },
        };
      }
    },
    1657: (e, t, r) => {
      "use strict";
      r.d(t, {
        APIKeys: () => n.Lq,
        CreateOrganization: () => n.ul,
        GoogleOneTap: () => n.PQ,
        OrganizationList: () => n.oE,
        OrganizationProfile: () => h,
        OrganizationSwitcher: () => n.NC,
        PricingTable: () => n.nm,
        SignIn: () => p,
        SignInButton: () => n.hZ,
        SignInWithMetamaskButton: () => n.M_,
        SignOutButton: () => n.ct,
        SignUp: () => f,
        SignUpButton: () => n.Ny,
        UserButton: () => n.uF,
        UserProfile: () => c,
        Waitlist: () => n.cP,
      });
      var n = r(1976),
        i = r(2115),
        o = r(8572),
        s = r(8416),
        l = r(6299);
      let a = (e, t, r, o = !0) => {
          let a = i.useRef(0),
            { pagesRouter: u } = (0, l.r)(),
            { session: d, isLoaded: c } = (0, n.wV)();
          (0, s.Fj)() ||
            i.useEffect(() => {
              if (!c || (r && "path" !== r) || (o && !d)) return;
              let n = new AbortController(),
                i = () => {
                  let r = u
                    ? `${t}/[[...index]].tsx`
                    : `${t}/[[...rest]]/page.tsx`;
                  throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${r}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`);
                };
              return (
                u
                  ? u.pathname.match(/\[\[\.\.\..+]]/) || i()
                  : (async () => {
                      let t;
                      if ((a.current++, !(a.current > 1))) {
                        try {
                          let r = `${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;
                          t = await fetch(r, { signal: n.signal });
                        } catch {}
                        (null == t ? void 0 : t.status) === 404 && i();
                      }
                    })(),
                () => {
                  a.current > 1 && n.abort();
                }
              );
            }, [c]);
        },
        u = () => {
          let e = i.useRef(),
            { pagesRouter: t } = (0, l.r)();
          if (t)
            if (e.current) return e.current;
            else
              return (
                (e.current = t.pathname.replace(/\/\[\[\.\.\..*/, "")),
                e.current
              );
          let n = r(5695).usePathname,
            o = r(5695).useParams,
            s = (n() || "").split("/").filter(Boolean),
            a = Object.values(o() || {})
              .filter((e) => Array.isArray(e))
              .flat(1 / 0);
          return (
            e.current ||
              (e.current = `/${s.slice(0, s.length - a.length).join("/")}`),
            e.current
          );
        };
      function d(e, t, r = !0) {
        let n = u(),
          i = (0, o.yC)(e, t, { path: n });
        return (a(e, n, i.routing, r), i);
      }
      let c = Object.assign(
          (e) => i.createElement(n.Fv, { ...d("UserProfile", e) }),
          { ...n.Fv },
        ),
        h = Object.assign(
          (e) => i.createElement(n.nC, { ...d("OrganizationProfile", e) }),
          { ...n.nC },
        ),
        p = (e) => i.createElement(n.Ls, { ...d("SignIn", e, !1) }),
        f = (e) => i.createElement(n.Hx, { ...d("SignUp", e, !1) });
    },
    1976: (e, t, r) => {
      "use strict";
      r.d(t, {
        Lq: () => eC,
        B$: () => c.B$,
        wF: () => c.wF,
        lT: () => c.lT,
        z0: () => c.z0,
        A0: () => c.A0,
        lJ: () => eT,
        ul: () => e_,
        PQ: () => eP,
        oE: () => eb,
        nC: () => ev,
        NC: () => ey,
        nm: () => ew,
        rm: () => c.rm,
        m2: () => c.m2,
        W5: () => c.W5,
        mO: () => c.mO,
        eG: () => c.eG,
        Ls: () => eo,
        hZ: () => eE,
        M_: () => eU,
        ct: () => ej,
        Hx: () => es,
        Ny: () => eO,
        uF: () => ef,
        Fv: () => eu,
        cP: () => eS,
        As: () => c.As,
        ho: () => c.ho,
        ui: () => c.ui,
        Z5: () => c.Z5,
        D_: () => c.D_,
        Wp: () => c.Wp,
        wV: () => c.dy,
        g7: () => c.g7,
        go: () => c.go,
        yC: () => c.yC,
        Jd: () => c.Jd,
      });
      var n,
        i,
        o,
        s,
        l,
        a,
        u,
        d,
        c = r(5323),
        h = (e) => {
          throw TypeError(e);
        },
        p = (e, t, r) => t.has(e) || h("Cannot " + r),
        f = (e, t, r) => (
          p(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        g = (e, t, r) =>
          t.has(e)
            ? h("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, r),
        m = (e, t, r, n) => (
          p(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        ),
        v = (e, t, r) => (p(e, t, "access private method"), r),
        _ = r(5100),
        k = r(8416),
        y = r(2115),
        b = r(7650),
        P = (e, ...t) => {
          let r = { ...e };
          for (let e of t) delete r[e];
          return r;
        };
      r(5649);
      var S = r(3018),
        w = r(7682),
        C = (e, t, r) => (!e && r ? E(r) : O(t)),
        E = (e) => {
          let t = e.userId,
            r = e.user,
            n = e.sessionId,
            i = e.sessionStatus,
            o = e.sessionClaims,
            s = e.session,
            l = e.organization,
            a = e.orgId,
            u = e.orgRole,
            d = e.orgPermissions,
            c = e.orgSlug;
          return {
            userId: t,
            user: r,
            sessionId: n,
            session: s,
            sessionStatus: i,
            sessionClaims: o,
            organization: l,
            orgId: a,
            orgRole: u,
            orgPermissions: d,
            orgSlug: c,
            actor: e.actor,
            factorVerificationAge: e.factorVerificationAge,
          };
        },
        O = (e) => {
          let t = e.user ? e.user.id : e.user,
            r = e.user,
            n = e.session ? e.session.id : e.session,
            i = e.session,
            o = e.session?.status,
            s = e.session ? e.session.lastActiveToken?.jwt?.claims : null,
            l = e.session ? e.session.factorVerificationAge : null,
            a = i?.actor,
            u = e.organization,
            d = e.organization ? e.organization.id : e.organization,
            c = u?.slug,
            h = u
              ? r?.organizationMemberships?.find((e) => e.organization.id === d)
              : u,
            p = h ? h.permissions : h;
          return {
            userId: t,
            user: r,
            sessionId: n,
            session: i,
            sessionStatus: o,
            sessionClaims: s,
            organization: u,
            orgId: d,
            orgRole: h ? h.role : h,
            orgSlug: c,
            orgPermissions: p,
            actor: a,
            factorVerificationAge: l,
          };
        },
        j = r(3877),
        U = (e, t, r, n, i) => {
          let { notify: o } = i || {},
            s = e.get(r);
          (s || ((s = []), e.set(r, s)),
            s.push(n),
            o && t.has(r) && n(t.get(r)));
        },
        L = (e, t, r) => (e.get(t) || []).map((e) => e(r)),
        I = (e, t, r) => {
          let n = e.get(t);
          n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
        },
        R = () => {
          let e = new Map(),
            t = new Map(),
            r = new Map();
          return {
            on: (...r) => U(e, t, ...r),
            prioritizedOn: (...e) => U(r, t, ...e),
            emit: (n, i) => {
              (t.set(n, i), L(r, n, i), L(e, n, i));
            },
            off: (...t) => I(e, ...t),
            prioritizedOff: (...e) => I(r, ...e),
            internal: { retrieveListeners: (t) => e.get(t) || [] },
          };
        },
        M = { Status: "status" },
        T = () => R();
      "undefined" == typeof window ||
        window.global ||
        (window.global = "undefined" == typeof global ? window : global);
      var z = (e) => (t) => {
          try {
            return y.Children.only(e);
          } catch {
            return c.sb.throw((0, c.Wq)(t));
          }
        },
        A = (e, t) => (
          e || (e = t),
          "string" == typeof e && (e = y.createElement("button", null, e)),
          e
        ),
        N =
          (e) =>
          (...t) => {
            if (e && "function" == typeof e) return e(...t);
          },
        W = new Map(),
        x = (e) => {
          let t = Array(e.length).fill(null),
            [r, n] = (0, y.useState)(t);
          return e.map((e, t) => ({
            id: e.id,
            mount: (e) => n((r) => r.map((r, n) => (n === t ? e : r))),
            unmount: () => n((e) => e.map((e, r) => (r === t ? null : e))),
            portal: () =>
              y.createElement(
                y.Fragment,
                null,
                r[t] ? (0, b.createPortal)(e.component, r[t]) : null,
              ),
          }));
        },
        D = (e, t) =>
          !!e && y.isValidElement(e) && (null == e ? void 0 : e.type) === t,
        B = (e, t) =>
          $(
            {
              children: e,
              reorderItemsLabels: ["account", "security"],
              LinkComponent: ea,
              PageComponent: el,
              MenuItemsComponent: ec,
              componentName: "UserProfile",
            },
            t,
          ),
        F = (e, t) =>
          $(
            {
              children: e,
              reorderItemsLabels: ["general", "members"],
              LinkComponent: em,
              PageComponent: eg,
              componentName: "OrganizationProfile",
            },
            t,
          ),
        K = (e) => {
          let t = [],
            r = [em, eg, ec, el, ea];
          return (
            y.Children.forEach(e, (e) => {
              r.some((t) => D(e, t)) || t.push(e);
            }),
            t
          );
        },
        $ = (e, t) => {
          let {
              children: r,
              LinkComponent: n,
              PageComponent: i,
              MenuItemsComponent: o,
              reorderItemsLabels: s,
              componentName: l,
            } = e,
            { allowForAnyChildren: a = !1 } = t || {},
            u = [];
          y.Children.forEach(r, (e) => {
            if (!D(e, i) && !D(e, n) && !D(e, o)) {
              e && !a && (0, k.s2)((0, c.n)(l));
              return;
            }
            let { props: t } = e,
              { children: r, label: d, url: h, labelIcon: p } = t;
            if (D(e, i))
              if (V(t, s)) u.push({ label: d });
              else {
                if (!J(t)) return void (0, k.s2)((0, c.sR)(l));
                u.push({ label: d, labelIcon: p, children: r, url: h });
              }
            if (D(e, n))
              if (!G(t)) return void (0, k.s2)((0, c.D)(l));
              else u.push({ label: d, labelIcon: p, url: h });
          });
          let d = [],
            h = [],
            p = [];
          u.forEach((e, t) => {
            if (J(e)) {
              (d.push({ component: e.children, id: t }),
                h.push({ component: e.labelIcon, id: t }));
              return;
            }
            G(e) && p.push({ component: e.labelIcon, id: t });
          });
          let f = x(d),
            g = x(h),
            m = x(p),
            v = [],
            _ = [];
          return (
            u.forEach((e, t) => {
              if (V(e, s)) return void v.push({ label: e.label });
              if (J(e)) {
                let {
                    portal: r,
                    mount: n,
                    unmount: i,
                  } = f.find((e) => e.id === t),
                  {
                    portal: o,
                    mount: s,
                    unmount: l,
                  } = g.find((e) => e.id === t);
                (v.push({
                  label: e.label,
                  url: e.url,
                  mount: n,
                  unmount: i,
                  mountIcon: s,
                  unmountIcon: l,
                }),
                  _.push(r),
                  _.push(o));
                return;
              }
              if (G(e)) {
                let {
                  portal: r,
                  mount: n,
                  unmount: i,
                } = m.find((e) => e.id === t);
                (v.push({
                  label: e.label,
                  url: e.url,
                  mountIcon: n,
                  unmountIcon: i,
                }),
                  _.push(r));
                return;
              }
            }),
            { customPages: v, customPagesPortals: _ }
          );
        },
        V = (e, t) => {
          let { children: r, label: n, url: i, labelIcon: o } = e;
          return !r && !i && !o && t.some((e) => e === n);
        },
        J = (e) => {
          let { children: t, label: r, url: n, labelIcon: i } = e;
          return !!t && !!n && !!i && !!r;
        },
        G = (e) => {
          let { children: t, label: r, url: n, labelIcon: i } = e;
          return !t && !!n && !!i && !!r;
        },
        q = (e) =>
          X({
            children: e,
            reorderItemsLabels: ["manageAccount", "signOut"],
            MenuItemsComponent: ec,
            MenuActionComponent: eh,
            MenuLinkComponent: ep,
            UserProfileLinkComponent: ea,
            UserProfilePageComponent: el,
          }),
        X = ({
          children: e,
          MenuItemsComponent: t,
          MenuActionComponent: r,
          MenuLinkComponent: n,
          UserProfileLinkComponent: i,
          UserProfilePageComponent: o,
          reorderItemsLabels: s,
        }) => {
          let l = [],
            a = [],
            u = [];
          y.Children.forEach(e, (e) => {
            if (!D(e, t) && !D(e, i) && !D(e, o)) {
              e && (0, k.s2)(c.P6);
              return;
            }
            if (D(e, i) || D(e, o)) return;
            let { props: a } = e;
            y.Children.forEach(a.children, (e) => {
              if (!D(e, r) && !D(e, n)) {
                e && (0, k.s2)(c.wm);
                return;
              }
              let { props: t } = e,
                { label: i, labelIcon: o, href: a, onClick: u, open: d } = t;
              if (D(e, r))
                if (Q(t, s)) l.push({ label: i });
                else {
                  if (!Y(t)) return void (0, k.s2)(c.Wv);
                  let e = { label: i, labelIcon: o };
                  if (void 0 !== u) l.push({ ...e, onClick: u });
                  else {
                    if (void 0 === d)
                      return void (0, k.s2)(
                        "Custom menu item must have either onClick or open property",
                      );
                    l.push({ ...e, open: d.startsWith("/") ? d : `/${d}` });
                  }
                }
              if (D(e, n))
                if (!H(t)) return void (0, k.s2)(c.ld);
                else l.push({ label: i, labelIcon: o, href: a });
            });
          });
          let d = [],
            h = [];
          l.forEach((e, t) => {
            (Y(e) && d.push({ component: e.labelIcon, id: t }),
              H(e) && h.push({ component: e.labelIcon, id: t }));
          });
          let p = x(d),
            f = x(h);
          return (
            l.forEach((e, t) => {
              if ((Q(e, s) && a.push({ label: e.label }), Y(e))) {
                let {
                    portal: r,
                    mount: n,
                    unmount: i,
                  } = p.find((e) => e.id === t),
                  o = { label: e.label, mountIcon: n, unmountIcon: i };
                ("onClick" in e
                  ? (o.onClick = e.onClick)
                  : "open" in e && (o.open = e.open),
                  a.push(o),
                  u.push(r));
              }
              if (H(e)) {
                let {
                  portal: r,
                  mount: n,
                  unmount: i,
                } = f.find((e) => e.id === t);
                (a.push({
                  label: e.label,
                  href: e.href,
                  mountIcon: n,
                  unmountIcon: i,
                }),
                  u.push(r));
              }
            }),
            { customMenuItems: a, customMenuItemsPortals: u }
          );
        },
        Q = (e, t) => {
          let { children: r, label: n, onClick: i, labelIcon: o } = e;
          return !r && !i && !o && t.some((e) => e === n);
        },
        Y = (e) => {
          let { label: t, labelIcon: r, onClick: n, open: i } = e;
          return !!r && !!t && ("function" == typeof n || "string" == typeof i);
        },
        H = (e) => {
          let { label: t, href: r, labelIcon: n } = e;
          return !!r && !!n && !!t;
        };
      function Z(e) {
        let t = (0, y.useRef)(),
          [r, n] = (0, y.useState)("rendering");
        return (
          (0, y.useEffect)(() => {
            if (!e)
              throw Error(
                "Clerk: no component name provided, unable to detect mount.",
              );
            "undefined" == typeof window ||
              t.current ||
              (t.current = (function (e) {
                let {
                  root: t = null == document ? void 0 : document.body,
                  selector: r,
                  timeout: n = 0,
                } = e;
                return new Promise((e, i) => {
                  if (!t) return void i(Error("No root element provided"));
                  let o = t;
                  if (
                    (r && (o = null == t ? void 0 : t.querySelector(r)),
                    (null == o ? void 0 : o.childElementCount) &&
                      o.childElementCount > 0)
                  )
                    return void e();
                  let s = new MutationObserver((n) => {
                    for (let i of n)
                      if (
                        "childList" === i.type &&
                        (!o &&
                          r &&
                          (o = null == t ? void 0 : t.querySelector(r)),
                        (null == o ? void 0 : o.childElementCount) &&
                          o.childElementCount > 0)
                      ) {
                        (s.disconnect(), e());
                        return;
                      }
                  });
                  (s.observe(t, { childList: !0, subtree: !0 }),
                    n > 0 &&
                      setTimeout(() => {
                        (s.disconnect(),
                          i(Error("Timeout waiting for element children")));
                      }, n));
                });
              })({ selector: `[data-clerk-component="${e}"]` })
                .then(() => {
                  n("rendered");
                })
                .catch(() => {
                  n("error");
                }));
          }, [e]),
          r
        );
      }
      var ee = (e) => "mount" in e,
        et = (e) => "open" in e,
        er = (e) =>
          null == e
            ? void 0
            : e.map(({ mountIcon: e, unmountIcon: t, ...r }) => r),
        en = class extends y.PureComponent {
          constructor() {
            (super(...arguments), (this.rootRef = y.createRef()));
          }
          componentDidUpdate(e) {
            var t, r, n, i;
            if (!ee(e) || !ee(this.props)) return;
            let o = P(e.props, "customPages", "customMenuItems", "children"),
              s = P(
                this.props.props,
                "customPages",
                "customMenuItems",
                "children",
              ),
              l =
                (null == (t = o.customPages) ? void 0 : t.length) !==
                (null == (r = s.customPages) ? void 0 : r.length),
              a =
                (null == (n = o.customMenuItems) ? void 0 : n.length) !==
                (null == (i = s.customMenuItems) ? void 0 : i.length),
              u = er(e.props.customMenuItems),
              d = er(this.props.props.customMenuItems);
            (!(0, S.MZ)(o, s) || !(0, S.MZ)(u, d) || l || a) &&
              this.rootRef.current &&
              this.props.updateProps({
                node: this.rootRef.current,
                props: this.props.props,
              });
          }
          componentDidMount() {
            this.rootRef.current &&
              (ee(this.props) &&
                this.props.mount(this.rootRef.current, this.props.props),
              et(this.props) && this.props.open(this.props.props));
          }
          componentWillUnmount() {
            this.rootRef.current &&
              (ee(this.props) && this.props.unmount(this.rootRef.current),
              et(this.props) && this.props.close());
          }
          render() {
            let { hideRootHtmlElement: e = !1 } = this.props,
              t = {
                ref: this.rootRef,
                ...this.props.rootProps,
                ...(this.props.component && {
                  "data-clerk-component": this.props.component,
                }),
              };
            return y.createElement(
              y.Fragment,
              null,
              !e && y.createElement("div", { ...t }),
              this.props.children,
            );
          }
        },
        ei = (e) => {
          var t, r;
          return y.createElement(
            y.Fragment,
            null,
            null == (t = null == e ? void 0 : e.customPagesPortals)
              ? void 0
              : t.map((e, t) => (0, y.createElement)(e, { key: t })),
            null == (r = null == e ? void 0 : e.customMenuItemsPortals)
              ? void 0
              : r.map((e, t) => (0, y.createElement)(e, { key: t })),
          );
        },
        eo = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountSignIn,
                  unmount: e.unmountSignIn,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "SignIn", renderWhileLoading: !0 },
        ),
        es = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountSignUp,
                  unmount: e.unmountSignUp,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "SignUp", renderWhileLoading: !0 },
        );
      function el({ children: e }) {
        return ((0, k.s2)(c.$n), y.createElement(y.Fragment, null, e));
      }
      function ea({ children: e }) {
        return ((0, k.s2)(c._I), y.createElement(y.Fragment, null, e));
      }
      var eu = Object.assign(
          (0, c.Q)(
            ({ clerk: e, component: t, fallback: r, ...n }) => {
              let i = "rendering" === Z(t) || !e.loaded,
                o = { ...(i && r && { style: { display: "none" } }) },
                { customPages: s, customPagesPortals: l } = B(n.children);
              return y.createElement(
                y.Fragment,
                null,
                i && r,
                y.createElement(
                  en,
                  {
                    component: t,
                    mount: e.mountUserProfile,
                    unmount: e.unmountUserProfile,
                    updateProps: e.__unstable__updateProps,
                    props: { ...n, customPages: s },
                    rootProps: o,
                  },
                  y.createElement(ei, { customPagesPortals: l }),
                ),
              );
            },
            { component: "UserProfile", renderWhileLoading: !0 },
          ),
          { Page: el, Link: ea },
        ),
        ed = (0, y.createContext)({
          mount: () => {},
          unmount: () => {},
          updateProps: () => {},
        });
      function ec({ children: e }) {
        return ((0, k.s2)(c.UX), y.createElement(y.Fragment, null, e));
      }
      function eh({ children: e }) {
        return ((0, k.s2)(c.aU), y.createElement(y.Fragment, null, e));
      }
      function ep({ children: e }) {
        return ((0, k.s2)(c.Uw), y.createElement(y.Fragment, null, e));
      }
      var ef = Object.assign(
        (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) },
              { customPages: s, customPagesPortals: l } = B(n.children, {
                allowForAnyChildren: !!n.__experimental_asProvider,
              }),
              a = Object.assign(n.userProfileProps || {}, { customPages: s }),
              { customMenuItems: u, customMenuItemsPortals: d } = q(n.children),
              c = K(n.children),
              h = {
                mount: e.mountUserButton,
                unmount: e.unmountUserButton,
                updateProps: e.__unstable__updateProps,
                props: { ...n, userProfileProps: a, customMenuItems: u },
              };
            return y.createElement(
              ed.Provider,
              { value: h },
              i && r,
              e.loaded &&
                y.createElement(
                  en,
                  {
                    component: t,
                    ...h,
                    hideRootHtmlElement: !!n.__experimental_asProvider,
                    rootProps: o,
                  },
                  n.__experimental_asProvider ? c : null,
                  y.createElement(ei, {
                    customPagesPortals: l,
                    customMenuItemsPortals: d,
                  }),
                ),
            );
          },
          { component: "UserButton", renderWhileLoading: !0 },
        ),
        {
          UserProfilePage: el,
          UserProfileLink: ea,
          MenuItems: ec,
          Action: eh,
          Link: ep,
          __experimental_Outlet: function (e) {
            let t = (0, y.useContext)(ed),
              r = { ...t, props: { ...t.props, ...e } };
            return y.createElement(en, { ...r });
          },
        },
      );
      function eg({ children: e }) {
        return ((0, k.s2)(c.vb), y.createElement(y.Fragment, null, e));
      }
      function em({ children: e }) {
        return ((0, k.s2)(c.kf), y.createElement(y.Fragment, null, e));
      }
      var ev = Object.assign(
          (0, c.Q)(
            ({ clerk: e, component: t, fallback: r, ...n }) => {
              let i = "rendering" === Z(t) || !e.loaded,
                o = { ...(i && r && { style: { display: "none" } }) },
                { customPages: s, customPagesPortals: l } = F(n.children);
              return y.createElement(
                y.Fragment,
                null,
                i && r,
                e.loaded &&
                  y.createElement(
                    en,
                    {
                      component: t,
                      mount: e.mountOrganizationProfile,
                      unmount: e.unmountOrganizationProfile,
                      updateProps: e.__unstable__updateProps,
                      props: { ...n, customPages: s },
                      rootProps: o,
                    },
                    y.createElement(ei, { customPagesPortals: l }),
                  ),
              );
            },
            { component: "OrganizationProfile", renderWhileLoading: !0 },
          ),
          { Page: eg, Link: em },
        ),
        e_ = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountCreateOrganization,
                  unmount: e.unmountCreateOrganization,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "CreateOrganization", renderWhileLoading: !0 },
        ),
        ek = (0, y.createContext)({
          mount: () => {},
          unmount: () => {},
          updateProps: () => {},
        }),
        ey = Object.assign(
          (0, c.Q)(
            ({ clerk: e, component: t, fallback: r, ...n }) => {
              let i = "rendering" === Z(t) || !e.loaded,
                o = { ...(i && r && { style: { display: "none" } }) },
                { customPages: s, customPagesPortals: l } = F(n.children, {
                  allowForAnyChildren: !!n.__experimental_asProvider,
                }),
                a = Object.assign(n.organizationProfileProps || {}, {
                  customPages: s,
                }),
                u = K(n.children),
                d = {
                  mount: e.mountOrganizationSwitcher,
                  unmount: e.unmountOrganizationSwitcher,
                  updateProps: e.__unstable__updateProps,
                  props: { ...n, organizationProfileProps: a },
                  rootProps: o,
                  component: t,
                };
              return (
                e.__experimental_prefetchOrganizationSwitcher(),
                y.createElement(
                  ek.Provider,
                  { value: d },
                  y.createElement(
                    y.Fragment,
                    null,
                    i && r,
                    e.loaded &&
                      y.createElement(
                        en,
                        {
                          ...d,
                          hideRootHtmlElement: !!n.__experimental_asProvider,
                        },
                        n.__experimental_asProvider ? u : null,
                        y.createElement(ei, { customPagesPortals: l }),
                      ),
                  ),
                )
              );
            },
            { component: "OrganizationSwitcher", renderWhileLoading: !0 },
          ),
          {
            OrganizationProfilePage: eg,
            OrganizationProfileLink: em,
            __experimental_Outlet: function (e) {
              let t = (0, y.useContext)(ek),
                r = { ...t, props: { ...t.props, ...e } };
              return y.createElement(en, { ...r });
            },
          },
        ),
        eb = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountOrganizationList,
                  unmount: e.unmountOrganizationList,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "OrganizationList", renderWhileLoading: !0 },
        ),
        eP = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  open: e.openGoogleOneTap,
                  close: e.closeGoogleOneTap,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "GoogleOneTap", renderWhileLoading: !0 },
        ),
        eS = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountWaitlist,
                  unmount: e.unmountWaitlist,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "Waitlist", renderWhileLoading: !0 },
        ),
        ew = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountPricingTable,
                  unmount: e.unmountPricingTable,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "PricingTable", renderWhileLoading: !0 },
        ),
        eC = (0, c.Q)(
          ({ clerk: e, component: t, fallback: r, ...n }) => {
            let i = "rendering" === Z(t) || !e.loaded,
              o = { ...(i && r && { style: { display: "none" } }) };
            return y.createElement(
              y.Fragment,
              null,
              i && r,
              e.loaded &&
                y.createElement(en, {
                  component: t,
                  mount: e.mountApiKeys,
                  unmount: e.unmountApiKeys,
                  updateProps: e.__unstable__updateProps,
                  props: n,
                  rootProps: o,
                }),
            );
          },
          { component: "ApiKeys", renderWhileLoading: !0 },
        ),
        eE = (0, c.Q)(
          ({ clerk: e, children: t, ...r }) => {
            let {
                signUpFallbackRedirectUrl: n,
                forceRedirectUrl: i,
                fallbackRedirectUrl: o,
                signUpForceRedirectUrl: s,
                mode: l,
                initialValues: a,
                withSignUp: u,
                oauthFlow: d,
                ...c
              } = r,
              h = z((t = A(t, "Sign in")))("SignInButton"),
              p = () => {
                let t = {
                  forceRedirectUrl: i,
                  fallbackRedirectUrl: o,
                  signUpFallbackRedirectUrl: n,
                  signUpForceRedirectUrl: s,
                  initialValues: a,
                  withSignUp: u,
                  oauthFlow: d,
                };
                return "modal" === l
                  ? e.openSignIn({ ...t, appearance: r.appearance })
                  : e.redirectToSignIn({
                      ...t,
                      signInFallbackRedirectUrl: o,
                      signInForceRedirectUrl: i,
                    });
              },
              f = async (e) => (
                h &&
                  "object" == typeof h &&
                  "props" in h &&
                  (await N(h.props.onClick)(e)),
                p()
              ),
              g = { ...c, onClick: f };
            return y.cloneElement(h, g);
          },
          { component: "SignInButton", renderWhileLoading: !0 },
        ),
        eO = (0, c.Q)(
          ({ clerk: e, children: t, ...r }) => {
            let {
                fallbackRedirectUrl: n,
                forceRedirectUrl: i,
                signInFallbackRedirectUrl: o,
                signInForceRedirectUrl: s,
                mode: l,
                unsafeMetadata: a,
                initialValues: u,
                oauthFlow: d,
                ...c
              } = r,
              h = z((t = A(t, "Sign up")))("SignUpButton"),
              p = () => {
                let t = {
                  fallbackRedirectUrl: n,
                  forceRedirectUrl: i,
                  signInFallbackRedirectUrl: o,
                  signInForceRedirectUrl: s,
                  unsafeMetadata: a,
                  initialValues: u,
                  oauthFlow: d,
                };
                return "modal" === l
                  ? e.openSignUp({ ...t, appearance: r.appearance })
                  : e.redirectToSignUp({
                      ...t,
                      signUpFallbackRedirectUrl: n,
                      signUpForceRedirectUrl: i,
                    });
              },
              f = async (e) => (
                h &&
                  "object" == typeof h &&
                  "props" in h &&
                  (await N(h.props.onClick)(e)),
                p()
              ),
              g = { ...c, onClick: f };
            return y.cloneElement(h, g);
          },
          { component: "SignUpButton", renderWhileLoading: !0 },
        ),
        ej = (0, c.Q)(
          ({ clerk: e, children: t, ...r }) => {
            let { redirectUrl: n = "/", signOutOptions: i, ...o } = r,
              s = z((t = A(t, "Sign out")))("SignOutButton"),
              l = () => e.signOut({ redirectUrl: n, ...i }),
              a = async (e) => (await N(s.props.onClick)(e), l()),
              u = { ...o, onClick: a };
            return y.cloneElement(s, u);
          },
          { component: "SignOutButton", renderWhileLoading: !0 },
        ),
        eU = (0, c.Q)(
          ({ clerk: e, children: t, ...r }) => {
            let { redirectUrl: n, ...i } = r,
              o = z((t = A(t, "Sign in with Metamask")))(
                "SignInWithMetamaskButton",
              ),
              s = async () => {
                !(async function () {
                  await e.authenticateWithMetamask({
                    redirectUrl: n || void 0,
                  });
                })();
              },
              l = async (e) => (await N(o.props.onClick)(e), s()),
              a = { ...i, onClick: l };
            return y.cloneElement(o, a);
          },
          { component: "SignInWithMetamask", renderWhileLoading: !0 },
        );
      void 0 === globalThis.__BUILD_DISABLE_RHC__ &&
        (globalThis.__BUILD_DISABLE_RHC__ = !1);
      var eL = {
          name: "@clerk/clerk-react",
          version: "5.32.4",
          environment: "production",
        },
        eI = class e {
          constructor(e) {
            (g(this, u),
              (this.clerkjs = null),
              (this.preopenOneTap = null),
              (this.preopenUserVerification = null),
              (this.preopenSignIn = null),
              (this.preopenCheckout = null),
              (this.preopenPlanDetails = null),
              (this.preopenSignUp = null),
              (this.preopenUserProfile = null),
              (this.preopenOrganizationProfile = null),
              (this.preopenCreateOrganization = null),
              (this.preOpenWaitlist = null),
              (this.premountSignInNodes = new Map()),
              (this.premountSignUpNodes = new Map()),
              (this.premountUserProfileNodes = new Map()),
              (this.premountUserButtonNodes = new Map()),
              (this.premountOrganizationProfileNodes = new Map()),
              (this.premountCreateOrganizationNodes = new Map()),
              (this.premountOrganizationSwitcherNodes = new Map()),
              (this.premountOrganizationListNodes = new Map()),
              (this.premountMethodCalls = new Map()),
              (this.premountWaitlistNodes = new Map()),
              (this.premountPricingTableNodes = new Map()),
              (this.premountApiKeysNodes = new Map()),
              (this.premountOAuthConsentNodes = new Map()),
              (this.premountAddListenerCalls = new Map()),
              (this.loadedListeners = []),
              g(this, n, "loading"),
              g(this, i),
              g(this, o),
              g(this, s),
              g(this, l, T()),
              (this.buildSignInUrl = (e) => {
                let t = () => {
                  var t;
                  return (
                    (null == (t = this.clerkjs)
                      ? void 0
                      : t.buildSignInUrl(e)) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("buildSignInUrl", t);
              }),
              (this.buildSignUpUrl = (e) => {
                let t = () => {
                  var t;
                  return (
                    (null == (t = this.clerkjs)
                      ? void 0
                      : t.buildSignUpUrl(e)) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("buildSignUpUrl", t);
              }),
              (this.buildAfterSignInUrl = (...e) => {
                let t = () => {
                  var t;
                  return (
                    (null == (t = this.clerkjs)
                      ? void 0
                      : t.buildAfterSignInUrl(...e)) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("buildAfterSignInUrl", t);
              }),
              (this.buildAfterSignUpUrl = (...e) => {
                let t = () => {
                  var t;
                  return (
                    (null == (t = this.clerkjs)
                      ? void 0
                      : t.buildAfterSignUpUrl(...e)) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("buildAfterSignUpUrl", t);
              }),
              (this.buildAfterSignOutUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildAfterSignOutUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("buildAfterSignOutUrl", e);
              }),
              (this.buildNewSubscriptionRedirectUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildNewSubscriptionRedirectUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set(
                  "buildNewSubscriptionRedirectUrl",
                  e,
                );
              }),
              (this.buildAfterMultiSessionSingleSignOutUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildAfterMultiSessionSingleSignOutUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set(
                  "buildAfterMultiSessionSingleSignOutUrl",
                  e,
                );
              }),
              (this.buildUserProfileUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildUserProfileUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("buildUserProfileUrl", e);
              }),
              (this.buildCreateOrganizationUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildCreateOrganizationUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("buildCreateOrganizationUrl", e);
              }),
              (this.buildOrganizationProfileUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildOrganizationProfileUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("buildOrganizationProfileUrl", e);
              }),
              (this.buildWaitlistUrl = () => {
                let e = () => {
                  var e;
                  return (
                    (null == (e = this.clerkjs)
                      ? void 0
                      : e.buildWaitlistUrl()) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("buildWaitlistUrl", e);
              }),
              (this.buildUrlWithAuth = (e) => {
                let t = () => {
                  var t;
                  return (
                    (null == (t = this.clerkjs)
                      ? void 0
                      : t.buildUrlWithAuth(e)) || ""
                  );
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("buildUrlWithAuth", t);
              }),
              (this.handleUnauthenticated = async () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.handleUnauthenticated();
                };
                this.clerkjs && this.loaded
                  ? e()
                  : this.premountMethodCalls.set("handleUnauthenticated", e);
              }),
              (this.on = (...e) => {
                var t;
                if (null == (t = this.clerkjs) ? void 0 : t.on)
                  return this.clerkjs.on(...e);
                f(this, l).on(...e);
              }),
              (this.off = (...e) => {
                var t;
                if (null == (t = this.clerkjs) ? void 0 : t.off)
                  return this.clerkjs.off(...e);
                f(this, l).off(...e);
              }),
              (this.addOnLoaded = (e) => {
                (this.loadedListeners.push(e),
                  this.loaded && this.emitLoaded());
              }),
              (this.emitLoaded = () => {
                (this.loadedListeners.forEach((e) => e()),
                  (this.loadedListeners = []));
              }),
              (this.beforeLoad = (e) => {
                if (!e) throw Error("Failed to hydrate latest Clerk JS");
              }),
              (this.hydrateClerkJS = (e) => {
                var t;
                if (!e) throw Error("Failed to hydrate latest Clerk JS");
                return (
                  (this.clerkjs = e),
                  this.premountMethodCalls.forEach((e) => e()),
                  this.premountAddListenerCalls.forEach((t, r) => {
                    t.nativeUnsubscribe = e.addListener(r);
                  }),
                  null ==
                    (t = f(this, l).internal.retrieveListeners("status")) ||
                    t.forEach((e) => {
                      this.on("status", e, { notify: !0 });
                    }),
                  null !== this.preopenSignIn &&
                    e.openSignIn(this.preopenSignIn),
                  null !== this.preopenCheckout &&
                    e.__internal_openCheckout(this.preopenCheckout),
                  null !== this.preopenPlanDetails &&
                    e.__internal_openPlanDetails(this.preopenPlanDetails),
                  null !== this.preopenSignUp &&
                    e.openSignUp(this.preopenSignUp),
                  null !== this.preopenUserProfile &&
                    e.openUserProfile(this.preopenUserProfile),
                  null !== this.preopenUserVerification &&
                    e.__internal_openReverification(
                      this.preopenUserVerification,
                    ),
                  null !== this.preopenOneTap &&
                    e.openGoogleOneTap(this.preopenOneTap),
                  null !== this.preopenOrganizationProfile &&
                    e.openOrganizationProfile(this.preopenOrganizationProfile),
                  null !== this.preopenCreateOrganization &&
                    e.openCreateOrganization(this.preopenCreateOrganization),
                  null !== this.preOpenWaitlist &&
                    e.openWaitlist(this.preOpenWaitlist),
                  this.premountSignInNodes.forEach((t, r) => {
                    e.mountSignIn(r, t);
                  }),
                  this.premountSignUpNodes.forEach((t, r) => {
                    e.mountSignUp(r, t);
                  }),
                  this.premountUserProfileNodes.forEach((t, r) => {
                    e.mountUserProfile(r, t);
                  }),
                  this.premountUserButtonNodes.forEach((t, r) => {
                    e.mountUserButton(r, t);
                  }),
                  this.premountOrganizationListNodes.forEach((t, r) => {
                    e.mountOrganizationList(r, t);
                  }),
                  this.premountWaitlistNodes.forEach((t, r) => {
                    e.mountWaitlist(r, t);
                  }),
                  this.premountPricingTableNodes.forEach((t, r) => {
                    e.mountPricingTable(r, t);
                  }),
                  this.premountApiKeysNodes.forEach((t, r) => {
                    e.mountApiKeys(r, t);
                  }),
                  this.premountOAuthConsentNodes.forEach((t, r) => {
                    e.__internal_mountOAuthConsent(r, t);
                  }),
                  void 0 === this.clerkjs.status &&
                    f(this, l).emit(M.Status, "ready"),
                  this.emitLoaded(),
                  this.clerkjs
                );
              }),
              (this.__unstable__updateProps = async (e) => {
                let t = await v(this, u, d).call(this);
                if (t && "__unstable__updateProps" in t)
                  return t.__unstable__updateProps(e);
              }),
              (this.__experimental_navigateToTask = async (e) =>
                this.clerkjs
                  ? this.clerkjs.__experimental_navigateToTask(e)
                  : Promise.reject()),
              (this.setActive = (e) =>
                this.clerkjs ? this.clerkjs.setActive(e) : Promise.reject()),
              (this.openSignIn = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openSignIn(e)
                  : (this.preopenSignIn = e);
              }),
              (this.closeSignIn = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeSignIn()
                  : (this.preopenSignIn = null);
              }),
              (this.__internal_openCheckout = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_openCheckout(e)
                  : (this.preopenCheckout = e);
              }),
              (this.__internal_closeCheckout = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_closeCheckout()
                  : (this.preopenCheckout = null);
              }),
              (this.__internal_openPlanDetails = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_openPlanDetails(e)
                  : (this.preopenPlanDetails = e);
              }),
              (this.__internal_closePlanDetails = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_closePlanDetails()
                  : (this.preopenPlanDetails = null);
              }),
              (this.__internal_openReverification = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_openReverification(e)
                  : (this.preopenUserVerification = e);
              }),
              (this.__internal_closeReverification = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_closeReverification()
                  : (this.preopenUserVerification = null);
              }),
              (this.openGoogleOneTap = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openGoogleOneTap(e)
                  : (this.preopenOneTap = e);
              }),
              (this.closeGoogleOneTap = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeGoogleOneTap()
                  : (this.preopenOneTap = null);
              }),
              (this.openUserProfile = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openUserProfile(e)
                  : (this.preopenUserProfile = e);
              }),
              (this.closeUserProfile = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeUserProfile()
                  : (this.preopenUserProfile = null);
              }),
              (this.openOrganizationProfile = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openOrganizationProfile(e)
                  : (this.preopenOrganizationProfile = e);
              }),
              (this.closeOrganizationProfile = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeOrganizationProfile()
                  : (this.preopenOrganizationProfile = null);
              }),
              (this.openCreateOrganization = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openCreateOrganization(e)
                  : (this.preopenCreateOrganization = e);
              }),
              (this.closeCreateOrganization = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeCreateOrganization()
                  : (this.preopenCreateOrganization = null);
              }),
              (this.openWaitlist = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openWaitlist(e)
                  : (this.preOpenWaitlist = e);
              }),
              (this.closeWaitlist = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeWaitlist()
                  : (this.preOpenWaitlist = null);
              }),
              (this.openSignUp = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.openSignUp(e)
                  : (this.preopenSignUp = e);
              }),
              (this.closeSignUp = () => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.closeSignUp()
                  : (this.preopenSignUp = null);
              }),
              (this.mountSignIn = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountSignIn(e, t)
                  : this.premountSignInNodes.set(e, t);
              }),
              (this.unmountSignIn = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountSignIn(e)
                  : this.premountSignInNodes.delete(e);
              }),
              (this.mountSignUp = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountSignUp(e, t)
                  : this.premountSignUpNodes.set(e, t);
              }),
              (this.unmountSignUp = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountSignUp(e)
                  : this.premountSignUpNodes.delete(e);
              }),
              (this.mountUserProfile = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountUserProfile(e, t)
                  : this.premountUserProfileNodes.set(e, t);
              }),
              (this.unmountUserProfile = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountUserProfile(e)
                  : this.premountUserProfileNodes.delete(e);
              }),
              (this.mountOrganizationProfile = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountOrganizationProfile(e, t)
                  : this.premountOrganizationProfileNodes.set(e, t);
              }),
              (this.unmountOrganizationProfile = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountOrganizationProfile(e)
                  : this.premountOrganizationProfileNodes.delete(e);
              }),
              (this.mountCreateOrganization = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountCreateOrganization(e, t)
                  : this.premountCreateOrganizationNodes.set(e, t);
              }),
              (this.unmountCreateOrganization = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountCreateOrganization(e)
                  : this.premountCreateOrganizationNodes.delete(e);
              }),
              (this.mountOrganizationSwitcher = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountOrganizationSwitcher(e, t)
                  : this.premountOrganizationSwitcherNodes.set(e, t);
              }),
              (this.unmountOrganizationSwitcher = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountOrganizationSwitcher(e)
                  : this.premountOrganizationSwitcherNodes.delete(e);
              }),
              (this.__experimental_prefetchOrganizationSwitcher = () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.__experimental_prefetchOrganizationSwitcher();
                };
                this.clerkjs && this.loaded
                  ? e()
                  : this.premountMethodCalls.set(
                      "__experimental_prefetchOrganizationSwitcher",
                      e,
                    );
              }),
              (this.mountOrganizationList = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountOrganizationList(e, t)
                  : this.premountOrganizationListNodes.set(e, t);
              }),
              (this.unmountOrganizationList = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountOrganizationList(e)
                  : this.premountOrganizationListNodes.delete(e);
              }),
              (this.mountUserButton = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountUserButton(e, t)
                  : this.premountUserButtonNodes.set(e, t);
              }),
              (this.unmountUserButton = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountUserButton(e)
                  : this.premountUserButtonNodes.delete(e);
              }),
              (this.mountWaitlist = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountWaitlist(e, t)
                  : this.premountWaitlistNodes.set(e, t);
              }),
              (this.unmountWaitlist = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountWaitlist(e)
                  : this.premountWaitlistNodes.delete(e);
              }),
              (this.mountPricingTable = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountPricingTable(e, t)
                  : this.premountPricingTableNodes.set(e, t);
              }),
              (this.unmountPricingTable = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountPricingTable(e)
                  : this.premountPricingTableNodes.delete(e);
              }),
              (this.mountApiKeys = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.mountApiKeys(e, t)
                  : this.premountApiKeysNodes.set(e, t);
              }),
              (this.unmountApiKeys = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.unmountApiKeys(e)
                  : this.premountApiKeysNodes.delete(e);
              }),
              (this.__internal_mountOAuthConsent = (e, t) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_mountOAuthConsent(e, t)
                  : this.premountOAuthConsentNodes.set(e, t);
              }),
              (this.__internal_unmountOAuthConsent = (e) => {
                this.clerkjs && this.loaded
                  ? this.clerkjs.__internal_unmountOAuthConsent(e)
                  : this.premountOAuthConsentNodes.delete(e);
              }),
              (this.addListener = (e) => {
                if (this.clerkjs) return this.clerkjs.addListener(e);
                {
                  let t = () => {
                    var t;
                    let r = this.premountAddListenerCalls.get(e);
                    r &&
                      (null == (t = r.nativeUnsubscribe) || t.call(r),
                      this.premountAddListenerCalls.delete(e));
                  };
                  return (
                    this.premountAddListenerCalls.set(e, {
                      unsubscribe: t,
                      nativeUnsubscribe: void 0,
                    }),
                    t
                  );
                }
              }),
              (this.navigate = (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs) ? void 0 : t.navigate(e);
                };
                this.clerkjs && this.loaded
                  ? t()
                  : this.premountMethodCalls.set("navigate", t);
              }),
              (this.redirectWithAuth = async (...e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.redirectWithAuth(...e);
                };
                return this.clerkjs && this.loaded
                  ? t()
                  : void this.premountMethodCalls.set("redirectWithAuth", t);
              }),
              (this.redirectToSignIn = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.redirectToSignIn(e);
                };
                return this.clerkjs && this.loaded
                  ? t()
                  : void this.premountMethodCalls.set("redirectToSignIn", t);
              }),
              (this.redirectToSignUp = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.redirectToSignUp(e);
                };
                return this.clerkjs && this.loaded
                  ? t()
                  : void this.premountMethodCalls.set("redirectToSignUp", t);
              }),
              (this.redirectToUserProfile = async () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToUserProfile();
                };
                return this.clerkjs && this.loaded
                  ? e()
                  : void this.premountMethodCalls.set(
                      "redirectToUserProfile",
                      e,
                    );
              }),
              (this.redirectToAfterSignUp = () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToAfterSignUp();
                };
                if (this.clerkjs && this.loaded) return e();
                this.premountMethodCalls.set("redirectToAfterSignUp", e);
              }),
              (this.redirectToAfterSignIn = () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToAfterSignIn();
                };
                this.clerkjs && this.loaded
                  ? e()
                  : this.premountMethodCalls.set("redirectToAfterSignIn", e);
              }),
              (this.redirectToAfterSignOut = () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToAfterSignOut();
                };
                this.clerkjs && this.loaded
                  ? e()
                  : this.premountMethodCalls.set("redirectToAfterSignOut", e);
              }),
              (this.redirectToOrganizationProfile = async () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToOrganizationProfile();
                };
                return this.clerkjs && this.loaded
                  ? e()
                  : void this.premountMethodCalls.set(
                      "redirectToOrganizationProfile",
                      e,
                    );
              }),
              (this.redirectToCreateOrganization = async () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToCreateOrganization();
                };
                return this.clerkjs && this.loaded
                  ? e()
                  : void this.premountMethodCalls.set(
                      "redirectToCreateOrganization",
                      e,
                    );
              }),
              (this.redirectToWaitlist = async () => {
                let e = () => {
                  var e;
                  return null == (e = this.clerkjs)
                    ? void 0
                    : e.redirectToWaitlist();
                };
                return this.clerkjs && this.loaded
                  ? e()
                  : void this.premountMethodCalls.set("redirectToWaitlist", e);
              }),
              (this.handleRedirectCallback = async (e) => {
                var t;
                let r = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.handleRedirectCallback(e);
                };
                this.clerkjs && this.loaded
                  ? null == (t = r()) || t.catch(() => {})
                  : this.premountMethodCalls.set("handleRedirectCallback", r);
              }),
              (this.handleGoogleOneTapCallback = async (e, t) => {
                var r;
                let n = () => {
                  var r;
                  return null == (r = this.clerkjs)
                    ? void 0
                    : r.handleGoogleOneTapCallback(e, t);
                };
                this.clerkjs && this.loaded
                  ? null == (r = n()) || r.catch(() => {})
                  : this.premountMethodCalls.set(
                      "handleGoogleOneTapCallback",
                      n,
                    );
              }),
              (this.handleEmailLinkVerification = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.handleEmailLinkVerification(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("handleEmailLinkVerification", t);
              }),
              (this.authenticateWithMetamask = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.authenticateWithMetamask(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("authenticateWithMetamask", t);
              }),
              (this.authenticateWithCoinbaseWallet = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.authenticateWithCoinbaseWallet(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set(
                  "authenticateWithCoinbaseWallet",
                  t,
                );
              }),
              (this.authenticateWithOKXWallet = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.authenticateWithOKXWallet(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("authenticateWithOKXWallet", t);
              }),
              (this.authenticateWithWeb3 = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.authenticateWithWeb3(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("authenticateWithWeb3", t);
              }),
              (this.authenticateWithGoogleOneTap = async (e) =>
                (await v(this, u, d).call(this)).authenticateWithGoogleOneTap(
                  e,
                )),
              (this.createOrganization = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.createOrganization(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("createOrganization", t);
              }),
              (this.getOrganization = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.getOrganization(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("getOrganization", t);
              }),
              (this.joinWaitlist = async (e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs)
                    ? void 0
                    : t.joinWaitlist(e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("joinWaitlist", t);
              }),
              (this.signOut = async (...e) => {
                let t = () => {
                  var t;
                  return null == (t = this.clerkjs) ? void 0 : t.signOut(...e);
                };
                if (this.clerkjs && this.loaded) return t();
                this.premountMethodCalls.set("signOut", t);
              }));
            let { Clerk: t = null, publishableKey: r } = e || {};
            (m(this, s, r),
              m(this, o, null == e ? void 0 : e.proxyUrl),
              m(this, i, null == e ? void 0 : e.domain),
              (this.options = e),
              (this.Clerk = t),
              (this.mode = (0, j.M)() ? "browser" : "server"),
              this.options.sdkMetadata || (this.options.sdkMetadata = eL),
              f(this, l).emit(M.Status, "loading"),
              f(this, l).prioritizedOn(M.Status, (e) => m(this, n, e)),
              f(this, s) && this.loadClerkJS());
          }
          get publishableKey() {
            return f(this, s);
          }
          get loaded() {
            var e;
            return (null == (e = this.clerkjs) ? void 0 : e.loaded) || !1;
          }
          get status() {
            var e;
            return this.clerkjs
              ? (null == (e = this.clerkjs) ? void 0 : e.status) ||
                  (this.clerkjs.loaded ? "ready" : "loading")
              : f(this, n);
          }
          static getOrCreateInstance(t) {
            return (
              ((0, j.M)() &&
                f(this, a) &&
                (!t.Clerk || f(this, a).Clerk === t.Clerk) &&
                f(this, a).publishableKey === t.publishableKey) ||
                m(this, a, new e(t)),
              f(this, a)
            );
          }
          static clearInstance() {
            m(this, a, null);
          }
          get domain() {
            return "undefined" != typeof window && window.location
              ? (0, k.VK)(f(this, i), new URL(window.location.href), "")
              : "function" == typeof f(this, i)
                ? c.sb.throw(c.Vo)
                : f(this, i) || "";
          }
          get proxyUrl() {
            return "undefined" != typeof window && window.location
              ? (0, k.VK)(f(this, o), new URL(window.location.href), "")
              : "function" == typeof f(this, o)
                ? c.sb.throw(c.Vo)
                : f(this, o) || "";
          }
          __internal_getOption(e) {
            var t, r;
            return (
              null == (t = this.clerkjs) ? void 0 : t.__internal_getOption
            )
              ? null == (r = this.clerkjs)
                ? void 0
                : r.__internal_getOption(e)
              : this.options[e];
          }
          get sdkMetadata() {
            var e;
            return (
              (null == (e = this.clerkjs) ? void 0 : e.sdkMetadata) ||
              this.options.sdkMetadata ||
              void 0
            );
          }
          get instanceType() {
            var e;
            return null == (e = this.clerkjs) ? void 0 : e.instanceType;
          }
          get frontendApi() {
            var e;
            return (null == (e = this.clerkjs) ? void 0 : e.frontendApi) || "";
          }
          get isStandardBrowser() {
            var e;
            return (
              (null == (e = this.clerkjs) ? void 0 : e.isStandardBrowser) ||
              this.options.standardBrowser ||
              !1
            );
          }
          get isSatellite() {
            return "undefined" != typeof window && window.location
              ? (0, k.VK)(
                  this.options.isSatellite,
                  new URL(window.location.href),
                  !1,
                )
              : "function" == typeof this.options.isSatellite &&
                  c.sb.throw(c.Vo);
          }
          async loadClerkJS() {
            var e, t;
            if ("browser" === this.mode && !this.loaded) {
              "undefined" != typeof window &&
                ((window.__clerk_publishable_key = f(this, s)),
                (window.__clerk_proxy_url = this.proxyUrl),
                (window.__clerk_domain = this.domain));
              try {
                if (this.Clerk) {
                  let e;
                  (((t = this.Clerk), "function" == typeof t)
                    ? ((e = new this.Clerk(f(this, s), {
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                      })),
                      this.beforeLoad(e),
                      await e.load(this.options))
                    : (e = this.Clerk).loaded ||
                      (this.beforeLoad(e), await e.load(this.options)),
                    (global.Clerk = e));
                } else if (!__BUILD_DISABLE_RHC__) {
                  if (
                    (global.Clerk ||
                      (await (0, _._R)({
                        ...this.options,
                        publishableKey: f(this, s),
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                        nonce: this.options.nonce,
                      })),
                    !global.Clerk)
                  )
                    throw Error(
                      "Failed to download latest ClerkJS. Contact support@clerk.com.",
                    );
                  (this.beforeLoad(global.Clerk),
                    await global.Clerk.load(this.options));
                }
                if (null == (e = global.Clerk) ? void 0 : e.loaded)
                  return this.hydrateClerkJS(global.Clerk);
                return;
              } catch (e) {
                (f(this, l).emit(M.Status, "error"),
                  console.error(e.stack || e.message || e));
                return;
              }
            }
          }
          get version() {
            var e;
            return null == (e = this.clerkjs) ? void 0 : e.version;
          }
          get client() {
            return this.clerkjs ? this.clerkjs.client : void 0;
          }
          get session() {
            return this.clerkjs ? this.clerkjs.session : void 0;
          }
          get user() {
            return this.clerkjs ? this.clerkjs.user : void 0;
          }
          get organization() {
            return this.clerkjs ? this.clerkjs.organization : void 0;
          }
          get telemetry() {
            return this.clerkjs ? this.clerkjs.telemetry : void 0;
          }
          get __unstable__environment() {
            return this.clerkjs ? this.clerkjs.__unstable__environment : void 0;
          }
          get isSignedIn() {
            return !!this.clerkjs && this.clerkjs.isSignedIn;
          }
          get billing() {
            var e;
            return null == (e = this.clerkjs) ? void 0 : e.billing;
          }
          get apiKeys() {
            var e;
            return null == (e = this.clerkjs) ? void 0 : e.apiKeys;
          }
          __unstable__setEnvironment(...e) {
            this.clerkjs &&
              "__unstable__setEnvironment" in this.clerkjs &&
              this.clerkjs.__unstable__setEnvironment(e);
          }
        };
      function eR(e) {
        let { isomorphicClerkOptions: t, initialState: r, children: n } = e,
          { isomorphicClerk: i, clerkStatus: o } = eM(t),
          [s, l] = y.useState({
            client: i.client,
            session: i.session,
            user: i.user,
            organization: i.organization,
          });
        y.useEffect(() => i.addListener((e) => l({ ...e })), []);
        let a = C(i.loaded, s, r),
          u = y.useMemo(() => ({ value: i }), [o]),
          d = y.useMemo(() => ({ value: s.client }), [s.client]),
          {
            sessionId: h,
            sessionStatus: p,
            sessionClaims: f,
            session: g,
            userId: m,
            user: v,
            orgId: _,
            actor: k,
            organization: b,
            orgRole: P,
            orgSlug: w,
            orgPermissions: E,
            factorVerificationAge: O,
          } = a,
          j = y.useMemo(
            () => ({
              value: {
                sessionId: h,
                sessionStatus: p,
                sessionClaims: f,
                userId: m,
                actor: k,
                orgId: _,
                orgRole: P,
                orgSlug: w,
                orgPermissions: E,
                factorVerificationAge: O,
              },
            }),
            [h, p, m, k, _, P, w, O, null == f ? void 0 : f.__raw],
          ),
          U = y.useMemo(() => ({ value: g }), [h, g]),
          L = y.useMemo(() => ({ value: v }), [m, v]),
          I = y.useMemo(() => ({ value: { organization: b } }), [_, b]);
        return y.createElement(
          c.SW.Provider,
          { value: u },
          y.createElement(
            S.pc.Provider,
            { value: d },
            y.createElement(
              S.IC.Provider,
              { value: U },
              y.createElement(
                S.TS,
                { ...I.value },
                y.createElement(
                  c.cy.Provider,
                  { value: j },
                  y.createElement(S.Rs.Provider, { value: L }, n),
                ),
              ),
            ),
          ),
        );
      }
      ((n = new WeakMap()),
        (i = new WeakMap()),
        (o = new WeakMap()),
        (s = new WeakMap()),
        (l = new WeakMap()),
        (a = new WeakMap()),
        (u = new WeakSet()),
        (d = function () {
          return new Promise((e) => {
            this.addOnLoaded(() => e(this.clerkjs));
          });
        }),
        g(eI, a));
      var eM = (e) => {
          let t = y.useRef(eI.getOrCreateInstance(e)),
            [r, n] = y.useState(t.current.status);
          return (
            y.useEffect(() => {
              t.current.__unstable__updateProps({ appearance: e.appearance });
            }, [e.appearance]),
            y.useEffect(() => {
              t.current.__unstable__updateProps({ options: e });
            }, [e.localization]),
            y.useEffect(
              () => (
                t.current.on("status", n),
                () => {
                  (t.current && t.current.off("status", n), eI.clearInstance());
                }
              ),
              [],
            ),
            { isomorphicClerk: t.current, clerkStatus: r }
          );
        },
        eT = (function (e, t, r) {
          let n = e.displayName || e.name || t || "Component",
            i = (n) => (
              !(function (e, t, r = 1) {
                y.useEffect(() => {
                  let n = W.get(e) || 0;
                  return n == r
                    ? c.sb.throw(t)
                    : (W.set(e, n + 1),
                      () => {
                        W.set(e, (W.get(e) || 1) - 1);
                      });
                }, []);
              })(t, r),
              y.createElement(e, { ...n })
            );
          return ((i.displayName = `withMaxAllowedInstancesGuard(${n})`), i);
        })(
          function (e) {
            let {
                initialState: t,
                children: r,
                __internal_bypassMissingPublishableKey: n,
                ...i
              } = e,
              { publishableKey: o = "", Clerk: s } = i;
            return (
              s ||
                n ||
                (o
                  ? o &&
                    !(0, w.rA)(o) &&
                    c.sb.throwInvalidPublishableKeyError({ key: o })
                  : c.sb.throwMissingPublishableKeyError()),
              y.createElement(
                eR,
                { initialState: t, isomorphicClerkOptions: i },
                r,
              )
            );
          },
          "ClerkProvider",
          c.yN,
        );
      ((eT.displayName = "ClerkProvider"),
        (0, c.wV)({ packageName: "@clerk/clerk-react" }),
        (0, _.kX)("@clerk/clerk-react"));
    },
    2146: (e, t, r) => {
      "use strict";
      function n(e) {
        let { reason: t, children: r } = e;
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(5262));
    },
    2163: (e, t, r) => {
      "use strict";
      r.d(t, {
        FW: () => u,
        HG: () => a,
        Vc: () => l,
        gE: () => i,
        iM: () => n,
        mG: () => o,
        ub: () => s,
      });
      var n = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"],
        i = [
          ".lcl.dev",
          ".stg.dev",
          ".lclstage.dev",
          ".stgstage.dev",
          ".dev.lclclerk.com",
          ".stg.lclclerk.com",
          ".accounts.lclclerk.com",
          "accountsstage.dev",
          "accounts.dev",
        ],
        o = [
          ".lcl.dev",
          "lclstage.dev",
          ".lclclerk.com",
          ".accounts.lclclerk.com",
        ],
        s = [".accountsstage.dev"],
        l = "https://api.lclclerk.com",
        a = "https://api.clerkstage.dev",
        u = "https://api.clerk.com";
    },
    2206: (e) => {
      "use strict";
      e.exports = { rE: "15.3.1" };
    },
    2374: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        }));
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2436: (e, t, r) => {
      "use strict";
      var n = r(2115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useState,
        s = n.useEffect,
        l = n.useLayoutEffect,
        a = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = o({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                d = n[1];
              return (
                l(
                  function () {
                    ((i.value = r),
                      (i.getSnapshot = t),
                      u(i) && d({ inst: i }));
                  },
                  [e, r, t],
                ),
                s(
                  function () {
                    return (
                      u(i) && d({ inst: i }),
                      e(function () {
                        u(i) && d({ inst: i });
                      })
                    );
                  },
                  [e],
                ),
                a(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    2714: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function i(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function o(e, t) {
        for (let [o, s] of Object.entries(t)) {
          if (!t.hasOwnProperty(o) || n.includes(o) || void 0 === s) continue;
          let l = r[o] || o.toLowerCase();
          ("SCRIPT" === e.tagName && i(l)
            ? (e[l] = !!s)
            : e.setAttribute(l, String(s)),
            (!1 === s ||
              ("SCRIPT" === e.tagName && i(l) && (!s || "false" === s))) &&
              (e.setAttribute(l, ""), e.removeAttribute(l)));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3018: (e, t, r) => {
      "use strict";
      let n, i;
      r.d(t, {
        ED: () => eQ,
        pc: () => e0,
        TS: () => e9,
        IC: () => e5,
        Rs: () => eH,
        e3: () => eq,
        MZ: () => tf,
        Kz: () => e3,
        ho: () => tp,
        hQ: () => eY,
        WD: () => e1,
        Z5: () => tn,
        D_: () => to,
        Wp: () => tm,
        wV: () => ta,
        g7: () => td,
        Jd: () => th,
      });
      var o = {};
      (r.r(o),
        r.d(o, {
          SWRConfig: () => ej,
          default: () => eU,
          mutate: () => er,
          preload: () => ec,
          unstable_serialize: () => eC,
          useSWRConfig: () => ed,
        }));
      var s = r(1627),
        l = (...e) => {},
        a = () => {
          let e = l,
            t = l;
          return {
            promise: new Promise((r, n) => {
              ((e = r), (t = n));
            }),
            resolve: e,
            reject: t,
          };
        };
      r(852);
      var u = r(1634),
        d = "reverification-error",
        c = (e) => ({
          clerk_error: {
            type: "forbidden",
            reason: d,
            metadata: { reverification: e },
          },
        }),
        h = (e) =>
          e &&
          "object" == typeof e &&
          "clerk_error" in e &&
          e.clerk_error?.type === "forbidden" &&
          e.clerk_error?.reason === d,
        p = r(5018),
        f = r(5649),
        g = r(2115),
        m = r(9033),
        v = Object.prototype.hasOwnProperty;
      let _ = new WeakMap(),
        k = () => {},
        y = k(),
        b = Object,
        P = (e) => e === y,
        S = (e) => "function" == typeof e,
        w = (e, t) => ({ ...e, ...t }),
        C = (e) => S(e.then),
        E = {},
        O = {},
        j = "undefined",
        U = typeof window != j,
        L = typeof document != j,
        I = U && "Deno" in window,
        R = () => U && typeof window.requestAnimationFrame != j,
        M = (e, t) => {
          let r = _.get(e);
          return [
            () => (!P(t) && e.get(t)) || E,
            (n) => {
              if (!P(t)) {
                let i = e.get(t);
                (t in O || (O[t] = i), r[5](t, w(i, n), i || E));
              }
            },
            r[6],
            () => (!P(t) && t in O ? O[t] : (!P(t) && e.get(t)) || E),
          ];
        },
        T = !0,
        [z, A] =
          U && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [k, k],
        N = {
          initFocus: (e) => (
            L && document.addEventListener("visibilitychange", e),
            z("focus", e),
            () => {
              (L && document.removeEventListener("visibilitychange", e),
                A("focus", e));
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                ((T = !0), e());
              },
              r = () => {
                T = !1;
              };
            return (
              z("online", t),
              z("offline", r),
              () => {
                (A("online", t), A("offline", r));
              }
            );
          },
        },
        W = !g.useId,
        x = !U || I,
        D = (e) => (R() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        B = x ? g.useEffect : g.useLayoutEffect,
        F = "undefined" != typeof navigator && navigator.connection,
        K =
          !x &&
          F &&
          (["slow-2g", "2g"].includes(F.effectiveType) || F.saveData),
        $ = new WeakMap(),
        V = (e) => b.prototype.toString.call(e),
        J = (e, t) => e === "[object ".concat(t, "]"),
        G = 0,
        q = (e) => {
          let t,
            r,
            n = typeof e,
            i = V(e),
            o = J(i, "Date"),
            s = J(i, "RegExp"),
            l = J(i, "Object");
          if (b(e) !== e || o || s)
            t = o
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = $.get(e))) return t;
            if (((t = ++G + "~"), $.set(e, t), Array.isArray(e))) {
              for (r = 0, t = "@"; r < e.length; r++) t += q(e[r]) + ",";
              $.set(e, t);
            }
            if (l) {
              t = "#";
              let n = b.keys(e).sort();
              for (; !P((r = n.pop())); )
                P(e[r]) || (t += r + ":" + q(e[r]) + ",");
              $.set(e, t);
            }
          }
          return t;
        },
        X = (e) => {
          if (S(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                  ? q(e)
                  : ""),
            t,
          ];
        },
        Q = 0,
        Y = () => ++Q;
      async function H() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let [n, i, o, s] = t,
          l = w(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof s ? { revalidate: s } : s || {},
          ),
          a = l.populateCache,
          u = l.rollbackOnError,
          d = l.optimisticData,
          c = (e) => ("function" == typeof u ? u(e) : !1 !== u),
          h = l.throwOnError;
        if (S(i)) {
          let e = [];
          for (let t of n.keys())
            !/^\$(inf|sub)\$/.test(t) && i(n.get(t)._k) && e.push(t);
          return Promise.all(e.map(p));
        }
        return p(i);
        async function p(e) {
          let r,
            [i] = X(e);
          if (!i) return;
          let [s, u] = M(n, i),
            [p, f, g, m] = _.get(n),
            v = () => {
              let t = p[i];
              return (S(l.revalidate)
                ? l.revalidate(s().data, e)
                : !1 !== l.revalidate) && (delete g[i], delete m[i], t && t[0])
                ? t[0](2).then(() => s().data)
                : s().data;
            };
          if (t.length < 3) return v();
          let k = o,
            b = !1,
            w = Y();
          f[i] = [w, 0];
          let E = !P(d),
            O = s(),
            j = O.data,
            U = O._c,
            L = P(U) ? j : U;
          if ((E && u({ data: (d = S(d) ? d(L, j) : d), _c: L }), S(k)))
            try {
              k = k(L);
            } catch (e) {
              ((r = e), (b = !0));
            }
          if (k && C(k)) {
            if (
              ((k = await k.catch((e) => {
                ((r = e), (b = !0));
              })),
              w !== f[i][0])
            ) {
              if (b) throw r;
              return k;
            }
            b && E && c(r) && ((a = !0), u({ data: L, _c: y }));
          }
          if (
            (a &&
              !b &&
              (S(a)
                ? u({ data: a(k, L), error: y, _c: y })
                : u({ data: k, error: y, _c: y })),
            (f[i][1] = Y()),
            Promise.resolve(v()).then(() => {
              u({ _c: y });
            }),
            b)
          ) {
            if (h) throw r;
            return;
          }
          return k;
        }
      }
      let Z = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        ee = (e, t) => {
          if (!_.has(e)) {
            let r = w(N, t),
              n = Object.create(null),
              i = H.bind(y, e),
              o = k,
              s = Object.create(null),
              l = (e, t) => {
                let r = s[e] || [];
                return ((s[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1));
              },
              a = (t, r, n) => {
                e.set(t, r);
                let i = s[t];
                if (i) for (let e of i) e(r, n);
              },
              u = () => {
                if (
                  !_.has(e) &&
                  (_.set(e, [
                    n,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    i,
                    a,
                    l,
                  ]),
                  !x)
                ) {
                  let t = r.initFocus(setTimeout.bind(y, Z.bind(y, n, 0))),
                    i = r.initReconnect(setTimeout.bind(y, Z.bind(y, n, 1)));
                  o = () => {
                    (t && t(), i && i(), _.delete(e));
                  };
                }
              };
            return (u(), [e, i, u, o]);
          }
          return [e, _.get(e)[4]];
        },
        [et, er] = ee(new Map()),
        en = w(
          {
            onLoadingSlow: k,
            onSuccess: k,
            onError: k,
            onErrorRetry: (e, t, r, n, i) => {
              let o = r.errorRetryCount,
                s = i.retryCount,
                l =
                  ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) *
                  r.errorRetryInterval;
              (P(o) || !(s > o)) && setTimeout(n, l, i);
            },
            onDiscarded: k,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: K ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: K ? 5e3 : 3e3,
            compare: function e(t, r) {
              var n, i;
              if (t === r) return !0;
              if (t && r && (n = t.constructor) === r.constructor) {
                if (n === Date) return t.getTime() === r.getTime();
                if (n === RegExp) return t.toString() === r.toString();
                if (n === Array) {
                  if ((i = t.length) === r.length)
                    for (; i-- && e(t[i], r[i]); );
                  return -1 === i;
                }
                if (!n || "object" == typeof t) {
                  for (n in ((i = 0), t))
                    if (
                      (v.call(t, n) && ++i && !v.call(r, n)) ||
                      !(n in r) ||
                      !e(t[n], r[n])
                    )
                      return !1;
                  return Object.keys(r).length === i;
                }
              }
              return t != t && r != r;
            },
            isPaused: () => !1,
            cache: et,
            mutate: er,
            fallback: {},
          },
          {
            isOnline: () => T,
            isVisible: () => {
              let e = L && document.visibilityState;
              return P(e) || "hidden" !== e;
            },
          },
        ),
        ei = (e, t) => {
          let r = w(e, t);
          if (t) {
            let { use: n, fallback: i } = e,
              { use: o, fallback: s } = t;
            (n && o && (r.use = n.concat(o)), i && s && (r.fallback = w(i, s)));
          }
          return r;
        },
        eo = (0, g.createContext)({}),
        es = "$inf$",
        el = U && window.__SWR_DEVTOOLS_USE__,
        ea = el ? window.__SWR_DEVTOOLS_USE__ : [],
        eu = (e) =>
          S(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        ed = () => w(en, (0, g.useContext)(eo)),
        ec = (e, t) => {
          let [r, n] = X(e),
            [, , , i] = _.get(et);
          if (i[r]) return i[r];
          let o = t(n);
          return ((i[r] = o), o);
        },
        eh = ea.concat((e) => (t, r, n) => {
          let i =
            r &&
            ((...e) => {
              let [n] = X(t),
                [, , , i] = _.get(et);
              if (n.startsWith(es)) return r(...e);
              let o = i[n];
              return P(o) ? r(...e) : (delete i[n], o);
            });
          return e(t, i, n);
        }),
        ep = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      el && (window.__SWR_DEVTOOLS_REACT__ = g);
      let ef = () => {},
        eg = ef(),
        em = Object,
        ev = (e) => e === eg,
        e_ = (e) => "function" == typeof e,
        ek = new WeakMap(),
        ey = (e) => em.prototype.toString.call(e),
        eb = (e, t) => e === `[object ${t}]`,
        eP = 0,
        eS = (e) => {
          let t,
            r,
            n = typeof e,
            i = ey(e),
            o = eb(i, "Date"),
            s = eb(i, "RegExp"),
            l = eb(i, "Object");
          if (em(e) !== e || o || s)
            t = o
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = ek.get(e))) return t;
            if (((t = ++eP + "~"), ek.set(e, t), Array.isArray(e))) {
              for (r = 0, t = "@"; r < e.length; r++) t += eS(e[r]) + ",";
              ek.set(e, t);
            }
            if (l) {
              t = "#";
              let n = em.keys(e).sort();
              for (; !ev((r = n.pop())); )
                ev(e[r]) || (t += r + ":" + eS(e[r]) + ",");
              ek.set(e, t);
            }
          }
          return t;
        },
        ew = (e) => {
          if (e_(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                  ? eS(e)
                  : ""),
            t,
          ];
        },
        eC = (e) => ew(e)[0],
        eE =
          g.use ||
          ((e) => {
            switch (e.status) {
              case "pending":
                throw e;
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw (
                  (e.status = "pending"),
                  e.then(
                    (t) => {
                      ((e.status = "fulfilled"), (e.value = t));
                    },
                    (t) => {
                      ((e.status = "rejected"), (e.reason = t));
                    },
                  ),
                  e
                );
            }
          }),
        eO = { dedupe: !0 },
        ej = b.defineProperty(
          (e) => {
            let { value: t } = e,
              r = (0, g.useContext)(eo),
              n = S(t),
              i = (0, g.useMemo)(() => (n ? t(r) : t), [n, r, t]),
              o = (0, g.useMemo)(() => (n ? i : ei(r, i)), [n, r, i]),
              s = i && i.provider,
              l = (0, g.useRef)(y);
            s && !l.current && (l.current = ee(s(o.cache || et), i));
            let a = l.current;
            return (
              a && ((o.cache = a[0]), (o.mutate = a[1])),
              B(() => {
                if (a) return (a[2] && a[2](), a[3]);
              }, []),
              (0, g.createElement)(eo.Provider, w(e, { value: o }))
            );
          },
          "defaultValue",
          { value: en },
        ),
        eU =
          ((n = (e, t, r) => {
            let {
                cache: n,
                compare: i,
                suspense: o,
                fallbackData: s,
                revalidateOnMount: l,
                revalidateIfStale: a,
                refreshInterval: u,
                refreshWhenHidden: d,
                refreshWhenOffline: c,
                keepPreviousData: h,
              } = r,
              [p, f, v, k] = _.get(n),
              [b, E] = X(e),
              O = (0, g.useRef)(!1),
              j = (0, g.useRef)(!1),
              U = (0, g.useRef)(b),
              L = (0, g.useRef)(t),
              I = (0, g.useRef)(r),
              R = () => I.current,
              T = () => R().isVisible() && R().isOnline(),
              [z, A, N, F] = M(n, b),
              K = (0, g.useRef)({}).current,
              $ = P(s) ? (P(r.fallback) ? y : r.fallback[b]) : s,
              V = (e, t) => {
                for (let r in K)
                  if ("data" === r) {
                    if (!i(e[r], t[r]) && (!P(e[r]) || !i(en, t[r]))) return !1;
                  } else if (t[r] !== e[r]) return !1;
                return !0;
              },
              J = (0, g.useMemo)(() => {
                let e =
                    !!b &&
                    !!t &&
                    (P(l) ? !R().isPaused() && !o && !1 !== a : l),
                  r = (t) => {
                    let r = w(t);
                    return (delete r._k, e)
                      ? { isValidating: !0, isLoading: !0, ...r }
                      : r;
                  },
                  n = z(),
                  i = F(),
                  s = r(n),
                  u = n === i ? s : r(i),
                  d = s;
                return [
                  () => {
                    let e = r(z());
                    return V(e, d)
                      ? ((d.data = e.data),
                        (d.isLoading = e.isLoading),
                        (d.isValidating = e.isValidating),
                        (d.error = e.error),
                        d)
                      : ((d = e), e);
                  },
                  () => u,
                ];
              }, [n, b]),
              G = (0, m.useSyncExternalStore)(
                (0, g.useCallback)(
                  (e) =>
                    N(b, (t, r) => {
                      V(r, t) || e();
                    }),
                  [n, b],
                ),
                J[0],
                J[1],
              ),
              q = !O.current,
              Q = p[b] && p[b].length > 0,
              Z = G.data,
              ee = P(Z) ? ($ && C($) ? eE($) : $) : Z,
              et = G.error,
              er = (0, g.useRef)(ee),
              en = h ? (P(Z) ? (P(er.current) ? ee : er.current) : Z) : ee,
              ei =
                (!Q || !!P(et)) &&
                (q && !P(l)
                  ? l
                  : !R().isPaused() && (o ? !P(ee) && a : P(ee) || a)),
              eo = !!(b && t && q && ei),
              es = P(G.isValidating) ? eo : G.isValidating,
              el = P(G.isLoading) ? eo : G.isLoading,
              ea = (0, g.useCallback)(
                async (e) => {
                  let t,
                    n,
                    o = L.current;
                  if (!b || !o || j.current || R().isPaused()) return !1;
                  let s = !0,
                    l = e || {},
                    a = !v[b] || !l.dedupe,
                    u = () =>
                      W
                        ? !j.current && b === U.current && O.current
                        : b === U.current,
                    d = { isValidating: !1, isLoading: !1 },
                    c = () => {
                      A(d);
                    },
                    h = () => {
                      let e = v[b];
                      e && e[1] === n && delete v[b];
                    },
                    g = { isValidating: !0 };
                  P(z().data) && (g.isLoading = !0);
                  try {
                    if (
                      (a &&
                        (A(g),
                        r.loadingTimeout &&
                          P(z().data) &&
                          setTimeout(() => {
                            s && u() && R().onLoadingSlow(b, r);
                          }, r.loadingTimeout),
                        (v[b] = [o(E), Y()])),
                      ([t, n] = v[b]),
                      (t = await t),
                      a && setTimeout(h, r.dedupingInterval),
                      !v[b] || v[b][1] !== n)
                    )
                      return (a && u() && R().onDiscarded(b), !1);
                    d.error = y;
                    let e = f[b];
                    if (!P(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                      return (c(), a && u() && R().onDiscarded(b), !1);
                    let l = z().data;
                    ((d.data = i(l, t) ? l : t),
                      a && u() && R().onSuccess(t, b, r));
                  } catch (r) {
                    h();
                    let e = R(),
                      { shouldRetryOnError: t } = e;
                    !e.isPaused() &&
                      ((d.error = r),
                      a &&
                        u() &&
                        (e.onError(r, b, e),
                        (!0 === t || (S(t) && t(r))) &&
                          (!R().revalidateOnFocus ||
                            !R().revalidateOnReconnect ||
                            T()) &&
                          e.onErrorRetry(
                            r,
                            b,
                            e,
                            (e) => {
                              let t = p[b];
                              t && t[0] && t[0](3, e);
                            },
                            { retryCount: (l.retryCount || 0) + 1, dedupe: !0 },
                          )));
                  }
                  return ((s = !1), c(), !0);
                },
                [b, n],
              ),
              eu = (0, g.useCallback)((...e) => H(n, U.current, ...e), []);
            if (
              (B(() => {
                ((L.current = t), (I.current = r), P(Z) || (er.current = Z));
              }),
              B(() => {
                if (!b) return;
                let e = ea.bind(y, eO),
                  t = 0;
                R().revalidateOnFocus &&
                  (t = Date.now() + R().focusThrottleInterval);
                let r = ep(b, p, (r, n = {}) => {
                  if (0 == r) {
                    let r = Date.now();
                    R().revalidateOnFocus &&
                      r > t &&
                      T() &&
                      ((t = r + R().focusThrottleInterval), e());
                  } else if (1 == r) R().revalidateOnReconnect && T() && e();
                  else if (2 == r) return ea();
                  else if (3 == r) return ea(n);
                });
                return (
                  (j.current = !1),
                  (U.current = b),
                  (O.current = !0),
                  A({ _k: E }),
                  ei && !v[b] && (P(ee) || x ? e() : D(e)),
                  () => {
                    ((j.current = !0), r());
                  }
                );
              }, [b]),
              B(() => {
                let e;
                function t() {
                  let t = S(u) ? u(z().data) : u;
                  t && -1 !== e && (e = setTimeout(r, t));
                }
                function r() {
                  !z().error && (d || R().isVisible()) && (c || R().isOnline())
                    ? ea(eO).then(t)
                    : t();
                }
                return (
                  t(),
                  () => {
                    e && (clearTimeout(e), (e = -1));
                  }
                );
              }, [u, d, c, b]),
              (0, g.useDebugValue)(en),
              o && P(ee) && b)
            ) {
              if (!W && x)
                throw Error(
                  "Fallback data is required when using Suspense in SSR.",
                );
              ((L.current = t), (I.current = r), (j.current = !1));
              let e = k[b];
              if ((P(e) || eE(eu(e)), P(et))) {
                let e = ea(eO);
                (P(en) || ((e.status = "fulfilled"), (e.value = !0)), eE(e));
              } else throw et;
            }
            return {
              mutate: eu,
              get data() {
                return ((K.data = !0), en);
              },
              get error() {
                return ((K.error = !0), et);
              },
              get isValidating() {
                return ((K.isValidating = !0), es);
              },
              get isLoading() {
                return ((K.isLoading = !0), el);
              },
            };
          }),
          function (...e) {
            let t = ed(),
              [r, i, o] = eu(e),
              s = ei(t, o),
              l = n,
              { use: a } = s,
              u = (a || []).concat(eh);
            for (let e = u.length; e--; ) l = u[e](l);
            return l(r, i || s.fetcher || null, s);
          }),
        eL = () => {},
        eI = eL(),
        eR = Object,
        eM = (e) => e === eI,
        eT = (e) => "function" == typeof e,
        ez = new WeakMap(),
        eA = (e) => eR.prototype.toString.call(e),
        eN = (e, t) => e === `[object ${t}]`,
        eW = 0,
        ex = (e) => {
          let t,
            r,
            n = typeof e,
            i = eA(e),
            o = eN(i, "Date"),
            s = eN(i, "RegExp"),
            l = eN(i, "Object");
          if (eR(e) !== e || o || s)
            t = o
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = ez.get(e))) return t;
            if (((t = ++eW + "~"), ez.set(e, t), Array.isArray(e))) {
              for (r = 0, t = "@"; r < e.length; r++) t += ex(e[r]) + ",";
              ez.set(e, t);
            }
            if (l) {
              t = "#";
              let n = eR.keys(e).sort();
              for (; !eM((r = n.pop())); )
                eM(e[r]) || (t += r + ":" + ex(e[r]) + ",");
              ez.set(e, t);
            }
          }
          return t;
        },
        eD = (e) => {
          if (eT(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                  ? ex(e)
                  : ""),
            t,
          ];
        },
        eB = (e) => eD(e ? e(0, null) : null)[0],
        eF = Promise.resolve(),
        eK =
          ((i = (e) => (t, r, n) => {
            let i,
              o = (0, g.useRef)(!1),
              {
                cache: s,
                initialSize: l = 1,
                revalidateAll: a = !1,
                persistSize: u = !1,
                revalidateFirstPage: d = !0,
                revalidateOnMount: c = !1,
                parallel: h = !1,
              } = n,
              [, , , p] = _.get(et);
            try {
              (i = eB(t)) && (i = es + i);
            } catch (e) {}
            let [f, v, k] = M(s, i),
              b = (0, g.useCallback)(() => (P(f()._l) ? l : f()._l), [s, i, l]);
            (0, m.useSyncExternalStore)(
              (0, g.useCallback)(
                (e) =>
                  i
                    ? k(i, () => {
                        e();
                      })
                    : () => {},
                [s, i],
              ),
              b,
              b,
            );
            let w = (0, g.useCallback)(() => {
                let e = f()._l;
                return P(e) ? l : e;
              }, [i, l]),
              C = (0, g.useRef)(w());
            B(() => {
              if (!o.current) {
                o.current = !0;
                return;
              }
              i && v({ _l: u ? C.current : w() });
            }, [i, s]);
            let E = c && !o.current,
              O = e(
                i,
                async (e) => {
                  let i = f()._i,
                    o = f()._r;
                  v({ _r: y });
                  let l = [],
                    u = w(),
                    [c] = M(s, e),
                    g = c().data,
                    m = [],
                    _ = null;
                  for (let e = 0; e < u; ++e) {
                    let [u, c] = X(t(e, h ? null : _));
                    if (!u) break;
                    let [f, v] = M(s, u),
                      k = f().data,
                      y =
                        a ||
                        i ||
                        P(k) ||
                        (d && !e && !P(g)) ||
                        E ||
                        (g && !P(g[e]) && !n.compare(g[e], k));
                    if (r && ("function" == typeof o ? o(k, c) : y)) {
                      let t = async () => {
                        if (u in p) {
                          let e = p[u];
                          (delete p[u], (k = await e));
                        } else k = await r(c);
                        (v({ data: k, _k: c }), (l[e] = k));
                      };
                      h ? m.push(t) : await t();
                    } else l[e] = k;
                    h || (_ = k);
                  }
                  return (
                    h && (await Promise.all(m.map((e) => e()))),
                    v({ _i: y }),
                    l
                  );
                },
                n,
              ),
              j = (0, g.useCallback)(
                function (e, t) {
                  let r = "boolean" == typeof t ? { revalidate: t } : t || {},
                    n = !1 !== r.revalidate;
                  return i
                    ? (n &&
                        (P(e)
                          ? v({ _i: !0, _r: r.revalidate })
                          : v({ _i: !1, _r: r.revalidate })),
                      arguments.length
                        ? O.mutate(e, { ...r, revalidate: n })
                        : O.mutate())
                    : eF;
                },
                [i, s],
              ),
              U = (0, g.useCallback)(
                (e) => {
                  let r;
                  if (!i) return eF;
                  let [, n] = M(s, i);
                  if (
                    (S(e) ? (r = e(w())) : "number" == typeof e && (r = e),
                    "number" != typeof r)
                  )
                    return eF;
                  (n({ _l: r }), (C.current = r));
                  let o = [],
                    [l] = M(s, i),
                    a = null;
                  for (let e = 0; e < r; ++e) {
                    let [r] = X(t(e, a)),
                      [n] = M(s, r),
                      i = r ? n().data : y;
                    if (P(i)) return j(l().data);
                    (o.push(i), (a = i));
                  }
                  return j(o);
                },
                [i, s, j, w],
              );
            return {
              size: w(),
              setSize: U,
              mutate: j,
              get data() {
                return O.data;
              },
              get error() {
                return O.error;
              },
              get isValidating() {
                return O.isValidating;
              },
              get isLoading() {
                return O.isLoading;
              },
            };
          }),
          (...e) => {
            let [t, r, n] = eu(e),
              o = (n.use || []).concat(i);
            return eU(t, r, { ...n, use: o });
          });
      var e$ = Object.prototype.hasOwnProperty;
      function eV(e, t, r) {
        for (r of e.keys()) if (eJ(r, t)) return r;
      }
      function eJ(e, t) {
        var r, n, i;
        if (e === t) return !0;
        if (e && t && (r = e.constructor) === t.constructor) {
          if (r === Date) return e.getTime() === t.getTime();
          if (r === RegExp) return e.toString() === t.toString();
          if (r === Array) {
            if ((n = e.length) === t.length) for (; n-- && eJ(e[n], t[n]); );
            return -1 === n;
          }
          if (r === Set) {
            if (e.size !== t.size) return !1;
            for (n of e)
              if (
                ((i = n) && "object" == typeof i && !(i = eV(t, i))) ||
                !t.has(i)
              )
                return !1;
            return !0;
          }
          if (r === Map) {
            if (e.size !== t.size) return !1;
            for (n of e)
              if (
                ((i = n[0]) && "object" == typeof i && !(i = eV(t, i))) ||
                !eJ(n[1], t.get(i))
              )
                return !1;
            return !0;
          }
          if (r === ArrayBuffer)
            ((e = new Uint8Array(e)), (t = new Uint8Array(t)));
          else if (r === DataView) {
            if ((n = e.byteLength) === t.byteLength)
              for (; n-- && e.getInt8(n) === t.getInt8(n); );
            return -1 === n;
          }
          if (ArrayBuffer.isView(e)) {
            if ((n = e.byteLength) === t.byteLength)
              for (; n-- && e[n] === t[n]; );
            return -1 === n;
          }
          if (!r || "object" == typeof e) {
            for (r in ((n = 0), e))
              if (
                (e$.call(e, r) && ++n && !e$.call(t, r)) ||
                !(r in t) ||
                !eJ(e[r], t[r])
              )
                return !1;
            return Object.keys(t).length === n;
          }
        }
        return e != e && t != t;
      }
      function eG(e, t) {
        if (!e)
          throw "string" == typeof t
            ? Error(t)
            : Error(`${t.displayName} not found`);
      }
      var eq = (e, t) => {
          let { assertCtxFn: r = eG } = t || {},
            n = g.createContext(void 0);
          return (
            (n.displayName = e),
            [
              n,
              () => {
                let t = g.useContext(n);
                return (r(t, `${e} not found`), t.value);
              },
              () => {
                let e = g.useContext(n);
                return e ? e.value : {};
              },
            ]
          );
        },
        eX = {};
      ((0, f.VA)(eX, { useSWR: () => eU, useSWRInfinite: () => eK }),
        (0, f.ie)(eX, o));
      var [eQ, eY] = eq("ClerkInstanceContext"),
        [eH, eZ] = eq("UserContext"),
        [e0, e1] = eq("ClientContext"),
        [e5, e2] = eq("SessionContext"),
        [e6, e7] = (g.createContext({}), eq("OrganizationContext")),
        e9 = ({ children: e, organization: t, swrConfig: r }) =>
          g.createElement(
            eX.SWRConfig,
            { value: r },
            g.createElement(
              e6.Provider,
              { value: { value: { organization: t } } },
              e,
            ),
          );
      function e3(e) {
        if (!g.useContext(eQ)) {
          if ("function" == typeof e) return void e();
          throw Error(
            `${e} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim(),
          );
        }
      }
      function e4(e, t) {
        let r = new Set(Object.keys(t)),
          n = {};
        for (let t of Object.keys(e)) r.has(t) || (n[t] = e[t]);
        return n;
      }
      var e8 = (e, t) => {
          let r = "boolean" == typeof e && e,
            n = (0, g.useRef)(
              r ? t.initialPage : (e?.initialPage ?? t.initialPage),
            ),
            i = (0, g.useRef)(r ? t.pageSize : (e?.pageSize ?? t.pageSize)),
            o = {};
          for (let n of Object.keys(t)) o[n] = r ? t[n] : (e?.[n] ?? t[n]);
          return { ...o, initialPage: n.current, pageSize: i.current };
        },
        te = { dedupingInterval: 6e4, focusThrottleInterval: 12e4 },
        tt = (e, t, r, n) => {
          let [i, o] = (0, g.useState)(e.initialPage ?? 1),
            s = (0, g.useRef)(e.initialPage ?? 1),
            l = (0, g.useRef)(e.pageSize ?? 10),
            a = r.enabled ?? !0,
            u = "cache" === r.__experimental_mode,
            d = r.infinite ?? !1,
            c = r.keepPreviousData ?? !1,
            h = { ...n, ...e, initialPage: i, pageSize: l.current },
            {
              data: p,
              isValidating: f,
              isLoading: m,
              error: v,
              mutate: _,
            } = eU(
              !d && a && (u || t) ? h : null,
              !u && t
                ? (r) => {
                    let i = e4(r, n);
                    return t({ ...e, ...i });
                  }
                : null,
              { keepPreviousData: c, ...te },
            ),
            {
              data: k,
              isLoading: y,
              isValidating: b,
              error: P,
              size: S,
              setSize: w,
              mutate: C,
            } = eK(
              (t) =>
                d && a
                  ? {
                      ...e,
                      ...n,
                      initialPage: s.current + t,
                      pageSize: l.current,
                    }
                  : null,
              (e) => {
                let r = e4(e, n);
                return t?.(r);
              },
              te,
            ),
            E = (0, g.useMemo)(() => (d ? S : i), [d, S, i]),
            O = (0, g.useCallback)((e) => (d ? void w(e) : o(e)), [w]),
            j = (0, g.useMemo)(
              () =>
                d ? (k?.map((e) => e?.data).flat() ?? []) : (p?.data ?? []),
              [d, p, k],
            ),
            U = (0, g.useMemo)(
              () =>
                d
                  ? k?.[k?.length - 1]?.total_count || 0
                  : (p?.total_count ?? 0),
              [d, p, k],
            ),
            L = d ? y : m,
            I = d ? b : f,
            R = (d ? P : v) ?? null,
            M = (0, g.useCallback)(() => {
              O((e) => Math.max(0, e + 1));
            }, [O]),
            T = (0, g.useCallback)(() => {
              O((e) => Math.max(0, e - 1));
            }, [O]),
            z = (s.current - 1) * l.current,
            A = Math.ceil((U - z) / l.current),
            N = U - z * l.current > E * l.current,
            W = (E - 1) * l.current > z * l.current,
            x = d
              ? (e) => C(e, { revalidate: !1 })
              : (e) => _(e, { revalidate: !1 });
          return {
            data: j,
            count: U,
            error: R,
            isLoading: L,
            isFetching: I,
            isError: !!R,
            page: E,
            pageCount: A,
            fetchPage: O,
            fetchNext: M,
            fetchPrevious: T,
            hasNextPage: N,
            hasPreviousPage: W,
            revalidate: d ? () => C() : () => _(),
            setData: x,
          };
        },
        tr = {
          data: void 0,
          count: void 0,
          error: void 0,
          isLoading: !1,
          isFetching: !1,
          isError: !1,
          page: void 0,
          pageCount: void 0,
          fetchPage: void 0,
          fetchNext: void 0,
          fetchPrevious: void 0,
          hasNextPage: !1,
          hasPreviousPage: !1,
          revalidate: void 0,
          setData: void 0,
        };
      function tn(e) {
        var t, r;
        let {
          domains: n,
          membershipRequests: i,
          memberships: o,
          invitations: l,
          subscriptions: a,
        } = e || {};
        e3("useOrganization");
        let { organization: u } = e7(),
          d = e2(),
          c = e8(n, {
            initialPage: 1,
            pageSize: 10,
            keepPreviousData: !1,
            infinite: !1,
            enrollmentMode: void 0,
          }),
          h = e8(i, {
            initialPage: 1,
            pageSize: 10,
            status: "pending",
            keepPreviousData: !1,
            infinite: !1,
          }),
          p = e8(o, {
            initialPage: 1,
            pageSize: 10,
            role: void 0,
            keepPreviousData: !1,
            infinite: !1,
            query: void 0,
          }),
          f = e8(l, {
            initialPage: 1,
            pageSize: 10,
            status: ["pending"],
            keepPreviousData: !1,
            infinite: !1,
          }),
          g = e8(a, {
            initialPage: 1,
            pageSize: 10,
            keepPreviousData: !1,
            infinite: !1,
          }),
          m = eY();
        m.telemetry?.record((0, s.FJ)("useOrganization"));
        let v =
            void 0 === n
              ? void 0
              : {
                  initialPage: c.initialPage,
                  pageSize: c.pageSize,
                  enrollmentMode: c.enrollmentMode,
                },
          _ =
            void 0 === i
              ? void 0
              : {
                  initialPage: h.initialPage,
                  pageSize: h.pageSize,
                  status: h.status,
                },
          k =
            void 0 === o
              ? void 0
              : {
                  initialPage: p.initialPage,
                  pageSize: p.pageSize,
                  role: p.role,
                  query: p.query,
                },
          y =
            void 0 === l
              ? void 0
              : {
                  initialPage: f.initialPage,
                  pageSize: f.pageSize,
                  status: f.status,
                },
          b =
            void 0 === a
              ? void 0
              : {
                  initialPage: g.initialPage,
                  pageSize: g.pageSize,
                  orgId: u?.id,
                },
          P = tt(
            { ...v },
            u?.getDomains,
            {
              keepPreviousData: c.keepPreviousData,
              infinite: c.infinite,
              enabled: !!v,
            },
            { type: "domains", organizationId: u?.id },
          ),
          S = tt(
            { ..._ },
            u?.getMembershipRequests,
            {
              keepPreviousData: h.keepPreviousData,
              infinite: h.infinite,
              enabled: !!_,
            },
            { type: "membershipRequests", organizationId: u?.id },
          ),
          w = tt(
            k || {},
            u?.getMemberships,
            {
              keepPreviousData: p.keepPreviousData,
              infinite: p.infinite,
              enabled: !!k,
            },
            { type: "members", organizationId: u?.id },
          ),
          C = tt(
            { ...y },
            u?.getInvitations,
            {
              keepPreviousData: f.keepPreviousData,
              infinite: f.infinite,
              enabled: !!y,
            },
            { type: "invitations", organizationId: u?.id },
          ),
          E = tt(
            { ...b },
            u?.getSubscriptions,
            {
              keepPreviousData: g.keepPreviousData,
              infinite: g.infinite,
              enabled: !!b,
            },
            { type: "subscriptions", organizationId: u?.id },
          );
        return void 0 === u
          ? {
              isLoaded: !1,
              organization: void 0,
              membership: void 0,
              domains: tr,
              membershipRequests: tr,
              memberships: tr,
              invitations: tr,
              subscriptions: tr,
            }
          : null === u
            ? {
                isLoaded: !0,
                organization: null,
                membership: null,
                domains: null,
                membershipRequests: null,
                memberships: null,
                invitations: null,
                subscriptions: null,
              }
            : !m.loaded && u
              ? {
                  isLoaded: !0,
                  organization: u,
                  membership: void 0,
                  domains: tr,
                  membershipRequests: tr,
                  memberships: tr,
                  invitations: tr,
                  subscriptions: tr,
                }
              : {
                  isLoaded: m.loaded,
                  organization: u,
                  membership:
                    ((t = d.user.organizationMemberships),
                    (r = u.id),
                    t.find((e) => e.organization.id === r)),
                  domains: P,
                  membershipRequests: S,
                  memberships: w,
                  invitations: C,
                  subscriptions: E,
                };
      }
      var ti = {
        data: void 0,
        count: void 0,
        error: void 0,
        isLoading: !1,
        isFetching: !1,
        isError: !1,
        page: void 0,
        pageCount: void 0,
        fetchPage: void 0,
        fetchNext: void 0,
        fetchPrevious: void 0,
        hasNextPage: !1,
        hasPreviousPage: !1,
        revalidate: void 0,
        setData: void 0,
      };
      function to(e) {
        let {
          userMemberships: t,
          userInvitations: r,
          userSuggestions: n,
        } = e || {};
        e3("useOrganizationList");
        let i = e8(t, {
            initialPage: 1,
            pageSize: 10,
            keepPreviousData: !1,
            infinite: !1,
          }),
          o = e8(r, {
            initialPage: 1,
            pageSize: 10,
            status: "pending",
            keepPreviousData: !1,
            infinite: !1,
          }),
          l = e8(n, {
            initialPage: 1,
            pageSize: 10,
            status: "pending",
            keepPreviousData: !1,
            infinite: !1,
          }),
          a = eY(),
          u = eZ();
        a.telemetry?.record((0, s.FJ)("useOrganizationList"));
        let d =
            void 0 === t
              ? void 0
              : { initialPage: i.initialPage, pageSize: i.pageSize },
          c =
            void 0 === r
              ? void 0
              : {
                  initialPage: o.initialPage,
                  pageSize: o.pageSize,
                  status: o.status,
                },
          h =
            void 0 === n
              ? void 0
              : {
                  initialPage: l.initialPage,
                  pageSize: l.pageSize,
                  status: l.status,
                },
          p = !!(a.loaded && u),
          f = tt(
            d || {},
            u?.getOrganizationMemberships,
            {
              keepPreviousData: i.keepPreviousData,
              infinite: i.infinite,
              enabled: !!d,
            },
            { type: "userMemberships", userId: u?.id },
          ),
          g = tt(
            { ...c },
            u?.getOrganizationInvitations,
            {
              keepPreviousData: o.keepPreviousData,
              infinite: o.infinite,
              enabled: !!c,
            },
            { type: "userInvitations", userId: u?.id },
          ),
          m = tt(
            { ...h },
            u?.getOrganizationSuggestions,
            {
              keepPreviousData: l.keepPreviousData,
              infinite: l.infinite,
              enabled: !!h,
            },
            { type: "userSuggestions", userId: u?.id },
          );
        return p
          ? {
              isLoaded: p,
              setActive: a.setActive,
              createOrganization: a.createOrganization,
              userMemberships: f,
              userInvitations: g,
              userSuggestions: m,
            }
          : {
              isLoaded: !1,
              createOrganization: void 0,
              setActive: void 0,
              userMemberships: ti,
              userInvitations: ti,
              userSuggestions: ti,
            };
      }
      var ts = "undefined" != typeof window ? g.useLayoutEffect : g.useEffect,
        tl = "useSession",
        ta = (e = {}) => {
          e3(tl);
          let t = e2(),
            r = eY();
          if ((r.telemetry?.record((0, s.FJ)(tl)), void 0 === t))
            return { isLoaded: !1, isSignedIn: void 0, session: void 0 };
          let n =
            t?.status === "pending" &&
            (e.treatPendingAsSignedOut ??
              r.__internal_getOption("treatPendingAsSignedOut"));
          return null === t || n
            ? { isLoaded: !0, isSignedIn: !1, session: null }
            : { isLoaded: !0, isSignedIn: !0, session: t };
        },
        tu = "useSessionList",
        td = () => {
          e3(tu);
          let e = eY(),
            t = e1(),
            r = eY();
          return (r.telemetry?.record((0, s.FJ)(tu)), t)
            ? { isLoaded: !0, sessions: t.sessions, setActive: e.setActive }
            : { isLoaded: !1, sessions: void 0, setActive: void 0 };
        },
        tc = "useUser";
      function th() {
        e3(tc);
        let e = eZ(),
          t = eY();
        return (t.telemetry?.record((0, s.FJ)(tc)), void 0 === e)
          ? { isLoaded: !1, isSignedIn: void 0, user: void 0 }
          : null === e
            ? { isLoaded: !0, isSignedIn: !1, user: null }
            : { isLoaded: !0, isSignedIn: !0, user: e };
      }
      var tp = () => (e3("useClerk"), eY()),
        tf = eJ;
      async function tg(e) {
        try {
          let t = await e;
          if (t instanceof Response) return t.json();
          return t;
        } catch (e) {
          if (
            (0, u.$R)(e) &&
            e.errors.find(
              ({ code: e }) => "session_reverification_required" === e,
            )
          )
            return c();
          throw e;
        }
      }
      var tm = (e, t) => {
        let { __internal_openReverification: r, telemetry: n } = tp(),
          i = (0, g.useRef)(e),
          o = (0, g.useRef)(t);
        return (
          n?.record(
            (0, s.FJ)("useReverification", {
              onNeedsReverification: !!t?.onNeedsReverification,
            }),
          ),
          ts(() => {
            ((i.current = e), (o.current = t));
          }),
          (0, g.useCallback)(
            (...e) =>
              (function (e) {
                return function (t) {
                  return async (...r) => {
                    let n = await tg(t(...r));
                    if (h(n)) {
                      let i = a(),
                        o = (0, p.D)(n.clerk_error.metadata?.reverification),
                        s = o ? o().level : void 0,
                        l = () => {
                          i.reject(
                            new u.cR("User cancelled attempted verification", {
                              code: "reverification_cancelled",
                            }),
                          );
                        },
                        d = () => {
                          i.resolve(!0);
                        };
                      (void 0 === e.onNeedsReverification
                        ? e.openUIComponent?.({
                            level: s,
                            afterVerification: d,
                            afterVerificationCancelled: l,
                          })
                        : e.onNeedsReverification({
                            cancel: l,
                            complete: d,
                            level: s,
                          }),
                        await i.promise,
                        (n = await tg(t(...r))));
                    }
                    return n;
                  };
                };
              })({ openUIComponent: r, telemetry: n, ...o.current })(i.current)(
                ...e,
              ),
            [r, n],
          )
        );
      };
      function tv({ hookName: e, resourceType: t, useFetcher: r }) {
        return function (n) {
          let { for: i, ...o } = n;
          e3(e);
          let l = r(i),
            a = e8(o, {
              initialPage: 1,
              pageSize: 10,
              keepPreviousData: !1,
              infinite: !1,
              __experimental_mode: void 0,
            }),
            u = eY(),
            d = eZ(),
            { organization: c } = e7();
          u.telemetry?.record((0, s.FJ)(e));
          let h =
              void 0 === o
                ? void 0
                : {
                    initialPage: a.initialPage,
                    pageSize: a.pageSize,
                    ...("organization" === i ? { orgId: c?.id } : {}),
                  },
            p = !!(u.loaded && d);
          return tt(
            h || {},
            l,
            {
              keepPreviousData: a.keepPreviousData,
              infinite: a.infinite,
              enabled: !!h && p,
              __experimental_mode: a.__experimental_mode,
            },
            {
              type: t,
              userId: d?.id,
              ...("organization" === i ? { orgId: c?.id } : {}),
            },
          );
        };
      }
      (tv({
        hookName: "useStatements",
        resourceType: "commerce-statements",
        useFetcher: () => eY().billing.getStatements,
      }),
        tv({
          hookName: "usePaymentAttempts",
          resourceType: "commerce-payment-attempts",
          useFetcher: () => eY().billing.getPaymentAttempts,
        }),
        tv({
          hookName: "usePaymentMethods",
          resourceType: "commerce-payment-methods",
          useFetcher: (e) => {
            let { organization: t } = e7(),
              r = eZ();
            return "organization" === e
              ? t?.getPaymentSources
              : r?.getPaymentSources;
          },
        }),
        tv({
          hookName: "useSubscriptionItems",
          resourceType: "commerce-subscription-items",
          useFetcher: () => eY().billing.getSubscriptions,
        }));
    },
    3398: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { ClientClerkProvider: () => A }));
      var n = r(1976),
        i = r(3877),
        o = new Set(),
        s = {
          warnOnce: (e) => {
            o.has(e) || (o.add(e), console.warn(e));
          },
          logOnce: (e) => {
            o.has(e) || (console.log(e), o.add(e));
          },
        };
      r(5649);
      var l = r(6645),
        a = r.n(l),
        u = r(5695),
        d = r(2206),
        c = r(2115);
      let h = "undefined" != typeof window ? c.useLayoutEffect : c.useEffect,
        p = c.createContext(void 0);
      p.displayName = "ClerkNextOptionsCtx";
      let f = () => {
          let e = c.useContext(p);
          return null == e ? void 0 : e.value;
        },
        g = (e) => {
          let { children: t, options: r } = e;
          return c.createElement(p.Provider, { value: { value: r } }, t);
        };
      var m = r(8572),
        v = r(9243),
        _ = r.n(v);
      function k(e) {
        let {
            publishableKey: t,
            clerkJSUrl: r,
            clerkJSVersion: i,
            clerkJSVariant: o,
            nonce: s,
          } = f(),
          { domain: l, proxyUrl: a } = (0, n.ho)();
        if (!t) return null;
        let u = {
            domain: l,
            proxyUrl: a,
            publishableKey: t,
            clerkJSUrl: r,
            clerkJSVersion: i,
            clerkJSVariant: o,
            nonce: s,
          },
          d = (0, m.nO)(u),
          h = "app" === e.router ? "script" : _();
        return c.createElement(h, {
          src: d,
          "data-clerk-js-script": !0,
          async: !0,
          defer: "pages" !== e.router && void 0,
          crossOrigin: "anonymous",
          strategy: "pages" === e.router ? "beforeInteractive" : void 0,
          ...(0, m.T5)(u),
        });
      }
      var y = r(9331),
        b = r(4579),
        P = r(1275),
        S = r(9509);
      let w = (e) => {
        var t;
        return {
          ...e,
          publishableKey:
            e.publishableKey || S.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "",
          clerkJSUrl: e.clerkJSUrl || S.env.NEXT_PUBLIC_CLERK_JS_URL,
          clerkJSVersion:
            e.clerkJSVersion || S.env.NEXT_PUBLIC_CLERK_JS_VERSION,
          proxyUrl: e.proxyUrl || S.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
          domain: e.domain || S.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
          isSatellite:
            e.isSatellite || (0, b.zz)(S.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
          signInUrl: e.signInUrl || S.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
          signUpUrl: e.signUpUrl || S.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
          signInForceRedirectUrl:
            e.signInForceRedirectUrl ||
            S.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL ||
            "",
          signUpForceRedirectUrl:
            e.signUpForceRedirectUrl ||
            S.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL ||
            "",
          signInFallbackRedirectUrl:
            e.signInFallbackRedirectUrl ||
            S.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL ||
            "",
          signUpFallbackRedirectUrl:
            e.signUpFallbackRedirectUrl ||
            S.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL ||
            "",
          afterSignInUrl:
            e.afterSignInUrl || S.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
          afterSignUpUrl:
            e.afterSignUpUrl || S.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
          newSubscriptionRedirectUrl:
            e.newSubscriptionRedirectUrl ||
            S.env.NEXT_PUBLIC_CLERK_CHECKOUT_CONTINUE_URL ||
            "",
          telemetry:
            null != (t = e.telemetry)
              ? t
              : {
                  disabled: (0, b.zz)(
                    S.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED,
                  ),
                  debug: (0, b.zz)(S.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG),
                },
          sdkMetadata: P.tm,
        };
      };
      var C = r(6898),
        E = r(6299);
      let O = () => {
        var e, t;
        let r = (0, n.ho)(),
          { pagesRouter: i } = (0, E.r)();
        return (
          null == (t = r.telemetry) ||
            t.record(
              (0, C.YF)({
                router: i ? "pages" : "app",
                ...((
                  null == (e = null == globalThis ? void 0 : globalThis.next)
                    ? void 0
                    : e.version
                )
                  ? { nextjsVersion: globalThis.next.version }
                  : {}),
              }),
            ),
          null
        );
      };
      var j = r(7895),
        U = r(6862);
      let L = (e) => {
          var t;
          return (
            null != window.__clerk_internal_navigations ||
              (window.__clerk_internal_navigations = {}),
            null != (t = window.__clerk_internal_navigations)[e] || (t[e] = {}),
            window.__clerk_internal_navigations[e]
          );
        },
        I = (e) => {
          let { windowNav: t, routerNav: r, name: n } = e,
            i = (0, u.usePathname)(),
            [o, s] = (0, c.useTransition)();
          t &&
            (L(n).fun = (e, i) =>
              new Promise((o) => {
                var l, a;
                (null != (l = L(n)).promisesBuffer || (l.promisesBuffer = []),
                  null == (a = L(n).promisesBuffer) || a.push(o),
                  s(() => {
                    var n, o, s, l;
                    (null == (n = null == i ? void 0 : i.__internal_metadata)
                      ? void 0
                      : n.navigationType) === "internal"
                      ? t(
                          (null !=
                          (s = null == (o = window.next) ? void 0 : o.version)
                            ? s
                            : "") < "14.1.0"
                            ? history.state
                            : null,
                          "",
                          e,
                        )
                      : r((l = e));
                  }));
              }));
          let l = () => {
            var e;
            (null == (e = L(n).promisesBuffer) || e.forEach((e) => e()),
              (L(n).promisesBuffer = []));
          };
          return (
            (0, c.useEffect)(() => (l(), l), []),
            (0, c.useEffect)(() => {
              o || l();
            }, [i, o]),
            (0, c.useCallback)((e, t) => L(n).fun(e, t), [])
          );
        },
        R = () => {
          let e = (0, u.useRouter)();
          return I({
            windowNav:
              "undefined" != typeof window
                ? window.history.pushState.bind(window.history)
                : void 0,
            routerNav: e.push.bind(e),
            name: "push",
          });
        },
        M = () => {
          let e = (0, u.useRouter)();
          return I({
            windowNav:
              "undefined" != typeof window
                ? window.history.replaceState.bind(window.history)
                : void 0,
            routerNav: e.replace.bind(e),
            name: "replace",
          });
        },
        T = a()(
          () =>
            r
              .e(642)
              .then(r.bind(r, 2642))
              .then((e) => e.KeylessCreatorOrReader),
          { loadableGenerated: { webpack: () => [2642] } },
        ),
        z = (e) => {
          if (j.M) {
            let e = "Clerk:\nYour current Next.js version (".concat(
              d.rE,
              ') will be deprecated in the next major release of "@clerk/nextjs". Please upgrade to next@14.1.0 or later.',
            );
            (0, i.M)()
              ? s.warnOnce(e)
              : s.logOnce(
                  "\n\x1b[43m----------\n".concat(e, "\n----------\x1b[0m\n"),
                );
          }
          let {
              __unstable_invokeMiddlewareOnAuthStateChange: t = !0,
              children: r,
            } = e,
            o = (0, u.useRouter)(),
            l = R(),
            a = M(),
            [p, m] = (0, c.useTransition)();
          if (f()) return e.children;
          ((0, c.useEffect)(() => {
            var e;
            p ||
              null == (e = window.__clerk_internal_invalidateCachePromise) ||
              e.call(window);
          }, [p]),
            h(() => {
              ((window.__unstable__onBeforeSetActive = (e) =>
                new Promise((t) => {
                  var r;
                  window.__clerk_internal_invalidateCachePromise = t;
                  let n =
                    (null == (r = null == window ? void 0 : window.next)
                      ? void 0
                      : r.version) || "";
                  n.startsWith("13")
                    ? m(() => {
                        o.refresh();
                      })
                    : n.startsWith("15") && "sign-out" === e
                      ? t()
                      : (0, U.y)().then(() => t());
                })),
                (window.__unstable__onAfterSetActive = () => {
                  if (t) return o.refresh();
                }));
            }, []));
          let v = w({ ...e, routerPush: l, routerReplace: a });
          return c.createElement(
            g,
            { options: v },
            c.createElement(
              n.lJ,
              { ...v },
              c.createElement(O, null),
              c.createElement(k, { router: "app" }),
              r,
            ),
          );
        },
        A = (e) => {
          let { children: t, disableKeyless: r = !1, ...n } = e;
          return w(n).publishableKey || !y.I || r
            ? c.createElement(z, { ...n }, t)
            : c.createElement(T, null, c.createElement(z, { ...n }, t));
        };
    },
    3789: (e, t, r) => {
      "use strict";
      r.d(t, { _r: () => n._r });
      var n = r(1634);
      r(5649);
    },
    3877: (e, t, r) => {
      "use strict";
      function n() {
        return "undefined" != typeof window;
      }
      (r.d(t, { M: () => n }),
        RegExp(
          "bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush",
          "i",
        ),
        r(5649));
    },
    4054: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return s;
          },
          createAsyncLocalStorage: function () {
            return o;
          },
          createSnapshot: function () {
            return l;
          },
        }));
      let r = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 },
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function o() {
        return i ? new i() : new n();
      }
      function s(e) {
        return i ? i.bind(e) : n.bind(e);
      }
      function l() {
        return i
          ? i.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    4129: (e, t, r) => {
      "use strict";
      r.d(t, { Fj: () => o, MC: () => i, b_: () => n });
      var n = () => !1,
        i = () => !1,
        o = () => {
          try {
            return !0;
          } catch {}
          return !1;
        };
    },
    4477: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          callServer: function () {
            return n.callServer;
          },
          createServerReference: function () {
            return o;
          },
          findSourceMapURL: function () {
            return i.findSourceMapURL;
          },
        }));
      let n = r(3806),
        i = r(1818),
        o = r(4979).createServerReference;
    },
    4579: (e, t, r) => {
      "use strict";
      r.d(t, { zz: () => n.zz });
      var n = r(852);
      r(5649);
    },
    5018: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => f, M2: () => v, MR: () => m });
      var n = {
          strict_mfa: { afterMinutes: 10, level: "multi_factor" },
          strict: { afterMinutes: 10, level: "second_factor" },
          moderate: { afterMinutes: 60, level: "second_factor" },
          lax: { afterMinutes: 1440, level: "second_factor" },
        },
        i = new Set(["first_factor", "second_factor", "multi_factor"]),
        o = new Set(["strict_mfa", "strict", "moderate", "lax"]),
        s = (e) => "number" == typeof e && e > 0,
        l = (e) => i.has(e),
        a = (e) => o.has(e),
        u = (e) => e.replace(/^(org:)*/, "org:"),
        d = (e, t) => {
          let { orgId: r, orgRole: n, orgPermissions: i } = t;
          return (e.role || e.permission) && r && n && i
            ? e.permission
              ? i.includes(u(e.permission))
              : e.role
                ? u(n) === u(e.role)
                : null
            : null;
        },
        c = (e, t) => {
          let { org: r, user: n } = p(e),
            [i, o] = t.split(":"),
            s = o || i;
          return "org" === i
            ? r.includes(s)
            : "user" === i
              ? n.includes(s)
              : [...r, ...n].includes(s);
        },
        h = (e, t) => {
          let { features: r, plans: n } = t;
          return e.feature && r
            ? c(r, e.feature)
            : e.plan && n
              ? c(n, e.plan)
              : null;
        },
        p = (e) => {
          let t = e ? e.split(",").map((e) => e.trim()) : [];
          return {
            org: t
              .filter((e) => e.split(":")[0].includes("o"))
              .map((e) => e.split(":")[1]),
            user: t
              .filter((e) => e.split(":")[0].includes("u"))
              .map((e) => e.split(":")[1]),
          };
        },
        f = (e) => {
          if (!e) return !1;
          let t = "string" == typeof e && a(e),
            r = "object" == typeof e && l(e.level) && s(e.afterMinutes);
          return (
            (!!t || !!r) &&
            ((e) => ("string" == typeof e ? n[e] : e)).bind(null, e)
          );
        },
        g = (e, { factorVerificationAge: t }) => {
          if (!e.reverification || !t) return null;
          let r = f(e.reverification);
          if (!r) return null;
          let { level: n, afterMinutes: i } = r(),
            [o, s] = t,
            l = -1 !== o ? i > o : null,
            a = -1 !== s ? i > s : null;
          switch (n) {
            case "first_factor":
              return l;
            case "second_factor":
              return -1 !== s ? a : l;
            case "multi_factor":
              return -1 === s ? l : l && a;
          }
        },
        m = (e) => (t) => {
          if (!e.userId) return !1;
          let r = h(t, e),
            n = d(t, e),
            i = g(t, e);
          return [r || n, i].some((e) => null === e)
            ? [r || n, i].some((e) => !0 === e)
            : [r || n, i].every((e) => !0 === e);
        },
        v = ({
          authObject: {
            sessionId: e,
            sessionStatus: t,
            userId: r,
            actor: n,
            orgId: i,
            orgRole: o,
            orgSlug: s,
            signOut: l,
            getToken: a,
            has: u,
            sessionClaims: d,
          },
          options: { treatPendingAsSignedOut: c = !0 },
        }) =>
          void 0 === e && void 0 === r
            ? {
                isLoaded: !1,
                isSignedIn: void 0,
                sessionId: e,
                sessionClaims: void 0,
                userId: r,
                actor: void 0,
                orgId: void 0,
                orgRole: void 0,
                orgSlug: void 0,
                has: void 0,
                signOut: l,
                getToken: a,
              }
            : null === e && null === r
              ? {
                  isLoaded: !0,
                  isSignedIn: !1,
                  sessionId: e,
                  userId: r,
                  sessionClaims: null,
                  actor: null,
                  orgId: null,
                  orgRole: null,
                  orgSlug: null,
                  has: () => !1,
                  signOut: l,
                  getToken: a,
                }
              : c && "pending" === t
                ? {
                    isLoaded: !0,
                    isSignedIn: !1,
                    sessionId: null,
                    userId: null,
                    sessionClaims: null,
                    actor: null,
                    orgId: null,
                    orgRole: null,
                    orgSlug: null,
                    has: () => !1,
                    signOut: l,
                    getToken: a,
                  }
                : e && d && r && i && o
                  ? {
                      isLoaded: !0,
                      isSignedIn: !0,
                      sessionId: e,
                      sessionClaims: d,
                      userId: r,
                      actor: n || null,
                      orgId: i,
                      orgRole: o,
                      orgSlug: s || null,
                      has: u,
                      signOut: l,
                      getToken: a,
                    }
                  : e && d && r && !i
                    ? {
                        isLoaded: !0,
                        isSignedIn: !0,
                        sessionId: e,
                        sessionClaims: d,
                        userId: r,
                        actor: n || null,
                        orgId: null,
                        orgRole: null,
                        orgSlug: null,
                        has: u,
                        signOut: l,
                        getToken: a,
                      }
                    : void 0;
    },
    5100: (e, t, r) => {
      "use strict";
      r.d(t, { T5: () => P, nO: () => b, _R: () => y, kX: () => k });
      var n = (e, t = "5.70.0") => {
          if (e) return e;
          let r = i(t);
          return r ? ("snapshot" === r ? "5.70.0" : r) : o(t);
        },
        i = (e) =>
          e
            .trim()
            .replace(/^v/, "")
            .match(/-(.+?)(\.|$)/)?.[1],
        o = (e) => e.trim().replace(/^v/, "").split(".")[0];
      function s(e) {
        return e.startsWith("/");
      }
      var l = /\/$|\/\?|\/#/,
        a = {
          initialDelay: 125,
          maxDelayBetweenRetries: 0,
          factor: 2,
          shouldRetry: (e, t) => t < 5,
          retryImmediately: !1,
          jitter: !0,
        },
        u = async (e) => new Promise((t) => setTimeout(t, e)),
        d = (e, t) => (t ? e * (1 + Math.random()) : e),
        c = (e) => {
          let t = 0,
            r = () => {
              let r = e.initialDelay * Math.pow(e.factor, t);
              return (
                (r = d(r, e.jitter)),
                Math.min(e.maxDelayBetweenRetries || r, r)
              );
            };
          return async () => {
            (await u(r()), t++);
          };
        },
        h = async (e, t = {}) => {
          let r = 0,
            {
              shouldRetry: n,
              initialDelay: i,
              maxDelayBetweenRetries: o,
              factor: s,
              retryImmediately: l,
              jitter: h,
            } = { ...a, ...t },
            p = c({
              initialDelay: i,
              maxDelayBetweenRetries: o,
              factor: s,
              jitter: h,
            });
          for (;;)
            try {
              return await e();
            } catch (e) {
              if (!n(e, ++r)) throw e;
              l && 1 === r ? await u(d(100, h)) : await p();
            }
        };
      async function p(e = "", t) {
        let {
          async: r,
          defer: n,
          beforeLoad: i,
          crossOrigin: o,
          nonce: s,
        } = t || {};
        return h(
          () =>
            new Promise((t, l) => {
              (e || l(Error("loadScript cannot be called without a src")),
                (document && document.body) ||
                  l(
                    "loadScript cannot be called when document does not exist",
                  ));
              let a = document.createElement("script");
              (o && a.setAttribute("crossorigin", o),
                (a.async = r || !1),
                (a.defer = n || !1),
                a.addEventListener("load", () => {
                  (a.remove(), t(a));
                }),
                a.addEventListener("error", () => {
                  (a.remove(), l());
                }),
                (a.src = e),
                (a.nonce = s),
                i?.(a),
                document.body.appendChild(a));
            }),
          { shouldRetry: (e, t) => t <= 5 },
        );
      }
      var f = r(1634),
        g = r(7682),
        m = "Clerk: Failed to load Clerk",
        { isDevOrStagingUrl: v } = (0, g.RZ)(),
        _ = (0, f._r)({ packageName: "@clerk/shared" });
      function k(e) {
        _.setPackageName({ packageName: e });
      }
      var y = async (e) => {
          let t = document.querySelector("script[data-clerk-js-script]");
          return t
            ? new Promise((e, r) => {
                (t.addEventListener("load", () => {
                  e(t);
                }),
                  t.addEventListener("error", () => {
                    r(m);
                  }));
              })
            : e?.publishableKey
              ? p(b(e), {
                  async: !0,
                  crossOrigin: "anonymous",
                  nonce: e.nonce,
                  beforeLoad: S(e),
                }).catch(() => {
                  throw Error(m);
                })
              : void _.throwMissingPublishableKeyError();
        },
        b = (e) => {
          let {
            clerkJSUrl: t,
            clerkJSVariant: r,
            clerkJSVersion: i,
            proxyUrl: o,
            domain: l,
            publishableKey: a,
          } = e;
          if (t) return t;
          let u = "";
          u =
            o &&
            (function (e) {
              var t;
              return !e || ((t = e), /^http(s)?:\/\//.test(t || "")) || s(e);
            })(o)
              ? (function (e) {
                  return e
                    ? s(e)
                      ? new URL(e, window.location.origin).toString()
                      : e
                    : "";
                })(o).replace(/http(s)?:\/\//, "")
              : l && !v((0, g.q5)(a)?.frontendApi || "")
                ? (function (e) {
                    let t;
                    if (!e) return "";
                    if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
                    else {
                      if (e.match(/\.clerk.accounts/)) return e;
                      t = /^(clerk\.)*/gi;
                    }
                    let r = e.replace(t, "");
                    return `clerk.${r}`;
                  })(l)
                : (0, g.q5)(a)?.frontendApi || "";
          let d = r ? `${r.replace(/\.+$/, "")}.` : "",
            c = n(i);
          return `https://${u}/npm/@clerk/clerk-js@${c}/dist/clerk.${d}browser.js`;
        },
        P = (e) => {
          let t = {};
          return (
            e.publishableKey &&
              (t["data-clerk-publishable-key"] = e.publishableKey),
            e.proxyUrl && (t["data-clerk-proxy-url"] = e.proxyUrl),
            e.domain && (t["data-clerk-domain"] = e.domain),
            e.nonce && (t.nonce = e.nonce),
            t
          );
        },
        S = (e) => (t) => {
          let r = P(e);
          for (let e in r) t.setAttribute(e, r[e]);
        };
      r(5649);
    },
    5256: (e, t, r) => {
      "use strict";
      r.d(t, {
        useAuth: () => i.d,
        useClerk: () => n.ho,
        useEmailLink: () => n.ui,
        useOrganization: () => n.Z5,
        useOrganizationList: () => n.D_,
        useReverification: () => n.Wp,
        useSession: () => n.wV,
        useSessionList: () => n.g7,
        useSignIn: () => n.go,
        useSignUp: () => n.yC,
        useUser: () => n.Jd,
      });
      var n = r(1976);
      r(3789);
      var i = r(7016);
    },
    5323: (e, t, r) => {
      "use strict";
      r.d(t, {
        cy: () => p,
        B$: () => et,
        wF: () => X,
        lT: () => q,
        z0: () => J,
        A0: () => G,
        SW: () => g,
        rm: () => ee,
        m2: () => Z,
        W5: () => Q,
        mO: () => Y,
        eG: () => H,
        D: () => E,
        wm: () => L,
        sR: () => C,
        n: () => w,
        sb: () => c,
        s7: () => j,
        Wq: () => _,
        yN: () => v,
        kd: () => O,
        kf: () => S,
        vb: () => P,
        wV: () => h,
        Vo: () => k,
        As: () => D,
        ho: () => l.ho,
        hP: () => B,
        ui: () => F,
        Z5: () => l.Z5,
        D_: () => l.D_,
        Wp: () => l.Wp,
        dy: () => l.wV,
        g7: () => l.g7,
        go: () => K,
        yC: () => $,
        Jd: () => l.Jd,
        P6: () => U,
        aU: () => R,
        ld: () => T,
        Wv: () => z,
        UX: () => I,
        Uw: () => M,
        _I: () => b,
        $n: () => y,
        Q: () => V,
      });
      var n = r(3789),
        i = r(5018);
      r(5649);
      var o = r(6898),
        s = r(2115),
        l = r(3018),
        a = r(4129),
        u = new Set(),
        d = (e, t, r) => {
          let n = (0, a.MC)() || (0, a.Fj)(),
            i = r ?? e;
          u.has(i) ||
            n ||
            (u.add(i),
            console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`));
        },
        c = (0, n._r)({ packageName: "@clerk/clerk-react" });
      function h(e) {
        c.setMessages(e).setPackageName(e);
      }
      var [p, f] = (0, l.e3)("AuthContext"),
        g = l.ED,
        m = l.hQ,
        v =
          "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.",
        _ = (e) =>
          `You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,
        k =
          "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",
        y =
          "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
        b =
          "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
        P =
          "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
        S =
          "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
        w = (e) =>
          `<${e} /> can only accept <${e}.Page /> and <${e}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,
        C = (e) =>
          `Missing props. <${e}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,
        E = (e) =>
          `Missing props. <${e}.Link /> component requires the following props: url, label and labelIcon.`,
        O = (e) =>
          `The <${e}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${e} path={'/my-path'} />`,
        j = (e) =>
          `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${e}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`,
        U =
          "<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
        L =
          "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
        I =
          "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",
        R =
          "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",
        M =
          "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",
        T =
          "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",
        z =
          "Missing props. <UserButton.Action /> component requires the following props: label.",
        A = (e) => {
          (0, l.Kz)(() => {
            c.throwMissingClerkProviderError({ source: e });
          });
        },
        N = (e) =>
          new Promise((t) => {
            let r = (n) => {
              ["ready", "degraded"].includes(n) && (t(), e.off("status", r));
            };
            e.on("status", r, { notify: !0 });
          }),
        W = (e) => async (t) =>
          (await N(e), e.session) ? e.session.getToken(t) : null,
        x =
          (e) =>
          async (...t) => (await N(e), e.signOut(...t)),
        D = (e = {}) => {
          var t, r;
          A("useAuth");
          let { treatPendingAsSignedOut: n, ...i } = null != e ? e : {},
            l = f();
          void 0 === l.sessionId &&
            void 0 === l.userId &&
            (l = null != i ? i : {});
          let a = m(),
            u = (0, s.useCallback)(W(a), [a]),
            d = (0, s.useCallback)(x(a), [a]);
          return (
            null == (t = a.telemetry) ||
              t.record((0, o.FJ)("useAuth", { treatPendingAsSignedOut: n })),
            B(
              { ...l, getToken: u, signOut: d },
              {
                treatPendingAsSignedOut:
                  null != n
                    ? n
                    : null == (r = a.__internal_getOption)
                      ? void 0
                      : r.call(a, "treatPendingAsSignedOut"),
              },
            )
          );
        };
      function B(e, { treatPendingAsSignedOut: t = !0 } = {}) {
        let {
            userId: r,
            orgId: n,
            orgRole: o,
            has: l,
            signOut: a,
            getToken: u,
            orgPermissions: d,
            factorVerificationAge: h,
            sessionClaims: p,
          } = null != e ? e : {},
          f = (0, s.useCallback)(
            (e) =>
              l
                ? l(e)
                : (0, i.MR)({
                    userId: r,
                    orgId: n,
                    orgRole: o,
                    orgPermissions: d,
                    factorVerificationAge: h,
                    features: (null == p ? void 0 : p.fea) || "",
                    plans: (null == p ? void 0 : p.pla) || "",
                  })(e),
            [l, r, n, o, d, h],
          ),
          g = (0, i.M2)({
            authObject: { ...e, getToken: u, signOut: a, has: f },
            options: { treatPendingAsSignedOut: t },
          });
        return (
          g ||
          c.throw(
            "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support",
          )
        );
      }
      function F(e) {
        let { startEmailLinkFlow: t, cancelEmailLinkFlow: r } = s.useMemo(
          () => e.createEmailLinkFlow(),
          [e],
        );
        return (
          s.useEffect(() => r, []),
          { startEmailLinkFlow: t, cancelEmailLinkFlow: r }
        );
      }
      var K = () => {
          var e;
          A("useSignIn");
          let t = m(),
            r = (0, l.WD)();
          return (null == (e = t.telemetry) || e.record((0, o.FJ)("useSignIn")),
          r)
            ? { isLoaded: !0, signIn: r.signIn, setActive: t.setActive }
            : { isLoaded: !1, signIn: void 0, setActive: void 0 };
        },
        $ = () => {
          var e;
          A("useSignUp");
          let t = m(),
            r = (0, l.WD)();
          return (null == (e = t.telemetry) || e.record((0, o.FJ)("useSignUp")),
          r)
            ? { isLoaded: !0, signUp: r.signUp, setActive: t.setActive }
            : { isLoaded: !1, signUp: void 0, setActive: void 0 };
        },
        V = (e, t) => {
          let r =
            ("string" == typeof t ? t : null == t ? void 0 : t.component) ||
            e.displayName ||
            e.name ||
            "Component";
          e.displayName = r;
          let n = "string" == typeof t ? void 0 : t,
            i = (t) => {
              A(r || "withClerk");
              let i = m();
              return i.loaded || (null == n ? void 0 : n.renderWhileLoading)
                ? s.createElement(e, { ...t, component: r, clerk: i })
                : null;
            };
          return ((i.displayName = `withClerk(${r})`), i);
        },
        J = ({ children: e }) => ((A("ClerkLoaded"), m().loaded) ? e : null),
        G = ({ children: e }) =>
          (A("ClerkLoading"), "loading" !== m().status) ? null : e,
        q = ({ children: e }) =>
          (A("ClerkFailed"), "error" !== m().status) ? null : e,
        X = ({ children: e }) =>
          (A("ClerkDegraded"), "degraded" !== m().status) ? null : e,
        Q = V(({ clerk: e, ...t }) => {
          let { client: r, session: n } = e,
            i = r.signedInSessions
              ? r.signedInSessions.length > 0
              : r.activeSessions && r.activeSessions.length > 0;
          return (
            s.useEffect(() => {
              null === n && i
                ? e.redirectToAfterSignOut()
                : e.redirectToSignIn(t);
            }, []),
            null
          );
        }, "RedirectToSignIn"),
        Y = V(
          ({ clerk: e, ...t }) => (
            s.useEffect(() => {
              e.redirectToSignUp(t);
            }, []),
            null
          ),
          "RedirectToSignUp",
        ),
        H = V(
          ({ clerk: e }) => (
            s.useEffect(() => {
              (d(
                "RedirectToUserProfile",
                "Use the `redirectToUserProfile()` method instead.",
              ),
                e.redirectToUserProfile());
            }, []),
            null
          ),
          "RedirectToUserProfile",
        ),
        Z = V(
          ({ clerk: e }) => (
            s.useEffect(() => {
              (d(
                "RedirectToOrganizationProfile",
                "Use the `redirectToOrganizationProfile()` method instead.",
              ),
                e.redirectToOrganizationProfile());
            }, []),
            null
          ),
          "RedirectToOrganizationProfile",
        ),
        ee = V(
          ({ clerk: e }) => (
            s.useEffect(() => {
              (d(
                "RedirectToCreateOrganization",
                "Use the `redirectToCreateOrganization()` method instead.",
              ),
                e.redirectToCreateOrganization());
            }, []),
            null
          ),
          "RedirectToCreateOrganization",
        ),
        et = V(
          ({ clerk: e, ...t }) => (
            s.useEffect(() => {
              e.handleRedirectCallback(t);
            }, []),
            null
          ),
          "AuthenticateWithRedirectCallback",
        );
    },
    5583: (e, t, r) => {
      e.exports = r(1569);
    },
    5649: (e, t, r) => {
      "use strict";
      r.d(t, {
        OV: () => p,
        S7: () => h,
        VA: () => a,
        ie: () => d,
        jq: () => f,
      });
      var n = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyNames,
        s = Object.prototype.hasOwnProperty,
        l = (e) => {
          throw TypeError(e);
        },
        a = (e, t) => {
          for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
        },
        u = (e, t, r, l) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let a of o(t))
              s.call(e, a) ||
                a === r ||
                n(e, a, {
                  get: () => t[a],
                  enumerable: !(l = i(t, a)) || l.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (u(e, t, "default"), r && u(r, t, "default")),
        c = (e, t, r) => t.has(e) || l("Cannot " + r),
        h = (e, t, r) => (
          c(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        p = (e, t, r, n) => (
          c(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        ),
        f = (e, t, r) => (c(e, t, "access private method"), r);
    },
    5695: (e, t, r) => {
      "use strict";
      var n = r(8999);
      (r.o(n, "useParams") &&
        r.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSelectedLayoutSegments") &&
          r.d(t, {
            useSelectedLayoutSegments: function () {
              return n.useSelectedLayoutSegments;
            },
          }));
    },
    5744: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        }));
      let n = r(7828);
    },
    6299: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => i });
      var n = r(5583);
      let i = () => ({ pagesRouter: (0, n.useRouter)() });
    },
    6645: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(8229)._(r(7357));
      function i(e, t) {
        var r;
        let i = {};
        "function" == typeof e && (i.loader = e);
        let o = { ...i, ...t };
        return (0, n.default)({
          ...o,
          modules: null == (r = o.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6898: (e, t, r) => {
      "use strict";
      r.d(t, { FJ: () => n.FJ, YF: () => n.YF });
      var n = r(1627);
      (r(852), r(5649));
    },
    7016: (e, t, r) => {
      "use strict";
      r.d(t, { PromisifiedAuthProvider: () => a, d: () => u });
      var n = r(1976),
        i = r(8572),
        o = r(5583),
        s = r(2115);
      let l = s.createContext(null);
      function a(e) {
        let { authPromise: t, children: r } = e;
        return s.createElement(l.Provider, { value: t }, r);
      }
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useRouter)(),
          r = s.useContext(l),
          a = r;
        return (r && "then" in r && (a = s.use(r)),
        "undefined" != typeof window)
          ? (0, n.As)({ ...a, ...e })
          : t
            ? (0, n.As)(e)
            : (0, i.hP)({ ...a, ...e });
      }
    },
    7357: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = r(5155),
        i = r(2115),
        o = r(2146);
      function s(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      r(255);
      let l = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0,
        },
        a = function (e) {
          let t = { ...l, ...e },
            r = (0, i.lazy)(() => t.loader().then(s)),
            a = t.loading;
          function u(e) {
            let s = a
                ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = !t.ssr || !!t.loading,
              u = l ? i.Suspense : i.Fragment,
              d = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [null, (0, n.jsx)(r, { ...e })],
                  })
                : (0, n.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(u, {
              ...(l ? { fallback: s } : {}),
              children: d,
            });
          }
          return ((u.displayName = "LoadableComponent"), u);
        };
    },
    7682: (e, t, r) => {
      "use strict";
      r.d(t, { RZ: () => a, rA: () => l, q5: () => s });
      var n = (e) =>
          "undefined" != typeof atob && "function" == typeof atob
            ? atob(e)
            : "undefined" != typeof global && global.Buffer
              ? new global.Buffer(e, "base64").toString()
              : e,
        i = r(2163),
        o = "pk_live_";
      function s(e, t = {}) {
        if (!(e = e || "") || !l(e)) {
          if (t.fatal && !e)
            throw Error(
              "Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys",
            );
          if (t.fatal && !l(e)) throw Error("Publishable key not valid.");
          return null;
        }
        let r = e.startsWith(o) ? "production" : "development",
          i = n(e.split("_")[2]);
        return (
          (i = i.slice(0, -1)),
          t.proxyUrl
            ? (i = t.proxyUrl)
            : "development" !== r &&
              t.domain &&
              t.isSatellite &&
              (i = `clerk.${t.domain}`),
          { instanceType: r, frontendApi: i }
        );
      }
      function l(e = "") {
        try {
          let t = e.startsWith(o) || e.startsWith("pk_test_"),
            r = n(e.split("_")[2] || "").endsWith("$");
          return t && r;
        } catch {
          return !1;
        }
      }
      function a() {
        let e = new Map();
        return {
          isDevOrStagingUrl: (t) => {
            if (!t) return !1;
            let r = "string" == typeof t ? t : t.hostname,
              n = e.get(r);
            return (
              void 0 === n &&
                ((n = i.gE.some((e) => r.endsWith(e))), e.set(r, n)),
              n
            );
          },
        };
      }
    },
    7828: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = (0, r(4054).createAsyncLocalStorage)();
    },
    7895: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => i });
      var n = r(2206);
      let i = n.rE.startsWith("13.") || n.rE.startsWith("14.0");
    },
    8416: (e, t, r) => {
      "use strict";
      r.d(t, { VK: () => o, b_: () => n.b_, Fj: () => n.Fj, s2: () => i });
      var n = r(4129),
        i = (e) => {
          (0, n.b_)() && console.error(`Clerk: ${e}`);
        };
      function o(e, t, r) {
        return "function" == typeof e
          ? e(t)
          : void 0 !== e
            ? e
            : void 0 !== r
              ? r
              : void 0;
      }
      r(5649);
    },
    8572: (e, t, r) => {
      "use strict";
      r.d(t, { T5: () => i.T5, hP: () => n.hP, nO: () => i.nO, yC: () => o });
      var n = r(5323),
        i = r(5100);
      function o(e, t, r) {
        let i = t.path || (null == r ? void 0 : r.path);
        return "path" ===
          (t.routing || (null == r ? void 0 : r.routing) || "path")
          ? i
            ? { ...r, ...t, routing: "path" }
            : n.sb.throw((0, n.kd)(e))
          : t.path
            ? n.sb.throw((0, n.s7)(e))
            : { ...r, ...t, path: void 0 };
      }
    },
    9033: (e, t, r) => {
      "use strict";
      e.exports = r(2436);
    },
    9243: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return _;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return m;
          },
        }));
      let n = r(8229),
        i = r(6966),
        o = r(5155),
        s = n._(r(7650)),
        l = i._(r(2115)),
        a = r(2830),
        u = r(2714),
        d = r(2374),
        c = new Map(),
        h = new Set(),
        p = (e) => {
          if (s.default.preinit)
            return void e.forEach((e) => {
              s.default.preinit(e, { as: "style" });
            });
          {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement("link");
              ((r.type = "text/css"),
                (r.rel = "stylesheet"),
                (r.href = e),
                t.appendChild(r));
            });
          }
        },
        f = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: o,
              children: s = "",
              strategy: l = "afterInteractive",
              onError: a,
              stylesheets: d,
            } = e,
            f = r || t;
          if (f && h.has(f)) return;
          if (c.has(t)) {
            (h.add(f), c.get(t).then(n, a));
            return;
          }
          let g = () => {
              (i && i(), h.add(f));
            },
            m = document.createElement("script"),
            v = new Promise((e, t) => {
              (m.addEventListener("load", function (t) {
                (e(), n && n.call(this, t), g());
              }),
                m.addEventListener("error", function (e) {
                  t(e);
                }));
            }).catch(function (e) {
              a && a(e);
            });
          (o
            ? ((m.innerHTML = o.__html || ""), g())
            : s
              ? ((m.textContent =
                  "string" == typeof s
                    ? s
                    : Array.isArray(s)
                      ? s.join("")
                      : ""),
                g())
              : t && ((m.src = t), c.set(t, v)),
            (0, u.setAttributesFromProps)(m, e),
            "worker" === l && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", l),
            d && p(d),
            document.body.appendChild(m));
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, d.requestIdleCallback)(() => f(e));
            })
          : f(e);
      }
      function m(e) {
        (e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            h.add(t);
          }));
      }
      function v(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: i = null,
            strategy: u = "afterInteractive",
            onError: c,
            stylesheets: p,
            ...g
          } = e,
          {
            updateScripts: m,
            scripts: v,
            getIsSsr: _,
            appDir: k,
            nonce: y,
          } = (0, l.useContext)(a.HeadManagerContext),
          b = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let e = t || r;
          b.current || (i && e && h.has(e) && i(), (b.current = !0));
        }, [i, t, r]);
        let P = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            if (!P.current) {
              if ("afterInteractive" === u) f(e);
              else
                "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, d.requestIdleCallback)(() => f(e))
                    : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => f(e));
                      }));
              P.current = !0;
            }
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (m
              ? ((v[u] = (v[u] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: i, onError: c, ...g },
                ])),
                m(v))
              : _ && _()
                ? h.add(t || r)
                : _ && !_() && f(e)),
          k)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                s.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            if (!r)
              return (
                g.dangerouslySetInnerHTML &&
                  ((g.children = g.dangerouslySetInnerHTML.__html),
                  delete g.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...g, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                s.default.preload(
                  r,
                  g.integrity
                    ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: y,
                        crossOrigin: g.crossOrigin,
                      }
                    : { as: "script", nonce: y, crossOrigin: g.crossOrigin },
                ),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...g, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === u &&
            r &&
            s.default.preload(
              r,
              g.integrity
                ? {
                    as: "script",
                    integrity: g.integrity,
                    nonce: y,
                    crossOrigin: g.crossOrigin,
                  }
                : { as: "script", nonce: y, crossOrigin: g.crossOrigin },
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let _ = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9331: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => o });
      var n = r(8416),
        i = r(1275);
      let o = !r(7895).M && (0, n.b_)() && !i.ev;
    },
  },
]);
