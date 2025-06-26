import { UtrechtButtonLink, UtrechtHeading1, UtrechtHeading2, UtrechtAlert, UtrechtTextbox, UtrechtButtonGroup, UtrechtParagraph } from "@utrecht/web-component-library-react";
import { Accordion, AccordionSection } from "@utrecht/component-library-react"
import { useState } from "react";

function NLDSComponenten(){

    const [toggle, setToggle] = useState(false)

    return (
        <main>
        <UtrechtHeading1>Heading 1</UtrechtHeading1>
        <UtrechtHeading2>Heading 2</UtrechtHeading2>
        <UtrechtAlert type='error'>Deze melding werkt niet omdat de benaming 'error' is en wij 'negative' gebruiken. --utrecht-alert-error-background-color / --utrecht-alert-negative-background-color</UtrechtAlert>
        <UtrechtTextbox placeholder="Dit is een textbox-component"></UtrechtTextbox>
        <Accordion  body={UtrechtParagraph}>
        <AccordionSection headingLevel={3} expanded={toggle} label='Accordion' onClick={() => setToggle(!toggle)}>
            <UtrechtParagraph>text</UtrechtParagraph>
        </AccordionSection>
        </Accordion>
        <UtrechtButtonGroup>
            <UtrechtButtonLink type='submit' appearance='primary-action-button' href="http://localhost:3000/buttontest">Primary button</UtrechtButtonLink>
            <UtrechtButtonLink type='submit' appearance='secondary-action-button' href="http://localhost:3000/buttontest">Secondary button</UtrechtButtonLink>
        </UtrechtButtonGroup>

    </main>
    );
}

export default NLDSComponenten