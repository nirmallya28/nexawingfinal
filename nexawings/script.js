(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? i.credentials = "include" : l.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = t(l);
        fetch(l.href, i)
    }
})();

function cc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Zt = {
        exports: {}
    },
    O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt = Symbol.for("react.element"),
    fc = Symbol.for("react.portal"),
    dc = Symbol.for("react.fragment"),
    pc = Symbol.for("react.strict_mode"),
    mc = Symbol.for("react.profiler"),
    hc = Symbol.for("react.provider"),
    vc = Symbol.for("react.context"),
    yc = Symbol.for("react.forward_ref"),
    gc = Symbol.for("react.suspense"),
    wc = Symbol.for("react.memo"),
    xc = Symbol.for("react.lazy"),
    Ao = Symbol.iterator;

function kc(e) {
    return e === null || typeof e != "object" ? null : (e = Ao && e[Ao] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ju = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    qu = Object.assign,
    bu = {};

function ut(e, n, t) {
    this.props = e, this.context = n, this.refs = bu, this.updater = t || Ju
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function(e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState")
};
ut.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function es() {}
es.prototype = ut.prototype;

function Bi(e, n, t) {
    this.props = e, this.context = n, this.refs = bu, this.updater = t || Ju
}
var Vi = Bi.prototype = new es;
Vi.constructor = Bi;
qu(Vi, ut.prototype);
Vi.isPureReactComponent = !0;
var Wo = Array.isArray,
    ns = Object.prototype.hasOwnProperty,
    Hi = {
        current: null
    },
    ts = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function rs(e, n, t) {
    var r, l = {},
        i = null,
        o = null;
    if (n != null)
        for (r in n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (i = "" + n.key), n) ns.call(n, r) && !ts.hasOwnProperty(r) && (l[r] = n[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = t;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Jt,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Hi.current
    }
}

function Sc(e, n) {
    return {
        $$typeof: Jt,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Qi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Jt
}

function Nc(e) {
    var n = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(t) {
        return n[t]
    })
}
var Bo = /\/+/g;

function Nl(e, n) {
    return typeof e == "object" && e !== null && e.key != null ? Nc("" + e.key) : n.toString(36)
}

function Sr(e, n, t, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Jt:
                case fc:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Nl(o, 0) : r, Wo(l) ? (t = "", e != null && (t = e.replace(Bo, "$&/") + "/"), Sr(l, n, t, "", function(c) {
        return c
    })) : l != null && (Qi(l) && (l = Sc(l, t + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Bo, "$&/") + "/") + e)), n.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Wo(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + Nl(i, u);
            o += Sr(i, n, t, s, l)
        } else if (s = kc(e), typeof s == "function")
            for (e = s.call(e), u = 0; !(i = e.next()).done;) i = i.value, s = r + Nl(i, u++), o += Sr(i, n, t, s, l);
        else if (i === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function lr(e, n, t) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Sr(e, r, "", "", function(i) {
        return n.call(t, i, l++)
    }), r
}

function Ec(e) {
    if (e._status === -1) {
        var n = e._result;
        n = n(), n.then(function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t)
        }, function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t)
        }), e._status === -1 && (e._status = 0, e._result = n)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    Nr = {
        transition: null
    },
    Cc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: Nr,
        ReactCurrentOwner: Hi
    };
O.Children = {
    map: lr,
    forEach: function(e, n, t) {
        lr(e, function() {
            n.apply(this, arguments)
        }, t)
    },
    count: function(e) {
        var n = 0;
        return lr(e, function() {
            n++
        }), n
    },
    toArray: function(e) {
        return lr(e, function(n) {
            return n
        }) || []
    },
    only: function(e) {
        if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
O.Component = ut;
O.Fragment = dc;
O.Profiler = mc;
O.PureComponent = Bi;
O.StrictMode = pc;
O.Suspense = gc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
O.cloneElement = function(e, n, t) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qu({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (n != null) {
        if (n.ref !== void 0 && (i = n.ref, o = Hi.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (s in n) ns.call(n, s) && !ts.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = t;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: Jt,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
O.createContext = function(e) {
    return e = {
        $$typeof: vc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: hc,
        _context: e
    }, e.Consumer = e
};
O.createElement = rs;
O.createFactory = function(e) {
    var n = rs.bind(null, e);
    return n.type = e, n
};
O.createRef = function() {
    return {
        current: null
    }
};
O.forwardRef = function(e) {
    return {
        $$typeof: yc,
        render: e
    }
};
O.isValidElement = Qi;
O.lazy = function(e) {
    return {
        $$typeof: xc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ec
    }
};
O.memo = function(e, n) {
    return {
        $$typeof: wc,
        type: e,
        compare: n === void 0 ? null : n
    }
};
O.startTransition = function(e) {
    var n = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = n
    }
};
O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
O.useCallback = function(e, n) {
    return ae.current.useCallback(e, n)
};
O.useContext = function(e) {
    return ae.current.useContext(e)
};
O.useDebugValue = function() {};
O.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
O.useEffect = function(e, n) {
    return ae.current.useEffect(e, n)
};
O.useId = function() {
    return ae.current.useId()
};
O.useImperativeHandle = function(e, n, t) {
    return ae.current.useImperativeHandle(e, n, t)
};
O.useInsertionEffect = function(e, n) {
    return ae.current.useInsertionEffect(e, n)
};
O.useLayoutEffect = function(e, n) {
    return ae.current.useLayoutEffect(e, n)
};
O.useMemo = function(e, n) {
    return ae.current.useMemo(e, n)
};
O.useReducer = function(e, n, t) {
    return ae.current.useReducer(e, n, t)
};
O.useRef = function(e) {
    return ae.current.useRef(e)
};
O.useState = function(e) {
    return ae.current.useState(e)
};
O.useSyncExternalStore = function(e, n, t) {
    return ae.current.useSyncExternalStore(e, n, t)
};
O.useTransition = function() {
    return ae.current.useTransition()
};
O.version = "18.2.0";
(function(e) {
    e.exports = O
})(Zt);
const _c = cc(Zt.exports);
var Gl = {},
    ls = {
        exports: {}
    },
    xe = {},
    is = {
        exports: {}
    },
    os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function n(E, T) {
        var R = E.length;
        E.push(T);
        e: for (; 0 < R;) {
            var K = R - 1 >>> 1,
                J = E[K];
            if (0 < l(J, T)) E[K] = T, E[R] = J, R = K;
            else break e
        }
    }

    function t(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var T = E[0],
            R = E.pop();
        if (R !== T) {
            E[0] = R;
            e: for (var K = 0, J = E.length, tr = J >>> 1; K < tr;) {
                var wn = 2 * (K + 1) - 1,
                    Sl = E[wn],
                    xn = wn + 1,
                    rr = E[xn];
                if (0 > l(Sl, R)) xn < J && 0 > l(rr, Sl) ? (E[K] = rr, E[xn] = R, K = xn) : (E[K] = Sl, E[wn] = R, K = wn);
                else if (xn < J && 0 > l(rr, R)) E[K] = rr, E[xn] = R, K = xn;
                else break e
            }
        }
        return T
    }

    function l(E, T) {
        var R = E.sortIndex - T.sortIndex;
        return R !== 0 ? R : E.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = [],
        c = [],
        h = 1,
        m = null,
        p = 3,
        w = !1,
        x = !1,
        k = !1,
        U = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function d(E) {
        for (var T = t(c); T !== null;) {
            if (T.callback === null) r(c);
            else if (T.startTime <= E) r(c), T.sortIndex = T.expirationTime, n(s, T);
            else break;
            T = t(c)
        }
    }

    function y(E) {
        if (k = !1, d(E), !x)
            if (t(s) !== null) x = !0, xl(N);
            else {
                var T = t(c);
                T !== null && kl(y, T.startTime - E)
            }
    }

    function N(E, T) {
        x = !1, k && (k = !1, f(P), P = -1), w = !0;
        var R = p;
        try {
            for (d(T), m = t(s); m !== null && (!(m.expirationTime > T) || E && !ze());) {
                var K = m.callback;
                if (typeof K == "function") {
                    m.callback = null, p = m.priorityLevel;
                    var J = K(m.expirationTime <= T);
                    T = e.unstable_now(), typeof J == "function" ? m.callback = J : m === t(s) && r(s), d(T)
                } else r(s);
                m = t(s)
            }
            if (m !== null) var tr = !0;
            else {
                var wn = t(c);
                wn !== null && kl(y, wn.startTime - T), tr = !1
            }
            return tr
        } finally {
            m = null, p = R, w = !1
        }
    }
    var C = !1,
        _ = null,
        P = -1,
        Q = 5,
        M = -1;

    function ze() {
        return !(e.unstable_now() - M < Q)
    }

    function ct() {
        if (_ !== null) {
            var E = e.unstable_now();
            M = E;
            var T = !0;
            try {
                T = _(!0, E)
            } finally {
                T ? ft() : (C = !1, _ = null)
            }
        } else C = !1
    }
    var ft;
    if (typeof a == "function") ft = function() {
        a(ct)
    };
    else if (typeof MessageChannel < "u") {
        var Uo = new MessageChannel,
            ac = Uo.port2;
        Uo.port1.onmessage = ct, ft = function() {
            ac.postMessage(null)
        }
    } else ft = function() {
        U(ct, 0)
    };

    function xl(E) {
        _ = E, C || (C = !0, ft())
    }

    function kl(E, T) {
        P = U(function() {
            E(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        x || w || (x = !0, xl(N))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return t(s)
    }, e.unstable_next = function(E) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = p
        }
        var R = p;
        p = T;
        try {
            return E()
        } finally {
            p = R
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, T) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var R = p;
        p = E;
        try {
            return T()
        } finally {
            p = R
        }
    }, e.unstable_scheduleCallback = function(E, T, R) {
        var K = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? K + R : K) : R = K, E) {
            case 1:
                var J = -1;
                break;
            case 2:
                J = 250;
                break;
            case 5:
                J = 1073741823;
                break;
            case 4:
                J = 1e4;
                break;
            default:
                J = 5e3
        }
        return J = R + J, E = {
            id: h++,
            callback: T,
            priorityLevel: E,
            startTime: R,
            expirationTime: J,
            sortIndex: -1
        }, R > K ? (E.sortIndex = R, n(c, E), t(s) === null && E === t(c) && (k ? (f(P), P = -1) : k = !0, kl(y, R - K))) : (E.sortIndex = J, n(s, E), x || w || (x = !0, xl(N))), E
    }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(E) {
        var T = p;
        return function() {
            var R = p;
            p = T;
            try {
                return E.apply(this, arguments)
            } finally {
                p = R
            }
        }
    }
})(os);
(function(e) {
    e.exports = os
})(is);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us = Zt.exports,
    we = is.exports;

function g(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ss = new Set,
    Mt = {};

function Mn(e, n) {
    et(e, n), et(e + "Capture", n)
}

function et(e, n) {
    for (Mt[e] = n, e = 0; e < n.length; e++) ss.add(n[e])
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Zl = Object.prototype.hasOwnProperty,
    Pc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vo = {},
    Ho = {};

function zc(e) {
    return Zl.call(Ho, e) ? !0 : Zl.call(Vo, e) ? !1 : Pc.test(e) ? Ho[e] = !0 : (Vo[e] = !0, !1)
}

function Tc(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Lc(e, n, t, r) {
    if (n === null || typeof n > "u" || Tc(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
    }
    return !1
}

function ce(e, n, t, r, l, i, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var n = e[0];
    te[n] = new ce(n, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ki = /[\-:]([a-z])/g;

function Yi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(Ki, Yi);
    te[n] = new ce(n, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Ki, Yi);
    te[n] = new ce(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Ki, Yi);
    te[n] = new ce(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Xi(e, n, t, r) {
    var l = te.hasOwnProperty(n) ? te[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Lc(n, t, l, r) && (t = null), r || l === null ? zc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
}
var Je = us.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ir = Symbol.for("react.element"),
    Dn = Symbol.for("react.portal"),
    Fn = Symbol.for("react.fragment"),
    Gi = Symbol.for("react.strict_mode"),
    Jl = Symbol.for("react.profiler"),
    as = Symbol.for("react.provider"),
    cs = Symbol.for("react.context"),
    Zi = Symbol.for("react.forward_ref"),
    ql = Symbol.for("react.suspense"),
    bl = Symbol.for("react.suspense_list"),
    Ji = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    fs = Symbol.for("react.offscreen"),
    Qo = Symbol.iterator;

function dt(e) {
    return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var V = Object.assign,
    El;

function xt(e) {
    if (El === void 0) try {
        throw Error()
    } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        El = n && n[1] || ""
    }
    return `
` + El + e
}
var Cl = !1;

function _l(e, n) {
    if (!e || Cl) return "";
    Cl = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() {
                    throw Error()
                }, Object.defineProperty(n.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], n)
            } else {
                try {
                    n.call()
                } catch (c) {
                    r = c
                }
                e.call(n.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u];) u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--, u--, 0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Cl = !1, Error.prepareStackTrace = t
    }
    return (e = e ? e.displayName || e.name : "") ? xt(e) : ""
}

function Rc(e) {
    switch (e.tag) {
        case 5:
            return xt(e.type);
        case 16:
            return xt("Lazy");
        case 13:
            return xt("Suspense");
        case 19:
            return xt("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = _l(e.type, !1), e;
        case 11:
            return e = _l(e.type.render, !1), e;
        case 1:
            return e = _l(e.type, !0), e;
        default:
            return ""
    }
}

function ei(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fn:
            return "Fragment";
        case Dn:
            return "Portal";
        case Jl:
            return "Profiler";
        case Gi:
            return "StrictMode";
        case ql:
            return "Suspense";
        case bl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case cs:
            return (e.displayName || "Context") + ".Consumer";
        case as:
            return (e._context.displayName || "Context") + ".Provider";
        case Zi:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ji:
            return n = e.displayName || null, n !== null ? n : ei(e.type) || "Memo";
        case be:
            n = e._payload, e = e._init;
            try {
                return ei(e(n))
            } catch {}
    }
    return null
}

function Oc(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ei(n);
        case 8:
            return n === Gi ? "StrictMode" : "Mode";
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
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n
    }
    return null
}

function mn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ds(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}

function Mc(e) {
    var n = ds(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var l = t.get,
            i = t.set;
        return Object.defineProperty(e, n, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, n, {
            enumerable: t.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[n]
            }
        }
    }
}

function or(e) {
    e._valueTracker || (e._valueTracker = Mc(e))
}

function ps(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return e && (r = ds(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1
}

function jr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ni(e, n) {
    var t = n.checked;
    return V({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t != null ? t : e._wrapperState.initialChecked
    })
}

function Ko(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    t = mn(n.value != null ? n.value : t), e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    }
}

function ms(e, n) {
    n = n.checked, n != null && Xi(e, "checked", n, !1)
}

function ti(e, n) {
    ms(e, n);
    var t = mn(n.value),
        r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    n.hasOwnProperty("value") ? ri(e, n.type, t) : n.hasOwnProperty("defaultValue") && ri(e, n.type, mn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}

function Yo(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t)
}

function ri(e, n, t) {
    (n !== "number" || jr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
}
var kt = Array.isArray;

function Xn(e, n, t, r) {
    if (e = e.options, n) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0)
    } else {
        for (t = "" + mn(t), n = null, l = 0; l < e.length; l++) {
            if (e[l].value === t) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            n !== null || e[l].disabled || (n = e[l])
        }
        n !== null && (n.selected = !0)
    }
}

function li(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
    return V({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Xo(e, n) {
    var t = n.value;
    if (t == null) {
        if (t = n.children, n = n.defaultValue, t != null) {
            if (n != null) throw Error(g(92));
            if (kt(t)) {
                if (1 < t.length) throw Error(g(93));
                t = t[0]
            }
            n = t
        }
        n == null && (n = ""), t = n
    }
    e._wrapperState = {
        initialValue: mn(t)
    }
}

function hs(e, n) {
    var t = mn(n.value),
        r = mn(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r)
}

function Go(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}

function vs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ii(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ur, ys = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(n, t, r, l)
        })
    } : e
}(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
        for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ur.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; n.firstChild;) e.appendChild(n.firstChild)
    }
});

function jt(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return
        }
    }
    e.textContent = n
}
var Et = {
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
    },
    jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function(e) {
    jc.forEach(function(n) {
        n = n + e.charAt(0).toUpperCase() + e.substring(1), Et[n] = Et[e]
    })
});

function gs(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + n).trim() : n + "px"
}

function ws(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = gs(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l
        }
}
var Ic = V({
    menuitem: !0
}, {
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
});

function oi(e, n) {
    if (n) {
        if (Ic[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(g(60));
            if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(g(61))
        }
        if (n.style != null && typeof n.style != "object") throw Error(g(62))
    }
}

function ui(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
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
            return !0
    }
}
var si = null;

function qi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ai = null,
    Gn = null,
    Zn = null;

function Zo(e) {
    if (e = er(e)) {
        if (typeof ai != "function") throw Error(g(280));
        var n = e.stateNode;
        n && (n = sl(n), ai(e.stateNode, e.type, n))
    }
}

function xs(e) {
    Gn ? Zn ? Zn.push(e) : Zn = [e] : Gn = e
}

function ks() {
    if (Gn) {
        var e = Gn,
            n = Zn;
        if (Zn = Gn = null, Zo(e), n)
            for (e = 0; e < n.length; e++) Zo(n[e])
    }
}

function Ss(e, n) {
    return e(n)
}

function Ns() {}
var Pl = !1;

function Es(e, n, t) {
    if (Pl) return e(n, t);
    Pl = !0;
    try {
        return Ss(e, n, t)
    } finally {
        Pl = !1, (Gn !== null || Zn !== null) && (Ns(), ks())
    }
}

function It(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = sl(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(g(231, n, typeof t));
    return t
}
var ci = !1;
if (Ye) try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
        get: function() {
            ci = !0
        }
    }), window.addEventListener("test", pt, pt), window.removeEventListener("test", pt, pt)
} catch {
    ci = !1
}

