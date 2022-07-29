var hapjq = jQuery;

!function(a) {
    a.fn.hap = function(b) {
        function c(a) {
            var b = "https:" == window.location.protocol ? "https:" : "http:", c = (window.screen.width - 600) / 2, d = (window.screen.height - 300) / 2, e = Rc.title || "", f = Rc.description || "", g = Rc.thumb || "", h = Rc.share || window.location.href, i;
            HAPUtils.relativePath(g) || (g = HAPUtils.qualifyURL(g));
            if ("facebook" == a) {
                if (HAPUtils.isEmpty(Fb)) {
                    alert("facebookAppId has not been set in settings!");
                    return;
                }
                window.FB && FB.ui({
                    method: "share_open_graph",
                    action_type: "og.shares",
                    action_properties: JSON.stringify({
                        object: {
                            "og:url": h,
                            "og:title": e,
                            "og:description": f,
                            "og:image": g
                        }
                    })
                });
            } else "twitter" == a ? i = b + "//twitter.com/share?url=" + encodeURIComponent(h) + "&text=" + encodeURIComponent(e) : "tumblr" == a && (i = b + "//www.tumblr.com/share/link?url=" + encodeURIComponent(h) + "&amp;name=" + encodeURIComponent(e) + "&amp;description=" + encodeURIComponent(f));
            i && window.open(i, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left=" + c + ",top=" + d);
        }
        function d(a) {
            !function(a, b, c) {
                var d = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "//connect.facebook.net/en_US/sdk.js", 
                d.parentNode.insertBefore(a, d));
            }(document, "script", "facebook-jssdk");
            window.fbAsyncInit = function() {
                FB.init({
                    appId: a,
                    xfbml: !0,
                    version: "v2.9"
                });
            };
        }
        function e(a) {
            if (_b) {
                if (!Tc) {
                    if ("touchstart" == a.type) {
                        if (a = a.originalEvent.touches, !(a && 0 < a.length)) return !1;
                    } else a.preventDefault();
                    Tc = !0;
                    cc.on(Xc, function(a) {
                        a: {
                            if ("touchmove" == a.type) {
                                if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches; else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches; else break a;
                                if (1 < b.length) break a;
                                b = b[0];
                            } else b = a;
                            a.preventDefault();
                            f(b);
                        }
                    }).on(Yc, function(a) {
                        a: if (Tc) {
                            Tc = !1;
                            cc.off(Xc).off(Yc);
                            if ("touchend" == a.type) {
                                if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches; else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches; else break a;
                                if (1 < b.length) break a;
                                b = b[0];
                            } else b = a;
                            a.preventDefault();
                            f(b);
                        }
                    });
                }
                return !1;
            }
        }
        function f(a) {
            ed ? a = fd.setProgress(a) : (a = a.pageX - db.offset().left, 0 > a ? a = 0 : a > Uc && (a = Uc), 
            a = Math.max(0, Math.min(1, a / Uc)));
            if (nc && Nc) try {
                nc.currentTime = a * nc.duration;
            } catch (b) {
                console.log(b);
            }
        }
        function g(a) {
            if (ed) b = fd.trackTooltip(a), c = X[0].getBoundingClientRect(), d = gd[0].getBoundingClientRect(), 
            a = parseInt(d.top - c.top - dd.outerHeight() - 10), e = parseInt(d.left - c.left - dd.outerWidth() / 2 + gd.outerWidth() / 2); else {
                b = a.pageX - db.offset().left;
                if (!HAPUtils.isNumber(b)) return !1;
                0 > b ? b = 0 : b > Uc && (b = Uc);
                var b = Math.max(0, Math.min(1, b / Uc)), c = X[0].getBoundingClientRect(), d = gd[0].getBoundingClientRect(), e = parseInt(a.pageX - bc.scrollLeft() - c.left - dd.outerWidth() / 2);
                a = parseInt(d.top - c.top - dd.outerHeight(), 10);
            }
            e + dd.outerWidth() > X.width() ? e = X.width() - dd.outerWidth() : 0 > e && (e = 0);
            0 > a + c.top && (a = parseInt(d.top - c.top + dd.outerHeight() + 15));
            dd.css({
                left: e + "px",
                top: a + "px"
            }).show();
            if (!HAPUtils.isNumber(b)) return !1;
            nc && (c = nc.duration, a = b * c, HAPUtils.isNumber(a) && HAPUtils.isNumber(c) && dd.html(HAPUtils.formatTime(a) + " / " + HAPUtils.formatTime(c)));
        }
        function h(a) {
            if (_b) {
                if (!jd) {
                    if ("touchstart" == a.type) {
                        if (a = a.originalEvent.touches, !(a && 0 < a.length)) return !1;
                    } else a.preventDefault();
                    jd = !0;
                    cc.on(Xc, function(a) {
                        a: {
                            if ("touchmove" == a.type) {
                                if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches; else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches; else break a;
                                if (1 < b.length) break a;
                                b = b[0];
                            } else b = a;
                            a.preventDefault();
                            j(b);
                        }
                    }).on(Yc, function(a) {
                        a: if (jd) {
                            jd = !1;
                            cc.off(Xc).off(Yc);
                            if ("touchend" == a.type) {
                                if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches; else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches; else break a;
                                if (1 < b.length) break a;
                                b = b[0];
                            } else b = a;
                            a.preventDefault();
                            j(b);
                        }
                    });
                }
                return !1;
            }
        }
        function i() {
            if (!_b) return !1;
            0 < Ib ? (id = Ib, Ib = 0) : Ib = id;
            k();
        }
        function j(a) {
            kd ? (Ib = Math.max(0, Math.min(1, (a.pageY - ib.offset().top) / ld)), Ib = 1 - Ib) : Ib = Math.max(0, Math.min(1, (a.pageX - ib.offset().left) / ld));
            k();
        }
        function k(b) {
            
            "undefined" !== typeof b && (Ib = b);
            nc && (nc.volume = Ib);
            b = kd ? "height" : "width";
            
            HAPUtils.isNumber(ld) || (ld = kd ? ib.height() : ib.width());
            jb.css(b, Ib * ld + "px");
            0 == Ib ? gb.find("i").removeClass("hap-icon-volume-up hap-icon-volume-down").addClass("hap-icon-volume-off") : 0 < Ib && .5 > Ib ? gb.find("i").removeClass("hap-icon-volume-off hap-icon-volume-up").addClass("hap-icon-volume-down") : gb.find("i").removeClass("hap-icon-volume-off hap-icon-volume-down").addClass("hap-icon-volume-up");
            a($b).trigger("volumeChange", {
                instance: $b,
                instanceName: vb,
                volume: Ib
            });
        }
        function l(a) {
            var b = kd ? a.pageY - ib.offset().top : a.pageX - ib.offset().left;
            0 > b ? b = 0 : b > ld && (b = ld);
            b = Math.max(0, Math.min(1, b / ld));
            if (!HAPUtils.isNumber(b)) return !1;
            kd && (b = 1 - b);
            b = parseInt(100 * b, 10);
            dd.text(b + " %");
            b = X[0].getBoundingClientRect();
            var c = hb[0].getBoundingClientRect();
            if (kd) {
                var d = parseInt(c.left - b.left - dd.outerWidth() / 2 + hb.outerWidth() / 2);
                a = parseInt(a.pageY - bc.scrollTop() - b.top - dd.outerHeight() - 10);
            } else d = parseInt(a.pageX - bc.scrollLeft() - b.left - dd.outerWidth() / 2), a = parseInt(c.top - b.top - dd.outerHeight());
            0 > a + b.top && (a = parseInt(c.top - b.top + dd.outerHeight() + 15));
            dd.css({
                left: d + "px",
                top: a + "px"
            }).show();
        }
        function m(b) {
            if (!_b) return !1;
            b = a(b.currentTarget);
            yc = !0;
            var c = $.find(".hap-playlist-item").index(b.closest(".hap-playlist-item"));
            cd.processPlaylistRequest(c);
            Yb && W("hap_play_count", b.closest(".hap-playlist-item"));
            a($b).trigger("clickPlaylistItem", {
                instance: $b,
                instanceName: vb
            });
        }
        function n(b) {
            b.preventDefault();
            if (!_b) return !1;
            b = a(b.currentTarget);
            if (Mc && Mc.find(".hap-playlist-item-content").is(b)) return !1;
            b.closest(".hap-playlist-item").addClass("hap-playlist-item-selected");
            a($b).trigger("overPlaylistItem", {
                instance: $b,
                instanceName: vb
            });
        }
        function o(b) {
            b.preventDefault();
            if (!_b) return !1;
            b = a(b.currentTarget);
            if (Mc && Mc.find(".hap-playlist-item-content").is(b)) return !1;
            b.closest(".hap-playlist-item").removeClass("hap-playlist-item-selected");
            a($b).trigger("outPlaylistItem", {
                instance: $b,
                instanceName: vb
            });
        }
        function p(d) {
            if (!_b) return !1;
            d = a(d.currentTarget);
            if (d.hasClass("hap-playlist-toggle") || d.hasClass("hap-playlist-close")) "function" === typeof $b.togglePlaylist && $b.togglePlaylist(); else if (d.hasClass("hap-prev-toggle")) $b.previousMedia(); else if (d.hasClass("hap-playback-toggle")) $b.togglePlayback(); else if (d.hasClass("hap-next-toggle")) Yb && Mc && W("hap_skip_count", Mc), 
            $b.nextMedia(); else if (d.hasClass("hap-loop-toggle")) zb = !zb, cd.setLooping(zb), 
            zb ? qb.find("i").addClass("hap-contr-btn-hover") : qb.find("i").removeClass("hap-contr-btn-hover"); else if (d.hasClass("hap-random-toggle")) Ab = !Ab, 
            cd.setRandom(Ab), Ab ? rb.find("i").addClass("hap-contr-btn-hover") : rb.find("i").removeClass("hap-contr-btn-hover"); else if (d.hasClass("hap-sort-alpha")) $b.sort("title", Vc); else if (d.hasClass("hap-popup-toggle")) if ("function" === typeof hapOpenPopup) hapOpenPopup($b, b); else {
                d = document.createElement("script");
                d.type = "text/javascript";
                d.src = HAPUtils.qualifyURL(ub + "js/popup.js?");
                d.onload = d.onreadystatechange = function() {
                    this.readyState && "complete" != this.readyState || hapOpenPopup($b, b);
                };
                d.onerror = function() {
                    alert("Error loading " + this.src);
                };
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(d, e);
            } else if (d.hasClass("hap-volume-toggle")) sb && 0 != hb.length || i(); else if (d.hasClass("hap-share-item")) {
                if (!Oc) return !1;
                c(d.attr("data-type").toLowerCase());
            }
        }
        function q() {
            Mc && (a($b).trigger("playlistItemEnabled", {
                instance: $b,
                instanceName: vb,
                item: Mc
            }), Mc.removeClass("hap-playlist-item-selected"), Mc = null);
        }
        function r(b) {
            Mc && q();
            Mc = $.children(".hap-playlist-item").eq(b);
            if (Mc.length) {
                Mc.addClass("hap-playlist-item-selected");
                if (Cb && 0 < Jc) {
                    if (!yc) if ("undefined" !== typeof mCustomScrollbar) "horizontal" == Db ? Z.mCustomScrollbar("scrollTo", parseInt(Mc.position().left), {
                        scrollInertia: 500
                    }) : Z.mCustomScrollbar("scrollTo", parseInt(Mc.position().top), {
                        scrollInertia: 500
                    }); else var c = setInterval(function() {
                        "undefined" !== typeof mCustomScrollbar && (clearInterval(c), "horizontal" == Db ? Z.mCustomScrollbar("scrollTo", parseInt(Mc.position().left), {
                            scrollInertia: 500
                        }) : Z.mCustomScrollbar("scrollTo", parseInt(Mc.position().top), {
                            scrollInertia: 500
                        }));
                    }, 500);
                    yc = !1;
                }
                a($b).trigger("playlistItemDisabled", {
                    instance: $b,
                    instanceName: vb,
                    item: Mc
                });
            }
        }
        function s(b) {
            ac = !0;
            bb.show();
            Lc ? S() : $.find(".hap-playlist-item").remove();
            var c = Y.length ? Y.find(b) : a(b);
            if (0 == c.length) //return alert("Failed playlist selection! Playlist - " + b + " does not exist. Check activePlaylist option in settings!"), 
            K(), !1;
            wb = b;
            a($b).trigger("playlistStartLoad", {
                instance: $b,
                instanceName: vb
            });
            Ac = null;
            b = c.find(".hap-playlist-options");
            void 0 == b.attr("data-thumb-global") || HAPUtils.isEmpty(b.attr("data-thumb-global")) || (Ac = b.attr("data-thumb-global"));
            if (void 0 != c.attr("data-type") && "xml" == c.attr("data-type")) y(u(c)); else {
                var d, e, f;
                c.children(".hap-playlist-item").each(function() {
                    e = a(this);
                    f = e.attr("data-type");
                    RegExp(/^audio$/).test(f) && e.hasClass("hap-playlist-item-ready") ? Ic.push(e.clone()) : RegExp(/^hls$/).test(f) && e.hasClass("hap-playlist-item-ready") ? Ic.push(e.clone()) : (d = u(e), 
                    Ic.push(d));
                });
                Jc = Ic.length;
                t();
            }
        }
        function t() {
            Gc++;
            if (Gc > Jc - 1) G(); else {
                var a = Ic[Gc], b = a.type;
                b ? RegExp(/^soundcloud$/).test(b) ? (qc = a.limit || 1e3, rc = [], pc ? C(!0, a.path) : B(a.path)) : RegExp(/^podcast$/).test(b) ? (qc = a.limit || 1e3, 
                z(a)) : RegExp(/^itunes_podcast_music$/).test(b) ? A(a) : RegExp(/^folder$/).test(b) ? v(a) : /^gdrive-folder$/.test(b) ? w(a) : RegExp(/^hls$/).test(b) ? (Hc.push(a), 
                t()) : RegExp(/^audio$/).test(b) && (Hc.push(a), t()) : (Hc.push(a), t());
            }
        }
        function u(a) {
            var b = {};
            b.origclasses = a.attr("class");
            b.type = a.attr("data-type");
            b.website = a.attr("data-website");
            void 0 == a.attr("data-media-id") || HAPUtils.isEmpty(a.attr("data-media-id")) || (b.mediaId = parseInt(a.attr("data-media-id"), 10));
            a.attr("data-hls") && !HAPUtils.isEmpty(a.attr("data-hls")) && (b.hls = a.attr("data-hls"));
            a.attr("data-mp3") && !HAPUtils.isEmpty(a.attr("data-mp3")) && (b.mp3 = a.attr("data-mp3"));
            a.attr("data-wav") && !HAPUtils.isEmpty(a.attr("data-wav")) && (b.wav = a.attr("data-wav"));
            if ("audio" == b.type) {
                if (void 0 != a.attr("data-path") && !HAPUtils.isEmpty(a.attr("data-path"))) {
                    var c = a.attr("data-path"), d = c.substr(c.lastIndexOf(".") + 1);
                    "mp3" == d.toLowerCase() || "wav" == d.toLowerCase() ? b[d.toLowerCase()] = c : b.mp3 = c;
                }
            } else void 0 == a.attr("data-path") || HAPUtils.isEmpty(a.attr("data-path")) || (b.path = b.id = a.attr("data-path"));
            void 0 != a.attr("data-limit") && !HAPUtils.isEmpty(a.attr("data-limit")) && HAPUtils.isNumber(a.attr("data-limit")) && 0 != Math.abs(parseInt(a.attr("data-limit"), 10)) && (b.limit = Math.abs(parseInt(a.attr("data-limit"), 10)));
            Ac ? b.thumb = Ac : void 0 == a.attr("data-thumb") || HAPUtils.isEmpty(a.attr("data-thumb")) ? a.find(".hap-playlist-thumb img").length && (b.thumb = a.find(".hap-playlist-thumb img").attr("src")) : b.thumb = a.attr("data-thumb");
            void 0 == a.attr("data-thumb-default") || HAPUtils.isEmpty(a.attr("data-thumb-default")) || (b.thumbDefault = a.attr("data-thumb-default"));
            void 0 == a.attr("data-thumb-quality") || HAPUtils.isEmpty(a.attr("data-thumb-quality")) || (b.thumbQuality = a.attr("data-thumb-quality"));
            void 0 == a.attr("data-title") || HAPUtils.isEmpty(a.attr("data-title")) ? a.find(".hap-playlist-title").length && (b.title = a.find(".hap-playlist-title").html()) : b.title = a.attr("data-title");
            void 0 == a.attr("data-description") || HAPUtils.isEmpty(a.attr("data-description")) || (b.description = a.attr("data-description"));
            void 0 == a.attr("data-artist") || HAPUtils.isEmpty(a.attr("data-artist")) || (b.artist = a.attr("data-artist"));
            void 0 == a.attr("data-album") || HAPUtils.isEmpty(a.attr("data-album")) || (b.album = a.attr("data-album"));
            void 0 == a.attr("data-download") || HAPUtils.isEmpty(a.attr("data-download")) || (b.download = a.attr("data-download"));
            void 0 != a.attr("data-id3") && (b.id3 = !0);
            void 0 == a.attr("data-start") || HAPUtils.isEmpty(a.attr("data-start")) || (b.start = Math.abs(a.attr("data-start")));
            void 0 == a.attr("data-end") || HAPUtils.isEmpty(a.attr("data-end")) || (b.end = Math.abs(a.attr("data-end")));
            void 0 != a.attr("data-playback-rate") && (b.playbackRate = 1, HAPUtils.isEmpty(a.attr("data-playback-rate")) || (b.playbackRate = Math.abs(a.attr("data-playback-rate"))));
            void 0 == a.attr("data-link") || HAPUtils.isEmpty(a.attr("data-link")) || (b.link = a.attr("data-link"), 
            b.target = "_blank", void 0 == a.attr("data-target") || HAPUtils.isEmpty(a.attr("data-target")) || (b.target = a.attr("data-target")));
            void 0 == a.attr("data-share") || HAPUtils.isEmpty(a.attr("data-share")) || (b.share = a.attr("data-share"));
            void 0 == a.attr("data-sort") || HAPUtils.isEmpty(a.attr("data-sort")) || (b.sort = a.attr("data-sort"));
            a.find(".hap-custom-playlist-item-content").length && (b.customContent = a.find(".hap-custom-playlist-item-content").html());
            void 0 != a.attr("data-load-more") && (Xb = !0);
            return b;
        }
        function v(b) {
            if ("file:" == window.location.protocol) return alert("Reading files from folders locally is not possible! This requires online server connection."), 
            t(), !1;
            var c = b.path.replace(/\/\//g, "/"), d = ub + "includes/folder_parser.php";
            c = {
                dir: c
            };
            b.id3 && (kc = jc = Hc.length - 1);
            a.ajax({
                type: "GET",
                url: d,
                data: c,
                dataType: "json"
            }).done(function(c) {
                var d, e = c.length;
                b.sort && ("filename-asc" == b.sort ? HAPUtils.keysrt(c, "filename") : "filename-desc" == b.sort ? HAPUtils.keysrt(c, "filename", !0) : "date-asc" == b.sort ? HAPUtils.keysrt(c, "filemtime") : "date-desc" == b.sort && HAPUtils.keysrt(c, "filemtime", !0));
                for (d = 0; d < e; d++) {
                    var f = c[d];
                    var g = a.extend(!0, {}, b);
                    g.type = "audio";
                    var h = f.fullpath;
                    g[f.extension] = h;
                    delete g.path;
                    "undefined" === typeof g.download && (g.download = h);
                    "undefined" === typeof g.share && (g.share = h);
                    g.title || (g.title = f.filename);
                    Hc.push(g);
                    jc++;
                }
                b.id3 ? x() : t();
            }).fail(function(a, b, c) {
                console.log("Error processFolder: " + a, b, c);
                t();
            });
        }
        function w(b) {
            if ("file:" == window.location.protocol) return alert("Reading files from folders locally is not possible! This requires online server connection."), 
            t(), !1;
            if (HAPUtils.isEmpty(Hb)) return alert("gDriveAppId has not been set in settings!"), 
            t(), !1;
            a.ajax({
                url: "https://www.googleapis.com/drive/v3/files?q='" + b.path + "'+in+parents&pageSize=1000&key=" + Hb,
                dataType: "jsonp"
            }).done(function(c) {
                var d, e = c.files.length, f = [], g = [];
                for (d = 0; d < e; d++) {
                    var h = c.files[d];
                    /mp3|mpeg|mpeg3|wav/.test(h.mimeType) ? g.push(h) : /jpg|jpeg|png/.test(h.mimeType) && f.push(h);
                }
                HAPUtils.keysrt(g, "name");
                HAPUtils.keysrt(f, "name");
                e = g.length;
                for (d = 0; d < e; d++) {
                    h = g[d];
                    c = a.extend(!0, {}, b);
                    c.type = "audio";
                    var i = h.name.substr(h.name.lastIndexOf(".") + 1);
                    c[i.toLowerCase()] = "https://drive.google.com/uc?export=view&id=" + h.id;
                    delete c.path;
                    "undefined" === typeof c.download && (c.download = "https://drive.google.com/uc?export=download&id=" + h.id);
                    "undefined" === typeof c.share && (c.share = "https://drive.google.com/open?id=" + h.id);
                    !c.thumb && f[d] && (c.thumb = "https://drive.google.com/uc?export=view&id=" + f[d].id);
                    c.title || (c.title = h.name.substr(0, h.name.lastIndexOf(".")));
                    Hc.push(c);
                }
                t();
            }).fail(function(a, b, c) {
                console.log("Error processGdriveFolder: " + a, b, c);
                t();
            });
        }
        function x() {
            if ("undefined" === typeof jsmediatags) {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.src = HAPUtils.qualifyURL(ub + "js/jsmediatags.min.js");
                a.onload = a.onreadystatechange = function() {
                    this.readyState && "complete" != this.readyState || x();
                };
                a.onerror = function() {
                    alert("Error loading " + this.src);
                };
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b);
            } else {
                var c = Hc[jc];
                jsmediatags.read(c.mp3 || c.wav, {
                    onSuccess: function(a) {
                        console.log(a);
                        var b = a.tags;
                        a = b.picture;
                        b.artist && (c.artist = b.artist);
                        b.title && (c.title = b.title);
                        b.album && (c.album = b.album);
                        if (a) {
                            b = "";
                            var d, e = a.data.length;
                            for (d = 0; d < e; d++) b += String.fromCharCode(a.data[d]);
                            c.thumb = "data:" + a.format + ";base64," + window.btoa(b);
                        }
                        jc--;
                        jc > kc ? x() : t();
                    },
                    onError: function(a) {
                        console.log("ID3 error: ", a.type, a.info);
                        jc--;
                        jc > kc ? x() : t();
                    }
                });
            }
        }
        function y(b) {
            a.ajax({
                type: "GET",
                url: b.path,
                dataType: "html"
            }).done(function(b) {
                var c, d, e;
                a(b).children(".hap-playlist-item").each(function() {
                    c = a(this);
                    d = c.attr("data-type");
                    RegExp(/^audio/).test(d) && c.hasClass("hap-playlist-item-ready") ? Ic.push(c) : RegExp(/^hls/).test(d) && c.hasClass("hap-playlist-item-ready") ? Ic.push(c) : (e = u(c), 
                    Ic.push(e));
                });
                Jc = Ic.length;
                t();
            }).fail(function(a, b, c) {
                console.log("Error processXml: " + a, b, c);
                t();
            });
        }
        function z(b) {
            if ("file:" == window.location.protocol) alert("Using Podcast locally is not possible! This requires online server connection!"), 
            t(); else {
                var c = ic + "?url=" + encodeURIComponent(b.path), d = qc, e = qc;
                Xb && (d = 1e3, oc = []);
                a.ajax({
                    url: c,
                    dataType: "json",
                    cache: !1
                }).done(function(c) {
                    var f = HAPUtils.parseXML(c.contents), g, h, i, j = 0;
                    a(f).find("image").length && a(f).find("image").attr("href") ? i = a(f).find("image").attr("href") : a(c.contents).find("itunes\\:image").length && a(c.contents).find("itunes\\:image").attr("href") && (i = a(c.contents).find("itunes\\:image").attr("href"));
                    a(f).find("item").each(function() {
                        if (j >= d) return !1;
                        g = a(this);
                        h = a.extend(!0, {}, b);
                        h.type = "audio";
                        h.path = g.find("enclosure").attr("url");
                        !h.title && g.find("title").length && (h.title = g.find("title").text());
                        h.artist || (g.find("author").length ? h.artist = g.find("author").text() : g.find("itunes\\:author").length && (h.artist = g.find("itunes\\:author").text()));
                        g.find("pubDate").length && (h.pubdate = g.find("pubDate").text());
                        !h.description && g.find("description").length && (h.description = g.find("description").text());
                        !h.duration && g.find("itunes\\:duration").length && (h.duration = g.find("itunes\\:duration").text());
                        h.thumb || (g.find("image").length && g.find("image").attr("href") ? h.thumb = g.find("image").attr("href") : g.find("itunes\\:image").length && g.find("itunes\\:image").attr("href") ? h.thumb = g.find("itunes\\:image").attr("href") : i && (h.thumb = i));
                        h.download || (h.download = h.path);
                        !h.share && g.find("link").length && (h.share = g.find("link").text());
                        j < e ? Hc.push(h) : oc.push(h);
                        j++;
                    });
                    t();
                }).fail(function(a, b, c) {
                    console.log("Error processPodcast: " + a, b, c);
                    t();
                });
            }
        }
        function A(b) {
            "file:" == window.location.protocol ? (alert("Using Podcast locally is not possible! This requires online server connection!"), 
            t()) : (encodeURIComponent(b.path), a.ajax({
                url: b.path
            }).done(function(c) {
                c = a("<div></div>").html(c);
                var d, e, f, g = 0, h = b.limit || 1e3;
                if (c.find(".lockup.product.podcast").length) {
                    var i = c.find(".lockup.product.podcast").find("img");
                    i.length && (i.attr("src-swap-high-dpi").length ? f = i.attr("src-swap-high-dpi") : i.attr("src-swap").length && (f = i.attr("src-swap")));
                }
                c.find("tr.podcast-episode").each(function() {
                    if (g >= h) return !1;
                    d = a(this);
                    e = a.extend(!0, {}, b);
                    e.type = "audio";
                    e.path = d.attr("audio-preview-url");
                    !e.title && d.attr("preview-title").length && (e.title = d.attr("preview-title"));
                    !e.artist && d.attr("preview-artist").length && (e.artist = d.attr("preview-artist"));
                    !e.description && d.find(".episode-info").length && (e.description = d.find(".episode-info").next().text());
                    !e.thumb && f && (e.thumb = f);
                    e.share || (e.share = b.path);
                    Hc.push(e);
                    g++;
                });
                t();
            }).fail(function(a, b, c) {
                console.log("Error processPodcast: " + a, b, c);
                t();
            }));
        }
        function B(a) {
            if ("file:" == window.location.protocol) alert("Using SoundCloud locally is not possible! This requires online server connection!"), 
            t(); else {
                if (HAPUtils.isEmpty(Gb)) return alert("soundCloudAppId has not been set! Skipping Soundcloud url: " + a), 
                t(), !1;
                var b = document.createElement("script");
                b.src = "https://connect.soundcloud.com/sdk.js";
                var c = document.getElementsByTagName("script")[0];
                c.parentNode.insertBefore(b, c);
                var d = setInterval(function() {
                    window.SC && (d && clearInterval(d), SC.initialize({
                        client_id: Gb
                    }), pc = !0, C(!0, a));
                }, 100);
            }
        }
        function C(b, c) {
            SC.get(b ? "https://api.soundcloud.com/resolve.json?url=" + c + "&client_id=" + Gb : c, {
                limit: qc,
                linked_partitioning: 1
            }, function(b, d) {
                if (d) {
                    for (console.log("Error getSoundCloudPage: " + d); rc.length; ) Hc.push(rc.splice(0, 1)[0]);
                    t();
                } else {
                    if ("track" == b.kind) F(b); else if ("playlist" == b.kind) {
                        var e, f = b.tracks.length;
                        if (rc.length + f >= qc) {
                            f = qc - rc.length;
                            var g = !0;
                        }
                        for (e = 0; e < f; e++) F(b.tracks[e]);
                    } else if (b.collection) for (f = b.collection.length, rc.length + f >= qc && (f = qc - rc.length, 
                    g = !0), e = 0; e < f; e++) F(b.collection[e]); else {
                        if (b.username) {
                            e = b.uri;
                            e = /likes/.test(c) ? e + "/likes" : /favorites/.test(c) ? e + "/favorites" : e + "/tracks";
                            C(!1, e);
                            return;
                        }
                        if (a.isArray(b)) for (f = b.length, rc.length + f >= qc && (f = qc - rc.length, 
                        g = !0), e = 0; e < f; e++) F(b[e]);
                    }
                    oc = b.next_href ? b.next_href : null;
                    if (b.next_href && !g) C(!1, b.next_href); else {
                        for (;rc.length; ) Hc.push(rc.splice(0, 1)[0]);
                        t();
                    }
                }
            });
        }
        function D() {
            if (!oc) return !1;
            ac = !0;
            bb.show();
            Hc = [];
            Hc = oc.splice(0, qc);
            0 == oc.length && (oc = null);
            G();
        }
        function E() {
            if (!oc) return !1;
            ac = !0;
            bb.show();
            Gc = 0;
            Hc = [];
            Ic = [];
            Jc = 1;
            C(!1, oc);
        }
        function F(b) {
            if (b.streamable && b.stream_url) {
                var c = a.extend(!0, {}, Ic[Gc]);
                c.type = "audio";
                b.duration && (c.duration = b.duration);
                c.path = b.stream_url + "?client_id=" + Gb;
                c.download || (b.downloadable && b.download_url ? c.download = c.path.replace(/\/stream\\?/, "/download") : delete c.download);
                !c.title && b.title && (c.title = b.title);
                !c.description && b.description && (c.description = b.description);
                !c.website && b.website && (c.website = b.website);
                !c.thumb && b.artwork_url && (c.thumb = b.artwork_url, c.thumbQuality && (c.thumb = c.thumb.replace("large.jpg", c.thumbQuality)));
                c.favoritingsCount = parseInt(b.favoritings_count ? b.favoritings_count : 0, 10);
                c.playbackCount = parseInt(b.playback_count ? b.playback_count : 0, 10);
                c.hotness = c.favoritingsCount + c.playbackCount;
                !c.share && b.permalink_url && (c.share = b.permalink_url);
                rc.push(c);
            }
        }
        function G() {
            var c, d = Hc.length, e, f = 0;
            for (c = 0; c < d; c++) {
                Dc && f++;
                var g = Hc[c];
                var h = g.type;
                if (g instanceof a && g.hasClass("hap-playlist-item")) {
                    h = g;
                    if (Dc) {
                        i ? i.after(h) : Bc ? h.appendTo($) : $.children("div").eq(Cc).before(h);
                        var i = h;
                    } else h.appendTo($);
                    var j = h.find(".hap-playlist-item-content");
                } else {
                    g.origclasses || (g.origclasses = "hap-playlist-item");
                    h = a('<li class="' + g.origclasses + '"/>').attr("data-type", h);
                    Dc ? (i ? i.after(h) : Bc ? h.appendTo($) : $.children("div").eq(Cc).before(h), 
                    i = h) : h.appendTo($);
                    j = a('<div class="hap-playlist-item-content"/>').appendTo(h);
                    if (-1 != a.inArray("thumb", Lb) && (e = g.thumb || g.thumbDefault)) {
                        var k = new Image();
                        k.className = "hap-hidden";
                        k.onload = function() {
                            this.className = "hap-visible";
                        };
                        k.src = e;
                        a('<span class="hap-playlist-thumb"></span>').append(k).appendTo(j);
                        h.attr("data-thumb", e);
                    }
                    -1 != a.inArray("title", Lb) && (e = U(g), a('<span class="hap-playlist-title">' + e + "</span>").appendTo(j));
                    "undefined" !== g.mediaId && h.attr("data-media-id", g.mediaId);
                    (g.path || g.mp3) && h.attr("data-mp3", g.path || g.mp3);
                    g.hls && h.attr("data-hls", g.hls);
                    g.title && h.attr("data-title", g.title);
                    g.artist && h.attr("data-artist", g.artist);
                    g.website && h.attr("data-website", g.website);
                    g.thumb && h.attr("data-thumb", g.thumb);
                    g.thumbDefault && h.attr("data-thumb-default", g.thumbDefault);
                    g.thumbQuality && h.attr("data-thumb-quality", g.thumbQuality);
                    g.description && h.attr("data-description", g.description);
                    g.share && h.attr("data-share", g.share);
                    g.download && h.attr("data-download", g.download);
                    g.album && h.attr("data-album", g.album);
                    g.id3 && h.attr("data-id3", g.id3);
                    g.start && h.attr("data-start", g.start);
                    g.end && h.attr("data-end", g.end);
                    g.playbackRate && h.attr("data-playback-rate", g.playbackRate);
                    g.link && (h.attr("data-link", g.link), g.target && h.attr("data-target", g.target));
                    Yb && Zb ? (e = a('<div class="hap-stats"></div>'), j.after(e), k = a('<div class="hap-play-count" data-tooltip="' + b.tooltipStatPlays + '"><i class="hap-icon hap-icon-play-circle"></i><span>0</span></div>'), 
                    e.append(k), k = a('<div class="hap-like-count" data-tooltip="' + b.tooltipStatLikes + '"><i class="hap-icon hap-icon-heart"></i><span>0</span></div>'), 
                    e.append(k), k = ec && g.download ? a('<a href="' + g.download + '" class="hap-download-count" download data-tooltip="' + b.tooltipStatDownloads + '"><i class="hap-icon hap-icon-arrow-alt-circle-down"></i><span>0</span></a>') : a('<div class="hap-download-count hap-no-download" data-tooltip="' + b.tooltipStatDownloads + '"><i class="hap-icon hap-icon-arrow-alt-circle-down"></i><span>0</span></div>'), 
                    e.append(k)) : Pb && ec && g.download && (e = a('<a class="hap-download" href="' + g.download + '" download title="' + Ub + '"><i class="hap-icon hap-icon-download"></i></a>'), 
                    j.after(e));
                    Qb && g.link && (k = a('<a class="hap-link" href="' + g.link + '" target="' + (g.target || "_blank") + '"><i class="hap-icon hap-icon-link"></i></a>'), 
                    j.after(k));
                    g.customContent && (h.append(g.customContent), delete g.customContent);
                }
                if (zc && (j.on("click", m), !sb)) j.on("mouseenter", n).on("mouseleave", o);
            }
            Lc = $;
            H(!0);
           // console.log("playlistLength = ", Jc);
            Dc ? (c = cd.getCounter(), cd.setPlaylistItems(Jc, !1), Cc <= c && (Bc || cd.reSetCounter(c + f)), 
            Fc ? (Fc = !1, Ec && !sb && (yb = !0), cd.setCounter(Cc, !1)) : Ec && cd.setCounter(Cc, !1)) : cd.setPlaylistItems(Jc);
            K();
            a($b).trigger("playlistEndLoad", {
                instance: $b,
                instanceName: vb
            });
        }
        function H(b) {
            Jc = $.children(".hap-playlist-item").length;
            if (zc) {
                var c = 0, d, e, f, g = [];
                $.find(".hap-playlist-item").each(function() {
                    d = a(this);
                    Yb && b && !d.hasClass("hap-stats-set") && void 0 != d.attr("data-media-id") && g.push(d.attr("data-media-id"));
                    e = d.find(".hap-playlist-title");
                    e.length && (e.html(), Bb && (f = HAPUtils.formatNumber(c) + Sb, d.find(".hap-playlist-title-num").length ? d.find(".hap-playlist-title-num").html(f) : e.before(a('<span class="hap-playlist-title-num">' + f + "</span>"))));
                    c++;
                });
                Yb && b && g.length && W("hap_all_count", null, g);
            }
        }
        function I() {
            var b = 0, c, d, e;
            $.find(".hap-playlist-item").each(function() {
                c = a(this);
                d = c.find(".hap-playlist-title");
                e = HAPUtils.formatNumber(b) + Sb;
                c.find(".hap-playlist-title-num").length ? c.find(".hap-playlist-title-num").html(e) : d.before(a('<span class="hap-playlist-title-num">' + e + "</span>"));
                b++;
            });
        }
        function J(a) {
            if ("undefined" === typeof mCustomScrollbar) if (window.playlistScrollLoading) var c = setInterval(function() {
                playlistScrollLoading || (clearInterval(c), J(a));
            }, 100); else {
                window.playlistScrollLoading = !0;
                var d = document.createElement("script");
                d.type = "text/javascript";
                //d.src = HAPUtils.qualifyURL(ub + "js/jquery.mCustomScrollbar.concat.min.js");
                d.onload = d.onreadystatechange = function() {
                    this.readyState && "complete" != this.readyState || (J(a), window.playlistScrollLoading = !1);
                };
                d.onerror = function() {
                    alert("Error loading " + this.src);
                };
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(d, e);
            } else a.mCustomScrollbar({
                axis: "horizontal" == Db ? "x" : "y",
                theme: b.playlistScrollTheme,
                scrollInertia: 0,
                mouseWheel: {
                    normalizeDelta: !0,
                    deltaFactor: 50,
                    preventDefault: !0
                },
                keyboard: {
                    enable: !1
                },
                advanced: {
                    autoExpandHorizontalScroll: !0
                },
                callbacks: {
                    onOverflowYNone: function() {
                        a.find(".mCSB_container").addClass("hap-mCSB_full");
                    },
                    onOverflowY: function() {
                        a.find(".mCSB_container").removeClass("hap-mCSB_full");
                    },
                    onTotalScroll: function() {
                        Xb && oc && !ac && (ac = !0, bb.show(), -1 !== oc.indexOf("soundcloud") ? E() : D());
                    }
                }
            });
        }
        function K() {
            bb.hide();
            ac = !1;
            if (!_b) {
                _b = !0;
                Cb && !xc && (J(Z), xc = !0);
                T();
                X.css("opacity", 1);
                k(Ib);
                if (b.autoOpenPopup && !b.isPopup) if ("function" === typeof hapOpenPopup) hapOpenPopup($b, b); else {
                    var c = document.createElement("script");
                    c.type = "text/javascript";
                    c.src = HAPUtils.qualifyURL(ub + "js/popup.js?");
                    c.onload = c.onreadystatechange = function() {
                        this.readyState && "complete" != this.readyState || hapOpenPopup($b, b);
                    };
                    c.onerror = function() {
                        alert("Error loading " + this.src);
                    };
                    var d = document.getElementsByTagName("script")[0];
                    d.parentNode.insertBefore(c, d);
                }
                a($b).trigger("setupDone", {
                    instance: $b,
                    instanceName: vb
                });
            }
            Eb && !wc && L();
            !Kc && !Dc && 0 < Jc && (c = b.activeItem, c > Jc - 1 && (c = Jc - 1), -1 < c && cd.setCounter(c, !1), 
            Kc = !0);
            Dc = !1;
        }
        function L() {
            if ("function" === typeof a.fn.sortable) $.sortable({
                handle: ".hap-playlist-item-content",
                revert: !1,
                update: function(a, b) {
                    if (Mc) {
                        var c = Mc.closest(".hap-playlist-item").index();
                        cd.reSetCounter(c);
                    }
                    Bb && I();
                }
            }), wc = !0; else {
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.src = HAPUtils.qualifyURL(ub + "js/jquery-ui.min.js");
                b.onload = b.onreadystatechange = function() {
                    if (!this.readyState || "complete" == this.readyState) {
                        var a = document.createElement("script");
                        a.type = "text/javascript";
                        a.src = HAPUtils.qualifyURL(ub + "js/jquery.ui.touch-punch.min.js");
                        a.onload = a.onreadystatechange = function() {
                            this.readyState && "complete" != this.readyState || ($.sortable({
                                revert: !1,
                                update: function(a, b) {
                                    if (Mc) {
                                        var c = Mc.closest(".hap-playlist-item").index();
                                        cd.reSetCounter(c);
                                    }
                                    Bb && I();
                                }
                            }), wc = !0);
                        };
                        a.onerror = function() {
                            alert("Error loading " + this.src);
                        };
                        var b = document.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b);
                    }
                };
                b.onerror = function() {
                    alert("Error loading " + this.src);
                };
                var c = document.getElementsByTagName("script")[0];
                c.parentNode.insertBefore(b, c);
            }
        }
        function M() {
            var c = 0, d, e, f;
            $.find(".hap-playlist-item").each(function() {
                a(this).find(".hap-playlist-item-content").each(function() {
                    f = a(this).on("click", m);
                    if (!sb) f.on("mouseenter", n).on("mouseleave", o);
                    d = f.find(".hap-playlist-title");
                    d.length && (d.html(), Bb && (e = HAPUtils.formatNumber(c) + Sb, f.find(".hap-playlist-title-num").length ? f.find(".hap-playlist-title-num").html(e) : d.before(a('<span class="hap-playlist-title-num">' + e + "</span>"))));
                });
                c++;
            });
            Jc = c;
            0 < Jc && cd.setPlaylistItems(Jc);
            Lc = $;
            Eb && !wc && L();
            if (!_b) {
                _b = !0;
                Cb && !xc && (J(Z), xc = !0);
                k(Ib);
                X.css("opacity", 1);
                if (b.autoOpenPopup && !b.isPopup) if ("function" === typeof hapOpenPopup) hapOpenPopup($b, b); else {
                    var g = document.createElement("script");
                    g.type = "text/javascript";
                    g.src = HAPUtils.qualifyURL(ub + "js/popup.js?");
                    g.onload = g.onreadystatechange = function() {
                        this.readyState && "complete" != this.readyState || hapOpenPopup($b, b);
                    };
                    g.onerror = function() {
                        alert("Error loading " + this.src);
                    };
                    var h = document.getElementsByTagName("script")[0];
                    h.parentNode.insertBefore(g, h);
                }
                a($b).trigger("setupDone", {
                    instance: $b,
                    instanceName: vb
                });
            }
            bb.hide();
            ac = !1;
            a($b).trigger("playlistEndLoad", {
                instance: $b,
                instanceName: vb
            });
            g = b.activeItem;
            g > Jc - 1 && (g = Jc - 1);
            -1 < g && cd.setCounter(g, !1);
        }
        function N() {
            sc = new Hls();
            tc = Hls.isSupported();
            uc = !0;
            sc.on(Hls.Events.MEDIA_ATTACHED, function() {
                sc.loadSource(Pc);
            });
            sc.on(Hls.Events.ERROR, function(a, b) {
                if (b.fatal) switch (b.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.log("fatal network error encountered, try to recover");
                    sc.startLoad();
                    break;

                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log("fatal media error encountered, try to recover");
                    sc.recoverMediaError();
                    break;

                  default:
                    sc.destroy();
                }
            });
        }
        function O() {
            lc || (mc = a(document.createElement("audio")).attr("preload", xb), nc = mc[0], 
            lc = !0);
            if (Rc.hls) {
                if (Pc = Rc.hls, !uc) {
                    if ("undefined" === typeof Hls) {
                        var c = document.createElement("script");
                        c.type = "text/javascript";
                        c.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
                        c.onload = c.onreadystatechange = function() {
                            this.readyState && "complete" != this.readyState || (N(), O());
                        };
                        c.onerror = function() {
                            alert("Error loading " + this.src);
                        };
                        var d = document.getElementsByTagName("script")[0];
                        d.parentNode.insertBefore(c, d);
                    } else N(), O();
                    return;
                }
            } else Pc = gc && Rc.mp3 ? Rc.mp3 : hc && Rc.wav ? Rc.wav : Rc.path;
            nc.src = Pc;
            mc.on("ended", function() {
                Q();
            }).on("canplay", function(a) {}).on("canplaythrough", function(a) {}).on("loadedmetadata", function() {
                Rc.playbackRate && (nc.playbackRate = Number(Rc.playbackRate));
                b.resumeTime ? (nc.currentTime = b.resumeTime, delete b.resumeTime) : Rc.start && (nc.currentTime = Rc.start);
                var a = nc.duration;
                HAPUtils.isNumber(a) && ob.html(HAPUtils.formatTime(a));
            }).on("play", function() {
                Nc || (Nc = !0, Uc = db.width(), Sc && cancelAnimationFrame(Sc), Sc = requestAnimationFrame(P), 
                a($b).trigger("soundStart", {
                    instance: $b,
                    instanceName: vb,
                    counter: cd.getCounter()
                }));
                if (Rb && 1 < hap_mediaArr.length) {
                    var b, c = hap_mediaArr.length;
                    for (b = 0; b < c; b++) $b != hap_mediaArr[b].inst && hap_mediaArr[b].inst.pauseMedia();
                }
                pb.find("i").removeClass("hap-icon-play").addClass("hap-icon-pause");
                Qc = !0;
                a($b).trigger("soundPlay", {
                    instance: $b,
                    instanceName: vb,
                    counter: cd.getCounter()
                });
            }).on("pause", function() {
                pb.find("i").removeClass("hap-icon-pause").addClass("hap-icon-play");
                Qc = !1;
                a($b).trigger("soundPause", {
                    instance: $b,
                    instanceName: vb,
                    counter: cd.getCounter()
                });
            }).on("error", function(b) {
                a($b).trigger("soundError", {
                    instance: $b,
                    instanceName: vb,
                    counter: cd.getCounter()
                });
            });
            if (Wb) mc.on("timeupdate", function(b) {
                nc && a($b).trigger("soundProgress", {
                    instance: $b,
                    instanceName: vb,
                    duration: nc.duration,
                    time: nc.currentTime
                });
            });
            if ("hls" == Oc) {
                if ("file:" == window.location.protocol) return alert("Playing HLS requires server connection!"), 
                !1;
                if (tc) sc.attachMedia(nc); else if (nc.canPlayType("application/vnd.apple.mpegurl")) nc.src = Pc; else if (Rc.mp3) nc.src = Rc.mp3; else {
                    alert("This browser or device does not support HLS extension. Please use mp3 audio for playback!");
                    return;
                }
                yb && (c = nc.play(), void 0 !== c && c.then(function() {})["catch"](function(a) {}));
            } else yb && (c = nc.play(), void 0 !== c && c.then(function() {})["catch"](function(a) {}));
            nc.volume = Ib;
            yb = !0;
        }
        function P() {
            if (nc) {
                var a = nc.currentTime, b = nc.duration;
                if (HAPUtils.isNumber(a) && HAPUtils.isNumber(b)) {
                    nb.html(HAPUtils.formatTime(a));
                    ob.html(HAPUtils.formatTime(b));
                    if ("undefined" !== typeof nc.buffered && 0 != nc.buffered.length) {
                        try {
                            var c = nc.buffered.end(nc.buffered.length - 1);
                        } catch (d) {}
                        if (!isNaN(c)) var e = c / b;
                    }
                    ed ? fd.drawSeekbar(e, a, b) : (fb.width(a / b * Uc), e && eb.width(e * Uc));
                    Rc.end && a >= Rc.end && Q();
                }
            }
            Sc = requestAnimationFrame(P);
        }
        function Q() {
            a($b).trigger("soundEnd", {
                instance: $b,
                instanceName: vb,
                counter: cd.getCounter()
            });
            var b = Rc.start || 0;
            "next" == Kb ? $b.nextMedia() : "loop" == Kb ? (nc.currentTime = b, nc.play()) : "rewind" == Kb ? (nc.currentTime = b, 
            nc.pause()) : "stop" == Kb && nc.pause();
        }
        function R() {
            Sc && cancelAnimationFrame(Sc);
            tc && "hls" == Oc && sc.detachMedia();
            nc && (nc.pause(), nc.src = "");
            mc && mc.off("ended canplay canplaythrough loadedmetadata pause play error timeupdate");
            Vb && bd && bd.deactivate();
            nb.html("00:00");
            ob.html("00:00");
            lb.html("");
            mb.html("");
            fb.width(0);
            eb.width(0);
            Oc = null;
            Ec = Nc = Qc = !1;
            pb.find("i").removeClass("hap-icon-pause").addClass("hap-icon-play");
        }
        function S() {
            Oc && (R(), Mc && q());
            Eb && ($.sortable("destroy"), wc = !1);
            $.find(".hap-playlist-item").remove();
            wb = Lc = null;
            Kc = Fc = Dc = !1;
            Jc = 0;
            Gc = -1;
            Hc = [];
            Ic = [];
            cd.reSetCounter();
            Ac = null;
            kb.empty();
            oc = null;
            Vc = !1;
            ab.find("i").removeClass("hap-icon-sort-alpha-up").addClass("hap-icon-sort-alpha-down");
            a($b).trigger("destroyPlaylist", {
                instance: $b,
                instanceName: vb
            });
        }
        function T() {
            Uc = db.width();
            Vb && bd && bd.checkSize();
        }
        function U(a) {
            if (a.artist && !HAPUtils.isEmpty(a.artist) && a.title && !HAPUtils.isEmpty(a.title)) var b = a.artist + Tb + a.title; else a.title && !HAPUtils.isEmpty(a.title) ? b = a.title : a.artist && !HAPUtils.isEmpty(a.artist) && (b = a.artist);
            return b;
        }
        function V() {
            Rc.title && lb.html(Rc.title);
            Rc.artist && mb.html(Rc.artist);
            Vb && bd && bd.input(U(Rc));
            if ((!kb.children().length || !Ac) && kb.length) {
                var a = Rc.thumb || Rc.thumbDefault;
                if (kb.find("img").attr("src") != a) {
                    var b = new Image();
                    b.className = "hap-hidden";
                    b.onload = function() {
                        this.className = "hap-visible";
                    };
                    kb.empty();
                    kb[0].appendChild(b);
                    b.src = a;
                }
            }
        }
        function W(c, d, e) {
            if ("file:" != window.location.protocol) {
                if ("hap_all_count" == c) var f = [ {
                    name: "action",
                    value: c
                }, {
                    name: "media_id",
                    value: e
                } ]; else if ("hap_play_count" == c) f = [ {
                    name: "action",
                    value: c
                }, {
                    name: "media_id",
                    value: d.attr("data-media-id")
                }, {
                    name: "title",
                    value: d.attr("data-title")
                }, {
                    name: "artist",
                    value: d.attr("data-artist")
                }, {
                    name: "website",
                    value: d.attr("data-website")
                }, {
                    name: "currentTime",
                    value: nc.currentTime
                }, {
                    name: "duration",
                    value: nc.duration
                } ]; else if ("hap_download_count" == c || "hap_like_count" == c || "hap_skip_count" == c) f = [ {
                    name: "action",
                    value: c
                }, {
                    name: "media_id",
                    value: d.attr("data-media-id")
                }, {
                    name: "title",
                    value: d.attr("data-title")
                }, {
                    name: "website",
                    value: d.attr("data-website")    
                }, {
                    name: "artist",
                    value: d.attr("data-artist")
                } ];
                a.ajax({
                    url: b.ajax_url ? b.ajax_url : ub + "includes/statistics.php",
                    type: "post",
                    data: f,
                    dataType: "json"
                }).done(function(a) {
                    console.log("response ", a);
                    if (a) if ("hap_like_count" == c && a.like) d.find(".hap-like-count span").html(HAPUtils.nFormatter(parseInt(a.like, 10), 1)); else if ("hap_download_count" == c && a.download) d.find(".hap-download-count span").html(HAPUtils.nFormatter(parseInt(a.download, 10), 1)); else if ("hap_play_count" == c && a.play) d.find(".hap-play-count span").html(HAPUtils.nFormatter(parseInt(a.play, 10), 1)); else if ("hap_all_count" == c) {
                        var b, e = a.length;
                        for (b = 0; b < e; b++) {
                            var f = a[b];
                            var g = $.find(".hap-playlist-item[data-media-id=" + f.media_id + "]").addClass("hap-stats-set");
                            g.find(".hap-like-count span").html(HAPUtils.nFormatter(parseInt(f.like, 10), 1));
                            g.find(".hap-download-count span").html(HAPUtils.nFormatter(parseInt(f.download, 10), 1));
                            g.find(".hap-play-count span").html(HAPUtils.nFormatter(parseInt(f.play, 10), 1));
                        }
                    }
                }).fail(function(a, b, c) {
                    console.log("Error getStats: " + a.responseText, b, c);
                });
            }
        }
        b = a.extend(!0, {}, {
            sourcePath: "",
            playlistItemContent: "",
            volume: .5,
            activeItem: 0,
            numberTitleSeparator: ".&nbsp;&nbsp;",
            artistTitleSeparator: "&nbsp;-&nbsp;",
            useNumbersInPlaylist: !1,
            preload: "auto",
            autoPlay: !1,
            loopingOn: !0,
            randomPlay: !1,
            sortableTracks: !1,
            togglePlaybackOnMultipleInstances: !0,
            mediaEndAction: "next",
            facebookAppId: "",
            usePlaylistScroll: !1,
            useKeyboardNavigationForPlayback: !1,
            useTitleScroll: !1,
            titleScrollSpeed: 1,
            titleScrollSeparator: " *** ",
            continousKey: "hap_continous_key123",
            useMediaSession: !0,
            downloadIconTitle: "Download",
            tooltipStatPlays: "Plays",
            tooltipStatLikes: "Likes",
            tooltipStatDownloads: "Downloads"
        }, b);
        var X = a(this);
        b.markup && X.append(b.markup);
        var Y = a(b.playlistList);
        X.find(".hap-playlist-holder");
        var Z = X.find(".hap-playlist-inner"), $ = X.find(".hap-playlist-content"), _ = X.find(".hap-playlist-filter-msg");
        X.find(".hap-share-holder");
        var ab = X.find(".hap-sort-alpha"), bb = X.find(".hap-preloader"), cb = X.find(".hap-popup-toggle"), db = X.find(".hap-progress-bg"), eb = X.find(".hap-load-level"), fb = X.find(".hap-progress-level"), gb = X.find(".hap-volume-toggle"), hb = X.find(".hap-volume-seekbar"), ib = X.find(".hap-volume-bg"), jb = X.find(".hap-volume-level");
        X.find(".hap-player-holder");
        var kb = X.find(".hap-player-thumb"), lb = X.find(".hap-player-title"), mb = X.find(".hap-player-artist"), nb = X.find(".hap-media-time-current"), ob = X.find(".hap-media-time-total"), pb = X.find(".hap-playback-toggle"), qb = X.find(".hap-loop-toggle"), rb = X.find(".hap-random-toggle");
        bb = X.find(".hap-preloader");
        var sb = HAPUtils.isMobile(), tb = HAPUtils.hasLocalStorage(), ub = b.sourcePath, vb = b.instanceName, wb = b.activePlaylist, xb = b.preload, yb = b.autoPlay, zb = b.loopingOn, Ab = b.randomPlay, Bb = b.useNumbersInPlaylist, Cb = b.usePlaylistScroll, Db = b.playlistScrollOrientation, Eb = sb ? !1 : b.sortableTracks, Fb = b.facebookAppId, Gb = b.soundCloudAppId, Hb = b.gDriveAppId, Ib = b.volume, Jb = b.useKeyboardNavigationForPlayback, Kb = b.mediaEndAction, Lb = b.playlistItemContent, Mb = b.continousPlayback && tb, Nb = b.continousKey, Ob = b.useMediaSession && "mediaSession" in navigator, Pb = b.createDownloadIconsInPlaylist, Qb = b.createLinkIconsInPlaylist, Rb = b.togglePlaybackOnMultipleInstances, Sb = b.numberTitleSeparator, Tb = b.artistTitleSeparator, Ub = b.downloadIconTitle, Vb = b.useTitleScroll, Wb = b.dispatchProgressEvent, Xb = b.loadMoreOnTotalScroll, Yb = b.useStatistics, Zb = b.showStatisticsIcons, $b = this, _b, ac;
        a("body");
        var bc = a(window), cc = a(document), dc, ec = HAPUtils.hasDownloadSupport(), fc = HAPUtils.isIOS();
        HAPUtils.isAndroid();
        var gc = HAPUtils.canPlayMp3(), hc = HAPUtils.canPlayWav();
        HAPUtils.volumeCanBeSet();
        var ic = ub + "includes/ba-simple-proxy.php", jc, kc, lc, mc, nc, oc, pc, qc, rc = [], sc, tc, uc, vc, wc, xc, yc, zc = !0, Ac, Bc, Cc, Dc, Ec, Fc, Gc = -1, Hc = [], Ic = [], Jc = 0, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc = !0;
        Lb = Lb.split(",").map(function(a) {
            return a.trim();
        });
        window.hap_data && (b.ajax_url = window.hap_data.ajax_url);
        //window.playlistScrollLoading = !1;
        //Cb && HAPUtils.checkCssExist(HAPUtils.qualifyURL(ub + "css/jquery.mCustomScrollbar.css"));
        "undefined" === typeof window.hap_mediaArr && (window.hap_mediaArr = []);
        window.hap_mediaArr.push({
            inst: $b,
            id: vb
        });
        sb && (yb = !1);
        zb && qb.find("i").addClass("hap-contr-btn-hover");
        Ab && rb.find("i").addClass("hap-contr-btn-hover");
        X.find(".hap-select").change(function() {
            $b.loadPlaylist(a(this).val());
        });
        0 == $.length && ($ = a("<div></div>"), Bb = Eb = Cb = zc = !1);
        if ("ontouchstart" in window) {
            var Wc = "touchstart.ap mousedown.ap";
            var Xc = "touchmove.ap mousemove.ap";
            var Yc = "touchend.ap mouseup.ap";
        } else window.PointerEvent ? (Wc = "pointerdown.ap", Xc = "pointermove.ap", Yc = "pointerup.ap") : (Wc = "mousedown.ap", 
        Xc = "mousemove.ap", Yc = "mouseup.ap");
        var Zc = X.find(".hap-media-title-mask"), $c = X.find(".hap-media-title");
        if (Vb) if ("undefined" === typeof HAPTextScroller) {
            var _c = document.createElement("script");
            _c.type = "text/javascript";
            _c.src = HAPUtils.qualifyURL(ub + "js/textscroller.js");
            _c.onload = _c.onreadystatechange = function() {
                this.readyState && "complete" != this.readyState || (bd = new HAPTextScroller({
                    settings: b,
                    mask: Zc,
                    container: $c
                }), Rc && bd.input(U(Rc)));
            };
            _c.onerror = function() {
                alert("Error loading " + this.src);
            };
            var ad = document.getElementsByTagName("script")[0];
            ad.parentNode.insertBefore(_c, ad);
        } else var bd = new HAPTextScroller({
            settings: b,
            mask: Zc,
            container: $c
        });
        X.find(".hap-search-filter").on("keyup.apfilter", function() {
            if (0 == Jc) return !1;
            var b = a(this).val(), c, d = 0;
            for (c = 0; c < Jc; c++) {
                var e = $.children(".hap-playlist-item").eq(c).find(".hap-playlist-title").html();
                -1 < e.indexOf(b) ? $.children(".hap-playlist-item").eq(c).show() : ($.children(".hap-playlist-item").eq(c).hide(), 
                d++);
            }
            d == Jc ? _.show() : _.hide();
        });
        HAPUtils.isEmpty(Fb) || "file:" == window.location.protocol || d(Fb);
        var cd = new HAPPlaylistManager(b);
        a(cd).on("HAPPlaylistManager.COUNTER_READY", function() {
            Oc && R();
            var b = cd.getCounter(), c = $.children(".hap-playlist-item").eq(b);
            Rc = u(c);
            //console.log(Rc);
            Oc = Rc.type;
            r(b);
            V();
            Ob && (navigator.mediaSession.metadata = new MediaMetadata({
                title: Rc.title,
                artist: Rc.artist || "",
                album: Rc.album || "",
                website: Rc.website || "",
                artwork: [ {
                    src: Rc.thumb || ""
                } ]
            }));
            O();
            a($b).trigger("soundRequest", {
                instance: $b,
                instanceName: vb,
                counter: b
            });
        });
        Mb && (window.attachEvent || window.addEventListener)(fc ? "pagehide" : "beforeunload", function(a) {
            window.event && (window.event.cancelBubble = !0);
            if (!_b || !Oc) return !1;
            a = {
                volume: Ib,
                activeItem: cd.getCounter(),
                resumeTime: $b.getCurrentTime(),
                autoPlay: Qc
            };
            localStorage.setItem(Nb, JSON.stringify(a));
        });
        Ob && (navigator.mediaSession.setActionHandler("play", function() {
            $b.playMedia();
        }), navigator.mediaSession.setActionHandler("pause", function() {
            $b.pauseMedia();
        }), navigator.mediaSession.setActionHandler("previoustrack", function() {
            $b.previousMedia();
        }), navigator.mediaSession.setActionHandler("nexttrack", function() {
            $b.nextMedia();
        }), navigator.mediaSession.setActionHandler("seekbackward", function() {
            $b.seekBackward();
        }), navigator.mediaSession.setActionHandler("seekforward", function() {
            $b.seekForward();
        }));
        var dd = X.find(".hap-tooltip");
        sb || ("static" == X.css("position"), 
        X.on("mouseenter", "[data-tooltip]", function(b) {
            var c = a(this);
            b = X[0].getBoundingClientRect();
            var d = c[0].getBoundingClientRect();
            dd.text(c.attr("data-tooltip"));
            var e = parseInt(d.top - b.top - dd.outerHeight());
            c = parseInt(d.left - b.left - dd.outerWidth() / 2 + c.outerWidth() / 2);
            c + dd.outerWidth() > X.width() ? c = X.width() - dd.outerWidth() : 0 > c && (c = 0);
            0 > e + b.top && (e = parseInt(d.top - b.top + dd.outerHeight() + 15));
            dd.css({
                left: c + "px",
                top: e + "px"
            }).show();
        }).on("mouseleave", "[data-tooltip]", function(a) {
            dd.hide();
        }));
        var ed = X.find(".hap-circle-player").length, fd;
        ed && HAPUtils.hasCanvas() && "undefined" === typeof HAPCirclePlayer && (_c = document.createElement("script"), 
        _c.type = "text/javascript", _c.src = HAPUtils.qualifyURL(ub + "js/circleplayer.js"), 
        _c.onload = _c.onreadystatechange = function() {
            this.readyState && "complete" != this.readyState || (fd = new HAPCirclePlayer({
                settings: b,
                parent: X
            }));
        }, _c.onerror = function() {
            alert("Error loading " + this.src);
        }, ad = document.getElementsByTagName("script")[0], ad.parentNode.insertBefore(_c, ad));
        var gd = ed ? X.find(".hap-progress-canvas") : X.find(".hap-seekbar");
        gd.on(Wc, function(a) {
            if (vc) return !1;
            e(a);
            return !1;
        });
        if (!sb) {
            var hd = function() {
                Nc && (gd.off(Xc, g).off("mouseout", hd), cc.off("mouseout", hd), dd.hide());
            };
            gd.on("mouseover", function() {
                Nc && void 0 == a(this).attr("data-hide-tooltip") && (gd.on(Xc, g).on("mouseout", hd), 
                cc.on("mouseout", hd));
            });
        }
        var id = .5, jd, kd = hb.hasClass("hap-volume-vertical"), ld = kd ? ib.height() : ib.width();
        0 > Ib ? Ib = 0 : 1 < Ib && (Ib = 1);
        0 != Ib && (id = Ib);
        hb.on(Wc, function(a) {
            h(a);
            return !1;
        });
        if (!sb) {
            var md = function() {
                hb.off(Xc, l).off("mouseout", md);
                cc.off("mouseout", md);
                dd.hide();
            };
            hb.on("mouseover", function() {
                hb.on(Xc, l).on("mouseout", md);
                cc.on("mouseout", md);
            });
        }
        if (b.disableRightClickOverPlayer) X.on("contextmenu", function() {
            return !1;
        });
        Jb && cc.keyup(function(b) {
            if (!_b) return !1;
            var c = b.keyCode, d = a(b.target);
            if (37 == c) $b.previousMedia(); else if (39 == c) $b.nextMedia(); else if (32 == c) {
                if (d.hasClass("hap-search-filter")) return !1;
                $b.togglePlayback();
                b.preventDefault();
            } else if (77 == c) {
                if (d.hasClass("hap-search-filter")) return !1;
                i();
            }
        });
        var nd = [ X.find(".hap-next-toggle"), X.find(".hap-prev-toggle"), X.find(".hap-playlist-toggle"), X.find(".hap-playlist-close"), X.find(".hap-share-item"), cb, ab, pb, qb, rb, gb ], od = nd.length, pd;
        for (pd = 0; pd < od; pd++) a(nd[pd]).css("cursor", "pointer").on("click", p);
        bc.on("resize", function() {
            if (!_b) return !1;
            dc && clearTimeout(dc);
            dc = setTimeout(T, 150);
        });
        Yb && (X.on("click", ".hap-like-count", function(b) {
            if (!_b || !Oc) return !1;
            b = a(this).closest(".hap-playlist-item");
            W("hap_like_count", b);
        }), X.on("click", ".hap-download-count:not(.hap-no-download)", function(b) {
            if (!_b || !Oc) return !1;
            b = a(this).closest(".hap-playlist-item");
            W("hap_download_count", b);
        }));
        this.playMedia = function() {
            if (!_b || !Oc || Qc) return !1;
            if (nc) {
                var a = nc.play();
                void 0 !== a && a.then(function() {})["catch"](function(a) {});
            }
        };
        this.pauseMedia = function() {
            if (!_b || !Oc || !Qc) return !1;
            nc && nc.pause();
        };
        this.checkMedia = function(a) {
            if (!_b || !Oc) return !1;
            a = a.toLowerCase();
            Qc && "pause" == a && nc && nc.pause();
        };
        this.togglePlayback = function() {
            if (!_b || !Oc) return !1;
            if (nc) if (nc.paused) {
                var a = nc.play();
                void 0 !== a && a.then(function() {})["catch"](function(a) {});
            } else nc.pause();
        };
        this.nextMedia = function() {
            if (!_b) return !1;
            0 != Jc && (Yb && Mc && W("hap_play_count", Mc), cd.advanceHandler(1, !0));
        };
        this.previousMedia = function() {
            if (!_b) return !1;
            0 != Jc && (Yb && Mc && W("hap_play_count", Mc), cd.advanceHandler(-1, !0));
        };
        this.loadMedia = function(b) {
            if (!_b || ac) return !1;
            if (0 != Jc) {
                if ("undefined" === typeof b) return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."), 
                !1;
                if ("string" === typeof b) {
                    var c;
                    $.find(".hap-playlist-item").each(function() {
                        if (a(this).find(".hap-playlist-title").html() == b) return b = a(this).index(), 
                        c = !0, !1;
                    });
                    if (!c) return alert('Track with title "' + b + '" doesnt exist. LoadMedia failed.'), 
                    !1;
                } else if ("number" === typeof b) {
                    if (0 > b || b > Jc - 1) return alert('Invalid track number. Track number  "' + b + '" doesnt exist. LoadMedia failed.'), 
                    !1;
                } else return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."), 
                !1;
                Yb && Mc && W("hap_play_count", Mc);
                cd.processPlaylistRequest(b);
            }
        };
        this.loadMore = function(a) {
            if (!_b || ac) return !1;
            ac = !0;
            bb.show();
            "soundcloud" == a ? E() : "podcast" == a && D();
        };
        this.setLoadMore = function(a) {
            Xb = a;
        };
        this.loadPlaylist = function(a) {
            if (!_b || ac) return !1;
            if ("undefined" === typeof a || HAPUtils.isEmpty(a)) return alert("loadPlaylist method requires id parameter. loadPlaylist failed."), 
            !1;
            if (wb == a) return !1;
            s(a);
        };
        this.addTrack = function(b, c, d, e) {
            if (!_b || ac) return !1;
            if ("undefined" === typeof b) return alert("addTrack method requires format parameter. AddTrack failed."), 
            !1;
            if ("undefined" === typeof c) return alert("addTrack method requires track parameter. AddTrack failed."), 
            !1;
            Ec = !1;
            "undefined" !== typeof d && (Ec = d);
            d = 1;
            var f = !1;
            if ("string" !== typeof c && "[object Object]" !== Object.prototype.toString.call(c)) if ("[object Array]" === Object.prototype.toString.call(c)) d = c.length, 
            f = !0; else return alert("addTrack method requires track as string, object or array parameter. AddTrack failed."), 
            !1;
            Cc = e;
            Bc = !1;
            Dc = !0;
            if (Lc) if ("undefined" !== typeof Cc) {
                if (0 > Cc || Cc > Jc) return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'), 
                !1;
                Cc == Jc && (Bc = !0);
            } else Bc = !0, Cc = Jc; else {
                if ("undefined" !== typeof Cc) {
                    if (0 != Cc) return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'), 
                    !1;
                } else Cc = 0;
                Bc = !0;
            }
            ac = !0;
            bb.show();
            Gc = -1;
            Hc = [];
            Ic = [];
            for (e = 0; e < d; e++) {
                var g = f ? c[e] : c;
                g = "html" == b ? a(a.parseHTML(g)) : g;
                Ic.push(g);
            }
            Jc = Ic.length;
            Fc = !1;
            Lc || (Fc = !0);
            Lc = $;
            t();
        };
        this.inputAudio = function(a) {
            if (!_b || ac) return !1;
            if ("undefined" === typeof a) return alert("inputAudio method requires data parameter. inputAudio failed."), 
            !1;
            Mc && q();
            0 < Jc && cd.reSetCounter();
            Rc = a;
            Oc = "audio";
            V();
            a.disableAutoPlay || (yb = !0);
            O();
        };
        this.removeTrack = function(b) {
            if (!_b || ac) return !1;
            if (0 != Jc) {
                if ("undefined" === typeof b) return alert("removeTrack method requires id parameter. removeTrack failed."), 
                !1;
                if ("string" === typeof b) {
                    var c = !1;
                    $.find(".hap-playlist-item").each(function() {
                        if (a(this).find(".hap-playlist-title").html() == b) return d = a(this), b = d.index(), 
                        c = !0, !1;
                    });
                    if (!c) return alert('Track with title "' + b + '" doesnt exist. RemoveTrack failed.'), 
                    !1;
                } else if ("number" === typeof b) {
                    b = parseInt(b, 10);
                    if (0 > b || b > Jc - 1) return alert('Invalid id number. Track number  "' + b + '" doesnt exist. RemoveTrack failed.'), 
                    !1;
                    var d = $.find(".hap-playlist-item").eq(b);
                } else return alert("removeTrack method requires either a id number or a track title to remove. removeTrack failed."), 
                !1;
                d.remove();
                H();
                if (0 < Jc) {
                    var e = cd.getCounter();
                    b == e ? (R(), cd.setPlaylistItems(Jc)) : (cd.setPlaylistItems(Jc, !1), b < e && cd.reSetCounter(cd.getCounter() - 1));
                } else S();
            }
        };
        this.sort = function(b, c) {
            if (!_b) return !1;
            if (0 != Jc) {
                if ("undefined" === typeof b) return console.log("Sort method requires type parameter. Sort method failed."), 
                !1;
                var d = b.toLowerCase();
                if ("title" == d) c ? ($.children(".hap-playlist-item").sort(function(b, c) {
                    return a(c).find(".hap-playlist-title").html() > a(b).find(".hap-playlist-title").html() ? 1 : -1;
                }).appendTo($), Vc = !1) : ($.children(".hap-playlist-item").sort(function(b, c) {
                    return a(c).find(".hap-playlist-title").html() < a(b).find(".hap-playlist-title").html() ? 1 : -1;
                }).appendTo($), Vc = !0); else if ("random" == d) {
                    for (d = $.children(); d.length; ) $.append(d.splice(Math.floor(Math.random() * d.length), 1));
                    Vc = !1;
                } else return console.log("Sort method requires type parameter. Sort method failed."), 
                !1;
                Vc ? ab.find("i").removeClass("hap-icon-sort-alpha-up").addClass("hap-icon-sort-alpha-down") : ab.find("i").removeClass("hap-icon-sort-alpha-down").addClass("hap-icon-sort-alpha-up");
                Mc && (d = Mc.closest(".hap-playlist-item").index(), cd.reSetCounter(d));
                Bb && I();
            }
        };
        this.destroyInstance = function() {
            bc && bc.off("resize");
            hb && hb.off();
            gd && gd.off();
            R();
            Cb && (Z.mCustomScrollbar("destroy"), xc = !1);
            Eb && ($.sortable("destroy"), wc = !1);
        };
        this.destroyMedia = function() {
            if (!_b) return !1;
            _b && Oc && (Mc && q(), R(), cd.reSetCounter());
        };
        this.destroyPlaylist = function() {
            if (!_b) return !1;
            S();
        };
        this.setPlaybackRate = function(a) {
            if (!_b || !Oc) return !1;
            nc && (nc.playbackRate = Number(a));
        };
        this.toggleRandom = function(a) {
            if (!_b || "undefined" === typeof cd) return !1;
            Ab = "undefined" !== typeof a ? a : !Ab;
            cd.setRandom(Ab);
            Ab ? rb.find("i").addClass("hap-contr-btn-hover") : rb.find("i").removeClass("hap-contr-btn-hover");
        };
        this.toggleLoop = function(a) {
            if (!_b || "undefined" === typeof cd) return !1;
            zb = "undefined" !== typeof a ? a : !zb;
            cd.setLooping(zb);
            zb ? qb.find("i").addClass("hap-contr-btn-hover") : qb.find("i").removeClass("hap-contr-btn-hover");
        };
        this.getVolume = function() {
            return Ib;
        };
        this.setVolume = function(a) {
            if (!_b) return !1;
            0 > a ? a = 0 : 1 < a && (a = 1);
            k(a);
        };
        this.toggleMute = function() {
            if (!_b) return !1;
            i();
        };
        this.disableSeek = function(a) {
            vc = a;
        };
        this.seek = function(a) {
            if (!_b || !Oc) return !1;
            try {
                nc.currentTime = a;
            } catch (b) {
                console.log(b);
            }
        };
        this.seekBackward = function() {
            if (!_b || !Oc) return !1;
            if (nc) try {
                nc.currentTime = Math.max(nc.currentTime - 10, 0);
            } catch (a) {
                console.log(a);
            }
        };
        this.seekForward = function() {
            if (!_b || !Oc) return !1;
            if (nc) try {
                nc.currentTime = Math.min(nc.currentTime + 10, nc.duration);
            } catch (a) {
                console.log(a);
            }
        };
        this.getCurrentTime = function() {
            if (!_b || !Oc) return !1;
            var a = 0;
            nc && (a = nc.currentTime);
            return a;
        };
        this.getDuration = function() {
            if (!_b || !Oc) return !1;
            if (nc) var a = nc.duration;
            return a;
        };
        this.destroyPlayerThumb = function() {
            kb && kb.empty();
        };
        this.destroyPlaylistScroll = function() {
            if (!_b) return !1;
            Cb && (Z.mCustomScrollbar("destroy"), xc = !1);
        };
        this.getSetupDone = function() {
            return _b;
        };
        this.getMediaPlaying = function() {
            return _b ? Qc : !1;
        };
        this.getPlaylistLoading = function() {
            return ac;
        };
        this.getCounter = function() {
            return _b ? "undefined" !== typeof cd ? cd.getCounter() : -1 : !1;
        };
        this.getPlaylistLength = function() {
            return _b ? HAPUtils.isNumber(Jc) ? Jc : 0 : !1;
        };
        this.getSettings = function() {
            return b;
        };
        this.getCurrMediaData = function() {
            return _b ? Rc : !1;
        };
        this.getWrapper = function() {
            return X;
        };
        this.getActivePlaylistItem = function() {
            return Mc;
        };
        this.setPlaylistSize = function(a) {
            if (!_b) return !1;
            var b = $.find(".hap-playlist-item").eq(0);
            "w" == a ? $.width(Jc * b.outerWidth(!0)) : $.width(Jc * b.outerHeight(!0));
        };
        this.getPlaylistItemSize = function(a) {
            if (!_b) return !1;
            var b = $.find(".hap-playlist-item").eq(0);
            return "w" == a ? b.outerWidth(!0) : b.outerHeight(!0);
        };
        this.getPlaylistItems = function() {
            if (!_b) return !1;
            var b = [];
            $.find(".hap-playlist-item").each(function() {
                b.push(a(this));
            });
            return b;
        };
        if (tb && localStorage.getItem(Nb)) {
            var qd = JSON.parse(localStorage.getItem(Nb));
            b.resumeTime = qd.resumeTime;
            Ib = qd.volume;
            yb = qd.autoPlay;
            b.activeItem = qd.activeItem;
            localStorage.removeItem(Nb);
        }
        b.activePlaylist && !HAPUtils.isEmpty(b.activePlaylist) ? s(b.activePlaylist) : M();
        return this;
    };
}(jQuery);

