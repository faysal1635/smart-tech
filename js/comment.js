function post_comment() {
    // name_val = "Faysal Bhai";
    // comment_val = "Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire!";
    name_val = document.getElementById("name-id").value;
    comment_val = document.getElementById("comment").value;
    make_comment(name_val, comment_val);

    document.getElementById("name-id").value = "";
    document.getElementById("comment").value = "";
}

function make_comment(name, comment) {
    name_val = name;
    comment_val = comment;


    blog_content = document.createElement('div');
    blog_content.className = "blog-comments-content";
    media = document.createElement('div');
    media.className = "media";
    name_div = document.createElement('div');
    name_div.className = "media-body";
    name_header = document.createElement('div');
    name_header.className = "media-heading";
    h_4 = document.createElement('h4');
    h_4.innerText = name_val;
    name_header.appendChild(h_4);
    comment_para = document.createElement('p');
    comment_para.innerText = comment_val;



    name_div.appendChild(name_header);
    name_div.appendChild(comment_para);
    media.appendChild(name_div);
    blog_content.appendChild(media);

    document.getElementById("blog-comments").appendChild(blog_content);
}