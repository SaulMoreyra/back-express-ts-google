var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&n(e,r,t[r]);return e},i=(e,o)=>t(e,r(o));import{a as c,r as u,j as d,b as p,G as m,A as b,T as h,C as y,R as f,c as g}from"./vendor.01cb74dc.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const v=`${(()=>{switch(window.location.hostname){case"smyra-google-autocomplete.herokuapp.com":return"https://smyra-google-autocomplete.herokuapp.com";default:return"http://localhost:8081"}})()}/api/places`;var x=async e=>{const{data:t}=await c.get(`${v}?search=${e}`);return t.predictions},w=async e=>{const{data:t}=await c.get(`${v}/${e}`);return t.result};const C={number:"",street:"",sublocality:"",locality:"",state:"",country:"",code:""},O={street_number:"number",route:"street",sublocality_level_1:"sublocality",sublocality:"sublocality",locality:"locality",administrative_area_level_1:"state",country:"country",postal_code:"code"};function P(){const[e,t]=u.exports.useState(!1),[r,o]=u.exports.useState(C),[l,a]=u.exports.useState(""),[n,c]=u.exports.useState({place_id:""}),[f,g]=u.exports.useState(!1),[v,P]=u.exports.useState(),[S,_]=u.exports.useState([]),k=u.exports.useCallback((e=>e.address_components.reduce(((e,t)=>{const r=t.types[0],o=O[r];return i(s({},e),{[o]:t.long_name})}),C)),[]),j=((e=((...e)=>{}),t=100)=>{const r=u.exports.useRef();return u.exports.useCallback(((...o)=>{clearTimeout(r.current),r.current=setTimeout((()=>{e(...o)}),t)}),[e,t])})((async e=>{t(!0);const r=await x(e);_(r),t(!1)}),500),I=u.exports.useCallback((async e=>{const t=await w(e);P(t);const r=k(t);o(r)}),[k]),W=u.exports.useCallback((e=>S.some((t=>t.description===e))),[S]),A=u.exports.useCallback(((e,t)=>{c(t),t&&I(t.place_id),t||o(C)}),[I]),N=u.exports.useCallback(((e,t)=>{a(t);t&&t.length>5&&!W(t)&&j(t)}),[j,W]);return d("div",{className:"App",children:d("header",{className:"App-header",children:p(m,{sx:{width:300},container:!0,rowSpacing:1,direction:"column",children:[d(m,{item:!0,children:d(b,{fullWidth:!0,disablePortal:!0,value:n,onChange:A,loading:e,open:f,onOpen:()=>g(!0),onClose:()=>g(!1),options:S,filterOptions:(e,t)=>e,getOptionLabel:e=>e.description||"",inputValue:l,onInputChange:N,renderInput:t=>d(h,i(s({},t),{label:"Dirección",InputProps:i(s({},t.InputProps),{endAdornment:p(u.exports.Fragment,{children:[e?d(y,{color:"inherit",size:20}):null,t.InputProps.endAdornment]})})}))})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Calle",value:r.street})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Numero",value:r.number})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Colonia",value:r.sublocality})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Municipio",value:r.locality})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Estado",value:r.state})}),d(m,{item:!0,children:d(h,{fullWidth:!0,label:"Código Postal",value:r.code})})]})})})}f.render(d(g.StrictMode,{children:d(P,{})}),document.getElementById("root"));
