function scrollToTop() {
           window.scrollTo(0, 0);
        }
 <div id="bottonecookie">
      <div id="cookie" >
        <b id="chiusura" onclick="hideCookie()">X</b>
        <b> IL SITO UTILIZZA COOKIE</b><br><br><i> 
         Questo sito web utilizza i cookie per migliorare la tua esperienza di navigazione.
          </i>
      </div>
      <div id="bottone" onclick="showCookie()">
        <i class="material-icons" style="font-size: 40px; color: white; background-color:none; border-radius:50px; padding: 5px">cookie</i>
      </div>
   </div>
 <script src="javascript.js"></script>
</body>
<div id="freccina">
    <div onclick="scrollToTop()" class="top">
      <i class="material-icons" style="font-size:35px;">arrow_drop_up</i>
    </div>
