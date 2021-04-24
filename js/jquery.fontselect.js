/*
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
*/

(function($){

  $.fn.fontselect = function(options) {  

    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    var settings = {
      style: 'font-select',
      placeholder: 'Select a font',
      lookahead: 2,
      api: 'https://fonts.googleapis.com/css?family=',
        fonts: [
            "Aladin",
            "Alex+Brush",
            "Allura",
            "Amatic+SC",
            "Amita",
            "Annie+Use+Your+Telescope",
            "Architects+Daughter",
            "Arizonia",
            "Bad+Script",
            "Berkshire+Swash",
            "Beth+Ellen",
            "Bilbo",
            "Bilbo+Swash+Caps",
            "Bonbon",
            "Butterfly+Kids",
            "Calligraffitti",
            "Caveat",
            "Caveat+Brush",
            "Cedarville+Cursive",
            "Charm",
            "Charmonman",
            "Chilanka",
            "Clicker+Script",
            "Coming+Soon",
            "Condiment",
            "Cookie",
            "Courgette",
            "Covered+By+Your+Grace",
            "Crafty+Girls",
            "Damion",
            "Dancing+Script",
            "Dawning+of+a+New+Day",
            "Dekko",
            "Delius",
            "Delius+Swash+Caps",
            "Delius+Unicase",
            "Devonshire",
            "Dokdo",
            "Dr+Sugiyama",
            "Eagle+Lake",
            "East+Sea+Dokdo",
            "Engagement",
            "Euphoria+Script",
            "Felipa",
            "Fondamento",
            "Gaegu",
            "Gamja+Flower",
            "Give+You+Glory",
            "Gloria+Hallelujah",
            "Gochi+Hand",
            "Grand+Hotel",
            "Great+Vibes",
            "Handlee",
            "Herr+Von+Muellerhoff",
            "Hi+Melody",
            "Homemade+Apple",
            "Indie+Flower",
            "Italianno",
            "Itim",
            "Jim+Nightshade",
            "Julee",
            "Just+Another+Hand",
            "Just+Me+Again+Down+Here",
            "Kalam",
            "Kaushan+Script",
            "Kavivanar",
            "Kristi",
            "La+Belle+Aurore",
            "Lakki+Reddy",
            "Lateef",
            "League+Script",
            "Leckerli+One",
            "Liu+Jian+Mao+Cao",
            "Long+Cang",
            "Loved+by+the+King",
            "Lovers+Quarrel",
            "Ma+Shan+Zheng",
            "Mali",
            "Mansalva",
            "Marck+Script",
            "Meddon",
            "Meie+Script",
            "Merienda",
            "Merienda+One",
            "Miss+Fajardose",
            "Monsieur+La+Doulaise",
            "Montez",
            "Mr+Bedfort",
            "Mr+Dafoe",
            "Mr+De+Haviland",
            "Mrs+Saint+Delafield",
            "Mrs+Sheppards",
            "Nanum+Brush+Script",
            "Nanum+Pen+Script",
            "Neucha",
            "Niconne",
            "Norican",
            "Nothing+You+Could+Do",
            "Over+the+Rainbow",
            "Pacifico",
            "Pangolin",
            "Parisienne",
            "Patrick+Hand",
            "Patrick+Hand+SC",
            "Permanent+Marker",
            "Petit+Formal+Script",
            "Pinyon+Script",
            "Princess+Sofia",
            "Quintessential",
            "Qwigley",
            "Rancho",
            "Redressed",
            "Reenie+Beanie",
            "Rochester",
            "Rock+Salt",
            "Romanesco",
            "Rouge+Script",
            "Ruge+Boogie",
            "Ruthie",
            "Sacramento",
            "Satisfy",
            "Schoolbell",
            "Sedgwick+Ave",
            "Sedgwick+Ave+Display",
            "Shadows+Into+Light",
            "Shadows+Into+Light+Two",
            "Short+Stack",
            "Sofia",
            "Sriracha",
            "Stalemate",
            "Sue+Ellen+Francisco",
            "Sunshiney",
            "Swanky+and+Moo+Moo",
            "Tangerine",
            "The+Girl+Next+Door",
            "Tillana",
            "Vibur",
            "Waiting+for+the+Sunrise",
            "Walter+Turncoat",
            "Yellowtail",
            "Yesteryear",
            "Zeyada",
            "Zhi+Mang+Xing",
      ]
    };
    
    var Fontselect = (function(){
    
      function Fontselect(original, o){
        this.$original = $(original);
        this.options = o;
        this.active = false;
        this.setupHtml();
        this.getVisibleFonts();
        this.bindEvents();

        var font = this.$original.val();
        if (font) {
          this.updateSelected();
          this.addFontLink(font);
        }
      }
      
      Fontselect.prototype.bindEvents = function(){
        var self = this;
        // Close dropdown automatically on clicks outside dropdown
        $(document).click(function(event){
          if(self.active && !$(event.target).parents('#fontSelect-'+ self.$original.id).length){
            self.toggleDrop();
          }
        });
        
        $('li', this.$results)
        .click(__bind(this.selectFont, this))
        .mouseenter(__bind(this.activateFont, this))
        .mouseleave(__bind(this.deactivateFont, this));
        
        $('span', this.$select).click(__bind(this.toggleDrop, this));
        this.$arrow.click(__bind(this.toggleDrop, this));
      };
      
      Fontselect.prototype.toggleDrop = function(ev){
        
        if(this.active){
          this.$element.removeClass('font-select-active');
          this.$drop.hide();
          clearInterval(this.visibleInterval);
        } else {
          this.$element.addClass('font-select-active');
          this.$drop.show();
          this.moveToSelected();
          this.visibleInterval = setInterval(__bind(this.getVisibleFonts, this), 500);
        }
        
        this.active = !this.active;
      };
      
      Fontselect.prototype.selectFont = function(){
        
        var font = $('li.active', this.$results).data('value');
        this.$original.val(font).change();
        this.updateSelected();
        this.toggleDrop();
      };
      
      Fontselect.prototype.moveToSelected = function(){
        
        var $li, font = this.$original.val();
        
        if (font){
          $li = $("li[data-value='"+ font +"']", this.$results);
        } else {
          $li = $("li", this.$results).first();
        }
        
        this.$results.scrollTop($li.addClass('active')[0].offsetTop);
      };
      
      Fontselect.prototype.activateFont = function(ev){
        $('li.active', this.$results).removeClass('active');
        $(ev.currentTarget).addClass('active');
      };
      
      Fontselect.prototype.deactivateFont = function(ev){
        
        $(ev.currentTarget).removeClass('active');
      };
      
      Fontselect.prototype.updateSelected = function(){
        
        var font = this.$original.val();
        $('span', this.$element).text(this.toReadable(font)).css(this.toStyle(font));
      };
      
      Fontselect.prototype.setupHtml = function(){
      
        this.$original.empty().hide();
        this.$element = $('<div>', {'id': 'fontSelect-'+this.$original.id, 'class': this.options.style});
        this.$arrow = $('<div><b></b></div>');
        this.$select = $('<a><span>'+ this.options.placeholder +'</span></a>');
        this.$drop = $('<div>', {'class': 'fs-drop'});
        this.$results = $('<ul>', {'class': 'fs-results'});
        this.$original.after(this.$element.append(this.$select.append(this.$arrow)).append(this.$drop));
        this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
      };
      
      Fontselect.prototype.fontsAsHtml = function(){
        
        var l = this.options.fonts.length;
        var r, s, h = '';
        
        for(var i=0; i<l; i++){
          r = this.toReadable(this.options.fonts[i]);
          s = this.toStyle(this.options.fonts[i]);
          h += '<li data-value="'+ this.options.fonts[i] +'" style="font-family: '+s['font-family'] +'; font-weight: '+s['font-weight'] +'">'+ r +'</li>';
        }
        
        return h;
      };
      
      Fontselect.prototype.toReadable = function(font){
        return font.replace(/[\+|:]/g, ' ');
      };
      
      Fontselect.prototype.toStyle = function(font){
        var t = font.split(':');
        return {'font-family': this.toReadable(t[0]), 'font-weight': (t[1] || 400)};
      };
      
      Fontselect.prototype.getVisibleFonts = function(){
      
        if(this.$results.is(':hidden')) return;
        
        var fs = this;
        var top = this.$results.scrollTop();
        var bottom = top + this.$results.height();
        
        if(this.options.lookahead){
          var li = $('li', this.$results).first().height();
          bottom += li*this.options.lookahead;
        }
       
        $('li', this.$results).each(function(){

          var ft = $(this).position().top+top;
          var fb = ft + $(this).height();

          if ((fb >= top) && (ft <= bottom)){
            var font = $(this).data('value');
            fs.addFontLink(font);
          }
          
        });
      };
      
      Fontselect.prototype.addFontLink = function(font){
      
        var link = this.options.api + font;
      
        if ($("link[href*='" + font + "']").length === 0){
			$('link:last').after('<link href="' + link + '" rel="stylesheet" type="text/css">');
		}
      };
    
      return Fontselect;
    })();

    return this.each(function() {        
      // If options exist, lets merge them
      if (options) $.extend( settings, options );
      
      return new Fontselect(this, settings);
    });

  };
})(jQuery);
