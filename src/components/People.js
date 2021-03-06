import React, { Component } from 'react';
import Person from './Person';
import './People.css';

class People extends Component {
  render() {
    return (
      <section className="People">
        <Person picture="https://ep01.epimg.net/tecnologia/imagenes/2017/01/09/actualidad/1483980291_213857_1483980952_noticia_normal.jpg" 
        altText="Margaret Hamilton Apolo code" 
        name="Margaret Hamilton" 
        country="USA" 
        tags="women tech" 
        history="She is credited with coining the term, 'software engineering'. Also she was Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program." 
        dates="17/08/1936"
        link="https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)"
        ></Person>
        <Person picture="https://blogs.elpais.com/.a/6a00d8341bfb1653ef019102e35f9c970c-320wi" 
        altText="Alan Turing creator of the Turing machine" 
        name="Alan Turing" 
        country="UK" 
        tags="lgtbi+ maths tech" 
        history="Turing is often credited as being the key founder of theoretical computer science and artificial intelligence. The highest distinction in computer science and the 'Nobel Prize of computing' is named after him (https://en.wikipedia.org/wiki/Turing_Award). 
        Creator of the Turing machine. He participated in the WW2 helping the allys by decrypting the secret code that Nazi army used. At the upper end it has been estimated that this work shortened the war in Europe by more than two years and saved over fourteen million lives.
        Turing was prosecuted in 1952 for homosexual acts, which was a criminal offence in the UK. He accepted chemical castration treatment, as an alternative to prison. Turing died from cyanide poisoning." 
        dates="23/09/1912"
        link="https://en.wikipedia.org/wiki/Alan_Turing"
        ></Person>

      </section>
    );
  }
}

export default People;
