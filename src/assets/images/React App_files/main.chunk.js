(this["webpackJsonpmarvel_frontend_react"] = this["webpackJsonpmarvel_frontend_react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/images/marvel-dessin.jpg */ "./src/assets/images/marvel-dessin.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./assets/images/iron.jpg */ "./src/assets/images/iron.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "/* FONTS */\n\n/* GLOBAL */\nbody {\n  font-family: \"Roboto\", sans-serif;\n  /* background: url(\"./assets/images/marvel_bgc.jpg\") fixed center; */\n  /* background: url(\"./assets/images/iron.jpg\") fixed bottom no-repeat; */\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") fixed center;\n  /* background: url(\"./assets/images/avengers.jpg\") fixed  no-repeat; */\n  /* background: url(\"./assets//images//avengers.jpg\") fixed center no-repeat; */\n}\n.wrapper {\n  width: 1300px;\n  margin: auto;\n}\n.link {\n  text-decoration: none;\n  color: #fff;\n}\n::placeholder {\n  color: #910d0d;\n}\n\n/* COMMUN */\n.Title {\n  font-size: 35px;\n  /* padding: 40px; */\n  margin: 40px;\n  margin-top: 450px;\n  padding: 5px;\n  font-weight: 800;\n  /* color: #f11d22; */\n  color: #fff;\n  background-color: #530401;\n}\n\n/* Home */\n.Home {\n  position: fixed;\n  top: 0;\n  z-index: 99;\n  width: 100vw;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") fixed center no-repeat #fff;\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  /* position: relative; */\n  /* margin-left: 100px; */\n  /* background-color: rosybrown; */\n}\n.Home-link-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Home-enter {\n  position: absolute;\n  color: #000;\n  font-size: 15px;\n  /* top: 0; */\n}\n.Home-enter-btn {\n  /* background-color: rosybrown; */\n  margin-left: 100px;\n  /* background-color: #f11d22; */\n  padding: 2px;\n  font-size: 30px;\n  /* position: absolute;\n  top: 135px;\n  left: 400px; */\n}\n/* Header */\n.Header {\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0.95);\n}\n.Header-wrapper {\n  margin: 0 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n.Header-logo {\n  margin-top: 50px;\n  width: 700px;\n  /* transition: 10s;\n  position: absolute; */\n  /* top: -100%; */\n}\n/* .Header-logo-inactive {\n  position: absolute;\n  top: -100%;\n  margin-top: -100px;\n  display: none;\n} */\n.Header-nav-container {\n  /* display: flex;\n  flex-direction: column; */\n}\n.Header-nav-link {\n  margin: 0 15px;\n  font-size: 20px;\n  font-weight: 700;\n}\n.Header-readytofight-container {\n  position: relative;\n}\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n.Header-readytofight {\n  animation: blinker 1.5s linear infinite;\n  position: absolute;\n  color: #fff;\n  right: 100px;\n  width: max-content;\n  margin-right: 10px;\n  font-size: 14px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Header-tournamentrules-btn {\n  background-color: #530401;\n  border: none;\n  height: 35px;\n  width: 100px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 20px;\n}\n.Header-tournamentrules-container-hidden {\n  display: none;\n}\n.Header-tournamentrules-container {\n  position: absolute;\n  right: 20px;\n  top: 100px;\n  width: 400px;\n  border-radius: 100px;\n  border: solid 5px #530401;\n  background-color: rgba(0, 0, 0);\n  z-index: 1;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n}\n.Header-input-container {\n  background-color: #530401;\n  /* border: solid 2px #f11d22; */\n  width: 700px;\n  margin: auto;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 60px 60px;\n}\n.Header-input {\n  /* width: 70%; */\n  width: 50%;\n  height: 30px;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n/* Characters */\n.Characters {\n  margin-top: 450px;\n}\n.Characters-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Comics */\n.Comics {\n  margin-top: 450px;\n}\n.Comics-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Favorites */\n.Favorites {\n  margin-top: 450px;\n}\n.Favorites-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.Favorites-item-container {\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  border-radius: 20px;\n  padding: 40px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.Favorites-item-title {\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.Favorites-item-subcontainer {\n  display: flex;\n  overflow-x: scroll;\n  width: 100%;\n}\n\n/* Tournament */\n.Tournament {\n  /* margin-top: 600px; */\n}\n.Tournament-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.Tournament-fight-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 50px;\n  color: #f11d22;\n  border-radius: 20px;\n  position: relative;\n}\n.Tournament-tryagain {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.Tournament-cancelfight {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n.Tournament-tryagain:hover,\n.Tournament-cancelfight:hover {\n  border-bottom: solid 3px #f11d22;\n  padding-bottom: 1px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.Tournament-versus-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Tournament-versus {\n  margin: 0 30px;\n  font-size: 30px;\n}\n.Tournament-fighter-image {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin: 0 10px;\n}\n.Tournament-winner {\n  font-size: 20px;\n  margin: 30px 0;\n}\n\n/* Character */\n.Character {\n  margin-top: 60px;\n}\n\n/* Comic */\n.Comic {\n  margin-top: 60px;\n}\n\n/* ItemList */\n.ItemList {\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  border-radius: 20px;\n  padding: 40px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n/* Item */\n.Item {\n  width: 250px;\n  margin: 15px;\n  height: 350px;\n  position: relative;\n}\n.Item-not-participate {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  top: 20px;\n  left: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.Item-participate {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  top: 20px;\n  left: 20px;\n  background-color: #f11d22;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.Item-participate-icon {\n  /* color: green; */\n}\n.Item-not-favorite {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  top: 20px;\n  right: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.Item-favorite {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  top: 20px;\n  right: 20px;\n  background-color: rgb(223, 152, 71);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.Item-favorite-icon {\n  font-size: 20px;\n}\n.Item-image {\n  width: 250px;\n  height: 300px;\n  object-fit: cover;\n}\n.Item-name {\n  background-color: #000;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n/* ItemDetails */\n.ItemDetails {\n  margin-top: 100px;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 50px;\n  border-radius: 20px;\n  display: flex;\n}\n\n.ItemDetails-image {\n  height: 500px;\n  object-fit: cover;\n  margin-right: 60px;\n}\n.ItemDetails-details-container {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n}\n.ItemDetails-title {\n  font-size: 40px;\n  font-weight: 600;\n  margin-top: 30px;\n}\n.ItemDetails-linkeditems-container {\n  width: 640px;\n}\n.ItemDetails-linkeditems-title {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.ItemDetails-linkeditems-image {\n  display: flex;\n  overflow-y: scroll;\n}\n.ItemDetails-linkeditems-image .LinkedItem {\n  margin: 0 10px;\n}\n.ItemDetails-linkeditems-image .LinkedItem:first-child {\n  margin-left: 0;\n}\n.ItemDetails-linkeditems-image .LinkedItem:last-child {\n  margin-right: 0;\n}\n\n.LinkedItem {\n  background-color: rgba(0, 0, 0, 0.95);\n}\n.LinkedItem-image {\n  width: 120px;\n  height: 140px;\n  object-fit: cover;\n  flex-shrink: 1;\n}\n.LinkedItem-title {\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n/* Pagination */\n.Pagination {\n  background-color: #000;\n  width: 600px;\n  margin: 30px 0;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n}\n.Pagination-link-active {\n  color: #f11d22;\n}\n.Pagination-link {\n  color: #fff;\n}\n\n/* .Marvel {\n  color: rgba(241, 29, 34, 0.5);\n  font-size: 50px;\n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home.js");
/* harmony import */ var _containers_Characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Characters */ "./src/containers/Characters.js");
/* harmony import */ var _containers_Comics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Comics */ "./src/containers/Comics.js");
/* harmony import */ var _containers_Favorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Favorites */ "./src/containers/Favorites.js");
/* harmony import */ var _containers_Tournament__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Tournament */ "./src/containers/Tournament.js");
/* harmony import */ var _containers_Character__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Character */ "./src/containers/Character.js");
/* harmony import */ var _containers_Comic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Comic */ "./src/containers/Comic.js");
/* harmony import */ var _components_commun_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/commun/Header */ "./src/components/commun/Header.js");
/* harmony import */ var _components_commun_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/commun/Footer */ "./src/components/commun/Footer.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/App.js";














