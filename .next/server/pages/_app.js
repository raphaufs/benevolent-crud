module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/IntroModal.tsx":
/*!***************************************!*\
  !*** ./src/components/IntroModal.tsx ***!
  \***************************************/
/*! exports provided: IntroModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IntroModal\", function() { return IntroModal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_BenevolentContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/BenevolentContext */ \"./src/contexts/BenevolentContext.tsx\");\n/* harmony import */ var _styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/IntroModal.module.css */ \"./src/styles/components/IntroModal.module.css\");\n/* harmony import */ var _styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/raphael/github/benevolent-crud/src/components/IntroModal.tsx\";\n\n\n\nfunction IntroModal() {\n  const {\n    closeIntroModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_BenevolentContext__WEBPACK_IMPORTED_MODULE_2__[\"BenevolentContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: \"Benevolent\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Compartilhe Experi\\xEAncias\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Participe de Discuss\\xF5es\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_components_IntroModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          id: \"back\",\n          onClick: closeIntroModal,\n          children: \"Ir para o site\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          id: \"signup\",\n          onClick: closeIntroModal,\n          children: \"Cadastre-se\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnRyb01vZGFsLnRzeD8zMmUzIl0sIm5hbWVzIjpbIkludHJvTW9kYWwiLCJjbG9zZUludHJvTW9kYWwiLCJ1c2VDb250ZXh0IiwiQmVuZXZvbGVudENvbnRleHQiLCJzdHlsZXMiLCJvdmVybGF5IiwiY29udGFpbmVyIiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxVQUFULEdBQXFCO0FBQ3hCLFFBQU07QUFBRUM7QUFBRixNQUFzQkMsd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBdEM7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsK0VBQU0sQ0FBQ0MsT0FBdkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUQsK0VBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFNSTtBQUFLLGlCQUFTLEVBQUVGLCtFQUFNLENBQUNHLE9BQXZCO0FBQUEsZ0NBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsTUFBekI7QUFBZ0MsaUJBQU8sRUFBRU4sZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLFlBQUUsRUFBQyxRQUF6QjtBQUFrQyxpQkFBTyxFQUFFQSxlQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkgiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnRyb01vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmVuZXZvbGVudENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQmVuZXZvbGVudENvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSW50cm9Nb2RhbC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEludHJvTW9kYWwoKXtcbiAgICBjb25zdCB7IGNsb3NlSW50cm9Nb2RhbCB9ID0gdXNlQ29udGV4dChCZW5ldm9sZW50Q29udGV4dCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+QmVuZXZvbGVudDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+Q29tcGFydGlsaGUgRXhwZXJpw6puY2lhczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+UGFydGljaXBlIGRlIERpc2N1c3PDtWVzPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2JhY2snIG9uQ2xpY2s9e2Nsb3NlSW50cm9Nb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJciBwYXJhIG8gc2l0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nc2lnbnVwJyBvbkNsaWNrPXtjbG9zZUludHJvTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FkYXN0cmUtc2VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/IntroModal.tsx\n");

/***/ }),

/***/ "./src/contexts/BenevolentContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/BenevolentContext.tsx ***!
  \********************************************/
