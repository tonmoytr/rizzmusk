! function() {
    var e = {
            258: function() {
                window.CTCClipboard = function(e, t, o) {
                    var n;

                    function c() {
                        var c, r;
                        o.userAgent.match(/ipad|iphone/i) ? ((c = t.createRange()).selectNodeContents(n), (r = e.getSelection()).removeAllRanges(), r.addRange(c), n.setSelectionRange(0, 999999)) : n.select()
                    }
                    return copySelection = function(o) {
                        var n = e.getSelection(),
                            c = t.createRange();
                        c.selectNodeContents(o[0]), n.removeAllRanges(), n.addRange(c), t.execCommand("copy"), n.removeAllRanges()
                    }, {
                        copy: function(o) {
                            ! function(e) {
                                (n = t.createElement("textArea")).value = e, t.body.appendChild(n)
                            }(o), c(), t.execCommand("copy"), t.body.removeChild(n), "undefined" != typeof copyTheCode && copyTheCode.redirect_url && (e.location.href = copyTheCode.redirect_url)
                        },
                        copySelection: copySelection
                    }
                }(window, document, navigator)
            }
        },
        t = {};

    function o(n) {
        var c = t[n];
        if (void 0 !== c) return c.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, o), r.exports
    }
    o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, {
                a: t
            }), t
        }, o.d = function(e, t) {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e, t;
            o(258);
            e = jQuery, t = {
                init: function() {
                    this._bind()
                },
                _bind: function() {
                    e(document).on("click", ".wp-block-ctc-copy-button", this.doCopy)
                },
                doCopy: function(t) {
                    t.preventDefault();
                    var o = e(this),
                        n = o.closest(".ctc-copy-button-wrap").find(".ctc-copy-button-textarea").val().trim() || "",
                        c = o.text(),
                        r = o.attr("data-copied-text") || "Copied!";
                    n && (n = n.replace(/<br\s*\/?>/gi, "\n")), CTCClipboard.copy(n), o.addClass("copied").text(r), setTimeout((function() {
                        o.removeClass("copied").text(c)
                    }), 1e3)
                }
            }, e((function() {
                t.init()
            }))
        }()
}();