(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1484:function(module,exports){module.exports=function(hljs){var HTTP_VERBS=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{contains:[{className:"number",begin:"^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",relevance:5},{className:"number",begin:"\\b\\d+\\b",relevance:0},{className:"string",begin:'"('+HTTP_VERBS.join("|")+")",end:'"',keywords:HTTP_VERBS.join(" "),illegal:"\\n",relevance:5,contains:[{begin:"HTTP/[12]\\.\\d",relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:"\\n",relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:"\\n",relevance:0},{className:"string",begin:'"Mozilla/\\d\\.\\d \\(',end:'"',illegal:"\\n",relevance:3},{className:"string",begin:'"',end:'"',illegal:"\\n",relevance:0}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog.f6b18a3fdbf3ab6f6d70.bundle.js.map