!function(a) {
    var b = function() {};
    b.checkCssExist = function(a) {
        for (var b = document.styleSheets, c = 0, d = b.length; c < d; c++) if (b[c].href == a) return;
        b = document.createElement("link");
        b.rel = "stylesheet";
        b.href = a;
        document.getElementsByTagName("head")[0].appendChild(b);
    };
    b.isEmpty = function(a) {
        return 0 == a.replace(/^\s+|\s+$/g, "").length;
    };
    b.isNumber = function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
    };
    b.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent);
    };
    b.isIE = function() {
        var a = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var b = navigator.userAgent, c = /MSIE ([0-9]{1,}[.0-9]{0,})/;
            null != c.exec(b) && (a = parseFloat(RegExp.$1));
        } else "Netscape" == navigator.appName && (b = navigator.userAgent, c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, 
        null != c.exec(b) && (a = parseFloat(RegExp.$1)));
        return -1 != a ? !0 : !1;
    };
    b.isIOS = function() {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    };
    b.isAndroid = function() {
        return -1 < navigator.userAgent.indexOf("Android");
    };
    b.hasDownloadSupport = function() {
        return "download" in document.createElement("a");
    };
    b.qualifyURL = function(a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href;
    };
    b.relativePath = function(a) {
        return /^(?:[a-z]+:)?\/\//i.test(a);
    };
    b.hasLocalStorage = function() {
        try {
            return "localStorage" in a && null !== a.localStorage;
        } catch (b) {
            return !1;
        }
    };
    b.volumeCanBeSet = function() {
        var a = document.createElement("audio");
        if (!a) return !1;
        a.volume = 0;
        return 0 == a.volume ? !0 : !1;
    };
    b.randomiseArray = function(a) {
        var b = [], c = [], d;
        for (d = 0; d < a; d++) b[d] = d;
        for (d = 0; d < a; d++) {
            var e = Math.round(Math.random() * (b.length - 1));
            c[d] = b[e];
            b.splice(e, 1);
        }
        return c;
    };
    b.sortArray = function(a, b) {
        var c, d = a.length, e = [];
        for (c = 0; c < d; c++) e[c] = a[b[c]];
        return e;
    };
    b.keysrt = function(a, b, c) {
        var d = 1;
        c && (d = -1);
        return a.sort(function(a, c) {
            var e = a[b], f = c[b];
            return d * (e < f ? -1 : e > f ? 1 : 0);
        });
    };
    b.parseXML = function(b) {
        if (a.ActiveXObject && a.GetObject) {
            var c = new ActiveXObject("Microsoft.XMLDOM");
            c.loadXML(b);
            return c;
        }
        if (a.DOMParser) return new DOMParser().parseFromString(b, "text/xml");
        throw Error("No XML parser available");
    };
    b.formatTime = function(a) {
        a = parseInt(a, 10);
        var b = Math.floor(a / 3600), c = Math.floor((a - 3600 * b) / 60);
        a = a - 3600 * b - 60 * c;
        if (0 < b) return 10 > b && (b = "0" + b), 10 > c && (c = "0" + c), 10 > a && (a = "0" + a), 
        b + ":" + c + ":" + a;
        10 > c && (c = "0" + c);
        10 > a && (a = "0" + a);
        return c + ":" + a;
    };
    b.formatNumber = function(a) {
        return 9 > a ? "0" + (a + 1) : a + 1;
    };
    b.nFormatter = function(a, b) {
        var c = [ {
            value: 1e18,
            symbol: "E"
        }, {
            value: 1e15,
            symbol: "P"
        }, {
            value: 1e12,
            symbol: "T"
        }, {
            value: 1e9,
            symbol: "G"
        }, {
            value: 1e6,
            symbol: "M"
        }, {
            value: 1e3,
            symbol: "k"
        } ], d = /\.0+$|(\.[0-9]*[1-9])0+$/, e;
        for (e = 0; e < c.length; e++) if (a >= c[e].value) return (a / c[e].value).toFixed(b).replace(d, "$1") + c[e].symbol;
        return a.toFixed(b).replace(d, "$1");
    };
    b.hmsToSecondsOnly = function(a) {
        a = a.split(":");
        for (var b = 0, c = 1; 0 < a.length; ) b += c * parseInt(a.pop()), c *= 60;
        return b;
    };
    b.canPlayMp3 = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType("audio/mpeg;").replace(/no/, ""));
    };
    b.canPlayWav = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType("audio/wav;").replace(/no/, ""));
    };
    b.canPlayOgg = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
    };
    b.hasCanvas = function() {
        return !!document.createElement("canvas");
    };
    b.getElementOffsetTop = function(b) {
        b = b.getBoundingClientRect();
        var c = document.body, d = document.documentElement;
        return Math.round(b.bottom - 100 + (a.pageYOffset || d.scrollTop || c.scrollTop) - (d.clientTop || c.clientTop || 0));
    };
    b.getScrollTop = function(b) {
        b = document.documentElement;
        return (a.pageYOffset || b.scrollTop) - (b.clientTop || 0);
    };
    a.HAPUtils = b;
}(window);

