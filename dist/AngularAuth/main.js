(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\stepapp\stepapp\src\main.ts */"zUnb");


/***/ }),

/***/ "0EBP":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SubjectComponent {
    constructor(router) {
        this.router = router;
        this.star1 = "assets/subject/star.png";
        this.body = "assets/subject/Container.png";
        this.midcircle = "assets/subject/midimg.png";
    }
    ngOnInit() {
    }
    // subBtn(event:any) {
    //   console.log(event);
    subBtn() {
        this.router.navigate(['/lastpage']);
        console.log('active');
    }
    mathbtn() {
        alert("chapter 9 learn maths is not available");
    }
}
SubjectComponent.ɵfac = function SubjectComponent_Factory(t) { return new (t || SubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SubjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectComponent, selectors: [["app-subject"]], decls: 46, vars: 3, consts: [[1, "background1"], [1, "UpperHalfContainer"], [1, "container"], [1, "rect"], [1, "mid"], [3, "src"], [1, "text"], [1, "cursor"], [1, "LowerHalfContainer"], [1, "SubjectScience", 3, "click"], [1, "Learn"], [1, "ScienceSmallText"], [1, "SciencechapterName"], [1, "FreeDemo", 2, "color", "black"], [1, "SubjectMath", 3, "click"], [1, "FreeDemo"], [1, "Bottom"], [1, "BottomText", 2, "color", "aliceblue"]], template: function SubjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Free Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "play the free demo chapters to understand how your speed and accurancy will make you win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectComponent_Template_button_click_13_listener() { return ctx.subBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Learn Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Magnetism");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+6 more Chapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8 Chapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 1FreeDemo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectComponent_Template_button_click_29_listener() { return ctx.mathbtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Learn Maths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Playing with Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Number System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+7 more Chapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "9 Chapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 1FreeDemo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "All Right Reserved | STEPAPP 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.midcircle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".background1[_ngcontent-%COMP%] {\n  background: #11306a;\n  height: 820px;\n}\n\n.UpperHalfContainer[_ngcontent-%COMP%] {\n  \n  background-color: #153168;\n  \n  align-items: center;\n  table-layout: fixed;\n}\n\n.container[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100px;\n  display: block;\n  top: 20%;\n  left: 40%;\n}\n\n.rect[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 500px;\n  height: 300px;\n  align-items: center;\n  background: white;\n  margin-left: 400px;\n  margin-right: 50px;\n  border-radius: 10px;\n  margin-top: 30px;\n  padding-top: 4%;\n}\n\n.mid[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 119px;\n  height: 60px;\n  top: 10%;\n  left: 40%;\n  table-layout: fixed;\n  mix-blend-mode: normal;\n  border-radius: 31px;\n  font-style: normal;\n  font-size: 15px;\n  line-height: 159.7%;\n  color: #000000;\n  margin-bottom: 15%;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  \n  height: 276px;\n  left: 30%;\n  background: #153168;\n  \n  box-shadow: 0px 12px 35px #FF8A48 233, 231, 226, 0.2;\n  border-radius: 10px;\n  align-items: center;\n  text-align: center;\n}\n\n.LowerHalfContainer[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  padding-bottom: 5%;\n  background-color: #153168;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.SubjectScience[_ngcontent-%COMP%] {\n  position: relative;\n  width: 430px;\n  height: 270px;\n  background: #FF8A48;\n  opacity: 0.95;\n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 10px;\n  padding-left: 4%;\n  padding-top: 4%;\n}\n\n.SubjectMath[_ngcontent-%COMP%] {\n  position: relative;\n  width: 430px;\n  height: 270px;\n  background: #1BB8AE;\n  opacity: 0.95;\n  \n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 10px;\n  padding-left: 4%;\n  padding-top: 4%;\n}\n\n.Learn[_ngcontent-%COMP%] {\n  width: 174px;\n  font-family: Proxima Nova;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 28px;\n  text-align: left;\n  color: #FFFFFF;\n}\n\n.SciencechapterName[_ngcontent-%COMP%] {\n  \n  font-family: Proxima Nova;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  \n  \n  text-align: left;\n  color: #FFFFFF;\n}\n\n.FreeDemo[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 33px;\n  top: 80%;\n  left: 70%;\n  background: white;\n  mix-blend-mode: lighten;\n  box-shadow: 0px 4px 4px #153168 0, 0, 0, 0.25;\n  border-radius: 31px;\n}\n\n.Bottom[_ngcontent-%COMP%] {\n  background-color: #0D2249;\n}\n\n.BottomText[_ngcontent-%COMP%] {\n  line-height: 34.62px;\n  margin-left: 800px;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YmplY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNDLGFBQUE7QUFDTDs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHQTs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUNGLGtCQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBRUEsb0RBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIQTs7QUFPQTtFQUNHLGVBQUE7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0FBTEo7O0FBUUE7RUFDQSxrQkFBQTtFQUNJLFlBQUE7RUFDSixhQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQVBBOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0osYUFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFFQSxnREFBQTtFQUNBLG1CQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0FBWEE7O0FBY0E7RUFDSSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsY0FBQTtBQWRKOztBQWlCQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBR0EsY0FBQTtBQWxCQTs7QUFzQkE7RUFDSSxrQkFBQTtFQUVKLFlBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBckJBOztBQXdCQTtFQUNJLHlCQUFBO0FBckJKOztBQXVCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBc0JBO0VBQ0ksaUJBQUE7QUFuQkoiLCJmaWxlIjoic3ViamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kMXtcclxuICAgIGJhY2tncm91bmQ6IGhzbCgyMTksIDczJSwgMjQlKTtcclxuICAgICBoZWlnaHQ6IDgyMHB4O1xyXG5cclxufVxyXG4uVXBwZXJIYWxmQ29udGFpbmVye1xyXG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTMxNjg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDoyMCU7XHJcbiAgICBsZWZ0OjQwJVxyXG59XHJcbi5yZWN0e1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiA1MDBweDtcclxuaGVpZ2h0OiAzMDBweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZDp3aGl0ZTtcclxubWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm1hcmdpbi10b3A6IDMwcHg7XHJcbnBhZGRpbmctdG9wOiA0JTtcclxuXHJcblxyXG5cclxuIH0gICBcclxuICAubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTlweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTU5LjclO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7ICBcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JSA7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmN1cnNvcntcclxuLyogd2lkdGg6IDYwNHB4OyAqL1xyXG5oZWlnaHQ6IDI3NnB4O1xyXG5sZWZ0OiAzMCU7XHJcbmJhY2tncm91bmQ6ICMxNTMxNjg7XHJcbi8qIDMgKi9cclxuXHJcbmJveC1zaGFkb3c6IDBweCAxMnB4IDM1cHggICNGRjhBNDgoMjMzLCAyMzEsIDIyNiwgMC4yKTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLkxvd2VySGFsZkNvbnRhaW5lcntcclxuICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MzE2ODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5TdWJqZWN0U2NpZW5jZXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG5oZWlnaHQ6IDI3MHB4O1xyXG5cclxuYmFja2dyb3VuZDogI0ZGOEE0ODtcclxub3BhY2l0eTogMC45NTtcclxuYm94LXNoYWRvdzogMHB4IDEycHggMzVweCByZ2JhKDE2MCwgMTIxLCAwLCAwLjIpO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxucGFkZGluZy1sZWZ0OiA0JTtcclxucGFkZGluZy10b3A6IDQlO1xyXG59XHJcblxyXG4uU3ViamVjdE1hdGh7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbmhlaWdodDogMjcwcHg7XHJcblxyXG5iYWNrZ3JvdW5kOiAjMUJCOEFFO1xyXG5vcGFjaXR5OiAwLjk1O1xyXG4vKiAzICovXHJcblxyXG5ib3gtc2hhZG93OiAwcHggMTJweCAzNXB4IHJnYmEoMTYwLCAxMjEsIDAsIDAuMik7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG5cclxucGFkZGluZy1sZWZ0OiA0JTtcclxucGFkZGluZy10b3A6IDQlXHJcbn1cclxuXHJcbi5MZWFybntcclxuICAgIHdpZHRoOiAxNzRweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEgTm92YTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uU2NpZW5jZWNoYXB0ZXJOYW1le1xyXG4vKiB3aWR0aDogMTIycHg7ICovXHJcblxyXG5mb250LWZhbWlseTogUHJveGltYSBOb3ZhO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbi8qIGxpbmUtaGVpZ2h0OiAxNTkuNyU7ICovXHJcbi8qIG9yIDI0cHggKi9cclxuXHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG5cclxuY29sb3I6ICNGRkZGRkY7XHJcblxyXG59XHJcblxyXG4uRnJlZURlbW97XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gd2lkdGg6IDExN3B4O1xyXG5oZWlnaHQ6IDMzcHg7XHJcblxyXG50b3A6ODAlO1xyXG5sZWZ0OjcwJTtcclxuYmFja2dyb3VuZDp3aGl0ZTtcclxubWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XHJcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4ICAjMTUzMTY4KDAsIDAsIDAsIDAuMjUpO1xyXG5ib3JkZXItcmFkaXVzOiAzMXB4O1xyXG59XHJcblxyXG4uQm90dG9te1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMjI0OTtcclxufVxyXG4uQm90dG9tVGV4dHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNC42MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbn0gXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F+dP":
/*!********************************************!*\
  !*** ./src/app/school/school.component.ts ***!
  \********************************************/
/*! exports provided: SchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolComponent", function() { return SchoolComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SchoolComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", school_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](school_r2.name);
} }
function SchoolComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " School Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SchoolComponent {
    constructor(router) {
        this.router = router;
        this.logo = "assets/image/image 2.png";
        this.ellips = "assets/sc2page/Ellips.png";
        this.bigcomma = "assets/school/comma.png";
        this.lastellip = "assets/school/bottomellips.png";
        this.bellips = "assets/scpage/cardellips.png";
        this.schools = [
            { id: 1, name: "DYPCET-Kop" },
            { id: 2, name: "KIT" },
            { id: 3, name: "DKIT" },
            { id: 4, name: "Bharti-Vidyapeeth kop" },
            { id: 5, name: "RIT" }
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    get f() {
        return this.form.controls;
    }
    submit() {
        console.log(this.form.value);
    }
    navigate() {
        this.router.navigate(['/login']);
        console.log('active');
    }
}
SchoolComponent.ɵfac = function SchoolComponent_Factory(t) { return new (t || SchoolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SchoolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SchoolComponent, selectors: [["app-school"]], decls: 102, vars: 21, consts: [[1, "topOrange"], [1, "topOrangeText1"], [1, "topOrangeText2"], [1, "sectopBlue"], ["alt", "centered image", 3, "src"], [1, "selectschoolText"], ["font", "Proxima Nova", 3, "formGroup"], ["formControlName", "school", 1, "form-control"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], ["font", "Proxima Nova", 1, "proceed", 2, "color", "aliceblue", 3, "disabled", "click"], [1, "midWhite"], [1, "midWhiteTop"], [3, "src"], [1, "midWhitemid"], [1, "midWhitemidone"], [1, "midWhitemidtwo"], [1, "midWhitebottom"], [1, "bigtext"], [1, "smalltext"], [1, "cards"], [1, "card1"], [1, "card2"], [1, "card3"], [1, "card4"], [1, "bottomOrange"], [1, "schoolbottomText"], [1, "Bottom"], [1, "BottomText", 2, "color", "aliceblue"], [1, "alert", "alert-danger"]], template: function SchoolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Students From Class 5th to 11th.Here is your Dream Opportunity! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Play, Learn & Build Your Own Future");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Select School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "School Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SchoolComponent_option_14_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SchoolComponent_div_15_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SchoolComponent_Template_button_click_17_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Proceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Adaptive Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Learning is made fun and easy for kids through STEPapp\u2019s engaging gamified platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Mapped to school Curriculum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "STEPapp Concepts is mapped to the curriculum of school boards (CBSE, ICSE). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Rewards & Scholarships");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "STEPapp Scholarships will award 10,000 students of EACH grade (5th - 11th)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " What Students Say ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist,. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Without a doubt the biggest impact of using \u2018Evidence for Learning\u2019 is on staff time and organisation of information. The product\u2019s price in comparison to hours saved represents great value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Without a doubt the biggest impact of using \u2018Evidence for Learning\u2019 is on staff time and organisation of information. The product\u2019s price in comparison to hours saved represents great value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Without a doubt the biggest impact of using \u2018Evidence for Learning\u2019 is on staff time and organisation of information. The product\u2019s price in comparison to hours saved represents great value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Without a doubt the biggest impact of using \u2018Evidence for Learning\u2019 is on staff time and organisation of information. The product\u2019s price in comparison to hours saved represents great value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "5,679");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Registered Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "2,679");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Student has been helped to achieve their dreams");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "10,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "More than 10,000 people visits our site monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "#10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Ranked among the top 10 growing online learning startups in West Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "All Right Reserved | STEPAPP 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.schools);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.school.touched && ctx.f.school.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.ellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.ellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.ellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bigcomma, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bigcomma, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bigcomma, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bigcomma, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.bellips, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.lastellip, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.lastellip, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.lastellip, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.lastellip, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".form-control[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 50px;\n  margin-bottom: 10px;\n  background: #FFFFFF;\n  border: 1px solid #EFEFEF;\n  border-radius: 100px;\n  margin-top: 20px;\n}\n\n.topOrange[_ngcontent-%COMP%] {\n  top: 59px;\n  height: 241px;\n  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);\n}\n\n.topOrangeText1[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 81.57px;\n  padding-left: 183px;\n  padding-top: 50.65px;\n  font-style: italic;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 27px;\n  color: #FFF7DF;\n}\n\n.topOrangeText2[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 125.3px;\n  padding-left: 183px;\n  padding-top: 50.85px;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 44px;\n  line-height: 118.3%;\n  color: #FFF7DF;\n}\n\n.sectopBlue[_ngcontent-%COMP%] {\n  height: 450px;\n  background: #0C2657;\n  justify-content: space-evenly;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.proceed[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 50px;\n  top: 10%;\n  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);\n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 100px;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 50px;\n  background: #FFFFFF;\n  border: 1px solid #EFEFEF;\n  border-radius: 100px;\n}\n\n.selectschoolText[_ngcontent-%COMP%] {\n  font-style: Proxima Nova;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 24px;\n  color: #D8D8D8;\n}\n\n.midWhite[_ngcontent-%COMP%] {\n  height: 600px;\n}\n\n.midWhiteTop[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-top: 3%;\n  \n}\n\n.midWhitemid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 40%;\n}\n\n.midWhitemidone[_ngcontent-%COMP%] {\n  background-color: #FF9201;\n  width: 15%;\n  height: 1%;\n  border-radius: 100px;\n}\n\n.midWhitemidtwo[_ngcontent-%COMP%] {\n  background-color: #0C2657;\n  width: 15%;\n  height: 1%;\n  border-radius: 100px;\n}\n\n.midWhitebottom[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.bigtext[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 158.34%;\n  color: #FFC000;\n  text-align: center;\n}\n\n.smalltext[_ngcontent-%COMP%] {\n  height: 53px;\n  font-family: Proxima Nova;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 175.78%;\n  text-align: center;\n  color: #5C5C5C;\n  margin-right: 100px;\n}\n\n.cards[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0%;\n  height: 400px;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  display: flex;\n  flex-direction: inherit;\n}\n\n.card1[_ngcontent-%COMP%] {\n  padding: 2%;\n  background: #FFFFFF;\n  border-radius: 5px;\n}\n\n.textcard1[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 280px;\n  left: 2px;\n}\n\n.card2[_ngcontent-%COMP%] {\n  padding: 2%;\n  background: #FFFFFF;\n  border: 1px solid #EFEFEF;\n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 5px;\n}\n\n.card3[_ngcontent-%COMP%] {\n  padding: 2%;\n  background: #FFFFFF;\n  border-radius: 5px;\n}\n\n.card4[_ngcontent-%COMP%] {\n  padding: 2%;\n  background: #FFFFFF;\n  \n  border-radius: 5px;\n}\n\n.bottomOrange[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 5%;\n  margin-top: 5%;\n  background: #FF9201;\n}\n\n.schoolbottomText[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 182.7%;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.BottomText[_ngcontent-%COMP%] {\n  width: 345px;\n  height: 20px;\n  top: 2040px;\n  font: Proxima Nova;\n  align-content: center;\n  line-height: 14.62px;\n  margin-left: 800px;\n}\n\n.Bottom[_ngcontent-%COMP%] {\n  background-color: #0C2657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjaG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFnQixZQUFBO0VBQ2QsWUFBQTtFQUNBLG1CQUFBO0VBSUYsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esb0VBQUE7QUFISjs7QUFLRTtFQUNFLFlBQUE7RUFDRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBSkY7O0FBUUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFFRixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBR0EsY0FBQTtBQVJGOztBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBR0EsNkJBQUE7RUFDRSxtQkFBQTtFQUVGLGFBQUE7RUFDRSxzQkFBQTtBQVhOOztBQWVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esb0VBQUE7RUFFRixnREFBQTtFQUNBLG9CQUFBO0FBYko7O0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFHQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFmTjs7QUFrQkU7RUFHRSx3QkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBR0EsY0FBQTtBQW5CRjs7QUFxQkU7RUFDRSxhQUFBO0FBbEJKOztBQW9CRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFqQko7O0FBd0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFyQko7O0FBeUJFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBdEJKOztBQTBCRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQXZCSjs7QUE0QkU7RUFDRSxtQkFBQTtBQXpCSjs7QUE2QkU7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0FBN0JGOztBQWdDRTtFQUdBLFlBQUE7RUFHQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWpDRjs7QUFxQ0U7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBR0UsVUFBQTtFQUNBLFNBQUE7RUFFQSxtQkFBQTtFQUVGLGFBQUE7RUFDRSx1QkFBQTtBQXZDTjs7QUEyQ0U7RUFHRSxXQUFBO0VBRUEsbUJBQUE7RUFFQSxrQkFBQTtBQTVDSjs7QUFpREU7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUEvQ0Y7O0FBb0RFO0VBRUUsV0FBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxnREFBQTtFQUNBLGtCQUFBO0FBcERKOztBQXVERTtFQUdFLFdBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0FBeERKOztBQTBERTtFQUVFLFdBQUE7RUFFQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUF6REo7O0FBNERFO0VBQ0csYUFBQTtFQUNELDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUExREo7O0FBNkRFO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUdBLGtCQUFBO0VBRUEsY0FBQTtBQTlERjs7QUFpRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQTlERjs7QUFnRUE7RUFDRSx5QkFBQTtBQTdERiIsImZpbGUiOiJzY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZm9ybS1jb250cm9seyAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4OyAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgXHJcblxyXG4gIH1cclxuICAudG9wT3Jhbmdle1xyXG4gICAgdG9wOiA1OXB4O1xyXG4gICAgaGVpZ2h0OiAyNDFweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNTMuNThkZWcsICNGRkMwMDAgMS41NSUsICNGRjhBMDAgOTUuOCUpO1xyXG4gIH1cclxuICAudG9wT3JhbmdlVGV4dDF7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA4MS41N3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTgzcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwLjY1cHg7XHJcbiAgXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIFxyXG4gIGNvbG9yOiAjRkZGN0RGO1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICAudG9wT3JhbmdlVGV4dDJ7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyNS4zcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4M3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwLjg1cHg7XHJcbiAgXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMTguMyU7XHJcbiAgXHJcbiAgXHJcbiAgY29sb3I6ICNGRkY3REY7XHJcbiAgXHJcbiAgfVxyXG4gIC5zZWN0b3BCbHVle1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwQzI2NTc7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xyXG4gIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAgIC5wcm9jZWVke1xyXG4gICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgdG9wOjEwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1My41OGRlZywgI0ZGQzAwMCAxLjU1JSwgI0ZGOEEwMCA5NS44JSk7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDM1cHggcmdiYSgxNjAsIDEyMSwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3due1xyXG4gICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICBcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgLnNlbGVjdHNjaG9vbFRleHR7XHJcbiAgIFxyXG4gIFxyXG4gICAgZm9udC1zdHlsZTogUHJveGltYSBOb3ZhO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIFxyXG4gIFxyXG4gIGNvbG9yOiAjRDhEOEQ4O1xyXG4gIH1cclxuICAubWlkV2hpdGV7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxuICAubWlkV2hpdGVUb3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLm1pZFdoaXRlbWlke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1pZFdoaXRlbWlkb25le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTIwMTtcclxuICAgIHdpZHRoOjE1JTtcclxuICAgIGhlaWdodDogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1pZFdoaXRlbWlkdHdve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMjY1NztcclxuICAgIHdpZHRoOjE1JTtcclxuICAgIGhlaWdodDogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1pZFdoaXRlYm90dG9te1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJpZ3RleHR7XHJcbiAgICBcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1OC4zNCU7XHJcbiAgY29sb3I6ICNGRkMwMDA7XHJcblxyXG4gIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsdGV4dHtcclxuICBcclxuICAvLyB3aWR0aDogNTg1cHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIFxyXG4gIFxyXG4gIGZvbnQtZmFtaWx5OiBQcm94aW1hIE5vdmE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNzUuNzglO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzVDNUM1QztcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNhcmRzXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgXHJcbiAgICBcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIFxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkMXtcclxuXHJcbiAgXHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAudGV4dGNhcmQxe1xyXG4gIFxyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQye1xyXG4gIFxyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VGRUZFRjtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMzVweCByZ2JhKDE2MCwgMTIxLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZDN7XHJcblxyXG4gIFxyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5jYXJkNHtcclxuXHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICBcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYm90dG9tT3Jhbmdle1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBhZGRpbmctbGVmdDoxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7IFxyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MjAxO1xyXG4gIH1cclxuICBcclxuICAuc2Nob29sYm90dG9tVGV4dHtcclxuICBcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4Mi43JTtcclxuICBcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIFxyXG4uQm90dG9tVGV4dHtcclxuICB3aWR0aDogMzQ1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjA0MHB4O1xyXG4gIGZvbnQ6IFByb3hpbWEgTm92YTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE0LjYycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG59ICBcclxuLkJvdHRvbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMyNjU3O1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "GGKm":
/*!************************************************!*\
  !*** ./src/app/lastpage/lastpage.component.ts ***!
  \************************************************/
/*! exports provided: LastpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastpageComponent", function() { return LastpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LastpageComponent {
    constructor(router) {
        this.router = router;
        this.star1 = "assets/subject/star.png";
        this.lockk = "assets/lastpage/lock.png";
        this.lockk1 = "assets/lastpage/lock1.png";
        this.play1 = "assets/lastpage/play.png";
    }
    ngOnInit() {
    }
}
LastpageComponent.ɵfac = function LastpageComponent_Factory(t) { return new (t || LastpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LastpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LastpageComponent, selectors: [["app-lastpage"]], decls: 104, vars: 17, consts: [[1, "scienceBackground"], [1, "column"], [1, "science_Light"], [1, "scienceFreeDemo"], [3, "src"], [1, "SciencePlayButton"], [1, "Bottom"], [1, "BottomText", 2, "color", "aliceblue"]], template: function LastpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " free demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduction to Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Transparent,Transculent and opaque materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "7 islands - 28 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Magnetism ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " free demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "World of magnets,Poles of magnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+ 6 more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "8 islands - 32 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Habitat & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Adaptations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " free demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Introduction to Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Transparent,Transculent and opaque materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "7 islands - 28 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Water ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " free demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Water:A Natural Gift,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sources of water, +10 more islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "12 islands - 48 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "The Leaf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " free demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Introduction to the Plant System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Root Systems, +9 more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "11 islands - 44 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The Flower ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " free demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Flowers, Whorls of a Flower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "+7 more islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "9 islands - 36 Concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "All Right Reserved | STEPAPP 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.play1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.star1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockk1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".scienceBackground[_ngcontent-%COMP%] {\n  \n  \n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  \n  background: #153168;\n}\n\n.science_Light[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 340px;\n  padding-top: 3%;\n  padding-left: 3%;\n  padding-bottom: 3%;\n  background: #ffffff;\n  opacity: 0.95;\n  \n  margin: 3%;\n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 10px;\n}\n\n.scienceFreeDemo[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 119px;\n  height: 49px;\n  top: 5%;\n  left: 65%;\n  mix-blend-mode: normal;\n  \n  border-radius: 31px;\n  \n  font-style: italic;\n  \n  font-size: 15px;\n  line-height: 159.7%;\n  \n  color: #000000;\n}\n\n.SciencePlayButton[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 119px;\n  height: 49px;\n  left: 2%;\n  top: 75%;\n  background: #ff8f50;\n  mix-blend-mode: normal;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 31px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.ScienceUnlockButton[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 119px;\n  height: 49px;\n  left: 2%;\n  top: 75%;\n  background: #ff8f50;\n  mix-blend-mode: normal;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 31px;\n}\n\n.Bottom[_ngcontent-%COMP%] {\n  background-color: #0D2249;\n}\n\n.BottomText[_ngcontent-%COMP%] {\n  line-height: 34.62px;\n  margin-left: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhc3RwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBRUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFFQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBSko7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVFFO0VBQ0UseUJBQUE7QUFMSjs7QUFPQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJsYXN0cGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2llbmNlQmFja2dyb3VuZCB7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMDdweDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIC8qIHBhZGRpbmc6IDUlOyAqL1xyXG4gICAgYmFja2dyb3VuZDogIzE1MzE2ODtcclxuICB9XHJcbiAgXHJcbiAgLnNjaWVuY2VfTGlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICAgIC8qIDMgKi9cclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAzNXB4IHJnYmEoMTYwLCAxMjEsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2NpZW5jZUZyZWVEZW1vIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTlweDtcclxuICAgIGhlaWdodDogNDlweDtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgXHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICBcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBQcm94aW1hIE5vdmE7ICovXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAvKiBmb250LXdlaWdodDogbm9ybWFsOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1OS43JTtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyNHB4ICovXHJcbiAgXHJcbiAgICBjb2xvcjogIzAwMDAwMDsgIFxyXG4gIH1cclxuICBcclxuICAuU2NpZW5jZVBsYXlCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICB0b3A6IDc1JTtcclxuICBcclxuICAgIGJhY2tncm91bmQ6ICNmZjhmNTA7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLlNjaWVuY2VVbmxvY2tCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICB0b3A6IDc1JTtcclxuICBcclxuICAgIGJhY2tncm91bmQ6ICNmZjhmNTA7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgfVxyXG4gIC5Cb3R0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQyMjQ5O1xyXG59XHJcbi5Cb3R0b21UZXh0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0LjYycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODAwcHg7XHJcbiAgXHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'stepapp';
        this.logo = "assets/image/image 2.png";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".content-body[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 60px 1rem;\n  background: #0C2657;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA2MHB4IDFyZW07XG4gICAgYmFja2dyb3VuZDogIzBDMjY1NztcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grade/grade.component */ "nA50");
/* harmony import */ var _school_school_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./school/school.component */ "F+dP");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject/subject.component */ "0EBP");
/* harmony import */ var _lastpage_lastpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lastpage/lastpage.component */ "GGKm");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__["GradeComponent"],
        _school_school_component__WEBPACK_IMPORTED_MODULE_9__["SchoolComponent"],
        _subject_subject_component__WEBPACK_IMPORTED_MODULE_10__["SubjectComponent"],
        _lastpage_lastpage_component__WEBPACK_IMPORTED_MODULE_11__["LastpageComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthService {
    constructor(router) {
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false); // {1}
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](localStorage.getItem('username'));
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }
    login(user) {
        if (user.username !== '' && user.password !== '') { // {3}
            this.loggedIn.next(true);
            localStorage.setItem('username', user.username);
            this.router.navigate(['/']);
        }
    }
    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
    get currentusername() {
        return this.username.asObservable();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavComponent_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_li_8_a_1_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isLoggedIn_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLoggedIn_r3);
} }
function NavComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const username_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, username_r7));
} }
function NavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_li_10_a_1_Template, 3, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.username$));
} }
function NavComponent_li_12_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_12_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_li_12_a_1_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isLoggedIn_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLoggedIn_r8);
} }
class NavComponent {
    //
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.logo = "assets/navbar/logo1.png";
    }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.username$ = this.authService.currentusername; // {2}
    }
    logout() {
        this.authService.logout(); // {3}
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 14, vars: 10, consts: [[1, "navbar"], ["href", "/school", 1, "navbar-brand"], [1, "pic", 3, "src"], [1, "navbar-default"], [1, "wlcm"], [4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-link", "routerLink", "/", 4, "ngIf"], ["routerLink", "/", 1, "nav-link"], [1, "nav-item"], ["class", "nav-link", 4, "ngIf"], [1, "nav-link"], ["class", "nav-link", 3, "click", 4, "ngIf"], [1, "nav-link", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome Winjit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_li_8_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_li_10_Template, 3, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_li_12_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.isLoggedIn$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".pic[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  top: 10%;\n  margin-left: 40px;\n  background: #ffffff;\n  border: 10px solid #ffffff;\n  border-radius: 20px;\n  box-sizing: border-box;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  border: 10px solid #ffffff;\n  border-radius: 20px;\n  box-sizing: border-box;\n  height: 80px;\n  margin-left: 2%;\n  border-radius: 20px;\n  box-sizing: border-box;\n}\n\n.Navbar[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: arial;\n}\n\n.navbar-default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0p;\n  margin: 0;\n}\n\n.navbar-default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: bisque;\n}\n\n.navbar-default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.navbar-default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: darkorange;\n  width: 200px;\n  padding: 25px 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: arial;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFLRTtFQUVFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0QseUJBQUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFPQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBQVVBO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJEOztBQVlDO0VBQ0UsZUFBQTtBQVRIIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGlje1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogOTBweDtcclxuICB0b3A6MTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cclxufVxyXG5cclxuICAubmF2YmFyLWJyYW5ke1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgXHJcblxyXG4gIH1cclxuICBcclxuICAuTmF2YmFyIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5ib2R5e1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCB1bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDBwO1xyXG4gIG1hcmdpbjogMDtcclxufSBcclxuLm5hdmJhci1kZWZhdWx0IGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IGJpc3F1ZTtcclxufVxyXG5cclxuICBcclxuLm5hdmJhci1kZWZhdWx0IGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItZGVmYXVsdCBhe1xyXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiB3aWR0aDogMjAwcHg7XHJcbi8vICBkaXNwbGF5OiBibG9jaztcclxuIHBhZGRpbmc6IDI1cHggMTVweDtcclxuIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuXHJcbn1cclxuICBcclxuIC5wb2ludGVye1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9ICJdfQ== */"] });


/***/ }),

/***/ "nA50":
/*!******************************************!*\
  !*** ./src/app/grade/grade.component.ts ***!
  \******************************************/
/*! exports provided: GradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeComponent", function() { return GradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function (a0) { return { "btnActive": a0 }; };
class GradeComponent {
    constructor(router) {
        this.router = router;
        this.ellips = "assets/grade/Ellipse 23.png";
        this.showMe = false;
        this.selectedId = 1;
    }
    ngOnInit() {
    }
    btnActivate(id) {
        this.selectedId = id;
        alert("study material for 6th is  available ");
    }
    btnActivateOne(id) {
        this.selectedId = id;
        alert("study material for 5th is available ");
    }
    btnActivateTwo(id) {
        this.selectedId = id;
        alert("study material for 7th is  not available ");
    }
    btnActivateThree(id) {
        this.selectedId = id;
        alert("study material for 8th is not available ");
    }
    btnActivateFour(id) {
        this.selectedId = id;
        alert("study material for 9th is not available ");
    }
    btnActivateFive(id) {
        this.selectedId = id;
        alert("study material for 10th is not available ");
    }
    btnActivateSix(id) {
        this.selectedId = id;
        alert("study material for 11th is not available ");
    }
    btn() {
        this.router.navigate(['/subject']);
    }
}
GradeComponent.ɵfac = function GradeComponent_Factory(t) { return new (t || GradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeComponent, selectors: [["app-grade"]], decls: 34, vars: 21, consts: [[1, "loginBackground"], [1, "eclipscontainer"], [1, "circle"], [1, "text-block1"], [1, "text-block2"], ["id", "1", 1, "Small6", 3, "ngClass", "click"], ["id", "2", 1, "Small5", 3, "ngClass", "click"], ["id", "3", 1, "Small7", 3, "ngClass", "click"], ["id", "4", 1, "Small8", 3, "ngClass", "click"], ["id", "5", 1, "Small9", 3, "ngClass", "click"], ["id", "6", 1, "Small10", 3, "ngClass", "click"], ["id", "7", 1, "Small11", 3, "ngClass", "click"], [1, "proceed-wrapper"], [1, "gradeButtonProceed", 2, "color", "aliceblue", 3, "click"], [1, "bottom"], ["alt", "centered", 1, "BottomText", 2, "color", "aliceblue"]], template: function GradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_8_listener() { return ctx.btnActivate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "6th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_11_listener() { return ctx.btnActivateOne(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_14_listener() { return ctx.btnActivateTwo(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "7th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_17_listener() { return ctx.btnActivateThree(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "8th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_20_listener() { return ctx.btnActivateFour(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "9th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_23_listener() { return ctx.btnActivateFive(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "10th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_26_listener() { return ctx.btnActivateSix(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "11th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_29_listener() { return ctx.btn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Proceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All Right Reserved | STEPAPP 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.selectedId === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.selectedId === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.selectedId === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.selectedId === 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.selectedId === 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.selectedId === 6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.selectedId === 7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], styles: [".loginBackground[_ngcontent-%COMP%] {\n  background: #0c2555;\n  height: 900px;\n  table-layout: fixed;\n}\n\n.disable[_ngcontent-%COMP%] {\n  text-align: center;\n  bottom: 0px;\n  position: absolute;\n  right: 100px;\n  top: 500px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #b9b5b5;\n  border: 2px solid #0D2249;\n  border-radius: 350px;\n  box-sizing: border-box;\n  margin: auto;\n  font-style: normal;\n  font-size: 30px;\n  border-width: thick;\n  border-color: aliceblue;\n  border-width: 10px;\n  text-align: center;\n  margin-top: -20px;\n  color: #5C5C5C;\n}\n\n.eclipscontainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  background-attachment: fixed;\n  background: #0C2657;\n  border-radius: 10px;\n  box-sizing: border-box;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  top: 100px;\n  table-layout: fixed;\n}\n\n.bigellips[_ngcontent-%COMP%] {\n  width: 461.78px;\n  height: 461.78px;\n  background: #C4C4C4;\n  border: 8px solid #0D2249;\n  border-radius: 290px;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.gradeButtonProceed[_ngcontent-%COMP%] {\n  width: 200.86px;\n  height: 70px;\n  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);\n  border-radius: 100px;\n  font-style: italic;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  align-items: center;\n  bottom: 0px;\n  color: #FFFFFF;\n}\n\n.text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 750.4px;\n  height: 265.12px;\n  table-layout: fixed;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #0C2657;\n}\n\n.text-block2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 78%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  table-layout: fixed;\n  width: 750.4px;\n  height: 278.12px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 80px;\n  line-height: 110.3%;\n  text-align: center;\n  color: #0C2657;\n}\n\n.Small5[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 98.83px;\n  top: -11%;\n  left: 40%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.Small6[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 127.69px;\n  height: 127.69px;\n  top: 8%;\n  left: 75%;\n  background: #FFFFFF;\n  border: 4px solid #FFFFFF;\n  border-radius: 110px;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(77, 74, 74, 0.25);\n  font-style: inherit;\n  font-weight: bold;\n  font-size: 52px;\n  line-height: 117.3%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #5c5c5c;\n}\n\n.Small7[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 98.83px;\n  top: 49%;\n  left: 85%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.Small8[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 99.83px;\n  top: 80%;\n  left: 60%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.Small9[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 98.83px;\n  top: 76%;\n  left: 10%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.Small10[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 98.83px;\n  top: 40%;\n  left: -8%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.Small11[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.83px;\n  height: 98.83px;\n  left: 5%;\n  top: 6%;\n  background: #FFFFFF;\n  border: 2px solid #0D2249;\n  border-radius: 110px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 117.3%;\n  text-align: center;\n  color: #5C5C5C;\n}\n\n.proceed-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  padding: 60px;\n}\n\n.BottomText[_ngcontent-%COMP%] {\n  width: 345px;\n  height: 20px;\n  top: 3040px;\n  font: Proxima Nova;\n  align-content: center;\n  line-height: 14.62px;\n  margin-left: 800px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  background: #0D2249;\n}\n\n.btnActive[_ngcontent-%COMP%] {\n  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdyYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBQTs7QUFJQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0QsYUFBQTtFQUNDLDRCQUFBO0VBQ0EsbUJBQUE7RUFDRCxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRkg7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBSEo7O0FBS0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9FQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0FBSE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDRixRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQWFFO0VBQ0Usa0JBQUE7RUFDRixRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0MsbUJBQUE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0FBYko7O0FBa0JFO0VBQ0Usa0JBQUE7RUFDSixjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0FBbkJBOztBQXNCQTtFQUNJLGtCQUFBO0VBQ0osZUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFJQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXpCQTs7QUErQkE7RUFDSSxrQkFBQTtFQUNKLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUEvQkE7O0FBbUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNKLG9CQUFBO0VBQ0ksc0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0FBcENKOztBQXdDQTtFQUNJLGtCQUFBO0VBQ0osY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBRUEsY0FBQTtBQTFDQTs7QUE4Q0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFoREo7O0FBb0RFO0VBQ0Ysa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0FBcERBOztBQStEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQTVERjs7QUE4REE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQTNERjs7QUErREE7RUFDRSxtQkFBQTtBQTVERjs7QUErREE7RUFFRSxvRUFBQTtFQUNBLGNBQUE7QUE3REYiLCJmaWxlIjoiZ3JhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5CYWNrZ3JvdW5ke1xyXG5cclxuICBiYWNrZ3JvdW5kOiBoc2woMjE5LCA3NiUsIDE5JSk7XHJcbiAgaGVpZ2h0OiA5MDBweDtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIC8vIG1hcmdpbi10b3A6IC0xMTBweDtcclxufVxyXG4uZGlzYWJsZXtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3R0b206IDBweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5yaWdodDogMTAwcHg7XHJcbnRvcDogNTAwcHg7XHJcblxyXG5cclxufVxyXG4uY2lyY2xle1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7IFxyXG4gIGJhY2tncm91bmQ6ICNiOWI1YjU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzBEMjI0OTtcclxuICBib3JkZXItcmFkaXVzOiAzNTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBjb2xvcjogIzVDNUM1QztcclxuICB9XHJcbiAgXHJcbi5lY2xpcHNjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogIzBDMjY1NztcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICB0b3A6MTAwcHg7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuYmlnZWxsaXBze1xyXG4gICAgd2lkdGg6IDQ2MS43OHB4O1xyXG4gICAgaGVpZ2h0OiA0NjEuNzhweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkICMwRDIyNDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgfVxyXG4gICAgLmdyYWRlQnV0dG9uUHJvY2VlZHtcclxuICAgICAgd2lkdGg6IDIwMC44NnB4O1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNTMuNThkZWcsICNGRkMwMDAgMS41NSUsICNGRjhBMDAgOTUuOCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgXHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgICBcclxuXHJcbiAgLnRleHQtYmxvY2sxIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc1MC40cHg7XHJcbiAgICBoZWlnaHQ6IDI2NS4xMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTE3LjMlO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogICMwQzI2NTc7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnRleHQtYmxvY2syIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDc4JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogNzUwLjRweDtcclxuICAgIGhlaWdodDogMjc4LjEycHg7XHJcbiAgICBcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTEwLjMlO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAgIzBDMjY1NztcclxuXHJcblxyXG4gICAgXHJcbiAgfVxyXG4gIC5TbWFsbDV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiA5OC44M3B4O1xyXG5oZWlnaHQ6IDk4LjgzcHg7XHJcbnRvcDogLTExJTtcclxubGVmdDogNDAlO1xyXG5cclxuYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuYm9yZGVyOiAycHggc29saWQgIzBEMjI0OTtcclxuYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc2l6ZTogMzBweDtcclxubGluZS1oZWlnaHQ6IDExNy4zJTtcclxuXHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbmNvbG9yOiAjNUM1QzVDO1xyXG59XHJcblxyXG4uU21hbGw2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTI3LjY5cHg7XHJcbmhlaWdodDogMTI3LjY5cHg7XHJcbnRvcDogOCU7XHJcbmxlZnQ6IDc1JTtcclxuXHJcblxyXG5cclxuYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHJcbmJvcmRlcjogNHB4IHNvbGlkICNGRkZGRkY7XHJcbmJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDc3LCA3NCwgNzQsIDAuMjUpO1xyXG5cclxuZm9udC1zdHlsZTogaW5oZXJpdDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogNTJweDtcclxubGluZS1oZWlnaHQ6IDExNy4zJTtcclxuXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICAjNWM1YzVjO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uU21hbGw3e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogOTguODNweDtcclxuaGVpZ2h0OiA5OC44M3B4O1xyXG50b3A6IDQ5JTtcclxubGVmdDogODUlO1xyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMEQyMjQ5O1xyXG5ib3JkZXItcmFkaXVzOiAxMTBweDtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zaXplOiAzMHB4O1xyXG5saW5lLWhlaWdodDogMTE3LjMlO1xyXG5cclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuY29sb3I6ICM1QzVDNUM7XHJcblxyXG59XHJcblxyXG4uU21hbGw4e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4LjgzcHg7XHJcbiAgICBoZWlnaHQ6IDk5LjgzcHg7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwRDIyNDk7XHJcbmJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExNy4zJTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzVDNUM1QztcclxuICAgIFxyXG59XHJcblxyXG4uU21hbGw5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogOTguODNweDtcclxuaGVpZ2h0OiA5OC44M3B4O1xyXG50b3A6IDc2JTtcclxubGVmdDogMTAlO1xyXG5cclxuYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuYm9yZGVyOiAycHggc29saWQgIzBEMjI0OTtcclxuXHJcbmJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmxpbmUtaGVpZ2h0OiAxMTcuMyU7XHJcblxyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5jb2xvcjogIzVDNUM1QztcclxuXHJcbn1cclxuXHJcbi5TbWFsbDEwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4LjgzcHg7XHJcbiAgICBoZWlnaHQ6IDk4LjgzcHg7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IC04JTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwRDIyNDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTE3LjMlO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjNUM1QzVDO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgLlNtYWxsMTF7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2lkdGg6IDk4LjgzcHg7XHJcbmhlaWdodDogOTguODNweDtcclxubGVmdDogNSU7XHJcbnRvcDogNiU7XHJcblxyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMEQyMjQ5O1xyXG5ib3JkZXItcmFkaXVzOiAxMTBweDtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmxpbmUtaGVpZ2h0OiAxMTcuMyU7XHJcblxyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5jb2xvcjogICM1QzVDNUM7XHJcblxyXG59XHJcblxyXG4vLyAuQm90dG9te1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gaGVpZ2h0OiAzOXB4O1xyXG4vLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyBiYWNrZ3JvdW5kOiAjMEMyNjU3O1xyXG5cclxuLy8gfVxyXG4ucHJvY2VlZC13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZzogNjBweDtcclxufVxyXG4uQm90dG9tVGV4dHtcclxuICB3aWR0aDogMzQ1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMzA0MHB4O1xyXG4gIGZvbnQ6IFByb3hpbWEgTm92YTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE0LjYycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG5cclxuXHJcbn0gIFxyXG4uYm90dG9te1xyXG4gIGJhY2tncm91bmQ6ICMwRDIyNDk7O1xyXG59XHJcblxyXG4uYnRuQWN0aXZlXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjUzLjU4ZGVnLCAjRkZDMDAwIDEuNTUlLCAjRkY4QTAwIDk1LjglKTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn // {1}
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), // {2} 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigate(['/login']); // {4}
                return false;
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grade/grade.component */ "nA50");
/* harmony import */ var _school_school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school/school.component */ "F+dP");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject/subject.component */ "0EBP");
/* harmony import */ var _lastpage_lastpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lastpage/lastpage.component */ "GGKm");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', redirectTo: 'school', pathMatch: "full" },
    { path: 'school', component: _school_school_component__WEBPACK_IMPORTED_MODULE_3__["SchoolComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'grade', component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_2__["GradeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__["SubjectComponent"] },
    { path: 'lastpage', component: _lastpage_lastpage_component__WEBPACK_IMPORTED_MODULE_5__["LastpageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function LoginComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_12_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formControls.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formControls.username.errors.pattern);
} }
function LoginComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_15_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_15_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formControls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formControls.password.errors.pattern);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LoginComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.logo = "assets/image/image 2.png";
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.isSubmitted = false;
        this.unamepattern = "nilamj@winjit.com";
        this.pwdpassword = "Winjit@123";
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.unamepattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.pwdpassword)]]
        });
    }
    get formControls() { return this.loginForm.controls; }
    login() {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/grade');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 10, consts: [[1, "back"], [1, "background"], [1, "center-block"], [1, "logo"], ["alt", "centered image", 3, "src"], ["className", "loginText", 2, "color", "aliceblue"], [1, "idpsw"], [1, "login-container", 3, "formGroup", "ngSubmit"], [3, "ngClass"], ["type", "username", "placeholder", "Username", "formControlName", "username", 1, "username"], ["class", "help-block", 4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "password"], ["type", "submit", "value", "Login", 1, "login"], [2, "color", "aliceblue"], ["href", ""], [1, "Bottom"], [1, "BottomText", 2, "color", "aliceblue"], [1, "help-block"], ["style", "color: aliceblue;", 4, "ngIf"], ["style", "color: rgb(140, 150, 160);", 4, "ngIf"], [2, "color", "rgb(140, 150, 160)"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sign in to your account to continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Don\u2019t have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "All Right Reserved | STEPAPP 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isSubmitted && ctx.formControls.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.isSubmitted && ctx.formControls.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin-right: 100px;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #0C2657;\n  height: 800px;\n}\n\n.background[_ngcontent-%COMP%] {\n  background: #0C2657;\n  justify-content: space-evenly;\n  display: flex;\n  flex-direction: column;\n}\n\n.logo[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100px;\n  display: block;\n}\n\ninput.ng.invalid[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.loginText[_ngcontent-%COMP%] {\n  font-family: Proxima Nova;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 10px;\n  \n  color: #D8D8D8;\n  align-items: center;\n  padding-left: 20px;\n  text-align: center;\n}\n\n.center-block[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 200px;\n  width: 400px;\n  height: 0px;\n  display: block;\n}\n\n.idpsw[_ngcontent-%COMP%] {\n  flex: column;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.username[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 60px;\n  margin-bottom: 20px;\n  background: #FFFFFF;\n  border: 1px solid #EFEFEF;\n  border-radius: 100px;\n  margin-top: 20px;\n}\n\n.password[_ngcontent-%COMP%] {\n  width: 370px;\n  height: 60px;\n  background: #FFFFFF;\n  border: 1px solid #EFEFEF;\n  border-radius: 100px;\n  margin-bottom: 20px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 80%;\n}\n\n.login[_ngcontent-%COMP%] {\n  width: 370px;\n  height: 60px;\n  margin-top: 15px;\n  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);\n  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);\n  border-radius: 90px;\n  justify-content: space-evenly;\n}\n\n.Bottom[_ngcontent-%COMP%] {\n  background: #0D2249;\n  height: 50px;\n}\n\n.BottomText[_ngcontent-%COMP%] {\n  width: 345px;\n  height: 20px;\n  top: 2050px;\n  font: Proxima Nova;\n  align-content: center;\n  line-height: 34.62px;\n  margin-left: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBRUUsbUJBQUE7RUFFQSw2QkFBQTtFQUVBLGFBQUE7RUFDRSxzQkFBQTtBQUhKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNDLG1CQUFBO0VBQ0Qsa0JBQUE7RUFDQSxrQkFBQTtBQUpBOztBQVNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0YseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTkE7O0FBU0E7RUFFRSxZQUFBO0VBQ0QsWUFBQTtFQUNBLG1CQUFBO0VBQ0QseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUEE7O0FBU0E7RUFDQSxnQkFBQTtBQU5BOztBQVNBO0VBQ0UsWUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNKLG9FQUFBO0VBRUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBUEE7O0FBVUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuXG5cbn1cbi5iYWNre1xuICBiYWNrZ3JvdW5kOiAjMEMyNjU3O1xuICBoZWlnaHQ6IDgwMHB4O1xuXG59XG4uYmFja2dyb3VuZHtcblxuICBiYWNrZ3JvdW5kOiAjMEMyNjU3O1xuXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2dve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dC5uZy5pbnZhbGlke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICBcblxuXG4ubG9naW5UZXh0e1xuXG5mb250LWZhbWlseTogUHJveGltYSBOb3ZhO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmZvbnQtc2l6ZTogMzBweDtcbmxpbmUtaGVpZ2h0OiAxMHB4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbmNvbG9yOiAjRDhEOEQ4O1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5wYWRkaW5nLWxlZnQ6IDIwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxufVxuXG4uY2VudGVyLWJsb2Nre1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAwMHB4O1xuICBkaXNwbGF5OmJsb2NrO1xuICB9XG5cbi5pZHBzd3tcbiAgZmxleDpjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udXNlcm5hbWV7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA2MHB4OyAgIFxuICBtYXJnaW4tYm90dG9tIDogMjBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbmJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUY7XG5ib3JkZXItcmFkaXVzOiAxMDBweDtcbm1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wYXNzd29yZHtcblxuICB3aWR0aDogMzcwcHg7XG4gaGVpZ2h0OiA2MHB4O1xuIGJhY2tncm91bmQ6ICNGRkZGRkY7XG5ib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuYm9yZGVyLXJhZGl1czogMTAwcHg7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmljb257XG5tYXJnaW4tbGVmdDogODAlO1xufVxuXG4ubG9naW57XG4gIHdpZHRoOiAzNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNTMuNThkZWcsICNGRkMwMDAgMS41NSUsICNGRjhBMDAgOTUuOCUpO1xuXG5ib3gtc2hhZG93OiAwcHggMTJweCAzNXB4IHJnYmEoMTYwLCAxMjEsIDAsIDAuMik7XG5ib3JkZXItcmFkaXVzOiA5MHB4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5Cb3R0b217XG4gIGJhY2tncm91bmQ6ICMwRDIyNDk7O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uQm90dG9tVGV4dHtcbiAgd2lkdGg6IDM0NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogMjA1MHB4O1xuICBmb250OiBQcm94aW1hIE5vdmE7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICBsaW5lLWhlaWdodDogMzQuNjJweDtcbiAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xuXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map