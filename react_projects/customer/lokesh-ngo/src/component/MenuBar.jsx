import React, { Component } from "react";
import NewsFeed from "./NewsFeed";
import "../style/MenuBar.css";
class MenuBar extends Component {
  state = {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien\
       nec sagittis aliquam malesuada. Faucibus in ornare quam viverra orci.\
       Aenean pharetra magna ac placerat vestibulum lectus mauris. Leo vel orci\
       porta non pulvinar neque laoreet suspendisse. Tortor condimentum lacinia\
       quis vel eros. Elit sed vulputate mi sit amet mauris commodo. Dignissim \
       enim sit amet venenatis urna cursus eget nunc scelerisque. Amet justo donec\
       enim diam vulputate ut pharetra sit amet. Vel fringilla est ullamcorper eget \
       nulla. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Nec sagittis\
       aliquam malesuada bibendum. Vel fringilla est ullamcorper eget nulla facilisi. Nullam \
       vehicula ipsum a arcu. Ante in nibh mauris cursus. Interdum velit euismod in pellentesque \
       massa. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus a pellentesque \
       sit amet porttitor eget dolor morbi. Enim diam vulputate ut pharetra sit amet aliquam\
      Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Imperdiet\
       sed euismod nisi porta. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. \
       Vulputate mi sit amet mauris commodo quis. Tempus egestas sed sed risus pretium quam \
       vulputate dignissim suspendisse. Laoreet non curabitur gravida arcu ac tortor dignissim.",
  };
  getHomeData = () => {
    let content =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien\
    nec sagittis aliquam malesuada. Faucibus in ornare quam viverra orci.\
    Aenean pharetra magna ac placerat vestibulum lectus mauris. Leo vel orci\
    porta non pulvinar neque laoreet suspendisse. Tortor condimentum lacinia\
    quis vel eros. Elit sed vulputate mi sit amet mauris commodo. Dignissim \
    enim sit amet venenatis urna cursus eget nunc scelerisque. Amet justo donec\
    enim diam vulputate ut pharetra sit amet. Vel fringilla est ullamcorper eget \
    nulla. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Nec sagittis\
    aliquam malesuada bibendum. Vel fringilla est ullamcorper eget nulla facilisi. Nullam \
    vehicula ipsum a arcu. Ante in nibh mauris cursus. Interdum velit euismod in pellentesque \
    massa. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus a pellentesque \
    sit amet porttitor eget dolor morbi. Enim diam vulputate ut pharetra sit amet aliquam\
   Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Imperdiet\
    sed euismod nisi porta. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. \
    Vulputate mi sit amet mauris commodo quis. Tempus egestas sed sed risus pretium quam \
    vulputate dignissim suspendisse. Laoreet non curabitur gravida arcu ac tortor dignissim.";
    this.setState({ content });
  };
  getAboutData = () => {
    let content =
      " Until recently, the prevailing view assumed lorem ipsum was born as a\
      nonsense text. “It's not Latin, though it looks like it, and it actually\
      says nothing,” Before & After magazine answered a curious reader, “Its\
      ‘words’ loosely approximate the frequency with which letters occur in\
      English, which is why at a glance it looks pretty real.” As Cicero would\
      put it, “Um, not so fast.” The placeholder text, beginning with the line\
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like\
      Latin because in its youth, centuries ago, it was Latin. Richard\
      McClintock, a Latin scholar from Hampden-Sydney College, is credited with\
      discovering the source behind the ubiquitous filler text. In seeing a\
      sample of lorem ipsum, his interest was piqued by consectetur—a genuine,\
      albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a\
      passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and\
      Evil”), a first-century B.C. text from the Roman philosopher Cicero. In\
      particular, the garbled words of lorem ipsum bear an unmistakable\
      resemblance to sections 1.10.32–33 of Cicero's work, with the most notable\
      passage excerpted below: “Neque porro quisquam est, qui dolorem ipsum quia\
      dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius\
      modi tempora incidunt ut labore et dolore magnam aliquam quaerat\
      voluptatem.” A 1914 English translation by Harris Rackham reads: “Nor is\
      there anyone who loves or pursues or desires to obtain pain of itself,\
      because it is pain, but occasionally circumstances occur in which toil and\
      pain can procure him some great pleasure.” McClintock's eye for detail\
      certainly helped narrow the whereabouts of lorem ipsum's origin, however,\
      the “how and when” still remain something of a mystery, with competing\
      theories and timelines.";
    this.setState({ content });
  };
  getMembersData = () => {
    let content =
      "L So how did the classical Latin become so incoherent? According to\
      McClintock, a 15th century typesetter likely scrambled part of Cicero's De\
      Finibus in order to provide placeholder text to mockup various fonts for a\
      type specimen book. It's difficult to find examples of lorem ipsum in use\
      before Letraset made it popular as a dummy text in the 1960s, although\
      McClintock says he remembers coming across the lorem ipsum passage in \
      book of old metal type samples. So far he hasn't relocated where he once\
      saw the passage, but the popularity of Cicero in the 15th century supports\
      the theory that the filler text has been used for centuries. And anyways,\
      as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses\
      were hiring classics scholars in the 1960s?” Perhaps. But it seems\
      reasonable to imagine that there was a version in use far before the age\
      of Letraset. McClintock wrote to Before & After to explain his discovery;\
      “What I find remarkable is that this text has been the industry's standard\
      dummy text ever since some printer in the 1500s took a galley of type and\
      scrambled it to make a type specimen book; it has survived not only four\
      centuries of letter-by-letter resetting but even the leap into electronic\
      typesetting, essentially unchanged except for an occasional 'ing' or 'y'\
      thrown in. It's ironic that when the then-understood Latin was scrambled,\
      it became as incomprehensible as Greek; the phrase 'it's Greek to me' and\
      'greeking' have common semantic roots!” (The editors published his letter\
      in a correction headlined “Lorem Oopsum”). As an alternative theory, (and\
      because Latin scholars do this sort of thing) someone tracked down a 1914\
      Latin edition of De Finibus which challenges McClintock's 15th century\
      claims and suggests that the dawn of lorem ipsum was as recent as the 20th\
      century. The 1914 Loeb Classical Library Edition ran out of room on page\
      34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the\
      truncated phrase leaves one page dangling with “do-”, while another begins\
      with the now ubiquitous “lorem ipsum”. Whether a medieval typesetter chose\
      to garble a well-known (but non-Biblical—that would have been\
      sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a\
      graphic designer, it's admittedly an odd way for Cicero to sail into the\
      21st century.";
    this.setState({ content });
  };
  getPaymentData = () => {
    let content =
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in\
          laying out print, graphic or web designs. The passage is attributed to\
          an unknown typesetter in the 15th century who is thought to have\
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a\
          type specimen book. It usually begins with: “Lorem ipsum dolor sit\
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
          labore et dolore magna aliqua.” The purpose of lorem ipsum is to\
          create a natural looking block of text (sentence, paragraph, page,\
          etc.) that doesn't distract from the layout. A practice not without\
          controversy, laying out pages with meaningless filler text can be very\
          useful when the focus is meant to be on design, not content. The\
          passage experienced a surge in popularity during the 1960s when\
          Letraset used it on their dry-transfer sheets, and again during the\
          90s as desktop publishers bundled the text with their software. Today\
          it's seen all around the web; on templates, websites, and stock\
          designs. Use our generator to get your own, or read on for the\
          authoritative history of lorem ipsum.";
    this.setState({ content });
  };
  getContactData = () => {
    let content =
      "Amet risus nullam eget felis eget nunc. Mollis aliquam ut porttitor leo. \
      Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ac odio \
      tempor orci dapibus ultrices in iaculis. Suscipit tellus mauris a diam mae\
      cenas. Quis auctor elit sed vulputate mi. Sodales neque sodales ut etiam si\
      t amet nisl. Aliquam id diam maecenas ultricies mi eget. Cras sed felis eget\
      velit aliquet sagittis id consectetur. Interdum consectetur libero id faucibus\
      nisl tincidunt eget nullam non. Nunc eget lorem dolor sed viverra ipsum. Risus \
      ultricies tristique nulla aliquet enim. Arcu vitae elementum curabitur vitae nunc. \
      Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Enim nulla aliquet \
      porttitor lacus luctus accumsan tortor. Platea dictumst vestibulum rhoncus est pellen\
      tesque elit ullamcorper dignissim cras.Egestas quis ipsum suspendisse ultrices gravida\
      dictum fusce ut placerat. Cras sed felis eget velit aliquet. Elementum tempus egestas sed\
      sed. Urna porttitor rhoncus dolor purus non enim praesent. Mi proin sed libero enim sed fa\
      ucibus turpis. Tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae tempus quam \
      pellentesque nec nam aliquam. Nam libero justo laoreet sit amet cursus sit. Amet nisl susc\
      ipit adipiscing bibendum. Nec feugiat nisl pretium fusce id. Eu augue ut lectus arcu bibend\
      um at varius vel. Ornare aenean euismod elementum nisi. Sagittis eu volutpat odio facilisis \
      mauris sit amet massa. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Comm\
      odo ullamcorper a lacus vestibulum sed. Nec nam aliquam sem et. Ut morbi tincidunt augue inter\
      dum velit euismod in pellentesque.";
    this.setState({ content });
  };
  render() {
    return (
      <div>
        <div className="menu-bar">
          <div className="menu-bar-link col-sm-1">
            <button className="btn btn-primary" onClick={this.getHomeData}>
              Home
            </button>
          </div>
          <div className="menu-bar-link col-sm-1">
            <button className="btn btn-primary" onClick={this.getAboutData}>
              About
            </button>
          </div>
          <div className="menu-bar-link col-sm-1">
            <button className="btn btn-primary" onClick={this.getMembersData}>
              Members
            </button>
          </div>
          <div className="menu-bar-link col-sm-1">
            <button className="btn btn-primary" onClick={this.getPaymentData}>
              Payment
            </button>
          </div>
          <div className="menu-bar-link col-sm-1">
            <button className="btn btn-primary" onClick={this.getContactData}>
              Contact
            </button>
          </div>
        </div>
        <div className="content">{this.state.content}</div>
      </div>
    );
  }
}

export default MenuBar;