!function(a, b) {
    a.HAPPlaylistManager = function(a) {
        function c() {
            m = HAPUtils.randomiseArray(g);
        }
        var d = this, e = a.loopingOn, f = a.randomPlay, g, h = !1, i = -1, j, k, l = !1, m = [], n = !1;
        this.setCounter = function(a, j) {
            "undefined" === typeof j && (j = !0);
            i = j ? i + parseInt(a, 10) : parseInt(a, 10);
            if (isNaN(i)) alert("HAPPlaylistManager message: No active media, counter = " + i); else if (h = !1, 
            e) {
                if (f) if (i > g - 1) {
                    i = m[g - 1];
                    c();
                    if (m[0] == i) {
                        var k = m.splice(0, 1);
                        m.push(k);
                    }
                    i = 0;
                    b(d).trigger("HAPPlaylistManager.PLAYLIST_END_ALERT");
                } else 0 > i && (i = m[0], c(), m[g - 1] == i && (k = m.splice(g - 1, 1), m.unshift(k)), 
                i = g - 1); else i > g - 1 ? (i = 0, b(d).trigger("HAPPlaylistManager.PLAYLIST_END_ALERT")) : 0 > i && (i = g - 1);
                b(d).trigger("HAPPlaylistManager.COUNTER_READY");
            } else i > g - 1 ? (i = g - 1, h = !0) : 0 > i && (i = 0), h ? b(d).trigger("HAPPlaylistManager.PLAYLIST_END") : b(d).trigger("HAPPlaylistManager.COUNTER_READY");
        };
        this.getCounter = function() {
            return f ? n ? i : m[i] : i;
        };
        this.advanceHandler = function(a) {
            n = !1;
            l ? (l = !1, k + a > g - 1 ? (i = g - 1, b(d).trigger("HAPPlaylistManager.COUNTER_READY")) : 0 > k + a ? (i = 0, 
            b(d).trigger("HAPPlaylistManager.COUNTER_READY")) : d.setCounter(k + a, !1)) : d.setCounter(a);
        };
        this.processPlaylistRequest = function(a) {
            n = !1;
            f && (n = !0, j = a, l || (k = i, l = !0));
            d.setCounter(a, !1);
        };
        this.setPlaylistItems = function(a, b) {
            "undefined" === typeof b && (b = !0);
            b && (i = -1);
            g = a;
            f && c();
        };
        this.reSetCounter = function(a) {
            "undefined" === typeof a ? i = -1 : (a = parseInt(a, 10), g ? (a > g - 1 ? a = g - 1 : 0 > a && (a = 0), 
            i = a) : i = -1);
        };
        this.setRandom = function(a) {
            (f = a) && c();
            if (f) {
                var b = m.length;
                for (a = 0; a < b; a++) if (m[a] == i) {
                    if (0 == a) break;
                    a = m.splice(a, 1);
                    m.unshift(parseInt(a, 10));
                    break;
                }
                i = 0;
            } else l ? (i = j, l = !1) : i = m[i];
        };
        this.setLooping = function(a) {
            e = a;
        };
        this.getPosition = function(a) {
            return m.indexOf(a);
        };
    };
}(window, jQuery);