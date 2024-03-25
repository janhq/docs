"use strict";
exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 95664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function() {
  if (typeof Prism > "u" || typeof document > "u")
    return;
  var j = (
    /*dependencies_placeholder[*/
    {
      javascript: "clike",
      actionscript: "javascript",
      apex: [
        "clike",
        "sql"
      ],
      arduino: "cpp",
      aspnet: [
        "markup",
        "csharp"
      ],
      birb: "clike",
      bison: "c",
      c: "clike",
      csharp: "clike",
      cpp: "c",
      cfscript: "clike",
      chaiscript: [
        "clike",
        "cpp"
      ],
      cilkc: "c",
      cilkcpp: "cpp",
      coffeescript: "javascript",
      crystal: "ruby",
      "css-extras": "css",
      d: "clike",
      dart: "clike",
      django: "markup-templating",
      ejs: [
        "javascript",
        "markup-templating"
      ],
      etlua: [
        "lua",
        "markup-templating"
      ],
      erb: [
        "ruby",
        "markup-templating"
      ],
      fsharp: "clike",
      "firestore-security-rules": "clike",
      flow: "javascript",
      ftl: "markup-templating",
      gml: "clike",
      glsl: "c",
      go: "clike",
      gradle: "clike",
      groovy: "clike",
      haml: "ruby",
      handlebars: "markup-templating",
      haxe: "clike",
      hlsl: "c",
      idris: "haskell",
      java: "clike",
      javadoc: [
        "markup",
        "java",
        "javadoclike"
      ],
      jolie: "clike",
      jsdoc: [
        "javascript",
        "javadoclike",
        "typescript"
      ],
      "js-extras": "javascript",
      json5: "json",
      jsonp: "json",
      "js-templates": "javascript",
      kotlin: "clike",
      latte: [
        "clike",
        "markup-templating",
        "php"
      ],
      less: "css",
      lilypond: "scheme",
      liquid: "markup-templating",
      markdown: "markup",
      "markup-templating": "markup",
      mongodb: "javascript",
      n4js: "javascript",
      objectivec: "c",
      opencl: "c",
      parser: "markup",
      php: "markup-templating",
      phpdoc: [
        "php",
        "javadoclike"
      ],
      "php-extras": "php",
      plsql: "sql",
      processing: "clike",
      protobuf: "clike",
      pug: [
        "markup",
        "javascript"
      ],
      purebasic: "clike",
      purescript: "haskell",
      qsharp: "clike",
      qml: "javascript",
      qore: "clike",
      racket: "scheme",
      cshtml: [
        "markup",
        "csharp"
      ],
      jsx: [
        "markup",
        "javascript"
      ],
      tsx: [
        "jsx",
        "typescript"
      ],
      reason: "clike",
      ruby: "clike",
      sass: "css",
      scss: "css",
      scala: "java",
      "shell-session": "bash",
      smarty: "markup-templating",
      solidity: "clike",
      soy: "markup-templating",
      sparql: "turtle",
      sqf: "clike",
      squirrel: "clike",
      stata: [
        "mata",
        "java",
        "python"
      ],
      "t4-cs": [
        "t4-templating",
        "csharp"
      ],
      "t4-vb": [
        "t4-templating",
        "vbnet"
      ],
      tap: "yaml",
      tt2: [
        "clike",
        "markup-templating"
      ],
      textile: "markup",
      twig: "markup-templating",
      typescript: "javascript",
      v: "clike",
      vala: "clike",
      vbnet: "basic",
      velocity: "markup",
      wiki: "markup",
      xeora: "markup",
      "xml-doc": "markup",
      xquery: "markup"
    }
  ), k = (
    /*aliases_placeholder[*/
    {
      html: "markup",
      xml: "markup",
      svg: "markup",
      mathml: "markup",
      ssml: "markup",
      atom: "markup",
      rss: "markup",
      js: "javascript",
      g4: "antlr4",
      ino: "arduino",
      "arm-asm": "armasm",
      art: "arturo",
      adoc: "asciidoc",
      avs: "avisynth",
      avdl: "avro-idl",
      gawk: "awk",
      sh: "bash",
      shell: "bash",
      shortcode: "bbcode",
      rbnf: "bnf",
      oscript: "bsl",
      cs: "csharp",
      dotnet: "csharp",
      cfc: "cfscript",
      "cilk-c": "cilkc",
      "cilk-cpp": "cilkcpp",
      cilk: "cilkcpp",
      coffee: "coffeescript",
      conc: "concurnas",
      jinja2: "django",
      "dns-zone": "dns-zone-file",
      dockerfile: "docker",
      gv: "dot",
      eta: "ejs",
      xlsx: "excel-formula",
      xls: "excel-formula",
      gamemakerlanguage: "gml",
      po: "gettext",
      gni: "gn",
      ld: "linker-script",
      "go-mod": "go-module",
      hbs: "handlebars",
      mustache: "handlebars",
      hs: "haskell",
      idr: "idris",
      gitignore: "ignore",
      hgignore: "ignore",
      npmignore: "ignore",
      webmanifest: "json",
      kt: "kotlin",
      kts: "kotlin",
      kum: "kumir",
      tex: "latex",
      context: "latex",
      ly: "lilypond",
      emacs: "lisp",
      elisp: "lisp",
      "emacs-lisp": "lisp",
      md: "markdown",
      moon: "moonscript",
      n4jsd: "n4js",
      nani: "naniscript",
      objc: "objectivec",
      qasm: "openqasm",
      objectpascal: "pascal",
      px: "pcaxis",
      pcode: "peoplecode",
      plantuml: "plant-uml",
      pq: "powerquery",
      mscript: "powerquery",
      pbfasm: "purebasic",
      purs: "purescript",
      py: "python",
      qs: "qsharp",
      rkt: "racket",
      razor: "cshtml",
      rpy: "renpy",
      res: "rescript",
      robot: "robotframework",
      rb: "ruby",
      "sh-session": "shell-session",
      shellsession: "shell-session",
      smlnj: "sml",
      sol: "solidity",
      sln: "solution-file",
      rq: "sparql",
      sclang: "supercollider",
      t4: "t4-cs",
      trickle: "tremor",
      troy: "tremor",
      trig: "turtle",
      ts: "typescript",
      tsconfig: "typoscript",
      uscript: "unrealscript",
      uc: "unrealscript",
      url: "uri",
      vb: "visual-basic",
      vba: "visual-basic",
      webidl: "web-idl",
      mathematica: "wolfram",
      nb: "wolfram",
      wl: "wolfram",
      xeoracube: "xeora",
      yml: "yaml"
    }
  ), l = {}, y = "none", p = "components/", m = Prism.util.currentScript();
  if (m) {
    var d = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i, g = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i, f = m.getAttribute("data-autoloader-path");
    if (f != null)
      p = f.trim().replace(/\/?$/, "/");
    else {
      var n = m.src;
      d.test(n) ? p = n.replace(d, "components/") : g.test(n) && (p = n.replace(g, "$1components/"));
    }
  }
  var h = Prism.plugins.autoloader = {
    languages_path: p,
    use_minified: !0,
    loadLanguages: u
  };
  function x(e, r, t) {
    var a = document.createElement("script");
    a.src = e, a.async = !0, a.onload = function() {
      document.body.removeChild(a), r && r();
    }, a.onerror = function() {
      document.body.removeChild(a), t && t();
    }, document.body.appendChild(a);
  }
  function q(e) {
    var r = (e.getAttribute("data-dependencies") || "").trim();
    if (!r) {
      var t = e.parentElement;
      t && t.tagName.toLowerCase() === "pre" && (r = (t.getAttribute("data-dependencies") || "").trim());
    }
    return r ? r.split(/\s*,\s*/g) : [];
  }
  function v(e) {
    if (e.indexOf("!") >= 0)
      return !1;
    if (e = k[e] || e, e in Prism.languages)
      return !0;
    var r = l[e];
    return r && !r.error && r.loading === !1;
  }
  function w(e) {
    return h.languages_path + "prism-" + e + (h.use_minified ? ".min" : "") + ".js";
  }
  function u(e, r, t) {
    typeof e == "string" && (e = [e]);
    var a = e.length, c = 0, s = !1;
    if (a === 0) {
      r && setTimeout(r, 0);
      return;
    }
    function i() {
      s || (c++, c === a && r && r(e));
    }
    e.forEach(function(b) {
      P(b, i, function() {
        s || (s = !0, t && t(b));
      });
    });
  }
  function P(e, r, t) {
    var a = e.indexOf("!") >= 0;
    e = e.replace("!", ""), e = k[e] || e;
    function c() {
      var i = l[e];
      i || (i = l[e] = {
        callbacks: []
      }), i.callbacks.push({
        success: r,
        error: t
      }), !a && v(e) ? o(e, "success") : !a && i.error ? o(e, "error") : (a || !i.loading) && (i.loading = !0, i.error = !1, x(w(e), function() {
        i.loading = !1, o(e, "success");
      }, function() {
        i.loading = !1, i.error = !0, o(e, "error");
      }));
    }
    var s = j[e];
    s && s.length ? u(s, c, t) : c();
  }
  function o(e, r) {
    if (l[e]) {
      for (var t = l[e].callbacks, a = 0, c = t.length; a < c; a++) {
        var s = t[a][r];
        s && setTimeout(s, 0);
      }
      t.length = 0;
    }
  }
  Prism.hooks.add("complete", function(e) {
    var r = e.element, t = e.language;
    if (!(!r || !t || t === y)) {
      var a = q(r);
      /^diff-./i.test(t) ? (a.push("diff"), a.push(t.substr(5))) : a.push(t), a.every(v) || u(a, function() {
        Prism.highlightElement(r);
      });
    }
  });
})();


/***/ })

};
;