// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _urlImg01Png = require('url:./img/01.png');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _urlImg01PngDefault = _parcelHelpers.interopDefault(_urlImg01Png);
var _urlImg02Png = require('url:./img/02.png');
var _urlImg02PngDefault = _parcelHelpers.interopDefault(_urlImg02Png);
var _urlImg03Png = require('url:./img/03.png');
var _urlImg03PngDefault = _parcelHelpers.interopDefault(_urlImg03Png);
var _urlImg04Png = require('url:./img/04.png');
var _urlImg04PngDefault = _parcelHelpers.interopDefault(_urlImg04Png);
var _urlImg05Png = require('url:./img/05.png');
var _urlImg05PngDefault = _parcelHelpers.interopDefault(_urlImg05Png);
var _urlImg06Png = require('url:./img/06.png');
var _urlImg06PngDefault = _parcelHelpers.interopDefault(_urlImg06Png);
var _urlImg07Png = require('url:./img/07.png');
var _urlImg07PngDefault = _parcelHelpers.interopDefault(_urlImg07Png);
var _urlImg08Png = require('url:./img/08.png');
var _urlImg08PngDefault = _parcelHelpers.interopDefault(_urlImg08Png);
var _urlImg09Png = require('url:./img/09.png');
var _urlImg09PngDefault = _parcelHelpers.interopDefault(_urlImg09Png);
var _urlImg10Png = require('url:./img/10.png');
var _urlImg10PngDefault = _parcelHelpers.interopDefault(_urlImg10Png);
var _urlImg11Png = require('url:./img/11.png');
var _urlImg11PngDefault = _parcelHelpers.interopDefault(_urlImg11Png);
var _urlImg12Jpg = require('url:./img/12.jpg');
var _urlImg12JpgDefault = _parcelHelpers.interopDefault(_urlImg12Jpg);
var _urlImg13Png = require('url:./img/13.png');
var _urlImg13PngDefault = _parcelHelpers.interopDefault(_urlImg13Png);
var _urlImg14Png = require('url:./img/14.png');
var _urlImg14PngDefault = _parcelHelpers.interopDefault(_urlImg14Png);
let cardData = {
  "01": {
    "link": "https://ncase.me/covid-19/",
    "image": _urlImg01PngDefault.default,
    "title": "What Happens Next?",
    "description": "Futuros del COVID-19, explicado con simulacion jugables",
    "category": "📜🖼️🖥️🎮",
    "readtime": "🕐 30 min"
  },
  "02": {
    "link": "https://www.theguardian.com/world/ng-interactive/2020/apr/09/how-coronavirus-spread-across-the-globe-visualised",
    "image": _urlImg02PngDefault.default,
    "title": "How coronavirus spread across the globe - visualised",
    "description": "Desde sus comienzos en China, la pandemia del COVID-19 se ha esparcido rapidamente alrededor del mundo",
    "category": "📜🖼️🎥🎚️",
    "readtime": "🕐 5 min"
  },
  "03": {
    "link": "https://www.youtube.com/watch?v=s2jQ9BSIbXQ&list=PLnxJP601LarGKt_zbttd3uyl_MqVLW2s1&index=272",
    "image": _urlImg03PngDefault.default,
    "title": "JHU’s Daily COVID-19 Data in Motion",
    "description": "Visualizacion diaria sobre datos relacionados al COVID-19",
    "category": "🎥",
    "readtime": "🕐 1 min"
  },
  "04": {
    "link": "https://covid19.who.int/",
    "image": _urlImg04PngDefault.default,
    "title": "WHO Coronavirus (COVID-19) Dashboard",
    "description": "Dashboard sobre la situacion actual del COVID-19, proveida por la OMS",
    "category": "🖼️🎚️",
    "readtime": "🕐 a gusto"
  },
  "05": {
    "link": "https://datastudio.google.com/u/0/reporting/1ANWDgSeti4SJLJ9L07Rs1s_Sr4kVA-SQ/page/0CTJB",
    "image": _urlImg05PngDefault.default,
    "title": "COVID-19 Dashboard para CAPV",
    "description": "Dashboard sobre la situacion de pandemia del COVID-19 en el País Vasco",
    "category": "🖼️🎚️",
    "readtime": "🕐 a gusto"
  },
  "06": {
    "link": "https://graphics.reuters.com/world-coronavirus-tracker-and-maps/vaccination-rollout-and-access/",
    "image": _urlImg06PngDefault.default,
    "title": "COVID-19 Vaccination Tracker",
    "description": "Informacion sobre los planes de vacunacion a nivel global",
    "category": "📜🖼️🎥🎚️",
    "readtime": "🕐 10 min"
  },
  "07": {
    "link": "https://www.washingtonpost.com/graphics/2020/world/corona-simulator/",
    "image": _urlImg07PngDefault.default,
    "title": "Why outbreaks like coronavirus spread exponentially, and how to “flatten the curve”",
    "description": "Explicacion de como se esparcen brotes como el coronavirus y como aplanar la curva, con simulaciones",
    "category": "📜🖼️🎥🖥️🎚️",
    "readtime": "🕐 10 min"
  },
  "08": {
    "link": "https://public.tableau.com/app/profile/surveymonkey/viz/Childvaccineupdate/Newdashboard",
    "image": _urlImg08PngDefault.default,
    "title": "Would you be willing to get your child(ren) of the following ages vaccinated against COVID-19?",
    "description": "Visualizacion de encuesta sobre vacunacion infantil, conformada por la opinion de 27.066 padres",
    "category": "🖼️🎥🎮",
    "readtime": "🕐 a gusto"
  },
  "09": {
    "link": "http://www.r2d3.us/covid-19/?from=@",
    "image": _urlImg09PngDefault.default,
    "title": "Making sense of COVID19 through simulations",
    "description": "Comprendiendo la pandemia a partir de simulaciones",
    "category": "📜🖼️🎥🖥️🎚️🎮",
    "readtime": "🕐 20 min"
  },
  "10": {
    "link": "https://meltingasphalt.com/interactive/outbreak/",
    "image": _urlImg10PngDefault.default,
    "title": "Outbreak",
    "description": "Visualizando como se esparcen las epidemias en general, con la ayuda de simulaciones jugables",
    "category": "📜🖼️🖥️🎮",
    "readtime": "🕐 30 min"
  },
  "11": {
    "link": "https://www.magisnet.com/2020/03/como-abordar-el-coronavirus-desde-las-diferentes-materias/",
    "image": _urlImg11PngDefault.default,
    "title": "Cómo abordar el coronavirus desde las diferentes materias",
    "description": '"Hablamos con profesores de diferentes asignaturas que aprovechan esta crisis para explicar a sus alumnos algunos contenidos curriculares."',
    "category": "📜",
    "readtime": "🕐 15 min"
  },
  "12": {
    "link": "https://www.visualcapitalist.com/history-of-pandemics-deadliest/",
    "image": _urlImg12JpgDefault.default,
    "title": "Visualizing the History of Pandemics",
    "description": "Articulo sobre la historia de las pandemias",
    "category": "📜🖼️",
    "readtime": "🕐 10 min"
  },
  "13": {
    "link": "https://thespinoff.co.nz/media/12-05-2021/the-great-toby-morris-siouxsie-wiles-covid-19-omnibus/",
    "image": _urlImg13PngDefault.default,
    "title": "The bumper Toby Morris & Siouxsie Wiles Covid-19 box set",
    "description": "coleccion de animaciones estilo comic que difunde conceptos de la pandemia COVID-19 y precauciones que debemos de tomar en la misma",
    "category": "📜🖼️🎥",
    "readtime": "🕐 20 min"
  },
  "14": {
    "link": "https://multimedia.scmp.com/infographics/news/china/article/3047038/wuhan-virus/es/index.html?src=social&fbclid=IwAR1gxx2lw6uuKbUOkNFWsMZvAFPFatgd--40nYQwyH5PiL4RK_7MHCxlcDs",
    "image": _urlImg14PngDefault.default,
    "title": "Historia del coronavirus y su enfermedad, la COVID-19. Una narración visual",
    "description": '"A pesar de los grandes esfuerzos realizados por China para contenerlo, el nuevo coronavirus se ha extendido rápidamente por el mundo. Muchos países han tomado medidas inéditas y están poniendo en cuarentena a todo viajero que llegue a sus territorios. A continuación se explica pormenorizadamente cómo empezó la pandemia que hoy preocupa a todo el planeta."',
    "category": "📜🖼️🎥",
    "readtime": "🕐 25 min"
  }
};
insert = document.getElementById("insert");
function newCard(link, img, title, desc, date, rt) {
  insert.insertAdjacentHTML("beforeend", `<a href=${link} target="_blank" class="card">
      <div class="card__overlay">
        <span>Ver Más</span>
      </div>
      <div class="card__image" style="background-image: url(${img});"></div>
      <div class="card__content">
	<div class="card__title"> ${title} </div>
	<div class="card__description">
	  ${desc}
	</div>
      </div>
      <div class="card__date">${date}</div>
      <div class="card__readtime">${rt}</div>
    </a>
`);
}
for (let i = 0; i < Object.keys(cardData).length; i++) {
  let cardIndex = i < 9 ? "0" + String(i + 1) : String(i + 1);
  newCard(cardData[cardIndex]["link"], cardData[cardIndex]["image"], cardData[cardIndex]["title"], cardData[cardIndex]["description"], cardData[cardIndex]["category"], cardData[cardIndex]["readtime"]);
}

},{"url:./img/01.png":"42Gn0","url:./img/02.png":"6n5Ho","url:./img/03.png":"aULVq","url:./img/04.png":"39dzc","url:./img/05.png":"4oqQO","url:./img/06.png":"4o7r1","url:./img/07.png":"5VgsJ","url:./img/08.png":"1ndGz","url:./img/09.png":"1lyf3","url:./img/10.png":"3cG07","url:./img/11.png":"37iWc","url:./img/13.png":"Vzj5h","url:./img/14.png":"4eTav","url:./img/12.jpg":"3wKjp","@parcel/transformer-js/lib/esmodule-helpers.js":"5QYwZ"}],"42Gn0":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "01.4c0e1291.png"
},{"./bundle-url":"3xReQ"}],"3xReQ":[function(require,module,exports) {
"use strict";

/* globals document:readonly */
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


function getOrigin(url) {
  let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);

  if (!matches) {
    throw new Error('Origin not found');
  }

  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
},{}],"6n5Ho":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "02.1a525c6b.png"
},{"./bundle-url":"3xReQ"}],"aULVq":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "03.6e0637be.png"
},{"./bundle-url":"3xReQ"}],"39dzc":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "04.16f21c3d.png"
},{"./bundle-url":"3xReQ"}],"4oqQO":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "05.f109440d.png"
},{"./bundle-url":"3xReQ"}],"4o7r1":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "06.b722fb7c.png"
},{"./bundle-url":"3xReQ"}],"5VgsJ":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "07.eea4a785.png"
},{"./bundle-url":"3xReQ"}],"1ndGz":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "08.aa22b733.png"
},{"./bundle-url":"3xReQ"}],"1lyf3":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "09.f228915c.png"
},{"./bundle-url":"3xReQ"}],"3cG07":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "10.7af905f8.png"
},{"./bundle-url":"3xReQ"}],"37iWc":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "11.cd8a3059.png"
},{"./bundle-url":"3xReQ"}],"Vzj5h":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "13.87d65df2.png"
},{"./bundle-url":"3xReQ"}],"4eTav":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "14.b7f46f2c.png"
},{"./bundle-url":"3xReQ"}],"3wKjp":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "12.c6644380.jpg"
},{"./bundle-url":"3xReQ"}],"5QYwZ":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequire427e")

//# sourceMappingURL=index.3fafb3e2.js.map
