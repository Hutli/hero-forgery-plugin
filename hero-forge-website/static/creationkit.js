! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 543)
}({
    0: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(45),
            i = r(43);

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, s;
            return t = e, s = [{
                key: "init",
                value: function(e) {
                    n.a.init(), void 0 === e && console.error("Project settings undefined, using defaults"), this._initCookieVariables(), this._initUrlVariables(), this._initProjectSettings(e || {}), this.debug && this.initDebugSettings(), this._initUrlVariables(), this._defaultPartSettings = {
                        groundOffset: 0,
                        bounds: void 0,
                        allowMirror: !0
                    }, !ART_VERSION || "" === ART_VERSION || ART_VERSION.indexOf("}") > 0 ? (console.warn("Generating random art version number because ART_VERSION set by server to", ART_VERSION), this.artVersionNumber = (new Date).getTime() + "") : this.artVersionNumber = ART_VERSION, this._applyConsequences(), this.initialized = !0
                }
            }, {
                key: "_initDefaults",
                value: function() {
                    this.SubsurfaceMode = {
                        None: 0,
                        AmbientTint: 1,
                        TextureSpaceDiffusion: 2
                    }, this.debug = !1, this.color = !1, this.rez = "loRez", this.forge = !1, this.texturePath = "/static/herobundles/", this.thumbnailPath = "/static/herobundles/", this.meshBundlePath = "/static/herobundles/", this.meshBundlePathHigh = "/forge_static/herobundles/", this.smokeTest = !1, this.normalMaps = !0, this.hiRezNormalMaps = !1, this.morphNormals = !1, this.thumbFormat = "png", this.cached = !1, this.characterCount = 1, this.siteUrl = "", this.hackyPromptForToS = !1, this.cameraPosition = void 0, this.fixedCamera = !1, this.dragRotateMesh = !1, this.globalScale = 1, this.hasMainSkeleton = !0, this.cameraOffset = !0, this.hiRez = !1, this.cameras = {
                        default: {
                            position: [0, 4.5, 1.9999],
                            rotation: [-.9827, 0, 0],
                            target: [0, 1.5, 0]
                        }
                    }, this.extraLoaders = {}, this.mobileCheck = !1, this.showJoints = !1, this.groundColor = void 0, this.lighting = "highContrast", this.bgLighting = {}, this.alwaysShowMaterialSim = !1, this.hasBeenToColor = !1, this.userSettings = {
                        hasBeenToColor: !1,
                        occlusion: !0,
                        morphids: !0,
                        shadows: !0,
                        graphics: !1,
                        extraProducts: !1,
                        debug: !1,
                        eyeOrientHack: !0
                    }, this.graphics = !1, this.morphids = !0, this.disableClipping = !1, this.rtShadows = !1, this.shadowMapSize = 512, this.sunOcclusion = !1, this.regular = !1, this.initialConfig = void 0, this.forceNormalMaps = !1, this.snapBoundaries = !0, this.clearParts = !1, this.hideBackgroundForScreenshots = !1, this.hideBackgroundForThumbnails = !0, this.thumbnailSize = [300, 300], this.configThumbnailSize = [120, 120], this.backgroundCube = !0, this.thumbnailHighAA = !1, this.thumbTransparency = !0, this.useEnvironmentMapInShader = !0, this.userMontageThumbs = !1, this.hasPoses = !0, this.twinsies = !1, this.skeleton = {}, this.slots = {}, this.sliders = {}, this.slotGroups = {}, this.projectName = "TestProject", this.projectLabel = "Test Project", this.defaultConfigCount = 2, this.defaultCharacterName = "Unnamed Character", this.characterPlural = "Heroes", this.prefix = "hf", this.compact = i.a.compact(), this.bounds = [-2, -0, -2, 2, 3, 2], this.characterRotation = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, this.blankInitialConfig = !1, this.config_id = void 0, this.materialSims = {}, this.displacementScale = 1, this.addonKeywords = {}, this.logMaterial = void 0, this.frostbiteSpecularOcclusion = !0, this.occlusionCombineMin = !1, this.voxelCanvas = !1, this.configEditorMode = !1, this.configEditorSaveMeshes = !0, this.configEditorSaveColor = !1, this.configEditorSavePoseMode = !1, this.configEditorSaveDecals = !1, this.occlusionDepthTileDim = 4, this.occlusionTextureSize = 1024, this.occlusionSampleCount = 4096, this.sunOcclusionSampleCount = 256, this.allowBakedPhysical = !0, this.allowBakedEmissive = !0, this.allowBakedNormal = !1, this.renderedThumbnails = !0, this.colorTextureSize = Math.pow(2, Math.ceil(Math.log(screen.height) / Math.log(2))), this.colorTextureSize > 2048 ? this.colorTextureSize = 2048 : this.colorTextureSize < 512 && (this.colorTextureSize = 512), this.colorTextureSizeHigh = 2048, this.ignoreSpecs = !1, this.forceExpensive = !1, this.webgl2 = !1, this.packedThumbs = !1, this.FOV = 45, this.squareCamera = !1, this.preBakedOcclusion = !0, this.groundPlane = !0, this.useVolumeNormals = !1, this.forgePostVerify = !0, this.forgeVerifyNormals = !0, this.mobileConfigThumbs = !1, this.showBackgroundImageInScreenshots = !1, this.occlusion = !0, this.newOcclusion = !0, this.vertexOcclusion = !1, this.reflections = !1, this.content = void 0, this.rc = void 0, this.groundPlane = !0, this.CustomDisplay = void 0, this.CustomModded = void 0, this.CustomData = void 0, this.CustomCharacter = void 0, this.screenHeightInWorldUnits = 5, this.debugPaints = !1, this.units = "cm", this.globalClipPlane = void 0, this.invitationKey = void 0, this.progressiveAA = !0, this.subsurface = this.SubsurfaceMode.None, this.newPartAge = 27, this.montageCameras = void 0, this.tokenCameras = void 0, this.holdAll = !1, this.mobileThumbs = !1, this.newBreadcrumbs = !1, this.searchable = !1, this.cameraControls = {
                        damping: .2,
                        minPolarAngle: .01,
                        maxPolarAngle: .52 * Math.PI,
                        pushMinRadius: 4,
                        pushUpMin: 0,
                        pushUpMax: 1,
                        trackMinRadius: 4,
                        trackMaxRadius: 8,
                        trackLeftMax: -.5,
                        trackLeftMin: -1.5,
                        minDistance: 4,
                        maxDistance: 9,
                        maxZoom: 2,
                        enableZoom: !0,
                        enablePan: !1,
                        enableRotate: !0,
                        zoomOnCursor: !1
                    }, this.shaderballs = !1, this.smallEnvMaps = !0, this.seamFin = !0, this.extras = !1, this.surfaceBakeMaxWhite254 = !0, this.materialSim = void 0, this.text = {
                        mobileNotSupported: "Mobile devices not supported yet.",
                        browserMinimumRequirements: "Your browser currently does not meet the minimum requirements.",
                        webgDisabled: "It appears 3D graphics (WebGL) are disabled on your device.",
                        graphicsNotSupported: "Sorry, your graphics device is not supported yet.",
                        loadingFailed: "Critical Miss!",
                        somethingWentWrong: "Something went wrong!",
                        newsletterCopy: "I wish to receive emails with news and promotions from HeroForge.",
                        emptyCartCopy: "Time to create some miniatures you'll love.",
                        emptyCartCTA: "Create Mini",
                        emptyOrderHistoryCopy: "create some miniatures you'll love?",
                        digitalShipCopy: "Digital models are made available for download on your Digital Orders page",
                        physicalShipCopy: "Physical minis will be shipped to:",
                        giftShipCopy: "Gift cards will be emailed to you at:",
                        digitalOnlyShipCopy: function(e) {
                            return e ? "minis are ready for download!" : "mini is ready for download"
                        },
                        shippingAlert: "",
                        digitalAlert: "",
                        purchaseConfirmationAlert: "You will have 24 hours after placing your order to cancel it from your Order Details page. Digital models cannot be cancelled."
                    }, this.theme = {}, this.compactWidth = 960, this.loadingSolutions = {}, this.showLoadingFailureSolutions = !0, this.showLoadingScreen = !0, this.dataPath = "/options_static/", this.routeMappings = void 0, this.skinInfluenceMax = 4, this.refraction = !1, this.hidePerVertex = !1, this.detectWebglCrash = !1
                }
            }, {
                key: "_applyConsequences",
                value: function() {
                    this.color || (this.bakeColorLayers = !1)
                }
            }, {
                key: "initDebugSettings",
                value: function() {
                    this.cameraControls.enablePan = !0, this.cameraControls.minDistance = 0, this.cameraControls.maxDistance = 5e3
                }
            }, {
                key: "getSlotSetting",
                value: function(e, t) {
                    return e in this.slots && t in this.slots[e] ? this.slots[e][t] : t in this._defaultPartSettings ? this._defaultPartSettings[t] : void 0
                }
            }, {
                key: "_initProjectSettings",
                value: function(e) {
                    for (var t in e) t in this ? this[t] = e[t] : console.warn("Unrecognized variable " + t + " found in project settings ")
                }
            }, {
                key: "_initUrlVariables",
                value: function() {
                    this._setUserSettings(n.a.variables)
                }
            }, {
                key: "GetCookieSetting",
                value: function(e) {
                    return this._LoadCookieSettings()[e]
                }
            }, {
                key: "SetCookieSetting",
                value: function(e, t) {
                    var r = this._LoadCookieSettings();
                    r[e] = t, this._SaveCookieSettings(r)
                }
            }, {
                key: "_LoadCookieSettings",
                value: function() {
                    var e = localStorage.getItem("settings") || "{}";
                    return JSON.parse(e)
                }
            }, {
                key: "_SaveCookieSettings",
                value: function(e) {
                    var t = JSON.stringify(e);
                    localStorage.setItem("settings", t)
                }
            }, {
                key: "_initCookieVariables",
                value: function() {
                    try {
                        var e = this._LoadCookieSettings();
                        this._setUserSettings(e)
                    } catch (e) {
                        console.log("Error loading setttings"), console.log(e)
                    }
                }
            }, {
                key: "_setUserSettings",
                value: function(t) {
                    for (var r in t) r in e.userSettings && null != this[r] && (this[r] = t[r])
                }
            }], (r = null) && a(t.prototype, r), s && a(t, s), e
        }();
        s._initDefaults()
    },
    10: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r(13);

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, a;
            return t = e, a = [{
                key: "init",
                value: function() {
                    this.buckets = {
                        start: [],
                        animation: [],
                        postAnimation: [],
                        render: [],
                        preRender: [],
                        postRender: [],
                        end: []
                    }, this.paused = !0, this.frameTime = 1e3 / 15, this.meanFrameTime = 1e3 / 15, this.goodFrameTime = 1e3 / 15, this._previousRenderTime = performance.now(), this._microsecondFrameTimeSamples = new Int32Array(16);
                    for (var e = 0; e < 16; e++) this._microsecondFrameTimeSamples[e] = 1e6 / 60;
                    this._microsecondFrameTimeSampleIndex = 0, this._microsecondFrameTimeSum = 16 * this._microsecondFrameTimeSamples[0], this._gameLoopBind = this._gameLoop.bind(this), this._fpsSamplers = []
                }
            }, {
                key: "debugPrint",
                value: function() {}
            }, {
                key: "register",
                value: function(e, t) {
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2], this.buckets[t].push(e)
                }
            }, {
                key: "_gameLoop",
                value: function(e) {
                    this.paused || (this.updateFps(e), this.buckets.start.map((function(e) {
                        return e()
                    })), this._needUpdateAnimations && (this.buckets.animation.map((function(e) {
                        return e()
                    })), this.buckets.postAnimation.map((function(e) {
                        return e()
                    })), this._needUpdateAnimations = !1), (this._needUpdateRender || this._needUpdatePreRender || this._needUpdatePostRender) && (this._needUpdatePreRender && this.buckets.preRender.map((function(e) {
                        return e()
                    })), this._needUpdateRender && this.buckets.render.map((function(e) {
                        return e()
                    })), this._needUpdatePostRender && this.buckets.postRender.map((function(e) {
                        return e()
                    })), this._needUpdatePreRender = !1, this._needUpdateRender = !1, this._needUpdatePostRender = !1, this.SceneChangedSinceRender = !1), n.a.emit("end"), this.buckets.end.map((function(e) {
                        return e()
                    })), requestAnimationFrame(this._gameLoopBind))
                }
            }, {
                key: "updateFps",
                value: function(e) {
                    var t = e || performance.now();
                    if (this.frameTime = Math.max(t - this._previousRenderTime, 1e3 / 60), this._fpsSamplers.length && (this._needUpdateRender = !0), this._needUpdateRender && this._previousNeedUpdateRender) {
                        var r = Math.round(1e3 * this.frameTime);
                        this._microsecondFrameTimeSum -= this._microsecondFrameTimeSamples[this._microsecondFrameTimeSampleIndex], this._microsecondFrameTimeSamples[this._microsecondFrameTimeSampleIndex] = r, this._microsecondFrameTimeSum += this._microsecondFrameTimeSamples[this._microsecondFrameTimeSampleIndex], this._microsecondFrameTimeSampleIndex = (this._microsecondFrameTimeSampleIndex + 1) % this._microsecondFrameTimeSamples.length, this.meanFrameTime = this._microsecondFrameTimeSum / (1e3 * this._microsecondFrameTimeSamples.length), this.goodFrameTime += .01, this.goodFrameTime = Math.min(this.goodFrameTime, this.meanFrameTime);
                        for (var n = this._fpsSamplers.length - 1; n >= 0; --n) {
                            var i = this._fpsSamplers[n];
                            if (i.samples.push(this.frameTime), i.samples.length >= i.sampleCount) {
                                try {
                                    i.resolve(i.samples)
                                } catch (e) {
                                    console.log("error resolving fps sampler")
                                }
                                this._fpsSamplers.splice(n, 1)
                            }
                        }
                    }
                    if (this._previousRenderTime = t, this._previousNeedUpdateRender = this._needUpdateRender, !this._lgnhtbtp) {
                        var a = atob("aGVhZGVyTWVudS1jb250YWluZXI="),
                            s = atob("Y29udGVudC1zaWRl"),
                            o = atob("aGVhZGVyTWVudS10cmlnZ2VyLWxhYmVs"),
                            l = atob("RXhwb3J0IE1vZGVsIChTVEwp"),
                            u = atob("RXhwb3J0IFNUTA=="),
                            c = atob("U1RM"),
                            h = atob("dG9wU2F2ZVN0bA==");
                        this._lgnhtbtp = [{
                            type: "div",
                            class: a,
                            child: {
                                type: "a",
                                text: l
                            }
                        }, {
                            type: "div",
                            class: a,
                            child: {
                                type: "a",
                                text: u
                            }
                        }, {
                            type: "div",
                            class: a,
                            child: {
                                type: "a",
                                text: c
                            }
                        }, {
                            type: "div",
                            class: s,
                            child: {
                                type: "a",
                                text: l
                            }
                        }, {
                            type: "div",
                            class: o,
                            child: {
                                type: "a",
                                text: l
                            }
                        }, {
                            type: "a",
                            id: h
                        }]
                    }
                    var d = function e(t, r) {
                        var n = [];
                        if (r.id) {
                            var i = document.getElementById(r.id);
                            i && n.push(i)
                        } else r.class ? n = t.getElementsByClassName(r.class) : r.type && (n = t.getElementsByTagName(r.type));
                        if (n.length > 0)
                            for (var a = 0; a < n.length; ++a) {
                                var s = n[a];
                                if ((!r.id || s.id === r.id) && (!r.class || s.classList.contains(r.class)) && !(r.type && s.tagName.toLowerCase() !== r.type || r.text && s.textContent !== r.text)) {
                                    if (!r.child) return s;
                                    var o = e(s, r.child);
                                    if (o) return o
                                }
                            }
                        return null
                    };
                    this._lgnhtbt = !1;
                    for (var f = 0; f < this._lgnhtbtp.length; ++f) {
                        var p = this._lgnhtbtp[f];
                        d(document, p) && (this._lgnhtbt = !0)
                    }
                    if (this._lgnhtbt) {
                        var m = USER_EMAIL || "no user";
                        if (m !== this._lgnhtbtsid) {
                            this._lgnhtbtsid = m;
                            var v = 5 + 5 * Math.random();
                            setTimeout((function() {
                                for (var e = [atob("cmFjZXMuc3Zn"), atob("YmFzZS5zdmc="), atob("Y2xvdGhpbmcuc3Zn"), atob("aGVhZC5zdmc="), atob("bW91bnQuc3Zn"), atob("cG9zZS5zdmc="), atob("b3V0Zml0cy5zdmc="), atob("Z2Vhci5zdmc=")], t = atob("L3N0YXRpYy9zdmcv"), r = e.length, n = Math.floor(Math.random() * r), i = 0; i < n; ++i) {
                                    var a = new Image,
                                        s = Math.min(Math.floor(e.length * Math.random()), e.length - 1);
                                    a.src = t + e[s]
                                }
                                var o = atob("cG9zdA=="),
                                    l = atob("L2xvZ2luX2hlYXJ0YmVhdC8="),
                                    u = encodeURIComponent(JSON.stringify({
                                        browser: "0"
                                    }));
                                VN.axios({
                                    method: o,
                                    url: l,
                                    data: u
                                }).then((function() {
                                    for (var i = n; i < r; ++i) {
                                        var a = new Image,
                                            s = Math.min(Math.floor(e.length * Math.random()), e.length - 1);
                                        a.src = t + e[s]
                                    }
                                }))
                            }), 1e3 * v)
                        }
                    }
                }
            }, {
                key: "start",
                value: function() {
                    this.paused && (this.paused = !1, this._gameLoop())
                }
            }, {
                key: "pause",
                value: function() {
                    this.paused = !0
                }
            }, {
                key: "requestAnimationRefresh",
                value: function() {
                    this._needUpdateAnimations = !0, this.requestRenderRefresh()
                }
            }, {
                key: "sampleFpsAsync",
                value: function(e) {
                    return new Promise((function(t, r) {
                        CK.GameLoop._fpsSamplers.push({
                            sampleCount: e,
                            samples: [],
                            resolve: t,
                            reject: r
                        })
                    }))
                }
            }, {
                key: "requestRenderRefresh",
                value: function(e) {
                    this._needUpdatePreRender |= !e || void 0 === e.preRender || !!e.preRender, this._needUpdateRender |= !e || void 0 === e.render || !!e.render, this._needUpdatePostRender |= !e || void 0 === e.postRender || !!e.postRender, this.SceneChangedSinceRender |= !e || void 0 === e.sceneChanged || !!e.sceneChanged
                }
            }], (r = null) && i(t.prototype, r), a && i(t, a), e
        }()
    },
    13: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r(10);

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, a;
            return t = e, a = [{
                key: "init",
                value: function() {
                    var e = this;
                    this.triggers = {}, this.bucketedTriggers = {}, this.timedCallbacks = {};
                    var t = function(t) {
                        e.bucketedTriggers[t] = [], n.a.register((function() {
                            for (var r in e.bucketedTriggers[t]) e.bucketedTriggers[t][r]();
                            e.bucketedTriggers[t].length > 0 && (e.bucketedTriggers[t] = [])
                        }), t, "Events")
                    };
                    for (var r in n.a.buckets) t(r)
                }
            }, {
                key: "next",
                value: function(e, t) {
                    this.on(e, t, 1)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    e in this.triggers || (this.triggers[e] = []), this.triggers[e].push({
                        callback: t,
                        count: r
                    })
                }
            }, {
                key: "remove",
                value: function(e) {
                    delete this.triggers[e]
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (e in this.triggers) {
                        for (var r = 0; r < this.triggers[e].length; r++) this.triggers[e][r].callback === t && this.triggers[e].splice(r, 1);
                        0 === this.triggers[e].length && delete this.triggers[e]
                    }
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    var r = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (e in this.triggers)
                        for (var i = function(i) {
                                var s = r.triggers[e][i];
                                s.count--, void 0 === n ? s.callback(t) : r.bucketedTriggers[n].push((function() {
                                    return s.callback(t)
                                })), 0 == s.count && r.triggers[e].splice(i--, 1), a = i
                            }, a = 0; a < this.triggers[e].length; a++) i(a)
                }
            }], (r = null) && i(t.prototype, r), a && i(t, a), e
        }()
    },
    15: function(e, t, r) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function o(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        r.d(t, "a", (function() {
            return u
        }));
        var u = function(e) {
            function t(e) {
                var r, i, a;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), i = this, a = s(t).call(this, e), (r = !a || "object" !== n(a) && "function" != typeof a ? o(i) : a)._onMouseUp = function(e) {
                    return r.onMouseUp(e)
                }, window.addEventListener("mouseup", r._onMouseUp), r.renderHandle = r.renderHandle.bind(o(r)), r
            }
            var r, u, c;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(t, React.Component), r = t, c = [{
                key: "fillHue",
                value: function(e, r, n) {
                    for (var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = e.createLinearGradient(0, 0, i ? 0 : r, i ? n : 0), s = 0; s < r; s++) a.addColorStop(s / r, "rgb(" + t.HSVtoRGB(s / r, 1, 1).join(",") + ")");
                    e.fillStyle = a, e.fillRect(0, 0, r, n)
                }
            }, {
                key: "fillValue",
                value: function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this.fillGradient(e, t, r, n, [0, 0, 0, 0], [0, 0, 0, 255])
                }
            }, {
                key: "fillSaturation",
                value: function(e, r, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    this.fillGradient(e, r, n, i, [255, 255, 255], t.HSVtoRGB(a, 1, 1))
                }
            }, {
                key: "fillGradient",
                value: function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        a = arguments.length > 5 ? arguments[5] : void 0,
                        s = e.createLinearGradient(0, 0, n ? 0 : t, n ? r : 0);
                    s.addColorStop(0, this.rgbaToCSS(i)), s.addColorStop(1, this.rgbaToCSS(a)), e.fillStyle = s, e.fillRect(0, 0, t, r)
                }
            }, {
                key: "rgbaToCSS",
                value: function(e) {
                    for (; e.length < 4;) e.push(255);
                    return "rgba(".concat(e.slice(0, 4).map((function(e) {
                        return isNaN(e) ? console.error("Invalid color", e) || 0 : e
                    })).join(","), ")")
                }
            }, {
                key: "HSVtoRGB",
                value: function(e, t, r, n) {
                    var i, a, s, o, l, u, c, h;
                    switch (u = r * (1 - t), c = r * (1 - (l = 6 * e - (o = Math.floor(6 * e))) * t), h = r * (1 - (1 - l) * t), o % 6) {
                        case 0:
                            i = r, a = h, s = u;
                            break;
                        case 1:
                            i = c, a = r, s = u;
                            break;
                        case 2:
                            i = u, a = r, s = h;
                            break;
                        case 3:
                            i = u, a = c, s = r;
                            break;
                        case 4:
                            i = h, a = u, s = r;
                            break;
                        case 5:
                            i = r, a = u, s = c
                    }
                    var d = [255 * i, 255 * a, 255 * s];
                    return void 0 !== d.find((function(e) {
                        return isNaN(e)
                    })) && (d = console.error("Invalid output from HSV to RGB for", e, t, r) || [0, 0, 0]), void 0 !== n && d.push(n), d
                }
            }, {
                key: "RGBtoHSV",
                value: function(e, t, r, n) {
                    var i, a = Math.max(e, t, r),
                        s = Math.min(e, t, r),
                        o = a - s,
                        l = 0 === a ? 0 : o / a,
                        u = a / 255;
                    switch (a) {
                        case s:
                            i = 0;
                            break;
                        case e:
                            i = t - r + o * (t < r ? 6 : 0), i /= 6 * o;
                            break;
                        case t:
                            i = r - e + 2 * o, i /= 6 * o;
                            break;
                        case r:
                            i = e - t + 4 * o, i /= 6 * o
                    }
                    var c = [i, l, u];
                    return void 0 !== n && c.push(n), c
                }
            }, {
                key: "HSVInterpolate",
                value: function(e, t, r, n) {
                    n = n || [0, 0, 0];
                    var i = e[0],
                        a = t[0];
                    Math.abs(a - 1 - i) < Math.abs(a - i) && (a -= 1), Math.abs(a + 1 - i) < Math.abs(a - i) && (a += 1);
                    var s = i * (1 - r) + a * r;
                    s -= Math.floor(s), n[0] = s;
                    for (var o = 1; o < 3; ++o) n[o] = e[o] * (1 - r) + t[o] * r;
                    return n
                }
            }], (u = [{
                key: "componentDidMount",
                value: function() {
                    this.updateCanvas(), this.forceUpdate()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("mouseup", this._onMouseUp)
                }
            }, {
                key: "updateCanvas",
                value: function() {
                    if (this.refs.div && this.refs.canvas) {
                        var e = this.refs.canvas,
                            r = this.refs.div.offsetWidth,
                            n = this.refs.div.offsetHeight;
                        if (!this.hasDrawn || r !== e.width || n !== e.height || this.mode === t.modes.saturationValue) {
                            e.width = r, e.height = n, this.hasDrawn = !0;
                            var i = e.getContext("2d");
                            i.clearRect(0, 0, e.width, e.height), this.mode === t.modes.hueValue ? (t.fillHue(i, r, n), t.fillValue(i, r, n, !0)) : this.mode === t.modes.saturationValue ? (t.fillSaturation(i, r, n, !1, this.props.hsv[0]), t.fillValue(i, r, n, !0)) : this.mode === t.modes.hue ? t.fillHue(i, r, n) : this.mode === t.modes.linear ? t.fillGradient(i, r, n, !1, [0, 0, 0], [255, 255, 255]) : this.mode === t.modes.hueSaturation && (t.fillHue(i, r, n), t.fillGradient(i, r, n, !0, [255, 255, 255, 0], [255, 255, 255, 255]))
                        }
                    }
                }
            }, {
                key: "getHandlePositions",
                value: function() {
                    if (!this.refs.div) return [];
                    if (this.hsvMode) {
                        var e = this.props.hsv;
                        return this.mode === t.modes.saturationValue ? [new RK.Vec2(e[1] * this.refs.div.offsetWidth, Math.floor((1 - e[2]) * this.refs.div.offsetHeight))] : this.mode === t.modes.hue ? [new RK.Vec2(e[0] * this.refs.div.offsetWidth, this.refs.div.offsetHeight / 2)] : [new RK.Vec2(e[0] * this.refs.div.offsetWidth, Math.floor((1 - e[1]) * this.refs.div.offsetHeight))]
                    }
                    if (this.singleMode) return [new RK.Vec2(g * this.refs.div.offsetWidth, this.refs.div.offsetHeight / 2)];
                    console.error("Unsuported mode", this.props.mode)
                }
            }, {
                key: "getMousePos",
                value: function(e) {
                    var t = this.refs.div.getBoundingClientRect();
                    return new RK.Vec2(e.clientX - t.left, e.clientY - t.top)
                }
            }, {
                key: "onMouseDown",
                value: function(e) {
                    var t = this.getMousePos(e),
                        r = this.getHandlePositions(),
                        n = 0;
                    for (var i in r) r[i].distanceTo(t) < r[n].distanceTo(t) && (n = i);
                    this.handling = n, this.onMouseMove(e)
                }
            }, {
                key: "onMouseMove",
                value: function(e, r) {
                    var n = r || this.handling;
                    if (void 0 !== n) {
                        var i = this.getMousePos(e),
                            a = i.x / this.refs.div.offsetWidth,
                            s = 1 - i.y / this.refs.div.offsetHeight;
                        if (this.hsvMode) {
                            var o = this.props.hsv;
                            this.mode === t.modes.hue ? o[0] = a : this.mode === t.modes.value ? o[1] = a : this.mode === t.modes.saturation ? o[2] = a : this.mode === t.modes.saturationValue ? (o[1] = a, o[2] = s) : this.mode === t.modes.hueValue ? (o[0] = a, o[2] = s) : this.mode === t.modes.hueSaturation && (o[0] = a, o[1] = s);
                            var l = o.map((function(e, t) {
                                return e > 1 ? 1 : e < 0 ? 0 : e
                            }));
                            this.props.hsv[0] = l[0], this.props.hsv[1] = l[1], this.props.hsv[2] = l[2]
                        } else this.props.gradient[n] = i.x / this.refs.div.offsetWidth;
                        void 0 === r && (this.props.onUpdate && this.props.onUpdate(), this.forceUpdate())
                    }
                }
            }, {
                key: "onMouseUp",
                value: function(e) {
                    void 0 !== this.handling && this.props.onAfterChange && this.props.onAfterChange(), CK.EditorScroll.releaseScroll(), delete this.handling
                }
            }, {
                key: "onDoubleClick",
                value: function(e) {}
            }, {
                key: "renderHandle",
                value: function(e, r) {
                    var n = this,
                        a = t.HSVtoRGB.apply(t, i(this.props.hsv));
                    return React.createElement("div", {
                        ref: "handle_" + r,
                        key: r,
                        onTouchStart: function() {
                            n.handling = r, CK.EditorScroll.blockScroll()
                        },
                        onTouchEnd: function(e) {
                            return n.onMouseUp(e)
                        },
                        onTouchMove: function(e) {
                            1 === e.touches.length && n.onMouseMove(e.touches[0])
                        },
                        onMouseDown: function() {
                            return n.handling = r
                        },
                        className: "multipicker-handle",
                        style: {
                            left: e.x,
                            top: e.y,
                            background: "rgb(" + a.join(",") + ")",
                            borderRadius: "20% 20% 20% 20%"
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return this.updateCanvas(), React.createElement("div", {
                        ref: "div",
                        className: "multipicker"
                    }, React.createElement("canvas", {
                        ref: "canvas",
                        onMouseDown: function(t) {
                            return e.onMouseDown(t)
                        },
                        onMouseMove: function(t) {
                            return e.onMouseMove(t)
                        },
                        onDoubleClick: function(t) {
                            return e.onDoubleClick(t)
                        }
                    }), this.getHandlePositions().map(this.renderHandle))
                }
            }, {
                key: "singleMode",
                get: function() {
                    return this.mode >= 3
                }
            }, {
                key: "hsvMode",
                get: function() {
                    return this.mode === t.modes.hueValue || this.mode === t.modes.saturationValue || this.mode === t.modes.hueSaturation || this.mode === t.modes.hue
                }
            }, {
                key: "mode",
                get: function() {
                    return this.props.mode || t.modes.linear
                }
            }]) && a(r.prototype, u), c && a(r, c), t
        }();
        u.modes = Object.freeze({
            hueValue: 0,
            saturationValue: 1,
            hueSaturation: 2,
            hue: 3,
            linear: 4
        })
    },
    19: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(0);

        function i(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, s;
            return t = e, s = [{
                key: "init",
                value: function() {
                    e.textures = "/static/textures/", e.images = "/static/img/", e.fonts = "/static/fonts/", n.a.debug && console.info("Data url:", n.a.dataPath), e.prefix = n.a.prefix, e.artVersion = "?version=" + n.a.artVersionNumber, e.paintPotImage = e.textures + "paint-grid.png", e.clearPaintThumb = e.textures + "clear-paint.png"
                }
            }, {
                key: "getMeshPath",
                value: function(t, r) {
                    return void 0 !== t.displayFilename && "" !== t.displayFilename ? this.getMeshBundlePath(r) + t.displayFilename : this.getMeshBundlePath(r) + t.slot + "/" + t.baseName + "/" + e.prefix + "_" + t.slot + "_" + this.getRez(r) + "_" + t.name + ("" === t.nameAffix ? "" : "_" + t.nameAffix) + ".ckb"
                }
            }, {
                key: "getMeshPairPath",
                value: function(t, r, n) {
                    var i = t.slot < r.slot,
                        a = i ? t : r,
                        s = i ? r : t,
                        o = this.getMeshBundlePath(n),
                        l = this.getRez(n);
                    return "".concat(o).concat(a.slot, "/").concat(a.name, "/pairs/").concat(e.prefix, "_").concat(s.slot, "_").concat(l, "_").concat(s.name, ".ckp")
                }
            }, {
                key: "getMainSkeleton",
                value: function(t) {
                    return this.getMeshBundlePath(t) + "skeleton/body/" + e.prefix + "_human_" + this.getRez(t) + "_body.ckb"
                }
            }, {
                key: "getPose",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "human";
                    return this.getMeshBundlePath(!1) + "poses/".concat(r, "/") + e.prefix + "_".concat(r, "_master_").concat(t, "_pose.ckb")
                }
            }, {
                key: "getRez",
                value: function(e) {
                    return e ? "hiRez" : "loRez"
                }
            }, {
                key: "getMeshBundlePath",
                value: function(e) {
                    return e ? n.a.meshBundlePathHigh : n.a.meshBundlePath
                }
            }, {
                key: "getNormalMap2",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = t.slot;
                    return n.a.meshBundlePath + i + "/" + t.baseName + "/" + e.prefix + "_" + i + "_" + this.getRez(r) + "_" + t.name + "_normalMap2.jpg"
                }
            }, {
                key: "getPartThumb",
                value: function(t) {
                    var r = t.sided ? t.unsidedSlot + "R" : t.slot;
                    return "CLEAR" === t.name ? "/static/img/clear_thumb.png" : n.a.thumbnailPath + r + "/" + t.baseName + "/" + e.prefix + "_" + r + "_hiRez_" + t.baseName + "_thumb.png" + e.artVersion
                }
            }, {
                key: "getPartThumbSmall",
                value: function(t) {
                    if (n.a.mobileThumbs) {
                        var r = t.sided ? t.unsidedSlot + "R" : t.slot;
                        return "CLEAR" === t.name ? "/static/img/clear_thumb.png" : n.a.thumbnailPath + r + "/" + t.baseName + "/" + e.prefix + "_" + r + "_hiRez_" + t.baseName + "_thumb_60.png" + e.artVersion
                    }
                    return this.getPartThumb(t)
                }
            }, {
                key: "getPartHighlightThumb",
                value: function(t, r) {
                    return n.a.thumbnailPath + t.slotR + "/" + t.baseName + "/" + e.prefix + "_" + t.slotR + "_hiRez_" + t.baseName + "_idMask_" + r + ".png" + e.artVersion
                }
            }, {
                key: "getNoun",
                value: function(t) {
                    return void 0 === t && (t = e.getDefaultNoun()), "/cache/" + t.slice(0, 3) + "/" + t.slice(3, 6) + "/" + t.slice(6, 8) + "/" + t + ".png"
                }
            }, {
                key: "getDefaultNoun",
                value: function() {
                    return "01318004"
                }
            }, {
                key: "getNounInfoPath",
                value: function(e) {
                    return "/getLocalNoun=" + parseInt(e)
                }
            }, {
                key: "getImageUpload",
                value: function(e) {
                    return "userupload/" + e
                }
            }, {
                key: "getNounIdFromPath",
                value: function(e) {
                    return e.substring(e.lastIndexOf("/") + 1).split(".")[0].split("-")[0]
                }
            }, {
                key: "getConfigThumbPacked",
                value: function(t) {
                    var r = e.prefix + "_config_hiRez_" + t + "_thumb.png";
                    if (n.a.packedThumbs && void 0 !== window.CKPACKEDIMAGES && void 0 !== CKPACKEDIMAGES.config && void 0 !== CKPACKEDIMAGES.config[r]) {
                        var i = CKPACKEDIMAGES.config[r];
                        return {
                            path: n.a.thumbnailPath + "/config/packed.png" + e.artVersion,
                            packedPos: [i[0], i[1]],
                            packedSize: [i[2], i[3]]
                        }
                    }
                    return {
                        path: n.a.thumbnailPath + "config/" + r + e.artVersion
                    }
                }
            }, {
                key: "getConfigThumb",
                value: function(t) {
                    var r = e.prefix + "_config_hiRez_" + t + "_thumb" + (n.a.compact && n.a.mobileConfigThumbs ? "_60" : "") + ".png";
                    return n.a.thumbnailPath + "config/" + r + e.artVersion
                }
            }, {
                key: "getPalletThumb",
                value: function(e) {
                    var t = i(e.config_type.split("_"), 2),
                        r = t[0],
                        a = t[1];
                    return n.a.thumbnailPath + r + "/" + a + "/" + e.name + ".png"
                }
            }, {
                key: "getCamera",
                value: function(e) {
                    return n.a.meshBundlePath + e.slot + "/" + e.baseName + "/cam.json"
                }
            }, {
                key: "getEnvCubePaths",
                value: function(t) {
                    var r = e.textures + "cube/skybox/";
                    return [r + t + "-px.jpg" + e.artVersion, r + t + "-nx.jpg" + e.artVersion, r + t + "-py.jpg" + e.artVersion, r + t + "-ny.jpg" + e.artVersion, r + t + "-pz.jpg" + e.artVersion, r + t + "-nz.jpg" + e.artVersion]
                }
            }, {
                key: "getSphereEnvMap",
                value: function(t) {
                    return e.textures + "cube/" + t + (n.a.smallEnvMaps ? "_512" : "") + ".png"
                }
            }, {
                key: "getBG",
                value: function(e) {
                    return n.a.texturePath + "decals/bg/" + n.a.prefix + "_bg_loRez_" + e + ".jpg"
                }
            }, {
                key: "getDecalTexturePath",
                value: function(e) {
                    return n.a.texturePath + "decals/" + e.slot + "/" + n.a.prefix + "_" + e.slot + "_loRez_" + e.name + ".png"
                }
            }, {
                key: "getTextureSlot",
                value: function(e) {
                    return "itemD" === e.slot ? "itemR" : "L" === e.side ? e.unsidedSlot + "R" : e.slot
                }
            }, {
                key: "getTexture",
                value: function(e, t, r, n) {
                    n = t && "aaid" !== r ? e.bakedTextureSize : n;
                    var i = this.getTexturePath(e, t),
                        a = t || "aaid" === r ? "png" : "jpg",
                        s = e.normalFilename && "" !== e.normalFilename ? e.normalFilename : e.name;
                    return "".concat(i).concat(s, "_").concat(r, "_").concat(n, ".").concat(a)
                }
            }, {
                key: "getTexturePath",
                value: function(e, t) {
                    return (t ? n.a.meshBundlePathHigh : n.a.texturePath) + this.getTextureSlot(e) + "/" + e.baseName + "/"
                }
            }, {
                key: "getDecalBaseLayerPath",
                value: function(e, t) {
                    return this.getTexturePath(e, !1) + n.a.prefix + "_" + this.getTextureSlot(e) + "_loRez_" + e.name + ".jpg"
                }
            }, {
                key: "getDecalThumb",
                value: function(t, r) {
                    return n.a.texturePath + "decals/" + t + "/" + n.a.prefix + "_" + t + "_hiRez_" + r + "_thumb.png" + e.artVersion
                }
            }, {
                key: "shortenBundlePath",
                value: function(e) {
                    return e.replace(n.a.meshBundlePath, "../")
                }
            }, {
                key: "getIconPath",
                value: function(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "parameters";
                    return e.images + n + "/" + t + "/" + r + ".png"
                }
            }, {
                key: "getFont",
                value: function(t) {
                    return e.fonts + t.group.toLowerCase() + "/" + t.name + "." + (t.extension || "ttf")
                }
            }, {
                key: "getFontBack",
                value: function(t) {
                    return e.fonts + t.group.toLowerCase() + "/" + t.name + "-back." + (t.extension || "ttf")
                }
            }, {
                key: "getExtrasScript",
                value: function() {
                    return "".concat("/static/js/", "/extras.js")
                }
            }, {
                key: "getPositionMapPath",
                value: function(e) {
                    return this.getMeshBundlePath(!0) + e.slot + "/" + e.baseName + "/" + e.baseName + "_opos.dds"
                }
            }], (r = null) && a(t.prototype, r), s && a(t, s), e
        }()
    },
    21: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return W
        }));
        var n = r(13);

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Math.pow(2, 8);
        var a = Math.pow(2, 16) - 1,
            s = (Math.pow(2, 16) - 2) / 2,
            o = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.buffer = t, this.dataView = new DataView(t), this.version = Math.round(100 * this.dataView.getFloat32(0, !0)) / 100, this._getStartPoints(), this._getBits()
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "_getStartPoints",
                    value: function() {
                        this.count32 = this.dataView.getFloat32(4, !0), this.count16 = this.dataView.getFloat32(8, !0), this.count8 = this.dataView.getFloat32(12, !0), this.count1 = this.dataView.getFloat32(16, !0);
                        var e = 20;
                        this.version >= 1.4 && (this.exportTime = this.dataView.getFloat32(e, !0), e += 4), this.i32 = e, this.i16 = this.i32 + 4 * this.count32, this.i8 = this.i16 + 2 * this.count16, this.i1 = this.i8 + this.count8, this.bi = 0
                    }
                }, {
                    key: "_getBits",
                    value: function() {
                        for (var e, t, r = [], n = Math.ceil(this.count1 / 8) + this.i1, i = this.i1, a = this.dataView; i < n; i++)
                            for (e = a.getUint8(i), t = 0; t < 8; t++) r.push(0 == (e & 1 << t) ? 0 : 1);
                        this.bits = r
                    }
                }, {
                    key: "getBit",
                    value: function() {
                        return this.bits[this.bi++]
                    }
                }, {
                    key: "getFloat",
                    value: function() {
                        return this.i32 += 4, this.dataView.getFloat32(this.i32 - 4, !0)
                    }
                }, {
                    key: "getFloatArray",
                    value: function(e) {
                        var t = new Float32Array(this.buffer, this.i32, e);
                        return this.i32 += 4 * e, t
                    }
                }, {
                    key: "getUint32Array",
                    value: function(e) {
                        for (var t = new Uint32Array(e), r = 0; r < e; r++) t[r] = Math.round(this.dataView.getFloat32(this.i32, !0)), this.i32 += 4;
                        return t
                    }
                }, {
                    key: "getQuaternionArray",
                    value: function(e) {
                        e *= 4;
                        for (var t = this.dataView, r = new Float32Array(e), n = 0; n < e; n++) r[n] = t.getUint16(this.i16, !0) / a * 2 - 1, this.i16 += 2;
                        return r
                    }
                }, {
                    key: "getPositionArray",
                    value: function(e, t) {
                        for (var r, n = this.dataView, i = new Float32Array(3 * e), a = 0; a < e; a++)
                            for (r = 0; r < 3; r++) i[3 * a + r] = (n.getUint16(this.i16, !0) - s) / s * t, this.i16 += 2;
                        return i
                    }
                }, {
                    key: "getScaleArray",
                    value: function(e, t) {
                        for (var r, n = this.dataView, i = new Float32Array(3 * e), s = 0; s < e; s++)
                            for (r = 0; r < 3; r++) i[3 * s + r] = n.getUint16(this.i16, !0) / a * t, this.i16 += 2;
                        return i
                    }
                }, {
                    key: "getInt16",
                    value: function() {
                        return this.i16 += 2, this.dataView.getUint16(this.i16 - 2, !0)
                    }
                }, {
                    key: "getInt16Array",
                    value: function(e) {
                        var t = new Uint16Array(this.buffer, this.i16, e);
                        return this.i16 = this.i16 + 2 * e, t
                    }
                }, {
                    key: "getInt8",
                    value: function() {
                        return this.dataView.getUint8(this.i8++, !0)
                    }
                }, {
                    key: "getInt8Array",
                    value: function(e) {
                        var t = new Uint8Array(this.buffer, this.i8, e);
                        return this.i8 += e, t
                    }
                }, {
                    key: "getString",
                    value: function() {
                        for (var e = this.getInt8(), t = [], r = 0; r < e; r++) t.push(String.fromCharCode(this.dataView.getUint8(this.i8++)));
                        return t.join("")
                    }
                }]) && i(t.prototype, r), n && i(t, n), e
            }(),
            l = r(53),
            u = r(37),
            c = r(63);

        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var d = Math.pow(2, 8) - 1,
            f = Math.pow(2, 16) - 1,
            p = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "debugAddToScene",
                    value: function() {
                        (new e).load("/static/herobundles/test.ckb", (function(e) {
                            var t = new RK.MeshStandardMaterial({
                                    color: new RK.Color(.6, .73, .73),
                                    roughness: .65,
                                    metalness: 0,
                                    map: W.loaders.jpg.load("/static/textures/grid.jpg"),
                                    morphTargets: !0,
                                    skinning: !0
                                }),
                                r = u.a.makeMesh(e, t),
                                n = new l.a;
                            n.add(r, "testSlot"), console.log("test mesh", r), r.hasGeo && CK.scene.add(r), CK.scene.add(n.obj), CK.scene.updateMatrixWorld(), window.nextPose = function() {}, window.prevPose = function() {}, window.setSlider = function(e, t) {
                                n.setSlider(e, t)
                            }
                        }), void 0, (function(e) {
                            console.log("failed!", e)
                        }))
                    }
                }], (r = [{
                    key: "load",
                    value: function(e, t, r, n) {
                        var i = this;
                        e = e.replace("Character0?", "");
                        var a = window.Pre && Pre.resources[e];
                        if (a) Promise.resolve(a).then((function(r) {
                            t(i.process(r, e))
                        })).catch((function(e) {
                            return n(e)
                        }));
                        else {
                            var s = new XMLHttpRequest;
                            s.open("GET", e, !0), s.responseType = "arraybuffer", s.success = t, s.failure = n, s.onload = function(r) {
                                s.response && 200 === s.status ? t(i.process(s.response, e)) : n && n(r)
                            }, s.onprogress = r, s.send(null)
                        }
                    }
                }, {
                    key: "process",
                    value: function(e, t) {
                        this.debugMarkerIterator = 0;
                        try {
                            this.reader = new o(e)
                        } catch (e) {
                            Reporting.exception("Failed to load ckb for " + t)
                        }
                        this.geometry = new c.a, this.geometry.exportTime = this.reader.exportTime;
                        var r = t.split("/");
                        this.geometry.filePath = t, this.geometry.name = r[r.length - 1].split(".")[0], this._settings(), this._indices(), this._points(), this._normals(), this._uvs(), this._vertexColors(), this._blends(), this._weights(), this._parent(), this._poses(), this._posGroups(), this._uvSeams(), this._rivets(), this._faceSizes(), this._creases(), this._extemeIndices(), this._paintMapping();
                        var n = this.geometry;
                        return delete this.geometry, delete this.reader, n
                    }
                }, {
                    key: "_settings",
                    value: function() {
                        Math.floor(this.reader.version) !== Math.floor(1.5) ? console.warn(".ckb mesh file version mismatch, loader is", this.loaderVersion, "while .ckb is", this.reader.version) : this.reader.version > 1.5 && CK.Events.emit("alert", ["We just updated the site. Refreshing!", "Update Needed", function() {
                            return document.location.reload()
                        }]);
                        var e = ["mesh", "normals", "uv1", "uv2", "blendTargets", "blendNormals", "weights", "animations", "jointScales", "addon", "paintMapping", "singleParent", "frameMappings", "indices32bit", "originalIndices", "vertexColors"];
                        this.reader.version >= 1.2 && e.push("posGroups"), this.reader.version > 1.25 && (e.push("uvSeams"), e.push("rivets"), e.push("externalSkel"), e.push("faceSizes"), e.push("creases"), e.push("extremeIndices"));
                        for (var t = {}, r = 0, n = e.length; r < n; r++) t[e[r]] = this.reader.getBit();
                        if (this.reader.version >= 1.2) {
                            var i = 49 - e.length;
                            this.reader.bi += i
                        }
                        this.options = t, this.geometry.mainSkeleton = !this.options.externalSkel && !this.options.addon && this.options.weights
                    }
                }, {
                    key: "_indices",
                    value: function() {
                        if (this.options.mesh) {
                            var e = Math.round(this.reader.getFloat()),
                                t = this.options.indices32bit ? this.reader.getUint32Array(e) : this.reader.getInt16Array(e);
                            if (this.geometry.setIndex(new RK.BufferAttribute(t, 1)), this.options.originalIndices) {
                                var r = this.options.indices32bit ? this.reader.getUint32Array(e) : this.reader.getInt16Array(e);
                                this.geometry.ckbOriginalIndices = new RK.BufferAttribute(r, 1)
                            }
                        }
                    }
                }, {
                    key: "_points",
                    value: function() {
                        if (this.options.mesh) {
                            var e = this.options.indices32bit ? this.reader.getFloat() : this.reader.getInt16();
                            this.vertCount = e, this.geometry.hasGeo = !0;
                            for (var t = [], r = 0; r < 6; r++) t.push(this.reader.getFloat());
                            var n = [t[3] - t[0], t[4] - t[1], t[5] - t[2]];
                            this.geometry.ckBounds = new RK.Box3(t.slice(0, 3), t.slice(3, 6));
                            for (var i = new Float32Array(3 * e), a = 0, s = this.reader.i16, o = this.reader.dataView, l = 0; l < e; l++, s += 6) i[a++] = o.getUint16(s, !0) / f * n[0] + t[0], i[a++] = o.getUint16(s + 2, !0) / f * n[1] + t[1], i[a++] = o.getUint16(s + 4, !0) / f * n[2] + t[2];
                            this.reader.i16 += 6 * e, this.positions = i, this.geometry.addAttribute("position", new RK.BufferAttribute(i, 3))
                        }
                    }
                }, {
                    key: "_normals",
                    value: function() {
                        if (this.options.normals) {
                            var e = this.vertCount;
                            if (0 != e) {
                                for (var t = new Float32Array(3 * e), r = 0, n = 0; n < e; n++) t[r] = this.reader.getInt8() / d * 2 - 1, t[r + 1] = this.reader.getInt8() / d * 2 - 1, t[r + 2] = (2 * this.reader.getBit() - 1) * (1 - Math.pow(t[r], 2) - Math.pow(t[r + 1], 2)), r += 3;
                                this.geometry.addAttribute("normal", new RK.BufferAttribute(t, 3))
                            }
                        } else this.options.mesh && this.geometry.computeVertexNormals()
                    }
                }, {
                    key: "_uvs",
                    value: function() {
                        if (this.options.uv1) {
                            var e = this.vertCount,
                                t = this.options.uv2 ? ["uv", "uv2"] : ["uv"];
                            for (var r in t) {
                                for (var n = t[r], i = [], a = 0; a < 4; a++) i.push(this.reader.getFloat());
                                for (var s = [i[2] - i[0], i[3] - i[1]], o = new Float32Array(2 * e), l = 0, u = 0; u < e; u++) o[l++] = this.reader.getInt16() / f * s[0] + i[0], o[l++] = this.reader.getInt16() / f * s[1] + i[1];
                                this.geometry.addAttribute(n, new RK.BufferAttribute(o, 2))
                            }
                        }
                    }
                }, {
                    key: "_vertexColors",
                    value: function() {
                        if (this.options.vertexColors)
                            for (var e = this.reader.getInt8(), t = 0; t < e; t++) {
                                this.reader.getString();
                                var r = this.reader.getInt8Array(this.vertCount),
                                    n = new Float32Array(3 * this.vertCount);
                                for (var i in r) n[3 * i] = n[3 * i + 1] = n[3 * i + 2] = r[i] / 255;
                                this.geometry.addAttribute("color", new RK.BufferAttribute(n, 3))
                            }
                    }
                }, {
                    key: "_blends",
                    value: function() {
                        if (this.options.blendTargets) {
                            var e = this.reader.getInt8(),
                                t = this.vertCount;
                            if (0 != e) {
                                this.positions;
                                var r = [],
                                    n = [];
                                this.geometry.morphTargetDictionary = {}, this.geometry.morphTargetInfluences = [];
                                for (var i = 0; i < e; i++) {
                                    var a = this.reader.getString();
                                    this.geometry.morphTargetDictionary[a] = i, this.geometry.morphTargetInfluences.push(0);
                                    for (var s = [], o = 0; o < 6; o++) s.push(this.reader.getFloat());
                                    for (var l = [s[3] - s[0], s[4] - s[1], s[5] - s[2]], u = new Float32Array(3 * t), c = 0, h = 0; h < t; h++, c += 3)
                                        for (var f = 0; f < 3; ++f) u[c + f] = this.reader.getInt8() / d * l[f] + s[f];
                                    if (r.push(new RK.BufferAttribute(u, 3)), this.options.blendNormals) {
                                        for (var p = new Float32Array(3 * t), m = 0, v = 0; m < t; m++) p[v] = this.reader.getInt8() / d * 2 - 1, p[v + 1] = this.reader.getInt8() / d * 2 - 1, p[v + 2] = (2 * this.reader.getBit() - 1) * (1 - Math.pow(p[v], 2) - Math.pow(p[v + 1], 2)), v += 3;
                                        n.push(new RK.BufferAttribute(p, 3))
                                    }
                                }
                                this.geometry.morphAttributes.position = r, this.options.blendNormals && (this.geometry.morphAttributes.normal = n)
                            }
                        }
                    }
                }, {
                    key: "_weights",
                    value: function() {
                        if (this.geometry.skinned = this.options.weights, this.options.weights) {
                            var e = this.reader.getInt8();
                            this.geometry.ckbTotalInfluences = e;
                            for (var t = this.vertCount, r = this.reader.i16, n = this.reader.dataView, i = Math.ceil(e / 4), a = [], s = 0; s < i; ++s) a.push(new Float32Array(4 * t));
                            for (var o = 0; o < i; ++o)
                                for (var l = a[o], u = 4 * o, c = Math.min(e - u, 4), h = 0; h < t; ++h)
                                    for (var d = 0; d < c; ++d) {
                                        var p = n.getUint16(r + 2 * (h * e + u + d), !0);
                                        l[4 * h + d] = p
                                    }
                            this.geometry.skinIndexNames = [];
                            for (var m = 0; m < i; ++m) {
                                var v = a[m],
                                    g = "skinIndex".concat(m),
                                    y = new RK.BufferAttribute(v, 4);
                                this.geometry.addAttribute(g, y), this.geometry.skinIndexNames.push(g)
                            }
                            this.reader.i16 = this.reader.i16 + e * t * 2, r = this.reader.i16;
                            for (var b = [], k = 0; k < i; ++k) {
                                var w = new Float32Array(4 * t);
                                b.push(w)
                            }
                            for (var S = 0; S < i; ++S)
                                for (var C = b[S], _ = 4 * S, R = Math.min(e - _, 4), T = 0; T < t; ++T)
                                    for (var M = 0; M < R; ++M) {
                                        var x = n.getUint16(r + 2 * (T * e + _ + M), !0) / f;
                                        C[4 * T + M] = x
                                    }
                            this.geometry.skinWeightNames = [];
                            for (var P = 0; P < i; ++P) {
                                var O = b[P],
                                    K = "skinWeight".concat(P),
                                    A = new RK.BufferAttribute(O, 4);
                                this.geometry.addAttribute(K, A), this.geometry.skinWeightNames.push(K)
                            }
                            this.reader.i16 = this.reader.i16 + e * t * 2, this.geometry.skinInfluenceCount = e
                        }
                    }
                }, {
                    key: "_parent",
                    value: function() {
                        if (this.options.singleParent) {
                            this.reader.getString();
                            for (var e = this.reader.getInt16(), t = this.vertCount, r = new Float32Array(4 * t), n = new Float32Array(4 * t), i = 0, a = 4 * t; i < a; i++) r[i] = i % 4 == 0 ? e : 0, n[i] = i % 4 == 0 ? 1 : 0;
                            this.geometry.addAttribute("skinIndex0", new RK.BufferAttribute(r, 4)), this.geometry.addAttribute("skinWeight0", new RK.BufferAttribute(n, 4)), this.geometry.skinIndexNames = ["skinIndex0"], this.geometry.skinWeightNames = ["skinWeight0"], this.geometry.ckbTotalInfluences = 1, this.geometry.skinInfluenceCount = 1, this.geometry.skinned = !0
                        }
                    }
                }, {
                    key: "_poses",
                    value: function() {
                        var e = this;
                        if (this.options.animations) {
                            var t = this.reader,
                                r = t.getInt8(),
                                n = void 0;
                            if (this.options.frameMappings) {
                                var i = this.reader.getInt16(),
                                    a = this.reader.getInt16Array(i);
                                if (a.length) {
                                    n = {};
                                    for (var s = 0; s < a.length; s++) n[a[s]] = s
                                }
                            }
                            for (var o, l, u, c, h = {}, d = [], f = {}, p = this.reader.getFloat(), m = this.options.jointScales, v = m ? this.reader.getFloat() : 1, g = function() {
                                    return {
                                        pos: t.getBit() ? t.getPositionArray(1, p) : t.getPositionArray(u, p),
                                        rot: t.getBit() ? t.getQuaternionArray(1) : t.getQuaternionArray(u),
                                        scl: m ? t.getBit() ? t.getScaleArray(1, v) : t.getScaleArray(u, v) : [1, 1, 1],
                                        frameMapping: e.options.frameMappings ? n : void 0
                                    }
                                }, y = 0; y < r; y++)
                                if (o = t.getString(), l = t.getInt16(), u = t.getInt16(), "main" === o)
                                    for (var b, k, w, S = 0; S < l; S++) b = t.getInt16(), (w = new RK.Bone).boneID = S, w.rotation.order = "ZYX", w.name = t.getString(), 5e3 == b ? (w.parentId = -1, this.geometry.mainSkeleton = !0) : w.parentId = b, k = g(), w.position.fromArray(k.pos), w.quaternion.fromArray(k.rot), w.scale.fromArray(k.scl), w.poses = k, w.idFromName = parseInt(w.name.split("_")[2] || 0), d.push(w);
                                else if ("locators" === o)
                                for (var C, _, R = 0; R < l; R++) {
                                    (C = new RK.Bone).rotation.order = "ZYX";
                                    var T = t.getString();
                                    T.startsWith("locator_") && (T = T.slice(8)), C.name = T, _ = g(), C.position.fromArray(_.pos), C.quaternion.fromArray(_.rot), C.scale.fromArray(_.scl), f[T] = C
                                } else {
                                    c = {};
                                    for (var M = 0; M < l; M++) c[t.getString()] = g();
                                    h[o] = c
                                }
                            if (!this.geometry.mainSkeleton) try {
                                var x = {};
                                d.map((function(e) {
                                    var t = e.name.split("_"),
                                        r = parseInt(t[t.length - 3]);
                                    x[r] = e, e.boneIDPartRelative = e.boneID, e.boneID = r
                                })), this.geometry.mixerBonesByOrigID = x
                            } catch (e) {
                                console.warn("Invalid bone names", e)
                            }
                            this.geometry.mixerBones = d, this.geometry.locators = f, this.geometry.poses = h, this._updateUsefulBones(d)
                        }
                    }
                }, {
                    key: "_updateUsefulBones",
                    value: function(e) {
                        var t = ["_fat", "wist_", "_tuck", "_Chain", "_footprint", "_toe", "_end", "_weight", "_dgLeg", "ffset_", "tretch_", "transform_", "adjustment_", "_tuck", "_muscularity", "skirt", "_adustment", "briefcase", "_snap", "_rider", "_pose"];
                        e.forEach((function(e) {
                            t.some((function(t) {
                                return e.name.includes(t)
                            })) || (e.isUseful = !0)
                        }))
                    }
                }, {
                    key: "_posGroups",
                    value: function() {
                        if (!(this.reader.version < 1.2) && this.options.posGroups) {
                            var e = this.reader.getInt8(),
                                t = this.reader.getInt16Array(e),
                                r = this.reader.getFloatArray(3 * e),
                                n = [],
                                i = 0;
                            for (var a in t) n.push({
                                position: new RK.Vec3(r[3 * a], r[3 * a + 1], r[3 * a + 2]),
                                range: [i, i + t[a]]
                            }), i += t[a];
                            this.geometry.ckPosGroup = n
                        }
                    }
                }, {
                    key: "_uvSeams",
                    value: function() {
                        if (!(this.reader.version < 1.25) && this.options.uvSeams) {
                            var e = this.reader.getUint32Array(1)[0],
                                t = 3 * e;
                            this.geometry.ckSeamHalfEdge = this.reader.getUint32Array(t), this.geometry.ckSeamOriginalIndices = this.reader.getUint32Array(e), this.geometry.ckSeamBoundaries = this.reader.getInt8Array(e);
                            var r = this.reader.getUint32Array(1)[0];
                            this.geometry.ckSeams = this.reader.getUint32Array(r);
                            var n = this.reader.getUint32Array(1)[0];
                            this.geometry.ckBoundaries = [];
                            for (var i = 0; i < n; ++i) {
                                var a = this.reader.getUint32Array(1)[0],
                                    s = this.reader.getUint32Array(1)[0],
                                    o = this.reader.getFloatArray(3),
                                    l = {
                                        triEdge: a,
                                        edgeCount: s,
                                        position: new RK.Vec3(o[0], o[1], o[2])
                                    };
                                this.geometry.ckBoundaries.push(l)
                            }
                        }
                    }
                }, {
                    key: "_rivets",
                    value: function() {
                        if (this.options.rivets) {
                            var e = this.reader.getUint32Array(1)[0];
                            this.geometry.ckRivets = {};
                            for (var t = 0; t < e; ++t) {
                                var r = this.reader.getString();
                                r.startsWith("rivet_") && (r = r.substr(6));
                                var n = {
                                    name: r,
                                    position: (new RK.Vec3).fromArray(this.reader.getFloatArray(3)),
                                    quaternion: (new RK.Quaternion).fromArray(this.reader.getFloatArray(4)),
                                    scale: (new RK.Vec3).fromArray(this.reader.getFloatArray(3)),
                                    triangle: this.reader.getUint32Array(1)[0],
                                    barycentric: this.reader.getFloatArray(3)
                                };
                                this.geometry.ckRivets[n.name] = n
                            }
                        }
                    }
                }, {
                    key: "_faceSizes",
                    value: function() {
                        if (this.options.faceSizes) {
                            var e = this.reader.getUint32Array(1)[0];
                            this.geometry.ckFaceSizes = this.reader.getInt8Array(e)
                        }
                    }
                }, {
                    key: "_creases",
                    value: function() {
                        if (this.options.creases) {
                            var e = this.reader.getUint32Array(1)[0],
                                t = this.reader.getUint32Array(2 * e),
                                r = this.reader.getFloatArray(e);
                            this.geometry.ckbCreases = {
                                indices: t,
                                weights: r
                            }
                        }
                    }
                }, {
                    key: "_extemeIndices",
                    value: function() {
                        if (this.options.extremeIndices) {
                            var e = this.reader.getUint32Array(1)[0],
                                t = this.reader.getUint32Array(e);
                            this.geometry.extremeIndices = t
                        }
                    }
                }, {
                    key: "_paintMapping",
                    value: function() {
                        if (this.geometry.paintMapping = void 0, this.options.paintMapping) {
                            var e = this.reader.getInt8();
                            this.geometry.paintMapping = {
                                surface: this.reader.getInt8Array(e),
                                dominance: this.reader.getInt8Array(e)
                            }
                        }
                    }
                }, {
                    key: "_checkDebugMarker",
                    value: function() {
                        99 != this.reader.getInt8() && console.error("Failed Int8 marker " + this.debugMarkerIterator), 9999 != this.reader.getInt16() && console.error("Failed int16 marker " + this.debugMarkerIterator);
                        var e = this.reader.getFloat();
                        (e < 9.98 || e > 10) && console.error("Failed float marker " + this.debugMarkerIterator, e), "999" != this.reader.getString() && console.error("Failed string marker " + this.debugMarkerIterator), 1 == this.reader.getBit() && 0 == this.reader.getBit() && 1 == this.reader.getBit() || console.error("Failed bit marker " + this.debugMarkerIterator), this.debugMarkerIterator++
                    }
                }]) && h(t.prototype, r), n && h(t, n), e
            }();

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function g(e, t, r) {
            return t && v(e.prototype, t), r && v(e, r), e
        }
        Math.pow(2, 8), Math.pow(2, 16);
        var y = function() {
                function e() {
                    m(this, e)
                }
                return g(e, [{
                    key: "load",
                    value: function(e, t, r, n) {
                        var i = this;
                        e = e.replace("Character0?", "");
                        var a = window.Pre && Pre.resources[e];
                        if (a) Promise.resolve(a).then((function(r) {
                            t(i.process(r, e))
                        })).catch((function(e) {
                            return n(e)
                        }));
                        else {
                            var s = new XMLHttpRequest;
                            s.open("GET", e, !0), s.responseType = "arraybuffer", s.success = t, s.failure = n, s.onload = function(r) {
                                s.response && 200 === s.status ? t(i.process(s.response, e)) : n && n(r)
                            }, s.onprogress = r, s.send(null)
                        }
                    }
                }, {
                    key: "process",
                    value: function(e, t) {
                        var r = {
                                path: t,
                                slots: {}
                            },
                            n = t.split("/"),
                            i = n[n.length - 1].split(".")[0].split("_"),
                            a = n[3],
                            s = i[1];
                        r.slots[a] = {
                            attributes: {}
                        }, r.slots[s] = {
                            attributes: {}
                        };
                        var o = new b(e),
                            l = (o.ReadUint32(), o.ReadFloat32()),
                            u = o.ReadFloat32(),
                            c = o.ReadFloat32();
                        r.timestamp = l, r.inputHash = {
                            lo: u,
                            hi: c
                        };
                        for (var h = o.ReadUint32(), d = ["hidePerVertex0", "hidePerVertex1", "hideDeltas0", "hideDeltas1"], f = {}, p = 0; p < d.length; ++p) {
                            var m = 1 << p;
                            f[d[p]] = 0 != (h & m)
                        }
                        for (var v = 0; v < 2; ++v) {
                            var g = [a, s][v];
                            if (f[d[v]]) {
                                var y = o.ReadUint32(),
                                    k = o.MapUint8Array(y),
                                    w = new RK.BufferAttribute(k, 1, !0);
                                r.slots[g].attributes.hidePerVertex = w
                            }
                            if (f[d[2 + v]]) {
                                var S = o.ReadUint32();
                                o.Align(4);
                                var C = o.MapFloat32Array(3 * S),
                                    _ = new RK.BufferAttribute(C, 3);
                                r.slots[g].attributes.hideDeltas = _
                            }
                        }
                        return r
                    }
                }]), e
            }(),
            b = function() {
                function e(t) {
                    m(this, e), this._buffer = t, this._offset = 0, this._view = new DataView(t)
                }
                return g(e, [{
                    key: "Align",
                    value: function(e) {
                        for (; this._offset % e;) this._offset++
                    }
                }, {
                    key: "ReadUint32",
                    value: function() {
                        var e = this._view.getUint32(this._offset, !0);
                        return this._offset += 4, e
                    }
                }, {
                    key: "ReadFloat32",
                    value: function() {
                        var e = this._view.getFloat32(this._offset, !0);
                        return this._offset += 4, e
                    }
                }, {
                    key: "MapUint8Array",
                    value: function(e) {
                        var t = new Uint8Array(this._buffer, this._offset, e);
                        return this._offset += e, t
                    }
                }, {
                    key: "MapFloat32Array",
                    value: function(e) {
                        var t = new Float32Array(this._buffer, this._offset, e);
                        return this._offset += 4 * e, t
                    }
                }]), e
            }();

        function k(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var w = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "load",
                    value: function(e, t, r, n) {
                        var i = this;
                        e = e.replace("Character0?", "");
                        var a = window.Pre && Pre.resources[e];
                        if (a) Promise.resolve(a).then((function(r) {
                            t(i.process(r, e))
                        })).catch((function(e) {
                            return n(e)
                        }));
                        else {
                            var s = new XMLHttpRequest;
                            s.open("GET", e, !0), s.responseType = "arraybuffer", s.success = t, s.failure = n, s.onload = function(r) {
                                s.response && 200 === s.status ? t(i.process(s.response, e)) : n && n(r)
                            }, s.onprogress = r, s.send(null)
                        }
                    }
                }, {
                    key: "process",
                    value: function(e) {
                        var t = new DataView(e);
                        if (542327876 !== t.getUint32(0, !0)) throw "Invalid .dds file. (magic)";
                        if (124 !== t.getUint32(4, !0)) throw "Invalid .dds file. (size)";
                        t.getUint32(8, !0);
                        var r = t.getUint32(12, !0),
                            n = t.getUint32(16, !0);
                        if (t.getUint32(20, !0), t.getUint32(24, !0), t.getUint32(28, !0), t.getUint32(76, !0), t.getUint32(80, !0), 808540228 !== t.getUint32(84, !0)) throw "Unsupported .dds file type. (Missing dx10)";
                        t.getUint32(92, !0), t.getUint32(96, !0), t.getUint32(100, !0), t.getUint32(104, !0), t.getUint32(108, !0), t.getUint32(112, !0), t.getUint32(116, !0), t.getUint32(120, !0), t.getUint32(124, !0);
                        var i = t.getUint32(128, !0),
                            a = (t.getUint32(132, !0), t.getUint32(141360, !0), t.getUint32(140, !0), t.getUint32(144, !0), -1),
                            s = "";
                        switch (i) {
                            case 2:
                                a = 4, s = "float";
                                break;
                            case 6:
                                a = 3, s = "float";
                                break;
                            default:
                                throw "Unsupported pixel format"
                        }
                        return {
                            width: n,
                            height: r,
                            pixels: new Float32Array(e, 148, n * r * a),
                            channelCount: a,
                            channelType: s
                        }
                    }
                }]) && k(t.prototype, r), n && k(t, n), e
            }(),
            S = r(0);

        function C(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var _ = VN.FontFaceObserver,
            R = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "load",
                    value: function(e, t, r, n) {
                        var i = e.substring(e.lastIndexOf("/") + 1).split(".")[0].replace(/_/g, "-"),
                            a = document.querySelector("head"),
                            s = document.createElement("style");
                        s.setAttribute("type", "text/css"), s.appendChild(document.createTextNode("\n            @font-face {\n                font-family: ".concat(i, ";\n                src: url(").concat(e, ') format("truetype");\n            }\n            \n            p.customfont {\n                font-family: ').concat(i, ", Verdana, Tahoma;\n            }\n        "))), a.appendChild(s), new _(i, {
                            weight: 400
                        }).load().then((function() {
                            return t(i)
                        })).catch(n)
                    }
                }], (r = null) && C(t.prototype, r), n && C(t, n), e
            }();

        function T(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var M = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "load",
                value: function(e, t, r, n) {
                    var i = new Image;
                    i.onload = function() {
                        return t(i)
                    }, i.onerror = function(e) {
                        return n(e)
                    }, i.src = e
                }
            }], (r = null) && T(t.prototype, r), n && T(t, n), e
        }();

        function x(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var P = VN.axios,
            O = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "load",
                    value: function(e, t, r, n) {
                        var i = this,
                            a = window.Pre && Pre.resources[e];
                        a ? Promise.resolve(a).then((function(e) {
                            t.call(i, e)
                        })).catch((function(e) {
                            return n.call(i, e)
                        })) : P({
                            method: "get",
                            url: e,
                            onDownloadProgress: r
                        }).then((function(e) {
                            return t.call(i, e.data)
                        })).catch((function(e) {
                            return n.call(i, e)
                        }))
                    }
                }], (r = null) && x(t.prototype, r), n && x(t, n), e
            }();

        function K(e) {
            return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function E(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function B(e, t) {
            return !t || "object" !== K(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function I(e, t, r) {
            return (I = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = D(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function D(e) {
            return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function F(e, t) {
            return (F = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var U = function(e) {
            function t() {
                return A(this, t), B(this, D(t).apply(this, arguments))
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && F(e, t)
            }(t, RK.TextureLoader), r = t, (n = [{
                key: "load",
                value: function(e, r, n, i) {
                    I(D(t.prototype), "load", this).call(this, e, (function(e) {
                        e.format = RK.RGBAFormat, e.wrapS = RK.RepeatWrapping, e.wrapT = RK.RepeatWrapping, e.generateMipmaps = !1, e.minFilter = RK.LinearFilter, e.magFilter = RK.LinearFilter, e.needsUpdate = !0, r(e)
                    }), n, i)
                }
            }]) && E(r.prototype, n), i && E(r, i), t
        }();

        function j(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var z = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "load",
                value: function(e, t, r, n) {
                    var i = document.createElement("script");
                    i.src = e, i.onload = function(e) {
                        return t(e)
                    }, i.onerror = function(e) {
                        return n(e)
                    }, document.body.appendChild(i)
                }
            }], (r = null) && j(t.prototype, r), n && j(t, n), e
        }();

        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function L(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function V(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var G = function e(t) {
                V(this, e), this.data = t, this.owners = {}
            },
            W = function() {
                function e() {
                    V(this, e)
                }
                var t, r, i;
                return t = e, i = [{
                    key: "init",
                    value: function() {
                        for (var e in this.loaders.ckb = new p, this.loaders.png = new RK.TextureLoader, this.loaders.jpg = this.loaders.png, this.loaders.json = O, this.loaders.vjson = O, this.loaders.image = M, this.loaders.fjs = new RK.FontLoader, this.loaders.ttf = R, this.loaders.otf = R, this.loaders.envSphere = new U, this.loaders.js = z, this.loaders.dds = new w, this.loaders.ckp = new y, S.a.extraLoaders) this.loaders[e] = S.a.extraLoaders[e];
                        this._resources = {}, this.version = "?version=" + S.a.artVersionNumber
                    }
                }, {
                    key: "addResource",
                    value: function(e, t) {
                        this._resources[e] ? console.error("Resource already loading", e) : this._resources[e] = new G(t)
                    }
                }, {
                    key: "addLoader",
                    value: function(e, t) {
                        this.loaders[e] = t
                    }
                }, {
                    key: "getResources",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            i = [];
                        for (var a in e) i.push(this.getResource(e[a], void 0 === t ? void 0 : t[a], r, n));
                        return Promise.all(i)
                    }
                }, {
                    key: "status",
                    value: function(e) {
                        if (!(e in this._resources)) return this.RESOURCE_STATUS.unrequested;
                        var t = this._resources[e];
                        return void 0 === t.data ? this.RESOURCE_STATUS.failed : "string" != typeof t.data && "then" in t.data ? this.RESOURCE_STATUS.requested : this.RESOURCE_STATUS.loaded
                    }
                }, {
                    key: "loaded",
                    value: function(e) {
                        return this.status(e) === this.RESOURCE_STATUS.loaded
                    }
                }, {
                    key: "getNow",
                    value: function(e) {
                        if (this.status(e) === this.RESOURCE_STATUS.loaded) return this._resources[e].data;
                        console.error("Resource not loaded - ", e)
                    }
                }, {
                    key: "getResource",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                            a = arguments.length > 3 ? arguments[3] : void 0;
                        e || console.error("Undefined resource"), "object" === N(e) && (r = e.type, e = e.path), e || console.error("Undefined resource path", e);
                        var s, o = e.startsWith("data:") ? "" : this.version;
                        return e in this._resources ? s = Promise.resolve(this._resources[e].data) : (void 0 === r && (r = e.includes("request_image=") ? "noun" : e.split("?")[0].split(".").pop()), r in this.loaders || console.error("Unrecognized resource type", r), s = new Promise((function(n) {
                            t.loaders[r].load(e + o, (function(e) {
                                return n(e)
                            }), a ? function(t) {
                                a(e, t)
                            } : void 0, (function(t) {
                                console.error(i, "Failed to load:", e, t), n(void 0)
                            }))
                        })), this._resources[e] = new G(s), s.then((function(r) {
                            t._resources[e] && (t._resources[e].data = r)
                        }))), this._resources[e].owners[i] = !0, n.a.emit("resourcesChanged", void 0), s
                    }
                }, {
                    key: "unregister",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = {};
                        for (var n in t.map((function(e) {
                                return r[e.path ? e.path : e] = !0
                            })), this._resources) {
                            var i = this._resources[n];
                            if (e in i.owners && !(n in r) && (delete i.owners[e], !Object.keys(i.owners).length)) {
                                var a = i.data;
                                void 0 !== a && "string" != typeof a && !("then" in a) && "dispose" in a && a.dispose(), delete this._resources[n]
                            }
                        }
                    }
                }], (r = null) && L(t.prototype, r), i && L(t, i), e
            }();
        W.loaders = {}, W.RESOURCE_STATUS = {
            unrequested: 0,
            requested: 1,
            loaded: 2,
            failed: 3
        }
    },
    3: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "REVISION", (function() {
            return n
        })), r.d(t, "MOUSE", (function() {
            return i
        })), r.d(t, "CullFaceNone", (function() {
            return a
        })), r.d(t, "CullFaceBack", (function() {
            return s
        })), r.d(t, "CullFaceFront", (function() {
            return o
        })), r.d(t, "CullFaceFrontBack", (function() {
            return l
        })), r.d(t, "FrontFaceDirectionCW", (function() {
            return u
        })), r.d(t, "FrontFaceDirectionCCW", (function() {
            return c
        })), r.d(t, "BasicShadowMap", (function() {
            return h
        })), r.d(t, "PCFShadowMap", (function() {
            return d
        })), r.d(t, "PCFSoftShadowMap", (function() {
            return f
        })), r.d(t, "FrontSide", (function() {
            return p
        })), r.d(t, "BackSide", (function() {
            return m
        })), r.d(t, "DoubleSide", (function() {
            return v
        })), r.d(t, "FlatShading", (function() {
            return g
        })), r.d(t, "SmoothShading", (function() {
            return y
        })), r.d(t, "NoColors", (function() {
            return b
        })), r.d(t, "FaceColors", (function() {
            return k
        })), r.d(t, "VertexColors", (function() {
            return w
        })), r.d(t, "NoBlending", (function() {
            return S
        })), r.d(t, "NormalBlending", (function() {
            return C
        })), r.d(t, "AdditiveBlending", (function() {
            return _
        })), r.d(t, "SubtractiveBlending", (function() {
            return R
        })), r.d(t, "MultiplyBlending", (function() {
            return T
        })), r.d(t, "CustomBlending", (function() {
            return M
        })), r.d(t, "AddEquation", (function() {
            return x
        })), r.d(t, "SubtractEquation", (function() {
            return P
        })), r.d(t, "ReverseSubtractEquation", (function() {
            return O
        })), r.d(t, "MinEquation", (function() {
            return K
        })), r.d(t, "MaxEquation", (function() {
            return A
        })), r.d(t, "ZeroFactor", (function() {
            return E
        })), r.d(t, "OneFactor", (function() {
            return B
        })), r.d(t, "SrcColorFactor", (function() {
            return I
        })), r.d(t, "OneMinusSrcColorFactor", (function() {
            return D
        })), r.d(t, "SrcAlphaFactor", (function() {
            return F
        })), r.d(t, "OneMinusSrcAlphaFactor", (function() {
            return U
        })), r.d(t, "DstAlphaFactor", (function() {
            return j
        })), r.d(t, "OneMinusDstAlphaFactor", (function() {
            return z
        })), r.d(t, "DstColorFactor", (function() {
            return N
        })), r.d(t, "OneMinusDstColorFactor", (function() {
            return L
        })), r.d(t, "SrcAlphaSaturateFactor", (function() {
            return V
        })), r.d(t, "NeverDepth", (function() {
            return G
        })), r.d(t, "AlwaysDepth", (function() {
            return W
        })), r.d(t, "LessDepth", (function() {
            return q
        })), r.d(t, "LessEqualDepth", (function() {
            return H
        })), r.d(t, "EqualDepth", (function() {
            return X
        })), r.d(t, "GreaterEqualDepth", (function() {
            return Y
        })), r.d(t, "GreaterDepth", (function() {
            return J
        })), r.d(t, "NotEqualDepth", (function() {
            return Z
        })), r.d(t, "MultiplyOperation", (function() {
            return Q
        })), r.d(t, "MixOperation", (function() {
            return $
        })), r.d(t, "AddOperation", (function() {
            return ee
        })), r.d(t, "NoToneMapping", (function() {
            return te
        })), r.d(t, "LinearToneMapping", (function() {
            return re
        })), r.d(t, "ReinhardToneMapping", (function() {
            return ne
        })), r.d(t, "Uncharted2ToneMapping", (function() {
            return ie
        })), r.d(t, "CineonToneMapping", (function() {
            return ae
        })), r.d(t, "UVMapping", (function() {
            return se
        })), r.d(t, "CubeReflectionMapping", (function() {
            return oe
        })), r.d(t, "CubeRefractionMapping", (function() {
            return le
        })), r.d(t, "EquirectangularReflectionMapping", (function() {
            return ue
        })), r.d(t, "EquirectangularRefractionMapping", (function() {
            return ce
        })), r.d(t, "SphericalReflectionMapping", (function() {
            return he
        })), r.d(t, "CubeUVReflectionMapping", (function() {
            return de
        })), r.d(t, "CubeUVRefractionMapping", (function() {
            return fe
        })), r.d(t, "RepeatWrapping", (function() {
            return pe
        })), r.d(t, "ClampToEdgeWrapping", (function() {
            return me
        })), r.d(t, "MirroredRepeatWrapping", (function() {
            return ve
        })), r.d(t, "NearestFilter", (function() {
            return ge
        })), r.d(t, "NearestMipMapNearestFilter", (function() {
            return ye
        })), r.d(t, "NearestMipMapLinearFilter", (function() {
            return be
        })), r.d(t, "LinearFilter", (function() {
            return ke
        })), r.d(t, "LinearMipMapNearestFilter", (function() {
            return we
        })), r.d(t, "LinearMipMapLinearFilter", (function() {
            return Se
        })), r.d(t, "UnsignedByteType", (function() {
            return Ce
        })), r.d(t, "ByteType", (function() {
            return _e
        })), r.d(t, "ShortType", (function() {
            return Re
        })), r.d(t, "UnsignedShortType", (function() {
            return Te
        })), r.d(t, "IntType", (function() {
            return Me
        })), r.d(t, "UnsignedIntType", (function() {
            return xe
        })), r.d(t, "FloatType", (function() {
            return Pe
        })), r.d(t, "HalfFloatType", (function() {
            return Oe
        })), r.d(t, "UnsignedShort4444Type", (function() {
            return Ke
        })), r.d(t, "UnsignedShort5551Type", (function() {
            return Ae
        })), r.d(t, "UnsignedShort565Type", (function() {
            return Ee
        })), r.d(t, "UnsignedInt248Type", (function() {
            return Be
        })), r.d(t, "AlphaFormat", (function() {
            return Ie
        })), r.d(t, "RGBFormat", (function() {
            return De
        })), r.d(t, "RGBAFormat", (function() {
            return Fe
        })), r.d(t, "LuminanceFormat", (function() {
            return Ue
        })), r.d(t, "LuminanceAlphaFormat", (function() {
            return je
        })), r.d(t, "RGBEFormat", (function() {
            return ze
        })), r.d(t, "DepthFormat", (function() {
            return Ne
        })), r.d(t, "DepthStencilFormat", (function() {
            return Le
        })), r.d(t, "RGB_S3TC_DXT1_Format", (function() {
            return Ve
        })), r.d(t, "RGBA_S3TC_DXT1_Format", (function() {
            return Ge
        })), r.d(t, "RGBA_S3TC_DXT3_Format", (function() {
            return We
        })), r.d(t, "RGBA_S3TC_DXT5_Format", (function() {
            return qe
        })), r.d(t, "RGB_PVRTC_4BPPV1_Format", (function() {
            return He
        })), r.d(t, "RGB_PVRTC_2BPPV1_Format", (function() {
            return Xe
        })), r.d(t, "RGBA_PVRTC_4BPPV1_Format", (function() {
            return Ye
        })), r.d(t, "RGBA_PVRTC_2BPPV1_Format", (function() {
            return Je
        })), r.d(t, "RGB_ETC1_Format", (function() {
            return Ze
        })), r.d(t, "LoopOnce", (function() {
            return Qe
        })), r.d(t, "LoopRepeat", (function() {
            return $e
        })), r.d(t, "LoopPingPong", (function() {
            return et
        })), r.d(t, "InterpolateDiscrete", (function() {
            return tt
        })), r.d(t, "InterpolateLinear", (function() {
            return rt
        })), r.d(t, "InterpolateSmooth", (function() {
            return nt
        })), r.d(t, "ZeroCurvatureEnding", (function() {
            return it
        })), r.d(t, "ZeroSlopeEnding", (function() {
            return at
        })), r.d(t, "WrapAroundEnding", (function() {
            return st
        })), r.d(t, "TrianglesDrawMode", (function() {
            return ot
        })), r.d(t, "TriangleStripDrawMode", (function() {
            return lt
        })), r.d(t, "TriangleFanDrawMode", (function() {
            return ut
        })), r.d(t, "LinearEncoding", (function() {
            return ct
        })), r.d(t, "sRGBEncoding", (function() {
            return ht
        })), r.d(t, "GammaEncoding", (function() {
            return dt
        })), r.d(t, "RGBEEncoding", (function() {
            return ft
        })), r.d(t, "LogLuvEncoding", (function() {
            return pt
        })), r.d(t, "RGBM7Encoding", (function() {
            return mt
        })), r.d(t, "RGBM16Encoding", (function() {
            return vt
        })), r.d(t, "RGBDEncoding", (function() {
            return gt
        })), r.d(t, "BasicDepthPacking", (function() {
            return yt
        })), r.d(t, "RGBADepthPacking", (function() {
            return bt
        })), r.d(t, "renderKit", (function() {
            return kt
        }));
        var n = "88dev",
            i = {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            },
            a = 0,
            s = 1,
            o = 2,
            l = 3,
            u = 0,
            c = 1,
            h = 0,
            d = 1,
            f = 2,
            p = 0,
            m = 1,
            v = 2,
            g = 1,
            y = 2,
            b = 0,
            k = 1,
            w = 2,
            S = 0,
            C = 1,
            _ = 2,
            R = 3,
            T = 4,
            M = 5,
            x = 100,
            P = 101,
            O = 102,
            K = 103,
            A = 104,
            E = 200,
            B = 201,
            I = 202,
            D = 203,
            F = 204,
            U = 205,
            j = 206,
            z = 207,
            N = 208,
            L = 209,
            V = 210,
            G = 0,
            W = 1,
            q = 2,
            H = 3,
            X = 4,
            Y = 5,
            J = 6,
            Z = 7,
            Q = 0,
            $ = 1,
            ee = 2,
            te = 0,
            re = 1,
            ne = 2,
            ie = 3,
            ae = 4,
            se = 300,
            oe = 301,
            le = 302,
            ue = 303,
            ce = 304,
            he = 305,
            de = 306,
            fe = 307,
            pe = 1e3,
            me = 1001,
            ve = 1002,
            ge = 1003,
            ye = 1004,
            be = 1005,
            ke = 1006,
            we = 1007,
            Se = 1008,
            Ce = 1009,
            _e = 1010,
            Re = 1011,
            Te = 1012,
            Me = 1013,
            xe = 1014,
            Pe = 1015,
            Oe = 1016,
            Ke = 1017,
            Ae = 1018,
            Ee = 1019,
            Be = 1020,
            Ie = 1021,
            De = 1022,
            Fe = 1023,
            Ue = 1024,
            je = 1025,
            ze = Fe,
            Ne = 1026,
            Le = 1027,
            Ve = 2001,
            Ge = 2002,
            We = 2003,
            qe = 2004,
            He = 2100,
            Xe = 2101,
            Ye = 2102,
            Je = 2103,
            Ze = 2151,
            Qe = 2200,
            $e = 2201,
            et = 2202,
            tt = 2300,
            rt = 2301,
            nt = 2302,
            it = 2400,
            at = 2401,
            st = 2402,
            ot = 0,
            lt = 1,
            ut = 2,
            ct = 3e3,
            ht = 3001,
            dt = 3007,
            ft = 3002,
            pt = 3003,
            mt = 3004,
            vt = 3005,
            gt = 3006,
            yt = 3200,
            bt = 3201,
            kt = !0
    },
    36: function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.d(t, "a", (function() {
            return i
        }));
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, i;
            return t = e, i = [{
                key: "notify",
                value: function(e) {
                    var t = this;
                    this.handleAction = function(e) {
                        e.preventDefault(), document.body.querySelector("user-notification button").removeEventListener("click", t.handleAction), t._callback(), "remove" in HTMLElement.prototype ? t._notification.remove() : t._notification.style.display = "none !important"
                    }, e ? (this.clearExistingNotifications(), this.createNotification(e)) : console.error("No options object provided")
                }
            }, {
                key: "handleTimeout",
                value: function() {
                    var e = document.body.querySelector("user-notification button");
                    e && e.removeEventListener("click", this.handleAction), "remove" in HTMLElement.prototype ? this._notification.remove() : this._notification.style.display = "none !important"
                }
            }, {
                key: "clearExistingNotifications",
                value: function() {
                    this.timeout && clearTimeout(this.timeout);
                    for (var e = Array.from(document.body.querySelectorAll("user-notification")), t = 0; t < e.length; t++) "remove" in HTMLElement.prototype ? e[t].remove() : e[t].style.display = "none !important"
                }
            }, {
                key: "createNotification",
                value: function(e) {
                    var t = this,
                        r = document.createElement("user-notification"),
                        n = document.createElement("p");
                    if (n.innerText = e.message, r.append(n), e.action) {
                        var i = document.createElement("button");
                        i.innerText = e.action.label, this._callback = e.action.callback, r.append(i)
                    }
                    if (e.duration) {
                        if (e.duration !== 1 / 0) {
                            var a = e.duration;
                            a < 400 ? a = 400 : a > 1e4 && (a = 1e4), this.timeout = setTimeout((function() {
                                t.handleTimeout()
                            }), a)
                        }
                        r.classList.add("is-infinite")
                    } else this.timeout = setTimeout((function() {
                        t.handleTimeout()
                    }), 4e3);
                    document.body.querySelector("#placeholder-canvas").append(r), this._notification = r;
                    var s = document.body.querySelector("user-notification button");
                    s && (s.addEventListener("click", this.handleAction), r.style.paddingRight = s.scrollWidth + 12 + "px")
                }
            }], (r = null) && n(t.prototype, r), i && n(t, i), e
        }()
    },
    37: function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.d(t, "a", (function() {
            return i
        }));
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, i;
            return t = e, i = [{
                key: "makeMesh",
                value: function(e, t) {
                    var r = e.skinned ? new RK.SkinnedMesh(void 0, t, !0) : new RK.Mesh(e, t);
                    return r.geometry = e, r.castShadow = !0, r.receiveShadow = !0, r.frustumCulled = !1, r.name = e.name, r.morphTargetInfluences = e.morphTargetInfluences, r.morphTargetDictionary = e.morphTargetDictionary, r
                }
            }], (r = null) && n(t.prototype, r), i && n(t, i), e
        }()
    },
    38: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        }));
        var n = r(5),
            i = r(0),
            a = r(64);

        function s(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function o(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var u = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.assign(this, t), this._originalData = t, this.keywords = t.keywords || {}, this.side = void 0 !== this.slot ? this.slot.endsWith("R") ? "R" : this.slot.endsWith("L") ? "L" : "" : "", this.unsidedSlot = this.slot.replace(/.$/, ""), this.sided = "" !== this.side, this.occupiesRandL = "R" === this.side && !this.link, this.slotR = "L" === this.side ? this.unsidedSlot + "R" : this.slot, this._findDefaultPaintConfig();
                var r = this.name ? this.name.split("_") : console.error("Slot item", this, "does not have a name attr") || [];
                if (this.subPart = r.length > 1, this.baseName = r[0], this.subName = r[1], this.poseModifier = t.mpose ? t.mpose.split(",").map((function(e) {
                        return e.trim()
                    })) : void 0, this.poseGroup = t.mpose_01, t.targets ? this.targets = t.targets.split(",") : delete this.targets, this.terms = {}, t.terms)
                    for (var n in t.terms) this.terms[n.toLowerCase()] = 1;
                this.mods || (this.mods = {}), this.searchTerms = e.prepTerms([].concat(o(Object.keys(this.keywords)), [this.slot, this.name, this.description || this.desc || "", this.displayname], o(Object.keys(this.terms || {}))))
            }
            var t, r, u;
            return t = e, u = [{
                key: "prepTerms",
                value: function(e) {
                    return e.filter((function(e) {
                        return !!e
                    })).join(" ").toLowerCase().replace(/'s/g, "").replace(/\W+/g, " ").split(" ").map((function(e) {
                        return e.trim()
                    })).filter((function(e) {
                        return e.length >= 3
                    }))
                }
            }, {
                key: "dateAndTag",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    t.add_date && CK.serverTime ? (e.releaseDate = parseInt(t.add_date), e.released = e.releaseDate > 0 && e.releaseDate <= CK.serverTime, e.newToUser = !CK.timeTraveler && e.released && CK.User.loggedIn && CK.User.lastAccessDate && CK.User.lastAccessDate < e.releaseDate, e.new = e.released && void 0 !== e.keywords.new || e.releaseDate >= CK.serverTime - 86400 * i.a.newPartAge) : e.released = !0;
                    var r = e.display_order || 1;
                    if (e.keywords.test) e.released = !1, e.new = !1, e.tagLabel = "TEST", e.tagColor = "DarkGreen", e.display_order = -5e3 + r;
                    else if (e.keywords.unselectable && !CK.timeTraveler && CK.User.permissions.test) e.tagLabel = "unselectable", e.tagColor = "DarkBlue", delete e.keywords.unselectable;
                    else if (e.released)(e.newToUser || e.new) && (e.tagLabel = "NEW", e.display_order = -6e3 + r);
                    else {
                        var n = new Date(1e3 * e.releaseDate),
                            a = ("" + n.getFullYear()).slice(2) + " " + (n.getMonth() + 1) + " " + n.getDate();
                        e.tagLabel = e.releaseDate < 0 ? "future" : a, e.tagColor = "black", e.display_order = e.releaseDate < 0 ? -8e3 + r : -e.releaseDate, e.new = !1
                    }(!e.released && !CK.User.permissions.test && !CK.User.permissions.timetravel || !e.released && CK.timeTraveler || e.keywords.hide) && (e.hide = !0)
                }
            }], (r = [{
                key: "hasTarget",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.slot;
                    if (!t) return !0;
                    var r = n.a.slots[t];
                    if (!r) return "general" !== t && console.warn("Could not find slot", t, "for part", this.name), !0;
                    if (!r.targetSlots) return !0;
                    if (!r.targetSlots.length) return !0;
                    var i = r.targetSlots.find((function(t) {
                        return t in e
                    }));
                    if (!i) return !1;
                    var a = e[i];
                    if (!a) return !1;
                    if (r.targets && !(a in r.targets)) return !1;
                    if (!this.targets) return !0;
                    var s = n.a.getPart(a);
                    if (!s) return !1;
                    for (var o in this.targets) {
                        var l = this.targets[o];
                        if (l.startsWith("!")) {
                            if (!(l.slice(1) in s.keywords)) return !0
                        } else if (s.name === l || l in s.keywords) return !0
                    }
                    return !1
                }
            }, {
                key: "getStandard",
                value: function(e, t) {
                    var r = CK.Options.partsByKey[e] && CK.Options.partsByKey[e].standard;
                    if (r) {
                        var n = r.find((function(r) {
                            return r.hasTarget(t, e)
                        }));
                        if (n) return n
                    }
                }
            }, {
                key: "_findDefaultPaintConfig",
                value: function() {
                    if (void 0 !== this.slot) {
                        var e = "" === this.side ? this.slot : this.unsidedSlot + "R",
                            t = e + "_" + this.name,
                            r = n.a.configs[t];
                        void 0 !== r && r.length > 0 && (this.defaultPaints = r[0].paints[e])
                    }
                }
            }, {
                key: "match",
                value: function(e) {
                    var t = this;
                    return !!e.length && (1 === e.length && e[0].length <= 3 ? !!this.searchTerms.find((function(t) {
                        return t.startsWith(e[0])
                    })) : !e.find((function(e) {
                        return !t.searchTerms.find((function(t) {
                            return t.includes(e)
                        }))
                    })))
                }
            }, {
                key: "filter",
                value: function(e) {
                    var t = this;
                    if (!e.length || !e.map) return -9999;
                    var r = 0;
                    return e.map((function(e) {
                        var n;
                        r += t.searchTerms.reduce((function(t, r) {
                            return (n = Object(a.a)(r, e)) < t ? n : t
                        }), 9999)
                    })), r
                }
            }, {
                key: "parseColors",
                value: function(e) {
                    var t = this;
                    e = e.split(",");
                    var r = [];
                    return e.map((function(e) {
                        var n = e.split("_");
                        if (2 === n.length) {
                            var i = s(n, 2),
                                a = i[0],
                                o = i[1],
                                l = CK.Options.surfaces[a] || console.error("Surface id", a, "is missing");
                            r.push({
                                surface: l,
                                priority: parseInt(o)
                            })
                        } else {
                            var u = CK.Options.shaders[n[0]];
                            if (!u) return console.error("Missing shader reference", n[0], "in", t.slot + "_" + t.name), [];
                            var c = CK.Options.surfaces[u.surfaceID];
                            if (!c) return console.error("Invalid surface id in", u.surfaceID), [];
                            r.push({
                                shader: u,
                                surface: c,
                                priority: 0
                            })
                        }
                    })), r
                }
            }, {
                key: "source",
                get: function() {
                    return this._source || (this._source = this.slot.endsWith("D") || this.slot.endsWith("L") ? n.a.getPartBySlotAndName(this.unsidedSlot + "R", this.name) : this), this._source
                }
            }, {
                key: "pipeDone",
                get: function() {
                    return !0
                }
            }, {
                key: "pipeBuggy",
                get: function() {}
            }, {
                key: "debugPartOverlayColor",
                get: function() {
                    return !1
                }
            }]) && l(t.prototype, r), u && l(t, u), e
        }();
        for (var c in u.artPipeStatus = {
                0: "model",
                1: "uvs",
                2: "forms",
                3: "colors",
                4: "normal",
                6: "skin",
                7: "mods",
                8: "print",
                9: "db",
                10: "done"
            }, u.artPipeStatusByName = {}, u.artPipeStatus) u.artPipeStatusByName[u.artPipeStatus[c]] = c;
        u.artPipeStatusOrdered = Object.keys(u.artPipeStatus).sort((function(e, t) {
            return parseInt(e) - parseInt(t)
        })), u.artPipeStatusOrderedNames = u.artPipeStatusOrdered.map((function(e) {
            return u.artPipeStatus[e]
        }))
    },
    39: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r(36);

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, a;
            return t = e, a = [{
                key: "add",
                value: function() {
                    this.queue = this.queue.slice(0, this.currentIndex + 1), this.queue.push(CK.character.data.clone()), this.queue.length > 20 && (this.queue = this.queue.slice(this.queue.length - 20)), this.currentIndex = this.queue.length - 1
                }
            }, {
                key: "undo",
                value: function() {
                    this.hasUndo ? (n.a.notify({
                        message: "UNDO"
                    }), this.currentIndex -= 1, CK.character.change(this.queue[this.currentIndex], !0, !1)) : n.a.notify({
                        message: "CANNOT UNDO",
                        duration: 1600
                    })
                }
            }, {
                key: "redo",
                value: function() {
                    this.hasRedo ? (n.a.notify({
                        message: "REDO"
                    }), this.currentIndex += 1, CK.character.change(this.queue[this.currentIndex], !0, !1)) : n.a.notify({
                        message: "CANNOT REDO",
                        duration: 1600
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.queue = [CK.character.data.clone()], this.currentIndex = 0
                }
            }, {
                key: "init",
                value: function() {
                    this.queue = [], this.currentIndex = -1
                }
            }, {
                key: "empty",
                get: function() {
                    return this.queue.length <= 1
                }
            }, {
                key: "hasUndo",
                get: function() {
                    return this.currentIndex > 0
                }
            }, {
                key: "hasRedo",
                get: function() {
                    return this.currentIndex < this.queue.length - 1
                }
            }], (r = null) && i(t.prototype, r), a && i(t, a), e
        }();
        a.init()
    },
    41: function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function a(e) {
            return e && "object" === i(e) && !Array.isArray(e)
        }
        t.a = {
            deepCopy: function e(t) {
                if ("object" === i(t)) {
                    if (Array.isArray(t)) {
                        for (var r = t.length, n = new Array(r), a = 0; a < r; a++) n[a] = e(t[a]);
                        return n
                    }
                    var s = {};
                    for (var o in t && t.prototype && (s.prototype = t.prototype), t) s[o] = e(t[o]);
                    return s
                }
                return t
            },
            deepMerge: function e(t) {
                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                if (!i.length) return t;
                var o = i.shift();
                if (a(t) && a(o))
                    for (var l in o) a(o[l]) ? (t[l] || Object.assign(t, n({}, l, {})), e(t[l], o[l])) : Object.assign(t, n({}, l, o[l]));
                return e.apply(void 0, [t].concat(i))
            },
            deepClean: function e(t) {
                var r = !0;
                for (var n in t) a(t[n]) && e(t[n]) ? delete t[n] : r = !1;
                return r
            },
            getUrlParameter: function(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            }
        }
    },
    43: function(e, t, r) {
        "use strict";
        var n = r(0),
            i = !1;
        var a = {
            pretendWidth: (window.screen.width + window.innerWidth) / 2,
            pretendHeight: (window.screen.height + window.innerHeight) / 2
        };
        t.a = {
            compact: function() {
                var e = window.innerWidth <= (n.a.compactWidth || 960) && window.innerHeight <= 600 || window.innerHeight <= (n.a.compactWidth || 960) && window.innerWidth <= 600;
                return e || (i = !0), !(i && window.CK && !CK.URL.getVar("automation")) && e
            },
            landscape: function() {
                return 90 === window.orientation || -90 === window.orientation
            },
            retinaAdjust: function(e, t) {
                return !n.a.retinaEnabled || n.a.forge || !window.divicePixelRatio || divicePixelRatio < 1.3 ? [e, t] : window.divicePixelRatio > 4 ? [4 * e, 4 * t] : [Math.floor(e * window.divicePixelRatio), Math.floor(t * window.divicePixelRatio)]
            },
            isRetina: function() {
                return window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches
            },
            screenSize: a
        }
    },
    45: function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.d(t, "a", (function() {
            return i
        }));
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, i;
            return t = e, i = [{
                key: "init",
                value: function() {
                    this.initialized || (this.initialized = !0, this.variables = {}, this.initURLVariables())
                }
            }, {
                key: "getCharacterURLString",
                value: function(e) {
                    var t = [];
                    for (var r in e.parts) 0 != e.parts[r] && t.push(e.parts[r]);
                    var n = [];
                    for (var i in e.sliders) 0 != e.sliders[i] && n.push(e.sliders[i]);
                    return t.join(",") + "&" + n.join(",") + "&" + e.poses.main
                }
            }, {
                key: "initURLVariables",
                value: function() {
                    var e = window.location.search.substring(1);
                    if (e && "string" == typeof e) {
                        var t = e.split("&");
                        for (var r in t)
                            if (t[r] && "string" == typeof t[r]) {
                                var n = t[r].split("="),
                                    i = n[0],
                                    a = !(n.length > 1) || n[1];
                                "false" == a ? a = !1 : "true" == a && (a = !0), this.variables[i] = a
                            }
                    }
                }
            }, {
                key: "getVar",
                value: function(e) {
                    return this.initialized || this.init(), this.variables ? this.variables[e] : void 0
                }
            }], (r = null) && n(t.prototype, r), i && n(t, i), e
        }()
    },
    46: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return w
        }));
        var n = r(0);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function o(e) {
            return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var u = function(e) {
                function t() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (e = s(this, o(t).call(this))).range = n.a.forge ? 32 : 1, e.setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !1,
                        blending: RK.NormalBlending,
                        vertex: "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); ",
                        fragmentPars: "\n                    uniform sampler2D readTexture;\n                    uniform float textureSize;\n                    const int range = ".concat(e.range, ";\n                    const int bounds = ").concat(2 * e.range, ";\n                "),
                        fragment: "\n\n                    float texturePixelSize = 1.0 / textureSize;\n                    \n                    vec2 scanPositionUV;\n                    \n                    float d;\n                    \n                    vec4 scanTexel;\n\n                    vec2 readTextureUV = gl_FragCoord.xy / textureSize;\n                    \n                    //readTextureUV.y = 1.0 - readTextureUV.y;\n                    \n                    vec4 currentPixel = texture2D( readTexture, readTextureUV );\n                            \n                    if( currentPixel.a < 0.003 ){\n                    \n                        float closest = 9999999.0;                \n                        vec4 closestColor = vec4( 0.0 );        \n                                        \n                        for(int dx=0; dx <= bounds; dx++){\n                            for(int dy=0; dy <= bounds; dy++){\n                                \n                                scanPositionUV = readTextureUV + ( vec2(dx, dy) - float(range) ) * texturePixelSize;\n                                \n                                d = distance( scanPositionUV , readTextureUV );\n                                            \n                                if( d < closest ){\n                                    \n                                    scanTexel = texture2D( readTexture, scanPositionUV );\n                                    \n                                    if( scanTexel.a >= 0.003 ){\n                                        \n                                        closest = d;\n                                        closestColor = scanTexel;\n                                       \n                                    }\n                                }\n                            }\n                        }\n                        \n                        currentPixel = closestColor;\n                    \n                    }\n                            \n                    gl_FragColor = currentPixel;\n                                    \n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            },
                            textureSize: {
                                type: "f",
                                value: 256
                            }
                        }
                    }, "Dilator")), e
                }
                var r, i, u;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(t, SK.EffectPass), r = t, (i = [{
                    key: "render",
                    value: function(e, t, r) {
                        this.material.uniforms.readTexture.value = r.texture, this.material.setUniform("textureSize", t.height), CK.renderManager.renderer.autoClear = !0, e.render(this.scene, this.camera, t, !1)
                    }
                }]) && a(r.prototype, i), u && a(r, u), t
            }(),
            c = r(10),
            h = r(5),
            d = r(21),
            f = r(56);

        function p() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function m(e, t, r) {
            return (m = p() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new(Function.bind.apply(e, n));
                return r && v(i, r.prototype), i
            }).apply(null, arguments)
        }

        function v(e, t) {
            return (v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function g(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function y(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function b(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function k(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var w = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.display = t, this.tempShaders = {}, this.tempReplaceShaders = {}, this.tempSchemes = {}, this.atlasTargetKeys = {}
            }
            var t, r, i;
            return t = e, i = [{
                key: "setupBakeMaterial",
                value: function(e, t, r, n, i) {
                    t.bakeMaterials || (t.bakeMaterials = {}), t.bakeMaterials[r] || (t.bakeMaterials[r] = new SK.Patched), t.bakeMaterials[r].setUniform("uvPosScl", n), t.bakeMaterials[r].ckReverseWinding = t.part && "L" === t.part.side, t.bakeMaterials[r].setUniform("flipNormal", t.material.ckReverseWinding ? 1 : 0)
                }
            }, {
                key: "flipCanvas",
                value: function(e) {
                    var t = document.createElement("canvas"),
                        r = t.getContext("2d");
                    return t.width = e.width, t.height = e.height, r.fillStyle = "gray", r.fillRect(0, 0, t.width, t.height), r.translate(0, e.height), r.scale(1, -1), r.drawImage(e, 0, 0), t
                }
            }, {
                key: "getVec4Array",
                value: function(e) {
                    for (var t = [], r = 0; r < e.length; r++) t.push(m(RK.Vec4, g(e[r]).concat([255])).divideScalar(255));
                    return t
                }
            }, {
                key: "getSchemeShader",
                value: function(e, t, r) {
                    if (e.shader) return e.shader;
                    var n = e.surface,
                        i = e.priority,
                        a = t[n.name] || h.a.getScheme("default", "default")[n.name] || console.log("Surface ".concat(n.name, " Not Found In default_scheme")) || [];
                    return a[i - 1] || a[0] || h.a.shaders[1]
                }
            }], (r = [{
                key: "render",
                value: function() {
                    var e = this;
                    CK.Settings.color && (this.display && this.display.sim && this.display.modded && this.display.modded.settings && (this.bakeColor || this.bakePhysical || this.bakeNormals || this.bakeSurface || this.bakeEmissive) ? (this.initialized || this.initialize(), ["normal", "color", "physical", "emissive"].map((function(t) {
                        e.hasBaked(t) && (e.setupMaterials(t), e.regularBaker(t))
                    })), this.display.updateEyeShaders(), this.updateDisplayMaterials(), this.surfaceBaker()) : this.updateDisplayMaterials())
                }
            }, {
                key: "tempReplaceShader",
                value: function(e, t) {
                    this.tempReplaceShaders = b({}, e, t), this.requestRefresh()
                }
            }, {
                key: "applyTempShader",
                value: function(e, t, r) {
                    var n = this;
                    (!this.tempShaders || Object.keys(this.tempShaders).length !== t.length || t.find((function(e) {
                        return !(e in n.tempShaders)
                    })) || t.find((function(t) {
                        return !n.tempShaders[t][r] || n.tempShaders[t][r].key !== e.key
                    }))) && (this.tempShaders = {}, t.map((function(t) {
                        return n.tempShaders[t] = b({}, r, e)
                    })), this.requestRefresh())
                }
            }, {
                key: "applyTempScheme",
                value: function(e, t) {
                    e && t || console.error("Invalid application of temp scheme", e, t), this.tempSchemes[e] = Object.assign({}, t), this.requestRefresh()
                }
            }, {
                key: "tempOverrideConfig",
                value: function(e) {
                    this._tempOverrideConfig || (this._tempOverrideConfig = e, this.requestRefresh())
                }
            }, {
                key: "removeAllTemp",
                value: function() {
                    (Object.keys(this.tempSchemes).length || Object.keys(this.tempShaders).length || Object.keys(this.tempReplaceShaders).length || this._tempOverrideConfig) && (this.tempShaders = {}, this.tempReplaceShaders = {}, this.tempSchemes = {}, delete this._tempOverrideConfig, this.requestRefresh())
                }
            }, {
                key: "requestRefresh",
                value: function() {
                    this.needsRefreshColor = !0, this.needsRefreshPhysical = !0, this.needsRefreshEmissive = !0, c.a.requestRenderRefresh()
                }
            }, {
                key: "requestRefreshColor",
                value: function() {
                    this.needsRefreshColor = !0, c.a.requestRenderRefresh()
                }
            }, {
                key: "requestRefreshPhysical",
                value: function() {
                    this.needsRefreshPhysical = !0, c.a.requestRenderRefresh()
                }
            }, {
                key: "requestRefreshEmissive",
                value: function() {
                    this.needsRefreshEmissive = !0, c.a.requestRenderRefresh()
                }
            }, {
                key: "refresh",
                value: function() {
                    CK.Settings.color && (this.needsRefreshSurfaceBake ? this.render() : (this.needsRefreshColor && this.regularBaker("color"), this.needsRefreshPhysical && this.regularBaker("physical"), this.needsRefreshEmissive && this.regularBaker("emissive"), this.display.updateEyeShaders()), this.needsRefreshColor = !1, this.needsRefreshPhysical = !1, this.needsRefreshEmissive = !1, this.needsRefreshSurfaceBake = !1)
                }
            }, {
                key: "getSize",
                value: function(e) {
                    return this.display.modded.settings.hiRez ? n.a.colorTextureSizeHigh : "color" === e || "normal" === e || "surface" === e ? n.a.colorTextureSize : n.a.colorTextureSize / 2
                }
            }, {
                key: "hasBaked",
                value: function(e) {
                    return {
                        normal: this.bakeNormals,
                        color: this.bakeColor,
                        physical: this.bakePhysical,
                        surface: this.bakeSurface,
                        emissive: this.bakeEmissive
                    }[e]
                }
            }, {
                key: "initialize",
                value: function() {
                    this.layer = 3, this.camera = new RK.PerspectiveCamera(45, 1, .5, 2), this.camera.layers.set(this.layer), this.dilator = new u, this.images = {}, this.textures = {}, this.imageData = {}, this.targetsRGBA = {}, this.initialized = !0
                }
            }, {
                key: "applyMaterials",
                value: function(e, t) {
                    var r = this.display.modded.settings.hiRez,
                        n = this.display.modded.decals;
                    for (var i in t) {
                        var a = t[i],
                            s = this.display.atlas.getSize(i),
                            o = a.bakeMaterials[e],
                            l = a.part.getMaskPath(r, s),
                            u = a.part.hasAAID && a.part.getAAIDPath(r, s);
                        d.a.loaded(l) ? o.setUniform("masksMap", CK.Resources.getNow(l)) : o.setUniform("masksMap", SK.Textures.gray), u && d.a.loaded(u) ? o.setAAID(CK.Resources.getNow(u)) : o.setAAID(SK.Textures.black);
                        var c = n[i] ? Object.keys(n[i]).length : 0;
                        o.setPatchCount(a.part.colors.length, c)
                    }
                }
            }, {
                key: "setPartColors",
                value: function(e, t) {
                    var r = this,
                        n = function(n) {
                            var i = t[n],
                                a = i.part;
                            a.colors.map((function(t, s) {
                                r.applyColor(e, i, n, t.mapping, s, t, a)
                            }))
                        };
                    for (var i in t) n(i)
                }
            }, {
                key: "setDecalColors",
                value: function(t, r) {
                    if (this.display && this.display.data) {
                        var i = this.display.modded.orderedDecals,
                            a = this.display.data,
                            s = a.paints,
                            o = a.shaders,
                            l = this.tempReplaceShaders[-1] || h.a.shaders[1];
                        for (var u in r)
                            for (var c = r[u], p = c.part, m = c.bakeMaterials[t], v = (h.a.slots[u] || h.a.slots[p.slot] || console.error("Invalid slot", p.slot)).scheme_group || "outfit", g = i[u], b = 0; b < m.layerCount; b++) {
                                var k = g[b];
                                if (k) {
                                    var w = k.mapping,
                                        S = k.id,
                                        C = y(w.split("_"), 3),
                                        _ = (C[0], C[1], C[2]),
                                        R = h.a.decals[S] || console.error("Missing decal id", S),
                                        T = R.getTexturePath();
                                    if (d.a.status(T) === d.a.RESOURCE_STATUS.loaded)
                                        if (CK.Settings.shaderballs) {
                                            for (var M = [], x = 0; x < R.maskCount; x++) {
                                                var P = k.mapping + "_" + x,
                                                    O = s[u] && s[u][P],
                                                    K = void 0;
                                                u in this.tempShaders && this.tempShaders[u][P] ? K = this.tempShaders[u][P] : this.tempReplaceShaders[O] ? K = this.tempReplaceShaders[O] : v in this.tempSchemes ? R.colors && R.colors[x] ? K = e.getSchemeShader(R.colors[x], this.tempSchemes[v], v) : console.error("Need to update decal colors for decal", R.id) : void 0 !== O && O in o && (K = o[O]), K || (K = l);
                                                var A = K[t];
                                                if ("color" === t && K === l) {
                                                    A = CK.Helpers.deepCopy(A);
                                                    for (var E = 0; E < 3; E++)
                                                        for (var B = 0; B < 3; B++) A[E][B] = 100 + 4 * b + 8 * x
                                                }
                                                M.push(A)
                                            }
                                            var I = d.a.getNow(T),
                                                D = "pattern" === R.slot,
                                                F = k.patches || (D ? p.pattern : void 0),
                                                U = "pattern" === R.slot,
                                                j = U ? new RK.Vec4(0, 0, p.worldUVSize * R.worldScale, p.worldUVSize * R.worldScale) : R.uvwh,
                                                z = !n.a.shaderballs && c.geometry.attributes.uv2 || p.uvs > 1 && !D && !U,
                                                N = R.form,
                                                L = R.colorIndex;
                                            m.setLayer(I, F, b, j, z, U, N, M, "color" === t ? L : -1, _)
                                        } else {
                                            for (var V = [], G = 0; G < R.layers.length; G++) {
                                                var W = R.layers[G],
                                                    q = R.layerMapping[G] || console.error("Decal need reexport", R);
                                                if (W === f.a.LAYER_TYPES.mask) {
                                                    var H = s[w] || s[R.slot] || console.error(w, R.slot, "Missing from paints", s);
                                                    if (H) {
                                                        var X = H[q] || console.error("No shader set for", q, p) || 1,
                                                            Y = (CK.Options.shaders[X] || console.error("Missing shader", X) || CK.Options.shaders[1])[t];
                                                        V.push(Y)
                                                    } else console.error("No paints for", w)
                                                }
                                            }
                                            var J = d.a.getNow(T),
                                                Z = R.uvwh,
                                                Q = !!c.geometry.attributes.uv2,
                                                $ = R.form,
                                                ee = R.colorIndex;
                                            m.setLayer(J, void 0, b, Z, Q, !1, $, V, "color" === t ? ee : -1, 0), m.overlayOnColor = !0
                                        } else m.setLayer(SK.Textures.transparentBlack, [], b)
                                } else m.setLayer(SK.Textures.transparentBlack, [], b)
                            }
                    }
                }
            }, {
                key: "applyColor",
                value: function(t, r, n, i, a, s, o) {
                    var l = this.display.data,
                        u = l.paints,
                        c = l.shaders;
                    if (CK.Settings.shaderballs) {
                        var d = n,
                            f = i,
                            p = a,
                            m = s;
                        if (d in this.display.modded.paintMatch) {
                            var v = this.display.modded.paintMatch[d][s.manualName || s.id];
                            if (v) {
                                var g = y(v, 2),
                                    b = g[0],
                                    k = g[1],
                                    w = this.display.meshes[b];
                                if (w) {
                                    var S = w.part.namedColors[k] || w.part.colors[parseInt(k)];
                                    S && (p = S.id, f = S.mapping, d = b, m = S)
                                }
                            }
                        }
                        var C, _ = this.tempReplaceShaders[-1] || h.a.shaders[1],
                            R = u[d] && u[d][p];
                        void 0 === R && void 0 !== m.link && void 0 === (R = u[d] && u[d][m.link]) && this.tempShaders && this.tempShaders[d] && !this.tempShaders[d][f] && o.colors[m.link] && (f = o.colors[m.link].mapping);
                        var T = (h.a.slots[n] || h.a.slots[o.slot]).scheme_group || "outfit";
                        (C = this._tempOverrideConfig && this._tempOverrideConfig.paints[d] && this._tempOverrideConfig.paints[d][p] ? this._tempOverrideConfig.shaders[this._tempOverrideConfig.paints[d][p]] || console.error("Provided invalid override config with missing shader") : d in this.tempShaders && this.tempShaders[d][f] ? this.tempShaders[d][f] : this.tempReplaceShaders[R] ? this.tempReplaceShaders[R] : T in this.tempSchemes ? e.getSchemeShader(r.part.colors[p] || console.error(p, "not found", r.part.name) || r.part.colors[0], this.tempSchemes[T], T) : void 0 !== R && R in c ? c[R] : _) && C.gradient || (C = console.error("Invalid paint", C) || _), r.bakeMaterials[t].setPatch(a, C[t])
                    } else {
                        var M = CK.Options.shaders[u[n] && u[n][i] || 0];
                        r.bakeMaterials[t].setPatch(a, M[t])
                    }
                }
            }, {
                key: "surfaceBaker",
                value: function() {
                    this.hasBaked("surface")
                }
            }, {
                key: "setupMaterials",
                value: function(t) {
                    var r = this.display.getMeshesInAtlas();
                    for (var n in r) {
                        var i = r[n],
                            a = this.display.atlas.getUV(n);
                        i.layers.enable(this.layer), e.setupBakeMaterial(n, i, t, a)
                    }
                    this.applyMaterials(t, r)
                }
            }, {
                key: "regularBaker",
                value: function(e) {
                    var t = this.display.getMeshesInAtlas();
                    if (this.hasBaked(e) && 0 !== Object.keys(t).length) {
                        for (var r in this.setPartColors(e, t), this.setDecalColors(e, t), e in this.atlasTargetKeys || (this.atlasTargetKeys[e] = {}), this.atlasTargetKeys[e]) r in t || delete this.atlasTargetKeys[e][r];
                        var n = new RK.Scene,
                            i = CK.renderManager.renderer,
                            a = this.getRGBATarget(e, !0);
                        i.setRenderTarget(a);
                        var s = i.getContext();
                        s.enable(s.SCISSOR_TEST);
                        var o = this.getSize(e),
                            l = !1,
                            u = {};
                        for (var c in t)
                            if (this.display.modded.needsBake[c]) {
                                var h = t[c],
                                    d = h.part,
                                    f = h.bakeMaterials[e],
                                    p = [f.getKey(), d.id, h.geometry.uuid || "", c, h.uuid || ""].join("_");
                                if (p !== this.atlasTargetKeys[e][c]) {
                                    h.prevMaterial = h.material, h.material = f, h.oldParent = h.parent, u[c] = h, this.atlasTargetKeys[e][c] = p;
                                    var m = h.material.getUniform("uvPosScl");
                                    s.scissor(Math.floor(m.x * o), Math.floor(m.y * o), Math.floor(m.z * o), Math.floor(m.z * o)), d.solidBake ? f.gradientsMap && f.gradientsMap.image && f.gradientsMap.image.data && f.gradientsMap.image.data.length >= 8 ? s.clearColor.apply(s, g([].concat(g(f.gradientsMap.image.data.slice(4, 7)), [255]).map((function(e) {
                                        return e / 255
                                    })))) : console.error("Invalid bakeMaterial graidentsMap for solidBake color") : (s.clearColor(0, 0, 0, 0), n.add(h), l = !0), s.clear(s.COLOR_BUFFER_BIT)
                                }
                            } else delete this.atlasTargetKeys[e][c];
                        for (var v in s.clearColor(0, 0, 0, 0), s.disable(s.SCISSOR_TEST), this.camera.layers.disable(7), this.camera.layers.disable(8), l && (CK.renderManager.renderer.autoClear = !1, CK.renderManager.renderer.render(n, this.camera, a, !1), this.dilate(e)), u) {
                            var y = u[v];
                            y.material = y.prevMaterial, y.oldParent.add(y), y.oldParent.updateMatrixWorld(!0)
                        }
                    }
                }
            }, {
                key: "getRGBATarget",
                value: function(e, t) {
                    var r = e + (t ? "Src" : "");
                    if (!this.targetsRGBA[r]) {
                        var n = this.getSize(e);
                        this.targetsRGBA[r] = new RK.WebGLRenderTarget(n, n, {
                            minFilter: RK.LinearFilter,
                            magFilter: RK.LinearFilter,
                            format: RK.RGBAFormat
                        })
                    }
                    return this.targetsRGBA[r]
                }
            }, {
                key: "dilate",
                value: function(e) {
                    var t = this.getRGBATarget(e),
                        r = this.getRGBATarget(e, !0);
                    this.dilator.render(CK.renderManager.renderer, t, r), this.storeImagesForForge(e)
                }
            }, {
                key: "storeImagesForForge",
                value: function(e) {}
            }, {
                key: "updateDisplayMaterials",
                value: function() {
                    var e = this.display.getMeshes();
                    for (var t in e)
                        if (!e[t].part.collision) {
                            var r = e[t].material,
                                i = this.display.atlas.packed[t] && this.display.modded.needsBake[t],
                                a = i ? this.display.atlas.getUV(t) : new RK.Vec4(1, 1, 1, 1),
                                s = this.display.sim;
                            this.bakeColor && i ? r.setColorAtlas(a, this.getRGBATarget("color").texture) : r.setColorAtlas(a, SK.Textures.makeTexture([s.diffuse.r, s.diffuse.g, s.diffuse.b, 1])), this.bakeNormals && i ? r.setNormalAtlas(a, this.getRGBATarget("normal").texture) : CK.Settings.allowBakedNormal && r.setNormalAtlas(a, SK.Textures.normal), this.bakePhysical && i ? r.setPhysicalAtlas(a, this.getRGBATarget("physical").texture) : n.a.allowBakedPhysical && r.setPhysicalAtlas(a, SK.Textures.makeTexture([s.roughness, s.metalness, s.opacity, s.sheen])), this.bakeEmissive && i ? r.setEmissiveAtlas(a, this.getRGBATarget("emissive").texture) : n.a.allowBakedEmissive && r.setEmissiveAtlas(a, SK.Textures.transparentBlack)
                        }
                }
            }, {
                key: "bakeNormals",
                get: function() {
                    return this.display.sim && this.display.sim.bakedNormals || this.display.modded.settings.hiRez && this.display.sim.bakeDepthHiRez
                }
            }, {
                key: "bakeColor",
                get: function() {
                    return this.display.sim && this.display.sim.bakedColor
                }
            }, {
                key: "bakePhysical",
                get: function() {
                    return n.a.allowBakedPhysical && this.display.sim && this.display.sim.bakedPhysical
                }
            }, {
                key: "bakeSurface",
                get: function() {
                    return this.display.sim && this.display.sim.bakedSurface || this.display.modded.settings.hiRez && this.display.sim.bakedSurfaceHiRez
                }
            }, {
                key: "bakeEmissive",
                get: function() {
                    return n.a.allowBakedEmissive && this.display.sim && this.display.sim.bakedEmissive
                }
            }]) && k(t.prototype, r), i && k(t, i), e
        }()
    },
    49: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(0),
            i = r(13),
            a = r(5);

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, o;
            return t = e, o = [{
                key: "initSettings",
                value: function() {
                    if (this.permissions = {}, !n.a.forge && (this.lastAccessDate = "LAST_ACCESS" in window && "" !== LAST_ACCESS ? parseInt(LAST_ACCESS) : void 0, window.USER_PERMISSIONS && "" !== window.USER_PERMISSIONS && window.USER_PERMISSIONS.length))
                        for (var e in window.USER_PERMISSIONS) this.permissions[window.USER_PERMISSIONS[e]] = !0
                }
            }, {
                key: "init",
                value: function() {
                    n.a.forge
                }
            }, {
                key: "logOut",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (CK.character.savedChanges || e || "/" !== window.location.pathname || confirm("Unsaved changes will be lost. Are you sure you want to logout?")) && (CK.uncacheCharacter(), window.loggingOut = !0, window.location.href = "/accounts/logout/")
                }
            }, {
                key: "logOutSilent",
                value: function() {
                    window.location.href = "/accounts/logout/"
                }
            }, {
                key: "isLoggedIn",
                value: function() {
                    return this.loggedIn
                }
            }, {
                key: "isBacker",
                value: function() {
                    return !!this.permissions.backer
                }
            }, {
                key: "loginSuccess",
                value: function(e, t, r, n) {
                    Reporting.successfullyLoggedIn(), window.LOGGED_IN = e, window.USER_PERMISSIONS = n || [], window.LAST_ACCESS = r, window.USER_EMAIL = t, this.initSettings(), a.a.refreshWithUserCredentials(), CK.saves.loadAll(), this.actionOnLogin && (this.actionOnLogin(), this.actionOnLogin = void 0), i.a.emit("finishedLoggingIn")
                }
            }, {
                key: "loggedIn",
                get: function() {
                    return "LOGGED_IN" in window && window.LOGGED_IN && "True" === window.LOGGED_IN || n.a.forge
                }
            }], (r = null) && s(t.prototype, r), o && s(t, o), e
        }();
        o.initSettings()
    },
    5: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return O
        }));
        var n = r(0),
            i = r(38),
            a = r(19);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var f = function(e) {
                function t(e) {
                    var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (l(this, t), (r = c(this, h(t).call(this, e))).normalFilename = e.normalFilename || "", r.displayFilename = e.displayFilename || "", r.type = e.type || "", r.normalMap = !!e.normalMap, r.blendNormals = !!e.blendNormals, r.useMesh = !!e.mesh, r.isPart = !0, r.namedColors = {}, r.solidBake = r.keywords.solidColor || r.keywords.solidBake || "text" === r.type, n.a.color) {
                        r.solidBake ? (r.idealTextureSize = 32, r.bakedTextureSize = 32, r.worldUVSize = 1, r.colors = [{
                            surface: {
                                response_options: null,
                                id: 1,
                                name: "plastic"
                            },
                            count: 0
                        }]) : e.patches ? (e.colors && (r.colors = r.parseColors(e.colors), r.colors.length !== e.patches.length && delete r.colors), r.colors || (r.colors = e.patches.map((function(e) {
                            var t = e.s || 3;
                            return 0 === parseInt(t) && "HeroForge" === n.a.projectName && (t = 9), {
                                surface: CK.Options.surfaces[t] || CK.Options.surfaces[1]
                            }
                        })))) : r.colors = [];
                        var a = {};
                        r.colors.map((function(e) {
                            var t = e.surface;
                            e.count = a[t.id] || 0, t.id in a ? a[t.id] += 1 : a[t.id] = 1
                        }));
                        var s = [];
                        r.colors.length > 1 && s.push("mask_color");
                        for (var o = 0; o < r.colors.length; o++) {
                            var u = r.colors[o];
                            s.push(u.surface.name + (u.count || "") + (0 === o ? "_base" : "_baseGradient"))
                        }
                        r.colors.map((function(e, t) {
                            e.mapping = e.surface.name + (e.count || ""), e.id = t
                        })), r.mappings = r.colors.map((function(e) {
                            return e.mapping
                        })), r.surfaces = r.colors.map((function(e) {
                            return e.surface.name
                        })), r.colors.length > 26 && (console.error("Too many patches on", r.slot + "_" + r.name, r.colors.length), r.colors.slice(0, 26)), e.patches && e.patches.map((function(e, t) {
                            e.name && (r.colors[t].manualName = e.name, r.namedColors[e.name] = r.colors[t]), e.label && (r.colors[t].label = e.label), void 0 !== e.link && (r.colors[t].link = e.link)
                        })), r.pattern = e.pattern ? e.pattern.split(",").map((function(e) {
                            return parseInt(e)
                        })) : []
                    } else r.colors = [];
                    if (!r.solidBake && void 0 !== e.area) {
                        r.bounds = (new RK.Box3).setFromArray(e.bounds);
                        var d = Math.min(window.screen.height, 1080),
                            f = d / n.a.screenHeightInWorldUnits;
                        r.worldUVSize = Math.sqrt(e.area / e.uvArea), r.idealTextureSize = parseInt(r.worldUVSize * f), r.bakedTextureSize = e.bakeSize
                    }
                    r.rivets = e.rivets || [], r.nameAffix = i;
                    var p = O.slots[r.slot];
                    return r.thumbSize = [r.thumb_x || p.thumb_x || 80, r.thumb_y || p.thumb_y || 80], r.collision = r.slot.endsWith("Collision"), r
                }
                var r, i, s;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, e), r = t, (i = [{
                    key: "cloneFromOriginal",
                    value: function(e) {
                        return new t(this._originalData, e)
                    }
                }, {
                    key: "getRenderIDMapping",
                    value: function(e) {
                        return this.mappings[e] || console.error("Out of range mapping", e, "part only has", this.mappings) || this.mappings[0]
                    }
                }, {
                    key: "getMaskPath",
                    value: function(e, t) {
                        return this.bakedTextureSize || console.error("Part", this.name, " has missing texture info. Try re-baking color."), (!this._usedTextureSize || t > this._usedTextureSize) && (this._usedTextureSize = t), a.a.getTexture(this, e, "mask", this._usedTextureSize)
                    }
                }, {
                    key: "getNormalPath",
                    value: function(e, t) {
                        return this.bakedTextureSize || console.error("Part", this.name, " has missing texture info. Try re-baking color."), (!this._usedTextureSize || t > this._usedTextureSize) && (this._usedTextureSize = t), a.a.getTexture(this, e, "nrml", this._usedTextureSize)
                    }
                }, {
                    key: "getAAIDPath",
                    value: function(e, t) {
                        return this.hasAAID || console.error("Requesting AAID for part that does not have it"), this.bakedTextureSize || console.error("Part", this.name, " has missing texture info. Try re-baking color."), a.a.getTexture(this, e, "aaid", t)
                    }
                }, {
                    key: "getAvailableDecals",
                    value: function() {
                        var e = this,
                            t = (O.decalsBySlot[this.slot] || []).filter((function(t) {
                                return !t.subPart || t.baseName === e.name
                            }));
                        return this.settings.decalSources && this.settings.decalSources.map((function(e) {
                            var r = o(e, 2),
                                n = r[0],
                                i = r[1];
                            t = "*" === n ? t.concat(O.decalsBySlot[i] || []) : t.concat((O.decalsBySlot[n] || []).filter((function(e) {
                                return e.subPart && e.baseName === i
                            })))
                        })), this.pattern && this.pattern.length && (t = t.concat(O.decalsBySlot.pattern)), t
                    }
                }, {
                    key: "hasAAID",
                    get: function() {
                        return this.colors.length > 1
                    }
                }]) && u(r.prototype, i), s && u(r, s), t
            }(i.a),
            p = r(56),
            m = r(13),
            v = r(21),
            g = r(49),
            y = r(65),
            b = r(64);

        function k(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var w = ["addParts", "addPartsPermanently", "backup", "camera", "disableMenu", "disableSlot", "form", "hide", "disableClip", "disableParts", "excludePoses", "hideSlots", "hideSliders", "ik", "includePoses", "namedPoses", "slide", "sliderLimitMax", "sliderLimitMin", "snap", "vanishIncompatible", "paintMatch", "removePermanent", "removeSlots"],
            S = {
                patches: !0
            };

        function C(e, t, r) {
            var n = (e.standard || {}).inheritSettings,
                i = k(n && n.length ? function(e, t) {
                    if (e.split(":").length > 1) return e.split(":").map((function(e) {
                        return e.trim()
                    }));
                    var r = e.split("_");
                    if (1 === r.length) return [t, r[0]];
                    if (2 === r.length) return r;
                    console.error("Invalid target for mod in", t, e)
                }(n, t) : [t, "defaultSettings"], 2),
                a = i[0],
                s = i[1];
            if (a in r && (s in r[a] || (s = "defaultSettings", a = t), s in r[a])) {
                var o = r[a][s];
                for (var l in o)
                    if (!o[l].globalCondition)
                        if (l in e)
                            for (var u in o[l]) u in e[l] || S[u] || (e[l][u] = o[l][u]);
                        else e[l] = o[l];
                        "defaultSettings" !== s && C(o, a, r)
            }
        }

        function _(e, t) {
            for (var r in t) {
                var n = t[r],
                    i = n.slot,
                    a = n.name;
                n.mods = {};
                var s = i.endsWith("L") || i.endsWith("D") ? i.slice(0, -1) + "R" : i;
                if (s in e && a in e[s]) {
                    var o = e[s][a];
                    for (var l in n.settings = o.standard || {}, o) {
                        var u = o[l];
                        u.ignoreMod || R(u, n.mods, i)
                    }
                }
            }
        }

        function R(e, t, r) {
            var n = function(e, t) {
                for (var r = [], n = 0; n < 4; n++) e["condition" + n] && r.push({
                    condition: e["condition" + n],
                    condition_targets: e["condition".concat(n, "Target")] || [t],
                    condition_values: e["condition".concat(n, "Values")]
                });
                e.isInSlotCondition && r.push({
                    condition: "inslot",
                    condition_targets: e.isInSlotCondition
                });
                return r
            }(e, r);
            w.map((function(i) {
                if (i in e) {
                    i in t || (t[i] = []);
                    var a = Array.isArray(e[i]) ? e[i] : [e[i]],
                        s = e.userMessage || "",
                        o = e.source,
                        l = e.modDescription;
                    t[i].push({
                        conditions: n,
                        effects: a,
                        slot: r,
                        message: s,
                        source: o,
                        modName: i,
                        modDescription: l
                    })
                }
            }))
        }

        function T(e) {
            var t = {};
            for (var r in e) {
                var n = e[r].defaultSettings;
                if (n)
                    for (var i in n) {
                        var a = n[i];
                        "standard" !== i && a.globalCondition && R(a, t, r)
                    }
            }
            return t
        }

        function M(e) {
            for (var t in e)
                for (var r in e[t]) {
                    var n = e[t][r];
                    for (var i in n)
                        if (n[i].mirrorToL) {
                            var a = i.endsWith("R") ? i.slice(0, -1) + "L" : i + "L";
                            if (!(a in n)) {
                                var s = n[i],
                                    o = {};
                                for (var l in s) o[l] = s[l], o[l] && (Array.isArray(o[l]) ? o[l] = o[l].map((function(e) {
                                    return Array.isArray(e) ? e.map((function(e) {
                                        return "string" == typeof e ? e.endsWith("R") ? e.slice(0, -1) + "L" : e.endsWith("L") ? e.slice(0, -1) + "R" : e : e
                                    })) : "string" == typeof e ? e.endsWith("R") ? e.slice(0, -1) + "L" : e.endsWith("L") ? e.slice(0, -1) + "R" : e : e
                                })) : "string" == typeof o[l] && (o[l].endsWith("R") ? o[l] = o[l].slice(0, -1) + "L" : o[l].endsWith("L") && (o[l] = o[l].slice(0, -1) + "R")));
                                n[a] = o
                            }
                        }
                }
        }

        function x(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function P(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var O = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, s;
            return t = e, s = [{
                key: "init",
                value: function(e, t) {
                    var r = this;
                    this.loaded = !1, this.filtered = {};
                    var i = n.a.projectLabel + "_options";
                    delete localStorage[i];
                    var a = [n.a.dataPath, "/static/options_dynamic.json"],
                        s = ["json", "json"];
                    n.a.forge || (a.push("/static/options_partner.json"), s.push("json")), v.a.getResources(a, s).then((function(n) {
                        return r.tryProcessData(n, e, t)
                    }))
                }
            }, {
                key: "tryProcessData",
                value: function(e, t, r) {
                    try {
                        this.doProcessData(e, t, r)
                    } catch (e) {
                        Reporting.exception("Processing Options Data", e), r()
                    }
                }
            }, {
                key: "doProcessData",
                value: function(t, r, n) {
                    var i = x(t, 5),
                        a = i[0],
                        s = i[1],
                        o = i[2];
                    if (i[3], i[4], !a) return n("Could not load options static");
                    if (!s) return n("Could not load options dynamic");
                    var l = Object.assign(a, s || {}, o || {});
                    for (var u in l.productionBuild ? console.log("Options Source: Production") : l.qaBuild && console.log("Options Source: Local"), l.parts) l.parts[u].mods = {};
                    for (var c in l.slots) l.slots[c].mods = {};
                    l.settings = l.settings || {}, l.meshInfo = l.meshInfo || {}, e.processRawSettings(l || console.error("Settings not included in json") || {
                        settings: {},
                        meshInfo: {}
                    }, l), e.processRawData(l), this.loaded = !0, m.a.emit("optionsLoaded"), r()
                }
            }, {
                key: "processRawData",
                value: function(t) {
                    var r = this;
                    for (var i in g.a.permissions) n.a.addonKeywords[i] = ["default"];
                    for (var a in e.configs = t.configs, this.addFiltersToConfigs(), this.getConfigsByName(), e.surfaces = {}, e.surfacesByName = {}, t.surfaces) e.surfacesByName[t.surfaces[a].name] = t.surfaces[a], e.surfaces[t.surfaces[a].id] = t.surfaces[a];
                    if (this.processShaders(t.shaders), n.a.debug && console.info("Raw Options Data:", t), e.slots = t.slots, e.slots.mods) {
                        var s = function(t) {
                            t in e.globalMods || (e.globalMods[t] = []), e.slots.mods.mods[t].map((function(r) {
                                return e.globalMods[t].push(r)
                            }))
                        };
                        for (var o in e.slots.mods.mods) s(o)
                    }
                    for (var l in e.slotsById = e.processSlotsById(t.slots), e.slotsByKeyword = e.processSlotsByKeyword(t.slots), e.parts = this.processParts(t.parts), e.packs = t.packs || [], e.defaultIcons = t.default_icons || [], e._sortDefaultIcons(), e.applyClearPartsToConfigs(), e.elements = t.elements, t.partner = t.partner || {}, t.products) {
                        var u = t.products[l],
                            c = u.visibility;
                        c || (c = "default"), "extra" !== c && "default" !== c && (c = "hidden"), u.visibility = c
                    }
                    e.products = t.products, this.applyPartnerData(t), e.products.map((function(e) {
                        e.display_name && (e.display_name_bitless = e.display_name.startsWith(e.tag) ? e.display_name.substring(e.tag.length) : e.display_name)
                    })), this.sortItems(e.products), e._sortProductsByName(), e._sortProductsBySlug(), e._sortProductsByPrice(), e.materials = t.materials || [], this.sortItems(e.materials), e._sortMaterials();
                    var h = [];
                    for (var d in t.fonts || [])(n.a.forge || t.fonts[d].active) && h.push(t.fonts[d]);
                    for (var f in e.fonts = h, this.sortItems(e.fonts), e._sortFonts(), e.giftCards = t.giftcards, e.paint = t.paint, e._addonKeywords(e.parts), this.configs) {
                        var p = e.configs[f];
                        p.map((function(e) {
                            if (e.pose_id) {
                                e.config_type.endsWith("pose") || console.error("Config has a pose ID but is not a pose config_type", e);
                                var t = "pose" === e.config_type ? "main" : e.config_type.split("_")[0];
                                e.poses = (r = {}, n = t, i = e.pose_id, n in r ? Object.defineProperty(r, n, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[n] = i, r)
                            }
                            var r, n, i;
                            delete e.pose, delete e.displayPose
                        })), e._addonKeywords(p)
                    }
                    e._sortPaintByKeyword(), e.partsBySlot = this._getBySlot(e.parts, !1), e._sortByKeywords(), this.applyDateAndTags(), this.collectSelectableParts(), this.getSlotTargets(), e.decals = this.processDecals(t.decals), e.decalsBySlot = this._getBySlot(e.decals, !0), e.posesByID = this.getPosesByID(), e.posesByKeyword = this.getPosesByKeyword();
                    var m = this.partsBySlot.itemD;
                    if (m && m.map((function(e) {
                            var t = r.getPartBySlotAndName(e.unsidedSlot + "R", e.name);
                            t && ["mappings", "surfaces", "decal", "colors", "bounds", "idealTextureSize", "bakedTextureSize"].map((function(r) {
                                e[r] = t[r]
                            }))
                        })), CK.Settings.color)
                        for (var v in e.configsByName)
                            if (v.endsWith("_scheme")) {
                                var b = e.configsByName[v];
                                for (var k in b) {
                                    var w = b[k].colorScheme;
                                    for (var S in w) w[S] = w[S].map((function(t) {
                                        return isNaN(t) ? new y.a(t, !0) : e.shaders[t] || console.error("Preset shader", t, "no longer exists!!")
                                    }))
                                }
                            }
                    e.finished = !0, this.partsBySlotAndGroup = {};
                    var C = function(e) {
                        r.partsBySlot[e].map((function(t) {
                            if (t.settings) {
                                var n = t.settings.slotGroup;
                                n && (e in r.partsBySlotAndGroup || (r.partsBySlotAndGroup[e] = {}), n in r.partsBySlotAndGroup[e] || (r.partsBySlotAndGroup[e][n] = []), r.partsBySlotAndGroup[e][n].push(t))
                            }
                        }))
                    };
                    for (var _ in this.partsBySlot) C(_);
                    var R = function(e) {
                        var t = r.parts[e];
                        t.attachSlots = {}, t.rivets.map((function(e) {
                            if (e.source && e.parts) {
                                var n = {};
                                e.parts.map((function(t) {
                                    var i = r.parts[t];
                                    if (i) {
                                        i.hide || i.keywords.unselectable || !i.released || (n[i.id] = i);
                                        var a = i.settings.slotGroup;
                                        if (e.label || (e.label = i.settings.slotGroupLabel), a && e.source in r.partsBySlotAndGroup) {
                                            var s = r.partsBySlotAndGroup[e.source][a];
                                            s && s.map((function(e) {
                                                e.hide || e.keywords.unselectable || !e.released || (n[e.id] = e)
                                            }))
                                        }
                                    }
                                })), Object.keys(n).length && (e.availableParts = n, t.attachSlots[e.name] = e)
                            }
                        }))
                    };
                    for (var T in this.parts) R(T)
                }
            }, {
                key: "applyPartnerData",
                value: function(t) {
                    e.partner = void 0;
                    var r = !!t.partner.products,
                        n = !!t.partner.label;
                    for (var i in n && (e.partner = {}, e.partner.static_path = t.partner.static_path, e.partner.label = t.partner.label, e.partner.type = t.partner.type, e.partner.address = t.partner.address, e.partner.offer_codes = t.partner.offer_codes), e.products) {
                        var a = e.products[i];
                        if (r && a.sku in t.partner.products) {
                            var s = t.partner.products[a.sku];
                            a.old_price = a.old_price ? Math.max(a.old_price, a.price) : a.price, a.price = a.price ? Math.min(a.price, s.price) : s.price, a.old_price == a.price && (a.old_price = null), a.currency = s.currency
                        }
                    }
                }
            }, {
                key: "processRawSettings",
                value: function(e, t) {
                    if (CK.Settings.content = e.contentCutoff || console.error("No content inclusion time specified", e) || 9999999999, CK.URL.getVar("timetravel") && (CK.User.permissions.test || CK.User.permissions.timetravel)) {
                        var r = CK.URL.getVar("timetravel") + "T00:00:01",
                            n = new Date(r);
                        console.log("timetravel", r, n), CK.serverTime = n.getTime() / 1e3, CK.timeTraveler = !0
                    } else CK.Settings.content;
                    var i = t.parts,
                        a = e.settings,
                        s = e.meshInfo;
                    for (var o in a = a || {}, s = s || {}, this.globalMods = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            for (var r in M(e), t) {
                                var n = t[r],
                                    i = n.slot,
                                    a = n.name;
                                i in e || (e[i] = {}), a in e[i] || (e[i][a] = {}), C(e[i][a], i, e)
                            }
                            return _(e, t), T(e)
                        }(a, i), i) {
                        var l = i[o],
                            u = l.slot,
                            c = l.name;
                        u in s && c in s[u] && Object.assign(l, s[u][c])
                    }
                }
            }, {
                key: "getPosesByID",
                value: function() {
                    var e = this.configsByName.pose;
                    if (!e) return {};
                    var t = {};
                    for (var r in e) e[r].poses ? t[e[r].poses.main] = e[r] : console.error("poses attribute not in pose", r);
                    return t
                }
            }, {
                key: "getPosesByKeyword",
                value: function() {
                    var e = this.configsByName.pose;
                    if (!e) return {};
                    var t = {};
                    for (var r in e) {
                        var n = e[r];
                        for (var i in n.keywords) i in t || (t[i] = []), t[i].push(n)
                    }
                    return t
                }
            }, {
                key: "getScheme",
                value: function(t, r) {
                    var n = (t = (t || "outfit") + "_scheme") in e.configsByName && e.configsByName[t][r];
                    if (n) return n.colorScheme;
                    console.error("Could not find scheme", t, r)
                }
            }, {
                key: "processShaders",
                value: function(t) {
                    if (this.shaders = {}, e.shadersByTexture = {}, t.map((function(e) {
                            for (var t in e) null === e[t] && delete e[t]
                        })), e.responses = {}, CK.Settings.color) {
                        for (var r in t.map((function(r) {
                                var n = r.inherit,
                                    i = n && (t.find((function(e) {
                                        return parseInt(e.id) === parseInt(n)
                                    })) || console.error("Inherited shader", n, "not found")) || {};
                                r.response_name && (e.responses[r.response_name] = r.id);
                                var a = y.a.fromDB(Object.assign({}, i, r));
                                e.shaders[r.id] = a, n || delete e.shaders[r.id].inherit;
                                var s = a.surface;
                                e.shadersByTexture[s] || (e.shadersByTexture[s] = []), e.shadersByTexture[s].push(a)
                            })), e.responses) e.responses[r] = e.shaders[e.responses[r]];
                        for (var n in e.shadersByTexture) e.shadersByTexture[n].map((function(e, t) {
                            e.displayOrder || (e.displayOrder = t)
                        }));
                        this.sortShaders()
                    }
                }
            }, {
                key: "sortShaders",
                value: function() {
                    for (var t in e.shadersByTexture) e.shadersByTexture[t] = e.shadersByTexture[t].sort((function(e, t) {
                        return e.displayOrder - t.displayOrder
                    }))
                }
            }, {
                key: "getSchemePaint",
                value: function(e, t, r) {
                    var n = this.getScheme(e, t);
                    return n ? n[r] || n[r.slice(0, -1)] || n[r.slice(0, -2)] : r in this.shadersByTexture ? this.shadersByTexture[r][0].presetID : r.slice(0, -1) in this.shadersByTexture ? this.shadersByTexture[r.slice(0, -1)][0].presetID : console.warn("Could not find", r, "in scheme", e, t) || 1
                }
            }, {
                key: "applyClearPartsToConfigs",
                value: function() {
                    var e = function(e) {
                        var t = CK.Options.slots[e].clear_group;
                        t && t in CK.Options.configs && CK.Options.configs[t].map((function(t) {
                            t.parts[e] || (t.parts[e] = void 0)
                        }))
                    };
                    for (var t in CK.Options.slots) e(t)
                }
            }, {
                key: "getConfigsByName",
                value: function() {
                    for (var t in this.configsByName = {}, e.configs) {
                        this.configsByName[t] = {};
                        var r = e.configs[t];
                        for (var n in r) this.configsByName[t][r[n].name] = r[n]
                    }
                }
            }, {
                key: "refreshWithUserCredentials",
                value: function() {
                    this.applyDateAndTags(), this.collectSelectableParts()
                }
            }, {
                key: "applyDateAndTags",
                value: function() {
                    for (var t in this.configs) {
                        var r = e.configs[t];
                        for (var n in r) i.a.dateAndTag(r[n])
                    }
                    for (var a in this.parts) i.a.dateAndTag(this.parts[a], this.parts[a]._originalData)
                }
            }, {
                key: "collectSelectableParts",
                value: function() {
                    var t = [];
                    for (var r in e.parts) {
                        var n = e.parts[r];
                        n.name && "CLEAR" !== n.name && !n.name.includes("_") && t.push(n)
                    }
                    this._usablePartsBySlot = this._getBySlot(t, !0)
                }
            }, {
                key: "isExcludedFromMenus",
                value: function(e, t) {
                    if (e.hide || !g.a.isBacker() && e.keywords.backer || e.keywords.unselectable || !e.hasTarget(CK.data.parts, t)) return !0;
                    if (e.mods.exclude)
                        for (var r in e.mods.exclude)
                            if (CK.data._mods._conditionMet(e.mods.exclude[r], e)) return !0;
                    return !1
                }
            }, {
                key: "getSelectableParts",
                value: function(e) {
                    var t = this;
                    if (CK.Options.slots[e]) {
                        var r = CK.Options.slots[e].source || e;
                        return (this._usablePartsBySlot[r] || []).filter((function(r) {
                            return !t.isExcludedFromMenus(r, e)
                        }))
                    }
                    console.error('Slot "'.concat(e, '" has no selectable parts'))
                }
            }, {
                key: "processSlotsById",
                value: function(e) {
                    var t = {};
                    for (var r in e) {
                        var n = e[r];
                        t[n.slot_id] = n
                    }
                    return t
                }
            }, {
                key: "processSlotsByKeyword",
                value: function(e) {
                    var t = {};
                    for (var r in e) {
                        var n = e[r];
                        for (var i in n.keywords) i in t || (t[i] = []), t[i].push(n)
                    }
                    return t
                }
            }, {
                key: "getSlotTargets",
                value: function() {
                    for (var t in this.slotsById) {
                        var r = this.slotsById[t];
                        if (r.target_slot && !r.target_parts && (r.targetSlots = r.target_slot.split(",")), r.target_slot && r.target_parts) {
                            var n = e.slots[r.target_slot];
                            void 0 === n && console.error("Could not find target slot", r.target_slot, " for ", this);
                            var i = r.target_parts.split(",");
                            for (var a in r.targets = {}, i) {
                                var s = i[a],
                                    o = parseInt(s);
                                if (isNaN(o)) {
                                    var l = n.name in e.partsByKey ? e.partsByKey[n.name][s] : void 0;
                                    if (void 0 === l) console.error("No target parts found with keyword", s);
                                    else
                                        for (var u in l) r.targets[l[u].id] = l[u]
                                } else r.targets[o] = e.parts[o]
                            }
                            0 === Object.keys(r.targets).length && (r.targets = void 0)
                        }
                    }
                }
            }, {
                key: "addFiltersToConfigs",
                value: function() {
                    var e = this,
                        t = function(t) {
                            e.configs[t].map((function(e) {
                                e.searchTerms = i.a.prepTerms([e.search_terms, e.config_desc, e.desc, e.name]), e.match = function(t) {
                                    return !!t.length && (1 === t.length && t[0].length <= 3 ? !!e.searchTerms.find((function(e) {
                                        return e.startsWith(t[0])
                                    })) : !t.find((function(t) {
                                        return !e.searchTerms.find((function(e) {
                                            return e.includes(t)
                                        }))
                                    })))
                                }, e.filter = function(t) {
                                    if (!t.length) return -9999;
                                    var r = 0;
                                    return t.map((function(t) {
                                        var n;
                                        r += e.searchTerms.reduce((function(e, r) {
                                            return (n = Object(b.a)(r, t)) < e ? n : e
                                        }), 9999)
                                    })), r
                                }, e.terms = {}, e.searchTerms.map((function(t) {
                                    return e.terms[t] = !0
                                })), e.slotR = "config" + t
                            }))
                        };
                    for (var r in this.configs) t(r)
                }
            }, {
                key: "processDecals",
                value: function(e) {
                    var t = {};
                    for (var r in e) t[r] = new p.a(e[r]);
                    return t
                }
            }, {
                key: "processParts",
                value: function(e) {
                    var t = {};
                    for (var r in e) {
                        var n = e[r];
                        t[n.slot] = t[n.slot] || {}, t[n.slot][n.name] = n
                    }
                    var i = function(r) {
                        var n = e[r],
                            i = n.normalFilename;
                        if (i && i.length) {
                            var a = t[n.slot][n.normalFilename];
                            a ? ["area", "uvArea", "bakeSize", "bounds"].map((function(e) {
                                n[e] = a[e]
                            })) : console.error("could not find normal map texture source part", n.normalFilename, "in slot", n.slot)
                        }
                    };
                    for (var a in e) i(a);
                    var s = {};
                    for (var o in e) {
                        var l = e[o],
                            u = l;
                        if (l.link && l.slot.endsWith("L"))
                            for (var c in u = Object.assign({}, e[l.link]), {
                                    id: !0,
                                    link: !0,
                                    slot: !0
                                }) u[c] = l[c];
                        s[o] = new f(u)
                    }
                    return s
                }
            }, {
                key: "_addonKeywords",
                value: function(e) {
                    for (var t in e) {
                        var r = e[t];
                        if ("keywords" in r)
                            for (var i in r.keywords)
                                if (i in n.a.addonKeywords)
                                    for (var a in n.a.addonKeywords[i]) {
                                        var s = n.a.addonKeywords[i][a];
                                        s in r.keywords || (r.keywords[s] = {})
                                    }
                    }
                }
            }, {
                key: "_getBySlot",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = {};
                    for (var n in e) e[n].slot in r || (r[e[n].slot] = []), r[e[n].slot].push(e[n]);
                    if (t)
                        for (var i in r) this.sortItems(r[i]);
                    return r
                }
            }, {
                key: "sortItems",
                value: function(e) {
                    e.sort((function(e, t) {
                        return (e.display_order || e.id) < (t.display_order || t.id) ? -1 : 1
                    }))
                }
            }, {
                key: "_sortProductsByName",
                value: function() {
                    for (var e in this.productsByName = {}, this.products) this.productsByName[this.products[e].product_name] = this.products[e]
                }
            }, {
                key: "_sortProductsBySlug",
                value: function() {
                    for (var e in this.productsBySlug = {}, this.products) this.productsBySlug[this.products[e].slug] = this.products[e]
                }
            }, {
                key: "_sortProductsByPrice",
                value: function() {
                    this.productsByPrice = this.products.filter((function(e) {
                        return e.price
                    })).sort((function(e, t) {
                        return e.price < t.price ? -1 : 1
                    }))
                }
            }, {
                key: "_sortMaterials",
                value: function() {
                    for (var e in this.materialsByGroup = {}, this.materialsByName = {}, this.materials) {
                        var t = this.materials[e],
                            r = t.group;
                        if (r && (void 0 === this.materialsByGroup[r] && (this.materialsByGroup[r] = []), this.materialsByGroup[r].push(t)), this.materialsByName[t.name] = t, t.color) {
                            var n = t.color.split(",");
                            t.color = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3] || 255)]
                        } else console.log("No material color found for", t.name)
                    }
                }
            }, {
                key: "_sortFonts",
                value: function() {
                    for (var e in this.fontsByGroup = {}, this.standardFonts = [], this.standardFontsByGroup = {}, this.fonts) {
                        var t = this.fonts[e],
                            r = (t.group || t.label).toLowerCase();
                        t.group = r, t.style = t.style || "standard", t.path = a.a.getFont(t), t.label = t.label || r, t.usages = t.usages ? t.usages.split(",") : ["standard"], r in this.fontsByGroup || (this.fontsByGroup[r] = []), this.fontsByGroup[r].push(t), "standard" === t.style && (this.standardFontsByGroup[r] = t, this.standardFonts.push(t)), t.backing && (t.backPath = a.a.getFontBack(t))
                    }
                }
            }, {
                key: "getFont",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "basic",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "standard",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "standard";
                    "tinyengraved" === t && (r = "engraving");
                    var n = this.fontsByGroup[e];
                    for (var i in n)
                        if (n[i].style === t && n[i].usages.indexOf(r) > -1) return n[i];
                    for (var a in "tinyengraved" === t && (t = "engraved"), n)
                        if (n[a].style === t && n[a].usages.indexOf(r) > -1) return n[a];
                    var s = this.standardFontsByGroup[e];
                    if (s || console.error("Could not find font", e, t, r), s.usages.indexOf(r) > -1) return s
                }
            }, {
                key: "getAvailableFonts",
                value: function() {
                    return e.standardFonts
                }
            }, {
                key: "_sortPaintByKeyword",
                value: function() {
                    for (var t in e.paintsBykeyword = {}, e.paint) {
                        var r = e.paint[t];
                        for (var n in r.id = t, r.keywords) n in e.paintsBykeyword || (e.paintsBykeyword[n] = []), e.paintsBykeyword[n].push(r)
                    }
                }
            }, {
                key: "_sortDefaultIcons",
                value: function() {
                    for (var e in this.defaultIconsByGroup = {}, this.defaultIcons) {
                        var t = this.defaultIcons[e].search_term;
                        t in this.defaultIconsByGroup || (this.defaultIconsByGroup[t] = []), this.defaultIconsByGroup[t].push(this.defaultIcons[e])
                    }
                }
            }, {
                key: "getArchetype",
                value: function(t) {
                    if (e.configs.archetype && t in e.configs.archetype) return e.configs.archetype[t];
                    n.a.debug && console.warn("Archetype " + t + " not found!")
                }
            }, {
                key: "getPart",
                value: function(t) {
                    if (t in e.parts) return e.parts[t];
                    Reporting.exception("Failed to find part id " + t)
                }
            }, {
                key: "getSlot",
                value: function(t) {
                    var r = e.slots[t];
                    return void 0 === r && console.error(t + " not found in slots!"), r
                }
            }, {
                key: "getDecal",
                value: function(t) {
                    var r = e.decals[t];
                    return void 0 === r && console.error("Decal " + t + " not found!"), r
                }
            }, {
                key: "getSlotFromId",
                value: function(t) {
                    if (t in e.parts) return e.parts[t].slot;
                    Reporting.exception("Failed to find slot for part id " + t)
                }
            }, {
                key: "getPartBySlotAndName",
                value: function(e, t) {
                    if (e in this.partsBySlot) {
                        var r = this.partsBySlot[e];
                        for (var n in r) {
                            var i = r[n];
                            if (i.name == t) return i
                        }
                    }
                }
            }, {
                key: "getMirroredDecal",
                value: function(e) {
                    if (e in this.decals) {
                        var t = this.decals[e],
                            r = t.slot;
                        if (t.slot.endsWith("R")) r = r.substring(0, r.length - 1) + "L";
                        else {
                            if (!t.slot.endsWith("L")) return t;
                            r = r.substring(0, r.length - 1) + "R"
                        }
                        return this.getDecalBySlotAndName(r, t.name)
                    }
                }
            }, {
                key: "getDecalBySlotAndName",
                value: function(e, t) {
                    return this._getBySlotAndName(e, t, this.decalsBySlot)
                }
            }, {
                key: "getRawPartBySlotAndName",
                value: function(e, t) {
                    return this._getBySlotAndName(e, t, this.partsBySlot)
                }
            }, {
                key: "_getBySlotAndName",
                value: function(e, t, r) {
                    if (e in r) {
                        var n = r[e];
                        for (var i in n) {
                            var a = n[i];
                            if (a.name == t) return a
                        }
                    }
                }
            }, {
                key: "getGiftCards",
                value: function() {
                    return e.giftCards
                }
            }, {
                key: "_sortByKeywords",
                value: function() {
                    for (var e in this.configsByKey = {}, this.configs) this.configsByKey[e] = this._groupByKeyword(this.configs[e]);
                    for (var t in this.partsByKey = {}, this.partsBySlot) this.partsByKey[t] = this._groupByKeyword(this.partsBySlot[t])
                }
            }, {
                key: "_groupByKeyword",
                value: function(e) {
                    var t, r = {};
                    for (var n in e)
                        if ("keywords" in (t = e[n]))
                            for (var i in t.keywords) i in r || (r[i] = []), r[i].push(t);
                    return r
                }
            }, {
                key: "partExistsWithAllKeywords",
                value: function(e, t) {
                    var r = this.partsByKey[e],
                        n = r[t[0]];
                    for (var i in n) {
                        for (var a = n[i], s = !0, o = 1; o < t.length; o++)
                            if (!(t[o] in r) || -1 == r[t[o]].indexOf(a)) {
                                s = !1;
                                break
                            }
                        if (s) return !0
                    }
                    return !1
                }
            }, {
                key: "match",
                value: function(e, t) {
                    for (var r in e)
                        if (e[r] in t) return !0;
                    return !1
                }
            }, {
                key: "flipSlot",
                value: function(e) {
                    return e.endsWith("R") ? e.slice(0, -1) + "L" : e.endsWith("L") ? e.slice(0, -1) + "R" : e
                }
            }, {
                key: "getAttr",
                value: function(e, t) {
                    return "keywords" in e && this.filter in e.keywords && t in e.keywords[this.filter] ? e.keywords[this.filter][t] : e[t]
                }
            }], (r = null) && P(t.prototype, r), s && P(t, s), e
        }()
    },
    53: function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.d(t, "a", (function() {
            return d
        }));
        var i = function() {
                function e(t, r, n, i) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), void 0 === t || void 0 === t.position) throw new Error("You must provide a target to the IK solver");
                    if (void 0 === r || r.length < 2) throw new Error("The IK solver needs a bone chain with at least two bones");
                    this.target = t, this.boneChain = r, this.boneLengths = new Float32Array(r.length - 1), this.bonePositions = [], this.tolerance = 1e-6, this.targetSnap = n, this.debug = !!i;
                    for (var a = 0, s = r.length; a < s; a++) this.bonePositions.push(new RK.Vec3);
                    this.oldEffectorQuaternion = new RK.Quaternion, this.newEffectorQuaternion = new RK.Quaternion
                }
                var t, r, i;
                return t = e, (r = [{
                    key: "solveBoneTransforms",
                    value: function() {
                        this._initializeBonePositions(), this._solveBonePositions(), this._setBoneTransforms()
                    }
                }, {
                    key: "_dirtyTransformToRoot",
                    value: function(e) {
                        e && !1 === e.matrixWorldNeedsUpdate && (e.matrixWorldNeedsUpdate = !0, this._dirtyTransformToRoot(e.parent))
                    }
                }, {
                    key: "_dirtyTransformToLeaves",
                    value: function(e) {
                        if (e && !1 === e.matrixWorldNeedsUpdate) {
                            e.matrixWorldNeedsUpdate = !0;
                            for (var t = e.children, r = 0; r < t.length; ++r) {
                                var n = t[r];
                                this._dirtyTransformToLeaves(n)
                            }
                        }
                    }
                }, {
                    key: "_initializeBonePositions",
                    value: function() {
                        for (var e = 0; e < this.boneChain.length; e++) {
                            var t = this.boneChain[e];
                            this._dirtyTransformToRoot(t)
                        }
                        this._dirtyTransformToRoot(this.target);
                        for (var r = this.boneChain[0]; r.parent;) r = r.parent;
                        r.updateMatrixWorld(), this.target.updateMatrixWorld();
                        for (var n = 0; n < this.boneChain.length; ++n) {
                            var i = this.boneChain[n];
                            this.bonePositions[n].setFromMatrixPosition(i.matrixWorld)
                        }
                        this._getEffectorQuaternion(this.oldEffectorQuaternion);
                        for (var a = 0, s = 1; s < this.boneChain.length; ++s) {
                            var o = this.bonePositions[s - 1],
                                l = this.bonePositions[s],
                                u = o.distanceTo(l);
                            this.boneLengths[s - 1] = u, a += u
                        }
                        this.chainLengthSquared = a * a
                    }
                }, {
                    key: "_solveBonePositions",
                    value: function() {
                        var e = 0,
                            t = 0,
                            r = 0,
                            n = 0,
                            i = -1,
                            a = 0,
                            s = new RK.Vec3;
                        this.targetSnap ? this.targetSnap(this.target, s) : s.setFromMatrixPosition(this.target.matrixWorld);
                        var o = (new RK.Vec3).copy(this.bonePositions[0]);
                        if (o.distanceToSquared(s) > this.chainLengthSquared)
                            for (e = 0, t = this.boneLengths.length; e < t; ++e) r = this.bonePositions[e].distanceTo(s), n = this.boneLengths[e] / r, this.bonePositions[e + 1].lerpVectors(this.bonePositions[e], s, n);
                        else {
                            var l = this.bonePositions[this.boneChain.length - 1];
                            for (a = 0; a < 50 && !((i = l.distanceToSquared(s)) <= this.tolerance); ++a) {
                                for (l.copy(s), e = this.boneChain.length - 2; e >= 0; --e) r = this.bonePositions[e].distanceTo(this.bonePositions[e + 1]), n = this.boneLengths[e] / r, this.bonePositions[e].lerp(this.bonePositions[e + 1], 1 - n);
                                for (this.bonePositions[0].copy(o), e = 0, t = this.boneChain.length - 1; e < t; ++e) r = this.bonePositions[e].distanceTo(this.bonePositions[e + 1]), n = this.boneLengths[e] / r, this.bonePositions[e + 1].lerp(this.bonePositions[e], 1 - n)
                            }
                            this.debug && console.log("solved bone positions in " + a + " iteration " + i.toFixed(6))
                        }
                    }
                }, {
                    key: "_setBoneTransforms",
                    value: function() {
                        for (var e = 0; e < this.boneChain.length - 1; ++e) {
                            var t = e + 1,
                                r = this.boneChain[e],
                                n = this.boneChain[t],
                                i = (new RK.Matrix4).getInverse(r.matrixWorld),
                                a = new RK.Vec3;
                            a.setFromMatrixPosition(n.matrixWorld), a.applyMatrix4(i), a.normalize();
                            var s = new RK.Vec3;
                            s.copy(this.bonePositions[t]), s.applyMatrix4(i), s.normalize();
                            var o = (new RK.Quaternion).setFromUnitVectors(a, s);
                            r.quaternion.multiply(o), r.updateMatrixWorld(!0)
                        }
                        var l = this.boneChain[this.boneChain.length - 1];
                        this._getEffectorQuaternion(this.newEffectorQuaternion), this.newEffectorQuaternion.inverse(), this.newEffectorQuaternion.multiply(this.oldEffectorQuaternion), l.quaternion.multiply(this.newEffectorQuaternion), l.updateMatrixWorld(!0)
                    }
                }, {
                    key: "_getEffectorQuaternion",
                    value: function(e) {
                        e.x = 0, e.y = 0, e.z = 0, e.w = 1;
                        for (var t = this.boneChain[this.boneChain.length - 1]; t; t = t.parent) e.premultiply(t.quaternion);
                        e.normalize()
                    }
                }, {
                    key: "__debugSkeleton",
                    value: function(e) {}
                }, {
                    key: "__debugEffector",
                    value: function(e, t) {}
                }]) && n(t.prototype, r), i && n(t, i), e
            }(),
            a = r(0);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e, t, r) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = l(this, c(t).call(this))).identityMatrix = new RK.Matrix4, e.bones = [], e.firstEmptyJointIndex = 0, e.addons = {}, e.obj = new RK.Object3D, e.useVertexTexture = !0, CK.ClientSpecs.check("OES_texture_float") || a.a.webgl2 ? (e.boneTextureWidth = 64, e.boneTextureHeight = 64, e.boneMatrices = new Float32Array(e.boneTextureWidth * e.boneTextureHeight * 4), e.boneTexture = new RK.DataTexture(e.boneMatrices, e.boneTextureWidth, e.boneTextureHeight, RK.RGBAFormat, RK.FloatType)) : (console.warn("Falling back to int8 bone texture."), e.boneTextureWidth = 128, e.boneTextureHeight = 128, e.boneMatrices = new Uint8Array(e.boneTextureWidth * e.boneTextureHeight * 4), e.boneTexture = new RK.DataTexture(e.boneMatrices, e.boneTextureWidth, e.boneTextureHeight, RK.RGBAFormat)), e.boneTexture.magFilter = RK.NearestFilter, e.boneTexture.minFilter = RK.NearestFilter, e.boneTexture.generateMipmaps = !1, e.poseSliderOverrides = {}, e.poseSliderDeltas = {}, e.namedPoses = {}, e.activeNamedPoses = {}, e.posedJoints = {}, e.mainPoses = {}, e.poseName = "", e.modifiers = [], e.sliders = {}, e.pose = 0, e.needsJointInversesRefresh = !1, e.needsPoseRefresh = !1, e
            }
            var r, n, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(t, RK.Skeleton), r = t, s = [{
                key: "_lerpVec3Anim",
                value: function(e, r) {
                    if (3 == e.length) return e.slice(0);
                    var n = Math.floor(r),
                        i = 3 * n,
                        a = r - n;
                    if (i >= e.length - 3) return e.slice(e.length - 3);
                    for (var s = [], o = 0; o < 3; o++) s.push(t._lerp(e[i + o], e[i + 3 + o], a));
                    return s
                }
            }, {
                key: "_slerpQuatAnim",
                value: function(e, t) {
                    if (4 == e.length) return (new RK.Quaternion).fromArray(e.slice(0));
                    var r = Math.floor(t),
                        n = 4 * Math.floor(t),
                        i = t - r;
                    if (n >= e.length - 4) return (new RK.Quaternion).fromArray(e.slice(e.length - 4));
                    var a = (new RK.Quaternion).fromArray(e.slice(n)),
                        s = (new RK.Quaternion).fromArray(e.slice(n + 4));
                    return a.slerp(s, i)
                }
            }, {
                key: "_lerp",
                value: function(e, t, r) {
                    return e + (t - e) * r
                }
            }], (n = [{
                key: "_requestJointInversesRefresh",
                value: function() {
                    this.needsJointInversesRefresh = !0
                }
            }, {
                key: "requestPoseRefresh",
                value: function() {
                    this.needsPoseRefresh = !0
                }
            }, {
                key: "_refreshPose",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = 0, r = this.bones.length; t < r; t++) {
                        var n = this.bones[t];
                        if (n) {
                            var i = e ? n.poses : this.posedJoints[n.name] || n.poses;
                            this.refreshBone(e, n, i)
                        }
                    }
                }
            }, {
                key: "refreshBone",
                value: function(e, t, r) {
                    if (void 0 !== t) {
                        var n = t.name;
                        if (t.position.fromArray(r.pos, 0), t.quaternion.fromArray(r.rot, 0), t.scale.fromArray(r.scl, 0), t.flip = !1, t.flipOffset.set(0, 0, 0), !e) {
                            if (n in this.poseSliderOverrides) {
                                var i = this.poseSliderOverrides[n];
                                t.position.add(i.pos).sub((new RK.Vec3).fromArray(t.poses.pos)), t.quaternion.set(t.quaternion.x + i.rot.x - t.poses.rot[0], t.quaternion.y + i.rot.y - t.poses.rot[1], t.quaternion.z + i.rot.z - t.poses.rot[2], t.quaternion.w + i.rot.w - t.poses.rot[3]), t.scale.add(i.scl).sub((new RK.Vec3).fromArray(t.poses.scl))
                            }
                            if (n in this.poseSliderDeltas) {
                                var a = this.poseSliderDeltas[n],
                                    s = new RK.Vec3,
                                    o = new RK.Vec3;
                                for (var l in a) {
                                    var u = a[l];
                                    t.position.add(u.pos), t.scale.multiply(u.scl);
                                    var c = u.rot,
                                        h = u.rotWeight;
                                    s.set(0, 0, 0);
                                    var d = Math.acos(Math.min(Math.abs(c.w), 1)),
                                        f = Math.sin(d);
                                    f > 1e-4 && s.set(c.x, c.y, c.z).multiplyScalar(2 * Math.sign(c.w) * d / f), s.multiplyScalar(h), o.add(s)
                                }
                                var p = o.length();
                                if (p > 0) {
                                    var m = Math.cos(p / 2),
                                        v = Math.sin(p / 2);
                                    o.multiplyScalar(v / p);
                                    var g = new RK.Quaternion(o.x, o.y, o.z, m).normalize();
                                    t.quaternion.premultiply(g)
                                }
                            }
                        }
                    }
                }
            }, {
                key: "getBoneByName",
                value: function(e) {
                    return this.bones.find((function(t) {
                        return t && t.name === e
                    }))
                }
            }, {
                key: "getJointTransform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pos";
                    return "pos" === t ? this.getPos(e) : "rot" === t ? this.getRot(e) : "scl" === t ? this.getScl(e) : "qtn" === t ? this.getQtn(e) : void console.error("Unrecognized transform", t)
                }
            }, {
                key: "getRot",
                value: function(e) {
                    var t = new RK.Euler;
                    return t.order = "ZYX", t.setFromQuaternion(this.getQtn(e))
                }
            }, {
                key: "getPos",
                value: function(e) {
                    return (new RK.Vec3).fromArray((this.posedJoints[e.name] || e.poses).pos, 0)
                }
            }, {
                key: "getScl",
                value: function(e) {
                    return (new RK.Vec3).fromArray((this.posedJoints[e.name] || e.poses).scl, 0)
                }
            }, {
                key: "getQtn",
                value: function(e) {
                    return (new RK.Quaternion).fromArray((this.posedJoints[e.name] || e.poses).rot, 0)
                }
            }, {
                key: "refreshAnimations",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.needsJointInversesRefresh || e) {
                        var t = this.obj.parent;
                        null != t && t.remove(this.obj);
                        var r = this.obj.snapBones;
                        this.obj.snapBones = void 0;
                        var n = this.obj.position.clone();
                        this.obj.position.set(0, 0, 0), this._refreshPose(!0), this.obj.updateMatrixWorld(!0), this.calculateInverses(), this.obj.position.copy(n), null != t && t.add(this.obj), this.needsPoseRefresh = !0, this.obj.snapBones = r
                    }(this.needsPoseRefresh || e) && this._refreshPose(!1), this.needsJointInversesRefresh = !1, this.needsPoseRefresh = !1, this.needsUpdate = !0
                }
            }, {
                key: "changePose",
                value: function(e, t) {
                    var r = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ["A1"];
                    (this.poseName !== e || n.length !== this.modifiers.length || n.find((function(e, t) {
                        return e !== r.modifiers[t]
                    }))) && (this.poseName = e, this.modifiers = n, this.posedJoints = {}, n.map((function(e) {
                        var n = t[e] || r.mainPoses[e];
                        if (n)
                            for (var i in n) r.posedJoints[i] = n[i];
                        else console.warn("Activated pose", e, "not available in", t, "or", r.mainPoses)
                    })), this.currentPoses = t, this.requestPoseRefresh())
                }
            }, {
                key: "addMainSkel",
                value: function(e) {
                    this.addSkel(e.mixerBones, "skeleton");
                    var t = e.poses || {};
                    for (var r in t) {
                        var n = t[r];
                        if (r.startsWith("slider_")) {
                            var i = r.split("_")[1];
                            this.sliders[i] = {
                                value: void 0,
                                jointAnims: n
                            }
                        } else this.mainPoses[r] = n
                    }
                    this.requestPoseRefresh()
                }
            }, {
                key: "getSlider",
                value: function(e) {
                    if (e in this.sliders) return void 0 !== this.sliders[e].value ? this.sliders[e].value : .5;
                    console.warn("Slider", e, "does not exist!")
                }
            }, {
                key: "setSlider",
                value: function(e, r) {
                    if (r < 0 && (r = 0), e in this.sliders) {
                        var n = this.sliders[e];
                        if (r !== n.value) {
                            var i, a = n.jointAnims;
                            for (var s in n.value = r, a)
                                if (i = a[s], "lookHDef" === e || "lookVDef" === e) {
                                    var o = this.poseSliderDeltas,
                                        l = this.getBoneByName(s);
                                    if (l) {
                                        void 0 === o[s] && (o[s] = {});
                                        var u = o[s],
                                            c = this.getPos(l),
                                            h = this.getQtn(l),
                                            d = this.getScl(l),
                                            f = (new RK.Vec3).fromArray(t._lerpVec3Anim(i.pos, 2 * r)),
                                            p = (new RK.Vec3).fromArray(t._lerpVec3Anim(i.scl, 2 * r)),
                                            m = (new RK.Quaternion).fromArray(i.rot),
                                            v = -2 * (r - .5);
                                        if (v < 0) {
                                            v = -v;
                                            var g = Math.min(8, i.rot.length - 4);
                                            m.fromArray(i.rot, g)
                                        }
                                        f.sub(c), m.multiply(h.inverse()), p.divide(d), u[e] = {
                                            pos: f,
                                            rot: m,
                                            scl: p,
                                            rotWeight: v
                                        }
                                    }
                                } else {
                                    var y = (new RK.Vec3).fromArray(t._lerpVec3Anim(i.pos, 2 * r)),
                                        b = t._slerpQuatAnim(i.rot, 2 * r),
                                        k = (new RK.Vec3).fromArray(t._lerpVec3Anim(i.scl, 2 * r));
                                    this.poseSliderOverrides[s] = {
                                        pos: y,
                                        rot: b,
                                        scl: k
                                    }
                                }
                            this.requestPoseRefresh()
                        }
                    } else console.warn("Setting missing slider", e, "to", r)
                }
            }, {
                key: "applyIk",
                value: function(e, t, r, n) {
                    var a = this;
                    if (t && e && e.length) {
                        var s = e.map((function(e) {
                                return a.obj.getObjectByName(e ? e.trim() : "")
                            })).filter((function(e) {
                                return void 0 !== e
                            })),
                            o = this.obj.getObjectByName(t) || CK.scene.getObjectByName(t);
                        o && s.length > 0 && new i(o, s, r, n).solveBoneTransforms()
                    }
                }
            }, {
                key: "add",
                value: function(e, t) {
                    void 0 === t && console.error("Slot is undefined in add mesh!", e);
                    var r = e.geometry;
                    if (r.mainSkeleton && this.addMainSkel(r), "mixerBones" in r && r.mixerBones.length && (this.addSkel(r.mixerBones, t), r.skinned))
                        for (var n = r.skinInfluenceCount, i = Math.ceil(n / 4), a = 0; a < i; ++a) {
                            var s = r.skinIndexNames[a],
                                o = r.attributes[s].array;
                            this._remapJointIndices(o, t)
                        }
                    r.skinned && (e.bind(this, new RK.Matrix4), this.obj.add(e))
                }
            }, {
                key: "addSkel",
                value: function(e, t) {
                    t in this.addons && (console.error("Slot", t, "already full. How did we end up adding another skeleton to it?", e), this.removeSkel(t));
                    for (var r = this.bones, n = r.length, i = e.length, a = [], s = this.firstEmptyJointIndex, o = 0; o < i; s++) s >= n ? (r.push(e[o++]), a.push(s)) : null == r[s] && (r[s] = e[o++], a.push(s)), o == i - 1 && (this.firstEmptyJointIndex = s + 1);
                    for (var l, u, c = 0; c < i; c++)(l = e[c]).skin = this, (u = l.parentId) >= 500 && (u = a[u - 500]), -1 == u ? this.obj.add(l) : null !== u && void 0 !== r[u] ? r[u].add(l) : console.error("Invalid bone parent id", u, "of", l, "for skeleton", this, "with bones", r);
                    this.addons[t] = {
                        bones: e,
                        slot: t,
                        boneRemap: a
                    }, i && this._requestJointInversesRefresh()
                }
            }, {
                key: "removeSkel",
                value: function(e) {
                    if (e in this.addons) {
                        var t = this.addons[e].boneRemap;
                        t.length && this.firstEmptyJointIndex > t[0] && (this.firstEmptyJointIndex = t[0]);
                        for (var r, n, i = 0, a = t.length; i < a; i++) r = t[i], (n = this.bones[r]).parent ? n.parent.remove(n) : console.error("Why did bone", n, "have no parent?"), this.bones[r] = void 0;
                        delete this.addons[e]
                    }
                }
            }, {
                key: "_remapJointIndices",
                value: function(e, t) {
                    if (t in this.addons)
                        for (var r = this.addons[t].boneRemap, n = 0, i = e.length; n < i; n++) e[n] >= 500 && (e[n] = r[e[n] - 500])
                }
            }, {
                key: "update",
                value: function() {
                    this.needsUpdate && (u(c(t.prototype), "update", this).call(this), this.needsUpdate = !1)
                }
            }]) && o(r.prototype, n), s && o(r, s), t
        }()
    },
    543: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "default", (function() {
            return vn
        }));
        var n = {};
        r.r(n), r.d(n, "escape", (function() {
            return xt
        })), r.d(n, "unescape", (function() {
            return Pt
        })), r.d(n, "default", (function() {
            return Ot
        }));
        var i = {};

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.r(i), r.d(i, "decode", (function() {
            return jt
        })), r.d(i, "encode", (function() {
            return zt
        }));
        var s = function() {
                function e(t, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._counter = t, this._action = r
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "decrement",
                    value: function() {
                        this._counter < 1 || (this._counter--, 0 === this._counter && this._action())
                    }
                }]) && a(t.prototype, r), n && a(t, n), e
            }(),
            o = r(10),
            l = r(0),
            u = r(13);
        ! function() {
            if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function() {
                    return (new Date).getTime()
                }, "now" in window.performance == !1) {
                var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
                window.performance.now = function() {
                    return Date.now() - e
                }
            }
        }();
        var c, h, d = d || (c = [], {
            getAll: function() {
                return c
            },
            removeAll: function() {
                c = []
            },
            add: function(e) {
                c.push(e)
            },
            remove: function(e) {
                var t = c.indexOf(e); - 1 !== t && c.splice(t, 1)
            },
            update: function(e) {
                if (0 === c.length) return !1;
                var t = 0;
                for (e = void 0 !== e ? e : window.performance.now(); t < c.length;) c[t].update(e) ? t++ : c.splice(t, 1);
                return !0
            }
        });
        d.Tween = function(e) {
            var t = e,
                r = {},
                n = {},
                i = {},
                a = 1e3,
                s = 0,
                o = !1,
                l = !1,
                u = !1,
                c = 0,
                h = null,
                f = d.Easing.Linear.None,
                p = d.Interpolation.Linear,
                m = [],
                v = null,
                g = !1,
                y = null,
                b = null,
                k = null;
            for (var w in e) r[w] = parseFloat(e[w], 10);
            this.to = function(e, t) {
                return void 0 !== t && (a = t), n = e, this
            }, this.start = function(e) {
                for (var a in d.add(this), l = !0, g = !1, h = void 0 !== e ? e : window.performance.now(), h += c, n) {
                    if (n[a] instanceof Array) {
                        if (0 === n[a].length) continue;
                        n[a] = [t[a]].concat(n[a])
                    }
                    void 0 !== r[a] && (r[a] = t[a], r[a] instanceof Array == !1 && (r[a] *= 1), i[a] = r[a] || 0)
                }
                return this
            }, this.stop = function() {
                return l ? (d.remove(this), l = !1, null !== k && k.call(t), this.stopChainedTweens(), this) : this
            }, this.stopChainedTweens = function() {
                for (var e = 0, t = m.length; e < t; e++) m[e].stop()
            }, this.delay = function(e) {
                return c = e, this
            }, this.repeat = function(e) {
                return s = e, this
            }, this.yoyo = function(e) {
                return o = e, this
            }, this.easing = function(e) {
                return f = e, this
            }, this.interpolation = function(e) {
                return p = e, this
            }, this.chain = function() {
                return m = arguments, this
            }, this.onStart = function(e) {
                return v = e, this
            }, this.onUpdate = function(e) {
                return y = e, this
            }, this.onComplete = function(e) {
                return b = e, this
            }, this.onStop = function(e) {
                return k = e, this
            }, this.update = function(e) {
                var l, d, k;
                if (e < h) return !0;
                for (l in !1 === g && (null !== v && v.call(t), g = !0), k = f(d = (d = (e - h) / a) > 1 ? 1 : d), n)
                    if (void 0 !== r[l]) {
                        var w = r[l] || 0,
                            S = n[l];
                        S instanceof Array ? t[l] = p(S, k) : ("string" == typeof S && (S = S.startsWith("+") || S.startsWith("-") ? w + parseFloat(S, 10) : parseFloat(S, 10)), "number" == typeof S && (t[l] = w + (S - w) * k))
                    }
                if (null !== y && y.call(t, k), 1 === d) {
                    if (s > 0) {
                        for (l in isFinite(s) && s--, i) {
                            if ("string" == typeof n[l] && (i[l] = i[l] + parseFloat(n[l], 10)), o) {
                                var C = i[l];
                                i[l] = n[l], n[l] = C
                            }
                            r[l] = i[l]
                        }
                        return o && (u = !u), h = e + c, !0
                    }
                    null !== b && b.call(t);
                    for (var _ = 0, R = m.length; _ < R; _++) m[_].start(h + a);
                    return !1
                }
                return !0
            }
        }, d.Easing = {
            Linear: {
                None: function(e) {
                    return e
                }
            },
            Quadratic: {
                In: function(e) {
                    return e * e
                },
                Out: function(e) {
                    return e * (2 - e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }
            },
            Cubic: {
                In: function(e) {
                    return e * e * e
                },
                Out: function(e) {
                    return --e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            },
            Quartic: {
                In: function(e) {
                    return e * e * e * e
                },
                Out: function(e) {
                    return 1 - --e * e * e * e
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }
            },
            Quintic: {
                In: function(e) {
                    return e * e * e * e * e
                },
                Out: function(e) {
                    return --e * e * e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            },
            Sinusoidal: {
                In: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Out: function(e) {
                    return Math.sin(e * Math.PI / 2)
                },
                InOut: function(e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            },
            Exponential: {
                In: function(e) {
                    return 0 === e ? 0 : Math.pow(1024, e - 1)
                },
                Out: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                InOut: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                }
            },
            Circular: {
                In: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Out: function(e) {
                    return Math.sqrt(1 - --e * e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            },
            Elastic: {
                In: function(e) {
                    var t, r = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = .4 * Math.asin(1 / r) / (2 * Math.PI), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
                },
                Out: function(e) {
                    var t, r = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = .4 * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
                },
                InOut: function(e) {
                    var t, r = .1,
                        n = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                }
            },
            Back: {
                In: function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                },
                Out: function(e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                },
                InOut: function(e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            },
            Bounce: {
                In: function(e) {
                    return 1 - d.Easing.Bounce.Out(1 - e)
                },
                Out: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                InOut: function(e) {
                    return e < .5 ? .5 * d.Easing.Bounce.In(2 * e) : .5 * d.Easing.Bounce.Out(2 * e - 1) + .5
                }
            }
        }, d.Interpolation = {
            Linear: function(e, t) {
                var r = e.length - 1,
                    n = r * t,
                    i = Math.floor(n),
                    a = d.Interpolation.Utils.Linear;
                return t < 0 ? a(e[0], e[1], n) : t > 1 ? a(e[r], e[r - 1], r - n) : a(e[i], e[i + 1 > r ? r : i + 1], n - i)
            },
            Bezier: function(e, t) {
                for (var r = 0, n = e.length - 1, i = Math.pow, a = d.Interpolation.Utils.Bernstein, s = 0; s <= n; s++) r += i(1 - t, n - s) * i(t, s) * e[s] * a(n, s);
                return r
            },
            CatmullRom: function(e, t) {
                var r = e.length - 1,
                    n = r * t,
                    i = Math.floor(n),
                    a = d.Interpolation.Utils.CatmullRom;
                return e[0] === e[r] ? (t < 0 && (i = Math.floor(n = r * (1 + t))), a(e[(i - 1 + r) % r], e[i], e[(i + 1) % r], e[(i + 2) % r], n - i)) : t < 0 ? e[0] - (a(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], n - r) - e[r]) : a(e[i ? i - 1 : 0], e[i], e[r < i + 1 ? r : i + 1], e[r < i + 2 ? r : i + 2], n - i)
            },
            Utils: {
                Linear: function(e, t, r) {
                    return (t - e) * r + e
                },
                Bernstein: function(e, t) {
                    var r = d.Interpolation.Utils.Factorial;
                    return r(e) / r(t) / r(e - t)
                },
                Factorial: (h = [1], function(e) {
                    var t = 1;
                    if (h[e]) return h[e];
                    for (var r = e; r > 1; r--) t *= r;
                    return h[e] = t, t
                }),
                CatmullRom: function(e, t, r, n, i) {
                    var a = .5 * (r - e),
                        s = .5 * (n - t),
                        o = i * i;
                    return (2 * t - 2 * r + a + s) * (i * o) + (-3 * t + 3 * r - 2 * a - s) * o + a * i + t
                }
            }
        };
        var f = d,
            p = r(43);

        function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(r), !0).forEach((function(t) {
                    g(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function g(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function y(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var b = function() {
            function e(t, r, n, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.camera = new RK.PerspectiveCamera(l.a.FOV, t / r, 1, 300), this.camera.view = this.getViewObjectFromZoom(1), this.currentCamera = "default", this.offsetEnabled = !0, this.lastOffsetUI = new RK.Vec2(0, 0), this.orthoOffset = new RK.Vec2(0, 0), this.zoom = 1, this.tlxOffset = 0, this.tlyOffset = 0, this.controls = new RK.OrbitControls(this, n.renderer.domElement), this.controls.enabled = !l.a.fixedCamera, this.controls.addEventListener("change", i), this.controls.addEventListener("start", (function() {
                    return u.a.emit("cameraMoveStart")
                })), Object.assign(this.controls, l.a.cameraControls), o.a.register(f.update, "start", "Orbit Camera Tween"), this.controls.update(), this.currentTween = void 0, this.usefulBones = {}, this.change(l.a.cameras.default, !0)
            }
            var t, r, n;
            return t = e, n = [{
                key: "objFromName",
                value: function(e) {
                    for (var t in "string" == typeof e && (e = Object.assign({}, l.a.cameras[e] || l.a.tokenCameras[e] || console.error("Could not find camera named", e), {
                            name: e
                        })), e) e[t] instanceof Function && (e[t] = e[t]());
                    for (var r in e.controls || {}) e.controls[r] instanceof Function && (e.controls[r] = e.controls[r]());
                    return e
                }
            }, {
                key: "make",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e = this.objFromName(e);
                    var n = new RK.PerspectiveCamera(e.FOV || l.a.FOV, t, 2, 100);
                    return n.position.fromArray(e.position), r && n.rotation.reorder("YZX"), n.rotation.fromArray(e.rotation), n.updateProjectionMatrix(!0), n.updateMatrixWorld(!0), n.updateMatrix(!0), n
                }
            }], (r = [{
                key: "transition",
                value: function(e) {
                    this.change(e, !0)
                }
            }, {
                key: "generateUsefulBonesArray",
                value: function() {
                    var e = this;
                    if (CK.display.getBone(0)) {
                        this.usefulBones = {};
                        var t = CK.display.getMeshes();
                        ["bodyUpper", "bodyLower", "mount"].forEach((function(r) {
                            t[r] && t[r].skeleton.bones.forEach((function(t) {
                                t && t.isUseful && (e.usefulBones[t.name] = t)
                            }))
                        }))
                    }
                }
            }, {
                key: "change",
                value: function(t) {
                    var r = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ((t = e.objFromName(t)).name && (this.currentCamera = t.name), CK.display.getBone(0)) {
                        this.generateUsefulBonesArray();
                        var a = -1 / 0;
                        Object.keys(this.usefulBones).forEach(function(e) {
                            this.usefulBones[e].getWorldPosition().y > a && (a = this.usefulBones[e].getWorldPosition().y, this.trackedObj = this.usefulBones[e])
                        }.bind(this))
                    }
                    var s = t && this.prevCameraObj && t.controls && this.prevCameraObj.controls && t.controls.mid !== this.prevCameraObj.controls.mid,
                        u = !this.prevCameraObj || void 0 === t.name || t.name !== this.prevCameraObj.name || i || ["racegenders", "racerandom"].indexOf(CK.character.data.meta.config_type) > -1,
                        c = CK.display.data && CK.display.data.settings.isUndo;
                    if ((u || s) && !c) {
                        s && !u && (n = !1);
                        var h = this.controls.target;
                        this.controls.fallbackTarget = (new RK.Vec3).fromArray(t.target);
                        var d = this.controls.getPolarAngle(),
                            p = this.controls.getAzimuthalAngle(),
                            m = this.camera.position.distanceTo(this.controls.target),
                            g = this.camera.fov || l.a.FOV,
                            y = this.camera.view ? Object.assign({}, this.camera.view) : this.getViewObjectFromZoom(1),
                            b = (new RK.Vec3).fromArray(t.target || [0, 0, 0]),
                            k = (new RK.Vec3).fromArray(t.position).sub(b),
                            w = (new RK.Spherical).setFromVec3(k),
                            S = w.phi,
                            C = w.theta,
                            _ = t.controls && t.controls.mid ? t.controls.mid : CK.Settings.cameraControls.maxDistance,
                            R = t.FOV || l.a.FOV,
                            T = this.getViewObjectFromZoom(t.controls && t.controls.zoomScale || 1);
                        t.name && t.controls && t.controls.fitToScreen && (T = this.getViewToFitModel(), b = this.controls.getTrackedLocation());
                        var M = v({}, h.toSimple(), {
                                polarAngle: d,
                                azimuthalAngle: p,
                                distance: m,
                                FOV: g,
                                t: 0
                            }),
                            x = v({}, b.toSimple(), {
                                polarAngle: S,
                                azimuthalAngle: C,
                                distance: _,
                                FOV: R,
                                t: 1
                            }),
                            P = function() {
                                r.controls.target.copy(b.toSimple()), r.camera.view = r.lerpViewOffset(y, T, 1), r.controls.setFromAngles(x.azimuthalAngle, x.polarAngle, x.distance), r.camera.fov = x.FOV, Object.assign(r.controls, l.a.cameraControls, t.controls || {}), t.controls && (r.controls.radius = t.controls.mid || r.controls.radius, r.controls.maxDistance = t.controls.max || r.controls.maxDistance, r.controls.minDistance = t.controls.min || r.controls.minDistance), r.controls.enabled = l.a.debug || (t.controls && void 0 !== t.controls.enabled ? !!t.controls.enabled : !l.a.fixedCamera), r.controls.enabled && r.controls.update(), r.camera.updateProjectionMatrix()
                            };
                        this.currentTween && this.currentTween.stop(), this.prevCameraObj && (n || t.transition) ? (this.currentTween = new f.Tween(M).to(x, 700).easing(f.Easing.Sinusoidal.InOut).onUpdate((function() {
                            r.controls.target.copy({
                                x: M.x,
                                y: M.y,
                                z: M.z
                            }), r.controls.setFromAngles(M.azimuthalAngle, M.polarAngle, M.distance), r.camera.fov = M.FOV, r.camera.view = r.lerpViewOffset(y, T, M.t), r.camera.updateProjectionMatrix(), o.a.requestAnimationRefresh()
                        })), this.currentTween.onComplete(P), this.currentTween.start()) : P()
                    }
                    this.prevCameraObj = t
                }
            }, {
                key: "toObj",
                value: function() {
                    return this.camera.updateMatrixWorld(!0), this.camera.updateProjectionMatrix(!0), this.camera.lookAt(this.controls.target), this.camera.updateMatrixWorld(!0), this.camera.updateProjectionMatrix(!0), JSON.stringify({
                        position: this.camera.getWorldPosition().toArray(),
                        rotation: this.camera.getWorldRotation().toArray(),
                        target: this.controls.target.toArray()
                    })
                }
            }, {
                key: "getOffsetX",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.renderManager.width,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!l.a.squareCamera && this.offsetEnabled && l.a.cameraOffset && !p.a.compact()) {
                        null === t && (t = this.camera.view && this.camera.view.width / this.camera.view.fullWidth || 1);
                        var r = document.getElementsByClassName("editor-main");
                        if (!r) return 0;
                        var n = Math.floor(e / 2.6);
                        return r.length && r[0].offsetWidth && (n = r[0].offsetWidth), Math.floor((n + 20) / 2) * t
                    }
                    return 0
                }
            }, {
                key: "getOffsetY",
                value: function() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.renderManager.height, 0
                }
            }, {
                key: "getPositionMaxDistance",
                value: function(e, t) {
                    e.distanceTo(t), Vec3.clone(e), e.sub()
                }
            }, {
                key: "lerpViewOffset",
                value: function(e, t, r) {
                    r = Math.max(0, Math.min(r, 1));
                    var n = Object.assign({}, e);
                    return n.fullWidth += (t.fullWidth - e.fullWidth) * r, n.fullHeight += (t.fullHeight - e.fullHeight) * r, n.offsetX = e.offsetX + (t.offsetX - e.offsetX) * r, n.offsetY += (t.offsetY - e.offsetY) * r, n.width += (t.width - e.width) * r, n.height += (t.height - e.height) * r, n.width > 0 && (this.controls.savedView = n), n
                }
            }, {
                key: "getViewObjectFromZoom",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e = Math.max(1, e);
                    var r = {
                        fullWidth: CK.renderManager.width,
                        fullHeight: CK.renderManager.height,
                        width: CK.renderManager.width / e,
                        height: CK.renderManager.height / e,
                        offsetX: t ? this.getOffsetX(CK.renderManager.width, 1 / e) : 0,
                        offsetY: t ? this.getOffsetY(CK.renderManager.height, 1 / e) : 0
                    };
                    return r.offsetX += CK.renderManager.width * (1 - 1 / e) / 2, r.offsetY += CK.renderManager.height * (1 - 1 / e) / 2, r
                }
            }, {
                key: "getViewToFitModel",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.controls.getHeightAtDepth(),
                        r = Math.max((this.trackedObj ? this.trackedObj.getWorldPosition().y : this.controls.fallbackTarget.y) + 1.5, 4);
                    return this.getViewObjectFromZoom(t / r, e)
                }
            }, {
                key: "setViewToFitModel",
                value: function() {
                    this.camera.view = this.getViewToFitModel()
                }
            }, {
                key: "setOverride",
                value: function(e) {
                    this.override = e, CK.renderManager.camera = e
                }
            }, {
                key: "removeOverride",
                value: function() {
                    this.override = void 0, CK.renderManager.camera = this.camera
                }
            }, {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.renderManager.width,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CK.renderManager.height,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.zoom, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : this.tlxOffset, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this.tlyOffset, this.override || this.camera);
                    if (l.a.squareCamera) {
                        i.aspect = 1;
                        var a = 500;
                        i.setViewOffset(a, a, -(e - a) / 2, -(t - a) / 2, e, t), i.view.offsetX += r, i.view.offsetY += n
                    } else if (i.aspect = e / t, i.view && CK.renderManager.width > 0) this.scaleViewOffset(), Object.assign(i.view, this.controls.savedView), i.view.offsetX += r * (i.view.width / i.view.fullWidth), i.view.offsetY += n * (i.view.height / i.view.fullHeight);
                    else if (i instanceof RK.OrthographicCamera) {
                        var s = 8;
                        this.override ? (i.left += .005 * r, i.right += .005 * r, i.top += .005 * n, i.bottom += .005 * n) : (i.left = -s * i.aspect + this.orthoOffset.x, i.right = s * i.aspect + this.orthoOffset.x, i.top = s + this.orthoOffset.y, i.bottom = -s + this.orthoOffset.y)
                    }
                    i.updateProjectionMatrix(!0), i.updateMatrixWorld(!0)
                }
            }, {
                key: "scaleViewOffset",
                value: function() {
                    if (this.camera && this.camera.view && !CK.Settings.squareCamera) {
                        this.ensureValidView();
                        var e = CK.renderManager.width !== this.camera.view.fullWidth || CK.renderManager.height !== this.camera.view.fullHeight,
                            t = this.camera.view.height / this.camera.view.fullHeight,
                            r = CK.renderManager.width - this.camera.view.fullWidth,
                            n = CK.renderManager.height - this.camera.view.fullHeight;
                        this.camera.view.fullWidth = CK.renderManager.width, this.camera.view.fullHeight = CK.renderManager.height, this.camera.view.width = this.camera.view.fullWidth * t, this.camera.view.height = this.camera.view.fullHeight * t, this.camera.view.offsetX += r / 2 * (1 - t), this.camera.view.offsetY += n / 2 * (1 - t), e && (this.camera.view.offsetX += this.getOffsetX() - this.lastOffsetUI.x, this.camera.view.offsetY += this.getOffsetY() - this.lastOffsetUI.y, this.controls.savedView = this.camera.view), this.camera.view.offsetX = Math.max(this.camera.view.offsetX, this.getOffsetX()), this.camera.view.offsetY = Math.max(this.camera.view.offsetY, this.getOffsetY()), this.lastOffsetUI.set(this.getOffsetX(), this.getOffsetY())
                    }
                }
            }, {
                key: "ensureValidView",
                value: function() {
                    this.camera.view.width || (console.warn("Invalid View. Setting Valid view"), this.setViewToFitModel(), this.controls.savedView = this.camera.view)
                }
            }, {
                key: "disableOffset",
                value: function() {
                    this.offsetEnabled = !1, this.resize()
                }
            }, {
                key: "enableOffset",
                value: function() {
                    l.a.cameraOffset && (this.offsetEnabled = !0), this.resize()
                }
            }, {
                key: "setOrthoOffset",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.orthoOffset.set(e, t)
                }
            }, {
                key: "getCurrentObj",
                value: function() {
                    var e = this.camera;
                    return {
                        position: e.position.toArray(),
                        rotation: e.rotation.toArray(),
                        FOV: e.fov
                    }
                }
            }, {
                key: "prevCameraName",
                get: function() {
                    return this.prevCameraObj && this.prevCameraObj.name
                }
            }]) && y(t.prototype, r), n && y(t, n), e
        }();

        function k(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function w(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var S = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._renderTarget = new RK.WebGLRenderTarget(e.size, e.size, {
                    minFilter: RK.LinearFilter,
                    magFilter: RK.NearestFilter,
                    format: RK.RGBAFormat
                }), this.canvas = document.createElement("canvas"), this.canvas.width = e.size, this.canvas.height = e.size, this.context = this.canvas.getContext("2d"), this.canvasFinal = document.createElement("canvas"), this.canvasFinal.width = e.size, this.canvasFinal.height = e.size, this.contextFinal = this.canvasFinal.getContext("2d"), this.contextFinal.translate(0, e.size), this.contextFinal.scale(1, -1), this._requests = [], o.a.register((function() {
                    return t._next()
                }), "end", "Scheme Thumb")
            }
            var t, r, n;
            return t = e, (r = [{
                key: "_getCam",
                value: function() {
                    var e = b.objFromName(CK.display.getCamera(!0)),
                        t = new RK.PerspectiveCamera(e.FOV || l.a.FOV, 1, 2, 100);
                    t.view = CK.orbitCamera.getViewToFitModel(!1);
                    var r = CK.orbitCamera.controls.getTrackedLocation();
                    r.y = CK.orbitCamera.controls.getTrackedLocation().y - .25;
                    var n = (new RK.Vec3).fromArray(e.position);
                    return n.y = CK.orbitCamera.controls.getTrackedLocation().y - .25, n.sub(r).setLength(CK.Settings.cameraControls.maxDistance).add(r), t.position.copy(n), t.lookAt(r), t.updateProjectionMatrix(!0), t
                }
            }, {
                key: "_next",
                value: function() {
                    this._requests.length && !CK.character.hasTempTarget() && this._render.apply(this, k(this._requests.shift()))
                }
            }, {
                key: "_render",
                value: function(t, r, n) {
                    var i = CK.display.colorBake.tempSchemes[r];
                    for (var a in CK.display.colorBake.applyTempScheme(r, t), CK.display.colorBake.refresh(), CK.display.meshes) CK.display.meshes[a].material.occlusionStrength = 0;
                    this.renderer.setClearColor(new RK.Color(.2, .2, .2), 0);
                    var s = CK.environment.visibleGround,
                        o = CK.environment.visibleCube;
                    CK.environment.visibleBG = !1, this.renderer.clearTarget(this._renderTarget, !0, !0, !0), this.renderer.render(CK.scene, this._getCam(), this._renderTarget, !1), CK.environment.visibleGround = s, CK.environment.visibleCube = o;
                    var l = new Uint8Array(4 * e.size * e.size),
                        u = this.renderer.getContext();
                    u.readPixels(0, 0, e.size, e.size, u.RGBA, u.UNSIGNED_BYTE, l);
                    var c = this.context.createImageData(e.size, e.size);
                    for (var h in c.data.set(l), this.context.putImageData(c, 0, 0), i ? CK.display.colorBake.applyTempScheme(r, i) : CK.display.colorBake.removeAllTemp(), this.contextFinal.clearRect(0, 0, e.size, e.size), this.contextFinal.drawImage(this.canvas, 0, 0, e.size, e.size), CK.display.meshes) CK.display.meshes[h].material.occlusionStrength = CK.display.sim.occlusionStrength;
                    n(this.canvasFinal.toDataURL("image/png")), this._requests.length || CK.GameLoop.requestRenderRefresh()
                }
            }, {
                key: "request",
                value: function(e, t, r) {
                    this.cancelRequest(r), this._requests.push([e, t, r])
                }
            }, {
                key: "cancelRequest",
                value: function(e) {
                    this._requests = this._requests.filter((function(t) {
                        return t[2] !== e
                    }))
                }
            }, {
                key: "renderer",
                get: function() {
                    return CK.renderManager.renderer
                }
            }]) && w(t.prototype, r), n && w(t, n), e
        }();
        S.size = 256;
        var C = r(5);

        function _(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var R = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "getAvailable",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.data;
                    var e = CK.Options.products;
                    return e = e.filter((function(e) {
                        return "hidden" !== e.visibility
                    }))
                }
            }, {
                key: "getScale",
                value: function() {
                    console.log("Inheriting class must implement")
                }
            }, {
                key: "getSelectedProduct",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.data,
                        t = this.getAvailable(e),
                        r = e.physical;
                    if (r) {
                        var n = t.find((function(e) {
                            return e.product_name === r
                        }));
                        if (n) return n;
                        var i = CK.Options.productsByName[r];
                        if (i) return t.find((function(e) {
                            return e.material === i.material
                        }))
                    }
                }
            }, {
                key: "getSize",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CK.data, console.log("Inheriting class must implement")
                }
            }], (r = null) && _(t.prototype, r), n && _(t, n), e
        }();

        function T(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var M = VN.getGPUTier,
            x = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "init",
                    value: function() {
                        this.specs = {
                            rendering: "",
                            failedSpecs: {},
                            renderingSpecs: {},
                            platform: navigator.platform,
                            userAgent: navigator.userAgent,
                            mobile: this._getMobile(),
                            screen: {},
                            browser: this._getBrowser(),
                            majorPerformanceCaveat: !1,
                            touchEnabled: e.touchEnabled(),
                            cssGrid: "string" == typeof document.createElement("div").style.grid
                        }, this._getScreen(), this._getWebGl(), "supported" !== this.specs.rendering || l.a.forceExpensive || this._graphicsMode(), this.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Reporting.spec("renderingSupport", this.specs.rendering)
                    }
                }, {
                    key: "shittyGraphicsCard",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "shittyBrowser",
                    value: function() {
                        return navigator.userAgent.includes("YaBrowser")
                    }
                }, {
                    key: "touchEnabled",
                    value: function() {
                        return "ontouchstart" in document.documentElement
                    }
                }, {
                    key: "isHighResolutionDisplay",
                    value: function() {
                        if (window.matchMedia) {
                            var e = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                            return e && e.matches || window.devicePixelRatio > 1
                        }
                    }
                }, {
                    key: "_reduceToMinimumPerformance",
                    value: function() {
                        l.a.rtShadows = !1, l.a.occlusion = !1, l.a.sunOcclusion = !1, l.a.skinInfluenceMax = Math.min(l.a.skinInfluenceMax, 4), l.a.normalMaps = !1, l.a.twinsies = !1, l.a.progressiveAA = !1, l.a.snapBoundaries = !1, l.a.renderedThumbnails = !1, l.a.allowBakedPhysical = !1, l.a.allowBakedEmissive = !1, l.a.retinaEnabled = !1, l.a.colorTextureSize = Math.pow(2, Math.floor(Math.log(screen.height) / Math.log(2))), l.a.eyeDisableSpecular = !0, l.a.colorTextureSize > 1024 && (l.a.colorTextureSize = 1024)
                    }
                }, {
                    key: "_reduceToRegularPerformance",
                    value: function() {
                        l.a.occlusionDepthTileDim = Math.max(l.a.occlusionDepthTileDim / 4, 1), l.a.vertexOcclusion ? l.a.occlusionSampleCount = 16 : (l.a.occlusionTextureSize = 512, l.a.occlusionSampleCount = 1024, l.a.occlusionBlendCount = 75), l.a.sunOcclusionSampleCount = 64, l.a.twinsies = !1, l.a.progressiveAA = !1, l.a.snapBoundaries = !1, l.a.allowBakedEmissive = !1, l.a.colorTextureSize = Math.pow(2, Math.ceil(Math.log(screen.height) / Math.log(2))), l.a.colorTextureSize > 1024 && (l.a.colorTextureSize = 1024)
                    }
                }, {
                    key: "_reduceToGoodPerformance",
                    value: function() {
                        l.a.occlusionDepthTileDim = Math.max(l.a.occlusionDepthTileDim / 2, 1), l.a.vertexOcclusion ? l.a.occlusionSampleCount = 40 : (l.a.occlusionTextureSize = 512, l.a.occlusionSampleCount = 2048, l.a.occlusionBlendCount = 150), l.a.sunOcclusionSampleCount = 128
                    }
                }, {
                    key: "_graphicsMode",
                    value: function() {
                        var e = this;
                        try {
                            (M({
                                glContext: this._getWebGl(),
                                mobileBenchmarkPercentage: [0, 25, 75],
                                desktopBenchmarkPercentage: [0, 15, 85]
                            }) || {}).tier
                        } catch (e) {
                            console.log("Gpu Tier Failed.")
                        }
                        var t = [{
                            name: "min",
                            requirements: {
                                vertexAttributes: this.check("MAX_VERTEX_ATTRIBS", 16),
                                textureImageUnits: this.check("MAX_TEXTURE_IMAGE_UNITS", 8),
                                vertexUniformVectors: this.check("MAX_VERTEX_UNIFORM_VECTORS", 128),
                                textureSize: this.check("MAX_TEXTURE_SIZE", 1024),
                                fragmentUniformVectors: this.check("MAX_FRAGMENT_UNIFORM_VECTORS", 64),
                                vertexTextureImageUnits: this.check("MAX_VERTEX_TEXTURE_IMAGE_UNITS", 1)
                            },
                            failureResult: function() {
                                return e.specs.rendering = "requirementsNotMet"
                            }
                        }, {
                            name: "regular",
                            requirements: {
                                majorPerformanceCaveat: !this.specs.majorPerformanceCaveat,
                                blacklistedGraphicsCard: !this.shittyGraphicsCard(),
                                blacklistedBrowser: !this.shittyBrowser(),
                                gpuBadTier: this.check("OES_texture_float_linear") && this.check("OES_texture_float")
                            },
                            failureResult: function() {
                                return e._reduceToMinimumPerformance()
                            }
                        }, {
                            name: "good",
                            requirements: {
                                fragmentUniformVectors: this.check("MAX_FRAGMENT_UNIFORM_VECTORS", 221),
                                vertexUniformVectors: this.check("MAX_VERTEX_UNIFORM_VECTORS", 253),
                                textureFloatLinear: this.check("OES_texture_float_linear"),
                                floatTextures: this.check("OES_texture_float")
                            },
                            failureResult: function() {
                                return e._reduceToRegularPerformance()
                            }
                        }, {
                            name: "max",
                            requirements: {
                                textureImageUnits: this.check("MAX_RENDERBUFFER_SIZE", 8192),
                                desktop: !p.a.compact()
                            },
                            failureResult: function() {
                                return e._reduceToGoodPerformance()
                            }
                        }];
                        this.failureReasons = "", this.highestTier = "None", this.defaultTier = "None";
                        for (var r = l.a.graphics, n = t.findIndex((function(e) {
                                return e.name === r
                            })), i = t.length, a = -1, s = 0; s < i; ++s) {
                            var o = t[s],
                                u = [];
                            for (var c in o.requirements) o.requirements[c] || u.push(c);
                            if (u.length > 0) {
                                var h = "Graphics " + this.highestTier + " because " + u.join(", ");
                                Reporting.spec("renderTierFailure", this.highestTier + "_" + u.join("_")), this.failureReasons = h;
                                break
                            }
                            a = s
                        }
                        a >= 0 && (this.defaultTier = t[a].name), r && n >= 0 ? (a = n, console.log("Force Graphics: " + r), this.failureReasons = "Manually set graphics to" + r, Reporting.spec("renderTier", "manually_" + r)) : Reporting.spec("renderTier", this.highestTier), a >= 0 && (this.highestTier = t[a].name);
                        var d = t[a + 1];
                        d && d.failureResult()
                    }
                }, {
                    key: "_getMobile",
                    value: function() {
                        var e = !1;
                        return function(t, r) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada|android|ipad|playbook|silk\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: "_getWebGl",
                    value: function() {
                        if (this.specs.webglParameters = void 0, window.WebGLRenderingContext) {
                            var e = document.createElement("canvas"),
                                t = void 0;
                            try {
                                (t = e.getContext("webgl", {
                                    failIfMajorPerformanceCaveat: !0
                                }) || e.getContext("experimental-webgl", {
                                    failIfMajorPerformanceCaveat: !0
                                })) || (this.specs.majorPerformanceCaveat = !0, t = e.getContext("webgl") || e.getContext("experimental-webgl"))
                            } catch (e) {
                                return void(this.specs.rendering = "noWebGlGraphics")
                            }
                            if (null != t) {
                                this.specs.rendering = "supported";
                                var r = this._getWebGlParameters(t);
                                this.specs.renderingSpecs = r
                            } else this.specs.rendering = "webglDisabled"
                        } else this.specs.rendering = "noWebGlBrowser"
                    }
                }, {
                    key: "_getWebGlParameters",
                    value: function(e) {
                        var t = ["VENDOR", "VERSION", "RENDERER", "SHADING_LANGUAGE_VERSION", "RED_BITS", "GREEN_BITS", "BLUE_BITS", "ALPHA_BITS", "DEPTH_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VARYING_VECTORS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_VIEWPORT_DIMS", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE"],
                            r = {};
                        for (var n in t) {
                            var i = t[n];
                            r[i] = e.getParameter(e[i])
                        }
                        var a = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_es3", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context"];
                        for (var s in a) {
                            var o = a[s];
                            r[o] = !!e.getExtension(o)
                        }
                        if (r.OES_texture_float) {
                            var l = !1;
                            try {
                                var u = e.createTexture();
                                try {
                                    e.bindTexture(e.TEXTURE_2D, u);
                                    var c = new Float32Array(1024);
                                    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.FLOAT, c), l = e.getError() === e.NO_ERROR, e.bindTexture(e.TEXTURE_2D, null)
                                } catch (e) {}
                                e.deleteTexture(u)
                            } catch (e) {}
                            r.OES_texture_float = l
                        }
                        var h = e.getExtension("WEBGL_debug_renderer_info");
                        return null != h && (r.UNMASKED_RENDERER_WEBGL = e.getParameter(h.UNMASKED_RENDERER_WEBGL), r.UNMASKED_VENDOR_WEBGL = e.getParameter(h.UNMASKED_VENDOR_WEBGL)), r
                    }
                }, {
                    key: "_getScreen",
                    value: function() {
                        this.specs.screen = {
                            screen: {
                                width: screen.width,
                                height: screen.height
                            },
                            window: {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        }
                    }
                }, {
                    key: "_getBrowser",
                    value: function() {
                        try {
                            var e, t = navigator.userAgent,
                                r = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                            return /trident/i.test(r[1]) ? {
                                name: "IE",
                                version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
                            } : "Chrome" === r[1] && null != (e = t.match(/\bOPR|Edge\/(\d+)/)) ? {
                                name: "Opera",
                                version: e[1]
                            } : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && r.splice(1, 1, e[1]), {
                                name: r[0],
                                version: r[1]
                            })
                        } catch (e) {
                            return {
                                name: "unknown",
                                version: 0,
                                compatible: "unknown"
                            }
                        }
                    }
                }, {
                    key: "_checkCompatible",
                    value: function() {}
                }, {
                    key: "check",
                    value: function(e, t) {
                        return !!l.a.ignoreSpecs || void 0 !== this.specs.renderingSpecs[e] && (void 0 === t ? !!this.specs.renderingSpecs[e] : this.specs.renderingSpecs[e] >= t)
                    }
                }], (r = null) && T(t.prototype, r), n && T(t, n), e
            }(),
            P = r(21),
            O = r(19);

        function K(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function A(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var E = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "getMappingsForSlots",
                value: function(e) {
                    var t = {},
                        r = CK.data.parts;
                    for (var n in CK.data.decals, e) {
                        var i = e[n];
                        if (i in r) {
                            var a = C.a.getPart(r[i]);
                            if (void 0 !== a.surfaces)
                                for (var s in a.surfaces) t[a.surfaces[s] + (a.colors[s] && a.colors[s].count ? a.colors[s].count : "")] = !0
                        }
                        console.log("not set up properly for new decal system")
                    }
                    return t
                }
            }, {
                key: "getPaintPotThumbnailsForSlots",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = this.getMappingsForSlots(e);
                    for (var n in r) {
                        var i, a = n.split("-")[0],
                            s = [];
                        for (var o in C.a.paintsBykeyword[a] ? s.push(C.a.paintsBykeyword[a]) : C.a.paintsBykeyword[a.slice(0, -1)] && s.push(C.a.paintsBykeyword[a.slice(0, -1)]), t) s.push(C.a.paintsBykeyword[t[o]]);
                        for (var l in CK.data.shaders) s.push({
                            id: l,
                            gradient: CK.data.shaders[l].gradient
                        });
                        s.length || s.push(C.a.paintsBykeyword.primary || C.a.paintsBykeyword.general), r[n] = (i = []).concat.apply(i, s)
                    }
                    return r
                }
            }, {
                key: "applyColorOnSlots",
                value: function(e, t, r) {
                    var n = {};
                    for (var i in t) {
                        var a = t[i];
                        n[a] = {}, n[a][r] = e
                    }
                    CK.tweak({
                        paints: n
                    })
                }
            }, {
                key: "addShaders",
                value: function(e) {
                    var t = 1,
                        r = {};
                    return e.map((function(e) {
                        for (var n = C.a.shaders[e] || console.error("Missing shader", e) || C.a.shaders[1]; t in CK.data.shaders;) t++;
                        r[t] = n.clone(), t++
                    })), r
                }
            }, {
                key: "applyShader",
                value: function(e, t, r) {
                    console.warn("Need to implement removal of previously assigned shader, also find identical and use that if it exists.");
                    var n = CK.ColorManager.addShaders([e]),
                        i = Object.keys(n)[0],
                        a = {};
                    t.map((function(e) {
                        return a[e] = K({}, r, i)
                    })), CK.tweak({
                        shaders: n,
                        paints: a
                    })
                }
            }, {
                key: "findIdentical",
                value: function(e, t) {
                    for (var r in CK.data.shaders) {
                        var n = CK.data.shaders[r];
                        if (e === n.presetID && n.matches(t)) return r
                    }
                }
            }, {
                key: "addShaderAndTweak",
                value: function(e, t) {
                    var r = this.addShaders(e);
                    for (var n in r) r[n].isCopy = !0;
                    return CK.tweak({
                        shaders: r
                    }), Object.keys(r)
                }
            }, {
                key: "deleteShader",
                value: function(e) {
                    var t = {};
                    for (var r in CK.data.paints)
                        for (var n in t[r] = {}, CK.data.paints[r]) CK.data.paints[r][n] === e && (t[r][n] = void 0);
                    CK.tweak({
                        shaders: K({}, e, void 0),
                        paints: t
                    })
                }
            }, {
                key: "copyShader",
                value: function(e) {
                    var t = CK.data.shaders[e].clone();
                    t.name = this.getNextShaderName(t.name), t.isCopy = !0;
                    var r = this.getNextAvailableID();
                    return CK.tweak({
                        shaders: K({}, r, t)
                    }), r
                }
            }, {
                key: "getNextShaderName",
                value: function(e) {
                    for (var t = Object.values(CK.data.shaders); t.find((function(t) {
                            return t.name === e
                        }));) {
                        var r = e.split(" "),
                            n = r[r.length - 1],
                            i = parseInt(n);
                        isNaN(i) ? e += " 1" : e = r.slice(0, -1).join(" ") + " " + (i + 1)
                    }
                    return e
                }
            }, {
                key: "getNextAvailableID",
                value: function() {
                    for (var e = 1; e in CK.data.shaders;) e++;
                    return e
                }
            }, {
                key: "getSchemeShader",
                value: function(e, t, r) {
                    var n = C.a.slots[t].scheme_group || "outfit",
                        i = e.schemes[n];
                    if (i && n) {
                        var a = C.a.getScheme(n, i);
                        if (a) return C.a.shaders[a[r] || a[r.slice(0, -1)] || a[r.slice(0, -2)] || C.a.getSchemePaint(n, "default", r) || C.a.getSchemePaint(n, "default", r.slice(0, -1)) || console.error("No color scheme setting for", r) || 1]
                    }
                }
            }, {
                key: "loopSchemeShaders",
                value: function(e) {
                    var t = CK.data,
                        r = t.parts,
                        n = t.paints;
                    for (var i in r) {
                        var a = r[i],
                            s = C.a.getPart(a);
                        for (var o in s.mappings) {
                            var l = s.mappings[o];
                            if (!n[i] || !n[i][l]) {
                                var u = this.getSchemeShader(t, i, l);
                                u && e(i, l, u)
                            }
                        }
                    }
                }
            }, {
                key: "redirectHit",
                value: function(e, t) {
                    if (t.eye && !this.slotIsEyeMesh(e.slot)) {
                        var r = this.getEyeSlots(),
                            n = r.filter((function(t) {
                                return t.startsWith(e.slot)
                            })),
                            i = r.filter((function(e) {
                                return e.startsWith("eye") && 4 === e.length
                            }));
                        return (n.length > 0 ? n : i.length > 0 ? i : r).map((function(e) {
                            var t = CK.modded.parts[e],
                                r = t.getRenderIDMapping(0);
                            return {
                                part: t,
                                patch: 0,
                                mapping: r,
                                hover: null,
                                slot: e
                            }
                        }))
                    }
                    return [e]
                }
            }, {
                key: "getEyeSlots",
                value: function() {
                    var e = this;
                    return Object.keys(CK.modded.parts).filter((function(t) {
                        return e.slotIsEyeMesh(t)
                    }))
                }
            }, {
                key: "slotIsEyeMesh",
                value: function(e) {
                    var t = CK.modded.parts[e];
                    if (!t) return !1;
                    var r = CK.Options.getPart(t.id);
                    if (!r) return !1;
                    var n = r.colors;
                    return 1 === n.length && "eye" === n[0].surface.name
                }
            }], (r = null) && A(t.prototype, r), n && A(t, n), e
        }();

        function B(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var I = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, n;
                return t = e, n = [{
                    key: "init",
                    value: function() {
                        this.reflectionCube = null, this.materialVisualizationMode = ""
                    }
                }, {
                    key: "makeMaterial",
                    value: function(e, t) {
                        return new SK.Physical(this.getOptionsFromGeo(e, t))
                    }
                }, {
                    key: "assignLighting",
                    value: function(e, t) {
                        for (var r in (e = Object.assign({}, e)).lighting = Object.assign({}, e.lighting), e.lighting) e.lighting[r] = Object.assign({}, e.lighting[r], t[r] || {});
                        return e
                    }
                }, {
                    key: "getSim",
                    value: function(e, t) {
                        var r = l.a.materialSims,
                            n = r[e] || r[e.split("_")[0]] || r[l.a.materialSim] || r.default;
                        for (var i in n = Object.assign({}, r.default, n), r.default.lighting) n.lighting[i] = Object.assign({}, r.default.lighting[i], n.lighting[i]);
                        for (var a in n) "function" == typeof n[a].clone && (n[a] = n[a].clone());
                        return n.envMap = this.reflectionCube, void 0 !== t && (n.diffuse = new RK.Color(t[0] / 255, t[1] / 255, t[2] / 255)), n
                    }
                }, {
                    key: "getOptionsFromGeo",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                paths: {}
                            },
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            n = arguments.length > 3 ? arguments[3] : void 0;
                        if (t.collision) return {
                            options: {},
                            textures: {}
                        };
                        var i = "TextBufferGeometry" === e.type,
                            a = void 0 !== e.attributes && void 0 !== e.attributes.uv,
                            s = !!t.slot && C.a.slots[t.slot],
                            o = l.a.occlusion,
                            u = r && r.modded.settings.hiRez,
                            c = !i && n && t.getNormalPath(u, n),
                            h = !!((u && l.a.hiRezNormalMaps || !u && l.a.normalMaps) && a && c),
                            d = !!(!u && h && a && t.slot in l.a.slots && l.a.slots[t.slot].normalMap2),
                            f = !a && l.a.occlusion || l.a.vertexOcclusion,
                            p = !(!l.a.preBakedOcclusion || !h),
                            m = s && !o && l.a.occlusion,
                            v = l.a.color ? l.a.subsurface : l.a.SubsurfaceMode.None,
                            g = Math.min(e.skinInfluenceCount > 4 ? 8 : 4, l.a.skinInfluenceMax || 4);
                        !a && l.a.forceNormalMaps && console.error("No UVS for part! It is inconsistent from other parts and will take longer to compile.", t);
                        var y = CK.Settings.color,
                            b = l.a.normalMaps && CK.Settings.allowBakedNormal,
                            k = l.a.allowBakedPhysical && CK.Settings.color,
                            w = l.a.allowBakedEmissive && CK.Settings.color,
                            S = {
                                options: {
                                    skinning: !!e.skinned,
                                    uv: a,
                                    uv2: !!a,
                                    morphTargets: "morphAttributes" in e && "position" in e.morphAttributes,
                                    morphNormals: u && "morphAttributes" in e && "normal" in e.morphAttributes && t.blendNormals,
                                    occlusion: o,
                                    shadows: l.a.rtShadows && !l.a.sunOcclusion,
                                    colors: !1,
                                    env: l.a.useEnvironmentMapInShader,
                                    vertexOcclusion: f,
                                    occlusionTextureSize: l.a.occlusionTextureSize,
                                    preBakedOcclusion: p,
                                    occlusionCompensate: m,
                                    lights: !0,
                                    subsurface: v,
                                    skinInfluenceCount: g,
                                    colorAtlas: y,
                                    normalAtlas: b,
                                    physicalAtlas: k,
                                    emissiveAtlas: w
                                },
                                textures: {}
                            };
                        return l.a.forceNormalMaps && !u && l.a.normalMaps && (S.options.normalMap = !0), h && (S.textures.normalMap = c), d && (S.textures.normalMap2 = O.a.getNormalMap2(t, u)), S
                    }
                }], (r = null) && B(t.prototype, r), n && B(t, n), e
            }(),
            D = r(39),
            F = r(49),
            U = r(53),
            j = r(37),
            z = r(46);

        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function L(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function V(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function G(e, t, r) {
            return t && V(e.prototype, t), r && V(e, r), e
        }
        var W = function() {
                function e() {
                    L(this, e)
                }
                return G(e, null, [{
                    key: "Create",
                    value: function(e, t) {
                        var r = {
                            inner: [],
                            outer: []
                        };
                        try {
                            var n = e.ckSeamHalfEdge,
                                i = e.ckSeamOriginalIndices;
                            if (void 0 === n) return r;
                            var a = {},
                                s = function(e) {
                                    return void 0 === a[e.uuid] && (a[e.uuid] = {
                                        geometry: e,
                                        innerTriArrays: [],
                                        outerTriArrays: []
                                    }), a[e.uuid]
                                },
                                o = Object.keys(e.attributes).filter((function(e) {
                                    return t.every((function(t) {
                                        return e in t.attributes
                                    }))
                                })),
                                l = o.map((function(t) {
                                    return e.attributes[t].itemSize
                                })),
                                u = function(a) {
                                    var u = e.ckSeams[a];
                                    for (var c in e._boundaryMap = [], t.forEach((function(e) {
                                            return e._boundaryMap = []
                                        })), e.ckBoundaries) {
                                        for (var h = e.ckBoundaries[c], d = null, f = null, p = 0; p < t.length; ++p) {
                                            var m = t[p];
                                            for (var v in m.ckBoundaries || []) {
                                                var g = m.ckBoundaries[v];
                                                h.edgeCount == g.edgeCount && h.position.clone().sub(g.position).length() < .01 && (d = m, f = g)
                                            }
                                        }
                                        if (f) {
                                            var y = h.triEdge,
                                                b = f.triEdge,
                                                k = d.ckSeamHalfEdge,
                                                w = d.ckSeamOriginalIndices,
                                                S = b,
                                                C = e.attributes.position.array,
                                                _ = d.attributes.position.array,
                                                R = e.index.array,
                                                T = d.index.array,
                                                M = -1,
                                                x = 1e20,
                                                P = Math.floor(y / 3),
                                                O = y % 3,
                                                K = i[P],
                                                A = R[3 * K + O],
                                                E = R[3 * K + (O + 1) % 3],
                                                B = new RK.Vec3(C[3 * A + 0], C[3 * A + 1], C[3 * A + 2]),
                                                I = new RK.Vec3(C[3 * E + 0], C[3 * E + 1], C[3 * E + 2]),
                                                D = new Set;
                                            do {
                                                var F = Math.floor(b / 3),
                                                    U = b % 3,
                                                    j = w[F],
                                                    z = T[3 * j + U],
                                                    N = T[3 * j + (U + 1) % 3],
                                                    L = new RK.Vec3(_[3 * z + 0], _[3 * z + 1], _[3 * z + 2]),
                                                    V = new RK.Vec3(_[3 * N + 0], _[3 * N + 1], _[3 * N + 2]),
                                                    G = L.sub(I).length() + V.sub(B).length();
                                                G < x && (M = b, x = G), b = 3 * F + (U = (U + 2) % 3);
                                                for (var W = new Set; 4294967295 !== k[b];) {
                                                    if (b = k[b], b = 3 * (F = Math.floor(b / 3)) + (U = ((U = b % 3) + 2) % 3), W.has(b)) return {
                                                        v: r
                                                    };
                                                    W.add(b)
                                                }
                                                if (D.has(b)) return {
                                                    v: r
                                                };
                                                D.add(b)
                                            } while (b != S);
                                            S = b = M;
                                            var X = e._boundaryMap,
                                                Y = d._boundaryMap,
                                                J = new Set;
                                            do {
                                                X[y] = {
                                                    geometry: d,
                                                    triEdge: b
                                                }, Y[b] = {
                                                    geometry: e,
                                                    triEdge: y
                                                };
                                                var Z = Math.floor(y / 3),
                                                    Q = y % 3;
                                                y = 3 * Z + (Q = (Q + 1) % 3);
                                                for (var $ = new Set; 4294967295 !== n[y];) {
                                                    if (y = n[y], y = 3 * (Z = Math.floor(y / 3)) + (Q = ((Q = y % 3) + 1) % 3), $.has(y)) return {
                                                        v: r
                                                    };
                                                    $.add(y)
                                                }
                                                var ee = Math.floor(b / 3),
                                                    te = b % 3;
                                                for (b = 3 * ee + (te = (te + 2) % 3), $ = new Set; 4294967295 !== k[b];) {
                                                    if (b = k[b], b = 3 * (ee = Math.floor(b / 3)) + (te = ((te = b % 3) + 2) % 3), $.has(b)) return {
                                                        v: r
                                                    };
                                                    $.add(b)
                                                }
                                                if (J.has(b)) return {
                                                    v: r
                                                };
                                                J.add(b)
                                            } while (b != S)
                                        }
                                    }
                                    var re = new q(e, u),
                                        ne = re.clone(),
                                        ie = [],
                                        ae = re.getOppositeHalfEdge(),
                                        se = new H;
                                    do {
                                        re = re.getNextHalfEdge(1);
                                        for (var oe = new H; !re.isUvSeam() && !re.isBoundary();) {
                                            if (re = (re = re.getOppositeHalfEdge()).getNextHalfEdge(1), oe.has(re)) return {
                                                v: r
                                            };
                                            oe.add(re)
                                        }
                                        for (var le = [], ue = 0; ue < 3; ++ue) le.push(re.getNextHalfEdge(ue));
                                        if (ae.isValid()) {
                                            var ce = ae.clone();
                                            ae = ae.getNextHalfEdge(2);
                                            for (var he = new H; !ae.getOppositeHalfEdge().equals(re);) {
                                                if (!(ae = ae.getOppositeHalfEdge()).isValid()) {
                                                    le.length = 3;
                                                    break
                                                }
                                                ae = ae.getNextHalfEdge(2);
                                                for (var de = 0; de < 3; ++de) le.push(ae.getNextHalfEdge(de));
                                                if (he.has(ae)) return {
                                                    v: r
                                                };
                                                he.add(ae)
                                            }
                                            if (6 === le.length) {
                                                for (var fe = 0; fe < 3; ++fe) le.push(le[le.length - 3]);
                                                ce.geometry === ae.geometry ? le[le.length - 6] = ce.getNextHalfEdge(2) : le[le.length - 6] = ae.getNextHalfEdge(2), le[le.length - 5] = ae.getNextHalfEdge(2), le[le.length - 4] = ae.getNextHalfEdge(1)
                                            }
                                        } else if ((ae = re.getOppositeHalfEdge(re)).isValid())
                                            for (var pe = 0; pe < 3; ++pe) le.push(ae.getNextHalfEdge(pe));
                                        if (ie.push(le), se.has(re)) return {
                                            v: r
                                        };
                                        se.add(re)
                                    } while (!re.equals(ne));
                                    var me = function(e, t) {
                                            var r = e[2 * t],
                                                n = e[2 * t + 1];
                                            return new RK.Vec2(r, n)
                                        },
                                        ve = function(e) {
                                            var t = e[0],
                                                r = e[1],
                                                n = e[2],
                                                i = e[e.length - 3],
                                                a = e[e.length - 2],
                                                s = e[e.length - 1],
                                                o = t.geometry,
                                                l = r.geometry,
                                                u = n.geometry,
                                                c = i.geometry,
                                                h = a.geometry,
                                                d = s.geometry,
                                                f = t.triEdge,
                                                p = r.triEdge,
                                                m = n.triEdge,
                                                v = i.triEdge,
                                                g = a.triEdge,
                                                y = s.triEdge,
                                                b = Math.floor(f / 3),
                                                k = Math.floor(p / 3),
                                                w = Math.floor(m / 3),
                                                S = f % 3,
                                                C = p % 3,
                                                _ = m % 3,
                                                R = Math.floor(v / 3),
                                                T = Math.floor(g / 3),
                                                M = Math.floor(y / 3),
                                                x = v % 3,
                                                P = g % 3,
                                                O = y % 3,
                                                K = 3 * o.ckSeamOriginalIndices[b] + S,
                                                A = 3 * l.ckSeamOriginalIndices[k] + C,
                                                E = 3 * u.ckSeamOriginalIndices[w] + _,
                                                B = 3 * c.ckSeamOriginalIndices[R] + x,
                                                I = 3 * h.ckSeamOriginalIndices[T] + P,
                                                D = 3 * d.ckSeamOriginalIndices[M] + O,
                                                F = o.index.array[K],
                                                U = l.index.array[A],
                                                j = u.index.array[E],
                                                z = c.index.array[B],
                                                N = h.index.array[I],
                                                L = d.index.array[D],
                                                V = o.attributes.uv.array,
                                                G = l.attributes.uv.array,
                                                W = u.attributes.uv.array,
                                                q = c.attributes.uv.array,
                                                H = h.attributes.uv.array,
                                                X = d.attributes.uv.array,
                                                Y = me(V, F),
                                                J = me(G, U),
                                                Z = me(W, j),
                                                Q = me(q, z),
                                                $ = me(H, N),
                                                ee = me(X, L),
                                                te = (new RK.Vec2).subVectors(J, Y);
                                            te.divideScalar(te.lengthSq());
                                            var re = new RK.Vec2(te.y, -te.x),
                                                ne = (new RK.Vec2).subVectors(Z, Y);
                                            re.dot(ne) > 0 && re.negate();
                                            var ie = (new RK.Vec2).subVectors(Q, $),
                                                ae = new RK.Vec2(ie.y, -ie.x),
                                                se = (new RK.Vec2).subVectors(ee, $);
                                            ae.dot(se) < 0 && ae.negate();
                                            var oe = ie.dot(se),
                                                le = ae.dot(se),
                                                ue = Y.clone().add(te.clone().multiplyScalar(oe).add(re.clone().multiplyScalar(le))),
                                                ce = Math.min(Y.distanceTo(ue), J.distanceTo(ue));
                                            return [new RK.Vec3(J.x, J.y, 0), new RK.Vec3(Y.x, Y.y, 0), new RK.Vec3(ue.x, ue.y, ce)]
                                        },
                                        ge = function(e) {
                                            var t = e[1].clone().sub(e[0]).normalize().clone().cross(new RK.Vec3(0, 0, 1)).normalize(),
                                                r = e[2].clone().sub(e[0]).normalize();
                                            return t.dot(r) < 0 && t.negate(), t.z = 1, t.normalize().multiplyScalar(.25), t
                                        },
                                        ye = null,
                                        be = null;
                                    if (ie.length > 1) {
                                        var ke = ie[ie.length - 1];
                                        ke.length >= 3 && (be = ge(ye = ve(ke)))
                                    }
                                    for (var we = [], Se = [], Ce = 0; Ce < ie.length; Ce++) {
                                        var _e = ie[Ce],
                                            Re = _e.length / 3 - 1;
                                        if (Re > 0) {
                                            for (var Te = ve(_e), Me = ge(Te), xe = 0; xe < Re; ++xe) {
                                                for (var Pe = {
                                                        geometry: null,
                                                        vertices: l.map((function(e) {
                                                            return new Float32Array(3 * e)
                                                        })),
                                                        uvw: new Float32Array(9)
                                                    }, Oe = 0; Oe < o.length; ++Oe)
                                                    for (var Ke = o[Oe], Ae = 0; Ae < 3; ++Ae) {
                                                        for (var Ee = _e[3 * (xe + 1) + Ae], Be = Ee.geometry, Ie = Be.index.array, De = Be.attributes[Ke], Fe = De.itemSize, Ue = De.array, je = Ee.triEdge, ze = Math.floor(je / 3), Ne = je % 3, Le = Ie[3 * Be.ckSeamOriginalIndices[ze] + Ne], Ve = Pe.vertices[Oe], Ge = Le * Fe, We = Ae * Fe, qe = 0; qe < Fe; ++qe) Ve[We + qe] = Ue[Ge + qe];
                                                        Pe.geometry = Pe.geometry || Ee.geometry
                                                    }
                                                if (xe + 1 < Re)
                                                    for (var He = (xe + 1) / (Re - 1), Xe = (xe + 0) / (Re - 1), Ye = [ye[2].clone().lerp(Te[2], He), ye[0], ye[2].clone().lerp(Te[2], Xe)], Je = 0; Je < 3; ++Je) Pe.uvw[3 * Je + 0] = Ye[Je].x, Pe.uvw[3 * Je + 1] = Ye[Je].y, Pe.uvw[3 * Je + 2] = Ye[Je].z;
                                                else
                                                    for (var Ze = 0; Ze < 3; ++Ze) Pe.uvw[3 * Ze + 0] = Te[Ze].x, Pe.uvw[3 * Ze + 1] = Te[Ze].y, Pe.uvw[3 * Ze + 2] = Te[Ze].z;
                                                we.push(Pe);
                                                var Qe = {
                                                        geometry: null,
                                                        vertices: l.map((function(e) {
                                                            return new Float32Array(3 * e)
                                                        })),
                                                        uvw: new Float32Array(9)
                                                    },
                                                    $e = {
                                                        geometry: null,
                                                        vertices: l.map((function(e) {
                                                            return new Float32Array(3 * e)
                                                        })),
                                                        uvw: new Float32Array(9)
                                                    },
                                                    et = [Qe, $e];
                                                if (xe + 1 < Re) {
                                                    for (var tt = (xe + 1) / (Re - 1), rt = (xe + 0) / (Re - 1), nt = be.clone().lerp(Me, tt), it = be.clone().lerp(Me, rt), at = [ye[2].clone().lerp(Te[2], tt), ye[0], ye[2].clone().lerp(Te[2], rt)], st = [at[0], at[2], at[0].clone().add(nt), at[0].clone().add(nt), at[2], at[2].clone().add(it)], ot = 0; ot < 2; ++ot)
                                                        for (var lt = et[ot], ut = 0; ut < 3; ++ut) lt.uvw[3 * ut + 0] = st[3 * ot + ut].x, lt.uvw[3 * ut + 1] = st[3 * ot + ut].y, lt.uvw[3 * ut + 2] = st[3 * ot + ut].z;
                                                    for (var ct = 0; ct < o.length; ++ct)
                                                        for (var ht = o[ct], dt = _e[3 * (xe + 1) + 0], ft = _e[3 * (xe + 1) + 2], pt = [dt, ft, dt, dt, ft, ft], mt = 0; mt < 2; ++mt)
                                                            for (var vt = et[mt], gt = 0; gt < 3; ++gt) {
                                                                for (var yt = pt[3 * mt + gt], bt = yt.geometry, kt = bt.index.array, wt = bt.attributes[ht], St = wt.itemSize, Ct = wt.array, _t = yt.triEdge, Rt = Math.floor(_t / 3), Tt = _t % 3, Mt = kt[3 * bt.ckSeamOriginalIndices[Rt] + Tt], xt = vt.vertices[ct], Pt = Mt * St, Ot = gt * St, Kt = 0; Kt < St; ++Kt) xt[Ot + Kt] = Ct[Pt + Kt];
                                                                vt.geometry = vt.geometry || yt.geometry
                                                            }
                                                    Se.push(Qe), Se.push($e)
                                                }
                                            }
                                            ye = Te, be = Me
                                        }
                                    }
                                    for (var At = function() {
                                            var e = we[0].geometry,
                                                t = we.filter((function(t) {
                                                    return t.geometry !== e
                                                }));
                                            we = we.filter((function(t) {
                                                return t.geometry === e
                                            })), s(e).innerTriArrays.push(we), we = t
                                        }; we.length;) At();
                                    for (var Et = function() {
                                            var e = Se[0].geometry,
                                                t = Se.filter((function(t) {
                                                    return t.geometry !== e
                                                }));
                                            Se = Se.filter((function(t) {
                                                return t.geometry === e
                                            })), s(e).outerTriArrays.push(we), Se = t
                                        }; Se.length;) Et()
                                };
                            for (var c in e.ckSeams) {
                                var h = u(c);
                                if ("object" === N(h)) return h.v
                            }
                            for (var d in a) {
                                var f = a[d],
                                    p = f.geometry,
                                    m = 0;
                                for (var v in f.innerTriArrays) {
                                    m += f.innerTriArrays[v].length
                                }
                                var g = 3 * m,
                                    y = new RK.BufferGeometry;
                                y.seamSourceGeometry = p;
                                for (var b = function(t) {
                                        var r = o[t],
                                            n = e.attributes[r].itemSize,
                                            i = new Float32Array(g * n),
                                            a = 0;
                                        for (var s in f.innerTriArrays) {
                                            f.innerTriArrays[s].forEach((function(e) {
                                                return e.vertices[t].forEach((function(e) {
                                                    return i[a++] = e
                                                }))
                                            }))
                                        }
                                        var l = new RK.BufferAttribute(i, n);
                                        y.addAttribute(r, l)
                                    }, k = 0; k < o.length; ++k) b(k);
                                ! function() {
                                    var e = new Float32Array(3 * g),
                                        t = 0;
                                    for (var r in f.innerTriArrays) {
                                        f.innerTriArrays[r].forEach((function(r) {
                                            return r.uvw.forEach((function(r) {
                                                return e[t++] = r
                                            }))
                                        }))
                                    }
                                    var n = new RK.BufferAttribute(e, 3);
                                    y.addAttribute("uv_seam", n)
                                }(), r.inner.push(y);
                                var w = 0;
                                for (var S in f.outerTriArrays) {
                                    w += f.outerTriArrays[S].length
                                }
                                var C = 3 * w,
                                    _ = new RK.BufferGeometry;
                                _.seamSourceGeometry = p;
                                for (var R = function(t) {
                                        var r = o[t],
                                            n = e.attributes[r].itemSize,
                                            i = new Float32Array(C * n),
                                            a = 0;
                                        for (var s in f.outerTriArrays) {
                                            f.outerTriArrays[s].forEach((function(e) {
                                                return e.vertices[t].forEach((function(e) {
                                                    return i[a++] = e
                                                }))
                                            }))
                                        }
                                        var l = new RK.BufferAttribute(i, n);
                                        _.addAttribute(r, l)
                                    }, T = 0; T < o.length; ++T) R(T);
                                ! function() {
                                    var e = new Float32Array(3 * C),
                                        t = 0;
                                    for (var r in f.outerTriArrays) {
                                        f.outerTriArrays[r].forEach((function(r) {
                                            return r.uvw.forEach((function(r) {
                                                return e[t++] = r
                                            }))
                                        }))
                                    }
                                    var n = new RK.BufferAttribute(e, 3);
                                    _.addAttribute("uv_seam", n)
                                }(), r.outer.push(_)
                            }
                        } catch (e) {
                            0
                        }
                        return r
                    }
                }]), e
            }(),
            q = function() {
                function e(t, r) {
                    L(this, e), this.geometry = t, this.triEdge = r
                }
                return G(e, [{
                    key: "clone",
                    value: function() {
                        return new e(this.geometry, this.triEdge)
                    }
                }, {
                    key: "getNextHalfEdge",
                    value: function(t) {
                        var r = this.triEdge,
                            n = r % 3;
                        return new e(this.geometry, 3 * Math.floor(r / 3) + (n = (n + t) % 3))
                    }
                }, {
                    key: "getOppositeHalfEdge",
                    value: function() {
                        var t = this.triEdge,
                            r = this.geometry,
                            n = r.ckSeamHalfEdge[t];
                        if (4294967295 !== n) t = n;
                        else {
                            var i = r._boundaryMap[t];
                            void 0 !== i ? (t = i.triEdge, r = i.geometry) : (t = 4294967295, r = null)
                        }
                        return new e(r, t)
                    }
                }, {
                    key: "isUvSeam",
                    value: function() {
                        var e = this.triEdge,
                            t = Math.floor(e / 3),
                            r = e % 3;
                        return 0 != (this.geometry.ckSeamBoundaries[t] & 1 << r)
                    }
                }, {
                    key: "isBoundary",
                    value: function() {
                        var e = this.triEdge;
                        return 4294967295 === this.geometry.ckSeamHalfEdge[e]
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        return 4294967295 !== this.triEdge
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return this.geometry === e.geometry && this.triEdge === e.triEdge
                    }
                }]), e
            }(),
            H = function() {
                function e() {
                    L(this, e), this.mLookup = new Map
                }
                return G(e, [{
                    key: "add",
                    value: function(e) {
                        this.mLookup.has(e.geometry) || (this.mLookup[e.geometry] = new Set), this.mLookup[e.geometry].add(e.triEdge)
                    }
                }, {
                    key: "has",
                    value: function(e) {
                        var t = this.mLookup[e.geometry];
                        return void 0 !== t && t.has(e.triEdge)
                    }
                }]), e
            }();

        function X(e) {
            return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function J(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Z(e, t) {
            return !t || "object" !== X(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Q(e) {
            return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function $(e, t) {
            return ($ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ee = function(e) {
            function t() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Y(this, t), (e = Z(this, Q(t).call(this)))._size = new RK.Vec2(1024, 1024), e.packChannels = r;
                var n = e.packChannels ? "\n                    const int channels = 4;\n                    vec4 result = vec4(1.0, 1.0, 1.0, 1.0);\n\n                    // Pack one vertex.r value per channel\n                    for (int channel = 0; channel < channels; channel++) {\n\n                        float srcX = vUv.x - 0.5/size.x;\n                        float srcY = vUv.y - 0.5/size.y;\n                        float offset = ( srcY * size.y * size.x * 4.0 ) + (srcX * size.x * 4.0) + float(channel);\n                        float posX = mod( offset, size.x );\n                        float posY = floor( offset / size.x );\n                        float posU = (posX + 0.5) / size.x;\n                        float posV = (posY + 0.5) / size.y;\n\n                        // Avoid overrunning available texture\n                        if ( posY > size.y )\n                            discard;\n\n                        vec2 currUV = vec2(posU, posV);\n                " : "\n                    vec2 currUV = vUv;\n                ",
                    i = e.packChannels ? "\n                        // the greater the value, the less (brighter) the occlusion\n                        result[channel] = 1.0 - ( p.r * blend ); \n\n                    } // end per-channel\n\n                    gl_FragColor = result;                \n                " : "\n                    gl_FragColor = vec4( vec3( 1.0 - p.r ), blend );\n                ";
                return e.setMaterial(new SK.Custom({
                    depthWrite: !1,
                    uv: !0,
                    blending: RK.NormalBlending,
                    transparent: !e.packChannels,
                    points: !e.packChannels,
                    vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                    fragmentPars: "\n                    uniform sampler2D readTexture;\n                    uniform float blend;\n                    uniform vec2 size;\n                    ",
                    fragment: "\n                    float px = 1.0 / size.x;\n                    float py = 1.0 / size.y;\n\n                    ".concat(n, "\n\n                    vec4 p = texture2D( readTexture, currUV );\n\n                    if( p.b < 1.0 / 256.0 ){ //This pixel has zero passes on it. Let's copy the surroundings into it.\n                    \n                        vec4 d0 = texture2D( readTexture, currUV + vec2(-px, -py) );\n                        vec4 d1 = texture2D( readTexture, currUV + vec2(-px, 0.0) );\n                        vec4 d2 = texture2D( readTexture, currUV + vec2(0.0, -py) );\n                        vec4 d3 = texture2D( readTexture, currUV + vec2(0.0, py) );\n                        vec4 d4 = texture2D( readTexture, currUV + vec2(px, 0.0) );\n                        vec4 d5 = texture2D( readTexture, currUV + vec2(px, py) );\n                        vec4 d6 = texture2D( readTexture, currUV + vec2(px, -py) );\n                        vec4 d7 = texture2D( readTexture, currUV + vec2(-px, py) );\n                        \n                        p.b = max(max(max(max(max(max(max(d0.b,d1.b),d2.b),d3.b),d4.b),d5.b),d6.b),d7.b);\n                        \n                        if( p.b < 1.0/256.0){\n                            p = vec4(0.25,0.25,0.25,1.0);\n                        } else {\n                            d0.b = ceil(d0.b); d1.b = ceil(d1.b); d2.b = ceil(d2.b); d3.b = ceil(d3.b); d4.b = ceil(d4.b); d5.b = ceil(d5.b); d6.b = ceil(d6.b); d7.b = ceil(d7.b); \n                    \n                            float surroundingPasses = ( d0.b + d1.b + d2.b + d3.b + d4.b + d5.b + d6.b + d7.b );\n                           \n                            p.r = ( d0.r * d0.b + d1.r * d1.b + d2.r * d2.b + d3.r * d3.b + d4.r * d4.b + d5.r * d5.b + d6.r * d6.b + d7.r * d7.b ) / surroundingPasses; //the color contribution of the surrounding pixels\n                            p.g = ( d0.g * d0.b + d1.g * d1.b + d2.g * d2.b + d3.g * d3.b + d4.g * d4.b + d5.g * d5.b + d6.g * d6.b + d7.g * d7.b ) / surroundingPasses; //the color contribution of the surrounding pixels\n                        }\n\n                    }\n\n                    ").concat(i, "\n\n                ")
                }, {
                    uniforms: {
                        readTexture: {
                            type: "t",
                            value: null
                        },
                        blend: {
                            type: "f",
                            value: 0
                        },
                        size: {
                            type: "v2",
                            value: e._size
                        }
                    }
                }, "OcclusionDilate")), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && $(e, t)
            }(t, SK.EffectPass), r = t, (n = [{
                key: "render",
                value: function(e, t, r, n, i) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
                    this.material.uniforms.readTexture.value = r.texture, this.material.setUniform("blend", a), this._size.set(n, i), this.material.setUniform("size", this._size), CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                }
            }]) && J(r.prototype, n), i && J(r, i), t
        }();

        function te(e) {
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function re(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ne(e, t) {
            return !t || "object" !== te(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ie(e) {
            return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ae(e, t) {
            return (ae = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var se = function(e) {
            function t(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = ne(this, ie(t).call(this)), e = e || new RK.Vec4(.8, 0, 0, 1), r.setMaterial(new SK.Custom({
                    vertexPars: "uniform vec3 uvPosScl;",
                    vertex: "gl_Position = projectionMatrix * modelViewMatrix * vec4( ((position.xy + 1.0) * uvPosScl.z + uvPosScl.xy * 2.0) - 1.0  ,0.0, 1.0 );",
                    fragment: "gl_FragColor.rgba = vec4(".concat(e.x, ", ").concat(e.y, ", ").concat(e.z, ", ").concat(e.w, ");"),
                    uv: !0
                }, {
                    uniforms: {
                        uvPosScl: {
                            type: "v3",
                            value: null
                        }
                    }
                }, "ClearRegion")), r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ae(e, t)
            }(t, SK.EffectPass), r = t, (n = [{
                key: "render",
                value: function(e, t, r) {
                    CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                }
            }]) && re(r.prototype, n), i && re(r, i), t
        }();

        function oe(e) {
            return (oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function le(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ue(e, t) {
            return !t || "object" !== oe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ce(e) {
            return (ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function he(e, t) {
            return (he = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var de = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = ue(this, ce(t).call(this))).setMaterial(new SK.Custom({
                    vertexPars: "\n                    uniform vec3 uvPosSclOut;",
                    vertex: "\n                    gl_Position \n                        = projectionMatrix\n                        * modelViewMatrix \n                        * vec4( ((position.xy + 1.0) * uvPosSclOut.z + uvPosSclOut.xy * 2.0) - 1.0, 0.0, 1.0 );",
                    fragmentPars: "\n                    uniform vec3 uvPosSclIn;\n                    uniform sampler2D readTexture;",
                    fragment: "\n                    vec2 readTextureUV = vUv * uvPosSclIn.z + uvPosSclIn.xy;\n                    gl_FragColor = texture2D( readTexture, readTextureUV );\n                    //gl_FragColor = vec4(0, 0, 1, 1);",
                    uv: !0,
                    blending: RK.NoBlending
                }, {
                    uniforms: {
                        uvPosSclIn: {
                            type: "v3",
                            value: null
                        },
                        uvPosSclOut: {
                            type: "v3",
                            value: null
                        },
                        readTexture: {
                            type: "t",
                            value: null
                        }
                    }
                }, "CopyRegion")), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && he(e, t)
            }(t, SK.EffectPass), r = t, (n = [{
                key: "render",
                value: function(e, t, r, n, i) {
                    CK.renderManager.renderer.autoClear = !1, this.material.setUniform("readTexture", r), this.material.setUniform("uvPosSclIn", n), this.material.setUniform("uvPosSclOut", i), e.render(this.scene, this.camera, t, !1)
                }
            }]) && le(r.prototype, n), i && le(r, i), t
        }();

        function fe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var pe = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "HaltonSequence",
                value: function(e, t) {
                    for (var r = 0, n = 1 / t, i = e + 1; i > 0;) r += n * (i % t), i = Math.floor(i / t), n /= t;
                    return r
                }
            }, {
                key: "SampleSphere",
                value: function(e, t) {
                    var r = 1 - 2 * t,
                        n = Math.sqrt(Math.max(0, 1 - r * r)),
                        i = 2 * e * Math.PI,
                        a = n * Math.cos(i),
                        s = n * Math.sin(i);
                    return new RK.Vec3(a, s, r)
                }
            }], (r = null) && fe(t.prototype, r), n && fe(t, n), e
        }();

        function me(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ve(e, t, r) {
            return t && me(e.prototype, t), r && me(e, r), e
        }
        var ge = function() {
            function e(t, r, n, i, a, s, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), e.init(), this.occlusionSize = r || l.a.occlusionTextureSize, this.tileSize = n || 256, this.tileRows = i || 4, this.tileColumns = a || 4, this.tileChannels = s || 4, this.iteration = 0, this.sampleCount = o || 640, this.materialMap = new WeakMap, this.prevMap = new WeakMap, this.initializeIO(t), this.previousAtlas = {}, this.frameRateLod = 1, this._sampleIndex = 0, this._previousBlend = 0, this._isDone = !1, this._channelMask = new Float32Array(4);
                for (var u = 0; u < 4; u++) this._channelMask[u] = 1
            }
            return ve(e, [{
                key: "accumulateOcclusionToTarget",
                value: function() {
                    for (var t = this.accumulateIndex, r = (t + 1) % 2, n = this.accumulateTargets[t], i = this.accumulateTargets[r], a = 0; a < 4; ++a) {
                        var s = a < this.tileChannelsLod ? 1 : 0;
                        this._channelMask[a] = s
                    }
                    e.accumulateOcclusion.render(CK.renderManager.renderer, n, i.texture, this.occlusionTarget.texture, this._channelMask), this.accumulateIndex = r
                }
            }], [{
                key: "init",
                value: function() {
                    if ((l.a.occlusion || l.a.sunOcclusion) && !this.initialized) {
                        this.initialized = !0, this.characterKey = void 0, this.clearRegion = new se, this.copyRegion = new de, this.accumulateOcclusion = new SK.AccumulateOcclusion, this.resolveOcclusion = new SK.ResolveOcclusion, this.dilator = new ee;
                        var e = new RK.Vec3(-3, -1, -3),
                            t = new RK.Vec3(3, 5, 3);
                        this.camera = new RK.OrthographicCamera(e.x, t.x, t.y, e.y, e.z, t.z), this.camera.layers.set(1)
                    }
                }
            }]), ve(e, [{
                key: "initializeIO",
                value: function(e) {
                    this.display = e, this.depthTarget = new RK.WebGLRenderTarget(this.depthWidth, this.depthHeight, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    }), this.occlusionTarget = new RK.WebGLRenderTarget(this.occlusionSize, this.occlusionSize, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    }), this.accumulateTargets = [new RK.WebGLRenderTarget(this.occlusionSize, this.occlusionSize, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    }), new RK.WebGLRenderTarget(this.occlusionSize, this.occlusionSize, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    })], this.finalTarget = new RK.WebGLRenderTarget(this.occlusionSize, this.occlusionSize, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    }), this.accumulateIndex = 0;
                    this.depthDirectionBuffer = new ArrayBuffer(4 * this.samplesPerIteration * 4), this.depthDirections = new Float32Array(this.depthDirectionBuffer), this.depthDirectionsPerChannel = [];
                    for (var t = 0; t < this.tileChannels; ++t) {
                        var r = 4 * this.tileCount,
                            n = 4 * r * t,
                            i = new Float32Array(this.depthDirectionBuffer, n, r);
                        this.depthDirectionsPerChannel.push(i)
                    }
                    this.depthOffsetBuffer = new ArrayBuffer(4 * this.samplesPerIteration * 4), this.depthOffsets = new Float32Array(this.depthOffsetBuffer), this.depthOffsetsPerChannel = [];
                    for (var a = 0; a < this.tileChannels; ++a) {
                        var s = 4 * this.tileCount,
                            o = 4 * s * a,
                            l = new Float32Array(this.depthOffsetBuffer, o, s);
                        this.depthOffsetsPerChannel.push(l)
                    }
                    this.tileTransforms = [];
                    for (var u = 0; u < this.tileRows; ++u)
                        for (var c = 0; c < this.tileColumns; ++c) {
                            var h = 1 / this.tileColumns,
                                d = 1 / this.tileRows,
                                f = 2 * (c / this.tileColumns) - 1 + h,
                                p = 2 * (u / this.tileRows) - 1 + d,
                                m = new RK.Vec4(h, d, f, p);
                            this.tileTransforms.push(m)
                        }
                    this.requestRefreshArgs = {
                        render: !1,
                        postRender: !1
                    }, this.firstRun = !0
                }
            }, {
                key: "hasCharacterDataChanged",
                value: function(e) {
                    return !0
                }
            }, {
                key: "setCharacterData",
                value: function(e) {}
            }, {
                key: "sampleDirection",
                value: function(e, t) {
                    return pe.SampleSphere(e, t)
                }
            }, {
                key: "applyOcclusionTexture",
                value: function(e) {}
            }, {
                key: "refreshFinalTarget",
                value: function() {
                    CK.renderManager.renderer.setClearColor(new RK.Color(.8, 0, 0), 1), CK.renderManager.renderer.clearTarget(this.finalTarget, !0, !1, !1)
                }
            }, {
                key: "clearAllTargets",
                value: function() {
                    CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), [this.depthTarget, this.occlusionTarget, this.accumulateTargets[0], this.accumulateTargets[1]].map((function(e) {
                        return CK.renderManager.renderer.clearTarget(e, !0, !0, !0)
                    }))
                }
            }, {
                key: "clearAccumulationTargets",
                value: function() {
                    CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), this.accumulateTargets.map((function(e) {
                        return CK.renderManager.renderer.clearTarget(e)
                    }))
                }
            }, {
                key: "isValidSlot",
                value: function(e) {
                    return !1
                }
            }, {
                key: "getUvPosScaleBySlot",
                value: function(e) {
                    return -1
                }
            }, {
                key: "clearSlotRegion",
                value: function(t, r, n) {
                    (n || t.startsWith("voxel")) && (e.clearRegion.material.setUniform("uvPosScl", r), e.clearRegion.render(CK.renderManager.renderer, this.finalTarget))
                }
            }, {
                key: "copyNormalUniforms",
                value: function(e, t) {}
            }, {
                key: "enableDefaultOcclusion",
                value: function(e) {}
            }, {
                key: "disableDefaultOcclusion",
                value: function(e) {}
            }, {
                key: "writeOutputTexture",
                value: function(t) {
                    var r = this.renderBlendAmount;
                    r < 1 && (r = (r - this._previousBlend) / (1 - this._previousBlend), this._previousBlend = r), r < 1 / 512 || e.dilator.render(CK.renderManager.renderer, this.finalTarget, t, this.occlusionSize, this.occlusionSize, r)
                }
            }, {
                key: "attachOutputBuffer",
                value: function() {}
            }, {
                key: "processOutputBuffer",
                value: function() {}
            }, {
                key: "emitOcclusionChanged",
                value: function() {
                    u.a.emit("occlusionChanged"), o.a.requestRenderRefresh()
                }
            }, {
                key: "setDepthDirections",
                value: function() {
                    for (var e = 0; e < this.samplesPerIterationLod; ++e) {
                        var t = this._sampleIndex++,
                            r = pe.HaltonSequence(t + 31, 7),
                            n = pe.HaltonSequence(t + 31, 13);
                        this.sampleDirection(r, n).toArray(this.depthDirections, 4 * e);
                        var i = pe.HaltonSequence(t + 31, 5),
                            a = pe.HaltonSequence(t + 31, 11),
                            s = pe.HaltonSequence(t + 31, 17),
                            o = 2 * (i - .5) / this.tileSize,
                            l = 2 * (a - .5) / this.tileSize,
                            u = (s - .5) / 256;
                        this.depthOffsets[4 * e + 0] = o, this.depthOffsets[4 * e + 1] = l, this.depthOffsets[4 * e + 2] = u
                    }
                }
            }, {
                key: "generateTexelJitter",
                value: function() {
                    var e = pe.HaltonSequence(this.iteration + 31, 2),
                        t = pe.HaltonSequence(this.iteration + 31, 3),
                        r = 1 / this.occlusionSize;
                    return new RK.Vec2(e - .5, t - .5).multiplyScalar(r)
                }
            }, {
                key: "renderDepthTiles",
                value: function() {
                    this.setDepthDirections();
                    var t = [!0, !0, !0, !0];
                    for (var r in this.meshes) {
                        var n = this.meshes[r],
                            i = this.materialMap.get(n).depth;
                        if (i.colorIdMorphs = n.material.colorIdMorphs, i.ckReverseWinding = n.material.ckReverseWinding, i.colorWriteChannels = t, i.tileRows = this.tileRows, i.tileColumns = this.tileColumns, i.eyeOrientHack = n.material.eyeOrientHack, n.material.eyeOrientHack)
                            for (var a = ["eyeConvergence", "eyeLookH", "eyeLookV"], s = 0; s < a.length; ++s) {
                                var o = a[s],
                                    l = n.material.getUniform(o);
                                i.setUniform(o, l)
                            }
                        this.prevMap.set(n, n.material), n.material = i
                    }
                    CK.renderManager.renderer.setClearColor(new RK.Color(1, 1, 1), 1), CK.renderManager.renderer.clearTarget(this.depthTarget, !0, !1, !1), CK.renderManager.renderer.autoClear = !1;
                    for (var u = 0; u < this.tileChannelsLod; ++u) {
                        CK.renderManager.renderer.clearTarget(this.depthTarget, !1, !0, !0);
                        for (var c = 0; c < 4; ++c) t[c] = c === u;
                        for (var h in this.meshes) {
                            var d = this.meshes[h],
                                f = this.materialMap.get(d).depth;
                            f.setUniform("tileTransforms", this.tileTransforms), f.setUniform("depthDirections", this.depthDirectionsPerChannel[u]), f.setUniform("depthOffsets", this.depthOffsetsPerChannel[u]), d.geometry.isInstancedBufferGeometry = !0, d.geometry.maxInstancedCount = this.tileCount
                        }
                        CK.renderManager.renderer.render(CK.scene, e.camera, this.depthTarget, !1)
                    }
                }
            }, {
                key: "renderOcclusion",
                value: function() {
                    var t = this.generateTexelJitter(),
                        r = 0,
                        n = [!1, !1, !1, !1];
                    for (var i in this.meshes) {
                        var a = this.meshes[i],
                            s = this.materialMap.get(a).occlusion;
                        if (s.tileRows = this.tileRows, s.tileColumns = this.tileColumns, s.colorIdMorphs = a.material.colorIdMorphs, s.colorWriteChannels = n, s.occlusionSize = this.occlusionSize, s.setUniform("vertexIDOffset", r), s.setUniform("texelJitter", t), s.setUniform("depthTexture", this.depthTarget.texture), r += a.geometry.attributes.vertexID ? a.geometry.attributes.vertexID.count : 0, s.eyeOrientHack = a.material.eyeOrientHack, a.material.eyeOrientHack)
                            for (var o = ["eyeConvergence", "eyeLookH", "eyeLookV"], l = 0; l < o.length; ++l) {
                                var u = o[l],
                                    c = a.material.getUniform(u);
                                s.setUniform(u, c)
                            }
                        a.material = s, a.geometry.isInstancedBufferGeometry = !1
                    }
                    for (var h = new Float32Array(4), d = 0; d < this.tileChannelsLod; ++d) {
                        for (var f in h[d] = 1, n[d] = !0, this.meshes) {
                            var p = this.meshes[f],
                                m = this.materialMap.get(p).occlusion;
                            m.setUniform("depthDirections", this.depthDirectionsPerChannel[d]), m.setUniform("depthOffsets", this.depthOffsetsPerChannel[d]), m.setUniform("channelMask", h)
                        }
                        CK.renderManager.renderer.autoClear = !1, CK.renderManager.renderer.render(CK.scene, e.camera, this.occlusionTarget, !1), h[d] = 0, n[d] = !1
                    }
                }
            }, {
                key: "restoreOriginalMaterials",
                value: function() {
                    for (var e in this.meshes) {
                        var t = this.meshes[e];
                        t.material = this.prevMap.get(t), t.customDepthMaterial && (t.customDepthMaterial.ckReverseWinding = t.material.ckReverseWinding)
                    }
                }
            }, {
                key: "refresh",
                value: function() {
                    if (void 0 !== C.a.slots && this.display.resourcesReady)
                        if (this.hasCharacterDataChanged(CK.data)) {
                            if (this.setCharacterData(CK.data), !this.display.atlas) return console.warn("Has not initialized uvPoseScaleBySlot yet");
                            var t = this.firstRun;
                            this.firstRun ? (this.refreshFinalTarget(), this.firstRun = !1) : e.copyRegion.render(CK.renderManager.renderer, this.accumulateTargets[0], this.finalTarget.texture, new RK.Vec3(0, 0, 1), new RK.Vec3(0, 0, 1)), this.attachOutputBuffer(), this.meshes = [];
                            var r = this.display.getMeshes(),
                                n = {};
                            for (var i in r)
                                if (this.isValidSlot(i)) {
                                    var a = r[i];
                                    this.meshes.push(a);
                                    var s = this.getUvPosScaleBySlot(i),
                                        u = a.material.ckReverseWinding ? 1 : 0,
                                        c = i.endsWith("L"),
                                        h = this.materialMap.get(a),
                                        d = void 0 === h;
                                    if (!t) {
                                        var f = this.previousAtlas[i];
                                        f && !d ? f.distanceTo(s) > 1e-6 && e.copyRegion.render(CK.renderManager.renderer, this.finalTarget, this.accumulateTargets[0].texture, f, s) : this.clearSlotRegion(i, s, d)
                                    }
                                    if (n[i] = s, d) {
                                        a.layers.enable(1);
                                        var p = I.getOptionsFromGeo(a.geometry, a.part),
                                            m = new SK.DepthTileMaterial(p);
                                        p.options.volumeTextureSize = this.volumeTextureSize, p.options.occlusionSize = this.occlusionSize, p.options.depthDirections = this.depthDirections, p.options.depthTileRows = this.depthTileRows, p.options.depthTileColumns = this.depthTileColumns;
                                        var v = new SK.OcclusionMaterial(p);
                                        h = {
                                            depth: m,
                                            occlusion: v
                                        }, this.materialMap.set(a, h), v.setUniform("depthTexture", this.depthTarget.texture), this.copyNormalUniforms(a.material.getUniforms(), v), this.enableDefaultOcclusion(a);
                                        for (var g = new Float32Array(this.samplesPerIteration), y = 0; y < this.samplesPerIteration; ++y) g[y] = y;
                                        var b = new RK.InstancedBufferAttribute(g, 1, !1, 1);
                                        a.geometry.addAttribute("instanceIndex", b)
                                    }
                                    var k = h.depth;
                                    k.ckReverseWinding = c, k.setUniform("flipNormal", u), k.setUniform("uvPosScl", s);
                                    var w = h.occlusion;
                                    w.ckReverseWinding = c, w.setUniform("flipNormal", u), w.setUniform("uvPosScl", s)
                                } else this.enableDefaultOcclusion(r[i]), l.a.debug && console.warn("No AO for slot ", i, " because no place for it was found ");
                            this.previousAtlas = n, this.clearAllTargets(), this.iteration = 0, this._sampleIndex = 0, this._previousBlend = 0, this._isDone = !1, this._needsRefresh = !1;
                            var S = CK.display.getRoughBoundingSphere();
                            if (S) {
                                var _ = S.center,
                                    R = S.radius,
                                    T = e.camera;
                                T.left = _.x - R, T.right = _.x + R, T.top = _.y + R, T.bottom = _.y - R, T.near = _.z - R, T.far = _.z + R, T.updateProjectionMatrix()
                            }
                            o.a.requestRenderRefresh()
                        } else this._needsRefresh = !1
                }
            }, {
                key: "updateRenderPasses",
                value: function() {
                    (this.renderDoClear = 0 === this.iteration, this.renderDoDepth = this._sampleIndex < this.sampleCount, this.renderDoCalcOcclusion = this.renderDoDepth, this.renderDoAccumulate = this.renderDoCalcOcclusion, this.renderDoResolve = this._sampleIndex < this.sampleCount, this.renderBlendAmount = Math.min((this._sampleIndex + 1) / this.sampleCount, 1), this.renderDoBlend = this._sampleIndex >= this.sampleCount, this.iteration > 0) && (o.a.frameTime > 2 * o.a.goodFrameTime ? this.frameRateLod -= .1 : this.frameRateLod += .01, this.frameRateLod = Math.min(Math.max(this.frameRateLod, 0), 1))
                }
            }, {
                key: "render",
                value: function() {
                    if (void 0 !== C.a.slots && this.display.resourcesReady) {
                        if (this.updateRenderPasses(), this.needsRefresh && this.refresh(), this.renderDoClear && this.clearAccumulationTargets(), this.renderDoDepth && (this.renderDepthTiles(), this.renderDoCalcOcclusion || this.restoreOriginalMaterials()), this.renderDoCalcOcclusion && (this.renderOcclusion(), this.restoreOriginalMaterials()), this.renderDoAccumulate && this.accumulateOcclusionToTarget(), this.renderDoResolve) {
                            var t = this.accumulateIndex,
                                r = (t + 1) % 2,
                                n = this.accumulateTargets[t],
                                i = this.accumulateTargets[r];
                            e.resolveOcclusion.render(CK.renderManager.renderer, n, i.texture), this.applyOcclusionTexture(this.finalTarget.texture), this.writeOutputTexture(n)
                        }
                        this.renderDoBlend && (this.processOutputBuffer(), this.emitOcclusionChanged(), this._isDone = !0), this.iteration++
                    }
                }
            }, {
                key: "end",
                value: function() {
                    this.isDone || (this._sampleIndex < this.sampleCount ? o.a.requestRenderRefresh(this.requestRefreshArgs) : o.a.requestRenderRefresh())
                }
            }, {
                key: "volumeTextureSize",
                get: function() {
                    return CK.Settings.forge ? 4096 : 2048
                }
            }, {
                key: "depthWidth",
                get: function() {
                    return this.tileSize * this.tileColumns
                }
            }, {
                key: "depthHeight",
                get: function() {
                    return this.tileSize * this.tileRows
                }
            }, {
                key: "tileCount",
                get: function() {
                    return this.tileRows * this.tileColumns
                }
            }, {
                key: "samplesPerIteration",
                get: function() {
                    return this.tileCount * this.tileChannels
                }
            }, {
                key: "samplesPerIterationLod",
                get: function() {
                    return this.tileCount * this.tileChannelsLod
                }
            }, {
                key: "iterationCount",
                get: function() {
                    var e = this.samplesPerIteration,
                        t = this.sampleCount;
                    return Math.ceil(t / e)
                }
            }, {
                key: "isDone",
                get: function() {
                    return this._isDone && !this.needsRefresh
                }
            }, {
                key: "tileChannelsLod",
                get: function() {
                    var e = Math.round(this.tileChannels * this.frameRateLod);
                    return e = Math.min(Math.max(e, 1), this.tileChannels)
                }
            }, {
                key: "needsRefresh",
                get: function() {
                    return this._needsRefresh
                },
                set: function(e) {
                    this.ignoreNeedsRefreshCount > 0 ? this.ignoreNeedsRefreshCount-- : this._needsRefresh = e
                }
            }], [{
                key: "uvPosSclEquals",
                value: function(e, t) {
                    if (e) {
                        if (e.uniforms && e.uniforms.uvPosScl && e.uniforms.uvPosScl.value && e.uniforms.uvPosScl.value.distanceTo(t) < .001) return !0;
                        if (e.blindlySetUniforms && e.blindlySetUniforms.uvPosScl && e.blindlySetUniforms.uvPosScl.distanceTo(t) < .001) return !0
                    }
                    return !1
                }
            }]), e
        }();

        function ye(e) {
            return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function be(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ke(e, t) {
            return !t || "object" !== ye(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function we(e, t, r) {
            return (we = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Se(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function Se(e) {
            return (Se = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ce(e, t) {
            return (Ce = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var _e = function(e) {
            function t(e, r, n, i, a, s, o) {
                var l;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (l = ke(this, Se(t).call(this, e, r, n, i, a, s, o))).splitPasses = !1, l
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ce(e, t)
            }(t, e), r = t, (n = [{
                key: "initializeIO",
                value: function(e) {
                    we(Se(t.prototype), "initializeIO", this).call(this, e)
                }
            }, {
                key: "isValidSlot",
                value: function(e) {
                    return this.display.atlas.hasSlot(e)
                }
            }, {
                key: "getUvPosScaleBySlot",
                value: function(e) {
                    return this.display.atlas.getUV(e)
                }
            }, {
                key: "onTextureChanged",
                value: function(e, t, r) {
                    e.part && e.part.solidBake ? e.material.setOcclusion(r, SK.Textures.makeTexture([this.display.sim.diffuse.r, this.display.sim.diffuse.g, this.display.sim.diffuse.b, 1])) : e.material.setOcclusion(r, t)
                }
            }, {
                key: "applyOcclusionTexture",
                value: function(e) {
                    var t = this.display.atlas,
                        r = this.display.getMeshesInAtlas();
                    for (var n in r) {
                        var i = r[n],
                            a = t.getUV(n);
                        this.onTextureChanged(i, e, a)
                    }
                    o.a.requestRenderRefresh()
                }
            }]) && be(r.prototype, n), i && be(r, i), t
        }(ge);

        function Re(e) {
            return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Te(e, t) {
            return !t || "object" !== Re(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Me(e, t, r) {
            return (Me = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = xe(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function xe(e) {
            return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Pe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Oe(e, t, r) {
            return t && Pe(e.prototype, t), r && Pe(e, r), e
        }

        function Ke(e, t) {
            return (Ke = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ae = function(e) {
            function t(e, r, n, i, a, s, o) {
                var l;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (l = Te(this, xe(t).call(this, e, r, n, i, a, s, o))).targetChannels = 4, l.bufferItemSize = 1, l.size = l.occlusionSize, t.init(), l
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ke(e, t)
            }(t, e), Oe(t, null, [{
                key: "init",
                value: function() {
                    this.validSlots = ["volumeMesh0", "volumeMesh1", "volumeMesh2"], ge.dilator = new ee(!0), this._stage = 0
                }
            }]), Oe(t, [{
                key: "initializeIO",
                value: function(e) {
                    Me(xe(t.prototype), "initializeIO", this).call(this, e), this.finalFrameBuffer = null
                }
            }, {
                key: "censorTimes",
                value: function(e, t) {
                    if ("clientTime" != e && "serverTime" != e) return t
                }
            }, {
                key: "hasCharacterDataChanged",
                value: function(e) {
                    return !(null != this.characterKey || !e) || JSON.stringify(e.getJson(!0), this.censorTimes) != this.characterKey
                }
            }, {
                key: "setCharacterData",
                value: function(e) {
                    this.characterKey = JSON.stringify(e.getJson(!0), this.censorTimes)
                }
            }, {
                key: "isValidSlot",
                value: function(e) {
                    return t.validSlots.includes(e)
                }
            }, {
                key: "getUvPosScaleBySlot",
                value: function(e) {
                    return new RK.Vec3(0, 0, 1)
                }
            }, {
                key: "copyNormalUniforms",
                value: function(e, t) {
                    t.setUniform("fieldTexture", e.fieldTexture), t.setUniform("fieldSize", e.fieldSize), t.setUniform("voxelSize", e.voxelSize)
                }
            }, {
                key: "enableDefaultOcclusion",
                value: function(e) {
                    e.material.setUniform("useDefault", 1)
                }
            }, {
                key: "disableDefaultOcclusion",
                value: function(e) {
                    e.material.setUniform("useDefault", 0)
                }
            }, {
                key: "applyBuffer",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = "occlusionFactor";
                    e.geometry.getAttribute(n) && e.geometry.removeAttribute(n);
                    var i = e.geometry.attributes.vertexID.count,
                        a = r + i * this.bufferItemSize + 1,
                        s = t.slice(r, a);
                    return e.geometry.addAttribute(n, new RK.BufferAttribute(s, this.bufferItemSize, !0)), a
                }
            }, {
                key: "attachOutputBuffer",
                value: function() {
                    var e = CK.renderManager.renderer.getContext();
                    this.finalFrameBuffer = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this.finalFrameBuffer);
                    var t = CK.renderManager.renderer.properties.get(this.finalTarget.texture);
                    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.__webglTexture, this.finalTarget.activeMipMapLevel), e.bindFramebuffer(e.FRAMEBUFFER, null)
                }
            }, {
                key: "processOutputBuffer",
                value: function() {
                    var e = CK.renderManager.renderer.getContext();
                    e.bindFramebuffer(e.FRAMEBUFFER, this.finalFrameBuffer);
                    var t = new Uint8Array(this.bufferItemSize * this.size * this.size);
                    e.readPixels(0, 0, this.size, Math.floor(this.size / this.targetChannels), e.RGBA, e.UNSIGNED_BYTE, t), e.bindFramebuffer(e.FRAMEBUFFER, null);
                    var r = 0;
                    for (var n in this.meshes) {
                        var i = this.meshes[n];
                        this.disableDefaultOcclusion(i), r = this.applyBuffer(i, t, r)
                    }
                }
            }, {
                key: "updateRenderPasses",
                value: function() {
                    if (this.renderDoClear = !1, this.renderDoDepth = !1, this.renderDoCalcOcclusion = !1, this.renderDoAccumulate = !1, this.renderDoResolve = !1, this.renderBlendAmount = 0, this.renderDoBlend = !1, 0 === this.iteration) this.renderDoClear = !0, this._stage = 0;
                    else switch (this._stage) {
                        case 0:
                            this.renderDoDepth = !0, this.renderDoCalcOcclusion = !0, this.renderDoAccumulate = !0, this._stage = 1;
                            break;
                        case 1:
                            this.renderDoResolve = !0, this._sampleIndex < this.sampleCount ? this._stage = 0 : (this.renderBlendAmount = 1, this._stage = 2);
                            break;
                        case 2:
                            this.renderBlendAmount = 1, this.renderDoBlend = !0
                    }
                    this.iteration > 0 && (o.a.frameTime > 2 * o.a.goodFrameTime ? this.frameRateLod -= .1 : this.frameRateLod += .01, this.frameRateLod = Math.min(Math.max(this.frameRateLod, 0), 1))
                }
            }]), t
        }(ge);

        function Ee(e) {
            return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Be(e, t) {
            return !t || "object" !== Ee(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Ie(e, t, r) {
            return (Ie = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = De(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Fe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Ue(e, t, r) {
            return t && Fe(e.prototype, t), r && Fe(e, r), e
        }

        function je(e, t) {
            return (je = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ze = function(e) {
            function t(e, r, n, i, a, s, o) {
                var l;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (l = Be(this, De(t).call(this, e, r, n, i, a, s, o))).splitPasses = !1, t.init(), l
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && je(e, t)
            }(t, e), Ue(t, null, [{
                key: "init",
                value: function() {}
            }]), Ue(t, [{
                key: "sampleDirection",
                value: function(e, t) {
                    var r = e % 2 == 0 ? -1.5 : 1.5,
                        n = e * r,
                        i = t * r,
                        a = CK.environment.lighting.sunlight.position;
                    return new RK.Vec3(a.x + n, a.y + i, a.z).clone().normalize()
                }
            }, {
                key: "onTextureChanged",
                value: function(e, t, r) {
                    e.material.setSunOcclusion(r, t)
                }
            }, {
                key: "emitOcclusionChanged",
                value: function() {
                    o.a.requestRenderRefresh()
                }
            }, {
                key: "updateRenderPasses",
                value: function() {
                    Ie(De(t.prototype), "updateRenderPasses", this).call(this), this.renderBlendAmount = 1
                }
            }]), t
        }(_e);

        function Ne(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Le = function() {
            function e(t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.size = r, this.location = t, this.branches = {}, this.filled = !1
            }
            var t, r, n;
            return t = e, (r = [{
                key: "add",
                value: function(t) {
                    return this.branches[t[0] + 2 * t[1]] = new e([this.location[0] + this.size / 2 * t[0], this.location[1] + this.size / 2 * t[1]], this.size / 2)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.branches[e[0] + 2 * e[1]]
                }
            }, {
                key: "fillNextEmptySlot",
                value: function(e) {
                    if (!this.filled) {
                        if (this.isEmpty() && this.size == e) return this.filled = !0, this;
                        if (e < this.size)
                            for (var t = 0; t < 2; t++)
                                for (var r = 0; r < 2; r++) {
                                    var n = this.get([t, r]);
                                    void 0 === n && (n = this.add([t, r]));
                                    var i = n.fillNextEmptySlot(e);
                                    if (void 0 !== i) return i
                                }
                    }
                }
            }, {
                key: "isEmpty",
                value: function() {
                    if (this.filled) return !1;
                    for (var e = 0; e < 4; e++)
                        if (e in this.branches) return !1;
                    return !0
                }
            }]) && Ne(t.prototype, r), n && Ne(t, n), e
        }();

        function Ve(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Ge = function() {
                function e(t, r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.size = r;
                    for (var i = Object.keys(t).filter((function(e) {
                            return t[e].idealTextureSize && (t[e].mappings || !l.a.color)
                        })), a = function(e) {
                            var a = {};
                            if (i.map((function(r) {
                                    var n = t[r],
                                        i = n.idealTextureSize,
                                        s = n.bakedTextureSize,
                                        o = i * e;
                                    o > s && (o = s);
                                    var l = RK.Math.nearestPowerOfTwo(o);
                                    l in a || (a[l] = []), a[l].push(r)
                                })), n.packed = n._pack(a, r), n.packed) return "break"
                        }, s = 1; s > 0; s -= .1) {
                        if ("break" === a(s)) break
                    }
                    this.packed || console.error("Could not fit all parts", t, "into", r)
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "getUV",
                    value: function(e) {
                        var t = this.packed[e];
                        return t ? t.uv : console.error('Could not find slot "'.concat(e, '" in atlas'), this) || new RK.Vec3(0, 0, 1)
                    }
                }, {
                    key: "getSize",
                    value: function(e) {
                        return this.packed[e] ? this.packed[e].size : console.error("slot ".concat(e, " not in atlas")) || 512
                    }
                }, {
                    key: "hasSlot",
                    value: function(e) {
                        return !!this.packed[e]
                    }
                }, {
                    key: "_pack",
                    value: function(e) {
                        for (var t = {}, r = new Le([0, 0], this.size), n = this.size; n > 2; n /= 2)
                            if (n in e)
                                for (var i in e[n]) {
                                    var a = e[n][i],
                                        s = r.fillNextEmptySlot(n);
                                    if (void 0 === s) return !1;
                                    t[a] = {
                                        x: s.location[0],
                                        y: s.location[1],
                                        size: s.size,
                                        uv: new RK.Vec3(s.location[0], s.location[1], s.size).multiplyScalar(1 / this.size)
                                    }
                                }
                            return t
                    }
                }]) && Ve(t.prototype, r), n && Ve(t, n), e
            }(),
            We = r(41);

        function qe(e) {
            return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function He(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Xe(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Ye(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Je(e) {
            return (Je = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ze(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Qe(e, t) {
            return (Qe = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var $e = {
                bodyLower: ["bodyUpper", "torsoBridge"],
                bodyUpper: ["face", "faceBridge", "torsoBridge"],
                face: ["faceBridge"]
            },
            et = {};
        for (var tt in $e) {
            var rt = $e[tt];
            for (var nt in rt) {
                var it = rt[nt];
                it in et || (et[it] = []), et[it].push(tt)
            }
        }
        var at = {
                bodyUpper: ["chest", "glovesL", "glovesR"],
                bodyUpper0: ["chest0", "glovesL0", "glovesR0"],
                bodyUpper1: ["chest1", "glovesL1", "glovesR1"],
                bodyLower: ["legs"],
                chest: ["chestOuter"]
            },
            st = function(e) {
                function t() {
                    var e, r, n;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, (e = !(n = Je(t).call(this)) || "object" !== qe(n) && "function" != typeof n ? Ze(r) : n).targets = [], e.enableIk = !0, e.enableIkRotation = !0, e.enableIkDebug = !1, e.meshes = {}, e.skeletons = {}, e.fonts = {}, e.seamFinMeshes = {}, e.rebuildSeamFins = !1, e.objectSnaps = {}, e.updateFailed = !1, e._finishedApplyingUpdates = !1, e.finishedCallback = void 0, e._needsAnimationUpdate = !1, e.needsUpdate = !1, e.resourceRequestId = 0, e.resourcesReady = !1, e.orphans = [], void 0 === t.count && (e.primary = !0, t.count = 0), e.name = "Character" + t.count++, e.colorBake = new z.a(Ze(e));
                    var i = l.a.occlusionDepthTileDim,
                        a = l.a.occlusionDepthTileDim;
                    return l.a.sunOcclusion && e.primary && !l.a.vertexOcclusion && (e.sunOcclusion = new ze(Ze(e), void 0, void 0, i, a, void 0, l.a.sunOcclusionSampleCount)), l.a.occlusion && e.primary && (l.a.vertexOcclusion ? e.occlusion = new Ae(Ze(e), void 0, void 0, i, a, void 0, l.a.occlusionSampleCount) : e.occlusion = new _e(Ze(e), void 0, void 0, i, a, void 0, l.a.occlusionSampleCount)), e.firstRun = !0, e
                }
                var r, n, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Qe(e, t)
                }(t, RK.Object3D), r = t, i = [{
                    key: "setMorph",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (!e.morphTargetDictionary || !e.morphTargetInfluences) return console.error("Trying to set morph where item does not have morph targets");
                        var n = e.morphTargetDictionary[t];
                        void 0 !== n && e.morphTargetInfluences[n] !== r && (e.morphTargetInfluences[n] = r)
                    }
                }], (n = [{
                    key: "change",
                    value: function(e, t, r) {
                        var n = this,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                            a = new Ge(e.modded.parts, e.modded.settings.hiRez ? l.a.colorTextureSizeHigh : l.a.colorTextureSize);
                        this.loadingStartTime = performance.now(), this.resourcesReady = !1, void 0 !== this.finishedCallback && (console.warn("Did not call previous finishedCallback"), t && t()), this.finishedCallback = r, this.failedCallback = t, i = i.concat(this._getResources(e.modded, a));
                        var s = ++this.resourceRequestId,
                            o = function(t) {
                                n._loaded(s, e, i, a, t)
                            };
                        P.a.getResources(i, void 0, this.name, this.firstRun && window.Pre ? function(e, t) {
                            Pre.updateProgress(e, t)
                        } : void 0).then(o)
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.resourcesReady && this.needsUpdate && (this.needsUpdate = !1, this._attachMainSkeleton(), this._customUpdateStart(), this._removeOldParts(), this._attachParts(), this._updateLabels(), this._applyPartParents(), this._applyBlendShapes(), this._updateMorphIds(), this._mirrorPose(), this._applyMaterialSims(), this._applyLighting(), this._applyShaderSliders(), this._applyPose(), this._applyJointWeights(), this._applySnaps(), this._applyClips(), this._raySnaps(), this._updateGround(), this.updateStage(), this.updateVisibility(), this.colorBake && this.colorBake.removeAllTemp(), this._customUpdateEnd(), this.requestAnimate(), this._customSliders(), this._finishedApplyingUpdates = !0)
                    }
                }, {
                    key: "animation",
                    value: function() {
                        this._animation(), this._needsAnimationUpdate && (this._customSliders(), this._needsAnimationUpdate = !1, this._refreshPose(), this._applyAnimationConstraints(), this._applyPositionSnaps(), this._applyTransforms(), this._applyAnimationConstraintsPostTransforms(), this._applyIk(), this._applyPostAnimationConstraints(), this._updateExtremePoints(), u.a.emit("CharacterFinishedAnimating", this))
                    }
                }, {
                    key: "requestOcclusionRefresh",
                    value: function() {
                        this.sunOcclusion && (this.sunOcclusion.needsRefresh = !0), this.occlusion && (this.occlusion.needsRefresh = !0)
                    }
                }, {
                    key: "postAnimation",
                    value: function() {
                        var e = this;
                        if (this.loadingStartTime = void 0, this._finishedApplyingUpdates) {
                            if (this._finishedApplyingUpdates = !1, this._customFinishedUpdates(), this.data.tempTarget && this.colorBake.removeAllTemp(), this.colorBake.render(), this.requestOcclusionRefresh(), this.primary && u.a.emit("CharacterFinishedChanging", this), !this.needsUpdate && this.resourcesReady) {
                                if (this.updateFailed) this.updateFailed = !1, this.failedCallback && this.failedCallback();
                                else if (this.finishedCallback) {
                                    var t = this.finishedCallback;
                                    this.sim.bakedSurfaceHiRez && this.modded.settings.hiRez && !CK.Settings.twinsies || CK.Settings.forge && this.occlusion ? u.a.next("occlusionChanged", (function() {
                                        e.colorBake.surfaceBaker(), t()
                                    })) : t()
                                }
                                this.failedCallback = void 0, this.finishedCallback = void 0
                            }
                            this._customPreRender(), this.updateCamera(), this.firstRun = !1, u.a.emit("aCharacterFinishedChanging"), this.primary && this.data.clear && !this.data.tempTarget && u.a.emit("CharacterFinishedSwitching", this)
                        }
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this.occlusion && this.occlusion.needsRefresh;
                        this.sunOcclusion && this.sunOcclusion.needsRefresh && this.sunOcclusion.refresh(), e && this.occlusion.refresh();
                        var t = !this.occlusion || this.occlusion.isDone,
                            r = !this.sunOcclusion || this.sunOcclusion.isDone,
                            n = r && !t;
                        !r && this.sunOcclusion.render(), n && this.occlusion.render(), this.colorBake && this.colorBake.refresh()
                    }
                }, {
                    key: "_customSliders",
                    value: function() {}
                }, {
                    key: "getMeshesInAtlas",
                    value: function() {
                        var e = {};
                        if (this.atlas)
                            for (var t in this.atlas.packed) this.meshes[t] ? e[t] = this.meshes[t] : console.error("Why did we pack ", t, " but it is not in meshes?");
                        return e
                    }
                }, {
                    key: "end",
                    value: function() {
                        this.sunOcclusion && this.sunOcclusion.end(), this.occlusion && this.occlusion.end()
                    }
                }, {
                    key: "_loaded",
                    value: function(e, t, r, n, i) {
                        e === this.resourceRequestId && (i.map((function(e, t) {
                            e || (r[t].endsWith(".ckb"), r[t].endsWith(".png") && r[t].includes("_aaid_"))
                        })), this.resources = r, this.resourcesReady = !0, this.needsUpdate = !0, this.data = t, this.modded = t.modded, this.allColorLoaded = this.modded.settings.forceLoadAllColorMaps, this.atlas = n)
                    }
                }, {
                    key: "_getResources",
                    value: function(e, t) {
                        var r = [];
                        if (e) {
                            if (l.a.hasMainSkeleton && (this.skeletonPath = O.a.getMainSkeleton(e.settings.hiRez) + "?" + this.name, r.push(this.skeletonPath)), l.a.hasPoses)
                                for (var n in e.poses.main && r.push(O.a.getPose(e.poses.main.name, "human")), e.parts) {
                                    var i = e.parts[n].poseGroup;
                                    if (i) {
                                        var a = O.a.getPose(e.poses[n] ? e.poses[n].name : e.poses.main && e.poses.main.name, i);
                                        r.push(a)
                                    }
                                }
                            var s, o = e.parts,
                                u = e.settings.hiRez;
                            for (var c in o) {
                                if (s = o[c], r.push(O.a.getMeshPath(s, e.settings.hiRez)), l.a.subdivision) {
                                    var h = O.a.getPositionMapPath(s);
                                    r.push(h)
                                }
                                if (l.a.hidePerVertex && c in at && at[c].map((function(t) {
                                        var n = o[t];
                                        if (n) {
                                            var i = O.a.getMeshPairPath(s, n, e.settings.hiRez);
                                            r.push(i)
                                        }
                                    })), l.a.color && e.needsBake[c] && !s.solidBake) {
                                    var d = t.getSize(c);
                                    r.push(s.getMaskPath(u, d)), s.hasAAID && r.push(s.getAAIDPath(u, d));
                                    var f = e.decals[c];
                                    if (f)
                                        for (var p in f) {
                                            var m = f[p];
                                            r.push(m.getTexturePath(e.settings.hiRez))
                                        }
                                }
                            }
                            if (CK.environment.lighting.envLight && this.primary) {
                                var v = I.getSim(e.materialSim, e.materialSimColor);
                                v.lighting && v.lighting.envLight && r.push({
                                    path: O.a.getSphereEnvMap(v.lighting.envLight.mapName),
                                    type: "envSphere"
                                })
                            }
                            return r
                        }
                    }
                }, {
                    key: "_attachMainSkeleton",
                    value: function() {
                        if (l.a.hasMainSkeleton && !this.skeletons.main) {
                            var e = P.a.getNow(this.skeletonPath);
                            this.skeletons.main = new U.a, this.skeletons.main.skeletonSlot = "main", this.skeletons.main.addMainSkel(e.copyWithSharing()), this.add(this.skeletons.main.obj)
                        }
                    }
                }, {
                    key: "_removeOldParts",
                    value: function() {
                        for (var e in this.returnToParents(), this.meshes) e in this.modded.parts || this._removeSlot(e);
                        for (var t in this.modded.parts) {
                            var r = this.modded.parts[t];
                            t in this.meshes && O.a.getMeshPath(this.meshes[t].part, this.modded.settings.hiRez) !== O.a.getMeshPath(r, this.modded.settings.hiRez) && this._removeSlot(t)
                        }
                        P.a.unregister(this.name, this.resources)
                    }
                }, {
                    key: "_removeSlot",
                    value: function(e) {
                        var t = this.meshes[e];
                        if (t) {
                            var r = t.material,
                                n = t.geometry;
                            if (r.dispose(), delete this.meshes[e], t.parent.remove(t), this.remove(t), n.mainSkeleton ? t.skeleton && this.remove(t.skeleton.obj) : t.skeleton && t.skeleton.removeSkel(e), delete this.meshes[e], this._invalidateSeamFins(e), l.a.hidePerVertex)
                                for (var i in this.meshes) {
                                    var a = this.meshes[i];
                                    a && a.pairs && a.pairs[e] && delete a.pairs[e]
                                }
                        }
                    }
                }, {
                    key: "_attachParts",
                    value: function() {
                        var e = this,
                            t = [];
                        for (var r in this.modded.parts) {
                            var n = this.modded.parts[r],
                                i = O.a.getMeshPath(n, this.modded.settings.hiRez);
                            if (!(r in this.meshes) || O.a.getMeshPath(this.meshes[r].part, this.modded.settings.hiRez) !== i) {
                                var a = P.a.getNow(i);
                                a ? t.push([a, n, r]) : this._exception("Missing part!" + n.name)
                            }
                        }
                        if (t.sort((function(e, t) {
                                return e[0].mainSkeleton ? -1 : 1
                            })).map((function(t) {
                                return e._attachPart.apply(e, Xe(t))
                            })), l.a.hidePerVertex) {
                            var s = function(t) {
                                var r = e.modded.parts[t];
                                if (!r) return "continue";
                                at[t].map((function(n) {
                                    var i = e.modded.parts[n];
                                    if (i) {
                                        var a = O.a.getMeshPairPath(r, i, e.modded.settings.hiRez),
                                            s = P.a.getNow(a),
                                            o = e.meshes[t],
                                            l = e.meshes[n];
                                        o.pairs = o.pairs || {}, l.pairs = l.pairs || {}, o.pairs[n] = s, l.pairs[t] = s
                                    }
                                }))
                            };
                            for (var o in at) s(o)
                        }
                    }
                }, {
                    key: "_attachPart",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.slot;
                        if (e) {
                            if ("texture" !== t.type)
                                if (r in this.modded.parts && O.a.getMeshPath(t, this.modded.settings.hiRez) === O.a.getMeshPath(this.modded.parts[r], this.modded.settings.hiRez)) {
                                    var n = O.a.getPositionMapPath(t),
                                        i = P.a.loaded(n);
                                    if (i) {
                                        var a = P.a.getNow(n);
                                        e.ckbPositionMap = a
                                    }
                                    "text" === t.type ? this._attachMesh(this._getTextGeo(e, t), t, r) : "font" === t.type ? this.fonts[r] = e : this._attachMesh(e, t, r)
                                } else console.warn("ignoring part", t, " because it is already loaded. How did this happen?")
                        } else this._exception("Failed to load " + t.name + " in slot " + r)
                    }
                }, {
                    key: "_attachMesh",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.slot,
                            n = C.a.slots[r];
                        e.isMixerBuffer && (e = r.startsWith("k_") && "kit" !== t.slot && e.skinned && !e.mainSkeleton ? e.copyAsStandalone(P.a.getNow(this.skeletonPath).mixerBones) : n && n.keywords.detach ? e.copyUnskinned() : e.copyWithSharing());
                        var i = this.atlas.hasSlot(r) && this.atlas.getSize(r),
                            a = I.getOptionsFromGeo(e, t, this, i),
                            s = new SK.Physical(a),
                            o = this.modded.settings.hiRez,
                            u = i && t.getNormalPath(o, i),
                            c = !(!(o && l.a.hiRezNormalMaps || !o && l.a.normalMaps) || void 0 === e.attributes || void 0 === e.attributes.uv || !u);
                        s.setUniform("flipNormalMap", c && "L" === t.side ? 1 : 0), e.name = r;
                        var h = j.a.makeMesh(e, s);
                        if (h.customDepthMaterial = new SK.Depth(a), t.collision && (s.visible = !1, h.customDepthMaterial.visible = !1), e.mainSkeleton) {
                            var d = new U.a;
                            d.add(h, r), this.add(d.obj)
                        } else if (e.skinned) {
                            var f = this.skeletons[n.skel || "main"];
                            if (!f) {
                                var p = this.meshes[n.skel] || console.error("Slot skel ", n.skel, " does not exist");
                                p && (f = p.skeleton)
                            }
                            f && f.add(h, r)
                        } else if (e.locators)
                            for (var m in h.locators = {}, e.locators) h.locators[m] = e.locators[m].clone(), h.add(h.locators[m]);
                        r in this.meshes && console.error("Mesh part in slot", r, " was not deleted properly"), h.part = t, this.meshes[r] = h, this.rebuildSeamFins = !0, l.a.twinsies && !l.a.forge && this.modded.settings.hiRez && h.layers.set(2)
                    }
                }, {
                    key: "_updateLabels",
                    value: function() {
                        for (var e in this.modded.labels)
                            if (e in this.meshes) {
                                var t = this.meshes[e],
                                    r = t.geometry;
                                r instanceof RK.TextBufferGeometry && r.text !== this.modded.labels[e] && (t.geometry = this._getTextGeo(r.font, t.part))
                            }
                    }
                }, {
                    key: "_getTextGeo",
                    value: function(e, t) {
                        var r = this.modded.labels[t.slot] || " ",
                            n = new RK.TextBufferGeometry(r, {
                                font: e,
                                size: .23,
                                height: .1,
                                curveSegments: 6,
                                bevelEnabled: !1,
                                uvs: !0
                            });
                        n.center(), n.text = r, n.font = e;
                        var i = 2 * n.boundingBox.max.x,
                            a = this.modded.parts.base && this.modded.parts.base.keywords.initiative ? 1.7 : 2;
                        return i > a && (n.textScaleCompensate = a / i), n
                    }
                }, {
                    key: "_mirrorPose",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        if (this.modded.mirrorPose && void 0 === e || void 0 !== e && e)
                            for (var t in this.scale.x = -1, this.meshes) {
                                var r = this.meshes[t];
                                if (l.a.getSlotSetting(t, "allowMirror")) {
                                    var n = r.material;
                                    n.setUniform("flipNormal", 1), n.ckReverseWinding = !0, r.customDepthMaterial.ckReverseWinding = !0, r.IDMaterial && (r.IDMaterial.setUniform("flipNormal", 1), r.IDMaterial.ckReverseWinding = !0)
                                } else r.skinned || (r.scale.x = -1)
                            } else
                                for (var i in this.scale.x = 1, this.meshes) {
                                    var a = this.meshes[i];
                                    a.material.setUniform("flipNormal", 0), a.material.ckReverseWinding = !1, a.customDepthMaterial.ckReverseWinding = !1, a.skinned || (a.scale.x = 1), a.IDMaterial && (a.IDMaterial.setUniform("flipNormal", 0), a.IDMaterial.ckReverseWinding = !1)
                                }
                    }
                }, {
                    key: "previewSliders",
                    value: function(e, t, r) {
                        for (var n in t) this._applyBlendSlider(n, t[n]);
                        for (var i in e) this._applyJointWeight(i, e[i]);
                        for (var a in r) this._applyShaderSlider(a, r[a]);
                        this.requestAnimate()
                    }
                }, {
                    key: "_applyJointWeights",
                    value: function() {
                        if (l.a.hasMainSkeleton) {
                            if (this.modded.jointWeights.default)
                                for (var e in this.skeletons.main.sliders) {
                                    var t = this.modded.jointWeights.default[e];
                                    t ? this.skeletons.main.setSlider(e, t) : this.skeletons.main.setSlider(e, 0)
                                }
                            for (var r in this.meshes)
                                if (r in this.modded.jointWeights) {
                                    var n = this.meshes[r].skeleton;
                                    if (n) {
                                        var i = this.modded.jointWeights[r];
                                        for (var a in i) n.setSlider(a, this.modded.jointWeights[r][a])
                                    }
                                }
                        }
                    }
                }, {
                    key: "_applyJointWeight",
                    value: function(e, t) {
                        if ("default" === e || "skeleton" === e)
                            for (var r in t) this.skeletons.main.setSlider(r, t[r]);
                        else {
                            var n = this.meshes[e];
                            if (n && n.skeleton)
                                for (var i in t) n.skeleton.setSlider(i, t[i])
                        }
                    }
                }, {
                    key: "_applyShaderSliders",
                    value: function() {
                        for (var e in this.modded.shaderParams) this._applyShaderSlider(e, this.modded.shaderParams[e])
                    }
                }, {
                    key: "_applyMaterialSims",
                    value: function() {
                        if (this.sim = I.getSim(this.modded.materialSim, this.modded.materialSimColor), this.modded.background) {
                            var e = l.a.bgLighting[this.modded.background] || {};
                            this.sim = I.assignLighting(this.sim, e)
                        }
                        var t = this.getMeshes();
                        for (var r in t) {
                            var n = t[r];
                            if (n.part && n.part.keywords.useDefaultSim) {
                                var i = I.getSim("default");
                                n.material.setUniform(i), n.material.env = !0
                            } else n.material.setUniforms(this.sim), n.material.env = !0
                        }
                    }
                }, {
                    key: "_applyLighting",
                    value: function() {
                        if (this.primary) {
                            var e = ["envLight", "ambient", "sunlight"];
                            for (var t in e) {
                                var r = e[t];
                                if (CK.environment.lighting[r] && this.sim.lighting && this.sim.lighting[r])
                                    for (var n in this.sim.lighting[r]) "position" === n || "color" === n ? CK.environment.lighting[r][n].copy(this.sim.lighting[r][n]) : CK.environment.lighting[r][n] = this.sim.lighting[r][n]
                            }
                            CK.environment.lighting.setEnvMap(this.sim.lighting.envLight.mapName);
                            var i = this.sim.lighting && this.sim.lighting.envCube;
                            i && (CK.environment.ground && CK.environment.ground.updateColor(i.groundColor, void 0 !== i.groundShadowStrength ? i.groundShadowStrength : 1, i.shadowColor || new RK.Vec3(0, 0, 0)), CK.environment.background && CK.environment.background.updateValues(i.envCubeSaturation, i.fog, i.contrast), CK.environment.rotation.y = i.rotation || 0)
                        }
                    }
                }, {
                    key: "_applyShaderSlider",
                    value: function(e, t) {
                        var r = e.split(":"),
                            n = r[0],
                            i = r[1];
                        n in this.meshes && this.meshes[n].material.setUniform(i, t)
                    }
                }, {
                    key: "_updateMorphIds",
                    value: function() {
                        var e = this.modded.morphByIdMods;
                        for (var t in this.meshes) {
                            var r = this.meshes[t];
                            if (r.material.colors)
                                if (t in e && void 0 === r.morphTargetInfluences) console.error("Missing ID morph target for", t);
                                else if (t in e && void 0 !== r.morphTargetInfluences && r.morphTargetInfluences.length > 0) {
                                r.morphTargetInfluences[0] = 1;
                                var n = e[t],
                                    i = [];
                                for (var a in n) n[a] < 1 && i.push(a);
                                r.material.colorIdMorphs = i, r.customDepthMaterial.colorIdMorphs = i
                            } else r.material.colorIdMorphs = void 0, r.customDepthMaterial.colorIdMorphs = void 0
                        }
                    }
                }, {
                    key: "_applyBlendShapes",
                    value: function() {
                        for (var e in this.meshes) {
                            var r = this.meshes[e];
                            for (var n in r.morphTargetDictionary) t.setMorph(r, n, (this.modded.blendForms[e] || {})[n])
                        }
                        for (var i in this.modded.binaryForms)
                            if (i in this.meshes) {
                                var a = this.modded.binaryForms[i],
                                    s = this.meshes[i];
                                if (void 0 !== s.morphTargetDictionary)
                                    for (var o in a) {
                                        var l = a[o];
                                        for (var u in l)
                                            if (l[u] in s.morphTargetDictionary) {
                                                t.setMorph(s, l[u], .9999);
                                                break
                                            }
                                    }
                            }
                    }
                }, {
                    key: "_applyBlendSlider",
                    value: function(e, t) {
                        for (var r in t)
                            if (e in this.meshes) {
                                var n = this.meshes[e];
                                if (n.morphTargetDictionary && r in n.morphTargetDictionary) {
                                    var i = n.morphTargetDictionary[r];
                                    n.morphTargetInfluences[i] = t[r]
                                }
                            }
                    }
                }, {
                    key: "getAllSkeletons",
                    value: function() {
                        var e = {};
                        for (var t in this.meshes) this.meshes[t].geometry.mainSkeleton && (e[t] = this.meshes[t].skeleton);
                        return Object.assign(e, this.skeletons), e
                    }
                }, {
                    key: "_applyPose",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (l.a.hasPoses) {
                            var r = We.a.deepCopy(this.modded.poseModifiers),
                                n = function(t) {
                                    var n = e.meshes[t],
                                        i = n.part;
                                    if (i && n.part.poseModifier) {
                                        var a = n.skeleton && n.skeleton.skeletonSlot ? n.skeleton.skeletonSlot : e.skeletons.main === n.skeleton ? "main" : t;
                                        r[a] || (r[a] = []), n.part.poseModifier.map((function(e) {
                                            r[a].push({
                                                priority: i.slot in CK.Options.slots ? CK.Options.slots[i.slot].anim_priority : 0,
                                                modifierName: e + (i.sided ? i.side : "")
                                            })
                                        }))
                                    }
                                };
                            for (var i in this.meshes) n(i);
                            for (var a in t) r[a] || (r[a] = []), r[a] = r[a].concat(t[a]);
                            var s = this.getAllSkeletons();
                            for (var o in s) {
                                var u = s[o],
                                    c = this.modded.poses[o] ? this.modded.poses[o].name : this.modded.poses.main && this.modded.poses.main.name;
                                if (c) {
                                    var h = P.a.getNow(O.a.getPose(c, "main" === o || o.startsWith("main_") ? "human" : this.modded.parts[o].poseGroup)),
                                        d = o in r ? r[o].sort((function(e, t) {
                                            return e.priority - t.priority
                                        })).map((function(e) {
                                            return e.modifierName
                                        })) : [];
                                    d.unshift("A1"), u && h && u.changePose(c, h.poses, d)
                                }
                            }
                        }
                    }
                }, {
                    key: "_applySnaps",
                    value: function() {
                        if (l.a.hasMainSkeleton) {
                            var e = !1;
                            for (var t in this.modded.snaps) {
                                var r = this.modded.snaps[t];
                                if (r.endsWith("_jnt") && t.endsWith("_jnt")) {
                                    var n = this.getBone(t) || this.getObjectByName(t),
                                        i = this.getBone(r) || this.getObjectByName(r);
                                    n && i ? (e = !0, this.skeletons.main.obj.snapBones = {
                                        from: n,
                                        to: i
                                    }) : this._exception("Failed to snap slot" + t + "to" + r + "because one or more joints were not found")
                                }
                            }
                            e || void 0 === this.skeletons.main.obj.snapBones || (this.skeletons.main.obj.snapBones = void 0, this.skeletons.main.obj.position.set(0, 0, 0))
                        }
                    }
                }, {
                    key: "_applyClips",
                    value: function() {
                        if (!l.a.disableClipping && this.modded.settings.hiRez)
                            for (var e in this.meshes)
                                if (this.meshes[e].isSkinnedMesh) {
                                    var t = this.getClip(e);
                                    this.meshes[e].material.clipHeight = t
                                }
                    }
                }, {
                    key: "getClip",
                    value: function(e) {
                        return this.modded.disableClipping ? -99 : void 0 !== this.modded.clips[e] ? this.modded.clips[e] : void 0 !== this.modded.clips.global ? this.modded.clips.global : void 0 !== l.a.globalClipPlane ? l.a.globalClipPlane : void 0
                    }
                }, {
                    key: "getBone",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bodyUpper",
                            r = this.meshes[t];
                        return this.getBoneFromID(r, e, t)
                    }
                }, {
                    key: "getBoneFromID",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root",
                            r = arguments.length > 2 ? arguments[2] : void 0;
                        if (e) {
                            var n = e.skeleton,
                                i = e.geometry;
                            if ("root" === t) return e;
                            if (!n) return this.getObjectByName(t);
                            if (isNaN(t)) {
                                var a = n.obj.getObjectByName(t);
                                if (a) return a;
                                var s = this.orphans.find((function(e) {
                                    return e[0].name === t && (!r || r === e[2])
                                }));
                                return s ? s[0] : void 0
                            }
                            var o = parseInt(t);
                            if (o < 500) return n.bones[o];
                            var l = i.mixerBonesByOrigID[o];
                            if (l) {
                                var u = n.obj.getObjectByName(l.name);
                                if (u) return u;
                                for (var c in this.orphans) {
                                    var h = He(this.orphans[c], 3),
                                        d = h[0],
                                        f = (h[1], h[2]);
                                    if (!r || r === f) {
                                        var p = d.getObjectByName(l.name);
                                        if (p) return p
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "_applyTransforms",
                    value: function() {
                        var e = this.modded.transforms;
                        for (var t in e)
                            for (var r in e[t]) {
                                var n = e[t][r],
                                    i = n.pos,
                                    a = n.rot,
                                    s = n.scl,
                                    o = n.qtn,
                                    l = n.flp,
                                    u = n.flo,
                                    c = this.meshes[t];
                                if (c) {
                                    var h = this.getBoneFromID(c, r, t);
                                    if (h) {
                                        if (i && (Object.assign(h.position, i), h.matrixWorldNeedsUpdate = !0), a) {
                                            for (var d in a) h.rotation[d] = a[d];
                                            h.matrixWorldNeedsUpdate = !0
                                        }
                                        o && (h.quaternion.copy(o), h.matrixWorldNeedsUpdate = !0), s && (Object.assign(h.scale, s), h.material && s[0] * s[1] * s[2] < 0 && (h.material.ckReverseWinding = !0, h.customDepthMaterial.ckReverseWinding = !0), h.matrixWorldNeedsUpdate = !0), l && (h.flip = !!l, h.matrixWorldNeedsUpdate = !0), u && (Object.assign(h.flipOffset, u), h.matrixWorldNeedsUpdate = !0), this._propagateMatrixNeedsUpdate(h)
                                    }
                                }
                            }
                    }
                }, {
                    key: "_propagateMatrixNeedsUpdate",
                    value: function(e) {
                        if (e.matrixWorldNeedsUpdate)
                            for (var t in e.children) {
                                var r = e.children[t];
                                !1 === r.matrixWorldNeedsUpdate && (r.matrixWorldNeedsUpdate = !0, this._propagateMatrixNeedsUpdate(r))
                            }
                    }
                }, {
                    key: "_raySnaps",
                    value: function() {}
                }, {
                    key: "_getParent",
                    value: function(e, t) {
                        if (t in this.modded.snaps) {
                            var r = this.modded.snaps[t];
                            if (r in this.meshes) return this.meshes[r];
                            var n = C.a.slots[t];
                            if (n) {
                                var i = (this.skeletons[n.skel] || this.meshes[n.skel] || {}).skeleton;
                                if (i) {
                                    var a = i.obj.getObjectByName(r);
                                    if (a) return a
                                }
                            }
                            var s = this.getBone(r) || this.getObjectByName(r) || this.rivets[r];
                            return s || (console.warn("Could not find object to snap to", r), this)
                        }
                        return t in this.objectSnaps ? this.objectSnaps[t] : e.geometry.mainSkeleton && void 0 !== e.skeleton ? e.skeleton.obj : e.geometry.skinned ? this.skeletons.main.obj : this
                    }
                }, {
                    key: "_applyPartParents",
                    value: function() {
                        for (var e in this.meshes) {
                            var t = this.meshes[e],
                                r = this._getParent(t, e);
                            t.parent != r && r.add(t)
                        }
                    }
                }, {
                    key: "updateStage",
                    value: function() {}
                }, {
                    key: "updateVisibility",
                    value: function() {
                        var e = this.modded.settings.showOnly;
                        if (e)
                            for (var t in this.meshes) this.meshes[t].part.collision || (this.meshes[t].material.visible = !!e[t]);
                        else
                            for (var r in this.meshes) this.meshes[r].part.collision || (this.meshes[r].material.visible = !0)
                    }
                }, {
                    key: "updateCamera",
                    value: function() {
                        this.primary && CK.orbitCamera.change(this.getCamera())
                    }
                }, {
                    key: "getCamera",
                    value: function(e) {
                        return this.modded.camera || "default"
                    }
                }, {
                    key: "_updateGround",
                    value: function() {
                        if (this.primary) {
                            var e = 0;
                            for (var t in this.meshes) e += l.a.getSlotSetting(t, "groundOffset");
                            e != this._groundOffset && (u.a.emit("characterGroundChanged", e), this._groundOffset = e);
                            var r = CK.environment.ground;
                            r.material && r.material.setUniform("alpha", this.modded.disableClipping ? .7 : 1), r.visible = !this.modded.hideGround
                        }
                    }
                }, {
                    key: "requestAnimate",
                    value: function() {
                        for (var e in this.meshes) this.meshes[e].skeleton && this.meshes[e].skeleton.requestPoseRefresh();
                        this.requestAnimationRefresh(), CK.renderManager.requestShadowUpdate(), o.a.requestAnimationRefresh()
                    }
                }, {
                    key: "_customPreRender",
                    value: function() {}
                }, {
                    key: "_applyAnimationConstraintsPostTransforms",
                    value: function() {}
                }, {
                    key: "_applyPositionSnaps",
                    value: function() {
                        for (var e in this.modded.positionSnaps) {
                            var t = this.modded.positionSnaps[e],
                                r = this.getBone(e),
                                n = this.getBone(t);
                            if (r && n) {
                                var i = r.parent;
                                n.parent.updateMatrixWorld(), RK.SceneUtils.detach(r, i, CK.scene), r.position.copy((new RK.Vec3).setFromMatrixPosition(n.matrixWorld)), r.updateMatrixWorld(), RK.SceneUtils.attach(r, CK.scene, i), r.parent.updateMatrixWorld()
                            }
                        }
                    }
                }, {
                    key: "_applyIk",
                    value: function() {
                        if (this.modded.ikChains.length > 0 && this.enableIk)
                            for (var e in CK.scene.updateMatrixWorld(!0), this.modded.ikChains) {
                                var t = this.modded.ikChains[e];
                                this.skeletons.main.applyIk(t.chain, t.target, t.targetSnap, this.enableIkDebug)
                            }
                    }
                }, {
                    key: "_exception",
                    value: function(e) {
                        this.updateFailed = !0, Reporting.exception(e)
                    }
                }, {
                    key: "getMeshes",
                    value: function() {
                        return Object.assign({}, this.meshes)
                    }
                }, {
                    key: "getSeamFinMeshes",
                    value: function() {
                        return l.a.seamFin ? (this.rebuildSeamFins && (this._buildSeamFins(), this.rebuildSeamFins = !1), Object.assign({}, this.seamFinMeshes)) : []
                    }
                }, {
                    key: "toggleIk",
                    value: function() {
                        this.enableIk = !this.enableIk, this.enableIkDebug = !0, this._needsAnimationUpdate = !0, this.skeletons.main.requestPoseRefresh()
                    }
                }, {
                    key: "toggleIkRotation",
                    value: function() {
                        this.enableIkRotation = !this.enableIkRotation, this._needsAnimationUpdate = !0, this.skeletons.main.requestPoseRefresh()
                    }
                }, {
                    key: "_customUpdateStart",
                    value: function() {}
                }, {
                    key: "_customUpdateEnd",
                    value: function() {}
                }, {
                    key: "_customFinishedUpdates",
                    value: function() {}
                }, {
                    key: "_invalidateSeamFins",
                    value: function(e) {
                        var t = this;
                        if (!l.a.seamFin) return [];
                        var r = new Set;
                        r.add(e);
                        var n = $e[e];
                        if (n)
                            for (var i in n) r.add(n[i]);
                        if (n = et[e])
                            for (var a in n) r.add(n[a]);
                        r.forEach((function(e) {
                            var r = t.seamFinMeshes[e];
                            if (void 0 !== r) {
                                for (; r.length;) {
                                    var n = r.pop();
                                    n.parent.remove(n)
                                }
                                delete t.seamFinMeshes[e], t.rebuildSeamFins = !0
                            }
                        }))
                    }
                }, {
                    key: "_buildSeamFins",
                    value: function() {
                        var e = this;
                        if (!l.a.seamFin) return [];
                        for (var t in this.meshes)
                            if (void 0 === this.seamFinMeshes[t]) {
                                var r = this.meshes[t],
                                    n = (r.geometry.ckSeams, []),
                                    i = new Set;
                                if ($e[t])
                                    for (var a = $e[t], s = 0; s < a.length; ++s) {
                                        var o = a[s];
                                        i.add(o)
                                    }
                                if (et[t])
                                    for (var u = et[t], c = 0; c < u.length; ++c) {
                                        var h = u[c];
                                        i.add(h)
                                    }
                                for (var d = Array.from(i).map((function(t) {
                                        return e.meshes[t]
                                    })).filter((function(e) {
                                        return e
                                    })).map((function(e) {
                                        return e.geometry
                                    })), f = W.Create(r.geometry, d), p = f.inner.map((function(e) {
                                        return {
                                            geometry: e,
                                            layer: 7
                                        }
                                    })).concat(f.outer.map((function(e) {
                                        return {
                                            geometry: e,
                                            layer: 8
                                        }
                                    }))), m = 0; m < p.length; ++m) {
                                    var v = p[m].geometry,
                                        g = p[m].layer,
                                        y = null;
                                    for (var b in r.skeleton && r.bindMatrix ? (y = new RK.SkinnedMesh(v, r.material)).bind(r.skeleton, r.bindMatrix) : y = new RK.Mesh(v, r.material), y.seamFin = {
                                            originalMesh: r,
                                            originalSlot: t
                                        }, this.meshes) {
                                        var k = this.meshes[b];
                                        k.geometry === v.seamSourceGeometry && (y.seamFin.originalMesh = k, y.seamFin.originalSlot = b)
                                    }
                                    y.layers.set(g), y.frustumCulled = !1, y.customDepthMaterial = new SK.Depth({
                                        options: {
                                            visible: !1
                                        }
                                    }), n.push(y), r.parent.add(y)
                                }
                                this.seamFinMeshes[t] = r.seamFinMeshes = n
                            }
                    }
                }, {
                    key: "getManufacturingOptions",
                    value: function() {
                        return {}
                    }
                }, {
                    key: "_refreshPose",
                    value: function() {
                        var e = this.getAllSkeletons();
                        for (var t in e) e[t].refreshAnimations()
                    }
                }, {
                    key: "_animation",
                    value: function() {
                        var e = this.getAllSkeletons();
                        for (var t in e) e[t].needsUpdate = !0
                    }
                }, {
                    key: "_applyAnimationConstraints",
                    value: function() {}
                }, {
                    key: "_applyPostAnimationConstraints",
                    value: function() {}
                }, {
                    key: "allPoses",
                    value: function() {}
                }, {
                    key: "hasKey",
                    value: function(e, t) {
                        if (this.modded) {
                            Array.isArray(t) || (t = [t]);
                            var r = this.modded.parts[e];
                            return r && r.keywords ? t.find((function(e) {
                                return e in r.keywords
                            })) : void 0
                        }
                    }
                }, {
                    key: "isPose",
                    value: function(e) {
                        if (this.modded.poses.main) return this.modded.poses.main.name === e || this.modded.poses.main.pose_id === e
                    }
                }, {
                    key: "reParent",
                    value: function(e, t, r) {
                        t.children.find((function(t) {
                            return t === e
                        })) || (console.log("reperenting"), this.orphans.push([e, e.parent, r]), t.add(e))
                    }
                }, {
                    key: "returnToParents",
                    value: function() {
                        this.orphans.map((function(e) {
                            return e[1].add(e[0])
                        })), this.orphans = []
                    }
                }, {
                    key: "getTransform",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "rot",
                            n = this.modded.transforms[e],
                            i = this.getBoneFromID(this.meshes[e], t);
                        if (i) {
                            var a = {};
                            n && n[t] && n[t][r] && (a = n[t][r]);
                            var s = i[{
                                rot: "rotation",
                                scl: "scale",
                                pos: "position"
                            }[r]].toSimple();
                            return Object.assign({}, s, a)
                        }
                    }
                }, {
                    key: "requestAnimationRefresh",
                    value: function() {
                        this._needsAnimationUpdate = !0
                    }
                }, {
                    key: "updateEyeShaders",
                    value: function() {}
                }, {
                    key: "bakeCodePosingIntoTransforms",
                    value: function(e) {}
                }, {
                    key: "_updateExtremePoints",
                    value: function() {
                        var e = 0;
                        for (var t in this.meshes) {
                            var r = this.meshes[t].geometry.extremeIndices;
                            r ? e += r.length : void 0 === r && (e += 5)
                        }
                        var n = new Float32Array(3 * e),
                            i = 0;
                        for (var a in this.meshes) {
                            var s = this.meshes[a],
                                o = s.geometry,
                                l = o.extremeIndices,
                                u = o.attributes.position.array,
                                c = o.attributes.skinIndex0,
                                h = o.attributes.skinWeight0;
                            if (void 0 === l) {
                                var d = u.length / 3;
                                l = new Uint32Array(5);
                                for (var f = 0; f < 5; ++f) l[f] = Math.trunc(d * (f + .5) / 5)
                            }
                            if (l && l.length) {
                                o.extremePositions || (o.extremePositions = new Float32Array(3 * l.length));
                                var p = o.extremePositions;
                                if (c && h) {
                                    for (var m = c.array, v = h.array, g = s.skeleton.bones.map((function(e) {
                                            return e ? (e.updateMatrixWorld(), e.matrixWorld) : void 0
                                        })), y = s.skeleton.boneInverses, b = [], k = 0; k < g.length; ++k) {
                                        var w = g[k];
                                        if (w) {
                                            var S = y[k],
                                                C = w.clone().multiply(S);
                                            b[k] = C
                                        }
                                    }
                                    for (var _ = (new RK.Matrix4).set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), R = new RK.Vec3, T = new RK.Matrix4, M = T.elements, x = 0; x < l.length; ++x, ++i) {
                                        var P = l[x];
                                        T.copy(_);
                                        for (var O = 0, K = 0; K < 4; ++K) {
                                            var A = v[4 * P + K];
                                            if (A > 0) {
                                                var E = b[m[4 * P + K]];
                                                if (!E) return console.error("Hey Adam, skin matrix undefined for", a);
                                                for (var B = E.elements, I = 0; I < 16; ++I) M[I] += B[I] * A;
                                                O += A
                                            }
                                        }
                                        O > 0 && T.multiplyScalar(1 / O), R.fromArray(u, 3 * P), R.applyMatrix4(T), R.toArray(n, 3 * i), R.toArray(p, 3 * x)
                                    }
                                } else
                                    for (var D = new RK.Vec3, F = s.matrixWorld, U = 0; U < l.length; ++U, ++i) {
                                        var j = l[U];
                                        D.fromArray(u, 3 * j), D.applyMatrix4(F), D.toArray(n, 3 * i), D.toArray(p, 3 * U)
                                    }
                            }
                        }
                        this.extremePositions = n, this._approximateBoundingSphere = null, this.getRoughBoundingSphere()
                    }
                }, {
                    key: "getRoughBoundingSphere",
                    value: function() {
                        if (!this._approximateBoundingSphere) {
                            var e = this.extremePositions;
                            if (!e || !e.length) return {
                                center: new RK.Vec3(0, 2, 0),
                                radius: 3
                            };
                            var t = e.length / 3,
                                r = new RK.Vec3,
                                n = new RK.Vec3,
                                i = new RK.Vec3;
                            r.fromArray(e, 0);
                            for (var a = 0, s = 1; s < t; ++s) {
                                i.fromArray(e, 3 * s);
                                var o = i.distanceToSquared(r);
                                o > a && (n.copy(i), a = o)
                            }
                            a = 0;
                            for (var l = 0; l < t; ++l) {
                                i.fromArray(e, 3 * l);
                                var u = i.distanceToSquared(n);
                                u > a && (r.copy(i), a = u)
                            }
                            for (var c = (new RK.Vec3).copy(r).add(n).divideScalar(2), h = i.copy(n).sub(r).length() / 2, d = (h *= 1.00001) * h, f = 0; f < t; ++f) {
                                r.fromArray(e, 3 * f);
                                var p = r.sub(c).lengthSq();
                                if (p > d) {
                                    h = Math.sqrt(d);
                                    var m = (Math.sqrt(p) - h) / 2;
                                    h += m, d = (h *= 1.00001) * h, r.normalize().multiplyScalar(m), c.add(r)
                                }
                            }
                            var v = {
                                center: c,
                                radius: h
                            };
                            this._approximateBoundingSphere = v
                        }
                        return this._approximateBoundingSphere
                    }
                }, {
                    key: "loadingDuration",
                    get: function() {
                        return this.loadingStartTime ? performance.now() - this.loadingStartTime : 0
                    }
                }]) && Ye(r.prototype, n), i && Ye(r, i), t
            }(),
            ot = r(63),
            lt = r(45);

        function ut(e) {
            return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ct(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ht(e, t) {
            return !t || "object" !== ut(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function dt(e) {
            return (dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ft(e, t) {
            return (ft = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var pt = function(e) {
            function t() {
                var e, r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (ct(this, t), e = ht(this, dt(t).call(this)), !r) return ht(e);
                for (var n = 0; n < 3; n++) {
                    var i = new RK.BufferGeometry,
                        a = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
                    a[n + 3] = 1, a[n + 6] = 1, i.addAttribute("position", new RK.BufferAttribute(a, 3));
                    var s = new SK.Basic({
                            color: (new RK.Vec3).setComponent(n, 1),
                            wireframe: !0
                        }),
                        o = new RK.Mesh(i, s);
                    e.add(o)
                }
                return e.renderOrder = 1e6, e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ft(e, t)
            }(t, RK.Object3D), t
        }();

        function mt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var vt = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "renderMontage",
                value: function(e) {
                    console.error("Render Montage only in development mode")
                }
            }, {
                key: "configThumb",
                value: function(e, t) {
                    var r = this;
                    return new Promise((function(n, i) {
                        try {
                            r.requestThumbnail(e, n, t)
                        } catch (e) {
                            i("Failed to get thumbnail", e)
                        }
                    }))
                }
            }, {
                key: "requestThumbnail",
                value: function(t, r, n, i) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    CK.character.request(t, {
                        showMaterialSim: n
                    }).then((function() {
                        var t = !!CK.environment.scaleVisualizer && CK.environment.scaleVisualizer.visible;
                        console.log("Visualized"), t && CK.environment.scaleVisualizer.hide();
                        var n = e.renderThumbnail(void 0, void 0, i, void 0, a);
                        t && CK.environment.scaleVisualizer.show(), r(n)
                    }))
                }
            }, {
                key: "renderThumbnail",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.a.showBackgroundImageInScreenshots && !l.a.forge,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        a = arguments.length > 5 ? arguments[5] : void 0,
                        s = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
                    n || (n = b.objFromName(CK.display.getCamera(!0))), this.renderer.shadowMap.needsUpdate = !0;
                    var u = CK.display.rotation.y;
                    CK.resetCharacterRotation();
                    var c = e || l.a.thumbnailSize[0],
                        h = t || l.a.thumbnailSize[1],
                        d = new RK.PerspectiveCamera(n.FOV || l.a.FOV, c / h, 2, 100);
                    d.position.fromArray(n.position), s && d.rotation.reorder("YZX"), d.rotation.fromArray(n.rotation), a && (a.add(d), CK.scene.updateMatrixWorld(!0)), d.updateProjectionMatrix(), CK.environment.stage.object3D.visible = !1;
                    var f = !1,
                        p = !1,
                        m = CK.display.meshes.bg;
                    l.a.hideBackgroundForThumbnails && (p = CK.environment.visibleBG, CK.environment.visibleBG = !1, void 0 !== m && (f = m.visible, m.visible = !1)), window.EX && EX.Kit && EX.Kit.transformer && (EX.Kit.transformer.visible = !EX.Kit.transformer.visible);
                    var v = this.renderToImage(c, h, d, !!r || void 0);
                    return window.EX && EX.Kit && EX.Kit.transformer && (EX.Kit.transformer.visible = !EX.Kit.transformer.visible), l.a.hideBackgroundForThumbnails && (CK.environment.visibleBG = p, void 0 !== m && (m.visible = f)), CK.environment.stage.object3D.visible = !0, CK.display.rotation.y = u, o.a.requestAnimationRefresh(), r && CK.data.environment.bg && (v = this.addBackground(v)), i ? v : v.toDataURL("image/" + l.a.thumbFormat, .9)
                }
            }, {
                key: "addBackground",
                value: function(e) {
                    var t = e.getContext("2d");
                    t.globalCompositeOperation = "destination-over";
                    var r = document.createElement("img");
                    r.src = O.a.getBG(CK.data.environment.bg);
                    var n = e.height / r.height * r.width;
                    return t.drawImage(r, -(n - e.width) / 2, 0, n, e.height), e
                }
            }, {
                key: "downloadHiRezScreenshot",
                value: function() {
                    l.a.thumbFormat = "png", l.a.thumbTransparency = !0, l.a.thumbnailHighAA = !1, l.a.thumbnailSize = [4096, 4096], l.a.hideBackgroundForThumbnails = !0;
                    var t = e.renderThumbnail(2048, 2048);
                    if (t) {
                        var r = document.createElement("a");
                        r.href = t, r.download = window.ckLastClickedConfigThumbnail || "ScreenshotHiRezDownload.png", document.body.appendChild(r), r.click(), document.body.removeChild(r)
                    }
                }
            }, {
                key: "getScreenshot",
                value: function(e) {
                    try {
                        return console.log("Taking Screenshot"), CK.renderManager.renderMain(), CK.renderManager.renderer.domElement.toBlob(e), CK.renderManager.renderer.domElement
                    } catch (e) {
                        Reporting.exception("screenshots_unsupported"), u.a.emit("alert", ["Browser does not support taking screenshots", "Oh no"])
                    }
                }
            }, {
                key: "getThumbnailBlob",
                value: function(t) {
                    try {
                        console.log("Taking Screenshot");
                        var r = e.renderThumbnail(void 0, void 0, !0, void 0, !0);
                        return r.toBlob(t), r
                    } catch (e) {
                        Reporting.exception("screenshotthumbstyle_unsupported"), u.a.emit("alert", ["Browser does not support taking screenshots", "Oh no"])
                    }
                }
            }, {
                key: "downloadScreenshotLegacy",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = CK.orbitCamera.offsetEnabled;
                    t && CK.orbitCamera.disableOffset();
                    var r = CK.environment.background ? CK.environment.background.visible : void 0,
                        n = CK.environment.ground ? CK.environment.ground.visible : void 0;
                    l.a.hideBackgroundForScreenshots && (CK.environment.visibleBG = !1);
                    var i = e ? this.getThumbnailBlob : this.getScreenshot,
                        a = i((function(e) {
                            if (e) {
                                var t = l.a.projectName + "Screenshot.png";
                                if (window.navigator && window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(e, t);
                                else {
                                    var r = document.createElement("a");
                                    r.href = window.URL.createObjectURL(e), r.target = "_blank", r.download = t, document.body.appendChild(r), r.click(), window.URL.revokeObjectURL(r.href)
                                }
                            } else window.alert("Browser does not support taking screenshots")
                        }));
                    return l.a.hideBackgroundForScreenshots && (void 0 !== r && (CK.environment.background.visible = r), void 0 !== n && (CK.environment.ground.visible = n)), t && CK.orbitCamera.enableOffset(), o.a.requestAnimationRefresh(), a.toDataURL("image/png")
                }
            }, {
                key: "downloadScreenshot",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = CK.orbitCamera.camera.clone();
                    t.aspect = 1, t.view.offsetX -= CK.orbitCamera.getOffsetX(), t.updateProjectionMatrix();
                    var r = CK.environment.visibleBG;
                    e && (CK.environment.visibleBG = !1);
                    var n = this.renderToImage(1024, 1024, t, e);
                    return e ? (CK.environment.visibleBG = r, Promise.resolve(n)) : P.a.getResources(["/static/img/TopLeftBannerNoDropShadow.png", "/static/img/BottomRightBrandingNoDropShadow".concat(CK.Settings.color ? "-ks" : "", ".png")], ["image", "image"]).then((function(e) {
                        var t = document.createElement("canvas");
                        t.width = 1024, t.height = 1024;
                        var r = t.getContext("2d");
                        r.drawImage(n, 0, 0);
                        var i = r.createRadialGradient(512, 512, 270, 512, 512, 800);
                        i.addColorStop(0, "transparent"), i.addColorStop(1, "rgba(0,0,0,0.25"), r.fillStyle = i, r.fillRect(-1, -1, 1025, 1025), r.font = "50px Arial", r.textAlign = "center", r.fillStyle = "white", r.shadowColor = "rgba(0,0,0,0.30", r.shadowBlur = 4, r.shadowOffsetX = 3.5, r.shadowOffsetY = 3.5;
                        var a = r.measureText(CK.data.meta.character_name).width;
                        if (a > 585) {
                            var s = Math.floor(585 / a * 50);
                            r.font = s + "px Arial"
                        }
                        return r.fillText(CK.data.meta.character_name, 512, 1e3), r.drawImage(e[1], 810, t.height - e[1].height - 20), r.shadowColor = "rgba(0,0,0,0.25", r.shadowBlur = 7, r.shadowOffsetX = 7, r.shadowOffsetY = 7, r.drawImage(e[0], 20, -9), CK.GameLoop.requestRenderRefresh(), t
                    }))
                }
            }, {
                key: "download",
                value: function(e) {
                    try {
                        e.toBlob((function(e) {
                            console.log("Taking Screenshot");
                            var t = document.createElement("a");
                            t.href = window.URL.createObjectURL(e), t.target = "_blank", t.download = CK.data.meta.character_name + "Screenshot.png", document.body.appendChild(t), t.click(), window.URL.revokeObjectURL(t.href)
                        }))
                    } catch (e) {
                        console.error("Downloading screenshots not supported")
                    }
                }
            }, {
                key: "renderToImage",
                value: function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.thumbTransparency;
                    e *= l.a.thumbnailHighAA ? 4 : 2, ((t *= l.a.thumbnailHighAA ? 4 : 2) > 2048 || e > 2048) && console.warn("Image size ", e / 4, "x", t / 4, " is a bit large for resize AA method");
                    var i = new RK.WebGLRenderTarget(e, t, {
                            minFilter: RK.LinearFilter,
                            magFilter: RK.NearestFilter,
                            format: n ? RK.RGBAFormat : RK.RGBFormat
                        }),
                        a = this.renderer.getClearColor().clone(),
                        s = this.renderer.getClearAlpha();
                    this.renderer.setClearColor(new RK.Color(6908265), n ? 0 : 1), this.renderer.shadowMap.needsUpdate = !0, this.renderer.clearTarget(i, !0, !0, !0), this.renderer.render(CK.scene, r, i, !1), this.renderer.setClearColor(a, s);
                    var o = new Uint8Array(4 * e * t),
                        u = this.renderer.getContext();
                    u.readPixels(0, 0, e, t, u.RGBA, u.UNSIGNED_BYTE, o);
                    var c = document.createElement("canvas");
                    c.width = e, c.height = t;
                    var h = c.getContext("2d"),
                        d = h.createImageData(c.width, c.height);
                    d.data.set(o), h.putImageData(d, 0, 0);
                    var f = document.createElement("canvas");
                    f.width = e / 2, f.height = t / 2;
                    var p = f.getContext("2d");
                    p.scale(1, -1), p.drawImage(c, 0, 0, f.width, -f.height);
                    var m = f;
                    if (l.a.thumbnailHighAA) {
                        var v = document.createElement("canvas");
                        v.width = e / 4, v.height = t / 4;
                        var g = v.getContext("2d");
                        g.drawImage(f, 0, 0, v.width, v.height), m = v
                    }
                    return CK.GameLoop.requestRenderRefresh(), m
                }
            }, {
                key: "renderer",
                get: function() {
                    return CK.renderManager.renderer
                }
            }], (r = null) && mt(t.prototype, r), n && mt(t, n), e
        }();

        function gt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var yt = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "loadNext",
                value: function() {
                    var t = this;
                    if (this.paths.length) {
                        var r = this.paths.shift();
                        new Promise((function(e, n) {
                            var i = new Image;
                            t.images[r] = i, i.onload = function() {
                                return e(i)
                            }, i.onerror = function(e) {
                                return n(e)
                            }, i.src = r
                        })).catch((function() {})).then((function() {
                            t.loadNext()
                        }), (function() {
                            t.loadNext()
                        }))
                    } else e.loadingCounts--
                }
            }, {
                key: "loadThumbnails",
                value: function(t) {
                    if (!CK.URL.getVar("disableThumbPreload")) {
                        var r = [],
                            n = 0;
                        for (var i in t) t[i].length > n && (n = t[i].length);
                        for (var a = 0; a < n; a++)
                            for (var s in t) t[s].length > a ? t[s][a] in this.images || r.push(t[s][a]) : delete t[s];
                        for (this.paths = r; e.loadingCounts < e.maxLoadingCount && e.loadingCounts < this.paths.length;) e.loadingCounts++, this.loadNext()
                    }
                }
            }], (r = null) && gt(t.prototype, r), n && gt(t, n), e
        }();

        function bt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        yt.labelsLoaded = {}, yt.paths = [], yt.images = {}, yt.loadingCounts = 0, yt.maxLoadingCount = 4;
        var kt = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "init",
                value: function() {
                    var e = this;
                    if (!this.initialized) {
                        this.initialized = !0;
                        var t = CK.renderManager.renderer.domElement;
                        console.log("loaded pinch controls"), t.addEventListener("touchstart", (function(t) {
                            return e.onTouchStartInDom(t)
                        }), !1), t.addEventListener("touchmove", (function(t) {
                            return e.onTouchMoveInDom(t)
                        }), !1), t.addEventListener("touchend", (function(t) {
                            return e.onTouchEndInDom(t)
                        }), !1), this.enabled = !0, this.distanceS = 1, this.distanceE = 1, this.startPanX = 1, this.endPanX = 1, this.startPanY = 1, this.endPanY = 1, this.zoom = 1, this.tlxOffset = 0, this.tlyOffset = 0, this.active = !0, this.modes = {
                            none: 0,
                            rotate: 1,
                            zoom: 2,
                            pan: 3
                        }, this.mode = this.modes.none
                    }
                }
            }, {
                key: "disable",
                value: function() {
                    this.enabled = !1, CK.orbitCamera.controls.enableZoom = !0, CK.orbitCamera.zoom = 1
                }
            }, {
                key: "enable",
                value: function() {
                    this.init(), CK.orbitCamera.controls.enableZoom = !1, this.enabled = !0
                }
            }, {
                key: "onTouchStartInDom",
                value: function(e) {
                    if (this.enabled && this.active)
                        if (1 === e.touches.length) this.mode = this.modes.rotate;
                        else if (2 === e.touches.length) {
                        this.mode = this.modes.zoom, this.zoom = CK.orbitCamera.zoom;
                        var t = e.touches[0].pageX - e.touches[1].pageX,
                            r = e.touches[0].pageY - e.touches[1].pageY;
                        this.distanceS = Math.sqrt(t * t + r * r)
                    } else 3 === e.touches.length && (this.mode = this.modes.pan, this.tlxOffset = CK.orbitCamera.tlxOffset, this.tlyOffset = CK.orbitCamera.tlyOffset, this.startPanX = e.touches[0].pageX, this.startPanY = e.touches[0].pageY)
                }
            }, {
                key: "onTouchMoveInDom",
                value: function(e) {
                    if (this.enabled && this.active)
                        if (1 == e.touches.length && this.mode === this.modes.rotate) e.touches[0].pageX, e.touches[0].pageY;
                        else if (2 == e.touches.length && this.mode === this.modes.zoom) {
                        var t = e.touches[0].pageX - e.touches[1].pageX,
                            r = e.touches[0].pageY - e.touches[1].pageY;
                        this.distanceE = Math.sqrt(t * t + r * r), CK.orbitCamera.zoom = Math.max(Math.min(this.zoom + (this.distanceE - this.distanceS) / 20, 10), 1), CK.GameLoop.requestRenderRefresh()
                    } else 3 === e.touches.length && this.mode === this.modes.pan && (this.endPanX = e.touches[0].pageX, this.endPanY = e.touches[0].pageY, CK.orbitCamera.tlxOffset = this.tlxOffset + (this.startPanX - this.endPanX) / 5, CK.orbitCamera.tlyOffset = this.tlyOffset + (this.startPanY - this.endPanY) / 5, CK.GameLoop.requestRenderRefresh())
                }
            }, {
                key: "onTouchEndInDom",
                value: function(e) {
                    this.enabled && (0 === e.touches.length && (this.active = !0, this.mode = this.modes.none, CK.RenderIDs.needsRefresh = !0), CK.GameLoop.requestRenderRefresh(), this.mode !== this.modes.zoom && this.mode !== this.modes.pan || (this.active = !1, this.mode = this.modes.none))
                }
            }], (r = null) && bt(t.prototype, r), n && bt(t, n), e
        }();

        function wt(e) {
            return (wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function St(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Ct = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, (r = [{
                key: "get",
                value: function(e, t) {
                    var r = this;
                    for (var n in this.parts = {}, t.parts) CK.Options.slots[n] && CK.Options.slots[n].keywords.noMods || (this.parts[n] = t.parts[n]);
                    this.decals = t.decals || {}, this.poses = t.data && t.data.limitedPoses ? t.data.limitedPoses : t.poses, this.sliders = t.data ? t.data.sliders : t.sliders, this.mirrorPose = t.mirrorPose, this.hiRez = t.hiRez || t.settings && t.settings.hiRez, this.flags = t.flags || (t.data ? t.data.flags : {}), this.settings = t.settings || {}, this.physical = t.physical, this.product = C.a.productsByName[this.physical], this.clickedThisUpdate = t.clickedThisUpdate;
                    var i = [],
                        a = function(e, t) {
                            e.conditions.find((function(e) {
                                return !r._conditionTrue(e, t)
                            })) || e.effects.map((function(r) {
                                r.length && "*" === r[0] && ((r = r.slice())[0] = t), i.push(Object.assign({}, e, {
                                    effect: r
                                }))
                            }))
                        };
                    this.partsAndDecals = Object.assign({}, this.parts, this.decals);
                    var s = function(t) {
                        var n = r.parts[t];
                        if (null == n || !n.hasOwnProperty("mods")) return "continue";
                        var i = n.mods[e];
                        i && i.map((function(e) {
                            return a(e, t)
                        }))
                    };
                    for (var o in this.parts) s(o);
                    var l = C.a.globalMods[e];
                    return l && l.map((function(e) {
                        return a(e, e.slot)
                    })), i
                }
            }, {
                key: "_conditionTrue",
                value: function(e, t) {
                    var r = this,
                        n = e.condition;
                    if (!n) return !0;
                    var i, a = e.condition_targets || [e.condition_target || ""],
                        s = e.condition_values || [e.condition_value || ""];
                    n.startsWith("!") && (n = n.slice(1), i = !0), n = n.toLowerCase();
                    var o = function(o) {
                        var u = a[o],
                            c = function(a) {
                                var o = s[a],
                                    c = function() {
                                        if ("empty" === n) return !(u in r.partsAndDecals);
                                        if ("full" === n) return u in r.partsAndDecals || u in r.decals;
                                        if ("haskey" === n) {
                                            var i = r.partsAndDecals[u];
                                            return i && "keywords" in i && o in i.keywords
                                        }
                                        if ("notkey" === n) {
                                            var a = r.partsAndDecals[u];
                                            return !a || !("keywords" in a) || !(o in a.keywords)
                                        }
                                        return "rez" === n ? r.hiRez && "hiRez" === o : "hiRez" === n ? !!r.hiRez : "loRez" === n ? !r.hiRez : "physical" === n ? r.physical === o : "pose" === n ? u && u in r.poses ? !!o.split(",").find((function(e) {
                                            return parseInt(e) === r.poses[u]
                                        })) : !!o.split(",").find((function(e) {
                                            return parseInt(e) === r.poses.main
                                        })) : "mirrored" === n ? r.mirrorPose : "flag" === n ? !!r.flags[o] : "setting" === n ? !l.a.forge && !r.hiRez && r.settings[u] === (o || !0) : "slidergreater" === n ? u in r.sliders && parseFloat(o) < r.sliders[u] : "inslot" === n ? t === u : "material" === n ? r.product && (r.product.material === o || r.product.material_slug === o || r.product.material_sim === o) : "date" === n ? CK.serverTime > parseInt(o) : "clicked" === n ? u in r.clickedThisUpdate : "l" === n ? t.endsWith("L") : "r" === n ? t.endsWith("R") : (console.warn("Unrecognized mod condition", n, "in", e), !1)
                                    }();
                                if (i) {
                                    if (c) return {
                                        v: {
                                            v: !1
                                        }
                                    }
                                } else if (c) return {
                                    v: {
                                        v: !0
                                    }
                                }
                            };
                        for (var h in s) {
                            var d = c(h);
                            if ("object" === wt(d)) return d.v
                        }
                    };
                    for (var u in a) {
                        var c = o(u);
                        if ("object" === wt(c)) return c.v
                    }
                    return !!i
                }
            }]) && St(t.prototype, r), n && St(t, n), e
        }();

        function _t(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Rt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Tt = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._mods = new Ct, this.init()
                }
                var t, r, n;
                return t = e, n = [{
                    key: "applySlider",
                    value: function(e, t, r, n, i, a) {
                        var s = this,
                            o = l.a.sliders[e];
                        if (o)
                            if (o.group) o.targets.map((function(e) {
                                s.applySlider(e.name, t, r, n, i, a)
                            }));
                            else
                                for (var u in o.targets) {
                                    var c = o.targets[u];
                                    c.name in a && (c = Object.assign({}, c, a[c.name]));
                                    var h = 0;
                                    for (var d in o.targets) o.targets[d].name == c.name && o.targets[d].slot == c.slot && h++;
                                    if (t >= c.start && t <= c.end || h < 2) {
                                        var f = c.min < c.max ? c.min : c.max,
                                            p = c.min < c.max ? c.max : c.min,
                                            m = b(y(t, c.start, c.end, c.min, c.max), f, p);
                                        switch (c.type) {
                                            case "joint":
                                                var v = c.slot || "default",
                                                    g = v in r && c.name in r[v] ? r[v][c.name] : void 0;
                                                void 0 !== g ? m > g && (r[v][c.name] = m) : (v in r || (r[v] = {}), r[v][c.name] = m);
                                                break;
                                            case "morph":
                                                c.slot in n || (n[c.slot] = {}), n[c.slot][c.name] = m;
                                                break;
                                            case "shader":
                                                i[c.slot + ":" + c.name] = m;
                                                break;
                                            case "slider":
                                                break;
                                            default:
                                                console.error("Unrecognized slider target type ", c.type, "belonging to ", c)
                                        }
                                    }
                                } else console.error("Could not find slider", e, "in Settings.sliders");
                        function y(e, t, r, n, i) {
                            return n + (e - t) / (r - t) * (i - n)
                        }

                        function b(e, t, r) {
                            return Math.min(Math.max(e, t), r)
                        }
                    }
                }], (r = [{
                    key: "init",
                    value: function() {
                        this.parts = {}, this.blendForms = {}, this.binaryForms = {}, this.jointWeights = {}, this.labels = {}, this.shaderParams = {}, this.snaps = {}, this.poses = {}, this.poseModifiers = {}, this.materialSim = "default", this.materialSimColor = void 0, this.attributeChanges = {}, this.mirrorPose = !1, this.decalOffsets = {}, this.positionSnaps = {}, this.ikChains = [], this.activeMods = [], this.hideByIdMods = [], this.morphByIdMods = {}, this.clips = {}, this.custom = {}, this.poseSliders = {}, this.parameters = {}, this.holdMod = !1, this.hideGround = !1, this.disableClipping = !1, this.camera = void 0, this.transforms = {}, this.hideSliders = {}, this.paintMatch = {}, this.clickedThisUpdate = {}, this.needsBake = {}, this.decals = {}, this.orderedDecals = {}, this.vanishIfNotKeyword = {}, this.vanishIfKeyword = {}, this.usedAttachParts = {}
                    }
                }, {
                    key: "change",
                    value: function(e) {
                        this.data = e, this.init(), this._changeData(), this._customUpdateStart(), this._hidePartsWithoutTargets(), this._applyProductPart(), this._applyAddMods(), this._applyBackupParts(), this._applyRezPart(), this._applySupportPart(), this._applyTagParts(), this._hideMods(), this._disablePartsMods(), this._vanishIncompatible(), this._formMods(), this._snapMods(), this._poseMods(), this._ikMods(), this._sliderDefMods(), this._cameraMods(), this._disableClipping(), this._applySliders(), this._sliderMods(), this._removeEmpty(), this._hidePartsWithoutTargets(), this._transforms(), this._gatherKit(), this._gatherAttachParts(), this._addCollision(), this._getBackground(), this._hideLastMods(), this._customUpdateEnd(), this._removeNoMesh()
                    }
                }, {
                    key: "_changePaints",
                    value: function() {
                        if (l.a.color) {
                            for (var e in this._decals(), this.parts) !this.parts[e].collision && this.parts[e].idealTextureSize && this.parts[e].mappings && (this.settings.forceLoadAllColorMaps || l.a.debugPaints || this.data.paints[e] || this.decals[e]) && (this.needsBake[e] = !0);
                            this._paintMatchMods()
                        }
                    }
                }, {
                    key: "_changeData",
                    value: function() {
                        for (var e in this.custom = this.data.custom, this.poseSliders = this.data.poseSliders, this.parameters = this.data.parameters, this.locations = this.data.locations, this.labels = Object.assign({}, this.data.labels || {}), this.version = this.data.version, this.physical = this.data.physical, this.mirrorPose = this.data.mirroredPose || !1, this.clickedThisUpdate = this.data.clickedThisUpdate, this.poses = {}, this.data.limitedPoses) {
                            var t = this.data.limitedPoses[e];
                            this.poses[e] = CK.Options.posesByID[t] || console.error("Could not find pose", t)
                        }
                        for (var r in this.parts = {}, this.data.limitedParts) this.parts[r] = CK.Options.getPart(this.data.limitedParts[r])
                    }
                }, {
                    key: "_transforms",
                    value: function() {
                        Object.assign(this.transforms, this.data.transforms)
                    }
                }, {
                    key: "_gatherKit",
                    value: function() {
                        for (var e in this.data.kit) {
                            var t = this.data.kit[e];
                            this.parts["k_" + e] = C.a.getPart(t.id)
                        }
                    }
                }, {
                    key: "_gatherAttachParts",
                    value: function() {
                        for (var e in this.attachParts = {}, this.usedAttachParts = {}, this.data.attachParts) {
                            var t = this.data.attachParts[e];
                            for (var r in t) {
                                var n = C.a.getPart(t[r]),
                                    i = this.parts[e];
                                if (i && i.attachSlots && r in i.attachSlots && i.attachSlots[r].availableParts && n.id in i.attachSlots[r].availableParts) {
                                    var a = "a_" + e + "," + r;
                                    this.parts[a] = n, this.attachParts[a] = {
                                        part: n,
                                        targetPart: i,
                                        slot: e,
                                        rivetName: r
                                    }, e in this.usedAttachParts || (this.usedAttachParts[e] = {}), this.usedAttachParts[e][r] = t[r]
                                }
                            }
                        }
                    }
                }, {
                    key: "_customUpdateStart",
                    value: function() {}
                }, {
                    key: "_customUpdateMiddle",
                    value: function() {}
                }, {
                    key: "_customUpdateEnd",
                    value: function() {}
                }, {
                    key: "_getBackground",
                    value: function() {
                        this.background = this.data.environment && this.data.environment.bg
                    }
                }, {
                    key: "_applySliders",
                    value: function() {
                        var t = l.a.sliders;
                        for (var r in t) {
                            var n = t[r],
                                i = void 0 !== this.data.sliders[r] ? this.data.sliders[r] : n.val;
                            e.applySlider(r, i, this.jointWeights, this.blendForms, this.shaderParams, this.sliderMods)
                        }
                    }
                }, {
                    key: "_applyProductPart",
                    value: function() {
                        var e = l.a.color && l.a.shaderballs ? "color" : "default";
                        if (void 0 !== this.physical) {
                            var t = C.a.productsByName[this.physical];
                            void 0 !== t ? (null !== t.material_part_id && (this.parts.material = C.a.getPart(t.material_part_id)), null !== t.scale_part_id && (this.parts.scale = C.a.getPart(t.scale_part_id)), null !== t.part_id && (this.parts.product = C.a.getPart(t.part_id)), this.materialSim = t.material_sim || t.material || e) : this.materialSim = e
                        } else this.materialSim = e;
                        this.settings.overrideMaterialSim ? this.materialSim = this.settings.overrideMaterialSim : this.settings.showMaterialSim || (this.materialSim = e)
                    }
                }, {
                    key: "_applyRezPart",
                    value: function() {
                        var e = C.a.getPartBySlotAndName("resolution", this.settings.hiRez ? "hiRez" : "loRez");
                        void 0 !== e && (this.parts.resolution = e)
                    }
                }, {
                    key: "_applyTagParts",
                    value: function() {
                        if ("HeroForge" === l.a.projectName && this.settings.hiRez && Object.keys(this.parts).length) {
                            var e = C.a.getPartBySlotAndName("tagNumber", "tagNumber"),
                                t = C.a.getPartBySlotAndName("tag", "tagAttach");
                            e && t && (this.parts.tagNumber = e, this.parts.tag = t, this.labels.tagNumber || (this.labels.tagNumber = "9999", l.a.forge && l.a.debug && console.warn("Missing tag number!")))
                        }
                    }
                }, {
                    key: "_applySupportPart",
                    value: function() {
                        if (this.settings.hiRez) {
                            var e = ["supportR", "supportL", "support"];
                            for (var t in e) {
                                var r = e[t],
                                    n = C.a.getPartBySlotAndName(r, "footprint");
                                null != n && (this.parts[r] = n)
                            }
                        }
                    }
                }, {
                    key: "_removeEmpty",
                    value: function() {
                        for (var e in this.parts) this.parts[e] || delete this.parts[e];
                        for (var t in this.parts) "text" !== this.parts[t].type || this.labels[t] || (delete this.parts[t], delete this.labels[t])
                    }
                }, {
                    key: "_hidePartsWithoutTargets",
                    value: function() {
                        var e = {};
                        for (var t in this.parts) e[t] = this.parts[t].id;
                        for (var r in this.parts) this.parts[r].hasTarget(e, r) || delete this.parts[r]
                    }
                }, {
                    key: "_getMods",
                    value: function(e) {
                        return this._mods.get(e, this)
                    }
                }, {
                    key: "_applyAddMods",
                    value: function() {
                        for (var e = this, t = 0; t < 3; t++) this._getMods("addParts").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1],
                                a = C.a.slots[n].source || n;
                            e.parts[n] = C.a.getPartBySlotAndName(a, i), e.parts[n] || (delete e.parts[n], console.error("Could not find mod part", t.value0, "in slot", t.target0))
                        }))
                    }
                }, {
                    key: "_applyBackupParts",
                    value: function() {
                        var e = this;
                        this._getMods("backup").map((function(t) {
                            var r = e.parts[t.slot];
                            r && r.backup && (e.parts[t.slot] = C.a.getPart(r.backup))
                        }))
                    }
                }, {
                    key: "_hideMods",
                    value: function() {
                        var e = this;
                        this._getMods("hide").map((function(t) {
                            delete e.parts[t.slot]
                        })), this._getMods("hideSlots").map((function(t) {
                            delete e.parts[t.effect]
                        }))
                    }
                }, {
                    key: "_disablePartsMods",
                    value: function() {
                        var e = this;
                        for (var t in this.disabledKeywords = {}, this._getMods("disableParts").map((function(t) {
                                e.disabledKeywords[t.effect] = t.message
                            })), this.disabledKeywords)
                            for (var r in this.parts) this.parts[r].keywords[t] && delete this.parts[r]
                    }
                }, {
                    key: "_vanishIncompatible",
                    value: function() {
                        var e = this;
                        this.vanishIfNotKeyword = {}, this.vanishIfKeyword = {}, this._getMods("vanishIncompatible").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            i.startsWith("!") ? (e.vanishIfKeyword[n] = i.substr(1), e.parts[n] && e.parts[n].keywords[i] && delete e.parts[n]) : (e.vanishIfNotKeyword[n] = i, e.parts[n] && (e.parts[n].keywords[i] || delete e.parts[n]))
                        }))
                    }
                }, {
                    key: "_hideLastMods",
                    value: function() {
                        var e = this;
                        this._getMods("hideLast").map((function(t) {
                            delete e.parts[t.slot]
                        })), this.hideSliders = {}, this._getMods("hideSliders").map((function(t) {
                            e.hideSliders[t.effect] = !0
                        }))
                    }
                }, {
                    key: "_paintMatchMods",
                    value: function() {
                        var e = this;
                        this._getMods("paintMatch").map((function(t) {
                            var r = _t(t.effect, 4),
                                n = r[0],
                                i = r[1],
                                a = r[2],
                                s = r[3];
                            e.parts[a] && e.parts[n] && (e.parts[a].colors[s] || e.parts[a].namedColors[s]) && (e.parts[n].colors[i] || e.parts[n].namedColors[i]) && (e.paintMatch[n] || (e.paintMatch[n] = {}), e.paintMatch[n][i] = [a, s], a in e.needsBake && (e.needsBake[n] = !0))
                        }))
                    }
                }, {
                    key: "_poseMods",
                    value: function() {
                        var e = this;
                        this._getMods("namedPoses").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            e.poseModifiers[n] || (e.poseModifiers[n] = []), e.poseModifiers[n].push({
                                modifierName: i,
                                priority: 5
                            })
                        }))
                    }
                }, {
                    key: "_ikMods",
                    value: function() {
                        var e = this;
                        this._getMods("ik").map((function(t) {
                            var r = t.effect[t.effect.length - 1],
                                n = t.effect.slice(0, -1);
                            e.ikChains.push({
                                chain: n,
                                target: r
                            })
                        }))
                    }
                }, {
                    key: "_formMods",
                    value: function() {
                        var e = this;
                        if (this._getMods("form").map((function(t) {
                                if (t.effect) {
                                    var r = _t(t.effect, 2),
                                        n = r[0],
                                        i = r[1].split("-").map((function(e) {
                                            return e.trim()
                                        }));
                                    e._applyFormToSlot(n, i) || (n in e.binaryForms || (e.binaryForms[n] = []), e.binaryForms[n].push(i))
                                } else console.error("Invalid mod", t)
                            })), this.settings.hiRez) {
                            var t = C.a.productsByName[this.physical],
                                r = t && void 0 !== t.thickness && null !== t.thickness ? t.thickness : 1;
                            for (var n in this.parts) "eyebrows" === n || this._applyFormToSlot(n, ["thick"]) || (this.blendForms[n] || (this.blendForms[n] = {}), this.blendForms[n].thick = r)
                        }
                    }
                }, {
                    key: "_disableClipping",
                    value: function() {
                        this.disableClipping = !!this._getMods("disableClipMod").length
                    }
                }, {
                    key: "_applyFormToSlot",
                    value: function(e, t) {
                        if (!this.parts[e]) return !1;
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r],
                                i = this.parts[e].name + "_" + n,
                                a = C.a.getPartBySlotAndName(e, i);
                            if (a) return this.parts[e] = a, !0
                        }
                        return !1
                    }
                }, {
                    key: "_forceFormOnSlot",
                    value: function(e, t) {
                        this.parts[e] && !this.parts[e].subPart && (this.parts[e] = this.parts[e].cloneFromOriginal(t))
                    }
                }, {
                    key: "_snapMods",
                    value: function() {
                        var e = this;
                        this._getMods("snap").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            i && n !== i || console.error("Invalid snap targets ", n, i), (n.endsWith("_jnt") || n in e.parts) && (e.snaps[n] = i)
                        }))
                    }
                }, {
                    key: "_sliderDefMods",
                    value: function() {
                        var e = this;
                        this.sliderMods = {}, this._getMods("sliderLimitMax").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            e.sliderMods[n] || (e.sliderMods[n] = {}), e.sliderMods[n].max = parseFloat(i)
                        })), this._getMods("sliderLimitMin").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            e.sliderMods[n] || (e.sliderMods[n] = {}), e.sliderMods[n].min = parseFloat(i)
                        }))
                    }
                }, {
                    key: "_cameraMods",
                    value: function() {
                        var e = this._getMods("camera");
                        e.length > 1 ? console.error("More than one camera mod found! Not supported yet", e) : this.settings.camera ? this.camera = this.settings.camera : 1 === e.length ? this.camera = e[0].effect : this.settings.hiRez && l.a.cameras.forge ? this.camera = "forge" : this.camera = "default"
                    }
                }, {
                    key: "_sliderMods",
                    value: function() {
                        var e = this;
                        this.jointWeights.default || (this.jointWeights.default = {}), this._getMods("slide").map((function(t) {
                            var r = _t(t.effect, 2),
                                n = r[0],
                                i = r[1];
                            e.jointWeights.default[n] = i
                        }))
                    }
                }, {
                    key: "_addCollision",
                    value: function() {
                        if (this.settings.hiRez) {
                            var e = {};
                            for (var t in this.parts) {
                                var r = this.parts[t],
                                    n = r.slot + "Collision";
                                if (n in C.a.slots) {
                                    var i = C.a.getPartBySlotAndName(n, r.collision) || C.a.getPartBySlotAndName(n, r.name);
                                    void 0 !== i && (e[n] = i)
                                }
                            }
                            Object.assign(this.parts, e)
                        }
                    }
                }, {
                    key: "_removeNoMesh",
                    value: function() {
                        for (var e in this.parts) this.parts[e].useMesh || delete this.parts[e]
                    }
                }, {
                    key: "_decals",
                    value: function() {
                        var e = this;
                        for (var t in this.decals = {}, this.data.decals) {
                            var r = this.parts[t];
                            r && function() {
                                var n = e.data.decals[t],
                                    i = r.getAvailableDecals(),
                                    a = {};
                                for (var s in i.map((function(e) {
                                        return a[e.id] = !0
                                    })), n) {
                                    var o = n[s],
                                        l = C.a.decals[o];
                                    o in a && l ? (t in e.decals || (e.decals[t] = {}), e.decals[t][s] = l) : l || console.error("Invalid decal id", o)
                                }
                            }()
                        }
                        for (var n in this.orderedDecals = {}, this.decals) {
                            var i = this.decals[n],
                                a = [];
                            for (var s in i) a.push({
                                id: i[s].id,
                                mapping: s
                            });
                            a.sort((function(e, t) {
                                var r = C.a.decals[e.id],
                                    n = C.a.decals[t.id],
                                    i = C.a.slots[r.slot],
                                    a = C.a.slots[n.slot];
                                return (i.decal_layer || 10) - (a.decal_layer || 10)
                            })), this.orderedDecals[n] = a.slice(0, 5)
                        }
                    }
                }, {
                    key: "settings",
                    get: function() {
                        return this.data.settings
                    }
                }]) && Rt(t.prototype, r), n && Rt(t, n), e
            }(),
            Mt = r(65);

        function xt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = [];
            if (void 0 === e || 0 === e.length) return "";
            for (var n = 0; n < e.length; n++)
                if (e[n].match(/[a-zA-Z0-9]/g)) r.push(e[n]);
                else {
                    var i = ".,;:!?*#/\\(){}[]-_\"'$+=><%@&| `\n~".indexOf(e[n]);
                    i >= 0 && r.push(t ? e[n] : "~" + i + "~")
                }
            return r.join("")
        }

        function Pt(e) {
            if (void 0 === e || 0 === e.length) return "";
            for (var t = [], r = 0; r < e.length; r++)
                if ("~" === e[r]) {
                    var n = [];
                    do {
                        r++, n.push(e[r])
                    } while (r < e.length && "~" !== e[r]);
                    t.push(".,;:!?*#/\\(){}[]-_\"'$+=><%@&| `\n~" [parseInt(n.join(""))])
                } else t.push(e[r]);
            return t.join("")
        }
        var Ot = {
                escape: xt,
                unescape: Pt
            },
            Kt = r(56);

        function At(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Et(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(r), !0).forEach((function(t) {
                    It(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Et(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function It(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function Dt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Ft = function() {
            function e(t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._mods = new Ct, this.parts = {}, this.labels = {}, this.decals = {}, this.sliders = {}, this.poseSliders = {}, this.poses = {}, this.limitedPoses = {}, this.meta = {
                    character_name: "",
                    config_name: "",
                    config_type: ""
                }, this.physical = void 0, this.mirroredPose = void 0, this.name = "", this.paints = {}, this.paintByIntent = {}, this.fields = [], this.custom = {}, this.parameters = {}, this.locations = {}, this.environment = {}, this.flags = {}, this.disableMenus = {}, this.disableSlot = {}, this.shaders = {}, this.usedShaders = {}, this.schemes = {}, this.kit = {}, this.transforms = {}, this.attachParts = {}, this.clickedThisUpdate = {}, this.decals = {}, this.modded = new(l.a.CustomModded || Tt), t && this.change(t, r, !0)
            }
            var t, r, n;
            return t = e, n = [{
                key: "mergeTransforms",
                value: function(e, t) {
                    if (void 0 === e) return {};
                    if (e && t)
                        for (var r in e) {
                            r in t || (t[r] = {});
                            var n = e[r];
                            if (n)
                                for (var i in n) {
                                    var a = n[i];
                                    if (a)
                                        for (var s in i in t[r] || (t[r][i] = {}), a)
                                            if (!a[s] && s in t[r][i]) delete t[r][i][s];
                                            else
                                                for (var o in s in t[r][i] || (t[r][i][s] = {}), a[s])
                                                    if (void 0 === a[s][o]) delete t[r][i][s][o];
                                                    else {
                                                        var l = "qtn" === s ? 1e4 : 100;
                                                        t[r][i][s][o] = Math.round(a[s][o] * l) / l
                                                    } else t[r] && delete t[r][i]
                                } else delete t[r]
                        }
                    return We.a.deepClean(t) ? {} : t
                }
            }], (r = [{
                key: "setSettings",
                value: function(e) {
                    this.settings = Bt({}, e)
                }
            }, {
                key: "change",
                value: function(t) {
                    var r = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.settings || {},
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!t || !n) return console.error("Invalid character data change!");
                    this.setSettings(n), i && !t.version && (t.version = .9), t.clear = i, this.clear = i, t.version && !0 === i && (this.userSaveVersion = t.version), this._customUpdateStart(t, i), Object.assign(this.flags, t.flags || {}), this.fields = t.fields || [], this.custom = We.a.deepMerge(this.custom, t.custom || {}), Object.assign(this.environment, t.environment || {}), this.clickedThisUpdate = {};
                    var a = t.parts;
                    if (a) {
                        if (Array.isArray(a)) {
                            var s = {};
                            a.map((function(e) {
                                var t = C.a.getSlotFromId(e);
                                t ? s[t] = e : console.error("Missing part!", e)
                            })), a = s, t.parts = a
                        }
                        if (t.partClick)
                            for (var o in a) this.clickedThisUpdate[o] = !0;
                        var u = Object.keys(a);
                        if (1 === u.length && a[u[0]]) {
                            var c = C.a.parts[a[u[0]]];
                            c && Reporting.clickedPart(c)
                        }
                        for (var h in a)
                            if (a[h] in C.a.parts && "CLEAR" == C.a.parts[a[h]].name) l.a.configEditorMode ? this.parts[h] = a[h] : delete this.parts[h];
                            else if (void 0 === t.parts[h]) delete this.parts[h];
                        else {
                            var d = C.a.getPart(a[h]),
                                f = C.a.slots[h] && C.a.slots[h].source ? h : d.slot;
                            f !== h && console.warn("Part ", a[h], " has moved from slot ", h, " to ", f), !d.hide || l.a.forge && t.permissions && (t.permissions.test || t.permissions.timetravel) ? this.parts[f] = a[h] : console.warn("Ignoring unreleased part ", d.id)
                        }
                        for (var p in a) {
                            var m = a[p],
                                v = C.a.parts[m];
                            v && v.mods.remove && v.mods.remove.map((function(e) {
                                delete r.parts[e.target0]
                            }))
                        }
                        if (!i)
                            for (var g in a) {
                                var y = a[g],
                                    b = C.a.parts[y];
                                b && b.mods.attach && b.mods.attach.map((function(e) {
                                    if (!r.parts[e.target0]) {
                                        var t = C.a.getPartBySlotAndName(e.target0, e.value0) || console.error("Could not find", e.target0, e.value0);
                                        r.parts[e.target0] = t.id
                                    }
                                }))
                            }
                    }
                    if (this._getMods("addPartsPermanently").map((function(e) {
                            var t = At(e.effect, 2),
                                n = t[0],
                                i = t[1],
                                a = C.a.getPartBySlotAndName(n, i);
                            a ? r.parts[n] = a.id : (delete r.parts[n], console.error("Could not find add permanetly mod part", n, i))
                        })), this._getMods("removeSlots").map((function(e) {
                            delete r.parts[e.effect]
                        })), i && (delete this.parts.scale, delete this.parts.material), void 0 !== t.parameters && Object.assign(this.parameters, t.parameters), t.locations)
                        for (var k in t.locations) {
                            var w = t.locations[k],
                                S = w.text ? Ot.unescape(w.text) : "";
                            this.locations[k] = Object.assign({}, this.locations[k] || {}, w, S ? {
                                text: S
                            } : {})
                        }
                    if (this._getMods("removePermanent").map((function(e) {
                            delete r.parts[e.slot]
                        })), this.disableMenus = {}, this._getMods("disableMenu").map((function(e) {
                            r.disableMenus[e.effect.toLowerCase()] = e.message || "Unavailable with your selection."
                        })), this.disableSlot = {}, this._getMods("disableSlot").map((function(e) {
                            r.disableSlot[e.effect] = !0
                        })), "physical" in t && (this.physical = t.physical), "" !== this.physical && "unknown" !== this.physical || (this.physical = void 0), t.sliders) {
                        var _ = function(e) {
                            var n = t.sliders[e];
                            if (void 0 === n) r.sliders[e] = void 0;
                            else if (null !== n && !isNaN(n) && n >= 0 && n <= 1) {
                                var i = l.a.sliders[e];
                                i && (i.group ? i.targets.map((function(e) {
                                    return r.sliders[e.name] = n
                                })) : r.sliders[e] = n)
                            }
                        };
                        for (var R in t.sliders) _(R)
                    }
                    if ("poseSliders" in t)
                        if (void 0 === t.poseSliders) this.poseSliders = {};
                        else
                            for (var T in t.poseSliders) void 0 === t.poseSliders[T] ? delete this.poseSliders[T] : this.poseSliders[T] = t.poseSliders[T];
                    if (this._convertOldFormats(t), "meta" in t && (void 0 !== t.meta.character_name && "" != t.meta.character_name && (this.meta.character_name = CK.sanitizeName(t.meta.character_name)), void 0 !== t.meta.config_name && (this.meta.config_name = t.meta.config_name), void 0 !== t.meta.config_description && (this.meta.config_description = t.meta.config_description)), l.a.hasPoses && (t.version && t.version < 1.4 ? (console.warn("Converting from old pose format"), this.poses.main = t.displayPose || t.pose || this.poses.main || 1) : i ? Object.assign(this.poses, t.limitedPoses || t.poses || {}) : Object.assign(this.poses, t.poses || {}), this.limitedPoses = this._getLimitedPoses()), "mirroredPose" in t && void 0 !== t.mirroredPose && (this.mirroredPose = t.mirroredPose), t.labels)
                        for (var M in t.labels) this.labels[M] = Ot.unescape(t.labels[M]);
                    if ("kit" in t)
                        if (t.kit)
                            for (var x in t.kit) t.kit[x] ? this.kit[x] = We.a.deepCopy(t.kit[x]) : delete this.kit[x];
                        else this.kit = {};
                    if (this.origin = t.origin, "transforms" in t && (this.transforms = e.mergeTransforms(t.transforms, this.transforms)), this._customUpdateEnd(t), this.limitedParts = this.getLimitedParts(), "attachParts" in t)
                        if (t.attachParts)
                            for (var P in t.attachParts)
                                if (t.attachParts[P])
                                    for (var O in t.attachParts[P]) {
                                        var K = t.attachParts[P][O];
                                        K ? (this.attachParts[P] || (this.attachParts[P] = {}), this.attachParts[P][O] = t.attachParts[P][O]) : delete this.attachParts[P][O]
                                    } else delete this.attachParts[P];
                                else this.attachParts = {};
                    this.oldModdedParts = this.modded.parts, this.meta.config_type = t.config_type, this.modded.change(this), this._updatePaints(t), this.modded._changePaints(), CK.Settings.shaderballs && this._cleanupPaints()
                }
            }, {
                key: "_addPaint",
                value: function(e) {
                    var t = 0;
                    if (e.isShaderResponse) {
                        for (var r in this.shaders)
                            if (this.shaders[r].key === e.key) return parseInt(r);
                        for (; t in this.shaders;) t++;
                        return this.shaders[t] = e.clone(), parseInt(t)
                    }
                    return parseInt(e)
                }
            }, {
                key: "_updatePaints",
                value: function(e) {
                    var t = this;
                    if (CK.Settings.color) {
                        var r = this.oldModdedParts,
                            n = this.modded.parts;
                        if (e.shaders)
                            for (var i in e.replaceShaders && (this.shaders = {}, this.paints = {}, this.paintByIntent = {}), e.shaders) e.shaders[i] ? this.shaders[i] = new Mt.a(e.shaders[i]) : delete this.shaders[i];
                        else "shaders" in e && (this.shaders = {}, this.paints = {}, this.paintByIntent = {});
                        if ("schemes" in e)
                            if (void 0 === e.schemes) this.schemes = {};
                            else {
                                if (!e.clear)
                                    for (var a in e.schemes)
                                        for (var s in this.paints) {
                                            var o = C.a.slots[s];
                                            o && a === (o.scheme_group || "outfit") && (delete this.paints[s], delete this.paintByIntent[s])
                                        }
                                this.schemes = Object.assign({}, this.schemes, e.schemes)
                            }
                        if ("paints" in e)
                            if (e.paints)
                                for (var u in e.paints) {
                                    var c = e.paints[u];
                                    if (void 0 === c) delete this.paints[u];
                                    else
                                        for (var h in u in this.paints || (this.paints[u] = {}), c) {
                                            var d = c[h];
                                            if (void 0 !== d) {
                                                var f = this._addPaint(d);
                                                if (this.paints[u][h] = f, !e.clear && l.a.shaderballs && !isNaN(h)) {
                                                    var p = n[u];
                                                    if (p)
                                                        if (p.colors[h]) {
                                                            this.paintByIntent[u] || (this.paintByIntent[u] = {});
                                                            var m = p.colors[h].surface.id,
                                                                v = p.colors[h].count;
                                                            this.paintByIntent[u][m + "_" + v] = [f, p.id]
                                                        } else console.warn("missing mapping for part", p.name, "patches may have been updated since painting?")
                                                }
                                            } else delete this.paints[u][h]
                                        }
                                } else this.paints = {}, this.paintByIntent = {};
                        if ("decals" in e)
                            if (e.decals)
                                for (var g in e.decals)
                                    if (e.decals[g])
                                        for (var y in e.decals[g]) e.decals[g][y] ? (this.decals[g] || (this.decals[g] = {}), this.decals[g][y] = e.decals[g][y]) : delete this.decals[g][y];
                                    else delete this.decals[g];
                        else this.decals = {};
                        if (l.a.shaderballs)
                            if (e.clear) e.paintByIntent && (this.paintByIntent = e.paintByIntent);
                            else {
                                var b = function(i) {
                                    var a = n[i],
                                        s = r[i];
                                    if (!s || a.id !== s.id || "schemes" in e) {
                                        var o = (C.a.slots[i] || C.a.slots[a.slot]).scheme_group || "outfit",
                                            l = t.schemes[o];
                                        a.colors.map((function(e, r) {
                                            var n = e.shader,
                                                s = (e.priority, e.surface),
                                                u = e.count,
                                                c = s.id,
                                                h = u,
                                                d = At(t.paintByIntent[i] && t.paintByIntent[i][c + "_" + h] || [], 2),
                                                f = d[0],
                                                p = d[1];
                                            if (t.paints[i] || (t.paints[i] = {}), p === a.id) t.paints[i][r] = f;
                                            else if (n && l) t.paints[i][r] = t._addPaint(n);
                                            else if (f) t.paints[i][r] = f;
                                            else if (l) {
                                                var m = C.a.getScheme(o, l) || console.error("Missing scheme!", l);
                                                if (m) {
                                                    var v = z.a.getSchemeShader(e, m, o);
                                                    v ? t.paints[i][r] = t._addPaint(v) : console.log("could not find paint", e, m, o)
                                                }
                                            } else t.paints[i] && delete t.paints[i][r]
                                        }));
                                        var u = t.decals[i];
                                        if (u && "schemes" in e) {
                                            var c = function(e) {
                                                var r = u[e],
                                                    n = C.a.decals[r],
                                                    s = C.a.slots[a.slot].scheme_group || "outfit",
                                                    o = t.schemes[s],
                                                    l = C.a.getScheme(s, o) || console.error("Missing scheme!", o);
                                                n && n.colors && n.colors.map((function(r, n) {
                                                    var a = z.a.getSchemeShader(r, l, s);
                                                    t.paints[i][e + "_" + n] = t._addPaint(a)
                                                }))
                                            };
                                            for (var h in u) c(h)
                                        }
                                    }
                                };
                                for (var k in n) b(k)
                            }
                        for (var w in this.paints) Object.keys(this.paints[w]).length || delete this.paints[w]
                    }
                }
            }, {
                key: "_cleanupPaints",
                value: function() {
                    for (var e in this.paints)
                        for (var t in this.paints[e]) this.paints[e][t] in this.shaders || delete this.paints[e][t];
                    for (var r in this.intendedShaders = {}, this.paintByIntent)
                        for (var n in this.paintByIntent[r]) {
                            var i = this.paintByIntent[r][n][0];
                            i in this.shaders ? this.intendedShaders[i] = this.shaders[i] : delete this.paintByIntent[r][n]
                        }
                    for (var a in this.usedShaders = {}, this.paints)
                        if (a in this.modded.parts)
                            for (var s in this.paints[a])
                                if (!(this.paints[a] in this.usedShaders)) {
                                    var o = this.modded.parts[a],
                                        l = this.modded.decals[a];
                                    if (o) {
                                        var u = !1;
                                        if (isNaN(s)) {
                                            if (l) {
                                                var c = At(Kt.a.deconstructDecalMapping(s), 2),
                                                    h = c[0],
                                                    d = c[1],
                                                    f = l[h];
                                                f && parseInt(d) <= f.maskCount && (u = !0)
                                            }
                                        } else s in o.colors && (u = !0);
                                        if (u) {
                                            var p = this.paints[a][s];
                                            this.usedShaders[p] = this.shaders[p]
                                        }
                                    }
                                }
                    for (var m in this.intentionalUnusedShaders = {}, this.shaders) {
                        var v = this.shaders[m];
                        !(m in this.usedShaders) && v.hasChanged() && (this.intentionalUnusedShaders[m] = this.shaders[m])
                    }
                    for (var g in this.keepShaders = Object.assign({}, this.intentionalUnusedShaders, this.usedShaders, this.intendedShaders), this.shaders) g in this.keepShaders || delete this.shaders[g]
                }
            }, {
                key: "_customUpdateEnd",
                value: function(e) {}
            }, {
                key: "_customUpdateStart",
                value: function(e) {}
            }, {
                key: "_convertOldFormats",
                value: function() {}
            }, {
                key: "_getMods",
                value: function(e) {
                    var t = {};
                    for (var r in this.parts) t[r] = C.a.getPart(this.parts[r]);
                    return this._mods.get(e, {
                        parts: t,
                        poses: this.poses,
                        hiRez: this.settings.hiRez,
                        clickedThisUpdate: this.clickedThisUpdate
                    })
                }
            }, {
                key: "getPart",
                value: function(e) {
                    var t = this.parts[e];
                    if (void 0 !== t) return C.a.parts[t]
                }
            }, {
                key: "clone",
                value: function() {
                    return this.getJson(!1)
                }
            }, {
                key: "getLimitedParts",
                value: function() {
                    var e = {};
                    if (this.parts)
                        for (var t in this.parts)
                            if (!(t in this.disableSlot)) {
                                var r = this.parts[t],
                                    n = C.a.getPart(r);
                                if (void 0 === n) {
                                    console.error("Failed to find part id", r, "in slot", t);
                                    continue
                                }
                                if ("CLEAR" === n.name && !l.a.configEditorMode) continue;
                                if (n.hasTarget(this.parts, t)) e[t] = n.id;
                                else {
                                    var i = n.getStandard(t, this.parts);
                                    i && (e[t] = i.id)
                                }
                            }
                    return e
                }
            }, {
                key: "getJson",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.limitedParts,
                        r = this.meta.character_name || l.a.defaultCharacterName,
                        n = Object.assign({}, this.meta, {
                            character_name: r
                        }),
                        i = {},
                        a = {},
                        s = this.locations,
                        o = this.parameters;
                    if (e && l.a.shaderballs)
                        for (var u in i = Object.assign({}, this.intentionalUnusedShaders, this.usedShaders), this.paintByIntent)
                            for (var c in this.paintByIntent[u]) this.paintByIntent[u][c] in i || delete this.paintByIntent[u][c];
                    else a = this.paintByIntent, i = Object.assign({}, this.shaders);
                    for (var h in i) i[h] = i[h].toJson();
                    if (this.strippedParameters && (o = this.strippedParameters), this.strippedLocations)
                        for (var d in s = {}, this.strippedLocations) {
                            var f = this.strippedLocations[d] || {},
                                p = f.text ? Ot.escape(f.text) : "";
                            s[d] = Object.assign({}, f, p ? {
                                text: p
                            } : {})
                        }
                    var m = {};
                    for (var v in this.labels) m[v] = Ot.escape(this.labels[v]);
                    var g = this.decals;
                    if (e)
                        for (var y in g = {}, this.modded.decals)
                            for (var b in this.modded.decals[y]) g[y] = g[y] || {}, g[y][b] = this.modded.decals[y][b].id;
                    var k = {
                        parts: t,
                        labels: m,
                        sliders: this.sliders,
                        poseSliders: this.poseSliders,
                        poses: this.poses,
                        limitedPoses: this.limitedPoses,
                        meta: n,
                        physical: this.physical,
                        decals: g,
                        paints: this.paints,
                        paintByIntent: a,
                        shaders: i,
                        artVersion: l.a.artVersionNumber,
                        mirroredPose: this.mirroredPose,
                        parameters: o,
                        locations: s,
                        custom: this.custom,
                        version: 1.8,
                        flags: this.flags,
                        environment: Object.assign({}, this.environment),
                        serverTime: parseInt(CK.serverTime),
                        clientTime: parseInt(Date.now()),
                        schemes: this.schemes,
                        kit: this.kit,
                        transforms: this.transforms,
                        attachParts: e ? this.modded.usedAttachParts : this.attachParts,
                        color: l.a.color,
                        dev: !1
                    };
                    if (l.a.configEditorMode && (l.a.configEditorSavePoseMode || delete k.poses, void 0 === this.mirroredPose && delete k.mirroredPose, l.a.configEditorSaveMeshes || delete k.parts, l.a.configEditorSaveColor || delete k.paints, l.a.configEditorSaveDecals || delete k.decals, delete k.character_name), this._customGetJson(k, e), e)
                        for (var w in k)(void 0 === k[w] || k[w] && 0 === Object.keys(k[w]).length && k[w].constructor === Object) && delete k[w];
                    return JSON.parse(JSON.stringify(k))
                }
            }, {
                key: "_customGetJson",
                value: function(e) {}
            }, {
                key: "matchesConfig",
                value: function(e) {
                    if (e.poses)
                        for (var t in e.poses)
                            if (this.limitedPoses[t] !== e.poses[t]) return !1;
                    if (e.parts)
                        for (var r in e.parts) {
                            var n = e.parts[r],
                                i = C.a.parts[n],
                                a = !n || i && "CLEAR" === i.name;
                            if (a && this.parts[r]) return !1;
                            if (!a && this.parts[r] !== e.parts[r]) return !1
                        }
                    return !e.sliders || !Object.keys(e.sliders).length || Math.round(e.sliders.bust || 0) === Math.round(this.sliders.bust || 0) && Math.round(e.sliders.faceSoftness || 0) === Math.round(this.sliders.faceSoftness || 0)
                }
            }, {
                key: "getAvailableSubPoses",
                value: function(e) {
                    var t = this.parts[e];
                    return t && C.a.configs[C.a.getPart(t).name + "_pose"] || []
                }
            }, {
                key: "getAvailablePoses",
                value: function() {
                    var e = C.a.configs.pose;
                    if (e && e.length) {
                        var t = this._getMods("includePoses").map((function(e) {
                                return e.effect
                            })),
                            r = this._getMods("excludePoses").map((function(e) {
                                return e.effect
                            })),
                            n = {};
                        for (var i in e) {
                            var a = e[i];
                            a.hide || t.length && !C.a.match(t, a.keywords) || C.a.match(r, a.keywords) || (n[a.poses.main] = a)
                        }
                        return n
                    }
                }
            }, {
                key: "_getLimitedPoses",
                value: function() {
                    var e = this,
                        t = Bt({}, this.poses);
                    for (var r in t) t[r] || delete t[r];
                    var n = function(r) {
                        var n = t[r];
                        if ("main" === r) {
                            var i = e.getAvailablePoses();
                            if (i && !(n in i)) {
                                var a = [];
                                for (var s in i) a.push(i[s]);
                                if (a.length) {
                                    var o = a.find((function(e) {
                                        return e.keywords.fallback
                                    }));
                                    o ? t.main = o.poses.main : (a.sort((function(e, t) {
                                        return e.display_order < t.display_order ? -1 : 1
                                    })), t.main = a[0].poses.main)
                                } else console.error("Can not limit pose. No configs match mod criteria!")
                            }
                        } else {
                            var l = e.getAvailableSubPoses(r);
                            l.length && l.find((function(e) {
                                return e.pose_id === n
                            })) || delete t[r]
                        }
                    };
                    for (var i in t) n(i);
                    return t
                }
            }, {
                key: "postGetResources",
                value: function() {}
            }, {
                key: "solidifyDirectManipulation",
                value: function() {
                    this.change({})
                }
            }, {
                key: "isOutOfDate",
                value: function(e) {
                    return !1
                }
            }]) && Dt(t.prototype, r), n && Dt(t, n), e
        }();
        Ft.VERSION = 1.8;
        var Ut = function() {};

        function jt(e) {
            if (Array.isArray(e)) return e.map((function(e) {
                return jt(e)
            }));
            e = Pt(e);
            var t = Ut.map;
            for (var r in t) {
                var n = t[r],
                    i = new RegExp(n, "g");
                e = e.replace(i, r)
            }
            return e = (e = e.replace(/&quot;/g, '"')).replace(/&amp;/g, "&")
        }

        function zt(e) {
            if (Array.isArray(e)) return e.map((function(e) {
                return zt(e)
            }));
            var t = Ut.map;
            for (var r in e = (e = e.replace(/&/g, "&amp;")).replace(/"/g, "&quot;"), t) {
                var n = t[r],
                    i = new RegExp(r, "g");
                e = e.replace(i, n)
            }
            return xt(e)
        }
        Ut.map = {
            "'": "&apos;",
            "<": "&lt;",
            ">": "&gt;",
            " ": "&nbsp;",
            "¡": "&iexcl;",
            "¢": "&cent;",
            "£": "&pound;",
            "¤": "&curren;",
            "¥": "&yen;",
            "¦": "&brvbar;",
            "§": "&sect;",
            "¨": "&uml;",
            "©": "&copy;",
            "ª": "&ordf;",
            "«": "&laquo;",
            "¬": "&not;",
            "®": "&reg;",
            "¯": "&macr;",
            "°": "&deg;",
            "±": "&plusmn;",
            "²": "&sup2;",
            "³": "&sup3;",
            "´": "&acute;",
            "µ": "&micro;",
            "¶": "&para;",
            "·": "&middot;",
            "¸": "&cedil;",
            "¹": "&sup1;",
            "º": "&ordm;",
            "»": "&raquo;",
            "¼": "&frac14;",
            "½": "&frac12;",
            "¾": "&frac34;",
            "¿": "&iquest;",
            "À": "&Agrave;",
            "Á": "&Aacute;",
            "Â": "&Acirc;",
            "Ã": "&Atilde;",
            "Ä": "&Auml;",
            "Å": "&Aring;",
            "Æ": "&AElig;",
            "Ç": "&Ccedil;",
            "È": "&Egrave;",
            "É": "&Eacute;",
            "Ê": "&Ecirc;",
            "Ë": "&Euml;",
            "Ì": "&Igrave;",
            "Í": "&Iacute;",
            "Î": "&Icirc;",
            "Ï": "&Iuml;",
            "Ð": "&ETH;",
            "Ñ": "&Ntilde;",
            "Ò": "&Ograve;",
            "Ó": "&Oacute;",
            "Ô": "&Ocirc;",
            "Õ": "&Otilde;",
            "Ö": "&Ouml;",
            "×": "&times;",
            "Ø": "&Oslash;",
            "Ù": "&Ugrave;",
            "Ú": "&Uacute;",
            "Û": "&Ucirc;",
            "Ü": "&Uuml;",
            "Ý": "&Yacute;",
            "Þ": "&THORN;",
            "ß": "&szlig;",
            "à": "&agrave;",
            "á": "&aacute;",
            "â": "&acirc;",
            "ã": "&atilde;",
            "ä": "&auml;",
            "å": "&aring;",
            "æ": "&aelig;",
            "ç": "&ccedil;",
            "è": "&egrave;",
            "é": "&eacute;",
            "ê": "&ecirc;",
            "ë": "&euml;",
            "ì": "&igrave;",
            "í": "&iacute;",
            "î": "&icirc;",
            "ï": "&iuml;",
            "ð": "&eth;",
            "ñ": "&ntilde;",
            "ò": "&ograve;",
            "ó": "&oacute;",
            "ô": "&ocirc;",
            "õ": "&otilde;",
            "ö": "&ouml;",
            "÷": "&divide;",
            "ø": "&oslash;",
            "ù": "&ugrave;",
            "ú": "&uacute;",
            "û": "&ucirc;",
            "ü": "&uuml;",
            "ý": "&yacute;",
            "þ": "&thorn;",
            "ÿ": "&yuml;",
            "Œ": "&OElig;",
            "œ": "&oelig;",
            "Š": "&Scaron;",
            "š": "&scaron;",
            "Ÿ": "&Yuml;",
            "ƒ": "&fnof;",
            "ˆ": "&circ;",
            "˜": "&tilde;",
            "Α": "&Alpha;",
            "Β": "&Beta;",
            "Γ": "&Gamma;",
            "Δ": "&Delta;",
            "Ε": "&Epsilon;",
            "Ζ": "&Zeta;",
            "Η": "&Eta;",
            "Θ": "&Theta;",
            "Ι": "&Iota;",
            "Κ": "&Kappa;",
            "Λ": "&Lambda;",
            "Μ": "&Mu;",
            "Ν": "&Nu;",
            "Ξ": "&Xi;",
            "Ο": "&Omicron;",
            "Π": "&Pi;",
            "Ρ": "&Rho;",
            "Σ": "&Sigma;",
            "Τ": "&Tau;",
            "Υ": "&Upsilon;",
            "Φ": "&Phi;",
            "Χ": "&Chi;",
            "Ψ": "&Psi;",
            "Ω": "&Omega;",
            "α": "&alpha;",
            "β": "&beta;",
            "γ": "&gamma;",
            "δ": "&delta;",
            "ε": "&epsilon;",
            "ζ": "&zeta;",
            "η": "&eta;",
            "θ": "&theta;",
            "ι": "&iota;",
            "κ": "&kappa;",
            "λ": "&lambda;",
            "μ": "&mu;",
            "ν": "&nu;",
            "ξ": "&xi;",
            "ο": "&omicron;",
            "π": "&pi;",
            "ρ": "&rho;",
            "ς": "&sigmaf;",
            "σ": "&sigma;",
            "τ": "&tau;",
            "υ": "&upsilon;",
            "φ": "&phi;",
            "χ": "&chi;",
            "ψ": "&psi;",
            "ω": "&omega;",
            "ϑ": "&thetasym;",
            "ϒ": "&Upsih;",
            "ϖ": "&piv;",
            "–": "&ndash;",
            "—": "&mdash;",
            "‘": "&lsquo;",
            "’": "&rsquo;",
            "‚": "&sbquo;",
            "“": "&ldquo;",
            "”": "&rdquo;",
            "„": "&bdquo;",
            "†": "&dagger;",
            "‡": "&Dagger;",
            "•": "&bull;",
            "…": "&hellip;",
            "‰": "&permil;",
            "′": "&prime;",
            "″": "&Prime;",
            "‹": "&lsaquo;",
            "›": "&rsaquo;",
            "‾": "&oline;",
            "⁄": "&frasl;",
            "€": "&euro;",
            "ℑ": "&image;",
            "℘": "&weierp;",
            "ℜ": "&real;",
            "™": "&trade;",
            "ℵ": "&alefsym;",
            "←": "&larr;",
            "↑": "&uarr;",
            "→": "&rarr;",
            "↓": "&darr;",
            "↔": "&harr;",
            "↵": "&crarr;",
            "⇐": "&lArr;",
            "⇑": "&UArr;",
            "⇒": "&rArr;",
            "⇓": "&dArr;",
            "⇔": "&hArr;",
            "∀": "&forall;",
            "∂": "&part;",
            "∃": "&exist;",
            "∅": "&empty;",
            "∇": "&nabla;",
            "∈": "&isin;",
            "∉": "&notin;",
            "∋": "&ni;",
            "∏": "&prod;",
            "∑": "&sum;",
            "−": "&minus;",
            "∗": "&lowast;",
            "√": "&radic;",
            "∝": "&prop;",
            "∞": "&infin;",
            "∠": "&ang;",
            "∧": "&and;",
            "∨": "&or;",
            "∩": "&cap;",
            "∪": "&cup;",
            "∫": "&int;",
            "∴": "&there4;",
            "∼": "&sim;",
            "≅": "&cong;",
            "≈": "&asymp;",
            "≠": "&ne;",
            "≡": "&equiv;",
            "≤": "&le;",
            "≥": "&ge;",
            "⊂": "&sub;",
            "⊃": "&sup;",
            "⊄": "&nsub;",
            "⊆": "&sube;",
            "⊇": "&supe;",
            "⊕": "&oplus;",
            "⊗": "&otimes;",
            "⊥": "&perp;",
            "⋅": "&sdot;",
            "⌈": "&lceil;",
            "⌉": "&rceil;",
            "⌊": "&lfloor;",
            "⌋": "&rfloor;",
            "⟨": "&lang;",
            "⟩": "&rang;",
            "◊": "&loz;",
            "♠": "&spades;",
            "♣": "&clubs;",
            "♥": "&hearts;",
            "♦": "&diams;"
        };
        var Nt = r(66),
            Lt = r(3);

        function Vt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Gt = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "init",
                value: function() {
                    var e = this;
                    if (!this.initialized) {
                        this.initialized = !0, this.width = Math.floor(CK.renderManager.width / 2), this.height = Math.floor(CK.renderManager.height / 2), this.renderTarget = new RK.WebGLRenderTarget(this.width, this.height, {
                            antialias: !1,
                            alpha: !1
                        }), this.renderTarget.autoClear = !1, this.renderTarget.magFilter = RK.NearestFilter, this.renderTarget.minFilter = RK.NearestFilter, this.renderTarget.stencilBuffer = !1, o.a.register((function() {
                            return e.render()
                        }), "end", "Render IDs");
                        var t = function() {
                            return e.requestRefresh()
                        };
                        u.a.on("resize", t), CK.Events.on("CharacterFinishedChanging", t), CK.Events.on("cameraMoved", t), this.requestRefresh(), this.enabled = !0
                    }
                }
            }, {
                key: "enable",
                value: function() {
                    this.init(), this.requestRefresh(), this.enabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.enabled = !1
                }
            }, {
                key: "requestRefresh",
                value: function() {
                    this.needsRefresh = !0
                }
            }, {
                key: "getID",
                value: function(t, r) {
                    if (!this.enabled) return console.warn("RenderIDs not enabled") || [null, null];
                    if (!this.glIdContext) return console.error("RenderIDs not initialized") || [null, null];
                    var n = new Uint8Array(4);
                    if (CK.renderManager.renderer.readRenderTargetPixels(this.renderTarget, Math.round(t / 2), this.renderTarget.height - Math.round(r / 2), 1, 1, n), !n[0]) return [null, null];
                    var i, a, s = this.idToSlotMapping[n[0] - 1];
                    return this.mode === e.modes.COLOR ? (n[2] && (i = Math.floor((n[2] - 1) / 4), a = (n[2] - 1) % 4), [s, n[1], i, a]) : this.mode === e.modes.OBJECT ? [s, 255 * n[1] + n[2]] : void 0
                }
            }, {
                key: "setMode",
                value: function(e) {
                    this.enable(), this.mode = e
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    if (this.initialized && this.needsRefresh && this.enabled) {
                        this.needsRefresh = !1;
                        var r = Math.floor(CK.renderManager.width / 2),
                            n = Math.floor(CK.renderManager.height / 2);
                        r === this.renderTarget.width && n === this.renderTarget.height || this.renderTarget.setSize(r, n);
                        var i = this.mode === this.modes.COLOR,
                            a = i ? CK.display.getMeshesInAtlas() : CK.display.getMeshes();
                        this.idToSlotMapping = Object.keys(a), this.idToSlotMapping.map((function(r, n) {
                            var s = a[r];
                            s.prevMaterial = s.material;
                            var o = s.IDMaterial;
                            o || (s.IDMaterial = o = new SK.ID(I.getOptionsFromGeo(s.geometry, s.part)), s.layers.enable(e.layer), i && s.bakeMaterials && s.bakeMaterials.color && s.bakeMaterials.color.aaidMap && o.setUniform("aaidMap", s.bakeMaterials.color.aaidMap)), o.setUniform("meshid", n + 1), o.setUniform("mode", t.mode), o.side = Lt.DoubleSide;
                            var l = CK.display.modded.orderedDecals[r];
                            if (l) {
                                o.layerCount = l.length;
                                for (var u = 0; u < o.layerCount; u++) o.setLayer(s.bakeMaterials.color.uniforms, u)
                            } else o.layerCount = 0;
                            s.material = o
                        })), CK.orbitCamera.camera.layers.set(e.layer);
                        var s = CK.renderManager.renderer;
                        for (var o in s.autoClear = !1, s.setClearColor(new RK.Color(0, 0, 0), 0), s.clearTarget(this.renderTarget, !0, !0, !1), s.render(CK.scene, CK.orbitCamera.camera, this.renderTarget, !1), this.glIdContext = s.getContext(), CK.orbitCamera.camera.layers.set(0), a) {
                            var l = a[o];
                            l.IDMaterial && (l.IDMaterial = l.material, l.material = l.prevMaterial, delete l.prevMaterial)
                        }
                    }
                }
            }], (r = null) && Vt(t.prototype, r), n && Vt(t, n), e
        }();

        function Wt(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function qt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Gt.layer = 6, Gt.modes = Object.freeze({
            COLOR: 1,
            OBJECT: 2
        }), Gt.mode = Gt.modes.COLOR;
        var Ht = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "init",
                value: function() {
                    var e = this;
                    if (!this._initialized) {
                        this._initialized = !0;
                        var t = CK.renderManager.renderer.domElement;
                        window.addEventListener("mouseup", (function(t) {
                            return e.onMouseUpInWindow(t)
                        }), !1), t.addEventListener("mousedown", (function(t) {
                            return e.onMouseDownInDom(t)
                        }), !1), t.addEventListener("mouseup", (function(t) {
                            return e.onMouseUpInDom(t)
                        }), !1), window.addEventListener("mousemove", (function(t) {
                            return e.onMouseMoveInWindow(t)
                        }), !1), document.addEventListener("mouseout", (function(t) {
                            return e.onMouseMoveInWindow(t)
                        }), !1), t.addEventListener("touchstart", (function(t) {
                            return e.onTouchStartInDom(t)
                        }), !1), t.addEventListener("touchmove", (function(t) {
                            return e.onTouchMoveInDom(t)
                        }), !1), t.addEventListener("touchend", (function(t) {
                            return e.onTouchEndInDom(t)
                        }), !1), window.addEventListener("touchstart", (function(t) {
                            return e.onTouchStart(t)
                        }), !1), window.addEventListener("touchend", (function(t) {
                            return e.onTouchEnd(t)
                        }), !1), window.addEventListener("touchmove", (function(t) {
                            return e.onTouchMove(t)
                        }), !1), window.addEventListener("touchcancel", (function(t) {
                            return e.onTouchCancel(t)
                        }), !1), this.dragged = void 0, this.startMousePos = void 0, this.endMousePos = new RK.Vec2(0, 0), this.panned = !1, this.oneTouch = !1, this.canvasEl = document.getElementById("placeholder-canvas"), Gt.init()
                    }
                }
            }, {
                key: "getCursor",
                value: function(e) {
                    var t = this._shader,
                        r = document.createElement("canvas");
                    r.width = 70, r.height = 70;
                    var n = r.getContext("2d"),
                        i = r.width,
                        a = r.height;
                    n.clearRect(0, 0, i, a), n.beginPath(), n.moveTo(4, 4), n.lineWidth = 2, n.lineTo(8, 16), n.lineTo(16, 8), n.lineTo(4, 4), n.strokeStyle = "black", n.stroke(), n.closePath(), CK.Shaderballs.requestBall(t, (function() {
                        var s = CK.Shaderballs.getBallNow(t),
                            o = (i - 50) / 2,
                            l = Math.PI / 135,
                            u = new Image;
                        u.onload = function() {
                            n.translate(i / 2, a / 2), n.rotate(135 * l), n.translate(-i / 2, -a / 2), n.drawImage(u, o, o, 50, 50), e(r.toDataURL("image/png"))
                        }, u.src = s
                    }))
                }
            }, {
                key: "updateCursor",
                value: function() {
                    var e = this;
                    this.getCursor((function(t) {
                        e.createStickyCursor(t)
                    }))
                }
            }, {
                key: "createStickyCursor",
                value: function(e) {
                    this.stickyCursor = document.getElementById("sticky-cursor"), this.stickyCursor || (this.stickyCursor = document.createElement("img"), this.stickyCursor.setAttribute("id", "sticky-cursor"), this.stickyCursor.style.position = "fixed", this.stickyCursor.style.width = 70, this.stickyCursor.style.height = 70, document.body.appendChild(this.stickyCursor)), this.stickyCursor.src = e, this.stickyCursor.style.left = -70, this.stickyCursor.style.top = -70
                }
            }, {
                key: "clearStickyCursor",
                value: function() {
                    var e = document.getElementById("sticky-cursor");
                    e && e.parentNode.removeChild(e), this.stickyCursor = null
                }
            }, {
                key: "moveStickyCursor",
                value: function(e) {
                    e.touches && 1 === e.touches.length && this.stickyCursor && (this.stickyCursor.style.left = e.touches[0].clientX - 70 / 1.5, this.stickyCursor.style.top = e.touches[0].clientY - 70 / 1.5)
                }
            }, {
                key: "disable",
                value: function() {
                    this._enabled = !1, Gt.disable(), CK.display.colorBake.removeAllTemp(), CK.PinchControl.disable(), CK.Events.emit("paintModeChanged")
                }
            }, {
                key: "enable",
                value: function(e, t, r) {
                    this.init(), this.select(e), Gt.enable(), this._onApply = t, this._onHover = r, UIState.compact && (CK.PinchControl.enable(), CK.orbitCamera.controls.enableZoom = !0), this._enabled = !0, CK.Events.emit("paintModeChanged")
                }
            }, {
                key: "select",
                value: function(e) {
                    this._shader = e, CK.RenderIDs.needsRefresh = !0, this.updateCursor()
                }
            }, {
                key: "onTouchStart",
                value: function(e) {
                    "img" === e.target.nodeName.toLowerCase() ? this._enabled && (this.oneTouch = 1 === e.touches.length, this.moved = !1, this.updateUnderTouch(e)) : this.clearStickyCursor()
                }
            }, {
                key: "onTouchStartInDom",
                value: function(e) {
                    this._enabled && (this.touchStartInDom = !0)
                }
            }, {
                key: "onTouchMoveInDom",
                value: function(e) {
                    this._enabled && (this.moved = !0)
                }
            }, {
                key: "onTouchMove",
                value: function(e) {
                    "img" === e.target.nodeName.toLowerCase() && this._enabled && (this.moveStickyCursor(e), this.moved = !0, this._enabled && this.dragged && (this.updateUnderTouch(e), this.hit ? this._onHover(this.hit) : CK.display.colorBake.removeAllTemp()))
                }
            }, {
                key: "onTouchEndInDom",
                value: function(e) {
                    this.clearStickyCursor()
                }
            }, {
                key: "onTouchEnd",
                value: function(e) {
                    this.clearStickyCursor(), this._enabled && (CK.RenderIDs.needsRefresh = !0, CK.orbitCamera.controls.enabled = !0, void 0 === this.hit || !this.dragged && this.moved || !this.oneTouch || this.fillMouseDown()), this.onTouchCancel(e), 1 !== e.touches.length && (this.oneTouch = !1), this.moved = !1, this.dragged = !1, this.touchStartInDom = !1
                }
            }, {
                key: "onTouchCancel",
                value: function(e) {
                    this.clearStickyCursor(), this._enabled && e.cancelable && (this.dragged || this.touchStartInDom) && e.preventDefault()
                }
            }, {
                key: "updateUnderTouch",
                value: function(e) {
                    var t = e.touches[0].pageX - 70 / 1.5 + 4,
                        r = e.touches[0].pageY - 70 / 1.5 + 4,
                        n = Wt(Gt.getID(t, r), 2),
                        i = n[0],
                        a = n[1];
                    if (i) {
                        var s = CK.modded.parts[i],
                            o = s.getRenderIDMapping(a),
                            l = CK.data.paints[i] && CK.data.paints[i][o] || 1;
                        this.hit = {
                            part: s,
                            patch: a,
                            mapping: o,
                            hover: l,
                            slot: i
                        }
                    } else this.hit = void 0
                }
            }, {
                key: "onMouseDownInDom",
                value: function(e) {
                    this._enabled && 0 === e.button ? (this.startMousePos = new RK.Vec2(e.clientX, e.clientY), this.panned = !1, this.updateHitUnderMouse(e), this.hit ? CK.orbitCamera.controls.enabled = !1 : CK.orbitCamera.controls.enabled = !0) : this.startMousePos = void 0
                }
            }, {
                key: "fillMouseDown",
                value: function() {
                    this._enabled && this._onApply(this.hit)
                }
            }, {
                key: "onMouseMoveInWindow",
                value: function(e) {
                    if (this._enabled) {
                        var t = e && document.elementFromPoint(e.pageX, e.pageY);
                        if (this.endMousePos.set(e.clientX, e.clientY), this.startMousePos && this.startMousePos.distanceTo(this.endMousePos) > 10) this.panned = !0, CK.orbitCamera.controls.enabled = !0, CK.display.colorBake.removeAllTemp();
                        else {
                            if (t && "CANVAS" === t.nodeName && (!e.buttons || this.dragged) && (this.updateHitUnderMouse(e), this.hit)) return this._onHover(this.hit);
                            this.hit || CK.display.colorBake.removeAllTemp()
                        }
                    }
                }
            }, {
                key: "onMouseUpInDom",
                value: function(e) {
                    this._enabled && (CK.orbitCamera.controls.enabled = !0, this.endMousePos.set(e.clientX, e.clientY), !this.dragged && this.panned || (this.updateHitUnderMouse(e), this.hit && this.fillMouseDown()), this.panned = !1)
                }
            }, {
                key: "onMouseUpInWindow",
                value: function(e) {
                    this.dragged = !1, this.startMousePos = void 0, this.panned = !1
                }
            }, {
                key: "updateHitUnderMouse",
                value: function(e) {
                    var t = Wt(Gt.getID(e.pageX, e.pageY), 4),
                        r = t[0],
                        n = t[1],
                        i = t[2],
                        a = t[3];
                    if (r) {
                        var s, o = CK.modded.parts[r];
                        if (void 0 !== i) s = CK.display.modded.orderedDecals[r][i].mapping + "_" + a;
                        else {
                            if (!o) return void(this.hit = void 0);
                            (s = o.getRenderIDMapping(n)) && s.startsWith("special") && (n = 0, s = o.getRenderIDMapping(n))
                        }
                        var l = CK.data.paints[r] && CK.data.paints[r][n] || -1;
                        this.hit = {
                            part: o,
                            patch: n,
                            mapping: s,
                            hover: l,
                            slot: r,
                            layer: i,
                            subLayer: a
                        }, this.canvasEl && (this.canvasEl.classList.add("isHoveringPart"), CK.ColorManager.redirectHit(this.hit, this._shader).length ? this.canvasEl.classList.remove("isInvalidPaint") : this.canvasEl.classList.add("isInvalidPaint"))
                    } else this.hit = void 0, this.canvasEl && this.canvasEl.classList.remove("isHoveringPart")
                }
            }, {
                key: "enabled",
                get: function() {
                    return !!this._enabled
                }
            }], (r = null) && qt(t.prototype, r), n && qt(t, n), e
        }();

        function Xt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Ht.dragged = !1;
        var Yt = VN.axios,
            Jt = {
                saves: "/all_user_config/",
                purchases: "/all_user_purchased_config/"
            },
            Zt = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._loading = {}, this._configs = {}
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "clearCachedPurchaseConfigs",
                    value: function() {
                        delete this._configs.purchases, delete this._loading.purchases
                    }
                }, {
                    key: "loadAll",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "saves",
                            r = Jt[t],
                            n = "saves" === t;
                        return this._loading[t] ? this._loading[t] : !F.a.loggedIn || l.a.forge || this._configs[t] ? void 0 : (this._configs[t] = void 0, this._loading[t] = Yt({
                            method: "get",
                            url: r,
                            responseType: "json"
                        }).then((function(r) {
                            e._configs[t] = r.data.configs || [], e._loading[t] = void 0, Reporting.userConfigsLoaded(t, e._configs[t]), n || e._configs[t].map((function(e) {
                                delete e.config_id, delete e.physical
                            })), u.a.emit("myCharactersChanged")
                        })).catch((function(n) {
                            throw e._loading[t] = void 0, u.a.emit("myCharactersChanged"), Reporting.exception("Retrieving ".concat(r), n), e.loadFailed = !0, u.a.emit("alert", ["Your saved characters could not be loaded. Try refreshing the page or logging in again.", "Load saves failed."]), new Error("Saves failed to load.")
                        })), this._loading[t])
                    }
                }, {
                    key: "isLoading",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "saves";
                        return !!this._loading[e]
                    }
                }, {
                    key: "hasLoaded",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "saves";
                        return !!this._configs[e] && !this._loading[e]
                    }
                }, {
                    key: "activeSaving",
                    value: function() {
                        return !!(this.saving || this.activeConfig && this.activeConfig.config_id && this.activeConfig.config_id.then)
                    }
                }, {
                    key: "getActiveID",
                    value: function() {
                        return this.activeConfig && this.activeConfig.config_id && !this.activeConfig.config_id.then ? this.activeConfig.config_id : void 0
                    }
                }, {
                    key: "setActiveConfig",
                    value: function(e) {
                        this.activeConfig = e, CK.character.savedChanges = !1
                    }
                }, {
                    key: "saveAs",
                    value: function() {
                        var e = this;
                        return this.savingAs = !0, this.activeConfig = {}, this.save().then((function() {
                            return e.savingAs = !1
                        }))
                    }
                }, {
                    key: "save",
                    value: function() {
                        var e = this;
                        return F.a.loggedIn ? this.activeSaving() ? Promise.reject("Already saving") : this.loadFailed ? Promise.reject("Failed to retrieve your saves. Try refreshing the page.") : (console.log("saving"), CK.character.savedChanges = !0, u.a.emit("myCharactersChanged"), this.saving = this.package().then((function(t) {
                            if (t.old) throw new Error("Old configs can not be saved");
                            if (t.config_id && t.config_id.then) throw new Error("Attempting to save config that is currently saving.");
                            Reporting.characterSaved(t);
                            var r = void 0;
                            return e._loading.saves ? r = e._loading.saves.then((function() {
                                return e._updateOrInsert(t), e._upload(t)
                            })) : (e._updateOrInsert(t), r = e._upload(t)), e.activeConfig = t, t.config_id || (t.config_id = r), r
                        })).then((function(t) {
                            return e.saving = void 0, u.a.emit("myCharactersChanged"), t
                        })).catch((function(t) {
                            throw e.saving = void 0, u.a.emit("myCharactersChanged"), console.error("Could not save", t), t
                        })), this.saving) : Promise.reject("Not logged in")
                    }
                }, {
                    key: "_updateOrInsert",
                    value: function(e) {
                        if (e.config_id) {
                            var t = this._configs.saves.findIndex((function(t) {
                                return t.config_id === e.config_id
                            }));
                            t >= 0 ? this._configs.saves[t] = e : this._configs.saves.push(e)
                        } else this._configs.saves.push(e)
                    }
                }, {
                    key: "_upload",
                    value: function(e) {
                        var t = e;
                        return e.config_id && e.config_id.then && delete(t = Object.assign({}, e)).config_id, t = JSON.stringify(t), Yt.post("/save_user_config/", t).then((function(t) {
                            console.log(t);
                            var r = t.data;
                            if (r && r.success && r.configs.config_id) return console.log("updating save"), e.config_id = r.configs.config_id, e.meta || (e.meta = {}), e.config_id;
                            throw r && !1 === r.logged_in ? "not_logged_in" : "Failed to upload character save."
                        })).catch((function(e) {
                            throw Reporting.exception("_upload failure", e), e
                        }))
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        if (e.config_id && !e.config_id.then && !this.loadFailed) {
                            var t = e.config_id;
                            if (e) {
                                e.meta.character_name;
                                var r = this._configs.saves.findIndex((function(t) {
                                    return t === e
                                }));
                                return r >= 0 ? this._configs.saves.splice(r, 1) : console.error("Could not find config to remove"), u.a.emit("myCharactersChanged"), this.activeConfig && this.activeConfig === e && (this.activeConfig = void 0, CK.character.savedChanges = !1), Yt.post("/remove_user_config/", JSON.stringify({
                                    user_config_id: t
                                })).then((function(e) {
                                    var r = e.data;
                                    if (!r || !r.success) throw r && !1 === r.logged_in ? "not_logged_in" : "could not delete character.";
                                    console.log("config_id ".concat(t, " deleted"))
                                })).catch((function(e) {
                                    throw Reporting.exception(e, "delete"), e
                                }))
                            }
                        }
                    }
                }, {
                    key: "new",
                    value: function() {
                        CK.loadDefaultCharacter(!0), this.activeConfig = void 0
                    }
                }, {
                    key: "getShareURL",
                    value: function() {
                        if (!this.sharing && this._shareURL) return this._shareURL + "/"
                    }
                }, {
                    key: "share",
                    value: function() {
                        var e = this;
                        return this.sharing || this.activeSaving() || this.loadFailed ? Promise.reject("Could not share") : (this._shareURL = void 0, this.sharing = !0, this.save().then((function(t) {
                            if (!t) throw new Error("Could not share");
                            return e._shareURL = window.location.origin + "/load_config%3D" + t + "/", e.sharing = !1, u.a.emit("myCharactersChanged"), Reporting.characterShared(e.activeConfig), e._shareURL
                        })).catch((function() {
                            throw e._shareURL = "Error", e.sharing = !1, u.a.emit("myCharactersChanged"), new Error("Could not share")
                        })))
                    }
                }, {
                    key: "shareAnonymous",
                    value: function() {
                        var e = this;
                        return this.sharing ? Promise.reject("Could not share") : (this.sharing = !0, this._shareURL = void 0, this.package().then((function(t) {
                            return Yt({
                                method: "post",
                                url: "/save_share/",
                                data: JSON.stringify(t)
                            }).then((function(r) {
                                var n = r.data;
                                if (!n.success || !n.configs.config_id) throw e.sharing = !1, new Error("Could not share. Try logging in.");
                                return e._shareURL = window.location.origin + "/load_share%3D" + n.configs.config_id + "/", e.sharing = !1, u.a.emit("myCharactersChanged"), Reporting.characterSharedAnonymous(t), e._shareURL
                            })).catch((function() {
                                throw e.sharing = !1, u.a.emit("myCharactersChanged"), new Error("Could not share")
                            }))
                        })))
                    }
                }, {
                    key: "unshare",
                    value: function() {}
                }, {
                    key: "rename",
                    value: function(e, t) {
                        var r = this;
                        if (e.config_id && !e.config_id.then && !e.old) return e.meta.character_name = t, u.a.emit("myCharactersChanged"), CK.image.load(e.meta.snapshot).then((function(t) {
                            return e.meta.snapshot = encodeURIComponent(CK.image.toCanvas(t).toDataURL("image/png")), r._upload(e)
                        }))
                    }
                }, {
                    key: "copy",
                    value: function(e, t) {
                        var r = this;
                        return CK.image.load(e.meta.snapshot).then((function(n) {
                            var i = CK.image.toCanvas(n),
                                a = Object.assign({}, e, {
                                    config_id: void 0,
                                    meta: {
                                        character_name: t,
                                        snapshot: encodeURIComponent(i.toDataURL("image/png"))
                                    }
                                });
                            return r._configs.saves.push(a), r._upload(a), u.a.emit("myCharactersChanged"), a
                        }))
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        return e.config_id ? e.old ? console.error("Can not open old configs") : (CK.change(e), void(this.activeConfig = e)) : console.error("No valid config id")
                    }
                }, {
                    key: "openCopy",
                    value: function(e) {
                        var t = Object.assign({}, e, {
                            config_id: void 0,
                            old: void 0,
                            meta: {
                                character_name: e.meta.character_name + " Copy"
                            }
                        });
                        CK.change(t), CK.character.savedChanges = !1
                    }
                }, {
                    key: "package",
                    value: function() {
                        var e = this,
                            t = CK.data.getJson();
                        return vt.configThumb(t).then((function(r) {
                            return t.config_id = e.getActiveID(), t.meta.snapshot = encodeURIComponent(r), t
                        }))
                    }
                }, {
                    key: "packageForCart",
                    value: function() {
                        var e = CK.data.getJson();
                        return vt.configThumb(e, !0).then((function(t) {
                            return e.meta.snapshot = t, Reporting.addedToCart(e), e
                        }))
                    }
                }, {
                    key: "getOrderedConfigs",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.SORTING.alphabetical,
                            r = arguments.length > 1 ? arguments[1] : void 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "saves";
                        if (this.isLoading(n) || this.hasLoaded(n)) {
                            if (this._configs[n] && this._configs[n].length) {
                                var i = this._configs[n].map((function(e) {
                                        return e.meta && e.meta.snapshot && (e.meta.snapshot = decodeURIComponent(e.meta.snapshot)), e
                                    })),
                                    a = l.a.defaultCharacterName.toLowerCase();
                                if ((r = r.toLowerCase()) && r.length > 0 && (i = i.filter((function(e) {
                                        return e.meta && e.meta.character_name ? e.meta.character_name.toLowerCase().includes(r) : a.includes(r)
                                    }))), t === e.SORTING.saveDate) i = i.sort((function(e, t) {
                                    return !e.clientTime && t.clientTime ? 1 : e.clientTime && !t.clientTime ? -1 : e.clientTime && t.clientTime ? parseInt(e.clientTime) < parseInt(t.clientTime) ? 1 : parseInt(e.clientTime) > parseInt(t.clientTime) ? -1 : 0 : 0
                                }));
                                else {
                                    if (t === e.SORTING.createdDate) return i.reverse();
                                    i = i.sort((function(e, t) {
                                        var r = e.meta && e.meta.character_name ? e.meta.character_name.toLowerCase() : a,
                                            n = t.meta && t.meta.character_name ? t.meta.character_name.toLowerCase() : a;
                                        return r === n ? 0 : r > n ? 1 : -1
                                    }))
                                }
                                return i
                            }
                        } else this.loadAll(n)
                    }
                }]) && Xt(t.prototype, r), n && Xt(t, n), e
            }();

        function Qt(e) {
            return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function $t(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function er(e, t) {
            return !t || "object" !== Qt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function tr(e) {
            return (tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rr(e, t) {
            return (rr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        Zt.SORTING = Object.freeze({
            alphabetical: 1,
            saveDate: 2,
            createdDate: 3
        });
        var nr = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = er(this, tr(t).call(this))).Data = l.a.CustomData || Ft, e.Display = l.a.CustomDisplay || st, e.settings = {
                    showMaterialSim: l.a.alwaysShowMaterialSim,
                    camera: void 0,
                    overrideMaterialSim: !1,
                    hiRez: l.a.hiRez
                }, e.data = new e.Data(void 0, e.settings), e.display = new e.Display, e._needsUpdating = !1, e._targetDisplay = void 0, e._changeRequestID = 0, e.savedChanges = !0, e.add(e.display), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && rr(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "change",
                value: function(e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e.settings && n && Object.assign(this.settings, e.settings), this.settings.isUndo = !n, r ? (n && (this.savedChanges = !0), this.data = new this.Data(e, this.settings)) : (this.savedChanges = !1, this.data.change(e, this.settings)), n && (r ? D.a.reset() : D.a.add()), this._changeRequestID++;
                    var i = this.data,
                        a = this._changeRequestID;
                    P.a.getResources(this._getResources(i)).then((function() {
                        a === t._changeRequestID && (i.postGetResources(), t.refresh(), u.a.emit("characterChanged", t))
                    }))
                }
            }, {
                key: "changeSettings",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Object.assign(this.settings, e), this.data.change({}, this.settings), t || this.refresh()
                }
            }, {
                key: "markUnsaved",
                value: function() {
                    this.savedChanges = !1, u.a.emit("characterChanged", this)
                }
            }, {
                key: "refreshForgeSetting",
                value: function() {}
            }, {
                key: "_getResources",
                value: function(e) {
                    return []
                }
            }, {
                key: "setName",
                value: function(e) {
                    e = e.replace(/[^a-zA-Z0-9 ]/g, ""), this.data.meta.character_name !== e && (this.data.meta.character_name = e, u.a.emit("menuChanged", this))
                }
            }, {
                key: "getName",
                value: function() {
                    return this.data.meta.character_name || ""
                }
            }, {
                key: "previewSlider",
                value: function(e, t) {
                    this.previewSliders(function(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }({}, e, t))
                }
            }, {
                key: "previewSliders",
                value: function(e) {
                    var t = {},
                        r = {},
                        n = {},
                        i = l.a.sliders;
                    for (var a in e) {
                        a in i || console.warn("Previewing undefined slider", a);
                        var s = e[a];
                        this.data.sliders[a] = s, Tt.applySlider(a, s, t, r, n, this.data.modded.sliderMods)
                    }
                    this.display.previewSliders(t, r, n), CK.Events.emit("sliderChanged")
                }
            }, {
                key: "previewTransforms",
                value: function(e) {
                    e && (this.data.modded.transforms = this.Data.mergeTransforms(e, this.data.modded.transforms), this.display.requestAnimate(), CK.Events.emit("transformsChanged"))
                }
            }, {
                key: "getSlider",
                value: function(e) {
                    var t = this.data.sliders[e];
                    return void 0 === t && (t = l.a.sliders[e] ? l.a.sliders[e].val : void 0), "string" == typeof t ? parseFloat(t) : t
                }
            }, {
                key: "request",
                value: function(e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this._targetDisplay ? Promise.reject("requesting display before previous finished. Maybe need to support a request queue?") : (this._targetDisplay = {
                        loaded: !1
                    }, new Promise((function(i, a) {
                        P.a.getResources(t._getResources(e)).then((function() {
                            var s = new t.Data;
                            s.change(e, r, !0), s.postGetResources(), s.tempTarget = !0, t._targetDisplay = {
                                loaded: !0,
                                data: s,
                                resolve: i,
                                reject: a,
                                triggered: !1,
                                permanent: n
                            }, t.refresh()
                        }))
                    })))
                }
            }, {
                key: "_finishedRequest",
                value: function(e) {
                    var t = this._targetDisplay,
                        r = t.resolve,
                        n = t.reject,
                        i = t.permanent,
                        a = t.data;
                    this._targetDisplay = void 0, i && (this.data = a), e ? r(a) : n(a), i || this.refresh()
                }
            }, {
                key: "hasTempTarget",
                value: function() {
                    return !!this._targetDisplay
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    this._needsUpdating && (this._needsUpdating = !1, this._targetDisplay ? this._targetDisplay.loaded && !this._targetDisplay.triggered && (this._targetDisplay.triggered = !0, this.display.change(this._targetDisplay.data, (function() {
                        return e._finishedRequest(!1)
                    }), (function() {
                        return e._finishedRequest(!0)
                    }))) : this.display.change(this.data)), this._targetDisplay && !this._targetDisplay.triggered || this.display.update()
                }
            }, {
                key: "postAnimation",
                value: function() {
                    this.display.postAnimation()
                }
            }, {
                key: "animation",
                value: function() {
                    this.display.animation()
                }
            }, {
                key: "preRender",
                value: function() {
                    this.display.preRender()
                }
            }, {
                key: "end",
                value: function() {
                    this.display.end()
                }
            }, {
                key: "refresh",
                value: function() {
                    this._needsUpdating = !0
                }
            }]) && $t(r.prototype, n), i && $t(r, i), t
        }();
        var ir = {
            blockScroll: function() {
                var e = document.querySelectorAll(".View-scrollable"),
                    t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        i.value.classList.add("View-scrollable--blocked")
                    }
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (r) throw n
                    }
                }
            },
            releaseScroll: function() {
                var e = document.querySelectorAll(".View-scrollable--blocked"),
                    t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        i.value.classList.remove("View-scrollable--blocked")
                    }
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (r) throw n
                    }
                }
            }
        };
        var ar = {
            toCanvas: function(e) {
                var t = document.createElement("canvas");
                return t.width = e.naturalWidth, t.height = e.naturalHeight, t.getContext("2d").drawImage(e, 0, 0), t
            },
            load: function(e) {
                var t = new Image;
                return new Promise((function(r, n) {
                    t.src = e, t.onload = function() {
                        return r(t)
                    }, t.onerror = function() {
                        return n("Failed to load image")
                    }
                }))
            }
        };

        function sr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var or = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l.a.progressiveAA && (this.refreshArgs = {
                    sceneChanged: !1
                }, u.a.on("CharacterFinishedChanging", (function() {
                    t.reset()
                })), o.a.register((function() {
                    t.preRender()
                }), "preRender", "Progressive AA"), o.a.register((function() {
                    t.postRender()
                }), "postRender", "Progressive AA"), o.a.register((function() {
                    if (CK.renderManager.canvasAvailable())
                        if (t.iteration < t.maxIterations)
                            if (1 === t.iteration) {
                                var e = t,
                                    r = t.renderTick;
                                setTimeout((function() {
                                    e.renderTick === r && o.a.requestRenderRefresh(t.refreshArgs)
                                }), 200)
                            } else o.a.requestRenderRefresh(t.refreshArgs);
                    else t.iteration == t.maxIterations && u.a.emit("antiAliasingFinished")
                }), "end", "Progressive AA"), this.maxIterations = 32, this.renderTick = 0)
            }
            var t, r, n;
            return t = e, (r = [{
                key: "preRender",
                value: function() {
                    if (CK.renderManager.canvasAvailable()) {
                        if (o.a.SceneChangedSinceRender && (this.iteration = 0, this.renderTick++), CK.renderManager.height !== this.height || CK.renderManager.width !== this.width) {
                            if (this.height = CK.renderManager.height, this.width = CK.renderManager.width, this.iteration = 0, CK.renderManager.renderer.getContext(), this.sceneTarget) {
                                this.sceneTarget.dispose(), this.sceneTarget = null;
                                for (var e = 0; e < 2; ++e) this.accumulationTargets[e].dispose();
                                this.accumulationTargets = null
                            }
                            this.sceneTarget = new RK.WebGLRenderTarget(this.width, this.height), this.sceneTarget.debugName = "sceneTarget", this.accumulationTargets = [];
                            for (var t = 0; t < 2; ++t) {
                                var r = new RK.WebGLRenderTarget(this.width, this.height);
                                r.debugName = "accumulationTargets[" + t.toString() + "]", this.accumulationTargets.push(r)
                            }
                            this.camera = new RK.OrthographicCamera(-1, 1, 1, -1, -1, 1), this.accumulationScene = new RK.Scene;
                            var n = new RK.PlaneGeometry(2, 2, 1, 1);
                            this.accumulateMaterial = new SK.TextureBlend({
                                color: new RK.Vec3(1, 0, 0),
                                textureSize: new RK.Vec2(this.width, this.height),
                                opacity: 1,
                                blending: RK.NoBlending
                            });
                            var i = new RK.Mesh(n, this.accumulateMaterial);
                            this.accumulationScene.add(i), this.presentScene = new RK.Scene, n = new RK.PlaneGeometry(2, 2, 1, 1), this.presentMaterial = new SK.BasicTextured({
                                color: new RK.Vec3(1, 0, 0),
                                textureSize: new RK.Vec2(this.width, this.height),
                                opacity: 1,
                                blending: RK.NoBlending
                            }), i = new RK.Mesh(n, this.presentMaterial), this.presentScene.add(i)
                        }
                        var a = 0;
                        this.iteration > 0 ? (CK.renderManager.setRenderTarget(this.sceneTarget), a = this.iteration, this.refinementFrame = !0) : (CK.renderManager.setRenderTarget(null), a = 1, this.refinementFrame = !1);
                        var s = 1 === a ? 0 : pe.HaltonSequence(a, 2) - .5,
                            l = 1 === a ? 0 : pe.HaltonSequence(a, 3) - .5;
                        CK.orbitCamera.resize(CK.renderManager.width, CK.renderManager.height, s, l)
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.iteration = 0
                }
            }, {
                key: "postRender",
                value: function() {
                    if (this.accumulationTargets && CK.renderManager.canvasAvailable()) {
                        if (CK.renderManager.setRenderTarget(null), this.refinementFrame) {
                            var e = this.accumulationTargets[(this.iteration + 0) % 2],
                                t = this.accumulationTargets[(this.iteration + 1) % 2];
                            this.accumulateMaterial.setUniform("opacity", 1 / Math.max(this.iteration, 1)), this.accumulateMaterial.setUniform("srcTexture", this.sceneTarget.texture), this.accumulateMaterial.setUniform("dstTexture", e.texture), CK.renderManager.renderer.autoClear = !0, CK.renderManager.renderer.render(this.accumulationScene, this.camera, t), this.presentMaterial.setUniform("opacity", 1), this.presentMaterial.setUniform("texture", t.texture), CK.renderManager.renderer.autoClear = !0, CK.renderManager.renderer.render(this.presentScene, this.camera, null)
                        }
                        this.iteration += 1
                    }
                }
            }]) && sr(t.prototype, r), n && sr(t, n), e
        }();

        function lr(e) {
            return (lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ur(e, t) {
            return !t || "object" !== lr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function cr(e) {
            return (cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function hr(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && dr(e, t)
        }

        function dr(e, t) {
            return (dr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function fr(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function pr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function mr(e, t, r) {
            return t && pr(e.prototype, t), r && pr(e, r), e
        }
        var vr = function() {
                function e() {
                    var t = this;
                    fr(this, e), this.size = 2048, this.irradianceTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.subsurfaceTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.LinearFilter,
                        magFilter: RK.LinearFilter,
                        format: RK.RGBAFormat
                    }), this.clearRegion = new se(new RK.Vec4(0, 0, 0, 0)), this.firstRender = !1, this.passes = 1, this.needsRefresh = !0, this.camera = new RK.PerspectiveCamera(45, 1, .5, 2), this.tempTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.tempTarget2 = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.subsurfaceDiffuse = new gr(this.size, this.size), this.byteToFloatBuffer = new yr, this.redTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.greenTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.blueTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat
                    }), this.floatBuffersToByte4 = new br, this.mixChannels = new wr, this.uvStretchTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.Dilate = new kr(this.size, this.size), this.uvSeamTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                        minFilter: RK.NearestFilter,
                        magFilter: RK.NearestFilter,
                        format: RK.RGBAFormat,
                        depthBuffer: !0,
                        stencilBuffer: !1
                    }), this.uvSeamLayer = 4, this.sssMagnitude = new Sr, this.uint16UnormMaxMip = new Cr, this.stage = 0, this.iteration = 0, u.a.on("CharacterFinishedChanging", (function() {
                        t.needsRefresh = !0
                    })), u.a.on("occlusionChanged", (function() {
                        t.needsRefresh = !0
                    })), u.a.on("lightChanged", (function() {
                        t.needsRefresh = !0
                    })), u.a.on("shaderChanged", (function() {
                        t.needsRefresh = !0
                    })), u.a.on("sssChanged", (function() {
                        t.needsRefresh = !0
                    })), o.a.register((function() {
                        t.render()
                    }), "preRender", "Surface Bake"), o.a.register((function() {
                        t.stage < 7 && o.a.requestRenderRefresh()
                    }), "end", "Surface Bake")
                }
                return mr(e, [{
                    key: "refresh",
                    value: function() {
                        var e = void 0 === this.uvPosScaleBySlot;
                        e && (this.orderedSlots = {}, l.a.vertexOcclusion && (C.a.slots.volumeMesh0 = {
                            bake_size: 2048
                        }, C.a.slots.volumeMesh1 = {
                            bake_size: 2048
                        }, C.a.slots.volumeMesh2 = {
                            bake_size: 2048
                        }), this.uvPosScaleBySlot = Ge.generate()), CK.renderManager.renderer.setClearColor(new RK.Color(0), 0), CK.renderManager.renderer.clearTarget(this.subsurfaceTarget), this.meshes = [];
                        var t = CK.display.getMeshes();
                        CK.display.getSeamFinMeshes();
                        var r = [];
                        for (var n in t)
                            if (n in this.uvPosScaleBySlot) {
                                var i = t[n];
                                r.push(i)
                            }
                        for (var a in t)
                            if (a in this.uvPosScaleBySlot) {
                                var s = t[a];
                                this.meshes.push(s);
                                var o = this.uvPosScaleBySlot[a];
                                void 0 !== s.material.subsurface && (s.material.subsurface = l.a.subsurface);
                                var u = s.lightMaterial;
                                if (void 0 !== u && !a.startsWith("voxel") || e || (this.clearRegion.material.setUniform("uvPosScl", o), this.clearRegion.render(CK.renderManager.renderer, this.irradianceTarget), this.clearRegion.render(CK.renderManager.renderer, this.subsurfaceTarget)), void 0 === u) {
                                    s.layers.enable(1);
                                    var c = I.getOptionsFromGeo(s.geometry, s.part);
                                    c.options.depthTest = !1, u = s.lightMaterial = new SK.LightMaterial(c)
                                }
                                u.ckReverseWinding = a.endsWith("L"), u.setUniform("flipNormal", s.material.ckReverseWinding ? 1 : 0), u.setUniform("uvPosScl", o), s.material.setSubsurfaceAtlas(o, this.subsurfaceTarget.texture);
                                var h = s.uvStretchMaterial;
                                if (void 0 === h) {
                                    var d = I.getOptionsFromGeo(s.geometry, s.part);
                                    d.options.depthTest = !1, h = s.uvStretchMaterial = new SK.UvStretchMaterial(d)
                                }
                                h.ckReverseWinding = a.endsWith("L"), h.setUniform("flipNormal", s.material.ckReverseWinding ? 1 : 0), h.setUniform("uvPosScl", o);
                                var f = s.uvSeamMaterial;
                                if (void 0 === f) {
                                    var p = I.getOptionsFromGeo(s.geometry, s.part);
                                    p.options.depthTest = !0, p.options.depthWrite = !0, p.options.uvSeam = !1, f = s.uvSeamMaterial = new SK.UvSeamMaterial(p)
                                }
                                for (var m in f.setUniform("uvPosScl", o), f.setUniform("uv_seamPosScl", o), f.setUniform("imageSize", new RK.Vec2(this.size, this.size)), s.seamFinMeshes || []) {
                                    var v = s.seamFinMeshes[m],
                                        g = v.uvSeamMaterial;
                                    if (void 0 === g) {
                                        var y = I.getOptionsFromGeo(v.geometry, v.part);
                                        y.options.depthTest = !0, y.options.depthWrite = !0, y.options.uvSeam = !0, g = v.uvSeamMaterial = new SK.UvSeamMaterial(y)
                                    }
                                    var b = this.uvPosScaleBySlot[v.seamFin.originalSlot];
                                    g.setUniform("uvPosScl", b), g.setUniform("uv_seamPosScl", o), g.setUniform("imageSize", new RK.Vec2(this.size, this.size))
                                }
                            } else l.a.debug && console.warn("No light bake for slot ", a, " because no place for it was found ");
                        this.stage = 0, this.needsRefresh = !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (void 0 !== C.a.slots)
                            if (this.needsRefresh) this.refresh();
                            else switch (this.stage) {
                                case 0:
                                    this.renderRadiance(), this.stage = 1, this.sssAtlasTexture = null;
                                    break;
                                case 1:
                                    if (!this.sssAtlasTexture)
                                        for (var e in this.sssAtlasTexture = null, this.meshes) {
                                            var t = this.meshes[e];
                                            if (this.sssAtlasTexture = t.material.sssAtlasMap, this.sssAtlasTexture) break
                                        }
                                    this.sssAtlasTexture && (this.renderUvSeam(), this.stage = 2);
                                    break;
                                case 2:
                                    this.getSssMax(), this.stage = 3;
                                    break;
                                case 3:
                                    this.renderUvStretch(), this.stage = 4;
                                    break;
                                case 4:
                                    this.getUvStretchMax(), this.stage = 5;
                                    break;
                                case 5:
                                    this.splitChannels(), this.iterationCount = this.ssMax * this.stretch99, this.iteration = 0, this.iteration < this.iterationCount ? this.stage = 6 : this.stage = 7;
                                    break;
                                case 6:
                                    this.renderSubsurface(), this.iteration++ > this.iterationCount && (this.stage = 7)
                            }
                    }
                }, {
                    key: "renderRadiance",
                    value: function() {
                        for (var e in this.meshes) {
                            var t = this.meshes[e];
                            for (var r in t.lightMaterial.colorIdMorphs = t.material.colorIdMorphs, t.lightMaterial.colorAtlas = t.material.colorAtlas, t.lightMaterial.occlusion = t.material.occlusion, t.lightMaterial.normalMap = t.material.normalMap, t.lightMaterial.normalMap2 = t.material.normalMap2, t.lightMaterial.physicalAtlas = t.material.physicalAtlas, t.lightMaterial.lights = t.material.lights, t.lightMaterial.preBakedOcclusion = t.material.preBakedOcclusion, t.material.blindlySetUniforms) t.lightMaterial.setUniform(r, t.material.blindlySetUniforms[r]);
                            for (var r in t.material.uniforms) t.lightMaterial.setUniform(r, t.material.uniforms[r].value);
                            t.prevMaterial = t.material, t.customDepthMaterial.ckReverseWinding = t.material.ckReverseWinding, t.material = t.lightMaterial
                        }
                        for (var n in CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), CK.renderManager.renderer.clearTarget(this.subsurfaceTarget, !0, !1, !1), CK.renderManager.renderer.shadowMap.needsUpdate = !0, CK.renderManager.renderer.autoClear = !1, CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), CK.renderManager.renderer.clearTarget(this.irradianceTarget, !0, !1, !1), this.camera.layers.set(0), CK.renderManager.renderer.render(CK.scene, this.camera, this.irradianceTarget, !1), this.meshes) {
                            var i = this.meshes[n];
                            i.material = i.prevMaterial, i.customDepthMaterial.ckReverseWinding = i.material.ckReverseWinding
                        }
                    }
                }, {
                    key: "renderUvStretch",
                    value: function() {
                        for (var e in this.meshes) {
                            var t = this.meshes[e];
                            t.uvStretchMaterial.colorIdMorphs = t.material.colorIdMorphs, t.uvStretchMaterial.uniforms = t.material.uniforms, t.prevMaterial = t.material, t.customDepthMaterial.ckReverseWinding = t.material.ckReverseWinding, t.material = t.uvStretchMaterial
                        }
                        for (var r in CK.renderManager.renderer.shadowMap.needsUpdate = !0, CK.renderManager.renderer.autoClear = !1, CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), CK.renderManager.renderer.clearTarget(this.uvStretchTarget, !0, !1, !1), this.camera.layers.set(1), CK.renderManager.renderer.render(CK.scene, this.camera, this.uvStretchTarget, !1), this.meshes) {
                            var n = this.meshes[r];
                            n.material = n.prevMaterial, n.customDepthMaterial.ckReverseWinding = n.material.ckReverseWinding
                        }
                    }
                }, {
                    key: "renderUvSeam",
                    value: function() {
                        for (var e in this.meshes) {
                            var t = this.meshes[e];
                            for (var r in t.prevMaterial = t.material, t.material = t.uvSeamMaterial, t.seamFinMeshes) {
                                var n = t.seamFinMeshes[r];
                                n.prevMaterial = n.material, n.material = n.uvSeamMaterial
                            }
                        }
                        for (var i in this.camera.layers.set(1), this.camera.layers.enable(7), this.camera.layers.enable(8), CK.renderManager.renderer.render(CK.scene, this.camera, this.uvSeamTarget, !0), this.meshes) {
                            var a = this.meshes[i];
                            for (var s in a.material = a.prevMaterial, a.seamFinMeshes) {
                                var o = a.seamFinMeshes[s];
                                o.material = o.prevMaterial
                            }
                        }
                    }
                }, {
                    key: "getSssMax",
                    value: function() {
                        var e = new RK.WebGLRenderTarget(this.size, this.size, {
                            minFilter: RK.NearestFilter,
                            magFilter: RK.NearestFilter,
                            format: RK.RGBAFormat
                        });
                        this.sssMagnitude.render(CK.renderManager.renderer, e, this.sssAtlasTexture);
                        for (var t = this.size; t > 1;) {
                            t /= 2;
                            var r = new RK.WebGLRenderTarget(t, t, {
                                minFilter: RK.NearestFilter,
                                magFilter: RK.NearestFilter,
                                format: RK.RGBAFormat
                            });
                            this.uint16UnormMaxMip.render(CK.renderManager.renderer, r, e, t, t), e.dispose(), e = r
                        }
                        var n = new ArrayBuffer(4),
                            i = new Uint8Array(n);
                        CK.renderManager.renderer.readRenderTargetPixels(e, 0, 0, 1, 1, i);
                        var a = i[0],
                            s = i[1];
                        this.ssMax = (256 * s + a) / 65535, this.ssScale = 1 / this.ssMax, e.dispose()
                    }
                }, {
                    key: "getUvStretchMax",
                    value: function() {
                        var e = this.size * this.size,
                            t = new ArrayBuffer(4 * e),
                            r = new Uint8Array(t);
                        CK.renderManager.renderer.readRenderTargetPixels(this.uvStretchTarget, 0, 0, this.size, this.size, r);
                        for (var n = new Uint16Array(t), i = 0, a = 0; a < n.length; a++) {
                            0 !== n[a] && ++i
                        }
                        var s, o, l = new Float32Array(i),
                            u = 0;
                        for (a = 0; a < n.length; a++) {
                            var c = n[a];
                            if (0 !== c) {
                                var h = (o = void 0, o = ((s = c) >> 10 & 31) - 15, (s >> 15 ? -1 : 1) * (1 + (1023 & s) / 1024) * Math.pow(2, o));
                                l[u++] = h
                            }
                        }
                        l.sort();
                        var d = Math.floor(.99 * (i - 1));
                        this.stretch99 = l[d], this.stretchScale = 1 / this.stretch99
                    }
                }, {
                    key: "splitChannels",
                    value: function() {
                        this.byteToFloatBuffer.render(CK.renderManager.renderer, this.redTarget, this.irradianceTarget, new RK.Vec2(this.size, this.size), new RK.Vec4(1, 0, 0, 0)), this.byteToFloatBuffer.render(CK.renderManager.renderer, this.greenTarget, this.irradianceTarget, new RK.Vec2(this.size, this.size), new RK.Vec4(0, 1, 0, 0)), this.byteToFloatBuffer.render(CK.renderManager.renderer, this.blueTarget, this.irradianceTarget, new RK.Vec2(this.size, this.size), new RK.Vec4(0, 0, 1, 0))
                    }
                }, {
                    key: "renderSubsurface",
                    value: function() {
                        var e = new RK.Vec3(1, 0, 0),
                            t = new RK.Vec3(0, 1, 0),
                            r = new RK.Vec3(0, 0, 1),
                            n = new RK.Vec2(0, 1 / this.size),
                            i = new RK.Vec2(1 / this.size, 0),
                            a = new RK.Vec2(this.size, this.size);
                        this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.tempTarget, this.redTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, n, a, e, this.stretchScale, this.ssScale), this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.redTarget, this.tempTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, i, a, e, this.stretchScale, this.ssScale), this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.tempTarget, this.greenTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, n, a, t, this.stretchScale, this.ssScale), this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.greenTarget, this.tempTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, i, a, t, this.stretchScale, this.ssScale), this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.tempTarget, this.blueTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, n, a, r, this.stretchScale, this.ssScale), this.subsurfaceDiffuse.render(CK.renderManager.renderer, this.blueTarget, this.tempTarget, this.uvStretchTarget, this.sssAtlasTexture, this.uvSeamTarget, i, a, r, this.stretchScale, this.ssScale), this.floatBuffersToByte4.render(CK.renderManager.renderer, this.tempTarget2, this.redTarget, new RK.Vec4(1, 0, 0, 0), this.greenTarget, new RK.Vec4(0, 1, 0, 0), this.blueTarget, new RK.Vec4(0, 0, 1, 0), new RK.Vec2(this.size, this.size)), this.Dilate.render(CK.renderManager.renderer, this.tempTarget, this.tempTarget2), this.Dilate.render(CK.renderManager.renderer, this.tempTarget2, this.tempTarget), this.mixChannels.render(CK.renderManager.renderer, this.subsurfaceTarget, this.tempTarget.texture, this.sssAtlasTexture)
                    }
                }]), e
            }(),
            gr = function(e) {
                function t() {
                    var e;
                    return fr(this, t), (e = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    uniform sampler2D readTexture;\n                    uniform sampler2D stretchTexture;\n                    uniform sampler2D sssTexture;\n                    uniform sampler2D uvLookupTexture;\n                    uniform vec2 uvOffset;\n                    uniform vec2 imageSize;\n                    uniform float stretchScale;\n                    uniform float sssScale;\n                    uniform vec3 channel;\n                ",
                        fragment: "\n                    vec2 uv = vUv;\n\n                    // Get the sss parameters.\n                    vec4 diffuseRgbAndScale = texture2D(sssTexture, uv);\n                    vec3 diffuseRgb = diffuseRgbAndScale.rgb;\n                    float diffuseScale = diffuseRgbAndScale.a;\n                    float diffuseRate = dot(diffuseRgb, channel);\n                    diffuseRate *= diffuseScale;\n                    diffuseRate *= sssScale;\n\n                    // Get the local uv scale.\n                    vec4 stretchPacked = texture2D(stretchTexture, uv);\n                    vec2 uvStretch = vec2(\n                        UnpackFloat16(stretchPacked.rg),\n                        UnpackFloat16(stretchPacked.ba));\n                    float stretch = dot(uvStretch, normalize(uvOffset));\n                    stretch *= stretchScale;\n                    stretch = clamp(stretch, 0.0, 1.0);\n\n                    // Scale the diffusion rate by the local uv scale to ensure a consistent scatter size.\n                    float stretchedDiffuseRate = diffuseRate * stretch;\n\n                    float weights[3];\n                    weights[0] = mix(0.0, 0.25, stretchedDiffuseRate);\n                    weights[1] = mix(0.5, 1.0, 1.0 - stretchedDiffuseRate);\n                    weights[2] = mix(0.0, 0.25, stretchedDiffuseRate);\n\n                    float sampleSum = 0.0;\n                    float weightSum = 0.0;\n                    for (int i = -1; i < 2; ++i)\n                    {\n                        vec2 texelUv = vUv + uvOffset * float(i);\n                        vec2 sampleUv = texelUv;\n                        vec4 uvLookupBytes = texture2D( uvLookupTexture, texelUv );\n                        vec2 texelIndex = vec2(UnpackUint16(uvLookupBytes.xy), UnpackUint16(uvLookupBytes.zw));\n                        sampleUv = (texelIndex + vec2(0.5, 0.5)) / imageSize;\n                        vec4 sampleBytes = texture2D( readTexture, sampleUv );\n                        float sample = UnpackFractVec4(sampleBytes);\n                        float alpha = sampleBytes.a;\n                        float weight = weights[i + 1] * alpha;\n                        sampleSum += sample * weight;\n                        weightSum += weight;\n                    }\n                    float r = sampleSum / weightSum;\n                    float a = texture2D( readTexture, vUv ).a;\n                    r *= a;\n\n                    gl_FragColor = PackFractVec4(r);\n                    gl_FragColor.a = a;\n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            },
                            stretchTexture: {
                                type: "t",
                                value: null
                            },
                            stretchScale: {
                                type: "f"
                            },
                            sssTexture: {
                                type: "t",
                                value: null
                            },
                            uvLookupTexture: {
                                type: "t",
                                value: null
                            },
                            sssScale: {
                                type: "f"
                            },
                            uvOffset: {
                                type: "v2"
                            },
                            imageSize: {
                                type: "v2"
                            },
                            channel: {
                                type: "v3"
                            }
                        },
                        transparent: !1
                    }, "SubsurfaceDiffuse")), e
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r, n, i, a, s, o, l, u, c) {
                        this.material.uniforms.readTexture.value = r.texture, this.material.uniforms.stretchTexture.value = n.texture, this.material.uniforms.stretchScale.value = u, this.material.uniforms.sssTexture.value = i, this.material.uniforms.sssScale.value = c, this.material.uniforms.uvLookupTexture.value = a.texture, this.material.uniforms.uvOffset.value = s, this.material.uniforms.imageSize.value = o, this.material.uniforms.channel.value = l, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            yr = function(e) {
                function t() {
                    var e;
                    return fr(this, t), (e = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    uniform sampler2D readTexture;\n                    uniform vec4 channelMask;\n                    uniform vec2 imageSize;\n                ",
                        fragment: "\n                    vec2 uv = vUv;\n                    vec4 rgba = texture2D(readTexture, uv);\n                    float l = dot(rgba, channelMask);\n                    gl_FragColor = PackFractVec4(l);\n                    gl_FragColor.a = rgba.a;\n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            },
                            channelMask: {
                                type: "v4"
                            },
                            imageSize: {
                                type: "v2"
                            }
                        },
                        transparent: !1
                    }, "ByteToFloatBuffer")), e
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r, n, i) {
                        this.material.uniforms.readTexture.value = r.texture, this.material.uniforms.imageSize.value = n, this.material.uniforms.channelMask.value = i, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            br = function(e) {
                function t() {
                    var e;
                    return fr(this, t), (e = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    uniform sampler2D texture0;\n                    uniform vec4 mask0;\n                    uniform sampler2D texture1;\n                    uniform vec4 mask1;\n                    uniform sampler2D texture2;\n                    uniform vec4 mask2;\n                    uniform vec2 imageSize;\n                ",
                        fragment: "\n                    vec2 uv = vUv;\n                    vec4 bytes0 = texture2D(texture0, uv);\n                    vec4 bytes1 = texture2D(texture1, uv);\n                    vec4 bytes2 = texture2D(texture2, uv);\n                    vec4 rgba \n                        = UnpackFractVec4(bytes0) * mask0\n                        + UnpackFractVec4(bytes1) * mask1\n                        + UnpackFractVec4(bytes2) * mask2;\n                    rgba.a = bytes0.a;\n                    gl_FragColor = rgba;\n                "
                    }, {
                        uniforms: {
                            texture0: {
                                type: "t",
                                value: null
                            },
                            mask0: {
                                type: "v4"
                            },
                            texture1: {
                                type: "t",
                                value: null
                            },
                            mask1: {
                                type: "v4"
                            },
                            texture2: {
                                type: "t",
                                value: null
                            },
                            mask2: {
                                type: "v4"
                            },
                            imageSize: {
                                type: "v2"
                            }
                        },
                        transparent: !1
                    }, "FloatBuffersToByte4")), e
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r, n, i, a, s, o, l) {
                        this.material.uniforms.texture0.value = r.texture, this.material.uniforms.mask0.value = n, this.material.uniforms.texture1.value = i.texture, this.material.uniforms.mask1.value = a, this.material.uniforms.texture2.value = s.texture, this.material.uniforms.mask2.value = o, this.material.uniforms.imageSize.value = l, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            kr = function(e) {
                function t(e, r) {
                    var n;
                    return fr(this, t), (n = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    vec2 pixelSize = vec2(".concat(1 / e, ", ").concat(1 / r, ");\n                    uniform sampler2D readTexture;\n                "),
                        fragment: "\n                    vec4 pixel = texture2D( readTexture, vUv );\n                    if (pixel.a <= 0.0)\n                    {\n                        vec4 sum = vec4(0);\n                        for (int y = -1; y < 2; ++y)\n                        {\n                            for (int x = -1; x < 2; ++x)\n                            {\n                                if (x == 0 && y == 0)\n                                {\n                                    continue;\n                                }\n                                vec2 uvOffset = pixelSize * vec2(float(x), float(y));\n                                vec4 neighbour = texture2D( readTexture, vUv + uvOffset );\n                                sum += neighbour;                                \n                            }\n                        }\n                        if (sum.a > 0.0)\n                        {\n                            pixel = sum / sum.a;\n                        }\n                    }\n                    gl_FragColor = pixel;\n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            }
                        },
                        transparent: !1
                    }, "SubsurfaceDilate")), n
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r) {
                        this.uniforms.readTexture.value = r.texture, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            wr = function(e) {
                function t() {
                    var e;
                    return fr(this, t), (e = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                uniform sampler2D textureA;\n                uniform sampler2D textureB;\n                uniform vec4 maskA;\n                uniform vec4 maskB;\n                ",
                        fragment: "\n                    vec4 pixelA = texture2D( textureA, vUv );\n                    vec4 pixelB = texture2D( textureB, vUv );\n                    vec4 mixed;\n                    mixed.rgb = pixelA.rgb;\n                    float maxB = max(pixelB.r, max(pixelB.g, pixelB.b)) * pixelB.a;\n                    if (maxB > 0.0)\n                    {\n                        mixed.a = 1.0;\n                    }\n                    else\n                    {\n                        mixed.a = 0.0;\n                    }\n                    gl_FragColor = mixed;\n                "
                    }, {
                        uniforms: {
                            textureA: {
                                type: "t",
                                value: null
                            },
                            textureB: {
                                type: "t",
                                value: null
                            }
                        },
                        transparent: !1
                    }, "MixChannels")), e
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r, n) {
                        this.uniforms.textureA.value = r, this.uniforms.textureB.value = n, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            Sr = function(e) {
                function t(e, r) {
                    var n;
                    return fr(this, t), (n = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    uniform sampler2D readTexture;\n                ",
                        fragment: "\n                    vec4 pixel = texture2D( readTexture, vUv );\n                    highp float maxChannel = max(pixel.r, max(pixel.g, pixel.b)) * pixel.a;\n                    vec2 packedValue = PackUint16Unorm(maxChannel);\n                    gl_FragColor = vec4(packedValue, 0, 0);\n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            }
                        },
                        transparent: !1
                    }, "SssMagnitude")), n
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r) {
                        this.uniforms.readTexture.value = r, CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }(),
            Cr = function(e) {
                function t(e, r) {
                    var n;
                    return fr(this, t), (n = ur(this, cr(t).call(this))).setMaterial(new SK.Custom({
                        depthWrite: !1,
                        uv: !0,
                        blending: RK.NormalBlending,
                        vertex: "\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                ",
                        fragmentPars: "\n                    uniform sampler2D readTexture;\n                    uniform vec2 imageSize;\n                ",
                        fragment: "\n                    vec2 pixelSize = vec2(1.0, 1.0) / imageSize;\n                    highp float maxValue = 0.0;\n                    for (int i = 0; i < 2; ++i)\n                    {\n                        for (int j = 0; j < 2; ++j)\n                        {\n                            vec2 sampleUv = vUv;\n                            sampleUv.x += (float(i) * 0.5 - 0.25) * pixelSize.x;\n                            sampleUv.y += (float(j) * 0.5 - 0.25) * pixelSize.y;\n                            vec4 packedSample = texture2D(readTexture, sampleUv);\n                            float sample = UnpackUint16Unorm(packedSample.xy);\n                            maxValue = max(sample, maxValue);\n                        }\n                    }\n                    vec2 packedValue = PackUint16Unorm(maxValue);\n                    gl_FragColor = vec4(packedValue, 0, 1.0);\n                "
                    }, {
                        uniforms: {
                            readTexture: {
                                type: "t",
                                value: null
                            },
                            imageSize: {
                                type: "v2",
                                value: new RK.Vec2(0, 0)
                            }
                        },
                        transparent: !1
                    }, "UInt16UnormMaxMip")), n
                }
                return hr(t, SK.EffectPass), mr(t, [{
                    key: "render",
                    value: function(e, t, r, n, i) {
                        this.uniforms.readTexture.value = r.texture, this.uniforms.imageSize.value = new RK.Vec2(n, i), CK.renderManager.renderer.autoClear = !1, e.render(this.scene, this.camera, t, !1)
                    }
                }]), t
            }();

        function _r(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Rr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Tr = function() {
            function e(t, r) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                try {
                    this.renderer = new RK.WebGLRenderer({
                        antialias: !0,
                        alpha: !0,
                        webgl2: l.a.webgl2
                    }), this.renderer.sortObjects = !1, this.renderer.setClearColor(0, 0), this.renderer.autoClear = !0, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = RK.PCFSoftShadowMap, this.renderer.shadowMap.cullFace = RK.CullFaceBack, this.renderer.shadowMap.soft = !0, this.renderer.shadowMap.autoUpdate = !1, this.resize(t, r), l.a.subsurface == l.a.SubsurfaceMode.TextureSpaceDiffusion && l.a.color && (this.subsurfaceBake = new vr), l.a.progressiveAA && (this.progressiveAA = new or), u.a.on("CharacterFinishedChanging", (function() {
                        return n.requestShadowUpdate()
                    }))
                } catch (e) {
                    Reporting.exception("Failed to create RK.WebGLRenderer", e)
                }
            }
            var t, r, n;
            return t = e, (r = [{
                key: "initSchemeThumbs",
                value: function() {
                    this.schemeThumbs || (this.schemeThumbs = new S)
                }
            }, {
                key: "setSceneAndCamera",
                value: function(e, t) {
                    this.scene = e, this.camera = t
                }
            }, {
                key: "setCamera",
                value: function(e) {
                    this.camera = e
                }
            }, {
                key: "setRenderTarget",
                value: function(e) {
                    this.renderTarget = e
                }
            }, {
                key: "getExtension",
                value: function(e) {
                    return this.renderer.extensions.get(e)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    var r;
                    this.width = e, this.height = t, (r = this.renderer).setSize.apply(r, _r(p.a.retinaAdjust(this.width, this.height))), o.a.requestRenderRefresh()
                }
            }, {
                key: "requestShadowUpdate",
                value: function() {
                    this.renderer.shadowMap.needsUpdate = !0, CK.display && CK.display.sunOcclusion && (CK.display.sunOcclusion.needsRefresh = !0)
                }
            }, {
                key: "renderMain",
                value: function() {
                    this.checkForContextLoss(), this.canvasAvailable() && (this.renderer.autoClear = !0, this.renderer.setClearColor(0, 0), this.renderer.render(this.scene, this.camera, this.renderTarget))
                }
            }, {
                key: "canvasAvailable",
                value: function() {
                    return !!this.renderer.domElement && !!this.renderer.domElement.width && !!this.renderer.domElement.height
                }
            }, {
                key: "checkForContextLoss",
                value: function() {
                    if (this.renderer.getIsContextLost()) {
                        if (!this._isContextLost) {
                            var e = this;
                            this._contextLostTimeout = setTimeout((function() {
                                e._contextLostTimeout = void 0, e.renderer.getIsContextLost() && (CK.criticalErrorMessage = "NoGL", e.renderer._isContextLost = !0)
                            }), 1e3)
                        }
                    } else this.renderer._isContextLost && (CK.criticalErrorMessage = void 0, this._isContextLost = !1), this._contextLostTimeout && (clearTimeout(this._contextLostTimeout), this._contextLostTimeout = void 0)
                }
            }]) && Rr(t.prototype, r), n && Rr(t, n), e
        }();

        function Mr(e) {
            return (Mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function xr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Pr(e, t) {
            return !t || "object" !== Mr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Or(e) {
            return (Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Kr(e, t) {
            return (Kr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ar = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Pr(this, Or(t).call(this))).environment = "", e.name = "background", e.cubeTextureLoader = new RK.CubeTextureLoader, e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Kr(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "updateValues",
                value: function(e, t, r) {
                    this.mesh && (this.mesh.material.setUniform("saturationScale", e), this.mesh.material.setUniform("fog", t), this.mesh.material.setUniform("contrast", r))
                }
            }, {
                key: "change",
                value: function(e) {
                    var t = this;
                    "all" !== e && "new" !== e && this.environment !== e ? (this.environment = e, this.cubeTextureLoader.load(O.a.getEnvCubePaths(e), (function(e) {
                        e.format = RK.RGBFormat, t.makeCubeIfNeeded(), t.mesh.material.setUniform("tCube", e), o.a.requestAnimationRefresh()
                    }))) : "" === this.environment && (this.environment = "fantasy")
                }
            }, {
                key: "makeCubeIfNeeded",
                value: function() {
                    if (void 0 === this.mesh) {
                        var e = new SK.Cube({
                            fog: !0,
                            saturationScale: !0,
                            contrast: !0
                        });
                        this.mesh = new RK.Mesh(new RK.BoxGeometry(100, 100, 100, 7, 7, 7), e), this.mesh.name = "skyMesh", this.add(this.mesh)
                    }
                }
            }]) && xr(r.prototype, n), i && xr(r, i), t
        }();

        function Er(e) {
            return (Er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Br(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Ir(e, t) {
            return !t || "object" !== Er(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Dr(e) {
            return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Fr(e, t) {
            return (Fr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ur = function(e) {
            function t() {
                var e;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e = Ir(this, Dr(t).call(this)), !l.a.rtShadows && !l.a.sunOcclusion && l.a.groundPlane) return Ir(e);
                var r = new RK.PlaneGeometry(15, 15),
                    n = l.a.groundColor ? new RK.Vec4(1, 0, 0, 1) : void 0,
                    i = new SK.ShadowReceiver({
                        shadowStrength: !0,
                        groundColor: n,
                        falloffStart: 6,
                        falloffEnd: 7.5
                    });
                return e.mesh = new RK.Mesh(r, i), e.add(e.mesh), e.position.y = -.03, e.rotation.x = -Math.PI / 2, e.receiveShadow = !0, e.castShadow = !1, e.name = "groundMesh", e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Fr(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "updateColor",
                value: function(e, t, r) {
                    this.mesh && this.mesh.material && (this.mesh.material.setUniform("groundColor", e), this.mesh.material.setUniform("shadowStrength", t), this.mesh.material.setUniform("shadowColor", r))
                }
            }]) && Br(r.prototype, n), i && Br(r, i), t
        }();

        function jr(e) {
            return (jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function zr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Nr(e, t) {
            return !t || "object" !== jr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Lr(e) {
            return (Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Vr(e, t) {
            return (Vr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Gr = function(e) {
            function t() {
                var e;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Nr(this, Lr(t).call(this))).name = "lighting", e.sunlight = e.getDefaultSunlight(), e.add(e.sunlight), e.ambient = new RK.AmbientLight, e.ambient.intensity = 0, e.add(e.ambient);
                var r = new RK.EnvironmentLight(new RK.Color(1, 1, 1), .69);
                return r.rotateY = 5.2, e.envLight = r, e.add(e.envLight), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vr(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "getDefaultSunlight",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a.materialSims.default.lighting.sunlight,
                        t = new RK.DirectionalLight;
                    return t.color.copy(e.color), t.intensity = e.intensity || .7, t.position.copy(e.position || new RK.Vec3(9, 10, 2)), t.layers.set(0), t.target.position.set(0, 2, 0), t.castShadow = l.a.rtShadows || l.a.sunOcclusion, t.shadow.camera.near = 9, t.shadow.camera.far = 25, t.shadow.camera.left = -4, t.shadow.camera.right = 4, t.shadow.camera.top = 4, t.shadow.camera.bottom = -4, t.shadow.bias = -.007, t.shadow.mapSize = new RK.Vec2(l.a.shadowMapSize, l.a.shadowMapSize), t.name = "sunlight", t
                }
            }, {
                key: "setEnvMap",
                value: function(e) {
                    var t = this;
                    if (this.envLight) {
                        var r = O.a.getSphereEnvMap(e);
                        if (this.envLight.url !== r) {
                            var n = function(e) {
                                t.envLight.map = e, t.envLight.mapWidth = e ? e.width : 0
                            };
                            this.envLight.url = r, this.envLight.mapName = e, P.a.loaded(r) ? n(P.a.getNow(r)) : P.a.getResource(r, "envSphere").then((function(e) {
                                t.envLight.url === r && n(e)
                            }))
                        }
                    }
                }
            }, {
                key: "enableLayer",
                value: function(e) {
                    this.sunlight && this.sunlight.layers.enable(e), this.ambient && this.ambient.layers.enable(e), this.envLight && this.envLight.layers.enable(e)
                }
            }]) && zr(r.prototype, n), i && zr(r, i), t
        }();

        function Wr(e) {
            return (Wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function qr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Hr(e, t) {
            return !t || "object" !== Wr(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Xr(e) {
            return (Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Yr(e, t) {
            return (Yr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Jr = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Hr(this, Xr(t).call(this))).mesh = void 0, e.visible = !1, e.showScale = 1, e.requestID = 0, e.name = "scaleVisualizer", e.meshName = "d20", e.colorName = "d20", e.opacityName = "d20", u.a.on("characterChanged", (function(t) {
                    return e.changeScale(t.data.physical)
                })), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Yr(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "show",
                value: function() {
                    this.loadIfNeeded(), this.visible = !0, this.refresh()
                }
            }, {
                key: "hide",
                value: function() {
                    this.visible = !1, this.refresh()
                }
            }, {
                key: "changeScale",
                value: function(e) {
                    var t = C.a.productsByName[e];
                    void 0 !== t ? t.scale !== this.showScale && (this.showScale = t.scale, this.refresh()) : this.showScale = 1
                }
            }, {
                key: "refresh",
                value: function() {
                    void 0 !== this.mesh && (this.mesh.visible = this.visible, this.mesh.scale.set(1 / this.showScale, 1 / this.showScale, 1 / this.showScale), 1 === this.showScale ? this.mesh.position.z = 3 : 2 === this.showScale ? this.mesh.position.z = 2 : 4 === this.showScale ? this.mesh.position.z = 1.8 : (console.log("Do not know how to position scale visualizer for scale", this.showScale), this.mesh.position.z = 2), CK.renderManager.requestShadowUpdate(), o.a.requestAnimationRefresh())
                }
            }, {
                key: "loadIfNeeded",
                value: function() {
                    var e = this;
                    if (!this.loadRequest) {
                        this.loadRequest = !0;
                        var t = "/static/herobundles/productVis/".concat(this.meshName, "/").concat(this.meshName, "_normal.png"),
                            r = "/static/herobundles/productVis/".concat(this.meshName, "/").concat(this.colorName + ("translucent" === this.opacityName ? "_translucent" : ""), "_color.png");
                        this.requestID++;
                        var n = this.requestID,
                            i = [r, "/static/herobundles/productVis/".concat(this.meshName, "/hf_productVis_loRez_").concat(this.meshName, ".ckb")];
                        P.a.getResources(i).then((function(i) {
                            if (n === e.requestID) {
                                var a = {
                                        options: {
                                            uv: !0,
                                            env: !0,
                                            refraction: "translucent" === e.opacityName,
                                            refractionDiceHack: "translucent" === e.opacityName
                                        },
                                        textures: {
                                            normalMap: t,
                                            colorMap: r
                                        }
                                    },
                                    s = new SK.Physical(a);
                                s.setUniform("roughness", .05), s.setUniform("alpha", .2), s.setUniform("refraction", .6), e.mesh && e.mesh.parent.remove(e.mesh), e.mesh = j.a.makeMesh(i[1], s), e.mesh.customDepthMaterial = new SK.Depth, e.add(e.mesh), e.updateMatrixWorld(), e.refresh()
                            }
                        }))
                    }
                }
            }, {
                key: "switch",
                value: function(e, t, r) {
                    e === this.meshName && t === this.color && r === this.opacityName || (this.meshName = e, this.colorName = t, this.opacityName = r, this.loadRequest = !1, this.loadIfNeeded())
                }
            }]) && qr(r.prototype, n), i && qr(r, i), t
        }();

        function Zr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Qr = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.name = void 0, this.location = void 0, this.object3D = new RK.Object3D
            }
            var t, r, n;
            return t = e, n = [{
                key: "getBoneByName",
                value: function(e, t) {
                    for (var r in t)
                        if (t[r].name === e) return t[r]
                }
            }], (r = [{
                key: "removeStage",
                value: function() {
                    var e = this;
                    if (void 0 !== this.mesh) {
                        f.remove(this.colorTween), f.remove(this.posTween);
                        var t = {
                            x: 220 / 255,
                            y: 220 / 255,
                            z: 220 / 255
                        };
                        this.colorTween = new f.Tween(t).to({
                            x: 242 / 255,
                            y: 243 / 255,
                            z: 245 / 255
                        }, 200).easing(f.Easing.Sinusoidal.InOut).onUpdate((function() {
                            e.mesh.material.setUniform("color", t), o.a.requestAnimationRefresh()
                        })).onComplete((function() {
                            e.object3D.remove(e.mesh), delete e.mesh;
                            var t = CK.globalTransform.quaternion.clone(),
                                r = CK.globalTransform.position,
                                n = new RK.Quaternion(0, 0, 0, 1),
                                i = new RK.Quaternion,
                                a = {
                                    x: r.x,
                                    y: r.y,
                                    z: r.z,
                                    t: 0
                                };
                            e.posTween = new f.Tween(a).to({
                                t: 1,
                                x: 0,
                                y: 0,
                                z: 0
                            }, 300).easing(f.Easing.Sinusoidal.InOut).onUpdate((function() {
                                RK.Quaternion.slerp(t, n, i, a.t), CK.globalTransform.quaternion.copy(i), CK.globalTransform.position.copy(a), o.a.requestAnimationRefresh(), CK.renderManager.requestShadowUpdate()
                            })).start()
                        })).start()
                    }
                    this.name = void 0, this.location = void 0
                }
            }, {
                key: "setStage",
                value: function(e) {
                    var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "snap_jnt",
                        n = e && this.name === e,
                        i = this.location === r;
                    n && i || (this.name = e, void 0 === e ? this.removeStage() : (f.remove(this.posTween), n ? this.changeLocation(r, void 0, !1) : (f.remove(this.colorTween), void 0 !== this.mesh && (this.object3D.remove(this.mesh), delete this.mesh), P.a.getResource(O.a.getMeshPath(C.a.getPartBySlotAndName("stage", e))).then((function(e) {
                        if (t.active) {
                            var n = new SK.Basic({
                                depthTest: !0,
                                color: new RK.Vec3(.7, .7, .7)
                            });
                            for (var i in t.mesh = j.a.makeMesh(e, n), t.mesh.customDepthMaterial = new SK.Depth, t.mesh.visible = !1, t.object3D.add(t.mesh), t.mesh.geometry.mixerBones) t.object3D.add(t.mesh.geometry.mixerBones[i]);
                            var a = {
                                    x: 242 / 255,
                                    y: 243 / 255,
                                    z: 245 / 255
                                },
                                s = {
                                    x: 220 / 255,
                                    y: 220 / 255,
                                    z: 220 / 255
                                };
                            n.setUniform("color", a), t.changeLocation(r, (function() {
                                t.colorTween = new f.Tween(a).to(s, 500).easing(f.Easing.Sinusoidal.InOut).onUpdate((function() {
                                    t.mesh.visible = !0, n.setUniform("color", a), o.a.requestAnimationRefresh()
                                })).start()
                            }))
                        }
                    })))))
                }
            }, {
                key: "changeLocation",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (this.location !== t && this.mesh) {
                        this.location = t;
                        var i = e.getBoneByName(this.location, this.mesh.geometry.mixerBones),
                            a = new RK.Quaternion(0, 0, 0, 1),
                            s = i.quaternion.clone(),
                            l = new RK.Quaternion,
                            u = CK.globalTransform,
                            c = this.getStageSnapPosition().toSimple(),
                            h = {
                                x: u.position.x,
                                y: u.position.y,
                                z: u.position.z,
                                t: 0
                            },
                            d = {
                                x: c.x,
                                y: c.y,
                                z: c.z,
                                t: 1
                            };
                        this.posTween && this.posTween.stop(), n ? this.posTween = new f.Tween(h).to(d, 300).easing(f.Easing.Sinusoidal.InOut).onUpdate((function() {
                            RK.Quaternion.slerp(a, s, l, h.t), u.quaternion.copy(l), u.position.copy(h), o.a.requestAnimationRefresh(), CK.renderManager.requestShadowUpdate()
                        })).onComplete(r).start() : this.updateSnap()
                    }
                }
            }, {
                key: "updateSnap",
                value: function() {
                    this.active && this.mesh && (CK.globalTransform.position.copy(this.getStageSnapPosition()), CK.globalTransform.updateMatrixWorld(!0))
                }
            }, {
                key: "getStageSnapPosition",
                value: function() {
                    CK.globalTransform.updateMatrixWorld(!0);
                    var t = CK.scene.getObjectByName("stageSnap"),
                        r = new RK.Vec3(0, 0, 0).setFromMatrixPosition(CK.display.matrixWorld),
                        n = t ? new RK.Vec3(0, 0, 0).setFromMatrixPosition(t.matrixWorld).sub(r) : new RK.Vec3(0, 0, 0);
                    return e.getBoneByName(this.location, this.mesh.geometry.mixerBones).position.clone().sub(n)
                }
            }, {
                key: "active",
                get: function() {
                    return !!this.name
                }
            }]) && Zr(t.prototype, r), n && Zr(t, n), e
        }();

        function $r(e) {
            return ($r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function en(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function tn(e, t) {
            return !t || "object" !== $r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function rn(e) {
            return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function nn(e, t) {
            return (nn = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var an = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = tn(this, rn(t).call(this))).name = "environment", e.groundGroup = new RK.Object3D, e.groundGroup.name = "groundGroup", e.add(e.groundGroup), e.background = new Ar, l.a.backgroundCube && (e.background.change("fantasy"), e.add(e.background)), e.ground = new Ur, e.lighting = new Gr, e.scaleVisualizer = new Jr, e.stage = new Qr, e.add(e.stage.object3D), l.a.groundPlane && e.groundGroup.add(e.ground), e.add(e.lighting), e.groundGroup.add(e.scaleVisualizer), u.a.on("characterGroundChanged", (function(t) {
                    return e.repositionGround(t)
                })), e
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && nn(e, t)
            }(t, RK.Object3D), r = t, (n = [{
                key: "repositionGround",
                value: function(e) {
                    this.groundGroup.position.y = e, o.a.requestAnimationRefresh()
                }
            }, {
                key: "visibleBG",
                set: function(e) {
                    this.background.visible = e, this.ground.visible = e
                },
                get: function() {
                    return this.background.visible && this.ground.visible
                }
            }, {
                key: "visibleGround",
                set: function(e) {
                    this.ground.visible = e
                },
                get: function() {
                    return !!this.ground.visible
                }
            }, {
                key: "visibleCube",
                set: function(e) {
                    return this.background.visible = e
                },
                get: function() {
                    return !!this.background.visible
                }
            }]) && en(r.prototype, n), i && en(r, i), t
        }();

        function sn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var on = function() {
            function e(t, r) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.object = t, this.domElement = r || document, this.offset = new RK.Vec3, this.enable = !0, this.mouseStart = void 0, this.mouseDelta = new RK.Vec2(0, 0), this.rotating = !1, this.domElement.addEventListener("mousedown", (function(e) {
                    return n.onMouseDown(e)
                }), !1), this.domElement.addEventListener("touchmove", (function(e) {
                    return n.onTouchMove(e)
                }), !1), this.domElement.addEventListener("touchstart", (function(e) {
                    return n.onTouchMove(e)
                }), !1), document.addEventListener("touchend", (function() {
                    n.mouseStart = void 0
                })), document.addEventListener("touchcancel", (function() {
                    n.mouseStart = void 0
                }))
            }
            var t, r, n;
            return t = e, (r = [{
                key: "onTouchMove",
                value: function(e) {
                    void 0 !== e.changedTouches && void 0 !== e.changedTouches[0] && (e.preventDefault(), void 0 === this.mouseStart && (this.mouseStart = new RK.Vec2(e.changedTouches[0].clientX, e.changedTouches[0].clientY)), this.mouseDelta.subVectors(new RK.Vec2(e.changedTouches[0].clientX, e.changedTouches[0].clientY), this.mouseStart), this.update(), this.mouseStart = new RK.Vec2(e.changedTouches[0].clientX, e.changedTouches[0].clientY))
                }
            }, {
                key: "onMouseDown",
                value: function(e) {
                    var t = this;
                    this.enable && !this.rotating && (void 0 === this.mouseStart && (this.mouseStart = new RK.Vec2(e.clientX, e.clientY)), e.preventDefault(), this.rotating = !0, this.mouseStart.set(e.clientX, e.clientY), document.addEventListener("mousemove", (function(e) {
                        return t.onMouseMove(e)
                    }), !1), document.addEventListener("mouseup", (function(e) {
                        return t.onMouseUp(e)
                    }), !1))
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    (this.rotating || t) && (e.preventDefault(), void 0 === this.mouseStart && (this.mouseStart = new RK.Vec2(e.clientX, e.clientY)), this.mouseDelta.subVectors(new RK.Vec2(e.clientX, e.clientY), this.mouseStart), this.update(), this.mouseStart.set(e.clientX, e.clientY))
                }
            }, {
                key: "onMouseUp",
                value: function(e) {
                    var t = this;
                    this.rotating && (e.preventDefault(), document.removeEventListener("mousemove", (function(e) {
                        return t.onMouseMove(e)
                    }), !1), document.removeEventListener("mouseup", (function(e) {
                        return t.onMouseUp(e)
                    }), !1), this.rotating = !1)
                }
            }, {
                key: "update",
                value: function() {
                    this.object.rotation.y += this.mouseDelta.x / 60, o.a.requestAnimationRefresh(), CK.renderManager.requestShadowUpdate()
                }
            }]) && sn(t.prototype, r), n && sn(t, n), e
        }();

        function ln(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function un(e, t, r) {
            return t && ln(e.prototype, t), r && ln(e, r), e
        }
        var cn = function() {
                function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), e.init(), u.a.on("CharacterFinishedChanging", (function() {
                        r.reset()
                    })), u.a.on("occlusionChanged", (function() {
                        r.reset()
                    })), u.a.on("cameraMoved", (function() {
                        r.reset()
                    })), o.a.register((function() {
                        r.render()
                    }), "postRender", "PlaneReflection"), t = t || {}, this.mirrorColor = t.mirrorColor ? t.mirrorColor : new RK.Color(8355711), this.reflectivity = t.reflectivity ? t.reflectivity : .5, this.fog = !0, this.reflector = void 0, this.fogMaterial = void 0, this.mesh = void 0, this.xPos = void 0, this.yPos = void 0, this.xRot = void 0, this.yRot = void 0
                }
                return un(e, null, [{
                    key: "init",
                    value: function() {
                        l.a.reflections && (this.initialized || (this.initialized = !0, this.size = l.a.occlusionTextureSize, this.rawTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                            minFilter: RK.LinearFilter,
                            magFilter: RK.LinearFilter,
                            format: RK.RGBAFormat
                        }), this.fogTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                            minFilter: RK.LinearFilter,
                            magFilter: RK.LinearFilter,
                            format: RK.RGBAFormat
                        }), this.planeTarget = new RK.WebGLRenderTarget(this.size, this.size, {
                            minFilter: RK.LinearFilter,
                            magFilter: RK.LinearFilter,
                            format: RK.RGBAFormat
                        }), this.maxIterations = 1, this.totalIters = 0))
                    }
                }]), un(e, [{
                    key: "setMesh",
                    value: function(e) {
                        this.mesh = e
                    }
                }, {
                    key: "setPosition",
                    value: function(e, t, r, n) {
                        this.xPos = e, this.yPos = t, this.xRot = r, this.yRot = n, this.needsRefresh = !0
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        if (CK.renderManager.canvasAvailable()) {
                            this.reflector && (this.reflector.visible = !1), this.clearTargets(), this.fogMaterial = new SK.FogMaterial({});
                            var e = new SK.ReflectorMaterial({
                                    options: {
                                        fog: this.fog
                                    }
                                }),
                                t = new RK.CircleBufferGeometry(2.5, 64),
                                r = new RK.Reflector(t, e, {
                                    clipBias: .003,
                                    color: this.mirrorColor.getHex(),
                                    reflectivity: this.reflectivity,
                                    recursion: 0
                                });
                            r.visible = !1, CK.scene.add(r), this.reflector = r, this.xPos && (this.reflector.position.x = this.xPos), this.yPos && (this.reflector.position.y = this.yPos), this.xRot && this.reflector.rotateX(this.xRot), this.yRot && this.reflector.rotateY(this.yRot), o.a.requestAnimationRefresh(), this.iteration = 0, this.needsRefresh = !1
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.iteration = 0
                    }
                }, {
                    key: "clearTargets",
                    value: function() {
                        CK.renderManager.renderer.setClearColor(new RK.Color(0, 0, 0), 0), CK.renderManager.renderer.clearTarget(e.rawTarget, !0, !0, !0), CK.renderManager.renderer.clearTarget(e.fogTarget, !0, !0, !0), CK.renderManager.renderer.clearTarget(e.planeTarget, !0, !0, !0)
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (CK.renderManager.canvasAvailable())
                            if (this.needsRefresh) this.refresh();
                            else {
                                if (null == this.reflector) return;
                                if (CK.display || !CK.display.resourcesReady) return;
                                if (this.iteration < e.maxIterations) {
                                    if (e.totalIters++, this.reflector.visible = !1, this.reflector.renderVirtualCamera(CK.renderManager.renderer, CK.scene, CK.orbitCamera.camera, e.rawTarget, !0), this.fog) {
                                        var t = this.mesh.material;
                                        this.mesh.material = this.fogMaterial, this.reflector.renderVirtualCamera(CK.renderManager.renderer, CK.scene, null, e.fogTarget, !1), this.reflector.material.setUniform("fogTexture", e.fogTarget.texture), this.mesh.material = t
                                    }
                                    this.reflector.material.setUniform("rawTexture", e.rawTarget.texture), CK.renderManager.setRenderTarget(null), e.totalIters > 1 && (this.reflector.visible = !0), CK.renderManager.renderer.autoClear = !0, CK.renderManager.renderer.render(CK.scene, CK.orbitCamera.camera, null), u.a.emit("PlaneReflectionChanged"), o.a.requestRenderRefresh(), this.iteration++
                                }
                            }
                    }
                }, {
                    key: "end",
                    value: function() {
                        this.isDone || o.a.requestRenderRefresh()
                    }
                }, {
                    key: "isDone",
                    get: function() {
                        return this.iteration >= e.maxIterations
                    }
                }]), e
            }(),
            hn = r(38);

        function dn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var fn = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                try {
                    this.renderer = new RK.WebGLRenderer({
                        antialias: !0,
                        alpha: !0,
                        webgl2: l.a.webgl2
                    }), this.renderer.sortObjects = !1, this.renderer.setClearColor(0, 0), this.renderer.autoClear = !0, this.renderer.shadowMap.enabled = !1
                } catch (e) {
                    Reporting.exception("Failed to create offscreen RK.WebGLRenderer", e)
                }
            }
            var t, r, n;
            return t = e, (r = [{
                key: "resize",
                value: function(e, t) {
                    this.renderer.setSize(e, t)
                }
            }]) && dn(t.prototype, r), n && dn(t, n), e
        }();

        function pn(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function mn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        console.log("CK ".concat("Production 4/18/20 21:3:22 B:release/hf_2020_04_03 V14191"));
        var vn = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "initSettings",
                value: function(e) {
                    if (l.a.init(e), x.init(), this.serverTime = "SERVER_TIME" in window && "" !== SERVER_TIME ? parseInt(SERVER_TIME) : void 0, this.realServerTime = this.serverTime, !this.serverTime) throw console.error("No SERVER_TIME template variable."), "No SERVER_TIME template variable set"
                }
            }, {
                key: "checkCompatibility",
                value: function() {
                    return void 0 === x.specs && console.error("Client specs not initialized"), x.specs
                }
            }, {
                key: "main",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    if (!document.getElementById("character-canvas")) {
                        var a = document.createElement("div");
                        a.setAttribute("id", "character-canvas"), document.body.appendChild(a)
                    }
                    if (l.a.initialized || console.error("Settings not initialized! Please call Settings.init() before main() "), this.loaded = !1, l.a.debug) this.init();
                    else try {
                        this.init()
                    } catch (e) {
                        return i("Error during initialization"), void Reporting.exception("Initializing", e)
                    }
                    this.saves = new Zt("/all_user_config/"), setTimeout((function() {
                        e.loaded || Reporting.exception("Timeout")
                    }), 2e5), u.a.on("loadingProgress", t), u.a.on("exception", i), this.initData((function() {
                        e.initCharacter(t, n, i), r()
                    }), i)
                }
            }, {
                key: "initCharacter",
                value: function(e, t, r) {
                    var n = this;
                    this.loadInitialCharacter((function() {
                        u.a.off("loadingProgress", e), u.a.off("exception", r), n.loaded = !0, t(), n.saves.loadAll(), "specs" in x && lt.a.variables.report && setTimeout((function() {
                            Reporting.sendGraphicsReport()
                        }), 2e3), Reporting.init(), n.finishedLoading()
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    o.a.init(), u.a.init(), I.init(), P.a.init(), O.a.init(), F.a.init(), this.initDisplay()
                }
            }, {
                key: "initData",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    C.a.init((function() {
                        void 0 !== t && t()
                    }), r), (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? this.initCanvas() : document.addEventListener("DOMContentLoaded", (function() {
                        return e.initCanvas()
                    }))
                }
            }, {
                key: "initCanvas",
                value: function() {
                    document.getElementById("character-canvas").appendChild(this.getDomElement())
                }
            }, {
                key: "initDisplay",
                value: function() {
                    var e = this;
                    this.characterID = 0, this.scene = new RK.Scene, l.a.debug && this.scene.add(new pt), this.scene.autoUpdate = !1, this.environment = new an, this.scene.add(this.environment), this.globalTransform = new RK.Object3D, this.globalTransform.scale.set(l.a.globalScale, l.a.globalScale, l.a.globalScale), this.scene.add(this.globalTransform), this.characters = [];
                    for (var t = l.a.characterCount, r = 0; r < t; r++) {
                        this.characters.push(new(l.a.CustomCharacter || nr));
                        var n = new RK.Object3D;
                        t > 1 && (n.position.z = 0 === r ? 2 : -2), n.add(this.characters[r]), this.globalTransform.add(n)
                    }
                    this.canvas = document.getElementById("character-canvas"), this.renderManager = new Tr(Math.max(this.canvas.offsetWidth, 1), Math.max(this.canvas.offsetHeight, 1)), this.renderManagerOffscreen = new fn, this.orbitCamera = new b(this.canvas.offsetWidth, this.canvas.offsetHeight, this.renderManager, this._cameraMoved), this.rotateMesh = l.a.dragRotateMesh && !l.a.debug ? new on(this.globalTransform, this.getDomElement()) : void 0, this.renderManager.setSceneAndCamera(this.scene, this.orbitCamera.camera), this.targets = [], this.debugManipulatorSpace = "local", this.resetCharacterRotation(), this._start(), window.addEventListener("beforeunload", (function() {
                        e.cacheCharacter()
                    })), window.addEventListener("pagehide", (function() {
                        e.cacheCharacter()
                    })), window.addEventListener("onbeforeunload", (function() {
                        e.cacheCharacter()
                    }))
                }
            }, {
                key: "finishedLoading",
                value: function() {
                    var e = this;
                    l.a.shaderballs && l.a.color && Nt.a.init(), l.a.extras && !window.__DEVELOPER__ && (this.extraScript = P.a.getResource(O.a.getExtrasScript()).then((function() {
                        e.extraScript = !0
                    })))
                }
            }, {
                key: "_registerEvents",
                value: function() {
                    var t = this;
                    window.addEventListener("keydown", (function(e) {
                        t._keydown(e)
                    })), window.addEventListener("touchstart", (function e() {
                        t.userHasTouched = !0, window.removeEventListener("touchstart", e, !1)
                    })), window.addEventListener("mouseover", (function e() {
                        t.userHasHovered = !0, window.removeEventListener("mouseover", e, !1)
                    })), o.a.register(e._detectGraphicsCrash, "start", "GraphicsCrash"), o.a.register((function() {
                        return t.characters.map((function(e) {
                            return e.update()
                        }))
                    }), "start", "Character"), o.a.register((function() {
                        return t.characters.map((function(e) {
                            return e.animation()
                        }))
                    }), "animation", "Character"), o.a.register((function() {
                        return t.characters.map((function(e) {
                            return e.postAnimation()
                        }))
                    }), "postAnimation", "Character"), o.a.register((function() {
                        return t.characters.map((function(e) {
                            return e.preRender()
                        }))
                    }), "preRender", "Character"), o.a.register((function() {
                        return t.characters.map((function(e) {
                            return e.end()
                        }))
                    }), "end", "Character"), o.a.register((function() {
                        t._updateScene()
                    }), "animation", "CK Scene"), o.a.register((function() {
                        t.renderManager.renderMain()
                    }), "render", "CK Render"), o.a.register((function() {
                        t._resize()
                    }), "start", "CK Resize")
                }
            }, {
                key: "getDomElement",
                value: function() {
                    return this.renderManager.renderer.domElement
                }
            }, {
                key: "changeBackground",
                value: function(e) {
                    this.environment.background.changeBackground(e)
                }
            }, {
                key: "resetCharacterRotation",
                value: function() {
                    this.character.display.rotation.y = l.a.characterRotation.y, this.character.display.rotation.x = l.a.characterRotation.x, this.character.display.rotation.z = l.a.characterRotation.z, this.character.display.updateMatrixWorld()
                }
            }, {
                key: "enableMaterialSim",
                value: function() {
                    this.character.changeSettings({
                        showMaterialSim: !0
                    }), this.environment.scaleVisualizer.show()
                }
            }, {
                key: "disableMaterialSim",
                value: function() {
                    this.character.changeSettings({
                        showMaterialSim: !1
                    }), this.environment.scaleVisualizer.hide()
                }
            }, {
                key: "isKey",
                value: function(e, t) {
                    return e.code === t || e.keyCode === t
                }
            }, {
                key: "_keydown",
                value: function(e) {
                    e.target.type && "range" !== e.target.type || (this.isKey(e, 89) && e.ctrlKey || this.isKey(e, 90) && e.ctrlKey && e.shiftKey ? D.a.redo() : (this.isKey(e, 90) && e.ctrlKey || this.isKey(e, 8) && e.altKey) && D.a.undo(), this.isKey(e, 37) ? (this.character.rotation.y -= Math.PI / 90, this.renderManager.requestShadowUpdate(), o.a.requestAnimationRefresh()) : this.isKey(e, 39) && (this.character.rotation.y += Math.PI / 90, this.renderManager.requestShadowUpdate(), o.a.requestAnimationRefresh()))
                }
            }, {
                key: "_updateScene",
                value: function() {
                    this.scene.updateMatrixWorld()
                }
            }, {
                key: "_resize",
                value: function() {
                    this.canvas && this.renderManager && (this.renderManager.width !== this.canvas.offsetWidth || this.renderManager.height !== this.canvas.offsetHeight) && this.canvas.offsetWidth && this.canvas.offsetWidth > 1 && this.canvas.offsetHeight && this.canvas.offsetHeight > 1 && (this.renderManager.resize(this.canvas.offsetWidth, this.canvas.offsetHeight), this.orbitCamera.resize(this.canvas.offsetWidth, this.canvas.offsetHeight), o.a.requestRenderRefresh(), u.a.emit("resize"))
                }
            }, {
                key: "_cameraMoved",
                value: function() {
                    u.a.emit("cameraMoved"), o.a.requestRenderRefresh()
                }
            }, {
                key: "_start",
                value: function() {
                    o.a.start(), l.a.GetCookieSetting("webglcrashed") && (l.a.SetCookieSetting("webglcrashed", void 0), Overlay.alert("This can be restored from Options in the Info menu.", "Graphics reduced due to crash!")), this._registerEvents()
                }
            }, {
                key: "configRoute",
                value: function() {
                    var e = window.location.pathname.split("/")[1];
                    if (e && l.a.routeMappings && l.a.routeMappings[e]) return l.a.routeMappings[e]
                }
            }, {
                key: "loadInitialCharacter",
                value: function(e) {
                    if (l.a.blankInitialConfig) return e();
                    for (var t = 0; t < this.characters.length; t++)
                        if (t > 0 && (e = function() {}), this.characterID = t, window.LOAD_CONFIG && "{{ onLoadConfig }}" !== window.LOAD_CONFIG && "" !== window.LOAD_CONFIG) this.tryLoadCharacterShare(e);
                        else if (this.configRoute()) {
                        var r = this.configRoute();
                        this.tryLoadCharacter(r, "Failed to load from route", e)
                    } else if (sessionStorage.cachedConfig && !l.a.forge) {
                        var n = JSON.parse(sessionStorage.cachedConfig);
                        this.uncacheCharacter(), this.tryLoadCharacter(n, "Failed to load from cache", e), n.config_id && this.saves.setActiveConfig(n)
                    } else l.a.initialConfig ? this.tryLoadCharacter(l.a.initialConfig, "Failed to load", e) : C.a.configs.archetype && Object.keys(C.a.configs.archetype).length ? this.tryLoadCharacter(this.getRandomArchetype(), "Failed to load random default", e) : Reporting.exception("Ooops, something went wrong!");
                    this.characterID = 0
                }
            }, {
                key: "tryLoadCharacterShare",
                value: function(e) {
                    try {
                        var t = JSON.parse(window.LOAD_CONFIG.replace(/\n/g, "\\n"));
                        delete t.physical, this.change(t, e)
                    } catch (t) {
                        window.alert("Failed to load share"), this.loadBackupArchetype(e)
                    }
                }
            }, {
                key: "tryLoadCharacter",
                value: function(e, t, r) {
                    try {
                        !this.usesArchetype || e && e.parts && Object.keys(e.parts).length ? this.change(e, r) : (Reporting.exception("Loading character had no parts"), this.loadBackupArchetype(r))
                    } catch (e) {
                        window.alert(t, e), Reporting.exception("Loading Character " + t, e), this.loadBackupArchetype(r)
                    }
                }
            }, {
                key: "loadBackupArchetype",
                value: function(e) {
                    this.usesArchetype && this.change(this.getRandomArchetype(), e)
                }
            }, {
                key: "cacheCharacter",
                value: function() {
                    if (!window.loggingOut) {
                        var e = this.character.data.getJson();
                        e.config_id = this.saves.getActiveID(), e.meta || (e.meta = {});
                        var t = JSON.stringify(e);
                        t.length > 10 && (sessionStorage.cachedConfig = t)
                    }
                }
            }, {
                key: "uncacheCharacter",
                value: function() {
                    delete sessionStorage.cachedConfig
                }
            }, {
                key: "loadDefaultCharacter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e || this.character.savedChanges || confirm("Unsaved changes will be lost. Are you sure?")) return this.change(this.getRandomArchetype()), this.character.setName(""), this.environment.scaleVisualizer.hide(), !0
                }
            }, {
                key: "getRandomArchetype",
                value: function() {
                    if (C.a.configs && C.a.configs.archetype) {
                        var e = Math.floor(Math.random() * C.a.configs.archetype.length);
                        return C.a.configs.archetype[e]
                    }
                }
            }, {
                key: "setCharacter",
                value: function(e) {
                    this.characterID = e, u.a.emit("menuChanged")
                }
            }, {
                key: "change",
                value: function(e, t) {
                    delete this.saves.activeConfig, this.character.change(e, !0), t && u.a.next("CharacterFinishedChanging", t)
                }
            }, {
                key: "addUndoPoint",
                value: function() {
                    this.character.data.solidifyDirectManipulation(), D.a.add()
                }
            }, {
                key: "tweak",
                value: function(e) {
                    this.character.change(e)
                }
            }, {
                key: "tweakPart",
                value: function(e) {
                    this.tweak(Object.assign(e, {
                        partClick: !0
                    }))
                }
            }, {
                key: "tweakPar",
                value: function(e, t, r) {
                    void 0 !== r ? this.tweak({
                        locations: pn({}, r, pn({}, e, t))
                    }) : this.tweak({
                        parameters: pn({}, e, t)
                    })
                }
            }, {
                key: "mirror",
                value: function() {
                    this.tweak({
                        mirroredPose: !this.character.data.mirroredPose
                    })
                }
            }, {
                key: "setPart",
                value: function(e, t) {
                    this.tweak({
                        parts: pn({}, e, t)
                    })
                }
            }, {
                key: "getFeature",
                value: function(e, t) {
                    return void 0 !== t ? this.data.locations[t] && this.data.locations[t][e] : void 0
                }
            }, {
                key: "clearSlot",
                value: function(e) {
                    this.tweak({
                        parts: pn({}, e, void 0)
                    })
                }
            }, {
                key: "clearSlots",
                value: function(e) {
                    var t = {};
                    for (var r in e) t[e[r]] = void 0;
                    this.tweak({
                        parts: t
                    })
                }
            }, {
                key: "getPose",
                value: function() {
                    return this.character.data.limitedPoses.main
                }
            }, {
                key: "setLabel",
                value: function(e, t) {
                    this.tweak({
                        labels: pn({}, e, t)
                    })
                }
            }, {
                key: "getLabel",
                value: function(e) {
                    return this.character.data.labels[e]
                }
            }, {
                key: "previewSlider",
                value: function(e, t) {
                    this.character.previewSlider(e, t)
                }
            }, {
                key: "setSlider",
                value: function(e, t) {
                    this.tweak({
                        sliders: pn({}, e, t)
                    })
                }
            }, {
                key: "removeDecal",
                value: function(e) {
                    this.tweak({
                        decals: pn({}, e, void 0)
                    })
                }
            }, {
                key: "getSlider",
                value: function(e) {
                    return this.character.getSlider(e)
                }
            }, {
                key: "colorProduct",
                value: function() {
                    return !this.character.data.physical || !!(C.a.productsByName[this.character.data.physical] || {}).color
                }
            }, {
                key: "undo",
                value: function() {
                    D.a.undo()
                }
            }, {
                key: "redo",
                value: function() {
                    D.a.redo()
                }
            }, {
                key: "canUndo",
                value: function() {
                    return D.a.hasUndo
                }
            }, {
                key: "canRedo",
                value: function() {
                    return D.a.hasRedo
                }
            }, {
                key: "toJson",
                value: function() {
                    var e = this.data.getJson();
                    console.log(e), console.log(JSON.stringify(e))
                }
            }, {
                key: "fromJson",
                value: function() {
                    this.change(JSON.parse(window.prompt("Character Json:")))
                }
            }, {
                key: "sanitizeName",
                value: function(e) {
                    return e && "" !== e ? e = (e = e.replace(/[^a-zA-Z0-9 ]/g, "")).substring(0, 30) : ""
                }
            }, {
                key: "hasTransforms",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = this.data;
                    return !!(Object.keys(t.transforms).filter((function(t) {
                        return !e.includes(t)
                    })).length || Object.keys(t.poseSliders).length || t.custom.flipItemD || t.custom.flipItemL || t.custom.flipItemR)
                }
            }, {
                key: "clearTransforms",
                value: function(e) {
                    this.tweak(this.getClearTransformObj(e))
                }
            }, {
                key: "getClearTransformObj",
                value: function(e) {
                    var t = {
                        transforms: void 0,
                        poseSliders: void 0,
                        custom: {
                            flipItemD: void 0,
                            flipItemL: void 0,
                            flipItemR: void 0,
                            handPoses: void 0
                        }
                    };
                    if (e)
                        for (var r in t.transforms = {}, this.data.transforms) t.transforms[r] = {}, e.includes(r) || (t.transforms[r] = void 0);
                    return t
                }
            }, {
                key: "freeCamera",
                value: function() {
                    Object.assign(this.orbitCamera.controls, {
                        enablePan: !0,
                        minDistance: 0,
                        maxDistance: 5e3,
                        maxZoom: 50,
                        maxPolarAngle: .99 * Math.PI,
                        freeCamera: !0
                    }), this.orbitCamera.camera.near = .001, this.orbitCamera.controls.enabled = !0, this.rotateMesh && (this.rotateMesh.enable = !1)
                }
            }, {
                key: "_detectGraphicsCrash",
                value: function() {
                    if (l.a.detectWebglCrash) {
                        var t = e.renderManager,
                            r = t && t.renderer;
                        if (r) {
                            r.getIsContextLost() ? e._GlContextLostTick++ : (e._GlContextLostTick = 0, e._GlContextValidTime = performance.now());
                            var n = Math.trunc(300),
                                i = performance.now() - e._GlContextValidTime > 5e3,
                                a = e._GlContextLostTick > n;
                            i && a && !e._GlContextCrashed && (l.a.SetCookieSetting("graphics", "min"), l.a.SetCookieSetting("webglcrashed", !0), e._GlContextCrashed = !0, console.error("WebGL crash detected."), Overlay.permanentAlert("Your graphics card has crashed! Please try refreshing the page", "Crash!"))
                        }
                    }
                }
            }, {
                key: "usesArchetype",
                get: function() {
                    return !l.a.forge && !l.a.blankInitialConfig && C.a.configs.archetype && Object.keys(C.a.configs.archetype).length
                }
            }, {
                key: "display",
                get: function() {
                    return this.character.display
                }
            }, {
                key: "character",
                get: function() {
                    return void 0 === this.characters ? void 0 : this.characters[this.characterID]
                }
            }, {
                key: "data",
                get: function() {
                    return this.character.data
                }
            }, {
                key: "modded",
                get: function() {
                    return this.character.data.modded
                }
            }, {
                key: "criticalErrorMessage",
                get: function() {
                    return this._criticalErrorMessage
                },
                set: function(e) {
                    this._criticalErrorMessage = e;
                    try {
                        o.a.requestRenderRefresh(), CKUI.requestEditorRefresh()
                    } catch (e) {}
                }
            }], (r = null) && mn(t.prototype, r), n && mn(t, n), e
        }();
        vn._GlContextLostTick = 0, vn._GlContextValidTime = performance.now(), vn._GlContextCrashed = !1, window.CK = vn, Object.assign(CK, {
            Options: C.a,
            Products: R,
            Events: u.a,
            Resources: P.a,
            Paths: O.a,
            Settings: l.a,
            GameLoop: o.a,
            ColorManager: E,
            Materials: I,
            User: F.a,
            ClientSpecs: x,
            MixerMesh: j.a,
            URL: lt.a,
            Atlas: Ge,
            Capture: vt,
            LazyImageLoader: yt,
            encoder: n,
            Helpers: We.a,
            UserSaves: Zt,
            HtmlEntities: i,
            Shaderballs: Nt.a,
            PaintTool: Ht,
            sizing: p.a,
            EditorScroll: ir,
            image: ar,
            RenderIDs: Gt,
            Modded: Tt,
            Display: st,
            Data: Ft,
            MixerBufferGeometry: ot.a,
            Position: pt,
            OrbitCamera: b,
            PinchControl: kt,
            Character: nr,
            MixerSkeleton: U.a,
            ColorBake: z.a,
            Countdown: s,
            SchemeThumbs: S,
            PlaneReflection: cn,
            SlotItem: hn.a,
            UndoQueue: D.a
        })
    },
    56: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return h
        }));
        var n = r(19),
            i = r(5),
            a = r(0);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var h = function(e) {
            function t(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (r = l(this, u(t).call(this, e))).baseLayer = e.baseLayer, r.channelCount = r.baseLayer ? 3 : 4, r.layerMapping = [], r.layers = (e.layers || "").split(",").map((function(e) {
                    var t = e.split("_");
                    return r.layerMapping.push(t[1]), parseInt(t[0])
                })), r.color = !!r.layers.find((function(e) {
                    return e === t.LAYER_TYPES.color
                })), r.maskCount = r.layers.filter((function(e) {
                    return e === t.LAYER_TYPES.mask
                })).length, r.form = r.color && r.maskCount ? t.DECAL_FORMS.maskAndColor : r.color ? t.DECAL_FORMS.color : t.DECAL_FORMS.mask, r.colorIndex = r.layers.indexOf(t.LAYER_TYPES.color), r.displace = !!e.displace, r.uvwh = null != e.u ? new RK.Vec4(e.u, e.v, e.w, e.h) : void 0, r.worldScale = r.uvwh ? 1 : e.w || 1, r.isPartDecal = r.name.includes("_"), r.partName = r.name.split("_")[0], r.decalName = r.name.split("_")[1], r.group = e.group || r.slot, r.isPartDecal && i.a.slots[r.slot] && i.a.slots[r.slot].target_slot && (r.targets = [r.partName]), a.a.color && e.colors && (r.colors = r.parseColors(e.colors)), r
            }
            var r, s, h;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(t, e), r = t, h = [{
                key: "deconstructDecalMapping",
                value: function(e) {
                    var t = e.split("_");
                    return 2 === t.length ? t : 4 === t.length ? [t[0] + "_ud_" + t[2], t[3]] : console.error("Invalid decal mapping", e) || ["invalid", 0]
                }
            }], (s = [{
                key: "getTexturePath",
                value: function() {
                    return n.a.getDecalTexturePath(this)
                }
            }]) && o(r.prototype, s), h && o(r, h), t
        }(r(38).a);
        h.LAYER_TYPES = Object.freeze({
            mask: 1,
            color: 2,
            depth: 3
        }), h.DECAL_FORMS = Object.freeze({
            mask: 1,
            color: 2,
            maskAndColor: 3
        })
    },
    63: function(e, t, r) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function o(e, t) {
            return (o = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        r.d(t, "a", (function() {
            return l
        }));
        var l = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = a(this, s(t).call(this))).frustumCulled = !1, e.backupAttributes = {}, e.isMixerBuffer = !0, e
            }
            var r, n, l;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && o(e, t)
            }(t, RK.BufferGeometry), r = t, l = [{
                key: "copyBone",
                value: function(e) {
                    return e.clone()
                }
            }], (n = [{
                key: "mergeVertices",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
                    if (this.index)
                        for (var t = {}, r = this.index.array, n = this.attributes.position.array, i = 0; i < r.length / 3; i++)
                            for (var a = 0; a < 3; a++) {
                                var s = 3 * i + a,
                                    o = r[s],
                                    l = n[3 * o].toFixed(e) + "," + n[3 * o + 1].toFixed(e) + "," + n[3 * o + 2].toFixed(e);
                                l in t && r[3 * i + (a + 1) % 3] != o && r[3 * i + (a + 2) % 3] != o ? r[s] = t[l] : t[l] = r[s]
                            } else console.warn("Can not merge non indexed geometry")
                }
            }, {
                key: "convertToIndexed",
                value: function() {
                    if (this.index) console.warn("Mesh is already indexed");
                    else {
                        for (var e = this.attributes.position.array.length / 3, t = new Uint32Array(e), r = 0; r < e; r++) t[r] = r;
                        this.setIndex(new RK.BufferAttribute(t, 1))
                    }
                }
            }, {
                key: "copyUnskinned",
                value: function() {
                    var e = this,
                        r = new t;
                    return r.filePath = this.filePath, r.name = this.name, r.locators = this.locators, r.index = this.index, r.paintMapping = this.paintMapping, r.ckPosGroup = this.ckPosGroup, r.ckSeams = this.ckSeams, r.ckSeamOriginalIndices = this.ckSeamOriginalIndices, r.ckSeamBoundaries = this.ckSeamBoundaries, r.ckSeamHalfEdge = this.ckSeamHalfEdge, r.ckBoundaries = this.ckBoundaries, r.ckRivets = this.ckRivets, r.ckBounds = this.ckBounds, r.exportTime = this.exportTime, ["position", "normal", "uv", "uv2", "color", "vertexID"].map((function(t) {
                        t in e.attributes && (r.attributes[t] = e.attributes[t])
                    })), r.skinned = !1, r.morphAttributes = this.morphAttributes, this.morphTargetInfluences && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), r.morphTargetDictionary = this.morphTargetDictionary, this.morphTargets && (r.morphTargets = this.morphTargets), r
                }
            }, {
                key: "createAttributeBackups",
                value: function(e, t) {
                    if (void 0 === t) {
                        if (e in this.attributes && !(e in this.backupAttributes)) return this.backupAttributes[e] = this.attributes[e], this.attributes[e] = (new RK.BufferAttribute).copy(this.attributes[e]), !0
                    } else {
                        var r = this.morphTargetDictionary[t],
                            n = void 0 !== r && this.morphAttributes[e] && this.morphAttributes[e][r];
                        if (n && (this.backupMorphAttributes = this.backupMorphAttributes || {}, this.backupMorphAttributes[t] = this.backupMorphAttributes[t] || {}, !(e in this.backupMorphAttributes[t]))) return this.backupMorphAttributes[t][e] = n, this.morphAttributes[e][r] = (new RK.BufferAttribute).copy(n), !0
                    }
                }
            }, {
                key: "restoreAttributeFromBackup",
                value: function(e, t) {
                    if (void 0 === t) {
                        var r = this.backupAttributes[e];
                        r ? this.attributes[e].copy(r) : console.error("Attribute", e, "does not exist in backups")
                    } else {
                        var n = this.getAttributeBackup(e, t);
                        if (n) {
                            var i = this.morphTargetDictionary[t];
                            this.morphAttributes[e][i].copy(n)
                        } else console.error("Morph attribute ".concat(t, " ").concat(e, " does not exist in backups"))
                    }
                }
            }, {
                key: "prepareAttributeForEdit",
                value: function(e, t) {
                    this.createAttributeBackups(e, t) || this.restoreAttributeFromBackup(e, t)
                }
            }, {
                key: "getAttributeBackup",
                value: function(e, t) {
                    return void 0 === t ? this.backupAttributes && this.backupAttributes[e] : this.backupMorphAttributes && this.backupMorphAttributes[t] && this.backupMorphAttributes[t][e]
                }
            }, {
                key: "copyWithSharing",
                value: function() {
                    if (this.mixerBones) {
                        var e = this.copyUnskinned();
                        e.ckbTotalInfluences = this.ckbTotalInfluences, e.ckbOriginalIndices = this.ckbOriginalIndices, e.mixerBonesByOrigID = this.mixerBonesByOrigID, e.ckFaceSizes = this.ckFaceSizes, e.ckbPositionMap = this.ckbPositionMap, e.mainSkeleton = this.mainSkeleton, e.skinned = this.skinned, e.poses = this.poses, e.extremeIndices = this.extremeIndices;
                        for (var r = this.skinInfluenceCount || 0, n = Math.ceil(r / 4), i = 0; i < n; ++i) {
                            var a = "skinWeight".concat(i);
                            a in this.attributes && (e.attributes[a] = this.attributes[a])
                        }
                        var s = this.mixerBones;
                        e.mixerBones = s.map((function(e) {
                            return t.copyBone(e)
                        }));
                        for (var o = 0; o < n; ++o) {
                            var l = this.skinIndexNames[o];
                            e.attributes[l] = (new RK.BufferAttribute).copy(this.attributes[l])
                        }
                        for (var u in e.skinInfluenceCount = r, e.skinIndexNames = (this.skinIndexNames || []).slice(0), e.skinWeightNames = (this.skinWeightNames || []).slice(0), this.backupAttributes) e.attributes[u] = this.backupAttributes[u];
                        return e
                    }
                    return this
                }
            }, {
                key: "copyAsStandalone",
                value: function(e) {
                    var r = this.copyWithSharing(),
                        n = r.mixerBones,
                        i = r.attributes.skinIndex.array,
                        a = {};
                    i.map((function(e) {
                        return a[e] = void 0
                    })), delete a[0];
                    var s = Object.keys(a).map((function(e) {
                        return parseInt(e)
                    }));
                    if (s.length <= 1) return r.mainSkeleton = !1, r.skinned = !1, r;
                    r.mainSkeleton = !0;
                    var o = {};
                    s.map((function(t) {
                        do {
                            var r = (t < 500 ? e[t] : n[t - 500]) || console.error("Could not find ", t);
                            o[t] = !0, t = r.parentId
                        } while (t && !o[t])
                    }));
                    var l = Object.keys(o),
                        u = {};
                    for (var c in l.map((function(e, t) {
                            return u[e] = t
                        })), r.mixerBones = l.map((function(r) {
                            var i;
                            return (i = (r = parseInt(r)) < 500 ? t.copyBone(e[r]) || console.error("Could not find ", r) : n[r - 500] || console.error("Could not find ", r, "in", n)).parentId in u ? i.parentId = u[i.parentId] : i.parentId = -1, i
                        })), i) {
                        var h = i[c];
                        h > 0 && (i[c] = u[h] || console.error(h, "not found in", u))
                    }
                    return delete r.poses, r
                }
            }]) && i(r.prototype, n), l && i(r, l), t
        }()
    },
    64: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", (function() {
            return s
        }));
        try {
            n = "undefined" != typeof Intl && void 0 !== Intl.Collator ? Intl.Collator("generic", {
                sensitivity: "base"
            }) : null
        } catch (e) {
            console.log("Collator could not be initialized and wouldn't be used")
        }
        var i = [],
            a = [];

        function s(e, t) {
            var r, s, o, l, u, c, h = !!n,
                d = e.length,
                f = t.length;
            if (0 === d) return f;
            if (0 === f) return d;
            for (o = 0; o < f; ++o) i[o] = o, a[o] = t.charCodeAt(o);
            if (i[f] = f, h)
                for (o = 0; o < d; ++o) {
                    for (s = o + 1, l = 0; l < f; ++l) r = s, c = 0 === n.compare(e.charAt(o), String.fromCharCode(a[l])), (s = i[l] + (c ? 0 : 1)) > (u = r + 1) && (s = u), s > (u = i[l + 1] + 1) && (s = u), i[l] = r;
                    i[l] = s
                } else
                    for (o = 0; o < d; ++o) {
                        for (s = o + 1, l = 0; l < f; ++l) r = s, c = e.charCodeAt(o) === a[l], (s = i[l] + (c ? 0 : 1)) > (u = r + 1) && (s = u), s > (u = i[l + 1] + 1) && (s = u), i[l] = r;
                        i[l] = s
                    }
            return s
        }
    },
    65: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f
        }));
        var n = r(5),
            i = r(15),
            a = r(41);

        function s() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function o(e, t, r) {
            return (o = s() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new(Function.bind.apply(e, n));
                return r && l(i, r.prototype), i
            }).apply(null, arguments)
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function u(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var d = {
                alpha: [1, 1, 1],
                rough: [.5, .5, .5],
                metal: [0, 0, 0],
                sheen: [0, 0, 0]
            },
            f = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    c(this, e), this.gradientHSV = t.gradientHSV ? a.a.deepCopy(t.gradientHSV) : t.gradient ? t.gradient.map((function(e) {
                        return i.a.RGBtoHSV.apply(i.a, u(e))
                    })) : [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0, 0]
                    ], this.emissiveHSV = t.emissiveHSV ? a.a.deepCopy(t.emissiveHSV) : t.emissive ? t.emissive.map((function(e) {
                        return i.a.RGBtoHSV.apply(i.a, u(e))
                    })) : [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0, 0]
                    ], this.alpha = t.alpha && t.alpha.slice ? t.alpha.slice() : [1, 1, 1], this.rough = t.rough && t.rough.slice ? t.rough.slice() : [.5, .5, .5], this.metal = t.metal && t.metal.slice ? t.metal.slice() : [0, 0, 0], this.sheen = t.sheen && t.sheen.slice ? t.sheen.slice() : [0, 0, 0], this.complexEmissive = !!t.complexEmissive, this.simpleEmissive = t.simpleEmissive || 0, this.presetID = t.presetID || t.id || console.error("Must provide preset id for shader response", t) || 2, this.surfaceID = t.surfaceID || (n.a.surfacesByName[t.surface] || console.error("Surface ".concat(t.surface, " not found"), t) || n.a.surfacesByName.misc).id, this.name = t.name || "Unnamed Paint", this.group = t.group, this.isCopy = t.isCopy, this.flatLighting = t.flatLighting, this.displayOrder = t.displayOrder, this.skin = !!t.skin, this.inherit = t.inherit, this.isShaderResponse = !0, this.schemeSortOrder = t.schemeSortOrder, this.eye = t.eye, this.validateData(), this.originalKey = r ? this.key : t.originalKey, this.diffs = t.diffs || this.getDiffs()
                }
                var t, r, s;
                return t = e, s = [{
                    key: "fromDB",
                    value: function(t) {
                        return new e({
                            gradient: t.low ? [e.HexToRGB(t.low), e.HexToRGB(t.mid), e.HexToRGB(t.high), t.skin ? [255, 0, 0, .5] : [0, 0, 0, 0]] : [
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0]
                            ],
                            rough: [void 0 !== t.rough_min ? t.rough_min : .5, void 0 !== t.rough_mid ? t.rough_mid : .5, void 0 !== t.rough_max ? t.rough_max : .5],
                            metal: [t.metal_min || 0, t.metal_mid || 0, t.metal_max || 0],
                            sheen: [t.sheen_min || 0, t.sheen_mid || 0, t.sheen_max || 0],
                            presetID: t.id,
                            name: t.name,
                            surfaceID: (n.a.surfacesByName[t.surface] || console.error("Surface not valid", t.surface) || {}).id,
                            group: t.grp,
                            displayOrder: t.display_order || 0,
                            skin: t.skin,
                            eye: t.eye,
                            inherit: t.inherit,
                            simpleEmissive: t.emissive_simple || 0,
                            complexEmissive: t.emissive_complex,
                            emissive: t.emissive_low ? [e.HexToRGB(t.emissive_low), e.HexToRGB(t.emissive_mid), e.HexToRGB(t.emissive_high), [0, 0, 0, 0]] : [
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0]
                            ],
                            alpha: [p(t.alpha_low, 1), p(t.alpha_mid, 1), p(t.alpha_high, 1)]
                        }, !0)
                    }
                }, {
                    key: "fromPartial",
                    value: function(t) {
                        var r = n.a.shaders[t.presetID] || console.warn("Missing shader response parent", t.presetID) || n.a.shaders[1];
                        return new e(Object.assign({}, r, t))
                    }
                }, {
                    key: "componentToHex",
                    value: function(e) {
                        var t = e.toString(16);
                        return 1 == t.length ? "0" + t : t
                    }
                }, {
                    key: "RGBToHex",
                    value: function(e, t, r) {
                        return e = Math.round(e), t = Math.round(t), r = Math.round(r), this.componentToHex(e) + this.componentToHex(t) + this.componentToHex(r)
                    }
                }, {
                    key: "HexToRGB",
                    value: function(e) {
                        return e ? (6 === e.length && (e = "#" + e), 7 !== e.length && console.error("Invalid hex code", e), [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)]) : null
                    }
                }], (r = [{
                    key: "applyMaterialResponse",
                    value: function(e) {
                        this.alpha = e.alpha, this.rough = e.rough, this.metal = e.metal, this.sheen = e.sheen, this.skin = e.skin, this.surfaceID = e.surfaceID, this.complexEmissive = e.complexEmissive, this.simpleEmissive = e.simpleEmissive, this.emissiveHSV = e.emissiveHSV
                    }
                }, {
                    key: "validateData",
                    value: function() {
                        var e = this;
                        ["gradientHSV", "emissiveHSV"].map((function(t) {
                            var r = e[t];
                            r.length && 3 === e[t].length && r.push([0, 0, 0, 0]), r.length && 4 === r.length && !r.find((function(e) {
                                return !e.length || e.length < 3 || void 0 !== e.find((function(e) {
                                    return isNaN(e)
                                }))
                            })) || (e[t] = console.error("Invalid data", t, "in", r, e) || [
                                [0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0, 0]
                            ]), e[t] = r.map((function(e) {
                                return e.map((function(e) {
                                    return e > 1 ? 1 : e < 0 ? 0 : e
                                }))
                            }))
                        })), ["alpha", "rough", "metal", "sheen"].map((function(t) {
                            var r = e[t];
                            r.length && 3 === r.length && void 0 === r.find((function(e) {
                                return isNaN(e)
                            })) || (e[t] = console.error("Invalid data", t, "in", r, e) || d[t].slice()), e[t] = r.map((function(e) {
                                return e > 1 ? 1 : e < 0 ? 0 : e
                            }))
                        }))
                    }
                }, {
                    key: "getHex",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            r = i.a.HSVtoRGB.apply(i.a, u(this.gradientHSV[t]));
                        return e.RGBToHex.apply(e, u(r))
                    }
                }, {
                    key: "setGradientChannel",
                    value: function(e, t, r) {
                        var n = i.a.HSVtoRGB.apply(i.a, u(this.gradientHSV[e]));
                        n[t] = r, this.gradientHSV[e] = i.a.RGBtoHSV.apply(i.a, u(n))
                    }
                }, {
                    key: "setEmissiveChannel",
                    value: function(e, t, r) {
                        var n = i.a.HSVtoRGB.apply(i.a, u(this.emissiveHSV[e]));
                        n[t] = r, this.emissiveHSV[e] = i.a.RGBtoHSV.apply(i.a, u(n))
                    }
                }, {
                    key: "setGradientRGB",
                    value: function(e, t) {
                        this.gradientHSV[e] = i.a.RGBtoHSV.apply(i.a, u(t))
                    }
                }, {
                    key: "setEmissiveRGB",
                    value: function(e, t) {
                        this.emissiveHSV[e] = i.a.RGBtoHSV.apply(i.a, u(t))
                    }
                }, {
                    key: "calculateDiffs",
                    value: function() {
                        this.diffs = this.getDiffs()
                    }
                }, {
                    key: "getDiffs",
                    value: function() {
                        var e = this,
                            t = this.gradientHSV,
                            r = this.emissiveHSV,
                            n = {
                                gradient: {
                                    h: [t[1][0] - t[0][0], t[1][0] - t[2][0]],
                                    s: [t[1][1] - t[0][1], t[1][1] - t[2][1]],
                                    v: [t[1][2] - t[0][2], t[1][2] - t[2][2]]
                                },
                                emissive: {
                                    h: [r[1][0] - r[0][0], r[1][0] - r[2][0]],
                                    s: [r[1][1] - r[0][1], r[1][1] - r[2][1]],
                                    v: [r[1][2] - r[0][2], r[1][2] - r[2][2]]
                                }
                            };
                        return ["metal", "sheen", "rough", "alpha"].map((function(t) {
                            n[t] = [e[t][1] - e[t][0], e[t][1] - e[t][2]]
                        })), n
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e(this)
                    }
                }, {
                    key: "matchesNonParameters",
                    value: function(e) {
                        return this.rough.toString() === e.rough.toString() && this.metal.toString() === e.metal.toString() && this.sheen.toString() === e.sheen.toString() && this.rough.toString() === e.rough.toString()
                    }
                }, {
                    key: "matchesGradient",
                    value: function(e) {
                        return this.gradient.toString() === e.toString()
                    }
                }, {
                    key: "matchesEmissive",
                    value: function(e) {
                        return this.emissive.toString() === e.emissive.toString()
                    }
                }, {
                    key: "matches",
                    value: function(e) {
                        return this.matchesNonParameters(e) && this.matchesEmissive(e) && this.matchesGradient(e.gradient)
                    }
                }, {
                    key: "toDB",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (t || confirm("Overwrite " + CK.Options.shaders[this.presetID].name)) {
                            var r = {
                                low: e.RGBToHex.apply(e, u(this.gradient[0])),
                                mid: e.RGBToHex.apply(e, u(this.gradient[1])),
                                high: e.RGBToHex.apply(e, u(this.gradient[2])),
                                name: this.name,
                                surface: this.surface,
                                grp: this.group || null,
                                display_order: this.displayOrder ? parseInt(this.displayOrder) : 0,
                                inherit: this.inherit || null
                            };
                            this.inherit || Object.assign(r, {
                                emissive_simple: this.simpleEmissive,
                                emissive_complex: this.complexEmissive,
                                emissive_low: e.RGBToHex.apply(e, u(this.emissive[0])),
                                emissive_mid: e.RGBToHex.apply(e, u(this.emissive[1])),
                                emissive_high: e.RGBToHex.apply(e, u(this.emissive[2])),
                                alpha_low: this.alpha[0],
                                alpha_mid: this.alpha[1],
                                alpha_high: this.alpha[2],
                                skin: this.skin ? 1 : 0,
                                eye: this.eye ? 1 : 0,
                                rough_min: this.rough[0] || null,
                                rough_mid: this.rough[1] || null,
                                rough_max: this.rough[2] || null,
                                metal_min: this.metal[0] || null,
                                metal_mid: this.metal[1] || null,
                                metal_max: this.metal[2] || null,
                                sheen_min: this.sheen[0] || null,
                                sheen_mid: this.sheen[1] || null,
                                sheen_max: this.sheen[2] || null
                            });
                            var n = {};
                            for (var i in r) null != r[i] && (n[i] = r[i]);
                            return this.presetID ? (console.log("updating", this.presetID, n), Debug.TableEditor.updateRow("shaders", this.presetID, n).then((function() {
                                return console.log("success")
                            }))) : (console.log("adding new row", n), Debug.TableEditor.insertRow("shaders", n).then((function() {
                                return console.log("success")
                            })))
                        }
                    }
                }, {
                    key: "toJson",
                    value: function() {
                        var e = this,
                            t = {
                                gradient: this.gradient.map((function(e) {
                                    return e.map((function(e) {
                                        return parseInt(e)
                                    }))
                                })),
                                simpleEmissive: this.simpleEmissive,
                                complexEmissive: this.complexEmissive,
                                emissive: this.emissive.map((function(e) {
                                    return e.map((function(e) {
                                        return parseInt(e)
                                    }))
                                })),
                                rough: this.rough,
                                name: this.name,
                                skin: this.skin,
                                surfaceID: this.surfaceID,
                                presetID: this.presetID,
                                flatLighting: this.flatLighting,
                                alpha: this.alpha,
                                eye: this.eye
                            };
                        return ["metal", "sheen"].map((function(r) {
                            e[r] && (e[r][0] || e[r][1] || e[r][2]) && (t[r] = e[r])
                        })), ["metal", "sheen", "rough"].map((function(e) {
                            t[e] && t[e].map((function(e) {
                                return e.toFixed(2)
                            }))
                        })), t
                    }
                }, {
                    key: "hasChanged",
                    value: function() {
                        return !!this.isCopy || !(this.originalKey === this.key || this.parent.key === this.key)
                    }
                }, {
                    key: "getKey",
                    value: function() {
                        if (!this._key) {
                            var e = this.toJson();
                            delete e.name, delete e.presetID, this._key = JSON.stringify(e)
                        }
                        return this._key
                    }
                }, {
                    key: "changed",
                    value: function() {
                        delete this._key, delete this.thumb
                    }
                }, {
                    key: "updateMaterial",
                    value: function(e) {
                        var t = this.gradient,
                            r = this.emissiveHSV.map((function(e) {
                                return i.a.HSVtoRGB.apply(i.a, u(e))
                            })),
                            n = this.rough,
                            a = this.sheen,
                            s = this.metal,
                            l = this.alpha,
                            c = t,
                            h = r[2],
                            d = i.a.RGBtoHSV.apply(i.a, u(h)),
                            f = [0, 1, .635],
                            p = i.a.HSVInterpolate(d, f, .5),
                            m = i.a.HSVtoRGB.apply(i.a, u(p)),
                            v = i.a.HSVtoRGB.apply(i.a, f),
                            g = r[1],
                            y = n[0],
                            b = n[1],
                            k = n[2],
                            w = a[0],
                            S = a[1],
                            C = a[2],
                            _ = s[0],
                            R = s[1],
                            T = Math.round(1 / l[0]) - 1,
                            M = Object.keys(CK.display.eyeTypes || {}).sort((function(e, t) {
                                return CK.display.eyeTypes[e].index - CK.display.eyeTypes[t].index
                            }));
                        (isNaN(T) || T < 0 || T >= M.length) && (T = 0);
                        var x = M[T],
                            P = l[1] * Math.PI * 2;
                        e.setUniform("iris0", o(RK.Vec3, u(c[0])).divideScalar(255)), e.setUniform("iris1", o(RK.Vec3, u(c[1])).divideScalar(255)), e.setUniform("iris2", o(RK.Vec3, u(c[2])).divideScalar(255)), e.setUniform("sclera0", o(RK.Vec3, u(v)).divideScalar(255)), e.setUniform("sclera1", o(RK.Vec3, u(m)).divideScalar(255)), e.setUniform("sclera2", o(RK.Vec3, u(h)).divideScalar(255)), e.setUniform("irisDepth", y), e.setUniform("corneaBulge", b), e.setUniform("irisSize", k), e.setUniform("eyeConvergence", w), e.setUniform("eyeLookH", S), e.setUniform("eyeLookV", C), e.setUniform("limbus", _), e.setUniform("eyeGlow", R), e.setUniform("pupil", o(RK.Vec3, u(g)).divideScalar(255)), e.setUniform("irisRotate", P);
                        var O = "/static/textures/character/eye/iris_".concat(x, ".png"),
                            K = function(t) {
                                e.setUniform("irisTexture", t)
                            };
                        CK.Resources.loaded(O) ? K(CK.Resources.getNow(O)) : CK.Resources.getResource(O).then((function(e) {
                            return K(e)
                        }));
                        var A = "/static/textures/character/eye/sclera.png",
                            E = function(t) {
                                e.setUniform("scleraTexture", t)
                            };
                        CK.Resources.loaded(A) ? E(CK.Resources.getNow(A)) : CK.Resources.getResource(A).then((function(e) {
                            return E(e)
                        }))
                    }
                }, {
                    key: "emissive",
                    get: function() {
                        var e = this;
                        return (this.skin ? [
                            [33, 0, 0],
                            [43, 0, 0],
                            [47, 0, 0],
                            [0, 0, 0, 0]
                        ] : this.complexEmissive || this.eye ? this.emissiveHSV.map((function(e) {
                            return i.a.HSVtoRGB.apply(i.a, u(e))
                        })) : this.gradientHSV.map((function(t) {
                            return i.a.HSVtoRGB(t[0], t[1], e.simpleEmissive)
                        }))).map((function(e) {
                            return e.map((function(e) {
                                return Math.round(e)
                            })).map((function(e) {
                                return e < 0 ? 0 : e > 255 ? 255 : e
                            }))
                        }))
                    },
                    set: function(e) {
                        e = e || [
                            [0, 0, 0],
                            [0, 0, 0],
                            [0, 0, 0]
                        ], this.emissiveHSV = e.map((function(e) {
                            return i.a.RGBtoHSV.apply(i.a, u(e))
                        }))
                    }
                }, {
                    key: "gradient",
                    get: function() {
                        var e = this.gradientHSV.map((function(e) {
                            return i.a.HSVtoRGB.apply(i.a, u(e))
                        }));
                        return this.skin ? (e[3][0] = 255, e[3][1] = 0, e[3][2] = 0, e[3][3] = 54) : e[3][3] = 0, e.map((function(e) {
                            return e.map((function(e) {
                                return Math.round(e)
                            })).map((function(e) {
                                return e < 0 ? 0 : e > 255 ? 255 : e
                            }))
                        }))
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this.gradient
                    }
                }, {
                    key: "physical",
                    get: function() {
                        for (var e = [], t = 0; t < 3; t++) e.push([255 * this.rough[t], 255 * this.metal[t], 255 * this.alpha[t], 255 * this.sheen[t]]);
                        return e.push([0, 0, 0, 0]), e
                    }
                }, {
                    key: "hex",
                    get: function() {
                        return this.getHex()
                    }
                }, {
                    key: "surface",
                    get: function() {
                        return this.surfaceObj.name
                    }
                }, {
                    key: "surfaceObj",
                    get: function() {
                        return n.a.surfaces[this.surfaceID]
                    }
                }, {
                    key: "parent",
                    get: function() {
                        return n.a.shaders[this.presetID] || console.warn("Missing shader response parent", this.presetID) || n.a.shaders[29]
                    }
                }, {
                    key: "key",
                    get: function() {
                        return this.getKey()
                    }
                }]) && h(t.prototype, r), s && h(t, s), e
            }();

        function p(e, t) {
            return void 0 !== e ? e : t
        }
        window.ShaderResponse = f
    },
    66: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return m
        }));
        var n = r(19),
            i = r(21),
            a = r(37),
            s = r(10),
            o = r(5),
            l = r(46);

        function u() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function c(e, t, r) {
            return (c = u() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new(Function.bind.apply(e, n));
                return r && h(i, r.prototype), i
            }).apply(null, arguments)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function f(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function p(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var m = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, u;
            return t = e, u = [{
                key: "init",
                value: function() {
                    var e = this;
                    if (!this.initialized) {
                        this.initialized = !0, this.meshes = {}, this._thumbs = {}, this._queue = [], this.readyForNext = !1;
                        var t = n.a.getCamera(o.a.getPart(3287)),
                            r = n.a.getSphereEnvMap("glass_passage_1k");
                        i.a.getResources([t, r]).then((function(t) {
                            var r = f(t, 2),
                                n = r[0],
                                i = r[1],
                                a = new RK.EnvironmentLight(new RK.Color(1, 1, 1), 1);
                            a.map = i, a.mapWidth = i.width, a.saturationScale = 0;
                            var o = new RK.AmbientLight;
                            o.intensity = .1;
                            var l = new RK.DirectionalLight;
                            l.intensity = .7, l.position.copy(new RK.Vec3(9, 10, 2)), e._scene = new RK.Scene, e._scene.add(a), e._scene.add(o), e._scene.add(l), e.cam = new RK.PerspectiveCamera(21.2, 1, 2, 100), e.cam.position.fromArray(n.position), e.cam.rotation.reorder("YZX"), e.cam.rotation.fromArray(n.rotation), e.cam.updateProjectionMatrix(), e.cam.scale.set(-1, -1, 1), s.a.register((function() {
                                return e.makeNextThumbnail()
                            }), "end", "Shaderball"), e.readyForNext = !0
                        }))
                    }
                }
            }, {
                key: "getMesh",
                value: function(e) {
                    var t = this;
                    if (e in this.meshes) return Promise.resolve(this.meshes[e]);
                    var r = o.a.getPartBySlotAndName("shaderball", e) || console.error("Could not find shaderball", e);
                    return this.meshes[e] = i.a.getResources([n.a.getTexture(r, !1, "mask", r.bakedTextureSize), n.a.getTexture(r, !1, "nrml", r.bakedTextureSize), n.a.getMeshPath(r)]).then((function(r) {
                        if (r && r[0] && r[1] && r[2]) {
                            var n = f(r, 3),
                                i = n[0],
                                s = n[1],
                                o = n[2],
                                l = new SK.Physical({
                                    options: {
                                        surface: !0,
                                        uv: !0,
                                        normalMap: !0,
                                        env: !0,
                                        occlusion: !1,
                                        preBakedOcclusion: !0,
                                        lights: !0,
                                        sunOcclusion: !1
                                    },
                                    textures: {
                                        normalMap: s,
                                        surfaceGradientMap: i
                                    }
                                });
                            l.setUniform("surfaceGradientMap", i), t.meshes[e] = a.a.makeMesh(o, l)
                        } else t.meshes[e] = !1;
                        return t.meshes[e]
                    })), this.meshes[e]
                }
            }, {
                key: "getMeshForResponse",
                value: function(e) {
                    var t = o.a.surfaces[e.surfaceID];
                    return this.getMesh(t.name)
                }
            }, {
                key: "getTexture",
                value: function(e) {
                    return CK.Resources.loaded(e) ? Promise.resolve(CK.Resources.getNow(e)) : CK.Resources.getResource(e)
                }
            }, {
                key: "getTexturesForResponse",
                value: function(e) {
                    var t = this;
                    if (e.eye) {
                        var r = Object.keys(CK.display.eyeTypes || {}).sort((function(e, t) {
                            return CK.display.eyeTypes[e].index - CK.display.eyeTypes[t].index
                        })).map((function(e) {
                            return "/static/textures/character/eye/iris_".concat(e, ".png")
                        })).slice();
                        r.push("/static/textures/character/eye/sclera.png");
                        var n = r.map((function(e) {
                            return t.getTexture(e)
                        }));
                        return Promise.all(n)
                    }
                    return Promise.resolve([])
                }
            }, {
                key: "renderThumbnailNow",
                value: function(e) {
                    var t = o.a.surfaces[e.surfaceID].name,
                        r = this.meshes[t];
                    if (r) return this.render(r, e)
                }
            }, {
                key: "renderThumbnail",
                value: function(e) {
                    var t = this,
                        r = this.getMeshForResponse(e),
                        n = this.getTexturesForResponse(e);
                    return Promise.all([r, n]).then((function(r) {
                        var n = r[0];
                        return t._queue.length || CK.GameLoop.requestRenderRefresh(), n && n.material ? t.render(n, e) : (t.readyForNext = !0, "/static/img/missingball.png")
                    }))
                }
            }, {
                key: "render",
                value: function(e, t) {
                    if (e && e.material) {
                        t.gradient || console.error("No gradient in", t);
                        var r = e.material;
                        return r.setUniform("emissiveRange", l.a.getVec4Array(t.emissive)), r.setUniform("alphaRange", c(RK.Vec3, d(t.alpha))), r.setUniform("sheenRange", c(RK.Vec3, d(t.sheen))), r.setUniform("roughnessRange", c(RK.Vec3, d(t.rough))), r.setUniform("metalnessRange", c(RK.Vec3, d(t.metal))), r.setUniform("diffuseColorRange", l.a.getVec4Array(t.gradient)), r.eye = t.eye, t.eye && t.updateMaterial(r), this._scene.add(e), this.renderer.setSize(128, 128), this.renderer.render(this._scene, this.cam), this._scene.remove(e), this.readyForNext = !0, t.thumb = this.renderer.domElement.toDataURL("image/png"), t.thumbCallbacks && (t.thumbCallbacks.map((function(e) {
                            return e()
                        })), delete t.thumbCallbacks), t.thumb
                    }
                }
            }, {
                key: "requestBall",
                value: function(e, t) {
                    this._queueUp(e, t)
                }
            }, {
                key: "_queueUp",
                value: function(e, t) {
                    if (e.thumb) return t();
                    e.thumbCallbacks ? e.thumbCallbacks.push(t) : (e.thumbCallbacks = [t], this._queue.unshift(e))
                }
            }, {
                key: "clearQueue",
                value: function() {
                    (this._queue || []).map((function(e) {
                        delete e.thumbCallbacks
                    })), this._queue = []
                }
            }, {
                key: "makeNextThumbnail",
                value: function() {
                    if (this._queue.length && this.readyForNext) {
                        this.readyForNext = !1;
                        var e = this._queue.pop();
                        this.renderThumbnail(e)
                    }
                }
            }, {
                key: "getBallNow",
                value: function(e) {
                    return e.thumb ? e.thumb : this._queue && this._queue.length || !this.readyForNext ? void 0 : (e.thumb = this.renderThumbnailNow(e), e.thumbCallbacks && (console.warn("Why are there uncalled shader ball generation callbacks?", e.thumbCallbacks), e.thumbCallbacks.map((function(e) {
                        return e()
                    })), delete e.thumbCallbacks), e.thumb)
                }
            }, {
                key: "renderer",
                get: function() {
                    return CK.renderManagerOffscreen.renderer
                }
            }], (r = null) && p(t.prototype, r), u && p(t, u), e
        }();
        m.size = 128
    }
});
//# sourceMappingURL=dev/creationkit.js.map