_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faStar"]);

const App = () => {
  // const [enter, setEnter] = useState();
  // useEffect(() => {
  //   setEnter(false);
  // }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/characters/:p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Characters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/comics/:p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Comics__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/favorites",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Favorites__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/tournament",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Tournament__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/character/:id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Character__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/comic/:id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Comic__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/characters/page_1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/images/iron.jpg":
/*!************************************!*\
  !*** ./src/assets/images/iron.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/iron.a604ac64.jpg";

/***/ }),

/***/ "./src/assets/images/marvel-dessin.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/marvel-dessin.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/marvel-dessin.10f9037e.jpg";

/***/ }),

/***/ "./src/assets/images/marvel-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/marvel-logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/marvel-logo.575beca3.png";

/***/ }),

/***/ "./src/components/commun/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/commun/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/Footer.js";


const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "Footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/commun/Header.js":
/*!*****************************************!*\
  !*** ./src/components/commun/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_marvel_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/marvel-logo.png */ "./src/assets/images/marvel-logo.png");
/* harmony import */ var _assets_images_marvel_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_marvel_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/Header.js";





const Header = ({
  fighter1,
  fighter2
}) => {
  const [isRulesDisplayed, setIsRulesDisplayed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const areReadyToFight = () => {
    if (fighter1.id && fighter2.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Header-readytofight",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, `${fighter1.name} and ${fighter2.name} are ready to fight`);
    }
  }; // useEffect(() => {
  // setInterval(() => {
  //   // console.log("useEffect");
  //   setIsLoading(true);
  // }, 5000);
  // }, []);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-nav-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/characters/page_1",
    className: "Header-nav-link link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "CHARACTERS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/comics/page_1",
    className: "Header-nav-link link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "COMICS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/favorites",
    className: "Header-nav-link link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "FAVS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tournament",
    className: "Header-nav-link link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "FIGHT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-readytofight-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, areReadyToFight(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Header-tournamentrules-btn",
    onClick: () => setIsRulesDisplayed(!isRulesDisplayed),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "FIGHTING RULES"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      // backgroundColor: "yellow",
      display: "flex",
      justifyContent: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    // src={marvelLogo}
    src: "https://media.giphy.com/media/NUsKoYiGm1RPHl1eWM/giphy.gif",
    alt: "Logo Marvel Comics",
    className: "Header-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-input-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "",
    id: "",
    className: "Header-input",
    placeholder: "LOOKING FOR SOMETHING?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isRulesDisplayed ? "Header-tournamentrules-container" : "Header-tournamentrules-container-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Vous pouvez d\xE9clencher un combat entre les personnages de l'univers Marvel, il vous suffit de s\xE9lectionner 2 personnages et de vous rendre dans l'onglet FIGHT.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), "ENJOY ! :)"))));
};

