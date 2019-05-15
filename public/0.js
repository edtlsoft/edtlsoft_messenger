(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    user: Object
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.commit('setUser', this.user);
    this.$store.dispatch('getConversations').then(function () {
      var conversationId = _this.$route.params.conversationId;

      if (conversationId) {
        var conversation = _this.$store.getters.getConversationById(conversationId); // console.log(conversation);


        _this.$store.dispatch('getMessages', conversation);
      }
    });
    Echo["private"]("users.".concat(this.user.id)).listen('MessageSent', function (data) {
      var message = data.message;
      message.written_by_me = false;

      _this.$store.commit('addMessage', message); //this.addMessage(message);

    });
    Echo.join('messenger').here(function (users) {
      return users.forEach(function (user) {
        return _this.changeStatus(user, true);
      });
    }).joining(function (user) {
      return _this.changeStatus(user, true);
    }).leaving(function (user) {
      return _this.changeStatus(user, false);
    });
  },
  methods: {
    changeStatus: function changeStatus(user, status) {
      var index = this.$store.state.conversations.findIndex(function (conversation) {
        return conversation.contact_id == user.id;
      });
      if (index >= 0) this.$set(this.$store.state.conversations[index], 'online', status);
    }
  },
  computed: {
    selectedConversation: function selectedConversation() {
      return this.$store.state.selectedConversation;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "container-fluid",
        staticStyle: { height: "calc(100vh - 56px)" }
      },
      [
        _c("div", { staticClass: "row h-100 no-gutters" }, [
          _c("div", { staticClass: "col-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-8" })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Messenger/MessengerComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Messenger/MessengerComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessengerComponent.vue?vue&type=template&id=59615eb1& */ "./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1&");
/* harmony import */ var _MessengerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessengerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessengerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messenger/MessengerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerComponent.vue?vue&type=template&id=59615eb1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messenger/MessengerComponent.vue?vue&type=template&id=59615eb1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerComponent_vue_vue_type_template_id_59615eb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);