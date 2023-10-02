"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stats-gl";
exports.ids = ["vendor-chunks/stats-gl"];
exports.modules = {

/***/ "(ssr)/./node_modules/stats-gl/dist/main.cjs":
/*!*********************************************!*\
  !*** ./node_modules/stats-gl/dist/main.cjs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst panel = __webpack_require__(/*! ./panel.cjs */ \"(ssr)/./node_modules/stats-gl/dist/panel.cjs\");\nconst _Stats = class _Stats {\n  constructor({ logsPerSecond = 20, samplesLog = 100, samplesGraph = 10, precision = 2, minimal = false, horizontal = true, mode = 0 } = {}) {\n    this.mode = mode;\n    this.horizontal = horizontal;\n    this.container = document.createElement(\"div\");\n    this.container.style.cssText = \"position:fixed;top:0;left:0;opacity:0.9;z-index:10000;\";\n    if (minimal) {\n      this.container.style.cssText += \"cursor:pointer\";\n    }\n    this.canvasGpu = null;\n    this.gl = null;\n    this.query = null;\n    this.minimal = minimal;\n    this.beginTime = (performance || Date).now();\n    this.prevTime = this.beginTime;\n    this.prevCpuTime = this.beginTime;\n    this.frames = 0;\n    this.averageCpu = {\n      logs: [],\n      graph: []\n    };\n    this.averageGpu = {\n      logs: [],\n      graph: []\n    };\n    this.queryCreated = false;\n    this.fpsPanel = this.addPanel(new _Stats.Panel(\"FPS\", \"#0ff\", \"#002\"), 0);\n    this.msPanel = this.addPanel(new _Stats.Panel(\"CPU\", \"#0f0\", \"#020\"), 1);\n    this.gpuPanel = null;\n    this.samplesLog = samplesLog;\n    this.samplesGraph = samplesGraph;\n    this.precision = precision;\n    this.logsPerSecond = logsPerSecond;\n    if (this.minimal) {\n      this.container.addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        this.showPanel(++this.mode % this.container.children.length);\n      }, false);\n      this.mode = mode;\n      this.showPanel(this.mode);\n    } else {\n      window.addEventListener(\"resize\", () => {\n        this.resizePanel(this.fpsPanel, 0);\n        this.resizePanel(this.msPanel, 1);\n        if (this.gpuPanel) {\n          this.resizePanel(this.gpuPanel, 2);\n        }\n      });\n    }\n  }\n  resizePanel(panel2, offset) {\n    panel2.canvas.style.position = \"absolute\";\n    if (this.minimal) {\n      panel2.canvas.style.display = \"none\";\n    } else {\n      panel2.canvas.style.display = \"block\";\n      if (this.horizontal) {\n        panel2.canvas.style.top = \"0px\";\n        panel2.canvas.style.left = offset * panel2.WIDTH / panel2.PR + \"px\";\n      } else {\n        panel2.canvas.style.left = \"0px\";\n        panel2.canvas.style.top = offset * panel2.HEIGHT / panel2.PR + \"px\";\n      }\n    }\n  }\n  addPanel(panel2, offset) {\n    if (panel2.canvas) {\n      this.container.appendChild(panel2.canvas);\n      this.resizePanel(panel2, offset);\n    }\n    return panel2;\n  }\n  showPanel(id) {\n    for (let i = 0; i < this.container.children.length; i++) {\n      const child = this.container.children[i];\n      child.style.display = i === id ? \"block\" : \"none\";\n    }\n    this.mode = id;\n  }\n  init(canvas) {\n    this.canvasGpu = canvas;\n    if (!this.canvasGpu)\n      return;\n    this.gl = this.canvasGpu.getContext(\"webgl2\");\n    this.ext = this.gl ? this.gl.getExtension(\"EXT_disjoint_timer_query_webgl2\") : null;\n    if (this.ext) {\n      this.gpuPanel = this.addPanel(new _Stats.Panel(\"GPU\", \"#ff0\", \"#220\"), 2);\n    }\n  }\n  begin() {\n    this.beginProfiling(\"cpu-started\");\n    if (!this.gl || !this.ext)\n      return;\n    if (this.query) {\n      const available = this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT_AVAILABLE);\n      this.disjoint = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);\n      if (available && !this.disjoint) {\n        this.ns = this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT);\n        const ms = this.ns * 1e-6;\n        if (available || this.disjoint) {\n          this.gl.deleteQuery(this.query);\n          this.query = null;\n        }\n        if (available) {\n          this.addToAverage(ms, this.averageGpu);\n        }\n      }\n    }\n    if (!this.query) {\n      this.queryCreated = true;\n      this.query = this.gl.createQuery();\n      if (this.query) {\n        this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.query);\n      }\n    }\n  }\n  end() {\n    this.beginTime = this.endInternal();\n    this.endProfiling(\"cpu-started\", \"cpu-finished\", \"cpu-duration\", this.averageCpu);\n    if (!this.gl || !this.ext)\n      return;\n    if (this.queryCreated && this.gl.getQuery(this.ext.TIME_ELAPSED_EXT, this.gl.CURRENT_QUERY)) {\n      this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);\n    }\n  }\n  endInternal() {\n    this.frames++;\n    const time = (performance || Date).now();\n    if (time >= this.prevCpuTime + 1e3 / this.logsPerSecond) {\n      this.updatePanel(this.msPanel, this.averageCpu);\n      this.updatePanel(this.gpuPanel, this.averageGpu);\n      this.prevCpuTime = time;\n    }\n    if (time >= this.prevTime + 1e3) {\n      const fps = this.frames * 1e3 / (time - this.prevTime);\n      this.fpsPanel.update(fps, fps, 100, 100, 0);\n      this.prevTime = time;\n      this.frames = 0;\n    }\n    return time;\n  }\n  addToAverage(value, averageArray) {\n    averageArray.logs.push(value);\n    if (averageArray.logs.length > this.samplesLog) {\n      averageArray.logs.shift();\n    }\n    averageArray.graph.push(value);\n    if (averageArray.graph.length > this.samplesGraph) {\n      averageArray.graph.shift();\n    }\n  }\n  beginProfiling(marker) {\n    if (window.performance) {\n      window.performance.mark(marker);\n    }\n  }\n  endProfiling(startMarker, endMarker, measureName, averageArray) {\n    if (window.performance && endMarker) {\n      window.performance.mark(endMarker);\n      const cpuMeasure = performance.measure(measureName, startMarker, endMarker);\n      this.addToAverage(cpuMeasure.duration, averageArray);\n    }\n  }\n  updatePanel(panel2, averageArray) {\n    if (averageArray.logs.length > 0) {\n      let sumLog = 0;\n      let max = 0.01;\n      for (let i = 0; i < averageArray.logs.length; i++) {\n        sumLog += averageArray.logs[i];\n        if (averageArray.logs[i] > max) {\n          max = averageArray.logs[i];\n        }\n      }\n      let sumGraph = 0;\n      let maxGraph = 0.01;\n      for (let i = 0; i < averageArray.graph.length; i++) {\n        sumGraph += averageArray.graph[i];\n        if (averageArray.graph[i] > maxGraph) {\n          maxGraph = averageArray.graph[i];\n        }\n      }\n      if (panel2) {\n        panel2.update(sumLog / Math.min(averageArray.logs.length, this.samplesLog), sumGraph / Math.min(averageArray.graph.length, this.samplesGraph), max, maxGraph, this.precision);\n      }\n    }\n  }\n};\n_Stats.Panel = panel;\nlet Stats = _Stats;\nmodule.exports = Stats;\n//# sourceMappingURL=main.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHMtZ2wvZGlzdC9tYWluLmNqcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyxpRUFBYTtBQUNuQztBQUNBLGdCQUFnQix1SEFBdUgsSUFBSTtBQUMzSTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsTUFBTSxPQUFPLFlBQVksY0FBYztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1nYWxsZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0YXRzLWdsL2Rpc3QvbWFpbi5janM/YjJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHBhbmVsID0gcmVxdWlyZShcIi4vcGFuZWwuY2pzXCIpO1xuY29uc3QgX1N0YXRzID0gY2xhc3MgX1N0YXRzIHtcbiAgY29uc3RydWN0b3IoeyBsb2dzUGVyU2Vjb25kID0gMjAsIHNhbXBsZXNMb2cgPSAxMDAsIHNhbXBsZXNHcmFwaCA9IDEwLCBwcmVjaXNpb24gPSAyLCBtaW5pbWFsID0gZmFsc2UsIGhvcml6b250YWwgPSB0cnVlLCBtb2RlID0gMCB9ID0ge30pIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwO1wiO1xuICAgIGlmIChtaW5pbWFsKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IFwiY3Vyc29yOnBvaW50ZXJcIjtcbiAgICB9XG4gICAgdGhpcy5jYW52YXNHcHUgPSBudWxsO1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgIHRoaXMubWluaW1hbCA9IG1pbmltYWw7XG4gICAgdGhpcy5iZWdpblRpbWUgPSAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG4gICAgdGhpcy5wcmV2VGltZSA9IHRoaXMuYmVnaW5UaW1lO1xuICAgIHRoaXMucHJldkNwdVRpbWUgPSB0aGlzLmJlZ2luVGltZTtcbiAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgdGhpcy5hdmVyYWdlQ3B1ID0ge1xuICAgICAgbG9nczogW10sXG4gICAgICBncmFwaDogW11cbiAgICB9O1xuICAgIHRoaXMuYXZlcmFnZUdwdSA9IHtcbiAgICAgIGxvZ3M6IFtdLFxuICAgICAgZ3JhcGg6IFtdXG4gICAgfTtcbiAgICB0aGlzLnF1ZXJ5Q3JlYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZnBzUGFuZWwgPSB0aGlzLmFkZFBhbmVsKG5ldyBfU3RhdHMuUGFuZWwoXCJGUFNcIiwgXCIjMGZmXCIsIFwiIzAwMlwiKSwgMCk7XG4gICAgdGhpcy5tc1BhbmVsID0gdGhpcy5hZGRQYW5lbChuZXcgX1N0YXRzLlBhbmVsKFwiQ1BVXCIsIFwiIzBmMFwiLCBcIiMwMjBcIiksIDEpO1xuICAgIHRoaXMuZ3B1UGFuZWwgPSBudWxsO1xuICAgIHRoaXMuc2FtcGxlc0xvZyA9IHNhbXBsZXNMb2c7XG4gICAgdGhpcy5zYW1wbGVzR3JhcGggPSBzYW1wbGVzR3JhcGg7XG4gICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgdGhpcy5sb2dzUGVyU2Vjb25kID0gbG9nc1BlclNlY29uZDtcbiAgICBpZiAodGhpcy5taW5pbWFsKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2hvd1BhbmVsKCsrdGhpcy5tb2RlICUgdGhpcy5jb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICB0aGlzLnNob3dQYW5lbCh0aGlzLm1vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplUGFuZWwodGhpcy5mcHNQYW5lbCwgMCk7XG4gICAgICAgIHRoaXMucmVzaXplUGFuZWwodGhpcy5tc1BhbmVsLCAxKTtcbiAgICAgICAgaWYgKHRoaXMuZ3B1UGFuZWwpIHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZVBhbmVsKHRoaXMuZ3B1UGFuZWwsIDIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmVzaXplUGFuZWwocGFuZWwyLCBvZmZzZXQpIHtcbiAgICBwYW5lbDIuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGlmICh0aGlzLm1pbmltYWwpIHtcbiAgICAgIHBhbmVsMi5jYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbDIuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBpZiAodGhpcy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHBhbmVsMi5jYW52YXMuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgcGFuZWwyLmNhbnZhcy5zdHlsZS5sZWZ0ID0gb2Zmc2V0ICogcGFuZWwyLldJRFRIIC8gcGFuZWwyLlBSICsgXCJweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwyLmNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgcGFuZWwyLmNhbnZhcy5zdHlsZS50b3AgPSBvZmZzZXQgKiBwYW5lbDIuSEVJR0hUIC8gcGFuZWwyLlBSICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGRQYW5lbChwYW5lbDIsIG9mZnNldCkge1xuICAgIGlmIChwYW5lbDIuY2FudmFzKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5lbDIuY2FudmFzKTtcbiAgICAgIHRoaXMucmVzaXplUGFuZWwocGFuZWwyLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFuZWwyO1xuICB9XG4gIHNob3dQYW5lbChpZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gaSA9PT0gaWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICB9XG4gICAgdGhpcy5tb2RlID0gaWQ7XG4gIH1cbiAgaW5pdChjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhc0dwdSA9IGNhbnZhcztcbiAgICBpZiAoIXRoaXMuY2FudmFzR3B1KVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhc0dwdS5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuICAgIHRoaXMuZXh0ID0gdGhpcy5nbCA/IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMlwiKSA6IG51bGw7XG4gICAgaWYgKHRoaXMuZXh0KSB7XG4gICAgICB0aGlzLmdwdVBhbmVsID0gdGhpcy5hZGRQYW5lbChuZXcgX1N0YXRzLlBhbmVsKFwiR1BVXCIsIFwiI2ZmMFwiLCBcIiMyMjBcIiksIDIpO1xuICAgIH1cbiAgfVxuICBiZWdpbigpIHtcbiAgICB0aGlzLmJlZ2luUHJvZmlsaW5nKFwiY3B1LXN0YXJ0ZWRcIik7XG4gICAgaWYgKCF0aGlzLmdsIHx8ICF0aGlzLmV4dClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5nbC5nZXRRdWVyeVBhcmFtZXRlcih0aGlzLnF1ZXJ5LCB0aGlzLmdsLlFVRVJZX1JFU1VMVF9BVkFJTEFCTEUpO1xuICAgICAgdGhpcy5kaXNqb2ludCA9IHRoaXMuZ2wuZ2V0UGFyYW1ldGVyKHRoaXMuZXh0LkdQVV9ESVNKT0lOVF9FWFQpO1xuICAgICAgaWYgKGF2YWlsYWJsZSAmJiAhdGhpcy5kaXNqb2ludCkge1xuICAgICAgICB0aGlzLm5zID0gdGhpcy5nbC5nZXRRdWVyeVBhcmFtZXRlcih0aGlzLnF1ZXJ5LCB0aGlzLmdsLlFVRVJZX1JFU1VMVCk7XG4gICAgICAgIGNvbnN0IG1zID0gdGhpcy5ucyAqIDFlLTY7XG4gICAgICAgIGlmIChhdmFpbGFibGUgfHwgdGhpcy5kaXNqb2ludCkge1xuICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlUXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICAgIHRoaXMuYWRkVG9BdmVyYWdlKG1zLCB0aGlzLmF2ZXJhZ2VHcHUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5xdWVyeSkge1xuICAgICAgdGhpcy5xdWVyeUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZ2wuY3JlYXRlUXVlcnkoKTtcbiAgICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuZ2wuYmVnaW5RdWVyeSh0aGlzLmV4dC5USU1FX0VMQVBTRURfRVhULCB0aGlzLnF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZW5kKCkge1xuICAgIHRoaXMuYmVnaW5UaW1lID0gdGhpcy5lbmRJbnRlcm5hbCgpO1xuICAgIHRoaXMuZW5kUHJvZmlsaW5nKFwiY3B1LXN0YXJ0ZWRcIiwgXCJjcHUtZmluaXNoZWRcIiwgXCJjcHUtZHVyYXRpb25cIiwgdGhpcy5hdmVyYWdlQ3B1KTtcbiAgICBpZiAoIXRoaXMuZ2wgfHwgIXRoaXMuZXh0KVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLnF1ZXJ5Q3JlYXRlZCAmJiB0aGlzLmdsLmdldFF1ZXJ5KHRoaXMuZXh0LlRJTUVfRUxBUFNFRF9FWFQsIHRoaXMuZ2wuQ1VSUkVOVF9RVUVSWSkpIHtcbiAgICAgIHRoaXMuZ2wuZW5kUXVlcnkodGhpcy5leHQuVElNRV9FTEFQU0VEX0VYVCk7XG4gICAgfVxuICB9XG4gIGVuZEludGVybmFsKCkge1xuICAgIHRoaXMuZnJhbWVzKys7XG4gICAgY29uc3QgdGltZSA9IChwZXJmb3JtYW5jZSB8fCBEYXRlKS5ub3coKTtcbiAgICBpZiAodGltZSA+PSB0aGlzLnByZXZDcHVUaW1lICsgMWUzIC8gdGhpcy5sb2dzUGVyU2Vjb25kKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhbmVsKHRoaXMubXNQYW5lbCwgdGhpcy5hdmVyYWdlQ3B1KTtcbiAgICAgIHRoaXMudXBkYXRlUGFuZWwodGhpcy5ncHVQYW5lbCwgdGhpcy5hdmVyYWdlR3B1KTtcbiAgICAgIHRoaXMucHJldkNwdVRpbWUgPSB0aW1lO1xuICAgIH1cbiAgICBpZiAodGltZSA+PSB0aGlzLnByZXZUaW1lICsgMWUzKSB7XG4gICAgICBjb25zdCBmcHMgPSB0aGlzLmZyYW1lcyAqIDFlMyAvICh0aW1lIC0gdGhpcy5wcmV2VGltZSk7XG4gICAgICB0aGlzLmZwc1BhbmVsLnVwZGF0ZShmcHMsIGZwcywgMTAwLCAxMDAsIDApO1xuICAgICAgdGhpcy5wcmV2VGltZSA9IHRpbWU7XG4gICAgICB0aGlzLmZyYW1lcyA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0aW1lO1xuICB9XG4gIGFkZFRvQXZlcmFnZSh2YWx1ZSwgYXZlcmFnZUFycmF5KSB7XG4gICAgYXZlcmFnZUFycmF5LmxvZ3MucHVzaCh2YWx1ZSk7XG4gICAgaWYgKGF2ZXJhZ2VBcnJheS5sb2dzLmxlbmd0aCA+IHRoaXMuc2FtcGxlc0xvZykge1xuICAgICAgYXZlcmFnZUFycmF5LmxvZ3Muc2hpZnQoKTtcbiAgICB9XG4gICAgYXZlcmFnZUFycmF5LmdyYXBoLnB1c2godmFsdWUpO1xuICAgIGlmIChhdmVyYWdlQXJyYXkuZ3JhcGgubGVuZ3RoID4gdGhpcy5zYW1wbGVzR3JhcGgpIHtcbiAgICAgIGF2ZXJhZ2VBcnJheS5ncmFwaC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuICBiZWdpblByb2ZpbGluZyhtYXJrZXIpIHtcbiAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UubWFyayhtYXJrZXIpO1xuICAgIH1cbiAgfVxuICBlbmRQcm9maWxpbmcoc3RhcnRNYXJrZXIsIGVuZE1hcmtlciwgbWVhc3VyZU5hbWUsIGF2ZXJhZ2VBcnJheSkge1xuICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgZW5kTWFya2VyKSB7XG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UubWFyayhlbmRNYXJrZXIpO1xuICAgICAgY29uc3QgY3B1TWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUobWVhc3VyZU5hbWUsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuICAgICAgdGhpcy5hZGRUb0F2ZXJhZ2UoY3B1TWVhc3VyZS5kdXJhdGlvbiwgYXZlcmFnZUFycmF5KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlUGFuZWwocGFuZWwyLCBhdmVyYWdlQXJyYXkpIHtcbiAgICBpZiAoYXZlcmFnZUFycmF5LmxvZ3MubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHN1bUxvZyA9IDA7XG4gICAgICBsZXQgbWF4ID0gMC4wMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZlcmFnZUFycmF5LmxvZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3VtTG9nICs9IGF2ZXJhZ2VBcnJheS5sb2dzW2ldO1xuICAgICAgICBpZiAoYXZlcmFnZUFycmF5LmxvZ3NbaV0gPiBtYXgpIHtcbiAgICAgICAgICBtYXggPSBhdmVyYWdlQXJyYXkubG9nc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHN1bUdyYXBoID0gMDtcbiAgICAgIGxldCBtYXhHcmFwaCA9IDAuMDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2ZXJhZ2VBcnJheS5ncmFwaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdW1HcmFwaCArPSBhdmVyYWdlQXJyYXkuZ3JhcGhbaV07XG4gICAgICAgIGlmIChhdmVyYWdlQXJyYXkuZ3JhcGhbaV0gPiBtYXhHcmFwaCkge1xuICAgICAgICAgIG1heEdyYXBoID0gYXZlcmFnZUFycmF5LmdyYXBoW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFuZWwyKSB7XG4gICAgICAgIHBhbmVsMi51cGRhdGUoc3VtTG9nIC8gTWF0aC5taW4oYXZlcmFnZUFycmF5LmxvZ3MubGVuZ3RoLCB0aGlzLnNhbXBsZXNMb2cpLCBzdW1HcmFwaCAvIE1hdGgubWluKGF2ZXJhZ2VBcnJheS5ncmFwaC5sZW5ndGgsIHRoaXMuc2FtcGxlc0dyYXBoKSwgbWF4LCBtYXhHcmFwaCwgdGhpcy5wcmVjaXNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbl9TdGF0cy5QYW5lbCA9IHBhbmVsO1xubGV0IFN0YXRzID0gX1N0YXRzO1xubW9kdWxlLmV4cG9ydHMgPSBTdGF0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stats-gl/dist/main.cjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/stats-gl/dist/panel.cjs":
/*!**********************************************!*\
  !*** ./node_modules/stats-gl/dist/panel.cjs ***!
  \**********************************************/
/***/ ((module) => {

eval("\nclass Panel {\n  constructor(name, fg, bg) {\n    this.name = name;\n    this.fg = fg;\n    this.bg = bg;\n    this.PR = Math.round(window.devicePixelRatio || 1);\n    this.WIDTH = 90 * this.PR;\n    this.HEIGHT = 48 * this.PR;\n    this.TEXT_X = 3 * this.PR;\n    this.TEXT_Y = 2 * this.PR;\n    this.GRAPH_X = 3 * this.PR;\n    this.GRAPH_Y = 15 * this.PR;\n    this.GRAPH_WIDTH = 84 * this.PR;\n    this.GRAPH_HEIGHT = 30 * this.PR;\n    this.canvas = document.createElement(\"canvas\");\n    this.canvas.width = 90 * this.PR;\n    this.canvas.height = 48 * this.PR;\n    this.canvas.style.width = \"90px\";\n    this.canvas.style.position = \"absolute\";\n    this.canvas.style.height = \"48px\";\n    this.canvas.style.cssText = \"width:90px;height:48px\";\n    this.context = this.canvas.getContext(\"2d\");\n    if (this.context) {\n      this.context.font = \"bold \" + 9 * this.PR + \"px Helvetica,Arial,sans-serif\";\n      this.context.textBaseline = \"top\";\n      this.context.fillStyle = this.bg;\n      this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);\n      this.context.fillStyle = this.fg;\n      this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y);\n      this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);\n      this.context.fillStyle = this.bg;\n      this.context.globalAlpha = 0.9;\n      this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);\n    }\n  }\n  update(value, valueGraph, maxValue, maxGraph, decimals = 0) {\n    let min = Infinity, max = 0;\n    if (!this.context)\n      return;\n    min = Math.min(min, value);\n    max = Math.max(maxValue, value);\n    maxGraph = Math.max(maxGraph, valueGraph);\n    this.context.fillStyle = this.bg;\n    this.context.globalAlpha = 1;\n    this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);\n    this.context.fillStyle = this.fg;\n    this.context.fillText(value.toFixed(decimals) + \" \" + this.name + \" (\" + min.toFixed(decimals) + \"-\" + parseFloat(max.toFixed(decimals)) + \")\", this.TEXT_X, this.TEXT_Y);\n    this.context.drawImage(this.canvas, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT);\n    this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT);\n    this.context.fillStyle = this.bg;\n    this.context.globalAlpha = 0.9;\n    this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, (1 - valueGraph / maxGraph) * this.GRAPH_HEIGHT);\n  }\n}\n;\nmodule.exports = Panel;\n//# sourceMappingURL=panel.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHMtZ2wvZGlzdC9wYW5lbC5janMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1nYWxsZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0YXRzLWdsL2Rpc3QvcGFuZWwuY2pzP2EwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jbGFzcyBQYW5lbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGZnLCBiZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5mZyA9IGZnO1xuICAgIHRoaXMuYmcgPSBiZztcbiAgICB0aGlzLlBSID0gTWF0aC5yb3VuZCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLldJRFRIID0gOTAgKiB0aGlzLlBSO1xuICAgIHRoaXMuSEVJR0hUID0gNDggKiB0aGlzLlBSO1xuICAgIHRoaXMuVEVYVF9YID0gMyAqIHRoaXMuUFI7XG4gICAgdGhpcy5URVhUX1kgPSAyICogdGhpcy5QUjtcbiAgICB0aGlzLkdSQVBIX1ggPSAzICogdGhpcy5QUjtcbiAgICB0aGlzLkdSQVBIX1kgPSAxNSAqIHRoaXMuUFI7XG4gICAgdGhpcy5HUkFQSF9XSURUSCA9IDg0ICogdGhpcy5QUjtcbiAgICB0aGlzLkdSQVBIX0hFSUdIVCA9IDMwICogdGhpcy5QUjtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA5MCAqIHRoaXMuUFI7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNDggKiB0aGlzLlBSO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gXCI5MHB4XCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCI0OHB4XCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6OTBweDtoZWlnaHQ6NDhweFwiO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiYm9sZCBcIiArIDkgKiB0aGlzLlBSICsgXCJweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZlwiO1xuICAgICAgdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iZztcbiAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLldJRFRILCB0aGlzLkhFSUdIVCk7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5mZztcbiAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0aGlzLm5hbWUsIHRoaXMuVEVYVF9YLCB0aGlzLlRFWFRfWSk7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5HUkFQSF9YLCB0aGlzLkdSQVBIX1ksIHRoaXMuR1JBUEhfV0lEVEgsIHRoaXMuR1JBUEhfSEVJR0hUKTtcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJnO1xuICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuR1JBUEhfWCwgdGhpcy5HUkFQSF9ZLCB0aGlzLkdSQVBIX1dJRFRILCB0aGlzLkdSQVBIX0hFSUdIVCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZSh2YWx1ZSwgdmFsdWVHcmFwaCwgbWF4VmFsdWUsIG1heEdyYXBoLCBkZWNpbWFscyA9IDApIHtcbiAgICBsZXQgbWluID0gSW5maW5pdHksIG1heCA9IDA7XG4gICAgaWYgKCF0aGlzLmNvbnRleHQpXG4gICAgICByZXR1cm47XG4gICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSk7XG4gICAgbWF4ID0gTWF0aC5tYXgobWF4VmFsdWUsIHZhbHVlKTtcbiAgICBtYXhHcmFwaCA9IE1hdGgubWF4KG1heEdyYXBoLCB2YWx1ZUdyYXBoKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iZztcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLldJRFRILCB0aGlzLkdSQVBIX1kpO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZnO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh2YWx1ZS50b0ZpeGVkKGRlY2ltYWxzKSArIFwiIFwiICsgdGhpcy5uYW1lICsgXCIgKFwiICsgbWluLnRvRml4ZWQoZGVjaW1hbHMpICsgXCItXCIgKyBwYXJzZUZsb2F0KG1heC50b0ZpeGVkKGRlY2ltYWxzKSkgKyBcIilcIiwgdGhpcy5URVhUX1gsIHRoaXMuVEVYVF9ZKTtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB0aGlzLkdSQVBIX1ggKyB0aGlzLlBSLCB0aGlzLkdSQVBIX1ksIHRoaXMuR1JBUEhfV0lEVEggLSB0aGlzLlBSLCB0aGlzLkdSQVBIX0hFSUdIVCwgdGhpcy5HUkFQSF9YLCB0aGlzLkdSQVBIX1ksIHRoaXMuR1JBUEhfV0lEVEggLSB0aGlzLlBSLCB0aGlzLkdSQVBIX0hFSUdIVCk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuR1JBUEhfWCArIHRoaXMuR1JBUEhfV0lEVEggLSB0aGlzLlBSLCB0aGlzLkdSQVBIX1ksIHRoaXMuUFIsIHRoaXMuR1JBUEhfSEVJR0hUKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iZztcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuR1JBUEhfWCArIHRoaXMuR1JBUEhfV0lEVEggLSB0aGlzLlBSLCB0aGlzLkdSQVBIX1ksIHRoaXMuUFIsICgxIC0gdmFsdWVHcmFwaCAvIG1heEdyYXBoKSAqIHRoaXMuR1JBUEhfSEVJR0hUKTtcbiAgfVxufVxuO1xubW9kdWxlLmV4cG9ydHMgPSBQYW5lbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhbmVsLmNqcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stats-gl/dist/panel.cjs\n");

/***/ })

};
;