import React from "react";
import "../styles/Home.sass";
import logo from "../img/home/home1.jpg";

const Home = () => {
  const description = "Drawing & Print - level I";
  let delay = 0.1;
  const letters = [...description].map((letter) => {
    delay += 0.1;
    return (
      <span
        className="letter"
        key={delay}
        style={{ animationDelay: `${delay}s` }}
      >
        {letter}
      </span>
    );
  });
  return (
    <section className="mainSection homeSection">
      <section className="headers">
        <h1>Magdalena Dolatowska</h1>
        <h2>{letters}</h2>
      </section>

      <section className="logoContainer">
        <img src={logo} alt="" className="logo" />{" "}
      </section>
      <h3>
        Curiosities -{" "}
        <span style={{ textTransform: "none" }}>
          ‘Perfectionism is after me!’
        </span>
      </h3>
      <article className="article">
        <p>
          I was very happy to hear that the second semester allows us to pursue
          things that interest us. That we have time, space and tools to explore
          ideas. This has always been my dream. However, my excitement quickly
          blurred into anxiety. I felt overwhelmed by all the possibilities, I
          wanted to try everything and explore all my ideas. And there was
          another thing - whenever I had an idea I quickly judged it as ‘not
          good enough’. I wanted to do something that resonates with me
          entirely, and conveys everything that is important to me - exciting
          ideas that connect deeply with audience, and a style that consists of
          my favourite techniques that I haven’t even discovered yet. I set
          myself a very difficult task of producing something perfect. I also
          wanted to explore everything. Just a little bit of EVERYTHING, to have
          a bigger picture of all the things that are available to me. And I
          thought that it is all doable, I would just have to manage my time and
          myself well.
        </p>
        <p>
          I started with a mind map, which was supposed to help me to organize
          my ideas. I felt that during the last semester I haven’t produced
          enough work, probably the reason was overthinking it. That’s why this
          time I wanted to pick a subject quickly and start producing drawings.
          As I am interested in psychology, I picked ‘emotional intelligence’ as
          my subject matter. Since I discovered that new studies identified 27
          categories of emotion I wanted to illustrate them. I thought that I
          could spend a period of time on each emotion and study the psychology
          and also find ways in which I could visualize the meaning and feeling.
          I wanted to make artworks that would be relatable. I think that
          emotional intelligence is a very useful skill and spreading knowledge
          on this subject is something worthwile. My goal was to make a guide, a
          visually pleasing book of emotions. I did 2 collages, but I wasn’t
          happy with them. I was feeling a big pressure. I had very big plans,
          and I wasn’t able to enjoy the process. Finally, I decided that my
          knowledge on emotional intelligence isn’t sufficient to realise this
          idea in depth. I tend to spend more time analyzing, thinking, planning
          than doing actual work. I thought this was a very inefficient way to
          learn drawing and painting, and setting myself a task of learning the
          psychology of emotions was a good way of distracting myself from what
          was important to me - developing practical skills. At this point I was
          keen on becoming a book illustrator, but the idea was fairly new and I
          wasn’t sure what, how and if I’m sure. I picked a poem which I found
          quite interesting to illustrate, and I tried to produce some work.
          However, T didn’t feel strong about the text, I started to feel bored
          with it and I wanted to pursue something more challenging. So I
          started to reflect on what is important to me, or funny or just worth
          exploring. I wanted to know what to do, and more importantly what I
          REALLY want to do. And how to do it. I think that it is quite easy for
          me to come up with ideas and then suffer from an excess of them. And
          whenever I am willing to pick one and convert it in an actual artwork,
          I quickly judge it harshly and label it as ‘not good enough’. This
          attitude isn’t very conducive to developing actual skills. I wasn’t
          sure what to do. I went to the library at Bower in order to find
          something that would give me a hint. Agnieszka showed me ‘artist book’
          section, which inspired me to pursue a career in illustration. I found
          all those books very adorable. There were raising various topics, from
          important ones to the most trivial. It occured to me that I like
          casual subjects mixed with a dose of self-/reflection. Looking through
          artist’s books made me more confident in pursuing my interests. So I
          decided to take a step back from all my ideas and… make a comics about
          me trying to figure out what I want to do for this project. It seemed
          to be perfect. I was still free to explore many ideas and I could
          touch each of them very briefly - not commiting - simultaneously
          having a structure and a clear end goal. I knew where to go and I
          could visit all the interesting places on the way! A piece of cake!
        </p>
        <p>
          I took a small sketchbook everywhere I went, to write down the more
          exciting ideas and the general storyboard. The title was: ‘The short
          story of how I tried to discover what I want to do’. There was a
          villain in the story called ‘Perfectionism’, which I consider one of
          the biggest obstacles to my productivity. This character allowed me to
          pick and idea, illustrate it, add it to my book, and then change it
          and move to another idea... whenever ‘Perfectionism’ was coming after
          me. I could run away and leave it and have a very good excuse. I also
          thought that the idea for this comics was a great way to become more
          familiar with this annoying ‘creature’.
        </p>
        <p>
          Obviously, my initial idea for the storyboard was too complicated. I
          set myself a goal of becoming a professional illustrator by the time I
          graduate (2,5 years). I wanted to learn by myself as much I can
          (everything), in a very short period of time with practically no
          knowledge of the industry. I wanted to include in my comics a bit of
          everything. I planned to write an action story (which is totally not
          my cup of tea) and possibly try all technical styles of
          drawing/printmaking that I like or I would like if I knew that they
          exist. With 3 months to go… it felt very overwhelming. And I didn’t
          even know where to begin.
        </p>
        <p>Well, the ‘Perfectionism’ monster showed his teeth again.</p>
        <p>
          So I cut the story down to its essence, to a countable number of pages
          - 15.
        </p>
        <p>
          As I personally find the subject matter quite heavy, I decided to make
          the story possibly light and funny. Every page is an attempt to try
          something different in terms of technique and materials. The overall
          style is inconsistent, but at this point I’m letting it be by no means
          PERFECT.
        </p>
      </article>
    </section>
  );
};

export default Home;
