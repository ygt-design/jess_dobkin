$(document).ready(function () {
  const projectContent = {
    "./assets/images/forWhatItsWorth/forWhatItsWorth_one.jpg": {
      title: "For What It's Worth",
      description:
        "Installation as part of the exhibition, Milk. Commissioned by Wellcome Collection, London, UK. Curated by Honor Beddard and Marianne Templeton.",
      extraInfo: "Photo Credit: Christa Holk",
      imgSrc: [
        "./assets/images/forWhatItsWorth/forWhatItsWorth_one.jpg",
        "./assets/images/forWhatItsWorth/forWhatItsWorth_two.jpg",
        "./assets/images/forWhatItsWorth/forWhatItsWorth_three.jpg",
        "./assets/images/forWhatItsWorth/forWhatItsWorth_four.jpg",
      ],
    },
    "./assets/images/holdingCoburn/holding_colburn.jpeg": {
      title: "Holding Coburn",
      description:
        "Inspired by Wendy Coburn’s life and practice, this performance activation explores the purpose of artworks, how we engage with and take care of them, and what goes into creating them. Behind a wall at Onsite Gallery where a retrospective of Coburn’s work is exhibited, Jess transforms a storage room into a nursery. Visitors are invited to sit and hold Wendy’s sculpture molds.",
      extraInfo: "Photo Credit: Jeremy Mimnagh",
      imgSrc: ["./assets/images/holdingCoburn/holding_colburn.jpeg"],
    },
    "./assets/images/dinnerPartySeries/dinnerParty.jpeg": {
      title: "Dinner Party Series",
      description:
        "A series of online dinner parties for artists, academics, archivists, and activists to gather across borders, languages, time zones, and cultures for sensory, intimate connection in pandemic times. A collaboration with Joyce LeeAnn Joseph and Shalon T. Webber-Heﬀernan.",
      imgSrc: ["./assets/images/dinnerPartySeries/dinnerParty.jpeg"],
    },
    "./assets/images/youreInvited/youreInvited.jpg": {
      title: "You're Invited",
      description:
        "A series of oﬀerings at the Fierce Festival, Birmingham, UK, that included elements of the Wetrospective on tour and a public billboard project.",
      imgSrc: ["./assets/images/youreInvited/youreInvited.jpg"],
    },
    "./assets/images/wetrospective/wetrospectiveOne.jpeg": {
      title: "Jess Dobkin’s Wetrospective ",
      description:
        "Curated by Emelie Chhangur at the Art Gallery of York University (AGYU), Toronto.",
      imgSrc: [
        "./assets/images/wetrospective/wetrospectiveOne.jpeg",
        "./assets/images/wetrospective/wetrospectiveTwo.jpeg",
      ],
    },
    "./assets/images/talixmx/talixmx_one.jpeg": {
      title: "TALIXMXN ",
      description:
        "A series of performances (2018–2019) that invites audiences to gather, assemble, and activate archival materials energetically connected to past and ongoing performances. Iterations of this performance engage the archive of the Hemi-spheric Institute of Performance and Politics, New York City, in collaboration with Jehan Roberson; the Hemispheric Institute’s Encuentro, Mexico City, in collaboration with Laura Levin; and the energetic archive of performances by Shawna Dempsey and Lorri Millan, whose perform-ance archive was lost in a ware-house ﬁre, presented by FADO Performance Art Centre, Toronto.",
      imgSrc: [
        "./assets/images/talixmx/talixmx_one.jpeg",
        "./assets/images/talixmx/talixmx_two.jpeg",
      ],
    },
    "./assets/images/theMagicHour/magicHour_one.jpeg": {
      title: "The Magic Hour",
      description:
        "A solo multidisciplinary perfor-mance spell that uses magic to investigate sexual violence, trauma, and transformation. Working with traditions and practices of magic ranging from ancestral sacred charms to top-hat-and-rabbit illusions, it presses the boundaries of public and private, hidden and revealed, to make visible what is not seen. Director Stephen Lawson; Dramaturgs Moe Angelos and Laura Levin; Lighting Design Jennifer Tipton and Michelle Ramsay; Sound Design Richard Feren; Costume Design Atom Cianfarani and Jess Dobkin; Production Management sandra Henderson; Production Assistant Deborah Lim; Consultants Dany Lyne, Beaux Taylor, and Tracy Tidgwell; Dancers Liz Fraser and Levia Rabkin McFarlane; ASL Interpreter Felice Shays. Developed in Residency at The Theatre Centre, Toronto.",
      extraInfo: "Photo Credit: Dahlia Katz",
      imgSrc: [
        "./assets/images/theMagicHour/magicHour_one.jpeg",
        "./assets/images/theMagicHour/magicHour_two.jpeg",
        "./assets/images/theMagicHour/magicHour_three.jpeg",
        "./assets/images/theMagicHour/magicHour_four.jpeg",
        "./assets/images/theMagicHour/magicHour_five.jpeg",
      ],
    },
    "./assets/images/ourFuture/ourFuture_one.jpeg": {
      title: "Our Future, Our Fate, Our Fortune",
      description:
        "Oracle Jess Dobkin, art-spirit guide, invites audiences to a performance art oasis within the larger art fair environment. It is the marketplace ﬂip-side where there is nothing to buy or sell; our currency is energy, our deals are celestial, our contracts are sacred. Fate, fortune, and future are collective concerns, it is time to shift our forecasting from ‘what will happen to me?’ to ‘what will come of us?’ Commissioned and present-ed by Kim Fullerton at Akimbo for Art Toronto.",
      extraInfo: "Photo Credit: Tania Anderson",
      imgSrc: [
        "./assets/images/ourFuture/ourFuture_one.jpeg",
        "./assets/images/ourFuture/ourFuture_two.jpeg",
      ],
    },
    "./assets/images/acting/acting_one.jpeg": {
      title: "Acting/Performing/Audience",
      description:
        "A three-week project where, in week one, ﬁve actors ‘audition’ as actors, performance artists, and audience. In week two, the actors attend the 7A*11D International Performance Art Festival and ‘perform’ as the audience at the festival. In week three, the ﬁve actors ‘act’ as performance artists, performing the work from the festival. Co-conspirator Shannon Cochrane with actors William Ellis, Margaret Evans, Shaista Latif, Darwin Lyons, and Jeﬀ Yung. Photography by Tania Anderson. Videography by Chris Behnisch.",
      extraInfo: "Photo Credit: Tania Anderson",
      imgSrc: ["./assets/images/acting/acting_one.jpeg"],
    },
    "./assets/images/howMany/howMany_one.jpeg": {
      title:
        "How Many Performance Artists Does It Take To Change a Light Bulb (for Martha Wilson)",
      description:
        "This performance investigates the deﬁnitions and intersections of performance, documentation, archive, image, and reproduction to explore the nature of performance itself. The performance concludes with a special guest appearance by Martha Wilson who changes the light bulb to end the performance. The four-hour durational work was presented at the Enoch Turner Schoolhouse in Toronto.",
      extraInfo: "Photo Credit: Henry Chan and Matt Jones",
      imgSrc: [
        "./assets/images/howMany/howMany_one.jpeg",
        "./assets/images/howMany/howMany_two.jpeg",
        "./assets/images/howMany/howMany_three.jpeg",
      ],
    },
    "./assets/images/newStand/newStand_one.jpeg": {
      title: "The Artist-Run Newsstand",
      description:
        "A collective of Toronto artists lease a vacant Gateway Newsstand kiosk at the Chester Subway Station, which had been sitting empty for more than six years, to reimagine this commercial space into an alternative newsstand and artists’ space. The newsstand — in operation for one year — commis-sions artist projects that speak to issues of transit, mobility, accessibil-ity, city life, and civic engagement, and address various questions about how news is disseminated and received in a time of rapidly changing technology. The news-stand brings together the work of writers, choreographers, media artists, performance artists, theatre artists, craftspeople, visual artists, and community arts organizers for site-speciﬁc exhibitions, screenings, performances, and community arts projects. The newsstand also sells snacks, beverages, artists’ books and multiples, zines, and independent magazines.",
      extraInfo: "Photo Credit: xx and Nathan Hoo",
      imgSrc: [
        "./assets/images/newStand/newStand_one.jpeg",
        "./assets/images/newStand/newStand_two.jpeg",
      ],
    },
    "./assets/images/mono/mono_one.jpeg": {
      title: "MONOMYTHS",
      description:
        "Over the course of a year, a diverse collection of artists, scholars, and activists are invited to revise Joseph Campbell’s conception of the hero’s journey through performance art, lectures, workshops, and other oﬀerings. Presented by FADO Performance Art Centre, Toronto. Conceived and co-curated with Shannon Cochrane.",
      extraInfo: "Photo Credit: Henry Chan / Calendar Design: Lisa Kiss Design",
      imgSrc: ["./assets/images/mono/mono_one.jpeg"],
    },
    "./assets/images/performaceArtArmy/performanceArtArmy_one.jpeg": {
      title: "The Performance Art Army",
      description:
        "An intervention performed on the sidewalk in front of the Toronto International Art Fair. Dressed as Performance Art Army bell ringers with the style and signiﬁers of the Salvation Army, Jess Dobkin and Shannon Cochrane collect donations for performance art, the underserved and marginalized art form positioned outside the art market system.",
      extraInfo: "Photo Credit: Henry Chan",
      imgSrc: ["./assets/images/performaceArtArmy/performanceArtArmy_one.jpeg"],
    },
    "./assets/images/dirtyPlotz/dirtyPlotz_one.jpeg": {
      title: "Dirty Plötz",
      description: "A cabaret turn with a rainbow of enemas.",
      extraInfo: "Photo Credit: Tania Anderson",
      imgSrc: ["./assets/images/dirtyPlotz/dirtyPlotz_one.jpeg"],
    },
    "./assets/images/freeChildcare/freeChildcare_one.jpg": {
      title: "Free Childcare Provided",
      description:
        "A performance art festival hub created for kids that oﬀers talks by participating festival artists, performance-based actions and activities, inspiring conversation, unconventional snacks, and a mediatheque of thought-provoking performance art documentation. At Rapid Pulse International Performance Art Festival in Chicago.",
      imgSrc: ["./assets/images/freeChildcare/freeChildcare_one.jpg"],
    },
    "./assets/images/performanceArtistForHire/performanceArtistForHire_one.jpeg":
      {
        title: "Performance Artist for Hire",
        description:
          "Crashing Art Toronto as a walk-about clown, Jess makes her way through the crowds oﬀering free popcorn, cotton candy, and beige ‘sword’ balloons that she inﬂates on site. She distributes promotional magnets advertising her services as a performance artist, clown, and premier escort for birthday parties, stage shows, and corporate and private events, speaking to the trend of performance art as entertainment at art galas, fundraisers, and fairs.",
        extraInfo: "Photo Credit: Tania Anderson",
        imgSrc: [
          "./assets/images/performanceArtistForHire/performanceArtistForHire_one.jpeg",
        ],
      },
    "./assets/images/powerball/powerBall_one.jpeg": {
      title: "Power Ball 15 Minutes",
      description:
        "Jess attends The Power Plant Contemporary Art Gallery’s Power Ball gala naked for ﬁfteen minutes",
      imgSrc: ["./assets/images/powerball/powerBall_one.jpeg"],
    },
    "./assets/images/affirmations/affirmations_one.jpeg": {
      title: "Affirmations for Artists",
      description:
        "Jess recites affirmations in the women’s washroom at The Power Plant Contemporary Art Gallery’s annual Power Ball gala",
      extraInfo: "Photo Credit: Henry Chan",
      imgSrc: ["./assets/images/affirmations/affirmations_one.jpeg"],
    },
    "./assets/images/flowers/flowers_one.jpeg": {
      title: "Affirmations for Artists",
      description:
        "This performance reimagines Barbra Streisand and Neil Diamond’s hit duet, ‘You Don’t Bring Me Flowers’. First performed in 2010 for a 7A*11D International Performance Art Festival fundraiser, it was staged again in 2011 at Buddies in Bad Times Theatre where it was ﬁlmed by seventeen documenters using cell phones. The footage was then edited into a short ﬁlm by Jess Dobkin and Stev’nn Hall.",
      extraInfo: "Photo Credit: Tania Anderson",
      imgSrc: [
        "./assets/images/flowers/flowers_one.jpeg",
        "./assets/images/flowers/flowers_two.jpeg",
        "./assets/images/flowers/flowers_three.jpeg",
      ],
    },
    "./assets/images/soup/soup_one.jpeg": {
      title: "The Artists’ Soup Kitchen",
      description:
        "Toronto artists and the wider community are invited to a free hot lunch for six Mondays in the winter of 2012. The project looks at the relationship between art and labour, considers the lineage and history of artists working with food and performance, and responds to a social need, as artists constitute an underserved community whose labour and social contributions often go unrecognized and are undervalued. The Artists’ Soup Kitchen served more than 500 people. In collaboration with Catherine Clarke and Stephanie Springgay.",
      extraInfo: "Photo Credit Julie Smitka",
      imgSrc: ["./assets/images/soup/soup_one.jpeg"],
    },
    "./assets/images/bleedingBall/bleedingBall_one.jpeg": {
      title: "Bleeding at the Ball",
      description:
        "Jess attends the annual Power Ball fundraising gala at The Power Plant Contemporary Art Gallery wearing a stained white dress.",
      extraInfo: "Photo Credit: Henry Chan",
      imgSrc: ["./assets/images/bleedingBall/bleedingBall_one.jpeg"],
    },
    "./assets/images/commitment/commitment_one.jpeg": {
      title: "Commitment Issues",
      description:
        "A curatorial project presenting the work of ﬁve artists who use their bodies as the primary source material for investigating qualities and dimensions of commitment — to ideas, performance, audience, and themselves. Conceived and curated with Shannon Cochrane and presented at Oasis Aqualounge, Toronto.",
      extraInfo: "Design Credit: Lisa Kiss Design",
      imgSrc: ["./assets/images/commitment/commitment_one.jpeg"],
    },
    "./assets/images/everything/everything_one.jpeg": {
      title: "Everything I’ve Got",
      description:
        "A solo performance presenting all of Jess’s artistic ideas to an audi-ence, knowing she won’t have time to perform them all before she dies. The performance begins with an experimental lecture format, and as the ideas become more distilled, the physical space breaks down into an ethereal, mysterious, and magical world. Everything I’ve Got was conceived in 2007 after the untimely passing of Jess’s friend, ﬁlmmaker Diane Bonder, to ask questions about artistic process and what happens to our ideas that don’t get realized. Presented in 2010 at The Rhubarb Festival, Toronto; EXPERIMENTICA Festival, Chapter Arts Centre, Cardiﬀ, UK; HATCH at Harbourfront Centre, Toronto; The Edgy Women Festival, Montreal; and in 2013 at the University of Michigan. Created with Stephen Lawson, Sherri Hay, Richard Feren, Laird MacDonald, and Laura Baxter.",
      extraInfo: "Photo Credit: Elizabeth Delage",
      imgSrc: [
        "./assets/images/everything/everything_one.jpeg",
        "./assets/images/everything/everything_two.jpeg",
      ],
    },
    "./assets/images/power/power_one.jpeg": {
      title: "Power Balls",
      description:
        "Jess oﬀers $100 blow jobs at the annual Power Ball fundraising gala for The Power Plant Contemporary Art Gallery, Toronto.",
      extraInfo: "Design Credit: Sara Bacon",
      imgSrc: ["./assets/images/power/power_one.jpeg"],
    },
    "./assets/images/mirror/mirror_one.jpeg": {
      title: "Power Balls",
      description:
        "Jess performs as a functional human mirror ball, exploring physical and psychological vulnerabilities, limitations, and boundaries.",
      extraInfo:
        "Photo Credit: Courtesy of The Power Plant Contemporary Art Gallery",
      imgSrc: ["./assets/images/mirror/mirror_one.jpeg"],
    },
    "./assets/images/clown/clown_one.jpeg": {
      title: "Power Balls",
      description:
        "A novel interpretation of the traditional circus clown car.",
      extraInfo: "Photo Credit: David Hawe",
      imgSrc: ["./assets/images/clown/clown_one.jpeg"],
    },
    "./assets/images/beingGreen/beingGreen_one.jpeg": {
      title: "Being Green",
      description:
        "Naked in green body paint, Jess performs a lip-sync of Kermit the Frog’s ‘It’s Not Easy Being Green’, accompanied by Lex Vaughn performing as puppeteer Jim Henson.",
      extraInfo: "Photo Credit: David Leyes",
      imgSrc: ["./assets/images/beingGreen/beingGreen_one.jpeg"],
    },
    "./assets/images/feeForService/feeForService_one.jpeg": {
      title: "Fee for Service",
      description:
        "Audiences of one are invited to have a pencil sharpened by the artist’s vagina dentata for a nominal fee. Upon entering the gallery, a pencil is purchased from the front desk receptionist who books appoint-ments. When called, the audience participant is invited behind a screen where the private sharpening is negotiated and performed. Upon exiting, the participant is asked to write a message in the guest book with their freshly sharpened pencil.",
      extraInfo: "Photo Credit: David Leyes",
      imgSrc: [
        "./assets/images/feeForService/feeForService_one.jpeg",
        "./assets/images/feeForService/feeForService_two.jpeg",
      ],
    },
    "./assets/images/lactation/lactation_one.jpeg": {
      title: "The Lactation Station Breast Milk Bar",
      description:
        "Audiences are invited to ‘quench their curiosity’ by tasting small samples of pasteurized human breast milk, donated by new mothers. The interactive perfor-mance explores cultural issues and taboos surrounding early parent-hood and breastfeeding, and invites a dialogue about intimacy, sexuality, morality, biology, taste, and risk. The performance considers breast milk as a substance and symbol that deﬁes boundaries — a bodily ﬂuid, a food, a commodity — complex beyond classiﬁcation, unregulated, and unruly. Curated by Paul Couillard (Toronto, 2006), Miriam Ginestier (Montreal, 2012) and Natalie Loveless (Edmonton, 2016).",
      extraInfo: "Photo Credit: David Hawe",
      imgSrc: [
        "./assets/images/lactation/lactation_one.jpeg",
        "./assets/images/lactation/lactation_two.jpeg",
        "./assets/images/lactation/lactation_three.jpeg",
        "./assets/images/lactation/lactation_four.jpeg",
      ],
    },
    "./assets/images/earPiece/earPiece_one.jpeg": {
      title: "Ear Piece",
      description:
        "The artist’s ear pokes through a wall in the Walter Phillips Gallery, Banﬀ Centre for Arts and Creativity. She communicates with visitors by writing notes projected on the opposite wall.",
      imgSrc: [
        "./assets/images/earPiece/earPiece_one.jpeg",
        "./assets/images/earPiece/earPiece_two.jpeg",
      ],
    },
    "./assets/images/imagined/imagined_one.jpeg": {
      title: "Ear Piece",
      description:
        "The artist’s ear pokes through a wall in the Walter Phillips Gallery, Banﬀ Centre for Arts and Creativity. She communicates with visitors by writing notes projected on the opposite wall.",
      imgSrc: ["./assets/images/imagined/imagined_one.jpeg"],
    },
    "./assets/images/restored/restored_one.jpeg": {
      title: "Restored",
      description:
        "Jess takes name-brand clothing from her closet and discreetly re-shelves it at stores of original purchase, inviting consumers to take the items home. Each item has a personalized tag that shares a story about the clothing’s signiﬁcance and the reason for letting it go. Restored was later presented in Montreal with a small team of artists donating and re-shelving clothes with customized tags.",
      extraInfo: "Tag design: Sandra Smith",
      imgSrc: [
        "./assets/images/restored/restored_one.jpeg",
        "./assets/images/restored/restored_two.jpeg",
      ],
    },
    "./assets/images/bookWorm/bookWorm_one.jpeg": {
      title: "Restored",
      description:
        "Subversive bookmarks are planted in books on the shelves at mega-bookstores, educating consumers about the troubling business practices of megastores and encouraging them to patronize independent booksellers. Four bookmarks were designed for this action, each one tailored for use in a particular kind of book.",
      extraInfo: "Bookmark design by Sandra Smith.",
      imgSrc: ["./assets/images/bookWorm/bookWorm_one.jpeg"],
    },
    "./assets/images/confessional/confessional_one.jpeg": {
      title: "The Confessional",
      description:
        "The artist operates a confessional booth with audience participants during Hysteria: A Festival of Women at Buddies in Bad Times Theatre, Toronto. Curated by Festival Director Moynan King.",
      imgSrc: ["./assets/images/confessional/confessional_one.jpeg"],
    },
    "./assets/images/emergency/emergency_one.jpeg": {
      title: "Emergency Exits",
      description:
        "Reﬂecting on her move from New York to Toronto, the artist oﬀers an autobiographical account of peculiar obsessions and geographical transitions in this hour-long scripted performance. Performed with Simla Civelek.",
      extraInfo: "Photo Credit: David Hawe",
      imgSrc: ["./assets/images/emergency/emergency_one.jpeg"],
    },
    "./assets/images/attending/attending_one.jpeg": {
      title: "Attending",
      description:
        "Jess is stationed as a ‘full-service’ washroom attendant inside women’s public washrooms, on duty to attend to the needs of women using the facilities. Patrons can ring for service, which might include pussy wiping, tampon insertion, or provision of reading material. Additional services and supplies are oﬀered at the attend-ant’s cart including towels, lotions, hair products, and breath mints. Presented at Hysteria: A Festival of Women, Toronto; The Kitchen, New York City; Art Toronto (formerly known as The Toronto International Art Fair).",
      imgSrc: [
        "./assets/images/attending/attending_one.jpeg",
        "./assets/images/attending/attending_two.jpeg",
      ],
    },
    "./assets/images/composite/composite_one.jpeg": {
      title: "Composite Body",
      description:
        "A modiﬁed dry-erase board is used in a process of creating a self-con-structed body. The artist draws, erases, edits, and re-draws, moving through a spectrum of emotions as she considers the lines and contours of her imagined physique.",
      imgSrc: ["./assets/images/composite/composite_one.jpeg"],
    },
    "./assets/images/ontario/ontario_one.jpeg": {
      title: "An Ontario Bride Seeks American Wives",
      description:
        "Soon after Jess moves from New York to Toronto, the province of Ontario legalizes same-sex marriage. In response to this historic legislation, Jess returns to New York to exercise her newly acquired rights, marrying countless people, pets, ﬁre hydrants, and street signs. She conducts more than 50 ceremonies, with accompa-nying vows, music, confetti, rings, and signed marriage certiﬁcates stating the terms of nuptials — including that, ‘if we bump into each other in a movie ticket line, and one of us is way up near the front of the line, we will allow the other person to sneak into the line right next to us, because that’s what married people do for each other’. ",
      imgSrc: ["./assets/images/ontario/ontario_one.jpeg"],
    },
    "./assets/images/sixDegrees/sixDegrees_one.jpg": {
      title: "An Ontario Bride Seeks American Wives",
      description:
        "A meditation on the inescapable web of lesbian community, this one-woman puppet work humour-ously maps our interconnected lives.",
      extraInfo: "Image credit: Sandra Smith",
      imgSrc: ["./assets/images/ontario/ontario_one.jpeg"],
    },
    "./assets/images/twoBoobs/twoBoobs_one.jpeg": {
      title: "The Two Boobs",
      description:
        "With strings tied around nipples and faces painted on breasts, the two boobs become puppets, negotiating the complexities of their relationship in a silent movie-inspired puppet show.",
      extraInfo: "Image credit: Sandra Smith",
      imgSrc: ["./assets/images/twoBoobs/twoBoobs_one.jpeg"],
    },
    "./assets/images/waistUp/waistUp_one.jpg": {
      title: "From the Waist Up and Down",
      description:
        "One-hour of performance shena-nigans at The Rhubarb Festival, Toronto. Curated by Naomi Campbell and performed with Samantha Blanchette, Laura Kim, Simla Civelek, Arun, and Scott White on piano.",
      extraInfo: "Photo Credit: Vivain Babuts",
      imgSrc: ["./assets/images/waistUp/waistUp_one.jpg"],
    },
    "./assets/images/talk/talk_one.jpeg": {
      title: "Talk to Me",
      description:
        "A performance satirizing the use of cell phones in public spaces and the inﬁltration of modern technology in urban culture. Toting a giant hot pink papier-mâché cell phone, Jess chatters, gossips, and rants her way through New York City. For one presentation at The Kitchen Street Festival, Jess performs as a repre-sentative of a ﬁctitious service provider, oﬀering satirical service contracts and cardboard phones.",
      extraInfo: "Photo Credit: Vivain Babuts",
      imgSrc: ["./assets/images/talk/talk_one.jpeg"],
    },
    "./assets/images/oneNight/oneNight_one.jpeg": {
      title: "One Night Only",
      description:
        "An exploration of desire and fantasy in the sticky heat of a New York City summer. Performed with Vivian Babuts, Kelly Dolak, Dionne Herbert, Saira, Wazhmah Osman, and Christie White 28 July 2000 at Dixon Place.",
      extraInfo: "Photo Credit: Vivain Babuts",
      imgSrc: [
        "./assets/images/oneNight/oneNight_one.jpeg",
        "./assets/images/oneNight/oneNight_two.jpeg",
      ],
    },
    "./assets/images/mad/mad_one.jpeg": {
      title: "The Mad Chef",
      description:
        "As The Mad Chef (2000–2003), the artist challenges the conﬁnes of role and identity, breaking through internal boundaries in discovery of uncharted territories. Live and video installments have been presented at numerous venues. At the Jack Tilton Gallery in New York, audiences are invited to paint with coloured cake frosting, replicating historical masterpieces and sugar-coating arranged still lives. Cakes become canvases, to be critiqued and then eaten.",
      imgSrc: ["./assets/images/mad/mad_one.jpeg"],
    },
    "./assets/images/utopia/utopia_one.jpeg": {
      title: "Utopia Roaming",
      description:
        "Performances and workshops touring to universities, theatres, and community centres in the US and Canada (1998–2001) that explore issues of lesbian identity and community, and encourage audiences to name their dreams and desires as a ﬁrst step towards realizing them. The initial tour, performed with Eric Cho and Jayne Weber, and supported by the Astraea Foundation and the Franklin Furnace Fund for Performance Art, travelled to sixteen cities in 1998.",
      extraInfo: "Photo Credit: Vivian Babuts",
      imgSrc: [
        "./assets/images/utopia/utopia_one.jpeg",
        "./assets/images/utopia/utopia_two.jpeg",
      ],
    },
  };

  $("body").append(`
    <div class="custom-modal-overlay" style="display:none;">
      <div class="custom-modal">
        <span class="close-modal-btn"> 
          <div class="close-button-line lineOne"></div>
          <div class="close-button-line lineTwo"></div>
        </span>
        <div class="modal-content">
          <img src="" alt="Project Image" class="modal-image"> <br>
          <div class="modal-image-navigation">
            <button class="prev-image"> Previous </button>
            <span class="image-counter">1 / 1</span>
            <button class="next-image">Next </button>
          </div>
          <div class="modal-title"></div>
          <div class="modal-description"></div>
          <div class="modal-extraInfo"></div>
        </div>
      </div>
    </div>
  `);

  function showProjectModal(projectData) {
    let currentIndex = 0;

    updateModalContent(projectData, currentIndex);

    $(".custom-modal-overlay").fadeIn(300);

    $(".next-image")
      .off("click")
      .on("click", function () {
        if (currentIndex < projectData.imgSrc.length - 1) {
          currentIndex++;
          updateModalContent(projectData, currentIndex);
        }
      });

    $(".prev-image")
      .off("click")
      .on("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateModalContent(projectData, currentIndex);
        }
      });
  }

  $(document).on("click", ".event-title", function () {
    const projectTitle = $(this).text().trim();

    const projectData = Object.values(projectContent).find(
      (project) => project.title === projectTitle
    );

    if (!projectData) {
      console.error("No content found for project title:", projectTitle);
      return;
    }

    showProjectModal(projectData);
  });

  $(document).on("click", ".projects-container .project", function () {
    const imgSrc = $(this).find("img").attr("src");

    const projectData = Object.values(projectContent).find((project) =>
      project.imgSrc.includes(imgSrc)
    );

    if (!projectData) {
      console.error("No content found for image source:", imgSrc);
      return;
    }

    showProjectModal(projectData);
  });

  $(".close-modal-btn").on("click", function () {
    $(".custom-modal-overlay").fadeOut(300);
  });

  $(".custom-modal-overlay").on("click", function (e) {
    if ($(e.target).hasClass("custom-modal-overlay")) {
      $(".custom-modal-overlay").fadeOut(300);
    }
  });

  function updateModalContent(projectData, index) {
    $(".modal-image").attr("src", projectData.imgSrc[index]);
    $(".modal-title").text(projectData.title);
    $(".modal-description").text(projectData.description);
    $(".modal-extraInfo").text(projectData.extraInfo || "");
    $(".image-counter").text(`${index + 1} / ${projectData.imgSrc.length}`);
  }
});
