import { ref, watch, nextTick, computed, mergeProps, createVNode, defineComponent, resolveComponent, unref, withCtx, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as _sfc_main$1, P } from "./Default-68ed1420.mjs";
import { Head, Link } from "@inertiajs/vue3";
import { wTrans } from "laravel-vue-i18n";
import { V as VToolbar, a as VToolbarTitle, b as VSpacer } from "./VToolbar-8e083a4e.mjs";
import { g as genericComponent, a0 as makeVOverlayProps, a1 as VDialogTransition, v as useProxiedModel, a2 as useScopeId, f as IN_BROWSER, h as useRender, a3 as forwardRefs, j as focusableChildren, K as VOverlay, a4 as VDefaultsProvider, $ as VDivider, q as VBtn, a5 as VSelect, a6 as VCheckboxBtn } from "../ssr.mjs";
import { V as VCard, b as VCardTitle, a as VCardText, c as VCardActions } from "./VCard-6a3fb1b9.mjs";
import { V as VContainer, a as VRow, b as VCol } from "./VRow-bcf9aa06.mjs";
import "pinia";
import "pinia-orm";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
const VDialog$1 = "";
const VDialog = genericComponent()({
  name: "VDialog",
  props: {
    fullscreen: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    ...makeVOverlayProps({
      origin: "center center",
      scrollStrategy: "block",
      transition: {
        component: VDialogTransition
      },
      zIndex: 2400
    })
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onFocusin(e) {
      var _a, _b;
      const before = e.relatedTarget;
      const after = e.target;
      if (before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost dialog
      ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the dialog body
      ![document, overlay.value.contentEl].includes(after) && // It isn't inside the dialog body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        if (!focusable.length)
          return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        if (before === firstElement) {
          lastElement.focus();
        } else {
          firstElement.focus();
        }
      }
    }
    if (IN_BROWSER) {
      watch(() => isActive.value && props.retainFocus, (val) => {
        val ? document.addEventListener("focusin", onFocusin) : document.removeEventListener("focusin", onFocusin);
      }, {
        immediate: true
      });
    }
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": true
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    factors: null,
    factorDictionary: null
  },
  setup(__props) {
    const headers = [
      { title: wTrans("active"), key: "active", sortable: false },
      { title: wTrans("name"), key: "name", sortable: false },
      { title: wTrans("description"), key: "description", sortable: false },
      { title: wTrans("actions"), key: "actions", sortable: false }
    ];
    const dialog = ref();
    function close() {
      dialog.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_data_table = resolveComponent("v-data-table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.$t("factors")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("factors"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, toDisplayString(_ctx.$t("factors")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers,
              items: __props.factors
            }, {
              top: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbar, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VToolbarTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("factors"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("factors")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: dialog.value,
                          "onUpdate:modelValue": ($event) => dialog.value = $event,
                          "max-width": "500px"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps({
                                color: "primary",
                                dark: ""
                              }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("new_factor"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("new_factor")), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps({
                                  color: "primary",
                                  dark: ""
                                }, props), {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("new_factor")), 1)
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-h5"${_scopeId6}>${ssrInterpolate(_ctx.$t("choose_factor_type"))}</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VContainer, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "12"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: _ctx.$t("factor_type"),
                                                              items: __props.factorDictionary,
                                                              "item-title": "name",
                                                              "item-value": "alias"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: _ctx.$t("factor_type"),
                                                                items: __props.factorDictionary,
                                                                "item-title": "name",
                                                                "item-value": "alias"
                                                              }, null, 8, ["label", "items"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "12"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              label: _ctx.$t("factor_type"),
                                                              items: __props.factorDictionary,
                                                              "item-title": "name",
                                                              "item-value": "alias"
                                                            }, null, 8, ["label", "items"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            label: _ctx.$t("factor_type"),
                                                            items: __props.factorDictionary,
                                                            "item-title": "name",
                                                            "item-value": "alias"
                                                          }, null, 8, ["label", "items"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VContainer, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          label: _ctx.$t("factor_type"),
                                                          items: __props.factorDictionary,
                                                          "item-title": "name",
                                                          "item-value": "alias"
                                                        }, null, 8, ["label", "items"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "text",
                                            onClick: close
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.$t("cancel"))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "text",
                                            onClick: close
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.$t("create"))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
                                              variant: "text",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "blue-darken-1",
                                              variant: "text",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VContainer, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        label: _ctx.$t("factor_type"),
                                                        items: __props.factorDictionary,
                                                        "item-title": "name",
                                                        "item-value": "alias"
                                                      }, null, 8, ["label", "items"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "text",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "blue-darken-1",
                                            variant: "text",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VContainer, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      label: _ctx.$t("factor_type"),
                                                      items: __props.factorDictionary,
                                                      "item-title": "name",
                                                      "item-value": "alias"
                                                    }, null, 8, ["label", "items"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          color: "blue-darken-1",
                                          variant: "text",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "blue-darken-1",
                                          variant: "text",
                                          onClick: close
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("factors")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, {
                            class: "mx-4",
                            inset: "",
                            vertical: ""
                          }),
                          createVNode(VSpacer),
                          createVNode(VDialog, {
                            modelValue: dialog.value,
                            "onUpdate:modelValue": ($event) => dialog.value = $event,
                            "max-width": "500px"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps({
                                color: "primary",
                                dark: ""
                              }, props), {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("new_factor")), 1)
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VContainer, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    label: _ctx.$t("factor_type"),
                                                    items: __props.factorDictionary,
                                                    "item-title": "name",
                                                    "item-value": "alias"
                                                  }, null, 8, ["label", "items"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "blue-darken-1",
                                        variant: "text",
                                        onClick: close
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VToolbar, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VToolbarTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("factors")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }),
                        createVNode(VSpacer),
                        createVNode(VDialog, {
                          modelValue: dialog.value,
                          "onUpdate:modelValue": ($event) => dialog.value = $event,
                          "max-width": "500px"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps({
                              color: "primary",
                              dark: ""
                            }, props), {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("new_factor")), 1)
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VContainer, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  label: _ctx.$t("factor_type"),
                                                  items: __props.factorDictionary,
                                                  "item-title": "name",
                                                  "item-value": "alias"
                                                }, null, 8, ["label", "items"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              [`item.active`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    as: "span",
                    href: unref(P)("ticket-allocator.factors.update", item.raw.uuid),
                    method: "patch",
                    data: { active: !!item.raw.deleted_at }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckboxBtn, {
                          "model-value": !item.raw.deleted_at
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckboxBtn, {
                            "model-value": !item.raw.deleted_at
                          }, null, 8, ["model-value"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.update", item.raw.uuid),
                      method: "patch",
                      data: { active: !!item.raw.deleted_at }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCheckboxBtn, {
                          "model-value": !item.raw.deleted_at
                        }, null, 8, ["model-value"])
                      ]),
                      _: 2
                    }, 1032, ["href", "data"])
                  ];
                }
              }),
              [`item.actions`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: unref(P)("ticket-allocator.factors.edit", item.raw.uuid)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-pencil",
                          title: _ctx.$t("edit"),
                          size: "small",
                          variant: "plain"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "mdi-pencil",
                            title: _ctx.$t("edit"),
                            size: "small",
                            variant: "plain"
                          }, null, 8, ["title"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    as: "span",
                    href: unref(P)("ticket-allocator.factors.raise-priority", item.raw.uuid),
                    method: "put"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-arrow-up-thick",
                          title: _ctx.$t("raise_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "mdi-arrow-up-thick",
                            title: _ctx.$t("raise_priority"),
                            size: "small",
                            variant: "plain"
                          }, null, 8, ["title"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    as: "span",
                    href: unref(P)("ticket-allocator.factors.lower-priority", item.raw.uuid),
                    method: "put"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-arrow-down-thick",
                          title: _ctx.$t("lower_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "mdi-arrow-down-thick",
                            title: _ctx.$t("lower_priority"),
                            size: "small",
                            variant: "plain"
                          }, null, 8, ["title"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    as: "span",
                    href: unref(P)("ticket-allocator.factors.destroy", item.raw.uuid),
                    method: "delete"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-delete",
                          title: _ctx.$t("remove"),
                          size: "small",
                          variant: "plain"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "mdi-delete",
                            title: _ctx.$t("remove"),
                            size: "small",
                            variant: "plain"
                          }, null, 8, ["title"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: unref(P)("ticket-allocator.factors.edit", item.raw.uuid)
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-pencil",
                          title: _ctx.$t("edit"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.raise-priority", item.raw.uuid),
                      method: "put"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-arrow-up-thick",
                          title: _ctx.$t("raise_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.lower-priority", item.raw.uuid),
                      method: "put"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-arrow-down-thick",
                          title: _ctx.$t("lower_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.destroy", item.raw.uuid),
                      method: "delete"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-delete",
                          title: _ctx.$t("remove"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_v_data_table, {
                  headers,
                  items: __props.factors
                }, {
                  top: withCtx(() => [
                    createVNode(VToolbar, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VToolbarTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("factors")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          class: "mx-4",
                          inset: "",
                          vertical: ""
                        }),
                        createVNode(VSpacer),
                        createVNode(VDialog, {
                          modelValue: dialog.value,
                          "onUpdate:modelValue": ($event) => dialog.value = $event,
                          "max-width": "500px"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps({
                              color: "primary",
                              dark: ""
                            }, props), {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("new_factor")), 1)
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString(_ctx.$t("choose_factor_type")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VContainer, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  label: _ctx.$t("factor_type"),
                                                  items: __props.factorDictionary,
                                                  "item-title": "name",
                                                  "item-value": "alias"
                                                }, null, 8, ["label", "items"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "blue-darken-1",
                                      variant: "text",
                                      onClick: close
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("create")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  [`item.active`]: withCtx(({ item }) => [
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.update", item.raw.uuid),
                      method: "patch",
                      data: { active: !!item.raw.deleted_at }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCheckboxBtn, {
                          "model-value": !item.raw.deleted_at
                        }, null, 8, ["model-value"])
                      ]),
                      _: 2
                    }, 1032, ["href", "data"])
                  ]),
                  [`item.actions`]: withCtx(({ item }) => [
                    createVNode(unref(Link), {
                      href: unref(P)("ticket-allocator.factors.edit", item.raw.uuid)
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-pencil",
                          title: _ctx.$t("edit"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.raise-priority", item.raw.uuid),
                      method: "put"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-arrow-up-thick",
                          title: _ctx.$t("raise_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.lower-priority", item.raw.uuid),
                      method: "put"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-arrow-down-thick",
                          title: _ctx.$t("lower_priority"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    createVNode(unref(Link), {
                      as: "span",
                      href: unref(P)("ticket-allocator.factors.destroy", item.raw.uuid),
                      method: "delete"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "mdi-delete",
                          title: _ctx.$t("remove"),
                          size: "small",
                          variant: "plain"
                        }, null, 8, ["title"])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  _: 2
                }, 1032, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Factor/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Index-081d0a82.mjs.map
