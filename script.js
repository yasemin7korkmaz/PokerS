var p1CardPNG = new Array(7);      // a0.09.png, a0.1.png, b0.04.png, b0.13.png, c0.07.png, c0.08.png, d0.05.png 
var p2CardPNG = new Array(7);

var p1CardNumSym = new Array(7);   // a0.09,     a0.1,     b0.04,     b0.13,     c0.07,     c0.08,     d0.05  
var p2CardNumSym = new Array(7);

var p1CardSym = new Array(7);      // a,         a,         b,         b,         c,        c,         d   
var p2CardSym = new Array(7);

var p1CardNum = new Array(7);      // 0.04,      0.05,      0.07,      0.08,      0.09,     0.1,      0.13 
var p2CardNum = new Array(7);

var p1CardNumBySym = new Array(7); // 0.09,       0.1,       0.04,     0.13,       0.07,    0.08,     0.05
var p2CardNumBySym = new Array(7);

var p1CardSymByNum = new Array();  // b,       d,          c,         c,          a,        a,       b
var p2CardSymByNum = new Array();

let plAndTabCardNum;
let plAndTabCardSym;
let plAndTabCardSymNum;

var SAYAC_royal;
var SAYAC_strFlush ;
var SAYAC_four;
var SAYAC_full ;
var SAYAC_flush;
var SAYAC_str ;
var SAYAC_three;
var SAYAC_twoPair;
var SAYAC_pair ;
var SAYAC_highCard ;    
var elSayaci ;