function Dc(e, n, t, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, c)
    } catch (h) {
        this.onError(h)
    }
}
var Ct = !1,
    Ir = null,
    Dr = !1,
    fi = null,
    Fc = {
        onError: function(e) {
            Ct = !0, Ir = e
        }
    };

function $c(e, n, t, r, l, i, o, u, s) {
    Ct = !1, Ir = null, Dc.apply(Fc, arguments)
}

function Uc(e, n, t, r, l, i, o, u, s) {
    if ($c.apply(this, arguments), Ct) {
        if (Ct) {
            var c = Ir;
            Ct = !1, Ir = null
        } else throw Error(g(198));
        Dr || (Dr = !0, fi = c)
    }
}

function jn(e) {
    var n = e,
        t = e;
    if (e.alternate)
        for (; n.return;) n = n.return;
    else {
        e = n;
        do n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return; while (e)
    }
    return n.tag === 3 ? t : null
}

function Cs(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
    }
    return null
}

function Jo(e) {
    if (jn(e) !== e) throw Error(g(188))
}

function Ac(e) {
    var n = e.alternate;
    if (!n) {
        if (n = jn(e), n === null) throw Error(g(188));
        return n !== e ? null : e
    }
    for (var t = e, r = n;;) {
        var l = t.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                t = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === t) return Jo(l), e;
                if (i === r) return Jo(l), n;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (t.return !== r.return) t = l, r = i;
        else {
            for (var o = !1, u = l.child; u;) {
                if (u === t) {
                    o = !0, t = l, r = i;
                    break
                }
                if (u === r) {
                    o = !0, r = l, t = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u;) {
                    if (u === t) {
                        o = !0, t = i, r = l;
                        break
                    }
                    if (u === r) {
                        o = !0, r = i, t = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(g(189))
            }
        }
        if (t.alternate !== r) throw Error(g(190))
    }
    if (t.tag !== 3) throw Error(g(188));
    return t.stateNode.current === t ? e : n
}

function _s(e) {
    return e = Ac(e), e !== null ? Ps(e) : null
}

function Ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var n = Ps(e);
        if (n !== null) return n;
        e = e.sibling
    }
    return null
}
var zs = we.unstable_scheduleCallback,
    qo = we.unstable_cancelCallback,
    Wc = we.unstable_shouldYield,
    Bc = we.unstable_requestPaint,
    Y = we.unstable_now,
    Vc = we.unstable_getCurrentPriorityLevel,
    bi = we.unstable_ImmediatePriority,
    Ts = we.unstable_UserBlockingPriority,
    Fr = we.unstable_NormalPriority,
    Hc = we.unstable_LowPriority,
    Ls = we.unstable_IdlePriority,
    ll = null,
    Ue = null;

function Qc(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
        Ue.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Xc,
    Kc = Math.log,
    Yc = Math.LN2;

function Xc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Kc(e) / Yc | 0) | 0
}
var sr = 64,
    ar = 4194304;

function St(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function $r(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = t & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = St(u) : (i &= o, i !== 0 && (r = St(i)))
    } else o = t & ~l, o !== 0 ? r = St(o) : i !== 0 && (r = St(i));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && (n & l) === 0 && (l = r & -r, i = n & -n, l >= i || l === 16 && (i & 4194240) !== 0)) return n;
    if ((r & 4) !== 0 && (r |= t & 16), n = e.entangledLanes, n !== 0)
        for (e = e.entanglements, n &= r; 0 < n;) t = 31 - Me(n), l = 1 << t, r |= e[t], n &= ~l;
    return r
}

function Gc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
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
            return n + 5e3;
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
            return -1
    }
}

function Zc(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - Me(i),
            u = 1 << o,
            s = l[o];
        s === -1 ? ((u & t) === 0 || (u & r) !== 0) && (l[o] = Gc(u, n)) : s <= n && (e.expiredLanes |= u), i &= ~u
    }
}

function di(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Rs() {
    var e = sr;
    return sr <<= 1, (sr & 4194240) === 0 && (sr = 64), e
}

function zl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n
}

function qt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Me(n), e[n] = t
}

function Jc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t;) {
        var l = 31 - Me(t),
            i = 1 << l;
        n[l] = 0, r[l] = -1, e[l] = -1, t &= ~i
    }
}

function eo(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t;) {
        var r = 31 - Me(t),
            l = 1 << r;
        l & n | e[r] & n && (e[r] |= n), t &= ~l
    }
}
var I = 0;

function Os(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}
var Ms, no, js, Is, Ds, pi = !1,
    cr = [],
    on = null,
    un = null,
    sn = null,
    Dt = new Map,
    Ft = new Map,
    nn = [],
    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function bo(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            on = null;
            break;
        case "dragenter":
        case "dragleave":
            un = null;
            break;
        case "mouseover":
        case "mouseout":
            sn = null;
            break;
        case "pointerover":
        case "pointerout":
            Dt.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ft.delete(n.pointerId)
    }
}

function mt(e, n, t, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, n !== null && (n = er(n), n !== null && no(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e)
}

function bc(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return on = mt(on, e, n, t, r, l), !0;
        case "dragenter":
            return un = mt(un, e, n, t, r, l), !0;
        case "mouseover":
            return sn = mt(sn, e, n, t, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Dt.set(i, mt(Dt.get(i) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Ft.set(i, mt(Ft.get(i) || null, e, n, t, r, l)), !0
    }
    return !1
}

function Fs(e) {
    var n = Nn(e.target);
    if (n !== null) {
        var t = jn(n);
        if (t !== null) {
            if (n = t.tag, n === 13) {
                if (n = Cs(t), n !== null) {
                    e.blockedOn = n, Ds(e.priority, function() {
                        js(t)
                    });
                    return
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Er(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
        var t = mi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            si = r, t.target.dispatchEvent(r), si = null
        } else return n = er(t), n !== null && no(n), e.blockedOn = t, !1;
        n.shift()
    }
    return !0
}

function eu(e, n, t) {
    Er(e) && t.delete(n)
}

function ef() {
    pi = !1, on !== null && Er(on) && (on = null), un !== null && Er(un) && (un = null), sn !== null && Er(sn) && (sn = null), Dt.forEach(eu), Ft.forEach(eu)
}

function ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, pi || (pi = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, ef)))
}

function $t(e) {
    function n(l) {
        return ht(l, e)
    }
    if (0 < cr.length) {
        ht(cr[0], e);
        for (var t = 1; t < cr.length; t++) {
            var r = cr[t];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (on !== null && ht(on, e), un !== null && ht(un, e), sn !== null && ht(sn, e), Dt.forEach(n), Ft.forEach(n), t = 0; t < nn.length; t++) r = nn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nn.length && (t = nn[0], t.blockedOn === null);) Fs(t), t.blockedOn === null && nn.shift()
}
var Jn = Je.ReactCurrentBatchConfig,
    Ur = !0;

function nf(e, n, t, r) {
    var l = I,
        i = Jn.transition;
    Jn.transition = null;
    try {
        I = 1, to(e, n, t, r)
    } finally {
        I = l, Jn.transition = i
    }
}

function tf(e, n, t, r) {
    var l = I,
        i = Jn.transition;
    Jn.transition = null;
    try {
        I = 4, to(e, n, t, r)
    } finally {
        I = l, Jn.transition = i
    }
}

function to(e, n, t, r) {
    if (Ur) {
        var l = mi(e, n, t, r);
        if (l === null) $l(e, n, r, Ar, t), bo(e, r);
        else if (bc(l, e, n, t, r)) r.stopPropagation();
        else if (bo(e, r), n & 4 && -1 < qc.indexOf(e)) {
            for (; l !== null;) {
                var i = er(l);
                if (i !== null && Ms(i), i = mi(e, n, t, r), i === null && $l(e, n, r, Ar, t), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else $l(e, n, r, null, t)
    }
}
var Ar = null;

function mi(e, n, t, r) {
    if (Ar = null, e = qi(r), e = Nn(e), e !== null)
        if (n = jn(e), n === null) e = null;
        else if (t = n.tag, t === 13) {
        if (e = Cs(n), e !== null) return e;
        e = null
    } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null
    } else n !== e && (e = null);
    return Ar = e, null
}

function $s(e) {
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
            switch (Vc()) {
                case bi:
                    return 1;
                case Ts:
                    return 4;
                case Fr:
                case Hc:
                    return 16;
                case Ls:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var rn = null,
    ro = null,
    Cr = null;

function Us() {
    if (Cr) return Cr;
    var e, n = ro,
        t = n.length,
        r, l = "value" in rn ? rn.value : rn.textContent,
        i = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
    return Cr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function _r(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function fr() {
    return !0
}

function nu() {
    return !1
}

function ke(e) {
    function n(t, r, l, i, o) {
        this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fr : nu, this.isPropagationStopped = nu, this
    }
    return V(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = fr)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = fr)
        },
        persist: function() {},
        isPersistent: fr
    }), n
}
var st = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    lo = ke(st),
    bt = V({}, st, {
        view: 0,
        detail: 0
    }),
    rf = ke(bt),
    Tl, Ll, vt, il = V({}, bt, {
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
        getModifierState: io,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== vt && (vt && e.type === "mousemove" ? (Tl = e.screenX - vt.screenX, Ll = e.screenY - vt.screenY) : Ll = Tl = 0, vt = e), Tl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ll
        }
    }),
    tu = ke(il),
    lf = V({}, il, {
        dataTransfer: 0
    }),
    of = ke(lf),
    uf = V({}, bt, {
        relatedTarget: 0
    }),
    Rl = ke(uf),
    sf = V({}, st, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    af = ke(sf),
    cf = V({}, st, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ff = ke(cf),
    df = V({}, st, {
        data: 0
    }),
    ru = ke(df),
    pf = {
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
    },
    mf = {
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
    },
    hf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function vf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = hf[e]) ? !!n[e] : !1
}

function io() {
    return vf
}
var yf = V({}, bt, {
        key: function(e) {
            if (e.key) {
                var n = pf[e.key] || e.key;
                if (n !== "Unidentified") return n
            }
            return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mf[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: io,
        charCode: function(e) {
            return e.type === "keypress" ? _r(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    gf = ke(yf),
    wf = V({}, il, {
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
    }),
    lu = ke(wf),
    xf = V({}, bt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: io
    }),
    kf = ke(xf),
    Sf = V({}, st, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Nf = ke(Sf),
    Ef = V({}, il, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Cf = ke(Ef),
    _f = [9, 13, 27, 32],
    oo = Ye && "CompositionEvent" in window,
    _t = null;
Ye && "documentMode" in document && (_t = document.documentMode);
var Pf = Ye && "TextEvent" in window && !_t,
    As = Ye && (!oo || _t && 8 < _t && 11 >= _t),
    iu = String.fromCharCode(32),
    ou = !1;

function Ws(e, n) {
    switch (e) {
        case "keyup":
            return _f.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Bs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var $n = !1;

function zf(e, n) {
    switch (e) {
        case "compositionend":
            return Bs(n);
        case "keypress":
            return n.which !== 32 ? null : (ou = !0, iu);
        case "textInput":
            return e = n.data, e === iu && ou ? null : e;
        default:
            return null
    }
}

function Tf(e, n) {
    if ($n) return e === "compositionend" || !oo && Ws(e, n) ? (e = Us(), Cr = ro = rn = null, $n = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return As && n.locale !== "ko" ? null : n.data;
        default:
            return null
    }
}
var Lf = {
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

function uu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Lf[e.type] : n === "textarea"
}

function Vs(e, n, t, r) {
    xs(r), n = Wr(n, "onChange"), 0 < n.length && (t = new lo("onChange", "change", null, t, r), e.push({
        event: t,
        listeners: n
    }))
}
var Pt = null,
    Ut = null;

function Rf(e) {
    ea(e, 0)
}

function ol(e) {
    var n = Wn(e);
    if (ps(n)) return e
}

function Of(e, n) {
    if (e === "change") return n
}
var Hs = !1;
if (Ye) {
    var Ol;
    if (Ye) {
        var Ml = "oninput" in document;
        if (!Ml) {
            var su = document.createElement("div");
            su.setAttribute("oninput", "return;"), Ml = typeof su.oninput == "function"
        }
        Ol = Ml
    } else Ol = !1;
    Hs = Ol && (!document.documentMode || 9 < document.documentMode)
}

function au() {
    Pt && (Pt.detachEvent("onpropertychange", Qs), Ut = Pt = null)
}

function Qs(e) {
    if (e.propertyName === "value" && ol(Ut)) {
        var n = [];
        Vs(n, Ut, e, qi(e)), Es(Rf, n)
    }
}

function Mf(e, n, t) {
    e === "focusin" ? (au(), Pt = n, Ut = t, Pt.attachEvent("onpropertychange", Qs)) : e === "focusout" && au()
}

function jf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol(Ut)
}

function If(e, n) {
    if (e === "click") return ol(n)
}

function Df(e, n) {
    if (e === "input" || e === "change") return ol(n)
}

function Ff(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}
var Ie = typeof Object.is == "function" ? Object.is : Ff;

function At(e, n) {
    if (Ie(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!Zl.call(n, l) || !Ie(e[l], n[l])) return !1
    }
    return !0
}

function cu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function fu(e, n) {
    var t = cu(e);
    e = 0;
    for (var r; t;) {
        if (t.nodeType === 3) {
            if (r = e + t.textContent.length, e <= n && r >= n) return {
                node: t,
                offset: n - e
            };
            e = r
        }
        e: {
            for (; t;) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = cu(t)
    }
}

function Ks(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ks(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
}

function Ys() {
    for (var e = window, n = jr(); n instanceof e.HTMLIFrameElement;) {
        try {
            var t = typeof n.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (t) e = n.contentWindow;
        else break;
        n = jr(e.document)
    }
    return n
}

function uo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}

function $f(e) {
    var n = Ys(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ks(t.ownerDocument.documentElement, t)) {
        if (r !== null && uo(t)) {
            if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = t.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = fu(t, i);
                var o = fu(t, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)))
            }
        }
        for (n = [], e = t; e = e.parentNode;) e.nodeType === 1 && n.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Uf = Ye && "documentMode" in document && 11 >= document.documentMode,
    Un = null,
    hi = null,
    zt = null,
    vi = !1;

function du(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    vi || Un == null || Un !== jr(r) || (r = Un, "selectionStart" in r && uo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), zt && At(zt, r) || (zt = r, r = Wr(hi, "onSelect"), 0 < r.length && (n = new lo("onSelect", "select", null, n, t), e.push({
        event: n,
        listeners: r
    }), n.target = Un)))
}

function dr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t
}
var An = {
        animationend: dr("Animation", "AnimationEnd"),
        animationiteration: dr("Animation", "AnimationIteration"),
        animationstart: dr("Animation", "AnimationStart"),
        transitionend: dr("Transition", "TransitionEnd")
    },
    jl = {},
    Xs = {};
Ye && (Xs = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);

function ul(e) {
    if (jl[e]) return jl[e];
    if (!An[e]) return e;
    var n = An[e],
        t;
    for (t in n)
        if (n.hasOwnProperty(t) && t in Xs) return jl[e] = n[t];
    return e
}
var Gs = ul("animationend"),
    Zs = ul("animationiteration"),
    Js = ul("animationstart"),
    qs = ul("transitionend"),
    bs = new Map,
    pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vn(e, n) {
    bs.set(e, n), Mn(n, [e])
}
for (var Il = 0; Il < pu.length; Il++) {
    var Dl = pu[Il],
        Af = Dl.toLowerCase(),
        Wf = Dl[0].toUpperCase() + Dl.slice(1);
    vn(Af, "on" + Wf)
}
vn(Gs, "onAnimationEnd");
vn(Zs, "onAnimationIteration");
vn(Js, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(qs, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));

function mu(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Uc(r, n, void 0, e), e.currentTarget = null
}

function ea(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        c = u.currentTarget;
                    if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
                    mu(l, u, c), i = s
                } else
                    for (o = 0; o < r.length; o++) {
                        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
                        mu(l, u, c), i = s
                    }
        }
    }
    if (Dr) throw e = fi, Dr = !1, fi = null, e
}

function F(e, n) {
    var t = n[ki];
    t === void 0 && (t = n[ki] = new Set);
    var r = e + "__bubble";
    t.has(r) || (na(n, e, 2, !1), t.add(r))
}

function Fl(e, n, t) {
    var r = 0;
    n && (r |= 4), na(t, e, r, n)
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);

function Wt(e) {
    if (!e[pr]) {
        e[pr] = !0, ss.forEach(function(t) {
            t !== "selectionchange" && (Bf.has(t) || Fl(t, !1, e), Fl(t, !0, e))
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[pr] || (n[pr] = !0, Fl("selectionchange", !1, n))
    }
}

function na(e, n, t, r) {
    switch ($s(n)) {
        case 1:
            var l = nf;
            break;
        case 4:
            l = tf;
            break;
        default:
            l = to
    }
    t = l.bind(null, n, t, e), l = void 0, !ci || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, {
        capture: !0,
        passive: l
    }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, {
        passive: l
    }) : e.addEventListener(n, t, !1)
}

function $l(e, n, t, r, l) {
    var i = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    o = o.return
                }
            for (; u !== null;) {
                if (o = Nn(u), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                    r = i = o;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Es(function() {
        var c = i,
            h = qi(t),
            m = [];
        e: {
            var p = bs.get(e);
            if (p !== void 0) {
                var w = lo,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (_r(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = gf;
                        break;
                    case "focusin":
                        x = "focus", w = Rl;
                        break;
                    case "focusout":
                        x = "blur", w = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Rl;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = tu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = of ;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = kf;
                        break;
                    case Gs:
                    case Zs:
                    case Js:
                        w = af;
                        break;
                    case qs:
                        w = Nf;
                        break;
                    case "scroll":
                        w = rf;
                        break;
                    case "wheel":
                        w = Cf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = ff;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = lu
                }
                var k = (n & 4) !== 0,
                    U = !k && e === "scroll",
                    f = k ? p !== null ? p + "Capture" : null : p;
                k = [];
                for (var a = c, d; a !== null;) {
                    d = a;
                    var y = d.stateNode;
                    if (d.tag === 5 && y !== null && (d = y, f !== null && (y = It(a, f), y != null && k.push(Bt(a, y, d)))), U) break;
                    a = a.return
                }
                0 < k.length && (p = new w(p, x, null, t, h), m.push({
                    event: p,
                    listeners: k
                }))
            }
        }
        if ((n & 7) === 0) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && t !== si && (x = t.relatedTarget || t.fromElement) && (Nn(x) || x[Xe])) break e;
                if ((w || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (x = t.relatedTarget || t.toElement, w = c, x = x ? Nn(x) : null, x !== null && (U = jn(x), x !== U || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = c), w !== x)) {
                    if (k = tu, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = lu, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), U = w == null ? p : Wn(w), d = x == null ? p : Wn(x), p = new k(y, a + "leave", w, t, h), p.target = U, p.relatedTarget = d, y = null, Nn(h) === c && (k = new k(f, a + "enter", x, t, h), k.target = d, k.relatedTarget = U, y = k), U = y, w && x) n: {
                        for (k = w, f = x, a = 0, d = k; d; d = In(d)) a++;
                        for (d = 0, y = f; y; y = In(y)) d++;
                        for (; 0 < a - d;) k = In(k),
                        a--;
                        for (; 0 < d - a;) f = In(f),
                        d--;
                        for (; a--;) {
                            if (k === f || f !== null && k === f.alternate) break n;
                            k = In(k), f = In(f)
                        }
                        k = null
                    }
                    else k = null;
                    w !== null && hu(m, p, w, k, !1), x !== null && U !== null && hu(m, U, x, k, !0)
                }
            }
            e: {
                if (p = c ? Wn(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var N = Of;
                else if (uu(p))
                    if (Hs) N = Df;
                    else {
                        N = jf;
                        var C = Mf
                    }
                else(w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (N = If);
                if (N && (N = N(e, c))) {
                    Vs(m, N, t, h);
                    break e
                }
                C && C(e, p, c),
                e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ri(p, "number", p.value)
            }
            switch (C = c ? Wn(c) : window, e) {
                case "focusin":
                    (uu(C) || C.contentEditable === "true") && (Un = C, hi = c, zt = null);
                    break;
                case "focusout":
                    zt = hi = Un = null;
                    break;
                case "mousedown":
                    vi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    vi = !1, du(m, t, h);
                    break;
                case "selectionchange":
                    if (Uf) break;
                case "keydown":
                case "keyup":
                    du(m, t, h)
            }
            var _;
            if (oo) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else $n ? Ws(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");P && (As && t.locale !== "ko" && ($n || P !== "onCompositionStart" ? P === "onCompositionEnd" && $n && (_ = Us()) : (rn = h, ro = "value" in rn ? rn.value : rn.textContent, $n = !0)), C = Wr(c, P), 0 < C.length && (P = new ru(P, e, null, t, h), m.push({
                event: P,
                listeners: C
            }), _ ? P.data = _ : (_ = Bs(t), _ !== null && (P.data = _)))),
            (_ = Pf ? zf(e, t) : Tf(e, t)) && (c = Wr(c, "onBeforeInput"), 0 < c.length && (h = new ru("onBeforeInput", "beforeinput", null, t, h), m.push({
                event: h,
                listeners: c
            }), h.data = _))
        }
        ea(m, n)
    })
}

function Bt(e, n, t) {
    return {
        instance: e,
        listener: n,
        currentTarget: t
    }
}

function Wr(e, n) {
    for (var t = n + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = It(e, t), i != null && r.unshift(Bt(e, i, l)), i = It(e, n), i != null && r.push(Bt(e, i, l))), e = e.return
    }
    return r
}

function In(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function hu(e, n, t, r, l) {
    for (var i = n._reactName, o = []; t !== null && t !== r;) {
        var u = t,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && c !== null && (u = c, l ? (s = It(t, i), s != null && o.unshift(Bt(t, s, u))) : l || (s = It(t, i), s != null && o.push(Bt(t, s, u)))), t = t.return
    }
    o.length !== 0 && e.push({
        event: n,
        listeners: o
    })
}
var Vf = /\r\n?/g,
    Hf = /\u0000|\uFFFD/g;

function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vf, `
`).replace(Hf, "")
}

function mr(e, n, t) {
    if (n = vu(n), vu(e) !== n && t) throw Error(g(425))
}

function Br() {}
var yi = null,
    gi = null;

function wi(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}
var xi = typeof setTimeout == "function" ? setTimeout : void 0,
    Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yu = typeof Promise == "function" ? Promise : void 0,
    Kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
        return yu.resolve(null).then(e).catch(Yf)
    } : xi;

function Yf(e) {
    setTimeout(function() {
        throw e
    })
}

function Ul(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if (e.removeChild(t), l && l.nodeType === 8)
            if (t = l.data, t === "/$") {
                if (r === 0) {
                    e.removeChild(l), $t(n);
                    return
                }
                r--
            } else t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = l
    } while (t);
    $t(n)
}

function an(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
            if (n === "/$") return null
        }
    }
    return e
}

function gu(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--
            } else t === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}
var at = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + at,
    Vt = "__reactProps$" + at,
    Xe = "__reactContainer$" + at,
    ki = "__reactEvents$" + at,
    Xf = "__reactListeners$" + at,
    Gf = "__reactHandles$" + at;

function Nn(e) {
    var n = e[$e];
    if (n) return n;
    for (var t = e.parentNode; t;) {
        if (n = t[Xe] || t[$e]) {
            if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
                for (e = gu(e); e !== null;) {
                    if (t = e[$e]) return t;
                    e = gu(e)
                }
            return n
        }
        e = t, t = e.parentNode
    }
    return null
}

function er(e) {
    return e = e[$e] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(g(33))
}

function sl(e) {
    return e[Vt] || null
}
var Si = [],
    Bn = -1;

function yn(e) {
    return {
        current: e
    }
}

function $(e) {
    0 > Bn || (e.current = Si[Bn], Si[Bn] = null, Bn--)
}

function D(e, n) {
    Bn++, Si[Bn] = e.current, e.current = n
}
var hn = {},
    oe = yn(hn),
    pe = yn(!1),
    zn = hn;

function nt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in t) l[i] = n[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Vr() {
    $(pe), $(oe)
}

function wu(e, n, t) {
    if (oe.current !== hn) throw Error(g(168));
    D(oe, n), D(pe, t)
}

function ta(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in n)) throw Error(g(108, Oc(e) || "Unknown", l));
    return V({}, t, r)
}

