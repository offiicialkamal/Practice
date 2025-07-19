let divisition1 = document.createElement("div");
    divisition1.id = 'div1';
    divisition1.className = 'box';

    let header_box1 = document.createElement('h1');
        header_box1.id = 'heading-box1';
        header_box1.className = 'heading-box1';
        header_box1.align  = "center";

        let underline_text = document.createElement('u');
            underline_text.innerHTML = "  APPLICATION 1  ";
            header_box1.appendChild(underline_text)

    let ones_innner_box = document.createElement("div");
        ones_innner_box.id = "inner_boxe1";
        ones_innner_box.className = "inner_boxes";
        divisition1.appendChild(header_box1);
        divisition1.appendChild(ones_innner_box);


let divisition2 = document.createElement('div');
    divisition2.id = "div2";
    divisition2.className = 'box';
    let header_box2 = document.createElement('h1');
        header_box2.id = 'heading-box1';
        header_box2.className = 'heading-box1';
        header_box2.align  = "center";

        let underline_text2 = document.createElement('u');
            underline_text2.innerHTML = "  APPLICATION 2  ";
            header_box2.appendChild(underline_text2)

    let ones_innner_box2 = document.createElement("div");
        ones_innner_box2.id = "inner_boxe1";
        ones_innner_box2.className = "inner_boxes";
        divisition2.appendChild(header_box2);
        divisition2.appendChild(ones_innner_box2);


let upper_heading = document.createElement("h1");
    upper_heading.id = "first_header";
    upper_heading.className = "top_heading";
    upper_heading.innerHTML = " WELCOIME TO EXAMPLES WORLD";
    upper_heading.align = "center";

let paragraph = document.createElement("p");
    paragraph.align = "center";
    paragraph.textContent =  "hear  ill design the alll things prov9iided b yb shiva kumar sir"

document.body.appendChild(upper_heading)
document.body.appendChild(paragraph)
document.body.appendChild(divisition1);
document.body.appendChild(divisition2);
