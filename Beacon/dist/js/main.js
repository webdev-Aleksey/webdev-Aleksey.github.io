$(document).ready(function(){$(".minus").click(function(){var e=$(this).parent().find("input"),t=parseInt(e.val())-1;return t=t<1?1:t,e.val(t),e.change(),!1}),$(".plus").click(function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1}),function(){"use strict";for(var e=document.querySelectorAll(".toggle-hamburger"),t=e.length-1;0<=t;t--){var n=e[t];n.addEventListener("click",function(e){e.preventDefault(),!0===this.classList.contains("is-active")?this.classList.remove("is-active"):this.classList.add("is-active")})}}(),$("#toggle-hamburger").on("click",function(e){$("#nav").slideToggle("slow")})});var currentTab=0;function showTab(e){var t=document.getElementsByClassName("tab");t[e].style.display="block",document.getElementById("prevBtn").style.display=0==e?"none":"inline",e==t.length-1?document.getElementById("nextBtn").innerHTML="Submit":document.getElementById("nextBtn").innerHTML="Next",fixStepIndicator(e)}function nextPrev(e){var t=document.getElementsByClassName("tab");return!(1==e&&!validateForm())&&(t[currentTab].style.display="none",(currentTab+=e)>=t.length?(document.getElementById("regForm").submit(),!1):void showTab(currentTab))}function validateForm(){var e,t,n=!0;for(e=document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"),t=0;t<e.length;t++)""==e[t].value&&(e[t].className+=" invalid",n=!1);return n&&(document.getElementsByClassName("step")[currentTab].className+=" finish"),n}function fixStepIndicator(e){var t,n=document.getElementsByClassName("step");for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" step-active","");n[e].className+=" step-active"}showTab(currentTab);