function Hr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, zn = oe.current, D(oe, e), D(pe, pe.current), !0
}

function xu(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(g(169));
    t ? (e = ta(e, n, zn), r.__reactInternalMemoizedMergedChildContext = e, $(pe), $(oe), D(oe, e)) : $(pe), D(pe, t)
}
var Be = null,
    al = !1,
    Al = !1;

function ra(e) {
    Be === null ? Be = [e] : Be.push(e)
}

function Zf(e) {
    al = !0, ra(e)
}

function gn() {
    if (!Al && Be !== null) {
        Al = !0;
        var e = 0,
            n = I;
        try {
            var t = Be;
            for (I = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0); while (r !== null)
            }
            Be = null, al = !1
        } catch (l) {
            throw Be !== null && (Be = Be.slice(e + 1)), zs(bi, gn), l
        } finally {
            I = n, Al = !1
        }
    }
    return null
}
var Vn = [],
    Hn = 0,
    Qr = null,
    Kr = 0,
    Se = [],
    Ne = 0,
    Tn = null,
    Ve = 1,
    He = "";

function kn(e, n) {
    Vn[Hn++] = Kr, Vn[Hn++] = Qr, Qr = e, Kr = n
}

function la(e, n, t) {
    Se[Ne++] = Ve, Se[Ne++] = He, Se[Ne++] = Tn, Tn = e;
    var r = Ve;
    e = He;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l), t += 1;
    var i = 32 - Me(n) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ve = 1 << 32 - Me(n) + l | t << l | r, He = i + e
    } else Ve = 1 << i | t << l | r, He = e
}

function so(e) {
    e.return !== null && (kn(e, 1), la(e, 1, 0))
}

function ao(e) {
    for (; e === Qr;) Qr = Vn[--Hn], Vn[Hn] = null, Kr = Vn[--Hn], Vn[Hn] = null;
    for (; e === Tn;) Tn = Se[--Ne], Se[Ne] = null, He = Se[--Ne], Se[Ne] = null, Ve = Se[--Ne], Se[Ne] = null
}
var ge = null,
    ye = null,
    A = !1,
    Oe = null;

function ia(e, n) {
    var t = Ee(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)
}

function ku(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ge = e, ye = an(n.firstChild), !0) : !1;
        case 6:
            return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ge = e, ye = null, !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Tn !== null ? {
                id: Ve,
                overflow: He
            } : null, e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824
            }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ge = e, ye = null, !0) : !1;
        default:
            return !1
    }
}

function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ei(e) {
    if (A) {
        var n = ye;
        if (n) {
            var t = n;
            if (!ku(e, n)) {
                if (Ni(e)) throw Error(g(418));
                n = an(t.nextSibling);
                var r = ge;
                n && ku(e, n) ? ia(r, t) : (e.flags = e.flags & -4097 | 2, A = !1, ge = e)
            }
        } else {
            if (Ni(e)) throw Error(g(418));
            e.flags = e.flags & -4097 | 2, A = !1, ge = e
        }
    }
}

function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ge = e
}

function hr(e) {
    if (e !== ge) return !1;
    if (!A) return Su(e), A = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !wi(e.type, e.memoizedProps)), n && (n = ye)) {
        if (Ni(e)) throw oa(), Error(g(418));
        for (; n;) ia(e, n), n = an(n.nextSibling)
    }
    if (Su(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
        e: {
            for (e = e.nextSibling, n = 0; e;) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            ye = an(e.nextSibling);
                            break e
                        }
                        n--
                    } else t !== "$" && t !== "$!" && t !== "$?" || n++
                }
                e = e.nextSibling
            }
            ye = null
        }
    } else ye = ge ? an(e.stateNode.nextSibling) : null;
    return !0
}

function oa() {
    for (var e = ye; e;) e = an(e.nextSibling)
}

function tt() {
    ye = ge = null, A = !1
}

function co(e) {
    Oe === null ? Oe = [e] : Oe.push(e)
}
var Jf = Je.ReactCurrentBatchConfig;

function Le(e, n) {
    if (e && e.defaultProps) {
        n = V({}, n), e = e.defaultProps;
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n
    }
    return n
}
var Yr = yn(null),
    Xr = null,
    Qn = null,
    fo = null;

function po() {
    fo = Qn = Xr = null
}

function mo(e) {
    var n = Yr.current;
    $(Yr), e._currentValue = n
}

function Ci(e, n, t) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
        e = e.return
    }
}

function qn(e, n) {
    Xr = e, fo = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (de = !0), e.firstContext = null)
}

function _e(e) {
    var n = e._currentValue;
    if (fo !== e)
        if (e = {
                context: e,
                memoizedValue: n,
                next: null
            }, Qn === null) {
            if (Xr === null) throw Error(g(308));
            Qn = e, Xr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Qn = Qn.next = e;
    return n
}
var En = null;

function ho(e) {
    En === null ? En = [e] : En.push(e)
}

function ua(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, ho(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ge(e, r)
}

function Ge(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null
}
var en = !1;

function vo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function sa(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function cn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (j & 2) !== 0) {
        var l = r.pending;
        return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ge(e, t)
    }
    return l = r.interleaved, l === null ? (n.next = n, ho(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ge(e, t)
}

function Pr(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, eo(e, t)
    }
}

function Nu(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
        var l = null,
            i = null;
        if (t = t.firstBaseUpdate, t !== null) {
            do {
                var o = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, t = t.next
            } while (t !== null);
            i === null ? l = i = n : i = i.next = n
        } else l = i = n;
        t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = t;
        return
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n
}

function Gr(e, n, t, r) {
    var l = e.updateQueue;
    en = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            c = s.next;
        s.next = null, o === null ? i = c : o.next = c, o = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s))
    }
    if (i !== null) {
        var m = l.baseState;
        o = 0, h = c = s = null, u = i;
        do {
            var p = u.lane,
                w = u.eventTime;
            if ((r & p) === p) {
                h !== null && (h = h.next = {
                    eventTime: w,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var x = e,
                        k = u;
                    switch (p = n, w = t, k.tag) {
                        case 1:
                            if (x = k.payload, typeof x == "function") {
                                m = x.call(w, m, p);
                                break e
                            }
                            m = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = k.payload, p = typeof x == "function" ? x.call(w, m, p) : x, p == null) break e;
                            m = V({}, m, p);
                            break e;
                        case 2:
                            en = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u))
            } else w = {
                eventTime: w,
                lane: p,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, h === null ? (c = h = w, s = m) : h = h.next = w, o |= p;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (1);
        if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
            l = n;
            do o |= l.lane, l = l.next; while (l !== n)
        } else i === null && (l.shared.lanes = 0);
        Rn |= o, e.lanes = o, e.memoizedState = m
    }
}

function Eu(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = t, typeof l != "function") throw Error(g(191, l));
                l.call(r)
            }
        }
}
var aa = new us.Component().refs;

function _i(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : V({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? jn(e) === e : !1
    },
    enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var r = se(),
            l = dn(e),
            i = Qe(r, l);
        i.payload = n, t != null && (i.callback = t), n = cn(e, i, l), n !== null && (je(n, e, l, r), Pr(n, e, l))
    },
    enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var r = se(),
            l = dn(e),
            i = Qe(r, l);
        i.tag = 1, i.payload = n, t != null && (i.callback = t), n = cn(e, i, l), n !== null && (je(n, e, l, r), Pr(n, e, l))
    },
    enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = se(),
            r = dn(e),
            l = Qe(t, r);
        l.tag = 2, n != null && (l.callback = n), n = cn(e, l, r), n !== null && (je(n, e, r, t), Pr(n, e, r))
    }
};

function Cu(e, n, t, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !At(t, r) || !At(l, i) : !0
}

function ca(e, n, t) {
    var r = !1,
        l = hn,
        i = n.contextType;
    return typeof i == "object" && i !== null ? i = _e(i) : (l = me(n) ? zn : oe.current, r = n.contextTypes, i = (r = r != null) ? nt(e, l) : hn), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n
}

function _u(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && cl.enqueueReplaceState(n, n.state, null)
}

