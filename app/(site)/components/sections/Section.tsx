import { ReactNode } from "react";
import { Heading } from "../ui/Heading";
import { Container } from "../ui/Container";

/** Section wrapper – consistent rhythm + anchor id. */
export default function Section({ id, title, children }:{ id?:string; title:string; children:ReactNode; }){
  return (
    <section id={id} className="py-10 sm:py-14">
      <Container>
        <Heading>{title}</Heading>
        <div className="mt-5">{children}</div>
      </Container>
    </section>
  );
}
