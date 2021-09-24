/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "agh": () => (/* binding */ agh),
/* harmony export */   "subjects": () => (/* binding */ subjects)
/* harmony export */ });
var agh = {
  faculties: [{
    name: 'Wydział Inżynierii Lądowej i Gospodarki Zasobami',
    fields: [{
      id: 'budownictwo',
      name: 'Budownictwo',
      subjects: [['maths', 'physics', 'chemistry', 'computer-science'], ['maths', 'physics', 'chemistry', 'computer-science', 'foreign-language']]
    }, {
      id: 'inzynieria-gornicza',
      name: 'Inżynieria Górnicza',
      subjects: [['maths', 'physics', 'chemistry', 'computer-science'], ['maths', 'physics', 'chemistry', 'computer-science', 'geography', 'foreign-language']]
    }, {
      id: 'inzynieria-i-zarzadzanie-pp',
      name: 'Inżynieria i Zarządzanie Procesami Przemysłowymi',
      subjects: [['maths', 'physics', 'chemistry', 'computer-science'], ['maths', 'physics', 'chemistry', 'computer-science', 'foreign-language']]
    }, {
      id: 'inzynieria-ks',
      name: 'Inżynieria Kształtowania Środowiska',
      subjects: [['maths', 'physics', 'chemistry', 'computer-science', 'biology'], ['maths', 'physics', 'chemistry', 'computer-science', 'biology', 'foreign-language', 'geography']]
    }, {
      id: 'rewitalizacja-tz',
      name: 'Rewitalizacja Terenów Zdegradowanych',
      subjects: [['maths', 'physics', 'chemistry', 'computer-science', 'biology'], ['maths', 'physics', 'chemistry', 'computer-science', 'biology', 'foreign-language', 'geography']]
    }]
  }, {
    name: 'Wydział Inżynierii Metali i Informatyki Przemysłowej',
    fields: ['', '', '', '', '']
  }]
};
var subjects = ['Matematyka (poziom rozszerzony)', 'Fizyka (poziom rozszerzony)', 'Informatyka (poziom rozszerzony)', 'Biologia (poziom rozszerzony)', 'Chemia (poziom rozszerzony)', 'Geografia (poziom rozszerzony)', 'Język polski (poziom rozszerzony)', 'Wiedza o społeczeństwie (poziom rozszerzony)', 'Historia (poziom rozszerzony)', 'Historia sztuki (poziom rozszerzony)', 'Filozofia (poziom rozszerzony)', 'Język obcy (poziom rozszerzony)'];


/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");


var calculator = document.querySelector('.agh-calculator__form');
var calculateBtn = document.querySelector('#calculate-btn');
var extraSubjects = document.querySelector('.agh-calculator__extra-subjects');

var getRealValue = function getRealValue(n) {
  if (n < 30) return n;
  if (n >= 30 && n <= 80) return n + 2 * (n - 30);
  return n + 100;
};

var calculateResult = function calculateResult(g1, g2, m) {
  g1 = getRealValue(parseInt(g1));
  g2 = getRealValue(parseInt(g2));
  m = 2 * parseInt(m);
  return 4 * (0.75 * g1 + 0.25 * g2) + m;
};

var getResults = function getResults(e) {
  e.preventDefault();
  var alInputs = Array.from(document.querySelectorAll('.al-input'));
  var list = document.createElement('ul');
  var resultsContainer = document.querySelector('.agh-calculator__results');
  _data__WEBPACK_IMPORTED_MODULE_1__.agh.faculties[0].fields.forEach(function (f) {
    var s = [[], []];
    alInputs.forEach(function (input) {
      for (var i = 0; i < f.subjects[0].length; i++) {
        if (input.id === f.subjects[0][i]) {
          s[0].push(input.id);
          break;
        }
      }

      for (var _i = 0; _i < f.subjects[1].length; _i++) {
        if (input.id === f.subjects[1][_i]) {
          s[1].push(input.id);
          break;
        }
      }
    });
    var results = [[], []];
    s[0].forEach(function (s) {
      results[0].push(document.querySelector("#".concat(s)).value);
    });
    s[1].forEach(function (s) {
      results[1].push(document.querySelector("#".concat(s)).value);
    });
    results[0].sort(function (a, b) {
      return b - a;
    });
    results[1].sort(function (a, b) {
      return b - a;
    });
    var r = calculateResult(results[0][0], results[1][0], document.querySelector('#maths-el-result').value);
    resultsContainer.querySelector(".results__item[data-id=\"".concat(f.id, "\"] > .results__result")).innerHTML = "[".concat(r, "]");
  });
};