function Pi(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = aa, vo(e);
    var i = n.contextType;
    typeof i == "object" && i !== null ? l.context = _e(i) : (i = me(n) ? zn : oe.current, l.context = nt(e, i)), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (_i(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && cl.enqueueReplaceState(l, l.state, null), Gr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function yt(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (t._owner) {
            if (t = t._owner, t) {
                if (t.tag !== 1) throw Error(g(309));
                var r = t.stateNode
            }
            if (!r) throw Error(g(147, e));
            var l = r,
                i = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i ? n.ref : (n = function(o) {
                var u = l.refs;
                u === aa && (u = l.refs = {}), o === null ? delete u[i] : u[i] = o
            }, n._stringRef = i, n)
        }
        if (typeof e != "string") throw Error(g(284));
        if (!t._owner) throw Error(g(290, e))
    }
    return e
}

function vr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}

function Pu(e) {
    var n = e._init;
    return n(e._payload)
}

function fa(e) {
    function n(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a)
        }
    }

    function t(f, a) {
        if (!e) return null;
        for (; a !== null;) n(f, a), a = a.sibling;
        return null
    }

    function r(f, a) {
        for (f = new Map; a !== null;) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
        return f
    }

    function l(f, a) {
        return f = pn(f, a), f.index = 0, f.sibling = null, f
    }

    function i(f, a, d) {
        return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function u(f, a, d, y) {
        return a === null || a.tag !== 6 ? (a = Yl(d, f.mode, y), a.return = f, a) : (a = l(a, d), a.return = f, a)
    }

    function s(f, a, d, y) {
        var N = d.type;
        return N === Fn ? h(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === be && Pu(N) === a.type) ? (y = l(a, d.props), y.ref = yt(f, a, d), y.return = f, y) : (y = Mr(d.type, d.key, d.props, null, f.mode, y), y.ref = yt(f, a, d), y.return = f, y)
    }

    function c(f, a, d, y) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Xl(d, f.mode, y), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a)
    }

    function h(f, a, d, y, N) {
        return a === null || a.tag !== 7 ? (a = Pn(d, f.mode, y, N), a.return = f, a) : (a = l(a, d), a.return = f, a)
    }

    function m(f, a, d) {
        if (typeof a == "string" && a !== "" || typeof a == "number") return a = Yl("" + a, f.mode, d), a.return = f, a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case ir:
                    return d = Mr(a.type, a.key, a.props, null, f.mode, d), d.ref = yt(f, null, a), d.return = f, d;
                case Dn:
                    return a = Xl(a, f.mode, d), a.return = f, a;
                case be:
                    var y = a._init;
                    return m(f, y(a._payload), d)
            }
            if (kt(a) || dt(a)) return a = Pn(a, f.mode, d, null), a.return = f, a;
            vr(f, a)
        }
        return null
    }

    function p(f, a, d, y) {
        var N = a !== null ? a.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : u(f, a, "" + d, y);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case ir:
                    return d.key === N ? s(f, a, d, y) : null;
                case Dn:
                    return d.key === N ? c(f, a, d, y) : null;
                case be:
                    return N = d._init, p(f, a, N(d._payload), y)
            }
            if (kt(d) || dt(d)) return N !== null ? null : h(f, a, d, y, null);
            vr(f, d)
        }
        return null
    }

    function w(f, a, d, y, N) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(d) || null, u(a, f, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ir:
                    return f = f.get(y.key === null ? d : y.key) || null, s(a, f, y, N);
                case Dn:
                    return f = f.get(y.key === null ? d : y.key) || null, c(a, f, y, N);
                case be:
                    var C = y._init;
                    return w(f, a, d, C(y._payload), N)
            }
            if (kt(y) || dt(y)) return f = f.get(d) || null, h(a, f, y, N, null);
            vr(a, y)
        }
        return null
    }

    function x(f, a, d, y) {
        for (var N = null, C = null, _ = a, P = a = 0, Q = null; _ !== null && P < d.length; P++) {
            _.index > P ? (Q = _, _ = null) : Q = _.sibling;
            var M = p(f, _, d[P], y);
            if (M === null) {
                _ === null && (_ = Q);
                break
            }
            e && _ && M.alternate === null && n(f, _), a = i(M, a, P), C === null ? N = M : C.sibling = M, C = M, _ = Q
        }
        if (P === d.length) return t(f, _), A && kn(f, P), N;
        if (_ === null) {
            for (; P < d.length; P++) _ = m(f, d[P], y), _ !== null && (a = i(_, a, P), C === null ? N = _ : C.sibling = _, C = _);
            return A && kn(f, P), N
        }
        for (_ = r(f, _); P < d.length; P++) Q = w(_, f, P, d[P], y), Q !== null && (e && Q.alternate !== null && _.delete(Q.key === null ? P : Q.key), a = i(Q, a, P), C === null ? N = Q : C.sibling = Q, C = Q);
        return e && _.forEach(function(ze) {
            return n(f, ze)
        }), A && kn(f, P), N
    }

    function k(f, a, d, y) {
        var N = dt(d);
        if (typeof N != "function") throw Error(g(150));
        if (d = N.call(d), d == null) throw Error(g(151));
        for (var C = N = null, _ = a, P = a = 0, Q = null, M = d.next(); _ !== null && !M.done; P++, M = d.next()) {
            _.index > P ? (Q = _, _ = null) : Q = _.sibling;
            var ze = p(f, _, M.value, y);
            if (ze === null) {
                _ === null && (_ = Q);
                break
            }
            e && _ && ze.alternate === null && n(f, _), a = i(ze, a, P), C === null ? N = ze : C.sibling = ze, C = ze, _ = Q
        }
        if (M.done) return t(f, _), A && kn(f, P), N;
        if (_ === null) {
            for (; !M.done; P++, M = d.next()) M = m(f, M.value, y), M !== null && (a = i(M, a, P), C === null ? N = M : C.sibling = M, C = M);
            return A && kn(f, P), N
        }
        for (_ = r(f, _); !M.done; P++, M = d.next()) M = w(_, f, P, M.value, y), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? P : M.key), a = i(M, a, P), C === null ? N = M : C.sibling = M, C = M);
        return e && _.forEach(function(ct) {
            return n(f, ct)
        }), A && kn(f, P), N
    }

    function U(f, a, d, y) {
        if (typeof d == "object" && d !== null && d.type === Fn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case ir:
                    e: {
                        for (var N = d.key, C = a; C !== null;) {
                            if (C.key === N) {
                                if (N = d.type, N === Fn) {
                                    if (C.tag === 7) {
                                        t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                                        break e
                                    }
                                } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === be && Pu(N) === C.type) {
                                    t(f, C.sibling), a = l(C, d.props), a.ref = yt(f, C, d), a.return = f, f = a;
                                    break e
                                }
                                t(f, C);
                                break
                            } else n(f, C);
                            C = C.sibling
                        }
                        d.type === Fn ? (a = Pn(d.props.children, f.mode, y, d.key), a.return = f, f = a) : (y = Mr(d.type, d.key, d.props, null, f.mode, y), y.ref = yt(f, a, d), y.return = f, f = y)
                    }
                    return o(f);
                case Dn:
                    e: {
                        for (C = d.key; a !== null;) {
                            if (a.key === C)
                                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                    t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                                    break e
                                } else {
                                    t(f, a);
                                    break
                                }
                            else n(f, a);
                            a = a.sibling
                        }
                        a = Xl(d, f.mode, y),
                        a.return = f,
                        f = a
                    }
                    return o(f);
                case be:
                    return C = d._init, U(f, a, C(d._payload), y)
            }
            if (kt(d)) return x(f, a, d, y);
            if (dt(d)) return k(f, a, d, y);
            vr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Yl(d, f.mode, y), a.return = f, f = a), o(f)) : t(f, a)
    }
    return U
}
var rt = fa(!0),
    da = fa(!1),
    nr = {},
    Ae = yn(nr),
    Ht = yn(nr),
    Qt = yn(nr);

function Cn(e) {
    if (e === nr) throw Error(g(174));
    return e
}

function yo(e, n) {
    switch (D(Qt, n), D(Ht, e), D(Ae, nr), e = n.nodeType, e) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : ii(null, "");
            break;
        default:
            e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ii(n, e)
    }
    $(Ae), D(Ae, n)
}

function lt() {
    $(Ae), $(Ht), $(Qt)
}

function pa(e) {
    Cn(Qt.current);
    var n = Cn(Ae.current),
        t = ii(n, e.type);
    n !== t && (D(Ht, e), D(Ae, t))
}

function go(e) {
    Ht.current === e && ($(Ae), $(Ht))
}
var W = yn(0);

function Zr(e) {
    for (var n = e; n !== null;) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n
        } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
    return null
}
var Wl = [];

function wo() {
    for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var zr = Je.ReactCurrentDispatcher,
    Bl = Je.ReactCurrentBatchConfig,
    Ln = 0,
    B = null,
    G = null,
    q = null,
    Jr = !1,
    Tt = !1,
    Kt = 0,
    qf = 0;

function re() {
    throw Error(g(321))
}

function xo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!Ie(e[t], n[t])) return !1;
    return !0
}

function ko(e, n, t, r, l, i) {
    if (Ln = i, B = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, zr.current = e === null || e.memoizedState === null ? td : rd, e = t(r, l), Tt) {
        i = 0;
        do {
            if (Tt = !1, Kt = 0, 25 <= i) throw Error(g(301));
            i += 1, q = G = null, n.updateQueue = null, zr.current = ld, e = t(r, l)
        } while (Tt)
    }
    if (zr.current = qr, n = G !== null && G.next !== null, Ln = 0, q = G = B = null, Jr = !1, n) throw Error(g(300));
    return e
}

function So() {
    var e = Kt !== 0;
    return Kt = 0, e
}

function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? B.memoizedState = q = e : q = q.next = e, q
}

function Pe() {
    if (G === null) {
        var e = B.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = G.next;
    var n = q === null ? B.memoizedState : q.next;
    if (n !== null) q = n, G = e;
    else {
        if (e === null) throw Error(g(310));
        G = e, e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        }, q === null ? B.memoizedState = q = e : q = q.next = e
    }
    return q
}

function Yt(e, n) {
    return typeof n == "function" ? n(e) : n
}

function Vl(e) {
    var n = Pe(),
        t = n.queue;
    if (t === null) throw Error(g(311));
    t.lastRenderedReducer = e;
    var r = G,
        l = r.baseQueue,
        i = t.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, t.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var u = o = null,
            s = null,
            c = i;
        do {
            var h = c.lane;
            if ((Ln & h) === h) s !== null && (s = s.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var m = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = m, o = r) : s = s.next = m, B.lanes |= h, Rn |= h
            }
            c = c.next
        } while (c !== null && c !== i);
        s === null ? o = r : s.next = u, Ie(r, n.memoizedState) || (de = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r
    }
    if (e = t.interleaved, e !== null) {
        l = e;
        do i = l.lane, B.lanes |= i, Rn |= i, l = l.next; while (l !== e)
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch]
}

function Hl(e) {
    var n = Pe(),
        t = n.queue;
    if (t === null) throw Error(g(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        l = t.pending,
        i = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        Ie(i, n.memoizedState) || (de = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i
    }
    return [i, r]
}

function ma() {}

function ha(e, n) {
    var t = B,
        r = Pe(),
        l = n(),
        i = !Ie(r.memoizedState, l);
    if (i && (r.memoizedState = l, de = !0), r = r.queue, No(ga.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || q !== null && q.memoizedState.tag & 1) {
        if (t.flags |= 2048, Xt(9, ya.bind(null, t, r, l, n), void 0, null), b === null) throw Error(g(349));
        (Ln & 30) !== 0 || va(t, n, l)
    }
    return l
}

function va(e, n, t) {
    e.flags |= 16384, e = {
        getSnapshot: n,
        value: t
    }, n = B.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, B.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e))
}

function ya(e, n, t, r) {
    n.value = t, n.getSnapshot = r, wa(n) && xa(e)
}

function ga(e, n, t) {
    return t(function() {
        wa(n) && xa(e)
    })
}

function wa(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !Ie(e, t)
    } catch {
        return !0
    }
}

function xa(e) {
    var n = Ge(e, 1);
    n !== null && je(n, e, 1, -1)
}

function zu(e) {
    var n = Fe();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: e
    }, n.queue = e, e = e.dispatch = nd.bind(null, B, e), [n.memoizedState, e]
}

function Xt(e, n, t, r) {
    return e = {
        tag: e,
        create: n,
        destroy: t,
        deps: r,
        next: null
    }, n = B.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, B.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e
}

function ka() {
    return Pe().memoizedState
}

function Tr(e, n, t, r) {
    var l = Fe();
    B.flags |= e, l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r)
}

function fl(e, n, t, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (G !== null) {
        var o = G.memoizedState;
        if (i = o.destroy, r !== null && xo(r, o.deps)) {
            l.memoizedState = Xt(n, t, i, r);
            return
        }
    }
    B.flags |= e, l.memoizedState = Xt(1 | n, t, i, r)
}

function Tu(e, n) {
    return Tr(8390656, 8, e, n)
}

function No(e, n) {
    return fl(2048, 8, e, n)
}

function Sa(e, n) {
    return fl(4, 2, e, n)
}

function Na(e, n) {
    return fl(4, 4, e, n)
}

function Ea(e, n) {
    if (typeof n == "function") return e = e(), n(e),
        function() {
            n(null)
        };
    if (n != null) return e = e(), n.current = e,
        function() {
            n.current = null
        }
}

function Ca(e, n, t) {
    return t = t != null ? t.concat([e]) : null, fl(4, 4, Ea.bind(null, n, e), t)
}

function Eo() {}

function _a(e, n) {
    var t = Pe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && xo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e)
}

function Pa(e, n) {
    var t = Pe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && xo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e)
}

function za(e, n, t) {
    return (Ln & 21) === 0 ? (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = t) : (Ie(t, n) || (t = Rs(), B.lanes |= t, Rn |= t, e.baseState = !0), n)
}

function bf(e, n) {
    var t = I;
    I = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Bl.transition;
    Bl.transition = {};
    try {
        e(!1), n()
    } finally {
        I = t, Bl.transition = r
    }
}

function Ta() {
    return Pe().memoizedState
}

function ed(e, n, t) {
    var r = dn(e);
    if (t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, La(e)) Ra(n, t);
    else if (t = ua(e, n, t, r), t !== null) {
        var l = se();
        je(t, e, r, l), Oa(t, n, r)
    }
}

function nd(e, n, t) {
    var r = dn(e),
        l = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (La(e)) Ra(n, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n.lastRenderedReducer, i !== null)) try {
            var o = n.lastRenderedState,
                u = i(o, t);
            if (l.hasEagerState = !0, l.eagerState = u, Ie(u, o)) {
                var s = n.interleaved;
                s === null ? (l.next = l, ho(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
                return
            }
        } catch {} finally {}
        t = ua(e, n, l, r), t !== null && (l = se(), je(t, e, r, l), Oa(t, n, r))
    }
}

function La(e) {
    var n = e.alternate;
    return e === B || n !== null && n === B
}

function Ra(e, n) {
    Tt = Jr = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n
}

function Oa(e, n, t) {
    if ((t & 4194240) !== 0) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, eo(e, t)
    }
}
var qr = {
        readContext: _e,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1
    },
    td = {
        readContext: _e,
        useCallback: function(e, n) {
            return Fe().memoizedState = [e, n === void 0 ? null : n], e
        },
        useContext: _e,
        useEffect: Tu,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([e]) : null, Tr(4194308, 4, Ea.bind(null, n, e), t)
        },
        useLayoutEffect: function(e, n) {
            return Tr(4194308, 4, e, n)
        },
        useInsertionEffect: function(e, n) {
            return Tr(4, 2, e, n)
        },
        useMemo: function(e, n) {
            var t = Fe();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e
        },
        useReducer: function(e, n, t) {
            var r = Fe();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, r.queue = e, e = e.dispatch = ed.bind(null, B, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var n = Fe();
            return e = {
                current: e
            }, n.memoizedState = e
        },
        useState: zu,
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            return Fe().memoizedState = e
        },
        useTransition: function() {
            var e = zu(!1),
                n = e[0];
            return e = bf.bind(null, e[1]), Fe().memoizedState = e, [n, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, n, t) {
            var r = B,
                l = Fe();
            if (A) {
                if (t === void 0) throw Error(g(407));
                t = t()
            } else {
                if (t = n(), b === null) throw Error(g(349));
                (Ln & 30) !== 0 || va(r, n, t)
            }
            l.memoizedState = t;
            var i = {
                value: t,
                getSnapshot: n
            };
            return l.queue = i, Tu(ga.bind(null, r, i, e), [e]), r.flags |= 2048, Xt(9, ya.bind(null, r, i, t, n), void 0, null), t
        },
        useId: function() {
            var e = Fe(),
                n = b.identifierPrefix;
            if (A) {
                var t = He,
                    r = Ve;
                t = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Kt++, 0 < t && (n += "H" + t.toString(32)), n += ":"
            } else t = qf++, n = ":" + n + "r" + t.toString(32) + ":";
            return e.memoizedState = n
        },
        unstable_isNewReconciler: !1
    },
    rd = {
        readContext: _e,
        useCallback: _a,
        useContext: _e,
        useEffect: No,
        useImperativeHandle: Ca,
        useInsertionEffect: Sa,
        useLayoutEffect: Na,
        useMemo: Pa,
        useReducer: Vl,
        useRef: ka,
        useState: function() {
            return Vl(Yt)
        },
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            var n = Pe();
            return za(n, G.memoizedState, e)
        },
        useTransition: function() {
            var e = Vl(Yt)[0],
                n = Pe().memoizedState;
            return [e, n]
        },
        useMutableSource: ma,
        useSyncExternalStore: ha,
        useId: Ta,
        unstable_isNewReconciler: !1
    },
    ld = {
        readContext: _e,
        useCallback: _a,
        useContext: _e,
        useEffect: No,
        useImperativeHandle: Ca,
        useInsertionEffect: Sa,
        useLayoutEffect: Na,
        useMemo: Pa,
        useReducer: Hl,
        useRef: ka,
        useState: function() {
            return Hl(Yt)
        },
        useDebugValue: Eo,
        useDeferredValue: function(e) {
            var n = Pe();
            return G === null ? n.memoizedState = e : za(n, G.memoizedState, e)
        },
        useTransition: function() {
            var e = Hl(Yt)[0],
                n = Pe().memoizedState;
            return [e, n]
        },
        useMutableSource: ma,
        useSyncExternalStore: ha,
        useId: Ta,
        unstable_isNewReconciler: !1
    };

function it(e, n) {
    try {
        var t = "",
            r = n;
        do t += Rc(r), r = r.return; while (r);
        var l = t
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: n,
        stack: l,
        digest: null
    }
}

function Ql(e, n, t) {
    return {
        value: e,
        source: null,
        stack: t != null ? t : null,
        digest: n != null ? n : null
    }
}

function zi(e, n) {
    try {
        console.error(n.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;

function Ma(e, n, t) {
    t = Qe(-1, t), t.tag = 3, t.payload = {
        element: null
    };
    var r = n.value;
    return t.callback = function() {
        el || (el = !0, $i = r), zi(e, n)
    }, t
}

function ja(e, n, t) {
    t = Qe(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = n.value;
        t.payload = function() {
            return r(l)
        }, t.callback = function() {
            zi(e, n)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        zi(e, n), typeof r != "function" && (fn === null ? fn = new Set([this]) : fn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : ""
        })
    }), t
}

function Lu(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new id;
        var l = new Set;
        r.set(n, l)
    } else l = r.get(n), l === void 0 && (l = new Set, r.set(n, l));
    l.has(t) || (l.add(t), e = wd.bind(null, e, n, t), n.then(e, e))
}

function Ru(e) {
    do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ou(e, n, t, r, l) {
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Qe(-1, 1), n.tag = 2, cn(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e)
}
var od = Je.ReactCurrentOwner,
    de = !1;

function ue(e, n, t, r) {
    n.child = e === null ? da(n, null, t, r) : rt(n, e.child, t, r)
}

function Mu(e, n, t, r, l) {
    t = t.render;
    var i = n.ref;
    return qn(n, l), r = ko(e, n, t, r, i, l), t = So(), e !== null && !de ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ze(e, n, l)) : (A && t && so(n), n.flags |= 1, ue(e, n, r, l), n.child)
}

function ju(e, n, t, r, l) {
    if (e === null) {
        var i = t.type;
        return typeof i == "function" && !Oo(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i, Ia(e, n, i, r, l)) : (e = Mr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e)
    }
    if (i = e.child, (e.lanes & l) === 0) {
        var o = i.memoizedProps;
        if (t = t.compare, t = t !== null ? t : At, t(o, r) && e.ref === n.ref) return Ze(e, n, l)
    }
    return n.flags |= 1, e = pn(i, r), e.ref = n.ref, e.return = n, n.child = e
}

function Ia(e, n, t, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (At(i, r) && e.ref === n.ref)
            if (de = !1, n.pendingProps = r = i, (e.lanes & l) !== 0)(e.flags & 131072) !== 0 && (de = !0);
            else return n.lanes = e.lanes, Ze(e, n, l)
    }
    return Ti(e, n, t, r, l)
}

