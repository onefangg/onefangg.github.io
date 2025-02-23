(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/paint_ghpage.js":
/*!******************************!*\
  !*** ../pkg/paint_ghpage.js ***!
  \******************************/
/*! exports provided: __wbg_set_wasm, PaintCanvas, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paint_ghpage_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paint_ghpage_bg.wasm */ \"../pkg/paint_ghpage_bg.wasm\");\n/* harmony import */ var _paint_ghpage_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paint_ghpage_bg.js */ \"../pkg/paint_ghpage_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _paint_ghpage_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PaintCanvas\", function() { return _paint_ghpage_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"PaintCanvas\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _paint_ghpage_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\nObject(_paint_ghpage_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_paint_ghpage_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/paint_ghpage.js?");

/***/ }),

/***/ "../pkg/paint_ghpage_bg.js":
/*!*********************************!*\
  !*** ../pkg/paint_ghpage_bg.js ***!
  \*********************************/
/*! exports provided: __wbg_set_wasm, PaintCanvas, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaintCanvas\", function() { return PaintCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nlet cachedUint32ArrayMemory0 = null;\n\nfunction getUint32ArrayMemory0() {\n    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {\n        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);\n    }\n    return cachedUint32ArrayMemory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray32ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 4, 4) >>> 0;\n    getUint32ArrayMemory0().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachedDataViewMemory0 = null;\n\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nfunction getArrayU32FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);\n}\n\nconst PaintCanvasFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_paintcanvas_free(ptr >>> 0, 1));\n/**\n*/\nclass PaintCanvas {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(PaintCanvas.prototype);\n        obj.__wbg_ptr = ptr;\n        PaintCanvasFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        PaintCanvasFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_paintcanvas_free(ptr, 0);\n    }\n    /**\n    * @returns {number}\n    */\n    get width() {\n        const ret = wasm.__wbg_get_paintcanvas_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        wasm.__wbg_set_paintcanvas_width(this.__wbg_ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get height() {\n        const ret = wasm.__wbg_get_paintcanvas_height(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set height(arg0) {\n        wasm.__wbg_set_paintcanvas_height(this.__wbg_ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get size() {\n        const ret = wasm.__wbg_get_paintcanvas_size(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set size(arg0) {\n        wasm.__wbg_set_paintcanvas_size(this.__wbg_ptr, arg0);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {PaintCanvas}\n    */\n    static new(width, height) {\n        const ret = wasm.paintcanvas_new(width, height);\n        return PaintCanvas.__wrap(ret);\n    }\n    /**\n    * @param {number} start_from_idx\n    * @param {Uint32Array} current_state\n    * @returns {Uint32Array}\n    */\n    fill_bucket(start_from_idx, current_state) {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            const ptr0 = passArray32ToWasm0(current_state, wasm.__wbindgen_malloc);\n            const len0 = WASM_VECTOR_LEN;\n            wasm.paintcanvas_fill_bucket(retptr, this.__wbg_ptr, start_from_idx, ptr0, len0);\n            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);\n            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);\n            var v2 = getArrayU32FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 4, 4);\n            return v2;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../paint/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/paint_ghpage_bg.js?");

/***/ }),

/***/ "../pkg/paint_ghpage_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/paint_ghpage_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, __wbg_paintcanvas_free, __wbg_get_paintcanvas_width, __wbg_set_paintcanvas_width, __wbg_get_paintcanvas_height, __wbg_set_paintcanvas_height, __wbg_get_paintcanvas_size, __wbg_set_paintcanvas_size, paintcanvas_new, paintcanvas_fill_bucket, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./paint_ghpage_bg.js */ \"../pkg/paint_ghpage_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/paint_ghpage_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var paint_ghpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paint_ghpage */ \"../pkg/paint_ghpage.js\");\n\nconst canvas = document.getElementById(\"paintTemplate\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst squareNum = 100;\nconst limit = 500;\nconst size = limit / squareNum;\nvar paintCanvasVec = [...Array(squareNum * squareNum)].map(_ => 0);\n\n// change to similar concept of pointerId like the mdn docs? https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events\nvar isBucketFill = false;\nvar currentColour = \"#ff0000\";\nvar colorPicker = document.querySelector(\"#currentColour\");\n\nfunction submitColor(event) {\n    currentColour = event.target.value;\n    colorPicker.value = currentColour;\n}\ncolorPicker.value = currentColour;\ncolorPicker.addEventListener(\"input\", submitColor,false);\n\nconst ongoing = new Map();\n\nfunction handleClearTemplate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    paintCanvasVec = [...Array(squareNum * squareNum)].map(_ => 0);\n    drawPaintGrid();\n}\nfunction handleStart(event) {\n    ongoing.set(event.pointerId, 1);\n    handleFill(event);\n}\n\nfunction handleEnd(event) {\n    handleFill(event);\n    ongoing.delete(event.pointerId);\n}\n\nfunction handleCancel(event) {\n    ongoing.delete(event.pointerId);\n}\n\n\n\nfunction handleFill(event) {\n    const curr = ongoing.get(event.pointerId);\n    if (!curr) return;\n\n    const touch = {\n      pageX: event.pageX,\n      pageY: event.pageY,\n    };\n    ctx.fillStyle = currentColour;\n    ctx.moveTo(touch.pageX, touch.pageY);\n    const startFromX = size * Math.floor(touch.pageX / size);\n    const startFromY = size * Math.floor(touch.pageY / size);\n    const applyAtIndex = (startFromX / size) + (startFromY / size) * squareNum;\n    \n    if (!isBucketFill) {\n        paintCanvasVec[applyAtIndex] = 1;\n        ctx.fillRect(startFromX, startFromY,size-1,size-1)\n    } else {\n        const start = performance.now();\n\n        let canvas = paint_ghpage__WEBPACK_IMPORTED_MODULE_0__[\"PaintCanvas\"].new(squareNum, squareNum);\n        let updatedCanvas = canvas.fill_bucket(applyAtIndex, paintCanvasVec);\n        let afterCall = performance.now();\n        console.log(`Call from wasm library took ${afterCall - start} milliseconds`)\n        for (var idx = 0; idx < updatedCanvas.length; idx++) {\n            if (updatedCanvas[idx] === 0 || paintCanvasVec[idx] === 1) continue;\n            paintCanvasVec[idx] = 1;\n            var getCanvasX = size * Math.floor(idx % squareNum);\n            var getCanvasY = size * Math.floor(idx / squareNum);\n            ctx.fillRect(getCanvasX, getCanvasY,size-1,size-1)\n        }\n        const end = performance.now();\n        console.log(`Canvas rendering time took ${end - afterCall} milliseconds`)\n        \n    } \n}\ncanvas.addEventListener(\"pointerdown\", handleStart, false);\ncanvas.addEventListener(\"pointermove\", handleFill, false);\ncanvas.addEventListener(\"pointerup\", handleEnd, false);\ncanvas.addEventListener(\"pointercancel\", handleCancel, false);\ncanvas.addEventListener(\"mouseout\", (event) => { ongoing.delete(event.pointerId) }, false);\ncanvas.addEventListener(\"mouseleave\", (event) => { ongoing.delete(event.pointerId) }, false);\n\nfunction drawPaintGrid() {\n    ctx.lineWidth = 1;\n    ctx.strokeStyle = \"lightGrey\";\n    for (let r = 0; r < squareNum; r++) {\n        ctx.beginPath();\n        ctx.moveTo((r+1)*size, 0);\n        ctx.lineTo((r+1)*size, limit);\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(0, (r+1)*size);\n        ctx.lineTo(limit, (r+1)*size);\n        ctx.stroke();\n    }\n}\n\n\nconst clearButton = document.getElementById(\"clearTemplate\");\nclearButton.addEventListener(\"click\", handleClearTemplate, false);\n\nconst brushButton = document.getElementById(\"brush\");\nbrushButton.addEventListener(\"click\", function(event) {\n    isBucketFill = false;\n    document.getElementById(\"paintSection\").style.cursor = \"url(pencil_icon.png) 2 17, auto\";\n}, false);\n\n\nconst bucketButton = document.getElementById(\"fillBucket\");\nbucketButton.addEventListener(\"click\", function(event) {\n    isBucketFill = true;\n    document.getElementById(\"paintSection\").style.cursor = \"url(paint_bucket.png) 18 12, auto\";\n\n}, false);\ndrawPaintGrid();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);