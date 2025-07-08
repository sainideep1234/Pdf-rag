"use strict";
((exports.id = 966),
  (exports.ids = [966]),
  (exports.modules = {
    55371: (e, l, s) => {
      s.d(l, { a: () => t });
      var a = s(6475);
      let t = (0, a.createServerReference)(
        "7f419fad310f11a4732d44a6844ddcdcee6ec58bec",
        a.callServer,
        void 0,
        a.findSourceMapURL,
        "createOrReadKeylessAction",
      );
    },
    93966: (e, l, s) => {
      (s.r(l), s.d(l, { KeylessCreatorOrReader: () => n }));
      var a = s(16189),
        t = s(43210),
        r = s.n(t),
        i = s(55371);
      let n = (e) => {
        var l;
        let { children: s } = e,
          n =
            (null == (l = (0, a.useSelectedLayoutSegments)()[0])
              ? void 0
              : l.startsWith("/_not-found")) || !1,
          [d, o] = r().useActionState(i.a, null);
        return ((0, t.useEffect)(() => {
          n ||
            r().startTransition(() => {
              o();
            });
        }, [n]),
        r().isValidElement(s))
          ? r().cloneElement(s, {
              key: null == d ? void 0 : d.publishableKey,
              publishableKey: null == d ? void 0 : d.publishableKey,
              __internal_keyless_claimKeylessApplicationUrl:
                null == d ? void 0 : d.claimUrl,
              __internal_keyless_copyInstanceKeysUrl:
                null == d ? void 0 : d.apiKeysUrl,
              __internal_bypassMissingPublishableKey: !0,
            })
          : s;
      };
    },
  }));