const mapStateToProps = state => {
  return {
    fighter1: state.fight.fighter1,
    fighter2: state.fight.fighter2
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/components/commun/Item.js":
/*!***************************************!*\
  !*** ./src/components/commun/Item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/Item.js";






const Item = ({
  item,
  dispatch,
  favoriteCharacters,
  favoriteComics,
  fighter1,
  fighter2
}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  item.isFavorite = false;

  for (let i = 0; i < favoriteCharacters.length; i++) {
    if (favoriteCharacters[i].id === item.id) {
      item.isFavorite = true;
    }
  }

  for (let i = 0; i < favoriteComics.length; i++) {
    if (favoriteComics[i].id === item.id) {
      item.isFavorite = true;
    }
  }

  item.isInFight = false;

  if (fighter1.id === item.id) {
    item.isInFight = true;
  }

  if (fighter2.id === item.id) {
    item.isInFight = true;
  }

  const handleLinkClick = () => {
    if (item.name) {
      history.push(`/character/${item.id}`);
    } else {
      history.push(`/comic/${item.id}`);
    }
  };

  const handleParticipateClick = e => {
    e.stopPropagation();
    const action = {
      type: "TOGGLE_PARTICIPANT",
      value: item
    };
    dispatch(action); // if (inFight === false) {
    //   const action = { type: "ADD_PARTICIPANT", value: item };
    //   dispatch(action);
    //   setInFight(true);
    // } else {
    //   const action = { type: "DELETE_PARTICIPANT", value: item };
    //   dispatch(action);
    //   setInFight(false);
    // }
  };

  const handleFavoriteClick = e => {
    e.stopPropagation();
    let action;

    if (item.name) {
      action = {
        type: "TOGGLE_FAVORITE_CHARACTERS",
        value: item
      };
    } else {
      action = {
        type: "TOGGLE_FAVORITE_COMICS",
        value: item
      };
    }

    dispatch(action);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Item",
    onClick: handleLinkClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, item.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: item.isInFight ? "Item-participate" : "Item-not-participate",
    onClick: handleParticipateClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiBoxingGlove"], {
    className: "Item-participate-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: item.isFavorite ? "Item-favorite" : "Item-not-favorite",
    onClick: handleFavoriteClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ["fas", "star"],
    className: item.isFavorite ? "Item-favorite-icon" : "Item-not-favorite-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item.thumbnail.path + "." + item.thumbnail.extension,
    alt: item.name || item.title,
    className: "Item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, item.name || item.title));
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    }
  };
};

const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters.favorites,
    favoriteComics: state.favoriteComics.favorites,
    fighter1: state.fight.fighter1,
    fighter2: state.fight.fighter2
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Item));

/***/ }),

