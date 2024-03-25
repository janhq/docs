"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 10623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ rr)
/* harmony export */ });
var M = {}, k = {};
function Fe(u, e, r) {
  if (r === void 0 && (r = Array.prototype), u && typeof r.find == "function")
    return r.find.call(u, e);
  for (var t = 0; t < u.length; t++)
    if (Object.prototype.hasOwnProperty.call(u, t)) {
      var n = u[t];
      if (e.call(void 0, n, t, u))
        return n;
    }
}
function bu(u, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(u) : u;
}
function xe(u, e) {
  if (u === null || typeof u != "object")
    throw new TypeError("target is not an object");
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (u[r] = e[r]);
  return u;
}
var Zu = bu({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(u) {
    return u === Zu.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Ju = bu({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(u) {
    return u === Ju.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
k.assign = xe;
k.find = Fe;
k.freeze = bu;
k.MIME_TYPE = Zu;
k.NAMESPACE = Ju;
var Wu = k, O = Wu.find, K = Wu.NAMESPACE;
function Se(u) {
  return u !== "";
}
function qe(u) {
  return u ? u.split(/[\t\n\f\r ]+/).filter(Se) : [];
}
function Oe(u, e) {
  return u.hasOwnProperty(e) || (u[e] = !0), u;
}
function Iu(u) {
  if (!u)
    return [];
  var e = qe(u);
  return Object.keys(e.reduce(Oe, {}));
}
function Re(u) {
  return function(e) {
    return u && u.indexOf(e) !== -1;
  };
}
function ru(u, e) {
  for (var r in u)
    Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
}
function y(u, e) {
  var r = u.prototype;
  if (!(r instanceof e)) {
    let t = function() {
    };
    t.prototype = e.prototype, t = new t(), ru(r, t), u.prototype = r = t;
  }
  r.constructor != u && (typeof u != "function" && console.error("unknown Class:" + u), r.constructor = u);
}
var T = {}, q = T.ELEMENT_NODE = 1, $ = T.ATTRIBUTE_NODE = 2, su = T.TEXT_NODE = 3, Ku = T.CDATA_SECTION_NODE = 4, ue = T.ENTITY_REFERENCE_NODE = 5, _e = T.ENTITY_NODE = 6, ee = T.PROCESSING_INSTRUCTION_NODE = 7, re = T.COMMENT_NODE = 8, te = T.DOCUMENT_NODE = 9, ne = T.DOCUMENT_TYPE_NODE = 10, L = T.DOCUMENT_FRAGMENT_NODE = 11, Le = T.NOTATION_NODE = 12, b = {}, v = {};
b.INDEX_SIZE_ERR = (v[1] = "Index size error", 1);
b.DOMSTRING_SIZE_ERR = (v[2] = "DOMString size error", 2);
var N = b.HIERARCHY_REQUEST_ERR = (v[3] = "Hierarchy request error", 3);
b.WRONG_DOCUMENT_ERR = (v[4] = "Wrong document", 4);
b.INVALID_CHARACTER_ERR = (v[5] = "Invalid character", 5);
b.NO_DATA_ALLOWED_ERR = (v[6] = "No data allowed", 6);
b.NO_MODIFICATION_ALLOWED_ERR = (v[7] = "No modification allowed", 7);
var ae = b.NOT_FOUND_ERR = (v[8] = "Not found", 8);
b.NOT_SUPPORTED_ERR = (v[9] = "Not supported", 9);
var ku = b.INUSE_ATTRIBUTE_ERR = (v[10] = "Attribute in use", 10);
b.INVALID_STATE_ERR = (v[11] = "Invalid state", 11);
b.SYNTAX_ERR = (v[12] = "Syntax error", 12);
b.INVALID_MODIFICATION_ERR = (v[13] = "Invalid modification", 13);
b.NAMESPACE_ERR = (v[14] = "Invalid namespace", 14);
b.INVALID_ACCESS_ERR = (v[15] = "Invalid access", 15);
function m(u, e) {
  if (e instanceof Error)
    var r = e;
  else
    r = this, Error.call(this, v[u]), this.message = v[u], Error.captureStackTrace && Error.captureStackTrace(this, m);
  return r.code = u, e && (this.message = this.message + ": " + e), r;
}
m.prototype = Error.prototype;
ru(b, m);
function _() {
}
_.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(u) {
    return u >= 0 && u < this.length ? this[u] : null;
  },
  toString: function(u, e) {
    for (var r = [], t = 0; t < this.length; t++)
      j(this[t], r, u, e);
    return r.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(u) {
    return Array.prototype.filter.call(this, u);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(u) {
    return Array.prototype.indexOf.call(this, u);
  }
};
function X(u, e) {
  this._node = u, this._refresh = e, wu(this);
}
function wu(u) {
  var e = u._node._inc || u._node.ownerDocument._inc;
  if (u._inc !== e) {
    var r = u._refresh(u._node);
    if (Ee(u, "length", r.length), !u.$$length || r.length < u.$$length)
      for (var t = r.length; t in u; t++)
        Object.prototype.hasOwnProperty.call(u, t) && delete u[t];
    ru(r, u), u._inc = e;
  }
}
X.prototype.item = function(u) {
  return wu(this), this[u] || null;
};
y(X, _);
function lu() {
}
function ie(u, e) {
  for (var r = u.length; r--; )
    if (u[r] === e)
      return r;
}
function Uu(u, e, r, t) {
  if (t ? e[ie(e, t)] = r : e[e.length++] = r, u) {
    r.ownerElement = u;
    var n = u.ownerDocument;
    n && (t && le(n, u, t), Ie(n, u, r));
  }
}
function Mu(u, e, r) {
  var t = ie(e, r);
  if (t >= 0) {
    for (var n = e.length - 1; t < n; )
      e[t] = e[++t];
    if (e.length = n, u) {
      var a = u.ownerDocument;
      a && (le(a, u, r), r.ownerElement = null);
    }
  } else
    throw new m(ae, new Error(u.tagName + "@" + r));
}
lu.prototype = {
  length: 0,
  item: _.prototype.item,
  getNamedItem: function(u) {
    for (var e = this.length; e--; ) {
      var r = this[e];
      if (r.nodeName == u)
        return r;
    }
  },
  setNamedItem: function(u) {
    var e = u.ownerElement;
    if (e && e != this._ownerElement)
      throw new m(ku);
    var r = this.getNamedItem(u.nodeName);
    return Uu(this._ownerElement, this, u, r), r;
  },
  /* returns Node */
  setNamedItemNS: function(u) {
    var e = u.ownerElement, r;
    if (e && e != this._ownerElement)
      throw new m(ku);
    return r = this.getNamedItemNS(u.namespaceURI, u.localName), Uu(this._ownerElement, this, u, r), r;
  },
  /* returns Node */
  removeNamedItem: function(u) {
    var e = this.getNamedItem(u);
    return Mu(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(u, e) {
    var r = this.getNamedItemNS(u, e);
    return Mu(this._ownerElement, this, r), r;
  },
  getNamedItemNS: function(u, e) {
    for (var r = this.length; r--; ) {
      var t = this[r];
      if (t.localName == e && t.namespaceURI == u)
        return t;
    }
    return null;
  }
};
function oe() {
}
oe.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(u, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(u, e, r) {
    var t = new tu();
    if (t.implementation = this, t.childNodes = new _(), t.doctype = r || null, r && t.appendChild(r), e) {
      var n = t.createElementNS(u, e);
      t.appendChild(n);
    }
    return t;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(u, e, r) {
    var t = new Du();
    return t.name = u, t.nodeName = u, t.publicId = e || "", t.systemId = r || "", t;
  }
};
function D() {
}
D.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(u, e) {
    return cu(this, u, e);
  },
  replaceChild: function(u, e) {
    cu(this, u, e, pe), e && this.removeChild(e);
  },
  removeChild: function(u) {
    return ce(this, u);
  },
  appendChild: function(u) {
    return this.insertBefore(u, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(u) {
    return gu(this.ownerDocument || this, this, u);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var u = this.firstChild; u; ) {
      var e = u.nextSibling;
      e && e.nodeType == su && u.nodeType == su ? (this.removeChild(e), u.appendData(e.data)) : (u.normalize(), u = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(u, e) {
    return this.ownerDocument.implementation.hasFeature(u, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(u) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r) {
        for (var t in r)
          if (Object.prototype.hasOwnProperty.call(r, t) && r[t] === u)
            return t;
      }
      e = e.nodeType == $ ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(u) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r && Object.prototype.hasOwnProperty.call(r, u))
        return r[u];
      e = e.nodeType == $ ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(u) {
    var e = this.lookupPrefix(u);
    return e == null;
  }
};
function se(u) {
  return u == "<" && "&lt;" || u == ">" && "&gt;" || u == "&" && "&amp;" || u == '"' && "&quot;" || "&#" + u.charCodeAt() + ";";
}
ru(T, D);
ru(T, D.prototype);
function uu(u, e) {
  if (e(u))
    return !0;
  if (u = u.firstChild)
    do
      if (uu(u, e))
        return !0;
    while (u = u.nextSibling);
}
function tu() {
  this.ownerDocument = this;
}
function Ie(u, e, r) {
  u && u._inc++;
  var t = r.namespaceURI;
  t === K.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value);
}
function le(u, e, r, t) {
  u && u._inc++;
  var n = r.namespaceURI;
  n === K.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""];
}
function Bu(u, e, r) {
  if (u && u._inc) {
    u._inc++;
    var t = e.childNodes;
    if (r)
      t[t.length++] = r;
    else {
      for (var n = e.firstChild, a = 0; n; )
        t[a++] = n, n = n.nextSibling;
      t.length = a, delete t[t.length];
    }
  }
}
function ce(u, e) {
  var r = e.previousSibling, t = e.nextSibling;
  return r ? r.nextSibling = t : u.firstChild = t, t ? t.previousSibling = r : u.lastChild = r, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, Bu(u.ownerDocument, u), e;
}
function ke(u) {
  return u && (u.nodeType === D.DOCUMENT_NODE || u.nodeType === D.DOCUMENT_FRAGMENT_NODE || u.nodeType === D.ELEMENT_NODE);
}
function Ue(u) {
  return u && (R(u) || Nu(u) || I(u) || u.nodeType === D.DOCUMENT_FRAGMENT_NODE || u.nodeType === D.COMMENT_NODE || u.nodeType === D.PROCESSING_INSTRUCTION_NODE);
}
function I(u) {
  return u && u.nodeType === D.DOCUMENT_TYPE_NODE;
}
function R(u) {
  return u && u.nodeType === D.ELEMENT_NODE;
}
function Nu(u) {
  return u && u.nodeType === D.TEXT_NODE;
}
function Pu(u, e) {
  var r = u.childNodes || [];
  if (O(r, R) || I(e))
    return !1;
  var t = O(r, I);
  return !(e && t && r.indexOf(t) > r.indexOf(e));
}
function Vu(u, e) {
  var r = u.childNodes || [];
  function t(a) {
    return R(a) && a !== e;
  }
  if (O(r, t))
    return !1;
  var n = O(r, I);
  return !(e && n && r.indexOf(n) > r.indexOf(e));
}
function Me(u, e, r) {
  if (!ke(u))
    throw new m(N, "Unexpected parent node type " + u.nodeType);
  if (r && r.parentNode !== u)
    throw new m(ae, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Ue(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    I(e) && u.nodeType !== D.DOCUMENT_NODE
  )
    throw new m(
      N,
      "Unexpected node type " + e.nodeType + " for parent node type " + u.nodeType
    );
}
function Pe(u, e, r) {
  var t = u.childNodes || [], n = e.childNodes || [];
  if (e.nodeType === D.DOCUMENT_FRAGMENT_NODE) {
    var a = n.filter(R);
    if (a.length > 1 || O(n, Nu))
      throw new m(N, "More than one element or text in fragment");
    if (a.length === 1 && !Pu(u, r))
      throw new m(N, "Element in fragment can not be inserted before doctype");
  }
  if (R(e) && !Pu(u, r))
    throw new m(N, "Only one element can be added and only after doctype");
  if (I(e)) {
    if (O(t, I))
      throw new m(N, "Only one doctype is allowed");
    var i = O(t, R);
    if (r && t.indexOf(i) < t.indexOf(r))
      throw new m(N, "Doctype can only be inserted before an element");
    if (!r && i)
      throw new m(N, "Doctype can not be appended since element is present");
  }
}
function pe(u, e, r) {
  var t = u.childNodes || [], n = e.childNodes || [];
  if (e.nodeType === D.DOCUMENT_FRAGMENT_NODE) {
    var a = n.filter(R);
    if (a.length > 1 || O(n, Nu))
      throw new m(N, "More than one element or text in fragment");
    if (a.length === 1 && !Vu(u, r))
      throw new m(N, "Element in fragment can not be inserted before doctype");
  }
  if (R(e) && !Vu(u, r))
    throw new m(N, "Only one element can be added and only after doctype");
  if (I(e)) {
    if (O(t, function(o) {
      return I(o) && o !== r;
    }))
      throw new m(N, "Only one doctype is allowed");
    var i = O(t, R);
    if (r && t.indexOf(i) < t.indexOf(r))
      throw new m(N, "Doctype can only be inserted before an element");
  }
}
function cu(u, e, r, t) {
  Me(u, e, r), u.nodeType === D.DOCUMENT_NODE && (t || Pe)(u, e, r);
  var n = e.parentNode;
  if (n && n.removeChild(e), e.nodeType === L) {
    var a = e.firstChild;
    if (a == null)
      return e;
    var i = e.lastChild;
  } else
    a = i = e;
  var s = r ? r.previousSibling : u.lastChild;
  a.previousSibling = s, i.nextSibling = r, s ? s.nextSibling = a : u.firstChild = a, r == null ? u.lastChild = i : r.previousSibling = i;
  do
    a.parentNode = u;
  while (a !== i && (a = a.nextSibling));
  return Bu(u.ownerDocument || u, u), e.nodeType == L && (e.firstChild = e.lastChild = null), e;
}
function Ve(u, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = u, e.previousSibling = u.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : u.firstChild = e, u.lastChild = e, Bu(u.ownerDocument, u, e), e;
}
tu.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: te,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(u, e) {
    if (u.nodeType == L) {
      for (var r = u.firstChild; r; ) {
        var t = r.nextSibling;
        this.insertBefore(r, e), r = t;
      }
      return u;
    }
    return cu(this, u, e), u.ownerDocument = this, this.documentElement === null && u.nodeType === q && (this.documentElement = u), u;
  },
  removeChild: function(u) {
    return this.documentElement == u && (this.documentElement = null), ce(this, u);
  },
  replaceChild: function(u, e) {
    cu(this, u, e, pe), u.ownerDocument = this, e && this.removeChild(e), R(u) && (this.documentElement = u);
  },
  // Introduced in DOM Level 2:
  importNode: function(u, e) {
    return me(this, u, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(u) {
    var e = null;
    return uu(this.documentElement, function(r) {
      if (r.nodeType == q && r.getAttribute("id") == u)
        return e = r, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(u) {
    var e = Iu(u);
    return new X(this, function(r) {
      var t = [];
      return e.length > 0 && uu(r.documentElement, function(n) {
        if (n !== r && n.nodeType === q) {
          var a = n.getAttribute("class");
          if (a) {
            var i = u === a;
            if (!i) {
              var s = Iu(a);
              i = e.every(Re(s));
            }
            i && t.push(n);
          }
        }
      }), t;
    });
  },
  //document factory method:
  createElement: function(u) {
    var e = new P();
    e.ownerDocument = this, e.nodeName = u, e.tagName = u, e.localName = u, e.childNodes = new _();
    var r = e.attributes = new lu();
    return r._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var u = new fu();
    return u.ownerDocument = this, u.childNodes = new _(), u;
  },
  createTextNode: function(u) {
    var e = new yu();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createComment: function(u) {
    var e = new Tu();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createCDATASection: function(u) {
    var e = new Fu();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createProcessingInstruction: function(u, e) {
    var r = new Su();
    return r.ownerDocument = this, r.tagName = r.nodeName = r.target = u, r.nodeValue = r.data = e, r;
  },
  createAttribute: function(u) {
    var e = new pu();
    return e.ownerDocument = this, e.name = u, e.nodeName = u, e.localName = u, e.specified = !0, e;
  },
  createEntityReference: function(u) {
    var e = new xu();
    return e.ownerDocument = this, e.nodeName = u, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(u, e) {
    var r = new P(), t = e.split(":"), n = r.attributes = new lu();
    return r.childNodes = new _(), r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = u, t.length == 2 ? (r.prefix = t[0], r.localName = t[1]) : r.localName = e, n._ownerElement = r, r;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(u, e) {
    var r = new pu(), t = e.split(":");
    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = u, r.specified = !0, t.length == 2 ? (r.prefix = t[0], r.localName = t[1]) : r.localName = e, r;
  }
};
y(tu, D);
function P() {
  this._nsMap = {};
}
P.prototype = {
  nodeType: q,
  hasAttribute: function(u) {
    return this.getAttributeNode(u) != null;
  },
  getAttribute: function(u) {
    var e = this.getAttributeNode(u);
    return e && e.value || "";
  },
  getAttributeNode: function(u) {
    return this.attributes.getNamedItem(u);
  },
  setAttribute: function(u, e) {
    var r = this.ownerDocument.createAttribute(u);
    r.value = r.nodeValue = "" + e, this.setAttributeNode(r);
  },
  removeAttribute: function(u) {
    var e = this.getAttributeNode(u);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(u) {
    return u.nodeType === L ? this.insertBefore(u, null) : Ve(this, u);
  },
  setAttributeNode: function(u) {
    return this.attributes.setNamedItem(u);
  },
  setAttributeNodeNS: function(u) {
    return this.attributes.setNamedItemNS(u);
  },
  removeAttributeNode: function(u) {
    return this.attributes.removeNamedItem(u.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(u, e) {
    var r = this.getAttributeNodeNS(u, e);
    r && this.removeAttributeNode(r);
  },
  hasAttributeNS: function(u, e) {
    return this.getAttributeNodeNS(u, e) != null;
  },
  getAttributeNS: function(u, e) {
    var r = this.getAttributeNodeNS(u, e);
    return r && r.value || "";
  },
  setAttributeNS: function(u, e, r) {
    var t = this.ownerDocument.createAttributeNS(u, e);
    t.value = t.nodeValue = "" + r, this.setAttributeNode(t);
  },
  getAttributeNodeNS: function(u, e) {
    return this.attributes.getNamedItemNS(u, e);
  },
  getElementsByTagName: function(u) {
    return new X(this, function(e) {
      var r = [];
      return uu(e, function(t) {
        t !== e && t.nodeType == q && (u === "*" || t.tagName == u) && r.push(t);
      }), r;
    });
  },
  getElementsByTagNameNS: function(u, e) {
    return new X(this, function(r) {
      var t = [];
      return uu(r, function(n) {
        n !== r && n.nodeType === q && (u === "*" || n.namespaceURI === u) && (e === "*" || n.localName == e) && t.push(n);
      }), t;
    });
  }
};
tu.prototype.getElementsByTagName = P.prototype.getElementsByTagName;
tu.prototype.getElementsByTagNameNS = P.prototype.getElementsByTagNameNS;
y(P, D);
function pu() {
}
pu.prototype.nodeType = $;
y(pu, D);
function nu() {
}
nu.prototype = {
  data: "",
  substringData: function(u, e) {
    return this.data.substring(u, u + e);
  },
  appendData: function(u) {
    u = this.data + u, this.nodeValue = this.data = u, this.length = u.length;
  },
  insertData: function(u, e) {
    this.replaceData(u, 0, e);
  },
  appendChild: function(u) {
    throw new Error(v[N]);
  },
  deleteData: function(u, e) {
    this.replaceData(u, e, "");
  },
  replaceData: function(u, e, r) {
    var t = this.data.substring(0, u), n = this.data.substring(u + e);
    r = t + r + n, this.nodeValue = this.data = r, this.length = r.length;
  }
};
y(nu, D);
function yu() {
}
yu.prototype = {
  nodeName: "#text",
  nodeType: su,
  splitText: function(u) {
    var e = this.data, r = e.substring(u);
    e = e.substring(0, u), this.data = this.nodeValue = e, this.length = e.length;
    var t = this.ownerDocument.createTextNode(r);
    return this.parentNode && this.parentNode.insertBefore(t, this.nextSibling), t;
  }
};
y(yu, nu);
function Tu() {
}
Tu.prototype = {
  nodeName: "#comment",
  nodeType: re
};
y(Tu, nu);
function Fu() {
}
Fu.prototype = {
  nodeName: "#cdata-section",
  nodeType: Ku
};
y(Fu, nu);
function Du() {
}
Du.prototype.nodeType = ne;
y(Du, D);
function De() {
}
De.prototype.nodeType = Le;
y(De, D);
function fe() {
}
fe.prototype.nodeType = _e;
y(fe, D);
function xu() {
}
xu.prototype.nodeType = ue;
y(xu, D);
function fu() {
}
fu.prototype.nodeName = "#document-fragment";
fu.prototype.nodeType = L;
y(fu, D);
function Su() {
}
Su.prototype.nodeType = ee;
y(Su, D);
function Ae() {
}
Ae.prototype.serializeToString = function(u, e, r) {
  return he.call(u, e, r);
};
D.prototype.toString = he;
function he(u, e) {
  var r = [], t = this.nodeType == 9 && this.documentElement || this, n = t.prefix, a = t.namespaceURI;
  if (a && n == null) {
    var n = t.lookupPrefix(a);
    if (n == null)
      var i = [
        { namespace: a, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return j(this, r, u, e, i), r.join("");
}
function Gu(u, e, r) {
  var t = u.prefix || "", n = u.namespaceURI;
  if (!n || t === "xml" && n === K.XML || n === K.XMLNS)
    return !1;
  for (var a = r.length; a--; ) {
    var i = r[a];
    if (i.prefix === t)
      return i.namespace !== n;
  }
  return !0;
}
function du(u, e, r) {
  u.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, se), '"');
}
function j(u, e, r, t, n) {
  if (n || (n = []), t)
    if (u = t(u), u) {
      if (typeof u == "string") {
        e.push(u);
        return;
      }
    } else
      return;
  switch (u.nodeType) {
    case q:
      var a = u.attributes, i = a.length, g = u.firstChild, s = u.tagName;
      r = K.isHTML(u.namespaceURI) || r;
      var o = s;
      if (!r && !u.prefix && u.namespaceURI) {
        for (var l, c = 0; c < a.length; c++)
          if (a.item(c).name === "xmlns") {
            l = a.item(c).value;
            break;
          }
        if (!l)
          for (var f = n.length - 1; f >= 0; f--) {
            var p = n[f];
            if (p.prefix === "" && p.namespace === u.namespaceURI) {
              l = p.namespace;
              break;
            }
          }
        if (l !== u.namespaceURI)
          for (var f = n.length - 1; f >= 0; f--) {
            var p = n[f];
            if (p.namespace === u.namespaceURI) {
              p.prefix && (o = p.prefix + ":" + s);
              break;
            }
          }
      }
      e.push("<", o);
      for (var d = 0; d < i; d++) {
        var B = a.item(d);
        B.prefix == "xmlns" ? n.push({ prefix: B.localName, namespace: B.value }) : B.nodeName == "xmlns" && n.push({ prefix: "", namespace: B.value });
      }
      for (var d = 0; d < i; d++) {
        var B = a.item(d);
        if (Gu(B, r, n)) {
          var E = B.prefix || "", A = B.namespaceURI;
          du(e, E ? "xmlns:" + E : "xmlns", A), n.push({ prefix: E, namespace: A });
        }
        j(B, e, r, t, n);
      }
      if (s === o && Gu(u, r, n)) {
        var E = u.prefix || "", A = u.namespaceURI;
        du(e, E ? "xmlns:" + E : "xmlns", A), n.push({ prefix: E, namespace: A });
      }
      if (g || r && !/^(?:meta|link|img|br|hr|input)$/i.test(s)) {
        if (e.push(">"), r && /^script$/i.test(s))
          for (; g; )
            g.data ? e.push(g.data) : j(g, e, r, t, n.slice()), g = g.nextSibling;
        else
          for (; g; )
            j(g, e, r, t, n.slice()), g = g.nextSibling;
        e.push("</", o, ">");
      } else
        e.push("/>");
      return;
    case te:
    case L:
      for (var g = u.firstChild; g; )
        j(g, e, r, t, n.slice()), g = g.nextSibling;
      return;
    case $:
      return du(e, u.name, u.value);
    case su:
      return e.push(
        u.data.replace(/[<&>]/g, se)
      );
    case Ku:
      return e.push("<![CDATA[", u.data, "]]>");
    case re:
      return e.push("<!--", u.data, "-->");
    case ne:
      var Q = u.publicId, C = u.systemId;
      if (e.push("<!DOCTYPE ", u.name), Q)
        e.push(" PUBLIC ", Q), C && C != "." && e.push(" ", C), e.push(">");
      else if (C && C != ".")
        e.push(" SYSTEM ", C, ">");
      else {
        var x = u.internalSubset;
        x && e.push(" [", x, "]"), e.push(">");
      }
      return;
    case ee:
      return e.push("<?", u.target, " ", u.data, "?>");
    case ue:
      return e.push("&", u.nodeName, ";");
    default:
      e.push("??", u.nodeName);
  }
}
function me(u, e, r) {
  var t;
  switch (e.nodeType) {
    case q:
      t = e.cloneNode(!1), t.ownerDocument = u;
    case L:
      break;
    case $:
      r = !0;
      break;
  }
  if (t || (t = e.cloneNode(!1)), t.ownerDocument = u, t.parentNode = null, r)
    for (var n = e.firstChild; n; )
      t.appendChild(me(u, n, r)), n = n.nextSibling;
  return t;
}
function gu(u, e, r) {
  var t = new e.constructor();
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      var a = e[n];
      typeof a != "object" && a != t[n] && (t[n] = a);
    }
  switch (e.childNodes && (t.childNodes = new _()), t.ownerDocument = u, t.nodeType) {
    case q:
      var i = e.attributes, s = t.attributes = new lu(), o = i.length;
      s._ownerElement = t;
      for (var l = 0; l < o; l++)
        t.setAttributeNode(gu(u, i.item(l), !0));
      break;
    case $:
      r = !0;
  }
  if (r)
    for (var c = e.firstChild; c; )
      t.appendChild(gu(u, c, r)), c = c.nextSibling;
  return t;
}
function Ee(u, e, r) {
  u[e] = r;
}
try {
  if (Object.defineProperty) {
    let u = function(e) {
      switch (e.nodeType) {
        case q:
        case L:
          var r = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && r.push(u(e)), e = e.nextSibling;
          return r.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(X.prototype, "length", {
      get: function() {
        return wu(this), this.$$length;
      }
    }), Object.defineProperty(D.prototype, "textContent", {
      get: function() {
        return u(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case q:
          case L:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), Ee = function(e, r, t) {
      e["$$" + r] = t;
    };
  }
} catch {
}
M.DocumentType = Du;
M.DOMException = m;
M.DOMImplementation = oe;
M.Element = P;
M.Node = D;
M.NodeList = _;
M.XMLSerializer = Ae;
var Au = {}, de = {};
(function(u) {
  var e = k.freeze;
  u.XML_ENTITIES = e({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), u.HTML_ENTITIES = e({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), u.entityMap = u.HTML_ENTITIES;
})(de);
var qu = {}, eu = k.NAMESPACE, Cu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, zu = new RegExp("[\\-\\.0-9" + Cu.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), Hu = new RegExp("^" + Cu.source + zu.source + "*(?::" + Cu.source + zu.source + "*)?$"), Z = 0, U = 1, V = 2, J = 3, G = 4, z = 5, W = 6, iu = 7;
function Y(u, e) {
  this.message = u, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, Y);
}
Y.prototype = new Error();
Y.prototype.name = Y.name;
function ge() {
}
ge.prototype = {
  parse: function(u, e, r) {
    var t = this.domBuilder;
    t.startDocument(), Ce(e, e = {}), Ge(
      u,
      e,
      r,
      t,
      this.errorHandler
    ), t.endDocument();
  }
};
function Ge(u, e, r, t, n) {
  function a(h) {
    if (h > 65535) {
      h -= 65536;
      var S = 55296 + (h >> 10), Te = 56320 + (h & 1023);
      return String.fromCharCode(S, Te);
    } else
      return String.fromCharCode(h);
  }
  function i(h) {
    var S = h.slice(1, -1);
    return Object.hasOwnProperty.call(r, S) ? r[S] : S.charAt(0) === "#" ? a(parseInt(S.substr(1).replace("x", "0x"))) : (n.error("entity not found:" + h), h);
  }
  function s(h) {
    if (h > E) {
      var S = u.substring(E, h).replace(/&#?\w+;/g, i);
      p && o(E), t.characters(S, 0, h - E), E = h;
    }
  }
  function o(h, S) {
    for (; h >= c && (S = f.exec(u)); )
      l = S.index, c = l + S[0].length, p.lineNumber++;
    p.columnNumber = h - l + 1;
  }
  for (var l = 0, c = 0, f = /.*(?:\r\n?|\n)|.*$/g, p = t.locator, d = [{ currentNSMap: e }], B = {}, E = 0; ; ) {
    try {
      var A = u.indexOf("<", E);
      if (A < 0) {
        if (!u.substr(E).match(/^\s*$/)) {
          var g = t.doc, Q = g.createTextNode(u.substr(E));
          g.appendChild(Q), t.currentElement = Q;
        }
        return;
      }
      switch (A > E && s(A), u.charAt(A + 1)) {
        case "/":
          var w = u.indexOf(">", A + 3), C = u.substring(A + 2, w).replace(/[ \t\n\r]+$/g, ""), x = d.pop();
          w < 0 ? (C = u.substring(A + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + C + " is not complete:" + x.tagName), w = A + 1 + C.length) : C.match(/\s</) && (C = C.replace(/[\s<].*/, ""), n.error("end tag name: " + C + " maybe not complete"), w = A + 1 + C.length);
          var hu = x.localNSMap, Ou = x.tagName == C, Ne = Ou || x.tagName && x.tagName.toLowerCase() == C.toLowerCase();
          if (Ne) {
            if (t.endElement(x.uri, x.localName, C), hu)
              for (var Ru in hu)
                Object.prototype.hasOwnProperty.call(hu, Ru) && t.endPrefixMapping(Ru);
            Ou || n.fatalError("end tag name: " + C + " is not match the current start tagName:" + x.tagName);
          } else
            d.push(x);
          w++;
          break;
        case "?":
          p && o(A), w = Xe(u, A, t);
          break;
        case "!":
          p && o(A), w = $e(u, A, t, n);
          break;
        default:
          p && o(A);
          var F = new ve(), mu = d[d.length - 1].currentNSMap, w = ze(u, A, F, mu, i, n), _u = F.length;
          if (!F.closed && je(u, w, F.tagName, B) && (F.closed = !0, r.nbsp || n.warning("unclosed xml attribute")), p && _u) {
            for (var ye = ju(p, {}), Eu = 0; Eu < _u; Eu++) {
              var Lu = F[Eu];
              o(Lu.offset), Lu.locator = ju(p, {});
            }
            t.locator = ye, $u(F, t, mu) && d.push(F), t.locator = p;
          } else
            $u(F, t, mu) && d.push(F);
          eu.isHTML(F.uri) && !F.closed ? w = He(u, w, F.tagName, i, t) : w++;
      }
    } catch (h) {
      if (h instanceof Y)
        throw h;
      n.error("element parse error: " + h), w = -1;
    }
    w > E ? E = w : s(Math.max(A, E) + 1);
  }
}
function ju(u, e) {
  return e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber, e;
}
function ze(u, e, r, t, n, a) {
  function i(p, d, B) {
    r.attributeNames.hasOwnProperty(p) && a.fatalError("Attribute " + p + " redefined"), r.addValue(
      p,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      d.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, n),
      B
    );
  }
  for (var s, o, l = ++e, c = Z; ; ) {
    var f = u.charAt(l);
    switch (f) {
      case "=":
        if (c === U)
          s = u.slice(e, l), c = J;
        else if (c === V)
          c = J;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (c === J || c === U)
          if (c === U && (a.warning('attribute value must after "="'), s = u.slice(e, l)), e = l + 1, l = u.indexOf(f, e), l > 0)
            o = u.slice(e, l), i(s, o, e - 1), c = z;
          else
            throw new Error("attribute value no end '" + f + "' match");
        else if (c == G)
          o = u.slice(e, l), i(s, o, e), a.warning('attribute "' + s + '" missed start quot(' + f + ")!!"), e = l + 1, c = z;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (c) {
          case Z:
            r.setTagName(u.slice(e, l));
          case z:
          case W:
          case iu:
            c = iu, r.closed = !0;
          case G:
          case U:
            break;
          case V:
            r.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return a.error("unexpected end of input"), c == Z && r.setTagName(u.slice(e, l)), l;
      case ">":
        switch (c) {
          case Z:
            r.setTagName(u.slice(e, l));
          case z:
          case W:
          case iu:
            break;
          case G:
          case U:
            o = u.slice(e, l), o.slice(-1) === "/" && (r.closed = !0, o = o.slice(0, -1));
          case V:
            c === V && (o = s), c == G ? (a.warning('attribute "' + o + '" missed quot(")!'), i(s, o, e)) : ((!eu.isHTML(t[""]) || !o.match(/^(?:disabled|checked|selected)$/i)) && a.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), i(o, o, e));
            break;
          case J:
            throw new Error("attribute value missed!!");
        }
        return l;
      case "":
        f = " ";
      default:
        if (f <= " ")
          switch (c) {
            case Z:
              r.setTagName(u.slice(e, l)), c = W;
              break;
            case U:
              s = u.slice(e, l), c = V;
              break;
            case G:
              var o = u.slice(e, l);
              a.warning('attribute "' + o + '" missed quot(")!!'), i(s, o, e);
            case z:
              c = W;
              break;
          }
        else
          switch (c) {
            case V:
              r.tagName, (!eu.isHTML(t[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) && a.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), i(s, s, e), e = l, c = U;
              break;
            case z:
              a.warning('attribute space is required"' + s + '"!!');
            case W:
              c = U, e = l;
              break;
            case J:
              c = G, e = l;
              break;
            case iu:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    l++;
  }
}
function $u(u, e, r) {
  for (var t = u.tagName, n = null, f = u.length; f--; ) {
    var a = u[f], i = a.qName, s = a.value, p = i.indexOf(":");
    if (p > 0)
      var o = a.prefix = i.slice(0, p), l = i.slice(p + 1), c = o === "xmlns" && l;
    else
      l = i, o = null, c = i === "xmlns" && "";
    a.localName = l, c !== !1 && (n == null && (n = {}, Ce(r, r = {})), r[c] = n[c] = s, a.uri = eu.XMLNS, e.startPrefixMapping(c, s));
  }
  for (var f = u.length; f--; ) {
    a = u[f];
    var o = a.prefix;
    o && (o === "xml" && (a.uri = eu.XML), o !== "xmlns" && (a.uri = r[o || ""]));
  }
  var p = t.indexOf(":");
  p > 0 ? (o = u.prefix = t.slice(0, p), l = u.localName = t.slice(p + 1)) : (o = null, l = u.localName = t);
  var d = u.uri = r[o || ""];
  if (e.startElement(d, l, t, u), u.closed) {
    if (e.endElement(d, l, t), n)
      for (o in n)
        Object.prototype.hasOwnProperty.call(n, o) && e.endPrefixMapping(o);
  } else
    return u.currentNSMap = r, u.localNSMap = n, !0;
}
function He(u, e, r, t, n) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var a = u.indexOf("</" + r + ">", e), i = u.substring(e + 1, a);
    if (/[&<]/.test(i))
      return /^script$/i.test(r) ? (n.characters(i, 0, i.length), a) : (i = i.replace(/&#?\w+;/g, t), n.characters(i, 0, i.length), a);
  }
  return e + 1;
}
function je(u, e, r, t) {
  var n = t[r];
  return n == null && (n = u.lastIndexOf("</" + r + ">"), n < e && (n = u.lastIndexOf("</" + r)), t[r] = n), n < e;
}
function Ce(u, e) {
  for (var r in u)
    Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
}
function $e(u, e, r, t) {
  var n = u.charAt(e + 2);
  switch (n) {
    case "-":
      if (u.charAt(e + 3) === "-") {
        var a = u.indexOf("-->", e + 4);
        return a > e ? (r.comment(u, e + 4, a - e - 4), a + 3) : (t.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (u.substr(e + 3, 6) == "CDATA[") {
        var a = u.indexOf("]]>", e + 9);
        return r.startCDATA(), r.characters(u, e + 9, a - e - 9), r.endCDATA(), a + 3;
      }
      var i = Ye(u, e), s = i.length;
      if (s > 1 && /!doctype/i.test(i[0][0])) {
        var o = i[1][0], l = !1, c = !1;
        s > 3 && (/^public$/i.test(i[2][0]) ? (l = i[3][0], c = s > 4 && i[4][0]) : /^system$/i.test(i[2][0]) && (c = i[3][0]));
        var f = i[s - 1];
        return r.startDTD(o, l, c), r.endDTD(), f.index + f[0].length;
      }
  }
  return -1;
}
function Xe(u, e, r) {
  var t = u.indexOf("?>", e);
  if (t) {
    var n = u.substring(e, t).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return n ? (n[0].length, r.processingInstruction(n[1], n[2]), t + 2) : -1;
  }
  return -1;
}
function ve() {
  this.attributeNames = {};
}
ve.prototype = {
  setTagName: function(u) {
    if (!Hu.test(u))
      throw new Error("invalid tagName:" + u);
    this.tagName = u;
  },
  addValue: function(u, e, r) {
    if (!Hu.test(u))
      throw new Error("invalid attribute:" + u);
    this.attributeNames[u] = this.length, this[this.length++] = { qName: u, value: e, offset: r };
  },
  length: 0,
  getLocalName: function(u) {
    return this[u].localName;
  },
  getLocator: function(u) {
    return this[u].locator;
  },
  getQName: function(u) {
    return this[u].qName;
  },
  getURI: function(u) {
    return this[u].uri;
  },
  getValue: function(u) {
    return this[u].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function Ye(u, e) {
  var r, t = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (n.lastIndex = e, n.exec(u); r = n.exec(u); )
    if (t.push(r), r[1])
      return t;
}
qu.XMLReader = ge;
qu.ParseError = Y;
var Qe = k, Ze = M, Xu = de, be = qu, Je = Ze.DOMImplementation, Yu = Qe.NAMESPACE, We = be.ParseError, Ke = be.XMLReader;
function we(u) {
  return u.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function Be(u) {
  this.options = u || { locator: {} };
}
Be.prototype.parseFromString = function(u, e) {
  var r = this.options, t = new Ke(), n = r.domBuilder || new au(), a = r.errorHandler, i = r.locator, s = r.xmlns || {}, o = /\/x?html?$/.test(e), l = o ? Xu.HTML_ENTITIES : Xu.XML_ENTITIES;
  i && n.setDocumentLocator(i), t.errorHandler = ur(a, n, i), t.domBuilder = r.domBuilder || n, o && (s[""] = Yu.HTML), s.xml = s.xml || Yu.XML;
  var c = r.normalizeLineEndings || we;
  return u && typeof u == "string" ? t.parse(
    c(u),
    s,
    l
  ) : t.errorHandler.error("invalid doc source"), n.doc;
};
function ur(u, e, r) {
  if (!u) {
    if (e instanceof au)
      return e;
    u = e;
  }
  var t = {}, n = u instanceof Function;
  r = r || {};
  function a(i) {
    var s = u[i];
    !s && n && (s = u.length == 2 ? function(o) {
      u(i, o);
    } : u), t[i] = s && function(o) {
      s("[xmldom " + i + "]	" + o + vu(r));
    } || function() {
    };
  }
  return a("warning"), a("error"), a("fatalError"), t;
}
function au() {
  this.cdata = !1;
}
function H(u, e) {
  e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber;
}
au.prototype = {
  startDocument: function() {
    this.doc = new Je().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(u, e, r, t) {
    var n = this.doc, a = n.createElementNS(u, r || e), i = t.length;
    ou(this, a), this.currentElement = a, this.locator && H(this.locator, a);
    for (var s = 0; s < i; s++) {
      var u = t.getURI(s), o = t.getValue(s), r = t.getQName(s), l = n.createAttributeNS(u, r);
      this.locator && H(t.getLocator(s), l), l.value = l.nodeValue = o, a.setAttributeNode(l);
    }
  },
  endElement: function(u, e, r) {
    var t = this.currentElement;
    t.tagName, this.currentElement = t.parentNode;
  },
  startPrefixMapping: function(u, e) {
  },
  endPrefixMapping: function(u) {
  },
  processingInstruction: function(u, e) {
    var r = this.doc.createProcessingInstruction(u, e);
    this.locator && H(this.locator, r), ou(this, r);
  },
  ignorableWhitespace: function(u, e, r) {
  },
  characters: function(u, e, r) {
    if (u = Qu.apply(this, arguments), u) {
      if (this.cdata)
        var t = this.doc.createCDATASection(u);
      else
        var t = this.doc.createTextNode(u);
      this.currentElement ? this.currentElement.appendChild(t) : /^\s*$/.test(u) && this.doc.appendChild(t), this.locator && H(this.locator, t);
    }
  },
  skippedEntity: function(u) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(u) {
    (this.locator = u) && (u.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(u, e, r) {
    u = Qu.apply(this, arguments);
    var t = this.doc.createComment(u);
    this.locator && H(this.locator, t), ou(this, t);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(u, e, r) {
    var t = this.doc.implementation;
    if (t && t.createDocumentType) {
      var n = t.createDocumentType(u, e, r);
      this.locator && H(this.locator, n), ou(this, n), this.doc.doctype = n;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(u) {
    console.warn("[xmldom warning]	" + u, vu(this.locator));
  },
  error: function(u) {
    console.error("[xmldom error]	" + u, vu(this.locator));
  },
  fatalError: function(u) {
    throw new We(u, this.locator);
  }
};
function vu(u) {
  if (u)
    return `
@` + (u.systemId || "") + "#[line:" + u.lineNumber + ",col:" + u.columnNumber + "]";
}
function Qu(u, e, r) {
  return typeof u == "string" ? u.substr(e, r) : u.length >= e + r || e ? new java.lang.String(u, e, r) + "" : u;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(u) {
  au.prototype[u] = function() {
    return null;
  };
});
function ou(u, e) {
  u.currentElement ? u.currentElement.appendChild(e) : u.doc.appendChild(e);
}
Au.__DOMHandler = au;
Au.normalizeLineEndings = we;
Au.DOMParser = Be;
var er = Au.DOMParser;
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DOMParser: er
}, Symbol.toStringTag, { value: "Module" }));



/***/ })

};
;