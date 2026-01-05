(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("a{text-decoration:none}.min-w-14{min-width:14px}.container{margin:0;border-radius:10px;border:1px solid #e2e4e9;color:#0d2a4c;background-color:#fff}.container--dark{border:1px solid #414141;background-color:#212121;color:#fff}.title-block{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 16px;border-bottom:1px solid #e2e4e9}.container--dark .title-block{border-bottom:1px solid #414141}.title-block__text{font-size:16px;font-style:normal;font-weight:500;line-height:20px;letter-spacing:-.4px}.title-block__button{font-family:inherit;border-radius:8px;border:1px solid rgba(255,255,255,.12);background:#288dff;box-shadow:0 1px 2px #0e121b3d,0 0 0 1px #288dff;color:#fff;font-size:14px;font-style:normal;font-weight:600;line-height:16px;letter-spacing:-.4px;padding:7px 14px;transition:all .3s ease;white-space:nowrap}.title-block__button:hover{background:#0f75ff;box-shadow:0 4px 8px #0e121b3d,0 0 0 1px #0f75ff}.no-data{border-top:1px solid #ebecf0;text-align:center;padding:16px}.container--dark .no-data{border-top:1px solid #414141}.error-text{color:#ff4d4f;font-weight:700}.overflow{overflow:auto}.table{width:100%;min-width:500px;border-collapse:collapse}.table__th{padding:6px 16px;text-align:left;font-size:14px;font-weight:500;line-height:20px;letter-spacing:-.4px;background-color:#f9fafb;white-space:nowrap}.container--dark .table__th{background-color:#303030}.table__td{padding:6px 16px;font-size:14px;font-weight:500;line-height:20px;letter-spacing:-.4px}.table__flex{display:flex;gap:8px;align-items:center}.container--dark .table__flex svg{filter:brightness(0) invert(1)}.table__badge{padding:1px 5px;border:1px solid #dbeafe;border-radius:6px;background:#eff6ff;font-size:12px;font-weight:500;line-height:18px;letter-spacing:-.01em;color:#288dff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:capitalize}.container--dark .table__badge{border:1px solid #414141;background:#414141}.table__tr{border-top:1px solid #ebecf0}.container--dark .table__tr{border-top:1px solid #414141}.table__line{height:1px;background-color:#eeeff2}.container--dark .table__line{background-color:#212121}.table__img-circle{width:16px;height:16px;min-width:16px;border-radius:50%;overflow:hidden}.capitalize{text-transform:capitalize}@media (max-width: 500px){.container{margin:0 16px}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function X_(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var v0 = { exports: {} }, Kp = {}, h0 = { exports: {} }, yt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function K_() {
  if (K1) return yt;
  K1 = 1;
  var j = Symbol.for("react.element"), X = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), St = Symbol.for("react.provider"), S = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Re(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $e = Object.assign, Ct = {};
  function vt(_, P, Ve) {
    this.props = _, this.context = P, this.refs = Ct, this.updater = Ve || oe;
  }
  vt.prototype.isReactComponent = {}, vt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, vt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = vt.prototype;
  function pt(_, P, Ve) {
    this.props = _, this.context = P, this.refs = Ct, this.updater = Ve || oe;
  }
  var Qe = pt.prototype = new fn();
  Qe.constructor = pt, $e(Qe, vt.prototype), Qe.isPureReactComponent = !0;
  var ht = Array.isArray, _e = Object.prototype.hasOwnProperty, ct = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, P, Ve) {
    var Ae, lt = {}, tt = null, Je = null;
    if (P != null) for (Ae in P.ref !== void 0 && (Je = P.ref), P.key !== void 0 && (tt = "" + P.key), P) _e.call(P, Ae) && !He.hasOwnProperty(Ae) && (lt[Ae] = P[Ae]);
    var nt = arguments.length - 2;
    if (nt === 1) lt.children = Ve;
    else if (1 < nt) {
      for (var ut = Array(nt), Bt = 0; Bt < nt; Bt++) ut[Bt] = arguments[Bt + 2];
      lt.children = ut;
    }
    if (_ && _.defaultProps) for (Ae in nt = _.defaultProps, nt) lt[Ae] === void 0 && (lt[Ae] = nt[Ae]);
    return { $$typeof: j, type: _, key: tt, ref: Je, props: lt, _owner: ct.current };
  }
  function Ht(_, P) {
    return { $$typeof: j, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === j;
  }
  function ln(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Ve) {
      return P[Ve];
    });
  }
  var _t = /\/+/g;
  function Oe(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : P.toString(36);
  }
  function jt(_, P, Ve, Ae, lt) {
    var tt = typeof _;
    (tt === "undefined" || tt === "boolean") && (_ = null);
    var Je = !1;
    if (_ === null) Je = !0;
    else switch (tt) {
      case "string":
      case "number":
        Je = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case j:
          case X:
            Je = !0;
        }
    }
    if (Je) return Je = _, lt = lt(Je), _ = Ae === "" ? "." + Oe(Je, 0) : Ae, ht(lt) ? (Ve = "", _ != null && (Ve = _.replace(_t, "$&/") + "/"), jt(lt, P, Ve, "", function(Bt) {
      return Bt;
    })) : lt != null && (Zt(lt) && (lt = Ht(lt, Ve + (!lt.key || Je && Je.key === lt.key ? "" : ("" + lt.key).replace(_t, "$&/") + "/") + _)), P.push(lt)), 1;
    if (Je = 0, Ae = Ae === "" ? "." : Ae + ":", ht(_)) for (var nt = 0; nt < _.length; nt++) {
      tt = _[nt];
      var ut = Ae + Oe(tt, nt);
      Je += jt(tt, P, Ve, ut, lt);
    }
    else if (ut = Re(_), typeof ut == "function") for (_ = ut.call(_), nt = 0; !(tt = _.next()).done; ) tt = tt.value, ut = Ae + Oe(tt, nt++), Je += jt(tt, P, Ve, ut, lt);
    else if (tt === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Je;
  }
  function kt(_, P, Ve) {
    if (_ == null) return _;
    var Ae = [], lt = 0;
    return jt(_, Ae, "", "", function(tt) {
      return P.call(Ve, tt, lt++);
    }), Ae;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Ve) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Ve);
      }, function(Ve) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Ve);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ee = { current: null }, Z = { transition: null }, Te = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: Z, ReactCurrentOwner: ct };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return yt.Children = { map: kt, forEach: function(_, P, Ve) {
    kt(_, function() {
      P.apply(this, arguments);
    }, Ve);
  }, count: function(_) {
    var P = 0;
    return kt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return kt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, yt.Component = vt, yt.Fragment = A, yt.Profiler = gt, yt.PureComponent = pt, yt.StrictMode = it, yt.Suspense = ue, yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, yt.act = ne, yt.cloneElement = function(_, P, Ve) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ae = $e({}, _.props), lt = _.key, tt = _.ref, Je = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (tt = P.ref, Je = ct.current), P.key !== void 0 && (lt = "" + P.key), _.type && _.type.defaultProps) var nt = _.type.defaultProps;
      for (ut in P) _e.call(P, ut) && !He.hasOwnProperty(ut) && (Ae[ut] = P[ut] === void 0 && nt !== void 0 ? nt[ut] : P[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1) Ae.children = Ve;
    else if (1 < ut) {
      nt = Array(ut);
      for (var Bt = 0; Bt < ut; Bt++) nt[Bt] = arguments[Bt + 2];
      Ae.children = nt;
    }
    return { $$typeof: j, type: _.type, key: lt, ref: tt, props: Ae, _owner: Je };
  }, yt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: St, _context: _ }, _.Consumer = _;
  }, yt.createElement = an, yt.createFactory = function(_) {
    var P = an.bind(null, _);
    return P.type = _, P;
  }, yt.createRef = function() {
    return { current: null };
  }, yt.forwardRef = function(_) {
    return { $$typeof: je, render: _ };
  }, yt.isValidElement = Zt, yt.lazy = function(_) {
    return { $$typeof: Ke, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, yt.memo = function(_, P) {
    return { $$typeof: pe, type: _, compare: P === void 0 ? null : P };
  }, yt.startTransition = function(_) {
    var P = Z.transition;
    Z.transition = {};
    try {
      _();
    } finally {
      Z.transition = P;
    }
  }, yt.unstable_act = ne, yt.useCallback = function(_, P) {
    return Ee.current.useCallback(_, P);
  }, yt.useContext = function(_) {
    return Ee.current.useContext(_);
  }, yt.useDebugValue = function() {
  }, yt.useDeferredValue = function(_) {
    return Ee.current.useDeferredValue(_);
  }, yt.useEffect = function(_, P) {
    return Ee.current.useEffect(_, P);
  }, yt.useId = function() {
    return Ee.current.useId();
  }, yt.useImperativeHandle = function(_, P, Ve) {
    return Ee.current.useImperativeHandle(_, P, Ve);
  }, yt.useInsertionEffect = function(_, P) {
    return Ee.current.useInsertionEffect(_, P);
  }, yt.useLayoutEffect = function(_, P) {
    return Ee.current.useLayoutEffect(_, P);
  }, yt.useMemo = function(_, P) {
    return Ee.current.useMemo(_, P);
  }, yt.useReducer = function(_, P, Ve) {
    return Ee.current.useReducer(_, P, Ve);
  }, yt.useRef = function(_) {
    return Ee.current.useRef(_);
  }, yt.useState = function(_) {
    return Ee.current.useState(_);
  }, yt.useSyncExternalStore = function(_, P, Ve) {
    return Ee.current.useSyncExternalStore(_, P, Ve);
  }, yt.useTransition = function() {
    return Ee.current.useTransition();
  }, yt.version = "18.3.1", yt;
}
var ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ev.exports;
var Z1;
function Z_() {
  return Z1 || (Z1 = 1, function(j, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", it = Symbol.for("react.element"), gt = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Ke = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), Ct = Symbol.for("react.offscreen"), vt = Symbol.iterator, fn = "@@iterator";
      function pt(h) {
        if (h === null || typeof h != "object")
          return null;
        var E = vt && h[vt] || h[fn];
        return typeof E == "function" ? E : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ht = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, an = null;
      function Ht(h) {
        an = h;
      }
      He.setExtraStackFrame = function(h) {
        an = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var E = He.getCurrentStack;
        return E && (h += E() || ""), h;
      };
      var Zt = !1, ln = !1, _t = !1, Oe = !1, jt = !1, kt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: ht,
        ReactCurrentOwner: ct
      };
      kt.ReactDebugCurrentFrame = He, kt.ReactCurrentActQueue = _e;
      function Ot(h) {
        {
          for (var E = arguments.length, N = new Array(E > 1 ? E - 1 : 0), F = 1; F < E; F++)
            N[F - 1] = arguments[F];
          Z("warn", h, N);
        }
      }
      function Ee(h) {
        {
          for (var E = arguments.length, N = new Array(E > 1 ? E - 1 : 0), F = 1; F < E; F++)
            N[F - 1] = arguments[F];
          Z("error", h, N);
        }
      }
      function Z(h, E, N) {
        {
          var F = kt.ReactDebugCurrentFrame, K = F.getStackAddendum();
          K !== "" && (E += "%s", N = N.concat([K]));
          var Le = N.map(function(re) {
            return String(re);
          });
          Le.unshift("Warning: " + E), Function.prototype.apply.call(console[h], console, Le);
        }
      }
      var Te = {};
      function ne(h, E) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", K = F + "." + E;
          if (Te[K])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", E, F), Te[K] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, E, N) {
          ne(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, E, N, F) {
          ne(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, E, N, F) {
          ne(h, "setState");
        }
      }, P = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Ae(h, E, N) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = N || _;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, E) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, E, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var lt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, E) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", E[0], E[1]);
            }
          });
        };
        for (var Je in lt)
          lt.hasOwnProperty(Je) && tt(Je, lt[Je]);
      }
      function nt() {
      }
      nt.prototype = Ae.prototype;
      function ut(h, E, N) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = N || _;
      }
      var Bt = ut.prototype = new nt();
      Bt.constructor = ut, P(Bt, Ae.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function En(h) {
        return wr(h);
      }
      function nr(h) {
        {
          var E = typeof Symbol == "function" && Symbol.toStringTag, N = E && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Pn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Pn(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, E, N) {
        var F = h.displayName;
        if (F)
          return F;
        var K = E.displayName || E.name || "";
        return K !== "" ? N + "(" + K + ")" : N;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case St:
            return "Fragment";
          case gt:
            return "Portal";
          case je:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Re:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var E = h;
              return oa(E) + ".Consumer";
            case ue:
              var N = h;
              return oa(N._context) + ".Provider";
            case Ke:
              return si(h, h.render, "ForwardRef");
            case oe:
              var F = h.displayName || null;
              return F !== null ? F : qn(h.type) || "Memo";
            case $e: {
              var K = h, Le = K._payload, re = K._init;
              try {
                return qn(re(Le));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ya, Ln;
      Ln = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var E = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Rn.call(h, "key")) {
          var E = Object.getOwnPropertyDescriptor(h, "key").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Wa(h, E) {
        var N = function() {
          gr || (gr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, E) {
        var N = function() {
          Ya || (Ya = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var E = qn(ct.current.type);
          Ln[E] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E, h.ref), Ln[E] = !0);
        }
      }
      var xe = function(h, E, N, F, K, Le, re) {
        var ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: it,
          // Built-in properties that belong on the element
          type: h,
          key: E,
          ref: N,
          props: re,
          // Record the component responsible for creating this element.
          _owner: Le
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function rt(h, E, N) {
        var F, K = {}, Le = null, re = null, ze = null, dt = null;
        if (E != null) {
          Sr(E) && (re = E.ref, ee(E)), sa(E) && (Yr(E.key), Le = "" + E.key), ze = E.__self === void 0 ? null : E.__self, dt = E.__source === void 0 ? null : E.__source;
          for (F in E)
            Rn.call(E, F) && !In.hasOwnProperty(F) && (K[F] = E[F]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          K.children = N;
        else if (bt > 1) {
          for (var nn = Array(bt), $t = 0; $t < bt; $t++)
            nn[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(nn), K.children = nn;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (F in at)
            K[F] === void 0 && (K[F] = at[F]);
        }
        if (Le || re) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Le && Wa(K, Qt), re && ci(K, Qt);
        }
        return xe(h, Le, re, ze, dt, ct.current, K);
      }
      function Ft(h, E) {
        var N = xe(h.type, E, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Jt(h, E, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, K = P({}, h.props), Le = h.key, re = h.ref, ze = h._self, dt = h._source, bt = h._owner;
        if (E != null) {
          Sr(E) && (re = E.ref, bt = ct.current), sa(E) && (Yr(E.key), Le = "" + E.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (F in E)
            Rn.call(E, F) && !In.hasOwnProperty(F) && (E[F] === void 0 && nn !== void 0 ? K[F] = nn[F] : K[F] = E[F]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          K.children = N;
        else if ($t > 1) {
          for (var at = Array($t), Qt = 0; Qt < $t; Qt++)
            at[Qt] = arguments[Qt + 2];
          K.children = at;
        }
        return xe(h.type, Le, re, ze, dt, bt, K);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === it;
      }
      var un = ".", Xn = ":";
      function en(h) {
        var E = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(E, function(K) {
          return N[K];
        });
        return "$" + F;
      }
      var It = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Cr(h, E) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), en("" + h.key)) : E.toString(36);
      }
      function Ta(h, E, N, F, K) {
        var Le = typeof h;
        (Le === "undefined" || Le === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (Le) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case it:
                case gt:
                  re = !0;
              }
          }
        if (re) {
          var ze = h, dt = K(ze), bt = F === "" ? un + Cr(ze, 0) : F;
          if (En(dt)) {
            var nn = "";
            bt != null && (nn = ca(bt) + "/"), Ta(dt, E, nn, "", function(qf) {
              return qf;
            });
          } else dt != null && (vn(dt) && (dt.key && (!ze || ze.key !== dt.key) && Yr(dt.key), dt = Ft(
            dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (dt.key && (!ze || ze.key !== dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + dt.key) + "/"
            ) : "") + bt
          )), E.push(dt));
          return 1;
        }
        var $t, at, Qt = 0, hn = F === "" ? un : F + Xn;
        if (En(h))
          for (var El = 0; El < h.length; El++)
            $t = h[El], at = hn + Cr($t, El), Qt += Ta($t, E, N, at, K);
        else {
          var Go = pt(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var qo = Go.call(Pi), uu, Gf = 0; !(uu = qo.next()).done; )
              $t = uu.value, at = hn + Cr($t, Gf++), Qt += Ta($t, E, N, at, K);
          } else if (Le === "object") {
            var uc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (uc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : uc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, E, N) {
        if (h == null)
          return h;
        var F = [], K = 0;
        return Ta(h, F, "", "", function(Le) {
          return E.call(N, Le, K++);
        }), F;
      }
      function Zl(h) {
        var E = 0;
        return Fi(h, function() {
          E++;
        }), E;
      }
      function Jl(h, E, N) {
        Fi(h, function() {
          E.apply(this, arguments);
        }, N);
      }
      function dl(h) {
        return Fi(h, function(E) {
          return E;
        }) || [];
      }
      function pl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function eu(h) {
        var E = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        E.Provider = {
          $$typeof: ue,
          _context: E
        };
        var N = !1, F = !1, K = !1;
        {
          var Le = {
            $$typeof: pe,
            _context: E
          };
          Object.defineProperties(Le, {
            Provider: {
              get: function() {
                return F || (F = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), E.Provider;
              },
              set: function(re) {
                E.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return E._currentValue;
              },
              set: function(re) {
                E._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return E._currentValue2;
              },
              set: function(re) {
                E._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return E._threadCount;
              },
              set: function(re) {
                E._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), E.Consumer;
              }
            },
            displayName: {
              get: function() {
                return E.displayName;
              },
              set: function(re) {
                K || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), K = !0);
              }
            }
          }), E.Consumer = Le;
        }
        return E._currentRenderer = null, E._currentRenderer2 = null, E;
      }
      var br = -1, _r = 0, rr = 1, fi = 2;
      function $a(h) {
        if (h._status === br) {
          var E = h._result, N = E();
          if (N.then(function(Le) {
            if (h._status === _r || h._status === br) {
              var re = h;
              re._status = rr, re._result = Le;
            }
          }, function(Le) {
            if (h._status === _r || h._status === br) {
              var re = h;
              re._status = fi, re._result = Le;
            }
          }), h._status === br) {
            var F = h;
            F._status = _r, F._result = N;
          }
        }
        if (h._status === rr) {
          var K = h._result;
          return K === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function di(h) {
        var E = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, N = {
          $$typeof: $e,
          _payload: E,
          _init: $a
        };
        {
          var F, K;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Le) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Le, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Le) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Le, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === oe ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var E = {
          $$typeof: Ke,
          render: h
        };
        {
          var N;
          Object.defineProperty(E, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return E;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === St || h === je || jt || h === S || h === J || h === Re || Oe || h === Ct || Zt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === $e || h.$$typeof === oe || h.$$typeof === ue || h.$$typeof === pe || h.$$typeof === Ke || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ae(h, E) {
        I(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: oe,
          type: h,
          compare: E === void 0 ? null : E
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(K) {
              F = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return N;
      }
      function me() {
        var h = Qe.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function qe(h) {
        var E = me();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return E.useContext(h);
      }
      function Ye(h) {
        var E = me();
        return E.useState(h);
      }
      function ft(h, E, N) {
        var F = me();
        return F.useReducer(h, E, N);
      }
      function ot(h) {
        var E = me();
        return E.useRef(h);
      }
      function Tn(h, E) {
        var N = me();
        return N.useEffect(h, E);
      }
      function tn(h, E) {
        var N = me();
        return N.useInsertionEffect(h, E);
      }
      function on(h, E) {
        var N = me();
        return N.useLayoutEffect(h, E);
      }
      function ar(h, E) {
        var N = me();
        return N.useCallback(h, E);
      }
      function Qa(h, E) {
        var N = me();
        return N.useMemo(h, E);
      }
      function Ga(h, E, N) {
        var F = me();
        return F.useImperativeHandle(h, E, N);
      }
      function Xe(h, E) {
        {
          var N = me();
          return N.useDebugValue(h, E);
        }
      }
      function et() {
        var h = me();
        return h.useTransition();
      }
      function qa(h) {
        var E = me();
        return E.useDeferredValue(h);
      }
      function tu() {
        var h = me();
        return h.useId();
      }
      function nu(h, E, N) {
        var F = me();
        return F.useSyncExternalStore(h, E, N);
      }
      var vl = 0, $u, hl, Wr, Yo, kr, ic, lc;
      function Qu() {
      }
      Qu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            $u = console.log, hl = console.info, Wr = console.warn, Yo = console.error, kr = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: $u
              }),
              info: P({}, h, {
                value: hl
              }),
              warn: P({}, h, {
                value: Wr
              }),
              error: P({}, h, {
                value: Yo
              }),
              group: P({}, h, {
                value: kr
              }),
              groupCollapsed: P({}, h, {
                value: ic
              }),
              groupEnd: P({}, h, {
                value: lc
              })
            });
          }
          vl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Ka;
      function Gu(h, E, N) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (K) {
              var F = K.stack.trim().match(/\n( *(at )?)/);
              Ka = F && F[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var ru = !1, yl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new qu();
      }
      function Xu(h, E) {
        if (!h || ru)
          return "";
        {
          var N = yl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        ru = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Le;
        Le = Xa.current, Xa.current = null, ml();
        try {
          if (E) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (hn) {
                F = hn;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (hn) {
                F = hn;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              F = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && F && typeof hn.stack == "string") {
            for (var ze = hn.stack.split(`
`), dt = F.stack.split(`
`), bt = ze.length - 1, nn = dt.length - 1; bt >= 1 && nn >= 0 && ze[bt] !== dt[nn]; )
              nn--;
            for (; bt >= 1 && nn >= 0; bt--, nn--)
              if (ze[bt] !== dt[nn]) {
                if (bt !== 1 || nn !== 1)
                  do
                    if (bt--, nn--, nn < 0 || ze[bt] !== dt[nn]) {
                      var $t = `
` + ze[bt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, $t), $t;
                    }
                  while (bt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          ru = !1, Xa.current = Le, fa(), Error.prepareStackTrace = K;
        }
        var at = h ? h.displayName || h.name : "", Qt = at ? Gu(at) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, E, N) {
        return Xu(h, !1);
      }
      function $f(h) {
        var E = h.prototype;
        return !!(E && E.isReactComponent);
      }
      function Vi(h, E, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, $f(h));
        if (typeof h == "string")
          return Gu(h);
        switch (h) {
          case J:
            return Gu("Suspense");
          case Re:
            return Gu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ke:
              return Hi(h.render);
            case oe:
              return Vi(h.type, E, N);
            case $e: {
              var F = h, K = F._payload, Le = F._init;
              try {
                return Vi(Le(K), E, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ku = kt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var E = h._owner, N = Vi(h.type, h._source, E ? E.type : null);
          Ku.setExtraStackFrame(N);
        } else
          Ku.setExtraStackFrame(null);
      }
      function Wo(h, E, N, F, K) {
        {
          var Le = Function.call.bind(Rn);
          for (var re in h)
            if (Le(h, re)) {
              var ze = void 0;
              try {
                if (typeof h[re] != "function") {
                  var dt = Error((F || "React class") + ": " + N + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                ze = h[re](E, re, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                ze = bt;
              }
              ze && !(ze instanceof Error) && (wt(K), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, re, typeof ze), wt(null)), ze instanceof Error && !(ze.message in Lt) && (Lt[ze.message] = !0, wt(K), Ee("Failed %s type: %s", N, ze.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var E = h._owner, N = Vi(h.type, h._source, E ? E.type : null);
          Ht(N);
        } else
          Ht(null);
      }
      var Ie;
      Ie = !1;
      function Zu() {
        if (ct.current) {
          var h = qn(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var E = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + E + ":" + N + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function mi(h) {
        var E = Zu();
        if (!E) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (E = `

Check the top-level render call using <` + N + ">.");
        }
        return E;
      }
      function sn(h, E) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = mi(E);
          if (!Dr[N]) {
            Dr[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ct.current && (F = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), vi(null);
          }
        }
      }
      function Wt(h, E) {
        if (typeof h == "object") {
          if (En(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              vn(F) && sn(F, E);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = pt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Le = K.call(h), re; !(re = Le.next()).done; )
                vn(re.value) && sn(re.value, E);
          }
        }
      }
      function gl(h) {
        {
          var E = h.type;
          if (E == null || typeof E == "string")
            return;
          var N;
          if (typeof E == "function")
            N = E.propTypes;
          else if (typeof E == "object" && (E.$$typeof === Ke || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          E.$$typeof === oe))
            N = E.propTypes;
          else
            return;
          if (N) {
            var F = qn(E);
            Wo(N, h.props, "prop", F, h);
          } else if (E.PropTypes !== void 0 && !Ie) {
            Ie = !0;
            var K = qn(E);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var E = Object.keys(h.props), N = 0; N < E.length; N++) {
            var F = E[N];
            if (F !== "children" && F !== "key") {
              vi(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, E, N) {
        var F = I(h);
        if (!F) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = hi(E);
          Le ? K += Le : K += Zu();
          var re;
          h === null ? re = "null" : En(h) ? re = "array" : h !== void 0 && h.$$typeof === it ? (re = "<" + (qn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, K);
        }
        var ze = rt.apply(this, arguments);
        if (ze == null)
          return ze;
        if (F)
          for (var dt = 2; dt < arguments.length; dt++)
            Wt(arguments[dt], h);
        return h === St ? Yn(ze) : gl(ze), ze;
      }
      var xa = !1;
      function au(h) {
        var E = Or.bind(null, h);
        return E.type = h, xa || (xa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(E, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), E;
      }
      function $o(h, E, N) {
        for (var F = Jt.apply(this, arguments), K = 2; K < arguments.length; K++)
          Wt(arguments[K], F.type);
        return gl(F), F;
      }
      function Qo(h, E) {
        var N = ht.transition;
        ht.transition = {};
        var F = ht.transition;
        ht.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ht.transition = N, N === null && F._updatedFibers) {
            var K = F._updatedFibers.size;
            K > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, iu = null;
      function Qf(h) {
        if (iu === null)
          try {
            var E = ("require" + Math.random()).slice(0, 7), N = j && j[E];
            iu = N.call(j, "timers").setImmediate;
          } catch {
            iu = function(K) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Le = new MessageChannel();
              Le.port1.onmessage = K, Le.port2.postMessage(void 0);
            };
          }
        return iu(h);
      }
      var wa = 0, Za = !1;
      function yi(h) {
        {
          var E = wa;
          wa++, _e.current === null && (_e.current = []);
          var N = _e.isBatchingLegacy, F;
          try {
            if (_e.isBatchingLegacy = !0, F = h(), !N && _e.didScheduleLegacyUpdate) {
              var K = _e.current;
              K !== null && (_e.didScheduleLegacyUpdate = !1, Cl(K));
            }
          } catch (at) {
            throw ba(E), at;
          } finally {
            _e.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Le = F, re = !1, ze = {
              then: function(at, Qt) {
                re = !0, Le.then(function(hn) {
                  ba(E), wa === 0 ? Ju(hn, at, Qt) : at(hn);
                }, function(hn) {
                  ba(E), Qt(hn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              re || (Za = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var dt = F;
            if (ba(E), wa === 0) {
              var bt = _e.current;
              bt !== null && (Cl(bt), _e.current = null);
              var nn = {
                then: function(at, Qt) {
                  _e.current === null ? (_e.current = [], Ju(dt, at, Qt)) : at(dt);
                }
              };
              return nn;
            } else {
              var $t = {
                then: function(at, Qt) {
                  at(dt);
                }
              };
              return $t;
            }
          }
        }
      }
      function ba(h) {
        h !== wa - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function Ju(h, E, N) {
        {
          var F = _e.current;
          if (F !== null)
            try {
              Cl(F), Qf(function() {
                F.length === 0 ? (_e.current = null, E(h)) : Ju(h, E, N);
              });
            } catch (K) {
              N(K);
            }
          else
            E(h);
        }
      }
      var eo = !1;
      function Cl(h) {
        if (!eo) {
          eo = !0;
          var E = 0;
          try {
            for (; E < h.length; E++) {
              var N = h[E];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(E + 1), F;
          } finally {
            eo = !1;
          }
        }
      }
      var lu = Or, to = $o, no = au, Ja = {
        map: Fi,
        forEach: Jl,
        count: Zl,
        toArray: dl,
        only: pl
      };
      X.Children = Ja, X.Component = Ae, X.Fragment = St, X.Profiler = je, X.PureComponent = ut, X.StrictMode = S, X.Suspense = J, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, X.act = yi, X.cloneElement = to, X.createContext = eu, X.createElement = lu, X.createFactory = no, X.createRef = On, X.forwardRef = pi, X.isValidElement = vn, X.lazy = di, X.memo = ae, X.startTransition = Qo, X.unstable_act = yi, X.useCallback = ar, X.useContext = qe, X.useDebugValue = Xe, X.useDeferredValue = qa, X.useEffect = Tn, X.useId = tu, X.useImperativeHandle = Ga, X.useInsertionEffect = tn, X.useLayoutEffect = on, X.useMemo = Qa, X.useReducer = ft, X.useRef = ot, X.useState = Ye, X.useSyncExternalStore = nu, X.useTransition = et, X.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
process.env.NODE_ENV === "production" ? h0.exports = K_() : h0.exports = Z_();
var tv = h0.exports;
const lR = /* @__PURE__ */ X_(tv);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function J_() {
  if (J1) return Kp;
  J1 = 1;
  var j = tv, X = Symbol.for("react.element"), A = Symbol.for("react.fragment"), it = Object.prototype.hasOwnProperty, gt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, St = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(je, ue, pe) {
    var Ke, J = {}, Re = null, oe = null;
    pe !== void 0 && (Re = "" + pe), ue.key !== void 0 && (Re = "" + ue.key), ue.ref !== void 0 && (oe = ue.ref);
    for (Ke in ue) it.call(ue, Ke) && !St.hasOwnProperty(Ke) && (J[Ke] = ue[Ke]);
    if (je && je.defaultProps) for (Ke in ue = je.defaultProps, ue) J[Ke] === void 0 && (J[Ke] = ue[Ke]);
    return { $$typeof: X, type: je, key: Re, ref: oe, props: J, _owner: gt.current };
  }
  return Kp.Fragment = A, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function ek() {
  return eR || (eR = 1, process.env.NODE_ENV !== "production" && function() {
    var j = tv, X = Symbol.for("react.element"), A = Symbol.for("react.portal"), it = Symbol.for("react.fragment"), gt = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), je = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), $e = Symbol.iterator, Ct = "@@iterator";
    function vt(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = $e && R[$e] || R[Ct];
      return typeof I == "function" ? I : null;
    }
    var fn = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pt(R) {
      {
        for (var I = arguments.length, ae = new Array(I > 1 ? I - 1 : 0), me = 1; me < I; me++)
          ae[me - 1] = arguments[me];
        Qe("error", R, ae);
      }
    }
    function Qe(R, I, ae) {
      {
        var me = fn.ReactDebugCurrentFrame, qe = me.getStackAddendum();
        qe !== "" && (I += "%s", ae = ae.concat([qe]));
        var Ye = ae.map(function(ft) {
          return String(ft);
        });
        Ye.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var ht = !1, _e = !1, ct = !1, He = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === it || R === St || an || R === gt || R === pe || R === Ke || He || R === oe || ht || _e || ct || typeof R == "object" && R !== null && (R.$$typeof === Re || R.$$typeof === J || R.$$typeof === S || R.$$typeof === je || R.$$typeof === ue || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function ln(R, I, ae) {
      var me = R.displayName;
      if (me)
        return me;
      var qe = I.displayName || I.name || "";
      return qe !== "" ? ae + "(" + qe + ")" : ae;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Oe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && pt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case it:
          return "Fragment";
        case A:
          return "Portal";
        case St:
          return "Profiler";
        case gt:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Ke:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case je:
            var I = R;
            return _t(I) + ".Consumer";
          case S:
            var ae = R;
            return _t(ae._context) + ".Provider";
          case ue:
            return ln(R, R.render, "ForwardRef");
          case J:
            var me = R.displayName || null;
            return me !== null ? me : Oe(R.type) || "Memo";
          case Re: {
            var qe = R, Ye = qe._payload, ft = qe._init;
            try {
              return Oe(ft(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Ee, Z, Te, ne, _, P;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Ae() {
      {
        if (kt === 0) {
          Ot = console.log, Ee = console.info, Z = console.warn, Te = console.error, ne = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function lt() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Ee
            }),
            warn: jt({}, R, {
              value: Z
            }),
            error: jt({}, R, {
              value: Te
            }),
            group: jt({}, R, {
              value: ne
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        kt < 0 && pt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = fn.ReactCurrentDispatcher, Je;
    function nt(R, I, ae) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (qe) {
            var me = qe.stack.trim().match(/\n( *(at )?)/);
            Je = me && me[1] || "";
          }
        return `
` + Je + R;
      }
    }
    var ut = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function wr(R, I) {
      if (!R || ut)
        return "";
      {
        var ae = Bt.get(R);
        if (ae !== void 0)
          return ae;
      }
      var me;
      ut = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = tt.current, tt.current = null, Ae();
      try {
        if (I) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (Xe) {
              me = Xe;
            }
            Reflect.construct(R, [], ft);
          } else {
            try {
              ft.call();
            } catch (Xe) {
              me = Xe;
            }
            R.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            me = Xe;
          }
          R();
        }
      } catch (Xe) {
        if (Xe && me && typeof Xe.stack == "string") {
          for (var ot = Xe.stack.split(`
`), Tn = me.stack.split(`
`), tn = ot.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && ot[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (ot[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || ot[tn] !== Tn[on]) {
                    var ar = `
` + ot[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        ut = !1, tt.current = Ye, lt(), Error.prepareStackTrace = qe;
      }
      var Qa = R ? R.displayName || R.name : "", Ga = Qa ? nt(Qa) : "";
      return typeof R == "function" && Bt.set(R, Ga), Ga;
    }
    function En(R, I, ae) {
      return wr(R, !1);
    }
    function nr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(R, I, ae) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return nt(R);
      switch (R) {
        case pe:
          return nt("Suspense");
        case Ke:
          return nt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ue:
            return En(R.render);
          case J:
            return Pn(R.type, I, ae);
          case Re: {
            var me = R, qe = me._payload, Ye = me._init;
            try {
              return Pn(Ye(qe), I, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, si = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var I = R._owner, ae = Pn(R.type, R._source, I ? I.type : null);
        si.setExtraStackFrame(ae);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(R, I, ae, me, qe) {
      {
        var Ye = Function.call.bind(Bn);
        for (var ft in R)
          if (Ye(R, ft)) {
            var ot = void 0;
            try {
              if (typeof R[ft] != "function") {
                var Tn = Error((me || "React class") + ": " + ae + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ot = R[ft](I, ft, me, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              ot = tn;
            }
            ot && !(ot instanceof Error) && (oa(qe), pt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ae, ft, typeof ot), oa(null)), ot instanceof Error && !(ot.message in Yr) && (Yr[ot.message] = !0, oa(qe), pt("Failed %s type: %s", ae, ot.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function In(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ae = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ae;
      }
    }
    function Ya(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ya(R))
        return pt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = fn.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ee;
    function xe(R) {
      if (Bn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Bn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, I) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, I) {
      {
        var ae = function() {
          ci || (ci = !0, pt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function vn(R, I) {
      {
        var ae = function() {
          ee || (ee = !0, pt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var un = function(R, I, ae, me, qe, Ye, ft) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: ae,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function Xn(R, I, ae, me, qe) {
      {
        var Ye, ft = {}, ot = null, Tn = null;
        ae !== void 0 && (Sr(ae), ot = "" + ae), rt(I) && (Sr(I.key), ot = "" + I.key), xe(I) && (Tn = I.ref, Ft(I, qe));
        for (Ye in I)
          Bn.call(I, Ye) && !Wa.hasOwnProperty(Ye) && (ft[Ye] = I[Ye]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Ye in tn)
            ft[Ye] === void 0 && (ft[Ye] = tn[Ye]);
        }
        if (ot || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && Jt(ft, on), Tn && vn(ft, on);
        }
        return un(R, ot, Tn, qe, me, sa.current, ft);
      }
    }
    var en = fn.ReactCurrentOwner, It = fn.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var I = R._owner, ae = Pn(R.type, R._source, I ? I.type : null);
        It.setExtraStackFrame(ae);
      } else
        It.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === X;
    }
    function Ta() {
      {
        if (en.current) {
          var R = Oe(en.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Fi(R) {
      return "";
    }
    var Zl = {};
    function Jl(R) {
      {
        var I = Ta();
        if (!I) {
          var ae = typeof R == "string" ? R : R.displayName || R.name;
          ae && (I = `

Check the top-level render call using <` + ae + ">.");
        }
        return I;
      }
    }
    function dl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ae = Jl(I);
        if (Zl[ae])
          return;
        Zl[ae] = !0;
        var me = "";
        R && R._owner && R._owner !== en.current && (me = " It was passed a child from " + Oe(R._owner.type) + "."), Yt(R), pt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, me), Yt(null);
      }
    }
    function pl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var ae = 0; ae < R.length; ae++) {
            var me = R[ae];
            Cr(me) && dl(me, I);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var qe = vt(R);
          if (typeof qe == "function" && qe !== R.entries)
            for (var Ye = qe.call(R), ft; !(ft = Ye.next()).done; )
              Cr(ft.value) && dl(ft.value, I);
        }
      }
    }
    function eu(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var ae;
        if (typeof I == "function")
          ae = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ue || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === J))
          ae = I.propTypes;
        else
          return;
        if (ae) {
          var me = Oe(I);
          qn(ae, R.props, "prop", me, R);
        } else if (I.PropTypes !== void 0 && !ca) {
          ca = !0;
          var qe = Oe(I);
          pt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && pt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var I = Object.keys(R.props), ae = 0; ae < I.length; ae++) {
          var me = I[ae];
          if (me !== "children" && me !== "key") {
            Yt(R), pt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), pt("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var _r = {};
    function rr(R, I, ae, me, qe, Ye) {
      {
        var ft = Zt(R);
        if (!ft) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? ot += Tn : ot += Ta();
          var tn;
          R === null ? tn = "null" : In(R) ? tn = "array" : R !== void 0 && R.$$typeof === X ? (tn = "<" + (Oe(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, pt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, ot);
        }
        var on = Xn(R, I, ae, qe, Ye);
        if (on == null)
          return on;
        if (ft) {
          var ar = I.children;
          if (ar !== void 0)
            if (me)
              if (In(ar)) {
                for (var Qa = 0; Qa < ar.length; Qa++)
                  pl(ar[Qa], R);
                Object.freeze && Object.freeze(ar);
              } else
                pt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Bn.call(I, "key")) {
          var Ga = Oe(R), Xe = Object.keys(I).filter(function(tu) {
            return tu !== "key";
          }), et = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + et]) {
            var qa = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            pt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, Ga, qa, Ga), _r[Ga + et] = !0;
          }
        }
        return R === it ? br(on) : eu(on), on;
      }
    }
    function fi(R, I, ae) {
      return rr(R, I, ae, !0);
    }
    function $a(R, I, ae) {
      return rr(R, I, ae, !1);
    }
    var di = $a, pi = fi;
    Zp.Fragment = it, Zp.jsx = di, Zp.jsxs = pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? v0.exports = J_() : v0.exports = ek();
var ce = v0.exports, Wf = {}, m0 = { exports: {} }, Ba = {}, Qm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function tk() {
  return tR || (tR = 1, function(j) {
    function X(Z, Te) {
      var ne = Z.length;
      Z.push(Te);
      e: for (; 0 < ne; ) {
        var _ = ne - 1 >>> 1, P = Z[_];
        if (0 < gt(P, Te)) Z[_] = Te, Z[ne] = P, ne = _;
        else break e;
      }
    }
    function A(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function it(Z) {
      if (Z.length === 0) return null;
      var Te = Z[0], ne = Z.pop();
      if (ne !== Te) {
        Z[0] = ne;
        e: for (var _ = 0, P = Z.length, Ve = P >>> 1; _ < Ve; ) {
          var Ae = 2 * (_ + 1) - 1, lt = Z[Ae], tt = Ae + 1, Je = Z[tt];
          if (0 > gt(lt, ne)) tt < P && 0 > gt(Je, lt) ? (Z[_] = Je, Z[tt] = ne, _ = tt) : (Z[_] = lt, Z[Ae] = ne, _ = Ae);
          else if (tt < P && 0 > gt(Je, ne)) Z[_] = Je, Z[tt] = ne, _ = tt;
          else break e;
        }
      }
      return Te;
    }
    function gt(Z, Te) {
      var ne = Z.sortIndex - Te.sortIndex;
      return ne !== 0 ? ne : Z.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var St = performance;
      j.unstable_now = function() {
        return St.now();
      };
    } else {
      var S = Date, je = S.now();
      j.unstable_now = function() {
        return S.now() - je;
      };
    }
    var ue = [], pe = [], Ke = 1, J = null, Re = 3, oe = !1, $e = !1, Ct = !1, vt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var Te = A(pe); Te !== null; ) {
        if (Te.callback === null) it(pe);
        else if (Te.startTime <= Z) it(pe), Te.sortIndex = Te.expirationTime, X(ue, Te);
        else break;
        Te = A(pe);
      }
    }
    function ht(Z) {
      if (Ct = !1, Qe(Z), !$e) if (A(ue) !== null) $e = !0, Ot(_e);
      else {
        var Te = A(pe);
        Te !== null && Ee(ht, Te.startTime - Z);
      }
    }
    function _e(Z, Te) {
      $e = !1, Ct && (Ct = !1, fn(an), an = -1), oe = !0;
      var ne = Re;
      try {
        for (Qe(Te), J = A(ue); J !== null && (!(J.expirationTime > Te) || Z && !ln()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, Re = J.priorityLevel;
            var P = _(J.expirationTime <= Te);
            Te = j.unstable_now(), typeof P == "function" ? J.callback = P : J === A(ue) && it(ue), Qe(Te);
          } else it(ue);
          J = A(ue);
        }
        if (J !== null) var Ve = !0;
        else {
          var Ae = A(pe);
          Ae !== null && Ee(ht, Ae.startTime - Te), Ve = !1;
        }
        return Ve;
      } finally {
        J = null, Re = ne, oe = !1;
      }
    }
    var ct = !1, He = null, an = -1, Ht = 5, Zt = -1;
    function ln() {
      return !(j.unstable_now() - Zt < Ht);
    }
    function _t() {
      if (He !== null) {
        var Z = j.unstable_now();
        Zt = Z;
        var Te = !0;
        try {
          Te = He(!0, Z);
        } finally {
          Te ? Oe() : (ct = !1, He = null);
        }
      } else ct = !1;
    }
    var Oe;
    if (typeof pt == "function") Oe = function() {
      pt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, Oe = function() {
        kt.postMessage(null);
      };
    } else Oe = function() {
      vt(_t, 0);
    };
    function Ot(Z) {
      He = Z, ct || (ct = !0, Oe());
    }
    function Ee(Z, Te) {
      an = vt(function() {
        Z(j.unstable_now());
      }, Te);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, j.unstable_continueExecution = function() {
      $e || oe || ($e = !0, Ot(_e));
    }, j.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return Re;
    }, j.unstable_getFirstCallbackNode = function() {
      return A(ue);
    }, j.unstable_next = function(Z) {
      switch (Re) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = Re;
      }
      var ne = Re;
      Re = Te;
      try {
        return Z();
      } finally {
        Re = ne;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(Z, Te) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var ne = Re;
      Re = Z;
      try {
        return Te();
      } finally {
        Re = ne;
      }
    }, j.unstable_scheduleCallback = function(Z, Te, ne) {
      var _ = j.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? _ + ne : _) : ne = _, Z) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ne + P, Z = { id: Ke++, callback: Te, priorityLevel: Z, startTime: ne, expirationTime: P, sortIndex: -1 }, ne > _ ? (Z.sortIndex = ne, X(pe, Z), A(ue) === null && Z === A(pe) && (Ct ? (fn(an), an = -1) : Ct = !0, Ee(ht, ne - _))) : (Z.sortIndex = P, X(ue, Z), $e || oe || ($e = !0, Ot(_e))), Z;
    }, j.unstable_shouldYield = ln, j.unstable_wrapCallback = function(Z) {
      var Te = Re;
      return function() {
        var ne = Re;
        Re = Te;
        try {
          return Z.apply(this, arguments);
        } finally {
          Re = ne;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function nk() {
  return nR || (nR = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, A = 5;
      function it(ee, xe) {
        var rt = ee.length;
        ee.push(xe), S(ee, xe, rt);
      }
      function gt(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function St(ee) {
        if (ee.length === 0)
          return null;
        var xe = ee[0], rt = ee.pop();
        return rt !== xe && (ee[0] = rt, je(ee, rt, 0)), xe;
      }
      function S(ee, xe, rt) {
        for (var Ft = rt; Ft > 0; ) {
          var Jt = Ft - 1 >>> 1, vn = ee[Jt];
          if (ue(vn, xe) > 0)
            ee[Jt] = xe, ee[Ft] = vn, Ft = Jt;
          else
            return;
        }
      }
      function je(ee, xe, rt) {
        for (var Ft = rt, Jt = ee.length, vn = Jt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Xn = ee[un], en = un + 1, It = ee[en];
          if (ue(Xn, xe) < 0)
            en < Jt && ue(It, Xn) < 0 ? (ee[Ft] = It, ee[en] = xe, Ft = en) : (ee[Ft] = Xn, ee[un] = xe, Ft = un);
          else if (en < Jt && ue(It, xe) < 0)
            ee[Ft] = It, ee[en] = xe, Ft = en;
          else
            return;
        }
      }
      function ue(ee, xe) {
        var rt = ee.sortIndex - xe.sortIndex;
        return rt !== 0 ? rt : ee.id - xe.id;
      }
      var pe = 1, Ke = 2, J = 3, Re = 4, oe = 5;
      function $e(ee, xe) {
      }
      var Ct = typeof performance == "object" && typeof performance.now == "function";
      if (Ct) {
        var vt = performance;
        j.unstable_now = function() {
          return vt.now();
        };
      } else {
        var fn = Date, pt = fn.now();
        j.unstable_now = function() {
          return fn.now() - pt;
        };
      }
      var Qe = 1073741823, ht = -1, _e = 250, ct = 5e3, He = 1e4, an = Qe, Ht = [], Zt = [], ln = 1, _t = null, Oe = J, jt = !1, kt = !1, Ot = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(ee) {
        for (var xe = gt(Zt); xe !== null; ) {
          if (xe.callback === null)
            St(Zt);
          else if (xe.startTime <= ee)
            St(Zt), xe.sortIndex = xe.expirationTime, it(Ht, xe);
          else
            return;
          xe = gt(Zt);
        }
      }
      function _(ee) {
        if (Ot = !1, ne(ee), !kt)
          if (gt(Ht) !== null)
            kt = !0, Ln(P);
          else {
            var xe = gt(Zt);
            xe !== null && Sr(_, xe.startTime - ee);
          }
      }
      function P(ee, xe) {
        kt = !1, Ot && (Ot = !1, sa()), jt = !0;
        var rt = Oe;
        try {
          var Ft;
          if (!X) return Ve(ee, xe);
        } finally {
          _t = null, Oe = rt, jt = !1;
        }
      }
      function Ve(ee, xe) {
        var rt = xe;
        for (ne(rt), _t = gt(Ht); _t !== null && !(_t.expirationTime > rt && (!ee || si())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Oe = _t.priorityLevel;
            var Jt = _t.expirationTime <= rt, vn = Ft(Jt);
            rt = j.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === gt(Ht) && St(Ht), ne(rt);
          } else
            St(Ht);
          _t = gt(Ht);
        }
        if (_t !== null)
          return !0;
        var un = gt(Zt);
        return un !== null && Sr(_, un.startTime - rt), !1;
      }
      function Ae(ee, xe) {
        switch (ee) {
          case pe:
          case Ke:
          case J:
          case Re:
          case oe:
            break;
          default:
            ee = J;
        }
        var rt = Oe;
        Oe = ee;
        try {
          return xe();
        } finally {
          Oe = rt;
        }
      }
      function lt(ee) {
        var xe;
        switch (Oe) {
          case pe:
          case Ke:
          case J:
            xe = J;
            break;
          default:
            xe = Oe;
            break;
        }
        var rt = Oe;
        Oe = xe;
        try {
          return ee();
        } finally {
          Oe = rt;
        }
      }
      function tt(ee) {
        var xe = Oe;
        return function() {
          var rt = Oe;
          Oe = xe;
          try {
            return ee.apply(this, arguments);
          } finally {
            Oe = rt;
          }
        };
      }
      function Je(ee, xe, rt) {
        var Ft = j.unstable_now(), Jt;
        if (typeof rt == "object" && rt !== null) {
          var vn = rt.delay;
          typeof vn == "number" && vn > 0 ? Jt = Ft + vn : Jt = Ft;
        } else
          Jt = Ft;
        var un;
        switch (ee) {
          case pe:
            un = ht;
            break;
          case Ke:
            un = _e;
            break;
          case oe:
            un = an;
            break;
          case Re:
            un = He;
            break;
          case J:
          default:
            un = ct;
            break;
        }
        var Xn = Jt + un, en = {
          id: ln++,
          callback: xe,
          priorityLevel: ee,
          startTime: Jt,
          expirationTime: Xn,
          sortIndex: -1
        };
        return Jt > Ft ? (en.sortIndex = Jt, it(Zt, en), gt(Ht) === null && en === gt(Zt) && (Ot ? sa() : Ot = !0, Sr(_, Jt - Ft))) : (en.sortIndex = Xn, it(Ht, en), !kt && !jt && (kt = !0, Ln(P))), en;
      }
      function nt() {
      }
      function ut() {
        !kt && !jt && (kt = !0, Ln(P));
      }
      function Bt() {
        return gt(Ht);
      }
      function On(ee) {
        ee.callback = null;
      }
      function wr() {
        return Oe;
      }
      var En = !1, nr = null, Pn = -1, Bn = A, Yr = -1;
      function si() {
        var ee = j.unstable_now() - Yr;
        return !(ee < Bn);
      }
      function oa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = A;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = j.unstable_now();
          Yr = ee;
          var xe = !0, rt = !0;
          try {
            rt = nr(xe, ee);
          } finally {
            rt ? In() : (En = !1, nr = null);
          }
        } else
          En = !1;
      }, In;
      if (typeof Te == "function")
        In = function() {
          Te(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ya = gr.port2;
        gr.port1.onmessage = Rn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          Ee(Rn, 0);
        };
      function Ln(ee) {
        nr = ee, En || (En = !0, In());
      }
      function Sr(ee, xe) {
        Pn = Ee(function() {
          ee(j.unstable_now());
        }, xe);
      }
      function sa() {
        Z(Pn), Pn = -1;
      }
      var Wa = oa, ci = null;
      j.unstable_IdlePriority = oe, j.unstable_ImmediatePriority = pe, j.unstable_LowPriority = Re, j.unstable_NormalPriority = J, j.unstable_Profiling = ci, j.unstable_UserBlockingPriority = Ke, j.unstable_cancelCallback = On, j.unstable_continueExecution = ut, j.unstable_forceFrameRate = qn, j.unstable_getCurrentPriorityLevel = wr, j.unstable_getFirstCallbackNode = Bt, j.unstable_next = lt, j.unstable_pauseExecution = nt, j.unstable_requestPaint = Wa, j.unstable_runWithPriority = Ae, j.unstable_scheduleCallback = Je, j.unstable_shouldYield = si, j.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rR;
function uR() {
  return rR || (rR = 1, process.env.NODE_ENV === "production" ? Qm.exports = tk() : Qm.exports = nk()), Qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function rk() {
  if (aR) return Ba;
  aR = 1;
  var j = tv, X = uR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var it = /* @__PURE__ */ new Set(), gt = {};
  function St(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (gt[n] = r, n = 0; n < r.length; n++) it.add(r[n]);
  }
  var je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ue = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ke = {}, J = {};
  function Re(n) {
    return ue.call(J, n) ? !0 : ue.call(Ke, n) ? !1 : pe.test(n) ? J[n] = !0 : (Ke[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $e(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ct(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var vt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    vt[n] = new Ct(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    vt[r] = new Ct(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    vt[n] = new Ct(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    vt[n] = new Ct(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    vt[n] = new Ct(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    vt[n] = new Ct(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    vt[n] = new Ct(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    vt[n] = new Ct(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    vt[n] = new Ct(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function pt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      pt
    );
    vt[r] = new Ct(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, pt);
    vt[r] = new Ct(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, pt);
    vt[r] = new Ct(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    vt[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), vt.xlinkHref = new Ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    vt[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = vt.hasOwnProperty(r) ? vt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($e(r, l, c, o) && (l = null), o || c === null ? Re(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ht = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), ct = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Ve = !1;
  function Ae(n, r) {
    if (!n || Ve) return "";
    Ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, C = d.length - 1; 1 <= m && 0 <= C && c[m] !== d[C]; ) C--;
        for (; 1 <= m && 0 <= C; m--, C--) if (c[m] !== d[C]) {
          if (m !== 1 || C !== 1)
            do
              if (m--, C--, 0 > C || c[m] !== d[C]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= C);
          break;
        }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function lt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case ct:
        return "Portal";
      case Ht:
        return "Profiler";
      case an:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Je(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function nt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ut(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ut(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ut(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = nt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = nt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || En(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + nt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: nt(l) };
  }
  function Ya(n, r) {
    var l = nt(r.value), o = nt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wa, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Wa = Wa || document.createElement("div"), Wa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Wa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Cr = null;
  function Ta(n) {
    if (n = ke(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ca ? Cr ? Cr.push(n) : Cr = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Cr;
      if (Cr = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function Jl(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function eu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return Jl(n, r, l);
    } finally {
      pl = !1, (ca !== null || Cr !== null) && (dl(), Zl());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (je) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, C, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch ($) {
      this.onError($);
    }
  }
  var $a = !1, di = null, pi = !1, R = null, I = { onError: function(n) {
    $a = !0, di = n;
  } };
  function ae(n, r, l, o, c, d, m, C, T) {
    $a = !1, di = null, fi.apply(I, arguments);
  }
  function me(n, r, l, o, c, d, m, C, T) {
    if (ae.apply(this, arguments), $a) {
      if ($a) {
        var z = di;
        $a = !1, di = null;
      } else throw Error(A(198));
      pi || (pi = !0, R = z);
    }
  }
  function qe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ye(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ft(n) {
    if (qe(n) !== n) throw Error(A(188));
  }
  function ot(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ft(c), n;
          if (d === o) return ft(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, C = c.child; C; ) {
          if (C === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (C === o) {
            m = !0, o = c, l = d;
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = d.child; C; ) {
            if (C === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (C === o) {
              m = !0, o = d, l = c;
              break;
            }
            C = C.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = ot(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = X.unstable_scheduleCallback, ar = X.unstable_cancelCallback, Qa = X.unstable_shouldYield, Ga = X.unstable_requestPaint, Xe = X.unstable_now, et = X.unstable_getCurrentPriorityLevel, qa = X.unstable_ImmediatePriority, tu = X.unstable_UserBlockingPriority, nu = X.unstable_NormalPriority, vl = X.unstable_LowPriority, $u = X.unstable_IdlePriority, hl = null, Wr = null;
  function Yo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Qu, ic = Math.log, lc = Math.LN2;
  function Qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ic(n) / lc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? o = Xa(C) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Gu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ru(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), C = 1 << m, T = c[m];
      T === -1 ? (!(C & l) || C & o) && (c[m] = Gu(C, r)) : T <= r && (n.expiredLanes |= C), d &= ~C;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function $f(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ku(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Wo, vi, Ie, Zu, ir = !1, hi = [], Dr = null, mi = null, sn = null, Wt = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function au(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $o(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = au(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = au(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = au(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wt.set(d, au(Wt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, au(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Qo(n) {
    var r = pu(n.target);
    if (r !== null) {
      var l = qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ye(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = to(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = ke(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function iu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Qf() {
    ir = !1, Dr !== null && Sl(Dr) && (Dr = null), mi !== null && Sl(mi) && (mi = null), sn !== null && Sl(sn) && (sn = null), Wt.forEach(iu), gl.forEach(iu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Qf)));
  }
  function Za(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < hi.length) {
      wa(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && wa(Dr, n), mi !== null && wa(mi, n), sn !== null && wa(sn, n), Wt.forEach(r), gl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Qo(l), l.blockedOn === null && Yn.shift();
  }
  var yi = ht.ReactCurrentBatchConfig, ba = !0;
  function Ju(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function eo(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (ba) {
      var c = to(n, r, l, o);
      if (c === null) gc(n, r, o, lu, l), xa(n, o);
      else if ($o(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && wt(d), d = to(n, r, l, o), d === null && gc(n, r, o, lu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else gc(n, r, o, null, l);
    }
  }
  var lu = null;
  function to(n, r, l, o) {
    if (lu = null, n = It(o), n = pu(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return lu = n, null;
  }
  function no(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (et()) {
          case qa:
            return 1;
          case tu:
            return 4;
          case nu:
          case vl:
            return 16;
          case $u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, h = null, E = null;
  function N() {
    if (E) return E;
    var n, r = h, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return E = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function Le() {
    return !1;
  }
  function re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var C in n) n.hasOwnProperty(C) && (l = n[C], this[C] = l ? l(d) : d[C]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Le, this.isPropagationStopped = Le, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dt = re(ze), bt = ne({}, ze, { view: 0, detail: 0 }), nn = re(bt), $t, at, Qt, hn = ne({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? ($t = n.screenX - Qt.screenX, at = n.screenY - Qt.screenY) : at = $t = 0, Qt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : at;
  } }), El = re(hn), Go = ne({}, hn, { dataTransfer: 0 }), Pi = re(Go), qo = ne({}, bt, { relatedTarget: 0 }), uu = re(qo), Gf = ne({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = re(Gf), qf = ne({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), nv = re(qf), Xf = ne({}, ze, { data: 0 }), Kf = re(Xf), rv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return Bi;
  }
  var Jf = ne({}, bt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = re(Jf), td = ne({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iv = re(td), oc = ne({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), lv = re(oc), $r = ne({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = re($r), Mn = ne({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = re(Mn), nd = [9, 13, 27, 32], ro = je && "CompositionEvent" in window, Xo = null;
  je && "documentMode" in document && (Xo = document.documentMode);
  var Ko = je && "TextEvent" in window && !Xo, uv = je && (!ro || Xo && 8 < Xo && 11 >= Xo), ov = " ", sc = !1;
  function sv(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ao = !1;
  function fv(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (sc = !0, ov);
      case "textInput":
        return n = r.data, n === ov && sc ? null : n;
      default:
        return null;
    }
  }
  function Xm(n, r) {
    if (ao) return n === "compositionend" || !ro && sv(n, r) ? (n = N(), E = h = Ja = null, ao = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = rs(r, "onChange"), 0 < r.length && (l = new dt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, ou = null;
  function pv(n) {
    fu(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function Zm(n, r) {
    if (n === "change") return r;
  }
  var vv = !1;
  if (je) {
    var ad;
    if (je) {
      var id = "oninput" in document;
      if (!id) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), id = typeof hv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    vv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function mv() {
    gi && (gi.detachEvent("onpropertychange", yv), ou = gi = null);
  }
  function yv(n) {
    if (n.propertyName === "value" && Zo(ou)) {
      var r = [];
      rd(r, ou, n, It(n)), eu(pv, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (mv(), gi = r, ou = l, gi.attachEvent("onpropertychange", yv)) : n === "focusout" && mv();
  }
  function gv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(ou);
  }
  function ey(n, r) {
    if (n === "click") return Zo(r);
  }
  function Sv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ty(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ty;
  function Jo(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ue.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Cv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function cc(n, r) {
    var l = Cv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Cv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function es() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function fc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function io(n) {
    var r = es(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && fc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = cc(l, d);
          var m = cc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ny = je && "documentMode" in document && 11 >= document.documentMode, lo = null, ld = null, ts = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || lo == null || lo !== En(o) || (o = lo, "selectionStart" in o && fc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && Jo(ts, o) || (ts = o, o = rs(ld, "onSelect"), 0 < o.length && (r = new dt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = lo)));
  }
  function dc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var su = { animationend: dc("Animation", "AnimationEnd"), animationiteration: dc("Animation", "AnimationIteration"), animationstart: dc("Animation", "AnimationStart"), transitionend: dc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  je && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete su.animationend.animation, delete su.animationiteration.animation, delete su.animationstart.animation), "TransitionEvent" in window || delete su.transitionend.transition);
  function pc(n) {
    if (lr[n]) return lr[n];
    if (!su[n]) return n;
    var r = su[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = pc("animationend"), Rv = pc("animationiteration"), Tv = pc("animationstart"), xv = pc("transitionend"), cd = /* @__PURE__ */ new Map(), vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), St(r, [n]);
  }
  for (var fd = 0; fd < vc.length; fd++) {
    var cu = vc[fd], ry = cu.toLowerCase(), ay = cu[0].toUpperCase() + cu.slice(1);
    _a(ry, "on" + ay);
  }
  _a(Ev, "onAnimationEnd"), _a(Rv, "onAnimationIteration"), _a(Tv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(xv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), St("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), St("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), St("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), St("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function fu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var C = o[m], T = C.instance, z = C.currentTarget;
          if (C = C.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, C, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (C = o[m], T = C.instance, z = C.currentTarget, C = C.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, C, z), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Vt(n, r) {
    var l = r[ls];
    l === void 0 && (l = r[ls] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function mc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(n) {
    if (!n[yc]) {
      n[yc] = !0, it.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || mc(l, !1, n), mc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[yc] || (r[yc] = !0, mc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (no(r)) {
      case 1:
        var c = Ju;
        break;
      case 4:
        c = eo;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function gc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var C = o.stateNode.containerInfo;
        if (C === c || C.nodeType === 8 && C.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; C !== null; ) {
          if (m = pu(C), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          C = C.parentNode;
        }
      }
      o = o.return;
    }
    eu(function() {
      var z = d, $ = It(l), G = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var fe = dt, ye = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = ed;
              break;
            case "focusin":
              ye = "focus", fe = uu;
              break;
            case "focusout":
              ye = "blur", fe = uu;
              break;
            case "beforeblur":
            case "afterblur":
              fe = uu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = El;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Pi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = lv;
              break;
            case Ev:
            case Rv:
            case Tv:
              fe = uc;
              break;
            case xv:
              fe = Ii;
              break;
            case "scroll":
              fe = nn;
              break;
            case "wheel":
              fe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = iv;
          }
          var Ce = (r & 4) !== 0, kn = !Ce && n === "scroll", k = Ce ? W !== null ? W + "Capture" : null : W;
          Ce = [];
          for (var w = z, L; w !== null; ) {
            L = w;
            var Q = L.stateNode;
            if (L.tag === 5 && Q !== null && (L = Q, k !== null && (Q = br(w, k), Q != null && Ce.push(oo(w, Q, L)))), kn) break;
            w = w.return;
          }
          0 < Ce.length && (W = new fe(W, ye, null, l, $), G.push({ event: W, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", W && l !== en && (ye = l.relatedTarget || l.fromElement) && (pu(ye) || ye[Wi])) break e;
          if ((fe || W) && (W = $.window === $ ? $ : (W = $.ownerDocument) ? W.defaultView || W.parentWindow : window, fe ? (ye = l.relatedTarget || l.toElement, fe = z, ye = ye ? pu(ye) : null, ye !== null && (kn = qe(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (fe = null, ye = z), fe !== ye)) {
            if (Ce = El, Q = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = iv, Q = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = fe == null ? W : ti(fe), L = ye == null ? W : ti(ye), W = new Ce(Q, w + "leave", fe, l, $), W.target = kn, W.relatedTarget = L, Q = null, pu($) === z && (Ce = new Ce(k, w + "enter", ye, l, $), Ce.target = L, Ce.relatedTarget = kn, Q = Ce), kn = Q, fe && ye) t: {
              for (Ce = fe, k = ye, w = 0, L = Ce; L; L = Tl(L)) w++;
              for (L = 0, Q = k; Q; Q = Tl(Q)) L++;
              for (; 0 < w - L; ) Ce = Tl(Ce), w--;
              for (; 0 < L - w; ) k = Tl(k), L--;
              for (; w--; ) {
                if (Ce === k || k !== null && Ce === k.alternate) break t;
                Ce = Tl(Ce), k = Tl(k);
              }
              Ce = null;
            }
            else Ce = null;
            fe !== null && bv(G, W, fe, Ce, !1), ye !== null && kn !== null && bv(G, kn, ye, Ce, !0);
          }
        }
        e: {
          if (W = z ? ti(z) : window, fe = W.nodeName && W.nodeName.toLowerCase(), fe === "select" || fe === "input" && W.type === "file") var ge = Zm;
          else if (dv(W)) if (vv) ge = Sv;
          else {
            ge = gv;
            var Ne = Jm;
          }
          else (fe = W.nodeName) && fe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ge = ey);
          if (ge && (ge = ge(n, z))) {
            rd(G, ge, l, $);
            break e;
          }
          Ne && Ne(n, W, z), n === "focusout" && (Ne = W._wrapperState) && Ne.controlled && W.type === "number" && oa(W, "number", W.value);
        }
        switch (Ne = z ? ti(z) : window, n) {
          case "focusin":
            (dv(Ne) || Ne.contentEditable === "true") && (lo = Ne, ld = z, ts = null);
            break;
          case "focusout":
            ts = ld = lo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(G, l, $);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            od(G, l, $);
        }
        var Ue;
        if (ro) e: {
          switch (n) {
            case "compositionstart":
              var Be = "onCompositionStart";
              break e;
            case "compositionend":
              Be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Be = "onCompositionUpdate";
              break e;
          }
          Be = void 0;
        }
        else ao ? sv(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (uv && l.locale !== "ko" && (ao || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && ao && (Ue = N()) : (Ja = $, h = "value" in Ja ? Ja.value : Ja.textContent, ao = !0)), Ne = rs(z, Be), 0 < Ne.length && (Be = new Kf(Be, n, null, l, $), G.push({ event: Be, listeners: Ne }), Ue ? Be.data = Ue : (Ue = cv(l), Ue !== null && (Be.data = Ue)))), (Ue = Ko ? fv(n, l) : Xm(n, l)) && (z = rs(z, "onBeforeInput"), 0 < z.length && ($ = new Kf("onBeforeInput", "beforeinput", null, l, $), G.push({ event: $, listeners: z }), $.data = Ue));
      }
      fu(G, r);
    });
  }
  function oo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function rs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = br(n, l), d != null && o.unshift(oo(n, d, c)), d = br(n, r), d != null && o.push(oo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var C = l, T = C.alternate, z = C.stateNode;
      if (T !== null && T === o) break;
      C.tag === 5 && z !== null && (C = z, c ? (T = br(l, d), T != null && m.unshift(oo(l, T, C))) : c || (T = br(l, d), T != null && m.push(oo(l, T, C)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var _v = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(_v, `
`).replace(iy, "");
  }
  function Sc(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(A(425));
  }
  function xl() {
  }
  var as = null, du = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Dv = typeof Promise == "function" ? Promise : void 0, so = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dv < "u" ? function(n) {
    return Dv.resolve(null).then(n).catch(Rc);
  } : Ec;
  function Rc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function co(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ov(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + wl, is = "__reactProps$" + wl, Wi = "__reactContainer$" + wl, ls = "__reactEvents$" + wl, fo = "__reactListeners$" + wl, ly = "__reactHandles$" + wl;
  function pu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ov(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Ov(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ci] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function mn(n) {
    return n[is] || null;
  }
  var Et = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = Et[ka], Et[ka] = null, ka--);
  }
  function be(n, r) {
    ka++, Et[ka] = n.current, n.current = r;
  }
  var Er = {}, Cn = Da(Er), Wn = Da(!1), Qr = Er;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Er;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function po() {
    rn(Wn), rn(Cn);
  }
  function Lv(n, r, l) {
    if (Cn.current !== Er) throw Error(A(168));
    be(Cn, r), be(Wn, l);
  }
  function us(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Je(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Er, Qr = Cn.current, be(Cn, n), be(Wn, Wn.current), !0;
  }
  function Tc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = us(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, rn(Wn), rn(Cn), be(Cn, n)) : rn(Wn), be(Wn, l);
  }
  var Ei = null, vo = !1, $i = !1;
  function xc(n) {
    Ei === null ? Ei = [n] : Ei.push(n);
  }
  function bl(n) {
    vo = !0, xc(n);
  }
  function Ri() {
    if (!$i && Ei !== null) {
      $i = !0;
      var n = 0, r = Lt;
      try {
        var l = Ei;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ei = null, vo = !1;
      } catch (c) {
        throw Ei !== null && (Ei = Ei.slice(n + 1)), on(qa, Ri), c;
      } finally {
        Lt = r, $i = !1;
      }
    }
    return null;
  }
  var _l = [], kl = 0, Dl = null, Qi = 0, zn = [], Oa = 0, da = null, Ti = 1, xi = "";
  function vu(n, r) {
    _l[kl++] = Qi, _l[kl++] = Dl, Dl = n, Qi = r;
  }
  function Mv(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = xi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - kr(r) + c | l << c | o, xi = d + n;
    } else Ti = 1 << d | l << c | o, xi = n;
  }
  function wc(n) {
    n.return !== null && (vu(n, 1), Mv(n, 1, 0));
  }
  function bc(n) {
    for (; n === Dl; ) Dl = _l[--kl], _l[kl] = null, Qi = _l[--kl], _l[kl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Xr = null, dn = !1, La = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Nv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Nv(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && Nv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function $n(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function _c(n) {
    if (n !== qr) return !1;
    if (!dn) return $n(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw os(), Error(A(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if ($n(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function os() {
    for (var n = Xr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Xr = qr = null, dn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var uy = ht.ReactCurrentBatchConfig;
  function hu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var C = c.refs;
          m === null ? delete C[d] : C[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function kc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function mu(n) {
    function r(k, w) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [w], k.flags |= 16) : L.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Fl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < w ? (k.flags |= 2, w) : L) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function C(k, w, L, Q) {
      return w === null || w.tag !== 6 ? (w = Qd(L, k.mode, Q), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function T(k, w, L, Q) {
      var ge = L.type;
      return ge === He ? $(k, w, L.props.children, Q, L.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && zv(ge) === w.type) ? (Q = c(w, L.props), Q.ref = hu(k, w, L), Q.return = k, Q) : (Q = Fs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = hu(k, w, L), Q.return = k, Q);
    }
    function z(k, w, L, Q) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = of(L, k.mode, Q), w.return = k, w) : (w = c(w, L.children || []), w.return = k, w);
    }
    function $(k, w, L, Q, ge) {
      return w === null || w.tag !== 7 ? (w = el(L, k.mode, Q, ge), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function G(k, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Qd("" + w, k.mode, L), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _e:
            return L = Fs(w.type, w.key, w.props, null, k.mode, L), L.ref = hu(k, null, w), L.return = k, L;
          case ct:
            return w = of(w, k.mode, L), w.return = k, w;
          case Ot:
            var Q = w._init;
            return G(k, Q(w._payload), L);
        }
        if (qn(w) || Te(w)) return w = el(w, k.mode, L, null), w.return = k, w;
        kc(k, w);
      }
      return null;
    }
    function W(k, w, L, Q) {
      var ge = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ge !== null ? null : C(k, w, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            return L.key === ge ? T(k, w, L, Q) : null;
          case ct:
            return L.key === ge ? z(k, w, L, Q) : null;
          case Ot:
            return ge = L._init, W(
              k,
              w,
              ge(L._payload),
              Q
            );
        }
        if (qn(L) || Te(L)) return ge !== null ? null : $(k, w, L, Q, null);
        kc(k, L);
      }
      return null;
    }
    function fe(k, w, L, Q, ge) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return k = k.get(L) || null, C(w, k, "" + Q, ge);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case _e:
            return k = k.get(Q.key === null ? L : Q.key) || null, T(w, k, Q, ge);
          case ct:
            return k = k.get(Q.key === null ? L : Q.key) || null, z(w, k, Q, ge);
          case Ot:
            var Ne = Q._init;
            return fe(k, w, L, Ne(Q._payload), ge);
        }
        if (qn(Q) || Te(Q)) return k = k.get(L) || null, $(w, k, Q, ge, null);
        kc(w, Q);
      }
      return null;
    }
    function ye(k, w, L, Q) {
      for (var ge = null, Ne = null, Ue = w, Be = w = 0, er = null; Ue !== null && Be < L.length; Be++) {
        Ue.index > Be ? (er = Ue, Ue = null) : er = Ue.sibling;
        var zt = W(k, Ue, L[Be], Q);
        if (zt === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && zt.alternate === null && r(k, Ue), w = d(zt, w, Be), Ne === null ? ge = zt : Ne.sibling = zt, Ne = zt, Ue = er;
      }
      if (Be === L.length) return l(k, Ue), dn && vu(k, Be), ge;
      if (Ue === null) {
        for (; Be < L.length; Be++) Ue = G(k, L[Be], Q), Ue !== null && (w = d(Ue, w, Be), Ne === null ? ge = Ue : Ne.sibling = Ue, Ne = Ue);
        return dn && vu(k, Be), ge;
      }
      for (Ue = o(k, Ue); Be < L.length; Be++) er = fe(Ue, k, Be, L[Be], Q), er !== null && (n && er.alternate !== null && Ue.delete(er.key === null ? Be : er.key), w = d(er, w, Be), Ne === null ? ge = er : Ne.sibling = er, Ne = er);
      return n && Ue.forEach(function(Pl) {
        return r(k, Pl);
      }), dn && vu(k, Be), ge;
    }
    function Ce(k, w, L, Q) {
      var ge = Te(L);
      if (typeof ge != "function") throw Error(A(150));
      if (L = ge.call(L), L == null) throw Error(A(151));
      for (var Ne = ge = null, Ue = w, Be = w = 0, er = null, zt = L.next(); Ue !== null && !zt.done; Be++, zt = L.next()) {
        Ue.index > Be ? (er = Ue, Ue = null) : er = Ue.sibling;
        var Pl = W(k, Ue, zt.value, Q);
        if (Pl === null) {
          Ue === null && (Ue = er);
          break;
        }
        n && Ue && Pl.alternate === null && r(k, Ue), w = d(Pl, w, Be), Ne === null ? ge = Pl : Ne.sibling = Pl, Ne = Pl, Ue = er;
      }
      if (zt.done) return l(
        k,
        Ue
      ), dn && vu(k, Be), ge;
      if (Ue === null) {
        for (; !zt.done; Be++, zt = L.next()) zt = G(k, zt.value, Q), zt !== null && (w = d(zt, w, Be), Ne === null ? ge = zt : Ne.sibling = zt, Ne = zt);
        return dn && vu(k, Be), ge;
      }
      for (Ue = o(k, Ue); !zt.done; Be++, zt = L.next()) zt = fe(Ue, k, Be, zt.value, Q), zt !== null && (n && zt.alternate !== null && Ue.delete(zt.key === null ? Be : zt.key), w = d(zt, w, Be), Ne === null ? ge = zt : Ne.sibling = zt, Ne = zt);
      return n && Ue.forEach(function(mh) {
        return r(k, mh);
      }), dn && vu(k, Be), ge;
    }
    function kn(k, w, L, Q) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            e: {
              for (var ge = L.key, Ne = w; Ne !== null; ) {
                if (Ne.key === ge) {
                  if (ge = L.type, ge === He) {
                    if (Ne.tag === 7) {
                      l(k, Ne.sibling), w = c(Ne, L.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Ne.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && zv(ge) === Ne.type) {
                    l(k, Ne.sibling), w = c(Ne, L.props), w.ref = hu(k, Ne, L), w.return = k, k = w;
                    break e;
                  }
                  l(k, Ne);
                  break;
                } else r(k, Ne);
                Ne = Ne.sibling;
              }
              L.type === He ? (w = el(L.props.children, k.mode, Q, L.key), w.return = k, k = w) : (Q = Fs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = hu(k, w, L), Q.return = k, k = Q);
            }
            return m(k);
          case ct:
            e: {
              for (Ne = L.key; w !== null; ) {
                if (w.key === Ne) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(k, w.sibling), w = c(w, L.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = of(L, k.mode, Q), w.return = k, k = w;
            }
            return m(k);
          case Ot:
            return Ne = L._init, kn(k, w, Ne(L._payload), Q);
        }
        if (qn(L)) return ye(k, w, L, Q);
        if (Te(L)) return Ce(k, w, L, Q);
        kc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, L), w.return = k, k = w) : (l(k, w), w = Qd(L, k.mode, Q), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = mu(!0), ie = mu(!1), pa = Da(null), Kr = null, ho = null, yd = null;
  function gd() {
    yd = ho = Kr = null;
  }
  function Sd(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, yd = ho = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, ho === null) {
      if (Kr === null) throw Error(A(308));
      ho = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else ho = ho.next = n;
    return r;
  }
  var yu = null;
  function Ed(n) {
    yu === null ? yu = [n] : yu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Dc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Av(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ss(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var T = C, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, C = $.lastBaseUpdate, C !== m && (C === null ? $.firstBaseUpdate = z : C.next = z, $.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, $ = z = T = null, C = d;
      do {
        var W = C.lane, fe = C.eventTime;
        if ((o & W) === W) {
          $ !== null && ($ = $.next = {
            eventTime: fe,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var ye = n, Ce = C;
            switch (W = r, fe = l, Ce.tag) {
              case 1:
                if (ye = Ce.payload, typeof ye == "function") {
                  G = ye.call(fe, G, W);
                  break e;
                }
                G = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ce.payload, W = typeof ye == "function" ? ye.call(fe, G, W) : ye, W == null) break e;
                G = ne({}, G, W);
                break e;
              case 2:
                ha = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [C] : W.push(C));
        } else fe = { eventTime: fe, lane: W, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, $ === null ? (z = $ = fe, T = G) : $ = $.next = fe, m |= W;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null) break;
          W = C, C = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (T = G), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var cs = {}, wi = Da(cs), fs = Da(cs), ds = Da(cs);
  function gu(n) {
    if (n === cs) throw Error(A(174));
    return n;
  }
  function wd(n, r) {
    switch (be(ds, r), be(fs, n), be(wi, cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(wi), be(wi, r);
  }
  function Su() {
    rn(wi), rn(fs), rn(ds);
  }
  function jv(n) {
    gu(ds.current);
    var r = gu(wi.current), l = sa(r, n.type);
    r !== l && (be(fs, n), be(wi, l));
  }
  function Oc(n) {
    fs.current === n && (rn(wi), rn(fs));
  }
  var gn = Da(0);
  function Lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ps = [];
  function De() {
    for (var n = 0; n < ps.length; n++) ps[n]._workInProgressVersionPrimary = null;
    ps.length = 0;
  }
  var st = ht.ReactCurrentDispatcher, Mt = ht.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Zn = null, Mc = !1, vs = !1, Cu = 0, Y = 0;
  function Dt() {
    throw Error(A(321));
  }
  function Fe(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, st.current = n === null || n.memoizedState === null ? Qc : Cs, n = l(o, c), vs) {
      d = 0;
      do {
        if (vs = !1, Cu = 0, 25 <= d) throw Error(A(301));
        d += 1, Zn = Un = null, r.updateQueue = null, st.current = Gc, n = l(o, c);
      } while (vs);
    }
    if (st.current = wu, r = Un !== null && Un.next !== null, Gt = 0, Zn = Un = Nt = null, Mc = !1, r) throw Error(A(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function wn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? Nt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(A(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var C = m = null, T = null, z = d;
      do {
        var $ = z.lane;
        if ((Gt & $) === $) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var G = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (C = T = G, m = o) : T = T.next = G, Nt.lanes |= $, Di |= $;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = C, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Eu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Nc() {
  }
  function zc(n, r) {
    var l = Nt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, hs(jc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, Ac.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(A(349));
      Gt & 30 || Uc(l, r, c);
    }
    return c;
  }
  function Uc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ac(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Fc(r) && Hc(n);
  }
  function jc(n, r, l) {
    return l(function() {
      Fc(r) && Hc(n);
    });
  }
  function Fc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Hc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Pc() {
    return wn().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Rr();
    Nt.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Fe(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Bc(n, r) {
    return mo(8390656, 8, n, r);
  }
  function hs(n, r) {
    return yo(2048, 8, n, r);
  }
  function Ic(n, r) {
    return yo(4, 2, n, r);
  }
  function ms(n, r) {
    return yo(4, 4, n, r);
  }
  function Tu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(4, 4, Tu.bind(null, r, n), l);
  }
  function ys() {
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function $c(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = qu(), Nt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function gs(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function _d() {
    return wn().memoizedState;
  }
  function Ss(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Fv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Kt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Fv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, C = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = C, ei(C, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Ed(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Kt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function Fv(n, r) {
    vs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var wu = { readContext: Ma, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Qc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Bc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(
      4194308,
      4,
      Tu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ss.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: ys, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = gs.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(A(349));
      Gt & 30 || Uc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Bc(jc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, Ac.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (dn) {
      var l = xi, o = Ti;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: Wc,
    useContext: Ma,
    useEffect: hs,
    useImperativeHandle: Yc,
    useInsertionEffect: Ic,
    useLayoutEffect: ms,
    useMemo: $c,
    useReducer: Nl,
    useRef: Pc,
    useState: function() {
      return Nl(Xi);
    },
    useDebugValue: ys,
    useDeferredValue: function(n) {
      var r = wn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = Nl(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: Nc,
    useSyncExternalStore: zc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Gc = { readContext: Ma, useCallback: Wc, useContext: Ma, useEffect: hs, useImperativeHandle: Yc, useInsertionEffect: Ic, useLayoutEffect: ms, useMemo: $c, useReducer: Eu, useRef: Pc, useState: function() {
    return Eu(Xi);
  }, useDebugValue: ys, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Eu(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: Nc, useSyncExternalStore: zc, useId: _d, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Dc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Dc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Dc(r, n, o));
  } };
  function Hv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Er, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Qr : Cn.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Er), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Vv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Es(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Qr : Cn.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), ss(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bu(n, r) {
    try {
      var l = "", o = r;
      do
        l += lt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Kc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      To || (To = !0, Du = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Kc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function Bv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Rs = ht.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ie(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && wc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function _u(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ze(n, r, d, o, c)) : (n = Fs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ze(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Iv(n, r, l, o, c);
  }
  function Ts(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, be(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, be(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, be(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, be(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Iv(n, r, l, o, c) {
    var d = Nn(l) ? Qr : Cn.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && wc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Yv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Es(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, C = r.memoizedProps;
      m.props = C;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ma(z) : (z = Nn(l) ? Qr : Cn.current, z = Gr(r, z));
      var $ = l.getDerivedStateFromProps, G = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== o || T !== z) && Vv(r, m, o, z), ha = !1;
      var W = r.memoizedState;
      m.state = W, ss(r, o, m, c), T = r.memoizedState, C !== o || W !== T || Wn.current || ha ? (typeof $ == "function" && (kd(r, l, $, o), T = r.memoizedState), (C = ha || Hv(r, l, C, o, W, T, z)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = C) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Uv(n, r), C = r.memoizedProps, z = r.type === r.elementType ? C : ri(r.type, C), m.props = z, G = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Qr : Cn.current, T = Gr(r, T));
      var fe = l.getDerivedStateFromProps;
      ($ = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== G || W !== T) && Vv(r, m, o, T), ha = !1, W = r.memoizedState, m.state = W, ss(r, o, m, c);
      var ye = r.memoizedState;
      C !== G || W !== ye || Wn.current || ha ? (typeof fe == "function" && (kd(r, l, fe, o), ye = r.memoizedState), (z = ha || Hv(r, l, z, o, W, ye, T) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Tc(r, l, !1), za(n, r, d);
    o = r.stateNode, Rs.current = r;
    var C = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, C, d)) : ur(n, r, C, d), r.memoizedState = o.state, c && Tc(r, l, !0), r.child;
  }
  function go(n) {
    var r = n.stateNode;
    r.pendingContext ? Lv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Lv(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Wv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jc(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, C;
    if ((C = m) || (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), C ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), be(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (C = c.dehydrated, C !== null)) return $v(n, r, m, o, C, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, C = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Fl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? d = Fl(C, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ws(n, r, l, o) {
    return o !== null && Gi(o), xn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function $v(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(A(422))), ws(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return ws(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var C = o.dgst;
      return o = C, d = Error(A(419)), o = Dd(d, o, void 0), ws(n, r, m, o);
    }
    if (C = (m & n.childLanes) !== 0, An || C) {
      if (o = Qn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Wd(), o = Dd(Error(A(421))), ws(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = hy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Si(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, Ti = n.id, xi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function bi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (be(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Na(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function bs(n, r, l) {
    switch (r.tag) {
      case 3:
        go(r), Ol();
        break;
      case 5:
        jv(r);
        break;
      case 1:
        Nn(r.type) && Kn(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        be(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (be(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Jc(n, r, l) : (be(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        be(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), be(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ts(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, Qv, Gv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, gu(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      un(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var C = c[z];
        for (m in C) C.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (gt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (C = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== C && (T != null || C != null)) if (z === "style") if (C) {
          for (m in C) !C.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && C[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, C = C ? C.__html : void 0, T != null && C !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (gt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Vt("scroll", n), d || C === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Gv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function qv(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jn(r), null;
      case 1:
        return Nn(r.type) && po(), Jn(r), null;
      case 3:
        return o = r.stateNode, Su(), rn(Wn), rn(Cn), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Ou(La), La = null))), jn(n, r), Jn(r), null;
      case 5:
        Oc(r);
        var c = gu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Jn(r), null;
          }
          if (n = gu(wi.current), _c(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[is] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++) Vt(ns[c], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  o
                ), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                Pn(o, d), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Vt("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var C = d[m];
              m === "children" ? typeof C == "string" ? o.textContent !== C && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, C, n), c = ["children", C]) : typeof C == "number" && o.textContent !== "" + C && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                C,
                n
              ), c = ["children", "" + C]) : gt.hasOwnProperty(m) && C != null && m === "onScroll" && Vt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), si(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[is] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++) Vt(ns[c], n);
                  c = o;
                  break;
                case "source":
                  Vt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), c = o;
                  break;
                case "details":
                  Vt("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Vt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = In(n, o), Vt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), C = c;
              for (d in C) if (C.hasOwnProperty(d)) {
                var T = C[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (gt.hasOwnProperty(d) ? T != null && d === "onScroll" && Vt("scroll", n) : T != null && Qe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Gv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = gu(ds.current), gu(wi.current), _c(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) os(), Ol(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ci] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Ou(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Su(), jn(n, r), n === null && uo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Sd(r.type._context), Jn(r), null;
      case 17:
        return Nn(r.type) && po(), Jn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Lc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return be(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Xe() > Ro && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Jn(r), null;
          } else 2 * Xe() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Xe(), r.sibling = null, l = gn.current, be(gn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ef(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Nn(r.type) && po(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Su(), rn(Wn), rn(Cn), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Oc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Su(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ks = !1, Tr = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function So(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function tf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Xv = !1;
  function Kv(n, r) {
    if (as = ba, n = es(), fc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, C = -1, T = -1, z = 0, $ = 0, G = n, W = null;
          t: for (; ; ) {
            for (var fe; G !== l || c !== 0 && G.nodeType !== 3 || (C = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (fe = G.firstChild) !== null; )
              W = G, G = fe;
            for (; ; ) {
              if (G === n) break t;
              if (W === l && ++z === c && (C = m), W === d && ++$ === o && (T = m), (fe = G.nextSibling) !== null) break;
              G = W, W = G.parentNode;
            }
            G = fe;
          }
          l = C === -1 || T === -1 ? null : { start: C, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (du = { focusedElem: n, selectionRange: l }, ba = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ce = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ri(r.type, Ce), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (Q) {
        pn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ye = Xv, Xv = !1, ye;
  }
  function Ds(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && tf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Os(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function nf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, nf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[is], delete r[ls], delete r[fo], delete r[ly])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ls(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ki(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ls(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var bn = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) Zv(n, r, l), l = l.sibling;
  }
  function Zv(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || So(l, r);
      case 6:
        var o = bn, c = Mr;
        bn = null, Nr(n, r, l), bn = o, Mr = c, bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? co(n.parentNode, l) : n.nodeType === 1 && co(n, l), Za(n)) : co(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Mr, bn = l.stateNode.containerInfo, Mr = !0, Nr(n, r, l), bn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && tf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Tr && (So(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (C) {
          pn(l, r, C);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Nr(n, r, l), Tr = o) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oy()), r.forEach(function(o) {
        var c = oh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, C = m;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 5:
              bn = C.stateNode, Mr = !1;
              break e;
            case 3:
              bn = C.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              bn = C.stateNode.containerInfo, Mr = !0;
              break e;
          }
          C = C.return;
        }
        if (bn === null) throw Error(A(160));
        Zv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        pn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Ds(3, n, n.return), Os(3, n);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
          try {
            Ds(5, n, n.return);
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, C = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            C === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(C, m);
            var z = Xn(C, d);
            for (m = 0; m < T.length; m += 2) {
              var $ = T[m], G = T[m + 1];
              $ === "style" ? Jt(c, G) : $ === "dangerouslySetInnerHTML" ? ci(c, G) : $ === "children" ? ee(c, G) : Qe(c, $, G, z);
            }
            switch (C) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Rn(c, !!d.multiple, fe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[is] = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            pn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Ce) {
          pn(n, n.return, Ce);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Xe())), o & 4 && Jv(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (z = Tr) || $, ai(r, n), Tr = z) : ai(r, n), ea(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !$ && n.mode & 1) for (he = n, $ = n.child; $ !== null; ) {
            for (G = he = $; he !== null; ) {
              switch (W = he, fe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ds(4, W, W.return);
                  break;
                case 1:
                  So(W, W.return);
                  var ye = W.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ce) {
                      pn(o, l, Ce);
                    }
                  }
                  break;
                case 5:
                  So(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ms(G);
                    continue;
                  }
              }
              fe !== null ? (fe.return = W, he = fe) : Ms(G);
            }
            $ = $.sibling;
          }
          e: for ($ = null, G = n; ; ) {
            if (G.tag === 5) {
              if ($ === null) {
                $ = G;
                try {
                  c = G.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (C = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, C.style.display = Ft("display", m));
                } catch (Ce) {
                  pn(n, n.return, Ce);
                }
              }
            } else if (G.tag === 6) {
              if ($ === null) try {
                G.stateNode.nodeValue = z ? "" : G.memoizedProps;
              } catch (Ce) {
                pn(n, n.return, Ce);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              $ === G && ($ = null), G = G.return;
            }
            $ === G && ($ = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ls(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Ki(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, C = Ki(n);
            _i(n, C, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    he = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ks;
        if (!m) {
          var C = c.alternate, T = C !== null && C.memoizedState !== null || Tr;
          C = ks;
          var z = Tr;
          if (ks = m, (Tr = T) && !z) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, he = T) : Vd(c);
          for (; d !== null; ) he = d, Hd(d), d = d.sibling;
          he = c, ks = C, Tr = z;
        }
        eh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : eh(n);
    }
  }
  function eh(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Os(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                xd(r, m, l);
              }
              break;
            case 5:
              var C = r.stateNode;
              if (l === null && r.flags & 4) {
                l = C;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var $ = z.memoizedState;
                  if ($ !== null) {
                    var G = $.dehydrated;
                    G !== null && Za(G);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ms(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Vd(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Os(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        he = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, he = C;
        break;
      }
      he = r.return;
    }
  }
  var cy = Math.ceil, Ul = ht.ReactCurrentDispatcher, ku = ht.ReactCurrentOwner, or = ht.ReactCurrentBatchConfig, Rt = 0, Qn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), _n = 0, Ns = null, Di = 0, Eo = 0, rf = 0, zs = null, ta = null, Pd = 0, Ro = 1 / 0, ya = null, To = !1, Du = null, Al = null, af = !1, Zi = null, Us = 0, jl = 0, xo = null, As = -1, xr = 0;
  function Hn() {
    return Rt & 6 ? Xe() : As !== -1 ? As : As = Xe();
  }
  function Oi(n) {
    return n.mode & 1 ? Rt & 2 && sr !== 0 ? sr & -sr : uy.transition !== null ? (xr === 0 && (xr = qu()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : no(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, xo = null, Error(A(185));
    Hi(n, l, o), (!(Rt & 2) || n !== Qn) && (n === Qn && (!(Rt & 2) && (Eo |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (Ro = Xe() + 500, vo && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    ru(n, r);
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? bl(Bd.bind(null, n)) : xc(Bd.bind(null, n)), so(function() {
        !(Rt & 6) && Ri();
      }), l = null;
      else {
        switch (Ku(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = tu;
            break;
          case 16:
            l = nu;
            break;
          case 536870912:
            l = $u;
            break;
          default:
            l = nu;
        }
        l = ch(l, lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function lf(n, r) {
    if (As = -1, xr = 0, Rt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (wo() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = uf(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = nh();
      (Qn !== n || sr !== r) && (ya = null, Ro = Xe() + 500, Ji(n, r));
      do
        try {
          rh();
          break;
        } catch (C) {
          th(n, C);
        }
      while (!0);
      gd(), Ul.current = d, Rt = c, Fn !== null ? r = 0 : (Qn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = Ns, Ji(n, 0), ii(n, o), na(n, Xe()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !fy(c) && (r = uf(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = Ns, Ji(n, 0), ii(n, o), na(n, Xe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Pd + 500 - Xe(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Xe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return na(n, Xe()), n.callbackNode === l ? lf.bind(null, n) : null;
  }
  function js(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (Ji(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = ta, ta = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function fy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~rf, r &= ~Eo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Rt & 6) throw Error(A(327));
    wo();
    var r = Ka(n, 0);
    if (!(r & 1)) return na(n, Xe()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = Ns, Ji(n, 0), ii(n, r), na(n, Xe()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, Xe()), null;
  }
  function Id(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (Ro = Xe() + 500, vo && Ri());
    }
  }
  function Lu(n) {
    Zi !== null && Zi.tag === 0 && !(Rt & 6) && wo();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Rt = r, !(Rt & 6) && Ri();
    }
  }
  function Yd() {
    ma = Co.current, rn(Co);
  }
  function Ji(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && po();
          break;
        case 3:
          Su(), rn(Wn), rn(Cn), De();
          break;
        case 5:
          Oc(o);
          break;
        case 4:
          Su();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = Fl(n.current, null), sr = ma = r, _n = 0, Ns = null, rf = Eo = Di = 0, ta = zs = null, yu !== null) {
      for (r = 0; r < yu.length; r++) if (l = yu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      yu = null;
    }
    return n;
  }
  function th(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), st.current = wu, Mc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (Gt = 0, Zn = Un = Nt = null, vs = !1, Cu = 0, ku.current = null, l === null || l.return === null) {
          _n = 1, Ns = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, C = l, T = r;
          if (r = sr, C.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, $ = C, G = $.tag;
            if (!($.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var W = $.alternate;
              W ? ($.updateQueue = W.updateQueue, $.memoizedState = W.memoizedState, $.lanes = W.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var fe = Bv(m);
            if (fe !== null) {
              fe.flags &= -257, zl(fe, m, C, d, r), fe.mode & 1 && Md(d, z, r), r = fe, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, z, r), Wd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (dn && C.mode & 1) {
            var kn = Bv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), zl(kn, m, C, d, r), Gi(bu(T, C));
              break e;
            }
          }
          d = T = bu(T, C), _n !== 4 && (_n = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Pv(d, T, r);
                Av(d, k);
                break e;
              case 1:
                C = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Al === null || !Al.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Ld(d, C, r);
                  Av(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = Ul.current;
    return Ul.current = wu, n === null ? wu : n;
  }
  function Wd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Qn === null || !(Di & 268435455) && !(Eo & 268435455) || ii(Qn, sr);
  }
  function uf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = nh();
    (Qn !== n || sr !== r) && (ya = null, Ji(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        th(n, c);
      }
    while (!0);
    if (gd(), Rt = l, Ul.current = o, Fn !== null) throw Error(A(261));
    return Qn = null, sr = 0, _n;
  }
  function dy() {
    for (; Fn !== null; ) ah(Fn);
  }
  function rh() {
    for (; Fn !== null && !Qa(); ) ah(Fn);
  }
  function ah(n) {
    var r = sh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : Fn = r, ku.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ef(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = qv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Mu(n, r, l) {
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, py(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      wo();
    while (Zi !== null);
    if (Rt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($f(n, d), n === Qn && (Fn = Qn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || af || (af = !0, ch(nu, function() {
      return wo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var C = Rt;
      Rt |= 4, ku.current = null, Kv(n, l), Fd(l, n), io(du), ba = !!as, du = as = null, n.current = l, sy(l), Ga(), Rt = C, Lt = m, or.transition = d;
    } else n.current = l;
    if (af && (af = !1, Zi = n, Us = c), d = n.pendingLanes, d === 0 && (Al = null), Yo(l.stateNode), na(n, Xe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (To) throw To = !1, n = Du, Du = null, n;
    return Us & 1 && n.tag !== 0 && wo(), d = n.pendingLanes, d & 1 ? n === xo ? jl++ : (jl = 0, xo = n) : jl = 0, Ri(), null;
  }
  function wo() {
    if (Zi !== null) {
      var n = Ku(Us), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, Us = 0, Rt & 6) throw Error(A(331));
          var c = Rt;
          for (Rt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var C = d.deletions;
              if (C !== null) {
                for (var T = 0; T < C.length; T++) {
                  var z = C[T];
                  for (he = z; he !== null; ) {
                    var $ = he;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ds(8, $, d);
                    }
                    var G = $.child;
                    if (G !== null) G.return = $, he = G;
                    else for (; he !== null; ) {
                      $ = he;
                      var W = $.sibling, fe = $.return;
                      if (nf($), $ === z) {
                        he = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = fe, he = W;
                        break;
                      }
                      he = fe;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ce = ye.child;
                  if (Ce !== null) {
                    ye.child = null;
                    do {
                      var kn = Ce.sibling;
                      Ce.sibling = null, Ce = kn;
                    } while (Ce !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ds(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, he = k;
                break e;
              }
              he = d.return;
            }
          }
          var w = n.current;
          for (he = w; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = w; he !== null; ) {
              if (C = he, C.flags & 2048) try {
                switch (C.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Os(9, C);
                }
              } catch (ge) {
                pn(C, C.return, ge);
              }
              if (C === m) {
                he = null;
                break e;
              }
              var Q = C.sibling;
              if (Q !== null) {
                Q.return = C.return, he = Q;
                break e;
              }
              he = C.return;
            }
          }
          if (Rt = c, Ri(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = bu(l, r), r = Pv(n, r, 1), n = Ll(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = bu(l, n), n = Ld(r, n, 1), r = Ll(r, n, 1), n = Hn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Xe() - Pd ? Ji(n, 0) : rf |= l), na(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function hy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function oh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var sh;
  sh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, bs(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Mv(r, Qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Na(n, r), n = r.pendingProps;
        var c = Gr(r, Cn.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Es(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && wc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Na(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ri(o, n), c) {
            case 0:
              r = Iv(null, r, o, n, l);
              break e;
            case 1:
              r = Yv(null, r, o, n, l);
              break e;
            case 11:
              r = Jr(null, r, o, n, l);
              break e;
            case 14:
              r = _u(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Iv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Yv(n, r, o, c, l);
      case 3:
        e: {
          if (go(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Uv(n, r), ss(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bu(Error(A(423)), r), r = Wv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bu(Error(A(424)), r), r = Wv(n, r, o, l, c);
            break e;
          } else for (Xr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = ie(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return jv(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Jc(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, be(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Wn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var C = d.dependencies;
            if (C !== null) {
              m = d.child;
              for (var T = C.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var $ = z.pending;
                      $ === null ? T.next = T : (T.next = $.next, $.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
                    d.return,
                    l,
                    r
                  ), C.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, C = m.alternate, C !== null && (C.lanes |= l), Cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Ma(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), _u(n, r, o, c, l);
      case 15:
        return Ze(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Xc(r, o, c), Es(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return bi(n, r, l);
      case 22:
        return Ts(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function ch(n, r) {
    return on(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Fs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return el(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Aa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Oe:
        return n = Aa(13, l, r, c), n.elementType = Oe, n.lanes = d, n;
      case jt:
        return n = Aa(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Ee:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function of(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function sf(n, r, l, o, c, d, m, C, T) {
    return n = new fh(n, r, l, C, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function gy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ct, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Er;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return us(n, l, r);
    }
    return r;
  }
  function dh(n, r, l, o, c, d, m, C, T) {
    return n = sf(l, o, !0, n, c, d, m, C, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = qi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function cf(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Dc(n, c, m)), m;
  }
  function ff(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function df(n, r) {
    qd(n, r), (n = n.alternate) && qd(n, r);
  }
  function ph() {
    return null;
  }
  var Nu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  pf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    cf(n, r, null, null);
  }, pf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        cf(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function pf(n) {
    this._internalRoot = n;
  }
  pf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ie();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Qo(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = ff(m);
          d.call(z);
        };
      }
      var m = dh(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Wi] = m.current, uo(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function() {
        var z = ff(T);
        C.call(z);
      };
    }
    var T = sf(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = T, n[Wi] = T.current, uo(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      cf(r, T, l, o);
    }), T;
  }
  function Hs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var T = ff(m);
          C.call(T);
        };
      }
      cf(r, m, n, c);
    } else m = Sy(l, r, n, c, o);
    return ff(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, Xe()), !(Rt & 6) && (Ro = Xe() + 500, Ri()));
        }
        break;
      case 13:
        Lu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), df(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      df(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      df(n, r);
    }
  }, Ie = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(A(90));
              wr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, Jl = Id, dl = Lu;
  var Cy = { usingClientEntryPoint: !1, Events: [ke, ti, mn, Fi, Zl, Id] }, Vs = { findFiberByHostInstance: pu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      hl = Vl.inject(hh), Wr = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(A(200));
    return gy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(A(299));
    var l = !1, o = "", c = Nu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = sf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, uo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Lu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return Hs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Nu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = dh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, uo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new pf(r);
  }, Ba.render = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return Hs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!vf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Lu(function() {
      Hs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Id, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!vf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Hs(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function ak() {
  return iR || (iR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = tv, X = uR(), A = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, it = !1;
    function gt(e) {
      it = e;
    }
    function St(e) {
      if (!it) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("warn", e, a);
      }
    }
    function S(e) {
      if (!it) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("error", e, a);
      }
    }
    function je(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ue = 0, pe = 1, Ke = 2, J = 3, Re = 4, oe = 5, $e = 6, Ct = 7, vt = 8, fn = 9, pt = 10, Qe = 11, ht = 12, _e = 13, ct = 14, He = 15, an = 16, Ht = 17, Zt = 18, ln = 19, _t = 21, Oe = 22, jt = 23, kt = 24, Ot = 25, Ee = !0, Z = !1, Te = !1, ne = !1, _ = !1, P = !0, Ve = !0, Ae = !0, lt = !0, tt = /* @__PURE__ */ new Set(), Je = {}, nt = {};
    function ut(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      Je[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Je[e] = t;
      {
        var a = e.toLowerCase();
        nt[a] = e, e === "onDoubleClick" && (nt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function Yr(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    var In = 0, gr = 1, Ya = 2, Ln = 3, Sr = 4, sa = 5, Wa = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + ci + "][" + ee + "]*$"), rt = {}, Ft = {};
    function Jt(e) {
      return wr.call(Ft, e) ? !0 : wr.call(rt, e) ? !1 : xe.test(e) ? (Ft[e] = !0, !0) : (rt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      Yt[e] = new It(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new It(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cr = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, Ta);
      Yt[t] = new It(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new It(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fi = "xlinkHref";
    Yt[Fi] = new It(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new It(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Jl = !1;
    function dl(e) {
      !Jl && Zl.test(e) && (Jl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function eu(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && dl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), $a = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), ft = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, Ga = "@@iterator";
    function Xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, qa = 0, tu, nu, vl, $u, hl, Wr, Yo;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function ic() {
      {
        if (qa === 0) {
          tu = console.log, nu = console.info, vl = console.warn, $u = console.error, hl = console.group, Wr = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        qa++;
      }
    }
    function lc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, e, {
              value: tu
            }),
            info: et({}, e, {
              value: nu
            }),
            warn: et({}, e, {
              value: vl
            }),
            error: et({}, e, {
              value: $u
            }),
            group: et({}, e, {
              value: hl
            }),
            groupCollapsed: et({}, e, {
              value: Wr
            }),
            groupEnd: et({}, e, {
              value: Yo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qu = A.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var Xa = !1, Ka;
    {
      var Gu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new Gu();
    }
    function ru(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ka.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Qu.current, Qu.current = null, ic();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ka.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Qu.current = s, lc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Ka.set(e, M), M;
    }
    function yl(e, t, a) {
      return ru(e, !0);
    }
    function qu(e, t, a) {
      return ru(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ru(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ae:
          return fa("Suspense");
        case me:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return qu(e.render);
          case qe:
            return Hi(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $f(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case _e:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case ue:
        case Ke:
        case He:
          return qu(e.type);
        case Qe:
          return qu(e.type.render);
        case pe:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += $f(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ku(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case $a:
          return "StrictMode";
        case ae:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ku(t) + ".Consumer";
          case pi:
            var a = e;
            return Ku(a._context) + ".Provider";
          case I:
            return Lt(e, e.render, "ForwardRef");
          case qe:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case pt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case Qe:
          return Wo(a, a.render, "ForwardRef");
        case Ct:
          return "Fragment";
        case oe:
          return a;
        case Re:
          return "Portal";
        case J:
          return "Root";
        case $e:
          return "Text";
        case an:
          return wt(a);
        case vt:
          return a === $a ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case ht:
          return "Profiler";
        case _t:
          return "Scope";
        case _e:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case pe:
        case ue:
        case Ht:
        case Ke:
        case ct:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = A.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Vi(ir);
    }
    function sn() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function Wt(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function Yn(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var au = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $o(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function iu(e) {
      e._valueTracker = null;
    }
    function Qf(e) {
      var t = "";
      return e && (Qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wa(e) {
      var t = Qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            iu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      Sl(e) || (e._valueTracker = wa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ju = !1, eo = !1, Cl = !1, lu = !1;
    function to(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function no(e, t) {
      var a = e, i = t.checked, u = et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ja(e, t) {
      $o("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ju && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Ju = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: to(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function E(e, t) {
      var a = e;
      {
        var i = to(t);
        !a._wrapperState.controlled && i && !lu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      E(a, t), K(a, t);
    }
    function K(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Nh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), E(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var re = !1, ze = !1, dt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ze || (ze = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !re && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var $t = Array.isArray;
    function at(e) {
      return $t(e);
    }
    var Qt;
    Qt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var El = ["value", "defaultValue"];
    function Go(e) {
      {
        $o("select", e);
        for (var t = 0; t < El.length; t++) {
          var a = El[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(xa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function qo(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function uu(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function uc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var nv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kf(e, t) {
      var a = e;
      $o("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: xa(i)
      };
    }
    function rv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qm(e, t) {
      rv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Zf;
        default:
          return Bi;
      }
    }
    function td(e, t) {
      return e == null || e === Bi ? ed(t) : e === Jf && t === "foreignObject" ? Bi : e;
    }
    var iv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, oc, lv = iv(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        oc = oc || document.createElement("div"), oc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = oc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, Ii = 3, Mn = 8, Yi = 9, nd = 11, ro = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ko = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ko).forEach(function(e) {
      ov.forEach(function(t) {
        Ko[uv(t, e)] = Ko[e];
      });
    });
    function sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ko.hasOwnProperty(e) && Ko[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var sv = /([A-Z])/g, cv = /^ms-/;
    function ao(e) {
      return e.replace(sv, "-$1").toLowerCase().replace(cv, "-ms-");
    }
    var fv = function() {
    };
    {
      var Xm = /^(?:webkit|moz|o)[A-Z]/, Km = /^-ms-/, dv = /-(.)/g, rd = /;\s*$/, gi = {}, ou = {}, pv = !1, Zo = !1, Zm = function(e) {
        return e.replace(dv, function(t, a) {
          return a.toUpperCase();
        });
      }, vv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zm(e.replace(Km, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, hv = function(e, t) {
        pv || (pv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fv = function(e, t) {
        e.indexOf("-") > -1 ? vv(e) : Xm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var yv = fv;
    function Jm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ao(i)) + ":", t += sc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || yv(i, t[i]);
          var s = sc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ty(e, t) {
      {
        if (!t)
          return;
        var a = Sv(e), i = Sv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Jo = et({
      menuitem: !0
    }, ei), Cv = "__html";
    function cc(e, t) {
      if (t) {
        if (Jo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Cv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var es = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, fc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, io = {}, ny = new RegExp("^(aria)-[" + ee + "]*$"), lo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function ld(e, t) {
      {
        if (wr.call(io, t) && io[t])
          return !0;
        if (lo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = fc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), io[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), io[t] = !0, !0;
        }
        if (ny.test(t)) {
          var u = t.toLowerCase(), s = fc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return io[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), io[t] = !0, !0;
        }
      }
      return !0;
    }
    function ts(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Rl(e, t) || ts(e, t);
    }
    var od = !1;
    function dc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var su = function() {
    };
    {
      var lr = {}, sd = /^on./, pc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      su = function(e, t, a, i) {
        if (wr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (sd.test(t))
          return pc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Ev.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === In;
        if (es.hasOwnProperty(u)) {
          var g = es[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = su(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function xv(e, t, a) {
      Rl(e, t) || Tv(e, t, a);
    }
    var cd = 1, vc = 2, _a = 4, fd = cd | vc | _a, cu = null;
    function ry(e) {
      cu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cu = e;
    }
    function ay() {
      cu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cu = null;
    }
    function ns(e) {
      return e === cu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var hc = null, fu = null, Vt = null;
    function mc(e) {
      var t = ko(e);
      if (t) {
        if (typeof hc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Nh(a);
          hc(t.stateNode, t.type, i);
        }
      }
    }
    function yc(e) {
      hc = e;
    }
    function uo(e) {
      fu ? Vt ? Vt.push(e) : Vt = [e] : fu = e;
    }
    function wv() {
      return fu !== null || Vt !== null;
    }
    function gc() {
      if (fu) {
        var e = fu, t = Vt;
        if (fu = null, Vt = null, mc(e), t)
          for (var a = 0; a < t.length; a++)
            mc(t[a]);
      }
    }
    var oo = function(e, t) {
      return e(t);
    }, rs = function() {
    }, Tl = !1;
    function bv() {
      var e = wv();
      e && (rs(), gc());
    }
    function _v(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return oo(e, t, a);
      } finally {
        Tl = !1, bv();
      }
    }
    function iy(e, t, a) {
      oo = e, rs = a;
    }
    function kv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Sc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && kv(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Nh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Sc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var as = !1;
    if (On)
      try {
        var du = {};
        Object.defineProperty(du, "passive", {
          get: function() {
            as = !0;
          }
        }), window.addEventListener("test", du, du), window.removeEventListener("test", du, du);
      } catch {
        as = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ec = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Ec = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          pd.removeEventListener(V, Me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Me() {
          b = !0, H(), a.apply(i, le), x = !1;
        }
        var we, xt = !1, mt = !1;
        function D(O) {
          if (we = O.error, xt = !0, we === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(V, Me, !1), g.initEvent(V, !1, !1), pd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && x && (xt ? mt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", D), !b)
          return H(), Cc.apply(this, arguments);
      };
    }
    var Dv = Ec, so = !1, Rc = null, co = !1, Si = null, Ov = {
      onError: function(e) {
        so = !0, Rc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      so = !1, Rc = null, Dv.apply(Ov, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), so) {
        var y = ls();
        co || (co = !0, Si = y);
      }
    }
    function is() {
      if (co) {
        var e = Si;
        throw co = !1, Si = null, e;
      }
    }
    function Wi() {
      return so;
    }
    function ls() {
      if (so) {
        var e = Rc;
        return so = !1, Rc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fo(e) {
      return e._reactInternals;
    }
    function ly(e) {
      return e._reactInternals !== void 0;
    }
    function pu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), be = (
      /*                   */
      128
    ), Er = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Qr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), po = (
      /*             */
      16384
    ), Lv = (
      /*               */
      32767
    ), us = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), Tc = (
      /* */
      131072
    ), Ei = (
      /*                       */
      1048576
    ), vo = (
      /*                    */
      2097152
    ), $i = (
      /*                 */
      4194304
    ), xc = (
      /*                */
      8388608
    ), bl = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | Wn | 0
    ), kl = mn | Et | ka | Da | Cn | Gr | Nn, Dl = Et | rn | Cn | Nn, Qi = Qr | ka, zn = $i | xc | vo, Oa = A.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function Ti(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function vu(e) {
      return da(e) === e;
    }
    function Mv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = fo(e);
      return u ? da(u) === u : !1;
    }
    function wc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function bc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return wc(s), e;
            if (v === u)
              return wc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = bc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = bc(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Re) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = X.unstable_scheduleCallback, Nv = X.unstable_cancelCallback, hd = X.unstable_shouldYield, md = X.unstable_requestPaint, $n = X.unstable_now, _c = X.unstable_getCurrentPriorityLevel, os = X.unstable_ImmediatePriority, Ol = X.unstable_UserBlockingPriority, Gi = X.unstable_NormalPriority, uy = X.unstable_LowPriority, hu = X.unstable_IdlePriority, kc = X.unstable_yieldValue, zv = X.unstable_setDisableYieldValue, mu = null, xn = null, ie = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ho(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = et({}, e, {
          getLaneLabelMap: yu,
          injectProfilingHooks: Ma
        })), mu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(mu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & be) === be;
          if (Ae) {
            var i;
            switch (t) {
              case Lr:
                i = os;
                break;
              case bi:
                i = Ol;
                break;
              case Na:
                i = Gi;
                break;
              case za:
                i = hu;
                break;
              default:
                i = Gi;
                break;
            }
            xn.onCommitFiberRoot(mu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof kc == "function" && (zv(e), gt(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ie = e;
    }
    function yu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Fv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ed(e) {
      ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(e);
    }
    function Rd() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function va(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function ha() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function Td(e) {
      ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(e);
    }
    function Uv() {
      ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped();
    }
    function Dc(e) {
      ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(e);
    }
    function Av() {
      ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped();
    }
    function ss(e) {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped();
    }
    function cs(e, t, a) {
      ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(e, t, a);
    }
    function fs(e) {
      ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(e);
    }
    function ds() {
      ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
    }
    function gu(e) {
      ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(e);
    }
    function wd() {
      ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped();
    }
    function Su(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function jv() {
      ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded();
    }
    function Oc() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function gn(e) {
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(e);
    }
    function Lc(e, t) {
      ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), st = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : vs, Zn = Math.log, Mc = Math.LN2;
    function vs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Mc | 0) | 0;
    }
    var Cu = 31, Y = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Fe = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), Eu = (
      /*                        */
      64
    ), Nc = (
      /*                        */
      128
    ), zc = (
      /*                        */
      256
    ), Uc = (
      /*                        */
      512
    ), Ac = (
      /*                        */
      1024
    ), jc = (
      /*                        */
      2048
    ), Fc = (
      /*                        */
      4096
    ), Hc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Pc = (
      /*                       */
      65536
    ), mo = (
      /*                       */
      131072
    ), yo = (
      /*                       */
      262144
    ), Bc = (
      /*                       */
      524288
    ), hs = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ms = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Yc = (
      /*                             */
      8388608
    ), ys = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), $c = (
      /*                             */
      67108864
    ), bd = Tu, gs = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Ss = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function Fv(e) {
      {
        if (e & Fe)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & ms)
          return "Retry";
        if (e & gs)
          return "SelectiveHydration";
        if (e & Ss)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Kt = -1, wu = Eu, Qc = Tu;
    function Cs(e) {
      switch (zl(e)) {
        case Fe:
          return Fe;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Eu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Ru:
        case Pc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Ic:
          return e & Nl;
        case Tu:
        case Yc:
        case ys:
        case Wc:
        case $c:
          return e & ms;
        case gs:
          return gs;
        case Ss:
          return Ss;
        case xu:
          return xu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Gc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Y && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Cs(y) : s !== Y && (i = Cs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = zl(i), b = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & Nl) !== Y
        )
          return t;
      }
      (i & ni) !== Y && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var M = e.entanglements, U = i & x; U > 0; ) {
          var H = An(U), le = 1 << H;
          i |= M[H], U &= ~le;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Fe:
        case Ml:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case Xi:
        case Eu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Ru:
        case Pc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Ic:
          return t + 5e3;
        case Tu:
        case Yc:
        case ys:
        case Wc:
        case $c:
          return Kt;
        case gs:
        case Ss:
        case xu:
        case Zr:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Hv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Y ? t : t & Zr ? Zr : Y;
    }
    function Vv(e) {
      return (e & Fe) !== Y;
    }
    function Es(e) {
      return (e & _d) !== Y;
    }
    function bu(e) {
      return (e & ms) === e;
    }
    function Dd(e) {
      var t = Fe | ni | wn;
      return (e & t) === Y;
    }
    function Od(e) {
      return (e & Nl) === e;
    }
    function Kc(e, t) {
      var a = Ml | ni | Rr | wn;
      return (t & a) !== Y;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & Nl) !== Y;
    }
    function Md() {
      var e = wu;
      return wu <<= 1, (wu & Nl) === Y && (wu = Eu), e;
    }
    function Bv() {
      var e = Qc;
      return Qc <<= 1, (Qc & ms) === Y && (Qc = Tu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Rs(e) {
      return zl(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Jr(e, t) {
      return (e & t) !== Y;
    }
    function _u(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function go(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Wv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case wn:
          i = Rr;
          break;
        case Eu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Ru:
        case Pc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Ic:
        case Tu:
        case Yc:
        case ys:
        case Wc:
        case $c:
          i = Xi;
          break;
        case xu:
          i = Ss;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function ws(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function $v(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Lr = Fe, bi = ni, Na = wn, za = xu, bs = Dt;
    function Ua() {
      return bs;
    }
    function jn(e) {
      bs = e;
    }
    function Qv(e, t) {
      var a = bs;
      try {
        return bs = e, t();
      } finally {
        bs = a;
      }
    }
    function Gv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _s(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = zl(e);
      return Jn(Lr, t) ? Jn(bi, t) ? Es(t) ? Na : za : bi : Lr;
    }
    function ef(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ks;
    function Tr(e) {
      ks = e;
    }
    function oy(e) {
      ks(e);
    }
    var he;
    function So(e) {
      he = e;
    }
    var tf;
    function Xv(e) {
      tf = e;
    }
    var Kv;
    function Ds(e) {
      Kv = e;
    }
    var Os;
    function jd(e) {
      Os = e;
    }
    var nf = !1, Ls = [], Ki = null, _i = null, ki = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Zv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ki = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = ko(t);
          p !== null && he(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function sy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ki = ea(Ki, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ea(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Mr.set(b, ea(Mr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Os(e.priority, function() {
                tf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (ef(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = Kv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Jn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ms(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Eo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), ay();
        } else {
          var f = ko(i);
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ms(e) && a.delete(t);
    }
    function cy() {
      nf = !1, Ki !== null && Ms(Ki) && (Ki = null), _i !== null && Ms(_i) && (_i = null), ki !== null && Ms(ki) && (ki = null), bn.forEach(Vd), Mr.forEach(Vd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nf || (nf = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, cy)));
    }
    function ku(e) {
      if (Ls.length > 0) {
        Ul(Ls[0], e);
        for (var t = 1; t < Ls.length; t++) {
          var a = Ls[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ki !== null && Ul(Ki, e), _i !== null && Ul(_i, e), ki !== null && Ul(ki, e);
      var i = function(p) {
        return Ul(p, e);
      };
      bn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Nr.length; u++) {
        var s = Nr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var f = Nr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Nr.shift();
      }
    }
    var or = A.ReactCurrentBatchConfig, Rt = !0;
    function Qn(e) {
      Rt = !!e;
    }
    function Fn() {
      return Rt;
    }
    function sr(e, t, a) {
      var i = rf(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case bi:
          u = Co;
          break;
        case Na:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Lr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(bi), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Rt && Ns(e, t, a, i);
    }
    function Ns(e, t, a, i) {
      var u = Eo(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Di, a), Fd(e, i);
        return;
      }
      if (sy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & _a && Jv(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && oy(s);
          var f = Eo(e, t, a, i);
          if (f === null && _y(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Di = null;
    function Eo(e, t, a, i) {
      Di = null;
      var u = dd(i), s = Is(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (ef(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function rf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bi;
        case "message": {
          var t = _c();
          switch (t) {
            case os:
              return Lr;
            case Ol:
              return bi;
            case Gi:
            case uy:
              return Na;
            case hu:
              return za;
            default:
              return Na;
          }
        }
        default:
          return Na;
      }
    }
    function zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, To = null, Du = null;
    function Al(e) {
      return ya = e, To = Us(), !0;
    }
    function af() {
      ya = null, To = null, Du = null;
    }
    function Zi() {
      if (Du)
        return Du;
      var e, t = To, a = t.length, i, u = Us(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Du = u.slice(e, p), Du;
    }
    function Us() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function As() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = xo : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = xr(Hn), zr = et({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), lf, js, Ou;
    function fy(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (lf = e.screenX - Ou.screenX, js = e.screenY - Ou.screenY) : (lf = 0, js = 0), Ou = e);
    }
    var ii = et({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (fy(e), lf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), Bd = xr(ii), Id = et({}, ii, {
      dataTransfer: 0
    }), Lu = xr(Id), Yd = et({}, zr, {
      relatedTarget: 0
    }), Ji = xr(Yd), th = et({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nh = xr(th), Wd = et({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uf = xr(Wd), dy = et({}, Hn, {
      data: 0
    }), rh = xr(dy), ah = rh, ih = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function py(e) {
      if (e.key) {
        var t = ih[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var wo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return lh;
    }
    var vy = et({}, zr, {
      key: py,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), uh = xr(vy), hy = et({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), oh = xr(hy), sh = et({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), ch = xr(sh), my = et({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(my), $d = et({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), yy = xr($d), Fl = [9, 13, 27, 32], Fs = 229, el = On && "CompositionEvent" in window, Hl = null;
    On && "documentMode" in document && (Hl = document.documentMode);
    var Qd = On && "TextEvent" in window && !Hl, of = On && (!el || Hl && Hl > 8 && Hl <= 11), fh = 32, sf = String.fromCharCode(fh);
    function gy() {
      ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function dh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function cf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ff(e, t) {
      return e === "keydown" && t.keyCode === Fs;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ph(e) {
      return e.locale === "ko";
    }
    var Nu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (el ? s = cf(t) : Nu ? qd(t, i) && (s = "onCompositionEnd") : ff(t, i) && (s = "onCompositionStart"), !s)
        return null;
      of && !ph(i) && (!Nu && s === "onCompositionStart" ? Nu = Al(u) : s === "onCompositionEnd" && Nu && (f = Zi()));
      var p = Ch(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = df(i);
          y !== null && (v.data = y);
        }
      }
    }
    function pf(e, t) {
      switch (e) {
        case "compositionend":
          return df(t);
        case "keypress":
          var a = t.which;
          return a !== fh ? null : (Gd = !0, sf);
        case "textInput":
          var i = t.data;
          return i === sf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Kd(e, t) {
      if (Nu) {
        if (e === "compositionend" || !el && qd(e, t)) {
          var a = Zi();
          return af(), Nu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!dh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return of && !ph(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vf(e, t, a, i, u) {
      var s;
      if (Qd ? s = pf(t, i) : s = Kd(t, i), !s)
        return null;
      var f = Ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function vh(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), vf(e, t, a, i, u);
    }
    var Sy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Hs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Cy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      ut("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function hh(e, t, a, i) {
      uo(i);
      var u = Ch(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      hh(t, n, e, dd(e)), _v(o, t);
    }
    function o(e) {
      k0(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Cy("input") && (!document.documentMode || document.documentMode > 9));
    function C(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", z);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", z), Vl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function $(e, t, a) {
      e === "focusin" ? (T(), C(t, a)) : e === "focusout" && T();
    }
    function G(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ce(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Hs(p) ? m ? v = ye : (v = G, y = $) : W(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          hh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ce(p);
    }
    function k() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ns(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (x = a, M = U ? Is(U) : null, M !== null) {
            var H = da(M);
            (M !== H || M.tag !== oe && M.tag !== $e) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var le = Bd, Me = "onMouseLeave", we = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = oh, Me = "onPointerLeave", we = "onPointerEnter", xt = "pointer");
          var mt = x == null ? g : Cf(x), D = M == null ? g : Cf(M), V = new le(Me, xt + "leave", x, i, u);
          V.target = mt, V.relatedTarget = D;
          var O = null, q = Is(u);
          if (q === a) {
            var ve = new le(we, xt + "enter", M, i, u);
            ve.target = D, ve.relatedTarget = mt, O = ve;
          }
          kR(e, V, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : L;
    function ge(e, t) {
      if (Q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !Q(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ne(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ue(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Be(e, t) {
      for (var a = Ne(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ne(Ue(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Pl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Be(e, f), g = Be(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function mh(e) {
      return e && e.nodeType === Ii;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : mh(e) ? !1 : mh(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cR(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function fR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (fR(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dR() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? vR(e) : null
      };
    }
    function pR(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cR(a)) {
        i !== null && Ey(a) && hR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $r && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function vR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function hR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Pl(e, t);
    }
    var mR = On && "documentMode" in document && document.documentMode <= 11;
    function yR() {
      ut("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var hf = null, Ry = null, Zd = null, Ty = !1;
    function gR(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function SR(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = SR(a);
      if (!(Ty || hf == null || hf !== ba(i))) {
        var u = gR(hf);
        if (!Zd || !ge(Zd, u)) {
          Zd = u;
          var s = Ch(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = hf;
          }
        }
      }
    }
    function CR(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Hs(p) || p.contentEditable === "true") && (hf = p, Ry = a, Zd = null);
          break;
        case "focusout":
          hf = null, Ry = null, Zd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (mR)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var mf = {
      animationend: yh("Animation", "AnimationEnd"),
      animationiteration: yh("Animation", "AnimationIteration"),
      animationstart: yh("Animation", "AnimationStart"),
      transitionend: yh("Transition", "TransitionEnd")
    }, xy = {}, C0 = {};
    On && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete mf.animationend.animation, delete mf.animationiteration.animation, delete mf.animationstart.animation), "TransitionEvent" in window || delete mf.transitionend.transition);
    function gh(e) {
      if (xy[e])
        return xy[e];
      if (!mf[e])
        return e;
      var t = mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return xy[e] = t[a];
      return e;
    }
    var E0 = gh("animationend"), R0 = gh("animationiteration"), T0 = gh("animationstart"), x0 = gh("transitionend"), w0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      w0.set(e, t), ut(t, [e]);
    }
    function ER() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(E0, "onAnimationEnd"), bo(R0, "onAnimationIteration"), bo(T0, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(x0, "onTransitionEnd");
    }
    function RR(e, t, a, i, u, s, f) {
      var p = w0.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = uh;
            break;
          case "focusin":
            y = "focus", v = Ji;
            break;
          case "focusout":
            y = "blur", v = Ji;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ji;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ch;
            break;
          case E0:
          case R0:
          case T0:
            v = nh;
            break;
          case x0:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = oh;
            break;
        }
        var g = (s & _a) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = bR(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    ER(), k(), Vs(), yR(), gy();
    function TR(e, t, a, i, u, s, f) {
      RR(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), CR(e, t, a, i, u), vh(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function xR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _0(e, M, x), i = b;
        }
    }
    function k0(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xR(s, f, a);
      }
      is();
    }
    function wR(e, t, a, i, u) {
      var s = dd(a), f = [];
      TR(f, e, i, a, s, t), k0(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tx(t), u = DR(e);
      i.has(u) || (D0(t, e, vc, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), D0(a, e, i, t);
    }
    var Sh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[Sh]) {
        e[Sh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Sh] || (t[Sh] = !0, by("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      as && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : zs(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & vc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Re) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Re)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === Re) {
                    var x = g.stateNode.containerInfo;
                    if (O0(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Is(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === oe || U === $e) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return wR(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === oe && x !== null && (g = x, p !== null)) {
          var U = xl(y, p);
          U != null && v.push(tp(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = xl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function _R(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = yf(s))
        u++;
      for (var f = 0, p = i; p; p = yf(p))
        f++;
      for (; u - f > 0; )
        a = yf(a), u--;
      for (; f - u > 0; )
        i = yf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = yf(a), i = yf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === oe && g !== null) {
          var x = g;
          if (u) {
            var M = xl(p, s);
            M != null && f.unshift(tp(p, M, x));
          } else if (!u) {
            var U = xl(p, s);
            U != null && f.push(tp(p, U, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kR(e, t, a, i, u) {
      var s = i && u ? _R(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function DR(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", M0 = "autoFocus", Ps = "children", Bs = "style", Rh = "__html", ky, Th, rp, N0, xh, z0, U0;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      ud(e, t), dc(e, t), xv(e, t, {
        registrationNameDependencies: Je,
        possibleRegistrationNames: nt
      });
    }, z0 = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = wh(a), u = wh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, N0 = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OR = /\r\n?/g, LR = /\u0000|\uFFFD/g;
    function wh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OR, `
`).replace(LR, "");
    }
    function bh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function MR() {
    }
    function _h(e) {
      e.onclick = MR;
    }
    function NR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), gv(t, f);
          else if (s === np) {
            var p = f ? f[Rh] : void 0;
            p != null && lv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ro(t, f);
            } else typeof f == "number" && ro(t, "" + f);
          else s === Eh || s === _o || s === M0 || (Je.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function zR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? gv(e, f) : s === np ? lv(e, f) : s === Ps ? ro(e, f) : br(e, s, f, i);
      }
    }
    function UR(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Bi && (p = ed(e)), p === Bi) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AR(e, t) {
      return A0(t).createTextNode(e);
    }
    function jR(e, t, a, i) {
      var u = Rl(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Sn(Jd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Ja(e, a), s = no(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          uu(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (cc(t, s), NR(t, e, i, s, u), t) {
        case "input":
          Za(e), N(e, a, !1);
          break;
        case "textarea":
          Za(e), av(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function FR(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = no(e, a), p = no(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      cc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Ps || v === Eh || v === _o || v === M0 || (Je.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Bs)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var U = x ? x[Rh] : void 0, H = M ? M[Rh] : void 0;
            U != null && H !== U && (s = s || []).push(v, U);
          } else v === Ps ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === _o || (Je.hasOwnProperty(v) ? (x != null && (typeof x != "function" && xh(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ty(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function HR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (zR(e, t, s, f), a) {
        case "input":
          E(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          uc(e, u);
          break;
      }
    }
    function VR(e) {
      {
        var t = e.toLowerCase();
        return es.hasOwnProperty(t) && es[t] || null;
      }
    }
    function PR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), Th(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Sn(Jd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Ja(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          uu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), Sn("invalid", e);
          break;
      }
      cc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var H = a[U];
          if (U === Ps)
            typeof H == "string" ? e.textContent !== H && (a[_o] !== !0 && bh(e.textContent, H, s, f), M = [Ps, H]) : typeof H == "number" && e.textContent !== "" + H && (a[_o] !== !0 && bh(e.textContent, H, s, f), M = [Ps, "" + H]);
          else if (Je.hasOwnProperty(U))
            H != null && (typeof H != "function" && xh(U, H), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Me = en(U);
            if (a[_o] !== !0) {
              if (!(U === Eh || U === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === np) {
                  var we = e.innerHTML, xt = H ? H[Rh] : void 0;
                  if (xt != null) {
                    var mt = U0(e, xt);
                    mt !== we && rp(U, we, mt);
                  }
                } else if (U === Bs) {
                  if (v.delete(U), z0) {
                    var D = Jm(H);
                    le = e.getAttribute("style"), D !== le && rp(U, le, D);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), le = eu(e, U, H), H !== le && rp(U, le, H);
                else if (!vn(U, Me, p) && !Xn(U, H, Me, p)) {
                  var V = !1;
                  if (Me !== null)
                    v.delete(Me.attributeName), le = pl(e, U, H, Me);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = VR(U);
                      q !== null && q !== U && (V = !0, v.delete(q)), v.delete(U);
                    }
                    le = eu(e, U, H);
                  }
                  var ve = _;
                  !ve && H !== le && !V && rp(U, le, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && N0(v), t) {
        case "input":
          Za(e), N(e, a, !0);
          break;
        case "textarea":
          Za(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return M;
    }
    function BR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IR(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          qm(e, a);
          return;
        case "select":
          qf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var YR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], WR = j0.concat(["button"]), $R = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = et({}, e || F0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return $R.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, H0 = {};
      ap = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QR(e, u) ? null : i, f = s ? null : GR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var kh = "suppressHydrationWarning", Dh = "$", Oh = "/$", lp = "$?", up = "$!", qR = "style", Ny = null, zy = null;
    function XR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case nd: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KR(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sk(e) {
      return e;
    }
    function ZR(e) {
      Ny = Fn(), zy = dR();
      var t = null;
      return Qn(!1), t;
    }
    function JR(e) {
      pR(zy), Qn(Ny), Ny = null, zy = null;
    }
    function eT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = UR(e, t, a, s);
      return cp(u, y), By(y, t), y;
    }
    function tT(e, t) {
      e.appendChild(t);
    }
    function nT(e, t, a, i, u) {
      switch (jR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function rT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return FR(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aT(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = AR(e, t);
      return cp(i, s), s;
    }
    function iT() {
      var e = window.event;
      return e === void 0 ? Na : rf(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, lT = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, V0 = typeof Promise == "function" ? Promise : void 0, uT = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(oT);
    } : Ay;
    function oT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function cT(e, t, a, i, u, s) {
      HR(e, t, a, i, u), By(e, u);
    }
    function P0(e) {
      ro(e, "");
    }
    function fT(e, t, a) {
      e.nodeValue = a;
    }
    function dT(e, t) {
      e.appendChild(t);
    }
    function pT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function vT(e, t, a) {
      e.insertBefore(t, a);
    }
    function hT(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mT(e, t) {
      e.removeChild(t);
    }
    function yT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Oh)
            if (i === 0) {
              e.removeChild(u), ku(t);
              return;
            } else
              i--;
          else (s === Dh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      ku(t);
    }
    function gT(e, t) {
      e.nodeType === Mn ? Fy(e.parentNode, t) : e.nodeType === $r && Fy(e, t), ku(e);
    }
    function ST(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CT(e) {
      e.nodeValue = "";
    }
    function ET(e, t) {
      e = e;
      var a = t[qR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = sc("display", i);
    }
    function RT(e, t) {
      e.nodeValue = t;
    }
    function TT(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function xT(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wT(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function bT(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function B0(e) {
      return e.data === lp;
    }
    function Hy(e) {
      return e.data === up;
    }
    function _T(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kT(e, t) {
      e._reactRetry = t;
    }
    function Lh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Dh || a === up || a === lp)
            break;
          if (a === Oh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Lh(e.nextSibling);
    }
    function DT(e) {
      return Lh(e.firstChild);
    }
    function OT(e) {
      return Lh(e.firstChild);
    }
    function LT(e) {
      return Lh(e.nextSibling);
    }
    function MT(e, t, a, i, u, s, f) {
      cp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & st) !== De;
      return PR(e, t, a, p, i, y, f);
    }
    function NT(e, t, a, i) {
      return cp(a, e), a.mode & st, BR(e, t);
    }
    function zT(e, t) {
      cp(t, e);
    }
    function UT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Oh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === Dh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AT(e) {
      ku(e);
    }
    function jT(e) {
      ku(e);
    }
    function FT(e) {
      return e !== "head" && e !== "body";
    }
    function HT(e, t, a, i) {
      var u = !0;
      bh(t.nodeValue, a, i, u);
    }
    function VT(e, t, a, i, u, s) {
      if (t[kh] !== !0) {
        var f = !0;
        bh(i.nodeValue, u, s, f);
      }
    }
    function PT(e, t) {
      t.nodeType === $r ? Dy(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function BT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? Dy(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function IT(e, t, a, i, u) {
      (u || t[kh] !== !0) && (i.nodeType === $r ? Dy(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function YT(e, t, a) {
      Ly(e, t);
    }
    function WT(e, t) {
      My(e, t);
    }
    function $T(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function QT(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function GT(e, t, a, i, u, s) {
      (s || t[kh] !== !0) && Ly(a, i);
    }
    function qT(e, t, a, i, u) {
      (u || t[kh] !== !0) && My(a, i);
    }
    function XT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KT(e) {
      ep(e);
    }
    var gf = Math.random().toString(36).slice(2), Sf = "__reactFiber$" + gf, Vy = "__reactProps$" + gf, sp = "__reactContainer$" + gf, Py = "__reactEvents$" + gf, ZT = "__reactListeners$" + gf, JT = "__reactHandles$" + gf;
    function ex(e) {
      delete e[Sf], delete e[Vy], delete e[Py], delete e[ZT], delete e[JT];
    }
    function cp(e, t) {
      t[Sf] = e;
    }
    function Mh(e, t) {
      t[sp] = e;
    }
    function Y0(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Is(e) {
      var t = e[Sf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Sf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[Sf];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[Sf] || e[sp];
      return t && (t.tag === oe || t.tag === $e || t.tag === _e || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === oe || e.tag === $e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Nh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function tx(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var W0 = {}, $0 = A.ReactDebugCurrentFrame;
    function zh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        $0.setExtraStackFrame(a);
      } else
        $0.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (zh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), zh(null)), p instanceof Error && !(p.message in W0) && (W0[p.message] = !0, zh(u), S("Failed %s type: %s", a, p.message), zh(null));
          }
      }
    }
    var Iy = [], Uh;
    Uh = [];
    var zu = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Uh[zu] && S("Unexpected Fiber popped."), e.current = Iy[zu], Iy[zu] = null, Uh[zu] = null, zu--;
    }
    function aa(e, t, a) {
      zu++, Iy[zu] = e.current, Uh[zu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Uu = Do(li), Bl = Do(!1), Wy = li;
    function Ef(e, t, a) {
      return a && Il(t) ? Wy : Uu.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Rf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ie(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function Ah() {
      return Bl.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jh(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function $y(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function G0(e, t, a) {
      {
        if (Uu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Uu, t, e), aa(Bl, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return et({}, a, f);
      }
    }
    function Fh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = Uu.current, aa(Uu, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Uu, e), aa(Uu, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function nx(e) {
      {
        if (!vu(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, Hh = 1, Au = null, Qy = !1, Gy = !1;
    function K0(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function rx(e) {
      Qy = !0, K0(e);
    }
    function Z0() {
      Qy && Lo();
    }
    function Lo() {
      if (!Gy && Au !== null) {
        Gy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Au;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Qy = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), vd(os, Lo), s;
        } finally {
          jn(t), Gy = !1;
        }
      }
      return null;
    }
    var Tf = [], xf = 0, Vh = null, Ph = 0, Li = [], Mi = 0, Ys = null, ju = 1, Fu = "";
    function ax(e) {
      return $s(), (e.flags & Ei) !== ke;
    }
    function ix(e) {
      return $s(), Ph;
    }
    function lx() {
      var e = Fu, t = ju, a = t & ~ux(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      $s(), Tf[xf++] = Ph, Tf[xf++] = Vh, Vh = e, Ph = t;
    }
    function J0(e, t, a) {
      $s(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Ys, Ys = e;
      var i = ju, u = Fu, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, U = Bh(t) + M, H = p << M, le = H | x, Me = b + u;
        ju = 1 << U | le, Fu = Me;
      } else {
        var we = p << s, xt = we | f, mt = u;
        ju = 1 << v | xt, Fu = mt;
      }
    }
    function qy(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), J0(e, a, i);
      }
    }
    function Bh(e) {
      return 32 - Un(e);
    }
    function ux(e) {
      return 1 << Bh(e) - 1;
    }
    function Xy(e) {
      for (; e === Vh; )
        Vh = Tf[--xf], Tf[xf] = null, Ph = Tf[--xf], Tf[xf] = null;
      for (; e === Ys; )
        Ys = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null, ju = Li[--Mi], Li[Mi] = null;
    }
    function ox() {
      return $s(), Ys !== null ? {
        id: ju,
        overflow: Fu
      } : null;
    }
    function sx(e, t) {
      $s(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Ys, ju = t.id, Fu = t.overflow, Ys = e;
    }
    function $s() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Qs = !1, Mo = null;
    function cx() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eC() {
      Qs = !0;
    }
    function fx() {
      return Qs;
    }
    function dx(e) {
      var t = e.stateNode.containerInfo;
      return Ni = OT(t), Ur = e, nl = !0, Mo = null, Qs = !1, !0;
    }
    function px(e, t, a) {
      return Ni = LT(t), Ur = e, nl = !0, Mo = null, Qs = !1, a !== null && sx(e, a), !0;
    }
    function tC(e, t) {
      switch (e.tag) {
        case J: {
          PT(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & st) !== De;
          IT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && BT(i.dehydrated, t);
          break;
        }
      }
    }
    function nC(e, t) {
      tC(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, YT(a, i);
                break;
              case $e:
                var u = t.pendingProps;
                WT(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & st) !== De;
                GT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case $e: {
                var b = t.pendingProps, x = (e.mode & st) !== De;
                qT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case oe:
                var H = t.type;
                t.pendingProps, $T(U, H);
                break;
              case $e:
                var le = t.pendingProps;
                QT(U, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rC(e, t) {
      t.flags = t.flags & ~Gr | mn, Ky(e, t);
    }
    function aC(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = xT(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = DT(i), !0) : !1;
        }
        case $e: {
          var u = e.pendingProps, s = wT(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case _e: {
          var f = bT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ox(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & st) !== De && (e.flags & be) === ke;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Zy(e) && (Ky(Ur, e), Jy()), rC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!aC(e, t)) {
          Zy(e) && (Ky(Ur, e), Jy()), t = op(a);
          var i = Ur;
          if (!t || !aC(e, t)) {
            rC(Ur, e), nl = !1, Ur = e;
            return;
          }
          nC(i, a);
        }
      }
    }
    function vx(e, t, a) {
      var i = e.stateNode, u = !Qs, s = MT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = NT(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & st) !== De;
              HT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & st) !== De;
              VT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function mx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zT(a, e);
    }
    function yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UT(a);
    }
    function iC(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== J && t.tag !== _e; )
        t = t.return;
      Ur = t;
    }
    function Ih(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return iC(e), nl = !0, !1;
      if (e.tag !== J && (e.tag !== oe || FT(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Zy(e))
            lC(e), Jy();
          else
            for (; t; )
              nC(e, t), t = op(t);
      }
      return iC(e), e.tag === _e ? Ni = yx(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function gx() {
      return nl && Ni !== null;
    }
    function lC(e) {
      for (var t = Ni; t; )
        tC(e, t), t = op(t);
    }
    function wf() {
      Ur = null, Ni = null, nl = !1, Qs = !1;
    }
    function uC() {
      Mo !== null && (e1(Mo), Mo = null);
    }
    function Ar() {
      return nl;
    }
    function tg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var Sx = A.ReactCurrentBatchConfig, Cx = null;
    function Ex() {
      return Sx.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Rx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Ie(x) || "Component"), qs.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Ie(x) || "Component"), qs.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Ie(x) || "Component"), qs.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Ie(x) || "Component"), qs.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Ie(x) || "Component"), qs.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Ie(x) || "Component"), qs.add(x.type);
        }), yp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          St(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          St(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Gs(u);
          St(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), oC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = Rx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oC.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), oC.add(s.type);
            });
            var u = Gs(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, sC = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, sC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Wh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ie(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fC(e) {
      function t(D, V) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [V], D.flags |= ka) : O.push(V);
        }
      }
      function a(D, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, V) {
        for (var O = /* @__PURE__ */ new Map(), q = V; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(D, V) {
        var O = ac(D, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, V, O) {
        if (D.index = O, !e)
          return D.flags |= Ei, V;
        var q = D.alternate;
        if (q !== null) {
          var ve = q.index;
          return ve < V ? (D.flags |= mn, V) : ve;
        } else
          return D.flags |= mn, V;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, V, O, q) {
        if (V === null || V.tag !== $e) {
          var ve = t0(O, D.mode, q);
          return ve.return = D, ve;
        } else {
          var se = u(V, O);
          return se.return = D, se;
        }
      }
      function v(D, V, O, q) {
        var ve = O.type;
        if (ve === fi)
          return g(D, V, O.props.children, q, O.key);
        if (V !== null && (V.elementType === ve || // Keep this check inline so it only runs on the false path:
        m1(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ye && cC(ve) === V.type)) {
          var se = u(V, O.props);
          return se.ref = gp(D, V, O), se.return = D, se._debugSource = O._source, se._debugOwner = O._owner, se;
        }
        var Pe = e0(O, D.mode, q);
        return Pe.ref = gp(D, V, O), Pe.return = D, Pe;
      }
      function y(D, V, O, q) {
        if (V === null || V.tag !== Re || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var ve = n0(O, D.mode, q);
          return ve.return = D, ve;
        } else {
          var se = u(V, O.children || []);
          return se.return = D, se;
        }
      }
      function g(D, V, O, q, ve) {
        if (V === null || V.tag !== Ct) {
          var se = Io(O, D.mode, q, ve);
          return se.return = D, se;
        } else {
          var Pe = u(V, O);
          return Pe.return = D, Pe;
        }
      }
      function b(D, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var q = t0("" + V, D.mode, O);
          return q.return = D, q;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case _r: {
              var ve = e0(V, D.mode, O);
              return ve.ref = gp(D, null, V), ve.return = D, ve;
            }
            case rr: {
              var se = n0(V, D.mode, O);
              return se.return = D, se;
            }
            case Ye: {
              var Pe = V._payload, Ge = V._init;
              return b(D, Ge(Pe), O);
            }
          }
          if (at(V) || Xe(V)) {
            var Xt = Io(V, D.mode, O, null);
            return Xt.return = D, Xt;
          }
          Wh(D, V);
        }
        return typeof V == "function" && $h(D), null;
      }
      function x(D, V, O, q) {
        var ve = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(D, V, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === ve ? v(D, V, O, q) : null;
            case rr:
              return O.key === ve ? y(D, V, O, q) : null;
            case Ye: {
              var se = O._payload, Pe = O._init;
              return x(D, V, Pe(se), q);
            }
          }
          if (at(O) || Xe(O))
            return ve !== null ? null : g(D, V, O, q, null);
          Wh(D, O);
        }
        return typeof O == "function" && $h(D), null;
      }
      function M(D, V, O, q, ve) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var se = D.get(O) || null;
          return p(V, se, "" + q, ve);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case _r: {
              var Pe = D.get(q.key === null ? O : q.key) || null;
              return v(V, Pe, q, ve);
            }
            case rr: {
              var Ge = D.get(q.key === null ? O : q.key) || null;
              return y(V, Ge, q, ve);
            }
            case Ye:
              var Xt = q._payload, Ut = q._init;
              return M(D, V, O, Ut(Xt), ve);
          }
          if (at(q) || Xe(q)) {
            var Gn = D.get(O) || null;
            return g(V, Gn, q, ve, null);
          }
          Wh(V, q);
        }
        return typeof q == "function" && $h(V), null;
      }
      function U(D, V, O) {
        {
          if (typeof D != "object" || D === null)
            return V;
          switch (D.$$typeof) {
            case _r:
            case rr:
              sC(D, O);
              var q = D.key;
              if (typeof q != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(q);
                break;
              }
              if (!V.has(q)) {
                V.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Ye:
              var ve = D._payload, se = D._init;
              U(se(ve), V, O);
              break;
          }
        }
        return V;
      }
      function H(D, V, O, q) {
        for (var ve = null, se = 0; se < O.length; se++) {
          var Pe = O[se];
          ve = U(Pe, ve, D);
        }
        for (var Ge = null, Xt = null, Ut = V, Gn = 0, At = 0, Vn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var la = x(D, Ut, O[At], q);
          if (la === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && la.alternate === null && t(D, Ut), Gn = s(la, Gn, At), Xt === null ? Ge = la : Xt.sibling = la, Xt = la, Ut = Vn;
        }
        if (At === O.length) {
          if (a(D, Ut), Ar()) {
            var Ir = At;
            Ws(D, Ir);
          }
          return Ge;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var oi = b(D, O[At], q);
            oi !== null && (Gn = s(oi, Gn, At), Xt === null ? Ge = oi : Xt.sibling = oi, Xt = oi);
          }
          if (Ar()) {
            var Ea = At;
            Ws(D, Ea);
          }
          return Ge;
        }
        for (var Ra = i(D, Ut); At < O.length; At++) {
          var ua = M(Ra, D, At, O[At], q);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? At : ua.key), Gn = s(ua, Gn, At), Xt === null ? Ge = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && Ra.forEach(function(Yf) {
          return t(D, Yf);
        }), Ar()) {
          var Wu = At;
          Ws(D, Wu);
        }
        return Ge;
      }
      function le(D, V, O, q) {
        var ve = Xe(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === ve && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var se = ve.call(O);
          if (se)
            for (var Pe = null, Ge = se.next(); !Ge.done; Ge = se.next()) {
              var Xt = Ge.value;
              Pe = U(Xt, Pe, D);
            }
        }
        var Ut = ve.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Vn = V, la = 0, Ir = 0, oi = null, Ea = Ut.next(); Vn !== null && !Ea.done; Ir++, Ea = Ut.next()) {
          Vn.index > Ir ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var Ra = x(D, Vn, Ea.value, q);
          if (Ra === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && Ra.alternate === null && t(D, Vn), la = s(Ra, la, Ir), At === null ? Gn = Ra : At.sibling = Ra, At = Ra, Vn = oi;
        }
        if (Ea.done) {
          if (a(D, Vn), Ar()) {
            var ua = Ir;
            Ws(D, ua);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ea.done; Ir++, Ea = Ut.next()) {
            var Wu = b(D, Ea.value, q);
            Wu !== null && (la = s(Wu, la, Ir), At === null ? Gn = Wu : At.sibling = Wu, At = Wu);
          }
          if (Ar()) {
            var Yf = Ir;
            Ws(D, Yf);
          }
          return Gn;
        }
        for (var Xp = i(D, Vn); !Ea.done; Ir++, Ea = Ut.next()) {
          var Kl = M(Xp, D, Ir, Ea.value, q);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Ir : Kl.key), la = s(Kl, la, Ir), At === null ? Gn = Kl : At.sibling = Kl, At = Kl);
        }
        if (e && Xp.forEach(function(q_) {
          return t(D, q_);
        }), Ar()) {
          var G_ = Ir;
          Ws(D, G_);
        }
        return Gn;
      }
      function Me(D, V, O, q) {
        if (V !== null && V.tag === $e) {
          a(D, V.sibling);
          var ve = u(V, O);
          return ve.return = D, ve;
        }
        a(D, V);
        var se = t0(O, D.mode, q);
        return se.return = D, se;
      }
      function we(D, V, O, q) {
        for (var ve = O.key, se = V; se !== null; ) {
          if (se.key === ve) {
            var Pe = O.type;
            if (Pe === fi) {
              if (se.tag === Ct) {
                a(D, se.sibling);
                var Ge = u(se, O.props.children);
                return Ge.return = D, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (se.elementType === Pe || // Keep this check inline so it only runs on the false path:
            m1(se, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ye && cC(Pe) === se.type) {
              a(D, se.sibling);
              var Xt = u(se, O.props);
              return Xt.ref = gp(D, se, O), Xt.return = D, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(D, se);
            break;
          } else
            t(D, se);
          se = se.sibling;
        }
        if (O.type === fi) {
          var Ut = Io(O.props.children, D.mode, q, O.key);
          return Ut.return = D, Ut;
        } else {
          var Gn = e0(O, D.mode, q);
          return Gn.ref = gp(D, V, O), Gn.return = D, Gn;
        }
      }
      function xt(D, V, O, q) {
        for (var ve = O.key, se = V; se !== null; ) {
          if (se.key === ve)
            if (se.tag === Re && se.stateNode.containerInfo === O.containerInfo && se.stateNode.implementation === O.implementation) {
              a(D, se.sibling);
              var Pe = u(se, O.children || []);
              return Pe.return = D, Pe;
            } else {
              a(D, se);
              break;
            }
          else
            t(D, se);
          se = se.sibling;
        }
        var Ge = n0(O, D.mode, q);
        return Ge.return = D, Ge;
      }
      function mt(D, V, O, q) {
        var ve = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(we(D, V, O, q));
            case rr:
              return f(xt(D, V, O, q));
            case Ye:
              var se = O._payload, Pe = O._init;
              return mt(D, V, Pe(se), q);
          }
          if (at(O))
            return H(D, V, O, q);
          if (Xe(O))
            return le(D, V, O, q);
          Wh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Me(D, V, "" + O, q)) : (typeof O == "function" && $h(D), a(D, V));
      }
      return mt;
    }
    var bf = fC(!0), dC = fC(!1);
    function xx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function wx(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var ug = Do(null), og;
    og = {};
    var Qh = null, _f = null, sg = null, Gh = !1;
    function qh() {
      Qh = null, _f = null, sg = null, Gh = !1;
    }
    function pC() {
      Gh = !0;
    }
    function vC() {
      Gh = !1;
    }
    function hC(e, t, a) {
      aa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ra(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (_u(i.childLanes, t) ? u !== null && !_u(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bx(e, t, a) {
      _x(e, t, a);
    }
    function _x(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = Rs(a), v = Hu(Kt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ze(x.lanes, a)), fg(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Ze(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Ze(U.lanes, a)), fg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function kf(e, t) {
      Qh = e, _f = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Gh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, Qh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var Xs = null;
    function dg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function kx() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function mC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Xh(e, i);
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ox(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Xh(e, i);
    }
    function Fa(e, t) {
      return Xh(e, t);
    }
    var Lx = Xh;
    function Xh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== ke && d1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (mn | Gr)) !== ke && d1(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yC = 0, gC = 1, Kh = 2, pg = 3, Zh = !1, vg, Jh;
    vg = !1, Jh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Hu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), Db()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lx(e, a);
      } else
        return Ox(e, u, t, a);
    }
    function em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Mx(e, t, a, i, u, s) {
      switch (a.tag) {
        case gC: {
          var f = a.payload;
          if (typeof f == "function") {
            pC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              vC();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~Kn | be;
        case yC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              vC();
            }
          } else
            y = v;
          return y == null ? i : et({}, i, y);
        }
        case Kh:
          return Zh = !0, i;
      }
      return i;
    }
    function tm(e, t, a, i) {
      var u = e.updateQueue;
      Zh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = Y, H = null, le = null, Me = null, we = s;
        do {
          var xt = we.lane, mt = we.eventTime;
          if (_u(i, xt)) {
            if (Me !== null) {
              var V = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Me = Me.next = V;
            }
            M = Mx(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== Dt) {
              e.flags |= rn;
              var q = u.effects;
              q === null ? u.effects = [we] : q.push(we);
            }
          } else {
            var D = {
              eventTime: mt,
              lane: xt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Me === null ? (le = Me = D, H = M) : Me = Me.next = D, U = Ze(U, xt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, we = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Me === null && (H = M), u.baseState = H, u.firstBaseUpdate = le, u.lastBaseUpdate = Me;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var Ge = Pe;
          do
            U = Ze(U, Ge.lane), Ge = Ge.next;
          while (Ge !== Pe);
        } else s === null && (u.shared.lanes = Y);
        Wp(U), e.lanes = U, e.memoizedState = M;
      }
      Jh = null;
    }
    function Nx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CC() {
      Zh = !1;
    }
    function nm() {
      return Zh;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nx(f, a));
        }
    }
    var Sp = {}, zo = Do(Sp), Cp = Do(Sp), rm = Do(Sp);
    function am(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = am(rm.current);
      return e;
    }
    function yg(e, t) {
      aa(rm, t, e), aa(Cp, e, e), aa(zo, Sp, e);
      var a = XR(t);
      ra(zo, e), aa(zo, a, e);
    }
    function Df(e) {
      ra(zo, e), ra(Cp, e), ra(rm, e);
    }
    function gg() {
      var e = am(zo.current);
      return e;
    }
    function TC(e) {
      am(rm.current);
      var t = am(zo.current), a = KR(t, e.type);
      t !== a && (aa(Cp, e, e), aa(zo, a, e));
    }
    function Sg(e) {
      Cp.current === e && (ra(zo, e), ra(Cp, e));
    }
    var zx = 0, xC = 1, wC = 1, Ep = 2, al = Do(zx);
    function Cg(e, t) {
      return (e & t) !== 0;
    }
    function Of(e) {
      return e & xC;
    }
    function Eg(e, t) {
      return e & xC | t;
    }
    function Ux(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      aa(al, t, e);
    }
    function Lf(e) {
      ra(al, e);
    }
    function Ax(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & be) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function jx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, xg, Mf;
    xg = /* @__PURE__ */ new Set();
    var Ks = Y, qt = null, dr = null, pr = null, lm = !1, Tp = !1, xp = 0, Fx = 0, Hx = 25, B = null, zi = null, Ao = -1, wg = !1;
    function Pt() {
      {
        var e = B;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function te() {
      {
        var e = B;
        zi !== null && (Ao++, zi[Ao] !== e && Vx(e));
      }
    }
    function Nf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Vx(e) {
      {
        var t = Ie(qt);
        if (!xg.has(t) && (xg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = zi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function zf(e, t, a, i, u, s) {
      Ks = s, qt = t, zi = e !== null ? e._debugHookTypes : null, Ao = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? de.current = QC : zi !== null ? de.current = $C : de.current = WC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= Hx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, dr = null, pr = null, t.updateQueue = null, Ao = -1, de.current = GC, f = a(i, u);
        } while (Tp);
      }
      de.current = Sm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Ks = Y, qt = null, dr = null, pr = null, B = null, zi = null, Ao = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Uf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function bC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ts(e.lanes, a);
    }
    function _C() {
      if (de.current = Sm, lm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      Ks = Y, qt = null, dr = null, pr = null, zi = null, Ao = -1, B = null, VC = !1, Tp = !1, xp = 0;
    }
    function Wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function kC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kg(e, t, a) {
      var i = Wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yx.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, M = null, U = null, H = g;
        do {
          var le = H.lane;
          if (_u(Ks, le)) {
            if (U !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              U = U.next = we;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var xt = H.action;
              b = e(b, xt);
            }
          } else {
            var Me = {
              lane: le,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            U === null ? (M = U = Me, x = b) : U = U.next = Me, qt.lanes = Ze(qt.lanes, le), Wp(le);
          }
          H = H.next;
        } while (H !== null && H !== g);
        U === null ? x = b : U.next = M, Q(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = x, i.baseQueue = U, u.lastRenderedState = b;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var D = mt;
        do {
          var V = D.lane;
          qt.lanes = Ze(qt.lanes, V), Wp(V), D = D.next;
        } while (D !== mt);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Q(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ck(e, t, a) {
    }
    function fk(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = qt, u = Wl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          Q(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Fm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Kc(v, Ks) || DC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, fm(LC.bind(null, i, y, e), [e]), i.flags |= Qr, wp(cr | jr, OC.bind(null, i, y, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = qt, u = Ui(), s = t();
      if (!Mf) {
        var f = t();
        Q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !Q(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(LC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, wp(cr | jr, OC.bind(null, i, y, s, t), void 0, null);
        var g = Fm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Kc(g, Ks) || DC(i, t, s);
      }
      return s;
    }
    function DC(e, t, a) {
      e.flags |= po;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = kC(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, MC(t) && NC(e);
    }
    function LC(e, t, a) {
      var i = function() {
        MC(t) && NC(e);
      };
      return a(i);
    }
    function MC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function NC(e) {
      var t = Fa(e, Fe);
      t !== null && yr(t, e, Fe, Kt);
    }
    function om(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Wx.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return Dg(_g);
    }
    function Ng(e) {
      return Og(_g);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = kC(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = Wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Wl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(cr | t, a, void 0, s);
    }
    function cm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(cr | t, a, f, s);
    }
    function fm(e, t) {
      return (qt.mode & Nt) !== De ? bp(Ri | Qr | xc, jr, e, t) : bp(Qr | xc, jr, e, t);
    }
    function _p(e, t) {
      return cm(Qr, jr, e, t);
    }
    function Ug(e, t) {
      return bp(Et, Yl, e, t);
    }
    function dm(e, t) {
      return cm(Et, Yl, e, t);
    }
    function Ag(e, t) {
      var a = Et;
      return a |= $i, (qt.mode & Nt) !== De && (a |= bl), bp(a, fr, e, t);
    }
    function pm(e, t) {
      return cm(Et, fr, e, t);
    }
    function zC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= $i, (qt.mode & Nt) !== De && (u |= bl), bp(u, fr, zC.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(Et, fr, zC.bind(null, t, e), i);
    }
    function Px(e, t) {
    }
    var hm = Px;
    function Fg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function ym(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function UC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return jC(t, i, e);
    }
    function AC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return jC(t, a, e);
    }
    function jC(e, t, a) {
      var i = !Dd(Ks);
      if (i) {
        if (!Q(a, t)) {
          var u = Md();
          qt.lanes = Ze(qt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Bx(e, t, a) {
      var i = Ua();
      jn(Gv(i, bi)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && St("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = om(!1), t = e[0], a = e[1], i = Bx.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function FC() {
      var e = Mg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function HC() {
      var e = Ng(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var VC = !1;
    function Ix() {
      return VC;
    }
    function Bg() {
      var e = Wl(), t = Fm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = lx();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function gm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Yx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        BC(t, u);
      else {
        var s = mC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          yr(s, e, i, f), IC(s, t, i);
        }
      }
      YC(e, i);
    }
    function Wx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        BC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Q(y, v)) {
                Dx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = mC(e, t, u, i);
        if (g !== null) {
          var b = Ca();
          yr(g, e, i, b), IC(g, t, i);
        }
      }
      YC(e, i);
    }
    function PC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function BC(e, t) {
      Tp = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, Jc(e, u);
      }
    }
    function YC(e, t, a) {
      ps(e, t);
    }
    var Sm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: Z
    }, WC = null, $C = null, QC = null, GC = null, $l = null, il = null, Cm = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Pt(), Nf(t), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Pt(), Nf(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Pt(), Nf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Pt(), Nf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Pt(), Nf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Pt(), Nf(t);
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Pt();
          var i = de.current;
          de.current = $l;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Pt(), zg(e);
        },
        useState: function(e) {
          B = "useState", Pt();
          var t = de.current;
          de.current = $l;
          try {
            return om(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Pt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Pt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", Pt(), Bg();
        },
        unstable_isNewReconciler: Z
      }, $C = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = $l;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), zg(e);
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = $l;
          try {
            return om(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", te(), Bg();
        },
        unstable_isNewReconciler: Z
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), mm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), pm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = il;
          try {
            return ym(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), sm();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), hm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), UC(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), um(e, t);
        },
        useId: function() {
          return B = "useId", te(), gm();
        },
        unstable_isNewReconciler: Z
      }, GC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), mm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), pm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = Cm;
          try {
            return ym(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = Cm;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), sm();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = Cm;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), hm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), AC(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), HC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), um(e, t);
        },
        useId: function() {
          return B = "useId", te(), gm();
        },
        unstable_isNewReconciler: Z
      }, $l = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), Pt(), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), Pt(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), Pt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), Pt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), Pt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), Pt();
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), Pt();
          var i = de.current;
          de.current = $l;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), Pt(), zg(e);
        },
        useState: function(e) {
          B = "useState", We(), Pt();
          var t = de.current;
          de.current = $l;
          try {
            return om(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), Pt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), Pt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", We(), Pt(), Bg();
        },
        unstable_isNewReconciler: Z
      }, il = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), te(), mm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), te(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), te(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), te(), pm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), te();
          var a = de.current;
          de.current = il;
          try {
            return ym(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), te();
          var i = de.current;
          de.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), te(), sm();
        },
        useState: function(e) {
          B = "useState", We(), te();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), te(), hm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), te(), UC(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), te(), FC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), te(), um(e, t);
        },
        useId: function() {
          return B = "useId", We(), te(), gm();
        },
        unstable_isNewReconciler: Z
      }, Cm = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), te(), mm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), te(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), te(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), te(), pm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), te();
          var a = de.current;
          de.current = il;
          try {
            return ym(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), te();
          var i = de.current;
          de.current = il;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), te(), sm();
        },
        useState: function(e) {
          B = "useState", We(), te();
          var t = de.current;
          de.current = il;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), te(), hm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), te(), AC(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), te(), HC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), te(), um(e, t);
        },
        useId: function() {
          return B = "useId", We(), te(), gm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var jo = X.unstable_now, qC = 0, Em = -1, kp = -1, Rm = -1, Yg = !1, Tm = !1;
    function XC() {
      return Yg;
    }
    function $x() {
      Tm = !0;
    }
    function Qx() {
      Yg = !1, Tm = !1;
    }
    function Gx() {
      Yg = Tm, Tm = !1;
    }
    function KC() {
      return qC;
    }
    function ZC() {
      qC = jo();
    }
    function Wg(e) {
      kp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function JC(e) {
      kp = -1;
    }
    function xm(e, t) {
      if (kp >= 0) {
        var a = jo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Ql(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ht:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (Rm >= 0) {
        var t = jo() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ht:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Em = jo();
    }
    function Qg() {
      Rm = jo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, eE, wm, tS, nS, rS, Dp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var tE = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tE.has(a) || (tE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eE = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        eE(t, s);
      }
      var f = s == null ? u : et({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: Mv,
      enqueueSetState: function(e, t, a) {
        var i = fo(e), u = Ca(), s = Po(i), f = Hu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (yr(p, i, s, u), em(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fo(e), u = Ca(), s = Po(i), f = Hu(u, s);
        f.tag = gC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (yr(p, i, s, u), em(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fo(e), i = Ca(), u = Po(a), s = Hu(i, u);
        s.tag = Kh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (yr(f, a, u, i), em(f, a, u)), Lc(a, u);
      }
    };
    function nE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function qx(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rE(e, t) {
      t.updater = iS, e.stateNode = t, pu(t, e), t._reactInternalInstance = qg;
    }
    function aE(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Ef(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Rf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Kg.has(x) || (Kg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), M !== null || U !== null || H !== null) {
            var le = wt(t) || "Component", Me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(le) || (Jg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Me, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function Xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      qx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Ef(e, t, !0);
        u.context = Rf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xx(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= $i, (e.mode & Nt) !== De && (y |= bl), e.flags |= y;
      }
    }
    function Kx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Ef(e, t, !0);
        v = Rf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iE(e, u, a, v), CC();
      var x = e.memoizedState, M = u.state = x;
      if (tm(e, a, u, i), M = e.memoizedState, s === a && x === M && !Ah() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var U = Et;
          U |= $i, (e.mode & Nt) !== De && (U |= bl), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var H = nm() || nE(e, t, s, a, x, M, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Et;
          le |= $i, (e.mode & Nt) !== De && (le |= bl), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Me = Et;
          Me |= $i, (e.mode & Nt) !== De && (Me |= bl), e.flags |= Me;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, H;
    }
    function Zx(e, t, a, i, u) {
      var s = t.stateNode;
      SC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = Ef(t, a, !0);
        b = Rf(t, x);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iE(t, s, i, b), CC();
      var H = t.memoizedState, le = s.state = H;
      if (tm(t, i, s, u), le = t.memoizedState, f === v && H === le && !Ah() && !nm() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof M == "function" && (aS(t, a, M, i), le = t.memoizedState);
      var Me = nm() || nE(t, a, p, i, H, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return Me ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Me;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jx(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Jx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function lE(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $b(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          y1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        y1(e), oS(e, t), typeof u != "function" && Yb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Fe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function uE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Qb.bind(null, e, t, a);
        Kr && $p(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & st) === De && (a === ue || a === Qe || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oE(e) {
      var t = e;
      do {
        if (t.tag === _e && Ax(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sE(e, t, a, i, u) {
      if ((e.mode & st) === De) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= be, a.flags |= Tc, a.flags &= -52805, a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Hu(Kt, Fe);
              f.tag = Kh, No(a, f, Fe);
            }
          }
          a.lanes = Ze(a.lanes, Fe);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= us, Kr && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), Ar() && a.mode & st && eC();
        var f = oE(t);
        if (f !== null) {
          f.flags &= ~Er, sE(f, t, a, e, u), f.mode & st && uE(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!Vv(u)) {
            uE(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & st) {
        eC();
        var v = oE(t);
        if (v !== null) {
          (v.flags & Kn) === ke && (v.flags |= Er), sE(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ab(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Kn;
            var b = Rs(u);
            y.lanes = Ze(y.lanes, b);
            var x = lE(y, g, b);
            mg(y, x);
            return;
          }
          case pe:
            var M = i, U = y.type, H = y.stateNode;
            if ((y.flags & be) === ke && (typeof U.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !o1(H))) {
              y.flags |= Kn;
              var le = Rs(u);
              y.lanes = Ze(y.lanes, le);
              var Me = sS(y, M, le);
              mg(y, Me);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function aw() {
      return null;
    }
    var Op = A.ReactCurrentOwner, ul = !1, cS, Lp, fS, dS, pS, Js, vS, bm, Mp;
    cS = {}, Lp = {}, fS = {}, dS = {}, pS = {}, Js = !1, vS = {}, bm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = dC(t, null, a, i) : t.child = bf(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = bf(t, e.child, null, i), t.child = bf(t, null, a, i);
    }
    function cE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      kf(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = zf(e, t, f, i, p, u), y = Uf(), t.mode & Gt) {
          yn(!0);
          try {
            v = zf(e, t, f, i, p, u), y = Uf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (bC(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function fE(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = He, t.type = f, yS(t, s), dE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && tl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, M = TS(e, u);
      if (!M) {
        var U = x.memoizedProps, H = a.compare;
        if (H = H !== null ? H : ge, H(U, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var le = ac(x, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function dE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & Tc) !== ke && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & st) === De) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Hm(t, a);
        } else if (Jr(a, Zr)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Hm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ze(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Hm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Ze(s.baseLanes, a), t.memoizedState = null) : M = a, Hm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function vE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= vo);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Ef(t, a, !0);
        f = Rf(t, p);
      }
      var v, y;
      kf(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = zf(e, t, a, i, f, u), y = Uf(), t.mode & Gt) {
          yn(!0);
          try {
            v = zf(e, t, a, i, f, u), y = Uf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (bC(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function hE(e, t, a, i, u) {
      {
        switch (w_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= be, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = Rs(u);
            t.lanes = Ze(t.lanes, g);
            var b = sS(t, Zs(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && tl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      Il(a) ? (M = !0, Fh(t)) : M = !1, kf(t, u);
      var U = t.stateNode, H;
      U === null ? (km(e, t), aE(t, a, i), lS(t, a, i, u), H = !0) : e === null ? H = Kx(t, a, i, u) : H = Zx(e, t, a, i, u);
      var le = mS(e, t, a, H, M, u);
      {
        var Me = t.stateNode;
        H && Me.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), Js = !0);
      }
      return le;
    }
    function mS(e, t, a, i, u, s) {
      vE(e, t);
      var f = (t.flags & be) !== ke;
      if (!i && !f)
        return u && X0(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JC();
      else {
        va(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? iw(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
    }
    function mE(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (mE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SC(e, t), tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Er) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yE(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yE(e, t, p, a, b);
        } else {
          dx(t);
          var x = dC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (wf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function yE(e, t, a, i, u) {
      return wf(), tg(u), t.flags |= Er, ga(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      TC(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Da), vE(e, t), ga(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && eg(t), null;
    }
    function dw(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = ll(v, u), b;
      switch (y) {
        case ue:
          return yS(t, v), t.type = v = If(v), b = hS(null, t, v, g, i), b;
        case pe:
          return t.type = v = QS(v), b = hE(null, t, v, g, i), b;
        case Qe:
          return t.type = v = GS(v), b = cE(null, t, v, g, i), b;
        case ct: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && tl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = fE(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function pw(e, t, a, i, u) {
      km(e, t), t.tag = pe;
      var s;
      return Il(a) ? (s = !0, Fh(t)) : s = !1, kf(t, u), aE(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function vw(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ef(t, a, !1);
        s = Rf(t, f);
      }
      kf(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Gt && rl.recordLegacyContextWarning(t, null), Yn(!0), Op.current = t, p = zf(null, t, a, u, s, i), v = Uf(), Yn(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Il(a) ? (x = !0, Fh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rE(t, p), lS(t, a, u, i), mS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ue, t.mode & Gt) {
          yn(!0);
          try {
            p = zf(null, t, a, u, s, i), v = Uf();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && qy(t), ga(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Cg(e, Ep);
    }
    function yw(e, t) {
      return Ts(e.childLanes, t);
    }
    function gE(e, t, a) {
      var i = t.pendingProps;
      b_(t) && (t.flags |= be);
      var u = al.current, s = !1, f = (t.flags & be) !== ke;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~be) : (e === null || e.memoizedState !== null) && (u = Ux(u, wC)), u = Of(u), Uo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = gw(t, y, g, a), x = t.child;
          return x.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return CS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Tw(e, t, f, i, U, M, a);
        }
        if (s) {
          var H = i.fallback, le = i.children, Me = Cw(e, t, le, H, a), we = t.child, xt = e.child.memoizedState;
          return we.memoizedState = xt === null ? SS(a) : hw(xt, a), we.childLanes = yw(e, a), t.memoizedState = gS, Me;
        } else {
          var mt = i.children, D = Sw(e, t, mt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function gw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & st) === De && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = ES(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return S1(e, t, Y, null);
    }
    function SE(e, t) {
      return ac(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SE(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ac(p, i) : (b = Io(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function _m(e, t, a, i) {
      i !== null && tg(i), bf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = CS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Io(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & st) !== De && bf(t, e.child, null, u), v;
    }
    function Rw(e, t, a) {
      return (e.mode & st) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Fe) : Hy(t) ? e.lanes = Rr : e.lanes = Zr, null;
    }
    function Tw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Er) {
          t.flags &= ~Er;
          var D = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= be, null;
          var V = i.children, O = i.fallback, q = Ew(e, t, V, O, f), ve = t.child;
          return ve.memoizedState = SS(f), t.memoizedState = gS, q;
        }
      else {
        if (cx(), (t.mode & st) === De)
          return _m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = _T(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = uS(b, p, y);
          return _m(e, t, f, x);
        }
        var M = Jr(f, e.childLanes);
        if (ul || M) {
          var U = Fm();
          if (U !== null) {
            var H = Ud(U, f);
            if (H !== Dt && H !== s.retryLane) {
              s.retryLane = H;
              var le = Kt;
              Fa(e, H), yr(U, e, H, le);
            }
          }
          BS();
          var Me = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, Me);
        } else if (B0(u)) {
          t.flags |= be, t.child = e.child;
          var we = Gb.bind(null, e);
          return kT(u, we), null;
        } else {
          px(t, u, s.treeContext);
          var xt = i.children, mt = CS(t, xt);
          return mt.flags |= Gr, mt;
        }
      }
    }
    function CE(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), fg(e.return, t, a);
    }
    function xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && CE(i, a, e);
        } else if (i.tag === ln)
          CE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _w(e, t) {
      e !== void 0 && !bm[e] && (e !== "collapsed" && e !== "hidden" ? (bm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EE(e, t) {
      {
        var a = at(e), i = !a && typeof Xe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!EE(e[a], a))
              return;
        } else {
          var i = Xe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!EE(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RE(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bw(u), _w(s, u), kw(f, u), ga(e, t, f, a);
      var p = al.current, v = Cg(p, Ep);
      if (v)
        p = Eg(p, Ep), t.flags |= be;
      else {
        var y = e !== null && (e.flags & be) !== ke;
        y && xw(t, t.child, a), p = Of(p);
      }
      if (Uo(t, p), (t.mode & st) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = ww(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && im(U) === null) {
                t.child = M;
                break;
              }
              var H = M.sibling;
              M.sibling = x, x = M, M = H;
            }
            RS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Dw(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bf(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var TE = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TE || (TE = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (hC(t, u, p), f !== null) {
        var y = f.value;
        if (Q(y, p)) {
          if (f.children === s.children && !Ah())
            return Vu(e, t, a);
        } else
          bx(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var xE = !1;
    function Lw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xE || (xE = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), kf(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Op.current = t, Yn(!0), p = s(f), Yn(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Np() {
      ul = !0;
    }
    function km(e, t) {
      (t.mode & st) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JC(), Wp(t.lanes), Jr(a, t.childLanes) ? (xx(e, t), t.child) : null;
    }
    function Mw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= mn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function Nw(e, t, a) {
      switch (t.tag) {
        case J:
          mE(t), t.stateNode, wf();
          break;
        case oe:
          TC(t);
          break;
        case pe: {
          var i = t.type;
          Il(i) && Fh(t);
          break;
        }
        case Re:
          yg(t, t.stateNode.containerInfo);
          break;
        case pt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hC(t, s, u);
          break;
        }
        case ht:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Of(al.current)), t.flags |= be, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return gE(e, t, a);
            Uo(t, Of(al.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Uo(t, Of(al.current));
          break;
        }
        case ln: {
          var x = (e.flags & be) !== ke, M = Jr(a, t.childLanes);
          if (x) {
            if (M)
              return RE(e, t, a);
            t.flags |= be;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Uo(t, al.current), M)
            break;
          return null;
        }
        case Oe:
        case jt:
          return t.lanes = Y, pE(e, t, a);
      }
      return Vu(e, t, a);
    }
    function wE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ah() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & be) === ke)
            return ul = !1, Nw(e, t, a);
          (e.flags & Tc) !== ke ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && ax(t)) {
        var f = t.index, p = ix();
        J0(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ke:
          return vw(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case ue: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return hS(e, t, y, b, a);
        }
        case pe: {
          var x = t.type, M = t.pendingProps, U = t.elementType === x ? M : ll(x, M);
          return hE(e, t, x, U, a);
        }
        case J:
          return sw(e, t, a);
        case oe:
          return cw(e, t, a);
        case $e:
          return fw(e, t);
        case _e:
          return gE(e, t, a);
        case Re:
          return Dw(e, t, a);
        case Qe: {
          var H = t.type, le = t.pendingProps, Me = t.elementType === H ? le : ll(H, le);
          return cE(e, t, H, Me, a);
        }
        case Ct:
          return lw(e, t, a);
        case vt:
          return uw(e, t, a);
        case ht:
          return ow(e, t, a);
        case pt:
          return Ow(e, t, a);
        case fn:
          return Lw(e, t, a);
        case ct: {
          var we = t.type, xt = t.pendingProps, mt = ll(we, xt);
          if (t.type !== t.elementType) {
            var D = we.propTypes;
            D && tl(
              D,
              mt,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return mt = ll(we.type, mt), fE(e, t, we, mt, a);
        }
        case He:
          return dE(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var V = t.type, O = t.pendingProps, q = t.elementType === V ? O : ll(V, O);
          return pw(e, t, V, q, a);
        }
        case ln:
          return RE(e, t, a);
        case _t:
          break;
        case Oe:
          return pE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Af(e) {
      e.flags |= Et;
    }
    function bE(e) {
      e.flags |= Cn, e.flags |= vo;
    }
    var _E, xS, kE, DE;
    _E = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === $e)
          tT(e, u.stateNode);
        else if (u.tag !== Re) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, xS = function(e, t) {
    }, kE = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = rT(f, a, s, i, u, p);
        t.updateQueue = v, v && Af(t);
      }
    }, DE = function(e, t, a, i) {
      a !== i && Af(t);
    };
    function zp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = ke;
      if (t) {
        if ((e.mode & Mt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ze(a, Ze(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (gx() && (t.mode & st) !== De && (t.flags & be) === ke)
        return lC(t), wf(), t.flags |= Er | us | Kn, !1;
      var i = Ih(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mx(t), Fr(t), (t.mode & Mt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (wf(), (t.flags & be) === ke && (t.memoizedState = null), t.flags |= Et, Fr(t), (t.mode & Mt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uC(), !0;
    }
    function OE(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Ke:
        case an:
        case He:
        case ue:
        case Qe:
        case Ct:
        case vt:
        case ht:
        case fn:
        case ct:
          return Fr(t), null;
        case pe: {
          var u = t.type;
          return Il(u) && jh(t), Fr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Df(t), $y(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ih(t);
            if (f)
              Af(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Er) !== ke) && (t.flags |= Wn, uC());
            }
          }
          return xS(e, t), Fr(t), null;
        }
        case oe: {
          Sg(t);
          var v = RC(), y = t.type;
          if (e !== null && t.stateNode != null)
            kE(e, t, y, i, v), e.ref !== t.ref && bE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = gg(), b = Ih(t);
            if (b)
              vx(t, v, g) && Af(t);
            else {
              var x = eT(y, i, v, g, t);
              _E(x, t, !1, !1), t.stateNode = x, nT(x, y, i, v) && Af(t);
            }
            t.ref !== null && bE(t);
          }
          return Fr(t), null;
        }
        case $e: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            DE(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = RC(), le = gg(), Me = Ih(t);
            Me ? hx(t) && Af(t) : t.stateNode = aT(M, H, le, t);
          }
          return Fr(t), null;
        }
        case _e: {
          Lf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = zw(e, t, we);
            if (!xt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & be) !== ke)
            return t.lanes = a, (t.mode & Mt) !== De && Gg(t), t;
          var mt = we !== null, D = e !== null && e.memoizedState !== null;
          if (mt !== D && mt) {
            var V = t.child;
            if (V.flags |= Nn, (t.mode & st) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Cg(al.current, wC) ? Ub() : BS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Et), Fr(t), (t.mode & Mt) !== De && mt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case Re:
          return Df(t), xS(e, t), e === null && KT(t.stateNode.containerInfo), Fr(t), null;
        case pt:
          var se = t.type._context;
          return cg(se, t), Fr(t), null;
        case Ht: {
          var Pe = t.type;
          return Il(Pe) && jh(t), Fr(t), null;
        }
        case ln: {
          Lf(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Fr(t), null;
          var Xt = (t.flags & be) !== ke, Ut = Ge.rendering;
          if (Ut === null)
            if (Xt)
              zp(Ge, !1);
            else {
              var Gn = jb() && (e === null || (e.flags & be) === ke);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Vn = im(At);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= be, zp(Ge, !1);
                    var la = Vn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = ke, wx(t, a), Uo(t, Eg(al.current, Ep)), t.child;
                  }
                  At = At.sibling;
                }
              Ge.tail !== null && $n() > KE() && (t.flags |= be, Xt = !0, zp(Ge, !1), t.lanes = bd);
            }
          else {
            if (!Xt) {
              var Ir = im(Ut);
              if (Ir !== null) {
                t.flags |= be, Xt = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), zp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Ut.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $n() * 2 - Ge.renderingStartTime > KE() && a !== Zr && (t.flags |= be, Xt = !0, zp(Ge, !1), t.lanes = bd);
            }
            if (Ge.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ea = Ge.last;
              Ea !== null ? Ea.sibling = Ut : t.child = Ut, Ge.last = Ut;
            }
          }
          if (Ge.tail !== null) {
            var Ra = Ge.tail;
            Ge.rendering = Ra, Ge.tail = Ra.sibling, Ge.renderingStartTime = $n(), Ra.sibling = null;
            var ua = al.current;
            return Xt ? ua = Eg(ua, Ep) : ua = Of(ua), Uo(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case Oe:
        case jt: {
          PS(t);
          var Wu = t.memoizedState, Yf = Wu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= Nn);
          }
          return !Yf || (t.mode & st) === De ? Fr(t) : Jr(Xl, Zr) && (Fr(t), t.subtreeFlags & (mn | Et) && (t.flags |= Nn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type;
          Il(i) && jh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | be, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case J: {
          t.stateNode, Df(t), $y(t), Tg();
          var s = t.flags;
          return (s & Kn) !== ke && (s & be) === ke ? (t.flags = s & ~Kn | be, t) : null;
        }
        case oe:
          return Sg(t), null;
        case _e: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            wf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | be, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case ln:
          return Lf(t), null;
        case Re:
          return Df(t), null;
        case pt:
          var v = t.type._context;
          return cg(v, t), null;
        case Oe:
        case jt:
          return PS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function LE(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && jh(t);
          break;
        }
        case J: {
          t.stateNode, Df(t), $y(t), Tg();
          break;
        }
        case oe: {
          Sg(t);
          break;
        }
        case Re:
          Df(t);
          break;
        case _e:
          Lf(t);
          break;
        case ln:
          Lf(t);
          break;
        case pt:
          var u = t.type._context;
          cg(u, t);
          break;
        case Oe:
        case jt:
          PS(t);
          break;
      }
    }
    var ME = null;
    ME = /* @__PURE__ */ new Set();
    var Dm = !1, Hr = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, Se = null, jf = null, Ff = null;
    function jw(e) {
      wl(null, function() {
        throw e;
      }), ls();
    }
    var Fw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function NE(e, t) {
      try {
        Fo(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Fw(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function zE(e, t) {
      try {
        AE(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && lt && e.mode & Mt)
              try {
                Gl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Om(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var UE = !1;
    function Vw(e, t) {
      ZR(e.containerInfo), Se = t, Pw();
      var a = UE;
      return UE = !1, a;
    }
    function Pw() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & _l) !== ke && t !== null ? (t.return = e, Se = t) : Bw();
      }
    }
    function Bw() {
      for (; Se !== null; ) {
        var e = Se;
        Wt(e);
        try {
          Iw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Iw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== ke) {
        switch (Wt(e), e.tag) {
          case ue:
          case Qe:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = ME;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              TT(v.containerInfo);
            }
            break;
          }
          case oe:
          case $e:
          case Re:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? qi(t) : (e & fr) !== Ha && ss(t), (e & Yl) !== Ha && Qp(!0), Om(t, a, p), (e & Yl) !== Ha && Qp(!1), (e & jr) !== Ha ? Ll() : (e & fr) !== Ha && xd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? Td(t) : (e & fr) !== Ha && Dc(t);
            var f = s.create;
            (e & Yl) !== Ha && Qp(!0), s.destroy = f(), (e & Yl) !== Ha && Qp(!1), (e & jr) !== Ha ? Uv() : (e & fr) !== Ha && Av();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & Yl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Yw(e, t) {
      if ((t.flags & Et) !== ke)
        switch (t.tag) {
          case ht: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KC(), p = t.alternate === null ? "mount" : "update";
            XC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ht:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Ww(e, t, a, i) {
      if ((a.flags & Dl) !== ke)
        switch (a.tag) {
          case ue:
          case Qe:
          case He: {
            if (!Hr)
              if (a.mode & Mt)
                try {
                  Gl(), Fo(fr | cr, a);
                } finally {
                  Ql(a);
                }
              else
                Fo(fr | cr, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Et && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), EC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              EC(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var b = a.type, x = a.memoizedProps;
              sT(g, b, x);
            }
            break;
          }
          case $e:
            break;
          case Re:
            break;
          case ht: {
            {
              var M = a.memoizedProps, U = M.onCommit, H = M.onRender, le = a.stateNode.effectDuration, Me = KC(), we = t === null ? "mount" : "update";
              XC() && (we = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Me);
              {
                typeof U == "function" && U(a.memoizedProps.id, we, le, Me), Bb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case J:
                      var mt = xt.stateNode;
                      mt.effectDuration += le;
                      break e;
                    case ht:
                      var D = xt.stateNode;
                      D.effectDuration += le;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case _e: {
            Jw(e, a);
            break;
          }
          case ln:
          case Ht:
          case _t:
          case Oe:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Cn && AE(a);
    }
    function $w(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          if (e.mode & Mt)
            try {
              Gl(), NE(e, e.return);
            } finally {
              Ql(e);
            }
          else
            NE(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), zE(e, e.return);
          break;
        }
        case oe: {
          zE(e, e.return);
          break;
        }
      }
    }
    function Qw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ST(u) : ET(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === $e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CT(s) : RT(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Oe || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              Gl(), u = t(i);
            } finally {
              Ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function Gw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && ex(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qw(e) {
      for (var t = e.return; t !== null; ) {
        if (FE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FE(e) {
      return e.tag === oe || e.tag === J || e.tag === Re;
    }
    function HE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== $e && t.tag !== Zt; ) {
          if (t.flags & mn || t.child === null || t.tag === Re)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function Xw(e) {
      var t = qw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & Da && (P0(a), t.flags &= ~Da);
          var i = HE(e);
          _S(e, i, a);
          break;
        }
        case J:
        case Re: {
          var u = t.stateNode.containerInfo, s = HE(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== Re) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? vT(a, s, t) : dT(a, s);
      } else if (i !== Re) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, sl = !1;
    function Kw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              Vr = i.stateNode, sl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Re: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VE(e, t, a), Vr = null, sl = !1;
      }
      Gw(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        VE(e, t, i), i = i.sibling;
    }
    function VE(e, t, a) {
      switch (Cd(a), a.tag) {
        case oe:
          Hr || Hf(a, t);
        case $e: {
          {
            var i = Vr, u = sl;
            Vr = null, Ho(e, t, a), Vr = i, sl = u, Vr !== null && (sl ? yT(Vr, a.stateNode) : mT(Vr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Vr !== null && (sl ? gT(Vr, a.stateNode) : Fy(Vr, a.stateNode));
          return;
        }
        case Re: {
          {
            var s = Vr, f = sl;
            Vr = a.stateNode.containerInfo, sl = !0, Ho(e, t, a), Vr = s, sl = f;
          }
          return;
        }
        case ue:
        case Qe:
        case ct:
        case He: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & Yl) !== Ha ? Om(a, t, x) : (M & fr) !== Ha && (ss(a), a.mode & Mt ? (Gl(), Om(a, t, x), Ql(a)) : Om(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case pe: {
          if (!Hr) {
            Hf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Ho(e, t, a);
          return;
        }
        case _t: {
          Ho(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var H = Hr;
            Hr = H || a.memoizedState !== null, Ho(e, t, a), Hr = H;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function Zw(e) {
      e.memoizedState;
    }
    function Jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jT(s);
          }
        }
      }
    }
    function PE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Aw()), t.forEach(function(i) {
          var u = qb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (jf !== null && Ff !== null)
                $p(Ff, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      jf = a, Ff = e, Wt(t), BE(t, e), Wt(t), jf = null, Ff = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kw(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          Wt(p), BE(p, e), p = p.sibling;
      Wt(f);
    }
    function BE(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ue:
        case Qe:
        case ct:
        case He: {
          if (cl(t, e), ql(e), u & Et) {
            try {
              ol(Yl | cr, e, e.return), Fo(Yl | cr, e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            if (e.mode & Mt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
              Ql(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case pe: {
          cl(t, e), ql(e), u & Cn && i !== null && Hf(i, i.return);
          return;
        }
        case oe: {
          cl(t, e), ql(e), u & Cn && i !== null && Hf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    cT(f, g, y, v, p, e);
                  } catch (Pe) {
                    cn(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case $e: {
          if (cl(t, e), ql(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              fT(b, M, x);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
          }
          return;
        }
        case J: {
          if (cl(t, e), ql(e), u & Et && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                AT(t.containerInfo);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case Re: {
          cl(t, e), ql(e);
          return;
        }
        case _e: {
          cl(t, e), ql(e);
          var H = e.child;
          if (H.flags & Nn) {
            var le = H.stateNode, Me = H.memoizedState, we = Me !== null;
            if (le.isHidden = we, we) {
              var xt = H.alternate !== null && H.alternate.memoizedState !== null;
              xt || zb();
            }
          }
          if (u & Et) {
            try {
              Zw(e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            PE(e);
          }
          return;
        }
        case Oe: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var D = Hr;
            Hr = D || mt, cl(t, e), Hr = D;
          } else
            cl(t, e);
          if (ql(e), u & Nn) {
            var V = e.stateNode, O = e.memoizedState, q = O !== null, ve = e;
            if (V.isHidden = q, q && !mt && (ve.mode & st) !== De) {
              Se = ve;
              for (var se = ve.child; se !== null; )
                Se = se, nb(se), se = se.sibling;
            }
            Qw(ve, q);
          }
          return;
        }
        case ln: {
          cl(t, e), ql(e), u & Et && PE(e);
          return;
        }
        case _t:
          return;
        default: {
          cl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          Xw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function tb(e, t, a) {
      jf = a, Ff = t, Se = e, IE(e, t, a), jf = null, Ff = null;
    }
    function IE(e, t, a) {
      for (var i = (e.mode & st) !== De; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Oe && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = Dm, x = Hr;
            Dm = p, Hr = g, Hr && !x && (Se = u, rb(u));
            for (var M = s; M !== null; )
              Se = M, IE(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Dm = b, Hr = x, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Dl) !== ke && s !== null ? (s.return = u, Se = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Dl) !== ke) {
          var u = i.alternate;
          Wt(i);
          try {
            Ww(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function nb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ue:
          case Qe:
          case ct:
          case He: {
            if (t.mode & Mt)
              try {
                Gl(), ol(fr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case pe: {
            Hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case oe: {
            Hf(t, t.return);
            break;
          }
          case Oe: {
            var u = t.memoizedState !== null;
            if (u) {
              YE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : YE(e);
      }
    }
    function YE(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            WE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : WE(e);
      }
    }
    function WE(e) {
      for (; Se !== null; ) {
        var t = Se;
        Wt(t);
        try {
          $w(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ab(e, t, a, i) {
      Se = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Qi) !== ke && s !== null ? (s.return = u, Se = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Qr) !== ke) {
          Wt(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case ue:
        case Qe:
        case He: {
          if (t.mode & Mt) {
            Qg();
            try {
              Fo(jr | cr, t);
            } finally {
              $g(t);
            }
          } else
            Fo(jr | cr, t);
          break;
        }
      }
    }
    function ob(e) {
      Se = e, sb();
    }
    function sb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & ka) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, db(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Qi) !== ke && t !== null ? (t.return = e, Se = t) : cb();
      }
    }
    function cb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Qr) !== ke && (Wt(e), fb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          e.mode & Mt ? (Qg(), ol(jr | cr, e, e.return), $g(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Wt(a), vb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : pb(e);
      }
    }
    function pb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (jE(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          e.mode & Mt ? (Qg(), ol(jr, e, t), $g(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          try {
            Fo(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          try {
            Fo(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ue:
        case Qe:
        case He:
          try {
            ol(jr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Sb = [];
    function Cb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Eb = A.ReactCurrentActQueue;
    function Rb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $E() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Eb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tb = Math.ceil, DS = A.ReactCurrentDispatcher, OS = A.ReactCurrentOwner, Pr = A.ReactCurrentBatchConfig, fl = A.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), QE = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Pu = 0, Ap = 1, ec = 2, Lm = 3, jp = 4, GE = 5, LS = 6, Tt = vr, Sa = null, Dn = null, hr = Y, Xl = Y, MS = Do(Y), mr = Pu, Fp = null, Mm = Y, Hp = Y, Nm = Y, Vp = null, Va = null, NS = 0, qE = 500, XE = 1 / 0, xb = 500, Bu = null;
    function Pp() {
      XE = $n() + xb;
    }
    function KE() {
      return XE;
    }
    var zm = !1, zS = null, Vf = null, tc = !1, Vo = null, Bp = Y, US = [], AS = null, wb = 50, Ip = 0, jS = null, FS = !1, Um = !1, bb = 50, Pf = 0, Am = null, Yp = Kt, jm = Y, ZE = !1;
    function Fm() {
      return Sa;
    }
    function Ca() {
      return (Tt & (Br | Ai)) !== vr ? $n() : (Yp !== Kt || (Yp = $n()), Yp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & st) === De)
        return Fe;
      if ((Tt & Br) !== vr && hr !== Y)
        return Rs(hr);
      var a = Ex() !== Cx;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return jm === Dt && (jm = Md()), jm;
      }
      var u = Ua();
      if (u !== Dt)
        return u;
      var s = iT();
      return s;
    }
    function _b(e) {
      var t = e.mode;
      return (t & st) === De ? Fe : Bv();
    }
    function yr(e, t, a, i) {
      Kb(), ZE && S("useInsertionEffect must not schedule updates."), FS && (Um = !0), go(e, a, i), (Tt & Br) !== Y && e === Sa ? e_(t) : (Kr && ws(e, t, a), t_(t), e === Sa && ((Tt & Br) === vr && (Hp = Ze(Hp, a)), mr === jp && Bo(e, hr)), Pa(e, i), a === Fe && Tt === vr && (t.mode & st) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Pp(), Z0()));
    }
    function kb(e, t, a) {
      var i = e.current;
      i.lanes = t, go(e, t, a), Pa(e, a);
    }
    function Db(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Br) !== vr
      );
    }
    function Pa(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Gc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && v1(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== WS)) {
        a == null && s !== Fe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && v1(a);
      var f;
      if (u === Fe)
        e.tag === Oo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), rx(t1.bind(null, e))) : K0(t1.bind(null, e)), fl.current !== null ? fl.current.push(Lo) : uT(function() {
          (Tt & (Br | Ai)) === vr && Lo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case Lr:
            p = os;
            break;
          case bi:
            p = Ol;
            break;
          case Na:
            p = Gi;
            break;
          case za:
            p = hu;
            break;
          default:
            p = Gi;
            break;
        }
        f = $S(p, JE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JE(e, t) {
      if (Qx(), Yp = Kt, jm = Y, (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Gc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Kc(e, u) && !Pv(e, u) && !t, f = s ? Hb(e, u) : Vm(e, u);
      if (f !== Pu) {
        if (f === ec) {
          var p = Xc(e);
          p !== Y && (u = p, f = HS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, Y), Bo(e, u), Pa(e, $n()), v;
        }
        if (f === LS)
          Bo(e, u);
        else {
          var y = !Kc(e, u), g = e.current.alternate;
          if (y && !Lb(g)) {
            if (f = Vm(e, u), f === ec) {
              var b = Xc(e);
              b !== Y && (u = b, f = HS(e, b));
            }
            if (f === Ap) {
              var x = Fp;
              throw nc(e, Y), Bo(e, u), Pa(e, $n()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Pa(e, $n()), e.callbackNode === a ? JE.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Vp;
      if (ef(e)) {
        var i = nc(e, t);
        i.flags |= Er, XT(e.containerInfo);
      }
      var u = Vm(e, t);
      if (u !== ec) {
        var s = Va;
        Va = a, s !== null && e1(s);
      }
      return u;
    }
    function e1(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case Pu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Va, Bu);
          break;
        }
        case Lm: {
          if (Bo(e, a), bu(a) && // do not delay if we're inside an act() scope
          !h1()) {
            var i = NS + qE - $n();
            if (i > 10) {
              var u = Gc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!_u(s, a)) {
                Ca(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Va, Bu), i);
              break;
            }
          }
          rc(e, Va, Bu);
          break;
        }
        case jp: {
          if (Bo(e, a), Od(a))
            break;
          if (!h1()) {
            var f = ri(e, a), p = f, v = $n() - p, y = Xb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Va, Bu), y);
              break;
            }
          }
          rc(e, Va, Bu);
          break;
        }
        case GE: {
          rc(e, Va, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lb(e) {
      for (var t = e; ; ) {
        if (t.flags & po) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & po && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ts(t, Nm), t = Ts(t, Hp), Wv(e, t);
    }
    function t1(e) {
      if (Gx(), (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = Gc(e, Y);
      if (!Jr(t, Fe))
        return Pa(e, $n()), null;
      var a = Vm(e, t);
      if (e.tag !== Oo && a === ec) {
        var i = Xc(e);
        i !== Y && (t = i, a = HS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, Y), Bo(e, t), Pa(e, $n()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Va, Bu), Pa(e, $n()), null;
    }
    function Mb(e, t) {
      t !== Y && (Jc(e, Ze(t, Fe)), Pa(e, $n()), (Tt & (Br | Ai)) === vr && (Pp(), Lo()));
    }
    function VS(e, t) {
      var a = Tt;
      Tt |= QE;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Pp(), Z0());
      }
    }
    function Nb(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Pr.transition = f, Tt === vr && Pp();
      }
    }
    function Iu(e) {
      Vo !== null && Vo.tag === Oo && (Tt & (Br | Ai)) === vr && Yu();
      var t = Tt;
      Tt |= QE;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Pr.transition = a, Tt = t, (Tt & (Br | Ai)) === vr && Lo();
      }
    }
    function n1() {
      return (Tt & (Br | Ai)) !== vr;
    }
    function Hm(e, t) {
      aa(MS, Xl, e), Xl = Ze(Xl, t);
    }
    function PS(e) {
      Xl = MS.current, ra(MS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, lT(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          LE(u, i), i = i.return;
        }
      Sa = e;
      var s = ac(e.current, null);
      return Dn = s, hr = Xl = t, mr = Pu, Fp = null, Mm = Y, Hp = Y, Nm = Y, Vp = null, Va = null, kx(), rl.discardPendingWarnings(), s;
    }
    function r1(e, t) {
      do {
        var a = Dn;
        try {
          if (qh(), _C(), sn(), OS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, Dn = null;
            return;
          }
          if (Ae && a.mode & Mt && xm(a, !0), Ve)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, hr);
            } else
              cs(a, t, hr);
          rw(e, a.return, a, t, hr), u1(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function a1() {
      var e = DS.current;
      return DS.current = Sm, e === null ? Sm : e;
    }
    function i1(e) {
      DS.current = e;
    }
    function zb() {
      NS = $n();
    }
    function Wp(e) {
      Mm = Ze(e, Mm);
    }
    function Ub() {
      mr === Pu && (mr = Lm);
    }
    function BS() {
      (mr === Pu || mr === Lm || mr === ec) && (mr = jp), Sa !== null && (Es(Mm) || Es(Hp)) && Bo(Sa, hr);
    }
    function Ab(e) {
      mr !== jp && (mr = ec), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function jb() {
      return mr === Pu;
    }
    function Vm(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = a1();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), $v(e, t);
        }
        Bu = Ad(), nc(e, t);
      }
      Su(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      if (qh(), Tt = a, i1(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Oc(), Sa = null, hr = Y, mr;
    }
    function Fb() {
      for (; Dn !== null; )
        l1(Dn);
    }
    function Hb(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = a1();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), $v(e, t);
        }
        Bu = Ad(), Pp(), nc(e, t);
      }
      Su(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      return qh(), i1(i), Tt = a, Dn !== null ? (jv(), Pu) : (Oc(), Sa = null, hr = Y, mr);
    }
    function Vb() {
      for (; Dn !== null && !hd(); )
        l1(Dn);
    }
    function l1(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Mt) !== De ? (Wg(e), a = IS(t, e, Xl), xm(e, !0)) : a = IS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? u1(e) : Dn = a, OS.current = null;
    }
    function u1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & us) === ke) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Mt) === De ? u = OE(a, t, Xl) : (Wg(t), u = OE(a, t, Xl), xm(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = Uw(a, t);
          if (s !== null) {
            s.flags &= Lv, Dn = s;
            return;
          }
          if ((t.mode & Mt) !== De) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= us, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = LS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Pu && (mr = GE);
    }
    function rc(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, jn(Lr), Pb(e, t, a, i);
      } finally {
        Pr.transition = u, jn(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (Zb(), (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ed(s), u === null)
        return Rd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = Ze(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, Dn = null, hr = Y), ((u.subtreeFlags & Qi) !== ke || (u.flags & Qi) !== ke) && (tc || (tc = !0, AS = a, $S(Gi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (_l | kl | Dl | Qi)) !== ke, v = (u.flags & (_l | kl | Dl | Qi)) !== ke;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Tt;
        Tt |= Ai, OS.current = null, Vw(e, u), ZC(), eb(e, u, s), JR(e.containerInfo), e.current = u, fs(s), tb(u, e, s), ds(), md(), Tt = b, jn(g), Pr.transition = y;
      } else
        e.current = u, ZC();
      var x = tc;
      if (tc ? (tc = !1, Vo = e, Bp = s) : (Pf = 0, Am = null), f = e.pendingLanes, f === Y && (Vf = null), x || f1(e.current, !1), gd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Cb(), Pa(e, $n()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var H = t[U], le = H.stack, Me = H.digest;
          M(H.value, {
            componentStack: le,
            digest: Me
          });
        }
      if (zm) {
        zm = !1;
        var we = zS;
        throw zS = null, we;
      }
      return Jr(Bp, Fe) && e.tag !== Oo && Yu(), f = e.pendingLanes, Jr(f, Fe) ? ($x(), e === jS ? Ip++ : (Ip = 0, jS = e)) : Ip = 0, Lo(), Rd(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = qv(Bp), t = _s(Na, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, jn(t), Ib();
        } finally {
          jn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      US.push(e), tc || (tc = !0, $S(Gi, function() {
        return Yu(), null;
      }));
    }
    function Ib() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = Y, (Tt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, Um = !1, gu(a);
      var i = Tt;
      Tt |= Ai, ob(t.current), ab(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yw(t, f);
        }
      }
      wd(), f1(t.current, !0), Tt = i, Lo(), Um ? t === Am ? Pf++ : (Pf = 0, Am = t) : Pf = 0, FS = !1, Um = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function o1(e) {
      return Vf !== null && Vf.has(e);
    }
    function Yb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Wb(e) {
      zm || (zm = !0, zS = e);
    }
    var $b = Wb;
    function s1(e, t, a) {
      var i = Zs(a, t), u = lE(e, i, Fe), s = No(e, u, Fe), f = Ca();
      s !== null && (go(s, Fe, f), Pa(s, f));
    }
    function cn(e, t, a) {
      if (jw(a), Qp(!1), e.tag === J) {
        s1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          s1(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !o1(s)) {
            var f = Zs(a, e), p = sS(i, f, Fe), v = No(i, p, Fe), y = Ca();
            v !== null && (go(v, Fe, y), Pa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Qb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      Zc(e, a), n_(e), Sa === e && _u(hr, a) && (mr === jp || mr === Lm && bu(hr) && $n() - NS < qE ? nc(e, Y) : Nm = Ze(Nm, a)), Pa(e, u);
    }
    function c1(e, t) {
      t === Dt && (t = _b(e));
      var a = Ca(), i = Fa(e, t);
      i !== null && (go(i, t, a), Pa(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), c1(e, a);
    }
    function qb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), c1(e, a);
    }
    function Xb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tb(e / 1960) * 1960;
    }
    function Kb() {
      if (Ip > wb)
        throw Ip = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Pf > bb && (Pf = 0, Am = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function f1(e, t) {
      Wt(e), Pm(e, bl, yb), t && Pm(e, Ri, gb), Pm(e, bl, hb), t && Pm(e, Ri, mb), sn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function d1(e) {
      {
        if ((Tt & Br) !== vr || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== Ke && t !== J && t !== pe && t !== ue && t !== Qe && t !== ct && t !== He)
          return;
        var a = Ie(e) || "ReactComponent";
        if (Bm !== null) {
          if (Bm.has(a))
            return;
          Bm.add(a);
        } else
          Bm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Wt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : sn();
        }
      }
    }
    var IS;
    {
      var Jb = null;
      IS = function(e, t, a) {
        var i = C1(Jb, t);
        try {
          return wE(e, t, a);
        } catch (s) {
          if (fx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), _C(), LE(e, t), C1(t, i), t.mode & Mt && Wg(t), wl(null, wE, null, e, t, a), Wi()) {
            var u = ls();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var p1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function e_(e) {
      if (hi && !Ix())
        switch (e.tag) {
          case ue:
          case Qe:
          case He: {
            var t = Dn && Ie(Dn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            p1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), p1 = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ws(e, i, t);
        });
      }
    }
    var WS = {};
    function $S(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), WS) : vd(e, t);
      }
    }
    function v1(e) {
      if (e !== WS)
        return Nv(e);
    }
    function h1() {
      return fl.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & st) {
          if (!$E())
            return;
        } else if (!Rb() || Tt !== vr || e.tag !== ue && e.tag !== Qe && e.tag !== He)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            Wt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? Wt(e) : sn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Oo && $E() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      ZE = e;
    }
    var ji = null, Bf = null, r_ = function(e) {
      ji = e;
    };
    function If(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return If(e);
    }
    function GS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function m1(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ue: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Qe: {
            (s === I || s === Ye) && (u = !0);
            break;
          }
          case ct:
          case He: {
            (s === qe || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function y1(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Bf === null && (Bf = /* @__PURE__ */ new WeakSet()), Bf.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          qS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Yu(), Iu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ue:
          case He:
          case pe:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ji(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === pe ? g = !0 : y = !0));
        }
        if (Bf !== null && (Bf.has(e) || i !== null && Bf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, Fe);
          x !== null && yr(x, e, Fe, Kt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ue:
          case He:
          case pe:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case Re:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var g1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return ZS(e) ? pe : ue;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Qe;
        if (t === qe)
          return ct;
      }
      return Ke;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ke:
        case ue:
        case He:
          a.type = If(e.type);
          break;
        case pe:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p_(e, t, a) {
      var i;
      return e === Hh ? (i = st, t === !0 && (i |= Gt, i |= Nt)) : i = De, Kr && (i |= Mt), ui(J, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Ke, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = pe, p = QS(p)) : p = If(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case fi:
            return Io(a.children, u, s, t);
          case $a:
            f = vt, u |= Gt, (u & st) !== De && (u |= Nt);
            break;
          case di:
            return v_(a, u, s, t);
          case ae:
            return h_(a, u, s, t);
          case me:
            return m_(a, u, s, t);
          case Tn:
            return S1(a, u, s, t);
          case tn:
          case ft:
          case on:
          case ar:
          case ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = pt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case I:
                  f = Qe, p = GS(p);
                  break e;
                case qe:
                  f = ct;
                  break e;
                case Ye:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ie(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = ui(Ct, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(ht, e, i, t | Mt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = ui(_e, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function S1(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ui($e, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = ui(oe, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = ui(Zt, null, null, De);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Re, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function C1(e, t) {
      return e === null && (e = ui(Ke, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = xs(Y), this.expirationTimes = xs(Kt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = xs(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), b = p_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return hg(b), g;
    }
    var r0 = "18.3.1";
    function C_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function R1(e) {
      if (!e)
        return li;
      var t = fo(e), a = nx(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Il(i))
          return q0(t, i, a);
      }
      return a;
    }
    function E_(e, t) {
      {
        var a = fo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Ie(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = ir;
            try {
              Wt(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function T1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return E1(e, t, v, y, a, i, u, s, f);
    }
    function x1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = E1(a, i, g, e, u, s, f, p, v);
      b.context = R1(null);
      var x = b.current, M = Ca(), U = Po(x), H = Hu(M, U);
      return H.callback = t ?? null, No(x, H, U), kb(b, U, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ca(), f = Po(u);
      gn(f);
      var p = R1(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(ir) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (yr(y, u, f, s), em(y, u, f)), f;
    }
    function Im(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (ef(t)) {
            var a = Hv(t);
            Mb(t, a);
          }
          break;
        }
        case _e: {
          Iu(function() {
            var u = Fa(e, Fe);
            if (u !== null) {
              var s = Ca();
              yr(u, e, Fe, s);
            }
          });
          var i = Fe;
          l0(e, i);
          break;
        }
      }
    }
    function w1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function l0(e, t) {
      w1(e, t);
      var a = e.alternate;
      a && w1(a, t);
    }
    function T_(e) {
      if (e.tag === _e) {
        var t = gs, a = Fa(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function x_(e) {
      if (e.tag === _e) {
        var t = Po(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function b1(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var _1 = function(e) {
      return null;
    };
    function w_(e) {
      return _1(e);
    }
    var k1 = function(e) {
      return !1;
    };
    function b_(e) {
      return k1(e);
    }
    var D1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null, j1 = null;
    {
      var F1 = function(e, t, a) {
        var i = t[a], u = at(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (at(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = F1(e[i], t, a + 1), u);
      }, H1 = function(e, t) {
        return F1(e, t, 0);
      }, V1 = function(e, t, a, i) {
        var u = t[i], s = at(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], at(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = V1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, P1 = function(e, t, a) {
        if (t.length !== a.length) {
          St("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              St("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return V1(e, t, a, 0);
      }, B1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = at(e) ? e.slice() : et({}, e);
        return s[u] = B1(e[u], t, a + 1, i), s;
      }, I1 = function(e, t, a) {
        return B1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      D1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = I1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, Kt);
        }
      }, O1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = H1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = et({}, e.memoizedProps);
          var s = Fa(e, Fe);
          s !== null && yr(s, e, Fe, Kt);
        }
      }, L1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = P1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, Kt);
        }
      }, M1 = function(e, t, a) {
        e.pendingProps = I1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, Kt);
      }, N1 = function(e, t) {
        e.pendingProps = H1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Fe);
        a !== null && yr(a, e, Fe, Kt);
      }, z1 = function(e, t, a) {
        e.pendingProps = P1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, Kt);
      }, U1 = function(e) {
        var t = Fa(e, Fe);
        t !== null && yr(t, e, Fe, Kt);
      }, A1 = function(e) {
        _1 = e;
      }, j1 = function(e) {
        k1 = e;
      };
    }
    function __(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function k_(e) {
      return null;
    }
    function D_() {
      return ir;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return ho({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: D1,
        overrideHookStateDeletePath: O1,
        overrideHookStateRenamePath: L1,
        overrideProps: M1,
        overridePropsDeletePath: N1,
        overridePropsRenamePath: z1,
        setErrorHandler: A1,
        setSuspenseHandler: j1,
        scheduleUpdate: U1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || k_,
        // React Refresh
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var Y1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Wm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = b1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Ym.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        n1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Gp(null, e, null, null);
        }), Y0(t);
      }
    };
    function L_(e, t) {
      if (!Wm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      W1(e);
      var a = !1, i = !1, u = "", s = Y1;
      t != null && (t.hydrate ? St("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = T1(e, Hh, null, a, i, u, s);
      Mh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new o0(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && eh(e);
    }
    Ym.prototype.unstable_scheduleHydration = M_;
    function N_(e, t, a) {
      if (!Wm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      W1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Y1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = x1(t, null, e, Hh, i, s, f, p, v);
      if (Mh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          jx(y, b);
        }
      return new Ym(y);
    }
    function Wm(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function W1(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z_ = A.ReactCurrentOwner, $1;
    $1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = b1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function U_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Im(f);
            s.call(x);
          };
        }
        var f = x1(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = f, Mh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Im(g);
            y.call(x);
          };
        }
        var g = T1(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = g, Mh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Iu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function A_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      $1(a), A_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Im(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Im(f);
    }
    var G1 = !1;
    function j_(e) {
      {
        G1 || (G1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = z_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : E_(e, "findDOMNode");
    }
    function F_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function H_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function V_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ly(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var q1 = !1;
    function P_(e) {
      if (q1 || (q1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && ko(u)), f = e.nodeType === $r && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(R_), So(T_), Xv(x_), Ds(Ua), jd(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yc(IR), iy(VS, Nb, Iu);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wm(t))
        throw new Error("Target container is not a DOM element.");
      return C_(e, t, null, a);
    }
    function I_(e, t, a, i) {
      return V_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, Cf, Nh, uo, gc, VS]
    };
    function Y_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function W_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t, a);
    }
    function $_(e) {
      return n1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var Q_ = O_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!Q_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var X1 = window.location.protocol;
      /^(https?|file):$/.test(X1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (X1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ia.createPortal = B_, Ia.createRoot = Y_, Ia.findDOMNode = j_, Ia.flushSync = $_, Ia.hydrate = F_, Ia.hydrateRoot = W_, Ia.render = H_, Ia.unmountComponentAtNode = P_, Ia.unstable_batchedUpdates = VS, Ia.unstable_renderSubtreeIntoContainer = I_, Ia.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function oR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oR);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (oR(), m0.exports = rk()) : m0.exports = ak();
var ik = m0.exports, Jp = ik;
if (process.env.NODE_ENV === "production")
  Wf.createRoot = Jp.createRoot, Wf.hydrateRoot = Jp.hydrateRoot;
else {
  var Gm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Wf.createRoot = function(j, X) {
    Gm.usingClientEntryPoint = !0;
    try {
      return Jp.createRoot(j, X);
    } finally {
      Gm.usingClientEntryPoint = !1;
    }
  }, Wf.hydrateRoot = function(j, X, A) {
    Gm.usingClientEntryPoint = !0;
    try {
      return Jp.hydrateRoot(j, X, A);
    } finally {
      Gm.usingClientEntryPoint = !1;
    }
  };
}
const lk = (j = "") => (j == null ? void 0 : j.toLowerCase()) === "dev" ? "https://next-dev.listkit.io" : (j == null ? void 0 : j.toLowerCase()) === "staging" ? "https://next-beta.listkit.io" : "https://next.listkit.io", uk = ({
  data: j = null,
  theme: X = ""
}) => {
  var St, S;
  console.log("theme in PeopleBaseWidget", X);
  const A = `${lk(
    j == null ? void 0 : j.env
  )}/signup?plan=universalAccessFree&prompt=${j.title || ""}&tokenAI=${j.token}&filterAI=${encodeURIComponent(
    JSON.stringify(
      j.search_type === "vector" ? "" : j.applied_filters || ""
    )
  )}&pageAI=${j.page || ""}&templateId=${j.templateId || ""}&searchType=${j.search_type || ""}&titleAI=${j.title || ""}`, it = j.templateId || "";
  console.log("widget people", it);
  const gt = (je) => {
    const ue = ["cxo", "vp", "ceo", "cmo", "pm", "cto", "coo", "cro"];
    if (je && (je != null && je.trim())) {
      const pe = je.trim().toLowerCase();
      ue.forEach((Ke) => {
        if (pe.includes(Ke)) {
          const J = new RegExp(`\\b${Ke}\\b`, "gi");
          je = je.replace(J, Ke.toUpperCase());
        }
      });
    }
    return je;
  };
  return /* @__PURE__ */ ce.jsx(ce.Fragment, { children: /* @__PURE__ */ ce.jsxs("div", { className: `container ${X === "dark" ? "container--dark" : ""}`, children: [
    /* @__PURE__ */ ce.jsxs("div", { className: "title-block", children: [
      /* @__PURE__ */ ce.jsx("span", { className: "title-block__text", children: gt((j == null ? void 0 : j.title) || "") }),
      /* @__PURE__ */ ce.jsxs(
        "a",
        {
          href: A,
          target: "_blank",
          className: "title-block__button",
          type: "button",
          children: [
            "Open",
            " ",
            ((St = j == null ? void 0 : j.results) == null ? void 0 : St.length) > 0 ? `${j != null && j.result_count ? (S = j == null ? void 0 : j.result_count) == null ? void 0 : S.toLocaleString("en-US") : ""} results` : " web"
          ]
        }
      )
    ] }),
    j != null && j.error || j != null && j.text ? /* @__PURE__ */ ce.jsx("div", { className: "no-data error-text", children: (j == null ? void 0 : j.text) || "Error: Request topic is not supported" }) : /* @__PURE__ */ ce.jsxs("div", { className: "overflow", children: [
      /* @__PURE__ */ ce.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ ce.jsx("thead", { children: /* @__PURE__ */ ce.jsxs("tr", { children: [
          it === "people-base" && /* @__PURE__ */ ce.jsx("th", { className: "table__th", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex", children: [
            /* @__PURE__ */ ce.jsxs(
              "svg",
              {
                className: "min-w-14",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ ce.jsx(
                    "circle",
                    {
                      cx: "6.99984",
                      cy: "3.4974",
                      r: "2.33333",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "ellipse",
                    {
                      cx: "6.99984",
                      cy: "9.91927",
                      rx: "4.08333",
                      ry: "2.33333",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  )
                ]
              }
            ),
            "Full name"
          ] }) }),
          /* @__PURE__ */ ce.jsx("th", { className: "table__th", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex", children: [
            /* @__PURE__ */ ce.jsxs(
              "svg",
              {
                className: "min-w-14",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M12.8332 12.8359L1.1665 12.8359",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M9.91683 12.8307V3.4974C9.91683 2.39745 9.91683 1.84748 9.57512 1.50577C9.23341 1.16406 8.68344 1.16406 7.5835 1.16406H6.41683C5.31689 1.16406 4.76691 1.16406 4.4252 1.50577C4.0835 1.84748 4.0835 2.39745 4.0835 3.4974V12.8307",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M12.2502 12.8307V6.70573C12.2502 5.88646 12.2502 5.47682 12.0535 5.18256C11.9684 5.05518 11.859 4.9458 11.7317 4.86068C11.4374 4.66406 11.0278 4.66406 10.2085 4.66406",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M1.75 12.8307V6.70573C1.75 5.88646 1.75 5.47682 1.94662 5.18256C2.03174 5.05518 2.14111 4.9458 2.2685 4.86068C2.56276 4.66406 2.9724 4.66406 3.79167 4.66406",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M7 12.8359V11.0859",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.8335 2.91406H8.16683",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.8335 4.66406H8.16683",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.8335 6.41406H8.16683",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.8335 8.16406H8.16683",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  )
                ]
              }
            ),
            "Company"
          ] }) }),
          it === "companies-base" && /* @__PURE__ */ ce.jsx("th", { className: "table__th", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex", children: [
            /* @__PURE__ */ ce.jsxs(
              "svg",
              {
                className: "min-w-14",
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M2 6.66927C2 4.15511 2 2.89803 2.78105 2.11699C3.5621 1.33594 4.81918 1.33594 7.33333 1.33594H8.66667C11.1808 1.33594 12.4379 1.33594 13.219 2.11699C14 2.89803 14 4.15511 14 6.66927V9.33594C14 11.8501 14 13.1072 13.219 13.8882C12.4379 14.6693 11.1808 14.6693 8.66667 14.6693H7.33333C4.81918 14.6693 3.5621 14.6693 2.78105 13.8882C2 13.1072 2 11.8501 2 9.33594V6.66927Z",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.33325 8H10.6666",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.33325 5.33594H10.6666",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M5.33325 10.6641H8.66659",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  )
                ]
              }
            ),
            "URL"
          ] }) }),
          it === "companies-base" && /* @__PURE__ */ ce.jsx("th", { className: "table__th", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex", children: [
            /* @__PURE__ */ ce.jsxs(
              "svg",
              {
                className: "min-w-14",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M8.16663 3.5H5.83329C5.04237 3.5 4.39362 3.5 3.8553 3.53176C2.89632 3.58834 2.28775 3.74571 1.85004 4.18342C1.16663 4.86684 1.16663 5.96678 1.16663 8.16667C1.16663 10.3666 1.16663 11.4665 1.85004 12.1499C2.53346 12.8333 3.6334 12.8333 5.83329 12.8333H8.16663C10.3665 12.8333 11.4665 12.8333 12.1499 12.1499C12.8333 11.4665 12.8333 10.3666 12.8333 8.16667C12.8333 5.96678 12.8333 4.86684 12.1499 4.18342C11.7122 3.74571 11.1036 3.58834 10.1446 3.53176C9.6063 3.5 8.95755 3.5 8.16663 3.5Z",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M3.85547 3.53176C4.33581 3.51959 4.75956 3.18203 4.92301 2.73019C4.92804 2.71629 4.93319 2.70083 4.9435 2.6699L4.95847 2.625C4.98307 2.55117 4.99538 2.51425 5.00855 2.4815C5.17666 2.06332 5.57061 1.77938 6.02049 1.75213C6.05572 1.75 6.09464 1.75 6.17246 1.75H7.8278C7.90563 1.75 7.94454 1.75 7.97977 1.75213C8.42966 1.77938 8.8236 2.06332 8.99172 2.4815C9.00488 2.51425 9.01719 2.55117 9.0418 2.625L9.05677 2.6699C9.06706 2.70078 9.07223 2.7163 9.07726 2.73019C9.2407 3.18203 9.66445 3.51959 10.1448 3.53176",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M12.636 5.08594C10.8803 6.22717 10.0024 6.79778 9.07693 7.08532C7.72421 7.5056 6.2758 7.5056 4.92308 7.08532C3.99762 6.79778 3.11975 6.22717 1.36401 5.08594",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M4.66663 6.41797V7.58464",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M9.33337 6.41797V7.58464",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  )
                ]
              }
            ),
            "Employees"
          ] }) }),
          it === "people-base" && /* @__PURE__ */ ce.jsx("th", { className: "table__th", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex", children: [
            /* @__PURE__ */ ce.jsxs(
              "svg",
              {
                className: "min-w-14",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M8.1665 3.5H5.83317C5.04224 3.5 4.3935 3.5 3.85517 3.53176C2.8962 3.58834 2.28763 3.74571 1.84992 4.18342C1.1665 4.86684 1.1665 5.96678 1.1665 8.16667C1.1665 10.3666 1.1665 11.4665 1.84992 12.1499C2.53334 12.8333 3.63328 12.8333 5.83317 12.8333H8.1665C10.3664 12.8333 11.4663 12.8333 12.1498 12.1499C12.8332 11.4665 12.8332 10.3666 12.8332 8.16667C12.8332 5.96678 12.8332 4.86684 12.1498 4.18342C11.712 3.74571 11.1035 3.58834 10.1445 3.53176C9.60618 3.5 8.95743 3.5 8.1665 3.5Z",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M3.85547 3.53176C4.33581 3.51959 4.75956 3.18203 4.92301 2.73019C4.92804 2.71629 4.93319 2.70083 4.9435 2.6699L4.95847 2.625C4.98307 2.55117 4.99538 2.51425 5.00855 2.4815C5.17666 2.06332 5.57061 1.77938 6.02049 1.75213C6.05572 1.75 6.09464 1.75 6.17246 1.75H7.8278C7.90563 1.75 7.94454 1.75 7.97977 1.75213C8.42966 1.77938 8.8236 2.06332 8.99172 2.4815C9.00488 2.51425 9.01719 2.55117 9.0418 2.625L9.05677 2.6699C9.06706 2.70078 9.07223 2.7163 9.07726 2.73019C9.2407 3.18203 9.66445 3.51959 10.1448 3.53176",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M12.6362 5.08594C10.8805 6.22717 10.0026 6.79778 9.07718 7.08532C7.72445 7.5056 6.27605 7.5056 4.92332 7.08532C3.99787 6.79778 3.12 6.22717 1.36426 5.08594",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M4.6665 6.41406V7.58073",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "path",
                    {
                      d: "M9.3335 6.41406V7.58073",
                      stroke: "#0D2A4C",
                      strokeWidth: "0.875",
                      strokeLinecap: "round"
                    }
                  )
                ]
              }
            ),
            "Job Title"
          ] }) })
        ] }) }),
        /* @__PURE__ */ ce.jsx("tbody", { children: j == null ? void 0 : j.results.map((je, ue) => /* @__PURE__ */ ce.jsxs(
          "tr",
          {
            className: "table__tr",
            children: [
              it === "people-base" && /* @__PURE__ */ ce.jsx("td", { className: "table__td", children: /* @__PURE__ */ ce.jsx("div", { className: "table__flex capitalize", children: je.fullName || "N/A" }) }),
              /* @__PURE__ */ ce.jsx("td", { className: "table__td", children: /* @__PURE__ */ ce.jsxs("div", { className: "table__flex capitalize", children: [
                /* @__PURE__ */ ce.jsx(
                  "div",
                  {
                    className: "table__img-circle",
                    style: {
                      background: "linear-gradient(to right, lab(65.0361% -1.42065 -56.9802), lab(52.0183% 66.11 -78.2316))"
                    },
                    children: je.companyLogo && /* @__PURE__ */ ce.jsx(
                      "img",
                      {
                        width: 16,
                        height: 16,
                        src: je.companyLogo,
                        alt: je.companyName
                      }
                    )
                  }
                ),
                /* @__PURE__ */ ce.jsxs("div", { children: [
                  je.companyName || "N/A",
                  " ",
                  /* @__PURE__ */ ce.jsx("div", { className: "table__line" })
                ] })
              ] }) }),
              it === "companies-base" && /* @__PURE__ */ ce.jsx("td", { className: "table__td", children: /* @__PURE__ */ ce.jsx("div", { className: "table__flex", children: je.companyDomain || je.companyWebsite }) }),
              it === "companies-base" && /* @__PURE__ */ ce.jsx("td", { className: "table__td", children: /* @__PURE__ */ ce.jsx("div", { className: "table__flex", children: je.employeesRange && /* @__PURE__ */ ce.jsx("span", { className: "table__badge", children: je.employeesRange }) }) }),
              it === "people-base" && /* @__PURE__ */ ce.jsx("td", { className: "table__td", children: /* @__PURE__ */ ce.jsx("div", { className: "table__flex capitalize", children: gt(je.jobTitle) }) })
            ]
          },
          je.id || je.companyId || ue
        )) })
      ] }),
      (j == null ? void 0 : j.results.length) === 0 && /* @__PURE__ */ ce.jsx("div", { className: "no-data", children: "No results here - try the full search in the app" })
    ] })
  ] }) });
}, sR = ({
  data: j = null,
  theme: X = ""
}) => (console.log("theme in widgetRenderer", X), /* @__PURE__ */ ce.jsx(uk, { data: j, theme: X }));
console.log("WIDGET BUILD 05-01-2026 v1");
const ok = {
  applied_filters: {
    geo: "Italy",
    q: "company zimbabve",
    country: ["italy"],
    jobTitle: ["founder", "ceo"]
  },
  title: "cto in la",
  result_count: 5,
  results: [
    {
      name: "sinalp",
      domain: "sinalp.it",
      logo: "https://logo.clearbit.com/sinalp.it",
      companyId: null,
      companyName: "sinalp",
      companyDomain: "sinalp.it",
      companyLogo: null
    },
    {
      name: "cm service",
      domain: "cmservicesrl.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/497920869b72d69f9bb30ef96e72d2f0",
      companyId: null,
      companyName: "cm service",
      companyDomain: "cmservicesrl.it",
      companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/497920869b72d69f9bb30ef96e72d2f0"
    },
    {
      name: "across srl",
      domain: "across.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/b23e652ba9522267e307ded6deeebf91",
      companyId: null,
      companyName: "across srl",
      companyDomain: "across.it",
      companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/b23e652ba9522267e307ded6deeebf91"
    },
    {
      name: "studio rigotto",
      domain: "studiorigotto.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/5f76d5285a7f447c248ff801c617842e",
      companyId: null,
      companyName: "studio rigotto",
      companyDomain: "studiorigotto.it",
      companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/5f76d5285a7f447c248ff801c617842e"
    },
    {
      name: "brainy, the thinking revenue management platform",
      domain: "brainyrms.com",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/31ee3130bf7eec857ba3fe9fb610c7d7",
      companyId: null,
      companyName: "brainy, the thinking revenue management platform",
      companyDomain: "brainyrms.com",
      companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/31ee3130bf7eec857ba3fe9fb610c7d7"
    }
  ],
  error: null
};
let p0 = null;
function dk(j = "", X = {}, A = "") {
  const it = document.getElementById("root");
  if (!it) {
    console.error("renderWidget: missing root", { templateId: j });
    return;
  }
  p0 || (p0 = Wf.createRoot(it)), console.log("theme in renderWidget", A), p0.render(
    /* @__PURE__ */ ce.jsx(lR.StrictMode, { children: /* @__PURE__ */ ce.jsx(sR, { data: X, theme: A }) })
  );
}
window.location.hostname === "localhost" && document.getElementById("root") && Wf.createRoot(
  document.getElementById("root")
).render(
  /* @__PURE__ */ ce.jsx(lR.StrictMode, { children: /* @__PURE__ */ ce.jsx(sR, { data: ok }) })
);
export {
  dk as renderWidget
};
