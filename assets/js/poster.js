var hapjq = jQuery;
(function(e) {
 e.fn.haps = function(c) {
  function d(a) {
   var b = "https:" == window.location.protocol ? "https:" : "http:",
    f = (window.screen.width - 600) / 2,
    n = (window.screen.height - 300) / 2,
    h = u.title || "",
    e = u.description || "",
    c = u.thumb || "",
    d = u.share || window.location.href,
    g;
   HAPUtils.relativePath(c) || (c = HAPUtils.qualifyURL(c));
   if ("facebook" == a) {
    if (HAPUtils.isEmpty(ob)) {
     alert("facebookAppId has not been set in settings!");
     return
    }
    window.FB && FB.ui({
     method: "share_open_graph",
     action_type: "og.shares",
     action_properties: JSON.stringify({
      object: {
       "og:url": d,
       "og:title": h,
       "og:description": e,
       "og:image": c
      }
     })
    })
   } else "twitter" == a ? g = b + "//twitter.com/share?url=" + encodeURIComponent(d) + "&text=" + encodeURIComponent(h) : "tumblr" == a && (g = b + "//www.tumblr.com/share/link?url=" + encodeURIComponent(d) + "&amp;name=" + encodeURIComponent(h) + "&amp;description=" + encodeURIComponent(e));
   g && window.open(g, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left=" + f + ",top=" + n)
  }

  function wa(a) {
   (function(a, f, n) {
    var b = a.getElementsByTagName(f)[0];
    a.getElementById(n) || (a = a.createElement(f),
     a.id = n, a.src = "//connect.facebook.net/en_US/sdk.js", b.parentNode.insertBefore(a, b))
   })(document, "script", "facebook-jssdk");
   window.fbAsyncInit = function() {
    FB.init({
     appId: a,
     xfbml: !0,
     version: "v2.9"
    })
   }
  }

  function w(a) {
   if (l) {
    if (!Sa) {
     if ("touchstart" == a.type) {
      if (a = a.originalEvent.touches, !(a && 0 < a.length)) return !1
     } else a.preventDefault();
     Sa = !0;
     S.on(P, function(a) {
      a: {
       if ("touchmove" == a.type) {
        if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches;
        else if (a.originalEvent.changedTouches &&
         a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches;
        else break a;
        if (1 < b.length) break a;
        b = b[0]
       } else b = a;a.preventDefault();C(b)
      }
     }).on(xa, function(a) {
      a: if (Sa) {
       Sa = !1;
       S.off(P).off(xa);
       if ("touchend" == a.type) {
        if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches;
        else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches;
        else break a;
        if (1 < b.length) break a;
        b = b[0]
       } else b = a;
       a.preventDefault();
       C(b)
      }
     })
    }
    return !1
   }
  }

  function C(a) {
   Ja ? a = Ta.setProgress(a) : (a = a.pageX - Ua.offset().left, 0 > a ? a = 0 : a > Q && (a = Q), a = Math.max(0, Math.min(1, a / Q)));
   if (g && ya) try {
    g.currentTime = a * g.duration
   } catch (b) {
    console.log(b)
   }
  }

  function A(a) {
   if (Ja) b = Ta.trackTooltip(a), f = m[0].getBoundingClientRect(), n = T[0].getBoundingClientRect(), a = parseInt(n.top - f.top - y.outerHeight() - 10), h = parseInt(n.left - f.left - y.outerWidth() / 2 + T.outerWidth() / 2);
   else {
    b = a.pageX - Ua.offset().left;
    if (!HAPUtils.isNumber(b)) return !1;
    0 > b ? b = 0 : b > Q && (b = Q);
    var b = Math.max(0, Math.min(1, b /
      Q)),
     f = m[0].getBoundingClientRect(),
     n = T[0].getBoundingClientRect(),
     h = parseInt(a.pageX - za.scrollLeft() - f.left - y.outerWidth() / 2);
    a = parseInt(n.top - f.top - y.outerHeight(), 10)
   }
   h + y.outerWidth() > m.width() ? h = m.width() - y.outerWidth() : 0 > h && (h = 0);
   0 > a + f.top && (a = parseInt(n.top - f.top + y.outerHeight() + 15));
   y.css({
    left: h + "px",
    top: a + "px"
   }).show();
   if (!HAPUtils.isNumber(b)) return !1;
   g && (f = g.duration, a = b * f, HAPUtils.isNumber(a) && HAPUtils.isNumber(f) && y.html(HAPUtils.formatTime(a) + " / " + HAPUtils.formatTime(f)))
  }

  function F(a) {
   if (l) {
    if (!Va) {
     if ("touchstart" ==
      a.type) {
      if (a = a.originalEvent.touches, !(a && 0 < a.length)) return !1
     } else a.preventDefault();
     Va = !0;
     S.on(P, function(a) {
      a: {
       if ("touchmove" == a.type) {
        if (a.originalEvent.touches && a.originalEvent.touches.length) var b = a.originalEvent.touches;
        else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches;
        else break a;
        if (1 < b.length) break a;
        b = b[0]
       } else b = a;a.preventDefault();q(b)
      }
     }).on(xa, function(a) {
      a: if (Va) {
       Va = !1;
       S.off(P).off(xa);
       if ("touchend" == a.type) {
        if (a.originalEvent.touches &&
         a.originalEvent.touches.length) var b = a.originalEvent.touches;
        else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) b = a.originalEvent.changedTouches;
        else break a;
        if (1 < b.length) break a;
        b = b[0]
       } else b = a;
       a.preventDefault();
       q(b)
      }
     })
    }
    return !1
   }
  }

  function ma() {
   if (!l) return !1;
   0 < x ? (pb = x, x = 0) : x = pb;
   ba()
  }

  function q(a) {
   na ? (x = Math.max(0, Math.min(1, (a.pageY - ca.offset().top) / da)), x = 1 - x) : x = Math.max(0, Math.min(1, (a.pageX - ca.offset().left) / da));
   ba()
  }

  function ba(a) {
   "undefined" !== typeof a && (x = a);
   g &&
    (g.volume = x);
   a = na ? "height" : "width";
   HAPUtils.isNumber(da) || (da = na ? ca.height() : ca.width());
   gc.css(a, x * da + "px");
   0 == x ? Wa.find("i").removeClass("haps-icon-volume-up haps-icon-volume-down").addClass("haps-icon-volume-off") : 0 < x && .5 > x ? Wa.find("i").removeClass("haps-icon-volume-off haps-icon-volume-up").addClass("haps-icon-volume-down") : Wa.find("i").removeClass("haps-icon-volume-off haps-icon-volume-down").addClass("haps-icon-volume-up");
   e(k).trigger("volumeChange", {
    instance: k,
    instanceName: D,
    volume: x
   })
  }

  function oa(a) {
   var b =
    na ? a.pageY - ca.offset().top : a.pageX - ca.offset().left;
   0 > b ? b = 0 : b > da && (b = da);
   b = Math.max(0, Math.min(1, b / da));
   if (!HAPUtils.isNumber(b)) return !1;
   na && (b = 1 - b);
   b = parseInt(100 * b, 10);
   y.text(b + " %");
   b = m[0].getBoundingClientRect();
   var f = R[0].getBoundingClientRect();
   if (na) {
    var n = parseInt(f.left - b.left - y.outerWidth() / 2 + R.outerWidth() / 2);
    a = parseInt(a.pageY - za.scrollTop() - b.top - y.outerHeight() - 10)
   } else n = parseInt(a.pageX - za.scrollLeft() - b.left - y.outerWidth() / 2), a = parseInt(f.top - b.top - y.outerHeight());
   0 > a + b.top && (a =
    parseInt(f.top - b.top + y.outerHeight() + 15));
   y.css({
    left: n + "px",
    top: a + "px"
   }).show()
  }

  function U(a) {
   if (!l) return !1;
   a = e(a.currentTarget);
   qb = !0;
   var b = p.find(".haps-playlist-item").index(a.closest(".haps-playlist-item"));
   r.processPlaylistRequest(b);
   V && ea("haps_play_count", a.closest(".haps-playlist-item"));
   e(k).trigger("clickPlaylistItem", {
    instance: k,
    instanceName: D
   })
  }

  function E(a) {
   a.preventDefault();
   if (!l) return !1;
   a = e(a.currentTarget);
   if (v && v.find(".haps-playlist-item-content").is(a)) return !1;
   a.closest(".haps-playlist-item").addClass("haps-playlist-item-selected");
   e(k).trigger("overPlaylistItem", {
    instance: k,
    instanceName: D
   })
  }

  function pa(a) {
   a.preventDefault();
   if (!l) return !1;
   a = e(a.currentTarget);
   if (v && v.find(".haps-playlist-item-content").is(a)) return !1;
   a.closest(".haps-playlist-item").removeClass("haps-playlist-item-selected");
   e(k).trigger("outPlaylistItem", {
    instance: k,
    instanceName: D
   })
  }

  function Ka(a) {
   if (!l) return !1;
   a = e(a.currentTarget);
   if (a.hasClass("haps-playlist-toggle") || a.hasClass("haps-playlist-close")) "function" === typeof k.togglePlaylist && k.togglePlaylist();
   else if (a.hasClass("haps-prev-toggle")) k.previousMedia();
   else if (a.hasClass("haps-playback-toggle")) k.togglePlayback();
   else if (a.hasClass("haps-next-toggle")) V && v && ea("hap_skip_count", v), k.nextMedia();
   else if (a.hasClass("haps-loop-toggle")) W = !W, r.setLooping(W), W ? Aa.find("i").addClass("haps-contr-btn-hover") : Aa.find("i").removeClass("haps-contr-btn-hover");
   else if (a.hasClass("haps-random-toggle")) X = !X, r.setRandom(X), X ? Ba.find("i").addClass("haps-contr-btn-hover") : Ba.find("i").removeClass("haps-contr-btn-hover");
   else if (a.hasClass("haps-sort-alpha")) k.sort("title", Ca);
   else if (a.hasClass("haps-popup-toggle"))
    if ("function" === typeof hapOpenPopup) hapOpenPopup(k, c);
    else {
     a = document.createElement("script");
     a.type = "text/javascript";
     a.src = HAPUtils.qualifyURL(K + "js/popup.js?");
     a.onload = a.onreadystatechange = function() {
      this.readyState && "complete" != this.readyState || hapOpenPopup(k, c)
     };
     a.onerror = function() {
      alert("Error loading " + this.src)
     };
     var b = document.getElementsByTagName("script")[0];
     b.parentNode.insertBefore(a, b)
    }
   else if (a.hasClass("haps-volume-toggle")) Y &&
    0 != R.length || ma();
   else if (a.hasClass("haps-share-item")) {
    if (!B) return !1;
    d(a.attr("data-type").toLowerCase())
   }
  }

  function fa() {
   v && (e(k).trigger("playlistItemEnabled", {
    instance: k,
    instanceName: D,
    item: v
   }), v.removeClass("haps-playlist-item-selected"), v = null)
  }

  function hc(a) {
   v && fa();
   v = p.children(".haps-playlist-item").eq(a);
   if (v.length) {
    v.addClass("haps-playlist-item-selected");
    if (qa && 0 < t) {
     if (!qb)
      if ("undefined" !== typeof mCustomScrollbar) "horizontal" == rb ? ha.mCustomScrollbar("scrollTo", parseInt(v.position().left), {
       scrollInertia: 500
      }) : ha.mCustomScrollbar("scrollTo", parseInt(v.position().top), {
       scrollInertia: 500
      });
      else var b = setInterval(function() {
       "undefined" !== typeof mCustomScrollbar && (clearInterval(b), "horizontal" == rb ? ha.mCustomScrollbar("scrollTo", parseInt(v.position().left), {
        scrollInertia: 500
       }) : ha.mCustomScrollbar("scrollTo", parseInt(v.position().top), {
        scrollInertia: 500
       }))
      }, 500);
     qb = !1
    }
    e(k).trigger("playlistItemDisabled", {
     instance: k,
     instanceName: D,
     item: v
    })
   }
  }

  function Db(a) {
   H = !0;
   Z.show();
   ra ? sb() : p.find(".haps-playlist-item").remove();
   var b = Eb.length ? Eb.find(a) : e(a);
   if (0 == b.length) return alert("Failed playlist selection! Playlist - " + a + " does not exist. Check activePlaylist option in settings!"), Fb(), !1;
   tb = a;
   e(k).trigger("playlistStartLoad", {
    instance: k,
    instanceName: D
   });
   Da = null;
   a = b.find(".haps-playlist-options");
   void 0 == a.attr("data-thumb-global") || HAPUtils.isEmpty(a.attr("data-thumb-global")) || (Da = a.attr("data-thumb-global"));
   if (void 0 != b.attr("data-type") && "xml" == b.attr("data-type")) ic(Xa(b));
   else {
    var f, n, h;
    b.children(".haps-playlist-item").each(function() {
     n =
      e(this);
     h = n.attr("data-type");
     RegExp(/^audio$/).test(h) && n.hasClass("haps-playlist-item-ready") ? I.push(n.clone()) : RegExp(/^hls$/).test(h) && n.hasClass("haps-playlist-item-ready") ? I.push(n.clone()) : (f = Xa(n), I.push(f))
    });
    t = I.length;
    z()
   }
  }

  function z() {
   sa++;
   if (sa > t - 1) Gb();
   else {
    var a = I[sa],
     b = a.type;
    b ? RegExp(/^soundcloud$/).test(b) ? (M = a.limit || 1E3, N = [], Hb ? La(!0, a.path) : jc(a.path)) : RegExp(/^podcast$/).test(b) ? (M = a.limit || 1E3, kc(a)) : RegExp(/^itunes_podcast_music$/).test(b) ? lc(a) : RegExp(/^folder$/).test(b) ? mc(a) :
     /^gdrive-folder$/.test(b) ? nc(a) : RegExp(/^hls$/).test(b) ? (G.push(a), z()) : RegExp(/^audio$/).test(b) && (G.push(a), z()) : (G.push(a), z())
   }
  }

  function Xa(a) {
   var b = {};
   b.origclasses = a.attr("class");
   b.type = a.attr("data-type");
   void 0 == a.attr("data-media-id") || HAPUtils.isEmpty(a.attr("data-media-id")) || (b.mediaId = parseInt(a.attr("data-media-id"), 10));
   a.attr("data-hls") && !HAPUtils.isEmpty(a.attr("data-hls")) && (b.hls = a.attr("data-hls"));
   a.attr("data-mp3") && !HAPUtils.isEmpty(a.attr("data-mp3")) && (b.mp3 = a.attr("data-mp3"));
   a.attr("data-wav") && !HAPUtils.isEmpty(a.attr("data-wav")) && (b.wav = a.attr("data-wav"));
   if ("audio" == b.type) {
    if (void 0 != a.attr("data-path") && !HAPUtils.isEmpty(a.attr("data-path"))) {
     var f = a.attr("data-path"),
      n = f.substr(f.lastIndexOf(".") + 1);
     "mp3" == n.toLowerCase() || "wav" == n.toLowerCase() ? b[n.toLowerCase()] = f : b.mp3 = f
    }
   } else void 0 == a.attr("data-path") || HAPUtils.isEmpty(a.attr("data-path")) || (b.path = b.id = a.attr("data-path"));
   void 0 != a.attr("data-limit") && !HAPUtils.isEmpty(a.attr("data-limit")) && HAPUtils.isNumber(a.attr("data-limit")) &&
    0 != Math.abs(parseInt(a.attr("data-limit"), 10)) && (b.limit = Math.abs(parseInt(a.attr("data-limit"), 10)));
   Da ? b.thumb = Da : void 0 == a.attr("data-thumb") || HAPUtils.isEmpty(a.attr("data-thumb")) ? a.find(".haps-playlist-thumb img").length && (b.thumb = a.find(".haps-playlist-thumb img").attr("src")) : b.thumb = a.attr("data-thumb");
   void 0 == a.attr("data-thumb-default") || HAPUtils.isEmpty(a.attr("data-thumb-default")) || (b.thumbDefault = a.attr("data-thumb-default"));
   void 0 == a.attr("data-thumb-quality") || HAPUtils.isEmpty(a.attr("data-thumb-quality")) ||
    (b.thumbQuality = a.attr("data-thumb-quality"));
   void 0 == a.attr("data-title") || HAPUtils.isEmpty(a.attr("data-title")) ? a.find(".haps-playlist-title").length && (b.title = a.find(".haps-playlist-title").html()) : b.title = a.attr("data-title");
   void 0 == a.attr("data-description") || HAPUtils.isEmpty(a.attr("data-description")) || (b.description = a.attr("data-description"));
   void 0 == a.attr("data-artist") || HAPUtils.isEmpty(a.attr("data-artist")) || (b.artist = a.attr("data-artist"));
   void 0 == a.attr("data-album") || HAPUtils.isEmpty(a.attr("data-album")) ||
    (b.album = a.attr("data-album"));
   void 0 == a.attr("data-download") || HAPUtils.isEmpty(a.attr("data-download")) || (b.download = a.attr("data-download"));
   void 0 != a.attr("data-id3") && (b.id3 = !0);
   void 0 == a.attr("data-start") || HAPUtils.isEmpty(a.attr("data-start")) || (b.start = Math.abs(a.attr("data-start")));
   void 0 == a.attr("data-end") || HAPUtils.isEmpty(a.attr("data-end")) || (b.end = Math.abs(a.attr("data-end")));
   void 0 != a.attr("data-playback-rate") && (b.playbackRate = 1, HAPUtils.isEmpty(a.attr("data-playback-rate")) ||
    (b.playbackRate = Math.abs(a.attr("data-playback-rate"))));
   void 0 == a.attr("data-link") || HAPUtils.isEmpty(a.attr("data-link")) || (b.link = a.attr("data-link"), b.target = "_blank", void 0 == a.attr("data-target") || HAPUtils.isEmpty(a.attr("data-target")) || (b.target = a.attr("data-target")));
   void 0 == a.attr("data-share") || HAPUtils.isEmpty(a.attr("data-share")) || (b.share = a.attr("data-share"));
   void 0 == a.attr("data-sort") || HAPUtils.isEmpty(a.attr("data-sort")) || (b.sort = a.attr("data-sort"));
   a.find(".haps-custom-playlist-item-content").length &&
    (b.customContent = a.find(".haps-custom-playlist-item-content").html());
   void 0 != a.attr("data-load-more") && (Ya = !0);
   return b
  }

  function mc(a) {
   if ("file:" == window.location.protocol) return alert("Reading files from folders locally is not possible! This requires online server connection."), z(), !1;
   var b = a.path.replace(/\/\//g, "/"),
    f = K + "includes/folder_parser.php";
   b = {
    dir: b
   };
   a.id3 && (ub = ta = G.length - 1);
   e.ajax({
    type: "GET",
    url: f,
    data: b,
    dataType: "json"
   }).done(function(b) {
    var f, n = b.length;
    a.sort && ("filename-asc" == a.sort ?
     HAPUtils.keysrt(b, "filename") : "filename-desc" == a.sort ? HAPUtils.keysrt(b, "filename", !0) : "date-asc" == a.sort ? HAPUtils.keysrt(b, "filemtime") : "date-desc" == a.sort && HAPUtils.keysrt(b, "filemtime", !0));
    for (f = 0; f < n; f++) {
     var c = b[f];
     var d = e.extend(!0, {}, a);
     d.type = "audio";
     var g = c.fullpath;
     d[c.extension] = g;
     delete d.path;
     "undefined" === typeof d.download && (d.download = g);
     "undefined" === typeof d.share && (d.share = g);
     d.title || (d.title = c.filename);
     G.push(d);
     ta++
    }
    a.id3 ? Za() : z()
   }).fail(function(a, b, f) {
    console.log("Error processFolder: " +
     a, b, f);
    z()
   })
  }

  function nc(a) {
   if ("file:" == window.location.protocol) return alert("Reading files from folders locally is not possible! This requires online server connection."), z(), !1;
   if (HAPUtils.isEmpty(Ib)) return alert("gDriveAppId has not been set in settings!"), z(), !1;
   e.ajax({
    url: "https://www.googleapis.com/drive/v3/files?q='" + a.path + "'+in+parents&pageSize=1000&key=" + Ib,
    dataType: "jsonp"
   }).done(function(b) {
    var f, n = b.files.length,
     h = [],
     c = [];
    for (f = 0; f < n; f++) {
     var d = b.files[f];
     /mp3|mpeg|mpeg3|wav/.test(d.mimeType) ?
      c.push(d) : /jpg|jpeg|png/.test(d.mimeType) && h.push(d)
    }
    HAPUtils.keysrt(c, "name");
    HAPUtils.keysrt(h, "name");
    n = c.length;
    for (f = 0; f < n; f++) {
     d = c[f];
     b = e.extend(!0, {}, a);
     b.type = "audio";
     var g = d.name.substr(d.name.lastIndexOf(".") + 1);
     b[g.toLowerCase()] = "https://drive.google.com/uc?export=view&id=" + d.id;
     delete b.path;
     "undefined" === typeof b.download && (b.download = "https://drive.google.com/uc?export=download&id=" + d.id);
     "undefined" === typeof b.share && (b.share = "https://drive.google.com/open?id=" + d.id);
     !b.thumb && h[f] &&
      (b.thumb = "https://drive.google.com/uc?export=view&id=" + h[f].id);
     b.title || (b.title = d.name.substr(0, d.name.lastIndexOf(".")));
     G.push(b)
    }
    z()
   }).fail(function(a, f, n) {
    console.log("Error processGdriveFolder: " + a, f, n);
    z()
   })
  }

  function Za() {
   if ("undefined" === typeof jsmediatags) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = HAPUtils.qualifyURL(K + "js/jsmediatags.min.js");
    a.onload = a.onreadystatechange = function() {
     this.readyState && "complete" != this.readyState || Za()
    };
    a.onerror = function() {
     alert("Error loading " +
      this.src)
    };
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
   } else {
    var f = G[ta];
    jsmediatags.read(f.mp3 || f.wav, {
     onSuccess: function(a) {
      var b = a.tags;
      a = b.picture;
      b.artist && (f.artist = b.artist);
      b.title && (f.title = b.title);
      b.album && (f.album = b.album);
      if (a) {
       b = "";
       var n, c = a.data.length;
       for (n = 0; n < c; n++) b += String.fromCharCode(a.data[n]);
       f.thumb = "data:" + a.format + ";base64," + window.btoa(b)
      }
      ta--;
      ta > ub ? Za() : z()
     },
     onError: function(a) {
      console.log("ID3 error: ", a.type, a.info);
      ta--;
      ta > ub ? Za() :
       z()
     }
    })
   }
  }

  function ic(a) {
   e.ajax({
    type: "GET",
    url: a.path,
    dataType: "html"
   }).done(function(a) {
    var b, n, h;
    e(a).children(".haps-playlist-item").each(function() {
     b = e(this);
     n = b.attr("data-type");
     RegExp(/^audio/).test(n) && b.hasClass("haps-playlist-item-ready") ? I.push(b) : RegExp(/^hls/).test(n) && b.hasClass("haps-playlist-item-ready") ? I.push(b) : (h = Xa(b), I.push(h))
    });
    t = I.length;
    z()
   }).fail(function(a, f, n) {
    console.log("Error processXml: " + a, f, n);
    z()
   })
  }

  function kc(a) {
   if ("file:" == window.location.protocol) alert("Using Podcast locally is not possible! This requires online server connection!"),
    z();
   else {
    var b = oc + "?url=" + encodeURIComponent(a.path),
     f = M,
     n = M;
    Ya && (f = 1E3, O = []);
    e.ajax({
     url: b,
     dataType: "json",
     cache: !1
    }).done(function(b) {
     var h = HAPUtils.parseXML(b.contents),
      c, d, g, k = 0;
     e(h).find("image").length && e(h).find("image").attr("href") ? g = e(h).find("image").attr("href") : e(b.contents).find("itunes\\:image").length && e(b.contents).find("itunes\\:image").attr("href") && (g = e(b.contents).find("itunes\\:image").attr("href"));
     e(h).find("item").each(function() {
      if (k >= f) return !1;
      c = e(this);
      d = e.extend(!0, {},
       a);
      d.type = "audio";
      d.path = c.find("enclosure").attr("url");
      !d.title && c.find("title").length && (d.title = c.find("title").text());
      d.artist || (c.find("author").length ? d.artist = c.find("author").text() : c.find("itunes\\:author").length && (d.artist = c.find("itunes\\:author").text()));
      c.find("pubDate").length && (d.pubdate = c.find("pubDate").text());
      !d.description && c.find("description").length && (d.description = c.find("description").text());
      !d.duration && c.find("itunes\\:duration").length && (d.duration = c.find("itunes\\:duration").text());
      d.thumb || (c.find("image").length && c.find("image").attr("href") ? d.thumb = c.find("image").attr("href") : c.find("itunes\\:image").length && c.find("itunes\\:image").attr("href") ? d.thumb = c.find("itunes\\:image").attr("href") : g && (d.thumb = g));
      d.download || (d.download = d.path);
      !d.share && c.find("link").length && (d.share = c.find("link").text());
      k < n ? G.push(d) : O.push(d);
      k++
     });
     z()
    }).fail(function(a, b, f) {
     console.log("Error processPodcast: " + a, b, f);
     z()
    })
   }
  }

  function lc(a) {
   "file:" == window.location.protocol ? (alert("Using Podcast locally is not possible! This requires online server connection!"),
    z()) : (encodeURIComponent(a.path), e.ajax({
    url: a.path
   }).done(function(b) {
    b = e("<div></div>").html(b);
    var f, c, h, d = 0,
     g = a.limit || 1E3;
    if (b.find(".lockup.product.podcast").length) {
     var k = b.find(".lockup.product.podcast").find("img");
     k.length && (k.attr("src-swap-high-dpi").length ? h = k.attr("src-swap-high-dpi") : k.attr("src-swap").length && (h = k.attr("src-swap")))
    }
    b.find("tr.podcast-episode").each(function() {
     if (d >= g) return !1;
     f = e(this);
     c = e.extend(!0, {}, a);
     c.type = "audio";
     c.path = f.attr("audio-preview-url");
     !c.title &&
      f.attr("preview-title").length && (c.title = f.attr("preview-title"));
     !c.artist && f.attr("preview-artist").length && (c.artist = f.attr("preview-artist"));
     !c.description && f.find(".episode-info").length && (c.description = f.find(".episode-info").next().text());
     !c.thumb && h && (c.thumb = h);
     c.share || (c.share = a.path);
     G.push(c);
     d++
    });
    z()
   }).fail(function(a, f, c) {
    console.log("Error processPodcast: " + a, f, c);
    z()
   }))
  }

  function jc(a) {
   if ("file:" == window.location.protocol) alert("Using SoundCloud locally is not possible! This requires online server connection!"),
    z();
   else {
    if (HAPUtils.isEmpty($a)) return alert("soundCloudAppId has not been set! Skipping Soundcloud url: " + a), z(), !1;
    var b = document.createElement("script");
    b.src = "https://connect.soundcloud.com/sdk.js";
    var f = document.getElementsByTagName("script")[0];
    f.parentNode.insertBefore(b, f);
    var c = setInterval(function() {
     window.SC && (c && clearInterval(c), SC.initialize({
      client_id: $a
     }), Hb = !0, La(!0, a))
    }, 100)
   }
  }

  function La(a, b) {
   SC.get(a ? "https://api.soundcloud.com/resolve.json?url=" + b + "&client_id=" + $a : b, {
     limit: M,
     linked_partitioning: 1
    },
    function(a, c) {
     if (c) {
      for (console.log("Error getSoundCloudPage: " + c); N.length;) G.push(N.splice(0, 1)[0]);
      z()
     } else {
      if ("track" == a.kind) ab(a);
      else if ("playlist" == a.kind) {
       var f, d = a.tracks.length;
       if (N.length + d >= M) {
        d = M - N.length;
        var n = !0
       }
       for (f = 0; f < d; f++) ab(a.tracks[f])
      } else if (a.collection)
       for (d = a.collection.length, N.length + d >= M && (d = M - N.length, n = !0), f = 0; f < d; f++) ab(a.collection[f]);
      else {
       if (a.username) {
        f = a.uri;
        f = /likes/.test(b) ? f + "/likes" : /favorites/.test(b) ? f + "/favorites" : f + "/tracks";
        La(!1, f);
        return
       }
       if (e.isArray(a))
        for (d =
         a.length, N.length + d >= M && (d = M - N.length, n = !0), f = 0; f < d; f++) ab(a[f])
      }
      O = a.next_href ? a.next_href : null;
      if (a.next_href && !n) La(!1, a.next_href);
      else {
       for (; N.length;) G.push(N.splice(0, 1)[0]);
       z()
      }
     }
    })
  }

  function Jb() {
   if (!O) return !1;
   H = !0;
   Z.show();
   G = [];
   G = O.splice(0, M);
   0 == O.length && (O = null);
   Gb()
  }

  function Kb() {
   if (!O) return !1;
   H = !0;
   Z.show();
   sa = 0;
   G = [];
   I = [];
   t = 1;
   La(!1, O)
  }

  function ab(a) {
   if (a.streamable && a.stream_url) {
    var b = e.extend(!0, {}, I[sa]);
    b.type = "audio";
    a.duration && (b.duration = a.duration);
    b.path = a.stream_url + "?client_id=" +
     $a;
    b.download || (a.downloadable && a.download_url ? b.download = b.path.replace(/\/stream\\?/, "/download") : delete b.download);
    !b.title && a.title && (b.title = a.title);
    !b.description && a.description && (b.description = a.description);
    !b.thumb && a.artwork_url && (b.thumb = a.artwork_url, b.thumbQuality && (b.thumb = b.thumb.replace("large.jpg", b.thumbQuality)));
    b.favoritingsCount = parseInt(a.favoritings_count ? a.favoritings_count : 0, 10);
    b.playbackCount = parseInt(a.playback_count ? a.playback_count : 0, 10);
    b.hotness = b.favoritingsCount +
     b.playbackCount;
    !b.share && a.permalink_url && (b.share = a.permalink_url);
    N.push(b)
   }
  }

  function Gb() {
   var a, b = G.length,
    f, d = 0;
   for (a = 0; a < b; a++) {
    ia && d++;
    var h = G[a];
    var g = h.type;
    if (h instanceof e && h.hasClass("haps-playlist-item")) {
     g = h;
     if (ia) {
      m ? m.after(g) : ua ? g.appendTo(p) : p.children("div").eq(J).before(g);
      var m = g
     } else g.appendTo(p);
     var w = g.find(".haps-playlist-item-content")
    } else {
     h.origclasses || (h.origclasses = "haps-playlist-item");
     g = e('<div class="' + h.origclasses + '"/>').attr("data-type", g);
     ia ? (m ? m.after(g) : ua ? g.appendTo(p) :
      p.children("div").eq(J).before(g), m = g) : g.appendTo(p);
     w = e('<div class="haps-playlist-item-content"/>').appendTo(g);
     if (-1 != e.inArray("thumb", bb) && (f = h.thumb || h.thumbDefault)) {
      var l = new Image;
      l.className = "haps-hidden";
      l.onload = function() {
       this.className = "haps-visible"
      };
      l.src = f;
      e('<span class="haps-playlist-thumb"></span>').append(l).appendTo(w);
      g.attr("data-thumb", f)
     } - 1 != e.inArray("title", bb) && (f = vb(h), e('<span class="haps-playlist-title">' + f + "</span>").appendTo(w));
     "undefined" !== h.mediaId && g.attr("data-media-id",
      h.mediaId);
     (h.path || h.mp3) && g.attr("data-mp3", h.path || h.mp3);
     h.hls && g.attr("data-hls", h.hls);
     h.title && g.attr("data-title", h.title);
     h.artist && g.attr("data-artist", h.artist);
     h.thumb && g.attr("data-thumb", h.thumb);
     h.thumbDefault && g.attr("data-thumb-default", h.thumbDefault);
     h.thumbQuality && g.attr("data-thumb-quality", h.thumbQuality);
     h.description && g.attr("data-description", h.description);
     h.share && g.attr("data-share", h.share);
     h.download && g.attr("data-download", h.download);
     h.album && g.attr("data-album", h.album);
     h.id3 && g.attr("data-id3", h.id3);
     h.start && g.attr("data-start", h.start);
     h.end && g.attr("data-end", h.end);
     h.playbackRate && g.attr("data-playback-rate", h.playbackRate);
     h.link && (g.attr("data-link", h.link), h.target && g.attr("data-target", h.target));
     V && pc ? (f = e('<div class="haps-stats"></div>'), w.after(f), l = e('<div class="haps-play-count" data-tooltip="' + c.tooltipStatPlays + '"><i class="haps-icon haps-icon-play-circle"></i><span>0</span></div>'), f.append(l), l = e('<div class="haps-like-count" data-tooltip="' + c.tooltipStatLikes +
      '"><i class="haps-icon haps-icon-heart"></i><span>0</span></div>'), f.append(l), l = Lb && h.download ? e('<a href="' + h.download + '" class="haps-download-count" download data-tooltip="' + c.tooltipStatDownloads + '"><i class="haps-icon haps-icon-arrow-alt-circle-down"></i><span>0</span></a>') : e('<div class="haps-download-count haps-no-download" data-tooltip="' + c.tooltipStatDownloads + '"><i class="haps-icon haps-icon-arrow-alt-circle-down"></i><span>0</span></div>'), f.append(l)) : qc && Lb && h.download && (f = e('<a class="haps-download" href="' +
      h.download + '" download title="' + rc + '"><i class="haps-icon haps-icon-download"></i></a>'), w.after(f));
     sc && h.link && (l = e('<a class="haps-link" href="' + h.link + '" target="' + (h.target || "_blank") + '"><i class="haps-icon haps-icon-link"></i></a>'), w.after(l));
     h.customContent && (g.append(h.customContent), delete h.customContent)
    }
    if (wb && (w.on("click", U), !Y)) w.on("mouseenter", E).on("mouseleave", pa)
   }
   ra = p;
   Mb(!0);
   //console.log("playlistLength = ", t);
   ia ? (a = r.getCounter(), r.setPlaylistItems(t, !1), J <= a && (ua || r.reSetCounter(a +
    d)), Ma ? (Ma = !1, Na && !Y && (va = !0), r.setCounter(J, !1)) : Na && r.setCounter(J, !1)) : r.setPlaylistItems(t);
   Fb();
   e(k).trigger("playlistEndLoad", {
    instance: k,
    instanceName: D
   })
  }

  function Mb(a) {
   t = p.children(".haps-playlist-item").length;
   if (wb) {
    var b = 0,
     f, c, d, g = [];
    p.find(".haps-playlist-item").each(function() {
     f = e(this);
     V && a && !f.hasClass("haps-stats-set") && void 0 != f.attr("data-media-id") && g.push(f.attr("data-media-id"));
     c = f.find(".haps-playlist-title");
     c.length && (c.html(), Ea && (d = HAPUtils.formatNumber(b) + xb, f.find(".haps-playlist-title-num").length ?
      f.find(".haps-playlist-title-num").html(d) : c.before(e('<span class="haps-playlist-title-num">' + d + "</span>"))));
     b++
    });
    V && a && g.length && ea("haps_all_count", null, g)
   }
  }

  function yb() {
   var a = 0,
    b, f, c;
   p.find(".haps-playlist-item").each(function() {
    b = e(this);
    f = b.find(".haps-playlist-title");
    c = HAPUtils.formatNumber(a) + xb;
    b.find(".haps-playlist-title-num").length ? b.find(".haps-playlist-title-num").html(c) : f.before(e('<span class="haps-playlist-title-num">' + c + "</span>"));
    a++
   })
  }

  function cb(a) {
   if ("undefined" === typeof mCustomScrollbar)
    if (window.playlistScrollLoading) var b =
     setInterval(function() {
      playlistScrollLoading || (clearInterval(b), cb(a))
     }, 100);
    else {
     window.playlistScrollLoading = !0;
     var f = document.createElement("script");
     f.type = "text/javascript";
     f.src = HAPUtils.qualifyURL(K + "js/jquery.mCustomScrollbar.concat.min.js");
     f.onload = f.onreadystatechange = function() {
      this.readyState && "complete" != this.readyState || (cb(a), window.playlistScrollLoading = !1)
     };
     f.onerror = function() {
      alert("Error loading " + this.src)
     };
     var d = document.getElementsByTagName("script")[0];
     d.parentNode.insertBefore(f,
      d)
    }
   else a.mCustomScrollbar({
    axis: "horizontal" == rb ? "x" : "y",
    theme: c.playlistScrollTheme,
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
      a.find(".mCSB_container").addClass("haps-mCSB_full")
     },
     onOverflowY: function() {
      a.find(".mCSB_container").removeClass("haps-mCSB_full")
     },
     onTotalScroll: function() {
      Ya && O && !H && (H = !0, Z.show(), -1 !== O.indexOf("soundcloud") ? Kb() : Jb())
     }
    }
   })
  }

  function Fb() {
   Z.hide();
   H = !1;
   if (!l) {
    l = !0;
    qa && !Fa && (cb(ha), Fa = !0);
    Nb();
    m.css("opacity", 1);
    ba(x);
    if (c.autoOpenPopup && !c.isPopup)
     if ("function" === typeof hapOpenPopup) hapOpenPopup(k, c);
     else {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.src = HAPUtils.qualifyURL(K + "js/popup.js?");
      a.onload = a.onreadystatechange = function() {
       this.readyState && "complete" != this.readyState || hapOpenPopup(k, c)
      };
      a.onerror = function() {
       alert("Error loading " + this.src)
      };
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a,
       b)
     } e(k).trigger("setupDone", {
     instance: k,
     instanceName: D
    })
   }
   Oa && !Ga && Ob();
   !zb && !ia && 0 < t && (a = c.activeItem, a > t - 1 && (a = t - 1), -1 < a && r.setCounter(a, !1), zb = !0);
   ia = !1
  }

  function Ob() {
   if ("function" === typeof e.fn.sortable) p.sortable({
    handle: ".haps-playlist-item-content",
    revert: !1,
    update: function(a, b) {
     if (v) {
      var f = v.closest(".haps-playlist-item").index();
      r.reSetCounter(f)
     }
     Ea && yb()
    }
   }), Ga = !0;
   else {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = HAPUtils.qualifyURL(K + "js/jquery-ui.min.js");
    a.onload =
     a.onreadystatechange = function() {
      if (!this.readyState || "complete" == this.readyState) {
       var a = document.createElement("script");
       a.type = "text/javascript";
       a.src = HAPUtils.qualifyURL(K + "js/jquery.ui.touch-punch.min.js");
       a.onload = a.onreadystatechange = function() {
        this.readyState && "complete" != this.readyState || (p.sortable({
         revert: !1,
         update: function(a, b) {
          if (v) {
           var f = v.closest(".haps-playlist-item").index();
           r.reSetCounter(f)
          }
          Ea && yb()
         }
        }), Ga = !0)
       };
       a.onerror = function() {
        alert("Error loading " + this.src)
       };
       var b = document.getElementsByTagName("script")[0];
       b.parentNode.insertBefore(a, b)
      }
     };
    a.onerror = function() {
     alert("Error loading " + this.src)
    };
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
   }
  }

  function tc() {
   var a = 0,
    b, f, d;
   p.find(".haps-playlist-item").each(function() {
    e(this).find(".haps-playlist-item-content").each(function() {
     d = e(this).on("click", U);
     if (!Y) d.on("mouseenter", E).on("mouseleave", pa);
     b = d.find(".haps-playlist-title");
     b.length && (b.html(), Ea && (f = HAPUtils.formatNumber(a) + xb, d.find(".haps-playlist-title-num").length ? d.find(".haps-playlist-title-num").html(f) :
      b.before(e('<span class="haps-playlist-title-num">' + f + "</span>"))))
    });
    a++
   });
   t = a;
   0 < t && r.setPlaylistItems(t);
   ra = p;
   Oa && !Ga && Ob();
   if (!l) {
    l = !0;
    qa && !Fa && (cb(ha), Fa = !0);
    ba(x);
    m.css("opacity", 1);
    if (c.autoOpenPopup && !c.isPopup)
     if ("function" === typeof hapOpenPopup) hapOpenPopup(k, c);
     else {
      var h = document.createElement("script");
      h.type = "text/javascript";
      h.src = HAPUtils.qualifyURL(K + "js/popup.js?");
      h.onload = h.onreadystatechange = function() {
       this.readyState && "complete" != this.readyState || hapOpenPopup(k, c)
      };
      h.onerror = function() {
       alert("Error loading " +
        this.src)
      };
      var g = document.getElementsByTagName("script")[0];
      g.parentNode.insertBefore(h, g)
     } e(k).trigger("setupDone", {
     instance: k,
     instanceName: D
    })
   }
   Z.hide();
   H = !1;
   e(k).trigger("playlistEndLoad", {
    instance: k,
    instanceName: D
   });
   h = c.activeItem;
   h > t - 1 && (h = t - 1); - 1 < h && r.setCounter(h, !1)
  }

  function Pb() {
   aa = new Hls;
   Ab = Hls.isSupported();
   Qb = !0;
   aa.on(Hls.Events.MEDIA_ATTACHED, function() {
    aa.loadSource(Pa)
   });
   aa.on(Hls.Events.ERROR, function(a, b) {
    if (b.fatal) switch (b.type) {
     case Hls.ErrorTypes.NETWORK_ERROR:
      console.log("fatal network error encountered, try to recover");
      aa.startLoad();
      break;
     case Hls.ErrorTypes.MEDIA_ERROR:
      console.log("fatal media error encountered, try to recover");
      aa.recoverMediaError();
      break;
     default:
      aa.destroy()
    }
   })
  }

  function db() {
   Rb || (Ha = e(document.createElement("audio")).attr("preload", uc), g = Ha[0], Rb = !0);
   if (u.hls) {
    if (Pa = u.hls, !Qb) {
     if ("undefined" === typeof Hls) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
      a.onload = a.onreadystatechange = function() {
       this.readyState && "complete" != this.readyState ||
        (Pb(), db())
      };
      a.onerror = function() {
       alert("Error loading " + this.src)
      };
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b)
     } else Pb(), db();
     return
    }
   } else Pa = vc && u.mp3 ? u.mp3 : wc && u.wav ? u.wav : u.path;
   g.src = Pa;
   Ha.on("ended", function() {
    Sb()
   }).on("canplay", function(a) {}).on("canplaythrough", function(a) {}).on("loadedmetadata", function() {
    u.playbackRate && (g.playbackRate = Number(u.playbackRate));
    c.resumeTime ? (g.currentTime = c.resumeTime, delete c.resumeTime) : u.start && (g.currentTime = u.start);
    var a = g.duration;
    HAPUtils.isNumber(a) && Bb.html(HAPUtils.formatTime(a))
   }).on("play", function() {
    ya || (ya = !0, Q = Ua.width(), Ia && cancelAnimationFrame(Ia), Ia = requestAnimationFrame(Tb), e(k).trigger("soundStart", {
     instance: k,
     instanceName: D,
     counter: r.getCounter()
    }));
    if (xc && 1 < hap_mediaArr.length) {
     var a, b = hap_mediaArr.length;
     for (a = 0; a < b; a++) k != hap_mediaArr[a].inst && hap_mediaArr[a].inst.pauseMedia()
    }
    eb.find("i").removeClass("haps-icon-play").addClass("haps-icon-pause");
    ja = !0;
    e(k).trigger("soundPlay", {
     instance: k,
     instanceName: D,
     counter: r.getCounter()
    })
   }).on("pause", function() {
    eb.find("i").removeClass("haps-icon-pause").addClass("haps-icon-play");
    ja = !1;
    e(k).trigger("soundPause", {
     instance: k,
     instanceName: D,
     counter: r.getCounter()
    })
   }).on("error", function(a) {
    e(k).trigger("soundError", {
     instance: k,
     instanceName: D,
     counter: r.getCounter()
    })
   });
   if (yc) Ha.on("timeupdate", function(a) {
    g && e(k).trigger("soundProgress", {
     instance: k,
     instanceName: D,
     duration: g.duration,
     time: g.currentTime
    })
   });
   if ("hls" == B) {
    if ("file:" == window.location.protocol) return alert("Playing HLS requires server connection!"),
     !1;
    if (Ab) aa.attachMedia(g);
    else if (g.canPlayType("application/vnd.apple.mpegurl")) g.src = Pa;
    else if (u.mp3) g.src = u.mp3;
    else {
     alert("This browser or device does not support HLS extension. Please use mp3 audio for playback!");
     return
    }
    va && (a = g.play(), void 0 !== a && a.then(function() {})["catch"](function(a) {}))
   } else va && (a = g.play(), void 0 !== a && a.then(function() {})["catch"](function(a) {}));
   g.volume = x;
   va = !0
  }

  function Tb() {
   if (g) {
    var a = g.currentTime,
     b = g.duration;
    if (HAPUtils.isNumber(a) && HAPUtils.isNumber(b)) {
     Ub.html(HAPUtils.formatTime(a));
     Bb.html(HAPUtils.formatTime(b));
     if ("undefined" !== typeof g.buffered && 0 != g.buffered.length) {
      try {
       var c = g.buffered.end(g.buffered.length - 1)
      } catch (h) {}
      if (!isNaN(c)) var d = c / b
     }
     Ja ? Ta.drawSeekbar(d, a, b) : (Vb.width(a / b * Q), d && Wb.width(d * Q));
     u.end && a >= u.end && Sb()
    }
   }
   Ia = requestAnimationFrame(Tb)
  }

  function Sb() {
   e(k).trigger("soundEnd", {
    instance: k,
    instanceName: D,
    counter: r.getCounter()
   });
   var a = u.start || 0;
   "next" == fb ? k.nextMedia() : "loop" == fb ? (g.currentTime = a, g.play()) : "rewind" == fb ? (g.currentTime = a, g.pause()) : "stop" == fb &&
    g.pause()
  }

  function Qa() {
   Ia && cancelAnimationFrame(Ia);
   Ab && "hls" == B && aa.detachMedia();
   g && (g.pause(), g.src = "");
   Ha && Ha.off("ended canplay canplaythrough loadedmetadata pause play error timeupdate");
   gb && ka && ka.deactivate();
   Ub.html("00:00");
   Bb.html("00:00");
   Xb.html("");
   Yb.html("");
   Vb.width(0);
   Wb.width(0);
   B = null;
   Na = ya = ja = !1;
   eb.find("i").removeClass("haps-icon-pause").addClass("haps-icon-play")
  }

  function sb() {
   B && (Qa(), v && fa());
   Oa && (p.sortable("destroy"), Ga = !1);
   p.find(".haps-playlist-item").remove();
   tb = ra = null;
   zb = Ma = ia = !1;
   t = 0;
   sa = -1;
   G = [];
   I = [];
   r.reSetCounter();
   Da = null;
   la.empty();
   O = null;
   Ca = !1;
   hb.find("i").removeClass("haps-icon-sort-alpha-up").addClass("haps-icon-sort-alpha-down");
   e(k).trigger("destroyPlaylist", {
    instance: k,
    instanceName: D
   })
  }

  function Nb() {
   Q = Ua.width();
   gb && ka && ka.checkSize()
  }

  function vb(a) {
   if (a.artist && !HAPUtils.isEmpty(a.artist) && a.title && !HAPUtils.isEmpty(a.title)) var b = a.artist + zc + a.title;
   else a.title && !HAPUtils.isEmpty(a.title) ? b = a.title : a.artist && !HAPUtils.isEmpty(a.artist) && (b = a.artist);
   return b
  }

  function Zb() {
   u.title && Xb.html(u.title);
   u.artist && Yb.html(u.artist);
   gb && ka && ka.input(vb(u));
   if ((!la.children().length || !Da) && la.length) {
    var a = u.thumb || u.thumbDefault;
    if (la.find("img").attr("src") != a) {
     var b = new Image;
     b.className = "haps-hidden";
     b.onload = function() {
      this.className = "haps-visible"
     };
     la.empty();
     la[0].appendChild(b);
     b.src = a
    }
   }
  }

  function ea(a, b, d) {
   if ("file:" != window.location.protocol) {
    if ("haps_all_count" == a) var f = [{
     name: "action",
     value: a
    }, {
     name: "media_id",
     value: d
    }];
    else if ("haps_play_count" ==
     a) f = [{
     name: "action",
     value: a
    }, {
     name: "media_id",
     value: b.attr("data-media-id")
    }, {
     name: "title",
     value: b.attr("data-title")
    }, {
     name: "artist",
     value: b.attr("data-artist")
    }, {
     name: "currentTime",
     value: g.currentTime
    }, {
     name: "duration",
     value: g.duration
    }];
    else if ("haps_download_count" == a || "haps_like_count" == a || "haps_skip_count" == a) f = [{
     name: "action",
     value: a
    }, {
     name: "media_id",
     value: b.attr("data-media-id")
    }, {
     name: "title",
     value: b.attr("data-title")
    }, {
     name: "artist",
     value: b.attr("data-artist")
    }];
    e.ajax({
     url: c.ajax_url ? c.ajax_url : K + "includes/statistics.php",
     type: "post",
     data: f,
     dataType: "json"
    }).done(function(c) {
     console.log("response ", c);
     if (c)
      if ("haps_like_count" == a && c.like) b.find(".haps-like-count span").html(HAPUtils.nFormatter(parseInt(c.like, 10), 1));
      else if ("hap_download_count" == a && c.download) b.find(".haps-download-count span").html(HAPUtils.nFormatter(parseInt(c.download, 10), 1));
     else if ("haps_play_count" == a && c.play) b.find(".haps-play-count span").html(HAPUtils.nFormatter(parseInt(c.play, 10), 1));
     else if ("haps_all_count" == a) {
      var d,
       f = c.length;
      for (d = 0; d < f; d++) {
       var g = c[d];
       var e = p.find(".haps-playlist-item[data-media-id=" + g.media_id + "]").addClass("haps-stats-set");
       e.find(".haps-like-count span").html(HAPUtils.nFormatter(parseInt(g.like, 10), 1));
       e.find(".haps-download-count span").html(HAPUtils.nFormatter(parseInt(g.download, 10), 1));
       e.find(".haps-play-count span").html(HAPUtils.nFormatter(parseInt(g.play, 10), 1))
      }
     }
    }).fail(function(a, b, c) {
     console.log("Error getStats: " + a.responseText, b, c)
    })
   }
  }
  c = e.extend(!0, {}, {
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
  }, c);
  var m = e(this);
  c.markup && m.append(c.markup);
  var Eb = e(c.playlistList);
  m.find(".haps-playlist-holder");
  var ha = m.find(".haps-playlist-inner"),
   p = m.find(".haps-playlist-content"),
   $b = m.find(".haps-playlist-filter-msg");
  m.find(".haps-share-holder");
  var hb = m.find(".haps-sort-alpha"),
   Z = m.find(".haps-preloader"),
   Ac = m.find(".haps-popup-toggle"),
   Ua = m.find(".haps-progress-bg"),
   Wb = m.find(".haps-load-level"),
   Vb = m.find(".haps-progress-level"),
   Wa = m.find(".haps-volume-toggle"),
   R = m.find(".haps-volume-seekbar"),
   ca = m.find(".haps-volume-bg"),
   gc = m.find(".haps-volume-level");
  m.find(".haps-player-holder");
  var la = m.find(".haps-player-thumb"),
   Xb = m.find(".haps-player-title"),
   Yb = m.find(".haps-player-artist"),
   Ub = m.find(".haps-media-time-current"),
   Bb = m.find(".haps-media-time-total"),
   eb = m.find(".haps-playback-toggle"),
   Aa = m.find(".haps-loop-toggle"),
   Ba = m.find(".haps-random-toggle");
  Z = m.find(".haps-preloader");
  var Y = HAPUtils.isMobile(),
   ac = HAPUtils.hasLocalStorage(),
   K = c.sourcePath,
   D = c.instanceName,
   tb = c.activePlaylist,
   uc = c.preload,
   va = c.autoPlay,
   W = c.loopingOn,
   X = c.randomPlay,
   Ea = c.useNumbersInPlaylist,
   qa = c.usePlaylistScroll,
   rb = c.playlistScrollOrientation,
   Oa = Y ? !1 : c.sortableTracks,
   ob = c.facebookAppId,
   $a = c.soundCloudAppId,
   Ib = c.gDriveAppId,
   x = c.volume,
   Bc = c.useKeyboardNavigationForPlayback,
   fb = c.mediaEndAction,
   bb = c.playlistItemContent,
   Cc = c.continousPlayback && ac,
   ib = c.continousKey,
   bc = c.useMediaSession && "mediaSession" in navigator,
   qc = c.createDownloadIconsInPlaylist,
   sc = c.createLinkIconsInPlaylist,
   xc = c.togglePlaybackOnMultipleInstances,
   xb = c.numberTitleSeparator,
   zc = c.artistTitleSeparator,
   rc = c.downloadIconTitle,
   gb = c.useTitleScroll,
   yc = c.dispatchProgressEvent,
   Ya = c.loadMoreOnTotalScroll,
   V = c.useStatistics,
   pc = c.showStatisticsIcons,
   k = this,
   l, H;
  e("body");
  var za = e(window),
   S = e(document),
   Cb, Lb = HAPUtils.hasDownloadSupport(),
   Dc = HAPUtils.isIOS();
  HAPUtils.isAndroid();
  var vc = HAPUtils.canPlayMp3(),
   wc = HAPUtils.canPlayWav();
  HAPUtils.volumeCanBeSet();
  var oc = K + "includes/ba-simple-proxy.php",
   ta, ub, Rb, Ha, g, O, Hb, M, N = [],
   aa, Ab, Qb, cc, Ga, Fa, qb, wb = !0,
   Da, ua, J,
   ia, Na, Ma, sa = -1,
   G = [],
   I = [],
   t = 0,
   zb, ra, v, ya, B, Pa, ja, u, Ia, Sa, Q, Ca = !0;
  bb = bb.split(",").map(function(a) {
   return a.trim()
  });
  window.hap_data && (c.ajax_url = window.hap_data.ajax_url);
  window.playlistScrollLoading = !1;
  qa && HAPUtils.checkCssExist(HAPUtils.qualifyURL(K + "css/jquery.mCustomScrollbar.css"));
  "undefined" === typeof window.hap_mediaArr && (window.hap_mediaArr = []);
  window.hap_mediaArr.push({
   inst: k,
   id: D
  });
  Y && (va = !1);
  W && Aa.find("i").addClass("haps-contr-btn-hover");
  X && Ba.find("i").addClass("haps-contr-btn-hover");
  m.find(".haps-select").change(function() {
   k.loadPlaylist(e(this).val())
  });
  0 == p.length && (p = e("<div></div>"), Ea = Oa = qa = wb = !1);
  if ("ontouchstart" in window) {
   var jb = "touchstart.ap mousedown.ap";
   var P = "touchmove.ap mousemove.ap";
   var xa = "touchend.ap mouseup.ap"
  } else window.PointerEvent ? (jb = "pointerdown.ap", P = "pointermove.ap", xa = "pointerup.ap") : (jb = "mousedown.ap", P = "mousemove.ap", xa = "mouseup.ap");
  var dc = m.find(".haps-media-title-mask"),
   ec = m.find(".haps-media-title");
  if (gb)
   if ("undefined" === typeof HAPTextScroller) {
    var L =
     document.createElement("script");
    L.type = "text/javascript";
    L.src = HAPUtils.qualifyURL(K + "js/textscroller.js");
    L.onload = L.onreadystatechange = function() {
     this.readyState && "complete" != this.readyState || (ka = new HAPTextScroller({
      settings: c,
      mask: dc,
      container: ec
     }), u && ka.input(vb(u)))
    };
    L.onerror = function() {
     alert("Error loading " + this.src)
    };
    var Ra = document.getElementsByTagName("script")[0];
    Ra.parentNode.insertBefore(L, Ra)
   } else var ka = new HAPTextScroller({
    settings: c,
    mask: dc,
    container: ec
   });
  m.find(".haps-search-filter").on("keyup.apfilter",
   function() {
    if (0 == t) return !1;
    var a = e(this).val(),
     b, c = 0;
    for (b = 0; b < t; b++) {
     var d = p.children(".haps-playlist-item").eq(b).find(".haps-playlist-title").html(); - 1 < d.indexOf(a) ? p.children(".haps-playlist-item").eq(b).show() : (p.children(".haps-playlist-item").eq(b).hide(), c++)
    }
    c == t ? $b.show() : $b.hide()
   });
  HAPUtils.isEmpty(ob) || "file:" == window.location.protocol || wa(ob);
  var r = new HAPPlaylistManager(c);
  e(r).on("HAPPlaylistManager.COUNTER_READY", function() {
   B && Qa();
   var a = r.getCounter(),
    b = p.children(".haps-playlist-item").eq(a);
   u = Xa(b);
   //console.log(u);
   B = u.type;
   hc(a);
   Zb();
   bc && (navigator.mediaSession.metadata = new MediaMetadata({
    title: u.title,
    artist: u.artist || "",
    album: u.album || "",
    artwork: [{
     src: u.thumb || ""
    }]
   }));
   db();
   e(k).trigger("soundRequest", {
    instance: k,
    instanceName: D,
    counter: a
   })
  });
  Cc && (window.attachEvent || window.addEventListener)(Dc ? "pagehide" : "beforeunload", function(a) {
   window.event && (window.event.cancelBubble = !0);
   if (!l || !B) return !1;
   a = {
    volume: x,
    activeItem: r.getCounter(),
    resumeTime: k.getCurrentTime(),
    autoPlay: ja
   };
   localStorage.setItem(ib,
    JSON.stringify(a))
  });
  bc && (navigator.mediaSession.setActionHandler("play", function() {
   k.playMedia()
  }), navigator.mediaSession.setActionHandler("pause", function() {
   k.pauseMedia()
  }), navigator.mediaSession.setActionHandler("previoustrack", function() {
   k.previousMedia()
  }), navigator.mediaSession.setActionHandler("nexttrack", function() {
   k.nextMedia()
  }), navigator.mediaSession.setActionHandler("seekbackward", function() {
   k.seekBackward()
  }), navigator.mediaSession.setActionHandler("seekforward", function() {
   k.seekForward()
  }));
  var y = m.find(".haps-tooltip");
  Y || ("static" == m.css("position") && console.log("wrapper css position is static, therefore tooltip might not work correctly. Please set wrapper css to other than static."), m.on("mouseenter", "[data-tooltip]", function(a) {
   var b = e(this);
   a = m[0].getBoundingClientRect();
   var c = b[0].getBoundingClientRect();
   y.text(b.attr("data-tooltip"));
   var d = parseInt(c.top - a.top - y.outerHeight());
   b = parseInt(c.left - a.left - y.outerWidth() / 2 + b.outerWidth() / 2);
   b + y.outerWidth() > m.width() ? b = m.width() - y.outerWidth() :
    0 > b && (b = 0);
   0 > d + a.top && (d = parseInt(c.top - a.top + y.outerHeight() + 15));
   y.css({
    left: b + "px",
    top: d + "px"
   }).show()
  }).on("mouseleave", "[data-tooltip]", function(a) {
   y.hide()
  }));
  var Ja = m.find(".haps-circle-player").length,
   Ta;
  Ja && HAPUtils.hasCanvas() && "undefined" === typeof HAPCirclePlayer && (L = document.createElement("script"), L.type = "text/javascript", L.src = HAPUtils.qualifyURL(K + "js/circleplayer.js"), L.onload = L.onreadystatechange = function() {
   this.readyState && "complete" != this.readyState || (Ta = new HAPCirclePlayer({
    settings: c,
    parent: m
   }))
  }, L.onerror = function() {
   alert("Error loading " + this.src)
  }, Ra = document.getElementsByTagName("script")[0], Ra.parentNode.insertBefore(L, Ra));
  var T = Ja ? m.find(".haps-progress-canvas") : m.find(".haps-seekbar");
  T.on(jb, function(a) {
   if (cc) return !1;
   w(a);
   return !1
  });
  if (!Y) {
   var kb = function() {
    ya && (T.off(P, A).off("mouseout", kb), S.off("mouseout", kb), y.hide())
   };
   T.on("mouseover", function() {
    ya && void 0 == e(this).attr("data-hide-tooltip") && (T.on(P, A).on("mouseout", kb), S.on("mouseout", kb))
   })
  }
  var pb = .5,
   Va, na = R.hasClass("haps-volume-vertical"),
   da = na ? ca.height() : ca.width();
  0 > x ? x = 0 : 1 < x && (x = 1);
  0 != x && (pb = x);
  R.on(jb, function(a) {
   F(a);
   return !1
  });
  if (!Y) {
   var lb = function() {
    R.off(P, oa).off("mouseout", lb);
    S.off("mouseout", lb);
    y.hide()
   };
   R.on("mouseover", function() {
    R.on(P, oa).on("mouseout", lb);
    S.on("mouseout", lb)
   })
  }
  if (c.disableRightClickOverPlayer) m.on("contextmenu", function() {
   return !1
  });
  Bc && S.keyup(function(a) {
   if (!l) return !1;
   var b = a.keyCode,
    c = e(a.target);
   if (37 == b) k.previousMedia();
   else if (39 == b) k.nextMedia();
   else if (32 == b) {
    if (c.hasClass("haps-search-filter")) return !1;
    k.togglePlayback();
    a.preventDefault()
   } else if (77 == b) {
    if (c.hasClass("haps-search-filter")) return !1;
    ma()
   }
  });
  var fc = [m.find(".haps-next-toggle"), m.find(".haps-prev-toggle"), m.find(".haps-playlist-toggle"), m.find(".haps-playlist-close"), m.find(".haps-share-item"), Ac, hb, eb, Aa, Ba, Wa],
   Ec = fc.length,
   mb;
  for (mb = 0; mb < Ec; mb++) e(fc[mb]).css("cursor", "pointer").on("click", Ka);
  za.on("resize", function() {
   if (!l) return !1;
   Cb && clearTimeout(Cb);
   Cb = setTimeout(Nb, 150)
  });
  V && (m.on("click", ".haps-like-count", function(a) {
   if (!l || !B) return !1;
   a = e(this).closest(".haps-playlist-item");
   ea("hap_like_count", a)
  }), m.on("click", ".haps-download-count:not(.haps-no-download)", function(a) {
   if (!l || !B) return !1;
   a = e(this).closest(".haps-playlist-item");
   ea("haps_download_count", a)
  }));
  this.playMedia = function() {
   if (!l || !B || ja) return !1;
   if (g) {
    var a = g.play();
    void 0 !== a && a.then(function() {})["catch"](function(a) {})
   }
  };
  this.pauseMedia = function() {
   if (!l || !B || !ja) return !1;
   g && g.pause()
  };
  this.checkMedia = function(a) {
   if (!l || !B) return !1;
   a = a.toLowerCase();
   ja && "pause" == a && g &&
    g.pause()
  };
  this.togglePlayback = function() {
   if (!l || !B) return !1;
   if (g)
    if (g.paused) {
     var a = g.play();
     void 0 !== a && a.then(function() {})["catch"](function(a) {})
    } else g.pause()
  };
  this.nextMedia = function() {
   if (!l) return !1;
   0 != t && (V && v && ea("haps_play_count", v), r.advanceHandler(1, !0))
  };
  this.previousMedia = function() {
   if (!l) return !1;
   0 != t && (V && v && ea("haps_play_count", v), r.advanceHandler(-1, !0))
  };
  this.loadMedia = function(a) {
   if (!l || H) return !1;
   if (0 != t) {
    if ("undefined" === typeof a) return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."),
     !1;
    if ("string" === typeof a) {
     var b;
     p.find(".haps-playlist-item").each(function() {
      if (e(this).find(".haps-playlist-title").html() == a) return a = e(this).index(), b = !0, !1
     });
     if (!b) return alert('Track with title "' + a + '" doesnt exist. LoadMedia failed.'), !1
    } else if ("number" === typeof a) {
     if (0 > a || a > t - 1) return alert('Invalid track number. Track number  "' + a + '" doesnt exist. LoadMedia failed.'), !1
    } else return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."), !1;
    V &&
     v && ea("haps_play_count", v);
    r.processPlaylistRequest(a)
   }
  };
  this.loadMore = function(a) {
   if (!l || H) return !1;
   H = !0;
   Z.show();
   "soundcloud" == a ? Kb() : "podcast" == a && Jb()
  };
  this.setLoadMore = function(a) {
   Ya = a
  };
  this.loadPlaylist = function(a) {
   if (!l || H) return !1;
   if ("undefined" === typeof a || HAPUtils.isEmpty(a)) return alert("loadPlaylist method requires id parameter. loadPlaylist failed."), !1;
   if (tb == a) return !1;
   Db(a)
  };
  this.addTrack = function(a, b, c, d) {
   if (!l || H) return !1;
   if ("undefined" === typeof a) return alert("addTrack method requires format parameter. AddTrack failed."),
    !1;
   if ("undefined" === typeof b) return alert("addTrack method requires track parameter. AddTrack failed."), !1;
   Na = !1;
   "undefined" !== typeof c && (Na = c);
   c = 1;
   var f = !1;
   if ("string" !== typeof b && "[object Object]" !== Object.prototype.toString.call(b))
    if ("[object Array]" === Object.prototype.toString.call(b)) c = b.length, f = !0;
    else return alert("addTrack method requires track as string, object or array parameter. AddTrack failed."), !1;
   J = d;
   ua = !1;
   ia = !0;
   if (ra)
    if ("undefined" !== typeof J) {
     if (0 > J || J > t) return alert('Invalid position to insert track to. Position number "' +
      d + '" doesnt exist. AddTrack failed.'), !1;
     J == t && (ua = !0)
    } else ua = !0, J = t;
   else {
    if ("undefined" !== typeof J) {
     if (0 != J) return alert('Invalid position to insert track to. Position number "' + d + '" doesnt exist. AddTrack failed.'), !1
    } else J = 0;
    ua = !0
   }
   H = !0;
   Z.show();
   sa = -1;
   G = [];
   I = [];
   for (d = 0; d < c; d++) {
    var g = f ? b[d] : b;
    g = "html" == a ? e(e.parseHTML(g)) : g;
    I.push(g)
   }
   t = I.length;
   Ma = !1;
   ra || (Ma = !0);
   ra = p;
   z()
  };
  this.inputAudio = function(a) {
   if (!l || H) return !1;
   if ("undefined" === typeof a) return alert("inputAudio method requires data parameter. inputAudio failed."),
    !1;
   v && fa();
   0 < t && r.reSetCounter();
   u = a;
   B = "audio";
   Zb();
   a.disableAutoPlay || (va = !0);
   db()
  };
  this.removeTrack = function(a) {
   if (!l || H) return !1;
   if (0 != t) {
    if ("undefined" === typeof a) return alert("removeTrack method requires id parameter. removeTrack failed."), !1;
    if ("string" === typeof a) {
     var b = !1;
     p.find(".haps-playlist-item").each(function() {
      if (e(this).find(".haps-playlist-title").html() == a) return c = e(this), a = c.index(), b = !0, !1
     });
     if (!b) return alert('Track with title "' + a + '" doesnt exist. RemoveTrack failed.'), !1
    } else if ("number" ===
     typeof a) {
     a = parseInt(a, 10);
     if (0 > a || a > t - 1) return alert('Invalid id number. Track number  "' + a + '" doesnt exist. RemoveTrack failed.'), !1;
     var c = p.find(".haps-playlist-item").eq(a)
    } else return alert("removeTrack method requires either a id number or a track title to remove. removeTrack failed."), !1;
    c.remove();
    Mb();
    if (0 < t) {
     var d = r.getCounter();
     a == d ? (Qa(), r.setPlaylistItems(t)) : (r.setPlaylistItems(t, !1), a < d && r.reSetCounter(r.getCounter() - 1))
    } else sb()
   }
  };
  this.sort = function(a, b) {
   if (!l) return !1;
   if (0 != t) {
    if ("undefined" ===
     typeof a) return console.log("Sort method requires type parameter. Sort method failed."), !1;
    var c = a.toLowerCase();
    if ("title" == c) b ? (p.children(".haps-playlist-item").sort(function(a, b) {
     return e(b).find(".haps-playlist-title").html() > e(a).find(".haps-playlist-title").html() ? 1 : -1
    }).appendTo(p), Ca = !1) : (p.children(".haps-playlist-item").sort(function(a, b) {
     return e(b).find(".haps-playlist-title").html() < e(a).find(".haps-playlist-title").html() ? 1 : -1
    }).appendTo(p), Ca = !0);
    else if ("random" == c) {
     for (c = p.children(); c.length;) p.append(c.splice(Math.floor(Math.random() *
      c.length), 1));
     Ca = !1
    } else return console.log("Sort method requires type parameter. Sort method failed."), !1;
    Ca ? hb.find("i").removeClass("haps-icon-sort-alpha-up").addClass("haps-icon-sort-alpha-down") : hb.find("i").removeClass("haps-icon-sort-alpha-down").addClass("haps-icon-sort-alpha-up");
    v && (c = v.closest(".haps-playlist-item").index(), r.reSetCounter(c));
    Ea && yb()
   }
  };
  this.destroyInstance = function() {
   za && za.off("resize");
   R && R.off();
   T && T.off();
   Qa();
   qa && (ha.mCustomScrollbar("destroy"), Fa = !1);
   Oa && (p.sortable("destroy"),
    Ga = !1)
  };
  this.destroyMedia = function() {
   if (!l) return !1;
   l && B && (v && fa(), Qa(), r.reSetCounter())
  };
  this.destroyPlaylist = function() {
   if (!l) return !1;
   sb()
  };
  this.setPlaybackRate = function(a) {
   if (!l || !B) return !1;
   g && (g.playbackRate = Number(a))
  };
  this.toggleRandom = function(a) {
   if (!l || "undefined" === typeof r) return !1;
   X = "undefined" !== typeof a ? a : !X;
   r.setRandom(X);
   X ? Ba.find("i").addClass("haps-contr-btn-hover") : Ba.find("i").removeClass("haps-contr-btn-hover")
  };
  this.toggleLoop = function(a) {
   if (!l || "undefined" === typeof r) return !1;
   W = "undefined" !== typeof a ? a : !W;
   r.setLooping(W);
   W ? Aa.find("i").addClass("haps-contr-btn-hover") : Aa.find("i").removeClass("haps-contr-btn-hover")
  };
  this.getVolume = function() {
   return x
  };
  this.setVolume = function(a) {
   if (!l) return !1;
   0 > a ? a = 0 : 1 < a && (a = 1);
   ba(a)
  };
  this.toggleMute = function() {
   if (!l) return !1;
   ma()
  };
  this.disableSeek = function(a) {
   cc = a
  };
  this.seek = function(a) {
   if (!l || !B) return !1;
   try {
    g.currentTime = a
   } catch (b) {
    console.log(b)
   }
  };
  this.seekBackward = function() {
   if (!l || !B) return !1;
   if (g) try {
    g.currentTime = Math.max(g.currentTime -
     10, 0)
   } catch (a) {
    console.log(a)
   }
  };
  this.seekForward = function() {
   if (!l || !B) return !1;
   if (g) try {
    g.currentTime = Math.min(g.currentTime + 10, g.duration)
   } catch (a) {
    console.log(a)
   }
  };
  this.getCurrentTime = function() {
   if (!l || !B) return !1;
   var a = 0;
   g && (a = g.currentTime);
   return a
  };
  this.getDuration = function() {
   if (!l || !B) return !1;
   if (g) var a = g.duration;
   return a
  };
  this.destroyPlayerThumb = function() {
   la && la.empty()
  };
  this.destroyPlaylistScroll = function() {
   if (!l) return !1;
   qa && (ha.mCustomScrollbar("destroy"), Fa = !1)
  };
  this.getSetupDone = function() {
   return l
  };
  this.getMediaPlaying = function() {
   return l ? ja : !1
  };
  this.getPlaylistLoading = function() {
   return H
  };
  this.getCounter = function() {
   return l ? "undefined" !== typeof r ? r.getCounter() : -1 : !1
  };
  this.getPlaylistLength = function() {
   return l ? HAPUtils.isNumber(t) ? t : 0 : !1
  };
  this.getSettings = function() {
   return c
  };
  this.getCurrMediaData = function() {
   return l ? u : !1
  };
  this.getWrapper = function() {
   return m
  };
  this.getActivePlaylistItem = function() {
   return v
  };
  this.setPlaylistSize = function(a) {
   if (!l) return !1;
   var b = p.find(".haps-playlist-item").eq(0);
   "w" == a ? p.width(t * b.outerWidth(!0)) : p.width(t * b.outerHeight(!0))
  };
  this.getPlaylistItemSize = function(a) {
   if (!l) return !1;
   var b = p.find(".haps-playlist-item").eq(0);
   return "w" == a ? b.outerWidth(!0) : b.outerHeight(!0)
  };
  this.getPlaylistItems = function() {
   if (!l) return !1;
   var a = [];
   p.find(".haps-playlist-item").each(function() {
    a.push(e(this))
   });
   return a
  };
  if (ac && localStorage.getItem(ib)) {
   var nb = JSON.parse(localStorage.getItem(ib));
   c.resumeTime = nb.resumeTime;
   x = nb.volume;
   va = nb.autoPlay;
   c.activeItem = nb.activeItem;
   localStorage.removeItem(ib)
  }
  c.activePlaylist &&
   !HAPUtils.isEmpty(c.activePlaylist) ? Db(c.activePlaylist) : tc();
  return this
 }
})(jQuery);
(function(e) {
 var c = function() {};
 c.checkCssExist = function(c) {
  for (var d = document.styleSheets, e = 0, C = d.length; e < C; e++)
   if (d[e].href == c) return;
  d = document.createElement("link");
  d.rel = "stylesheet";
  d.href = c;
  document.getElementsByTagName("head")[0].appendChild(d)
 };
 c.isEmpty = function(c) {
  return 0 == c.replace(/^\s+|\s+$/g, "").length
 };
 c.isNumber = function(c) {
  return !isNaN(parseFloat(c)) && isFinite(c)
 };
 c.isMobile = function() {
  return /Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent)
 };
 c.isIE = function() {
  var c = -1;
  if ("Microsoft Internet Explorer" == navigator.appName) {
   var e = navigator.userAgent,
    w = /MSIE ([0-9]{1,}[.0-9]{0,})/;
   null != w.exec(e) && (c = parseFloat(RegExp.$1))
  } else "Netscape" == navigator.appName && (e = navigator.userAgent, w = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != w.exec(e) && (c = parseFloat(RegExp.$1)));
  return -1 != c ? !0 : !1
 };
 c.isIOS = function() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
 };
 c.isAndroid = function() {
  return -1 < navigator.userAgent.indexOf("Android")
 };
 c.hasDownloadSupport = function() {
  return "download" in
   document.createElement("a")
 };
 c.qualifyURL = function(c) {
  var d = document.createElement("a");
  d.href = c;
  return d.href
 };
 c.relativePath = function(c) {
  return /^(?:[a-z]+:)?\/\//i.test(c)
 };
 c.hasLocalStorage = function() {
  try {
   return "localStorage" in e && null !== e.localStorage
  } catch (d) {
   return !1
  }
 };
 c.volumeCanBeSet = function() {
  var c = document.createElement("audio");
  if (!c) return !1;
  c.volume = 0;
  return 0 == c.volume ? !0 : !1
 };
 c.randomiseArray = function(c) {
  var d = [],
   e = [],
   C;
  for (C = 0; C < c; C++) d[C] = C;
  for (C = 0; C < c; C++) {
   var A = Math.round(Math.random() *
    (d.length - 1));
   e[C] = d[A];
   d.splice(A, 1)
  }
  return e
 };
 c.sortArray = function(c, e) {
  var d, wa = c.length,
   A = [];
  for (d = 0; d < wa; d++) A[d] = c[e[d]];
  return A
 };
 c.keysrt = function(c, e, w) {
  var d = 1;
  w && (d = -1);
  return c.sort(function(c, w) {
   var wa = c[e],
    q = w[e];
   return d * (wa < q ? -1 : wa > q ? 1 : 0)
  })
 };
 c.parseXML = function(c) {
  if (e.ActiveXObject && e.GetObject) {
   var d = new ActiveXObject("Microsoft.XMLDOM");
   d.loadXML(c);
   return d
  }
  if (e.DOMParser) return (new DOMParser).parseFromString(c, "text/xml");
  throw Error("No XML parser available");
 };
 c.formatTime =
  function(c) {
   c = parseInt(c, 10);
   var d = Math.floor(c / 3600),
    e = Math.floor((c - 3600 * d) / 60);
   c = c - 3600 * d - 60 * e;
   if (0 < d) return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), 10 > c && (c = "0" + c), d + ":" + e + ":" + c;
   10 > e && (e = "0" + e);
   10 > c && (c = "0" + c);
   return e + ":" + c
  };
 c.formatNumber = function(c) {
  return 9 > c ? "0" + (c + 1) : c + 1
 };
 c.nFormatter = function(c, e) {
  var d = [{
    value: 1E18,
    symbol: "E"
   }, {
    value: 1E15,
    symbol: "P"
   }, {
    value: 1E12,
    symbol: "T"
   }, {
    value: 1E9,
    symbol: "G"
   }, {
    value: 1E6,
    symbol: "M"
   }, {
    value: 1E3,
    symbol: "k"
   }],
   C = /\.0+$|(\.[0-9]*[1-9])0+$/,
   A;
  for (A = 0; A < d.length; A++)
   if (c >=
    d[A].value) return (c / d[A].value).toFixed(e).replace(C, "$1") + d[A].symbol;
  return c.toFixed(e).replace(C, "$1")
 };
 c.hmsToSecondsOnly = function(c) {
  c = c.split(":");
  for (var d = 0, e = 1; 0 < c.length;) d += e * parseInt(c.pop()), e *= 60;
  return d
 };
 c.canPlayMp3 = function() {
  var c = document.createElement("audio");
  return !(!c.canPlayType || !c.canPlayType("audio/mpeg;").replace(/no/, ""))
 };
 c.canPlayWav = function() {
  var c = document.createElement("audio");
  return !(!c.canPlayType || !c.canPlayType("audio/wav;").replace(/no/, ""))
 };
 c.canPlayOgg =
  function() {
   var c = document.createElement("audio");
   return !(!c.canPlayType || !c.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))
  };
 c.hasCanvas = function() {
  return !!document.createElement("canvas")
 };
 c.getElementOffsetTop = function(c) {
  c = c.getBoundingClientRect();
  var d = document.body,
   w = document.documentElement;
  return Math.round(c.bottom - 100 + (e.pageYOffset || w.scrollTop || d.scrollTop) - (w.clientTop || d.clientTop || 0))
 };
 c.getScrollTop = function(c) {
  c = document.documentElement;
  return (e.pageYOffset || c.scrollTop) -
   (c.clientTop || 0)
 };
 e.HAPUtils = c
})(window);
(function(e, c) {
 e.HAPPlaylistManager = function(d) {
  function e() {
   E = HAPUtils.randomiseArray(F)
  }
  var w = this,
   C = d.loopingOn,
   A = d.randomPlay,
   F, ma = !1,
   q = -1,
   ba, oa, U = !1,
   E = [],
   pa = !1;
  this.setCounter = function(d, fa) {
   "undefined" === typeof fa && (fa = !0);
   q = fa ? q + parseInt(d, 10) : parseInt(d, 10);
   if (isNaN(q)) alert("HAPPlaylistManager message: No active media, counter = " + q);
   else if (ma = !1, C) {
    if (A)
     if (q > F - 1) {
      q = E[F - 1];
      e();
      if (E[0] == q) {
       var Ka = E.splice(0, 1);
       E.push(Ka)
      }
      q = 0;
      c(w).trigger("HAPPlaylistManager.PLAYLIST_END_ALERT")
     } else 0 > q &&
      (q = E[0], e(), E[F - 1] == q && (Ka = E.splice(F - 1, 1), E.unshift(Ka)), q = F - 1);
    else q > F - 1 ? (q = 0, c(w).trigger("HAPPlaylistManager.PLAYLIST_END_ALERT")) : 0 > q && (q = F - 1);
    c(w).trigger("HAPPlaylistManager.COUNTER_READY")
   } else q > F - 1 ? (q = F - 1, ma = !0) : 0 > q && (q = 0), ma ? c(w).trigger("HAPPlaylistManager.PLAYLIST_END") : c(w).trigger("HAPPlaylistManager.COUNTER_READY")
  };
  this.getCounter = function() {
   return A ? pa ? q : E[q] : q
  };
  this.advanceHandler = function(d) {
   pa = !1;
   U ? (U = !1, oa + d > F - 1 ? (q = F - 1, c(w).trigger("HAPPlaylistManager.COUNTER_READY")) : 0 > oa +
    d ? (q = 0, c(w).trigger("HAPPlaylistManager.COUNTER_READY")) : w.setCounter(oa + d, !1)) : w.setCounter(d)
  };
  this.processPlaylistRequest = function(c) {
   pa = !1;
   A && (pa = !0, ba = c, U || (oa = q, U = !0));
   w.setCounter(c, !1)
  };
  this.setPlaylistItems = function(c, d) {
   "undefined" === typeof d && (d = !0);
   d && (q = -1);
   F = c;
   A && e()
  };
  this.reSetCounter = function(c) {
   "undefined" === typeof c ? q = -1 : (c = parseInt(c, 10), F ? (c > F - 1 ? c = F - 1 : 0 > c && (c = 0), q = c) : q = -1)
  };
  this.setRandom = function(c) {
   (A = c) && e();
   if (A) {
    var d = E.length;
    for (c = 0; c < d; c++)
     if (E[c] == q) {
      if (0 == c) break;
      c = E.splice(c,
       1);
      E.unshift(parseInt(c, 10));
      break
     } q = 0
   } else U ? (q = ba, U = !1) : q = E[q]
  };
  this.setLooping = function(c) {
   C = c
  };
  this.getPosition = function(c) {
   return E.indexOf(c)
  }
 }
})(window, jQuery);