/***/ "./src/components/commun/ItemDetails.js":
/*!**********************************************!*\
  !*** ./src/components/commun/ItemDetails.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkedItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkedItem */ "./src/components/commun/LinkedItem.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/ItemDetails.js";




const ItemDetails = ({
  item
}) => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [itemDetails, setItemDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  let available, cat1, cat2, title;

  if (item.comics) {
    available = item.comics.available;
    cat1 = "character";
    cat2 = "comics";
    title = "No comics linked to this character";
  } else {
    available = item.characters.available;
    cat1 = "comic";
    cat2 = "characters";
    title = "No characters linked to this comic";
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (available > 0) {
      const fetchData = async () => {
        try {
          const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://localhost:3001/${cat1}/${cat2}?id=${item.id}`);

          if (response.data.code === 200) {
            setItemDetails(response.data.data.results);
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [available, cat1, cat2, item.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ItemDetails",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "ItemDetails-image",
    src: item.thumbnail.path + "." + item.thumbnail.extension,
    alt: item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ItemDetails-details-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "ItemDetails-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, item.name || item.title), isLoading ? "Chargement en cours" : available === 0 ? title : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ItemDetails-linkeditems-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "ItemDetails-linkeditems-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Comic(s)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ItemDetails-linkeditems-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, itemDetails.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LinkedItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 24
      }
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetails);

/***/ }),

/***/ "./src/components/commun/ItemList.js":
/*!*******************************************!*\
  !*** ./src/components/commun/ItemList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/components/commun/Item.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/ItemList.js";



const ItemList = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ItemList",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, data.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      item: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./src/components/commun/LinkedItem.js":
/*!*********************************************!*\
  !*** ./src/components/commun/LinkedItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/LinkedItem.js";


const LinkedItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LinkedItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "LinkedItem-image",
    src: item.thumbnail.path + "." + item.thumbnail.extension,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LinkedItem-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, item.title || item.name));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkedItem);

/***/ }),

/***/ "./src/components/commun/Pagination.js":
/*!*********************************************!*\
  !*** ./src/components/commun/Pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/Pagination.js";



const Pagination = ({
  pages,
  to,
  setIsLoading,
  p
}) => {
  const [pageColor, setPageColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const splittedPage = p.split("_");
  const page = Number(splittedPage[1]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: page === 1 ? `${to}${page}` : `${to}${page - 1}`,
    className: "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "<"), pages.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item,
      to: `${to}${item}`,
      className: pageColor ? "Pagination-link-active link" : "Pagination-link link",
      onClick: () => setIsLoading(true),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: page === pages[pages.length - 1] ? `${to}${page}` : `${to}${page + 1}`,
    className: "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, ">"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/commun/Title.js":
/*!****************************************!*\
  !*** ./src/components/commun/Title.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/components/commun/Title.js";


const Title = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/containers/Character.js":
/*!*************************************!*\
  !*** ./src/containers/Character.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_commun_ItemDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/commun/ItemDetails */ "./src/components/commun/ItemDetails.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Character.js";






const Character = () => {
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [character, setCharacter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://marvel-backend-1.herokuapp.com/character?id=${id}`);

        if (response.data.code === 200) {
          setCharacter(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Character",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Character-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "Puff",
    color: "#f11d22",
    style: {
      marginTop: 50
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_ItemDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: character[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/containers/Characters.js":
/*!**************************************!*\
  !*** ./src/containers/Characters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_commun_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/commun/ItemList */ "./src/components/commun/ItemList.js");
/* harmony import */ var _components_commun_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/commun/Pagination */ "./src/components/commun/Pagination.js");
/* harmony import */ var _functions_paginationFunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/paginationFunc */ "./src/functions/paginationFunc.js");
/* harmony import */ var _functions_pageClickFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/pageClickFunc */ "./src/functions/pageClickFunc.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Characters.js";



 // import Title from "../components/commun/Title";






const Characters = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [characters, setCharacters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [pages, setPages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    p
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const limit = 100;
    const skip = (Object(_functions_pageClickFunc__WEBPACK_IMPORTED_MODULE_7__["default"])(p) - 1) * 100 || 0;

    const fetchData = async () => {
      console.log("fetcg");

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://marvel-backend-1.herokuapp.com/characters", {
          limit,
          skip
        });

        if (response.data.code === 200) {
          setCharacters(response.data.data.results);
          Object(_functions_paginationFunc__WEBPACK_IMPORTED_MODULE_6__["default"])(response.data.data.total, setPages, p, skip);
          console.log(response.data.code);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [p]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Characters-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "Puff",
    color: "#f11d22",
    style: {
      marginTop: 50
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pages: pages,
    to: "/characters/page_",
    setIsLoading: setIsLoading,
    p: p,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ }),

/***/ "./src/containers/Comic.js":
/*!*********************************!*\
  !*** ./src/containers/Comic.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_commun_ItemDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/commun/ItemDetails */ "./src/components/commun/ItemDetails.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Comic.js";






const Comic = () => {
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [comic, setComic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://marvel-backend-1.herokuapp.com/comic?id=${id}`);
        console.log(response.data);

        if (response.data.code === 200) {
          setComic(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Comic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Comic-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "Puff",
    color: "#f11d22",
    style: {
      marginTop: 50
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_ItemDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: comic[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Comic);

/***/ }),

/***/ "./src/containers/Comics.js":
/*!**********************************!*\
  !*** ./src/containers/Comics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_commun_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/commun/ItemList */ "./src/components/commun/ItemList.js");
/* harmony import */ var _components_commun_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/commun/Pagination */ "./src/components/commun/Pagination.js");
/* harmony import */ var _functions_paginationFunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/paginationFunc */ "./src/functions/paginationFunc.js");
/* harmony import */ var _functions_pageClickFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/pageClickFunc */ "./src/functions/pageClickFunc.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Comics.js";



 // import Title from "../components/commun/Title";






const Comics = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [comics, setComics] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [pages, setPages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    p
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const limit = 100;
    const skip = (Object(_functions_pageClickFunc__WEBPACK_IMPORTED_MODULE_7__["default"])(p) - 1) * 100;

    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://marvel-backend-1.herokuapp.com/comics", {
          limit,
          skip
        });
        console.log(response.data);

        if (response.data.code === 200) {
          setComics(response.data.data.results);
          Object(_functions_paginationFunc__WEBPACK_IMPORTED_MODULE_6__["default"])(response.data.data.total, setPages, p, skip);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [p]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Comics",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Comics-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "Puff",
    color: "#f11d22",
    style: {
      marginTop: 50
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: comics,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pages: pages,
    to: "/comics/page_",
    setIsLoading: setIsLoading,
    p: p,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Comics);

/***/ }),

/***/ "./src/containers/Favorites.js":
/*!*************************************!*\
  !*** ./src/containers/Favorites.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_commun_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commun/Item */ "./src/components/commun/Item.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Favorites.js";

 // import Title from "../components/commun/Title";



const Favorites = ({
  favoriteCharacters,
  favoriteComics
}) => {
  console.log("Favorites");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Favorites",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Favorites-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, favoriteCharacters.length === 0 ? "Please add characters in favorites" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Favorites-item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Favorites-item-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "MY CHARACTERS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Favorites-item-subcontainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, favoriteCharacters.map((favorite, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: favorite,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 28
      }
    });
  })))), favoriteComics.length === 0 ? "Please add some comics in favorites" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Favorites-item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Favorites-item-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "MY COMICS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Favorites-item-subcontainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, favoriteComics.map((favorite, index) => {
    console.log(favorite);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: favorite,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 26
      }
    });
  }))))));
};