calculator.addEventListener('input', function (e) {
  var t = e.target;
  if (!t.classList.contains('agh-calculator__slider')) return;
  t.nextElementSibling.value = t.value;
  ;
});
calculator.addEventListener('click', function (e) {
  e.preventDefault();
  var t = e.target;
  if (t.tagName !== 'BUTTON') return;
  var id = t.parentElement.parentElement.getAttribute('data-id');
  document.querySelector(".extra-subjects__item[data-id=\"".concat(id, "\"]")).classList.remove('hidden');
  t.parentElement.parentElement.remove();
});
extraSubjects.addEventListener('click', function (e) {
  var t = e.target;
  if (!t.classList.contains('extra-subjects__item')) return;
  var li = document.createElement('li');
  li.classList.add('agh-calculator__subject');
  var l = document.createElement('label');
  l.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.subjects[t.getAttribute('data-id')];
  var b = document.createElement('button');
  b.textContent = 'X';
  var s = document.createElement('input');
  s.type = 'range';
  s.min = 0;
  s.max = 100;
  s.step = 1;
  s.value = 100;
  var n = document.createElement('input');
  n.type = 'number';
  n.min = 0;
  n.max = 100;
  n.value = 100;
  li.appendChild(l).appendChild(b);
  li.appendChild(s);
  li.appendChild(n);
  document.querySelector('.agh-calculator__subject-list').appendChild(li);
  t.classList.add('hidden');
});
calculateBtn.addEventListener('click', function (e) {
  return getResults(e);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLEVBQXdEb0QsV0FBeEQsQ0FBb0VSLEVBQXBFO0FBQ0FULEVBQUFBLENBQUMsQ0FBQ0UsU0FBRixDQUFZUSxHQUFaLENBQWdCLFFBQWhCO0FBQ0gsQ0FqQ0Q7QUFtQ0E1QyxZQUFZLENBQUNpQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFBdkIsQ0FBQztBQUFBLFNBQUlELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFkO0FBQUEsQ0FBeEMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FnaC1jYWxjdWxhdG9yLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vYWdoLWNhbGN1bGF0b3IvLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL2FnaC1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FnaC1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZ2gtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FnaC1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWdoLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWdoID0ge1xyXG4gICAgZmFjdWx0aWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnV3lkemlhxYIgSW7FvHluaWVyaWkgTMSFZG93ZWogaSBHb3Nwb2RhcmtpIFphc29iYW1pJyxcclxuICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdidWRvd25pY3R3bycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0J1ZG93bmljdHdvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbICdtYXRocycsICdwaHlzaWNzJywgJ2NoZW1pc3RyeScsICdjb21wdXRlci1zY2llbmNlJyBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbICdtYXRocycsICdwaHlzaWNzJywgJ2NoZW1pc3RyeScsICdjb21wdXRlci1zY2llbmNlJywgJ2ZvcmVpZ24tbGFuZ3VhZ2UnIF1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnaW56eW5pZXJpYS1nb3JuaWN6YScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0luxbx5bmllcmlhIEfDs3JuaWN6YScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyAnbWF0aHMnLCAncGh5c2ljcycsICdjaGVtaXN0cnknLCAnY29tcHV0ZXItc2NpZW5jZScgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyAnbWF0aHMnLCAncGh5c2ljcycsICdjaGVtaXN0cnknLCAnY29tcHV0ZXItc2NpZW5jZScsICdnZW9ncmFwaHknLCAnZm9yZWlnbi1sYW5ndWFnZScgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdpbnp5bmllcmlhLWktemFyemFkemFuaWUtcHAnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdJbsW8eW5pZXJpYSBpIFphcnrEhWR6YW5pZSBQcm9jZXNhbWkgUHJ6ZW15c8WCb3d5bWknLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgJ21hdGhzJywgJ3BoeXNpY3MnLCAnY2hlbWlzdHJ5JywgJ2NvbXB1dGVyLXNjaWVuY2UnIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgJ21hdGhzJywgJ3BoeXNpY3MnLCAnY2hlbWlzdHJ5JywgJ2NvbXB1dGVyLXNjaWVuY2UnLCAnZm9yZWlnbi1sYW5ndWFnZScgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdpbnp5bmllcmlhLWtzJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSW7FvHluaWVyaWEgS3N6dGHFgnRvd2FuaWEgxZpyb2Rvd2lza2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgJ21hdGhzJywgJ3BoeXNpY3MnLCAnY2hlbWlzdHJ5JywgJ2NvbXB1dGVyLXNjaWVuY2UnLCAnYmlvbG9neScgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyAnbWF0aHMnLCAncGh5c2ljcycsICdjaGVtaXN0cnknLCAnY29tcHV0ZXItc2NpZW5jZScsICdiaW9sb2d5JywgJ2ZvcmVpZ24tbGFuZ3VhZ2UnLCAnZ2VvZ3JhcGh5JyBdXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ3Jld2l0YWxpemFjamEtdHonLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZXdpdGFsaXphY2phIFRlcmVuw7N3IFpkZWdyYWRvd2FueWNoJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbICdtYXRocycsICdwaHlzaWNzJywgJ2NoZW1pc3RyeScsICdjb21wdXRlci1zY2llbmNlJywgJ2Jpb2xvZ3knIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgJ21hdGhzJywgJ3BoeXNpY3MnLCAnY2hlbWlzdHJ5JywgJ2NvbXB1dGVyLXNjaWVuY2UnLCAnYmlvbG9neScsICdmb3JlaWduLWxhbmd1YWdlJywgJ2dlb2dyYXBoeScgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnV3lkemlhxYIgSW7FvHluaWVyaWkgTWV0YWxpIGkgSW5mb3JtYXR5a2kgUHJ6ZW15c8WCb3dlaicsXHJcbiAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmNvbnN0IHN1YmplY3RzID0gW1xyXG4gICAgJ01hdGVtYXR5a2EgKHBvemlvbSByb3pzemVyem9ueSknLFxyXG4gICAgJ0ZpenlrYSAocG96aW9tIHJvenN6ZXJ6b255KScsXHJcbiAgICAnSW5mb3JtYXR5a2EgKHBvemlvbSByb3pzemVyem9ueSknLFxyXG4gICAgJ0Jpb2xvZ2lhIChwb3ppb20gcm96c3plcnpvbnkpJyxcclxuICAgICdDaGVtaWEgKHBvemlvbSByb3pzemVyem9ueSknLFxyXG4gICAgJ0dlb2dyYWZpYSAocG96aW9tIHJvenN6ZXJ6b255KScsXHJcbiAgICAnSsSZenlrIHBvbHNraSAocG96aW9tIHJvenN6ZXJ6b255KScsXHJcbiAgICAnV2llZHphIG8gc3BvxYJlY3plxYRzdHdpZSAocG96aW9tIHJvenN6ZXJ6b255KScsXHJcbiAgICAnSGlzdG9yaWEgKHBvemlvbSByb3pzemVyem9ueSknLFxyXG4gICAgJ0hpc3RvcmlhIHN6dHVraSAocG96aW9tIHJvenN6ZXJ6b255KScsXHJcbiAgICAnRmlsb3pvZmlhIChwb3ppb20gcm96c3plcnpvbnkpJyxcclxuICAgICdKxJl6eWsgb2JjeSAocG96aW9tIHJvenN6ZXJ6b255KSdcclxuXTtcclxuXHJcbmV4cG9ydCB7IGFnaCwgc3ViamVjdHMgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgeyBhZ2gsIHN1YmplY3RzIH0gZnJvbSAnLi9kYXRhJztcclxuXHJcbmNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWdoLWNhbGN1bGF0b3JfX2Zvcm0nKTtcclxuY29uc3QgY2FsY3VsYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGN1bGF0ZS1idG4nKTtcclxuY29uc3QgZXh0cmFTdWJqZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2gtY2FsY3VsYXRvcl9fZXh0cmEtc3ViamVjdHMnKTtcclxuXHJcbmNvbnN0IGdldFJlYWxWYWx1ZSA9IG4gPT4ge1xyXG4gICAgaWYgKG4gPCAzMClcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIGlmIChuID49IDMwICYmIG4gPD0gODApXHJcbiAgICAgICAgcmV0dXJuIG4gKyAyICogKG4gLSAzMCk7XHJcblxyXG4gICAgcmV0dXJuIG4gKyAxMDA7XHJcbn1cclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVJlc3VsdCA9IChnMSwgZzIsIG0pID0+IHtcclxuICAgIGcxID0gZ2V0UmVhbFZhbHVlKHBhcnNlSW50KGcxKSk7XHJcbiAgICBnMiA9IGdldFJlYWxWYWx1ZShwYXJzZUludChnMikpO1xyXG4gICAgbSA9IDIgKiBwYXJzZUludChtKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIDQgKiAoMC43NSAqIGcxICsgMC4yNSAqIGcyKSArIG07XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZXN1bHRzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhbElucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsLWlucHV0JykpO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2gtY2FsY3VsYXRvcl9fcmVzdWx0cycpO1xyXG4gICAgYWdoLmZhY3VsdGllc1swXS5maWVsZHMuZm9yRWFjaChmID0+IHtcclxuICAgICAgICBjb25zdCBzID0gW1tdLFtdXTtcclxuXHJcbiAgICAgICAgYWxJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZi5zdWJqZWN0c1swXS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmlkID09PSBmLnN1YmplY3RzWzBdW2ldKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNbMF0ucHVzaChpbnB1dC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZi5zdWJqZWN0c1sxXS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmlkID09PSBmLnN1YmplY3RzWzFdW2ldKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNbMV0ucHVzaChpbnB1dC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtbXSxbXV07XHJcbiAgICAgICAgc1swXS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRzWzBdLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c31gKS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc1sxXS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRzWzFdLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c31gKS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0c1swXS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XHJcbiAgICAgICAgcmVzdWx0c1sxXS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHIgPSBjYWxjdWxhdGVSZXN1bHQocmVzdWx0c1swXVswXSwgcmVzdWx0c1sxXVswXSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGhzLWVsLXJlc3VsdCcpLnZhbHVlKTtcclxuICAgICAgICByZXN1bHRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5yZXN1bHRzX19pdGVtW2RhdGEtaWQ9XCIke2YuaWR9XCJdID4gLnJlc3VsdHNfX3Jlc3VsdGApLmlubmVySFRNTCA9IGBbJHtyfV1gO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgICBjb25zdCB0ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoIXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZ2gtY2FsY3VsYXRvcl9fc2xpZGVyJykpIHJldHVybjtcclxuXHJcbiAgICB0Lm5leHRFbGVtZW50U2libGluZy52YWx1ZSA9IHQudmFsdWU7O1xyXG59KTtcclxuXHJcbmNhbGN1bGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodC50YWdOYW1lICE9PSAnQlVUVE9OJylcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWQgPSB0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5leHRyYS1zdWJqZWN0c19faXRlbVtkYXRhLWlkPVwiJHtpZH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG59KTtcclxuXHJcbmV4dHJhU3ViamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGNvbnN0IHQgPSBlLnRhcmdldDtcclxuICAgIGlmICghdC5jbGFzc0xpc3QuY29udGFpbnMoJ2V4dHJhLXN1YmplY3RzX19pdGVtJykpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2FnaC1jYWxjdWxhdG9yX19zdWJqZWN0Jyk7XHJcblxyXG4gICAgY29uc3QgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsLnRleHRDb250ZW50ID0gc3ViamVjdHNbdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcblxyXG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYi50ZXh0Q29udGVudCA9ICdYJztcclxuXHJcbiAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHMudHlwZSA9ICdyYW5nZSc7XHJcbiAgICBzLm1pbiA9IDA7XHJcbiAgICBzLm1heCA9IDEwMDtcclxuICAgIHMuc3RlcCA9IDE7XHJcbiAgICBzLnZhbHVlID0gMTAwO1xyXG5cclxuICAgIGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbi50eXBlID0gJ251bWJlcic7XHJcbiAgICBuLm1pbiA9IDA7XHJcbiAgICBuLm1heCA9IDEwMDtcclxuICAgIG4udmFsdWUgPSAxMDA7XHJcblxyXG4gICAgbGkuYXBwZW5kQ2hpbGQobCkuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChzKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKG4pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2gtY2FsY3VsYXRvcl9fc3ViamVjdC1saXN0JykuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG5jYWxjdWxhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGdldFJlc3VsdHMoZSkpOyJdLCJuYW1lcyI6WyJhZ2giLCJmYWN1bHRpZXMiLCJuYW1lIiwiZmllbGRzIiwiaWQiLCJzdWJqZWN0cyIsImNhbGN1bGF0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYWxjdWxhdGVCdG4iLCJleHRyYVN1YmplY3RzIiwiZ2V0UmVhbFZhbHVlIiwibiIsImNhbGN1bGF0ZVJlc3VsdCIsImcxIiwiZzIiLCJtIiwicGFyc2VJbnQiLCJnZXRSZXN1bHRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxJbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJyZXN1bHRzQ29udGFpbmVyIiwiZm9yRWFjaCIsImYiLCJzIiwiaW5wdXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInJlc3VsdHMiLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsInIiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJsaSIsImFkZCIsImwiLCJ0ZXh0Q29udGVudCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzdGVwIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9