function Da(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((n.mode & 1) === 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, D(Yn, ve), ve |= t;
        else {
            if ((t & 1073741824) === 0) return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, n.updateQueue = null, D(Yn, ve), ve |= e, null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : t, D(Yn, ve), ve |= r
        }
    else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, D(Yn, ve), ve |= r;
    return ue(e, n, l, t), n.child
}

function Fa(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152)
}

function Ti(e, n, t, r, l) {
    var i = me(t) ? zn : oe.current;
    return i = nt(n, i), qn(n, l), t = ko(e, n, t, r, i, l), r = So(), e !== null && !de ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ze(e, n, l)) : (A && r && so(n), n.flags |= 1, ue(e, n, t, l), n.child)
}

function Iu(e, n, t, r, l) {
    if (me(t)) {
        var i = !0;
        Hr(n)
    } else i = !1;
    if (qn(n, l), n.stateNode === null) Lr(e, n), ca(n, t, r), Pi(n, t, r, l), r = !0;
    else if (e === null) {
        var o = n.stateNode,
            u = n.memoizedProps;
        o.props = u;
        var s = o.context,
            c = t.contextType;
        typeof c == "object" && c !== null ? c = _e(c) : (c = me(t) ? zn : oe.current, c = nt(n, c));
        var h = t.getDerivedStateFromProps,
            m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && _u(n, o, r, c), en = !1;
        var p = n.memoizedState;
        o.state = p, Gr(n, r, o, l), s = n.memoizedState, u !== r || p !== s || pe.current || en ? (typeof h == "function" && (_i(n, t, h, r), s = n.memoizedState), (u = en || Cu(n, t, u, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1)
    } else {
        o = n.stateNode, sa(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Le(n.type, u), o.props = c, m = n.pendingProps, p = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = me(t) ? zn : oe.current, s = nt(n, s));
        var w = t.getDerivedStateFromProps;
        (h = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && _u(n, o, r, s), en = !1, p = n.memoizedState, o.state = p, Gr(n, r, o, l);
        var x = n.memoizedState;
        u !== m || p !== x || pe.current || en ? (typeof w == "function" && (_i(n, t, w, r), x = n.memoizedState), (c = en || Cu(n, t, c, r, p, x, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), o.props = r, o.state = x, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1)
    }
    return Li(e, n, t, r, i, l)
}

function Li(e, n, t, r, l, i) {
    Fa(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return l && xu(n, t, !1), Ze(e, n, i);
    r = n.stateNode, od.current = n;
    var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = rt(n, e.child, null, i), n.child = rt(n, null, u, i)) : ue(e, n, u, i), n.memoizedState = r.state, l && xu(n, t, !0), n.child
}

function $a(e) {
    var n = e.stateNode;
    n.pendingContext ? wu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && wu(e, n.context, !1), yo(e, n.containerInfo)
}

function Du(e, n, t, r, l) {
    return tt(), co(l), n.flags |= 256, ue(e, n, t, r), n.child
}
var Ri = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Oi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ua(e, n, t) {
    var r = n.pendingProps,
        l = W.current,
        i = !1,
        o = (n.flags & 128) !== 0,
        u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(W, l & 1), e === null) return Ei(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = n.mode, i = n.child, o = {
        mode: "hidden",
        children: o
    }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ml(o, r, 0, null), e = Pn(e, r, t, null), i.return = n, e.return = n, i.sibling = e, n.child = i, n.child.memoizedState = Oi(t), n.memoizedState = Ri, e) : Co(n, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return ud(e, n, o, r, u, l, t);
    if (i) {
        i = r.fallback, o = n.mode, l = e.child, u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return (o & 1) === 0 && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = pn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = pn(u, i) : (i = Pn(i, o, t, null), i.flags |= 2), i.return = n, r.return = n, r.sibling = i, n.child = r, r = i, i = n.child, o = e.child.memoizedState, o = o === null ? Oi(t) : {
            baseLanes: o.baseLanes | t,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~t, n.memoizedState = Ri, r
    }
    return i = e.child, e = i.sibling, r = pn(i, {
        mode: "visible",
        children: r.children
    }), (n.mode & 1) === 0 && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r
}

function Co(e, n) {
    return n = ml({
        mode: "visible",
        children: n
    }, e.mode, 0, null), n.return = e, e.child = n
}

function yr(e, n, t, r) {
    return r !== null && co(r), rt(n, e.child, null, t), e = Co(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
}

function ud(e, n, t, r, l, i, o) {
    if (t) return n.flags & 256 ? (n.flags &= -257, r = Ql(Error(g(422))), yr(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, l = n.mode, r = ml({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = Pn(i, l, o, null), i.flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, (n.mode & 1) !== 0 && rt(n, e.child, null, o), n.child.memoizedState = Oi(o), n.memoizedState = Ri, i);
    if ((n.mode & 1) === 0) return yr(e, n, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, i = Error(g(419)), r = Ql(i, r, void 0), yr(e, n, o, r)
    }
    if (u = (o & e.childLanes) !== 0, de || u) {
        if (r = b, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ge(e, l), je(r, e, l, -1))
        }
        return Ro(), r = Ql(Error(g(421))), yr(e, n, o, r)
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = xd.bind(null, e), l._reactRetry = n, null) : (e = i.treeContext, ye = an(l.nextSibling), ge = n, A = !0, Oe = null, e !== null && (Se[Ne++] = Ve, Se[Ne++] = He, Se[Ne++] = Tn, Ve = e.id, He = e.overflow, Tn = n), n = Co(n, r.children), n.flags |= 4096, n)
}

function Fu(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ci(e.return, n, t)
}

function Kl(e, n, t, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l
    } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = l)
}

function Aa(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (ue(e, n, r.children, t), r = W.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Fu(e, t, n);
            else if (e.tag === 19) Fu(e, t, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === n) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (D(W, r), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (t = n.child, l = null; t !== null;) e = t.alternate, e !== null && Zr(e) === null && (l = t), t = t.sibling;
            t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Kl(n, !1, l, t, i);
            break;
        case "backwards":
            for (t = null, l = n.child, n.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Zr(e) === null) {
                    n.child = l;
                    break
                }
                e = l.sibling, l.sibling = t, t = l, l = e
            }
            Kl(n, !0, t, null, i);
            break;
        case "together":
            Kl(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
    }
    return n.child
}

function Lr(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2)
}

function Ze(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), Rn |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(g(153));
    if (n.child !== null) {
        for (e = n.child, t = pn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;) e = e.sibling, t = t.sibling = pn(e, e.pendingProps), t.return = n;
        t.sibling = null
    }
    return n.child
}

function sd(e, n, t) {
    switch (n.tag) {
        case 3:
            $a(n), tt();
            break;
        case 5:
            pa(n);
            break;
        case 1:
            me(n.type) && Hr(n);
            break;
        case 4:
            yo(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            D(Yr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = n.memoizedState, r !== null) return r.dehydrated !== null ? (D(W, W.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Ua(e, n, t) : (D(W, W.current & 1), e = Ze(e, n, t), e !== null ? e.sibling : null);
            D(W, W.current & 1);
            break;
        case 19:
            if (r = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (r) return Aa(e, n, t);
                n.flags |= 128
            }
            if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0, Da(e, n, t)
    }
    return Ze(e, n, t)
}
var Wa, Mi, Ba, Va;
Wa = function(e, n) {
    for (var t = n.child; t !== null;) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === n) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === n) return;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
};
Mi = function() {};
Ba = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = n.stateNode, Cn(Ae.current);
        var i = null;
        switch (t) {
            case "input":
                l = ni(e, l), r = ni(e, r), i = [];
                break;
            case "select":
                l = V({}, l, {
                    value: void 0
                }), r = V({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = li(e, l), r = li(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Br)
        }
        oi(t, r);
        var o;
        t = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u) u.hasOwnProperty(o) && (t || (t = {}), t[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mt.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
                if (c === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
                        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o])
                    } else t || (i || (i = []), i.push(c, t)), t = s;
            else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mt.hasOwnProperty(c) ? (s != null && c === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
        }
        t && (i = i || []).push("style", t);
        var c = i;
        (n.updateQueue = c) && (n.flags |= 4)
    }
};
Va = function(e, n, t, r) {
    t !== r && (n.flags |= 4)
};

function gt(e, n) {
    if (!A) switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var t = null; n !== null;) n.alternate !== null && (t = n), n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n
}

function ad(e, n, t) {
    var r = n.pendingProps;
    switch (ao(n), n.tag) {
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
            return le(n), null;
        case 1:
            return me(n.type) && Vr(), le(n), null;
        case 3:
            return r = n.stateNode, lt(), $(pe), $(oe), wo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Oe !== null && (Wi(Oe), Oe = null))), Mi(e, n), le(n), null;
        case 5:
            go(n);
            var l = Cn(Qt.current);
            if (t = n.type, e !== null && n.stateNode != null) Ba(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(g(166));
                    return le(n), null
                }
                if (e = Cn(Ae.current), hr(n)) {
                    r = n.stateNode, t = n.type;
                    var i = n.memoizedProps;
                    switch (r[$e] = n, r[Vt] = i, e = (n.mode & 1) !== 0, t) {
                        case "dialog":
                            F("cancel", r), F("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            F("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Nt.length; l++) F(Nt[l], r);
                            break;
                        case "source":
                            F("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F("error", r), F("load", r);
                            break;
                        case "details":
                            F("toggle", r);
                            break;
                        case "input":
                            Ko(r, i), F("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, F("invalid", r);
                            break;
                        case "textarea":
                            Xo(r, i), F("invalid", r)
                    }
                    oi(t, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", "" + u]) : Mt.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r)
                        }
                    switch (t) {
                        case "input":
                            or(r), Yo(r, i, !0);
                            break;
                        case "textarea":
                            or(r), Go(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Br)
                    }
                    r = l, n.updateQueue = r, r !== null && (n.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
                        is: r.is
                    }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[$e] = n, e[Vt] = r, Wa(e, n, !1, !1), n.stateNode = e;
                    e: {
                        switch (o = ui(t, r), t) {
                            case "dialog":
                                F("cancel", e), F("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Nt.length; l++) F(Nt[l], e);
                                l = r;
                                break;
                            case "source":
                                F("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", e), F("load", e), l = r;
                                break;
                            case "details":
                                F("toggle", e), l = r;
                                break;
                            case "input":
                                Ko(e, r), l = ni(e, r), F("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = V({}, r, {
                                    value: void 0
                                }), F("invalid", e);
                                break;
                            case "textarea":
                                Xo(e, r), l = li(e, r), F("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        oi(t, l),
                        u = l;
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var s = u[i];
                                i === "style" ? ws(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ys(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jt(e, s) : typeof s == "number" && jt(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mt.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && Xi(e, i, s, o))
                            }
                        switch (t) {
                            case "input":
                                or(e), Yo(e, r, !1);
                                break;
                            case "textarea":
                                or(e), Go(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + mn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Xn(e, !!r.multiple, i, !1) : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Br)
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
            }
            return le(n), null;
        case 6:
            if (e && n.stateNode != null) Va(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
                if (t = Cn(Qt.current), Cn(Ae.current), hr(n)) {
                    if (r = n.stateNode, t = n.memoizedProps, r[$e] = n, (i = r.nodeValue !== t) && (e = ge, e !== null)) switch (e.tag) {
                        case 3:
                            mr(r.nodeValue, t, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && mr(r.nodeValue, t, (e.mode & 1) !== 0)
                    }
                    i && (n.flags |= 4)
                } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[$e] = n, n.stateNode = r
            }
            return le(n), null;
        case 13:
            if ($(W), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (A && ye !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) oa(), tt(), n.flags |= 98560, i = !1;
                else if (i = hr(n), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(g(318));
                        if (i = n.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(g(317));
                        i[$e] = n
                    } else tt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                    le(n), i = !1
                } else Oe !== null && (Wi(Oe), Oe = null), i = !0;
                if (!i) return n.flags & 65536 ? n : null
            }
            return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (W.current & 1) !== 0 ? Z === 0 && (Z = 3) : Ro())), n.updateQueue !== null && (n.flags |= 4), le(n), null);
        case 4:
            return lt(), Mi(e, n), e === null && Wt(n.stateNode.containerInfo), le(n), null;
        case 10:
            return mo(n.type._context), le(n), null;
        case 17:
            return me(n.type) && Vr(), le(n), null;
        case 19:
            if ($(W), i = n.memoizedState, i === null) return le(n), null;
            if (r = (n.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) gt(i, !1);
                else {
                    if (Z !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = n.child; e !== null;) {
                            if (o = Zr(e), o !== null) {
                                for (n.flags |= 128, gt(i, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null;) i = t, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), t = t.sibling;
                                return D(W, W.current & 1 | 2), n.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Y() > ot && (n.flags |= 128, r = !0, gt(i, !1), n.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Zr(o), e !== null) {
                        if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), gt(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !A) return le(n), null
                    } else 2 * Y() - i.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, gt(i, !1), n.lanes = 4194304);
                i.isBackwards ? (o.sibling = n.child, n.child = o) : (t = i.last, t !== null ? t.sibling = o : n.child = o, i.last = o)
            }
            return i.tail !== null ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = Y(), n.sibling = null, t = W.current, D(W, r ? t & 1 | 2 : t & 1), n) : (le(n), null);
        case 22:
        case 23:
            return Lo(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && (n.mode & 1) !== 0 ? (ve & 1073741824) !== 0 && (le(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : le(n), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(g(156, n.tag))
}

function cd(e, n) {
    switch (ao(n), n.tag) {
        case 1:
            return me(n.type) && Vr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
            return lt(), $(pe), $(oe), wo(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
            return go(n), null;
        case 13:
            if ($(W), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                if (n.alternate === null) throw Error(g(340));
                tt()
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
            return $(W), null;
        case 4:
            return lt(), null;
        case 10:
            return mo(n.type._context), null;
        case 22:
        case 23:
            return Lo(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var gr = !1,
    ie = !1,
    fd = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;

function Kn(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function") try {
            t(null)
        } catch (r) {
            H(e, n, r)
        } else t.current = null
}

function ji(e, n, t) {
    try {
        t()
    } catch (r) {
        H(e, n, r)
    }
}
var $u = !1;

function dd(e, n) {
    if (yi = Ur, e = Ys(), uo(e)) {
        if ("selectionStart" in e) var t = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            t = (t = e.ownerDocument) && t.defaultView || window;
            var r = t.getSelection && t.getSelection();
            if (r && r.rangeCount !== 0) {
                t = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    t.nodeType, i.nodeType
                } catch {
                    t = null;
                    break e
                }
                var o = 0,
                    u = -1,
                    s = -1,
                    c = 0,
                    h = 0,
                    m = e,
                    p = null;
                n: for (;;) {
                    for (var w; m !== t || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (w = m.firstChild) !== null;) p = m, m = w;
                    for (;;) {
                        if (m === e) break n;
                        if (p === t && ++c === l && (u = o), p === i && ++h === r && (s = o), (w = m.nextSibling) !== null) break;
                        m = p, p = m.parentNode
                    }
                    m = w
                }
                t = u === -1 || s === -1 ? null : {
                    start: u,
                    end: s
                }
            } else t = null
        }
        t = t || {
            start: 0,
            end: 0
        }
    } else t = null;
    for (gi = {
            focusedElem: e,
            selectionRange: t
        }, Ur = !1, S = n; S !== null;)
        if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S = e;
        else
            for (; S !== null;) {
                n = S;
                try {
                    var x = n.alternate;
                    if ((n.flags & 1024) !== 0) switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var k = x.memoizedProps,
                                    U = x.memoizedState,
                                    f = n.stateNode,
                                    a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Le(n.type, k), U);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var d = n.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                    }
                } catch (y) {
                    H(n, n.return, y)
                }
                if (e = n.sibling, e !== null) {
                    e.return = n.return, S = e;
                    break
                }
                S = n.return
            }
    return x = $u, $u = !1, x
}

function Lt(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && ji(n, t, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function dl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var t = n = n.next;
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== n)
    }
}

function Ii(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t
        }
        typeof n == "function" ? n(e) : n.current = e
    }
}

function Ha(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ha(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[$e], delete n[Vt], delete n[ki], delete n[Xf], delete n[Gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Qa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Uu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Qa(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Di(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Br));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Di(e, n, t), e = e.sibling; e !== null;) Di(e, n, t), e = e.sibling
}

function Fi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Fi(e, n, t), e = e.sibling; e !== null;) Fi(e, n, t), e = e.sibling
}
var ee = null,
    Re = !1;

function qe(e, n, t) {
    for (t = t.child; t !== null;) Ka(e, n, t), t = t.sibling
}

function Ka(e, n, t) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
        Ue.onCommitFiberUnmount(ll, t)
    } catch {}
    switch (t.tag) {
        case 5:
            ie || Kn(t, n);
        case 6:
            var r = ee,
                l = Re;
            ee = null, qe(e, n, t), ee = r, Re = l, ee !== null && (Re ? (e = ee, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ee.removeChild(t.stateNode));
            break;
        case 18:
            ee !== null && (Re ? (e = ee, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), $t(e)) : Ul(ee, t.stateNode));
            break;
        case 4:
            r = ee, l = Re, ee = t.stateNode.containerInfo, Re = !0, qe(e, n, t), ee = r, Re = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ie && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ji(t, n, o), l = l.next
                } while (l !== r)
            }
            qe(e, n, t);
            break;
        case 1:
            if (!ie && (Kn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount()
            } catch (u) {
                H(t, n, u)
            }
            qe(e, n, t);
            break;
        case 21:
            qe(e, n, t);
            break;
        case 22:
            t.mode & 1 ? (ie = (r = ie) || t.memoizedState !== null, qe(e, n, t), ie = r) : qe(e, n, t);
            break;
        default:
            qe(e, n, t)
    }
}

function Au(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new fd), n.forEach(function(r) {
            var l = kd.bind(null, e, r);
            t.has(r) || (t.add(r), r.then(l, l))
        })
    }
}

function Te(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var i = e,
                    o = n,
                    u = o;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            ee = u.stateNode, Re = !1;
                            break e;
                        case 3:
                            ee = u.stateNode.containerInfo, Re = !0;
                            break e;
                        case 4:
                            ee = u.stateNode.containerInfo, Re = !0;
                            break e
                    }
                    u = u.return
                }
                if (ee === null) throw Error(g(160));
                Ka(i, o, l), ee = null, Re = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (c) {
                H(l, n, c)
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null;) Ya(n, e), n = n.sibling
}

