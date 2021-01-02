(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'category',
  data: function data() {
    return {
      categories: [],
      categoryData: {
        name: '',
        image: ''
      },
      errors: {},
      loader: false,
      tbloader: false
    };
  },
  mounted: function mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.tbloader = true;
                _context.prev = 1;
                _context.next = 4;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 4:
                response = _context.sent;
                console.log(response);
                this.categories = response.data.data;
                this.tbloader = false;
                console.log(this.categories);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                this.flashMessage.error({
                  message: 'Oh, Some Error occured , please Refresh !'
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    attachImage: function attachImage() {
      this.categoryData.image = this.$refs.newCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.categoryData.image);
    },
    hideNewCategoryModal: function hideNewCategoryModal() {
      this.$refs['category-modal'].hide();
      this.categoryData.name = '';
      this.categoryData.image = '';
    },
    showNewCategoryModal: function showNewCategoryModal() {
      this.$refs['category-modal'].show();
    },
    createCategory: function () {
      var _createCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.loader = true;
                formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);
                _context2.prev = 4;
                _context2.next = 7;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["createCategory"](formData);

              case 7:
                response = _context2.sent;
                this.categories.unshift(response.data);
                this.loader = false;
                this.categoryData.name = '', this.categoryData.image = '', this.hideNewCategoryModal();
                this.flashMessage.success({
                  message: 'Category create successfully!'
                });
                _context2.next = 24;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](4);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 19 : 22;
                break;

              case 19:
                this.errors = _context2.t0.response.data.errors;
                this.loader = false;
                return _context2.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: 'Oh, Some Error occured , please try again !'
                });
                return _context2.abrupt("break", 24);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 14]]);
      }));

      function createCategory() {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("h1", { staticClass: "mt-4" }, [_vm._v("Dashboard")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-4" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("span", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: { click: _vm.showNewCategoryModal }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus mr-1" }),
                    _vm._v("\n                Create New\n            ")
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          !_vm.tbloader
            ? _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered text-center" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.categories, function(category, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(category.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "img-fluid img-thumbnail",
                                attrs: {
                                  src:
                                    _vm.$store.state.serverPath +
                                    "storage/" +
                                    category.image,
                                  width: "100px"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm._m(3, true)
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tbloader
            ? _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-center align-content-center mt-5 mb-5"
                },
                [_vm._m(4)]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "category-modal",
            attrs: { "hide-footer": "", title: "Add New Category" }
          },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createCategory($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "from-group mb-3" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Enter Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.categoryData.name,
                          expression: "categoryData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "Enter category name"
                      },
                      domProps: { value: _vm.categoryData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.categoryData,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "from-group mb-3" }, [
                    _c("label", { attrs: { for: "image" } }, [
                      _vm._v("Choose an Image")
                    ]),
                    _vm._v(" "),
                    _vm.categoryData.image.name
                      ? _c("div", { staticClass: "p-2" }, [
                          _c("img", {
                            ref: "newCategoryImageDisplay",
                            staticClass: "cat_image",
                            attrs: { src: "" }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      ref: "newCategoryImage",
                      staticClass: "form-control-file d-block overflow-hidden",
                      attrs: { type: "file", id: "image" },
                      on: { change: _vm.attachImage }
                    }),
                    _vm._v(" "),
                    _vm.errors.image
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.image[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" },
                        on: { click: _vm.hideNewCategoryModal }
                      },
                      [_vm._v("Cancle")]
                    ),
                    _vm._v(" "),
                    !_vm.loader
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "fas fa-check mr-1" }),
                            _vm._v("Save")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loader
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit", disabled: "" }
                          },
                          [
                            _c("i", { staticClass: "fas fa-check mr-1" }),
                            _vm._v("Saving")
                          ]
                        )
                      : _vm._e()
                  ])
                ]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Dashboard")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-list mr-1" }),
      _vm._v("\n              Category List\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white" }, [
      _c("tr", [
        _c("th", [_vm._v("Sl")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-edit" })
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-danger" }, [
        _c("i", { staticClass: "fas fa-trash" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button", disabled: "" }
      },
      [
        _c("span", {
          staticClass: "spinner-border spinner-border-sm",
          attrs: { role: "status", "aria-hidden": "true" }
        }),
        _vm._v("\n            Loading...\n          ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory, loadCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/category', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/category');
}

/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);