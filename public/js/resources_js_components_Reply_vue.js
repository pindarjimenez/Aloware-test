"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Reply_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    comment: Object,
    username: String
  },
  data: function data() {
    return {
      content: '',
      isReply: false,
      showAll: false
    };
  },
  methods: {
    submitReply: function submitReply() {
      var _this = this;

      var data = {
        commentId: this.comment.id,
        username: this.username ? this.username : 'Anonymous',
        content: this.content
      };
      axios.post("/api/comment/reply", data).then(function (response) {
        if (response.data.result) {
          _this.content = '';

          _this.$store.dispatch("GET_COMMENTS");
        }
      });
    },
    formatTimestamp: function formatTimestamp(date) {
      return this.moment(date).fromNow();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".replies[data-v-8f05f2e2] {\n  width: 100%;\n  padding-top: 15px;\n}\n.replies .reply-btn[data-v-8f05f2e2] {\n  cursor: pointer;\n  color: #d2d2d2;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n}\n.replies .reply-btn:hover span[data-v-8f05f2e2] {\n  color: #337ab7;\n}\n.replies .item[data-v-8f05f2e2] {\n  margin-left: 20px;\n  padding: 15px 0 15px 35px;\n  border-left: 3px solid #ccc;\n}\n.replies .item[data-v-8f05f2e2]:last-child {\n  margin-bottom: 15px;\n  padding-bottom: 0;\n}\n.replies .item .profile[data-v-8f05f2e2] {\n  display: flex;\n}\n.replies .item .profile strong[data-v-8f05f2e2] {\n  color: #337ab7;\n}\n.replies .item .content[data-v-8f05f2e2] {\n  padding-top: 5px;\n  padding-left: 57px;\n  font-size: 14px;\n}\n.replies .see-more-reply[data-v-8f05f2e2] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #337ab7;\n}\n.replies .reply-form[data-v-8f05f2e2] {\n  display: flex;\n  margin-bottom: 15px;\n  padding-left: 55px;\n}\n.replies .reply-form .profile[data-v-8f05f2e2] {\n  display: flex;\n}\n.replies .reply-form .profile strong[data-v-8f05f2e2] {\n  color: #337ab7;\n}\n.replies .reply-form .form-control[data-v-8f05f2e2] {\n  border-right: none;\n}\n.replies .reply-form .form-control[data-v-8f05f2e2]:focus {\n  box-shadow: none;\n  border-color: #ced4da;\n}\n.replies .reply-form .submit-btn[data-v-8f05f2e2] {\n  cursor: pointer;\n}\n.replies .reply-form .submit-btn .input-group-text[data-v-8f05f2e2] {\n  background: #fff;\n}\n.replies .reply-form .submit-btn:hover .material-icons[data-v-8f05f2e2] {\n  color: #337ab7;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_style_index_0_id_8f05f2e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_style_index_0_id_8f05f2e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_style_index_0_id_8f05f2e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Reply.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Reply.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reply.vue?vue&type=template&id=8f05f2e2&scoped=true& */ "./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true&");
/* harmony import */ var _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reply.vue?vue&type=script&lang=js& */ "./resources/js/components/Reply.vue?vue&type=script&lang=js&");
/* harmony import */ var _Reply_vue_vue_type_style_index_0_id_8f05f2e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& */ "./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8f05f2e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reply.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reply.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Reply.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_style_index_0_id_8f05f2e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=style&index=0&id=8f05f2e2&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_8f05f2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reply.vue?vue&type=template&id=8f05f2e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Reply.vue?vue&type=template&id=8f05f2e2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "replies" },
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between align-items-center" },
        [
          _c(
            "div",
            {
              staticClass: "see-more-reply",
              on: {
                click: function ($event) {
                  _vm.showAll = !_vm.showAll
                },
              },
            },
            [
              Object.keys(_vm.comment.replies).length > 3
                ? [
                    _c("span", { staticClass: "material-icons" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.showAll ? "unfold_less" : "unfold_more") +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.showAll ? "Less" : "More"))]),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "reply-btn",
              on: {
                click: function ($event) {
                  _vm.isReply = !_vm.isReply
                },
              },
            },
            [
              _c("span", { staticClass: "material-icons" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.isReply ? "visibility_off" : "reply") +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.isReply ? "Hide" : "Reply"))]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.comment.replies, function (reply, index) {
        return [
          _vm.showAll || index >= Object.keys(_vm.comment.replies).length - 3
            ? _c("div", { key: index, staticClass: "item" }, [
                _c("div", { staticClass: "d-flex justify-content-between" }, [
                  _c("div", { staticClass: "profile" }, [
                    _c("img", {
                      staticClass: "profile-image rounded-circle",
                      attrs: {
                        src:
                          reply.username == "Anonymous"
                            ? "images/avatar1.png"
                            : "images/avatar2.png",
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile-details ml-3" }, [
                      _c("strong", [_vm._v(_vm._s(reply.username))]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted small" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.formatTimestamp(reply.created_at)) +
                            "\n                        "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(reply.content) +
                      "\n            "
                  ),
                ]),
              ])
            : _vm._e(),
        ]
      }),
      _vm._v(" "),
      _vm.isReply
        ? _c("div", { staticClass: "reply-form" }, [
            _c("div", { staticClass: "profile" }, [
              _c("img", {
                staticClass: "profile-image rounded-circle mr-2",
                attrs: {
                  src:
                    _vm.username == ""
                      ? "images/avatar1.png"
                      : "images/avatar2.png",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.content,
                    expression: "content",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Enter reply here..." },
                domProps: { value: _vm.content },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.content = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-append submit-btn",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.submitReply()
                    },
                  },
                },
                [_vm._m(0)]
              ),
            ]),
          ])
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-text" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("send")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);