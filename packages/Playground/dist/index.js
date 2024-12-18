(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute{position:absolute}.relative{position:relative}.-z-50{z-index:-50}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.flex{display:flex}.contents{display:contents}.hidden{display:none}.flex-1{flex:1 1 0%}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.rounded-md{border-radius:.375rem}.p-2{padding:.5rem}.p-6{padding:1.5rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cn = { exports: {} }, er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function fa() {
  if (Un) return er;
  Un = 1;
  var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, w, $) {
    var E, D = {}, B = null, re = null;
    $ !== void 0 && (B = "" + $), w.key !== void 0 && (B = "" + w.key), w.ref !== void 0 && (re = w.ref);
    for (E in w) o.call(w, E) && !l.hasOwnProperty(E) && (D[E] = w[E]);
    if (v && v.defaultProps) for (E in w = v.defaultProps, w) D[E] === void 0 && (D[E] = w[E]);
    return { $$typeof: r, type: v, key: B, ref: re, props: D, _owner: a.current };
  }
  return er.Fragment = n, er.jsx = d, er.jsxs = d, er;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function pa() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = "@@iterator";
    function ye(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = X && t[X] || t[ce];
      return typeof i == "function" ? i : null;
    }
    var Q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          s[p - 1] = arguments[p];
        H("error", t, s);
      }
    }
    function H(t, i, s) {
      {
        var p = Q.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (i += "%s", s = s.concat([k]));
        var b = s.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var Ae = !1, Se = !1, $e = !1, ve = !1, ue = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || ue || t === a || t === $ || t === E || ve || t === re || Ae || Se || $e || typeof t == "object" && t !== null && (t.$$typeof === B || t.$$typeof === D || t.$$typeof === d || t.$$typeof === v || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === F || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var p = t.displayName;
      if (p)
        return p;
      var k = i.displayName || i.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function Ue(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case $:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var i = t;
            return Ue(i) + ".Consumer";
          case d:
            var s = t;
            return Ue(s._context) + ".Provider";
          case w:
            return ze(t, t.render, "ForwardRef");
          case D:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case B: {
            var k = t, b = k._payload, u = k._init;
            try {
              return M(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, V = 0, fe, De, Ne, Fe, Xe, te, me;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function he() {
      {
        if (V === 0) {
          fe = console.log, De = console.info, Ne = console.warn, Fe = console.error, Xe = console.group, te = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: fe
            }),
            info: J({}, t, {
              value: De
            }),
            warn: J({}, t, {
              value: Ne
            }),
            error: J({}, t, {
              value: Fe
            }),
            group: J({}, t, {
              value: Xe
            }),
            groupCollapsed: J({}, t, {
              value: te
            }),
            groupEnd: J({}, t, {
              value: me
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = Q.ReactCurrentDispatcher, Ie;
    function ie(t, i, s) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            Ie = p && p[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Be = !1, Pe;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new kt();
    }
    function nt(t, i) {
      if (!t || Be)
        return "";
      {
        var s = Pe.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      Be = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = We.current, We.current = null, he();
      try {
        if (i) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (h) {
              p = h;
            }
            Reflect.construct(t, [], u);
          } else {
            try {
              u.call();
            } catch (h) {
              p = h;
            }
            t.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            p = h;
          }
          t();
        }
      } catch (h) {
        if (h && p && typeof h.stack == "string") {
          for (var c = h.stack.split(`
`), g = p.stack.split(`
`), x = c.length - 1, j = g.length - 1; x >= 1 && j >= 0 && c[x] !== g[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== g[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== g[j]) {
                    var R = `
` + c[x].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && Pe.set(t, R), R;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, We.current = b, He(), Error.prepareStackTrace = k;
      }
      var I = t ? t.displayName || t.name : "", f = I ? ie(I) : "";
      return typeof t == "function" && Pe.set(t, f), f;
    }
    function xt(t, i, s) {
      return nt(t, !1);
    }
    function _t(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Te(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nt(t, _t(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case $:
          return ie("Suspense");
        case E:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return xt(t.render);
          case D:
            return Te(t.type, i, s);
          case B: {
            var p = t, k = p._payload, b = p._init;
            try {
              return Te(b(k), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ve = {}, Ze = Q.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(s);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ot(t, i, s, p, k) {
      {
        var b = Function.call.bind(we);
        for (var u in t)
          if (b(t, u)) {
            var c = void 0;
            try {
              if (typeof t[u] != "function") {
                var g = Error((p || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              c = t[u](i, u, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (Ee(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, u, typeof c), Ee(null)), c instanceof Error && !(c.message in Ve) && (Ve[c.message] = !0, Ee(k), T("Failed %s type: %s", s, c.message), Ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function Re(t) {
      return ht(t);
    }
    function ut(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function jt(t) {
      try {
        return it(t), !1;
      } catch {
        return !0;
      }
    }
    function it(t) {
      return "" + t;
    }
    function at(t) {
      if (jt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(t)), it(t);
    }
    var xe = Q.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, qe;
    qe = {};
    function Et(t) {
      if (we.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (we.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && xe.current && i && xe.current.stateNode !== i) {
        var s = M(xe.current.type);
        qe[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(xe.current.type), t.ref), qe[s] = !0);
      }
    }
    function Ot(t, i) {
      {
        var s = function() {
          st || (st = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(t, i) {
      {
        var s = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var et = function(t, i, s, p, k, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ft(t, i, s, p, k) {
      {
        var b, u = {}, c = null, g = null;
        s !== void 0 && (at(s), c = "" + s), $t(i) && (at(i.key), c = "" + i.key), Et(i) && (g = i.ref, Rt(i, k));
        for (b in i)
          we.call(i, b) && !St.hasOwnProperty(b) && (u[b] = i[b]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (b in x)
            u[b] === void 0 && (u[b] = x[b]);
        }
        if (c || g) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Ot(u, j), g && Ct(u, j);
        }
        return et(t, c, g, k, p, xe.current, u);
      }
    }
    var Le = Q.ReactCurrentOwner, Qe = Q.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Le.current) {
          var t = M(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function y(t) {
      return "";
    }
    var _ = {};
    function C(t) {
      {
        var i = m();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function A(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = C(i);
        if (_[s])
          return;
        _[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + M(t._owner.type) + "."), ge(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ge(null);
      }
    }
    function N(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Re(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ge(p) && A(p, i);
          }
        else if (Ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = ye(t);
          if (typeof k == "function" && k !== t.entries)
            for (var b = k.call(t), u; !(u = b.next()).done; )
              Ge(u.value) && A(u.value, i);
        }
      }
    }
    function z(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var p = M(i);
          ot(s, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var k = M(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function U(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var p = i[s];
          if (p !== "children" && p !== "key") {
            ge(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var O = {};
    function W(t, i, s, p, k, b) {
      {
        var u = ae(t);
        if (!u) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = y();
          g ? c += g : c += m();
          var x;
          t === null ? x = "null" : Re(t) ? x = "array" : t !== void 0 && t.$$typeof === r ? (x = "<" + (M(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ft(t, i, s, k, b);
        if (j == null)
          return j;
        if (u) {
          var R = i.children;
          if (R !== void 0)
            if (p)
              if (Re(R)) {
                for (var I = 0; I < R.length; I++)
                  N(R[I], t);
                Object.freeze && Object.freeze(R);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              N(R, t);
        }
        if (we.call(i, "key")) {
          var f = M(t), h = Object.keys(i).filter(function(Y) {
            return Y !== "key";
          }), P = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!O[f + P]) {
            var L = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, P, f, L, f), O[f + P] = !0;
          }
        }
        return t === o ? U(j) : z(j), j;
      }
    }
    function G(t, i, s) {
      return W(t, i, s, !0);
    }
    function K(t, i, s) {
      return W(t, i, s, !1);
    }
    var pe = K, Z = G;
    tr.Fragment = o, tr.jsx = pe, tr.jsxs = Z;
  }()), tr;
}
process.env.NODE_ENV === "production" ? cn.exports = fa() : cn.exports = pa();
var tt = cn.exports;
function da(e) {
  return "col";
}
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode("*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute{position:absolute}.relative{position:relative}.right-2{right:.5rem}.top-2{top:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-slate-800{--tw-text-opacity: 1;color:rgb(30 41 59 / var(--tw-text-opacity))}")), document.head.appendChild(e);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
var un = { exports: {} }, rr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function ma() {
  if (Bn)
    return rr;
  Bn = 1;
  var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, w, $) {
    var E, D = {}, B = null, re = null;
    $ !== void 0 && (B = "" + $), w.key !== void 0 && (B = "" + w.key), w.ref !== void 0 && (re = w.ref);
    for (E in w)
      o.call(w, E) && !l.hasOwnProperty(E) && (D[E] = w[E]);
    if (v && v.defaultProps)
      for (E in w = v.defaultProps, w)
        D[E] === void 0 && (D[E] = w[E]);
    return { $$typeof: r, type: v, key: B, ref: re, props: D, _owner: a.current };
  }
  return rr.Fragment = n, rr.jsx = d, rr.jsxs = d, rr;
}
var br = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function ha() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = "@@iterator";
    function ye(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = X && t[X] || t[ce];
      return typeof i == "function" ? i : null;
    }
    var Q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          s[p - 1] = arguments[p];
        H("error", t, s);
      }
    }
    function H(t, i, s) {
      {
        var p = Q.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (i += "%s", s = s.concat([k]));
        var b = s.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var Ae = !1, Se = !1, $e = !1, ve = !1, ue = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || ue || t === a || t === $ || t === E || ve || t === re || Ae || Se || $e || typeof t == "object" && t !== null && (t.$$typeof === B || t.$$typeof === D || t.$$typeof === d || t.$$typeof === v || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === F || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var p = t.displayName;
      if (p)
        return p;
      var k = i.displayName || i.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function Ue(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case $:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var i = t;
            return Ue(i) + ".Consumer";
          case d:
            var s = t;
            return Ue(s._context) + ".Provider";
          case w:
            return ze(t, t.render, "ForwardRef");
          case D:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case B: {
            var k = t, b = k._payload, u = k._init;
            try {
              return M(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, V = 0, fe, De, Ne, Fe, Xe, te, me;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function he() {
      {
        if (V === 0) {
          fe = console.log, De = console.info, Ne = console.warn, Fe = console.error, Xe = console.group, te = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: fe
            }),
            info: J({}, t, {
              value: De
            }),
            warn: J({}, t, {
              value: Ne
            }),
            error: J({}, t, {
              value: Fe
            }),
            group: J({}, t, {
              value: Xe
            }),
            groupCollapsed: J({}, t, {
              value: te
            }),
            groupEnd: J({}, t, {
              value: me
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = Q.ReactCurrentDispatcher, Ie;
    function ie(t, i, s) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            Ie = p && p[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Be = !1, Pe;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new kt();
    }
    function nt(t, i) {
      if (!t || Be)
        return "";
      {
        var s = Pe.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      Be = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = We.current, We.current = null, he();
      try {
        if (i) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (h) {
              p = h;
            }
            Reflect.construct(t, [], u);
          } else {
            try {
              u.call();
            } catch (h) {
              p = h;
            }
            t.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            p = h;
          }
          t();
        }
      } catch (h) {
        if (h && p && typeof h.stack == "string") {
          for (var c = h.stack.split(`
`), g = p.stack.split(`
`), x = c.length - 1, j = g.length - 1; x >= 1 && j >= 0 && c[x] !== g[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== g[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== g[j]) {
                    var R = `
` + c[x].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && Pe.set(t, R), R;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, We.current = b, He(), Error.prepareStackTrace = k;
      }
      var I = t ? t.displayName || t.name : "", f = I ? ie(I) : "";
      return typeof t == "function" && Pe.set(t, f), f;
    }
    function xt(t, i, s) {
      return nt(t, !1);
    }
    function _t(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Te(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nt(t, _t(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case $:
          return ie("Suspense");
        case E:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return xt(t.render);
          case D:
            return Te(t.type, i, s);
          case B: {
            var p = t, k = p._payload, b = p._init;
            try {
              return Te(b(k), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ve = {}, Ze = Q.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(s);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ot(t, i, s, p, k) {
      {
        var b = Function.call.bind(we);
        for (var u in t)
          if (b(t, u)) {
            var c = void 0;
            try {
              if (typeof t[u] != "function") {
                var g = Error((p || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              c = t[u](i, u, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (Ee(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, u, typeof c), Ee(null)), c instanceof Error && !(c.message in Ve) && (Ve[c.message] = !0, Ee(k), T("Failed %s type: %s", s, c.message), Ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function Re(t) {
      return ht(t);
    }
    function ut(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function jt(t) {
      try {
        return it(t), !1;
      } catch {
        return !0;
      }
    }
    function it(t) {
      return "" + t;
    }
    function at(t) {
      if (jt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(t)), it(t);
    }
    var xe = Q.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, qe;
    qe = {};
    function Et(t) {
      if (we.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (we.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && xe.current && i && xe.current.stateNode !== i) {
        var s = M(xe.current.type);
        qe[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(xe.current.type), t.ref), qe[s] = !0);
      }
    }
    function Ot(t, i) {
      {
        var s = function() {
          st || (st = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(t, i) {
      {
        var s = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var et = function(t, i, s, p, k, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ft(t, i, s, p, k) {
      {
        var b, u = {}, c = null, g = null;
        s !== void 0 && (at(s), c = "" + s), $t(i) && (at(i.key), c = "" + i.key), Et(i) && (g = i.ref, Rt(i, k));
        for (b in i)
          we.call(i, b) && !St.hasOwnProperty(b) && (u[b] = i[b]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (b in x)
            u[b] === void 0 && (u[b] = x[b]);
        }
        if (c || g) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Ot(u, j), g && Ct(u, j);
        }
        return et(t, c, g, k, p, xe.current, u);
      }
    }
    var Le = Q.ReactCurrentOwner, Qe = Q.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Le.current) {
          var t = M(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function y(t) {
      return "";
    }
    var _ = {};
    function C(t) {
      {
        var i = m();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function A(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = C(i);
        if (_[s])
          return;
        _[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + M(t._owner.type) + "."), ge(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ge(null);
      }
    }
    function N(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Re(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ge(p) && A(p, i);
          }
        else if (Ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = ye(t);
          if (typeof k == "function" && k !== t.entries)
            for (var b = k.call(t), u; !(u = b.next()).done; )
              Ge(u.value) && A(u.value, i);
        }
      }
    }
    function z(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var p = M(i);
          ot(s, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var k = M(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function U(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var p = i[s];
          if (p !== "children" && p !== "key") {
            ge(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var O = {};
    function W(t, i, s, p, k, b) {
      {
        var u = ae(t);
        if (!u) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = y();
          g ? c += g : c += m();
          var x;
          t === null ? x = "null" : Re(t) ? x = "array" : t !== void 0 && t.$$typeof === r ? (x = "<" + (M(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ft(t, i, s, k, b);
        if (j == null)
          return j;
        if (u) {
          var R = i.children;
          if (R !== void 0)
            if (p)
              if (Re(R)) {
                for (var I = 0; I < R.length; I++)
                  N(R[I], t);
                Object.freeze && Object.freeze(R);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              N(R, t);
        }
        if (we.call(i, "key")) {
          var f = M(t), h = Object.keys(i).filter(function(Y) {
            return Y !== "key";
          }), P = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!O[f + P]) {
            var L = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, P, f, L, f), O[f + P] = !0;
          }
        }
        return t === o ? U(j) : z(j), j;
      }
    }
    function G(t, i, s) {
      return W(t, i, s, !0);
    }
    function K(t, i, s) {
      return W(t, i, s, !1);
    }
    var pe = K, Z = G;
    br.Fragment = o, br.jsx = pe, br.jsxs = Z;
  }()), br;
}
process.env.NODE_ENV === "production" ? un.exports = ma() : un.exports = ha();
var nr = un.exports;
function ga(e, r, n) {
  return r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n, e;
}
function qn(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Yn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? qn(Object(n), !0).forEach(function(o) {
      ga(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function ba(e, r) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), a, l;
  for (l = 0; l < o.length; l++)
    a = o[l], !(r.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ya(e, r) {
  if (e == null)
    return {};
  var n = ba(e, r), o, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      o = l[a], !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function va(e, r) {
  return wa(e) || ka(e, r) || xa(e, r) || _a();
}
function wa(e) {
  if (Array.isArray(e))
    return e;
}
function ka(e, r) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], o = !0, a = !1, l = void 0;
    try {
      for (var d = e[Symbol.iterator](), v; !(o = (v = d.next()).done) && (n.push(v.value), !(r && n.length === r)); o = !0)
        ;
    } catch (w) {
      a = !0, l = w;
    } finally {
      try {
        !o && d.return != null && d.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return n;
  }
}
function xa(e, r) {
  if (e) {
    if (typeof e == "string")
      return Gn(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Gn(e, r);
  }
}
function Gn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var n = 0, o = new Array(r); n < r; n++)
    o[n] = e[n];
  return o;
}
function _a() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ja(e, r, n) {
  return r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n, e;
}
function Jn(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Qn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Jn(Object(n), !0).forEach(function(o) {
      ja(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Sa() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return function(o) {
    return r.reduceRight(function(a, l) {
      return l(a);
    }, o);
  };
}
function lr(e) {
  return function r() {
    for (var n = this, o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return a.length >= e.length ? e.apply(this, a) : function() {
      for (var d = arguments.length, v = new Array(d), w = 0; w < d; w++)
        v[w] = arguments[w];
      return r.apply(n, [].concat(a, v));
    };
  };
}
function Cr(e) {
  return {}.toString.call(e).includes("Object");
}
function Ea(e) {
  return !Object.keys(e).length;
}
function ur(e) {
  return typeof e == "function";
}
function $a(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
function Ra(e, r) {
  return Cr(r) || Ut("changeType"), Object.keys(r).some(function(n) {
    return !$a(e, n);
  }) && Ut("changeField"), r;
}
function Oa(e) {
  ur(e) || Ut("selectorType");
}
function Ca(e) {
  ur(e) || Cr(e) || Ut("handlerType"), Cr(e) && Object.values(e).some(function(r) {
    return !ur(r);
  }) && Ut("handlersType");
}
function Ta(e) {
  e || Ut("initialIsRequired"), Cr(e) || Ut("initialType"), Ea(e) && Ut("initialContent");
}
function Pa(e, r) {
  throw new Error(e[r] || e.default);
}
var Da = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Ut = lr(Pa)(Da), yr = {
  changes: Ra,
  selector: Oa,
  handler: Ca,
  initial: Ta
};
function Aa(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  yr.initial(e), yr.handler(r);
  var n = {
    current: e
  }, o = lr(Fa)(n, r), a = lr(Na)(n), l = lr(yr.changes)(e), d = lr(za)(n);
  function v() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(E) {
      return E;
    };
    return yr.selector($), $(n.current);
  }
  function w($) {
    Sa(o, a, l, d)($);
  }
  return [v, w];
}
function za(e, r) {
  return ur(r) ? r(e.current) : r;
}
function Na(e, r) {
  return e.current = Qn(Qn({}, e.current), r), r;
}
function Fa(e, r, n) {
  return ur(r) ? r(e.current) : Object.keys(n).forEach(function(o) {
    var a;
    return (a = r[o]) === null || a === void 0 ? void 0 : a.call(r, e.current[o]);
  }), n;
}
var Ia = {
  create: Aa
}, La = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
function Ma(e) {
  return function r() {
    for (var n = this, o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return a.length >= e.length ? e.apply(this, a) : function() {
      for (var d = arguments.length, v = new Array(d), w = 0; w < d; w++)
        v[w] = arguments[w];
      return r.apply(n, [].concat(a, v));
    };
  };
}
function Ua(e) {
  return {}.toString.call(e).includes("Object");
}
function Wa(e) {
  return e || Kn("configIsRequired"), Ua(e) || Kn("configType"), e.urls ? (Ba(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function Ba() {
  console.warn(Mo.deprecation);
}
function Va(e, r) {
  throw new Error(e[r] || e.default);
}
var Mo = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, Kn = Ma(Va)(Mo), qa = {
  config: Wa
}, Ya = function() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return function(o) {
    return r.reduceRight(function(a, l) {
      return l(a);
    }, o);
  };
};
function Uo(e, r) {
  return Object.keys(r).forEach(function(n) {
    r[n] instanceof Object && e[n] && Object.assign(r[n], Uo(e[n], r[n]));
  }), Yn(Yn({}, e), r);
}
var Ga = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Vr(e) {
  var r = !1, n = new Promise(function(o, a) {
    e.then(function(l) {
      return r ? a(Ga) : o(l);
    }), e.catch(a);
  });
  return n.cancel = function() {
    return r = !0;
  }, n;
}
var Ja = Ia.create({
  config: La,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Wo = va(Ja, 2), hr = Wo[0], Ir = Wo[1];
function Qa(e) {
  var r = qa.config(e), n = r.monaco, o = ya(r, ["monaco"]);
  Ir(function(a) {
    return {
      config: Uo(a.config, o),
      monaco: n
    };
  });
}
function Ka() {
  var e = hr(function(r) {
    var n = r.monaco, o = r.isInitialized, a = r.resolve;
    return {
      monaco: n,
      isInitialized: o,
      resolve: a
    };
  });
  if (!e.isInitialized) {
    if (Ir({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Vr(qr);
    if (window.monaco && window.monaco.editor)
      return Bo(window.monaco), e.resolve(window.monaco), Vr(qr);
    Ya(Xa, Za)(es);
  }
  return Vr(qr);
}
function Xa(e) {
  return document.body.appendChild(e);
}
function Ha(e) {
  var r = document.createElement("script");
  return e && (r.src = e), r;
}
function Za(e) {
  var r = hr(function(o) {
    var a = o.config, l = o.reject;
    return {
      config: a,
      reject: l
    };
  }), n = Ha("".concat(r.config.paths.vs, "/loader.js"));
  return n.onload = function() {
    return e();
  }, n.onerror = r.reject, n;
}
function es() {
  var e = hr(function(n) {
    var o = n.config, a = n.resolve, l = n.reject;
    return {
      config: o,
      resolve: a,
      reject: l
    };
  }), r = window.require;
  r.config(e.config), r(["vs/editor/editor.main"], function(n) {
    Bo(n), e.resolve(n);
  }, function(n) {
    e.reject(n);
  });
}
function Bo(e) {
  hr().monaco || Ir({
    monaco: e
  });
}
function ts() {
  return hr(function(e) {
    var r = e.monaco;
    return r;
  });
}
var qr = new Promise(function(e, r) {
  return Ir({
    resolve: e,
    reject: r
  });
}), Sn = {
  config: Qa,
  init: Ka,
  __getMonacoInstance: ts
};
const rs = window.React.memo, ns = window.React, Xn = window.React.useState, Gt = window.React.useRef, Hn = window.React.useCallback, Zn = window.React.useEffect, os = window.React.memo, Yr = window.React;
var is = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Gr = is;
const as = window.React;
var ss = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, ls = ss;
function cs({ children: e }) {
  return as.createElement("div", { style: ls.container }, e);
}
var us = cs, fs = us;
function ps({ width: e, height: r, isEditorReady: n, loading: o, _ref: a, className: l, wrapperProps: d }) {
  return Yr.createElement("section", { style: { ...Gr.wrapper, width: e, height: r }, ...d }, !n && Yr.createElement(fs, null, o), Yr.createElement("div", { ref: a, style: { ...Gr.fullWidth, ...!n && Gr.hide }, className: l }));
}
var ds = ps, Vo = os(ds);
const ms = window.React.useEffect;
function hs(e) {
  ms(e, []);
}
var qo = hs;
const gs = window.React.useEffect, bs = window.React.useRef;
function ys(e, r, n = !0) {
  let o = bs(!0);
  gs(o.current || !n ? () => {
    o.current = !1;
  } : e, r);
}
var dt = ys;
function cr() {
}
function Jt(e, r, n, o) {
  return vs(e, o) || ws(e, r, n, o);
}
function vs(e, r) {
  return e.editor.getModel(Yo(e, r));
}
function ws(e, r, n, o) {
  return e.editor.createModel(r, n, o ? Yo(e, o) : void 0);
}
function Yo(e, r) {
  return e.Uri.parse(r);
}
function ks({ original: e, modified: r, language: n, originalLanguage: o, modifiedLanguage: a, originalModelPath: l, modifiedModelPath: d, keepCurrentOriginalModel: v = !1, keepCurrentModifiedModel: w = !1, theme: $ = "light", loading: E = "Loading...", options: D = {}, height: B = "100%", width: re = "100%", className: X, wrapperProps: ce = {}, beforeMount: ye = cr, onMount: Q = cr }) {
  let [T, H] = Xn(!1), [Ae, Se] = Xn(!0), $e = Gt(null), ve = Gt(null), ue = Gt(null), F = Gt(Q), ae = Gt(ye), ze = Gt(!1);
  qo(() => {
    let V = Sn.init();
    return V.then((fe) => (ve.current = fe) && Se(!1)).catch((fe) => (fe == null ? void 0 : fe.type) !== "cancelation" && console.error("Monaco initialization: error:", fe)), () => $e.current ? J() : V.cancel();
  }), dt(() => {
    if ($e.current && ve.current) {
      let V = $e.current.getOriginalEditor(), fe = Jt(ve.current, e || "", o || n || "text", l || "");
      fe !== V.getModel() && V.setModel(fe);
    }
  }, [l], T), dt(() => {
    if ($e.current && ve.current) {
      let V = $e.current.getModifiedEditor(), fe = Jt(ve.current, r || "", a || n || "text", d || "");
      fe !== V.getModel() && V.setModel(fe);
    }
  }, [d], T), dt(() => {
    let V = $e.current.getModifiedEditor();
    V.getOption(ve.current.editor.EditorOption.readOnly) ? V.setValue(r || "") : r !== V.getValue() && (V.executeEdits("", [{ range: V.getModel().getFullModelRange(), text: r || "", forceMoveMarkers: !0 }]), V.pushUndoStop());
  }, [r], T), dt(() => {
    var V, fe;
    (fe = (V = $e.current) == null ? void 0 : V.getModel()) == null || fe.original.setValue(e || "");
  }, [e], T), dt(() => {
    let { original: V, modified: fe } = $e.current.getModel();
    ve.current.editor.setModelLanguage(V, o || n || "text"), ve.current.editor.setModelLanguage(fe, a || n || "text");
  }, [n, o, a], T), dt(() => {
    var V;
    (V = ve.current) == null || V.editor.setTheme($);
  }, [$], T), dt(() => {
    var V;
    (V = $e.current) == null || V.updateOptions(D);
  }, [D], T);
  let Ue = Hn(() => {
    var V;
    if (!ve.current)
      return;
    ae.current(ve.current);
    let fe = Jt(ve.current, e || "", o || n || "text", l || ""), De = Jt(ve.current, r || "", a || n || "text", d || "");
    (V = $e.current) == null || V.setModel({ original: fe, modified: De });
  }, [n, r, a, e, o, l, d]), M = Hn(() => {
    var V;
    !ze.current && ue.current && ($e.current = ve.current.editor.createDiffEditor(ue.current, { automaticLayout: !0, ...D }), Ue(), (V = ve.current) == null || V.editor.setTheme($), H(!0), ze.current = !0);
  }, [D, $, Ue]);
  Zn(() => {
    T && F.current($e.current, ve.current);
  }, [T]), Zn(() => {
    !Ae && !T && M();
  }, [Ae, T, M]);
  function J() {
    var V, fe, De, Ne;
    let Fe = (V = $e.current) == null ? void 0 : V.getModel();
    v || (fe = Fe == null ? void 0 : Fe.original) == null || fe.dispose(), w || (De = Fe == null ? void 0 : Fe.modified) == null || De.dispose(), (Ne = $e.current) == null || Ne.dispose();
  }
  return ns.createElement(Vo, { width: re, height: B, isEditorReady: T, loading: E, _ref: ue, className: X, wrapperProps: ce });
}
var xs = ks;
rs(xs);
window.React.useState;
const _s = window.React.memo, js = window.React, eo = window.React.useState, vr = window.React.useEffect, At = window.React.useRef, Ss = window.React.useCallback, Es = window.React.useEffect, $s = window.React.useRef;
function Rs(e) {
  let r = $s();
  return Es(() => {
    r.current = e;
  }, [e]), r.current;
}
var Os = Rs, wr = /* @__PURE__ */ new Map();
function Cs({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: o, language: a, path: l, theme: d = "light", line: v, loading: w = "Loading...", options: $ = {}, overrideServices: E = {}, saveViewState: D = !0, keepCurrentModel: B = !1, width: re = "100%", height: X = "100%", className: ce, wrapperProps: ye = {}, beforeMount: Q = cr, onMount: T = cr, onChange: H, onValidate: Ae = cr }) {
  let [Se, $e] = eo(!1), [ve, ue] = eo(!0), F = At(null), ae = At(null), ze = At(null), Ue = At(T), M = At(Q), J = At(), V = At(o), fe = Os(l), De = At(!1), Ne = At(!1);
  qo(() => {
    let te = Sn.init();
    return te.then((me) => (F.current = me) && ue(!1)).catch((me) => (me == null ? void 0 : me.type) !== "cancelation" && console.error("Monaco initialization: error:", me)), () => ae.current ? Xe() : te.cancel();
  }), dt(() => {
    var te, me, S, he;
    let He = Jt(F.current, e || o || "", r || a || "", l || n || "");
    He !== ((te = ae.current) == null ? void 0 : te.getModel()) && (D && wr.set(fe, (me = ae.current) == null ? void 0 : me.saveViewState()), (S = ae.current) == null || S.setModel(He), D && ((he = ae.current) == null || he.restoreViewState(wr.get(l))));
  }, [l], Se), dt(() => {
    var te;
    (te = ae.current) == null || te.updateOptions($);
  }, [$], Se), dt(() => {
    !ae.current || o === void 0 || (ae.current.getOption(F.current.editor.EditorOption.readOnly) ? ae.current.setValue(o) : o !== ae.current.getValue() && (Ne.current = !0, ae.current.executeEdits("", [{ range: ae.current.getModel().getFullModelRange(), text: o, forceMoveMarkers: !0 }]), ae.current.pushUndoStop(), Ne.current = !1));
  }, [o], Se), dt(() => {
    var te, me;
    let S = (te = ae.current) == null ? void 0 : te.getModel();
    S && a && ((me = F.current) == null || me.editor.setModelLanguage(S, a));
  }, [a], Se), dt(() => {
    var te;
    v !== void 0 && ((te = ae.current) == null || te.revealLine(v));
  }, [v], Se), dt(() => {
    var te;
    (te = F.current) == null || te.editor.setTheme(d);
  }, [d], Se);
  let Fe = Ss(() => {
    var te;
    if (!(!ze.current || !F.current) && !De.current) {
      M.current(F.current);
      let me = l || n, S = Jt(F.current, o || e || "", r || a || "", me || "");
      ae.current = (te = F.current) == null ? void 0 : te.editor.create(ze.current, { model: S, automaticLayout: !0, ...$ }, E), D && ae.current.restoreViewState(wr.get(me)), F.current.editor.setTheme(d), v !== void 0 && ae.current.revealLine(v), $e(!0), De.current = !0;
    }
  }, [e, r, n, o, a, l, $, E, D, d, v]);
  vr(() => {
    Se && Ue.current(ae.current, F.current);
  }, [Se]), vr(() => {
    !ve && !Se && Fe();
  }, [ve, Se, Fe]), V.current = o, vr(() => {
    var te, me;
    Se && H && ((te = J.current) == null || te.dispose(), J.current = (me = ae.current) == null ? void 0 : me.onDidChangeModelContent((S) => {
      Ne.current || H(ae.current.getValue(), S);
    }));
  }, [Se, H]), vr(() => {
    if (Se) {
      let te = F.current.editor.onDidChangeMarkers((me) => {
        var S;
        let he = (S = ae.current.getModel()) == null ? void 0 : S.uri;
        if (he && me.find((He) => He.path === he.path)) {
          let He = F.current.editor.getModelMarkers({ resource: he });
          Ae == null || Ae(He);
        }
      });
      return () => {
        te == null || te.dispose();
      };
    }
    return () => {
    };
  }, [Se, Ae]);
  function Xe() {
    var te, me;
    (te = J.current) == null || te.dispose(), B ? D && wr.set(l, ae.current.saveViewState()) : (me = ae.current.getModel()) == null || me.dispose(), ae.current.dispose();
  }
  return js.createElement(Vo, { width: re, height: X, isEditorReady: Se, loading: w, _ref: ze, className: ce, wrapperProps: ye });
}
var Ts = Cs, Ps = _s(Ts);
function Tt(e) {
  return e > 47 && e < 58;
}
function Lr(e, r, n) {
  return r = r || 65, n = n || 90, e &= -33, e >= r && e <= n;
}
function Go(e) {
  return Tt(e) || Mr(e);
}
function Mr(e) {
  return e === 95 || Lr(e);
}
function Ds(e) {
  return e === 196 || e == 214 || e === 220 || e === 228 || e === 246 || e === 252;
}
function As(e) {
  return e === 32 || e === 9 || e === 160;
}
function En(e) {
  return As(e) || e === 10 || e === 13;
}
function $n(e) {
  return e === 39 || e === 34;
}
let Jo = class Qo {
  constructor(r, n, o) {
    o == null && typeof r == "string" && (o = r.length), this.string = r, this.pos = this.start = n || 0, this.end = o || 0;
  }
  /**
   * Returns true only if the stream is at the end of the file.
   */
  eof() {
    return this.pos >= this.end;
  }
  /**
   * Creates a new stream instance which is limited to given `start` and `end`
   * range. E.g. its `eof()` method will look at `end` property, not actual
   * stream end
   */
  limit(r, n) {
    return new Qo(this.string, r, n);
  }
  /**
   * Returns the next character code in the stream without advancing it.
   * Will return NaN at the end of the file.
   */
  peek() {
    return this.string.charCodeAt(this.pos);
  }
  /**
   * Returns the next character in the stream and advances it.
   * Also returns <code>undefined</code> when no more characters are available.
   */
  next() {
    if (this.pos < this.string.length)
      return this.string.charCodeAt(this.pos++);
  }
  /**
   * `match` can be a character code or a function that takes a character code
   * and returns a boolean. If the next character in the stream 'matches'
   * the given argument, it is consumed and returned.
   * Otherwise, `false` is returned.
   */
  eat(r) {
    const n = this.peek(), o = typeof r == "function" ? r(n) : n === r;
    return o && this.next(), o;
  }
  /**
   * Repeatedly calls <code>eat</code> with the given argument, until it
   * fails. Returns <code>true</code> if any characters were eaten.
   */
  eatWhile(r) {
    const n = this.pos;
    for (; !this.eof() && this.eat(r); )
      ;
    return this.pos !== n;
  }
  /**
   * Backs up the stream n characters. Backing it up further than the
   * start of the current token will cause things to break, so be careful.
   */
  backUp(r) {
    this.pos -= r || 1;
  }
  /**
   * Get the string between the start of the current token and the
   * current stream position.
   */
  current() {
    return this.substring(this.start, this.pos);
  }
  /**
   * Returns substring for given range
   */
  substring(r, n) {
    return this.string.slice(r, n);
  }
  /**
   * Creates error object with current stream state
   */
  error(r, n = this.pos) {
    return new Rn(`${r} at ${n + 1}`, n, this.string);
  }
};
class Rn extends Error {
  constructor(r, n, o) {
    super(r), this.pos = n, this.string = o;
  }
}
function zs(e) {
  return {
    tokens: e,
    start: 0,
    pos: 0,
    size: e.length
  };
}
function Wt(e) {
  return e.tokens[e.pos];
}
function On(e) {
  return e.tokens[e.pos++];
}
function Qt(e, r = e.start, n = e.pos) {
  return e.tokens.slice(r, n);
}
function Nt(e) {
  return e.pos < e.size;
}
function rt(e, r) {
  const n = Wt(e);
  return n && r(n) ? (e.pos++, !0) : !1;
}
function Cn(e, r, n = Wt(e)) {
  n && n.start != null && (r += ` at ${n.start}`);
  const o = new Error(r);
  return o.pos = n && n.start, o;
}
function Ns(e, r = {}) {
  const n = zs(e), o = Ko(n, r);
  if (Nt(n))
    throw Cn(n, "Unexpected character");
  return o;
}
function Ko(e, r) {
  const n = {
    type: "TokenGroup",
    elements: []
  };
  let o = n, a;
  const l = [];
  for (; Nt(e) && (a = Is(e, r) || Fs(e, r)); )
    if (o.elements.push(a), rt(e, Hs))
      l.push(o), o = a;
    else {
      if (rt(e, Zs))
        continue;
      if (rt(e, oo))
        do
          l.length && (o = l.pop());
        while (rt(e, oo));
    }
  return n;
}
function Fs(e, r) {
  if (rt(e, Ks)) {
    const n = Ko(e, r), o = On(e);
    return wt(o, "group", !1) && (n.repeat = Us(e)), n;
  }
}
function Is(e, r) {
  let n;
  const o = {
    type: "TokenElement",
    name: void 0,
    attributes: void 0,
    value: void 0,
    repeat: void 0,
    selfClose: !1,
    elements: []
  };
  for (Ws(e, r) && (o.name = Qt(e)); Nt(e); )
    if (e.start = e.pos, !o.repeat && !Jr(o) && rt(e, Pr))
      o.repeat = e.tokens[e.pos - 1];
    else if (!o.value && Xo(e))
      o.value = Ho(e);
    else if (n = to(e, "id", r) || to(e, "class", r) || Ls(e))
      o.attributes ? o.attributes = o.attributes.concat(n) : o.attributes = Array.isArray(n) ? n.slice() : [n];
    else {
      !Jr(o) && rt(e, el) && (o.selfClose = !0, !o.repeat && rt(e, Pr) && (o.repeat = e.tokens[e.pos - 1]));
      break;
    }
  return Jr(o) ? void 0 : o;
}
function Ls(e) {
  if (rt(e, Gs)) {
    const r = [];
    let n;
    for (; Nt(e); )
      if (n = Ms(e))
        r.push(n);
      else {
        if (rt(e, Js))
          break;
        if (!rt(e, Zo))
          throw Cn(e, `Unexpected "${Wt(e).type}" token`);
      }
    return r;
  }
}
function to(e, r, n) {
  if (Ft(Wt(e), r)) {
    e.pos++;
    let o = 1;
    for (; Ft(Wt(e), r); )
      e.pos++, o++;
    const a = {
      name: [Xs(r)]
    };
    return o > 1 && (a.multiple = !0), n.jsx && Xo(e) ? (a.value = Ho(e), a.expression = !0) : a.value = fn(e) ? Qt(e) : void 0, a;
  }
}
function Ms(e) {
  if (ro(e))
    return {
      value: Qt(e)
    };
  if (fn(e, !0)) {
    const r = Qt(e);
    let n;
    return rt(e, Bs) && (ro(e) || fn(e, !0)) && (n = Qt(e)), { name: r, value: n };
  }
}
function Us(e) {
  return Pr(Wt(e)) ? e.tokens[e.pos++] : void 0;
}
function ro(e) {
  const r = e.pos, n = Wt(e);
  if (Tr(n)) {
    for (e.pos++; Nt(e); )
      if (Tr(On(e), n.single))
        return e.start = r, !0;
    throw Cn(e, "Unclosed quote", n);
  }
  return !1;
}
function fn(e, r) {
  const n = e.pos, o = {
    attribute: 0,
    expression: 0,
    group: 0
  };
  for (; Nt(e); ) {
    const a = Wt(e);
    if (o.expression)
      wt(a, "expression") && (o[a.context] += a.open ? 1 : -1);
    else {
      if (Tr(a) || Ft(a) || Zo(a) || Pr(a))
        break;
      if (wt(a)) {
        if (!r)
          break;
        if (a.open)
          o[a.context]++;
        else if (o[a.context])
          o[a.context]--;
        else
          break;
      }
    }
    e.pos++;
  }
  return n !== e.pos ? (e.start = n, !0) : !1;
}
function Ws(e, r) {
  const n = e.pos;
  if (r.jsx && rt(e, no))
    for (; Nt(e); ) {
      const { pos: o } = e;
      if (!rt(e, Ys) || !rt(e, no)) {
        e.pos = o;
        break;
      }
    }
  for (; Nt(e) && rt(e, qs); )
    ;
  return e.pos !== n ? (e.start = n, !0) : !1;
}
function Xo(e) {
  const r = e.pos;
  if (rt(e, Qs)) {
    let n = 0;
    for (; Nt(e); ) {
      const o = On(e);
      if (wt(o, "expression"))
        if (o.open)
          n++;
        else if (n)
          n--;
        else
          break;
    }
    return e.start = r, !0;
  }
  return !1;
}
function Ho(e) {
  let r = e.start, n = e.pos;
  return wt(e.tokens[r], "expression", !0) && r++, wt(e.tokens[n - 1], "expression", !1) && n--, Qt(e, r, n);
}
function wt(e, r, n) {
  return !!(e && e.type === "Bracket" && (!r || e.context === r) && (n == null || e.open === n));
}
function Ft(e, r) {
  return !!(e && e.type === "Operator" && (!r || e.operator === r));
}
function Tr(e, r) {
  return !!(e && e.type === "Quote" && (r == null || e.single === r));
}
function Zo(e) {
  return !!(e && e.type === "WhiteSpace");
}
function Bs(e) {
  return Ft(e, "equal");
}
function Pr(e) {
  return !!(e && e.type === "Repeater");
}
function Vs(e) {
  return e.type === "Literal";
}
function no(e) {
  if (Vs(e)) {
    const r = e.value.charCodeAt(0);
    return r >= 65 && r <= 90;
  }
  return !1;
}
function qs(e) {
  return e.type === "Literal" || e.type === "RepeaterNumber" || e.type === "RepeaterPlaceholder";
}
function Ys(e) {
  return Ft(e, "class");
}
function Gs(e) {
  return wt(e, "attribute", !0);
}
function Js(e) {
  return wt(e, "attribute", !1);
}
function Qs(e) {
  return wt(e, "expression", !0);
}
function Ks(e) {
  return wt(e, "group", !0);
}
function Xs(e) {
  return { type: "Literal", value: e };
}
function Jr(e) {
  return !e.name && !e.value && !e.attributes;
}
function Hs(e) {
  return Ft(e, "child");
}
function Zs(e) {
  return Ft(e, "sibling");
}
function oo(e) {
  return Ft(e, "climb");
}
function el(e) {
  return Ft(e, "close");
}
var le;
(function(e) {
  e[e.CurlyBracketOpen = 123] = "CurlyBracketOpen", e[e.CurlyBracketClose = 125] = "CurlyBracketClose", e[e.Escape = 92] = "Escape", e[e.Equals = 61] = "Equals", e[e.SquareBracketOpen = 91] = "SquareBracketOpen", e[e.SquareBracketClose = 93] = "SquareBracketClose", e[e.Asterisk = 42] = "Asterisk", e[e.Hash = 35] = "Hash", e[e.Dollar = 36] = "Dollar", e[e.Dash = 45] = "Dash", e[e.Dot = 46] = "Dot", e[e.Slash = 47] = "Slash", e[e.Colon = 58] = "Colon", e[e.Excl = 33] = "Excl", e[e.At = 64] = "At", e[e.Underscore = 95] = "Underscore", e[e.RoundBracketOpen = 40] = "RoundBracketOpen", e[e.RoundBracketClose = 41] = "RoundBracketClose", e[e.Sibling = 43] = "Sibling", e[e.Child = 62] = "Child", e[e.Climb = 94] = "Climb", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote";
})(le || (le = {}));
function tl(e) {
  return e.eat(le.Escape) ? (e.start = e.pos, e.eof() || e.pos++, !0) : !1;
}
function rl(e) {
  const r = new Jo(e), n = [], o = {
    group: 0,
    attribute: 0,
    expression: 0,
    quote: 0
  };
  let a = 0, l;
  for (; !r.eof(); )
    if (a = r.peek(), l = nl(r, o), l)
      n.push(l), l.type === "Quote" ? o.quote = a === o.quote ? 0 : a : l.type === "Bracket" && (o[l.context] += l.open ? 1 : -1);
    else
      throw r.error("Unexpected character");
  return n;
}
function nl(e, r) {
  return pl(e, r) || ul(e) || fl(e) || cl(e) || il(e) || ol(e, r) || ll(e) || al(e) || sl(e);
}
function ol(e, r) {
  const n = e.pos, o = r.expression;
  let a = "";
  for (; !e.eof(); ) {
    if (tl(e)) {
      a += e.current();
      continue;
    }
    const l = e.peek();
    if (l === le.Slash && !r.quote && !r.expression && !r.attribute) {
      const d = e.string.charCodeAt(e.pos - 1), v = e.string.charCodeAt(e.pos + 1);
      if (Tt(d) && Tt(v)) {
        a += e.string[e.pos++];
        continue;
      }
    }
    if (l === r.quote || l === le.Dollar || dl(l, r))
      break;
    if (o) {
      if (l === le.CurlyBracketOpen)
        r.expression++;
      else if (l === le.CurlyBracketClose)
        if (r.expression > o)
          r.expression--;
        else
          break;
    } else if (!r.quote && (!r.attribute && !bl(l) || ml(l, r) || hl(l, r) || $n(l) || ei(l)))
      break;
    a += e.string[e.pos++];
  }
  if (n !== e.pos)
    return e.start = n, {
      type: "Literal",
      value: a,
      start: n,
      end: e.pos
    };
}
function il(e) {
  const r = e.pos;
  if (e.eatWhile(En))
    return {
      type: "WhiteSpace",
      start: r,
      end: e.pos,
      value: e.substring(r, e.pos)
    };
}
function al(e) {
  const r = e.peek();
  if ($n(r))
    return {
      type: "Quote",
      single: r === le.SingleQuote,
      start: e.pos++,
      end: e.pos
    };
}
function sl(e) {
  const r = e.peek(), n = ei(r);
  if (n)
    return {
      type: "Bracket",
      open: gl(r),
      context: n,
      start: e.pos++,
      end: e.pos
    };
}
function ll(e) {
  const r = ti(e.peek());
  if (r)
    return {
      type: "Operator",
      operator: r,
      start: e.pos++,
      end: e.pos
    };
}
function cl(e) {
  const r = e.pos;
  if (e.eat(le.Asterisk)) {
    e.start = e.pos;
    let n = 1, o = !1;
    return e.eatWhile(Tt) ? n = Number(e.current()) : o = !0, {
      type: "Repeater",
      count: n,
      value: 0,
      implicit: o,
      start: r,
      end: e.pos
    };
  }
}
function ul(e) {
  const r = e.pos;
  if (e.eat(le.Dollar) && e.eat(le.Hash))
    return {
      type: "RepeaterPlaceholder",
      value: void 0,
      start: r,
      end: e.pos
    };
  e.pos = r;
}
function fl(e) {
  const r = e.pos;
  if (e.eatWhile(le.Dollar)) {
    const n = e.pos - r;
    let o = !1, a = 1, l = 0;
    if (e.eat(le.At)) {
      for (; e.eat(le.Climb); )
        l++;
      o = e.eat(le.Dash), e.start = e.pos, e.eatWhile(Tt) && (a = Number(e.current()));
    }
    return e.start = r, {
      type: "RepeaterNumber",
      size: n,
      reverse: o,
      base: a,
      parent: l,
      start: r,
      end: e.pos
    };
  }
}
function pl(e, r) {
  const n = e.pos;
  if ((r.expression || r.attribute) && e.eat(le.Dollar) && e.eat(le.CurlyBracketOpen)) {
    e.start = e.pos;
    let o, a = "";
    if (e.eatWhile(Tt) ? (o = Number(e.current()), a = e.eat(le.Colon) ? io(e) : "") : Lr(e.peek()) && (a = io(e)), e.eat(le.CurlyBracketClose))
      return {
        type: "Field",
        index: o,
        name: a,
        start: n,
        end: e.pos
      };
    throw e.error("Expecting }");
  }
  e.pos = n;
}
function io(e) {
  const r = [];
  for (e.start = e.pos; !e.eof(); )
    if (e.eat(le.CurlyBracketOpen))
      r.push(e.pos);
    else if (e.eat(le.CurlyBracketClose)) {
      if (!r.length) {
        e.pos--;
        break;
      }
      r.pop();
    } else
      e.pos++;
  if (r.length)
    throw e.pos = r.pop(), e.error("Expecting }");
  return e.current();
}
function dl(e, r) {
  const n = ti(e);
  return !n || r.quote || r.expression ? !1 : !r.attribute || n === "equal";
}
function ml(e, r) {
  return En(e) && !r.expression;
}
function hl(e, r) {
  return e === le.Asterisk && !r.attribute && !r.expression;
}
function ei(e) {
  if (e === le.RoundBracketOpen || e === le.RoundBracketClose)
    return "group";
  if (e === le.SquareBracketOpen || e === le.SquareBracketClose)
    return "attribute";
  if (e === le.CurlyBracketOpen || e === le.CurlyBracketClose)
    return "expression";
}
function ti(e) {
  return e === le.Child && "child" || e === le.Sibling && "sibling" || e === le.Climb && "climb" || e === le.Dot && "class" || e === le.Hash && "id" || e === le.Slash && "close" || e === le.Equals && "equal" || void 0;
}
function gl(e) {
  return e === le.CurlyBracketOpen || e === le.SquareBracketOpen || e === le.RoundBracketOpen;
}
function bl(e) {
  return Go(e) || Ds(e) || e === le.Dash || e === le.Colon || e === le.Excl;
}
const yl = {
  child: ">",
  class: ".",
  climb: "^",
  id: "#",
  equal: "=",
  close: "/",
  sibling: "+"
}, ao = {
  Literal(e) {
    return e.value;
  },
  Quote(e) {
    return e.single ? "'" : '"';
  },
  Bracket(e) {
    return e.context === "attribute" ? e.open ? "[" : "]" : e.context === "expression" ? e.open ? "{" : "}" : e.open ? "(" : "}";
  },
  Operator(e) {
    return yl[e.operator];
  },
  Field(e, r) {
    return e.index != null ? e.name ? `\${${e.index}:${e.name}}` : `\${${e.index}` : e.name ? r.getVariable(e.name) : "";
  },
  RepeaterPlaceholder(e, r) {
    let n;
    for (let o = r.repeaters.length - 1; o >= 0; o--)
      if (r.repeaters[o].implicit) {
        n = r.repeaters[o];
        break;
      }
    return r.inserted = !0, r.getText(n && n.value);
  },
  RepeaterNumber(e, r) {
    let n = 1;
    const o = r.repeaters.length - 1, a = r.repeaters[o];
    if (a && (n = e.reverse ? e.base + a.count - a.value - 1 : e.base + a.value, e.parent)) {
      const d = Math.max(0, o - e.parent);
      if (d !== o) {
        const v = r.repeaters[d];
        n += a.count * v.value;
      }
    }
    let l = String(n);
    for (; l.length < e.size; )
      l = "0" + l;
    return l;
  },
  WhiteSpace(e) {
    return e.value;
  }
};
function ri(e, r) {
  if (!ao[e.type])
    throw new Error(`Unknown token ${e.type}`);
  return ao[e.type](e, r);
}
const vl = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/, wl = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
function kl(e, r = {}) {
  let n = !1, o;
  r.text && (Array.isArray(r.text) ? o = r.text.filter((l) => l.trim()) : o = r.text);
  const a = {
    type: "Abbreviation",
    children: pn(e, {
      inserted: !1,
      repeaters: [],
      text: r.text,
      cleanText: o,
      repeatGuard: r.maxRepeat || Number.POSITIVE_INFINITY,
      getText(l) {
        var d;
        n = !0;
        let v;
        if (Array.isArray(r.text)) {
          if (l !== void 0 && l >= 0 && l < o.length)
            return o[l];
          v = l !== void 0 ? r.text[l] : r.text.join(`
`);
        } else
          v = (d = r.text) !== null && d !== void 0 ? d : "";
        return v;
      },
      getVariable(l) {
        return (r.variables && r.variables[l]) ?? l;
      }
    })
  };
  if (r.text != null && !n) {
    const l = Tn(Ht(a.children));
    if (l) {
      const d = Array.isArray(r.text) ? r.text.join(`
`) : r.text;
      si(l, d), l.name === "a" && r.href && _l(l, d);
    }
  }
  return a;
}
function ni(e, r) {
  let n = [];
  if (e.repeat) {
    const o = e.repeat, a = Object.assign({}, o);
    a.count = a.implicit && Array.isArray(r.text) ? r.cleanText.length : a.count || 1;
    let l;
    r.repeaters.push(a);
    for (let d = 0; d < a.count; d++) {
      if (a.value = d, e.repeat = a, l = lo(e) ? pn(e, r) : so(e, r), a.implicit && !r.inserted) {
        const v = Ht(l), w = v && Tn(v);
        w && si(w, r.getText(a.value));
      }
      if (n = n.concat(l), --r.repeatGuard <= 0)
        break;
    }
    r.repeaters.pop(), e.repeat = o, a.implicit && (r.inserted = !0);
  } else
    n = n.concat(lo(e) ? pn(e, r) : so(e, r));
  return n;
}
function so(e, r) {
  let n = [];
  const o = {
    type: "AbbreviationNode",
    name: e.name && oi(e.name, r),
    value: e.value && ii(e.value, r),
    attributes: void 0,
    children: n,
    repeat: e.repeat && Object.assign({}, e.repeat),
    selfClosing: e.selfClose
  };
  let a = [o];
  for (const l of e.elements)
    n = n.concat(ni(l, r));
  if (e.attributes) {
    o.attributes = [];
    for (const l of e.attributes)
      o.attributes.push(xl(l, r));
  }
  return !o.name && !o.attributes && o.value && !o.value.some(ai) ? a = a.concat(n) : o.children = n, a;
}
function pn(e, r) {
  let n = [];
  for (const o of e.elements)
    n = n.concat(ni(o, r));
  return e.repeat && (n = jl(n, e.repeat)), n;
}
function xl(e, r) {
  let n = !1, o = !1, a = e.expression ? "expression" : "raw", l;
  const d = e.name && oi(e.name, r);
  if (d && d[0] === "!" && (n = !0), d && d[d.length - 1] === "." && (o = !0), e.value) {
    const v = e.value.slice();
    if (Tr(v[0])) {
      const w = v.shift();
      v.length && Ht(v).type === w.type && v.pop(), a = w.single ? "singleQuote" : "doubleQuote";
    } else
      wt(v[0], "expression", !0) && (a = "expression", v.shift(), wt(Ht(v), "expression", !1) && v.pop());
    l = ii(v, r);
  }
  return {
    name: o || n ? d.slice(n ? 1 : 0, o ? -1 : void 0) : d,
    value: l,
    boolean: o,
    implied: n,
    valueType: a,
    multiple: e.multiple
  };
}
function oi(e, r) {
  let n = "";
  for (let o = 0; o < e.length; o++)
    n += ri(e[o], r);
  return n;
}
function ii(e, r) {
  const n = [];
  let o = "";
  for (let a = 0, l; a < e.length; a++)
    l = e[a], ai(l) ? (o && (n.push(o), o = ""), n.push(l)) : o += ri(l, r);
  return o && n.push(o), n;
}
function lo(e) {
  return e.type === "TokenGroup";
}
function ai(e) {
  return typeof e == "object" && e.type === "Field" && e.index != null;
}
function Ht(e) {
  return e[e.length - 1];
}
function Tn(e) {
  return e.children.length ? Tn(Ht(e.children)) : e;
}
function si(e, r) {
  e.value ? typeof Ht(e.value) == "string" ? e.value[e.value.length - 1] += r : e.value.push(r) : e.value = [r];
}
function _l(e, r) {
  var n;
  let o = "";
  vl.test(r) ? (o = r, !/\w+:/.test(o) && !o.startsWith("//") && (o = `http://${o}`)) : wl.test(r) && (o = `mailto:${r}`);
  const a = (n = e.attributes) === null || n === void 0 ? void 0 : n.find((l) => l.name === "href");
  a ? a.value || (a.value = [o]) : (e.attributes || (e.attributes = []), e.attributes.push({ name: "href", value: [o], valueType: "doubleQuote" }));
}
function jl(e, r) {
  for (const n of e)
    n.repeat || (n.repeat = Object.assign({}, r));
  return e;
}
function li(e, r) {
  try {
    const n = typeof e == "string" ? rl(e) : e;
    return kl(Ns(n, r), r);
  } catch (n) {
    throw n instanceof Rn && typeof e == "string" && (n.message += `
${e}
${"-".repeat(n.pos)}^`), n;
  }
}
var yt;
(function(e) {
  e.Sibling = "+", e.Important = "!", e.ArgumentDelimiter = ",", e.ValueDelimiter = "-", e.PropertyDelimiter = ":";
})(yt || (yt = {}));
var je;
(function(e) {
  e[e.Hash = 35] = "Hash", e[e.Dollar = 36] = "Dollar", e[e.Dash = 45] = "Dash", e[e.Dot = 46] = "Dot", e[e.Colon = 58] = "Colon", e[e.Comma = 44] = "Comma", e[e.Excl = 33] = "Excl", e[e.At = 64] = "At", e[e.Percent = 37] = "Percent", e[e.Underscore = 95] = "Underscore", e[e.RoundBracketOpen = 40] = "RoundBracketOpen", e[e.RoundBracketClose = 41] = "RoundBracketClose", e[e.CurlyBracketOpen = 123] = "CurlyBracketOpen", e[e.CurlyBracketClose = 125] = "CurlyBracketClose", e[e.Sibling = 43] = "Sibling", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Transparent = 116] = "Transparent", e[e.Slash = 47] = "Slash";
})(je || (je = {}));
function Sl(e, r) {
  let n = 0, o;
  const a = new Jo(e), l = [];
  for (; !a.eof(); ) {
    if (o = El(a, n === 0 && !r), !o)
      throw a.error("Unexpected character");
    if (o.type === "Bracket" && (!n && o.open && Wl(a, l), n += o.open ? 1 : -1, n < 0))
      throw a.error("Unexpected bracket", o.start);
    l.push(o), Ul(o) && (o = ci(a)) && l.push(o);
  }
  return l;
}
function El(e, r) {
  return $l(e) || Dl(e) || Ol(e) || Tl(e) || Cl(e) || Al(e) || ci(e) || Pl(e) || Rl(e, r);
}
function $l(e) {
  const r = e.pos;
  if (e.eat(je.Dollar) && e.eat(je.CurlyBracketOpen)) {
    e.start = e.pos;
    let n, o = "";
    if (e.eatWhile(Tt) ? (n = Number(e.current()), o = e.eat(je.Colon) ? co(e) : "") : Lr(e.peek()) && (o = co(e)), e.eat(je.CurlyBracketClose))
      return {
        type: "Field",
        index: n,
        name: o,
        start: r,
        end: e.pos
      };
    throw e.error("Expecting }");
  }
  e.pos = r;
}
function co(e) {
  const r = [];
  for (e.start = e.pos; !e.eof(); )
    if (e.eat(je.CurlyBracketOpen))
      r.push(e.pos);
    else if (e.eat(je.CurlyBracketClose)) {
      if (!r.length) {
        e.pos--;
        break;
      }
      r.pop();
    } else
      e.pos++;
  if (r.length)
    throw e.pos = r.pop(), e.error("Expecting }");
  return e.current();
}
function Rl(e, r) {
  const n = e.pos;
  if (e.eat(Nl) ? e.eatWhile(n ? dn : Kr) : e.eat(Mr) ? e.eatWhile(r ? Kr : dn) : (e.eat(je.Dot), e.eatWhile(Kr)), n !== e.pos)
    return e.start = n, Pn(e, e.start = n);
}
function Pn(e, r = e.start, n = e.pos) {
  return {
    type: "Literal",
    value: e.substring(r, n),
    start: r,
    end: n
  };
}
function Ol(e) {
  const r = e.pos;
  if (zl(e)) {
    e.start = r;
    const n = e.current();
    return e.start = e.pos, e.eat(je.Percent) || e.eatWhile(Mr), {
      type: "NumberValue",
      value: Number(n),
      rawValue: n,
      unit: e.current(),
      start: r,
      end: e.pos
    };
  }
}
function Cl(e) {
  const r = e.peek(), n = e.pos;
  let o = !1;
  if ($n(r)) {
    for (e.pos++; !e.eof(); )
      if (e.eat(r)) {
        o = !0;
        break;
      } else
        e.pos++;
    return e.start = n, {
      type: "StringValue",
      value: e.substring(n + 1, e.pos - (o ? 1 : 0)),
      quote: r === je.SingleQuote ? "single" : "double",
      start: n,
      end: e.pos
    };
  }
}
function Tl(e) {
  const r = e.pos;
  if (e.eat(je.Hash)) {
    const n = e.pos;
    let o = "", a = "";
    if (e.eatWhile(Il) ? (o = e.substring(n, e.pos), a = Qr(e)) : e.eat(je.Transparent) ? (o = "0", a = Qr(e) || "0") : a = Qr(e), o || a || e.eof()) {
      const { r: l, g: d, b: v, a: w } = Ml(o, a);
      return {
        type: "ColorValue",
        r: l,
        g: d,
        b: v,
        a: w,
        raw: e.substring(r + 1, e.pos),
        start: r,
        end: e.pos
      };
    } else
      return Pn(e, r);
  }
  e.pos = r;
}
function Qr(e) {
  const r = e.pos;
  return e.eat(je.Dot) ? (e.start = r, e.eatWhile(Tt) ? e.current() : "1") : "";
}
function Pl(e) {
  const r = e.pos;
  if (e.eatWhile(En))
    return {
      type: "WhiteSpace",
      start: r,
      end: e.pos
    };
}
function Dl(e) {
  const r = e.pos;
  if (e.eat(je.Dash) && e.eat(je.Dash))
    return e.start = r, e.eatWhile(dn), {
      type: "CustomProperty",
      value: e.current(),
      start: r,
      end: e.pos
    };
  e.pos = r;
}
function Al(e) {
  const r = e.peek();
  if (Ll(r))
    return {
      type: "Bracket",
      open: r === je.RoundBracketOpen,
      start: e.pos++,
      end: e.pos
    };
}
function ci(e) {
  const r = Fl(e.peek());
  if (r)
    return {
      type: "Operator",
      operator: r,
      start: e.pos++,
      end: e.pos
    };
}
function zl(e) {
  const r = e.pos;
  e.eat(je.Dash);
  const n = e.pos, o = e.eatWhile(Tt), a = e.pos;
  if (e.eat(je.Dot)) {
    const l = e.eatWhile(Tt);
    !o && !l && (e.pos = a);
  }
  return e.pos === n && (e.pos = r), e.pos !== r;
}
function Nl(e) {
  return e === je.At || e === je.Dollar;
}
function Fl(e) {
  return e === je.Sibling && yt.Sibling || e === je.Excl && yt.Important || e === je.Comma && yt.ArgumentDelimiter || e === je.Colon && yt.PropertyDelimiter || e === je.Dash && yt.ValueDelimiter || void 0;
}
function Il(e) {
  return Tt(e) || Lr(e, 65, 70);
}
function dn(e) {
  return Go(e) || e === je.Dash;
}
function Ll(e) {
  return e === je.RoundBracketOpen || e === je.RoundBracketClose;
}
function Kr(e) {
  return Mr(e) || e === je.Percent || e === je.Slash;
}
function Ml(e, r) {
  let n = "0", o = "0", a = "0", l = Number(r != null && r !== "" ? r : 1);
  if (e === "t")
    l = 0;
  else
    switch (e.length) {
      case 0:
        break;
      case 1:
        n = o = a = e + e;
        break;
      case 2:
        n = o = a = e;
        break;
      case 3:
        n = e[0] + e[0], o = e[1] + e[1], a = e[2] + e[2];
        break;
      default:
        e += e, n = e.slice(0, 2), o = e.slice(2, 4), a = e.slice(4, 6);
    }
  return {
    r: parseInt(n, 16),
    g: parseInt(o, 16),
    b: parseInt(a, 16),
    a: l
  };
}
function Ul(e) {
  return e.type === "ColorValue" || e.type === "NumberValue" && !e.unit;
}
function Wl(e, r) {
  let n = 0, o = 0;
  for (; r.length; ) {
    const a = Bl(r);
    if (a.type === "Literal" || a.type === "NumberValue")
      n = a.start, o || (o = a.end), r.pop();
    else
      break;
  }
  n !== o && r.push(Pn(e, n, o));
}
function Bl(e) {
  return e[e.length - 1];
}
function Vl(e) {
  return {
    tokens: e,
    start: 0,
    pos: 0,
    size: e.length
  };
}
function Ur(e) {
  return e.tokens[e.pos];
}
function Wr(e) {
  return e.pos < e.size;
}
function zt(e, r) {
  return r(Ur(e)) ? (e.pos++, !0) : !1;
}
function ui(e, r, n = Ur(e)) {
  n && n.start != null && (r += ` at ${n.start}`);
  const o = new Error(r);
  return o.pos = n && n.start, o;
}
function ql(e, r = {}) {
  const n = Vl(e), o = [];
  let a;
  for (; Wr(n); )
    if (a = Yl(n, r))
      o.push(a);
    else if (!zt(n, Kl))
      throw ui(n, "Unexpected token");
  return o;
}
function Yl(e, r) {
  let n, o = !1, a;
  const l = [], d = Ur(e), v = !!r.value;
  for (!v && Dn(d) && !ec(e) && (e.pos++, n = d.value, zt(e, mi)), v && zt(e, An); Wr(e); )
    if (zt(e, Hl))
      o = !0;
    else if (a = fi(e, v))
      l.push(a);
    else if (!zt(e, Xl))
      break;
  if (n || l.length || o)
    return { name: n, value: l, important: o };
}
function fi(e, r) {
  const n = [];
  let o, a;
  for (; Wr(e); )
    if (o = Ur(e), Zl(o))
      e.pos++, Dn(o) && (a = Gl(e)) ? n.push({
        type: "FunctionCall",
        name: o.value,
        arguments: a
      }) : n.push(o);
    else if (mi(o) || r && An(o))
      e.pos++;
    else
      break;
  return n.length ? { type: "CSSValue", value: n } : void 0;
}
function Gl(e) {
  const r = e.pos;
  if (zt(e, Jl)) {
    const n = [];
    let o;
    for (; Wr(e) && !zt(e, Ql); )
      if (o = fi(e, !0))
        n.push(o);
      else if (!zt(e, An) && !zt(e, di))
        throw ui(e, "Unexpected token");
    return e.start = r, n;
  }
}
function Dn(e) {
  return e && e.type === "Literal";
}
function pi(e, r) {
  return e && e.type === "Bracket" && (r == null || e.open === r);
}
function Jl(e) {
  return pi(e, !0);
}
function Ql(e) {
  return pi(e, !1);
}
function An(e) {
  return e && e.type === "WhiteSpace";
}
function fr(e, r) {
  return e && e.type === "Operator" && (!r || e.operator === r);
}
function Kl(e) {
  return fr(e, yt.Sibling);
}
function di(e) {
  return fr(e, yt.ArgumentDelimiter);
}
function Xl(e) {
  return di(e);
}
function Hl(e) {
  return fr(e, yt.Important);
}
function Zl(e) {
  return e.type === "StringValue" || e.type === "ColorValue" || e.type === "NumberValue" || e.type === "Literal" || e.type === "Field" || e.type === "CustomProperty";
}
function mi(e) {
  return fr(e, yt.PropertyDelimiter) || fr(e, yt.ValueDelimiter);
}
function ec(e) {
  const r = e.tokens[e.pos], n = e.tokens[e.pos + 1];
  return r && n && Dn(r) && n.type === "Bracket";
}
function hi(e, r) {
  try {
    const n = typeof e == "string" ? Sl(e, r && r.value) : e;
    return ql(n, r);
  } catch (n) {
    throw n instanceof Rn && typeof e == "string" && (n.message += `
${e}
${"-".repeat(n.pos)}^`), n;
  }
}
function tc(e, r) {
  if (!e.attributes)
    return;
  const n = [], o = {};
  for (const a of e.attributes)
    if (a.name) {
      const l = a.name;
      if (l in o) {
        const d = o[l];
        l === "class" ? d.value = rc(d.value, a.value, " ") : nc(d, a, r);
      } else
        n.push(o[l] = Object.assign({}, a));
    } else
      n.push(a);
  e.attributes = n;
}
function rc(e, r, n) {
  if (e && r) {
    e.length && n && uo(e, n);
    for (const a of r)
      uo(e, a);
    return e;
  }
  const o = e || r;
  return o && o.slice();
}
function nc(e, r, n) {
  return e.name = r.name, n.options["output.reverseAttributes"] || (e.value = r.value), e.implied || (e.implied = r.implied), e.boolean || (e.boolean = r.boolean), e.valueType !== "expression" && (e.valueType = r.valueType), e;
}
function uo(e, r) {
  const n = e.length - 1;
  typeof e[n] == "string" && typeof r == "string" ? e[n] += r : e.push(r);
}
function oc(e, r, n) {
  const o = [e], a = (l) => {
    r(l, o, n), o.push(l), l.children.forEach(a), o.pop();
  };
  e.children.forEach(a);
}
function gi(e, r) {
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children[n];
    if (r(o))
      return o;
    const a = gi(o, r);
    if (a)
      return a;
  }
}
function ic(e) {
  let r;
  for (; e.children.length; )
    r = e, e = e.children[e.children.length - 1];
  return { parent: r, node: e };
}
function bi(e) {
  return e.type === "AbbreviationNode";
}
function ac(e, r) {
  const n = [], o = r.options["output.reverseAttributes"], a = (l) => {
    const d = l.name && r.snippets[l.name];
    if (!d || n.includes(d))
      return null;
    const v = li(d, r);
    n.push(d), Dr(v, a), n.pop();
    for (const w of v.children) {
      if (l.attributes) {
        const $ = w.attributes || [], E = l.attributes || [];
        w.attributes = o ? E.concat($) : $.concat(E);
      }
      sc(l, w);
    }
    return v;
  };
  return Dr(e, a), e;
}
function Dr(e, r, n) {
  let o = [];
  for (const a of e.children) {
    const l = r(a);
    if (l) {
      o = o.concat(l.children);
      const d = ic(l);
      bi(d.node) && (d.node.children = d.node.children.concat(Dr(a, r)));
    } else
      o.push(a), a.children = Dr(a, r);
  }
  return e.children = o;
}
function sc(e, r) {
  e.selfClosing && (r.selfClosing = !0), e.value != null && (r.value = e.value), e.repeat && (r.repeat = e.repeat);
}
const mn = "{", hn = "}";
function yi(e, r = 0) {
  return {
    options: e,
    value: "",
    level: r,
    offset: 0,
    line: 0,
    column: 0
  };
}
function Ke(e, r) {
  const n = e.options["output.text"];
  ki(e, n(r, e.offset, e.line, e.column));
}
function Ce(e, r) {
  const n = fc(r);
  for (let o = 0, a = n.length - 1; o <= a; o++)
    Ke(e, n[o]), o !== a && Dt(e, !0);
}
function Dt(e, r) {
  const n = e.options["output.baseIndent"], o = e.options["output.newline"];
  Ke(e, o + n), e.line++, e.column = n.length, r && lc(e, r === !0 ? e.level : r);
}
function lc(e, r = e.level) {
  const n = e.options["output.indent"];
  Ke(e, n.repeat(Math.max(r, 0)));
}
function zn(e, r, n) {
  const o = e.options["output.field"];
  ki(e, o(r, n, e.offset, e.line, e.column));
}
function cc(e, r) {
  return xi(e, r.options["output.tagCase"]);
}
function vi(e, r) {
  return xi(e, r.options["output.attributeCase"]);
}
function Ar(e, r, n) {
  return e.valueType === "expression" ? n ? mn : hn : r.options["output.attributeQuotes"] === "single" ? "'" : '"';
}
function wi(e, r) {
  return e.boolean || r.options["output.booleanAttributes"].includes((e.name || "").toLowerCase());
}
function uc(e) {
  switch (e.options["output.selfClosingStyle"]) {
    case "xhtml":
      return " /";
    case "xml":
      return "/";
    default:
      return "";
  }
}
function Kt(e, r) {
  return typeof e == "string" ? r.options.inlineElements.includes(e.toLowerCase()) : e.name ? Kt(e.name, r) : !!(e.value && !e.attributes);
}
function fc(e) {
  return e.split(/\r\n|\r|\n/g);
}
function ki(e, r) {
  e.value += r, e.offset += r.length, e.column += r.length;
}
function xi(e, r) {
  return r ? r === "upper" ? e.toUpperCase() : e.toLowerCase() : e;
}
const pc = {
  p: "span",
  ul: "li",
  ol: "li",
  table: "tr",
  tr: "td",
  tbody: "tr",
  thead: "tr",
  tfoot: "tr",
  colgroup: "col",
  select: "option",
  optgroup: "option",
  audio: "source",
  video: "source",
  object: "param",
  map: "area"
};
function dc(e, r, n) {
  !e.name && e.attributes && _i(e, r, n);
}
function _i(e, r, n) {
  const o = hc(r), a = n.context ? n.context.name : "", l = mc(o ? o.name : a);
  e.name = pc[l] || (Kt(l, n) ? "span" : "div");
}
function mc(e) {
  return (e || "").toLowerCase();
}
function hc(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    if (bi(n))
      return n;
  }
}
var gc = {
  common: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
  words: [
    "exercitationem",
    "perferendis",
    "perspiciatis",
    "laborum",
    "eveniet",
    "sunt",
    "iure",
    "nam",
    "nobis",
    "eum",
    "cum",
    "officiis",
    "excepturi",
    "odio",
    "consectetur",
    "quasi",
    "aut",
    "quisquam",
    "vel",
    "eligendi",
    "itaque",
    "non",
    "odit",
    "tempore",
    "quaerat",
    "dignissimos",
    "facilis",
    "neque",
    "nihil",
    "expedita",
    "vitae",
    "vero",
    "ipsum",
    "nisi",
    "animi",
    "cumque",
    "pariatur",
    "velit",
    "modi",
    "natus",
    "iusto",
    "eaque",
    "sequi",
    "illo",
    "sed",
    "ex",
    "et",
    "voluptatibus",
    "tempora",
    "veritatis",
    "ratione",
    "assumenda",
    "incidunt",
    "nostrum",
    "placeat",
    "aliquid",
    "fuga",
    "provident",
    "praesentium",
    "rem",
    "necessitatibus",
    "suscipit",
    "adipisci",
    "quidem",
    "possimus",
    "voluptas",
    "debitis",
    "sint",
    "accusantium",
    "unde",
    "sapiente",
    "voluptate",
    "qui",
    "aspernatur",
    "laudantium",
    "soluta",
    "amet",
    "quo",
    "aliquam",
    "saepe",
    "culpa",
    "libero",
    "ipsa",
    "dicta",
    "reiciendis",
    "nesciunt",
    "doloribus",
    "autem",
    "impedit",
    "minima",
    "maiores",
    "repudiandae",
    "ipsam",
    "obcaecati",
    "ullam",
    "enim",
    "totam",
    "delectus",
    "ducimus",
    "quis",
    "voluptates",
    "dolores",
    "molestiae",
    "harum",
    "dolorem",
    "quia",
    "voluptatem",
    "molestias",
    "magni",
    "distinctio",
    "omnis",
    "illum",
    "dolorum",
    "voluptatum",
    "ea",
    "quas",
    "quam",
    "corporis",
    "quae",
    "blanditiis",
    "atque",
    "deserunt",
    "laboriosam",
    "earum",
    "consequuntur",
    "hic",
    "cupiditate",
    "quibusdam",
    "accusamus",
    "ut",
    "rerum",
    "error",
    "minus",
    "eius",
    "ab",
    "ad",
    "nemo",
    "fugit",
    "officia",
    "at",
    "in",
    "id",
    "quos",
    "reprehenderit",
    "numquam",
    "iste",
    "fugiat",
    "sit",
    "inventore",
    "beatae",
    "repellendus",
    "magnam",
    "recusandae",
    "quod",
    "explicabo",
    "doloremque",
    "aperiam",
    "consequatur",
    "asperiores",
    "commodi",
    "optio",
    "dolor",
    "labore",
    "temporibus",
    "repellat",
    "veniam",
    "architecto",
    "est",
    "esse",
    "mollitia",
    "nulla",
    "a",
    "similique",
    "eos",
    "alias",
    "dolore",
    "tenetur",
    "deleniti",
    "porro",
    "facere",
    "maxime",
    "corrupti"
  ]
}, bc = {
  common: ["далеко-далеко", "за", "словесными", "горами", "в стране", "гласных", "и согласных", "живут", "рыбные", "тексты"],
  words: [
    "вдали",
    "от всех",
    "они",
    "буквенных",
    "домах",
    "на берегу",
    "семантика",
    "большого",
    "языкового",
    "океана",
    "маленький",
    "ручеек",
    "даль",
    "журчит",
    "по всей",
    "обеспечивает",
    "ее",
    "всеми",
    "необходимыми",
    "правилами",
    "эта",
    "парадигматическая",
    "страна",
    "которой",
    "жаренные",
    "предложения",
    "залетают",
    "прямо",
    "рот",
    "даже",
    "всемогущая",
    "пунктуация",
    "не",
    "имеет",
    "власти",
    "над",
    "рыбными",
    "текстами",
    "ведущими",
    "безорфографичный",
    "образ",
    "жизни",
    "однажды",
    "одна",
    "маленькая",
    "строчка",
    "рыбного",
    "текста",
    "имени",
    "lorem",
    "ipsum",
    "решила",
    "выйти",
    "большой",
    "мир",
    "грамматики",
    "великий",
    "оксмокс",
    "предупреждал",
    "о",
    "злых",
    "запятых",
    "диких",
    "знаках",
    "вопроса",
    "коварных",
    "точках",
    "запятой",
    "но",
    "текст",
    "дал",
    "сбить",
    "себя",
    "толку",
    "он",
    "собрал",
    "семь",
    "своих",
    "заглавных",
    "букв",
    "подпоясал",
    "инициал",
    "за",
    "пояс",
    "пустился",
    "дорогу",
    "взобравшись",
    "первую",
    "вершину",
    "курсивных",
    "гор",
    "бросил",
    "последний",
    "взгляд",
    "назад",
    "силуэт",
    "своего",
    "родного",
    "города",
    "буквоград",
    "заголовок",
    "деревни",
    "алфавит",
    "подзаголовок",
    "своего",
    "переулка",
    "грустный",
    "реторический",
    "вопрос",
    "скатился",
    "его",
    "щеке",
    "продолжил",
    "свой",
    "путь",
    "дороге",
    "встретил",
    "рукопись",
    "она",
    "предупредила",
    "моей",
    "все",
    "переписывается",
    "несколько",
    "раз",
    "единственное",
    "что",
    "меня",
    "осталось",
    "это",
    "приставка",
    "возвращайся",
    "ты",
    "лучше",
    "свою",
    "безопасную",
    "страну",
    "послушавшись",
    "рукописи",
    "наш",
    "продолжил",
    "свой",
    "путь",
    "вскоре",
    "ему",
    "повстречался",
    "коварный",
    "составитель",
    "рекламных",
    "текстов",
    "напоивший",
    "языком",
    "речью",
    "заманивший",
    "свое",
    "агентство",
    "которое",
    "использовало",
    "снова",
    "снова",
    "своих",
    "проектах",
    "если",
    "переписали",
    "то",
    "живет",
    "там",
    "до",
    "сих",
    "пор"
  ]
}, yc = {
  common: ["mujer", "uno", "dolor", "más", "de", "poder", "mismo", "si"],
  words: [
    "ejercicio",
    "preferencia",
    "perspicacia",
    "laboral",
    "paño",
    "suntuoso",
    "molde",
    "namibia",
    "planeador",
    "mirar",
    "demás",
    "oficinista",
    "excepción",
    "odio",
    "consecuencia",
    "casi",
    "auto",
    "chicharra",
    "velo",
    "elixir",
    "ataque",
    "no",
    "odio",
    "temporal",
    "cuórum",
    "dignísimo",
    "facilismo",
    "letra",
    "nihilista",
    "expedición",
    "alma",
    "alveolar",
    "aparte",
    "león",
    "animal",
    "como",
    "paria",
    "belleza",
    "modo",
    "natividad",
    "justo",
    "ataque",
    "séquito",
    "pillo",
    "sed",
    "ex",
    "y",
    "voluminoso",
    "temporalidad",
    "verdades",
    "racional",
    "asunción",
    "incidente",
    "marejada",
    "placenta",
    "amanecer",
    "fuga",
    "previsor",
    "presentación",
    "lejos",
    "necesariamente",
    "sospechoso",
    "adiposidad",
    "quindío",
    "pócima",
    "voluble",
    "débito",
    "sintió",
    "accesorio",
    "falda",
    "sapiencia",
    "volutas",
    "queso",
    "permacultura",
    "laudo",
    "soluciones",
    "entero",
    "pan",
    "litro",
    "tonelada",
    "culpa",
    "libertario",
    "mosca",
    "dictado",
    "reincidente",
    "nascimiento",
    "dolor",
    "escolar",
    "impedimento",
    "mínima",
    "mayores",
    "repugnante",
    "dulce",
    "obcecado",
    "montaña",
    "enigma",
    "total",
    "deletéreo",
    "décima",
    "cábala",
    "fotografía",
    "dolores",
    "molesto",
    "olvido",
    "paciencia",
    "resiliencia",
    "voluntad",
    "molestias",
    "magnífico",
    "distinción",
    "ovni",
    "marejada",
    "cerro",
    "torre",
    "y",
    "abogada",
    "manantial",
    "corporal",
    "agua",
    "crepúsculo",
    "ataque",
    "desierto",
    "laboriosamente",
    "angustia",
    "afortunado",
    "alma",
    "encefalograma",
    "materialidad",
    "cosas",
    "o",
    "renuncia",
    "error",
    "menos",
    "conejo",
    "abadía",
    "analfabeto",
    "remo",
    "fugacidad",
    "oficio",
    "en",
    "almácigo",
    "vos",
    "pan",
    "represión",
    "números",
    "triste",
    "refugiado",
    "trote",
    "inventor",
    "corchea",
    "repelente",
    "magma",
    "recusado",
    "patrón",
    "explícito",
    "paloma",
    "síndrome",
    "inmune",
    "autoinmune",
    "comodidad",
    "ley",
    "vietnamita",
    "demonio",
    "tasmania",
    "repeler",
    "apéndice",
    "arquitecto",
    "columna",
    "yugo",
    "computador",
    "mula",
    "a",
    "propósito",
    "fantasía",
    "alias",
    "rayo",
    "tenedor",
    "deleznable",
    "ventana",
    "cara",
    "anemia",
    "corrupto"
  ]
};
const fo = { ru: bc, sp: yc, latin: gc }, vc = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
function wc(e, r, n) {
  let o;
  if (e.name && (o = e.name.match(vc))) {
    const a = fo[o[1]] || fo.latin, l = o[2] ? Math.max(1, Number(o[2])) : 30, d = o[3] ? Math.max(l, Number(o[3].slice(1))) : l, v = Mt(l, d), w = e.repeat || Sc(r);
    e.name = e.attributes = void 0, e.value = [jc(a, v, !w || w.value === 0)], e.repeat && r.length > 1 && _i(e, r, n);
  }
}
function Mt(e, r) {
  return Math.floor(Math.random() * (r - e) + e);
}
function kc(e, r) {
  const n = e.length, o = Math.min(n, r), a = [];
  for (; a.length < o; ) {
    const l = e[Mt(0, n)];
    a.includes(l) || a.push(l);
  }
  return a;
}
function xc(e) {
  return e[Mt(0, e.length - 1)];
}
function po(e, r) {
  return e.length && (e = [_c(e[0])].concat(e.slice(1))), e.join(" ") + (r || xc("?!..."));
}
function _c(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function mo(e) {
  if (e.length < 2)
    return e;
  e = e.slice();
  const r = e.length, n = /,$/;
  let o = 0;
  r > 3 && r <= 6 ? o = Mt(0, 1) : r > 6 && r <= 12 ? o = Mt(0, 2) : o = Mt(1, 4);
  for (let a = 0, l; a < o; a++)
    l = Mt(0, r - 2), n.test(e[l]) || (e[l] += ",");
  return e;
}
function jc(e, r, n) {
  const o = [];
  let a = 0, l;
  for (n && e.common && (l = e.common.slice(0, r), a += l.length, o.push(po(mo(l), "."))); a < r; )
    l = kc(e.words, Math.min(Mt(2, 30), r - a)), a += l.length, o.push(po(mo(l)));
  return o.join(" ");
}
function Sc(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    if (n.type === "AbbreviationNode" && n.repeat)
      return n.repeat;
  }
}
function Ec(e) {
  Rc(e.name) && e.attributes && (e.children.length || e.value) && (e.attributes = e.attributes.filter($c));
}
function $c(e) {
  return e.name !== "select";
}
function Rc(e) {
  return e === "xsl:variable" || e === "xsl:with-param";
}
const ji = /^(-+)([a-z0-9]+[a-z0-9-]*)/i, Si = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i, Oc = (e) => /^[a-z]\-/i.test(e), Cc = (e) => /^[a-z]/i.test(e);
function Tc(e, r, n) {
  Pc(e), Dc(e, r, n);
}
function Pc(e) {
  const r = Nn(e), n = [];
  for (const o of r.classNames) {
    const a = o.indexOf("_");
    a > 0 && !o.startsWith("-") ? (n.push(o.slice(0, a)), n.push(o.slice(a))) : n.push(o);
  }
  n.length && (r.classNames = n.filter(Oi), r.block = $i(r.classNames), Ri(e, r.classNames.join(" ")));
}
function Dc(e, r, n) {
  const o = Nn(e), a = [], { options: l } = n, d = r.slice(1).concat(e);
  for (let w of o.classNames) {
    let $ = "", E;
    const D = w;
    (E = w.match(ji)) && ($ = ho(d, E[1].length, n.context) + l["bem.element"] + E[2], a.push($), w = w.slice(E[0].length)), (E = w.match(Si)) && ($ || ($ = ho(d, E[1].length), a.push($)), a.push(`${$}${l["bem.modifier"]}${E[2]}`), w = w.slice(E[0].length)), w === D && a.push(D);
  }
  const v = a.filter(Oi);
  v.length && Ri(e, v.join(" "));
}
function Nn(e) {
  if (!e._bem) {
    let r = "";
    if (e.attributes) {
      for (const n of e.attributes)
        if (n.name === "class" && n.value) {
          r = zc(n.value);
          break;
        }
    }
    e._bem = Ei(r);
  }
  return e._bem;
}
function Ac(e) {
  return e._bem || (e._bem = Ei(e.attributes && e.attributes.class || "")), e._bem;
}
function Ei(e) {
  const r = e ? e.split(/\s+/) : [];
  return {
    classNames: r,
    block: $i(r)
  };
}
function ho(e, r = 0, n) {
  let o = Math.max(e.length - r, 0);
  do {
    const a = e[o];
    if (a) {
      const l = Nn(a);
      if (l.block)
        return l.block;
    }
  } while (0 < o--);
  if (n) {
    const a = Ac(n);
    if (a.block)
      return a.block;
  }
  return "";
}
function $i(e) {
  return go(e, Oc) || go(e, Cc) || void 0;
}
function go(e, r) {
  for (const n of e) {
    if (ji.test(n) || Si.test(n))
      break;
    if (r(n))
      return n;
  }
}
function Ri(e, r) {
  for (const n of e.attributes)
    if (n.name === "class") {
      n.value = [r];
      break;
    }
}
function zc(e) {
  let r = "";
  for (const n of e)
    r += typeof n == "string" ? n : n.name;
  return r;
}
function Oi(e, r, n) {
  return !!e && n.indexOf(e) === r;
}
function Nc(e) {
  if (e.name === "label") {
    const r = gi(e, (n) => n.name === "input" || n.name === "textarea");
    r && (e.attributes && (e.attributes = e.attributes.filter((n) => !(n.name === "for" && bo(n)))), r.attributes && (r.attributes = r.attributes.filter((n) => !(n.name === "id" && bo(n)))));
  }
}
function bo(e) {
  if (!e.value)
    return !0;
  if (e.value.length === 1) {
    const r = e.value[0];
    if (r && typeof r != "string" && !r.name)
      return !0;
  }
  return !1;
}
function Ci(e, r, n) {
  const o = (l, d, v) => {
    const { parent: w, current: $ } = n;
    n.parent = $, n.current = l, r(l, d, v, n, a), n.current = $, n.parent = w;
  }, a = (l, d, v) => {
    n.ancestors.push(n.current), o(l, d, v), n.ancestors.pop();
  };
  e.children.forEach(o);
}
function Ti(e) {
  return {
    // @ts-ignore: Will set value in iterator
    current: null,
    parent: void 0,
    ancestors: [],
    config: e,
    field: 1,
    out: yi(e.options)
  };
}
const Br = [{ type: "Field", index: 0, name: "" }];
function Vt(e) {
  return e ? !e.name && !e.attributes : !1;
}
function yo(e, r) {
  return e ? Kt(e, r) : !1;
}
function Pi(e) {
  return typeof e == "object" && e.type === "Field";
}
function vt(e, r) {
  const { out: n } = r;
  let o = -1;
  for (const a of e)
    typeof a == "string" ? Ce(n, a) : (zn(n, r.field + a.index, a.name), a.index > o && (o = a.index));
  o !== -1 && (r.field += o + 1);
}
function Fc(e) {
  const r = [];
  let n = [];
  for (const o of e)
    if (typeof o == "string") {
      const a = o.split(/\r\n?|\n/g);
      for (n.push(a.shift() || ""); a.length; )
        r.push(n), n = [a.shift() || ""];
    } else
      n.push(o);
  return n.length && r.push(n), r;
}
function Di(e) {
  return !e.implied || e.valueType !== "raw" || !!e.value && e.value.length > 0;
}
var qt;
(function(e) {
  e[e.Start = 91] = "Start", e[e.End = 93] = "End", e[e.Underscore = 95] = "Underscore", e[e.Dash = 45] = "Dash";
})(qt || (qt = {}));
function vo(e) {
  const r = [], n = { pos: 0, text: e };
  let o, a = n.pos, l = n.pos;
  for (; n.pos < n.text.length; )
    l = n.pos, (o = Ic(n)) ? (a !== n.pos && r.push(e.slice(a, l)), r.push(o), a = n.pos) : n.pos++;
  return a !== n.pos && r.push(e.slice(a)), r;
}
function Ic(e) {
  if (Xr(e) === qt.Start) {
    const r = ++e.pos;
    let n = r, o = r, a = 1;
    for (; e.pos < e.text.length; ) {
      const l = Xr(e);
      if (Ai(l)) {
        for (n = e.pos; Lc(Xr(e)); )
          e.pos++;
        o = e.pos;
      } else {
        if (l === qt.Start)
          a++;
        else if (l === qt.End && --a === 0)
          return {
            before: e.text.slice(r, n),
            after: e.text.slice(o, e.pos++),
            name: e.text.slice(n, o)
          };
        e.pos++;
      }
    }
  }
}
function Xr(e, r = e.pos) {
  return e.text.charCodeAt(r);
}
function Ai(e) {
  return e >= 65 && e <= 90;
}
function Lc(e) {
  return Ai(e) || e > 47 && e < 58 || e === qt.Underscore || e === qt.Dash;
}
function Mc(e) {
  const { options: r } = e;
  return {
    enabled: r["comment.enabled"],
    trigger: r["comment.trigger"],
    before: r["comment.before"] ? vo(r["comment.before"]) : void 0,
    after: r["comment.after"] ? vo(r["comment.after"]) : void 0
  };
}
function Uc(e, r) {
  zi(e, r) && r.comment.before && Ni(e, r.comment.before, r);
}
function Wc(e, r) {
  zi(e, r) && r.comment.after && Ni(e, r.comment.after, r);
}
function zi(e, r) {
  const { comment: n } = r;
  if (!n.enabled || !n.trigger || !e.name || !e.attributes)
    return !1;
  for (const o of e.attributes)
    if (o.name && n.trigger.includes(o.name))
      return !0;
  return !1;
}
function Ni(e, r, n) {
  const o = {}, { out: a } = n;
  for (const l of e.attributes)
    l.name && l.value && (o[l.name.toUpperCase()] = l.value);
  for (const l of r)
    typeof l == "string" ? Ce(a, l) : o[l.name] && (Ce(a, l.before), vt(o[l.name], n), Ce(a, l.after));
}
const Bc = /^<([\w\-:]+)[\s>]/, Vc = /* @__PURE__ */ new Set([
  "for",
  "while",
  "of",
  "async",
  "await",
  "const",
  "let",
  "var",
  "continue",
  "break",
  "debugger",
  "do",
  "export",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "switch",
  "this",
  "throw",
  "try",
  "catch",
  "typeof",
  "void",
  "with",
  "yield"
]);
function Fi(e, r) {
  const n = Ti(r);
  return n.comment = Mc(r), Ci(e, qc, n), n.out.value;
}
function qc(e, r, n, o, a) {
  const { out: l, config: d } = o, v = Ii(e, r, n, o), w = Gc(o);
  if (l.level += w, v && Dt(l, !0), e.name) {
    const $ = cc(e.name, d);
    if (Uc(e, o), Ce(l, `<${$}`), e.attributes)
      for (const E of e.attributes)
        Di(E) && Yc(E, o);
    if (e.selfClosing && !e.children.length && !e.value)
      Ce(l, `${uc(d)}>`);
    else {
      if (Ce(l, ">"), !wo(e, o, a)) {
        if (e.value) {
          const E = e.value.some(Li) || Jc(e.value, d);
          E && Dt(o.out, ++l.level), vt(e.value, o), E && Dt(o.out, --l.level);
        }
        if (e.children.forEach(a), !e.value && !e.children.length) {
          const E = d.options["output.formatLeafNode"] || d.options["output.formatForce"].includes(e.name);
          E && Dt(o.out, ++l.level), vt(Br, o), E && Dt(o.out, --l.level);
        }
      }
      Ce(l, `</${$}>`), Wc(e, o);
    }
  } else
    !wo(e, o, a) && e.value && (vt(e.value, o), e.children.forEach(a));
  if (v && r === n.length - 1 && o.parent) {
    const $ = Vt(o.parent) ? 0 : 1;
    Dt(l, l.level - $);
  }
  l.level -= w;
}
function Yc(e, r) {
  const { out: n, config: o } = r;
  if (e.name) {
    const a = o.options["markup.attributes"], l = o.options["markup.valuePrefix"];
    let { name: d, value: v } = e, w = Ar(e, o, !0), $ = Ar(e, o);
    a && (d = ko(d, a, e.multiple) || d), d = vi(d, o), o.options["jsx.enabled"] && e.multiple && (w = mn, $ = hn);
    const E = l ? ko(e.name, l, e.multiple) : null;
    if (E && (v == null ? void 0 : v.length) === 1 && typeof v[0] == "string") {
      const D = v[0];
      v = [Qc(D) ? `${E}.${D}` : `${E}['${D}']`], o.options["jsx.enabled"] && (w = mn, $ = hn);
    }
    wi(e, o) && !v ? o.options["output.compactBoolean"] || (v = [d]) : v || (v = Br), Ce(n, " " + d), v ? (Ce(n, "=" + w), vt(v, r), Ce(n, $)) : o.options["output.selfClosingStyle"] !== "html" && Ce(n, "=" + w + $);
  }
}
function wo(e, r, n) {
  if (e.value && e.children.length) {
    const o = e.value.findIndex(Pi);
    if (o !== -1) {
      vt(e.value.slice(0, o), r);
      const a = r.out.line;
      let l = o + 1;
      return e.children.forEach(n), r.out.line !== a && typeof e.value[l] == "string" && Ce(r.out, e.value[l++].trimLeft()), vt(e.value.slice(l), r), !0;
    }
  }
  return !1;
}
function Ii(e, r, n, o) {
  const { config: a, parent: l } = o;
  if (!a.options["output.format"] || r === 0 && !l || l && Vt(l) && n.length === 1)
    return !1;
  if (Vt(e) && (Vt(n[r - 1]) || Vt(n[r + 1]) || e.value.some(Li) || e.value.some(Pi) && e.children.length))
    return !0;
  if (Kt(e, a)) {
    if (r === 0) {
      for (let d = 0; d < n.length; d++)
        if (!Kt(n[d], a))
          return !0;
    } else if (!Kt(n[r - 1], a))
      return !0;
    if (a.options["output.inlineBreak"]) {
      let d = 1, v = r, w = r;
      for (; yo(n[--v], a); )
        d++;
      for (; yo(n[++w], a); )
        d++;
      if (d >= a.options["output.inlineBreak"])
        return !0;
    }
    for (let d = 0, v = e.children.length; d < v; d++)
      if (Ii(e.children[d], d, e.children, o))
        return !0;
    return !1;
  }
  return !0;
}
function Gc(e) {
  const { config: r, parent: n } = e;
  return !n || Vt(n) || n.name && r.options["output.formatSkip"].includes(n.name) ? 0 : 1;
}
function Li(e) {
  return typeof e == "string" && /\r|\n/.test(e);
}
function Jc(e, r) {
  if (e.length && typeof e[0] == "string") {
    const n = Bc.exec(e[0]);
    if (n != null && n.length && !r.options.inlineElements.includes(n[1].toLowerCase()))
      return !0;
  }
  return !1;
}
function ko(e, r, n) {
  return n && r[`${e}*`] || r[e];
}
function Qc(e) {
  return !Vc.has(e) && /^[a-zA-Z_$][\w_$]*$/.test(e);
}
function Fn(e, r, n) {
  const o = Ti(r);
  return o.options = n || {}, Ci(e, Kc, o), o.out.value;
}
function Kc(e, r, n, o, a) {
  const { out: l, options: d } = o, { primary: v, secondary: w } = Xc(e), $ = o.parent ? 1 : 0;
  l.level += $, nu(e, r, n, o) && Dt(l, !0), e.name && (e.name !== "div" || !v.length) && Ce(l, (d.beforeName || "") + e.name + (d.afterName || "")), Hc(v, o), Zc(w.filter(Di), o), e.selfClosing && !e.value && !e.children.length ? o.options.selfClose && Ce(l, o.options.selfClose) : (eu(e, o), e.children.forEach(a)), l.level -= $;
}
function Xc(e) {
  const r = [], n = [];
  if (e.attributes)
    for (const o of e.attributes)
      tu(o) ? r.push(o) : n.push(o);
  return { primary: r, secondary: n };
}
function Hc(e, r) {
  for (const n of e)
    if (n.value)
      if (n.name === "class") {
        Ce(r.out, ".");
        const o = n.value.map((a) => typeof a == "string" ? a.replace(/\s+/g, ".") : a);
        vt(o, r);
      } else
        Ce(r.out, "#"), vt(n.value, r);
}
function Zc(e, r) {
  if (e.length) {
    const { out: n, config: o, options: a } = r;
    a.beforeAttribute && Ce(n, a.beforeAttribute);
    for (let l = 0; l < e.length; l++) {
      const d = e[l];
      Ce(n, vi(d.name || "", o)), wi(d, o) && !d.value ? !o.options["output.compactBoolean"] && a.booleanValue && Ce(n, "=" + a.booleanValue) : (Ce(n, "=" + Ar(d, o, !0)), vt(d.value || Br, r), Ce(n, Ar(d, o))), l !== e.length - 1 && a.glueAttribute && Ce(n, a.glueAttribute);
    }
    a.afterAttribute && Ce(n, a.afterAttribute);
  }
}
function eu(e, r) {
  if (!e.value && e.children.length)
    return;
  const n = e.value || Br, o = Fc(n), { out: a, options: l } = r;
  if (o.length === 1)
    (e.name || e.attributes) && Ke(a, " "), vt(n, r);
  else {
    const d = [];
    let v = 0;
    for (const w of o) {
      const $ = ru(w);
      d.push($), $ > v && (v = $);
    }
    a.level++;
    for (let w = 0; w < o.length; w++)
      Dt(a, !0), l.beforeTextLine && Ke(a, l.beforeTextLine), vt(o[w], r), l.afterTextLine && (Ke(a, " ".repeat(v - d[w])), Ke(a, l.afterTextLine));
    a.level--;
  }
}
function tu(e) {
  return e.name === "class" || e.name === "id";
}
function ru(e) {
  let r = 0;
  for (const n of e)
    r += typeof n == "string" ? n.length : n.name.length;
  return r;
}
function nu(e, r, n, o) {
  return !o.parent && r === 0 ? !1 : !Vt(e);
}
function ou(e, r) {
  return Fn(e, r, {
    beforeName: "%",
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: " ",
    afterTextLine: " |",
    booleanValue: "true",
    selfClose: "/"
  });
}
function iu(e, r) {
  return Fn(e, r, {
    beforeAttribute: " ",
    glueAttribute: " ",
    beforeTextLine: "| ",
    selfClose: "/"
  });
}
function au(e, r) {
  return Fn(e, r, {
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: ", ",
    beforeTextLine: "| ",
    selfClose: r.options["output.selfClosingStyle"] === "xml" ? "/" : ""
  });
}
const su = { html: Fi, haml: ou, slim: iu, pug: au };
function lu(e, r) {
  let n;
  if (typeof e == "string") {
    const o = Object.assign({}, r);
    r.options["jsx.enabled"] && (o.jsx = !0), r.options["markup.href"] && (o.href = !0), e = li(e, o), n = r.text, r.text = void 0;
  }
  return e = ac(e, r), oc(e, uu, r), r.text = n ?? r.text, e;
}
function cu(e, r) {
  return (su[r.syntax] || Fi)(e, r);
}
function uu(e, r, n) {
  dc(e, r, n), tc(e, n), wc(e, r, n), n.syntax === "xsl" && Ec(e), n.type === "markup" && Nc(e), n.options["bem.enabled"] && Tc(e, r, n);
}
var It;
(function(e) {
  e.Raw = "Raw", e.Property = "Property";
})(It || (It = {}));
const fu = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/, pu = { value: !0 };
function du(e, r) {
  const n = r.match(fu);
  if (n) {
    const o = {}, a = n[2] ? n[2].split("|").map(gu) : [];
    for (const l of a)
      for (const d of l)
        yu(d, o);
    return {
      type: It.Property,
      key: e,
      property: n[1],
      value: a,
      keywords: o,
      dependencies: []
    };
  }
  return { type: It.Raw, key: e, value: r };
}
function mu(e) {
  e = e.slice().sort(hu);
  const r = [];
  let n;
  for (const o of e.filter(bu)) {
    for (; r.length; ) {
      if (n = r[r.length - 1], o.property.startsWith(n.property) && o.property.charCodeAt(n.property.length) === 45) {
        n.dependencies.push(o), r.push(o);
        break;
      }
      r.pop();
    }
    r.length || r.push(o);
  }
  return e;
}
function hu(e, r) {
  return e.key === r.key ? 0 : e.key < r.key ? -1 : 1;
}
function gu(e) {
  return hi(e.trim(), pu)[0].value;
}
function bu(e) {
  return e.type === It.Property;
}
function yu(e, r) {
  for (const n of e.value)
    if (n.type === "Literal")
      r[n.value] = n;
    else if (n.type === "FunctionCall")
      r[n.name] = n;
    else if (n.type === "Field") {
      const o = n.name.trim();
      o && (r[o] = { type: "Literal", value: o });
    }
}
function vu(e, r, n = !1) {
  if (e = e.toLowerCase(), r = r.toLowerCase(), e === r)
    return 1;
  if (!e || !r || e.charCodeAt(0) !== r.charCodeAt(0))
    return 0;
  const o = e.length, a = r.length;
  if (!n && o > a)
    return 0;
  const l = Math.min(o, a), d = Math.max(o, a);
  let v = 1, w = 1, $ = d, E = 0, D = 0, B = !1, re = !1;
  for (; v < o; ) {
    for (E = e.charCodeAt(v), B = !1, re = !1; w < a; ) {
      if (D = r.charCodeAt(w), E === D) {
        B = !0, $ += d - (re ? v : w);
        break;
      }
      re = D === 45, w++;
    }
    if (!B) {
      if (!n)
        return 0;
      break;
    }
    v++;
  }
  const X = v / d, ce = d - l, ye = xo(d) - xo(ce);
  return $ * X / ye;
}
function xo(e) {
  return e * (e + 1) / 2;
}
function Mi(e, r) {
  return !e.r && !e.g && !e.b && !e.a ? "transparent" : e.a === 1 ? wu(e, r) : ku(e);
}
function wu(e, r) {
  const n = r && Hr(e.r) && Hr(e.g) && Hr(e.b) ? xu : _u;
  return "#" + n(e.r) + n(e.g) + n(e.b);
}
function ku(e) {
  const r = [e.r, e.g, e.b];
  return e.a !== 1 && r.push(Ui(e.a, 8)), `${r.length === 3 ? "rgb" : "rgba"}(${r.join(", ")})`;
}
function Ui(e, r = 4) {
  return e.toFixed(r).replace(/\.?0+$/, "");
}
function Hr(e) {
  return !(e % 17);
}
function xu(e) {
  return (e >> 4).toString(16);
}
function _u(e) {
  return ju(e.toString(16), 2);
}
function ju(e, r) {
  for (; e.length < r; )
    e = "0" + e;
  return e;
}
const zr = {
  /** Include all possible snippets in match */
  Global: "@@global",
  /** Include raw snippets only (e.g. no properties) in abbreviation match */
  Section: "@@section",
  /** Include properties only in abbreviation match */
  Property: "@@property",
  /** Resolve abbreviation in context of CSS property value */
  Value: "@@value"
};
function Su(e, r) {
  var n;
  const o = yi(r.options), a = r.options["output.format"];
  ((n = r.context) === null || n === void 0 ? void 0 : n.name) === zr.Section && (e = e.filter((l) => l.snippet));
  for (let l = 0; l < e.length; l++)
    a && l !== 0 && Dt(o, !0), Eu(e[l], o, r);
  return o.value;
}
function Eu(e, r, n) {
  const o = n.options["stylesheet.json"];
  if (e.name) {
    const a = o ? Ou(e.name) : e.name;
    Ce(r, a + n.options["stylesheet.between"]), e.value.length ? $u(e, r, n) : zn(r, 0, ""), o ? Ke(r, ",") : (_o(e, r, !0), Ke(r, n.options["stylesheet.after"]));
  } else {
    for (const a of e.value)
      for (const l of a.value)
        Bi(l, r, n);
    _o(e, r, e.value.length > 0);
  }
}
function $u(e, r, n) {
  const o = n.options["stylesheet.json"], a = o ? Ru(e) : null;
  if (a && (!a.unit || a.unit === "px"))
    Ke(r, String(a.value));
  else {
    const l = Cu(n);
    o && Ke(r, l);
    for (let d = 0; d < e.value.length; d++)
      d !== 0 && Ke(r, ", "), Wi(e.value[d], r, n);
    o && Ke(r, l);
  }
}
function _o(e, r, n) {
  e.important && (n && Ke(r, " "), Ke(r, "!important"));
}
function Wi(e, r, n) {
  for (let o = 0, a = -1; o < e.value.length; o++) {
    const l = e.value[o];
    o !== 0 && (l.type !== "Field" || l.start !== a) && Ke(r, " "), Bi(l, r, n), a = l.end;
  }
}
function Bi(e, r, n) {
  if (e.type === "ColorValue")
    Ke(r, Mi(e, n.options["stylesheet.shortHex"]));
  else if (e.type === "Literal" || e.type === "CustomProperty")
    Ce(r, e.value);
  else if (e.type === "NumberValue")
    Ce(r, Ui(e.value, 4) + e.unit);
  else if (e.type === "StringValue") {
    const o = e.quote === "double" ? '"' : "'";
    Ce(r, o + e.value + o);
  } else if (e.type === "Field")
    zn(r, e.index, e.name);
  else if (e.type === "FunctionCall") {
    Ke(r, e.name + "(");
    for (let o = 0; o < e.arguments.length; o++)
      o && Ke(r, ", "), Wi(e.arguments[o], r, n);
    Ke(r, ")");
  }
}
function Ru(e) {
  if (e.value.length === 1) {
    const r = e.value[0];
    if (r.value.length === 1 && r.value[0].type === "NumberValue")
      return r.value[0];
  }
}
function Ou(e) {
  return e.replace(/\-(\w)/g, (r, n) => n.toUpperCase());
}
function Cu(e) {
  return e.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
const jo = "lg";
function Tu(e, r) {
  var n;
  const o = ((n = r.cache) === null || n === void 0 ? void 0 : n.stylesheetSnippets) || Pu(r.snippets);
  r.cache && (r.cache.stylesheetSnippets = o), typeof e == "string" && (e = hi(e, { value: Gi(r) }));
  const a = Mu(o, r);
  for (const l of e)
    Du(l, a, r);
  return e;
}
function Pu(e) {
  const r = [];
  for (const n of Object.keys(e))
    r.push(du(n, e[n]));
  return mu(r);
}
function Du(e, r, n) {
  if (!Au(e, n)) {
    const o = n.options["stylesheet.fuzzySearchMinScore"];
    if (Gi(n)) {
      const a = n.context.name, l = r.find((d) => d.type === It.Property && d.property === a);
      Vi(e, n, l, o), e.snippet = l;
    } else if (e.name) {
      const a = Rr(e.name, r, o, !0);
      e.snippet = a, a && (a.type === It.Property ? zu(e, a, n) : Nu(e, a));
    }
  }
  return (e.name || n.context) && Lu(e, n), e;
}
function Au(e, r) {
  let n = null;
  const o = e.value.length === 1 ? e.value[0] : null;
  if (o && o.value.length === 1) {
    const a = o.value[0];
    a.type === "FunctionCall" && a.name === jo && (n = a);
  }
  return n || e.name === jo ? (n ? n = Object.assign(Object.assign({}, n), { name: "linear-gradient" }) : n = {
    type: "FunctionCall",
    name: "linear-gradient",
    arguments: [Nr(Bt(0, ""))]
  }, r.context || (e.name = "background-image"), e.value = [Nr(n)], !0) : !1;
}
function zu(e, r, n) {
  const o = e.name, a = Iu(o, r.key);
  if (a) {
    if (e.value.length)
      return e;
    const l = gn(a, n, r);
    if (!l)
      return e;
    e.value.push(Nr(l));
  }
  if (e.name = r.property, e.value.length)
    Vi(e, n, r);
  else if (r.value.length) {
    const l = r.value[0];
    e.value = r.value.length === 1 || l.some(qi) ? l : l.map((d) => Yi(d, n));
  }
  return e;
}
function Vi(e, r, n, o) {
  for (const a of e.value) {
    const l = [];
    for (const d of a.value)
      if (d.type === "Literal")
        l.push(gn(d.value, r, n, o) || d);
      else if (d.type === "FunctionCall") {
        const v = gn(d.name, r, n, o);
        v && v.type === "FunctionCall" ? l.push(Object.assign(Object.assign({}, v), { arguments: d.arguments.concat(v.arguments.slice(d.arguments.length)) })) : l.push(d);
      } else
        l.push(d);
    a.value = l;
  }
}
function Nu(e, r) {
  let n = 0, o;
  const a = /\$\{(\d+)(:[^}]+)?\}/g, l = e.value[0], d = [];
  for (; o = a.exec(r.value); )
    n !== o.index && d.push(Xt(r.value.slice(n, o.index))), n = o.index + o[0].length, l && l.value.length ? d.push(l.value.shift()) : d.push(Bt(Number(o[1]), o[2] ? o[2].slice(1) : ""));
  const v = r.value.slice(n);
  return v && d.push(Xt(v)), e.name = void 0, e.value = [Nr(...d)], e;
}
function Rr(e, r, n = 0, o = !1) {
  let a = null, l = 0;
  for (const d of r) {
    const v = vu(e, Fu(d), o);
    if (v === 1)
      return d;
    v && v >= l && (l = v, a = d);
  }
  return l >= n ? a : null;
}
function Fu(e) {
  return typeof e == "string" ? e : e.key;
}
function Iu(e, r) {
  for (let n = 0, o = 0; n < e.length; n++) {
    if (o = r.indexOf(e[n], o), o === -1)
      return e.slice(n);
    o++;
  }
  return "";
}
function gn(e, r, n, o) {
  let a;
  if (n) {
    if (a = Rr(e, Object.keys(n.keywords), o))
      return n.keywords[a];
    for (const l of n.dependencies)
      if (a = Rr(e, Object.keys(l.keywords), o))
        return l.keywords[a];
  }
  return (a = Rr(e, r.options["stylesheet.keywords"], o)) ? Xt(a) : null;
}
function Lu(e, r) {
  const n = r.options["stylesheet.unitAliases"], o = r.options["stylesheet.unitless"];
  for (const a of e.value)
    for (const l of a.value)
      l.type === "NumberValue" && (l.unit ? l.unit = n[l.unit] || l.unit : l.value !== 0 && !o.includes(e.name) && (l.unit = l.rawValue.includes(".") ? r.options["stylesheet.floatUnit"] : r.options["stylesheet.intUnit"]));
}
function Nr(...e) {
  return {
    type: "CSSValue",
    value: e
  };
}
function Xt(e) {
  return { type: "Literal", value: e };
}
function Bt(e, r) {
  return { type: "Field", index: e, name: r };
}
function qi(e) {
  for (const r of e.value)
    if (r.type === "Field" || r.type === "FunctionCall" && r.arguments.some(qi))
      return !0;
  return !1;
}
function Yi(e, r, n = { index: 1 }) {
  let o = [];
  for (const a of e.value)
    switch (a.type) {
      case "ColorValue":
        o.push(Bt(n.index++, Mi(a, r.options["stylesheet.shortHex"])));
        break;
      case "Literal":
        o.push(Bt(n.index++, a.value));
        break;
      case "NumberValue":
        o.push(Bt(n.index++, `${a.value}${a.unit}`));
        break;
      case "StringValue":
        const l = a.quote === "single" ? "'" : '"';
        o.push(Bt(n.index++, l + a.value + l));
        break;
      case "FunctionCall":
        o.push(Bt(n.index++, a.name), Xt("("));
        for (let d = 0, v = a.arguments.length; d < v; d++)
          o = o.concat(Yi(a.arguments[d], r, n).value), d !== v - 1 && o.push(Xt(", "));
        o.push(Xt(")"));
        break;
      default:
        o.push(a);
    }
  return Object.assign(Object.assign({}, e), { value: o });
}
function Gi(e) {
  return e.context ? e.context.name === zr.Value || !e.context.name.startsWith("@@") : !1;
}
function Mu(e, r) {
  if (r.context) {
    if (r.context.name === zr.Section)
      return e.filter((n) => n.type === It.Raw);
    if (r.context.name === zr.Property)
      return e.filter((n) => n.type === It.Property);
  }
  return e;
}
var Uu = {
  a: "a[href]",
  "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
  "a:link": "a[href='http://${0}']",
  "a:mail": "a[href='mailto:${0}']",
  "a:tel": "a[href='tel:+${0}']",
  abbr: "abbr[title]",
  "acr|acronym": "acronym[title]",
  base: "base[href]/",
  basefont: "basefont/",
  br: "br/",
  frame: "frame/",
  hr: "hr/",
  bdo: "bdo[dir]",
  "bdo:r": "bdo[dir=rtl]",
  "bdo:l": "bdo[dir=ltr]",
  col: "col/",
  link: "link[rel=stylesheet href]/",
  "link:css": "link[href='${1:style}.css']",
  "link:print": "link[href='${1:print}.css' media=print]",
  "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
  "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
  "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
  "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
  "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
  "link:im|link:import": "link[rel=import href='${1:component}.html']",
  meta: "meta/",
  "meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
  "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
  "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
  "meta:edge": "meta:compat[content='${1:ie=edge}']",
  "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
  "meta:refresh": "meta[http-equiv=refresh content='${1:5}']",
  "meta:kw": "meta[name=keywords content]",
  "meta:desc": "meta[name=description content]",
  style: "style",
  script: "script",
  "script:src": "script[src]",
  "script:module": "script[type=module src]",
  img: "img[src alt]/",
  "img:s|img:srcset": "img[srcset src alt]",
  "img:z|img:sizes": "img[sizes srcset src alt]",
  picture: "picture",
  "src|source": "source/",
  "src:sc|source:src": "source[src type]",
  "src:s|source:srcset": "source[srcset]",
  "src:t|source:type": "source[srcset type='${1:image/}']",
  "src:z|source:sizes": "source[sizes srcset]",
  "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
  "src:mt|source:media:type": "source:media[type='${2:image/}']",
  "src:mz|source:media:sizes": "source:media[sizes srcset]",
  "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
  iframe: "iframe[src frameborder=0]",
  embed: "embed[src type]/",
  object: "object[data type]",
  param: "param[name value]/",
  map: "map[name]",
  area: "area[shape coords href alt]/",
  "area:d": "area[shape=default]",
  "area:c": "area[shape=circle]",
  "area:r": "area[shape=rect]",
  "area:p": "area[shape=poly]",
  form: "form[action]",
  "form:get": "form[method=get]",
  "form:post": "form[method=post]",
  label: "label[for]",
  input: "input[type=${1:text}]/",
  inp: "input[name=${1} id=${1}]",
  "input:h|input:hidden": "input[type=hidden name]",
  "input:t|input:text": "inp[type=text]",
  "input:search": "inp[type=search]",
  "input:email": "inp[type=email]",
  "input:url": "inp[type=url]",
  "input:p|input:password": "inp[type=password]",
  "input:datetime": "inp[type=datetime]",
  "input:date": "inp[type=date]",
  "input:datetime-local": "inp[type=datetime-local]",
  "input:month": "inp[type=month]",
  "input:week": "inp[type=week]",
  "input:time": "inp[type=time]",
  "input:tel": "inp[type=tel]",
  "input:number": "inp[type=number]",
  "input:color": "inp[type=color]",
  "input:c|input:checkbox": "inp[type=checkbox]",
  "input:r|input:radio": "inp[type=radio]",
  "input:range": "inp[type=range]",
  "input:f|input:file": "inp[type=file]",
  "input:s|input:submit": "input[type=submit value]",
  "input:i|input:image": "input[type=image src alt]",
  "input:b|input:btn|input:button": "input[type=button value]",
  "input:reset": "input:button[type=reset]",
  isindex: "isindex/",
  select: "select[name=${1} id=${1}]",
  "select:d|select:disabled": "select[disabled.]",
  "opt|option": "option[value]",
  textarea: "textarea[name=${1} id=${1}]",
  "tarea:c|textarea:cols": "textarea[name=${1} id=${1} cols=${2:30}]",
  "tarea:r|textarea:rows": "textarea[name=${1} id=${1} rows=${3:10}]",
  "tarea:cr|textarea:cols:rows": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
  marquee: "marquee[behavior direction]",
  "menu:c|menu:context": "menu[type=context]",
  "menu:t|menu:toolbar": "menu[type=toolbar]",
  video: "video[src]",
  audio: "audio[src]",
  "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
  keygen: "keygen/",
  command: "command/",
  "btn:s|button:s|button:submit": "button[type=submit]",
  "btn:r|button:r|button:reset": "button[type=reset]",
  "btn:b|button:b|button:button": "button[type=button]",
  "btn:d|button:d|button:disabled": "button[disabled.]",
  "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
  bq: "blockquote",
  fig: "figure",
  figc: "figcaption",
  pic: "picture",
  ifr: "iframe",
  emb: "embed",
  obj: "object",
  cap: "caption",
  colg: "colgroup",
  fst: "fieldset",
  btn: "button",
  optg: "optgroup",
  tarea: "textarea",
  leg: "legend",
  sect: "section",
  art: "article",
  hdr: "header",
  ftr: "footer",
  adr: "address",
  dlg: "dialog",
  str: "strong",
  prog: "progress",
  mn: "main",
  tem: "template",
  fset: "fieldset",
  datal: "datalist",
  kg: "keygen",
  out: "output",
  det: "details",
  sum: "summary",
  cmd: "command",
  data: "data[value]",
  meter: "meter[value]",
  time: "time[datetime]",
  "ri:d|ri:dpr": "img:s",
  "ri:v|ri:viewport": "img:z",
  "ri:a|ri:art": "pic>src:m+img",
  "ri:t|ri:type": "pic>src:t+img",
  "!!!": "{<!DOCTYPE html>}",
  doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
  "!|html:5": "!!!+doc",
  c: "{<!-- ${0} -->}",
  "cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
  "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
}, Wu = {
  "@f": `@font-face {
	font-family: \${1};
	src: url(\${2});
}`,
  "@ff": "@font-face {\n	font-family: '${1:FontName}';\n	src: url('${2:FileName}.eot');\n	src: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n		 url('${2:FileName}.woff') format('woff'),\n		 url('${2:FileName}.ttf') format('truetype'),\n		 url('${2:FileName}.svg#${1:FontName}') format('svg');\n	font-style: ${3:normal};\n	font-weight: ${4:normal};\n}",
  "@i|@import": "@import url(${0});",
  "@kf": "@keyframes ${1:identifier} {\n	${2}\n}",
  "@m|@media": "@media ${1:screen} {\n	${0}\n}",
  ac: "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
  ai: "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
  anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
  animdel: "animation-delay:time",
  animdir: "animation-direction:normal|reverse|alternate|alternate-reverse",
  animdur: "animation-duration:${1:0}s",
  animfm: "animation-fill-mode:both|forwards|backwards",
  animic: "animation-iteration-count:1|infinite",
  animn: "animation-name",
  animps: "animation-play-state:running|paused",
  animtf: "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
  ap: "appearance:none",
  as: "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
  b: "bottom",
  bd: "border:${1:1px} ${2:solid} ${3:#000}",
  bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
  bdbc: "border-bottom-color:${1:#000}",
  bdbi: "border-bottom-image:url(${0})",
  bdbk: "border-break:close",
  bdbli: "border-bottom-left-image:url(${0})|continue",
  bdblrs: "border-bottom-left-radius",
  bdbri: "border-bottom-right-image:url(${0})|continue",
  bdbrrs: "border-bottom-right-radius",
  bdbs: "border-bottom-style",
  bdbw: "border-bottom-width",
  bdc: "border-color:${1:#000}",
  bdci: "border-corner-image:url(${0})|continue",
  bdcl: "border-collapse:collapse|separate",
  bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
  bdi: "border-image:url(${0})",
  bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
  bdlc: "border-left-color:${1:#000}",
  bdlen: "border-length",
  bdli: "border-left-image:url(${0})",
  bdls: "border-left-style",
  bdlw: "border-left-width",
  bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
  bdrc: "border-right-color:${1:#000}",
  bdri: "border-right-image:url(${0})",
  bdrs: "border-radius",
  bdrst: "border-right-style",
  bdrw: "border-right-width",
  bds: "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
  bdsp: "border-spacing",
  bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
  bdtc: "border-top-color:${1:#000}",
  bdti: "border-top-image:url(${0})",
  bdtli: "border-top-left-image:url(${0})|continue",
  bdtlrs: "border-top-left-radius",
  bdtri: "border-top-right-image:url(${0})|continue",
  bdtrrs: "border-top-right-radius",
  bdts: "border-top-style",
  bdtw: "border-top-width",
  bdw: "border-width",
  bbs: "border-block-start",
  bbe: "border-block-end",
  bis: "border-inline-start",
  bie: "border-inline-end",
  bfv: "backface-visibility:hidden|visible",
  bg: "background:${1:#000}",
  "bg:n": "background: none",
  bga: "background-attachment:fixed|scroll",
  bgbk: "background-break:bounding-box|each-box|continuous",
  bgc: "background-color:${1:#fff}",
  bgcp: "background-clip:padding-box|border-box|content-box|no-clip",
  bgi: "background-image:url(${0})",
  bgo: "background-origin:padding-box|border-box|content-box",
  bgp: "background-position:${1:0} ${2:0}",
  bgpx: "background-position-x",
  bgpy: "background-position-y",
  bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
  bgsz: "background-size:contain|cover",
  bs: "block-size",
  bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
  bxsz: "box-sizing:border-box|content-box|border-box",
  c: "color:${1:#000}",
  cr: "color:rgb(${1:0}, ${2:0}, ${3:0})",
  cra: "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})",
  cl: "clear:both|left|right|none",
  cm: "/* ${0} */",
  cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
  coi: "counter-increment",
  colm: "columns",
  colmc: "column-count",
  colmf: "column-fill",
  colmg: "column-gap",
  colmr: "column-rule",
  colmrc: "column-rule-color",
  colmrs: "column-rule-style",
  colmrw: "column-rule-width",
  colms: "column-span",
  colmw: "column-width",
  cor: "counter-reset",
  cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
  cps: "caption-side:top|bottom",
  cur: "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
  d: "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|contents|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
  ec: "empty-cells:show|hide",
  f: "font:${1:1em} ${2:sans-serif}",
  fd: "font-display:auto|block|swap|fallback|optional",
  fef: "font-effect:none|engrave|emboss|outline",
  fem: "font-emphasize",
  femp: "font-emphasize-position:before|after",
  fems: "font-emphasize-style:none|accent|dot|circle|disc",
  ff: "font-family:serif|sans-serif|cursive|fantasy|monospace",
  fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
  ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
  ffv: "font-family:Verdana, Geneva, sans-serif",
  fl: "float:left|right|none",
  fs: "font-style:italic|normal|oblique",
  fsm: "font-smoothing:antialiased|subpixel-antialiased|none",
  fst: "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
  fv: "font-variant:normal|small-caps",
  fvs: "font-variation-settings:normal|inherit|initial|unset",
  fw: "font-weight:normal|bold|bolder|lighter",
  fx: "flex",
  fxb: "flex-basis:fill|max-content|min-content|fit-content|content",
  fxd: "flex-direction:row|row-reverse|column|column-reverse",
  fxf: "flex-flow",
  fxg: "flex-grow",
  fxsh: "flex-shrink",
  fxw: "flex-wrap:nowrap|wrap|wrap-reverse",
  fsz: "font-size",
  fsza: "font-size-adjust",
  g: "gap",
  gtc: "grid-template-columns:repeat(${0})|minmax()",
  gtr: "grid-template-rows:repeat(${0})|minmax()",
  gta: "grid-template-areas",
  gt: "grid-template",
  gg: "grid-gap",
  gcg: "grid-column-gap",
  grg: "grid-row-gap",
  gac: "grid-auto-columns:auto|minmax()",
  gar: "grid-auto-rows:auto|minmax()",
  gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset",
  gd: "grid",
  gc: "grid-column",
  gcs: "grid-column-start",
  gce: "grid-column-end",
  gr: "grid-row",
  grs: "grid-row-start",
  gre: "grid-row-end",
  ga: "grid-area",
  h: "height",
  is: "inline-size",
  jc: "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
  ji: "justify-items:start|end|center|stretch",
  js: "justify-self:start|end|center|stretch",
  l: "left",
  lg: "background-image:linear-gradient(${1})",
  lh: "line-height",
  lis: "list-style",
  lisi: "list-style-image",
  lisp: "list-style-position:inside|outside",
  list: "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
  lts: "letter-spacing:normal",
  m: "margin",
  mah: "max-height",
  mar: "max-resolution",
  maw: "max-width",
  mb: "margin-bottom",
  mih: "min-height",
  mir: "min-resolution",
  miw: "min-width",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  mbs: "margin-block-start",
  mbe: "margin-block-end",
  mis: "margin-inline-start",
  mie: "margin-inline-end",
  ol: "outline",
  olc: "outline-color:${1:#000}|invert",
  olo: "outline-offset",
  ols: "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
  olw: "outline-width:thin|medium|thick",
  "op|opa": "opacity",
  ord: "order",
  ori: "orientation:landscape|portrait",
  orp: "orphans",
  ov: "overflow:hidden|visible|hidden|scroll|auto",
  ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
  ovx: "overflow-x:hidden|visible|hidden|scroll|auto",
  ovy: "overflow-y:hidden|visible|hidden|scroll|auto",
  p: "padding",
  pb: "padding-bottom",
  pgba: "page-break-after:auto|always|left|right",
  pgbb: "page-break-before:auto|always|left|right",
  pgbi: "page-break-inside:auto|avoid",
  pl: "padding-left",
  pos: "position:relative|absolute|relative|fixed|static",
  pr: "padding-right",
  pt: "padding-top",
  pbs: "padding-block-start",
  pbe: "padding-block-end",
  pis: "padding-inline-start",
  pie: "padding-inline-end",
  spbs: "scroll-padding-block-start",
  spbe: "scroll-padding-block-end",
  spis: "scroll-padding-inline-start",
  spie: "scroll-padding-inline-end",
  q: "quotes",
  qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
  qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
  r: "right",
  rsz: "resize:none|both|horizontal|vertical",
  t: "top",
  ta: "text-align:left|center|right|justify",
  tal: "text-align-last:left|center|right",
  tbl: "table-layout:fixed",
  td: "text-decoration:none|underline|overline|line-through",
  te: "text-emphasis:none|accent|dot|circle|disc|before|after",
  th: "text-height:auto|font-size|text-size|max-size",
  ti: "text-indent",
  tj: "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
  to: "text-outline:${1:0} ${2:0} ${3:#000}",
  tov: "text-overflow:ellipsis|clip",
  tr: "text-replace",
  trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
  trfo: "transform-origin",
  trfs: "transform-style:preserve-3d",
  trs: "transition:${1:prop} ${2:time}",
  trsde: "transition-delay:${1:time}",
  trsdu: "transition-duration:${1:time}",
  trsp: "transition-property:${1:prop}",
  trstf: "transition-timing-function:${1:fn}",
  tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
  tt: "text-transform:uppercase|lowercase|capitalize|none",
  tw: "text-wrap:none|normal|unrestricted|suppress",
  us: "user-select:none",
  v: "visibility:hidden|visible|collapse",
  va: "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
  "w|wid": "width",
  whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal",
  whsc: "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
  wido: "widows",
  wm: "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
  wob: "word-break:normal|keep-all|break-all",
  wos: "word-spacing",
  wow: "word-wrap:none|unrestricted|suppress|break-word|normal",
  z: "z-index",
  zom: "zoom:1"
}, Bu = {
  "tm|tmatch": "xsl:template[match mode]",
  "tn|tname": "xsl:template[name]",
  call: "xsl:call-template[name]",
  ap: "xsl:apply-templates[select mode]",
  api: "xsl:apply-imports",
  imp: "xsl:import[href]",
  inc: "xsl:include[href]",
  ch: "xsl:choose",
  "wh|xsl:when": "xsl:when[test]",
  ot: "xsl:otherwise",
  if: "xsl:if[test]",
  par: "xsl:param[name]",
  pare: "xsl:param[name select]",
  var: "xsl:variable[name]",
  vare: "xsl:variable[name select]",
  wp: "xsl:with-param[name select]",
  key: "xsl:key[name match use]",
  elem: "xsl:element[name]",
  attr: "xsl:attribute[name]",
  attrs: "xsl:attribute-set[name]",
  cp: "xsl:copy[select]",
  co: "xsl:copy-of[select]",
  val: "xsl:value-of[select]",
  "for|each": "xsl:for-each[select]",
  tex: "xsl:text",
  com: "xsl:comment",
  msg: "xsl:message[terminate=no]",
  fall: "xsl:fallback",
  num: "xsl:number[value]",
  nam: "namespace-alias[stylesheet-prefix result-prefix]",
  pres: "xsl:preserve-space[elements]",
  strip: "xsl:strip-space[elements]",
  proc: "xsl:processing-instruction[name]",
  sort: "xsl:sort[select order]",
  choose: "xsl:choose>xsl:when+xsl:otherwise",
  xsl: `!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{
|}`,
  "!!!": '{<?xml version="1.0" encoding="UTF-8"?>}'
}, Vu = {
  "!!!": "{doctype html}"
}, qu = {
  lang: "en",
  locale: "en-US",
  charset: "UTF-8",
  indentation: "	",
  newline: `
`
};
const Yu = {
  markup: "html",
  stylesheet: "css"
}, Gu = {
  inlineElements: [
    "a",
    "abbr",
    "acronym",
    "applet",
    "b",
    "basefont",
    "bdo",
    "big",
    "br",
    "button",
    "cite",
    "code",
    "del",
    "dfn",
    "em",
    "font",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "object",
    "q",
    "s",
    "samp",
    "select",
    "small",
    "span",
    "strike",
    "strong",
    "sub",
    "sup",
    "textarea",
    "tt",
    "u",
    "var"
  ],
  "output.indent": "	",
  "output.baseIndent": "",
  "output.newline": `
`,
  "output.tagCase": "",
  "output.attributeCase": "",
  "output.attributeQuotes": "double",
  "output.format": !0,
  "output.formatLeafNode": !1,
  "output.formatSkip": ["html"],
  "output.formatForce": ["body"],
  "output.inlineBreak": 3,
  "output.compactBoolean": !1,
  "output.booleanAttributes": [
    "contenteditable",
    "seamless",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "novalidate",
    "readonly",
    "required",
    "reversed",
    "selected",
    "typemustmatch"
  ],
  "output.reverseAttributes": !1,
  "output.selfClosingStyle": "html",
  "output.field": (e, r) => r,
  "output.text": (e) => e,
  "markup.href": !0,
  "comment.enabled": !1,
  "comment.trigger": ["id", "class"],
  "comment.before": "",
  "comment.after": `
<!-- /[#ID][.CLASS] -->`,
  "bem.enabled": !1,
  "bem.element": "__",
  "bem.modifier": "_",
  "jsx.enabled": !1,
  "stylesheet.keywords": ["auto", "inherit", "unset", "none"],
  "stylesheet.unitless": ["z-index", "line-height", "opacity", "font-weight", "zoom", "flex", "flex-grow", "flex-shrink"],
  "stylesheet.shortHex": !0,
  "stylesheet.between": ": ",
  "stylesheet.after": ";",
  "stylesheet.intUnit": "px",
  "stylesheet.floatUnit": "em",
  "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" },
  "stylesheet.json": !1,
  "stylesheet.jsonDoubleQuotes": !1,
  "stylesheet.fuzzySearchMinScore": 0
}, Ji = {
  type: "markup",
  syntax: "html",
  variables: qu,
  snippets: {},
  options: Gu
}, So = {
  markup: {
    snippets: kr(Uu)
  },
  xhtml: {
    options: {
      "output.selfClosingStyle": "xhtml"
    }
  },
  xml: {
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  xsl: {
    snippets: kr(Bu),
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  jsx: {
    options: {
      "jsx.enabled": !0,
      "markup.attributes": {
        class: "className",
        "class*": "styleName",
        for: "htmlFor"
      },
      "markup.valuePrefix": {
        "class*": "styles"
      }
    }
  },
  vue: {
    options: {
      "markup.attributes": {
        "class*": ":class"
      }
    }
  },
  svelte: {
    options: {
      "jsx.enabled": !0
    }
  },
  pug: {
    snippets: kr(Vu)
  },
  stylesheet: {
    snippets: kr(Wu)
  },
  sass: {
    options: {
      "stylesheet.after": ""
    }
  },
  stylus: {
    options: {
      "stylesheet.between": " ",
      "stylesheet.after": ""
    }
  }
};
function kr(e) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    for (const o of n.split("|"))
      r[o] = e[n];
  }), r;
}
function Qi(e = {}, r = {}) {
  const n = e.type || "markup", o = e.syntax || Yu[n];
  return Object.assign(Object.assign(Object.assign({}, Ji), e), {
    type: n,
    syntax: o,
    variables: Zr(n, o, "variables", e, r),
    snippets: Zr(n, o, "snippets", e, r),
    options: Zr(n, o, "options", e, r)
  });
}
function Zr(e, r, n, o, a = {}) {
  const l = So[e], d = a[e], v = So[r], w = a[r];
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ji[n]), l && l[n]), v && v[n]), d && d[n]), w && w[n]), o[n]);
}
function Ki(e, r = 0) {
  return { text: e, start: r, pos: e.length };
}
function Lt(e) {
  return e.pos === e.start;
}
function pr(e, r = 0) {
  return e.text.charCodeAt(e.pos - 1 + r);
}
function Eo(e) {
  if (!Lt(e))
    return e.text.charCodeAt(--e.pos);
}
function mt(e, r) {
  if (Lt(e))
    return !1;
  const n = typeof r == "function" ? r(pr(e)) : r === pr(e);
  return n && e.pos--, !!n;
}
function Xi(e, r) {
  const n = e.pos;
  for (; mt(e, r); )
    ;
  return e.pos < n;
}
var dr;
(function(e) {
  e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Escape = 92] = "Escape";
})(dr || (dr = {}));
function In(e) {
  return e === dr.SingleQuote || e === dr.DoubleQuote;
}
function Ju(e) {
  const r = e.pos, n = Eo(e);
  if (In(n)) {
    for (; !Lt(e); )
      if (Eo(e) === n && pr(e) !== dr.Escape)
        return !0;
  }
  return e.pos = r, !1;
}
var Oe;
(function(e) {
  e[e.SquareL = 91] = "SquareL", e[e.SquareR = 93] = "SquareR", e[e.RoundL = 40] = "RoundL", e[e.RoundR = 41] = "RoundR", e[e.CurlyL = 123] = "CurlyL", e[e.CurlyR = 125] = "CurlyR";
})(Oe || (Oe = {}));
const Hi = {
  [Oe.SquareL]: Oe.SquareR,
  [Oe.RoundL]: Oe.RoundR,
  [Oe.CurlyL]: Oe.CurlyR
};
var ct;
(function(e) {
  e[e.Tab = 9] = "Tab", e[e.Space = 32] = "Space", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Colon = 58] = "Colon", e[e.Equals = 61] = "Equals", e[e.AngleLeft = 60] = "AngleLeft", e[e.AngleRight = 62] = "AngleRight";
})(ct || (ct = {}));
function Qu(e) {
  const r = e.pos;
  if (!mt(e, ct.AngleRight))
    return !1;
  let n = !1;
  for (mt(e, ct.Slash); !Lt(e); ) {
    if (Xi(e, bn), Fr(e)) {
      if (mt(e, ct.Slash)) {
        n = mt(e, ct.AngleLeft);
        break;
      } else if (mt(e, ct.AngleLeft)) {
        n = !0;
        break;
      } else {
        if (mt(e, bn))
          continue;
        if (mt(e, ct.Equals)) {
          if (Fr(e))
            continue;
          break;
        } else if (Zi(e)) {
          n = !0;
          break;
        }
      }
      break;
    }
    if (!Ku(e))
      break;
  }
  return e.pos = r, n;
}
function Ku(e) {
  return Xu(e) || Zi(e);
}
function Xu(e) {
  const r = e.pos;
  return Ju(e) && mt(e, ct.Equals) && Fr(e) ? !0 : (e.pos = r, !1);
}
function Zi(e) {
  const r = e.pos, n = [];
  for (; !Lt(e); ) {
    const o = pr(e);
    if (nf(o))
      n.push(o);
    else if (rf(o)) {
      if (n.pop() !== Hi[o])
        break;
    } else if (!tf(o))
      break;
    e.pos--;
  }
  return r !== e.pos && mt(e, ct.Equals) && Fr(e) ? !0 : (e.pos = r, !1);
}
function Fr(e) {
  return Xi(e, Hu);
}
function Hu(e) {
  return e === ct.Colon || e === ct.Dash || Zu(e) || ef(e);
}
function Zu(e) {
  return e &= -33, e >= 65 && e <= 90;
}
function ef(e) {
  return e > 47 && e < 58;
}
function bn(e) {
  return e === ct.Space || e === ct.Tab;
}
function tf(e) {
  return !isNaN(e) && e !== ct.Equals && !bn(e) && !In(e);
}
function rf(e) {
  return e === Oe.CurlyL || e === Oe.RoundL || e === Oe.SquareL;
}
function nf(e) {
  return e === Oe.CurlyR || e === Oe.RoundR || e === Oe.SquareR;
}
const ea = (e) => e.charCodeAt(0), of = "#.*:$-_!@%^+>/".split("").map(ea), af = {
  type: "markup",
  lookAhead: !0,
  prefix: ""
};
function sf(e, r = e.length, n = {}) {
  const o = Object.assign(Object.assign({}, af), n);
  r = Math.min(e.length, Math.max(0, r ?? e.length)), o.lookAhead && (r = lf(e, r, o));
  let a;
  const l = cf(e, r, o.prefix || "");
  if (l === -1)
    return;
  const d = Ki(e, l);
  d.pos = r;
  const v = [];
  for (; !Lt(d); ) {
    if (a = pr(d), v.includes(Oe.CurlyR)) {
      if (a === Oe.CurlyR) {
        v.push(a), d.pos--;
        continue;
      }
      if (a !== Oe.CurlyL) {
        d.pos--;
        continue;
      }
    }
    if (ta(a, o.type))
      v.push(a);
    else if (pf(a, o.type)) {
      if (v.pop() !== Hi[a])
        break;
    } else if (v.includes(Oe.SquareR) || v.includes(Oe.CurlyR)) {
      d.pos--;
      continue;
    } else if (Qu(d) || !ff(a))
      break;
    d.pos--;
  }
  if (!v.length && d.pos !== r) {
    const w = e.slice(d.pos, r).replace(/^[*+>^]+/, "");
    return {
      abbreviation: w,
      location: r - w.length,
      start: n.prefix ? l - n.prefix.length : r - w.length,
      end: r
    };
  }
}
function lf(e, r, n) {
  for (In(e.charCodeAt(r)) && r++; ta(e.charCodeAt(r), n.type); )
    r++;
  return r;
}
function cf(e, r, n) {
  if (!n)
    return 0;
  const o = Ki(e), a = n.split("").map(ea);
  o.pos = r;
  let l;
  for (; !Lt(o); )
    if (!($o(o, Oe.SquareR, Oe.SquareL) || $o(o, Oe.CurlyR, Oe.CurlyL))) {
      if (l = o.pos, uf(o, a))
        return l;
      o.pos--;
    }
  return -1;
}
function $o(e, r, n) {
  const o = e.pos;
  if (mt(e, r))
    for (; !Lt(e); ) {
      if (mt(e, n))
        return !0;
      e.pos--;
    }
  return e.pos = o, !1;
}
function uf(e, r) {
  const n = e.pos;
  let o = !1;
  for (let a = r.length - 1; a >= 0 && !Lt(e) && mt(e, r[a]); a--)
    o = a === 0;
  return o || (e.pos = n), o;
}
function ff(e) {
  return e > 64 && e < 91 || e > 96 && e < 123 || e > 47 && e < 58 || of.includes(e);
}
function pf(e, r) {
  return e === Oe.RoundL || r === "markup" && (e === Oe.SquareL || e === Oe.CurlyL);
}
function ta(e, r) {
  return e === Oe.RoundR || r === "markup" && (e === Oe.SquareR || e === Oe.CurlyR);
}
function ra(e, r) {
  const n = Qi(r);
  return n.type === "stylesheet" ? mf(e, n) : df(e, n);
}
function df(e, r) {
  return cu(lu(e, r), r);
}
function mf(e, r) {
  return Su(Tu(e, r), r);
}
const hf = {
  properties: ["additive-symbols", "align-content", "align-items", "justify-items", "justify-self", "justify-items", "align-self", "all", "alt", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "behavior", "block-size", "border", "border-block-end", "border-block-start", "border-block-end-color", "border-block-start-color", "border-block-end-style", "border-block-start-style", "border-block-end-width", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline-end", "border-inline-start", "border-inline-end-color", "border-inline-start-color", "border-inline-end-style", "border-inline-start-style", "border-inline-end-width", "border-inline-start-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-interpolation-filters", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "columns", "column-span", "column-width", "contain", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "enable-background", "fallback", "fill", "fill-opacity", "fill-rule", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "height", "hyphens", "image-orientation", "image-rendering", "ime-mode", "inline-size", "isolation", "justify-content", "kerning", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marker", "marker-end", "marker-mid", "marker-start", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "motion", "motion-offset", "motion-path", "motion-rotation", "-moz-animation", "-moz-animation-delay", "-moz-animation-direction", "-moz-animation-duration", "-moz-animation-iteration-count", "-moz-animation-name", "-moz-animation-play-state", "-moz-animation-timing-function", "-moz-appearance", "-moz-backface-visibility", "-moz-background-clip", "-moz-background-inline-policy", "-moz-background-origin", "-moz-border-bottom-colors", "-moz-border-image", "-moz-border-left-colors", "-moz-border-right-colors", "-moz-border-top-colors", "-moz-box-align", "-moz-box-direction", "-moz-box-flex", "-moz-box-flexgroup", "-moz-box-ordinal-group", "-moz-box-orient", "-moz-box-pack", "-moz-box-sizing", "-moz-column-count", "-moz-column-gap", "-moz-column-rule", "-moz-column-rule-color", "-moz-column-rule-style", "-moz-column-rule-width", "-moz-columns", "-moz-column-width", "-moz-font-feature-settings", "-moz-hyphens", "-moz-perspective", "-moz-perspective-origin", "-moz-text-align-last", "-moz-text-decoration-color", "-moz-text-decoration-line", "-moz-text-decoration-style", "-moz-text-size-adjust", "-moz-transform", "-moz-transform-origin", "-moz-transition", "-moz-transition-delay", "-moz-transition-duration", "-moz-transition-property", "-moz-transition-timing-function", "-moz-user-focus", "-moz-user-select", "-ms-accelerator", "-ms-behavior", "-ms-block-progression", "-ms-content-zoom-chaining", "-ms-content-zooming", "-ms-content-zoom-limit", "-ms-content-zoom-limit-max", "-ms-content-zoom-limit-min", "-ms-content-zoom-snap", "-ms-content-zoom-snap-points", "-ms-content-zoom-snap-type", "-ms-filter", "-ms-flex", "-ms-flex-align", "-ms-flex-direction", "-ms-flex-flow", "-ms-flex-item-align", "-ms-flex-line-pack", "-ms-flex-order", "-ms-flex-pack", "-ms-flex-wrap", "-ms-flow-from", "-ms-flow-into", "-ms-grid-column", "-ms-grid-column-align", "-ms-grid-columns", "-ms-grid-column-span", "-ms-grid-layer", "-ms-grid-row", "-ms-grid-row-align", "-ms-grid-rows", "-ms-grid-row-span", "-ms-high-contrast-adjust", "-ms-hyphenate-limit-chars", "-ms-hyphenate-limit-lines", "-ms-hyphenate-limit-zone", "-ms-hyphens", "-ms-ime-mode", "-ms-interpolation-mode", "-ms-layout-grid", "-ms-layout-grid-char", "-ms-layout-grid-line", "-ms-layout-grid-mode", "-ms-layout-grid-type", "-ms-line-break", "-ms-overflow-style", "-ms-perspective", "-ms-perspective-origin", "-ms-perspective-origin-x", "-ms-perspective-origin-y", "-ms-progress-appearance", "-ms-scrollbar-3dlight-color", "-ms-scrollbar-arrow-color", "-ms-scrollbar-base-color", "-ms-scrollbar-darkshadow-color", "-ms-scrollbar-face-color", "-ms-scrollbar-highlight-color", "-ms-scrollbar-shadow-color", "-ms-scrollbar-track-color", "-ms-scroll-chaining", "-ms-scroll-limit", "-ms-scroll-limit-x-max", "-ms-scroll-limit-x-min", "-ms-scroll-limit-y-max", "-ms-scroll-limit-y-min", "-ms-scroll-rails", "-ms-scroll-snap-points-x", "-ms-scroll-snap-points-y", "-ms-scroll-snap-type", "-ms-scroll-snap-x", "-ms-scroll-snap-y", "-ms-scroll-translation", "-ms-text-align-last", "-ms-text-autospace", "-ms-text-combine-horizontal", "-ms-text-justify", "-ms-text-kashida-space", "-ms-text-overflow", "-ms-text-size-adjust", "-ms-text-underline-position", "-ms-touch-action", "-ms-touch-select", "-ms-transform", "-ms-transform-origin", "-ms-transform-origin-x", "-ms-transform-origin-y", "-ms-transform-origin-z", "-ms-user-select", "-ms-word-break", "-ms-word-wrap", "-ms-wrap-flow", "-ms-wrap-margin", "-ms-wrap-through", "-ms-writing-mode", "-ms-zoom", "-ms-zoom-animation", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "negative", "-o-animation", "-o-animation-delay", "-o-animation-direction", "-o-animation-duration", "-o-animation-fill-mode", "-o-animation-iteration-count", "-o-animation-name", "-o-animation-play-state", "-o-animation-timing-function", "object-fit", "object-position", "-o-border-image", "-o-object-fit", "-o-object-position", "opacity", "order", "orphans", "-o-table-baseline", "-o-tab-size", "-o-text-overflow", "-o-transform", "-o-transform-origin", "-o-transition", "-o-transition-delay", "-o-transition-duration", "-o-transition-property", "-o-transition-timing-function", "offset-block-end", "offset-block-start", "offset-inline-end", "offset-inline-start", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "pad", "padding", "padding-bottom", "padding-block-end", "padding-block-start", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "paint-order", "perspective", "perspective-origin", "pointer-events", "position", "prefix", "quotes", "range", "resize", "right", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scrollbar-3dlight-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-darkshadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "scroll-behavior", "scroll-snap-coordinate", "scroll-snap-destination", "scroll-snap-points-x", "scroll-snap-points-y", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "size", "src", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "suffix", "system", "symbols", "table-layout", "tab-size", "text-align", "text-align-last", "text-anchor", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "unicode-range", "user-select", "vertical-align", "visibility", "-webkit-animation", "-webkit-animation-delay", "-webkit-animation-direction", "-webkit-animation-duration", "-webkit-animation-fill-mode", "-webkit-animation-iteration-count", "-webkit-animation-name", "-webkit-animation-play-state", "-webkit-animation-timing-function", "-webkit-appearance", "-webkit-backdrop-filter", "-webkit-backface-visibility", "-webkit-background-clip", "-webkit-background-composite", "-webkit-background-origin", "-webkit-border-image", "-webkit-box-align", "-webkit-box-direction", "-webkit-box-flex", "-webkit-box-flex-group", "-webkit-box-ordinal-group", "-webkit-box-orient", "-webkit-box-pack", "-webkit-box-reflect", "-webkit-box-sizing", "-webkit-break-after", "-webkit-break-before", "-webkit-break-inside", "-webkit-column-break-after", "-webkit-column-break-before", "-webkit-column-break-inside", "-webkit-column-count", "-webkit-column-gap", "-webkit-column-rule", "-webkit-column-rule-color", "-webkit-column-rule-style", "-webkit-column-rule-width", "-webkit-columns", "-webkit-column-span", "-webkit-column-width", "-webkit-filter", "-webkit-flow-from", "-webkit-flow-into", "-webkit-font-feature-settings", "-webkit-hyphens", "-webkit-line-break", "-webkit-margin-bottom-collapse", "-webkit-margin-collapse", "-webkit-margin-start", "-webkit-margin-top-collapse", "-webkit-mask-clip", "-webkit-mask-image", "-webkit-mask-origin", "-webkit-mask-repeat", "-webkit-mask-size", "-webkit-nbsp-mode", "-webkit-overflow-scrolling", "-webkit-padding-start", "-webkit-perspective", "-webkit-perspective-origin", "-webkit-region-fragment", "-webkit-tap-highlight-color", "-webkit-text-fill-color", "-webkit-text-size-adjust", "-webkit-text-stroke", "-webkit-text-stroke-color", "-webkit-text-stroke-width", "-webkit-touch-callout", "-webkit-transform", "-webkit-transform-origin", "-webkit-transform-origin-x", "-webkit-transform-origin-y", "-webkit-transform-origin-z", "-webkit-transform-style", "-webkit-transition", "-webkit-transition-delay", "-webkit-transition-duration", "-webkit-transition-property", "-webkit-transition-timing-function", "-webkit-user-drag", "-webkit-user-modify", "-webkit-user-select", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "zoom"]
}, na = {
  tags: [
    "body",
    "head",
    "html",
    "address",
    "blockquote",
    "dd",
    "div",
    "section",
    "article",
    "aside",
    "header",
    "footer",
    "nav",
    "menu",
    "dl",
    "dt",
    "fieldset",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "iframe",
    "noframes",
    "object",
    "ol",
    "p",
    "ul",
    "applet",
    "center",
    "dir",
    "hr",
    "pre",
    "a",
    "abbr",
    "acronym",
    "area",
    "b",
    "base",
    "basefont",
    "bdo",
    "big",
    "br",
    "button",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "del",
    "dfn",
    "em",
    "font",
    "i",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "map",
    "meta",
    "noscript",
    "optgroup",
    "option",
    "param",
    "q",
    "s",
    "samp",
    "script",
    "select",
    "small",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "tt",
    "u",
    "var",
    "canvas",
    "main",
    "figure",
    "plaintext",
    "figcaption",
    "hgroup",
    "details",
    "summary"
  ]
}, en = /* @__PURE__ */ new Map();
let yn;
const tn = /* @__PURE__ */ new Map(), gf = /^[a-z,A-Z,!,(,[,#,\.\{]/, bf = /^[a-z,A-Z,!,(,[,#,\.]/, yf = /^-?[a-z,A-Z,!,@,#]/, Ro = /[a-z,A-Z\.]/, mr = [...na.tags, "lorem"], xr = "bem", rn = "|", _r = "t", jr = "c", vf = 3;
function wf(e, r, n, o, a) {
  var l;
  const d = gr(o);
  if (!d) {
    if (!en.has(o)) {
      const Q = Object.assign(Object.assign({}, Sf(o)), Or[o]);
      en.set(o, Object.keys(Q));
    }
    yn = (l = en.get(o)) !== null && l !== void 0 ? l : [];
  }
  const v = {
    lookAhead: !d,
    type: Ln(o)
  }, w = $f(e, r, n, v);
  if (!w)
    return;
  const { abbreviationRange: $, abbreviation: E, currentLineTillPosition: D, filter: B } = w;
  if (kf(D) === E && D.endsWith(`<${E}`) && !d)
    return;
  const re = Cf(o, B);
  let X = "", ce, ye = [];
  if (((Q, T) => {
    if (Rf(Q, E)) {
      try {
        X = ra(T, re), d && "!important".startsWith(T) && (X = "!important");
      } catch {
      }
      !X || Of(Q, T, X, re.options) || (ce = {
        kind: e.languages.CompletionItemKind.Property,
        label: E + (B ? "|" + B.replace(",", "|") : ""),
        documentation: vn(X),
        detail: "Emmet abbreviation",
        insertTextRules: e.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range: $,
        insertText: wn(kn(X))
      }, ye = [ce]);
    }
  })(o, E), d) {
    if (E.length > 4 && hf.properties.some((Q) => Q.startsWith(E)))
      return { suggestions: [], incomplete: !0 };
    if (ce && X.length) {
      ce.range = $, ce.insertText = wn(kn(X)), ce.documentation = vn(X), ce.label = xf(X), ce.filterText = E;
      const Q = tn.has(o) ? tn.get(o) : tn.get("css");
      if (ye = nn(e, Q ?? [], E, E, $, re, "Emmet Custom Snippet", !1), !ye.find((T) => T.insertText === (ce == null ? void 0 : ce.insertText))) {
        const T = new RegExp(".*" + E.split("").map((H) => H === "$" || H === "+" ? "\\" + H : H).join(".*") + ".*", "i");
        (/\d/.test(E) || T.test(ce.label)) && ye.push(ce);
      }
    }
  } else {
    let Q = E;
    const T = E.match(/(>|\+)([\w:-]+)$/);
    if (T && T.length === 3 && (Q = T[2]), o !== "xml") {
      const H = nn(e, mr, Q, E, $, re, "Emmet Abbreviation");
      ye = ye.concat(H);
    }
    if (a.showAbbreviationSuggestions === !0) {
      const H = nn(e, yn.filter((Ae) => !mr.includes(Ae)), Q, E, $, re, "Emmet Abbreviation");
      ce && H.length > 0 && Q !== E && (ce.sortText = "0" + ce.label, H.forEach((Ae) => {
        Ae.filterText = E, Ae.sortText = "9" + E;
      })), ye = ye.concat(H);
    }
    o === "html" && ye.length >= 2 && E.includes(":") && (ce == null ? void 0 : ce.insertText) === `<${E}>\${0}</${E}>` && (ye = ye.filter((H) => H.label !== E));
  }
  return a.showSuggestionsAsSnippets === !0 && ye.forEach((Q) => Q.kind = e.languages.CompletionItemKind.Snippet), ye.length ? { suggestions: ye, incomplete: !0 } : void 0;
}
function nn(e, r, n, o, a, l, d, v = !0) {
  if (!n || !r)
    return [];
  const w = [];
  return r.forEach(($) => {
    if (!$.startsWith(n.toLowerCase()) || v && $ === n.toLowerCase())
      return;
    const E = o + $.substr(n.length);
    let D;
    try {
      D = ra(E, l);
    } catch {
    }
    if (!D)
      return;
    const B = {
      kind: e.languages.CompletionItemKind.Property,
      label: n + $.substr(n.length),
      documentation: vn(D),
      detail: d,
      insertTextRules: e.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: a,
      insertText: wn(kn(D))
    };
    w.push(B);
  }), w;
}
function kf(e) {
  if (e) {
    const r = e.match(/[\w,:,-,\.]*$/);
    if (r)
      return r[0];
  }
}
function vn(e) {
  return e.replace(/([^\\])\$\{\d+\}/g, "$1|").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function xf(e) {
  return e.replace(/([^\\])\$\{\d+\}/g, "$1").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function wn(e) {
  return e && e.replace(/([^\\])(\$)([^\{])/g, "$1\\$2$3");
}
function kn(e) {
  if (!e || !e.trim())
    return e;
  let r = -1, n = [], o = !1, a = !1, l = 0;
  const d = e.length;
  try {
    for (; l < d && !o; ) {
      if (e[l++] != "$" || e[l++] != "{")
        continue;
      let v = -1, w = -1;
      for (; l < d && /\d/.test(e[l]); )
        v = v < 0 ? l : v, w = l + 1, l++;
      if (v === -1 || w === -1 || l >= d || e[l] != "}" && e[l] != ":")
        continue;
      const $ = e.substring(v, w);
      if (o = $ === "0", o)
        break;
      let E = !1;
      if (e[l++] == ":")
        for (; l < d; ) {
          if (e[l] == "}") {
            E = !0;
            break;
          }
          l++;
        }
      Number($) > Number(r) ? (r = Number($), n = [{ numberStart: v, numberEnd: w }], a = !E) : Number($) === r && n.push({ numberStart: v, numberEnd: w });
    }
  } catch {
  }
  if (a && !o)
    for (let v = 0; v < n.length; v++) {
      const w = n[v].numberStart, $ = n[v].numberEnd;
      e = e.substr(0, w) + "0" + e.substr($);
    }
  return e;
}
let Or = {};
const _f = (e, r) => `\${${e}${r ? ":" + r : ""}}`;
function gr(e) {
  return e === "css";
}
function Ln(e) {
  return gr(e) ? "stylesheet" : "markup";
}
function jf(e) {
  return gr(e) ? "css" : "html";
}
function Sf(e) {
  const r = { type: Ln(e), syntax: e }, n = Qi(r);
  return e === "xml" ? {} : n.snippets;
}
function Ef(e, r) {
  let n;
  for (let o = 0; o < vf; o++)
    if (e.endsWith(`${rn}${xr}`, r))
      r -= xr.length + 1, n = n ? xr + "," + n : xr;
    else if (e.endsWith(`${rn}${jr}`, r))
      r -= jr.length + 1, n = n ? jr + "," + n : jr;
    else if (e.endsWith(`${rn}${_r}`, r))
      r -= _r.length + 1, n = n ? _r + "," + n : _r;
    else
      break;
  return {
    pos: r,
    filter: n
  };
}
function $f(e, r, n, o) {
  const a = r.getLineContent(n.lineNumber), l = a.substr(0, n.column - 1), { pos: d, filter: v } = Ef(l, n.column - 1), w = v ? v.length + 1 : 0, $ = sf(a, d, o);
  return $ ? {
    abbreviationRange: new e.Range(n.lineNumber, $.location + 1, n.lineNumber, $.location + $.abbreviation.length + w + 1),
    abbreviation: $.abbreviation,
    currentLineTillPosition: l,
    filter: v
  } : void 0;
}
function Rf(e, r) {
  if (!r)
    return !1;
  if (gr(e)) {
    if (r.includes("#")) {
      if (r.startsWith("#"))
        return /^#[\d,a-f,A-F]{1,6}$/.test(r);
      if (mr.includes(r.substring(0, r.indexOf("#"))))
        return !1;
    }
    return yf.test(r);
  }
  return r.startsWith("!") ? !/[^!]/.test(r) : (/\(/.test(r) || /\)/.test(r)) && !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(r) && !/\(.*\)[>\+\*\^]/.test(r) && !/\[[^\[\]\(\)]+=".*"\]/.test(r) && !/[>\+\*\^]\(.*\)/.test(r) ? !1 : e === "jsx" ? bf.test(r) && Ro.test(r) : gf.test(r) && Ro.test(r);
}
function Of(e, r, n, o) {
  var a, l;
  if (gr(e) && o) {
    const v = (a = o["stylesheet.between"]) !== null && a !== void 0 ? a : ": ", w = (l = o["stylesheet.after"]) !== null && l !== void 0 ? l : ";";
    let $ = r.indexOf(v[0], Math.max(r.length - v.length, 0));
    $ = $ >= 0 ? $ : r.length;
    const E = r.substring(0, $);
    return n === `${E}${v}\${0}${w}` || n.replace(/\s/g, "") === r.replace(/\s/g, "") + w;
  }
  if (e === "xml" && mr.some((v) => v.startsWith(r.toLowerCase())))
    return !0;
  if (mr.includes(r.toLowerCase()) || yn.includes(r) || /[-,:]/.test(r) && !/--|::/.test(r) && !r.endsWith(":") || r === ".")
    return !1;
  const d = r.match(/^([a-z,A-Z,\d]*)\.$/);
  return d ? !(d[1] && na.tags.includes(d[1])) : e === "jsx" && /^([A-Z][A-Za-z0-9]*)+$/.test(r) ? !1 : n.toLowerCase() === `<${r.toLowerCase()}>\${1}</${r.toLowerCase()}>`;
}
function Cf(e, r) {
  var n;
  const o = r ? r.split(",").map((E) => E.trim()) : [], a = o.includes("bem"), l = o.includes("c"), d = {
    "output.formatSkip": ["html"],
    "output.formatForce": ["body"],
    "output.field": _f,
    "output.inlineBreak": 0,
    "output.compactBoolean": !1,
    "output.reverseAttributes": !1,
    "markup.href": !0,
    "comment.enabled": l,
    "comment.trigger": ["id", "class"],
    "comment.before": "",
    "comment.after": `
<!-- /[#ID][.CLASS] -->`,
    "bem.enabled": a,
    "bem.element": "__",
    "bem.modifier": "_",
    "jsx.enabled": e === "jsx",
    "stylesheet.shortHex": !0,
    "stylesheet.between": e === "stylus" ? " " : ": ",
    "stylesheet.after": e === "sass" || e === "stylus" ? "" : ";",
    "stylesheet.intUnit": "px",
    "stylesheet.floatUnit": "em",
    "stylesheet.unitAliases": {
      e: "em",
      p: "%",
      x: "ex",
      r: "rem"
    },
    "stylesheet.fuzzySearchMinScore": 0.3,
    "output.format": !0,
    "output.selfClosingStyle": "html"
  }, v = Ln(e), w = jf(e), $ = v === "stylesheet" ? (n = Or[e]) !== null && n !== void 0 ? n : Or[w] : Or[e];
  return {
    type: v,
    options: d,
    variables: {},
    snippets: $,
    syntax: e,
    // context: null,
    text: void 0,
    maxRepeat: 1e3
    // cache: null
  };
}
function Tf(e, r, n, o) {
  const a = e[r], l = a.type;
  return n === "html" ? l === "" && (r === 0 || e[r - 1].type === "delimiter.html") || // #7 compatible with https://github.com/NeekSandhu/monaco-textmate
  e[0].type === "text.html.basic" : n === "css" ? l === "" ? !0 : l === "tag." + o : n === "jsx" ? a.language === "mdx" && l === "" ? !0 : !!r && ["identifier.js", "type.identifier.js", "identifier.ts", "type.identifier.ts"].includes(l) : !1;
}
const on = /* @__PURE__ */ new WeakMap();
function Pf(e) {
  if (on.has(e))
    return on.get(e);
  let r = (
    // monaco-editor < 0.34.0
    e._tokenization || // monaco-editor 0.34.0
    e.tokenization._tokenization
  ), n = r == null ? void 0 : r._tokenizationStateStore;
  if (!r || !n) {
    const l = e.tokenization;
    l.grammarTokens ? (r = l.grammarTokens._defaultBackgroundTokenizer, n = r._tokenizerWithStateStore) : (Object.values(l).some((d) => r = d.tokenizeViewport && d), Object.values(r).some((d) => n = d.tokenizationSupport && d));
  }
  const o = (
    // monaco-editor >= 0.32.0
    n.tokenizationSupport || // monaco-editor < 0.32.0
    r._tokenizationSupport
  ), a = {
    _stateStore: n,
    _support: o
  };
  return on.set(e, a), a;
}
function Df(e, r, n, o) {
  var a;
  const { column: l, lineNumber: d } = r, { _stateStore: v, _support: w } = Pf(e), $ = ((a = v.getBeginState) === null || a === void 0 ? void 0 : a.call(v, d - 1).clone()) || v.getStartState(d).clone(), E = w.tokenize(e.getLineContent(d), !0, $, 0).tokens;
  let D = !1;
  for (let B = E.length - 1; B >= 0; B--)
    if (l - 1 > E[B].offset) {
      D = Tf(E, B, n, o);
      break;
    }
  return D;
}
const Af = {
  html: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  jade: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  slim: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  haml: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  xml: [".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  xsl: ["!", ".", "}", "*", "$", "/", "]", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  css: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  scss: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  sass: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  less: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  stylus: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  javascript: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  typescript: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}, zf = {
  handlebars: "html",
  php: "html",
  twig: "html"
}, Nf = {
  showExpandedAbbreviation: "always",
  showAbbreviationSuggestions: !0,
  showSuggestionsAsSnippets: !1
};
function Mn(e, r, n) {
  if (!e) {
    console.error("emmet-monaco-es: 'monaco' should be either declared on window or passed as first parameter");
    return;
  }
  const o = r.map((a) => e.languages.registerCompletionItemProvider(a, {
    triggerCharacters: Af[zf[a] || a],
    provideCompletionItems: (l, d) => Df(l, d, n, a) ? wf(e, l, d, n, Nf) : void 0
  }));
  return () => {
    o.forEach((a) => a.dispose());
  };
}
function Ff(e = window.monaco, r = ["html"]) {
  return Mn(e, r, "html");
}
function If(e = window.monaco, r = ["css"]) {
  return Mn(e, r, "css");
}
function Lf(e = window.monaco, r = ["javascript"]) {
  return Mn(e, r, "jsx");
}
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode("*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.z-10{z-index:10}.flex{display:flex}.h-3{height:.75rem}.w-3{width:.75rem}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}.gap-1{gap:.25rem}.rounded-sm{border-radius:.125rem}.bg-slate-200{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.p-1{padding:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.dark\\:text-slate-50{--tw-text-opacity: 1;color:rgb(248 250 252 / var(--tw-text-opacity))}}")), document.head.appendChild(e);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
var xn = { exports: {} }, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function Mf() {
  if (Oo)
    return or;
  Oo = 1;
  var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, w, $) {
    var E, D = {}, B = null, re = null;
    $ !== void 0 && (B = "" + $), w.key !== void 0 && (B = "" + w.key), w.ref !== void 0 && (re = w.ref);
    for (E in w)
      o.call(w, E) && !l.hasOwnProperty(E) && (D[E] = w[E]);
    if (v && v.defaultProps)
      for (E in w = v.defaultProps, w)
        D[E] === void 0 && (D[E] = w[E]);
    return { $$typeof: r, type: v, key: B, ref: re, props: D, _owner: a.current };
  }
  return or.Fragment = n, or.jsx = d, or.jsxs = d, or;
}
var Sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function Uf() {
  return Co || (Co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = "@@iterator";
    function ye(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = X && t[X] || t[ce];
      return typeof i == "function" ? i : null;
    }
    var Q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          s[p - 1] = arguments[p];
        H("error", t, s);
      }
    }
    function H(t, i, s) {
      {
        var p = Q.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (i += "%s", s = s.concat([k]));
        var b = s.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var Ae = !1, Se = !1, $e = !1, ve = !1, ue = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || ue || t === a || t === $ || t === E || ve || t === re || Ae || Se || $e || typeof t == "object" && t !== null && (t.$$typeof === B || t.$$typeof === D || t.$$typeof === d || t.$$typeof === v || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === F || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var p = t.displayName;
      if (p)
        return p;
      var k = i.displayName || i.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function Ue(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case $:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var i = t;
            return Ue(i) + ".Consumer";
          case d:
            var s = t;
            return Ue(s._context) + ".Provider";
          case w:
            return ze(t, t.render, "ForwardRef");
          case D:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case B: {
            var k = t, b = k._payload, u = k._init;
            try {
              return M(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, V = 0, fe, De, Ne, Fe, Xe, te, me;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function he() {
      {
        if (V === 0) {
          fe = console.log, De = console.info, Ne = console.warn, Fe = console.error, Xe = console.group, te = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: fe
            }),
            info: J({}, t, {
              value: De
            }),
            warn: J({}, t, {
              value: Ne
            }),
            error: J({}, t, {
              value: Fe
            }),
            group: J({}, t, {
              value: Xe
            }),
            groupCollapsed: J({}, t, {
              value: te
            }),
            groupEnd: J({}, t, {
              value: me
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = Q.ReactCurrentDispatcher, Ie;
    function ie(t, i, s) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            Ie = p && p[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Be = !1, Pe;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new kt();
    }
    function nt(t, i) {
      if (!t || Be)
        return "";
      {
        var s = Pe.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      Be = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = We.current, We.current = null, he();
      try {
        if (i) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (h) {
              p = h;
            }
            Reflect.construct(t, [], u);
          } else {
            try {
              u.call();
            } catch (h) {
              p = h;
            }
            t.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            p = h;
          }
          t();
        }
      } catch (h) {
        if (h && p && typeof h.stack == "string") {
          for (var c = h.stack.split(`
`), g = p.stack.split(`
`), x = c.length - 1, j = g.length - 1; x >= 1 && j >= 0 && c[x] !== g[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== g[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== g[j]) {
                    var R = `
` + c[x].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && Pe.set(t, R), R;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, We.current = b, He(), Error.prepareStackTrace = k;
      }
      var I = t ? t.displayName || t.name : "", f = I ? ie(I) : "";
      return typeof t == "function" && Pe.set(t, f), f;
    }
    function xt(t, i, s) {
      return nt(t, !1);
    }
    function _t(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Te(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nt(t, _t(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case $:
          return ie("Suspense");
        case E:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return xt(t.render);
          case D:
            return Te(t.type, i, s);
          case B: {
            var p = t, k = p._payload, b = p._init;
            try {
              return Te(b(k), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ve = {}, Ze = Q.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(s);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ot(t, i, s, p, k) {
      {
        var b = Function.call.bind(we);
        for (var u in t)
          if (b(t, u)) {
            var c = void 0;
            try {
              if (typeof t[u] != "function") {
                var g = Error((p || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              c = t[u](i, u, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (Ee(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, u, typeof c), Ee(null)), c instanceof Error && !(c.message in Ve) && (Ve[c.message] = !0, Ee(k), T("Failed %s type: %s", s, c.message), Ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function Re(t) {
      return ht(t);
    }
    function ut(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function jt(t) {
      try {
        return it(t), !1;
      } catch {
        return !0;
      }
    }
    function it(t) {
      return "" + t;
    }
    function at(t) {
      if (jt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(t)), it(t);
    }
    var xe = Q.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, qe;
    qe = {};
    function Et(t) {
      if (we.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (we.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && xe.current && i && xe.current.stateNode !== i) {
        var s = M(xe.current.type);
        qe[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(xe.current.type), t.ref), qe[s] = !0);
      }
    }
    function Ot(t, i) {
      {
        var s = function() {
          st || (st = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(t, i) {
      {
        var s = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var et = function(t, i, s, p, k, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ft(t, i, s, p, k) {
      {
        var b, u = {}, c = null, g = null;
        s !== void 0 && (at(s), c = "" + s), $t(i) && (at(i.key), c = "" + i.key), Et(i) && (g = i.ref, Rt(i, k));
        for (b in i)
          we.call(i, b) && !St.hasOwnProperty(b) && (u[b] = i[b]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (b in x)
            u[b] === void 0 && (u[b] = x[b]);
        }
        if (c || g) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Ot(u, j), g && Ct(u, j);
        }
        return et(t, c, g, k, p, xe.current, u);
      }
    }
    var Le = Q.ReactCurrentOwner, Qe = Q.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Le.current) {
          var t = M(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function y(t) {
      return "";
    }
    var _ = {};
    function C(t) {
      {
        var i = m();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function A(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = C(i);
        if (_[s])
          return;
        _[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + M(t._owner.type) + "."), ge(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ge(null);
      }
    }
    function N(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Re(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ge(p) && A(p, i);
          }
        else if (Ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = ye(t);
          if (typeof k == "function" && k !== t.entries)
            for (var b = k.call(t), u; !(u = b.next()).done; )
              Ge(u.value) && A(u.value, i);
        }
      }
    }
    function z(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var p = M(i);
          ot(s, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var k = M(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function U(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var p = i[s];
          if (p !== "children" && p !== "key") {
            ge(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var O = {};
    function W(t, i, s, p, k, b) {
      {
        var u = ae(t);
        if (!u) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = y();
          g ? c += g : c += m();
          var x;
          t === null ? x = "null" : Re(t) ? x = "array" : t !== void 0 && t.$$typeof === r ? (x = "<" + (M(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ft(t, i, s, k, b);
        if (j == null)
          return j;
        if (u) {
          var R = i.children;
          if (R !== void 0)
            if (p)
              if (Re(R)) {
                for (var I = 0; I < R.length; I++)
                  N(R[I], t);
                Object.freeze && Object.freeze(R);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              N(R, t);
        }
        if (we.call(i, "key")) {
          var f = M(t), h = Object.keys(i).filter(function(Y) {
            return Y !== "key";
          }), P = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!O[f + P]) {
            var L = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, P, f, L, f), O[f + P] = !0;
          }
        }
        return t === o ? U(j) : z(j), j;
      }
    }
    function G(t, i, s) {
      return W(t, i, s, !0);
    }
    function K(t, i, s) {
      return W(t, i, s, !1);
    }
    var pe = K, Z = G;
    Sr.Fragment = o, Sr.jsx = pe, Sr.jsxs = Z;
  }()), Sr;
}
process.env.NODE_ENV === "production" ? xn.exports = Mf() : xn.exports = Uf();
var ir = xn.exports;
function Wf(e) {
  return navigator.clipboard.writeText(e);
}
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oa = (...e) => e.filter((r, n, o) => !!r && o.indexOf(r) === n).join(" ");
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = window.React.forwardRef, To = window.React.createElement, Yf = qf(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: a = "",
    children: l,
    iconNode: d,
    ...v
  }, w) => To(
    "svg",
    {
      ref: w,
      ...Vf,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(r) : n,
      className: oa("lucide", a),
      ...v
    },
    [
      ...d.map(([$, E]) => To($, E)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = window.React.forwardRef, Jf = window.React.createElement, ia = (e, r) => {
  const n = Gf(
    ({ className: o, ...a }, l) => Jf(Yf, {
      ref: l,
      iconNode: r,
      className: oa(`lucide-${Bf(e)}`, o),
      ...a
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = ia("CopyCheck", [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = ia("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]), Xf = window.React.useState;
function Hf({ className: e, text: r, onCopy: n }) {
  const [o, a] = Xf(!1);
  return /* @__PURE__ */ ir.jsx(
    "div",
    {
      title: "复制",
      className: `bg-slate-200 z-10 p-1 rounded-sm text-xs cursor-pointer flex justify-center items-center w-3 h-3 ${e}`,
      onClick: () => {
        Wf(r).then(() => {
          n == null || n(r), a(!0), setTimeout(() => {
            a(!1);
          }, 2e3);
        });
      },
      children: o ? /* @__PURE__ */ ir.jsx("div", { className: "flex gap-1", children: /* @__PURE__ */ ir.jsx(Qf, { className: "dark:text-slate-50", size: 14 }) }) : /* @__PURE__ */ ir.jsx("div", { className: "flex gap-1", children: /* @__PURE__ */ ir.jsx(
        Kf,
        {
          className: "cursor-pointer dark:text-slate-50 text-slate-900",
          size: 14
        }
      ) })
    }
  );
}
var _n = { exports: {} }, ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function Zf() {
  if (Po)
    return ar;
  Po = 1;
  var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, w, $) {
    var E, D = {}, B = null, re = null;
    $ !== void 0 && (B = "" + $), w.key !== void 0 && (B = "" + w.key), w.ref !== void 0 && (re = w.ref);
    for (E in w)
      o.call(w, E) && !l.hasOwnProperty(E) && (D[E] = w[E]);
    if (v && v.defaultProps)
      for (E in w = v.defaultProps, w)
        D[E] === void 0 && (D[E] = w[E]);
    return { $$typeof: r, type: v, key: B, ref: re, props: D, _owner: a.current };
  }
  return ar.Fragment = n, ar.jsx = d, ar.jsxs = d, ar;
}
var Er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function ep() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = "@@iterator";
    function ye(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = X && t[X] || t[ce];
      return typeof i == "function" ? i : null;
    }
    var Q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          s[p - 1] = arguments[p];
        H("error", t, s);
      }
    }
    function H(t, i, s) {
      {
        var p = Q.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (i += "%s", s = s.concat([k]));
        var b = s.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var Ae = !1, Se = !1, $e = !1, ve = !1, ue = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || ue || t === a || t === $ || t === E || ve || t === re || Ae || Se || $e || typeof t == "object" && t !== null && (t.$$typeof === B || t.$$typeof === D || t.$$typeof === d || t.$$typeof === v || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === F || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var p = t.displayName;
      if (p)
        return p;
      var k = i.displayName || i.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function Ue(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case $:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var i = t;
            return Ue(i) + ".Consumer";
          case d:
            var s = t;
            return Ue(s._context) + ".Provider";
          case w:
            return ze(t, t.render, "ForwardRef");
          case D:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case B: {
            var k = t, b = k._payload, u = k._init;
            try {
              return M(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, V = 0, fe, De, Ne, Fe, Xe, te, me;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function he() {
      {
        if (V === 0) {
          fe = console.log, De = console.info, Ne = console.warn, Fe = console.error, Xe = console.group, te = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: fe
            }),
            info: J({}, t, {
              value: De
            }),
            warn: J({}, t, {
              value: Ne
            }),
            error: J({}, t, {
              value: Fe
            }),
            group: J({}, t, {
              value: Xe
            }),
            groupCollapsed: J({}, t, {
              value: te
            }),
            groupEnd: J({}, t, {
              value: me
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = Q.ReactCurrentDispatcher, Ie;
    function ie(t, i, s) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            Ie = p && p[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Be = !1, Pe;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new kt();
    }
    function nt(t, i) {
      if (!t || Be)
        return "";
      {
        var s = Pe.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      Be = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = We.current, We.current = null, he();
      try {
        if (i) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (h) {
              p = h;
            }
            Reflect.construct(t, [], u);
          } else {
            try {
              u.call();
            } catch (h) {
              p = h;
            }
            t.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            p = h;
          }
          t();
        }
      } catch (h) {
        if (h && p && typeof h.stack == "string") {
          for (var c = h.stack.split(`
`), g = p.stack.split(`
`), x = c.length - 1, j = g.length - 1; x >= 1 && j >= 0 && c[x] !== g[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== g[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== g[j]) {
                    var R = `
` + c[x].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && Pe.set(t, R), R;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, We.current = b, He(), Error.prepareStackTrace = k;
      }
      var I = t ? t.displayName || t.name : "", f = I ? ie(I) : "";
      return typeof t == "function" && Pe.set(t, f), f;
    }
    function xt(t, i, s) {
      return nt(t, !1);
    }
    function _t(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Te(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nt(t, _t(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case $:
          return ie("Suspense");
        case E:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return xt(t.render);
          case D:
            return Te(t.type, i, s);
          case B: {
            var p = t, k = p._payload, b = p._init;
            try {
              return Te(b(k), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ve = {}, Ze = Q.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(s);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ot(t, i, s, p, k) {
      {
        var b = Function.call.bind(we);
        for (var u in t)
          if (b(t, u)) {
            var c = void 0;
            try {
              if (typeof t[u] != "function") {
                var g = Error((p || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              c = t[u](i, u, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (Ee(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, u, typeof c), Ee(null)), c instanceof Error && !(c.message in Ve) && (Ve[c.message] = !0, Ee(k), T("Failed %s type: %s", s, c.message), Ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function Re(t) {
      return ht(t);
    }
    function ut(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function jt(t) {
      try {
        return it(t), !1;
      } catch {
        return !0;
      }
    }
    function it(t) {
      return "" + t;
    }
    function at(t) {
      if (jt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(t)), it(t);
    }
    var xe = Q.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, qe;
    qe = {};
    function Et(t) {
      if (we.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (we.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && xe.current && i && xe.current.stateNode !== i) {
        var s = M(xe.current.type);
        qe[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(xe.current.type), t.ref), qe[s] = !0);
      }
    }
    function Ot(t, i) {
      {
        var s = function() {
          st || (st = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(t, i) {
      {
        var s = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var et = function(t, i, s, p, k, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ft(t, i, s, p, k) {
      {
        var b, u = {}, c = null, g = null;
        s !== void 0 && (at(s), c = "" + s), $t(i) && (at(i.key), c = "" + i.key), Et(i) && (g = i.ref, Rt(i, k));
        for (b in i)
          we.call(i, b) && !St.hasOwnProperty(b) && (u[b] = i[b]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (b in x)
            u[b] === void 0 && (u[b] = x[b]);
        }
        if (c || g) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Ot(u, j), g && Ct(u, j);
        }
        return et(t, c, g, k, p, xe.current, u);
      }
    }
    var Le = Q.ReactCurrentOwner, Qe = Q.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Le.current) {
          var t = M(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function y(t) {
      return "";
    }
    var _ = {};
    function C(t) {
      {
        var i = m();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function A(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = C(i);
        if (_[s])
          return;
        _[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + M(t._owner.type) + "."), ge(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ge(null);
      }
    }
    function N(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Re(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ge(p) && A(p, i);
          }
        else if (Ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = ye(t);
          if (typeof k == "function" && k !== t.entries)
            for (var b = k.call(t), u; !(u = b.next()).done; )
              Ge(u.value) && A(u.value, i);
        }
      }
    }
    function z(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var p = M(i);
          ot(s, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var k = M(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function U(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var p = i[s];
          if (p !== "children" && p !== "key") {
            ge(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var O = {};
    function W(t, i, s, p, k, b) {
      {
        var u = ae(t);
        if (!u) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = y();
          g ? c += g : c += m();
          var x;
          t === null ? x = "null" : Re(t) ? x = "array" : t !== void 0 && t.$$typeof === r ? (x = "<" + (M(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ft(t, i, s, k, b);
        if (j == null)
          return j;
        if (u) {
          var R = i.children;
          if (R !== void 0)
            if (p)
              if (Re(R)) {
                for (var I = 0; I < R.length; I++)
                  N(R[I], t);
                Object.freeze && Object.freeze(R);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              N(R, t);
        }
        if (we.call(i, "key")) {
          var f = M(t), h = Object.keys(i).filter(function(Y) {
            return Y !== "key";
          }), P = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!O[f + P]) {
            var L = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, P, f, L, f), O[f + P] = !0;
          }
        }
        return t === o ? U(j) : z(j), j;
      }
    }
    function G(t, i, s) {
      return W(t, i, s, !0);
    }
    function K(t, i, s) {
      return W(t, i, s, !1);
    }
    var pe = K, Z = G;
    Er.Fragment = o, Er.jsx = pe, Er.jsxs = Z;
  }()), Er;
}
process.env.NODE_ENV === "production" ? _n.exports = Zf() : _n.exports = ep();
var tp = _n.exports;
const rp = window.React;
class np extends rp.Component {
  constructor(r) {
    super(r), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  componentDidCatch(r, n) {
    console.error("ErrorBoundary caught an error", r, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ tp.jsx("h1", { children: "Something went wrong." }) : this.props.children;
  }
}
const op = window.React.useId, ip = window.React.useState, ap = window.React.useCallback;
Sn.config({
  paths: {
    vs: "https://unpkg.alibaba-inc.com/monaco-editor@0.51.0/min/vs"
  }
});
function Ao(e) {
  const r = op(), {
    defaultValue: n = "// this is comment",
    height: o = "100vh",
    theme: a = "vs-dark",
    path: l = `${r}.tsx`,
    value: d,
    onChange: v,
    onCopy: w,
    ...$
  } = e || {}, [E, D] = ip(d || n), B = ap((re, X) => {
    X && (X.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: X.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: !0,
      allowJs: !0,
      checkJs: !0
    }), X.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: !1,
      noSyntaxValidation: !1,
      noSuggestionDiagnostics: !1
    }), Ff(X, ["html"]), If(X, ["css", "less"]), Lf(X, ["typescript", "javascript"]));
  }, []);
  return /* @__PURE__ */ nr.jsx(np, { children: /* @__PURE__ */ nr.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ nr.jsx(Hf, { className: "absolute right-2 top-2", text: E, onCopy: w }),
    /* @__PURE__ */ nr.jsx(
      Ps,
      {
        height: o,
        defaultValue: n,
        value: d,
        theme: a,
        path: l,
        loading: /* @__PURE__ */ nr.jsx("div", { className: "text-sm text-slate-800", children: "加载中..." }),
        ...$,
        onMount: B,
        onChange: (re, X) => {
          D(re || ""), v == null || v(re, X);
        }
      }
    )
  ] }) });
}
const sp = window.React.useState, lp = window.antd.Tabs, an = "./App.tsx";
function cp({
  plagroundId: e,
  files: r,
  height: n,
  onChange: o
}) {
  const [a, l] = sp("./App.tsx");
  if (!r) return null;
  const d = Object.entries(r).map(([w, $]) => ({ filePath: w, fileCode: $ })).filter((w) => w.filePath !== "./index.tsx"), v = (w, $) => {
    const E = {
      ...r,
      [$]: w || ""
    };
    o(E);
  };
  return /* @__PURE__ */ tt.jsx("div", { className: "overflow-hidden relative", children: d.length > 1 ? /* @__PURE__ */ tt.jsx(
    lp,
    {
      defaultActiveKey: a,
      tabBarStyle: { margin: 0 },
      onChange: (w) => {
        l(w);
      },
      items: d.map((w) => {
        const { filePath: $, fileCode: E } = w, D = $.slice(2);
        return {
          key: $,
          label: D,
          children: /* @__PURE__ */ tt.jsx(
            Ao,
            {
              path: D,
              value: E,
              height: n,
              onChange: (B) => {
                v(B, $);
              }
            }
          )
        };
      })
    }
  ) : /* @__PURE__ */ tt.jsx(
    Ao,
    {
      path: `${e}/${an.slice(2)}`,
      value: r[an],
      height: n,
      onChange: (w) => {
        v(w, an);
      }
    }
  ) });
}
var jn = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function up() {
  if (zo) return sr;
  zo = 1;
  var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, w, $) {
    var E, D = {}, B = null, re = null;
    $ !== void 0 && (B = "" + $), w.key !== void 0 && (B = "" + w.key), w.ref !== void 0 && (re = w.ref);
    for (E in w) o.call(w, E) && !l.hasOwnProperty(E) && (D[E] = w[E]);
    if (v && v.defaultProps) for (E in w = v.defaultProps, w) D[E] === void 0 && (D[E] = w[E]);
    return { $$typeof: r, type: v, key: B, ref: re, props: D, _owner: a.current };
  }
  return sr.Fragment = n, sr.jsx = d, sr.jsxs = d, sr;
}
var $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function fp() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    var e = window.React, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = "@@iterator";
    function ye(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = X && t[X] || t[ce];
      return typeof i == "function" ? i : null;
    }
    var Q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          s[p - 1] = arguments[p];
        H("error", t, s);
      }
    }
    function H(t, i, s) {
      {
        var p = Q.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (i += "%s", s = s.concat([k]));
        var b = s.map(function(u) {
          return String(u);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var Ae = !1, Se = !1, $e = !1, ve = !1, ue = !1, F;
    F = Symbol.for("react.module.reference");
    function ae(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || ue || t === a || t === $ || t === E || ve || t === re || Ae || Se || $e || typeof t == "object" && t !== null && (t.$$typeof === B || t.$$typeof === D || t.$$typeof === d || t.$$typeof === v || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === F || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var p = t.displayName;
      if (p)
        return p;
      var k = i.displayName || i.name || "";
      return k !== "" ? s + "(" + k + ")" : s;
    }
    function Ue(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case $:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var i = t;
            return Ue(i) + ".Consumer";
          case d:
            var s = t;
            return Ue(s._context) + ".Provider";
          case w:
            return ze(t, t.render, "ForwardRef");
          case D:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case B: {
            var k = t, b = k._payload, u = k._init;
            try {
              return M(u(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, V = 0, fe, De, Ne, Fe, Xe, te, me;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function he() {
      {
        if (V === 0) {
          fe = console.log, De = console.info, Ne = console.warn, Fe = console.error, Xe = console.group, te = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: fe
            }),
            info: J({}, t, {
              value: De
            }),
            warn: J({}, t, {
              value: Ne
            }),
            error: J({}, t, {
              value: Fe
            }),
            group: J({}, t, {
              value: Xe
            }),
            groupCollapsed: J({}, t, {
              value: te
            }),
            groupEnd: J({}, t, {
              value: me
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = Q.ReactCurrentDispatcher, Ie;
    function ie(t, i, s) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            Ie = p && p[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Be = !1, Pe;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new kt();
    }
    function nt(t, i) {
      if (!t || Be)
        return "";
      {
        var s = Pe.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      Be = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = We.current, We.current = null, he();
      try {
        if (i) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (h) {
              p = h;
            }
            Reflect.construct(t, [], u);
          } else {
            try {
              u.call();
            } catch (h) {
              p = h;
            }
            t.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            p = h;
          }
          t();
        }
      } catch (h) {
        if (h && p && typeof h.stack == "string") {
          for (var c = h.stack.split(`
`), g = p.stack.split(`
`), x = c.length - 1, j = g.length - 1; x >= 1 && j >= 0 && c[x] !== g[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== g[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== g[j]) {
                    var R = `
` + c[x].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && Pe.set(t, R), R;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Be = !1, We.current = b, He(), Error.prepareStackTrace = k;
      }
      var I = t ? t.displayName || t.name : "", f = I ? ie(I) : "";
      return typeof t == "function" && Pe.set(t, f), f;
    }
    function xt(t, i, s) {
      return nt(t, !1);
    }
    function _t(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Te(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nt(t, _t(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case $:
          return ie("Suspense");
        case E:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return xt(t.render);
          case D:
            return Te(t.type, i, s);
          case B: {
            var p = t, k = p._payload, b = p._init;
            try {
              return Te(b(k), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ve = {}, Ze = Q.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(s);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ot(t, i, s, p, k) {
      {
        var b = Function.call.bind(we);
        for (var u in t)
          if (b(t, u)) {
            var c = void 0;
            try {
              if (typeof t[u] != "function") {
                var g = Error((p || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              c = t[u](i, u, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (Ee(k), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, u, typeof c), Ee(null)), c instanceof Error && !(c.message in Ve) && (Ve[c.message] = !0, Ee(k), T("Failed %s type: %s", s, c.message), Ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function Re(t) {
      return ht(t);
    }
    function ut(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function jt(t) {
      try {
        return it(t), !1;
      } catch {
        return !0;
      }
    }
    function it(t) {
      return "" + t;
    }
    function at(t) {
      if (jt(t))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(t)), it(t);
    }
    var xe = Q.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, qe;
    qe = {};
    function Et(t) {
      if (we.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (we.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && xe.current && i && xe.current.stateNode !== i) {
        var s = M(xe.current.type);
        qe[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(xe.current.type), t.ref), qe[s] = !0);
      }
    }
    function Ot(t, i) {
      {
        var s = function() {
          st || (st = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ct(t, i) {
      {
        var s = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var et = function(t, i, s, p, k, b, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ft(t, i, s, p, k) {
      {
        var b, u = {}, c = null, g = null;
        s !== void 0 && (at(s), c = "" + s), $t(i) && (at(i.key), c = "" + i.key), Et(i) && (g = i.ref, Rt(i, k));
        for (b in i)
          we.call(i, b) && !St.hasOwnProperty(b) && (u[b] = i[b]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (b in x)
            u[b] === void 0 && (u[b] = x[b]);
        }
        if (c || g) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Ot(u, j), g && Ct(u, j);
        }
        return et(t, c, g, k, p, xe.current, u);
      }
    }
    var Le = Q.ReactCurrentOwner, Qe = Q.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, s = Te(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Le.current) {
          var t = M(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function y(t) {
      return "";
    }
    var _ = {};
    function C(t) {
      {
        var i = m();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function A(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = C(i);
        if (_[s])
          return;
        _[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + M(t._owner.type) + "."), ge(t), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ge(null);
      }
    }
    function N(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Re(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ge(p) && A(p, i);
          }
        else if (Ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = ye(t);
          if (typeof k == "function" && k !== t.entries)
            for (var b = k.call(t), u; !(u = b.next()).done; )
              Ge(u.value) && A(u.value, i);
        }
      }
    }
    function z(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var p = M(i);
          ot(s, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var k = M(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function U(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var p = i[s];
          if (p !== "children" && p !== "key") {
            ge(t), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), T("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var O = {};
    function W(t, i, s, p, k, b) {
      {
        var u = ae(t);
        if (!u) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = y();
          g ? c += g : c += m();
          var x;
          t === null ? x = "null" : Re(t) ? x = "array" : t !== void 0 && t.$$typeof === r ? (x = "<" + (M(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ft(t, i, s, k, b);
        if (j == null)
          return j;
        if (u) {
          var R = i.children;
          if (R !== void 0)
            if (p)
              if (Re(R)) {
                for (var I = 0; I < R.length; I++)
                  N(R[I], t);
                Object.freeze && Object.freeze(R);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              N(R, t);
        }
        if (we.call(i, "key")) {
          var f = M(t), h = Object.keys(i).filter(function(Y) {
            return Y !== "key";
          }), P = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!O[f + P]) {
            var L = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, P, f, L, f), O[f + P] = !0;
          }
        }
        return t === o ? U(j) : z(j), j;
      }
    }
    function G(t, i, s) {
      return W(t, i, s, !0);
    }
    function K(t, i, s) {
      return W(t, i, s, !1);
    }
    var pe = K, Z = G;
    $r.Fragment = o, $r.jsx = pe, $r.jsxs = Z;
  }()), $r;
}
process.env.NODE_ENV === "production" ? jn.exports = up() : jn.exports = fp();
var pp = jn.exports;
const dp = window.React;
class mp extends dp.Component {
  constructor(r) {
    super(r), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  componentDidCatch(r, n) {
    console.error("ErrorBoundary caught an error", r, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ pp.jsx("h1", { children: "Something went wrong." }) : this.props.children;
  }
}
var aa = { exports: {} };
(function(e) {
  ((r) => {
    var n = Object.defineProperty, o = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, l = Object.prototype.hasOwnProperty, d = (m, y) => {
      for (var _ in y)
        n(m, _, { get: y[_], enumerable: !0 });
    }, v = (m, y, _, C) => {
      if (y && typeof y == "object" || typeof y == "function")
        for (let A of a(y))
          !l.call(m, A) && A !== _ && n(m, A, { get: () => y[A], enumerable: !(C = o(y, A)) || C.enumerable });
      return m;
    }, w = (m) => v(n({}, "__esModule", { value: !0 }), m), $ = (m, y, _) => new Promise((C, A) => {
      var N = (O) => {
        try {
          U(_.next(O));
        } catch (W) {
          A(W);
        }
      }, z = (O) => {
        try {
          U(_.throw(O));
        } catch (W) {
          A(W);
        }
      }, U = (O) => O.done ? C(O.value) : Promise.resolve(O.value).then(N, z);
      U((_ = _.apply(m, y)).next());
    }), E = {};
    d(E, {
      analyzeMetafile: () => qe,
      analyzeMetafileSync: () => Ot,
      build: () => xe,
      buildSync: () => Et,
      context: () => St,
      default: () => Ge,
      formatMessages: () => lt,
      formatMessagesSync: () => Rt,
      initialize: () => ge,
      stop: () => Ct,
      transform: () => st,
      transformSync: () => $t,
      version: () => at
    }), r.exports = w(E);
    function D(m) {
      let y = (C) => {
        if (C === null)
          _.write8(0);
        else if (typeof C == "boolean")
          _.write8(1), _.write8(+C);
        else if (typeof C == "number")
          _.write8(2), _.write32(C | 0);
        else if (typeof C == "string")
          _.write8(3), _.write(X(C));
        else if (C instanceof Uint8Array)
          _.write8(4), _.write(C);
        else if (C instanceof Array) {
          _.write8(5), _.write32(C.length);
          for (let A of C)
            y(A);
        } else {
          let A = Object.keys(C);
          _.write8(6), _.write32(A.length);
          for (let N of A)
            _.write(X(N)), y(C[N]);
        }
      }, _ = new re();
      return _.write32(0), _.write32(m.id << 1 | +!m.isRequest), y(m.value), T(_.buf, _.len - 4, 0), _.buf.subarray(0, _.len);
    }
    function B(m) {
      let y = () => {
        switch (_.read8()) {
          case 0:
            return null;
          case 1:
            return !!_.read8();
          case 2:
            return _.read32();
          case 3:
            return ce(_.read());
          case 4:
            return _.read();
          case 5: {
            let z = _.read32(), U = [];
            for (let O = 0; O < z; O++)
              U.push(y());
            return U;
          }
          case 6: {
            let z = _.read32(), U = {};
            for (let O = 0; O < z; O++)
              U[ce(_.read())] = y();
            return U;
          }
          default:
            throw new Error("Invalid packet");
        }
      }, _ = new re(m), C = _.read32(), A = (C & 1) === 0;
      C >>>= 1;
      let N = y();
      if (_.ptr !== m.length)
        throw new Error("Invalid packet");
      return { id: C, isRequest: A, value: N };
    }
    var re = class {
      constructor(m = new Uint8Array(1024)) {
        this.buf = m, this.len = 0, this.ptr = 0;
      }
      _write(m) {
        if (this.len + m > this.buf.length) {
          let y = new Uint8Array((this.len + m) * 2);
          y.set(this.buf), this.buf = y;
        }
        return this.len += m, this.len - m;
      }
      write8(m) {
        let y = this._write(1);
        this.buf[y] = m;
      }
      write32(m) {
        let y = this._write(4);
        T(this.buf, m, y);
      }
      write(m) {
        let y = this._write(4 + m.length);
        T(this.buf, m.length, y), this.buf.set(m, y + 4);
      }
      _read(m) {
        if (this.ptr + m > this.buf.length)
          throw new Error("Invalid packet");
        return this.ptr += m, this.ptr - m;
      }
      read8() {
        return this.buf[this._read(1)];
      }
      read32() {
        return Q(this.buf, this._read(4));
      }
      read() {
        let m = this.read32(), y = new Uint8Array(m), _ = this._read(y.length);
        return y.set(this.buf.subarray(_, _ + m)), y;
      }
    }, X, ce, ye;
    if (typeof TextEncoder < "u" && typeof TextDecoder < "u") {
      let m = new TextEncoder(), y = new TextDecoder();
      X = (_) => m.encode(_), ce = (_) => y.decode(_), ye = 'new TextEncoder().encode("")';
    } else if (typeof Buffer < "u")
      X = (m) => Buffer.from(m), ce = (m) => {
        let { buffer: y, byteOffset: _, byteLength: C } = m;
        return Buffer.from(y, _, C).toString();
      }, ye = 'Buffer.from("")';
    else
      throw new Error("No UTF-8 codec found");
    if (!(X("") instanceof Uint8Array))
      throw new Error(`Invariant violation: "${ye} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
    function Q(m, y) {
      return m[y++] | m[y++] << 8 | m[y++] << 16 | m[y++] << 24;
    }
    function T(m, y, _) {
      m[_++] = y, m[_++] = y >> 8, m[_++] = y >> 16, m[_++] = y >> 24;
    }
    var H = JSON.stringify, Ae = "warning", Se = "silent";
    function $e(m) {
      if (ie(m, "target"), m.indexOf(",") >= 0) throw new Error(`Invalid target: ${m}`);
      return m;
    }
    var ve = () => null, ue = (m) => typeof m == "boolean" ? null : "a boolean", F = (m) => typeof m == "string" ? null : "a string", ae = (m) => m instanceof RegExp ? null : "a RegExp object", ze = (m) => typeof m == "number" && m === (m | 0) ? null : "an integer", Ue = (m) => typeof m == "function" ? null : "a function", M = (m) => Array.isArray(m) ? null : "an array", J = (m) => typeof m == "object" && m !== null && !Array.isArray(m) ? null : "an object", V = (m) => typeof m == "object" && m !== null ? null : "an array or an object", fe = (m) => m instanceof WebAssembly.Module ? null : "a WebAssembly.Module", De = (m) => typeof m == "object" && !Array.isArray(m) ? null : "an object or null", Ne = (m) => typeof m == "string" || typeof m == "boolean" ? null : "a string or a boolean", Fe = (m) => typeof m == "string" || typeof m == "object" && m !== null && !Array.isArray(m) ? null : "a string or an object", Xe = (m) => typeof m == "string" || Array.isArray(m) ? null : "a string or an array", te = (m) => typeof m == "string" || m instanceof Uint8Array ? null : "a string or a Uint8Array", me = (m) => typeof m == "string" || m instanceof URL ? null : "a string or a URL";
    function S(m, y, _, C) {
      let A = m[_];
      if (y[_ + ""] = !0, A === void 0) return;
      let N = C(A);
      if (N !== null) throw new Error(`${H(_)} must be ${N}`);
      return A;
    }
    function he(m, y, _) {
      for (let C in m)
        if (!(C in y))
          throw new Error(`Invalid option ${_}: ${H(C)}`);
    }
    function He(m) {
      let y = /* @__PURE__ */ Object.create(null), _ = S(m, y, "wasmURL", me), C = S(m, y, "wasmModule", fe), A = S(m, y, "worker", ue);
      return he(m, y, "in initialize() call"), {
        wasmURL: _,
        wasmModule: C,
        worker: A
      };
    }
    function We(m) {
      let y;
      if (m !== void 0) {
        y = /* @__PURE__ */ Object.create(null);
        for (let _ in m) {
          let C = m[_];
          if (typeof C == "string" || C === !1)
            y[_] = C;
          else
            throw new Error(`Expected ${H(_)} in mangle cache to map to either a string or false`);
        }
      }
      return y;
    }
    function Ie(m, y, _, C, A) {
      let N = S(y, _, "color", ue), z = S(y, _, "logLevel", F), U = S(y, _, "logLimit", ze);
      N !== void 0 ? m.push(`--color=${N}`) : C && m.push("--color=true"), m.push(`--log-level=${z || A}`), m.push(`--log-limit=${U || 0}`);
    }
    function ie(m, y, _) {
      if (typeof m != "string")
        throw new Error(`Expected value for ${y}${_ !== void 0 ? " " + H(_) : ""} to be a string, got ${typeof m} instead`);
      return m;
    }
    function Be(m, y, _) {
      let C = S(y, _, "legalComments", F), A = S(y, _, "sourceRoot", F), N = S(y, _, "sourcesContent", ue), z = S(y, _, "target", Xe), U = S(y, _, "format", F), O = S(y, _, "globalName", F), W = S(y, _, "mangleProps", ae), G = S(y, _, "reserveProps", ae), K = S(y, _, "mangleQuoted", ue), pe = S(y, _, "minify", ue), Z = S(y, _, "minifySyntax", ue), t = S(y, _, "minifyWhitespace", ue), i = S(y, _, "minifyIdentifiers", ue), s = S(y, _, "lineLimit", ze), p = S(y, _, "drop", M), k = S(y, _, "dropLabels", M), b = S(y, _, "charset", F), u = S(y, _, "treeShaking", ue), c = S(y, _, "ignoreAnnotations", ue), g = S(y, _, "jsx", F), x = S(y, _, "jsxFactory", F), j = S(y, _, "jsxFragment", F), R = S(y, _, "jsxImportSource", F), I = S(y, _, "jsxDev", ue), f = S(y, _, "jsxSideEffects", ue), h = S(y, _, "define", J), P = S(y, _, "logOverride", J), L = S(y, _, "supported", J), Y = S(y, _, "pure", M), se = S(y, _, "keepNames", ue), oe = S(y, _, "platform", F), de = S(y, _, "tsconfigRaw", Fe);
      if (C && m.push(`--legal-comments=${C}`), A !== void 0 && m.push(`--source-root=${A}`), N !== void 0 && m.push(`--sources-content=${N}`), z && (Array.isArray(z) ? m.push(`--target=${Array.from(z).map($e).join(",")}`) : m.push(`--target=${$e(z)}`)), U && m.push(`--format=${U}`), O && m.push(`--global-name=${O}`), oe && m.push(`--platform=${oe}`), de && m.push(`--tsconfig-raw=${typeof de == "string" ? de : JSON.stringify(de)}`), pe && m.push("--minify"), Z && m.push("--minify-syntax"), t && m.push("--minify-whitespace"), i && m.push("--minify-identifiers"), s && m.push(`--line-limit=${s}`), b && m.push(`--charset=${b}`), u !== void 0 && m.push(`--tree-shaking=${u}`), c && m.push("--ignore-annotations"), p) for (let ne of p) m.push(`--drop:${ie(ne, "drop")}`);
      if (k && m.push(`--drop-labels=${Array.from(k).map((ne) => ie(ne, "dropLabels")).join(",")}`), W && m.push(`--mangle-props=${W.source}`), G && m.push(`--reserve-props=${G.source}`), K !== void 0 && m.push(`--mangle-quoted=${K}`), g && m.push(`--jsx=${g}`), x && m.push(`--jsx-factory=${x}`), j && m.push(`--jsx-fragment=${j}`), R && m.push(`--jsx-import-source=${R}`), I && m.push("--jsx-dev"), f && m.push("--jsx-side-effects"), h)
        for (let ne in h) {
          if (ne.indexOf("=") >= 0) throw new Error(`Invalid define: ${ne}`);
          m.push(`--define:${ne}=${ie(h[ne], "define", ne)}`);
        }
      if (P)
        for (let ne in P) {
          if (ne.indexOf("=") >= 0) throw new Error(`Invalid log override: ${ne}`);
          m.push(`--log-override:${ne}=${ie(P[ne], "log override", ne)}`);
        }
      if (L)
        for (let ne in L) {
          if (ne.indexOf("=") >= 0) throw new Error(`Invalid supported: ${ne}`);
          const ee = L[ne];
          if (typeof ee != "boolean") throw new Error(`Expected value for supported ${H(ne)} to be a boolean, got ${typeof ee} instead`);
          m.push(`--supported:${ne}=${ee}`);
        }
      if (Y) for (let ne of Y) m.push(`--pure:${ie(ne, "pure")}`);
      se && m.push("--keep-names");
    }
    function Pe(m, y, _, C, A) {
      var N;
      let z = [], U = [], O = /* @__PURE__ */ Object.create(null), W = null, G = null;
      Ie(z, y, O, _, C), Be(z, y, O);
      let K = S(y, O, "sourcemap", Ne), pe = S(y, O, "bundle", ue), Z = S(y, O, "splitting", ue), t = S(y, O, "preserveSymlinks", ue), i = S(y, O, "metafile", ue), s = S(y, O, "outfile", F), p = S(y, O, "outdir", F), k = S(y, O, "outbase", F), b = S(y, O, "tsconfig", F), u = S(y, O, "resolveExtensions", M), c = S(y, O, "nodePaths", M), g = S(y, O, "mainFields", M), x = S(y, O, "conditions", M), j = S(y, O, "external", M), R = S(y, O, "packages", F), I = S(y, O, "alias", J), f = S(y, O, "loader", J), h = S(y, O, "outExtension", J), P = S(y, O, "publicPath", F), L = S(y, O, "entryNames", F), Y = S(y, O, "chunkNames", F), se = S(y, O, "assetNames", F), oe = S(y, O, "inject", M), de = S(y, O, "banner", J), ne = S(y, O, "footer", J), ee = S(y, O, "entryPoints", V), _e = S(y, O, "absWorkingDir", F), be = S(y, O, "stdin", J), ke = (N = S(y, O, "write", ue)) != null ? N : A, gt = S(y, O, "allowOverwrite", ue), Je = S(y, O, "mangleCache", J);
      if (O.plugins = !0, he(y, O, `in ${m}() call`), K && z.push(`--sourcemap${K === !0 ? "" : `=${K}`}`), pe && z.push("--bundle"), gt && z.push("--allow-overwrite"), Z && z.push("--splitting"), t && z.push("--preserve-symlinks"), i && z.push("--metafile"), s && z.push(`--outfile=${s}`), p && z.push(`--outdir=${p}`), k && z.push(`--outbase=${k}`), b && z.push(`--tsconfig=${b}`), R && z.push(`--packages=${R}`), u) {
        let q = [];
        for (let Me of u) {
          if (ie(Me, "resolve extension"), Me.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${Me}`);
          q.push(Me);
        }
        z.push(`--resolve-extensions=${q.join(",")}`);
      }
      if (P && z.push(`--public-path=${P}`), L && z.push(`--entry-names=${L}`), Y && z.push(`--chunk-names=${Y}`), se && z.push(`--asset-names=${se}`), g) {
        let q = [];
        for (let Me of g) {
          if (ie(Me, "main field"), Me.indexOf(",") >= 0) throw new Error(`Invalid main field: ${Me}`);
          q.push(Me);
        }
        z.push(`--main-fields=${q.join(",")}`);
      }
      if (x) {
        let q = [];
        for (let Me of x) {
          if (ie(Me, "condition"), Me.indexOf(",") >= 0) throw new Error(`Invalid condition: ${Me}`);
          q.push(Me);
        }
        z.push(`--conditions=${q.join(",")}`);
      }
      if (j) for (let q of j) z.push(`--external:${ie(q, "external")}`);
      if (I)
        for (let q in I) {
          if (q.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${q}`);
          z.push(`--alias:${q}=${ie(I[q], "alias", q)}`);
        }
      if (de)
        for (let q in de) {
          if (q.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${q}`);
          z.push(`--banner:${q}=${ie(de[q], "banner", q)}`);
        }
      if (ne)
        for (let q in ne) {
          if (q.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${q}`);
          z.push(`--footer:${q}=${ie(ne[q], "footer", q)}`);
        }
      if (oe) for (let q of oe) z.push(`--inject:${ie(q, "inject")}`);
      if (f)
        for (let q in f) {
          if (q.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${q}`);
          z.push(`--loader:${q}=${ie(f[q], "loader", q)}`);
        }
      if (h)
        for (let q in h) {
          if (q.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${q}`);
          z.push(`--out-extension:${q}=${ie(h[q], "out extension", q)}`);
        }
      if (ee)
        if (Array.isArray(ee))
          for (let q = 0, Me = ee.length; q < Me; q++) {
            let bt = ee[q];
            if (typeof bt == "object" && bt !== null) {
              let Pt = /* @__PURE__ */ Object.create(null), pt = S(bt, Pt, "in", F), Zt = S(bt, Pt, "out", F);
              if (he(bt, Pt, "in entry point at index " + q), pt === void 0) throw new Error('Missing property "in" for entry point at index ' + q);
              if (Zt === void 0) throw new Error('Missing property "out" for entry point at index ' + q);
              U.push([Zt, pt]);
            } else
              U.push(["", ie(bt, "entry point at index " + q)]);
          }
        else
          for (let q in ee)
            U.push([q, ie(ee[q], "entry point", q)]);
      if (be) {
        let q = /* @__PURE__ */ Object.create(null), Me = S(be, q, "contents", te), bt = S(be, q, "resolveDir", F), Pt = S(be, q, "sourcefile", F), pt = S(be, q, "loader", F);
        he(be, q, 'in "stdin" object'), Pt && z.push(`--sourcefile=${Pt}`), pt && z.push(`--loader=${pt}`), bt && (G = bt), typeof Me == "string" ? W = X(Me) : Me instanceof Uint8Array && (W = Me);
      }
      let Yt = [];
      if (c)
        for (let q of c)
          q += "", Yt.push(q);
      return {
        entries: U,
        flags: z,
        write: ke,
        stdinContents: W,
        stdinResolveDir: G,
        absWorkingDir: _e,
        nodePaths: Yt,
        mangleCache: We(Je)
      };
    }
    function kt(m, y, _, C) {
      let A = [], N = /* @__PURE__ */ Object.create(null);
      Ie(A, y, N, _, C), Be(A, y, N);
      let z = S(y, N, "sourcemap", Ne), U = S(y, N, "sourcefile", F), O = S(y, N, "loader", F), W = S(y, N, "banner", F), G = S(y, N, "footer", F), K = S(y, N, "mangleCache", J);
      return he(y, N, `in ${m}() call`), z && A.push(`--sourcemap=${z === !0 ? "external" : z}`), U && A.push(`--sourcefile=${U}`), O && A.push(`--loader=${O}`), W && A.push(`--banner=${W}`), G && A.push(`--footer=${G}`), {
        flags: A,
        mangleCache: We(K)
      };
    }
    function nt(m) {
      const y = {}, _ = { didClose: !1, reason: "" };
      let C = {}, A = 0, N = 0, z = new Uint8Array(16 * 1024), U = 0, O = (b) => {
        let u = U + b.length;
        if (u > z.length) {
          let g = new Uint8Array(u * 2);
          g.set(z), z = g;
        }
        z.set(b, U), U += b.length;
        let c = 0;
        for (; c + 4 <= U; ) {
          let g = Q(z, c);
          if (c + 4 + g > U)
            break;
          c += 4, t(z.subarray(c, c + g)), c += g;
        }
        c > 0 && (z.copyWithin(0, c, U), U -= c);
      }, W = (b) => {
        _.didClose = !0, b && (_.reason = ": " + (b.message || b));
        const u = "The service was stopped" + _.reason;
        for (let c in C)
          C[c](u, null);
        C = {};
      }, G = (b, u, c) => {
        if (_.didClose) return c("The service is no longer running" + _.reason, null);
        let g = A++;
        C[g] = (x, j) => {
          try {
            c(x, j);
          } finally {
            b && b.unref();
          }
        }, b && b.ref(), m.writeToStdin(D({ id: g, isRequest: !0, value: u }));
      }, K = (b, u) => {
        if (_.didClose) throw new Error("The service is no longer running" + _.reason);
        m.writeToStdin(D({ id: b, isRequest: !1, value: u }));
      }, pe = (b, u) => $(this, null, function* () {
        try {
          if (u.command === "ping") {
            K(b, {});
            return;
          }
          if (typeof u.key == "number") {
            const c = y[u.key];
            if (!c)
              return;
            const g = c[u.command];
            if (g) {
              yield g(b, u);
              return;
            }
          }
          throw new Error("Invalid command: " + u.command);
        } catch (c) {
          const g = [Ve(c, m, null, void 0, "")];
          try {
            K(b, { errors: g });
          } catch {
          }
        }
      }), Z = !0, t = (b) => {
        if (Z) {
          Z = !1;
          let c = String.fromCharCode(...b);
          if (c !== "0.23.1")
            throw new Error(`Cannot start service: Host version "0.23.1" does not match binary version ${H(c)}`);
          return;
        }
        let u = B(b);
        if (u.isRequest)
          pe(u.id, u.value);
        else {
          let c = C[u.id];
          delete C[u.id], u.value.error ? c(u.value.error, {}) : c(null, u.value);
        }
      };
      return {
        readFromStdout: O,
        afterClose: W,
        service: {
          buildOrContext: ({ callName: b, refs: u, options: c, isTTY: g, defaultWD: x, callback: j }) => {
            let R = 0;
            const I = N++, f = {}, h = {
              ref() {
                ++R === 1 && u && u.ref();
              },
              unref() {
                --R === 0 && (delete y[I], u && u.unref());
              }
            };
            y[I] = f, h.ref(), xt(
              b,
              I,
              G,
              K,
              h,
              m,
              f,
              c,
              g,
              x,
              (P, L) => {
                try {
                  j(P, L);
                } finally {
                  h.unref();
                }
              }
            );
          },
          transform: ({ callName: b, refs: u, input: c, options: g, isTTY: x, fs: j, callback: R }) => {
            const I = Te();
            let f = (h) => {
              try {
                if (typeof c != "string" && !(c instanceof Uint8Array))
                  throw new Error('The input to "transform" must be a string or a Uint8Array');
                let {
                  flags: P,
                  mangleCache: L
                } = kt(b, g, x, Se), Y = {
                  command: "transform",
                  flags: P,
                  inputFS: h !== null,
                  input: h !== null ? X(h) : typeof c == "string" ? X(c) : c
                };
                L && (Y.mangleCache = L), G(u, Y, (se, oe) => {
                  if (se) return R(new Error(se), null);
                  let de = ot(oe.errors, I), ne = ot(oe.warnings, I), ee = 1, _e = () => {
                    if (--ee === 0) {
                      let be = {
                        warnings: ne,
                        code: oe.code,
                        map: oe.map,
                        mangleCache: void 0,
                        legalComments: void 0
                      };
                      "legalComments" in oe && (be.legalComments = oe == null ? void 0 : oe.legalComments), oe.mangleCache && (be.mangleCache = oe == null ? void 0 : oe.mangleCache), R(null, be);
                    }
                  };
                  if (de.length > 0) return R(Ee("Transform failed", de, ne), null);
                  oe.codeFS && (ee++, j.readFile(oe.code, (be, ke) => {
                    be !== null ? R(be, null) : (oe.code = ke, _e());
                  })), oe.mapFS && (ee++, j.readFile(oe.map, (be, ke) => {
                    be !== null ? R(be, null) : (oe.map = ke, _e());
                  })), _e();
                });
              } catch (P) {
                let L = [];
                try {
                  Ie(L, g, {}, x, Se);
                } catch {
                }
                const Y = Ve(P, m, I, void 0, "");
                G(u, { command: "error", flags: L, error: Y }, () => {
                  Y.detail = I.load(Y.detail), R(Ee("Transform failed", [Y], []), null);
                });
              }
            };
            if ((typeof c == "string" || c instanceof Uint8Array) && c.length > 1024 * 1024) {
              let h = f;
              f = () => j.writeFile(c, h);
            }
            f(null);
          },
          formatMessages: ({ callName: b, refs: u, messages: c, options: g, callback: x }) => {
            if (!g) throw new Error(`Missing second argument in ${b}() call`);
            let j = {}, R = S(g, j, "kind", F), I = S(g, j, "color", ue), f = S(g, j, "terminalWidth", ze);
            if (he(g, j, `in ${b}() call`), R === void 0) throw new Error(`Missing "kind" in ${b}() call`);
            if (R !== "error" && R !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${b}() call`);
            let h = {
              command: "format-msgs",
              messages: Re(c, "messages", null, "", f),
              isWarning: R === "warning"
            };
            I !== void 0 && (h.color = I), f !== void 0 && (h.terminalWidth = f), G(u, h, (P, L) => {
              if (P) return x(new Error(P), null);
              x(null, L.messages);
            });
          },
          analyzeMetafile: ({ callName: b, refs: u, metafile: c, options: g, callback: x }) => {
            g === void 0 && (g = {});
            let j = {}, R = S(g, j, "color", ue), I = S(g, j, "verbose", ue);
            he(g, j, `in ${b}() call`);
            let f = {
              command: "analyze-metafile",
              metafile: c
            };
            R !== void 0 && (f.color = R), I !== void 0 && (f.verbose = I), G(u, f, (h, P) => {
              if (h) return x(new Error(h), null);
              x(null, P.result);
            });
          }
        }
      };
    }
    function xt(m, y, _, C, A, N, z, U, O, W, G) {
      const K = Te(), pe = m === "context", Z = (s, p) => {
        const k = [];
        try {
          Ie(k, U, {}, O, Ae);
        } catch {
        }
        const b = Ve(s, N, K, void 0, p);
        _(A, { command: "error", flags: k, error: b }, () => {
          b.detail = K.load(b.detail), G(Ee(pe ? "Context failed" : "Build failed", [b], []), null);
        });
      };
      let t;
      if (typeof U == "object") {
        const s = U.plugins;
        if (s !== void 0) {
          if (!Array.isArray(s)) return Z(new Error('"plugins" must be an array'), "");
          t = s;
        }
      }
      if (t && t.length > 0) {
        if (N.isSync) return Z(new Error("Cannot use plugins in synchronous API calls"), "");
        _t(
          y,
          _,
          C,
          A,
          N,
          z,
          U,
          t,
          K
        ).then(
          (s) => {
            if (!s.ok) return Z(s.error, s.pluginName);
            try {
              i(s.requestPlugins, s.runOnEndCallbacks, s.scheduleOnDisposeCallbacks);
            } catch (p) {
              Z(p, "");
            }
          },
          (s) => Z(s, "")
        );
        return;
      }
      try {
        i(null, (s, p) => p([], []), () => {
        });
      } catch (s) {
        Z(s, "");
      }
      function i(s, p, k) {
        const b = N.hasFS, {
          entries: u,
          flags: c,
          write: g,
          stdinContents: x,
          stdinResolveDir: j,
          absWorkingDir: R,
          nodePaths: I,
          mangleCache: f
        } = Pe(m, U, O, Ae, b);
        if (g && !N.hasFS) throw new Error('The "write" option is unavailable in this environment');
        const h = {
          command: "build",
          key: y,
          entries: u,
          flags: c,
          write: g,
          stdinContents: x,
          stdinResolveDir: j,
          absWorkingDir: R || W,
          nodePaths: I,
          context: pe
        };
        s && (h.plugins = s), f && (h.mangleCache = f);
        const P = (se, oe) => {
          const de = {
            errors: ot(se.errors, K),
            warnings: ot(se.warnings, K),
            outputFiles: void 0,
            metafile: void 0,
            mangleCache: void 0
          }, ne = de.errors.slice(), ee = de.warnings.slice();
          se.outputFiles && (de.outputFiles = se.outputFiles.map(it)), se.metafile && (de.metafile = JSON.parse(se.metafile)), se.mangleCache && (de.mangleCache = se.mangleCache), se.writeToStdout !== void 0 && console.log(ce(se.writeToStdout).replace(/\n$/, "")), p(de, (_e, be) => {
            if (ne.length > 0 || _e.length > 0) {
              const ke = Ee("Build failed", ne.concat(_e), ee.concat(be));
              return oe(ke, null, _e, be);
            }
            oe(null, de, _e, be);
          });
        };
        let L, Y;
        pe && (z["on-end"] = (se, oe) => new Promise((de) => {
          P(oe, (ne, ee, _e, be) => {
            const ke = {
              errors: _e,
              warnings: be
            };
            Y && Y(ne, ee), L = void 0, Y = void 0, C(se, ke), de();
          });
        })), _(A, h, (se, oe) => {
          if (se) return G(new Error(se), null);
          if (!pe)
            return P(oe, (ee, _e) => (k(), G(ee, _e)));
          if (oe.errors.length > 0)
            return G(Ee("Context failed", oe.errors, oe.warnings), null);
          let de = !1;
          const ne = {
            rebuild: () => (L || (L = new Promise((ee, _e) => {
              let be;
              Y = (gt, Je) => {
                be || (be = () => gt ? _e(gt) : ee(Je));
              };
              const ke = () => {
                _(A, {
                  command: "rebuild",
                  key: y
                }, (Je, Yt) => {
                  Je ? _e(new Error(Je)) : be ? be() : ke();
                });
              };
              ke();
            })), L),
            watch: (ee = {}) => new Promise((_e, be) => {
              if (!N.hasFS) throw new Error('Cannot use the "watch" API in this environment');
              he(ee, {}, "in watch() call"), _(A, {
                command: "watch",
                key: y
              }, (Je) => {
                Je ? be(new Error(Je)) : _e(void 0);
              });
            }),
            serve: (ee = {}) => new Promise((_e, be) => {
              if (!N.hasFS) throw new Error('Cannot use the "serve" API in this environment');
              const ke = {}, gt = S(ee, ke, "port", ze), Je = S(ee, ke, "host", F), Yt = S(ee, ke, "servedir", F), q = S(ee, ke, "keyfile", F), Me = S(ee, ke, "certfile", F), bt = S(ee, ke, "fallback", F), Pt = S(ee, ke, "onRequest", Ue);
              he(ee, ke, "in serve() call");
              const pt = {
                command: "serve",
                key: y,
                onRequest: !!Pt
              };
              gt !== void 0 && (pt.port = gt), Je !== void 0 && (pt.host = Je), Yt !== void 0 && (pt.servedir = Yt), q !== void 0 && (pt.keyfile = q), Me !== void 0 && (pt.certfile = Me), bt !== void 0 && (pt.fallback = bt), _(A, pt, (Zt, sa) => {
                if (Zt) return be(new Error(Zt));
                Pt && (z["serve-request"] = (la, ca) => {
                  Pt(ca.args), C(la, {});
                }), _e(sa);
              });
            }),
            cancel: () => new Promise((ee) => {
              if (de) return ee();
              _(A, {
                command: "cancel",
                key: y
              }, () => {
                ee();
              });
            }),
            dispose: () => new Promise((ee) => {
              if (de) return ee();
              de = !0, _(A, {
                command: "dispose",
                key: y
              }, () => {
                ee(), k(), A.unref();
              });
            })
          };
          A.ref(), G(null, ne);
        });
      }
    }
    var _t = (m, y, _, C, A, N, z, U, O) => $(void 0, null, function* () {
      let W = [], G = [], K = {}, pe = {}, Z = [], t = 0, i = 0, s = [], p = !1;
      U = [...U];
      for (let u of U) {
        let c = {};
        if (typeof u != "object") throw new Error(`Plugin at index ${i} must be an object`);
        const g = S(u, c, "name", F);
        if (typeof g != "string" || g === "") throw new Error(`Plugin at index ${i} is missing a name`);
        try {
          let x = S(u, c, "setup", Ue);
          if (typeof x != "function") throw new Error("Plugin is missing a setup function");
          he(u, c, `on plugin ${H(g)}`);
          let j = {
            name: g,
            onStart: !1,
            onEnd: !1,
            onResolve: [],
            onLoad: []
          };
          i++;
          let I = x({
            initialOptions: z,
            resolve: (f, h = {}) => {
              if (!p) throw new Error('Cannot call "resolve" before plugin setup has completed');
              if (typeof f != "string") throw new Error("The path to resolve must be a string");
              let P = /* @__PURE__ */ Object.create(null), L = S(h, P, "pluginName", F), Y = S(h, P, "importer", F), se = S(h, P, "namespace", F), oe = S(h, P, "resolveDir", F), de = S(h, P, "kind", F), ne = S(h, P, "pluginData", ve), ee = S(h, P, "with", J);
              return he(h, P, "in resolve() call"), new Promise((_e, be) => {
                const ke = {
                  command: "resolve",
                  path: f,
                  key: m,
                  pluginName: g
                };
                if (L != null && (ke.pluginName = L), Y != null && (ke.importer = Y), se != null && (ke.namespace = se), oe != null && (ke.resolveDir = oe), de != null) ke.kind = de;
                else throw new Error('Must specify "kind" when calling "resolve"');
                ne != null && (ke.pluginData = O.store(ne)), ee != null && (ke.with = jt(ee, "with")), y(C, ke, (gt, Je) => {
                  gt !== null ? be(new Error(gt)) : _e({
                    errors: ot(Je.errors, O),
                    warnings: ot(Je.warnings, O),
                    path: Je.path,
                    external: Je.external,
                    sideEffects: Je.sideEffects,
                    namespace: Je.namespace,
                    suffix: Je.suffix,
                    pluginData: O.load(Je.pluginData)
                  });
                });
              });
            },
            onStart(f) {
              let h = 'This error came from the "onStart" callback registered here:', P = we(new Error(h), A, "onStart");
              W.push({ name: g, callback: f, note: P }), j.onStart = !0;
            },
            onEnd(f) {
              let h = 'This error came from the "onEnd" callback registered here:', P = we(new Error(h), A, "onEnd");
              G.push({ name: g, callback: f, note: P }), j.onEnd = !0;
            },
            onResolve(f, h) {
              let P = 'This error came from the "onResolve" callback registered here:', L = we(new Error(P), A, "onResolve"), Y = {}, se = S(f, Y, "filter", ae), oe = S(f, Y, "namespace", F);
              if (he(f, Y, `in onResolve() call for plugin ${H(g)}`), se == null) throw new Error("onResolve() call is missing a filter");
              let de = t++;
              K[de] = { name: g, callback: h, note: L }, j.onResolve.push({ id: de, filter: se.source, namespace: oe || "" });
            },
            onLoad(f, h) {
              let P = 'This error came from the "onLoad" callback registered here:', L = we(new Error(P), A, "onLoad"), Y = {}, se = S(f, Y, "filter", ae), oe = S(f, Y, "namespace", F);
              if (he(f, Y, `in onLoad() call for plugin ${H(g)}`), se == null) throw new Error("onLoad() call is missing a filter");
              let de = t++;
              pe[de] = { name: g, callback: h, note: L }, j.onLoad.push({ id: de, filter: se.source, namespace: oe || "" });
            },
            onDispose(f) {
              Z.push(f);
            },
            esbuild: A.esbuild
          });
          I && (yield I), s.push(j);
        } catch (x) {
          return { ok: !1, error: x, pluginName: g };
        }
      }
      N["on-start"] = (u, c) => $(void 0, null, function* () {
        O.clear();
        let g = { errors: [], warnings: [] };
        yield Promise.all(W.map((x) => $(void 0, [x], function* ({ name: j, callback: R, note: I }) {
          try {
            let f = yield R();
            if (f != null) {
              if (typeof f != "object") throw new Error(`Expected onStart() callback in plugin ${H(j)} to return an object`);
              let h = {}, P = S(f, h, "errors", M), L = S(f, h, "warnings", M);
              he(f, h, `from onStart() callback in plugin ${H(j)}`), P != null && g.errors.push(...Re(P, "errors", O, j, void 0)), L != null && g.warnings.push(...Re(L, "warnings", O, j, void 0));
            }
          } catch (f) {
            g.errors.push(Ve(f, A, O, I && I(), j));
          }
        }))), _(u, g);
      }), N["on-resolve"] = (u, c) => $(void 0, null, function* () {
        let g = {}, x = "", j, R;
        for (let I of c.ids)
          try {
            ({ name: x, callback: j, note: R } = K[I]);
            let f = yield j({
              path: c.path,
              importer: c.importer,
              namespace: c.namespace,
              resolveDir: c.resolveDir,
              kind: c.kind,
              pluginData: O.load(c.pluginData),
              with: c.with
            });
            if (f != null) {
              if (typeof f != "object") throw new Error(`Expected onResolve() callback in plugin ${H(x)} to return an object`);
              let h = {}, P = S(f, h, "pluginName", F), L = S(f, h, "path", F), Y = S(f, h, "namespace", F), se = S(f, h, "suffix", F), oe = S(f, h, "external", ue), de = S(f, h, "sideEffects", ue), ne = S(f, h, "pluginData", ve), ee = S(f, h, "errors", M), _e = S(f, h, "warnings", M), be = S(f, h, "watchFiles", M), ke = S(f, h, "watchDirs", M);
              he(f, h, `from onResolve() callback in plugin ${H(x)}`), g.id = I, P != null && (g.pluginName = P), L != null && (g.path = L), Y != null && (g.namespace = Y), se != null && (g.suffix = se), oe != null && (g.external = oe), de != null && (g.sideEffects = de), ne != null && (g.pluginData = O.store(ne)), ee != null && (g.errors = Re(ee, "errors", O, x, void 0)), _e != null && (g.warnings = Re(_e, "warnings", O, x, void 0)), be != null && (g.watchFiles = ut(be, "watchFiles")), ke != null && (g.watchDirs = ut(ke, "watchDirs"));
              break;
            }
          } catch (f) {
            g = { id: I, errors: [Ve(f, A, O, R && R(), x)] };
            break;
          }
        _(u, g);
      }), N["on-load"] = (u, c) => $(void 0, null, function* () {
        let g = {}, x = "", j, R;
        for (let I of c.ids)
          try {
            ({ name: x, callback: j, note: R } = pe[I]);
            let f = yield j({
              path: c.path,
              namespace: c.namespace,
              suffix: c.suffix,
              pluginData: O.load(c.pluginData),
              with: c.with
            });
            if (f != null) {
              if (typeof f != "object") throw new Error(`Expected onLoad() callback in plugin ${H(x)} to return an object`);
              let h = {}, P = S(f, h, "pluginName", F), L = S(f, h, "contents", te), Y = S(f, h, "resolveDir", F), se = S(f, h, "pluginData", ve), oe = S(f, h, "loader", F), de = S(f, h, "errors", M), ne = S(f, h, "warnings", M), ee = S(f, h, "watchFiles", M), _e = S(f, h, "watchDirs", M);
              he(f, h, `from onLoad() callback in plugin ${H(x)}`), g.id = I, P != null && (g.pluginName = P), L instanceof Uint8Array ? g.contents = L : L != null && (g.contents = X(L)), Y != null && (g.resolveDir = Y), se != null && (g.pluginData = O.store(se)), oe != null && (g.loader = oe), de != null && (g.errors = Re(de, "errors", O, x, void 0)), ne != null && (g.warnings = Re(ne, "warnings", O, x, void 0)), ee != null && (g.watchFiles = ut(ee, "watchFiles")), _e != null && (g.watchDirs = ut(_e, "watchDirs"));
              break;
            }
          } catch (f) {
            g = { id: I, errors: [Ve(f, A, O, R && R(), x)] };
            break;
          }
        _(u, g);
      });
      let k = (u, c) => c([], []);
      G.length > 0 && (k = (u, c) => {
        $(void 0, null, function* () {
          const g = [], x = [];
          for (const { name: j, callback: R, note: I } of G) {
            let f, h;
            try {
              const P = yield R(u);
              if (P != null) {
                if (typeof P != "object") throw new Error(`Expected onEnd() callback in plugin ${H(j)} to return an object`);
                let L = {}, Y = S(P, L, "errors", M), se = S(P, L, "warnings", M);
                he(P, L, `from onEnd() callback in plugin ${H(j)}`), Y != null && (f = Re(Y, "errors", O, j, void 0)), se != null && (h = Re(se, "warnings", O, j, void 0));
              }
            } catch (P) {
              f = [Ve(P, A, O, I && I(), j)];
            }
            if (f) {
              g.push(...f);
              try {
                u.errors.push(...f);
              } catch {
              }
            }
            if (h) {
              x.push(...h);
              try {
                u.warnings.push(...h);
              } catch {
              }
            }
          }
          c(g, x);
        });
      });
      let b = () => {
        for (const u of Z)
          setTimeout(() => u(), 0);
      };
      return p = !0, {
        ok: !0,
        requestPlugins: s,
        runOnEndCallbacks: k,
        scheduleOnDisposeCallbacks: b
      };
    });
    function Te() {
      const m = /* @__PURE__ */ new Map();
      let y = 0;
      return {
        clear() {
          m.clear();
        },
        load(_) {
          return m.get(_);
        },
        store(_) {
          if (_ === void 0) return -1;
          const C = y++;
          return m.set(C, _), C;
        }
      };
    }
    function we(m, y, _) {
      let C, A = !1;
      return () => {
        if (A) return C;
        A = !0;
        try {
          let N = (m.stack + "").split(`
`);
          N.splice(1, 1);
          let z = Ze(y, N, _);
          if (z)
            return C = { text: m.message, location: z }, C;
        } catch {
        }
      };
    }
    function Ve(m, y, _, C, A) {
      let N = "Internal error", z = null;
      try {
        N = (m && m.message || m) + "";
      } catch {
      }
      try {
        z = Ze(y, (m.stack + "").split(`
`), "");
      } catch {
      }
      return { id: "", pluginName: A, text: N, location: z, notes: C ? [C] : [], detail: _ ? _.store(m) : -1 };
    }
    function Ze(m, y, _) {
      let C = "    at ";
      if (m.readFileSync && !y[0].startsWith(C) && y[1].startsWith(C))
        for (let A = 1; A < y.length; A++) {
          let N = y[A];
          if (N.startsWith(C))
            for (N = N.slice(C.length); ; ) {
              let z = /^(?:new |async )?\S+ \((.*)\)$/.exec(N);
              if (z) {
                N = z[1];
                continue;
              }
              if (z = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(N), z) {
                N = z[1];
                continue;
              }
              if (z = /^(\S+):(\d+):(\d+)$/.exec(N), z) {
                let U;
                try {
                  U = m.readFileSync(z[1], "utf8");
                } catch {
                  break;
                }
                let O = U.split(/\r\n|\r|\n|\u2028|\u2029/)[+z[2] - 1] || "", W = +z[3] - 1, G = O.slice(W, W + _.length) === _ ? _.length : 0;
                return {
                  file: z[1],
                  namespace: "file",
                  line: +z[2],
                  column: X(O.slice(0, W)).length,
                  length: X(O.slice(W, W + G)).length,
                  lineText: O + `
` + y.slice(1).join(`
`),
                  suggestion: ""
                };
              }
              break;
            }
        }
      return null;
    }
    function Ee(m, y, _) {
      let C = 5;
      m += y.length < 1 ? "" : ` with ${y.length} error${y.length < 2 ? "" : "s"}:` + y.slice(0, C + 1).map((N, z) => {
        if (z === C) return `
...`;
        if (!N.location) return `
error: ${N.text}`;
        let { file: U, line: O, column: W } = N.location, G = N.pluginName ? `[plugin: ${N.pluginName}] ` : "";
        return `
${U}:${O}:${W}: ERROR: ${G}${N.text}`;
      }).join("");
      let A = new Error(m);
      for (const [N, z] of [["errors", y], ["warnings", _]])
        Object.defineProperty(A, N, {
          configurable: !0,
          enumerable: !0,
          get: () => z,
          set: (U) => Object.defineProperty(A, N, {
            configurable: !0,
            enumerable: !0,
            value: U
          })
        });
      return A;
    }
    function ot(m, y) {
      for (const _ of m)
        _.detail = y.load(_.detail);
      return m;
    }
    function ht(m, y, _) {
      if (m == null) return null;
      let C = {}, A = S(m, C, "file", F), N = S(m, C, "namespace", F), z = S(m, C, "line", ze), U = S(m, C, "column", ze), O = S(m, C, "length", ze), W = S(m, C, "lineText", F), G = S(m, C, "suggestion", F);
      if (he(m, C, y), W) {
        const K = W.slice(
          0,
          (U && U > 0 ? U : 0) + (O && O > 0 ? O : 0) + (_ && _ > 0 ? _ : 80)
        );
        !/[\x7F-\uFFFF]/.test(K) && !/\n/.test(W) && (W = K);
      }
      return {
        file: A || "",
        namespace: N || "",
        line: z || 0,
        column: U || 0,
        length: O || 0,
        lineText: W || "",
        suggestion: G || ""
      };
    }
    function Re(m, y, _, C, A) {
      let N = [], z = 0;
      for (const U of m) {
        let O = {}, W = S(U, O, "id", F), G = S(U, O, "pluginName", F), K = S(U, O, "text", F), pe = S(U, O, "location", De), Z = S(U, O, "notes", M), t = S(U, O, "detail", ve), i = `in element ${z} of "${y}"`;
        he(U, O, i);
        let s = [];
        if (Z)
          for (const p of Z) {
            let k = {}, b = S(p, k, "text", F), u = S(p, k, "location", De);
            he(p, k, i), s.push({
              text: b || "",
              location: ht(u, i, A)
            });
          }
        N.push({
          id: W || "",
          pluginName: G || C,
          text: K || "",
          location: ht(pe, i, A),
          notes: s,
          detail: _ ? _.store(t) : -1
        }), z++;
      }
      return N;
    }
    function ut(m, y) {
      const _ = [];
      for (const C of m) {
        if (typeof C != "string") throw new Error(`${H(y)} must be an array of strings`);
        _.push(C);
      }
      return _;
    }
    function jt(m, y) {
      const _ = /* @__PURE__ */ Object.create(null);
      for (const C in m) {
        const A = m[C];
        if (typeof A != "string") throw new Error(`key ${H(C)} in object ${H(y)} must be a string`);
        _[C] = A;
      }
      return _;
    }
    function it({ path: m, contents: y, hash: _ }) {
      let C = null;
      return {
        path: m,
        contents: y,
        hash: _,
        get text() {
          const A = this.contents;
          return (C === null || A !== y) && (y = A, C = ce(A)), C;
        }
      };
    }
    var at = "0.23.1", xe = (m) => Qe().build(m), St = (m) => Qe().context(m), st = (m, y) => Qe().transform(m, y), lt = (m, y) => Qe().formatMessages(m, y), qe = (m, y) => Qe().analyzeMetafile(m, y), Et = () => {
      throw new Error('The "buildSync" API only works in node');
    }, $t = () => {
      throw new Error('The "transformSync" API only works in node');
    }, Rt = () => {
      throw new Error('The "formatMessagesSync" API only works in node');
    }, Ot = () => {
      throw new Error('The "analyzeMetafileSync" API only works in node');
    }, Ct = () => (ft && ft(), Promise.resolve()), et, ft, Le, Qe = () => {
      if (Le) return Le;
      throw et ? new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this') : new Error('You need to call "initialize" before calling this');
    }, ge = (m) => {
      m = He(m || {});
      let y = m.wasmURL, _ = m.wasmModule, C = m.worker !== !1;
      if (!y && !_) throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
      if (et) throw new Error('Cannot call "initialize" more than once');
      return et = Ye(y || "", _, C), et.catch(() => {
        et = void 0;
      }), et;
    }, Ye = (m, y, _) => $(void 0, null, function* () {
      let C;
      if (_) {
        let W = new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.23.1"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`], { type: "text/javascript" });
        C = new Worker(URL.createObjectURL(W));
      } else {
        let W = ((K) => {
          var pe = (s, p, k) => new Promise((b, u) => {
            var c = (j) => {
              try {
                x(k.next(j));
              } catch (R) {
                u(R);
              }
            }, g = (j) => {
              try {
                x(k.throw(j));
              } catch (R) {
                u(R);
              }
            }, x = (j) => j.done ? b(j.value) : Promise.resolve(j.value).then(c, g);
            x((k = k.apply(s, p)).next());
          });
          let Z, t = {};
          for (let s = self; s; s = Object.getPrototypeOf(s))
            for (let p of Object.getOwnPropertyNames(s))
              p in t || Object.defineProperty(t, p, { get: () => self[p] });
          (() => {
            const s = () => {
              const b = new Error("not implemented");
              return b.code = "ENOSYS", b;
            };
            if (!t.fs) {
              let b = "";
              t.fs = {
                constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                // unused
                writeSync(u, c) {
                  b += k.decode(c);
                  const g = b.lastIndexOf(`
`);
                  return g != -1 && (console.log(b.substring(0, g)), b = b.substring(g + 1)), c.length;
                },
                write(u, c, g, x, j, R) {
                  if (g !== 0 || x !== c.length || j !== null) {
                    R(s());
                    return;
                  }
                  const I = this.writeSync(u, c);
                  R(null, I);
                },
                chmod(u, c, g) {
                  g(s());
                },
                chown(u, c, g, x) {
                  x(s());
                },
                close(u, c) {
                  c(s());
                },
                fchmod(u, c, g) {
                  g(s());
                },
                fchown(u, c, g, x) {
                  x(s());
                },
                fstat(u, c) {
                  c(s());
                },
                fsync(u, c) {
                  c(null);
                },
                ftruncate(u, c, g) {
                  g(s());
                },
                lchown(u, c, g, x) {
                  x(s());
                },
                link(u, c, g) {
                  g(s());
                },
                lstat(u, c) {
                  c(s());
                },
                mkdir(u, c, g) {
                  g(s());
                },
                open(u, c, g, x) {
                  x(s());
                },
                read(u, c, g, x, j, R) {
                  R(s());
                },
                readdir(u, c) {
                  c(s());
                },
                readlink(u, c) {
                  c(s());
                },
                rename(u, c, g) {
                  g(s());
                },
                rmdir(u, c) {
                  c(s());
                },
                stat(u, c) {
                  c(s());
                },
                symlink(u, c, g) {
                  g(s());
                },
                truncate(u, c, g) {
                  g(s());
                },
                unlink(u, c) {
                  c(s());
                },
                utimes(u, c, g, x) {
                  x(s());
                }
              };
            }
            if (t.process || (t.process = {
              getuid() {
                return -1;
              },
              getgid() {
                return -1;
              },
              geteuid() {
                return -1;
              },
              getegid() {
                return -1;
              },
              getgroups() {
                throw s();
              },
              pid: -1,
              ppid: -1,
              umask() {
                throw s();
              },
              cwd() {
                throw s();
              },
              chdir() {
                throw s();
              }
            }), !t.crypto)
              throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
            if (!t.performance)
              throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
            if (!t.TextEncoder)
              throw new Error("globalThis.TextEncoder is not available, polyfill required");
            if (!t.TextDecoder)
              throw new Error("globalThis.TextDecoder is not available, polyfill required");
            const p = new TextEncoder("utf-8"), k = new TextDecoder("utf-8");
            t.Go = class {
              constructor() {
                this.argv = ["js"], this.env = {}, this.exit = (f) => {
                  f !== 0 && console.warn("exit code:", f);
                }, this._exitPromise = new Promise((f) => {
                  this._resolveExitPromise = f;
                }), this._pendingEvent = null, this._scheduledTimeouts = /* @__PURE__ */ new Map(), this._nextCallbackTimeoutID = 1;
                const b = (f, h) => {
                  this.mem.setUint32(f + 0, h, !0), this.mem.setUint32(f + 4, Math.floor(h / 4294967296), !0);
                }, u = (f) => {
                  const h = this.mem.getUint32(f + 0, !0), P = this.mem.getInt32(f + 4, !0);
                  return h + P * 4294967296;
                }, c = (f) => {
                  const h = this.mem.getFloat64(f, !0);
                  if (h === 0)
                    return;
                  if (!isNaN(h))
                    return h;
                  const P = this.mem.getUint32(f, !0);
                  return this._values[P];
                }, g = (f, h) => {
                  if (typeof h == "number" && h !== 0) {
                    if (isNaN(h)) {
                      this.mem.setUint32(f + 4, 2146959360, !0), this.mem.setUint32(f, 0, !0);
                      return;
                    }
                    this.mem.setFloat64(f, h, !0);
                    return;
                  }
                  if (h === void 0) {
                    this.mem.setFloat64(f, 0, !0);
                    return;
                  }
                  let L = this._ids.get(h);
                  L === void 0 && (L = this._idPool.pop(), L === void 0 && (L = this._values.length), this._values[L] = h, this._goRefCounts[L] = 0, this._ids.set(h, L)), this._goRefCounts[L]++;
                  let Y = 0;
                  switch (typeof h) {
                    case "object":
                      h !== null && (Y = 1);
                      break;
                    case "string":
                      Y = 2;
                      break;
                    case "symbol":
                      Y = 3;
                      break;
                    case "function":
                      Y = 4;
                      break;
                  }
                  this.mem.setUint32(f + 4, 2146959360 | Y, !0), this.mem.setUint32(f, L, !0);
                }, x = (f) => {
                  const h = u(f + 0), P = u(f + 8);
                  return new Uint8Array(this._inst.exports.mem.buffer, h, P);
                }, j = (f) => {
                  const h = u(f + 0), P = u(f + 8), L = new Array(P);
                  for (let Y = 0; Y < P; Y++)
                    L[Y] = c(h + Y * 8);
                  return L;
                }, R = (f) => {
                  const h = u(f + 0), P = u(f + 8);
                  return k.decode(new DataView(this._inst.exports.mem.buffer, h, P));
                }, I = Date.now() - performance.now();
                this.importObject = {
                  _gotest: {
                    add: (f, h) => f + h
                  },
                  gojs: {
                    // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                    // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                    // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                    // This changes the SP, thus we have to update the SP used by the imported function.
                    // func wasmExit(code int32)
                    "runtime.wasmExit": (f) => {
                      f >>>= 0;
                      const h = this.mem.getInt32(f + 8, !0);
                      this.exited = !0, delete this._inst, delete this._values, delete this._goRefCounts, delete this._ids, delete this._idPool, this.exit(h);
                    },
                    // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                    "runtime.wasmWrite": (f) => {
                      f >>>= 0;
                      const h = u(f + 8), P = u(f + 16), L = this.mem.getInt32(f + 24, !0);
                      t.fs.writeSync(h, new Uint8Array(this._inst.exports.mem.buffer, P, L));
                    },
                    // func resetMemoryDataView()
                    "runtime.resetMemoryDataView": (f) => {
                      this.mem = new DataView(this._inst.exports.mem.buffer);
                    },
                    // func nanotime1() int64
                    "runtime.nanotime1": (f) => {
                      f >>>= 0, b(f + 8, (I + performance.now()) * 1e6);
                    },
                    // func walltime() (sec int64, nsec int32)
                    "runtime.walltime": (f) => {
                      f >>>= 0;
                      const h = (/* @__PURE__ */ new Date()).getTime();
                      b(f + 8, h / 1e3), this.mem.setInt32(f + 16, h % 1e3 * 1e6, !0);
                    },
                    // func scheduleTimeoutEvent(delay int64) int32
                    "runtime.scheduleTimeoutEvent": (f) => {
                      f >>>= 0;
                      const h = this._nextCallbackTimeoutID;
                      this._nextCallbackTimeoutID++, this._scheduledTimeouts.set(h, setTimeout(
                        () => {
                          for (this._resume(); this._scheduledTimeouts.has(h); )
                            console.warn("scheduleTimeoutEvent: missed timeout event"), this._resume();
                        },
                        u(f + 8)
                      )), this.mem.setInt32(f + 16, h, !0);
                    },
                    // func clearTimeoutEvent(id int32)
                    "runtime.clearTimeoutEvent": (f) => {
                      f >>>= 0;
                      const h = this.mem.getInt32(f + 8, !0);
                      clearTimeout(this._scheduledTimeouts.get(h)), this._scheduledTimeouts.delete(h);
                    },
                    // func getRandomData(r []byte)
                    "runtime.getRandomData": (f) => {
                      f >>>= 0, crypto.getRandomValues(x(f + 8));
                    },
                    // func finalizeRef(v ref)
                    "syscall/js.finalizeRef": (f) => {
                      f >>>= 0;
                      const h = this.mem.getUint32(f + 8, !0);
                      if (this._goRefCounts[h]--, this._goRefCounts[h] === 0) {
                        const P = this._values[h];
                        this._values[h] = null, this._ids.delete(P), this._idPool.push(h);
                      }
                    },
                    // func stringVal(value string) ref
                    "syscall/js.stringVal": (f) => {
                      f >>>= 0, g(f + 24, R(f + 8));
                    },
                    // func valueGet(v ref, p string) ref
                    "syscall/js.valueGet": (f) => {
                      f >>>= 0;
                      const h = Reflect.get(c(f + 8), R(f + 16));
                      f = this._inst.exports.getsp() >>> 0, g(f + 32, h);
                    },
                    // func valueSet(v ref, p string, x ref)
                    "syscall/js.valueSet": (f) => {
                      f >>>= 0, Reflect.set(c(f + 8), R(f + 16), c(f + 32));
                    },
                    // func valueDelete(v ref, p string)
                    "syscall/js.valueDelete": (f) => {
                      f >>>= 0, Reflect.deleteProperty(c(f + 8), R(f + 16));
                    },
                    // func valueIndex(v ref, i int) ref
                    "syscall/js.valueIndex": (f) => {
                      f >>>= 0, g(f + 24, Reflect.get(c(f + 8), u(f + 16)));
                    },
                    // valueSetIndex(v ref, i int, x ref)
                    "syscall/js.valueSetIndex": (f) => {
                      f >>>= 0, Reflect.set(c(f + 8), u(f + 16), c(f + 24));
                    },
                    // func valueCall(v ref, m string, args []ref) (ref, bool)
                    "syscall/js.valueCall": (f) => {
                      f >>>= 0;
                      try {
                        const h = c(f + 8), P = Reflect.get(h, R(f + 16)), L = j(f + 32), Y = Reflect.apply(P, h, L);
                        f = this._inst.exports.getsp() >>> 0, g(f + 56, Y), this.mem.setUint8(f + 64, 1);
                      } catch (h) {
                        f = this._inst.exports.getsp() >>> 0, g(f + 56, h), this.mem.setUint8(f + 64, 0);
                      }
                    },
                    // func valueInvoke(v ref, args []ref) (ref, bool)
                    "syscall/js.valueInvoke": (f) => {
                      f >>>= 0;
                      try {
                        const h = c(f + 8), P = j(f + 16), L = Reflect.apply(h, void 0, P);
                        f = this._inst.exports.getsp() >>> 0, g(f + 40, L), this.mem.setUint8(f + 48, 1);
                      } catch (h) {
                        f = this._inst.exports.getsp() >>> 0, g(f + 40, h), this.mem.setUint8(f + 48, 0);
                      }
                    },
                    // func valueNew(v ref, args []ref) (ref, bool)
                    "syscall/js.valueNew": (f) => {
                      f >>>= 0;
                      try {
                        const h = c(f + 8), P = j(f + 16), L = Reflect.construct(h, P);
                        f = this._inst.exports.getsp() >>> 0, g(f + 40, L), this.mem.setUint8(f + 48, 1);
                      } catch (h) {
                        f = this._inst.exports.getsp() >>> 0, g(f + 40, h), this.mem.setUint8(f + 48, 0);
                      }
                    },
                    // func valueLength(v ref) int
                    "syscall/js.valueLength": (f) => {
                      f >>>= 0, b(f + 16, parseInt(c(f + 8).length));
                    },
                    // valuePrepareString(v ref) (ref, int)
                    "syscall/js.valuePrepareString": (f) => {
                      f >>>= 0;
                      const h = p.encode(String(c(f + 8)));
                      g(f + 16, h), b(f + 24, h.length);
                    },
                    // valueLoadString(v ref, b []byte)
                    "syscall/js.valueLoadString": (f) => {
                      f >>>= 0;
                      const h = c(f + 8);
                      x(f + 16).set(h);
                    },
                    // func valueInstanceOf(v ref, t ref) bool
                    "syscall/js.valueInstanceOf": (f) => {
                      f >>>= 0, this.mem.setUint8(f + 24, c(f + 8) instanceof c(f + 16) ? 1 : 0);
                    },
                    // func copyBytesToGo(dst []byte, src ref) (int, bool)
                    "syscall/js.copyBytesToGo": (f) => {
                      f >>>= 0;
                      const h = x(f + 8), P = c(f + 32);
                      if (!(P instanceof Uint8Array || P instanceof Uint8ClampedArray)) {
                        this.mem.setUint8(f + 48, 0);
                        return;
                      }
                      const L = P.subarray(0, h.length);
                      h.set(L), b(f + 40, L.length), this.mem.setUint8(f + 48, 1);
                    },
                    // func copyBytesToJS(dst ref, src []byte) (int, bool)
                    "syscall/js.copyBytesToJS": (f) => {
                      f >>>= 0;
                      const h = c(f + 8), P = x(f + 16);
                      if (!(h instanceof Uint8Array || h instanceof Uint8ClampedArray)) {
                        this.mem.setUint8(f + 48, 0);
                        return;
                      }
                      const L = P.subarray(0, h.length);
                      h.set(L), b(f + 40, L.length), this.mem.setUint8(f + 48, 1);
                    },
                    debug: (f) => {
                      console.log(f);
                    }
                  }
                };
              }
              run(b) {
                return pe(this, null, function* () {
                  if (!(b instanceof WebAssembly.Instance))
                    throw new Error("Go.run: WebAssembly.Instance expected");
                  this._inst = b, this.mem = new DataView(this._inst.exports.mem.buffer), this._values = [
                    // JS values that Go currently has references to, indexed by reference id
                    NaN,
                    0,
                    null,
                    !0,
                    !1,
                    t,
                    this
                  ], this._goRefCounts = new Array(this._values.length).fill(1 / 0), this._ids = /* @__PURE__ */ new Map([
                    // mapping from JS values to reference ids
                    [0, 1],
                    [null, 2],
                    [!0, 3],
                    [!1, 4],
                    [t, 5],
                    [this, 6]
                  ]), this._idPool = [], this.exited = !1;
                  let u = 4096;
                  const c = (f) => {
                    const h = u, P = p.encode(f + "\0");
                    return new Uint8Array(this.mem.buffer, u, P.length).set(P), u += P.length, u % 8 !== 0 && (u += 8 - u % 8), h;
                  }, g = this.argv.length, x = [];
                  this.argv.forEach((f) => {
                    x.push(c(f));
                  }), x.push(0), Object.keys(this.env).sort().forEach((f) => {
                    x.push(c(`${f}=${this.env[f]}`));
                  }), x.push(0);
                  const R = u;
                  if (x.forEach((f) => {
                    this.mem.setUint32(u, f, !0), this.mem.setUint32(u + 4, 0, !0), u += 8;
                  }), u >= 12288)
                    throw new Error("total length of command line and environment variables exceeds limit");
                  this._inst.exports.run(g, R), this.exited && this._resolveExitPromise(), yield this._exitPromise;
                });
              }
              _resume() {
                if (this.exited)
                  throw new Error("Go program has already exited");
                this._inst.exports.resume(), this.exited && this._resolveExitPromise();
              }
              _makeFuncWrapper(b) {
                const u = this;
                return function() {
                  const c = { id: b, this: this, args: arguments };
                  return u._pendingEvent = c, u._resume(), c.result;
                };
              }
            };
          })(), Z = ({ data: s }) => {
            let p = new TextDecoder(), k = t.fs, b = "";
            k.writeSync = (j, R) => {
              if (j === 1)
                K(R);
              else if (j === 2) {
                b += p.decode(R);
                let I = b.split(`
`);
                I.length > 1 && console.log(I.slice(0, -1).join(`
`)), b = I[I.length - 1];
              } else
                throw new Error("Bad write");
              return R.length;
            };
            let u = [], c, g = 0;
            Z = ({ data: j }) => (j.length > 0 && (u.push(j), c && c()), x), k.read = (j, R, I, f, h, P) => {
              if (j !== 0 || I !== 0 || f !== R.length || h !== null)
                throw new Error("Bad read");
              if (u.length === 0) {
                c = () => k.read(j, R, I, f, h, P);
                return;
              }
              let L = u[0], Y = Math.max(0, Math.min(f, L.length - g));
              R.set(L.subarray(g, g + Y), I), g += Y, g === L.length && (u.shift(), g = 0), P(null, Y);
            };
            let x = new t.Go();
            return x.argv = ["", "--service=0.23.1"], i(s, x).then(
              (j) => {
                K(null), x.run(j);
              },
              (j) => {
                K(j);
              }
            ), x;
          };
          function i(s, p) {
            return pe(this, null, function* () {
              if (s instanceof WebAssembly.Module)
                return WebAssembly.instantiate(s, p.importObject);
              const k = yield fetch(s);
              if (!k.ok) throw new Error(`Failed to download ${JSON.stringify(s)}`);
              if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(k.headers.get("Content-Type") || ""))
                return (yield WebAssembly.instantiateStreaming(k, p.importObject)).instance;
              const b = yield k.arrayBuffer();
              return (yield WebAssembly.instantiate(b, p.importObject)).instance;
            });
          }
          return (s) => Z(s);
        })((K) => C.onmessage({ data: K })), G;
        C = {
          onmessage: null,
          postMessage: (K) => setTimeout(() => G = W({ data: K })),
          terminate() {
            if (G)
              for (let K of G._scheduledTimeouts.values())
                clearTimeout(K);
          }
        };
      }
      let A, N;
      const z = new Promise((W, G) => {
        A = W, N = G;
      });
      C.onmessage = ({ data: W }) => {
        C.onmessage = ({ data: G }) => U(G), W ? N(W) : A();
      }, C.postMessage(y || new URL(m, location.href).toString());
      let { readFromStdout: U, service: O } = nt({
        writeToStdin(W) {
          C.postMessage(W);
        },
        isSync: !1,
        hasFS: !1,
        esbuild: E
      });
      yield z, ft = () => {
        C.terminate(), et = void 0, ft = void 0, Le = void 0;
      }, Le = {
        build: (W) => new Promise((G, K) => O.buildOrContext({
          callName: "build",
          refs: null,
          options: W,
          isTTY: !1,
          defaultWD: "/",
          callback: (pe, Z) => pe ? K(pe) : G(Z)
        })),
        context: (W) => new Promise((G, K) => O.buildOrContext({
          callName: "context",
          refs: null,
          options: W,
          isTTY: !1,
          defaultWD: "/",
          callback: (pe, Z) => pe ? K(pe) : G(Z)
        })),
        transform: (W, G) => new Promise((K, pe) => O.transform({
          callName: "transform",
          refs: null,
          input: W,
          options: G || {},
          isTTY: !1,
          fs: {
            readFile(Z, t) {
              t(new Error("Internal error"), null);
            },
            writeFile(Z, t) {
              t(null);
            }
          },
          callback: (Z, t) => Z ? pe(Z) : K(t)
        })),
        formatMessages: (W, G) => new Promise((K, pe) => O.formatMessages({
          callName: "formatMessages",
          refs: null,
          messages: W,
          options: G,
          callback: (Z, t) => Z ? pe(Z) : K(t)
        })),
        analyzeMetafile: (W, G) => new Promise((K, pe) => O.analyzeMetafile({
          callName: "analyzeMetafile",
          refs: null,
          metafile: typeof W == "string" ? W : JSON.stringify(W),
          options: G,
          callback: (Z, t) => Z ? pe(Z) : K(t)
        }))
      };
    }), Ge = E;
  })(e);
})(aa);
var hp = aa.exports;
const Fo = /* @__PURE__ */ ua(hp), sn = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-dom/client": "ReactDOM",
  antd: "antd",
  "@ant-design/icons": "icons",
  "@ali/matter": "Matter"
}, gp = {
  "./index.tsx": `
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('matter-playground-preview-id');
const root = createRoot(domNode);
root.render(<App />);`
}, bp = (e, r) => {
  var a;
  const n = document.body.querySelector(
    `script[data-playground-id="${r}"]`
  );
  n && ((a = n.parentNode) == null || a.removeChild(n));
  const o = document.createElement("script");
  o.setAttribute("data-playground-id", r), o.type = "module", o.textContent = e, document.body.appendChild(o);
}, yp = /^(\.\/[a-zA-Z0-9-_]+)(\.(tsx?))?$/, vp = (e) => ({
  name: "browser-build-plugin",
  setup(r) {
    r.onResolve({ filter: /^\.\/.+$/ }, (n) => ({ path: n.path, namespace: "memory" })), r.onResolve({ filter: /.*/ }, (n) => Object.keys(sn).includes(n.path) ? { path: n.path, namespace: "dependencies" } : {
      path: n.path,
      namespace: "dependencies",
      external: !0
    }), r.onLoad({ filter: /^\.\/.+$/ }, (n) => {
      const [, o, , a] = (n == null ? void 0 : n.path.match(yp)) || [], l = a ? e[n.path] : e[`${o}.tsx`] || e[`${o}.ts`];
      return l !== void 0 ? {
        contents: l,
        loader: "tsx"
      } : {
        contents: "",
        loader: "tsx"
      };
    }), r.onLoad({ filter: /.*/ }, (n) => {
      const { path: o } = n || {};
      return Object.keys(sn).includes(o) ? {
        contents: `module.exports = ${sn[o]}`
      } : {
        contents: ""
      };
    });
  }
}), Io = window.React.useEffect, Lo = window.React.useState;
let ln;
function wp(e, r, n) {
  const [o, a] = Lo(!0), [l, d] = Lo(), v = async () => {
    if (!ln)
      try {
        ln = Fo.initialize({
          worker: !0,
          wasmURL: "https://unpkg.alibaba-inc.com/esbuild-wasm@0.23.1/esbuild.wasm"
          // 指定 esbuild.wasm 文件的路径
        });
      } catch (D) {
        console.warn("esbuild.initialize error", D);
      }
    await ln;
  }, w = async (D) => {
    if (!D || !D["./App.tsx"]) return;
    await v();
    const B = await Fo.build({
      entryPoints: ["./index.tsx"],
      bundle: !0,
      write: !1,
      plugins: [vp(D)],
      format: "esm"
    });
    return new TextDecoder().decode(B.outputFiles[0].contents);
  }, $ = (D) => {
    a(!1), D && bp(D, n);
  }, E = async (D) => {
    if (!D) return;
    const B = await w(D);
    await $(B);
  };
  return Io(() => {
    let D = gp["./index.tsx"];
    D = D.replace(
      "matter-playground-preview-id",
      `matter-playground-preview-${n}`
    );
    let B;
    r ? B = { ...r, "./index.tsx": D } : e && (B = { "./index.tsx": D, "./App.tsx": e }), d(B);
  }, [e, r]), Io(() => {
    E(l);
  }, [l]), { loading: o, patchedFiles: l, setPatchedFiles: d };
}
const kp = window.React.useState, xp = window.React.useRef, _p = window.React.useId, jp = window.antd.ConfigProvider, Sp = window.antd.Segmented;
function Ep({ code: e = "", files: r }) {
  const [n, o] = kp(!1), a = xp(null), l = _p(), { patchedFiles: d, setPatchedFiles: v } = wp(
    e,
    r,
    l
  );
  return /* @__PURE__ */ tt.jsx(
    jp,
    {
      theme: {
        token: {
          fontSize: 12
        },
        components: {
          Tabs: {
            titleFontSize: 12
          }
        }
      },
      children: /* @__PURE__ */ tt.jsx(mp, { children: /* @__PURE__ */ tt.jsxs("div", { className: "mx-auto mt-6 rounded-md", ref: a, children: [
        /* @__PURE__ */ tt.jsx("div", { className: "py-2 flex justify-between", children: /* @__PURE__ */ tt.jsx(
          Sp,
          {
            defaultValue: "预览",
            value: n ? "源码" : "预览",
            options: ["预览", "源码"],
            onChange: (w) => {
              o(w === "源码");
            }
          }
        ) }),
        /* @__PURE__ */ tt.jsxs("div", { className: "matter-border rounded-md mb-6", children: [
          /* @__PURE__ */ tt.jsx("div", { className: `${n ? "absolute -z-50 hidden" : ""}`, children: /* @__PURE__ */ tt.jsx(
            "div",
            {
              id: `matter-playground-preview-${l}`,
              className: "mb-2 p-6"
            }
          ) }),
          n ? /* @__PURE__ */ tt.jsx("div", { className: "flex-1 p-2", children: d ? /* @__PURE__ */ tt.jsx(
            cp,
            {
              plagroundId: l,
              files: d,
              onChange: (w) => {
                v(w);
              }
            }
          ) : /* @__PURE__ */ tt.jsx("div", { children: "No Code" }) }) : null
        ] })
      ] }) })
    }
  );
}
function $p(e) {
  const { type: r = "tab", ...n } = e || {};
  switch (r) {
    case "tab":
      return /* @__PURE__ */ tt.jsx(Ep, { ...n });
    case "col":
      return /* @__PURE__ */ tt.jsx(da, { ...n });
  }
}
export {
  $p as default
};