const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters.favorites,
    favoriteComics: state.favoriteComics.favorites
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Favorites));

/***/ }),

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Home.js";




const Home = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home-enter-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "characters/page_1",
    className: "Home-link-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "Puff",
    color: "#f11d22",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Home-enter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "ENTER"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/containers/Tournament.js":
/*!**************************************!*\
  !*** ./src/containers/Tournament.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_commun_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commun/Title */ "./src/components/commun/Title.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/containers/Tournament.js";




const Tournament = ({
  fighter1,
  fighter2,
  dispatch
}) => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [isLoadingFight, setIsLoadingFight] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [fightersA, setFightersA] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [fightersB, setFightersB] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [winner, setWinner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [teamWinner, setTeamWinner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const gif = ["https://media.giphy.com/media/3o8dFrnhYXR7LvfXdm/giphy.gif", "https://media.giphy.com/media/10H4by255F2UsU/giphy.gif", "https://media.giphy.com/media/3o6QL2hWeeBHlcZ8qs/giphy.gif", "https://media.giphy.com/media/3o7TKKxPt2DhOdqeSQ/giphy.gif", "https://media.giphy.com/media/kkYbDLFmNvO4E/giphy.gif", "https://media.giphy.com/media/8d1tKuxOvDIHK/giphy.gif"];
  const random = Math.round(Math.random() * 6) - 1;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFightersA(fighter1);
    setFightersB(fighter2);
    setIsLoading(false);
  }, [fighter1, fighter2]);

  const handleClick = () => {
    const random = Math.round(Math.random() * 10);

    if (random % 2 === 0) {
      setTeamWinner(fightersB);
    } else {
      console.log("impair");
      setTeamWinner(fightersA);
    }

    setIsLoadingFight(true);
    setInterval(() => {
      setIsLoadingFight(false);
      setWinner(true);
    }, 5000);
  };

  const handleCancelFightClick = () => {
    const action = {
      type: "CANCEL_FIGHT"
    };
    dispatch(action);
  };

  console.log(fightersA);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, isLoading ? "Chargement en cours" : !fightersA.thumbnail || !fightersB.thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Please select 2 characters to start the fight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commun_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "LET'S FIGHT",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-fight-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, winner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Tournament-tryagain",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Fight again"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Tournament-cancelfight",
    onClick: handleCancelFightClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Cancel the fight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-versus-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-teamA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Tournament-fighter-image",
    src: fightersA.thumbnail.path + "." + fightersA.thumbnail.extension,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-versus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "VS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Tournament-teamB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, fightersB.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Tournament-fighter-image" // key={index}
    ,
    src: fightersB.thumbnail.path + "." + fightersB.thumbnail.extension,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }))), isLoadingFight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Tournament-winner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "Fight in progress ...", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: gif[random],
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  })) : winner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Tournament-winner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, `Winner is ${teamWinner.name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: teamWinner.thumbnail.path + "." + teamWinner.thumbnail.extension,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "Fight"))))));
};

const mapStateToProps = state => {
  return {
    fighter1: state.fight.fighter1,
    fighter2: state.fight.fighter2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Tournament));

/***/ }),

/***/ "./src/functions/pageClickFunc.js":
/*!****************************************!*\
  !*** ./src/functions/pageClickFunc.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pageClickFunc = p => {
  let page;

  if (p) {
    const splittedPage = p.split("_");
    page = splittedPage[1];
  } else {
    page = 1;
  }

  return page;
};

/* harmony default export */ __webpack_exports__["default"] = (pageClickFunc);

/***/ }),

/***/ "./src/functions/paginationFunc.js":
/*!*****************************************!*\
  !*** ./src/functions/paginationFunc.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const paginationFunc = (total, setPages, p, skip) => {
  const splittedPage = p.split("_");
  const page = Number(splittedPage[1]);
  const newPages = [];
  let i = 0,
      j = 1;

  while (i < total) {
    if (page < 7) {
      if (newPages.length < 7) {
        newPages.push(j);
      } else if (newPages.length === 7) {
        newPages.push("...");
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    } else if (total - skip < 500) {
      if (i === 0) {
        newPages.push(j);
      } else if (newPages.length === 1) {
        newPages.push("...");
      } else if (j >= page - 5) {
        newPages.push(j);
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    } else if (page >= 7) {
      if (i === 0) {
        newPages.push(j);
      } else if (newPages.length === 1 || newPages.length === 7) {
        newPages.push("...");
      } else if (newPages.length === 2) {
        newPages.push(page - 2);
      } else if (newPages.length === 3) {
        newPages.push(page - 1);
      } else if (newPages.length === 4) {
        newPages.push(page);
      } else if (newPages.length === 5) {
        newPages.push(page + 1);
      } else if (newPages.length === 6) {
        newPages.push(page + 2);
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    }

    j++;
    i = i + 100;
  }

  setPages(newPages);
};

/* harmony default export */ __webpack_exports__["default"] = (paginationFunc);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reducers_favoriteCharactersReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/favoriteCharactersReducer */ "./src/reducers/favoriteCharactersReducer.js");
/* harmony import */ var _reducers_favoriteComicsReducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/favoriteComicsReducers */ "./src/reducers/favoriteComicsReducers.js");
/* harmony import */ var _reducers_fightReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers/fightReducer */ "./src/reducers/fightReducer.js");
var _jsxFileName = "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/index.js";












const persistConfig = {
  key: "root",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default())
};
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  favoriteCharacters: _reducers_favoriteCharactersReducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  favoriteComics: _reducers_favoriteComicsReducers__WEBPACK_IMPORTED_MODULE_10__["default"],
  fight: _reducers_fightReducer__WEBPACK_IMPORTED_MODULE_11__["default"]
});
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistReducer"])(persistConfig, reducers);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(persistedReducer);
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistStore"])(store);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__["PersistGate"], {
  loading: null,
  persistor: persistor,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
})))), document.getElementById("root"));

/***/ }),

/***/ "./src/reducers/favoriteCharactersReducer.js":
/*!***************************************************!*\
  !*** ./src/reducers/favoriteCharactersReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  favorites: []
};

const manageFavoriteCharacters = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case "TOGGLE_FAVORITE_CHARACTERS":
      if (state.favorites.length === 0) {
        // premier favoris
        nextState = { ...state,
          favorites: [...state.favorites, action.value]
        };
        return nextState || state;
      }

      for (let i = 0; i <= state.favorites.length; i++) {
        // boucle déclenché si déjà au moins 1 favoris
        if (i === state.favorites.length) {
          // ajout de favoris
          nextState = { ...state,
            favorites: [...state.favorites, action.value]
          };
          break;
        } else if (state.favorites[i].id === action.value.id) {
          // suppression de favoris
          state.favorites.splice(i, 1);
          nextState = { ...state,
            favorites: [...state.favorites]
          };
          break;
        }
      }

      return nextState || state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (manageFavoriteCharacters);

/***/ }),

/***/ "./src/reducers/favoriteComicsReducers.js":
/*!************************************************!*\
  !*** ./src/reducers/favoriteComicsReducers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  favorites: []
};

const manageFavoriteComics = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case "TOGGLE_FAVORITE_COMICS":
      if (state.favorites.length === 0) {
        nextState = { ...state,
          favorites: [...state.favorites, action.value]
        };
        return nextState || state;
      }

      for (let i = 0; i <= state.favorites.length; i++) {
        if (i === state.favorites.length) {
          nextState = { ...state,
            favorites: [...state.favorites, action.value]
          };
          break;
        } else if (state.favorites[i].id === action.value.id) {
          state.favorites.splice(i, 1);
          nextState = { ...state,
            favorites: [...state.favorites]
          };
          break;
        }
      }

      return nextState || state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (manageFavoriteComics);

/***/ }),

/***/ "./src/reducers/fightReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/fightReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  fighter1: {},
  fighter2: {}
};

const setupFight = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case "TOGGLE_PARTICIPANT":
      if (state.fighter1.id === action.value.id) {
        nextState = { ...state,
          fighter1: {}
        };
      } else if (state.fighter2.id === action.value.id) {
        nextState = { ...state,
          fighter2: {}
        };
      } else if (Object.keys(state.fighter1).length === 0 || Object.keys(state.fighter2).length === 0) {
        if (Object.keys(state.fighter1).length === 0) {
          nextState = { ...state,
            fighter1: action.value
          };
        } else if (Object.keys(state.fighter2).length === 0) {
          nextState = { ...state,
            fighter2: action.value
          };
        }
      }

      return nextState || state;
    // if (Object.keys(state.fighter1).length === 0) {
    //   console.log("ajout en 1");
    //   nextState = {
    //     ...state,
    //     fighter1: action.value,
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter2).length === 0) {
    //   console.log("ajout en 2");
    //   nextState = {
    //     ...state,
    //     fighter2: action.value,
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter1).length > 0) {
    //   console.log("suppression en 1");
    //   nextState = {
    //     ...state,
    //     fighter1: {},
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter2).length > 0) {
    //   console.log("suppression en 2");
    //   nextState = {
    //     ...state,
    //     fighter1: {},
    //   };
    //   return nextState || state;
    // }
    // case "DELETE_PARTICIPANT":
    //   if (state.fighter1.indexOf(action.value) !== -1) {
    //     state.fighter1.splice(state.fighter1.indexOf(action.value), 1);
    //     nextState = {
    //       ...state,
    //       fighter1: [...state.fighter1],
    //     };
    //   } else {
    //     state.fighter2.splice(state.fighter2.indexOf(action.value), 1);
    //     nextState = {
    //       ...state,
    //       fighter2: [...state.fighter2],
    //     };
    //   }
    //   return nextState || state;

    case "CANCEL_FIGHT":
      nextState = { ...state,
        fighter1: {},
        fighter2: {}
      };
      return nextState || state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setupFight);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map