function Ya(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Te(n, e), De(e), r & 4) {
                try {
                    Lt(3, e, e.return), dl(3, e)
                } catch (k) {
                    H(e, e.return, k)
                }
                try {
                    Lt(5, e, e.return)
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 1:
            Te(n, e), De(e), r & 512 && t !== null && Kn(t, t.return);
            break;
        case 5:
            if (Te(n, e), De(e), r & 512 && t !== null && Kn(t, t.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    jt(l, "")
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = t !== null ? t.memoizedProps : i,
                    u = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    u === "input" && i.type === "radio" && i.name != null && ms(l, i), ui(u, o);
                    var c = ui(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var h = s[o],
                            m = s[o + 1];
                        h === "style" ? ws(l, m) : h === "dangerouslySetInnerHTML" ? ys(l, m) : h === "children" ? jt(l, m) : Xi(l, h, m, c)
                    }
                    switch (u) {
                        case "input":
                            ti(l, i);
                            break;
                        case "textarea":
                            hs(l, i);
                            break;
                        case "select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? Xn(l, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? Xn(l, !!i.multiple, i.defaultValue, !0) : Xn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Vt] = i
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 6:
            if (Te(n, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(g(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 3:
            if (Te(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
                $t(n.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
            break;
        case 4:
            Te(n, e), De(e);
            break;
        case 13:
            Te(n, e), De(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (zo = Y())), r & 4 && Au(e);
            break;
        case 22:
            if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ie = (c = ie) || h, Te(n, e), ie = c) : Te(n, e), De(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && (e.mode & 1) !== 0)
                    for (S = e, h = e.child; h !== null;) {
                        for (m = S = h; S !== null;) {
                            switch (p = S, w = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lt(4, p, p.return);
                                    break;
                                case 1:
                                    Kn(p, p.return);
                                    var x = p.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = p, t = p.return;
                                        try {
                                            n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount()
                                        } catch (k) {
                                            H(r, t, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Bu(m);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = p, S = w) : Bu(m)
                        }
                        h = h.sibling
                    }
                e: for (h = null, m = e;;) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                l = m.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = gs("display", o))
                            } catch (k) {
                                H(e, e.return, k)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null) try {
                            m.stateNode.nodeValue = c ? "" : m.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), m = m.return
                    }
                    h === m && (h = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            Te(n, e), De(e), r & 4 && Au(e);
            break;
        case 21:
            break;
        default:
            Te(n, e), De(e)
    }
}

function De(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null;) {
                    if (Qa(t)) {
                        var r = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (jt(l, ""), r.flags &= -33);
                    var i = Uu(e);
                    Fi(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Uu(e);
                    Di(e, u, o);
                    break;
                default:
                    throw Error(g(161))
            }
        }
        catch (s) {
            H(e, e.return, s)
        }
        e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
}

function pd(e, n, t) {
    S = e, Xa(e)
}

function Xa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var l = S,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || gr;
            if (!o) {
                var u = l.alternate,
                    s = u !== null && u.memoizedState !== null || ie;
                u = gr;
                var c = ie;
                if (gr = o, (ie = s) && !c)
                    for (S = l; S !== null;) o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? Vu(l) : s !== null ? (s.return = o, S = s) : Vu(l);
                for (; i !== null;) S = i, Xa(i), i = i.sibling;
                S = l, gr = u, ie = c
            }
            Wu(e)
        } else(l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, S = i) : Wu(e)
    }
}

function Wu(e) {
    for (; S !== null;) {
        var n = S;
        if ((n.flags & 8772) !== 0) {
            var t = n.alternate;
            try {
                if ((n.flags & 8772) !== 0) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ie || dl(5, n);
                        break;
                    case 1:
                        var r = n.stateNode;
                        if (n.flags & 4 && !ie)
                            if (t === null) r.componentDidMount();
                            else {
                                var l = n.elementType === n.type ? t.memoizedProps : Le(n.type, t.memoizedProps);
                                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = n.updateQueue;
                        i !== null && Eu(n, i, r);
                        break;
                    case 3:
                        var o = n.updateQueue;
                        if (o !== null) {
                            if (t = null, n.child !== null) switch (n.child.tag) {
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                            }
                            Eu(n, o, t)
                        }
                        break;
                    case 5:
                        var u = n.stateNode;
                        if (t === null && n.flags & 4) {
                            t = u;
                            var s = n.memoizedProps;
                            switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && t.focus();
                                    break;
                                case "img":
                                    s.src && (t.src = s.src)
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
                        if (n.memoizedState === null) {
                            var c = n.alternate;
                            if (c !== null) {
                                var h = c.memoizedState;
                                if (h !== null) {
                                    var m = h.dehydrated;
                                    m !== null && $t(m)
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
                        throw Error(g(163))
                }
                ie || n.flags & 512 && Ii(n)
            } catch (p) {
                H(n, n.return, p)
            }
        }
        if (n === e) {
            S = null;
            break
        }
        if (t = n.sibling, t !== null) {
            t.return = n.return, S = t;
            break
        }
        S = n.return
    }
}

function Bu(e) {
    for (; S !== null;) {
        var n = S;
        if (n === e) {
            S = null;
            break
        }
        var t = n.sibling;
        if (t !== null) {
            t.return = n.return, S = t;
            break
        }
        S = n.return
    }
}

function Vu(e) {
    for (; S !== null;) {
        var n = S;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        dl(4, n)
                    } catch (s) {
                        H(n, t, s)
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = n.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            H(n, l, s)
                        }
                    }
                    var i = n.return;
                    try {
                        Ii(n)
                    } catch (s) {
                        H(n, i, s)
                    }
                    break;
                case 5:
                    var o = n.return;
                    try {
                        Ii(n)
                    } catch (s) {
                        H(n, o, s)
                    }
            }
        } catch (s) {
            H(n, n.return, s)
        }
        if (n === e) {
            S = null;
            break
        }
        var u = n.sibling;
        if (u !== null) {
            u.return = n.return, S = u;
            break
        }
        S = n.return
    }
}
var md = Math.ceil,
    br = Je.ReactCurrentDispatcher,
    _o = Je.ReactCurrentOwner,
    Ce = Je.ReactCurrentBatchConfig,
    j = 0,
    b = null,
    X = null,
    ne = 0,
    ve = 0,
    Yn = yn(0),
    Z = 0,
    Gt = null,
    Rn = 0,
    pl = 0,
    Po = 0,
    Rt = null,
    fe = null,
    zo = 0,
    ot = 1 / 0,
    We = null,
    el = !1,
    $i = null,
    fn = null,
    wr = !1,
    ln = null,
    nl = 0,
    Ot = 0,
    Ui = null,
    Rr = -1,
    Or = 0;

function se() {
    return (j & 6) !== 0 ? Y() : Rr !== -1 ? Rr : Rr = Y()
}

function dn(e) {
    return (e.mode & 1) === 0 ? 1 : (j & 2) !== 0 && ne !== 0 ? ne & -ne : Jf.transition !== null ? (Or === 0 && (Or = Rs()), Or) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $s(e.type)), e)
}

function je(e, n, t, r) {
    if (50 < Ot) throw Ot = 0, Ui = null, Error(g(185));
    qt(e, t, r), ((j & 2) === 0 || e !== b) && (e === b && ((j & 2) === 0 && (pl |= t), Z === 4 && tn(e, ne)), he(e, r), t === 1 && j === 0 && (n.mode & 1) === 0 && (ot = Y() + 500, al && gn()))
}

function he(e, n) {
    var t = e.callbackNode;
    Zc(e, n);
    var r = $r(e, e === b ? ne : 0);
    if (r === 0) t !== null && qo(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
        if (t != null && qo(t), n === 1) e.tag === 0 ? Zf(Hu.bind(null, e)) : ra(Hu.bind(null, e)), Kf(function() {
            (j & 6) === 0 && gn()
        }), t = null;
        else {
            switch (Os(r)) {
                case 1:
                    t = bi;
                    break;
                case 4:
                    t = Ts;
                    break;
                case 16:
                    t = Fr;
                    break;
                case 536870912:
                    t = Ls;
                    break;
                default:
                    t = Fr
            }
            t = tc(t, Ga.bind(null, e))
        }
        e.callbackPriority = n, e.callbackNode = t
    }
}

function Ga(e, n) {
    if (Rr = -1, Or = 0, (j & 6) !== 0) throw Error(g(327));
    var t = e.callbackNode;
    if (bn() && e.callbackNode !== t) return null;
    var r = $r(e, e === b ? ne : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = tl(e, r);
    else {
        n = r;
        var l = j;
        j |= 2;
        var i = Ja();
        (b !== e || ne !== n) && (We = null, ot = Y() + 500, _n(e, n));
        do try {
            yd();
            break
        } catch (u) {
            Za(e, u)
        }
        while (1);
        po(), br.current = i, j = l, X !== null ? n = 0 : (b = null, ne = 0, n = Z)
    }
    if (n !== 0) {
        if (n === 2 && (l = di(e), l !== 0 && (r = l, n = Ai(e, l))), n === 1) throw t = Gt, _n(e, 0), tn(e, r), he(e, Y()), t;
        if (n === 6) tn(e, r);
        else {
            if (l = e.current.alternate, (r & 30) === 0 && !hd(l) && (n = tl(e, r), n === 2 && (i = di(e), i !== 0 && (r = i, n = Ai(e, i))), n === 1)) throw t = Gt, _n(e, 0), tn(e, r), he(e, Y()), t;
            switch (e.finishedWork = l, e.finishedLanes = r, n) {
                case 0:
                case 1:
                    throw Error(g(345));
                case 2:
                    Sn(e, fe, We);
                    break;
                case 3:
                    if (tn(e, r), (r & 130023424) === r && (n = zo + 500 - Y(), 10 < n)) {
                        if ($r(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            se(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = xi(Sn.bind(null, e, fe, We), n);
                        break
                    }
                    Sn(e, fe, We);
                    break;
                case 4:
                    if (tn(e, r), (r & 4194240) === r) break;
                    for (n = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - Me(r);
                        i = 1 << o, o = n[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * md(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = xi(Sn.bind(null, e, fe, We), r);
                        break
                    }
                    Sn(e, fe, We);
                    break;
                case 5:
                    Sn(e, fe, We);
                    break;
                default:
                    throw Error(g(329))
            }
        }
    }
    return he(e, Y()), e.callbackNode === t ? Ga.bind(null, e) : null
}

function Ai(e, n) {
    var t = Rt;
    return e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256), e = tl(e, n), e !== 2 && (n = fe, fe = t, n !== null && Wi(n)), e
}

function Wi(e) {
    fe === null ? fe = e : fe.push.apply(fe, e)
}

function hd(e) {
    for (var n = e;;) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && (t = t.stores, t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
        else {
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return !0;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }
    return !0
}

function tn(e, n) {
    for (n &= ~Po, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
        var t = 31 - Me(n),
            r = 1 << t;
        e[t] = -1, n &= ~r
    }
}

function Hu(e) {
    if ((j & 6) !== 0) throw Error(g(327));
    bn();
    var n = $r(e, 0);
    if ((n & 1) === 0) return he(e, Y()), null;
    var t = tl(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = di(e);
        r !== 0 && (n = r, t = Ai(e, r))
    }
    if (t === 1) throw t = Gt, _n(e, 0), tn(e, n), he(e, Y()), t;
    if (t === 6) throw Error(g(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, Sn(e, fe, We), he(e, Y()), null
}

function To(e, n) {
    var t = j;
    j |= 1;
    try {
        return e(n)
    } finally {
        j = t, j === 0 && (ot = Y() + 500, al && gn())
    }
}

function On(e) {
    ln !== null && ln.tag === 0 && (j & 6) === 0 && bn();
    var n = j;
    j |= 1;
    var t = Ce.transition,
        r = I;
    try {
        if (Ce.transition = null, I = 1, e) return e()
    } finally {
        I = r, Ce.transition = t, j = n, (j & 6) === 0 && gn()
    }
}

function Lo() {
    ve = Yn.current, $(Yn)
}

function _n(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Qf(t)), X !== null)
        for (t = X.return; t !== null;) {
            var r = t;
            switch (ao(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Vr();
                    break;
                case 3:
                    lt(), $(pe), $(oe), wo();
                    break;
                case 5:
                    go(r);
                    break;
                case 4:
                    lt();
                    break;
                case 13:
                    $(W);
                    break;
                case 19:
                    $(W);
                    break;
                case 10:
                    mo(r.type._context);
                    break;
                case 22:
                case 23:
                    Lo()
            }
            t = t.return
        }
    if (b = e, X = e = pn(e.current, null), ne = ve = n, Z = 0, Gt = null, Po = pl = Rn = 0, fe = Rt = null, En !== null) {
        for (n = 0; n < En.length; n++)
            if (t = En[n], r = t.interleaved, r !== null) {
                t.interleaved = null;
                var l = r.next,
                    i = t.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                t.pending = r
            }
        En = null
    }
    return e
}

function Za(e, n) {
    do {
        var t = X;
        try {
            if (po(), zr.current = qr, Jr) {
                for (var r = B.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Jr = !1
            }
            if (Ln = 0, q = G = B = null, Tt = !1, Kt = 0, _o.current = null, t === null || t.return === null) {
                Z = 1, Gt = n, X = null;
                break
            }
            e: {
                var i = e,
                    o = t.return,
                    u = t,
                    s = n;
                if (n = ne, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s,
                        h = u,
                        m = h.tag;
                    if ((h.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
                        var p = h.alternate;
                        p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var w = Ru(o);
                    if (w !== null) {
                        w.flags &= -257, Ou(w, o, u, i, n), w.mode & 1 && Lu(i, c, n), n = w, s = c;
                        var x = n.updateQueue;
                        if (x === null) {
                            var k = new Set;
                            k.add(s), n.updateQueue = k
                        } else x.add(s);
                        break e
                    } else {
                        if ((n & 1) === 0) {
                            Lu(i, c, n), Ro();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (A && u.mode & 1) {
                    var U = Ru(o);
                    if (U !== null) {
                        (U.flags & 65536) === 0 && (U.flags |= 256), Ou(U, o, u, i, n), co(it(s, u));
                        break e
                    }
                }
                i = s = it(s, u),
                Z !== 4 && (Z = 2),
                Rt === null ? Rt = [i] : Rt.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, n &= -n, i.lanes |= n;
                            var f = Ma(i, s, n);
                            Nu(i, f);
                            break e;
                        case 1:
                            u = s;
                            var a = i.type,
                                d = i.stateNode;
                            if ((i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (fn === null || !fn.has(d)))) {
                                i.flags |= 65536, n &= -n, i.lanes |= n;
                                var y = ja(i, u, n);
                                Nu(i, y);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            ba(t)
        } catch (N) {
            n = N, X === t && t !== null && (X = t = t.return);
            continue
        }
        break
    } while (1)
}

function Ja() {
    var e = br.current;
    return br.current = qr, e === null ? qr : e
}

function Ro() {
    (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || (Rn & 268435455) === 0 && (pl & 268435455) === 0 || tn(b, ne)
}

function tl(e, n) {
    var t = j;
    j |= 2;
    var r = Ja();
    (b !== e || ne !== n) && (We = null, _n(e, n));
    do try {
        vd();
        break
    } catch (l) {
        Za(e, l)
    }
    while (1);
    if (po(), j = t, br.current = r, X !== null) throw Error(g(261));
    return b = null, ne = 0, Z
}

function vd() {
    for (; X !== null;) qa(X)
}

function yd() {
    for (; X !== null && !Wc();) qa(X)
}

function qa(e) {
    var n = nc(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps, n === null ? ba(e) : X = n, _o.current = null
}

function ba(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (e = n.return, (n.flags & 32768) === 0) {
            if (t = ad(t, n, ve), t !== null) {
                X = t;
                return
            }
        } else {
            if (t = cd(t, n), t !== null) {
                t.flags &= 32767, X = t;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Z = 6, X = null;
                return
            }
        }
        if (n = n.sibling, n !== null) {
            X = n;
            return
        }
        X = n = e
    } while (n !== null);
    Z === 0 && (Z = 5)
}

function Sn(e, n, t) {
    var r = I,
        l = Ce.transition;
    try {
        Ce.transition = null, I = 1, gd(e, n, t, r)
    } finally {
        Ce.transition = l, I = r
    }
    return null
}

function gd(e, n, t, r) {
    do bn(); while (ln !== null);
    if ((j & 6) !== 0) throw Error(g(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(g(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (Jc(e, i), e === b && (X = b = null, ne = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || wr || (wr = !0, tc(Fr, function() {
            return bn(), null
        })), i = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || i) {
        i = Ce.transition, Ce.transition = null;
        var o = I;
        I = 1;
        var u = j;
        j |= 4, _o.current = null, dd(e, t), Ya(t, e), $f(gi), Ur = !!yi, gi = yi = null, e.current = t, pd(t), Bc(), j = u, I = o, Ce.transition = i
    } else e.current = t;
    if (wr && (wr = !1, ln = e, nl = l), i = e.pendingLanes, i === 0 && (fn = null), Qc(t.stateNode), he(e, Y()), n !== null)
        for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (el) throw el = !1, e = $i, $i = null, e;
    return (nl & 1) !== 0 && e.tag !== 0 && bn(), i = e.pendingLanes, (i & 1) !== 0 ? e === Ui ? Ot++ : (Ot = 0, Ui = e) : Ot = 0, gn(), null
}

function bn() {
    if (ln !== null) {
        var e = Os(nl),
            n = Ce.transition,
            t = I;
        try {
            if (Ce.transition = null, I = 16 > e ? 16 : e, ln === null) var r = !1;
            else {
                if (e = ln, ln = null, nl = 0, (j & 6) !== 0) throw Error(g(331));
                var l = j;
                for (j |= 4, S = e.current; S !== null;) {
                    var i = S,
                        o = i.child;
                    if ((S.flags & 16) !== 0) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (S = c; S !== null;) {
                                    var h = S;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Lt(8, h, i)
                                    }
                                    var m = h.child;
                                    if (m !== null) m.return = h, S = m;
                                    else
                                        for (; S !== null;) {
                                            h = S;
                                            var p = h.sibling,
                                                w = h.return;
                                            if (Ha(h), h === c) {
                                                S = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = w, S = p;
                                                break
                                            }
                                            S = w
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var k = x.child;
                                if (k !== null) {
                                    x.child = null;
                                    do {
                                        var U = k.sibling;
                                        k.sibling = null, k = U
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, S = o;
                    else e: for (; S !== null;) {
                        if (i = S, (i.flags & 2048) !== 0) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Lt(9, i, i.return)
                        }
                        var f = i.sibling;
                        if (f !== null) {
                            f.return = i.return, S = f;
                            break e
                        }
                        S = i.return
                    }
                }
                var a = e.current;
                for (S = a; S !== null;) {
                    o = S;
                    var d = o.child;
                    if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, S = d;
                    else e: for (o = a; S !== null;) {
                        if (u = S, (u.flags & 2048) !== 0) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    dl(9, u)
                            }
                        } catch (N) {
                            H(u, u.return, N)
                        }
                        if (u === o) {
                            S = null;
                            break e
                        }
                        var y = u.sibling;
                        if (y !== null) {
                            y.return = u.return, S = y;
                            break e
                        }
                        S = u.return
                    }
                }
                if (j = l, gn(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
                    Ue.onPostCommitFiberRoot(ll, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            I = t, Ce.transition = n
        }
    }
    return !1
}

function Qu(e, n, t) {
    n = it(t, n), n = Ma(e, n, 1), e = cn(e, n, 1), n = se(), e !== null && (qt(e, 1, n), he(e, n))
}

function H(e, n, t) {
    if (e.tag === 3) Qu(e, e, t);
    else
        for (; n !== null;) {
            if (n.tag === 3) {
                Qu(n, e, t);
                break
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
                    e = it(t, e), e = ja(n, e, 1), n = cn(n, e, 1), e = se(), n !== null && (qt(n, 1, e), he(n, e));
                    break
                }
            }
            n = n.return
        }
}

function wd(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = se(), e.pingedLanes |= e.suspendedLanes & t, b === e && (ne & t) === t && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > Y() - zo ? _n(e, 0) : Po |= t), he(e, n)
}

function ec(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = ar, ar <<= 1, (ar & 130023424) === 0 && (ar = 4194304)));
    var t = se();
    e = Ge(e, n), e !== null && (qt(e, n, t), he(e, t))
}

function xd(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), ec(e, t)
}

function kd(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(g(314))
    }
    r !== null && r.delete(n), ec(e, t)
}
var nc;
nc = function(e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || pe.current) de = !0;
        else {
            if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return de = !1, sd(e, n, t);
            de = (e.flags & 131072) !== 0
        }
    else de = !1, A && (n.flags & 1048576) !== 0 && la(n, Kr, n.index);
    switch (n.lanes = 0, n.tag) {
        case 2:
            var r = n.type;
            Lr(e, n), e = n.pendingProps;
            var l = nt(n, oe.current);
            qn(n, t), l = ko(null, n, r, e, l, t);
            var i = So();
            return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, me(r) ? (i = !0, Hr(n)) : i = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vo(n), l.updater = cl, n.stateNode = l, l._reactInternals = n, Pi(n, r, e, t), n = Li(null, n, r, !0, i, t)) : (n.tag = 0, A && i && so(n), ue(null, n, l, t), n = n.child), n;
        case 16:
            r = n.elementType;
            e: {
                switch (Lr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Nd(r), e = Le(r, e), l) {
                    case 0:
                        n = Ti(null, n, r, e, t);
                        break e;
                    case 1:
                        n = Iu(null, n, r, e, t);
                        break e;
                    case 11:
                        n = Mu(null, n, r, e, t);
                        break e;
                    case 14:
                        n = ju(null, n, r, Le(r.type, e), t);
                        break e
                }
                throw Error(g(306, r, ""))
            }
            return n;
        case 0:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Ti(e, n, r, l, t);
        case 1:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Iu(e, n, r, l, t);
        case 3:
            e: {
                if ($a(n), e === null) throw Error(g(387));r = n.pendingProps,
                i = n.memoizedState,
                l = i.element,
                sa(e, n),
                Gr(n, r, null, t);
                var o = n.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, n.updateQueue.baseState = i, n.memoizedState = i, n.flags & 256) {
                        l = it(Error(g(423)), n), n = Du(e, n, r, t, l);
                        break e
                    } else if (r !== l) {
                    l = it(Error(g(424)), n), n = Du(e, n, r, t, l);
                    break e
                } else
                    for (ye = an(n.stateNode.containerInfo.firstChild), ge = n, A = !0, Oe = null, t = da(n, null, r, t), n.child = t; t;) t.flags = t.flags & -3 | 4096, t = t.sibling;
                else {
                    if (tt(), r === l) {
                        n = Ze(e, n, t);
                        break e
                    }
                    ue(e, n, r, t)
                }
                n = n.child
            }
            return n;
        case 5:
            return pa(n), e === null && Ei(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wi(r, l) ? o = null : i !== null && wi(r, i) && (n.flags |= 32), Fa(e, n), ue(e, n, o, t), n.child;
        case 6:
            return e === null && Ei(n), null;
        case 13:
            return Ua(e, n, t);
        case 4:
            return yo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = rt(n, null, r, t) : ue(e, n, r, t), n.child;
        case 11:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Mu(e, n, r, l, t);
        case 7:
            return ue(e, n, n.pendingProps, t), n.child;
        case 8:
            return ue(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return ue(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (r = n.type._context, l = n.pendingProps, i = n.memoizedProps, o = l.value, D(Yr, r._currentValue), r._currentValue = o, i !== null)
                    if (Ie(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            n = Ze(e, n, t);
                            break e
                        }
                    } else
                        for (i = n.child, i !== null && (i.return = n); i !== null;) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var s = u.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            s = Qe(-1, t & -t), s.tag = 2;
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var h = c.pending;
                                                h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s
                                            }
                                        }
                                        i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Ci(i.return, t, n), u.lanes |= t;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(g(341));
                                o.lanes |= t, u = o.alternate, u !== null && (u.lanes |= t), Ci(o, t, n), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === n) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                ue(e, n, l.children, t),
                n = n.child
            }
            return n;
        case 9:
            return l = n.type, r = n.pendingProps.children, qn(n, t), l = _e(l), r = r(l), n.flags |= 1, ue(e, n, r, t), n.child;
        case 14:
            return r = n.type, l = Le(r, n.pendingProps), l = Le(r.type, l), ju(e, n, r, l, t);
        case 15:
            return Ia(e, n, n.type, n.pendingProps, t);
        case 17:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Lr(e, n), n.tag = 1, me(r) ? (e = !0, Hr(n)) : e = !1, qn(n, t), ca(n, r, l), Pi(n, r, l, t), Li(null, n, r, !0, e, t);
        case 19:
            return Aa(e, n, t);
        case 22:
            return Da(e, n, t)
    }
    throw Error(g(156, n.tag))
};

function tc(e, n) {
    return zs(e, n)
}

function Sd(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ee(e, n, t, r) {
    return new Sd(e, n, t, r)
}

function Oo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Nd(e) {
    if (typeof e == "function") return Oo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Zi) return 11;
        if (e === Ji) return 14
    }
    return 2
}

function pn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
}

function Mr(e, n, t, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Oo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Fn:
            return Pn(t.children, l, i, n);
        case Gi:
            o = 8, l |= 8;
            break;
        case Jl:
            return e = Ee(12, t, n, l | 2), e.elementType = Jl, e.lanes = i, e;
        case ql:
            return e = Ee(13, t, n, l), e.elementType = ql, e.lanes = i, e;
        case bl:
            return e = Ee(19, t, n, l), e.elementType = bl, e.lanes = i, e;
        case fs:
            return ml(t, l, i, n);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case as:
                    o = 10;
                    break e;
                case cs:
                    o = 9;
                    break e;
                case Zi:
                    o = 11;
                    break e;
                case Ji:
                    o = 14;
                    break e;
                case be:
                    o = 16, r = null;
                    break e
            }
            throw Error(g(130, e == null ? e : typeof e, ""))
    }
    return n = Ee(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n
}

function Pn(e, n, t, r) {
    return e = Ee(7, e, r, n), e.lanes = t, e
}

function ml(e, n, t, r) {
    return e = Ee(22, e, r, n), e.elementType = fs, e.lanes = t, e.stateNode = {
        isHidden: !1
    }, e
}

function Yl(e, n, t) {
    return e = Ee(6, e, null, n), e.lanes = t, e
}

function Xl(e, n, t) {
    return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, n
}

function Ed(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Mo(e, n, t, r, l, i, o, u, s) {
    return e = new Ed(e, n, t, u, s), n === 1 ? (n = 1, i === !0 && (n |= 8)) : n = 0, i = Ee(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, vo(i), e
}

function Cd(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t
    }
}

function rc(e) {
    if (!e) return hn;
    e = e._reactInternals;
    e: {
        if (jn(e) !== e || e.tag !== 1) throw Error(g(170));
        var n = e;do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (me(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            n = n.return
        } while (n !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var t = e.type;
        if (me(t)) return ta(e, t, n)
    }
    return n
}

function lc(e, n, t, r, l, i, o, u, s) {
    return e = Mo(t, r, !0, e, l, i, o, u, s), e.context = rc(null), t = e.current, r = se(), l = dn(t), i = Qe(r, l), i.callback = n != null ? n : null, cn(t, i, l), e.current.lanes = l, qt(e, l, r), he(e, r), e
}

function hl(e, n, t, r) {
    var l = n.current,
        i = se(),
        o = dn(l);
    return t = rc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Qe(i, o), n.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = cn(l, n, o), e !== null && (je(e, l, o, i), Pr(e, l, o)), o
}

function rl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ku(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n
    }
}

function jo(e, n) {
    Ku(e, n), (e = e.alternate) && Ku(e, n)
}

function _d() {
    return null
}
var ic = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Io(e) {
    this._internalRoot = e
}
vl.prototype.render = Io.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(g(409));
    hl(e, n, null, null)
};
vl.prototype.unmount = Io.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        On(function() {
            hl(null, e, null, null)
        }), n[Xe] = null
    }
};

function vl(e) {
    this._internalRoot = e
}
vl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var n = Is();
        e = {
            blockedOn: null,
            target: e,
            priority: n
        };
        for (var t = 0; t < nn.length && n !== 0 && n < nn[t].priority; t++);
        nn.splice(t, 0, e), t === 0 && Fs(e)
    }
};

function Do(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Yu() {}

function Pd(e, n, t, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = rl(o);
                i.call(c)
            }
        }
        var o = lc(n, r, e, 0, null, !1, !1, "", Yu);
        return e._reactRootContainer = o, e[Xe] = o.current, Wt(e.nodeType === 8 ? e.parentNode : e), On(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var c = rl(s);
            u.call(c)
        }
    }
    var s = Mo(e, 0, !1, null, null, !1, !1, "", Yu);
    return e._reactRootContainer = s, e[Xe] = s.current, Wt(e.nodeType === 8 ? e.parentNode : e), On(function() {
        hl(n, s, t, r)
    }), s
}

function gl(e, n, t, r, l) {
    var i = t._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = rl(o);
                u.call(s)
            }
        }
        hl(n, o, e, l)
    } else o = Pd(t, n, e, l, r);
    return rl(o)
}
Ms = function(e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = St(n.pendingLanes);
                t !== 0 && (eo(n, t | 1), he(n, Y()), (j & 6) === 0 && (ot = Y() + 500, gn()))
            }
            break;
        case 13:
            On(function() {
                var r = Ge(e, 1);
                if (r !== null) {
                    var l = se();
                    je(r, e, 1, l)
                }
            }), jo(e, 1)
    }
};
no = function(e) {
    if (e.tag === 13) {
        var n = Ge(e, 134217728);
        if (n !== null) {
            var t = se();
            je(n, e, 134217728, t)
        }
        jo(e, 134217728)
    }
};
js = function(e) {
    if (e.tag === 13) {
        var n = dn(e),
            t = Ge(e, n);
        if (t !== null) {
            var r = se();
            je(t, e, n, r)
        }
        jo(e, n)
    }
};
Is = function() {
    return I
};
Ds = function(e, n) {
    var t = I;
    try {
        return I = e, n()
    } finally {
        I = t
    }
};
ai = function(e, n, t) {
    switch (n) {
        case "input":
            if (ti(e, t), n = t.name, t.type === "radio" && n != null) {
                for (t = e; t.parentNode;) t = t.parentNode;
                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var l = sl(r);
                        if (!l) throw Error(g(90));
                        ps(r), ti(r, l)
                    }
                }
            }
            break;
        case "textarea":
            hs(e, t);
            break;
        case "select":
            n = t.value, n != null && Xn(e, !!t.multiple, n, !1)
    }
};
Ss = To;
Ns = On;
var zd = {
        usingClientEntryPoint: !1,
        Events: [er, Wn, sl, xs, ks, To]
    },
    wt = {
        findFiberByHostInstance: Nn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Td = {
        bundleType: wt.bundleType,
        version: wt.version,
        rendererPackageName: wt.rendererPackageName,
        rendererConfig: wt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Je.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = _s(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: wt.findFiberByHostInstance || _d,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber) try {
        ll = xr.inject(Td), Ue = xr
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
xe.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Do(n)) throw Error(g(200));
    return Cd(e, n, null, t)
};
xe.createRoot = function(e, n) {
    if (!Do(e)) throw Error(g(299));
    var t = !1,
        r = "",
        l = ic;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Mo(e, 1, !1, null, null, t, !1, r, l), e[Xe] = n.current, Wt(e.nodeType === 8 ? e.parentNode : e), new Io(n)
};
xe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
    return e = _s(n), e = e === null ? null : e.stateNode, e
};
xe.flushSync = function(e) {
    return On(e)
};
xe.hydrate = function(e, n, t) {
    if (!yl(n)) throw Error(g(200));
    return gl(null, e, n, !0, t)
};
xe.hydrateRoot = function(e, n, t) {
    if (!Do(e)) throw Error(g(405));
    var r = t != null && t.hydratedSources || null,
        l = !1,
        i = "",
        o = ic;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = lc(n, null, e, 1, t != null ? t : null, l, !1, i, o), e[Xe] = n.current, Wt(e), r)
        for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
    return new vl(n)
};
xe.render = function(e, n, t) {
    if (!yl(n)) throw Error(g(200));
    return gl(null, e, n, !1, t)
};
xe.unmountComponentAtNode = function(e) {
    if (!yl(e)) throw Error(g(40));
    return e._reactRootContainer ? (On(function() {
        gl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Xe] = null
        })
    }), !0) : !1
};
xe.unstable_batchedUpdates = To;
xe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!yl(t)) throw Error(g(200));
    if (e == null || e._reactInternals === void 0) throw Error(g(38));
    return gl(e, n, t, !1, r)
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (t) {
            console.error(t)
        }
    }
    n(), e.exports = xe
})(ls);
var Xu = ls.exports;
Gl.createRoot = Xu.createRoot, Gl.hydrateRoot = Xu.hydrateRoot;
const z = {
        boxWidth: "xl:max-w-[1280px] w-full",
        heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
        paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
        flexCenter: "flex justify-center items-center",
        flexStart: "flex justify-center items-start",
        paddingX: "sm:px-16 px-6",
        paddingY: "sm:py-16 py-6",
        padding: "sm:px-16 px-6 sm:py-12 py-4",
        marginX: "sm:mx-16 mx-6",
        marginY: "sm:my-16 my-6"
    },
    Ke = {
        section: `flex md:flex-row flex-col ${z.paddingY}`,
        sectionReverse: `flex md:flex-row flex-col-reverse ${z.paddingY}`,
        sectionImgReverse: `flex-1 flex ${z.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
        sectionImg: `flex-1 flex ${z.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
        sectionInfo: `flex-1 ${z.flexStart} flex-col`
    },
    Ld = "/assets/airbnb.ac0ba47e.png",
    Rd = "/assets/bill.fd47dad8.png",
    Od = "/assets/binance.ef218256.png",
    Md = "/assets/card.af071def.png",
    jd = "/assets/coinbase.fd06c89f.png",
    Id = "/assets/dropbox.fb49a0e9.png",
    oc = "/assets/logo.png",
    Dd = "/assets/quotes.a87d5e6d.svg",
    Fd = "/assets/robot.352cd501.png",
    $d = "/assets/Send.454b3199.svg",
    Ud = "/assets/Shield.6d9e87e5.svg",
    Ad = "/assets/Star.b8bf87ea.svg",
    Wd = "/assets/menu.e0613cf3.svg",
    Bd = "/assets/close.945782e8.svg",
    Vd = "/assets/google.3035153f.svg",
    Hd = "/assets/apple.994d47a8.svg",
    Qd = "/assets/arrow-up.012ff21b.svg",
    Kd = "/assets/Discount.61d9dc08.svg",
    Yd = "/assets/facebook.b1172216.svg",
    Xd = "/assets/instagram.a54e883a.svg",
    Gd = "/assets/linkedin.3be30c66.svg",
    Zd = "/assets/twitter.8f349e28.svg",
    Jd = "/assets/farhan.png",
    qd = "/assets/ark.png",
    bd = "/assets/aditya.png",
    kr = [{
        id: "home",
        title: "Home"
    }, {
        id: "features",
        title: "Features"
    }, {
        id: "product",
        title: "Product"
    }, {
        id: "clients",
        title: "Clients"
    }],
    uc = [{
        id: "feature-1",
        icon: Ad,
        title: "Discovery",
        content: "We get on a call to understand your business and pain points. This helps us understand how we can help you improve your businesss"
    }, {
        id: "feature-2",
        icon: Ud,
        title: "Development",
        content: "We start the software development, we'll provide updates to ensure the final product aligns with your expectations."
    }, {
        id: "feature-3",
        icon: $d,
        title: "Delivery",
        content: "Committed to a lasting partnership, we aim to continuously evolve and scale your software alongside your business, ensuring alignment with goals and adaptation to future challenges.."
    }],
    ep = [{
        id: "feedback-1",
        content: "NexaWings made my SAAS idea a reality with GoCPT! This AI-powered software will  revolutionize healthcare billing..",
        name: "Farhan Anis",
        title: "Founder & Leader",
        img: Jd
    }, {
        id: "feedback-2",
        content: "Storyia has been brought to life in an exceptional manner by NexaWings. They exceeding our expectations.",
        name: "Arkodeep Chatterjee",
        title: "Founder & Leader",
        img: qd
    }, {
        id: "feedback-3",
        content: "NexaWings played a pivotal role in transforming my restaurant operations. Their expertise in implementing chat bots significantly improved customer operations experience.",
        name: "Aditya Kumar",
        title: "Founder & Leader",
        img: bd
    }],
    np = [{
        id: "stats-1",
        title: "Hours Saved",
        value: "2300+"
    }, {
        id: "stats-2",
        title: "clients served",
        value: "30+"
    }, {
        id: "stats-3",
        title: "Saved in operations",
        value: "$100k++"
    }],
    tp = [{
        title: "Useful Links",
        links: [{
            name: "Content",
            link: ""
        }, {
            name: "How it Works",
            link: ""
        }, {
            name: "Create",
            link: ""
        }, {
            name: "Explore",
            link: ""
        }, {
            name: "Terms & Services",
            link: ""
        }]
    }, {
        title: "Community",
        links: [{
            name: "Help Center",
            link: ""
        }, {
            name: "Partners",
            link: ""
        }, {
            name: "Suggestions",
            link: ""
        }, {
            name: "Blog",
            link: ""
        }, {
            name: "Newsletters",
            link: ""
        }]
    }, {
        title: "Partner",
        links: [{
            name: "Our Partner",
            link: ""
        }, {
            name: "Become a Partner",
            link: ""
        }]
    }],
    Gu = [{
        id: "social-media-1",
        icon: Xd,
        link: "https://www.instagram.com/"
    }, {
        id: "social-media-2",
        icon: Yd,
        link: "https://www.facebook.com/"
    }, {
        id: "social-media-3",
        icon: Zd,
        link: "https://www.twitter.com/"
    }, {
        id: "social-media-4",
        icon: Gd,
        link: "https://www.linkedin.com/"
    }],
    rp = [{
        id: "client-1",
        logo: Ld
    }, {
        id: "client-2",
        logo: Od
    }, {
        id: "client-3",
        logo: jd
    }, {
        id: "client-4",
        logo: Id
    }];
var Fo = {
        exports: {}
    },
    wl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp = Zt.exports,
    ip = Symbol.for("react.element"),
    op = Symbol.for("react.fragment"),
    up = Object.prototype.hasOwnProperty,
    sp = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ap = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function sc(e, n, t) {
    var r, l = {},
        i = null,
        o = null;
    t !== void 0 && (i = "" + t), n.key !== void 0 && (i = "" + n.key), n.ref !== void 0 && (o = n.ref);
    for (r in n) up.call(n, r) && !ap.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
    return {
        $$typeof: ip,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: sp.current
    }
}
wl.Fragment = op;
wl.jsx = sc;
wl.jsxs = sc;
(function(e) {
    e.exports = wl
})(Fo);
const v = Fo.exports.jsx,
    L = Fo.exports.jsxs,
    cp = () => {
        const [e, n] = Zt.exports.useState(!1);
        return L("nav", {
            className: "w-full flex py-6 justify-between items-center navbar",
            children: [v("img", {
                src: oc,
                alt: "hoobank",
                className: "w-[124px] h-[32px]"
            }), v("ul", {
                className: "list-none sm:flex hidden justify-end items-center flex-1",
                children: kr.map((t, r) => v("li", {
                    className: `font-poppins font-normal cursor-pointer text-[16px] ${r===kr.length-1?"mr-0":"mr-10"} text-white`,
                    children: v("a", {
                        href: `#${t.id}`,
                        children: t.title
                    })
                }, r))
            }), L("div", {
                className: "sm:hidden flex flex-1 justify-end items-center",
                children: [v("img", {
                    src: e ? Bd : Wd,
                    alt: "menu",
                    className: "w-[25px] h-[25px] object-contain",
                    onClick: () => n(t => !t)
                }), v("div", {
                    className: `${e?"flex":"hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`,
                    children: v("ul", {
                        className: "list-none flex flex-col justify-end items-center flex-1",
                        children: kr.map((t, r) => v("li", {
                            className: `font-poppins font-normal cursor-pointer text-[16px] ${r===kr.length-1?"mr-0":"mb-4"} text-white`,
                            children: v("a", {
                                href: `#${t.id}`,
                                children: t.title
                            })
                        }, r))
                    })
                })]
            })]
        })
    },
    fp = () => L("section", {
        id: "product",
        className: Ke.sectionReverse,
        children: [L("div", {
            className: Ke.sectionImgReverse,
            children: [v("img", {
                src: Rd,
                alt: "billing",
                className: "w-[100%] h-[100%] relative z-[5]"
            }), v("div", {
                className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
            }), v("div", {
                className: "absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"
            })]
        }), L("div", {
            className: Ke.sectionInfo,
            children: [L("h2", {
                className: z.heading2,
                children: ["Turbocharge with AI", v("br", {
                    className: "sm:block hidden"
                }), " "]
            }), v("p", {
                className: `${z.paragraph} max-w-[470px] mt-5`,
                children: ".Website Chatbot Customer Service Automation Data Analysis."
            }), L("div", {
                className: "flex flex-row flex-wrap sm:mt-10 mt-6",
                children: [v("img", {
                    src: Hd,
                    alt: "apple_store",
                    className: "w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
                }), v("img", {
                    src: Vd,
                    alt: "play_store",
                    className: "w-[128px] h-[42px] object-contain cursor-pointer"
                })]
            })]
        })]
    }),
    $o = ({
        styles: e
    }) => v("button", {
        type: "button",
        className: `py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${e} rounded-[10px]`,
        children: "Get Started"
    }),
    dp = () => L("section", {
        className: Ke.section,
        children: [L("div", {
            className: Ke.sectionInfo,
            children: [L("h2", {
                className: z.heading2,
                children: ["Innovate. Support. Conquer: Custom Software Domains ", v("br", {
                    className: "sm:block hidden"
                }), " "]
            }), v("p", {
                className: `${z.paragraph} max-w-[470px] mt-5`,
                children: "Custom Web Applications Customer Support Software Enterprise Software"
            }), v($o, {
                styles: "mt-10"
            })]
        }), v("div", {
            className: Ke.sectionImg,
            children: v("img", {
                src: Md,
                alt: "card",
                className: "w-[100%] h-[100%]"
            })
        })]
    }),
    pp = ({
        icon: e,
        title: n,
        content: t,
        index: r
    }) => L("div", {
        className: `flex flex-row p-6 rounded-[20px] ${r!==uc.length-1?"mb-6":"mb-0"} feature-card`,
        children: [v("div", {
            className: `w-[64px] h-[64px] rounded-full ${z.flexCenter} bg-dimBlue`,
            children: v("img", {
                src: e,
                alt: "icon",
                className: "w-[50%] h-[50%] object-contain"
            })
        }), L("div", {
            className: "flex-1 flex flex-col ml-3",
            children: [v("h4", {
                className: "font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1",
                children: n
            }), v("p", {
                className: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1",
                children: t
            })]
        })]
    }),
    mp = () => L("section", {
        id: "features",
        className: Ke.section,
        children: [L("div", {
            className: Ke.sectionInfo,
            children: [L("h2", {
                className: z.heading2,
                children: ["Your business,  ", v("br", {
                    className: "sm:block hidden"
                }), " our automation expertise."]
            }), v("p", {
                className: `${z.paragraph} max-w-[470px] mt-5`,
                children: "Schedule a call now for tailored solutions that evolve with your needs and ensure sustained growth. Embrace efficiency, enhance productivity – automate with us!."
            }), v($o, {
                styles: "mt-10"
            })]
        }), v("div", {
            className: `${Ke.sectionImg} flex-col`,
            children: uc.map((e, n) => v(pp, { ...e,
                index: n
            }, e.id))
        })]
    }),
    hp = () => v("section", {
        className: `${z.flexCenter} my-4`,
        children: v("div", {
            className: `${z.flexCenter} flex-wrap w-full`,
            children: rp.map(e => v("div", {
                className: `flex-1 ${z.flexCenter} sm:min-w-[192px] min-w-[120px]`,
                children: v("img", {
                    src: e.logo,
                    alt: "client",
                    className: "sm:w-[192px] w-[100px] object-contain"
                })
            }, e.id))
        })
    }),
    vp = () => L("section", {
        className: `${z.flexCenter} ${z.marginY} ${z.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
        children: [L("div", {
            className: "flex-1 flex flex-col",
            children: [v("h2", {
                className: z.heading2,
                children: "Let's try our service now!"
            }), v("p", {
                className: `${z.paragraph} max-w-[470px] mt-5`,
                children: "Everything you need to grow your business anywhere on the planet.."
            })]
        }), v("div", {
            className: `${z.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
            children: v($o, {})
        })]
    }),
    yp = () => v("section", {
        className: `${z.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`,
        children: np.map((e, n) => L("div", {
            className: "flex-1 flex justify-start items-center flex-row m-3",
            children: [v("h4", {
                className: "font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white",
                children: e.value
            }), v("p", {
                className: "font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3",
                children: e.title
            })]
        }, n))
    }),
    gp = () => L("section", {
        className: `${z.flexCenter} ${z.paddingY} flex-col`,
        children: [L("div", {
            className: `${z.flexStart} md:flex-row flex-col mb-8 w-full`,
            children: [L("div", {
                className: "flex-1 flex flex-col justify-start mr-10",
                children: [v("img", {
                    src: oc,
                    alt: "Nexawings",
                    className: "w-[200px] h-[72px] object-contain"
                }), v("p", {
                    className: `${z.paragraph} max-w-[310px] mt-4`,
                    children: ""
                })]
            }), v("div", {
                className: "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10",
                children: tp.map(e => L("div", {
                    className: "flex flex-col ss:my-0 my-4 min-w-[150px]",
                    children: [v("h4", {
                        className: "font-poppins font-medium text-[18px] leading-[27px] text-white",
                        children: e.title
                    }), v("ul", {
                        className: "list-none mt-4",
                        children: e.links.map((n, t) => v("li", {
                            className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${t!==e.links.length-1?"mb-4":"mb-0"}`,
                            children: n.name
                        }, n.name))
                    })]
                }, e.key))
            })]
        }), L("div", {
            className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]",
            children: [v("p", {
                className: "font-poppins font-normal text-center text-[18px] leading-[27px] text-white",
                children: "2024 Nexawings. All Rights Reserved."
            }), v("div", {
                className: "flex flex-row md:mt-0 mt-6",
                children: Gu.map((e, n) => v("img", {
                    src: e.icon,
                    alt: e.id,
                    className: `w-[21px] h-[21px] object-contain cursor-pointer ${n!==Gu.length-1?"mr-6":"mr-0"}`
                }, e.id))
            })]
        })]
    }),
    wp = ({
        content: e,
        name: n,
        title: t,
        img: r
    }) => L("div", {
        className: "flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
        children: [v("img", {
            src: Dd,
            alt: "quotes",
            className: "w-[42px] h-[27px] object-contain"
        }), v("p", {
            className: "font-poppins font-normal text-[18px] leading-[32px] text-white my-10",
            children: e
        }), L("div", {
            className: "flex flex-row",
            children: [v("img", {
                src: r,
                alt: n,
                className: "w-[48px] h-[48px] rounded-full"
            }), L("div", {
                className: "flex flex-col ml-4",
                children: [v("h4", {
                    className: "font-poppins font-semibold text-[20px] leading-[32px] text-white",
                    children: n
                }), v("p", {
                    className: "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite",
                    children: t
                })]
            })]
        })]
    }),
    xp = () => L("section", {
        id: "clients",
        className: `${z.paddingY} ${z.flexCenter} flex-col relative`,
        children: [v("div", {
            className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"
        }), L("div", {
            className: "w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]",
            children: [L("h1", {
                className: z.heading2,
                children: ["What people are ", v("br", {
                    className: "sm:block hidden"
                }), " saying about us"]
            }), v("div", {
                className: "w-full md:mt-0 mt-6",
                children: v("p", {
                    className: `${z.paragraph} text-left max-w-[450px]`,
                    children: "Transforming ideas into reality with cutting edge solutions."
                })
            })]
        }), v("div", {
            className: "flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]",
            children: ep.map(e => v(wp, { ...e
            }, e.id))
        })]
    }),
    Zu = () => v("div", {
        className: `${z.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`,
        children: L("div", {
            className: `${z.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`,
            children: [L("div", {
                className: `${z.flexStart} flex-row`,
                children: [v("p", {
                    className: "font-poppins font-medium text-[18px] leading-[23px] mr-2",
                    children: v("span", {
                        className: "text-gradient",
                        children: "Get"
                    })
                }), v("img", {
                    src: Qd,
                    alt: "arrowUp",
                    className: "w-[23px] h-[23px] object-contain"
                })]
            }), v("p", {
                className: "font-poppins font-medium text-[18px] leading-[23px]",
                children: v("span", {
                    className: "text-gradient",
                    children: "Started"
                })
            })]
        })
    }),
    kp = () => L("section", {
        id: "home",
        className: `flex md:flex-row flex-col ${z.paddingY}`,
        children: [L("div", {
            className: `flex-1 ${z.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
            children: [L("div", {
                className: "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
                children: [v("img", {
                    src: Kd,
                    alt: "discount",
                    className: "w-[32px] h-[32px]"
               
                })]
            }), L("div", {
                className: "flex flex-row justify-between items-center w-full",
                children: [L("h1", {
                    className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]",
                    children: ["Improve", v("br", {
                        className: "sm:block hidden"
                    }), " ", v("span", {
                        className: "text-gradient",
                        children: "Efficiency,"
                    }), " "]
                }), v("div", {
                    className: "ss:flex hidden md:mr-4 mr-0",
                    children: v(Zu, {})
                })]
            }), v("h1", {
                className: "flex font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full",
                children: "Increase Profits."
            }), v("p", {
                className: `${z.paragraph} max-w-[470px] mt-5`,
                children: " Automate your processes by leveraging the power of AI and Custom Software. Cut costs, earn more, and focus on the highest-value activities.."
            })]
        }), L("div", {
            className: `flex-1 flex ${z.flexCenter} md:my-0 my-10 relative`,
            children: [v("img", {
                src: Fd,
                alt: "robot hand",
                className: "w-[100%] h-[100%] relative z-[5]"
            }), v("div", {
                className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
            }), v("div", {
                className: "absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"
            }), v("div", {
                className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
            })]
        }), v("div", {
            className: `ss:hidden ${z.flexCenter}`,
            children: v(Zu, {})
        })]
    }),
    Sp = () => L("div", {
        className: "bg-primary w-full overflow-hidden",
        children: [v("div", {
            className: `${z.paddingX} ${z.flexCenter}`,
            children: v("div", {
                className: `${z.boxWidth}`,
                children: v(cp, {})
            })
        }), v("div", {
            className: `${z.flexStart} bg-primary`,
            children: v("div", {
                className: `${z.boxWidth}`,
                children: v(kp, {})
            })
        }), v("div", {
            className: `${z.flexStart} ${z.paddingX} bg-primary`,
            children: L("div", {
                className: `${z.boxWidth}`,
                children: [v(yp, {}), v(mp, {}), v(fp, {}), v(dp, {}), v(xp, {}), v(hp, {}), v(vp, {}), v(gp, {})]
            })
        })]
    });
Gl.createRoot(document.getElementById("root")).render(v(_c.StrictMode, {
    children: v(Sp, {})
}));
