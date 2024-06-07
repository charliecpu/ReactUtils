import T from "react";
var X = { VITE_API_URL: "https://recordkeeperapi2.azurewebsites.net/api/", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const K = (e) => {
  let o;
  const a = /* @__PURE__ */ new Set(), S = (i, t) => {
    const r = typeof i == "function" ? i(o) : i;
    if (!Object.is(r, o)) {
      const f = o;
      o = t ?? (typeof r != "object" || r === null) ? r : Object.assign({}, o, r), a.forEach((_) => _(o, f));
    }
  }, s = () => o, y = { setState: S, getState: s, getInitialState: () => h, subscribe: (i) => (a.add(i), () => a.delete(i)), destroy: () => {
    (X ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), a.clear();
  } }, h = o = e(S, s, y);
  return y;
}, Z = (e) => e ? K(e) : K;
function ee(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var N = { exports: {} }, B = {}, V = { exports: {} }, M = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function te() {
  if (H)
    return M;
  H = 1;
  var e = T;
  function o(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var a = typeof Object.is == "function" ? Object.is : o, S = e.useState, s = e.useEffect, c = e.useLayoutEffect, O = e.useDebugValue;
  function m(t, r) {
    var f = r(), _ = S({ inst: { value: f, getSnapshot: r } }), d = _[0].inst, v = _[1];
    return c(function() {
      d.value = f, d.getSnapshot = r, y(d) && v({ inst: d });
    }, [t, f, r]), s(function() {
      return y(d) && v({ inst: d }), t(function() {
        y(d) && v({ inst: d });
      });
    }, [t]), O(f), f;
  }
  function y(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var f = r();
      return !a(t, f);
    } catch {
      return !0;
    }
  }
  function h(t, r) {
    return r();
  }
  var i = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : m;
  return M.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : i, M;
}
var U = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ne() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = T, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(l) {
      {
        for (var n = arguments.length, E = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          E[u - 1] = arguments[u];
        S("error", l, E);
      }
    }
    function S(l, n, E) {
      {
        var u = o.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (n += "%s", E = E.concat([p]));
        var L = E.map(function(g) {
          return String(g);
        });
        L.unshift("Warning: " + n), Function.prototype.apply.call(console[l], console, L);
      }
    }
    function s(l, n) {
      return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
    }
    var c = typeof Object.is == "function" ? Object.is : s, O = e.useState, m = e.useEffect, y = e.useLayoutEffect, h = e.useDebugValue, i = !1, t = !1;
    function r(l, n, E) {
      i || e.startTransition !== void 0 && (i = !0, a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var u = n();
      if (!t) {
        var p = n();
        c(u, p) || (a("The result of getSnapshot should be cached to avoid an infinite loop"), t = !0);
      }
      var L = O({
        inst: {
          value: u,
          getSnapshot: n
        }
      }), g = L[0].inst, A = L[1];
      return y(function() {
        g.value = u, g.getSnapshot = n, f(g) && A({
          inst: g
        });
      }, [l, u, n]), m(function() {
        f(g) && A({
          inst: g
        });
        var I = function() {
          f(g) && A({
            inst: g
          });
        };
        return l(I);
      }, [l]), h(u), u;
    }
    function f(l) {
      var n = l.getSnapshot, E = l.value;
      try {
        var u = n();
        return !c(E, u);
      } catch {
        return !0;
      }
    }
    function _(l, n, E) {
      return n();
    }
    var d = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !d, w = v ? _ : r, D = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : w;
    U.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), U;
}
var z;
function J() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? V.exports = te() : V.exports = ne()), V.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P;
function re() {
  if (P)
    return B;
  P = 1;
  var e = T, o = J();
  function a(h, i) {
    return h === i && (h !== 0 || 1 / h === 1 / i) || h !== h && i !== i;
  }
  var S = typeof Object.is == "function" ? Object.is : a, s = o.useSyncExternalStore, c = e.useRef, O = e.useEffect, m = e.useMemo, y = e.useDebugValue;
  return B.useSyncExternalStoreWithSelector = function(h, i, t, r, f) {
    var _ = c(null);
    if (_.current === null) {
      var d = { hasValue: !1, value: null };
      _.current = d;
    } else
      d = _.current;
    _ = m(function() {
      function w(u) {
        if (!D) {
          if (D = !0, l = u, u = r(u), f !== void 0 && d.hasValue) {
            var p = d.value;
            if (f(p, u))
              return n = p;
          }
          return n = u;
        }
        if (p = n, S(l, u))
          return p;
        var L = r(u);
        return f !== void 0 && f(p, L) ? p : (l = u, n = L);
      }
      var D = !1, l, n, E = t === void 0 ? null : t;
      return [function() {
        return w(i());
      }, E === null ? void 0 : function() {
        return w(E());
      }];
    }, [i, t, r, f]);
    var v = s(h, _[0], _[1]);
    return O(function() {
      d.hasValue = !0, d.value = v;
    }, [v]), y(v), v;
  }, B;
}
var W = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function oe() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = T, o = J();
    function a(i, t) {
      return i === t && (i !== 0 || 1 / i === 1 / t) || i !== i && t !== t;
    }
    var S = typeof Object.is == "function" ? Object.is : a, s = o.useSyncExternalStore, c = e.useRef, O = e.useEffect, m = e.useMemo, y = e.useDebugValue;
    function h(i, t, r, f, _) {
      var d = c(null), v;
      d.current === null ? (v = {
        hasValue: !1,
        value: null
      }, d.current = v) : v = d.current;
      var w = m(function() {
        var E = !1, u, p, L = function(R) {
          if (!E) {
            E = !0, u = R;
            var b = f(R);
            if (_ !== void 0 && v.hasValue) {
              var x = v.value;
              if (_(x, b))
                return p = x, x;
            }
            return p = b, b;
          }
          var Q = u, C = p;
          if (S(Q, R))
            return C;
          var j = f(R);
          return _ !== void 0 && _(C, j) ? C : (u = R, p = j, j);
        }, g = r === void 0 ? null : r, A = function() {
          return L(t());
        }, I = g === null ? void 0 : function() {
          return L(g());
        };
        return [A, I];
      }, [t, r, f, _]), D = w[0], l = w[1], n = s(i, D, l);
      return O(function() {
        v.hasValue = !0, v.value = n;
      }, [n]), y(n), n;
    }
    W.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), W;
}
process.env.NODE_ENV === "production" ? N.exports = re() : N.exports = oe();
var ue = N.exports;
const ie = /* @__PURE__ */ ee(ue);
var Y = { VITE_API_URL: "https://recordkeeperapi2.azurewebsites.net/api/", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: ae } = T, { useSyncExternalStoreWithSelector: se } = ie;
let F = !1;
const ce = (e) => e;
function fe(e, o = ce, a) {
  (Y ? "production" : void 0) !== "production" && a && !F && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), F = !0);
  const S = se(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    o,
    a
  );
  return ae(S), S;
}
const k = (e) => {
  (Y ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const o = typeof e == "function" ? Z(e) : e, a = (S, s) => fe(o, S, s);
  return Object.assign(a, o), a;
}, le = (e) => e ? k(e) : k, G = "userstore";
async function de(e, o, a) {
  const S = _e(e).postData, s = await S("login", { username: o, password: a });
  if (!s)
    throw new Error("Failed to login");
  return s;
}
const Se = (e) => le(
  (o) => {
    const a = sessionStorage.getItem(G);
    return {
      ...a ? JSON.parse(a) : { username: "", role: "", isLoggedIn: !1 },
      logout: () => {
        const s = { username: "", role: "", isLoggedIn: !1 };
        sessionStorage.setItem(G, JSON.stringify(s)), o(s);
      },
      login: async (s, c) => {
        const m = { ...await de(e, s, c), isLoggedIn: !0 };
        sessionStorage.setItem(G, JSON.stringify(m)), o(m);
      }
    };
  }
);
function _e(e) {
  async function o(c) {
    return c = e + c, await (await fetch(c, {
      headers: {
        Authorization: `Bearer ${s()}`
      }
    })).json();
  }
  async function a(c) {
    return c = e + c, await (await fetch(c, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${s()}`
      }
    })).json();
  }
  async function S(c, O) {
    return c = e + c, await (await fetch(c, {
      method: "POST",
      body: JSON.stringify(O),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${s()}`
      }
    })).json();
  }
  function s() {
    return Se(e)((O) => O.sessionkey);
  }
  return { fetchData: o, deleteData: a, postData: S };
}
export {
  _e as createAPI,
  de as loginUser,
  Se as useUserStore
};
