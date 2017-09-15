/** 
 * Flexmonster Pivot Table Component v2.4 (http://www.flexmonster.com/)
 * Copyright 2017 Flexmonster. All rights reserved.
 *
 * Flexmonster Pivot Table Component commercial licenses may be obtained at
 * http://www.flexmonster.com/pricing-and-download/
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
void 0!==window.jQuery&&(window.jQuery.fn.flexmonster=function(a){a=a||{};a.container=this.get(0);a=window.Flexmonster?window.Flexmonster(a):window.PivotApi(a);this.data("flexmonster",a);return a});
void 0!==window.angular&&window.angular.module("flexmonster",[]).directive("fmPivot",function(){function d(a,c){void 0!==a.fmComponentFolder&&(c.componentFolder=a.fmComponentFolder);void 0!==a.fmGlobal&&(c.global=a.fmGlobal);void 0!==a.fmWidth&&(c.width=a.fmWidth);void 0!==a.fmHeight&&(c.height=a.fmHeight);void 0!==a.fmToolbar&&(c.toolbar=!0===a.fmToolbar||"true"==a.fmToolbar||"on"==a.fmToolbar);void 0!==a.fmLicenseKey&&(c.licenseKey=a.fmLicenseKey)}return{restrict:"A",scope:{report:"=fmReport",customizeCell:"&fmCustomizeCell",
cellclick:"&fmCellClick",celldoubleclick:"&fmCellDoubleClick",dataerror:"&fmDataError",datafilecancelled:"&fmDataFileCancelled",dataloaded:"&fmDataLoaded",datachanged:"&fmDataChanged",fieldslistclose:"&fmFieldsListClose",fieldslistopen:"&fmFieldsListOpen",filteropen:"&fmFilteropen",fullscreen:"&fmFullscreen",loadingdata:"&fmLoadingData",loadinglocalization:"&fmLoadingLocalization",loadingolapstructure:"&fmLoadingOlapStructure",loadingreportfile:"&fmLoadingReportFile",localizationerror:"&fmLocalizationError",
localizationloaded:"&fmLocalizationLoaded",olapstructureerror:"&fmOlapStructureError",olapstructureloaded:"&fmOlapStructureLoaded",openingreportfile:"&fmOpeningReportFile",querycomplete:"&fmQueryComplete",queryerror:"&fmQueryError",ready:"&fmReady",reportchange:"&fmReportChange",reportcomplete:"&fmReportComplete",reportfilecancelled:"&fmReportFileCancelled",reportfileerror:"&fmReportFileError",reportfileloaded:"&fmReportFileLoaded",runningquery:"&fmRunningQuery",update:"&fmUpdate",beforetoolbarcreated:"&fmBeforeToolbarCreated"},
link:function(a,c,e,b){b={};b.container=c[0];d(e,b);a.customizeCell&&(b.customizeCell=function(b,c){return a.customizeCell({html:b,data:c})});a.cellclick&&(b.cellclick=function(b){a.cellclick({cell:b})});a.celldoubleclick&&(b.celldoubleclick=function(b){a.celldoubleclick({cell:b})});b.dataerror=a.dataerror;b.datafilecancelled=a.datafilecancelled;b.dataloaded=a.dataloaded;b.datachanged&&(b.datachanged=function(b){a.datachanged({event:b})});b.fieldslistclose=a.fieldslistclose;b.fieldslistopen=a.fieldslistopen;
b.filteropen&&(b.filteropen=function(b){a.filteropen({params:b})});b.fullscreen&&(b.fullscreen=function(b){a.fullscreen({fullScreenMode:b})});b.loadingdata=a.loadingdata;b.loadinglocalization=a.loadinglocalization;b.loadingolapstructure=a.loadingolapstructure;b.loadingreportfile=a.loadingreportfile;b.localizationerror=a.localizationerror;b.localizationloaded=a.localizationloaded;b.olapstructureerror=a.olapstructureerror;b.olapstructureloaded=a.olapstructureloaded;b.openingreportfile=a.openingreportfile;
b.querycomplete=a.querycomplete;b.queryerror=a.queryerror;a.ready&&(b.ready=function(){a.ready({pivot:f})});b.reportchange=a.reportchange;b.reportcomplete=a.reportcomplete;b.reportfilecancelled=a.reportfilecancelled;b.reportfileerror=a.reportfileerror;b.reportfileloaded=a.reportfileloaded;b.runningquery=a.runningquery;b.loadingdata=a.loadingdata;b.loadingdata=a.loadingdata;b.loadingdata=a.loadingdata;b.update=a.update;a.beforetoolbarcreated&&(b.beforetoolbarcreated=function(b){a.beforetoolbarcreated({toolbar:b})});
a.report&&(b.report=a.report);var f=Flexmonster(b)}}});
void 0!==window.React&&(window.FlexmonsterReact={Pivot:React.createClass({propTypes:{componentFolder:React.PropTypes.string,global:React.PropTypes.object,width:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),height:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),report:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.object]),licenseKey:React.PropTypes.string,toolbar:React.PropTypes.bool,customizeCell:React.PropTypes.func,cellclick:React.PropTypes.func,
celldoubleclick:React.PropTypes.func,dataerror:React.PropTypes.func,datafilecancelled:React.PropTypes.func,dataloaded:React.PropTypes.func,datachanged:React.PropTypes.func,fieldslistclose:React.PropTypes.func,fieldslistopen:React.PropTypes.func,filteropen:React.PropTypes.func,fullscreen:React.PropTypes.func,loadingdata:React.PropTypes.func,loadinglocalization:React.PropTypes.func,loadingolapstructure:React.PropTypes.func,loadingreportfile:React.PropTypes.func,localizationerror:React.PropTypes.func,
localizationloaded:React.PropTypes.func,olapstructureerror:React.PropTypes.func,olapstructureloaded:React.PropTypes.func,openingreportfile:React.PropTypes.func,querycomplete:React.PropTypes.func,queryerror:React.PropTypes.func,ready:React.PropTypes.func,reportchange:React.PropTypes.func,reportcomplete:React.PropTypes.func,reportfilecancelled:React.PropTypes.func,reportfileerror:React.PropTypes.func,reportfileloaded:React.PropTypes.func,runningquery:React.PropTypes.func,update:React.PropTypes.func,
beforetoolbarcreated:React.PropTypes.func},render:function(){return React.DOM.div()},componentDidMount:function(){var a={};a.container=ReactDOM.findDOMNode(this);a.container.id="fm-"+Date.now();this.parseProps(a);this.flexmonster=new window.Flexmonster(a)},shouldComponentUpdate:function(){return!1},componentWillUnmount:function(){},parseProps:function(a){for(var b in this.props)a[b]=this.props[b]}})});
window.flexmonster={embedPivotComponent:function(d,e,f,g,a,b,h){var c=b;"string"==typeof b&&(c=h);config={};config.componentFolder=d;config.container=e;config.width=f;config.height=parseInt(g);config.toolbar=c;config.report=a;a.hasOwnProperty("configUrl")&&(config.configUrl=a.configUrl);a.hasOwnProperty("licenseKey")&&(config.licenseKey=a.licenseKey);a.hasOwnProperty("jsCellClickHandler")&&(config.cellclick=a.jsCellClickHandler);a.hasOwnProperty("jsCellDoubleClickHandler")&&(config.celldoubleclick=
a.jsCellDoubleClickHandler);a.hasOwnProperty("jsFullScreenHandler")&&(config.fullscreen=a.jsFullScreenHandler);a.hasOwnProperty("jsFilterOpenHandler")&&(config.filteropen=a.jsFilterOpenHandler);a.hasOwnProperty("jsFieldsListCloseHandler")&&(config.fieldslistclose=a.jsFieldsListCloseHandler);a.hasOwnProperty("jsFieldsListOpenHandler")&&(config.fieldslistopen=a.jsFieldsListOpenHandler);a.hasOwnProperty("jsPivotCreationCompleteHandler")&&(config.ready=a.jsPivotCreationCompleteHandler);a.hasOwnProperty("jsPivotUpdateHandler")&&
(config.update=a.jsPivotUpdateHandler);a.hasOwnProperty("jsReportChangeHandler")&&(config.reportchange=a.jsReportChangeHandler);a.hasOwnProperty("jsReportLoadedHandler")&&(config.reportcomplete=a.jsReportLoadedHandler);a.hasOwnProperty("beforetoolbarcreated")&&(config.beforetoolbarcreated=a.beforetoolbarcreated);a.hasOwnProperty("customizeCell")&&(config.customizeCell=a.customizeCell);return Flexmonster(config)}};