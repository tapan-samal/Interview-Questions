 <h1 >HTML Interview Questions</h1>
    <h3>1. What is HTML...?</h3>
    <p>
         HTML stands for Hypertext Markup Language and is the language of the World Wide Web(WWW/Internet). <br>
         HTML is the standard markup language used for creating and structuring the web pages. <br>
         It is the backbone of the web for create an interactive and visually appealing web by conjunction with CSS and JavaScript. <br>
         It provides a set of elements or tags that define the structure and content of a web page. <br>
    </p>
    <h3>2. Difference between HTTP and HTTPS …?</h3>
    <p>
         HTTP stands for Hypertext Transfer Protocol. <br>
         HTTPS stands for Hypertext Transfer Protocol Secure. <br>
         The main difference between HTTP and HTTPS lies in their level of security and the way data is transmitted over the internet.
    </p>
    <h3>3. Who load first in the browser HTML, CSS or JavaScript …?</h3>
    <p>
        The order of execution in a web browser is typically complex: <br>
         The HTML is loaded and parsed first with construction of the DOM. <br>
         CSS processing and applying styles to the DOM elements. <br>
         JavaScript execution and interaction with the DOM.
    </p>
    <h3>4. What are the features introduced of HTML5…? Imp</h3>
    <p>
         HTML5 is the fifth and latest version of the Hypertext Markup Language used to structure the content of web.<br>
         It includes new elements, attributes, and APIs that provide better multimedia support, improved semantics, and enhanced functionality.
    </p>
    <h3>5. Explain the DOCTYPE in HTML …? Imp</h3>
    <p>
         In HTML, the DOCTYPE declaration is used to specify the version of HTML being used in a document. <br>
         It is an instruction placed at the very beginning of an HTML document to inform web browsers about the type and version of HTML being used. <br>
         It allow the browser to interpret and render the document correctly.
    </p>
    <h3>6. What is Semantic Elements in HTML...? Imp</h3>
    <p>
         Sementic Elements in HTML are introduced in HTML5. <br>
         Semantic elements are tags that clearly describes its meaning about the structure and content of document to both the browser and the developer. <br>
         Semantic elements help improve accessibility, search engine optimization (SEO), and overall code maintainability. <br>
         Example of Semantic elements: header, footer, main, article, details, nav, section, aside, time and summary. <br>
         Example of Non-semantic elements: div, span and br.
    </p> 
    <h3>7. What is the importance of label element in HTML form...? Imp</h3>
    <p>
         The label element in an HTML form is used to provide a textual description. <br>
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      <h3>21. What is CSS and how it is important to web development...?</h3>
    <p>
         CSS stands for Cascading Style Sheets. <br>
         It describes how HTML elements are to be displayed on screen, paper, or in other media. <br>
         It is used to control the layout and appearance of web pages. <br>
         External stylesheets are stored in CSS extension. <br>
         Importance of CSS: <br>
        > It makes web pages flexible and responsiveness for comupter to mobile applioction. <br>
        > It saves a lot of work, by controlling multiple web pages at once. <br>
        > It makes easier to maintain and update the styling of a website. <br>
        > Improve page load time, by separating CSS file from HTML document. <br>
    </p>
    <h3>22. Difference between Inline CSS, Internal CSS and External CSS …? Imp</h3>
    <p>
        Inline CSS: <br>
         Inline CSS involves applying styles directly to individual HTML elements using the `style` attribute. <br>
         It is used for quick and simple styling changes to specific elements.<br>
         It has the highest priority <br>
         Syntax: style = property: "value"; <br><br>
        Internal CSS: <br>
         Internal CSS is used to define CSS by the style tags within the head section of an HTML document.<br>
         It allows to specify styles for multiple elements in a single place. <br>
         It can become an issue for larger projects with many pages. <br>
         It has the second-highest priority. <br>
        <!--  Syntax: <style> selector{property: "value"}</style> -->    
        External CSS: <br>
         External CSS involves creating a separate CSS file with .css extension and linking it to an HTML document within the head section. <br>
         It allows for easy maintenance and reusability, as the same CSS file can be linked to multiple HTML documents.<br>
         This approach is ideal for larger projects. <br>
         The link tag has the lowest priority in CSS. But the keyword ” ! important” as a last resort will override and to try to resolve conflicting styles.
        <!--  Syntax: <link rel="stylesheet" href="styles.css"> -->
    </p>
    <h3>23. Explain the Position property with different values in CSS...? Imp</h3>
    <p>
         Relative :  <br>
        > An element with position: relative; is positioned relative to its normal position in the document flow. <br>
        > It allow top, right, bottom or left properties to change the element's position. <br>
        > position: relative plays as a parent component of position: absolute.<br><br>
         Absolute : <br>
        > An element with position: absolute; is positioned relative to the nearest positioned ancestor. <br>
        > If an absolute positioned element has no positioned ancestors, it uses the document body and move accordingly. <br>
        > Absolute positioned elements are removed from the normal flow, and can overlap elements. <br><br>
         Fixed : <br>
        > An element with position: fixed; is positioned relative to the viewport. <br>
        > It always stays in the same place even if the page is scrolled. <br>
        > The top, right, bottom, and left properties are used to position the element.
         Sticky : <br>
        > An element with position: sticky; is positioned based on the user's scroll position. <br>
        > A sticky element toggles between relative and fixed, depending on the scroll position. 
    </p>  
    <h3>24. What is Box model in CSS and explain about it components...? Imp</h3>
    <p>
         The CSS box model is essentially a box that wraps around every HTML element. <br>
         It is a fundamental concept in CSS that describes how elements on a web page are structured and how their dimensions are calculated. <br>
         The box model consists of four components for each HTML element: <br> <br>
        > Content : The content of the box, where text and images appear. <br>
        > Padding : A transparent space between the content and border. It helps create space around the content. <br>
        > Border : A visible line or boundary around the padding and content. It separates the content from the margin. <br>
        > Margin : The margin is the space outside the border and creating separation between the elements.
    </p>
    <h3>25. What are the differences between display block, display inline and display inline-block properties...? Imp</h3>
    <p>
         Display Block: Block-level elements always start with a new line and take up the full width available. <br>
         Display Inline: Inline elements do not start with a new line and only take up as much width as requires. <br>
         Display Inline-block: Inline-block element used for creating inline elements with block-level properties with set width and height. <br>
    </p>
    <h3>26. What is the difference between "display: none" and "visible: hidden" in CSS...? Imp</h3>
    <p>
         Display: none, removes the space from view and hide the element for the web page. <br>
         Visible: hidden, does not removes the space from the page, but hides the element from web page.
    </p>
    <h3>27. What is Flex box  and explain some properties in CSS...?</h3>
    <p>
         Flexbox is a layout model in CSS that allows to design complex layouts more efficiently and with predictable structure. <br>
         It helps to designing dynamic and responsive user interfaces. <br>
         Key properties in flexbox: <br>
        > Display : "flex"; <br>
        > Flex-direction: "row/row-reverse/column/column-reverse"; <br>
        > Justify-content: "space-between/flex-start/flex-end/center/space-around"; <br>
        > Align-items: "center/flex-start/flex-end/stretch/baseline"; <br>
        > Align-content: "space-between/flex-start/flex-end/center/space-around/stretch"; <br>
        > Flex-wrap: "wrap/nowrap/wrap-reverse";
    </p>
    <h3>28. What are the CSS selectors...? Imp</h3>
    <p>
         Element Selector:
         ID Selector:
         Class Selector:
         Universal Selector:
    </p>
    <h3>30.What is the purpose of z-index and how is it used...? Imp</h3>
    <p>
         The z-index helps to specify the stack order of positioned elements that may overlap one another. <br>
         The z-index default value is zero and can take also positive or negative number.
    </p>
    <h3>31. What is meant by RGB stream...?</h3>
    <p>
         RGB represents colors in CSS. <br>
         The three streams are namely Red, Green and Blue. <br>
         The intensity of colors is represented using numbers 0 to 256.
    </p>
    <h3>32. What is  Void/Empty Element in HTML...? Imp</h3>
    <p>
         Some elements have no content are called void elements. <br>
         Such as img, br, input, link, meta tag.
    </p>
