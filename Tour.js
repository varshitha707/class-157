AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "Spider Man",
        url: "assets/thumbnails/Amazing_Spider-Man_Vol_1_546.webp",
      },
      {
        id: "super-man",
        title: "Super Man",
        url: "assets/thumbnails/superman.jpg",
      },

      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "assets/thumbnails/captain_aero.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "assets/thumbnails/outer_space.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnail=this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
     
      // Title Text Element
      const titleEl=this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("id",id)
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10,
    })
    entityel.setAttribute("position",position)
    entityel.setAttribute("material",{
      color:"#00BCD4",opacity:0.4
    })
    return entityel

  },

  createThumbnail: function(item){
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{
      primitive:"circle",
      radius:9,
    })
    entityel.setAttribute("material",{
      src:item.url
    })
    return entityel

  },
  createTitleEl: function(position,item){
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:60,
      color:"#E65100",
      value:item.title

    })
    const Elposition=position
    Elposition.y=-20
    entityel.setAttribute("position",Elposition)
    entityel.setAttribute("visible",true)
    
    return entityel

  },
});
