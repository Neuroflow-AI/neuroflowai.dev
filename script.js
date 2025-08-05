(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var _f = { exports: {} },
  wo = {},
  Of = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for('react.element'),
  Pm = Symbol.for('react.portal'),
  Tm = Symbol.for('react.fragment'),
  Cm = Symbol.for('react.strict_mode'),
  Em = Symbol.for('react.profiler'),
  Mm = Symbol.for('react.provider'),
  Am = Symbol.for('react.context'),
  Dm = Symbol.for('react.forward_ref'),
  Lm = Symbol.for('react.suspense'),
  Rm = Symbol.for('react.memo'),
  Vm = Symbol.for('react.lazy'),
  uu = Symbol.iterator;
function Nm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uu && e[uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ff = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  If = Object.assign,
  zf = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Ff);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Bf() {}
Bf.prototype = Kn.prototype;
function Ol(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Ff);
}
var Fl = (Ol.prototype = new Bf());
Fl.constructor = Ol;
If(Fl, Kn.prototype);
Fl.isPureReactComponent = !0;
var cu = Array.isArray,
  Uf = Object.prototype.hasOwnProperty,
  Il = { current: null },
  $f = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Uf.call(t, r) && !$f.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Yr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Il.current,
  };
}
function jm(e, t) {
  return {
    $$typeof: Yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function zl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Yr;
}
function _m(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fu = /\/+/g;
function $o(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _m('' + e.key)
    : t.toString(36);
}
function Mi(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Yr:
          case Pm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + $o(s, 0) : r),
      cu(i)
        ? ((n = ''),
          e != null && (n = e.replace(fu, '$&/') + '/'),
          Mi(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (zl(i) &&
            (i = jm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(fu, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), cu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + $o(o, l);
      s += Mi(o, t, n, a, i);
    }
  else if (((a = Nm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + $o(o, l++)), (s += Mi(o, t, n, a, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Mi(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Om(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Ai = { transition: null },
  Fm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: Il,
  };
function Hf() {
  throw Error('act(...) is not supported in production builds of React.');
}
j.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
j.Component = Kn;
j.Fragment = Tm;
j.Profiler = Em;
j.PureComponent = Ol;
j.StrictMode = Cm;
j.Suspense = Lm;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
j.act = Hf;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = If({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Il.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Uf.call(t, a) &&
        !$f.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Yr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Am,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mm, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Wf;
j.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Dm, render: e };
};
j.isValidElement = zl;
j.lazy = function (e) {
  return { $$typeof: Vm, _payload: { _status: -1, _result: e }, _init: Om };
};
j.memo = function (e, t) {
  return { $$typeof: Rm, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Ai.transition;
  Ai.transition = {};
  try {
    e();
  } finally {
    Ai.transition = t;
  }
};
j.unstable_act = Hf;
j.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return xe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
j.useId = function () {
  return xe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return xe.current.useRef(e);
};
j.useState = function (e) {
  return xe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return xe.current.useTransition();
};
j.version = '18.3.1';
Of.exports = j;
var R = Of.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = R,
  zm = Symbol.for('react.element'),
  Bm = Symbol.for('react.fragment'),
  Um = Object.prototype.hasOwnProperty,
  $m = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Um.call(t, r) && !Wm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: $m.current,
  };
}
wo.Fragment = Bm;
wo.jsx = Kf;
wo.jsxs = Kf;
_f.exports = wo;
var w = _f.exports,
  Gf = { exports: {} },
  Ve = {},
  Qf = { exports: {} },
  Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, V) {
    var N = M.length;
    M.push(V);
    e: for (; 0 < N; ) {
      var Z = (N - 1) >>> 1,
        ie = M[Z];
      if (0 < i(ie, V)) (M[Z] = V), (M[N] = ie), (N = Z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var V = M[0],
      N = M.pop();
    if (N !== V) {
      M[0] = N;
      e: for (var Z = 0, ie = M.length, oi = ie >>> 1; Z < oi; ) {
        var $t = 2 * (Z + 1) - 1,
          Uo = M[$t],
          Wt = $t + 1,
          si = M[Wt];
        if (0 > i(Uo, N))
          Wt < ie && 0 > i(si, Uo)
            ? ((M[Z] = si), (M[Wt] = N), (Z = Wt))
            : ((M[Z] = Uo), (M[$t] = N), (Z = $t));
        else if (Wt < ie && 0 > i(si, N)) (M[Z] = si), (M[Wt] = N), (Z = Wt);
        else break e;
      }
    }
    return V;
  }
  function i(M, V) {
    var N = M.sortIndex - V.sortIndex;
    return N !== 0 ? N : M.id - V.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    g = !1,
    v = !1,
    T = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= M)
        r(u), (V.sortIndex = V.expirationTime), t(a, V);
      else break;
      V = n(u);
    }
  }
  function x(M) {
    if (((v = !1), m(M), !g))
      if (n(a) !== null) (g = !0), ii(S);
      else {
        var V = n(u);
        V !== null && ee(x, V.startTime - M);
      }
  }
  function S(M, V) {
    (g = !1), v && ((v = !1), p(P), (P = -1)), (y = !0);
    var N = d;
    try {
      for (
        m(V), f = n(a);
        f !== null && (!(f.expirationTime > V) || (M && !re()));

      ) {
        var Z = f.callback;
        if (typeof Z == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var ie = Z(f.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ie == 'function' ? (f.callback = ie) : f === n(a) && r(a),
            m(V);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var oi = !0;
      else {
        var $t = n(u);
        $t !== null && ee(x, $t.startTime - V), (oi = !1);
      }
      return oi;
    } finally {
      (f = null), (d = N), (y = !1);
    }
  }
  var C = !1,
    E = null,
    P = -1,
    _ = 5,
    L = -1;
  function re() {
    return !(e.unstable_now() - L < _);
  }
  function yt() {
    if (E !== null) {
      var M = e.unstable_now();
      L = M;
      var V = !0;
      try {
        V = E(!0, M);
      } finally {
        V ? Ut() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var Ut;
  if (typeof h == 'function')
    Ut = function () {
      h(yt);
    };
  else if (typeof MessageChannel < 'u') {
    var qn = new MessageChannel(),
      au = qn.port2;
    (qn.port1.onmessage = yt),
      (Ut = function () {
        au.postMessage(null);
      });
  } else
    Ut = function () {
      T(yt, 0);
    };
  function ii(M) {
    (E = M), C || ((C = !0), Ut());
  }
  function ee(M, V) {
    P = T(function () {
      M(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), ii(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = d;
      }
      var N = d;
      d = V;
      try {
        return M();
      } finally {
        d = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var N = d;
      d = M;
      try {
        return V();
      } finally {
        d = N;
      }
    }),
    (e.unstable_scheduleCallback = function (M, V, N) {
      var Z = e.unstable_now();
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? Z + N : Z))
          : (N = Z),
        M)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = N + ie),
        (M = {
          id: c++,
          callback: V,
          priorityLevel: M,
          startTime: N,
          expirationTime: ie,
          sortIndex: -1,
        }),
        N > Z
          ? ((M.sortIndex = N),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (v ? (p(P), (P = -1)) : (v = !0), ee(x, N - Z)))
          : ((M.sortIndex = ie), t(a, M), g || y || ((g = !0), ii(S))),
        M
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (M) {
      var V = d;
      return function () {
        var N = d;
        d = V;
        try {
          return M.apply(this, arguments);
        } finally {
          d = N;
        }
      };
    });
})(Xf);
Qf.exports = Xf;
var Hm = Qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km = R,
  Le = Hm;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Yf = new Set(),
  Mr = {};
function an(e, t) {
  _n(e, t), _n(e + 'Capture', t);
}
function _n(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++) Yf.add(t[e]);
}
var ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ms = Object.prototype.hasOwnProperty,
  Gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  hu = {};
function Qm(e) {
  return Ms.call(hu, e)
    ? !0
    : Ms.call(du, e)
    ? !1
    : Gm.test(e)
    ? (hu[e] = !0)
    : ((du[e] = !0), !1);
}
function Xm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ym(e, t, n, r) {
  if (t === null || typeof t > 'u' || Xm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bl = /[\-:]([a-z])/g;
function Ul(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Bl, Ul);
    ce[t] = new we(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Bl, Ul);
    ce[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Bl, Ul);
  ce[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ym(t, n, i, r) && (n = null),
    r || i === null
      ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ai = Symbol.for('react.element'),
  dn = Symbol.for('react.portal'),
  hn = Symbol.for('react.fragment'),
  Wl = Symbol.for('react.strict_mode'),
  As = Symbol.for('react.profiler'),
  Zf = Symbol.for('react.provider'),
  qf = Symbol.for('react.context'),
  Hl = Symbol.for('react.forward_ref'),
  Ds = Symbol.for('react.suspense'),
  Ls = Symbol.for('react.suspense_list'),
  Kl = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  Jf = Symbol.for('react.offscreen'),
  pu = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pu && e[pu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Q = Object.assign,
  Wo;
function lr(e) {
  if (Wo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wo = (t && t[1]) || '';
    }
  return (
    `
` +
    Wo +
    e
  );
}
var Ho = !1;
function Ko(e, t) {
  if (!e || Ho) return '';
  Ho = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ho = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? lr(e) : '';
}
function Zm(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr('Lazy');
    case 13:
      return lr('Suspense');
    case 19:
      return lr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return '';
  }
}
function Rs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case hn:
      return 'Fragment';
    case dn:
      return 'Portal';
    case As:
      return 'Profiler';
    case Wl:
      return 'StrictMode';
    case Ds:
      return 'Suspense';
    case Ls:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qf:
        return (e.displayName || 'Context') + '.Consumer';
      case Zf:
        return (e._context.displayName || 'Context') + '.Provider';
      case Hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Kl:
        return (
          (t = e.displayName || null), t !== null ? t : Rs(e.type) || 'Memo'
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return Rs(e(t));
        } catch {}
    }
  return null;
}
function qm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Rs(t);
    case 8:
      return t === Wl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function bf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Jm(e) {
  var t = bf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = Jm(e));
}
function ed(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = bf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $i(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vs(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function td(e, t) {
  (t = t.checked), t != null && $l(e, 'checked', t, !1);
}
function Ns(e, t) {
  td(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? js(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && js(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function js(e, t, n) {
  (t !== 'number' || $i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ar = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function nd(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function rd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Os(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? rd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ci,
  id = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ci = ci || document.createElement('div'),
          ci.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
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
    strokeWidth: !0,
  },
  bm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(pr).forEach(function (e) {
  bm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
  });
});
function od(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (pr.hasOwnProperty(e) && pr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = od(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var e0 = Q(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Fs(e, t) {
  if (t) {
    if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function Is(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var zs = null;
function Gl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bs = null,
  Ln = null,
  Rn = null;
function xu(e) {
  if ((e = Jr(e))) {
    if (typeof Bs != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Co(t)), Bs(e.stateNode, e.type, t));
  }
}
function ld(e) {
  Ln ? (Rn ? Rn.push(e) : (Rn = [e])) : (Ln = e);
}
function ad() {
  if (Ln) {
    var e = Ln,
      t = Rn;
    if (((Rn = Ln = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
  }
}
function ud(e, t) {
  return e(t);
}
function cd() {}
var Go = !1;
function fd(e, t, n) {
  if (Go) return e(t, n);
  Go = !0;
  try {
    return ud(e, t, n);
  } finally {
    (Go = !1), (Ln !== null || Rn !== null) && (cd(), ad());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Co(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var Us = !1;
if (ct)
  try {
    var bn = {};
    Object.defineProperty(bn, 'passive', {
      get: function () {
        Us = !0;
      },
    }),
      window.addEventListener('test', bn, bn),
      window.removeEventListener('test', bn, bn);
  } catch {
    Us = !1;
  }
function t0(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mr = !1,
  Wi = null,
  Hi = !1,
  $s = null,
  n0 = {
    onError: function (e) {
      (mr = !0), (Wi = e);
    },
  };
function r0(e, t, n, r, i, o, s, l, a) {
  (mr = !1), (Wi = null), t0.apply(n0, arguments);
}
function i0(e, t, n, r, i, o, s, l, a) {
  if ((r0.apply(this, arguments), mr)) {
    if (mr) {
      var u = Wi;
      (mr = !1), (Wi = null);
    } else throw Error(k(198));
    Hi || ((Hi = !0), ($s = u));
  }
}
function un(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (un(e) !== e) throw Error(k(188));
}
function o0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = un(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wu(i), e;
        if (o === r) return wu(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function hd(e) {
  return (e = o0(e)), e !== null ? pd(e) : null;
}
function pd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var md = Le.unstable_scheduleCallback,
  Su = Le.unstable_cancelCallback,
  s0 = Le.unstable_shouldYield,
  l0 = Le.unstable_requestPaint,
  J = Le.unstable_now,
  a0 = Le.unstable_getCurrentPriorityLevel,
  Ql = Le.unstable_ImmediatePriority,
  yd = Le.unstable_UserBlockingPriority,
  Ki = Le.unstable_NormalPriority,
  u0 = Le.unstable_LowPriority,
  gd = Le.unstable_IdlePriority,
  So = null,
  be = null;
function c0(e) {
  if (be && typeof be.onCommitFiberRoot == 'function')
    try {
      be.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : h0,
  f0 = Math.log,
  d0 = Math.LN2;
function h0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((f0(e) / d0) | 0)) | 0;
}
var fi = 64,
  di = 4194304;
function ur(e) {
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
      return e;
  }
}
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = ur(l)) : ((o &= s), o !== 0 && (r = ur(o)));
  } else (s = n & ~i), s !== 0 ? (r = ur(s)) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function p0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function m0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Qe(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = p0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ws(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vd() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function y0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Xl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function xd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wd,
  Yl,
  Sd,
  kd,
  Pd,
  Hs = !1,
  hi = [],
  Ct = null,
  Et = null,
  Mt = null,
  Lr = new Map(),
  Rr = new Map(),
  St = [],
  g0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ku(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ct = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Et = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Mt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Lr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Rr.delete(t.pointerId);
  }
}
function er(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Jr(t)), t !== null && Yl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function v0(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ct = er(Ct, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Et = er(Et, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Mt = er(Mt, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Lr.set(o, er(Lr.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Rr.set(o, er(Rr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Td(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            Pd(e.priority, function () {
              Sd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ks(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zs = r), n.target.dispatchEvent(r), (zs = null);
    } else return (t = Jr(n)), t !== null && Yl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pu(e, t, n) {
  Di(e) && n.delete(t);
}
function x0() {
  (Hs = !1),
    Ct !== null && Di(Ct) && (Ct = null),
    Et !== null && Di(Et) && (Et = null),
    Mt !== null && Di(Mt) && (Mt = null),
    Lr.forEach(Pu),
    Rr.forEach(Pu);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hs ||
      ((Hs = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, x0)));
}
function Vr(e) {
  function t(i) {
    return tr(i, e);
  }
  if (0 < hi.length) {
    tr(hi[0], e);
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ct !== null && tr(Ct, e),
      Et !== null && tr(Et, e),
      Mt !== null && tr(Mt, e),
      Lr.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    (r = St[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    Td(n), n.blockedOn === null && St.shift();
}
var Vn = mt.ReactCurrentBatchConfig,
  Qi = !0;
function w0(e, t, n, r) {
  var i = I,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (I = 1), Zl(e, t, n, r);
  } finally {
    (I = i), (Vn.transition = o);
  }
}
function S0(e, t, n, r) {
  var i = I,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (I = 4), Zl(e, t, n, r);
  } finally {
    (I = i), (Vn.transition = o);
  }
}
function Zl(e, t, n, r) {
  if (Qi) {
    var i = Ks(e, t, n, r);
    if (i === null) rs(e, t, r, Xi, n), ku(e, r);
    else if (v0(i, e, t, n, r)) r.stopPropagation();
    else if ((ku(e, r), t & 4 && -1 < g0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Jr(i);
        if (
          (o !== null && wd(o),
          (o = Ks(e, t, n, r)),
          o === null && rs(e, t, r, Xi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else rs(e, t, r, null, n);
  }
}
var Xi = null;
function Ks(e, t, n, r) {
  if (((Xi = null), (e = Gl(r)), (e = Yt(e)), e !== null))
    if (((t = un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xi = e), null;
}
function Cd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (a0()) {
        case Ql:
          return 1;
        case yd:
          return 4;
        case Ki:
        case u0:
          return 16;
        case gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null,
  ql = null,
  Li = null;
function Ed() {
  if (Li) return Li;
  var e,
    t = ql,
    n = t.length,
    r,
    i = 'value' in Pt ? Pt.value : Pt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ri(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pi() {
  return !0;
}
function Tu() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pi
        : Tu),
      (this.isPropagationStopped = Tu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = pi));
      },
      persist: function () {},
      isPersistent: pi,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jl = Ne(Gn),
  qr = Q({}, Gn, { view: 0, detail: 0 }),
  k0 = Ne(qr),
  Xo,
  Yo,
  nr,
  ko = Q({}, qr, {
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
    getModifierState: bl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== nr &&
            (nr && e.type === 'mousemove'
              ? ((Xo = e.screenX - nr.screenX), (Yo = e.screenY - nr.screenY))
              : (Yo = Xo = 0),
            (nr = e)),
          Xo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Yo;
    },
  }),
  Cu = Ne(ko),
  P0 = Q({}, ko, { dataTransfer: 0 }),
  T0 = Ne(P0),
  C0 = Q({}, qr, { relatedTarget: 0 }),
  Zo = Ne(C0),
  E0 = Q({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M0 = Ne(E0),
  A0 = Q({}, Gn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  D0 = Ne(A0),
  L0 = Q({}, Gn, { data: 0 }),
  Eu = Ne(L0),
  R0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  V0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  N0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function j0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = N0[e]) ? !!t[e] : !1;
}
function bl() {
  return j0;
}
var _0 = Q({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = R0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ri(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? V0[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bl,
    charCode: function (e) {
      return e.type === 'keypress' ? Ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ri(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  O0 = Ne(_0),
  F0 = Q({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mu = Ne(F0),
  I0 = Q({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bl,
  }),
  z0 = Ne(I0),
  B0 = Q({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  U0 = Ne(B0),
  $0 = Q({}, ko, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  W0 = Ne($0),
  H0 = [9, 13, 27, 32],
  ea = ct && 'CompositionEvent' in window,
  yr = null;
ct && 'documentMode' in document && (yr = document.documentMode);
var K0 = ct && 'TextEvent' in window && !yr,
  Md = ct && (!ea || (yr && 8 < yr && 11 >= yr)),
  Au = ' ',
  Du = !1;
function Ad(e, t) {
  switch (e) {
    case 'keyup':
      return H0.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Dd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var pn = !1;
function G0(e, t) {
  switch (e) {
    case 'compositionend':
      return Dd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Du = !0), Au);
    case 'textInput':
      return (e = t.data), e === Au && Du ? null : e;
    default:
      return null;
  }
}
function Q0(e, t) {
  if (pn)
    return e === 'compositionend' || (!ea && Ad(e, t))
      ? ((e = Ed()), (Li = ql = Pt = null), (pn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Md && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var X0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function Lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!X0[e.type] : t === 'textarea';
}
function Ld(e, t, n, r) {
  ld(r),
    (t = Yi(t, 'onChange')),
    0 < t.length &&
      ((n = new Jl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gr = null,
  Nr = null;
function Y0(e) {
  Ud(e, 0);
}
function Po(e) {
  var t = gn(e);
  if (ed(t)) return e;
}
function Z0(e, t) {
  if (e === 'change') return t;
}
var Rd = !1;
if (ct) {
  var qo;
  if (ct) {
    var Jo = 'oninput' in document;
    if (!Jo) {
      var Ru = document.createElement('div');
      Ru.setAttribute('oninput', 'return;'),
        (Jo = typeof Ru.oninput == 'function');
    }
    qo = Jo;
  } else qo = !1;
  Rd = qo && (!document.documentMode || 9 < document.documentMode);
}
function Vu() {
  gr && (gr.detachEvent('onpropertychange', Vd), (Nr = gr = null));
}
function Vd(e) {
  if (e.propertyName === 'value' && Po(Nr)) {
    var t = [];
    Ld(t, Nr, e, Gl(e)), fd(Y0, t);
  }
}
function q0(e, t, n) {
  e === 'focusin'
    ? (Vu(), (gr = t), (Nr = n), gr.attachEvent('onpropertychange', Vd))
    : e === 'focusout' && Vu();
}
function J0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Po(Nr);
}
function b0(e, t) {
  if (e === 'click') return Po(t);
}
function ey(e, t) {
  if (e === 'input' || e === 'change') return Po(t);
}
function ty(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == 'function' ? Object.is : ty;
function jr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ms.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ju(e, t) {
  var n = Nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nu(n);
  }
}
function Nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jd() {
  for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $i(e.document);
  }
  return t;
}
function ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function ny(e) {
  var t = jd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ta(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ju(n, o));
        var s = ju(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ry = ct && 'documentMode' in document && 11 >= document.documentMode,
  mn = null,
  Gs = null,
  vr = null,
  Qs = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qs ||
    mn == null ||
    mn !== $i(r) ||
    ((r = mn),
    'selectionStart' in r && ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && jr(vr, r)) ||
      ((vr = r),
      (r = Yi(Gs, 'onSelect')),
      0 < r.length &&
        ((t = new Jl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mn))));
}
function mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var yn = {
    animationend: mi('Animation', 'AnimationEnd'),
    animationiteration: mi('Animation', 'AnimationIteration'),
    animationstart: mi('Animation', 'AnimationStart'),
    transitionend: mi('Transition', 'TransitionEnd'),
  },
  bo = {},
  _d = {};
ct &&
  ((_d = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete yn.animationend.animation,
    delete yn.animationiteration.animation,
    delete yn.animationstart.animation),
  'TransitionEvent' in window || delete yn.transitionend.transition);
function To(e) {
  if (bo[e]) return bo[e];
  if (!yn[e]) return e;
  var t = yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _d) return (bo[e] = t[n]);
  return e;
}
var Od = To('animationend'),
  Fd = To('animationiteration'),
  Id = To('animationstart'),
  zd = To('transitionend'),
  Bd = new Map(),
  Ou =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ft(e, t) {
  Bd.set(e, t), an(t, [e]);
}
for (var es = 0; es < Ou.length; es++) {
  var ts = Ou[es],
    iy = ts.toLowerCase(),
    oy = ts[0].toUpperCase() + ts.slice(1);
  Ft(iy, 'on' + oy);
}
Ft(Od, 'onAnimationEnd');
Ft(Fd, 'onAnimationIteration');
Ft(Id, 'onAnimationStart');
Ft('dblclick', 'onDoubleClick');
Ft('focusin', 'onFocus');
Ft('focusout', 'onBlur');
Ft(zd, 'onTransitionEnd');
_n('onMouseEnter', ['mouseout', 'mouseover']);
_n('onMouseLeave', ['mouseout', 'mouseover']);
_n('onPointerEnter', ['pointerout', 'pointerover']);
_n('onPointerLeave', ['pointerout', 'pointerover']);
an(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
an(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
an('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
an(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
an(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
an(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  sy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cr));
function Fu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), i0(r, t, void 0, e), (e.currentTarget = null);
}
function Ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Fu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Fu(i, l, u), (o = a);
        }
    }
  }
  if (Hi) throw ((e = $s), (Hi = !1), ($s = null), e);
}
function B(e, t) {
  var n = t[Js];
  n === void 0 && (n = t[Js] = new Set());
  var r = e + '__bubble';
  n.has(r) || ($d(t, e, 2, !1), n.add(r));
}
function ns(e, t, n) {
  var r = 0;
  t && (r |= 4), $d(n, e, r, t);
}
var yi = '_reactListening' + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      Yf.forEach(function (n) {
        n !== 'selectionchange' && (sy.has(n) || ns(n, !1, e), ns(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), ns('selectionchange', !1, t));
  }
}
function $d(e, t, n, r) {
  switch (Cd(t)) {
    case 1:
      var i = w0;
      break;
    case 4:
      i = S0;
      break;
    default:
      i = Zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Us ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Yt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  fd(function () {
    var u = o,
      c = Gl(n),
      f = [];
    e: {
      var d = Bd.get(e);
      if (d !== void 0) {
        var y = Jl,
          g = e;
        switch (e) {
          case 'keypress':
            if (Ri(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = O0;
            break;
          case 'focusin':
            (g = 'focus'), (y = Zo);
            break;
          case 'focusout':
            (g = 'blur'), (y = Zo);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Zo;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Cu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = T0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = z0;
            break;
          case Od:
          case Fd:
          case Id:
            y = M0;
            break;
          case zd:
            y = U0;
            break;
          case 'scroll':
            y = k0;
            break;
          case 'wheel':
            y = W0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = D0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = Mu;
        }
        var v = (t & 4) !== 0,
          T = !v && e === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = Dr(h, p)), x != null && v.push(Or(h, x, m)))),
            T)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new y(d, g, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== zs &&
            (g = n.relatedTarget || n.fromElement) &&
            (Yt(g) || g[ft]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? Yt(g) : null),
              g !== null &&
                ((T = un(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((v = Cu),
            (x = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Mu),
              (x = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (T = y == null ? d : gn(y)),
            (m = g == null ? d : gn(g)),
            (d = new v(x, h + 'leave', y, n, c)),
            (d.target = T),
            (d.relatedTarget = m),
            (x = null),
            Yt(c) === u &&
              ((v = new v(p, h + 'enter', g, n, c)),
              (v.target = m),
              (v.relatedTarget = T),
              (x = v)),
            (T = x),
            y && g)
          )
            t: {
              for (v = y, p = g, h = 0, m = v; m; m = fn(m)) h++;
              for (m = 0, x = p; x; x = fn(x)) m++;
              for (; 0 < h - m; ) (v = fn(v)), h--;
              for (; 0 < m - h; ) (p = fn(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = fn(v)), (p = fn(p));
              }
              v = null;
            }
          else v = null;
          y !== null && Iu(f, d, y, v, !1),
            g !== null && T !== null && Iu(f, T, g, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? gn(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && d.type === 'file'))
        )
          var S = Z0;
        else if (Lu(d))
          if (Rd) S = ey;
          else {
            S = J0;
            var C = q0;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = b0);
        if (S && (S = S(e, u))) {
          Ld(f, S, n, c);
          break e;
        }
        C && C(e, d, u),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            js(d, 'number', d.value);
      }
      switch (((C = u ? gn(u) : window), e)) {
        case 'focusin':
          (Lu(C) || C.contentEditable === 'true') &&
            ((mn = C), (Gs = u), (vr = null));
          break;
        case 'focusout':
          vr = Gs = mn = null;
          break;
        case 'mousedown':
          Qs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Qs = !1), _u(f, n, c);
          break;
        case 'selectionchange':
          if (ry) break;
        case 'keydown':
        case 'keyup':
          _u(f, n, c);
      }
      var E;
      if (ea)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        pn
          ? Ad(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (Md &&
          n.locale !== 'ko' &&
          (pn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && pn && (E = Ed())
            : ((Pt = c),
              (ql = 'value' in Pt ? Pt.value : Pt.textContent),
              (pn = !0))),
        (C = Yi(u, P)),
        0 < C.length &&
          ((P = new Eu(P, e, null, n, c)),
          f.push({ event: P, listeners: C }),
          E ? (P.data = E) : ((E = Dd(n)), E !== null && (P.data = E)))),
        (E = K0 ? G0(e, n) : Q0(e, n)) &&
          ((u = Yi(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Eu('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Ud(f, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Dr(e, n)),
      o != null && r.unshift(Or(e, o, i)),
      (o = Dr(e, t)),
      o != null && r.push(Or(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Iu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Dr(n, o)), a != null && s.unshift(Or(n, a, l)))
        : i || ((a = Dr(n, o)), a != null && s.push(Or(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ly = /\r\n?/g,
  ay = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      ly,
      `
`
    )
    .replace(ay, '');
}
function gi(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(k(425));
}
function Zi() {}
var Xs = null,
  Ys = null;
function Zs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qs = typeof setTimeout == 'function' ? setTimeout : void 0,
  uy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Bu = typeof Promise == 'function' ? Promise : void 0,
  cy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Bu < 'u'
      ? function (e) {
          return Bu.resolve(null).then(e).catch(fy);
        }
      : qs;
function fy(e) {
  setTimeout(function () {
    throw e;
  });
}
function is(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Vr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Vr(t);
}
function At(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qn = Math.random().toString(36).slice(2),
  Je = '__reactFiber$' + Qn,
  Fr = '__reactProps$' + Qn,
  ft = '__reactContainer$' + Qn,
  Js = '__reactEvents$' + Qn,
  dy = '__reactListeners$' + Qn,
  hy = '__reactHandles$' + Qn;
function Yt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uu(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = Uu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jr(e) {
  return (
    (e = e[Je] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Co(e) {
  return e[Fr] || null;
}
var bs = [],
  vn = -1;
function It(e) {
  return { current: e };
}
function U(e) {
  0 > vn || ((e.current = bs[vn]), (bs[vn] = null), vn--);
}
function z(e, t) {
  vn++, (bs[vn] = e.current), (e.current = t);
}
var jt = {},
  ye = It(jt),
  Pe = It(!1),
  nn = jt;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function qi() {
  U(Pe), U(ye);
}
function $u(e, t, n) {
  if (ye.current !== jt) throw Error(k(168));
  z(ye, t), z(Pe, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, qm(e) || 'Unknown', i));
  return Q({}, n, r);
}
function Ji(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (nn = ye.current),
    z(ye, e),
    z(Pe, Pe.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Wd(e, t, nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Pe),
      U(ye),
      z(ye, e))
    : U(Pe),
    z(Pe, n);
}
var it = null,
  Eo = !1,
  os = !1;
function Hd(e) {
  it === null ? (it = [e]) : it.push(e);
}
function py(e) {
  (Eo = !0), Hd(e);
}
function zt() {
  if (!os && it !== null) {
    os = !0;
    var e = 0,
      t = I;
    try {
      var n = it;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (it = null), (Eo = !1);
    } catch (i) {
      throw (it !== null && (it = it.slice(e + 1)), md(Ql, zt), i);
    } finally {
      (I = t), (os = !1);
    }
  }
  return null;
}
var xn = [],
  wn = 0,
  bi = null,
  eo = 0,
  Oe = [],
  Fe = 0,
  rn = null,
  ot = 1,
  st = '';
function Kt(e, t) {
  (xn[wn++] = eo), (xn[wn++] = bi), (bi = e), (eo = t);
}
function Kd(e, t, n) {
  (Oe[Fe++] = ot), (Oe[Fe++] = st), (Oe[Fe++] = rn), (rn = e);
  var r = ot;
  e = st;
  var i = 32 - Qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Qe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ot = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (st = o + e);
  } else (ot = (1 << o) | (n << i) | r), (st = e);
}
function na(e) {
  e.return !== null && (Kt(e, 1), Kd(e, 1, 0));
}
function ra(e) {
  for (; e === bi; )
    (bi = xn[--wn]), (xn[wn] = null), (eo = xn[--wn]), (xn[wn] = null);
  for (; e === rn; )
    (rn = Oe[--Fe]),
      (Oe[Fe] = null),
      (st = Oe[--Fe]),
      (Oe[Fe] = null),
      (ot = Oe[--Fe]),
      (Oe[Fe] = null);
}
var Ae = null,
  Me = null,
  W = !1,
  Ge = null;
function Gd(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Me = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rn !== null ? { id: ot, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function el(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tl(e) {
  if (W) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (el(e)) throw Error(k(418));
        t = At(n.nextSibling);
        var r = Ae;
        t && Hu(e, t)
          ? Gd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e));
      }
    } else {
      if (el(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e);
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function vi(e) {
  if (e !== Ae) return !1;
  if (!W) return Ku(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Zs(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (el(e)) throw (Qd(), Error(k(418)));
    for (; t; ) Gd(e, t), (t = At(t.nextSibling));
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Me = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ae ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function Qd() {
  for (var e = Me; e; ) e = At(e.nextSibling);
}
function Fn() {
  (Me = Ae = null), (W = !1);
}
function ia(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var my = mt.ReactCurrentBatchConfig;
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function xi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Xd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Vt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = ds(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, x) {
    var S = m.type;
    return S === hn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === xt &&
            Gu(S) === h.type))
      ? ((x = i(h, m.props)), (x.ref = rr(p, h, m)), (x.return = p), x)
      : ((x = Ii(m.type, m.key, m.props, null, p.mode, x)),
        (x.ref = rr(p, h, m)),
        (x.return = p),
        x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = hs(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = en(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = ds('' + h, p.mode, m)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ai:
          return (
            (m = Ii(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = rr(p, null, h)),
            (m.return = p),
            m
          );
        case dn:
          return (h = hs(h, p.mode, m)), (h.return = p), h;
        case xt:
          var x = h._init;
          return f(p, x(h._payload), m);
      }
      if (ar(h) || Jn(h))
        return (h = en(h, p.mode, m, null)), (h.return = p), h;
      xi(p, h);
    }
    return null;
  }
  function d(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return S !== null ? null : l(p, h, '' + m, x);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ai:
          return m.key === S ? a(p, h, m, x) : null;
        case dn:
          return m.key === S ? u(p, h, m, x) : null;
        case xt:
          return (S = m._init), d(p, h, S(m._payload), x);
      }
      if (ar(m) || Jn(m)) return S !== null ? null : c(p, h, m, x, null);
      xi(p, m);
    }
    return null;
  }
  function y(p, h, m, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (p = p.get(m) || null), l(h, p, '' + x, S);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case ai:
          return (p = p.get(x.key === null ? m : x.key) || null), a(h, p, x, S);
        case dn:
          return (p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, S);
        case xt:
          var C = x._init;
          return y(p, h, m, C(x._payload), S);
      }
      if (ar(x) || Jn(x)) return (p = p.get(m) || null), c(h, p, x, S, null);
      xi(h, x);
    }
    return null;
  }
  function g(p, h, m, x) {
    for (
      var S = null, C = null, E = h, P = (h = 0), _ = null;
      E !== null && P < m.length;
      P++
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var L = d(p, E, m[P], x);
      if (L === null) {
        E === null && (E = _);
        break;
      }
      e && E && L.alternate === null && t(p, E),
        (h = o(L, h, P)),
        C === null ? (S = L) : (C.sibling = L),
        (C = L),
        (E = _);
    }
    if (P === m.length) return n(p, E), W && Kt(p, P), S;
    if (E === null) {
      for (; P < m.length; P++)
        (E = f(p, m[P], x)),
          E !== null &&
            ((h = o(E, h, P)), C === null ? (S = E) : (C.sibling = E), (C = E));
      return W && Kt(p, P), S;
    }
    for (E = r(p, E); P < m.length; P++)
      (_ = y(E, p, P, m[P], x)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? P : _.key),
          (h = o(_, h, P)),
          C === null ? (S = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        E.forEach(function (re) {
          return t(p, re);
        }),
      W && Kt(p, P),
      S
    );
  }
  function v(p, h, m, x) {
    var S = Jn(m);
    if (typeof S != 'function') throw Error(k(150));
    if (((m = S.call(m)), m == null)) throw Error(k(151));
    for (
      var C = (S = null), E = h, P = (h = 0), _ = null, L = m.next();
      E !== null && !L.done;
      P++, L = m.next()
    ) {
      E.index > P ? ((_ = E), (E = null)) : (_ = E.sibling);
      var re = d(p, E, L.value, x);
      if (re === null) {
        E === null && (E = _);
        break;
      }
      e && E && re.alternate === null && t(p, E),
        (h = o(re, h, P)),
        C === null ? (S = re) : (C.sibling = re),
        (C = re),
        (E = _);
    }
    if (L.done) return n(p, E), W && Kt(p, P), S;
    if (E === null) {
      for (; !L.done; P++, L = m.next())
        (L = f(p, L.value, x)),
          L !== null &&
            ((h = o(L, h, P)), C === null ? (S = L) : (C.sibling = L), (C = L));
      return W && Kt(p, P), S;
    }
    for (E = r(p, E); !L.done; P++, L = m.next())
      (L = y(E, p, P, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? P : L.key),
          (h = o(L, h, P)),
          C === null ? (S = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        E.forEach(function (yt) {
          return t(p, yt);
        }),
      W && Kt(p, P),
      S
    );
  }
  function T(p, h, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === hn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case ai:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === hn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === xt &&
                    Gu(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = rr(p, C, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === hn
              ? ((h = en(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = Ii(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = rr(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case dn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = hs(m, p.mode, x)), (h.return = p), (p = h);
          }
          return s(p);
        case xt:
          return (C = m._init), T(p, h, C(m._payload), x);
      }
      if (ar(m)) return g(p, h, m, x);
      if (Jn(m)) return v(p, h, m, x);
      xi(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = ds(m, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return T;
}
var In = Xd(!0),
  Yd = Xd(!1),
  to = It(null),
  no = null,
  Sn = null,
  oa = null;
function sa() {
  oa = Sn = no = null;
}
function la(e) {
  var t = to.current;
  U(to), (e._currentValue = t);
}
function nl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Nn(e, t) {
  (no = e),
    (oa = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (no === null) throw Error(k(308));
      (Sn = e), (no.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var Zt = null;
function aa(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function Zd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), aa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), aa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function Vi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ro(e, t, n, r) {
  var i = e.updateQueue;
  wt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        y = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            v = l;
          switch (((d = t), (y = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                f = g.call(y, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (d = typeof g == 'function' ? g.call(y, f, d) : g),
                d == null)
              )
                break e;
              f = Q({}, f, d);
              break e;
            case 2:
              wt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = f)) : (c = c.next = y),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (sn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var br = {},
  et = It(br),
  Ir = It(br),
  zr = It(br);
function qt(e) {
  if (e === br) throw Error(k(174));
  return e;
}
function ca(e, t) {
  switch ((z(zr, t), z(Ir, e), z(et, br), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e));
  }
  U(et), z(et, t);
}
function zn() {
  U(et), U(Ir), U(zr);
}
function Jd(e) {
  qt(zr.current);
  var t = qt(et.current),
    n = Os(t, e.type);
  t !== n && (z(Ir, e), z(et, n));
}
function fa(e) {
  Ir.current === e && (U(et), U(Ir));
}
var H = It(0);
function io(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ss = [];
function da() {
  for (var e = 0; e < ss.length; e++)
    ss[e]._workInProgressVersionPrimary = null;
  ss.length = 0;
}
var Ni = mt.ReactCurrentDispatcher,
  ls = mt.ReactCurrentBatchConfig,
  on = 0,
  G = null,
  te = null,
  oe = null,
  oo = !1,
  xr = !1,
  Br = 0,
  yy = 0;
function fe() {
  throw Error(k(321));
}
function ha(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function pa(e, t, n, r, i, o) {
  if (
    ((on = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ni.current = e === null || e.memoizedState === null ? wy : Sy),
    (e = n(r, i)),
    xr)
  ) {
    o = 0;
    do {
      if (((xr = !1), (Br = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (Ni.current = ky),
        (e = n(r, i));
    } while (xr);
  }
  if (
    ((Ni.current = so),
    (t = te !== null && te.next !== null),
    (on = 0),
    (oe = te = G = null),
    (oo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ma() {
  var e = Br !== 0;
  return (Br = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ue() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) (oe = t), (te = e);
  else {
    if (e === null) throw Error(k(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Ur(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function as(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((on & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (G.lanes |= c),
          (sn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ye(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (G.lanes |= o), (sn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function us(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ye(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function bd() {}
function eh(e, t) {
  var n = G,
    r = Ue(),
    i = t(),
    o = !Ye(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    ya(rh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, nh.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(k(349));
    on & 30 || th(n, t, i);
  }
  return i;
}
function th(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ih(t) && oh(e);
}
function rh(e, t, n) {
  return n(function () {
    ih(t) && oh(e);
  });
}
function ih(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function oh(e) {
  var t = dt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Yu(e) {
  var t = qe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xy.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sh() {
  return Ue().memoizedState;
}
function ji(e, t, n, r) {
  var i = qe();
  (G.flags |= e),
    (i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mo(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((o = s.destroy), r !== null && ha(r, s.deps))) {
      i.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = $r(1 | t, n, o, r));
}
function Zu(e, t) {
  return ji(8390656, 8, e, t);
}
function ya(e, t) {
  return Mo(2048, 8, e, t);
}
function lh(e, t) {
  return Mo(4, 2, e, t);
}
function ah(e, t) {
  return Mo(4, 4, e, t);
}
function uh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ch(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mo(4, 4, uh.bind(null, t, e), n)
  );
}
function ga() {}
function fh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ha(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ha(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hh(e, t, n) {
  return on & 21
    ? (Ye(n, t) || ((n = vd()), (G.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function gy(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ls.transition;
  ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (ls.transition = r);
  }
}
function ph() {
  return Ue().memoizedState;
}
function vy(e, t, n) {
  var r = Rt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mh(e))
  )
    yh(t, n);
  else if (((n = Zd(e, t, n, r)), n !== null)) {
    var i = ve();
    Xe(n, e, r, i), gh(n, t, r);
  }
}
function xy(e, t, n) {
  var r = Rt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mh(e)) yh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), aa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zd(e, t, i, r)),
      n !== null && ((i = ve()), Xe(n, e, r, i), gh(n, t, r));
  }
}
function mh(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function yh(e, t) {
  xr = oo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
  }
}
var so = {
    readContext: Be,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  wy = {
    readContext: Be,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: Zu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ji(4194308, 4, uh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vy.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yu,
    useDebugValue: ga,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Yu(!1),
        t = e[0];
      return (e = gy.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = qe();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(k(349));
        on & 30 || th(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Zu(rh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, nh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = se.identifierPrefix;
      if (W) {
        var n = st,
          r = ot;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Br++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = yy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sy = {
    readContext: Be,
    useCallback: fh,
    useContext: Be,
    useEffect: ya,
    useImperativeHandle: ch,
    useInsertionEffect: lh,
    useLayoutEffect: ah,
    useMemo: dh,
    useReducer: as,
    useRef: sh,
    useState: function () {
      return as(Ur);
    },
    useDebugValue: ga,
    useDeferredValue: function (e) {
      var t = Ue();
      return hh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = as(Ur)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: bd,
    useSyncExternalStore: eh,
    useId: ph,
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: Be,
    useCallback: fh,
    useContext: Be,
    useEffect: ya,
    useImperativeHandle: ch,
    useInsertionEffect: lh,
    useLayoutEffect: ah,
    useMemo: dh,
    useReducer: us,
    useRef: sh,
    useState: function () {
      return us(Ur);
    },
    useDebugValue: ga,
    useDeferredValue: function (e) {
      var t = Ue();
      return te === null ? (t.memoizedState = e) : hh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = us(Ur)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: bd,
    useSyncExternalStore: eh,
    useId: ph,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function rl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Rt(e),
      o = lt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Vi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Rt(e),
      o = lt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Vi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Rt(e),
      i = lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Dt(e, i, r)),
      t !== null && (Xe(t, e, r, n), Vi(t, e, r));
  },
};
function qu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !jr(n, r) || !jr(i, o)
      : !0
  );
}
function vh(e, t, n) {
  var r = !1,
    i = jt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Be(o))
      : ((i = Te(t) ? nn : ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? On(e, i) : jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ao.enqueueReplaceState(t, t.state, null);
}
function il(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ua(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Be(o))
    : ((o = Te(t) ? nn : ye.current), (i.context = On(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (rl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ao.enqueueReplaceState(i, i.state, null),
      ro(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Zm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ol(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Py = typeof WeakMap == 'function' ? WeakMap : Map;
function xh(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ao || ((ao = !0), (ml = r)), ol(e, t);
    }),
    n
  );
}
function wh(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ol(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ol(e, t),
          typeof r != 'function' &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Py();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Fy.bind(null, e, t, n)), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ty = mt.ReactCurrentOwner,
  ke = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Yd(t, null, n, r) : In(t, e.child, n, r);
}
function nc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Nn(t, i),
    (r = pa(e, t, n, r, o, i)),
    (n = ma()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (W && n && na(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function rc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Ca(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Sh(e, t, o, r, i))
      : ((e = Ii(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref)
    )
      return ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (jr(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), ht(e, t, i);
  }
  return sl(e, t, n, r, i);
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Pn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Pn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Pn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Pn, Ee),
      (Ee |= r);
  return ge(e, t, i, n), t.child;
}
function Ph(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sl(e, t, n, r, i) {
  var o = Te(n) ? nn : ye.current;
  return (
    (o = On(t, o)),
    Nn(t, i),
    (n = pa(e, t, n, r, o, i)),
    (r = ma()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (W && r && na(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function ic(e, t, n, r, i) {
  if (Te(n)) {
    var o = !0;
    Ji(t);
  } else o = !1;
  if ((Nn(t, i), t.stateNode === null))
    _i(e, t), vh(t, n, r), il(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Be(u))
      : ((u = Te(n) ? nn : ye.current), (u = On(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Ju(t, s, r, u)),
      (wt = !1);
    var d = t.memoizedState;
    (s.state = d),
      ro(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Pe.current || wt
        ? (typeof c == 'function' && (rl(t, n, c, r), (a = t.memoizedState)),
          (l = wt || qu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      qd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : He(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Be(a))
        : ((a = Te(n) ? nn : ye.current), (a = On(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== a) && Ju(t, s, r, a)),
      (wt = !1),
      (d = t.memoizedState),
      (s.state = d),
      ro(t, r, s, i);
    var g = t.memoizedState;
    l !== f || d !== g || Pe.current || wt
      ? (typeof y == 'function' && (rl(t, n, y, r), (g = t.memoizedState)),
        (u = wt || qu(t, n, u, r, d, g, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ll(e, t, n, r, o, i);
}
function ll(e, t, n, r, i, o) {
  Ph(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Wu(t, n, !1), ht(e, t, o);
  (r = t.stateNode), (Ty.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = In(t, e.child, null, o)), (t.child = In(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Wu(t, n, !0),
    t.child
  );
}
function Th(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    ca(e, t.containerInfo);
}
function oc(e, t, n, r, i) {
  return Fn(), ia(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var al = { dehydrated: null, treeContext: null, retryLane: 0 };
function ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ch(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(H, i & 1),
    e === null)
  )
    return (
      tl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ro(s, r, 0, null)),
              (e = en(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ul(n)),
              (t.memoizedState = al),
              e)
            : va(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Cy(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Vt(l, o)) : ((o = en(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ul(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = al),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Vt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function va(e, t) {
  return (
    (t = Ro({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wi(e, t, n, r) {
  return (
    r !== null && ia(r),
    In(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cs(Error(k(422)))), wi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ro({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = en(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && In(t, e.child, null, s),
        (t.child.memoizedState = ul(s)),
        (t.memoizedState = al),
        o);
  if (!(t.mode & 1)) return wi(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = cs(o, r, void 0)), wi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ke || l)) {
    if (((r = se), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), dt(e, i), Xe(r, e, i, -1));
    }
    return Ta(), (r = cs(Error(k(421)))), wi(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Iy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Me = At(i.nextSibling)),
      (Ae = t),
      (W = !0),
      (Ge = null),
      e !== null &&
        ((Oe[Fe++] = ot),
        (Oe[Fe++] = st),
        (Oe[Fe++] = rn),
        (ot = e.id),
        (st = e.overflow),
        (rn = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nl(e.return, t, n);
}
function fs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sc(e, n, t);
        else if (e.tag === 19) sc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && io(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fs(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && io(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fs(t, !0, n, null, o);
        break;
      case 'together':
        fs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ey(e, t, n) {
  switch (t.tag) {
    case 3:
      Th(t), Fn();
      break;
    case 5:
      Jd(t);
      break;
    case 1:
      Te(t.type) && Ji(t);
      break;
    case 4:
      ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(to, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ch(e, t, n)
          : (z(H, H.current & 1),
            (e = ht(e, t, n)),
            e !== null ? e.sibling : null);
      z(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Eh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kh(e, t, n);
  }
  return ht(e, t, n);
}
var Mh, cl, Ah, Dh;
Mh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cl = function () {};
Ah = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qt(et.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = Vs(e, i)), (r = Vs(e, r)), (o = []);
        break;
      case 'select':
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = _s(e, i)), (r = _s(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Zi);
    }
    Fs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Mr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Mr.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && B('scroll', e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!W)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function My(e, t, n) {
  var r = t.pendingProps;
  switch ((ra(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return Te(t.type) && qi(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zn(),
        U(Pe),
        U(ye),
        da(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (vl(Ge), (Ge = null)))),
        cl(e, t),
        de(t),
        null
      );
    case 5:
      fa(t);
      var i = qt(zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ah(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return de(t), null;
        }
        if (((e = qt(et.current)), vi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[Fr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              B('cancel', r), B('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < cr.length; i++) B(cr[i], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r);
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              mu(r, o), B('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B('invalid', r);
              break;
            case 'textarea':
              gu(r, o), B('invalid', r);
          }
          Fs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      gi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      gi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Mr.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  B('scroll', r);
            }
          switch (n) {
            case 'input':
              ui(r), yu(r, o, !0);
              break;
            case 'textarea':
              ui(r), vu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Zi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = rd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Je] = t),
            (e[Fr] = r),
            Mh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Is(n, r)), n)) {
              case 'dialog':
                B('cancel', e), B('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                B('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < cr.length; i++) B(cr[i], e);
                i = r;
                break;
              case 'source':
                B('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                B('error', e), B('load', e), (i = r);
                break;
              case 'details':
                B('toggle', e), (i = r);
                break;
              case 'input':
                mu(e, r), (i = Vs(e, r)), B('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  B('invalid', e);
                break;
              case 'textarea':
                gu(e, r), (i = _s(e, r)), B('invalid', e);
                break;
              default:
                i = r;
            }
            Fs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === 'style'
                  ? sd(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && id(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Ar(e, a)
                    : typeof a == 'number' && Ar(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Mr.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && B('scroll', e)
                      : a != null && $l(e, o, a, s));
              }
            switch (n) {
              case 'input':
                ui(e), yu(e, r, !1);
                break;
              case 'textarea':
                ui(e), vu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Nt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Zi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Dh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = qt(zr.current)), qt(et.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                gi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Me !== null && t.mode & 1 && !(t.flags & 128))
          Qd(), Fn(), (t.flags |= 98560), (o = !1);
        else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[Je] = t;
          } else
            Fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Ge !== null && (vl(Ge), (Ge = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ne === 0 && (ne = 3) : Ta())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        zn(), cl(e, t), e === null && _r(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return la(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && qi(), de(t), null;
    case 19:
      if ((U(H), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ir(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = io(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ir(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > Un &&
            ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = io(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !W)
            )
              return de(t), null;
          } else
            2 * J() - o.renderingStartTime > Un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = H.current),
          z(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Ay(e, t) {
  switch ((ra(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && qi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zn(),
        U(Pe),
        U(ye),
        da(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Fn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(H), null;
    case 4:
      return zn(), null;
    case 10:
      return la(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Si = !1,
  pe = !1,
  Dy = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function fl(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var lc = !1;
function Ly(e, t) {
  if (((Xs = Qi), (e = jd()), ta(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (d = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ys = { focusedElem: e, selectionRange: n }, Qi = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    T = g.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : He(t.type, v),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          Y(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (g = lc), (lc = !1), g;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && fl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Do(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function dl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Lh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[Fr], delete t[Js], delete t[dy], delete t[hy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling);
}
function pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pl(e, t, n), e = e.sibling; e !== null; ) pl(e, t, n), (e = e.sibling);
}
var le = null,
  Ke = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Vh(e, t, n), (n = n.sibling);
}
function Vh(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == 'function')
    try {
      be.onCommitFiberUnmount(So, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || kn(n, t);
    case 6:
      var r = le,
        i = Ke;
      (le = null),
        gt(e, t, n),
        (le = r),
        (Ke = i),
        le !== null &&
          (Ke
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ke
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? is(e.parentNode, n)
              : e.nodeType === 1 && is(e, n),
            Vr(e))
          : is(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Ke),
        (le = n.stateNode.containerInfo),
        (Ke = !0),
        gt(e, t, n),
        (le = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && fl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Y(n, t, l);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), gt(e, t, n), (pe = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dy()),
      t.forEach(function (r) {
        var i = zy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (Ke = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(k(160));
        Vh(o, s, i), (le = null), (Ke = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Y(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling);
}
function Nh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), Ze(e), r & 4)) {
        try {
          wr(3, e, e.return), Do(3, e);
        } catch (v) {
          Y(e, e.return, v);
        }
        try {
          wr(5, e, e.return);
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), Ze(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        Ze(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ar(i, '');
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && td(i, o),
              Is(l, s);
            var u = Is(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === 'style'
                ? sd(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? id(i, f)
                : c === 'children'
                ? Ar(i, f)
                : $l(i, c, f, u);
            }
            switch (l) {
              case 'input':
                Ns(i, o);
                break;
              case 'textarea':
                nd(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Dn(i, !!o.multiple, y, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dn(i, !!o.multiple, o.defaultValue, !0)
                      : Dn(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Fr] = o;
          } catch (v) {
            Y(e, e.return, v);
          }
      }
      break;
    case 6:
      if (($e(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vr(t.containerInfo);
        } catch (v) {
          Y(e, e.return, v);
        }
      break;
    case 4:
      $e(t, e), Ze(e);
      break;
    case 13:
      $e(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sa = J())),
        r & 4 && uc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), $e(t, e), (pe = u)) : $e(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, d, d.return);
                  break;
                case 1:
                  kn(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      Y(r, n, v);
                    }
                  }
                  break;
                case 5:
                  kn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    fc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (A = y)) : fc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = od('display', s)));
              } catch (v) {
                Y(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                Y(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), Ze(e), r & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ar(i, ''), (r.flags &= -33));
          var o = ac(e);
          pl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = ac(e);
          hl(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ry(e, t, n) {
  (A = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Si;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Si;
        var u = pe;
        if (((Si = s), (pe = a) && !u))
          for (A = i; A !== null; )
            (s = A),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? dc(i)
                : a !== null
                ? ((a.return = s), (A = a))
                : dc(i);
        for (; o !== null; ) (A = o), jh(o), (o = o.sibling);
        (A = i), (Si = l), (pe = u);
      }
      cc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : cc(e);
  }
}
function cc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Do(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Vr(f);
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
              throw Error(k(163));
          }
        pe || (t.flags & 512 && dl(t));
      } catch (d) {
        Y(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function fc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function dc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Do(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, i, a);
            }
          }
          var o = t.return;
          try {
            dl(t);
          } catch (a) {
            Y(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            dl(t);
          } catch (a) {
            Y(t, s, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var Vy = Math.ceil,
  lo = mt.ReactCurrentDispatcher,
  xa = mt.ReactCurrentOwner,
  ze = mt.ReactCurrentBatchConfig,
  F = 0,
  se = null,
  b = null,
  ue = 0,
  Ee = 0,
  Pn = It(0),
  ne = 0,
  Wr = null,
  sn = 0,
  Lo = 0,
  wa = 0,
  Sr = null,
  Se = null,
  Sa = 0,
  Un = 1 / 0,
  rt = null,
  ao = !1,
  ml = null,
  Lt = null,
  ki = !1,
  Tt = null,
  uo = 0,
  kr = 0,
  yl = null,
  Oi = -1,
  Fi = 0;
function ve() {
  return F & 6 ? J() : Oi !== -1 ? Oi : (Oi = J());
}
function Rt(e) {
  return e.mode & 1
    ? F & 2 && ue !== 0
      ? ue & -ue
      : my.transition !== null
      ? (Fi === 0 && (Fi = vd()), Fi)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cd(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < kr) throw ((kr = 0), (yl = null), Error(k(185)));
  Zr(e, n, r),
    (!(F & 2) || e !== se) &&
      (e === se && (!(F & 2) && (Lo |= n), ne === 4 && kt(e, ue)),
      Ce(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Un = J() + 500), Eo && zt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  m0(e, t);
  var r = Gi(e, e === se ? ue : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? py(hc.bind(null, e)) : Hd(hc.bind(null, e)),
        cy(function () {
          !(F & 6) && zt();
        }),
        (n = null);
    else {
      switch (xd(r)) {
        case 1:
          n = Ql;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = gd;
          break;
        default:
          n = Ki;
      }
      n = $h(n, _h.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _h(e, t) {
  if (((Oi = -1), (Fi = 0), F & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (jn() && e.callbackNode !== n) return null;
  var r = Gi(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Fh();
    (se !== e || ue !== t) && ((rt = null), (Un = J() + 500), bt(e, t));
    do
      try {
        _y();
        break;
      } catch (l) {
        Oh(e, l);
      }
    while (!0);
    sa(),
      (lo.current = o),
      (F = i),
      b !== null ? (t = 0) : ((se = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ws(e)), i !== 0 && ((r = i), (t = gl(e, i)))), t === 1)
    )
      throw ((n = Wr), bt(e, 0), kt(e, r), Ce(e, J()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ny(i) &&
          ((t = co(e, r)),
          t === 2 && ((o = Ws(e)), o !== 0 && ((r = o), (t = gl(e, o)))),
          t === 1))
      )
        throw ((n = Wr), bt(e, 0), kt(e, r), Ce(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Gt(e, Se, rt);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Sa + 500 - J()), 10 < t))
          ) {
            if (Gi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qs(Gt.bind(null, e, Se, rt), t);
            break;
          }
          Gt(e, Se, rt);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qs(Gt.bind(null, e, Se, rt), r);
            break;
          }
          Gt(e, Se, rt);
          break;
        case 5:
          Gt(e, Se, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ce(e, J()), e.callbackNode === n ? _h.bind(null, e) : null;
}
function gl(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256),
    (e = co(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && vl(t)),
    e
  );
}
function vl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Ny(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kt(e, t) {
  for (
    t &= ~wa,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hc(e) {
  if (F & 6) throw Error(k(327));
  jn();
  var t = Gi(e, 0);
  if (!(t & 1)) return Ce(e, J()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ws(e);
    r !== 0 && ((t = r), (n = gl(e, r)));
  }
  if (n === 1) throw ((n = Wr), bt(e, 0), kt(e, t), Ce(e, J()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, Se, rt),
    Ce(e, J()),
    null
  );
}
function ka(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Un = J() + 500), Eo && zt());
  }
}
function ln(e) {
  Tt !== null && Tt.tag === 0 && !(F & 6) && jn();
  var t = F;
  F |= 1;
  var n = ze.transition,
    r = I;
  try {
    if (((ze.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (ze.transition = n), (F = t), !(F & 6) && zt();
  }
}
function Pa() {
  (Ee = Pn.current), U(Pn);
}
function bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), uy(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qi();
          break;
        case 3:
          zn(), U(Pe), U(ye), da();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          U(H);
          break;
        case 19:
          U(H);
          break;
        case 10:
          la(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (b = e = Vt(e.current, null)),
    (ue = Ee = t),
    (ne = 0),
    (Wr = null),
    (wa = Lo = sn = 0),
    (Se = Sr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function Oh(e, t) {
  do {
    var n = b;
    try {
      if ((sa(), (Ni.current = so), oo)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        oo = !1;
      }
      if (
        ((on = 0),
        (oe = te = G = null),
        (xr = !1),
        (Br = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Wr = t), (b = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = ec(s);
          if (y !== null) {
            (y.flags &= -257),
              tc(y, s, l, o, t),
              y.mode & 1 && bu(o, u, t),
              (t = y),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              bu(o, u, t), Ta();
              break e;
            }
            a = Error(k(426));
          }
        } else if (W && l.mode & 1) {
          var T = ec(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              tc(T, s, l, o, t),
              ia(Bn(a, l));
            break e;
          }
        }
        (o = a = Bn(a, l)),
          ne !== 4 && (ne = 2),
          Sr === null ? (Sr = [o]) : Sr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = xh(o, a, t);
              Qu(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Lt === null || !Lt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = wh(o, l, t);
                Qu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zh(n);
    } catch (S) {
      (t = S), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fh() {
  var e = lo.current;
  return (lo.current = so), e === null ? so : e;
}
function Ta() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    se === null || (!(sn & 268435455) && !(Lo & 268435455)) || kt(se, ue);
}
function co(e, t) {
  var n = F;
  F |= 2;
  var r = Fh();
  (se !== e || ue !== t) && ((rt = null), bt(e, t));
  do
    try {
      jy();
      break;
    } catch (i) {
      Oh(e, i);
    }
  while (!0);
  if ((sa(), (F = n), (lo.current = r), b !== null)) throw Error(k(261));
  return (se = null), (ue = 0), ne;
}
function jy() {
  for (; b !== null; ) Ih(b);
}
function _y() {
  for (; b !== null && !s0(); ) Ih(b);
}
function Ih(e) {
  var t = Uh(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? zh(e) : (b = t),
    (xa.current = null);
}
function zh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ay(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (b = null);
        return;
      }
    } else if (((n = My(n, t, Ee)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Gt(e, t, n) {
  var r = I,
    i = ze.transition;
  try {
    (ze.transition = null), (I = 1), Oy(e, t, n, r);
  } finally {
    (ze.transition = i), (I = r);
  }
  return null;
}
function Oy(e, t, n, r) {
  do jn();
  while (Tt !== null);
  if (F & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (y0(e, o),
    e === se && ((b = se = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      $h(Ki, function () {
        return jn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var s = I;
    I = 1;
    var l = F;
    (F |= 4),
      (xa.current = null),
      Ly(e, n),
      Nh(n, e),
      ny(Ys),
      (Qi = !!Xs),
      (Ys = Xs = null),
      (e.current = n),
      Ry(n),
      l0(),
      (F = l),
      (I = s),
      (ze.transition = o);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (Tt = e), (uo = i)),
    (o = e.pendingLanes),
    o === 0 && (Lt = null),
    c0(n.stateNode),
    Ce(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ao) throw ((ao = !1), (e = ml), (ml = null), e);
  return (
    uo & 1 && e.tag !== 0 && jn(),
    (o = e.pendingLanes),
    o & 1 ? (e === yl ? kr++ : ((kr = 0), (yl = e))) : (kr = 0),
    zt(),
    null
  );
}
function jn() {
  if (Tt !== null) {
    var e = xd(uo),
      t = ze.transition,
      n = I;
    try {
      if (((ze.transition = null), (I = 16 > e ? 16 : e), Tt === null))
        var r = !1;
      else {
        if (((e = Tt), (Tt = null), (uo = 0), F & 6)) throw Error(k(331));
        var i = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (A.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        y = c.return;
                      if ((Lh(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (A = d);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var T = v.sibling;
                    (v.sibling = null), (v = T);
                  } while (v !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (A = s);
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (A = p);
                break e;
              }
              A = o.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (A = m);
          else
            e: for (s = h; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(9, l);
                  }
                } catch (S) {
                  Y(l, l.return, S);
                }
              if (l === s) {
                A = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (A = x);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((F = i), zt(), be && typeof be.onPostCommitFiberRoot == 'function')
        )
          try {
            be.onPostCommitFiberRoot(So, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (ze.transition = t);
    }
  }
  return !1;
}
function pc(e, t, n) {
  (t = Bn(n, t)),
    (t = xh(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = ve()),
    e !== null && (Zr(e, 1, t), Ce(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Bn(n, e)),
            (e = wh(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = ve()),
            t !== null && (Zr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Fy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > J() - Sa)
        ? bt(e, 0)
        : (wa |= n)),
    Ce(e, t);
}
function Bh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
      : (t = 1));
  var n = ve();
  (e = dt(e, t)), e !== null && (Zr(e, t, n), Ce(e, n));
}
function Iy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bh(e, n);
}
function zy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Bh(e, n);
}
var Uh;
Uh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Ey(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), W && t.flags & 1048576 && Kd(t, eo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _i(e, t), (e = t.pendingProps);
      var i = On(t, ye.current);
      Nn(t, n), (i = pa(null, t, r, e, i, n));
      var o = ma();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Ji(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ua(t),
            (i.updater = Ao),
            (t.stateNode = i),
            (i._reactInternals = t),
            il(t, r, e, n),
            (t = ll(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && na(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Uy(r)),
          (e = He(r, e)),
          i)
        ) {
          case 0:
            t = sl(null, t, r, e, n);
            break e;
          case 1:
            t = ic(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        sl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        ic(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Th(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          qd(e, t),
          ro(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Bn(Error(k(423)), t)), (t = oc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Bn(Error(k(424)), t)), (t = oc(e, t, r, n, i));
            break e;
          } else
            for (
              Me = At(t.stateNode.containerInfo.firstChild),
                Ae = t,
                W = !0,
                Ge = null,
                n = Yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fn(), r === i)) {
            t = ht(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jd(t),
        e === null && tl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Zs(r, i) ? (s = null) : o !== null && Zs(r, o) && (t.flags |= 32),
        Ph(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && tl(t), null;
    case 13:
      return Ch(e, t, n);
    case 4:
      return (
        ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = In(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        nc(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(to, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ye(o.value, s)) {
            if (o.children === i.children && !Pe.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = lt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      nl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  nl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = He(r, t.pendingProps)),
        (i = He(r.type, i)),
        rc(e, t, r, i, n)
      );
    case 15:
      return Sh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        _i(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Ji(t)) : (e = !1),
        Nn(t, n),
        vh(t, r, i),
        il(t, r, i, n),
        ll(null, t, r, !0, e, n)
      );
    case 19:
      return Eh(e, t, n);
    case 22:
      return kh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function $h(e, t) {
  return md(e, t);
}
function By(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new By(e, t, n, r);
}
function Ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uy(e) {
  if (typeof e == 'function') return Ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hl)) return 11;
    if (e === Kl) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ii(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Ca(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case hn:
        return en(n.children, i, o, t);
      case Wl:
        (s = 8), (i |= 8);
        break;
      case As:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = As), (e.lanes = o), e
        );
      case Ds:
        return (e = Ie(13, n, t, i)), (e.elementType = Ds), (e.lanes = o), e;
      case Ls:
        return (e = Ie(19, n, t, i)), (e.elementType = Ls), (e.lanes = o), e;
      case Jf:
        return Ro(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Zf:
              s = 10;
              break e;
            case qf:
              s = 9;
              break e;
            case Hl:
              s = 11;
              break e;
            case Kl:
              s = 14;
              break e;
            case xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ie(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function en(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Ro(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ds(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function hs(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $y(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ea(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new $y(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ie(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ua(o),
    e
  );
}
function Wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wh(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Wd(e, n, t);
  }
  return t;
}
function Hh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ea(n, r, !0, e, i, o, s, l, a)),
    (e.context = Wh(null)),
    (n = e.current),
    (r = ve()),
    (i = Rt(n)),
    (o = lt(r, i)),
    (o.callback = t ?? null),
    Dt(n, o, i),
    (e.current.lanes = i),
    Zr(e, i, r),
    Ce(e, r),
    e
  );
}
function Vo(e, t, n, r) {
  var i = t.current,
    o = ve(),
    s = Rt(i);
  return (
    (n = Wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(i, t, s)),
    e !== null && (Xe(e, i, s, o), Vi(e, i, s)),
    s
  );
}
function fo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ma(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function Hy() {
  return null;
}
var Kh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Aa(e) {
  this._internalRoot = e;
}
No.prototype.render = Aa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Vo(e, t, null, null);
};
No.prototype.unmount = Aa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function () {
      Vo(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    St.splice(n, 0, e), n === 0 && Td(e);
  }
};
function Da(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function yc() {}
function Ky(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = fo(s);
        o.call(u);
      };
    }
    var s = Hh(t, r, e, 0, null, !1, !1, '', yc);
    return (
      (e._reactRootContainer = s),
      (e[ft] = s.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = fo(a);
      l.call(u);
    };
  }
  var a = Ea(e, 0, !1, null, null, !1, !1, '', yc);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      Vo(t, a, n, r);
    }),
    a
  );
}
function _o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var a = fo(s);
        l.call(a);
      };
    }
    Vo(t, s, e, i);
  } else s = Ky(n, t, e, i, r);
  return fo(s);
}
wd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 &&
          (Xl(t, n | 1), Ce(t, J()), !(F & 6) && ((Un = J() + 500), zt()));
      }
      break;
    case 13:
      ln(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var i = ve();
          Xe(r, e, 1, i);
        }
      }),
        Ma(e, 1);
  }
};
Yl = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Xe(t, e, 134217728, n);
    }
    Ma(e, 134217728);
  }
};
Sd = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = ve();
      Xe(n, e, t, r);
    }
    Ma(e, t);
  }
};
kd = function () {
  return I;
};
Pd = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Bs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ns(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Co(r);
            if (!i) throw Error(k(90));
            ed(r), Ns(r, i);
          }
        }
      }
      break;
    case 'textarea':
      nd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
ud = ka;
cd = ln;
var Gy = { usingClientEntryPoint: !1, Events: [Jr, gn, Co, ld, ad, ka] },
  or = {
    findFiberByHostInstance: Yt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Qy = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: or.findFiberByHostInstance || Hy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pi.isDisabled && Pi.supportsFiber)
    try {
      (So = Pi.inject(Qy)), (be = Pi);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Da(t)) throw Error(k(200));
  return Wy(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!Da(e)) throw Error(k(299));
  var n = !1,
    r = '',
    i = Kh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ea(e, 1, !1, null, null, n, !1, r, i)),
    (e[ft] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Aa(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = hd(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return ln(e);
};
Ve.hydrate = function (e, t, n) {
  if (!jo(t)) throw Error(k(200));
  return _o(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!Da(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Kh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Hh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ft] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new No(t);
};
Ve.render = function (e, t, n) {
  if (!jo(t)) throw Error(k(200));
  return _o(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!jo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (ln(function () {
        _o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = ka;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return _o(e, t, n, !1, r);
};
Ve.version = '18.3.1-next-f1338f8080-20240426';
function Gh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh);
    } catch (e) {
      console.error(e);
    }
}
Gh(), (Gf.exports = Ve);
var Xy = Gf.exports,
  Qh,
  gc = Xy;
(Qh = gc.createRoot), gc.hydrateRoot;
const Xh = R.createContext({});
function Yy(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const La = R.createContext(null),
  Yh = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  });
function Zy(e = !0) {
  const t = R.useContext(La);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = R.useId();
  R.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = R.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Ra = typeof window < 'u',
  qy = Ra ? R.useLayoutEffect : R.useEffect,
  De = (e) => e;
let xl = De;
function Va(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $n = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  at = (e) => e * 1e3,
  ut = (e) => e / 1e3,
  Jy = { skipAnimations: !1, useManualTiming: !1 };
function by(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    o.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const y = f && r ? t : n;
      return c && o.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(l),
        t.clear(),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Ti = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  eg = 40;
function Zh(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Ti.reduce((p, h) => ((p[h] = by(o)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    y = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, eg), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    g = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Ti.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (x, S = !1, C = !1) => (n || g(), m.schedule(x, S, C))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ti.length; h++) s[Ti[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: $,
    cancel: _t,
    state: ae,
    steps: ps,
  } = Zh(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : De, !0),
  qh = R.createContext({ strict: !1 }),
  vc = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Wn = {};
for (const e in vc) Wn[e] = { isEnabled: (t) => vc[e].some((n) => !!t[n]) };
function tg(e) {
  for (const t in e) Wn[t] = { ...Wn[t], ...e[t] };
}
const ng = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function ho(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    ng.has(e)
  );
}
let Jh = (e) => !ho(e);
function rg(e) {
  e && (Jh = (t) => (t.startsWith('on') ? !ho(t) : e(t)));
}
try {
  rg(require('@emotion/is-prop-valid').default);
} catch {}
function ig(e, t, n) {
  const r = {};
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((Jh(i) ||
        (n === !0 && ho(i)) ||
        (!t && !ho(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
function og(e) {
  if (typeof Proxy > 'u') return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Oo = R.createContext({});
function Hr(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Fo(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const Na = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  ja = ['initial', ...Na];
function Io(e) {
  return Fo(e.animate) || ja.some((t) => Hr(e[t]));
}
function bh(e) {
  return !!(Io(e) || e.variants);
}
function sg(e, t) {
  if (Io(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Hr(n) ? n : void 0,
      animate: Hr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function lg(e) {
  const { initial: t, animate: n } = sg(e, R.useContext(Oo));
  return R.useMemo(() => ({ initial: t, animate: n }), [xc(t), xc(n)]);
}
function xc(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const ag = Symbol.for('motionComponentSymbol');
function Tn(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function ug(e, t, n) {
  return R.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Tn(n) && (n.current = r));
    },
    [t]
  );
}
const _a = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  cg = 'framerAppearId',
  ep = 'data-' + _a(cg),
  { schedule: Oa, cancel: Lw } = Zh(queueMicrotask, !1),
  tp = R.createContext({});
function fg(e, t, n, r, i) {
  var o, s;
  const { visualElement: l } = R.useContext(Oo),
    a = R.useContext(qh),
    u = R.useContext(La),
    c = R.useContext(Yh).reducedMotion,
    f = R.useRef(null);
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    y = R.useContext(tp);
  d &&
    !d.projection &&
    i &&
    (d.type === 'html' || d.type === 'svg') &&
    dg(f.current, n, i, y);
  const g = R.useRef(!1);
  R.useInsertionEffect(() => {
    d && g.current && d.update(n, u);
  });
  const v = n[ep],
    T = R.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    qy(() => {
      d &&
        ((g.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Oa.render(d.render),
        T.current && d.animationState && d.animationState.animateChanges());
    }),
    R.useEffect(() => {
      d &&
        (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (T.current = !1)));
    }),
    d
  );
}
function dg(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : np(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (l && Tn(l)),
      visualElement: e,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function np(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : np(e.parent);
}
function hg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var o, s;
  e && tg(e);
  function l(u, c) {
    let f;
    const d = { ...R.useContext(Yh), ...u, layoutId: pg(u) },
      { isStatic: y } = d,
      g = lg(u),
      v = r(u, y);
    if (!y && Ra) {
      mg();
      const T = yg(d);
      (f = T.MeasureLayout),
        (g.visualElement = fg(i, v, d, t, T.ProjectionNode));
    }
    return w.jsxs(Oo.Provider, {
      value: g,
      children: [
        f && g.visualElement
          ? w.jsx(f, { visualElement: g.visualElement, ...d })
          : null,
        n(i, u, ug(v, g.visualElement, c), v, y, g.visualElement),
      ],
    });
  }
  l.displayName = `motion.${
    typeof i == 'string'
      ? i
      : `create(${
          (s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !==
            null && s !== void 0
            ? s
            : ''
        })`
  }`;
  const a = R.forwardRef(l);
  return (a[ag] = i), a;
}
function pg({ layoutId: e }) {
  const t = R.useContext(Xh).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function mg(e, t) {
  R.useContext(qh).strict;
}
function yg(e) {
  const { drag: t, layout: n } = Wn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const gg = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Fa(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(gg.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function wc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ia(e, t, n, r) {
  if (typeof t == 'function') {
    const [i, o] = wc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [i, o] = wc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const wl = (e) => Array.isArray(e),
  vg = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  xg = (e) => (wl(e) ? e[e.length - 1] || 0 : e),
  me = (e) => !!(e && e.getVelocity);
function zi(e) {
  const t = me(e) ? e.get() : e;
  return vg(t) ? t.toValue() : t;
}
function wg(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  o
) {
  const s = { latestValues: Sg(r, i, o, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (l) => n({ props: r, current: l, ...s })),
      (s.onUpdate = (l) => n(l))),
    s
  );
}
const rp = (e) => (t, n) => {
  const r = R.useContext(Oo),
    i = R.useContext(La),
    o = () => wg(e, t, r, i);
  return n ? o() : Yy(o);
};
function Sg(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = zi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Io(e),
    u = bh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  if (f && typeof f != 'boolean' && !Fo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let y = 0; y < d.length; y++) {
      const g = Ia(e, d[y]);
      if (g) {
        const { transitionEnd: v, transition: T, ...p } = g;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const Xn = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  cn = new Set(Xn),
  ip = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  op = ip('--'),
  kg = ip('var(--'),
  za = (e) => (kg(e) ? Pg.test(e.split('/*')[0].trim()) : !1),
  Pg =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  sp = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  pt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Yn = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  Kr = { ...Yn, transform: (e) => pt(0, 1, e) },
  Ci = { ...Yn, default: 1 },
  ei = (e) => ({
    test: (t) =>
      typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  vt = ei('deg'),
  tt = ei('%'),
  D = ei('px'),
  Tg = ei('vh'),
  Cg = ei('vw'),
  Sc = {
    ...tt,
    parse: (e) => tt.parse(e) / 100,
    transform: (e) => tt.transform(e * 100),
  },
  Eg = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
  },
  Mg = {
    rotate: vt,
    rotateX: vt,
    rotateY: vt,
    rotateZ: vt,
    scale: Ci,
    scaleX: Ci,
    scaleY: Ci,
    scaleZ: Ci,
    skew: vt,
    skewX: vt,
    skewY: vt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Kr,
    originX: Sc,
    originY: Sc,
    originZ: D,
  },
  kc = { ...Yn, transform: Math.round },
  Ba = {
    ...Eg,
    ...Mg,
    zIndex: kc,
    size: D,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: kc,
  },
  Ag = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Dg = Xn.length;
function Lg(e, t, n) {
  let r = '',
    i = !0;
  for (let o = 0; o < Dg; o++) {
    const s = Xn[o],
      l = e[s];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == 'number'
        ? (a = l === (s.startsWith('scale') ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = sp(l, Ba[s]);
      if (!a) {
        i = !1;
        const c = Ag[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r;
}
function Ua(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (cn.has(a)) {
      s = !0;
      continue;
    } else if (op(a)) {
      i[a] = u;
      continue;
    } else {
      const c = sp(u, Ba[a]);
      a.startsWith('origin') ? ((l = !0), (o[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Lg(t, e.transform, n))
        : r.transform && (r.transform = 'none')),
    l)
  ) {
    const { originX: a = '50%', originY: u = '50%', originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const Rg = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Vg = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function Ng(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Rg : Vg;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t),
    l = D.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Pc(e, t, n) {
  return typeof e == 'string' ? e : D.transform(t + n * e);
}
function jg(e, t, n) {
  const r = Pc(t, e.x, e.width),
    i = Pc(n, e.y, e.height);
  return `${r} ${i}`;
}
function $a(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((Ua(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: y, dimensions: g } = e;
  d.transform && (g && (y.transform = d.transform), delete d.transform),
    g &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = jg(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && Ng(d, s, l, a, !1);
}
const Wa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  lp = () => ({ ...Wa(), attrs: {} }),
  Ha = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function ap(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const up = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function cp(e, t, n, r) {
  ap(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(up.has(i) ? i : _a(i), t.attrs[i]);
}
const po = {};
function _g(e) {
  Object.assign(po, e);
}
function fp(e, { layout: t, layoutId: n }) {
  return (
    cn.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!po[e] || e === 'opacity'))
  );
}
function Ka(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (me(i[s]) ||
      (t.style && me(t.style[s])) ||
      fp(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function dp(e, t, n) {
  const r = Ka(e, t, n);
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const o =
        Xn.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function Og(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == 'function' ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Tc = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
  Fg = {
    useVisualState: rp({
      scrapeMotionValuesFromProps: dp,
      createRenderState: lp,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let o = !!e.drag;
        if (!o) {
          for (const l in i)
            if (cn.has(l)) {
              o = !0;
              break;
            }
        }
        if (!o) return;
        let s = !t;
        if (t)
          for (let l = 0; l < Tc.length; l++) {
            const a = Tc[l];
            e[a] !== t[a] && (s = !0);
          }
        s &&
          $.read(() => {
            Og(n, r),
              $.render(() => {
                $a(r, i, Ha(n.tagName), e.transformTemplate), cp(n, r);
              });
          });
      },
    }),
  },
  Ig = {
    useVisualState: rp({
      scrapeMotionValuesFromProps: Ka,
      createRenderState: Wa,
    }),
  };
function hp(e, t, n) {
  for (const r in t) !me(t[r]) && !fp(r, n) && (e[r] = t[r]);
}
function zg({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const n = Wa();
    return Ua(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Bg(e, t) {
  const n = e.style || {},
    r = {};
  return hp(r, n, e), Object.assign(r, zg(e, t)), r;
}
function Ug(e, t) {
  const n = {},
    r = Bg(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function $g(e, t, n, r) {
  const i = R.useMemo(() => {
    const o = lp();
    return (
      $a(o, t, Ha(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    hp(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Wg(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Fa(n) ? $g : Ug)(r, o, s, n),
      u = ig(r, typeof n == 'string', e),
      c = n !== R.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = R.useMemo(() => (me(f) ? f.get() : f), [f]);
    return R.createElement(n, { ...c, children: d });
  };
}
function Hg(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Fa(r) ? Fg : Ig),
      preloadedFeatures: e,
      useRender: Wg(i),
      createVisualElement: t,
      Component: r,
    };
    return hg(s);
  };
}
function pp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function zo(e, t, n) {
  const r = e.getProps();
  return Ia(r, t, n !== void 0 ? n : r.custom, e);
}
const Kg = Va(() => window.ScrollTimeline !== void 0);
class Gg {
  constructor(t) {
    (this.stop = () => this.runAll('stop')),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ('finished' in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (Kg() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == 'function') return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(t) {
    this.setAll('time', t);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(t) {
    this.setAll('speed', t);
  }
  get startTime() {
    return this.getAll('startTime');
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll('flatten');
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
class Qg extends Gg {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Ga(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Sl = 2e4;
function mp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Sl; ) (t += n), (r = e.next(t));
  return t >= Sl ? 1 / 0 : t;
}
function Qa(e) {
  return typeof e == 'function';
}
function Cc(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Xa = (e) => Array.isArray(e) && typeof e[0] == 'number',
  Xg = { linearEasing: void 0 };
function Yg(e, t) {
  const n = Va(e);
  return () => {
    var r;
    return (r = Xg[t]) !== null && r !== void 0 ? r : n();
  };
}
const mo = Yg(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  yp = (e, t, n = 10) => {
    let r = '';
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e($n(0, i - 1, o)) + ', ';
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function gp(e) {
  return !!(
    (typeof e == 'function' && mo()) ||
    !e ||
    (typeof e == 'string' && (e in kl || mo())) ||
    Xa(e) ||
    (Array.isArray(e) && e.every(gp))
  );
}
const fr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  kl = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: fr([0, 0.65, 0.55, 1]),
    circOut: fr([0.55, 0, 1, 0.45]),
    backIn: fr([0.31, 0.01, 0.66, -0.59]),
    backOut: fr([0.33, 1.53, 0.69, 0.99]),
  };
function vp(e, t) {
  if (e)
    return typeof e == 'function' && mo()
      ? yp(e, t)
      : Xa(e)
      ? fr(e)
      : Array.isArray(e)
      ? e.map((n) => vp(n, t) || kl.easeOut)
      : kl[e];
}
const We = { x: !1, y: !1 };
function xp() {
  return We.x || We.y;
}
function Zg(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == 'string') {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function wp(e, t) {
  const n = Zg(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Ec(e) {
  return (t) => {
    t.pointerType === 'touch' || xp() || e(t);
  };
}
function qg(e, t, n = {}) {
  const [r, i, o] = wp(e, n),
    s = Ec((l) => {
      const { target: a } = l,
        u = t(l);
      if (typeof u != 'function' || !a) return;
      const c = Ec((f) => {
        u(f), a.removeEventListener('pointerleave', c);
      });
      a.addEventListener('pointerleave', c, i);
    });
  return (
    r.forEach((l) => {
      l.addEventListener('pointerenter', s, i);
    }),
    o
  );
}
const Sp = (e, t) => (t ? (e === t ? !0 : Sp(e, t.parentElement)) : !1),
  Ya = (e) =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1,
  Jg = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function bg(e) {
  return Jg.has(e.tagName) || e.tabIndex !== -1;
}
const dr = new WeakSet();
function Mc(e) {
  return (t) => {
    t.key === 'Enter' && e(t);
  };
}
function ms(e, t) {
  e.dispatchEvent(
    new PointerEvent('pointer' + t, { isPrimary: !0, bubbles: !0 })
  );
}
const ev = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Mc(() => {
    if (dr.has(n)) return;
    ms(n, 'down');
    const i = Mc(() => {
        ms(n, 'up');
      }),
      o = () => ms(n, 'cancel');
    n.addEventListener('keyup', i, t), n.addEventListener('blur', o, t);
  });
  n.addEventListener('keydown', r, t),
    n.addEventListener('blur', () => n.removeEventListener('keydown', r), t);
};
function Ac(e) {
  return Ya(e) && !xp();
}
function tv(e, t, n = {}) {
  const [r, i, o] = wp(e, n),
    s = (l) => {
      const a = l.currentTarget;
      if (!Ac(l) || dr.has(a)) return;
      dr.add(a);
      const u = t(l),
        c = (y, g) => {
          window.removeEventListener('pointerup', f),
            window.removeEventListener('pointercancel', d),
            !(!Ac(y) || !dr.has(a)) &&
              (dr.delete(a), typeof u == 'function' && u(y, { success: g }));
        },
        f = (y) => {
          c(y, n.useGlobalTarget || Sp(a, y.target));
        },
        d = (y) => {
          c(y, !1);
        };
      window.addEventListener('pointerup', f, i),
        window.addEventListener('pointercancel', d, i);
    };
  return (
    r.forEach((l) => {
      !bg(l) && l.getAttribute('tabindex') === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener('pointerdown', s, i),
        l.addEventListener('focus', (u) => ev(u, i), i);
    }),
    o
  );
}
function nv(e) {
  return e === 'x' || e === 'y'
    ? We[e]
      ? null
      : ((We[e] = !0),
        () => {
          We[e] = !1;
        })
    : We.x || We.y
    ? null
    : ((We.x = We.y = !0),
      () => {
        We.x = We.y = !1;
      });
}
const kp = new Set([
  'width',
  'height',
  'top',
  'left',
  'right',
  'bottom',
  ...Xn,
]);
let Bi;
function rv() {
  Bi = void 0;
}
const nt = {
  now: () => (
    Bi === void 0 &&
      nt.set(
        ae.isProcessing || Jy.useManualTiming ? ae.timestamp : performance.now()
      ),
    Bi
  ),
  set: (e) => {
    (Bi = e), queueMicrotask(rv);
  },
};
function Za(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function qa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ja {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Za(this.subscriptions, t), () => qa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Pp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Dc = 30,
  iv = (e) => !isNaN(parseFloat(e));
class ov {
  constructor(t, n = {}) {
    (this.version = '11.18.2'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = nt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = nt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = iv(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ja());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            $.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = nt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Dc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Dc);
    return Pp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Gr(e, t) {
  return new ov(e, t);
}
function sv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gr(n));
}
function lv(e, t) {
  const n = zo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = xg(o[s]);
    sv(e, s, l);
  }
}
function av(e) {
  return !!(me(e) && e.add);
}
function Pl(e, t) {
  const n = e.getValue('willChange');
  if (av(n)) return n.add(t);
}
function Tp(e) {
  return e.props[ep];
}
const Cp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  uv = 1e-7,
  cv = 12;
function fv(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Cp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > uv && ++l < cv);
  return s;
}
function ti(e, t, n, r) {
  if (e === t && n === r) return De;
  const i = (o) => fv(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Cp(i(o), t, r));
}
const Ep = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Mp = (e) => (t) => 1 - e(1 - t),
  Ap = ti(0.33, 1.53, 0.69, 0.99),
  ba = Mp(Ap),
  Dp = Ep(ba),
  Lp = (e) =>
    (e *= 2) < 1 ? 0.5 * ba(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  eu = (e) => 1 - Math.sin(Math.acos(e)),
  Rp = Mp(eu),
  Vp = Ep(eu),
  Np = (e) => /^0[^.\s]+$/u.test(e);
function dv(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || Np(e)
    : !0;
}
const Pr = (e) => Math.round(e * 1e5) / 1e5,
  tu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function hv(e) {
  return e == null;
}
const pv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  nu = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && pv.test(n) && n.startsWith(e)) ||
      (t && !hv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  jp = (e, t, n) => (r) => {
    if (typeof r != 'string') return r;
    const [i, o, s, l] = r.match(tu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  mv = (e) => pt(0, 255, e),
  ys = { ...Yn, transform: (e) => Math.round(mv(e)) },
  Jt = {
    test: nu('rgb', 'red'),
    parse: jp('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      ys.transform(e) +
      ', ' +
      ys.transform(t) +
      ', ' +
      ys.transform(n) +
      ', ' +
      Pr(Kr.transform(r)) +
      ')',
  };
function yv(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Tl = { test: nu('#'), parse: yv, transform: Jt.transform },
  Cn = {
    test: nu('hsl', 'hue'),
    parse: jp('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      tt.transform(Pr(t)) +
      ', ' +
      tt.transform(Pr(n)) +
      ', ' +
      Pr(Kr.transform(r)) +
      ')',
  },
  he = {
    test: (e) => Jt.test(e) || Tl.test(e) || Cn.test(e),
    parse: (e) =>
      Jt.test(e) ? Jt.parse(e) : Cn.test(e) ? Cn.parse(e) : Tl.parse(e),
    transform: (e) =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
        ? Jt.transform(e)
        : Cn.transform(e),
  },
  gv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(tu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(gv)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const _p = 'number',
  Op = 'color',
  xv = 'var',
  wv = 'var(',
  Lc = '${}',
  Sv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = t
    .replace(
      Sv,
      (a) => (
        he.test(a)
          ? (r.color.push(o), i.push(Op), n.push(he.parse(a)))
          : a.startsWith(wv)
          ? (r.var.push(o), i.push(xv), n.push(a))
          : (r.number.push(o), i.push(_p), n.push(parseFloat(a))),
        ++o,
        Lc
      )
    )
    .split(Lc);
  return { values: n, split: l, indexes: r, types: i };
}
function Fp(e) {
  return Qr(e).values;
}
function Ip(e) {
  const { split: t, types: n } = Qr(e),
    r = t.length;
  return (i) => {
    let o = '';
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === _p
          ? (o += Pr(i[s]))
          : l === Op
          ? (o += he.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const kv = (e) => (typeof e == 'number' ? 0 : e);
function Pv(e) {
  const t = Fp(e);
  return Ip(e)(t.map(kv));
}
const Ot = {
    test: vv,
    parse: Fp,
    createTransformer: Ip,
    getAnimatableNone: Pv,
  },
  Tv = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Cv(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(tu) || [];
  if (!r) return e;
  const i = n.replace(r, '');
  let o = Tv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + '(' + o + i + ')';
}
const Ev = /\b([a-z-]*)\(.*?\)/gu,
  Cl = {
    ...Ot,
    getAnimatableNone: (e) => {
      const t = e.match(Ev);
      return t ? t.map(Cv).join(' ') : e;
    },
  },
  Mv = {
    ...Ba,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Cl,
    WebkitFilter: Cl,
  },
  ru = (e) => Mv[e];
function zp(e, t) {
  let n = ru(e);
  return (
    n !== Cl && (n = Ot), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Av = new Set(['auto', 'none', '0']);
function Dv(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == 'string' && !Av.has(o) && Qr(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = zp(n, i);
}
const Rc = (e) => e === Yn || e === D,
  Vc = (e, t) => parseFloat(e.split(', ')[t]),
  Nc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Vc(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Vc(o[1], e) : 0;
      }
    },
  Lv = new Set(['x', 'y', 'z']),
  Rv = Xn.filter((e) => !Lv.has(e));
function Vv(e) {
  const t = [];
  return (
    Rv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const Hn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Nc(4, 13),
  y: Nc(5, 14),
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const tn = new Set();
let El = !1,
  Ml = !1;
function Bp() {
  if (Ml) {
    const e = Array.from(tn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Vv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var l;
            (l = r.getValue(o)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ml = !1), (El = !1), tn.forEach((e) => e.complete()), tn.clear();
}
function Up() {
  tn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ml = !0);
  });
}
function Nv() {
  Up(), Bp();
}
class iu {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (tn.add(this), El || ((El = !0), $.read(Up), $.resolveKeyframes(Bp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      tn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), tn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const $p = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  jv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _v(e) {
  const t = jv.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Wp(e, t, n = 1) {
  const [r, i] = _v(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return $p(s) ? parseFloat(s) : s;
  }
  return za(i) ? Wp(i, t, n + 1) : i;
}
const Hp = (e) => (t) => t.test(e),
  Ov = { test: (e) => e === 'auto', parse: (e) => e },
  Kp = [Yn, D, tt, vt, Cg, Tg, Ov],
  jc = (e) => Kp.find(Hp(e));
class Gp extends iu {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == 'string' && ((u = u.trim()), za(u))) {
        const c = Wp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !kp.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = jc(i),
      l = jc(o);
    if (s !== l)
      if (Rc(s) && Rc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == 'string' && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) dv(t[i]) && r.push(i);
    r.length && Dv(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Hn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      l = i[s];
    (i[s] = Hn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const _c = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' &&
          (Ot.test(e) || e === '0') &&
          !e.startsWith('url('))
      );
function Fv(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Iv(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const o = e[e.length - 1],
    s = _c(i, t),
    l = _c(o, t);
  return !s || !l ? !1 : Fv(e) || ((n === 'spring' || Qa(n)) && r);
}
const zv = (e) => e !== null;
function Bo(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(zv),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Bv = 40;
class Qp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = nt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Bv
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Nv(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = nt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Iv(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        a && a(Bo(t, this.options, n)), l && l(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = 'keyframes'), (this.options.ease = 'linear');
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const K = (e, t, n) => e + (t - e) * n;
function gs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Uv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = gs(a, l, e + 1 / 3)), (o = gs(a, l, e)), (s = gs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function yo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const vs = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  $v = [Tl, Jt, Cn],
  Wv = (e) => $v.find((t) => t.test(e));
function Oc(e) {
  const t = Wv(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Cn && (n = Uv(n)), n;
}
const Fc = (e, t) => {
    const n = Oc(e),
      r = Oc(t);
    if (!n || !r) return yo(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = vs(n.red, r.red, o)),
      (i.green = vs(n.green, r.green, o)),
      (i.blue = vs(n.blue, r.blue, o)),
      (i.alpha = K(n.alpha, r.alpha, o)),
      Jt.transform(i)
    );
  },
  Hv = (e, t) => (n) => t(e(n)),
  ni = (...e) => e.reduce(Hv),
  Al = new Set(['none', 'hidden']);
function Kv(e, t) {
  return Al.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Gv(e, t) {
  return (n) => K(e, t, n);
}
function ou(e) {
  return typeof e == 'number'
    ? Gv
    : typeof e == 'string'
    ? za(e)
      ? yo
      : he.test(e)
      ? Fc
      : Yv
    : Array.isArray(e)
    ? Xp
    : typeof e == 'object'
    ? he.test(e)
      ? Fc
      : Qv
    : yo;
}
function Xp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => ou(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function Qv(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ou(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function Xv(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const Yv = (e, t) => {
  const n = Ot.createTransformer(t),
    r = Qr(e),
    i = Qr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Al.has(e) && !i.values.length) || (Al.has(t) && !r.values.length)
      ? Kv(e, t)
      : ni(Xp(Xv(r, i), i.values), n)
    : yo(e, t);
};
function Yp(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? K(e, t, n)
    : ou(e)(e, t);
}
const Zv = 5;
function Zp(e, t, n) {
  const r = Math.max(t - Zv, 0);
  return Pp(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  xs = 0.001;
function qv({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    o,
    s = 1 - t;
  (s = pt(X.minDamping, X.maxDamping, s)),
    (e = pt(X.minDuration, X.maxDuration, ut(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            y = Dl(u, s),
            g = Math.exp(-f);
          return xs - (d / y) * g;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-f),
            v = Dl(Math.pow(u, 2), s);
          return ((-i(u) + xs > 0 ? -1 : 1) * ((d - y) * g)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -xs + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = bv(i, o, l);
  if (((e = at(e)), isNaN(a)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Jv = 12;
function bv(e, t, n) {
  let r = n;
  for (let i = 1; i < Jv; i++) r = r - e(r) / t(r);
  return r;
}
function Dl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const e1 = ['duration', 'bounce'],
  t1 = ['stiffness', 'damping', 'mass'];
function Ic(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function n1(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ic(e, t1) && Ic(e, e1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * pt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: o };
    } else {
      const n = qv(e);
      (t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function qp(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != 'object'
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: o },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: y,
    } = n1({ ...n, velocity: -ut(n.velocity || 0) }),
    g = d || 0,
    v = u / (2 * Math.sqrt(a * c)),
    T = s - o,
    p = ut(Math.sqrt(a / c)),
    h = Math.abs(T) < 5;
  r || (r = h ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = h ? X.restDelta.granular : X.restDelta.default);
  let m;
  if (v < 1) {
    const S = Dl(p, v);
    m = (C) => {
      const E = Math.exp(-v * p * C);
      return (
        s - E * (((g + v * p * T) / S) * Math.sin(S * C) + T * Math.cos(S * C))
      );
    };
  } else if (v === 1) m = (S) => s - Math.exp(-p * S) * (T + (g + p * T) * S);
  else {
    const S = p * Math.sqrt(v * v - 1);
    m = (C) => {
      const E = Math.exp(-v * p * C),
        P = Math.min(S * C, 300);
      return (
        s - (E * ((g + v * p * T) * Math.sinh(P) + S * T * Math.cosh(P))) / S
      );
    };
  }
  const x = {
    calculatedDuration: (y && f) || null,
    next: (S) => {
      const C = m(S);
      if (y) l.done = S >= f;
      else {
        let E = 0;
        v < 1 && (E = S === 0 ? at(g) : Zp(m, S, C));
        const P = Math.abs(E) <= r,
          _ = Math.abs(s - C) <= i;
        l.done = P && _;
      }
      return (l.value = l.done ? s : C), l;
    },
    toString: () => {
      const S = Math.min(mp(x), Sl),
        C = yp((E) => x.next(S * E).value, S, 30);
      return S + 'ms ' + C;
    },
  };
  return x;
}
function zc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    y = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    g = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const T = f + v,
    p = s === void 0 ? T : s(T);
  p !== T && (v = p - f);
  const h = (P) => -v * Math.exp(-P / r),
    m = (P) => p + h(P),
    x = (P) => {
      const _ = h(P),
        L = m(P);
      (d.done = Math.abs(_) <= u), (d.value = d.done ? p : L);
    };
  let S, C;
  const E = (P) => {
    y(d.value) &&
      ((S = P),
      (C = qp({
        keyframes: [d.value, g(d.value)],
        velocity: Zp(m, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let _ = !1;
        return (
          !C && S === void 0 && ((_ = !0), x(P), E(P)),
          S !== void 0 && P >= S ? C.next(P - S) : (!_ && x(P), d)
        );
      },
    }
  );
}
const r1 = ti(0.42, 0, 1, 1),
  i1 = ti(0, 0, 0.58, 1),
  Jp = ti(0.42, 0, 0.58, 1),
  o1 = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Bc = {
    linear: De,
    easeIn: r1,
    easeInOut: Jp,
    easeOut: i1,
    circIn: eu,
    circInOut: Vp,
    circOut: Rp,
    backIn: ba,
    backInOut: Dp,
    backOut: Ap,
    anticipate: Lp,
  },
  Uc = (e) => {
    if (Xa(e)) {
      xl(e.length === 4);
      const [t, n, r, i] = e;
      return ti(t, n, r, i);
    } else if (typeof e == 'string') return xl(Bc[e] !== void 0), Bc[e];
    return e;
  };
function s1(e, t, n) {
  const r = [],
    i = n || Yp,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || De : t;
      l = ni(a, l);
    }
    r.push(l);
  }
  return r;
}
function l1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((xl(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = s1(t, r, i),
    a = l.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = $n(e[f], e[f + 1], c);
      return l[f](d);
    };
  return n ? (c) => u(pt(e[0], e[o - 1], c)) : u;
}
function a1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = $n(0, t, r);
    e.push(K(n, 1, i));
  }
}
function u1(e) {
  const t = [0];
  return a1(t, e.length - 1), t;
}
function c1(e, t) {
  return e.map((n) => n * t);
}
function f1(e, t) {
  return e.map(() => t || Jp).splice(0, e.length - 1);
}
function go({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  const i = o1(r) ? r.map(Uc) : Uc(r),
    o = { done: !1, value: t[0] },
    s = c1(n && n.length === t.length ? n : u1(t), e),
    l = l1(s, t, { ease: Array.isArray(i) ? i : f1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
const d1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => $.update(t, !0),
      stop: () => _t(t),
      now: () => (ae.isProcessing ? ae.timestamp : nt.now()),
    };
  },
  h1 = { decay: zc, inertia: zc, tween: go, keyframes: go, spring: qp },
  p1 = (e) => e / 100;
class su extends Qp {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || iu,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      l = Qa(n) ? n : h1[n] || go;
    let a, u;
    l !== go &&
      typeof t[0] != 'number' &&
      ((a = ni(p1, Yp(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    o === 'mirror' &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = mp(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      y = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: y,
      repeatType: g,
      repeatDelay: v,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      x = o;
    if (y) {
      const P = Math.min(this.currentTime, c) / f;
      let _ = Math.floor(P),
        L = P % 1;
      !L && P >= 1 && (L = 1),
        L === 1 && _--,
        (_ = Math.min(_, y + 1)),
        !!(_ % 2) &&
          (g === 'reverse'
            ? ((L = 1 - L), v && (L -= v / f))
            : g === 'mirror' && (x = s)),
        (m = pt(0, 1, L) * f);
    }
    const S = h ? { done: !1, value: a[0] } : x.next(m);
    l && (S.value = l(S.value));
    let { done: C } = S;
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && C));
    return (
      E && i !== void 0 && (S.value = Bo(a, this.options, i)),
      T && T(S.value),
      E && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ut(t.calculatedDuration) : 0;
  }
  get time() {
    return ut(this.currentTime);
  }
  set time(t) {
    (t = at(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ut(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = d1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === 'finished' && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const m1 = new Set(['opacity', 'clipPath', 'filter', 'transform']);
function y1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: l = 'easeInOut',
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = vp(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: o + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
const g1 = Va(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  vo = 10,
  v1 = 2e4;
function x1(e) {
  return Qa(e.type) || e.type === 'spring' || !gp(e.ease);
}
function w1(e, t) {
  const n = new su({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < v1; ) (r = n.sample(o)), i.push(r.value), (o += vo);
  return { times: void 0, keyframes: i, duration: o - vo, ease: 'linear' };
}
const bp = { anticipate: Lp, backInOut: Dp, circInOut: Vp };
function S1(e) {
  return e in bp;
}
class $c extends Qp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Gp(
      o,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: l,
      name: a,
      startTime: u,
    } = this.options;
    if (!l.owner || !l.owner.current) return !1;
    if (
      (typeof o == 'string' && mo() && S1(o) && (o = bp[o]), x1(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: y,
          element: g,
          ...v
        } = this.options,
        T = w1(t, v);
      (t = T.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = T.duration),
        (i = T.times),
        (o = T.ease),
        (s = 'keyframes');
    }
    const c = y1(l.owner.current, a, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Cc(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(Bo(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ut(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ut(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = at(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return De;
      const { animation: r } = n;
      Cc(r, t);
    }
    return De;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === 'finished' && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t;
    if (n.playState === 'idle' || n.playState === 'finished') return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...y
        } = this.options,
        g = new su({
          ...y,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: l,
          isGenerator: !0,
        }),
        v = at(this.time);
      u.setWithVelocity(g.sample(v - vo).value, g.sample(v).value, vo);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: a, transformTemplate: u } = n.owner.getProps();
    return (
      g1() &&
      r &&
      m1.has(r) &&
      !a &&
      !u &&
      !i &&
      o !== 'mirror' &&
      s !== 0 &&
      l !== 'inertia'
    );
  }
}
const k1 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  P1 = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  T1 = { type: 'keyframes', duration: 0.8 },
  C1 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  E1 = (e, { keyframes: t }) =>
    t.length > 2
      ? T1
      : cn.has(e)
      ? e.startsWith('scale')
        ? P1(t[1])
        : k1
      : C1;
function M1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const lu =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const l = Ga(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - at(a);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), l.onUpdate && l.onUpdate(d);
      },
      onComplete: () => {
        s(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    M1(l) || (c = { ...c, ...E1(e, c) }),
      c.duration && (c.duration = at(c.duration)),
      c.repeatDelay && (c.repeatDelay = at(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = Bo(c.keyframes, l);
      if (d !== void 0)
        return (
          $.update(() => {
            c.onUpdate(d), c.onComplete();
          }),
          new Qg([])
        );
    }
    return !o && $c.supports(c) ? new $c(c) : new su(c);
  };
function A1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function em(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      y = a[f];
    if (y === void 0 || (c && A1(c, f))) continue;
    const g = { delay: n, ...Ga(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = Tp(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, $);
        h !== null && ((g.startTime = h), (v = !0));
      }
    }
    Pl(e, f),
      d.start(
        lu(f, d, y, e.shouldReduceMotion && kp.has(f) ? { type: !1 } : g, e, v)
      );
    const T = d.animation;
    T && u.push(T);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        $.update(() => {
          l && lv(e, l);
        });
      }),
    u
  );
}
function Ll(e, t, n = {}) {
  var r;
  const i = zo(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(em(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return D1(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function D1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(L1)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          s.push(
            Ll(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(s)
  );
}
function L1(e, t) {
  return e.sortNodePosition(t);
}
function R1(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ll(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = Ll(e, t, n);
  else {
    const i = typeof t == 'function' ? zo(e, t, n.custom) : t;
    r = Promise.all(em(e, i, n));
  }
  return r.then(() => {
    e.notify('AnimationComplete', t);
  });
}
const V1 = ja.length;
function tm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? tm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < V1; n++) {
    const r = ja[n],
      i = e.props[r];
    (Hr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const N1 = [...Na].reverse(),
  j1 = Na.length;
function _1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => R1(e, n, r)));
}
function O1(e) {
  let t = _1(e),
    n = Wc(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = zo(
      e,
      c,
      a === 'exit'
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: y, transitionEnd: g, ...v } = d;
      u = { ...u, ...v, ...g };
    }
    return u;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const { props: u } = e,
      c = tm(e.parent) || {},
      f = [],
      d = new Set();
    let y = {},
      g = 1 / 0;
    for (let T = 0; T < j1; T++) {
      const p = N1[T],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        x = Hr(m),
        S = p === a ? h.isActive : null;
      S === !1 && (g = T);
      let C = m === c[p] && m !== u[p] && x;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Fo(m) ||
          typeof m == 'boolean')
      )
        continue;
      const E = F1(h.prevProp, m);
      let P = E || (p === a && h.isActive && !C && x) || (T > g && x),
        _ = !1;
      const L = Array.isArray(m) ? m : [m];
      let re = L.reduce(i(p), {});
      S === !1 && (re = {});
      const { prevResolvedValues: yt = {} } = h,
        Ut = { ...yt, ...re },
        qn = (ee) => {
          (P = !0),
            d.has(ee) && ((_ = !0), d.delete(ee)),
            (h.needsAnimating[ee] = !0);
          const M = e.getValue(ee);
          M && (M.liveStyle = !1);
        };
      for (const ee in Ut) {
        const M = re[ee],
          V = yt[ee];
        if (y.hasOwnProperty(ee)) continue;
        let N = !1;
        wl(M) && wl(V) ? (N = !pp(M, V)) : (N = M !== V),
          N
            ? M != null
              ? qn(ee)
              : d.add(ee)
            : M !== void 0 && d.has(ee)
            ? qn(ee)
            : (h.protectedKeys[ee] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = re),
        h.isActive && (y = { ...y, ...re }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(C && E) || _) &&
          f.push(...L.map((ee) => ({ animation: ee, options: { type: p } })));
    }
    if (d.size) {
      const T = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (T[p] = h ?? null);
      }),
        f.push({ animation: T });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var y;
        return (y = d.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = s(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Wc()), (r = !0);
    },
  };
}
function F1(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !pp(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Wc() {
  return {
    animate: Ht(!0),
    whileInView: Ht(),
    whileHover: Ht(),
    whileTap: Ht(),
    whileDrag: Ht(),
    whileFocus: Ht(),
    exit: Ht(),
  };
}
class Bt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class I1 extends Bt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = O1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Fo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let z1 = 0;
class B1 extends Bt {
  constructor() {
    super(...arguments), (this.id = z1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive('exit', !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const U1 = { animation: { Feature: I1 }, exit: { Feature: B1 } };
function Xr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ri(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const $1 = (e) => (t) => Ya(t) && e(t, ri(t));
function Tr(e, t, n, r) {
  return Xr(e, t, $1(n), r);
}
const Hc = (e, t) => Math.abs(e - t);
function W1(e, t) {
  const n = Hc(e.x, t.x),
    r = Hc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class nm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Ss(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          y = W1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y) return;
        const { point: g } = f,
          { timestamp: v } = ae;
        this.history.push({ ...g, timestamp: v });
        const { onStart: T, onMove: p } = this.handlers;
        d ||
          (T && T(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ws(d, this.transformPagePoint)),
          $.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Ss(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : ws(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(f, T), g && g(f, T);
      }),
      !Ya(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = ri(t),
      l = ws(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ae;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ss(l, this.history)),
      (this.removeListeners = ni(
        Tr(this.contextWindow, 'pointermove', this.handlePointerMove),
        Tr(this.contextWindow, 'pointerup', this.handlePointerUp),
        Tr(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), _t(this.updatePoint);
  }
}
function ws(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Kc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ss({ point: e }, t) {
  return {
    point: e,
    delta: Kc(e, rm(t)),
    offset: Kc(e, H1(t)),
    velocity: K1(t, 0.1),
  };
}
function H1(e) {
  return e[0];
}
function rm(e) {
  return e[e.length - 1];
}
function K1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = rm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > at(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ut(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const im = 1e-4,
  G1 = 1 - im,
  Q1 = 1 + im,
  om = 0.01,
  X1 = 0 - om,
  Y1 = 0 + om;
function Re(e) {
  return e.max - e.min;
}
function Z1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Gc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= G1 && e.scale <= Q1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= X1 && e.translate <= Y1) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Cr(e, t, n, r) {
  Gc(e.x, t.x, n.x, r ? r.originX : void 0),
    Gc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Qc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function q1(e, t, n) {
  Qc(e.x, t.x, n.x), Qc(e.y, t.y, n.y);
}
function Xc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Er(e, t, n) {
  Xc(e.x, t.x, n.x), Xc(e.y, t.y, n.y);
}
function J1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Yc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function b1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Yc(e.x, n, i), y: Yc(e.y, t, r) };
}
function Zc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ex(e, t) {
  return { x: Zc(e.x, t.x), y: Zc(e.y, t.y) };
}
function tx(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = $n(t.min, t.max - r, e.min))
      : r > i && (n = $n(e.min, e.max - i, t.min)),
    pt(0, 1, n)
  );
}
function nx(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Rl = 0.35;
function rx(e = Rl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Rl),
    { x: qc(e, 'left', 'right'), y: qc(e, 'top', 'bottom') }
  );
}
function qc(e, t, n) {
  return { min: Jc(e, t), max: Jc(e, n) };
}
function Jc(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const bc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  En = () => ({ x: bc(), y: bc() }),
  ef = () => ({ min: 0, max: 0 }),
  q = () => ({ x: ef(), y: ef() });
function _e(e) {
  return [e('x'), e('y')];
}
function sm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ix({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ox(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ks(e) {
  return e === void 0 || e === 1;
}
function Vl({ scale: e, scaleX: t, scaleY: n }) {
  return !ks(e) || !ks(t) || !ks(n);
}
function Qt(e) {
  return (
    Vl(e) ||
    lm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function lm(e) {
  return tf(e.x) || tf(e.y);
}
function tf(e) {
  return e && e !== '0%';
}
function xo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function nf(e, t, n, r, i) {
  return i !== void 0 && (e = xo(e, i, r)), xo(e, n, r) + t;
}
function Nl(e, t = 0, n = 1, r, i) {
  (e.min = nf(e.min, t, n, r, i)), (e.max = nf(e.max, t, n, r, i));
}
function am(e, { x: t, y: n }) {
  Nl(e.x, t.translate, t.scale, t.originPoint),
    Nl(e.y, n.translate, n.scale, n.originPoint);
}
const rf = 0.999999999999,
  of = 1.0000000000001;
function sx(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const { visualElement: a } = o.options;
    (a && a.props.style && a.props.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        An(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), am(e, s)),
      r && Qt(o.latestValues) && An(e, o.latestValues));
  }
  t.x < of && t.x > rf && (t.x = 1), t.y < of && t.y > rf && (t.y = 1);
}
function Mn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function sf(e, t, n, r, i = 0.5) {
  const o = K(e.min, e.max, i);
  Nl(e, t, n, o, r);
}
function An(e, t) {
  sf(e.x, t.x, t.scaleX, t.scale, t.originX),
    sf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function um(e, t) {
  return sm(ox(e.getBoundingClientRect(), t));
}
function lx(e, t, n) {
  const r = um(e, n),
    { scroll: i } = t;
  return i && (Mn(r.x, i.offset.x), Mn(r.y, i.offset.y)), r;
}
const cm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ax = new WeakMap();
class ux {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ri(c).point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: g } = this.getProps();
        if (
          d &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = nv(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((T) => {
            let p = this.getAxisMotionValue(T).get() || 0;
            if (tt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[T];
                m && (p = Re(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[T] = p;
          }),
          g && $.postRender(() => g(c, f)),
          Pl(this.visualElement, 'transform');
        const { animationState: v } = this.visualElement;
        v && v.setActive('whileDrag', !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: y,
          onDirectionLock: g,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: T } = f;
        if (y && this.currentDirection === null) {
          (this.currentDirection = cx(T)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis('x', f.point, T),
          this.updateAxis('y', f.point, T),
          this.visualElement.render(),
          v && v(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        _e((c) => {
          var f;
          return (
            this.getAnimationState(c) === 'paused' &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new nm(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: cm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && $.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ei(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = J1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Tn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = b1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = rx(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = nx(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Tn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = lx(r, i.root, this.visualElement.getTransformPagePoint());
    let s = ex(i.layout.layoutBox, o);
    if (n) {
      const l = n(ix(s));
      (this.hasMutatedConstraints = !!l), l && (s = sm(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = _e((c) => {
        if (!Ei(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          g = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, g);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Pl(this.visualElement, t), r.start(lu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!Ei(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - K(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Tn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = tx({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((s) => {
        if (!Ei(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(K(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ax.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Tr(t, 'pointerdown', (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Tn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      $.read(r);
    const s = Xr(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        'didUpdate',
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_e((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Rl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ei(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function cx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class fx extends Bt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = De),
      (this.removeListeners = De),
      (this.controls = new ux(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || De);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const lf = (e) => (t, n) => {
  e && $.postRender(() => e(t, n));
};
class dx extends Bt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = De);
  }
  onPointerDown(t) {
    this.session = new nm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: cm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: lf(t),
      onStart: lf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && $.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Tr(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function af(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const sr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = af(e, t.target.x),
        r = af(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  hx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ot.parse(e);
      if (i.length > 5) return r;
      const o = Ot.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = K(l, a, 0.5);
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= u),
        typeof i[3 + s] == 'number' && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class px extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    _g(mx),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ui.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              $.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Oa.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function fm(e) {
  const [t, n] = Zy(),
    r = R.useContext(Xh);
  return w.jsx(px, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: R.useContext(tp),
    isPresent: t,
    safeToRemove: n,
  });
}
const mx = {
  borderRadius: {
    ...sr,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: sr,
  borderTopRightRadius: sr,
  borderBottomLeftRadius: sr,
  borderBottomRightRadius: sr,
  boxShadow: hx,
};
function yx(e, t, n) {
  const r = me(e) ? e : Gr(e);
  return r.start(lu('', r, t, n)), r.animation;
}
function gx(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
const vx = (e, t) => e.depth - t.depth;
class xx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Za(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    qa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(vx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function wx(e, t) {
  const n = nt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (_t(r), e(o - t));
    };
  return $.read(r, !0), () => _t(r);
}
const dm = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Sx = dm.length,
  uf = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  cf = (e) => typeof e == 'number' || D.test(e);
function kx(e, t, n, r, i, o) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, Px(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, Tx(r))))
    : o &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Sx; s++) {
    const l = `border${dm[s]}Radius`;
    let a = ff(t, l),
      u = ff(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || cf(a) === cf(u)
        ? ((e[l] = Math.max(K(uf(a), uf(u), r), 0)),
          (tt.test(u) || tt.test(a)) && (e[l] += '%'))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function ff(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Px = hm(0, 0.5, Rp),
  Tx = hm(0.5, 0.95, De);
function hm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n($n(e, t, r)));
}
function df(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function je(e, t) {
  df(e.x, t.x), df(e.y, t.y);
}
function hf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function pf(e, t, n, r, i) {
  return (
    (e -= t), (e = xo(e, 1 / n, r)), i !== void 0 && (e = xo(e, 1 / i, r)), e
  );
}
function Cx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (tt.test(t) &&
      ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let l = K(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = pf(e.min, t, n, l, i)),
    (e.max = pf(e.max, t, n, l, i));
}
function mf(e, t, [n, r, i], o, s) {
  Cx(e, t[n], t[r], t[i], t.scale, o, s);
}
const Ex = ['x', 'scaleX', 'originX'],
  Mx = ['y', 'scaleY', 'originY'];
function yf(e, t, n, r) {
  mf(e.x, t, Ex, n ? n.x : void 0, r ? r.x : void 0),
    mf(e.y, t, Mx, n ? n.y : void 0, r ? r.y : void 0);
}
function gf(e) {
  return e.translate === 0 && e.scale === 1;
}
function pm(e) {
  return gf(e.x) && gf(e.y);
}
function vf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ax(e, t) {
  return vf(e.x, t.x) && vf(e.y, t.y);
}
function xf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function mm(e, t) {
  return xf(e.x, t.x) && xf(e.y, t.y);
}
function wf(e) {
  return Re(e.x) / Re(e.y);
}
function Sf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Dx {
  constructor() {
    this.members = [];
  }
  add(t) {
    Za(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (qa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Lx(e, t, n) {
  let r = '';
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: y,
      skewY: g,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      y && (r += `skewX(${y}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none';
}
const Xt = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  hr = typeof window < 'u' && window.MotionDebug !== void 0,
  Ps = ['', 'X', 'Y', 'Z'],
  Rx = { visibility: 'hidden' },
  kf = 1e3;
let Vx = 0;
function Ts(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ym(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Tp(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', $, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ym(r);
}
function gm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = Vx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            hr &&
              (Xt.totalNodes =
                Xt.resolvedTargetDeltas =
                Xt.recalculatedProjection =
                  0),
            this.nodes.forEach(_x),
            this.nodes.forEach(Bx),
            this.nodes.forEach(Ux),
            this.nodes.forEach(Ox),
            hr && window.MotionDebug.record(Xt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xx());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ja()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = gx(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = wx(d, 250)),
            Ui.hasAnimatedSinceResize &&
              ((Ui.hasAnimatedSinceResize = !1), this.nodes.forEach(Tf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: y,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Gx,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !mm(this.targetLayout, g) || y,
                m = !d && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const x = { ...Ga(v, 'layout'), onPlay: T, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || Tf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _t(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach($x),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ym(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Pf);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ix),
        (this.isUpdating = !1),
        this.nodes.forEach(zx),
        this.nodes.forEach(Nx),
        this.nodes.forEach(jx),
        this.clearAllSnapshots();
      const l = nt.now();
      (ae.delta = pt(0, 1e3 / 60, l - ae.timestamp)),
        (ae.timestamp = l),
        (ae.isProcessing = !0),
        ps.update.process(ae),
        ps.preRender.process(ae),
        ps.render.process(ae),
        (ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Oa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Fx), this.sharedNodes.forEach(Wx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        $.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = 'measure') {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !pm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || Qt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        Qx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l) return q();
      const a = l.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(Xx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Mn(a.x, c.offset.x), Mn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = q();
      if (
        (je(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && je(a, s), Mn(a.x, f.offset.x), Mn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = q();
      je(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          An(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Qt(c.latestValues) && An(a, c.latestValues);
      }
      return Qt(this.latestValues) && An(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = q();
      je(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Qt(u.latestValues)) continue;
        Vl(u.latestValues) && u.updateSnapshot();
        const c = q(),
          f = u.measurePageBox();
        je(c, f),
          yf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && yf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = q()),
              (this.relativeTargetOrigin = q()),
              Er(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = q()), (this.targetWithTransforms = q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                q1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : je(this.target, this.layout.layoutBox),
                am(this.target, this.targetDelta))
              : je(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = q()),
                (this.relativeTargetOrigin = q()),
                Er(this.relativeTargetOrigin, this.target, y.target),
                je(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          hr && Xt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Vl(this.parent.latestValues) ||
          lm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ae.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      je(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        y = this.treeScale.y;
      sx(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = q()));
      const { target: g } = l;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (hf(this.prevProjectionDelta.x, this.projectionDelta.x),
          hf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Cr(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== y ||
          !Sf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', g)),
        hr && Xt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        s)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = En()),
        (this.projectionDelta = En()),
        (this.projectionDeltaWithTransform = En());
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = En();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = q(),
        y = a ? a.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = y !== g,
        T = this.getStack(),
        p = !T || T.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(Kx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        Cf(f.x, s.x, S),
          Cf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Er(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Hx(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && Ax(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = q()),
            je(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), kx(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = $.update(() => {
          (Ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = yx(0, kf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(kf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          vm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || q();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        je(l, a),
          An(l, c),
          Cr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Dx()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Ts('z', s, u, this.animationValues);
      for (let c = 0; c < Ps.length; c++)
        Ts(`rotate${Ps[c]}`, s, u, this.animationValues),
          Ts(`skew${Ps[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Rx;
      const u = { visibility: '' },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !Qt(this.latestValues) &&
            ((v.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Lx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: y, y: g } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in po) {
        if (d[v] === void 0) continue;
        const { correct: T, applyTo: p } = po[v],
          h = u.transform === 'none' ? d[v] : T(d[v], f);
        if (p) {
          const m = p.length;
          for (let x = 0; x < m; x++) u[p[x]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? zi(s == null ? void 0 : s.pointerEvents) || ''
              : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Pf),
        this.root.sharedNodes.clear();
    }
  };
}
function Nx(e) {
  e.updateLayout();
}
function jx(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === 'size'
      ? _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            y = Re(d);
          (d.min = r[f].min), (d.max = d.min + y);
        })
      : vm(o, n.layoutBox, r) &&
        _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            y = Re(r[f]);
          (d.max = d.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const l = En();
    Cr(l, r, n.layoutBox);
    const a = En();
    s ? Cr(a, e.applyTransform(i, !0), n.measuredBox) : Cr(a, r, n.layoutBox);
    const u = !pm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const g = q();
          Er(g, n.layoutBox, d.layoutBox);
          const v = q();
          Er(v, r, y.layoutBox),
            mm(g, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function _x(e) {
  hr && Xt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ox(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Fx(e) {
  e.clearSnapshot();
}
function Pf(e) {
  e.clearMeasurements();
}
function Ix(e) {
  e.isLayoutDirty = !1;
}
function zx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Tf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Bx(e) {
  e.resolveTargetDelta();
}
function Ux(e) {
  e.calcProjection();
}
function $x(e) {
  e.resetSkewAndRotation();
}
function Wx(e) {
  e.removeLeadSnapshot();
}
function Cf(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ef(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function Hx(e, t, n, r) {
  Ef(e.x, t.x, n.x, r), Ef(e.y, t.y, n.y, r);
}
function Kx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Gx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Mf = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Af = Mf('applewebkit/') && !Mf('chrome/') ? Math.round : De;
function Df(e) {
  (e.min = Af(e.min)), (e.max = Af(e.max));
}
function Qx(e) {
  Df(e.x), Df(e.y);
}
function vm(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Z1(wf(t), wf(n), 0.2))
  );
}
function Xx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Yx = gm({
    attachResizeListener: (e, t) => Xr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Cs = { current: void 0 },
  xm = gm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Cs.current) {
        const e = new Yx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Cs.current = e);
      }
      return Cs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  Zx = {
    pan: { Feature: dx },
    drag: { Feature: fx, ProjectionNode: xm, MeasureLayout: fm },
  };
function Lf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    o = r[i];
  o && $.postRender(() => o(t, ri(t)));
}
class qx extends Bt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = qg(
        t,
        (n) => (Lf(this.node, n, 'Start'), (r) => Lf(this.node, r, 'End'))
      ));
  }
  unmount() {}
}
class Jx extends Bt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ni(
      Xr(this.node.current, 'focus', () => this.onFocus()),
      Xr(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
function Rf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    o = r[i];
  o && $.postRender(() => o(t, ri(t)));
}
class bx extends Bt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = tv(
        t,
        (n) => (
          Rf(this.node, n, 'Start'),
          (r, { success: i }) => Rf(this.node, r, i ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const jl = new WeakMap(),
  Es = new WeakMap(),
  ew = (e) => {
    const t = jl.get(e.target);
    t && t(e);
  },
  tw = (e) => {
    e.forEach(ew);
  };
function nw({ root: e, ...t }) {
  const n = e || document;
  Es.has(n) || Es.set(n, {});
  const r = Es.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(tw, { root: e, ...t })), r[i];
}
function rw(e, t, n) {
  const r = nw(t);
  return (
    jl.set(e, n),
    r.observe(e),
    () => {
      jl.delete(e), r.unobserve(e);
    }
  );
}
const iw = { some: 0, all: 1 };
class ow extends Bt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : iw[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return rw(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(sw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function sw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const lw = {
    inView: { Feature: ow },
    tap: { Feature: bx },
    focus: { Feature: Jx },
    hover: { Feature: qx },
  },
  aw = { layout: { ProjectionNode: xm, MeasureLayout: fm } },
  _l = { current: null },
  wm = { current: !1 };
function uw() {
  if (((wm.current = !0), !!Ra))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (_l.current = e.matches);
      e.addListener(t), t();
    } else _l.current = !1;
}
const cw = [...Kp, he, Ot],
  fw = (e) => cw.find(Hp(e)),
  Vf = new WeakMap();
function dw(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (me(i)) e.addValue(r, i);
    else if (me(o)) e.addValue(r, Gr(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Gr(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Nf = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class hw {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = iu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = nt.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), $.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u, onUpdate: c } = s;
    (this.onUpdate = c),
      (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Io(n)),
      (this.isVariantNode = bh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const y in d) {
      const g = d[y];
      a[y] !== void 0 && me(g) && g.set(a[y], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Vf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      wm.current || uw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : _l.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Vf.delete(this.current),
      this.projection && this.projection.unmount(),
      _t(this.notifyUpdate),
      _t(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = cn.has(t),
      i = n.on('change', (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && $.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on('renderRequest', this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in Wn) {
      const n = Wn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Nf.length; r++) {
      const i = Nf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = 'on' + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = dw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Gr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == 'string' && ($p(i) || Np(i))
          ? (i = parseFloat(i))
          : !fw(i) && Ot.test(n) && (i = zp(t, n)),
        this.setBaseTarget(t, me(i) ? i.get() : i)),
      me(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == 'string' || typeof r == 'object') {
      const s = Ia(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !me(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ja()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sm extends hw {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Gp);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    me(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function pw(e) {
  return window.getComputedStyle(e);
}
class mw extends Sm {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.renderInstance = ap);
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    } else {
      const r = pw(t),
        i = (op(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return um(t, n);
  }
  build(t, n, r) {
    Ua(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ka(t, n, r);
  }
}
class yw extends Sm {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    }
    return (n = up.has(n) ? n : _a(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return dp(t, n, r);
  }
  build(t, n, r) {
    $a(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    cp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ha(t.tagName)), super.mount(t);
  }
}
const gw = (e, t) =>
    Fa(e) ? new yw(t) : new mw(t, { allowProjection: e !== R.Fragment }),
  vw = Hg({ ...U1, ...lw, ...Zx, ...aw }, gw),
  O = og(vw);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  km = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(' ');
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ww = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = R.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = '',
      children: o,
      iconNode: s,
      ...l
    },
    a
  ) =>
    R.createElement(
      'svg',
      {
        ref: a,
        ...ww,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: km('lucide', i),
        ...l,
      },
      [
        ...s.map(([u, c]) => R.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zn = (e, t) => {
  const n = R.forwardRef(({ className: r, ...i }, o) =>
    R.createElement(Sw, {
      ref: o,
      iconNode: t,
      className: km(`lucide-${xw(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kw = Zn('ArrowRight', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jf = Zn('Brain', [
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
      key: 'l5xja',
    },
  ],
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z',
      key: 'ep3f8r',
    },
  ],
  ['path', { d: 'M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4', key: '1p4c4q' }],
  ['path', { d: 'M17.599 6.5a3 3 0 0 0 .399-1.375', key: 'tmeiqw' }],
  ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5', key: '105sqy' }],
  ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396', key: 'ql3yin' }],
  ['path', { d: 'M19.938 10.5a4 4 0 0 1 .585.396', key: '1qfode' }],
  ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516', key: '2e4loj' }],
  ['path', { d: 'M19.967 17.484A4 4 0 0 1 18 18', key: '159ez6' }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pw = Zn('Cpu', [
  [
    'rect',
    { width: '16', height: '16', x: '4', y: '4', rx: '2', key: '14l7u7' },
  ],
  ['rect', { width: '6', height: '6', x: '9', y: '9', rx: '1', key: '5aljv4' }],
  ['path', { d: 'M15 2v2', key: '13l42r' }],
  ['path', { d: 'M15 20v2', key: '15mkzm' }],
  ['path', { d: 'M2 15h2', key: '1gxd5l' }],
  ['path', { d: 'M2 9h2', key: '1bbxkp' }],
  ['path', { d: 'M20 15h2', key: '19e6y8' }],
  ['path', { d: 'M20 9h2', key: '19tzq7' }],
  ['path', { d: 'M9 2v2', key: '165o2o' }],
  ['path', { d: 'M9 20v2', key: 'i2bqo8' }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = Zn('Network', [
  [
    'rect',
    { x: '16', y: '16', width: '6', height: '6', rx: '1', key: '4q2zg0' },
  ],
  [
    'rect',
    { x: '2', y: '16', width: '6', height: '6', rx: '1', key: '8cvhb9' },
  ],
  ['rect', { x: '9', y: '2', width: '6', height: '6', rx: '1', key: '1egb70' }],
  ['path', { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3', key: '1jsf9p' }],
  ['path', { d: 'M12 12V8', key: '2874zd' }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = Zn('Sparkles', [
  [
    'path',
    {
      d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
      key: '4pj2yx',
    },
  ],
  ['path', { d: 'M20 3v4', key: '1olli1' }],
  ['path', { d: 'M22 5h-4', key: '1gvqau' }],
  ['path', { d: 'M4 17v2', key: 'vumght' }],
  ['path', { d: 'M5 18H3', key: 'zchphs' }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ew = Zn('Zap', [
  [
    'path',
    {
      d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
      key: '1xq2db',
    },
  ],
]);
function Mw() {
  const e = Array.from({ length: 25 }, (n, r) => ({
      id: r,
      size: Math.random() * 8 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 8,
      color:
        r % 3 === 0
          ? 'hsl(248, 86%, 66%)'
          : r % 3 === 1
          ? 'hsl(192, 95%, 44%)'
          : 'hsl(259, 65%, 71%)',
    })),
    t = Array.from({ length: 8 }, (n, r) => ({
      id: r,
      path: `M${Math.random() * 200},${Math.random() * 300 + 100} Q${
        Math.random() * 600 + 300
      },${Math.random() * 200 + 200} ${Math.random() * 400 + 800},${
        Math.random() * 300 + 300
      } T${Math.random() * 400 + 1200},${Math.random() * 200 + 400}`,
      delay: r * 0.5,
      duration: 6 + Math.random() * 4,
    }));
  return w.jsxs('div', {
    className: 'fixed inset-0 z-0',
    'data-testid': 'neural-background',
    children: [
      w.jsx('div', {
        className:
          'absolute inset-0 bg-gradient-to-br from-[hsl(245,76%,59%)]/5 via-transparent to-[hsl(266,85%,58%)]/5',
      }),
      w.jsx('div', {
        className:
          'absolute inset-0 bg-gradient-to-tl from-[hsl(192,95%,44%)]/3 via-transparent to-[hsl(248,86%,66%)]/3',
      }),
      w.jsx('div', {
        className:
          'absolute inset-0 bg-radial-gradient from-transparent via-[hsl(259,65%,71%)]/2 to-transparent',
      }),
      w.jsx('div', {
        className: 'absolute inset-0 opacity-8',
        children: w.jsxs('svg', {
          className: 'w-full h-full',
          viewBox: '0 0 1920 1080',
          preserveAspectRatio: 'xMidYMid slice',
          children: [
            w.jsxs('defs', {
              children: [
                w.jsxs('pattern', {
                  id: 'neural-grid',
                  width: '120',
                  height: '120',
                  patternUnits: 'userSpaceOnUse',
                  children: [
                    w.jsx('circle', {
                      cx: '60',
                      cy: '60',
                      r: '1.5',
                      fill: 'hsl(192, 95%, 44%)',
                      opacity: '0.4',
                    }),
                    w.jsx('circle', {
                      cx: '0',
                      cy: '0',
                      r: '0.8',
                      fill: 'hsl(248, 86%, 66%)',
                      opacity: '0.25',
                    }),
                    w.jsx('circle', {
                      cx: '120',
                      cy: '0',
                      r: '0.8',
                      fill: 'hsl(259, 65%, 71%)',
                      opacity: '0.25',
                    }),
                    w.jsx('circle', {
                      cx: '0',
                      cy: '120',
                      r: '0.8',
                      fill: 'hsl(248, 86%, 66%)',
                      opacity: '0.25',
                    }),
                    w.jsx('circle', {
                      cx: '120',
                      cy: '120',
                      r: '0.8',
                      fill: 'hsl(192, 95%, 44%)',
                      opacity: '0.25',
                    }),
                    w.jsx('line', {
                      x1: '60',
                      y1: '60',
                      x2: '0',
                      y2: '0',
                      stroke: 'hsl(192, 95%, 44%)',
                      strokeWidth: '0.3',
                      opacity: '0.15',
                    }),
                    w.jsx('line', {
                      x1: '60',
                      y1: '60',
                      x2: '120',
                      y2: '0',
                      stroke: 'hsl(248, 86%, 66%)',
                      strokeWidth: '0.3',
                      opacity: '0.15',
                    }),
                    w.jsx('line', {
                      x1: '60',
                      y1: '60',
                      x2: '0',
                      y2: '120',
                      stroke: 'hsl(259, 65%, 71%)',
                      strokeWidth: '0.3',
                      opacity: '0.15',
                    }),
                    w.jsx('line', {
                      x1: '60',
                      y1: '60',
                      x2: '120',
                      y2: '120',
                      stroke: 'hsl(192, 95%, 44%)',
                      strokeWidth: '0.3',
                      opacity: '0.15',
                    }),
                    w.jsx('circle', {
                      cx: '30',
                      cy: '30',
                      r: '0.5',
                      fill: 'hsl(248, 86%, 66%)',
                      opacity: '0.3',
                    }),
                    w.jsx('circle', {
                      cx: '90',
                      cy: '30',
                      r: '0.5',
                      fill: 'hsl(192, 95%, 44%)',
                      opacity: '0.3',
                    }),
                    w.jsx('circle', {
                      cx: '30',
                      cy: '90',
                      r: '0.5',
                      fill: 'hsl(259, 65%, 71%)',
                      opacity: '0.3',
                    }),
                    w.jsx('circle', {
                      cx: '90',
                      cy: '90',
                      r: '0.5',
                      fill: 'hsl(248, 86%, 66%)',
                      opacity: '0.3',
                    }),
                  ],
                }),
                w.jsxs('radialGradient', {
                  id: 'neural-node-glow',
                  cx: '50%',
                  cy: '50%',
                  r: '50%',
                  children: [
                    w.jsx('stop', {
                      offset: '0%',
                      stopColor: 'currentColor',
                      stopOpacity: '0.8',
                    }),
                    w.jsx('stop', {
                      offset: '70%',
                      stopColor: 'currentColor',
                      stopOpacity: '0.3',
                    }),
                    w.jsx('stop', {
                      offset: '100%',
                      stopColor: 'currentColor',
                      stopOpacity: '0',
                    }),
                  ],
                }),
              ],
            }),
            w.jsx('rect', {
              width: '100%',
              height: '100%',
              fill: 'url(#neural-grid)',
            }),
          ],
        }),
      }),
      e.map((n) =>
        w.jsx(
          O.div,
          {
            className: 'absolute rounded-full',
            style: {
              width: `${n.size}px`,
              height: `${n.size}px`,
              left: `${n.x}%`,
              top: `${n.y}%`,
              background: `radial-gradient(circle, ${n.color} 0%, ${n.color}80 50%, transparent 100%)`,
              boxShadow: `0 0 ${n.size * 2}px ${n.color}40, 0 0 ${
                n.size * 4
              }px ${n.color}20`,
            },
            animate: {
              y: [0, -30, 0],
              x: [0, Math.sin(n.id) * 20, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.4, 1],
              rotate: [0, 360],
            },
            transition: {
              duration: n.duration,
              delay: n.delay,
              repeat: 1 / 0,
              ease: 'easeInOut',
            },
            'data-testid': `neural-node-${n.id}`,
          },
          n.id
        )
      ),
      w.jsxs('svg', {
        className:
          'absolute inset-0 w-full h-full pointer-events-none opacity-25',
        children: [
          w.jsxs('defs', {
            children: [
              w.jsxs('linearGradient', {
                id: 'neural-gradient-1',
                x1: '0%',
                y1: '0%',
                x2: '100%',
                y2: '100%',
                children: [
                  w.jsx('stop', {
                    offset: '0%',
                    stopColor: 'hsl(248, 86%, 66%)',
                    stopOpacity: '0.8',
                  }),
                  w.jsx('stop', {
                    offset: '50%',
                    stopColor: 'hsl(259, 65%, 71%)',
                    stopOpacity: '0.4',
                  }),
                  w.jsx('stop', {
                    offset: '100%',
                    stopColor: 'hsl(192, 95%, 44%)',
                    stopOpacity: '0.8',
                  }),
                ],
              }),
              w.jsxs('linearGradient', {
                id: 'neural-gradient-2',
                x1: '100%',
                y1: '0%',
                x2: '0%',
                y2: '100%',
                children: [
                  w.jsx('stop', {
                    offset: '0%',
                    stopColor: 'hsl(192, 95%, 44%)',
                    stopOpacity: '0.6',
                  }),
                  w.jsx('stop', {
                    offset: '50%',
                    stopColor: 'hsl(248, 86%, 66%)',
                    stopOpacity: '0.3',
                  }),
                  w.jsx('stop', {
                    offset: '100%',
                    stopColor: 'hsl(259, 65%, 71%)',
                    stopOpacity: '0.6',
                  }),
                ],
              }),
              w.jsxs('linearGradient', {
                id: 'neural-gradient-3',
                x1: '50%',
                y1: '0%',
                x2: '50%',
                y2: '100%',
                children: [
                  w.jsx('stop', {
                    offset: '0%',
                    stopColor: 'hsl(259, 65%, 71%)',
                    stopOpacity: '0.7',
                  }),
                  w.jsx('stop', {
                    offset: '50%',
                    stopColor: 'hsl(192, 95%, 44%)',
                    stopOpacity: '0.2',
                  }),
                  w.jsx('stop', {
                    offset: '100%',
                    stopColor: 'hsl(248, 86%, 66%)',
                    stopOpacity: '0.7',
                  }),
                ],
              }),
              w.jsxs('filter', {
                id: 'glow',
                x: '-50%',
                y: '-50%',
                width: '200%',
                height: '200%',
                children: [
                  w.jsx('feGaussianBlur', {
                    stdDeviation: '2',
                    result: 'coloredBlur',
                  }),
                  w.jsxs('feMerge', {
                    children: [
                      w.jsx('feMergeNode', { in: 'coloredBlur' }),
                      w.jsx('feMergeNode', { in: 'SourceGraphic' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t.map((n, r) =>
            w.jsx(
              O.path,
              {
                d: n.path,
                stroke: `url(#neural-gradient-${(r % 3) + 1})`,
                strokeWidth: 2 + Math.random(),
                fill: 'none',
                filter: 'url(#glow)',
                initial: { pathLength: 0, opacity: 0 },
                animate: {
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  strokeWidth: [1, 3, 1],
                },
                transition: {
                  duration: n.duration,
                  delay: n.delay,
                  repeat: 1 / 0,
                  ease: 'easeInOut',
                },
              },
              n.id
            )
          ),
          w.jsx(O.path, {
            d: 'M0,300 Q200,200 400,350 T800,300 Q1000,250 1200,400 T1600,350 Q1800,300 1920,400',
            stroke: 'url(#neural-gradient-1)',
            strokeWidth: '1.5',
            fill: 'none',
            filter: 'url(#glow)',
            initial: { pathLength: 0 },
            animate: { pathLength: [0, 1, 0] },
            transition: { duration: 8, repeat: 1 / 0, ease: 'linear' },
          }),
          w.jsx(O.path, {
            d: 'M0,600 Q300,500 600,650 T1200,600 Q1500,550 1920,700',
            stroke: 'url(#neural-gradient-2)',
            strokeWidth: '1',
            fill: 'none',
            filter: 'url(#glow)',
            initial: { pathLength: 0 },
            animate: { pathLength: [0, 1, 0] },
            transition: {
              duration: 10,
              delay: 2,
              repeat: 1 / 0,
              ease: 'linear',
            },
          }),
          w.jsx(O.path, {
            d: 'M200,100 Q500,150 800,50 T1400,100 Q1700,150 1920,80',
            stroke: 'url(#neural-gradient-3)',
            strokeWidth: '1.2',
            fill: 'none',
            filter: 'url(#glow)',
            initial: { pathLength: 0 },
            animate: { pathLength: [0, 1, 0] },
            transition: {
              duration: 12,
              delay: 4,
              repeat: 1 / 0,
              ease: 'linear',
            },
          }),
        ],
      }),
      w.jsxs('div', {
        className: 'absolute inset-0 opacity-10',
        children: [
          w.jsx(O.div, {
            className:
              'absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[hsl(248,86%,66%)] via-transparent to-transparent',
            animate: { opacity: [0.1, 0.3, 0.1] },
            transition: { duration: 4, repeat: 1 / 0, delay: 0 },
          }),
          w.jsx(O.div, {
            className:
              'absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-[hsl(192,95%,44%)] via-transparent to-transparent',
            animate: { opacity: [0.1, 0.4, 0.1] },
            transition: { duration: 5, repeat: 1 / 0, delay: 1 },
          }),
          w.jsx(O.div, {
            className:
              'absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[hsl(259,65%,71%)] via-transparent to-transparent',
            animate: { opacity: [0.1, 0.25, 0.1] },
            transition: { duration: 6, repeat: 1 / 0, delay: 2 },
          }),
        ],
      }),
    ],
  });
}
function Aw() {
  return w.jsxs('div', {
    className:
      'bg-[hsl(222,84%,5%)] text-[hsl(200,18%,98%)] overflow-x-hidden min-h-screen relative',
    children: [
      w.jsx(Mw, {}),
      w.jsx('div', {
        className: 'fixed inset-0 z-[1] pointer-events-none',
        children: Array.from({ length: 20 }, (e, t) =>
          w.jsx(
            O.div,
            {
              className:
                'absolute w-1 h-1 bg-[hsl(192,95%,44%)] rounded-full opacity-60',
              style: {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              },
              animate: {
                y: [0, -100, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              },
              transition: {
                duration: 3 + Math.random() * 2,
                repeat: 1 / 0,
                delay: Math.random() * 2,
              },
            },
            t
          )
        ),
      }),
      w.jsxs('div', {
        className: 'fixed inset-0 z-[1] pointer-events-none',
        children: [
          w.jsx(O.div, {
            className:
              'absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 blur-xl',
            style: {
              background:
                'radial-gradient(circle, hsl(248, 86%, 66%) 0%, transparent 70%)',
            },
            animate: { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] },
            transition: { duration: 4, repeat: 1 / 0 },
          }),
          w.jsx(O.div, {
            className:
              'absolute top-40 right-32 w-24 h-24 rounded-full opacity-30 blur-xl',
            style: {
              background:
                'radial-gradient(circle, hsl(192, 95%, 44%) 0%, transparent 70%)',
            },
            animate: { scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3] },
            transition: { duration: 3, repeat: 1 / 0, delay: 1 },
          }),
          w.jsx(O.div, {
            className:
              'absolute bottom-32 left-1/3 w-40 h-40 rounded-full opacity-15 blur-xl',
            style: {
              background:
                'radial-gradient(circle, hsl(259, 65%, 71%) 0%, transparent 70%)',
            },
            animate: { scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] },
            transition: { duration: 5, repeat: 1 / 0, delay: 2 },
          }),
        ],
      }),
      w.jsx('header', {
        className: 'relative z-10 p-6',
        children: w.jsxs('nav', {
          className: 'max-w-7xl mx-auto flex justify-between',
          children: [
            w.jsxs(O.div, {
              className: 'flex space-x-2',
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              children: [
                w.jsxs(O.div, {
                  className:
                    'w-12 h-12 gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden',
                  whileHover: { scale: 1.1 },
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                  children: [
                    w.jsx(jf, {
                      className: 'text-white text-xl z-10',
                      'data-testid': 'logo-brain',
                    }),
                    w.jsx(O.div, {
                      className:
                        'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent',
                      animate: { x: ['-100%', '100%'] },
                      transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        repeatDelay: 3,
                      },
                    }),
                  ],
                }),
                w.jsx('span', {
                  className: 'text-xl font-poppins font-bold text-gradient',
                  'data-testid': 'brand-name',
                  children: 'NeuroFlow AI',
                }),
              ],
            }),
            w.jsxs(O.div, {
              className: 'flex items-center space-x-2',
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children: [
                w.jsx('div', {
                  className:
                    'w-2 h-2 bg-[hsl(192,95%,44%)] rounded-full animate-pulse',
                }),
                w.jsx('span', {
                  className: 'text-sm font-jetbrains text-gray-400',
                  children: 'Pronto',
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx('main', {
        className: 'relative z-10 flex justify-center px-6',
        children: w.jsxs('div', {
          className: 'mx-auto text-center',
          children: [
            w.jsxs(O.div, {
              className:
                'inline-flex items-center space-x-2 glassmorphism rounded-full px-4 py-2 mb-8 animate-float',
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              'data-testid': 'status-badge',
              children: [
                w.jsx(Cw, { className: 'w-4 h-4 text-[hsl(192,95%,44%)]' }),
                w.jsx('span', {
                  className: 'text-sm font-jetbrains',
                  children: 'Próxima Generación de IA',
                }),
              ],
            }),
            w.jsxs(O.div, {
              className: 'relative',
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.4 },
              children: [
                w.jsx('div', {
                  className:
                    'absolute inset-0 -m-8 opacity-30 blur-3xl bg-gradient-to-r from-[hsl(248,86%,66%)] via-[hsl(259,65%,71%)] to-[hsl(192,95%,44%)] rounded-full animate-pulse-glow',
                }),
                w.jsxs('div', {
                  className:
                    'relative glassmorphism-strong rounded-3xl p-16 shadow-2xl border border-white/10 backdrop-blur-xl',
                  children: [
                    w.jsx('div', {
                      className: 'absolute top-8 left-8',
                      children: w.jsx(O.div, {
                        animate: { rotate: 360 },
                        transition: {
                          duration: 20,
                          repeat: 1 / 0,
                          ease: 'linear',
                        },
                        children: w.jsx(Pw, {
                          className:
                            'w-6 h-6 text-[hsl(248,86%,66%)] opacity-40',
                        }),
                      }),
                    }),
                    w.jsx('div', {
                      className: 'absolute top-8 right-8',
                      children: w.jsx(O.div, {
                        animate: { rotate: -360 },
                        transition: {
                          duration: 25,
                          repeat: 1 / 0,
                          ease: 'linear',
                        },
                        children: w.jsx(Tw, {
                          className:
                            'w-6 h-6 text-[hsl(192,95%,44%)] opacity-40',
                        }),
                      }),
                    }),
                    w.jsx(O.div, {
                      className: 'flex items-center justify-center mb-12',
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.8, delay: 0.6 },
                      children: w.jsxs(O.div, {
                        className:
                          'relative w-24 h-24 gradient-neural rounded-3xl flex items-center justify-center shadow-2xl',
                        whileHover: { scale: 1.05, rotate: 5 },
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        },
                        children: [
                          w.jsx(jf, {
                            className: 'text-white text-4xl z-10',
                            'data-testid': 'hero-logo',
                          }),
                          w.jsx(O.div, {
                            className:
                              'absolute inset-0 rounded-3xl border-2 border-[hsl(192,95%,44%)]',
                            animate: {
                              borderColor: [
                                'hsl(192,95%,44%)',
                                'hsl(248,86%,66%)',
                                'hsl(259,65%,71%)',
                                'hsl(192,95%,44%)',
                              ],
                            },
                            transition: { duration: 3, repeat: 1 / 0 },
                          }),
                          w.jsx(O.div, {
                            className:
                              'absolute inset-0 rounded-3xl bg-[hsl(192,95%,44%)]',
                            animate: {
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.3, 0],
                            },
                            transition: { duration: 2, repeat: 1 / 0 },
                          }),
                        ],
                      }),
                    }),
                    w.jsxs(O.h1, {
                      className:
                        'text-7xl md:text-6xl font-poppins font-black mb-8 leading-tight tracking-tight',
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 1, delay: 0.8 },
                      'data-testid': 'hero-title',
                      children: [
                        w.jsx(O.span, {
                          className:
                            'inline-block text-gradient animate-gradient-shift',
                          whileHover: { scale: 1.05 },
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 10,
                          },
                          children: 'NeuroFlow AI',
                        }),
                      ],
                    }),
                    w.jsxs(O.div, {
                      className: 'flex justify-center space-x-4 mb-12',
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 1, delay: 1 },
                      children: [
                        w.jsx(O.div, {
                          className:
                            'w-16 h-0.5 bg-gradient-to-r from-transparent to-[hsl(192,95%,44%)]',
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { duration: 1, delay: 1.2 },
                        }),
                        w.jsx(O.p, {
                          className:
                            'text-2xl md:text-4xl font-poppins font-light text-gray-300 tracking-wide',
                          'data-testid': 'hero-tagline',
                          children: 'Próximamente',
                        }),
                        w.jsx(O.div, {
                          className:
                            'w-16 h-0.5 bg-gradient-to-r from-[hsl(192,95%,44%)] to-transparent',
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { duration: 1, delay: 1.2 },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            w.jsx(O.div, {
              className: 'mt-16 flex justify-center space-x-8',
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 1.6 },
              children: [...Array(5)].map((e, t) =>
                w.jsx(
                  O.div,
                  {
                    className:
                      'w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(248,86%,66%)] to-[hsl(192,95%,44%)]',
                    animate: { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] },
                    transition: { duration: 2, repeat: 1 / 0, delay: t * 0.2 },
                  },
                  t
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Dw() {
  return w.jsx(Aw, {});
}
Qh(document.getElementById('root')).render(w.jsx(Dw, {}));