/*! exports provided: BenevolentContext, BenevolentProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BenevolentContext\", function() { return BenevolentContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BenevolentProvider\", function() { return BenevolentProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_IntroModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IntroModal */ \"./src/components/IntroModal.tsx\");\n\nvar _jsxFileName = \"/Users/raphael/github/benevolent-crud/src/contexts/BenevolentContext.tsx\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n//allow the communication among components\n\n\nconst BenevolentContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({}); //children comes from _app.tsx\n//it´s created a typescript (interface) to define the type of the children \n\nfunction BenevolentProvider(_ref) {\n  let {\n    children // ...rest contains the level, currentExperience, challengesCompleted, experienceToNextLevel\n\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"children\"]);\n\n  const {\n    0: isIntroModalOpen,\n    1: setIsIntroModalOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  function closeIntroModal() {\n    setIsIntroModalOpen(false);\n  }\n\n  function openIntroModal() {\n    setIsIntroModalOpen(true);\n  }\n\n  return (\n    /*#__PURE__*/\n    //starts the context to allow the communication among components\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BenevolentContext.Provider, {\n      value: {\n        closeIntroModal,\n        openIntroModal\n      },\n      children: [children, isIntroModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_IntroModal__WEBPACK_IMPORTED_MODULE_2__[\"IntroModal\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 35\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this)\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQmVuZXZvbGVudENvbnRleHQudHN4P2FhNWMiXSwibmFtZXMiOlsiQmVuZXZvbGVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQmVuZXZvbGVudFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwiaXNJbnRyb01vZGFsT3BlbiIsInNldElzSW50cm9Nb2RhbE9wZW4iLCJ1c2VTdGF0ZSIsImNsb3NlSW50cm9Nb2RhbCIsIm9wZW5JbnRyb01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFZTyxNQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QyxDLENBRVA7QUFDQTs7QUFDTyxTQUFTQyxrQkFBVCxPQUdxQjtBQUFBLE1BSE87QUFDL0JDLFlBRCtCLENBRXZCOztBQUZ1QixHQUdQO0FBQUEsTUFEckJDLElBQ3FCOztBQUN4QixRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENDLHNEQUFRLENBQUMsS0FBRCxDQUF4RDs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3ZCRix1QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0g7O0FBRUQsV0FBU0csY0FBVCxHQUEwQjtBQUN0QkgsdUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNIOztBQUVEO0FBQUE7QUFDSTtBQUNBLHlFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0ksV0FBSyxFQUFFO0FBQ0hFLHVCQURHO0FBRUhDO0FBRkcsT0FEWDtBQUFBLGlCQU1LTixRQU5MLEVBUU1FLGdCQUFnQixpQkFBSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBYUgiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQmVuZXZvbGVudENvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbGxvdyB0aGUgY29tbXVuaWNhdGlvbiBhbW9uZyBjb21wb25lbnRzXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnRyb01vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnRyb01vZGFsJztcblxuXG5pbnRlcmZhY2UgQmVuZXZvbGVudERhdGFDb250ZXh0IHtcbiAgICBjbG9zZUludHJvTW9kYWw6ICgpID0+IHZvaWQ7XG4gICAgb3BlbkludHJvTW9kYWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBCZW5ldm9sZW50UHJvdmlkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IEJlbmV2b2xlbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBCZW5ldm9sZW50RGF0YUNvbnRleHQpO1xuXG4vL2NoaWxkcmVuIGNvbWVzIGZyb20gX2FwcC50c3hcbi8vaXTCtHMgY3JlYXRlZCBhIHR5cGVzY3JpcHQgKGludGVyZmFjZSkgdG8gZGVmaW5lIHRoZSB0eXBlIG9mIHRoZSBjaGlsZHJlbiBcbmV4cG9ydCBmdW5jdGlvbiBCZW5ldm9sZW50UHJvdmlkZXIoe1xuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3QgLy8gLi4ucmVzdCBjb250YWlucyB0aGUgbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkLCBleHBlcmllbmNlVG9OZXh0TGV2ZWxcbn06IEJlbmV2b2xlbnRQcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgW2lzSW50cm9Nb2RhbE9wZW4sIHNldElzSW50cm9Nb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VJbnRyb01vZGFsKCkge1xuICAgICAgICBzZXRJc0ludHJvTW9kYWxPcGVuKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb3BlbkludHJvTW9kYWwoKSB7XG4gICAgICAgIHNldElzSW50cm9Nb2RhbE9wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy9zdGFydHMgdGhlIGNvbnRleHQgdG8gYWxsb3cgdGhlIGNvbW11bmljYXRpb24gYW1vbmcgY29tcG9uZW50c1xuICAgICAgICA8QmVuZXZvbGVudENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY2xvc2VJbnRyb01vZGFsLFxuICAgICAgICAgICAgICAgIG9wZW5JbnRyb01vZGFsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7IGlzSW50cm9Nb2RhbE9wZW4gJiYgPEludHJvTW9kYWwgLz59XG4gICAgICAgIDwvQmVuZXZvbGVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/BenevolentContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_BenevolentContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/BenevolentContext */ \"./src/contexts/BenevolentContext.tsx\");\n\nvar _jsxFileName = \"/Users/raphael/github/benevolent-crud/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    session: pageProps.session,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_BenevolentContext__WEBPACK_IMPORTED_MODULE_3__[\"BenevolentProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUF3QztBQUNsRCxzQkFDRSxxRUFBQyx5REFBRDtBQUFVLFdBQU8sRUFBRUEsU0FBUyxDQUFDQyxPQUE3QjtBQUFBLDJCQUNFLHFFQUFDLDhFQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVWVGLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEJlbmV2b2xlbnRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0JlbmV2b2xlbnRDb250ZXh0JztcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PiAgICAgIFxuICAgICAgPEJlbmV2b2xlbnRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPiAgICAgICAgXG4gICAgICA8L0JlbmV2b2xlbnRQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/components/IntroModal.module.css":
/*!*****************************************************!*\
  !*** ./src/styles/components/IntroModal.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"overlay\": \"IntroModal_overlay__10iXI\",\n\t\"container\": \"IntroModal_container__27Nri\",\n\t\"buttons\": \"IntroModal_buttons__3cwlL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvSW50cm9Nb2RhbC5tb2R1bGUuY3NzP2IwNjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0ludHJvTW9kYWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm92ZXJsYXlcIjogXCJJbnRyb01vZGFsX292ZXJsYXlfXzEwaVhJXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSW50cm9Nb2RhbF9jb250YWluZXJfXzI3TnJpXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkludHJvTW9kYWxfYnV0dG9uc19fM2N3bExcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/IntroModal.module.css\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globals.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });