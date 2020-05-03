!(function (t) {
  var e = {};
  function r(i) {
    if (e[i]) return e[i].exports;
    var n = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 540));
})({
  1: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return p;
    });
    var i,
      n,
      a,
      s,
      o,
      h = r(18),
      u = r(20),
      c = r(27),
      l = r(8);
    function p(t, e, r) {
      (this.x = t || 0), (this.y = e || 0), (this.z = r || 0);
    }
    (p.slerp = function (t, e, r) {
      var i = t.length(),
        n = e.length();
      (t = t.clone().normalize()), (e = e.clone().normalize());
      var a = t.dot(e);
      h.a.clamp(a, -1, 1);
      var s = Math.acos(a) * r,
        o = e.clone().sub(t.clone().multiplyScalar(a));
      o.normalize();
      var u = t
        .clone()
        .multiplyScalar(Math.cos(s))
        .add(o.multiplyScalar(Math.sin(s)));
      return u.multiplyScalar(h.a.lerp(i, n, r)), u;
    }),
      Object.defineProperties(p.prototype, {
        xy: {
          get: function () {
            return new l.a(this.x, this.y);
          },
          set: function (t) {
            (this.x = t.x), (this.y = t.y);
          },
        },
        xz: {
          get: function () {
            return new l.a(this.x, this.z);
          },
          set: function (t) {
            (this.x = t.x), (this.z = t.y);
          },
        },
        yx: {
          get: function () {
            return new l.a(this.y, this.x);
          },
          set: function (t) {
            (this.y = t.x), (this.x = t.y);
          },
        },
        yz: {
          get: function () {
            return new l.a(this.y, this.z);
          },
          set: function (t) {
            (this.y = t.x), (this.z = t.y);
          },
        },
        zx: {
          get: function () {
            return new l.a(this.z, this.x);
          },
          set: function (t) {
            (this.z = t.x), (this.x = t.y);
          },
        },
        zy: {
          get: function () {
            return new l.a(this.z, this.y);
          },
          set: function (t) {
            (this.z = t.x), (this.y = t.y);
          },
        },
      }),
      Object.assign(p.prototype, {
        isVec3: !0,
        set: function (t, e, r) {
          return (this.x = t), (this.y = e), (this.z = r), this;
        },
        setScalar: function (t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        },
        setX: function (t) {
          return (this.x = t), this;
        },
        setY: function (t) {
          return (this.y = t), this;
        },
        setZ: function (t) {
          return (this.z = t), this;
        },
        setComponent: function (t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        },
        getComponent: function (t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y, this.z);
        },
        copy: function (t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        },
        add: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
        },
        addScalar: function (t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        },
        addVectors: function (t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        },
        addScaledVector: function (t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        },
        sub: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
        },
        toSimple: function () {
          return { x: this.x, y: this.y, z: this.z };
        },
        subScalar: function (t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        },
        subVectors: function (t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        },
        multiply: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
              ),
              this.multiplyVectors(t, e))
            : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
        },
        multiplyScalar: function (t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        },
        multiplyVectors: function (t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        },
        applyEuler:
          ((o = new c.a()),
          function (t) {
            return (
              (t && t.isEuler) ||
                console.error(
                  "RK.Vec3: .applyEuler() now expects an Euler rotation rather than a Vec3 and order."
                ),
              this.applyQuaternion(o.setFromEuler(t))
            );
          }),
        applyAxisAngle: (function () {
          var t = new c.a();
          return function (e, r) {
            return this.applyQuaternion(t.setFromAxisAngle(e, r));
          };
        })(),
        applyMatrix3: function (t) {
          var e = this.x,
            r = this.y,
            i = this.z,
            n = t.elements;
          return (
            (this.x = n[0] * e + n[3] * r + n[6] * i),
            (this.y = n[1] * e + n[4] * r + n[7] * i),
            (this.z = n[2] * e + n[5] * r + n[8] * i),
            this
          );
        },
        applyMatrix4: function (t) {
          var e = this.x,
            r = this.y,
            i = this.z,
            n = t.elements,
            a = 1 / (n[3] * e + n[7] * r + n[11] * i + n[15]);
          return (
            (this.x = (n[0] * e + n[4] * r + n[8] * i + n[12]) * a),
            (this.y = (n[1] * e + n[5] * r + n[9] * i + n[13]) * a),
            (this.z = (n[2] * e + n[6] * r + n[10] * i + n[14]) * a),
            this
          );
        },
        applyQuaternion: function (t) {
          var e = this.x,
            r = this.y,
            i = this.z,
            n = t.x,
            a = t.y,
            s = t.z,
            o = t.w,
            h = o * e + a * i - s * r,
            u = o * r + s * e - n * i,
            c = o * i + n * r - a * e,
            l = -n * e - a * r - s * i;
          return (
            (this.x = h * o + l * -n + u * -s - c * -a),
            (this.y = u * o + l * -a + c * -n - h * -s),
            (this.z = c * o + l * -s + h * -a - u * -n),
            this
          );
        },
        project:
          ((s = new u.a()),
          function (t) {
            return (
              s.multiplyMatrices(
                t.projectionMatrix,
                s.getInverse(t.matrixWorld)
              ),
              this.applyMatrix4(s)
            );
          }),
        unproject: (function () {
          var t = new u.a();
          return function (e) {
            return (
              t.multiplyMatrices(
                e.matrixWorld,
                t.getInverse(e.projectionMatrix)
              ),
              this.applyMatrix4(t)
            );
          };
        })(),
        transformDirection: function (t) {
          var e = this.x,
            r = this.y,
            i = this.z,
            n = t.elements;
          return (
            (this.x = n[0] * e + n[4] * r + n[8] * i),
            (this.y = n[1] * e + n[5] * r + n[9] * i),
            (this.z = n[2] * e + n[6] * r + n[10] * i),
            this.normalize()
          );
        },
        divide: function (t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        },
        divideScalar: function (t) {
          return this.multiplyScalar(1 / t);
        },
        min: function (t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        },
        max: function (t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        },
        clamp: function (t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        },
        clampScalar:
          ((n = new p()),
          (a = new p()),
          function (t, e) {
            return n.set(t, t, t), a.set(e, e, e), this.clamp(n, a);
          }),
        clampLength: function (t, e) {
          var r = this.length();
          return this.divideScalar(r || 1).multiplyScalar(
            Math.max(t, Math.min(e, r))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        },
        negate: function () {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        },
        dot: function (t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        lengthManhattan: function () {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        safeNormalize: function (t) {
          var e = Math.max(
            Math.max(Math.abs(this.x), Math.abs(this.y)),
            Math.abs(this.z)
          );
          return e > 0 ? this.divideScalar(e).normalize() : this.copy(t), this;
        },
        setLength: function (t) {
          return this.normalize().multiplyScalar(t);
        },
        lerp: function (t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        },
        lerpVectors: function (t, e, r) {
          return this.subVectors(e, t).multiplyScalar(r).add(t);
        },
        cross: function (t, e) {
          if (void 0 !== e)
            return (
              console.warn(
                "RK.Vec3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
              ),
              this.crossVectors(t, e)
            );
          var r = this.x,
            i = this.y,
            n = this.z;
          return (
            (this.x = i * t.z - n * t.y),
            (this.y = n * t.x - r * t.z),
            (this.z = r * t.y - i * t.x),
            this
          );
        },
        crossVectors: function (t, e) {
          var r = t.x,
            i = t.y,
            n = t.z,
            a = e.x,
            s = e.y,
            o = e.z;
          return (
            (this.x = i * o - n * s),
            (this.y = n * a - r * o),
            (this.z = r * s - i * a),
            this
          );
        },
        projectOnVector: function (t) {
          var e = t.dot(this) / t.lengthSq();
          return this.copy(t).multiplyScalar(e);
        },
        projectOnPlane:
          ((i = new p()),
          function (t) {
            return i.copy(this).projectOnVector(t), this.sub(i);
          }),
        reflect: (function () {
          var t = new p();
          return function (e) {
            return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)));
          };
        })(),
        angleTo: function (t) {
          var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
          return Math.acos(h.a.clamp(e, -1, 1));
        },
        distanceTo: function (t) {
          return Math.sqrt(this.distanceToSquared(t));
        },
        distanceToSquared: function (t) {
          var e = this.x - t.x,
            r = this.y - t.y,
            i = this.z - t.z;
          return e * e + r * r + i * i;
        },
        distanceToManhattan: function (t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        },
        setFromSpherical: function (t) {
          var e = Math.sin(t.phi) * t.radius;
          return (
            (this.x = e * Math.sin(t.theta)),
            (this.y = Math.cos(t.phi) * t.radius),
            (this.z = e * Math.cos(t.theta)),
            this
          );
        },
        setFromCylindrical: function (t) {
          return (
            (this.x = t.radius * Math.sin(t.theta)),
            (this.y = t.y),
            (this.z = t.radius * Math.cos(t.theta)),
            this
          );
        },
        setFromMatrixPosition: function (t) {
          var e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        },
        setFromMatrixScale: function (t) {
          var e = this.setFromMatrixColumn(t, 0).length(),
            r = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = r), (this.z = i), this;
        },
        setFromMatrixColumn: function (t, e) {
          return this.fromArray(t.elements, 4 * e);
        },
        equals: function (t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            t
          );
        },
        fromBufferAttribute: function (t, e, r) {
          return (
            void 0 !== r &&
              console.warn(
                "RK.Vec3: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        },
      });
  },
  18: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return o;
    });
    var i,
      n,
      a,
      s,
      o = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID:
          ((n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
          )),
          (a = new Array(36)),
          (s = 0),
          function () {
            for (var t = 0; t < 36; t++)
              8 === t || 13 === t || 18 === t || 23 === t
                ? (a[t] = "-")
                : 14 === t
                ? (a[t] = "4")
                : (s <= 2 && (s = (33554432 + 16777216 * Math.random()) | 0),
                  (i = 15 & s),
                  (s >>= 4),
                  (a[t] = n[19 === t ? (3 & i) | 8 : i]));
            return a.join("");
          }),
        clamp: function (t, e, r) {
          return Math.max(e, Math.min(r, t));
        },
        euclideanModulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        mapLinear: function (t, e, r, i, n) {
          return i + ((t - e) * (n - i)) / (r - e);
        },
        lerp: function (t, e, r) {
          return (1 - r) * t + r * e;
        },
        smoothstep: function (t, e, r) {
          return t <= e
            ? 0
            : t >= r
            ? 1
            : (t = (t - e) / (r - e)) * t * (3 - 2 * t);
        },
        smootherstep: function (t, e, r) {
          return t <= e
            ? 0
            : t >= r
            ? 1
            : (t = (t - e) / (r - e)) * t * t * (t * (6 * t - 15) + 10);
        },
        randInt: function (t, e) {
          return t + Math.floor(Math.random() * (e - t + 1));
        },
        randFloat: function (t, e) {
          return t + Math.random() * (e - t);
        },
        randFloatSpread: function (t) {
          return t * (0.5 - Math.random());
        },
        degToRad: function (t) {
          return t * o.DEG2RAD;
        },
        radToDeg: function (t) {
          return t * o.RAD2DEG;
        },
        isPowerOfTwo: function (t) {
          return 0 == (t & (t - 1)) && 0 !== t;
        },
        nearestPowerOfTwo: function (t) {
          return Math.pow(2, Math.round(Math.log(t) / Math.LN2));
        },
        nextPowerOfTwo: function (t) {
          return (
            t--,
            (t |= t >> 1),
            (t |= t >> 2),
            (t |= t >> 4),
            (t |= t >> 8),
            (t |= t >> 16),
            ++t
          );
        },
      };
  },
  20: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return c;
    });
    var i,
      n,
      a,
      s,
      o,
      h,
      u = r(1);
    function c() {
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "RK.Matrix4: the constructor no longer reads arguments. use .set() instead."
          );
    }
    Object.assign(c.prototype, {
      isMatrix4: !0,
      set: function (t, e, r, i, n, a, s, o, h, u, c, l, p, d, f, m) {
        var g = this.elements;
        return (
          (g[0] = t),
          (g[4] = e),
          (g[8] = r),
          (g[12] = i),
          (g[1] = n),
          (g[5] = a),
          (g[9] = s),
          (g[13] = o),
          (g[2] = h),
          (g[6] = u),
          (g[10] = c),
          (g[14] = l),
          (g[3] = p),
          (g[7] = d),
          (g[11] = f),
          (g[15] = m),
          this
        );
      },
      identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      clone: function () {
        return new c().fromArray(this.elements);
      },
      copy: function (t) {
        var e = this.elements,
          r = t.elements;
        return (
          (e[0] = r[0]),
          (e[1] = r[1]),
          (e[2] = r[2]),
          (e[3] = r[3]),
          (e[4] = r[4]),
          (e[5] = r[5]),
          (e[6] = r[6]),
          (e[7] = r[7]),
          (e[8] = r[8]),
          (e[9] = r[9]),
          (e[10] = r[10]),
          (e[11] = r[11]),
          (e[12] = r[12]),
          (e[13] = r[13]),
          (e[14] = r[14]),
          (e[15] = r[15]),
          this
        );
      },
      setFromMatrix3: function (t) {
        var e = this.elements,
          r = t.elements;
        return (
          (e[0] = r[0]),
          (e[1] = r[1]),
          (e[2] = r[2]),
          (e[4] = r[3]),
          (e[5] = r[4]),
          (e[6] = r[5]),
          (e[8] = r[6]),
          (e[9] = r[7]),
          (e[10] = r[8]),
          this
        );
      },
      copyPosition: function (t) {
        var e = this.elements,
          r = t.elements;
        return (e[12] = r[12]), (e[13] = r[13]), (e[14] = r[14]), this;
      },
      extractBasis: function (t, e, r) {
        return (
          t.setFromMatrixColumn(this, 0),
          e.setFromMatrixColumn(this, 1),
          r.setFromMatrixColumn(this, 2),
          this
        );
      },
      makeBasis: function (t, e, r) {
        return (
          this.set(
            t.x,
            e.x,
            r.x,
            0,
            t.y,
            e.y,
            r.y,
            0,
            t.z,
            e.z,
            r.z,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      extractRotation:
        ((h = new u.a()),
        function (t) {
          var e = this.elements,
            r = t.elements,
            i = 1 / h.setFromMatrixColumn(t, 0).length(),
            n = 1 / h.setFromMatrixColumn(t, 1).length(),
            a = 1 / h.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = r[0] * i),
            (e[1] = r[1] * i),
            (e[2] = r[2] * i),
            (e[4] = r[4] * n),
            (e[5] = r[5] * n),
            (e[6] = r[6] * n),
            (e[8] = r[8] * a),
            (e[9] = r[9] * a),
            (e[10] = r[10] * a),
            this
          );
        }),
      makeRotationFromEuler: function (t) {
        (t && t.isEuler) ||
          console.error(
            "RK.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vec3 and order."
          );
        var e = this.elements,
          r = t.x,
          i = t.y,
          n = t.z,
          a = Math.cos(r),
          s = Math.sin(r),
          o = Math.cos(i),
          h = Math.sin(i),
          u = Math.cos(n),
          c = Math.sin(n);
        if ("XYZ" === t.order) {
          var l = a * u,
            p = a * c,
            d = s * u,
            f = s * c;
          (e[0] = o * u),
            (e[4] = -o * c),
            (e[8] = h),
            (e[1] = p + d * h),
            (e[5] = l - f * h),
            (e[9] = -s * o),
            (e[2] = f - l * h),
            (e[6] = d + p * h),
            (e[10] = a * o);
        } else if ("YXZ" === t.order) {
          var m = o * u,
            g = o * c,
            y = h * u,
            v = h * c;
          (e[0] = m + v * s),
            (e[4] = y * s - g),
            (e[8] = a * h),
            (e[1] = a * c),
            (e[5] = a * u),
            (e[9] = -s),
            (e[2] = g * s - y),
            (e[6] = v + m * s),
            (e[10] = a * o);
        } else if ("ZXY" === t.order) {
          (m = o * u), (g = o * c), (y = h * u), (v = h * c);
          (e[0] = m - v * s),
            (e[4] = -a * c),
            (e[8] = y + g * s),
            (e[1] = g + y * s),
            (e[5] = a * u),
            (e[9] = v - m * s),
            (e[2] = -a * h),
            (e[6] = s),
            (e[10] = a * o);
        } else if ("ZYX" === t.order) {
          (l = a * u), (p = a * c), (d = s * u), (f = s * c);
          (e[0] = o * u),
            (e[4] = d * h - p),
            (e[8] = l * h + f),
            (e[1] = o * c),
            (e[5] = f * h + l),
            (e[9] = p * h - d),
            (e[2] = -h),
            (e[6] = s * o),
            (e[10] = a * o);
        } else if ("YZX" === t.order) {
          var x = a * o,
            b = a * h,
            w = s * o,
            M = s * h;
          (e[0] = o * u),
            (e[4] = M - x * c),
            (e[8] = w * c + b),
            (e[1] = c),
            (e[5] = a * u),
            (e[9] = -s * u),
            (e[2] = -h * u),
            (e[6] = b * c + w),
            (e[10] = x - M * c);
        } else if ("XZY" === t.order) {
          (x = a * o), (b = a * h), (w = s * o), (M = s * h);
          (e[0] = o * u),
            (e[4] = -c),
            (e[8] = h * u),
            (e[1] = x * c + M),
            (e[5] = a * u),
            (e[9] = b * c - w),
            (e[2] = w * c - b),
            (e[6] = s * u),
            (e[10] = M * c + x);
        }
        return (
          (e[3] = 0),
          (e[7] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          this
        );
      },
      makeRotationFromQuaternion: function (t) {
        var e = this.elements,
          r = t._x,
          i = t._y,
          n = t._z,
          a = t._w,
          s = r + r,
          o = i + i,
          h = n + n,
          u = r * s,
          c = r * o,
          l = r * h,
          p = i * o,
          d = i * h,
          f = n * h,
          m = a * s,
          g = a * o,
          y = a * h;
        return (
          (e[0] = 1 - (p + f)),
          (e[4] = c - y),
          (e[8] = l + g),
          (e[1] = c + y),
          (e[5] = 1 - (u + f)),
          (e[9] = d - m),
          (e[2] = l - g),
          (e[6] = d + m),
          (e[10] = 1 - (u + p)),
          (e[3] = 0),
          (e[7] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          this
        );
      },
      lookAt:
        ((a = new u.a()),
        (s = new u.a()),
        (o = new u.a()),
        function (t, e, r) {
          var i = this.elements;
          return (
            o.subVectors(t, e),
            0 === o.lengthSq() && (o.z = 1),
            o.normalize(),
            a.crossVectors(r, o),
            0 === a.lengthSq() &&
              (1 === Math.abs(r.z) ? (o.x += 1e-4) : (o.z += 1e-4),
              o.normalize(),
              a.crossVectors(r, o)),
            a.normalize(),
            s.crossVectors(o, a),
            (i[0] = a.x),
            (i[4] = s.x),
            (i[8] = o.x),
            (i[1] = a.y),
            (i[5] = s.y),
            (i[9] = o.y),
            (i[2] = a.z),
            (i[6] = s.z),
            (i[10] = o.z),
            this
          );
        }),
      multiply: function (t, e) {
        return void 0 !== e
          ? (console.warn(
              "RK.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
            ),
            this.multiplyMatrices(t, e))
          : this.multiplyMatrices(this, t);
      },
      premultiply: function (t) {
        return this.multiplyMatrices(t, this);
      },
      multiplyMatrices: function (t, e) {
        var r = t.elements,
          i = e.elements,
          n = this.elements,
          a = r[0],
          s = r[4],
          o = r[8],
          h = r[12],
          u = r[1],
          c = r[5],
          l = r[9],
          p = r[13],
          d = r[2],
          f = r[6],
          m = r[10],
          g = r[14],
          y = r[3],
          v = r[7],
          x = r[11],
          b = r[15],
          w = i[0],
          M = i[4],
          T = i[8],
          S = i[12],
          _ = i[1],
          E = i[5],
          A = i[9],
          R = i[13],
          P = i[2],
          C = i[6],
          O = i[10],
          F = i[14],
          L = i[3],
          z = i[7],
          B = i[11],
          U = i[15];
        return (
          (n[0] = a * w + s * _ + o * P + h * L),
          (n[4] = a * M + s * E + o * C + h * z),
          (n[8] = a * T + s * A + o * O + h * B),
          (n[12] = a * S + s * R + o * F + h * U),
          (n[1] = u * w + c * _ + l * P + p * L),
          (n[5] = u * M + c * E + l * C + p * z),
          (n[9] = u * T + c * A + l * O + p * B),
          (n[13] = u * S + c * R + l * F + p * U),
          (n[2] = d * w + f * _ + m * P + g * L),
          (n[6] = d * M + f * E + m * C + g * z),
          (n[10] = d * T + f * A + m * O + g * B),
          (n[14] = d * S + f * R + m * F + g * U),
          (n[3] = y * w + v * _ + x * P + b * L),
          (n[7] = y * M + v * E + x * C + b * z),
          (n[11] = y * T + v * A + x * O + b * B),
          (n[15] = y * S + v * R + x * F + b * U),
          this
        );
      },
      multiplyScalar: function (t) {
        var e = this.elements;
        return (
          (e[0] *= t),
          (e[4] *= t),
          (e[8] *= t),
          (e[12] *= t),
          (e[1] *= t),
          (e[5] *= t),
          (e[9] *= t),
          (e[13] *= t),
          (e[2] *= t),
          (e[6] *= t),
          (e[10] *= t),
          (e[14] *= t),
          (e[3] *= t),
          (e[7] *= t),
          (e[11] *= t),
          (e[15] *= t),
          this
        );
      },
      applyToBufferAttribute: (function () {
        var t = new u.a();
        return function (e) {
          for (var r = 0, i = e.count; r < i; r++)
            (t.x = e.getX(r)),
              (t.y = e.getY(r)),
              (t.z = e.getZ(r)),
              t.applyMatrix4(this),
              e.setXYZ(r, t.x, t.y, t.z);
          return e;
        };
      })(),
      determinant: function () {
        var t = this.elements,
          e = t[0],
          r = t[4],
          i = t[8],
          n = t[12],
          a = t[1],
          s = t[5],
          o = t[9],
          h = t[13],
          u = t[2],
          c = t[6],
          l = t[10],
          p = t[14];
        return (
          t[3] *
            (+n * o * c -
              i * h * c -
              n * s * l +
              r * h * l +
              i * s * p -
              r * o * p) +
          t[7] *
            (+e * o * p -
              e * h * l +
              n * a * l -
              i * a * p +
              i * h * u -
              n * o * u) +
          t[11] *
            (+e * h * c -
              e * s * p -
              n * a * c +
              r * a * p +
              n * s * u -
              r * h * u) +
          t[15] *
            (-i * s * u -
              e * o * c +
              e * s * l +
              i * a * c -
              r * a * l +
              r * o * u)
        );
      },
      transpose: function () {
        var t,
          e = this.elements;
        return (
          (t = e[1]),
          (e[1] = e[4]),
          (e[4] = t),
          (t = e[2]),
          (e[2] = e[8]),
          (e[8] = t),
          (t = e[6]),
          (e[6] = e[9]),
          (e[9] = t),
          (t = e[3]),
          (e[3] = e[12]),
          (e[12] = t),
          (t = e[7]),
          (e[7] = e[13]),
          (e[13] = t),
          (t = e[11]),
          (e[11] = e[14]),
          (e[14] = t),
          this
        );
      },
      setPosition: function (t) {
        var e = this.elements;
        return (e[12] = t.x), (e[13] = t.y), (e[14] = t.z), this;
      },
      getInverse: function (t, e) {
        var r = this.elements,
          i = t.elements,
          n = i[0],
          a = i[1],
          s = i[2],
          o = i[3],
          h = i[4],
          u = i[5],
          c = i[6],
          l = i[7],
          p = i[8],
          d = i[9],
          f = i[10],
          m = i[11],
          g = i[12],
          y = i[13],
          v = i[14],
          x = i[15],
          b =
            d * v * l -
            y * f * l +
            y * c * m -
            u * v * m -
            d * c * x +
            u * f * x,
          w =
            g * f * l -
            p * v * l -
            g * c * m +
            h * v * m +
            p * c * x -
            h * f * x,
          M =
            p * y * l -
            g * d * l +
            g * u * m -
            h * y * m -
            p * u * x +
            h * d * x,
          T =
            g * d * c -
            p * y * c -
            g * u * f +
            h * y * f +
            p * u * v -
            h * d * v,
          S = n * b + a * w + s * M + o * T;
        if (0 === S) {
          var _ =
            "RK.Matrix4: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === e) throw new Error(_);
          return console.warn(_), this.identity();
        }
        var E = 1 / S;
        return (
          (r[0] = b * E),
          (r[1] =
            (y * f * o -
              d * v * o -
              y * s * m +
              a * v * m +
              d * s * x -
              a * f * x) *
            E),
          (r[2] =
            (u * v * o -
              y * c * o +
              y * s * l -
              a * v * l -
              u * s * x +
              a * c * x) *
            E),
          (r[3] =
            (d * c * o -
              u * f * o -
              d * s * l +
              a * f * l +
              u * s * m -
              a * c * m) *
            E),
          (r[4] = w * E),
          (r[5] =
            (p * v * o -
              g * f * o +
              g * s * m -
              n * v * m -
              p * s * x +
              n * f * x) *
            E),
          (r[6] =
            (g * c * o -
              h * v * o -
              g * s * l +
              n * v * l +
              h * s * x -
              n * c * x) *
            E),
          (r[7] =
            (h * f * o -
              p * c * o +
              p * s * l -
              n * f * l -
              h * s * m +
              n * c * m) *
            E),
          (r[8] = M * E),
          (r[9] =
            (g * d * o -
              p * y * o -
              g * a * m +
              n * y * m +
              p * a * x -
              n * d * x) *
            E),
          (r[10] =
            (h * y * o -
              g * u * o +
              g * a * l -
              n * y * l -
              h * a * x +
              n * u * x) *
            E),
          (r[11] =
            (p * u * o -
              h * d * o -
              p * a * l +
              n * d * l +
              h * a * m -
              n * u * m) *
            E),
          (r[12] = T * E),
          (r[13] =
            (p * y * s -
              g * d * s +
              g * a * f -
              n * y * f -
              p * a * v +
              n * d * v) *
            E),
          (r[14] =
            (g * u * s -
              h * y * s -
              g * a * c +
              n * y * c +
              h * a * v -
              n * u * v) *
            E),
          (r[15] =
            (h * d * s -
              p * u * s +
              p * a * c -
              n * d * c -
              h * a * f +
              n * u * f) *
            E),
          this
        );
      },
      scale: function (t) {
        var e = this.elements,
          r = t.x,
          i = t.y,
          n = t.z;
        return (
          (e[0] *= r),
          (e[4] *= i),
          (e[8] *= n),
          (e[1] *= r),
          (e[5] *= i),
          (e[9] *= n),
          (e[2] *= r),
          (e[6] *= i),
          (e[10] *= n),
          (e[3] *= r),
          (e[7] *= i),
          (e[11] *= n),
          this
        );
      },
      getMaxScaleOnAxis: function () {
        var t = this.elements,
          e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, r, i));
      },
      makeTranslation: function (t, e, r) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1), this;
      },
      makeRotationX: function (t) {
        var e = Math.cos(t),
          r = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1), this;
      },
      makeRotationY: function (t) {
        var e = Math.cos(t),
          r = Math.sin(t);
        return this.set(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1), this;
      },
      makeRotationZ: function (t) {
        var e = Math.cos(t),
          r = Math.sin(t);
        return this.set(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      makeRotationAxis: function (t, e) {
        var r = Math.cos(e),
          i = Math.sin(e),
          n = 1 - r,
          a = t.x,
          s = t.y,
          o = t.z,
          h = n * a,
          u = n * s;
        return (
          this.set(
            h * a + r,
            h * s - i * o,
            h * o + i * s,
            0,
            h * s + i * o,
            u * s + r,
            u * o - i * a,
            0,
            h * o - i * s,
            u * o + i * a,
            n * o * o + r,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      makeScale: function (t, e, r) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
      },
      makeShear: function (t, e, r) {
        return this.set(1, e, r, 0, t, 1, r, 0, t, e, 1, 0, 0, 0, 0, 1), this;
      },
      compose: function (t, e, r) {
        return (
          this.makeRotationFromQuaternion(e),
          this.scale(r),
          this.setPosition(t),
          this
        );
      },
      toUInt8Array: function (t, e) {
        void 0 === t && (t = []), void 0 === e && (e = 0);
        for (var r, i = this.elements, n = 0; n < 16; n++)
          (r = this.encodeFloatRGBA(i[n])),
            (t[e] = r[0]),
            (t[e + 1] = r[1]),
            (t[e + 2] = r[2]),
            (t[e + 3] = r[3]),
            (e += 4);
        return t;
      },
      encodeFloatRGBA: function (t) {
        (t > 128 || t < -128) &&
          console.error(
            "Encoding matrix floats does not work for values above 128 because Teagan is not great at math. What weird things are the joints doing?"
          );
        var e = Math.floor(t + 128),
          r = t + 128 - e;
        r = Math.floor(16777215 * r);
        var i = Math.floor(r % 256),
          n = Math.floor((r - i) / 256) % 256;
        return [e, i, n, Math.floor((r - i - 256 * n) / 65536)];
      },
      decodeFloatRGBA: function (t) {
        return t[0] - 128 + (t[1] + 256 * t[2] + 256 * t[3] * 256) / 16777215;
      },
      decompose:
        ((i = new u.a()),
        (n = new c()),
        function (t, e, r) {
          var a = this.elements,
            s = i.set(a[0], a[1], a[2]).length(),
            o = i.set(a[4], a[5], a[6]).length(),
            h = i.set(a[8], a[9], a[10]).length();
          this.determinant() < 0 && (s = -s),
            (t.x = a[12]),
            (t.y = a[13]),
            (t.z = a[14]),
            n.copy(this);
          var u = 1 / s,
            c = 1 / o,
            l = 1 / h;
          return (
            (n.elements[0] *= u),
            (n.elements[1] *= u),
            (n.elements[2] *= u),
            (n.elements[4] *= c),
            (n.elements[5] *= c),
            (n.elements[6] *= c),
            (n.elements[8] *= l),
            (n.elements[9] *= l),
            (n.elements[10] *= l),
            e.setFromRotationMatrix(n),
            (r.x = s),
            (r.y = o),
            (r.z = h),
            this
          );
        }),
      makePerspective: function (t, e, r, i, n, a) {
        void 0 === a &&
          console.warn(
            "RK.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
          );
        var s = this.elements,
          o = (2 * n) / (e - t),
          h = (2 * n) / (r - i),
          u = (e + t) / (e - t),
          c = (r + i) / (r - i),
          l = -(a + n) / (a - n),
          p = (-2 * a * n) / (a - n);
        return (
          (s[0] = o),
          (s[4] = 0),
          (s[8] = u),
          (s[12] = 0),
          (s[1] = 0),
          (s[5] = h),
          (s[9] = c),
          (s[13] = 0),
          (s[2] = 0),
          (s[6] = 0),
          (s[10] = l),
          (s[14] = p),
          (s[3] = 0),
          (s[7] = 0),
          (s[11] = -1),
          (s[15] = 0),
          this
        );
      },
      makeOrthographic: function (t, e, r, i, n, a) {
        var s = this.elements,
          o = 1 / (e - t),
          h = 1 / (r - i),
          u = 1 / (a - n),
          c = (e + t) * o,
          l = (r + i) * h,
          p = (a + n) * u;
        return (
          (s[0] = 2 * o),
          (s[4] = 0),
          (s[8] = 0),
          (s[12] = -c),
          (s[1] = 0),
          (s[5] = 2 * h),
          (s[9] = 0),
          (s[13] = -l),
          (s[2] = 0),
          (s[6] = 0),
          (s[10] = -2 * u),
          (s[14] = -p),
          (s[3] = 0),
          (s[7] = 0),
          (s[11] = 0),
          (s[15] = 1),
          this
        );
      },
      equals: function (t) {
        for (var e = this.elements, r = t.elements, i = 0; i < 16; i++)
          if (e[i] !== r[i]) return !1;
        return !0;
      },
      fromArray: function (t, e) {
        void 0 === e && (e = 0);
        for (var r = 0; r < 16; r++) this.elements[r] = t[r + e];
        return this;
      },
      toArray: function (t, e) {
        void 0 === t && (t = []), void 0 === e && (e = 0);
        var r = this.elements;
        return (
          (t[e] = r[0]),
          (t[e + 1] = r[1]),
          (t[e + 2] = r[2]),
          (t[e + 3] = r[3]),
          (t[e + 4] = r[4]),
          (t[e + 5] = r[5]),
          (t[e + 6] = r[6]),
          (t[e + 7] = r[7]),
          (t[e + 8] = r[8]),
          (t[e + 9] = r[9]),
          (t[e + 10] = r[10]),
          (t[e + 11] = r[11]),
          (t[e + 12] = r[12]),
          (t[e + 13] = r[13]),
          (t[e + 14] = r[14]),
          (t[e + 15] = r[15]),
          t
        );
      },
    });
  },
  27: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return s;
    });
    var i,
      n,
      a = r(1);
    function s(t, e, r, i) {
      (this._x = t || 0),
        (this._y = e || 0),
        (this._z = r || 0),
        (this._w = void 0 !== i ? i : 1);
    }
    Object.assign(s, {
      slerp: function (t, e, r, i) {
        return r.copy(t).slerp(e, i);
      },
      slerpFlat: function (t, e, r, i, n, a, s) {
        var o = r[i + 0],
          h = r[i + 1],
          u = r[i + 2],
          c = r[i + 3],
          l = n[a + 0],
          p = n[a + 1],
          d = n[a + 2],
          f = n[a + 3];
        if (c !== f || o !== l || h !== p || u !== d) {
          var m = 1 - s,
            g = o * l + h * p + u * d + c * f,
            y = g >= 0 ? 1 : -1,
            v = 1 - g * g;
          if (v > Number.EPSILON) {
            var x = Math.sqrt(v),
              b = Math.atan2(x, g * y);
            (m = Math.sin(m * b) / x), (s = Math.sin(s * b) / x);
          }
          var w = s * y;
          if (
            ((o = o * m + l * w),
            (h = h * m + p * w),
            (u = u * m + d * w),
            (c = c * m + f * w),
            m === 1 - s)
          ) {
            var M = 1 / Math.sqrt(o * o + h * h + u * u + c * c);
            (o *= M), (h *= M), (u *= M), (c *= M);
          }
        }
        (t[e] = o), (t[e + 1] = h), (t[e + 2] = u), (t[e + 3] = c);
      },
    }),
      Object.defineProperties(s.prototype, {
        x: {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this.onChangeCallback();
          },
        },
        y: {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this.onChangeCallback();
          },
        },
        z: {
          get: function () {
            return this._z;
          },
          set: function (t) {
            (this._z = t), this.onChangeCallback();
          },
        },
        w: {
          get: function () {
            return this._w;
          },
          set: function (t) {
            (this._w = t), this.onChangeCallback();
          },
        },
      }),
      Object.assign(s.prototype, {
        set: function (t, e, r, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = r),
            (this._w = i),
            this.onChangeCallback(),
            this
          );
        },
        clone: function () {
          return new this.constructor(this._x, this._y, this._z, this._w);
        },
        copy: function (t) {
          return (
            (this._x = t.x),
            (this._y = t.y),
            (this._z = t.z),
            (this._w = t.w),
            this.onChangeCallback(),
            this
          );
        },
        toSimple: function () {
          return { x: this.x, y: this.y, z: this.z, w: this.w };
        },
        setFromEuler: function (t, e) {
          if (!t || !t.isEuler)
            throw new Error(
              "RK.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vec3 and order."
            );
          var r = t._x,
            i = t._y,
            n = t._z,
            a = t.order,
            s = Math.cos,
            o = Math.sin,
            h = s(r / 2),
            u = s(i / 2),
            c = s(n / 2),
            l = o(r / 2),
            p = o(i / 2),
            d = o(n / 2);
          return (
            "XYZ" === a
              ? ((this._x = l * u * c + h * p * d),
                (this._y = h * p * c - l * u * d),
                (this._z = h * u * d + l * p * c),
                (this._w = h * u * c - l * p * d))
              : "YXZ" === a
              ? ((this._x = l * u * c + h * p * d),
                (this._y = h * p * c - l * u * d),
                (this._z = h * u * d - l * p * c),
                (this._w = h * u * c + l * p * d))
              : "ZXY" === a
              ? ((this._x = l * u * c - h * p * d),
                (this._y = h * p * c + l * u * d),
                (this._z = h * u * d + l * p * c),
                (this._w = h * u * c - l * p * d))
              : "ZYX" === a
              ? ((this._x = l * u * c - h * p * d),
                (this._y = h * p * c + l * u * d),
                (this._z = h * u * d - l * p * c),
                (this._w = h * u * c + l * p * d))
              : "YZX" === a
              ? ((this._x = l * u * c + h * p * d),
                (this._y = h * p * c + l * u * d),
                (this._z = h * u * d - l * p * c),
                (this._w = h * u * c - l * p * d))
              : "XZY" === a &&
                ((this._x = l * u * c - h * p * d),
                (this._y = h * p * c - l * u * d),
                (this._z = h * u * d + l * p * c),
                (this._w = h * u * c + l * p * d)),
            !1 !== e && this.onChangeCallback(),
            this
          );
        },
        setFromAxisAngle: function (t, e) {
          var r = e / 2,
            i = Math.sin(r);
          return (
            (this._x = t.x * i),
            (this._y = t.y * i),
            (this._z = t.z * i),
            (this._w = Math.cos(r)),
            this.onChangeCallback(),
            this
          );
        },
        setFromRotationMatrix: function (t, e) {
          var r = t.elements,
            i = r[0],
            n = r[4],
            s = r[8],
            o = r[1],
            h = r[5],
            u = r[9],
            c = r[2],
            l = r[6],
            p = r[10];
          if (e) {
            var d = new a.a(i, o, c),
              f = new a.a(n, h, l),
              m = new a.a(s, u, p);
            d.normalize();
            var g = d.dot(f);
            f.sub(d.clone().multiplyScalar(g)),
              f.normalize(),
              m.crossVectors(d, f),
              (i = d.x),
              (o = d.y),
              (c = d.z),
              (n = f.x),
              (h = f.y),
              (l = f.z),
              (s = m.x),
              (u = m.y),
              (p = m.z);
          }
          var y,
            v = i + h + p;
          return (
            v > 0
              ? ((y = 0.5 / Math.sqrt(v + 1)),
                (this._w = 0.25 / y),
                (this._x = (l - u) * y),
                (this._y = (s - c) * y),
                (this._z = (o - n) * y))
              : i > h && i > p
              ? ((y = 2 * Math.sqrt(1 + i - h - p)),
                (this._w = (l - u) / y),
                (this._x = 0.25 * y),
                (this._y = (n + o) / y),
                (this._z = (s + c) / y))
              : h > p
              ? ((y = 2 * Math.sqrt(1 + h - i - p)),
                (this._w = (s - c) / y),
                (this._x = (n + o) / y),
                (this._y = 0.25 * y),
                (this._z = (u + l) / y))
              : ((y = 2 * Math.sqrt(1 + p - i - h)),
                (this._w = (o - n) / y),
                (this._x = (s + c) / y),
                (this._y = (u + l) / y),
                (this._z = 0.25 * y)),
            this.onChangeCallback(),
            this
          );
        },
        setFromUnitVectors:
          ((n = new a.a()),
          function (t, e) {
            return (
              void 0 === n && (n = new a.a()),
              (i = t.dot(e) + 1) < 1e-6
                ? ((i = 0),
                  Math.abs(t.x) > Math.abs(t.z)
                    ? n.set(-t.y, t.x, 0)
                    : n.set(0, -t.z, t.y))
                : n.crossVectors(t, e),
              (this._x = n.x),
              (this._y = n.y),
              (this._z = n.z),
              (this._w = i),
              this.normalize()
            );
          }),
        inverse: function () {
          return this.conjugate().normalize();
        },
        conjugate: function () {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this.onChangeCallback(),
            this
          );
        },
        dot: function (t) {
          return (
            this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
          );
        },
        lengthSq: function () {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        },
        length: function () {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        },
        normalize: function () {
          var t = this.length();
          return (
            0 === t
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((t = 1 / t),
                (this._x = this._x * t),
                (this._y = this._y * t),
                (this._z = this._z * t),
                (this._w = this._w * t)),
            this.onChangeCallback(),
            this
          );
        },
        multiply: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
              ),
              this.multiplyQuaternions(t, e))
            : this.multiplyQuaternions(this, t);
        },
        premultiply: function (t) {
          return this.multiplyQuaternions(t, this);
        },
        multiplyQuaternions: function (t, e) {
          var r = t._x,
            i = t._y,
            n = t._z,
            a = t._w,
            s = e._x,
            o = e._y,
            h = e._z,
            u = e._w;
          return (
            (this._x = r * u + a * s + i * h - n * o),
            (this._y = i * u + a * o + n * s - r * h),
            (this._z = n * u + a * h + r * o - i * s),
            (this._w = a * u - r * s - i * o - n * h),
            this.onChangeCallback(),
            this
          );
        },
        slerp: function (t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          var r = this._x,
            i = this._y,
            n = this._z,
            a = this._w,
            s = a * t._w + r * t._x + i * t._y + n * t._z;
          if (
            (s < 0
              ? ((this._w = -t._w),
                (this._x = -t._x),
                (this._y = -t._y),
                (this._z = -t._z),
                (s = -s))
              : this.copy(t),
            s >= 1)
          )
            return (
              (this._w = a), (this._x = r), (this._y = i), (this._z = n), this
            );
          var o = Math.sqrt(1 - s * s);
          if (Math.abs(o) < 0.001)
            return (
              (this._w = 0.5 * (a + this._w)),
              (this._x = 0.5 * (r + this._x)),
              (this._y = 0.5 * (i + this._y)),
              (this._z = 0.5 * (n + this._z)),
              this
            );
          var h = Math.atan2(o, s),
            u = Math.sin((1 - e) * h) / o,
            c = Math.sin(e * h) / o;
          return (
            (this._w = a * u + this._w * c),
            (this._x = r * u + this._x * c),
            (this._y = i * u + this._y * c),
            (this._z = n * u + this._z * c),
            this.onChangeCallback(),
            this
          );
        },
        equals: function (t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._w === this._w
          );
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (this._x = t[e]),
            (this._y = t[e + 1]),
            (this._z = t[e + 2]),
            (this._w = t[e + 3]),
            this.onChangeCallback(),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._w),
            t
          );
        },
        onChange: function (t) {
          return (this.onChangeCallback = t), this;
        },
        onChangeCallback: function () {},
      });
  },
  3: function (t, e, r) {
    "use strict";
    r.r(e),
      r.d(e, "REVISION", function () {
        return i;
      }),
      r.d(e, "MOUSE", function () {
        return n;
      }),
      r.d(e, "CullFaceNone", function () {
        return a;
      }),
      r.d(e, "CullFaceBack", function () {
        return s;
      }),
      r.d(e, "CullFaceFront", function () {
        return o;
      }),
      r.d(e, "CullFaceFrontBack", function () {
        return h;
      }),
      r.d(e, "FrontFaceDirectionCW", function () {
        return u;
      }),
      r.d(e, "FrontFaceDirectionCCW", function () {
        return c;
      }),
      r.d(e, "BasicShadowMap", function () {
        return l;
      }),
      r.d(e, "PCFShadowMap", function () {
        return p;
      }),
      r.d(e, "PCFSoftShadowMap", function () {
        return d;
      }),
      r.d(e, "FrontSide", function () {
        return f;
      }),
      r.d(e, "BackSide", function () {
        return m;
      }),
      r.d(e, "DoubleSide", function () {
        return g;
      }),
      r.d(e, "FlatShading", function () {
        return y;
      }),
      r.d(e, "SmoothShading", function () {
        return v;
      }),
      r.d(e, "NoColors", function () {
        return x;
      }),
      r.d(e, "FaceColors", function () {
        return b;
      }),
      r.d(e, "VertexColors", function () {
        return w;
      }),
      r.d(e, "NoBlending", function () {
        return M;
      }),
      r.d(e, "NormalBlending", function () {
        return T;
      }),
      r.d(e, "AdditiveBlending", function () {
        return S;
      }),
      r.d(e, "SubtractiveBlending", function () {
        return _;
      }),
      r.d(e, "MultiplyBlending", function () {
        return E;
      }),
      r.d(e, "CustomBlending", function () {
        return A;
      }),
      r.d(e, "AddEquation", function () {
        return R;
      }),
      r.d(e, "SubtractEquation", function () {
        return P;
      }),
      r.d(e, "ReverseSubtractEquation", function () {
        return C;
      }),
      r.d(e, "MinEquation", function () {
        return O;
      }),
      r.d(e, "MaxEquation", function () {
        return F;
      }),
      r.d(e, "ZeroFactor", function () {
        return L;
      }),
      r.d(e, "OneFactor", function () {
        return z;
      }),
      r.d(e, "SrcColorFactor", function () {
        return B;
      }),
      r.d(e, "OneMinusSrcColorFactor", function () {
        return U;
      }),
      r.d(e, "SrcAlphaFactor", function () {
        return N;
      }),
      r.d(e, "OneMinusSrcAlphaFactor", function () {
        return D;
      }),
      r.d(e, "DstAlphaFactor", function () {
        return I;
      }),
      r.d(e, "OneMinusDstAlphaFactor", function () {
        return G;
      }),
      r.d(e, "DstColorFactor", function () {
        return k;
      }),
      r.d(e, "OneMinusDstColorFactor", function () {
        return W;
      }),
      r.d(e, "SrcAlphaSaturateFactor", function () {
        return V;
      }),
      r.d(e, "NeverDepth", function () {
        return j;
      }),
      r.d(e, "AlwaysDepth", function () {
        return X;
      }),
      r.d(e, "LessDepth", function () {
        return q;
      }),
      r.d(e, "LessEqualDepth", function () {
        return K;
      }),
      r.d(e, "EqualDepth", function () {
        return H;
      }),
      r.d(e, "GreaterEqualDepth", function () {
        return Y;
      }),
      r.d(e, "GreaterDepth", function () {
        return Z;
      }),
      r.d(e, "NotEqualDepth", function () {
        return J;
      }),
      r.d(e, "MultiplyOperation", function () {
        return Q;
      }),
      r.d(e, "MixOperation", function () {
        return $;
      }),
      r.d(e, "AddOperation", function () {
        return tt;
      }),
      r.d(e, "NoToneMapping", function () {
        return et;
      }),
      r.d(e, "LinearToneMapping", function () {
        return rt;
      }),
      r.d(e, "ReinhardToneMapping", function () {
        return it;
      }),
      r.d(e, "Uncharted2ToneMapping", function () {
        return nt;
      }),
      r.d(e, "CineonToneMapping", function () {
        return at;
      }),
      r.d(e, "UVMapping", function () {
        return st;
      }),
      r.d(e, "CubeReflectionMapping", function () {
        return ot;
      }),
      r.d(e, "CubeRefractionMapping", function () {
        return ht;
      }),
      r.d(e, "EquirectangularReflectionMapping", function () {
        return ut;
      }),
      r.d(e, "EquirectangularRefractionMapping", function () {
        return ct;
      }),
      r.d(e, "SphericalReflectionMapping", function () {
        return lt;
      }),
      r.d(e, "CubeUVReflectionMapping", function () {
        return pt;
      }),
      r.d(e, "CubeUVRefractionMapping", function () {
        return dt;
      }),
      r.d(e, "RepeatWrapping", function () {
        return ft;
      }),
      r.d(e, "ClampToEdgeWrapping", function () {
        return mt;
      }),
      r.d(e, "MirroredRepeatWrapping", function () {
        return gt;
      }),
      r.d(e, "NearestFilter", function () {
        return yt;
      }),
      r.d(e, "NearestMipMapNearestFilter", function () {
        return vt;
      }),
      r.d(e, "NearestMipMapLinearFilter", function () {
        return xt;
      }),
      r.d(e, "LinearFilter", function () {
        return bt;
      }),
      r.d(e, "LinearMipMapNearestFilter", function () {
        return wt;
      }),
      r.d(e, "LinearMipMapLinearFilter", function () {
        return Mt;
      }),
      r.d(e, "UnsignedByteType", function () {
        return Tt;
      }),
      r.d(e, "ByteType", function () {
        return St;
      }),
      r.d(e, "ShortType", function () {
        return _t;
      }),
      r.d(e, "UnsignedShortType", function () {
        return Et;
      }),
      r.d(e, "IntType", function () {
        return At;
      }),
      r.d(e, "UnsignedIntType", function () {
        return Rt;
      }),
      r.d(e, "FloatType", function () {
        return Pt;
      }),
      r.d(e, "HalfFloatType", function () {
        return Ct;
      }),
      r.d(e, "UnsignedShort4444Type", function () {
        return Ot;
      }),
      r.d(e, "UnsignedShort5551Type", function () {
        return Ft;
      }),
      r.d(e, "UnsignedShort565Type", function () {
        return Lt;
      }),
      r.d(e, "UnsignedInt248Type", function () {
        return zt;
      }),
      r.d(e, "AlphaFormat", function () {
        return Bt;
      }),
      r.d(e, "RGBFormat", function () {
        return Ut;
      }),
      r.d(e, "RGBAFormat", function () {
        return Nt;
      }),
      r.d(e, "LuminanceFormat", function () {
        return Dt;
      }),
      r.d(e, "LuminanceAlphaFormat", function () {
        return It;
      }),
      r.d(e, "RGBEFormat", function () {
        return Gt;
      }),
      r.d(e, "DepthFormat", function () {
        return kt;
      }),
      r.d(e, "DepthStencilFormat", function () {
        return Wt;
      }),
      r.d(e, "RGB_S3TC_DXT1_Format", function () {
        return Vt;
      }),
      r.d(e, "RGBA_S3TC_DXT1_Format", function () {
        return jt;
      }),
      r.d(e, "RGBA_S3TC_DXT3_Format", function () {
        return Xt;
      }),
      r.d(e, "RGBA_S3TC_DXT5_Format", function () {
        return qt;
      }),
      r.d(e, "RGB_PVRTC_4BPPV1_Format", function () {
        return Kt;
      }),
      r.d(e, "RGB_PVRTC_2BPPV1_Format", function () {
        return Ht;
      }),
      r.d(e, "RGBA_PVRTC_4BPPV1_Format", function () {
        return Yt;
      }),
      r.d(e, "RGBA_PVRTC_2BPPV1_Format", function () {
        return Zt;
      }),
      r.d(e, "RGB_ETC1_Format", function () {
        return Jt;
      }),
      r.d(e, "LoopOnce", function () {
        return Qt;
      }),
      r.d(e, "LoopRepeat", function () {
        return $t;
      }),
      r.d(e, "LoopPingPong", function () {
        return te;
      }),
      r.d(e, "InterpolateDiscrete", function () {
        return ee;
      }),
      r.d(e, "InterpolateLinear", function () {
        return re;
      }),
      r.d(e, "InterpolateSmooth", function () {
        return ie;
      }),
      r.d(e, "ZeroCurvatureEnding", function () {
        return ne;
      }),
      r.d(e, "ZeroSlopeEnding", function () {
        return ae;
      }),
      r.d(e, "WrapAroundEnding", function () {
        return se;
      }),
      r.d(e, "TrianglesDrawMode", function () {
        return oe;
      }),
      r.d(e, "TriangleStripDrawMode", function () {
        return he;
      }),
      r.d(e, "TriangleFanDrawMode", function () {
        return ue;
      }),
      r.d(e, "LinearEncoding", function () {
        return ce;
      }),
      r.d(e, "sRGBEncoding", function () {
        return le;
      }),
      r.d(e, "GammaEncoding", function () {
        return pe;
      }),
      r.d(e, "RGBEEncoding", function () {
        return de;
      }),
      r.d(e, "LogLuvEncoding", function () {
        return fe;
      }),
      r.d(e, "RGBM7Encoding", function () {
        return me;
      }),
      r.d(e, "RGBM16Encoding", function () {
        return ge;
      }),
      r.d(e, "RGBDEncoding", function () {
        return ye;
      }),
      r.d(e, "BasicDepthPacking", function () {
        return ve;
      }),
      r.d(e, "RGBADepthPacking", function () {
        return xe;
      }),
      r.d(e, "renderKit", function () {
        return be;
      });
    var i = "88dev",
      n = { LEFT: 0, MIDDLE: 1, RIGHT: 2 },
      a = 0,
      s = 1,
      o = 2,
      h = 3,
      u = 0,
      c = 1,
      l = 0,
      p = 1,
      d = 2,
      f = 0,
      m = 1,
      g = 2,
      y = 1,
      v = 2,
      x = 0,
      b = 1,
      w = 2,
      M = 0,
      T = 1,
      S = 2,
      _ = 3,
      E = 4,
      A = 5,
      R = 100,
      P = 101,
      C = 102,
      O = 103,
      F = 104,
      L = 200,
      z = 201,
      B = 202,
      U = 203,
      N = 204,
      D = 205,
      I = 206,
      G = 207,
      k = 208,
      W = 209,
      V = 210,
      j = 0,
      X = 1,
      q = 2,
      K = 3,
      H = 4,
      Y = 5,
      Z = 6,
      J = 7,
      Q = 0,
      $ = 1,
      tt = 2,
      et = 0,
      rt = 1,
      it = 2,
      nt = 3,
      at = 4,
      st = 300,
      ot = 301,
      ht = 302,
      ut = 303,
      ct = 304,
      lt = 305,
      pt = 306,
      dt = 307,
      ft = 1e3,
      mt = 1001,
      gt = 1002,
      yt = 1003,
      vt = 1004,
      xt = 1005,
      bt = 1006,
      wt = 1007,
      Mt = 1008,
      Tt = 1009,
      St = 1010,
      _t = 1011,
      Et = 1012,
      At = 1013,
      Rt = 1014,
      Pt = 1015,
      Ct = 1016,
      Ot = 1017,
      Ft = 1018,
      Lt = 1019,
      zt = 1020,
      Bt = 1021,
      Ut = 1022,
      Nt = 1023,
      Dt = 1024,
      It = 1025,
      Gt = Nt,
      kt = 1026,
      Wt = 1027,
      Vt = 2001,
      jt = 2002,
      Xt = 2003,
      qt = 2004,
      Kt = 2100,
      Ht = 2101,
      Yt = 2102,
      Zt = 2103,
      Jt = 2151,
      Qt = 2200,
      $t = 2201,
      te = 2202,
      ee = 2300,
      re = 2301,
      ie = 2302,
      ne = 2400,
      ae = 2401,
      se = 2402,
      oe = 0,
      he = 1,
      ue = 2,
      ce = 3e3,
      le = 3001,
      pe = 3007,
      de = 3002,
      fe = 3003,
      me = 3004,
      ge = 3005,
      ye = 3006,
      ve = 3200,
      xe = 3201,
      be = !0;
  },
  540: function (t, e, r) {
    "use strict";
    r.r(e);
    var i = {};
    r.r(i),
      r.d(i, "Float64BufferAttribute", function () {
        return te;
      }),
      r.d(i, "Float32BufferAttribute", function () {
        return $t;
      }),
      r.d(i, "Uint32BufferAttribute", function () {
        return Qt;
      }),
      r.d(i, "Int32BufferAttribute", function () {
        return Jt;
      }),
      r.d(i, "Uint16BufferAttribute", function () {
        return Zt;
      }),
      r.d(i, "Int16BufferAttribute", function () {
        return Yt;
      }),
      r.d(i, "Uint8ClampedBufferAttribute", function () {
        return Ht;
      }),
      r.d(i, "Uint8BufferAttribute", function () {
        return Kt;
      }),
      r.d(i, "Int8BufferAttribute", function () {
        return qt;
      }),
      r.d(i, "BufferAttribute", function () {
        return Xt;
      });
    var n = {};
    r.r(n),
      r.d(n, "WireframeGeometry", function () {
        return sr;
      }),
      r.d(n, "ParametricGeometry", function () {
        return or;
      }),
      r.d(n, "ParametricBufferGeometry", function () {
        return hr;
      }),
      r.d(n, "TetrahedronGeometry", function () {
        return lr;
      }),
      r.d(n, "TetrahedronBufferGeometry", function () {
        return pr;
      }),
      r.d(n, "OctahedronGeometry", function () {
        return dr;
      }),
      r.d(n, "OctahedronBufferGeometry", function () {
        return fr;
      }),
      r.d(n, "IcosahedronGeometry", function () {
        return mr;
      }),
      r.d(n, "IcosahedronBufferGeometry", function () {
        return gr;
      }),
      r.d(n, "DodecahedronGeometry", function () {
        return yr;
      }),
      r.d(n, "DodecahedronBufferGeometry", function () {
        return vr;
      }),
      r.d(n, "PolyhedronGeometry", function () {
        return ur;
      }),
      r.d(n, "PolyhedronBufferGeometry", function () {
        return cr;
      }),
      r.d(n, "TubeGeometry", function () {
        return xr;
      }),
      r.d(n, "TubeBufferGeometry", function () {
        return br;
      }),
      r.d(n, "TorusKnotGeometry", function () {
        return wr;
      }),
      r.d(n, "TorusKnotBufferGeometry", function () {
        return Mr;
      }),
      r.d(n, "TorusGeometry", function () {
        return Tr;
      }),
      r.d(n, "TorusBufferGeometry", function () {
        return Sr;
      }),
      r.d(n, "TextGeometry", function () {
        return Rr;
      }),
      r.d(n, "TextBufferGeometry", function () {
        return Pr;
      }),
      r.d(n, "SphereGeometry", function () {
        return Cr;
      }),
      r.d(n, "SphereBufferGeometry", function () {
        return Or;
      }),
      r.d(n, "RingGeometry", function () {
        return Fr;
      }),
      r.d(n, "RingBufferGeometry", function () {
        return Lr;
      }),
      r.d(n, "PlaneGeometry", function () {
        return se;
      }),
      r.d(n, "PlaneBufferGeometry", function () {
        return oe;
      }),
      r.d(n, "LatheGeometry", function () {
        return zr;
      }),
      r.d(n, "LatheBufferGeometry", function () {
        return Br;
      }),
      r.d(n, "ShapeGeometry", function () {
        return Nr;
      }),
      r.d(n, "ShapeBufferGeometry", function () {
        return Dr;
      }),
      r.d(n, "ExtrudeGeometry", function () {
        return Er;
      }),
      r.d(n, "ExtrudeBufferGeometry", function () {
        return Ar;
      }),
      r.d(n, "EdgesGeometry", function () {
        return Ir;
      }),
      r.d(n, "ConeGeometry", function () {
        return Wr;
      }),
      r.d(n, "ConeBufferGeometry", function () {
        return Vr;
      }),
      r.d(n, "CylinderGeometry", function () {
        return Gr;
      }),
      r.d(n, "CylinderBufferGeometry", function () {
        return kr;
      }),
      r.d(n, "CircleGeometry", function () {
        return jr;
      }),
      r.d(n, "CircleBufferGeometry", function () {
        return Xr;
      }),
      r.d(n, "BoxGeometry", function () {
        return ne;
      }),
      r.d(n, "BoxBufferGeometry", function () {
        return ae;
      });
    var a = {};
    function s() {}
    r.r(a),
      r.d(a, "SpriteMaterial", function () {
        return wi;
      }),
      r.d(a, "RawShaderMaterial", function () {
        return qr;
      }),
      r.d(a, "ShaderMaterial", function () {
        return ve;
      }),
      r.d(a, "Material", function () {
        return ue;
      }),
      Object.assign(s.prototype, {
        addEventListener: function (t, e) {
          void 0 === this._listeners && (this._listeners = {});
          var r = this._listeners;
          void 0 === r[t] && (r[t] = []),
            -1 === r[t].indexOf(e) && r[t].push(e);
        },
        hasEventListener: function (t, e) {
          if (void 0 === this._listeners) return !1;
          var r = this._listeners;
          return void 0 !== r[t] && -1 !== r[t].indexOf(e);
        },
        removeEventListener: function (t, e) {
          if (void 0 !== this._listeners) {
            var r = this._listeners[t];
            if (void 0 !== r) {
              var i = r.indexOf(e);
              -1 !== i && r.splice(i, 1);
            }
          }
        },
        dispatchEvent: function (t) {
          if (void 0 !== this._listeners) {
            var e = this._listeners[t.type];
            if (void 0 !== e) {
              t.target = this;
              for (var r = e.slice(0), i = 0, n = r.length; i < n; i++)
                r[i].call(this, t);
            }
          }
        },
      });
    var o,
      h,
      u = r(3),
      c = r(18),
      l = r(8),
      p = 0;
    function d(t, e, r, i, n, a, s, o, h, f) {
      Object.defineProperty(this, "id", { value: p++ }),
        (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.image = void 0 !== t ? t : d.DEFAULT_IMAGE),
        (this.mipmaps = []),
        (this.mapping = void 0 !== e ? e : d.DEFAULT_MAPPING),
        (this.wrapS = void 0 !== r ? r : u.ClampToEdgeWrapping),
        (this.wrapT = void 0 !== i ? i : u.ClampToEdgeWrapping),
        (this.magFilter = void 0 !== n ? n : u.LinearFilter),
        (this.minFilter = void 0 !== a ? a : u.LinearMipMapLinearFilter),
        (this.anisotropy = void 0 !== h ? h : 1),
        (this.format = void 0 !== s ? s : u.RGBAFormat),
        (this.type = void 0 !== o ? o : u.UnsignedByteType),
        (this.offset = new l.a(0, 0)),
        (this.repeat = new l.a(1, 1)),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = void 0 !== f ? f : u.LinearEncoding),
        (this.version = 0),
        (this.onUpdate = null);
    }
    function f(t, e, r, i) {
      (this.x = t || 0),
        (this.y = e || 0),
        (this.z = r || 0),
        (this.w = void 0 !== i ? i : 1);
    }
    function m(t, e, r) {
      (this.uuid = c.a.generateUUID()),
        (this.width = t),
        (this.height = e),
        (this.scissor = new f(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new f(0, 0, t, e)),
        void 0 === (r = r || {}).minFilter && (r.minFilter = u.LinearFilter),
        (this.texture = new d(
          void 0,
          void 0,
          r.wrapS,
          r.wrapT,
          r.magFilter,
          r.minFilter,
          r.format,
          r.type,
          r.anisotropy,
          r.encoding
        )),
        (this.texture._width = t),
        (this.texture._height = e),
        (this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer),
        (this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer),
        (this.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null);
    }
    function g(t, e, r) {
      m.call(this, t, e, r),
        (this.activeCubeFace = 0),
        (this.activeMipMapLevel = 0);
    }
    (d.DEFAULT_IMAGE = void 0),
      (d.DEFAULT_MAPPING = u.UVMapping),
      Object.defineProperty(d.prototype, "needsUpdate", {
        set: function (t) {
          !0 === t && this.version++;
        },
      }),
      Object.defineProperty(d.prototype, "width", {
        get: function () {
          return void 0 !== this.image ? this.image.width : this._width;
        },
        set: function (t) {
          void 0 !== this.image
            ? console.log(
                "can not set texture width, it has an image and a fixed size"
              )
            : (this._width = t);
        },
      }),
      Object.defineProperty(d.prototype, "height", {
        get: function () {
          return void 0 !== this.image ? this.image.height : this._height;
        },
        set: function (t) {
          void 0 !== this.image
            ? console.log(
                "can not set texture width, it has an image and a fixed size"
              )
            : (this._height = t);
        },
      }),
      Object.assign(d.prototype, s.prototype, {
        constructor: d,
        isTexture: !0,
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return (
            (this.name = t.name),
            (this.image = t.image),
            (this.mipmaps = t.mipmaps.slice(0)),
            (this.mapping = t.mapping),
            (this.wrapS = t.wrapS),
            (this.wrapT = t.wrapT),
            (this.magFilter = t.magFilter),
            (this.minFilter = t.minFilter),
            (this.anisotropy = t.anisotropy),
            (this.format = t.format),
            (this.type = t.type),
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            (this.generateMipmaps = t.generateMipmaps),
            (this.premultiplyAlpha = t.premultiplyAlpha),
            (this.flipY = t.flipY),
            (this.unpackAlignment = t.unpackAlignment),
            (this.encoding = t.encoding),
            this
          );
        },
        toJSON: function (t) {
          if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
          var e = {
            metadata: {
              version: 4.5,
              type: "Texture",
              generator: "Texture.toJSON",
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
          };
          if (void 0 !== this.image) {
            var r = this.image;
            void 0 === r.uuid && (r.uuid = c.a.generateUUID()),
              void 0 === t.images[r.uuid] &&
                (t.images[r.uuid] = {
                  uuid: r.uuid,
                  url: (function (t) {
                    var e;
                    if (t instanceof HTMLCanvasElement) e = t;
                    else {
                      ((e = document.createElementNS(
                        "http://www.w3.org/1999/xhtml",
                        "canvas"
                      )).width = t.width),
                        (e.height = t.height);
                      var r = e.getContext("2d");
                      t instanceof ImageData
                        ? r.putImageData(t, 0, 0)
                        : r.drawImage(t, 0, 0, t.width, t.height);
                    }
                    return e.width > 2048 || e.height > 2048
                      ? e.toDataURL("image/jpeg", 0.6)
                      : e.toDataURL("image/png");
                  })(r),
                }),
              (e.image = r.uuid);
          }
          return (t.textures[this.uuid] = e), e;
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
        transformUv: function (t) {
          if (this.mapping === u.UVMapping) {
            if (
              (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1)
            )
              switch (this.wrapS) {
                case u.RepeatWrapping:
                  t.x = t.x - Math.floor(t.x);
                  break;
                case u.ClampToEdgeWrapping:
                  t.x = t.x < 0 ? 0 : 1;
                  break;
                case u.MirroredRepeatWrapping:
                  1 === Math.abs(Math.floor(t.x) % 2)
                    ? (t.x = Math.ceil(t.x) - t.x)
                    : (t.x = t.x - Math.floor(t.x));
              }
            if (t.y < 0 || t.y > 1)
              switch (this.wrapT) {
                case u.RepeatWrapping:
                  t.y = t.y - Math.floor(t.y);
                  break;
                case u.ClampToEdgeWrapping:
                  t.y = t.y < 0 ? 0 : 1;
                  break;
                case u.MirroredRepeatWrapping:
                  1 === Math.abs(Math.floor(t.y) % 2)
                    ? (t.y = Math.ceil(t.y) - t.y)
                    : (t.y = t.y - Math.floor(t.y));
              }
            this.flipY && (t.y = 1 - t.y);
          }
        },
      }),
      Object.assign(f.prototype, {
        isVec4: !0,
        set: function (t, e, r, i) {
          return (this.x = t), (this.y = e), (this.z = r), (this.w = i), this;
        },
        setScalar: function (t) {
          return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        },
        setX: function (t) {
          return (this.x = t), this;
        },
        setY: function (t) {
          return (this.y = t), this;
        },
        setZ: function (t) {
          return (this.z = t), this;
        },
        setW: function (t) {
          return (this.w = t), this;
        },
        setComponent: function (t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        },
        getComponent: function (t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y, this.z, this.w);
        },
        copy: function (t) {
          return (
            (this.x = t.x),
            (this.y = t.y),
            (this.z = t.z),
            (this.w = void 0 !== t.w ? t.w : 1),
            this
          );
        },
        add: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x),
              (this.y += t.y),
              (this.z += t.z),
              (this.w += t.w),
              this);
        },
        addScalar: function (t) {
          return (
            (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
          );
        },
        addVectors: function (t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            (this.w = t.w + e.w),
            this
          );
        },
        addScaledVector: function (t, e) {
          return (
            (this.x += t.x * e),
            (this.y += t.y * e),
            (this.z += t.z * e),
            (this.w += t.w * e),
            this
          );
        },
        sub: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x),
              (this.y -= t.y),
              (this.z -= t.z),
              (this.w -= t.w),
              this);
        },
        subScalar: function (t) {
          return (
            (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
          );
        },
        subVectors: function (t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            (this.w = t.w - e.w),
            this
          );
        },
        multiplyScalar: function (t) {
          return (
            (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
          );
        },
        applyMatrix4: function (t) {
          var e = this.x,
            r = this.y,
            i = this.z,
            n = this.w,
            a = t.elements;
          return (
            (this.x = a[0] * e + a[4] * r + a[8] * i + a[12] * n),
            (this.y = a[1] * e + a[5] * r + a[9] * i + a[13] * n),
            (this.z = a[2] * e + a[6] * r + a[10] * i + a[14] * n),
            (this.w = a[3] * e + a[7] * r + a[11] * i + a[15] * n),
            this
          );
        },
        divideScalar: function (t) {
          return this.multiplyScalar(1 / t);
        },
        setAxisAngleFromQuaternion: function (t) {
          this.w = 2 * Math.acos(t.w);
          var e = Math.sqrt(1 - t.w * t.w);
          return (
            e < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
            this
          );
        },
        setAxisAngleFromRotationMatrix: function (t) {
          var e,
            r,
            i,
            n,
            a = t.elements,
            s = a[0],
            o = a[4],
            h = a[8],
            u = a[1],
            c = a[5],
            l = a[9],
            p = a[2],
            d = a[6],
            f = a[10];
          if (
            Math.abs(o - u) < 0.01 &&
            Math.abs(h - p) < 0.01 &&
            Math.abs(l - d) < 0.01
          ) {
            if (
              Math.abs(o + u) < 0.1 &&
              Math.abs(h + p) < 0.1 &&
              Math.abs(l + d) < 0.1 &&
              Math.abs(s + c + f - 3) < 0.1
            )
              return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            var m = (s + 1) / 2,
              g = (c + 1) / 2,
              y = (f + 1) / 2,
              v = (o + u) / 4,
              x = (h + p) / 4,
              b = (l + d) / 4;
            return (
              m > g && m > y
                ? m < 0.01
                  ? ((r = 0), (i = 0.707106781), (n = 0.707106781))
                  : ((i = v / (r = Math.sqrt(m))), (n = x / r))
                : g > y
                ? g < 0.01
                  ? ((r = 0.707106781), (i = 0), (n = 0.707106781))
                  : ((r = v / (i = Math.sqrt(g))), (n = b / i))
                : y < 0.01
                ? ((r = 0.707106781), (i = 0.707106781), (n = 0))
                : ((r = x / (n = Math.sqrt(y))), (i = b / n)),
              this.set(r, i, n, e),
              this
            );
          }
          var w = Math.sqrt(
            (d - l) * (d - l) + (h - p) * (h - p) + (u - o) * (u - o)
          );
          return (
            Math.abs(w) < 0.001 && (w = 1),
            (this.x = (d - l) / w),
            (this.y = (h - p) / w),
            (this.z = (u - o) / w),
            (this.w = Math.acos((s + c + f - 1) / 2)),
            this
          );
        },
        min: function (t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            (this.w = Math.min(this.w, t.w)),
            this
          );
        },
        max: function (t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            (this.w = Math.max(this.w, t.w)),
            this
          );
        },
        clamp: function (t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            (this.w = Math.max(t.w, Math.min(e.w, this.w))),
            this
          );
        },
        clampScalar: function (t, e) {
          return (
            void 0 === o && ((o = new f()), (h = new f())),
            o.set(t, t, t, t),
            h.set(e, e, e, e),
            this.clamp(o, h)
          );
        },
        clampLength: function (t, e) {
          var r = this.length();
          return this.divideScalar(r || 1).multiplyScalar(
            Math.max(t, Math.min(e, r))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
          );
        },
        negate: function () {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        },
        dot: function (t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        },
        lengthSq: function () {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        },
        length: function () {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        },
        lengthManhattan: function () {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        setLength: function (t) {
          return this.normalize().multiplyScalar(t);
        },
        lerp: function (t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            (this.w += (t.w - this.w) * e),
            this
          );
        },
        lerpVectors: function (t, e, r) {
          return this.subVectors(e, t).multiplyScalar(r).add(t);
        },
        equals: function (t) {
          return (
            t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
          );
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            (this.w = t[e + 3]),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            (t[e + 3] = this.w),
            t
          );
        },
        fromBufferAttribute: function (t, e, r) {
          return (
            void 0 !== r &&
              console.warn(
                "RK.Vec4: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            (this.w = t.getW(e)),
            this
          );
        },
      }),
      Object.assign(m.prototype, s.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function (t, e) {
          (this.width === t && this.height === e) ||
            ((this.width = t),
            (this.height = e),
            (this.texture._width = t),
            (this.texture._height = e),
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e);
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return (
            (this.width = t.width),
            (this.height = t.height),
            this.viewport.copy(t.viewport),
            (this.texture = t.texture.clone()),
            (this.depthBuffer = t.depthBuffer),
            (this.stencilBuffer = t.stencilBuffer),
            (this.depthTexture = t.depthTexture),
            this
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      }),
      (g.prototype = Object.create(m.prototype)),
      (g.prototype.constructor = g),
      (g.prototype.isWebGLRenderTargetCube = !0);
    var y = r(20);
    function v(t, e, r, i, n, a, s, o, h, c) {
      (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : u.CubeReflectionMapping),
        d.call(this, t, e, r, i, n, a, s, o, h, c),
        (this.flipY = !1);
    }
    (v.prototype = Object.create(d.prototype)),
      (v.prototype.constructor = v),
      (v.prototype.isCubeTexture = !0),
      Object.defineProperty(v.prototype, "images", {
        get: function () {
          return this.image;
        },
        set: function (t) {
          this.image = t;
        },
      });
    var x = new d(),
      b = new v();
    function w() {
      (this.seq = []), (this.map = {});
    }
    var M = [],
      T = [],
      S = new Float32Array(16),
      _ = new Float32Array(9);
    function E(t, e, r) {
      var i = t[0];
      if (i <= 0 || i > 0) return t;
      var n = e * r,
        a = M[n];
      if ((void 0 === a && ((a = new Float32Array(n)), (M[n] = a)), 0 !== e)) {
        i.toArray(a, 0);
        for (var s = 1, o = 0; s !== e; ++s) (o += r), t[s].toArray(a, o);
      }
      return a;
    }
    function A(t, e) {
      var r = T[e];
      void 0 === r && ((r = new Int32Array(e)), (T[e] = r));
      for (var i = 0; i !== e; ++i) r[i] = t.allocTextureUnit();
      return r;
    }
    function R(t, e) {
      t.uniform1f(this.addr, e);
    }
    function P(t, e) {
      t.uniform1i(this.addr, e);
    }
    function C(t, e) {
      void 0 === e.x
        ? t.uniform2fv(this.addr, e)
        : t.uniform2f(this.addr, e.x, e.y);
    }
    function O(t, e) {
      void 0 !== e.x
        ? t.uniform3f(this.addr, e.x, e.y, e.z)
        : void 0 !== e.r
        ? t.uniform3f(this.addr, e.r, e.g, e.b)
        : t.uniform3fv(this.addr, e);
    }
    function F(t, e) {
      void 0 === e.x
        ? t.uniform4fv(this.addr, e)
        : t.uniform4f(this.addr, e.x, e.y, e.z, e.w);
    }
    function L(t, e) {
      t.uniformMatrix2fv(this.addr, !1, e.elements || e);
    }
    function z(t, e) {
      void 0 === e.elements
        ? t.uniformMatrix3fv(this.addr, !1, e)
        : (_.set(e.elements), t.uniformMatrix3fv(this.addr, !1, _));
    }
    function B(t, e) {
      void 0 === e.elements
        ? t.uniformMatrix4fv(this.addr, !1, e)
        : (S.set(e.elements), t.uniformMatrix4fv(this.addr, !1, S));
    }
    function U(t, e, r) {
      var i = r.allocTextureUnit();
      t.uniform1i(this.addr, i), r.setTexture2D(e || x, i);
    }
    function N(t, e, r) {
      var i = r.allocTextureUnit();
      t.uniform1i(this.addr, i), r.setTextureCube(e || b, i);
    }
    function D(t, e) {
      t.uniform2iv(this.addr, e);
    }
    function I(t, e) {
      t.uniform3iv(this.addr, e);
    }
    function G(t, e) {
      t.uniform4iv(this.addr, e);
    }
    function k(t, e) {
      t.uniform1fv(this.addr, e);
    }
    function W(t, e) {
      t.uniform1iv(this.addr, e);
    }
    function V(t, e) {
      t.uniform2fv(this.addr, E(e, this.size, 2));
    }
    function j(t, e) {
      t.uniform3fv(this.addr, E(e, this.size, 3));
    }
    function X(t, e) {
      t.uniform4fv(this.addr, E(e, this.size, 4));
    }
    function q(t, e) {
      t.uniformMatrix2fv(this.addr, !1, E(e, this.size, 4));
    }
    function K(t, e) {
      t.uniformMatrix3fv(this.addr, !1, E(e, this.size, 9));
    }
    function H(t, e) {
      t.uniformMatrix4fv(this.addr, !1, E(e, this.size, 16));
    }
    function Y(t, e, r) {
      var i = e.length,
        n = A(r, i);
      t.uniform1iv(this.addr, n);
      for (var a = 0; a !== i; ++a) r.setTexture2D(e[a] || x, n[a]);
    }
    function Z(t, e, r) {
      var i = e.length,
        n = A(r, i);
      t.uniform1iv(this.addr, n);
      for (var a = 0; a !== i; ++a) r.setTextureCube(e[a] || b, n[a]);
    }
    function J(t, e, r) {
      (this.id = t),
        (this.addr = r),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return R;
            case 35664:
              return C;
            case 35665:
              return O;
            case 35666:
              return F;
            case 35674:
              return L;
            case 35675:
              return z;
            case 35676:
              return B;
            case 35678:
            case 36198:
              return U;
            case 35680:
              return N;
            case 5124:
            case 35670:
              return P;
            case 35667:
            case 35671:
              return D;
            case 35668:
            case 35672:
              return I;
            case 35669:
            case 35673:
              return G;
          }
        })(e.type));
    }
    function Q(t, e, r) {
      (this.id = t),
        (this.addr = r),
        (this.size = e.size),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return k;
            case 35664:
              return V;
            case 35665:
              return j;
            case 35666:
              return X;
            case 35674:
              return q;
            case 35675:
              return K;
            case 35676:
              return H;
            case 35678:
              return Y;
            case 35680:
              return Z;
            case 5124:
            case 35670:
              return W;
            case 35667:
            case 35671:
              return D;
            case 35668:
            case 35672:
              return I;
            case 35669:
            case 35673:
              return G;
          }
        })(e.type));
    }
    function $(t) {
      (this.id = t), w.call(this);
    }
    $.prototype.setValue = function (t, e) {
      for (var r = this.seq, i = 0, n = r.length; i !== n; ++i) {
        var a = r[i];
        a.setValue(t, e[a.id]);
      }
    };
    var tt,
      et = /([\w\d_]+)(\])?(\[|\.)?/g;
    function rt(t, e) {
      t.seq.push(e), (t.map[e.id] = e);
    }
    function it(t, e, r) {
      var i = t.name,
        n = i.length;
      for (et.lastIndex = 0; ; ) {
        var a = et.exec(i),
          s = et.lastIndex,
          o = a[1],
          h = "]" === a[2],
          u = a[3];
        if ((h && (o |= 0), void 0 === u || ("[" === u && s + 2 === n))) {
          rt(r, void 0 === u ? new J(o, t, e) : new Q(o, t, e));
          break;
        }
        var c = r.map[o];
        void 0 === c && rt(r, (c = new $(o))), (r = c);
      }
    }
    function nt(t, e, r) {
      w.call(this), (this.renderer = r);
      for (
        var i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), n = 0;
        n < i;
        ++n
      ) {
        var a = t.getActiveUniform(e, n),
          s = a.name;
        it(a, t.getUniformLocation(e, s), this);
      }
    }
    function at(t, e) {
      (this.min = void 0 !== t ? t : new l.a(1 / 0, 1 / 0)),
        (this.max = void 0 !== e ? e : new l.a(-1 / 0, -1 / 0));
    }
    (nt.prototype.setValue = function (t, e, r) {
      var i = this.map[e];
      void 0 !== i && i.setValue(t, r, this.renderer);
    }),
      (nt.prototype.setOptional = function (t, e, r) {
        var i = e[r];
        void 0 !== i && this.setValue(t, r, i);
      }),
      (nt.upload = function (t, e, r, i) {
        for (var n = 0, a = e.length; n !== a; ++n) {
          var s = e[n],
            o = r[s.id];
          !1 !== o.needsUpdate && s.setValue(t, o.value, i);
        }
      }),
      (nt.seqWithValue = function (t, e) {
        for (var r = [], i = 0, n = t.length; i !== n; ++i) {
          var a = t[i];
          a.id in e && r.push(a);
        }
        return r;
      }),
      Object.assign(at.prototype, {
        set: function (t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        },
        sub: function (t) {
          this.min.sub(t), this.max.sub(t);
        },
        setFromPoints: function (t) {
          this.makeEmpty();
          for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
          return this;
        },
        setFromCenterAndSize:
          ((tt = new l.a()),
          function (t, e) {
            var r = tt.copy(e).multiplyScalar(0.5);
            return this.min.copy(t).sub(r), this.max.copy(t).add(r), this;
          }),
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        },
        makeEmpty: function () {
          return (
            (this.min.x = this.min.y = 1 / 0),
            (this.max.x = this.max.y = -1 / 0),
            this
          );
        },
        isEmpty: function () {
          return this.max.x < this.min.x || this.max.y < this.min.y;
        },
        getCenter: function (t) {
          var e = t || new l.a();
          return this.isEmpty()
            ? e.set(0, 0)
            : e.addVectors(this.min, this.max).multiplyScalar(0.5);
        },
        getSize: function (t) {
          var e = t || new l.a();
          return this.isEmpty()
            ? e.set(0, 0)
            : e.subVectors(this.max, this.min);
        },
        expandByPoint: function (t) {
          return this.min.min(t), this.max.max(t), this;
        },
        expandByVector: function (t) {
          return this.min.sub(t), this.max.add(t), this;
        },
        expandByScalar: function (t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        },
        containsPoint: function (t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y
          );
        },
        containsBox: function (t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y
          );
        },
        getParameter: function (t, e) {
          return (e || new l.a()).set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y)
          );
        },
        intersectsBox: function (t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y
          );
        },
        clampPoint: function (t, e) {
          return (e || new l.a()).copy(t).clamp(this.min, this.max);
        },
        distanceToPoint: (function () {
          var t = new l.a();
          return function (e) {
            return t.copy(e).clamp(this.min, this.max).sub(e).length();
          };
        })(),
        intersect: function (t) {
          return this.min.max(t.min), this.max.min(t.max), this;
        },
        union: function (t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        },
        translate: function (t) {
          return this.min.add(t), this.max.add(t), this;
        },
        equals: function (t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        },
      });
    var st = r(1);
    function ot(t, e, r, i, n) {
      var a, s, o, h, u, c, p, d;
      function f() {
        var t = new Float32Array([
            -1,
            -1,
            0,
            0,
            1,
            -1,
            1,
            0,
            1,
            1,
            1,
            1,
            -1,
            1,
            0,
            1,
          ]),
          i = new Uint16Array([0, 1, 2, 0, 2, 3]);
        (a = e.createBuffer()),
          (s = e.createBuffer()),
          e.bindBuffer(e.ARRAY_BUFFER, a),
          e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW),
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s),
          e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW),
          (p = e.createTexture()),
          (d = e.createTexture()),
          r.bindTexture(e.TEXTURE_2D, p),
          e.texImage2D(
            e.TEXTURE_2D,
            0,
            e.RGB,
            16,
            16,
            0,
            e.RGB,
            e.UNSIGNED_BYTE,
            null
          ),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
          r.bindTexture(e.TEXTURE_2D, d),
          e.texImage2D(
            e.TEXTURE_2D,
            0,
            e.RGBA,
            16,
            16,
            0,
            e.RGBA,
            e.UNSIGNED_BYTE,
            null
          ),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
          (o = {
            vertexShader: [
              "uniform lowp int renderType;",
              "uniform vec3 screenPosition;",
              "uniform vec2 scale;",
              "uniform float rotation;",
              "uniform sampler2D occlusionMap;",
              "attribute vec2 position;",
              "attribute vec2 uv;",
              "varying vec2 vUV;",
              "varying float vVisibility;",
              "void main() {",
              "vUV = uv;",
              "vec2 pos = position;",
              "if ( renderType == 2 ) {",
              "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
              "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",
              "vVisibility =        visibility.r / 9.0;",
              "vVisibility *= 1.0 - visibility.g / 9.0;",
              "vVisibility *=       visibility.b / 9.0;",
              "vVisibility *= 1.0 - visibility.a / 9.0;",
              "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
              "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",
              "}",
              "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
              "}",
            ].join("\n"),
            fragmentShader: [
              "uniform lowp int renderType;",
              "uniform sampler2D map;",
              "uniform float opacity;",
              "uniform vec3 color;",
              "varying vec2 vUV;",
              "varying float vVisibility;",
              "void main() {",
              "if ( renderType == 0 ) {",
              "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",
              "} else if ( renderType == 1 ) {",
              "gl_FragColor = texture2D( map, vUV );",
              "} else {",
              "vec4 texture = texture2D( map, vUV );",
              "texture.a *= opacity * vVisibility;",
              "gl_FragColor = texture;",
              "gl_FragColor.rgb *= color;",
              "}",
              "}",
            ].join("\n"),
          }),
          (h = (function (t) {
            var r = e.createProgram(),
              i = e.createShader(e.FRAGMENT_SHADER),
              a = e.createShader(e.VERTEX_SHADER),
              s = "precision " + n.precision + " float;\n";
            return (
              e.shaderSource(i, s + t.fragmentShader),
              e.shaderSource(a, s + t.vertexShader),
              e.compileShader(i),
              e.compileShader(a),
              e.attachShader(r, i),
              e.attachShader(r, a),
              e.linkProgram(r),
              r
            );
          })(o)),
          (u = {
            vertex: e.getAttribLocation(h, "position"),
            uv: e.getAttribLocation(h, "uv"),
          }),
          (c = {
            renderType: e.getUniformLocation(h, "renderType"),
            map: e.getUniformLocation(h, "map"),
            occlusionMap: e.getUniformLocation(h, "occlusionMap"),
            opacity: e.getUniformLocation(h, "opacity"),
            color: e.getUniformLocation(h, "color"),
            scale: e.getUniformLocation(h, "scale"),
            rotation: e.getUniformLocation(h, "rotation"),
            screenPosition: e.getUniformLocation(h, "screenPosition"),
          });
      }
      this.render = function (t, n, o, m) {
        if (0 !== t.length) {
          var g = new st.a(),
            y = m.w / m.z,
            v = 0.5 * m.z,
            x = 0.5 * m.w,
            b = 16 / m.w,
            w = new l.a(b * y, b),
            M = new st.a(1, 1, 0),
            T = new l.a(1, 1),
            S = new at();
          S.min.set(m.x, m.y),
            S.max.set(m.x + (m.z - 16), m.y + (m.w - 16)),
            void 0 === h && f(),
            r.useProgram(h),
            r.initAttributes(),
            r.enableAttribute(u.vertex),
            r.enableAttribute(u.uv),
            r.disableUnusedAttributes(),
            e.uniform1i(c.occlusionMap, 0),
            e.uniform1i(c.map, 1),
            e.bindBuffer(e.ARRAY_BUFFER, a),
            e.vertexAttribPointer(u.vertex, 2, e.FLOAT, !1, 16, 0),
            e.vertexAttribPointer(u.uv, 2, e.FLOAT, !1, 16, 8),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s),
            r.disable(e.CULL_FACE),
            r.buffers.depth.setMask(!1);
          for (var _ = 0, E = t.length; _ < E; _++) {
            (b = 16 / m.w), w.set(b * y, b);
            var A = t[_];
            if (
              (g.set(
                A.matrixWorld.elements[12],
                A.matrixWorld.elements[13],
                A.matrixWorld.elements[14]
              ),
              g.applyMatrix4(o.matrixWorldInverse),
              g.applyMatrix4(o.projectionMatrix),
              M.copy(g),
              (T.x = m.x + M.x * v + v - 8),
              (T.y = m.y + M.y * x + x - 8),
              !0 === S.containsPoint(T))
            ) {
              r.activeTexture(e.TEXTURE0),
                r.bindTexture(e.TEXTURE_2D, null),
                r.activeTexture(e.TEXTURE1),
                r.bindTexture(e.TEXTURE_2D, p),
                e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, T.x, T.y, 16, 16, 0),
                e.uniform1i(c.renderType, 0),
                e.uniform2f(c.scale, w.x, w.y),
                e.uniform3f(c.screenPosition, M.x, M.y, M.z),
                r.disable(e.BLEND),
                r.enable(e.DEPTH_TEST),
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0),
                r.activeTexture(e.TEXTURE0),
                r.bindTexture(e.TEXTURE_2D, d),
                e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, T.x, T.y, 16, 16, 0),
                e.uniform1i(c.renderType, 1),
                r.disable(e.DEPTH_TEST),
                r.activeTexture(e.TEXTURE1),
                r.bindTexture(e.TEXTURE_2D, p),
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0),
                A.positionScreen.copy(M),
                A.customUpdateCallback
                  ? A.customUpdateCallback(A)
                  : A.updateLensFlares(),
                e.uniform1i(c.renderType, 2),
                r.enable(e.BLEND);
              for (var R = 0, P = A.lensFlares.length; R < P; R++) {
                var C = A.lensFlares[R];
                C.opacity > 0.001 &&
                  C.scale > 0.001 &&
                  ((M.x = C.x),
                  (M.y = C.y),
                  (M.z = C.z),
                  (b = (C.size * C.scale) / m.w),
                  (w.x = b * y),
                  (w.y = b),
                  e.uniform3f(c.screenPosition, M.x, M.y, M.z),
                  e.uniform2f(c.scale, w.x, w.y),
                  e.uniform1f(c.rotation, C.rotation),
                  e.uniform1f(c.opacity, C.opacity),
                  e.uniform3f(c.color, C.color.r, C.color.g, C.color.b),
                  r.setBlending(
                    C.blending,
                    C.blendEquation,
                    C.blendSrc,
                    C.blendDst
                  ),
                  i.setTexture2D(C.texture, 1),
                  e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0));
              }
            }
          }
          r.enable(e.CULL_FACE),
            r.enable(e.DEPTH_TEST),
            r.buffers.depth.setMask(!0),
            r.reset();
        }
      };
    }
    function ht(t, e, r, i, n, a, s, o, h) {
      d.call(this, t, e, r, i, n, a, s, o, h), (this.needsUpdate = !0);
    }
    (ht.prototype = Object.create(d.prototype)),
      (ht.prototype.constructor = ht);
    var ut,
      ct,
      lt,
      pt,
      dt,
      ft,
      mt,
      gt,
      yt = r(27);
    function vt(t, e, r, i, n) {
      var a,
        s,
        o,
        h,
        u,
        c,
        l = new st.a(),
        p = new yt.a(),
        d = new st.a();
      function f() {
        var t = new Float32Array([
            -0.5,
            -0.5,
            0,
            0,
            0.5,
            -0.5,
            1,
            0,
            0.5,
            0.5,
            1,
            1,
            -0.5,
            0.5,
            0,
            1,
          ]),
          r = new Uint16Array([0, 1, 2, 0, 2, 3]);
        (a = e.createBuffer()),
          (s = e.createBuffer()),
          e.bindBuffer(e.ARRAY_BUFFER, a),
          e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW),
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s),
          e.bufferData(e.ELEMENT_ARRAY_BUFFER, r, e.STATIC_DRAW),
          (o = (function () {
            var t = e.createProgram(),
              r = e.createShader(e.VERTEX_SHADER),
              i = e.createShader(e.FRAGMENT_SHADER);
            return (
              e.shaderSource(
                r,
                [
                  "precision " + n.precision + " float;",
                  "#define SHADER_NAME SpriteMaterial",
                  "uniform mat4 modelViewMatrix;",
                  "uniform mat4 projectionMatrix;",
                  "uniform float rotation;",
                  "uniform vec2 scale;",
                  "uniform vec2 uvOffset;",
                  "uniform vec2 uvScale;",
                  "attribute vec2 position;",
                  "attribute vec2 uv;",
                  "varying vec2 vUV;",
                  "varying float fogDepth;",
                  "void main() {",
                  "vUV = uvOffset + uv * uvScale;",
                  "vec2 alignedPosition = position * scale;",
                  "vec2 rotatedPosition;",
                  "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;",
                  "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;",
                  "vec4 mvPosition;",
                  "mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );",
                  "mvPosition.xy += rotatedPosition;",
                  "gl_Position = projectionMatrix * mvPosition;",
                  "fogDepth = - mvPosition.z;",
                  "}",
                ].join("\n")
              ),
              e.shaderSource(
                i,
                [
                  "precision " + n.precision + " float;",
                  "#define SHADER_NAME SpriteMaterial",
                  "uniform vec3 color;",
                  "uniform sampler2D map;",
                  "uniform float opacity;",
                  "uniform int fogType;",
                  "uniform vec3 fogColor;",
                  "uniform float fogDensity;",
                  "uniform float fogNear;",
                  "uniform float fogFar;",
                  "uniform float alphaTest;",
                  "varying vec2 vUV;",
                  "varying float fogDepth;",
                  "void main() {",
                  "vec4 texture = texture2D( map, vUV );",
                  "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );",
                  "if ( gl_FragColor.a < alphaTest ) discard;",
                  "if ( fogType > 0 ) {",
                  "float fogFactor = 0.0;",
                  "if ( fogType == 1 ) {",
                  "fogFactor = smoothstep( fogNear, fogFar, fogDepth );",
                  "} else {",
                  "const float LOG2 = 1.442695;",
                  "fogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );",
                  "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
                  "}",
                  "gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );",
                  "}",
                  "}",
                ].join("\n")
              ),
              e.compileShader(r),
              e.compileShader(i),
              e.attachShader(t, r),
              e.attachShader(t, i),
              e.linkProgram(t),
              t
            );
          })()),
          (h = {
            position: e.getAttribLocation(o, "position"),
            uv: e.getAttribLocation(o, "uv"),
          }),
          (u = {
            uvOffset: e.getUniformLocation(o, "uvOffset"),
            uvScale: e.getUniformLocation(o, "uvScale"),
            rotation: e.getUniformLocation(o, "rotation"),
            scale: e.getUniformLocation(o, "scale"),
            color: e.getUniformLocation(o, "color"),
            map: e.getUniformLocation(o, "map"),
            opacity: e.getUniformLocation(o, "opacity"),
            modelViewMatrix: e.getUniformLocation(o, "modelViewMatrix"),
            projectionMatrix: e.getUniformLocation(o, "projectionMatrix"),
            fogType: e.getUniformLocation(o, "fogType"),
            fogDensity: e.getUniformLocation(o, "fogDensity"),
            fogNear: e.getUniformLocation(o, "fogNear"),
            fogFar: e.getUniformLocation(o, "fogFar"),
            fogColor: e.getUniformLocation(o, "fogColor"),
            fogDepth: e.getUniformLocation(o, "fogDepth"),
            alphaTest: e.getUniformLocation(o, "alphaTest"),
          });
        var i = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "canvas"
        );
        (i.width = 8), (i.height = 8);
        var l = i.getContext("2d");
        (l.fillStyle = "white"), l.fillRect(0, 0, 8, 8), (c = new ht(i));
      }
      function m(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : e.id - t.id;
      }
      this.render = function (n, g, y) {
        if (0 !== n.length) {
          void 0 === o && f(),
            r.useProgram(o),
            r.initAttributes(),
            r.enableAttribute(h.position),
            r.enableAttribute(h.uv),
            r.disableUnusedAttributes(),
            r.disable(e.CULL_FACE),
            r.enable(e.BLEND),
            e.bindBuffer(e.ARRAY_BUFFER, a),
            e.vertexAttribPointer(h.position, 2, e.FLOAT, !1, 16, 0),
            e.vertexAttribPointer(h.uv, 2, e.FLOAT, !1, 16, 8),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s),
            e.uniformMatrix4fv(
              u.projectionMatrix,
              !1,
              y.projectionMatrix.elements
            ),
            r.activeTexture(e.TEXTURE0),
            e.uniform1i(u.map, 0);
          var v = 0,
            x = 0,
            b = g.fog;
          b
            ? (e.uniform3f(u.fogColor, b.color.r, b.color.g, b.color.b),
              b.isFog
                ? (e.uniform1f(u.fogNear, b.near),
                  e.uniform1f(u.fogFar, b.far),
                  e.uniform1i(u.fogType, 1),
                  (v = 1),
                  (x = 1))
                : b.isFogExp2 &&
                  (e.uniform1f(u.fogDensity, b.density),
                  e.uniform1i(u.fogType, 2),
                  (v = 2),
                  (x = 2)))
            : (e.uniform1i(u.fogType, 0), (v = 0), (x = 0));
          for (var w = 0, M = n.length; w < M; w++) {
            (S = n[w]).modelViewMatrix.multiplyMatrices(
              y.matrixWorldInverse,
              S.matrixWorld
            ),
              (S.z = -S.modelViewMatrix.elements[14]);
          }
          n.sort(m);
          var T = [];
          for (w = 0, M = n.length; w < M; w++) {
            var S,
              _ = (S = n[w]).material;
            if (!1 !== _.visible) {
              S.onBeforeRender(t, g, y, void 0, _, void 0),
                e.uniform1f(u.alphaTest, _.alphaTest),
                e.uniformMatrix4fv(
                  u.modelViewMatrix,
                  !1,
                  S.modelViewMatrix.elements
                ),
                S.matrixWorld.decompose(l, p, d),
                (T[0] = d.x),
                (T[1] = d.y);
              var E = 0;
              g.fog && _.fog && (E = x),
                v !== E && (e.uniform1i(u.fogType, E), (v = E)),
                null !== _.map
                  ? (e.uniform2f(u.uvOffset, _.map.offset.x, _.map.offset.y),
                    e.uniform2f(u.uvScale, _.map.repeat.x, _.map.repeat.y))
                  : (e.uniform2f(u.uvOffset, 0, 0),
                    e.uniform2f(u.uvScale, 1, 1)),
                e.uniform1f(u.opacity, _.opacity),
                e.uniform3f(u.color, _.color.r, _.color.g, _.color.b),
                e.uniform1f(u.rotation, _.rotation),
                e.uniform2fv(u.scale, T),
                r.setBlending(
                  _.blending,
                  _.blendEquation,
                  _.blendSrc,
                  _.blendDst,
                  _.blendEquationAlpha,
                  _.blendSrcAlpha,
                  _.blendDstAlpha,
                  _.premultipliedAlpha
                ),
                r.buffers.depth.setTest(_.depthTest),
                r.buffers.depth.setMask(_.depthWrite),
                i.setTexture2D(_.map || c, 0),
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0),
                S.onAfterRender(t, g, y, void 0, _, void 0);
            }
          }
          r.enable(e.CULL_FACE), r.reset();
        }
      };
    }
    function xt(t, e) {
      (this.min = void 0 !== t ? t : new st.a(1 / 0, 1 / 0, 1 / 0)),
        (this.max = void 0 !== e ? e : new st.a(-1 / 0, -1 / 0, -1 / 0));
    }
    function bt(t, e) {
      (this.center = void 0 !== t ? t : new st.a()),
        (this.radius = void 0 !== e ? e : 0);
    }
    function wt() {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "RK.Matrix3: the constructor no longer reads arguments. use .set() instead."
          );
    }
    function Mt(t, e) {
      (this.normal = void 0 !== t ? t : new st.a(1, 0, 0)),
        (this.constant = void 0 !== e ? e : 0);
    }
    function Tt(t, e, r, i, n, a) {
      this.planes = [
        void 0 !== t ? t : new Mt(),
        void 0 !== e ? e : new Mt(),
        void 0 !== r ? r : new Mt(),
        void 0 !== i ? i : new Mt(),
        void 0 !== n ? n : new Mt(),
        void 0 !== a ? a : new Mt(),
      ];
    }
    function St(t, e, r) {
      var i = new Tt(),
        n = new y.a(),
        a = new l.a(),
        s = new l.a(r, r),
        o = new st.a(),
        h = new st.a(),
        c = {},
        p = [
          new st.a(1, 0, 0),
          new st.a(-1, 0, 0),
          new st.a(0, 0, 1),
          new st.a(0, 0, -1),
          new st.a(0, 1, 0),
          new st.a(0, -1, 0),
        ],
        d = [
          new st.a(0, 1, 0),
          new st.a(0, 1, 0),
          new st.a(0, 1, 0),
          new st.a(0, 1, 0),
          new st.a(0, 0, 1),
          new st.a(0, 0, -1),
        ],
        g = [new f(), new f(), new f(), new f(), new f(), new f()],
        v = this;
      function x(e, r, i, n, a, s) {
        var o = null,
          h = e.customDepthMaterial;
        if (
          (h ? (o = h) : console.error("must have custom depth material", e),
          t.localClippingEnabled &&
            !0 === r.clipShadows &&
            0 !== r.clippingPlanes.length)
        ) {
          var l = o.uuid,
            p = r.uuid,
            d = c[l];
          void 0 === d && ((d = {}), (c[l] = d));
          var f = d[p];
          void 0 === f && ((f = o.clone()), (d[p] = f)), (o = f);
        }
        (o.visible = r.visible), (o.wireframe = r.wireframe);
        var m = r.side;
        return (
          v.renderSingleSided && m == u.DoubleSide && (m = u.FrontSide),
          v.renderReverseSided &&
            (m === u.FrontSide
              ? (m = u.BackSide)
              : m === u.BackSide && (m = u.FrontSide)),
          (o.side = void 0 !== r.ckShadowSide ? r.ckShadowSide : r.side),
          (o.clipShadows = r.clipShadows),
          (o.clippingPlanes = r.clippingPlanes),
          (o.clipIntersection = r.clipIntersection),
          (o.wireframeLinewidth = r.wireframeLinewidth),
          (o.linewidth = r.linewidth),
          i &&
            o.isMeshDistanceMaterial &&
            (o.referencePosition.copy(n),
            (o.nearDistance = a),
            (o.farDistance = s)),
          o
        );
      }
      function b(r, n, a, s) {
        if (!1 !== r.visible) {
          if (
            r.layers.test(n.layers) &&
            (r.isMesh || r.isLine || r.isPoints) &&
            r.castShadow &&
            (!r.frustumCulled || i.intersectsObject(r))
          ) {
            r.modelViewMatrix.multiplyMatrices(
              a.matrixWorldInverse,
              r.matrixWorld
            );
            var o = e.update(r),
              u = r.material;
            if (Array.isArray(u))
              for (var c = o.groups, l = 0, p = c.length; l < p; l++) {
                var d = c[l],
                  f = u[d.materialIndex];
                if (f && f.visible) {
                  var m = x(r, f, s, h, a.near, a.far);
                  t.renderBufferDirect(a, null, o, m, r, d);
                }
              }
            else if (u.visible) {
              m = x(r, u, s, h, a.near, a.far);
              t.renderBufferDirect(a, null, o, m, r, null);
            }
          }
          for (var g = r.children, y = 0, v = g.length; y < v; y++)
            b(g[y], n, a, s);
        }
      }
      (this.enabled = !1),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this.type = u.PCFShadowMap),
        (this.renderReverseSided = !0),
        (this.renderSingleSided = !0),
        (this.render = function (e, r, c) {
          if (
            !1 !== v.enabled &&
            (!1 !== v.autoUpdate || !1 !== v.needsUpdate) &&
            0 !== e.length
          ) {
            var l,
              f = t.context,
              y = t.state;
            y.disable(f.BLEND),
              y.buffers.color.setClear(1, 1, 1, 1),
              y.buffers.depth.setTest(!0),
              y.setScissorTest(!1);
            for (var x = 0, w = e.length; x < w; x++) {
              var M = e[x],
                T = M.shadow,
                S = M && M.isPointLight;
              if (void 0 !== T) {
                var _ = T.camera;
                if ((a.copy(T.mapSize), a.min(s), S)) {
                  var E = a.x,
                    A = a.y;
                  g[0].set(2 * E, A, E, A),
                    g[1].set(0, A, E, A),
                    g[2].set(3 * E, A, E, A),
                    g[3].set(E, A, E, A),
                    g[4].set(3 * E, 0, E, A),
                    g[5].set(E, 0, E, A),
                    (a.x *= 4),
                    (a.y *= 2);
                }
                if (null === T.map) {
                  var R = {
                    minFilter: u.NearestFilter,
                    magFilter: u.NearestFilter,
                    format: u.RGBAFormat,
                  };
                  (T.map = new m(a.x, a.y, R)),
                    (T.map.texture.name = M.name + ".shadowMap"),
                    _.updateProjectionMatrix();
                }
                T.isSpotLightShadow && T.update(M);
                var P = T.map,
                  C = T.matrix;
                h.setFromMatrixPosition(M.matrixWorld),
                  _.position.copy(h),
                  S
                    ? ((l = 6), C.makeTranslation(-h.x, -h.y, -h.z))
                    : ((l = 1),
                      o.setFromMatrixPosition(M.target.matrixWorld),
                      _.lookAt(o),
                      _.updateMatrixWorld(),
                      C.set(
                        0.5,
                        0,
                        0,
                        0.5,
                        0,
                        0.5,
                        0,
                        0.5,
                        0,
                        0,
                        0.5,
                        0.5,
                        0,
                        0,
                        0,
                        1
                      ),
                      C.multiply(_.projectionMatrix),
                      C.multiply(_.matrixWorldInverse)),
                  t.setRenderTarget(P),
                  t.clear();
                for (var O = 0; O < l; O++) {
                  if (S) {
                    o.copy(_.position),
                      o.add(p[O]),
                      _.up.copy(d[O]),
                      _.lookAt(o),
                      _.updateMatrixWorld();
                    var F = g[O];
                    y.viewport(F);
                  }
                  n.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse),
                    i.setFromMatrix(n),
                    b(r, c, _, S);
                }
              } else console.warn("RK.WebGLShadowMap:", M, "has no shadow.");
            }
            v.needsUpdate = !1;
          }
        });
    }
    function _t(t) {
      var e = {};
      return {
        get: function (t) {
          return t.isInterleavedBufferAttribute && (t = t.data), e[t.uuid];
        },
        remove: function (r) {
          r.isInterleavedBufferAttribute && (r = r.data);
          var i = e[r.uuid];
          i && (t.deleteBuffer(i.buffer), delete e[r.uuid]);
        },
        update: function (r, i) {
          r.isInterleavedBufferAttribute && (r = r.data);
          var n = e[r.uuid];
          void 0 === n
            ? (e[r.uuid] = (function (e, r) {
                var i = e.array,
                  n = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
                  a = t.createBuffer();
                t.bindBuffer(r, a), t.bufferData(r, i, n), e.onUploadCallback();
                var s = t.FLOAT;
                return (
                  i instanceof Float32Array
                    ? (s = t.FLOAT)
                    : i instanceof Float64Array
                    ? console.warn(
                        "RK.WebGLAttributes: Unsupported data buffer format: Float64Array."
                      )
                    : i instanceof Uint16Array
                    ? (s = t.UNSIGNED_SHORT)
                    : i instanceof Int16Array
                    ? (s = t.SHORT)
                    : i instanceof Uint32Array
                    ? (s = t.UNSIGNED_INT)
                    : i instanceof Int32Array
                    ? (s = t.INT)
                    : i instanceof Int8Array
                    ? (s = t.BYTE)
                    : i instanceof Uint8Array && (s = t.UNSIGNED_BYTE),
                  {
                    buffer: a,
                    type: s,
                    bytesPerElement: i.BYTES_PER_ELEMENT,
                    version: e.version,
                  }
                );
              })(r, i))
            : n.version < r.version &&
              (!(function (e, r, i) {
                var n = r.array,
                  a = r.updateRange;
                t.bindBuffer(i, e),
                  !1 === r.dynamic
                    ? t.bufferData(i, n, t.STATIC_DRAW)
                    : -1 === a.count
                    ? t.bufferSubData(i, 0, n)
                    : 0 === a.count
                    ? console.error(
                        "RK.WebGLObjects.updateBuffer: dynamic RK.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."
                      )
                    : (t.bufferSubData(
                        i,
                        a.offset * n.BYTES_PER_ELEMENT,
                        n.subarray(a.offset, a.offset + a.count)
                      ),
                      (a.count = -1));
              })(n.buffer, r, i),
              (n.version = r.version));
        },
      };
    }
    function Et(t, e, r, i) {
      (this._x = t || 0),
        (this._y = e || 0),
        (this._z = r || 0),
        (this._order = i || Et.DefaultOrder);
    }
    function At() {
      this.mask = 1;
    }
    Object.assign(xt.prototype, {
      isBox3: !0,
      set: function (t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      },
      setFromArray: function (t) {
        for (
          var e = 1 / 0,
            r = 1 / 0,
            i = 1 / 0,
            n = -1 / 0,
            a = -1 / 0,
            s = -1 / 0,
            o = 0,
            h = t.length;
          o < h;
          o += 3
        ) {
          var u = t[o],
            c = t[o + 1],
            l = t[o + 2];
          u < e && (e = u),
            c < r && (r = c),
            l < i && (i = l),
            u > n && (n = u),
            c > a && (a = c),
            l > s && (s = l);
        }
        return this.min.set(e, r, i), this.max.set(n, a, s), this;
      },
      setFromBufferAttribute: function (t) {
        for (
          var e = 1 / 0,
            r = 1 / 0,
            i = 1 / 0,
            n = -1 / 0,
            a = -1 / 0,
            s = -1 / 0,
            o = 0,
            h = t.count;
          o < h;
          o++
        ) {
          var u = t.getX(o),
            c = t.getY(o),
            l = t.getZ(o);
          u < e && (e = u),
            c < r && (r = c),
            l < i && (i = l),
            u > n && (n = u),
            c > a && (a = c),
            l > s && (s = l);
        }
        return this.min.set(e, r, i), this.max.set(n, a, s), this;
      },
      setFromPoints: function (t) {
        this.makeEmpty();
        for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
        return this;
      },
      setFromCenterAndSize: (function () {
        var t = new st.a();
        return function (e, r) {
          var i = t.copy(r).multiplyScalar(0.5);
          return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
        };
      })(),
      setFromSize: function (t) {
        return this.setFromCenterAndSize(new st.a(0, 0, 0), t);
      },
      setFromObject: function (t) {
        return this.makeEmpty(), this.expandByObject(t);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      },
      makeEmpty: function () {
        return (
          (this.min.x = this.min.y = this.min.z = 1 / 0),
          (this.max.x = this.max.y = this.max.z = -1 / 0),
          this
        );
      },
      isEmpty: function () {
        return (
          this.max.x < this.min.x ||
          this.max.y < this.min.y ||
          this.max.z < this.min.z
        );
      },
      getCenter: function (t) {
        var e = t || new st.a();
        return this.isEmpty()
          ? e.set(0, 0, 0)
          : e.addVectors(this.min, this.max).multiplyScalar(0.5);
      },
      getSize: function (t) {
        var e = t || new st.a();
        return this.isEmpty()
          ? e.set(0, 0, 0)
          : e.subVectors(this.max, this.min);
      },
      size: function (t) {
        var e = t || new st.a();
        return this.isEmpty()
          ? e.set(0, 0, 0)
          : e.subVectors(this.max, this.min);
      },
      expandByPoint: function (t) {
        return this.min.min(t), this.max.max(t), this;
      },
      expandByVector: function (t) {
        return this.min.sub(t), this.max.add(t), this;
      },
      expandByScalar: function (t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      },
      expandByObject: (function () {
        var t = new st.a();
        return function (e) {
          var r = this;
          return (
            e.updateMatrixWorld(!0),
            e.traverse(function (e) {
              var i,
                n,
                a = e.geometry;
              if (void 0 !== a)
                if (a.isGeometry) {
                  var s = a.vertices;
                  for (i = 0, n = s.length; i < n; i++)
                    t.copy(s[i]),
                      t.applyMatrix4(e.matrixWorld),
                      r.expandByPoint(t);
                } else if (a.isBufferGeometry) {
                  var o = a.attributes.position;
                  if (void 0 !== o)
                    for (i = 0, n = o.count; i < n; i++)
                      t.fromBufferAttribute(o, i).applyMatrix4(e.matrixWorld),
                        r.expandByPoint(t);
                }
            }),
            this
          );
        };
      })(),
      containsPoint: function (t) {
        return !(
          t.x < this.min.x ||
          t.x > this.max.x ||
          t.y < this.min.y ||
          t.y > this.max.y ||
          t.z < this.min.z ||
          t.z > this.max.z
        );
      },
      containsBox: function (t) {
        return (
          this.min.x <= t.min.x &&
          t.max.x <= this.max.x &&
          this.min.y <= t.min.y &&
          t.max.y <= this.max.y &&
          this.min.z <= t.min.z &&
          t.max.z <= this.max.z
        );
      },
      setSizeX: function (t) {
        var e = (this.max.x + this.min.x) / 2;
        return (this.max.x = e + t / 2), (this.min.x = e - t / 2), this;
      },
      setSizeY: function (t) {
        var e = (this.max.y + this.min.y) / 2;
        return (this.max.y = e + t / 2), (this.min.y = e - t / 2), this;
      },
      setSizeZ: function (t) {
        var e = (this.max.z + this.min.z) / 2;
        return (this.max.z = e + t / 2), (this.min.z = e - t / 2), this;
      },
      toContainingInt: function () {
        return this.min.floor(), this.max.ceil(), this;
      },
      getParameter: function (t, e) {
        return (e || new st.a()).set(
          (t.x - this.min.x) / (this.max.x - this.min.x),
          (t.y - this.min.y) / (this.max.y - this.min.y),
          (t.z - this.min.z) / (this.max.z - this.min.z)
        );
      },
      intersectsBox: function (t) {
        return !(
          t.max.x < this.min.x ||
          t.min.x > this.max.x ||
          t.max.y < this.min.y ||
          t.min.y > this.max.y ||
          t.max.z < this.min.z ||
          t.min.z > this.max.z
        );
      },
      intersectsSphere:
        ((ct = new st.a()),
        function (t) {
          return (
            this.clampPoint(t.center, ct),
            ct.distanceToSquared(t.center) <= t.radius * t.radius
          );
        }),
      intersectsPlane: function (t) {
        var e, r;
        return (
          t.normal.x > 0
            ? ((e = t.normal.x * this.min.x), (r = t.normal.x * this.max.x))
            : ((e = t.normal.x * this.max.x), (r = t.normal.x * this.min.x)),
          t.normal.y > 0
            ? ((e += t.normal.y * this.min.y), (r += t.normal.y * this.max.y))
            : ((e += t.normal.y * this.max.y), (r += t.normal.y * this.min.y)),
          t.normal.z > 0
            ? ((e += t.normal.z * this.min.z), (r += t.normal.z * this.max.z))
            : ((e += t.normal.z * this.max.z), (r += t.normal.z * this.min.z)),
          e <= t.constant && r >= t.constant
        );
      },
      clampPoint: function (t, e) {
        return (e || new st.a()).copy(t).clamp(this.min, this.max);
      },
      distanceToPoint: (function () {
        var t = new st.a();
        return function (e) {
          return t.copy(e).clamp(this.min, this.max).sub(e).length();
        };
      })(),
      getBoundingSphere: (function () {
        var t = new st.a();
        return function (e) {
          var r = e || new bt();
          return (
            this.getCenter(r.center),
            (r.radius = 0.5 * this.getSize(t).length()),
            r
          );
        };
      })(),
      intersect: function (t) {
        return (
          this.min.max(t.min),
          this.max.min(t.max),
          this.isEmpty() && this.makeEmpty(),
          this
        );
      },
      union: function (t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      },
      applyMatrix4:
        ((ut = [
          new st.a(),
          new st.a(),
          new st.a(),
          new st.a(),
          new st.a(),
          new st.a(),
          new st.a(),
          new st.a(),
        ]),
        function (t) {
          return (
            this.isEmpty() ||
              (ut[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              ut[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              ut[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              ut[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              ut[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              ut[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              ut[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              ut[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(ut)),
            this
          );
        }),
      toPoints: function () {
        return [
          new st.a(this.min.x, this.min.y, this.min.z),
          new st.a(this.min.x, this.min.y, this.max.z),
          new st.a(this.min.x, this.max.y, this.min.z),
          new st.a(this.min.x, this.max.y, this.max.z),
          new st.a(this.max.x, this.min.y, this.min.z),
          new st.a(this.max.x, this.min.y, this.max.z),
          new st.a(this.max.x, this.max.y, this.min.z),
          new st.a(this.max.x, this.max.y, this.max.z),
        ];
      },
      translate: function (t) {
        return this.min.add(t), this.max.add(t), this;
      },
      equals: function (t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      },
    }),
      Object.assign(bt.prototype, {
        set: function (t, e) {
          return this.center.copy(t), (this.radius = e), this;
        },
        setFromPoints:
          ((lt = new xt()),
          function (t, e) {
            var r = this.center;
            void 0 !== e ? r.copy(e) : lt.setFromPoints(t).getCenter(r);
            for (var i = 0, n = 0, a = t.length; n < a; n++)
              i = Math.max(i, r.distanceToSquared(t[n]));
            return (this.radius = Math.sqrt(i)), this;
          }),
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        },
        empty: function () {
          return this.radius <= 0;
        },
        containsPoint: function (t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        },
        distanceToPoint: function (t) {
          return t.distanceTo(this.center) - this.radius;
        },
        intersectsSphere: function (t) {
          var e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        },
        intersectsBox: function (t) {
          return t.intersectsSphere(this);
        },
        intersectsPlane: function (t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        },
        clampPoint: function (t, e) {
          var r = this.center.distanceToSquared(t),
            i = e || new st.a();
          return (
            i.copy(t),
            r > this.radius * this.radius &&
              (i.sub(this.center).normalize(),
              i.multiplyScalar(this.radius).add(this.center)),
            i
          );
        },
        getBoundingBox: function (t) {
          var e = t || new xt();
          return (
            e.set(this.center, this.center), e.expandByScalar(this.radius), e
          );
        },
        applyMatrix4: function (t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        },
        translate: function (t) {
          return this.center.add(t), this;
        },
        equals: function (t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        },
      }),
      Object.assign(wt.prototype, {
        isMatrix3: !0,
        set: function (t, e, r, i, n, a, s, o, h) {
          var u = this.elements;
          return (
            (u[0] = t),
            (u[1] = i),
            (u[2] = s),
            (u[3] = e),
            (u[4] = n),
            (u[5] = o),
            (u[6] = r),
            (u[7] = a),
            (u[8] = h),
            this
          );
        },
        identity: function () {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        },
        clone: function () {
          return new this.constructor().fromArray(this.elements);
        },
        copy: function (t) {
          var e = this.elements,
            r = t.elements;
          return (
            (e[0] = r[0]),
            (e[1] = r[1]),
            (e[2] = r[2]),
            (e[3] = r[3]),
            (e[4] = r[4]),
            (e[5] = r[5]),
            (e[6] = r[6]),
            (e[7] = r[7]),
            (e[8] = r[8]),
            this
          );
        },
        setFromMatrix4: function (t) {
          var e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        },
        applyToBufferAttribute: (function () {
          var t = new st.a();
          return function (e) {
            for (var r = 0, i = e.count; r < i; r++)
              (t.x = e.getX(r)),
                (t.y = e.getY(r)),
                (t.z = e.getZ(r)),
                t.applyMatrix3(this),
                e.setXYZ(r, t.x, t.y, t.z);
            return e;
          };
        })(),
        multiply: function (t) {
          return this.multiplyMatrices(this, t);
        },
        premultiply: function (t) {
          return this.multiplyMatrices(t, this);
        },
        multiplyMatrices: function (t, e) {
          var r = t.elements,
            i = e.elements,
            n = this.elements,
            a = r[0],
            s = r[3],
            o = r[6],
            h = r[1],
            u = r[4],
            c = r[7],
            l = r[2],
            p = r[5],
            d = r[8],
            f = i[0],
            m = i[3],
            g = i[6],
            y = i[1],
            v = i[4],
            x = i[7],
            b = i[2],
            w = i[5],
            M = i[8];
          return (
            (n[0] = a * f + s * y + o * b),
            (n[3] = a * m + s * v + o * w),
            (n[6] = a * g + s * x + o * M),
            (n[1] = h * f + u * y + c * b),
            (n[4] = h * m + u * v + c * w),
            (n[7] = h * g + u * x + c * M),
            (n[2] = l * f + p * y + d * b),
            (n[5] = l * m + p * v + d * w),
            (n[8] = l * g + p * x + d * M),
            this
          );
        },
        multiplyScalar: function (t) {
          var e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        },
        determinant: function () {
          var t = this.elements,
            e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            h = t[7],
            u = t[8];
          return (
            e * a * u -
            e * s * h -
            r * n * u +
            r * s * o +
            i * n * h -
            i * a * o
          );
        },
        getInverse: function (t, e) {
          t &&
            t.isMatrix4 &&
            console.error(
              "RK.Matrix3: .getInverse() no longer takes a Matrix4 argument."
            );
          var r = t.elements,
            i = this.elements,
            n = r[0],
            a = r[1],
            s = r[2],
            o = r[3],
            h = r[4],
            u = r[5],
            c = r[6],
            l = r[7],
            p = r[8],
            d = p * h - u * l,
            f = u * c - p * o,
            m = l * o - h * c,
            g = n * d + a * f + s * m;
          if (0 === g) {
            var y =
              "RK.Matrix3: .getInverse() can't invert matrix, determinant is 0";
            if (!0 === e) throw new Error(y);
            return console.warn(y), this.identity();
          }
          var v = 1 / g;
          return (
            (i[0] = d * v),
            (i[1] = (s * l - p * a) * v),
            (i[2] = (u * a - s * h) * v),
            (i[3] = f * v),
            (i[4] = (p * n - s * c) * v),
            (i[5] = (s * o - u * n) * v),
            (i[6] = m * v),
            (i[7] = (a * c - l * n) * v),
            (i[8] = (h * n - a * o) * v),
            this
          );
        },
        transpose: function () {
          var t,
            e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        },
        getNormalMatrix: function (t) {
          return this.setFromMatrix4(t).getInverse(this).transpose();
        },
        transposeIntoArray: function (t) {
          var e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        },
        equals: function (t) {
          for (var e = this.elements, r = t.elements, i = 0; i < 9; i++)
            if (e[i] !== r[i]) return !1;
          return !0;
        },
        fromArray: function (t, e) {
          void 0 === e && (e = 0);
          for (var r = 0; r < 9; r++) this.elements[r] = t[r + e];
          return this;
        },
        toArray: function (t, e) {
          void 0 === t && (t = []), void 0 === e && (e = 0);
          var r = this.elements;
          return (
            (t[e] = r[0]),
            (t[e + 1] = r[1]),
            (t[e + 2] = r[2]),
            (t[e + 3] = r[3]),
            (t[e + 4] = r[4]),
            (t[e + 5] = r[5]),
            (t[e + 6] = r[6]),
            (t[e + 7] = r[7]),
            (t[e + 8] = r[8]),
            t
          );
        },
        makeRotationFromQuaternion: function (t) {
          var e = this.elements,
            r = t._x,
            i = t._y,
            n = t._z,
            a = t._w,
            s = r + r,
            o = i + i,
            h = n + n,
            u = r * s,
            c = r * o,
            l = r * h,
            p = i * o,
            d = i * h,
            f = n * h,
            m = a * s,
            g = a * o,
            y = a * h;
          return (
            (e[0] = 1 - (p + f)),
            (e[3] = c - y),
            (e[6] = l + g),
            (e[1] = c + y),
            (e[4] = 1 - (u + f)),
            (e[7] = d - m),
            (e[2] = l - g),
            (e[5] = d + m),
            (e[8] = 1 - (u + p)),
            this
          );
        },
      }),
      Object.assign(Mt.prototype, {
        set: function (t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        },
        setComponents: function (t, e, r, i) {
          return this.normal.set(t, e, r), (this.constant = i), this;
        },
        setFromNormalAndCoplanarPoint: function (t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        },
        setFromCoplanarPoints: (function () {
          var t = new st.a(),
            e = new st.a();
          return function (r, i, n) {
            var a = t.subVectors(n, i).cross(e.subVectors(r, i)).normalize();
            return this.setFromNormalAndCoplanarPoint(a, r), this;
          };
        })(),
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        },
        normalize: function () {
          var t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        },
        negate: function () {
          return (this.constant *= -1), this.normal.negate(), this;
        },
        distanceToPoint: function (t) {
          return this.normal.dot(t) + this.constant;
        },
        distanceToSphere: function (t) {
          return this.distanceToPoint(t.center) - t.radius;
        },
        projectPoint: function (t, e) {
          return (e || new st.a())
            .copy(this.normal)
            .multiplyScalar(-this.distanceToPoint(t))
            .add(t);
        },
        intersectLine: (function () {
          var t = new st.a();
          return function (e, r) {
            var i = r || new st.a(),
              n = e.delta(t),
              a = this.normal.dot(n);
            if (0 === a)
              return 0 === this.distanceToPoint(e.start)
                ? i.copy(e.start)
                : void 0;
            var s = -(e.start.dot(this.normal) + this.constant) / a;
            return s < 0 || s > 1
              ? void 0
              : i.copy(n).multiplyScalar(s).add(e.start);
          };
        })(),
        intersectsLine: function (t) {
          var e = this.distanceToPoint(t.start),
            r = this.distanceToPoint(t.end);
          return (e < 0 && r > 0) || (r < 0 && e > 0);
        },
        intersectsBox: function (t) {
          return t.intersectsPlane(this);
        },
        intersectsSphere: function (t) {
          return t.intersectsPlane(this);
        },
        coplanarPoint: function (t) {
          return (t || new st.a())
            .copy(this.normal)
            .multiplyScalar(-this.constant);
        },
        applyMatrix4: (function () {
          var t = new st.a(),
            e = new wt();
          return function (r, i) {
            var n = i || e.getNormalMatrix(r),
              a = this.coplanarPoint(t).applyMatrix4(r),
              s = this.normal.applyMatrix3(n).normalize();
            return (this.constant = -a.dot(s)), this;
          };
        })(),
        translate: function (t) {
          return (this.constant -= t.dot(this.normal)), this;
        },
        equals: function (t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        },
      }),
      Object.assign(Tt.prototype, {
        set: function (t, e, r, i, n, a) {
          var s = this.planes;
          return (
            s[0].copy(t),
            s[1].copy(e),
            s[2].copy(r),
            s[3].copy(i),
            s[4].copy(n),
            s[5].copy(a),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          for (var e = this.planes, r = 0; r < 6; r++) e[r].copy(t.planes[r]);
          return this;
        },
        setFromMatrix: function (t) {
          var e = this.planes,
            r = t.elements,
            i = r[0],
            n = r[1],
            a = r[2],
            s = r[3],
            o = r[4],
            h = r[5],
            u = r[6],
            c = r[7],
            l = r[8],
            p = r[9],
            d = r[10],
            f = r[11],
            m = r[12],
            g = r[13],
            y = r[14],
            v = r[15];
          return (
            e[0].setComponents(s - i, c - o, f - l, v - m).normalize(),
            e[1].setComponents(s + i, c + o, f + l, v + m).normalize(),
            e[2].setComponents(s + n, c + h, f + p, v + g).normalize(),
            e[3].setComponents(s - n, c - h, f - p, v - g).normalize(),
            e[4].setComponents(s - a, c - u, f - d, v - y).normalize(),
            e[5].setComponents(s + a, c + u, f + d, v + y).normalize(),
            this
          );
        },
        intersectsObject:
          ((ft = new bt()),
          function (t) {
            var e = t.geometry;
            return (
              null === e.boundingSphere && e.computeBoundingSphere(),
              ft.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
              this.intersectsSphere(ft)
            );
          }),
        intersectsSprite: (function () {
          var t = new bt();
          return function (e) {
            return (
              t.center.set(0, 0, 0),
              (t.radius = 0.7071067811865476),
              t.applyMatrix4(e.matrixWorld),
              this.intersectsSphere(t)
            );
          };
        })(),
        intersectsSphere: function (t) {
          for (
            var e = this.planes, r = t.center, i = -t.radius, n = 0;
            n < 6;
            n++
          ) {
            if (e[n].distanceToPoint(r) < i) return !1;
          }
          return !0;
        },
        intersectsBox:
          ((pt = new st.a()),
          (dt = new st.a()),
          function (t) {
            for (var e = this.planes, r = 0; r < 6; r++) {
              var i = e[r];
              (pt.x = i.normal.x > 0 ? t.min.x : t.max.x),
                (dt.x = i.normal.x > 0 ? t.max.x : t.min.x),
                (pt.y = i.normal.y > 0 ? t.min.y : t.max.y),
                (dt.y = i.normal.y > 0 ? t.max.y : t.min.y),
                (pt.z = i.normal.z > 0 ? t.min.z : t.max.z),
                (dt.z = i.normal.z > 0 ? t.max.z : t.min.z);
              var n = i.distanceToPoint(pt),
                a = i.distanceToPoint(dt);
              if (n < 0 && a < 0) return !1;
            }
            return !0;
          }),
        containsPoint: function (t) {
          for (var e = this.planes, r = 0; r < 6; r++)
            if (e[r].distanceToPoint(t) < 0) return !1;
          return !0;
        },
      }),
      (Et.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]),
      (Et.DefaultOrder = "XYZ"),
      Object.defineProperties(Et.prototype, {
        x: {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this.onChangeCallback();
          },
        },
        y: {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this.onChangeCallback();
          },
        },
        z: {
          get: function () {
            return this._z;
          },
          set: function (t) {
            (this._z = t), this.onChangeCallback();
          },
        },
        order: {
          get: function () {
            return this._order;
          },
          set: function (t) {
            (this._order = t), this.onChangeCallback();
          },
        },
      }),
      Object.assign(Et.prototype, {
        isEuler: !0,
        set: function (t, e, r, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = r),
            (this._order = i || this._order),
            this.onChangeCallback(),
            this
          );
        },
        clone: function () {
          return new this.constructor(this._x, this._y, this._z, this._order);
        },
        copy: function (t) {
          return (
            (this._x = t._x),
            (this._y = t._y),
            (this._z = t._z),
            (this._order = t._order),
            this.onChangeCallback(),
            this
          );
        },
        toSimple: function () {
          return { x: this._x, y: this._y, z: this._z };
        },
        setFromRotationMatrix: function (t, e, r) {
          var i = c.a.clamp,
            n = t.elements,
            a = n[0],
            s = n[4],
            o = n[8],
            h = n[1],
            u = n[5],
            l = n[9],
            p = n[2],
            d = n[6],
            f = n[10];
          return (
            "XYZ" === (e = e || this._order)
              ? ((this._y = Math.asin(i(o, -1, 1))),
                Math.abs(o) < 0.99999
                  ? ((this._x = Math.atan2(-l, f)),
                    (this._z = Math.atan2(-s, a)))
                  : ((this._x = Math.atan2(d, u)), (this._z = 0)))
              : "YXZ" === e
              ? ((this._x = Math.asin(-i(l, -1, 1))),
                Math.abs(l) < 0.99999
                  ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(h, u)))
                  : ((this._y = Math.atan2(-p, a)), (this._z = 0)))
              : "ZXY" === e
              ? ((this._x = Math.asin(i(d, -1, 1))),
                Math.abs(d) < 0.99999
                  ? ((this._y = Math.atan2(-p, f)),
                    (this._z = Math.atan2(-s, u)))
                  : ((this._y = 0), (this._z = Math.atan2(h, a))))
              : "ZYX" === e
              ? ((this._y = Math.asin(-i(p, -1, 1))),
                Math.abs(p) < 0.99999
                  ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(h, a)))
                  : ((this._x = 0), (this._z = Math.atan2(-s, u))))
              : "YZX" === e
              ? ((this._z = Math.asin(i(h, -1, 1))),
                Math.abs(h) < 0.99999
                  ? ((this._x = Math.atan2(-l, u)),
                    (this._y = Math.atan2(-p, a)))
                  : ((this._x = 0), (this._y = Math.atan2(o, f))))
              : "XZY" === e
              ? ((this._z = Math.asin(-i(s, -1, 1))),
                Math.abs(s) < 0.99999
                  ? ((this._x = Math.atan2(d, u)), (this._y = Math.atan2(o, a)))
                  : ((this._x = Math.atan2(-l, f)), (this._y = 0)))
              : console.warn(
                  "RK.Euler: .setFromRotationMatrix() given unsupported order: " +
                    e
                ),
            (this._order = e),
            !1 !== r && this.onChangeCallback(),
            this
          );
        },
        setFromQuaternion:
          ((gt = new y.a()),
          function (t, e, r) {
            return (
              gt.makeRotationFromQuaternion(t),
              this.setFromRotationMatrix(gt, e, r)
            );
          }),
        setFromVec3: function (t, e) {
          return this.set(t.x, t.y, t.z, e || this._order);
        },
        reorder:
          ((mt = new yt.a()),
          function (t) {
            return mt.setFromEuler(this), this.setFromQuaternion(mt, t);
          }),
        equals: function (t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._order === this._order
          );
        },
        fromArray: function (t) {
          return (
            (this._x = t[0]),
            (this._y = t[1]),
            (this._z = t[2]),
            void 0 !== t[3] && (this._order = t[3]),
            this.onChangeCallback(),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._order),
            t
          );
        },
        toVec3: function (t) {
          return t
            ? t.set(this._x, this._y, this._z)
            : new st.a(this._x, this._y, this._z);
        },
        onChange: function (t) {
          return (this.onChangeCallback = t), this;
        },
        onChangeCallback: function () {},
      }),
      Object.assign(At.prototype, {
        set: function (t) {
          this.mask = (1 << t) | 0;
        },
        enable: function (t) {
          this.mask |= (1 << t) | 0;
        },
        toggle: function (t) {
          this.mask ^= (1 << t) | 0;
        },
        disable: function (t) {
          this.mask &= ~((1 << t) | 0);
        },
        test: function (t) {
          return 0 != (this.mask & t.mask);
        },
      });
    var Rt,
      Pt,
      Ct,
      Ot,
      Ft,
      Lt = 0;
    function zt() {
      Object.defineProperty(this, "id", { value: Lt++ }),
        (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = zt.DefaultUp.clone());
      var t = new st.a(),
        e = new Et(),
        r = new yt.a(),
        i = new st.a(1, 1, 1);
      e.onChange(function () {
        r.setFromEuler(e, !1);
      }),
        r.onChange(function () {
          e.setFromQuaternion(r, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { enumerable: !0, value: t },
          rotation: { enumerable: !0, value: e },
          quaternion: { enumerable: !0, value: r },
          scale: { enumerable: !0, value: i },
          modelViewMatrix: { value: new y.a() },
          normalMatrix: { value: new wt() },
        }),
        (this.matrix = new y.a()),
        (this.matrixWorld = new y.a()),
        (this.matrixAutoUpdate = zt.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new At()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.userData = {});
    }
    function Bt() {
      zt.call(this),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new y.a()),
        (this.projectionMatrix = new y.a());
    }
    function Ut(t, e, r, i, n, a) {
      Bt.call(this),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = r),
        (this.bottom = i),
        (this.near = void 0 !== n ? n : 0.1),
        (this.far = void 0 !== a ? a : 2e3),
        this.updateProjectionMatrix();
    }
    (zt.DefaultUp = new st.a(0, 1, 0)),
      (zt.DefaultMatrixAutoUpdate = !0),
      Object.assign(zt.prototype, s.prototype, {
        isObject3D: !0,
        onBeforeRender: function () {},
        onAfterRender: function () {},
        applyMatrix: function (t) {
          this.matrix.multiplyMatrices(t, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        },
        applyQuaternion: function (t) {
          return this.quaternion.premultiply(t), this;
        },
        setRotationFromAxisAngle: function (t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        },
        setRotationFromEuler: function (t) {
          this.quaternion.setFromEuler(t, !0);
        },
        setRotationFromMatrix: function (t) {
          this.quaternion.setFromRotationMatrix(t);
        },
        setRotationFromQuaternion: function (t) {
          this.quaternion.copy(t);
        },
        rotateOnAxis:
          ((Ft = new yt.a()),
          function (t, e) {
            return (
              Ft.setFromAxisAngle(t, e), this.quaternion.multiply(Ft), this
            );
          }),
        rotateAroundWorldAxis: function (t, e) {
          var r = new y.a();
          r.makeRotationAxis(t.normalize(), e),
            r.multiply(this.matrix),
            (this.matrix = r),
            this.rotation.setFromRotationMatrix(this.matrix);
        },
        rotateX: (function () {
          var t = new st.a(1, 0, 0);
          return function (e) {
            return this.rotateOnAxis(t, e);
          };
        })(),
        rotateY: (function () {
          var t = new st.a(0, 1, 0);
          return function (e) {
            return this.rotateOnAxis(t, e);
          };
        })(),
        rotateZ: (function () {
          var t = new st.a(0, 0, 1);
          return function (e) {
            return this.rotateOnAxis(t, e);
          };
        })(),
        translateOnAxis: (function () {
          var t = new st.a();
          return function (e, r) {
            return (
              t.copy(e).applyQuaternion(this.quaternion),
              this.position.add(t.multiplyScalar(r)),
              this
            );
          };
        })(),
        translateX: (function () {
          var t = new st.a(1, 0, 0);
          return function (e) {
            return this.translateOnAxis(t, e);
          };
        })(),
        translateY: (function () {
          var t = new st.a(0, 1, 0);
          return function (e) {
            return this.translateOnAxis(t, e);
          };
        })(),
        translateZ: (function () {
          var t = new st.a(0, 0, 1);
          return function (e) {
            return this.translateOnAxis(t, e);
          };
        })(),
        localToWorld: function (t) {
          return t.applyMatrix4(this.matrixWorld);
        },
        worldToLocal:
          ((Ot = new y.a()),
          function (t) {
            return t.applyMatrix4(Ot.getInverse(this.matrixWorld));
          }),
        lookAt: (function () {
          var t = new y.a();
          return function (e) {
            this.isCamera
              ? t.lookAt(this.position, e, this.up)
              : t.lookAt(e, this.position, this.up),
              this.quaternion.setFromRotationMatrix(t);
          };
        })(),
        add: function (t) {
          if (arguments.length > 1) {
            for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
            return this;
          }
          return t === this
            ? (console.error(
                "RK.Object3D.add: object can't be added as a child of itself.",
                t
              ),
              this)
            : (t && t.isObject3D
                ? (null !== t.parent && t.parent.remove(t),
                  (t.parent = this),
                  t.dispatchEvent({ type: "added" }),
                  this.children.push(t))
                : console.error(
                    "RK.Object3D.add: object not an instance of RK.Object3D.",
                    t
                  ),
              this);
        },
        remove: function (t) {
          if (arguments.length > 1) {
            for (var e = 0; e < arguments.length; e++)
              this.remove(arguments[e]);
            return this;
          }
          var r = this.children.indexOf(t);
          return (
            -1 !== r &&
              ((t.parent = null),
              t.dispatchEvent({ type: "removed" }),
              this.children.splice(r, 1)),
            this
          );
        },
        getObjectById: function (t) {
          return this.getObjectByProperty("id", t);
        },
        getObjectByName: function (t) {
          return this.getObjectByProperty("name", t);
        },
        getObjectByProperty: function (t, e) {
          if (this[t] === e) return this;
          for (var r = 0, i = this.children.length; r < i; r++) {
            var n = this.children[r].getObjectByProperty(t, e);
            if (void 0 !== n) return n;
          }
        },
        getWorldPosition: function (t) {
          var e = t || new st.a();
          return (
            this.updateMatrixWorld(!0),
            e.setFromMatrixPosition(this.matrixWorld)
          );
        },
        getWorldQuaternion:
          ((Pt = new st.a()),
          (Ct = new st.a()),
          function (t) {
            var e = t || new yt.a();
            return (
              this.updateMatrixWorld(!0),
              this.matrixWorld.decompose(Pt, e, Ct),
              e
            );
          }),
        getWorldRotation:
          ((Rt = new yt.a()),
          function (t) {
            var e = t || new Et();
            return (
              this.getWorldQuaternion(Rt),
              e.setFromQuaternion(Rt, this.rotation.order, !1)
            );
          }),
        getWorldScale: (function () {
          var t = new st.a(),
            e = new yt.a();
          return function (r) {
            var i = r || new st.a();
            return (
              this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
            );
          };
        })(),
        getWorldDirection: (function () {
          var t = new yt.a();
          return function (e) {
            var r = e || new st.a();
            return (
              this.getWorldQuaternion(t), r.set(0, 0, 1).applyQuaternion(t)
            );
          };
        })(),
        raycast: function () {},
        traverse: function (t) {
          t(this);
          for (var e = this.children, r = 0, i = e.length; r < i; r++)
            e[r].traverse(t);
        },
        traverseVisible: function (t) {
          if (!1 !== this.visible) {
            t(this);
            for (var e = this.children, r = 0, i = e.length; r < i; r++)
              e[r].traverseVisible(t);
          }
        },
        traverseAncestors: function (t) {
          var e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t));
        },
        updateMatrix: function () {
          if (this.snapBones && this.snapBones.from && this.snapBones.to) {
            for (
              var t = this.snapBones.to,
                e = new RK.Matrix4(),
                r = new RK.Matrix4();
              t instanceof RK.Bone;

            )
              r.compose(t.position, t.quaternion, t.scale),
                e.multiplyMatrices(r, e),
                (t = t.parent);
            t = this.snapBones.from;
            for (var i = new RK.Matrix4(); t instanceof RK.Bone; )
              r.compose(t.position, t.quaternion, t.scale),
                i.multiplyMatrices(r, i),
                (t = t.parent);
            var n = new RK.Vec3().setFromMatrixPosition(e),
              a = new RK.Vec3().setFromMatrixPosition(i),
              s = new RK.Vec3().subVectors(n, a);
            this.position.copy(s);
          }
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        },
        updateMatrixWorld: function (t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              (this.matrixWorldNeedsUpdate = !1),
              (t = !0));
          for (var e = this.children, r = 0, i = e.length; r < i; r++)
            e[r].updateMatrixWorld(t);
        },
        toJSON: function (t) {
          var e = void 0 === t || "" === t,
            r = {};
          e &&
            ((t = { geometries: {}, materials: {}, textures: {}, images: {} }),
            (r.metadata = {
              version: 4.5,
              type: "Object",
              generator: "Object3D.toJSON",
            }));
          var i = {};
          function n(e, r) {
            return void 0 === e[r.uuid] && (e[r.uuid] = r.toJSON(t)), r.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            "{}" !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            (i.matrix = this.matrix.toArray()),
            void 0 !== this.geometry &&
              (i.geometry = n(t.geometries, this.geometry)),
            void 0 !== this.material)
          )
            if (Array.isArray(this.material)) {
              for (var a = [], s = 0, o = this.material.length; s < o; s++)
                a.push(n(t.materials, this.material[s]));
              i.material = a;
            } else i.material = n(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (s = 0; s < this.children.length; s++)
              i.children.push(this.children[s].toJSON(t).object);
          }
          if (e) {
            var h = p(t.geometries),
              u = p(t.materials),
              c = p(t.textures),
              l = p(t.images);
            h.length > 0 && (r.geometries = h),
              u.length > 0 && (r.materials = u),
              c.length > 0 && (r.textures = c),
              l.length > 0 && (r.images = l);
          }
          return (r.object = i), r;
          function p(t) {
            var e = [];
            for (var r in t) {
              var i = t[r];
              delete i.metadata, e.push(i);
            }
            return e;
          }
        },
        clone: function (t) {
          return new this.constructor().copy(this, t);
        },
        copy: function (t, e) {
          if (
            (void 0 === e && (e = !0),
            (this.name = t.name),
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
            (this.layers.mask = t.layers.mask),
            (this.visible = t.visible),
            (this.castShadow = t.castShadow),
            (this.receiveShadow = t.receiveShadow),
            (this.frustumCulled = t.frustumCulled),
            (this.renderOrder = t.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            !0 === e)
          )
            for (var r = 0; r < t.children.length; r++) {
              var i = t.children[r];
              this.add(i.clone());
            }
          return this;
        },
      }),
      (Bt.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: Bt,
        isCamera: !0,
        copy: function (t, e) {
          return (
            zt.prototype.copy.call(this, t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this
          );
        },
        getWorldDirection: (function () {
          var t = new yt.a();
          return function (e) {
            var r = e || new st.a();
            return (
              this.getWorldQuaternion(t), r.set(0, 0, -1).applyQuaternion(t)
            );
          };
        })(),
        updateMatrixWorld: function (t) {
          zt.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.getInverse(this.matrixWorld);
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
      })),
      (Ut.prototype = Object.assign(Object.create(Bt.prototype), {
        constructor: Ut,
        isOrthographicCamera: !0,
        copy: function (t, e) {
          return (
            Bt.prototype.copy.call(this, t, e),
            (this.left = t.left),
            (this.right = t.right),
            (this.top = t.top),
            (this.bottom = t.bottom),
            (this.near = t.near),
            (this.far = t.far),
            (this.zoom = t.zoom),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            this
          );
        },
        setViewOffset: function (t, e, r, i, n, a) {
          (this.view = {
            fullWidth: t,
            fullHeight: e,
            offsetX: r,
            offsetY: i,
            width: n,
            height: a,
          }),
            this.updateProjectionMatrix();
        },
        clearViewOffset: function () {
          (this.view = null), this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function () {
          var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            r = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2,
            n = r - t,
            a = r + t,
            s = i + e,
            o = i - e;
          if (null !== this.view) {
            var h = this.zoom / (this.view.width / this.view.fullWidth),
              u = this.zoom / (this.view.height / this.view.fullHeight),
              c = (this.right - this.left) / this.view.width,
              l = (this.top - this.bottom) / this.view.height;
            (a =
              (n += c * (this.view.offsetX / h)) + c * (this.view.width / h)),
              (o =
                (s -= l * (this.view.offsetY / u)) -
                l * (this.view.height / u));
          }
          this.projectionMatrix.makeOrthographic(
            n,
            a,
            s,
            o,
            this.near,
            this.far
          );
        },
        toJSON: function (t) {
          var e = zt.prototype.toJSON.call(this, t);
          return (
            (e.object.zoom = this.zoom),
            (e.object.left = this.left),
            (e.object.right = this.right),
            (e.object.top = this.top),
            (e.object.bottom = this.bottom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            e
          );
        },
      }));
    var Nt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
    function Dt(t, e, r) {
      return void 0 === e && void 0 === r ? this.set(t) : this.setRGB(t, e, r);
    }
    function It(t, e, r, i, n, a) {
      (this.a = t),
        (this.b = e),
        (this.c = r),
        (this.normal = i && i.isVec3 ? i : new st.a()),
        (this.vertexNormals = Array.isArray(i) ? i : []),
        (this.color = n && n.isColor ? n : new Dt()),
        (this.vertexColors = Array.isArray(n) ? n : []),
        (this.materialIndex = void 0 !== a ? a : 0);
    }
    Object.assign(Dt.prototype, {
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set: function (t) {
        return (
          t && t.isColor
            ? this.copy(t)
            : "number" == typeof t
            ? this.setHex(t)
            : "string" == typeof t && this.setStyle(t),
          this
        );
      },
      setScalar: function (t) {
        return (this.r = t), (this.g = t), (this.b = t), this;
      },
      setHex: function (t) {
        return (
          (t = Math.floor(t)),
          (this.r = ((t >> 16) & 255) / 255),
          (this.g = ((t >> 8) & 255) / 255),
          (this.b = (255 & t) / 255),
          this
        );
      },
      setRGB: function (t, e, r) {
        return (this.r = t), (this.g = e), (this.b = r), this;
      },
      setHSL: (function () {
        function t(t, e, r) {
          return (
            r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6
              ? t + 6 * (e - t) * r
              : r < 0.5
              ? e
              : r < 2 / 3
              ? t + 6 * (e - t) * (2 / 3 - r)
              : t
          );
        }
        return function (e, r, i) {
          if (
            ((e = c.a.euclideanModulo(e, 1)),
            (r = c.a.clamp(r, 0, 1)),
            (i = c.a.clamp(i, 0, 1)),
            0 === r)
          )
            this.r = this.g = this.b = i;
          else {
            var n = i <= 0.5 ? i * (1 + r) : i + r - i * r,
              a = 2 * i - n;
            (this.r = t(a, n, e + 1 / 3)),
              (this.g = t(a, n, e)),
              (this.b = t(a, n, e - 1 / 3));
          }
          return this;
        };
      })(),
      setStyle: function (t) {
        function e(e) {
          void 0 !== e &&
            parseFloat(e) < 1 &&
            console.warn(
              "RK.Color: Alpha component of " + t + " will be ignored."
            );
        }
        var r;
        if ((r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
          var i,
            n = r[1],
            a = r[2];
          switch (n) {
            case "rgb":
            case "rgba":
              if (
                (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  a
                ))
              )
                return (
                  (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
                  (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
                  (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
                  e(i[5]),
                  this
                );
              if (
                (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  a
                ))
              )
                return (
                  (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
                  (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
                  (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
                  e(i[5]),
                  this
                );
              break;
            case "hsl":
            case "hsla":
              if (
                (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  a
                ))
              ) {
                var s = parseFloat(i[1]) / 360,
                  o = parseInt(i[2], 10) / 100,
                  h = parseInt(i[3], 10) / 100;
                return e(i[5]), this.setHSL(s, o, h);
              }
          }
        } else if ((r = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
          var u,
            c = (u = r[1]).length;
          if (3 === c)
            return (
              (this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255),
              (this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255),
              (this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255),
              this
            );
          if (6 === c)
            return (
              (this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255),
              (this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255),
              (this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255),
              this
            );
        }
        t &&
          t.length > 0 &&
          (void 0 !== (u = Nt[t])
            ? this.setHex(u)
            : console.warn("RK.Color: Unknown color " + t));
        return this;
      },
      clone: function () {
        return new this.constructor(this.r, this.g, this.b);
      },
      copy: function (t) {
        return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
      },
      copyGammaToLinear: function (t, e) {
        return (
          void 0 === e && (e = 2),
          (this.r = Math.pow(t.r, e)),
          (this.g = Math.pow(t.g, e)),
          (this.b = Math.pow(t.b, e)),
          this
        );
      },
      copyLinearToGamma: function (t, e) {
        void 0 === e && (e = 2);
        var r = e > 0 ? 1 / e : 1;
        return (
          (this.r = Math.pow(t.r, r)),
          (this.g = Math.pow(t.g, r)),
          (this.b = Math.pow(t.b, r)),
          this
        );
      },
      convertGammaToLinear: function () {
        var t = this.r,
          e = this.g,
          r = this.b;
        return (this.r = t * t), (this.g = e * e), (this.b = r * r), this;
      },
      convertLinearToGamma: function () {
        return (
          (this.r = Math.sqrt(this.r)),
          (this.g = Math.sqrt(this.g)),
          (this.b = Math.sqrt(this.b)),
          this
        );
      },
      getHex: function () {
        return (
          ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
        );
      },
      getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      },
      getHSL: function (t) {
        var e,
          r,
          i = t || { h: 0, s: 0, l: 0 },
          n = this.r,
          a = this.g,
          s = this.b,
          o = Math.max(n, a, s),
          h = Math.min(n, a, s),
          u = (h + o) / 2;
        if (h === o) (e = 0), (r = 0);
        else {
          var c = o - h;
          switch (((r = u <= 0.5 ? c / (o + h) : c / (2 - o - h)), o)) {
            case n:
              e = (a - s) / c + (a < s ? 6 : 0);
              break;
            case a:
              e = (s - n) / c + 2;
              break;
            case s:
              e = (n - a) / c + 4;
          }
          e /= 6;
        }
        return (i.h = e), (i.s = r), (i.l = u), i;
      },
      getStyle: function () {
        return (
          "rgb(" +
          ((255 * this.r) | 0) +
          "," +
          ((255 * this.g) | 0) +
          "," +
          ((255 * this.b) | 0) +
          ")"
        );
      },
      offsetHSL: function (t, e, r) {
        var i = this.getHSL();
        return (
          (i.h += t), (i.s += e), (i.l += r), this.setHSL(i.h, i.s, i.l), this
        );
      },
      add: function (t) {
        return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
      },
      addColors: function (t, e) {
        return (
          (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
        );
      },
      addScalar: function (t) {
        return (this.r += t), (this.g += t), (this.b += t), this;
      },
      sub: function (t) {
        return (
          (this.r = Math.max(0, this.r - t.r)),
          (this.g = Math.max(0, this.g - t.g)),
          (this.b = Math.max(0, this.b - t.b)),
          this
        );
      },
      multiply: function (t) {
        return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
      },
      multiplyScalar: function (t) {
        return (this.r *= t), (this.g *= t), (this.b *= t), this;
      },
      lerp: function (t, e) {
        return (
          (this.r += (t.r - this.r) * e),
          (this.g += (t.g - this.g) * e),
          (this.b += (t.b - this.b) * e),
          this
        );
      },
      equals: function (t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      },
      fromArray: function (t, e) {
        return (
          void 0 === e && (e = 0),
          (this.r = t[e]),
          (this.g = t[e + 1]),
          (this.b = t[e + 2]),
          this
        );
      },
      toArray: function (t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this.r),
          (t[e + 1] = this.g),
          (t[e + 2] = this.b),
          t
        );
      },
      toJSON: function () {
        return this.getHex();
      },
    }),
      Object.assign(It.prototype, {
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          (this.a = t.a),
            (this.b = t.b),
            (this.c = t.c),
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            (this.materialIndex = t.materialIndex);
          for (var e = 0, r = t.vertexNormals.length; e < r; e++)
            this.vertexNormals[e] = t.vertexNormals[e].clone();
          for (e = 0, r = t.vertexColors.length; e < r; e++)
            this.vertexColors[e] = t.vertexColors[e].clone();
          return this;
        },
      });
    var Gt,
      kt,
      Wt = 0;
    function Vt() {
      return Wt++;
    }
    function jt() {
      Object.defineProperty(this, "id", { value: Vt() }),
        (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.type = "Geometry"),
        (this.vertices = []),
        (this.colors = []),
        (this.faces = []),
        (this.faceVertexUvs = [[]]),
        (this.morphTargets = []),
        (this.morphNormals = []),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.lineDistances = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.elementsNeedUpdate = !1),
        (this.verticesNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.lineDistancesNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }
    function Xt(t, e, r) {
      if (Array.isArray(t))
        throw new TypeError(
          "RK.BufferAttribute: array should be a Typed Array."
        );
      (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = !0 === r),
        (this.dynamic = !1),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.onUploadCallback = function () {}),
        (this.version = 0);
    }
    function qt(t, e) {
      Xt.call(this, new Int8Array(t), e);
    }
    function Kt(t, e) {
      Xt.call(this, new Uint8Array(t), e);
    }
    function Ht(t, e) {
      Xt.call(this, new Uint8ClampedArray(t), e);
    }
    function Yt(t, e) {
      Xt.call(this, new Int16Array(t), e);
    }
    function Zt(t, e) {
      Xt.call(this, new Uint16Array(t), e);
    }
    function Jt(t, e) {
      Xt.call(this, new Int32Array(t), e);
    }
    function Qt(t, e) {
      Xt.call(this, new Uint32Array(t), e);
    }
    function $t(t, e) {
      Xt.call(this, new Float32Array(t), e);
    }
    function te(t, e) {
      Xt.call(this, new Float64Array(t), e);
    }
    function ee() {
      (this.indices = []),
        (this.vertices = []),
        (this.normals = []),
        (this.colors = []),
        (this.uvs = []),
        (this.uvs2 = []),
        (this.groups = []),
        (this.morphTargets = {}),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.verticesNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }
    function re(t) {
      if (0 === t.length) return -1 / 0;
      for (var e = t[0], r = 1, i = t.length; r < i; ++r)
        t[r] > e && (e = t[r]);
      return e;
    }
    function ie() {
      Object.defineProperty(this, "id", { value: Vt() }),
        (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 });
    }
    function ne(t, e, r, i, n, a) {
      jt.call(this),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: r,
          widthSegments: i,
          heightSegments: n,
          depthSegments: a,
        }),
        this.fromBufferGeometry(new ae(t, e, r, i, n, a)),
        this.mergeVertices();
    }
    function ae(t, e, r, i, n, a) {
      ie.call(this),
        (this.type = "BoxBufferGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: r,
          widthSegments: i,
          heightSegments: n,
          depthSegments: a,
        });
      var s = this;
      (i = Math.floor(i) || 1),
        (n = Math.floor(n) || 1),
        (a = Math.floor(a) || 1);
      var o = [],
        h = [],
        u = [],
        c = [],
        l = 0,
        p = 0;
      function d(t, e, r, i, n, a, d, f, m, g, y) {
        var v,
          x,
          b = a / m,
          w = d / g,
          M = a / 2,
          T = d / 2,
          S = f / 2,
          _ = m + 1,
          E = g + 1,
          A = 0,
          R = 0,
          P = new st.a();
        for (x = 0; x < E; x++) {
          var C = x * w - T;
          for (v = 0; v < _; v++) {
            var O = v * b - M;
            (P[t] = O * i),
              (P[e] = C * n),
              (P[r] = S),
              h.push(P.x, P.y, P.z),
              (P[t] = 0),
              (P[e] = 0),
              (P[r] = f > 0 ? 1 : -1),
              u.push(P.x, P.y, P.z),
              c.push(v / m),
              c.push(1 - x / g),
              (A += 1);
          }
        }
        for (x = 0; x < g; x++)
          for (v = 0; v < m; v++) {
            var F = l + v + _ * x,
              L = l + v + _ * (x + 1),
              z = l + (v + 1) + _ * (x + 1),
              B = l + (v + 1) + _ * x;
            o.push(F, L, B), o.push(L, z, B), (R += 6);
          }
        s.addGroup(p, R, y), (p += R), (l += A);
      }
      d("z", "y", "x", -1, -1, r, e, t, a, n, 0),
        d("z", "y", "x", 1, -1, r, e, -t, a, n, 1),
        d("x", "z", "y", 1, 1, t, r, e, i, a, 2),
        d("x", "z", "y", 1, -1, t, r, -e, i, a, 3),
        d("x", "y", "z", 1, -1, t, e, r, i, n, 4),
        d("x", "y", "z", -1, -1, t, e, -r, i, n, 5),
        this.setIndex(o),
        this.addAttribute("position", new $t(h, 3)),
        this.addAttribute("normal", new $t(u, 3)),
        this.addAttribute("uv", new $t(c, 2));
    }
    function se(t, e, r, i) {
      jt.call(this),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: r,
          heightSegments: i,
        }),
        this.fromBufferGeometry(new oe(t, e, r, i)),
        this.mergeVertices();
    }
    function oe(t, e, r, i) {
      ie.call(this),
        (this.type = "PlaneBufferGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: r,
          heightSegments: i,
        });
      var n,
        a,
        s = t / 2,
        o = e / 2,
        h = Math.floor(r) || 1,
        u = Math.floor(i) || 1,
        c = h + 1,
        l = u + 1,
        p = t / h,
        d = e / u,
        f = [],
        m = [],
        g = [],
        y = [];
      for (a = 0; a < l; a++) {
        var v = a * d - o;
        for (n = 0; n < c; n++) {
          var x = n * p - s;
          m.push(x, -v, 0), g.push(0, 0, 1), y.push(n / h), y.push(1 - a / u);
        }
      }
      for (a = 0; a < u; a++)
        for (n = 0; n < h; n++) {
          var b = n + c * a,
            w = n + c * (a + 1),
            M = n + 1 + c * (a + 1),
            T = n + 1 + c * a;
          f.push(b, w, T), f.push(w, M, T);
        }
      this.setIndex(f),
        this.addAttribute("position", new $t(m, 3)),
        this.addAttribute("normal", new $t(g, 3)),
        this.addAttribute("uv", new $t(y, 2));
    }
    Object.assign(jt.prototype, s.prototype, {
      isGeometry: !0,
      applyMatrix: function (t) {
        for (
          var e = new wt().getNormalMatrix(t), r = 0, i = this.vertices.length;
          r < i;
          r++
        ) {
          this.vertices[r].applyMatrix4(t);
        }
        for (r = 0, i = this.faces.length; r < i; r++) {
          var n = this.faces[r];
          n.normal.applyMatrix3(e).normalize();
          for (var a = 0, s = n.vertexNormals.length; a < s; a++)
            n.vertexNormals[a].applyMatrix3(e).normalize();
        }
        return (
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          (this.verticesNeedUpdate = !0),
          (this.normalsNeedUpdate = !0),
          this
        );
      },
      rotateX: (function () {
        var t = new y.a();
        return function (e) {
          return t.makeRotationX(e), this.applyMatrix(t), this;
        };
      })(),
      rotateY: (function () {
        var t = new y.a();
        return function (e) {
          return t.makeRotationY(e), this.applyMatrix(t), this;
        };
      })(),
      rotateZ: (function () {
        var t = new y.a();
        return function (e) {
          return t.makeRotationZ(e), this.applyMatrix(t), this;
        };
      })(),
      translate: (function () {
        var t = new y.a();
        return function (e, r, i) {
          return t.makeTranslation(e, r, i), this.applyMatrix(t), this;
        };
      })(),
      scale: (function () {
        var t = new y.a();
        return function (e, r, i) {
          return t.makeScale(e, r, i), this.applyMatrix(t), this;
        };
      })(),
      lookAt:
        ((Gt = new zt()),
        function (t) {
          Gt.lookAt(t), Gt.updateMatrix(), this.applyMatrix(Gt.matrix);
        }),
      fromBufferGeometry: function (t) {
        var e = this,
          r = null !== t.index ? t.index.array : void 0,
          i = t.attributes,
          n = i.position.array,
          a = void 0 !== i.normal ? i.normal.array : void 0,
          s = void 0 !== i.color ? i.color.array : void 0,
          o = void 0 !== i.uv ? i.uv.array : void 0,
          h = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== h && (this.faceVertexUvs[1] = []);
        for (
          var u = [], c = [], p = [], d = 0, f = 0;
          d < n.length;
          d += 3, f += 2
        )
          e.vertices.push(new st.a(n[d], n[d + 1], n[d + 2])),
            void 0 !== a && u.push(new st.a(a[d], a[d + 1], a[d + 2])),
            void 0 !== s && e.colors.push(new Dt(s[d], s[d + 1], s[d + 2])),
            void 0 !== o && c.push(new l.a(o[f], o[f + 1])),
            void 0 !== h && p.push(new l.a(h[f], h[f + 1]));
        function m(t, r, i, n) {
          var l = new It(
            t,
            r,
            i,
            void 0 !== a ? [u[t].clone(), u[r].clone(), u[i].clone()] : [],
            void 0 !== s
              ? [e.colors[t].clone(), e.colors[r].clone(), e.colors[i].clone()]
              : [],
            n
          );
          e.faces.push(l),
            void 0 !== o &&
              e.faceVertexUvs[0].push([
                c[t].clone(),
                c[r].clone(),
                c[i].clone(),
              ]),
            void 0 !== h &&
              e.faceVertexUvs[1].push([
                p[t].clone(),
                p[r].clone(),
                p[i].clone(),
              ]);
        }
        var g = t.groups;
        if (g.length > 0)
          for (d = 0; d < g.length; d++)
            for (
              var y = g[d], v = y.start, x = ((f = v), v + y.count);
              f < x;
              f += 3
            )
              void 0 !== r
                ? m(r[f], r[f + 1], r[f + 2], y.materialIndex)
                : m(f, f + 1, f + 2, y.materialIndex);
        else if (void 0 !== r)
          for (d = 0; d < r.length; d += 3) m(r[d], r[d + 1], r[d + 2]);
        else for (d = 0; d < n.length / 3; d += 3) m(d, d + 1, d + 2);
        return (
          this.computeFaceNormals(),
          null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
          null !== t.boundingSphere &&
            (this.boundingSphere = t.boundingSphere.clone()),
          this
        );
      },
      center: function () {
        this.computeBoundingBox();
        var t = this.boundingBox.getCenter().negate();
        return this.translate(t.x, t.y, t.z), t;
      },
      normalize: function () {
        this.computeBoundingSphere();
        var t = this.boundingSphere.center,
          e = this.boundingSphere.radius,
          r = 0 === e ? 1 : 1 / e,
          i = new y.a();
        return (
          i.set(
            r,
            0,
            0,
            -r * t.x,
            0,
            r,
            0,
            -r * t.y,
            0,
            0,
            r,
            -r * t.z,
            0,
            0,
            0,
            1
          ),
          this.applyMatrix(i),
          this
        );
      },
      computeFaceNormals: function () {
        for (
          var t = new st.a(), e = new st.a(), r = 0, i = this.faces.length;
          r < i;
          r++
        ) {
          var n = this.faces[r],
            a = this.vertices[n.a],
            s = this.vertices[n.b],
            o = this.vertices[n.c];
          t.subVectors(o, s),
            e.subVectors(a, s),
            t.cross(e),
            t.normalize(),
            n.normal.copy(t);
        }
      },
      computeVertexNormals: function (t) {
        var e, r, i, n, a, s;
        for (
          void 0 === t && (t = !0),
            s = new Array(this.vertices.length),
            e = 0,
            r = this.vertices.length;
          e < r;
          e++
        )
          s[e] = new st.a();
        if (t) {
          var o,
            h,
            u,
            c = new st.a(),
            l = new st.a();
          for (i = 0, n = this.faces.length; i < n; i++)
            (a = this.faces[i]),
              (o = this.vertices[a.a]),
              (h = this.vertices[a.b]),
              (u = this.vertices[a.c]),
              c.subVectors(u, h),
              l.subVectors(o, h),
              c.cross(l),
              s[a.a].add(c),
              s[a.b].add(c),
              s[a.c].add(c);
        } else
          for (
            this.computeFaceNormals(), i = 0, n = this.faces.length;
            i < n;
            i++
          )
            s[(a = this.faces[i]).a].add(a.normal),
              s[a.b].add(a.normal),
              s[a.c].add(a.normal);
        for (e = 0, r = this.vertices.length; e < r; e++) s[e].normalize();
        for (i = 0, n = this.faces.length; i < n; i++) {
          var p = (a = this.faces[i]).vertexNormals;
          3 === p.length
            ? (p[0].copy(s[a.a]), p[1].copy(s[a.b]), p[2].copy(s[a.c]))
            : ((p[0] = s[a.a].clone()),
              (p[1] = s[a.b].clone()),
              (p[2] = s[a.c].clone()));
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0);
      },
      computeFlatVertexNormals: function () {
        var t, e, r;
        for (
          this.computeFaceNormals(), t = 0, e = this.faces.length;
          t < e;
          t++
        ) {
          var i = (r = this.faces[t]).vertexNormals;
          3 === i.length
            ? (i[0].copy(r.normal), i[1].copy(r.normal), i[2].copy(r.normal))
            : ((i[0] = r.normal.clone()),
              (i[1] = r.normal.clone()),
              (i[2] = r.normal.clone()));
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0);
      },
      computeMorphNormals: function () {
        var t, e, r, i, n;
        for (r = 0, i = this.faces.length; r < i; r++)
          for (
            (n = this.faces[r]).__originalFaceNormal
              ? n.__originalFaceNormal.copy(n.normal)
              : (n.__originalFaceNormal = n.normal.clone()),
              n.__originalVertexNormals || (n.__originalVertexNormals = []),
              t = 0,
              e = n.vertexNormals.length;
            t < e;
            t++
          )
            n.__originalVertexNormals[t]
              ? n.__originalVertexNormals[t].copy(n.vertexNormals[t])
              : (n.__originalVertexNormals[t] = n.vertexNormals[t].clone());
        var a = new jt();
        for (
          a.faces = this.faces, t = 0, e = this.morphTargets.length;
          t < e;
          t++
        ) {
          if (!this.morphNormals[t]) {
            (this.morphNormals[t] = {}),
              (this.morphNormals[t].faceNormals = []),
              (this.morphNormals[t].vertexNormals = []);
            var s = this.morphNormals[t].faceNormals,
              o = this.morphNormals[t].vertexNormals;
            for (r = 0, i = this.faces.length; r < i; r++)
              (h = new st.a()),
                (u = { a: new st.a(), b: new st.a(), c: new st.a() }),
                s.push(h),
                o.push(u);
          }
          var h,
            u,
            c = this.morphNormals[t];
          for (
            a.vertices = this.morphTargets[t].vertices,
              a.computeFaceNormals(),
              a.computeVertexNormals(),
              r = 0,
              i = this.faces.length;
            r < i;
            r++
          )
            (n = this.faces[r]),
              (h = c.faceNormals[r]),
              (u = c.vertexNormals[r]),
              h.copy(n.normal),
              u.a.copy(n.vertexNormals[0]),
              u.b.copy(n.vertexNormals[1]),
              u.c.copy(n.vertexNormals[2]);
        }
        for (r = 0, i = this.faces.length; r < i; r++)
          ((n = this.faces[r]).normal = n.__originalFaceNormal),
            (n.vertexNormals = n.__originalVertexNormals);
      },
      computeLineDistances: function () {
        for (var t = 0, e = this.vertices, r = 0, i = e.length; r < i; r++)
          r > 0 && (t += e[r].distanceTo(e[r - 1])),
            (this.lineDistances[r] = t);
      },
      computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new xt()),
          this.boundingBox.setFromPoints(this.vertices);
      },
      computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new bt()),
          this.boundingSphere.setFromPoints(this.vertices);
      },
      merge: function (t, e, r) {
        if (t && t.isGeometry) {
          var i,
            n = this.vertices.length,
            a = this.vertices,
            s = t.vertices,
            o = this.faces,
            h = t.faces,
            u = this.faceVertexUvs[0],
            c = t.faceVertexUvs[0],
            l = this.colors,
            p = t.colors;
          void 0 === r && (r = 0),
            void 0 !== e && (i = new wt().getNormalMatrix(e));
          for (var d = 0, f = s.length; d < f; d++) {
            var m = s[d].clone();
            void 0 !== e && m.applyMatrix4(e), a.push(m);
          }
          for (d = 0, f = p.length; d < f; d++) l.push(p[d].clone());
          for (d = 0, f = h.length; d < f; d++) {
            var g,
              y,
              v,
              x = h[d],
              b = x.vertexNormals,
              w = x.vertexColors;
            (g = new It(x.a + n, x.b + n, x.c + n)).normal.copy(x.normal),
              void 0 !== i && g.normal.applyMatrix3(i).normalize();
            for (var M = 0, T = b.length; M < T; M++)
              (y = b[M].clone()),
                void 0 !== i && y.applyMatrix3(i).normalize(),
                g.vertexNormals.push(y);
            g.color.copy(x.color);
            for (M = 0, T = w.length; M < T; M++)
              (v = w[M]), g.vertexColors.push(v.clone());
            (g.materialIndex = x.materialIndex + r), o.push(g);
          }
          for (d = 0, f = c.length; d < f; d++) {
            var S = c[d],
              _ = [];
            if (void 0 !== S) {
              for (M = 0, T = S.length; M < T; M++) _.push(S[M].clone());
              u.push(_);
            }
          }
        } else
          console.error(
            "RK.Geometry.merge(): geometry not an instance of RK.Geometry.",
            t
          );
      },
      mergeMesh: function (t) {
        t && t.isMesh
          ? (t.matrixAutoUpdate && t.updateMatrix(),
            this.merge(t.geometry, t.matrix))
          : console.error(
              "RK.Geometry.mergeMesh(): mesh not an instance of RK.Mesh.",
              t
            );
      },
      mergeVertices: function () {
        var t,
          e,
          r,
          i,
          n,
          a,
          s,
          o,
          h = {},
          u = [],
          c = [],
          l = Math.pow(10, 4);
        for (r = 0, i = this.vertices.length; r < i; r++)
          (t = this.vertices[r]),
            void 0 ===
            h[
              (e =
                Math.round(t.x * l) +
                "_" +
                Math.round(t.y * l) +
                "_" +
                Math.round(t.z * l))
            ]
              ? ((h[e] = r), u.push(this.vertices[r]), (c[r] = u.length - 1))
              : (c[r] = c[h[e]]);
        var p = [];
        for (r = 0, i = this.faces.length; r < i; r++) {
          ((n = this.faces[r]).a = c[n.a]),
            (n.b = c[n.b]),
            (n.c = c[n.c]),
            (a = [n.a, n.b, n.c]);
          for (var d = 0; d < 3; d++)
            if (a[d] === a[(d + 1) % 3]) {
              p.push(r);
              break;
            }
        }
        for (r = p.length - 1; r >= 0; r--) {
          var f = p[r];
          for (
            this.faces.splice(f, 1), s = 0, o = this.faceVertexUvs.length;
            s < o;
            s++
          )
            this.faceVertexUvs[s].splice(f, 1);
        }
        var m = this.vertices.length - u.length;
        return (this.vertices = u), m;
      },
      sortFacesByMaterialIndex: function () {
        for (var t = this.faces, e = t.length, r = 0; r < e; r++) t[r]._id = r;
        t.sort(function (t, e) {
          return t.materialIndex - e.materialIndex;
        });
        var i,
          n,
          a = this.faceVertexUvs[0],
          s = this.faceVertexUvs[1];
        a && a.length === e && (i = []), s && s.length === e && (n = []);
        for (r = 0; r < e; r++) {
          var o = t[r]._id;
          i && i.push(a[o]), n && n.push(s[o]);
        }
        i && (this.faceVertexUvs[0] = i), n && (this.faceVertexUvs[1] = n);
      },
      toJSON: function () {
        var t = {
          metadata: {
            version: 4.5,
            type: "Geometry",
            generator: "Geometry.toJSON",
          },
        };
        if (
          ((t.uuid = this.uuid),
          (t.type = this.type),
          "" !== this.name && (t.name = this.name),
          void 0 !== this.parameters)
        ) {
          var e = this.parameters;
          for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
          return t;
        }
        for (var i = [], n = 0; n < this.vertices.length; n++) {
          var a = this.vertices[n];
          i.push(a.x, a.y, a.z);
        }
        var s = [],
          o = [],
          h = {},
          u = [],
          c = {},
          l = [],
          p = {};
        for (n = 0; n < this.faces.length; n++) {
          var d = this.faces[n],
            f = void 0 !== this.faceVertexUvs[0][n],
            m = d.normal.length() > 0,
            g = d.vertexNormals.length > 0,
            y = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
            v = d.vertexColors.length > 0,
            x = 0;
          if (
            ((x = T(x, 0, 0)),
            (x = T(x, 1, !0)),
            (x = T(x, 2, !1)),
            (x = T(x, 3, f)),
            (x = T(x, 4, m)),
            (x = T(x, 5, g)),
            (x = T(x, 6, y)),
            (x = T(x, 7, v)),
            s.push(x),
            s.push(d.a, d.b, d.c),
            s.push(d.materialIndex),
            f)
          ) {
            var b = this.faceVertexUvs[0][n];
            s.push(E(b[0]), E(b[1]), E(b[2]));
          }
          if ((m && s.push(S(d.normal)), g)) {
            var w = d.vertexNormals;
            s.push(S(w[0]), S(w[1]), S(w[2]));
          }
          if ((y && s.push(_(d.color)), v)) {
            var M = d.vertexColors;
            s.push(_(M[0]), _(M[1]), _(M[2]));
          }
        }
        function T(t, e, r) {
          return r ? t | (1 << e) : t & ~(1 << e);
        }
        function S(t) {
          var e = t.x.toString() + t.y.toString() + t.z.toString();
          return (
            void 0 !== h[e] || ((h[e] = o.length / 3), o.push(t.x, t.y, t.z)),
            h[e]
          );
        }
        function _(t) {
          var e = t.r.toString() + t.g.toString() + t.b.toString();
          return (
            void 0 !== c[e] || ((c[e] = u.length), u.push(t.getHex())), c[e]
          );
        }
        function E(t) {
          var e = t.x.toString() + t.y.toString();
          return (
            void 0 !== p[e] || ((p[e] = l.length / 2), l.push(t.x, t.y)), p[e]
          );
        }
        return (
          (t.data = {}),
          (t.data.vertices = i),
          (t.data.normals = o),
          u.length > 0 && (t.data.colors = u),
          l.length > 0 && (t.data.uvs = [l]),
          (t.data.faces = s),
          t
        );
      },
      clone: function () {
        return new jt().copy(this);
      },
      copy: function (t) {
        var e, r, i, n, a, s;
        (this.vertices = []),
          (this.colors = []),
          (this.faces = []),
          (this.faceVertexUvs = [[]]),
          (this.morphTargets = []),
          (this.morphNormals = []),
          (this.skinWeights = []),
          (this.skinIndices = []),
          (this.lineDistances = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.name = t.name);
        var o = t.vertices;
        for (e = 0, r = o.length; e < r; e++) this.vertices.push(o[e].clone());
        var h = t.colors;
        for (e = 0, r = h.length; e < r; e++) this.colors.push(h[e].clone());
        var u = t.faces;
        for (e = 0, r = u.length; e < r; e++) this.faces.push(u[e].clone());
        for (e = 0, r = t.faceVertexUvs.length; e < r; e++) {
          var c = t.faceVertexUvs[e];
          for (
            void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []),
              i = 0,
              n = c.length;
            i < n;
            i++
          ) {
            var l = c[i],
              p = [];
            for (a = 0, s = l.length; a < s; a++) {
              var d = l[a];
              p.push(d.clone());
            }
            this.faceVertexUvs[e].push(p);
          }
        }
        var f = t.morphTargets;
        for (e = 0, r = f.length; e < r; e++) {
          var m = {};
          if (((m.name = f[e].name), void 0 !== f[e].vertices))
            for (m.vertices = [], i = 0, n = f[e].vertices.length; i < n; i++)
              m.vertices.push(f[e].vertices[i].clone());
          if (void 0 !== f[e].normals)
            for (m.normals = [], i = 0, n = f[e].normals.length; i < n; i++)
              m.normals.push(f[e].normals[i].clone());
          this.morphTargets.push(m);
        }
        var g = t.morphNormals;
        for (e = 0, r = g.length; e < r; e++) {
          var y = {};
          if (void 0 !== g[e].vertexNormals)
            for (
              y.vertexNormals = [], i = 0, n = g[e].vertexNormals.length;
              i < n;
              i++
            ) {
              var v = g[e].vertexNormals[i],
                x = {};
              (x.a = v.a.clone()),
                (x.b = v.b.clone()),
                (x.c = v.c.clone()),
                y.vertexNormals.push(x);
            }
          if (void 0 !== g[e].faceNormals)
            for (
              y.faceNormals = [], i = 0, n = g[e].faceNormals.length;
              i < n;
              i++
            )
              y.faceNormals.push(g[e].faceNormals[i].clone());
          this.morphNormals.push(y);
        }
        var b = t.skinWeights;
        for (e = 0, r = b.length; e < r; e++)
          this.skinWeights.push(b[e].clone());
        var w = t.skinIndices;
        for (e = 0, r = w.length; e < r; e++)
          this.skinIndices.push(w[e].clone());
        var M = t.lineDistances;
        for (e = 0, r = M.length; e < r; e++) this.lineDistances.push(M[e]);
        var T = t.boundingBox;
        null !== T && (this.boundingBox = T.clone());
        var S = t.boundingSphere;
        return (
          null !== S && (this.boundingSphere = S.clone()),
          (this.elementsNeedUpdate = t.elementsNeedUpdate),
          (this.verticesNeedUpdate = t.verticesNeedUpdate),
          (this.uvsNeedUpdate = t.uvsNeedUpdate),
          (this.normalsNeedUpdate = t.normalsNeedUpdate),
          (this.colorsNeedUpdate = t.colorsNeedUpdate),
          (this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate),
          (this.groupsNeedUpdate = t.groupsNeedUpdate),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    }),
      Object.defineProperty(Xt.prototype, "needsUpdate", {
        set: function (t) {
          !0 === t && this.version++;
        },
      }),
      Object.assign(Xt.prototype, {
        isBufferAttribute: !0,
        setArray: function (t) {
          if (Array.isArray(t))
            throw new TypeError(
              "RK.BufferAttribute: array should be a Typed Array."
            );
          (this.count = void 0 !== t ? t.length / this.itemSize : 0),
            (this.array = t);
        },
        setDynamic: function (t) {
          return (this.dynamic = t), this;
        },
        copy: function (t) {
          return (
            (this.array = new t.array.constructor(t.array)),
            (this.itemSize = t.itemSize),
            (this.count = t.count),
            (this.normalized = t.normalized),
            (this.dynamic = t.dynamic),
            this
          );
        },
        copyAt: function (t, e, r) {
          (t *= this.itemSize), (r *= e.itemSize);
          for (var i = 0, n = this.itemSize; i < n; i++)
            this.array[t + i] = e.array[r + i];
          return this;
        },
        copyArray: function (t) {
          return this.array.set(t), this;
        },
        copyColorsArray: function (t) {
          for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
            var a = t[i];
            void 0 === a &&
              (console.warn(
                "RK.BufferAttribute.copyColorsArray(): color is undefined",
                i
              ),
              (a = new Dt())),
              (e[r++] = a.r),
              (e[r++] = a.g),
              (e[r++] = a.b);
          }
          return this;
        },
        copyIndicesArray: function (t) {
          for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
            var a = t[i];
            (e[r++] = a.a), (e[r++] = a.b), (e[r++] = a.c);
          }
          return this;
        },
        copyVec2sArray: function (t) {
          for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
            var a = t[i];
            void 0 === a &&
              (console.warn(
                "RK.BufferAttribute.copyVec2sArray(): vector is undefined",
                i
              ),
              (a = new l.a())),
              (e[r++] = a.x),
              (e[r++] = a.y);
          }
          return this;
        },
        copyVec3sArray: function (t) {
          for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
            var a = t[i];
            void 0 === a &&
              (console.warn(
                "RK.BufferAttribute.copyVec3sArray(): vector is undefined",
                i
              ),
              (a = new st.a())),
              (e[r++] = a.x),
              (e[r++] = a.y),
              (e[r++] = a.z);
          }
          return this;
        },
        copyVec4sArray: function (t) {
          for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
            var a = t[i];
            void 0 === a &&
              (console.warn(
                "RK.BufferAttribute.copyVec4sArray(): vector is undefined",
                i
              ),
              (a = new f())),
              (e[r++] = a.x),
              (e[r++] = a.y),
              (e[r++] = a.z),
              (e[r++] = a.w);
          }
          return this;
        },
        set: function (t, e) {
          return void 0 === e && (e = 0), this.array.set(t, e), this;
        },
        getX: function (t) {
          return this.array[t * this.itemSize];
        },
        setX: function (t, e) {
          return (this.array[t * this.itemSize] = e), this;
        },
        getY: function (t) {
          return this.array[t * this.itemSize + 1];
        },
        setY: function (t, e) {
          return (this.array[t * this.itemSize + 1] = e), this;
        },
        getZ: function (t) {
          return this.array[t * this.itemSize + 2];
        },
        setZ: function (t, e) {
          return (this.array[t * this.itemSize + 2] = e), this;
        },
        getW: function (t) {
          return this.array[t * this.itemSize + 3];
        },
        setW: function (t, e) {
          return (this.array[t * this.itemSize + 3] = e), this;
        },
        setXY: function (t, e, r) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = r),
            this
          );
        },
        setXYZ: function (t, e, r, i) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = r),
            (this.array[t + 2] = i),
            this
          );
        },
        setXYZW: function (t, e, r, i, n) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = r),
            (this.array[t + 2] = i),
            (this.array[t + 3] = n),
            this
          );
        },
        onUpload: function (t) {
          return (this.onUploadCallback = t), this;
        },
        clone: function () {
          return new this.constructor(this.array, this.itemSize).copy(this);
        },
      }),
      (qt.prototype = Object.create(Xt.prototype)),
      (qt.prototype.constructor = qt),
      (Kt.prototype = Object.create(Xt.prototype)),
      (Kt.prototype.constructor = Kt),
      (Ht.prototype = Object.create(Xt.prototype)),
      (Ht.prototype.constructor = Ht),
      (Yt.prototype = Object.create(Xt.prototype)),
      (Yt.prototype.constructor = Yt),
      (Zt.prototype = Object.create(Xt.prototype)),
      (Zt.prototype.constructor = Zt),
      (Jt.prototype = Object.create(Xt.prototype)),
      (Jt.prototype.constructor = Jt),
      (Qt.prototype = Object.create(Xt.prototype)),
      (Qt.prototype.constructor = Qt),
      ($t.prototype = Object.create(Xt.prototype)),
      ($t.prototype.constructor = $t),
      (te.prototype = Object.create(Xt.prototype)),
      (te.prototype.constructor = te),
      Object.assign(ee.prototype, {
        computeGroups: function (t) {
          for (
            var e, r = [], i = void 0, n = t.faces, a = 0;
            a < n.length;
            a++
          ) {
            var s = n[a];
            s.materialIndex !== i &&
              ((i = s.materialIndex),
              void 0 !== e && ((e.count = 3 * a - e.start), r.push(e)),
              (e = { start: 3 * a, materialIndex: i }));
          }
          void 0 !== e && ((e.count = 3 * a - e.start), r.push(e)),
            (this.groups = r);
        },
        fromGeometry: function (t) {
          var e,
            r = t.faces,
            i = t.vertices,
            n = t.faceVertexUvs,
            a = n[0] && n[0].length > 0,
            s = n[1] && n[1].length > 0,
            o = t.morphTargets,
            h = o.length;
          if (h > 0) {
            e = [];
            for (var u = 0; u < h; u++) e[u] = [];
            this.morphTargets.position = e;
          }
          var c,
            p = t.morphNormals,
            d = p.length;
          if (d > 0) {
            c = [];
            for (u = 0; u < d; u++) c[u] = [];
            this.morphTargets.normal = c;
          }
          var f = t.skinIndices,
            m = t.skinWeights,
            g = f.length === i.length,
            y = m.length === i.length;
          for (u = 0; u < r.length; u++) {
            var v = r[u];
            this.vertices.push(i[v.a], i[v.b], i[v.c]);
            var x = v.vertexNormals;
            if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
            else {
              var b = v.normal;
              this.normals.push(b, b, b);
            }
            var w,
              M = v.vertexColors;
            if (3 === M.length) this.colors.push(M[0], M[1], M[2]);
            else {
              var T = v.color;
              this.colors.push(T, T, T);
            }
            if (!0 === a)
              void 0 !== (w = n[0][u])
                ? this.uvs.push(w[0], w[1], w[2])
                : (console.warn(
                    "RK.DirectGeometry.fromGeometry(): Undefined vertexUv ",
                    u
                  ),
                  this.uvs.push(new l.a(), new l.a(), new l.a()));
            if (!0 === s)
              void 0 !== (w = n[1][u])
                ? this.uvs2.push(w[0], w[1], w[2])
                : (console.warn(
                    "RK.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
                    u
                  ),
                  this.uvs2.push(new l.a(), new l.a(), new l.a()));
            for (var S = 0; S < h; S++) {
              var _ = o[S].vertices;
              e[S].push(_[v.a], _[v.b], _[v.c]);
            }
            for (S = 0; S < d; S++) {
              var E = p[S].vertexNormals[u];
              c[S].push(E.a, E.b, E.c);
            }
            g && this.skinIndices.push(f[v.a], f[v.b], f[v.c]),
              y && this.skinWeights.push(m[v.a], m[v.b], m[v.c]);
          }
          return (
            this.computeGroups(t),
            (this.verticesNeedUpdate = t.verticesNeedUpdate),
            (this.normalsNeedUpdate = t.normalsNeedUpdate),
            (this.colorsNeedUpdate = t.colorsNeedUpdate),
            (this.uvsNeedUpdate = t.uvsNeedUpdate),
            (this.groupsNeedUpdate = t.groupsNeedUpdate),
            this
          );
        },
      }),
      (ie.MaxIndex = 65535),
      Object.assign(ie.prototype, s.prototype, {
        isBufferGeometry: !0,
        getIndex: function () {
          return this.index;
        },
        setIndex: function (t) {
          Array.isArray(t)
            ? (this.index = new (re(t) > 65535 ? Qt : Zt)(t, 1))
            : (this.index = t);
        },
        addAttribute: function (t, e) {
          return (e && e.isBufferAttribute) ||
            (e && e.isInterleavedBufferAttribute)
            ? "index" === t
              ? (console.warn(
                  "RK.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
                ),
                void this.setIndex(e))
              : ((this.attributes[t] = e), this)
            : (console.warn(
                "RK.BufferGeometry: .addAttribute() now expects ( name, attribute )."
              ),
              void this.addAttribute(t, new Xt(arguments[1], arguments[2])));
        },
        getAttribute: function (t) {
          return this.attributes[t];
        },
        removeAttribute: function (t) {
          return delete this.attributes[t], this;
        },
        addGroup: function (t, e, r) {
          this.groups.push({
            start: t,
            count: e,
            materialIndex: void 0 !== r ? r : 0,
          });
        },
        clearGroups: function () {
          this.groups = [];
        },
        setDrawRange: function (t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        },
        applyMatrix: function (t) {
          var e = this.attributes.position;
          void 0 !== e && (t.applyToBufferAttribute(e), (e.needsUpdate = !0));
          var r = this.attributes.normal;
          void 0 !== r &&
            (new wt().getNormalMatrix(t).applyToBufferAttribute(r),
            (r.needsUpdate = !0));
          return (
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        },
        rotateX: (function () {
          var t = new y.a();
          return function (e) {
            return t.makeRotationX(e), this.applyMatrix(t), this;
          };
        })(),
        rotateY: (function () {
          var t = new y.a();
          return function (e) {
            return t.makeRotationY(e), this.applyMatrix(t), this;
          };
        })(),
        rotateZ: (function () {
          var t = new y.a();
          return function (e) {
            return t.makeRotationZ(e), this.applyMatrix(t), this;
          };
        })(),
        translate: (function () {
          var t = new y.a();
          return function (e, r, i) {
            return t.makeTranslation(e, r, i), this.applyMatrix(t), this;
          };
        })(),
        scale: (function () {
          var t = new y.a();
          return function (e, r, i) {
            return t.makeScale(e, r, i), this.applyMatrix(t), this;
          };
        })(),
        lookAt: (function () {
          var t = new zt();
          return function (e) {
            t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix);
          };
        })(),
        center: function () {
          this.computeBoundingBox();
          var t = this.boundingBox.getCenter().negate();
          return this.translate(t.x, t.y, t.z), t;
        },
        setFromObject: function (t) {
          var e = t.geometry;
          if (t.isPoints || t.isLine) {
            var r = new $t(3 * e.vertices.length, 3),
              i = new $t(3 * e.colors.length, 3);
            if (
              (this.addAttribute("position", r.copyVec3sArray(e.vertices)),
              this.addAttribute("color", i.copyColorsArray(e.colors)),
              e.lineDistances && e.lineDistances.length === e.vertices.length)
            ) {
              var n = new $t(e.lineDistances.length, 1);
              this.addAttribute("lineDistance", n.copyArray(e.lineDistances));
            }
            null !== e.boundingSphere &&
              (this.boundingSphere = e.boundingSphere.clone()),
              null !== e.boundingBox &&
                (this.boundingBox = e.boundingBox.clone());
          } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
          return this;
        },
        updateFromObject: function (t) {
          var e,
            r = t.geometry;
          if (t.isMesh) {
            var i = r.__directGeometry;
            if (
              (!0 === r.elementsNeedUpdate &&
                ((i = void 0), (r.elementsNeedUpdate = !1)),
              void 0 === i)
            )
              return this.fromGeometry(r);
            (i.verticesNeedUpdate = r.verticesNeedUpdate),
              (i.normalsNeedUpdate = r.normalsNeedUpdate),
              (i.colorsNeedUpdate = r.colorsNeedUpdate),
              (i.uvsNeedUpdate = r.uvsNeedUpdate),
              (i.groupsNeedUpdate = r.groupsNeedUpdate),
              (r.verticesNeedUpdate = !1),
              (r.normalsNeedUpdate = !1),
              (r.colorsNeedUpdate = !1),
              (r.uvsNeedUpdate = !1),
              (r.groupsNeedUpdate = !1),
              (r = i);
          }
          return (
            !0 === r.verticesNeedUpdate &&
              (void 0 !== (e = this.attributes.position) &&
                (e.copyVec3sArray(r.vertices), (e.needsUpdate = !0)),
              (r.verticesNeedUpdate = !1)),
            !0 === r.normalsNeedUpdate &&
              (void 0 !== (e = this.attributes.normal) &&
                (e.copyVec3sArray(r.normals), (e.needsUpdate = !0)),
              (r.normalsNeedUpdate = !1)),
            !0 === r.colorsNeedUpdate &&
              (void 0 !== (e = this.attributes.color) &&
                (e.copyColorsArray(r.colors), (e.needsUpdate = !0)),
              (r.colorsNeedUpdate = !1)),
            r.uvsNeedUpdate &&
              (void 0 !== (e = this.attributes.uv) &&
                (e.copyVec2sArray(r.uvs), (e.needsUpdate = !0)),
              (r.uvsNeedUpdate = !1)),
            r.lineDistancesNeedUpdate &&
              (void 0 !== (e = this.attributes.lineDistance) &&
                (e.copyArray(r.lineDistances), (e.needsUpdate = !0)),
              (r.lineDistancesNeedUpdate = !1)),
            r.groupsNeedUpdate &&
              (r.computeGroups(t.geometry),
              (this.groups = r.groups),
              (r.groupsNeedUpdate = !1)),
            this
          );
        },
        fromGeometry: function (t) {
          return (
            (t.__directGeometry = new ee().fromGeometry(t)),
            this.fromDirectGeometry(t.__directGeometry)
          );
        },
        fromDirectGeometry: function (t) {
          var e = new Float32Array(3 * t.vertices.length);
          if (
            (this.addAttribute(
              "position",
              new Xt(e, 3).copyVec3sArray(t.vertices)
            ),
            t.normals.length > 0)
          ) {
            var r = new Float32Array(3 * t.normals.length);
            this.addAttribute("normal", new Xt(r, 3).copyVec3sArray(t.normals));
          }
          if (t.colors.length > 0) {
            var i = new Float32Array(3 * t.colors.length);
            this.addAttribute("color", new Xt(i, 3).copyColorsArray(t.colors));
          }
          if (t.uvs.length > 0) {
            var n = new Float32Array(2 * t.uvs.length);
            this.addAttribute("uv", new Xt(n, 2).copyVec2sArray(t.uvs));
          }
          if (t.uvs2.length > 0) {
            var a = new Float32Array(2 * t.uvs2.length);
            this.addAttribute("uv2", new Xt(a, 2).copyVec2sArray(t.uvs2));
          }
          if (t.indices.length > 0) {
            var s = new (re(t.indices) > 65535 ? Uint32Array : Uint16Array)(
              3 * t.indices.length
            );
            this.setIndex(new Xt(s, 1).copyIndicesArray(t.indices));
          }
          for (var o in ((this.groups = t.groups), t.morphTargets)) {
            for (
              var h = [], u = t.morphTargets[o], c = 0, l = u.length;
              c < l;
              c++
            ) {
              var p = u[c],
                d = new $t(3 * p.length, 3);
              h.push(d.copyVec3sArray(p));
            }
            this.morphAttributes[o] = h;
          }
          if (t.skinIndices.length > 0) {
            var f = new $t(4 * t.skinIndices.length, 4);
            this.addAttribute("skinIndex", f.copyVec4sArray(t.skinIndices));
          }
          if (t.skinWeights.length > 0) {
            var m = new $t(4 * t.skinWeights.length, 4);
            this.addAttribute("skinWeight", m.copyVec4sArray(t.skinWeights));
          }
          return (
            null !== t.boundingSphere &&
              (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox &&
              (this.boundingBox = t.boundingBox.clone()),
            this
          );
        },
        computeBoundingBox: function () {
          null === this.boundingBox && (this.boundingBox = new xt());
          var t = this.attributes.position;
          void 0 !== t
            ? this.boundingBox.setFromBufferAttribute(t)
            : this.boundingBox.makeEmpty(),
            (isNaN(this.boundingBox.min.x) ||
              isNaN(this.boundingBox.min.y) ||
              isNaN(this.boundingBox.min.z)) &&
              console.error(
                'RK.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
                this
              );
        },
        computeBoundingSphere: (function () {
          var t = new xt(),
            e = new st.a();
          return function () {
            null === this.boundingSphere && (this.boundingSphere = new bt());
            var r = this.attributes.position;
            if (r) {
              var i = this.boundingSphere.center;
              t.setFromBufferAttribute(r), t.getCenter(i);
              for (var n = 0, a = 0, s = r.count; a < s; a++)
                (e.x = r.getX(a)),
                  (e.y = r.getY(a)),
                  (e.z = r.getZ(a)),
                  (n = Math.max(n, i.distanceToSquared(e)));
              (this.boundingSphere.radius = Math.sqrt(n)),
                isNaN(this.boundingSphere.radius) &&
                  console.error(
                    'RK.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                    this
                  );
            }
          };
        })(),
        computeFaceNormals: function () {},
        computeVertexNormals: function () {
          var t = this.index,
            e = this.attributes,
            r = this.groups;
          if (e.position) {
            var i = e.position.array;
            if (void 0 === e.normal)
              this.addAttribute(
                "normal",
                new Xt(new Float32Array(i.length), 3)
              );
            else
              for (var n = e.normal.array, a = 0, s = n.length; a < s; a++)
                n[a] = 0;
            var o,
              h,
              u,
              c = e.normal.array,
              l = new st.a(),
              p = new st.a(),
              d = new st.a(),
              f = new st.a(),
              m = new st.a();
            if (t) {
              var g = t.array;
              0 === r.length && this.addGroup(0, g.length);
              for (var y = 0, v = r.length; y < v; ++y) {
                var x = r[y],
                  b = x.start;
                for (a = b, s = b + x.count; a < s; a += 3)
                  (o = 3 * g[a + 0]),
                    (h = 3 * g[a + 1]),
                    (u = 3 * g[a + 2]),
                    l.fromArray(i, o),
                    p.fromArray(i, h),
                    d.fromArray(i, u),
                    f.subVectors(d, p),
                    m.subVectors(l, p),
                    f.cross(m),
                    (c[o] += f.x),
                    (c[o + 1] += f.y),
                    (c[o + 2] += f.z),
                    (c[h] += f.x),
                    (c[h + 1] += f.y),
                    (c[h + 2] += f.z),
                    (c[u] += f.x),
                    (c[u + 1] += f.y),
                    (c[u + 2] += f.z);
              }
            } else
              for (a = 0, s = i.length; a < s; a += 9)
                l.fromArray(i, a),
                  p.fromArray(i, a + 3),
                  d.fromArray(i, a + 6),
                  f.subVectors(d, p),
                  m.subVectors(l, p),
                  f.cross(m),
                  (c[a] = f.x),
                  (c[a + 1] = f.y),
                  (c[a + 2] = f.z),
                  (c[a + 3] = f.x),
                  (c[a + 4] = f.y),
                  (c[a + 5] = f.z),
                  (c[a + 6] = f.x),
                  (c[a + 7] = f.y),
                  (c[a + 8] = f.z);
            this.normalizeNormals(), (e.normal.needsUpdate = !0);
          }
        },
        merge: function (t, e) {
          if (t && t.isBufferGeometry) {
            void 0 === e && (e = 0);
            var r = this.attributes;
            for (var i in r)
              if (void 0 !== t.attributes[i])
                for (
                  var n = r[i].array,
                    a = t.attributes[i],
                    s = a.array,
                    o = 0,
                    h = a.itemSize * e;
                  o < s.length;
                  o++, h++
                )
                  n[h] = s[o];
            return this;
          }
          console.error(
            "RK.BufferGeometry.merge(): geometry not an instance of RK.BufferGeometry.",
            t
          );
        },
        normalizeNormals:
          ((kt = new st.a()),
          function () {
            for (var t = this.attributes.normal, e = 0, r = t.count; e < r; e++)
              (kt.x = t.getX(e)),
                (kt.y = t.getY(e)),
                (kt.z = t.getZ(e)),
                kt.normalize(),
                t.setXYZ(e, kt.x, kt.y, kt.z);
          }),
        toNonIndexed: function () {
          if (null === this.index)
            return (
              console.warn(
                "RK.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
              ),
              this
            );
          var t = new ie(),
            e = this.index.array,
            r = this.attributes;
          for (var i in r) {
            for (
              var n = r[i],
                a = n.array,
                s = n.itemSize,
                o = new a.constructor(e.length * s),
                h = 0,
                u = 0,
                c = 0,
                l = e.length;
              c < l;
              c++
            ) {
              h = e[c] * s;
              for (var p = 0; p < s; p++) o[u++] = a[h++];
            }
            t.addAttribute(i, new Xt(o, s));
          }
          return t;
        },
        toJSON: function () {
          var t = {
            metadata: {
              version: 4.5,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters)
          ) {
            var e = this.parameters;
            for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
            return t;
          }
          t.data = { attributes: {} };
          var i = this.index;
          if (null !== i) {
            var n = Array.prototype.slice.call(i.array);
            t.data.index = { type: i.array.constructor.name, array: n };
          }
          var a = this.attributes;
          for (var r in a) {
            var s = a[r];
            n = Array.prototype.slice.call(s.array);
            t.data.attributes[r] = {
              itemSize: s.itemSize,
              type: s.array.constructor.name,
              array: n,
              normalized: s.normalized,
            };
          }
          var o = this.groups;
          o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
          var h = this.boundingSphere;
          return (
            null !== h &&
              (t.data.boundingSphere = {
                center: h.center.toArray(),
                radius: h.radius,
              }),
            t
          );
        },
        clone: function () {
          return new ie().copy(this);
        },
        copy: function (t) {
          var e, r, i;
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.name = t.name);
          var n = t.index;
          null !== n && this.setIndex(n.clone());
          var a = t.attributes;
          for (e in a) {
            var s = a[e];
            this.addAttribute(e, s.clone());
          }
          var o = t.morphAttributes;
          for (e in o) {
            var h = [],
              u = o[e];
            for (r = 0, i = u.length; r < i; r++) h.push(u[r].clone());
            this.morphAttributes[e] = h;
          }
          var c = t.groups;
          for (r = 0, i = c.length; r < i; r++) {
            var l = c[r];
            this.addGroup(l.start, l.count, l.materialIndex);
          }
          var p = t.boundingBox;
          null !== p && (this.boundingBox = p.clone());
          var d = t.boundingSphere;
          return (
            null !== d && (this.boundingSphere = d.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            this
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      }),
      (ne.prototype = Object.create(jt.prototype)),
      (ne.prototype.constructor = ne),
      (ae.prototype = Object.create(ie.prototype)),
      (ae.prototype.constructor = ae),
      (se.prototype = Object.create(jt.prototype)),
      (se.prototype.constructor = se),
      (oe.prototype = Object.create(ie.prototype)),
      (oe.prototype.constructor = oe);
    var he = 0;
    function ue() {
      Object.defineProperty(this, "id", { value: he++ }),
        (this.uuid = c.a.generateUUID()),
        (this.name = ""),
        (this.type = "Material"),
        (this.fog = !0),
        (this.lights = !0),
        (this.blending = u.NormalBlending),
        (this.side = u.FrontSide),
        (this.flatShading = !1),
        (this.vertexColors = u.NoColors),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = u.SrcAlphaFactor),
        (this.blendDst = u.OneMinusSrcAlphaFactor),
        (this.blendEquation = u.AddEquation),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = u.LessEqualDepth),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaTest = 0),
        (this.premultipliedAlpha = !1),
        (this.overdraw = 0),
        (this.visible = !0),
        (this.userData = {}),
        (this.needsUpdate = !0);
    }
    Object.assign(ue.prototype, s.prototype, {
      isMaterial: !0,
      onBeforeCompile: function () {},
      setValues: function (t) {
        if (void 0 !== t)
          for (var e in t) {
            var r = t[e];
            if (void 0 !== r)
              if ("shading" !== e) {
                var i = this[e];
                void 0 !== i
                  ? i && i.isColor
                    ? i.set(r)
                    : i && i.isVec3 && r && r.isVec3
                    ? i.copy(r)
                    : (this[e] = "overdraw" === e ? Number(r) : r)
                  : console.warn(
                      "RK." +
                        this.type +
                        ": '" +
                        e +
                        "' is not a property of this material."
                    );
              } else
                console.warn(
                  "RK." +
                    this.type +
                    ": .shading has been removed. Use the boolean .flatShading instead."
                ),
                  (this.flatShading = r === u.FlatShading);
            else
              console.warn("RK.Material: '" + e + "' parameter is undefined.");
          }
      },
      toJSON: function (t) {
        var e = void 0 === t;
        e && (t = { textures: {}, images: {} });
        var r = {
          metadata: {
            version: 4.5,
            type: "Material",
            generator: "Material.toJSON",
          },
        };
        function i(t) {
          var e = [];
          for (var r in t) {
            var i = t[r];
            delete i.metadata, e.push(i);
          }
          return e;
        }
        if (
          ((r.uuid = this.uuid),
          (r.type = this.type),
          "" !== this.name && (r.name = this.name),
          this.color && this.color.isColor && (r.color = this.color.getHex()),
          void 0 !== this.roughness && (r.roughness = this.roughness),
          void 0 !== this.metalness && (r.metalness = this.metalness),
          this.subsurface &&
            this.subsurface.isColor &&
            (r.subsurface = this.subsurface.getHex()),
          this.emissive &&
            this.emissive.isColor &&
            (r.emissive = this.emissive.getHex()),
          this.specular &&
            this.specular.isColor &&
            (r.specular = this.specular.getHex()),
          void 0 !== this.shininess && (r.shininess = this.shininess),
          void 0 !== this.clearCoat && (r.clearCoat = this.clearCoat),
          void 0 !== this.clearCoatRoughness &&
            (r.clearCoatRoughness = this.clearCoatRoughness),
          this.map && this.map.isTexture && (r.map = this.map.toJSON(t).uuid),
          this.alphaMap &&
            this.alphaMap.isTexture &&
            (r.alphaMap = this.alphaMap.toJSON(t).uuid),
          this.lightMap &&
            this.lightMap.isTexture &&
            (r.lightMap = this.lightMap.toJSON(t).uuid),
          this.bumpMap &&
            this.bumpMap.isTexture &&
            ((r.bumpMap = this.bumpMap.toJSON(t).uuid),
            (r.bumpScale = this.bumpScale)),
          this.normalMap &&
            this.normalMap.isTexture &&
            ((r.normalMap = this.normalMap.toJSON(t).uuid),
            (r.normalScale = this.normalScale.toArray())),
          this.displacementMap &&
            this.displacementMap.isTexture &&
            ((r.displacementMap = this.displacementMap.toJSON(t).uuid),
            (r.displacementScale = this.displacementScale),
            (r.displacementBias = this.displacementBias)),
          this.roughnessMap &&
            this.roughnessMap.isTexture &&
            (r.roughnessMap = this.roughnessMap.toJSON(t).uuid),
          this.metalnessMap &&
            this.metalnessMap.isTexture &&
            (r.metalnessMap = this.metalnessMap.toJSON(t).uuid),
          this.emissiveMap &&
            this.emissiveMap.isTexture &&
            (r.emissiveMap = this.emissiveMap.toJSON(t).uuid),
          this.specularMap &&
            this.specularMap.isTexture &&
            (r.specularMap = this.specularMap.toJSON(t).uuid),
          this.envMap &&
            this.envMap.isTexture &&
            ((r.envMap = this.envMap.toJSON(t).uuid),
            (r.reflectivity = this.reflectivity)),
          this.gradientMap &&
            this.gradientMap.isTexture &&
            (r.gradientMap = this.gradientMap.toJSON(t).uuid),
          void 0 !== this.size && (r.size = this.size),
          void 0 !== this.sizeAttenuation &&
            (r.sizeAttenuation = this.sizeAttenuation),
          this.blending !== u.NormalBlending && (r.blending = this.blending),
          !0 === this.flatShading && (r.flatShading = this.flatShading),
          this.side !== u.FrontSide && (r.side = this.side),
          this.vertexColors !== u.NoColors &&
            (r.vertexColors = this.vertexColors),
          this.opacity < 1 && (r.opacity = this.opacity),
          !0 === this.transparent && (r.transparent = this.transparent),
          (r.depthFunc = this.depthFunc),
          (r.depthTest = this.depthTest),
          (r.depthWrite = this.depthWrite),
          !0 === this.dithering && (r.dithering = !0),
          this.alphaTest > 0 && (r.alphaTest = this.alphaTest),
          !0 === this.premultipliedAlpha &&
            (r.premultipliedAlpha = this.premultipliedAlpha),
          !0 === this.wireframe && (r.wireframe = this.wireframe),
          this.wireframeLinewidth > 1 &&
            (r.wireframeLinewidth = this.wireframeLinewidth),
          "round" !== this.wireframeLinecap &&
            (r.wireframeLinecap = this.wireframeLinecap),
          "round" !== this.wireframeLinejoin &&
            (r.wireframeLinejoin = this.wireframeLinejoin),
          !0 === this.morphTargets && (r.morphTargets = !0),
          !0 === this.skinning && (r.skinning = !0),
          !1 === this.visible && (r.visible = !1),
          "{}" !== JSON.stringify(this.userData) &&
            (r.userData = this.userData),
          e)
        ) {
          var n = i(t.textures),
            a = i(t.images);
          n.length > 0 && (r.textures = n), a.length > 0 && (r.images = a);
        }
        return r;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (t) {
        (this.name = t.name),
          (this.fog = t.fog),
          (this.lights = t.lights),
          (this.blending = t.blending),
          (this.side = t.side),
          (this.flatShading = t.flatShading),
          (this.vertexColors = t.vertexColors),
          (this.opacity = t.opacity),
          (this.transparent = t.transparent),
          (this.blendSrc = t.blendSrc),
          (this.blendDst = t.blendDst),
          (this.blendEquation = t.blendEquation),
          (this.blendSrcAlpha = t.blendSrcAlpha),
          (this.blendDstAlpha = t.blendDstAlpha),
          (this.blendEquationAlpha = t.blendEquationAlpha),
          (this.depthFunc = t.depthFunc),
          (this.depthTest = t.depthTest),
          (this.depthWrite = t.depthWrite),
          (this.colorWrite = t.colorWrite),
          (this.precision = t.precision),
          (this.polygonOffset = t.polygonOffset),
          (this.polygonOffsetFactor = t.polygonOffsetFactor),
          (this.polygonOffsetUnits = t.polygonOffsetUnits),
          (this.dithering = t.dithering),
          (this.alphaTest = t.alphaTest),
          (this.premultipliedAlpha = t.premultipliedAlpha),
          (this.overdraw = t.overdraw),
          (this.visible = t.visible),
          (this.userData = JSON.parse(JSON.stringify(t.userData))),
          (this.clipShadows = t.clipShadows),
          (this.clipIntersection = t.clipIntersection);
        var e = t.clippingPlanes,
          r = null;
        if (null !== e) {
          var i = e.length;
          r = new Array(i);
          for (var n = 0; n !== i; ++n) r[n] = e[n].clone();
        }
        return (this.clippingPlanes = r), this;
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    });
    var ce,
      le,
      pe,
      de,
      fe,
      me,
      ge,
      ye = {
        merge: function (t) {
          for (var e = {}, r = 0; r < t.length; r++) {
            var i = this.clone(t[r]);
            for (var n in i) e[n] = i[n];
          }
          return e;
        },
        clone: function (t) {
          var e = {};
          for (var r in t)
            for (var i in ((e[r] = {}), t[r])) {
              var n = t[r][i];
              n &&
              (n.isColor ||
                n.isMatrix3 ||
                n.isMatrix4 ||
                n.isVec2 ||
                n.isVec3 ||
                n.isVec4 ||
                n.isTexture)
                ? (e[r][i] = n.clone())
                : Array.isArray(n)
                ? (e[r][i] = n.slice())
                : (e[r][i] = n);
            }
          return e;
        },
      };
    function ve(t) {
      ue.call(this),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        void 0 !== t &&
          (void 0 !== t.attributes &&
            console.error(
              "RK.ShaderMaterial: attributes should now be defined in RK.BufferGeometry instead."
            ),
          this.setValues(t));
    }
    function xe(t, e) {
      (this.origin = void 0 !== t ? t : new st.a()),
        (this.direction = void 0 !== e ? e : new st.a());
    }
    function be(t, e) {
      (this.start = void 0 !== t ? t : new st.a()),
        (this.end = void 0 !== e ? e : new st.a());
    }
    function we(t, e, r) {
      (this.a = void 0 !== t ? t : new st.a()),
        (this.b = void 0 !== e ? e : new st.a()),
        (this.c = void 0 !== r ? r : new st.a());
    }
    function Me(t, e) {
      zt.call(this),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        void 0 === this.material &&
          console.error("Trying to make mesh with undefined material"),
        (this.drawMode = u.TrianglesDrawMode),
        this.updateMorphTargets();
    }
    function Te(t, e, r, i) {
      var n,
        a,
        s,
        o = new Dt(0),
        h = 0;
      function c(t, r) {
        e.buffers.color.setClear(t.r, t.g, t.b, r, i);
      }
      return {
        getClearColor: function () {
          return o;
        },
        setClearColor: function (t, e) {
          o.set(t), c(o, (h = void 0 !== e ? e : 1));
        },
        getClearAlpha: function () {
          return h;
        },
        setClearAlpha: function (t) {
          c(o, (h = t));
        },
        render: function (e, i, l, p) {
          var d = i.background;
          null === d ? c(o, h) : d && d.isColor && (c(d, 1), (p = !0)),
            (t.autoClear || p) &&
              t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
            d && d.isCubeTexture
              ? (console.log("background cube not supported in RK"),
                void 0 === s &&
                  ((s = new Me(
                    new ae(1, 1, 1),
                    new ve({
                      uniforms: ShaderLib.cube.uniforms,
                      vertexShader: ShaderLib.cube.vertexShader,
                      fragmentShader: ShaderLib.cube.fragmentShader,
                      side: u.BackSide,
                      depthTest: !0,
                      depthWrite: !1,
                      polygonOffset: !0,
                      fog: !1,
                    })
                  )).geometry.removeAttribute("normal"),
                  s.geometry.removeAttribute("uv"),
                  (s.onBeforeRender = function (t, e, r) {
                    var i = r.far;
                    this.matrixWorld.makeScale(i, i, i),
                      this.matrixWorld.copyPosition(r.matrixWorld),
                      (this.material.polygonOffsetUnits = 10 * i);
                  }),
                  r.update(s.geometry)),
                (s.material.uniforms.tCube.value = d),
                e.push(s, s.geometry, s.material, 0, null))
              : d &&
                d.isTexture &&
                (void 0 === n &&
                  ((n = new Ut(-1, 1, 1, -1, 0, 1)),
                  (a = new Me(
                    new oe(2, 2),
                    new SK.Map({ depthTest: !1, depthWrite: !1, fog: !1 })
                  )),
                  r.update(a.geometry)),
                (a.material.map = d),
                t.renderBufferDirect(n, null, a.geometry, a.material, a, null));
        },
      };
    }
    function Se(t, e) {
      return t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.program && e.program && t.program !== e.program
        ? t.program.id - e.program.id
        : t.material.id !== e.material.id
        ? t.material.id - e.material.id
        : t.z !== e.z
        ? t.z - e.z
        : t.id - e.id;
    }
    function _e(t, e) {
      return t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.z !== e.z
        ? e.z - t.z
        : t.id - e.id;
    }
    function Ee() {
      var t = [],
        e = 0,
        r = [],
        i = [];
      return {
        opaque: r,
        transparent: i,
        init: function () {
          (e = 0), (r.length = 0), (i.length = 0);
        },
        push: function (n, a, s, o, h) {
          var u = t[e];
          void 0 === u
            ? ((u = {
                id: n.id,
                object: n,
                geometry: a,
                material: s,
                program: s.program,
                renderOrder: n.renderOrder,
                z: o,
                group: h,
              }),
              (t[e] = u))
            : ((u.id = n.id),
              (u.object = n),
              (u.geometry = a),
              (u.material = s),
              (u.program = s.program),
              (u.renderOrder = n.renderOrder),
              (u.z = o),
              (u.group = h)),
            (!0 === s.transparent ? i : r).push(u),
            e++;
        },
        sort: function () {
          r.length > 1 && r.sort(Se), i.length > 1 && i.sort(_e);
        },
      };
    }
    function Ae() {
      var t = {};
      return {
        get: function (e, r) {
          var i = e.id + "," + r.id,
            n = t[i];
          return void 0 === n && ((n = new Ee()), (t[i] = n)), n;
        },
        dispose: function () {
          t = {};
        },
      };
    }
    function Re(t, e) {
      return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function Pe(t) {
      var e = {},
        r = new Float32Array(8);
      return {
        update: function (i, n, a, s) {
          var o = i.morphTargetInfluences,
            h = o.length,
            u = e[n.id];
          if (void 0 === u) {
            u = [];
            for (var c = 0; c < h; c++) u[c] = [c, 0];
            e[n.id] = u;
          }
          var l = a.morphTargets && n.morphAttributes.position,
            p = a.morphNormals && n.morphAttributes.normal;
          for (c = 0; c < h; c++) {
            0 !== (d = u[c])[1] &&
              (l && n.removeAttribute("morphTarget" + c),
              p && n.removeAttribute("morphNormal" + c));
          }
          for (c = 0; c < h; c++) {
            ((d = u[c])[0] = c), (d[1] = o[c]);
          }
          for (u.sort(Re), c = 0; c < 8; c++) {
            var d;
            if ((d = u[c])) {
              var f = d[0],
                m = d[1];
              if (m) {
                l && n.addAttribute("morphTarget" + c, l[f]),
                  p && n.addAttribute("morphNormal" + c, p[f]),
                  (r[c] = m);
                continue;
              }
            }
            r[c] = 0;
          }
          s.getUniforms().setValue(t, "morphTargetInfluences", r);
        },
      };
    }
    function Ce(t, e, r) {
      var i, n, a;
      (this.setMode = function (t) {
        i = t;
      }),
        (this.setIndex = function (t) {
          (n = t.type), (a = t.bytesPerElement);
        }),
        (this.render = function (e, s) {
          t.drawElements(i, s, n, e * a),
            r.calls++,
            (r.vertices += s),
            i === t.TRIANGLES
              ? (r.faces += s / 3)
              : i === t.POINTS && (r.points += s);
        }),
        (this.renderInstances = function (s, o, h) {
          var u = e.get("ANGLE_instanced_arrays");
          null !== u
            ? (u.drawElementsInstancedANGLE(
                i,
                h,
                n,
                o * a,
                s.maxInstancedCount
              ),
              r.calls++,
              (r.vertices += h * s.maxInstancedCount),
              i === t.TRIANGLES
                ? (r.faces += (s.maxInstancedCount * h) / 3)
                : i === t.POINTS && (r.points += s.maxInstancedCount * h))
            : console.error(
                "RK.WebGLIndexedBufferRenderer: using RK.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
        });
    }
    function Oe(t, e, r) {
      var i;
      (this.setMode = function (t) {
        i = t;
      }),
        (this.render = function (e, n) {
          t.drawArrays(i, e, n),
            r.calls++,
            (r.vertices += n),
            i === t.TRIANGLES
              ? (r.faces += n / 3)
              : i === t.POINTS && (r.points += n);
        }),
        (this.renderInstances = function (n, a, s) {
          var o = e.get("ANGLE_instanced_arrays");
          if (null !== o) {
            var h = n.attributes.position;
            h.isInterleavedBufferAttribute
              ? ((s = h.data.count),
                o.drawArraysInstancedANGLE(i, 0, s, n.maxInstancedCount))
              : o.drawArraysInstancedANGLE(i, a, s, n.maxInstancedCount),
              r.calls++,
              (r.vertices += s * n.maxInstancedCount),
              i === t.TRIANGLES
                ? (r.faces += (n.maxInstancedCount * s) / 3)
                : i === t.POINTS && (r.points += n.maxInstancedCount * s);
          } else
            console.error(
              "RK.WebGLBufferRenderer: using RK.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
            );
        });
    }
    function Fe(t, e, r) {
      var i = {},
        n = {};
      function a(t) {
        var s = t.target,
          o = i[s.id];
        for (var h in (null !== o.index && e.remove(o.index), o.attributes))
          e.remove(o.attributes[h]);
        s.removeEventListener("dispose", a), delete i[s.id];
        var u = n[s.id];
        u && (e.remove(u), delete n[s.id]),
          (u = n[o.id]) && (e.remove(u), delete n[o.id]),
          r.geometries--;
      }
      return {
        get: function (t, e) {
          var n = i[e.id];
          return (
            n ||
            (e.addEventListener("dispose", a),
            e.isBufferGeometry
              ? (n = e)
              : e.isGeometry &&
                (void 0 === e._bufferGeometry &&
                  (e._bufferGeometry = new ie().setFromObject(t)),
                (n = e._bufferGeometry)),
            (i[e.id] = n),
            r.geometries++,
            n)
          );
        },
        update: function (r) {
          var i = r.index,
            n = r.attributes;
          for (var a in (null !== i && e.update(i, t.ELEMENT_ARRAY_BUFFER), n))
            e.update(n[a], t.ARRAY_BUFFER);
          var s = r.morphAttributes;
          for (var a in s)
            for (var o = s[a], h = 0, u = o.length; h < u; h++)
              e.update(o[h], t.ARRAY_BUFFER);
        },
        getWireframeAttribute: function (r) {
          var i = n[r.id];
          if (i) return i;
          var a,
            s = [],
            o = r.index,
            h = r.attributes;
          if (null !== o)
            for (var u = 0, c = (a = o.array).length; u < c; u += 3) {
              var l = a[u + 0],
                p = a[u + 1],
                d = a[u + 2];
              s.push(l, p, p, d, d, l);
            }
          else
            for (
              u = 0, c = (a = h.position.array).length / 3 - 1;
              u < c;
              u += 3
            ) {
              (l = u + 0), (p = u + 1), (d = u + 2);
              s.push(l, p, p, d, d, l);
            }
          return (
            (i = new (re(s) > 65535 ? Qt : Zt)(s, 1)),
            e.update(i, t.ELEMENT_ARRAY_BUFFER),
            (n[r.id] = i),
            i
          );
        },
      };
    }
    function Le() {
      var t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          var r;
          switch (e.type) {
            case "DirectionalLight":
              r = {
                direction: new st.a(),
                color: new Dt(),
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new l.a(),
              };
              break;
            case "SpotLight":
              r = {
                position: new st.a(),
                direction: new st.a(),
                color: new Dt(),
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new l.a(),
              };
              break;
            case "PointLight":
              r = {
                position: new st.a(),
                color: new Dt(),
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new l.a(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
              break;
            case "HemisphereLight":
              r = {
                direction: new st.a(),
                skyColor: new Dt(),
                groundColor: new Dt(),
              };
              break;
            case "EnvironmentLight":
              r = {
                rgbScale: new Dt(),
                saturationScale: 1,
                rotateY: 0,
                mapWidth: 0,
              };
              break;
            case "RectAreaLight":
              r = {
                color: new Dt(),
                position: new st.a(),
                halfWidth: new st.a(),
                halfHeight: new st.a(),
              };
          }
          return (t[e.id] = r), r;
        },
      };
    }
    function ze() {
      var t = new Le(),
        e = {
          hash: "",
          ambient: [0, 0, 0],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          env: [],
          envMap: [],
        },
        r = new st.a(),
        i = new y.a(),
        n = new y.a();
      return {
        setup: function (a, s, o) {
          for (
            var h = 0,
              u = 0,
              c = 0,
              l = 0,
              p = 0,
              d = 0,
              f = 0,
              m = 0,
              g = 0,
              y = o.matrixWorldInverse,
              v = 0,
              x = a.length;
            v < x;
            v++
          ) {
            var b = a[v],
              w = b.color,
              M = b.intensity,
              T = b.distance,
              S = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
            if (b.isAmbientLight)
              (h += w.r * M), (u += w.g * M), (c += w.b * M);
            else if (b.isDirectionalLight) {
              if (
                ((E = t.get(b)).color.copy(b.color).multiplyScalar(b.intensity),
                E.direction.setFromMatrixPosition(b.matrixWorld),
                r.setFromMatrixPosition(b.target.matrixWorld),
                E.direction.sub(r),
                E.direction.transformDirection(y),
                (E.shadow = b.castShadow),
                b.castShadow)
              ) {
                var _ = b.shadow;
                (E.shadowBias = _.bias),
                  (E.shadowRadius = _.radius),
                  (E.shadowMapSize = _.mapSize);
              }
              (e.directionalShadowMap[l] = S),
                (e.directionalShadowMatrix[l] = b.shadow.matrix),
                (e.directional[l] = E),
                l++;
            } else if (b.isSpotLight) {
              if (
                ((E = t.get(b)).position.setFromMatrixPosition(b.matrixWorld),
                E.position.applyMatrix4(y),
                E.color.copy(w).multiplyScalar(M),
                (E.distance = T),
                E.direction.setFromMatrixPosition(b.matrixWorld),
                r.setFromMatrixPosition(b.target.matrixWorld),
                E.direction.sub(r),
                E.direction.transformDirection(y),
                (E.coneCos = Math.cos(b.angle)),
                (E.penumbraCos = Math.cos(b.angle * (1 - b.penumbra))),
                (E.decay = 0 === b.distance ? 0 : b.decay),
                (E.shadow = b.castShadow),
                b.castShadow)
              ) {
                _ = b.shadow;
                (E.shadowBias = _.bias),
                  (E.shadowRadius = _.radius),
                  (E.shadowMapSize = _.mapSize);
              }
              (e.spotShadowMap[d] = S),
                (e.spotShadowMatrix[d] = b.shadow.matrix),
                (e.spot[d] = E),
                d++;
            } else if (b.isRectAreaLight) {
              (E = t.get(b)).color
                .copy(w)
                .multiplyScalar(M / (b.width * b.height)),
                E.position.setFromMatrixPosition(b.matrixWorld),
                E.position.applyMatrix4(y),
                n.identity(),
                i.copy(b.matrixWorld),
                i.premultiply(y),
                n.extractRotation(i),
                E.halfWidth.set(0.5 * b.width, 0, 0),
                E.halfHeight.set(0, 0.5 * b.height, 0),
                E.halfWidth.applyMatrix4(n),
                E.halfHeight.applyMatrix4(n),
                (e.rectArea[f] = E),
                f++;
            } else if (b.isPointLight) {
              if (
                ((E = t.get(b)).position.setFromMatrixPosition(b.matrixWorld),
                E.position.applyMatrix4(y),
                E.color.copy(b.color).multiplyScalar(b.intensity),
                (E.distance = b.distance),
                (E.decay = 0 === b.distance ? 0 : b.decay),
                (E.shadow = b.castShadow),
                b.castShadow)
              ) {
                _ = b.shadow;
                (E.shadowBias = _.bias),
                  (E.shadowRadius = _.radius),
                  (E.shadowMapSize = _.mapSize),
                  (E.shadowCameraNear = _.camera.near),
                  (E.shadowCameraFar = _.camera.far);
              }
              (e.pointShadowMap[p] = S),
                (e.pointShadowMatrix[p] = b.shadow.matrix),
                (e.point[p] = E),
                p++;
            } else if (b.isHemisphereLight) {
              (E = t.get(b)).direction.setFromMatrixPosition(b.matrixWorld),
                E.direction.transformDirection(y),
                E.direction.normalize(),
                E.skyColor.copy(b.color).multiplyScalar(M),
                E.groundColor.copy(b.groundColor).multiplyScalar(M),
                (e.hemi[m] = E),
                m++;
            } else if (b.isEnvironmentLight) {
              var E;
              (E = t.get(b)).rgbScale.copy(b.color).multiplyScalar(M),
                (E.saturationScale = b.saturationScale),
                (E.rotateY = b.rotateY),
                (E.mapWidth = b.mapWidth),
                (e.env[g] = E),
                (e.envMap[g] = b.map),
                g++;
            }
          }
          (e.ambient[0] = h),
            (e.ambient[1] = u),
            (e.ambient[2] = c),
            (e.directional.length = l),
            (e.spot.length = d),
            (e.rectArea.length = f),
            (e.point.length = p),
            (e.hemi.length = m),
            (e.env.length = g),
            (e.envMap.length = g),
            (e.hash =
              l +
              "," +
              p +
              "," +
              d +
              "," +
              f +
              "," +
              m +
              "," +
              g +
              "," +
              s.length);
        },
        state: e,
      };
    }
    function Be(t, e) {
      var r = {};
      return {
        update: function (i) {
          var n = e.frame,
            a = i.geometry,
            s = t.get(i, a);
          return (
            r[s.id] !== n &&
              (a.isGeometry && s.updateFromObject(i),
              t.update(s),
              (r[s.id] = n)),
            s
          );
        },
        clear: function () {
          r = {};
        },
      };
    }
    function Ue(t, e, r) {
      var i = t.createShader(e);
      return (
        t.shaderSource(i, r),
        t.compileShader(i),
        !1 === t.getShaderParameter(i, t.COMPILE_STATUS) &&
          console.error("RK.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(i) &&
          console.warn(
            "RK.WebGLShader: gl.getShaderInfoLog()",
            e === t.VERTEX_SHADER ? "vertex" : "fragment",
            t.getShaderInfoLog(i),
            (function (t) {
              for (var e = t.split("\n"), r = 0; r < e.length; r++)
                e[r] = r + 1 + ": " + e[r];
              return e.join("\n");
            })(r)
          ),
        i
      );
    }
    (ve.prototype = Object.create(ue.prototype)),
      (ve.prototype.constructor = ve),
      (ve.prototype.isShaderMaterial = !0),
      (ve.prototype.copy = function (t) {
        return (
          ue.prototype.copy.call(this, t),
          (this.fragmentShader = t.fragmentShader),
          (this.vertexShader = t.vertexShader),
          (this.uniforms = ye.clone(t.uniforms)),
          (this.defines = t.defines),
          (this.wireframe = t.wireframe),
          (this.wireframeLinewidth = t.wireframeLinewidth),
          (this.lights = t.lights),
          (this.clipping = t.clipping),
          (this.skinning = t.skinning),
          (this.morphTargets = t.morphTargets),
          (this.morphNormals = t.morphNormals),
          (this.extensions = t.extensions),
          this
        );
      }),
      (ve.prototype.toJSON = function (t) {
        var e = ue.prototype.toJSON.call(this, t);
        return (
          (e.uniforms = this.uniforms),
          (e.vertexShader = this.vertexShader),
          (e.fragmentShader = this.fragmentShader),
          e
        );
      }),
      Object.assign(xe.prototype, {
        set: function (t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        },
        at: function (t, e) {
          return (e || new st.a())
            .copy(this.direction)
            .multiplyScalar(t)
            .add(this.origin);
        },
        lookAt: function (t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        },
        recast: (function () {
          var t = new st.a();
          return function (e) {
            return this.origin.copy(this.at(e, t)), this;
          };
        })(),
        closestPointToPoint: function (t, e) {
          var r = e || new st.a();
          r.subVectors(t, this.origin);
          var i = r.dot(this.direction);
          return i < 0
            ? r.copy(this.origin)
            : r.copy(this.direction).multiplyScalar(i).add(this.origin);
        },
        distanceToPoint: function (t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        },
        distanceSqToPoint: (function () {
          var t = new st.a();
          return function (e) {
            var r = t.subVectors(e, this.origin).dot(this.direction);
            return r < 0
              ? this.origin.distanceToSquared(e)
              : (t.copy(this.direction).multiplyScalar(r).add(this.origin),
                t.distanceToSquared(e));
          };
        })(),
        distanceSqToSegment:
          ((le = new st.a()),
          (pe = new st.a()),
          (de = new st.a()),
          function (t, e, r, i) {
            le.copy(t).add(e).multiplyScalar(0.5),
              pe.copy(e).sub(t).normalize(),
              de.copy(this.origin).sub(le);
            var n,
              a,
              s,
              o,
              h = 0.5 * t.distanceTo(e),
              u = -this.direction.dot(pe),
              c = de.dot(this.direction),
              l = -de.dot(pe),
              p = de.lengthSq(),
              d = Math.abs(1 - u * u);
            if (d > 0)
              if (((a = u * c - l), (o = h * d), (n = u * l - c) >= 0))
                if (a >= -o)
                  if (a <= o) {
                    var f = 1 / d;
                    s =
                      (n *= f) * (n + u * (a *= f) + 2 * c) +
                      a * (u * n + a + 2 * l) +
                      p;
                  } else
                    (a = h),
                      (s =
                        -(n = Math.max(0, -(u * a + c))) * n +
                        a * (a + 2 * l) +
                        p);
                else
                  (a = -h),
                    (s =
                      -(n = Math.max(0, -(u * a + c))) * n +
                      a * (a + 2 * l) +
                      p);
              else
                a <= -o
                  ? (s =
                      -(n = Math.max(0, -(-u * h + c))) * n +
                      (a = n > 0 ? -h : Math.min(Math.max(-h, -l), h)) *
                        (a + 2 * l) +
                      p)
                  : a <= o
                  ? ((n = 0),
                    (s = (a = Math.min(Math.max(-h, -l), h)) * (a + 2 * l) + p))
                  : (s =
                      -(n = Math.max(0, -(u * h + c))) * n +
                      (a = n > 0 ? h : Math.min(Math.max(-h, -l), h)) *
                        (a + 2 * l) +
                      p);
            else
              (a = u > 0 ? -h : h),
                (s =
                  -(n = Math.max(0, -(u * a + c))) * n + a * (a + 2 * l) + p);
            return (
              r && r.copy(this.direction).multiplyScalar(n).add(this.origin),
              i && i.copy(pe).multiplyScalar(a).add(le),
              s
            );
          }),
        intersectSphere: (function () {
          var t = new st.a();
          return function (e, r) {
            t.subVectors(e.center, this.origin);
            var i = t.dot(this.direction),
              n = t.dot(t) - i * i,
              a = e.radius * e.radius;
            if (n > a) return null;
            var s = Math.sqrt(a - n),
              o = i - s,
              h = i + s;
            return o < 0 && h < 0
              ? null
              : o < 0
              ? this.at(h, r)
              : this.at(o, r);
          };
        })(),
        intersectsSphere: function (t) {
          return this.distanceToPoint(t.center) <= t.radius;
        },
        distanceToPlane: function (t) {
          var e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          var r = -(this.origin.dot(t.normal) + t.constant) / e;
          return r >= 0 ? r : null;
        },
        intersectPlane: function (t, e) {
          var r = this.distanceToPlane(t);
          return null === r ? null : this.at(r, e);
        },
        intersectsPlane: function (t) {
          var e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0;
        },
        intersectBox: function (t, e) {
          var r,
            i,
            n,
            a,
            s,
            o,
            h = 1 / this.direction.x,
            u = 1 / this.direction.y,
            c = 1 / this.direction.z,
            l = this.origin;
          return (
            h >= 0
              ? ((r = (t.min.x - l.x) * h), (i = (t.max.x - l.x) * h))
              : ((r = (t.max.x - l.x) * h), (i = (t.min.x - l.x) * h)),
            u >= 0
              ? ((n = (t.min.y - l.y) * u), (a = (t.max.y - l.y) * u))
              : ((n = (t.max.y - l.y) * u), (a = (t.min.y - l.y) * u)),
            r > a || n > i
              ? null
              : ((n > r || r != r) && (r = n),
                (a < i || i != i) && (i = a),
                c >= 0
                  ? ((s = (t.min.z - l.z) * c), (o = (t.max.z - l.z) * c))
                  : ((s = (t.max.z - l.z) * c), (o = (t.min.z - l.z) * c)),
                r > o || s > i
                  ? null
                  : ((s > r || r != r) && (r = s),
                    (o < i || i != i) && (i = o),
                    i < 0 ? null : this.at(r >= 0 ? r : i, e)))
          );
        },
        intersectsBox:
          ((ce = new st.a()),
          function (t) {
            return null !== this.intersectBox(t, ce);
          }),
        intersectTriangle: (function () {
          var t = new st.a(),
            e = new st.a(),
            r = new st.a(),
            i = new st.a();
          return function (n, a, s, o, h) {
            e.subVectors(a, n), r.subVectors(s, n), i.crossVectors(e, r);
            var u,
              c = this.direction.dot(i);
            if (c > 0) {
              if (o) return null;
              u = 1;
            } else {
              if (!(c < 0)) return null;
              (u = -1), (c = -c);
            }
            t.subVectors(this.origin, n);
            var l = u * this.direction.dot(r.crossVectors(t, r));
            if (l < 0) return null;
            var p = u * this.direction.dot(e.cross(t));
            if (p < 0) return null;
            if (l + p > c) return null;
            var d = -u * t.dot(i);
            return d < 0 ? null : this.at(d / c, h);
          };
        })(),
        applyMatrix4: function (t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        },
        equals: function (t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        },
      }),
      Object.assign(be.prototype, {
        set: function (t, e) {
          return this.start.copy(t), this.end.copy(e), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.start.copy(t.start), this.end.copy(t.end), this;
        },
        getCenter: function (t) {
          return (t || new st.a())
            .addVectors(this.start, this.end)
            .multiplyScalar(0.5);
        },
        delta: function (t) {
          return (t || new st.a()).subVectors(this.end, this.start);
        },
        distanceSq: function () {
          return this.start.distanceToSquared(this.end);
        },
        distance: function () {
          return this.start.distanceTo(this.end);
        },
        at: function (t, e) {
          var r = e || new st.a();
          return this.delta(r).multiplyScalar(t).add(this.start);
        },
        closestPointToPointParameter:
          ((fe = new st.a()),
          (me = new st.a()),
          function (t, e) {
            fe.subVectors(t, this.start), me.subVectors(this.end, this.start);
            var r = me.dot(me),
              i = me.dot(fe) / r;
            return e && (i = c.a.clamp(i, 0, 1)), i;
          }),
        closestPointToPoint: function (t, e, r) {
          var i = this.closestPointToPointParameter(t, e),
            n = r || new st.a();
          return this.delta(n).multiplyScalar(i).add(this.start);
        },
        applyMatrix4: function (t) {
          return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        },
        equals: function (t) {
          return t.start.equals(this.start) && t.end.equals(this.end);
        },
      }),
      Object.assign(we, {
        normal:
          ((ge = new st.a()),
          function (t, e, r, i) {
            var n = i || new st.a();
            n.subVectors(r, e), ge.subVectors(t, e), n.cross(ge);
            var a = n.lengthSq();
            return a > 0 ? n.multiplyScalar(1 / Math.sqrt(a)) : n.set(0, 0, 0);
          }),
        barycoordFromPoint: (function () {
          var t = new st.a(),
            e = new st.a(),
            r = new st.a();
          return function (i, n, a, s, o) {
            t.subVectors(s, n), e.subVectors(a, n), r.subVectors(i, n);
            var h = t.dot(t),
              u = t.dot(e),
              c = t.dot(r),
              l = e.dot(e),
              p = e.dot(r),
              d = h * l - u * u,
              f = o || new st.a();
            if (0 === d) return f.set(-2, -1, -1);
            var m = 1 / d,
              g = (l * c - u * p) * m,
              y = (h * p - u * c) * m;
            return f.set(1 - g - y, y, g);
          };
        })(),
        containsPoint: (function () {
          var t = new st.a();
          return function (e, r, i, n) {
            var a = we.barycoordFromPoint(e, r, i, n, t);
            return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1;
          };
        })(),
      }),
      Object.assign(we.prototype, {
        set: function (t, e, r) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(r), this;
        },
        setFromPointsAndIndices: function (t, e, r, i) {
          return this.a.copy(t[e]), this.b.copy(t[r]), this.c.copy(t[i]), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        },
        area: (function () {
          var t = new st.a(),
            e = new st.a();
          return function () {
            return (
              t.subVectors(this.c, this.b),
              e.subVectors(this.a, this.b),
              0.5 * t.cross(e).length()
            );
          };
        })(),
        midpoint: function (t) {
          return (t || new st.a())
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
        },
        normal: function (t) {
          return we.normal(this.a, this.b, this.c, t);
        },
        plane: function (t) {
          return (t || new Mt()).setFromCoplanarPoints(this.a, this.b, this.c);
        },
        barycoordFromPoint: function (t, e) {
          return we.barycoordFromPoint(t, this.a, this.b, this.c, e);
        },
        containsPoint: function (t) {
          return we.containsPoint(t, this.a, this.b, this.c);
        },
        closestPointToPoint: (function () {
          var t = new Mt(),
            e = [new be(), new be(), new be()],
            r = new st.a(),
            i = new st.a();
          return function (n, a) {
            var s = a || new st.a(),
              o = 1 / 0;
            if (
              (t.setFromCoplanarPoints(this.a, this.b, this.c),
              t.projectPoint(n, r),
              !0 === this.containsPoint(r))
            )
              s.copy(r);
            else {
              e[0].set(this.a, this.b),
                e[1].set(this.b, this.c),
                e[2].set(this.c, this.a);
              for (var h = 0; h < e.length; h++) {
                e[h].closestPointToPoint(r, !0, i);
                var u = r.distanceToSquared(i);
                u < o && ((o = u), s.copy(i));
              }
            }
            return s;
          };
        })(),
        equals: function (t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        },
      }),
      (Me.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: Me,
        isMesh: !0,
        setDrawMode: function (t) {
          this.drawMode = t;
        },
        copy: function (t) {
          return (
            zt.prototype.copy.call(this, t), (this.drawMode = t.drawMode), this
          );
        },
        updateMorphTargets: function () {
          var t,
            e,
            r,
            i = this.geometry;
          if (void 0 !== i)
            if (i.isBufferGeometry) {
              var n = i.morphAttributes,
                a = Object.keys(n);
              if (a.length > 0) {
                var s = n[a[0]];
                if (void 0 !== s)
                  for (
                    this.morphTargetInfluences = [],
                      this.morphTargetDictionary = {},
                      t = 0,
                      e = s.length;
                    t < e;
                    t++
                  )
                    (r = s[t].name || String(t)),
                      this.morphTargetInfluences.push(0),
                      (this.morphTargetDictionary[r] = t);
              }
            } else {
              var o = i.morphTargets;
              if (void 0 !== o && o.length > 0)
                for (
                  this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {},
                    t = 0,
                    e = o.length;
                  t < e;
                  t++
                )
                  (r = o[t].name || String(t)),
                    this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[r] = t);
            }
        },
        raycast: (function () {
          var t = new y.a(),
            e = new xe(),
            r = new bt(),
            i = new st.a(),
            n = new st.a(),
            a = new st.a(),
            s = new st.a(),
            o = new st.a(),
            h = new st.a(),
            c = new l.a(),
            p = new l.a(),
            d = new l.a(),
            f = new st.a(),
            m = new st.a(),
            g = new st.a();
          function v(t, e, r, i, n, a, s) {
            return (
              we.barycoordFromPoint(t, e, r, i, f),
              n.multiplyScalar(f.x),
              a.multiplyScalar(f.y),
              s.multiplyScalar(f.z),
              n.add(a).add(s),
              n.clone()
            );
          }
          function x(t, e, r, i, n, a, s, o) {
            if (
              null ===
              (e.side === u.BackSide
                ? i.intersectTriangle(s, a, n, !0, o)
                : i.intersectTriangle(n, a, s, e.side !== u.DoubleSide, o))
            )
              return null;
            g.copy(o), g.applyMatrix4(t.matrixWorld);
            var h = r.ray.origin.distanceTo(g);
            return h < r.near || h > r.far
              ? null
              : { distance: h, point: g.clone(), object: t };
          }
          function b(t, e, r, s, o, h, u, l) {
            i.fromBufferAttribute(s, h),
              n.fromBufferAttribute(s, u),
              a.fromBufferAttribute(s, l);
            var f = x(t, t.material, e, r, i, n, a, m);
            return (
              f &&
                (o &&
                  (c.fromBufferAttribute(o, h),
                  p.fromBufferAttribute(o, u),
                  d.fromBufferAttribute(o, l),
                  (f.uv = v(m, i, n, a, c, p, d))),
                (f.face = new It(h, u, l, we.normal(i, n, a))),
                (f.faceIndex = h)),
              f
            );
          }
          return function (u, l) {
            var f,
              g = this.geometry,
              y = this.material,
              w = this.matrixWorld;
            if (
              void 0 !== y &&
              (null === g.boundingSphere && g.computeBoundingSphere(),
              r.copy(g.boundingSphere),
              r.applyMatrix4(w),
              !1 !== u.ray.intersectsSphere(r) &&
                (t.getInverse(w),
                e.copy(u.ray).applyMatrix4(t),
                null === g.boundingBox ||
                  !1 !== e.intersectsBox(g.boundingBox)))
            )
              if (g.isBufferGeometry) {
                var M,
                  T,
                  S,
                  _,
                  E,
                  A = g.index,
                  R = g.attributes.position,
                  P = g.attributes.uv;
                if (null !== A)
                  for (_ = 0, E = A.count; _ < E; _ += 3)
                    (M = A.getX(_)),
                      (T = A.getX(_ + 1)),
                      (S = A.getX(_ + 2)),
                      (f = b(this, u, e, R, P, M, T, S)) &&
                        ((f.faceIndex = Math.floor(_ / 3)), l.push(f));
                else
                  for (_ = 0, E = R.count; _ < E; _ += 3)
                    (f = b(
                      this,
                      u,
                      e,
                      R,
                      P,
                      (M = _),
                      (T = _ + 1),
                      (S = _ + 2)
                    )) && ((f.index = M), l.push(f));
              } else if (g.isGeometry) {
                var C,
                  O,
                  F,
                  L,
                  z = Array.isArray(y),
                  B = g.vertices,
                  U = g.faces,
                  N = g.faceVertexUvs[0];
                N.length > 0 && (L = N);
                for (var D = 0, I = U.length; D < I; D++) {
                  var G = U[D],
                    k = z ? y[G.materialIndex] : y;
                  if (void 0 !== k) {
                    if (
                      ((C = B[G.a]),
                      (O = B[G.b]),
                      (F = B[G.c]),
                      !0 === k.morphTargets)
                    ) {
                      var W = g.morphTargets,
                        V = this.morphTargetInfluences;
                      i.set(0, 0, 0), n.set(0, 0, 0), a.set(0, 0, 0);
                      for (var j = 0, X = W.length; j < X; j++) {
                        var q = V[j];
                        if (0 !== q) {
                          var K = W[j].vertices;
                          i.addScaledVector(s.subVectors(K[G.a], C), q),
                            n.addScaledVector(o.subVectors(K[G.b], O), q),
                            a.addScaledVector(h.subVectors(K[G.c], F), q);
                        }
                      }
                      i.add(C), n.add(O), a.add(F), (C = i), (O = n), (F = a);
                    }
                    if ((f = x(this, k, u, e, C, O, F, m))) {
                      if (L && L[D]) {
                        var H = L[D];
                        c.copy(H[0]),
                          p.copy(H[1]),
                          d.copy(H[2]),
                          (f.uv = v(m, C, O, F, c, p, d));
                      }
                      (f.face = G), (f.faceIndex = D), l.push(f);
                    }
                  }
                }
              }
          };
        })(),
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      }));
    var Ne = 0;
    function De(t, e, r, i, n, a) {
      Date.now();
      var s = t.context,
        o = s.createProgram();
      i.isRawShaderMaterial ||
        console.error(
          "only RawShaderMaterials supported in Sky Castle Render Kit"
        );
      var h = Ue(s, s.VERTEX_SHADER, n.vertexShader),
        u = Ue(s, s.FRAGMENT_SHADER, n.fragmentShader);
      s.attachShader(o, h),
        s.attachShader(o, u),
        void 0 !== i.index0AttributeName
          ? s.bindAttribLocation(o, 0, i.index0AttributeName)
          : !0 === a.morphTargets && s.bindAttribLocation(o, 0, "position"),
        s.linkProgram(o);
      var c,
        l,
        p = s.getProgramInfoLog(o),
        d = s.getShaderInfoLog(h),
        f = s.getShaderInfoLog(u),
        m = (Date.now(), !0),
        g = !0,
        y = function () {
          var t = void 0;
          try {
            t = JSON.parse(r).shaderName;
          } catch (t) {}
          return t || "unnamed shader";
        };
      if (!1 === s.getProgramParameter(o, s.LINK_STATUS)) {
        m = !1;
        var v =
          "RK.WebGLProgram: ".concat(y(), ": shader error: ") +
          s.getError() +
          "gl.VALIDATE_STATUS" +
          s.getProgramParameter(o, s.VALIDATE_STATUS) +
          "gl.getProgramInfoLog" +
          p +
          d +
          f;
        console.error(v), t.logShaderError(v);
      } else if ("" !== p.replace(/ /g, "")) {
        var x = "RK.WebGLProgram: ".concat(y(), ": gl.getProgramInfoLog()") + p;
        console.warn(x), t.logShaderWarning(x);
      } else ("" !== d && "" !== f) || (g = !1);
      return (
        g &&
          (this.diagnostics = {
            runnable: m,
            material: i,
            programLog: p,
            vertexShader: { log: d },
            fragmentShader: { log: f },
          }),
        s.deleteShader(h),
        s.deleteShader(u),
        (this.getUniforms = function () {
          return void 0 === c && (c = new nt(s, o, t)), c;
        }),
        (this.getAttributes = function () {
          return (
            void 0 === l &&
              (l = (function (t, e, r) {
                for (
                  var i = {},
                    n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES),
                    a = 0;
                  a < n;
                  a++
                ) {
                  var s = t.getActiveAttrib(e, a).name;
                  i[s] = t.getAttribLocation(e, s);
                }
                return i;
              })(s, o)),
            l
          );
        }),
        (this.destroy = function () {
          s.deleteProgram(o), (this.program = void 0);
        }),
        Object.defineProperties(this, {
          uniforms: {
            get: function () {
              return (
                console.warn(
                  "RK.WebGLProgram: .uniforms is now .getUniforms()."
                ),
                this.getUniforms()
              );
            },
          },
          attributes: {
            get: function () {
              return (
                console.warn(
                  "RK.WebGLProgram: .attributes is now .getAttributes()."
                ),
                this.getAttributes()
              );
            },
          },
        }),
        (this.id = Ne++),
        (this.code = r),
        (this.usedTimes = 1),
        (this.program = o),
        (this.vertexShader = h),
        (this.fragmentShader = u),
        this
      );
    }
    function Ie(t, e, r) {
      var i = [],
        n = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "phong",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
        },
        a = [
          "precision",
          "supportsVertexTextures",
          "map",
          "mapEncoding",
          "envMap",
          "envMapMode",
          "envMapEncoding",
          "lightMap",
          "aoMap",
          "emissiveMap",
          "emissiveMapEncoding",
          "bumpMap",
          "normalMap",
          "displacementMap",
          "specularMap",
          "roughnessMap",
          "metalnessMap",
          "gradientMap",
          "alphaMap",
          "combine",
          "vertexColors",
          "fog",
          "useFog",
          "fogExp",
          "flatShading",
          "sizeAttenuation",
          "logarithmicDepthBuffer",
          "skinning",
          "maxBones",
          "useVertexTexture",
          "morphTargets",
          "morphNormals",
          "maxMorphTargets",
          "maxMorphNormals",
          "premultipliedAlpha",
          "numDirLights",
          "numPointLights",
          "numSpotLights",
          "numHemiLights",
          "numEnvLights",
          "numRectAreaLights",
          "shadowMapEnabled",
          "shadowMapType",
          "toneMapping",
          "physicallyCorrectLights",
          "alphaTest",
          "doubleSided",
          "flipSided",
          "numClippingPlanes",
          "numClipIntersection",
          "depthPacking",
          "dithering",
        ];
      function s(t, e) {
        var r;
        return (
          t
            ? t.isTexture
              ? (r = t.encoding)
              : t.isWebGLRenderTarget &&
                (console.warn(
                  "RK.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
                ),
                (r = t.texture.encoding))
            : (r = u.LinearEncoding),
          r === u.LinearEncoding && e && (r = u.GammaEncoding),
          r
        );
      }
      (this.getParameters = function (e, i, a, o, h, c, l) {
        var p = n[e.type],
          d = l.isSkinnedMesh ? 1024 : 0,
          f = r.precision;
        null !== e.precision &&
          (f = r.getMaxPrecision(e.precision)) !== e.precision &&
          console.warn(
            "RK.WebGLProgram.getParameters:",
            e.precision,
            "not supported, using",
            f,
            "instead."
          );
        var m = t.getRenderTarget();
        return {
          shaderID: p,
          precision: f,
          supportsVertexTextures: r.vertexTextures,
          outputEncoding: s(m ? m.texture : null, t.gammaOutput),
          map: !!e.map,
          mapEncoding: s(e.map, t.gammaInput),
          envMap: !!e.envMap,
          envMapMode: e.envMap && e.envMap.mapping,
          envMapEncoding: s(e.envMap, t.gammaInput),
          envMapCubeUV:
            !!e.envMap &&
            (e.envMap.mapping === u.CubeUVReflectionMapping ||
              e.envMap.mapping === u.CubeUVRefractionMapping),
          lightMap: !!e.lightMap,
          aoMap: !!e.aoMap,
          emissiveMap: !!e.emissiveMap,
          emissiveMapEncoding: s(e.emissiveMap, t.gammaInput),
          bumpMap: !!e.bumpMap,
          normalMap: !!e.normalMap,
          displacementMap: !!e.displacementMap,
          roughnessMap: !!e.roughnessMap,
          metalnessMap: !!e.metalnessMap,
          specularMap: !!e.specularMap,
          alphaMap: !!e.alphaMap,
          gradientMap: !!e.gradientMap,
          combine: e.combine,
          vertexColors: e.vertexColors,
          fog: !!o,
          useFog: e.fog,
          fogExp: o && o.isFogExp2,
          flatShading: e.flatShading,
          sizeAttenuation: e.sizeAttenuation,
          logarithmicDepthBuffer: r.logarithmicDepthBuffer,
          skinning: e.skinning && d > 0,
          maxBones: d,
          useVertexTexture: !0,
          morphTargets: e.morphTargets,
          morphNormals: e.morphNormals,
          maxMorphTargets: t.maxMorphTargets,
          maxMorphNormals: t.maxMorphNormals,
          numDirLights: i.directional.length,
          numPointLights: i.point.length,
          numSpotLights: i.spot.length,
          numRectAreaLights: i.rectArea.length,
          numHemiLights: i.hemi.length,
          numEnvLights: i.env.length,
          numClippingPlanes: h,
          numClipIntersection: c,
          dithering: e.dithering,
          shadowMapEnabled:
            t.shadowMap.enabled && l.receiveShadow && a.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: t.toneMapping,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: e.premultipliedAlpha,
          alphaTest: e.alphaTest,
          doubleSided: e.side === u.DoubleSide,
          flipSided: e.side === u.BackSide,
          depthPacking: void 0 !== e.depthPacking && e.depthPacking,
        };
      }),
        (this.getProgramCode = function (t, e) {
          return void 0 === t.hash
            ? (console.error(
                "material.hash is undefined for ",
                t,
                "using fallback."
              ),
              this.getProgramCodeOld(t, e))
            : t.hash;
        }),
        (this.getProgramCodeOld = function (e, r) {
          var i = [];
          if (
            (r.shaderID
              ? i.push(r.shaderID)
              : (i.push(e.fragmentShader), i.push(e.vertexShader)),
            void 0 !== e.defines)
          )
            for (var n in e.defines) i.push(n), i.push(e.defines[n]);
          for (var s = 0; s < a.length; s++) i.push(r[a[s]]);
          return (
            i.push(e.onBeforeCompile.toString()),
            i.push(t.gammaOutput),
            i.join()
          );
        }),
        (this.acquireProgram = function (r, n, a, s) {
          for (var o, h = 0, u = i.length; h < u; h++) {
            var c = i[h];
            if (c.code === s) {
              ++(o = c).usedTimes;
              break;
            }
          }
          return void 0 === o && ((o = new De(t, e, s, r, n, a)), i.push(o)), o;
        }),
        (this.releaseProgram = function (t) {
          if (0 == --t.usedTimes) {
            var e = i.indexOf(t);
            (i[e] = i[i.length - 1]), i.pop(), t.destroy();
          }
        }),
        (this.programs = i);
    }
    function Ge(t, e, r, i, n, a, s) {
      var o =
        "undefined" != typeof WebGL2RenderingContext &&
        t instanceof WebGL2RenderingContext;
      function h(t, e) {
        if (t.width > e || t.height > e) {
          var r = e / Math.max(t.width, t.height),
            i = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "canvas"
            );
          return (
            (i.width = Math.floor(t.width * r)),
            (i.height = Math.floor(t.height * r)),
            i
              .getContext("2d")
              .drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height),
            console.warn(
              "RK.WebGLRenderer: image is too big (" +
                t.width +
                "x" +
                t.height +
                "). Resized to " +
                i.width +
                "x" +
                i.height,
              t
            ),
            i
          );
        }
        return t;
      }
      function l(t) {
        return c.a.isPowerOfTwo(t.width) && c.a.isPowerOfTwo(t.height);
      }
      function p(t, e) {
        return (
          t.generateMipmaps &&
          e &&
          t.minFilter !== u.NearestFilter &&
          t.minFilter !== u.LinearFilter
        );
      }
      function d(e) {
        return e === u.NearestFilter ||
          e === u.NearestMipMapNearestFilter ||
          e === u.NearestMipMapLinearFilter
          ? t.NEAREST
          : t.LINEAR;
      }
      function f(e) {
        var r = e.target;
        r.removeEventListener("dispose", f),
          (function (e) {
            var r = i.get(e);
            if (e.image && r.__image__webglTextureCube)
              t.deleteTexture(r.__image__webglTextureCube);
            else {
              if (void 0 === r.__webglInit) return;
              t.deleteTexture(r.__webglTexture);
            }
            i.remove(e);
          })(r),
          s.textures--;
      }
      function m(e) {
        var r = e.target;
        r.removeEventListener("dispose", m),
          (function (e) {
            var r = i.get(e),
              n = i.get(e.texture);
            if (!e) return;
            void 0 !== n.__webglTexture && t.deleteTexture(n.__webglTexture);
            e.depthTexture && e.depthTexture.dispose();
            if (e.isWebGLRenderTargetCube)
              for (var a = 0; a < 6; a++)
                t.deleteFramebuffer(r.__webglFramebuffer[a]),
                  r.__webglDepthbuffer &&
                    t.deleteRenderbuffer(r.__webglDepthbuffer[a]);
            else
              t.deleteFramebuffer(r.__webglFramebuffer),
                r.__webglDepthbuffer &&
                  t.deleteRenderbuffer(r.__webglDepthbuffer);
            i.remove(e.texture), i.remove(e);
          })(r),
          s.textures--;
      }
      function g(e, d) {
        var m = i.get(e);
        if (e.version > 0 && m.__version !== e.version) {
          var g = e.image;
          if (void 0 === g)
            console.warn(
              "RK.WebGLRenderer: Texture marked for update but image is undefined",
              e
            );
          else {
            if (!1 !== g.complete)
              return void (function (e, i, d) {
                void 0 === e.__webglInit &&
                  ((e.__webglInit = !0),
                  i.addEventListener("dispose", f),
                  (e.__webglTexture = t.createTexture()),
                  s.textures++);
                r.activeTexture(t.TEXTURE0 + d),
                  r.bindTexture(t.TEXTURE_2D, e.__webglTexture),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY),
                  t.pixelStorei(
                    t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    i.premultiplyAlpha
                  ),
                  t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment);
                var m = h(i.image, n.maxTextureSize);
                (function (t) {
                  return (
                    t.wrapS !== u.ClampToEdgeWrapping ||
                    t.wrapT !== u.ClampToEdgeWrapping ||
                    (t.minFilter !== u.NearestFilter &&
                      t.minFilter !== u.LinearFilter)
                  );
                })(i) &&
                  !1 === l(m) &&
                  (m = (function (t) {
                    if (
                      t instanceof HTMLImageElement ||
                      t instanceof HTMLCanvasElement
                    ) {
                      var e = document.createElementNS(
                        "http://www.w3.org/1999/xhtml",
                        "canvas"
                      );
                      return (
                        (e.width = c.a.nearestPowerOfTwo(t.width)),
                        (e.height = c.a.nearestPowerOfTwo(t.height)),
                        e
                          .getContext("2d")
                          .drawImage(t, 0, 0, e.width, e.height),
                        console.warn(
                          "RK.WebGLRenderer: image is not power of two (" +
                            t.width +
                            "x" +
                            t.height +
                            "). Resized to " +
                            e.width +
                            "x" +
                            e.height,
                          t
                        ),
                        e
                      );
                    }
                    return t;
                  })(m));
                var g = l(m),
                  v = a.convert(i.format),
                  x = a.convert(i.type);
                y(t.TEXTURE_2D, i, g);
                var b,
                  w = i.mipmaps;
                if (i.isDepthTexture) {
                  var M = t.DEPTH_COMPONENT;
                  if (i.type === u.FloatType) {
                    if (!o)
                      throw new Error(
                        "Float Depth Texture only supported in WebGL2.0"
                      );
                    M = t.DEPTH_COMPONENT32F;
                  } else o && (M = t.DEPTH_COMPONENT16);
                  i.format === u.DepthFormat &&
                    M === t.DEPTH_COMPONENT &&
                    i.type !== u.UnsignedShortType &&
                    i.type !== u.UnsignedIntType &&
                    (console.warn(
                      "RK.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
                    ),
                    (i.type = u.UnsignedShortType),
                    (x = a.convert(i.type))),
                    i.format === u.DepthStencilFormat &&
                      ((M = t.DEPTH_STENCIL),
                      i.type !== u.UnsignedInt248Type &&
                        (console.warn(
                          "RK.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                        ),
                        (i.type = u.UnsignedInt248Type),
                        (x = a.convert(i.type)))),
                    r.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      M,
                      m.width,
                      m.height,
                      0,
                      v,
                      x,
                      null
                    );
                } else if (i.isDataTexture)
                  if (w.length > 0 && g) {
                    for (var T = 0, S = w.length; T < S; T++)
                      (b = w[T]),
                        r.texImage2D(
                          t.TEXTURE_2D,
                          T,
                          v,
                          b.width,
                          b.height,
                          0,
                          v,
                          x,
                          b.data
                        );
                    i.generateMipmaps = !1;
                  } else
                    r.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      v === t.RGBA && x === t.FLOAT && o ? t.RGBA32F : v,
                      m.width,
                      m.height,
                      0,
                      v,
                      x,
                      m.data
                    );
                else if (i.isCompressedTexture)
                  for (T = 0, S = w.length; T < S; T++)
                    (b = w[T]),
                      i.format !== u.RGBAFormat && i.format !== u.RGBFormat
                        ? r.getCompressedTextureFormats().indexOf(v) > -1
                          ? r.compressedTexImage2D(
                              t.TEXTURE_2D,
                              T,
                              v,
                              b.width,
                              b.height,
                              0,
                              b.data
                            )
                          : console.warn(
                              "RK.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                            )
                        : r.texImage2D(
                            t.TEXTURE_2D,
                            T,
                            v,
                            b.width,
                            b.height,
                            0,
                            v,
                            x,
                            b.data
                          );
                else if (w.length > 0 && g) {
                  for (T = 0, S = w.length; T < S; T++)
                    (b = w[T]), r.texImage2D(t.TEXTURE_2D, T, v, v, x, b);
                  i.generateMipmaps = !1;
                } else r.texImage2D(t.TEXTURE_2D, 0, v, v, x, m);
                p(i, g) && t.generateMipmap(t.TEXTURE_2D);
                (e.__version = i.version), i.onUpdate && i.onUpdate(i);
              })(m, e, d);
            console.warn(
              "RK.WebGLRenderer: Texture marked for update but image is incomplete",
              e
            );
          }
        }
        r.activeTexture(t.TEXTURE0 + d),
          r.bindTexture(t.TEXTURE_2D, m.__webglTexture);
      }
      function y(r, s, o) {
        var h;
        if (
          (o
            ? (t.texParameteri(r, t.TEXTURE_WRAP_S, a.convert(s.wrapS)),
              t.texParameteri(r, t.TEXTURE_WRAP_T, a.convert(s.wrapT)),
              t.texParameteri(r, t.TEXTURE_MAG_FILTER, a.convert(s.magFilter)),
              t.texParameteri(r, t.TEXTURE_MIN_FILTER, a.convert(s.minFilter)))
            : (t.texParameteri(r, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
              t.texParameteri(r, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
              (s.wrapS === u.ClampToEdgeWrapping &&
                s.wrapT === u.ClampToEdgeWrapping) ||
                console.warn(
                  "RK.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to RK.ClampToEdgeWrapping.",
                  s
                ),
              t.texParameteri(r, t.TEXTURE_MAG_FILTER, d(s.magFilter)),
              t.texParameteri(r, t.TEXTURE_MIN_FILTER, d(s.minFilter)),
              s.minFilter !== u.NearestFilter &&
                s.minFilter !== u.LinearFilter &&
                console.warn(
                  "RK.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to RK.NearestFilter or RK.LinearFilter.",
                  s
                )),
          (h = e.get("EXT_texture_filter_anisotropic")))
        ) {
          if (
            s.type === u.FloatType &&
            null === e.get("OES_texture_float_linear")
          )
            return;
          if (
            s.type === u.HalfFloatType &&
            null === e.get("OES_texture_half_float_linear")
          )
            return;
          (s.anisotropy > 1 || i.get(s).__currentAnisotropy) &&
            (t.texParameterf(
              r,
              h.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(s.anisotropy, n.getMaxAnisotropy())
            ),
            (i.get(s).__currentAnisotropy = s.anisotropy));
        }
      }
      function v(e, n, s, o) {
        var h = a.convert(n.texture.format),
          u = a.convert(n.texture.type);
        r.texImage2D(o, 0, h, n.width, n.height, 0, h, u, null),
          t.bindFramebuffer(t.FRAMEBUFFER, e),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            s,
            o,
            i.get(n.texture).__webglTexture,
            0
          ),
          t.bindFramebuffer(t.FRAMEBUFFER, null);
      }
      function x(e, r) {
        t.bindRenderbuffer(t.RENDERBUFFER, e),
          r.depthBuffer && !r.stencilBuffer
            ? (t.renderbufferStorage(
                t.RENDERBUFFER,
                t.DEPTH_COMPONENT16,
                r.width,
                r.height
              ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.RENDERBUFFER,
                e
              ))
            : r.depthBuffer && r.stencilBuffer
            ? (t.renderbufferStorage(
                t.RENDERBUFFER,
                t.DEPTH_STENCIL,
                r.width,
                r.height
              ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.RENDERBUFFER,
                e
              ))
            : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, r.width, r.height),
          t.bindRenderbuffer(t.RENDERBUFFER, null);
      }
      function b(e) {
        var r = i.get(e),
          n = !0 === e.isWebGLRenderTargetCube;
        if (e.depthTexture) {
          if (n)
            throw new Error(
              "target.depthTexture not supported in Cube render targets"
            );
          !(function (e, r) {
            if (r && r.isWebGLRenderTargetCube)
              throw new Error(
                "Depth Texture with cube render targets is not supported"
              );
            if (
              (t.bindFramebuffer(t.FRAMEBUFFER, e),
              !r.depthTexture || !r.depthTexture.isDepthTexture)
            )
              throw new Error(
                "renderTarget.depthTexture must be an instance of RK.DepthTexture"
              );
            (i.get(r.depthTexture).__webglTexture &&
              r.depthTexture.image.width === r.width &&
              r.depthTexture.image.height === r.height) ||
              ((r.depthTexture.image.width = r.width),
              (r.depthTexture.image.height = r.height),
              (r.depthTexture.needsUpdate = !0)),
              g(r.depthTexture, 0);
            var n = i.get(r.depthTexture).__webglTexture;
            if (r.depthTexture.format === u.DepthFormat)
              t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                n,
                0
              );
            else {
              if (r.depthTexture.format !== u.DepthStencilFormat)
                throw new Error("Unknown depthTexture format");
              t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                n,
                0
              );
            }
          })(r.__webglFramebuffer, e);
        } else if (n) {
          r.__webglDepthbuffer = [];
          for (var a = 0; a < 6; a++)
            t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[a]),
              (r.__webglDepthbuffer[a] = t.createRenderbuffer()),
              x(r.__webglDepthbuffer[a], e);
        } else
          t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
            (r.__webglDepthbuffer = t.createRenderbuffer()),
            x(r.__webglDepthbuffer, e);
        t.bindFramebuffer(t.FRAMEBUFFER, null);
      }
      (this.setTexture2D = g),
        (this.setTextureCube = function (e, o) {
          var c = i.get(e);
          if (6 === e.image.length)
            if (e.version > 0 && c.__version !== e.version) {
              c.__image__webglTextureCube ||
                (e.addEventListener("dispose", f),
                (c.__image__webglTextureCube = t.createTexture()),
                s.textures++),
                r.activeTexture(t.TEXTURE0 + o),
                r.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube),
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
              for (
                var d = e && e.isCompressedTexture,
                  m = e.image[0] && e.image[0].isDataTexture,
                  g = [],
                  v = 0;
                v < 6;
                v++
              )
                g[v] =
                  d || m
                    ? m
                      ? e.image[v].image
                      : e.image[v]
                    : h(e.image[v], n.maxCubemapSize);
              var x = l(g[0]),
                b = a.convert(e.format),
                w = a.convert(e.type);
              y(t.TEXTURE_CUBE_MAP, e, x);
              for (v = 0; v < 6; v++)
                if (d)
                  for (var M, T = g[v].mipmaps, S = 0, _ = T.length; S < _; S++)
                    (M = T[S]),
                      e.format !== u.RGBAFormat && e.format !== u.RGBFormat
                        ? r.getCompressedTextureFormats().indexOf(b) > -1
                          ? r.compressedTexImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + v,
                              S,
                              b,
                              M.width,
                              M.height,
                              0,
                              M.data
                            )
                          : console.warn(
                              "RK.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : r.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + v,
                            S,
                            b,
                            M.width,
                            M.height,
                            0,
                            b,
                            w,
                            M.data
                          );
                else
                  m
                    ? r.texImage2D(
                        t.TEXTURE_CUBE_MAP_POSITIVE_X + v,
                        0,
                        b,
                        g[v].width,
                        g[v].height,
                        0,
                        b,
                        w,
                        g[v].data
                      )
                    : r.texImage2D(
                        t.TEXTURE_CUBE_MAP_POSITIVE_X + v,
                        0,
                        b,
                        b,
                        w,
                        g[v]
                      );
              p(e, x) && t.generateMipmap(t.TEXTURE_CUBE_MAP),
                (c.__version = e.version),
                e.onUpdate && e.onUpdate(e);
            } else
              r.activeTexture(t.TEXTURE0 + o),
                r.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube);
        }),
        (this.setTextureCubeDynamic = function (e, n) {
          r.activeTexture(t.TEXTURE0 + n),
            r.bindTexture(t.TEXTURE_CUBE_MAP, i.get(e).__webglTexture);
        }),
        (this.setupRenderTarget = function (e) {
          var n = i.get(e),
            a = i.get(e.texture);
          e.addEventListener("dispose", m),
            (a.__webglTexture = t.createTexture()),
            s.textures++;
          var o = !0 === e.isWebGLRenderTargetCube,
            h = l(e);
          if (o) {
            n.__webglFramebuffer = [];
            for (var u = 0; u < 6; u++)
              n.__webglFramebuffer[u] = t.createFramebuffer();
          } else n.__webglFramebuffer = t.createFramebuffer();
          if (o) {
            r.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture),
              y(t.TEXTURE_CUBE_MAP, e.texture, h);
            for (u = 0; u < 6; u++)
              v(
                n.__webglFramebuffer[u],
                e,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + u
              );
            p(e.texture, h) && t.generateMipmap(t.TEXTURE_CUBE_MAP),
              r.bindTexture(t.TEXTURE_CUBE_MAP, null);
          } else
            r.bindTexture(t.TEXTURE_2D, a.__webglTexture),
              y(t.TEXTURE_2D, e.texture, h),
              v(n.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D),
              p(e.texture, h) && t.generateMipmap(t.TEXTURE_2D),
              r.bindTexture(t.TEXTURE_2D, null);
          e.depthBuffer && b(e);
        }),
        (this.updateRenderTargetMipmap = function (e) {
          var n = e.texture;
          if (p(n, l(e))) {
            var a = e.isWebGLRenderTargetCube
                ? t.TEXTURE_CUBE_MAP
                : t.TEXTURE_2D,
              s = i.get(n).__webglTexture;
            r.bindTexture(a, s), t.generateMipmap(a), r.bindTexture(a, null);
          }
        });
    }
    function ke() {
      var t = {};
      return {
        get: function (e) {
          var r = e.uuid,
            i = t[r];
          return void 0 === i && ((i = {}), (t[r] = i)), i;
        },
        remove: function (e) {
          delete t[e.uuid];
        },
        clear: function () {
          t = {};
        },
      };
    }
    function We(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = new Array(t.length); e < t.length; e++)
              r[e] = t[e];
            return r;
          }
        })(t) ||
        (function (t) {
          if (
            Symbol.iterator in Object(t) ||
            "[object Arguments]" === Object.prototype.toString.call(t)
          )
            return Array.from(t);
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function Ve(t, e, r) {
      var i = new (function () {
          var e = !1,
            r = new f(),
            i = null,
            n = null,
            a = null,
            s = null,
            o = new f(0, 0, 0, 0);
          return {
            setMask: function (t) {
              this.setMaskChannels(t, t, t, t);
            },
            setMaskChannels: function (r, o, h, u) {
              (i !== r || n !== o || a !== h || s !== u) &&
                !e &&
                (t.colorMask(r, o, h, u), (i = r), (n = o), (a = h), (s = u));
            },
            setLocked: function (t) {
              e = t;
            },
            setClear: function (e, i, n, a, s) {
              !0 === s && ((e *= a), (i *= a), (n *= a)),
                r.set(e, i, n, a),
                !1 === o.equals(r) && (t.clearColor(e, i, n, a), o.copy(r));
            },
            reset: function () {
              (e = !1), (currentColorMask = null), o.set(-1, 0, 0, 0);
            },
          };
        })(),
        n = new (function () {
          var e = !1,
            r = null,
            i = null,
            n = null;
          return {
            setTest: function (e) {
              e ? N(t.DEPTH_TEST) : D(t.DEPTH_TEST);
            },
            setMask: function (i) {
              r === i || e || (t.depthMask(i), (r = i));
            },
            setFunc: function (e) {
              if (i !== e) {
                if (e)
                  switch (e) {
                    case u.NeverDepth:
                      t.depthFunc(t.NEVER);
                      break;
                    case u.AlwaysDepth:
                      t.depthFunc(t.ALWAYS);
                      break;
                    case u.LessDepth:
                      t.depthFunc(t.LESS);
                      break;
                    case u.LessEqualDepth:
                      t.depthFunc(t.LEQUAL);
                      break;
                    case u.EqualDepth:
                      t.depthFunc(t.EQUAL);
                      break;
                    case u.GreaterEqualDepth:
                      t.depthFunc(t.GEQUAL);
                      break;
                    case u.GreaterDepth:
                      t.depthFunc(t.GREATER);
                      break;
                    case u.NotEqualDepth:
                      t.depthFunc(t.NOTEQUAL);
                      break;
                    default:
                      t.depthFunc(t.LEQUAL);
                  }
                else t.depthFunc(t.LEQUAL);
                i = e;
              }
            },
            setLocked: function (t) {
              e = t;
            },
            setClear: function (e) {
              n !== e && (t.clearDepth(e), (n = e));
            },
            reset: function () {
              (e = !1), (r = null), (i = null), (n = null);
            },
          };
        })(),
        a = new (function () {
          var e = !1,
            r = null,
            i = null,
            n = null,
            a = null,
            s = null,
            o = null,
            h = null,
            u = null;
          return {
            setTest: function (e) {
              e ? N(t.STENCIL_TEST) : D(t.STENCIL_TEST);
            },
            setMask: function (i) {
              r === i || e || (t.stencilMask(i), (r = i));
            },
            setFunc: function (e, r, s) {
              (i === e && n === r && a === s) ||
                (t.stencilFunc(e, r, s), (i = e), (n = r), (a = s));
            },
            setOp: function (e, r, i) {
              (s === e && o === r && h === i) ||
                (t.stencilOp(e, r, i), (s = e), (o = r), (h = i));
            },
            setLocked: function (t) {
              e = t;
            },
            setClear: function (e) {
              u !== e && (t.clearStencil(e), (u = e));
            },
            reset: function () {
              (e = !1),
                (r = null),
                (i = null),
                (n = null),
                (a = null),
                (s = null),
                (o = null),
                (h = null),
                (u = null);
            },
          };
        })(),
        s = t.getParameter(t.MAX_VERTEX_ATTRIBS),
        o = new Uint8Array(s),
        h = new Uint8Array(s),
        c = new Uint8Array(s),
        l = {},
        p = null,
        d = null,
        m = null,
        g = null,
        y = null,
        v = null,
        x = null,
        b = null,
        w = null,
        M = !1,
        T = null,
        S = null,
        _ = null,
        E = null,
        A = null,
        R = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        P = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),
        C = parseFloat(P) >= 1,
        O = null,
        F = {},
        L = new f(),
        z = new f();
      function B(e, r, i) {
        var n = new Uint8Array(4),
          a = t.createTexture();
        t.bindTexture(e, a),
          t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
          t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
        for (var s = 0; s < i; s++)
          t.texImage2D(r + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, n);
        return a;
      }
      var U = {};
      function N(e) {
        !0 !== l[e] && (t.enable(e), (l[e] = !0));
      }
      function D(e) {
        !1 !== l[e] && (t.disable(e), (l[e] = !1));
      }
      function I(e, i, n, a, s, o, h, c) {
        if (
          (e !== u.NoBlending ? N(t.BLEND) : D(t.BLEND), e !== u.CustomBlending)
        ) {
          if (e !== m || c !== M)
            switch (e) {
              case u.AdditiveBlending:
                c
                  ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                    t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE))
                  : (t.blendEquation(t.FUNC_ADD),
                    t.blendFunc(t.SRC_ALPHA, t.ONE));
                break;
              case u.SubtractiveBlending:
                c
                  ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.ZERO,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ONE_MINUS_SRC_ALPHA
                    ))
                  : (t.blendEquation(t.FUNC_ADD),
                    t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
                break;
              case u.MultiplyBlending:
                c
                  ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.SRC_COLOR,
                      t.ZERO,
                      t.SRC_ALPHA
                    ))
                  : (t.blendEquation(t.FUNC_ADD),
                    t.blendFunc(t.ZERO, t.SRC_COLOR));
                break;
              default:
                c
                  ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                    t.blendFuncSeparate(
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    ))
                  : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                    t.blendFuncSeparate(
                      t.SRC_ALPHA,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    ));
            }
          (g = null),
            (y = null),
            (v = null),
            (x = null),
            (b = null),
            (w = null);
        } else
          (s = s || i),
            (o = o || n),
            (h = h || a),
            (i === g && s === x) ||
              (t.blendEquationSeparate(r.convert(i), r.convert(s)),
              (g = i),
              (x = s)),
            (n === y && a === v && o === b && h === w) ||
              (t.blendFuncSeparate(
                r.convert(n),
                r.convert(a),
                r.convert(o),
                r.convert(h)
              ),
              (y = n),
              (v = a),
              (b = o),
              (w = h));
        (m = e), (M = c);
      }
      function G(e) {
        T !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (T = e));
      }
      function k(e) {
        e !== u.CullFaceNone
          ? (N(t.CULL_FACE),
            e !== S &&
              (e === u.CullFaceBack
                ? t.cullFace(t.BACK)
                : e === u.CullFaceFront
                ? t.cullFace(t.FRONT)
                : t.cullFace(t.FRONT_AND_BACK)))
          : D(t.CULL_FACE),
          (S = e);
      }
      function W(e, r, i) {
        e
          ? (N(t.POLYGON_OFFSET_FILL),
            (E === r && A === i) || (t.polygonOffset(r, i), (E = r), (A = i)))
          : D(t.POLYGON_OFFSET_FILL);
      }
      function V(e) {
        void 0 === e && (e = t.TEXTURE0 + R - 1),
          O !== e && (t.activeTexture(e), (O = e));
      }
      return (
        (U[t.TEXTURE_2D] = B(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
        (U[t.TEXTURE_CUBE_MAP] = B(
          t.TEXTURE_CUBE_MAP,
          t.TEXTURE_CUBE_MAP_POSITIVE_X,
          6
        )),
        i.setClear(0, 0, 0, 1),
        n.setClear(1),
        a.setClear(0),
        N(t.DEPTH_TEST),
        n.setFunc(u.LessEqualDepth),
        G(!1),
        k(u.CullFaceBack),
        N(t.CULL_FACE),
        N(t.BLEND),
        I(u.NormalBlending),
        {
          buffers: { color: i, depth: n, stencil: a },
          initAttributes: function () {
            for (var t = 0, e = o.length; t < e; t++) o[t] = 0;
          },
          enableAttribute: function (r) {
            (o[r] = 1),
              0 === h[r] && (t.enableVertexAttribArray(r), (h[r] = 1)),
              0 !== c[r] &&
                (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(r, 0),
                (c[r] = 0));
          },
          enableAttributeAndDivisor: function (r, i) {
            (o[r] = 1),
              0 === h[r] && (t.enableVertexAttribArray(r), (h[r] = 1)),
              c[r] !== i &&
                (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(r, i),
                (c[r] = i));
          },
          disableUnusedAttributes: function () {
            for (var e = 0, r = h.length; e !== r; ++e)
              h[e] !== o[e] && (t.disableVertexAttribArray(e), (h[e] = 0));
          },
          enable: N,
          disable: D,
          getCompressedTextureFormats: function () {
            if (
              null === p &&
              ((p = []),
              e.get("WEBGL_compressed_texture_pvrtc") ||
                e.get("WEBGL_compressed_texture_s3tc") ||
                e.get("WEBGL_compressed_texture_etc1"))
            )
              for (
                var r = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), i = 0;
                i < r.length;
                i++
              )
                p.push(r[i]);
            return p;
          },
          useProgram: function (e) {
            return d !== e && (t.useProgram(e), (d = e), !0);
          },
          setBlending: I,
          setMaterial: function (e) {
            void 0 !== e.ckReverseWinding
              ? G(!!e.ckReverseWinding)
              : (e.side !== u.DoubleSide ? N(t.CULL_FACE) : D(t.CULL_FACE),
                G(e.side === u.BackSide)),
              !0 === e.transparent
                ? I(
                    e.blending,
                    e.blendEquation,
                    e.blendSrc,
                    e.blendDst,
                    e.blendEquationAlpha,
                    e.blendSrcAlpha,
                    e.blendDstAlpha,
                    e.premultipliedAlpha
                  )
                : I(u.NoBlending),
              n.setFunc(e.depthFunc),
              n.setTest(e.depthTest),
              n.setMask(e.depthWrite),
              e.colorWriteChannels
                ? i.setMaskChannels.apply(i, We(e.colorWriteChannels))
                : i.setMask(e.colorWrite),
              W(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits);
          },
          setFlipSided: G,
          setCullFace: k,
          setLineWidth: function (e) {
            e !== _ && (C && t.lineWidth(e), (_ = e));
          },
          setPolygonOffset: W,
          setScissorTest: function (e) {
            e ? N(t.SCISSOR_TEST) : D(t.SCISSOR_TEST);
          },
          activeTexture: V,
          bindTexture: function (e, r) {
            null === O && V();
            var i = F[O];
            void 0 === i &&
              ((i = { type: void 0, texture: void 0 }), (F[O] = i)),
              (i.type === e && i.texture === r) ||
                (t.bindTexture(e, r || U[e]), (i.type = e), (i.texture = r));
          },
          compressedTexImage2D: function () {
            try {
              t.compressedTexImage2D.apply(t, arguments);
            } catch (t) {
              console.error("RK.WebGLState:", t);
            }
          },
          texImage2D: function () {
            try {
              t.texImage2D.apply(t, arguments);
            } catch (t) {
              console.error("RK.WebGLState:", t);
            }
          },
          scissor: function (e) {
            !1 === L.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), L.copy(e));
          },
          viewport: function (e) {
            !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
          },
          reset: function () {
            for (var e = 0; e < h.length; e++)
              1 === h[e] && (t.disableVertexAttribArray(e), (h[e] = 0));
            (l = {}),
              (p = null),
              (O = null),
              (F = {}),
              (d = null),
              (m = null),
              (T = null),
              (S = null),
              i.reset(),
              n.reset(),
              a.reset();
          },
        }
      );
    }
    function je(t, e, r) {
      var i;
      function n(e) {
        if ("highp" === e) {
          if (
            t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)
              .precision > 0 &&
            t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
              .precision > 0
          )
            return "highp";
          e = "mediump";
        }
        return "mediump" === e &&
          t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)
            .precision > 0 &&
          t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
            .precision > 0
          ? "mediump"
          : "lowp";
      }
      var a = void 0 !== r.precision ? r.precision : "highp",
        s = n(a);
      s !== a &&
        (console.warn(
          "RK.WebGLRenderer:",
          a,
          "not supported, using",
          s,
          "instead."
        ),
        (a = s));
      var o = !0 === r.logarithmicDepthBuffer,
        h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
        u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        c = t.getParameter(t.MAX_TEXTURE_SIZE),
        l = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
        p = t.getParameter(t.MAX_VERTEX_ATTRIBS),
        d = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
        f = t.getParameter(t.MAX_VARYING_VECTORS),
        m = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
        g = u > 0,
        y = !!e.get("OES_texture_float");
      return {
        getMaxAnisotropy: function () {
          if (void 0 !== i) return i;
          var r = e.get("EXT_texture_filter_anisotropic");
          return (i =
            null !== r ? t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
        },
        getMaxPrecision: n,
        precision: a,
        logarithmicDepthBuffer: o,
        maxTextures: h,
        maxVertexTextures: u,
        maxTextureSize: c,
        maxCubemapSize: l,
        maxAttributes: p,
        maxVertexUniforms: d,
        maxVaryings: f,
        maxFragmentUniforms: m,
        vertexTextures: g,
        floatFragmentTextures: y,
        floatVertexTextures: g && y,
      };
    }
    function Xe(t) {
      var e = {};
      return {
        get: function (r) {
          if (void 0 !== e[r]) return e[r];
          var i;
          switch (r) {
            case "WEBGL_depth_texture":
              i =
                t.getExtension("WEBGL_depth_texture") ||
                t.getExtension("MOZ_WEBGL_depth_texture") ||
                t.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i =
                t.getExtension("EXT_texture_filter_anisotropic") ||
                t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i =
                t.getExtension("WEBGL_compressed_texture_s3tc") ||
                t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i =
                t.getExtension("WEBGL_compressed_texture_pvrtc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            case "WEBGL_compressed_texture_etc1":
              i = t.getExtension("WEBGL_compressed_texture_etc1");
              break;
            default:
              i = t.getExtension(r);
          }
          return (
            null === i &&
              console.warn(
                "RK.WebGLRenderer: " + r + " extension not supported."
              ),
            (e[r] = i),
            i
          );
        },
      };
    }
    function qe() {
      var t = this,
        e = null,
        r = 0,
        i = !1,
        n = !1,
        a = new Mt(),
        s = new wt(),
        o = { value: null, needsUpdate: !1 };
      function h() {
        o.value !== e && ((o.value = e), (o.needsUpdate = r > 0)),
          (t.numPlanes = r),
          (t.numIntersection = 0);
      }
      function u(e, r, i, n) {
        var h = null !== e ? e.length : 0,
          u = null;
        if (0 !== h) {
          if (((u = o.value), !0 !== n || null === u)) {
            var c = i + 4 * h,
              l = r.matrixWorldInverse;
            s.getNormalMatrix(l),
              (null === u || u.length < c) && (u = new Float32Array(c));
            for (var p = 0, d = i; p !== h; ++p, d += 4)
              a.copy(e[p]).applyMatrix4(l, s),
                a.normal.toArray(u, d),
                (u[d + 3] = a.constant);
          }
          (o.value = u), (o.needsUpdate = !0);
        }
        return (t.numPlanes = h), u;
      }
      (this.uniform = o),
        (this.numPlanes = 0),
        (this.numIntersection = 0),
        (this.init = function (t, n, a) {
          var s = 0 !== t.length || n || 0 !== r || i;
          return (i = n), (e = u(t, a, 0)), (r = t.length), s;
        }),
        (this.beginShadows = function () {
          (n = !0), u(null);
        }),
        (this.endShadows = function () {
          (n = !1), h();
        }),
        (this.setState = function (t, a, s, c, l, p) {
          if (!i || null === t || 0 === t.length || (n && !s))
            n ? u(null) : h();
          else {
            var d = n ? 0 : r,
              f = 4 * d,
              m = l.clippingState || null;
            (o.value = m), (m = u(t, c, f, p));
            for (var g = 0; g !== f; ++g) m[g] = e[g];
            (l.clippingState = m),
              (this.numIntersection = a ? this.numPlanes : 0),
              (this.numPlanes += d);
          }
        });
    }
    function Ke(t, e) {
      return {
        convert: function (r) {
          var i;
          if (r === u.RepeatWrapping) return t.REPEAT;
          if (r === u.ClampToEdgeWrapping) return t.CLAMP_TO_EDGE;
          if (r === u.MirroredRepeatWrapping) return t.MIRRORED_REPEAT;
          if (r === u.NearestFilter) return t.NEAREST;
          if (r === u.NearestMipMapNearestFilter)
            return t.NEAREST_MIPMAP_NEAREST;
          if (r === u.NearestMipMapLinearFilter) return t.NEAREST_MIPMAP_LINEAR;
          if (r === u.LinearFilter) return t.LINEAR;
          if (r === u.LinearMipMapNearestFilter) return t.LINEAR_MIPMAP_NEAREST;
          if (r === u.LinearMipMapLinearFilter) return t.LINEAR_MIPMAP_LINEAR;
          if (r === u.UnsignedByteType) return t.UNSIGNED_BYTE;
          if (r === u.UnsignedShort4444Type) return t.UNSIGNED_SHORT_4_4_4_4;
          if (r === u.UnsignedShort5551Type) return t.UNSIGNED_SHORT_5_5_5_1;
          if (r === u.UnsignedShort565Type) return t.UNSIGNED_SHORT_5_6_5;
          if (r === u.ByteType) return t.BYTE;
          if (r === u.ShortType) return t.SHORT;
          if (r === u.UnsignedShortType) return t.UNSIGNED_SHORT;
          if (r === u.IntType) return t.INT;
          if (r === u.UnsignedIntType) return t.UNSIGNED_INT;
          if (r === u.FloatType) return t.FLOAT;
          if (
            r === u.HalfFloatType &&
            null !== (i = e.get("OES_texture_half_float"))
          )
            return i.HALF_FLOAT_OES;
          if (r === u.AlphaFormat) return t.ALPHA;
          if (r === u.RGBFormat) return t.RGB;
          if (r === u.RGBAFormat) return t.RGBA;
          if (r === u.LuminanceFormat) return t.LUMINANCE;
          if (r === u.LuminanceAlphaFormat) return t.LUMINANCE_ALPHA;
          if (r === u.DepthFormat) return t.DEPTH_COMPONENT;
          if (r === u.DepthStencilFormat) return t.DEPTH_STENCIL;
          if (r === u.AddEquation) return t.FUNC_ADD;
          if (r === u.SubtractEquation) return t.FUNC_SUBTRACT;
          if (r === u.ReverseSubtractEquation) return t.FUNC_REVERSE_SUBTRACT;
          if (r === u.ZeroFactor) return t.ZERO;
          if (r === u.OneFactor) return t.ONE;
          if (r === u.SrcColorFactor) return t.SRC_COLOR;
          if (r === u.OneMinusSrcColorFactor) return t.ONE_MINUS_SRC_COLOR;
          if (r === u.SrcAlphaFactor) return t.SRC_ALPHA;
          if (r === u.OneMinusSrcAlphaFactor) return t.ONE_MINUS_SRC_ALPHA;
          if (r === u.DstAlphaFactor) return t.DST_ALPHA;
          if (r === u.OneMinusDstAlphaFactor) return t.ONE_MINUS_DST_ALPHA;
          if (r === u.DstColorFactor) return t.DST_COLOR;
          if (r === u.OneMinusDstColorFactor) return t.ONE_MINUS_DST_COLOR;
          if (r === u.SrcAlphaSaturateFactor) return t.SRC_ALPHA_SATURATE;
          if (
            (r === u.RGB_S3TC_DXT1_Format ||
              r === u.RGBA_S3TC_DXT1_Format ||
              r === u.RGBA_S3TC_DXT3_Format ||
              r === u.RGBA_S3TC_DXT5_Format) &&
            null !== (i = e.get("WEBGL_compressed_texture_s3tc"))
          ) {
            if (r === u.RGB_S3TC_DXT1_Format)
              return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (r === u.RGBA_S3TC_DXT1_Format)
              return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (r === u.RGBA_S3TC_DXT3_Format)
              return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (r === u.RGBA_S3TC_DXT5_Format)
              return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
          if (
            (r === u.RGB_PVRTC_4BPPV1_Format ||
              r === u.RGB_PVRTC_2BPPV1_Format ||
              r === u.RGBA_PVRTC_4BPPV1_Format ||
              r === u.RGBA_PVRTC_2BPPV1_Format) &&
            null !== (i = e.get("WEBGL_compressed_texture_pvrtc"))
          ) {
            if (r === u.RGB_PVRTC_4BPPV1_Format)
              return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (r === u.RGB_PVRTC_2BPPV1_Format)
              return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (r === u.RGBA_PVRTC_4BPPV1_Format)
              return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (r === u.RGBA_PVRTC_2BPPV1_Format)
              return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          }
          if (
            r === u.RGB_ETC1_Format &&
            null !== (i = e.get("WEBGL_compressed_texture_etc1"))
          )
            return i.COMPRESSED_RGB_ETC1_WEBGL;
          if (
            (r === u.MinEquation || r === u.MaxEquation) &&
            null !== (i = e.get("EXT_blend_minmax"))
          ) {
            if (r === u.MinEquation) return i.MIN_EXT;
            if (r === u.MaxEquation) return i.MAX_EXT;
          }
          return r === u.UnsignedInt248Type &&
            null !== (i = e.get("WEBGL_depth_texture"))
            ? i.UNSIGNED_INT_24_8_WEBGL
            : 0;
        },
      };
    }
    function He() {
      zt.call(this),
        (this.type = "Scene"),
        (this.background = null),
        (this.fog = null),
        (this.overrideMaterial = null),
        (this.autoUpdate = !0);
    }
    function Ye(t, e) {
      Me.call(this, t, e),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new y.a()),
        (this.bindMatrixInverse = new y.a());
    }
    function Ze(t, e) {}
    function Je() {
      zt.call(this),
        (this.type = "Bone"),
        (this.flip = !1),
        (this.flipOffset = new st.a()),
        (this.isUseful = !1);
    }
    function Qe(t) {
      ue.call(this),
        (this.type = "LineBasicMaterial"),
        (this.color = new Dt(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.lights = !1),
        this.setValues(t);
    }
    function $e(t, e) {
      tr.call(this, t, e), (this.type = "LineSegments");
    }
    function tr(t, e, r) {
      if (1 === r)
        return (
          console.warn(
            "RK.Line: parameter RK.LinePieces no longer supported. Created RK.LineSegments instead."
          ),
          new $e(t, e)
        );
      zt.call(this),
        (this.type = "Line"),
        (this.geometry = void 0 !== t ? t : new ie()),
        (this.material =
          void 0 !== e ? e : new Qe({ color: 16777215 * Math.random() }));
    }
    function er() {
      zt.call(this), (this.type = "Group");
    }
    function rr(t, e, r, i) {
      Bt.call(this),
        (this.type = "PerspectiveCamera"),
        (this.fov = void 0 !== t ? t : 50),
        (this.zoom = 1),
        (this.near = void 0 !== r ? r : 0.1),
        (this.far = void 0 !== i ? i : 2e3),
        (this.focus = 10),
        (this.aspect = void 0 !== e ? e : 1),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    function ir(t, e, r) {
      Me.call(this, t, e),
        (this.type = "Reflector"),
        (r = r || {}),
        (this.scope = this),
        (this.color = r.color ? new Dt(r.color) : new Dt(8355711)),
        this.material.setUniform("color", this.color),
        (this.reflectivity = r.reflectivity ? r.reflectivity : 0.5),
        this.material.setUniform("reflectivity", this.reflectivity),
        (this.clipBias = r.clipBias || 0),
        (this.recursion = void 0 !== r.recursion ? r.recursion : 0);
      u.LinearFilter, u.LinearFilter, u.RGBFormat;
      this.virtualCamera = void 0;
    }
    function nr(t, e, r, i, n, a, s, o, h, c, l, p) {
      d.call(this, null, a, s, o, h, c, i, n, l, p),
        (this.image = { data: t, width: e, height: r }),
        (this.magFilter = void 0 !== h ? h : u.NearestFilter),
        (this.minFilter = void 0 !== c ? c : u.NearestFilter),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.version = 1);
    }
    function ar(t, e, r, i, n, a, s, o, h, c) {
      if (
        (c = void 0 !== c ? c : u.DepthFormat) !== u.DepthFormat &&
        c !== u.DepthStencilFormat
      )
        throw new Error(
          "DepthTexture format must be either RK.DepthFormat or RK.DepthStencilFormat"
        );
      void 0 === r && c === u.DepthFormat && (r = u.UnsignedShortType),
        void 0 === r &&
          c === u.DepthStencilFormat &&
          (r = u.UnsignedInt248Type),
        d.call(this, null, i, n, a, s, o, c, r, h),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== s ? s : u.NearestFilter),
        (this.minFilter = void 0 !== o ? o : u.NearestFilter),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
    function sr(t) {
      ie.call(this), (this.type = "WireframeGeometry");
      var e,
        r,
        i,
        n,
        a,
        s,
        o,
        h,
        u,
        c,
        l = [],
        p = [0, 0],
        d = {},
        f = ["a", "b", "c"];
      if (t && t.isGeometry) {
        var m = t.faces;
        for (e = 0, i = m.length; e < i; e++) {
          var g = m[e];
          for (r = 0; r < 3; r++)
            (o = g[f[r]]),
              (h = g[f[(r + 1) % 3]]),
              (p[0] = Math.min(o, h)),
              (p[1] = Math.max(o, h)),
              void 0 === d[(u = p[0] + "," + p[1])] &&
                (d[u] = { index1: p[0], index2: p[1] });
        }
        for (u in d)
          (s = d[u]),
            (c = t.vertices[s.index1]),
            l.push(c.x, c.y, c.z),
            (c = t.vertices[s.index2]),
            l.push(c.x, c.y, c.z);
      } else if (t && t.isBufferGeometry) {
        var y, v, x, b, w, M, T;
        if (((c = new st.a()), null !== t.index)) {
          for (
            y = t.attributes.position,
              v = t.index,
              0 === (x = t.groups).length &&
                (x = [{ start: 0, count: v.count, materialIndex: 0 }]),
              n = 0,
              a = x.length;
            n < a;
            ++n
          )
            for (e = w = (b = x[n]).start, i = w + b.count; e < i; e += 3)
              for (r = 0; r < 3; r++)
                (o = v.getX(e + r)),
                  (h = v.getX(e + ((r + 1) % 3))),
                  (p[0] = Math.min(o, h)),
                  (p[1] = Math.max(o, h)),
                  void 0 === d[(u = p[0] + "," + p[1])] &&
                    (d[u] = { index1: p[0], index2: p[1] });
          for (u in d)
            (s = d[u]),
              c.fromBufferAttribute(y, s.index1),
              l.push(c.x, c.y, c.z),
              c.fromBufferAttribute(y, s.index2),
              l.push(c.x, c.y, c.z);
        } else
          for (e = 0, i = (y = t.attributes.position).count / 3; e < i; e++)
            for (r = 0; r < 3; r++)
              (M = 3 * e + r),
                c.fromBufferAttribute(y, M),
                l.push(c.x, c.y, c.z),
                (T = 3 * e + ((r + 1) % 3)),
                c.fromBufferAttribute(y, T),
                l.push(c.x, c.y, c.z);
      }
      this.addAttribute("position", new $t(l, 3));
    }
    function or(t, e, r) {
      jt.call(this),
        (this.type = "ParametricGeometry"),
        (this.parameters = { func: t, slices: e, stacks: r }),
        this.fromBufferGeometry(new hr(t, e, r)),
        this.mergeVertices();
    }
    function hr(t, e, r) {
      ie.call(this),
        (this.type = "ParametricBufferGeometry"),
        (this.parameters = { func: t, slices: e, stacks: r });
      var i,
        n,
        a = [],
        s = [],
        o = [],
        h = [],
        u = 1e-5,
        c = new st.a(),
        l = new st.a(),
        p = new st.a(),
        d = new st.a(),
        f = new st.a(),
        m = e + 1;
      for (i = 0; i <= r; i++) {
        var g = i / r;
        for (n = 0; n <= e; n++) {
          var y = n / e;
          (l = t(y, g, l)),
            s.push(l.x, l.y, l.z),
            y - u >= 0
              ? ((p = t(y - u, g, p)), d.subVectors(l, p))
              : ((p = t(y + u, g, p)), d.subVectors(p, l)),
            g - u >= 0
              ? ((p = t(y, g - u, p)), f.subVectors(l, p))
              : ((p = t(y, g + u, p)), f.subVectors(p, l)),
            c.crossVectors(d, f).normalize(),
            o.push(c.x, c.y, c.z),
            h.push(y, g);
        }
      }
      for (i = 0; i < r; i++)
        for (n = 0; n < e; n++) {
          var v = i * m + n,
            x = i * m + n + 1,
            b = (i + 1) * m + n + 1,
            w = (i + 1) * m + n;
          a.push(v, x, w), a.push(x, b, w);
        }
      this.setIndex(a),
        this.addAttribute("position", new $t(s, 3)),
        this.addAttribute("normal", new $t(o, 3)),
        this.addAttribute("uv", new $t(h, 2));
    }
    function ur(t, e, r, i) {
      jt.call(this),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: r, detail: i }),
        this.fromBufferGeometry(new cr(t, e, r, i)),
        this.mergeVertices();
    }
    function cr(t, e, r, i) {
      ie.call(this),
        (this.type = "PolyhedronBufferGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: r, detail: i }),
        (r = r || 1);
      var n = [],
        a = [];
      function s(t, e, r, i) {
        var n,
          a,
          s = Math.pow(2, i),
          h = [];
        for (n = 0; n <= s; n++) {
          h[n] = [];
          var u = t.clone().lerp(r, n / s),
            c = e.clone().lerp(r, n / s),
            l = s - n;
          for (a = 0; a <= l; a++)
            h[n][a] = 0 === a && n === s ? u : u.clone().lerp(c, a / l);
        }
        for (n = 0; n < s; n++)
          for (a = 0; a < 2 * (s - n) - 1; a++) {
            var p = Math.floor(a / 2);
            a % 2 == 0
              ? (o(h[n][p + 1]), o(h[n + 1][p]), o(h[n][p]))
              : (o(h[n][p + 1]), o(h[n + 1][p + 1]), o(h[n + 1][p]));
          }
      }
      function o(t) {
        n.push(t.x, t.y, t.z);
      }
      function h(e, r) {
        var i = 3 * e;
        (r.x = t[i + 0]), (r.y = t[i + 1]), (r.z = t[i + 2]);
      }
      function u(t, e, r, i) {
        i < 0 && 1 === t.x && (a[e] = t.x - 1),
          0 === r.x && 0 === r.z && (a[e] = i / 2 / Math.PI + 0.5);
      }
      function c(t) {
        return Math.atan2(t.z, -t.x);
      }
      function p(t) {
        return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z));
      }
      !(function (t) {
        for (
          var r = new st.a(), i = new st.a(), n = new st.a(), a = 0;
          a < e.length;
          a += 3
        )
          h(e[a + 0], r), h(e[a + 1], i), h(e[a + 2], n), s(r, i, n, t);
      })((i = i || 0)),
        (function (t) {
          for (var e = new st.a(), r = 0; r < n.length; r += 3)
            (e.x = n[r + 0]),
              (e.y = n[r + 1]),
              (e.z = n[r + 2]),
              e.normalize().multiplyScalar(t),
              (n[r + 0] = e.x),
              (n[r + 1] = e.y),
              (n[r + 2] = e.z);
        })(r),
        (function () {
          for (var t = new st.a(), e = 0; e < n.length; e += 3) {
            (t.x = n[e + 0]), (t.y = n[e + 1]), (t.z = n[e + 2]);
            var r = c(t) / 2 / Math.PI + 0.5,
              i = p(t) / Math.PI + 0.5;
            a.push(r, 1 - i);
          }
          (function () {
            for (
              var t = new st.a(),
                e = new st.a(),
                r = new st.a(),
                i = new st.a(),
                s = new l.a(),
                o = new l.a(),
                h = new l.a(),
                p = 0,
                d = 0;
              p < n.length;
              p += 9, d += 6
            ) {
              t.set(n[p + 0], n[p + 1], n[p + 2]),
                e.set(n[p + 3], n[p + 4], n[p + 5]),
                r.set(n[p + 6], n[p + 7], n[p + 8]),
                s.set(a[d + 0], a[d + 1]),
                o.set(a[d + 2], a[d + 3]),
                h.set(a[d + 4], a[d + 5]),
                i.copy(t).add(e).add(r).divideScalar(3);
              var f = c(i);
              u(s, d + 0, t, f), u(o, d + 2, e, f), u(h, d + 4, r, f);
            }
          })(),
            (function () {
              for (var t = 0; t < a.length; t += 6) {
                var e = a[t + 0],
                  r = a[t + 2],
                  i = a[t + 4],
                  n = Math.max(e, r, i),
                  s = Math.min(e, r, i);
                n > 0.9 &&
                  s < 0.1 &&
                  (e < 0.2 && (a[t + 0] += 1),
                  r < 0.2 && (a[t + 2] += 1),
                  i < 0.2 && (a[t + 4] += 1));
              }
            })();
        })(),
        this.addAttribute("position", new $t(n, 3)),
        this.addAttribute("normal", new $t(n.slice(), 3)),
        this.addAttribute("uv", new $t(a, 2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    function lr(t, e) {
      jt.call(this),
        (this.type = "TetrahedronGeometry"),
        (this.parameters = { radius: t, detail: e }),
        this.fromBufferGeometry(new pr(t, e)),
        this.mergeVertices();
    }
    function pr(t, e) {
      cr.call(
        this,
        [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
        [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
        t,
        e
      ),
        (this.type = "TetrahedronBufferGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    function dr(t, e) {
      jt.call(this),
        (this.type = "OctahedronGeometry"),
        (this.parameters = { radius: t, detail: e }),
        this.fromBufferGeometry(new fr(t, e)),
        this.mergeVertices();
    }
    function fr(t, e) {
      cr.call(
        this,
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0,
          2,
          4,
          0,
          4,
          3,
          0,
          3,
          5,
          0,
          5,
          2,
          1,
          2,
          5,
          1,
          5,
          3,
          1,
          3,
          4,
          1,
          4,
          2,
        ],
        t,
        e
      ),
        (this.type = "OctahedronBufferGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    function mr(t, e) {
      jt.call(this),
        (this.type = "IcosahedronGeometry"),
        (this.parameters = { radius: t, detail: e }),
        this.fromBufferGeometry(new gr(t, e)),
        this.mergeVertices();
    }
    function gr(t, e) {
      var r = (1 + Math.sqrt(5)) / 2,
        i = [
          -1,
          r,
          0,
          1,
          r,
          0,
          -1,
          -r,
          0,
          1,
          -r,
          0,
          0,
          -1,
          r,
          0,
          1,
          r,
          0,
          -1,
          -r,
          0,
          1,
          -r,
          r,
          0,
          -1,
          r,
          0,
          1,
          -r,
          0,
          -1,
          -r,
          0,
          1,
        ];
      cr.call(
        this,
        i,
        [
          0,
          11,
          5,
          0,
          5,
          1,
          0,
          1,
          7,
          0,
          7,
          10,
          0,
          10,
          11,
          1,
          5,
          9,
          5,
          11,
          4,
          11,
          10,
          2,
          10,
          7,
          6,
          7,
          1,
          8,
          3,
          9,
          4,
          3,
          4,
          2,
          3,
          2,
          6,
          3,
          6,
          8,
          3,
          8,
          9,
          4,
          9,
          5,
          2,
          4,
          11,
          6,
          2,
          10,
          8,
          6,
          7,
          9,
          8,
          1,
        ],
        t,
        e
      ),
        (this.type = "IcosahedronBufferGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    function yr(t, e) {
      jt.call(this),
        (this.type = "DodecahedronGeometry"),
        (this.parameters = { radius: t, detail: e }),
        this.fromBufferGeometry(new vr(t, e)),
        this.mergeVertices();
    }
    function vr(t, e) {
      var r = (1 + Math.sqrt(5)) / 2,
        i = 1 / r,
        n = [
          -1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          1,
          1,
          1,
          0,
          -i,
          -r,
          0,
          -i,
          r,
          0,
          i,
          -r,
          0,
          i,
          r,
          -i,
          -r,
          0,
          -i,
          r,
          0,
          i,
          -r,
          0,
          i,
          r,
          0,
          -r,
          0,
          -i,
          r,
          0,
          -i,
          -r,
          0,
          i,
          r,
          0,
          i,
        ];
      cr.call(
        this,
        n,
        [
          3,
          11,
          7,
          3,
          7,
          15,
          3,
          15,
          13,
          7,
          19,
          17,
          7,
          17,
          6,
          7,
          6,
          15,
          17,
          4,
          8,
          17,
          8,
          10,
          17,
          10,
          6,
          8,
          0,
          16,
          8,
          16,
          2,
          8,
          2,
          10,
          0,
          12,
          1,
          0,
          1,
          18,
          0,
          18,
          16,
          6,
          10,
          2,
          6,
          2,
          13,
          6,
          13,
          15,
          2,
          16,
          18,
          2,
          18,
          3,
          2,
          3,
          13,
          18,
          1,
          9,
          18,
          9,
          11,
          18,
          11,
          3,
          4,
          14,
          12,
          4,
          12,
          0,
          4,
          0,
          8,
          11,
          9,
          5,
          11,
          5,
          19,
          11,
          19,
          7,
          19,
          5,
          14,
          19,
          14,
          4,
          19,
          4,
          17,
          1,
          12,
          14,
          1,
          14,
          5,
          1,
          5,
          9,
        ],
        t,
        e
      ),
        (this.type = "DodecahedronBufferGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    function xr(t, e, r, i, n, a) {
      jt.call(this),
        (this.type = "TubeGeometry"),
        (this.parameters = {
          path: t,
          tubularSegments: e,
          radius: r,
          radialSegments: i,
          closed: n,
        }),
        void 0 !== a &&
          console.warn("RK.TubeGeometry: taper has been removed.");
      var s = new br(t, e, r, i, n);
      (this.tangents = s.tangents),
        (this.normals = s.normals),
        (this.binormals = s.binormals),
        this.fromBufferGeometry(s),
        this.mergeVertices();
    }
    function br(t, e, r, i, n) {
      ie.call(this),
        (this.type = "TubeBufferGeometry"),
        (this.parameters = {
          path: t,
          tubularSegments: e,
          radius: r,
          radialSegments: i,
          closed: n,
        }),
        (e = e || 64),
        (r = r || 1),
        (i = i || 8),
        (n = n || !1);
      var a = t.computeFrenetFrames(e, n);
      (this.tangents = a.tangents),
        (this.normals = a.normals),
        (this.binormals = a.binormals);
      var s,
        o,
        h = new st.a(),
        u = new st.a(),
        c = new l.a(),
        p = [],
        d = [],
        f = [],
        m = [];
      function g(n) {
        var s = t.getPointAt(n / e),
          c = a.normals[n],
          l = a.binormals[n];
        for (o = 0; o <= i; o++) {
          var f = (o / i) * Math.PI * 2,
            m = Math.sin(f),
            g = -Math.cos(f);
          (u.x = g * c.x + m * l.x),
            (u.y = g * c.y + m * l.y),
            (u.z = g * c.z + m * l.z),
            u.normalize(),
            d.push(u.x, u.y, u.z),
            (h.x = s.x + r * u.x),
            (h.y = s.y + r * u.y),
            (h.z = s.z + r * u.z),
            p.push(h.x, h.y, h.z);
        }
      }
      !(function () {
        for (s = 0; s < e; s++) g(s);
        g(!1 === n ? e : 0),
          (function () {
            for (s = 0; s <= e; s++)
              for (o = 0; o <= i; o++)
                (c.x = s / e), (c.y = o / i), f.push(c.x, c.y);
          })(),
          (function () {
            for (o = 1; o <= e; o++)
              for (s = 1; s <= i; s++) {
                var t = (i + 1) * (o - 1) + (s - 1),
                  r = (i + 1) * o + (s - 1),
                  n = (i + 1) * o + s,
                  a = (i + 1) * (o - 1) + s;
                m.push(t, r, a), m.push(r, n, a);
              }
          })();
      })(),
        this.setIndex(m),
        this.addAttribute("position", new $t(p, 3)),
        this.addAttribute("normal", new $t(d, 3)),
        this.addAttribute("uv", new $t(f, 2));
    }
    function wr(t, e, r, i, n, a, s) {
      jt.call(this),
        (this.type = "TorusKnotGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          tubularSegments: r,
          radialSegments: i,
          p: n,
          q: a,
        }),
        void 0 !== s &&
          console.warn(
            "RK.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."
          ),
        this.fromBufferGeometry(new Mr(t, e, r, i, n, a)),
        this.mergeVertices();
    }
    function Mr(t, e, r, i, n, a) {
      ie.call(this),
        (this.type = "TorusKnotBufferGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          tubularSegments: r,
          radialSegments: i,
          p: n,
          q: a,
        }),
        (t = t || 100),
        (e = e || 40),
        (r = Math.floor(r) || 64),
        (i = Math.floor(i) || 8),
        (n = n || 2),
        (a = a || 3);
      var s,
        o,
        h = [],
        u = [],
        c = [],
        l = [],
        p = new st.a(),
        d = new st.a(),
        f = new st.a(),
        m = new st.a(),
        g = new st.a(),
        y = new st.a(),
        v = new st.a();
      for (s = 0; s <= r; ++s) {
        var x = (s / r) * n * Math.PI * 2;
        for (
          A(x, n, a, t, f),
            A(x + 0.01, n, a, t, m),
            y.subVectors(m, f),
            v.addVectors(m, f),
            g.crossVectors(y, v),
            v.crossVectors(g, y),
            g.normalize(),
            v.normalize(),
            o = 0;
          o <= i;
          ++o
        ) {
          var b = (o / i) * Math.PI * 2,
            w = -e * Math.cos(b),
            M = e * Math.sin(b);
          (p.x = f.x + (w * v.x + M * g.x)),
            (p.y = f.y + (w * v.y + M * g.y)),
            (p.z = f.z + (w * v.z + M * g.z)),
            u.push(p.x, p.y, p.z),
            d.subVectors(p, f).normalize(),
            c.push(d.x, d.y, d.z),
            l.push(s / r),
            l.push(o / i);
        }
      }
      for (o = 1; o <= r; o++)
        for (s = 1; s <= i; s++) {
          var T = (i + 1) * (o - 1) + (s - 1),
            S = (i + 1) * o + (s - 1),
            _ = (i + 1) * o + s,
            E = (i + 1) * (o - 1) + s;
          h.push(T, S, E), h.push(S, _, E);
        }
      function A(t, e, r, i, n) {
        var a = Math.cos(t),
          s = Math.sin(t),
          o = (r / e) * t,
          h = Math.cos(o);
        (n.x = i * (2 + h) * 0.5 * a),
          (n.y = i * (2 + h) * s * 0.5),
          (n.z = i * Math.sin(o) * 0.5);
      }
      this.setIndex(h),
        this.addAttribute("position", new $t(u, 3)),
        this.addAttribute("normal", new $t(c, 3)),
        this.addAttribute("uv", new $t(l, 2));
    }
    function Tr(t, e, r, i, n) {
      jt.call(this),
        (this.type = "TorusGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          radialSegments: r,
          tubularSegments: i,
          arc: n,
        }),
        this.fromBufferGeometry(new Sr(t, e, r, i, n)),
        this.mergeVertices();
    }
    function Sr(t, e, r, i, n) {
      ie.call(this),
        (this.type = "TorusBufferGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          radialSegments: r,
          tubularSegments: i,
          arc: n,
        }),
        (t = t || 100),
        (e = e || 40),
        (r = Math.floor(r) || 8),
        (i = Math.floor(i) || 6),
        (n = n || 2 * Math.PI);
      var a,
        s,
        o = [],
        h = [],
        u = [],
        c = [],
        l = new st.a(),
        p = new st.a(),
        d = new st.a();
      for (a = 0; a <= r; a++)
        for (s = 0; s <= i; s++) {
          var f = (s / i) * n,
            m = (a / r) * Math.PI * 2;
          (p.x = (t + e * Math.cos(m)) * Math.cos(f)),
            (p.y = (t + e * Math.cos(m)) * Math.sin(f)),
            (p.z = e * Math.sin(m)),
            h.push(p.x, p.y, p.z),
            (l.x = t * Math.cos(f)),
            (l.y = t * Math.sin(f)),
            d.subVectors(p, l).normalize(),
            u.push(d.x, d.y, d.z),
            c.push(s / i),
            c.push(a / r);
        }
      for (a = 1; a <= r; a++)
        for (s = 1; s <= i; s++) {
          var g = (i + 1) * a + s - 1,
            y = (i + 1) * (a - 1) + s - 1,
            v = (i + 1) * (a - 1) + s,
            x = (i + 1) * a + s;
          o.push(g, y, x), o.push(y, v, x);
        }
      this.setIndex(o),
        this.addAttribute("position", new $t(h, 3)),
        this.addAttribute("normal", new $t(u, 3)),
        this.addAttribute("uv", new $t(c, 2));
    }
    (He.prototype = Object.assign(Object.create(zt.prototype), {
      constructor: He,
      copy: function (t, e) {
        return (
          zt.prototype.copy.call(this, t, e),
          null !== t.background && (this.background = t.background.clone()),
          null !== t.fog && (this.fog = t.fog.clone()),
          null !== t.overrideMaterial &&
            (this.overrideMaterial = t.overrideMaterial.clone()),
          (this.autoUpdate = t.autoUpdate),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          this
        );
      },
      toJSON: function (t) {
        var e = zt.prototype.toJSON.call(this, t);
        return (
          null !== this.background &&
            (e.object.background = this.background.toJSON(t)),
          null !== this.fog && (e.object.fog = this.fog.toJSON()),
          e
        );
      },
    })),
      (Ye.prototype = Object.assign(Object.create(Me.prototype), {
        constructor: Ye,
        isSkinnedMesh: !0,
        bind: function (t, e) {
          (this.skeleton = t),
            void 0 === e &&
              (this.updateMatrixWorld(!0),
              this.skeleton.calculateInverses(),
              (e = this.matrixWorld)),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e);
        },
        pose: function () {
          this.skeleton.pose();
        },
        normalizeSkinWeights: function () {
          var t,
            e,
            r = new f(),
            i = this.geometry.attributes.skinWeight;
          for (e = 0; e < i.count; e++)
            (r.x = i.getX(e)),
              (r.y = i.getY(e)),
              (r.z = i.getZ(e)),
              (r.w = i.getW(e)),
              (t = 1 / r.lengthManhattan()) !== 1 / 0
                ? r.multiplyScalar(t)
                : r.set(1, 0, 0, 0),
              i.setXYZW(e, r.x, r.y, r.z, r.w);
        },
        updateMatrixWorld: function (t) {
          Me.prototype.updateMatrixWorld.call(this, t),
            "attached" === this.bindMode
              ? this.bindMatrixInverse.getInverse(this.matrixWorld)
              : "detached" === this.bindMode
              ? this.bindMatrixInverse.getInverse(this.bindMatrix)
              : console.warn(
                  "RK.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
                );
        },
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      })),
      Object.assign(Ze.prototype, {
        calculateInverses: function () {
          this.boneInverses = [];
          for (var t = 0, e = this.bones.length; t < e; t++) {
            var r = new y.a();
            this.bones[t] && r.getInverse(this.bones[t].matrixWorld),
              this.boneInverses.push(r);
          }
        },
        pose: function () {
          var t, e, r;
          for (e = 0, r = this.bones.length; e < r; e++)
            (t = this.bones[e]) &&
              t.matrixWorld.getInverse(this.boneInverses[e]);
          for (e = 0, r = this.bones.length; e < r; e++)
            (t = this.bones[e]) &&
              (t.parent && t.parent.isBone
                ? (t.matrix.getInverse(t.parent.matrixWorld),
                  t.matrix.multiply(t.matrixWorld))
                : t.matrix.copy(t.matrixWorld),
              t.matrix.decompose(t.position, t.quaternion, t.scale));
        },
        update: (function () {
          var t = new y.a();
          new y.a();
          return function () {
            this.bones, this.boneInverses, this.boneMatrices;
            for (
              var e = this.boneTexture, r = 0, i = this.bones.length;
              r < i;
              r++
            ) {
              var n = this.bones[r]
                ? this.bones[r].matrixWorld
                : this.identityMatrix;
              t.multiplyMatrices(n, this.boneInverses[r]),
                this.boneMatrices instanceof Uint8Array
                  ? t.toUInt8Array(this.boneMatrices, 16 * r * 4)
                  : (t.transpose(), t.toArray(this.boneMatrices, 16 * r));
            }
            void 0 !== e && (e.needsUpdate = !0);
          };
        })(),
        clone: function () {
          return new Ze(this.bones, this.boneInverses);
        },
      }),
      (Je.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: Je,
        isBone: !0,
        updateMatrix: function () {
          if ((zt.prototype.updateMatrix.call(this), this.flip)) {
            var t = new RK.Quaternion(0, 0, 1, 0),
              e = new RK.Matrix4();
            e.makeRotationFromQuaternion(t);
            var r = new RK.Matrix4(),
              i = this.flipOffset.clone();
            r.setPosition(i),
              e.premultiply(r),
              i.multiplyScalar(-1),
              r.setPosition(i),
              e.multiply(r),
              this.matrix.multiply(e);
          }
        },
      })),
      Object.assign(Je.prototype, {
        clone: function () {
          var t = new RK.Bone();
          return (
            (t.rotation.order = this.rotation.order),
            t.position.copy(this.position),
            t.quaternion.copy(this.quaternion),
            t.scale.copy(this.scale),
            (t.poses = this.poses),
            (t.parentId = this.parentId),
            (t.name = this.name),
            (t.boneID = this.boneID),
            (t.idFromName = parseInt((this.name || "").split("_")[2] || 0)),
            (t.boneIDPartRelative = this.boneIDPartRelative),
            (t.isUseful = this.isUseful),
            t
          );
        },
      }),
      (Qe.prototype = Object.create(ue.prototype)),
      (Qe.prototype.constructor = Qe),
      (Qe.prototype.isLineBasicMaterial = !0),
      (Qe.prototype.copy = function (t) {
        return (
          ue.prototype.copy.call(this, t),
          this.color.copy(t.color),
          (this.linewidth = t.linewidth),
          (this.linecap = t.linecap),
          (this.linejoin = t.linejoin),
          this
        );
      }),
      ($e.prototype = Object.assign(Object.create(tr.prototype), {
        constructor: $e,
        isLineSegments: !0,
      })),
      (tr.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: tr,
        isLine: !0,
        raycast: (function () {
          var t = new y.a(),
            e = new xe(),
            r = new bt();
          return function (i, n) {
            var a = i.linePrecision,
              s = a * a,
              o = this.geometry,
              h = this.matrixWorld;
            if (
              (null === o.boundingSphere && o.computeBoundingSphere(),
              r.copy(o.boundingSphere),
              r.applyMatrix4(h),
              !1 !== i.ray.intersectsSphere(r))
            ) {
              t.getInverse(h), e.copy(i.ray).applyMatrix4(t);
              var u = new st.a(),
                c = new st.a(),
                l = new st.a(),
                p = new st.a(),
                d = this && this.isLineSegments ? 2 : 1;
              if (o.isBufferGeometry) {
                var f = o.index,
                  m = o.attributes.position.array;
                if (null !== f)
                  for (
                    var g = f.array, y = 0, v = g.length - 1;
                    y < v;
                    y += d
                  ) {
                    var x = g[y],
                      b = g[y + 1];
                    if (
                      (u.fromArray(m, 3 * x),
                      c.fromArray(m, 3 * b),
                      !(e.distanceSqToSegment(u, c, p, l) > s))
                    )
                      p.applyMatrix4(this.matrixWorld),
                        (T = i.ray.origin.distanceTo(p)) < i.near ||
                          T > i.far ||
                          n.push({
                            distance: T,
                            point: l.clone().applyMatrix4(this.matrixWorld),
                            index: y,
                            face: null,
                            faceIndex: null,
                            object: this,
                          });
                  }
                else
                  for (y = 0, v = m.length / 3 - 1; y < v; y += d) {
                    if (
                      (u.fromArray(m, 3 * y),
                      c.fromArray(m, 3 * y + 3),
                      !(e.distanceSqToSegment(u, c, p, l) > s))
                    )
                      p.applyMatrix4(this.matrixWorld),
                        (T = i.ray.origin.distanceTo(p)) < i.near ||
                          T > i.far ||
                          n.push({
                            distance: T,
                            point: l.clone().applyMatrix4(this.matrixWorld),
                            index: y,
                            face: null,
                            faceIndex: null,
                            object: this,
                          });
                  }
              } else if (o.isGeometry) {
                var w = o.vertices,
                  M = w.length;
                for (y = 0; y < M - 1; y += d) {
                  var T;
                  if (!(e.distanceSqToSegment(w[y], w[y + 1], p, l) > s))
                    p.applyMatrix4(this.matrixWorld),
                      (T = i.ray.origin.distanceTo(p)) < i.near ||
                        T > i.far ||
                        n.push({
                          distance: T,
                          point: l.clone().applyMatrix4(this.matrixWorld),
                          index: y,
                          face: null,
                          faceIndex: null,
                          object: this,
                        });
                }
              }
            }
          };
        })(),
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      })),
      (er.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: er,
      })),
      (rr.prototype = Object.assign(Object.create(Bt.prototype), {
        constructor: rr,
        isPerspectiveCamera: !0,
        copy: function (t, e) {
          return (
            Bt.prototype.copy.call(this, t, e),
            (this.fov = t.fov),
            (this.zoom = t.zoom),
            (this.near = t.near),
            (this.far = t.far),
            (this.focus = t.focus),
            (this.aspect = t.aspect),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            (this.filmGauge = t.filmGauge),
            (this.filmOffset = t.filmOffset),
            this
          );
        },
        setFocalLength: function (t) {
          var e = (0.5 * this.getFilmHeight()) / t;
          (this.fov = 2 * c.a.RAD2DEG * Math.atan(e)),
            this.updateProjectionMatrix();
        },
        getFocalLength: function () {
          var t = Math.tan(0.5 * c.a.DEG2RAD * this.fov);
          return (0.5 * this.getFilmHeight()) / t;
        },
        getEffectiveFOV: function () {
          return (
            2 *
            c.a.RAD2DEG *
            Math.atan(Math.tan(0.5 * c.a.DEG2RAD * this.fov) / this.zoom)
          );
        },
        getFilmWidth: function () {
          return this.filmGauge * Math.min(this.aspect, 1);
        },
        getFilmHeight: function () {
          return this.filmGauge / Math.max(this.aspect, 1);
        },
        setViewOffset: function (t, e, r, i, n, a) {
          (this.aspect = t / e),
            (this.view = {
              fullWidth: t,
              fullHeight: e,
              offsetX: r,
              offsetY: i,
              width: n,
              height: a,
            }),
            this.updateProjectionMatrix();
        },
        clearViewOffset: function () {
          (this.view = null), this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function () {
          var t = this.near,
            e = (t * Math.tan(0.5 * c.a.DEG2RAD * this.fov)) / this.zoom,
            r = 2 * e,
            i = this.aspect * r,
            n = -0.5 * i,
            a = this.view;
          if (null !== a) {
            var s = a.fullWidth,
              o = a.fullHeight;
            (n += (a.offsetX * i) / s),
              (e -= (a.offsetY * r) / o),
              (i *= a.width / s),
              (r *= a.height / o);
          }
          var h = this.filmOffset;
          0 !== h && (n += (t * h) / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(
              n,
              n + i,
              e,
              e - r,
              t,
              this.far
            );
        },
        toJSON: function (t) {
          var e = zt.prototype.toJSON.call(this, t);
          return (
            (e.object.fov = this.fov),
            (e.object.zoom = this.zoom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            (e.object.focus = this.focus),
            (e.object.aspect = this.aspect),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            (e.object.filmGauge = this.filmGauge),
            (e.object.filmOffset = this.filmOffset),
            e
          );
        },
      })),
      (ir.prototype = Object.assign(Object.create(Me.prototype), {
        constructor: ir,
        updateVirtualCamera: function (t) {
          var e = new Mt(),
            r = new st.a(),
            i = new st.a(),
            n = new st.a(),
            a = new y.a(),
            s = new st.a(0, 0, -1),
            o = new f(),
            h = new st.a(),
            u = new st.a(),
            c = new f(),
            l = new y.a(),
            p = new rr();
          if ("recursion" in t.userData) {
            if (t.userData.recursion === recursion) return;
            t.userData.recursion++;
          }
          if (
            (i.setFromMatrixPosition(this.scope.matrixWorld),
            n.setFromMatrixPosition(t.matrixWorld),
            a.extractRotation(this.scope.matrixWorld),
            r.set(0, 0, 1),
            r.applyMatrix4(a),
            h.subVectors(i, n),
            !(h.dot(r) > 0))
          ) {
            h.reflect(r).negate(),
              h.add(i),
              a.extractRotation(t.matrixWorld),
              s.set(0, 0, -1),
              s.applyMatrix4(a),
              s.add(n),
              u.subVectors(i, s),
              u.reflect(r).negate(),
              u.add(i),
              p.position.copy(h),
              p.up.set(0, 1, 0),
              p.up.applyMatrix4(a),
              p.up.reflect(r),
              p.lookAt(u),
              (p.far = t.far),
              p.updateMatrixWorld(),
              p.projectionMatrix.copy(t.projectionMatrix),
              (p.userData.recursion = this.recursion),
              l.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
              l.multiply(p.projectionMatrix),
              l.multiply(p.matrixWorldInverse),
              l.multiply(this.scope.matrixWorld),
              this.material.setUniform("textureMatrix", l),
              e.setFromNormalAndCoplanarPoint(r, i),
              e.applyMatrix4(p.matrixWorldInverse),
              o.set(e.normal.x, e.normal.y, e.normal.z, e.constant);
            var d = p.projectionMatrix;
            (c.x = (Math.sign(o.x) + d.elements[8]) / d.elements[0]),
              (c.y = (Math.sign(o.y) + d.elements[9]) / d.elements[5]),
              (c.z = -1),
              (c.w = (1 + d.elements[10]) / d.elements[14]),
              o.multiplyScalar(2 / o.dot(c)),
              (d.elements[2] = o.x),
              (d.elements[6] = o.y),
              (d.elements[10] = o.z + 1 - this.clipBias),
              (d.elements[14] = o.w),
              (this.virtualCamera = p);
          }
        },
        renderVirtualCamera: function (t, e, r, i) {
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        },
      })),
      (nr.prototype = Object.create(d.prototype)),
      (nr.prototype.constructor = nr),
      (nr.prototype.isDataTexture = !0),
      (ar.prototype = Object.create(d.prototype)),
      (ar.prototype.constructor = ar),
      (ar.prototype.isDepthTexture = !0),
      (sr.prototype = Object.create(ie.prototype)),
      (sr.prototype.constructor = sr),
      (or.prototype = Object.create(jt.prototype)),
      (or.prototype.constructor = or),
      (hr.prototype = Object.create(ie.prototype)),
      (hr.prototype.constructor = hr),
      (ur.prototype = Object.create(jt.prototype)),
      (ur.prototype.constructor = ur),
      (cr.prototype = Object.create(ie.prototype)),
      (cr.prototype.constructor = cr),
      (lr.prototype = Object.create(jt.prototype)),
      (lr.prototype.constructor = lr),
      (pr.prototype = Object.create(cr.prototype)),
      (pr.prototype.constructor = pr),
      (dr.prototype = Object.create(jt.prototype)),
      (dr.prototype.constructor = dr),
      (fr.prototype = Object.create(cr.prototype)),
      (fr.prototype.constructor = fr),
      (mr.prototype = Object.create(jt.prototype)),
      (mr.prototype.constructor = mr),
      (gr.prototype = Object.create(cr.prototype)),
      (gr.prototype.constructor = gr),
      (yr.prototype = Object.create(jt.prototype)),
      (yr.prototype.constructor = yr),
      (vr.prototype = Object.create(cr.prototype)),
      (vr.prototype.constructor = vr),
      (xr.prototype = Object.create(jt.prototype)),
      (xr.prototype.constructor = xr),
      (br.prototype = Object.create(ie.prototype)),
      (br.prototype.constructor = br),
      (wr.prototype = Object.create(jt.prototype)),
      (wr.prototype.constructor = wr),
      (Mr.prototype = Object.create(ie.prototype)),
      (Mr.prototype.constructor = Mr),
      (Tr.prototype = Object.create(jt.prototype)),
      (Tr.prototype.constructor = Tr),
      (Sr.prototype = Object.create(ie.prototype)),
      (Sr.prototype.constructor = Sr);
    var _r = {
      area: function (t) {
        for (var e = t.length, r = 0, i = e - 1, n = 0; n < e; i = n++)
          r += t[i].x * t[n].y - t[n].x * t[i].y;
        return 0.5 * r;
      },
      triangulate: (function () {
        function t(t, e, r, i, n, a) {
          var s, o, h, u, c, l, p, d, f, m, g, y, v, x, b, w, M;
          if (
            ((o = t[a[e]].x),
            (h = t[a[e]].y),
            (u = t[a[r]].x),
            (c = t[a[r]].y),
            (l = t[a[i]].x),
            (u - o) * ((p = t[a[i]].y) - h) - (c - h) * (l - o) <= 0)
          )
            return !1;
          for (
            m = l - u,
              g = p - c,
              y = o - l,
              v = h - p,
              x = u - o,
              b = c - h,
              s = 0;
            s < n;
            s++
          )
            if (
              ((d = t[a[s]].x),
              (f = t[a[s]].y),
              !(
                (d === o && f === h) ||
                (d === u && f === c) ||
                (d === l && f === p)
              ) &&
                ((w = x * (f - h) - b * (d - o)),
                (M = y * (f - p) - v * (d - l)),
                m * (f - c) - g * (d - u) >= -Number.EPSILON &&
                  M >= -Number.EPSILON &&
                  w >= -Number.EPSILON))
            )
              return !1;
          return !0;
        }
        return function (e, r) {
          var i = e.length;
          if (i < 3) return null;
          var n,
            a,
            s,
            o = [],
            h = [],
            u = [];
          if (_r.area(e) > 0) for (a = 0; a < i; a++) h[a] = a;
          else for (a = 0; a < i; a++) h[a] = i - 1 - a;
          var c = i,
            l = 2 * c;
          for (a = c - 1; c > 2; ) {
            if (l-- <= 0)
              return (
                console.warn(
                  "RK.ShapeUtils: Unable to triangulate polygon! in triangulate()"
                ),
                r ? u : o
              );
            if (
              (c <= (n = a) && (n = 0),
              c <= (a = n + 1) && (a = 0),
              c <= (s = a + 1) && (s = 0),
              t(e, n, a, s, c, h))
            ) {
              var p, d, f, m, g;
              for (
                p = h[n],
                  d = h[a],
                  f = h[s],
                  o.push([e[p], e[d], e[f]]),
                  u.push([h[n], h[a], h[s]]),
                  m = a,
                  g = a + 1;
                g < c;
                m++, g++
              )
                h[m] = h[g];
              l = 2 * --c;
            }
          }
          return r ? u : o;
        };
      })(),
      triangulateShape: function (t, e) {
        function r(t) {
          var e = t.length;
          e > 2 && t[e - 1].equals(t[0]) && t.pop();
        }
        function i(t, e, r) {
          return t.x !== e.x
            ? t.x < e.x
              ? t.x <= r.x && r.x <= e.x
              : e.x <= r.x && r.x <= t.x
            : t.y < e.y
            ? t.y <= r.y && r.y <= e.y
            : e.y <= r.y && r.y <= t.y;
        }
        function n(t, e, r, n, a) {
          var s = e.x - t.x,
            o = e.y - t.y,
            h = n.x - r.x,
            u = n.y - r.y,
            c = t.x - r.x,
            l = t.y - r.y,
            p = o * h - s * u,
            d = o * c - s * l;
          if (Math.abs(p) > Number.EPSILON) {
            var f;
            if (p > 0) {
              if (d < 0 || d > p) return [];
              if ((f = u * c - h * l) < 0 || f > p) return [];
            } else {
              if (d > 0 || d < p) return [];
              if ((f = u * c - h * l) > 0 || f < p) return [];
            }
            if (0 === f) return !a || (0 !== d && d !== p) ? [t] : [];
            if (f === p) return !a || (0 !== d && d !== p) ? [e] : [];
            if (0 === d) return [r];
            if (d === p) return [n];
            var m = f / p;
            return [{ x: t.x + m * s, y: t.y + m * o }];
          }
          if (0 !== d || u * c != h * l) return [];
          var g,
            y,
            v,
            x,
            b,
            w,
            M,
            T,
            S = 0 === s && 0 === o,
            _ = 0 === h && 0 === u;
          return S && _
            ? t.x !== r.x || t.y !== r.y
              ? []
              : [t]
            : S
            ? i(r, n, t)
              ? [t]
              : []
            : _
            ? i(t, e, r)
              ? [r]
              : []
            : (0 !== s
                ? (t.x < e.x
                    ? ((g = t), (v = t.x), (y = e), (x = e.x))
                    : ((g = e), (v = e.x), (y = t), (x = t.x)),
                  r.x < n.x
                    ? ((b = r), (M = r.x), (w = n), (T = n.x))
                    : ((b = n), (M = n.x), (w = r), (T = r.x)))
                : (t.y < e.y
                    ? ((g = t), (v = t.y), (y = e), (x = e.y))
                    : ((g = e), (v = e.y), (y = t), (x = t.y)),
                  r.y < n.y
                    ? ((b = r), (M = r.y), (w = n), (T = n.y))
                    : ((b = n), (M = n.y), (w = r), (T = r.y))),
              v <= M
                ? x < M
                  ? []
                  : x === M
                  ? a
                    ? []
                    : [b]
                  : x <= T
                  ? [b, y]
                  : [b, w]
                : v > T
                ? []
                : v === T
                ? a
                  ? []
                  : [g]
                : x <= T
                ? [g, y]
                : [g, w]);
        }
        function a(t, e, r, i) {
          var n = e.x - t.x,
            a = e.y - t.y,
            s = r.x - t.x,
            o = r.y - t.y,
            h = i.x - t.x,
            u = i.y - t.y,
            c = n * o - a * s,
            l = n * u - a * h;
          if (Math.abs(c) > Number.EPSILON) {
            var p = h * o - u * s;
            return c > 0 ? l >= 0 && p >= 0 : l >= 0 || p >= 0;
          }
          return l > 0;
        }
        r(t), e.forEach(r);
        for (
          var s, o, h, u, c, l, p = {}, d = t.concat(), f = 0, m = e.length;
          f < m;
          f++
        )
          Array.prototype.push.apply(d, e[f]);
        for (s = 0, o = d.length; s < o; s++)
          void 0 !== p[(c = d[s].x + ":" + d[s].y)] &&
            console.warn("RK.ShapeUtils: Duplicate point", c, s),
            (p[c] = s);
        var g = (function (t, e) {
            var r,
              i = t.concat();
            function s(t, e) {
              var n = i.length - 1,
                s = t - 1;
              s < 0 && (s = n);
              var o = t + 1;
              o > n && (o = 0);
              var h = a(i[t], i[s], i[o], r[e]);
              if (!h) return !1;
              var u = r.length - 1,
                c = e - 1;
              c < 0 && (c = u);
              var l = e + 1;
              return l > u && (l = 0), !!(h = a(r[e], r[c], r[l], i[t]));
            }
            function o(t, e) {
              var r, a;
              for (r = 0; r < i.length; r++)
                if (
                  ((a = r + 1),
                  (a %= i.length),
                  n(t, e, i[r], i[a], !0).length > 0)
                )
                  return !0;
              return !1;
            }
            var h = [];
            function u(t, r) {
              var i, a, s, o;
              for (i = 0; i < h.length; i++)
                for (a = e[h[i]], s = 0; s < a.length; s++)
                  if (
                    ((o = s + 1),
                    (o %= a.length),
                    n(t, r, a[s], a[o], !0).length > 0)
                  )
                    return !0;
              return !1;
            }
            for (
              var c, l, p, d, f, m, g, y, v, x, b = [], w = 0, M = e.length;
              w < M;
              w++
            )
              h.push(w);
            for (var T = 0, S = 2 * h.length; h.length > 0; ) {
              if (--S < 0) {
                console.log(
                  'RK.ShapeUtils: Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!'
                );
                break;
              }
              for (l = T; l < i.length; l++) {
                (p = i[l]), (c = -1);
                for (w = 0; w < h.length; w++)
                  if (
                    ((f = h[w]), void 0 === b[(m = p.x + ":" + p.y + ":" + f)])
                  ) {
                    r = e[f];
                    for (var _ = 0; _ < r.length; _++)
                      if (((d = r[_]), s(l, _) && !o(p, d) && !u(p, d))) {
                        (c = _),
                          h.splice(w, 1),
                          (g = i.slice(0, l + 1)),
                          (y = i.slice(l)),
                          (v = r.slice(c)),
                          (x = r.slice(0, c + 1)),
                          (i = g.concat(v).concat(x).concat(y)),
                          (T = l);
                        break;
                      }
                    if (c >= 0) break;
                    b[m] = !0;
                  }
                if (c >= 0) break;
              }
            }
            return i;
          })(t, e),
          y = _r.triangulate(g, !1);
        for (s = 0, o = y.length; s < o; s++)
          for (u = y[s], h = 0; h < 3; h++)
            void 0 !== (l = p[(c = u[h].x + ":" + u[h].y)]) && (u[h] = l);
        return y.concat();
      },
      isClockWise: function (t) {
        return _r.area(t) < 0;
      },
    };
    function Er(t, e) {
      jt.call(this),
        (this.type = "ExtrudeGeometry"),
        (this.parameters = { shapes: t, options: e }),
        this.fromBufferGeometry(new Ar(t, e)),
        this.mergeVertices();
    }
    function Ar(t, e) {
      void 0 !== t &&
        (ie.call(this),
        (this.type = "ExtrudeBufferGeometry"),
        (t = Array.isArray(t) ? t : [t]),
        this.addShapeList(t, e),
        this.computeVertexNormals());
    }
    function Rr(t, e) {
      jt.call(this),
        (this.type = "TextGeometry"),
        (this.parameters = { text: t, parameters: e }),
        this.fromBufferGeometry(new Pr(t, e)),
        this.mergeVertices();
    }
    function Pr(t, e) {
      var r = (e = e || {}).font;
      if (!r || !r.isFont)
        return (
          console.error(
            "RK.TextGeometry: font parameter is not an instance of RK.Font."
          ),
          new jt()
        );
      var i = r.generateShapes(t, e.size, e.curveSegments);
      if (
        ((e.amount = void 0 !== e.height ? e.height : 50),
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        Ar.call(this, i, e),
        e.uvs)
      ) {
        for (
          var n = this.attributes.uv.array,
            a = n.length / 2,
            s = 100,
            o = -100,
            h = 100,
            u = -100,
            c = 0;
          c < a;
          c++
        )
          n[2 * c] < s ? (s = n[2 * c]) : n[2 * c] > o && (o = n[2 * c]),
            n[2 * c + 1] < h
              ? (h = n[2 * c + 1])
              : n[2 * c + 1] > u && (u = n[2 * c + 1]);
        o += 0.1;
        for (
          var l = (o += 0.1) - (s -= 0.1), p = u - (h -= 0.1), d = 0;
          d < a;
          d++
        )
          (n[2 * d] = (n[2 * d] - s) / l),
            (n[2 * d + 1] = (n[2 * d + 1] - h) / p);
      }
      this.type = "TextBufferGeometry";
    }
    function Cr(t, e, r, i, n, a, s) {
      jt.call(this),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: r,
          phiStart: i,
          phiLength: n,
          thetaStart: a,
          thetaLength: s,
        }),
        this.fromBufferGeometry(new Or(t, e, r, i, n, a, s)),
        this.mergeVertices();
    }
    function Or(t, e, r, i, n, a, s) {
      ie.call(this),
        (this.type = "SphereBufferGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: r,
          phiStart: i,
          phiLength: n,
          thetaStart: a,
          thetaLength: s,
        }),
        (t = t || 50),
        (e = Math.max(3, Math.floor(e) || 8)),
        (r = Math.max(2, Math.floor(r) || 6)),
        (i = void 0 !== i ? i : 0),
        (n = void 0 !== n ? n : 2 * Math.PI);
      var o,
        h,
        u = (a = void 0 !== a ? a : 0) + (s = void 0 !== s ? s : Math.PI),
        c = 0,
        l = [],
        p = new st.a(),
        d = new st.a(),
        f = [],
        m = [],
        g = [],
        y = [];
      for (h = 0; h <= r; h++) {
        var v = [],
          x = h / r;
        for (o = 0; o <= e; o++) {
          var b = o / e;
          (p.x = -t * Math.cos(i + b * n) * Math.sin(a + x * s)),
            (p.y = t * Math.cos(a + x * s)),
            (p.z = t * Math.sin(i + b * n) * Math.sin(a + x * s)),
            m.push(p.x, p.y, p.z),
            d.set(p.x, p.y, p.z).normalize(),
            g.push(d.x, d.y, d.z),
            y.push(b, 1 - x),
            v.push(c++);
        }
        l.push(v);
      }
      for (h = 0; h < r; h++)
        for (o = 0; o < e; o++) {
          var w = l[h][o + 1],
            M = l[h][o],
            T = l[h + 1][o],
            S = l[h + 1][o + 1];
          (0 !== h || a > 0) && f.push(w, M, S),
            (h !== r - 1 || u < Math.PI) && f.push(M, T, S);
        }
      this.setIndex(f),
        this.addAttribute("position", new $t(m, 3)),
        this.addAttribute("normal", new $t(g, 3)),
        this.addAttribute("uv", new $t(y, 2));
    }
    function Fr(t, e, r, i, n, a) {
      jt.call(this),
        (this.type = "RingGeometry"),
        (this.parameters = {
          innerRadius: t,
          outerRadius: e,
          thetaSegments: r,
          phiSegments: i,
          thetaStart: n,
          thetaLength: a,
        }),
        this.fromBufferGeometry(new Lr(t, e, r, i, n, a)),
        this.mergeVertices();
    }
    function Lr(t, e, r, i, n, a) {
      ie.call(this),
        (this.type = "RingBufferGeometry"),
        (this.parameters = {
          innerRadius: t,
          outerRadius: e,
          thetaSegments: r,
          phiSegments: i,
          thetaStart: n,
          thetaLength: a,
        }),
        (t = t || 20),
        (e = e || 50),
        (n = void 0 !== n ? n : 0),
        (a = void 0 !== a ? a : 2 * Math.PI),
        (r = void 0 !== r ? Math.max(3, r) : 8);
      var s,
        o,
        h,
        u = [],
        c = [],
        p = [],
        d = [],
        f = t,
        m = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 1),
        g = new st.a(),
        y = new l.a();
      for (o = 0; o <= i; o++) {
        for (h = 0; h <= r; h++)
          (s = n + (h / r) * a),
            (g.x = f * Math.cos(s)),
            (g.y = f * Math.sin(s)),
            c.push(g.x, g.y, g.z),
            p.push(0, 0, 1),
            (y.x = (g.x / e + 1) / 2),
            (y.y = (g.y / e + 1) / 2),
            d.push(y.x, y.y);
        f += m;
      }
      for (o = 0; o < i; o++) {
        var v = o * (r + 1);
        for (h = 0; h < r; h++) {
          var x = (s = h + v),
            b = s + r + 1,
            w = s + r + 2,
            M = s + 1;
          u.push(x, b, M), u.push(b, w, M);
        }
      }
      this.setIndex(u),
        this.addAttribute("position", new $t(c, 3)),
        this.addAttribute("normal", new $t(p, 3)),
        this.addAttribute("uv", new $t(d, 2));
    }
    function zr(t, e, r, i) {
      jt.call(this),
        (this.type = "LatheGeometry"),
        (this.parameters = {
          points: t,
          segments: e,
          phiStart: r,
          phiLength: i,
        }),
        this.fromBufferGeometry(new Br(t, e, r, i)),
        this.mergeVertices();
    }
    function Br(t, e, r, i) {
      ie.call(this),
        (this.type = "LatheBufferGeometry"),
        (this.parameters = {
          points: t,
          segments: e,
          phiStart: r,
          phiLength: i,
        }),
        (e = Math.floor(e) || 12),
        (r = r || 0),
        (i = i || 2 * Math.PI),
        (i = c.a.clamp(i, 0, 2 * Math.PI));
      var n,
        a,
        s,
        o = [],
        h = [],
        u = [],
        p = 1 / e,
        d = new st.a(),
        f = new l.a();
      for (a = 0; a <= e; a++) {
        var m = r + a * p * i,
          g = Math.sin(m),
          y = Math.cos(m);
        for (s = 0; s <= t.length - 1; s++)
          (d.x = t[s].x * g),
            (d.y = t[s].y),
            (d.z = t[s].x * y),
            h.push(d.x, d.y, d.z),
            (f.x = a / e),
            (f.y = s / (t.length - 1)),
            u.push(f.x, f.y);
      }
      for (a = 0; a < e; a++)
        for (s = 0; s < t.length - 1; s++) {
          var v = (n = s + a * t.length),
            x = n + t.length,
            b = n + t.length + 1,
            w = n + 1;
          o.push(v, x, w), o.push(x, b, w);
        }
      if (
        (this.setIndex(o),
        this.addAttribute("position", new $t(h, 3)),
        this.addAttribute("uv", new $t(u, 2)),
        this.computeVertexNormals(),
        i === 2 * Math.PI)
      ) {
        var M = this.attributes.normal.array,
          T = new st.a(),
          S = new st.a(),
          _ = new st.a();
        for (n = e * t.length * 3, a = 0, s = 0; a < t.length; a++, s += 3)
          (T.x = M[s + 0]),
            (T.y = M[s + 1]),
            (T.z = M[s + 2]),
            (S.x = M[n + s + 0]),
            (S.y = M[n + s + 1]),
            (S.z = M[n + s + 2]),
            _.addVectors(T, S).normalize(),
            (M[s + 0] = M[n + s + 0] = _.x),
            (M[s + 1] = M[n + s + 1] = _.y),
            (M[s + 2] = M[n + s + 2] = _.z);
      }
    }
    function Ur(t) {
      return (Ur =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Nr(t, e) {
      jt.call(this),
        (this.type = "ShapeGeometry"),
        "object" === Ur(e) &&
          (console.warn(
            "RK.ShapeGeometry: Options parameter has been removed."
          ),
          (e = e.curveSegments)),
        (this.parameters = { shapes: t, curveSegments: e }),
        this.fromBufferGeometry(new Dr(t, e)),
        this.mergeVertices();
    }
    function Dr(t, e) {
      ie.call(this),
        (this.type = "ShapeBufferGeometry"),
        (this.parameters = { shapes: t, curveSegments: e }),
        (e = e || 12);
      var r = [],
        i = [],
        n = [],
        a = [],
        s = 0,
        o = 0;
      if (!1 === Array.isArray(t)) u(t);
      else
        for (var h = 0; h < t.length; h++)
          u(t[h]), this.addGroup(s, o, h), (s += o), (o = 0);
      function u(t) {
        var s,
          h,
          u,
          c = i.length / 3,
          l = t.extractPoints(e),
          p = l.shape,
          d = l.holes;
        if (!1 === _r.isClockWise(p))
          for (p = p.reverse(), s = 0, h = d.length; s < h; s++)
            (u = d[s]), !0 === _r.isClockWise(u) && (d[s] = u.reverse());
        var f = _r.triangulateShape(p, d);
        for (s = 0, h = d.length; s < h; s++) (u = d[s]), (p = p.concat(u));
        for (s = 0, h = p.length; s < h; s++) {
          var m = p[s];
          i.push(m.x, m.y, 0), n.push(0, 0, 1), a.push(m.x, m.y);
        }
        for (s = 0, h = f.length; s < h; s++) {
          var g = f[s],
            y = g[0] + c,
            v = g[1] + c,
            x = g[2] + c;
          r.push(y, v, x), (o += 3);
        }
      }
      this.setIndex(r),
        this.addAttribute("position", new $t(i, 3)),
        this.addAttribute("normal", new $t(n, 3)),
        this.addAttribute("uv", new $t(a, 2));
    }
    function Ir(t, e) {
      ie.call(this),
        (this.type = "EdgesGeometry"),
        (this.parameters = { thresholdAngle: e }),
        (e = void 0 !== e ? e : 1);
      var r,
        i,
        n,
        a,
        s = [],
        o = Math.cos(c.a.DEG2RAD * e),
        h = [0, 0],
        u = {},
        l = ["a", "b", "c"];
      t.isBufferGeometry
        ? (a = new jt()).fromBufferGeometry(t)
        : (a = t.clone()),
        a.mergeVertices(),
        a.computeFaceNormals();
      for (var p = a.vertices, d = a.faces, f = 0, m = d.length; f < m; f++)
        for (var g = d[f], y = 0; y < 3; y++)
          (r = g[l[y]]),
            (i = g[l[(y + 1) % 3]]),
            (h[0] = Math.min(r, i)),
            (h[1] = Math.max(r, i)),
            void 0 === u[(n = h[0] + "," + h[1])]
              ? (u[n] = { index1: h[0], index2: h[1], face1: f, face2: void 0 })
              : (u[n].face2 = f);
      for (n in u) {
        var v = u[n];
        if (
          void 0 === v.face2 ||
          d[v.face1].normal.dot(d[v.face2].normal) <= o
        ) {
          var x = p[v.index1];
          s.push(x.x, x.y, x.z), (x = p[v.index2]), s.push(x.x, x.y, x.z);
        }
      }
      this.addAttribute("position", new $t(s, 3));
    }
    function Gr(t, e, r, i, n, a, s, o) {
      jt.call(this),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: r,
          radialSegments: i,
          heightSegments: n,
          openEnded: a,
          thetaStart: s,
          thetaLength: o,
        }),
        this.fromBufferGeometry(new kr(t, e, r, i, n, a, s, o)),
        this.mergeVertices();
    }
    function kr(t, e, r, i, n, a, s, o) {
      ie.call(this),
        (this.type = "CylinderBufferGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: r,
          radialSegments: i,
          heightSegments: n,
          openEnded: a,
          thetaStart: s,
          thetaLength: o,
        });
      var h = this;
      (t = void 0 !== t ? t : 20),
        (e = void 0 !== e ? e : 20),
        (r = void 0 !== r ? r : 100),
        (i = Math.floor(i) || 8),
        (n = Math.floor(n) || 1),
        (a = void 0 !== a && a),
        (s = void 0 !== s ? s : 0),
        (o = void 0 !== o ? o : 2 * Math.PI);
      var u = [],
        c = [],
        p = [],
        d = [],
        f = 0,
        m = [],
        g = r / 2,
        y = 0;
      function v(r) {
        var n,
          a,
          m,
          v = new l.a(),
          x = new st.a(),
          b = 0,
          w = !0 === r ? t : e,
          M = !0 === r ? 1 : -1;
        for (a = f, n = 1; n <= i; n++)
          c.push(0, g * M, 0), p.push(0, M, 0), d.push(0.5, 0.5), f++;
        for (m = f, n = 0; n <= i; n++) {
          var T = (n / i) * o + s,
            S = Math.cos(T),
            _ = Math.sin(T);
          (x.x = w * _),
            (x.y = g * M),
            (x.z = w * S),
            c.push(x.x, x.y, x.z),
            p.push(0, M, 0),
            (v.x = 0.5 * S + 0.5),
            (v.y = 0.5 * _ * M + 0.5),
            d.push(v.x, v.y),
            f++;
        }
        for (n = 0; n < i; n++) {
          var E = a + n,
            A = m + n;
          !0 === r ? u.push(A, A + 1, E) : u.push(A + 1, A, E), (b += 3);
        }
        h.addGroup(y, b, !0 === r ? 1 : 2), (y += b);
      }
      !(function () {
        var a,
          l,
          v = new st.a(),
          x = new st.a(),
          b = 0,
          w = (e - t) / r;
        for (l = 0; l <= n; l++) {
          var M = [],
            T = l / n,
            S = T * (e - t) + t;
          for (a = 0; a <= i; a++) {
            var _ = a / i,
              E = _ * o + s,
              A = Math.sin(E),
              R = Math.cos(E);
            (x.x = S * A),
              (x.y = -T * r + g),
              (x.z = S * R),
              c.push(x.x, x.y, x.z),
              v.set(A, w, R).normalize(),
              p.push(v.x, v.y, v.z),
              d.push(_, 1 - T),
              M.push(f++);
          }
          m.push(M);
        }
        for (a = 0; a < i; a++)
          for (l = 0; l < n; l++) {
            var P = m[l][a],
              C = m[l + 1][a],
              O = m[l + 1][a + 1],
              F = m[l][a + 1];
            u.push(P, C, F), u.push(C, O, F), (b += 6);
          }
        h.addGroup(y, b, 0), (y += b);
      })(),
        !1 === a && (t > 0 && v(!0), e > 0 && v(!1)),
        this.setIndex(u),
        this.addAttribute("position", new $t(c, 3)),
        this.addAttribute("normal", new $t(p, 3)),
        this.addAttribute("uv", new $t(d, 2));
    }
    function Wr(t, e, r, i, n, a, s) {
      Gr.call(this, 0, t, e, r, i, n, a, s),
        (this.type = "ConeGeometry"),
        (this.parameters = {
          radius: t,
          height: e,
          radialSegments: r,
          heightSegments: i,
          openEnded: n,
          thetaStart: a,
          thetaLength: s,
        });
    }
    function Vr(t, e, r, i, n, a, s) {
      kr.call(this, 0, t, e, r, i, n, a, s),
        (this.type = "ConeBufferGeometry"),
        (this.parameters = {
          radius: t,
          height: e,
          radialSegments: r,
          heightSegments: i,
          openEnded: n,
          thetaStart: a,
          thetaLength: s,
        });
    }
    function jr(t, e, r, i) {
      jt.call(this),
        (this.type = "CircleGeometry"),
        (this.parameters = {
          radius: t,
          segments: e,
          thetaStart: r,
          thetaLength: i,
        }),
        this.fromBufferGeometry(new Xr(t, e, r, i)),
        this.mergeVertices();
    }
    function Xr(t, e, r, i) {
      ie.call(this),
        (this.type = "CircleBufferGeometry"),
        (this.parameters = {
          radius: t,
          segments: e,
          thetaStart: r,
          thetaLength: i,
        }),
        (t = t || 50),
        (e = void 0 !== e ? Math.max(3, e) : 8),
        (r = void 0 !== r ? r : 0),
        (i = void 0 !== i ? i : 2 * Math.PI);
      var n,
        a,
        s = [],
        o = [],
        h = [],
        u = [],
        c = new st.a(),
        p = new l.a();
      for (
        o.push(0, 0, 0), h.push(0, 0, 1), u.push(0.5, 0.5), a = 0, n = 3;
        a <= e;
        a++, n += 3
      ) {
        var d = r + (a / e) * i;
        (c.x = t * Math.cos(d)),
          (c.y = t * Math.sin(d)),
          o.push(c.x, c.y, c.z),
          h.push(0, 0, 1),
          (p.x = (o[n] / t + 1) / 2),
          (p.y = (o[n + 1] / t + 1) / 2),
          u.push(p.x, p.y);
      }
      for (n = 1; n <= e; n++) s.push(n, n + 1, 0);
      this.setIndex(s),
        this.addAttribute("position", new $t(o, 3)),
        this.addAttribute("normal", new $t(h, 3)),
        this.addAttribute("uv", new $t(u, 2));
    }
    function qr(t) {
      ve.call(this, t), (this.type = "RawShaderMaterial");
    }
    (Er.prototype = Object.create(jt.prototype)),
      (Er.prototype.constructor = Er),
      (Ar.prototype = Object.create(ie.prototype)),
      (Ar.prototype.constructor = Ar),
      (Ar.prototype.getArrays = function () {
        var t = this.getAttribute("position"),
          e = t ? Array.prototype.slice.call(t.array) : [],
          r = this.getAttribute("uv"),
          i = r ? Array.prototype.slice.call(r.array) : [],
          n = this.index;
        return {
          position: e,
          uv: i,
          index: n ? Array.prototype.slice.call(n.array) : [],
        };
      }),
      (Ar.prototype.addShapeList = function (t, e) {
        var r = t.length;
        e.arrays = this.getArrays();
        for (var i = 0; i < r; i++) {
          var n = t[i];
          this.addShape(n, e);
        }
        this.setIndex(e.arrays.index),
          this.addAttribute("position", new $t(e.arrays.position, 3)),
          this.addAttribute("uv", new $t(e.arrays.uv, 2));
      }),
      (Ar.prototype.addShape = function (t, e) {
        var r,
          i,
          n,
          a,
          s,
          o,
          h,
          u,
          c = e.arrays ? e.arrays : this.getArrays(),
          p = c.position,
          d = c.index,
          f = c.uv,
          m = [],
          g = void 0 !== e.amount ? e.amount : 100,
          y = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
          v = void 0 !== e.bevelSize ? e.bevelSize : y - 2,
          x = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
          b = void 0 === e.bevelEnabled || e.bevelEnabled,
          w = void 0 !== e.curveSegments ? e.curveSegments : 12,
          M = void 0 !== e.steps ? e.steps : 1,
          T = e.extrudePath,
          S = !1,
          _ = void 0 !== e.UVGenerator ? e.UVGenerator : Er.WorldUVGenerator;
        T &&
          ((r = T.getSpacedPoints(M)),
          (S = !0),
          (b = !1),
          (i = void 0 !== e.frames ? e.frames : T.computeFrenetFrames(M, !1)),
          (n = new st.a()),
          (a = new st.a()),
          (s = new st.a())),
          b || ((x = 0), (y = 0), (v = 0));
        var E = this,
          A = t.extractPoints(w),
          R = A.shape,
          P = A.holes;
        if (!_r.isClockWise(R))
          for (R = R.reverse(), h = 0, u = P.length; h < u; h++)
            (o = P[h]), _r.isClockWise(o) && (P[h] = o.reverse());
        var C = _r.triangulateShape(R, P),
          O = R;
        for (h = 0, u = P.length; h < u; h++) (o = P[h]), (R = R.concat(o));
        function F(t, e, r) {
          return (
            e || console.error("RK.ExtrudeGeometry: vec does not exist"),
            e.clone().multiplyScalar(r).add(t)
          );
        }
        var L,
          z,
          B,
          U,
          N,
          D,
          I = R.length,
          G = C.length;
        function k(t, e, r) {
          var i,
            n,
            a,
            s = t.x - e.x,
            o = t.y - e.y,
            h = r.x - t.x,
            u = r.y - t.y,
            c = s * s + o * o,
            p = s * u - o * h;
          if (Math.abs(p) > Number.EPSILON) {
            var d = Math.sqrt(c),
              f = Math.sqrt(h * h + u * u),
              m = e.x - o / d,
              g = e.y + s / d,
              y =
                ((r.x - u / f - m) * u - (r.y + h / f - g) * h) /
                (s * u - o * h),
              v = (i = m + s * y - t.x) * i + (n = g + o * y - t.y) * n;
            if (v <= 2) return new l.a(i, n);
            a = Math.sqrt(v / 2);
          } else {
            var x = !1;
            s > Number.EPSILON
              ? h > Number.EPSILON && (x = !0)
              : s < -Number.EPSILON
              ? h < -Number.EPSILON && (x = !0)
              : Math.sign(o) === Math.sign(u) && (x = !0),
              x
                ? ((i = -o), (n = s), (a = Math.sqrt(c)))
                : ((i = s), (n = o), (a = Math.sqrt(c / 2)));
          }
          return new l.a(i / a, n / a);
        }
        for (
          var W = [], V = 0, j = O.length, X = j - 1, q = V + 1;
          V < j;
          V++, X++, q++
        )
          X === j && (X = 0), q === j && (q = 0), (W[V] = k(O[V], O[X], O[q]));
        var K,
          H,
          Y = [],
          Z = W.concat();
        for (h = 0, u = P.length; h < u; h++) {
          for (
            o = P[h], K = [], V = 0, X = (j = o.length) - 1, q = V + 1;
            V < j;
            V++, X++, q++
          )
            X === j && (X = 0),
              q === j && (q = 0),
              (K[V] = k(o[V], o[X], o[q]));
          Y.push(K), (Z = Z.concat(K));
        }
        for (L = 0; L < x; L++) {
          for (
            B = L / x,
              U = y * Math.cos((B * Math.PI) / 2),
              z = v * Math.sin((B * Math.PI) / 2),
              V = 0,
              j = O.length;
            V < j;
            V++
          )
            Q((N = F(O[V], W[V], z)).x, N.y, -U);
          for (h = 0, u = P.length; h < u; h++)
            for (o = P[h], K = Y[h], V = 0, j = o.length; V < j; V++)
              Q((N = F(o[V], K[V], z)).x, N.y, -U);
        }
        for (z = v, V = 0; V < I; V++)
          (N = b ? F(R[V], Z[V], z) : R[V]),
            S
              ? (a.copy(i.normals[0]).multiplyScalar(N.x),
                n.copy(i.binormals[0]).multiplyScalar(N.y),
                s.copy(r[0]).add(a).add(n),
                Q(s.x, s.y, s.z))
              : Q(N.x, N.y, 0);
        for (H = 1; H <= M; H++)
          for (V = 0; V < I; V++)
            (N = b ? F(R[V], Z[V], z) : R[V]),
              S
                ? (a.copy(i.normals[H]).multiplyScalar(N.x),
                  n.copy(i.binormals[H]).multiplyScalar(N.y),
                  s.copy(r[H]).add(a).add(n),
                  Q(s.x, s.y, s.z))
                : Q(N.x, N.y, (g / M) * H);
        for (L = x - 1; L >= 0; L--) {
          for (
            B = L / x,
              U = y * Math.cos((B * Math.PI) / 2),
              z = v * Math.sin((B * Math.PI) / 2),
              V = 0,
              j = O.length;
            V < j;
            V++
          )
            Q((N = F(O[V], W[V], z)).x, N.y, g + U);
          for (h = 0, u = P.length; h < u; h++)
            for (o = P[h], K = Y[h], V = 0, j = o.length; V < j; V++)
              (N = F(o[V], K[V], z)),
                S
                  ? Q(N.x, N.y + r[M - 1].y, r[M - 1].x + U)
                  : Q(N.x, N.y, g + U);
        }
        function J(t, e) {
          var r, i;
          for (V = t.length; --V >= 0; ) {
            (r = V), (i = V - 1) < 0 && (i = t.length - 1);
            var n = 0,
              a = M + 2 * x;
            for (n = 0; n < a; n++) {
              var s = I * n,
                o = I * (n + 1);
              tt(e + r + s, e + i + s, e + i + o, e + r + o, t, n, a, r, i);
            }
          }
        }
        function Q(t, e, r) {
          m.push(t), m.push(e), m.push(r);
        }
        function $(t, e, r) {
          et(t), et(e), et(r);
          var i = p.length / 3,
            n = _.generateTopUV(E, p, i - 3, i - 2, i - 1);
          rt(n[0]), rt(n[1]), rt(n[2]);
        }
        function tt(t, e, r, i, n, a, s, o, h) {
          et(t), et(e), et(i), et(e), et(r), et(i);
          var u = p.length / 3,
            c = _.generateSideWallUV(E, p, u - 6, u - 3, u - 2, u - 1);
          rt(c[0]), rt(c[1]), rt(c[3]), rt(c[1]), rt(c[2]), rt(c[3]);
        }
        function et(t) {
          d.push(p.length / 3),
            p.push(m[3 * t + 0]),
            p.push(m[3 * t + 1]),
            p.push(m[3 * t + 2]);
        }
        function rt(t) {
          f.push(t.x), f.push(t.y);
        }
        !(function () {
          var t = p.length / 3;
          if (b) {
            var r = 0,
              i = I * r;
            for (V = 0; V < G; V++) $((D = C[V])[2] + i, D[1] + i, D[0] + i);
            for (i = I * (r = M + 2 * x), V = 0; V < G; V++)
              $((D = C[V])[0] + i, D[1] + i, D[2] + i);
          } else {
            for (V = 0; V < G; V++) $((D = C[V])[2], D[1], D[0]);
            for (V = 0; V < G; V++)
              $((D = C[V])[0] + I * M, D[1] + I * M, D[2] + I * M);
          }
          E.addGroup(
            t,
            p.length / 3 - t,
            void 0 !== e.material ? e.material : 0
          );
        })(),
          (function () {
            var t = p.length / 3,
              r = 0;
            for (J(O, r), r += O.length, h = 0, u = P.length; h < u; h++)
              J((o = P[h]), r), (r += o.length);
            E.addGroup(
              t,
              p.length / 3 - t,
              void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1
            );
          })(),
          e.arrays ||
            (this.setIndex(d),
            this.addAttribute("position", new $t(p, 3)),
            this.addAttribute("uv", new $t(e.arrays.uv, 2)));
      }),
      (Er.WorldUVGenerator = {
        generateTopUV: function (t, e, r, i, n) {
          var a = e[3 * r],
            s = e[3 * r + 1],
            o = e[3 * i],
            h = e[3 * i + 1],
            u = e[3 * n],
            c = e[3 * n + 1];
          return [new l.a(a, s), new l.a(o, h), new l.a(u, c)];
        },
        generateSideWallUV: function (t, e, r, i, n, a) {
          var s = e[3 * r],
            o = e[3 * r + 1],
            h = e[3 * r + 2],
            u = e[3 * i],
            c = e[3 * i + 1],
            p = e[3 * i + 2],
            d = e[3 * n],
            f = e[3 * n + 1],
            m = e[3 * n + 2],
            g = e[3 * a],
            y = e[3 * a + 1],
            v = e[3 * a + 2];
          return Math.abs(o - c) < 0.01
            ? [
                new l.a(s, 1 - h),
                new l.a(u, 1 - p),
                new l.a(d, 1 - m),
                new l.a(g, 1 - v),
              ]
            : [
                new l.a(o, 1 - h),
                new l.a(c, 1 - p),
                new l.a(f, 1 - m),
                new l.a(y, 1 - v),
              ];
        },
      }),
      (Rr.prototype = Object.create(jt.prototype)),
      (Rr.prototype.constructor = Rr),
      (Pr.prototype = Object.create(Ar.prototype)),
      (Pr.prototype.constructor = Pr),
      (Cr.prototype = Object.create(jt.prototype)),
      (Cr.prototype.constructor = Cr),
      (Or.prototype = Object.create(ie.prototype)),
      (Or.prototype.constructor = Or),
      (Fr.prototype = Object.create(jt.prototype)),
      (Fr.prototype.constructor = Fr),
      (Lr.prototype = Object.create(ie.prototype)),
      (Lr.prototype.constructor = Lr),
      (zr.prototype = Object.create(jt.prototype)),
      (zr.prototype.constructor = zr),
      (Br.prototype = Object.create(ie.prototype)),
      (Br.prototype.constructor = Br),
      (Nr.prototype = Object.create(jt.prototype)),
      (Nr.prototype.constructor = Nr),
      (Dr.prototype = Object.create(ie.prototype)),
      (Dr.prototype.constructor = Dr),
      (Ir.prototype = Object.create(ie.prototype)),
      (Ir.prototype.constructor = Ir),
      (Gr.prototype = Object.create(jt.prototype)),
      (Gr.prototype.constructor = Gr),
      (kr.prototype = Object.create(ie.prototype)),
      (kr.prototype.constructor = kr),
      (Wr.prototype = Object.create(Gr.prototype)),
      (Wr.prototype.constructor = Wr),
      (Vr.prototype = Object.create(kr.prototype)),
      (Vr.prototype.constructor = Vr),
      (jr.prototype = Object.create(jt.prototype)),
      (jr.prototype.constructor = jr),
      (Xr.prototype = Object.create(ie.prototype)),
      (Xr.prototype.constructor = Xr),
      (qr.prototype = Object.create(ve.prototype)),
      (qr.prototype.constructor = qr),
      (qr.prototype.isRawShaderMaterial = !0);
    var Kr = {
      enabled: !1,
      files: {},
      add: function (t, e) {
        !1 !== this.enabled && (this.files[t] = e);
      },
      get: function (t) {
        if (!1 !== this.enabled) return this.files[t];
      },
      remove: function (t) {
        delete this.files[t];
      },
      clear: function () {
        this.files = {};
      },
    };
    function Hr(t, e, r) {
      var i = this,
        n = !1,
        a = 0,
        s = 0;
      (this.onStart = void 0),
        (this.onLoad = t),
        (this.onProgress = e),
        (this.onError = r),
        (this.itemStart = function (t) {
          s++, !1 === n && void 0 !== i.onStart && i.onStart(t, a, s), (n = !0);
        }),
        (this.itemEnd = function (t) {
          a++,
            void 0 !== i.onProgress && i.onProgress(t, a, s),
            a === s && ((n = !1), void 0 !== i.onLoad && i.onLoad());
        }),
        (this.itemError = function (t) {
          void 0 !== i.onError && i.onError(t);
        });
    }
    var Yr = new Hr();
    function Zr(t) {
      this.manager = void 0 !== t ? t : Yr;
    }
    function Jr(t) {
      (this.manager = void 0 !== t ? t : Yr), (this._parser = null);
    }
    function Qr(t) {
      this.manager = void 0 !== t ? t : Yr;
    }
    function $r(t) {
      this.manager = void 0 !== t ? t : Yr;
    }
    function ti(t) {
      this.manager = void 0 !== t ? t : Yr;
    }
    function ei(t, e, r, i, n) {
      var a = 0.5 * (i - e),
        s = 0.5 * (n - r),
        o = t * t;
      return (
        (2 * r - 2 * i + a + s) * (t * o) +
        (-3 * r + 3 * i - 2 * a - s) * o +
        a * t +
        r
      );
    }
    function ri(t, e, r, i) {
      return (
        (function (t, e) {
          var r = 1 - t;
          return r * r * e;
        })(t, e) +
        (function (t, e) {
          return 2 * (1 - t) * t * e;
        })(t, r) +
        (function (t, e) {
          return t * t * e;
        })(t, i)
      );
    }
    function ii(t, e, r, i, n) {
      return (
        (function (t, e) {
          var r = 1 - t;
          return r * r * r * e;
        })(t, e) +
        (function (t, e) {
          var r = 1 - t;
          return 3 * r * r * t * e;
        })(t, r) +
        (function (t, e) {
          return 3 * (1 - t) * t * t * e;
        })(t, i) +
        (function (t, e) {
          return t * t * t * e;
        })(t, n)
      );
    }
    function ni() {
      this.arcLengthDivisions = 200;
    }
    function ai(t, e) {
      ni.call(this), (this.v1 = t), (this.v2 = e);
    }
    function si() {
      ni.call(this), (this.curves = []), (this.autoClose = !1);
    }
    function oi(t, e, r, i, n, a, s, o) {
      ni.call(this),
        (this.aX = t),
        (this.aY = e),
        (this.xRadius = r),
        (this.yRadius = i),
        (this.aStartAngle = n),
        (this.aEndAngle = a),
        (this.aClockwise = s),
        (this.aRotation = o || 0);
    }
    function hi(t) {
      ni.call(this), (this.points = void 0 === t ? [] : t);
    }
    function ui(t, e, r, i) {
      ni.call(this), (this.v0 = t), (this.v1 = e), (this.v2 = r), (this.v3 = i);
    }
    function ci(t, e, r) {
      ni.call(this), (this.v0 = t), (this.v1 = e), (this.v2 = r);
    }
    Object.assign(Zr.prototype, {
      load: function (t, e, r, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
        var n = this,
          a = Kr.get(t);
        if (void 0 !== a)
          return (
            n.manager.itemStart(t),
            setTimeout(function () {
              e && e(a), n.manager.itemEnd(t);
            }, 0),
            a
          );
        var s = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (s) {
          var o = s[1],
            h = !!s[2],
            u = s[3];
          (u = window.decodeURIComponent(u)), h && (u = window.atob(u));
          try {
            var c,
              l = (this.responseType || "").toLowerCase();
            switch (l) {
              case "arraybuffer":
              case "blob":
                c = new ArrayBuffer(u.length);
                for (var p = new Uint8Array(c), d = 0; d < u.length; d++)
                  p[d] = u.charCodeAt(d);
                "blob" === l && (c = new Blob([c], { type: o }));
                break;
              case "document":
                var f = new DOMParser();
                c = f.parseFromString(u, o);
                break;
              case "json":
                c = JSON.parse(u);
                break;
              default:
                c = u;
            }
            window.setTimeout(function () {
              e && e(c), n.manager.itemEnd(t);
            }, 0);
          } catch (e) {
            window.setTimeout(function () {
              i && i(e), n.manager.itemEnd(t), n.manager.itemError(t);
            }, 0);
          }
        } else {
          var m = new XMLHttpRequest();
          for (var g in (m.open("GET", t, !0),
          m.addEventListener(
            "load",
            function (r) {
              var a = r.target.response;
              Kr.add(t, a),
                200 === this.status
                  ? (e && e(a), n.manager.itemEnd(t))
                  : 0 === this.status
                  ? (console.warn("RK.FileLoader: HTTP Status 0 received."),
                    e && e(a),
                    n.manager.itemEnd(t))
                  : (i && i(r), n.manager.itemEnd(t), n.manager.itemError(t));
            },
            !1
          ),
          void 0 !== r &&
            m.addEventListener(
              "progress",
              function (t) {
                r(t);
              },
              !1
            ),
          m.addEventListener(
            "error",
            function (e) {
              i && i(e), n.manager.itemEnd(t), n.manager.itemError(t);
            },
            !1
          ),
          void 0 !== this.responseType && (m.responseType = this.responseType),
          void 0 !== this.withCredentials &&
            (m.withCredentials = this.withCredentials),
          m.overrideMimeType &&
            m.overrideMimeType(
              void 0 !== this.mimeType ? this.mimeType : "text/plain"
            ),
          this.requestHeader))
            m.setRequestHeader(g, this.requestHeader[g]);
          m.send(null);
        }
        return n.manager.itemStart(t), m;
      },
      setPath: function (t) {
        return (this.path = t), this;
      },
      setResponseType: function (t) {
        return (this.responseType = t), this;
      },
      setWithCredentials: function (t) {
        return (this.withCredentials = t), this;
      },
      setMimeType: function (t) {
        return (this.mimeType = t), this;
      },
      setRequestHeader: function (t) {
        return (this.requestHeader = t), this;
      },
    }),
      Object.assign(Jr.prototype, {
        load: function (t, e, r, i) {
          var n = this,
            a = new nr(),
            s = new Zr(this.manager);
          return (
            s.setResponseType("arraybuffer"),
            s.load(
              t,
              function (t) {
                var r = n._parser(t);
                r &&
                  (void 0 !== r.image
                    ? (a.image = r.image)
                    : void 0 !== r.data &&
                      ((a.image.width = r.width),
                      (a.image.height = r.height),
                      (a.image.data = r.data)),
                  (a.wrapS =
                    void 0 !== r.wrapS ? r.wrapS : u.ClampToEdgeWrapping),
                  (a.wrapT =
                    void 0 !== r.wrapT ? r.wrapT : u.ClampToEdgeWrapping),
                  (a.magFilter =
                    void 0 !== r.magFilter ? r.magFilter : u.LinearFilter),
                  (a.minFilter =
                    void 0 !== r.minFilter
                      ? r.minFilter
                      : u.LinearMipMapLinearFilter),
                  (a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1),
                  void 0 !== r.format && (a.format = r.format),
                  void 0 !== r.type && (a.type = r.type),
                  void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps),
                  1 === r.mipmapCount && (a.minFilter = u.LinearFilter),
                  (a.needsUpdate = !0),
                  e && e(a, r));
              },
              r,
              i
            ),
            a
          );
        },
      }),
      Object.assign(Qr.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, r, i) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
          var n = this,
            a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
          return (
            a.addEventListener(
              "load",
              function () {
                e && e(this), n.manager.itemEnd(t);
              },
              !1
            ),
            a.addEventListener(
              "error",
              function (e) {
                i && i(e), n.manager.itemEnd(t), n.manager.itemError(t);
              },
              !1
            ),
            "data:" !== t.substr(0, 5) &&
              void 0 !== this.crossOrigin &&
              (a.crossOrigin = this.crossOrigin),
            n.manager.itemStart(t),
            (a.src = t),
            a
          );
        },
        setCrossOrigin: function (t) {
          return (this.crossOrigin = t), this;
        },
        setPath: function (t) {
          return (this.path = t), this;
        },
      }),
      Object.assign($r.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, r, i) {
          var n = new v(),
            a = new Qr(this.manager);
          a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
          var s = 0;
          function o(r) {
            a.load(
              t[r],
              function (t) {
                (n.images[r] = t),
                  6 === ++s && ((n.needsUpdate = !0), e && e(n));
              },
              void 0,
              i
            );
          }
          for (var h = 0; h < t.length; ++h) o(h);
          return n;
        },
        setCrossOrigin: function (t) {
          return (this.crossOrigin = t), this;
        },
        setPath: function (t) {
          return (this.path = t), this;
        },
      }),
      Object.assign(ti.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, r, i) {
          var n = new d(),
            a =
              t.search(/\.(jpg|jpeg)$/) > 0 ||
              0 === t.search(/^data\:image\/jpeg/);
          n.format = a ? u.RGBFormat : u.RGBAFormat;
          var s = window.Pre && Pre.resources[t];
          if (s)
            Promise.resolve(s)
              .then(function (t) {
                (n.image = t), (n.needsUpdate = !0), e && e(n);
              })
              .catch(i);
          else {
            var o = new Qr(this.manager);
            o.setCrossOrigin(this.crossOrigin),
              o.setPath(this.path),
              (n.image = o.load(
                t,
                function () {
                  (n.needsUpdate = !0), e && e(n);
                },
                r,
                i
              ));
          }
          return n;
        },
        setCrossOrigin: function (t) {
          return (this.crossOrigin = t), this;
        },
        setPath: function (t) {
          return (this.path = t), this;
        },
      }),
      Object.assign(ni.prototype, {
        getPoint: function () {
          return console.warn("RK.Curve: .getPoint() not implemented."), null;
        },
        getPointAt: function (t) {
          var e = this.getUtoTmapping(t);
          return this.getPoint(e);
        },
        getPoints: function (t) {
          void 0 === t && (t = 5);
          for (var e = [], r = 0; r <= t; r++) e.push(this.getPoint(r / t));
          return e;
        },
        getSpacedPoints: function (t) {
          void 0 === t && (t = 5);
          for (var e = [], r = 0; r <= t; r++) e.push(this.getPointAt(r / t));
          return e;
        },
        getLength: function () {
          var t = this.getLengths();
          return t[t.length - 1];
        },
        getLengths: function (t) {
          if (
            (void 0 === t && (t = this.arcLengthDivisions),
            this.cacheArcLengths &&
              this.cacheArcLengths.length === t + 1 &&
              !this.needsUpdate)
          )
            return this.cacheArcLengths;
          this.needsUpdate = !1;
          var e,
            r,
            i = [],
            n = this.getPoint(0),
            a = 0;
          for (i.push(0), r = 1; r <= t; r++)
            (a += (e = this.getPoint(r / t)).distanceTo(n)), i.push(a), (n = e);
          return (this.cacheArcLengths = i), i;
        },
        updateArcLengths: function () {
          (this.needsUpdate = !0), this.getLengths();
        },
        getUtoTmapping: function (t, e) {
          var r,
            i = this.getLengths(),
            n = 0,
            a = i.length;
          r = e || t * i[a - 1];
          for (var s, o = 0, h = a - 1; o <= h; )
            if ((s = i[(n = Math.floor(o + (h - o) / 2))] - r) < 0) o = n + 1;
            else {
              if (!(s > 0)) {
                h = n;
                break;
              }
              h = n - 1;
            }
          if (i[(n = h)] === r) return n / (a - 1);
          var u = i[n];
          return (n + (r - u) / (i[n + 1] - u)) / (a - 1);
        },
        getTangent: function (t) {
          var e = t - 1e-4,
            r = t + 1e-4;
          e < 0 && (e = 0), r > 1 && (r = 1);
          var i = this.getPoint(e);
          return this.getPoint(r).clone().sub(i).normalize();
        },
        getTangentAt: function (t) {
          var e = this.getUtoTmapping(t);
          return this.getTangent(e);
        },
        computeFrenetFrames: function (t, e) {
          var r,
            i,
            n,
            a = new st.a(),
            s = [],
            o = [],
            h = [],
            u = new st.a(),
            l = new y.a();
          for (r = 0; r <= t; r++)
            (i = r / t), (s[r] = this.getTangentAt(i)), s[r].normalize();
          (o[0] = new st.a()), (h[0] = new st.a());
          var p = Number.MAX_VALUE,
            d = Math.abs(s[0].x),
            f = Math.abs(s[0].y),
            m = Math.abs(s[0].z);
          for (
            d <= p && ((p = d), a.set(1, 0, 0)),
              f <= p && ((p = f), a.set(0, 1, 0)),
              m <= p && a.set(0, 0, 1),
              u.crossVectors(s[0], a).normalize(),
              o[0].crossVectors(s[0], u),
              h[0].crossVectors(s[0], o[0]),
              r = 1;
            r <= t;
            r++
          )
            (o[r] = o[r - 1].clone()),
              (h[r] = h[r - 1].clone()),
              u.crossVectors(s[r - 1], s[r]),
              u.length() > Number.EPSILON &&
                (u.normalize(),
                (n = Math.acos(c.a.clamp(s[r - 1].dot(s[r]), -1, 1))),
                o[r].applyMatrix4(l.makeRotationAxis(u, n))),
              h[r].crossVectors(s[r], o[r]);
          if (!0 === e)
            for (
              n = Math.acos(c.a.clamp(o[0].dot(o[t]), -1, 1)),
                n /= t,
                s[0].dot(u.crossVectors(o[0], o[t])) > 0 && (n = -n),
                r = 1;
              r <= t;
              r++
            )
              o[r].applyMatrix4(l.makeRotationAxis(s[r], n * r)),
                h[r].crossVectors(s[r], o[r]);
          return { tangents: s, normals: o, binormals: h };
        },
      }),
      (ai.prototype = Object.create(ni.prototype)),
      (ai.prototype.constructor = ai),
      (ai.prototype.isLineCurve = !0),
      (ai.prototype.getPoint = function (t) {
        if (1 === t) return this.v2.clone();
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1), e;
      }),
      (ai.prototype.getPointAt = function (t) {
        return this.getPoint(t);
      }),
      (ai.prototype.getTangent = function (t) {
        return this.v2.clone().sub(this.v1).normalize();
      }),
      (si.prototype = Object.assign(Object.create(ni.prototype), {
        constructor: si,
        add: function (t) {
          this.curves.push(t);
        },
        closePath: function () {
          var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
          t.equals(e) || this.curves.push(new ai(e, t));
        },
        getPoint: function (t) {
          for (
            var e = t * this.getLength(), r = this.getCurveLengths(), i = 0;
            i < r.length;

          ) {
            if (r[i] >= e) {
              var n = r[i] - e,
                a = this.curves[i],
                s = a.getLength(),
                o = 0 === s ? 0 : 1 - n / s;
              return a.getPointAt(o);
            }
            i++;
          }
          return null;
        },
        getLength: function () {
          var t = this.getCurveLengths();
          return t[t.length - 1];
        },
        updateArcLengths: function () {
          (this.needsUpdate = !0),
            (this.cacheLengths = null),
            this.getCurveLengths();
        },
        getCurveLengths: function () {
          if (
            this.cacheLengths &&
            this.cacheLengths.length === this.curves.length
          )
            return this.cacheLengths;
          for (var t = [], e = 0, r = 0, i = this.curves.length; r < i; r++)
            (e += this.curves[r].getLength()), t.push(e);
          return (this.cacheLengths = t), t;
        },
        getSpacedPoints: function (t) {
          void 0 === t && (t = 40);
          for (var e = [], r = 0; r <= t; r++) e.push(this.getPoint(r / t));
          return this.autoClose && e.push(e[0]), e;
        },
        getPoints: function (t) {
          t = t || 12;
          for (var e, r = [], i = 0, n = this.curves; i < n.length; i++)
            for (
              var a = n[i],
                s =
                  a && a.isEllipseCurve
                    ? 2 * t
                    : a && a.isLineCurve
                    ? 1
                    : a && a.isSplineCurve
                    ? t * a.points.length
                    : t,
                o = a.getPoints(s),
                h = 0;
              h < o.length;
              h++
            ) {
              var u = o[h];
              (e && e.equals(u)) || (r.push(u), (e = u));
            }
          return (
            this.autoClose &&
              r.length > 1 &&
              !r[r.length - 1].equals(r[0]) &&
              r.push(r[0]),
            r
          );
        },
        createPointsGeometry: function (t) {
          var e = this.getPoints(t);
          return this.createGeometry(e);
        },
        createSpacedPointsGeometry: function (t) {
          var e = this.getSpacedPoints(t);
          return this.createGeometry(e);
        },
        createGeometry: function (t) {
          for (var e = new jt(), r = 0, i = t.length; r < i; r++) {
            var n = t[r];
            e.vertices.push(new st.a(n.x, n.y, n.z || 0));
          }
          return e;
        },
      })),
      (oi.prototype = Object.create(ni.prototype)),
      (oi.prototype.constructor = oi),
      (oi.prototype.isEllipseCurve = !0),
      (oi.prototype.getPoint = function (t) {
        for (
          var e = 2 * Math.PI,
            r = this.aEndAngle - this.aStartAngle,
            i = Math.abs(r) < Number.EPSILON;
          r < 0;

        )
          r += e;
        for (; r > e; ) r -= e;
        r < Number.EPSILON && (r = i ? 0 : e),
          !0 !== this.aClockwise || i || (r === e ? (r = -e) : (r -= e));
        var n = this.aStartAngle + t * r,
          a = this.aX + this.xRadius * Math.cos(n),
          s = this.aY + this.yRadius * Math.sin(n);
        if (0 !== this.aRotation) {
          var o = Math.cos(this.aRotation),
            h = Math.sin(this.aRotation),
            u = a - this.aX,
            c = s - this.aY;
          (a = u * o - c * h + this.aX), (s = u * h + c * o + this.aY);
        }
        return new l.a(a, s);
      }),
      (hi.prototype = Object.create(ni.prototype)),
      (hi.prototype.constructor = hi),
      (hi.prototype.isSplineCurve = !0),
      (hi.prototype.getPoint = function (t) {
        var e = this.points,
          r = (e.length - 1) * t,
          i = Math.floor(r),
          n = r - i,
          a = e[0 === i ? i : i - 1],
          s = e[i],
          o = e[i > e.length - 2 ? e.length - 1 : i + 1],
          h = e[i > e.length - 3 ? e.length - 1 : i + 2];
        return new l.a(ei(n, a.x, s.x, o.x, h.x), ei(n, a.y, s.y, o.y, h.y));
      }),
      (ui.prototype = Object.create(ni.prototype)),
      (ui.prototype.constructor = ui),
      (ui.prototype.getPoint = function (t) {
        var e = this.v0,
          r = this.v1,
          i = this.v2,
          n = this.v3;
        return new l.a(ii(t, e.x, r.x, i.x, n.x), ii(t, e.y, r.y, i.y, n.y));
      }),
      (ci.prototype = Object.create(ni.prototype)),
      (ci.prototype.constructor = ci),
      (ci.prototype.getPoint = function (t) {
        var e = this.v0,
          r = this.v1,
          i = this.v2;
        return new l.a(ri(t, e.x, r.x, i.x), ri(t, e.y, r.y, i.y));
      });
    var li,
      pi,
      di,
      fi,
      mi = Object.assign(Object.create(si.prototype), {
        fromPoints: function (t) {
          this.moveTo(t[0].x, t[0].y);
          for (var e = 1, r = t.length; e < r; e++) this.lineTo(t[e].x, t[e].y);
        },
        moveTo: function (t, e) {
          this.currentPoint.set(t, e);
        },
        lineTo: function (t, e) {
          var r = new ai(this.currentPoint.clone(), new l.a(t, e));
          this.curves.push(r), this.currentPoint.set(t, e);
        },
        quadraticCurveTo: function (t, e, r, i) {
          var n = new ci(
            this.currentPoint.clone(),
            new l.a(t, e),
            new l.a(r, i)
          );
          this.curves.push(n), this.currentPoint.set(r, i);
        },
        bezierCurveTo: function (t, e, r, i, n, a) {
          var s = new ui(
            this.currentPoint.clone(),
            new l.a(t, e),
            new l.a(r, i),
            new l.a(n, a)
          );
          this.curves.push(s), this.currentPoint.set(n, a);
        },
        splineThru: function (t) {
          var e = new hi([this.currentPoint.clone()].concat(t));
          this.curves.push(e), this.currentPoint.copy(t[t.length - 1]);
        },
        arc: function (t, e, r, i, n, a) {
          var s = this.currentPoint.x,
            o = this.currentPoint.y;
          this.absarc(t + s, e + o, r, i, n, a);
        },
        absarc: function (t, e, r, i, n, a) {
          this.absellipse(t, e, r, r, i, n, a);
        },
        ellipse: function (t, e, r, i, n, a, s, o) {
          var h = this.currentPoint.x,
            u = this.currentPoint.y;
          this.absellipse(t + h, e + u, r, i, n, a, s, o);
        },
        absellipse: function (t, e, r, i, n, a, s, o) {
          var h = new oi(t, e, r, i, n, a, s, o);
          if (this.curves.length > 0) {
            var u = h.getPoint(0);
            u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
          }
          this.curves.push(h);
          var c = h.getPoint(1);
          this.currentPoint.copy(c);
        },
      });
    function gi(t) {
      si.call(this), (this.currentPoint = new l.a()), t && this.fromPoints(t);
    }
    function yi() {
      gi.apply(this, arguments), (this.holes = []);
    }
    function vi() {
      (this.subPaths = []), (this.currentPath = null);
    }
    function xi(t) {
      this.data = t;
    }
    function bi(t) {
      this.manager = void 0 !== t ? t : Yr;
    }
    function wi(t) {
      ue.call(this),
        (this.type = "SpriteMaterial"),
        (this.color = new Dt(16777215)),
        (this.map = null),
        (this.rotation = 0),
        (this.fog = !1),
        (this.lights = !1),
        this.setValues(t);
    }
    function Mi(t) {
      (this.manager = void 0 !== t ? t : Yr), (this.textures = {});
    }
    function Ti() {
      (this.onLoadStart = function () {}),
        (this.onLoadProgress = function () {}),
        (this.onLoadComplete = function () {});
    }
    function Si(t, e) {
      zt.call(this),
        (this.type = "Light"),
        (this.color = new Dt(t)),
        (this.intensity = void 0 !== e ? e : 1),
        (this.receiveShadow = void 0);
    }
    function _i(t) {
      (this.camera = t),
        (this.bias = 0),
        (this.radius = 1),
        (this.mapSize = new l.a(512, 512)),
        (this.map = null),
        (this.matrix = new y.a());
    }
    function Ei(t, e, r, i) {
      Si.call(this, t, e),
        (this.type = "PointLight"),
        Object.defineProperty(this, "power", {
          get: function () {
            return 4 * this.intensity * Math.PI;
          },
          set: function (t) {
            this.intensity = t / (4 * Math.PI);
          },
        }),
        (this.distance = void 0 !== r ? r : 0),
        (this.decay = void 0 !== i ? i : 1),
        (this.shadow = new _i(new rr(90, 1, 0.5, 500)));
    }
    function Ai(t, e, r) {
      Si.call(this, t, r),
        (this.type = "HemisphereLight"),
        (this.castShadow = void 0),
        this.position.copy(zt.DefaultUp),
        this.updateMatrix(),
        (this.groundColor = new Dt(e));
    }
    function Ri(t, e) {
      Si.call(this, t, e),
        (this.type = "EnvironmentLight"),
        (this.castShadow = void 0),
        (this.saturationScale = 1),
        (this.rotateY = 0),
        (this.map = null);
    }
    function Pi() {
      _i.call(this, new Ut(-5, 5, 5, -5, 0.5, 500));
    }
    function Ci(t, e) {
      Si.call(this, t, e),
        (this.type = "DirectionalLight"),
        this.position.copy(zt.DefaultUp),
        this.updateMatrix(),
        (this.target = new zt()),
        (this.shadow = new Pi());
    }
    function Oi(t, e) {
      Si.call(this, t, e),
        (this.type = "AmbientLight"),
        (this.castShadow = void 0);
    }
    function Fi(t) {
      "string" == typeof t &&
        (console.warn("RK.Uniform: Type parameter is no longer needed."),
        (t = arguments[1])),
        (this.value = t);
    }
    function Li() {
      ie.call(this),
        (this.type = "InstancedBufferGeometry"),
        (this.maxInstancedCount = void 0);
    }
    function zi(t, e, r, i) {
      (this.uuid = c.a.generateUUID()),
        (this.data = t),
        (this.itemSize = e),
        (this.offset = r),
        (this.normalized = !0 === i);
    }
    function Bi(t, e) {
      (this.uuid = c.a.generateUUID()),
        (this.array = t),
        (this.stride = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.dynamic = !1),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.onUploadCallback = function () {}),
        (this.version = 0);
    }
    function Ui(t, e, r) {
      Bi.call(this, t, e), (this.meshPerAttribute = r || 1);
    }
    function Ni(t, e, r) {
      Xt.call(this, t, e), (this.meshPerAttribute = r || 1);
    }
    function Di(t, e, r, i) {
      (this.ray = new xe(t, e)),
        (this.near = r || 0),
        (this.far = i || 1 / 0),
        (this.params = {
          Mesh: {},
          Line: {},
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }),
        Object.defineProperties(this.params, {
          PointCloud: {
            get: function () {
              return (
                console.warn(
                  "RK.Raycaster: params.PointCloud has been renamed to params.Points."
                ),
                this.Points
              );
            },
          },
        });
    }
    function Ii(t, e) {
      return t.distance - e.distance;
    }
    function Gi(t, e, r, i) {
      if (!1 !== t.visible && (t.raycast(e, r), !0 === i))
        for (var n = t.children, a = 0, s = n.length; a < s; a++)
          Gi(n[a], e, r, !0);
    }
    function ki(t) {
      (this.autoStart = void 0 === t || t),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1);
    }
    function Wi(t, e, r) {
      return (
        (this.radius = void 0 !== t ? t : 1),
        (this.phi = void 0 !== e ? e : 0),
        (this.theta = void 0 !== r ? r : 0),
        this
      );
    }
    (gi.prototype = mi),
      (mi.constructor = gi),
      (yi.prototype = Object.assign(Object.create(mi), {
        constructor: yi,
        getPointsHoles: function (t) {
          for (var e = [], r = 0, i = this.holes.length; r < i; r++)
            e[r] = this.holes[r].getPoints(t);
          return e;
        },
        extractAllPoints: function (t) {
          return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
        },
        extractPoints: function (t) {
          return this.extractAllPoints(t);
        },
      })),
      Object.assign(vi.prototype, {
        moveTo: function (t, e) {
          (this.currentPath = new gi()),
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e);
        },
        lineTo: function (t, e) {
          this.currentPath.lineTo(t, e);
        },
        quadraticCurveTo: function (t, e, r, i) {
          this.currentPath.quadraticCurveTo(t, e, r, i);
        },
        bezierCurveTo: function (t, e, r, i, n, a) {
          this.currentPath.bezierCurveTo(t, e, r, i, n, a);
        },
        splineThru: function (t) {
          this.currentPath.splineThru(t);
        },
        toShapes: function (t, e) {
          function r(t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = t[r],
                a = new yi();
              (a.curves = n.curves), e.push(a);
            }
            return e;
          }
          function i(t, e) {
            for (var r = e.length, i = !1, n = r - 1, a = 0; a < r; n = a++) {
              var s = e[n],
                o = e[a],
                h = o.x - s.x,
                u = o.y - s.y;
              if (Math.abs(u) > Number.EPSILON) {
                if (
                  (u < 0 && ((s = e[a]), (h = -h), (o = e[n]), (u = -u)),
                  t.y < s.y || t.y > o.y)
                )
                  continue;
                if (t.y === s.y) {
                  if (t.x === s.x) return !0;
                } else {
                  var c = u * (t.x - s.x) - h * (t.y - s.y);
                  if (0 === c) return !0;
                  if (c < 0) continue;
                  i = !i;
                }
              } else {
                if (t.y !== s.y) continue;
                if ((o.x <= t.x && t.x <= s.x) || (s.x <= t.x && t.x <= o.x))
                  return !0;
              }
            }
            return i;
          }
          var n = _r.isClockWise,
            a = this.subPaths;
          if (0 === a.length) return [];
          if (!0 === e) return r(a);
          var s,
            o,
            h,
            u = [];
          if (1 === a.length)
            return (o = a[0]), ((h = new yi()).curves = o.curves), u.push(h), u;
          var c = !n(a[0].getPoints());
          c = t ? !c : c;
          var l,
            p,
            d = [],
            f = [],
            m = [],
            g = 0;
          (f[g] = void 0), (m[g] = []);
          for (var y = 0, v = a.length; y < v; y++)
            (s = n((l = (o = a[y]).getPoints()))),
              (s = t ? !s : s)
                ? (!c && f[g] && g++,
                  (f[g] = { s: new yi(), p: l }),
                  (f[g].s.curves = o.curves),
                  c && g++,
                  (m[g] = []))
                : m[g].push({ h: o, p: l[0] });
          if (!f[0]) return r(a);
          if (f.length > 1) {
            for (var x = !1, b = [], w = 0, M = f.length; w < M; w++) d[w] = [];
            for (w = 0, M = f.length; w < M; w++)
              for (var T = m[w], S = 0; S < T.length; S++) {
                for (var _ = T[S], E = !0, A = 0; A < f.length; A++)
                  i(_.p, f[A].p) &&
                    (w !== A && b.push({ froms: w, tos: A, hole: S }),
                    E ? ((E = !1), d[A].push(_)) : (x = !0));
                E && d[w].push(_);
              }
            b.length > 0 && (x || (m = d));
          }
          y = 0;
          for (var R = f.length; y < R; y++) {
            (h = f[y].s), u.push(h);
            for (var P = 0, C = (p = m[y]).length; P < C; P++)
              h.holes.push(p[P].h);
          }
          return u;
        },
      }),
      Object.assign(xi.prototype, {
        isFont: !0,
        generateShapes: function (t, e, r) {
          function i(t, e, i, a) {
            var s = n.glyphs[t] || n.glyphs["?"];
            if (s) {
              var o,
                h,
                u,
                c,
                l,
                p,
                d,
                f,
                m,
                g,
                y,
                v = new vi(),
                x = [];
              if (s.o)
                for (
                  var b =
                      s._cachedOutline || (s._cachedOutline = s.o.split(" ")),
                    w = 0,
                    M = b.length;
                  w < M;

                ) {
                  switch (b[w++]) {
                    case "m":
                      (o = b[w++] * e + i),
                        (h = b[w++] * e + a),
                        v.moveTo(o, h);
                      break;
                    case "l":
                      (o = b[w++] * e + i),
                        (h = b[w++] * e + a),
                        v.lineTo(o, h);
                      break;
                    case "q":
                      if (
                        ((u = b[w++] * e + i),
                        (c = b[w++] * e + a),
                        (d = b[w++] * e + i),
                        (f = b[w++] * e + a),
                        v.quadraticCurveTo(d, f, u, c),
                        (y = x[x.length - 1]))
                      ) {
                        (l = y.x), (p = y.y);
                        for (var T = 1; T <= r; T++) {
                          ri((S = T / r), l, d, u), ri(S, p, f, c);
                        }
                      }
                      break;
                    case "b":
                      if (
                        ((u = b[w++] * e + i),
                        (c = b[w++] * e + a),
                        (d = b[w++] * e + i),
                        (f = b[w++] * e + a),
                        (m = b[w++] * e + i),
                        (g = b[w++] * e + a),
                        v.bezierCurveTo(d, f, m, g, u, c),
                        (y = x[x.length - 1]))
                      ) {
                        (l = y.x), (p = y.y);
                        for (T = 1; T <= r; T++) {
                          var S;
                          ii((S = T / r), l, d, m, u), ii(S, p, f, g, c);
                        }
                      }
                  }
                }
              return { offsetX: s.ha * e, path: v };
            }
          }
          void 0 === e && (e = 100), void 0 === r && (r = 4);
          for (
            var n = this.data,
              a = (function (t) {
                for (
                  var r = e / n.resolution,
                    a =
                      (n.boundingBox.yMax -
                        n.boundingBox.yMin +
                        n.underlineThickness) *
                      r,
                    s = [],
                    o = String(t).split("\n"),
                    h = 0;
                  h < o.length;
                  h++
                ) {
                  for (
                    var u = o[h].split(""), c = 0, l = 0;
                    l < u.length;
                    l++
                  ) {
                    var p = n.glyphs[u[l]] || n.glyphs["?"];
                    p && (c += p.ha * r);
                  }
                  var d = -c / 2,
                    f = -h * a;
                  for (l = 0; l < u.length; l++) {
                    var m = i(u[l], r, d, f);
                    (d += m.offsetX), s.push(m.path);
                  }
                }
                return s;
              })(t),
              s = [],
              o = 0,
              h = a.length;
            o < h;
            o++
          )
            Array.prototype.push.apply(s, a[o].toShapes());
          return s;
        },
      }),
      Object.assign(bi.prototype, {
        load: function (t, e, r, i) {
          var n = this;
          new Zr(this.manager).load(
            t,
            function (r) {
              var i;
              try {
                i = JSON.parse(r);
              } catch (e) {
                console.warn("Failed to parse font ", t);
              }
              var a = n.parse(i);
              e && e(a);
            },
            r,
            i
          );
        },
        parse: function (t) {
          return new xi(t);
        },
      }),
      (wi.prototype = Object.create(ue.prototype)),
      (wi.prototype.constructor = wi),
      (wi.prototype.isSpriteMaterial = !0),
      (wi.prototype.copy = function (t) {
        return (
          ue.prototype.copy.call(this, t),
          this.color.copy(t.color),
          (this.map = t.map),
          (this.rotation = t.rotation),
          this
        );
      }),
      Object.assign(Mi.prototype, {
        load: function (t, e, r, i) {
          var n = this;
          new Zr(n.manager).load(
            t,
            function (t) {
              e(n.parse(JSON.parse(t)));
            },
            r,
            i
          );
        },
        setTextures: function (t) {
          this.textures = t;
        },
        parse: function (t) {
          var e = this.textures;
          function r(t) {
            return (
              void 0 === e[t] &&
                console.warn("RK.MaterialLoader: Undefined texture", t),
              e[t]
            );
          }
          var i = new a[t.type]();
          if (
            (void 0 !== t.uuid && (i.uuid = t.uuid),
            void 0 !== t.name && (i.name = t.name),
            void 0 !== t.color && i.color.setHex(t.color),
            void 0 !== t.roughness && (i.roughness = t.roughness),
            void 0 !== t.metalness && (i.metalness = t.metalness),
            void 0 !== t.subsurface && i.subsurface.setHex(t.subsurface),
            void 0 !== t.emissive && i.emissive.setHex(t.emissive),
            void 0 !== t.specular && i.specular.setHex(t.specular),
            void 0 !== t.shininess && (i.shininess = t.shininess),
            void 0 !== t.clearCoat && (i.clearCoat = t.clearCoat),
            void 0 !== t.clearCoatRoughness &&
              (i.clearCoatRoughness = t.clearCoatRoughness),
            void 0 !== t.uniforms && (i.uniforms = t.uniforms),
            void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader &&
              (i.fragmentShader = t.fragmentShader),
            void 0 !== t.vertexColors && (i.vertexColors = t.vertexColors),
            void 0 !== t.fog && (i.fog = t.fog),
            void 0 !== t.flatShading && (i.flatShading = t.flatShading),
            void 0 !== t.blending && (i.blending = t.blending),
            void 0 !== t.side && (i.side = t.side),
            void 0 !== t.opacity && (i.opacity = t.opacity),
            void 0 !== t.transparent && (i.transparent = t.transparent),
            void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (i.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (i.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth &&
              (i.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap &&
              (i.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin &&
              (i.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.skinning && (i.skinning = t.skinning),
            void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
            void 0 !== t.dithering && (i.dithering = t.dithering),
            void 0 !== t.visible && (i.visible = t.visible),
            void 0 !== t.userData && (i.userData = t.userData),
            void 0 !== t.shading && (i.flatShading = 1 === t.shading),
            void 0 !== t.size && (i.size = t.size),
            void 0 !== t.sizeAttenuation &&
              (i.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (i.map = r(t.map)),
            void 0 !== t.alphaMap &&
              ((i.alphaMap = r(t.alphaMap)), (i.transparent = !0)),
            void 0 !== t.bumpMap && (i.bumpMap = r(t.bumpMap)),
            void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (i.normalMap = r(t.normalMap)),
            void 0 !== t.normalScale)
          ) {
            var n = t.normalScale;
            !1 === Array.isArray(n) && (n = [n, n]),
              (i.normalScale = new l.a().fromArray(n));
          }
          return (
            void 0 !== t.displacementMap &&
              (i.displacementMap = r(t.displacementMap)),
            void 0 !== t.displacementScale &&
              (i.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias &&
              (i.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (i.roughnessMap = r(t.roughnessMap)),
            void 0 !== t.metalnessMap && (i.metalnessMap = r(t.metalnessMap)),
            void 0 !== t.emissiveMap && (i.emissiveMap = r(t.emissiveMap)),
            void 0 !== t.emissiveIntensity &&
              (i.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (i.specularMap = r(t.specularMap)),
            void 0 !== t.envMap && (i.envMap = r(t.envMap)),
            void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
            void 0 !== t.lightMap && (i.lightMap = r(t.lightMap)),
            void 0 !== t.lightMapIntensity &&
              (i.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (i.aoMap = r(t.aoMap)),
            void 0 !== t.aoMapIntensity &&
              (i.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.gradientMap && (i.gradientMap = r(t.gradientMap)),
            i
          );
        },
      }),
      (Ti.Handlers = {
        handlers: [],
        add: function (t, e) {
          this.handlers.push(t, e);
        },
        get: function (t) {
          for (var e = this.handlers, r = 0, i = e.length; r < i; r += 2) {
            var n = e[r],
              a = e[r + 1];
            if (n.test(t)) return a;
          }
          return null;
        },
      }),
      Object.assign(Ti.prototype, {
        crossOrigin: void 0,
        extractUrlBase: function (t) {
          var e = t.split("/");
          return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/");
        },
        initMaterials: function (t, e, r) {
          for (var i = [], n = 0; n < t.length; ++n)
            i[n] = this.createMaterial(t[n], e, r);
          return i;
        },
        createMaterial:
          ((li = {
            NoBlending: u.NoBlending,
            NormalBlending: u.NormalBlending,
            AdditiveBlending: u.AdditiveBlending,
            SubtractiveBlending: u.SubtractiveBlending,
            MultiplyBlending: u.MultiplyBlending,
            CustomBlending: u.CustomBlending,
          }),
          (pi = new Dt()),
          (di = new ti()),
          (fi = new Mi()),
          function (t, e, r) {
            var i = {};
            function n(t, n, a, s, o) {
              var h,
                l = e + t,
                p = Ti.Handlers.get(l);
              null !== p
                ? (h = p.load(l))
                : (di.setCrossOrigin(r), (h = di.load(l))),
                void 0 !== n &&
                  (h.repeat.fromArray(n),
                  1 !== n[0] && (h.wrapS = u.RepeatWrapping),
                  1 !== n[1] && (h.wrapT = u.RepeatWrapping)),
                void 0 !== a && h.offset.fromArray(a),
                void 0 !== s &&
                  ("repeat" === s[0] && (h.wrapS = u.RepeatWrapping),
                  "mirror" === s[0] && (h.wrapS = u.MirroredRepeatWrapping),
                  "repeat" === s[1] && (h.wrapT = u.RepeatWrapping),
                  "mirror" === s[1] && (h.wrapT = u.MirroredRepeatWrapping)),
                void 0 !== o && (h.anisotropy = o);
              var d = c.a.generateUUID();
              return (i[d] = h), d;
            }
            var a = { uuid: c.a.generateUUID(), type: "MeshLambertMaterial" };
            for (var s in t) {
              var o = t[s];
              switch (s) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                  break;
                case "DbgName":
                  a.name = o;
                  break;
                case "blending":
                  a.blending = li[o];
                  break;
                case "colorAmbient":
                case "mapAmbient":
                  console.warn(
                    "RK.Loader.createMaterial:",
                    s,
                    "is no longer supported."
                  );
                  break;
                case "colorDiffuse":
                  a.color = pi.fromArray(o).getHex();
                  break;
                case "colorSpecular":
                  a.specular = pi.fromArray(o).getHex();
                  break;
                case "colorEmissive":
                  a.emissive = pi.fromArray(o).getHex();
                  break;
                case "specularCoef":
                  a.shininess = o;
                  break;
                case "shading":
                  "basic" === o.toLowerCase() && (a.type = "MeshBasicMaterial"),
                    "phong" === o.toLowerCase() &&
                      (a.type = "MeshPhongMaterial"),
                    "standard" === o.toLowerCase() &&
                      (a.type = "MeshStandardMaterial");
                  break;
                case "mapDiffuse":
                  a.map = n(
                    o,
                    t.mapDiffuseRepeat,
                    t.mapDiffuseOffset,
                    t.mapDiffuseWrap,
                    t.mapDiffuseAnisotropy
                  );
                  break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                  break;
                case "mapEmissive":
                  a.emissiveMap = n(
                    o,
                    t.mapEmissiveRepeat,
                    t.mapEmissiveOffset,
                    t.mapEmissiveWrap,
                    t.mapEmissiveAnisotropy
                  );
                  break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                  break;
                case "mapLight":
                  a.lightMap = n(
                    o,
                    t.mapLightRepeat,
                    t.mapLightOffset,
                    t.mapLightWrap,
                    t.mapLightAnisotropy
                  );
                  break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                  break;
                case "mapAO":
                  a.aoMap = n(
                    o,
                    t.mapAORepeat,
                    t.mapAOOffset,
                    t.mapAOWrap,
                    t.mapAOAnisotropy
                  );
                  break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                  break;
                case "mapBump":
                  a.bumpMap = n(
                    o,
                    t.mapBumpRepeat,
                    t.mapBumpOffset,
                    t.mapBumpWrap,
                    t.mapBumpAnisotropy
                  );
                  break;
                case "mapBumpScale":
                  a.bumpScale = o;
                  break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                  break;
                case "mapNormal":
                  a.normalMap = n(
                    o,
                    t.mapNormalRepeat,
                    t.mapNormalOffset,
                    t.mapNormalWrap,
                    t.mapNormalAnisotropy
                  );
                  break;
                case "mapNormalFactor":
                  a.normalScale = [o, o];
                  break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                  break;
                case "mapSpecular":
                  a.specularMap = n(
                    o,
                    t.mapSpecularRepeat,
                    t.mapSpecularOffset,
                    t.mapSpecularWrap,
                    t.mapSpecularAnisotropy
                  );
                  break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                  break;
                case "mapMetalness":
                  a.metalnessMap = n(
                    o,
                    t.mapMetalnessRepeat,
                    t.mapMetalnessOffset,
                    t.mapMetalnessWrap,
                    t.mapMetalnessAnisotropy
                  );
                  break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                  break;
                case "mapRoughness":
                  a.roughnessMap = n(
                    o,
                    t.mapRoughnessRepeat,
                    t.mapRoughnessOffset,
                    t.mapRoughnessWrap,
                    t.mapRoughnessAnisotropy
                  );
                  break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                  break;
                case "mapAlpha":
                  a.alphaMap = n(
                    o,
                    t.mapAlphaRepeat,
                    t.mapAlphaOffset,
                    t.mapAlphaWrap,
                    t.mapAlphaAnisotropy
                  );
                  break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                  break;
                case "flipSided":
                  a.side = u.BackSide;
                  break;
                case "doubleSided":
                  a.side = u.DoubleSide;
                  break;
                case "transparency":
                  console.warn(
                    "RK.Loader.createMaterial: transparency has been renamed to opacity"
                  ),
                    (a.opacity = o);
                  break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                  a[s] = o;
                  break;
                case "vertexColors":
                  !0 === o && (a.vertexColors = u.VertexColors),
                    "face" === o && (a.vertexColors = u.FaceColors);
                  break;
                default:
                  console.error("RK.Loader.createMaterial: Unsupported", s, o);
              }
            }
            return (
              "MeshBasicMaterial" === a.type && delete a.emissive,
              "MeshPhongMaterial" !== a.type && delete a.specular,
              a.opacity < 1 && (a.transparent = !0),
              fi.setTextures(i),
              fi.parse(a)
            );
          }),
      }),
      (Si.prototype = Object.assign(Object.create(zt.prototype), {
        constructor: Si,
        isLight: !0,
        copy: function (t) {
          return (
            zt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.intensity = t.intensity),
            this
          );
        },
        toJSON: function (t) {
          var e = zt.prototype.toJSON.call(this, t);
          return (
            (e.object.color = this.color.getHex()),
            (e.object.intensity = this.intensity),
            void 0 !== this.groundColor &&
              (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
          );
        },
      })),
      Object.assign(_i.prototype, {
        copy: function (t) {
          return (
            (this.camera = t.camera.clone()),
            (this.bias = t.bias),
            (this.radius = t.radius),
            this.mapSize.copy(t.mapSize),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        toJSON: function () {
          var t = {};
          return (
            0 !== this.bias && (t.bias = this.bias),
            1 !== this.radius && (t.radius = this.radius),
            (512 === this.mapSize.x && 512 === this.mapSize.y) ||
              (t.mapSize = this.mapSize.toArray()),
            (t.camera = this.camera.toJSON(!1).object),
            delete t.camera.matrix,
            t
          );
        },
      }),
      (Ei.prototype = Object.assign(Object.create(Si.prototype), {
        constructor: Ei,
        isPointLight: !0,
        copy: function (t) {
          return (
            Si.prototype.copy.call(this, t),
            (this.distance = t.distance),
            (this.decay = t.decay),
            (this.shadow = t.shadow.clone()),
            this
          );
        },
      })),
      (Ai.prototype = Object.assign(Object.create(Si.prototype), {
        constructor: Ai,
        isHemisphereLight: !0,
        copy: function (t) {
          return (
            Si.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
          );
        },
      })),
      (Ri.prototype = Object.assign(Object.create(Si.prototype), {
        constructor: Ri,
        isEnvironmentLight: !0,
        copy: function (t) {
          return (
            Si.prototype.copy.call(this, t),
            (this.saturationScale = t.saturationScale),
            (this.rotateY = t.rotateY),
            this
          );
        },
      })),
      (Pi.prototype = Object.assign(Object.create(_i.prototype), {
        constructor: Pi,
      })),
      (Ci.prototype = Object.assign(Object.create(Si.prototype), {
        constructor: Ci,
        isDirectionalLight: !0,
        copy: function (t) {
          return (
            Si.prototype.copy.call(this, t),
            (this.target = t.target.clone()),
            (this.shadow = t.shadow.clone()),
            this
          );
        },
      })),
      (Oi.prototype = Object.assign(Object.create(Si.prototype), {
        constructor: Oi,
        isAmbientLight: !0,
      })),
      (Fi.prototype.clone = function () {
        return new Fi(
          void 0 === this.value.clone ? this.value : this.value.clone()
        );
      }),
      (Li.prototype = Object.assign(Object.create(ie.prototype), {
        constructor: Li,
        isInstancedBufferGeometry: !0,
        addGroup: function (t, e, r) {
          this.groups.push({ start: t, count: e, materialIndex: r });
        },
        copy: function (t) {
          var e = t.index;
          null !== e && this.setIndex(e.clone());
          var r = t.attributes;
          for (var i in r) {
            var n = r[i];
            this.addAttribute(i, n.clone());
          }
          for (var a = t.groups, s = 0, o = a.length; s < o; s++) {
            var h = a[s];
            this.addGroup(h.start, h.count, h.materialIndex);
          }
          return this;
        },
      })),
      Object.defineProperties(zi.prototype, {
        count: {
          get: function () {
            return this.data.count;
          },
        },
        array: {
          get: function () {
            return this.data.array;
          },
        },
      }),
      Object.assign(zi.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function (t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset] = e), this
          );
        },
        setY: function (t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 1] = e), this
          );
        },
        setZ: function (t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 2] = e), this
          );
        },
        setW: function (t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 3] = e), this
          );
        },
        getX: function (t) {
          return this.data.array[t * this.data.stride + this.offset];
        },
        getY: function (t) {
          return this.data.array[t * this.data.stride + this.offset + 1];
        },
        getZ: function (t) {
          return this.data.array[t * this.data.stride + this.offset + 2];
        },
        getW: function (t) {
          return this.data.array[t * this.data.stride + this.offset + 3];
        },
        setXY: function (t, e, r) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = r),
            this
          );
        },
        setXYZ: function (t, e, r, i) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = r),
            (this.data.array[t + 2] = i),
            this
          );
        },
        setXYZW: function (t, e, r, i, n) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = r),
            (this.data.array[t + 2] = i),
            (this.data.array[t + 3] = n),
            this
          );
        },
      }),
      Object.defineProperty(Bi.prototype, "needsUpdate", {
        set: function (t) {
          !0 === t && this.version++;
        },
      }),
      Object.assign(Bi.prototype, {
        isInterleavedBuffer: !0,
        setArray: function (t) {
          if (Array.isArray(t))
            throw new TypeError(
              "RK.BufferAttribute: array should be a Typed Array."
            );
          (this.count = void 0 !== t ? t.length / this.stride : 0),
            (this.array = t);
        },
        setDynamic: function (t) {
          return (this.dynamic = t), this;
        },
        copy: function (t) {
          return (
            (this.array = new t.array.constructor(t.array)),
            (this.count = t.count),
            (this.stride = t.stride),
            (this.dynamic = t.dynamic),
            this
          );
        },
        copyAt: function (t, e, r) {
          (t *= this.stride), (r *= e.stride);
          for (var i = 0, n = this.stride; i < n; i++)
            this.array[t + i] = e.array[r + i];
          return this;
        },
        set: function (t, e) {
          return void 0 === e && (e = 0), this.array.set(t, e), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        onUpload: function (t) {
          return (this.onUploadCallback = t), this;
        },
      }),
      (Ui.prototype = Object.assign(Object.create(Bi.prototype), {
        constructor: Ui,
        isInstancedInterleavedBuffer: !0,
        copy: function (t) {
          return (
            Bi.prototype.copy.call(this, t),
            (this.meshPerAttribute = t.meshPerAttribute),
            this
          );
        },
      })),
      (Ni.prototype = Object.assign(Object.create(Xt.prototype), {
        constructor: Ni,
        isInstancedBufferAttribute: !0,
        copy: function (t) {
          return (
            Xt.prototype.copy.call(this, t),
            (this.meshPerAttribute = t.meshPerAttribute),
            this
          );
        },
      })),
      Object.assign(Di.prototype, {
        linePrecision: 1,
        set: function (t, e) {
          this.ray.set(t, e);
        },
        setFromCamera: function (t, e) {
          e && e.isPerspectiveCamera
            ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
              this.ray.direction
                .set(t.x, t.y, 0.5)
                .unproject(e)
                .sub(this.ray.origin)
                .normalize())
            : e && e.isOrthographicCamera
            ? (this.ray.origin
                .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
                .unproject(e),
              this.ray.direction
                .set(0, 0, -1)
                .transformDirection(e.matrixWorld))
            : console.error("RK.Raycaster: Unsupported camera type.");
        },
        intersectObject: function (t, e) {
          var r = [];
          return Gi(t, this, r, e), r.sort(Ii), r;
        },
        intersectObjects: function (t, e) {
          var r = [];
          if (!1 === Array.isArray(t))
            return (
              console.warn(
                "RK.Raycaster.intersectObjects: objects is not an Array."
              ),
              r
            );
          for (var i = 0, n = t.length; i < n; i++) Gi(t[i], this, r, e);
          return r.sort(Ii), r;
        },
      }),
      Object.assign(ki.prototype, {
        start: function () {
          (this.startTime = ("undefined" == typeof performance
            ? Date
            : performance
          ).now()),
            (this.oldTime = this.startTime),
            (this.elapsedTime = 0),
            (this.running = !0);
        },
        stop: function () {
          this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
        },
        getElapsedTime: function () {
          return this.getDelta(), this.elapsedTime;
        },
        getDelta: function () {
          var t = 0;
          if (this.autoStart && !this.running) return this.start(), 0;
          if (this.running) {
            var e = ("undefined" == typeof performance
              ? Date
              : performance
            ).now();
            (t = (e - this.oldTime) / 1e3),
              (this.oldTime = e),
              (this.elapsedTime += t);
          }
          return t;
        },
      }),
      Object.assign(Wi.prototype, {
        set: function (t, e, r) {
          return (this.radius = t), (this.phi = e), (this.theta = r), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return (
            (this.radius = t.radius),
            (this.phi = t.phi),
            (this.theta = t.theta),
            this
          );
        },
        makeSafe: function () {
          return (
            (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))),
            this
          );
        },
        setFromVec3: function (t) {
          return (
            (this.radius = t.length()),
            0 === this.radius
              ? ((this.theta = 0), (this.phi = 0))
              : ((this.theta = Math.atan2(t.x, t.z)),
                (this.phi = Math.acos(c.a.clamp(t.y / this.radius, -1, 1)))),
            this
          );
        },
      });
    var Vi = function (t, e) {
      var r, i, n, a, s;
      (this.camera = t.camera),
        (this.orbitCamera = t),
        (this.freeCamera = !1),
        (this.domElement = void 0 !== e ? e : document),
        (this.enabled = !0),
        (this.target = new st.a()),
        (this.fallbackTarget = new st.a(0, 2, 0)),
        (this.radius = CK.Settings.cameraControls.maxDistance || 11),
        (this.maxDistance = 15),
        (this.minDistance = 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.25),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.minZoom = 1),
        (this.maxZoom = CK.Settings.cameraControls.maxZoom || 8),
        (this.enableRotate = !0),
        (this.enableRotateHorizonal = !0),
        (this.enableRotateVertical = !0),
        (this.rotateSpeed = 1),
        (this.keyRotateSpeed = 0.004),
        (this.enablePan = !0),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.enableKeys = !0),
        (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
        (this.mouseButtons = {
          ORBIT: u.MOUSE.LEFT,
          ZOOM: u.MOUSE.MIDDLE,
          PAN: u.MOUSE.RIGHT,
        }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.camera.position.clone()),
        (this.zoom0 = this.camera.zoom),
        (this.savedView = null),
        (this.getPolarAngle = function () {
          return y.phi;
        }),
        (this.getAzimuthalAngle = function () {
          return y.theta;
        }),
        (this.setFromAngles = function (e, r, i) {
          var n = new st.a(),
            a = new yt.a()
              .setFromUnitVectors(t.camera.up, new st.a(0, 1, 0))
              .clone()
              .inverse();
          (y.phi = r),
            (y.theta = e),
            (y.radius = i),
            n.setFromSpherical(y),
            n.applyQuaternion(a),
            o.camera.position.copy(o.target).add(n),
            o.camera.lookAt(o.target);
        }),
        (this.setClampedRadius = function (t) {
          o.radius = Math.max(o.minDistance, Math.min(o.maxDistance, t));
        }),
        (this.saveState = function () {
          o.target0.copy(o.target),
            o.position0.copy(o.camera.position),
            (o.zoom0 = o.camera.zoom);
        }),
        (this.reset = function () {
          o.target.copy(o.target0),
            o.camera.position.copy(o.position0),
            (o.camera.zoom = o.zoom0),
            o.camera.updateProjectionMatrix(),
            o.dispatchEvent(h),
            o.update(),
            (m = f.NONE);
        }),
        (this.isManipulating = function () {
          return m !== f.NONE;
        }),
        (this.getHeightAtDepth = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y.radius,
            e = (o.camera.fov * Math.PI) / 180;
          return Math.tan(e / 2) * t * 2;
        }),
        (this.getHeadLocation = function () {
          return CK.display.getBone(1)
            ? CK.display.getBone(1).getWorldPosition()
            : this.fallbackTarget.clone();
        }),
        (this.getTrackedLocation = function () {
          var t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (
            !CK.data.flags.hideRider &&
            o.orbitCamera.trackedObj &&
            o.orbitCamera.trackedObj.getWorldPosition().y > 0
          ) {
            var e = o.orbitCamera.trackedObj.getWorldPosition();
            return (e.x = e.z = 0), e.setLength(e.length() / (t ? 2.2 : 1)), e;
          }
          return this.fallbackTarget.clone();
        }),
        (this.getZoomScale = function () {
          return o.camera.view
            ? o.camera.view.fullWidth / o.camera.view.width
            : 1;
        }),
        (this.update =
          ((r = new st.a()),
          (i = new yt.a().setFromUnitVectors(t.camera.up, new st.a(0, 1, 0))),
          (n = i.clone().inverse()),
          (a = new st.a()),
          (s = new yt.a()),
          function () {
            var t = o.camera.position;
            r.copy(t).sub(o.target),
              r.applyQuaternion(i),
              y.setFromVec3(r),
              (o.radius = Math.max(
                o.minDistance,
                Math.min(o.maxDistance, o.radius)
              )),
              (y.radius = o.radius),
              o.autoRotate &&
                m === f.NONE &&
                L(((2 * Math.PI) / 3600) * o.autoRotateSpeed),
              (y.theta += v.theta),
              (y.phi += v.phi),
              (y.theta = Math.max(
                o.minAzimuthAngle,
                Math.min(o.maxAzimuthAngle, y.theta)
              )),
              (y.phi = Math.max(
                o.minPolarAngle,
                Math.min(o.maxPolarAngle, y.phi)
              )),
              y.makeSafe(),
              o.target.add(x),
              r.setFromSpherical(y),
              r.applyQuaternion(n),
              t.y,
              t.copy(o.target).add(r);
            var e = new st.a()
              .copy(t)
              .sub(o.target)
              .setLength(y.radius)
              .add(o.target);
            t.copy(e),
              null !== CK.Settings.cameraControls.cameraMinY &&
                o.enabled &&
                !o.freeCamera &&
                (t.y = Math.max(
                  CK.Settings.cameraControls.cameraMinY || -1 / 0,
                  t.y
                )),
              o.camera.lookAt(o.target),
              !0 === o.enableDamping
                ? ((v.theta *= 1 - o.dampingFactor),
                  (v.phi *= 1 - o.dampingFactor))
                : v.set(0, 0, 0),
              1,
              x.set(0, 0, 0);
            var u = Math.max((o.getTrackedLocation().length() * I()) / 2, 1);
            return (
              o.target.distanceTo(o.getTrackedLocation()) > u &&
                !o.freeCamera &&
                (o.target
                  .sub(o.getTrackedLocation())
                  .setLength(u)
                  .add(o.getTrackedLocation()),
                t.sub(o.target).setLength(y.radius).add(o.target),
                o.camera.lookAt(o.target)),
              (o.savedView = Object.assign({}, o.camera.view)),
              j() ||
                CK.Settings.cameraControls.zoomOnCursor ||
                o.freeCamera ||
                (F = !0),
              !!(
                b ||
                a.distanceToSquared(o.camera.position) > g ||
                8 * (1 - s.dot(o.camera.quaternion)) > g
              ) &&
                (o.dispatchEvent(h),
                a.copy(o.camera.position),
                s.copy(o.camera.quaternion),
                (b = !1),
                !0)
            );
          })),
        (this.dispose = function () {
          o.domElement.removeEventListener("contextmenu", it, !1),
            o.domElement.removeEventListener("mousedown", Y, !1),
            o.domElement.removeEventListener("wheel", Q, !1),
            o.domElement.removeEventListener("touchstart", tt, !1),
            o.domElement.removeEventListener("touchend", rt, !1),
            o.domElement.removeEventListener("touchmove", et, !1),
            document.removeEventListener("mousemove", Z, !1),
            document.removeEventListener("mouseup", J, !1),
            window.removeEventListener("keydown", $, !1);
        });
      var o = this,
        h = { type: "change" },
        c = { type: "start" },
        p = { type: "end" },
        d = { type: "changing-ended" },
        f = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_DOLLY: 4,
          TOUCH_PAN: 5,
        },
        m = f.NONE,
        g = 1e-6,
        y = new Wi();
      y.radius = o.maxDistance;
      var v = new Wi(),
        x = new st.a(),
        b = !1,
        w = new l.a(),
        M = new l.a(),
        T = new l.a(),
        S = new l.a(),
        _ = new l.a(),
        E = new l.a(),
        A = new l.a(),
        R = new l.a(),
        P = new l.a(),
        C = new l.a(),
        O = null,
        F = !1;
      function L(t) {
        o.enableRotateHorizonal && (v.theta -= t);
      }
      function z(t) {
        o.enableRotateVertical && (v.phi -= t);
      }
      var B = (function () {
          var t = new st.a();
          return function (e, r) {
            t.setFromMatrixColumn(r, 0), t.multiplyScalar(-e), x.add(t);
          };
        })(),
        U = (function () {
          var t = new st.a();
          return function (e, r) {
            t.setFromMatrixColumn(r, 1), t.multiplyScalar(e), x.add(t);
          };
        })(),
        N = (function () {
          var t = new st.a();
          return function (e, r) {
            (e *= o.camera.view.width / o.camera.view.fullWidth),
              (r *= o.camera.view.height / o.camera.view.fullHeight);
            var i =
              o.domElement === document ? o.domElement.body : o.domElement;
            if (o.camera instanceof rr) {
              var n = o.camera.position;
              t.copy(n).sub(o.target);
              var a = t.length();
              (a *= Math.tan(((o.camera.fov / 2) * Math.PI) / 180)),
                B((2 * e * a) / i.clientHeight, o.camera.matrix),
                U((2 * r * a) / i.clientHeight, o.camera.matrix);
            } else
              o.camera instanceof Ut
                ? (B(
                    (e * (o.camera.right - o.camera.left)) /
                      o.camera.zoom /
                      i.clientWidth,
                    o.camera.matrix
                  ),
                  U(
                    (r * (o.camera.top - o.camera.bottom)) /
                      o.camera.zoom /
                      i.clientHeight,
                    o.camera.matrix
                  ))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                  ),
                  (o.enablePan = !1));
          };
        })();
      function D(t, e) {
        if (t.deltaY) {
          var r = Math.abs(t.deltaY) < 100 ? 100 / Math.abs(t.deltaY) : 1;
          return Math.pow(
            1 + t.deltaY * r * Math.pow(I(), 0.25) * 5e-4,
            o.zoomSpeed
          );
        }
        return t.movementY
          ? Math.pow(1 + t.movementY * Math.pow(I(), 0.25) * 0.005, o.zoomSpeed)
          : t.touches
          ? Math.pow(1 - 0.005 * e, o.zoomSpeed)
          : 1;
      }
      function I() {
        return o.camera.view
          ? o.camera.view.fullWidth / o.camera.view.width
          : 1;
      }
      function G(t, e, r) {
        return Math.min(1, Math.max(0, (r - t) / (e - t) || 0));
      }
      function k() {
        if (F)
          return (
            (O = new RK.Bone()).position.copy(o.target),
            void (O.name = "DummyBone")
          );
        var t = o.orbitCamera.usefulBones,
          e = o.camera,
          r = (function () {
            if (!o.camera.view) return new st.a();
            var t = 1 / I(),
              e = o.getHeightAtDepth() / 2,
              r = e * o.camera.aspect,
              i = -(1 - t) * r;
            i +=
              ((o.camera.view.offsetX - o.orbitCamera.getOffsetX()) /
                o.camera.view.fullWidth) *
              r *
              2;
            var n = -(1 - t) * -e;
            return (
              (n +=
                (o.camera.view.offsetY / o.camera.view.fullHeight) * -e * 2),
              new st.a(i, n, 0)
            );
          })(),
          i = new yt.a().copy(e.quaternion).inverse(),
          n = new st.a().copy(e.position).applyQuaternion(i).add(r);
        n = new l.a().copy(n);
        var a = 1 / 0;
        for (var s in ((O = null), t))
          if (t[s] && t[s].getWorldPosition()) {
            var h = t[s].getWorldPosition().applyQuaternion(i),
              u = new l.a().copy(h).distanceTo(new l.a().copy(n)),
              c = 0.2 * Math.min(Math.pow(1 / I(), 2) + 0.4, 1);
            if (Math.abs(a - u) < c && O)
              O.getWorldPosition().applyQuaternion(i).z < h.z &&
                ((a = u), (O = t[s]));
            else u < a && ((a = u), (O = t[s]));
          } else
            console.warn("AHHHHH THE BONES ARE JELLO!!! " + t[s]), delete t[s];
        O.getWorldPosition().distanceTo(o.target) < 0.01 * I() &&
          ((O = new RK.Bone()).position.copy(o.target), (O.name = "DummyBone"));
      }
      function W(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : O.getWorldPosition() || o.getTrackedLocation();
        if (O) {
          var r = o.camera;
          if ((o.target.lerp(e, t), o.camera.view)) {
            var i =
                r.view.fullWidth / 2 -
                r.view.width / 2 +
                o.orbitCamera.getOffsetX(),
              n = r.view.fullHeight / 2 - r.view.height / 2;
            (r.view.offsetX = r.view.offsetX * (1 - t) + i * t),
              (r.view.offsetY = r.view.offsetY * (1 - t) + n * t);
          }
        }
      }
      function V() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        o.freeCamera ||
          (o.getHeadLocation().y + 1.3 > o.getHeightAtDepth() / I()
            ? W(t)
            : W(t, o.getTrackedLocation()));
      }
      function j() {
        return (
          o.getHeightAtDepth() / I() - (o.getTrackedLocation(!1).y + 1.5) < 0
        );
      }
      function X() {
        return new l.a(
          CK.renderManager.width / 2 - o.orbitCamera.getOffsetX() * I(),
          CK.renderManager.height / 2 - -o.orbitCamera.getOffsetY() * I()
        );
      }
      function q() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new l.a(0, 0),
          e = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (CK.Settings.squareCamera || o.freeCamera) o.radius *= e;
        else {
          var i = o.camera,
            n = CK.renderManager.width / i.view.width / e;
          if (e > 1) {
            var a = Math.min(Math.pow(i.view.width / i.view.fullWidth, 2), 1),
              s = o.getTrackedLocation();
            (a *= 15 * (e - 1)),
              (a *= Math.min(1 / o.target.distanceTo(s), 3)),
              (a = Math.min(1, a)),
              r && (a = Math.pow(a, 3)),
              o.target.lerp(s, a);
          } else if (F && !CK.Settings.cameraControls.zoomOnCursor) {
            var h = o.getHeadLocation().multiplyScalar(0.95),
              u = o.getHeightAtDepth() / I(),
              c = o.getHeightAtDepth(),
              p = o.getTrackedLocation(!1).y,
              d = Math.pow(Math.max(G(c, p, u) - 0.5, 0), 2),
              f = -10 * (e - 1) * d;
            o.target.lerp(h, f);
          }
          i.view ||
            i.setViewOffset(
              CK.renderManager.width,
              CK.renderManager.height,
              this.getOffsetX(),
              0,
              CK.renderManager.width,
              CK.renderManager.height
            );
          var m = 0,
            g = 0;
          (CK.Settings.cameraControls.zoomOnCursor && !r) || (t = X());
          var y = n - CK.renderManager.width / i.view.width;
          if (((b = !0), !(n > o.maxZoom || n < o.minZoom))) {
            var v = o.orbitCamera.getOffsetX(CK.renderManager.width, 1);
            if (
              ((m = i.view.offsetX),
              (g = i.view.offsetY),
              y > 0 && n < o.maxZoom)
            )
              (m += t.x - t.x / n - (t.x - t.x / (n - y))),
                (g += t.y - t.y / n - (t.y - t.y / (n - y)));
            else {
              var x = i.view.width * e,
                w = i.view.height * e,
                M = G(i.view.width, i.view.fullWidth, x),
                T = G(i.view.height, i.view.fullHeight, w);
              (m -= v),
                (m -= m * M),
                (m += v),
                (g -= g * T),
                (m = Math.max(0, m)),
                (g = Math.max(0, g));
            }
            i.setViewOffset(
              i.view.fullWidth,
              i.view.fullHeight,
              m,
              g,
              Math.min(i.view.width * e, i.view.fullWidth),
              Math.min(i.view.height * e, i.view.fullHeight)
            ),
              (e = 1),
              o.camera instanceof rr
                ? e
                : o.camera instanceof Ut
                ? ((o.camera.zoom = Math.max(
                    o.minZoom,
                    Math.min(o.maxZoom, o.camera.zoom / e)
                  )),
                  o.camera.updateProjectionMatrix(),
                  (b = !0))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                  ),
                  (o.enableZoom = !1));
          }
        }
      }
      function K(t) {
        for (var e = 0, r = 0, i = 0; i < t.touches.length; ++i)
          (e += t.touches[i].pageX), (r += t.touches[i].pageY);
        (e /= t.touches.length), (r /= t.touches.length), S.set(e, r);
      }
      function H(t) {
        for (var e = 0, r = 0, i = 0; i < t.touches.length; ++i)
          (e += t.touches[i].pageX), (r += t.touches[i].pageY);
        (e /= t.touches.length),
          (r /= t.touches.length),
          _.set(e, r),
          E.subVectors(_, S);
        var n = 1 - Math.pow(1 / I(), 2);
        N(E.x * n, E.y * n), S.copy(_), o.update();
      }
      function Y(t) {
        if (!1 !== o.enabled) {
          switch ((t.preventDefault(), t.button)) {
            case o.mouseButtons.ORBIT:
              if (!1 === o.enableRotate) return;
              !(function (t) {
                k(), w.set(t.clientX, t.clientY);
              })(t),
                (m = f.ROTATE);
              break;
            case o.mouseButtons.ZOOM:
              if (!1 === o.enableZoom) return;
              (e = X()), R.set(e.x, e.y), A.set(e.x, e.y), (m = f.DOLLY);
              break;
            case o.mouseButtons.PAN:
              if (!1 === o.enablePan) return;
              !(function (t) {
                S.set(t.clientX, t.clientY);
              })(t),
                (m = f.PAN);
          }
          var e;
          m !== f.NONE &&
            (document.addEventListener("mousemove", Z, !1),
            document.addEventListener("mouseup", J, !1),
            o.dispatchEvent(c));
        }
      }
      function Z(t) {
        if (!1 !== o.enabled) {
          switch ((t.preventDefault(), m)) {
            case f.ROTATE:
              if (!1 === o.enableRotate) return;
              !(function (t) {
                M.set(t.clientX, t.clientY),
                  T.subVectors(M, w),
                  V(0.01 * T.length() * (1 - 1 / I() / 2));
                var e =
                  o.domElement === document ? o.domElement.body : o.domElement;
                L(((2 * Math.PI * T.x) / e.clientWidth) * o.rotateSpeed),
                  z(((2 * Math.PI * T.y) / e.clientHeight) * o.rotateSpeed),
                  w.copy(M),
                  o.update();
              })(t);
              break;
            case f.DOLLY:
              if (!1 === o.enableZoom) return;
              !(function (t) {
                var e = X();
                P.set(e.x, e.y),
                  C.subVectors(P, R),
                  q(new l.a(A.x, A.y), D(t)),
                  R.copy(P),
                  o.update();
              })(t);
              break;
            case f.PAN:
              if (!1 === o.enablePan) return;
              !(function (t) {
                _.set(t.clientX, t.clientY),
                  E.subVectors(_, S),
                  N(E.x, E.y),
                  S.copy(_),
                  o.update(),
                  j() && (F = !1);
              })(t);
          }
          o.hasMoved = !0;
        }
      }
      function J(t) {
        !1 !== o.enabled &&
          (A.set(null, null),
          document.removeEventListener("mousemove", Z, !1),
          document.removeEventListener("mouseup", J, !1),
          o.dispatchEvent(p),
          o.hasMoved && (o.dispatchEvent(d), (o.hasMoved = !1)),
          (m = f.NONE));
      }
      function Q(t) {
        !1 === o.enabled ||
          !1 === o.enableZoom ||
          (m !== f.NONE && m !== f.ROTATE) ||
          (t.preventDefault(),
          t.stopPropagation(),
          (function (t) {
            q(new l.a(t.x, t.y), D(t)), o.update();
          })(t),
          o.dispatchEvent(c),
          o.dispatchEvent(p),
          o.dispatchEvent(d));
      }
      function $(t) {
        !1 !== o.enabled &&
          !1 !== o.enableKeys &&
          !1 !== o.enableRotate &&
          (function (t) {
            switch (t.keyCode) {
              case o.keys.UP:
                z(2 * Math.PI * o.keyRotateSpeed), o.update();
                break;
              case o.keys.BOTTOM:
                z(2 * Math.PI * -o.keyRotateSpeed), o.update();
            }
          })(t);
      }
      function tt(t) {
        if (!1 !== o.enabled) {
          switch (t.touches.length) {
            case 1:
              if (!1 === o.enableRotate) return;
              !(function (t) {
                k(), w.set(t.touches[0].pageX, t.touches[0].pageY);
              })(t),
                (m = f.TOUCH_ROTATE);
              break;
            case 2:
              if (!1 === o.enableZoom) return;
              CK.sizing.compact() &&
                (o.maxZoom = Math.pow(
                  1.5 * Math.pow(CK.Settings.cameraControls.maxZoom, 0.25),
                  4
                )),
                (function (t) {
                  var e = t.touches[0].pageX - t.touches[1].pageX,
                    r = t.touches[0].pageY - t.touches[1].pageY,
                    i = Math.sqrt(e * e + r * r);
                  R.set(0, i),
                    A.set(
                      (t.touches[0].pageX + t.touches[1].pageX) / 2,
                      (t.touches[0].pageY + t.touches[1].pageY) / 2
                    );
                })(t),
                K(t),
                (m = f.TOUCH_DOLLY);
              break;
            case 3:
              if (!1 === o.enablePan) return;
              K(t), (m = f.TOUCH_PAN);
              break;
            default:
              m = f.NONE;
          }
          m !== f.NONE && o.dispatchEvent(c);
        }
      }
      function et(t) {
        if (((F = !1), !1 !== o.enabled))
          switch ((t.preventDefault(), t.stopPropagation(), t.touches.length)) {
            case 1:
              if (!1 === o.enableRotate) return;
              if (m !== f.TOUCH_ROTATE) return;
              !(function (t) {
                M.set(t.touches[0].pageX, t.touches[0].pageY),
                  T.subVectors(M, w),
                  V(0.005 * T.length());
                var e =
                  o.domElement === document ? o.domElement.body : o.domElement;
                L(((2 * Math.PI * T.x) / e.clientWidth) * o.rotateSpeed),
                  z(((2 * Math.PI * T.y) / e.clientHeight) * o.rotateSpeed),
                  w.copy(M),
                  o.update();
              })(t);
              break;
            case 2:
              if (!1 === o.enableZoom) return;
              if (m !== f.TOUCH_DOLLY) return;
              !(function (t) {
                var e = t.touches[0].pageX - t.touches[1].pageX,
                  r = t.touches[0].pageY - t.touches[1].pageY;
                A.set(
                  (t.touches[0].pageX + t.touches[1].pageX) / 2,
                  (t.touches[0].pageY + t.touches[1].pageY) / 2
                );
                var i = Math.sqrt(e * e + r * r);
                P.set(0, i),
                  C.subVectors(P, R),
                  q(new l.a(A.x, A.y), D(t, C.y), !0),
                  R.copy(P),
                  o.update();
              })(t),
                H(t);
              break;
            case 3:
              if (!1 === o.enablePan) return;
              if (m !== f.TOUCH_PAN) return;
              H(t);
              break;
            default:
              m = f.NONE;
          }
      }
      function rt(t) {
        !1 !== o.enabled &&
          ((o.maxZoom = CK.Settings.cameraControls.maxZoom),
          A.set(null, null),
          o.dispatchEvent(p),
          o.hasMoved && (o.dispatchEvent(d), (o.hasMoved = !1)),
          (m = f.NONE));
      }
      function it(t) {
        !1 !== o.enabled && t.preventDefault();
      }
      o.domElement.addEventListener("contextmenu", it, !1),
        o.domElement.addEventListener("mousedown", Y, !1),
        o.domElement.addEventListener("wheel", Q, !1),
        o.domElement.addEventListener("touchstart", tt, !1),
        o.domElement.addEventListener("touchend", rt, !1),
        o.domElement.addEventListener("touchmove", et, !1),
        window.addEventListener("keydown", $, !1),
        this.update();
    };
    function ji(t, e, r) {
      (this.swing = t || new yt.a()),
        (this.twist = e || new yt.a()),
        (this.order = r || ji.DefaultOrder);
    }
    ((Vi.prototype = Object.create(s.prototype)).constructor = Vi),
      Object.defineProperties(Vi.prototype, {
        center: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .center has been renamed to .target"
              ),
              this.target
            );
          },
        },
        noZoom: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."
              ),
              !this.enableZoom
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."
            ),
              (this.enableZoom = !t);
          },
        },
        noRotate: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."
              ),
              !this.enableRotate
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."
            ),
              (this.enableRotate = !t);
          },
        },
        noPan: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .noPan has been deprecated. Use .enablePan instead."
              ),
              !this.enablePan
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .noPan has been deprecated. Use .enablePan instead."
            ),
              (this.enablePan = !t);
          },
        },
        noKeys: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."
              ),
              !this.enableKeys
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."
            ),
              (this.enableKeys = !t);
          },
        },
        staticMoving: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."
              ),
              !this.enableDamping
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."
            ),
              (this.enableDamping = !t);
          },
        },
        dynamicDampingFactor: {
          get: function () {
            return (
              console.warn(
                "OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."
              ),
              this.dampingFactor
            );
          },
          set: function (t) {
            console.warn(
              "OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."
            ),
              (this.dampingFactor = t);
          },
        },
      }),
      (ji.RotationOrders = ["swingtwist", "twistswing"]),
      (ji.DefaultOrder = "swingtwist"),
      Object.assign(ji.prototype, {
        isSwingTwist: !0,
        set: function (t, e, r) {
          return (
            (this.swing = t),
            (this.twist = e),
            (this.order = r || this.order),
            this
          );
        },
        clone: function () {
          return new this.constructor(
            this.swing.clone(),
            this.twist.clone(),
            this.order
          );
        },
        copy: function (t) {
          return (
            this.swing.copy(t.swing),
            this.twist.copy(t.twist),
            (this.order = t.order),
            this
          );
        },
        setFromQuaternion: function (t, e) {
          this.order = e || this.order;
          var r = t.x,
            i = t.y,
            n = t.z,
            a = t.w,
            s = Math.sqrt(r * r + a * a),
            o = this.swing,
            h = this.twist;
          return (
            "swingtwist" == this.order
              ? ((o.x = 0),
                (o.y = (a * i - r * n) / s),
                (o.z = (a * n + r * i) / s),
                (o.w = s),
                (h.x = r / s),
                (h.y = 0),
                (h.z = 0),
                (h.w = a / s))
              : ((o.x = 0),
                (o.y = (a * i + r * n) / s),
                (o.z = (a * n - r * i) / s),
                (o.w = s),
                (h.x = r / s),
                (h.y = 0),
                (h.z = 0),
                (h.w = a / s)),
            o.w < 0 && ((o.x *= -1), (o.y *= -1), (o.z *= -1), (o.w *= -1)),
            h.w < 0 && ((h.x *= -1), (h.y *= -1), (h.z *= -1), (h.w *= -1)),
            this
          );
        },
        equals: function (t) {
          return (
            this.swing.equals(t.swing) &&
            this.twist.equals(t.twist) &&
            this.order === t.order
          );
        },
        toQuaternion: function (t) {
          t = t || new yt.a();
          var e = this.swing,
            r = this.twist;
          if ("twistswing" === this.order) {
            var i = e;
            (e = r), (r = i);
          }
          return t.multiplyQuaternions(e, r);
        },
      });
    var Xi = r(90);
    function qi(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, i);
      }
      return r;
    }
    function Ki(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    console.log(
      "RK ".concat("Production 4/12/20 11:14:9 B:release/hf_2020_04_03 V14102")
    ),
      (window.RK = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? qi(Object(r), !0).forEach(function (e) {
                Ki(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : qi(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      })(
        {
          Line: tr,
          WebGLRenderTargetCube: g,
          WebGLRenderTarget: m,
          WebGLRenderer: function (t) {
            var e =
                void 0 !== (t = t || {}).canvas
                  ? t.canvas
                  : document.createElementNS(
                      "http://www.w3.org/1999/xhtml",
                      "canvas"
                    ),
              r = void 0 !== t.context ? t.context : null,
              i = void 0 !== t.alpha && t.alpha,
              n = void 0 === t.depth || t.depth,
              a = void 0 === t.stencil || t.stencil,
              s = void 0 !== t.antialias && t.antialias,
              o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
              h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
              c = !!t.webgl2,
              l = [],
              p = [],
              d = null,
              m = [],
              g = [];
            (this.domElement = e),
              (this.context = null),
              (this.autoClear = !0),
              (this.autoClearColor = !0),
              (this.autoClearDepth = !0),
              (this.autoClearStencil = !0),
              (this.sortObjects = !0),
              (this.clippingPlanes = []),
              (this.localClippingEnabled = !1),
              (this.gammaFactor = 2),
              (this.gammaInput = !1),
              (this.gammaOutput = !1),
              (this.physicallyCorrectLights = !1),
              (this.toneMapping = u.LinearToneMapping),
              (this.toneMappingExposure = 1),
              (this.toneMappingWhitePoint = 1),
              (this.maxMorphTargets = 8),
              (this.maxMorphNormals = 4);
            var v,
              x,
              b,
              w,
              M,
              T,
              S,
              _,
              E,
              A,
              R,
              P,
              C,
              O,
              F,
              L,
              z,
              B,
              U,
              N = this,
              D = !1,
              I = null,
              G = null,
              k = -1,
              W = "",
              V = null,
              j = null,
              X = new f(),
              q = new f(),
              K = null,
              H = 0,
              Y = e.width,
              Z = e.height,
              J = 1,
              Q = new f(0, 0, Y, Z),
              $ = new f(0, 0, Y, Z),
              tt = !1,
              et = new Tt(),
              rt = new qe(),
              it = !1,
              at = !1,
              ht = new y.a(),
              ut = new st.a(),
              ct = { geometries: 0, textures: 0 },
              lt = { frame: 0, calls: 0, vertices: 0, faces: 0, points: 0 };
            function pt() {
              return null === I ? J : 1;
            }
            this.info = { render: lt, memory: ct, programs: null };
            try {
              var dt = {
                alpha: i,
                depth: n,
                stencil: a,
                antialias: s,
                premultipliedAlpha: o,
                preserveDrawingBuffer: h,
              };
              if (
                null ===
                (v =
                  r || c
                    ? e.getContext("webgl2", dt)
                    : e.getContext("webgl", dt) ||
                      e.getContext("experimental-webgl", dt))
              )
                throw null !== e.getContext("webgl")
                  ? "Error creating WebGL context with your selected attributes."
                  : "Error creating WebGL context.";
              void 0 === v.getShaderPrecisionFormat &&
                (v.getShaderPrecisionFormat = function () {
                  return { rangeMin: 1, rangeMax: 1, precision: 1 };
                }),
                e.addEventListener("webglcontextlost", gt, !1),
                e.addEventListener("webglcontextrestored", yt, !1);
            } catch (t) {
              console.error("RK.WebGLRenderer: " + t);
            }
            function ft() {
              (x = new Xe(v)).get("WEBGL_depth_texture"),
                x.get("OES_texture_float"),
                x.get("OES_texture_float_linear"),
                x.get("OES_texture_half_float"),
                x.get("OES_texture_half_float_linear"),
                x.get("OES_standard_derivatives"),
                x.get("EXT_shader_texture_lod"),
                x.get("ANGLE_instanced_arrays"),
                x.get("OES_element_index_uint") && (ie.MaxIndex = 4294967296),
                (U = new Ke(v, x)),
                (b = new je(v, x, t)),
                (w = new Ve(v, x, U)).scissor(q.copy($).multiplyScalar(J)),
                w.viewport(X.copy(Q).multiplyScalar(J)),
                (M = new ke()),
                (T = new Ge(v, x, w, M, b, U, ct)),
                (S = new _t(v)),
                (_ = new Fe(v, S, ct)),
                (E = new Be(_, lt)),
                (O = new Pe(v)),
                (R = new Ie(N, x, b)),
                (A = new ze()),
                (P = new Ae()),
                (C = new Te(N, w, _, o)),
                (F = new Oe(v, x, lt)),
                (L = new Ce(v, x, lt)),
                (z = new ot(N, v, w, T, b)),
                (B = new vt(N, v, w, T, b)),
                (N.info.programs = R.programs),
                (N.context = v),
                (N.capabilities = b),
                (N.extensions = x),
                (N.properties = M),
                (N.renderLists = P),
                (N.state = w);
            }
            ft();
            var mt = new St(N, E, b.maxTextureSize);
            function gt(t) {
              t.preventDefault(),
                console.log("RK.WebGLRenderer: Context Lost."),
                (D = !0);
            }
            function yt(t) {
              console.log("RK.WebGLRenderer: Context Restored."),
                (D = !1),
                ft();
            }
            function xt(t) {
              var e = t.target;
              e.removeEventListener("dispose", xt),
                (function (t) {
                  bt(t), M.remove(t);
                })(e);
            }
            function bt(t) {
              var e = M.get(t).program;
              (t.program = void 0), void 0 !== e && R.releaseProgram(e);
            }
            (this.shadowMap = mt),
              (this.getContext = function () {
                return v;
              }),
              (this.getContextAttributes = function () {
                return v.getContextAttributes();
              }),
              (this.forceContextLoss = function () {
                var t = x.get("WEBGL_lose_context");
                t && t.loseContext();
              }),
              (this.forceContextRestore = function () {
                var t = x.get("WEBGL_lose_context");
                t && t.restoreContext();
              }),
              (this.getIsContextLost = function () {
                return D;
              }),
              (this.getPixelRatio = function () {
                return J;
              }),
              (this.setPixelRatio = function (t) {
                void 0 !== t && ((J = t), this.setSize(Y, Z, !1));
              }),
              (this.getSize = function () {
                return { width: Y, height: Z };
              }),
              (this.setSize = function (t, r, i) {
                (Y = t),
                  (Z = r),
                  (e.width = t * J),
                  (e.height = r * J),
                  !1 !== i &&
                    ((e.style.width = t + "px"), (e.style.height = r + "px")),
                  this.setViewport(0, 0, t, r);
              }),
              (this.getDrawingBufferSize = function () {
                return { width: Y * J, height: Z * J };
              }),
              (this.setDrawingBufferSize = function (t, r, i) {
                (Y = t),
                  (Z = r),
                  (J = i),
                  (e.width = t * i),
                  (e.height = r * i),
                  this.setViewport(0, 0, t, r);
              }),
              (this.setViewport = function (t, e, r, i) {
                Q.set(t, Z - e - i, r, i),
                  w.viewport(X.copy(Q).multiplyScalar(J));
              }),
              (this.setScissor = function (t, e, r, i) {
                $.set(t, Z - e - i, r, i),
                  w.scissor(q.copy($).multiplyScalar(J));
              }),
              (this.setScissorTest = function (t) {
                w.setScissorTest((tt = t));
              }),
              (this.getClearColor = C.getClearColor),
              (this.setClearColor = C.setClearColor),
              (this.getClearAlpha = C.getClearAlpha),
              (this.setClearAlpha = C.setClearAlpha),
              (this.clear = function (t, e, r) {
                var i = 0;
                (void 0 === t || t) && (i |= v.COLOR_BUFFER_BIT),
                  (void 0 === e || e) && (i |= v.DEPTH_BUFFER_BIT),
                  (void 0 === r || r) && (i |= v.STENCIL_BUFFER_BIT),
                  v.clear(i);
              }),
              (this.clearColor = function () {
                this.clear(!0, !1, !1);
              }),
              (this.clearDepth = function () {
                this.clear(!1, !0, !1);
              }),
              (this.clearStencil = function () {
                this.clear(!1, !1, !0);
              }),
              (this.clearTarget = function (t, e, r, i) {
                this.setRenderTarget(t), this.clear(e, r, i);
              }),
              (this.dispose = function () {
                e.removeEventListener("webglcontextlost", gt, !1),
                  e.removeEventListener("webglcontextrestored", yt, !1),
                  P.dispose();
              }),
              (this.renderBufferImmediate = function (t, e, r) {
                w.initAttributes();
                var i = M.get(t);
                t.hasPositions &&
                  !i.position &&
                  (i.position = v.createBuffer()),
                  t.hasNormals && !i.normal && (i.normal = v.createBuffer()),
                  t.hasUvs && !i.uv && (i.uv = v.createBuffer()),
                  t.hasColors && !i.color && (i.color = v.createBuffer());
                var n = e.getAttributes();
                if (
                  (t.hasPositions &&
                    (v.bindBuffer(v.ARRAY_BUFFER, i.position),
                    v.bufferData(
                      v.ARRAY_BUFFER,
                      t.positionArray,
                      v.DYNAMIC_DRAW
                    ),
                    w.enableAttribute(n.position),
                    v.vertexAttribPointer(n.position, 3, v.FLOAT, !1, 0, 0)),
                  t.hasNormals)
                ) {
                  if (
                    (v.bindBuffer(v.ARRAY_BUFFER, i.normal),
                    !r.isMeshPhongMaterial &&
                      !r.isMeshStandardMaterial &&
                      !r.isMeshNormalMaterial &&
                      !0 === r.flatShading)
                  )
                    for (var a = 0, s = 3 * t.count; a < s; a += 9) {
                      var o = t.normalArray,
                        h = (o[a + 0] + o[a + 3] + o[a + 6]) / 3,
                        c = (o[a + 1] + o[a + 4] + o[a + 7]) / 3,
                        l = (o[a + 2] + o[a + 5] + o[a + 8]) / 3;
                      (o[a + 0] = h),
                        (o[a + 1] = c),
                        (o[a + 2] = l),
                        (o[a + 3] = h),
                        (o[a + 4] = c),
                        (o[a + 5] = l),
                        (o[a + 6] = h),
                        (o[a + 7] = c),
                        (o[a + 8] = l);
                    }
                  v.bufferData(v.ARRAY_BUFFER, t.normalArray, v.DYNAMIC_DRAW),
                    w.enableAttribute(n.normal),
                    v.vertexAttribPointer(n.normal, 3, v.FLOAT, !1, 0, 0);
                }
                t.hasUvs &&
                  r.map &&
                  (v.bindBuffer(v.ARRAY_BUFFER, i.uv),
                  v.bufferData(v.ARRAY_BUFFER, t.uvArray, v.DYNAMIC_DRAW),
                  w.enableAttribute(n.uv),
                  v.vertexAttribPointer(n.uv, 2, v.FLOAT, !1, 0, 0)),
                  t.hasColors &&
                    r.vertexColors !== u.NoColors &&
                    (v.bindBuffer(v.ARRAY_BUFFER, i.color),
                    v.bufferData(v.ARRAY_BUFFER, t.colorArray, v.DYNAMIC_DRAW),
                    w.enableAttribute(n.color),
                    v.vertexAttribPointer(n.color, 3, v.FLOAT, !1, 0, 0)),
                  w.disableUnusedAttributes(),
                  v.drawArrays(v.TRIANGLES, 0, t.count),
                  (t.count = 0);
              }),
              (this.renderBufferDirect = function (t, e, r, i, n, a) {
                w.setMaterial(i);
                var s = Ot(t, e, i, n),
                  o = r.id + "_" + s.id + "_" + (!0 === i.wireframe),
                  h = !1;
                o !== W && ((W = o), (h = !0)),
                  n.morphTargetInfluences && (O.update(n, r, i, s), (h = !0));
                var c,
                  l = r.index,
                  p = r.attributes.position,
                  d = 1;
                !0 === i.wireframe &&
                  ((l = _.getWireframeAttribute(r)), (d = 2));
                var f = F;
                null !== l && ((c = S.get(l)), (f = L).setIndex(c)),
                  h &&
                    (!(function (t, e, r, i) {
                      if (
                        r &&
                        r.isInstancedBufferGeometry &&
                        null === x.get("ANGLE_instanced_arrays")
                      )
                        return void console.error(
                          "RK.WebGLRenderer.setupVertexAttributes: using RK.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
                        );
                      void 0 === i && (i = 0);
                      w.initAttributes();
                      var n = r.attributes,
                        a = e.getAttributes(),
                        s = t.defaultAttributeValues;
                      for (var o in a) {
                        var h = a[o];
                        if (h >= 0) {
                          var u = n[o];
                          if (void 0 !== u) {
                            var c = u.normalized,
                              l = u.itemSize,
                              p = S.get(u);
                            if (void 0 === p) continue;
                            var d = p.buffer,
                              f = p.type,
                              m = p.bytesPerElement;
                            if (u.isInterleavedBufferAttribute) {
                              var g = u.data,
                                y = g.stride,
                                b = u.offset;
                              g && g.isInstancedInterleavedBuffer
                                ? (w.enableAttributeAndDivisor(
                                    h,
                                    g.meshPerAttribute
                                  ),
                                  void 0 === r.maxInstancedCount &&
                                    (r.maxInstancedCount =
                                      g.meshPerAttribute * g.count))
                                : w.enableAttribute(h),
                                v.bindBuffer(v.ARRAY_BUFFER, d),
                                v.vertexAttribPointer(
                                  h,
                                  l,
                                  f,
                                  c,
                                  y * m,
                                  (i * y + b) * m
                                );
                            } else
                              u.isInstancedBufferAttribute
                                ? (w.enableAttributeAndDivisor(
                                    h,
                                    u.meshPerAttribute
                                  ),
                                  void 0 === r.maxInstancedCount &&
                                    (r.maxInstancedCount =
                                      u.meshPerAttribute * u.count))
                                : w.enableAttribute(h),
                                v.bindBuffer(v.ARRAY_BUFFER, d),
                                v.vertexAttribPointer(h, l, f, c, 0, i * l * m);
                          } else if (void 0 !== s) {
                            var M = s[o];
                            if (void 0 !== M)
                              switch (M.length) {
                                case 2:
                                  v.vertexAttrib2fv(h, M);
                                  break;
                                case 3:
                                  v.vertexAttrib3fv(h, M);
                                  break;
                                case 4:
                                  v.vertexAttrib4fv(h, M);
                                  break;
                                default:
                                  v.vertexAttrib1fv(h, M);
                              }
                          }
                        }
                      }
                      w.disableUnusedAttributes();
                    })(i, s, r),
                    null !== l &&
                      v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, c.buffer));
                var m = 0;
                null !== l ? (m = l.count) : void 0 !== p && (m = p.count);
                var g = r.drawRange.start * d,
                  y = r.drawRange.count * d,
                  b = null !== a ? a.start * d : 0,
                  M = null !== a ? a.count * d : 1 / 0,
                  T = Math.max(g, b),
                  E = Math.min(m, g + y, b + M) - 1,
                  A = Math.max(0, E - T + 1);
                if (0 !== A) {
                  if (n.isMesh)
                    if (!0 === i.wireframe)
                      w.setLineWidth(i.wireframeLinewidth * pt()),
                        f.setMode(v.LINES);
                    else if (!0 === i.points) f.setMode(v.POINTS);
                    else
                      switch (n.drawMode) {
                        case u.TrianglesDrawMode:
                          f.setMode(v.TRIANGLES);
                          break;
                        case u.TriangleStripDrawMode:
                          f.setMode(v.TRIANGLE_STRIP);
                          break;
                        case u.TriangleFanDrawMode:
                          f.setMode(v.TRIANGLE_FAN);
                      }
                  else if (n.isLine) {
                    var R = i.linewidth;
                    void 0 === R && (R = 1),
                      w.setLineWidth(R * pt()),
                      n.isLineSegments
                        ? f.setMode(v.LINES)
                        : n.isLineLoop
                        ? f.setMode(v.LINE_LOOP)
                        : f.setMode(v.LINE_STRIP);
                  } else n.isPoints && f.setMode(v.POINTS);
                  r && r.isInstancedBufferGeometry
                    ? r.maxInstancedCount > 0 && f.renderInstances(r, T, A)
                    : f.render(T, A);
                }
              }),
              (this.compile = function (t, e) {
                (l.length = 0),
                  (p.length = 0),
                  t.traverse(function (t) {
                    t.isLight && (l.push(t), t.castShadow && p.push(t));
                  }),
                  A.setup(l, p, e),
                  t.traverse(function (e) {
                    if (e.material)
                      if (Array.isArray(e.material))
                        for (var r = 0; r < e.material.length; r++)
                          Ct(e.material[r], t.fog, e);
                      else Ct(e.material, t.fog, e);
                  });
              });
            var wt,
              Mt = !1,
              Et = null;
            function At(t) {
              null !== Et && Et(t), window.requestAnimationFrame(At);
            }
            function Rt(t, e, r, i) {
              for (var n = 0, a = t.length; n < a; n++) {
                var s = t[n],
                  o = s.object,
                  h = s.geometry,
                  u = void 0 === i ? s.material : i,
                  c = s.group;
                if (r.isArrayCamera) {
                  j = r;
                  for (var l = r.cameras, p = 0, d = l.length; p < d; p++) {
                    var f = l[p];
                    if (o.layers.test(f.layers)) {
                      var m = f.bounds,
                        g = m.x * Y,
                        y = m.y * Z,
                        v = m.z * Y,
                        x = m.w * Z;
                      w.viewport(X.set(g, y, v, x).multiplyScalar(J)),
                        Pt(o, e, f, h, u, c);
                    }
                  }
                } else (j = null), Pt(o, e, r, h, u, c);
              }
            }
            function Pt(t, e, r, i, n, a) {
              if (
                (t.onBeforeRender(N, e, r, i, n, a),
                t.modelViewMatrix.multiplyMatrices(
                  r.matrixWorldInverse,
                  t.matrixWorld
                ),
                t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
                t.isImmediateRenderObject)
              ) {
                w.setMaterial(n);
                var s = Ot(r, e.fog, n, t);
                (W = ""),
                  (function (t, e, r) {
                    t.render(function (t) {
                      N.renderBufferImmediate(t, e, r);
                    });
                  })(t, s, n);
              } else N.renderBufferDirect(r, e.fog, i, n, t, a);
              t.onAfterRender(N, e, r, i, n, a);
            }
            function Ct(t, e, r) {
              var i = M.get(t),
                n = R.getParameters(
                  t,
                  A.state,
                  p,
                  e,
                  rt.numPlanes,
                  rt.numIntersection,
                  r
                ),
                a = R.getProgramCode(t, n),
                s = i.program,
                o = !0;
              if (void 0 === s) t.addEventListener("dispose", xt);
              else if (s.code !== a) bt(t);
              else {
                if (void 0 !== n.shaderID) return;
                o = !1;
              }
              o &&
                ((i.shader = t.shader),
                t.onBeforeCompile(i.shader),
                (s = R.acquireProgram(t, i.shader, n, a)),
                (i.program = s),
                (t.program = s));
              var h = s.getAttributes();
              if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var u = 0; u < N.maxMorphTargets; u++)
                  h["morphTarget" + u] >= 0 && t.numSupportedMorphTargets++;
              }
              if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (u = 0; u < N.maxMorphNormals; u++)
                  h["morphNormal" + u] >= 0 && t.numSupportedMorphNormals++;
              }
              var c = i.shader.uniforms;
              ((t.isShaderMaterial || t.isRawShaderMaterial) &&
                !0 !== t.clipping) ||
                ((i.numClippingPlanes = rt.numPlanes),
                (i.numIntersection = rt.numIntersection),
                (c.clippingPlanes = rt.uniform)),
                (i.fog = e),
                (i.lightsHash = A.state.hash),
                t.lights &&
                  ((c.ambientLightColor.value = A.state.ambient),
                  (c.spotLights.value = A.state.spot),
                  (c.rectAreaLights.value = A.state.rectArea),
                  (c.pointLights.value = A.state.point),
                  (c.hemisphereLights.value = A.state.hemi),
                  (c.environmentLights.value = A.state.env),
                  (c.environmentMaps.value = A.state.envMap),
                  (c.spotShadowMap.value = A.state.spotShadowMap),
                  (c.spotShadowMatrix.value = A.state.spotShadowMatrix),
                  (c.pointShadowMap.value = A.state.pointShadowMap),
                  (c.pointShadowMatrix.value = A.state.pointShadowMatrix)),
                (t.ckDirShadows || t.lights) &&
                  ((c.directionalLights.value = A.state.directional),
                  c.directionalShadowMap &&
                    (c.directionalShadowMap.value =
                      A.state.directionalShadowMap),
                  c.directionalShadowMatrix &&
                    (c.directionalShadowMatrix.value =
                      A.state.directionalShadowMatrix));
              var l = i.program.getUniforms(),
                d = nt.seqWithValue(l.seq, c);
              i.uniformsList = d;
            }
            function Ot(t, e, r, i) {
              H = 0;
              var n = M.get(r);
              if (it && (at || t !== V)) {
                var a = t === V && r.id === k;
                rt.setState(
                  r.clippingPlanes,
                  r.clipIntersection,
                  r.clipShadows,
                  t,
                  n,
                  a
                );
              }
              if (
                (!1 === r.needsUpdate &&
                  (void 0 === n.program ||
                  (r.fog && n.fog !== e) ||
                  (r.lights && n.lightsHash !== A.state.hash)
                    ? (r.needsUpdate = !0)
                    : void 0 === n.numClippingPlanes ||
                      (n.numClippingPlanes === rt.numPlanes &&
                        n.numIntersection === rt.numIntersection) ||
                      (r.needsUpdate = !0)),
                r.needsRebuild || r.needsUpdate)
              ) {
                var s = {
                  numDirLights: A.state.directional.length,
                  numPointLights: A.state.point.length,
                  numSpotLights: A.state.spot.length,
                  numRectAreaLights: A.state.rectArea.length,
                  numHemiLights: A.state.hemi.length,
                  numEnvLights: A.state.env.length,
                };
                for (var o in s) o in r && (r[o] = s[o]);
                r.rebuild();
              }
              r.needsUpdate && (Ct(r, e, i), (r.needsUpdate = !1));
              var h,
                u,
                c = !1,
                l = !1,
                p = !1,
                d = n.program,
                f = d.getUniforms(),
                m = n.shader.uniforms;
              if (
                (w.useProgram(d.program) && ((c = !0), (l = !0), (p = !0)),
                (p = !0),
                r.id !== k && ((k = r.id), (l = !0)),
                c || t !== V)
              ) {
                if (
                  (f.setValue(v, "projectionMatrix", t.projectionMatrix),
                  b.logarithmicDepthBuffer &&
                    f.setValue(
                      v,
                      "logDepthBufFC",
                      2 / (Math.log(t.far + 1) / Math.LN2)
                    ),
                  V !== (j || t) && ((V = j || t), (l = !0), (p = !0)),
                  r.isShaderMaterial ||
                    r.isMeshPhongMaterial ||
                    r.isMeshStandardMaterial ||
                    r.envMap)
                ) {
                  var g = f.map.cameraPosition;
                  void 0 !== g &&
                    g.setValue(v, ut.setFromMatrixPosition(t.matrixWorld));
                }
                (r.isMeshPhongMaterial ||
                  r.isMeshLambertMaterial ||
                  r.isMeshBasicMaterial ||
                  r.isMeshStandardMaterial ||
                  r.isShaderMaterial ||
                  r.skinning) &&
                  f.setValue(v, "viewMatrix", t.matrixWorldInverse);
              }
              if (r.skinning) {
                f.setOptional(v, i, "bindMatrix"),
                  f.setOptional(v, i, "bindMatrixInverse");
                var y = i.skeleton;
                y && f.setOptional(v, y, "boneTexture");
              }
              return (
                l &&
                  (f.setValue(v, "toneMappingExposure", N.toneMappingExposure),
                  f.setValue(
                    v,
                    "toneMappingWhitePoint",
                    N.toneMappingWhitePoint
                  ),
                  r.lights &&
                    ((u = p),
                    ((h = m).ambientLightColor.needsUpdate = u),
                    (h.directionalLights.needsUpdate = u),
                    (h.pointLights.needsUpdate = u),
                    (h.spotLights.needsUpdate = u),
                    (h.rectAreaLights.needsUpdate = u),
                    (h.hemisphereLights.needsUpdate = u),
                    (h.environmentLights.needsUpdate = u),
                    (h.environmentMaps.needsUpdate = u)),
                  e &&
                    r.fog &&
                    (function (t, e) {
                      (t.fogColor.value = e.color),
                        e.isFog
                          ? ((t.fogNear.value = e.near),
                            (t.fogFar.value = e.far))
                          : e.isFogExp2 && (t.fogDensity.value = e.density);
                    })(m, e),
                  r.isMeshBasicMaterial
                    ? Ft(m, r)
                    : r.isMeshLambertMaterial
                    ? (Ft(m, r),
                      (function (t, e) {
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                      })(m, r))
                    : r.isMeshPhongMaterial
                    ? (Ft(m, r),
                      r.isMeshToonMaterial
                        ? (function (t, e) {
                            Lt(t, e),
                              e.gradientMap &&
                                (t.gradientMap.value = e.gradientMap);
                          })(m, r)
                        : Lt(m, r))
                    : r.isMeshStandardMaterial
                    ? (Ft(m, r),
                      r.isMeshPhysicalMaterial
                        ? (function (t, e) {
                            (t.clearCoat.value = e.clearCoat),
                              (t.clearCoatRoughness.value =
                                e.clearCoatRoughness),
                              zt(t, e);
                          })(m, r)
                        : zt(m, r))
                    : r.isMeshDepthMaterial
                    ? (Ft(m, r),
                      (function (t, e) {
                        e.displacementMap &&
                          ((t.displacementMap.value = e.displacementMap),
                          (t.displacementScale.value = e.displacementScale),
                          (t.displacementBias.value = e.displacementBias));
                      })(m, r))
                    : r.isMeshDistanceMaterial
                    ? (Ft(m, r),
                      (function (t, e) {
                        e.displacementMap &&
                          ((t.displacementMap.value = e.displacementMap),
                          (t.displacementScale.value = e.displacementScale),
                          (t.displacementBias.value = e.displacementBias));
                        t.referencePosition.value.copy(e.referencePosition),
                          (t.nearDistance.value = e.nearDistance),
                          (t.farDistance.value = e.farDistance);
                      })(m, r))
                    : r.isMeshNormalMaterial
                    ? (Ft(m, r),
                      (function (t, e) {
                        e.bumpMap &&
                          ((t.bumpMap.value = e.bumpMap),
                          (t.bumpScale.value = e.bumpScale));
                        e.normalMap &&
                          ((t.normalMap.value = e.normalMap),
                          t.normalScale.value.copy(e.normalScale));
                        e.displacementMap &&
                          ((t.displacementMap.value = e.displacementMap),
                          (t.displacementScale.value = e.displacementScale),
                          (t.displacementBias.value = e.displacementBias));
                      })(m, r))
                    : r.isLineBasicMaterial
                    ? ((function (t, e) {
                        (t.diffuse.value = e.color),
                          (t.opacity.value = e.opacity);
                      })(m, r),
                      r.isLineDashedMaterial &&
                        (function (t, e) {
                          (t.dashSize.value = e.dashSize),
                            (t.totalSize.value = e.dashSize + e.gapSize),
                            (t.scale.value = e.scale);
                        })(m, r))
                    : r.isPointsMaterial
                    ? (function (t, e) {
                        if (
                          ((t.diffuse.value = e.color),
                          (t.opacity.value = e.opacity),
                          (t.size.value = e.size * J),
                          (t.scale.value = 0.5 * Z),
                          (t.map.value = e.map),
                          null !== e.map)
                        ) {
                          var r = e.map.offset,
                            i = e.map.repeat;
                          t.offsetRepeat.value.set(r.x, r.y, i.x, i.y);
                        }
                      })(m, r)
                    : r.isShadowMaterial &&
                      ((m.color.value = r.color),
                      (m.opacity.value = r.opacity)),
                  void 0 !== m.ltcMat &&
                    (m.ltcMat.value = UniformsLib.LTC_MAT_TEXTURE),
                  void 0 !== m.ltcMag &&
                    (m.ltcMag.value = UniformsLib.LTC_MAG_TEXTURE),
                  nt.upload(v, n.uniformsList, m, N)),
                f.setValue(v, "modelViewMatrix", i.modelViewMatrix),
                f.setValue(v, "normalMatrix", i.normalMatrix),
                f.setValue(v, "modelMatrix", i.matrixWorld),
                d
              );
            }
            function Ft(t, e) {
              var r;
              if (
                ((t.opacity.value = e.opacity),
                e.color && (t.diffuse.value = e.color),
                e.emissive &&
                  t.emissive.value
                    .copy(e.emissive)
                    .multiplyScalar(e.emissiveIntensity),
                e.map && (t.map.value = e.map),
                e.alphaMap && (t.alphaMap.value = e.alphaMap),
                e.specularMap && (t.specularMap.value = e.specularMap),
                e.envMap &&
                  ((t.envMap.value = e.envMap),
                  (t.flipEnvMap.value =
                    e.envMap && e.envMap.isCubeTexture ? -1 : 1),
                  (t.reflectivity.value = e.reflectivity),
                  (t.refractionRatio.value = e.refractionRatio)),
                e.lightMap &&
                  ((t.lightMap.value = e.lightMap),
                  (t.lightMapIntensity.value = e.lightMapIntensity)),
                e.aoMap &&
                  ((t.aoMap.value = e.aoMap),
                  (t.aoMapIntensity.value = e.aoMapIntensity)),
                e.map
                  ? (r = e.map)
                  : e.specularMap
                  ? (r = e.specularMap)
                  : e.displacementMap
                  ? (r = e.displacementMap)
                  : e.normalMap
                  ? (r = e.normalMap)
                  : e.bumpMap
                  ? (r = e.bumpMap)
                  : e.roughnessMap
                  ? (r = e.roughnessMap)
                  : e.metalnessMap
                  ? (r = e.metalnessMap)
                  : e.alphaMap
                  ? (r = e.alphaMap)
                  : e.emissiveMap && (r = e.emissiveMap),
                void 0 !== r)
              ) {
                r.isWebGLRenderTarget && (r = r.texture);
                var i = r.offset,
                  n = r.repeat;
                t.offsetRepeat.value.set(i.x, i.y, n.x, n.y);
              }
            }
            function Lt(t, e) {
              (t.specular.value = e.specular),
                (t.shininess.value = Math.max(e.shininess, 1e-4)),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                e.bumpMap &&
                  ((t.bumpMap.value = e.bumpMap),
                  (t.bumpScale.value = e.bumpScale)),
                e.normalMap &&
                  ((t.normalMap.value = e.normalMap),
                  t.normalScale.value.copy(e.normalScale)),
                e.displacementMap &&
                  ((t.displacementMap.value = e.displacementMap),
                  (t.displacementScale.value = e.displacementScale),
                  (t.displacementBias.value = e.displacementBias));
            }
            function zt(t, e) {
              (t.roughness.value = e.roughness),
                (t.metalness.value = e.metalness),
                e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
                e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                e.bumpMap &&
                  ((t.bumpMap.value = e.bumpMap),
                  (t.bumpScale.value = e.bumpScale)),
                e.normalMap &&
                  ((t.normalMap.value = e.normalMap),
                  t.normalScale.value.copy(e.normalScale)),
                e.displacementMap &&
                  ((t.displacementMap.value = e.displacementMap),
                  (t.displacementScale.value = e.displacementScale),
                  (t.displacementBias.value = e.displacementBias)),
                e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
            }
            (this.animate = function (t) {
              (Et = t), Mt || (window.requestAnimationFrame(At), (Mt = !0));
            }),
              (this.render = function (t, e, r, i) {
                if (e && e.isCamera) {
                  if (!D) {
                    (W = ""),
                      (k = -1),
                      (V = null),
                      !0 === t.autoUpdate && t.updateMatrixWorld(),
                      null === e.parent && e.updateMatrixWorld(),
                      ht.multiplyMatrices(
                        e.projectionMatrix,
                        e.matrixWorldInverse
                      ),
                      et.setFromMatrix(ht),
                      (l.length = 0),
                      (p.length = 0),
                      (m.length = 0),
                      (g.length = 0),
                      (at = this.localClippingEnabled),
                      (it = rt.init(this.clippingPlanes, at, e)),
                      (d = P.get(t, e)).init(),
                      (function t(e, r, i) {
                        if (!e.visible) return;
                        if (e.layers.test(r.layers))
                          if (e.isLight) l.push(e), e.castShadow && p.push(e);
                          else if (e.isSprite)
                            (e.frustumCulled && !et.intersectsSprite(e)) ||
                              m.push(e);
                          else if (e.isLensFlare) g.push(e);
                          else if (e.isImmediateRenderObject)
                            i &&
                              ut
                                .setFromMatrixPosition(e.matrixWorld)
                                .applyMatrix4(ht),
                              d.push(e, null, e.material, ut.z, null);
                          else if (
                            (e.isMesh || e.isLine || e.isPoints) &&
                            (e.isSkinnedMesh &&
                              e.skeleton &&
                              e.skeleton.update(),
                            !e.frustumCulled || et.intersectsObject(e))
                          ) {
                            i &&
                              ut
                                .setFromMatrixPosition(e.matrixWorld)
                                .applyMatrix4(ht);
                            var n = E.update(e),
                              a = e.material;
                            if (Array.isArray(a))
                              for (
                                var s = n.groups, o = 0, h = s.length;
                                o < h;
                                o++
                              ) {
                                var u = s[o],
                                  c = a[u.materialIndex];
                                c && c.visible && d.push(e, n, c, ut.z, u);
                              }
                            else
                              void 0 !== a && a.visible
                                ? d.push(e, n, a, ut.z, null)
                                : void 0 === a &&
                                  console.error(
                                    "Can not render object with undefined material",
                                    e
                                  );
                          }
                        var f = e.children;
                        for (o = 0, h = f.length; o < h; o++) t(f[o], r, i);
                      })(t, e, N.sortObjects),
                      !0 === N.sortObjects && d.sort(),
                      it && rt.beginShadows(),
                      mt.render(p, t, e),
                      A.setup(l, p, e),
                      it && rt.endShadows(),
                      lt.frame++,
                      (lt.calls = 0),
                      (lt.vertices = 0),
                      (lt.faces = 0),
                      (lt.points = 0),
                      void 0 === r && (r = null),
                      this.setRenderTarget(r),
                      C.render(d, t, e, i);
                    var n = d.opaque,
                      a = d.transparent;
                    if (t.overrideMaterial) {
                      var s = t.overrideMaterial;
                      n.length && Rt(n, t, e, s), a.length && Rt(a, t, e, s);
                    } else n.length && Rt(n, t, e), a.length && Rt(a, t, e);
                    B.render(m, t, e),
                      z.render(g, t, e, X),
                      r && T.updateRenderTargetMipmap(r),
                      w.buffers.depth.setTest(!0),
                      w.buffers.depth.setMask(!0),
                      w.buffers.color.setMask(!0),
                      w.setPolygonOffset(!1);
                  }
                } else
                  console.error(
                    "RK.WebGLRenderer.render: camera is not an instance of RK.Camera."
                  );
              }),
              (this.setFaceCulling = function (t, e) {
                w.setCullFace(t), w.setFlipSided(e === u.FrontFaceDirectionCW);
              }),
              (this.allocTextureUnit = function () {
                var t = H;
                return (
                  t >= b.maxTextures &&
                    console.warn(
                      "RK.WebGLRenderer: Trying to use " +
                        t +
                        " texture units while this GPU supports only " +
                        b.maxTextures
                    ),
                  (H += 1),
                  t
                );
              }),
              (this.setTexture2D =
                ((wt = !1),
                function (t, e) {
                  t &&
                    t.isWebGLRenderTarget &&
                    (wt ||
                      (console.warn(
                        "RK.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."
                      ),
                      (wt = !0)),
                    (t = t.texture)),
                    T.setTexture2D(t, e);
                })),
              (this.setTexture = (function () {
                var t = !1;
                return function (e, r) {
                  t ||
                    (console.warn(
                      "RK.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."
                    ),
                    (t = !0)),
                    T.setTexture2D(e, r);
                };
              })()),
              (this.setTextureCube = (function () {
                var t = !1;
                return function (e, r) {
                  e &&
                    e.isWebGLRenderTargetCube &&
                    (t ||
                      (console.warn(
                        "RK.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."
                      ),
                      (t = !0)),
                    (e = e.texture)),
                    (e && e.isCubeTexture) ||
                    (Array.isArray(e.image) && 6 === e.image.length)
                      ? T.setTextureCube(e, r)
                      : T.setTextureCubeDynamic(e, r);
                };
              })()),
              (this.getRenderTarget = function () {
                return I;
              }),
              (this.setRenderTarget = function (t) {
                (I = t),
                  t &&
                    void 0 === M.get(t).__webglFramebuffer &&
                    T.setupRenderTarget(t);
                var e = null,
                  r = !1;
                if (t) {
                  var i = M.get(t).__webglFramebuffer;
                  t.isWebGLRenderTargetCube
                    ? ((e = i[t.activeCubeFace]), (r = !0))
                    : (e = i),
                    X.copy(t.viewport),
                    q.copy(t.scissor),
                    (K = t.scissorTest);
                } else
                  X.copy(Q).multiplyScalar(J),
                    q.copy($).multiplyScalar(J),
                    (K = tt);
                if (
                  (G !== e && (v.bindFramebuffer(v.FRAMEBUFFER, e), (G = e)),
                  w.viewport(X),
                  w.scissor(q),
                  w.setScissorTest(K),
                  r)
                ) {
                  var n = M.get(t.texture);
                  v.framebufferTexture2D(
                    v.FRAMEBUFFER,
                    v.COLOR_ATTACHMENT0,
                    v.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace,
                    n.__webglTexture,
                    t.activeMipMapLevel
                  );
                }
              }),
              (this.readRenderTargetPixels = function (t, e, r, i, n, a) {
                if (t && t.isWebGLRenderTarget) {
                  var s = M.get(t).__webglFramebuffer;
                  if (s) {
                    var o = !1;
                    s !== G && (v.bindFramebuffer(v.FRAMEBUFFER, s), (o = !0));
                    try {
                      var h = t.texture,
                        c = h.format,
                        l = h.type;
                      if (
                        c !== u.RGBAFormat &&
                        U.convert(c) !==
                          v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)
                      )
                        return void console.error(
                          "RK.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                        );
                      if (
                        !(
                          l === u.UnsignedByteType ||
                          U.convert(l) ===
                            v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE) ||
                          (l === u.FloatType &&
                            (x.get("OES_texture_float") ||
                              x.get("WEBGL_color_buffer_float"))) ||
                          (l === u.HalfFloatType &&
                            x.get("EXT_color_buffer_half_float"))
                        )
                      )
                        return void console.error(
                          "RK.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                        );
                      v.checkFramebufferStatus(v.FRAMEBUFFER) ===
                      v.FRAMEBUFFER_COMPLETE
                        ? e >= 0 &&
                          e <= t.width - i &&
                          r >= 0 &&
                          r <= t.height - n &&
                          v.readPixels(
                            e,
                            r,
                            i,
                            n,
                            U.convert(c),
                            U.convert(l),
                            a
                          )
                        : console.error(
                            "RK.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                          );
                    } finally {
                      o && v.bindFramebuffer(v.FRAMEBUFFER, G);
                    }
                  }
                } else
                  console.error(
                    "RK.WebGLRenderer.readRenderTargetPixels: renderTarget is not RK.WebGLRenderTarget."
                  );
              });
            var Bt = 0,
              Ut = [],
              Nt = function () {
                for (; Ut.length > 1 && Bt > 16384; ) {
                  var t = Ut.findIndex(function (t) {
                    return "warn" === t.level;
                  });
                  if (t >= 0) {
                    var e = Ut[t];
                    (Bt -= e.message.length), Ut.splice(t, 1);
                  } else (Bt -= Ut[0].message.length), Ut.splice(0, 1);
                }
              };
            (this.logShaderError = function (t) {
              Ut.push({ message: t, level: "error" }), (Bt += t.length), Nt();
            }),
              (this.logShaderWarning = function (t) {
                Ut.push({ message: t, level: "warn" }), (Bt += t.length), Nt();
              }),
              (this.getShaderCompileReport = function (t) {
                var e = "",
                  r = !0,
                  i = !1,
                  n = void 0;
                try {
                  for (
                    var a, s = Ut[Symbol.iterator]();
                    !(r = (a = s.next()).done);
                    r = !0
                  ) {
                    var o = a.value;
                    e += o.level + "\n" + o.message + "\n";
                  }
                } catch (t) {
                  (i = !0), (n = t);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (i) throw n;
                  }
                }
                return e;
              });
          },
          UniformsUtils: ye,
          Scene: He,
          SkinnedMesh: Ye,
          Skeleton: Ze,
          Bone: Je,
          Mesh: Me,
          Group: er,
          Reflector: ir,
          DataTexture: nr,
          CubeTexture: v,
          CanvasTexture: ht,
          DepthTexture: ar,
          Texture: d,
          Spherical: Wi,
        },
        n,
        {
          RawShaderMaterial: qr,
          ShaderMaterial: ve,
          Material: ue,
          DataTextureLoader: Jr,
          CubeTextureLoader: $r,
          TextureLoader: ti,
          DefaultLoadingManager: Yr,
          LoadingManager: Hr,
          ImageLoader: Qr,
          FontLoader: bi,
          FileLoader: Zr,
          Loader: Ti,
          PointLight: Ei,
          HemisphereLight: Ai,
          EnvironmentLight: Ri,
          DirectionalLightShadow: Pi,
          DirectionalLight: Ci,
          AmbientLight: Oi,
          LightShadow: _i,
          Light: Si,
          PerspectiveCamera: rr,
          OrthographicCamera: Ut,
          Camera: Bt,
          Uniform: Fi,
          InstancedBufferGeometry: Li,
          BufferGeometry: ie,
          GeometryIdCount: Vt,
          Geometry: jt,
          InterleavedBufferAttribute: zi,
          InstancedInterleavedBuffer: Ui,
          InterleavedBuffer: Bi,
          InstancedBufferAttribute: Ni,
        },
        i,
        {
          Face3: It,
          Object3D: zt,
          Raycaster: Di,
          Layers: At,
          EventDispatcher: s,
          Clock: ki,
          Math: c.a,
          Plane: Mt,
          Frustum: Tt,
          Ray: xe,
          Matrix4: y.a,
          Matrix3: wt,
          Box3: xt,
          Box2: at,
          Euler: Et,
          Vec4: f,
          Vec3: st.a,
          Vec2: l.a,
          Quaternion: yt.a,
          Color: Dt,
          Font: xi,
          WebGLUtils: Ke,
        },
        u,
        { OrbitControls: Vi, SwingTwist: ji, ConeConstraint: Xi.a }
      ));
  },
  8: function (t, e, r) {
    "use strict";
    function i(t, e) {
      arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      (this.x = t || 0), (this.y = e || 0);
    }
    var n, a;
    r.d(e, "a", function () {
      return i;
    }),
      Object.defineProperties(i.prototype, {
        width: {
          get: function () {
            return this.x;
          },
          set: function (t) {
            this.x = t;
          },
        },
        height: {
          get: function () {
            return this.y;
          },
          set: function (t) {
            this.y = t;
          },
        },
        xy: {
          get: function () {
            return this;
          },
          set: function (t) {
            this.copy(t);
          },
        },
        yx: {
          get: function () {
            return new i(this.y, this.x);
          },
          set: function (t) {
            this.set(t.y, t.x);
          },
        },
      }),
      Object.assign(i.prototype, {
        isVec2: !0,
        set: function (t, e) {
          return (this.x = t), (this.y = e), this;
        },
        setScalar: function (t) {
          return (this.x = t), (this.y = t), this;
        },
        setX: function (t) {
          return (this.x = t), this;
        },
        setY: function (t) {
          return (this.y = t), this;
        },
        setComponent: function (t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        },
        getComponent: function (t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y);
        },
        copy: function (t) {
          return (this.x = t.x), (this.y = t.y), this;
        },
        add: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), this);
        },
        addScalar: function (t) {
          return (this.x += t), (this.y += t), this;
        },
        toSimple: function () {
          return { x: this.x, y: this.y };
        },
        addVectors: function (t, e) {
          return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        },
        addScaledVector: function (t, e) {
          return (this.x += t.x * e), (this.y += t.y * e), this;
        },
        sub: function (t, e) {
          return void 0 !== e
            ? (console.warn(
                "RK.Vec2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), this);
        },
        subScalar: function (t) {
          return (this.x -= t), (this.y -= t), this;
        },
        subVectors: function (t, e) {
          return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        },
        multiply: function (t) {
          return (this.x *= t.x), (this.y *= t.y), this;
        },
        multiplyScalar: function (t) {
          return (this.x *= t), (this.y *= t), this;
        },
        divide: function (t) {
          return (this.x /= t.x), (this.y /= t.y), this;
        },
        divideScalar: function (t) {
          return this.multiplyScalar(1 / t);
        },
        min: function (t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            this
          );
        },
        max: function (t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            this
          );
        },
        clamp: function (t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            this
          );
        },
        clampScalar:
          ((n = new i()),
          (a = new i()),
          function (t, e) {
            return n.set(t, t), a.set(e, e), this.clamp(n, a);
          }),
        clampLength: function (t, e) {
          var r = this.length();
          return this.divideScalar(r || 1).multiplyScalar(
            Math.max(t, Math.min(e, r))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        },
        negate: function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        },
        dot: function (t) {
          return this.x * t.x + this.y * t.y;
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y;
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        lengthManhattan: function () {
          return Math.abs(this.x) + Math.abs(this.y);
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        angle: function () {
          var t = Math.atan2(this.y, this.x);
          return t < 0 && (t += 2 * Math.PI), t;
        },
        distanceTo: function (t) {
          return Math.sqrt(this.distanceToSquared(t));
        },
        distanceToSquared: function (t) {
          var e = this.x - t.x,
            r = this.y - t.y;
          return e * e + r * r;
        },
        distanceToManhattan: function (t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        },
        setLength: function (t) {
          return this.normalize().multiplyScalar(t);
        },
        lerp: function (t, e) {
          return (
            (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
          );
        },
        lerpVectors: function (t, e, r) {
          return this.subVectors(e, t).multiplyScalar(r).add(t);
        },
        equals: function (t) {
          return t.x === this.x && t.y === this.y;
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this.x),
            (t[e + 1] = this.y),
            t
          );
        },
        fromBufferAttribute: function (t, e, r) {
          return (
            void 0 !== r &&
              console.warn(
                "RK.Vec2: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            this
          );
        },
        rotateAround: function (t, e) {
          var r = Math.cos(e),
            i = Math.sin(e),
            n = this.x - t.x,
            a = this.y - t.y;
          return (
            (this.x = n * r - a * i + t.x), (this.y = n * i + a * r + t.y), this
          );
        },
      });
  },
  90: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return a;
    });
    var i = r(27);
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var a = (function () {
      function t(e, r, n, a, s, o, h) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          void 0 === e && (e = -Math.PI / 2),
          void 0 === r && (r = Math.PI / 2),
          void 0 === n && (n = -Math.PI / 2),
          void 0 === a && (a = Math.PI / 2),
          void 0 === s && (s = -Math.PI / 2),
          void 0 === o && (o = Math.PI / 2),
          void 0 === h && (h = "swingtwist"),
          (this.swingTwist = new RK.SwingTwist()),
          (this.minX = e),
          (this.maxX = r),
          (this.minY = n),
          (this.maxY = a),
          (this.minZ = s),
          (this.maxZ = o),
          (this.order = h),
          (this.orient = new i.a()),
          (this.bind = new i.a()),
          (this.preRotate = new i.a()),
          (this._q = new i.a());
      }
      var e, r, a;
      return (
        (e = t),
        (a = [
          {
            key: "MirrorCone",
            value: function (t) {
              var e = t.orient;
              if (e) {
                var r = new i.a();
                for (var n in (r.copy(e), r.multiply(new i.a(0, 0, 1, 0)), e))
                  e[n] = r[n];
              }
              var a = t.x[0];
              (t.x[0] = -t.x[1]),
                (t.x[1] = -a),
                (a = t.y[0]),
                (t.y[0] = -t.y[1]),
                (t.y[1] = -a);
            },
          },
        ]),
        (r = [
          {
            key: "constrain",
            value: function (t) {
              this._q.multiplyQuaternions(this.bind, this.orient),
                this._q.inverse(),
                this._q.multiply(t.quaternion),
                this._q.multiply(this.preRotate.clone().inverse()),
                this._q.multiply(this.orient);
              var e = this.swingTwist.setFromQuaternion(this._q, this.order),
                r = 0,
                i = 0,
                n = -1,
                a = -1;
              e.swing.y >= 0
                ? ((r = Math.abs(this.maxY)),
                  e.swing.z >= 0
                    ? ((n = 0), (a = 0.5 * Math.PI))
                    : ((n = 0.5 * Math.PI), (a = Math.PI)))
                : ((r = Math.abs(this.minY)),
                  e.swing.z >= 0
                    ? ((n = 1.5 * Math.PI), (a = 2 * Math.PI))
                    : ((n = Math.PI), (a = 1.5 * Math.PI))),
                (i =
                  e.swing.z >= 0 ? Math.abs(this.maxZ) : Math.abs(this.minZ)),
                (r = Math.sin(r / 2)),
                (i = Math.sin(i / 2));
              var s = e.swing.y,
                o = e.swing.z;
              function h(t, e, r, i, n) {
                var a = Math.sin(r),
                  s = Math.cos(r);
                return (
                  -2 * i * t * s +
                  2 * t * t * a * s +
                  2 * n * e * a -
                  2 * e * e * a * s
                );
              }
              var u = h(r, i, n, s, o);
              if (h(r, i, a, s, o) < u) {
                var c = n;
                (n = a), (a = c);
              }
              for (var l = 0; l < 8; ++l) {
                var p = (n + a) / 2;
                h(r, i, p, s, o) < 0 ? (n = p) : (a = p);
              }
              var d = !1,
                f = (n + a) / 2,
                m = r * Math.sin(f),
                g = i * Math.cos(f);
              m * m + g * g < s * s + o * o &&
                ((e.swing.y = m),
                (e.swing.z = g),
                (e.swing.w = Math.sqrt(1 - m * m - g * g)),
                (d = !0));
              var y = Math.sign(e.twist.x),
                v = 2 * Math.acos(e.twist.w) * y;
              (v /= 2 * Math.PI),
                (v += 0.5),
                (v -= Math.floor(v)),
                (v -= 0.5),
                (v *= 2 * Math.PI);
              var x = Math.min(Math.max(v, this.minX), this.maxX);
              return (
                v !== x &&
                  ((e.twist.x = Math.sin(x / 2)),
                  (e.twist.w = Math.cos(x / 2)),
                  (d = !0)),
                d &&
                  (e.toQuaternion(this._q),
                  t.quaternion.copy(this.orient),
                  t.quaternion.inverse(),
                  t.quaternion.multiplyQuaternions(this._q, t.quaternion),
                  t.quaternion.multiplyQuaternions(this.orient, t.quaternion),
                  t.quaternion.multiplyQuaternions(this.bind, t.quaternion),
                  t.quaternion.multiplyQuaternions(
                    t.quaternion,
                    this.preRotate
                  )),
                d
              );
            },
          },
        ]) && n(e.prototype, r),
        a && n(e, a),
        t
      );
    })();
  },
});
//# sourceMappingURL=dev/renderkit.js.map