function Deal_Cards_Randomly(){
    SAYAC_royal = 0 ;
    SAYAC_strFlush = 0;
    SAYAC_four = 0;
    SAYAC_full = 0;
    SAYAC_flush = 0;
    SAYAC_str = 0;
    SAYAC_three = 0;
    SAYAC_twoPair = 0;
    SAYAC_pair = 0;
    SAYAC_highCard = 0;    
    elSayaci=0;
    
        for(i=0; i<9; i++){document.getElementById("tableCard"+i).style="border: 0px solid white;";}
        pokerSym = ["a", "b", "c", "d"];
        aNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        bNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        cNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        dNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        var plAndTabCardsPNG           = new Array(9);
        plAndTabCardSymNum         = new Array(9);
        plAndTabCardSym            = new Array(9);
        plAndTabCardNum            = new Array(9);
        var plAndTabCardNumBySym       = new Array(9);
        var plAndTabCardSymByNum       = new Array(9);
        for(var i=0; i<9; i++){
            var randomSym = Math.floor(Math.random() * pokerSym.length);
            sym = pokerSym[randomSym];
            if(sym=="a"){ 
                var aRandomNum  = Math.floor(Math.random() * aNum.length);
                var convertToImage  =   (sym + aNum[aRandomNum] + ".png" );
                document.getElementById("tableCard"+i).src=convertToImage;
                plAndTabCardsPNG[i]         = convertToImage;
                plAndTabCardSymNum[i]       = sym + aNum[aRandomNum];
                plAndTabCardSym[i]          = sym;
                plAndTabCardNum[i]          = aNum[aRandomNum];
                plAndTabCardNumBySym[i]     = aNum[aRandomNum];
                plAndTabCardSymByNum[i]     = sym;
                aNum.splice(aRandomNum, 1); 
            }
            else if(sym=="b"){ 
                var bRandomNum = Math.floor(Math.random() * bNum.length);
                var convertToImage=(sym + bNum[bRandomNum] + ".png" );
                document.getElementById("tableCard"+i).src=convertToImage;
                plAndTabCardsPNG[i]         = convertToImage;
                plAndTabCardSymNum[i] = sym + bNum[bRandomNum];
                plAndTabCardSym[i]       = sym;
                plAndTabCardNum[i]       = bNum[bRandomNum];
                plAndTabCardNumBySym[i] = bNum[bRandomNum];
                plAndTabCardSymByNum[i] = sym;
                bNum.splice(bRandomNum, 1); 
            }
            else if(sym=="c"){ 
                var cRandomNum = Math.floor(Math.random() * cNum.length);
                var convertToImage=(sym + cNum[cRandomNum] + ".png" );
                document.getElementById("tableCard"+i).src=convertToImage;
                plAndTabCardsPNG[i]         = convertToImage;
                plAndTabCardSymNum[i] = sym + cNum[cRandomNum];
                plAndTabCardSym[i]       = sym;
                plAndTabCardNum[i]       = cNum[cRandomNum];
                plAndTabCardNumBySym[i] = cNum[cRandomNum];
                plAndTabCardSymByNum[i] = sym;
                cNum.splice(cRandomNum, 1); 
            }
            else if(sym=="d"){ 
                var dRandomNum = Math.floor(Math.random() * dNum.length);
                var convertToImage=(sym + dNum[dRandomNum] + ".png" );
                document.getElementById("tableCard"+i).src=convertToImage;
                plAndTabCardsPNG[i]         = convertToImage;
                plAndTabCardSymNum[i] = sym + dNum[dRandomNum];
                plAndTabCardSym[i]       = sym;
                plAndTabCardNum[i]       = dNum[dRandomNum];
                plAndTabCardNumBySym[i] = dNum[dRandomNum];
                plAndTabCardSymByNum[i] = sym;
                dNum.splice(dRandomNum, 1); 
            }   
        }
        for(v=0; v<7; v++){ p1CardPNG[v]         = plAndTabCardsPNG[v];     }
        for(v=2; v<9; v++){ p2CardPNG[v-2]       = plAndTabCardsPNG[v];     }

        for(v=0; v<7; v++){ p1CardNumSym[v]      = plAndTabCardSymNum[v];   }
        for(v=2; v<9; v++){ p2CardNumSym[v-2]    = plAndTabCardSymNum[v];   }

        for(v=0; v<7; v++){ p1CardSym[v]         = plAndTabCardSym[v];      }
        for(v=2; v<9; v++){ p2CardSym[v-2]       = plAndTabCardSym[v];      }

        for(v=0; v<7; v++){ p1CardNum[v]         = plAndTabCardNum[v];      }
        for(v=2; v<9; v++){ p2CardNum[v-2]       = plAndTabCardNum[v];      }

        for(v=0; v<7; v++){ p1CardNumBySym[v]    = plAndTabCardNumBySym[v]; }
        for(v=2; v<9; v++){ p2CardNumBySym[v-2]  = plAndTabCardNumBySym[v]; }

        p1CardPNG.sort();     p2CardPNG.sort(); 
        p1CardNumSym.sort();  p2CardNumSym.sort();
        p1CardSym.sort();     p2CardSym.sort();
        p1CardNum.sort();     p2CardNum.sort(); 
        for(r=6; r>-1; r--){   //SEMBOLE GÖRE NUMARA SIRALAMA İŞİ
            for(e=6; e>-1; e--){
                if(p1CardNumSym[r]==(p1CardSym[r]+p1CardNum[e])){
                    p1CardNumBySym[r] = p1CardNum[e];
                }
                if(p2CardNumSym[r]==(p2CardSym[r]+p2CardNum[e])){
                    p2CardNumBySym[r] = p2CardNum[e];
                }
            }
        }
        for(var p1=0; p1<7; p1++){
            document.getElementById("p1_card"+p1).src                      =p1CardPNG[p1];
            document.getElementById("p1_card_NumSym"+p1).innerHTML         =p1CardNumSym[p1];
            document.getElementById("p1_card_Sym"+p1).innerHTML            =p1CardSym[p1];
            document.getElementById("p1_card_Num"+p1).innerHTML            =p1CardNum[p1];
            document.getElementById("p1_card_NumBySym"+p1).innerHTML       =p1CardNumBySym[p1];
        }
        for (var p2=0; p2<7; p2++){
            document.getElementById("p2_card"+p2).src                    =p2CardPNG[p2];
            document.getElementById("p2_card_NumSym"+p2).innerHTML =p2CardNumSym[p2];
            document.getElementById("p2_card_Sym"+p2).innerHTML       =p2CardSym[p2];
            document.getElementById("p2_card_Num"+p2).innerHTML       =p2CardNum[p2];
            document.getElementById("p2_card_NumBySym"+p2).innerHTML       =p2CardNumBySym[p2];
        } 
      
        /*
        Check_Cards_For_RoyalFlush();     
        Check_Cards_For_StrFlush();     
       Check_Cards_For_Four();           
       Check_Cards_For_Full();     
        Check_Cards_For_Flush();     
        Check_Cards_For_Str();    
        Check_Cards_For_Three();
        Check_Cards_For_TwoPair();    
        Check_Cards_For_Pair();       
        Check_Cards_For_HighCard();    
        */

        

        Check_Cards_For_RoyalFlush();   
        if(SAYAC_royal == 0){
            Check_Cards_For_StrFlush();

            if(SAYAC_strFlush == 0){
                Check_Cards_For_Four();

                if(SAYAC_four == 0){
                    Check_Cards_For_Full();

                    if(SAYAC_full == 0){
                        Check_Cards_For_Flush();

                        if(SAYAC_flush == 0){
                            Check_Cards_For_Str(); 

                            if(SAYAC_str == 0){
                                Check_Cards_For_Three();

                                if(SAYAC_three == 0){
                                    Check_Cards_For_TwoPair();

                                    if(SAYAC_twoPair == 0){
                                        Check_Cards_For_Pair();

                                        if(SAYAC_pair == 0){
                                            Check_Cards_For_HighCard();

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  
        
        /*
        alert("royal fl. sayaç: " +
            SAYAC_royal + " --------- sıralı renk sayaç: " +
            SAYAC_strFlush + " --------- kare sayaç:  " +
            SAYAC_four  + "  --------- full sayaç: " +
            SAYAC_full  + "  --------- renk sayaç: " +
            SAYAC_flush + "  --------- düz sayaç: " +
            SAYAC_str + "  ---------------- üçlü sayaç: " +
            SAYAC_three  + "  --------- döper sayaç: " +
            SAYAC_twoPair + " --------- per sayaç:  " +
            SAYAC_pair  );
          */
            
}
function Check_Cards_For_RoyalFlush(){
    for(e=6; e>3; e--){
        for(f=e; f>(e-5); f--){
            var i0=p1CardSym[f];  var i1=p1CardSym[f-1];    var i2=p1CardSym[f-2]; var i3=p1CardSym[f-3]; var i4=p1CardSym[f-4]; var g0=p1CardNumBySym[f]; var g1=p1CardNumBySym[f-1]; var g2=p1CardNumBySym[f-2];var g3=p1CardNumBySym[f-3]; var g4=p1CardNumBySym[f-4];
            //////////////////////////////////////////////////////////////////////////
            var d0=p2CardSym[f]; var d1=p2CardSym[f-1]; var d2=p2CardSym[f-2]; var d3=p2CardSym[f-3];var d4=p2CardSym[f-4];var f0=p2CardNumBySym[f];var f1=p2CardNumBySym[f-1]; var f2=p2CardNumBySym[f-2]; var f3=p2CardNumBySym[f-3]; var f4=p2CardNumBySym[f-4];

            if(i0==i1 && i1==i2 && i2==i3 && i3==i4){ // hepsi aynı simge ise
                if(g0==0.14 && g1==0.13 || g2==0.12 || g3==0.11 || g4==0.1){ 
                    var royalSayi_p1=[g0,g1,g2,g3,g4];   
                    var royalHarf_p1=[i0];    

                    SAYAC_royal = SAYAC_royal + 1;
                    tabloGenel(("royal flush: "+royalSayi_p1), "---");
                    royalFlushRenklendir(royalSayi_p1, royalHarf_p1, 0, 6 );
                }
            } 
            if(d0==d1 && d1==d2 && d2==d3 && d3==d4){ 
                if(f0==0.14 && f1==0.13 && f2==0.12 && f3==0.11 && f4==0.1){
                    var royalSayi_p2=[f0,f1,f2,f3,f4];
                    var royalHarf_p2=[d0];

                    SAYAC_royal = SAYAC_royal + 1;
                    tabloGenel("---", ("royal flush: "+royalSayi_p2));
                    royalFlushRenklendir(royalSayi_p2, royalHarf_p2, 2,8 );
                }
            }
        }  
    }   
}





function Check_Cards_For_StrFlush(){ // sıralı renk 
    
        for(var t in pokerSym){    
            var sayP1 = 0;var sayP2 = 0;
            var ayniSayiP1 = new Array();
            var ayniSayiP2 = new Array();
            var ayniHarfP1 = new Array();;
            var ayniHarfP2 = new Array();;
            var siralilarP1 = 0;var siralilarP2 = 0;

            for(x=0; x<7; x++){
                if(p1CardSym[x]==pokerSym[t]){
                    sayP1 = sayP1 + 1;
                    ayniSayiP1.push(p1CardNumBySym[x]);
                    ayniHarfP1.push(pokerSym[t]);
                }
                else{break;}
            }
            for(x=0; x<7; x++){
                if(p2CardSym[x]==pokerSym[t]){
                    sayP2 = sayP2 + 1;
                    ayniSayiP2.push(p2CardNumBySym[x]);
                    ayniHarfP2.push(pokerSym[t]);
                }
                else{break;}
            }
            
            if(sayP1>4){
                for(p=0; p<ayniSayiP1.length; p++){ 
                    if(ayniSayiP1[p]==0.14){ayniSayiP1[p]=1;}
                    else {ayniSayiP1[p] =  (ayniSayiP1[p] * 100).toFixed(0);}
                }
                ayniSayiP1.sort(function(a, b){return a - b});
                break;
            }
            if(sayP2>4){
                for(p=0; p<ayniSayiP2.length; p++){ 
                    if(ayniSayiP2[p]==0.14){ayniSayiP2[p]=1;}
                    else {ayniSayiP2[p] =  (ayniSayiP2[p] * 100).toFixed(0);}
                }
                ayniSayiP2.sort(function(a, b){return a - b});
                break;
            }
        }
        if(ayniSayiP1.length==6){ayniSayiP1.shift();}
        if(ayniSayiP1.length==7){ayniSayiP1.shift(); ayniSayiP1.shift();}
        if(ayniSayiP2.length==6){ayniSayiP2.shift();}
        if(ayniSayiP2.length==7){ayniSayiP2.shift(); ayniSayiP2.shift();}

        for(var g=0; g<ayniSayiP1.length; g++){ 
            if((parseInt(ayniSayiP1[g])+1)==ayniSayiP1[g+1]){
                siralilarP1=siralilarP1+1;
            }
            else{break;}
        }
        for(x=0; x<ayniSayiP1.length; x++){
            ayniSayiP1[x]=ayniSayiP1[x]*0.01;
        }
        if(siralilarP1==4 && siralilarP2==4){ 
            SAYAC_strFlush = SAYAC_strFlush + 1; 
            if(ayniSayiP1[0]>ayniSayiP2[0]){
                tabloGenel(("sıralı renk: "+ayniSayiP1), "---" );
                royalFlushRenklendir(ayniSayiP1,ayniHarfP1, 0,6);
                
            }
            else if(ayniSayiP1[0]<ayniSayiP2[0]){
                tabloGenel("---", ("sıralı renk: "+ayniSayiP2));
                royalFlushRenklendir(ayniSayiP2,ayniHarfP2, 2,8);
            }
            else{
                tabloGenel(("sıralı renk: "+ayniSayiP1), ("sıralı renk: "+ayniSayiP2));
                royalFlushRenklendir(ayniSayiP1,ayniHarfP1, 0,6);
                royalFlushRenklendir(ayniSayiP2,ayniHarfP2, 2,8);
            }
            
        }
        if(siralilarP1==4 && siralilarP2 != 4 ){
            SAYAC_strFlush = SAYAC_strFlush + 1;
            tabloGenel(("sıralı renk: "+ayniSayiP1), "---" );
            royalFlushRenklendir(ayniSayiP1,ayniHarfP1, 0,6);
            
        }  

        for(var g=0; g<ayniSayiP2.length; g++){ 
            if((parseInt(ayniSayiP2[g])+1)==ayniSayiP2[g+1]){
                siralilarP2=siralilarP2+1;
            }
            else{break;}
        }
    
        for(x=0; x<ayniSayiP2.length; x++){
            ayniSayiP2[x]=ayniSayiP2[x]*0.01;
            
        }
        if(siralilarP2==4 && siralilarP1!=4){ 
            SAYAC_strFlush = SAYAC_strFlush + 1;
            tabloGenel("---", ("sıralı renk: "+ayniSayiP2));
            royalFlushRenklendir(ayniSayiP2,ayniHarfP2, 2,8);
            
        } 
    
}
function royalFlushRenklendir(rSayi, rHarf, bas, bit){ //0-6, 2-8
    for(var harf in rHarf){
        for(var yuksek in rSayi){
            for(var masadaki=bas; masadaki<=bit; masadaki++){
                if((rHarf[harf]+rSayi[yuksek]==plAndTabCardSymNum[masadaki]) ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
            }
        } 
    }
}




function Check_Cards_For_Four(){ 
        var dort_p1 =0;                         var dort_p2 =0;
        var kare4_p1 = new Array();             var kare5_p1 = new Array();
        var kareYuksekKart_p1 = new Array();    var kareYuksekKart_p2 = new Array();
        var kare4_p2 = new Array();             var kare5_p2 = new Array();
        var kare = 4;
        
        var pNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        for(var i=12; i>-1; i--){
            for(var x=6; x>-1; x--){
                if(pNum[i]==p1CardNum[x]){
                    dort_p1 = dort_p1 + 1;
                    kare4_p1.push(p1CardNum[x]);
                    kare5_p1.push(p1CardNum[x]);
                }
                else{
                    kareYuksekKart_p1.push(p1CardNum[x]);
                }
            }
            if(kare4_p1.length==kare){
                kare5_p1.push(kareYuksekKart_p1[0]);
                break;
            }
            else{
                kare4_p1=[];
                kare5_p1=[];
                kareYuksekKart_p1=[];
            }
            dort_p1=0;
        }

        for(var i=12; i>-1; i--){
            for(var x=6; x>-1; x--){
                if(pNum[i]==p2CardNum[x]){
                    dort_p2 = dort_p2 + 1;
                    kare4_p2.push(p2CardNum[x]);
                    kare5_p2.push(p2CardNum[x]);
                }
                else{
                    kareYuksekKart_p2.push(p2CardNum[x]);
                }
            }
            if(dort_p2==kare){
                kare5_p2.push(kareYuksekKart_p2[0]);
                break;
            }
            else{
                kare4_p2=[];
                kare5_p2=[];
                kareYuksekKart_p2=[];
            }
            dort_p2=0;
        }

        if((kare5_p1.length==kare+1 ) && (kare5_p2.length==kare+1)){ 
            SAYAC_four = SAYAC_four + 1;
            if(kare5_p1[0] > kare5_p2[0]){
                tabloGenel(("kare: "+ kare5_p1 )," --- ");
                kareRenklendir(kare4_p1, kareYuksekKart_p1,0,6);
                
            }
            else if(kare5_p1[0] < kare5_p2[0]){
                tabloGenel(" --- ",("kare: "+ kare5_p2));
                kareRenklendir(kare4_p2, kareYuksekKart_p2,2,8);
            }
            else if(kare5_p1[0] == kare5_p2[0]){
                if(kare5_p1[kare] > kare5_p2[kare]){
                    tabloGenel(("kare: "+ kare5_p1)," --- ");
                    kareRenklendir(kare4_p1, kareYuksekKart_p1,0,6);
                }
                else if(kare5_p1[kare] < kare5_p2[kare]){
                    tabloGenel( " --- ",("kare: "+ kare5_p2 ));
                    kareRenklendir(kare4_p2, kareYuksekKart_p2,2,8);
                }
                else if((kare5_p1[kare] == kare5_p2[kare])){
                    tabloGenel(("kare: "+ kare5_p1 ),("kare: "+ kare5_p2 ));
                    kareRenklendir(kare4_p1, kareYuksekKart_p1,0,6);
                    kareRenklendir(kare4_p2, kareYuksekKart_p2,2,8);
                }
            }
            
        }
        else if(kare5_p1.length==kare+1 ){
            SAYAC_four = SAYAC_four + 1;
            tabloGenel(("kare: "+ kare5_p1 ), " --- ");
            kareRenklendir(kare4_p1, kareYuksekKart_p1,0,6);
            
            
        }
        else if(kare5_p2.length==kare+1 ){
            SAYAC_four = SAYAC_four + 1;
            tabloGenel(" --- ",("kare: "+ kare5_p2 ));
            kareRenklendir(kare4_p2, kareYuksekKart_p2,2,8);
            
            
        }
    
}
function kareRenklendir(dizi4, yuksekKart, baslangic, bitis){ //0-6, 2-8
    var sayYuksek =0;
    for(var harf in pokerSym){
        for(var d4 in dizi4){
            for(var masadaki=baslangic; masadaki<=bitis; masadaki++){
                if((pokerSym[harf]+dizi4[d4]==plAndTabCardSymNum[masadaki]) ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
                if((pokerSym[harf]+yuksekKart[0]==plAndTabCardSymNum[masadaki])){
                    if(sayYuksek<2){
                        document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                    }
                    sayYuksek = sayYuksek + 1;
                }
            }
        }
    }
}





function Check_Cards_For_Full(){ // ful
        var p1CardNumCopy = new Array(); var p2CardNumCopy = new Array();
        var fullDizisiP1 = new Array();  var fullDizisiP2 = new Array();
        for(x=0; x<7; x++){
            p1CardNumCopy.push(p1CardNum[x]);
            p2CardNumCopy.push(p2CardNum[x]);
        }
        for(h=6; h>1; h--){
            for(t=h-1; t>h-3; t--){
                if(p1CardNumCopy[h]==p1CardNumCopy[t] && p1CardNumCopy[h]==p1CardNumCopy[t-1]){
                    fullDizisiP1.push(p1CardNumCopy[h]);
                    fullDizisiP1.push(p1CardNumCopy[t]);
                    fullDizisiP1.push(p1CardNumCopy[t-1]);
                    p1CardNumCopy.splice(h, 1);
                    p1CardNumCopy.splice(t, 1);
                    p1CardNumCopy.splice((t-1), 1);
                    for(f=3; f>0; f--){
                        for(k=f-1; k>-1; k--){
                            if(p1CardNumCopy[f]==p1CardNumCopy[k]){
                                fullDizisiP1.push(p1CardNumCopy[f]);
                                fullDizisiP1.push(p1CardNumCopy[k]);
                            }
                            else{break;}
                        }
                    }
                }
            }
        }
        for(h=6; h>1; h--){
            for(t=h-1; t>h-3; t--){
                if(p2CardNumCopy[h]==p2CardNumCopy[t] && p2CardNumCopy[h]==p2CardNumCopy[t-1]){
                    fullDizisiP2.push(p2CardNumCopy[h]);
                    fullDizisiP2.push(p2CardNumCopy[t]);
                    fullDizisiP2.push(p2CardNumCopy[t-1]);
                    p2CardNumCopy.splice(h, 1);
                    p2CardNumCopy.splice(t, 1);
                    p2CardNumCopy.splice((t-1), 1);
                    for(f=3; f>0; f--){
                        for(k=f-1; k>-1; k--){
                            if(p2CardNumCopy[f]==p2CardNumCopy[k]){
                                fullDizisiP2.push(p2CardNumCopy[f]);
                                fullDizisiP2.push(p2CardNumCopy[k]);
                            }
                            else{break;}
                        }
                    }
                }
            }
        }
        if(fullDizisiP1.length==6){fullDizisiP1.slice(5,1);}
        if(fullDizisiP1.length==7){fullDizisiP1.slice(5,2);}
        if(fullDizisiP2.length==6){fullDizisiP2.slice(5,1);}
        if(fullDizisiP2.length==7){fullDizisiP2.slice(5,2);}

        if(fullDizisiP1.length==5 && fullDizisiP2.length==5){ 
            SAYAC_full=SAYAC_full+1;

            if(fullDizisiP1[0] > fullDizisiP2[0]){
               
                tabloGenel(("ful: "+ fullDizisiP1 )," --- ");
                fulRenklendir(fullDizisiP1, 0,6);
            }
            else if(fullDizisiP1[0] < fullDizisiP2[0]){
               
                tabloGenel(" --- ",("ful: "+ fullDizisiP2 ));
                fulRenklendir(fullDizisiP2, 2,8);
                

            }
            else if(fullDizisiP1[0] == fullDizisiP2[0]){
                
                if(fullDizisiP1[3] > fullDizisiP2[3]){
                    tabloGenel(("ful: "+ fullDizisiP1 )," --- ");
                    fulRenklendir(fullDizisiP1, 0,6);
                    

                }
                else if(fullDizisiP1[3] < fullDizisiP2[3]){
                    tabloGenel( " --- ",("ful: "+ fullDizisiP2 ));
                    fulRenklendir(fullDizisiP2, 2,8);

                }
                else if((fullDizisiP1[3] == fullDizisiP2[3])){
                    tabloGenel(("ful: "+ fullDizisiP1 ),("ful: "+ fullDizisiP2 ));
                    fulRenklendir(fullDizisiP1, 0,6); 
                    fulRenklendir(fullDizisiP2, 2,8);
                }
            }
        }
        else if(fullDizisiP1.length==5){
            SAYAC_full=SAYAC_full+1;
            tabloGenel(("ful: " + fullDizisiP1), "---");
            fulRenklendir(fullDizisiP1, 0, 6);
            
            
        }
        else if(fullDizisiP2.length==5){
            SAYAC_full=SAYAC_full+1;
            tabloGenel( "---",("ful: " + fullDizisiP2));
            fulRenklendir(fullDizisiP2, 2, 8);
            
        }
    
    
}
function fulRenklendir(dizi,baslangic, bitis){ //0-6, 2-8
    for(var harf in pokerSym){
        for(var d in dizi){
            for(var masadaki=baslangic; masadaki<=bitis; masadaki++){
                if((pokerSym[harf]+dizi[d]==plAndTabCardSymNum[masadaki]) ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
            }
        }
    }
}





function Check_Cards_For_Flush(){ // renk
        for(var t in pokerSym){ // STR FlUSH İÇİN AYNI SEMBOLLERİ, 5+ ADETSE DİZİYE ATMA İŞİ
            var sayP1 = 0;var sayP2 = 0;
            var ayniSayiP1 = new Array();
            var ayniSayiP2 = new Array();
            var ayniHarfP1 = new Array();var ayniHarfP2 = new Array();
            for(x=0; x<7; x++){
                if(p1CardSym[x]==pokerSym[t]){
                    sayP1 = sayP1 + 1;
                    ayniSayiP1.push(p1CardNumBySym[x]);
                    ayniHarfP1.push(p1CardSym[x]);
                }
                else{break;}
            }
            for(x=0; x<7; x++){
                if(p2CardSym[x]==pokerSym[t]){
                    sayP2 = sayP2 + 1;
                    ayniSayiP2.push(p2CardNumBySym[x]);
                    ayniHarfP2.push(p2CardSym[x]);
                }
                else{break;}
            }
            if(sayP1>4){
                ayniSayiP1.sort(function(a, b){return a - b});
                ayniHarfP1.sort(function(a, b){return a - b});
                break;
            }
            if(sayP2>4){
                ayniSayiP2.sort(function(a, b){return a - b});
                ayniHarfP2.sort(function(a, b){return a - b});
                break;
            }
        }
        if(ayniSayiP1.length==6){ayniSayiP1.shift();}
        if(ayniSayiP1.length==7){ayniSayiP1.shift(); ayniSayiP1.shift();}
        if(ayniHarfP1.length==6){ayniHarfP1.shift();}
        if(ayniHarfP1.length==7){ayniHarfP1.shift();ayniHarfP1.shift();}
        if(ayniSayiP2.length==6){ayniSayiP2.shift();}
        if(ayniSayiP2.length==7){ayniSayiP2.shift(); ayniSayiP2.shift();}
        if(ayniHarfP2.length==6){ayniHarfP2.shift();}
        if(ayniHarfP2.length==7){ayniHarfP2.shift();ayniHarfP2.shift();}


        if(sayP1>=5 && sayP2>=5){ 
            SAYAC_flush=SAYAC_flush+1;
            
            if(ayniSayiP1[4]>ayniSayiP2[4])        {
                tabloGenel(("renk: "+ayniSayiP1 ), "---" );
                
                p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                
            }
            else if((ayniSayiP1[4]<ayniSayiP2[4])) {
                tabloGenel( "---", ("renk: "+ayniSayiP2 ) );
                
                p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);
            }
            else{
                if(ayniSayiP1[3]>ayniSayiP2[3])        {
                    tabloGenel(("renk: "+ayniSayiP1 ), "---" );
                    
                    p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                }
                else if((ayniSayiP1[3]<ayniSayiP2[3])) {
                    tabloGenel( "---", ("renk: "+ayniSayiP2 ) );
                    
                    p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);
                }
                else{
                    if(ayniSayiP1[2]>ayniSayiP2[2])        {
                        tabloGenel(("renk: "+ayniSayiP1 ), "---" );
                        
                        p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                    }
                    else if((ayniSayiP1[2]<ayniSayiP2[2])) {
                        tabloGenel( "---", ("renk: "+ayniSayiP2 ) );
                        
                        p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);                    }
                    else{
                        if(ayniSayiP1[1]>ayniSayiP2[1])        {
                            tabloGenel(("renk: "+ayniSayiP1 ), "---" );
                            
                            p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                        }
                        else if((ayniSayiP1[1]<ayniSayiP2[1])) {
                            tabloGenel( "---", ("renk: "+ayniSayiP2 ) );
                            
                            p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);                        }
                        else{
                            if(ayniSayiP1[0]>ayniSayiP2[0])        {
                                tabloGenel(("renk: "+ayniSayiP1 ), "---" );
                                
                                p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                            }
                            else if((ayniSayiP1[0]<ayniSayiP2[0])) {
                                tabloGenel( "---", ("renk: "+ayniSayiP2 ) );
                                
                                p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);                            }
                            else{
                                tabloGenel( ("renk: "+ayniSayiP1 ) , ("renk: "+ayniSayiP2 ) );
                                
                                p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
                                p2KazanirsaRenklendirSariCerceve(sayP2, sayP1, ayniSayiP2, ayniHarfP2, plAndTabCardNum, plAndTabCardSym);
                            }  
                        }
                    }
                }
            } 
        }
        else if(sayP1>=5 && sayP2 <5 ){ 
            SAYAC_flush=SAYAC_flush+1;
            tabloGenel(("renk: "+ayniSayiP1 ), "---" ); 
            p1KazanirsaRenklendirSariCerceve(ayniSayiP1,ayniHarfP1,plAndTabCardNum,plAndTabCardSym);
        } 
        else if(sayP2>=5 && sayP1<5){ 
            SAYAC_flush=SAYAC_flush+1;
            tabloGenel( "---", ("renk: "+ayniSayiP2 ) ); 
            p2KazanirsaRenklendirSariCerceve(ayniSayiP2,ayniHarfP2,plAndTabCardNum,plAndTabCardSym);
            
        }
    
}

function p1KazanirsaRenklendirSariCerceve(siraliSayiHalinde, siraliHarfHalinde, genel9luNumDizi, genel9luHarfDizi){
    //if(sayacP1>sayacP2){
        for(var t=0; t<6; t++){
            for(var m=0; m<7; m++){
                if(siraliSayiHalinde[t] == genel9luNumDizi[m] && siraliHarfHalinde[t] == genel9luHarfDizi[m] ){
                    document.getElementById("tableCard" + m).style="border: 4px solid yellow;"; 
                }
            } 
        }     
    //}
}
function p2KazanirsaRenklendirSariCerceve(siraliSayiHalinde, siraliHarfHalinde, genel9luNumDizi, genel9luHarfDizi){
    //if(sayacP2>sayacP1){
        for(var t=0; t<6; t++){
            for(var m=2; m<9; m++){
                if(siraliSayiHalinde[t] == genel9luNumDizi[m] && siraliHarfHalinde[t] == genel9luHarfDizi[m] ){
                    document.getElementById("tableCard" + m).style="border: 4px solid yellow;";
                }
            } 
        }     
    //}
}








function Check_Cards_For_Str(){ // düz
        var strP1 = new Array();   var strP2 = new Array();
        var sP1 = 0;               var sP2 = 0;
        for(i=0; i<7; i++){
            strP1[i] = (p1CardNum[i]*100).toFixed(0);
            strP2[i] = (p2CardNum[i]*100).toFixed(0);
        } 
        let uniqueStrP1 = [...new Set(strP1)];
        let uniqueStrP2 = [...new Set(strP2)];
    
        if(uniqueStrP1.includes('14') && uniqueStrP1.includes('2') && uniqueStrP1.includes('3') &&uniqueStrP1.includes('4') &&uniqueStrP1.includes('5') && !uniqueStrP1.includes('6') && 
           (!uniqueStrP1.includes('10') || !uniqueStrP1.includes('11') || !uniqueStrP1.includes('12') || !uniqueStrP1.includes('13'))
           ){
            uniqueStrP1[uniqueStrP1.indexOf('14')]=1;
        }else{}

        if(uniqueStrP2.includes('14') && uniqueStrP2.includes('2') && uniqueStrP2.includes('3') &&uniqueStrP2.includes('4') &&uniqueStrP2.includes('5') && !uniqueStrP2.includes('6') && 
           (!uniqueStrP2.includes('10') || !uniqueStrP2.includes('11') || !uniqueStrP2.includes('12') || !uniqueStrP2.includes('13'))
           ){
            uniqueStrP2[uniqueStrP2.indexOf('14')]=1;
        }else{}
    
        uniqueStrP1.sort(function(a, b){return a - b});
        uniqueStrP2.sort(function(a, b){return a - b});
    
        for(var g=uniqueStrP1.length-1; g>0; g--){
            if(parseInt(uniqueStrP1[g]-1)==uniqueStrP1[g-1]){
                sP1=sP1+1;
            }
            else{break;}
        }
        for(var g=uniqueStrP2.length-1; g>0; g--){
            if(parseInt(uniqueStrP2[g]-1)==uniqueStrP2[g-1]){
                sP2=sP2+1;
            }
            else{break;}
        }
        if(uniqueStrP1.length==6){uniqueStrP1.shift();}
        if(uniqueStrP1.length==7){uniqueStrP1.shift(); uniqueStrP1.shift();}
        if(uniqueStrP2.length==6){uniqueStrP2.shift();}
        if(uniqueStrP2.length==7){uniqueStrP2.shift(); uniqueStrP2.shift();}
        
        for(var x=0; x<5; x++){
            uniqueStrP1[x]=(uniqueStrP1[x]*0.01).toFixed(2);
            uniqueStrP2[x]=(uniqueStrP2[x]*0.01).toFixed(2);
            if(uniqueStrP1[x]==0.10){
                uniqueStrP1[x]=0.1;
            }
            if(uniqueStrP2[x]==0.10){
                uniqueStrP2[x]=0.1;
            }
        }
        //dizileriKarsilastirSTR(4,sP1,sP2,uniqueStrP1,uniqueStrP2," Düz: ", " Düz: "); 
        SAYAC_str = 0;
        if(sP1==4 && sP2==4){ 
            SAYAC_str=SAYAC_str+1;  
            if      (uniqueStrP1[4]>uniqueStrP2[4]) {
                tabloGenel(("Düz: " + uniqueStrP1 ), "---" );
                renklendirSTR1(uniqueStrP1, 0, 6);
                
            }
            else if (uniqueStrP1[4]<uniqueStrP2[4]) {
                tabloGenel( "---", ("Düz: " + uniqueStrP2 ) );
                renklendirSTR2(uniqueStrP2, 8,2);
                
            }
            else{   
                if     (uniqueStrP1[3]>uniqueStrP2[3]) {
                    tabloGenel(("Düz: "+uniqueStrP1 ), "---" );
                    renklendirSTR1(uniqueStrP1, 0, 6); 
                                          
            }
                else if(uniqueStrP1[3]<uniqueStrP2[3]) {
                    tabloGenel( "---", ("Düz: "+uniqueStrP2 ) );
                    renklendirSTR2(uniqueStrP2, 8,2);
                    
                }
                else{
                    if(uniqueStrP1[2]>uniqueStrP2[2])        {
                        tabloGenel(("Düz: "+uniqueStrP1 ), "---" );
                        renklendirSTR1(uniqueStrP1, 0, 6);
                        
                }
                    else if((uniqueStrP1[2]<uniqueStrP2[2])) {
                        tabloGenel( "---", ("Düz: "+uniqueStrP2 ) );
                        renklendirSTR2(uniqueStrP2,8,2);
                        
                    }
                    else{
                        if(uniqueStrP1[1]>uniqueStrP2[1])        {
                            tabloGenel(("Düz: "+uniqueStrP1 ), "---" );
                            renklendirSTR1(uniqueStrP1, 0, 6);
                            
                        }
                        else if((uniqueStrP1[1]<uniqueStrP2[1])) {
                            tabloGenel( "---", ("Düz: "+uniqueStrP2 ) );
                            renklendirSTR2(uniqueStrP2, 8,2);
                            
                        }
                        else{
                            if(uniqueStrP1[0]>uniqueStrP2[0])        {
                                tabloGenel(("Düz: "+uniqueStrP1 ), "---" );
                                renklendirSTR1(uniqueStrP1, 0, 6);
                                
                            }
                            else if((uniqueStrP1[0]<uniqueStrP2[0])) {
                                tabloGenel( "---", ("Düz: "+uniqueStrP2 ) );
                                renklendirSTR2(uniqueStrP2, 8,2);
                                
                            }
                            else{
                                tabloGenel( ("Düz: "+uniqueStrP1 ) , ("Düz: "+uniqueStrP2 ) );
                                renklendirSTR1(uniqueStrP1, 0, 6);
                                renklendirSTR2(uniqueStrP2, 8,2);
                                
                            }
                        }
                    }
                }
            } 
        }
        else if(sP1==4 && sP2!=4){ 
            SAYAC_str=SAYAC_str+1;   
            tabloGenel((":Düz: " + uniqueStrP1), "---" );
            renklendirSTR1(uniqueStrP1, 0, 6);
            
       
        }
        else if(sP2==4 && sP1!=4){ 
            SAYAC_str=SAYAC_str+1;   
            tabloGenel("---" , (":Düz: " + uniqueStrP2));
            renklendirSTR2(uniqueStrP2, 8,2);
            
        }
    
}
function renklendirSTR1(dizi, bas, bit){ //0-6
    for(var x=0; x<5; x++){
        if(dizi[x]==0.01){
            dizi[x]=0.14;
        }
    }
    var say;
    for(var harf in pokerSym){
        for(var d in dizi){
            for(var masadaki=bas; masadaki<=bit; masadaki++){
                say=0;
                for(p=masadaki+1; p<=bit; p++){
                    if(plAndTabCardNum[masadaki]==plAndTabCardNum[p]){
                        say=say+1;
                    }
                }
                if((pokerSym[harf]+dizi[d]==plAndTabCardSymNum[masadaki]) && say==0){           
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
            }   
        }
    }
}
function renklendirSTR2(dizi, bas, bit){ // 8-2
    for(var x=0; x<5; x++){
        if(dizi[x]==0.01){
            dizi[x]=0.14;
        }
    }
    var say;
    for(var harf in pokerSym){
        for(var d in dizi){
            for(var masadaki=bas; masadaki>=bit; masadaki--){
                say=0;
                for(p=masadaki-1; p>=bit; p--){
                    if(plAndTabCardNum[masadaki]==plAndTabCardNum[p]){
                        say=say+1;
                    }
                }
                if((pokerSym[harf]+dizi[d]==plAndTabCardSymNum[masadaki]) && say==0){           
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
            }   
        }
    }
}

function Check_Cards_For_Three(){ // üçlü
    
        var uc_p1 =0;                           var uc_p2 =0;
        var uclu3_p1 = new Array();             var uclu3_p2 = new Array();
        var uclu5_p1 = new Array();             var uclu5_p2 = new Array();
        var ucluYuksekKart_p1 = new Array();    var ucluYuksekKart_p2 = new Array();
        var uclu = 3;

        var pNum     = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14];
        for(var i=12; i>-1; i--){
            for(var x=6; x>-1; x--){
                if(pNum[i]==p1CardNum[x]){
                    uc_p1 = uc_p1 + 1;
                    uclu3_p1.push(p1CardNum[x]);
                    uclu5_p1.push(p1CardNum[x]);
                }
                else{
                    ucluYuksekKart_p1.push(p1CardNum[x]);
                }
            }
            if(uclu3_p1.length==uclu){
                uclu5_p1.push(ucluYuksekKart_p1[0]);
                uclu5_p1.push(ucluYuksekKart_p1[1]);
                break;
            }
            else{
                uclu3_p1=[];
                uclu5_p1=[];
                ucluYuksekKart_p1=[];
            }
            uc_p1=0;
        }

        for(var i=12; i>-1; i--){
            for(var x=6; x>-1; x--){
                if(pNum[i]==p2CardNum[x]){
                    uc_p2 = uc_p2 + 1;
                    uclu3_p2.push(p2CardNum[x]);
                    uclu5_p2.push(p2CardNum[x]);
                }
                else{
                    ucluYuksekKart_p2.push(p2CardNum[x]);
                }
            }
            if(uc_p2==uclu){
                uclu5_p2.push(ucluYuksekKart_p2[0]);uclu5_p2.push(ucluYuksekKart_p2[1]);
                break;
            }
            else{
                uclu3_p2=[];
                uclu5_p2=[];
                ucluYuksekKart_p2=[];
            }
            uc_p2=0;
        }

        if((uclu5_p1.length==uclu+2 ) && (uclu5_p2.length==uclu+2)){ 
            if(uclu5_p1[0] > uclu5_p2[0]){
                tabloGenel(("uclu: "+ uclu5_p1)," --- ");
                ucluRenklendir(uclu3_p1, ucluYuksekKart_p1,0,6);
                SAYAC_three=SAYAC_three + 1 ;
            }
            else if(uclu5_p1[0] < uclu5_p2[0]){
                tabloGenel(" --- ",("uclu: "+ uclu5_p2 ));
                ucluRenklendir(uclu3_p2, ucluYuksekKart_p2,2,8);
                SAYAC_three=SAYAC_three + 1 ;
            }
            else if(uclu5_p1[0] == uclu5_p2[0]){
                if(uclu5_p1[uclu] > uclu5_p2[uclu]){
                    tabloGenel(("uclu: "+ uclu5_p1)," --- ");
                    ucluRenklendir(uclu3_p1, ucluYuksekKart_p1,0,6);
                    SAYAC_three=SAYAC_three + 1 ;
                }
                else if(uclu5_p1[uclu] < uclu5_p2[uclu]){
                    tabloGenel( " --- ",("uclu: "+ uclu5_p2));
                    ucluRenklendir(uclu3_p2, ucluYuksekKart_p2,2,8);
                    SAYAC_three=SAYAC_three + 1 ;
                }
                else if((uclu5_p1[uclu] == uclu5_p2[uclu])){
                    if(uclu5_p1[uclu+1] > uclu5_p2[uclu+1]){
                        tabloGenel(("uclu: "+ uclu5_p1 )," --- ");
                        ucluRenklendir(uclu3_p1, ucluYuksekKart_p1,0,6);
                        SAYAC_three=SAYAC_three + 1 ;
                    }
                    else if(uclu5_p1[uclu+1] < uclu5_p2[uclu+1]){
                        tabloGenel( " --- ",("uclu: "+ uclu5_p2 ));
                        ucluRenklendir(uclu3_p2, ucluYuksekKart_p2,2,8);
                        SAYAC_three=SAYAC_three + 1 ;
                    }
                    else if((uclu5_p1[uclu+1] == uclu5_p2[uclu+1])){
                        tabloGenel(("uclu: "+ uclu5_p1),("uclu: "+ uclu5_p2 ));
                        ucluRenklendir(uclu3_p1, ucluYuksekKart_p1,0,6);
                        ucluRenklendir(uclu3_p2, ucluYuksekKart_p2,2,8);
                        SAYAC_three=SAYAC_three + 1 ;
                    }
                }
            }
        }
        else if(uclu5_p1.length==uclu+2 && uclu5_p2.length != uclu+2){
            tabloGenel(("uclu: "+ uclu5_p1 ), " --- ");
            ucluRenklendir(uclu3_p1, ucluYuksekKart_p1,0,6);
            SAYAC_three=SAYAC_three + 1 ;
        }
        else if(uclu5_p2.length==uclu+2 && uclu5_p1.length==uclu+2){
            tabloGenel(" --- ",("uclu: "+ uclu5_p2));
            ucluRenklendir(uclu3_p2, ucluYuksekKart_p2,2,8);
            SAYAC_three=SAYAC_three + 1 ;
        }
    
}
function ucluRenklendir(dizi4, yuksekKart, baslangic, bitis){ //0-6, 2-8
    var sayYuksek1 =0;var sayYuksek2 =0;
    for(var harf in pokerSym){
        for(var d4 in dizi4){
            for(var masadaki=baslangic; masadaki<=bitis; masadaki++){
                if((pokerSym[harf]+dizi4[d4]==plAndTabCardSymNum[masadaki]) ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
                if((pokerSym[harf]+yuksekKart[0]==plAndTabCardSymNum[masadaki])){
                    if(sayYuksek1<2){
                        document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                    }
                    sayYuksek1 = sayYuksek1 + 1;
                }
                if((pokerSym[harf]+yuksekKart[1]==plAndTabCardSymNum[masadaki])){
                    if(sayYuksek2<2){
                        document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                    }
                    sayYuksek2 = sayYuksek2 + 1;
                }
            }
        }
    }
}












function Check_Cards_For_TwoPair(){ // döper
    
        var doperDizi4_p1 = new Array();var doperDizi4_p2 = new Array(); 
        var doperDizi5_p1 = new Array();var doperDizi5_p2 = new Array();
        var yuksekKart_P1 = new Array();var yuksekKart_P2 = new Array();
        var perSayP1=0;var perSayP2=0;
        var say_1=0;var say_2=0;
        for(x=6; x>=0; x--){                                    
            for(t=x-1; t>=(x-3); t--){
                if(p1CardNum[x]==p1CardNum[t]){
                    say_1 = say_1 + 1;
                }
            }
            if(say_1==0){  
                yuksekKart_P1.push(p1CardNum[x]);  
            }
            if(say_1==1){  
                doperDizi4_p1.push(p1CardNum[x]);   doperDizi4_p1.push(p1CardNum[x]);
                doperDizi5_p1.push(p1CardNum[x]);   doperDizi5_p1.push(p1CardNum[x]);
                x=x-1;      
                perSayP1=perSayP1+1; 
            }
            if(say_1==2){  
                doperDizi4_p1=[];   doperDizi5_p1=[];
                yuksekKart_P1=[];
                break;
            }
            if(say_1==3){ 
                doperDizi4_p1=[];   doperDizi5_p1=[];
                yuksekKart_P1=[];
                break;
            }
            say_1=0; 
        }
        for(o=6; o>=0; o--){                     
            for(t=o-1; t>=(o-3); t--){
                if(p2CardNum[o]==p2CardNum[t]){     say_2 = say_2 + 1;      }
            }
            if(say_2==0){ yuksekKart_P2.push(p2CardNum[o]);  }
            if(say_2==1){   
                doperDizi4_p2.push(p2CardNum[o]);   doperDizi4_p2.push(p2CardNum[o]);
                doperDizi5_p2.push(p2CardNum[o]);   doperDizi5_p2.push(p2CardNum[o]);
                o=o-1;     
                perSayP1=perSayP1+1; 
            }
            if(say_2==2){  
                doperDizi4_p2=[];   doperDizi5_p2=[];
                yuksekKart_P2=[];
                break;
            }
            if(say_2==3){ 
                doperDizi4_p2=[];   doperDizi5_p2=[];
                yuksekKart_P2=[];
                break;
            }
            say_2=0; 
        }
        if(doperDizi4_p1.length==6 ){     
            doperDizi4_p1.splice(4,2);  doperDizi5_p1.splice(4,2);
        }
        if(doperDizi4_p2.length==6 ){   
            doperDizi4_p2.splice(4,2);  doperDizi5_p2.splice(4,2);
        }

        if(perSayP1==3){
            yuksekKart_P1=[];              
            yuksekKart_P1=[...p1CardNum];  
            doperDizi4_p1.reverse();
            var yuksekKarttanSilinecekIndisler = new Array();
            for(v=0; v<=4; v=v+2){              
                for(h=0; h<7; h++){        
                    if(doperDizi4_p1[v]==p1CardNum[h]){ 
                        yuksekKarttanSilinecekIndisler.push(h);
                    }
                }
            }
            for(g=0; g<5; g++){
                delete yuksekKart_P1[yuksekKarttanSilinecekIndisler[g]];
            }
            for(y=6; y>=0; y--){
                if(yuksekKart_P1[y]!=null){
                    var a=yuksekKart_P1[y];
                    yuksekKart_P1=[];
                    yuksekKart_P1[0]=a;
                    break;
                }
            }
            doperDizi5_p1.push(yuksekKart_P1[0]);
        }
        doperDizi5_p1.push(yuksekKart_P1[0]);
        if(doperDizi5_p1.length>5){
            if(doperDizi5_p1.length==6){doperDizi5_p1.splice(0,1);}
            if(doperDizi5_p1.length==7){doperDizi5_p1.shift();doperDizi5_p1.shift();}
        }
        if(perSayP2==3){
            yuksekKart_P2=[];               
            yuksekKart_P2=[...p2CardNum];  
            doperDizi4_p2.reverse();
            var yuksekKarttanSilinecekIndislerP2 = new Array();
            for(v=0; v<=4; v=v+2){        
                for(h=0; h<7; h++){      
                    if(doperDizi4_p2[v]==p2CardNum[h]){     
                        yuksekKarttanSilinecekIndislerP2.push(h);  
                    }
                }
            }
            for(g=0; g<5; g++){
                delete yuksekKart_P2[yuksekKarttanSilinecekIndislerP2[g]];
            }
            for(y=6; y>=0; y--){
                if(yuksekKart_P2[y]!=null){
                    var a=yuksekKart_P2[y];
                    yuksekKart_P2=[];
                    yuksekKart_P2[0]=a;
                    break;
                }
            }
            doperDizi5_p2.push(yuksekKart_P2[0]);
        }
        doperDizi5_p2.push(yuksekKart_P2[0]);

        if(doperDizi5_p2.length>5){
            if(doperDizi5_p2.length==6){doperDizi5_p2.splice(0,1);}
            if(doperDizi5_p2.length==7){doperDizi5_p2.shift();doperDizi5_p2.shift();}
        }
        if(doperDizi5_p1.length==5 && doperDizi5_p2.length==5){ 
            if(doperDizi5_p1[0]>doperDizi5_p2[0]){
                p1RenklendirDoper(doperDizi4_p1, yuksekKart_P1);
                tabloGenel(("doper5 : " + doperDizi5_p1 ) ,"---" );
                SAYAC_twoPair=SAYAC_twoPair+1;
            }
            else if(doperDizi5_p1[0] < doperDizi5_p2[0]){
                p2RenklendirDoper(doperDizi4_p2, yuksekKart_P2);
                tabloGenel("---" , ("doper5 : " + doperDizi5_p2 ) ); 
                SAYAC_twoPair=SAYAC_twoPair+1;
            }
            else{
                if(doperDizi5_p1[2]>doperDizi5_p2[2]){
                    p1RenklendirDoper(doperDizi4_p1, yuksekKart_P1);
                    tabloGenel(("doper5 : " + doperDizi5_p1 ) ,"---" );
                    SAYAC_twoPair=SAYAC_twoPair+1;
                }
                else if(doperDizi5_p1[2] < doperDizi5_p2[2]){
                    p2RenklendirDoper(doperDizi4_p2, yuksekKart_P2);
                    tabloGenel("---" , ("doper5 : " + doperDizi5_p2 ) ); 
                    SAYAC_twoPair=SAYAC_twoPair+1;
                }
                else if (doperDizi5_p1[2] == doperDizi5_p2[2]){
                    if(doperDizi5_p1[4]>doperDizi5_p2[4]){
                        p1RenklendirDoper(doperDizi4_p1, yuksekKart_P1);
                        tabloGenel(("doper5 : " + doperDizi5_p1 ) ,"---" );
                        SAYAC_twoPair=SAYAC_twoPair+1;
                    }
                    else if(doperDizi5_p1[4]<doperDizi5_p2[4]){
                        p2RenklendirDoper(doperDizi4_p2, yuksekKart_P2);
                        tabloGenel("---" , ("doper5 : " + doperDizi5_p2 ) ); 
                        SAYAC_twoPair=SAYAC_twoPair+1;
                    }
                    else if (doperDizi5_p1[4]==doperDizi5_p2[4]){
                        
                        p1RenklendirDoper(doperDizi4_p1, yuksekKart_P1);
                        p2RenklendirDoper(doperDizi4_p2, yuksekKart_P2);
                        tabloGenel(("doper5 : " + doperDizi5_p1 ) , ("doper5 : " + doperDizi5_p2) ); 
                        SAYAC_twoPair=SAYAC_twoPair+1;
                    }

                }
            }
        }
        else if(doperDizi5_p1.length==5 && doperDizi5_p2!=5){
            
            for(var harf in pokerSym){
                for(var doper4 in doperDizi4_p1){
                    for(var masadaki=0; masadaki<=6; masadaki++){
                        if((pokerSym[harf]+doperDizi4_p1[doper4]==plAndTabCardSymNum[masadaki]) && doperDizi4_p1.length==4 ){
                            document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                        }
                        if((pokerSym[harf]+yuksekKart_P1[0]==plAndTabCardSymNum[masadaki])){
                            document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                        }
                    }
                }
            }
            tabloGenel(("doper5 : " + doperDizi5_p1 ) ,"---" ); 
            SAYAC_twoPair=SAYAC_twoPair+1;
        }
        else if(doperDizi5_p2.length==5 && doperDizi5_p1!=5){
            for(var harf in pokerSym){
                for(var doper4 in doperDizi4_p2){
                    for(var masadaki=2; masadaki<=8; masadaki++){  //***************** */
                        if((pokerSym[harf]+doperDizi4_p2[doper4]==plAndTabCardSymNum[masadaki]) && doperDizi4_p2.length==4 ){
                            document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                        }
                        if((pokerSym[harf]+yuksekKart_P2[0]==plAndTabCardSymNum[masadaki])){
                            document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                        }
                    }
                }
            }
            tabloGenel("---" , ("doper5 : " + doperDizi5_p2 ) ); 
            SAYAC_twoPair=SAYAC_twoPair+1;
        }
    
}
function p1RenklendirDoper(dizi4, yuksekKart){
    for(var harf in pokerSym){
        for(var doper4 in dizi4){
            for(var masadaki=0; masadaki<=6; masadaki++){
                if((pokerSym[harf]+dizi4[doper4]==plAndTabCardSymNum[masadaki]) && dizi4.length==4 ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
                if((pokerSym[harf]+yuksekKart[0]==plAndTabCardSymNum[masadaki])){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                }
            }
        }
    }
}
function p2RenklendirDoper(dizi4, yuksekKart){
    for(var harf in pokerSym){
        for(var doper4 in dizi4){
            for(var masadaki=2; masadaki<=8; masadaki++){ 
                if((pokerSym[harf]+dizi4[doper4]==plAndTabCardSymNum[masadaki]) && dizi4.length==4 ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
                if((pokerSym[harf]+yuksekKart[0]==plAndTabCardSymNum[masadaki])){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                }
            }
        }
    }
}















function Check_Cards_For_Pair(){ // per
    
        var perDizi2_p1 = new Array();var perDizi2_p2 = new Array(); 
        var perDizi5_p1 = new Array();var perDizi5_p2 = new Array();
        var yuksekKartlar_P1 = new Array();var yuksekKartlar_P2 = new Array();
        var perSayP1=0;var perSayP2=0;
        var say_1=0;var say_2=0;
        for(o=6; o>=0; o--){                     
            for(t=o-1; t>=(o-3); t--){
                if(p1CardNum[o]==p1CardNum[t]){
                    say_1 = say_1 + 1;
                }
            }
            if(say_1==0){
                yuksekKartlar_P1.push(p1CardNum[o]); 
            }
            if(say_1==1){ // per
                perSayP1 = perSayP1 + 1;
                perDizi2_p1.push(p1CardNum[o]);perDizi2_p1.push(p1CardNum[o]);
                perDizi5_p1.push(p1CardNum[o]);perDizi5_p1.push(p1CardNum[o]);
                o=o-1;
            }
            if(say_1==2){ // üçlü
                perSayP1=0;
                break;
            }
            if(say_1==3){ // kare
                perSayP1=0;
                break;
            }
            say_1=0;
        }

        for(o=6; o>=0; o--){                     
            for(t=o-1; t>=(o-3); t--){
                if(p2CardNum[o]==p2CardNum[t]){
                    say_2 = say_2 + 1;
                }
            }
            if(say_2==0){
                yuksekKartlar_P2.push(p2CardNum[o]); 
            }
            if(say_2==1){ // per
                perSayP2 = perSayP2 + 1;
                perDizi2_p2.push(p2CardNum[o]);perDizi2_p2.push(p2CardNum[o]);
                perDizi5_p2.push(p2CardNum[o]);perDizi5_p2.push(p2CardNum[o]);
                o=o-1;
            }
            if(say_2==2){ // üçlü
                perSayP2=0;
                break;
            }
            if(say_2==3){ // kare
                perSayP2=0;
                break;
            }
            say_2=0;
        }
        if(perSayP1==1 && perSayP2==0){
            yuksekKartlar_P1.splice(3,2);
            perDizi5_p1.push(yuksekKartlar_P1[0]);
            perDizi5_p1.push(yuksekKartlar_P1[1]);
            perDizi5_p1.push(yuksekKartlar_P1[2]);
            tabloGenel(("per: "+perDizi5_p1), " --- ");
            SAYAC_pair=SAYAC_pair+1;
            p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1, 0,6);
        }
        else if(perSayP1==0 && perSayP2==1){
            yuksekKartlar_P2.splice(3,2);
            perDizi5_p2.push(yuksekKartlar_P2[0]);
            perDizi5_p2.push(yuksekKartlar_P2[1]);
            perDizi5_p2.push(yuksekKartlar_P2[2]);
            tabloGenel(" --- ",("per: " + perDizi5_p2));
            SAYAC_pair=SAYAC_pair+1;
            p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
        }
        else if (perSayP1==1 && perSayP2==1){
            yuksekKartlar_P1.splice(3,2);
            perDizi5_p1.push(yuksekKartlar_P1[0]);
            perDizi5_p1.push(yuksekKartlar_P1[1]);
            perDizi5_p1.push(yuksekKartlar_P1[2]);

            yuksekKartlar_P2.splice(3,2);
            perDizi5_p2.push(yuksekKartlar_P2[0]);
            perDizi5_p2.push(yuksekKartlar_P2[1]);
            perDizi5_p2.push(yuksekKartlar_P2[2]);

            if(perDizi5_p1[0] > perDizi5_p2[0]){
                tabloGenel(("per: "+perDizi5_p1), " --- ");
                SAYAC_pair=SAYAC_pair+1;
                p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1,0,6);
            }
            else if(perDizi5_p1[0] < perDizi5_p2[0]){
                tabloGenel(" --- ",("per: " + perDizi5_p2));
                SAYAC_pair=SAYAC_pair+1;
                p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
            }

            else if(perDizi5_p1[0] == perDizi5_p2[0]){
                if(perDizi5_p1[2]>perDizi5_p2[2]){
                    tabloGenel(("per: " + perDizi5_p1), " --- ");
                    SAYAC_pair=SAYAC_pair+1;
                    p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1,0,6);
                }
                else if(perDizi5_p1[2]<perDizi5_p2[2]){
                    tabloGenel(" --- ", ("per: " + perDizi5_p2));
                    SAYAC_pair=SAYAC_pair+1;
                    p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
                }
                else if(perDizi5_p1[2]== perDizi5_p2[2]){
                    if(perDizi5_p1[3]>perDizi5_p2[3]){
                        tabloGenel(("per: " + perDizi5_p1), " --- ");
                        SAYAC_pair=SAYAC_pair+1;
                        p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1,0,6);
                    }
                    else if(perDizi5_p1[3]<perDizi5_p2[3]){
                        tabloGenel(" --- ",( "per: " + perDizi5_p2));
                        SAYAC_pair=SAYAC_pair+1;
                        p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
                    }
                    else if(perDizi5_p1[3] == perDizi5_p2[3]){
                        if(perDizi5_p1[4]>perDizi5_p2[4]){
                            tabloGenel(("per: " + perDizi5_p1), " --- ");
                            SAYAC_pair=SAYAC_pair+1;
                            p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1,0,6);
                        }
                        else if(perDizi5_p1[4]<perDizi5_p2[4]){
                            tabloGenel(" --- ", ("per: " + perDizi5_p2));
                            SAYAC_pair=SAYAC_pair+1;
                            p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
                        }
                        else if(perDizi5_p1[4]==perDizi5_p2[4]){
                            tabloGenel(("per: " + perDizi5_p1), ("per: " + perDizi5_p2));
                            SAYAC_pair=SAYAC_pair+1;
                            p1RenklendirPer(perDizi2_p1, yuksekKartlar_P1,0,6);
                            p1RenklendirPer(perDizi2_p2, yuksekKartlar_P2,2,8);
                            
                        }
                    }
                }
            }
        }
    
}
function p1RenklendirPer(dizi4, yuksekKart, baslangic, bitis){ //0-6, 2-8
    for(var harf in pokerSym){
        for(var doper4 in dizi4){
            for(var masadaki=baslangic; masadaki<=bitis; masadaki++){
                if((pokerSym[harf]+dizi4[doper4]==plAndTabCardSymNum[masadaki]) && dizi4.length==2 ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid yellow;"; 
                }
                if((pokerSym[harf]+yuksekKart[0]==plAndTabCardSymNum[masadaki])){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                }
                if((pokerSym[harf]+yuksekKart[1]==plAndTabCardSymNum[masadaki])){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                }
                if((pokerSym[harf]+yuksekKart[2]==plAndTabCardSymNum[masadaki])){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; //default 85px
                }
            }
        }
    }
}













function Check_Cards_For_HighCard(){ // yüksek kart
     

        var yuksekKartlar_P1 = new Array();     var yuksekKartlar_P2 = new Array();
        var say_1=0;    var say_2=0;
        for(o=6; o>=0; o--){                     
            for(t=o-1; t>=(o-3); t--){
                if(p1CardNum[o]==p1CardNum[t]){
                    say_1 = say_1 + 1;
                }
            }
            if(say_1==0){
                yuksekKartlar_P1.push(p1CardNum[o]); 
            }
            else{
                yuksekKartlar_P1=0;
                break;
            }
            say_1=0;
        } 
        for(p=6; p>=0; p--){                     
            for(t=p-1; t>=(p-3); t--){
                if(p2CardNum[p]==p2CardNum[t]){
                    say_2 = say_2 + 1;
                }
            }
            if(say_2==0){
                yuksekKartlar_P2.push(p2CardNum[p]); 
            }
            else{
                yuksekKartlar_P2=0;
                break;
            }
            say_2=0;
        }
        if(yuksekKartlar_P1.length==7){
            yuksekKartlar_P1.splice(5, 2); 
        } 
        if(yuksekKartlar_P2.length==7){   
            yuksekKartlar_P2.splice(5, 2);
        }
        var y1 = yuksekKartlar_P1;
        var y2 = yuksekKartlar_P2;

        if(y1.length==5 && y2.length==5){
            if(y1[0] > y2[0]){
                yuksekKartRenklendir(y1, 0, 6);
                tabloGenel(("yüksek kart: " + y1), " --- ");
            }
            else if(y1[0] < y2[0]){
                yuksekKartRenklendir(y2, 2, 8);
                tabloGenel(" --- ",("yüksek kart:  " + y2));
            }
            else if(y1[0]==y2[0]){
                if(y1[1] > y2[1]){
                    yuksekKartRenklendir(y1, 0, 6);
                    tabloGenel((" yüksek kart: " + y1), " --- ");
                }
                else if(y1[1] < y2[1]){
                    yuksekKartRenklendir(y2, 2, 8);
                    tabloGenel( " --- ",("yüksek kart: " + y2));
                }
                else if(y1[1] == y2[1]){
                    if(y1[2] > y2[2]){
                        yuksekKartRenklendir(y1, 0, 6);
                        tabloGenel((" yüksek kart: " + y1), " --- ");
                    }
                    else if(y1[2] < y2[2]){
                        yuksekKartRenklendir(y2, 2, 8);
                        tabloGenel( " --- ",(" yüksek kart: " + y2));
                    }
                    else if(y1[2] == y2[2]){
                        if(y1[3] > y2[3]){
                            yuksekKartRenklendir(y1, 0, 6);
                            tabloGenel(("yüksek kart: " + y1), " --- ");
                        }
                        else if(y1[3] < y2[3]){
                            yuksekKartRenklendir(y2, 2, 8);
                            tabloGenel( " --- ",("yüksek kart: " + y2));
                        }
                        else if(y1[3] == y2[3]){
                            if(y1[4] > y2[4]){
                                yuksekKartRenklendir(y1, 0, 6);
                                tabloGenel(("yüksek kart: " + y1), " --- ");
                            }
                            else if(y1[4] < y2[4]){
                                yuksekKartRenklendir(y2, 2, 8);
                                tabloGenel(" --- ",("yüksek kart: " + y2));
                            }
                            else if(y1[4] == y2[4]){
                                yuksekKartRenklendir(y1, 0, 6);
                                yuksekKartRenklendir(y2, 2, 8);
                                tabloGenel(("yüksek kart: " + y1), ("yüksek kart: " + y2));
                            }
                        }
                    }
                }
            }
        }
    
}
function yuksekKartRenklendir(yuksekKartDizisi, baslangic, bitis){ //0-6, 2-8
    for(var harf in pokerSym){
        for(var yuksek in yuksekKartDizisi){
            for(var masadaki=baslangic; masadaki<=bitis; masadaki++){
                if((pokerSym[harf]+yuksekKartDizisi[yuksek]==plAndTabCardSymNum[masadaki]) ){
                    document.getElementById("tableCard" + masadaki).style="border: 4px solid blue;"; 
                }
            }
        }
    }
}












function tabloGenel(p1hand, p2hand){
    elSayaci = elSayaci + 1;
    var sayac = (elSayaci + ". El : " + "\n");

    //
    var sayacNode = document.createTextNode(sayac);
    var p1handNode = document.createTextNode(p1hand);
    var p2handNode = document.createTextNode(p2hand);
    
    //
    var t_r = document.createElement("tr");

    //
    var t_d0 = document.createElement("td");
    var t_d1 = document.createElement("td");
    var t_d2 = document.createElement("td");

    t_r.appendChild(t_d0);
    t_r.appendChild(t_d1);
    t_r.appendChild(t_d2);

    t_d0.appendChild(sayacNode);
    t_d1.appendChild(p1handNode);
    t_d2.appendChild(p2handNode);

    document.getElementById("elBilgisiTablosu").appendChild(t_r);
}


function tabloGenel1(P1HAND,p1hand1, p1hand2, p1hand3, p1hand4, p1hand5, P2HAND, p2hand1, p2hand2, p2hand3, p2hand4, p2hand5){
    elSayaci = elSayaci + 1;
    var sayac = (elSayaci + ". El : " + "\n");

    //
    
    var sayacNode   = document.createTextNode(sayac);
    var p1handNode  = document.createTextNode(P1HAND);
    var p1handNode1 = document.createTextNode(p1hand1);
    var p1handNode2 = document.createTextNode(p1hand2);
    var p1handNode3 = document.createTextNode(p1hand3);
    var p1handNode4 = document.createTextNode(p1hand4);
    var p1handNode5 = document.createTextNode(p1hand5);
    var p2handNode  = document.createTextNode(P2HAND);
    var p2handNode1 = document.createTextNode(p2hand1);
    var p2handNode2 = document.createTextNode(p2hand2);
    var p2handNode3 = document.createTextNode(p2hand3);
    var p2handNode4 = document.createTextNode(p2hand4);
    var p2handNode5 = document.createTextNode(p2hand5);
    
    //
    var t_r = document.createElement("tr");

    //
    var td_sayac   = document.createElement("td");
    var td_P1HAND  = document.createElement("td");
    var td_p1hand1 = document.createElement("td");
    var td_p1hand2 = document.createElement("td");
	var td_p1hand3 = document.createElement("td");
    var td_p1hand4 = document.createElement("td");
    var td_p1hand5 = document.createElement("td");

    var td_P2HAND  = document.createElement("td");
    var td_p2hand1 = document.createElement("td");
    var td_p2hand2 = document.createElement("td");
	var td_p2hand3 = document.createElement("td");
    var td_p2hand4 = document.createElement("td");
    var td_p2hand5 = document.createElement("td");

    //
    t_r.appendChild(td_sayac);
    t_r.appendChild(td_P1HAND);
    t_r.appendChild(td_p1hand1);
    t_r.appendChild(td_p1hand2);
    t_r.appendChild(td_p1hand3);
    t_r.appendChild(td_p1hand4);
    t_r.appendChild(td_p1hand5);

    t_r.appendChild(td_P2HAND);
    t_r.appendChild(td_p2hand1);
    t_r.appendChild(td_p2hand2);
    t_r.appendChild(td_p2hand3);
    t_r.appendChild(td_p2hand4);
    t_r.appendChild(td_p2hand5);


    var td_P1HAND  = document.createElement("td");
    var td_p1hand1 = document.createElement("td");
    var td_p1hand2 = document.createElement("td");
	var td_p1hand3 = document.createElement("td");
    var td_p1hand4 = document.createElement("td");
    var td_p1hand5 = document.createElement("td");

    var td_P2HAND  = document.createElement("td");
    var td_p2hand1 = document.createElement("td");
    var td_p2hand2 = document.createElement("td");
	var td_p2hand3 = document.createElement("td");
    var td_p2hand4 = document.createElement("td");
    var td_p2hand5 = document.createElement("td");

    td_sayac.appendChild(sayacNode);
    td_P1HAND.appendChild(p1handNode);
    td_p1hand1.appendChild(p1handNode1);
    td_p1hand2.appendChild(p1handNode2);
    td_p1hand3.appendChild(p1handNode3);
    td_p1hand4.appendChild(p1handNode4);
    td_p1hand5.appendChild(p1handNode5);

    td_P2HAND.appendChild(p2handNode);
    td_p2hand1.appendChild(p2handNode1);
    td_p2hand2.appendChild(p2handNode2);
    td_p2hand3.appendChild(p2handNode3);
    td_p2hand4.appendChild(p2handNode4);
    td_p2hand5.appendChild(p2handNode5);
    

    document.getElementById("elBilgisiTablosu").appendChild(t_r);
}